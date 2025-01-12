const bullets = {
    getCurrentRateAdjustments(tableCopy,baseRateValue,isStaticRate) {
        const rateAdjustment = isStaticRate ? 0 : tableCopy.FireRate;
        const adjustedRateValue = baseRateValue / (1 + rateAdjustment);
        const modifiedRate = 60/adjustedRateValue;

        return {adjustedRateValue,modifiedRate}
    },
    applyStats(bonusEntry, tableCopy, constructorObject, timesUsed, reversedBonus) {
        for (let stat of bonusEntry.stats) {
            const valueToGive = stat.subStackValue && timesUsed>1 ? stat.subStackValue : stat.value;
            tableCopy[stat.name] += valueToGive;
            //if we flip the bonus to only be applied on the single shot and not after, then push the bonus to memory to reverse later
            if (reversedBonus) {constructorObject.bonusesMemory.push([stat.name, stat.value]);}
        }
        constructorObject.bonusesApplied.push(`${bonusEntry.bonusName} [x${timesUsed}]`);
    },
    getActiveBulletArray(index,returnObject,isCycleCalcs,nameOverride,baseRateValue,actualMagSize,weaponRef,settingsObject) {
        
        let shotCount = 0;
        let priorShotCount = 0;
        let usedMagazine = 0;
        let nextShotTime = 0;
        let bulletsArray = [];
        const tableCopy = {...index};

        let atkMulti = settingsObject ? settingsObject.atkMulti || null : null;
        let bonusReference = settingsObject ? settingsObject.limitedWeaponAbilityBonuses || limitedWeaponBonuses : limitedWeaponBonuses;
        let isStaticRate = settingsObject ? settingsObject.isStaticRate : false;
        let referenceFunction = settingsObject ? settingsObject.referenceFunction : null;
        let specialGunFunction = settingsObject ? settingsObject.specialGunFunction : null; 
        let specialSkillFunction = settingsObject ? settingsObject.specialSkillFunction : null; 
        let wastedTimeSkill = settingsObject ? settingsObject.wastedTimeSkill || 0 : 0; 
        let skillOnly = settingsObject ? settingsObject.skillOnly : false; 
        let shellCountOverride = settingsObject ? settingsObject.shellCountOverride : null;
        // referenceFunction(index,returnObject,isCycleCalcs,nameOverride)

        for (let entry of bonusReference) {
            const bonusBaseRef = entry.bonusArray;
            
            for (let bonusEntry of bonusBaseRef) {
                //wastedTimeSkill is only for time wasted benefits like roll canceling on lepic overkill or freyna baptism
                if (bonusEntry.duration) {bonusEntry.duration -= wastedTimeSkill;}
            }
        }


        
        let timePassed = 0;

        while (usedMagazine < actualMagSize) {

            const snapshot = bullets.getCurrentRateAdjustments(tableCopy,baseRateValue,isStaticRate);
            // if (!isCycleCalcs) {console.log(snapshot.adjustedRateValue)}
            
            let constructorObject = {};
            
            let currentRate = snapshot.modifiedRate;//time between shots with the stacks applied
            nextShotTime = timePassed + currentRate;//time for the next shot
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


            for (let entry of bonusReference) {
                const bonusBaseRef = entry.bonusArray;
                
                for (let bonusEntry of bonusBaseRef) {
                    let reversedBonus = false;
                    

                    //look over the conditions, set them through the checks, and if failed then abort the bonus application
                    if (bonusEntry.conditions && bonusEntry.conditions.length) {
                        let conditionFailed = false;
                        for (let condition of bonusEntry.conditions) {
                            let result = conditionalChecksWeapons[condition](index,returnObject,isCycleCalcs,weaponRef);
                            if (!result) {conditionFailed = true;break;}
                        }
                        if (conditionFailed) {continue;}
                    }


                    if (bonusEntry.oneTimeOrStack === "duration") {
                        let isDurationActive = false; // Tracks if the effect is within its duration window
                    
                        // Handle Duration-Based Effects
                        if (!isDurationActive && entry.timePassed >= 0 && entry.timePassed <= bonusEntry.duration) {
                            isDurationActive = true;
                            entry.timesUsed += 1;//Count this use

                            //if this is a duration based effect that triggers by a shot but doesn't apply to it, then skip bonuses on this shot
                            if (entry.timesUsed <= 0) {}
                            else {
                                reversedBonus = true;
                    
                                // Apply bonuses while duration is active
                                bullets.applyStats(bonusEntry, tableCopy, constructorObject, entry.timesUsed, reversedBonus);
                            }
                        }
                
                        // Check if duration has expired
                        if (isDurationActive && entry.timePassed > bonusEntry.duration) {
                            isDurationActive = false; // End duration
                            entry.timePassed -= bonusEntry.duration;//remove the duration to start the cooldown, but since it is duration based that means the time leftover still counts towards the cooldown, hence why no reset to 0 here
                        }
                
                        // Handle Cooldown
                        if (!isDurationActive && entry.timePassed >= bonusEntry.cooldown) {
                            entry.timePassed -= bonusEntry.cooldown; // Decrement time for next activation
                            isDurationActive = true; // Reactivate duration after cooldown
                        }
                
                        // Break the loop if no further bonuses can be applied
                        if (!isDurationActive && entry.timePassed < bonusEntry.cooldown) {
                            isDurationActive = true;
                            //reset the times used when toggling the duration based effect off for the future
                            entry.timesUsed = 0;
                        }
                    }
                    else if (bonusEntry.oneTimeOrStack === "durationStack") {
                        //durationStack needs these two params under each entry in complexBonus
                        // "isDurationActive": true,
                        // "isCooldownActive": false,
                        //duration must be set to true to start with
                    
                        // Handle Duration-Based Effects
                        if (bonusEntry.isDurationActive && !bonusEntry.isCooldownActive && entry.timePassed >= 0 && entry.timePassed <= bonusEntry.duration) {

                            if (entry.timesUsed < bonusEntry.limit) {
                                entry.timesUsed += 1;//Count this use

                                //if this is a duration based effect that triggers by a shot but doesn't apply to it, then skip bonuses on this shot
                                if (entry.timesUsed <= 0) {}
                                else {
                                    // Apply bonuses while duration is active
                                    bullets.applyStats(bonusEntry, tableCopy, constructorObject, entry.timesUsed, reversedBonus);
                                }
                            }
                        }
                
                        // Check if duration has expired
                        if (bonusEntry.isDurationActive && !bonusEntry.isCooldownActive && entry.timePassed > bonusEntry.duration) {
                            bonusEntry.isDurationActive = false;
                            bonusEntry.isCooldownActive = true;

                            entry.timePassed -= bonusEntry.duration;//remove the duration to start the cooldown, but since it is duration based that means the time leftover still counts towards the cooldown, hence why no reset to 0 here

                            //since this is a bonus that stacks within a fixed duration, we need to remove all benefits of all stacks based on the timesUsed number before going on cooldown
                            for (let stat of bonusEntry.stats) {
                                tableCopy[stat.name] -= (stat.value * entry.timesUsed);
                            }
                            entry.timesUsed = 0;
                        }
                
                        // Handle Cooldown
                        if (!bonusEntry.isDurationActive && bonusEntry.isCooldownActive && entry.timePassed >= bonusEntry.cooldown) {

                            //TODO: might need to set the timepassed to exactly 0 here instead of subtracting the cooldown, as on some effects that could actually cause a problem since the effect is triggered
                            //on the next shot rather than immediately off cooldown and there is a difference sometimes
                            entry.timePassed -= bonusEntry.cooldown; // Decrement time for next activation
                            bonusEntry.isCooldownActive = false;
                            bonusEntry.isDurationActive = true; // Reactivate duration after cooldown
                        }
                    }
                    else if (bonusEntry.cooldown !== 0) {
                        while (entry.timePassed >= bonusEntry.cooldown && entry.timesUsed < bonusEntry.limit) {
                            let reversedBonus = false;
                    
                            if (bonusEntry.oneTimeOrStack === "stack") {
                                entry.timesUsed += 1;
                                entry.timePassed -= bonusEntry.cooldown;
                            }
                            else if (bonusEntry.oneTimeOrStack === "cooldown") {
                                entry.timesUsed += 1;
                                entry.timePassed = 0;
                                reversedBonus = true;
                            }
                    
                            bullets.applyStats(bonusEntry, tableCopy, constructorObject, entry.timesUsed, reversedBonus);
                    
                            // Prevent resetting timesUsed during the loop if it's part of the condition
                            if (bonusEntry.oneTimeOrStack === "cooldown") { 
                                entry.timesUsed = 0; 
                            }
                        }
                    }
                    //if this is based on shots fired instead of cooldown effects
                    else if (priorShotCount != shotCount && (entry.timesUsed < bonusEntry.limit && bonusEntry.oneTimeOrStack === "stack")) {
                        entry.timesUsed += 1;
                        //apply all stats for this bonus
                        bullets.applyStats(bonusEntry, tableCopy, constructorObject, entry.timesUsed, reversedBonus);
                    }
            
                    //increment timePassed only for the bonuses still on cooldown
                    entry.timePassed += currentRate;
                }
            }

            if (constructorObject != {}) {
                const snapshotPost = bullets.getCurrentRateAdjustments(tableCopy,baseRateValue,isStaticRate);
                constructorObject.rateValue = snapshotPost.adjustedRateValue;
                constructorObject.shotDelay = snapshotPost.modifiedRate;
            }


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


            bulletsArray.push(constructorObject);
            priorShotCount = shotCount;

            //increment the used magazine so far but accounting for bullet cost factors
            usedMagazine += (1 * tableCopy.BulletCostWeapon);

            // console.log(tableCopy.PowerModifierBase)

            //negate non-stacking, cooldown based bonuses after this shot
            if (constructorObject.bonusesMemory.length) {
                for (let stat of constructorObject.bonusesMemory) {
                    tableCopy[stat[0]] -= stat[1];
                }
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
        let maxTime = bulletsArray[bulletsArray.length-1].timePassed;

        const floorDMG = bulletsArray.reduce((min, obj) => (obj.damageAVGTotal < min.damageAVGTotal ? obj : min), bulletsArray[0]);
        const ceilDMG = bulletsArray.reduce((max, obj) => (obj.damageAVGTotal > max.damageAVGTotal ? obj : max), bulletsArray[0]);
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
            // console.log(bulletsArray[i].specialSkillFunction)
            // shellCount
            let currentBullet = bulletsArray[i];

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
            let SkillString = bulletsArray[i].SkillDamage != 0 ? `<div class="weaponBreakdownSplitterHeader">SKILL</div>
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

            if (i < bulletsArray.length-1) {
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
            ${lineString}
            ${pointString}
        </svg>
        `;

        return {bulletArrayString,graphString}
    },
}