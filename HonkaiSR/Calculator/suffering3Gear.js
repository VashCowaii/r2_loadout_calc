const turnLogicLightcones = {


    // const customName = `${buffName} (${sourceTurn.properName})`;
    // if (!buffNames[customName]) {buffNames[customName] = customName;}

    // "buffNamesPerCharacter": {
    //     "buff1": "Routed",
    // }


    //HUNT HOONT HOONTER
    "The Hell Where Ideals Burn": {
        logic(thisTurn,battleData) {},
        "skillFunctions": {},
        "listeners": [
            {
                "trigger": "PreBattleEntersCombat",
                condition(battleData,generalInfo) {
                    let ownerRef = this.owners;//would apply at the start to any and all owners, each, hence owners instead of ownersSlots
                    let lcNameRef = "The Hell Where Ideals Burn";
                    let lcPathing = lightcones[lcNameRef].params;
                    const updateBuff = battleActions.updateBuff;

                    let buffSheet = this.buffSheet ??= {
                        "stats": [ATKP],
                        [ATKP]: 0,
                        "source": lcNameRef,
                        "sourceOwner": "",
                        "buffName": turnLogicLightcones[lcNameRef].buffNames.hruntingStart,
                        "duration": 1,
                        "AVApplied": 0,
                        "maxStacks": 1,
                        "currentStacks": 1,
                        "decay": false,
                        "expireType": null
                    }
                    for (let owner of ownerRef) {
                        let charSlot = owner.slot;
                        let rankParams = lcPathing[owner.rank-1];

                        let currentTurn = battleData.nameBasedTurns[charSlot];
                        let ownerName = currentTurn.properName;

                        let values = rankParams[2];

                        buffSheet[ATKP] = values;
                        buffSheet.sourceOwner = ownerName;
                        
                        updateBuff(battleData,currentTurn,buffSheet);
                    }
                    const tempLogic = battleData.battleLogicTemp;
                    const burnRef = tempLogic.whereIdealsBurn ??= {};
                    burnRef.total = ownerRef.length;
                    burnRef.completed = 0;
                },
                "target": "self",
                "listenerName": "The Hell Where Ideals Burn - ATK% - Hrunting",
                "owners": [],
            },
            {
                "trigger": "SkillEnd",
                condition(battleData,generalInfo) {
                    let ownerRef = this.owners;
                    let sourceTurn = generalInfo.sourceTurn;

                    let ownersSlots = this.ownersSlots;
                    let ownerRank = ownersSlots[sourceTurn.name];
                    if (!ownerRank || sourceTurn.whereIdealsBurnCOMPLETED) {return;}

                    if (!sourceTurn.whereIdealsBurnSTACKSHEET) {
                        let lcNameRef = "The Hell Where Ideals Burn";
                        let lcPathing = lightcones[lcNameRef].params;
                        let rankParams = lcPathing[ownerRank-1];

                        let values = rankParams[3];

                        sourceTurn.whereIdealsBurnSTACKSHEET = {
                            "stats": [ATKP],
                            [ATKP]: values,
                            "source": lcNameRef,
                            "sourceOwner": sourceTurn.properName,
                            "buffName": turnLogicLightcones[lcNameRef].buffNames.hruntingStack,
                            "duration": 1,
                            "AVApplied": 0,
                            "maxStacks": 4,
                            "currentStacks": 1,
                            "decay": false,
                            "expireType": null,
                        }
                    }
                    let buffSheet = sourceTurn.whereIdealsBurnSTACKSHEET;
                    let buffName = buffSheet.buffName;
                    
                    battleActions.updateBuff(battleData,sourceTurn,buffSheet);

                    if (sourceTurn.buffsObject[buffName].currentStacks === 4) {
                        sourceTurn.whereIdealsBurnCOMPLETED = true;
                        const tempLogic = battleData.battleLogicTemp;
                        const burnRef = tempLogic.whereIdealsBurn;
                        burnRef.completed += 1;

                        if (burnRef.completed === burnRef.total) {
                            battleActions.removeListenerInBattle(battleData,this.listenerName,this.trigger);
                        }
                    }
                },
                "target": "self",
                "listenerName": "The Hell Where Ideals Burn - ATK% Stack - Hrunting Stack",
                "owners": [],
            },
        ],
        "buffNames": {
            "hruntingStart": "Hrunting",
            "hruntingStack": "Hrunting Stack"
        },
    },
    "Worrisome, Blissful": {
        logic(thisTurn,battleData) {},
        "skillFunctions": {},
        "listeners": [
            {
                "trigger": "PreBattleEntersCombat",
                condition(battleData,generalInfo) {
                    let ownerRef = this.owners;//would apply at the start to any and all owners, each, hence owners instead of ownersSlots
                    let lcNameRef = "Worrisome, Blissful";
                    let lcPathing = lightcones[lcNameRef].params;
                    const updateBuff = battleActions.updateBuff;

                    // let buffName = this.buffNames.fuaDMG;
                    let buffSheet = this.buffSheet ??= {
                        "stats": [DamageFUA],
                        [DamageFUA]: 0,
                        "source": lcNameRef,
                        "sourceOwner": "",
                        "buffName": turnLogicLightcones[lcNameRef].buffNames.fuaDMG,
                        "duration": 1,
                        "AVApplied": 0,
                        "maxStacks": 1,
                        "currentStacks": 1,
                        "decay": false,
                        "expireType": null
                    }
                    for (let owner of ownerRef) {
                        let charSlot = owner.slot;
                        let rankParams = lcPathing[owner.rank-1];
                        let currentTurn = battleData.nameBasedTurns[charSlot];

                        buffSheet[DamageFUA] = rankParams[1]
                        buffSheet.sourceOwner = currentTurn.properName;
                        updateBuff(battleData,currentTurn,buffSheet);
                    }
                    // const tempLogic = battleData.battleLogicTemp;
                    // const burnRef = tempLogic.whereIdealsBurn ??= {};
                    // burnRef.total = ownerRef.length;
                    // burnRef.completed = 0;
                },
                "target": "self",
                "listenerName": "Worrisome, Blissful fua buff",
                "owners": [],
            },
            {
                "trigger": "AttackEnd",
                condition(battleData,generalInfo) {
                    let ownerRef = this.owners;
                    let sourceTurn = generalInfo.sourceTurn;

                    let ownersSlots = this.ownersSlots;
                    let ownerRank = ownersSlots[sourceTurn.name];
                    if (!ownerRank) {return;}
                    if (!generalInfo.ATKObject.isFUA) {return;}

                    const targetsGotHit = generalInfo.targetsGotHit;

                    if (!sourceTurn.worrisomBlissfulTameSTACKSHEET) {
                        let lcNameRef = "Worrisome, Blissful";
                        let lcPathing = lightcones[lcNameRef].params;
                        let rankParams = lcPathing[ownerRank-1];
                        // let ownerName = sourceTurn.properName;

                        sourceTurn.worrisomBlissfulTameSTACKSHEET = {
                            "stats": [CritDamageBase],
                            [CritDamageBase]: rankParams[2],
                            "source": lcNameRef,
                            "sourceOwner": sourceTurn.properName,
                            "buffName": turnLogicLightcones[lcNameRef].buffNames.tame,
                            "duration": 1,
                            "AVApplied": 0,
                            "maxStacks": 2,
                            "currentStacks": 1,
                            "decay": false,
                            "expireType": null,
                            "isDebuff": true,
                            "actionTags": ["Attack"]
                        }
                    }
                    let buffSheet = sourceTurn.worrisomBlissfulTameSTACKSHEET;
                    let buffName = buffSheet.buffName;
                    

                    const enemyTurns = battleData.enemyBasedTurns;
                    const updateBuff = battleActions.updateBuff;
                    for (let enemyHit in targetsGotHit) {
                        const currentEnemy = enemyTurns[enemyHit];
                        if (currentEnemy.worrisomBlissfulTameSTACKCOMPLETE) {continue;}
                        
                        updateBuff(battleData,currentEnemy,buffSheet);
                        const buffCheck = currentEnemy.buffsObject[buffName];
                        if (buffCheck.currentStacks === 2) {
                            currentEnemy.worrisomBlissfulTameSTACKCOMPLETE = true;
                        }
                    }
                    //kinda blows but I can't remove the listener after every enemy is full stacked, if that ever happened, bc new waves
                },
                "target": "enemy",
                "listenerName": "Worrisome, Blissful - Tame stacker",
                "owners": [],
            },
        ],
        "buffNames": {
            "fuaDMG": "One At A Time",
            "tame": "Tame [Worrisome, Blissful]"
        },
    },
    "Swordplay": {
        logic(thisTurn,battleData) {},
        "skillFunctions": {},
        "listeners": [
            {
                "trigger": "AttackStart",
                condition(battleData,generalInfo) {
                    // poke("FUAStart",battleData,{sourceTurn});
                    let ownersSlots = this.ownersSlots;
                    const sourceTurn = generalInfo.sourceTurn;
                    const ownerRank = ownersSlots[sourceTurn.name];
                    if (!ownerRank) {return;}

                    if (!sourceTurn.swordplayRepeatHitDMGSHEET) {
                        let lcNameRef = "Swordplay";
                        let lcPathing = lightcones[lcNameRef].params;
                        let rankParams = lcPathing[ownerRank-1];
                        
                        let buffName = turnLogicLightcones[lcNameRef].buffNames.dmgStack;
                        sourceTurn.swordplayRepeatHitDMGSHEET = {
                            "stats": [DamageAll],
                            [DamageAll]: rankParams[0],
                            "source": lcNameRef,
                            "sourceOwner": sourceTurn.properName,
                            "buffName": buffName,
                            "duration": 3,
                            "AVApplied": 0,
                            "maxStacks": 5,
                            "currentStacks": 1,
                            "decay": false,
                            "expireType": null
                        }
                    }

                    sourceTurn.swordplayHitsCountTrackingInProgress = true;
                },
                "target": "self",
                "listenerName": "The Ashblazing Grand Duke - Hit tracking start",
                "owners": [],
                "ownersSlots": {}
            },
            {
                "trigger": "HitEnemyEnd",
                condition(battleData,generalInfo) {
                    //CONFIRMED USING TOPAZ, ASHBLAZING, AND SWORDPLAY
                    //swordplay takes effect after a hit, ashblazing takes place before a hit

                    // poke("FUAStart",battleData,{sourceTurn});
                    let ownersSlots = this.ownersSlots;
                    const sourceTurn = generalInfo.sourceTurn;
                    const ownerRank = ownersSlots[sourceTurn.name];
                    if (!ownerRank || !sourceTurn.swordplayHitsCountTrackingInProgress) {return;}
                    //if the hit is coming from a non-owner, or if the hit is coming from an owner that isn't in the middle of hit tracking for an attack, then abort

                    const enemyTurn = battleData.enemyBasedTurns[sourceTurn.swordPlayCurrentlyTrackedTarget];
                    const targetTurn = generalInfo.targetTurn;
                    if (targetTurn.properName != enemyTurn.properName) {return;}

                    const buffSheet = sourceTurn.swordplayRepeatHitDMGSHEET;
                    const buffCheck = sourceTurn.buffsObject[buffSheet.name];
                    //if we're in a super hit-spammy attack, and reached the 5 point already, then abort without bothering the buff handler
                    if (buffCheck && buffCheck.currentStacks === 5) {return;}
                    
                    battleActions.updateBuff(battleData,sourceTurn,buffSheet);
                },
                "target": "self",
                "listenerName": "The Ashblazing Grand Duke - Hit scaling",
                "owners": [],
                "ownersSlots": {}
            },
            {
                "trigger": "AttackEnd",
                condition(battleData,generalInfo) {
                    // poke("FUAEnd",battleData,{sourceTurn});
                    let ownersSlots = this.ownersSlots;
                    const sourceTurn = generalInfo.sourceTurn;
                    const ownerRank = ownersSlots[sourceTurn.name];
                    if (!ownerRank || !sourceTurn.swordplayHitsCountTrackingInProgress) {return;}
                    // sourceTurn.ashblazingFUATrackingInProgress = false;
                    sourceTurn.swordplayHitsCountTrackingInProgress = false;
                },
                "target": "self",
                "listenerName": "The Ashblazing Grand Duke - Hit tracking end",
                "owners": [],
                "ownersSlots": {}
            },
            {
                "trigger": "PreBattleEntersCombat",
                condition(battleData,generalInfo) {
                    let ownerRef = this.owners;//would apply at the start to any and all owners, each, hence owners instead of ownersSlots
                    let lcNameRef = "Swordplay";
                    // let lcPathing = lightcones[lcNameRef].params;
                    // const updateBuff = battleActions.updateBuff;

                    const namedTurns = battleData.nameBasedTurns;
                    const newTarget = battleData.primaryTarget.name;
                    for (let owner of ownerRef) {
                        let charSlot = owner.slot;
                        let currentTurn = namedTurns[charSlot];

                        currentTurn.swordPlayCurrentlyTrackedTarget = newTarget;
                    }
                },
                "target": "self",
                "listenerName": "Swordplay target assignment battlestart",
                "owners": [],
                "ownersSlots": {}
            },
            {
                "trigger": "EnemyDied",
                condition(battleData,generalInfo) {
                    // poke("EnemyDied",battleData,{sourceTurn, enemyKilled:killed});
                    let ownerRef = this.owners;//would apply at the start to any and all owners, each, hence owners instead of ownersSlots
                    // let lcNameRef = "Swordplay";
                    // let lcPathing = lightcones[lcNameRef].params;
                    // const updateBuff = battleActions.updateBuff;

                    const allyTurns = battleData.nameBasedTurns;
                    const enemyTurns = battleData.enemyBasedTurns;
                    // const updateBuff = battleActions.updateBuff;
                    if (battleData.battleIsOver) {return;}
                    const newTarget = battleData.primaryTarget.name;
                    for (let owner of ownerRef) {
                        let charSlot = owner.slot;
                        let currentTurn = allyTurns[charSlot];

                        const trackedTarget = currentTurn.swordPlayCurrentlyTrackedTarget;
                        const currentTarget = enemyTurns[currentTurn.swordPlayCurrentlyTrackedTarget];
                        if (trackedTarget && currentTarget.isDead) {
                            removeBuff(battleData,currentTurn,currentTurn.swordplayRepeatHitDMGSHEET);
                            currentTurn.swordPlayCurrentlyTrackedTarget = newTarget;
                        }
                        else {break;}//all swordplay users will share the same target, for now at least
                        //TODO: if I ever add super annoying target handling, I'd need to redo this part
                    }
                },
                "target": "self",
                "listenerName": "Swordplay target assignment death/target switch",
                "owners": [],
                "ownersSlots": {}
            },
        ],
        "buffNames": {
            "dmgStack": "Answers of Their Own"
        },
    },

    //ABUNDANCE
    "Quid Pro Quo": {
        logic(thisTurn,battleData) {},
        "skillFunctions": {},
        "listeners": [  
            {
                "trigger": "StartTurn",
                condition(battleData,generalInfo) {
                    // let ownerRef = this.owners;
                    let sourceTurn = generalInfo.sourceTurn;
                    let charSlot = sourceTurn.name;

                    let ownersSlots = this.ownersSlots;
                    let ownerRank = ownersSlots[charSlot];
                    if (!ownerRank) {return;}
                    

                    let availableToGive = [];
                    const allyPositions = battleData.allyPositions;
                    for (let targetTurn of allyPositions) {
                        if (targetTurn.name === charSlot || targetTurn.maxEnergy === null) {continue;}//exclude self from energy considerations, exclude special energy characters like acheron
                        else if (targetTurn.currentEnergy < (targetTurn.maxEnergy * 0.50)) {availableToGive.push(targetTurn.name);}
                    }

                    if (!availableToGive.length) {return;}

                    let avPULL = battleData.sumAV;
                    if (avPULL >= 1000) {avPULL -= 1000;}
                    let avBingo = (avPULL % 100)/100;
                    let bingoIncrements = 1/availableToGive.length;
                    let chosenValue = null;
                    for (let i=0;i<=availableToGive.length-1;i++) {
                        let currentInc = i * bingoIncrements;
                        let nextInc = (i + 1) * bingoIncrements;

                        if (avBingo >= currentInc && avBingo <= nextInc) {chosenValue = i; break;}
                    }
                    //so this isn't really random, but I didn't want to avg the energy gains(very very bad idea holy fuck), but I also didn't want to do something
                    //that was as simple as "evaluate from left to right" as there are obvious problems with that, SO INSTEAD, what I have chosen to do is thus
                    //take everyone who COULD be given energy, and put them in an array, then get the remainder of action value from the present battle AV overall
                    //then we take that remainder, divide it by 100 to get a percentage, then apply that % to the array length of available recipients
                    //so if the % lands at .25 and there are 2 entries, .25 < half which means the buff lands on entry #1 of available chars.
                    //If anyone can ever provide me a better way then lmk, bc this is the most fair but also the most reliable for calculations since we don't want fully random.
                    if (!sourceTurn.quidProQuoEnergyAmount) {

                    }
                    // let lcNameRef = "Quid Pro Quo";
                    // let lcPathing = lightcones[lcNameRef].params;
                    // let rankParams = lcPathing[ownerRank-1];
                    let values = sourceTurn.quidProQuoEnergyAmount ??= lightcones["Quid Pro Quo"].params[ownerRank-1][1];//energy slot

                    let chosenCharacter = availableToGive[chosenValue];
                    let luckyBastard = battleData.nameBasedTurns[chosenCharacter];
                    battleActions.updateEnergy(battleData,values,luckyBastard,false,this.listenerName);
                },
                "target": "self",
                "listenerName": "Quid Pro Quo - Energy buff controller",
                "owners": []
            },
        ],
        "buffNames": {
            // "hruntingStart": "Hrunting",
            // "hruntingStack": "Hrunting Stack"
        },
    },
    "Time Waits for No One": {
        logic(thisTurn,battleData) {},
        "skillFunctions": {
            lcAddedDMG(battleData,generalInfo,sourceTurn,targetsGotHit,ownerRank) {
                // battleData,generalInfo,sourceTurn,targetsGotHit

                //So this lightcone is super cursed, as it describes the dmg it deals can't benefit from ANY dmg tags, however,
                //it WILL benefit from RESPEN, DEF SHRED, or VULN on the target, so for the sake of tags DMG is set to []
                //but for everything else, the tags still need to line up for everything to work and line up properly
                //confirmed no dmg bonus by having bronya on field
                //confirmed vuln and whatnot work by having e2 silver wolf on field
                if (!sourceTurn.timeWaitsForNoOneAddedDMGObject) {
                    let lcNameRef = "Time Waits for No One";
                    let lcPathing = lightcones[lcNameRef].params;
                    sourceTurn.rankParamsLCTimeWaitsForNoOne = lcPathing[ownerRank-1];

                    const element = sourceTurn.element;
                    const tags = ["All",element];
                    const actionTags = ["Additional"];
                    const keyShortcut = basicShorthand.makeKeysArray;
                    const realDMGKeys = [];
                    const realPENKeys = keyShortcut(resPENKeys,tags);
                    const realShredKeys = keyShortcut(defShredKeys,tags);
                    const realVulnKeys = keyShortcut(vulnKeys,tags);
                    //realDMGKeys,realPENKeys,realShredKeys,realVulnKeys
                    sourceTurn.timeWaitsForNoOneAddedDMGObject = {
                        multipliers: {
                            primary: null,
                            blast: null,
                            all: null,
                            additional: null
                        },
                        scalar:null,
                        element: element,//override for additional dmg, not used otherwise
                        DMGTags: tags,
                        allToughness: false,
                        slot: null,
                        realDMGKeys,realPENKeys,realShredKeys,realVulnKeys,
                        actionTags
                    }
                }
                const values = sourceTurn.rankParamsLCTimeWaitsForNoOne;
                let ATKObject = sourceTurn.timeWaitsForNoOneAddedDMGObject;
                ATKObject.multipliers.additional = values[2] * sourceTurn.lcTimeWaitsForNoOneHealing;

                let primaryTarget = battleData.primaryTarget;
                const addedWrapper = battleActions.additionalDMGWrapper;
                const characterName = sourceTurn.properName;
                
                if (!primaryTarget || primaryTarget.isDead) {
                    const enemyPositions = battleData.enemyPositions;
                    if (enemyPositions.length) {
                        //cursed, but additional dmg doesn't happen if the target is dead, so if the primary target
                        //is dead then loop through all targets hit in the attack, and if we find one living, then attack it
                        const enemyTurns = battleData.enemyBasedTurns;
                        for (let enemyHit in targetsGotHit) {
                            const currentEnemy = enemyTurns[enemyHit];
                            if (!currentEnemy || currentEnemy.isDead) {continue;}
                            primaryTarget = currentEnemy;
                        }
                    }
                }
                if (primaryTarget && !primaryTarget.isDead) {
                    addedWrapper(battleData,sourceTurn,characterName,ATKObject,primaryTarget,"Time Waits for No One [LC]");
                    // tallyRef.push({
                    //     ...addedHit.hit
                    // })
                }
            },
        },
        "listeners": [
            {
                "trigger": "HealEnd",
                condition(battleData,generalInfo) {
                    // poke("HealEnd",battleData,{targetTurn,sourceTurn,totalHealed,overHeal,actualHeal});
                    let ownersSlots = this.ownersSlots;
                    let sourceTurn = generalInfo.sourceTurn;
                    let ownerRank = ownersSlots[sourceTurn.name];
                    if (!ownerRank) {return;}//abort non-owners

                    const totalHealed = generalInfo.totalHealed;
                    sourceTurn.lcTimeWaitsForNoOneHealing = (sourceTurn.lcTimeWaitsForNoOneHealing ?? 0) + totalHealed;
                },
                "target": "self",
                "listenerName": "Time Waits for No One - healing listener",
                "owners": [],
                "ownersSlots": {}
            },
            {
                "trigger": "AdditionalTriggerAttackEnd",
                condition(battleData,generalInfo) {
                    // let ownerTurn = this.ownerTurn;
                    let sourceTurn = generalInfo.sourceTurn;
                    if (sourceTurn.isEnemy) {return;}
                    const ownersSlots = this.ownersSlots;

                    // let characterName = ownerTurn.properName;
                    const lcNameRef = "Time Waits for No One";
                    const logicRef = turnLogicLightcones[lcNameRef];
                    const addedDMG = logicRef.skillFunctions.lcAddedDMG;
                    const targetsGotHit = generalInfo.targetsGotHit;

                    const allyTurns = battleData.nameBasedTurns;
                    for (let owner in ownersSlots) {
                        const currentOwner = allyTurns[owner];
                        if (currentOwner.lcTimeWaitsForNoOneDMGDONE) {continue;}
                        const ownerRank = ownersSlots[owner];
                        const healingAmount = currentOwner.lcTimeWaitsForNoOneHealing;
                        if (!healingAmount) {continue;}
                        addedDMG(battleData,generalInfo,currentOwner,targetsGotHit,ownerRank);
                        currentOwner.lcTimeWaitsForNoOneHealing = 0;
                        currentOwner.lcTimeWaitsForNoOneDMGDONE = true;
                    }
                },
                "target": "enemy",
                "listenerName": "Time Waits for No One attack listener for additional dmg",
                "announce": false,
                "owners": [],
                "ownersSlots": {}
            },
            {
                "trigger": "StartTurn",
                condition(battleData,generalInfo) {
                    let sourceTurn = generalInfo.sourceTurn;
                    if (sourceTurn.isEnemy) {return;}
                    const ownersSlots = this.ownersSlots;
                    const ownerRank = ownersSlots[sourceTurn.name];
                    if (!ownerRank) {return;}

                    sourceTurn.lcTimeWaitsForNoOneDMGDONE = false;
                },
                "target": "self",
                "listenerName": "Time Waits for No One - turn start dmg done reset",
                "announce": false,
                "owners": [],
                "ownersSlots": {}
            },
        ],
        "buffNames": {},
    },

    //NIHILITY
    "Incessant Rain": {
        logic(thisTurn,battleData) {},
        "skillFunctions": {},
        "listeners": [
            {
                "trigger": "AllyDMGStart",
                condition(battleData,generalInfo) {
                    // let ownerRef = this.owners;
                    let ownersSlots = this.ownersSlots;
                    let sourceTurn = generalInfo.sourceTurn;
                    let targetTurn = generalInfo.targetTurn;

                    let ownerRank = ownersSlots[sourceTurn.name];
                    if (!ownerRank) {return;}

                    let lcNameRef = "Incessant Rain";
                    let buffName = this.buffName ??= turnLogicLightcones[lcNameRef].buffNames.buff1;

                    let debuffsCount = targetTurn.debuffCounter;
                    let buffCheck = sourceTurn.buffsObject[buffName];
                    let debuffCheck = debuffsCount >= 3;
                    if (buffCheck && !debuffCheck) {//if the buff exists, and the debuffs are less than enough
                        removeBuff(battleData,sourceTurn,buffCheck);
                    }
                    else if (!buffCheck && debuffCheck) {//otherwise, if the buff isn't applied yet, then add it
                        if (!sourceTurn.incessantRainCRITSHEET) {
                            let lcPathing = lightcones[lcNameRef].params;
                            let rankParams = lcPathing[ownerRank-1];

                            let values = rankParams[4];

                            sourceTurn.incessantRainCRITSHEET = {
                                "statsOnHit": [CritRateBase],
                                [CritRateBase]: values,
                                "source": lcNameRef,
                                "sourceOwner": sourceTurn.properName,
                                "buffName": buffName,
                                "duration": 1,
                                "AVApplied": battleData.sumAV,
                                "maxStacks": 1,
                                "currentStacks": 1,
                                "decay": false,
                                "expireType": null,
                            }
                        }
                        
                        let buffSheet = sourceTurn.incessantRainCRITSHEET;
                        battleActions.updateBuff(battleData,sourceTurn,buffSheet);
                    }
                },
                "target": "self",
                "listenerName": "Incessant Rain - Crit rate check",
                "owners": [],
                "ownersSlots": {},
            },
            {
                "trigger": "AttackEnd",
                condition(battleData,generalInfo) {
                    //ik most debuffs apply as the attack starts, not after they land, but this one is an AFTER application and I did confirm that
                    // let ownerRef = this.owners;
                    let ownersSlots = this.ownersSlots;

                    let sourceTurn = generalInfo.sourceTurn;
                    // console.log(generalInfo.dmgSlot)
                    let skillType = generalInfo.dmgSlot;
                    if (skillType != "Skill" && skillType != "Ultimate" && skillType != "Basic ATK") {return;}//will only apply when these attack types happen

                    
                    let charSlot = sourceTurn.name;
                    let ownerRank = ownersSlots[charSlot];
                    if (!ownerRank) {return;}

                    if (!sourceTurn.incessantRainVULNSHEET) {
                        let lcNameRef = "Incessant Rain";
                        let lcPathing = lightcones[lcNameRef].params;
                        let rankParams = lcPathing[ownerRank-1];
                        let values = rankParams[2];//vuln
                        
                        sourceTurn.incessantRainVULNSHEET = {
                            "stats": [VulnAll],
                            [VulnAll]: values,
                            "source": lcNameRef,
                            "sourceOwner": sourceTurn.properName,
                            "buffName": turnLogicLightcones[lcNameRef].buffNames.buff2,
                            "duration": 1,
                            "AVApplied": 0,
                            "maxStacks": 1,
                            "currentStacks": 1,
                            "decay": false,
                            "expireType": "EndTurn",
                            "isDebuff": true,
                        }
                    }
                    let buffSheet = sourceTurn.incessantRainVULNSHEET;
                    let buffName = buffSheet.buffName;
                    const targetsAttacked = generalInfo.targetsGotHit;
                    
                    const enemyTurns = battleData.enemyBasedTurns;
                    const updateBuff = battleActions.updateBuff;
                    for (let targetHit in targetsAttacked) {
                        const currentEnemy = enemyTurns[targetHit];
                        if (currentEnemy.buffsObject[buffName]) {continue;}//do not consider those who already have the buff

                        buffSheet.target = currentEnemy.properName;
                        buffSheet.duration = currentEnemy.turnState ? 2 : 1;//if the enemy hit is in its turn right now, it lasts longer
                        // 
                        updateBuff(battleData,currentEnemy,buffSheet);
                        break;//we look from left to right to find the first person who doesn't have it among all those hit
                        //NOT A GREAT METHOD TBH, but we can look at it later. It's not as if she's only hitting enemies with her ult, she single-targets enemies all the time.
                        //that said, she may not always be the one to use this(fr tho who the fuck uses this lc anymore)
                    }  
                },
                "target": "enemy",
                "listenerName": "Incessant Rain Aether Code controller",
                "owners": [],
                "ownersSlots": {},
            },
        ],
        "buffNames": {
            "buff1": "Incessant Rain CRIT Rate",
            "buff2": "Aether Code"
        },
    },
    "Before the Tutorial Mission Starts": {
        logic(thisTurn,battleData) {},
        "skillFunctions": {},
        "listeners": [
            {
                "trigger": "AttackEnd",
                condition(battleData,generalInfo) {
                    let ownersSlots = this.ownersSlots;
                    let sourceTurn = generalInfo.sourceTurn;
                    let ownerRank = ownersSlots[sourceTurn.name];
                    if (!ownerRank) {return;}

                    const targetsGotHit = generalInfo.targetsGotHit;
                    const enemyTurns = battleData.enemyBasedTurns;
                    let targetsFound = 0;
                    for (let targetSlot in targetsGotHit) {
                        const currentEnemy = enemyTurns[targetSlot];
                        const DEFCheck = currentEnemy.statTable[DEFP] < 0;

                        if (DEFCheck) {targetsFound += 1;}
                    }
                    //TODO: check if this is per target reduced or is it an attack-wide "if any one had reduced def, regen once" kinda bullshit
                    if (targetsFound) {
                        if (!sourceTurn.tutorialMissionLCEnergyValues) {
                            let lcNameRef = "Before the Tutorial Mission Starts";
                            let lcPathing = lightcones[lcNameRef].params;
                            sourceTurn.tutorialMissionLCEnergyValues = lcPathing[ownerRank-1];
                        }

                        // const energyToRegen = sourceTurn.tutorialMissionLCEnergyValues[1] * targetsFound;
                        const energyToRegen = sourceTurn.tutorialMissionLCEnergyValues[1];
                        battleActions.updateEnergy(battleData,energyToRegen,sourceTurn,false,"Before the Tutorial Mission Starts");
                    }
                },
                "target": "enemy",
                "listenerName": "Before the Tutorial Mission Starts energy controller",
                "owners": [],
                "ownersSlots": {},
                "buffNames": {},
            },
        ],
        "buffNames": {},
    },
    "Patience Is All You Need": {
        logic(thisTurn,battleData) {},
        "skillFunctions": {},
        "listeners": [
            {
                "trigger": "PreBattleEntersCombat",
                condition(battleData,generalInfo) {
                    let ownerRef = this.owners;

                    const patienceNihilityLCRef = battleData.battleLogicTemp.patienceNihilityLCRef ??= {};
                    patienceNihilityLCRef.total = ownerRef.length;
                    patienceNihilityLCRef.completed = 0;
                },
                "target": "self",
                "listenerName": "Patience Is All You Need - temp logic",
                "owners": [],
            },
            {
                "trigger": "AttackEnd",
                condition(battleData,generalInfo) {
                    // let ownerRef = this.owners;
                    let sourceTurn = generalInfo.sourceTurn;

                    let ownersSlots = this.ownersSlots;
                    let ownerRank = ownersSlots[sourceTurn.name];
                    if (!ownerRank || sourceTurn.patienceIsAllSPDCompleted) {return;}

                    if (!sourceTurn.patienceIsAllSPDCompleted) {
                        let lcNameRef = "Patience Is All You Need";
                        let lcPathing = lightcones[lcNameRef].params;
                        let rankParams = lcPathing[ownerRank-1];

                        sourceTurn.patienceIsAllSTACKSHEET = {
                            "stats": [SPDP],
                            [SPDP]: rankParams[2],
                            "source": lcNameRef,
                            "sourceOwner": sourceTurn.properName,
                            "buffName": turnLogicLightcones[lcNameRef].buffNames.spdStack,
                            "duration": 1,
                            "AVApplied": 0,
                            "maxStacks": 3,
                            "currentStacks": 1,
                            "decay": false,
                            "expireType": null,
                        }
                    }
                    let buffSheet = sourceTurn.patienceIsAllSTACKSHEET;
                    let buffName = buffSheet.buffName;
                    
                    battleActions.updateBuff(battleData,sourceTurn,buffSheet);

                    if (sourceTurn.buffsObject[buffName].currentStacks === 3) {
                        sourceTurn.patienceIsAllSPDCompleted = true;

                        const patienceNihilityLCRef = battleData.battleLogicTemp.patienceNihilityLCRef;
                        // patienceNihilityLCRef.total = ownerRef.length;
                        patienceNihilityLCRef.completed += 1;

                        if (patienceNihilityLCRef.completed === patienceNihilityLCRef.total) {
                            battleActions.removeListenerInBattle(battleData,this.listenerName,this.trigger);
                        }
                    }
                },
                "target": "self",
                "listenerName": "Patience Is All You Need - SPD% Stack",
                "owners": [],
            },
            {
                "trigger": "AttackDMGEnd",
                condition(battleData,generalInfo) {
                    let sourceTurn = generalInfo.sourceTurn;

                    let ownersSlots = this.ownersSlots;
                    let ownerRank = ownersSlots[sourceTurn.name];
                    if (!ownerRank) {return;}
                    
                        
                    if (!sourceTurn.patienceIsAllErodeDOTSHEET) {
                        // let characterName = sourceTurn.properName;
                        let lcNameRef = "Patience Is All You Need";
                        let lcPathing = lightcones[lcNameRef].params;
                        let rankParams = lcPathing[ownerRank-1];
                        // let ownerName = sourceTurn.properName;

                        const tags = ["All","Lightning","DOT"];
                        const keyShortcut = basicShorthand.makeKeysArray;
                        const realDMGKeys = keyShortcut(dmgKeys,tags);
                        const realPENKeys = keyShortcut(resPENKeys,tags);
                        const realShredKeys = keyShortcut(defShredKeys,tags);
                        const realVulnKeys = keyShortcut(vulnKeys,tags);
                        //realDMGKeys,realPENKeys,realShredKeys,realVulnKeys
                        const actionTags = ["DOT"];

                        let buffName = turnLogicLightcones[lcNameRef].buffNames.erode;
                        sourceTurn.patienceIsAllErodeDOTSHEET = {
                            "stats": null,
                            "source": lcNameRef,
                            "sourceOwner": sourceTurn.properName,
                            "buffName": buffName,
                            "duration": 1,
                            "AVApplied": 0,
                            "maxStacks": 1,
                            "currentStacks": 1,
                            "decay": false,
                            "expireType": "EndTurn",
                            "isDOT": true,
                            "isDebuff": true,
                            "element": "Lightning",
                            multiplier: rankParams[0],
                            scalar: "ATK",
                            slot: null,
                            ownerIsAllied: true,
                            ownerSlot: sourceTurn.name,
                            avgChanceApplied: 1,
                            baseChance: 1,
                            tags,actionTags,
                            realDMGKeys,realPENKeys,realShredKeys,realVulnKeys
                        }
                    }
                    // poke("TargetShield",battleData,{targetType:"Team", sourceTurn, targetTurn:null, targetSkill:skillRef.slot});
                    const dotSheet = sourceTurn.patienceIsAllErodeDOTSHEET;
                    const buffName = dotSheet.buffName;
                    dotSheet.AVApplied = battleData.sumAV;
    
                    const enemiesHit = generalInfo.targetsGotHit;
                    const enemyTurns = battleData.enemyBasedTurns;
                    const getChance = battleActions.getChanceToApply;
                    const baseChance = dotSheet.baseChance;
                    const updateBuff = battleActions.updateBuff;
                    for (let enemySlot in enemiesHit) {
                        const currentEnemy = enemyTurns[enemySlot];
                        const buffCheck = currentEnemy.buffsObject[buffName];
                        if (buffCheck) {continue;}

                        const totalTimesHit = enemiesHit[enemySlot];
                        dotSheet.duration = currentEnemy.turnState ? 3 : 2
                        const resultingChance = getChance(battleData,sourceTurn,currentEnemy,baseChance);
                        let finalAVG = resultingChance;
                        if (totalTimesHit && totalTimesHit>1 && resultingChance != 1) {
                            const chanceToFail = 1 - resultingChance;
                            const composite = chanceToFail ** totalTimesHit;
                            finalAVG = 1 - composite;
                        }
                        dotSheet.avgChanceApplied = finalAVG;
                        updateBuff(battleData,currentEnemy,dotSheet);
                    }
                },
                "target": "enemy",
                "listenerName": "Patience Is All You Need - erode application",
                "owners": [],
            },
        ],
        "buffNames": {
            "spdStack": "Patience Is All You Need",
            "erode": "Erode"
        },
    },
    // "Why Does the Ocean Sing": {
    //     logic(thisTurn,battleData) {},
    //     "skillFunctions": {
    //         debuffChecker(battleData,generalInfo,source,ownerSlot,ownerRank) {
    //             let sourceTurn = generalInfo.sourceTurn;

    //             const buffsRef = sourceTurn.buffsObject;
    //             let debuffsOwned = 0;
    //             for (let buffName in buffsRef) {
    //                 const currentBuff = buffsRef[buffName];
    //                 if (!currentBuff || !currentBuff.isDebuff) {continue;}
    //                 const buffOwner = currentBuff.sourceOwner;
    //                 debuffsOwned += buffOwner === source ? 1 : 0;
    //             }
    //             const finalStacks = Math.min(6,debuffsOwned);
    //             const ownerTurn = battleData.nameBasedTurns[ownerSlot];


    //             // let buffName = listenerRef.buffNames.debuffStacks;
    //             let lcNameRef = "Why Does the Ocean Sing";
    //             let buffName = turnLogicLightcones[lcNameRef].buffNames.spdBuff;
    //             if (!ownerTurn.oceanSingEnthrallmentSHEET) {
                    
    //                 let lcPathing = lightcones[lcNameRef].params;
    //                 let rankParams = lcPathing[ownerRank-1];
    //                 let ownerName = ownerTurn.properName;
                    

    //                 ownerTurn.oceanSingEnthrallmentSHEET = {
    //                     "stats": [VulnDOT],
    //                     [VulnDOT]: rankParams[3],
    //                     "source": lcNameRef,
    //                     "sourceOwner": ownerName,
    //                     "buffName": buffName,
    //                     "duration": 3,
    //                     "AVApplied": 0,
    //                     "maxStacks": 6,
    //                     "currentStacks": 1,
    //                     "decay": false,
    //                     "expireType": "EndTurn",
    //                     "isDebuff": true
    //                 }
    //             }
    //             let buffSheet = ownerTurn.oceanSingEnthrallmentSHEET;
                
    //             // battleActions.updateBuff(battleData,sourceTurn,buffSheet);


    //             const buffCheck = buffsRef[buffName];
    //             const updateBuff = battleActions.updateBuff;
    //             if (buffCheck) {
    //                 const stackCount = buffCheck.currentStacks;
    //                 if (stackCount === finalStacks) {return;}
    //                 else if (stackCount < finalStacks) {
    //                     const stackDiff = finalStacks - stackCount;
    //                     buffSheet.currentStacks = stackDiff;
    //                     buffSheet.duration = sourceTurn.turnState ? 4 : 3;
    //                     updateBuff(battleData,sourceTurn,buffSheet,false,null,true);
    //                     return;
    //                 }
    //                 else {
    //                     if (finalStacks) {removeBuff(battleData,sourceTurn,buffCheck,true,null,true);
    //                     }
    //                     else {
    //                         removeBuff(battleData,sourceTurn,buffCheck,false,null,true);
    //                         return;
    //                     }
    //                 }
    //             }

    //             if (!finalStacks) {return;}
    //             const realStacks = Math.min(6,finalStacks + (!buffCheck ? 1 : 0));
    //             //since enthrallment counts as a debuff itself, that means when we add the debuff for the first time, we need to make sure that we add +1 stacks to account for that
    //             //otherwise, what will happen is we'll apply it not accounting for enthrallment being a debuff, then appliedDebuff will trigger again, then we'll add one extra stack anyways
    //             //so no point in looping through until stacks balance out, just do it here
    //             buffSheet.currentStacks = realStacks;
    //             buffSheet.duration = sourceTurn.turnState ? 4 : 3;
    //             updateBuff(battleData,sourceTurn,buffSheet,false,null,buffCheck);
    //         }
    //     },
    //     "listeners": [
    //         // poke("DebuffApplied",battleData,{sourceTurn,currentReference});
    //         // poke("DebuffRemoved",battleData,{sourceTurn,currentReference});
    //         {
    //             "trigger": "DebuffApplied",
    //             condition(battleData,generalInfo) {
    //                 // let ownerRef = this.owners;
    //                 const source = generalInfo.currentReference.sourceOwner;
    //                 const ownerSlot = battleData.nameIndex[source];

    //                 let ownersSlots = this.ownersSlots;
    //                 let ownerRank = ownersSlots[ownerSlot];
    //                 if (!ownerRank) {return;}//if the debuff owner isn't an owner of the lightcone, abort early
                    
    //                 const debuffFunction = this.debuffFunction ??= turnLogicLightcones["Why Does the Ocean Sing"].skillFunctions.debuffChecker;
    //                 debuffFunction(battleData,generalInfo,source,ownerSlot,ownerRank);
    //             },
    //             "target": "self",
    //             "listenerName": "Why Does the Ocean Sing - debuffs owned check (application)",
    //             "owners": [],
    //         },
    //         {
    //             "trigger": "DebuffRemoved",
    //             condition(battleData,generalInfo) {
    //                 // let ownerRef = this.owners;
    //                 const source = generalInfo.currentReference.sourceOwner;
    //                 const ownerSlot = battleData.nameIndex[source];

    //                 let ownersSlots = this.ownersSlots;
    //                 let ownerRank = ownersSlots[ownerSlot];
    //                 if (!ownerRank) {return;}//if the debuff owner isn't an owner of the lightcone, abort early

    //                 const debuffFunction = this.debuffFunction ??= turnLogicLightcones["Why Does the Ocean Sing"].skillFunctions.debuffChecker;
    //                 debuffFunction(battleData,generalInfo,source,ownerSlot,ownerRank);
    //             },
    //             "target": "self",
    //             "listenerName": "Why Does the Ocean Sing - debuffs owned check (removal)",
    //             "owners": [],
    //         },
    //         {
    //             "trigger": "AttackDMGEnd",
    //             condition(battleData,generalInfo) {
    //                 // poke("AttackDMGEnd",battleData,generalInfo);
    //                 // let ownerRef = this.owners;
    //                 let sourceTurn = generalInfo.sourceTurn;
    //                 if (sourceTurn.isEnemy) {return;}
    //                 const targetsGotHit = generalInfo.targetsGotHit;
    //                 // let buffName = this.buffNames.debuffStacks;

    //                 let lcNameRef = "Why Does the Ocean Sing";
    //                 let buffName = turnLogicLightcones[lcNameRef].buffNames.spdBuff;


    //                 const enemyTurns = battleData.enemyBasedTurns;
    //                 let enthrallRef = null;
    //                 for (let enemyHit in targetsGotHit) {
    //                     const currentEnemy = enemyTurns[enemyHit];
    //                     const buffCheck = currentEnemy.buffsObject[buffName];
    //                     if (buffCheck) {
    //                         enthrallRef = buffCheck;
    //                         break;
    //                     }
    //                 }

    //                 if (enthrallRef) {
    //                     const sourceOwner = enthrallRef.sourceOwner;
    //                     const ownerSlot = battleData.nameIndex[sourceOwner];
    //                     let ownersSlots = this.ownersSlots;
    //                     const ownerRank = ownersSlots[ownerSlot];
    //                     const ownerTurn = battleData.nameBasedTurns[ownerSlot];

    //                     if (!ownerTurn.oceanSingEnthrallmentSPEEDSHEET) {
    //                         let lcNameRef = "Why Does the Ocean Sing";
    //                         let lcPathing = lightcones[lcNameRef].params;
    //                         let rankParams = lcPathing[ownerRank-1];
    //                         let ownerName = ownerTurn.properName;
    //                         // let buffName = turnLogicLightcones[lcNameRef].buffNames.spdBuff;
    
    //                         ownerTurn.oceanSingEnthrallmentSPEEDSHEET = {
    //                             "stats":[SPDP],
    //                             [SPDP]: rankParams[5],
    //                             "source": lcNameRef,
    //                             "sourceOwner": ownerName.properName,
    //                             "buffName": buffName,
    //                             "duration": 3,
    //                             "AVApplied": 0,
    //                             "maxStacks": 1,
    //                             "currentStacks": 1,
    //                             "decay": false,
    //                             "expireType": "EndTurn",
    //                             "isDebuff": true
    //                         }
    //                     }

    //                     let buffSheet = ownerTurn.oceanSingEnthrallmentSPEEDSHEET;
    //                     buffSheet.duration = sourceTurn.turnState ? 4 : 3;
    //                     battleActions.updateBuff(battleData,sourceTurn,buffSheet);
    //                 }
    //             },
    //             "target": "self",
    //             "listenerName": "Why Does the Ocean Sing - SPD check",
    //             "owners": [],
    //         },
    //     ],
    //     "buffNames": {
    //         "debuffStacks": "Enthrallment [LC]",
    //         "spdBuff": "Enthrallment SPD [LC]"
    //     },
    //     // let buffName = turnLogicLightcones[lcNameRef].buffNames.prophet;
    // },
    "Reforged Remembrance": {
        logic(thisTurn,battleData) {},
        "skillFunctions": {},
        "listeners": [
            {
                "trigger": "PreBattleEntersCombat",
                condition(battleData,generalInfo) {
                    let ownerRef = this.owners;//would apply at the start to any and all owners, each, hence owners instead of ownersSlots
                    const tempLogic = battleData.battleLogicTemp;
                    const reforgedRef = tempLogic.reforgedRemembranceLightcone ??= {};
                    reforgedRef.total = ownerRef.length;
                    reforgedRef.completed = 0;
                },
                "target": "self",
                "listenerName": "Reforged Remembrance - temp logic",
                "owners": [],
                "buffNames": {},
            },
            {
                "trigger": "AllyDMGStart", 
                condition(battleData,generalInfo) {
                    let ownersSlots = this.ownersSlots;
                    const sourceTurn = generalInfo.sourceTurn;
                    let ownerRank = ownersSlots[sourceTurn.name];
                    if (!ownerRank) {return;}

                    // const targetsGotHit = generalInfo.targetsGotHit;
                    const targetTurn = generalInfo.targetTurn;
                    if (!targetTurn.debuffCounter) {return;}
                    
                    if (!sourceTurn.reforgedRemembranceSTACKSHEET) {
                        let lcNameRef = "Reforged Remembrance";
                        let buffName = turnLogicLightcones[lcNameRef].buffNames.prophet;
                        let lcPathing = lightcones[lcNameRef].params;
                        let rankParams = lcPathing[ownerRank-1];

                        sourceTurn.reforgedRemembranceSTACKSHEET = {
                            "stats": [ATKP,DEFShredDOT],
                            [ATKP]: rankParams[1],
                            [DEFShredDOT]: rankParams[2],
                            "source": lcNameRef,
                            "sourceOwner": sourceTurn.properName,
                            "buffName": buffName,
                            "duration": 1,
                            "AVApplied": 0,
                            "maxStacks": 4,
                            "currentStacks": 1,
                            "decay": false,
                            "expireType": null,
                        }
                    }
                    let buffSheet = sourceTurn.reforgedRemembranceSTACKSHEET;
                    

                    // dots: {
                    //     "Lightning": 0,
                    //     "Fire": 0,
                    //     "Wind": 0,
                    //     "Physical": 0
                    // },

                    const targetDOTSCheck = targetTurn.dots;
                    let stacksToApply = 0;
                    if (targetDOTSCheck.Wind && !sourceTurn.reforgedWindStackDone) {
                        stacksToApply += 1;
                        sourceTurn.reforgedWindStackDone = true;
                    }
                    if (targetDOTSCheck.Lightning && !sourceTurn.reforgedLightningStackDone) {
                        stacksToApply += 1;
                        sourceTurn.reforgedLightningStackDone = true;
                    }
                    if (targetDOTSCheck.Fire && !sourceTurn.reforgedFireStackDone) {
                        stacksToApply += 1;
                        sourceTurn.reforgedFireStackDone = true;
                    }
                    if (targetDOTSCheck.Physical && !sourceTurn.reforgedPhysicalStackDone) {
                        stacksToApply += 1;
                        sourceTurn.reforgedPhysicalStackDone = true;
                    }




                    if (stacksToApply) {
                        buffSheet.currentStacks = stacksToApply;
                        battleActions.updateBuff(battleData,sourceTurn,buffSheet);
                    }



                    const allDone = sourceTurn.reforgedPhysicalStackDone && sourceTurn.reforgedFireStackDone && sourceTurn.reforgedLightningStackDone && sourceTurn.reforgedWindStackDone;
                    if (allDone) {
                        const tempLogic = battleData.battleLogicTemp;
                        const reforgedRef = tempLogic.reforgedRemembranceLightcone;
                        reforgedRef.completed += 1;

                        if (reforgedRef.completed === reforgedRef.total) {
                            battleActions.removeListenerInBattle(battleData,this.listenerName,this.trigger);
                        }
                    }
                },
                "target": "self",
                "listenerName": "Reforged Remembrance - hit enemy with dot checker",
                "owners": [],
            },
        ],
        "buffNames": {
            "prophet": "Prophet [Reforged Remembrance]"
        },
    },

    //DESTRUCTION
    "Whereabouts Should Dreams Rest": {
        logic(thisTurn,battleData) {},
        "skillFunctions": {},
        "listeners": [
            {
                "trigger": "BreakDMGStart",
                condition(battleData,generalInfo) {
                    let ownersSlots = this.ownersSlots;
                    let sourceTurn = generalInfo.sourceTurn;
                    let ownerRank = ownersSlots[sourceTurn.name];
                    if (!ownerRank) {return;}
                    let targetTurn = generalInfo.targetTurn;
                    // poke("BreakDMGStart",battleData,turnMerge);
                    // {targetTurn,sourceTurn};

                    if (!sourceTurn.whereaboutsDreamsRestSPDDEBUFF) {
                        let lcNameRef = "Whereabouts Should Dreams Rest";
                        let lcPathing = lightcones[lcNameRef].params;
                        let rankParams = lcPathing[ownerRank-1];
                        const buffNames = turnLogicLightcones[lcNameRef].buffNames;
                        let buffName = buffNames.buff1;

                        const customName = `${buffName} (${sourceTurn.properName})`;
                        if (!buffNames[customName]) {buffNames[customName] = customName;}

                        sourceTurn.whereaboutsDreamsRestSPDDEBUFF = {
                            "stats": [SPDP],
                            [SPDP]: -rankParams[2],
                            "source": lcNameRef,
                            "sourceOwner": sourceTurn.properName,
                            "buffName": buffName,
                            "duration": 2,
                            "AVApplied": 0,
                            "maxStacks": 1,
                            "currentStacks": 1,
                            "decay": false,
                            "expireType": "EndTurn",
                            "isDebuff": true
                            //we slap the debuff mark on the spd debuff bc the spd debuff will never stack, the vuln however might with multiple users specific to themselves
                        }
                        sourceTurn.whereaboutsDreamsRestVULNDEBUFF = {
                            "stats": [VulnBreak],
                            [VulnBreak]: rankParams[1],
                            "source": lcNameRef,
                            "sourceOwner": sourceTurn.properName,
                            "buffName": customName,
                            "duration": 2,
                            "AVApplied": 0,
                            "maxStacks": 1,
                            "currentStacks": 1,
                            "decay": false,
                            "expireType": "EndTurn",
                            "isSourceSpecific": true,
                        }

                    }

                    const buffSheet = sourceTurn.whereaboutsDreamsRestSPDDEBUFF;
                    const buffSheet2 = sourceTurn.whereaboutsDreamsRestVULNDEBUFF;
                    // console.log(buffSheet2)

                    const name1 = buffSheet.buffName;
                    const name2 = buffSheet2.buffName;

                    const targetBuffs = targetTurn.buffsObject;
                    const buffCheck = targetBuffs[name1];
                    const buffCheck2 = targetBuffs[name2];

                    const turnState = targetTurn.turnState;
                    if (!buffCheck || (buffCheck && buffCheck.duration != (turnState ? 3 : 2))) {
                        //if the spd debuff doesn't exist, or if it does and isn't refreshed already, then apply it. Otherwise skip the buff update call
                        
                        buffSheet.duration = turnState ? 3 : 2;
                        battleActions.updateBuff(battleData,targetTurn,buffSheet);
                    }

                    if (!buffCheck2 || (buffCheck2 && buffCheck2.duration != (turnState ? 3 : 2))) {
                        //if the character specific vuln debuff doesn't exist, or if it does and isn't refreshed already, then apply it. Otherwise skip the buff update call
                        buffSheet2.duration = turnState ? 3 : 2;
                        battleActions.updateBuff(battleData,targetTurn,buffSheet2);
                    }
                    

                },
                "target": "self",
                "listenerName": "Whereabouts Should Dreams Rest - Break dmg check",
                "owners": [],
                "ownersSlots": {},
            },
        ],
        "buffNames": {
            "buff1": "Routed",
        },
        "buffNamesPerCharacter": {
            "buff1": "Routed",
        }
    },
    "A Thankless Coronation": {
        logic(thisTurn,battleData) {},
        "skillFunctions": {},
        "listeners": [
            {
                "trigger": "UltimateStart",
                condition(battleData,generalInfo) {
                    let ownersSlots = this.ownersSlots;
                    let sourceTurn = generalInfo.sourceTurn;
                    let ownerRank = ownersSlots[sourceTurn.name];
                    if (!ownerRank) {return;}

                    if (!sourceTurn.thanklessCoronationATKSHEET) {
                        const energyCheck = sourceTurn.maxEnergy >= 300;
                        let lcNameRef = "A Thankless Coronation";
                        let lcPathing = lightcones[lcNameRef].params;
                        let rankParams = lcPathing[ownerRank-1];
                        let buffName = turnLogicLightcones[lcNameRef].buffNames.buff1;

                        // greatTableIndex
                        // greatTableKeys

                        sourceTurn.thanklessCoronationATKSHEET = {
                            "stats": [ATKP],
                            [ATKP]: rankParams[5] + (energyCheck ? rankParams[1] : 0),
                            "source": lcNameRef,
                            "sourceOwner": sourceTurn.properName,
                            "buffName": buffName,
                            "duration": 2,
                            "AVApplied": 0,
                            "maxStacks": 1,
                            "currentStacks": 1,
                            "decay": false,
                            "expireType": "EndTurn",
                        }
                    }

                    const buffSheet = sourceTurn.thanklessCoronationATKSHEET;
                    // console.log(buffSheet[ATKP])
                    
                    buffSheet.duration = sourceTurn.turnState ? 3 : 2;
                    battleActions.updateBuff(battleData,sourceTurn,buffSheet);
                },
                "target": "self",
                "listenerName": "A Thankless Coronation - ult buff trigger",
                "owners": [],
                "ownersSlots": {},
            },
            {
                "trigger": "UltimateEnd",
                condition(battleData,generalInfo) {
                    let ownersSlots = this.ownersSlots;
                    let sourceTurn = generalInfo.sourceTurn;
                    let ownerRank = ownersSlots[sourceTurn.name];
                    if (!ownerRank) {return;}

                    const energyMax = sourceTurn.maxEnergy;
                    const energyCheck = energyMax >= 300;
                    if (energyCheck) {
                        const energyBump = energyMax * 0.10;
                        battleActions.updateEnergy(battleData,energyBump,sourceTurn,true,"A Thankless Coronation");
                    }
                },
                "target": "self",
                "listenerName": "A Thankless Coronation - ult energy regen check",
                "owners": [],
                "ownersSlots": {},
                "buffNames": {},
            },
        ],
        "buffNames": {
            "buff1": "King of Knights",
        },
    },
    "On the Fall of an Aeon": {
        logic(thisTurn,battleData) {},
        "skillFunctions": {},
        "listeners": [
            {
                "trigger": "PreBattleEntersCombat",
                condition(battleData,generalInfo) {
                    let ownerRef = this.owners;

                    const tempLogic = battleData.battleLogicTemp;
                    const aeonRef = tempLogic.onTheFallAeon ??= {};
                    aeonRef.total = ownerRef.length;
                    aeonRef.completed = 0;
                },
                "target": "self",
                "listenerName": "On the Fall of an Aeon - temp logic definition",
                "owners": [],
            },
            {
                "trigger": "BrokeEnemyWeakness",
                condition(battleData,generalInfo) {
                    // poke("BrokeEnemyWeakness",battleData,{targetTurn,sourceTurn,slot,targetsGotHit,ATKObject,breakObject,tags:DMGTags,isBroken,generalInfo});
                    // let ownerRef = this.owners;
                    let sourceTurn = generalInfo.sourceTurn;

                    let ownersSlots = this.ownersSlots;
                    let ownerRank = ownersSlots[sourceTurn.name];
                    if (!ownerRank) {return;}

                    if (!sourceTurn.onTheFallAeonDMGSHEET) {
                        let lcNameRef = "On the Fall of an Aeon";
                        let lcPathing = lightcones[lcNameRef].params;
                        let rankParams = lcPathing[ownerRank-1];

                        let values = rankParams[2];

                        sourceTurn.onTheFallAeonDMGSHEET = {
                            "stats": [ATKP],
                            [ATKP]: values,
                            "source": lcNameRef,
                            "sourceOwner": sourceTurn.properName,
                            "buffName": turnLogicLightcones[lcNameRef].buffNames.breakDMG,
                            "duration": 2,
                            "AVApplied": 0,
                            "maxStacks": 1,
                            "currentStacks": 1,
                            "decay": false,
                            "expireType": "EndTurn",
                        }
                    }
                    const buffSheet = sourceTurn.onTheFallAeonDMGSHEET;
                    buffSheet.duration = sourceTurn.turnState ? 3 : 2;
                    
                    battleActions.updateBuff(battleData,sourceTurn,buffSheet);
                },
                "target": "self",
                "listenerName": "On the Fall of an Aeon - broke enemy",
                "owners": [],
            },
            {
                "trigger": "AttackStart",
                condition(battleData,generalInfo) {
                    // let ownerRef = this.owners;
                    let sourceTurn = generalInfo.sourceTurn;

                    let ownersSlots = this.ownersSlots;
                    let ownerRank = ownersSlots[sourceTurn.name];
                    if (!ownerRank || sourceTurn.onTheFallAeonCOMPLETED) {return;}

                    if (!sourceTurn.onTheFallAeonATKSHEET) {
                        let lcNameRef = "On the Fall of an Aeon";
                        let lcPathing = lightcones[lcNameRef].params;
                        let rankParams = lcPathing[ownerRank-1];

                        let values = rankParams[0];

                        sourceTurn.onTheFallAeonATKSHEET = {
                            "stats": [ATKP],
                            [ATKP]: values,
                            "source": lcNameRef,
                            "sourceOwner": sourceTurn.properName,
                            "buffName": turnLogicLightcones[lcNameRef].buffNames.attackStack,
                            "duration": 1,
                            "AVApplied": 0,
                            "maxStacks": 4,
                            "currentStacks": 1,
                            "decay": false,
                            "expireType": null,
                        }
                    }
                    const buffSheet = sourceTurn.onTheFallAeonATKSHEET;
                    const buffName = buffSheet.buffName;
                    
                    battleActions.updateBuff(battleData,sourceTurn,buffSheet);

                    if (sourceTurn.buffsObject[buffName].currentStacks === 4) {
                        sourceTurn.onTheFallAeonCOMPLETED = true;
                        const tempLogic = battleData.battleLogicTemp;
                        const aeonRef = tempLogic.onTheFallAeon;
                        aeonRef.completed += 1;

                        if (aeonRef.completed === aeonRef.total) {
                            battleActions.removeListenerInBattle(battleData,this.listenerName,this.trigger);
                        }
                    }
                },
                "target": "self",
                "listenerName": "On the Fall of an Aeon - ATK stack",
                "owners": [],
            },
        ],
        "buffNames": {
            "attackStack": "On the Fall of an Aeon (ATK)",
            "breakDMG": "On the Fall of an Aeon (DMG)",
        },
    },
    "The Unreachable Side": {
        logic(thisTurn,battleData) {},
        "skillFunctions": {},
        "listeners": [
            {
                "trigger": "AllyLostHP",
                condition(battleData,generalInfo) {
                    // poke("AllyLostHP",battleData,{sourceTurn:ally,HPLost: amountEaten,lossSource: sourceTurn});
                    let ownersSlots = this.ownersSlots;
                    let sourceTurn = generalInfo.sourceTurn;
                    let ownerRank = ownersSlots[sourceTurn.name];
                    if (!ownerRank) {return;}//if the one losing HP isn't the lc owner, then abort

                    const causeTurn = generalInfo.lossSource;
                    if (causeTurn && causeTurn.properName != sourceTurn.properName) {return;}//and if the cause of the HP loss in the case of a consume only, isn't the same as the one having their hp consumed, then abort

                    if (!sourceTurn.unreachableSideDMGSHEET) {
                        let lcNameRef = "The Unreachable Side";
                        let lcPathing = lightcones[lcNameRef].params;
                        let rankParams = lcPathing[ownerRank-1];
                        const logicRef = turnLogicLightcones[lcNameRef];

                        sourceTurn.unreachableSideDMGSHEET = {
                            "stats": [DamageAll],
                            [DamageAll]: rankParams[2],
                            "source": lcNameRef,
                            "sourceOwner": sourceTurn.properName,
                            "buffName": logicRef.buffNames.dmgBuff,
                            "duration": 1,
                            "AVApplied": 0,
                            "maxStacks": 1,
                            "currentStacks": 1,
                            "decay": false,
                            "expireType": null,
                        }
                    }

                    const buffSheet = sourceTurn.unreachableSideDMGSHEET;
                    
                    battleActions.updateBuff(battleData,sourceTurn,buffSheet);
                },
                "target": "self",
                "listenerName": "The Unreachable Side - hp lost listener",
                "owners": [],
                "ownersSlots": {},
            },
            {
                "trigger": "AttackEnd",
                condition(battleData,generalInfo) {
                    let ownersSlots = this.ownersSlots;
                    let sourceTurn = generalInfo.sourceTurn;
                    let ownerRank = ownersSlots[sourceTurn.name];
                    if (!ownerRank) {return;}

                    const buffSheet = sourceTurn.unreachableSideDMGSHEET;
                    if (!buffSheet || !sourceTurn.buffsObject[buffSheet.buffName]) {return;}
                    //if the buff sheet hasn't been constructed on the owner yet, or if the owner doesn't even have the buff, then abort

                    removeBuff(battleData,sourceTurn,buffSheet);
                },
                "target": "self",
                "listenerName": "The Unreachable Side - attack end listener",
                "owners": [],
                "ownersSlots": {},
            },
        ],
        "buffNames": {
            "dmgBuff": "The Unreachable Side [LC]"
        },
    },

    //HARMONY
    "Earthly Escapade": {
        logic(thisTurn,battleData) {},
        "skillFunctions": {
            updateMask(battleData,currentTurn,ownerRank,battleStartOverride) {
                let ownerName = currentTurn.name;
                if (!currentTurn.updateMaskCRITSHEET) {
                    let lcNameRef = "Earthly Escapade";
                    let lcPathing = lightcones[lcNameRef].params;
                    let rankParams = lcPathing[ownerRank-1];

                    const logicRef = turnLogicLightcones[lcNameRef];
                    const buffNames = logicRef.buffNames;
                    let buffName2 = buffNames.buff2;
                    let buffName3 = buffNames.buff3;
                    const uniqueName = `${buffName3} (${currentTurn.properName})`;
                    currentTurn.updateMaskMASKOWNERSHEET = {
                        "stats": null,
                        "source": lcNameRef,
                        "sourceOwner": currentTurn.properName,
                        "buffName": buffName2,
                        "duration": 1,
                        "AVApplied": 0,
                        "maxStacks": 1,
                        "currentStacks": 1,
                        "decay": false,
                        "expireType": "EndTurn",
                        "expireFunction": logicRef.skillFunctions.expireFunction,
                        "expireParam": {sourceTurn:currentTurn.name,uniqueName}//owner, in this case
                    }

                    currentTurn.updateMaskCRITSHEET = {
                        "stats": [CritRateBase,CritDamageBase],
                        [CritRateBase]: rankParams[4],
                        [CritDamageBase]: rankParams[1],
                        "source": lcNameRef,
                        "sourceOwner": currentTurn.properName,
                        "buffName": uniqueName,
                        "duration": 1,
                        "AVApplied": 0,
                        "maxStacks": 1,
                        "currentStacks": 1,
                        "decay": false,
                        "expireType": null,
                    }
                    
                }
                
                
                let turnOverride = currentTurn.turnState ? 5 : 4;
                if (battleStartOverride) {turnOverride = battleStartOverride;}//the start of the battle gives a 3turn buff, not the standard 4 applied by the user themselves

                let buffSheet2 = currentTurn.updateMaskMASKOWNERSHEET;
                buffSheet2.AVApplied = battleData.sumAV;
                buffSheet2.duration = turnOverride;
                const updateBuff = battleActions.updateBuff;
                updateBuff(battleData,currentTurn,buffSheet2);

                let buffSheet3 = currentTurn.updateMaskCRITSHEET;
                const thisName = buffSheet3.buffName;
                buffSheet3.AVApplied = battleData.sumAV;

                const allyTurns = battleData.nameBasedTurns;
                for (let targetSlot in allyTurns) {
                    const targetTurn = allyTurns[targetSlot];
                    if (targetTurn.name === ownerName) {continue;}//we don't apply crit bonuses to the owner, at least I don't think
                    if (targetTurn.buffsObject[thisName]) {continue;}//if they already have, no need to renew it's perma anyways

                    updateBuff(battleData,targetTurn,buffSheet3);
                }
            },
            expireFunction(battleData,expireParam) {
                //TODO: check if this can stack later, though idk how the fuck I'm supposed to test that
                //the LC says nothing about stacking and I'm assuming since it can have varying levels of crit bonuses, it does stack
                const ownerName = expireParam.sourceTurn;//passes a lot, not a name or a turn
                const uniqueBuffName = expireParam.uniqueName;
                // "expireParam": {sourceTurn:currentTurn.name,uniqueName:currentTurn.maskCRITBONUSNAMEOWNER}//owner, in this case

                // const updateBuff = battleActions.updateBuff;
                const allyTurns = battleData.nameBasedTurns;
                for (let targetSlot in allyTurns) {
                    const targetTurn = allyTurns[targetSlot]
                    if (targetTurn.name === ownerName) {continue;}
                    removeBuff(battleData,targetTurn,targetTurn.buffsObject[uniqueBuffName]);
                }

            },
        },
        "listeners": [
            {
                "trigger": "PreBattleEntersCombat",
                condition(battleData,generalInfo) {
                    let ownerRef = this.owners;//would apply at the start to any and all owners, each, hence owners instead of ownersSlots
                    let ownersSlots = this.ownersSlots;
                    let lcNameRef = "Earthly Escapade";

                    const updateMask = this.shortRef ??= turnLogicLightcones[lcNameRef].skillFunctions.updateMask;
                    const namedTurns = battleData.nameBasedTurns;
                    for (let owner of ownerRef) {
                        let charSlot = owner.slot;
                        let ownerRank = ownersSlots[charSlot];
                        let currentTurn = namedTurns[charSlot];

                        updateMask(battleData,currentTurn,ownerRank,3);
                    }
                },
                "target": "self",
                "listenerName": "Earthly Escapade - Mask Application Battlestart",
                "owners": []
            },
            {
                "trigger": "SPChange",
                condition(battleData,generalInfo) {
                    let SPDiff = generalInfo.SPChange;
                    if (SPDiff <= 0) {return;}//don't care about non sp gains, regardless of the source
                    // let ownerRef = this.owners;
                    let ownersSlots = this.ownersSlots;
                    let sourceTurn = generalInfo.sourceTurn;
                    let ownerRank = ownersSlots[sourceTurn.name];
                    if (!ownerRank) {return;}//then abort non-owners

                    let lcNameRef = "Earthly Escapade";
                    let buffName = turnLogicLightcones[lcNameRef].buffNames.buff1;
                    let buffSheet = this.radiantFlameBUFFSHEET ??= {
                        "stats": null,
                        "source": lcNameRef,
                        "sourceOwner": sourceTurn.properName,
                        "buffName": buffName,
                        "duration": 1,
                        "AVApplied": 0,
                        "maxStacks": 4,
                        "currentStacks": 1,
                        "decay": false,
                        "expireType": null,
                    }
                    
                    
                    buffSheet.currentStacks = SPDiff;
                    const updateBuff = battleActions.updateBuff;
                    updateBuff(battleData,sourceTurn,buffSheet);

                    let buffRef = sourceTurn.buffsObject[buffName];
                    if (buffRef.currentStacks >= 4) {
                        //clear radiant flame first
                        removeBuff(battleData,sourceTurn,buffRef);

                        //then apply/update mask
                        const updateMask = this.shortRef ??= turnLogicLightcones[lcNameRef].skillFunctions.updateMask;
                        updateMask(battleData,sourceTurn,ownerRank,null);
                    }
                },
                "target": "self",
                "listenerName": "Earthly Escapade - SP Mask check",
                "owners": [],
                "ownersSlots": {}
            }
        ],
        "buffNames": {
            "buff1": "Radiant Flame",
            "buff2": "Mask",
            "buff3": "Mask Crit Bonus",
            // "buff2": "Aether Code"
            // "hruntingStack": "Hrunting Stack"
        },
    },
    "But the Battle Isn't Over": {
        logic(thisTurn,battleData) {},
        "skillFunctions": {},
        "listeners": [
            {
                "trigger": "TargetAlly",
                condition(battleData,generalInfo) {
                    // let ownerRef = this.owners;
                    let ownersSlots = this.ownersSlots;
                    let sourceTurn = generalInfo.sourceTurn;

                    let ownerSlot = sourceTurn.name;
                    if (!ownersSlots[ownerSlot]) {return;}//abort non-owners
                    let targetTurn = generalInfo.targetTurn;
                    //abort non-ultimate casts, and abort ults that target the self. remember that target turn doesn't always exist if it's a team-wide targeting
                    //but the fact that target ally was poked at all is enough to say a targeting happened
                    if (generalInfo.targetSkill != "Ultimate" || (targetTurn && targetTurn.properName === sourceTurn.properName)) {return;}//needs to be on an ally, can't be on self

                    const logicRef = turnLogic[sourceTurn.properName];
                    const quickRef = logicRef.characterValuesBattle;

                    quickRef.battleIsntOverUltyCount = (quickRef.battleIsntOverUltyCount ?? 2) + 1;
                    //if the character never used it yet, we start them at the point that the sp regen can happen anyways
                    //then after that it is business as usual
                    if (quickRef.battleIsntOverUltyCount === 3) {
                        quickRef.battleIsntOverUltyCount = 1;
                        let lcNameRef = "But the Battle Isn't Over";
                        battleActions.updateSkillPoints(1,battleData,{sourceTurn,sourceName:lcNameRef});
                    }
                },
                "target": "self",
                "listenerName": "But the Battle Isn't Over SP Regen controller",
                "owners": []
            },
            {
                "trigger": "SkillEnd",
                condition(battleData,generalInfo) {
                    // let ownerRef = this.owners;
                    let ownersSlots = this.ownersSlots;
                    // let lcNameRef = "But the Battle Isn't Over";
                    let sourceTurn = generalInfo.sourceTurn;

                    let ownerRank = ownersSlots[sourceTurn.name];
                    if (!ownerRank) {return;}//abort non-owners

                    const nextAllyTurn = sim.getNextQueuedAllyTurnBuffableOnly(battleData);
                    if (!nextAllyTurn) {return;}

                    if (!sourceTurn.battleIsntOverSkillEndSHEET) {
                        let lcNameRef = "But the Battle Isn't Over";
                        let lcPathing = lightcones[lcNameRef].params;
                        let rankParams = lcPathing[ownerRank-1];
                        let values = rankParams[1];

                        sourceTurn.battleIsntOverSkillEndSHEET = {
                            "stats": [DamageAll],
                            [DamageAll]: values,
                            "source": lcNameRef,
                            "sourceOwner": sourceTurn.properName,
                            "buffName": turnLogicLightcones[lcNameRef].buffNames.nextAllyBuff,
                            "duration": 1,//does this count as applied within own turn or applied before designating the turn as next?
                            "AVApplied": 0,
                            "maxStacks": 1,
                            "currentStacks": 1,
                            "decay": false,
                            "expireType": "EndTurn"
                        }
                    }

                    let buffSheet = sourceTurn.battleIsntOverSkillEndSHEET
                    battleActions.updateBuff(battleData,nextAllyTurn,buffSheet);

                    //confirmed it works like this by using the skill on a character when souldragon from dan was next, and archer was after souldragon.
                    //the moment the skill ended, archer got the buff bc souldragon was not a valid entity for buffing.
                },
                "target": "self",
                "listenerName": "But the Battle Isn't Over buff prep controller",
                "owners": []
            },
        ],
        "buffNames": {
            "nextAllyBuff": "But the Battle Isn't Over",
            // "buff2": "Aether Code"
            // "hruntingStack": "Hrunting Stack"
        },
    },
    "Dance! Dance! Dance!": {
        logic(thisTurn,battleData) {},
        "skillFunctions": {},
        "listeners": [
            {
                "trigger": "UltimateEnd",
                condition(battleData,generalInfo) {
                    // let ownerRef = this.owners;
                    let ownersSlots = this.ownersSlots;
                    let sourceTurn = generalInfo.sourceTurn;
                    let ownerRank = ownersSlots[sourceTurn.name];
                    if (!ownerRank) {return;}//abort non-owners

                    let lcNameRef = "Dance! Dance! Dance!";
                    if (!sourceTurn.danceDanceDanceREF) {
                        let lcPathing = lightcones[lcNameRef].params;
                        let rankParams = lcPathing[ownerRank-1];
                        sourceTurn.danceDanceDanceREF = rankParams[0];//advancement value
                    }
                    let values = sourceTurn.danceDanceDanceREF;
                    
                    const actionAdvance = battleActions.actionAdvance;
                    for (let targetTurn of battleData.allyPositions) {
                        if (targetTurn.turnState) {continue;}//can't advance someone within their own turn, skip them

                        actionAdvance(values,targetTurn,battleData,lcNameRef);
                    }
                    //quick note for myself in the future, just checked to be certain and tingyun doing double technique
                    //to get full energy entering the battle, and insta casting ult, DOES cast it at 0 AV, ergo
                    //it CAN advance everyone preemptively. Kinda cool, never knew that.
                    //calc already allowed it to work like that, just wanted to be sure. Go calc, lmao.
                },
                "target": "self",
                "listenerName": "Dance! Dance! Dance! - Team Advance",
                "owners": []
            },
        ],
        "buffNames": {},
    },
    "A Grounded Ascent": {
        logic(thisTurn,battleData) {},
        "skillFunctions": {},
        "listeners": [
            {
                "trigger": "TargetAlly",
                condition(battleData,generalInfo) {
                    // let ownerRef = this.owners;
                    let ownersSlots = this.ownersSlots;
                    let sourceTurn = generalInfo.sourceTurn;

                    let ownerSlot = sourceTurn.name;
                    const ownerRank = ownersSlots[ownerSlot];
                    if (!ownerRank) {return;}//abort non-owners
                    let targetTurn = generalInfo.targetTurn;
                    const skillType = generalInfo.targetSkill;
                    const skillCheck = skillType === "Ultimate" || skillType === "Skill";
                    if (!targetTurn || !skillCheck) {return;}//target turn SHOULD be left null on team-wide targets, so in theory we should be able to just check if a target turn is passed or not to check if it's single or no

                    if (!sourceTurn.groundedAscentHymnSHEET) {
                        let lcNameRef = "A Grounded Ascent";
                        let lcPathing = lightcones[lcNameRef].params;
                        let rankParams = lcPathing[ownerRank-1];
                        sourceTurn.groundedAscentHymnPARAMS = rankParams;
                        let values = rankParams[1];
                        // greatTableIndex
                        // greatTableKeys
                        sourceTurn.groundedAscentHymnSHEET = {
                            "stats": [DamageAll],
                            [DamageAll]: values,
                            "source": lcNameRef,
                            "sourceOwner": sourceTurn.properName,
                            "buffName": turnLogicLightcones[lcNameRef].buffNames.hymn,
                            "duration": 1,//does this count as applied within own turn or applied before designating the turn as next?
                            "AVApplied": 0,
                            "maxStacks": 3,
                            "currentStacks": 1,
                            "decay": false,
                            "expireType": "EndTurn",
                            "removeOnDeath": true,
                        }
                    }
                    const values = sourceTurn.groundedAscentHymnPARAMS;
                    const buffSheet = sourceTurn.groundedAscentHymnSHEET;
                    
                    buffSheet.duration = targetTurn.turnState ? 4 : 3;

                    battleActions.updateEnergy(battleData,values[0],sourceTurn,false,"A Grounded Ascent - Ally targeted");
                    //TODO: check that this is actually modified by energy regen


                    sourceTurn.groundedAscentTargetStacks ??= 0;
                    sourceTurn.groundedAscentTargetStacks += 1;
                    if (sourceTurn.groundedAscentTargetStacks === 2) {
                        sourceTurn.groundedAscentTargetStacks = 0;
                        battleActions.updateSkillPoints(1,battleData,{sourceTurn,sourceName:"A Grounded Ascent - Departing Anew"});
                        //for now assume that either or on skill/ulty will stack this
                        //TODO: verify it actually works that way
                    }



                    const buffCheck = targetTurn.buffsObject[buffSheet.buffName];
                    const hasMemosprite = targetTurn.activeMemosprites;
                    const memospriteEventRef = targetTurn.memospriteEventRef;
                    const memoTurn = hasMemosprite ? targetTurn[memospriteEventRef] : null;
                    
                    const ownerFinished = buffCheck && buffCheck.currentStacks === buffCheck.maxStacks;
                    const updateBuff = battleActions.updateBuff;
                    // if (!memoTurn && ownerFinished) {return;}

                    // poke("TargetAlly",battleData,{targetType:"Single", sourceTurn, targetTurn, targetSkill:skillRef.slot,targetChildren: true});
                    const targetChildEntities = generalInfo.targetChildEntities;
                    if (targetChildEntities && !memoTurn) {
                        if (ownerFinished) {return;}
                        updateBuff(battleData,targetTurn,buffSheet);
                    }
                    else {
                        if (!ownerFinished) {updateBuff(battleData,targetTurn,buffSheet);}
                        if (targetChildEntities) {
                            const buffCheck = memoTurn.buffsObject[buffSheet.buffName];
                            const memoFinished = buffCheck && buffCheck.currentStacks === buffCheck.maxStacks;
                            if (!memoFinished) {updateBuff(battleData,memoTurn,buffSheet);}
                        }
                    }
                },
                "target": "self",
                "listenerName": "A Grounded Ascent - buff application and SP regen",
                "owners": [],
            },
        ],
        "buffNames": {
            "hymn": "Hymn - A Grounded Ascent"
            // "buff2": "Aether Code"
            // "hruntingStack": "Hrunting Stack"
        },
    },
    "If Time Were a Flower": {
        logic(thisTurn,battleData) {},
        "skillFunctions": {
            updatePresage(battleData,currentTurn,ownerRank) {
                let ownerName = currentTurn.name;
                if (!currentTurn.updatePresageCRITSHEET) {
                    let lcNameRef = "If Time Were a Flower";
                    let lcPathing = lightcones[lcNameRef].params;
                    let rankParams = lcPathing[ownerRank-1];

                    let buffName2 = turnLogicLightcones[lcNameRef].buffNames.buff2;
                    let buffName3 = turnLogicLightcones[lcNameRef].buffNames.buff3;
                    const uniqueName = `${buffName3} (${currentTurn.properName})`;
                    currentTurn.updatePresageOwnerSHEET = {
                        "stats": null,
                        "source": lcNameRef,
                        "sourceOwner": currentTurn.properName,
                        "buffName": buffName2,
                        "duration": 1,
                        "AVApplied": 0,
                        "maxStacks": 1,
                        "currentStacks": 1,
                        "decay": false,
                        "expireType": "EndTurn",
                        "expireFunction": turnLogicLightcones[lcNameRef].skillFunctions.expireFunction,
                        "expireParam": {sourceTurn:currentTurn.name,uniqueName}//owner, in this case
                    }

                    currentTurn.updatePresageCRITSHEET = {
                        "stats": [CritDamageBase],
                        [CritDamageBase]: rankParams[3],
                        "source": lcNameRef,
                        "sourceOwner": currentTurn.properName,
                        "buffName": uniqueName,
                        "duration": 1,
                        "AVApplied": 0,
                        "maxStacks": 1,
                        "currentStacks": 1,
                        "decay": false,
                        "expireType": null,
                    }
                    
                }
            

                const buffSheet2 = currentTurn.updatePresageOwnerSHEET;
                const buffName2 = buffSheet2.buffName;
                const buffCheck = currentTurn.buffsObject[buffName2];
                buffSheet2.AVApplied = battleData.sumAV;
                buffSheet2.duration = currentTurn.turnState ? 3 : 2;
                const updateBuff = battleActions.updateBuff;
                updateBuff(battleData,currentTurn,buffSheet2);

                if (buffCheck) {return;}
                //if the buff already existed before we applied it to the owner, then we obv don't need to evaluate the allies since if the owner had it, the allies would have it too and theirs doesn't expire

                let buffSheet3 = currentTurn.updatePresageCRITSHEET;
                buffSheet3.AVApplied = battleData.sumAV;

                // const allyTurns = battleData.allyPositions;
                const allyTurns = battleData.nameBasedTurns;
                for (let targetSlot in allyTurns) {
                    const currentTurn = allyTurns[targetSlot];
                    updateBuff(battleData,currentTurn,buffSheet3);
                }
            },
            expireFunction(battleData,expireParam) {
                // const ownerName = expireParam.sourceTurn;//passes a lot, not a name or a turn
                const uniqueBuffName = expireParam.uniqueName;
                // "expireParam": {sourceTurn:currentTurn.name,uniqueName:currentTurn.maskCRITBONUSNAMEOWNER}

                // const updateBuff = battleActions.updateBuff;
                // const allyTurns = battleData.allyPositions;

                const allyTurns = battleData.nameBasedTurns;
                for (let targetSlot in allyTurns) {
                    const currentTurn = allyTurns[targetSlot];
                    removeBuff(battleData,currentTurn,currentTurn.buffsObject[uniqueBuffName]);
                }

            },
        },
        "listeners": [
            {
                "trigger": "PreBattleEntersCombat",
                condition(battleData,generalInfo) {
                    // let ownerRef = this.owners;
                    let ownersSlots = this.ownersSlots;
                    let lcNameRef = "If Time Were a Flower";

                    const updatePresage = this.updatePresage ??= turnLogicLightcones[lcNameRef].skillFunctions.updatePresage;
                    const namedTurns = battleData.nameBasedTurns;

                    const updateEnergy = battleActions.updateEnergy;
                    for (let owner in ownersSlots) {
                        let ownerRank = ownersSlots[owner];
                        let currentTurn = namedTurns[owner];

                        updateEnergy(battleData,21,currentTurn,false,"If Time Were a Flower");
                        updatePresage(battleData,currentTurn,ownerRank);
                    }
                },
                "target": "self",
                "listenerName": "If Time Were a Flower - Presage Application Battlestart + energy regen",
                "owners": [],
                "ownersSlots": {}
            },
            {
                "trigger": "FUAStart",
                condition(battleData,generalInfo) {
                    let ownersSlots = this.ownersSlots;
                    let sourceTurn = generalInfo.sourceTurn;
                    let ownerRank = ownersSlots[sourceTurn.name];
                    if (!ownerRank) {return;}//abort non-owners

                    let lcNameRef = "If Time Were a Flower";
                    const updatePresage = this.updatePresage ??= turnLogicLightcones[lcNameRef].skillFunctions.updatePresage;
                    updatePresage(battleData,sourceTurn,ownerRank);
                    battleActions.updateEnergy(battleData,12,sourceTurn,false,"If Time Were a Flower [FUA Started]");
                },
                "target": "self",
                "listenerName": "If Time Were a Flower - FUA launched listener",
                "owners": [],
                "ownersSlots": {}
            }
        ],
        "buffNames": {
            "buff2": "Presage (Countdown) [LC]",
            "buff3": "Presage Crit DMG [LC]",
        },
        "buffNamesPerCharacter": {
            "buff3": "Presage Crit DMG [LC]",
        }
    },
    "Flowing Nightglow": {
        logic(thisTurn,battleData) {},
        "skillFunctions": {
            expireFunction(battleData,expireParam) {
                // const ownerName = expireParam.sourceTurn;//passes a lot, not a name or a turn
                const uniqueBuffName = expireParam.uniqueBuffName;
                // "expireParam": {sourceTurn:currentTurn.name,uniqueName:currentTurn.maskCRITBONUSNAMEOWNER}//owner, in this case

                // const updateBuff = battleActions.updateBuff;
                // const allyTurns = battleData.nameBasedTurns;
                const allyArray = battleData.allAlliesArray;
                removeBuffFromBatch(battleData,allyArray,allyArray[0].buffsObject[uniqueBuffName]);

                // removeBuffFromBatch
                // for (let targetSlot in allyTurns) {
                //     const targetTurn = allyTurns[targetSlot]
                //     // if (targetSlot === ownerName) {continue;}
                //     removeBuff(battleData,targetTurn,targetTurn.buffsObject[uniqueBuffName]);
                // }
            },
        },
        "listeners": [
            {
                "trigger": "AttackDMGEnd",
                condition(battleData,generalInfo) {
                    let sourceTurn = generalInfo.sourceTurn;
                    if (sourceTurn.isEnemy) {return;}

                    let ownersSlots = this.ownersSlots;
                    const updateBuff = battleActions.updateBuff;
                    let lcNameRef = "Flowing Nightglow";
                    const logicRef = turnLogicLightcones[lcNameRef];

                    const allyTurns = battleData.nameBasedTurns;
                    for (let ownerSlot in ownersSlots) {
                        const currentOwner = allyTurns[ownerSlot];
                        const ownerRank = ownersSlots[ownerSlot];

                        if (!currentOwner.flowingNightglowCantillationSheet) {
                            
                            let lcPathing = lightcones[lcNameRef].params;
                            let rankParams = lcPathing[ownerRank-1];
                            let buffName = logicRef.buffNames.attackStack;
                            // greatTableIndex
                            // greatTableKeys
                            currentOwner.flowingNightglowCantillationSheet = {
                                "stats": [EnergyRegenRate],
                                [EnergyRegenRate]: rankParams[0],
                                "source": lcNameRef,
                                "sourceOwner": currentOwner.properName,
                                "buffName": buffName,
                                "duration": 1,
                                "AVApplied": 0,
                                "maxStacks": 5,
                                "currentStacks": 1,
                                "decay": false,
                                "expireType": null,
                            }
                        }
                        const buffSheet = currentOwner.flowingNightglowCantillationSheet;
                        const buffName = buffSheet.buffName;
                        const buffCheck = currentOwner.buffsObject[buffName];

                        if (buffCheck && buffCheck.currentStacks === 5) {continue;}
                        updateBuff(battleData,currentOwner,buffSheet);
                    }
                },
                "target": "self",
                "listenerName": "Flowing Nightglow - Ally attack listener",
                "owners": [],
                "ownersSlots": {}
            },
            {
                "trigger": "UltimateStart",
                condition(battleData,generalInfo) {
                    let ownersSlots = this.ownersSlots;
                    let sourceTurn = generalInfo.sourceTurn;
                    let ownerRank = ownersSlots[sourceTurn.name];
                    if (!ownerRank) {return;}//then abort non-owners

                    const sourceBuffs = sourceTurn.buffsObject;
                    const buffSheet = sourceTurn.flowingNightglowCantillationSheet;
                    const buffCheck = buffSheet ? sourceBuffs[buffSheet.buffName] : null;
                    if (!buffCheck || buffCheck && buffCheck.currentStacks < 5) {return;}
                    const updateBuff = battleActions.updateBuff;
                    removeBuff(battleData,sourceTurn,buffSheet);

                    if (!sourceTurn.flowingNightglowCadenzaSheet) {
                        let lcNameRef = "Flowing Nightglow";
                        let lcPathing = lightcones[lcNameRef].params;
                        let rankParams = lcPathing[ownerRank-1];
                        const logicRef = turnLogicLightcones[lcNameRef];
                        const buffNames = logicRef.buffNames;

                        const customName = `${buffNames.allyDMG} (${sourceTurn.properName})`;
                        if (!buffNames[customName]) {buffNames[customName] = customName;}

                        // greatTableIndex
                        // greatTableKeys
                        sourceTurn.flowingNightglowCadenzaSheet = {
                            "stats": [ATKP],
                            [ATKP]: rankParams[3],
                            "source": lcNameRef,
                            "sourceOwner": sourceTurn.properName,
                            "buffName": buffNames.ultCountdown,
                            "duration": 1,
                            "AVApplied": 0,
                            "maxStacks": 1,
                            "currentStacks": 1,
                            "decay": false,
                            "expireType": "EndTurn",
                            expireFunction: logicRef.skillFunctions.expireFunction,
                            expireParam: {ownerName:sourceTurn.name,uniqueBuffName:customName},
                        }
                        
                        sourceTurn.flowingNightglowCadenzaAllySheet = {
                            "stats": [DamageAll],
                            [DamageAll]: rankParams[2],
                            "source": lcNameRef,
                            "sourceOwner": sourceTurn.properName,
                            "buffName": customName,
                            "duration": 1,
                            "AVApplied": 0,
                            "maxStacks": 1,
                            "currentStacks": 1,
                            "decay": false,
                            "expireType": null,
                        }
                    }
                    const countdownSheet = sourceTurn.flowingNightglowCadenzaSheet;
                    countdownSheet.AVApplied = battleData.sumAV;
                    countdownSheet.duration = sourceTurn.turnState ? 2 : 1;
                    const buffCheck2 = sourceBuffs[countdownSheet.buffName];
                    updateBuff(battleData,sourceTurn,countdownSheet);

                    if (!buffCheck2) {
                        const allyArray = battleData.allAlliesArray;
                        const allySheet = sourceTurn.flowingNightglowCadenzaAllySheet;

                        updateBuffBatchTargets(battleData,allyArray,allySheet);

                        // const allyTurns = battleData.nameBasedTurns;
                        // for (let allySlot in allyTurns) {
                        //     const allyTurn = allyTurns[allySlot];
                        //     updateBuff(battleData,allyTurn,allySheet);
                        // }
                    }
                },
                "target": "self",
                "listenerName": "Flowing Nightglow - ult listener",
                "owners": [],
                "ownersSlots": {}
            }
        ],
        "buffNames": {
            "attackStack": "Cantillation [LC]",
            "ultCountdown": "Cadenza [LC]",
            "allyDMG": "Cadenza (Ally) [LC]",
            // "hruntingStack": "Hrunting Stack"
        },
        "buffNamesPerCharacter": {
            "allyDMG": "Cadenza (Ally) [LC]",
        },
    },
    "Past Self in Mirror": {
        logic(thisTurn,battleData) {},
        "skillFunctions": {},
        "listeners": [
            {
                "trigger": "UltimateStart",
                condition(battleData,generalInfo) {
                    let ownersSlots = this.ownersSlots;
                    let sourceTurn = generalInfo.sourceTurn;
                    let ownerRank = ownersSlots[sourceTurn.name];
                    if (!ownerRank) {return;}//then abort non-owners

                    const updateBuff = battleActions.updateBuff;

                    if (!sourceTurn.pastSelfInMirrorDMGSheet) {
                        let lcNameRef = "Past Self in Mirror";
                        let lcPathing = lightcones[lcNameRef].params;
                        let rankParams = lcPathing[ownerRank-1];
                        const logicRef = turnLogicLightcones[lcNameRef];
                        const buffNames = logicRef.buffNames;

                        sourceTurn.pastSelfInMirrorDMGSheet = {
                            "stats": [DamageAll],
                            [DamageAll]: rankParams[1],
                            "source": lcNameRef,
                            "sourceOwner": sourceTurn.properName,
                            "buffName": buffNames.allyDMG,
                            "duration": 1,
                            "AVApplied": 0,
                            "maxStacks": 1,
                            "currentStacks": 1,
                            "decay": false,
                            "expireType": "EndTurn",
                        }
                    }

                    const allySheet = sourceTurn.pastSelfInMirrorDMGSheet;
                    allySheet.AVApplied = battleData.sumAV;
                    // const allyTurns = battleData.nameBasedTurns;
                    const allyPositions = battleData.allyPositions;
                    for (let ally of allyPositions) {
                        allySheet.duration = ally.turnState ? 4 : 3;
                        updateBuff(battleData,ally,allySheet);
                    }

                    const breakCheck = sourceTurn.statTable[DamageBreak] >= 1.5;
                    if (breakCheck) {
                        battleActions.updateSkillPoints(1,battleData,{sourceTurn,sourceName:"Past Self in Mirror [LC]"});
                    }
                },
                "target": "self",
                "listenerName": "Past Self in Mirror - ult listener",
                "owners": [],
                "ownersSlots": {}
            },
            {
                "trigger": "WaveStart",
                condition(battleData,generalInfo) {
                    // let ownerTurn = this.ownerTurn;
                    const allyPositions = battleData.allyPositions;
                    const updateEnergy = battleActions.updateEnergy
                    for (let ally of allyPositions) {
                        updateEnergy(battleData,10,ally,false,"Past Self in Mirror [LC]");
                    }
                },
                "target": "self",
                "listenerName": "Past Self in Mirror wave start listener",
                "ownerTurn": {},
            }
        ],
        "buffNames": {
            "allyDMG": "Past Self in Mirror [LC]",
            // "hruntingStack": "Hrunting Stack"
        },
    },


    //REMEMBRANCE
    "Time Woven Into Gold": {
        logic(thisTurn,battleData) {},
        "skillFunctions": {},
        "listeners": [
            {
                "trigger": "PreBattleEntersCombat",
                condition(battleData,generalInfo) {
                    let ownerRef = this.owners;

                    const tempLogic = battleData.battleLogicTemp;
                    const wovenRef = tempLogic.timeWovenBrocadeLogic ??= {};
                    wovenRef.total = ownerRef.length;
                    wovenRef.completed = 0;
                },
                "target": "self",
                "listenerName": "Time Woven Into Gold - temp logic establish",
                "owners": [],
            },
            {
                "trigger": "AttackDMGEnd",
                condition(battleData,generalInfo) {
                    // let ownerRef = this.owners;
                    let sourceTurn = generalInfo.sourceTurn;
                    //so if aggy finishes, then that's one proc
                    //then garment after gets another proc

                    //So initially I was worried that since this listener removes itself after finishing stacks, that there might be a problem
                    //when the memo is killed or removed from the field. however that fear is apparently unwarranted: the stacks persist
                    //not only do they persist, they apply whether on the field or not. So if aggy attacks, and then summons, garmentmaker will still have 1 stack despite not having been present

                    let ownersSlots = this.ownersSlots;
                    let ownerRank = null;
                    let isMemo = false;

                    if (sourceTurn.isMemosprite) {
                        ownerRank = ownersSlots[sourceTurn.eventOwner];
                        isMemo = true;
                        if (!ownerRank) {return;}//if the memo's owner is not a user of this lightcone, abort
                    }
                    else {
                        ownerRank = ownersSlots[sourceTurn.name];
                        if (!ownerRank) {return;}//or if the character isn't a user, abort
                    }


                    
                    if (!sourceTurn.timeWovenBrocadeSTACKSHEET) {
                        let lcNameRef = "Time Woven Into Gold";
                        let lcPathing = lightcones[lcNameRef].params;
                        let rankParams = lcPathing[ownerRank-1];
                        const buffNames = turnLogicLightcones[lcNameRef].buffNames;
                        // let ownerName = sourceTurn.properName;

                        sourceTurn.timeWovenBrocadeSTACKSHEET = {
                            "stats":[CritDamageBase],
                            [CritDamageBase]: rankParams[3],
                            "source": lcNameRef,
                            "sourceOwner": sourceTurn.properName,
                            "buffName": buffNames.brocade,
                            "duration": 1,
                            "AVApplied": 0,
                            "maxStacks": 6,
                            "currentStacks": 1,
                            "decay": false,
                            "expireType": null,
                        }

                        sourceTurn.timeWovenBrocadeBASICSTACKSHEET = {
                            "stats": [DamageBasic],
                            [DamageBasic]: rankParams[2],
                            "source": lcNameRef,
                            "sourceOwner": sourceTurn.properName,
                            "buffName": buffNames.brocadeBasic,
                            "duration": 1,
                            "AVApplied": 0,
                            "maxStacks": 6,
                            "currentStacks": 6,
                            "decay": false,
                            "expireType": null,
                        }
                    }
                    let buffSheet = sourceTurn.timeWovenBrocadeSTACKSHEET;
                    let buffName = buffSheet.buffName;
                    


                    const updateBuff = battleActions.updateBuff;
                    if (isMemo) {
                        const ownerTurn = battleData.nameBasedTurns[sourceTurn.eventOwner];

                        updateBuff(battleData,ownerTurn,buffSheet);//owner
                        updateBuff(battleData,sourceTurn,buffSheet);//memo
                    }
                    else {
                        const memoTurnRef = sourceTurn.memospriteEventRef;

                        if (memoTurnRef) {
                            const memoTurn = sourceTurn[memoTurnRef];
                            updateBuff(battleData,sourceTurn,buffSheet);//owner
                            updateBuff(battleData,memoTurn,buffSheet);//memo
                        }
                        else {
                            updateBuff(battleData,sourceTurn,buffSheet);//owner
                        }
                    }


                    if (sourceTurn.buffsObject[buffName].currentStacks === 6) {
                        sourceTurn.timeWovenBrocadeCOMPLETED = true;
                        const tempLogic = battleData.battleLogicTemp;
                        const wovenRef = tempLogic.timeWovenBrocadeLogic;
                        wovenRef.completed += 1;

                        const buffSheet = sourceTurn.timeWovenBrocadeBASICSTACKSHEET;
                        
                        if (isMemo) {
                            const ownerTurn = battleData.nameBasedTurns[sourceTurn.eventOwner];
    
                            updateBuff(battleData,ownerTurn,buffSheet);//owner
                            updateBuff(battleData,sourceTurn,buffSheet);//memo
                        }
                        else {
                            const memoTurnRef = sourceTurn.memospriteEventRef;
    
                            if (memoTurnRef) {
                                const memoTurn = sourceTurn[memoTurnRef];
                                updateBuff(battleData,sourceTurn,buffSheet);//owner
                                updateBuff(battleData,memoTurn,buffSheet);//memo
                            }
                            else {
                                updateBuff(battleData,sourceTurn,buffSheet);//owner
                            }
                        }

                        if (wovenRef.completed === wovenRef.total) {
                            battleActions.removeListenerInBattle(battleData,this.listenerName,this.trigger);
                        }
                    }
                },
                "target": "self",
                "listenerName": "Time Woven Into Gold - Brocade Stacker",
                "owners": [],
            },
        ],
        "buffNames": {
            "brocade": "Brocade Stack",
            "brocadeBasic": "Brocade BasicATK Bonus"
        },
    },
    "Make Farewells More Beautiful": {
        logic(thisTurn,battleData) {},
        "skillFunctions": {},
        "listeners": [
            {
                "trigger": "AllyLostHP",
                condition(battleData,generalInfo) {
                    // let ownerRef = this.owners;
                    let sourceTurn = generalInfo.sourceTurn;

                    if (!sourceTurn.turnState) {return;}//if whoever lost the HP isn't within the bounds of their own turn, then abort

                    let ownersSlots = this.ownersSlots;
                    let ownerRank = null;
                    let isMemo = false;

                    if (sourceTurn.isMemosprite) {
                        ownerRank = ownersSlots[sourceTurn.eventOwner];
                        isMemo = true;
                        if (!ownerRank) {return;}//if the memo's owner is not a user of this lightcone, abort
                    }
                    else {
                        ownerRank = ownersSlots[sourceTurn.name];
                        if (!ownerRank) {return;}//or if the character isn't a user, abort
                    }


                    if (!sourceTurn.makeFarewellsDeathFlowerSHEET) {
                        let lcNameRef = "Make Farewells More Beautiful";
                        let lcPathing = lightcones[lcNameRef].params;
                        let rankParams = lcPathing[ownerRank-1];
                        // let ownerName = sourceTurn.properName;

                        sourceTurn.makeFarewellsDeathFlowerSHEET = {
                            "stats": [DEFShredAll],
                            [DEFShredAll]: rankParams[1],
                            "source": lcNameRef,
                            "sourceOwner": sourceTurn.properName,
                            "buffName": turnLogicLightcones[lcNameRef].buffNames.deathFlower,
                            "duration": 1,
                            "AVApplied": 0,
                            "maxStacks": 1,
                            "currentStacks": 1,
                            "decay": false,
                            "expireType": null,
                        }
                    }
                    let buffSheet = sourceTurn.makeFarewellsDeathFlowerSHEET;
                    let buffName = buffSheet.buffNames;
                    


                    const updateBuff = battleActions.updateBuff;
                    if (isMemo) {
                        const ownerTurn = battleData.nameBasedTurns[sourceTurn.eventOwner];

                        buffSheet.duration = 2;
                        updateBuff(battleData,ownerTurn,buffSheet);//owner
                        buffSheet.duration = 3;
                        updateBuff(battleData,sourceTurn,buffSheet);//memo
                    }
                    else {
                        const memoTurnRef = sourceTurn.memospriteEventRef;

                        if (memoTurnRef) {
                            const memoTurn = sourceTurn[memoTurnRef];
                            buffSheet.duration = 3;
                            updateBuff(battleData,sourceTurn,buffSheet);//owner
                            if (memoTurn.isActive){
                                buffSheet.duration = 2;
                                updateBuff(battleData,memoTurn,buffSheet);
                            }//memo
                        }
                        else {
                            updateBuff(battleData,sourceTurn,buffSheet);//owner
                        }
                    }
                },
                "target": "self",
                "listenerName": "Make Farewells More Beautiful - ally hp lost listener",
                "owners": [],
            },
            {
                "trigger": "SummonOnFieldAdjustment",
                condition(battleData,generalInfo) {
                    // poke("SummonOnFieldAdjustment",battleData,{summonWas: "Apply",assignedTo: ownerTurn, summonedBy: ownerTurn, summonEvent: ownerTurn.topazNUMBYTURNEVENT});
                    let ownersSlots = this.ownersSlots;
                    const summonAssignedTo = generalInfo.assignedTo;
                    
                    let ownerRank = ownersSlots[summonAssignedTo.name];//setAmount
                    if (!ownerRank) {return;}//if the summon is assigned to someone who doesn't own the set, then it doesn't matter

                    const summonEvent = generalInfo.summonEvent;
                    const isMemosprite = summonEvent.isMemosprite;
                    const summonWas = generalInfo.summonWas;

                    //we only care about the removal of a memosprite, not any other kind of summon
                    const advanceReady = summonAssignedTo.makeFarewellsAdvanceUsed ??= false;
                    if (isMemosprite && summonWas === "Remove" && !advanceReady) {
                        if (!summonAssignedTo.makeFarewellsAdvancementVALUES) {
                            let lcNameRef = "Make Farewells More Beautiful";
                            let lcPathing = lightcones[lcNameRef].params;
                            summonAssignedTo.makeFarewellsAdvancementVALUES = lcPathing[ownerRank-1];
                        }
                        const rankParams = summonAssignedTo.makeFarewellsAdvancementVALUES;
                        battleActions.actionAdvance(rankParams[3],summonAssignedTo,battleData,"Memosprite vanished advancement - Make Farewells More Beautiful");
                        summonAssignedTo.makeFarewellsAdvanceUsed = true;
                    }
                },
                "target": "self",
                "listenerName": "Make Farewells More Beautiful - summon removed from field listener",
                "owners": []
            },
            {
                "trigger": "UltimateEnd",
                condition(battleData,generalInfo) {
                    let ownersSlots = this.ownersSlots;
                    const sourceTurn = generalInfo.sourceTurn;
                    let ownerRank = ownersSlots[sourceTurn.name];//setAmount
                    if (!ownerRank) {return;}//if the one whose ulty ended isn't a lightcone owner, then abort

                    sourceTurn.makeFarewellsAdvanceUsed = false;
                },
                "target": "self",
                "listenerName": "Make Farewells More Beautiful - ulty end listener advance reset",
                "owners": []
            },
        ],
        "buffNames": {
            "deathFlower": "Death Flower [LC]",
        },
    },
    "To Evernight's Stars": {
        logic(thisTurn,battleData) {},
        "skillFunctions": {},
        "listeners": [
            {
                "trigger": "PreBattleEntersCombat",
                condition(battleData,generalInfo) {
                    let ownerRef = this.owners;//would apply at the start to any and all owners, each, hence owners instead of ownersSlots
                    const tempLogic = battleData.battleLogicTemp;
                    const evernightRef = tempLogic.toEvernightsStarsLightcone ??= {};
                    evernightRef.total = ownerRef.length;
                    evernightRef.completed = 0;
                },
                "target": "self",
                "listenerName": "To Evernight's Stars - temp logic",
                "owners": [],
                "buffNames": {},
            },
            {
                "trigger": "MemoSkillStart",
                condition(battleData,generalInfo) {
                    // let ownerRef = this.owners;
                    let sourceTurn = generalInfo.sourceTurn;
                    const ownerTurn = battleData.nameBasedTurns[sourceTurn.eventOwner];

                    let ownersSlots = this.ownersSlots;
                    let ownerRank = ownersSlots[ownerTurn.name];
                    if (!ownerRank || ownerTurn.toEvernightsStarsBonusCompleted) {return;}

                    if (!ownerTurn.toEvernightsStarsNoctisOWNERSHEET) {
                        let lcNameRef = "To Evernight's Stars";
                        const logicRef = turnLogicLightcones[lcNameRef];
                        let lcPathing = lightcones[lcNameRef].params;
                        let rankParams = lcPathing[ownerRank-1];
                        const buffNames = logicRef.buffNames;
                        // let ownerName = sourceTurn.properName;

                        ownerTurn.toEvernightsStarsNoctisOWNERSHEET = {
                            "stats": [DamageAll],
                            [DamageAll]: rankParams[2],
                            "source": lcNameRef,
                            "sourceOwner": ownerTurn.properName,
                            "buffName": buffNames.noctisOwner,
                            "duration": 1,
                            "AVApplied": 0,
                            "maxStacks": 1,
                            "currentStacks": 1,
                            "decay": false,
                            "expireType": null,
                        }
                        ownerTurn.toEvernightsStarsNoctisAllyMemoSHEET = {
                            "stats": [DEFShredAll],
                            [DEFShredAll]: rankParams[1],
                            "source": lcNameRef,
                            "sourceOwner": ownerTurn.properName,
                            "buffName": buffNames.noctisAlliedMemo,
                            "duration": 1,
                            "AVApplied": 0,
                            "maxStacks": 1,
                            "currentStacks": 1,
                            "decay": false,
                            "expireType": null,
                        }
                    }
                    let buffSheet = ownerTurn.toEvernightsStarsNoctisOWNERSHEET;
                    let buffSheet3 = ownerTurn.toEvernightsStarsNoctisAllyMemoSHEET;
                    
                    buffSheet3.AVApplied = battleData.sumAV;


                    const updateBuff = battleActions.updateBuff;
                    updateBuff(battleData,ownerTurn,buffSheet);
                    updateBuff(battleData,sourceTurn,buffSheet);

                    // const allyPositions = battleData.allyPositions;
                    const declaredMemosprites = battleData.declaredMemosprites;
                    for (let memo of declaredMemosprites) {
                        updateBuff(battleData,memo,buffSheet3);
                    }

                    const tempLogic = battleData.battleLogicTemp;
                    const evernightRef = tempLogic.toEvernightsStarsLightcone ??= {};
                    evernightRef.completed += 1;
                    ownerTurn.toEvernightsStarsBonusCompleted = true;

                    if (evernightRef.completed === evernightRef.total) {
                        battleActions.removeListenerInBattle(battleData,this.listenerName,this.trigger);
                    }
                },
                "target": "self",
                "listenerName": "Make Farewells More Beautiful - ally hp lost listener",
                "owners": [],
            },
            {
                "trigger": "SummonOnFieldAdjustment",
                condition(battleData,generalInfo) {
                    // poke("SummonOnFieldAdjustment",battleData,{summonWas: "Apply",assignedTo: ownerTurn, summonedBy: ownerTurn, summonEvent: ownerTurn.topazNUMBYTURNEVENT});
                    let ownersSlots = this.ownersSlots;
                    const summonAssignedTo = generalInfo.assignedTo;
                    
                    let ownerRank = ownersSlots[summonAssignedTo.name];//setAmount
                    if (!ownerRank) {return;}//if the summon is assigned to someone who doesn't own the set, then it doesn't matter

                    const summonEvent = generalInfo.summonEvent;
                    const isMemosprite = summonEvent.isMemosprite;
                    const summonWas = generalInfo.summonWas;

                    //we only care about the removal of a memosprite, not any other kind of summon
                    if (isMemosprite && summonWas === "Remove") {

                        let lcNameRef = "To Evernight's Stars";
                        let lcPathing = lightcones[lcNameRef].params;
                        let rankParams = lcPathing[ownerRank-1];

                        battleActions.updateEnergy(battleData,rankParams[3],summonAssignedTo,false,"Memosprite removed [To Evernight's Stars]");
                    }
                },
                "target": "self",
                "listenerName": "To Evernight's Stars - summon removed from field listener",
                "owners": []
            },
        ],
        "buffNames": {
            "noctisOwner": "Noctis (Owner) [LC]",
            "noctisOwnerMemo": "Noctis (Owner's memo) [LC]",
            "noctisAlliedMemo": "Noctis (Allied memo) [LC]",
        },
    },
    "Long May Rainbows Adorn the Sky": {//TODO: see function note
        logic(thisTurn,battleData) {},
        "skillFunctions": {
            lcAddedDMG(battleData,generalInfo,sourceTurn,targetsGotHit,ownerRank,element,memoTurn) {
                    // battleData,generalInfo,ownerTurn,targetsGotHit,ownerRank
                //extremely similar to bailu sig in terms of how things are handled, the main diff here is just:
                //this dmg CAN benefit from dmg bonuses (probably, will test)
                if (!sourceTurn.longMayRainbowsAddedDMGObject) {
                    let lcNameRef = "Time Waits for No One";
                    let lcPathing = lightcones[lcNameRef].params;
                    sourceTurn.rankParamsLCTimeWaitsForNoOne = lcPathing[ownerRank-1];

                    const tags = ["All",element];
                    const actionTags = ["Additional"];
                    const keyShortcut = basicShorthand.makeKeysArray;
                    const realDMGKeys = keyShortcut(dmgKeys,tags);
                    const realPENKeys = keyShortcut(resPENKeys,tags);
                    const realShredKeys = keyShortcut(defShredKeys,tags);
                    const realVulnKeys = keyShortcut(vulnKeys,tags);
                    //realDMGKeys,realPENKeys,realShredKeys,realVulnKeys
                    sourceTurn.longMayRainbowsAddedDMGObject = {
                        multipliers: {
                            primary: null,
                            blast: null,
                            all: null,
                            additional: null
                        },
                        scalar:null,
                        element,//override for additional dmg, not used otherwise
                        DMGTags: tags,
                        allToughness: false,
                        slot: null,
                        realDMGKeys,realPENKeys,realShredKeys,realVulnKeys,
                        actionTags
                    }
                }
                const values = sourceTurn.longMayRainbowsVALUES;
                let ATKObject = sourceTurn.longMayRainbowsAddedDMGObject;

                const tallyValue = sourceTurn.longMayRainbowsHPTally;
                // const tallyValue = calcs.customCeiling(sourceTurn.longMayRainbowsHPTally + 1,0.1);
                // const tallyValue = calcs.customCeiling(sourceTurn.longMayRainbowsHPTally,0.1);
                // const tallyValue = calcs.customRound(sourceTurn.longMayRainbowsHPTally + 1,0.1);

                
                const additionalMulti = values[5] * tallyValue;
                ATKObject.multipliers.additional = additionalMulti;


                //TODO: this lightcone is mega fucked
                //we can line up consume values vs the values shown in game, and in spite of that, we are REALLY close but just barely off
                //from the dmg this lightcone does in the additional dmg instance.
                //Best guess is the consume taken into the equation, follows some kind of rounding rule or truncation shit like The First Descendant did with
                //its truncate to 4 decimals but only after you add 0.00001, cause that fuck game.
                //values line up a LOT closer if we add 1 to the tally maybe as a base? But simply put, using the tally as is, will not line up but it will be close
                //to clarify, when I say there is prob some rule, it would apply to each consume value as it is added to the tally, not to the tally total
                //though maybe there's a fuckin rule for that too idk, fuck this lightcone.











                // console.log("lc values",tallyValue,additionalMulti)
                // console.log(ATKObject.multipliers.additional)


                //316.2974441075857     --      0.999044359152197409
                //370.2027893903086     --      0.999737481475313529

                //gallagher     needs ~791.5
                //tribbie       needs ~925.7

                //getting   315.2974441075857
                //need      316.6

                // missing 1.31 worth of consume



                //getting   369.2027893903086
                //need      370.3



                const addedWrapper = battleActions.additionalDMGWrapper;
                const enemyTurns = battleData.enemyBasedTurns;
                for (let enemyHit in targetsGotHit) {
                    const currentEnemy = enemyTurns[enemyHit];
                    if (!currentEnemy || currentEnemy.isDead) {continue;}
                    // primaryTarget = currentEnemy;
                    addedWrapper(battleData,memoTurn,memoTurn.properName,ATKObject,currentEnemy,"Long May Rainbows Adorn the Sky [LC]");
                }
                sourceTurn.longMayRainbowsHPTally = 0;
            },
        },
        "listeners": [
            {
                "trigger": "BasicATKStart",
                condition(battleData,generalInfo) {
                    // let ownerRef = this.owners;
                    let sourceTurn = generalInfo.sourceTurn;

                    let ownersSlots = this.ownersSlots;
                    let ownerRank = ownersSlots[sourceTurn.name];
                    if (!ownerRank) {return;}

                    if (!sourceTurn.longMayRainbowsVALUES) {
                        let lcNameRef = "Long May Rainbows Adorn the Sky";
                        // const logicRef = turnLogicLightcones[lcNameRef];
                        let lcPathing = lightcones[lcNameRef].params;
                        sourceTurn.longMayRainbowsVALUES = lcPathing[ownerRank-1];
                    }
                    const values = sourceTurn.longMayRainbowsVALUES;
                    // console.log(values[1])
                    const consumeValue = battleActions.consumeHP(battleData,true,values[1],null,sourceTurn,"Lightcone",false,true).totalEaten;
                    // sourceTurn.longMayRainbowsHPTally = (sourceTurn.longMayRainbowsHPTally ?? 0) + consumeValue;
                    // sourceTurn.longMayRainbowsHPTally = (sourceTurn.longMayRainbowsHPTally ?? 0) + Math.ceil(consumeValue);

                    sourceTurn.longMayRainbowsHPTally = (sourceTurn.longMayRainbowsHPTally ?? 0) + consumeValue;
                },
                "target": "self",
                "listenerName": "Long May Rainbows Adorn the Sky - owner basic atk listener",
                "owners": [],
                "buffNames": {},
            },
            {
                "trigger": "SkillStart",
                condition(battleData,generalInfo) {
                    // let ownerRef = this.owners;
                    let sourceTurn = generalInfo.sourceTurn;

                    let ownersSlots = this.ownersSlots;
                    let ownerRank = ownersSlots[sourceTurn.name];
                    if (!ownerRank) {return;}

                    if (!sourceTurn.longMayRainbowsVALUES) {
                        let lcNameRef = "Long May Rainbows Adorn the Sky";
                        // const logicRef = turnLogicLightcones[lcNameRef];
                        let lcPathing = lightcones[lcNameRef].params;
                        sourceTurn.longMayRainbowsVALUES = lcPathing[ownerRank-1];
                    }
                    const values = sourceTurn.longMayRainbowsVALUES;
                    // console.log(values[1])
                    const consumeValue = battleActions.consumeHP(battleData,true,values[1],null,sourceTurn,"Lightcone",false,true).totalEaten;
                    // sourceTurn.longMayRainbowsHPTally = (sourceTurn.longMayRainbowsHPTally ?? 0) + consumeValue;
                    // sourceTurn.longMayRainbowsHPTally = (sourceTurn.longMayRainbowsHPTally ?? 0) + Math.ceil(consumeValue);

                    sourceTurn.longMayRainbowsHPTally = (sourceTurn.longMayRainbowsHPTally ?? 0) + consumeValue;
                },
                "target": "self",
                "listenerName": "Long May Rainbows Adorn the Sky - owner skill listener",
                "owners": [],
                "buffNames": {},
            },
            {
                "trigger": "UltimateStart",
                condition(battleData,generalInfo) {
                    // let ownerRef = this.owners;
                    let sourceTurn = generalInfo.sourceTurn;

                    let ownersSlots = this.ownersSlots;
                    let ownerRank = ownersSlots[sourceTurn.name];
                    if (!ownerRank) {return;}

                    if (!sourceTurn.longMayRainbowsVALUES) {
                        let lcNameRef = "Long May Rainbows Adorn the Sky";
                        // const logicRef = turnLogicLightcones[lcNameRef];
                        let lcPathing = lightcones[lcNameRef].params;
                        sourceTurn.longMayRainbowsVALUES = lcPathing[ownerRank-1];
                    }
                    const values = sourceTurn.longMayRainbowsVALUES;
                    // console.log(values[1])
                    const consumeValue = battleActions.consumeHP(battleData,true,values[1],null,sourceTurn,"Lightcone",false,true).totalEaten;
                    // sourceTurn.longMayRainbowsHPTally = (sourceTurn.longMayRainbowsHPTally ?? 0) + consumeValue;
                    // sourceTurn.longMayRainbowsHPTally = (sourceTurn.longMayRainbowsHPTally ?? 0) + Math.ceil(consumeValue);

                    sourceTurn.longMayRainbowsHPTally = (sourceTurn.longMayRainbowsHPTally ?? 0) + consumeValue;
                },
                "target": "self",
                "listenerName": "Long May Rainbows Adorn the Sky - owner ult listener",
                "owners": [],
                "buffNames": {},
            },
            {
                "trigger": "MemoSkillStart",
                condition(battleData,generalInfo) {
                    // let ownerRef = this.owners;
                    let sourceTurn = generalInfo.sourceTurn;
                    const ownerTurn = battleData.nameBasedTurns[sourceTurn.eventOwner];

                    let ownersSlots = this.ownersSlots;
                    let ownerRank = ownersSlots[ownerTurn.name];
                    if (!ownerRank) {return;}

                    if (!ownerTurn.longMayRainbowsVULNSHEET) {
                        let lcNameRef = "Long May Rainbows Adorn the Sky";
                        const logicRef = turnLogicLightcones[lcNameRef];
                        let lcPathing = lightcones[lcNameRef].params;
                        let rankParams = lcPathing[ownerRank-1];
                        const buffNames = logicRef.buffNames;
                        // let ownerName = sourceTurn.properName;

                        ownerTurn.longMayRainbowsVULNSHEET = {
                            "stats": [VulnAll],
                            [VulnAll]: rankParams[3],
                            "source": lcNameRef,
                            "sourceOwner": ownerTurn.properName,
                            "buffName": buffNames.vuln,
                            "duration": 2,
                            "AVApplied": 0,
                            "maxStacks": 1,
                            "currentStacks": 1,
                            "decay": false,
                            "isDebuff": true,
                            "expireType": null,
                        }
                    }
                    let buffSheet = ownerTurn.longMayRainbowsVULNSHEET;
                    

                    const enemyPositions = battleData.enemyPositions;
                    const updateBuff = battleActions.updateBuff;
                    for (let enemy of enemyPositions) {
                        buffSheet.duration = enemy.turnState ? 3 : 2;
                        updateBuff(battleData,enemy,buffSheet);
                    }
                },
                "target": "self",
                "listenerName": "Long May Rainbows Adorn the Sky - memoskill listener",
                "owners": [],
                "buffNames": {},
            },
            {
                "trigger": "AdditionalTriggerAttackEnd",
                condition(battleData,generalInfo) {
                    // const generalInfo = {sourceTurn,enemiesToHit,targetsGotHit,enemiesThatBroke,dmgSlot,ATKObject,element,totals,overBreakTotals,overKillTotals};

                    // let ownerTurn = this.ownerTurn;
                    let sourceTurn = generalInfo.sourceTurn;
                    if (sourceTurn.isEnemy || !sourceTurn.isMemosprite) {return;}//only tracking memo attacks
                    const ownersSlots = this.ownersSlots;
                    const ownerSlot = sourceTurn.eventOwner;
                    const ownerRank = ownersSlots[ownerSlot];
                    if (!ownerRank) {return;}//if the memo owner isn't a lightcone owner, then abort
                    const ownerTurn = battleData.nameBasedTurns[ownerSlot];
                    const HPTally = ownerTurn.longMayRainbowsHPTally;
                    if (!HPTally) {return;}

                    // let characterName = ownerTurn.properName;
                    const lcNameRef = "Long May Rainbows Adorn the Sky";
                    const logicRef = turnLogicLightcones[lcNameRef];
                    const addedDMG = logicRef.skillFunctions.lcAddedDMG;
                    const targetsGotHit = generalInfo.targetsGotHit;
                    
                    const element = sourceTurn.element;
                    addedDMG(battleData,generalInfo,ownerTurn,targetsGotHit,ownerRank,element,sourceTurn);
                    // const targetsGotHit = generalInfo.targetsGotHit;
                    // logicRef.skillFunctions.zoneAddedDMG(battleData,generalInfo,ownerTurn,targetsGotHit);
                },
                "target": "enemy",
                "listenerName": "Long May Rainbows Adorn the Sky -  attack listener for additional dmg",
                "announce": false,
                "owners": [],
                "ownersSlots": {}
            },
        ],
        "buffNames": {
            "vuln": "Long May Rainbows Adorn the Sky",
        },
    },
    "Memory's Curtain Never Falls": {
        logic(thisTurn,battleData) {},
        "skillFunctions": {},
        "listeners": [
            {
                "trigger": "SkillEnd",
                condition(battleData,generalInfo) {
                    let ownerRef = this.owners;
                    let sourceTurn = generalInfo.sourceTurn;

                    let ownersSlots = this.ownersSlots;
                    let ownerRank = ownersSlots[sourceTurn.name];
                    if (!ownerRank) {return;}

                    if (!sourceTurn.memoryCurtainDMGSHEET) {
                        let lcNameRef = "Memory's Curtain Never Falls";
                        let lcPathing = lightcones[lcNameRef].params;
                        let rankParams = lcPathing[ownerRank-1];

                        sourceTurn.memoryCurtainDMGSHEET = {
                            "stats": [DamageAll],
                            [DamageAll]: rankParams[1],
                            "source": lcNameRef,
                            "sourceOwner": sourceTurn.properName,
                            "buffName": turnLogicLightcones[lcNameRef].buffNames.allyDMG,
                            "duration": 2,
                            "AVApplied": 0,
                            "maxStacks": 1,
                            "currentStacks": 1,
                            "decay": false,
                            "expireType": null,
                            "removeOnDeath": true,
                        }
                    }
                    let buffSheet = sourceTurn.memoryCurtainDMGSHEET;
                    

                    const allyPositions = battleData.allyPositions;
                    const updateBuff = battleActions.updateBuff;
                    for (let ally of allyPositions) {
                        buffSheet.duration = ally.turnState ? 4 : 3;
                        updateBuff(battleData,ally,buffSheet);
                    }
                },
                "target": "self",
                "listenerName": "Memory's Curtain Never Falls - Skill end listener",
                "owners": [],
            },
        ],
        "buffNames": {
            "allyDMG": "Reception [LC]"
        },
    },
    "Fly Into a Pink Tomorrow": {
        logic(thisTurn,battleData) {},
        "skillFunctions": {},
        "listeners": [
            {
                "trigger": "PreBattleEntersCombat",
                condition(battleData,generalInfo) {
                    let ownerRef = this.owners;


                    const nameBasedTurns = battleData.nameBasedTurns;

                    let rmcWasFound = false;
                    let rmcRefTurn = null;
                    for (let charSlot in nameBasedTurns) {
                        const currentEntity = nameBasedTurns[charSlot];
                        if (currentEntity.properName === "Trailblazer - Remembrance") {
                            rmcWasFound = true;
                            rmcRefTurn = currentEntity;
                            break;
                        }
                    }

                    if (!rmcWasFound) {return;}//this LC only gives a bonus with RMC as the user of a lightcone. If he is not in the team at all we can abort early

                    let ownersSlots = this.ownersSlots;
                    let ownerRank = ownersSlots[rmcRefTurn.name];
                    if (!ownerRank) {return;}
                    //if RMC is not the one in this team that holds the lightcone, then abort

                    if (!this.flyIntoPinkDMGSHEET) {
                        let lcNameRef = "Fly Into a Pink Tomorrow";
                        let lcPathing = lightcones[lcNameRef].params;
                        let rankParams = lcPathing[ownerRank-1];

                        this.flyIntoPinkDMGSHEET = {
                            "stats": [DamageAll],
                            [DamageAll]: rankParams[1],
                            "source": lcNameRef,
                            "sourceOwner": rmcRefTurn.properName,
                            "buffName": turnLogicLightcones[lcNameRef].buffNames.allyDMG,
                            "duration": 2,
                            "AVApplied": 0,
                            "maxStacks": 1,
                            "currentStacks": 1,
                            "decay": false,
                            "expireType": null,
                            "removeOnDeath": true,
                        }

                        this.flyIntoPinkJointDMGSHEET = {
                            "stats": [DamageAll],
                            [DamageAll]: rankParams[2],
                            "source": lcNameRef,
                            "sourceOwner": rmcRefTurn.properName,
                            "buffName": turnLogicLightcones[lcNameRef].buffNames.jointDMG,
                            "duration": 2,
                            "AVApplied": 0,
                            "maxStacks": 1,
                            "currentStacks": 1,
                            "decay": false,
                            "expireType": null,
                            "removeOnDeath": true,
                            "actionTags": ["Joint"]
                        }
                    }
                    let buffSheet = this.flyIntoPinkDMGSHEET;
                    let buffSheetJoint = this.flyIntoPinkJointDMGSHEET;

                    const memTurn = rmcRefTurn.rmcMemTURNEVENT;
                    
                    const updateBuff = battleActions.updateBuff;
                    for (let allySlot in nameBasedTurns) {
                        const currentAlly = nameBasedTurns[allySlot];
                        updateBuff(battleData,currentAlly,buffSheet);
                    }

                    updateBuff(battleData,rmcRefTurn,buffSheetJoint);
                    updateBuff(battleData,memTurn,buffSheetJoint);
                },
                "target": "self",
                "listenerName": "Fly Into a Pink Tomorrow - Battlestart listener",
                "owners": [],
            },
        ],
        "buffNames": {
            "allyDMG": "Fly Into a Pink Tomorrow [LC]",
            "jointDMG": "Fly Into a Pink Tomorrow (Joint ATK DMG) [LC]"
        },
    },

    //PRESERVATIONN
    "Inherently Unjust Destiny": {
        logic(thisTurn,battleData) {},
        "skillFunctions": {},
        "listeners": [
            {
                "trigger": "TargetShield",
                condition(battleData,generalInfo) {
                    // let ownerRef = this.owners;
                    let sourceTurn = generalInfo.sourceTurn;

                    let ownersSlots = this.ownersSlots;
                    let ownerRank = ownersSlots[sourceTurn.name];
                    if (!ownerRank) {return;}
                    //who we target with the shield specifically, doesn't matter, only that a shield target proc happened to begin with

                    
                    if (!sourceTurn.inherentlyUnjustCRITDMGSHEET) {
                        let lcNameRef = "Inherently Unjust Destiny";
                        let lcPathing = lightcones[lcNameRef].params;
                        let rankParams = lcPathing[ownerRank-1];

                        sourceTurn.inherentlyUnjustCRITDMGSHEET = {
                            "stats": [CritDamageBase],
                            [CritDamageBase]: rankParams[1],
                            "source": lcNameRef,
                            "sourceOwner": sourceTurn.properName,
                            "buffName": turnLogicLightcones[lcNameRef].buffNames.unjust,
                            "duration": 2,
                            "AVApplied": 0,
                            "maxStacks": 1,
                            "currentStacks": 1,
                            "decay": false,
                            "expireType": "EndTurn",
                        }
                    }
                    let buffSheet = sourceTurn.inherentlyUnjustCRITDMGSHEET;
                    let buffName = buffSheet.buffNames;
                    
                    buffSheet.duration = sourceTurn.turnState ? 3 : 2;
                    battleActions.updateBuff(battleData,sourceTurn,buffSheet);
                },
                "target": "self",
                "listenerName": "Inherently Unjust Destiny - ATK% Stack - Hrunting Stack",
                "owners": [],
            },
            {
                "trigger": "HitEnemyStart",
                condition(battleData,generalInfo) {
                    // poke("FUAStart",battleData,{sourceTurn});

                    // const turnMerge = {targetTurn,sourceTurn,slot,targetsGotHit,ATKObject};
                    // poke(isEnemy ? "HitAllyStart" : "HitEnemyStart",battleData,turnMerge);
                    const isFUA = generalInfo.ATKObject.isFUA;
                    const targetTurn = generalInfo.targetTurn;
                    const sourceTurn = generalInfo.sourceTurn;
                    let ownersSlots = this.ownersSlots;
                    let ownerRank = ownersSlots[sourceTurn.name];
                    const targetHits = generalInfo.targetsGotHit[targetTurn.name];
                    if (!isFUA || targetHits > 1 || !ownerRank) {return}//we only care about first hits for this, no point in evaluating it every fuckin time
                    //have confirmed unjust applies before the dmg takes place, assuming it actually applies

                    if (!sourceTurn.inherentlyUnjustDEBUFFSHEET) {
                        let lcNameRef = "Inherently Unjust Destiny";
                        let lcPathing = lightcones[lcNameRef].params;
                        let rankParams = lcPathing[ownerRank-1];

                        sourceTurn.inherentlyUnjustDEBUFFSHEET = {
                            "stats": [VulnAll],
                            [VulnAll]: rankParams[4],
                            "source": lcNameRef,
                            "sourceOwner": sourceTurn.properName,
                            "buffName": turnLogicLightcones[lcNameRef].buffNames.unjustVuln,
                            "duration": 2,
                            "AVApplied": 0,
                            "maxStacks": 1,
                            "currentStacks": 1,
                            "decay": false,
                            "expireType": "EndTurn",
                            "isDebuff": true,
                        }
                    }
                    let buffSheet = sourceTurn.inherentlyUnjustDEBUFFSHEET;
                    
                    buffSheet.duration = targetTurn.turnState ? 3 : 2;
                    battleActions.updateBuff(battleData,targetTurn,buffSheet);
                },
                "target": "self",
                "listenerName": "Inherently Unjust Destiny - Hit scaling",
                "owners": [],
                "ownersSlots": {},
            },
        ],
        "buffNames": {
            "unjust": "Inherently Unjust Destiny",
            "unjustVuln": "Inherently Unjust Destiny"
        },
    },
    "Though Worlds Apart": {
        logic(thisTurn,battleData) {},
        "skillFunctions": {},
        "listeners": [
            {
                "trigger": "UltimateStart",
                condition(battleData,generalInfo) {
                    // let ownerRef = this.owners;
                    let sourceTurn = generalInfo.sourceTurn;

                    let ownersSlots = this.ownersSlots;
                    let ownerRank = ownersSlots[sourceTurn.name];
                    if (!ownerRank) {return;}
                    //who we target with the shield specifically, doesn't matter, only that a shield target proc happened to begin with

                    if (!sourceTurn.thoughWorldsDMGSHEET) {
                        let lcNameRef = "Though Worlds Apart";
                        let lcPathing = lightcones[lcNameRef].params;
                        let rankParams = lcPathing[ownerRank-1];

                        sourceTurn.thoughWorldsDMGSHEET = {
                            "stats": [DamageAll],
                            [DamageAll]: rankParams[1],
                            "source": lcNameRef,
                            "sourceOwner": sourceTurn.properName,
                            "buffName": turnLogicLightcones[lcNameRef].buffNames.redoubt,
                            "duration": 3,
                            "AVApplied": 0,
                            "maxStacks": 1,
                            "currentStacks": 1,
                            "decay": false,
                            "expireType": "EndTurn",
                        }

                        sourceTurn.thoughWorldsDMGSummonSHEET = {
                            "stats": [DamageAll],
                            [DamageAll]: rankParams[2],
                            "source": lcNameRef,
                            "sourceOwner": sourceTurn.properName,
                            "buffName": turnLogicLightcones[lcNameRef].buffNames.redoubtSummon,
                            "duration": 3,
                            "AVApplied": 0,
                            "maxStacks": 1,
                            "currentStacks": 1,
                            "decay": false,
                            "expireType": "EndTurn",
                        }


                        sourceTurn.thoughWorldsHealObject = {
                            multipliers: {
                                primary: rankParams[4],
                                blast: null,
                                all: null,
                            },
                            flatAmounts: {
                                primary: null,
                                blast: null,
                                all: null,
                            },
                            scalar: "ATK",
                            DMGTags: [],
                            allToughness: false,
                            slot: "Lightcone"
                        }
                    }
                    const buffSheet = sourceTurn.thoughWorldsDMGSHEET;
                    const buffSheet2 = sourceTurn.thoughWorldsDMGSummonSHEET;
                    const healObject = sourceTurn.thoughWorldsHealObject;

                    const allyPositions = battleData.allyPositions;
                    const updateBuff = battleActions.updateBuff;

                    let lowestHPValue = Infinity;
                    let lowestHPAlly = null;
                    for (let ally of allyPositions) {

                        buffSheet.duration = ally.turnState ? 4 : 3;
                        updateBuff(battleData,ally,buffSheet);

                        if (ally.activeMemosprites || ally.activeSummons) {
                            buffSheet2.duration = ally.turnState ? 4 : 3;
                            updateBuff(battleData,ally,buffSheet2);
                        }

                        const currentHP = ally.currentHP;
                        if (currentHP < lowestHPValue) {
                            lowestHPValue = currentHP;
                            lowestHPAlly = ally;
                        }
                    }

                    // healCall(battleData,null,ownerTurn,allyPositions,1);
                    const healAlly = battleActions.healAlly;
                    healAlly(battleData,healObject,sourceTurn,sourceTurn,"Lightcone",1,allyPositions);
                    healAlly(battleData,healObject,lowestHPAlly,sourceTurn,"Lightcone",1);
                },
                "target": "self",
                "listenerName": "Though Worlds Apart - ATK% Stack - Hrunting Stack",
                "owners": [],
            },
        ],
        "buffNames": {
            "redoubt": "Redoubt [LC]",
            "redoubtSummon": "Redoubt (Summon) [LC]"
        },
    },
}




const turnLogicRelics = {
    //BODY SETS
    "Genius of Brilliant Stars": {
        "2pc": {},
        "4pc": {
            logic(thisTurn,battleData) {},
            "skillFunctions": {},
            "listeners": [
                {
                    "trigger": "PreBattleEntersCombat",
                    condition(battleData,generalInfo) {
                        let ownerRef = this.owners;
                        let relicNameRef = "Genius of Brilliant Stars";
                        let pcRef = "4pc";
                        let relicPathing = this.relicPathing ??= relicSets[relicNameRef].params[1];//0-2pc 1-4pc
                        // [0.1,0.1]
                        let buffName = this.buffName ??= turnLogicRelics[relicNameRef][pcRef].buffNames.pc4ShredAny;

                        const buffSheet = this.buffSheet ??= {
                            "stats": [DEFShredAll],
                            [DEFShredAll]: relicPathing[0],
                            "source": relicNameRef,
                            "sourceOwner": "",
                            "buffName": buffName,
                            "duration": 1,
                            "AVApplied": 0,
                            "maxStacks": 1,
                            "currentStacks": 1,
                            "decay": false,
                            "expireType": null
                        }

                        const updateBuff = battleActions.updateBuff;
                        const namedTurns = battleData.nameBasedTurns;
                        for (let owner of ownerRef) {
                            let charSlot = owner.slot;
                            let currentTurn = namedTurns[charSlot];
                            // let values = relicPathing[0];
                            // buffSheet[DEFShredAll] = values
                            buffSheet.sourceOwner = currentTurn.properName;
                            updateBuff(battleData,currentTurn,buffSheet);
                        }
                    },
                    "target": "self",
                    "listenerName": "Genius of Brilliant Stars - DEF Shred(Any) 4pc",
                    "owners": []
                },
                {
                    "trigger": "AllyDMGStart",
                    condition(battleData,generalInfo) {
                        let ownerRef = this.owners;
                        
                        let sourceTurn = generalInfo.sourceTurn;
                        let targetTurn = generalInfo.targetTurn;

                        let ownersSlots = this.ownersSlots;
                        let ownerRank = ownersSlots[sourceTurn.name];//setAmount
                        if (!ownerRank) {return;}

                        if (!sourceTurn.geniusQUANTUMSHREDSHEET) {
                            let relicNameRef = "Genius of Brilliant Stars";
                            let pcRef = "4pc";
                            let buffName = this.buffName ??= turnLogicRelics[relicNameRef][pcRef].buffNames.pc4ShredQuantum;
                            let relicPathing = this.relicPathing ??= relicSets[relicNameRef].params[1];//0-2pc 1-4pc
                            sourceTurn.geniusQUANTUMSHREDSHEET = {
                                "stats": [DEFShredAll],
                                [DEFShredAll]: relicPathing[1],
                                "source": relicNameRef,
                                "sourceOwner": sourceTurn.properName,
                                "buffName": buffName,
                                "duration": 1,
                                "AVApplied": 0,
                                "maxStacks": 1,
                                "currentStacks": 1,
                                "decay": false,
                                "expireType": null
                            }
                        }
                        let buffSheet = sourceTurn.geniusQUANTUMSHREDSHEET;
                        const buffName = buffSheet.buffName;

                        if (targetTurn.statTable[WeaknessQuantum] <= 0) {//if there is no quantum weakness
                            if (sourceTurn.buffsObject[buffName]) {removeBuff(battleData,sourceTurn,buffSheet);}//then remove the buff if we have it
                            else {return;}
                        }
                        else {//if weakness found, apply buff
                            if (sourceTurn.buffsObject[buffName]) {return;}//if the owner already has the buff, then skip it so we don't reclutter the log 30k times
                            
                            battleActions.updateBuff(battleData,sourceTurn,buffSheet);
                        }
                    },
                    "target": "self",
                    "listenerName": "Genius of Brilliant Stars - DEF Shred(Quantum Enemy) 4pc",
                    "owners": []
                },
            ],
            "buffNames": {
                "pc4ShredAny": "Genius' DEF Shred(Any)",
                "pc4ShredQuantum": "Genius' DEF Shred(Quantum)",
            },
        }
    },
    "Eagle of Twilight Line": {
        "2pc": {},
        "4pc": {
            logic(thisTurn,battleData) {},
            "skillFunctions": {},
            "listeners": [
                {
                    "trigger": "UltimateEnd",
                    condition(battleData,generalInfo) {
                        // let ownerRef = this.owners;
                        let sourceTurn = generalInfo.sourceTurn;
                        let ownersSlots = this.ownersSlots;
                        let ownerRank = ownersSlots[sourceTurn.name];//setAmount

                        if (!ownerRank || sourceTurn.turnState) {return;}//advancing in your own turn = nothing
                        let relicNameRef = "Eagle of Twilight Line";
                        battleActions.actionAdvance(0.25,sourceTurn,battleData,relicNameRef);
                    },
                    "target": "self",
                    "listenerName": "Eagle - Advance/Ult",
                    "owners": [],
                    "ownersSlots": {}
                },
            ],
            "buffNames": {},
        }
    },
    "Sacerdos\' Relived Ordeal": {
        "2pc": {},
        "4pc": {
            logic(thisTurn,battleData) {},
            "skillFunctions": {},
            "listeners": [
                {
                    "trigger": "TargetAlly",
                    condition(battleData,generalInfo) {
                        // let ownerRef = this.owners;
                        let sourceTurn = generalInfo.sourceTurn;
                        let ownersSlots = this.ownersSlots;
                        let ownerRank = ownersSlots[sourceTurn.name];//setAmount
                        if (!ownerRank) {return;}

                        //poke("TargetAlly",battleData,{targetType:"Single", sourceTurn:currentTurn, targetTurn:targetTurn, targetSkill:skillRef.slot});
                        let isNotSingle = generalInfo.targetType != "Single";
                        const skillType = generalInfo.targetSkill;
                        let isNotEligibleSkill = skillType != "Skill" && skillType != "Ultimate";
                        if (isNotSingle || isNotEligibleSkill) {return;}
                        //we skip team-wide ulty or skill buffs, and then avoid non-ulty and non-skills
                        let targetTurn = generalInfo.targetTurn;

                        if (!sourceTurn.sacerdosCRITDMGSHEET) {
                            let relicNameRef = "Sacerdos\' Relived Ordeal";
                            let pcRef = "4pc";
                            let buffName = this.buffName ??= turnLogicRelics[relicNameRef][pcRef].buffNames.sacerdos;

                            let relicPathing = this.relicPathing ??= relicSets[relicNameRef].params[1];//0-2pc 1-4pc
                            // greatTableIndex
                            // greatTableKeys
                            sourceTurn.sacerdosCRITDMGSHEET = {
                                "stats": [CritDamageBase],
                                [CritDamageBase]: relicPathing[0],
                                "source": relicNameRef,
                                "sourceOwner": sourceTurn.properName,
                                "buffName": buffName,
                                "duration": 2,
                                "AVApplied": 0,
                                "maxStacks": 2,
                                "currentStacks": 1,
                                "decay": false,
                                "expireType": "EndTurn",
                                "removeOnDeath": true,
                            }
                        }

                        let buffSheet = sourceTurn.sacerdosCRITDMGSHEET;
                        
                        buffSheet.duration = targetTurn.turnState ? 3 : 2;
                        const updateBuff = battleActions.updateBuff;
                        updateBuff(battleData,targetTurn,buffSheet);
                        const targetChildEntities = generalInfo.targetChildEntities;
                        if (targetChildEntities) {
                            const hasMemosprite = targetTurn.activeMemosprites;
                            const memospriteEventRef = targetTurn.memospriteEventRef;
                            const memoTurn = hasMemosprite ? targetTurn[memospriteEventRef] : null;
                            if (memoTurn) {updateBuff(battleData,memoTurn,buffSheet);}
                        }
                    },
                    "target": "self",
                    "listenerName": "Sacerdos targeted ally listener",
                    "owners": []
                },
            ],
            "buffNames": {
                "sacerdos": "Sacerdos Crit Stack",
            },
        }
    },
    "Wavestrider Captain": {
        "2pc": {},
        "4pc": {
            logic(thisTurn,battleData) {},
            "skillFunctions": {
                giveHelp(battleData,targetTurn) {//lmao this function name out of context
                    if (!targetTurn.wavestriderHELPSHEET) {
                        let relicNameRef = "Wavestrider Captain";
                        let pcRef = "4pc";
                        let buffName = turnLogicRelics[relicNameRef][pcRef].buffNames.help;
                        targetTurn.wavestriderHELPSHEET = {
                            "stats": null,
                            "target": targetTurn.properName,
                            "source": relicNameRef,
                            "sourceOwner": targetTurn.properName,
                            "buffName": buffName,
                            "duration": 1,
                            "AVApplied": 0,
                            "maxStacks": 2,
                            "currentStacks": 1,
                            "decay": false,
                            "expireType": null
                        }
                    }

                    let buffSheet = targetTurn.wavestriderHELPSHEET;
                    
                    battleActions.updateBuff(battleData,targetTurn,buffSheet);
                }
            },
            "listeners": [
                {
                    "trigger": "TargetAlly",
                    condition(battleData,generalInfo) {
                        let ownersSlots = this.ownersSlots;
                        //poke("TargetAlly",battleData,{targetType:"Single", sourceTurn:currentTurn, targetTurn:targetTurn, targetSkill:skillRef.slot});
                        let targetTurn = generalInfo.targetTurn;
                        //TODO: probably a better way to handle this, later

                        if (targetTurn) {
                            let ownerRank = ownersSlots[targetTurn.name];//setAmount
                            if (!ownerRank) {return;}//if we are targeting one ally, and the ally doesn't own the 4pc set, then abort
                            let relicNameRef = "Wavestrider Captain";
                            let pcRef = "4pc";
                            let giveHelp = this.giveHelp ??= turnLogicRelics[relicNameRef][pcRef].skillFunctions.giveHelp;
                            giveHelp(battleData,targetTurn);
                        }
                        else {
                            let relicNameRef = "Wavestrider Captain";
                            let pcRef = "4pc";
                            let giveHelp = this.giveHelp ??= turnLogicRelics[relicNameRef][pcRef].skillFunctions.giveHelp;
                            const namedTurns = battleData.nameBasedTurns;
                            for (let ownerSlot in ownersSlots) {
                                let currentOwner = namedTurns[ownerSlot];
                                giveHelp(battleData,currentOwner);
                            }
                            //in the scenario that it was a team-wide targeting, we apply help to every owner
                        }
                    },
                    "target": "self",
                    "listenerName": "Wavestrider Captain targeted ally listener",
                    "owners": []
                },
                {
                    "trigger": "UltimateStart",
                    condition(battleData,generalInfo) {
                        let sourceTurn = generalInfo.sourceTurn;
                        let ownersSlots = this.ownersSlots;
                        let ownerRank = ownersSlots[sourceTurn.name];//setAmount
                        if (!ownerRank) {return;}

                        let relicNameRef = "Wavestrider Captain";
                        let pcRef = "4pc";
                        

                        const buffRef = this.buffRef ??= turnLogicRelics[relicNameRef][pcRef].buffNames;
                        let helpCheck = sourceTurn.buffsObject[buffRef.help];

                        if (helpCheck && helpCheck.currentStacks === 2) {
                            const updateBuff = battleActions.updateBuff;
                            removeBuff(battleData,sourceTurn,helpCheck);//clear the help stacks

                            if (!sourceTurn.wavestriderATKSHEET) {
                                let relicPathing = this.relicPathing ??= relicSets[relicNameRef].params[1];//0-2pc 1-4pc
                                let buffName2 = buffRef.atkBuff;
                                sourceTurn.wavestriderATKSHEET = {
                                    "stats": [ATKP],
                                    [ATKP]: relicPathing[1],
                                    "source": relicNameRef,
                                    "sourceOwner": sourceTurn.properName,
                                    "buffName": buffName2,
                                    "duration": 1,
                                    "AVApplied": 0,
                                    "maxStacks": 1,
                                    "currentStacks": 1,
                                    "decay": false,
                                    "expireType": "EndTurn"
                                }
                            }
                            
                            let buffSheet = sourceTurn.wavestriderATKSHEET;
                            
                            buffSheet.duration = sourceTurn.turnState ? 2 : 1;
                            updateBuff(battleData,sourceTurn,buffSheet);
                        }
                    },
                    "target": "self",
                    "listenerName": "Wavestrider Captain ATKbuff listener",
                    "owners": [],
                    "ownersSlots": {}
                },
            ],
            "buffNames": {
                "help": "Wavestrider Help",
                "atkBuff": "Wavestrider ATK",
            },
        }
    },
    "Scholar Lost in Erudition": {
        "2pc": {},
        "4pc": {
            logic(thisTurn,battleData) {},
            "skillFunctions": {},
            "listeners": [
                {
                    "trigger": "PreBattleEntersCombat",
                    condition(battleData,generalInfo) {
                        let ownersSlots = this.ownersSlots;

                        let relicNameRef = "Scholar Lost in Erudition";
                        let pcRef = "4pc";
                        // let relicPathing = relicSets[relicNameRef].params[1];//0-2pc 1-4pc
                        let buffName = this.buffName ??= turnLogicRelics[relicNameRef][pcRef].buffNames.skillUltyDmg;
                        // greatTableIndex
                        // greatTableKeys
                        const buffSheet = this.buffSheet ??= {
                            "stats": [DamageUltimate,DamageSkill],
                            [DamageUltimate]: 0.20,
                            [DamageSkill]: 0.20,
                            "source": relicNameRef,
                            "sourceOwner": "",
                            "buffName": buffName,
                            "duration": 1,
                            "AVApplied": 0,
                            "maxStacks": 1,
                            "currentStacks": 1,
                            "decay": false,
                            "expireType": null,
                        }
                        // console.log(buffSheet)
                        const namedTurns = battleData.nameBasedTurns;
                        const updateBuff = battleActions.updateBuff;
                        for (let allySlot in ownersSlots) {
                            const allyTurn = namedTurns[allySlot];
                            buffSheet.sourceOwner = allyTurn.properName,
                            updateBuff(battleData,allyTurn,buffSheet);
                        }
                        // battleActions.updateBuff(battleData,ownerTurn,buffSheet);
                    },
                    "target": "self",
                    "listenerName": "Scholar Ulty/Skill DMG application",
                    "owners": [],
                    "ownersSlots": {}
                },
                {
                    "trigger": "UltimateEnd",
                    condition(battleData,generalInfo) {
                        // let ownerRef = this.owners;
                        let sourceTurn = generalInfo.sourceTurn;
                        let ownersSlots = this.ownersSlots;
                        let ownerRank = ownersSlots[sourceTurn.name];//setAmount
                        if (!ownerRank) {return;}

                        if (!sourceTurn.scholarErudtionSKILLDMGSHEET) {
                            let relicNameRef = "Scholar Lost in Erudition";
                            let pcRef = "4pc";
                            let relicPathing = this.relicPathing ??= relicSets[relicNameRef].params[1];//0-2pc 1-4pc
                            let buffName = this.buffName ??= turnLogicRelics[relicNameRef][pcRef].buffNames.skillDmg;
                            // greatTableIndex
                            // greatTableKeys
                            sourceTurn.scholarErudtionSKILLDMGSHEET = {
                                "stats": [DamageSkill],
                                [DamageSkill]: relicPathing[1],
                                "source": relicNameRef,
                                "sourceOwner": sourceTurn.properName,
                                "buffName": buffName,
                                "duration": 1,
                                "AVApplied": battleData.sumAV,
                                "maxStacks": 1,
                                "currentStacks": 1,
                                "decay": false,
                                "expireType": null,//will be removed by custom listener, not enough things get removed on SkillEnd to bother doing a universal, though it is tempting
                            }
                        }

                        let buffSheet = sourceTurn.scholarErudtionSKILLDMGSHEET;
                        const buffCheck = sourceTurn.buffsObject[buffSheet.buffName];
                        if (buffCheck) {return;}//this is a "you have it or you don't" kinda buff since it only applies to the next skill use, duration doesn't matter
                        
                        battleActions.updateBuff(battleData,sourceTurn,buffSheet);
                    },
                    "target": "self",
                    "listenerName": "Scholar ulty listener",
                    "owners": [],
                    "ownersSlots": {}
                },
                {
                    "trigger": "SkillEnd",
                    condition(battleData,generalInfo) {
                        // let ownerRef = this.owners;
                        // let relicNameRef = "Scholar Lost in Erudition";
                        // let pcRef = "4pc";
                        let sourceTurn = generalInfo.sourceTurn;
                        let ownersSlots = this.ownersSlots;
                        let ownerRank = ownersSlots[sourceTurn.name];//setAmount
                        if (!ownerRank) {return;}

                        let buffName = sourceTurn.scholarErudtionSKILLDMGSHEET?.buffName;
                        let hasBuff = sourceTurn.buffsObject[buffName];

                        if (hasBuff) {removeBuff(battleData,sourceTurn,hasBuff);}
                    },
                    "target": "self",
                    "listenerName": "Scholar skill listener",
                    "owners": [],
                    "ownersSlots": {}
                },
            ],
            "buffNames": {
                "skillDmg": "Scholar Skill DMG",
                "skillUltyDmg": "Scholar Ult/Skill DMG",
            },
        }
    },
    "Watchmaker, Master of Dream Machinations": {
        "2pc": {},
        "4pc": {
            logic(thisTurn,battleData) {},
            "skillFunctions": {},
            "listeners": [
                {
                    "trigger": "TargetAlly",
                    condition(battleData,generalInfo) {
                        // let ownerRef = this.owners;
                        let sourceTurn = generalInfo.sourceTurn;
                        let ownersSlots = this.ownersSlots;
                        let ownerRank = ownersSlots[sourceTurn.name];//setAmount
                        if (!ownerRank) {return;}

                        //poke("TargetAlly",battleData,{targetType:"Single", sourceTurn:currentTurn, targetTurn:targetTurn, targetSkill:skillRef.slot});
                        let wasTeamTarget = generalInfo.targetType === "Single" || generalInfo.targetType === "Team";
                        let isNotEligibleSkill = generalInfo.targetSkill != "Ultimate";
                        if (!wasTeamTarget || isNotEligibleSkill) {return;}
                        //skip non ultimate, non ally targeting skills

                        if (!sourceTurn.watchmatcherBREAKSHEET) {
                            let relicNameRef = "Watchmaker, Master of Dream Machinations";
                            let pcRef = "4pc";
                            let relicPathing = this.relicPathing ??= relicSets[relicNameRef].params[1];//0-2pc 1-4pc
                            let buffName = this.buffName ??= turnLogicRelics[relicNameRef][pcRef].buffNames.breakBuff;
                            sourceTurn.watchmatcherBREAKSHEET = {
                                "stats": [DamageBreak],
                                [DamageBreak]: relicPathing[0],
                                "source": relicNameRef,
                                "sourceOwner": sourceTurn.properName,
                                "buffName": buffName,
                                "duration": 2,
                                "AVApplied": 0,
                                "maxStacks": 1,
                                "currentStacks": 1,
                                "decay": false,
                                "expireType": "EndTurn"
                            }
                        }

                        let buffSheet = sourceTurn.watchmatcherBREAKSHEET;
                        let newAV = battleData.sumAV;
                        const updateBuff = battleActions.updateBuff;
                        const allyPositions = battleData.allyPositions;
                        for (let targetTurn of allyPositions) {
                            buffSheet.AVApplied = newAV;
                            buffSheet.duration = targetTurn.turnState ? 3 : 2;
                            updateBuff(battleData,targetTurn,buffSheet);
                        }
                    },
                    "target": "self",
                    "listenerName": "Watchmaker ult targeted ally listener",
                    "owners": []
                },
            ],
            "buffNames": {
                "breakBuff": "Watchmaker Break Effect",
            },
        }
    },
    "Champion of Streetwise Boxing": {
        "2pc": {},
        "4pc": {
            logic(thisTurn,battleData) {},
            "skillFunctions": {
                streetwise(battleData,targetTurn) {
                    if (targetTurn.streetwiseBoxingSTACKINGCOMPLETED) {return;}//abort finished users

                    if (!targetTurn.streetwiseBoxingATKSHEET) {
                        let relicNameRef = "Champion of Streetwise Boxing";
                        let relicPathing = relicSets[relicNameRef].params[1];//0-2pc 1-4pc
                        let buffName = turnLogicRelics[relicNameRef]["4pc"].buffNames.atkBuff;
                        targetTurn.streetwiseBoxingATKSHEET = {
                            "stats": [ATKP],
                            [ATKP]: relicPathing[0],
                            "source": relicNameRef,
                            "sourceOwner": targetTurn.properName,
                            "buffName": buffName,
                            "duration": 1,
                            "AVApplied": 0,
                            "maxStacks": 5,
                            "currentStacks": 1,
                            "decay": false,
                            "expireType": "perma"
                        }
                    }
                    let buffSheet = targetTurn.streetwiseBoxingATKSHEET;
                    const buffName = buffSheet.buffName;
                    
                    battleActions.updateBuff(battleData,targetTurn,buffSheet);

                    const stackCheck = targetTurn.buffsObject[buffName].currentStacks;
                    if (stackCheck === 5) {
                        const tempLogic = battleData.battleLogicTemp;
                        const boxingRef = tempLogic.streetwiseBoxing;

                        boxingRef.completed += 1;
                        targetTurn.streetwiseBoxingSTACKINGCOMPLETED = true;
                        if (boxingRef.completed === boxingRef.total) {
                            const removeListener = battleActions.removeListenerInBattle;
                            removeListener(battleData,"Streetwise attack launched check","AttackStart");
                            removeListener(battleData,"Streetwise attack received check","AttackEnd");
                            //kill the listeners so we don't keep popping them on every attack launched/received from everyone
                        }
                    } 
                }
            },
            "listeners": [
                {
                    "trigger": "AttackStart",
                    condition(battleData,generalInfo) {
                        // let ownerRef = this.owners;
                        let ownersSlots = this.ownersSlots;
                        // poke("AttackStart",battleData,{sourceTurn,skillSlot:dmgSlot,enemiesToHit});
                        let sourceTurn = generalInfo.sourceTurn;
                        let ownerRank = ownersSlots[sourceTurn.name];
                        if (!ownerRank) {return;}//abort non-owners

                        const streetwise = this.streetwise ??= turnLogicRelics["Champion of Streetwise Boxing"]["4pc"].skillFunctions.streetwise;
                        streetwise(battleData,sourceTurn);
                        //TODO: need to see where it applies, before or after the attack
                    },
                    "target": "self",
                    "listenerName": "Streetwise attack launched check",
                    "owners": []
                },
                {
                    "trigger": "AttackEnd",
                    condition(battleData,generalInfo) {
                        let ownersSlots = this.ownersSlots;
                        // poke("AttackStart",battleData,{sourceTurn,skillSlot:dmgSlot,enemiesToHit,targetsGotHit});
                        let sourceTurn = generalInfo.sourceTurn;
                        if (!sourceTurn.isEnemy) {return;}//this attack end trigger can only be used on enemy attacks, not allies

                        let targetsGotHit = generalInfo.targetsGotHit;//this is all allies hit
                        const streetwise = this.streetwise ??= turnLogicRelics["Champion of Streetwise Boxing"]["4pc"].skillFunctions.streetwise;
                        const namedTurns = battleData.nameBasedTurns;
                        for (let allyHit in targetsGotHit) {
                            if (ownersSlots[allyHit]) {streetwise(battleData,namedTurns[allyHit]);}
                        }
                    },
                    "target": "self",
                    "listenerName": "Streetwise attack received check",
                    "owners": []
                },
                {
                    "trigger": "PreBattleEntersCombat",
                    condition(battleData,generalInfo) {
                        let ownerRef = this.owners;//purely for setting up temp value tracking
                        const tempLogic = battleData.battleLogicTemp;
                        const boxingRef = tempLogic.streetwiseBoxing ??= {};
                        boxingRef.total = ownerRef.length;
                        boxingRef.completed = 0;
                    },
                    "target": "self",
                    "listenerName": "Streetwise owners check",
                    "owners": []
                },
            ],
            "buffNames": {
                "atkBuff": "Champion of Streetwise Boxing",
            },
        }
    },
    "Band of Sizzling Thunder": {
        "2pc": {},
        "4pc": {
            logic(thisTurn,battleData) {},
            "skillFunctions": {},
            "listeners": [
                {
                    "trigger": "SkillStart",
                    condition(battleData,generalInfo) {
                        let sourceTurn = generalInfo.sourceTurn;
                        let ownersSlots = this.ownersSlots;
                        let ownerRank = ownersSlots[sourceTurn.name];//setAmount
                        if (!ownerRank) {return;}
                        //TODO: check later if it applies on skill use or after it's done, rn I'm assuming it's as it starts

                        if (!sourceTurn.sizzlingThunderATKSHEET) {
                            let relicNameRef = "Band of Sizzling Thunder";
                            let pcRef = "4pc";
                            let relicPathing = this.relicPathing ??= relicSets[relicNameRef].params[1];//0-2pc 1-4pc
                            let buffName = this.buffName ??= turnLogicRelics[relicNameRef][pcRef].buffNames.atkBuff;
                            sourceTurn.sizzlingThunderATKSHEET = {
                                "stats": [ATKP],
                                [ATKP]: relicPathing[0],
                                "source": relicNameRef,
                                "sourceOwner": sourceTurn.properName,
                                "buffName": buffName,
                                "duration": 2,//in practice, skills should always proc within ones own turn, ergo it gets the bonus turn else it'd expire as soon as the skill finished
                                "AVApplied": 0,
                                "maxStacks": 1,
                                "currentStacks": 1,
                                "decay": false,
                                "expireType": "EndTurn"
                            }
                        }

                        let buffSheet = sourceTurn.sizzlingThunderATKSHEET;
                        
                        battleActions.updateBuff(battleData,sourceTurn,buffSheet);
                    },
                    "target": "self",
                    "listenerName": "Band of Sizzling Thunder skill listener",
                    "owners": [],
                    "ownersSlots": {}
                },
            ],
            "buffNames": {
                "atkBuff": "Band of Sizzling Thunder",
            },
        }
    },
    "Musketeer of Wild Wheat": {
        "2pc": {},
        "4pc": {
            logic(thisTurn,battleData) {},
            "skillFunctions": {},
            "listeners": [
                {
                    "trigger": "PreBattleEntersCombat",
                    condition(battleData,generalInfo) {
                        let ownersSlots = this.ownersSlots;

                        let relicNameRef = "Musketeer of Wild Wheat";
                        let pcRef = "4pc";
                        let relicPathing = this.relicPathing ??= relicSets[relicNameRef].params[1];//0-2pc 1-4pc
                        let buffName = this.buffName ??= turnLogicRelics[relicNameRef][pcRef].buffNames.atkBuff;

                        // greatTableIndex
                        // greatTableKeys
                        let buffSheet = this.buffSheet ??= {
                            "stats": [DamageBasic],
                            [DamageBasic]: relicPathing[1],
                            "source": relicNameRef,
                            "sourceOwner": "",
                            "buffName": buffName,
                            "duration": 1,
                            "AVApplied": 0,
                            "maxStacks": 1,
                            "currentStacks": 1,
                            "decay": false,
                            "expireType": null,
                        }

                        const namedTurns = battleData.nameBasedTurns;
                        const updateBuff = battleActions.updateBuff
                        for (let ally in ownersSlots) {
                            let currentTurn = namedTurns[ally];
                            buffSheet.sourceOwner = currentTurn.properName;
                            updateBuff(battleData,currentTurn,buffSheet);
                        }
                    },
                    "target": "self",
                    "listenerName": "Musketeer of Wild Wheat combat buff application",
                    "owners": [],
                    "ownersSlots": {}
                },
            ],
            "buffNames": {
                "atkBuff": "Musketeer of Wild Wheat",
            },
        }
    },
    "Firesmith of Lava-Forging": {
        "2pc": {},
        "4pc": {
            logic(thisTurn,battleData) {},
            "skillFunctions": {},
            "listeners": [
                {
                    "trigger": "PreBattleEntersCombat",
                    condition(battleData,generalInfo) {
                        let ownersSlots = this.ownersSlots;

                        let relicNameRef = "Firesmith of Lava-Forging";
                        let pcRef = "4pc";
                        let relicPathing = this.relicPathing ??= relicSets[relicNameRef].params[1];//0-2pc 1-4pc
                        let buffName = this.buffName ??= turnLogicRelics[relicNameRef][pcRef].buffNames.skillBuff;

                        let buffSheet = this.buffSheet ??= {
                            "stats": [DamageSkill],
                            [DamageSkill]: relicPathing[0],
                            "source": relicNameRef,
                            "sourceOwner": "",
                            "buffName": buffName,
                            "duration": 1,//in practice, skills should always proc within ones own turn, ergo it gets the bonus turn else it'd expire as soon as the skill finished
                            "AVApplied": 0,
                            "maxStacks": 1,
                            "currentStacks": 1,
                            "decay": false,
                            "expireType": null
                        }

                        const namedTurns = battleData.nameBasedTurns;
                        const updateBuff = battleActions.updateBuff
                        for (let ally in ownersSlots) {
                            let currentTurn = namedTurns[ally];
                            buffSheet.sourceOwner = currentTurn.properName;
                            updateBuff(battleData,currentTurn,buffSheet);
                        }
                    },
                    "target": "self",
                    "listenerName": "Firesmith of Lava-Forging combat buff application",
                    "owners": [],
                    "ownersSlots": {}
                },
                {
                    "trigger": "UltimateEnd",
                    condition(battleData,generalInfo) {
                        let ownersSlots = this.ownersSlots;
                        let sourceTurn = generalInfo.sourceTurn;
                        let ownerRank = ownersSlots[sourceTurn.name]
                        if (!ownerRank) {return;}//abort non-owners
                        sourceTurn.firesmithNextAttackBuffed = true;//flag next attack to be juiced
                    },
                    "target": "self",
                    "listenerName": "Firesmith of Lava-Forging ult used flag",
                    "owners": [],
                    "ownersSlots": {}
                },
                {
                    "trigger": "AttackStart",
                    condition(battleData,generalInfo) {
                        let ownersSlots = this.ownersSlots;
                        let sourceTurn = generalInfo.sourceTurn;
                        let ownerRank = ownersSlots[sourceTurn.name]
                        if (!ownerRank || !sourceTurn.firesmithNextAttackBuffed) {return;}//abort non-owners, or owners that aren't set up for the buff yet
                        //TODO: really need to confirm if this can count the ulty itself as an attack to consume the buff or not, or whether it applies to the ulty AND an attack after idk
                        //rn the assumption is the ult does NOT count, and the next attack consumes the buff
                        if (!sourceTurn.firesmithNextAttackFIRESHEET) {
                            let relicNameRef = "Firesmith of Lava-Forging";
                            let pcRef = "4pc";
                            let relicPathing = this.relicPathing ??= relicSets[relicNameRef].params[1];//0-2pc 1-4pc
                            let buffName = this.buffName ??= turnLogicRelics[relicNameRef][pcRef].buffNames.fireBuff;
                            sourceTurn.firesmithNextAttackFIRESHEET = {
                                "stats": [DamageFire],
                                [DamageFire]: relicPathing[1],
                                "source": relicNameRef,
                                "sourceOwner": sourceTurn.properName,
                                "buffName": buffName,
                                "duration": 1,
                                "AVApplied": 0,
                                "maxStacks": 1,
                                "currentStacks": 1,
                                "decay": false,
                                "expireType": null//shit gets removed later
                            }
                        }
                        
                        let buffSheet = sourceTurn.firesmithNextAttackFIRESHEET;
                        
                        battleActions.updateBuff(battleData,sourceTurn,buffSheet);
                    },
                    "target": "self",
                    "listenerName": "Firesmith of Lava-Forging Next-Attack buff application",
                    "owners": [],
                    "ownersSlots": {}
                },
                {
                    "trigger": "AttackEnd",
                    condition(battleData,generalInfo) {
                        let ownersSlots = this.ownersSlots;
                        let sourceTurn = generalInfo.sourceTurn;
                        let ownerRank = ownersSlots[sourceTurn.name]
                        if (!ownerRank || !sourceTurn.firesmithNextAttackBuffed) {return;}//abort non-owners, or owners that aren't set up for the buff yet
                        sourceTurn.firesmithNextAttackBuffed = false;

                        let buffSheet = sourceTurn.firesmithNextAttackFIRESHEET;
                        removeBuff(battleData,sourceTurn,buffSheet);
                    },
                    "target": "self",
                    "listenerName": "Firesmith of Lava-Forging Next-Attack buff removal",
                    "owners": [],
                    "ownersSlots": {}
                },
            ],
            "buffNames": {
                "skillBuff": "Firesmith of Lava-Forging [Skill]",
                "fireBuff": "Firesmith of Lava-Forging [Fire Attack]",
            },
        }
    },
    "Hunter of Glacial Forest": {
        "2pc": {},
        "4pc": {
            logic(thisTurn,battleData) {},
            "skillFunctions": {},
            "listeners": [
                {
                    "trigger": "UltimateEnd",
                    condition(battleData,generalInfo) {
                        let sourceTurn = generalInfo.sourceTurn;
                        let ownersSlots = this.ownersSlots;
                        let ownerRank = ownersSlots[sourceTurn.name];//setAmount
                        if (!ownerRank) {return;}
                        //TODO: check later if this applies to the ultimate that casts it, or if it just applies afterwards

                        if (!sourceTurn.glacialForestCRITDMGSHEET) {
                            let relicNameRef = "Hunter of Glacial Forest";
                            let pcRef = "4pc";
                            let relicPathing = this.relicPathing ??= relicSets[relicNameRef].params[1];//0-2pc 1-4pc
                            let buffName = this.buffName ??= turnLogicRelics[relicNameRef][pcRef].buffNames.atkBuff;
                            sourceTurn.glacialForestCRITDMGSHEET = {
                                "stats": [CritDamageBase],
                                [CritDamageBase]: relicPathing[0],
                                "source": relicNameRef,
                                "sourceOwner": sourceTurn.properName,
                                "buffName": buffName,
                                "duration": 2,
                                "AVApplied": 0,
                                "maxStacks": 1,
                                "currentStacks": 1,
                                "decay": false,
                                "expireType": "EndTurn"
                            }
                        }

                        let buffSheet = sourceTurn.glacialForestCRITDMGSHEET;
                        
                        buffSheet.duration = sourceTurn.turnState ? 3 : 2;
                        battleActions.updateBuff(battleData,sourceTurn,buffSheet);
                    },
                    "target": "self",
                    "listenerName": "Hunter of Glacial Forest ult listener",
                    "owners": [],
                    "ownersSlots": {}
                },
            ],
            "buffNames": {
                "atkBuff": "Hunter of Glacial Forest",
            },
        }
    },
    "Knight of Purity Palace": {
        "2pc": {},
        "4pc": {
            logic(thisTurn,battleData) {},
            "skillFunctions": {},
            "listeners": [
                {
                    "trigger": "PreBattleEntersCombat",
                    condition(battleData,generalInfo) {
                        let ownersSlots = this.ownersSlots;

                        let relicNameRef = "Knight of Purity Palace";
                        let pcRef = "4pc";
                        let relicPathing = this.relicPathing ??= relicSets[relicNameRef].params[1];//0-2pc 1-4pc
                        let buffName = this.buffName ??= turnLogicRelics[relicNameRef][pcRef].buffNames.atkBuff;

                        let buffSheet = this.buffSheet ??= {
                            "stats": [ShieldOutgoing],
                            [ShieldOutgoing]: relicPathing[0],
                            "source": relicNameRef,
                            "sourceOwner": "",
                            "buffName": buffName,
                            "duration": 1,
                            "AVApplied": 0,
                            "maxStacks": 1,
                            "currentStacks": 1,
                            "decay": false,
                            "expireType": null
                        }

                        const namedTurns = battleData.nameBasedTurns;
                        const updateBuff = battleActions.updateBuff
                        for (let ally in ownersSlots) {
                            let currentTurn = namedTurns[ally];
                            buffSheet.sourceOwner = currentTurn.properName;
                            updateBuff(battleData,currentTurn,buffSheet);
                        }
                    },
                    "target": "self",
                    "listenerName": "Knight of Purity Palace combat buff application",
                    "owners": [],
                    "ownersSlots": {}
                },
            ],
            "buffNames": {
                "atkBuff": "Knight of Purity Palace",
            },
        }
    },
    "Passerby of Wandering Cloud": {
        "2pc": {},
        "4pc": {
            logic(thisTurn,battleData) {},
            "skillFunctions": {},
            "listeners": [
                {
                    "trigger": "PreBattleEntersCombat",
                    condition(battleData,generalInfo) {
                        let ownersSlots = this.ownersSlots;

                        let relicNameRef = "Passerby of Wandering Cloud";
                        const namedTurns = battleData.nameBasedTurns;
                        const SPGen = 1;
                        const updateSkillPoints = battleActions.updateSkillPoints
                        for (let ally in ownersSlots) {
                            let sourceTurn = namedTurns[ally];

                            updateSkillPoints(SPGen,battleData,{sourceTurn,sourceName:relicNameRef});
                        }
                    },
                    "target": "self",
                    "listenerName": "Passerby of Wandering Cloud battlestart SP+",
                    "owners": [],
                    "ownersSlots": {}
                },
            ],
            "buffNames": {},
        }
    },
    "Messenger Traversing Hackerspace": {
        "2pc": {},
        "4pc": {
            logic(thisTurn,battleData) {},
            "skillFunctions": {},
            "listeners": [
                {
                    "trigger": "TargetAlly",
                    condition(battleData,generalInfo) {
                        // let ownerRef = this.owners;
                        let sourceTurn = generalInfo.sourceTurn;
                        let ownersSlots = this.ownersSlots;
                        let ownerRank = ownersSlots[sourceTurn.name];//setAmount
                        if (!ownerRank) {return;}

                        //poke("TargetAlly",battleData,{targetType:"Single", sourceTurn:currentTurn, targetTurn:targetTurn, targetSkill:skillRef.slot});
                        const skillType = generalInfo.targetSkill;
                        if (skillType != "Ultimate") {return;}//needs to be from an ulty, who it targets is irrelevant bc if TargetAlly event is called it did target at least one

                        if (!sourceTurn.traversingHackerspaceSPDSHEET) {
                            let relicNameRef = "Messenger Traversing Hackerspace";
                            let pcRef = "4pc";
                            let buffName = this.buffName ??= turnLogicRelics[relicNameRef][pcRef].buffNames.hackerspace;

                            let relicPathing = this.relicPathing ??= relicSets[relicNameRef].params[1];//0-2pc 1-4pc
                            sourceTurn.traversingHackerspaceSPDSHEET = {
                                "stats": [SPDP],
                                [SPDP]: relicPathing[0],
                                "source": relicNameRef,
                                "sourceOwner": sourceTurn.properName,
                                "buffName": buffName,
                                "duration": 1,
                                "AVApplied": 0,
                                "maxStacks": 1,
                                "currentStacks": 1,
                                "decay": false,
                                "expireType": "EndTurn"
                            }
                        }
                        let buffSheet = sourceTurn.traversingHackerspaceSPDSHEET;
                        const allyPositions = battleData.allyPositions;
                        const updateBuff = battleActions.updateBuff;
                        for (let ally of allyPositions) {
                            
                            buffSheet.duration = ally.turnState ? 2 : 1;
                            updateBuff(battleData,ally,buffSheet);
                        }
                        
                    },
                    "target": "self",
                    "listenerName": "Messenger Traversing Hackerspace targeted ally listener",
                    "owners": []
                },
            ],
            "buffNames": {
                "hackerspace": "Messenger Traversing Hackerspace",
            },
        }
    },
    "Poet of Mourning Collapse": {
        "2pc": {},
        "4pc": {
            logic(thisTurn,battleData) {},
            "skillFunctions": {},
            "listeners": [
                {
                    "trigger": "PreBattleSettings",
                    condition(battleData,generalInfo) {
                        let ownersSlots = this.ownersSlots;

                        let relicNameRef = "Poet of Mourning Collapse";
                        let pcRef = "4pc";
                        let relicPathing = this.relicPathing ??= relicSets[relicNameRef].params[1];//0-2pc 1-4pc
                        let buffName = this.buffName ??= turnLogicRelics[relicNameRef][pcRef].buffNames.critBuff;

                        let buffSheet1 = this.buffSheet1 ??= {
                            "stats": [CritRateBase],
                            [CritRateBase]: relicPathing[4],
                            "source": relicNameRef,
                            "sourceOwner": "",
                            "buffName": buffName,
                            "duration": 1,
                            "AVApplied": 0,
                            "maxStacks": 1,
                            "currentStacks": 1,
                            "decay": false,
                            "expireType": null
                        }
                        let buffSheet2 = this.buffSheet2 ??= {
                            "stats": [CritRateBase],
                            [CritRateBase]: relicPathing[3],
                            "source": relicNameRef,
                            "sourceOwner": "",
                            "buffName": buffName,
                            "duration": 1,
                            "AVApplied": 0,
                            "maxStacks": 1,
                            "currentStacks": 1,
                            "decay": false,
                            "expireType": null
                        }

                        const namedTurns = battleData.nameBasedTurns;
                        const menuStatsREF = battleData.menuStats;
                        const updateBuff = battleActions.updateBuff
                        const getFinalSPD = calcs.getSPDFinal;
                        for (let ally in ownersSlots) {
                            let currentTurn = namedTurns[ally];
                            let menuStats = menuStatsREF[ally];
                            let SPD = getFinalSPD(menuStats).SPDFinal;
                            const memoRef = currentTurn.memospriteEventRef;
                            
                            const ownerName = currentTurn.properName;
                            buffSheet1.sourceOwner = ownerName;
                            buffSheet2.sourceOwner = ownerName;

                            if (SPD < 95) {
                                updateBuff(battleData,currentTurn,buffSheet1);
                                if (memoRef) {updateBuff(battleData,currentTurn[memoRef],buffSheet1);}
                            }
                            else if (SPD < 110) {
                                updateBuff(battleData,currentTurn,buffSheet2);
                                if (memoRef) {updateBuff(battleData,currentTurn[memoRef],buffSheet2);}
                            }
                        }
                        //TODO: NEED TO WORK OUT MEMOSPRITE BUFF HANDLING LATER, GOD THAT IS GONNA SUCK I ALREADY KNOW
                        //on this one might be able to get away with cloning the buff from the memo's summoner
                        //but that's probably a shit idea processing-wise, would be better to create the memo
                        //regardless of their uptime and apply it there
                        //then work out something to manage memo uptime for buffs that care about it(should not be hard to do)
                    },
                    "target": "self",
                    "listenerName": "Poet of Mourning Collapse SPDCheck",
                    "owners": [],
                    "ownersSlots": {}
                },
            ],
            "buffNames": {
                "critBuff": "Poet of Mourning Collapse",
            },
        }
    },
    "Prisoner in Deep Confinement": {
        "2pc": {},
        "4pc": {
            logic(thisTurn,battleData) {},
            "skillFunctions": {},
            "listeners": [
                {
                    "trigger": "AllyDMGStart",
                    condition(battleData,generalInfo) {
                        // let ownerRef = this.owners;
                        let sourceTurn = generalInfo.sourceTurn;
                        let ownersSlots = this.ownersSlots;
                        let ownerRank = ownersSlots[sourceTurn.name];//setAmount
                        if (!ownerRank) {return;}
                        let targetTurn = generalInfo.targetTurn;

                        if (!sourceTurn.prisonerConfinementDEFSHREDSHEET) {
                            let relicNameRef = "Prisoner in Deep Confinement";
                            let pcRef = "4pc";
                            let buffName = this.buffName ??= turnLogicRelics[relicNameRef][pcRef].buffNames.pc4ShredAny;
                            let relicPathing = this.relicPathing ??= relicSets[relicNameRef].params[1];//0-2pc 1-4pc
                            sourceTurn.prisonerConfinementDEFSHREDSHEET = {
                                "stats": [DEFShredAll],
                                [DEFShredAll]: relicPathing[0],
                                "source": relicNameRef,
                                "sourceOwner": sourceTurn.properName,
                                "buffName": buffName,
                                "duration": 1,
                                "AVApplied": 0,
                                "maxStacks": 3,
                                "currentStacks": 1,
                                "decay": false,
                                "expireType": null
                            }
                        }
                        let buffSheet = sourceTurn.prisonerConfinementDEFSHREDSHEET;
                        const buffName = buffSheet.buffName;
                        const buffCheck = sourceTurn.buffsObject[buffName];
                        const DOTCount = Math.min(3,targetTurn.DOTCounter);//TODO: dots have been added(functionally at least), verify this works later

                        if (buffCheck) {//if the buff already exists
                            const currentStacks = buffCheck.currentStacks;
                            if (currentStacks === DOTCount) {return;}//if we're already maxed on stacks and the enemy has that many dots or more, then abort early
                            else if (DOTCount > currentStacks) {
                                
                                buffSheet.currentStacks = DOTCount - currentStacks;//if dot count is 2 but someone already had 1 stack, we can't stack 2 more, gotta stack just the diff
                                battleActions.updateBuff(battleData,sourceTurn,buffSheet);
                                return;//can abort early if all we did was stack it
                            }
                            //otherwise remove the buff bc that means the stacks are mismatched and less than
                            removeBuff(battleData,sourceTurn,buffCheck);
                        }

                        if (DOTCount) {//then, if the dots > 0, apply the buff as it is now
                            
                            buffSheet.currentStacks = DOTCount;
                            battleActions.updateBuff(battleData,sourceTurn,buffSheet);
                        }
                    },
                    "target": "self",
                    "listenerName": "Prisoner in Deep Confinement - DEF Shred(Quantum Enemy) 4pc",
                    "owners": []
                },
            ],
            "buffNames": {
                "pc4ShredAny": "Prisoner in Deep Confinement DEF SHRED",
            },
        }
    },
    "The Ashblazing Grand Duke": {
        "2pc": {
            logic(thisTurn,battleData) {},
            "skillFunctions": {},
            "listeners": [
                {
                    "trigger": "PreBattleEntersCombat",
                    condition(battleData,generalInfo) {
                        let ownersSlots = this.ownersSlots;

                        let relicNameRef = "The Ashblazing Grand Duke";
                        let pcRef = "2pc";
                        let relicPathing = this.relicPathing ??= relicSets[relicNameRef].params[0];//0-2pc 1-4pc
                        let buffName = this.buffName ??= turnLogicRelics[relicNameRef][pcRef].buffNames.fuaBuff;

                        let buffSheet = this.buffSheet ??= {
                            "stats": [DamageFUA],
                            [DamageFUA]: relicPathing[0],
                            "source": relicNameRef,
                            "sourceOwner": "",
                            "buffName": buffName,
                            "duration": 1,
                            "AVApplied": 0,
                            "maxStacks": 1,
                            "currentStacks": 1,
                            "decay": false,
                            "expireType": null
                        }

                        const namedTurns = battleData.nameBasedTurns;
                        const updateBuff = battleActions.updateBuff
                        for (let ally in ownersSlots) {
                            let currentTurn = namedTurns[ally];
                            buffSheet.sourceOwner = currentTurn.properName;
                            updateBuff(battleData,currentTurn,buffSheet);
                        }
                    },
                    "target": "self",
                    "listenerName": "The Ashblazing Grand Duke FUA DMG 2pc combat starter",
                    "owners": [],
                    "ownersSlots": {}
                },
            ],
            "buffNames": {
                "fuaBuff": "The Ashblazing Grand Duke (2pc)",
            },
        },
        "4pc": {
            logic(thisTurn,battleData) {},
            "skillFunctions": {},
            "listeners": [
                {
                    "trigger": "FUAStart",
                    condition(battleData,generalInfo) {
                        // poke("FUAStart",battleData,{sourceTurn});
                        let ownersSlots = this.ownersSlots;
                        const sourceTurn = generalInfo.sourceTurn;
                        const ownerRank = ownersSlots[sourceTurn.name];
                        if (!ownerRank) {return;}


                        if (!sourceTurn.ashblazing4pcATKSHEET) {
                            let relicNameRef = "The Ashblazing Grand Duke";
                            let pcRef = "4pc";
                            let relicPathing = relicSets[relicNameRef].params[1];//0-2pc 1-4pc
                            let buffName = turnLogicRelics[relicNameRef][pcRef].buffNames.fuaATKStack;
                            sourceTurn.ashblazing4pcATKSHEET = {
                                "stats": [ATKP],
                                [ATKP]: relicPathing[0],
                                "source": relicNameRef,
                                "sourceOwner": sourceTurn.properName,
                                "buffName": buffName,
                                "duration": 3,
                                "AVApplied": 0,
                                "maxStacks": 8,
                                "currentStacks": 1,
                                "decay": false,
                                "expireType": "EndTurn"
                            }
                        }
                        const buffSheet = sourceTurn.ashblazing4pcATKSHEET;

                        //since this is a new follow up attack, gotta remove the buff, but if it doesn't exist then all we did was create the buff sheet for future use(it will get used)
                        if (sourceTurn.buffsObject[buffSheet.buffName]) {removeBuff(battleData,sourceTurn,buffSheet);}
                        sourceTurn.ashblazingFUATrackingInProgress = true;
                    },
                    "target": "self",
                    "listenerName": "The Ashblazing Grand Duke - Hit tracking start",
                    "owners": [],
                    "ownersSlots": {}
                },
                {
                    "trigger": "HitEnemyStart",
                    condition(battleData,generalInfo) {
                        // poke("FUAStart",battleData,{sourceTurn});
                        let ownersSlots = this.ownersSlots;
                        const sourceTurn = generalInfo.sourceTurn;
                        const ownerRank = ownersSlots[sourceTurn.name];
                        if (!ownerRank) {return;}
                        if (!sourceTurn.ashblazingFUATrackingInProgress) {return;}
                        //if the hit is coming from a non-owner, or if the hit is coming from an owner that isn't in the middle of hit tracking for a FUA, then abort

                        //CONFIRMED USING TOPAZ, ASHBLAZING, AND SWORDPLAY
                        //swordplay takes effect after a hit, ashblazing takes place before a hit

                        const buffSheet = sourceTurn.ashblazing4pcATKSHEET;
                        const buffCheck = sourceTurn.buffsObject[buffSheet.name];
                        //if we're in a super hit-spammy attack, and reached the 8 point already, then abort without bothering the buff handler
                        if (buffCheck && buffCheck.currentStacks === 8) {return;}
                        
                        buffSheet.duration = sourceTurn.turnState ? 4 : 3;
                        battleActions.updateBuff(battleData,sourceTurn,buffSheet);
                    },
                    "target": "self",
                    "listenerName": "The Ashblazing Grand Duke - Hit scaling",
                    "owners": [],
                    "ownersSlots": {}
                },
                {
                    "trigger": "FUAEnd",
                    condition(battleData,generalInfo) {
                        // poke("FUAEnd",battleData,{sourceTurn});
                        let ownersSlots = this.ownersSlots;
                        const sourceTurn = generalInfo.sourceTurn;
                        const ownerRank = ownersSlots[sourceTurn.name];
                        if (!ownerRank || !sourceTurn.ashblazingFUATrackingInProgress) {return;}
                        sourceTurn.ashblazingFUATrackingInProgress = false;
                    },
                    "target": "self",
                    "listenerName": "The Ashblazing Grand Duke - Hit tracking end",
                    "owners": [],
                    "ownersSlots": {}
                },
            ],
            "buffNames": {
                "fuaATKStack": "The Ashblazing Grand Duke (4pc)",
            },
        }
    },
    "The Wind-Soaring Valorous": {
        "2pc": {},
        "4pc": {
            logic(thisTurn,battleData) {},
            "skillFunctions": {},
            "listeners": [
                {
                    "trigger": "FUAEnd",
                    condition(battleData,generalInfo) {
                        let sourceTurn = generalInfo.sourceTurn;
                        let ownersSlots = this.ownersSlots;
                        let ownerRank = ownersSlots[sourceTurn.name];//setAmount
                        if (!ownerRank) {return;}
                        //TODO: random but might need to look into if it applies on FUA start instead of end, maybe some FUA's get tagged as ultimate dmg is why I say that

                        if (!sourceTurn.windSoaringValorousULTDMGSHEET) {
                            let relicNameRef = "The Wind-Soaring Valorous";
                            let pcRef = "4pc";
                            let relicPathing = this.relicPathing ??= relicSets[relicNameRef].params[1];//0-2pc 1-4pc
                            let buffName = this.buffName ??= turnLogicRelics[relicNameRef][pcRef].buffNames.atkBuff;
                            sourceTurn.windSoaringValorousULTDMGSHEET = {
                                "stats": [DamageUltimate],
                                [DamageUltimate]: relicPathing[1],
                                "source": relicNameRef,
                                "sourceOwner": sourceTurn.properName,
                                "buffName": buffName,
                                "duration": 1,
                                "AVApplied": 0,
                                "maxStacks": 1,
                                "currentStacks": 1,
                                "decay": false,
                                "expireType": "EndTurn"
                            }
                        }

                        let buffSheet = sourceTurn.windSoaringValorousULTDMGSHEET;
                        
                        buffSheet.duration = sourceTurn.turnState ? 2 : 1;//technically FUA can be launched within their own turn, like ratio + archer would make that possible, so it still needs the isMyTurn bonus
                        battleActions.updateBuff(battleData,sourceTurn,buffSheet);
                    },
                    "target": "self",
                    "listenerName": "The Wind-Soaring Valorous fua listener",
                    "owners": [],
                    "ownersSlots": {}
                },
            ],
            "buffNames": {
                "atkBuff": "The Wind-Soaring Valorous",
            },
        }
    },
    "Iron Cavalry Against the Scourge": {
        "2pc": {},
        "4pc": {
            logic(thisTurn,battleData) {},
            "skillFunctions": {
                statCheck(battleData,currentTurn) {
                    if (!currentTurn.cavalryAgainstScourgeBREAKSHREDSHEET) {
                        let relicNameRef = "Iron Cavalry Against the Scourge";
                        const buffNames = turnLogicRelics[relicNameRef]["4pc"].buffNames;
                        let buffName = buffNames.buff1;
                        let buffName2 = buffNames.buff2;
                        let relicPathing = relicSets[relicNameRef].params[1];//0-2pc 1-4pc
                        currentTurn.cavalryAgainstScourgeBREAKSHREDSHEET = {
                            "stats": [DEFShredBreak],
                            [DEFShredBreak]: relicPathing[2],
                            "source": relicNameRef,
                            "sourceOwner": currentTurn.properName,
                            "buffName": buffName,
                            "duration": 1,
                            "AVApplied": 0,
                            "maxStacks": 1,
                            "currentStacks": 1,
                            "decay": false,
                            "expireType": null
                        }
                        currentTurn.cavalryAgainstScourgeSUPERSHREDSHEET = {
                            "stats": [DEFShredBreakSuper],
                            [DEFShredBreakSuper]: relicPathing[3],
                            "source": relicNameRef,
                            "sourceOwner": currentTurn.properName,
                            "buffName": buffName2,
                            "duration": 1,
                            "AVApplied": 0,
                            "maxStacks": 1,
                            "currentStacks": 1,
                            "decay": false,
                            "expireType": null
                        }
                    }
                    let buffSheet = currentTurn.cavalryAgainstScourgeBREAKSHREDSHEET;
                    let buffSheet2 = currentTurn.cavalryAgainstScourgeSUPERSHREDSHEET;
                    const buffName = buffSheet.buffName;
                    const buffName2 = buffSheet2.buffName;
                    const buffsRef = currentTurn.buffsObject;
                    const buffCheck = buffsRef[buffName];
                    const buffCheck2 = buffsRef[buffName2];
                    const currentBreak = currentTurn.statTable[DamageBreak];

                    const updateBuff = battleActions.updateBuff;
                    if (currentBreak >= 2.5) {//if the target has enough cr for the buff, then we can apply it
                        if (buffCheck2) {return;}//if the target already has the buff, skip, no need to "renew" perma buffs like this
                        //also if the owner has the highest buff, they'll also always have the lowest buff, so we're good to abort here without worry
                        updateBuff(battleData,currentTurn,buffSheet2);
                        if (buffCheck) {return;}//same deal as above, if the lower buff was applied but our break is over the 2.5 mark then we're good to go
                        updateBuff(battleData,currentTurn,buffSheet);
                    }
                    else if (currentBreak >= 1.5) {
                        if (buffCheck2) {removeBuff(battleData,currentTurn,buffSheet2);}//remove the higher buff if we reach this
                        if (buffCheck) {return;}//then abort if lower buff is active
                        updateBuff(battleData,currentTurn,buffSheet);
                    }
                    else {
                        if (buffCheck2) {removeBuff(battleData,currentTurn,buffSheet2);}//remove the higher buff if we reach this
                        if (buffCheck) {removeBuff(battleData,currentTurn,buffSheet);}//remove the higher buff if we reach this
                    }
                }
            },
            "listeners": [
                {
                    "trigger": "UpdateStatBreak",//Break stat family
                    condition(battleData,generalInfo) {
                        let sourceTurn = generalInfo.sourceTurn;
                        let ownersSlots = this.ownersSlots;
                        let ownerRank = ownersSlots[sourceTurn.name];//setAmount
                        if (!ownerRank) {return;}
                        //TODO: maybe move the entire function call into a this.shit if it gets too costly later
                        //p sure there are a few places I could and probably should do that with
                        const statCheck = this.statCheck ??= turnLogicRelics["Iron Cavalry Against the Scourge"]["4pc"].skillFunctions.statCheck;
                        statCheck(battleData,sourceTurn);
                    },
                    "target": "self",
                    "listenerName": "Iron Cavalry Against the Scourge Break check",
                    "owners": []
                },
                {
                    "trigger": "PreBattleEntersCombat",
                    condition(battleData,generalInfo) {
                        let ownerRef = this.owners;

                        if (ownerRef.length) {
                            // let relicPathing = relicSets[relicNameRef].params[0];//0-2pc 1-4pc
                            const statCheck = this.statCheck ??= turnLogicRelics["Iron Cavalry Against the Scourge"]["4pc"].skillFunctions.statCheck;
                            const namedTurns = battleData.nameBasedTurns;
                            for (let owner of ownerRef) {
                                let charSlot = owner.slot;
                                let currentTurn = namedTurns[charSlot];
                                statCheck(battleData,currentTurn);
                            }
                        }
                    },
                    "target": "self",
                    "listenerName": "Iron Cavalry Against the Scourge battle start stat check trigger",
                    "owners": []
                },
            ],
            "buffNames": {
                "buff1": "Iron Cavalry Against the Scourge (BREAK)",
                "buff2": "Iron Cavalry Against the Scourge (SUPER)",
            },
        }
    },
    "Hero of Triumphant Song": {
        "2pc": {},
        "4pc": {
            logic(thisTurn,battleData) {},
            "skillFunctions": {},
            "listeners": [
                {
                    "trigger": "SummonOnFieldAdjustment",
                    condition(battleData,generalInfo) {
                        // poke("SummonOnFieldAdjustment",battleData,{summonWas: "Apply",assignedTo: ownerTurn, summonedBy: ownerTurn, summonEvent: ownerTurn.topazNUMBYTURNEVENT});
                        let ownersSlots = this.ownersSlots;
                        const summonAssignedTo = generalInfo.assignedTo;
                        
                        let ownerRank = ownersSlots[summonAssignedTo.name];//setAmount
                        if (!ownerRank) {return;}//if the summon is assigned to someone who doesn't own the set, then it doesn't matter


                        if (!summonAssignedTo.heroTriumphantSPDSHEET) {
                            let relicNameRef = "Hero of Triumphant Song";
                            const buffName = this.buffName ??= turnLogicRelics[relicNameRef]["4pc"].buffNames.spd;
                            let relicPathing = this.relicPathing ??= relicSets[relicNameRef].params[1];//0-2pc 1-4pc
                            summonAssignedTo.heroTriumphantSPDSHEET = {
                                "stats": [SPDP],
                                [SPDP]: relicPathing[0],
                                "source": relicNameRef,
                                "sourceOwner": summonAssignedTo.properName,
                                "buffName": buffName,
                                "duration": 1,
                                "AVApplied": 0,
                                "maxStacks": 1,
                                "currentStacks": 1,
                                "decay": false,
                                "expireType": null
                            }
                        }
                        
                        let buffSheet = summonAssignedTo.heroTriumphantSPDSHEET;
                        const buffName = buffSheet.buffName;
                        const buffCheck = summonAssignedTo.buffsObject[buffName];

                        const currentActiveMemosprites = battleData.nameBasedTurns[summonAssignedTo.name].activeMemosprites;

                        if (currentActiveMemosprites) {
                            if (buffCheck) {return;}//if the buff already exists, abort
                            battleActions.updateBuff(battleData,summonAssignedTo,buffSheet);
                        }
                        else if (!currentActiveMemosprites && buffCheck) {//only remove the buff if it already existed
                            removeBuff(battleData,summonAssignedTo,buffSheet);
                        }
                    },
                    "target": "self",
                    "listenerName": "Hero of Triumphant Song memo creation/death listener",
                    "owners": []
                },
                {
                    "trigger": "AttackStart",
                    condition(battleData,generalInfo) {
                        // poke("FUAStart",battleData,{sourceTurn});

                        const sourceTurn = generalInfo.sourceTurn;
                        if (!sourceTurn.isMemosprite) {return}//can abort early if the attack isn't even from a memosprite

                        // eventOwner: ownerTurn.name
                        const ownerSlot = sourceTurn.eventOwner;
                        let ownersSlots = this.ownersSlots;
                        const ownerRank = ownersSlots[ownerSlot];
                        if (!ownerRank) {return;}//using the owner's slot name, check against relic owners

                        const ownerTurn = battleData.nameBasedTurns[ownerSlot];


                        if (!sourceTurn.heroTriumphantCRITDMGSHEET) {
                            let relicNameRef = "Hero of Triumphant Song";
                            let pcRef = "4pc";
                            let relicPathing = this.relicPathing ??= relicSets[relicNameRef].params[1];//0-2pc 1-4pc
                            let buffName = this.buffName ??= turnLogicRelics[relicNameRef][pcRef].buffNames.critStack;
                            sourceTurn.heroTriumphantCRITDMGSHEET = {
                                "stats": [CritDamageBase],
                                [CritDamageBase]: relicPathing[1],
                                "source": relicNameRef,
                                "sourceOwner": ownerTurn.properName,
                                "buffName": buffName,
                                "duration": 2,
                                "AVApplied": 0,
                                "maxStacks": 1,
                                "currentStacks": 1,
                                "decay": false,
                                "expireType": "EndTurn",
                                "removeOnDeath": true,
                            }
                        }
                        const buffSheet = sourceTurn.heroTriumphantCRITDMGSHEET;
                        

                        const updateBuff = battleActions.updateBuff;
                        buffSheet.duration = ownerTurn.turnState ? 3 : 2;
                        updateBuff(battleData,ownerTurn,buffSheet);//owner
                        buffSheet.duration = sourceTurn.turnState ? 3 : 2;
                        updateBuff(battleData,sourceTurn,buffSheet);//memo

                    },
                    "target": "self",
                    "listenerName": "Hero of Triumphant Song - memo attack listener",
                    "owners": [],
                    "ownersSlots": {}
                },
            ],
            "buffNames": {
                "spd": "Hero of Triumphant Song (SPD)",
                "critStack": "Hero of Triumphant Song (Crit)",
            },
        }
    },
    "World-Remaking Deliverer": {
        "2pc": {},
        "4pc": {
            logic(thisTurn,battleData) {},
            "skillFunctions": {
                addBuffs(battleData,sourceTurn,memoTurn) {
                    // "Apply"
                    if (!sourceTurn.worldRemakingHPSHEET) {
                        let relicNameRef = "World-Remaking Deliverer";
                        let pcRef = "4pc";
                        // let relicPathing = this.relicPathing ??= relicSets[relicNameRef].params[1];//0-2pc 1-4pc
                        let relicPathing = relicSets[relicNameRef].params[1];//0-2pc 1-4pc

                        console.log(relicPathing)
                        // const logicRef = this.logicRef ??= turnLogicRelics[relicNameRef][pcRef];
                        const logicRef = turnLogicRelics[relicNameRef][pcRef];
                        const buffNames = logicRef.buffNames;
                        // let buffName = turnLogicRelics[relicNameRef][pcRef].buffNames.critStack;
                        sourceTurn.worldRemakingHPSHEET = {
                            "stats": [HPP],
                            [HPP]: relicPathing[0],
                            "source": relicNameRef,
                            "sourceOwner": sourceTurn.properName,
                            "buffName": buffNames.HPBonus,
                            "duration": 1,
                            "AVApplied": 0,
                            "maxStacks": 1,
                            "currentStacks": 1,
                            "decay": false,
                            "expireType": null,
                            // "removeOnDeath": true,
                        }
                        const customBuffName = `${buffNames.dmgBonus} (${sourceTurn.properName})`;
                        buffNames[sourceTurn.properName] = customBuffName;
                        sourceTurn.worldRemakingDMGSHEET = {
                            "stats": [DamageAll],
                            [DamageAll]: relicPathing[1],
                            "source": relicNameRef,
                            "sourceOwner": sourceTurn.properName,
                            "buffName": customBuffName,
                            "duration": 1,
                            "AVApplied": 0,
                            "maxStacks": 1,
                            "currentStacks": 1,
                            "decay": false,
                            "expireType": null,
                            // "removeOnDeath": true,
                        }
                    }
                    const buffSheet = sourceTurn.worldRemakingHPSHEET;
                    const allySheet = sourceTurn.worldRemakingDMGSHEET;
                    const allyPositions = battleData.allyPositions;
                    const declaredMemosprites = battleData.declaredMemosprites;

                    const updateBuff = battleActions.updateBuff;
                    if (memoTurn.isActive) {
                        const buffCheck = sourceTurn.buffsObject[buffSheet.buffName];
                        if (buffCheck) {return;}
                        
                        allySheet.AVApplied = battleData.sumAV;
                        updateBuff(battleData,sourceTurn,buffSheet);//owner
                        updateBuff(battleData,memoTurn,buffSheet);//memo

                        
                        for (let ally of allyPositions) {
                            updateBuff(battleData,ally,allySheet);
                        }
                        for (let ally of declaredMemosprites) {
                            updateBuff(battleData,ally,allySheet);
                        }
                    }
                    else {
                        const buffCheck = sourceTurn.buffsObject[buffSheet.name];
                        if (buffCheck) {

                            for (let ally of allyPositions) {
                                removeBuff(battleData,ally,allySheet);
                            }
                            for (let ally of declaredMemosprites) {
                                removeBuff(battleData,ally,allySheet);
                            }
                        }
                    }

                    
                }
            },
            "listeners": [
                {
                    "trigger": "BasicATKEnd",
                    condition(battleData,generalInfo) {
                        // poke("FUAStart",battleData,{sourceTurn});

                        const sourceTurn = generalInfo.sourceTurn;
                        if (sourceTurn.isMemosprite || !sourceTurn.memospriteEventRef) {return}//we're only looking for memo owners, not memosprites. 

                        const memospriteEventRef = sourceTurn.memospriteEventRef;
                        const memoTurn = sourceTurn[memospriteEventRef];

                        const ownerSlot = sourceTurn.name;
                        let ownersSlots = this.ownersSlots;
                        const ownerRank = ownersSlots[ownerSlot];
                        if (!ownerRank) {return;}//using the owner's slot name, check against relic owners

                        const addBuffs = this.addBuffs ??= turnLogicRelics["World-Remaking Deliverer"]["4pc"].skillFunctions.addBuffs;
                        addBuffs(battleData,sourceTurn,memoTurn);

                    },
                    "target": "self",
                    "listenerName": "World-Remaking Deliverer - basic attack listener",
                    "owners": [],
                    "ownersSlots": {}
                },
                {
                    "trigger": "SkillEnd",
                    condition(battleData,generalInfo) {
                        // poke("FUAStart",battleData,{sourceTurn});

                        const sourceTurn = generalInfo.sourceTurn;
                        if (sourceTurn.isMemosprite || !sourceTurn.activeMemosprites) {return}//we're only looking for memo owners, not memosprites. 

                        const memospriteEventRef = sourceTurn.memospriteEventRef;
                        const memoTurn = sourceTurn[memospriteEventRef];

                        const ownerSlot = sourceTurn.name;
                        let ownersSlots = this.ownersSlots;
                        const ownerRank = ownersSlots[ownerSlot];
                        if (!ownerRank) {return;}//using the owner's slot name, check against relic owners

                        const addBuffs = this.addBuffs ??= turnLogicRelics["World-Remaking Deliverer"]["4pc"].skillFunctions.addBuffs
                        addBuffs(battleData,sourceTurn,memoTurn);
                    },
                    "target": "self",
                    "listenerName": "World-Remaking Deliverer - skill listener",
                    "owners": [],
                    "ownersSlots": {}
                },
            ],
            "buffNames": {
                "HPBonus": "World-Remaking Deliverer (HP)",
                "dmgBonus": "World-Remaking Deliverer (DMG)",
            },
            "buffNamesPerCharacter": {
                "dmgBonus": "World-Remaking Deliverer (DMG)",
            },
        }
    },
    "Warrior Goddess of Sun and Thunder": {
        "2pc": {},
        "4pc": {
            logic(thisTurn,battleData) {},
            "skillFunctions": {
                checkGentleRain(battleData,expireParam) {
                    const ownerTurn = battleData.nameBasedTurns[expireParam];
                    const allyPositions = battleData.allyPositions;
                    const buffSheet = ownerTurn.warriorGoddessSPDSHEET;
                    const buffName = buffSheet.buffName;

                    for (let ally of allyPositions) {
                        const buffCheck = ally.buffsObject[buffName]
                        if (buffCheck) {return;}//if any ally on the field still has gentle rain, then the buff would persist across the team, we can abort early
                    }

                    // const updateBuff = battleActions.updateBuff;
                    const allyTurns = battleData.nameBasedTurns;
                    for (let ally in allyTurns) {
                        const currentTurn = allyTurns[ally];
                        removeBuff(battleData,currentTurn,buffSheet);
                    }
                }
            },
            "listeners": [
                {
                    "trigger": "HealEnd",
                    condition(battleData,generalInfo) {
                        // const turnMerge = {targetTurn,sourceTurn}
                        // poke("HealStart",battleData,turnMerge);

                        const sourceTurn = generalInfo.sourceTurn;
                        let ownerTurn = null;
                        const isMemo = sourceTurn.isMemosprite;
                        if (isMemo) {
                            ownerTurn = battleData.nameBasedTurns[sourceTurn.eventOwner];
                        }
                        else {ownerTurn = sourceTurn;}
                        

                        let ownersSlots = this.ownersSlots;
                        
                        let ownerRank = ownersSlots[ownerTurn.name];//setAmount
                        if (!ownerRank) {return;}//if the summon is assigned to someone who doesn't own the set, then it doesn't matter


                        if (!ownerTurn.warriorGoddessSPDSHEET) {
                            let relicNameRef = "Warrior Goddess of Sun and Thunder";
                            const logicRef = this.logicRef ??= turnLogicRelics[relicNameRef]["4pc"];
                            const buffRef = logicRef.buffNames;
                            let relicPathing = this.relicPathing ??= relicSets[relicNameRef].params[1];//0-2pc 1-4pc
                            ownerTurn.warriorGoddessSPDSHEET = {
                                "stats": [SPDP],
                                [SPDP]: relicPathing[0],
                                "source": relicNameRef,
                                "sourceOwner": ownerTurn.properName,
                                "buffName": buffRef.spd,
                                "duration": 1,
                                "AVApplied": 0,
                                "maxStacks": 1,
                                "currentStacks": 1,
                                "decay": false,
                                "expireType": "EndTurn",
                                expireFunction: logicRef.skillFunctions.checkGentleRain,
                                expireParam: ownerTurn.name,
                            }

                            ownerTurn.warriorGoddessCRITDMGSHEET = {
                                "stats": [CritDamageBase],
                                [CritDamageBase]: relicPathing[1],
                                "source": relicNameRef,
                                "sourceOwner": ownerTurn.properName,
                                "buffName": buffRef.crit,
                                "duration": 1,
                                "AVApplied": 0,
                                "maxStacks": 1,
                                "currentStacks": 1,
                                "decay": false,
                                "expireType": null,
                            }
                        }
                        
                        let buffSheet = ownerTurn.warriorGoddessSPDSHEET;
                        const allySheet = ownerTurn.warriorGoddessCRITDMGSHEET;
                        
                        buffSheet.duration = ownerTurn.turnState ? 3 : 2;
                        const buffName = buffSheet.buffName;
                        const buffCheck = ownerTurn.buffsObject[buffName];

                        const updateBuff = battleActions.updateBuff;
                        updateBuff(battleData,ownerTurn,buffSheet);

                        //if the owner already had gentle rain before renewing it, that means all allies still have the crit dmg, and we don't need to reapply
                        if (!buffCheck) {
                            const allyTurns = battleData.nameBasedTurns;
                            for (let ally in allyTurns) {
                                const currentTurn = allyTurns[ally];
                                updateBuff(battleData,currentTurn,allySheet);
                            }
                        }
                    },
                    "target": "self",
                    "listenerName": "Warrior Goddess of Sun and Thunder - heal listener",
                    "owners": []
                },
            ],
            "buffNames": {
                "spd": "Gentle Rain [LC]",
                "crit": "Gentle Rain [LC] (Crit DMG)",
            },
        }
    },
    "Longevous Disciple": {
        "2pc": {},
        "4pc": {
            logic(thisTurn,battleData) {},
            "skillFunctions": {},
            "listeners": [
                {
                    "trigger": "AllyLostHP",
                    condition(battleData,generalInfo) {
                        // poke("AllyLostHP",battleData,{sourceTurn:ally,HPLost: amountEaten,lossSource: sourceTurn});
                        let sourceTurn = generalInfo.sourceTurn; 
                        let ownersSlots = this.ownersSlots;
                        let ownerRank = ownersSlots[sourceTurn.name];//setAmount
                        if (!ownerRank) {return;}

                        const lossSource = generalInfo.lossSource;
                        if (!generalInfo.wasAttack && lossSource && lossSource.isEnemy) {return;}
                        //TODO: I have no clue if the desc is just flavor text and it really is an ally restriction on the consume source, but check that later if I can figure out a good test for it


                        if (!sourceTurn.longevousDiscipleCRITSHEET) {
                            let relicNameRef = "Longevous Disciple";
                            let pcRef = "4pc";
                            let relicPathing = this.relicPathing ??= relicSets[relicNameRef].params[1];//0-2pc 1-4pc
                            let buffName = this.buffName ??= turnLogicRelics[relicNameRef][pcRef].buffNames.critBuff;
                            sourceTurn.longevousDiscipleCRITSHEET = {
                                "stats": [CritRateBase],
                                [CritRateBase]: relicPathing[0],
                                "source": relicNameRef,
                                "sourceOwner": sourceTurn.properName,
                                "buffName": buffName,
                                "duration": 2,
                                "AVApplied": 0,
                                "maxStacks": 2,
                                "currentStacks": 1,
                                "decay": false,
                                "expireType": "EndTurn"
                            }
                        }

                        let buffSheet = sourceTurn.longevousDiscipleCRITSHEET;
                        
                        buffSheet.duration = sourceTurn.turnState ? 3 : 2;//technically FUA can be launched within their own turn, like ratio + archer would make that possible, so it still needs the isMyTurn bonus
                        battleActions.updateBuff(battleData,sourceTurn,buffSheet);
                    },
                    "target": "self",
                    "listenerName": "Longevous Disciple - owner lost hp listener",
                    "owners": [],
                    "ownersSlots": {}
                },
            ],
            "buffNames": {
                "critBuff": "Longevous Disciple [Relic]",
            },
        }
    },
    "Self-Enshrouded Recluse": {
        "2pc": {
            logic(thisTurn,battleData) {},
            "skillFunctions": {},
            "listeners": [
                {
                    "trigger": "PreBattleEntersCombat",
                    condition(battleData,generalInfo) {
                        let ownersSlots = this.ownersSlots;

                        let relicNameRef = "Self-Enshrouded Recluse";
                        let pcRef = "2pc";
                        let relicPathing = this.relicPathing ??= relicSets[relicNameRef].params[0];//0-2pc 1-4pc
                        let buffName = this.buffName ??= turnLogicRelics[relicNameRef][pcRef].buffNames.shieldBuff2pc;

                        // greatTableIndex
                        // greatTableKeys
                        let buffSheet = this.buffSheet ??= {
                            "stats": [ShieldOutgoing],
                            [ShieldOutgoing]: relicPathing[0],
                            "source": relicNameRef,
                            "sourceOwner": "",
                            "buffName": buffName,
                            "duration": 1,
                            "AVApplied": 0,
                            "maxStacks": 1,
                            "currentStacks": 1,
                            "decay": false,
                            "expireType": null,
                        }

                        const namedTurns = battleData.nameBasedTurns;
                        const updateBuff = battleActions.updateBuff
                        for (let ally in ownersSlots) {
                            let currentTurn = namedTurns[ally];
                            buffSheet.sourceOwner = currentTurn.properName;
                            updateBuff(battleData,currentTurn,buffSheet);
                        }
                    },
                    "target": "self",
                    "listenerName": "Self-Enshrouded Recluse 2pc combat buff application",
                    "owners": [],
                    "ownersSlots": {}
                },
            ],
            "buffNames": {
                "shieldBuff2pc": "Self-Enshrouded Recluse (2pc)",
            },
        },
        "4pc": {
            logic(thisTurn,battleData) {},
            "skillFunctions": {},
            "listeners": [
                {
                    "trigger": "PreBattleEntersCombat",
                    condition(battleData,generalInfo) {
                        let ownersSlots = this.ownersSlots;

                        let relicNameRef = "Self-Enshrouded Recluse";
                        let pcRef = "4pc";
                        let relicPathing = this.relicPathing ??= relicSets[relicNameRef].params[1];//0-2pc 1-4pc
                        let buffName = this.buffName ??= turnLogicRelics[relicNameRef][pcRef].buffNames.shieldBuff4pc;

                        // greatTableIndex
                        // greatTableKeys
                        let buffSheet = this.buffSheet ??= {
                            "stats": [ShieldOutgoing],
                            [ShieldOutgoing]: relicPathing[0],
                            "source": relicNameRef,
                            "sourceOwner": "",
                            "buffName": buffName,
                            "duration": 1,
                            "AVApplied": 0,
                            "maxStacks": 1,
                            "currentStacks": 1,
                            "decay": false,
                            "expireType": null,
                        }

                        const namedTurns = battleData.nameBasedTurns;
                        const updateBuff = battleActions.updateBuff
                        for (let ally in ownersSlots) {
                            let currentTurn = namedTurns[ally];
                            buffSheet.sourceOwner = currentTurn.properName;
                            updateBuff(battleData,currentTurn,buffSheet);
                        }
                    },
                    "target": "self",
                    "listenerName": "Self-Enshrouded Recluse 4pc combat buff application",
                    "owners": [],
                    "ownersSlots": {}
                },
                {
                    "trigger": "ShieldLost",
                    condition(battleData,generalInfo) {
                        // poke("ShieldEnd",battleData,turnMerge);
                        // poke("ShieldLost",battleData,{sourceTurn,currentReference});
                        // sourceTurn.shieldCounter -= 1;
                        // sourceTurn.activeShields[buffName] = null;
                        let ownersSlots = this.ownersSlots;
                        const sourceTurn = generalInfo.sourceTurn;
                        const shieldSource = generalInfo.currentReference.sourceOwner;

                        const namedTurns = battleData.nameBasedTurns;
                        // const updateBuff = battleActions.updateBuff;
                        const sourceTurnShields = sourceTurn.activeShields;
                        let shieldOwners = [];

                        for (let shield in sourceTurnShields) {
                            const currentShield = sourceTurnShields[shield];
                            if (!currentShield) {continue;}
                            shieldOwners.push(currentShield.sourceOwner);
                        }
                        shieldOwners = new Set (shieldOwners);
                        //taking all the shield providers for shields currently on the target, and making it a set, so even if
                        //any given provider happens to be giving more than one unique shield, we can quickly check using the set.has()

                        for (let ally in ownersSlots) {
                            let currentTurn = namedTurns[ally];

                            if (shieldSource != currentTurn.properName) {continue;}
                            //if the proper name of the shield provider does not match this particular owner of the set on the field, then skip to the next relic set owner to evaluate them instead

                            const buffSheet = currentTurn.selfRecluseCRITSHEET;
                            if (!buffSheet) {continue;}//if the buff sheet wasn't constructed under this owner of the relic set, then we can skip bc that means no buff has ever been applied yet by this owner


                            
                            const buffCheck = sourceTurn.buffsObject[buffSheet.buffName];
                            if (!buffCheck) {continue;}//if the buff isn't even on the target, skip as well bc nothing to do here

                            if (shieldOwners.size && shieldOwners.has(currentTurn.properName)) {continue;}
                            //if the set of owners is greater than 0, and if the set contains a shield still from this relic set owner, then we can skip
                            //bc that means the buff SHOULD still exist on the target

                            //this should be reached if no shields remain on the target, OR, if shields do remain but none are provided by this owner of the relic set.
                            removeBuff(battleData,sourceTurn,buffSheet);
                        }
                    },
                    "target": "self",
                    "listenerName": "Self-Enshrouded Recluse - shield owned by relic owner, crit dmg removal",
                    "owners": [],
                    "ownersSlots": {}
                },
                {
                    "trigger": "ShieldEnd",
                    condition(battleData,generalInfo) {
                        let ownersSlots = this.ownersSlots;
                        const sourceTurn = generalInfo.targetTurn;

                        const shieldSource = generalInfo.sourceTurn.properName;

                        const namedTurns = battleData.nameBasedTurns;
                        const updateBuff = battleActions.updateBuff
                        for (let ally in ownersSlots) {
                            let currentTurn = namedTurns[ally];

                            if (shieldSource != currentTurn.properName) {continue;}
                            //if the proper name of the shield provider does not match this particular owner of the set on the field, then skip to the next relic set owner to evaluate them instead

                            // greatTableIndex
                            // greatTableKeys
                            if (!currentTurn.selfRecluseCRITSHEET) {
                                let relicNameRef = "Self-Enshrouded Recluse";
                                let pcRef = "4pc";
                                let relicPathing = this.relicPathing ??= relicSets[relicNameRef].params[1];//0-2pc 1-4pc
                                const buffNames = this.buffNames ??= turnLogicRelics[relicNameRef][pcRef].buffNames;
                                let buffName = buffNames.critBuff4pc;
                                const customName = `${buffName} (${currentTurn.properName})`;
                                if (!buffNames[customName]) {buffNames[customName] = customName;}

                                currentTurn.selfRecluseCRITSHEET = {
                                    "stats": [CritDamageBase],
                                    [CritDamageBase]: relicPathing[1],
                                    "source": relicNameRef,
                                    "sourceOwner": currentTurn.properName,
                                    "buffName": customName,
                                    "duration": 1,
                                    "AVApplied": 0,
                                    "maxStacks": 1,
                                    "currentStacks": 1,
                                    "decay": false,
                                    "expireType": null,
                                }
                            }
                            const buffSheet = currentTurn.selfRecluseCRITSHEET;
                            
                            const buffCheck = sourceTurn.buffsObject[buffSheet.buffName];
                            if (buffCheck) {continue;}//if the buff is already on the target, we can skip bc no need to refresh
                            updateBuff(battleData,sourceTurn,buffSheet);
                        }
                    },
                    "target": "self",
                    "listenerName": "Self-Enshrouded Recluse - shield owned by relic owner, crit dmg application",
                    "owners": [],
                    "ownersSlots": {}
                },
            ],
            "buffNames": {
                "critBuff4pc": "Self-Enshrouded Recluse (Crit DMG)",
                "shieldBuff4pc": "Self-Enshrouded Recluse (4pc)",
            },
            "buffNamesPerCharacter": {
                "critBuff4pc": "Self-Enshrouded Recluse (Crit DMG)",
            },
        }
    },
    

    //PLANAR SETS
    "Rutilant Arena": {
        "2pc": {
            logic(thisTurn,battleData) {},
            "skillFunctions": {
                statCheck(battleData,currentTurn) {
                    if (!currentTurn.rutilantDMGbyCRITSHEET) {
                        let relicNameRef = "Rutilant Arena";
                        let buffName = turnLogicRelics[relicNameRef]["2pc"].buffNames.basicSkillBuff;
                        let relicPathing = relicSets[relicNameRef].params[0];//0-2pc 1-4pc

                        currentTurn.rutilantDMGbyCRITSHEET = {
                            "stats": [DamageBasic,DamageSkill],
                            [DamageBasic]: relicPathing[2],
                            [DamageSkill]: relicPathing[2],
                            "source": relicNameRef,
                            "sourceOwner": currentTurn.properName,
                            "buffName": buffName,
                            "duration": 1,
                            "AVApplied": 0,
                            "maxStacks": 1,
                            "currentStacks": 1,
                            "decay": false,
                            "expireType": "perma"
                        }
                    }
                    let buffSheet = currentTurn.rutilantDMGbyCRITSHEET;
                    const buffName = buffSheet.buffName;
                    const buffCheck = currentTurn.buffsObject[buffName];

                    if (currentTurn.statTable[CritRateBase] >= 0.7) {//if the target has enough cr for the buff, then we can apply it
                        if (buffCheck) {return;}//if the target already has the buff, skip, no need to "renew" perma buffs like this
                        battleActions.updateBuff(battleData,currentTurn,buffSheet);
                    }
                    else if (buffCheck) {//but if the target fails the crit check and HAS the buff, then remove it
                        removeBuff(battleData,currentTurn,buffSheet);
                    }
                }
            },
            "listeners": [
                {
                    "trigger": "UpdateStatCritRate",//CritRate stat family
                    condition(battleData,generalInfo) {
                        let sourceTurn = generalInfo.sourceTurn;
                        let ownersSlots = this.ownersSlots;
                        let ownerRank = ownersSlots[sourceTurn.name];//setAmount
                        if (!ownerRank) {return;}

                        const statCheck = this.statCheck ??= turnLogicRelics["Rutilant Arena"]["2pc"].skillFunctions.statCheck;
                        statCheck(battleData,sourceTurn);
                    },
                    "target": "self",
                    "listenerName": "Rutilant crit rate check",
                    "owners": []
                },
                {
                    "trigger": "PreBattleEntersCombat",
                    condition(battleData,generalInfo) {
                        let ownerRef = this.owners;

                        // let relicPathing = relicSets[relicNameRef].params[0];//0-2pc 1-4pc
                        const statCheck = this.statCheck ??= turnLogicRelics["Rutilant Arena"]["2pc"].skillFunctions.statCheck;
                        const namedTurns = battleData.nameBasedTurns;
                        for (let owner of ownerRef) {
                            let charSlot = owner.slot;
                            let currentTurn = namedTurns[charSlot];
                            statCheck(battleData,currentTurn);
                        }
                    },
                    "target": "self",
                    "listenerName": "Rutilant battle start stat check trigger",
                    "owners": []
                },
            ],
            "buffNames": {
                "basicSkillBuff": "Rutilant Basic & Skill DMG",
            },
        }
    },
    "Inert Salsotto": {
        "2pc": {
            logic(thisTurn,battleData) {},
            "skillFunctions": {
                statCheck(battleData,currentTurn) {
                    if (!currentTurn.salsottoDMGbyCRITSHEET) {
                        let relicNameRef = "Inert Salsotto";
                        let buffName = turnLogicRelics[relicNameRef]["2pc"].buffNames.basicSkillBuff;
                        let relicPathing = relicSets[relicNameRef].params[0];//0-2pc 1-4pc
                        currentTurn.salsottoDMGbyCRITSHEET = {
                            "stats": [DamageUltimate,DamageFUA],
                            [DamageUltimate]: relicPathing[2],
                            [DamageFUA]: relicPathing[2],
                            "source": relicNameRef,
                            "sourceOwner": currentTurn.properName,
                            "buffName": buffName,
                            "duration": 1,
                            "AVApplied": 0,
                            "maxStacks": 1,
                            "currentStacks": 1,
                            "decay": false,
                            "expireType": null
                        }
                    }
                    let buffSheet = currentTurn.salsottoDMGbyCRITSHEET;
                    const buffName = buffSheet.buffName;
                    const buffCheck = currentTurn.buffsObject[buffName];

                    if (currentTurn.statTable[CritRateBase] >= 0.5) {//if the target has enough cr for the buff, then we can apply it
                        if (buffCheck) {return;}//if the target already has the buff, skip, no need to "renew" perma buffs like this
                        battleActions.updateBuff(battleData,currentTurn,buffSheet);
                    }
                    else if (buffCheck) {//but if the target fails the crit check and HAS the buff, then remove it
                        removeBuff(battleData,currentTurn,buffSheet);
                    }
                }
            },
            "listeners": [
                {
                    "trigger": "UpdateStatCritRate",//CritRate stat family
                    condition(battleData,generalInfo) {
                        let sourceTurn = generalInfo.sourceTurn;
                        let ownersSlots = this.ownersSlots;
                        let ownerRank = ownersSlots[sourceTurn.name];//setAmount
                        if (!ownerRank) {return;}

                        const statCheck = this.statCheck ??= turnLogicRelics["Inert Salsotto"]["2pc"].skillFunctions.statCheck;
                        statCheck(battleData,sourceTurn);
                    },
                    "target": "self",
                    "listenerName": "Salsotto crit rate check",
                    "owners": []
                },
                {
                    "trigger": "PreBattleEntersCombat",
                    condition(battleData,generalInfo) {
                        let ownerRef = this.owners;

                        if (ownerRef.length) {
                            // let relicPathing = relicSets[relicNameRef].params[0];//0-2pc 1-4pc
                            const statCheck = this.statCheck ??= turnLogicRelics["Inert Salsotto"]["2pc"].skillFunctions.statCheck;
                            const namedTurns = battleData.nameBasedTurns;
                            for (let owner of ownerRef) {
                                let charSlot = owner.slot;
                                let currentTurn = namedTurns[charSlot];
                                statCheck(battleData,currentTurn);
                            }
                        }
                    },
                    "target": "self",
                    "listenerName": "Salsotto battle start stat check trigger",
                    "owners": []
                },
            ],
            "buffNames": {
                "basicSkillBuff": "Salsotto Ult & FUA DMG",
            },
        }
    },
    "Broken Keel": {
        "2pc": {
            logic(thisTurn,battleData) {},
            "skillFunctions": {
                statCheck(battleData,currentTurn) {
                    if (!currentTurn.brokenKeelBUFFSHEET) {
                        let relicNameRef = "Broken Keel";
                        let relicPathing = relicSets[relicNameRef].params[0];//0-2pc 1-4pc
                        let buffName = turnLogicRelics[relicNameRef]["2pc"].buffNames.basicSkillBuff;
                        let ownerName = currentTurn.properName;
                        let adjustedName = `${buffName} (${ownerName})`;
                        //custom name bc I can't just lushaka this bitch and make it stack
                        //since part of how I handle removal or avoiding dupe stacks is with the custom name from each source
                        //irksome, but maybe I'll think of something later to fix this conundrum
                        //TODO: think of something and fix this conundrum :)

                        // let buffName = turnLogicRelics[relicNameRef][pcRef].buffNames.basicSkillBuff;
                        currentTurn.brokenKeelBUFFSHEET = {
                            "stats": [CritDamageBase],
                            [CritDamageBase]: relicPathing[2],
                            "source": relicNameRef,
                            "sourceOwner": currentTurn.properName,
                            "buffName": adjustedName,
                            "duration": 1,
                            "AVApplied": 0,
                            "maxStacks": 1,
                            "currentStacks": 1,
                            "decay": false,
                            "expireType": null
                        }
                    }
                    let buffSheet = currentTurn.brokenKeelBUFFSHEET;
                    let buffName = buffSheet.buffName;

                    const buffCheck = currentTurn.buffsObject[buffName];
                    const applyBuff = battleActions.updateBuff;
                    const allyPositions = battleData.allyPositions;
                    const declaredMemosprites = battleData.declaredMemosprites;
                    if (currentTurn.statTable[EffectRES] >= 0.3) {//if the target has enough, then we can apply it
                        if (buffCheck) {return;}//if they already have it, then abort

                        
                        for (let targetTurn of allyPositions) {
                            applyBuff(battleData,targetTurn,buffSheet);
                        }
                        for (let targetTurn of declaredMemosprites) {
                            applyBuff(battleData,targetTurn,buffSheet);
                        }
                    }
                    else if (buffCheck) {//but if they don't have enough, but have the buff, then remove it
                        for (let targetTurn of allyPositions) {
                            removeBuff(battleData,targetTurn,buffCheck);
                        }
                        for (let targetTurn of declaredMemosprites) {
                            removeBuff(battleData,targetTurn,buffCheck);
                        }
                    }
                }
            },
            "listeners": [
                {
                    "trigger": "UpdateStatEffectRES",
                    condition(battleData,generalInfo) {
                        let sourceTurn = generalInfo.sourceTurn;
                        let ownersSlots = this.ownersSlots;
                        let ownerRank = ownersSlots[sourceTurn.name];//setAmount
                        if (!ownerRank) {return;}

                        const statCheck = this.statCheck ??= turnLogicRelics["Broken Keel"]["2pc"].skillFunctions.statCheck;
                        statCheck(battleData,sourceTurn);
                    },
                    "target": "self",
                    "listenerName": "Broken Keel Effect RES check",
                    "owners": []
                },
                {
                    "trigger": "PreBattleEntersCombat",
                    condition(battleData,generalInfo) {
                        let ownerRef = this.owners;

                        const statCheck = this.statCheck ??= turnLogicRelics["Broken Keel"]["2pc"].skillFunctions.statCheck;
                        const namedTurns = battleData.nameBasedTurns;
                        for (let owner of ownerRef) {
                            let charSlot = owner.slot;

                            let currentTurn = namedTurns[charSlot];
                            statCheck(battleData,currentTurn);
                        }
                    },
                    "target": "self",
                    "listenerName": "Broken Keel battle start stat check trigger",
                    "owners": []
                },
            ],
            "buffNames": {
                "basicSkillBuff": "Broken Keel CRIT DMG",
            },
            "buffNamesPerCharacter": {
                "basicSkillBuff": "Broken Keel CRIT DMG",
            }
        }
    },
    "Lushaka, the Sunken Seas": {
        "2pc": {
            logic(thisTurn,battleData) {},
            "skillFunctions": {},
            "listeners": [
                {
                    "trigger": "PreBattleEntersCombat",
                    condition(battleData,generalInfo) {
                        let ownerRef = this.owners;
                        let ownersSlots = this.ownersSlots;

                        let timesToApply = ownerRef.length - (ownersSlots["char1"] ? 1 : 0);//if char1 is an owner, we can't apply it to themselves
                        //in which case the total times to apply goes down by 1
                        if (!timesToApply) {return;}//if the char was an owner and nobody else had it, we can obv skip bc no buffs will apply to anyone in such a case

                        let firstTurn = battleData.nameBasedTurns.char1;
                        if (!this.buffSheet) {
                            let relicNameRef = "Lushaka, the Sunken Seas";
                            let relicPathing = relicSets[relicNameRef].params[0];//0-2pc 1-4pc
                            let buffName = turnLogicRelics[relicNameRef]["2pc"].buffNames.basicSkillBuff;
                            let values = relicPathing[1];
                            // greatTableIndex
                            // greatTableKeys
                            this.buffSheet = {
                                "stats": [ATKP],
                                [ATKP]: values,
                                "source": relicNameRef,
                                "sourceOwner": "",//TODO: circle back here and loop through all owners of 2pc lushaka so assign sourceOwners
                                "buffName": buffName,
                                "duration": 1,
                                "AVApplied": 0,
                                "maxStacks": 4,
                                "currentStacks": 1,
                                "decay": false,
                                "expireType": null,
                            }
                        }
                        buffSheet = this.buffSheet;
                        buffSheet.currentStacks = timesToApply;
                        buffSheet.sourceOwner = firstTurn.properName;
                        battleActions.updateBuff(battleData,firstTurn,buffSheet);
                    },
                    "target": "self",
                    "listenerName": "Lushaka, the Sunken Seas battle start stat check trigger",
                    "owners": []
                },
            ],
            "buffNames": {
                "basicSkillBuff": "Lushaka ATK%",
            },
        }
    },
    "Penacony, Land of the Dreams": {
        "2pc": {
            logic(thisTurn,battleData) {},
            "skillFunctions": {},
            "listeners": [
                {
                    "trigger": "PreBattleEntersCombat",
                    condition(battleData,generalInfo) {
                        let ownerRef = this.owners;
                        //TODO: later after I get evernight set up, look and see if ruanmei + evernight, would proc this when evey is on the field or not

                        if (!this.buffSheet) {
                            let relicNameRef = "Penacony, Land of the Dreams";
                            let relicPathing = relicSets[relicNameRef].params[0];//0-2pc 1-4pc
                            let buffName = turnLogicRelics[relicNameRef]["2pc"].buffNames.basicSkillBuff;
                            let values = relicPathing[1];
                            this.buffSheet = {
                                "stats": [DamageAll],
                                [DamageAll]: values,
                                "source": relicNameRef,
                                "sourceOwner": "",
                                "buffName": buffName,
                                "duration": 1,
                                "AVApplied": 0,
                                "maxStacks": 3,//not that 4 would ever technically be possible bc the user can't self apply, so we say 3 for now as a cap
                                "currentStacks": 1,
                                "decay": false,
                                "expireType": null
                            }
                        }
                        let buffSheet = this.buffSheet

                        const updateBuff = battleActions.updateBuff;
                        const allyPositions = battleData.allyPositions;
                        const namedTurns = battleData.nameBasedTurns;
                        for (let owner of ownerRef) {
                            let currentTurn = namedTurns[owner.slot];
                            let ownerElement = currentTurn.element;
                            // element: charEntryTemp.element,

                            for (let targetTurn of allyPositions) {
                                if (targetTurn.name === currentTurn.name) {continue}//penacony can't apply to the owner, only everyone BUT the owner, that matches

                                let newElement = targetTurn.element;
                                if (newElement != ownerElement) {continue;}//only give a bonus to those matching the same element as the owner
                                buffSheet.sourceOwner = currentTurn.properName;
                                updateBuff(battleData,targetTurn,buffSheet);
                            }
                        }
                    },
                    "target": "self",
                    "listenerName": "Penacony, Land of the Dreams battle start stat check trigger",
                    "owners": []
                },
            ],
            "buffNames": {
                "basicSkillBuff": "Penacony DMG Boost",
            },
        }
    },
    "Sprightly Vonwacq": {
        "2pc": {
            logic(thisTurn,battleData) {},
            "skillFunctions": {},
            "listeners": [
                {
                    "trigger": "PreBattleEntersCombat",
                    condition(battleData,generalInfo) {
                        let ownerRef = this.owners;
                        let relicNameRef = "Sprightly Vonwacq";
                        let advance = battleActions.actionAdvance;
                        let amount = 0.40;
                        //TODO: need to look into whether speed buffs applied as you enter combat, can count
                        //bc if so I need to move this to the battlestart trigger next to dmg techniques

                        const namedTurns = battleData.nameBasedTurns;
                        for (let owner of ownerRef) {
                            let currentTurn = namedTurns[owner.slot];
                            if (currentTurn.SPD >= 120) {
                                advance(amount,currentTurn,battleData,relicNameRef);
                            }
                        }
                    },
                    "target": "self",
                    "listenerName": "Sprightly Vonwacq start stat check trigger",
                    "owners": []
                },
            ],
            "buffNames": {},
        }
    },
    "Forge of the Kalpagni Lantern": {
        "2pc": {
            logic(thisTurn,battleData) {},
            "skillFunctions": {},
            "listeners": [
                {
                    "trigger": "HitEnemyEnd",
                    condition(battleData,generalInfo) {
                        // let ownerRef = this.owners;
                        let ownersSlots = this.ownersSlots;
                        // poke("HitEnemyEnd",battleData,{targetTurn,sourceTurn});
                        let sourceTurn = generalInfo.sourceTurn;
                        let ownerRank = ownersSlots[sourceTurn.name];
                        if (!ownerRank) {return;}//abort non-owners

                        
                        const buffCheck = sourceTurn.buffsObject[sourceTurn.forgeKalpagniBREAKSHEET?.buffName];
                        // console.log(buffCheck)
                        if (buffCheck && buffCheck.duration === 2) {return;}//if we're already fullstacked, get out
                        // console.log("reached inner")

                        const targetTurn = generalInfo.targetTurn;
                        if (!targetTurn.statTable[WeaknessFire]) {return;}//we only need one fire weakness in the hit to get it

                        if (!sourceTurn.forgeKalpagniBREAKSHEET) {
                            let relicNameRef = "Forge of the Kalpagni Lantern";
                            let relicPathing = this.relicPathing ??= relicSets[relicNameRef].params[0];//0-2pc 1-4pc
                            let buffName = this.buffName ??= turnLogicRelics[relicNameRef]["2pc"].buffNames.basicSkillBuff;
                            let values = relicPathing[1];
                            sourceTurn.forgeKalpagniBREAKSHEET = {
                                "stats": [DamageBreak],
                                [DamageBreak]: values,
                                "source": relicNameRef,
                                "sourceOwner": sourceTurn.properName,
                                "buffName": buffName,
                                "duration": 1,
                                "AVApplied": 0,
                                "maxStacks": 1,
                                "currentStacks": 1,
                                "decay": false,
                                "expireType": "EndTurn"
                            }
                        }
                    
                        let buffSheet = sourceTurn.forgeKalpagniBREAKSHEET;
                        
                        buffSheet.duration = sourceTurn.turnState ? 2 : 1;

                        battleActions.updateBuff(battleData,sourceTurn,buffSheet);
                    },
                    "target": "self",
                    "listenerName": "Kalpagni weakness check",
                    "owners": []
                },
            ],
            "buffNames": {
                "basicSkillBuff": "Forge of the Kalpagni Lantern",
            },
        }
    },
    "Belobog of the Architects": {
        "2pc": {
            logic(thisTurn,battleData) {},
            "skillFunctions": {
                statCheck(battleData,currentTurn) {
                    if (!currentTurn.belobogArchitectsDEFSHEET) {
                        let relicNameRef = "Belobog of the Architects";
                        let buffName = turnLogicRelics[relicNameRef]["2pc"].buffNames.defBuff;
                        let relicPathing = relicSets[relicNameRef].params[0];//0-2pc 1-4pc
                        currentTurn.belobogArchitectsDEFSHEET = {
                            "stats": [DEFP],
                            [DEFP]: relicPathing[2],
                            "source": relicNameRef,
                            "sourceOwner": currentTurn.properName,
                            "buffName": buffName,
                            "duration": 1,
                            "AVApplied": 0,
                            "maxStacks": 1,
                            "currentStacks": 1,
                            "decay": false,
                            "expireType": null
                        }
                    }
                    let buffSheet = currentTurn.belobogArchitectsDEFSHEET;
                    const buffName = buffSheet.buffName;
                    const buffCheck = currentTurn.buffsObject[buffName];

                    if (currentTurn.statTable[EffectHitRate] >= 0.5) {//if the target has enough cr for the buff, then we can apply it
                        if (buffCheck) {return;}//if the target already has the buff, skip, no need to "renew" perma buffs like this
                        battleActions.updateBuff(battleData,currentTurn,buffSheet);

                    }
                    else if (buffCheck) {//but if the target fails the crit check and HAS the buff, then remove it
                        removeBuff(battleData,currentTurn,buffSheet);
                    }
                }
            },
            "listeners": [
                {
                    "trigger": "UpdateStatEffectHitRate",//EffectHitRate stat family
                    condition(battleData,generalInfo) {
                        let sourceTurn = generalInfo.sourceTurn;
                        let ownersSlots = this.ownersSlots;
                        let ownerRank = ownersSlots[sourceTurn.name];//setAmount
                        if (!ownerRank) {return;}
                        //TODO: maybe move the entire function call into a this.shit if it gets too costly later
                        //p sure there are a few places I could and probably should do that with
                        const statCheck = this.statCheck ??= turnLogicRelics["Belobog of the Architects"]["2pc"].skillFunctions.statCheck;
                        statCheck(battleData,sourceTurn);
                    },
                    "target": "self",
                    "listenerName": "Belobog of the Architects EHR check",
                    "owners": []
                },
                {
                    "trigger": "PreBattleEntersCombat",
                    condition(battleData,generalInfo) {
                        let ownerRef = this.owners;

                        if (ownerRef.length) {
                            // let relicPathing = relicSets[relicNameRef].params[0];//0-2pc 1-4pc
                            const statCheck = this.statCheck ??= turnLogicRelics["Belobog of the Architects"]["2pc"].skillFunctions.statCheck;
                            const namedTurns = battleData.nameBasedTurns;
                            for (let owner of ownerRef) {
                                let charSlot = owner.slot;
                                let currentTurn = namedTurns[charSlot];
                                statCheck(battleData,currentTurn);
                            }
                        }
                    },
                    "target": "self",
                    "listenerName": "Belobog of the Architects battle start stat check trigger",
                    "owners": []
                },
            ],
            "buffNames": {
                "defBuff": "Belobog of the Architects",
            },
        }
    },
    "Talia: Kingdom of Banditry": {
        "2pc": {
            logic(thisTurn,battleData) {},
            "skillFunctions": {
                statCheck(battleData,currentTurn) {
                    if (!currentTurn.taliaBanditryBREAKSHEET) {
                        let relicNameRef = "Talia: Kingdom of Banditry";
                        let buffName = turnLogicRelics[relicNameRef]["2pc"].buffNames.breakBuff;
                        let relicPathing = relicSets[relicNameRef].params[0];//0-2pc 1-4pc
                        currentTurn.taliaBanditryBREAKSHEET = {
                            "stats": [DamageBreak],
                            [DamageBreak]: relicPathing[2],
                            "source": relicNameRef,
                            "sourceOwner": currentTurn.properName,
                            "buffName": buffName,
                            "duration": 1,
                            "AVApplied": 0,
                            "maxStacks": 1,
                            "currentStacks": 1,
                            "decay": false,
                            "expireType": null
                        }
                    }
                    let buffSheet = currentTurn.taliaBanditryBREAKSHEET;
                    const buffName = buffSheet.buffName;
                    const buffCheck = currentTurn.buffsObject[buffName];

                    if (currentTurn.SPD >= 145) {//if the target has enough cr for the buff, then we can apply it
                        if (buffCheck) {return;}//if the target already has the buff, skip, no need to "renew" perma buffs like this
                        battleActions.updateBuff(battleData,currentTurn,buffSheet);

                    }
                    else if (buffCheck) {//but if the target fails the crit check and HAS the buff, then remove it
                        removeBuff(battleData,currentTurn,buffSheet);
                    }
                }
            },
            "listeners": [
                {
                    "trigger": "UpdateStatSPD",//SPD stat family
                    condition(battleData,generalInfo) {
                        let sourceTurn = generalInfo.sourceTurn;
                        let ownersSlots = this.ownersSlots;
                        let ownerRank = ownersSlots[sourceTurn.name];//setAmount
                        if (!ownerRank) {return;}
                        //TODO: maybe move the entire function call into a this.shit if it gets too costly later
                        //p sure there are a few places I could and probably should do that with
                        const statCheck = this.statCheck ??= turnLogicRelics["Talia: Kingdom of Banditry"]["2pc"].skillFunctions.statCheck;
                        statCheck(battleData,sourceTurn);
                    },
                    "target": "self",
                    "listenerName": "Talia: Kingdom of Banditry SPD check",
                    "owners": []
                },
                {
                    "trigger": "PreBattleEntersCombat",
                    condition(battleData,generalInfo) {
                        let ownerRef = this.owners;

                        if (ownerRef.length) {
                            // let relicPathing = relicSets[relicNameRef].params[0];//0-2pc 1-4pc
                            const statCheck = this.statCheck ??= turnLogicRelics["Talia: Kingdom of Banditry"]["2pc"].skillFunctions.statCheck;
                            const namedTurns = battleData.nameBasedTurns;
                            for (let owner of ownerRef) {
                                let charSlot = owner.slot;
                                let currentTurn = namedTurns[charSlot];
                                statCheck(battleData,currentTurn);
                            }
                        }
                    },
                    "target": "self",
                    "listenerName": "Talia: Kingdom of Banditry battle start stat check trigger",
                    "owners": []
                },
            ],
            "buffNames": {
                "breakBuff": "Talia: Kingdom of Banditry",
            },
        }
    },
    "Space Sealing Station": {
        "2pc": {
            logic(thisTurn,battleData) {},
            "skillFunctions": {
                statCheck(battleData,currentTurn) {
                    if (!currentTurn.spaceSealingATKSHEET) {
                        let relicNameRef = "Space Sealing Station";
                        let buffName = turnLogicRelics[relicNameRef]["2pc"].buffNames.atkBuff;
                        let relicPathing = relicSets[relicNameRef].params[0];//0-2pc 1-4pc
                        currentTurn.spaceSealingATKSHEET = {
                            "stats": [ATKP],
                            [ATKP]: relicPathing[2],
                            "source": relicNameRef,
                            "sourceOwner": currentTurn.properName,
                            "buffName": buffName,
                            "duration": 1,
                            "AVApplied": 0,
                            "maxStacks": 1,
                            "currentStacks": 1,
                            "decay": false,
                            "expireType": null
                        }
                    }
                    let buffSheet = currentTurn.spaceSealingATKSHEET;
                    const buffName = buffSheet.buffName;
                    const buffCheck = currentTurn.buffsObject[buffName];

                    if (currentTurn.SPD >= 120) {//if the target has enough cr for the buff, then we can apply it
                        if (buffCheck) {return;}//if the target already has the buff, skip, no need to "renew" perma buffs like this
                        battleActions.updateBuff(battleData,currentTurn,buffSheet);

                    }
                    else if (buffCheck) {//but if the target fails the crit check and HAS the buff, then remove it
                        removeBuff(battleData,currentTurn,buffSheet);
                    }
                }
            },
            "listeners": [
                {
                    "trigger": "UpdateStatSPD",//SPD stat family
                    condition(battleData,generalInfo) {
                        let sourceTurn = generalInfo.sourceTurn;
                        let ownersSlots = this.ownersSlots;
                        let ownerRank = ownersSlots[sourceTurn.name];//setAmount
                        if (!ownerRank) {return;}
                        //TODO: maybe move the entire function call into a this.shit if it gets too costly later
                        //p sure there are a few places I could and probably should do that with
                        const statCheck = this.statCheck ??= turnLogicRelics["Space Sealing Station"]["2pc"].skillFunctions.statCheck;
                        statCheck(battleData,sourceTurn);
                    },
                    "target": "self",
                    "listenerName": "Space Sealing Station SPD check",
                    "owners": []
                },
                {
                    "trigger": "PreBattleEntersCombat",
                    condition(battleData,generalInfo) {
                        let ownerRef = this.owners;

                        if (ownerRef.length) {
                            // let relicPathing = relicSets[relicNameRef].params[0];//0-2pc 1-4pc
                            const statCheck = this.statCheck ??= turnLogicRelics["Space Sealing Station"]["2pc"].skillFunctions.statCheck;
                            const namedTurns = battleData.nameBasedTurns;
                            for (let owner of ownerRef) {
                                let charSlot = owner.slot;
                                let currentTurn = namedTurns[charSlot];
                                statCheck(battleData,currentTurn);
                            }
                        }
                    },
                    "target": "self",
                    "listenerName": "Space Sealing Station battle start stat check trigger",
                    "owners": []
                },
            ],
            "buffNames": {
                "atkBuff": "Space Sealing Station",
            },
        }
    },
    "Fleet of the Ageless": {//TODO: a few others here use allies on the field instead of allies that exist, so memos that get summoned after the first check would be excluded and that's not right
        "2pc": {
            logic(thisTurn,battleData) {},
            "skillFunctions": {
                statCheck(battleData,currentTurn) {
                    if (!currentTurn.fleetAgelessATKSHEET) {
                        let relicNameRef = "Fleet of the Ageless";
                        let relicPathing = relicSets[relicNameRef].params[0];//0-2pc 1-4pc
                        const buffNames = turnLogicRelics[relicNameRef]["2pc"].buffNames;
                        let buffName = buffNames.basicSkillBuff;
                        let ownerName = currentTurn.properName;
                        let adjustedName = `${buffName} (${ownerName})`;
                        //custom name bc I can't just lushaka this bitch and make it stack
                        //since part of how I handle removal or avoiding dupe stacks is with the custom name from each source
                        //irksome, but maybe I'll think of something later to fix this conundrum
                        //TODO: think of something and fix this conundrum :)
                        let turnOverride = 1;

                        if (!buffNames[adjustedName]) {buffNames[adjustedName] = adjustedName;}

                        // let buffName = turnLogicRelics[relicNameRef][pcRef].buffNames.basicSkillBuff;

                        // greatTableIndex
                        // greatTableKeys
                        currentTurn.fleetAgelessATKSHEET = {
                            "stats": [ATKP],
                            [ATKP]: relicPathing[2],
                            "source": relicNameRef,
                            "sourceOwner": currentTurn.properName,
                            "buffName": adjustedName,
                            "duration": turnOverride,
                            "AVApplied": 0,
                            "maxStacks": 1,
                            "currentStacks": 1,
                            "decay": false,
                            "expireType": null,
                        }
                    }
                    let buffSheet = currentTurn.fleetAgelessATKSHEET;
                    let buffName = buffSheet.buffName;

                    const buffCheck = currentTurn.buffsObject[buffName];
                    const applyBuff = battleActions.updateBuff;
                    // const allyPositions = battleData.allyPositions;
                    const allyTurns = battleData.nameBasedTurns;
                    if (currentTurn.SPD >= 120) {//if the target has enough, then we can apply it
                        if (buffCheck) {return;}//if they already have it, then abort

                        for (let targetTurn in allyTurns) {
                            const currentTurn = allyTurns[targetTurn];
                            
                            applyBuff(battleData,currentTurn,buffSheet);
                        }
                    }
                    else if (buffCheck) {//but if they don't have enough, but have the buff, then remove it
                        for (let targetTurn in allyTurns) {
                            const currentTurn = allyTurns[targetTurn];
                            removeBuff(battleData,currentTurn,buffCheck);
                        }
                    }
                }
            },
            "listeners": [
                {
                    "trigger": "UpdateStatSPD",
                    condition(battleData,generalInfo) {
                        let sourceTurn = generalInfo.sourceTurn;
                        let ownersSlots = this.ownersSlots;
                        let ownerRank = ownersSlots[sourceTurn.name];//setAmount
                        if (!ownerRank) {return;}

                        const statCheck = this.statCheck ??= turnLogicRelics["Fleet of the Ageless"]["2pc"].skillFunctions.statCheck;
                        statCheck(battleData,sourceTurn);
                    },
                    "target": "self",
                    "listenerName": "Fleet of the Ageless SPD check",
                    "owners": []
                },
                {
                    "trigger": "PreBattleEntersCombat",
                    condition(battleData,generalInfo) {
                        let ownerRef = this.owners;

                        const statCheck = this.statCheck ??= turnLogicRelics["Fleet of the Ageless"]["2pc"].skillFunctions.statCheck;
                        const namedTurns = battleData.nameBasedTurns;
                        for (let owner of ownerRef) {
                            let charSlot = owner.slot;

                            let currentTurn = namedTurns[charSlot];
                            statCheck(battleData,currentTurn);
                        }
                    },
                    "target": "self",
                    "listenerName": "Fleet of the Ageless battle start stat check trigger",
                    "owners": []
                },
            ],
            "buffNames": {
                "basicSkillBuff": "Fleet of the Ageless ATK%",
            },
            "buffNamesPerCharacter": {
                "basicSkillBuff": "Fleet of the Ageless ATK%",
            }
        }
    },
    "Izumo Gensei and Takama Divine Realm": {
        "2pc": {
            logic(thisTurn,battleData) {},
            "skillFunctions": {},
            "listeners": [
                {
                    "trigger": "PreBattleEntersCombat",
                    condition(battleData,generalInfo) {
                        let ownerRef = this.owners;

                        let relicNameRef = "Izumo Gensei and Takama Divine Realm";
                        let relicPathing = this.relicPathing ??= relicSets[relicNameRef].params[0];//0-2pc 1-4pc
                        let buffName = this.buffName ??= turnLogicRelics[relicNameRef]["2pc"].buffNames.critBuff;
                        let buffSheet = this.buffSheet ??= {
                            "stats": [CritRateBase],
                            [CritRateBase]: relicPathing[1],
                            "source": relicNameRef,
                            "sourceOwner": "",
                            "buffName": buffName,
                            "duration": 1,
                            "AVApplied": 0,
                            "maxStacks": 1,
                            "currentStacks": 1,
                            "decay": false,
                            "expireType": null
                        }

                        const updateBuff = battleActions.updateBuff;
                        const allyPositions = battleData.allyPositions;
                        const namedTurns = battleData.nameBasedTurns;
                        for (let owner of ownerRef) {
                            let currentTurn = namedTurns[owner.slot];
                            let ownerPath = currentTurn.path;
                            // element: charEntryTemp.element,

                            let pathFound = false;
                            for (let targetTurn of allyPositions) {
                                if (targetTurn.name === currentTurn.name) {continue}//don't want to count the owner

                                if (targetTurn.path === ownerPath) {
                                    pathFound = true;
                                    break;
                                }
                            }

                            if (pathFound) {
                                buffSheet.sourceOwner = currentTurn.properName;
                                updateBuff(battleData,currentTurn,buffSheet);
                            }
                        }
                    },
                    "target": "self",
                    "listenerName": "Izumo Gensei and Takama Divine Realm battle start stat check trigger",
                    "owners": []
                },
            ],
            "buffNames": {
                "critBuff": "Izumo Gensei and Takama Divine Realm",
            },
        }
    },
    "Bone Collection's Serene Demesne": {
        "2pc": {
            logic(thisTurn,battleData) {},
            "skillFunctions": {
                statCheck(battleData,currentTurn) {
                    if (!currentTurn.boneCollectionSereneCRITDMGSHEET) {
                        let relicNameRef = "Bone Collection's Serene Demesne";
                        let buffName = turnLogicRelics[relicNameRef]["2pc"].buffNames.critDMGBuff;
                        let relicPathing = relicSets[relicNameRef].params[0];//0-2pc 1-4pc
                        currentTurn.boneCollectionSereneCRITDMGSHEET = {
                            "stats": [CritDamageBase],
                            [CritDamageBase]: relicPathing[2],
                            "source": relicNameRef,
                            "sourceOwner": currentTurn.properName,
                            "buffName": buffName,
                            "duration": 1,
                            "AVApplied": 0,
                            "maxStacks": 1,
                            "currentStacks": 1,
                            "decay": false,
                            "expireType": null
                        }
                    }
                    let buffSheet = currentTurn.boneCollectionSereneCRITDMGSHEET;
                    const buffName = buffSheet.buffName;
                    const buffCheck = currentTurn.buffsObject[buffName];
                    const memoRef = currentTurn.memospriteEventRef;

                    const HP = calcs.getHPFinal(currentTurn.statTable).HPFinal;
                    //TODO: need to get memohandling later
                    const updateBuff = battleActions.updateBuff;
                    if (HP >= 5000) {//if the target has enough cr for the buff, then we can apply it
                        if (buffCheck) {return;}//if the target already has the buff, skip, no need to "renew" perma buffs like this
                        updateBuff(battleData,currentTurn,buffSheet);
                        if (memoRef) {updateBuff(battleData,currentTurn[memoRef],buffSheet);}

                    }
                    else if (buffCheck) {//but if the target fails the crit check and HAS the buff, then remove it
                        removeBuff(battleData,currentTurn,buffSheet);
                        if (memoRef) {removeBuff(battleData,currentTurn[memoRef],buffSheet);}
                    }
                }
            },
            "listeners": [
                {
                    "trigger": "UpdateStatHP",//HP stat family
                    condition(battleData,generalInfo) {
                        let sourceTurn = generalInfo.sourceTurn;
                        let ownersSlots = this.ownersSlots;
                        let ownerRank = ownersSlots[sourceTurn.name];//setAmount
                        if (!ownerRank) {return;}
                        //TODO: maybe move the entire function call into a this.shit if it gets too costly later
                        //p sure there are a few places I could and probably should do that with
                        const statCheck = this.statCheck ??= turnLogicRelics["Bone Collection's Serene Demesne"]["2pc"].skillFunctions.statCheck;
                        statCheck(battleData,sourceTurn);
                    },
                    "target": "self",
                    "listenerName": "Bone Collection's Serene Demesne HP check",
                    "owners": []
                },
                {
                    "trigger": "PreBattleEntersCombat",
                    condition(battleData,generalInfo) {
                        let ownerRef = this.owners;

                        if (ownerRef.length) {
                            // let relicPathing = relicSets[relicNameRef].params[0];//0-2pc 1-4pc
                            const statCheck = this.statCheck ??= turnLogicRelics["Bone Collection's Serene Demesne"]["2pc"].skillFunctions.statCheck;
                            const namedTurns = battleData.nameBasedTurns;
                            for (let owner of ownerRef) {
                                let charSlot = owner.slot;
                                let currentTurn = namedTurns[charSlot];
                                statCheck(battleData,currentTurn);
                            }
                        }
                    },
                    "target": "self",
                    "listenerName": "Bone Collection's Serene Demesne battle start stat check trigger",
                    "owners": []
                },
            ],
            "buffNames": {
                "critDMGBuff": "Bone Collection's Serene Demesne",
            },
        }
    },
    "Pan-Cosmic Commercial Enterprise": {
        "2pc": {
            logic(thisTurn,battleData) {},
            "skillFunctions": {
                statCheck(battleData,currentTurn) {
                    if (!currentTurn.panCosmicCommercialATKSHEET) {
                        let relicNameRef = "Pan-Cosmic Commercial Enterprise";
                        let buffName = turnLogicRelics[relicNameRef]["2pc"].buffNames.atkBuff;
                        // let relicPathing = relicSets[relicNameRef].params[0];//0-2pc 1-4pc
                        // let values = relicPathing[2];
                        currentTurn.panCosmicCommercialATKSHEET = {
                            "stats": [ATKP],
                            [ATKP]: 0,
                            "source": relicNameRef,
                            "sourceOwner": currentTurn.properName,
                            "buffName": buffName,
                            "duration": 1,
                            "AVApplied": 0,
                            "maxStacks": 1,
                            "currentStacks": 1,
                            "decay": false,
                            "expireType": null
                        }
                    }
                    let buffSheet = currentTurn.panCosmicCommercialATKSHEET;
                    const buffName = buffSheet.buffName;
                    const buffCheck = currentTurn.buffsObject[buffName];


                    let currentEHR = currentTurn.statTable[EffectHitRate];
                    let conversion = Math.min(0.25,currentEHR * 0.25);//atk converted by 25% of EHR, up to a max of 25%
                    //also if this is anything like tingyun's benediction(and it is like that), then this amount is not null ATK, can be used in conversions
                    //TODO: confirm that later, cause rn I'm assuming


                    if (buffCheck) {
                        const statCheck = buffCheck.stats[ATKP];
                        if (statCheck === conversion) {return;}//if buff exists and the amount hasn't changed, then end it here
                        else {
                            //so if gallagher already has the buff, but the new conversion amount does NOT match the existing amount
                            //then silently remove the old buff
                            removeBuff(battleData,currentTurn,buffCheck,true);
                        }
                    }

                    buffSheet[ATKP] = conversion;
                    
                    battleActions.updateBuff(battleData,currentTurn,buffSheet);
                },
            },
            "listeners": [
                {
                    "trigger": "UpdateStatEffectHitRate",//EffectHitRate stat family
                    condition(battleData,generalInfo) {
                        let sourceTurn = generalInfo.sourceTurn;
                        let ownersSlots = this.ownersSlots;
                        let ownerRank = ownersSlots[sourceTurn.name];//setAmount
                        if (!ownerRank) {return;}
                        //TODO: maybe move the entire function call into a this.shit if it gets too costly later
                        //p sure there are a few places I could and probably should do that with
                        const statCheck = this.statCheck ??= turnLogicRelics["Pan-Cosmic Commercial Enterprise"]["2pc"].skillFunctions.statCheck;
                        statCheck(battleData,sourceTurn);
                    },
                    "target": "self",
                    "listenerName": "Pan-Cosmic Commercial Enterprise EHR check",
                    "owners": []
                },
                {
                    "trigger": "PreBattleEntersCombat",
                    condition(battleData,generalInfo) {
                        let ownerRef = this.owners;

                        // let relicPathing = relicSets[relicNameRef].params[0];//0-2pc 1-4pc
                        const statCheck = this.statCheck ??= turnLogicRelics["Pan-Cosmic Commercial Enterprise"]["2pc"].skillFunctions.statCheck;
                        const namedTurns = battleData.nameBasedTurns;
                        for (let owner of ownerRef) {
                            let charSlot = owner.slot;
                            let currentTurn = namedTurns[charSlot];
                            statCheck(battleData,currentTurn);
                        }
                    },
                    "target": "self",
                    "listenerName": "Pan-Cosmic Commercial Enterprise battle start stat check trigger",
                    "owners": []
                },
            ],
            "buffNames": {
                "atkBuff": "Pan-Cosmic Commercial Enterprise",
            },
        }
    },
    "Celestial Differentiator": {
        "2pc": {
            logic(thisTurn,battleData) {},
            "skillFunctions": {},
            "listeners": [
                {
                    "trigger": "PreBattleEntersCombat",
                    condition(battleData,generalInfo) {
                        let ownersSlots = this.ownersSlots;

                        let relicNameRef = "Celestial Differentiator";
                        let pcRef = "2pc";
                        let relicPathing = this.relicPathing ??=relicSets[relicNameRef].params[0];//0-2pc 1-4pc
                        let buffName = this.buffName ??= turnLogicRelics[relicNameRef][pcRef].buffNames.critBuff;

                        let buffSheet = this.buffSheet ??= {
                            "stats": [CritRateBase],
                            [CritRateBase]: relicPathing[2],
                            "source": relicNameRef,
                            "sourceOwner": "",
                            "buffName": buffName,
                            "duration": 1,//custom removal
                            "AVApplied": 0,
                            "maxStacks": 1,
                            "currentStacks": 1,
                            "decay": false,
                            "expireType": null
                        }

                        const namedTurns = battleData.nameBasedTurns;
                        const updateBuff = battleActions.updateBuff;
                        const menuStats = battleData.menuStats;
                        //TODO: make sure this actually operates on menu stats, cause right now that is the assumption that it works like poet
                        for (let ally in ownersSlots) {
                            let currentTurn = namedTurns[ally];
                            let menuStat = menuStats[ally];

                            const critDMG = menuStat[CritDamageBase];
                            if (critDMG < 1.2) {continue;}//only apply to allied owners with 120% or greater crit dmg from their menu stats
                            buffSheet.sourceOwner = currentTurn.properName;
                            updateBuff(battleData,currentTurn,buffSheet);
                        }


                        let ownerRef = this.owners;//purely for setting up temp value tracking
                        const tempLogic = battleData.battleLogicTemp;
                        const celestialRef = tempLogic.celestialDifferentiator ??= {};
                        celestialRef.total = ownerRef.length;
                        celestialRef.completed = 0;
                    },
                    "target": "self",
                    "listenerName": "Celestial Differentiator combat buff application",
                    "owners": [],
                    "ownersSlots": {}
                },
                {
                    "trigger": "AttackEnd",
                    condition(battleData,generalInfo) {
                        let sourceTurn = generalInfo.sourceTurn;
                        let ownersSlots = this.ownersSlots;
                        let ownerRank = ownersSlots[sourceTurn.name];//setAmount
                        if (!ownerRank) {return;}

                        if (sourceTurn.celestialDiffAttackFinished) {return;}//if we've already removed the buff from an owner, skip

                        let relicNameRef = "Celestial Differentiator";
                        let pcRef = "2pc";
                        let buffName = this.buffName ??= turnLogicRelics[relicNameRef][pcRef].buffNames.critBuff;
                        let buffCheck = sourceTurn.buffsObject[buffName];
                        if (buffCheck) {removeBuff(battleData,sourceTurn,buffCheck);}
                        //sometimes it may not apply to an owner bc of lacking crit damage, but in such a case we still want to mark them as completed to remove the listener

                        sourceTurn.celestialDiffAttackFinished = true;
                        const tempLogic = battleData.battleLogicTemp;
                        const celestialRef = tempLogic.celestialDifferentiator;
                        celestialRef.completed += 1;

                        if (celestialRef.completed === celestialRef.total) {
                            //we don't want to evaluate every single attack end in the battle cause that'd be shit, so we kill the listener once all owners are marked completed
                            battleActions.removeListenerInBattle(battleData,this.listenerName,this.trigger);
                        }
                        // //TODO: maybe move the entire function call into a this.shit if it gets too costly later
                        // //p sure there are a few places I could and probably should do that with
                        // turnLogicRelics["Celestial Differentiator"]["2pc"].skillFunctions.statCheck(battleData,sourceTurn);
                    },
                    "target": "self",
                    "listenerName": "Celestial Differentiator attack end listener",
                    "owners": []
                },
            ],
            "buffNames": {
                "critBuff": "Celestial Differentiator",
            },
        }
    },
    "Duran, Dynasty of Running Wolves": {
        "2pc": {
            logic(thisTurn,battleData) {},
            "skillFunctions": {},
            "listeners": [
                {
                    "trigger": "PreBattleEntersCombat",
                    condition(battleData,generalInfo) {
                        let ownerRef= this.owners;
                        // let ownersSlots = this.ownersSlots;

                        const tempLogic = battleData.battleLogicTemp;
                        const duranRef = tempLogic.duranDynastyValues ??= {};
                        duranRef.total = ownerRef.length;
                        duranRef.completed = 0;
                    },
                    "target": "self",
                    "listenerName": "Duran, Dynasty of Running Wolves temp value setup",
                    "owners": [],
                    "ownersSlots": {}
                },
                {
                    "trigger": "FUAStart",
                    condition(battleData,generalInfo) {
                        let sourceTurn = generalInfo.sourceTurn;
                        let ownersSlots = this.ownersSlots;
                        let ownerRank = ownersSlots[sourceTurn.name];//setAmount
                        if (!ownerRank || sourceTurn.duranDynastyStacksFinished) {return;}//if we've already finished an owner's stacking, skip

                        //TODO: right now I'm assuming FUA start for stack gains, but need to check if it's on end instead
                        if (!sourceTurn.duranDynastyMERITSHEET) {
                            let relicNameRef = "Duran, Dynasty of Running Wolves";
                            let pcRef = "2pc";
                            let relicPathing = this.relicPathing ??= relicSets[relicNameRef].params[0];//0-2pc 1-4pc
                            const buffRef = this.buffRef ??= turnLogicRelics[relicNameRef][pcRef].buffNames;
                            let buffName = buffRef.dmgBuff;
                            let buffName2 = buffRef.critBuff;

                            sourceTurn.duranDynastyMERITSHEET = {
                                "stats": [DamageFUA],
                                [DamageFUA]: relicPathing[1],
                                "source": relicNameRef,
                                "sourceOwner": sourceTurn.properName,
                                "buffName": buffName,
                                "duration": 1,
                                "AVApplied": 0,
                                "maxStacks": 5,
                                "currentStacks": 1,
                                "decay": false,
                                "expireType": null
                            }
                            sourceTurn.duranDynastyCRITDMGSHEET = {
                                "stats": [CritDamageBase],
                                [CritDamageBase]: relicPathing[2],
                                "source": relicNameRef,
                                "sourceOwner": sourceTurn.properName,
                                "buffName": buffName2,
                                "duration": 1,
                                "AVApplied": 0,
                                "maxStacks": 1,
                                "currentStacks": 1,
                                "decay": false,
                                "expireType": null
                            }
                        }
                        let buffSheet = sourceTurn.duranDynastyMERITSHEET;
                        
                        const updateBuff = battleActions.updateBuff;
                        updateBuff(battleData,sourceTurn,buffSheet);
                        const buffCheck = sourceTurn.buffsObject[buffSheet.buffName];

                        if (buffCheck.currentStacks === 5) {
                            let buffSheet2 = sourceTurn.duranDynastyCRITDMGSHEET;
                            updateBuff(battleData,sourceTurn,buffSheet2);
                            const tempLogic = battleData.battleLogicTemp;
                            const duranRef = tempLogic.duranDynastyValues;
                            duranRef.completed += 1;
                            sourceTurn.duranDynastyStacksFinished = true;

                            if (duranRef.completed === duranRef.total) {
                                //when all owners have completed, remove the listener so it's not constantly checking for shit
                                battleActions.removeListenerInBattle(battleData,this.listenerName,this.trigger);
                            }
                        }
                    },
                    "target": "self",
                    "listenerName": "Duran, Dynasty of Running Wolves FUA listener",
                    "owners": [],
                },
            ],
            "buffNames": {
                "dmgBuff": "Merit (Dynasty)",
                "critBuff": "Duran, Dynasty of Running Wolves",
            },
        }
    },
    "Sigonia, the Unclaimed Desolation": {
        "2pc": {
            logic(thisTurn,battleData) {},
            "skillFunctions": {},
            "listeners": [
                {
                    "trigger": "PreBattleEntersCombat",
                    condition(battleData,generalInfo) {
                        // let ownerRef= this.owners;
                        // // let ownersSlots = this.ownersSlots;

                        const tempLogic = battleData.battleLogicTemp;
                        const sigoniaRef = tempLogic.sigoniaDesolationDeathValues ??= {};
                        sigoniaRef.total = 10;
                        sigoniaRef.completed = 0;
                        //TODO: prob don't even need this trigger, can just move the logic definition to the death trigger with ??= since the total
                        //will always be 10, rather than be set to the owner's amount
                    },
                    "target": "self",
                    "listenerName": "Sigonia, the Unclaimed Desolation temp value setup",
                    "owners": [],
                    "ownersSlots": {}
                },
                {
                    "trigger": "EnemyDied",
                    condition(battleData,generalInfo) {
                        // poke("EnemyDied",battleData,{sourceTurn, enemyKilled:killed});
                        let ownersSlots = this.ownersSlots;

                        if (!this.sigoniaDesolationCRITDMGSHEET) {
                            let relicNameRef = "Sigonia, the Unclaimed Desolation";
                            let pcRef = "2pc";
                            let relicPathing = relicSets[relicNameRef].params[0];//0-2pc 1-4pc
                            const buffName = turnLogicRelics[relicNameRef][pcRef].buffNames.critBuff;

                            this.sigoniaDesolationCRITDMGSHEET = {
                                "stats": [CritDamageBase],
                                [CritDamageBase]: relicPathing[2],
                                "source": relicNameRef,
                                "sourceOwner": "",
                                "buffName": buffName,
                                "duration": 1,
                                "AVApplied": 0,
                                "maxStacks": 10,
                                "currentStacks": 1,
                                "decay": false,
                                "expireType": null
                            }
                        }
                        let buffSheet = this.sigoniaDesolationCRITDMGSHEET;
                        

                        const updateBuff = battleActions.updateBuff;
                        const namedTurns = battleData.nameBasedTurns;
                        for (let charSlot in ownersSlots) {
                            let currentTurn = namedTurns[charSlot];
                            buffSheet.sourceOwner = currentTurn.properName;
                            updateBuff(battleData,currentTurn,buffSheet);
                        }

                        const tempLogic = battleData.battleLogicTemp;
                        const sigoniaRef = tempLogic.sigoniaDesolationDeathValues;
                        sigoniaRef.completed += 1;

                        if (sigoniaRef.completed >= sigoniaRef.total) {
                            //when all owners have completed, remove the listener so it's not constantly checking for shit
                            battleActions.removeListenerInBattle(battleData,this.listenerName,this.trigger);
                        }
                    },
                    "target": "self",
                    "listenerName": "Sigonia, the Unclaimed Desolation death listener",
                    "owners": [],
                },
            ],
            "buffNames": {
                "critBuff": "Sigonia, the Unclaimed Desolation",
            },
        }
    },
    "Firmament Frontline: Glamoth": {
        "2pc": {
            logic(thisTurn,battleData) {},
            "skillFunctions": {
                statCheck(battleData,currentTurn) {
                    if (!currentTurn.firmamentGlamothDMG1SHEET) {
                        let relicNameRef = "Firmament Frontline: Glamoth";
                        const buffRef = turnLogicRelics[relicNameRef]["2pc"].buffNames;
                        let buffName = buffRef.dmg1;
                        let buffName2 = buffRef.dmg2;
                        let relicPathing = relicSets[relicNameRef].params[0];//0-2pc 1-4pc

                        const buff1 = relicPathing[3];
                        const buff2 = relicPathing[4] - buff1;//I handle this as 2 buffs with the 2nd applying the diff between the two
                        currentTurn.firmamentGlamothDMG1SHEET = {
                            "stats": [DamageAll],
                            [DamageAll]: buff1,
                            "source": relicNameRef,
                            "sourceOwner": currentTurn.properName,
                            "buffName": buffName,
                            "duration": 1,
                            "AVApplied": 0,
                            "maxStacks": 1,
                            "currentStacks": 1,
                            "decay": false,
                            "expireType": null
                        }
                        currentTurn.firmamentGlamothDMG2SHEET = {
                            "stats": [DamageAll],
                            [DamageAll]: buff2,
                            "source": relicNameRef,
                            "sourceOwner": currentTurn.properName,
                            "buffName": buffName2,
                            "duration": 1,
                            "AVApplied": 0,
                            "maxStacks": 1,
                            "currentStacks": 1,
                            "decay": false,
                            "expireType": null
                        }
                    }
                    
                    let buffSheet2 = currentTurn.firmamentGlamothDMG2SHEET;
                    const buffName2 = buffSheet2.buffName;
                    const buffsObject = currentTurn.buffsObject;
                    const updateBuff = battleActions.updateBuff;
                    const buffCheck2 = buffsObject[buffName2];
                    if (currentTurn.SPD >= 160) {//if the target has enough cr for the buff, then we can apply it
                        if (!buffCheck2) {
                            buffSheet2.AVApplied = battleData.sumAV;
                            updateBuff(battleData,currentTurn,buffSheet2);
                        }//if the target already has the buff, skip, no need to "renew" perma buffs like this
                    }
                    else if (buffCheck2) {//but if the target fails the crit check and HAS the buff, then remove it
                        removeBuff(battleData,currentTurn,buffSheet2);
                    }

                    let buffSheet = currentTurn.firmamentGlamothDMG1SHEET;
                    const buffName = buffSheet.buffName;
                    const buffCheck = buffsObject[buffName];
                    if (currentTurn.SPD >= 135) {//if the target has enough cr for the buff, then we can apply it
                        if (!buffCheck) {
                            updateBuff(battleData,currentTurn,buffSheet);
                        }//if the target already has the buff, skip, no need to "renew" perma buffs like this
                    }
                    else if (buffCheck) {//but if the target fails the crit check and HAS the buff, then remove it
                        removeBuff(battleData,currentTurn,buffSheet);
                    }
                }
            },
            "listeners": [
                {
                    "trigger": "UpdateStatSPD",//SPD stat family
                    condition(battleData,generalInfo) {
                        let sourceTurn = generalInfo.sourceTurn;
                        let ownersSlots = this.ownersSlots;
                        let ownerRank = ownersSlots[sourceTurn.name];//setAmount
                        if (!ownerRank) {return;}
                        //TODO: maybe move the entire function call into a this.shit if it gets too costly later
                        //p sure there are a few places I could and probably should do that with
                        const statCheck = this.statCheck ??= turnLogicRelics["Firmament Frontline: Glamoth"]["2pc"].skillFunctions.statCheck;
                        statCheck(battleData,sourceTurn);
                    },
                    "target": "self",
                    "listenerName": "Firmament Frontline: Glamoth SPD check",
                    "owners": []
                },
                {
                    "trigger": "PreBattleEntersCombat",
                    condition(battleData,generalInfo) {
                        let ownerRef = this.owners;

                        if (ownerRef.length) {
                            // let relicPathing = relicSets[relicNameRef].params[0];//0-2pc 1-4pc
                            const statCheck = this.statCheck ??= turnLogicRelics["Firmament Frontline: Glamoth"]["2pc"].skillFunctions.statCheck;
                            const namedTurns = battleData.nameBasedTurns;
                            for (let owner of ownerRef) {
                                let charSlot = owner.slot;
                                let currentTurn = namedTurns[charSlot];
                                statCheck(battleData,currentTurn);
                            }
                        }
                    },
                    "target": "self",
                    "listenerName": "Firmament Frontline: Glamoth battle start stat check trigger",
                    "owners": []
                },
            ],
            "buffNames": {
                "dmg1": "Firmament Frontline: Glamoth (135)",
                "dmg2": "Firmament Frontline: Glamoth (160)",
            },
        }
    },
    "Giant Tree of Rapt Brooding": {
        "2pc": {
            logic(thisTurn,battleData) {},
            "skillFunctions": {
                statCheck(battleData,currentTurn) {
                    if (!currentTurn.treeOfRaptBroodingHEAL1SHEET) {
                        let relicNameRef = "Giant Tree of Rapt Brooding";
                        const buffRef = turnLogicRelics[relicNameRef]["2pc"].buffNames;
                        let buffName = buffRef.dmg1;
                        let buffName2 = buffRef.dmg2;
                        let relicPathing = relicSets[relicNameRef].params[0];//0-2pc 1-4pc

                        const buff1 = relicPathing[3];
                        const buff2 = relicPathing[4] - buff1;//I handle this as 2 buffs with the 2nd applying the diff between the two
                        currentTurn.treeOfRaptBroodingHEAL1SHEET = {
                            "stats": [HealingOutgoing],
                            [HealingOutgoing]: buff1,
                            "source": relicNameRef,
                            "sourceOwner": currentTurn.properName,
                            "buffName": buffName,
                            "duration": 1,
                            "AVApplied": 0,
                            "maxStacks": 1,
                            "currentStacks": 1,
                            "decay": false,
                            "expireType": null
                        }
                        currentTurn.treeOfRaptBroodingHEAL2SHEET = {
                            "stats": [HealingOutgoing],
                            [HealingOutgoing]: buff2,
                            "source": relicNameRef,
                            "sourceOwner": currentTurn.properName,
                            "buffName": buffName2,
                            "duration": 1,
                            "AVApplied": 0,
                            "maxStacks": 1,
                            "currentStacks": 1,
                            "decay": false,
                            "expireType": null
                        }
                    }
                    
                    let buffSheet2 = currentTurn.treeOfRaptBroodingHEAL2SHEET;
                    const buffName2 = buffSheet2.buffName;
                    const buffsObject = currentTurn.buffsObject;
                    const buffCheck2 = buffsObject[buffName2];
                    const memoRef = currentTurn.memospriteEventRef;
                    const SPDFinal = calcs.getSPDFinal(currentTurn.statTable).SPDFinal;
                    const updateBuff = battleActions.updateBuff;
                    //TODO: need memo handling later
                    if (SPDFinal >= 180) {//if the target has enough cr for the buff, then we can apply it
                        if (!buffCheck2) {
                            updateBuff(battleData,currentTurn,buffSheet2);
                            if (memoRef) {updateBuff(battleData,currentTurn[memoRef],buffSheet2);}
                        }//if the target already has the buff, skip, no need to "renew" perma buffs like this
                    }
                    else if (buffCheck2) {//but if the target fails the crit check and HAS the buff, then remove it
                        removeBuff(battleData,currentTurn,buffSheet2);
                        if (memoRef) {removeBuff(battleData,currentTurn[memoRef],buffSheet2);}
                    }

                    let buffSheet = currentTurn.treeOfRaptBroodingHEAL1SHEET;
                    const buffName = buffSheet.buffName;
                    const buffCheck = buffsObject[buffName];
                    if (SPDFinal >= 135) {//if the target has enough cr for the buff, then we can apply it
                        if (!buffCheck) {
                            updateBuff(battleData,currentTurn,buffSheet);
                            if (memoRef) {updateBuff(battleData,currentTurn[memoRef],buffSheet);}
                        }//if the target already has the buff, skip, no need to "renew" perma buffs like this
                    }
                    else if (buffCheck) {//but if the target fails the crit check and HAS the buff, then remove it
                        removeBuff(battleData,currentTurn,buffSheet);
                        if (memoRef) {removeBuff(battleData,currentTurn[memoRef],buffSheet);}
                    }
                }
            },
            "listeners": [
                {
                    "trigger": "UpdateStatSPD",//SPD stat family
                    condition(battleData,generalInfo) {
                        let sourceTurn = generalInfo.sourceTurn;
                        let ownersSlots = this.ownersSlots;
                        let ownerRank = ownersSlots[sourceTurn.name];//setAmount
                        if (!ownerRank) {return;}
                        //TODO: maybe move the entire function call into a this.shit if it gets too costly later
                        //p sure there are a few places I could and probably should do that with
                        const statCheck = this.statCheck ??= turnLogicRelics["Giant Tree of Rapt Brooding"]["2pc"].skillFunctions.statCheck;
                        statCheck(battleData,sourceTurn);
                    },
                    "target": "self",
                    "listenerName": "Giant Tree of Rapt Brooding SPD check",
                    "owners": []
                },
                {
                    "trigger": "PreBattleEntersCombat",
                    condition(battleData,generalInfo) {
                        let ownerRef = this.owners;

                        if (ownerRef.length) {
                            // let relicPathing = relicSets[relicNameRef].params[0];//0-2pc 1-4pc
                            const statCheck = this.statCheck ??= turnLogicRelics["Giant Tree of Rapt Brooding"]["2pc"].skillFunctions.statCheck;
                            const namedTurns = battleData.nameBasedTurns;
                            for (let owner of ownerRef) {
                                let charSlot = owner.slot;
                                let currentTurn = namedTurns[charSlot];
                                statCheck(battleData,currentTurn);
                            }
                        }
                    },
                    "target": "self",
                    "listenerName": "Giant Tree of Rapt Brooding battle start stat check trigger",
                    "owners": []
                },
            ],
            "buffNames": {
                "dmg1": "Giant Tree of Rapt Brooding (135)",
                "dmg2": "Giant Tree of Rapt Brooding (180)",
            },
        }
    },
    "Revelry by the Sea": {
        "2pc": {
            logic(thisTurn,battleData) {},
            "skillFunctions": {
                statCheck(battleData,currentTurn) {
                    if (!currentTurn.revelryByTheSeaDMG1SHEET) {
                        let relicNameRef = "Revelry by the Sea";
                        const buffRef = turnLogicRelics[relicNameRef]["2pc"].buffNames;
                        let buffName = buffRef.dmg1;
                        let buffName2 = buffRef.dmg2;
                        let relicPathing = relicSets[relicNameRef].params[0];//0-2pc 1-4pc

                        const buff1 = relicPathing[3];
                        const buff2 = relicPathing[4] - buff1;//I handle this as 2 buffs with the 2nd applying the diff between the two
                        currentTurn.revelryByTheSeaDMG1SHEET = {
                            "stats": [DamageDOT],
                            [DamageDOT]: buff1,
                            "source": relicNameRef,
                            "sourceOwner": currentTurn.properName,
                            "buffName": buffName,
                            "duration": 1,
                            "AVApplied": 0,
                            "maxStacks": 1,
                            "currentStacks": 1,
                            "decay": false,
                            "expireType": null
                        }
                        currentTurn.revelryByTheSeaDMG2SHEET = {
                            "stats": [DamageDOT],
                            [DamageDOT]: buff2,
                            "source": relicNameRef,
                            "sourceOwner": currentTurn.properName,
                            "buffName": buffName2,
                            "duration": 1,
                            "AVApplied": 0,
                            "maxStacks": 1,
                            "currentStacks": 1,
                            "decay": false,
                            "expireType": null
                        }
                    }
                    
                    let buffSheet2 = currentTurn.revelryByTheSeaDMG2SHEET;
                    const buffName2 = buffSheet2.buffName;
                    const buffsObject = currentTurn.buffsObject;
                    const buffCheck2 = buffsObject[buffName2];
                    const atkFinal = calcs.getATKFinal(currentTurn.statTable).ATKFinal;
                    const updateBuff = battleActions.updateBuff;
                    if (atkFinal >= 3600) {//if the target has enough cr for the buff, then we can apply it
                        if (!buffCheck2) {
                            updateBuff(battleData,currentTurn,buffSheet2);
                        }//if the target already has the buff, skip, no need to "renew" perma buffs like this
                    }
                    else if (buffCheck2) {//but if the target fails the crit check and HAS the buff, then remove it
                        removeBuff(battleData,currentTurn,buffSheet2);
                    }

                    let buffSheet = currentTurn.revelryByTheSeaDMG1SHEET;
                    const buffName = buffSheet.buffName;
                    const buffCheck = buffsObject[buffName];
                    if (atkFinal >= 2400) {//if the target has enough cr for the buff, then we can apply it
                        if (!buffCheck) {
                            updateBuff(battleData,currentTurn,buffSheet);
                        }//if the target already has the buff, skip, no need to "renew" perma buffs like this
                    }
                    else if (buffCheck) {//but if the target fails the crit check and HAS the buff, then remove it
                        removeBuff(battleData,currentTurn,buffSheet);
                    }
                }
            },
            "listeners": [
                {
                    "trigger": "UpdateStatATK",//ATK stat family
                    condition(battleData,generalInfo) {
                        let sourceTurn = generalInfo.sourceTurn;
                        let ownersSlots = this.ownersSlots;
                        let ownerRank = ownersSlots[sourceTurn.name];//setAmount
                        if (!ownerRank) {return;}
                        //TODO: maybe move the entire function call into a this.shit if it gets too costly later
                        //p sure there are a few places I could and probably should do that with
                        const statCheck = this.statCheck ??= turnLogicRelics["Revelry by the Sea"]["2pc"].skillFunctions.statCheck;
                        statCheck(battleData,sourceTurn);
                    },
                    "target": "self",
                    "listenerName": "Revelry by the Sea ATK check",
                    "owners": []
                },
                {
                    "trigger": "PreBattleEntersCombat",
                    condition(battleData,generalInfo) {
                        let ownerRef = this.owners;

                        if (ownerRef.length) {
                            // let relicPathing = relicSets[relicNameRef].params[0];//0-2pc 1-4pc
                            const statCheck = this.statCheck ??= turnLogicRelics["Revelry by the Sea"]["2pc"].skillFunctions.statCheck;
                            const namedTurns = battleData.nameBasedTurns;
                            for (let owner of ownerRef) {
                                let charSlot = owner.slot;
                                let currentTurn = namedTurns[charSlot];
                                statCheck(battleData,currentTurn);
                            }
                        }
                    },
                    "target": "self",
                    "listenerName": "Revelry by the Sea battle start stat check trigger",
                    "owners": []
                },
            ],
            "buffNames": {
                "dmg1": "Revelry by the Sea (2400)",
                "dmg2": "Revelry by the Sea (3600)",
            },
        }
    },
    "The Wondrous BananAmusement Park": {
        "2pc": {
            logic(thisTurn,battleData) {},
            "skillFunctions": {},
            "listeners": [
                {
                    "trigger": "SummonOnFieldAdjustment",
                    condition(battleData,generalInfo) {
                        // poke("SummonOnFieldAdjustment",battleData,{summonWas: "Apply",assignedTo: ownerTurn, summonedBy: ownerTurn, summonEvent: ownerTurn.topazNUMBYTURNEVENT});
                        let ownersSlots = this.ownersSlots;
                        const summonAssignedTo = generalInfo.assignedTo;
                        
                        let ownerRank = ownersSlots[summonAssignedTo.name];//setAmount
                        if (!ownerRank) {return;}//if the summon is assigned to someone who doesn't own the set, then it doesn't matter


                        if (!summonAssignedTo.wondrousBananaCRITDMGSHEET) {
                            let relicNameRef = "The Wondrous BananAmusement Park";
                            const buffRef = this.buffRef ??= turnLogicRelics[relicNameRef]["2pc"].buffNames;
                            let buffName = buffRef.critDmg;
                            let relicPathing = this.relicPathing ??= relicSets[relicNameRef].params[0];//0-2pc 1-4pc
                            // greatTableIndex
                            // greatTableKeys
                            summonAssignedTo.wondrousBananaCRITDMGSHEET = {
                                "stats": [CritDamageBase],
                                [CritDamageBase]: relicPathing[1],
                                "source": relicNameRef,
                                "sourceOwner": summonAssignedTo.properName,
                                "buffName": buffName,
                                "duration": 1,
                                "AVApplied": 0,
                                "maxStacks": 1,
                                "currentStacks": 1,
                                "decay": false,
                                "expireType": null,
                            }
                        }
                        
                        let buffSheet = summonAssignedTo.wondrousBananaCRITDMGSHEET;
                        const buffName = buffSheet.buffName;
                        const buffCheck = summonAssignedTo.buffsObject[buffName];

                        const addedOrRemoved = generalInfo.summonWas;
                        if (addedOrRemoved === "Apply") {
                            if (buffCheck) {return;}//if the buff already exists, abort
                            battleActions.updateBuff(battleData,summonAssignedTo,buffSheet);
                        }
                        else if (addedOrRemoved === "Remove" && buffCheck) {//only remove the buff if it already existed
                            removeBuff(battleData,summonAssignedTo,buffSheet);
                        }
                    },
                    "target": "self",
                    "listenerName": "The Wondrous BananAmusement Park summon listener",
                    "owners": []
                },
            ],
            "buffNames": {
                "critDmg": "The Wondrous BananAmusement Park"
            },
        }
    },
    "Arcadia of Woven Dreams": {
        "2pc": {
            logic(thisTurn,battleData) {},
            "skillFunctions": {},
            "listeners": [
                {
                    "trigger": "SummonOnFieldAdjustment",
                    condition(battleData,generalInfo) {
                        // poke("SummonOnFieldAdjustment",battleData,{summonWas: "Apply",assignedTo: ownerTurn, summonedBy: ownerTurn, summonEvent: ownerTurn.topazNUMBYTURNEVENT});
                        let ownersSlots = this.ownersSlots;

                        const alliesOnField = battleData.allyPositions.length;
                        //so we don't actually care what kind of ally was added, we just care about the present allies on the field, when a summon change happens

                        const amountDiff = 4-alliesOnField;
                        const totalDiff = amountDiff<0 ? amountDiff * -1 : amountDiff;
                        const diffOwner = Math.min(4,totalDiff);
                        const diffMemo = Math.min(3,totalDiff);


                        if (!this.arcadiaDreamsOwnerDMGSHEET) {
                            let relicNameRef = "Arcadia of Woven Dreams";
                            const buffRef = this.buffRef ??= turnLogicRelics[relicNameRef]["2pc"].buffNames;
                            let buffName = buffRef.dmgStack;
                            let relicPathing = this.relicPathing ??= relicSets[relicNameRef].params[0];//0-2pc 1-4pc
                            this.arcadiaDreamsOwnerDMGSHEET = {
                                "stats": [DamageAll],
                                [DamageAll]: relicPathing[0],
                                "source": relicNameRef,
                                "sourceOwner": "",
                                "buffName": buffName,
                                "duration": 1,
                                "AVApplied": 0,
                                "maxStacks": 4,
                                "currentStacks": 1,
                                "decay": false,
                                "expireType": null
                            }
                            this.arcadiaDreamsMemoDMGSHEET = {
                                "stats": [DamageAll],
                                [DamageAll]: relicPathing[1],
                                "source": relicNameRef,
                                "sourceOwner": "",
                                "buffName": buffName,
                                "duration": 1,
                                "AVApplied": 0,
                                "maxStacks": 3,
                                "currentStacks": 1,
                                "decay": false,
                                "expireType": null
                            }
                        }
                        
                        const buffSheet = this.arcadiaDreamsOwnerDMGSHEET;
                        
                        buffSheet.currentStacks = diffOwner;
                        const buffName1 = buffSheet.buffName;
                        const buffSheet2 = this.arcadiaDreamsMemoDMGSHEET;
                        buffSheet2.currentStacks = diffMemo;
                        const buffName2 = buffSheet2.buffName;

                        const updateBuff = battleActions.updateBuff;
                        const namedTurns = battleData.nameBasedTurns;
                        for (let slots in ownersSlots) {
                            const currentOwner = namedTurns[slots];
                            const ownerName = currentOwner.properName;
                            buffSheet.sourceOwner = ownerName;
                            buffSheet2.sourceOwner = ownerName;

                            
                            const buffCheck = currentOwner.buffsObject[buffName1];
                            if (buffCheck) {
                                if (buffCheck.currentStacks != diffOwner) {
                                    removeBuff(battleData,currentOwner,buffSheet,true);
                                    if (diffOwner) {updateBuff(battleData,currentOwner,buffSheet);}
                                }
                            }
                            else if (diffOwner) {updateBuff(battleData,currentOwner,buffSheet);}

                            const memoRef = currentOwner.memospriteEventRef;
                            if (memoRef) {
                                const memoTurn = currentOwner[memoRef];
                                const buffCheck = memoTurn.buffsObject[buffName2];

                                if (buffCheck) {
                                    if (buffCheck.currentStacks != diffMemo) {
                                        removeBuff(battleData,memoTurn,buffSheet2,true);
                                        if (diffMemo) {updateBuff(battleData,memoTurn,buffSheet2);}
                                    }
                                }
                                else if (diffMemo) {updateBuff(battleData,memoTurn,buffSheet2);}
                            }
                        }
                        //TODO: possibly move the logic into a function, both of these are identical listeners
                    },
                    "target": "self",
                    "listenerName": "Arcadia of Woven Dreams allies change listener",
                    "owners": []
                },
                {
                    "trigger": "PreBattleEntersCombat",
                    condition(battleData,generalInfo) {
                        // poke("SummonOnFieldAdjustment",battleData,{summonWas: "Apply",assignedTo: ownerTurn, summonedBy: ownerTurn, summonEvent: ownerTurn.topazNUMBYTURNEVENT});
                        let ownersSlots = this.ownersSlots;

                        const alliesOnField = battleData.allyPositions.length;
                        // console.log(alliesOnField)

                        const amountDiff = 4-alliesOnField;
                        const totalDiff = amountDiff<0 ? amountDiff * -1 : amountDiff;
                        const diffOwner = Math.min(4,totalDiff);
                        const diffMemo = Math.min(3,totalDiff);


                        if (!this.arcadiaDreamsOwnerDMGSHEET) {
                            let relicNameRef = "Arcadia of Woven Dreams";
                            const buffRef = this.buffRef ??= turnLogicRelics[relicNameRef]["2pc"].buffNames;
                            let buffName = buffRef.dmgStack;
                            let relicPathing = this.relicPathing ??= relicSets[relicNameRef].params[0];//0-2pc 1-4pc
                            this.arcadiaDreamsOwnerDMGSHEET = {
                                "stats": [DamageAll],
                                [DamageAll]: relicPathing[0],
                                "source": relicNameRef,
                                "buffName": buffName,
                                "duration": 1,
                                "AVApplied": 0,
                                "maxStacks": 4,
                                "currentStacks": 1,
                                "decay": false,
                                "expireType": null
                            }
                            this.arcadiaDreamsMemoDMGSHEET = {
                                "stats": [DamageAll],
                                [DamageAll]: relicPathing[1],
                                "source": relicNameRef,
                                "buffName": buffName,
                                "duration": 1,
                                "AVApplied": 0,
                                "maxStacks": 3,
                                "currentStacks": 1,
                                "decay": false,
                                "expireType": null
                            }
                        }
                        
                        const buffSheet = this.arcadiaDreamsOwnerDMGSHEET;
                        
                        buffSheet.currentStacks = diffOwner;
                        const buffName1 = buffSheet.buffName;
                        const buffSheet2 = this.arcadiaDreamsMemoDMGSHEET;
                        buffSheet2.currentStacks = diffMemo;
                        const buffName2 = buffSheet2.buffName;

                        const updateBuff = battleActions.updateBuff;
                        const namedTurns = battleData.nameBasedTurns;
                        for (let slots in ownersSlots) {
                            const currentOwner = namedTurns[slots];
                            const ownerName = currentOwner.properName;
                            buffSheet.sourceOwner = ownerName;
                            buffSheet2.sourceOwner = ownerName;
                            
                            const buffCheck = currentOwner.buffsObject[buffName1];
                            if (buffCheck) {
                                if (buffCheck.currentStacks != diffOwner) {
                                    removeBuff(battleData,currentOwner,buffSheet,true);
                                    if (diffOwner) {updateBuff(battleData,currentOwner,buffSheet);}
                                }
                            }
                            else if (diffOwner) {updateBuff(battleData,currentOwner,buffSheet);}

                            const memoRef = currentOwner.memospriteEventRef;
                            if (memoRef) {
                                const memoTurn = currentOwner[memoRef];
                                const buffCheck = memoTurn.buffsObject[buffName2];

                                if (buffCheck) {
                                    if (buffCheck.currentStacks != diffMemo) {
                                        removeBuff(battleData,memoTurn,buffSheet2,true);
                                        if (diffMemo) {updateBuff(battleData,memoTurn,buffSheet2);}
                                    }
                                }
                                else if (diffMemo) {updateBuff(battleData,memoTurn,buffSheet2);}
                            }
                        }
                    },
                    "target": "self",
                    "listenerName": "Arcadia of Woven Dreams allies change listener",
                    "owners": []
                },
            ],
            "buffNames": {
                "dmgStack": "Arcadia of Woven Dreams"
            },
        }
    },
    "Amphoreus, The Eternal Land": {
        "2pc": {
            logic(thisTurn,battleData) {},
            "skillFunctions": {},
            "listeners": [
                {
                    "trigger": "SummonOnFieldAdjustment",
                    condition(battleData,generalInfo) {
                        // poke("SummonOnFieldAdjustment",battleData,{summonWas: "Apply",assignedTo: ownerTurn, summonedBy: ownerTurn, summonEvent: ownerTurn.topazNUMBYTURNEVENT});
                        let ownersSlots = this.ownersSlots;
                        const summonAssignedTo = generalInfo.assignedTo;
                        
                        let ownerRank = ownersSlots[summonAssignedTo.name];//setAmount
                        if (!ownerRank) {return;}//if the summon is assigned to someone who doesn't own the set, then it doesn't matter


                        if (!summonAssignedTo.amphoreusEternalSPDSHEET) {
                            let relicNameRef = "Amphoreus, The Eternal Land";
                            const buffName = this.buffName ??= turnLogicRelics[relicNameRef]["2pc"].buffNames.spd;
                            let relicPathing = this.relicPathing ??= relicSets[relicNameRef].params[0];//0-2pc 1-4pc
                            summonAssignedTo.amphoreusEternalSPDSHEET = {
                                "stats": [SPDP],
                                [SPDP]: relicPathing[0],
                                "source": relicNameRef,
                                "sourceOwner": summonAssignedTo.properName,
                                "buffName": buffName,
                                "duration": 1,
                                "AVApplied": 0,
                                "maxStacks": 1,
                                "currentStacks": 1,
                                "decay": false,
                                "expireType": null
                            }
                        }
                        
                        let buffSheet = summonAssignedTo.amphoreusEternalSPDSHEET;
                        const buffName = buffSheet.buffName;
                        const buffCheck = summonAssignedTo.buffsObject[buffName];

                        const namedTurns = battleData.nameBasedTurns;
                        const currentActiveMemosprites = summonAssignedTo.activeMemosprites;

                        const updateBuff = battleActions.updateBuff;
                        if (currentActiveMemosprites) {
                            if (buffCheck) {return;}//if the buff already exists, abort
                            // updateBuff(battleData,summonAssignedTo,buffSheet);

                            for (let entitySlot in namedTurns) {
                                const currentEntity = namedTurns[entitySlot];
                                //this buff functions as zone based buff, applying to all allies that exist or not, so long as the condition is met.

                                updateBuff(battleData,currentEntity,buffSheet);
                            }

                        }
                        else if (!currentActiveMemosprites && buffCheck) {//only remove the buff if it already existed
                            // removeBuff(battleData,summonAssignedTo,buffSheet);

                            for (let entitySlot in namedTurns) {
                                const currentEntity = namedTurns[entitySlot];
                                //this buff functions as zone based buff, applying to all allies that exist or not, so long as the condition is met.

                                removeBuff(battleData,currentEntity,buffSheet);
                            }
                        }
                    },
                    "target": "self",
                    "listenerName": "Amphoreus, The Eternal Land memo creation/death listener",
                    "owners": []
                },
            ],
            "buffNames": {
                "spd": "Amphoreus, The Eternal Land"
            },
        }
    },
}