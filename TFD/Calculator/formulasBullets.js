const bullets = {
    getCurrentRateAdjustments(tableCopy,baseRateValue,isStaticRate,skipCoreValues) {
        //cap fire rate at -95% in case we actually get that high later
        const rateAdjustment = isStaticRate ? 0 : Math.max(-0.95,tableCopy.FireRate + (skipCoreValues ? 0 : tableCopy.FireRateCORE));
        const adjustedRateValue = baseRateValue / (1 + rateAdjustment);
        const modifiedRate = 60/adjustedRateValue;

        return {adjustedRateValue,modifiedRate}
    },
    applyStats(bonusEntry, tableCopy, constructorObject, timesUsed, reversedBonus, invertBonusRemoval) {
        for (let stat of bonusEntry.stats) {
            const valueToGive = stat.subStackValue && timesUsed>1 ? stat.subStackValue : stat.value;
            tableCopy[stat.name] += valueToGive * (invertBonusRemoval ? -1 : 1);
            //if we flip the bonus to only be applied on the single shot and not after, then push the bonus to memory to reverse later
            if (reversedBonus) {constructorObject.bonusesMemory.push([stat.name, stat.value]);}
        }
        if (constructorObject) {
            constructorObject.bonusesApplied.push(`${bonusEntry.bonusName} [x${timesUsed}]`);
        }
    },
    scrubCoreBonuses(tableCopy) {
        //scrub the weapon core values from a unique weapon iteration
        let tableKeys = Object.keys(tableCopy);
        for (let entry of tableKeys) {
            if (entry.includes("CORE")) {
                tableCopy[entry] = 0;
            }
        }
    },
    parseSettingsObject(settingsObject) {
        //this is a multiplier like zenith for firearmATK
        let atkMulti = settingsObject ? settingsObject.atkMulti || null : null;
        //a switch to bring the loops over weapon bonuses that can modify abilities, or just weapon only bonuses
        let bonusReference = settingsObject ? settingsObject.limitedWeaponAbilityBonuses || settingsObject.limitedWeaponBonuses : settingsObject.limitedWeaponBonuses;
        //is the fire rate fixed or modified
        let isStaticRate = settingsObject ? settingsObject.isStaticRate : false;
        //reference skill dmg function
        let referenceFunction = settingsObject ? settingsObject.referenceFunction : null;
        //special weapon functions like hailey cryo, applies to firearm dmg
        let specialGunFunction = settingsObject ? settingsObject.specialGunFunction : null; 
        //special skill function for things like firearm master on lepic overkill
        let specialSkillFunction = settingsObject ? settingsObject.specialSkillFunction : null; 
        //wasted time duration for things like roll cancel on lepic or freyna unique weapon
        let wastedTimeSkill = settingsObject ? settingsObject.wastedTimeSkill || 0 : 0; 
        //a toggle for whether firearm dmg should be included in the resulting bullet array. Lepic, for example, is skill only.
        let skillOnly = settingsObject ? settingsObject.skillOnly : false; 
        //Normally shell count is determined by the weapon reference, but overkill or zenith have a shell count of 1 instead of inheritance
        let shellCountOverride = settingsObject ? settingsObject.shellCountOverride : null;
        //weapon cores don't apply to unique ability weapons, as such we need to scrub the values when we do this for abilities.
        let skipCoreValues = settingsObject ? settingsObject.skipCoreValues : null;
        //if passed through, reloads get completely disabled. Mainly for use with unique skill weapons.
        let skipReloads = settingsObject ? settingsObject.noReloads : null;
        //are we on a duration restricted ability, or are we going off of mag size
        //the duration is 0 if mag size, but a defined number otherwise
        let durationRestriction = settingsObject ? settingsObject.durationRestriction : 0;
        // referenceFunction(index,returnObject,isCycleCalcs,nameOverride)

        return {atkMulti,bonusReference,isStaticRate,referenceFunction,specialGunFunction,specialSkillFunction,wastedTimeSkill,skillOnly,
            shellCountOverride,skipCoreValues,skipReloads,durationRestriction
        }
    },
    getActiveBulletArray(index,returnObject,isCycleCalcs,nameOverride,baseRateValue,actualMagSize,weaponRef,settingsObject) {
        
        let shotCount = 0;
        let priorShotCount = 0;
        let usedMagazine = 0;
        let nextShotTime = 0;
        let bulletsArray = [];
        const tableCopy = {...index};
        let timeSinceReload = 0;
        let timeOfLastReload = 0;

        //get all the settings for this cycle established
        const {atkMulti,bonusReference,isStaticRate,referenceFunction,specialGunFunction,specialSkillFunction,wastedTimeSkill,skillOnly,
            shellCountOverride,skipCoreValues,skipReloads,durationRestriction} = bullets.parseSettingsObject(settingsObject);

        for (let entry of bonusReference) {
            const bonusBaseRef = entry.bonusArray;
            
            for (let bonusEntry of bonusBaseRef) {
                //wastedTimeSkill is only for time wasted benefits like roll canceling on lepic overkill or freyna baptism
                //this will be negated at the very end in another similar for loop
                if (bonusEntry.duration) {bonusEntry.duration -= wastedTimeSkill;}
            }
        }
        
        let timePassed = 0;
        //if a bonus is found that is initial + duration, apply the bonus to the tablecopy before the cycles begin so it can be found for stuff like gley super senses fixed fire rate
        //and then later in the cycles when the duration expires, reverse the bonus
        for (let entry of bonusReference) {
            const bonusBaseRef = entry.bonusArray;
            for (let bonusEntry of bonusBaseRef) {
                if (bonusEntry.oneTimeOrStack === "durationInitial"){bullets.applyStats(bonusEntry, tableCopy, null, entry.timesUsed, false);}
            }
        }
        let initialReversed= false;

        const hasFirearmDamage = !skillOnly;//for conditions, shit that only deals skill damage can't proc something like payout
        const reloadsAllowed = !skipReloads && globalRecords.weapon.USEWeaponReloads;
        const customReloadsAllowed = reloadsAllowed && globalRecords.weapon.USEWeaponReloadsCustom;
        const customReloadTimer = globalRecords.weapon.USEWeaponReloadsCustomTimer;
        const MagCount = globalRecords.weapon.USEMagazineCount;
        let magsUsed = 0;
        let reloadShotDelayApplied = true;
        //for something with a plain cooldown, like weak point expansion, the duration acts as if the reload isn't the same as waiting
        //so we need to track how much time is spent in the reload/ready state and use it to offset the durations used on cooldown effects
        let reloadDurationOffset = 0;
        while (usedMagazine < actualMagSize) {
            let cyclesBaseFireRate = baseRateValue;
            let cyclesFixedRate = isStaticRate;

            // //in the case of Gley's super senses where the fire rate is fixed to a value for a limited time, find the fixed rate and assign it to the current cycle
            // //but the moment the duration is done, return to the actual fire rate of the weapon and any associated bonuses
            if (tableCopy.FireRateOverride>0) {
                cyclesBaseFireRate = tableCopy.FireRateOverride;
                cyclesFixedRate = true;
            }

            const snapshot = bullets.getCurrentRateAdjustments(tableCopy,cyclesBaseFireRate,cyclesFixedRate,skipCoreValues);
            // if (!isCycleCalcs) {console.log(snapshot.adjustedRateValue)}
            
            let constructorObject = {};
            
            let currentRate = snapshot.modifiedRate;//time between shots with the stacks applied
            nextShotTime = timePassed + (reloadShotDelayApplied ? currentRate : weaponRef.RangedInTime);//time for the next shot
            reloadShotDelayApplied = true;
            if (shotCount === 0) {nextShotTime = 0;}
            if (usedMagazine < actualMagSize) {
                shotCount++;
                timePassed = nextShotTime;//passed to the time of the next shot

                constructorObject = {
                    "shots": shotCount,
                    "timePassed": timePassed,
                    "shotDelay": currentRate,
                    "rateValue": snapshot.adjustedRateValue,
                    "wasFree": false,
                    "damage": 0,
                    "damageCrit": 0,
                    "damageAVG": 0,
                    "bonusesApplied": [],
                    "bonusesMemory": [],
                };
            }


            const isEndOfMagazine = usedMagazine === actualMagSize-1;


            for (let entry of bonusReference) {
                const bonusBaseRef = entry.bonusArray;
                
                for (let bonusEntry of bonusBaseRef) {
                    let reversedBonus = false;

                    //conditions we need to know, to apply or cancel bonus stacking
                    let initialTimePassed = bonusEntry.timePassedEntry;

                    //reload check for this entry. Needed for reload specific bonuses.
                    let justReloaded = false;
                    let priorReloadTime = initialTimePassed;
                    if (bonusEntry.reloadTimePassed>0 && !bonusEntry.reloadTimeApplied) {

                        bonusEntry.timePassedEntry += timePassed-bonusEntry.timeOfReload-currentRate + weaponRef.RangedInTime;
                        //because we need the rate addition to reach the current time passed, and the difference in rates is already accounted for in the reload time passed
                        priorReloadTime = bonusEntry.timeOfReload;
                        bonusEntry.timeOfReload = 0;

                        bonusEntry.reloadTimePassed = 0;
                        bonusEntry.reloadTimeApplied = true;

                        justReloaded = true;
                    }
                    else if (shotCount===1) {
                        //simulate a reload on the opening shot so we can still factor for things like str first shot on snipers, or firing fiesta on gen rounds, etc.
                        justReloaded = true;
                    }

                    // if (!isCycleCalcs && !justReloaded) {console.log(bonusEntry.timePassedEntry)}
                    // let gapDuration = bonusEntry.timePassedEntry-initialTimePassed;
                    let gapDuration = timePassed-priorReloadTime;
                    // timePassed
                    let durationGapFailed = gapDuration > bonusEntry.duration && bonusEntry.oneTimeOrStack === "stack" && shotCount!=1;
                    let clearReloadBonus = bonusEntry.clearOnReload && justReloaded;
                    // if (!isCycleCalcs && justReloaded) {console.log(timePassed,bonusEntry.timeOfReload,timePassed-bonusEntry.timeOfReload)}
                    
                    const entrySkipsFirstShot = bonusEntry.skipFirstShot;
                    if (clearReloadBonus || durationGapFailed) {
                        if (bonusEntry.oneTimeOrStack === "stack") {
                            for (let i=0;i<bonusEntry.currentStacks;i++) {bullets.applyStats(bonusEntry, tableCopy, null, null, false,true);}
                        }
                        bonusEntry.currentStacks = entrySkipsFirstShot ? -1 : 0;
                        bonusEntry.timePassedEntry = 0;
                    }

                    //look over the conditions, set them through the checks, and if failed then abort the bonus application
                    let conditionFailed = false;
                    if (bonusEntry.conditions && bonusEntry.conditions.length) {
                        const cycleReferences = {
                            justReloaded,isEndOfMagazine,hasFirearmDamage
                        }
                        for (let condition of bonusEntry.conditions) {
                            let result = conditionalChecksWeapons[condition](index,returnObject,isCycleCalcs,weaponRef,cycleReferences);
                            if (!result) {conditionFailed = true;break;}
                        }
                        // if (conditionFailed) {continue;}
                        //I MOVED THE FAILURE SKIP TO THE STATS APPLICATIONS INSTEAD
                        //this means in the future I really fucking need to remember to use the conditionfailed boolean whenever I'm applying stats in here, else I'm fucked
                        //future me, please, remember.
                    }


                    if (bonusEntry.oneTimeOrStack === "duration") {
                        // if (!isCycleCalcs && bonusEntry.bonusName === "Firing Fiesta" && justReloaded) {console.log(conditionFailed)}
                        // this part needs to come first for the sake of shit with reload triggers such as firing fiesta, literally everything else doesn't care but this does
                        // and we differentiate between them with the skipFirstShot parameter on a given entry. Entries that skip the first don't care too much about the
                        const durationResetChecker = !bonusEntry.isDurationActive && bonusEntry.isCooldownActive && bonusEntry.timePassedEntry >= bonusEntry.cooldown && !conditionFailed;
                        if (!entrySkipsFirstShot && durationResetChecker) {
                            // if (bonusEntry.currentStacks === 0) {bonusEntry.timePassedEntry = 0;}
                            bonusEntry.timePassedEntry = 0; //since the effects are triggered by shots or reloads or w/e, reset the time passed to a fresh 0. Later if I have a cd based effect that isn't triggered by a shot, I might need -= bonusEntry.cooldown
                            bonusEntry.isDurationActive = true; //get the duration back on
                            bonusEntry.isCooldownActive = false; //close out the cooldown
                        }

                        if (bonusEntry.isDurationActive && !bonusEntry.isCooldownActive && bonusEntry.timePassedEntry >= 0 && bonusEntry.timePassedEntry <= bonusEntry.duration) {
                            // bonusEntry.isDurationActive = true;

                            if (bonusEntry.currentStacks < bonusEntry.limit && !conditionFailed) {
                                bonusEntry.currentStacks += 1;//Count this use

                                //if this is a duration based effect that triggers by a shot but doesn't apply to it, then skip bonuses on this shot
                                if (bonusEntry.currentStacks <= 0) {}
                                else {
                                    // Apply bonuses while duration is active
                                    bullets.applyStats(bonusEntry, tableCopy, constructorObject, bonusEntry.currentStacks, reversedBonus);
                                    //if this is something like a reload trigger, the reload trigger won't be true later, so I need to say the bonus was applied and remove it later
                                    if (bonusEntry.bonusWasApplied != undefined){bonusEntry.bonusWasApplied = true;}
                                }
                            }
                        }
                
                        // Check if duration has expired
                        if (bonusEntry.isDurationActive && !bonusEntry.isCooldownActive && bonusEntry.timePassedEntry > bonusEntry.duration) {
                            bonusEntry.isDurationActive = false; // End duration
                            bonusEntry.isCooldownActive = true;
                            bonusEntry.timePassedEntry -= bonusEntry.duration;//remove the duration to start the cooldown, but since it is duration based that means the time leftover still counts towards the cooldown, hence why no reset to 0 here
                        
                            //negate the stacking bonuses but ONLY if the condition was met, or a prior condition was met that needs to expire, otherwise we'd cuck out damage out of nowhere when it shouldn't have even applied
                            if (!conditionFailed || bonusEntry.bonusWasApplied) {
                                for (let stat of bonusEntry.stats) {
                                    tableCopy[stat.name] -= (stat.value * bonusEntry.currentStacks);
                                }
                                //if the bonus was applied and the trigger that placed it is gone, then negate the bonus, and say the bonus isn't there anymore
                                if (bonusEntry.bonusWasApplied != undefined){bonusEntry.bonusWasApplied = false;}
                            }
                            bonusEntry.currentStacks = 0;
                        }

                        if (durationResetChecker) {
                            // if (bonusEntry.currentStacks === 0) {bonusEntry.timePassedEntry = 0;}
                            bonusEntry.timePassedEntry = 0; //since the effects are triggered by shots or reloads or w/e, reset the time passed to a fresh 0. Later if I have a cd based effect that isn't triggered by a shot, I might need -= bonusEntry.cooldown
                            bonusEntry.isDurationActive = true; //get the duration back on
                            bonusEntry.isCooldownActive = false; //close out the cooldown
                        }
                    }
                    else if (bonusEntry.oneTimeOrStack === "durationInitial") {
                        // let bonusEntry.isDurationActive = false; // Tracks if the effect is within its duration window
                        if (initialReversed) {bonusEntry.timePassedEntry += currentRate;continue;}
                    
                        // Handle Duration-Based Effects
                        if (!bonusEntry.isDurationActive && bonusEntry.timePassedEntry >= 0 && bonusEntry.timePassedEntry <= bonusEntry.duration) {
                            bonusEntry.isDurationActive = true;
                            bonusEntry.currentStacks += 1;//Count this use
                        }
                
                        // Check if duration has expired
                        if (bonusEntry.isDurationActive && bonusEntry.timePassedEntry > bonusEntry.duration && !initialReversed) {
                            bonusEntry.isDurationActive = false; // End duration
                            bonusEntry.timePassedEntry -= bonusEntry.duration;//remove the duration to start the cooldown, but since it is duration based that means the time leftover still counts towards the cooldown, hence why no reset to 0 here
                        }
                
                        // Handle Cooldown
                        if (!bonusEntry.isDurationActive && bonusEntry.timePassedEntry >= bonusEntry.cooldown) {
                            bonusEntry.timePassedEntry -= bonusEntry.cooldown; // Decrement time for next activation
                            bonusEntry.isDurationActive = true; // Reactivate duration after cooldown
                        }
                
                        // Break the loop if no further bonuses can be applied
                        if (!bonusEntry.isDurationActive && bonusEntry.timePassedEntry < bonusEntry.cooldown) {
                            bonusEntry.isDurationActive = true;
                            //reset the times used when toggling the duration based effect off for the future
                            bonusEntry.currentStacks = 0;
                            if (!initialReversed) {
                                if (!conditionFailed) {bullets.applyStats(bonusEntry, tableCopy, constructorObject, bonusEntry.currentStacks, false,true);}
                                initialReversed = true;
                            }
                        }
                    }
                    else if (bonusEntry.cooldown != 0) {
                        //this is for things that are triggered but have a cooldown, so we set the time passed
                        //to be the duration already, which tells the calc the cooldown won't interfere and the first trigger can happen normally THEN go on cooldown
                        if (shotCount<=1 && bonusEntry.oneTimeOrStack === "cooldown" && !bonusEntry.skipInitialTimeApplied) {bonusEntry.timePassedEntry = bonusEntry.cooldown;}

                        while (bonusEntry.timePassedEntry >= bonusEntry.cooldown && bonusEntry.currentStacks < bonusEntry.limit && !conditionFailed) {
                            let reversedBonus = false;
                    
                            if (bonusEntry.oneTimeOrStack === "stack") {
                                bonusEntry.currentStacks += 1;
                                bonusEntry.timePassedEntry -= bonusEntry.cooldown;
                            }
                            //works with reloads
                            else if (bonusEntry.oneTimeOrStack === "cooldown") {
                                bonusEntry.currentStacks += 1;
                                bonusEntry.timePassedEntry = 0;//since the cooldown is considered as triggered on the shot, set the timepassed to 0 here
                                reversedBonus = true;
                            }
                    
                            bullets.applyStats(bonusEntry, tableCopy, constructorObject, bonusEntry.currentStacks, reversedBonus);
                    
                            // Prevent resetting timesUsed during the loop if it's part of the condition
                            if (bonusEntry.oneTimeOrStack === "cooldown") { 
                                bonusEntry.currentStacks = 0; 
                            }
                        }
                    }
                    //if this is based on shots fired instead of cooldown effects
                    else if (priorShotCount != shotCount && (bonusEntry.currentStacks < bonusEntry.limit && bonusEntry.oneTimeOrStack === "stack")) {
                        // "decayDuration": 2,
                        // "clearOnReload": true,

                        // bullets.applyStats(bonusEntry, tableCopy, constructorObject, entry.timesUsed, false,true);
                        // "currentStacks": 0,
                        bonusEntry.timePassedEntry = timePassed;
                        bonusEntry.currentStacks += 1;
                        //apply all stats for this bonus
                        if (!conditionFailed) {bullets.applyStats(bonusEntry, tableCopy, constructorObject, bonusEntry.currentStacks, reversedBonus);}
                    }
            
                    //increment timePassed only for the bonuses still on cooldown
                    bonusEntry.timePassedEntry += currentRate;
                }
            }
            if (constructorObject != {}) {
                const snapshotPost = bullets.getCurrentRateAdjustments(tableCopy,cyclesBaseFireRate,cyclesFixedRate,skipCoreValues);
                constructorObject.rateValue = snapshotPost.adjustedRateValue;
                constructorObject.shotDelay = snapshotPost.modifiedRate;
            }
            timeSinceReload += constructorObject.shotDelay;


            //scrub the weapon core values from a unique weapon iteration
            if (skipCoreValues) {bullets.scrubCoreBonuses(tableCopy);}

            const {baseFirearmATK,attackPercent,physicalTypeMulti,firearmColossusATK,firearmAttributeConversionBase,totalFirearmATK} = calcs.getFirearmATK(tableCopy,weaponRef,atkMulti);
            const {baseFirearmCritRate,baseFirearmCritDamage,baseFirearmCritRateBonus,baseFirearmCritDamageBonus,firearmCritRateBonus,firearmCritDamageBonus,totalFirearmCritRate,totalFirearmCritDamage} = calcs.getFirearmCrit(tableCopy,weaponRef);
            const {baseWPMulti,weakpointBonus,bossPartWPBonus,wpAveraged} = calcs.getFirearmWeakpoint(tableCopy,weaponRef);
            const shellCount = Math.floor(shellCountOverride ? shellCountOverride : (weaponRef.shellCount + tableCopy.ShellCapacityBase) * (1 + tableCopy.ShellCapacity))

            const preElementDamage = firearmAttributeConversionBase;//firearm attribute dmg can't benefit from faction attack or type bonuses or the zenithMultiplier
            const damage = totalFirearmATK;
            const physDR = calcs.getResistanceBasedDR(tableCopy,"DEF");
            const baseDamage = damage * physDR * wpAveraged;

            const critFirearm = calcs.getFirearmCritComposites({totalFirearmCritRate,totalFirearmCritDamage});
            const weaponDamage = calcs.getCompositeFirearmDamageSpread(baseDamage,critFirearm);
            const {activeElements,activeElementsDamage} = calcs.getActiveFirearmAttributesArrays(tableCopy,preElementDamage,critFirearm);
            const elementalDamage = {
                Chill: 0,
                Electric: 0,
                Toxic: 0,
                Fire: 0,
            }

            let avgTotalBonusElem = 0;
            if (activeElements[0] != "None") {
                for (let i=0;i<activeElements.length;i++) {
                    elementalDamage[activeElements[i]] = calcs.getCompositeFirearmDamageSpread(activeElementsDamage[i],critFirearm);
                    //add the elem to the avg total sum of the shot so that way scaling elem bonuses still show up on the chart
                    avgTotalBonusElem += elementalDamage[activeElements[i]] != 0 ? elementalDamage[activeElements[i]].AVG : 0;
                }
                
            }

            //TODO: later, get this into its own function so we can clean up this part
            if (true){
                const skillDamage = referenceFunction ? referenceFunction(tableCopy,returnObject,isCycleCalcs,nameOverride) : 0;
                const skillDMGObject = skillDamage != 0 ? skillDamage.damageSkill : 0;
                const avgPerShot = weaponDamage.AVG// + weaponDamageElemental.AVG;
                constructorObject.shellCount = shellCount;
                constructorObject.totalATK = skillOnly ? 0 : totalFirearmATK;
                constructorObject.damage = skillOnly ? 0 : weaponDamage.perHit;
                constructorObject.damageCrit = skillOnly ? 0 : weaponDamage.perCrit;
                constructorObject.damageAVG = skillOnly ? 0 : weaponDamage.AVG;
                constructorObject.avgTotalBonusElem = skillOnly ? 0 : avgTotalBonusElem;
                constructorObject.damageAVGTotal = (skillOnly ? 0 : weaponDamage.AVG + avgTotalBonusElem) * shellCount + (skillDamage != 0 ? skillDamage.damageSkill.AVG : 0);
                constructorObject.SkillDamage = skillDamage != 0 ? skillDamage.damageSkill : 0;
                constructorObject.SkillDamageMod = skillDamage != 0 ? skillDamage.skillPowerModifier : 0;
                constructorObject.wasFree = tableCopy.BulletCostWeapon === 0;

                constructorObject.elementalDamage = skillOnly ? 0 : elementalDamage;

                //shit like Hailey's cryo
                if (specialGunFunction) {constructorObject.specialGunFunction = specialGunFunction(constructorObject);}
                if (specialSkillFunction) {constructorObject.specialSkillFunction = specialSkillFunction(constructorObject,tableCopy,returnObject,isCycleCalcs,nameOverride);}

                priorShotCount = shotCount;

                //increment the used magazine so far but accounting for bullet cost factors
                let durationRestrictionModifier = durationRestriction>0 && durationRestriction!=undefined && durationRestriction!=null ? timePassed<durationRestriction : false;
                usedMagazine += durationRestrictionModifier ? 0 : Math.max(0,1 * tableCopy.BulletCostWeapon);
            }

            //store the reload buffer injection to use later if needed
            const reloadBufferArray = [];

            // timeSinceReload += constructorObject.shotDelay;timeOfLastReload
            const timeOfNextShotCheck = timeSinceReload-timeOfLastReload>customReloadTimer;
            const customReloadChecker = customReloadsAllowed && timeOfNextShotCheck;
            // if (customReloadsAllowed) {console.log(timeSinceReload-timeOfLastReload,customReloadTimer)}
            
            const reloadsChecker = reloadsAllowed && magsUsed != MagCount && (usedMagazine === actualMagSize || customReloadChecker);
            if (tableCopy.SkipReload>0 && isEndOfMagazine && reloadsChecker) {
                usedMagazine = 0;
                magsUsed++;
                timeOfLastReload = timeSinceReload;
                timeSinceReload = timePassed;
                timeOfLastReload = timePassed-constructorObject.shotDelay;
            }
            // reload fuckery - If reloads are allowed, inject into the bullets array, 2 entries for a reload start and end
            else if (reloadsChecker) {
                reloadShotDelayApplied = false;
                let delayReference = constructorObject.shotDelay;
                let baseReference = timePassed + delayReference;
                let reloadReference = calcs.getReloadTime(tableCopy,weaponRef.baseReloadTime,weaponRef);

                reloadBufferArray.push({
                    "reloadState": "start",
                    "timePassed": baseReference,
                    "shots": shotCount+1,
                    "reloadNumber": magsUsed+1,
                },
                {
                    "reloadState": "end",
                    "timePassed": baseReference + reloadReference,
                    "shots": shotCount+2,
                    "reloadNumber": magsUsed+1,
                }
                );

                magsUsed++;//bump the mag count

                //if we're at the tail end of the charting, include the ready state buffer after the reload to keep the DPS cycle window accurate
                if (magsUsed === MagCount) {
                    reloadBufferArray.push({
                        "reloadState": "buffer",
                        "timePassed": baseReference + reloadReference + weaponRef.RangedInTime,//delayReference,
                        "shots": shotCount+3,
                    });
                    shotCount += 1
                    timePassed += delayReference;
                    if (customReloadChecker) {usedMagazine = actualMagSize;}
                }
                shotCount += 2;
                let timeToPass = reloadReference + delayReference;

                let timeOfReload = timePassed;

                timePassed += timeToPass;//*2; 

                timeSinceReload = timePassed;
                timeOfLastReload = timePassed;//-delayReference;


                // "RangedInTime": 0.2,
        // "ZoomInHoldDelayTime": 0.4,

                reloadDurationOffset += timeToPass// + delayReference//*2;

                //if we're not at the limit for magazines to shoot, reset the shots fired to 0, AKA: reload
                if (magsUsed < MagCount) {
                    usedMagazine = 0;

                    //set the time of the reload to the time passed on the bonus entries
                    for (let entry of bonusReference) {

                        const bonusBaseRef = entry.bonusArray;
                        for (let bonusEntry of bonusBaseRef) {
                            bonusEntry.reloadTimePassed = reloadDurationOffset;
                            bonusEntry.timeOfReload = timeOfReload;
                            reloadDurationOffset = 0;
                            bonusEntry.reloadTimeApplied = false;
                        }
                    }
                    
                }
            }

            bulletsArray.push(constructorObject);
            if (reloadBufferArray && reloadBufferArray.length) {
                bulletsArray.push(...reloadBufferArray);
            }

            //negate non-stacking, cooldown based bonuses after this shot
            if (constructorObject.bonusesMemory.length) {
                for (let stat of constructorObject.bonusesMemory) {
                    tableCopy[stat[0]] -= stat[1];
                }
            }
        }


        //TODO: there might be something I'm forgetting besides the timeWasted stat here that might carry over between unique weapons and regular weapon simulation. Look into this later.
        for (let entry of bonusReference) {
            const bonusBaseRef = entry.bonusArray;
            for (let bonusEntry of bonusBaseRef) {
                //clear out the wasted time so it doesn't carry over on accident from a unique weapon, which it would otherwise
                if (bonusEntry.duration) {bonusEntry.duration -= -wastedTimeSkill;}
            }
        }

        return {bulletsArray}
    },
    getAttributeRowStrings(bulletsArrayRef) {
        let headerString = "<div class='weaponBreakdownSplitterHeader'>ATTRIBUTE</div>";
        let returnString = "";

        let attrKeys = Object.keys(bulletsArrayRef);
        for (let key of attrKeys) {
            returnString += `${bulletsArrayRef[key] ? `<div class="totalHealingBoxBreakdownRows attributeRowBoxWeapons">
                    <div class="totalHealingBoxHalfBreakdownRows attributeRowStarterWeapons hasHoverTooltip">
                        <div class="totalHealingHeader" style="border:none;">${key}</div>
                    </div>
                    <div class="totalHealingBoxHalfBreakdownRows hasHoverTooltip">
                        <div class="totalHealingHeader">DMG/Hit</div>
                        <div class="totalHealingValueBoss">${bulletsArrayRef[key].perHit.toFixed(2)}</div>
                    </div>
                    <div class="totalHealingBoxHalfBreakdownRows hasHoverTooltip">
                        <div class="totalHealingHeader">DMG/Crit</div>
                        <div class="totalHealingValueBoss">${bulletsArrayRef[key].perCrit.toFixed(2)}</div>
                    </div>
                    <div class="totalHealingBoxHalfBreakdownRows hasHoverTooltip">
                        <div class="totalHealingHeader">AVG/Hit</div>
                        <div class="totalHealingValueBoss">${bulletsArrayRef[key].AVG.toFixed(2)}</div>
                    </div>
                </div>` : ""}`;
        }

        return returnString ? headerString + returnString : ""
    },
    toggleExpandedBullet(target,maximum,adjustValue,isSkill) {
        for (let i=0;i<maximum;i++) {readSelection(`expandedBulletBody${isSkill ? "Skill" : ""}${i}`).style.display = "none";}
        readSelection(`expandedBulletBody${isSkill ? "Skill" : ""}${target-1}`).style.display = "block";

        if (adjustValue) {bullets.updateExpandedBullet(null,true,target,isSkill)}
    },
    updateExpandedBullet(adjustment,skipRecall,override,isSkill) {
        adjustment = adjustment || 0;
        let selectorElem = readSelection(`bulletSelectorInputWeapons${isSkill ? "Skill" : ""}`);
        let maximum = +selectorElem.max;
        selectorElem.value = Math.max(1,Math.min(maximum,(override ? override : +selectorElem.value) + adjustment));

        if (!skipRecall) {bullets.toggleExpandedBullet(+selectorElem.value,maximum,null,isSkill);}
    },
    getActiveBulletGraph(bulletsArray,isSkill) {
        let bulletArrayString = "";
        let minTime = 0;
        //if an invalid array is passed, default the time to 1s
        let maxTime = bulletsArray[bulletsArray.length-1] && bulletsArray[bulletsArray.length-1].timePassed ? bulletsArray[bulletsArray.length-1].timePassed : 1;

        const floorDMG = bulletsArray.length ? bulletsArray.reduce((min, obj) => (obj.damageAVGTotal < min.damageAVGTotal ? obj : min), bulletsArray[0]) : {"damageAVGTotal":1};
        const ceilDMG = bulletsArray.length ? bulletsArray.reduce((max, obj) => (obj.damageAVGTotal > max.damageAVGTotal ? obj : max), bulletsArray[0]) : {"damageAVGTotal":1};
        //&#9664; LEFT FACING
        //&#9660; DOWN FACING
        let minDMGBuffer = floorDMG.damageAVGTotal * 0.1;
        let minDMG = Math.max(0,floorDMG.damageAVGTotal - minDMGBuffer);
        let maxDMG = ceilDMG.damageAVGTotal + minDMGBuffer;
        let dmgSpread = maxDMG-minDMG;

        let pointString = "";
        let linesArray = [];
        let lineString = "";

        for (let i=0;i<bulletsArray.length;i++) {
            // "reloadState": "start",middle,end
            // "timePassed": baseReference,
            let currentBullet = bulletsArray[i];
            if (currentBullet.reloadState) {
                let reloadState = currentBullet.reloadState;

                //TODO: switch case later
                if (reloadState === "start") {
                    let xValue = (((bulletsArray[i].timePassed/maxTime) * 0.85 + 0.075)*100).toFixed(4);
                    let yValue = ((1 - ((bulletsArray[i-1].damageAVGTotal - minDMG)/dmgSpread) * 0.80 - 0.10)*100).toFixed(4);
                    pointString += `<circle cx="${xValue}%" cy="${yValue}%" r="2.5" fill="white" onclick="bullets.toggleExpandedBullet(${i+1},${bulletsArray.length},true,${isSkill ? "true" : "false"})" class="weaponBulletArrayPoint hasHoverTooltip" id="weaponBulletArrayPoint${isSkill ? "Skill" : ""}${i}"/>`;
                }
                else if (reloadState === "end") {
                    let xValue = (((bulletsArray[i].timePassed/maxTime) * 0.85 + 0.075)*100).toFixed(4);
                    let yValue = ((1 - ((bulletsArray[i-2].damageAVGTotal - minDMG)/dmgSpread) * 0.80 - 0.10)*100).toFixed(4);
                    pointString += `<circle cx="${xValue}%" cy="${yValue}%" r="2.5" fill="white" onclick="bullets.toggleExpandedBullet(${i+1},${bulletsArray.length},true,${isSkill ? "true" : "false"})" class="weaponBulletArrayPoint hasHoverTooltip" id="weaponBulletArrayPoint${isSkill ? "Skill" : ""}${i}"/>`;
                
                    let xValue2 = (((bulletsArray[i-1].timePassed/maxTime) * 0.85 + 0.075)*100).toFixed(4);
                    let yValue2 = ((1 - ((bulletsArray[i-2].damageAVGTotal - minDMG)/dmgSpread) * 0.80 - 0.10)*100).toFixed(4);
                    lineString += `<line x1="${xValue}%" y1="${yValue}%" x2="${xValue2}%" y2="${yValue2}%" stroke="black" stroke-dasharray="5,2" id="weaponBulletArrayPointReloadLine${isSkill ? "Skill" : ""}${i}" class="hasHoverTooltip"/>`;

                    let headerString = `<div class="totalHealingBoxBreakdownRows">
                        <div class="totalHealingBoxHalfBreakdownRows hasHoverTooltip">
                            <div class="totalHealingHeader">Start Time:&nbsp;${bulletsArray[i-1].timePassed.toLocaleString()}s</div>
                            <div class="totalHealingHeader">End Time:&nbsp;${bulletsArray[i].timePassed.toLocaleString()}s</div>
                            <div class="totalHealingHeader">Duration:&nbsp;${(bulletsArray[i].timePassed - bulletsArray[i-1].timePassed).toLocaleString()}s</div>
                        </div>
                    </div>`;

                    let tooltipString = `<div class="bulletTooltip">
                        <div class="tooltipHeader">Reload&nbsp;${currentBullet.reloadNumber}&nbsp;</div>
                        ${headerString}
                    </div>`;

                    tooltipStorage[`weaponBulletArrayPoint${isSkill ? "Skill" : ""}${i}`] = tooltipString;
                    tooltipStorage[`weaponBulletArrayPoint${isSkill ? "Skill" : ""}${i-1}`] = tooltipString;
                    tooltipStorage[`weaponBulletArrayPointReloadLine${isSkill ? "Skill" : ""}${i}`] = tooltipString;

                    bulletArrayString += `<div class="bulletEntryRowContainer">
                        <div class="bulletEntryRowBody" id="expandedBulletBody${isSkill ? "Skill" : ""}${i}" style="display: ${bulletsArray[i].shots != 1 ? "none" : "block"}">
                            <div class="tooltipHeader">Reload End</div>
                            ${headerString}
                        </div>
                    </div>`;
                    bulletArrayString += `<div class="bulletEntryRowContainer">
                        <div class="bulletEntryRowBody" id="expandedBulletBody${isSkill ? "Skill" : ""}${i-1}" style="display: ${bulletsArray[i-1].shots != 1 ? "none" : "block"}">
                        <div class="tooltipHeader">Reload Start</div>
                            ${headerString}
                        </div>
                    </div>`;
                }
                else if (reloadState === "buffer") {
                    let xValue = (((bulletsArray[i].timePassed/maxTime) * 0.85 + 0.075)*100).toFixed(4);
                    let yValue = ((1 - ((bulletsArray[i-3].damageAVGTotal - minDMG)/dmgSpread) * 0.80 - 0.10)*100).toFixed(4);
                    pointString += `<circle cx="${xValue}%" cy="${yValue}%" r="2.5" fill="white" onclick="bullets.toggleExpandedBullet(${i+1},${bulletsArray.length},true,${isSkill ? "true" : "false"})" class="weaponBulletArrayPoint hasHoverTooltip" id="weaponBulletArrayPoint${isSkill ? "Skill" : ""}${i}"/>`;

                    let headerString = `<div class="totalHealingBoxBreakdownRows">
                        <div class="totalHealingBoxHalfBreakdownRows hasHoverTooltip">
                            <div class="totalHealingHeader">Weapon Ready Time:&nbsp;${bulletsArray[i].timePassed.toLocaleString()}s</div>
                            <div class="abilityBreakdownGeneralMessage">After a reload your weapon has a "ready state" that is not modified by any speed bonuses, and this stat is hidden internally in-game.<br><br>This point on the graph represents when the weapon would normally be shooting again, but since it is the end we leave it as a non-bullet entry simply to maintain a uniform time to measure with on DPS metrics.</div>
                        </div>
                    </div>`;

                    tooltipStorage[`weaponBulletArrayPoint${isSkill ? "Skill" : ""}${i}`] = `<div class="bulletTooltip">
                        <div class="tooltipHeader">Weapon Ready</div>
                        ${headerString}
                    </div>`;

                    bulletArrayString += `<div class="bulletEntryRowContainer">
                        <div class="bulletEntryRowBody" id="expandedBulletBody${isSkill ? "Skill" : ""}${i}" style="display: ${bulletsArray[i].shots != 1 ? "none" : "block"}">
                            ${headerString}
                        </div>
                    </div>`;
                }
            }
            else {
                let headerString = `<div class="totalHealingBoxBreakdownRows">
                        <div class="totalHealingBoxHalfBreakdownRows hasHoverTooltip">
                            <div class="totalHealingHeader">Time Fired:&nbsp;${bulletsArray[i].timePassed.toLocaleString()}s</div>
                        </div>
                        <div class="totalHealingBoxHalfBreakdownRows hasHoverTooltip">
                            <div class="totalHealingHeader">Next Delay:&nbsp;${bulletsArray[i].shotDelay.toLocaleString()}s</div>
                        </div>
                        <div class="totalHealingBoxHalfBreakdownRows hasHoverTooltip">
                            <div class="totalHealingHeader">Fire Rate:&nbsp;${bulletsArray[i].rateValue.toLocaleString()}</div>
                        </div>
                        <div class="totalHealingBoxBreakdownRows">
                            <div class="totalHealingBoxHalfBreakdownRows hasHoverTooltip">
                                <div class="totalHealingHeader">SUM AVG of Shot</div>
                                <div class="totalHealingValueBoss">${bulletsArray[i].damageAVGTotal.toLocaleString()}</div>
                            </div>
                        </div>
                    </div>`;
                let ATKString = bulletsArray[i].totalATK != 0 ? `<div class="weaponBreakdownSplitterHeader">PHYSICAL</div>
                    <div class="totalHealingBoxBreakdownRows">
                        <div class="totalHealingBoxHalfBreakdownRows hasHoverTooltip">
                            <div class="totalHealingHeader">ATK</div>
                            <div class="totalHealingValueBoss">${currentBullet.totalATK.toFixed(2)}</div>
                        </div>
                        <div class="totalHealingBoxHalfBreakdownRows hasHoverTooltip">
                            <div class="totalHealingHeader">DMG/Hit</div>
                            <div class="totalHealingValueBoss">${currentBullet.damage.toFixed(2)}</div>
                        </div>
                        <div class="totalHealingBoxHalfBreakdownRows hasHoverTooltip">
                            <div class="totalHealingHeader">DMG/Crit</div>
                            <div class="totalHealingValueBoss">${currentBullet.damageCrit.toFixed(2)}</div>
                        </div>
                        <div class="totalHealingBoxHalfBreakdownRows hasHoverTooltip">
                            <div class="totalHealingHeader">AVG/Hit</div>
                            <div class="totalHealingValueBoss">${currentBullet.damageAVG.toFixed(2)}</div>
                        </div>
                        ${currentBullet.shellCount > 1 ? `<div class="totalHealingBoxHalfBreakdownRows hasHoverTooltip">
                            <div class="totalHealingHeader">Shells</div>
                            <div class="totalHealingValueBoss">${currentBullet.shellCount.toFixed(0)}</div>
                        </div>` : ""}
                    </div>` : "";
                let specialATKString = bulletsArray[i].specialGunFunction ? `<div class="weaponBreakdownSplitterHeader">${bulletsArray[i].specialGunFunction.name}</div>
                    <div class="breakdownRowInjectionHeaderBulletSim">${bulletsArray[i].specialGunFunction.desc}</div>
                    <div class="totalHealingBoxBreakdownRows">
                        <div class="totalHealingBoxHalfBreakdownRows hasHoverTooltip">
                            <div class="totalHealingHeader">DMG/Hit</div>
                            <div class="totalHealingValueBoss">${bulletsArray[i].specialGunFunction.perHit.toFixed(2)}</div>
                        </div>
                        <div class="totalHealingBoxHalfBreakdownRows hasHoverTooltip">
                            <div class="totalHealingHeader">DMG/Crit</div>
                            <div class="totalHealingValueBoss">${bulletsArray[i].specialGunFunction.perCrit.toFixed(2)}</div>
                        </div>
                        <div class="totalHealingBoxHalfBreakdownRows hasHoverTooltip">
                            <div class="totalHealingHeader">AVG/Hit</div>
                            <div class="totalHealingValueBoss">${bulletsArray[i].specialGunFunction.AVG.toFixed(2)}</div>
                        </div>
                    </div>` : "";
                let specialSkillString = bulletsArray[i].specialSkillFunction ? `<div class="weaponBreakdownSplitterHeader">${bulletsArray[i].specialSkillFunction.name}</div>
                <div class="breakdownRowInjectionHeaderBulletSim">${bulletsArray[i].specialSkillFunction.desc}</div>
                <div class="totalHealingBoxBreakdownRows">
                    <div class="totalHealingBoxHalfBreakdownRows hasHoverTooltip">
                        <div class="totalHealingHeader">DMG/Hit</div>
                        <div class="totalHealingValueBoss">${bulletsArray[i].specialSkillFunction.perHit.toFixed(2)}</div>
                    </div>
                    <div class="totalHealingBoxHalfBreakdownRows hasHoverTooltip">
                        <div class="totalHealingHeader">DMG/Crit</div>
                        <div class="totalHealingValueBoss">${bulletsArray[i].specialSkillFunction.perCrit.toFixed(2)}</div>
                    </div>
                    <div class="totalHealingBoxHalfBreakdownRows hasHoverTooltip">
                        <div class="totalHealingHeader">AVG/Hit</div>
                        <div class="totalHealingValueBoss">${bulletsArray[i].specialSkillFunction.AVG.toFixed(2)}</div>
                    </div>
                    ${!bulletsArray[i].specialSkillFunction.ticks ? "" : `
                    <div class="totalHealingBoxHalfBreakdownRows hasHoverTooltip">
                        <div class="totalHealingHeader">Ticks</div>
                        <div class="totalHealingValueBoss">${bulletsArray[i].specialSkillFunction.ticks.toFixed(2)}</div>
                    </div>
                    <div class="totalHealingBoxHalfBreakdownRows hasHoverTooltip">
                        <div class="totalHealingHeader">SUM AVG</div>
                        <div class="totalHealingValueBoss">${bulletsArray[i].specialSkillFunction.totalTickDamage.toFixed(2)}</div>
                    </div>
                        `}
                </div>` : "";
                let SkillString = bulletsArray[i].SkillDamage && bulletsArray[i].SkillDamage.AVG != 0 ? `<div class="weaponBreakdownSplitterHeader">SKILL</div>
                    <div class="totalHealingBoxBreakdownRows">
                        <div class="totalHealingBoxHalfBreakdownRows hasHoverTooltip">
                            <div class="totalHealingHeader">Mod</div>
                            <div class="totalHealingValueBoss">${(bulletsArray[i].SkillDamageMod*100).toFixed(2)}%</div>
                        </div>
                        <div class="totalHealingBoxHalfBreakdownRows hasHoverTooltip">
                            <div class="totalHealingHeader">DMG/Hit</div>
                            <div class="totalHealingValueBoss">${bulletsArray[i].SkillDamage.perHit.toFixed(2)}</div>
                        </div>
                        <div class="totalHealingBoxHalfBreakdownRows hasHoverTooltip">
                            <div class="totalHealingHeader">DMG/Crit</div>
                            <div class="totalHealingValueBoss">${bulletsArray[i].SkillDamage.perCrit.toFixed(2)}</div>
                        </div>
                        <div class="totalHealingBoxHalfBreakdownRows hasHoverTooltip">
                            <div class="totalHealingHeader">AVG/Hit</div>
                            <div class="totalHealingValueBoss">${bulletsArray[i].SkillDamage.AVG.toFixed(2)}</div>
                        </div>
                    </div>` : "";


                //BULLET DISPLAY SECTIONS
                bulletArrayString += `<div class="bulletEntryRowContainer">
                    <div class="bulletEntryRowBody" id="expandedBulletBody${isSkill ? "Skill" : ""}${i}" style="display: ${bulletsArray[i].shots != 1 ? "none" : "block"}">
                        ${headerString}
                        ${SkillString}
                        ${specialSkillString}
                        ${ATKString}
                        ${bullets.getAttributeRowStrings(bulletsArray[i].elementalDamage)}
                        ${specialATKString}
                        ${bulletsArray[i].bonusesApplied.length ? `<div class='weaponBreakdownSplitterHeader'>BONUSES</div>
                            <div style="white-space: normal">${bulletsArray[i].bonusesApplied}</div>` : ""}
                    </div>
                </div>`;


                //BULLET TOOLTIP SECTIONS
                let xValue = (((bulletsArray[i].timePassed/maxTime) * 0.85 + 0.075)*100).toFixed(4);
                let yValue = ((1 - ((bulletsArray[i].damageAVGTotal - minDMG)/dmgSpread) * 0.80 - 0.10)*100).toFixed(4);
                pointString += `<circle cx="${xValue}%" cy="${yValue}%" r="2.5" fill="${bulletsArray[i].wasFree ? "grey":"red"}" onclick="bullets.toggleExpandedBullet(${i+1},${bulletsArray.length},true,${isSkill ? "true" : "false"})" class="weaponBulletArrayPoint hasHoverTooltip" id="weaponBulletArrayPoint${isSkill ? "Skill" : ""}${i}"/>`;

                if (i < bulletsArray.length-1 && !bulletsArray[i+1].reloadState) {
                    let xValue2 = (((bulletsArray[i+1].timePassed/maxTime) * 0.85 + 0.075)*100).toFixed(4);
                    let yValue2 = ((1 - ((bulletsArray[i+1].damageAVGTotal - minDMG)/dmgSpread) * 0.80 - 0.10)*100).toFixed(4);
                    lineString += `<line x1="${xValue}%" y1="${yValue}%" x2="${xValue2}%" y2="${yValue2}%" stroke="black"/>`;
                }

                tooltipStorage[`weaponBulletArrayPoint${isSkill ? "Skill" : ""}${i}`] = `<div class="bulletTooltip">
                        <div class="tooltipHeader">Shot&nbsp;${bulletsArray[i].shots}</div>
                        ${headerString}
                        ${SkillString}
                        ${specialSkillString}
                        ${ATKString}
                        ${bullets.getAttributeRowStrings(bulletsArray[i].elementalDamage)}
                        ${specialATKString}
                        ${bulletsArray[i].bonusesApplied.length ? `<div class="totalHealingHeader">Bonuses applied to/on shot</div>
                            ${bulletsArray[i].bonusesApplied}` : ""}
                    </div>`;
            }
        }
        
        //kill the graph if there is no array
        const graphString = `
        <svg class="weaponBulletArrayGraph">
            <line x1="7.5%" y1="90%" x2="7.5%" y2="10%" stroke="black" /> <!-- Y-axis -->
            <line x1="7.5%" y1="90%" x2="92.5%" y2="90%" stroke="black" /> <!-- X-axis -->

            <text x="50%" y="7.5%" fill="white" font-size="15" text-anchor="middle">DMG per Shot over Time</text>
            <text x="-2.5%" y="10%" fill="white" font-size="15" text-anchor="middle" transform="rotate(-90, 50, 50)">DMG per Shot</text>
            <text x="50%" y="97.5%" fill="white" font-size="15" text-anchor="middle">Time</text>

            <text x="7.5%" y="97.5%" fill="white" font-size="15" text-anchor="middle">0s</text>
            <text x="92.5%" y="97.5%" fill="white" font-size="15" text-anchor="middle">${maxTime.toFixed(1)}s</text>
            ${bulletsArray.length<=1 ? "" : lineString}
            ${bulletsArray.length<=1 ? "" : pointString}
        </svg>
        `;

        return {bulletArrayString,graphString}
    },
}