// const currentWave = generalInfo.currentWave;
// if (currentWave != 1) {return;}
const turnLogicLightcones = {
    // const customName = `${buffName} (${sourceTurn.properName})`;
    // if (!buffNames[customName]) {buffNames[customName] = customName;}

    // "buffNamesPerCharacter": {
    //     "buff1": "Routed",
    // }


    //HUNT HOONT HOONTER
        //5star
    "The Hell Where Ideals Burn": {//REDONE
        logic(thisTurn,battleData) {},
        "skillFunctions": {},
        "listeners": [
            {
                "trigger": "PassiveCalls",
                condition(battleData,generalInfo) {
                    let ownerRef = this.owners;

                    const namedTurns = battleData.nameBasedTurns;
                    const subListeners = this.subListeners;
                    const ownersSlots = this.ownersSlots

                    for (let owner of ownerRef) {
                        let charSlot = owner.slot;
                        let currentTurn = namedTurns[charSlot];

                        addListenerWithPriority(battleData,subListeners[0],subListeners[0].trigger,currentTurn,ownersSlots);
                    }
                },
                "target": "self",
                "listenerName": "The Hell Where Ideals Burn listener setup",
                "owners": [],
                "subListeners": [
                    {
                        "trigger": "AbilityEnd",
                        condition(battleData,generalInfo) {
                            const action = generalInfo.action;
                            if (action != "Skill") {return;}
        
                            let sourceTurn = generalInfo.sourceTurn;
        
                            if (!sourceTurn.whereIdealsBurnSTACKSHEET) {
                                let ownersSlots = this.ownersSlots;
                                let ownerRank = ownersSlots[sourceTurn.name];

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
                                    "durationInTurn": null,
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
                            
                            updateBuff(battleData,sourceTurn,buffSheet);
        
                            if (sourceTurn.buffsObject[buffName].currentStacks === 4) {
                                removeListener(battleData,this,sourceTurn);
                            }
                        },
                        "target": "self",
                        "isPersonal": true,
                        "listenerName": "The Hell Where Ideals Burn - ATK% Stack - Hrunting Stack",
                    },
                ]
            },
            {
                "trigger": "WaveStart",
                condition(battleData,generalInfo) {
                    const currentWave = generalInfo.currentWave;
                    if (currentWave != 1) {return;}

                    const skillPointsValid = battleData.battleTable.SPMax >= 6;

                    if (skillPointsValid) {
                        let ownerRef = this.owners;//would apply at the start to any and all owners, each, hence owners instead of ownersSlots
                        let lcNameRef = "The Hell Where Ideals Burn";
                        let lcPathing = lightcones[lcNameRef].params;

                        let buffSheet = this.buffSheet ??= {
                            "stats": [ATKP],
                            [ATKP]: 0,
                            "source": lcNameRef,
                            "sourceOwner": "",
                            "buffName": turnLogicLightcones[lcNameRef].buffNames.hruntingStart,
                            "durationInTurn": null,
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
                    }
                },
                "target": "self",
                "priority": -80,
                "listenerName": "The Hell Where Ideals Burn - ATK% - Hrunting",
                "owners": [],
            },
            
        ],
        "buffNames": {
            "hruntingStart": "Hrunting",
            "hruntingStack": "Hrunting Stack"
        },
    },
    "Baptism of Pure Thought": {//REDONE
        logic(thisTurn,battleData) {},
        "skillFunctions": {},
        "listeners": [
            {
                "trigger": "PassiveCalls",
                condition(battleData,generalInfo) {
                    let ownerRef = this.owners;

                    const namedTurns = battleData.nameBasedTurns;
                    const subListeners = this.subListeners;
                    const ownersSlots = this.ownersSlots

                    for (let owner of ownerRef) {
                        let charSlot = owner.slot;
                        let currentTurn = namedTurns[charSlot];

                        addListenerWithPriority(battleData,subListeners[0],subListeners[0].trigger,currentTurn,ownersSlots);
                        addListenerWithPriority(battleData,subListeners[1],subListeners[1].trigger,currentTurn,ownersSlots);
                    }
                },
                "target": "self",
                "listenerName": "Baptism of Pure Thought listener setup",
                "owners": [],
                "subListeners": [
                    {
                        "trigger": "AllyDMGStart",
                        condition(battleData,generalInfo) {
                            // let ownerRef = this.owners;
                            
                            const sourceTurn = generalInfo.sourceTurn;
                            const targetTurn = generalInfo.targetTurn;
        
                            //TODO: sort of a weird scenario we have here is that multiple things monitor ally dmg start lol, so
                            //depending on when this check fires, it might miss debuffs, but the game may actually work like this
                            //since the listener doesn't actually have a priority level assigned
                            
                            const buffName = this.buffName ??= turnLogicLightcones["Baptism of Pure Thought"].buffNames.buff1;
        
                            const debuffsCount = Math.min(3,targetTurn.debuffCounter);
                            const buffCheck = sourceTurn.buffsObject[buffName];
        
                            if (buffCheck) {//if the buff exists
                                const currentStacks = buffCheck.currentStacks;
                                if (currentStacks === debuffsCount) {return;}//if we have max stacks already, abort
                                else if (!debuffsCount) {//and we have no debuffs, then remove and abort
                                    removeBuff(battleData,sourceTurn,buffCheck);
                                    return
                                }
                                else if (currentStacks < debuffsCount) {//but if we have less than total, add the amount diff
                                    const stackDiff = debuffsCount - currentStacks;
                                    const buffSheet = sourceTurn.baptismOfPureThoughCRITSHEET;
                                    buffSheet.currentStacks = stackDiff;
                                    updateBuff(battleData,sourceTurn,buffSheet);
                                    return;
                                }
                                else {//but if we have more than we should, remove without triggering so we can apply it later
                                    removeBuff(battleData,sourceTurn,buffCheck,true,null,false,true);
                                    const buffSheet = sourceTurn.baptismOfPureThoughCRITSHEET;
                                    buffSheet.currentStacks = debuffsCount;
                                    updateBuff(battleData,sourceTurn,buffSheet);
                                }
        
                                
                            }
                            else if (!buffCheck) {//otherwise, if the buff isn't applied yet, then add it
                                if (!sourceTurn.baptismOfPureThoughCRITSHEET) {
                                    const ownersSlots = this.ownersSlots;
                                    const ownerRank = ownersSlots[sourceTurn.name];

                                    const lcNameRef = "Baptism of Pure Thought";
                                    const lcPathing = lightcones[lcNameRef].params;
                                    const rankParams = lcPathing[ownerRank-1];
        
                                    sourceTurn.baptismOfPureThoughCRITSHEET = {
                                        "stats": [CritDamageBase],
                                        [CritDamageBase]: rankParams[1],
                                        "source": lcNameRef,
                                        "sourceOwner": sourceTurn.properName,
                                        "buffName": buffName,
                                        "durationInTurn": null,
                                        "duration": 1,
                                        "AVApplied": 0,
                                        "maxStacks": 3,
                                        "currentStacks": 1,
                                        "decay": false,
                                        "expireType": null,
                                        "actionTags": ["All"],
                                    }
                                }

                                if (!debuffsCount) {return;}
                                
                                const buffSheet = sourceTurn.baptismOfPureThoughCRITSHEET;
                                buffSheet.currentStacks = debuffsCount;
                                updateBuff(battleData,sourceTurn,buffSheet);
                            }
                        },
                        "target": "self",
                        "isPersonal": true,
                        "listenerName": "Baptism of Pure Thought - debuff counter",
                    },
                    {
                        "trigger": "AbilityStart",
                        condition(battleData,generalInfo) {
                            const action = generalInfo.action;
                            if (action != "Ultimate") {return;}

                            const isAttack = generalInfo.isAttack;
                            if (!isAttack) {return;}//the ult has to have attack targets

                            let sourceTurn = generalInfo.sourceTurn;
        
                            if (!sourceTurn.baptismOfPureThoughDISPSHEET) {
                                let ownersSlots = this.ownersSlots;
                                let charSlot = sourceTurn.name;
                                let ownerRank = ownersSlots[charSlot];

                                let lcNameRef = "Baptism of Pure Thought";
                                let lcPathing = lightcones[lcNameRef].params;
                                let rankParams = lcPathing[ownerRank-1];
                                
                                sourceTurn.baptismOfPureThoughDISPSHEET = {
                                    "stats": [DamageAll],
                                    [DamageAll]: rankParams[3],
                                    "source": lcNameRef,
                                    "sourceOwner": sourceTurn.properName,
                                    "buffName": turnLogicLightcones[lcNameRef].buffNames.buff2,
                                    "durationInTurn": 3,
                                    "duration": 2,
                                    "AVApplied": 0,
                                    "maxStacks": 1,
                                    "currentStacks": 1,
                                    "decay": false,
                                    "expireType": "EndTurn",
                                }
                                sourceTurn.baptismOfPureThoughDISPSHEETFUA = {
                                    "stats": [DEFShredAll],
                                    [DEFShredAll]: rankParams[4],
                                    "source": lcNameRef,
                                    "sourceOwner": sourceTurn.properName,
                                    "buffName": turnLogicLightcones[lcNameRef].buffNames.buff2FUA,
                                    "durationInTurn": 3,
                                    "duration": 2,
                                    "AVApplied": 0,
                                    "maxStacks": 1,
                                    "currentStacks": 1,
                                    "decay": false,
                                    "expireType": "EndTurn",
                                    "actionTags": ["FUA"],
                                }
                            }
                            let buffSheet = sourceTurn.baptismOfPureThoughDISPSHEET;
                            let buffSheet2 = sourceTurn.baptismOfPureThoughDISPSHEETFUA;
                            updateBuff(battleData,sourceTurn,buffSheet);
                            updateBuff(battleData,sourceTurn,buffSheet2);
                        },
                        "target": "self",
                        "isPersonal": true,
                        "listenerName": "Baptism of Pure Thought - ult start listener",
                    },
                ]
            },
        ],
        "buffNames": {
            "buff1": "Baptism of Pure Thought (Crit DMG)",
            "buff2": "Disputation (LC)",
            "buff2FUA": "Disputation FUA (LC)"
        },
    },
    "I Venture Forth to Hunt": {//REDONE
        logic(thisTurn,battleData) {},
        "skillFunctions": {},
        "listeners": [
            {
                "trigger": "PassiveCalls",
                condition(battleData,generalInfo) {
                    let ownerRef = this.owners;

                    const namedTurns = battleData.nameBasedTurns;
                    const subListeners = this.subListeners;
                    const ownersSlots = this.ownersSlots

                    for (let owner of ownerRef) {
                        let charSlot = owner.slot;
                        let currentTurn = namedTurns[charSlot];

                        addListenerWithPriority(battleData,subListeners[0],subListeners[0].trigger,currentTurn,ownersSlots);
                        addListenerWithPriority(battleData,subListeners[1],subListeners[1].trigger,currentTurn,ownersSlots);
                    }
                },
                "target": "self",
                "listenerName": "I Venture Forth to Hunt listener setup",
                "owners": [],
                "subListeners": [
                    {
                        "trigger": "AttackStart",
                        condition(battleData,generalInfo) {
                            // let ownerRef = this.owners;
        
                            let isFUA = false;
                            const actionTags = generalInfo.ATKObject.actionTags;
                            for (let tag of actionTags) {
                                if (tag === "FUA") {
                                    isFUA = true;
                                    break;
                                }
                            }
                            if (!isFUA) {return;}

                            const sourceTurn = generalInfo.sourceTurn;
                            
                            const buffName = this.buffName ??= turnLogicLightcones["I Venture Forth to Hunt"].buffNames.buff1;
                            const buffCheck = sourceTurn.buffsObject[buffName];
        
                            if (buffCheck) {//if the buff exists
                                const currentStacks = buffCheck.currentStacks;
                                if (currentStacks === 2) {return;}//if we have max stacks already, abort
                                else if (currentStacks < 2) {//but if we have less than total, add the amount diff
                                    // const stackDiff = debuffsCount - currentStacks;
                                    const buffSheet = sourceTurn.ventureForthToHuntSHREDSHEET;
                                    updateBuff(battleData,sourceTurn,buffSheet);
                                    return;
                                }
                            }
                            else if (!buffCheck) {//otherwise, if the buff isn't applied yet, then add it
                                if (!sourceTurn.ventureForthToHuntSHREDSHEET) {
                                    const ownersSlots = this.ownersSlots;
                                    const ownerRank = ownersSlots[sourceTurn.name];
                                    const lcNameRef = "I Venture Forth to Hunt";
                                    const lcPathing = lightcones[lcNameRef].params;
                                    const rankParams = lcPathing[ownerRank-1];
        
                                    sourceTurn.ventureForthToHuntSHREDSHEET = {//TODO: long time ago I had set up decay functions for shit like this, go back and get it hooked up
                                        "stats": [DEFShredAll],
                                        [DEFShredAll]: rankParams[1],
                                        "source": lcNameRef,
                                        "sourceOwner": sourceTurn.properName,
                                        "buffName": buffName,
                                        "durationInTurn": null,
                                        "duration": 1,
                                        "AVApplied": 0,
                                        "maxStacks": 2,
                                        "currentStacks": 1,
                                        "decay": false,
                                        "expireType": null,
                                        "actionTags": ["Ultimate"],
                                    }
                                }
                                
                                const buffSheet = sourceTurn.ventureForthToHuntSHREDSHEET;
                                updateBuff(battleData,sourceTurn,buffSheet);
                            }
                        },
                        "target": "self",
                        "isPersonal": true,
                        "listenerName": "I Venture Forth to Hunt - FUA listener",
                    },
                    {
                        "trigger": "ActionEndPhase",
                        condition(battleData,generalInfo) {
                            // let ownerRef = this.owners;
                            let sourceTurn = generalInfo.sourceTurn;
                            const buffSheet = sourceTurn.ventureForthToHuntSHREDSHEET;
                            if (!buffSheet) {return;}
        
                            const buffCheck = sourceTurn.buffsObject[buffSheet.buffName];
        
                            if (buffCheck) {
                                const currentStacks = buffCheck.currentStacks;
        
                                if (currentStacks === 1) {
                                    removeBuff(battleData,sourceTurn,buffCheck);
                                }
                                else {//if we're at 2 stacks, remove it and apply 1 stack
                                    buffSheet.currentStacks = -1;
                                    updateBuff(battleData,sourceTurn,buffSheet);
                                }
                            }
                        },
                        "target": "self",
                        "isPersonal": true,
                        "listenerName": "I Venture Forth to Hunt - end turn listener",
                    },
                ]
            },
        ],
        "buffNames": {
            "buff1": "Luminflux (LC)",
        },
    },
    "In the Night": {//REDONE
        logic(thisTurn,battleData) {},
        "skillFunctions": {
            statCheck(battleData,currentTurn) {
                const SPDFinal = calcs.getSPDFinal(currentTurn.statTable).SPDFinal;

                const minSPD = 100;
                const usableSPD = Math.max(0,SPDFinal - minSPD);
                const validStacks = Math.floor(usableSPD/10);

                currentTurn.lcIntotheNightTOTALSTACKCOUNT = validStacks;
            }
        },
        "listeners": [
            {
                "trigger": "PassiveCalls",
                condition(battleData,generalInfo) {
                    let ownerRef = this.owners;

                    const namedTurns = battleData.nameBasedTurns;
                    const subListeners = this.subListeners;
                    const ownersSlots = this.ownersSlots;

                    const statCheck = this.statCheck ??= turnLogicLightcones["In the Night"].skillFunctions.statCheck;
                    //this is a kinda dumb one bc it's not listening to SPD change, it actually just checks spd EVERY TIME you deal dmg to a target, in any way
                    //however that's dumb as hell for us to do checking that every time, so we compile on spd changes and store it until updated again

                    for (let owner of ownerRef) {
                        let charSlot = owner.slot;
                        let currentTurn = namedTurns[charSlot];

                        statCheck(battleData,currentTurn,ownersSlots);

                        addListenerWithPriority(battleData,subListeners[0],subListeners[0].trigger,currentTurn,ownersSlots);
                        addListenerWithPriority(battleData,subListeners[1],subListeners[1].trigger,currentTurn,ownersSlots);
                    }
                },
                "target": "self",
                "listenerName": "In the Night listener setup",
                "owners": [],
                "subListeners": [
                    {
                        "trigger": "UpdateStatSPD",//SPD stat family
                        condition(battleData,generalInfo) {
                            let sourceTurn = generalInfo.sourceTurn;
        
                            const statCheck = this.statCheck ??= turnLogicLightcones["In the Night"].skillFunctions.statCheck;
                            statCheck(battleData,sourceTurn);
                        },
                        "target": "self",
                        "isPersonal": true,
                        "listenerName": "In the Night SPD check",
                    },
                    {
                        "trigger": "AllyDMGStart",
                        condition(battleData,generalInfo) {
                            let sourceTurn = generalInfo.sourceTurn;

                            let isValidUlt = false;
                            let isValidBasicSkill = false;
                            const actionTags = generalInfo.ATKObject.actionTags ?? [];
                            for (let tag of actionTags) {
                                if (tag === "Ultimate") {
                                    isValidUlt = true;
                                }
                                else if (tag === "Skill" || tag === "Basic") {
                                    isValidBasicSkill = true;
                                }
                            }
                            // if (!isValid) {return;}

                            const SPDStacks = sourceTurn.lcIntotheNightTOTALSTACKCOUNT ?? 0;

                            if (!sourceTurn.lcPerfectTimingERToHealingSHEET) {
                                let ownersSlots = this.ownersSlots;
                                let ownerRank = ownersSlots[sourceTurn.name];
                                let lcNameRef = "In the Night";
                                let lcPathing = lightcones[lcNameRef].params;
                                let rankParams = lcPathing[ownerRank-1];
            
                                sourceTurn.lcIntoTheNightSKILLBASICSHEET = {
                                    "stats": [DamageAll],
                                    [DamageAll]: rankParams[2],
                                    "source": lcNameRef,
                                    "sourceOwner": sourceTurn.properName,
                                    "buffName": turnLogicLightcones[lcNameRef].buffNames.buff1,
                                    "durationInTurn": null,
                                    "duration": 1,
                                    "AVApplied": 0,
                                    "maxStacks": 6,
                                    "currentStacks": 1,
                                    "decay": false,
                                    "expireType": null,
                                    "actionTags": ["All"]
                                }
                                sourceTurn.lcIntoTheNightULTIMATESHEET = {
                                    "stats": [CritDamageBase],
                                    [CritDamageBase]: rankParams[3],
                                    "source": lcNameRef,
                                    "sourceOwner": sourceTurn.properName,
                                    "buffName": turnLogicLightcones[lcNameRef].buffNames.buff2,
                                    "durationInTurn": null,
                                    "duration": 1,
                                    "AVApplied": 0,
                                    "maxStacks": 6,
                                    "currentStacks": 1,
                                    "decay": false,
                                    "expireType": null,
                                    "actionTags": ["All"]
                                }
                            }
                            let buffSheet = sourceTurn.lcIntoTheNightSKILLBASICSHEET;
                            let buffSheet2 = sourceTurn.lcIntoTheNightULTIMATESHEET;

                            const buffsRef = sourceTurn.buffsObject;
                            const buffCheck1 = buffsRef[buffSheet.buffName];
                            const buffCheck2 = buffsRef[buffSheet2.buffName];

                            if (isValidBasicSkill) {
                                if (buffCheck1) {
                                    const currentStacks = buffCheck1.currentStacks;
                                    if (currentStacks != SPDStacks) {
                                        const stackDiff = SPDStacks - currentStacks;
                                        if (-stackDiff === currentStacks) {
                                            removeBuff(battleData,sourceTurn,buffCheck1);
                                        }
                                        else {
                                            buffSheet.currentStacks = stackDiff;
                                            updateBuff(battleData,sourceTurn,buffSheet);
                                        }
                                    }
                                }
                                else {
                                    buffSheet.currentStacks = SPDStacks;
                                    updateBuff(battleData,sourceTurn,buffSheet);
                                }
                            }
                            else if (buffCheck1) {
                                removeBuff(battleData,sourceTurn,buffCheck1);
                            }

                            if (isValidUlt) {
                                if (buffCheck2) {
                                    const currentStacks = buffCheck2.currentStacks;
                                    if (currentStacks != SPDStacks) {
                                        const stackDiff = SPDStacks - currentStacks;
                                        if (-stackDiff === currentStacks) {
                                            removeBuff(battleData,sourceTurn,buffCheck2);
                                        }
                                        else {
                                            buffSheet2.currentStacks = stackDiff;
                                            updateBuff(battleData,sourceTurn,buffSheet2);
                                        }
                                    }
                                }
                                else {
                                    buffSheet2.currentStacks = SPDStacks;
                                    updateBuff(battleData,sourceTurn,buffSheet2);
                                }
                            }
                            else if (buffCheck2) {
                                removeBuff(battleData,sourceTurn,buffCheck2);
                            }
                        },
                        "target": "self",
                        "isPersonal": true,
                        "listenerName": "In the Night DMG check",
                    },
                ]
            },
        ],
        "buffNames": {
            "buff1": "In the Night (LC)",
            "buff2": "In the Night [ULT] (LC)",
        },
    },
    "Sailing Towards a Second Life": {//REDONE
        logic(thisTurn,battleData) {},
        "skillFunctions": {
            statCheck(battleData,currentTurn,ownersSlots) {
                let ownerRank = ownersSlots[currentTurn.name];

                if (!currentTurn.lsSailingTowardsSecondSPDSHEET) {
                    let lcNameRef = "Sailing Towards a Second Life";
                    let lcPathing = lightcones[lcNameRef].params;
                    let rankParams = lcPathing[ownerRank-1];

                    currentTurn.lsSailingTowardsSecondSPDSHEET = {
                        "stats": [SPDP],
                        [SPDP]: rankParams[3],
                        "source": lcNameRef,
                        "sourceOwner": currentTurn.properName,
                        "buffName": turnLogicLightcones[lcNameRef].buffNames.buff2,
                        "durationInTurn": null,
                        "duration": 1,
                        "AVApplied": 0,
                        "maxStacks": 1,
                        "currentStacks": 1,
                        "decay": false,
                        "expireType": null,
                    }
                }
                let buffSheet2 = currentTurn.lsSailingTowardsSecondSPDSHEET;
                const buffName = buffSheet2.buffName;
                const buffsRef = currentTurn.buffsObject;
                const buffCheck = buffsRef[buffName];

                const breakFinal = currentTurn.statTable[DamageBreak];

                const threshold = 1.5;
                const hasEnough = breakFinal >= threshold;

                if (buffCheck) {
                    if (hasEnough) {return;}
                    else {
                        removeBuff(battleData,currentTurn,buffSheet2);
                    }
                }
                else if (hasEnough) {
                    updateBuff(battleData,currentTurn,buffSheet2);
                }
            }
        },
        "listeners": [
            {
                "trigger": "PassiveCalls",
                condition(battleData,generalInfo) {
                    let ownerRef = this.owners;

                    const namedTurns = battleData.nameBasedTurns;
                    const subListeners = this.subListeners;
                    const ownersSlots = this.ownersSlots

                    for (let owner of ownerRef) {
                        let charSlot = owner.slot;
                        let currentTurn = namedTurns[charSlot];

                        addListenerWithPriority(battleData,subListeners[0],subListeners[0].trigger,currentTurn,ownersSlots);

                        if (!currentTurn.lsSailingTowardsSecondSHREDSHEET) {
                            let lcNameRef = "Sailing Towards a Second Life";
                            let lcPathing = lightcones[lcNameRef].params;
                            const ownerRank = ownersSlots[currentTurn.name];
                            let rankParams = lcPathing[ownerRank-1];
        
                            currentTurn.lsSailingTowardsSecondSHREDSHEET = {
                                "stats": [DEFShredBreak],
                                [DEFShredBreak]: rankParams[2],
                                "source": lcNameRef,
                                "sourceOwner": currentTurn.properName,
                                "buffName": turnLogicLightcones[lcNameRef].buffNames.buff1,
                                "durationInTurn": null,
                                "duration": 1,
                                "AVApplied": 0,
                                "maxStacks": 1,
                                "currentStacks": 1,
                                "decay": false,
                                "expireType": null
                            }
                        }
                        const buffSheet = currentTurn.lsSailingTowardsSecondSHREDSHEET;
                        updateBuff(battleData,currentTurn,buffSheet);
                    }
                },
                "target": "self",
                "listenerName": "Sailing Towards a Second Life listener setup",
                "owners": [],
                "subListeners": [
                    {
                        "trigger": "UpdateStatBreak",//SPD stat family
                        condition(battleData,generalInfo) {
                            let sourceTurn = generalInfo.sourceTurn;
                            let ownersSlots = this.ownersSlots;
        
                            const statCheck = this.statCheck ??= turnLogicLightcones["Sailing Towards a Second Life"].skillFunctions.statCheck;
                            statCheck(battleData,sourceTurn,ownersSlots);
                        },
                        "target": "self",
                        "isPersonal": true,
                        "listenerName": "Sailing Towards a Second Life break check",
                    },
                ]
            },
            {
                "trigger": "WaveStart",
                condition(battleData,generalInfo) {
                    const currentWave = generalInfo.currentWave;
                    if (currentWave != 1) {return;}

                    let ownerRef = this.owners;
                    let ownersSlots = this.ownersSlots;

                    const statCheck = this.statCheck ??= turnLogicLightcones["Sailing Towards a Second Life"].skillFunctions.statCheck;

                    const namedTurns = battleData.nameBasedTurns;
                    for (let owner of ownerRef) {
                        let charSlot = owner.slot;
                        let currentTurn = namedTurns[charSlot];
                        statCheck(battleData,currentTurn,ownersSlots);
                    }
                },
                "target": "self",
                "priority": -80,
                "listenerName": "Sailing Towards a Second Life battle start stat check trigger",
                "owners": []
            },
        ],
        "buffNames": {
            "buff1": "Sailing Towards a Second Life [SHRED] (LC)",
            "buff2": "Sailing Towards a Second Life [SPD] (LC)",
        },
    },
    "Sleep Like the Dead": {//REDONE
        logic(thisTurn,battleData) {},
        "skillFunctions": {},
        "listeners": [
            {
                "trigger": "PassiveCalls",
                condition(battleData,generalInfo) {
                    let ownerRef = this.owners;

                    const namedTurns = battleData.nameBasedTurns;
                    const subListeners = this.subListeners;
                    const ownersSlots = this.ownersSlots

                    for (let owner of ownerRef) {
                        let charSlot = owner.slot;
                        let currentTurn = namedTurns[charSlot];

                        addListenerWithPriority(battleData,subListeners[0],subListeners[0].trigger,currentTurn,ownersSlots);
                        addListenerWithPriority(battleData,subListeners[1],subListeners[1].trigger,currentTurn,ownersSlots);
                    }
                },
                "target": "self",
                "listenerName": "Sleep Like the Dead listener setup",
                "owners": [],
                "subListeners": [
                    {
                        "trigger": "AbilityEnd",
                        condition(battleData,generalInfo) {
                            const action = generalInfo.action;
                            if (action != "BasicATK" && action != "Skill") {return;}
        
                            let sourceTurn = generalInfo.sourceTurn;
                            
                            sourceTurn.lcSleepLikeDeadCooldown ??= 0;
                            if (!sourceTurn.lcSleepLikeDeadCooldown) {return;}

                            if (!currentTurn.lcSleepLikeDeadCRITSHEET) {
                                let ownersSlots = this.ownersSlots;
                                let ownerRank = ownersSlots[sourceTurn.name];//setAmount
                                let lcNameRef = "Sleep Like the Dead";
                                let lcPathing = lightcones[lcNameRef].params;
                                let rankParams = lcPathing[ownerRank-1];

                                currentTurn.lcSleepLikeDeadCRITSHEET = {
                                    "stats": [CritRateBase],
                                    [CritRateBase]: rankParams[1],
                                    "source": lcNameRef,
                                    "sourceOwner": currentTurn.properName,
                                    "buffName": turnLogicLightcones[lcNameRef].buffNames.buff2,
                                    "durationInTurn": 2,
                                    "duration": 1,
                                    "AVApplied": 0,
                                    "maxStacks": 1,
                                    "currentStacks": 1,
                                    "decay": false,
                                    "expireType": "EndTurn",
                                }
                            }
                            let buffSheet2 = currentTurn.lcSleepLikeDeadCRITSHEET;
                            updateBuff(battleData,currentTurn,buffSheet2)

                            currentTurn.lcSleepLikeDeadCooldown = 3;
                        },
                        "target": "self",
                        "isPersonal": true,
                        "listenerName": "Sleep Like the Dead basic/skill check",
                    },
                    {
                        "trigger": "EndTurn",
                        condition(battleData,generalInfo) {
                            let sourceTurn = generalInfo.sourceTurn;
        
                            sourceTurn.lcSleepLikeDeadCooldown ??= 0;
                            sourceTurn.lcSleepLikeDeadCooldown--;
                        },
                        "target": "self",
                        "isPersonal": true,
                        "listenerName": "Sleep Like the Dead cooldown handler",
                    },
                ]
            },
        ],
        "buffNames": {
            "buff2": "Sleep Like the Dead (LC)",
        },
    },
    "Worrisome, Blissful": {//REDONE
        logic(thisTurn,battleData) {},
        "skillFunctions": {},
        "listeners": [
            {
                "trigger": "PassiveCalls",
                condition(battleData,generalInfo) {
                    let ownerRef = this.owners;

                    const namedTurns = battleData.nameBasedTurns;
                    const subListeners = this.subListeners;
                    const ownersSlots = this.ownersSlots

                    let lcNameRef = "Worrisome, Blissful";
                    let lcPathing = lightcones[lcNameRef].params;

                    // let buffName = this.buffNames.fuaDMG;
                    let buffSheet = this.buffSheet ??= {
                        "stats": [DamageAll],
                        [DamageAll]: 0,
                        "source": lcNameRef,
                        "sourceOwner": "",
                        "buffName": turnLogicLightcones[lcNameRef].buffNames.fuaDMG,
                        "durationInTurn": null,
                        "duration": 1,
                        "AVApplied": 0,
                        "maxStacks": 1,
                        "currentStacks": 1,
                        "decay": false,
                        "expireType": null,
                        "actionTags": ["FUA"],
                    }

                    for (let owner of ownerRef) {
                        let charSlot = owner.slot;
                        let rankParams = lcPathing[owner.rank-1];
                        let currentTurn = battleData.nameBasedTurns[charSlot];

                        buffSheet[DamageAll] = rankParams[1]
                        buffSheet.sourceOwner = currentTurn.properName;
                        updateBuff(battleData,currentTurn,buffSheet);

                        addListenerWithPriority(battleData,subListeners[0],subListeners[0].trigger,currentTurn,ownersSlots);
                    }
                },
                "target": "self",
                "listenerName": "Worrisome, Blissful listener setup",
                "owners": [],
                "subListeners": [
                    {
                        "trigger": "AttackEnd",
                        condition(battleData,generalInfo) {
                            let isFUA = false;
                            const actionTags = generalInfo.ATKObject.actionTags;
                            for (let tag of actionTags) {
                                if (tag === "FUA") {
                                    isFUA = true;
                                    break;
                                }
                            }
                            if (!isFUA) {return;}
        
                            let sourceTurn = generalInfo.sourceTurn;
                            const targetsGotHit = generalInfo.targetsGotHit;
        
                            if (!sourceTurn.worrisomBlissfulTameSTACKSHEET) {
                                let ownersSlots = this.ownersSlots;
                                let ownerRank = ownersSlots[sourceTurn.name];
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
                                    "durationInTurn": null,
                                    "duration": 1,
                                    "AVApplied": 0,
                                    "maxStacks": 2,
                                    "currentStacks": 1,
                                    "decay": false,
                                    "expireType": null,
                                    "isDebuff": true,
                                    "actionTags": ["All"]
                                }
                            }
                            let buffSheet = sourceTurn.worrisomBlissfulTameSTACKSHEET;
                            let buffName = buffSheet.buffName;
                            
                            const enemyTurns = battleData.enemyBasedTurns;
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
                        "isPersonal": true,
                        "listenerName": "Worrisome, Blissful - Tame stacker",
                    },
                ]
            },
        ],
        "buffNames": {
            "fuaDMG": "One At A Time",
            "tame": "Tame [Worrisome, Blissful]"
        },
    },
    "Cruising in the Stellar Sea": {//REDONE
        logic(thisTurn,battleData) {},
        "skillFunctions": {},
        "listeners": [
            {
                "trigger": "PassiveCalls",
                condition(battleData,generalInfo) {
                    let ownerRef = this.owners;

                    const namedTurns = battleData.nameBasedTurns;
                    const subListeners = this.subListeners;
                    const ownersSlots = this.ownersSlots;

                    for (let owner of ownerRef) {
                        let charSlot = owner.slot;
                        let currentTurn = namedTurns[charSlot];

                        addListenerWithPriority(battleData,subListeners[0],subListeners[0].trigger,currentTurn,ownersSlots);
                    }
                },
                "target": "self",
                "listenerName": "In the Night listener setup",
                "owners": [],
                "subListeners": [
                    {
                        "trigger": "AllyDMGStart",
                        condition(battleData,generalInfo) {
                            const sourceTurn = generalInfo.sourceTurn;
        
                            if (!sourceTurn.cruisingStellarCRITSHEET) {
                                let ownersSlots = this.ownersSlots;
                                const ownerRank = ownersSlots[sourceTurn.name];
                                let lcNameRef = "Cruising in the Stellar Sea";
                                let lcPathing = lightcones[lcNameRef].params;
                                let rankParams = lcPathing[ownerRank-1];
                                
                                let buffName = turnLogicLightcones[lcNameRef].buffNames.critBonus;
                                sourceTurn.cruisingStellarCRITSHEET = {
                                    "stats": [CritRateBase],
                                    [CritRateBase]: rankParams[0],
                                    "source": lcNameRef,
                                    "sourceOwner": sourceTurn.properName,
                                    "buffName": buffName,
                                    "durationInTurn": null,
                                    "duration": 1,
                                    "AVApplied": 0,
                                    "maxStacks": 5,
                                    "currentStacks": 1,
                                    "decay": false,
                                    "expireType": null,
                                    "actionTags": ["All"],
                                }
                            }
        
                            const targetTurn = generalInfo.targetTurn;
        
                            const hpRatio = targetTurn.currentHP / targetTurn.maxHP;
                            const hpThreshold = 0.50;
        
                            const buffSheet = sourceTurn.cruisingStellarCRITSHEET;
                            const buffCheck = sourceTurn.buffsObject[buffSheet.buffName];
                            if (hpRatio <= hpThreshold) {
                                if (buffCheck) {return;}
                                else {
                                    updateBuff(battleData,sourceTurn,buffSheet);
                                }
                            }
                            else if (buffCheck) {
                                removeBuff(battleData,sourceTurn,buffSheet);
                            }
                        },
                        "target": "self",
                        "isPersonal": true,
                        "listenerName": "Cruising <= 50%HP crit buff",
                    },
                ]
            },
            {
                "trigger": "EnemyDied",
                condition(battleData,generalInfo) {
                    const sourceTurn = generalInfo.sourceTurn;
                    let ownersSlots = this.ownersSlots;
                    const ownerRank = ownersSlots[sourceTurn.name];
                    if (!ownerRank) {return;}//abort if the kill owner was not a lc owner

                    if (!sourceTurn.cruisingStellarATKSHEET) {
                        let lcNameRef = "Cruising in the Stellar Sea";
                        let lcPathing = lightcones[lcNameRef].params;
                        let rankParams = lcPathing[ownerRank-1];
                        
                        let buffName = turnLogicLightcones[lcNameRef].buffNames.dmgStack;
                        sourceTurn.cruisingStellarATKSHEET = {
                            "stats": [ATKP],
                            [ATKP]: rankParams[3],
                            "source": lcNameRef,
                            "sourceOwner": sourceTurn.properName,
                            "buffName": buffName,
                            "durationInTurn": 3,
                            "duration": 2,
                            "AVApplied": 0,
                            "maxStacks": 1,
                            "currentStacks": 1,
                            "decay": false,
                            "expireType": "EndTurn"
                        }
                    }

                    const buffSheet = sourceTurn.cruisingStellarATKSHEET;
                    updateBuff(battleData,sourceTurn,buffSheet);
                },
                "target": "self",
                "listenerName": "Cruising - kill atk buff",
                "owners": [],
                "ownersSlots": {}
            },
        ],
        "buffNames": {
            "critBonus": "Cruising in the Stellar Sea (Crit)",
            "dmgStack": "Cruising in the Stellar Sea (ATK)"
        },
    },
        //4star
    //TODO: rework this later, swordplay needs some tweaking after the event rework, but it functions for now just not ideally
    "Swordplay": {
        logic(thisTurn,battleData) {},
        "skillFunctions": {},
        "listeners": [
            {
                "trigger": "AttackStart",
                condition(battleData,generalInfo) {
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
                            "durationInTurn": null,
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
                "listenerName": "Swordplay - Hit tracking start",
                "owners": [],
                "ownersSlots": {}
            },
            {
                "trigger": "HitEnemyEnd",
                condition(battleData,generalInfo) {
                    //CONFIRMED USING TOPAZ, ASHBLAZING, AND SWORDPLAY
                    //swordplay takes effect after a hit, ashblazing takes place before a hit

                    let ownersSlots = this.ownersSlots;
                    const sourceTurn = generalInfo.sourceTurn;
                    const ownerRank = ownersSlots[sourceTurn.name];
                    if (!ownerRank || !sourceTurn.swordplayHitsCountTrackingInProgress) {return;}
                    //if the hit is coming from a non-owner, or if the hit is coming from an owner that isn't in the middle of hit tracking for an attack, then abort

                    const enemyTurn = battleData.enemyBasedTurns[sourceTurn.swordPlayCurrentlyTrackedTarget];
                    const targetTurn = generalInfo.targetTurn;
                    if (targetTurn.properName != enemyTurn.properName) {return;}

                    const buffSheet = sourceTurn.swordplayRepeatHitDMGSHEET;
                    const buffCheck = sourceTurn.buffsObject[buffSheet.buffName];
                    //if we're in a super hit-spammy attack, and reached the 5 point already, then abort without bothering the buff handler
                    if (buffCheck && buffCheck.currentStacks === 5) {return;}
                    // console.log(sourceTurn.properName)
                    
                    updateBuff(battleData,sourceTurn,buffSheet);
                },
                "target": "self",
                "listenerName": "Swordplay - Hit scaling",
                "owners": [],
                "ownersSlots": {}
            },
            {
                "trigger": "AttackEnd",
                condition(battleData,generalInfo) {
                    let ownersSlots = this.ownersSlots;
                    const sourceTurn = generalInfo.sourceTurn;
                    const ownerRank = ownersSlots[sourceTurn.name];
                    if (!ownerRank || !sourceTurn.swordplayHitsCountTrackingInProgress) {return;}
                    // sourceTurn.ashblazingFUATrackingInProgress = false;
                    sourceTurn.swordplayHitsCountTrackingInProgress = false;
                },
                "target": "self",
                "listenerName": "Swordplay - Hit tracking end",
                "owners": [],
                "ownersSlots": {}
            },
            {
                "trigger": "PreBattleEntersCombat",
                condition(battleData,generalInfo) {
                    let ownerRef = this.owners;//would apply at the start to any and all owners, each, hence owners instead of ownersSlots
                    let lcNameRef = "Swordplay";
                    // let lcPathing = lightcones[lcNameRef].params;

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
                    let ownerRef = this.owners;//would apply at the start to any and all owners, each, hence owners instead of ownersSlots
                    // let lcNameRef = "Swordplay";
                    // let lcPathing = lightcones[lcNameRef].params;

                    const allyTurns = battleData.nameBasedTurns;
                    const enemyTurns = battleData.enemyBasedTurns;
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
    "Final Victor": {//REDONE
        logic(thisTurn,battleData) {},
        "skillFunctions": {},
        "listeners": [
            {
                "trigger": "PassiveCalls",
                condition(battleData,generalInfo) {
                    let ownerRef = this.owners;

                    const namedTurns = battleData.nameBasedTurns;
                    const subListeners = this.subListeners;
                    const ownersSlots = this.ownersSlots

                    for (let owner of ownerRef) {
                        let charSlot = owner.slot;
                        let currentTurn = namedTurns[charSlot];

                        addListenerWithPriority(battleData,subListeners[0],subListeners[0].trigger,currentTurn,ownersSlots);
                    }
                },
                "target": "self",
                "listenerName": "Final Victor listener setup",
                "owners": [],
                "subListeners": [
                    {
                        "trigger": "AllyDMGEnd",
                        condition(battleData,generalInfo) {
                            let sourceTurn = generalInfo.sourceTurn;
        
                            if (!sourceTurn.lcFinalVictorCritSHEET) {
                                let ownersSlots = this.ownersSlots;
                                let ownerRank = ownersSlots[sourceTurn.name];
                                let lcNameRef = "Final Victor";
                                let lcPathing = lightcones[lcNameRef].params;
                                let rankParams = lcPathing[ownerRank-1];
                                // let ownerName = sourceTurn.properName;
        
                                sourceTurn.lcFinalVictorCritSHEET = {
                                    "stats": [CritDamageBase],
                                    [CritDamageBase]: rankParams[1],
                                    "source": lcNameRef,
                                    "sourceOwner": sourceTurn.properName,
                                    "buffName": turnLogicLightcones[lcNameRef].buffNames.fortune,
                                    "durationInTurn": 1,
                                    "duration": 1,//expires at the end of the turn regardless
                                    "AVApplied": 0,
                                    "maxStacks": 4,
                                    "currentStacks": 1,
                                    "decay": false,
                                    "expireType": "EndTurn",
                                }
                            }
                            const buffSheet = sourceTurn.lcFinalVictorCritSHEET;
                            updateBuff(battleData,sourceTurn,buffSheet);
                        },
                        "target": "self",
                        "isPersonal": true,
                        "listenerName": "Final Victor dmg end listener",
                    },
                ]
            },
        ],
        "buffNames": {
            "fortune": "Good Fortune (LC, FV)",
        },
    },
    "Only Silence Remains": {//NO CHANGE
        logic(thisTurn,battleData) {},
        "skillFunctions": {},
        "listeners": [
            {
                "trigger": "EnemyCountAdjustment",
                condition(battleData,generalInfo) {
                    let ownerRef = this.owners;//would apply at the start to any and all owners, each, hence owners instead of ownersSlots
                    let lcNameRef = "Only Silence Remains";
                    let lcPathing = lightcones[lcNameRef].params;

                    const enemyCount = battleData.enemyPositions.length;
                    const validCount = enemyCount <= 2;

                    if (battleData.lcOnlySilenceRemainsValidCount && validCount) {return;}
                    else if (!battleData.lcOnlySilenceRemainsValidCount && validCount) {
                        for (let owner of ownerRef) {
                            let charSlot = owner.slot;
                            let rankParams = lcPathing[owner.rank-1];
                            let currentTurn = battleData.nameBasedTurns[charSlot];
                            let ownerName = currentTurn.properName;

                            let buffSheet = currentTurn.lcOnlySilenceReminsCRITSHEET ??= {
                                "stats": [CritRateBase],
                                [CritRateBase]: rankParams[1],
                                "source": lcNameRef,
                                "sourceOwner": ownerName,
                                "buffName": turnLogicLightcones[lcNameRef].buffNames.silenceCrit,
                                "durationInTurn": null,
                                "duration": 1,
                                "AVApplied": 0,
                                "maxStacks": 1,
                                "currentStacks": 1,
                                "decay": false,
                                "expireType": null
                            }
                            updateBuff(battleData,currentTurn,buffSheet);
                        }
                        battleData.lcOnlySilenceRemainsValidCount = true;
                    }
                    else if (battleData.lcOnlySilenceRemainsValidCount && !validCount) {
                        for (let owner of ownerRef) {
                            let charSlot = owner.slot;
                            let currentTurn = battleData.nameBasedTurns[charSlot];

                            let buffSheet = currentTurn.lcOnlySilenceReminsCRITSHEET;
                            removeBuff(battleData,currentTurn,buffSheet);
                        }
                        battleData.lcOnlySilenceRemainsValidCount = false;
                    }
                },
                "target": "self",
                "listenerName": "Only Silence Remains enemy count listener",
                "owners": [],
            },
        ],
        "buffNames": {
            "silenceCrit": "Only Silence Remains (LC)",
        },
    },
    "River Flows in Spring": {//REDONE
        logic(thisTurn,battleData) {},
        "skillFunctions": {},
        "listeners": [
            {
                "trigger": "PassiveCalls",
                condition(battleData,generalInfo) {
                    let ownerRef = this.owners;

                    const namedTurns = battleData.nameBasedTurns;
                    const subListeners = this.subListeners;
                    const ownersSlots = this.ownersSlots

                    for (let owner of ownerRef) {
                        let charSlot = owner.slot;
                        let currentTurn = namedTurns[charSlot];

                        addListenerWithPriority(battleData,subListeners[0],subListeners[0].trigger,currentTurn,ownersSlots);
                        addListenerWithPriority(battleData,subListeners[1],subListeners[1].trigger,currentTurn,ownersSlots);
                    }
                },
                "target": "self",
                "listenerName": "River Flows in Spring listener setup",
                "owners": [],
                "subListeners": [
                    {
                        "trigger": "AllyLostHP",
                        condition(battleData,generalInfo) {
                            const wasAttack = generalInfo.wasAttack;
        
                            if (!wasAttack) {return;}//if the ally losing hp was a non owner, OR the loss wasn't from DMG, then abort
        
                            let sourceTurn = generalInfo.sourceTurn;
                            if (sourceTurn.lcRiverFlowsSpringWASACTIVE) {
                                removeBuff(battleData,sourceTurn,sourceTurn.lcRiverFlowsSpringBONUSSHEET)
                                sourceTurn.lcRiverFlowsSpringWASACTIVE = false;
                            }
                        },
                        "isPersonal": true,
                        "listenerName": "River Flows in Spring - lost hp listener",
                    },
                    {
                        "trigger": "EndTurn",
                        condition(battleData,generalInfo) {
                            let sourceTurn = generalInfo.sourceTurn;
        
                            if (!sourceTurn.lcRiverFlowsSpringWASACTIVE) {
                                updateBuff(battleData,sourceTurn,sourceTurn.lcRiverFlowsSpringBONUSSHEET)
                                sourceTurn.lcRiverFlowsSpringWASACTIVE = true;
                            }
                        },
                        "isPersonal": true,
                        "listenerName": "River Flows in Spring - end turn listener",
                    },
                ]
            },
            {
                "trigger": "WaveStart",
                condition(battleData,generalInfo) {
                    const currentWave = generalInfo.currentWave;
                    if (currentWave != 1) {return;}

                    let ownerRef = this.owners;//would apply at the start to any and all owners, each, hence owners instead of ownersSlots
                    let lcNameRef = "River Flows in Spring";
                    let lcPathing = lightcones[lcNameRef].params;
                
                    for (let owner of ownerRef) {
                        let charSlot = owner.slot;
                        let rankParams = lcPathing[owner.rank-1];

                        let currentTurn = battleData.nameBasedTurns[charSlot];
                        let ownerName = currentTurn.properName;

                        let buffSheet = currentTurn.lcRiverFlowsSpringBONUSSHEET ??= {
                            "stats": [SPDP,DamageAll],
                            [SPDP]: rankParams[0],
                            [DamageAll]: rankParams[1],
                            "source": lcNameRef,
                            "sourceOwner": ownerName,
                            "buffName": turnLogicLightcones[lcNameRef].buffNames.river,
                            "durationInTurn": null,
                            "duration": 1,
                            "AVApplied": 0,
                            "maxStacks": 1,
                            "currentStacks": 1,
                            "decay": false,
                            "expireType": null
                        }
                        
                        updateBuff(battleData,currentTurn,buffSheet);
                    }
                },
                "target": "self",
                "priority": -80,
                "listenerName": "River Flows in Spring - battlestart buff application",
                "owners": [],
            },
        ],
        "buffNames": {
            "river": "River Flows in Spring (LC)",
        },
    },
    "See You at the End": {//REDONE
        logic(thisTurn,battleData) {},
        "skillFunctions": {},
        "listeners": [
            {
                "trigger": "PassiveCalls",
                condition(battleData,generalInfo) {
                    let ownerRef = this.owners;//would apply at the start to any and all owners, each, hence owners instead of ownersSlots
                    let lcNameRef = "See You at the End";
                    let lcPathing = lightcones[lcNameRef].params;
                
                    for (let owner of ownerRef) {
                        let charSlot = owner.slot;
                        let rankParams = lcPathing[owner.rank-1];

                        let currentTurn = battleData.nameBasedTurns[charSlot];
                        let ownerName = currentTurn.properName;

                        let buffSheet = currentTurn.lcSeetYouAtTheEndSHEET ??= {
                            "stats": [DamageAll],
                            [DamageAll]: rankParams[1],
                            "source": lcNameRef,
                            "sourceOwner": ownerName,
                            "buffName": turnLogicLightcones[lcNameRef].buffNames.river,
                            "durationInTurn": null,
                            "duration": 1,
                            "AVApplied": 0,
                            "maxStacks": 1,
                            "currentStacks": 1,
                            "decay": false,
                            "expireType": null,
                            "actionTags": ["Skill"]
                        }
                        let buffSheet2 = currentTurn.lcSeetYouAtTheEndSHEET2 ??= {
                            "stats": [DamageAll],
                            [DamageAll]: rankParams[1],
                            "source": lcNameRef,
                            "sourceOwner": ownerName,
                            "buffName": turnLogicLightcones[lcNameRef].buffNames.river2,
                            "durationInTurn": null,
                            "duration": 1,
                            "AVApplied": 0,
                            "maxStacks": 1,
                            "currentStacks": 1,
                            "decay": false,
                            "expireType": null,
                            "actionTags": ["FUA"]
                        }
                        
                        updateBuff(battleData,currentTurn,buffSheet);
                        updateBuff(battleData,currentTurn,buffSheet2);
                    }
                },
                "target": "self",
                "listenerName": "See You at the End - battlestart buff application",
                "owners": [],
            },
        ],
        "buffNames": {
            "river": "See You at the End SKILL (LC)",
            "river2": "See You at the End FUA (LC)",
        },
    },
    "Shadowed by Night": {//REDONE
        logic(thisTurn,battleData) {},
        "skillFunctions": {},
        "listeners": [
            {
                "trigger": "PassiveCalls",
                condition(battleData,generalInfo) {
                    let ownerRef = this.owners;

                    const namedTurns = battleData.nameBasedTurns;
                    const subListeners = this.subListeners;
                    const ownersSlots = this.ownersSlots

                    for (let owner of ownerRef) {
                        let charSlot = owner.slot;
                        let currentTurn = namedTurns[charSlot];

                        addListenerWithPriority(battleData,subListeners[0],subListeners[0].trigger,currentTurn,ownersSlots);
                        addListenerWithPriority(battleData,subListeners[1],subListeners[1].trigger,currentTurn,ownersSlots);
                    }
                },
                "target": "self",
                "listenerName": "Shadowed by Night listener setup",
                "owners": [],
                "subListeners": [
                    {
                        "trigger": "BreakDMGEnd",
                        condition(battleData,generalInfo) {
                            let sourceTurn = generalInfo.sourceTurn;
        
                            if (!sourceTurn.lcShadowedByNightALREADYACTIVE) {
                                updateBuff(battleData,sourceTurn,sourceTurn.lcShadowedByNightSPDSHEET)
                                sourceTurn.lcShadowedByNightALREADYACTIVE = true;
                            }
                        },
                        "target": "self",
                        "isPersonal": true,
                        "listenerName": "Shadowed by Night - break dmg end turn listener",
                    },
                    {
                        "trigger": "PreActionPhase",
                        condition(battleData,generalInfo) {
                            let sourceTurn = generalInfo.sourceTurn;
        
                            sourceTurn.lcShadowedByNightALREADYACTIVE = false;
                        },
                        "target": "self",
                        "isPersonal": true,
                        "listenerName": "Shadowed by Night - start turn listener",
                    },
                ]
            },
            {
                "trigger": "WaveStart",
                condition(battleData,generalInfo) {
                    const currentWave = generalInfo.currentWave;
                    if (currentWave != 1) {return;}

                    let ownerRef = this.owners;//would apply at the start to any and all owners, each, hence owners instead of ownersSlots
                    let lcNameRef = "Shadowed by Night";
                    let lcPathing = lightcones[lcNameRef].params;
                
                    for (let owner of ownerRef) {
                        let charSlot = owner.slot;
                        let rankParams = lcPathing[owner.rank-1];

                        let currentTurn = battleData.nameBasedTurns[charSlot];
                        let ownerName = currentTurn.properName;

                        let buffSheet = currentTurn.lcShadowedByNightSPDSHEET ??= {
                            "stats": [SPDP],
                            [SPDP]: rankParams[1],
                            "source": lcNameRef,
                            "sourceOwner": ownerName,
                            "buffName": turnLogicLightcones[lcNameRef].buffNames.river,
                            "durationInTurn": 3,
                            "duration": 2,
                            "AVApplied": 0,
                            "maxStacks": 1,
                            "currentStacks": 1,
                            "decay": false,
                            "expireType": "EndTurn"
                        }
                        
                        updateBuff(battleData,currentTurn,buffSheet);
                    }
                },
                "target": "self",
                "priority": -80,
                "listenerName": "Shadowed by Night - battlestart buff application",
                "owners": [],
            },
        ],
        "buffNames": {
            "river": "Shadowed by Night (LC)",
        },
    },
    "Subscribe for More!": {//REDONE
        logic(thisTurn,battleData) {},
        "skillFunctions": {},
        "listeners": [
            {
                "trigger": "PassiveCalls",
                condition(battleData,generalInfo) {
                    let ownerRef = this.owners;

                    const namedTurns = battleData.nameBasedTurns;
                    const subListeners = this.subListeners;
                    const ownersSlots = this.ownersSlots;

                    let lcNameRef = "Subscribe for More!";
                    let lcPathing = lightcones[lcNameRef].params;

                    for (let owner of ownerRef) {
                        let charSlot = owner.slot;
                        let currentTurn = namedTurns[charSlot];

                        addListenerWithPriority(battleData,subListeners[0],subListeners[0].trigger,currentTurn,ownersSlots);

                        let ownerName = currentTurn.properName;

                        let rankParams = lcPathing[ownerRank-1];
                        let buffSheet = currentTurn.lcSubForMoreDMGSHEET ??= {
                            "stats": [DamageAll],
                            [DamageAll]: rankParams[0],
                            "source": lcNameRef,
                            "sourceOwner": ownerName,
                            "buffName": turnLogicLightcones[lcNameRef].buffNames.river,
                            "durationInTurn": null,
                            "duration": 1,
                            "AVApplied": 0,
                            "maxStacks": 1,
                            "currentStacks": 1,
                            "decay": false,
                            "expireType": null,
                            "actionTags": ["Basic","Skill"],
                        }
                        
                        updateBuff(battleData,currentTurn,buffSheet);
                    }
                },
                "target": "self",
                "listenerName": "Subscribe for More! listener setup",
                "owners": [],
                "subListeners": [
                    {
                        "trigger": "EnergyChanged",
                        condition(battleData,generalInfo) {
                            let sourceTurn = generalInfo.sourceTurn;
        
                            const isFull = sourceTurn.currentEnergy === sourceTurn.maxEnergy;
                            if (!sourceTurn.lcSubForMoreDMGSHEET2) {
                                let ownersSlots = this.ownersSlots;
                                let ownerRank = ownersSlots[sourceTurn.name];
        
                                let lcNameRef = "Subscribe for More!";
                                let lcPathing = lightcones[lcNameRef].params;
                                
                                let rankParams = lcPathing[ownerRank-1];
        
                                let ownerName = sourceTurn.properName;
        
                                sourceTurn.lcSubForMoreDMGSHEET2 = {
                                    "stats": [DamageAll],
                                    [DamageAll]: rankParams[0],
                                    "source": lcNameRef,
                                    "sourceOwner": ownerName,
                                    "buffName": turnLogicLightcones[lcNameRef].buffNames.river2,
                                    "durationInTurn": null,
                                    "duration": 1,
                                    "AVApplied": 0,
                                    "maxStacks": 1,
                                    "currentStacks": 1,
                                    "decay": false,
                                    "expireType": null,
                                    "actionTags": ["Basic","Skill"],
                                }
                            }
        
                            const buffSheet = sourceTurn.lcSubForMoreDMGSHEET2;
                            const buffCheck = sourceTurn.buffsObject[buffSheet.buffName];
        
                            if (isFull) {
                                if (buffCheck) {return;}
                                updateBuff(battleData,sourceTurn,buffSheet);
                            }
                            else if (buffCheck) {
                                removeBuff(battleData,sourceTurn,buffSheet);
                            }
                        },
                        "target": "self",
                        "isPersonal": true,
                        "listenerName": "Subscribe for More! - energy change listener",
                    },
                ]
            },
            
        ],
        "buffNames": {
            "river": "Subscribe for More! (LC)",
            "river2": "Subscribe for More! [Full] (LC)",
        },
    },
        //3star
    "Adversarial": {//NO CHANGE
        logic(thisTurn,battleData) {},
        "skillFunctions": {},
        "listeners": [
            {
                "trigger": "EnemyDied",
                condition(battleData,generalInfo) {
                    let ownersSlots = this.ownersSlots;
                    let sourceTurn = generalInfo.sourceTurn;
                    let ownerRank = ownersSlots[sourceTurn.name];
                    if (!ownerRank) {return;}//if the ally losing hp was a non owner, OR the loss wasn't from DMG, then abort

                    if (!sourceTurn.lcAdversarialSPDSHEET) {
                        let ownersSlots = this.ownersSlots;
                        let ownerRank = ownersSlots[sourceTurn.name];

                        let lcNameRef = "Adversarial";
                        let lcPathing = lightcones[lcNameRef].params;
                        
                        let rankParams = lcPathing[ownerRank-1];

                        let ownerName = sourceTurn.properName;

                        sourceTurn.lcAdversarialSPDSHEET = {
                            "stats": [SPDP],
                            [SPDP]: rankParams[0],
                            "source": lcNameRef,
                            "sourceOwner": ownerName,
                            "buffName": turnLogicLightcones[lcNameRef].buffNames.river,
                            "durationInTurn": 3,
                            "duration": 2,
                            "AVApplied": 0,
                            "maxStacks": 1,
                            "currentStacks": 1,
                            "decay": false,
                            "expireType": "EndTurn",
                        }
                    }

                    const buffSheet = sourceTurn.lcAdversarialSPDSHEET;
                    updateBuff(battleData,sourceTurn,buffSheet);
                },
                "target": "self",
                "listenerName": "Adversarial - kill listener",
                "owners": [],
            },
        ],
        "buffNames": {
            "river": "Adversarial (LC)",
        },
    },
    "Arrows": {//REDONE
        logic(thisTurn,battleData) {},
        "skillFunctions": {},
        "listeners": [
            {
                "trigger": "PassiveCalls",
                condition(battleData,generalInfo) {
                    let ownerRef = this.owners;//would apply at the start to any and all owners, each, hence owners instead of ownersSlots
                    let lcNameRef = "Arrows";
                    let lcPathing = lightcones[lcNameRef].params;
                
                    for (let owner of ownerRef) {
                        let charSlot = owner.slot;
                        let rankParams = lcPathing[owner.rank-1];

                        let currentTurn = battleData.nameBasedTurns[charSlot];
                        let ownerName = currentTurn.properName;

                        let buffSheet = currentTurn.lcArrowsCRITSHEET ??= {
                            "stats": [CritRateBase],
                            [CritRateBase]: rankParams[0],
                            "source": lcNameRef,
                            "sourceOwner": ownerName,
                            "buffName": turnLogicLightcones[lcNameRef].buffNames.river,
                            "durationInTurn": 4,
                            "duration": 3,
                            "AVApplied": 0,
                            "maxStacks": 1,
                            "currentStacks": 1,
                            "decay": false,
                            "expireType": "EndTurn"
                        }
                        
                        updateBuff(battleData,currentTurn,buffSheet);
                    }
                },
                "target": "self",
                "listenerName": "Arrows - battlestart buff application",
                "owners": [],
            },
        ],
        "buffNames": {
            "river": "Arrows (LC)",
        },
    },
    "Darting Arrow": {//NO CHANGE
        logic(thisTurn,battleData) {},
        "skillFunctions": {},
        "listeners": [
            {
                "trigger": "EnemyDied",
                condition(battleData,generalInfo) {
                    let ownersSlots = this.ownersSlots;
                    let sourceTurn = generalInfo.sourceTurn;
                    let ownerRank = ownersSlots[sourceTurn.name];
                    if (!ownerRank) {return;}//if the ally losing hp was a non owner, OR the loss wasn't from DMG, then abort

                    if (!sourceTurn.lcDartingArrowATKSHEET) {
                        let ownersSlots = this.ownersSlots;
                        let ownerRank = ownersSlots[sourceTurn.name];

                        let lcNameRef = "Darting Arrow";
                        let lcPathing = lightcones[lcNameRef].params;
                        
                        let rankParams = lcPathing[ownerRank-1];

                        let ownerName = sourceTurn.properName;

                        sourceTurn.lcDartingArrowATKSHEET = {
                            "stats": [ATKP],
                            [ATKP]: rankParams[0],
                            "source": lcNameRef,
                            "sourceOwner": ownerName,
                            "buffName": turnLogicLightcones[lcNameRef].buffNames.river,
                            "durationInTurn": 3,
                            "duration": 2,
                            "AVApplied": 0,
                            "maxStacks": 1,
                            "currentStacks": 1,
                            "decay": false,
                            "expireType": "EndTurn",
                        }
                    }

                    const buffSheet = sourceTurn.lcDartingArrowATKSHEET;
                    updateBuff(battleData,sourceTurn,buffSheet);
                },
                "target": "self",
                "listenerName": "Darting Arrow - kill listener",
                "owners": [],
            },
        ],
        "buffNames": {
            "river": "Darting Arrow (LC)",
        },
    },

    //ABUNDANCE
        //5star
    "Time Waits for No One": {//REDONE
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
                    const actionTags = ["All","Additional"];
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
                "trigger": "PassiveCalls",
                condition(battleData,generalInfo) {
                    let ownerRef = this.owners;
        
                    const namedTurns = battleData.nameBasedTurns;
                    const subListeners = this.subListeners;
                    const ownersSlots = this.ownersSlots;
        
                    for (let owner of ownerRef) {
                        let charSlot = owner.slot;
                        let currentTurn = namedTurns[charSlot];
        
                        addListenerWithPriority(battleData,subListeners[0],subListeners[0].trigger,currentTurn,ownersSlots);
                        addListenerWithPriority(battleData,subListeners[1],subListeners[1].trigger,currentTurn,ownersSlots);
                    }
                },
                "target": "self",
                "listenerName": "Time Waits for No One listener setup",
                "owners": [],
                "subListeners": [
                    {
                        "trigger": "HealEnd",
                        condition(battleData,generalInfo) {
                            let sourceTurn = generalInfo.sourceTurn;
        
                            const totalHealed = generalInfo.totalHealed;
                            sourceTurn.lcTimeWaitsForNoOneHealing = (sourceTurn.lcTimeWaitsForNoOneHealing ?? 0) + totalHealed;
                        },
                        "target": "self",
                        "isPersonal": true,
                        "listenerName": "Time Waits for No One - healing listener",
                    },
                    {
                        "trigger": "PreActionPhase",
                        condition(battleData,generalInfo) {
                            let sourceTurn = generalInfo.sourceTurn;
        
                            sourceTurn.lcTimeWaitsForNoOneDMGDONE = false;
                        },
                        "target": "self",
                        "isPersonal": true,
                        "listenerName": "Time Waits for No One - turn start dmg done reset",
                    },
                ]
            },
            {
                "trigger": "AttackDMGEnd",
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
                "owners": [],
                "ownersSlots": {}
            },
        ],
        "buffNames": {},
    },
    "Echoes of the Coffin": {//REDONE
        logic(thisTurn,battleData) {},
        "skillFunctions": {},
        "listeners": [
            {
                "trigger": "PassiveCalls",
                condition(battleData,generalInfo) {
                    let ownerRef = this.owners;
        
                    const namedTurns = battleData.nameBasedTurns;
                    const subListeners = this.subListeners;
                    const ownersSlots = this.ownersSlots;
        
                    for (let owner of ownerRef) {
                        let charSlot = owner.slot;
                        let currentTurn = namedTurns[charSlot];
        
                        addListenerWithPriority(battleData,subListeners[0],subListeners[0].trigger,currentTurn,ownersSlots);
                        addListenerWithPriority(battleData,subListeners[1],subListeners[1].trigger,currentTurn,ownersSlots);
                    }
                },
                "target": "self",
                "listenerName": "Echoes of the Coffin listener setup",
                "owners": [],
                "subListeners": [
                    {
                        "trigger": "AttackDMGEnd",
                        condition(battleData,generalInfo) {
                            let sourceTurn = generalInfo.sourceTurn;
        
                            const targetsGotHit = generalInfo.targetsGotHit;
                            const targetsHit = Math.min(3,Object.keys(targetsGotHit).length);
        
                            if (targetsHit) {
                                if (!sourceTurn.echoesOfTheCoffinEnergyRegen) {
                                    let ownersSlots = this.ownersSlots;
                                    let ownerRank = ownersSlots[sourceTurn.name];

                                    let lcNameRef = "Echoes of the Coffin";
                                    let lcPathing = lightcones[lcNameRef].params;
                                    let rankParams = lcPathing[ownerRank-1];
        
                                    sourceTurn.echoesOfTheCoffinEnergyRegen = rankParams[2];
                                }
                                const energyRegen = sourceTurn.echoesOfTheCoffinEnergyRegen * targetsHit;
                                updateEnergy(battleData,energyRegen,sourceTurn,false,"Echoes of the Coffin - Enemies Hit");
                            }
                        },
                        "target": "self",
                        "isPersonal": true,
                        "listenerName": "Echoes of the Coffin - enemy hit regen listener",
                    },
                    {
                        "trigger": "AbilityEnd",
                        condition(battleData,generalInfo) {
                            const action = generalInfo.action;
                            if (action != "Ultimate") {return;}
        
                            let sourceTurn = generalInfo.sourceTurn;
        
                            if (!sourceTurn.echoesOfTheCoffinSPDSHEET) {
                                let ownersSlots = this.ownersSlots;
                                let ownerRank = ownersSlots[sourceTurn.name];

                                let lcNameRef = "Echoes of the Coffin";
                                let lcPathing = lightcones[lcNameRef].params;
                                let rankParams = lcPathing[ownerRank-1];
                                
                                sourceTurn.echoesOfTheCoffinSPDSHEET = {
                                    "stats": [SPDBase],
                                    [SPDBase]: rankParams[1],
                                    "source": lcNameRef,
                                    "sourceOwner": sourceTurn.properName,
                                    "buffName": turnLogicLightcones[lcNameRef].buffNames.echoesSPD,
                                    "durationInTurn": 2,
                                    "duration": 1,
                                    "AVApplied": 0,
                                    "maxStacks": 1,
                                    "currentStacks": 1,
                                    "decay": false,
                                    "expireType": "EndTurn",
                                }
                            }
                            let buffSheet = sourceTurn.echoesOfTheCoffinSPDSHEET;
                            const allyPositions = battleData.allyPositions;
                            updateBuffBatchTargets(battleData,allyPositions,buffSheet)
                        },
                        "target": "team",
                        "isPersonal": true,
                        "listenerName": "Echoes of the Coffin ult end listener",
                    },
                ]
            },
        ],
        "buffNames": {
            "echoesSPD": "Echoes of the Coffin SPD",
        },
    },
    "Night of Fright": {//REDONE
        logic(thisTurn,battleData) {},
        "skillFunctions": {},
        "listeners": [
            {
                "trigger": "PassiveCalls",
                condition(battleData,generalInfo) {
                    let ownerRef = this.owners;
        
                    const namedTurns = battleData.nameBasedTurns;
                    const subListeners = this.subListeners;
                    const ownersSlots = this.ownersSlots;
        
                    for (let owner of ownerRef) {
                        let charSlot = owner.slot;
                        let currentTurn = namedTurns[charSlot];
        
                        addListenerWithPriority(battleData,subListeners[0],subListeners[0].trigger,currentTurn,ownersSlots);
                    }
                },
                "target": "self",
                "listenerName": "Hey, Over Here listener setup",
                "owners": [],
                "subListeners": [
                    {
                        "trigger": "HealStart",
                        condition(battleData,generalInfo) {
                            let sourceTurn = generalInfo.sourceTurn;
        
                            const targetTurn = generalInfo.targetTurn;
                            if (targetTurn?.isEnemy) {return;}
                            //healing needs to be on an ally target, and in turn a target must exist
                            //strictly speaking this could break if healing started on a target that was removed from the battle, though its turn object should still exist regardless
                            //just no longer in the turn order. All the same, better to be safe.
        
                            if (!sourceTurn.lcNightOfFrightATKSHEET) {
                                let ownersSlots = this.ownersSlots;

                                let lcNameRef = "Night of Fright";
                                let lcPathing = lightcones[lcNameRef].params;
                                let ownerRank = ownersSlots[sourceTurn.name];
                                let rankParams = lcPathing[ownerRank-1];
        
                                sourceTurn.lcNightOfFrightATKSHEET = {
                                    "stats": [ATKP],
                                    [ATKP]: rankParams[2],
                                    "source": lcNameRef,
                                    "sourceOwner": sourceTurn.properName,
                                    "buffName": turnLogicLightcones[lcNameRef].buffNames.atkBuff,
                                    "durationInTurn": 3,
                                    "duration": 2,
                                    "AVApplied": 0,
                                    "maxStacks": 5,
                                    "currentStacks": 1,
                                    "decay": false,
                                    "expireType": "EndTurn",
                                }
                            }
        
                            const buffSheet = sourceTurn.lcNightOfFrightATKSHEET;
                            updateBuff(battleData,targetTurn,buffSheet)
        
                            // const totalHealed = generalInfo.totalHealed;
                            // sourceTurn.lcTimeWaitsForNoOneHealing = (sourceTurn.lcTimeWaitsForNoOneHealing ?? 0) + totalHealed;
                        },
                        "target": "self",
                        "isPersonal": true,
                        "listenerName": "Night of Fright - healing start listener",
                    },
                ]
            },
            {
                "trigger": "AbilityStart",
                condition(battleData,generalInfo) {
                    const action = generalInfo.action;
                    if (action != "Ultimate") {return;}

                    let ownersSlots = this.ownersSlots;
                    let sourceTurn = generalInfo.sourceTurn;
                    // let ownerRank = ownersSlots[sourceTurn.name];
                    // if (!ownerRank) {return;}//abort non-owners

                    if (sourceTurn.isEnemy || sourceTurn.isUniqueEvent) {return;}

                    const allyPositions = battleData.allyPositions;
                    let lowestPercentAlly = null;
                    for (let ally of allyPositions) {
                        const hpRatio = ally.currentHP / ally.maxHP;
                        if (hpRatio < lowestPercentAlly || lowestPercentAlly === null) {
                            lowestPercentAlly = ally;
                        }
                    }

                    const allyTurns = battleData.nameBasedTurns;
                    for (let ownerSlot in ownersSlots) {
                        const currentOwner = allyTurns[ownerSlot];

                        if (!currentOwner.lcNightOfFrightHealingHEALOBJECT) {
                            let lcNameRef = "Night of Fright";
                            let lcPathing = lightcones[lcNameRef].params;
                            let ownerRank = ownersSlots[currentOwner.name];
                            let rankParams = lcPathing[ownerRank-1];

                            const actionTags = ["All","Gear","Heal"];
                            const compositeCacheTag = actionTags + currentOwner.properName;
                            
                            currentOwner.lcNightOfFrightHealingHEALOBJECT ??= {
                                multipliers: {
                                    primary: rankParams[1],
                                    blast: null,
                                    all: null,
                                },
                                flatAmounts: {
                                    primary: null,
                                    blast: null,
                                    all: null,
                                },
                                scalar: "HP",
                                DMGTags: [],
                                allToughness: false,
                                slot: "Lightcone",
                                actionTags,compositeCacheTag,
                            }
                        }
                        const healObject = currentOwner.lcNightOfFrightHealingHEALOBJECT;
    
                        healAlly(battleData,healObject,lowestPercentAlly,currentOwner,"Lightcone",1,null);
                    }
                },
                "target": "team",
                "listenerName": "Night of Fright ult start listener",
                "owners": []
            },
        ],
        "buffNames": {
            "atkBuff": "Night of Fright (LC)",
        },
    },
        //4star
    "Hey, Over Here": {//REDONE
        logic(thisTurn,battleData) {},
        "skillFunctions": {},
        "listeners": [
            {
                "trigger": "PassiveCalls",
                condition(battleData,generalInfo) {
                    let ownerRef = this.owners;
        
                    const namedTurns = battleData.nameBasedTurns;
                    const subListeners = this.subListeners;
                    const ownersSlots = this.ownersSlots;
        
                    for (let owner of ownerRef) {
                        let charSlot = owner.slot;
                        let currentTurn = namedTurns[charSlot];
        
                        addListenerWithPriority(battleData,subListeners[0],subListeners[0].trigger,currentTurn,ownersSlots);
                    }
                },
                "target": "self",
                "listenerName": "Hey, Over Here listener setup",
                "owners": [],
                "subListeners": [
                    {
                        "trigger": "AbilityStart",
                        condition(battleData,generalInfo) {
                            const action = generalInfo.action;
                            if (action != "Skill") {return;}
        
                            let sourceTurn = generalInfo.sourceTurn;
        
                            if (!sourceTurn.heyOverHereHEALBONUSUSHEET) {
                                let ownersSlots = this.ownersSlots;
                                let ownerRank = ownersSlots[sourceTurn.name];

                                let lcNameRef = "Hey, Over Here";
                                let lcPathing = lightcones[lcNameRef].params;
                                let rankParams = lcPathing[ownerRank-1];
                                
                                sourceTurn.heyOverHereHEALBONUSUSHEET = {
                                    "stats": [HealingOutgoing],
                                    [HealingOutgoing]: rankParams[1],
                                    "source": lcNameRef,
                                    "sourceOwner": sourceTurn.properName,
                                    "buffName": turnLogicLightcones[lcNameRef].buffNames.healBonus,
                                    "durationInTurn": 3,
                                    "duration": 2,
                                    "AVApplied": 0,
                                    "maxStacks": 1,
                                    "currentStacks": 1,
                                    "decay": false,
                                    "expireType": "EndTurn",
                                }
                            }
                            let buffSheet = sourceTurn.heyOverHereHEALBONUSUSHEET;
                            updateBuff(battleData,sourceTurn,buffSheet);
                        },
                        "target": "team",
                        "isPersonal": true,
                        "listenerName": "Hey, Over Here skill start listener",
                    },
                ]
            },
        ],
        "buffNames": {
            "healBonus": "Hey, Over Here (LC)",
        },
    },
    "Perfect Timing": {//REDONE
        logic(thisTurn,battleData) {},
        "skillFunctions": {
            statCheck(battleData,currentTurn,ownersSlots) {
                let ownerRank = ownersSlots[currentTurn.name];

                if (!currentTurn.lcPerfectTimingERToHealingSHEET) {
                    let lcNameRef = "Perfect Timing";
                    let lcPathing = lightcones[lcNameRef].params;
                    let rankParams = lcPathing[ownerRank-1];

                    currentTurn.lcPerfectTimingERToHealingRATIO = rankParams[1];
                    currentTurn.lcPerfectTimingERToHealingCAP = rankParams[2];

                    currentTurn.lcPerfectTimingERToHealingSHEET = {
                        "stats": [HealingOutgoing,HealingOutgoingNULL],
                        [HealingOutgoing]: 0,
                        [HealingOutgoingNULL]: -0,
                        "source": lcNameRef,
                        "sourceOwner": currentTurn.properName,
                        "buffName": turnLogicLightcones[lcNameRef].buffNames.buff1,
                        "durationInTurn": null,
                        "duration": 1,
                        "AVApplied": 0,
                        "maxStacks": 1,
                        "currentStacks": 1,
                        "decay": false,
                        "expireType": null
                    }
                }
                let buffSheet = currentTurn.lcPerfectTimingERToHealingSHEET;
                const buffName = buffSheet.buffName;
                const buffsRef = currentTurn.buffsObject;
                const buffCheck = buffsRef[buffName];


                const currentStats = currentTurn.statTable;
                const currentEffectRes = currentStats[EffectRES];
                const conversionRatio = currentTurn.lcPerfectTimingERToHealingRATIO;
                const conversionCap = currentTurn.lcPerfectTimingERToHealingCAP;

                const endTotal = +(Math.min(conversionCap,currentEffectRes * conversionRatio)).toFixed(7);;

                if (buffCheck) {
                    const currentAmount = buffCheck[HealingOutgoing];

                    if (currentAmount === endTotal) {return;}

                    removeBuff(battleData,currentTurn,buffCheck,endTotal,null,false,endTotal);
                }

                buffSheet[HealingOutgoing] = endTotal;
                buffSheet[HealingOutgoingNULL] = -endTotal;
                updateBuff(battleData,currentTurn,buffSheet)
            }
        },
        "listeners": [
            {
                "trigger": "PassiveCalls",
                condition(battleData,generalInfo) {
                    let ownerRef = this.owners;
        
                    const namedTurns = battleData.nameBasedTurns;
                    const subListeners = this.subListeners;
                    const ownersSlots = this.ownersSlots;
        
                    for (let owner of ownerRef) {
                        let charSlot = owner.slot;
                        let currentTurn = namedTurns[charSlot];
        
                        addListenerWithPriority(battleData,subListeners[0],subListeners[0].trigger,currentTurn,ownersSlots);
                    }
                },
                "target": "self",
                "listenerName": "Perfect Timing listener setup",
                "owners": [],
                "subListeners": [
                    {
                        "trigger": "UpdateStatEffectRES",//EffectRES stat family
                        condition(battleData,generalInfo) {
                            let sourceTurn = generalInfo.sourceTurn;
                            let ownersSlots = this.ownersSlots;
        
                            const statCheck = this.statCheck ??= turnLogicLightcones["Perfect Timing"].skillFunctions.statCheck;
                            statCheck(battleData,sourceTurn,ownersSlots);
                        },
                        "target": "self",
                        "isPersonal": true,
                        "listenerName": "Perfect Timing EffectRES check",
                    },
                ]
            },
            {
                "trigger": "WaveStart",
                condition(battleData,generalInfo) {
                    let ownerRef = this.owners;
                    let ownersSlots = this.ownersSlots;

                    if (ownerRef.length) {
                        // let relicPathing = relicSets[relicNameRef].params[0];//0-2pc 1-4pc
                        const statCheck = this.statCheck ??= turnLogicLightcones["Perfect Timing"].skillFunctions.statCheck;
                        const namedTurns = battleData.nameBasedTurns;
                        for (let owner of ownerRef) {
                            let charSlot = owner.slot;
                            let currentTurn = namedTurns[charSlot];
                            statCheck(battleData,currentTurn,ownersSlots);
                        }
                    }
                },
                "target": "self",
                "priority": -80,
                "listenerName": "Perfect Timing battle start stat check trigger",
                "owners": []
            },
        ],
        "buffNames": {
            "buff1": "Perfect Timing (LC)",
        },
    },
    "Post-Op Conversation": {//REDONE
        logic(thisTurn,battleData) {},
        "skillFunctions": {},
        "listeners": [
            {
                "trigger": "PassiveCalls",
                condition(battleData,generalInfo) {
                    let ownerRef = this.owners;
                    let ownersSlots = this.ownersSlots;

                    if (ownerRef.length) {
                        // let relicPathing = relicSets[relicNameRef].params[0];//0-2pc 1-4pc
                        // const statCheck = this.statCheck ??= turnLogicLightcones["Perfect Timing"].skillFunctions.statCheck;
                        const namedTurns = battleData.nameBasedTurns;
                        for (let owner of ownerRef) {
                            let charSlot = owner.slot;
                            let currentTurn = namedTurns[charSlot];
                            
                            // statCheck(battleData,currentTurn,ownersSlots);

                            if (!currentTurn.lcPostOpHEALBONUSUSHEET) {
                                let lcNameRef = "Post-Op Conversation";
                                let lcPathing = lightcones[lcNameRef].params;
                                let ownerRank = ownersSlots[currentTurn.name];
                                let rankParams = lcPathing[ownerRank-1];
                                
                                currentTurn.lcPostOpHEALBONUSUSHEET = {
                                    "stats": [HealingOutgoing],
                                    [HealingOutgoing]: rankParams[1],
                                    "source": lcNameRef,
                                    "sourceOwner": currentTurn.properName,
                                    "buffName": turnLogicLightcones[lcNameRef].buffNames.healBonus,
                                    "durationInTurn": null,
                                    "duration": 1,
                                    "AVApplied": 0,
                                    "maxStacks": 1,
                                    "currentStacks": 1,
                                    "decay": false,
                                    "expireType": null,
                                    "actionTags": ["Ultimate"],
                                }
                            }
                            let buffSheet = currentTurn.lcPostOpHEALBONUSUSHEET;
                            updateBuff(battleData,currentTurn,buffSheet);
                        }
                    }
                },
                "target": "self",
                "listenerName": "Post-Op Conversation battlestart ult healing bonus",
                "owners": []
            },
        ],
        "buffNames": {
            "healBonus": "Post-Op Conversation (LC)",
        },
    },
    "What Is Real?": {//REDONE
        logic(thisTurn,battleData) {},
        "skillFunctions": {},
        "listeners": [
            {
                "trigger": "PassiveCalls",
                condition(battleData,generalInfo) {
                    let ownerRef = this.owners;
        
                    const namedTurns = battleData.nameBasedTurns;
                    const subListeners = this.subListeners;
                    const ownersSlots = this.ownersSlots;
        
                    for (let owner of ownerRef) {
                        let charSlot = owner.slot;
                        let currentTurn = namedTurns[charSlot];
        
                        addListenerWithPriority(battleData,subListeners[0],subListeners[0].trigger,currentTurn,ownersSlots);
                    }
                },
                "target": "self",
                "listenerName": "What Is Real? listener setup",
                "owners": [],
                "subListeners": [
                    {
                        "trigger": "AbilityEnd",
                        condition(battleData,generalInfo) {
                            const action = generalInfo.action;
                            if (action != "BasicATK") {return;}
        
                            let sourceTurn = generalInfo.sourceTurn;
        
                            if (!sourceTurn.lcWhatIsRealHealingHEALOBJECT) {
                                let ownersSlots = this.ownersSlots;
                                let ownerRank = ownersSlots[sourceTurn.name];

                                let lcNameRef = "What Is Real?";
                                let lcPathing = lightcones[lcNameRef].params;
                                let rankParams = lcPathing[ownerRank-1];
        
                                const actionTags = ["All","Gear","Heal"];
                                const compositeCacheTag = actionTags + sourceTurn.properName;
                                
                                sourceTurn.lcWhatIsRealHealingHEALOBJECT ??= {
                                    multipliers: {
                                        primary: rankParams[1],
                                        blast: null,
                                        all: null,
                                    },
                                    flatAmounts: {
                                        primary: rankParams[2],
                                        blast: null,
                                        all: null,
                                    },
                                    scalar: "HP",
                                    DMGTags: [],
                                    allToughness: false,
                                    slot: "Lightcone",
                                    actionTags,compositeCacheTag
                                }
                            }
                            const healObject = sourceTurn.lcWhatIsRealHealingHEALOBJECT;
        
                            healAlly(battleData,healObject,sourceTurn,sourceTurn,"Lightcone",1,null);
                        },
                        "target": "team",
                        "isPersonal": true,
                        "listenerName": "What Is Real? basic atk end listener",
                    },
                ]
            },
        ],
        "buffNames": {},
    },
    "Dream's Montage": {//REDONE
        logic(thisTurn,battleData) {},
        "skillFunctions": {},
        "listeners": [
            {
                "trigger": "PassiveCalls",
                condition(battleData,generalInfo) {
                    let ownerRef = this.owners;
        
                    const namedTurns = battleData.nameBasedTurns;
                    const subListeners = this.subListeners;
                    const ownersSlots = this.ownersSlots;
        
                    for (let owner of ownerRef) {
                        let charSlot = owner.slot;
                        let currentTurn = namedTurns[charSlot];
        
                        addListenerWithPriority(battleData,subListeners[0],subListeners[0].trigger,currentTurn,ownersSlots);
                        addListenerWithPriority(battleData,subListeners[1],subListeners[1].trigger,currentTurn,ownersSlots);
                    }
                },
                "target": "self",
                "listenerName": "Dream's Montage listener setup",
                "owners": [],
                "subListeners": [
                    {
                        "trigger": "AttackDMGEnd",
                        condition(battleData,generalInfo) {
                            let sourceTurn = generalInfo.sourceTurn;
                            if (sourceTurn.lcDreamsMontageREGENCOUNTER >= 2) {return;}//abort non-owners
        
                            const targetsGotHit = generalInfo.targetsGotHit;
        
                            let hitWBEnemy = false;
                            const enemyTurns = battleData.enemyBasedTurns;
                            for (let enemySlot in targetsGotHit) {
                                const currentEnemy = enemyTurns[enemySlot];
        
                                if (currentEnemy.isBroken) {
                                    hitWBEnemy = true;
                                    break;
                                }
                            }
        
                            if (hitWBEnemy) {
        
                                if (!sourceTurn.lcDreamsMontageREGENVALUE) {
                                    let ownersSlots = this.ownersSlots;
                                    let ownerRank = ownersSlots[sourceTurn.name];

                                    let lcNameRef = "Dream's Montage";
                                    let lcPathing = lightcones[lcNameRef].params;
                                    let rankParams = lcPathing[ownerRank-1];
        
                                    sourceTurn.lcDreamsMontageREGENVALUE = rankParams[1]
                                }
        
                                const regenValue = sourceTurn.lcDreamsMontageREGENVALUE;
        
                                updateEnergy(battleData,regenValue,sourceTurn,false,"Dream's Montage (LC)");
                                sourceTurn.lcDreamsMontageREGENCOUNTER ??= 0;
                                sourceTurn.lcDreamsMontageREGENCOUNTER++;
                            }
                        },
                        "target": "team",
                        "isPersonal": true,
                        "listenerName": "Dream's Montage ATK End listener",
                    },
                    {
                        "trigger": "PreActionPhase",
                        condition(battleData,generalInfo) {
                            let sourceTurn = generalInfo.sourceTurn;
        
                            sourceTurn.lcDreamsMontageREGENCOUNTER = 0;
                        },
                        "target": "team",
                        "isPersonal": true,
                        "listenerName": "Dream's Montage turn start reset listener",
                    },
                ]
            },
        ],
        "buffNames": {
            // "atkBuff": "Night of Fright (LC)",
        },
    },
    "Shared Feeling": {//REDONE
        logic(thisTurn,battleData) {},
        "skillFunctions": {},
        "listeners": [
            {
                "trigger": "PassiveCalls",
                condition(battleData,generalInfo) {
                    let ownerRef = this.owners;
        
                    const namedTurns = battleData.nameBasedTurns;
                    const subListeners = this.subListeners;
                    const ownersSlots = this.ownersSlots;
        
                    for (let owner of ownerRef) {
                        let charSlot = owner.slot;
                        let currentTurn = namedTurns[charSlot];
        
                        addListenerWithPriority(battleData,subListeners[0],subListeners[0].trigger,currentTurn,ownersSlots);
                    }
                },
                "target": "self",
                "listenerName": "Shared Feeling listener setup",
                "owners": [],
                "subListeners": [
                    {
                        "trigger": "AbilityEnd",
                        condition(battleData,generalInfo) {
                            const action = generalInfo.action;
                            if (action != "Skill") {return;}
        
                            let sourceTurn = generalInfo.sourceTurn;
        
                            if (!sourceTurn.lcSharedFeelingREGENVALUE) {
                                let ownersSlots = this.ownersSlots;
                                let ownerRank = ownersSlots[sourceTurn.name];

                                let lcNameRef = "Shared Feeling";
                                let lcPathing = lightcones[lcNameRef].params;
                                let rankParams = lcPathing[ownerRank-1];
        
                                sourceTurn.lcSharedFeelingREGENVALUE = rankParams[1];
                            }
                            const regen = sourceTurn.lcSharedFeelingREGENVALUE;
        
                            const allyPositions = battleData.fullCharacterArray;
                            for (let ally of allyPositions) {
        
                                updateEnergy(battleData,regen,ally,false,"Shared Feeling (LC)");
                            }
                        },
                        "target": "team",
                        "isPersonal": true,
                        "listenerName": "Shared Feeling Skill End listener",
                    },
                ]
            },
        ],
        "buffNames": {
            // "atkBuff": "Night of Fright (LC)",
        },
    },
    "Quid Pro Quo": {//REDONE
        logic(thisTurn,battleData) {},
        "skillFunctions": {},
        "listeners": [  
            {
                "trigger": "PassiveCalls",
                condition(battleData,generalInfo) {
                    let ownerRef = this.owners;
        
                    const namedTurns = battleData.nameBasedTurns;
                    const subListeners = this.subListeners;
                    const ownersSlots = this.ownersSlots;
        
                    for (let owner of ownerRef) {
                        let charSlot = owner.slot;
                        let currentTurn = namedTurns[charSlot];
        
                        addListenerWithPriority(battleData,subListeners[0],subListeners[0].trigger,currentTurn,ownersSlots);
                    }
                },
                "target": "self",
                "listenerName": "Quid Pro Quo listener setup",
                "owners": [],
                "subListeners": [
                    {
                        "trigger": "PreActionPhase",
                        condition(battleData,generalInfo) {
                            // let ownerRef = this.owners;
                            let sourceTurn = generalInfo.sourceTurn;
        
                            let availableToGive = [];
                            const allyPositions = battleData.allyPositions;
                            for (let targetTurn of allyPositions) {
                                if (targetTurn.name === sourceTurn.name) {continue;}//exclude self from energy considerations
                                else if (targetTurn.specialEnergy || targetTurn.currentEnergy < (targetTurn.maxEnergy * 0.50)) {availableToGive.push(targetTurn.name);}
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
                            
                            let values = sourceTurn.quidProQuoEnergyAmount ??= lightcones["Quid Pro Quo"].params[this.ownersSlots[sourceTurn.name]-1][1];//energy slot
        
                            let chosenCharacter = availableToGive[chosenValue];
                            let luckyBastard = battleData.nameBasedTurns[chosenCharacter];
                            updateEnergy(battleData,values,luckyBastard,false,this.listenerName);
                        },
                        "target": "self",
                        "isPersonal": true,
                        "listenerName": "Quid Pro Quo - Energy buff controller",
                    },
                ]
            },
        ],
        "buffNames": {
            // "hruntingStart": "Hrunting",
            // "hruntingStack": "Hrunting Stack"
        },
    },
    "Warmth Shortens Cold Nights": {//REDONE
        logic(thisTurn,battleData) {},
        "skillFunctions": {},
        "listeners": [
            {
                "trigger": "PassiveCalls",
                condition(battleData,generalInfo) {
                    let ownerRef = this.owners;
        
                    const namedTurns = battleData.nameBasedTurns;
                    const subListeners = this.subListeners;
                    const ownersSlots = this.ownersSlots;
        
                    for (let owner of ownerRef) {
                        let charSlot = owner.slot;
                        let currentTurn = namedTurns[charSlot];
        
                        addListenerWithPriority(battleData,subListeners[0],subListeners[0].trigger,currentTurn,ownersSlots);
                    }
                },
                "target": "self",
                "listenerName": "Multiplication listener setup",
                "owners": [],
                "subListeners": [
                    {
                        "trigger": "AbilityEnd",
                        condition(battleData,generalInfo) {
                            const action = generalInfo.action;
                            if (action != "BasicATK" && action != "Skill") {return;}

                            let sourceTurn = generalInfo.sourceTurn;
                            if (!currentTurn.lcWarmthShortensNightsHEALOBJECT) {
                                let ownersSlots = this.ownersSlots;
                                let ownerRank = ownersSlots[sourceTurn.name];

                                let lcNameRef = "Warmth Shortens Cold Nights";
                                let lcPathing = lightcones[lcNameRef].params;
                                let rankParams = lcPathing[ownerRank-1];
    
                                const actionTags = ["All","Gear","Heal"];
                                const compositeCacheTag = actionTags + currentTurn.properName;
                                
                                currentTurn.lcWarmthShortensNightsHEALOBJECT ??= {
                                    multipliers: {
                                        primary: rankParams[1],
                                        blast: null,
                                        all: null,
                                    },
                                    flatAmounts: {
                                        primary: null,
                                        blast: null,
                                        all: null,
                                    },
                                    scalar: "HP",
                                    DMGTags: [],
                                    allToughness: false,
                                    slot: "Lightcone",
                                    actionTags,compositeCacheTag
                                }
                            }
                            
        
                            const healObject = sourceTurn.lcWarmthShortensNightsHEALOBJECT;
        
                            const allyTargets = battleData.allAllyTargetsArray;
                            healAlly(battleData,healObject,null,sourceTurn,"Lightcone",1,allyTargets);
                        },
                        "target": "team",
                        "isPersonal": true,
                        "listenerName": "Warmth Shortens Cold Nights basic atk/skill end listener",
                        "owners": [],
                        "ownersSlots": {}
                    },
                ]
            },
        ],
        "buffNames": {},
    },
    "Unto Tomorrow's Morrow": {//REDONE
        logic(thisTurn,battleData) {},
        "skillFunctions": {},
        "listeners": [
            {
                "trigger": "WaveStart",
                condition(battleData,generalInfo) {
                    const currentWave = generalInfo.currentWave;
                    if (currentWave != 1) {return;}

                    let ownerRef = this.owners;//would apply at the start to any and all owners, each, hence owners instead of ownersSlots
                    let lcNameRef = "Unto Tomorrow's Morrow";
                    let lcPathing = lightcones[lcNameRef].params;
                    const allyTargets = battleData.allAllyTargetsArray;
                    const buffNames = turnLogicLightcones[lcNameRef].buffNames;
                
                    for (let owner of ownerRef) {
                        let charSlot = owner.slot;
                        let rankParams = lcPathing[owner.rank-1];

                        let currentTurn = battleData.nameBasedTurns[charSlot];
                        let ownerName = currentTurn.properName;

                        const customName = `${buffNames.river} (${currentTurn.properName})`;
                        if (!buffNames[customName]) {buffNames[customName] = customName;}

                        let buffSheet = currentTurn.lcUntoTomorrowMorrowDMGSHEET ??= {
                            "stats": [DamageAll],
                            [DamageAll]: rankParams[2],
                            "source": lcNameRef,
                            "sourceOwner": ownerName,
                            "buffName": customName,
                            "durationInTurn": null,
                            "duration": 1,
                            "AVApplied": 0,
                            "maxStacks": 1,
                            "currentStacks": 1,
                            "decay": false,
                            "expireType": null
                        }
                        
                        updateBuffBatchTargets(battleData,allyTargets,buffSheet);
                    }
                },
                "target": "self",
                "priority": -80,
                "listenerName": "Unto Tomorrow's Morrow - battlestart buff application",
                "owners": [],
            },
            {
                "trigger": "AllyLostHP",
                condition(battleData,generalInfo) {
                    // let ownersSlots = this.ownersSlots;
                    let ownerRef = this.owners;
                    let sourceTurn = generalInfo.sourceTurn;

                    const ratio = (sourceTurn.currentHP / sourceTurn.maxHP) >= 0.5;

                    if (!sourceTurn.lcUntoTomorrowMorrowWASACTIVE && !ratio) {return;}
                    else if (sourceTurn.lcUntoTomorrowMorrowWASACTIVE && ratio) {return;}
                    else if (!sourceTurn.lcUntoTomorrowMorrowWASACTIVE && ratio) {
                        for (let owner of ownerRef) {
                            let charSlot = owner.slot;
                            let currentTurn = battleData.nameBasedTurns[charSlot];
                            let buffSheet = currentTurn.lcUntoTomorrowMorrowDMGSHEET;
                            
                            updateBuff(battleData,sourceTurn,buffSheet);
                        }
                        sourceTurn.lcUntoTomorrowMorrowWASACTIVE = true;
                    }
                    else if (sourceTurn.lcUntoTomorrowMorrowWASACTIVE && !ratio) {
                        for (let owner of ownerRef) {
                            let charSlot = owner.slot;
                            let currentTurn = battleData.nameBasedTurns[charSlot];
                            let buffSheet = currentTurn.lcUntoTomorrowMorrowDMGSHEET;
                            
                            removeBuff(battleData,sourceTurn,buffSheet);
                        }
                        sourceTurn.lcUntoTomorrowMorrowWASACTIVE = false;
                    }
                },
                "target": "self",
                "listenerName": "Unto Tomorrow's Morrow - lost hp listener",
                "owners": [],
            },
            {
                "trigger": "HealEnd",
                condition(battleData,generalInfo) {
                    // let ownersSlots = this.ownersSlots;
                    let ownerRef = this.owners;
                    let sourceTurn = generalInfo.targetTurn;//sourceTurn;

                    const ratio = (sourceTurn.currentHP / sourceTurn.maxHP) >= 0.5;

                    if (!sourceTurn.lcUntoTomorrowMorrowWASACTIVE && !ratio) {return;}
                    else if (sourceTurn.lcUntoTomorrowMorrowWASACTIVE && ratio) {return;}
                    else if (!sourceTurn.lcUntoTomorrowMorrowWASACTIVE && ratio) {
                        for (let owner of ownerRef) {
                            let charSlot = owner.slot;
                            let currentTurn = battleData.nameBasedTurns[charSlot];
                            let buffSheet = currentTurn.lcUntoTomorrowMorrowDMGSHEET;
                            
                            updateBuff(battleData,sourceTurn,buffSheet);
                        }
                        sourceTurn.lcUntoTomorrowMorrowWASACTIVE = true;
                    }
                    else if (sourceTurn.lcUntoTomorrowMorrowWASACTIVE && !ratio) {
                        for (let owner of ownerRef) {
                            let charSlot = owner.slot;
                            let currentTurn = battleData.nameBasedTurns[charSlot];
                            let buffSheet = currentTurn.lcUntoTomorrowMorrowDMGSHEET;
                            
                            removeBuff(battleData,sourceTurn,buffSheet);
                        }
                        sourceTurn.lcUntoTomorrowMorrowWASACTIVE = false;
                    }
                },
                "target": "self",
                "listenerName": "Unto Tomorrow's Morrow - heal hp listener",
                "owners": [],
            },
        ],
        "buffNames": {
            "river": "Unto Tomorrow's Morrow (LC)",
        },
        "buffNamesPerCharacter": {
            "river": "Unto Tomorrow's Morrow (LC)",
        }
    },
        //3star
    "Multiplication": {//REDONE
        logic(thisTurn,battleData) {},
        "skillFunctions": {},
        "listeners": [
            {
                "trigger": "PassiveCalls",
                condition(battleData,generalInfo) {
                    let ownerRef = this.owners;
        
                    const namedTurns = battleData.nameBasedTurns;
                    const subListeners = this.subListeners;
                    const ownersSlots = this.ownersSlots;
        
                    for (let owner of ownerRef) {
                        let charSlot = owner.slot;
                        let currentTurn = namedTurns[charSlot];
        
                        addListenerWithPriority(battleData,subListeners[0],subListeners[0].trigger,currentTurn,ownersSlots);
                    }
                },
                "target": "self",
                "listenerName": "Multiplication listener setup",
                "owners": [],
                "subListeners": [
                    {
                        "trigger": "AbilityStart",
                        condition(battleData,generalInfo) {
                            const action = generalInfo.action;
                            if (action != "BasicATK") {return;}
        
                            let sourceTurn = generalInfo.sourceTurn;
        
                            if (!sourceTurn.lc3starMultiVALUE) {
                                let ownersSlots = this.ownersSlots;
                                let ownerRank = ownersSlots[sourceTurn.name];
                                let lcNameRef = "Multiplication";
                                let lcPathing = lightcones[lcNameRef].params;
                                let rankParams = lcPathing[ownerRank-1];
        
                                sourceTurn.lc3starMultiVALUE = rankParams[0];
                            }
                            const advValue = sourceTurn.lc3starMultiVALUE;
                            actionAdvance(advValue,sourceTurn,battleData,"Multiplication (LC)");
                        },
                        "target": "team",
                        "isPersonal": true,
                        "listenerName": "Multiplication basic atk start advance listener",
                    },
                ]
            },
        ],
        "buffNames": {
            // "atkBuff": "Night of Fright (LC)",
        },
    },
    "Fine Fruit": {//REDONE
        logic(thisTurn,battleData) {},
        "skillFunctions": {},
        "listeners": [
            {
                "trigger": "WaveStart",
                condition(battleData,generalInfo) {
                    // const currentWave = generalInfo.currentWave;
                    if (currentWave != 1) {return;}
                    let ownerRef = this.owners;//would apply at the start to any and all owners, each, hence owners instead of ownersSlots
                    let lcNameRef = "Fine Fruit";
                    let lcPathing = lightcones[lcNameRef].params;

                    const fullCharacterArray = battleData.fullCharacterArray;
                
                    for (let owner of ownerRef) {
                        let rankParams = lcPathing[owner.rank-1];

                        for (let character of fullCharacterArray) {
                            updateEnergy(battleData,rankParams[0],character,false,"Fine Fruit (LC)")
                        }
                    }
                },
                "target": "self",
                "priority": -80,
                "listenerName": "Fine Fruit - battlestart energy regen",
                "owners": [],
            },
        ],
        "buffNames": {
            "river": "Arrows (LC)",
        },
    },
    "Cornucopia": {//REDONE
        logic(thisTurn,battleData) {},
        "skillFunctions": {},
        "listeners": [
            {
                "trigger": "PassiveCalls",
                condition(battleData,generalInfo) {
                    let ownerRef = this.owners;
        
                    const namedTurns = battleData.nameBasedTurns;
                    const subListeners = this.subListeners;
                    const ownersSlots = this.ownersSlots;
        
                    for (let owner of ownerRef) {
                        let charSlot = owner.slot;
                        let currentTurn = namedTurns[charSlot];
        
                        addListenerWithPriority(battleData,subListeners[0],subListeners[0].trigger,currentTurn,ownersSlots);
                        addListenerWithPriority(battleData,subListeners[0],subListeners[0].trigger,currentTurn,ownersSlots);
                    }
                },
                "target": "self",
                "listenerName": "Along the Passing Shore listener setup",
                "owners": [],
                "subListeners": [
                    {
                        "trigger": "AbilityStart",
                        condition(battleData,generalInfo) {
                            const action = generalInfo.action;
                            if (action != "Ultimate" && action != "Skill") {return;}
        
                            let sourceTurn = generalInfo.sourceTurn;

                            if (!sourceTurn.lcCornucopiaBONUSUSHEET) {
                                let ownersSlots = this.ownersSlots;
                                let ownerRank = ownersSlots[sourceTurn.name];
                                let lcNameRef = "Cornucopia";
                                let lcPathing = lightcones[lcNameRef].params;
                                let rankParams = lcPathing[ownerRank-1];
                                
                                sourceTurn.lcCornucopiaBONUSUSHEET = {
                                    "stats": [HealingOutgoing],
                                    [HealingOutgoing]: rankParams[0],
                                    "source": lcNameRef,
                                    "sourceOwner": sourceTurn.properName,
                                    "buffName": turnLogicLightcones[lcNameRef].buffNames.healBonus,
                                    "durationInTurn": null,
                                    "duration": 1,
                                    "AVApplied": 0,
                                    "maxStacks": 1,
                                    "currentStacks": 1,
                                    "decay": false,
                                    "expireType": null,
                                }
                            }
                            let buffSheet = sourceTurn.lcCornucopiaBONUSUSHEET;
                            updateBuff(battleData,sourceTurn,buffSheet);
                        },
                        "target": "team",
                        "isPersonal": true,
                        "listenerName": "Cornucopia ult/skill start listener",
                    },
                    {
                        "trigger": "AbilityEnd",
                        condition(battleData,generalInfo) {
                            const action = generalInfo.action;
                            if (action != "Ultimate" && action != "Skill") {return;}
        
                            let sourceTurn = generalInfo.sourceTurn;
        
                            let buffSheet = sourceTurn.lcCornucopiaBONUSUSHEET;
                            removeBuff(battleData,sourceTurn,buffSheet);
                        },
                        "target": "team",
                        "isPersonal": true,
                        "listenerName": "Cornucopia ult/skill end listener",
                    },
                ]
            },
        ],
        "buffNames": {
            "healBonus": "Cornucopia (LC)",
        },
    },

    //NIHILITY
        //5star
    "Incessant Rain": {//REDONE
        logic(thisTurn,battleData) {},
        "skillFunctions": {},
        "listeners": [
            {
                "trigger": "PassiveCalls",
                condition(battleData,generalInfo) {
                    let ownerRef = this.owners;
        
                    const namedTurns = battleData.nameBasedTurns;
                    const subListeners = this.subListeners;
                    const ownersSlots = this.ownersSlots;
        
                    for (let owner of ownerRef) {
                        let charSlot = owner.slot;
                        let currentTurn = namedTurns[charSlot];
        
                        addListenerWithPriority(battleData,subListeners[0],subListeners[0].trigger,currentTurn,ownersSlots);
                        addListenerWithPriority(battleData,subListeners[1],subListeners[1].trigger,currentTurn,ownersSlots);
                    }
                },
                "target": "self",
                "listenerName": "Along the Passing Shore listener setup",
                "owners": [],
                "subListeners": [
                    {
                        "trigger": "AllyDMGStart",
                        condition(battleData,generalInfo) {
                            // let ownerRef = this.owners;
                            let sourceTurn = generalInfo.sourceTurn;
                            let targetTurn = generalInfo.targetTurn;
        
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
                                    let ownersSlots = this.ownersSlots;
                                    let ownerRank = ownersSlots[sourceTurn.name];
                                    
                                    let lcPathing = lightcones[lcNameRef].params;
                                    let rankParams = lcPathing[ownerRank-1];
        
                                    let values = rankParams[4];
        
                                    sourceTurn.incessantRainCRITSHEET = {
                                        "stats": [CritRateBase],
                                        [CritRateBase]: values,
                                        "source": lcNameRef,
                                        "sourceOwner": sourceTurn.properName,
                                        "buffName": buffName,
                                        "durationInTurn": null,
                                        "duration": 1,
                                        "AVApplied": 0,
                                        "maxStacks": 1,
                                        "currentStacks": 1,
                                        "decay": false,
                                        "expireType": null,
                                        "actionTags": ["All"],
                                    }
                                }
                                
                                let buffSheet = sourceTurn.incessantRainCRITSHEET;
                                updateBuff(battleData,sourceTurn,buffSheet);
                            }
                        },
                        "target": "self",
                        "isPersonal": true,
                        "listenerName": "Incessant Rain - Crit rate check",
                    },
                    {
                        "trigger": "AbilityEnd",
                        condition(battleData,generalInfo) {
                            const poolKey = generalInfo.poolKey;
                            if (alliedPoolKeys.has(poolKey)) {return;}//if this is ally targeting we bounce

                            let sourceTurn = generalInfo.sourceTurn;

                            // let skillType = generalInfo.dmgSlot;
                            // if (skillType != "Skill" && skillType != "Ultimate" && skillType != "Basic ATK") {return;}
                            //jebait, the usetype doesn't matter, this is like hyacine sig all over again watch them patch this later too
        
                            if (!sourceTurn.incessantRainVULNSHEET) {
                                let ownersSlots = this.ownersSlots;
                                let charSlot = sourceTurn.name;
                                let ownerRank = ownersSlots[charSlot];
        
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
                                    "durationInTurn": 2,
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

                            const target = generalInfo.target;
                            for (let enemy of target) {
                                if (enemy.buffsObject[buffName]) {continue;}//do not consider those who already have the buff

                                updateBuff(battleData,enemy,buffSheet);
                                return;
                            }
                            const subTarget = generalInfo.subTarget;
                            for (let enemy of subTarget) {
                                if (enemy.buffsObject[buffName]) {continue;}//do not consider those who already have the buff

                                updateBuff(battleData,enemy,buffSheet);
                                return;
                            }
                        },
                        "target": "enemy",
                        "isPersonal": true,
                        "listenerName": "Incessant Rain Aether Code controller",
                    },
                ]
            },
        ],
        "buffNames": {
            "buff1": "Incessant Rain CRIT Rate",
            "buff2": "Aether Code"
        },
    },
    //TODO: prob revisit source specific stuff, would be convenient if we could action tag them as well
    //but in the meantime we may just keep ulty dmg as a stat
    "Along the Passing Shore": {//REDONE
        logic(thisTurn,battleData) {},
        "skillFunctions": {},
        "listeners": [
            {
                "trigger": "PassiveCalls",
                condition(battleData,generalInfo) {
                    let ownerRef = this.owners;
        
                    const namedTurns = battleData.nameBasedTurns;
                    const subListeners = this.subListeners;
                    const ownersSlots = this.ownersSlots;
        
                    for (let owner of ownerRef) {
                        let charSlot = owner.slot;
                        let currentTurn = namedTurns[charSlot];
        
                        addListenerWithPriority(battleData,subListeners[0],subListeners[0].trigger,currentTurn,ownersSlots);
                    }
                },
                "target": "self",
                "listenerName": "Along the Passing Shore listener setup",
                "owners": [],
                "subListeners": [
                    {
                        "trigger": "HitEnemyStart",
                        condition(battleData,generalInfo) {
                            // let ownerRef = this.owners;
                            let sourceTurn = generalInfo.sourceTurn;
        
                            let targetTurn = generalInfo.targetTurn;
                            const targetsGotHit = generalInfo.targetsGotHit;
                            const currentHitCount = targetsGotHit[targetTurn.name];
                            if (currentHitCount != 1) {return;}
        
                            if (!sourceTurn.lcAlongPassingShoreDMGSHEET) {
                                let ownersSlots = this.ownersSlots;
                                let ownerRank = ownersSlots[sourceTurn.name];

                                let lcNameRef = "Along the Passing Shore";
                                const buffNames = turnLogicLightcones[lcNameRef].buffNames;
                            
                                let lcPathing = lightcones[lcNameRef].params;
                                let rankParams = lcPathing[ownerRank-1];
        
                                sourceTurn.lcAlongPassingShoreDMGSHEET = {
                                    "stats": [DamageAll],
                                    [DamageAll]: rankParams[1],
                                    "source": lcNameRef,
                                    "sourceOwner": sourceTurn.properName,
                                    "buffName": buffNames.buff1,
                                    "durationInTurn": 2,
                                    "duration": 1,
                                    "AVApplied": 0,
                                    "maxStacks": 1,
                                    "currentStacks": 1,
                                    "decay": false,
                                    "expireType": "EndTurn",
                                    "isDebuff": true,
                                    "actionTags": ["All"],
                                    "isSourceSpecific": true
                                }
                                sourceTurn.lcAlongPassingShoreDMGSHEET2 = {
                                    "stats": [DamageAll],
                                    [DamageAll]: rankParams[2],
                                    "source": lcNameRef,
                                    "sourceOwner": sourceTurn.properName,
                                    "buffName": buffNames.buff2,
                                    "durationInTurn": 2,
                                    "duration": 1,
                                    "AVApplied": 0,
                                    "maxStacks": 1,
                                    "currentStacks": 1,
                                    "decay": false,
                                    "expireType": "EndTurn",
                                    "isDebuff": false,//the first is already a debuff, this is not two debuffs just one that we split for performance sake
                                    "actionTags": ["Ultimate"],
                                    "isSourceSpecific": true
                                }
                            }
                            
                            let buffSheet = sourceTurn.lcAlongPassingShoreDMGSHEET;
                            let buffSheet2 = sourceTurn.lcAlongPassingShoreDMGSHEET2;
                            updateBuff(battleData,targetTurn,buffSheet);
                            updateBuff(battleData,targetTurn,buffSheet2);
                        },
                        "target": "self",
                        "isPersonal": true,
                        "listenerName": "Along the Passing Shore - hit enemy start check",
                    },
                ]
            },
        ],
        "buffNames": {
            "buff1": "Along the Passing Shore",
            "buff2": "Along the Passing Shore (Ult)",
        },
    },
    "In the Name of the World": {//REDONE
        logic(thisTurn,battleData) {},
        "skillFunctions": {},
        "listeners": [
            {
                "trigger": "PassiveCalls",
                condition(battleData,generalInfo) {
                    let ownerRef = this.owners;
        
                    const namedTurns = battleData.nameBasedTurns;
                    const subListeners = this.subListeners;
                    const ownersSlots = this.ownersSlots;
        
                    for (let owner of ownerRef) {
                        let charSlot = owner.slot;
                        let currentTurn = namedTurns[charSlot];
        
                        addListenerWithPriority(battleData,subListeners[0],subListeners[0].trigger,currentTurn,ownersSlots);
                        addListenerWithPriority(battleData,subListeners[1],subListeners[1].trigger,currentTurn,ownersSlots);
                        addListenerWithPriority(battleData,subListeners[2],subListeners[2].trigger,currentTurn,ownersSlots);
                    }
                },
                "target": "self",
                "listenerName": "In the Name of the World listener setup",
                "owners": [],
                "subListeners": [
                    {
                        "trigger": "AllyDMGStart",
                        condition(battleData,generalInfo) {
                            // let ownerRef = this.owners;
                            let sourceTurn = generalInfo.sourceTurn;
                            let targetTurn = generalInfo.targetTurn;
                            let buffName = this.buffName ??= turnLogicLightcones["In the Name of the World"].buffNames.buff1;
        
                            let debuffsCount = targetTurn.debuffCounter;
                            let buffCheck = sourceTurn.buffsObject[buffName];
                            let debuffCheck = debuffsCount;
                            if (buffCheck && !debuffCheck) {//if the buff exists, and the debuffs are less than enough
                                removeBuff(battleData,sourceTurn,buffCheck);
                            }
                            else if (!buffCheck && debuffCheck) {//otherwise, if the buff isn't applied yet, then add it
                                if (!sourceTurn.lcNameOfTheWorldDMGSHEET) {
                                    let lcNameRef = "In the Name of the World";
                                    let ownersSlots = this.ownersSlots;
                                    let ownerRank = ownersSlots[sourceTurn.name];
                                    let lcPathing = lightcones[lcNameRef].params;
                                    let rankParams = lcPathing[ownerRank-1];
        
                                    sourceTurn.lcNameOfTheWorldDMGSHEET = {
                                        "stats": [DamageAll],
                                        [DamageAll]: rankParams[0],
                                        "source": lcNameRef,
                                        "sourceOwner": sourceTurn.properName,
                                        "buffName": buffName,
                                        "durationInTurn": null,
                                        "duration": 1,
                                        "AVApplied": 0,
                                        "maxStacks": 1,
                                        "currentStacks": 1,
                                        "decay": false,
                                        "expireType": null,
                                    }
                                }
                                
                                let buffSheet = sourceTurn.lcNameOfTheWorldDMGSHEET;
                                updateBuff(battleData,sourceTurn,buffSheet);
                            }
                        },
                        "target": "self",
                        "isPersonal": true,
                        "listenerName": "In the Name of the World - enemy debuff check",
                    },
                    {
                        "trigger": "AbilityStart",
                        condition(battleData,generalInfo) {
                            const action = generalInfo.action;
                            if (action != "Skill") {return;}
        
                            let sourceTurn = generalInfo.sourceTurn;
        
                            if (!sourceTurn.lcNameOfTheWorldSkillSHEET) {
                                let ownersSlots = this.ownersSlots;
                                let charSlot = sourceTurn.name;
                                let ownerRank = ownersSlots[charSlot];

                                let lcNameRef = "In the Name of the World";
                                let lcPathing = lightcones[lcNameRef].params;
                                let rankParams = lcPathing[ownerRank-1];
                                
                                sourceTurn.lcNameOfTheWorldSkillSHEET = {
                                    "stats": [ATKP,EffectHitRate],
                                    [ATKP]: rankParams[2],
                                    [EffectHitRate]: rankParams[1],
                                    "source": lcNameRef,
                                    "sourceOwner": sourceTurn.properName,
                                    "buffName": turnLogicLightcones[lcNameRef].buffNames.buff2,
                                    "durationInTurn": null,
                                    "duration": 1,
                                    "AVApplied": 0,
                                    "maxStacks": 1,
                                    "currentStacks": 1,
                                    "decay": false,
                                    "expireType": null,
                                }
                            }
                            let buffSheet = sourceTurn.lcNameOfTheWorldSkillSHEET;
                            updateBuff(battleData,sourceTurn,buffSheet);
                        },
                        "target": "self",
                        "isPersonal": true,
                        "listenerName": "In the Name of the World skill start listener",
                    },
                    {
                        "trigger": "AbilityEnd",
                        condition(battleData,generalInfo) {
                            const action = generalInfo.action;
                            if (action != "Skill") {return;}
        
                            let sourceTurn = generalInfo.sourceTurn;
        
                            let buffSheet = sourceTurn.lcNameOfTheWorldSkillSHEET;
                            removeBuff(battleData,sourceTurn,buffSheet);
                        },
                        "target": "self",
                        "isPersonal": true,
                        "listenerName": "In the Name of the World skill end listener",
                    },
                ]
            },
        ],
        "buffNames": {
            "buff1": "In the Name of the World [Debuffed]",
            "buff2": "In the Name of the World [Skill]"
        },
    },
    "Lies Dance on the Breeze": {//REDONE
        logic(thisTurn,battleData) {},
        "skillFunctions": {},
        "listeners": [
            {
                "trigger": "PassiveCalls",
                condition(battleData,generalInfo) {
                    let ownerRef = this.owners;
        
                    const namedTurns = battleData.nameBasedTurns;
                    const subListeners = this.subListeners;
                    const ownersSlots = this.ownersSlots;
        
                    for (let owner of ownerRef) {
                        let charSlot = owner.slot;
                        let currentTurn = namedTurns[charSlot];
        
                        addListenerWithPriority(battleData,subListeners[0],subListeners[0].trigger,currentTurn,ownersSlots);
                    }
                },
                "target": "self",
                "listenerName": "Lies Dance on the Breeze listener setup",
                "owners": [],
                "subListeners": [
                    {
                        "trigger": "AttackDMGEnd",
                        condition(battleData,generalInfo) {
                            // let ownerRef = this.owners;
                            let sourceTurn = generalInfo.sourceTurn;
        
                            if (!sourceTurn.lcLiesAlongBreezeSHREDSHEET1) {
                                let ownersSlots = this.ownersSlots;
                                let ownerRank = ownersSlots[sourceTurn.name];

                                let lcNameRef = "Lies Dance on the Breeze";
                                let buffName = turnLogicLightcones[lcNameRef].buffNames.buff1;
                                let buffName2 = turnLogicLightcones[lcNameRef].buffNames.buff2;
                            
                                let lcPathing = lightcones[lcNameRef].params;
                                let rankParams = lcPathing[ownerRank-1];
        
                                sourceTurn.lcLiesAlongBreezeSHREDSHEET1 = {
                                    "stats": [DEFP],
                                    [DEFP]: -rankParams[2],
                                    "flags": [DEF_DOWN],
                                    "source": lcNameRef,
                                    "sourceOwner": sourceTurn.properName,
                                    "buffName": buffName,
                                    "durationInTurn": 3,
                                    "duration": 2,
                                    "AVApplied": 0,
                                    "maxStacks": 1,
                                    "currentStacks": 1,
                                    "decay": false,
                                    "expireType": "EndTurn",
                                    "isDebuff": true,
                                }
                                sourceTurn.lcLiesAlongBreezeSHREDSHEET2 = {
                                    "stats": [DEFP],
                                    [DEFP]: -rankParams[5],
                                    "flags": [DEF_DOWN],
                                    "source": lcNameRef,
                                    "sourceOwner": sourceTurn.properName,
                                    "buffName": buffName2,
                                    "durationInTurn": 3,
                                    "duration": 2,
                                    "AVApplied": 0,
                                    "maxStacks": 1,
                                    "currentStacks": 1,
                                    "decay": false,
                                    "expireType": "EndTurn",
                                    "isDebuff": true,
                                }
                            }
                            let buffSheet = sourceTurn.lcLiesAlongBreezeSHREDSHEET1;
                            let buffSheet2 = sourceTurn.lcLiesAlongBreezeSHREDSHEET2;
        
        
                            const targetsGotHit = generalInfo.targetsGotHit;
                            const enemyTurns = battleData.enemyBasedTurns;
        
                            const SPDNeeded = 170;
                            const currentSPD = calcs.getSPDFinal(sourceTurn.statTable).SPDFinal;
        
                            const hasValidSPD = currentSPD >= SPDNeeded;
        
                            for (let targetHitSlot in targetsGotHit) {
                                const currentEnemyHit = enemyTurns[targetHitSlot];
        
                                if (currentEnemyHit.isDead) {continue;}
        
                                updateBuff(battleData,currentEnemyHit,buffSheet);
                                if (hasValidSPD) {
                                    updateBuff(battleData,currentEnemyHit,buffSheet2);
                                }
                            }
                        },
                        "target": "self",
                        "isPersonal": true,
                        "listenerName": "Lies Dance on the Breeze - attack DMG end listener",
                    },
                ]
            },
        ],
        "buffNames": {
            "buff1": "Lies Dance on the Breeze [Bamboozle]",
            "buff2": "Lies Dance on the Breeze [Theft]",
        },
    },
    "Long Road Leads Home": {//NO CHANGE
        logic(thisTurn,battleData) {},
        "skillFunctions": {},
        "listeners": [
            {
                "trigger": "BrokeEnemyWeaknessStart",
                condition(battleData,generalInfo) {
                    // let ownerRef = this.owners;
                    let ownersSlots = this.ownersSlots;
                    // let sourceTurn = generalInfo.sourceTurn;
                    // let ownerRank = ownersSlots[sourceTurn.name];
                    // if (!ownerRank) {return;}
                    const targetTurn = generalInfo.targetTurn;



                    const allyTurns = battleData.nameBasedTurns;
                    for (let slotOwner in ownersSlots) {
                        const currentOwner = allyTurns[slotOwner];

                        if (!currentOwner.lcLongRoadsLeadHomeSHEET) {
                            let lcNameRef = "Long Road Leads Home";
                            const buffNames = turnLogicLightcones[lcNameRef].buffNames;
                            let buffName = buffNames.buff1;
                        
                            let lcPathing = lightcones[lcNameRef].params;
                            let ownerRank = ownersSlots[currentOwner.name];
                            let rankParams = lcPathing[ownerRank-1];


                            const customName = `${buffName} (${currentOwner.properName})`;
                            if (!buffNames[customName]) {buffNames[customName] = customName;}
    
                            currentOwner.lcLongRoadsLeadHomeSHEET = {
                                "stats": [VulnBreak],
                                [VulnBreak]: rankParams[2],
                                "source": lcNameRef,
                                "sourceOwner": currentOwner.properName,
                                "buffName": customName,
                                "durationInTurn": 3,
                                "duration": 2,
                                "AVApplied": 0,
                                "maxStacks": 3,
                                "currentStacks": 1,
                                "decay": false,
                                "expireType": "EndTurn",
                                "isDebuff": true,
                            }
                        }
                        let buffSheet = currentOwner.lcLongRoadsLeadHomeSHEET;
                        updateBuff(battleData,targetTurn,buffSheet);
                    }
                },
                "target": "self",
                "listenerName": "Long Road Leads Home - enemy break listener",
                "owners": [],
                "ownersSlots": {},
            },
        ],
        "buffNames": {
            "buff1": "Long Road Leads Home [LC]",
        },
        "buffNamesPerCharacter": {
            "buff1": "Long Road Leads Home [LC]",
        }
    },
    "Solitary Healing": {//REDONE
        logic(thisTurn,battleData) {},
        "skillFunctions": {},
        "listeners": [
            {
                "trigger": "PassiveCalls",
                condition(battleData,generalInfo) {
                    let ownerRef = this.owners;
        
                    const namedTurns = battleData.nameBasedTurns;
                    const subListeners = this.subListeners;
                    const ownersSlots = this.ownersSlots;
        
                    for (let owner of ownerRef) {
                        let charSlot = owner.slot;
                        let currentTurn = namedTurns[charSlot];
        
                        addListenerWithPriority(battleData,subListeners[0],subListeners[0].trigger,currentTurn,ownersSlots);
                    }
                },
                "target": "self",
                "listenerName": "Solitary Healing listener setup",
                "owners": [],
                "subListeners": [
                    {
                        "trigger": "AbilityStart",
                        condition(battleData,generalInfo) {
                            const action = generalInfo.action;
                            if (action != "Ultimate") {return;}
                            
                            let sourceTurn = generalInfo.sourceTurn;
        
                            if (!sourceTurn.lcSolitaryHealingDOTSHEET) {
                                let ownersSlots = this.ownersSlots;
                                let charSlot = sourceTurn.name;
                                let ownerRank = ownersSlots[charSlot];
                                let lcNameRef = "Solitary Healing";
                                let lcPathing = lightcones[lcNameRef].params;
                                let rankParams = lcPathing[ownerRank-1];
                                
                                sourceTurn.lcSolitaryHealingDOTSHEET = {
                                    "stats": [DamageAll],
                                    [DamageAll]: rankParams[1],
                                    "source": lcNameRef,
                                    "sourceOwner": sourceTurn.properName,
                                    "buffName": turnLogicLightcones[lcNameRef].buffNames.buff1,
                                    "durationInTurn": 3,
                                    "duration": 2,
                                    "AVApplied": 0,
                                    "maxStacks": 1,
                                    "currentStacks": 1,
                                    "decay": false,
                                    "expireType": "EndTurn",
                                    "actionTags": ["DOT"],
                                }
                            }
                            let buffSheet = sourceTurn.lcSolitaryHealingDOTSHEET;
                            updateBuff(battleData,sourceTurn,buffSheet);
                        },
                        "target": "self",
                        "isPersonal": true,
                        "listenerName": "Solitary Healing ult start listener",
                    },
                ]
            },
            {
                "trigger": "EnemyDied",
                condition(battleData,generalInfo) {
                    // let ownerRef = this.owners;
                    let ownersSlots = this.ownersSlots;
                    // let sourceTurn = generalInfo.sourceTurn;
                    // let ownerRank = ownersSlots[sourceTurn.name];
                    // if (!ownerRank) {return;}

                    const targetTurn = generalInfo.enemyKilled;

                    let dotsOwned = [];

                    const currentDots = battleData.battleListenersPersonal[targetTurn.properName].PreActionPhase ?? [];

                    for (let dotEntry of currentDots) {
                        if (!dotEntry.isDOT) {continue;}
                        dotsOwned.push(dotEntry.sourceOwner);
                    }

                    const finalSet = new Set (dotsOwned);

                    const allyTurns = battleData.nameBasedTurns;
                    for (let slotOwner in ownersSlots) {
                        const currentOwner = allyTurns[slotOwner];
                        const hadValidDOT = finalSet.has(currentOwner.properName);

                        if (hadValidDOT) {

                            const energyGain = currentOwner.lcSolitaryHealingRegenValue ??= lightcones["Solitary Healing"].params[ownersSlots[currentOwner.name]-1][3]
                            //cursed to do it this way, but since we can't bind it to the event listener, and need superimposition value, we bind it to the turn object of each owner
                            //instead of accessing it every fuckin time
                            updateEnergy(battleData,energyGain,currentOwner,false,"Solitary Healing - Death with DOT Owned")
                        }
                    }
                },
                "target": "self",
                "listenerName": "Solitary Healing - enemy died with owner's dot listener",
                "owners": [],
                "ownersSlots": {},
            },
        ],
        "buffNames": {
            "buff1": "Solitary Healing [Ult]",
        },
    },
    "Patience Is All You Need": {//REDONE
        logic(thisTurn,battleData) {},
        "skillFunctions": {},
        "listeners": [
            {
                "trigger": "PassiveCalls",
                condition(battleData,generalInfo) {
                    let ownerRef = this.owners;
        
                    const namedTurns = battleData.nameBasedTurns;
                    const subListeners = this.subListeners;
                    const ownersSlots = this.ownersSlots;
        
                    for (let owner of ownerRef) {
                        let charSlot = owner.slot;
                        let currentTurn = namedTurns[charSlot];
        
                        addListenerWithPriority(battleData,subListeners[0],subListeners[0].trigger,currentTurn,ownersSlots);
                        addListenerWithPriority(battleData,subListeners[1],subListeners[1].trigger,currentTurn,ownersSlots);
                    }
                },
                "target": "self",
                "listenerName": "Patience Is All You Need listener setup",
                "owners": [],
                "subListeners": [
                    {
                        "trigger": "AttackDMGEnd",
                        condition(battleData,generalInfo) {
                            // let ownerRef = this.owners;
                            let sourceTurn = generalInfo.sourceTurn;
        
                            if (!sourceTurn.patienceIsAllSTACKSHEET) {
                                let ownersSlots = this.ownersSlots;
                                let ownerRank = ownersSlots[sourceTurn.name];

                                let lcNameRef = "Patience Is All You Need";
                                let lcPathing = lightcones[lcNameRef].params;
                                let rankParams = lcPathing[ownerRank-1];
        
                                sourceTurn.patienceIsAllSTACKSHEET = {
                                    "stats": [SPDP],
                                    [SPDP]: rankParams[2],
                                    "source": lcNameRef,
                                    "sourceOwner": sourceTurn.properName,
                                    "buffName": turnLogicLightcones[lcNameRef].buffNames.spdStack,
                                    "durationInTurn": null,
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
                            
                            updateBuff(battleData,sourceTurn,buffSheet);
        
                            if (sourceTurn.buffsObject[buffName].currentStacks === 3) {
                                removeListener(battleData,this,sourceTurn);
                            }
                        },
                        "target": "self",
                        "isPersonal": true,
                        "listenerName": "Patience Is All You Need - SPD% Stack",
                    },
                    {
                        "trigger": "HitEnemyEnd",
                        condition(battleData,generalInfo) {
                            let sourceTurn = generalInfo.sourceTurn;
                                
                            if (!sourceTurn.patienceIsAllErodeDOTSHEET) {
                                let ownersSlots = this.ownersSlots;
                                let ownerRank = ownersSlots[sourceTurn.name];
                                // let characterName = sourceTurn.properName;
                                let lcNameRef = "Patience Is All You Need";
                                let lcPathing = lightcones[lcNameRef].params;
                                let rankParams = lcPathing[ownerRank-1];
                                // let ownerName = sourceTurn.properName;
        
                                const tags = ["All","Lightning"];
                                const keyShortcut = basicShorthand.makeKeysArray;
                                const realDMGKeys = keyShortcut(dmgKeys,tags);
                                const realPENKeys = keyShortcut(resPENKeys,tags);
                                const realShredKeys = keyShortcut(defShredKeys,tags);
                                const realVulnKeys = keyShortcut(vulnKeys,tags);
                                //realDMGKeys,realPENKeys,realShredKeys,realVulnKeys
                                const actionTags = ["All","DOT"];
        
                                let buffName = turnLogicLightcones[lcNameRef].buffNames.erode;
                                sourceTurn.patienceIsAllErodeDOTSHEET = {
                                    "stats": null,
                                    "source": lcNameRef,
                                    "sourceOwner": sourceTurn.properName,
                                    "buffName": buffName,
                                    "durationInTurn": 3,
                                    "duration": 2,
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
        
                            const dotSheet = sourceTurn.patienceIsAllErodeDOTSHEET;
                            const enemiesHit = generalInfo.targetsGotHit;
                            const enemyTurns = battleData.enemyBasedTurns;
                            const targetTurn = generalInfo.targetTurn;
        
                            // console.log(enemiesHit);
                            generalApplyDOT(battleData,sourceTurn,targetTurn,dotSheet,enemiesHit,enemyTurns,true);
                        },
                        "target": "enemy",
                        "isPersonal": true,
                        "listenerName": "Patience Is All You Need - erode application",
                    },
                ]
            },
        ],
        "buffNames": {
            "spdStack": "Patience Is All You Need",
            "erode": "Erode"
        },
    },
    "Why Does the Ocean Sing": {//NO CHANGE YET
        logic(thisTurn,battleData) {},
        "skillFunctions": {
            debuffChecker(battleData,sourceTurn,source,ownerSlot,ownerRank) {
                const buffsRef = sourceTurn.buffsObject;
                let debuffsOwned = 0;
                for (let buffName in buffsRef) {
                    const currentBuff = buffsRef[buffName];
                    if (!currentBuff || !currentBuff.isDebuff) {continue;}
                    const buffOwner = currentBuff.sourceOwner;
                    debuffsOwned += buffOwner === source ? 1 : 0;
                }
                const finalStacks = Math.min(6,debuffsOwned);
                const ownerTurn = battleData.nameBasedTurns[ownerSlot];


                let lcNameRef = "Why Does the Ocean Sing";
                let buffName = turnLogicLightcones[lcNameRef].buffNames.debuffStacks;
                if (!ownerTurn.oceanSingEnthrallmentSHEET) {
                    
                    let lcPathing = lightcones[lcNameRef].params;
                    let rankParams = lcPathing[ownerRank-1];
                    let ownerName = ownerTurn.properName;
                    

                    ownerTurn.oceanSingEnthrallmentSHEET = {
                        "stats": [VulnAll],
                        [VulnAll]: rankParams[3],
                        "source": lcNameRef,
                        "sourceOwner": ownerName,
                        "buffName": buffName,
                        "durationInTurn": 4,
                        "duration": 3,
                        "AVApplied": 0,
                        "maxStacks": 6,
                        "currentStacks": 1,
                        "decay": false,
                        "expireType": "EndTurn",
                        "isDebuff": true,
                        "actionTags": ["DOT"],
                    }
                }
                let buffSheet = ownerTurn.oceanSingEnthrallmentSHEET;
                
                // updateBuff(battleData,sourceTurn,buffSheet);

                const buffCheck = buffsRef[buffName];
                if (buffCheck) {
                    const stackCount = buffCheck.currentStacks;
                    if (stackCount === finalStacks) {
                        buffCheck.duration = sourceTurn.turnState ? buffSheet.durationInTurn : buffSheet.duration;
                        return;
                    }
                    else if (stackCount < finalStacks) {
                        const stackDiff = finalStacks - stackCount;
                        buffSheet.currentStacks = stackDiff;
                        updateBuff(battleData,sourceTurn,buffSheet,false,null,true);
                        //NOTE: future me, if I ever consider removing the ignoreDebuffPokes here, DONT. Shit will memory leak without it.
                        return;
                    }
                    else {
                        if (finalStacks) {
                            removeBuff(battleData,sourceTurn,buffCheck,true,null,true,true);
                        }
                        else {
                            removeBuff(battleData,sourceTurn,buffCheck,false,null);
                            return;
                        }
                    }
                }

                if (!finalStacks) {return;}
                const realStacks = Math.min(6,finalStacks + (!buffCheck ? 1 : 0));
                //since enthrallment counts as a debuff itself, that means when we add the debuff for the first time, we need to make sure that we add +1 stacks to account for that
                //otherwise, what will happen is we'll apply it not accounting for enthrallment being a debuff, then appliedDebuff will trigger again, then we'll add one extra stack anyways
                //so no point in looping through until stacks balance out, just do it here
                buffSheet.currentStacks = realStacks;
                updateBuff(battleData,sourceTurn,buffSheet,false,null,buffCheck);
            }
        },
        "listeners": [
            {
                "trigger": "PassiveCalls",
                condition(battleData,generalInfo) {
                    let ownerRef = this.owners;
        
                    const namedTurns = battleData.nameBasedTurns;
                    const subListeners = this.subListeners;
                    const ownersSlots = this.ownersSlots;

                    const allEnemiesArray = battleData.allEnemiesArray;
                    for (let enemy of allEnemiesArray) {
                        addListenerWithPriority(battleData,subListeners[0],subListeners[0].trigger,enemy,ownersSlots);
                    }
        
                    // for (let owner of ownerRef) {
                    //     let charSlot = owner.slot;
                    //     let currentTurn = namedTurns[charSlot];
        
                    //     addListenerWithPriority(battleData,subListeners[0],subListeners[0].trigger,currentTurn,ownersSlots);
                    // }
                },
                "target": "self",
                "listenerName": "Why Does the Ocean Sing listener setup",
                "owners": [],
                "subListeners": [
                    {
                        "trigger": "WasAttackedStart",
                        condition(battleData,generalInfo,personalOwner) {
                            // let ownerRef = this.owners;
                            let sourceTurn = generalInfo.sourceTurn;
                            if (sourceTurn.isEnemy) {return;}
        
                            let buffNameVuln = this.buffName2 ??= turnLogicLightcones["Why Does the Ocean Sing"].buffNames.debuffStacks;
                            
                            let enthrallRef = null;
                            const buffCheck = personalOwner.buffsObject[buffNameVuln];
                            if (buffCheck) {
                                enthrallRef = buffCheck;
                            }
        
                            if (enthrallRef) {
                                const sourceOwner = enthrallRef.sourceOwner;
                                const ownerSlot = battleData.nameIndex[sourceOwner];
                                let ownersSlots = this.ownersSlots;
                                const ownerRank = ownersSlots[ownerSlot];
                                const ownerTurn = battleData.nameBasedTurns[ownerSlot];
        
                                if (!ownerTurn.oceanSingEnthrallmentSPEEDSHEET) {
                                    let lcNameRef = "Why Does the Ocean Sing";
                                    let lcPathing = lightcones[lcNameRef].params;
                                    let rankParams = lcPathing[ownerRank-1];
                                    let ownerName = ownerTurn.properName;

                                    let buffName = this.buffName ??= turnLogicLightcones["Why Does the Ocean Sing"].buffNames.spdBuff;
            
                                    ownerTurn.oceanSingEnthrallmentSPEEDSHEET = {
                                        "stats":[SPDP],
                                        [SPDP]: rankParams[5],
                                        "source": lcNameRef,
                                        "sourceOwner": ownerName,
                                        "buffName": buffName,
                                        "durationInTurn": 4,
                                        "duration": 3,
                                        "AVApplied": 0,
                                        "maxStacks": 1,
                                        "currentStacks": 1,
                                        "decay": false,
                                        "expireType": "EndTurn",
                                        "isDebuff": false
                                    }
                                }
        
                                let buffSheet = ownerTurn.oceanSingEnthrallmentSPEEDSHEET;
                                updateBuff(battleData,sourceTurn,buffSheet);
                            }
                        },
                        "target": "self",
                        "isPersonal": true,
                        "listenerName": "Why Does the Ocean Sing - SPD check",
                        "owners": [],
                    },
                ]
            },
            {
                "trigger": "DebuffApplied",
                condition(battleData,generalInfo) {
                    // let ownerRef = this.owners;
                    const source = generalInfo.currentReference.sourceOwner;
                    const ownerSlot = battleData.nameIndex[source];

                    let ownersSlots = this.ownersSlots;
                    let ownerRank = ownersSlots[ownerSlot];
                    if (!ownerRank) {return;}//if the debuff owner isn't an owner of the lightcone, abort early
                    
                    const debuffFunction = this.debuffFunction ??= turnLogicLightcones["Why Does the Ocean Sing"].skillFunctions.debuffChecker;

                    const sourceTurn = generalInfo.sourceTurn;
                    if (sourceTurn.length) {
                        for (let entity of sourceTurn) {
                            debuffFunction(battleData,entity,source,ownerSlot,ownerRank);
                        }
                    }
                    else {
                        debuffFunction(battleData,sourceTurn,source,ownerSlot,ownerRank);
                    }
                },
                "target": "self",
                "listenerName": "Why Does the Ocean Sing - debuffs owned check (application)",
                "owners": [],
            },
            {
                "trigger": "DebuffRemoved",
                condition(battleData,generalInfo) {
                    // let ownerRef = this.owners;
                    const source = generalInfo.currentReference.sourceOwner;
                    const ownerSlot = battleData.nameIndex[source];

                    let ownersSlots = this.ownersSlots;
                    let ownerRank = ownersSlots[ownerSlot];
                    if (!ownerRank) {return;}//if the debuff owner isn't an owner of the lightcone, abort early

                    const debuffFunction = this.debuffFunction ??= turnLogicLightcones["Why Does the Ocean Sing"].skillFunctions.debuffChecker;
                    const sourceTurn = generalInfo.sourceTurn;
                    if (sourceTurn.length) {
                        for (let entity of sourceTurn) {
                            debuffFunction(battleData,entity,source,ownerSlot,ownerRank);
                        }
                    }
                    else {
                        debuffFunction(battleData,sourceTurn,source,ownerSlot,ownerRank);
                    }
                },
                "target": "self",
                "listenerName": "Why Does the Ocean Sing - debuffs owned check (removal)",
                "owners": [],
            },
        ],
        "buffNames": {
            "debuffStacks": "Enthrallment [LC]",
            "spdBuff": "Enthrallment SPD [LC]"
        },
    },
    "Reforged Remembrance": {//REDONE
        logic(thisTurn,battleData) {},
        "skillFunctions": {},
        "listeners": [
            {
                "trigger": "PassiveCalls",
                condition(battleData,generalInfo) {
                    let ownerRef = this.owners;
        
                    const namedTurns = battleData.nameBasedTurns;
                    const subListeners = this.subListeners;
                    const ownersSlots = this.ownersSlots;
        
                    for (let owner of ownerRef) {
                        let charSlot = owner.slot;
                        let currentTurn = namedTurns[charSlot];
        
                        addListenerWithPriority(battleData,subListeners[0],subListeners[0].trigger,currentTurn,ownersSlots);
                    }
                },
                "target": "self",
                "listenerName": "Those Many Springs listener setup",
                "owners": [],
                "subListeners": [
                    {
                        "trigger": "AllyDMGStart", 
                        condition(battleData,generalInfo) {
                            const sourceTurn = generalInfo.sourceTurn;
        
                            // const targetsGotHit = generalInfo.targetsGotHit;
                            const targetTurn = generalInfo.targetTurn;
                            if (!targetTurn.debuffCounter) {return;}
                            
                            if (!sourceTurn.reforgedRemembranceSTACKSHEET) {
                                let ownersSlots = this.ownersSlots;
                                let ownerRank = ownersSlots[sourceTurn.name];

                                let lcNameRef = "Reforged Remembrance";
                                const buffNames = turnLogicLightcones[lcNameRef].buffNames;
                                let lcPathing = lightcones[lcNameRef].params;
                                let rankParams = lcPathing[ownerRank-1];
        
                                sourceTurn.reforgedRemembranceSTACKSHEET = {
                                    "stats": [ATKP],
                                    [ATKP]: rankParams[1],
                                    "source": lcNameRef,
                                    "sourceOwner": sourceTurn.properName,
                                    "buffName": buffNames.prophet,
                                    "durationInTurn": null,
                                    "duration": 1,
                                    "AVApplied": 0,
                                    "maxStacks": 4,
                                    "currentStacks": 1,
                                    "decay": false,
                                    "expireType": null,
                                }
                                sourceTurn.reforgedRemembranceSTACKSHEET2 = {
                                    "stats": [DEFShredAll],
                                    [DEFShredAll]: rankParams[2],
                                    "source": lcNameRef,
                                    "sourceOwner": sourceTurn.properName,
                                    "buffName": buffNames.prophetShred,
                                    "durationInTurn": null,
                                    "duration": 1,
                                    "AVApplied": 0,
                                    "maxStacks": 4,
                                    "currentStacks": 1,
                                    "decay": false,
                                    "expireType": null,
                                    "actionTags": ["DOT"],
                                }
                            }
                            let buffSheet = sourceTurn.reforgedRemembranceSTACKSHEET;
                            let buffSheet2 = sourceTurn.reforgedRemembranceSTACKSHEET2;
                            
        
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
                                buffSheet2.currentStacks = stacksToApply;
                                updateBuff(battleData,sourceTurn,buffSheet);
                                updateBuff(battleData,sourceTurn,buffSheet2);
                            }
        
                            const allDone = sourceTurn.reforgedPhysicalStackDone && sourceTurn.reforgedFireStackDone && sourceTurn.reforgedLightningStackDone && sourceTurn.reforgedWindStackDone;
                            if (allDone) {
                                removeListener(battleData,this,sourceTurn);
                            }
                        },
                        "target": "self",
                        "isPersonal": true,
                        "listenerName": "Reforged Remembrance - hit enemy with dot checker",
                    },
                ]
            },
        ],
        "buffNames": {
            "prophet": "Prophet [Reforged Remembrance]",
            "prophetShred": "Prophet (Shred) [Reforged Remembrance]",
        },
    },
    "Those Many Springs": {//REDONE
        logic(thisTurn,battleData) {},
        "skillFunctions": {},
        "listeners": [
            {
                "trigger": "PassiveCalls",
                condition(battleData,generalInfo) {
                    let ownerRef = this.owners;
        
                    const namedTurns = battleData.nameBasedTurns;
                    const subListeners = this.subListeners;
                    const ownersSlots = this.ownersSlots;
        
                    for (let owner of ownerRef) {
                        let charSlot = owner.slot;
                        let currentTurn = namedTurns[charSlot];
        
                        addListenerWithPriority(battleData,subListeners[0],subListeners[0].trigger,currentTurn,ownersSlots);
                    }
                },
                "target": "self",
                "listenerName": "Those Many Springs listener setup",
                "owners": [],
                "subListeners": [
                    {
                        "trigger": "AttackDMGEnd",
                        condition(battleData,generalInfo) {
                            // let ownerRef = this.owners;
        
                            let sourceTurn = generalInfo.sourceTurn;
                            // console.log(generalInfo.dmgSlot)
                            let skillType = generalInfo.dmgSlot;
                            if (skillType != "Skill" && skillType != "Ultimate" && skillType != "Basic ATK") {return;}//will only apply when these attack types happen
        
                            if (!sourceTurn.lcThoseManySpringsVULNSHEET) {
                                let ownersSlots = this.ownersSlots;
                                let charSlot = sourceTurn.name;
                                let ownerRank = ownersSlots[charSlot];

                                let lcNameRef = "Those Many Springs";
                                let lcPathing = lightcones[lcNameRef].params;
                                let rankParams = lcPathing[ownerRank-1];
                                
                                sourceTurn.lcThoseManySpringsVULNSHEET = {
                                    "stats": [VulnAll],
                                    [VulnAll]: rankParams[2],
                                    "source": lcNameRef,
                                    "sourceOwner": sourceTurn.properName,
                                    "buffName": turnLogicLightcones[lcNameRef].buffNames.buff2,
                                    "durationInTurn": 3,
                                    "duration": 2,
                                    "AVApplied": 0,
                                    "maxStacks": 1,
                                    "currentStacks": 1,
                                    "decay": false,
                                    "expireType": "EndTurn",
                                    "isDebuff": true,
                                }
                                sourceTurn.lcThoseManySpringsVULNSHEET2 = {
                                    "stats": [VulnAll],
                                    [VulnAll]: rankParams[2] + rankParams[5],
                                    "source": lcNameRef,
                                    "sourceOwner": sourceTurn.properName,
                                    "buffName": turnLogicLightcones[lcNameRef].buffNames.buff3,
                                    "durationInTurn": 3,
                                    "duration": 2,
                                    "AVApplied": 0,
                                    "maxStacks": 1,
                                    "currentStacks": 1,
                                    "decay": false,
                                    "expireType": "EndTurn",
                                    "isDebuff": true,
                                }
                            }
                            let buffSheet = sourceTurn.lcThoseManySpringsVULNSHEET;
                            let buffSheet2 = sourceTurn.lcThoseManySpringsVULNSHEET2;
                            let buffName = buffSheet.buffName;
                            let buffName2 = buffSheet2.buffName;
                            const targetsAttacked = generalInfo.targetsGotHit;
                            
                            const enemyTurns = battleData.enemyBasedTurns;
                            for (let targetHit in targetsAttacked) {
                                const currentEnemy = enemyTurns[targetHit];
                                const enemyBuffs = currentEnemy.buffsObject;
        
                                const check1 = enemyBuffs[buffName];
                                const check2 = enemyBuffs[buffName2];
                                if (check2 || (check1 && !currentEnemy.DOTCounter)) {continue;}
                                let canApplyOne = false;
                                if (!check1) {
                                    canApplyOne = true;
                                }
        
                                let dotFound = false;
                                if (!check2 && currentEnemy.DOTCounter) {
                                    const enemyDots = battleData.battleListenersPersonal[currentEnemy.properName].PreActionPhase ?? [];
                                    
                                    for (let dotEntry of enemyDots) {
                                        if (!dotEntry.isDOT) {continue}
                                        if (dotEntry.sourceOwner === sourceTurn.properName) {
        
                                            dotFound = true;
                                            break;
                                        }
                                    }
                                }
        
                                if ((check1 || canApplyOne) && dotFound) {
                                    if (check1) {
                                        removeBuff(battleData,currentEnemy,buffSheet);
                                    }
                                    updateBuff(battleData,currentEnemy,buffSheet2);
                                }
                                else if (canApplyOne) {
                                    updateBuff(battleData,currentEnemy,buffSheet);
                                }
                                
                            }  
                        },
                        "target": "enemy",
                        "isPersonal": true,
                        "listenerName": "Those Many Springs vuln controller",
                    },
                ]
            },
        ],
        "buffNames": {
            "buff2": "Unarmored (LC)",
            "buff3": "Cornered (LC)",
        },
    },
    "Reforged in Hellfire": {
        logic(thisTurn,battleData) {},
        "skillFunctions": {},
        "listeners": [
            {
                "trigger": "PassiveCalls",
                condition(battleData,generalInfo) {
                    let ownerRef = this.owners;
        
                    const namedTurns = battleData.nameBasedTurns;
                    const subListeners = this.subListeners;
                    const ownersSlots = this.ownersSlots;
        
                    for (let owner of ownerRef) {
                        let charSlot = owner.slot;
                        let currentTurn = namedTurns[charSlot];
        
                        addListenerWithPriority(battleData,subListeners[0],subListeners[0].trigger,currentTurn,ownersSlots);
                        addListenerWithPriority(battleData,subListeners[1],subListeners[1].trigger,currentTurn,ownersSlots);
                    }
                },
                "target": "self",
                "listenerName": "Reforged in Hellfire listener setup",
                "owners": [],
                "subListeners": [
                    {
                        "trigger": "AttackDMGEnd",
                        condition(battleData,generalInfo) {
                            // let ownerRef = this.owners;
                            let sourceTurn = generalInfo.sourceTurn;
                            // console.log(generalInfo.dmgSlot)
                            let skillType = generalInfo.dmgSlot;
                            if (skillType != "Skill") {return;}//will only apply when these attack types happen
        
                            if (!sourceTurn.lcReforgedInHellfireCRITSHEET) {
                                let ownersSlots = this.ownersSlots;
                                let charSlot = sourceTurn.name;
                                let ownerRank = ownersSlots[charSlot];

                                let lcNameRef = "Reforged in Hellfire";
                                let lcPathing = lightcones[lcNameRef].params;
                                let rankParams = lcPathing[ownerRank-1];
                                
                                sourceTurn.lcReforgedInHellfireCRITSHEET = {
                                    "stats": [CritDamageBase],
                                    [CritDamageBase]: rankParams[3],
                                    "source": lcNameRef,
                                    "sourceOwner": sourceTurn.properName,
                                    "buffName": turnLogicLightcones[lcNameRef].buffNames.purgatory,
                                    "durationInTurn": 3,
                                    "duration": 2,
                                    "AVApplied": 0,
                                    "maxStacks": 1,
                                    "currentStacks": 1,
                                    "decay": false,
                                    "expireType": "EndTurn",
                                    "isDebuff": true,
                                    "actionTags": ["All"],
                                }
                                sourceTurn.lcReforgedInHellfireCRITOwnerSHEET = {
                                    "stats": [CritDamageBase],
                                    [CritDamageBase]: rankParams[4],
                                    "source": lcNameRef,
                                    "sourceOwner": sourceTurn.properName,
                                    "buffName": turnLogicLightcones[lcNameRef].buffNames.purgatory2,
                                    "durationInTurn": 3,
                                    "duration": 2,
                                    "AVApplied": 0,
                                    "maxStacks": 1,
                                    "currentStacks": 1,
                                    "decay": false,
                                    "expireType": "EndTurn",
                                    "isDebuff": false,
                                    "actionTags": ["All"],
                                    "isSourceSpecific": true,
                                }
                            }
                            let buffSheet = sourceTurn.lcReforgedInHellfireCRITSHEET;
                            let buffSheet2 = sourceTurn.lcReforgedInHellfireCRITOwnerSHEET;

                            //TODO: when targets as an array are passed through on attack abilities, come back here
                            const targetsGotHit = generalInfo.targetsGotHit;
                            const enemyBasedTurns = battleData.enemyBasedTurns;
                            let fullTargetHitArray = [];
                            for (let enemySlot in targetsGotHit) {
                                const enemyTurn = enemyBasedTurns[enemySlot];
                                fullTargetHitArray.push(enemyTurn);
                            }

                            updateBuffBatchTargets(battleData,fullTargetHitArray,buffSheet);
                            updateBuffBatchTargets(battleData,fullTargetHitArray,buffSheet2);
                        },
                        "target": "enemy",
                        "isPersonal": true,
                        "listenerName": "Reforged in Hellfire purgatory controller",
                    },
                    {
                        "trigger": "PreActionPhase",
                        condition(battleData,generalInfo) {
                            const sourceTurn = generalInfo.sourceTurn;

                            if (!sourceTurn.lcReforgedInHellfireRegenReady) {return;}
                            sourceTurn.lcReforgedInHellfireRegenReady = false;

                            let energyRegen = 20;//this is not modified by superimposition
                            updateEnergy(battleData,energyRegen,sourceTurn,true,"Reforged in Hellfire");
        
                        },
                        "target": "self",
                        "isPersonal": true,
                        "listenerName": "Reforged in Hellfire turn start listener",
                    },
                ]
            },
            {
                "trigger": "WaveStart",
                condition(battleData,generalInfo) {
                    // let ownerRef = this.owners;
                    let ownersSlots = this.ownersSlots;
                    const namedTurns = battleData.nameBasedTurns;

                    for (let ownerSlot in ownersSlots) {
                        const currentOwner = namedTurns[ownerSlot];

                        currentOwner.lcReforgedInHellfireRegenReady = true;
                    }
                },
                "target": "self",
                "priority": -80,
                "listenerName": "Reforged in Hellfire - battlestart cooldown reset",
            },
        ],
        "buffNames": {
            "purgatory": "Purgatory (LC)",
            "purgatory2": "Purgatory[OWNER] (LC)",
            "buff2": "Unarmored (LC)",
            "buff3": "Cornered (LC)",
        },
    },
    "Never Forget Her Flame": {
        logic(thisTurn,battleData) {},
        "skillFunctions": {},
        "listeners": [
            {
                "trigger": "PassiveCalls",
                condition(battleData,generalInfo) {
                    let ownerRef = this.owners;
        
                    const namedTurns = battleData.nameBasedTurns;
                    const subListeners = this.subListeners;
                    const ownersSlots = this.ownersSlots;
        
                    for (let owner of ownerRef) {
                        let charSlot = owner.slot;
                        let currentTurn = namedTurns[charSlot];

                        currentTurn.lcNeverForgetFlameReady = true;
        
                        addListenerWithPriority(battleData,subListeners[0],subListeners[0].trigger,currentTurn,ownersSlots);
                    }
                },
                "target": "self",
                "listenerName": "Never Forget Her Flame listener setup",
                "owners": [],
                "subListeners": [
                    {
                        "trigger": "AbilityStart",
                        condition(battleData,generalInfo) {
                            const action = generalInfo.action;
                            if (action != "Ultimate") {return;}
                            const sourceTurn = generalInfo.sourceTurn;

                            sourceTurn.lcNeverForgetFlameReady = true;
                        },
                        "target": "self",
                        "isPersonal": true,
                        "listenerName": "Never Forget Her Flame ult start listener",
                    },
                ]
            },
            {
                "trigger": "WaveStart",
                condition(battleData,generalInfo) {
                    // let ownerRef = this.owners;
                    let ownersSlots = this.ownersSlots;
                    const namedTurns = battleData.nameBasedTurns;

                    let firstOwnerTurn = null;
                    for (let ownerSlot in ownersSlots) {
                        const currentOwner = namedTurns[ownerSlot];
                        firstOwnerTurn = currentOwner;


                        if (!currentOwner.lcNeverForgetFlameBREAKMULTISHEET) {
                            let lcNameRef = "Never Forget Her Flame";
                            let lcPathing = lightcones[lcNameRef].params;
                            let ownerRank = ownersSlots[currentOwner.name];
                            let rankParams = lcPathing[ownerRank-1];
        
                            let buffName2 = turnLogicLightcones[lcNameRef].buffNames.buff2;
        
                            currentOwner.lcNeverForgetFlameBREAKMULTISHEET = {
                                "stats": [DamageBreakBonus],
                                [DamageBreakBonus]: rankParams[1],
                                "source": lcNameRef,
                                "sourceOwner": currentOwner.properName,
                                "buffName": buffName2,
                                "durationInTurn": null,
                                "duration": 1,
                                "AVApplied": 0,
                                "maxStacks": 1,
                                "currentStacks": 1,
                                "decay": false,
                                "expireType": null,
                            }
                            
                        }

                        break;
                    }
                    const buffSheet = firstOwnerTurn.lcNeverForgetFlameBREAKMULTISHEET;
                    updateBuff(battleData,firstOwnerTurn,buffSheet);

                    let battleStarter = superGlobal.getStartingAttacker(battleData);
                    if (!battleStarter || battleStarter.properName === firstOwnerTurn) {
                        const allyPositions = battleData.allyPositions;

                        let highestBreak = -Infinity;
                        let highestAlly = null;
                        for (let ally of allyPositions) {
                            if (ally.properName === firstOwnerTurn.properName) {continue;}
                            const breakCheck = ally.statTable[DamageBreak];
                            if (breakCheck > highestBreak) {
                                highestBreak = breakCheck;
                                highestAlly = ally;
                            }
                        }

                        if (highestAlly) {
                            updateBuff(battleData,highestAlly,buffSheet);
                        }
                    }
                    else {
                        updateBuff(battleData,battleStarter,buffSheet);
                    }
                },
                "target": "self",
                "priority": -80,
                "listenerName": "Never Forget Her Flame - battlestart break multi buff",
            },
            {
                "trigger": "WeaknessApplied",
                condition(battleData,generalInfo) {
                    // poke("WeaknessApplied",battleData,{sourceTurn,currentReference},sourceTurn);

                    const oldBuffSheet = generalInfo.currentReference;
                    const nameslot = oldBuffSheet.sourceOwner;
                    const nameTurnSlot = battleData.nameIndex[nameslot];

                    let ownersSlots = this.ownersSlots;
                    const ownerRank = ownersSlots[nameTurnSlot];
                    if (!ownerRank) {return;}

                    const fullTurn = battleData.nameBasedTurns[nameTurnSlot];

                    if (fullTurn.lcNeverForgetFlameReady) {
                        fullTurn.lcNeverForgetFlameReady = false;
                        updateSkillPoints(battleData,1,fullTurn,false,"Never Forget Her Flame")
                    }
                },
                "target": "enemy",
                "listenerName": "Never Forget Her Flame weakness application controller",
            },
        ],
        "buffNames": {
            "buff2": "Immolation [LC]",
        },
    },
        //4star
    "Before the Tutorial Mission Starts": {//REDONE
        logic(thisTurn,battleData) {},
        "skillFunctions": {},
        "listeners": [
            {
                "trigger": "PassiveCalls",
                condition(battleData,generalInfo) {
                    let ownerRef = this.owners;
        
                    const namedTurns = battleData.nameBasedTurns;
                    const subListeners = this.subListeners;
                    const ownersSlots = this.ownersSlots;
        
                    for (let owner of ownerRef) {
                        let charSlot = owner.slot;
                        let currentTurn = namedTurns[charSlot];
        
                        addListenerWithPriority(battleData,subListeners[0],subListeners[0].trigger,currentTurn,ownersSlots);
                    }
                },
                "target": "self",
                "listenerName": "Before the Tutorial Mission Starts listener setup",
                "owners": [],
                "subListeners": [
                    {
                        "trigger": "AttackDMGEnd",
                        condition(battleData,generalInfo) {
                            let sourceTurn = generalInfo.sourceTurn;
        
                            const targetsGotHit = generalInfo.targetsGotHit;
                            const enemyTurns = battleData.enemyBasedTurns;
                            let targetsFound = 0;
                            for (let targetSlot in targetsGotHit) {
                                const currentEnemy = enemyTurns[targetSlot];
                                const DEFCheck = currentEnemy.flags[DEF_DOWN];
        
                                if (DEFCheck) {targetsFound += 1;}
                            }
        
                            
                            if (targetsFound) {
                                if (!sourceTurn.tutorialMissionLCEnergyValues) {
                                    let ownersSlots = this.ownersSlots;
                                    let ownerRank = ownersSlots[sourceTurn.name];
                                    let lcNameRef = "Before the Tutorial Mission Starts";
                                    let lcPathing = lightcones[lcNameRef].params;
                                    sourceTurn.tutorialMissionLCEnergyValues = lcPathing[ownerRank-1];
                                }
        
                                //only ONE regen happens, no matter how many def reduced targets there were
                                const energyToRegen = sourceTurn.tutorialMissionLCEnergyValues[1];
                                updateEnergy(battleData,energyToRegen,sourceTurn,false,"Before the Tutorial Mission Starts");
                            }
                        },
                        "target": "enemy",
                        "isPersonal": true,
                        "listenerName": "Before the Tutorial Mission Starts energy controller",
                    },
                ]
            },
        ],
        "buffNames": {},
    },
    "Resolution Shines As Pearls of Sweat": {//REDONE
        logic(thisTurn,battleData) {},
        "skillFunctions": {},
        "listeners": [
            {
                "trigger": "PassiveCalls",
                condition(battleData,generalInfo) {
                    let ownerRef = this.owners;
        
                    const namedTurns = battleData.nameBasedTurns;
                    const subListeners = this.subListeners;
                    const ownersSlots = this.ownersSlots;
        
                    for (let owner of ownerRef) {
                        let charSlot = owner.slot;
                        let currentTurn = namedTurns[charSlot];
        
                        addListenerWithPriority(battleData,subListeners[0],subListeners[0].trigger,currentTurn,ownersSlots);
                    }
                },
                "target": "self",
                "listenerName": "Resolution Shines As Pearls of Sweat listener setup",
                "owners": [],
                "subListeners": [
                    {
                        "trigger": "HitEnemyStart",
                        condition(battleData,generalInfo) {
                            // let ownerRef = this.owners;
                            let sourceTurn = generalInfo.sourceTurn;
                            let targetTurn = generalInfo.targetTurn;
        
                            let buffName = this.buffName ??= turnLogicLightcones["Resolution Shines As Pearls of Sweat"].buffNames.resolutionDebuff;
                            let buffCheck = targetTurn.buffsObject[buffName];
        
                            if (!buffCheck) {
                                if (!sourceTurn.resolutionShinesDEFSHREDSHEET) {
                                    let lcNameRef = "Resolution Shines As Pearls of Sweat";
                                    let ownersSlots = this.ownersSlots;
                                    let ownerRank = ownersSlots[sourceTurn.name];

                                    let lcPathing = lightcones[lcNameRef].params;
                                    let rankParams = lcPathing[ownerRank-1];
        
                                    sourceTurn.resolutionShinesDEFSHREDSHEET = {
                                        "stats": [DEFP],
                                        [DEFP]: -rankParams[1],
                                        "flags": [DEF_DOWN],
                                        "source": lcNameRef,
                                        "sourceOwner": sourceTurn.properName,
                                        "buffName": buffName,
                                        "durationInTurn": 2,
                                        "duration": 1,
                                        "AVApplied": 0,
                                        "maxStacks": 1,
                                        "currentStacks": 1,
                                        "decay": false,
                                        "isDebuff": true,
                                        "expireType": "EndTurn",
                                    }
                                }
                                
                                let buffSheet = sourceTurn.resolutionShinesDEFSHREDSHEET;
                                updateBuff(battleData,targetTurn,buffSheet);
                            }
                        },
                        "target": "self",
                        "isPersonal": true,
                        "listenerName": "Resolution Shines As Pearls of Sweat - Debuff application handler",
                    },
                ]
            },
        ],
        "buffNames": {
            "resolutionDebuff": "Resolution Shines As Pearls of Sweat",
        },
    },
    "Eyes of the Prey": {//REDONE
        logic(thisTurn,battleData) {},
        "skillFunctions": {},
        "listeners": [
            {
                "trigger": "PassiveCalls",
                condition(battleData,generalInfo) {
                    let ownerRef = this.owners;//would apply at the start to any and all owners, each, hence owners instead of ownersSlots
                    let lcNameRef = "Eyes of the Prey";
                    let lcPathing = lightcones[lcNameRef].params;

                    let buffSheet = this.buffSheet ??= {
                        "stats": [DamageAll],
                        [DamageAll]: 0,
                        "source": lcNameRef,
                        "sourceOwner": "",
                        "buffName": turnLogicLightcones[lcNameRef].buffNames.dotDMG,
                        "durationInTurn": null,
                        "duration": 1,
                        "AVApplied": 0,
                        "maxStacks": 1,
                        "currentStacks": 1,
                        "decay": false,
                        "expireType": null,
                        "actionTags": ["DOT"],
                    }
                    for (let owner of ownerRef) {
                        let charSlot = owner.slot;
                        let rankParams = lcPathing[owner.rank-1];

                        let currentTurn = battleData.nameBasedTurns[charSlot];
                        let ownerName = currentTurn.properName;

                        let values = rankParams[1];

                        buffSheet[DamageAll] = values;
                        buffSheet.sourceOwner = ownerName;
                        
                        updateBuff(battleData,currentTurn,buffSheet);
                    }
                },
                "target": "self",
                "listenerName": "Eyes of the Prey - DOT DMG",
                "owners": [],
            },
        ],
        "buffNames": {
            "dotDMG": "Eyes of the Prey (LC)",
        },
    },
    "Fermata": {//REDONE
        logic(thisTurn,battleData) {},
        "skillFunctions": {},
        "listeners": [
            {
                "trigger": "PassiveCalls",
                condition(battleData,generalInfo) {
                    let ownerRef = this.owners;
        
                    const namedTurns = battleData.nameBasedTurns;
                    const subListeners = this.subListeners;
                    const ownersSlots = this.ownersSlots;
        
                    for (let owner of ownerRef) {
                        let charSlot = owner.slot;
                        let currentTurn = namedTurns[charSlot];
        
                        addListenerWithPriority(battleData,subListeners[0],subListeners[0].trigger,currentTurn,ownersSlots);
                    }
                },
                "target": "self",
                "listenerName": "Fermata listener setup",
                "owners": [],
                "subListeners": [
                    {
                        "trigger": "AllyDMGStart", 
                        condition(battleData,generalInfo) {
                            const sourceTurn = generalInfo.sourceTurn;
        
                            if (!sourceTurn.lcFermataDMGSHEET) {
                                let ownersSlots = this.ownersSlots;
                                let ownerRank = ownersSlots[sourceTurn.name];

                                let lcNameRef = "Fermata";
                                let buffName = turnLogicLightcones[lcNameRef].buffNames.dmgBuff;
                                let lcPathing = lightcones[lcNameRef].params;
                                let rankParams = lcPathing[ownerRank-1];
        
                                sourceTurn.lcFermataDMGSHEET = {
                                    "stats": [DamageAll],
                                    [DamageAll]: rankParams[1],
                                    "source": lcNameRef,
                                    "sourceOwner": sourceTurn.properName,
                                    "buffName": buffName,
                                    "durationInTurn": null,
                                    "duration": 1,
                                    "AVApplied": 0,
                                    "maxStacks": 1,
                                    "currentStacks": 1,
                                    "decay": false,
                                    "expireType": null,
                                }
                            }
                            let buffSheet = sourceTurn.lcFermataDMGSHEET;
        
                            const targetTurn = generalInfo.targetTurn;
                            const targetDOTSCheck = targetTurn.dots;
                            const hasValidDot = targetDOTSCheck.Wind || targetDOTSCheck.Lightning;
        
                            const buffCheck = sourceTurn.buffsObject[buffSheet.buffName];
        
                            if (buffCheck) {
                                if (hasValidDot) {return;}
                                removeBuff(battleData,sourceTurn,buffSheet);
                            }
                            else {
                                if (!hasValidDot) {return;}
                                updateBuff(battleData,sourceTurn,buffSheet);
                            }
                        },
                        "target": "self",
                        "isPersonal": true,
                        "listenerName": "Fermata - dmg dealt listener",
                    },
                ]
            },
        ],
        "buffNames": {
            "dmgBuff": "Fermata (LC)"
        },
    },
    "Good Night and Sleep Well": {//REDONE
        logic(thisTurn,battleData) {},
        "skillFunctions": {},
        "listeners": [
            {
                "trigger": "PassiveCalls",
                condition(battleData,generalInfo) {
                    let ownerRef = this.owners;
        
                    const namedTurns = battleData.nameBasedTurns;
                    const subListeners = this.subListeners;
                    const ownersSlots = this.ownersSlots;
        
                    for (let owner of ownerRef) {
                        let charSlot = owner.slot;
                        let currentTurn = namedTurns[charSlot];
        
                        addListenerWithPriority(battleData,subListeners[0],subListeners[0].trigger,currentTurn,ownersSlots);
                    }
                },
                "target": "self",
                "listenerName": "Good Night and Sleep Well listener setup",
                "owners": [],
                "subListeners": [
                    {
                        "trigger": "AllyDMGStart", 
                        condition(battleData,generalInfo) {
                            const sourceTurn = generalInfo.sourceTurn;
        
                            // const targetsGotHit = generalInfo.targetsGotHit;
                            const targetTurn = generalInfo.targetTurn;
                            const currentDebuffs = Math.min(targetTurn.debuffCounter,3);
                            
                            if (!sourceTurn.lcGoodNightSleepWellSTACKSHEET) {
                                let ownersSlots = this.ownersSlots;
                                let ownerRank = ownersSlots[sourceTurn.name];

                                let lcNameRef = "Good Night and Sleep Well";
                                let buffName = turnLogicLightcones[lcNameRef].buffNames.dmgStack;
                                let lcPathing = lightcones[lcNameRef].params;
                                let rankParams = lcPathing[ownerRank-1];
        
                                sourceTurn.lcGoodNightSleepWellSTACKSHEET = {
                                    "stats": [DamageAll],
                                    [DamageAll]: rankParams[0],
                                    "source": lcNameRef,
                                    "sourceOwner": sourceTurn.properName,
                                    "buffName": buffName,
                                    "durationInTurn": null,
                                    "duration": 1,
                                    "AVApplied": 0,
                                    "maxStacks": 3,
                                    "currentStacks": 1,
                                    "decay": false,
                                    "expireType": null,
                                }
                            }
                            let buffSheet = sourceTurn.lcGoodNightSleepWellSTACKSHEET;
                            
                            const buffCheck = sourceTurn.buffsObject[buffSheet.buffName];
        
                            if (buffCheck) {
                                const currentStacks = buffCheck.currentStacks;
        
                                if (currentStacks === currentDebuffs) {return;}
                                else if (currentStacks < currentDebuffs) {
                                    const stackDiff = currentDebuffs - currentStacks;
                                    buffSheet.currentStacks = stackDiff;
                                    updateBuff(battleData,sourceTurn,buffSheet);
                                    return;
                                }
                                else {
                                    removeBuff(battleData,sourceTurn,buffSheet,currentDebuffs,null,false,currentDebuffs);
                                    //only do silent removal and ignore pokes if we don't have any active debuffs on the target
                                }
                            }
        
                            if (currentDebuffs) {
                                buffSheet.currentStacks = currentDebuffs;
                                updateBuff(battleData,sourceTurn,buffSheet);
                            }
                        },
                        "target": "self",
                        "isPersonal": true,
                        "listenerName": "Good Night and Sleep Well - dmg start debuff checker",
                    },
                ]
            },
        ],
        "buffNames": {
            "dmgStack": "Good Night and Sleep Well (LC)"
        },
    },
    "Holiday Thermae Escapade": {//REDONE
        logic(thisTurn,battleData) {},
        "skillFunctions": {},
        "listeners": [
            {
                "trigger": "PassiveCalls",
                condition(battleData,generalInfo) {
                    let ownerRef = this.owners;
        
                    const namedTurns = battleData.nameBasedTurns;
                    const subListeners = this.subListeners;
                    const ownersSlots = this.ownersSlots;
        
                    for (let owner of ownerRef) {
                        let charSlot = owner.slot;
                        let currentTurn = namedTurns[charSlot];
        
                        addListenerWithPriority(battleData,subListeners[0],subListeners[0].trigger,currentTurn,ownersSlots);
                    }
                },
                "target": "self",
                "listenerName": "Holiday Thermae Escapade listener setup",
                "owners": [],
                "subListeners": [
                    {
                        "trigger": "AttackDMGEnd", 
                        condition(battleData,generalInfo) {
                            const sourceTurn = generalInfo.sourceTurn;
        
                            const targetsGotHit = generalInfo.targetsGotHit;
                            
                            if (!sourceTurn.lcHolidayThermaeVULNSHEET) {
                                let ownersSlots = this.ownersSlots;
                                let ownerRank = ownersSlots[sourceTurn.name];

                                let lcNameRef = "Holiday Thermae Escapade";
                                let buffName = turnLogicLightcones[lcNameRef].buffNames.vuln;
                                let lcPathing = lightcones[lcNameRef].params;
                                let rankParams = lcPathing[ownerRank-1];
        
                                sourceTurn.lcHolidayThermaeVULNSHEET = {
                                    "stats": [VulnAll],
                                    [VulnAll]: rankParams[2],
                                    "source": lcNameRef,
                                    "sourceOwner": sourceTurn.properName,
                                    "buffName": buffName,
                                    "durationInTurn": 3,
                                    "duration": 2,
                                    "AVApplied": 0,
                                    "maxStacks": 1,
                                    "currentStacks": 1,
                                    "decay": false,
                                    "expireType": "EndTurn",
                                    "isDebuff": true,
                                }
                            }
                            let buffSheet = sourceTurn.lcHolidayThermaeVULNSHEET;
        
                            const enemyTurns = battleData.enemyBasedTurns;
        
                            for (let enemySlot in targetsGotHit) {
                                const currentEnemy = enemyTurns[enemySlot];
                                if (currentEnemy.isDead) {continue;}
        
                                updateBuff(battleData,currentEnemy,buffSheet);
                            }
                        },
                        "target": "self",
                        "isPersonal": true,
                        "listenerName": "Holiday Thermae Escapade - attack dmg end listener",
                    },
                ]
            },
        ],
        "buffNames": {
            "vuln": "Holiday Thermae Escapade (LC)"
        },
    },
    "Boundless Choreo": {
        logic(thisTurn,battleData) {},
        "skillFunctions": {},
        "listeners": [
            {
                "trigger": "PassiveCalls",
                condition(battleData,generalInfo) {
                    let ownerRef = this.owners;
        
                    const namedTurns = battleData.nameBasedTurns;
                    const subListeners = this.subListeners;
                    const ownersSlots = this.ownersSlots;
        
                    for (let owner of ownerRef) {
                        let charSlot = owner.slot;
                        let currentTurn = namedTurns[charSlot];
        
                        addListenerWithPriority(battleData,subListeners[0],subListeners[0].trigger,currentTurn,ownersSlots);
                    }
                },
                "target": "self",
                "listenerName": "Boundless Choreo listener setup",
                "owners": [],
                "subListeners": [
                    {
                        "trigger": "AllyDMGStart", 
                        condition(battleData,generalInfo) {
                            const sourceTurn = generalInfo.sourceTurn;
        
                            // const targetsGotHit = generalInfo.targetsGotHit;
                            const targetTurn = generalInfo.targetTurn;
                            const flags = targetTurn.flags;
                            const isSlowed = flags[SPD_DOWN];
                            const isReduced = flags[DEF_DOWN];

                            const isValid = isSlowed || isReduced;
                            
                            if (!sourceTurn.lcBoundlessChoreoCRITSHEET) {
                                let ownersSlots = this.ownersSlots;
                                let ownerRank = ownersSlots[sourceTurn.name];

                                let lcNameRef = "Boundless Choreo";
                                let buffName = turnLogicLightcones[lcNameRef].buffNames.dmgStack;
                                let lcPathing = lightcones[lcNameRef].params;
                                let rankParams = lcPathing[ownerRank-1];
        
                                sourceTurn.lcBoundlessChoreoCRITSHEET = {
                                    "stats": [CritDamageBase],
                                    [CritDamageBase]: rankParams[1],
                                    "source": lcNameRef,
                                    "sourceOwner": sourceTurn.properName,
                                    "buffName": buffName,
                                    "durationInTurn": null,
                                    "duration": 1,
                                    "AVApplied": 0,
                                    "maxStacks": 1,
                                    "currentStacks": 1,
                                    "decay": false,
                                    "expireType": null,
                                    "actionTags": ["All"],
                                }
                            }
                            let buffSheet = sourceTurn.lcBoundlessChoreoCRITSHEET;
                            const buffCheck = sourceTurn.buffsObject[buffSheet.buffName];

                            if (buffCheck) {
                                if (isValid) {return;}
                                removeBuff(battleData,sourceTurn,buffCheck);
                            }
                            else if (isValid) {
                                updateBuff(battleData,sourceTurn,buffSheet);
                            }
                        },
                        "target": "self",
                        "isPersonal": true,
                        "listenerName": "Boundless Choreo - dmg start slow checker",
                    },
                ]
            },
        ],
        "buffNames": {
            "dmgStack": "Boundless Choreo (LC)"
        },
    },
    "We Will Meet Again": {
        logic(thisTurn,battleData) {},
        "skillFunctions": {},
        "listeners": [
            {
                "trigger": "PassiveCalls",
                condition(battleData,generalInfo) {
                    let ownerRef = this.owners;
        
                    const namedTurns = battleData.nameBasedTurns;
                    const subListeners = this.subListeners;
                    const ownersSlots = this.ownersSlots;
        
                    for (let owner of ownerRef) {
                        let charSlot = owner.slot;
                        let currentTurn = namedTurns[charSlot];
        
                        addListenerWithPriority(battleData,subListeners[0],subListeners[0].trigger,currentTurn,ownersSlots);
                        addListenerWithPriority(battleData,subListeners[1],subListeners[1].trigger,currentTurn,ownersSlots);
                        addListenerWithPriority(battleData,subListeners[2],subListeners[2].trigger,currentTurn,ownersSlots);
                    }
                },
                "target": "self",
                "listenerName": "We Will Meet Again listener setup",
                "owners": [],
                "subListeners": [
                    {
                        "trigger": "AttackDMGEnd", 
                        condition(battleData,generalInfo) {
                            const sourceTurn = generalInfo.sourceTurn;
                            if (!sourceTurn.lcWeWillMeetAgainReady) {return;}

                            if (!sourceTurn.lcWeWillMeetAgainPROCSHEET) {
                                let ownersSlots = this.ownersSlots;
                                let ownerRank = ownersSlots[sourceTurn.name];

                                let lcNameRef = "We Will Meet Again";
                                // let buffName = turnLogicLightcones[lcNameRef].buffNames.dmgStack;
                                let lcPathing = lightcones[lcNameRef].params;
                                let rankParams = lcPathing[ownerRank-1];

                                const scalar = "ATK";
                                const tags = ["All",sourceTurn.element];
                                const actionTags = ["All","Additional"];
                                const keyShortcut = basicShorthand.makeKeysArray;
                                const realDMGKeys = keyShortcut(dmgKeys,tags);
                                const realPENKeys = keyShortcut(resPENKeys,tags);
                                const realShredKeys = keyShortcut(defShredKeys,tags);
                                const realVulnKeys = keyShortcut(vulnKeys,tags);
                                const compositeCacheTag = tags + actionTags + sourceTurn.properName;
                                //realDMGKeys,realPENKeys,realShredKeys,realVulnKeys
                                sourceTurn.lcWeWillMeetAgainPROCSHEET = {
                                    multipliers: {
                                        primary: null,
                                        blast: null,
                                        all: null,
                                        additional: rankParams[0]
                                    },
                                    scalar,
                                    element: sourceTurn.element,//override for additional dmg, not used otherwise
                                    DMGTags: tags,
                                    allToughness: false,
                                    slot: null,
                                    realDMGKeys,realPENKeys,realShredKeys,realVulnKeys,
                                    actionTags,
                                    compositeCacheTag
                                }
                            }
                            let ATKObject = sourceTurn.lcWeWillMeetAgainPROCSHEET;

                            const allyAssignedName = sourceTurn.properName;
                            const enemyTurns = battleData.enemyBasedTurns;
                            const addedWrapper = battleActions.additionalDMGWrapper;
                            const targetsGotHit = generalInfo.targetsGotHit;
                            for (let enemySlot in targetsGotHit) {
                                const currentEnemy = enemyTurns[enemySlot];
                                if (currentEnemy.isDead) {continue;}

                                addedWrapper(battleData,sourceTurn,allyAssignedName,ATKObject,currentEnemy,"We Will Meet Again");
                            }
                        },
                        "target": "self",
                        "isPersonal": true,
                        "listenerName": "We Will Meet Again - additional dmg proc",
                    },
                    {
                        "trigger": "AbilityStart", 
                        condition(battleData,generalInfo) {
                            const action = generalInfo.action;
                            if (action != "BasicATK" && action != "Skill") {return;}

                            const sourceTurn = generalInfo.sourceTurn;
                            sourceTurn.lcWeWillMeetAgainReady = true;
                        },
                        "target": "self",
                        "isPersonal": true,
                        "listenerName": "We Will Meet Again - ability check",
                    },
                    {
                        "trigger": "AbilityEnd", 
                        condition(battleData,generalInfo) {
                            const action = generalInfo.action;
                            if (action != "BasicATK" && action != "Skill") {return;}

                            const sourceTurn = generalInfo.sourceTurn;
                            sourceTurn.lcWeWillMeetAgainReady = false;
                        },
                        "target": "self",
                        "isPersonal": true,
                        "listenerName": "We Will Meet Again - ability end clear",
                    },
                ]
            },
        ],
        "buffNames": {
            // "dmgStack": "Boundless Choreo (LC)"
        },
    },
        //3star
    "Void": {//REDONE
        logic(thisTurn,battleData) {},
        "skillFunctions": {},
        "listeners": [
            {
                "trigger": "PassiveCalls",
                condition(battleData,generalInfo) {
                    let ownerRef = this.owners;//would apply at the start to any and all owners, each, hence owners instead of ownersSlots
                    let lcNameRef = "Void";
                    let lcPathing = lightcones[lcNameRef].params;
                    
                    for (let owner of ownerRef) {
                        let charSlot = owner.slot;
                        let rankParams = lcPathing[owner.rank-1];

                        let currentTurn = battleData.nameBasedTurns[charSlot];
                        let ownerName = currentTurn.properName;

                        const buffSheet = currentTurn.lcVoidEHRSHEET ??= {
                            "stats": [EffectHitRate],
                            [EffectHitRate]: rankParams[0],
                            "source": lcNameRef,
                            "sourceOwner": ownerName,
                            "buffName": turnLogicLightcones[lcNameRef].buffNames.buff1,
                            "durationInTurn": 4,
                            "duration": 3,
                            "AVApplied": 0,
                            "maxStacks": 1,
                            "currentStacks": 1,
                            "decay": false,
                            "expireType": "EndTurn"
                        }
                        
                        updateBuff(battleData,currentTurn,buffSheet);
                    }
                },
                "target": "self",
                "listenerName": "Void - battlestart EHR application",
                "owners": [],
            },
        ],
        "buffNames": {
            "buff1": "Void (LC)",
        },
    },
    "Loop": {
        logic(thisTurn,battleData) {},
        "skillFunctions": {},
        "listeners": [
            {
                "trigger": "PassiveCalls",
                condition(battleData,generalInfo) {
                    let ownerRef = this.owners;
        
                    const namedTurns = battleData.nameBasedTurns;
                    const subListeners = this.subListeners;
                    const ownersSlots = this.ownersSlots;
        
                    for (let owner of ownerRef) {
                        let charSlot = owner.slot;
                        let currentTurn = namedTurns[charSlot];
        
                        addListenerWithPriority(battleData,subListeners[0],subListeners[0].trigger,currentTurn,ownersSlots);
                    }
                },
                "target": "self",
                "listenerName": "Loop listener setup",
                "owners": [],
                "subListeners": [
                    {
                        "trigger": "AllyDMGStart", 
                        condition(battleData,generalInfo) {
                            const sourceTurn = generalInfo.sourceTurn;
        
                            // const targetsGotHit = generalInfo.targetsGotHit;
                            const targetTurn = generalInfo.targetTurn;
                            const isSlowed = targetTurn.flags[SPD_DOWN];
                            
                            if (!sourceTurn.lcLoopSlowDMGSHEET) {
                                let ownersSlots = this.ownersSlots;
                                let ownerRank = ownersSlots[sourceTurn.name];

                                let lcNameRef = "Loop";
                                let buffName = turnLogicLightcones[lcNameRef].buffNames.dmgStack;
                                let lcPathing = lightcones[lcNameRef].params;
                                let rankParams = lcPathing[ownerRank-1];
        
                                sourceTurn.lcLoopSlowDMGSHEET = {
                                    "stats": [DamageAll],
                                    [DamageAll]: rankParams[0],
                                    "source": lcNameRef,
                                    "sourceOwner": sourceTurn.properName,
                                    "buffName": buffName,
                                    "durationInTurn": null,
                                    "duration": 1,
                                    "AVApplied": 0,
                                    "maxStacks": 1,
                                    "currentStacks": 1,
                                    "decay": false,
                                    "expireType": null,
                                    "actionTags": ["All"],
                                }
                            }
                            let buffSheet = sourceTurn.lcLoopSlowDMGSHEET;
                            const buffCheck = sourceTurn.buffsObject[buffSheet.buffName];

                            if (buffCheck) {
                                if (isSlowed) {return;}
                                removeBuff(battleData,sourceTurn,buffCheck);
                            }
                            else if (isSlowed) {
                                updateBuff(battleData,sourceTurn,buffSheet);
                            }
                        },
                        "target": "self",
                        "isPersonal": true,
                        "listenerName": "Loop - dmg start slow checker",
                    },
                ]
            },
        ],
        "buffNames": {
            "dmgStack": "Loop (LC)"
        },
    },
    "Hidden Shadow": {
        logic(thisTurn,battleData) {},
        "skillFunctions": {},
        "listeners": [
            {
                "trigger": "PassiveCalls",
                condition(battleData,generalInfo) {
                    let ownerRef = this.owners;
        
                    const namedTurns = battleData.nameBasedTurns;
                    const subListeners = this.subListeners;
                    const ownersSlots = this.ownersSlots;
        
                    for (let owner of ownerRef) {
                        let charSlot = owner.slot;
                        let currentTurn = namedTurns[charSlot];
        
                        addListenerWithPriority(battleData,subListeners[0],subListeners[0].trigger,currentTurn,ownersSlots);
                        addListenerWithPriority(battleData,subListeners[1],subListeners[1].trigger,currentTurn,ownersSlots);
                        addListenerWithPriority(battleData,subListeners[2],subListeners[2].trigger,currentTurn,ownersSlots);
                    }
                },
                "target": "self",
                "listenerName": "Hidden Shadow listener setup",
                "owners": [],
                "subListeners": [
                    {
                        "trigger": "AttackDMGEnd", 
                        condition(battleData,generalInfo) {
                            const sourceTurn = generalInfo.sourceTurn;
                            if (!sourceTurn.lcHiddenShadowBasicReady) {return;}

                            if (!sourceTurn.lcHiddenShadowPROCSHEET) {
                                let ownersSlots = this.ownersSlots;
                                let ownerRank = ownersSlots[sourceTurn.name];

                                let lcNameRef = "Hidden Shadow";
                                // let buffName = turnLogicLightcones[lcNameRef].buffNames.dmgStack;
                                let lcPathing = lightcones[lcNameRef].params;
                                let rankParams = lcPathing[ownerRank-1];

                                const scalar = "ATK";
                                const tags = ["All",sourceTurn.element];
                                const actionTags = ["All","Additional"];
                                const keyShortcut = basicShorthand.makeKeysArray;
                                const realDMGKeys = keyShortcut(dmgKeys,tags);
                                const realPENKeys = keyShortcut(resPENKeys,tags);
                                const realShredKeys = keyShortcut(defShredKeys,tags);
                                const realVulnKeys = keyShortcut(vulnKeys,tags);
                                const compositeCacheTag = tags + actionTags + sourceTurn.properName;
                                //realDMGKeys,realPENKeys,realShredKeys,realVulnKeys
                                sourceTurn.lcHiddenShadowPROCSHEET = {
                                    multipliers: {
                                        primary: null,
                                        blast: null,
                                        all: null,
                                        additional: rankParams[0]
                                    },
                                    scalar,
                                    element: sourceTurn.element,//override for additional dmg, not used otherwise
                                    DMGTags: tags,
                                    allToughness: false,
                                    slot: null,
                                    realDMGKeys,realPENKeys,realShredKeys,realVulnKeys,
                                    actionTags,
                                    compositeCacheTag
                                }
                            }
                            let ATKObject = sourceTurn.lcHiddenShadowPROCSHEET;

                            const allyAssignedName = sourceTurn.properName;
                            const enemyTurns = battleData.enemyBasedTurns;
                            const addedWrapper = battleActions.additionalDMGWrapper;
                            const targetsGotHit = generalInfo.targetsGotHit;
                            for (let enemySlot in targetsGotHit) {
                                const currentEnemy = enemyTurns[enemySlot];
                                if (currentEnemy.isDead) {continue;}

                                addedWrapper(battleData,sourceTurn,allyAssignedName,ATKObject,currentEnemy,"Hidden Shadow");
                            }
                        },
                        "target": "self",
                        "isPersonal": true,
                        "listenerName": "Hidden Shadow - additional dmg proc",
                    },
                    {
                        "trigger": "AbilityStart", 
                        condition(battleData,generalInfo) {
                            const action = generalInfo.action;
                            if (action != "BasicATK") {return;}

                            const sourceTurn = generalInfo.sourceTurn;
                            if (sourceTurn.lcHiddenShadowSkillReady) {
                                sourceTurn.lcHiddenShadowSkillReady = false;
                                sourceTurn.lcHiddenShadowBasicReady = true;
                            }
                        },
                        "target": "self",
                        "isPersonal": true,
                        "listenerName": "Hidden Shadow - ability check",
                    },
                    {
                        "trigger": "AbilityEnd", 
                        condition(battleData,generalInfo) {
                            const action = generalInfo.action;
                            if (action != "BasicATK" && action != "Skill") {return;}

                            const sourceTurn = generalInfo.sourceTurn;
                            if (action === "Skill") {
                                sourceTurn.lcHiddenShadowSkillReady = true;
                            }
                            else {
                                sourceTurn.lcHiddenShadowBasicReady = false;
                            }
                        },
                        "target": "self",
                        "isPersonal": true,
                        "listenerName": "Hidden Shadow - ability end clear",
                    },
                ]
            },
        ],
        "buffNames": {
            // "dmgStack": "Boundless Choreo (LC)"
        },
    },

    //DESTRUCTION
        //5star
    "Whereabouts Should Dreams Rest": {//REDONE
        logic(thisTurn,battleData) {},
        "skillFunctions": {},
        "listeners": [
            {
                "trigger": "PassiveCalls",
                condition(battleData,generalInfo) {
                    let ownerRef = this.owners;
        
                    const namedTurns = battleData.nameBasedTurns;
                    const subListeners = this.subListeners;
                    const ownersSlots = this.ownersSlots;
        
                    for (let owner of ownerRef) {
                        let charSlot = owner.slot;
                        let currentTurn = namedTurns[charSlot];
        
                        addListenerWithPriority(battleData,subListeners[0],subListeners[0].trigger,currentTurn,ownersSlots);
                    }
                },
                "target": "self",
                "listenerName": "Whereabouts Should Dreams Rest listener setup",
                "owners": [],
                "subListeners": [
                    {
                        "trigger": "BreakDMGStart",
                        condition(battleData,generalInfo) {
                            let sourceTurn = generalInfo.sourceTurn;
                            let targetTurn = generalInfo.targetTurn;
                            // {targetTurn,sourceTurn};
        
                            if (!sourceTurn.whereaboutsDreamsRestSPDDEBUFF) {
                                let ownersSlots = this.ownersSlots;
                                let ownerRank = ownersSlots[sourceTurn.name];

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
                                    "flags": [SPD_DOWN],
                                    "source": lcNameRef,
                                    "sourceOwner": sourceTurn.properName,
                                    "buffName": buffName,
                                    "durationInTurn": 3,
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
                                    "durationInTurn": 3,
                                    "duration": 2,
                                    "AVApplied": 0,
                                    "maxStacks": 1,
                                    "currentStacks": 1,
                                    "decay": false,
                                    "expireType": "EndTurn",
                                    "actionTags": ["All"],
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
                                updateBuff(battleData,targetTurn,buffSheet);
                            }
        
                            if (!buffCheck2 || (buffCheck2 && buffCheck2.duration != (turnState ? 3 : 2))) {
                                //if the character specific vuln debuff doesn't exist, or if it does and isn't refreshed already, then apply it. Otherwise skip the buff update call
                                updateBuff(battleData,targetTurn,buffSheet2);
                            }
                            
        
                        },
                        "target": "self",
                        "isPersonal": true,
                        "listenerName": "Whereabouts Should Dreams Rest - Break dmg check",
                    },
                ]
            },
        ],
        "buffNames": {
            "buff1": "Routed",
        },
        "buffNamesPerCharacter": {
            "buff1": "Routed",
        }
    },
    "A Thankless Coronation": {//REDONE
        logic(thisTurn,battleData) {},
        "skillFunctions": {},
        "listeners": [
            {
                "trigger": "PassiveCalls",
                condition(battleData,generalInfo) {
                    let ownerRef = this.owners;
        
                    const namedTurns = battleData.nameBasedTurns;
                    const subListeners = this.subListeners;
                    const ownersSlots = this.ownersSlots;
        
                    for (let owner of ownerRef) {
                        let charSlot = owner.slot;
                        let currentTurn = namedTurns[charSlot];
        
                        addListenerWithPriority(battleData,subListeners[0],subListeners[0].trigger,currentTurn,ownersSlots);
                    }
                },
                "target": "self",
                "listenerName": "On the Fall of an Aeon listener setup",
                "owners": [],
                "subListeners": [
                    {
                        "trigger": "AbilityStart",
                        condition(battleData,generalInfo) {
                            const action = generalInfo.action;
                            if (action != "Ultimate") {return;}
        
                            let sourceTurn = generalInfo.sourceTurn;
        
                            if (!sourceTurn.thanklessCoronationATKSHEET) {
                                let ownersSlots = this.ownersSlots;
                                let ownerRank = ownersSlots[sourceTurn.name];

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
                                    "durationInTurn": 3,
                                    "duration": 2,
                                    "AVApplied": 0,
                                    "maxStacks": 1,
                                    "currentStacks": 1,
                                    "decay": false,
                                    "expireType": "EndTurn",
                                }
                            }
        
                            const buffSheet = sourceTurn.thanklessCoronationATKSHEET;
                            updateBuff(battleData,sourceTurn,buffSheet);
        
                            const energyMax = sourceTurn.maxEnergy;
                            const energyCheck = energyMax >= 300;
                            if (energyCheck) {
                                const energyBump = energyMax * 0.10;
                                updateEnergy(battleData,energyBump,sourceTurn,true,"A Thankless Coronation");
                            }
                        },
                        "target": "self",
                        "isPersonal": true,
                        "listenerName": "A Thankless Coronation - ult buff trigger",
                    },
                ]
            },
        ],
        "buffNames": {
            "buff1": "King of Knights",
        },
    },
    "On the Fall of an Aeon": {//REDONE
        logic(thisTurn,battleData) {},
        "skillFunctions": {},
        "listeners": [
            {
                "trigger": "PassiveCalls",
                condition(battleData,generalInfo) {
                    let ownerRef = this.owners;
        
                    const namedTurns = battleData.nameBasedTurns;
                    const subListeners = this.subListeners;
                    const ownersSlots = this.ownersSlots;
        
                    for (let owner of ownerRef) {
                        let charSlot = owner.slot;
                        let currentTurn = namedTurns[charSlot];
        
                        addListenerWithPriority(battleData,subListeners[0],subListeners[0].trigger,currentTurn,ownersSlots);
                        addListenerWithPriority(battleData,subListeners[1],subListeners[1].trigger,currentTurn,ownersSlots);
                    }
                },
                "target": "self",
                "listenerName": "On the Fall of an Aeon listener setup",
                "owners": [],
                "subListeners": [
                    {
                        "trigger": "BrokeEnemyWeakness",
                        condition(battleData,generalInfo) {
                            // let ownerRef = this.owners;
                            let sourceTurn = generalInfo.sourceTurn;
        
                            if (!sourceTurn.onTheFallAeonDMGSHEET) {
                                let ownersSlots = this.ownersSlots;
                                let ownerRank = ownersSlots[sourceTurn.name];
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
                                    "durationInTurn": 3,
                                    "duration": 2,
                                    "AVApplied": 0,
                                    "maxStacks": 1,
                                    "currentStacks": 1,
                                    "decay": false,
                                    "expireType": "EndTurn",
                                }
                            }
                            const buffSheet = sourceTurn.onTheFallAeonDMGSHEET;
                            updateBuff(battleData,sourceTurn,buffSheet);
                        },
                        "target": "self",
                        "isPersonal": true,
                        "listenerName": "On the Fall of an Aeon - broke enemy",
                    },
                    {
                        "trigger": "AttackStart",
                        condition(battleData,generalInfo) {
                            // let ownerRef = this.owners;
                            let sourceTurn = generalInfo.sourceTurn;
        
                            if (!sourceTurn.onTheFallAeonATKSHEET) {
                                let ownersSlots = this.ownersSlots;
                                let ownerRank = ownersSlots[sourceTurn.name];
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
                                    "durationInTurn": null,
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
                            
                            updateBuff(battleData,sourceTurn,buffSheet);
        
                            if (sourceTurn.buffsObject[buffName].currentStacks === 4) {
                                removeListener(battleData,this,sourceTurn);
                            }
                        },
                        "target": "self",
                        "isPersonal": true,
                        "listenerName": "On the Fall of an Aeon - ATK stack",
                    },
                ]
            },
        ],
        "buffNames": {
            "attackStack": "On the Fall of an Aeon (ATK)",
            "breakDMG": "On the Fall of an Aeon (DMG)",
        },
    },
    "The Unreachable Side": {
        logic(thisTurn,battleData) {},
        "skillFunctions": {
            stackGain(battleData,sourceTurn,ownersSlots) {
                if (!sourceTurn.unreachableSideDMGSHEET) {
                    let ownerRank = ownersSlots[sourceTurn.name];
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
                        "durationInTurn": null,
                        "duration": 1,
                        "AVApplied": 0,
                        "maxStacks": 1,
                        "currentStacks": 1,
                        "decay": false,
                        "expireType": null,
                    }
                }

                const buffSheet = sourceTurn.unreachableSideDMGSHEET;
                
                updateBuff(battleData,sourceTurn,buffSheet);
            },
        },
        "listeners": [
            {
                "trigger": "PassiveCalls",
                condition(battleData,generalInfo) {
                    let ownerRef = this.owners;
        
                    const namedTurns = battleData.nameBasedTurns;
                    const subListeners = this.subListeners;
                    const ownersSlots = this.ownersSlots;
        
                    for (let owner of ownerRef) {
                        let charSlot = owner.slot;
                        let currentTurn = namedTurns[charSlot];
        
                        addListenerWithPriority(battleData,subListeners[0],subListeners[0].trigger,currentTurn,ownersSlots);
                        addListenerWithPriority(battleData,subListeners[1],subListeners[1].trigger,currentTurn,ownersSlots);
                        addListenerWithPriority(battleData,subListeners[2],subListeners[2].trigger,currentTurn,ownersSlots);
                    }
                },
                "target": "self",
                "listenerName": "The Unreachable Side listener setup",
                "owners": [],
                "subListeners": [
                    {
                        "trigger": "AllyLostHP",
                        condition(battleData,generalInfo) {
                            const wasAttack = generalInfo.wasAttack;
                            if (wasAttack) {return;}
                            let sourceTurn = generalInfo.sourceTurn;
        
                            const causeTurn = generalInfo.lossSource;
                            if (causeTurn && causeTurn.properName != sourceTurn.properName) {return;}//and if the cause of the HP loss in the case of a consume only, isn't the same as the one having their hp consumed, then abort
        
                            let ownersSlots = this.ownersSlots;
                            const stackGain = this.stackGain ??= turnLogicLightcones["The Unreachable Side"].skillFunctions.stackGain;
                            stackGain(battleData,sourceTurn,ownersSlots);
                        },
                        "target": "self",
                        "isPersonal": true,
                        "listenerName": "The Unreachable Side - hp lost listener",
                        "owners": [],
                        "ownersSlots": {},
                    },
                    {
                        "trigger": "AttackDMGEnd",
                        condition(battleData,generalInfo) {
                            // let ownersSlots = this.ownersSlots;
                            let sourceTurn = generalInfo.sourceTurn;;
        
                            const buffSheet = sourceTurn.unreachableSideDMGSHEET;
                            if (!buffSheet || !sourceTurn.buffsObject[buffSheet.buffName]) {return;}
                            //if the buff sheet hasn't been constructed on the owner yet, or if the owner doesn't even have the buff, then abort
        
                            removeBuff(battleData,sourceTurn,buffSheet);
                        },
                        "target": "self",
                        "isPersonal": true,
                        "listenerName": "The Unreachable Side - attack end listener",
                        "owners": [],
                        "ownersSlots": {},
                    },
                    {
                        "trigger": "WasAttackedEnd",
                        condition(battleData,generalInfo,personalOwner) {
                            // let ownersSlots = this.ownersSlots;
                            // let sourceTurn = generalInfo.sourceTurn;

                            let ownersSlots = this.ownersSlots;
                            const stackGain = this.stackGain ??= turnLogicLightcones["The Unreachable Side"].skillFunctions.stackGain;
                            stackGain(battleData,personalOwner,ownersSlots);
                        },
                        "target": "self",
                        "isPersonal": true,
                        "listenerName": "The Unreachable Side - attack received listener",
                        "owners": [],
                        "ownersSlots": {},
                    },
                ]
            },
        ],
        "buffNames": {
            "dmgBuff": "The Unreachable Side [LC]"
        },
    },
    "Something Irreplaceable": {
        logic(thisTurn,battleData) {},
        "skillFunctions": {
            buffApplication(battleData,sourceTurn,ownerRank) {

                if (!sourceTurn.lcSomethingIrreplaceableDMGSHEET) {
                    let lcNameRef = "Something Irreplaceable";
                    let lcPathing = lightcones[lcNameRef].params;
                    let rankParams = lcPathing[ownerRank-1];
                    let buffName = turnLogicLightcones[lcNameRef].buffNames.buff1;

                    sourceTurn.lcSomethingIrreplaceableDMGSHEET = {
                        "stats": [DamageAll],
                        [DamageAll]: rankParams[2],
                        "source": lcNameRef,
                        "sourceOwner": sourceTurn.properName,
                        "buffName": buffName,
                        "durationInTurn": 1,
                        "duration": 1,
                        "AVApplied": 0,
                        "maxStacks": 1,
                        "currentStacks": 1,
                        "decay": false,
                        "expireType": "EndTurn",
                    }

                    const actionTags = ["All","Gear","Heal"];
                    const compositeCacheTag = actionTags + sourceTurn.properName;

                    sourceTurn.lcSomethingIrreplaceableHealObject ??= {
                        multipliers: {
                            primary: rankParams[1],
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
                        slot: "Lightcone",
                        actionTags,compositeCacheTag
                    }
                }
                const healObject = sourceTurn.lcSomethingIrreplaceableHealObject;
                healAlly(battleData,healObject,sourceTurn,sourceTurn,"Lightcone",1,null);
                const buffSheet = sourceTurn.lcSomethingIrreplaceableDMGSHEET;
                updateBuff(battleData,sourceTurn,buffSheet);
            },
        },
        "listeners": [
            {
                "trigger": "PassiveCalls",
                condition(battleData,generalInfo) {
                    let ownerRef = this.owners;
        
                    const namedTurns = battleData.nameBasedTurns;
                    const subListeners = this.subListeners;
                    const ownersSlots = this.ownersSlots;
        
                    for (let owner of ownerRef) {
                        let charSlot = owner.slot;
                        let currentTurn = namedTurns[charSlot];
        
                        addListenerWithPriority(battleData,subListeners[0],subListeners[0].trigger,currentTurn,ownersSlots);
                        addListenerWithPriority(battleData,subListeners[1],subListeners[1].trigger,currentTurn,ownersSlots);
                    }
                },
                "target": "self",
                "listenerName": "Something Irreplaceable listener setup",
                "owners": [],
                "subListeners": [
                    {
                        "trigger": "WasAttackedEnd",
                        condition(battleData,generalInfo,personalOwner) {
                            let ownersSlots = this.ownersSlots;
                            let sourceTurn = personalOwner;
                            let ownerRank = ownersSlots[sourceTurn.name];
                            // if (!ownerRank) {return;}
        
                            const buffSheet = sourceTurn.lcSomethingIrreplaceableDMGSHEET;
                            if (buffSheet && sourceTurn.buffsObject[buffSheet.buffName]) {return;}//doesn't stack so we don't need to keep trying to renew it
        
                            const buffApplication = this.buffApplication ??= turnLogicLightcones["Something Irreplaceable"].skillFunctions.buffApplication;
                            buffApplication(battleData,sourceTurn,ownerRank);
                        },
                        "target": "self",
                        "isPersonal": true,
                        "listenerName": "Something Irreplaceable - attack received end listener",
                    },
                    {
                        "trigger": "EnemyDied",
                        condition(battleData,generalInfo) {
                            let ownersSlots = this.ownersSlots;
                            let sourceTurn = generalInfo.sourceTurn;
                            let ownerRank = ownersSlots[sourceTurn.name];
        
                            const buffSheet = sourceTurn.unreachableSideDMGSHEET;
                            if (buffSheet && sourceTurn.buffsObject[buffSheet.buffName]) {return;}//doesn't stack so we don't need to keep trying to renew it
        
                            const buffApplication = this.buffApplication ??= turnLogicLightcones["Something Irreplaceable"].skillFunctions.buffApplication;
                            buffApplication(battleData,sourceTurn,ownerRank);
                        },
                        "target": "self",
                        "isPersonal": true,
                        "listenerName": "Something Irreplaceable kill listener",
                    },
                ]
            },
        ],
        "buffNames": {
            "buff1": "Something Irreplaceable [LC]"
        },
    },
    "I Shall Be My Own Sword": {//NO CHANGE YET
        logic(thisTurn,battleData) {},
        "skillFunctions": {},
        "listeners": [
            {
                "trigger": "PassiveCalls",
                condition(battleData,generalInfo) {
                    let ownerRef = this.owners;
        
                    const namedTurns = battleData.nameBasedTurns;
                    const subListeners = this.subListeners;
                    const ownersSlots = this.ownersSlots;

                    const allAlliesArray = battleData.allAlliesArray;
                    for (let ally of allAlliesArray) {
                        addListenerWithPriority(battleData,subListeners[0],subListeners[0].trigger,ally,ownersSlots);
                    }
        
                    for (let owner of ownerRef) {
                        let charSlot = owner.slot;
                        let currentTurn = namedTurns[charSlot];
        
                        addListenerWithPriority(battleData,subListeners[1],subListeners[1].trigger,currentTurn,ownersSlots);
                    }
                },
                "target": "self",
                "listenerName": "I Shall Be My Own Sword listener setup",
                "owners": [],
                "subListeners": [
                    {
                        "trigger": "WasAttackedEnd",
                        condition(battleData,generalInfo,personalOwner) {
                            let ownersSlots = this.ownersSlots;
                            // let sourceTurn = generalInfo.sourceTurn;
                            // if (!sourceTurn.isEnemy) {return;}
        
                            const targetsGotHit = generalInfo.targetsGotHit;
        
                            const allyTurns = battleData.nameBasedTurns;
                            const hitCount = Object.keys(targetsGotHit).length;
        
                            for (let allySlot in ownersSlots) {
                                let ownerCheck = targetsGotHit[allySlot];
                                if (ownerCheck && hitCount === 1) {continue;}
        
                                const currentOwner = allyTurns[allySlot];
                                if (currentOwner.shallBeMyOwnSwordStackingDONETEMP) {continue;}
        
                                if (!currentOwner.shallBeMyOwnSwordDMGSHEET) {
                                    let lcNameRef = "I Shall Be My Own Sword";
                                    let lcPathing = lightcones[lcNameRef].params;
                                    let ownerRank = ownersSlots[currentOwner.name];
                                    let rankParams = lcPathing[ownerRank-1];
                                    const logicRef = turnLogicLightcones[lcNameRef];
            
                                    currentOwner.shallBeMyOwnSwordDMGSHEET = {
                                        "stats": [DamageAll],
                                        [DamageAll]: rankParams[2],
                                        "source": lcNameRef,
                                        "sourceOwner": currentOwner.properName,
                                        "buffName": logicRef.buffNames.dmgBuff,
                                        "durationInTurn": null,
                                        "duration": 1,
                                        "AVApplied": 0,
                                        "maxStacks": 3,
                                        "currentStacks": 1,
                                        "decay": false,
                                        "expireType": null,
                                        "actionTags": ["All"],
                                    }
                                    currentOwner.shallBeMyOwnSwordSHREDSHEET = {
                                        "stats": [DEFShredAll],
                                        [DEFShredAll]: rankParams[3],
                                        "source": lcNameRef,
                                        "sourceOwner": currentOwner.properName,
                                        "buffName": logicRef.buffNames.shredBuff,
                                        "durationInTurn": null,
                                        "duration": 1,
                                        "AVApplied": 0,
                                        "maxStacks": 1,
                                        "currentStacks": 1,
                                        "decay": false,
                                        "expireType": null,
                                        "actionTags": ["All"],
                                    }
                                }
            
                                const buffSheet = currentOwner.shallBeMyOwnSwordDMGSHEET;
                                buffSheet.currentStacks = hitCount - (targetsGotHit[allySlot] ? 1 : 0);
                                updateBuff(battleData,currentOwner,buffSheet);
                                const buffCheck = currentOwner.buffsObject[buffSheet.buffName];
        
                                if (buffCheck.currentStacks === buffCheck.maxStacks) {
                                    currentOwner.shallBeMyOwnSwordStackingDONETEMP = true;
                                    const buffSheet2 = currentOwner.shallBeMyOwnSwordSHREDSHEET;
                                    updateBuff(battleData,currentOwner,buffSheet2);
                                }
                            }
                        },
                        "target": "self",
                        "isPersonal": true,
                        "listenerName": "I Shall Be My Own Sword - received attack listener",
                        "owners": [],
                        "ownersSlots": {},
                    },
                    {
                        "trigger": "AttackDMGEnd",
                        condition(battleData,generalInfo) {
                            let ownersSlots = this.ownersSlots;
                            let sourceTurn = generalInfo.sourceTurn;
                            // let ownerRank = ownersSlots[sourceTurn.name];
                            // if (!ownerRank) {return;}
        
                            const buffSheet = sourceTurn.shallBeMyOwnSwordDMGSHEET;
                            if (!buffSheet || !sourceTurn.buffsObject[buffSheet.buffName]) {return;}
                            //if the buff sheet hasn't been constructed on the owner yet, or if the owner doesn't even have the buff, then abort
                            removeBuff(battleData,sourceTurn,buffSheet);
        
                            const buffSheet2 = sourceTurn.shallBeMyOwnSwordSHREDSHEET;
                            if (!buffSheet2 || !sourceTurn.buffsObject[buffSheet2.buffName]) {return;}
                            removeBuff(battleData,sourceTurn,buffSheet2);
                            sourceTurn.shallBeMyOwnSwordStackingDONETEMP = false;
                        },
                        "target": "self",
                        "isPersonal": true,
                        "listenerName": "I Shall Be My Own Sword - attack end listener buff removal",
                        "owners": [],
                        "ownersSlots": {},
                    },
                ]
            },
            {
                "trigger": "AllyLostHP",
                condition(battleData,generalInfo) {
                    let ownersSlots = this.ownersSlots;
                    let sourceTurn = generalInfo.sourceTurn;
                    const wasAttack = generalInfo.wasAttack;
                    if (wasAttack) {return;}
                    //OR if the hp loss was from an attack, leave as well

                    const allyTurns = battleData.nameBasedTurns;
                    for (let allySlot in ownersSlots) {
                        const currentOwner = allyTurns[allySlot];
                        if (currentOwner.properName === sourceTurn.properName || currentOwner.shallBeMyOwnSwordStackingDONETEMP) {continue;}

                        if (!currentOwner.shallBeMyOwnSwordDMGSHEET) {
                            let lcNameRef = "I Shall Be My Own Sword";
                            let lcPathing = lightcones[lcNameRef].params;
                            let ownerRank = ownersSlots[currentOwner.name];
                            let rankParams = lcPathing[ownerRank-1];
                            const logicRef = turnLogicLightcones[lcNameRef];
    
                            currentOwner.shallBeMyOwnSwordDMGSHEET = {
                                "stats": [DamageAll],
                                [DamageAll]: rankParams[2],
                                "source": lcNameRef,
                                "sourceOwner": currentOwner.properName,
                                "buffName": logicRef.buffNames.dmgBuff,
                                "durationInTurn": null,
                                "duration": 1,
                                "AVApplied": 0,
                                "maxStacks": 3,
                                "currentStacks": 1,
                                "decay": false,
                                "expireType": null,
                                "actionTags": ["All"],
                            }
                            currentOwner.shallBeMyOwnSwordSHREDSHEET = {
                                "stats": [DEFShredAll],
                                [DEFShredAll]: rankParams[3],
                                "source": lcNameRef,
                                "sourceOwner": currentOwner.properName,
                                "buffName": logicRef.buffNames.shredBuff,
                                "durationInTurn": null,
                                "duration": 1,
                                "AVApplied": 0,
                                "maxStacks": 1,
                                "currentStacks": 1,
                                "decay": false,
                                "expireType": null,
                                "actionTags": ["All"],
                            }
                        }
    
                        const buffSheet = currentOwner.shallBeMyOwnSwordDMGSHEET;
                        buffSheet.currentStacks = 1;
                        updateBuff(battleData,currentOwner,buffSheet);
                        const buffCheck = currentOwner.buffsObject[buffSheet.buffName];

                        if (buffCheck.currentStacks === buffCheck.maxStacks) {
                            currentOwner.shallBeMyOwnSwordStackingDONETEMP = true;
                            const buffSheet2 = currentOwner.shallBeMyOwnSwordSHREDSHEET;
                            updateBuff(battleData,currentOwner,buffSheet2);
                        }
                    }
                },
                "target": "self",
                "listenerName": "I Shall Be My Own Sword - hp lost listener",
                "owners": [],
                "ownersSlots": {},
            },
        ],
        "buffNames": {
            "dmgBuff": "Eclipse (DMG) [LC]",
            "shredBuff": "Eclipse (Shred) [LC]",
        },
    },
    "Thus Burns the Dawn": {//REDONE
        logic(thisTurn,battleData) {},
        "skillFunctions": {},
        "listeners": [
            {
                "trigger": "PassiveCalls",
                condition(battleData,generalInfo) {
                    let ownerRef = this.owners;
                    //TODO: the expiry here is technically a StartTurn event with priority 200, which is a little diff than expiring at the start of the turn in a standard sense.
        
                    const namedTurns = battleData.nameBasedTurns;
                    const subListeners = this.subListeners;
                    const ownersSlots = this.ownersSlots;

                    let lcNameRef = "Thus Burns the Dawn";
                    let lcPathing = lightcones[lcNameRef].params;

                    let buffSheet = this.buffSheet ??= {
                        "stats": [DEFShredAll],
                        [DEFShredAll]: 0,
                        "source": lcNameRef,
                        "sourceOwner": "",
                        "buffName": turnLogicLightcones[lcNameRef].buffNames.shred,
                        "durationInTurn": null,
                        "duration": 1,
                        "AVApplied": 0,
                        "maxStacks": 1,
                        "currentStacks": 1,
                        "decay": false,
                        "expireType": null
                    }
        
                    for (let owner of ownerRef) {
                        let charSlot = owner.slot;
                        let currentTurn = namedTurns[charSlot];
        
                        addListenerWithPriority(battleData,subListeners[0],subListeners[0].trigger,currentTurn,ownersSlots);

                        let rankParams = lcPathing[owner.rank-1];
                        let ownerName = currentTurn.properName;

                        let values = rankParams[1];

                        buffSheet[DEFShredAll] = values;
                        buffSheet.sourceOwner = ownerName;
                        
                        updateBuff(battleData,currentTurn,buffSheet);
                    }
                },
                "target": "self",
                "listenerName": "Thus Burns the Dawn listener setup",
                "owners": [],
                "subListeners": [
                    {
                        "trigger": "AbilityEnd",
                        condition(battleData,generalInfo) {
                            const action = generalInfo.action;
                            if (action != "Ultimate") {return;}
        
                            let sourceTurn = generalInfo.sourceTurn;
        
                            if (!sourceTurn.lcThusBurnsDawnDMGSHEET) {
                                let ownersSlots = this.ownersSlots;
                                let ownerRank = ownersSlots[sourceTurn.name];
                                let lcNameRef = "Thus Burns the Dawn";
                                let lcPathing = lightcones[lcNameRef].params;
                                let rankParams = lcPathing[ownerRank-1];
                                let buffName = turnLogicLightcones[lcNameRef].buffNames.buff1;
        
                                sourceTurn.lcThusBurnsDawnDMGSHEET = {
                                    "stats": [DamageAll],
                                    [DamageAll]: rankParams[2],
                                    "source": lcNameRef,
                                    "sourceOwner": sourceTurn.properName,
                                    "buffName": buffName,
                                    "durationInTurn": 1,
                                    "duration": 1,
                                    "AVApplied": 0,
                                    "maxStacks": 1,
                                    "currentStacks": 1,
                                    "decay": false,
                                    "expireType": "StartTurn",
                                }
                            }
        
                            const buffSheet = sourceTurn.lcThusBurnsDawnDMGSHEET;
                            updateBuff(battleData,sourceTurn,buffSheet);
                        },
                        "target": "self",
                        "isPersonal": true,
                        "listenerName": "Thus Burns the Dawn ult start listener",
                    },
                ]
            },
        ],
        "buffNames": {
            "shred": "Thus Burns the Dawn (LC)",
            "buff1": "Blazing Sun (LC)",
        },
    },
    "Brighter Than the Sun": {//REDONE
        logic(thisTurn,battleData) {},
        "skillFunctions": {},
        "listeners": [
            {
                "trigger": "PassiveCalls",
                condition(battleData,generalInfo) {
                    let ownerRef = this.owners;
        
                    const namedTurns = battleData.nameBasedTurns;
                    const subListeners = this.subListeners;
                    const ownersSlots = this.ownersSlots;
        
                    for (let owner of ownerRef) {
                        let charSlot = owner.slot;
                        let currentTurn = namedTurns[charSlot];
        
                        addListenerWithPriority(battleData,subListeners[0],subListeners[0].trigger,currentTurn,ownersSlots);
                    }
                },
                "target": "self",
                "listenerName": "Brighter Than the Sun listener setup",
                "owners": [],
                "subListeners": [
                    {
                        "trigger": "AbilityStart",
                        condition(battleData,generalInfo) {
                            const action = generalInfo.action;
                            if (action != "BasicATK") {return;}
        
                            let sourceTurn = generalInfo.sourceTurn;
        
                            if (!sourceTurn.lcBrighterThanSunATKSHEET) {
                                let ownersSlots = this.ownersSlots;
                                let ownerRank = ownersSlots[sourceTurn.name];
                                let lcNameRef = "Brighter Than the Sun";
                                let lcPathing = lightcones[lcNameRef].params;
                                let rankParams = lcPathing[ownerRank-1];
                                let buffName = turnLogicLightcones[lcNameRef].buffNames.buff1;
        
                                sourceTurn.lcBrighterThanSunATKSHEET = {
                                    "stats": [ATKP,EnergyRegenRate],
                                    [ATKP]: rankParams[3],
                                    [EnergyRegenRate]: rankParams[4],
                                    "source": lcNameRef,
                                    "sourceOwner": sourceTurn.properName,
                                    "buffName": buffName,
                                    "durationInTurn": 3,
                                    "duration": 2,
                                    "AVApplied": 0,
                                    "maxStacks": 2,
                                    "currentStacks": 1,
                                    "decay": false,
                                    "expireType": "EndTurn",
                                }
                            }
        
                            const buffSheet = sourceTurn.lcBrighterThanSunATKSHEET;
                            updateBuff(battleData,sourceTurn,buffSheet);
                        },
                        "target": "self",
                        "isPersonal": true,
                        "listenerName": "Brighter Than the Sun basic atk start listener",
                    },
                ]
            },
        ],
        "buffNames": {
            "buff1": "Dragon's Call (LC)",
        },
    },
    "Dance at Sunset": {//REDONE
        logic(thisTurn,battleData) {},
        "skillFunctions": {},
        "listeners": [
            {
                "trigger": "PassiveCalls",
                condition(battleData,generalInfo) {
                    let ownerRef = this.owners;
        
                    const namedTurns = battleData.nameBasedTurns;
                    const subListeners = this.subListeners;
                    const ownersSlots = this.ownersSlots;

                    let lcNameRef = "Dance at Sunset";
                    let lcPathing = lightcones[lcNameRef].params;
        
                    for (let owner of ownerRef) {
                        let charSlot = owner.slot;
                        let currentTurn = namedTurns[charSlot];

                        let rankParams = lcPathing[owner.rank-1];
                        let ownerName = currentTurn.properName;

                        let buffSheet = currentTurn.lcDanceAtSunsetAGGROSHEET ??= {
                            "stats": [AggroP],
                            [AggroP]: rankParams[3],
                            "source": lcNameRef,
                            "sourceOwner": ownerName,
                            "buffName": turnLogicLightcones[lcNameRef].buffNames.taunt,
                            "durationInTurn": null,
                            "duration": 1,
                            "AVApplied": 0,
                            "maxStacks": 1,
                            "currentStacks": 1,
                            "decay": false,
                            "expireType": null
                        }
                        
                        updateBuff(battleData,currentTurn,buffSheet);
        
                        addListenerWithPriority(battleData,subListeners[0],subListeners[0].trigger,currentTurn,ownersSlots);
                    }
                },
                "target": "self",
                "listenerName": "Earthly Escapade listener setup",
                "owners": [],
                "subListeners": [
                    {
                        "trigger": "AbilityEnd",
                        condition(battleData,generalInfo) {
                            const action = generalInfo.action;
                            if (action != "Ultimate") {return;}
        
                            let sourceTurn = generalInfo.sourceTurn;
        
                            if (!sourceTurn.lcDanceAtSunsetDMGSHEET) {
                                let ownersSlots = this.ownersSlots;
                                let ownerRank = ownersSlots[sourceTurn.name];
                                let lcNameRef = "Dance at Sunset";
                                let lcPathing = lightcones[lcNameRef].params;
                                let rankParams = lcPathing[ownerRank-1];
                                let buffName = turnLogicLightcones[lcNameRef].buffNames.buff1;
        
                                sourceTurn.lcDanceAtSunsetDMGSHEET = {
                                    "stats": [DamageAll],
                                    [DamageAll]: rankParams[2],
                                    "source": lcNameRef,
                                    "sourceOwner": sourceTurn.properName,
                                    "buffName": buffName,
                                    "durationInTurn": 3,
                                    "duration": 2,
                                    "AVApplied": 0,
                                    "maxStacks": 2,
                                    "currentStacks": 1,
                                    "decay": false,
                                    "expireType": "EndTurn",
                                    "actionTags": ["FUA"],
                                }
                            }
        
                            const buffSheet = sourceTurn.lcDanceAtSunsetDMGSHEET;
                            updateBuff(battleData,sourceTurn,buffSheet);
                        },
                        "target": "self",
                        "isPersonal": true,
                        "listenerName": "Dance at Sunset ult end listener",
                    },
                ]
            },
        ],
        "buffNames": {
            "taunt": "Dance at Sunset (LC)",
            "buff1": "Firedance (LC)",
        },
    },
        //4star
    "Under the Blue Sky": {//NO CHANGE
        logic(thisTurn,battleData) {},
        "skillFunctions": {},
        "listeners": [
            {
                "trigger": "EnemyDied",
                condition(battleData,generalInfo) {
                    let ownersSlots = this.ownersSlots;
                    let sourceTurn = generalInfo.sourceTurn;
                    let ownerRank = ownersSlots[sourceTurn.name];
                    if (!ownerRank) {return;}//if the ally losing hp was a non owner, OR the loss wasn't from DMG, then abort

                    if (!sourceTurn.lcUnderBlueSkyCRITSHEET) {
                        let ownersSlots = this.ownersSlots;
                        let ownerRank = ownersSlots[sourceTurn.name];

                        let lcNameRef = "Under the Blue Sky";
                        let lcPathing = lightcones[lcNameRef].params;
                        
                        let rankParams = lcPathing[ownerRank-1];

                        let ownerName = sourceTurn.properName;

                        sourceTurn.lcUnderBlueSkyCRITSHEET = {
                            "stats": [CritRateBase],
                            [CritRateBase]: rankParams[1],
                            "source": lcNameRef,
                            "sourceOwner": ownerName,
                            "buffName": turnLogicLightcones[lcNameRef].buffNames.river,
                            "durationInTurn": 4,
                            "duration": 3,
                            "AVApplied": 0,
                            "maxStacks": 1,
                            "currentStacks": 1,
                            "decay": false,
                            "expireType": "EndTurn",
                        }
                    }

                    const buffSheet = sourceTurn.lcUnderBlueSkyCRITSHEET;
                    updateBuff(battleData,sourceTurn,buffSheet);
                },
                "target": "self",
                "listenerName": "Under the Blue Sky - kill listener",
                "owners": [],
            },
        ],
        "buffNames": {
            "river": "Under the Blue Sky (LC)",
        },
    },
    "A Trail of Bygone Blood": {//REDONE
        logic(thisTurn,battleData) {},
        "skillFunctions": {},
        "listeners": [
            {
                "trigger": "PassiveCalls",
                condition(battleData,generalInfo) {
                    let ownerRef = this.owners;//would apply at the start to any and all owners, each, hence owners instead of ownersSlots
                    const namedTurns = battleData.nameBasedTurns;
                    const subListeners = this.subListeners;
                    const ownersSlots = this.ownersSlots;

                    for (let owner of ownerRef) {
                        let charSlot = owner.slot;
                        let currentTurn = namedTurns[charSlot];

                        addListenerWithPriority(battleData,subListeners[0],subListeners[0].trigger,currentTurn,ownersSlots);
                    }
                },
                "target": "self",
                "listenerName": "A Trail of Bygone Blood - battlestart buff application",
                "owners": [],
                "subListeners": [
                    {
                        "trigger": "AllyDMGStart",
                        condition(battleData,generalInfo) {
                            let sourceTurn = generalInfo.sourceTurn;

                            let isValid = false;
                            const actionTags = generalInfo.ATKObject.actionTags ?? [];
                            for (let tag of actionTags) {
                                if (tag === "Ultimate" || tag === "Skill") {
                                    isValid = true;
                                    break;
                                }
                            }
                            // if (!isValid) {return;}
    
                            if (!sourceTurn.lcTrailBygoneBloodBONUSSHEET ) {
                                let lcNameRef = "A Trail of Bygone Blood";
                                let lcPathing = lightcones[lcNameRef].params;

                                let ownersSlots = this.ownersSlots;
                                let ownerRank = ownersSlots[sourceTurn.name];
                                let rankParams = lcPathing[ownerRank-1];

                                sourceTurn.lcTrailBygoneBloodBONUSSHEET ??= {
                                    "stats": [DamageAll],
                                    [DamageAll]: rankParams[1],
                                    "source": lcNameRef,
                                    "sourceOwner": sourceTurn.properName,
                                    "buffName": turnLogicLightcones[lcNameRef].buffNames.river,
                                    "durationInTurn": null,
                                    "duration": 1,
                                    "AVApplied": 0,
                                    "maxStacks": 1,
                                    "currentStacks": 1,
                                    "decay": false,
                                    "expireType": null,
                                    "actionTags": ["All"],
                                }
                            }
                            let buffSheet = sourceTurn.lcTrailBygoneBloodBONUSSHEET ;
                            const buffName = buffSheet.buffName;
                            const buffCheck = sourceTurn.buffsObject[buffName];
        
                            //NOTE: this would include converted crit rate bonuses
                            if (isValid) {//if the target has enough cr for the buff, then we can apply it
                                if (buffCheck) {return;}//if the target already has the buff, skip, no need to "renew" perma buffs like this

                                buffSheet.sourceOwner = sourceTurn.properName;
                                updateBuff(battleData,sourceTurn,buffSheet);
                            }
                            else if (buffCheck) {//but if the target fails the crit check and HAS the buff, then remove it
                                removeBuff(battleData,sourceTurn,buffSheet);
                            }
                        },
                        "target": "self",
                        "isPersonal": true,
                        "listenerName": "A Trail of Bygone Blood check",
                    },
                ],
            },
        ],
        "buffNames": {
            "river": "A Trail of Bygone Blood (LC)",
        },
    },
    "Indelible Promise": {//REDONE
        logic(thisTurn,battleData) {},
        "skillFunctions": {},
        "listeners": [
            {
                "trigger": "PassiveCalls",
                condition(battleData,generalInfo) {
                    let ownerRef = this.owners;
        
                    const namedTurns = battleData.nameBasedTurns;
                    const subListeners = this.subListeners;
                    const ownersSlots = this.ownersSlots;
        
                    for (let owner of ownerRef) {
                        let charSlot = owner.slot;
                        let currentTurn = namedTurns[charSlot];
        
                        addListenerWithPriority(battleData,subListeners[0],subListeners[0].trigger,currentTurn,ownersSlots);
                    }
                },
                "target": "self",
                "listenerName": "Earthly Escapade listener setup",
                "owners": [],
                "subListeners": [
                    {
                        "trigger": "AbilityStart",
                        condition(battleData,generalInfo) {
                            const action = generalInfo.action;
                            if (action != "Ultimate") {return;}
        
                            let sourceTurn = generalInfo.sourceTurn;
        
                            if (!sourceTurn.lcIndeliblePromiseCRITSHEET) {
                                let ownersSlots = this.ownersSlots;
                                let ownerRank = ownersSlots[sourceTurn.name];
                                let lcNameRef = "Indelible Promise";
                                let lcPathing = lightcones[lcNameRef].params;
                                let rankParams = lcPathing[ownerRank-1];
                                let buffName = turnLogicLightcones[lcNameRef].buffNames.buff1;
        
                                sourceTurn.lcIndeliblePromiseCRITSHEET = {
                                    "stats": [CritRateBase],
                                    [CritRateBase]: rankParams[1],
                                    "source": lcNameRef,
                                    "sourceOwner": sourceTurn.properName,
                                    "buffName": buffName,
                                    "durationInTurn": 3,
                                    "duration": 2,
                                    "AVApplied": 0,
                                    "maxStacks": 1,
                                    "currentStacks": 1,
                                    "decay": false,
                                    "expireType": "EndTurn",
                                }
                            }
        
                            const buffSheet = sourceTurn.lcIndeliblePromiseCRITSHEET;
                            updateBuff(battleData,sourceTurn,buffSheet);
                        },
                        "target": "self",
                        "isPersonal": true,
                        "listenerName": "Indelible Promise ult end listener",
                    },
                ]
            },
        ],
        "buffNames": {
            "buff1": "Indelible Promise (LC)",
        },
    },
        //3star
    "Collapsing Sky": {//REDONE
        logic(thisTurn,battleData) {},
        "skillFunctions": {},
        "listeners": [
            {
                "trigger": "PassiveCalls",
                condition(battleData,generalInfo) {
                    let ownerRef = this.owners;

                    const namedTurns = battleData.nameBasedTurns;
                    const subListeners = this.subListeners;
                    const ownersSlots = this.ownersSlots;

                    for (let owner of ownerRef) {
                        let charSlot = owner.slot;
                        let currentTurn = namedTurns[charSlot];

                        addListenerWithPriority(battleData,subListeners[0],subListeners[0].trigger,currentTurn,ownersSlots);
                    }
                },
                "target": "self",
                "listenerName": "Collapsing Sky - battlestart dmg application",
                "owners": [],
                "subListeners": [
                    {
                        "trigger": "AllyDMGStart",
                        condition(battleData,generalInfo) {
                            let sourceTurn = generalInfo.sourceTurn;

                            let isValid = false;
                            const actionTags = generalInfo.ATKObject.actionTags ?? [];
                            for (let tag of actionTags) {
                                if (tag === "Basic" || tag === "Skill") {
                                    isValid = true;
                                    break;
                                }
                            }
                            // if (!isValid) {return;}
    
                            if (!sourceTurn.lcCollapsingSkyDMGSHEET) {
                                let lcNameRef = "Collapsing Sky";
                                let lcPathing = lightcones[lcNameRef].params;

                                let ownersSlots = this.ownersSlots;
                                let ownerRank = ownersSlots[sourceTurn.name];
                                let rankParams = lcPathing[ownerRank-1];

                                sourceTurn.lcCollapsingSkyDMGSHEET ??= {
                                    "stats": [DamageAll],
                                    [DamageAll]: rankParams[0],
                                    "source": lcNameRef,
                                    "sourceOwner": sourceTurn.properName,
                                    "buffName": turnLogicLightcones[lcNameRef].buffNames.buff1,
                                    "durationInTurn": null,
                                    "duration": 1,
                                    "AVApplied": 0,
                                    "maxStacks": 1,
                                    "currentStacks": 1,
                                    "decay": false,
                                    "expireType": null,
                                    "actionTags": ["All"],
                                }
                            }
                            let buffSheet = sourceTurn.lcCollapsingSkyDMGSHEET;
                            const buffName = buffSheet.buffName;
                            const buffCheck = sourceTurn.buffsObject[buffName];
        
                            //NOTE: this would include converted crit rate bonuses
                            if (isValid) {//if the target has enough cr for the buff, then we can apply it
                                if (buffCheck) {return;}//if the target already has the buff, skip, no need to "renew" perma buffs like this

                                buffSheet.sourceOwner = sourceTurn.properName;
                                updateBuff(battleData,sourceTurn,buffSheet);
                            }
                            else if (buffCheck) {//but if the target fails the crit check and HAS the buff, then remove it
                                removeBuff(battleData,sourceTurn,buffSheet);
                            }
                        },
                        "target": "self",
                        "isPersonal": true,
                        "listenerName": "Collapsing Sky DMG check",
                    },
                ],
            },
        ],
        "buffNames": {
            "buff1": "Collapsing Sky (LC)",
        },
    },

    //HARMONY
    //5star
    "Earthly Escapade": {//REDONE
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
                        "durationInTurn": 5,
                        "duration": 4,
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
                        "durationInTurn": null,
                        "duration": 1,
                        "AVApplied": 0,
                        "maxStacks": 1,
                        "currentStacks": 1,
                        "decay": false,
                        "expireType": null,
                    }
                }

                let buffSheet2 = currentTurn.updateMaskMASKOWNERSHEET;
                if (battleStartOverride) {buffSheet2.duration = battleStartOverride;}//the start of the battle gives a 3turn buff, not the standard 4 applied by the user themselves
                else {buffSheet2.duration = 4}
                updateBuff(battleData,currentTurn,buffSheet2);

                let buffSheet3 = currentTurn.updateMaskCRITSHEET;
                const thisName = buffSheet3.buffName;

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
                "trigger": "PassiveCalls",
                condition(battleData,generalInfo) {
                    let ownerRef = this.owners;
        
                    const namedTurns = battleData.nameBasedTurns;
                    const subListeners = this.subListeners;
                    const ownersSlots = this.ownersSlots;
        
                    for (let owner of ownerRef) {
                        let charSlot = owner.slot;
                        let currentTurn = namedTurns[charSlot];
        
                        addListenerWithPriority(battleData,subListeners[0],subListeners[0].trigger,currentTurn,ownersSlots);
                    }
                },
                "target": "self",
                "listenerName": "Earthly Escapade listener setup",
                "owners": [],
                "subListeners": [
                    {
                        "trigger": "SPChange",
                        condition(battleData,generalInfo) {
                            let SPDiff = generalInfo.SPChange;
                            if (SPDiff <= 0) {return;}//don't care about non sp gains, regardless of the source
                            // let ownerRef = this.owners;
                            let sourceTurn = generalInfo.sourceTurn;
        
                            let lcNameRef = "Earthly Escapade";
                            let buffName = turnLogicLightcones[lcNameRef].buffNames.buff1;
                            let buffSheet = this.radiantFlameBUFFSHEET ??= {
                                "stats": null,
                                "source": lcNameRef,
                                "sourceOwner": sourceTurn.properName,
                                "buffName": buffName,
                                "durationInTurn": null,
                                "duration": 1,
                                "AVApplied": 0,
                                "maxStacks": 4,
                                "currentStacks": 1,
                                "decay": false,
                                "expireType": null,
                            }
                            
                            buffSheet.currentStacks = SPDiff;
                            updateBuff(battleData,sourceTurn,buffSheet);
        
                            let buffRef = sourceTurn.buffsObject[buffName];
                            if (buffRef.currentStacks >= 4) {
                                //clear radiant flame first
                                removeBuff(battleData,sourceTurn,buffRef);

                                let ownersSlots = this.ownersSlots;
                                let ownerRank = ownersSlots[sourceTurn.name];
        
                                //then apply/update mask
                                const updateMask = this.shortRef ??= turnLogicLightcones[lcNameRef].skillFunctions.updateMask;
                                updateMask(battleData,sourceTurn,ownerRank,null);
                            }
                        },
                        "target": "self",
                        "isPersonal": true,
                        "listenerName": "Earthly Escapade - SP Mask check",
                    }
                ]
            },
            {
                "trigger": "WaveStart",
                condition(battleData,generalInfo) {
                    const currentWave = generalInfo.currentWave;
                    if (currentWave != 1) {return;}

                    let ownerRef = this.owners;//would apply at the start to any and all owners, each, hence owners instead of ownersSlots
                    let ownersSlots = this.ownersSlots;

                    const updateMask = this.shortRef ??= turnLogicLightcones["Earthly Escapade"].skillFunctions.updateMask;
                    
                    const namedTurns = battleData.nameBasedTurns;
                    for (let owner of ownerRef) {
                        let charSlot = owner.slot;
                        let ownerRank = ownersSlots[charSlot];
                        let currentTurn = namedTurns[charSlot];

                        updateMask(battleData,currentTurn,ownerRank,3);
                    }
                },
                "target": "self",
                "priority": -80,
                "listenerName": "Earthly Escapade - Mask Application Battlestart",
                "owners": []
            },
        ],
        "buffNames": {
            "buff1": "Radiant Flame",
            "buff2": "Mask",
            "buff3": "Mask Crit Bonus",
            // "buff2": "Aether Code"
            // "hruntingStack": "Hrunting Stack"
        },
    },
    "But the Battle Isn't Over": {//REDONE
        logic(thisTurn,battleData) {},
        "skillFunctions": {},
        "listeners": [
            {
                "trigger": "PassiveCalls",
                condition(battleData,generalInfo) {
                    let ownerRef = this.owners;
        
                    const namedTurns = battleData.nameBasedTurns;
                    const subListeners = this.subListeners;
                    const ownersSlots = this.ownersSlots;
        
                    for (let owner of ownerRef) {
                        let charSlot = owner.slot;
                        let currentTurn = namedTurns[charSlot];
        
                        addListenerWithPriority(battleData,subListeners[0],subListeners[0].trigger,currentTurn,ownersSlots);
                    }
                },
                "target": "self",
                "listenerName": "But the Battle Isn't Over listener setup",
                "owners": [],
                "subListeners": [
                    {
                        "trigger": "AbilityEnd",
                        condition(battleData,generalInfo) {
                            const action = generalInfo.action;
                            if (action != "Skill" && action != "Ultimate") {return;}
        
                            let sourceTurn = generalInfo.sourceTurn;
        
                            if (action === "Ultimate") {
                                const poolKey = generalInfo.poolKey;
                                if (!alliedPoolKeys.has(poolKey)) {return;}//preempt nonally targeting instances
        
                                sourceTurn.battleIsntOverUltyCount = (sourceTurn.battleIsntOverUltyCount ?? 2) + 1;
                                //if the character never used it yet, we start them at the point that the sp regen can happen anyways
                                //then after that it is business as usual
                                if (sourceTurn.battleIsntOverUltyCount === 3) {
                                    sourceTurn.battleIsntOverUltyCount = 1;
                                    updateSkillPoints(battleData,1,sourceTurn,false,"But the Battle Isn't Over");
                                }
                            }
                            else {
                                const nextAllyTurn = sim.getNextQueuedAllyTurnBuffableOnly(battleData);
                                if (!nextAllyTurn) {return;}
        
                                if (!sourceTurn.battleIsntOverSkillEndSHEET) {
                                    let ownersSlots = this.ownersSlots;
                                    let ownerRank = ownersSlots[sourceTurn.name];
                                    let lcNameRef = "But the Battle Isn't Over";
                                    let lcPathing = lightcones[lcNameRef].params;
                                    let rankParams = lcPathing[ownerRank-1];
                                    let values = rankParams[1];

                                    const logicRef = turnLogicLightcones[lcNameRef];
                                    const uniqueName = battleActions.getUniqueGearBuffName(battleData,sourceTurn,logicRef,"nextAllyBuff")
        
                                    sourceTurn.battleIsntOverSkillEndSHEET = {
                                        "stats": [DamageAll],
                                        [DamageAll]: values,
                                        "source": lcNameRef,
                                        "sourceOwner": sourceTurn.properName,
                                        "buffName": uniqueName,
                                        "durationInTurn": 1,
                                        "duration": 1,
                                        "AVApplied": 0,
                                        "maxStacks": 1,
                                        "currentStacks": 1,
                                        "decay": false,
                                        "expireType": "EndTurn"
                                    }
                                }
        
                                let buffSheet = sourceTurn.battleIsntOverSkillEndSHEET
                                updateBuff(battleData,nextAllyTurn,buffSheet);
                            }
                        },
                        "target": "self",
                        "isPersonal": true,
                        "listenerName": "But the Battle Isn't Over buff prep controller",
                    },
                ]
            },
        ],
        "buffNames": {
            "nextAllyBuff": "But the Battle Isn't Over",
            // "buff2": "Aether Code"
            // "hruntingStack": "Hrunting Stack"
        },
    },
    "A Grounded Ascent": {//REDONE
        logic(thisTurn,battleData) {},
        "skillFunctions": {},
        "listeners": [
            {
                "trigger": "PassiveCalls",
                condition(battleData,generalInfo) {
                    let ownerRef = this.owners;
        
                    const namedTurns = battleData.nameBasedTurns;
                    const subListeners = this.subListeners;
                    const ownersSlots = this.ownersSlots;
        
                    for (let owner of ownerRef) {
                        let charSlot = owner.slot;
                        let currentTurn = namedTurns[charSlot];
        
                        addListenerWithPriority(battleData,subListeners[0],subListeners[0].trigger,currentTurn,ownersSlots);
                    }
                },
                "target": "self",
                "listenerName": "A Grounded Ascent listener setup",
                "owners": [],
                "subListeners": [
                    {
                        "trigger": "AbilityEnd",
                        condition(battleData,generalInfo) {
                            const action = generalInfo.action;
                            if (action != "Skill" && action != "Ultimate") {return}
                            
                            let sourceTurn = generalInfo.sourceTurn;
                            const poolKey = generalInfo.poolKey;
                            if (!alliedPoolKeys.has(poolKey)) {
                                //kill the SP counter if we ever have a skill or ult touching an enemy instead of an ally with targeting
                                sourceTurn.groundedAscentTargetStacks = 0;
                            }
                            else {
                                const targets = generalInfo.target;
                                const subTarget = generalInfo.subTarget;
                                if (targets.length + (subTarget?.length ?? 0) > 1) {return};
        
                                const targetTurn = targets[0];
        
                                if (!sourceTurn.groundedAscentHymnSHEET) {
                                    let lcNameRef = "A Grounded Ascent";
                                    let lcPathing = lightcones[lcNameRef].params;
                                    let ownerSlot = sourceTurn.name;
                                    let ownersSlots = this.ownersSlots;
                                    const ownerRank = ownersSlots[ownerSlot];
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
                                        "durationInTurn": 4,
                                        "duration": 3,//does this count as applied within own turn or applied before designating the turn as next?
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
        
                                updateEnergy(battleData,values[0],sourceTurn,false,"A Grounded Ascent - Ally targeted");
        
        
                                sourceTurn.groundedAscentTargetStacks ??= 0;
                                sourceTurn.groundedAscentTargetStacks += 1;
                                if (sourceTurn.groundedAscentTargetStacks === 2) {
                                    sourceTurn.groundedAscentTargetStacks = 0;
                                    updateSkillPoints(battleData,1,sourceTurn,false,"A Grounded Ascent - Departing Anew");
                                    //for now assume that either or on skill/ulty will stack this
                                    //it DOES actually work that way, thankfully
                                }
        
                                const buffCheck = targetTurn.buffsObject[buffSheet.buffName];
                                const hasMemosprite = targetTurn.activeMemosprites;
                                const memospriteEventRef = targetTurn.memospriteEventRef;
                                const memoTurn = hasMemosprite ? targetTurn[memospriteEventRef] : null;
                                
                                const ownerFinished = buffCheck && buffCheck.currentStacks === buffCheck.maxStacks;
                                // if (!memoTurn && ownerFinished) {return;}
        
                                const targetChildEntities = sourceTurn.properName === "Sunday";
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
                            }
                        },
                        "target": "self",
                        "isPersonal": true,
                        "listenerName": "A Grounded Ascent - buff application and SP regen",
                    },
                ]
            },
        ],
        "buffNames": {
            "hymn": "Hymn - A Grounded Ascent"
            // "buff2": "Aether Code"
            // "hruntingStack": "Hrunting Stack"
        },
    },
    "If Time Were a Flower": {//REDONE
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
                        "durationInTurn": 3,
                        "duration": 2,
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
                        "durationInTurn": null,
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
                updateBuff(battleData,currentTurn,buffSheet2);

                if (buffCheck) {return;}
                //if the buff already existed before we applied it to the owner, then we obv don't need to evaluate the allies since if the owner had it, the allies would have it too and theirs doesn't expire

                let buffSheet3 = currentTurn.updatePresageCRITSHEET;

                const allyArray = battleData.allAlliesArray;
                updateBuffBatchTargets(battleData,allyArray,buffSheet3);
            },
            expireFunction(battleData,expireParam) {
                const ownerName = expireParam.sourceTurn;
                const uniqueBuffName = expireParam.uniqueName;
                const ownerTurn = battleData.nameBasedTurns[ownerName];

                const allyArray = battleData.allAlliesArray;
                removeBuffFromBatch(battleData,allyArray,ownerTurn.buffsObject[uniqueBuffName]);
            },
        },
        "listeners": [
            {
                "trigger": "PassiveCalls",
                condition(battleData,generalInfo) {
                    let ownerRef = this.owners;
        
                    const namedTurns = battleData.nameBasedTurns;
                    const subListeners = this.subListeners;
                    const ownersSlots = this.ownersSlots;
        
                    for (let owner of ownerRef) {
                        let charSlot = owner.slot;
                        let currentTurn = namedTurns[charSlot];
        
                        addListenerWithPriority(battleData,subListeners[0],subListeners[0].trigger,currentTurn,ownersSlots);
                    }
                },
                "target": "self",
                "listenerName": "Past Self in Mirror listener setup",
                "owners": [],
                "subListeners": [
                    {
                        "trigger": "AttackDMGEnd",
                        condition(battleData,generalInfo) {
                            let sourceTurn = generalInfo.sourceTurn;
        
                            let isFUA = false;
                            const actionTags = generalInfo.ATKObject.actionTags;
                            for (let tag of actionTags) {
                                if (tag === "FUA") {
                                    isFUA = true;
                                    break;
                                }
                            }
                            if (!isFUA) {return;}

                            let ownersSlots = this.ownersSlots;
                            let ownerRank = ownersSlots[sourceTurn.name];
        
                            let lcNameRef = "If Time Were a Flower";
                            const updatePresage = this.updatePresage ??= turnLogicLightcones[lcNameRef].skillFunctions.updatePresage;
                            updatePresage(battleData,sourceTurn,ownerRank);
                            updateEnergy(battleData,12,sourceTurn,false,"If Time Were a Flower [FUA Started]");
                        },
                        "target": "self",
                        "isPersonal": true,
                        "listenerName": "If Time Were a Flower - FUA launched listener",
                    }
                ]
            },
            {
                "trigger": "WaveStart",
                condition(battleData,generalInfo) {
                    const currentWave = generalInfo.currentWave;
                    if (currentWave != 1) {return;}
                    // let ownerRef = this.owners;
                    let ownersSlots = this.ownersSlots;
                    let lcNameRef = "If Time Were a Flower";

                    const updatePresage = this.updatePresage ??= turnLogicLightcones[lcNameRef].skillFunctions.updatePresage;
                    const namedTurns = battleData.nameBasedTurns;

                    for (let owner in ownersSlots) {
                        let ownerRank = ownersSlots[owner];
                        let currentTurn = namedTurns[owner];

                        updateEnergy(battleData,21,currentTurn,false,"If Time Were a Flower");
                        updatePresage(battleData,currentTurn,ownerRank);
                    }
                },
                "target": "self",
                "priority": -80,
                "listenerName": "If Time Were a Flower - Presage Application Battlestart + energy regen",
                "owners": [],
                "ownersSlots": {}
            },
        ],
        "buffNames": {
            "buff2": "Presage (Countdown) [LC]",
            "buff3": "Presage Crit DMG [LC]",
        },
        "buffNamesPerCharacter": {
            "buff3": "Presage Crit DMG [LC]",
        }
    },
    "Flowing Nightglow": {//REDONE
        logic(thisTurn,battleData) {},
        "skillFunctions": {
            expireFunction(battleData,expireParam) {
                const ownerName = expireParam.ownerName;
                const uniqueBuffName = expireParam.uniqueBuffName;
                const ownerTurn = battleData.nameBasedTurns[ownerName];

                const buffToRemove = ownerTurn.buffsObject[uniqueBuffName]

                const allyArray = battleData.allAlliesArray;
                removeBuffFromBatch(battleData,allyArray,buffToRemove);
            },
        },
        "listeners": [
            {
                "trigger": "PassiveCalls",
                condition(battleData,generalInfo) {
                    let ownerRef = this.owners;
        
                    const namedTurns = battleData.nameBasedTurns;
                    const subListeners = this.subListeners;
                    const ownersSlots = this.ownersSlots;
        
                    for (let owner of ownerRef) {
                        let charSlot = owner.slot;
                        let currentTurn = namedTurns[charSlot];
        
                        addListenerWithPriority(battleData,subListeners[0],subListeners[0].trigger,currentTurn,ownersSlots);
                    }
                },
                "target": "self",
                "listenerName": "Past Self in Mirror listener setup",
                "owners": [],
                "subListeners": [
                    {
                        "trigger": "AbilityStart",
                        condition(battleData,generalInfo) {
                            const action = generalInfo.action;
                            if (action != "Ultimate") {return;}
        
                            let sourceTurn = generalInfo.sourceTurn;
        
                            const sourceBuffs = sourceTurn.buffsObject;
                            const buffSheet = sourceTurn.flowingNightglowCantillationSheet;
                            const buffCheck = buffSheet ? sourceBuffs[buffSheet.buffName] : null;
                            // if (!buffCheck || buffCheck && buffCheck.currentStacks < 5) {return;}
                            if (buffCheck) {removeBuff(battleData,sourceTurn,buffSheet);}
                            
        
                            if (!sourceTurn.flowingNightglowCadenzaSheet) {
                                let lcNameRef = "Flowing Nightglow";
                                let lcPathing = lightcones[lcNameRef].params;
                                let ownersSlots = this.ownersSlots;
                                const ownerRank = ownersSlots[sourceTurn.name];
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
                                    "durationInTurn": 2,
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
                                    "durationInTurn": null,
                                    "duration": 1,
                                    "AVApplied": 0,
                                    "maxStacks": 1,
                                    "currentStacks": 1,
                                    "decay": false,
                                    "expireType": null,
                                }
                            }
                            const countdownSheet = sourceTurn.flowingNightglowCadenzaSheet;
        
                            const buffCheck2 = sourceBuffs[countdownSheet.buffName];
                            updateBuff(battleData,sourceTurn,countdownSheet);
        
                            if (!buffCheck2) {
                                const allyArray = battleData.allAlliesArray;
                                const allySheet = sourceTurn.flowingNightglowCadenzaAllySheet;
        
                                updateBuffBatchTargets(battleData,allyArray,allySheet);
                            }
                        },
                        "target": "self",
                        "isPersonal": true,
                        "listenerName": "Flowing Nightglow - ult listener",
                    }
                ]
            },
            {
                "trigger": "AttackDMGEnd",
                condition(battleData,generalInfo) {
                    let sourceTurn = generalInfo.sourceTurn;
                    if (sourceTurn.isEnemy) {return;}

                    let ownersSlots = this.ownersSlots;
                    let lcNameRef = "Flowing Nightglow";
                    const logicRef = turnLogicLightcones[lcNameRef];

                    const allyTurns = battleData.nameBasedTurns;
                    for (let ownerSlot in ownersSlots) {
                        const currentOwner = allyTurns[ownerSlot];

                        if (!currentOwner.flowingNightglowCantillationSheet) {
                            const ownerRank = ownersSlots[ownerSlot];
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
                                "durationInTurn": null,
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
    "Past Self in Mirror": {//REDONE
        logic(thisTurn,battleData) {},
        "skillFunctions": {},
        "listeners": [
            {
                "trigger": "PassiveCalls",
                condition(battleData,generalInfo) {
                    let ownerRef = this.owners;
        
                    const namedTurns = battleData.nameBasedTurns;
                    const subListeners = this.subListeners;
                    const ownersSlots = this.ownersSlots;
        
                    for (let owner of ownerRef) {
                        let charSlot = owner.slot;
                        let currentTurn = namedTurns[charSlot];
        
                        addListenerWithPriority(battleData,subListeners[0],subListeners[0].trigger,currentTurn,ownersSlots);
                    }
                },
                "target": "self",
                "listenerName": "Past Self in Mirror listener setup",
                "owners": [],
                "subListeners": [
                    {
                        "trigger": "AbilityStart",
                        condition(battleData,generalInfo) {
                            const action = generalInfo.action;
                            if (action != "Ultimate") {return;}
        
                            let sourceTurn = generalInfo.sourceTurn;
        
                            if (!sourceTurn.pastSelfInMirrorDMGSheet) {
                                let ownersSlots = this.ownersSlots;
                                let ownerRank = ownersSlots[sourceTurn.name];
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
                                    "durationInTurn": 4,
                                    "duration": 3,
                                    "AVApplied": 0,
                                    "maxStacks": 1,
                                    "currentStacks": 1,
                                    "decay": false,
                                    "expireType": "EndTurn",
                                }
                            }
        
                            const allySheet = sourceTurn.pastSelfInMirrorDMGSheet;
                            const allyPositions = battleData.allyPositions;
                            updateBuffBatchTargets(battleData,allyPositions,allySheet);
        
                            const breakCheck = sourceTurn.statTable[DamageBreak] >= 1.5;
                            if (breakCheck) {
                                updateSkillPoints(battleData,1,sourceTurn,false,"Past Self in Mirror [LC]");
                            }
                        },
                        "target": "self",
                        "isPersonal": true,
                        "listenerName": "Past Self in Mirror - ult listener",
                    },
                ]
            },
            {
                "trigger": "WaveStart",
                condition(battleData,generalInfo) {
                    // let ownerTurn = this.ownerTurn;
                    const allyPositions = battleData.allyPositions;
                    for (let ally of allyPositions) {
                        updateEnergy(battleData,10,ally,true,"Past Self in Mirror [LC]");
                    }
                },
                "target": "self",
                "priority": -80,
                "listenerName": "Past Self in Mirror wave start listener",
                "ownerTurn": {},
            }
        ],
        "buffNames": {
            "allyDMG": "Past Self in Mirror [LC]",
            // "hruntingStack": "Hrunting Stack"
        },
    },
    "Epoch Etched in Golden Blood": {
        logic(thisTurn,battleData) {},
        "skillFunctions": {},
        "listeners": [
            {
                "trigger": "PassiveCalls",
                condition(battleData,generalInfo) {
                    let ownerRef = this.owners;
        
                    const namedTurns = battleData.nameBasedTurns;
                    const subListeners = this.subListeners;
                    const ownersSlots = this.ownersSlots;
        
                    for (let owner of ownerRef) {
                        let charSlot = owner.slot;
                        let currentTurn = namedTurns[charSlot];
        
                        addListenerWithPriority(battleData,subListeners[0],subListeners[0].trigger,currentTurn,ownersSlots);
                        addListenerWithPriority(battleData,subListeners[1],subListeners[1].trigger,currentTurn,ownersSlots);
                    }
                },
                "target": "self",
                "listenerName": "Epoch Etched in Golden Blood setup",
                "owners": [],
                "subListeners": [
                    {
                        "trigger": "AbilityEnd",
                        condition(battleData,generalInfo) {
                            const action = generalInfo.action;
                            if (action != "Skill") {return}
                            
                            let sourceTurn = generalInfo.sourceTurn;
                            const poolKey = generalInfo.poolKey;
                            if (!alliedPoolKeys.has(poolKey)) {return;}
                            
                            const targets = generalInfo.target;
                            // const subTarget = generalInfo.subTarget;
                            if (targets.length > 1) {return};
    
                            const targetTurn = targets[0];
    
                            if (!sourceTurn.lcEpochEtchedSKILLDMGSHEET) {
                                let lcNameRef = "Epoch Etched in Golden Blood";
                                let lcPathing = lightcones[lcNameRef].params;
                                let ownerSlot = sourceTurn.name;
                                let ownersSlots = this.ownersSlots;
                                const ownerRank = ownersSlots[ownerSlot];
                                let rankParams = lcPathing[ownerRank-1];
                                // greatTableIndex
                                // greatTableKeys

                                const logicRef = turnLogicLightcones["Epoch Etched in Golden Blood"]
                                const uniqueName = battleActions.getUniqueGearBuffName(battleData,sourceTurn,logicRef,"hymn")
                                sourceTurn.lcEpochEtchedSKILLDMGSHEET = {
                                    "stats": [DamageAll],
                                    [DamageAll]: rankParams[3],
                                    "source": lcNameRef,
                                    "sourceOwner": sourceTurn.properName,
                                    "buffName": uniqueName,
                                    "durationInTurn": 4,
                                    "duration": 3,
                                    "AVApplied": 0,
                                    "maxStacks": 1,
                                    "currentStacks": 1,
                                    "decay": false,
                                    "expireType": "EndTurn",
                                    "removeOnDeath": true,
                                    "actionTags": ["Skill"],
                                }
                            }
                            const buffSheet = sourceTurn.lcEpochEtchedSKILLDMGSHEET;

                            updateBuff(battleData,targetTurn,buffSheet);
                        },
                        "target": "self",
                        "isPersonal": true,
                        "listenerName": "Epoch Etched in Golden Blood - buff application",
                    },
                    {
                        "trigger": "AttackDMGEnd",
                        condition(battleData,generalInfo) {
                            const slot = generalInfo.dmgSlot;
                            if (slot != "Ultimate") {return;}

                            let sourceTurn = generalInfo.sourceTurn;
                            updateSkillPoints(battleData,1,sourceTurn,false,"Epoch Etched in Golden Blood");
                        },
                        "target": "self",
                        "isPersonal": true,
                        "listenerName": "Epoch Etched in Golden Blood - ult attack SP gain",
                    },
                ]
            },
        ],
        "buffNames": {
            "hymn": "Skill DMG - Epoch Etched in Golden Blood"
        },
    },
        //4star
    "Dance! Dance! Dance!": {//REDONE
        logic(thisTurn,battleData) {},
        "skillFunctions": {},
        "listeners": [
            {
                "trigger": "PassiveCalls",
                condition(battleData,generalInfo) {
                    let ownerRef = this.owners;
        
                    const namedTurns = battleData.nameBasedTurns;
                    const subListeners = this.subListeners;
                    const ownersSlots = this.ownersSlots;
        
                    for (let owner of ownerRef) {
                        let charSlot = owner.slot;
                        let currentTurn = namedTurns[charSlot];
        
                        addListenerWithPriority(battleData,subListeners[0],subListeners[0].trigger,currentTurn,ownersSlots);
                    }
                },
                "target": "self",
                "listenerName": "A Grounded Ascent listener setup",
                "owners": [],
                "subListeners": [
                    {
                        "trigger": "AbilityEnd",
                        condition(battleData,generalInfo) {
                            const action = generalInfo.action;
                            if (action != "Ultimate") {return;}
        
                            // let ownerRef = this.owners;
                            let sourceTurn = generalInfo.sourceTurn;
        
                            let lcNameRef = "Dance! Dance! Dance!";
                            if (!sourceTurn.danceDanceDanceREF) {
                                let ownersSlots = this.ownersSlots;
                                let ownerRank = ownersSlots[sourceTurn.name];
                                let lcPathing = lightcones[lcNameRef].params;
                                let rankParams = lcPathing[ownerRank-1];
                                sourceTurn.danceDanceDanceREF = rankParams[0];//advancement value
                            }
                            let values = sourceTurn.danceDanceDanceREF;

                            const allyPositions = battleData.allyPositions;
                            actionAdvance(values,allyPositions,battleData,lcNameRef);
                            
                            //quick note for myself in the future, just checked to be certain and tingyun doing double technique
                            //to get full energy entering the battle, and insta casting ult, DOES cast it at 0 AV, ergo
                            //it CAN advance everyone preemptively. Kinda cool, never knew that.
                            //calc already allowed it to work like that, just wanted to be sure. Go calc, lmao.
                        },
                        "target": "self",
                        "isPersonal": true,
                        "listenerName": "Dance! Dance! Dance! - Team Advance",
                    },
                ]
            },
        ],
        "buffNames": {},
    },
    "Memories of the Past": {//REDONE
        logic(thisTurn,battleData) {},
        "skillFunctions": {
            lcRegenEnergy(battleData,targetTurn,energyToRegen) {
                updateEnergy(battleData,energyToRegen,targetTurn,false,"Memories of the Past [LC]");
                targetTurn.lcMemoriesOfThePastCanRegen = false;
            },
        },
        "listeners": [
            {
                "trigger": "PassiveCalls",
                condition(battleData,generalInfo) {
                    let ownerRef = this.owners;
        
                    const namedTurns = battleData.nameBasedTurns;
                    const subListeners = this.subListeners;
                    const ownersSlots = this.ownersSlots;
        
                    for (let owner of ownerRef) {
                        let charSlot = owner.slot;
                        let currentTurn = namedTurns[charSlot];
        
                        addListenerWithPriority(battleData,subListeners[0],subListeners[0].trigger,currentTurn,ownersSlots);
                    }
                },
                "target": "self",
                "listenerName": "Memories of the Past listener setup",
                "owners": [],
                "subListeners": [
                    {
                        "trigger": "AttackDMGEnd",
                        condition(battleData,generalInfo) {
                            let sourceTurn = generalInfo.sourceTurn;
        
                            
                            if (!sourceTurn.lcMemoriesOfThePastCanRegen) {return;}//then abort non-owners
                            sourceTurn.lcMemoriesOfThePastCanRegen = false;
        
                            let lcNameRef = "Memories of the Past";
                            const regenFunction = this.lcRegenEnergy ??= turnLogicLightcones[lcNameRef].skillFunctions.lcRegenEnergy;
        
                            let ownersSlots = this.ownersSlots;
                            let ownerRank = ownersSlots[sourceTurn.name];
                            let lcPathing = lightcones[lcNameRef].params;
                            let rankParams = lcPathing[ownerRank-1];
                            const regenValue = rankParams[1];
        
                            regenFunction(battleData,sourceTurn,regenValue);
                        },
                        "target": "self",
                        "isPersonal": true,
                        "listenerName": "Memories of the Past - owner attacked listener",
                    },
                ]
            },
            {
                "trigger": "EndTurn",
                condition(battleData,generalInfo) {
                    let ownerRef = this.owners;
        
                    const namedTurns = battleData.nameBasedTurns;
                    for (let owner of ownerRef) {
                        let charSlot = owner.slot;
                        let currentTurn = namedTurns[charSlot];

                        currentTurn.lcMemoriesOfThePastCanRegen = true;
                    }
                },
                "target": "self",
                // "isPersonal": true,
                "listenerName": "Memories of the Past endturn regen reset listener",
                "owners": [],
                "ownersSlots": {}
            },
        ],
        "buffNames": {},
    },
    "Poised to Bloom": {//partial rework
        logic(thisTurn,battleData) {},
        "skillFunctions": {},
        "listeners": [
            {
                "trigger": "WaveStart",
                condition(battleData,generalInfo) {
                    // let ownerRef = this.owners;
                    let ownersSlots = this.ownersSlots;
                    // let lcNameRef = "Poised to Bloom";

                    // const updatePresage = this.updatePresage ??= turnLogicLightcones[lcNameRef].skillFunctions.updatePresage;
                    const namedTurns = battleData.nameBasedTurns;

                    let firstOwnerTurn = null;
                    for (let ownerSlot in ownersSlots) {
                        const currentOwner = namedTurns[ownerSlot];
                        firstOwnerTurn = currentOwner;


                        if (!currentOwner.lcPoisedToBloomCRITSHEET) {
                            let lcNameRef = "Poised to Bloom";
                            let lcPathing = lightcones[lcNameRef].params;
                            let ownerRank = ownersSlots[currentOwner.name];
                            let rankParams = lcPathing[ownerRank-1];
        
                            let buffName2 = turnLogicLightcones[lcNameRef].buffNames.buff2;
        
                            currentOwner.lcPoisedToBloomCRITSHEET = {
                                "stats": [CritDamageBase],
                                [CritDamageBase]: rankParams[1],
                                "source": lcNameRef,
                                "sourceOwner": currentOwner.properName,
                                "buffName": buffName2,
                                "durationInTurn": null,
                                "duration": 1,
                                "AVApplied": 0,
                                "maxStacks": 1,
                                "currentStacks": 1,
                                "decay": false,
                                "expireType": null,
                            }
                            
                        }

                        break;
                    }
                    const buffSheet = firstOwnerTurn.lcPoisedToBloomCRITSHEET;

                    let pathHolderObject = {};

                    const allyPositions = battleData.allyPositions;
                    for (let ally of allyPositions) {
                        if (ally.isUniqueEvent) {continue;}

                        const allyPath = ally.path;
                        const allyPathArray = pathHolderObject[allyPath] ??= [];
                        allyPathArray.push(ally);
                    }

                    for (let pathName in pathHolderObject) {
                        const currentPathArray = pathHolderObject[pathName];
                        if (currentPathArray.length >= 2) {
                            for (let ally of currentPathArray) {
        
                                updateBuff(battleData,ally,buffSheet);
                            }
                        }
                    }
                },
                "target": "self",
                "priority": -80,
                "listenerName": "Poised to Bloom - battlestart pathcounts>=2 buff",
            },
        ],
        "buffNames": {
            "buff2": "Poised to Bloom [LC]",
        },
    },
    "In Pursuit of the Wind": {
        logic(thisTurn,battleData) {},
        "skillFunctions": {},
        "listeners": [
            {
                "trigger": "WaveStart",
                condition(battleData,generalInfo) {
                    // let ownerRef = this.owners;
                    let ownersSlots = this.ownersSlots;
                    // let lcNameRef = "Poised to Bloom";

                    // const updatePresage = this.updatePresage ??= turnLogicLightcones[lcNameRef].skillFunctions.updatePresage;
                    const namedTurns = battleData.nameBasedTurns;

                    let firstOwnerTurn = null;
                    for (let ownerSlot in ownersSlots) {
                        const currentOwner = namedTurns[ownerSlot];
                        firstOwnerTurn = currentOwner;


                        if (!currentOwner.lcPursuitOfTheWindBREAKMULTISHEET) {
                            let lcNameRef = "In Pursuit of the Wind";
                            let lcPathing = lightcones[lcNameRef].params;
                            let ownerRank = ownersSlots[currentOwner.name];
                            let rankParams = lcPathing[ownerRank-1];
        
                            let buffName2 = turnLogicLightcones[lcNameRef].buffNames.buff2;
        
                            currentOwner.lcPursuitOfTheWindBREAKMULTISHEET = {
                                "stats": [DamageBreakBonus],
                                [DamageBreakBonus]: rankParams[0],
                                "source": lcNameRef,
                                "sourceOwner": currentOwner.properName,
                                "buffName": buffName2,
                                "durationInTurn": null,
                                "duration": 1,
                                "AVApplied": 0,
                                "maxStacks": 1,
                                "currentStacks": 1,
                                "decay": false,
                                "expireType": null,
                            }
                            
                        }

                        break;
                    }
                    const buffSheet = firstOwnerTurn.lcPursuitOfTheWindBREAKMULTISHEET;
                    const allAlliesArray = battleData.allAlliesArray;
                    updateBuffBatchTargets(battleData,allAlliesArray,buffSheet);
                },
                "target": "self",
                "priority": -80,
                "listenerName": "In Pursuit of the Wind - battlestart break multi buff",
            },
        ],
        "buffNames": {
            "buff2": "In Pursuit of the Wind [LC]",
        },
    },
    "For Tomorrow's Journey": {
        logic(thisTurn,battleData) {},
        "skillFunctions": {},
        "listeners": [
            {
                "trigger": "PassiveCalls",
                condition(battleData,generalInfo) {
                    let ownerRef = this.owners;
        
                    const namedTurns = battleData.nameBasedTurns;
                    const subListeners = this.subListeners;
                    const ownersSlots = this.ownersSlots;
        
                    for (let owner of ownerRef) {
                        let charSlot = owner.slot;
                        let currentTurn = namedTurns[charSlot];
        
                        addListenerWithPriority(battleData,subListeners[0],subListeners[0].trigger,currentTurn,ownersSlots);
                    }
                },
                "target": "self",
                "listenerName": "For Tomorrow's Journey listener setup",
                "owners": [],
                "subListeners": [
                    {
                        "trigger": "AbilityEnd",
                        condition(battleData,generalInfo) {
                            const action = generalInfo.action;
                            if (action != "Ultimate") {return}
                            
                            const sourceTurn = generalInfo.sourceTurn;
    
                            if (!sourceTurn.lcForTomorrowJourneyDMGSHEET) {
                                let lcNameRef = "For Tomorrow's Journey";
                                let lcPathing = lightcones[lcNameRef].params;
                                let ownerSlot = sourceTurn.name;
                                let ownersSlots = this.ownersSlots;
                                const ownerRank = ownersSlots[ownerSlot];
                                let rankParams = lcPathing[ownerRank-1];
                                // greatTableIndex
                                // greatTableKeys
                                sourceTurn.lcForTomorrowJourneyDMGSHEET = {
                                    "stats": [DamageAll],
                                    [DamageAll]: rankParams[1],
                                    "source": lcNameRef,
                                    "sourceOwner": sourceTurn.properName,
                                    "buffName": turnLogicLightcones[lcNameRef].buffNames.hymn,
                                    "durationInTurn": 2,
                                    "duration": 1,//does this count as applied within own turn or applied before designating the turn as next?
                                    "AVApplied": 0,
                                    "maxStacks": 1,
                                    "currentStacks": 1,
                                    "decay": false,
                                    "expireType": "EndTurn",
                                    "removeOnDeath": true,
                                }
                            }
                            const buffSheet = sourceTurn.lcForTomorrowJourneyDMGSHEET;
                            updateBuff(battleData,sourceTurn,buffSheet);
                        },
                        "target": "self",
                        "isPersonal": true,
                        "listenerName": "For Tomorrow's Journey - buff application",
                    },
                ]
            },
        ],
        "buffNames": {
            "hymn": "For Tomorrow's Journey"
        },
    },
    "The Forever Victual": {
        logic(thisTurn,battleData) {},
        "skillFunctions": {},
        "listeners": [
            {
                "trigger": "PassiveCalls",
                condition(battleData,generalInfo) {
                    let ownerRef = this.owners;
        
                    const namedTurns = battleData.nameBasedTurns;
                    const subListeners = this.subListeners;
                    const ownersSlots = this.ownersSlots;
        
                    for (let owner of ownerRef) {
                        let charSlot = owner.slot;
                        let currentTurn = namedTurns[charSlot];
        
                        addListenerWithPriority(battleData,subListeners[0],subListeners[0].trigger,currentTurn,ownersSlots);
                    }
                },
                "target": "self",
                "listenerName": "The Forever Victual listener setup",
                "owners": [],
                "subListeners": [
                    {
                        "trigger": "AbilityEnd",
                        condition(battleData,generalInfo) {
                            const action = generalInfo.action;
                            if (action != "Skill") {return}
                            
                            const sourceTurn = generalInfo.sourceTurn;
    
                            if (!sourceTurn.lcForeverVictualATKSHEET) {
                                let lcNameRef = "The Forever Victual";
                                let lcPathing = lightcones[lcNameRef].params;
                                let ownerSlot = sourceTurn.name;
                                let ownersSlots = this.ownersSlots;
                                const ownerRank = ownersSlots[ownerSlot];
                                let rankParams = lcPathing[ownerRank-1];

                                sourceTurn.lcForeverVictualATKSHEET = {
                                    "stats": [ATKP],
                                    [ATKP]: rankParams[1],
                                    "source": lcNameRef,
                                    "sourceOwner": sourceTurn.properName,
                                    "buffName": turnLogicLightcones[lcNameRef].buffNames.hymn,
                                    "durationInTurn": null,
                                    "duration": 1,
                                    "AVApplied": 0,
                                    "maxStacks": 3,
                                    "currentStacks": 1,
                                    "decay": false,
                                    "expireType": null,
                                    "removeOnDeath": true,
                                }
                            }
                            const buffSheet = sourceTurn.lcForeverVictualATKSHEET;
                            updateBuff(battleData,sourceTurn,buffSheet);

                            const stackCheck = sourceTurn.buffsObject[buffSheet.buffName].currentStacks;
                            if (stackCheck === 3) {removeListener(battleData,this,sourceTurn)}
                        },
                        "target": "self",
                        "isPersonal": true,
                        "listenerName": "The Forever Victual - buff application",
                    },
                ]
            },
        ],
        "buffNames": {
            "hymn": "The Forever Victual"
        },
    },
    "Dreamville Adventure": {
        logic(thisTurn,battleData) {},
        "skillFunctions": {},
        "listeners": [
            {
                "trigger": "PassiveCalls",
                condition(battleData,generalInfo) {
                    let ownerRef = this.owners;
        
                    const namedTurns = battleData.nameBasedTurns;
                    const subListeners = this.subListeners;
                    const ownersSlots = this.ownersSlots;
        
                    for (let owner of ownerRef) {
                        let charSlot = owner.slot;
                        let currentTurn = namedTurns[charSlot];
        
                        addListenerWithPriority(battleData,subListeners[0],subListeners[0].trigger,currentTurn,ownersSlots);
                    }
                },
                "target": "self",
                "listenerName": "Dreamville Adventure listener setup",
                "owners": [],
                "subListeners": [
                    {
                        "trigger": "AbilityEnd",
                        condition(battleData,generalInfo) {
                            const action = generalInfo.action;
                            if (action != "Skill" && action != "Ultimate" && action != "BasicATK") {return}
                            
                            const sourceTurn = generalInfo.sourceTurn;
    
                            if (!sourceTurn.lcDreamvilleDMGSHEETBASIC) {
                                let lcNameRef = "Dreamville Adventure";
                                let lcPathing = lightcones[lcNameRef].params;
                                let ownerSlot = sourceTurn.name;
                                let ownersSlots = this.ownersSlots;
                                const ownerRank = ownersSlots[ownerSlot];
                                let rankParams = lcPathing[ownerRank-1];
                                
                                sourceTurn.lcDreamvilleDMGSHEETBASIC = {
                                    "stats": [DamageAll],
                                    [DamageAll]: rankParams[0],
                                    "source": lcNameRef,
                                    "sourceOwner": sourceTurn.properName,
                                    "buffName": turnLogicLightcones[lcNameRef].buffNames.basic,
                                    "durationInTurn": null,
                                    "duration": 1,
                                    "AVApplied": 0,
                                    "maxStacks": 3,
                                    "currentStacks": 1,
                                    "decay": false,
                                    "expireType": null,
                                    "removeOnDeath": true,
                                    "actionTags": ["Basic"],
                                }
                                sourceTurn.lcDreamvilleDMGSHEETSkill = {
                                    "stats": [DamageAll],
                                    [DamageAll]: rankParams[0],
                                    "source": lcNameRef,
                                    "sourceOwner": sourceTurn.properName,
                                    "buffName": turnLogicLightcones[lcNameRef].buffNames.skill,
                                    "durationInTurn": null,
                                    "duration": 1,
                                    "AVApplied": 0,
                                    "maxStacks": 3,
                                    "currentStacks": 1,
                                    "decay": false,
                                    "expireType": null,
                                    "removeOnDeath": true,
                                    "actionTags": ["Skill"],
                                }
                                sourceTurn.lcDreamvilleDMGSHEETULT = {
                                    "stats": [DamageAll],
                                    [DamageAll]: rankParams[0],
                                    "source": lcNameRef,
                                    "sourceOwner": sourceTurn.properName,
                                    "buffName": turnLogicLightcones[lcNameRef].buffNames.ult,
                                    "durationInTurn": null,
                                    "duration": 1,
                                    "AVApplied": 0,
                                    "maxStacks": 3,
                                    "currentStacks": 1,
                                    "decay": false,
                                    "expireType": null,
                                    "removeOnDeath": true,
                                    "actionTags": ["Ultimate"],
                                }
                            }

                            const allyPositions = battleData.allyPositions;

                            if (action === "BasicATK") {
                                const buffSheet = sourceTurn.lcDreamvilleDMGSHEETBASIC;
                                updateBuffBatchTargets(battleData,allyPositions,buffSheet);
                            }
                            else if (action === "Skill") {
                                const buffSheet = sourceTurn.lcDreamvilleDMGSHEETSkill;
                                updateBuffBatchTargets(battleData,allyPositions,buffSheet);
                            }
                            else if (action === "Ultimate") {
                                const buffSheet = sourceTurn.lcDreamvilleDMGSHEETULT;
                                updateBuffBatchTargets(battleData,allyPositions,buffSheet);
                            }
                        },
                        "target": "self",
                        "isPersonal": true,
                        "listenerName": "Dreamville Adventure - buff application",
                    },
                ]
            },
        ],
        "buffNames": {
            "basic": "Dreamville Adventure [Basic]",
            "skill": "Dreamville Adventure [Skill]",
            "ult": "Dreamville Adventure [Ult]",
        },
    },
    "Past and Future": {
        logic(thisTurn,battleData) {},
        "skillFunctions": {},
        "listeners": [
            {
                "trigger": "PassiveCalls",
                condition(battleData,generalInfo) {
                    let ownerRef = this.owners;
        
                    const namedTurns = battleData.nameBasedTurns;
                    const subListeners = this.subListeners;
                    const ownersSlots = this.ownersSlots;
        
                    for (let owner of ownerRef) {
                        let charSlot = owner.slot;
                        let currentTurn = namedTurns[charSlot];
        
                        addListenerWithPriority(battleData,subListeners[0],subListeners[0].trigger,currentTurn,ownersSlots);
                    }
                },
                "target": "self",
                "listenerName": "Past and Future listener setup",
                "owners": [],
                "subListeners": [
                    {
                        "trigger": "AbilityEnd",
                        condition(battleData,generalInfo) {
                            const action = generalInfo.action;
                            if (action != "Skill") {return;}
        
                            let sourceTurn = generalInfo.sourceTurn;
                            const nextAllyTurn = sim.getNextQueuedAllyTurnBuffableOnly(battleData);
                            if (!nextAllyTurn) {return;}
    
                            if (!sourceTurn.lcPastAndFutureDMGSHEET) {
                                let ownersSlots = this.ownersSlots;
                                let ownerRank = ownersSlots[sourceTurn.name];
                                let lcNameRef = "Past and Future";
                                let lcPathing = lightcones[lcNameRef].params;
                                let rankParams = lcPathing[ownerRank-1];

                                const logicRef = turnLogicLightcones[lcNameRef];
                                const uniqueName = battleActions.getUniqueGearBuffName(battleData,sourceTurn,logicRef,"nextAllyBuff")
    
                                sourceTurn.lcPastAndFutureDMGSHEET = {
                                    "stats": [DamageAll],
                                    [DamageAll]: rankParams[0],
                                    "source": lcNameRef,
                                    "sourceOwner": sourceTurn.properName,
                                    "buffName": uniqueName,
                                    "durationInTurn": 1,
                                    "duration": 1,
                                    "AVApplied": 0,
                                    "maxStacks": 1,
                                    "currentStacks": 1,
                                    "decay": false,
                                    "expireType": "EndTurn"
                                }
                            }
    
                            let buffSheet = sourceTurn.lcPastAndFutureDMGSHEET
                            updateBuff(battleData,nextAllyTurn,buffSheet);
                        },
                        "target": "self",
                        "isPersonal": true,
                        "listenerName": "Past and Future buff prep controller",
                    },
                ]
            },
        ],
        "buffNames": {
            "nextAllyBuff": "Past and Future",
        },
    },
        //3star
    "Meshing Cogs": {//REDONE
        logic(thisTurn,battleData) {},
        "skillFunctions": {
            lcRegenEnergy(battleData,targetTurn,energyToRegen) {
                updateEnergy(battleData,energyToRegen,targetTurn,false,"Meshing Cogs [LC]");
                targetTurn.lcMeshingCogsCanRegen = false;
            },
        },
        "listeners": [
            {
                "trigger": "PassiveCalls",
                condition(battleData,generalInfo) {
                    let ownerRef = this.owners;
        
                    const namedTurns = battleData.nameBasedTurns;
                    const subListeners = this.subListeners;
                    const ownersSlots = this.ownersSlots;
        
                    for (let owner of ownerRef) {
                        let charSlot = owner.slot;
                        let currentTurn = namedTurns[charSlot];
        
                        addListenerWithPriority(battleData,subListeners[0],subListeners[0].trigger,currentTurn,ownersSlots);
                        addListenerWithPriority(battleData,subListeners[1],subListeners[1].trigger,currentTurn,ownersSlots);
                    }
                },
                "target": "self",
                "listenerName": "Meshing Cogs listener setup",
                "owners": [],
                "subListeners": [
                    {
                        "trigger": "AttackDMGEnd",
                        condition(battleData,generalInfo) {
                            let sourceTurn = generalInfo.sourceTurn;
                            if (!sourceTurn.lcMeshingCogsCanRegen) {return;}//then abort non-owners
                            sourceTurn.lcMeshingCogsCanRegen = false;
        
                            let lcNameRef = "Meshing Cogs";
                            const regenFunction = this.lcRegenEnergy ??= turnLogicLightcones[lcNameRef].skillFunctions.lcRegenEnergy;
        
                            let ownersSlots = this.ownersSlots;
                            let ownerRank = ownersSlots[sourceTurn.name];
                            let lcPathing = lightcones[lcNameRef].params;
                            let rankParams = lcPathing[ownerRank-1];
                            const regenValue = rankParams[0];
        
                            regenFunction(battleData,sourceTurn,regenValue);
                        },
                        "target": "self",
                        "isPersonal": true,
                        "listenerName": "Meshing Cogs - owner attack listener",
                    },
                    {
                        "trigger": "WasAttackedEnd",
                        condition(battleData,generalInfo,personalOwner) {
                            if (!personalOwner.lcMeshingCogsCanRegen) {return;}
                            personalOwner.lcMeshingCogsCanRegen = false;
        
                            let ownersSlots = this.ownersSlots;
                            let lcNameRef = "Meshing Cogs";
                            const regenFunction = this.lcRegenEnergy ??= turnLogicLightcones[lcNameRef].skillFunctions.lcRegenEnergy;
                            let lcPathing = lightcones[lcNameRef].params;

                            const currentRank = ownersSlots[allyHit];
                            const rankParams = lcPathing[currentRank-1];
                            const regenValue = rankParams[0];
                            regenFunction(battleData,personalOwner,regenValue);
                        },
                        "target": "self",
                        "isPersonal": true,
                        "listenerName": "Meshing Cogs - owner was attacked listener",
                        "owners": [],
                        "ownersSlots": {}
                    },
                ]
            },
            {
                "trigger": "EndTurn",
                condition(battleData,generalInfo) {
                    let ownerRef = this.owners;
        
                    const namedTurns = battleData.nameBasedTurns;
                    for (let owner of ownerRef) {
                        let charSlot = owner.slot;
                        let currentTurn = namedTurns[charSlot];

                        currentTurn.lcMeshingCogsCanRegen = true;
                    }
                },
                "target": "self",
                // "isPersonal": true,
                "listenerName": "Meshing Cogs endturn regen reset listener",
                "owners": [],
                "ownersSlots": {}
            },
        ],
        "buffNames": {},
    },
    "Chorus": {
        logic(thisTurn,battleData) {},
        "skillFunctions": {},
        "listeners": [
            {
                "trigger": "WaveStart",
                condition(battleData,generalInfo) {
                    // let ownerRef = this.owners;
                    let ownersSlots = this.ownersSlots;
                    // let lcNameRef = "Poised to Bloom";

                    // const updatePresage = this.updatePresage ??= turnLogicLightcones[lcNameRef].skillFunctions.updatePresage;
                    const namedTurns = battleData.nameBasedTurns;

                    let firstOwnerTurn = null;
                    for (let ownerSlot in ownersSlots) {
                        const currentOwner = namedTurns[ownerSlot];
                        firstOwnerTurn = currentOwner;


                        if (!currentOwner.lcChorusATKSHEET) {
                            let lcNameRef = "Chorus";
                            let lcPathing = lightcones[lcNameRef].params;
                            let ownerRank = ownersSlots[currentOwner.name];
                            let rankParams = lcPathing[ownerRank-1];
        
                            let buffName2 = turnLogicLightcones[lcNameRef].buffNames.buff2;
        
                            currentOwner.lcChorusATKSHEET = {
                                "stats": [ATKP],
                                [ATKP]: rankParams[0],
                                "source": lcNameRef,
                                "sourceOwner": currentOwner.properName,
                                "buffName": buffName2,
                                "durationInTurn": null,
                                "duration": 1,
                                "AVApplied": 0,
                                "maxStacks": 1,
                                "currentStacks": 1,
                                "decay": false,
                                "expireType": null,
                            }
                            
                        }

                        break;
                    }
                    const buffSheet = firstOwnerTurn.lcChorusATKSHEET;
                    const allAlliesArray = battleData.allAlliesArray;
                    updateBuffBatchTargets(battleData,allAlliesArray,buffSheet);
                },
                "target": "self",
                "priority": -80,
                "listenerName": "Chorus - battlestart atk% buff",
            },
        ],
        "buffNames": {
            "buff2": "Chorus [LC]",
        },
    },
    "Mediation": {
        logic(thisTurn,battleData) {},
        "skillFunctions": {},
        "listeners": [
            {
                "trigger": "WaveStart",
                condition(battleData,generalInfo) {
                    // let ownerRef = this.owners;
                    let ownersSlots = this.ownersSlots;
                    // let lcNameRef = "Poised to Bloom";

                    // const updatePresage = this.updatePresage ??= turnLogicLightcones[lcNameRef].skillFunctions.updatePresage;
                    const namedTurns = battleData.nameBasedTurns;

                    // let firstOwnerTurn = null;
                    const allAlliesArray = battleData.allAlliesArray;
                    for (let ownerSlot in ownersSlots) {
                        const currentOwner = namedTurns[ownerSlot];


                        if (!currentOwner.lcMediationSPDSHEET) {
                            let lcNameRef = "Mediation";
                            let lcPathing = lightcones[lcNameRef].params;
                            let ownerRank = ownersSlots[currentOwner.name];
                            let rankParams = lcPathing[ownerRank-1];

                            const logicRef = turnLogicLightcones[lcNameRef];
                            const uniqueName = battleActions.getUniqueGearBuffName(battleData,currentOwner,logicRef,"buff2")
        
                            currentOwner.lcMediationSPDSHEET = {
                                "stats": [SPDFlat],
                                [SPDFlat]: rankParams[0],
                                "source": lcNameRef,
                                "sourceOwner": currentOwner.properName,
                                "buffName": uniqueName,
                                "durationInTurn": 2,
                                "duration": 1,
                                "AVApplied": 0,
                                "maxStacks": 1,
                                "currentStacks": 1,
                                "decay": false,
                                "expireType": "EndTurn",
                            }
                            
                        }
                        const buffSheet = currentOwner.lcMediationSPDSHEET;
                        // const allAlliesArray = battleData.allAlliesArray;
                        updateBuffBatchTargets(battleData,allAlliesArray,buffSheet);

                        // break;
                    }
                },
                "target": "self",
                "priority": -80,
                "listenerName": "Mediation - battlestart SPD buff",
            },
        ],
        "buffNames": {
            "buff2": "Mediation [LC]",
        },
    },


    //REMEMBRANCE
        //5star
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
                            "durationInTurn": null,
                            "duration": 1,
                            "AVApplied": 0,
                            "maxStacks": 6,
                            "currentStacks": 1,
                            "decay": false,
                            "expireType": null,
                        }

                        sourceTurn.timeWovenBrocadeBASICSTACKSHEET = {
                            "stats": [DamageAll],
                            [DamageAll]: rankParams[2],
                            "source": lcNameRef,
                            "sourceOwner": sourceTurn.properName,
                            "buffName": buffNames.brocadeBasic,
                            "durationInTurn": null,
                            "duration": 1,
                            "AVApplied": 0,
                            "maxStacks": 6,
                            "currentStacks": 6,
                            "decay": false,
                            "expireType": null,
                            "actionTags": ["Basic"],
                        }
                    }
                    let buffSheet = sourceTurn.timeWovenBrocadeSTACKSHEET;
                    let buffName = buffSheet.buffName;
                    
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
                            removeListener(battleData,this,sourceTurn);
                            //sourceTurn for now but when personalized later we need to remove from both the memo and memo owner
                            //wherever applicable
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
                            "durationInTurn": 3,
                            "duration": 2,
                            "AVApplied": 0,
                            "maxStacks": 1,
                            "currentStacks": 1,
                            "decay": false,
                            "expireType": "EndTurn",
                        }
                    }
                    let buffSheet = sourceTurn.makeFarewellsDeathFlowerSHEET;
                    


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
                            if (memoTurn.isActive){
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
                        actionAdvance(rankParams[3],summonAssignedTo,battleData,"Memosprite vanished advancement - Make Farewells More Beautiful");
                        summonAssignedTo.makeFarewellsAdvanceUsed = true;
                    }
                },
                "target": "self",
                "listenerName": "Make Farewells More Beautiful - summon removed from field listener",
                "owners": []
            },
            {
                "trigger": "AbilityEnd",
                condition(battleData,generalInfo) {
                    const action = generalInfo.action;
                    if (action != "Ultimate") {return;}

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
                "trigger": "AbilityStart",
                condition(battleData,generalInfo) {
                    const action = generalInfo.action;
                    if (action != "MemoSkill") {return;}

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
                            "durationInTurn": null,
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
                            "durationInTurn": null,
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

                    updateBuff(battleData,ownerTurn,buffSheet);
                    updateBuff(battleData,sourceTurn,buffSheet);

                    // const allyPositions = battleData.allyPositions;
                    const declaredMemosprites = battleData.declaredMemosprites;
                    updateBuffBatchTargets(battleData,declaredMemosprites,buffSheet3);

                    const tempLogic = battleData.battleLogicTemp;
                    const evernightRef = tempLogic.toEvernightsStarsLightcone ??= {};
                    evernightRef.completed += 1;
                    ownerTurn.toEvernightsStarsBonusCompleted = true;

                    if (evernightRef.completed === evernightRef.total) {
                        removeListener(battleData,this,sourceTurn);
                    }
                },
                "target": "self",
                "listenerName": "To Evernight's Stars - memoskill listener",
                "owners": [],
            },
            {
                "trigger": "SummonOnFieldAdjustment",
                condition(battleData,generalInfo) {
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

                        updateEnergy(battleData,rankParams[3],summonAssignedTo,false,"Memosprite removed [To Evernight's Stars]");
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
    "Long May Rainbows Adorn the Sky": {
        logic(thisTurn,battleData) {},
        "skillFunctions": {
            lcAddedDMG(battleData,generalInfo,sourceTurn,targetsGotHit,ownerRank,element,memoTurn) {
                if (!sourceTurn.longMayRainbowsAddedDMGObject) {
                    let lcNameRef = "Time Waits for No One";
                    let lcPathing = lightcones[lcNameRef].params;
                    sourceTurn.rankParamsLCTimeWaitsForNoOne = lcPathing[ownerRank-1];

                    const tags = ["All",element];
                    const actionTags = ["All","Additional"];
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
                if (battleData.isLoggyLogger) {
                    logToBattle(battleData,
                        {logType: "GenericAction", source:"Long May Rainbows Adorn the Sky", bodyText: `LC Consume tally (${sourceTurn.properName}): ${tallyValue.toLocaleString()} --> 0`});
                }
                
                const additionalMulti = values[5] * tallyValue;
                ATKObject.multipliers.additional = additionalMulti;

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
                "trigger": "PassiveCalls",
                condition(battleData,generalInfo) {
                    let ownerRef = this.owners;

                    const namedTurns = battleData.nameBasedTurns;
                    const subListeners = this.subListeners;
                    const ownersSlots = this.ownersSlots;

                    for (let owner of ownerRef) {
                        let charSlot = owner.slot;
                        let currentTurn = namedTurns[charSlot];

                        const memospriteEventRef = currentTurn.memospriteEventRef;
                        const memoTurn = memospriteEventRef ? currentTurn[memospriteEventRef] : null;

                        addListenerWithPriority(battleData,subListeners[0],subListeners[0].trigger,currentTurn,ownersSlots);
                        if (memoTurn) {
                            addListenerWithPriority(battleData,subListeners[1],subListeners[1].trigger,memoTurn,ownersSlots);
                            addListenerWithPriority(battleData,subListeners[2],subListeners[2].trigger,memoTurn,ownersSlots);
                        }
                    }
                },
                "target": "self",
                "listenerName": "Long May Rainbows Adorn the Sky listener setup",
                "owners": [],
                "subListeners": [
                    {
                        "trigger": "AbilityStart",
                        condition(battleData,generalInfo) {
                            const action = generalInfo.action;
                            if (action != "BasicATK" && action != "Skill" && action != "Ultimate") {return;}
                            //ACTION IS NOT ACTUALLY FACTORED, the LC is only looking for use, not usetype, I was jebaited
                            //UPDATE: they change it, it now looks for the abilities stated in the lc
        
                            // let ownerRef = this.owners;
                            let sourceTurn = generalInfo.sourceTurn;
        
                            if (!sourceTurn.longMayRainbowsVALUES) {
                                let lcNameRef = "Long May Rainbows Adorn the Sky";
                                // const logicRef = turnLogicLightcones[lcNameRef];
                                let lcPathing = lightcones[lcNameRef].params;
                                let ownersSlots = this.ownersSlots;
                                let ownerRank = ownersSlots[sourceTurn.name];
                                sourceTurn.longMayRainbowsVALUES = lcPathing[ownerRank-1];
                            }
                            const values = sourceTurn.longMayRainbowsVALUES;
                            // console.log(values[1])
        
                            const allyPositions = battleData.allyPositions;
                            const consumeValue = consumeHP(battleData,null,values[1],allyPositions,sourceTurn,"Lightcone",false,true).totalEaten;
        
                            // sourceTurn.longMayRainbowsHPTally = (sourceTurn.longMayRainbowsHPTally ?? 0) + consumeValue;
                            // sourceTurn.longMayRainbowsHPTally = (sourceTurn.longMayRainbowsHPTally ?? 0) + Math.ceil(consumeValue);
        
                            const oldValue = sourceTurn.longMayRainbowsHPTally ??= 0;
                            sourceTurn.longMayRainbowsHPTally += + consumeValue;
                            if (battleData.isLoggyLogger) {
                                logToBattle(battleData,
                                    {logType: "GenericAction", source:"Long May Rainbows Adorn the Sky", bodyText: `LC Consume tally (${sourceTurn.properName}): ${oldValue.toLocaleString()} --> ${sourceTurn.longMayRainbowsHPTally.toLocaleString()}`});
                            }
                        },
                        "target": "self",
                        "isPersonal": true,
                        "listenerName": "Long May Rainbows Adorn the Sky - owner ability listener",
                    },
                    {
                        "trigger": "AbilityStart",
                        condition(battleData,generalInfo) {
                            const action = generalInfo.action;
                            if (action != "MemoSkill") {return;}
        
                            // let ownerRef = this.owners;
                            let sourceTurn = generalInfo.sourceTurn;
                            const ownerTurn = battleData.nameBasedTurns[sourceTurn.eventOwner];
        
                            if (!ownerTurn.longMayRainbowsVULNSHEET) {
                                let lcNameRef = "Long May Rainbows Adorn the Sky";
                                const logicRef = turnLogicLightcones[lcNameRef];
                                let lcPathing = lightcones[lcNameRef].params;
                                let ownersSlots = this.ownersSlots;
                                let ownerRank = ownersSlots[ownerTurn.name];
                                let rankParams = lcPathing[ownerRank-1];
                                const buffNames = logicRef.buffNames;
                                // let ownerName = sourceTurn.properName;
        
                                ownerTurn.longMayRainbowsVULNSHEET = {
                                    "stats": [VulnAll],
                                    [VulnAll]: rankParams[3],
                                    "source": lcNameRef,
                                    "sourceOwner": ownerTurn.properName,
                                    "buffName": buffNames.vuln,
                                    "durationInTurn": 3,
                                    "duration": 2,
                                    "AVApplied": 0,
                                    "maxStacks": 1,
                                    "currentStacks": 1,
                                    "decay": false,
                                    "isDebuff": true,
                                    "expireType": "EndTurn",
                                }
                            }
                            let buffSheet = ownerTurn.longMayRainbowsVULNSHEET;
                            
                            const enemyPositions = battleData.enemyPositions;
                            updateBuffBatchTargets(battleData,enemyPositions,buffSheet)
                        },
                        "target": "self",
                        "isPersonal": true,
                        "listenerName": "Long May Rainbows Adorn the Sky - memoskill listener",
                    },
                    {
                        "trigger": "AttackDMGEnd",
                        condition(battleData,generalInfo) {
                            // let ownerTurn = this.ownerTurn;
                            let sourceTurn = generalInfo.sourceTurn;

                            const ownersSlots = this.ownersSlots;
                            const ownerSlot = sourceTurn.eventOwner;
                            const ownerRank = ownersSlots[ownerSlot];

                            const ownerTurn = battleData.nameBasedTurns[ownerSlot];
                            const HPTally = ownerTurn.longMayRainbowsHPTally;
                            if (!HPTally) {return;}
        
                            const addedDMG = this.lcAddedDMG ??= turnLogicLightcones["Long May Rainbows Adorn the Sky"].skillFunctions.lcAddedDMG;
                            const targetsGotHit = generalInfo.targetsGotHit;
                            
                            const element = sourceTurn.element;
                            addedDMG(battleData,generalInfo,ownerTurn,targetsGotHit,ownerRank,element,sourceTurn);
                        },
                        "target": "enemy",
                        "isPersonal": true,
                        "listenerName": "Long May Rainbows Adorn the Sky -  attack listener for additional dmg",
                    },
                ]
            },
        ],
        "buffNames": {
            "vuln": "Long May Rainbows Adorn the Sky",
        },
    },
    "Memory's Curtain Never Falls": {//REDONE
        logic(thisTurn,battleData) {},
        "skillFunctions": {},
        "listeners": [
            {
                "trigger": "PassiveCalls",
                condition(battleData,generalInfo) {
                    let ownerRef = this.owners;

                    const namedTurns = battleData.nameBasedTurns;
                    const subListeners = this.subListeners;
                    const ownersSlots = this.ownersSlots;

                    for (let owner of ownerRef) {
                        let charSlot = owner.slot;
                        let currentTurn = namedTurns[charSlot];

                        addListenerWithPriority(battleData,subListeners[0],subListeners[0].trigger,currentTurn,ownersSlots);
                    }
                },
                "target": "self",
                "listenerName": "Memory's Curtain Never Falls listener setup",
                "owners": [],
                "subListeners": [
                    {
                        "trigger": "AbilityEnd",
                        condition(battleData,generalInfo) {
                            const action = generalInfo.action;
                            if (action != "Skill") {return;}
        
                            let sourceTurn = generalInfo.sourceTurn;
        
                            if (!sourceTurn.memoryCurtainDMGSHEET) {
                                let ownersSlots = this.ownersSlots;
                                let ownerRank = ownersSlots[sourceTurn.name];

                                let lcNameRef = "Memory's Curtain Never Falls";
                                let lcPathing = lightcones[lcNameRef].params;
                                let rankParams = lcPathing[ownerRank-1];
        
                                sourceTurn.memoryCurtainDMGSHEET = {
                                    "stats": [DamageAll],
                                    [DamageAll]: rankParams[1],
                                    "source": lcNameRef,
                                    "sourceOwner": sourceTurn.properName,
                                    "buffName": turnLogicLightcones[lcNameRef].buffNames.allyDMG,
                                    "durationInTurn": 4,
                                    "duration": 3,
                                    "AVApplied": 0,
                                    "maxStacks": 1,
                                    "currentStacks": 1,
                                    "decay": false,
                                    "expireType": "EndTurn",
                                    "removeOnDeath": true,
                                }
                            }
                            let buffSheet = sourceTurn.memoryCurtainDMGSHEET;
                            
        
                            const allyPositions = battleData.allyPositions;
                            updateBuffBatchTargets(battleData,allyPositions,buffSheet);
                        },
                        "target": "self",
                        "isPersonal": true,
                        "listenerName": "Memory's Curtain Never Falls - Skill end listener",
                    },
                ]
            },
        ],
        "buffNames": {
            "allyDMG": "Reception [LC]"
        },
    },
    // "This Love, Forever": {
    //     logic(thisTurn,battleData) {},
    //     "skillFunctions": {},
    //     "listeners": [
    //         {
    //             "trigger": "TargetAlly",
    //             condition(battleData,generalInfo) {
    //                 let ownersSlots = this.ownersSlots;
    //                 let sourceTurn = generalInfo.sourceTurn;
    //                 if (!sourceTurn.isMemosprite || sourceTurn.lcThisLoveBlankActive) {return;}

    //                 let targetTurn = generalInfo.targetTurn;
    //                 const targetType = generalInfo.targetType;
    //                 if (!targetTurn || targetType != "Single") {return;}
    //                 //target turn SHOULD be left null on team-wide targets, so in theory we should be able to just check if a target turn is passed or not to check if it's single or no
    //                 //UPDATE: to be safe we're doing an actual check for target type specified on the call

    //                 const sourceOwner = sourceTurn.eventOwner;
    //                 const sourceOwnerTurn = battleData.nameBasedTurns[sourceOwner];
    //                 let ownerRank = ownersSlots[sourceOwnerTurn.name];
    //                 if (!ownerRank) {return;}


    //                 if (!sourceOwnerTurn.lcThisLoveForeverBLANKSHEET) {
    //                     let lcNameRef = "This Love, Forever";
    //                     let lcPathing = lightcones[lcNameRef].params;
    //                     let rankParams = lcPathing[ownerRank-1];

    //                     const buffNames = turnLogicLightcones[lcNameRef].buffNames;
    //                     let buffName1 = buffNames.buff1;
    //                     let buffName2 = buffNames.buff11;
    //                     let buffName3 = buffNames.buff111;

    //                     const customName = `${buffName2} (${sourceTurn.properName})`;
    //                     if (!buffNames[customName]) {buffNames[customName] = customName;}

    //                     const customName2 = `${buffName3} (${sourceTurn.properName})`;
    //                     if (!buffNames[customName2]) {buffNames[customName2] = customName2;}

    //                     sourceOwnerTurn.lcThisLoveForeverBLANKSHEET = {
    //                         "stats": null,
    //                         "source": lcNameRef,
    //                         "sourceOwner": sourceOwnerTurn.properName,
    //                         "buffName": buffName1,
    //                         "durationInTurn": null,
    //                         "duration": 1,
    //                         "AVApplied": 0,
    //                         "maxStacks": 1,
    //                         "currentStacks": 1,
    //                         "decay": false,
    //                         "expireType": null,
    //                     }
    //                     sourceOwnerTurn.lcThisLoveForeverBLANKSHEET2 = {
    //                         "stats": [VulnAll],
    //                         [VulnAll]: rankParams[2],
    //                         "source": lcNameRef,
    //                         "sourceOwner": sourceOwnerTurn.properName,
    //                         "buffName": buffName2,
    //                         "durationInTurn": null,
    //                         "duration": 1,
    //                         "AVApplied": 0,
    //                         "maxStacks": 1,
    //                         "currentStacks": 1,
    //                         "decay": false,
    //                         "expireType": null,
    //                         "isDebuff": true,
    //                     }
    //                     sourceOwnerTurn.lcThisLoveForeverBLANKSHEET3 = {
    //                         "stats": [VulnAll],
    //                         [VulnAll]: rankParams[2] * (1 + rankParams[3]),
    //                         "source": lcNameRef,
    //                         "sourceOwner": sourceOwnerTurn.properName,
    //                         "buffName": buffName3,
    //                         "durationInTurn": null,
    //                         "duration": 1,
    //                         "AVApplied": 0,
    //                         "maxStacks": 1,
    //                         "currentStacks": 1,
    //                         "decay": false,
    //                         "expireType": null,
    //                         "isDebuff": true,
    //                     }
    //                 }

    //                 const buffSheet = sourceOwnerTurn.lcThisLoveForeverBLANKSHEET;
    //                 // const buffCheck = sourceTurn.buffsObject[buffSheet.buffName];
    //                 // if (buffCheck) {return;}
    //                 updateBuff(battleData,sourceTurn,buffSheet);
    //                 sourceTurn.lcThisLoveBlankActive = true;
                    
    //                 const enemyPositions = battleData.enemyPositions;

    //                 if (sourceTurn.lcThisLoveVerseActive) {//if verse is also active when reaching this point, use the enhanceds buff instead
    //                     const buffSheet3 = sourceOwnerTurn.lcThisLoveForeverBLANKSHEET3;
    //                     updateBuffBatchTargets(battleData,enemyPositions,buffSheet3);

    //                     //remove old Verse and remake it to enhanced
    //                     const buffSheet12 = sourceOwnerTurn.lcThisLoveForeverVERSESHEET2;
    //                     const allyArray = battleData.allAlliesArray;
    //                     removeBuffFromBatch(battleData,allyArray,buffSheet12,true,null,false,true);
    //                     const buffSheet13 = sourceOwnerTurn.lcThisLoveForeverVERSESHEET3;
    //                     updateBuffBatchTargets(battleData,allyArray,buffSheet13);
    //                 }
    //                 else {//otherwise use the standard vuln
    //                     const buffSheet2 = sourceOwnerTurn.lcThisLoveForeverBLANKSHEET2;
    //                     updateBuffBatchTargets(battleData,enemyPositions,buffSheet2);
    //                 }
                    
    //             },
    //             "target": "self",
    //             "listenerName": "This Love, Forever target ally listener vuln application",
    //             "owners": [],
    //             "ownersSlots": {},
    //         },
    //         {
    //             "trigger": "EnemyCreated",
    //             condition(battleData,generalInfo) {
    //                 // let ownerRef = this.owners;
    //                 let ownersSlots = this.ownersSlots;
    //                 // let lcNameRef = "Poised to Bloom";
    //                 const targetTurn = generalInfo.targetTurn;

    //                 // const updatePresage = this.updatePresage ??= turnLogicLightcones[lcNameRef].skillFunctions.updatePresage;
    //                 const namedTurns = battleData.nameBasedTurns;
    //                 for (let ownerSlot in ownersSlots) {
    //                     const currentOwner = namedTurns[ownerSlot];

    //                     const memoTurnRef = currentOwner.memospriteEventRef;
    //                     const memoTurn = currentOwner[memoTurnRef];
    //                     if (!memoTurn) {continue;}

    //                     const blankActive = memoTurn.lcThisLoveBlankActive;
    //                     const verseActive = memoTurn.lcThisLoveVerseActive;
    //                     const hasBoth = blankActive && verseActive;
    //                     if (!blankActive) {continue;}

    //                     const vulnSheet1 = currentOwner.lcThisLoveForeverBLANKSHEET2;
    //                     const vulnSheet2 = currentOwner.lcThisLoveForeverBLANKSHEET3;

    //                     if (hasBoth) {
    //                         updateBuff(battleData,targetTurn,vulnSheet2);
    //                     }
    //                     else {
    //                         updateBuff(battleData,targetTurn,vulnSheet1);
    //                     }
    //                 }
    //             },
    //             "target": "self",
    //             "listenerName": "This Love, Forever - enemy added to field while vuln active",
    //             "owners": [],
    //             "ownersSlots": {}
    //         },
    //         {
    //             "trigger": "AbilityAttackStart",
    //             condition(battleData,generalInfo) {
    //                 let ownersSlots = this.ownersSlots;
    //                 let sourceTurn = generalInfo.sourceTurn;
    //                 if (!sourceTurn.isMemosprite || sourceTurn.lcThisLoveVerseActive) {return;}

    //                 const sourceOwner = sourceTurn.eventOwner;
    //                 const sourceOwnerTurn = battleData.nameBasedTurns[sourceOwner];
    //                 let ownerRank = ownersSlots[sourceOwnerTurn.name];
    //                 if (!ownerRank) {return;}


    //                 if (!sourceOwnerTurn.lcThisLoveForeverVERSESHEET) {
    //                     let lcNameRef = "This Love, Forever";
    //                     let lcPathing = lightcones[lcNameRef].params;
    //                     let rankParams = lcPathing[ownerRank-1];

    //                     const buffNames = turnLogicLightcones[lcNameRef].buffNames;
    //                     let buffName1 = buffNames.buff2;
    //                     let buffName2 = buffNames.buff12;
    //                     let buffName3 = buffNames.buff112;

    //                     const customName = `${buffName2} (${sourceTurn.properName})`;
    //                     if (!buffNames[customName]) {buffNames[customName] = customName;}

    //                     const customName2 = `${buffName3} (${sourceTurn.properName})`;
    //                     if (!buffNames[customName2]) {buffNames[customName2] = customName2;}

    //                     sourceOwnerTurn.lcThisLoveForeverVERSESHEET = {
    //                         "stats": null,
    //                         "source": lcNameRef,
    //                         "sourceOwner": sourceOwnerTurn.properName,
    //                         "buffName": buffName1,
    //                         "durationInTurn": null,
    //                         "duration": 1,
    //                         "AVApplied": 0,
    //                         "maxStacks": 1,
    //                         "currentStacks": 1,
    //                         "decay": false,
    //                         "expireType": null,
    //                     }
    //                     sourceOwnerTurn.lcThisLoveForeverVERSESHEET2 = {
    //                         "stats": [CritDamageBase],
    //                         [CritDamageBase]: rankParams[1],
    //                         "source": lcNameRef,
    //                         "sourceOwner": sourceOwnerTurn.properName,
    //                         "buffName": buffName2,
    //                         "durationInTurn": null,
    //                         "duration": 1,
    //                         "AVApplied": 0,
    //                         "maxStacks": 1,
    //                         "currentStacks": 1,
    //                         "decay": false,
    //                         "expireType": null,
    //                     }
    //                     sourceOwnerTurn.lcThisLoveForeverVERSESHEET3 = {
    //                         "stats": [CritDamageBase],
    //                         [CritDamageBase]: rankParams[1] * (1 + rankParams[3]),
    //                         "source": lcNameRef,
    //                         "sourceOwner": sourceOwnerTurn.properName,
    //                         "buffName": buffName3,
    //                         "durationInTurn": null,
    //                         "duration": 1,
    //                         "AVApplied": 0,
    //                         "maxStacks": 1,
    //                         "currentStacks": 1,
    //                         "decay": false,
    //                         "expireType": null,
    //                     }
    //                 }

    //                 const buffSheet = sourceOwnerTurn.lcThisLoveForeverVERSESHEET;
    //                 // const buffCheck = sourceTurn.buffsObject[buffSheet.buffName];
    //                 // if (buffCheck) {return;}
    //                 updateBuff(battleData,sourceTurn,buffSheet);
    //                 sourceTurn.lcThisLoveVerseActive = true;
    //                 // lcThisLoveVerseActive
    //                 // lcThisLoveBlankActive
    //                 const enemyPositions = battleData.enemyPositions;
    //                 const allyArray = battleData.allAlliesArray;

    //                 if (sourceTurn.lcThisLoveBlankActive) {//if blank is also active when reaching this point, use the enhanceds buff instead
    //                     const buffSheet3 = sourceOwnerTurn.lcThisLoveForeverVERSESHEET3;
    //                     updateBuffBatchTargets(battleData,allyArray,buffSheet3);

    //                     //remove old Verse and remake it to enhanced
    //                     const buffSheet12 = sourceOwnerTurn.lcThisLoveForeverBLANKSHEET2;
                        
    //                     removeBuffFromBatch(battleData,enemyPositions,buffSheet12,true,null,false,true);
    //                     const buffSheet13 = sourceOwnerTurn.lcThisLoveForeverBLANKSHEET3;
    //                     updateBuffBatchTargets(battleData,enemyPositions,buffSheet13);
    //                 }
    //                 else {//otherwise use the standard vuln
    //                     const buffSheet2 = sourceOwnerTurn.lcThisLoveForeverVERSESHEET2;
    //                     updateBuffBatchTargets(battleData,allyArray,buffSheet2);
    //                 }
    //             },
    //             "target": "self",
    //             "listenerName": "This Love, Forever atk start listener",
    //             "owners": [],
    //             "ownersSlots": {},
    //         },
    //         {
    //             "trigger": "SummonOnFieldAdjustment",
    //             condition(battleData,generalInfo) {
    //                 let ownersSlots = this.ownersSlots;
    //                 const sourceTurn = generalInfo.assignedTo;
    //                 const summonEvent = generalInfo.summonEvent;
                    
    //                 let ownerRank = ownersSlots[sourceTurn.name];//setAmount
    //                 if (!ownerRank || !summonEvent.isMemosprite) {return;}//if the summon is assigned to someone who doesn't own the set, then it doesn't matter
    //                 //or if what was assigned, wasn't a memo

    //                 const summonWas = generalInfo.summonWas;
                    
    //                 if (summonWas === "Remove") {
    //                     const blankActive = summonEvent.lcThisLoveBlankActive;
    //                     const verseActive = summonEvent.lcThisLoveVerseActive;
    //                     const hasBoth = blankActive && verseActive;

    //                     summonEvent.lcThisLoveBlankActive = false;
    //                     summonEvent.lcThisLoveVerseActive = false;

    //                     const vulnSheet1 = sourceTurn.lcThisLoveForeverBLANKSHEET2;
    //                     const vulnSheet2 = sourceTurn.lcThisLoveForeverBLANKSHEET3;

    //                     const critSheet1 = sourceTurn.lcThisLoveForeverVERSESHEET2;
    //                     const critSheet2 = sourceTurn.lcThisLoveForeverVERSESHEET3;

    //                     if (hasBoth) {
    //                         const enemyPositions = battleData.enemyPositions;
    //                         removeBuffFromBatch(battleData,enemyPositions,vulnSheet2);

    //                         const allyArray = battleData.allAlliesArray;
    //                         removeBuffFromBatch(battleData,allyArray,critSheet2);
    //                     }
    //                     else if (blankActive) {
    //                         const enemyPositions = battleData.enemyPositions;
    //                         removeBuffFromBatch(battleData,enemyPositions,vulnSheet1);
    //                     }
    //                     else if (verseActive) {
    //                         const allyArray = battleData.allAlliesArray;
    //                         removeBuffFromBatch(battleData,allyArray,critSheet1);
    //                     }
    //                 }
    //             },
    //             "target": "self",
    //             "listenerName": "This Love, Forever - summon adjusted from field listener",
    //             "owners": []
    //         },
    //     ],
    //     "buffNames": {
    //         "buff1": "Blank (LC)",
    //         "buff2": "Verse (LC)",
    //         "buff11": "Blank Vuln (LC)",
    //         "buff12": "Verse CRIT (LC)",
    //         "buff111": "Blank Vuln [Enhanced] (LC)",
    //         "buff112": "Verse CRIT [Enhanced] (LC)",
    //     },
    //     "buffNamesPerCharacter": {
    //         "buff11": "Blank Vuln (LC)",
    //         "buff12": "Verse CRIT (LC)",
    //         "buff111": "Blank Vuln [Enhanced] (LC)",
    //         "buff112": "Verse CRIT [Enhanced] (LC)",
    //     }
    // },
        //4star
    "Fly Into a Pink Tomorrow": {//REDONE
        logic(thisTurn,battleData) {},
        "skillFunctions": {},
        "listeners": [
            {
                "trigger": "PassiveCalls",
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
                            "durationInTurn": null,
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
                            "durationInTurn": null,
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
    "Geniuses' Greetings": {//REDONE
        logic(thisTurn,battleData) {},
        "skillFunctions": {},
        "listeners": [
            {
                "trigger": "PassiveCalls",
                condition(battleData,generalInfo) {
                    let ownerRef = this.owners;

                    const namedTurns = battleData.nameBasedTurns;
                    const subListeners = this.subListeners;
                    const ownersSlots = this.ownersSlots;

                    for (let owner of ownerRef) {
                        let charSlot = owner.slot;
                        let currentTurn = namedTurns[charSlot];

                        addListenerWithPriority(battleData,subListeners[0],subListeners[0].trigger,currentTurn,ownersSlots);
                    }
                },
                "target": "self",
                "listenerName": "Geniuses' Greetings listener setup",
                "owners": [],
                "subListeners": [
                    {
                        "trigger": "AbilityEnd",
                        condition(battleData,generalInfo) {
                            const action = generalInfo.action;
                            if (action != "Ultimate") {return;}
        
                            let sourceTurn = generalInfo.sourceTurn;
                            
                            if (!sourceTurn.lcGeniusGreetingsBASICSHEET) {
                                let ownersSlots = this.ownersSlots;
                                let ownerRank = ownersSlots[sourceTurn.name];

                                let lcNameRef = "Geniuses' Greetings";
                                let lcPathing = lightcones[lcNameRef].params;
                                let rankParams = lcPathing[ownerRank-1];
                                let buffName = turnLogicLightcones[lcNameRef].buffNames.buff1;
        
                                sourceTurn.lcGeniusGreetingsBASICSHEET = {
                                    "stats": [DamageAll],
                                    [DamageAll]: rankParams[1],
                                    "source": lcNameRef,
                                    "sourceOwner": sourceTurn.properName,
                                    "buffName": buffName,
                                    "durationInTurn": 4,
                                    "duration": 3,
                                    "AVApplied": 0,
                                    "maxStacks": 1,
                                    "currentStacks": 1,
                                    "decay": false,
                                    "expireType": "EndTurn",
                                    "actionTags": ["Basic"],
                                }
                            }
        
                            const buffSheet = sourceTurn.lcGeniusGreetingsBASICSHEET;
                            updateBuff(battleData,sourceTurn,buffSheet);
        
                            const memoTurnRef = sourceTurn.memospriteEventRef;
                            const memoTurn = sourceTurn[memoTurnRef];
        
                            if (memoTurn?.isActive) {updateBuff(battleData,memoTurn,buffSheet);}
                        },
                        "target": "self",
                        "isPersonal": true,
                        "listenerName": "Geniuses' Greetings ult end listener",
                    },
                ]
            },
        ],
        "buffNames": {
            "buff1": "Geniuses' Greetings (LC)",
        },
    },
    "Sweat Now, Cry Less": {
        logic(thisTurn,battleData) {},
        "skillFunctions": {},
        "listeners": [
            {
                "trigger": "SummonOnFieldAdjustment",
                condition(battleData,generalInfo) {
                    let ownersSlots = this.ownersSlots;
                    const sourceTurn = generalInfo.assignedTo;
                    const summonEvent = generalInfo.summonEvent;
                    
                    let ownerRank = ownersSlots[sourceTurn.name];//setAmount
                    if (!ownerRank || !summonEvent.isMemosprite) {return;}//if the summon is assigned to someone who doesn't own the set, then it doesn't matter
                    //or if what was assigned, wasn't a memo

                    const summonWas = generalInfo.summonWas;
                    
                    if (summonWas === "Remove") {
                        let buffSheet = sourceTurn.lcSweatNowCryLessDMGSHEET;
                        removeBuff(battleData,sourceTurn,buffSheet);
                        removeBuff(battleData,summonEvent,buffSheet);
                    }
                    else if (summonWas === "Apply") {
                        if (!sourceTurn.lcSweatNowCryLessDMGSHEET) {
                            let lcNameRef = "Sweat Now, Cry Less";
                            let lcPathing = lightcones[lcNameRef].params;
                            let rankParams = lcPathing[ownerRank-1];
                            // let ownerName = sourceTurn.properName;
    
                            sourceTurn.lcSweatNowCryLessDMGSHEET = {
                                "stats": [DamageAll],
                                [DamageAll]: rankParams[1],
                                "source": lcNameRef,
                                "sourceOwner": sourceTurn.properName,
                                "buffName": turnLogicLightcones[lcNameRef].buffNames.deathFlower,
                                "durationInTurn": 1,
                                "duration": 1,
                                "AVApplied": 0,
                                "maxStacks": 1,
                                "currentStacks": 1,
                                "decay": false,
                                "expireType": null,
                            }
                        }
                        let buffSheet = sourceTurn.lcSweatNowCryLessDMGSHEET;
                        updateBuff(battleData,sourceTurn,buffSheet);
                        updateBuff(battleData,summonEvent,buffSheet);
                    }
                },
                "target": "self",
                "listenerName": "Sweat Now, Cry Less - summon adjusted from field listener",
                "owners": []
            },
        ],
        "buffNames": {
            "deathFlower": "Sweat Now, Cry Less [LC]",
        },
    },
    "The Flower Remembers": {//partial change
        logic(thisTurn,battleData) {},
        "skillFunctions": {},
        "listeners": [
            {
                "trigger": "PassiveCalls",
                condition(battleData,generalInfo) {
                    // let ownerRef = this.owners;
                    let ownersSlots = this.ownersSlots;
                    // let lcNameRef = "Poised to Bloom";

                    // const updatePresage = this.updatePresage ??= turnLogicLightcones[lcNameRef].skillFunctions.updatePresage;
                    const namedTurns = battleData.nameBasedTurns;
                    for (let ownerSlot in ownersSlots) {
                        const currentOwner = namedTurns[ownerSlot];

                        const memoTurnRef = currentOwner.memospriteEventRef;
                        const memoTurn = currentOwner[memoTurnRef];

                        if (!memoTurn) {continue;}

                        if (!currentOwner.lcTheFlowerRemembersCRITSHEET) {
                            let lcNameRef = "The Flower Remembers";
                            let lcPathing = lightcones[lcNameRef].params;
                            let ownerRank = ownersSlots[currentOwner.name];
                            let rankParams = lcPathing[ownerRank-1];
        
                            let buffName2 = turnLogicLightcones[lcNameRef].buffNames.buff2;
        
                            currentOwner.lcTheFlowerRemembersCRITSHEET = {
                                "stats": [CritDamageBase],
                                [CritDamageBase]: rankParams[1],
                                "source": lcNameRef,
                                "sourceOwner": currentOwner.properName,
                                "buffName": buffName2,
                                "durationInTurn": null,
                                "duration": 1,
                                "AVApplied": 0,
                                "maxStacks": 1,
                                "currentStacks": 1,
                                "decay": false,
                                "expireType": null,
                            }
                            
                        }
                        const buffSheet = currentOwner.lcTheFlowerRemembersCRITSHEET;
                        updateBuff(battleData,memoTurn,buffSheet);
                    }
                },
                "target": "self",
                "listenerName": "The Flower Remembers - battlestart memo crit dmg buff",
                "owners": [],
                "ownersSlots": {}
            },
        ],
        "buffNames": {
            "buff2": "The Flower Remembers [LC]",
        },
    },
    "The Story's Next Page": {
        logic(thisTurn,battleData) {},
        "skillFunctions": {},
        "listeners": [
            {
                "trigger": "AttackDMGEnd",
                condition(battleData,generalInfo) {
                    let ownersSlots = this.ownersSlots;
                    let sourceTurn = generalInfo.sourceTurn;
                    if (!sourceTurn.isMemosprite) {return;}

                    const sourceOwner = sourceTurn.eventOwner;
                    const sourceOwnerTurn = battleData.nameBasedTurns[sourceOwner];
                    let ownerRank = ownersSlots[sourceOwnerTurn.name];
                    if (!ownerRank) {return;}

                    if (!sourceOwnerTurn.lcStorysNextPageHEALINGSHEET) {
                        let lcNameRef = "The Story's Next Page";
                        let lcPathing = lightcones[lcNameRef].params;
                        let rankParams = lcPathing[ownerRank-1];
                        let buffName = turnLogicLightcones[lcNameRef].buffNames.buff1;

                        sourceOwnerTurn.lcStorysNextPageHEALINGSHEET = {
                            "stats": [HealingOutgoing],
                            [HealingOutgoing]: rankParams[1],
                            "source": lcNameRef,
                            "sourceOwner": sourceOwnerTurn.properName,
                            "buffName": buffName,
                            "durationInTurn": 2,
                            "duration": 1,
                            "AVApplied": 0,
                            "maxStacks": 1,
                            "currentStacks": 1,
                            "decay": false,
                            "expireType": "EndTurn",
                        }
                    }

                    const buffSheet = sourceOwnerTurn.lcStorysNextPageHEALINGSHEET;
                    updateBuff(battleData,sourceOwnerTurn,buffSheet);
                    updateBuff(battleData,sourceTurn,buffSheet);
                },
                "target": "self",
                "listenerName": "The Story's Next Page atk end listener",
                "owners": [],
                "ownersSlots": {},
            },
        ],
        "buffNames": {
            "buff1": "The Story's Next Page (LC)",
        },
    },
    "Victory In a Blink": {
        logic(thisTurn,battleData) {},
        "skillFunctions": {},
        "listeners": [
            {
                "trigger": "AbilityStart",
                condition(battleData,generalInfo) {
                    const poolKey = generalInfo.poolKey;
                    if (!alliedPoolKeys.has(poolKey)) {return;}//preempt nonally targeting instances
                    // let ownersSlots = this.ownersSlots;
                    // let sourceTurn = generalInfo.sourceTurn;

                    // let ownerSlot = sourceTurn.name;
                    // const ownerRank = ownersSlots[ownerSlot];
                    // if (!ownerRank) {return;}//abort non-owners
                    let ownersSlots = this.ownersSlots;
                    let sourceTurn = generalInfo.sourceTurn;
                    if (!sourceTurn.isMemosprite) {return;}

                    const sourceOwner = sourceTurn.eventOwner;
                    const sourceOwnerTurn = battleData.nameBasedTurns[sourceOwner];
                    let ownerRank = ownersSlots[sourceOwnerTurn.name];
                    if (!ownerRank) {return;}

                    if (!sourceOwnerTurn.lcVictoryInABlinkDMGSHEET) {
                        let lcNameRef = "Victory In a Blink";
                        let lcPathing = lightcones[lcNameRef].params;
                        let rankParams = lcPathing[ownerRank-1];
                        let buffName = turnLogicLightcones[lcNameRef].buffNames.buff1;

                        sourceOwnerTurn.lcVictoryInABlinkDMGSHEET = {
                            "stats": [DamageAll],
                            [DamageAll]: rankParams[1],
                            "source": lcNameRef,
                            "sourceOwner": sourceOwnerTurn.properName,
                            "buffName": buffName,
                            "durationInTurn": 4,
                            "duration": 3,
                            "AVApplied": 0,
                            "maxStacks": 1,
                            "currentStacks": 1,
                            "decay": false,
                            "expireType": "EndTurn",
                        }
                    }

                    const buffSheet = sourceOwnerTurn.lcVictoryInABlinkDMGSHEET;
                    const allyPositions = battleData.allyPositions;
                    updateBuffBatchTargets(battleData,allyPositions,buffSheet);
                },
                "target": "self",
                "listenerName": "Victory In a Blink target ally listener",
                "owners": [],
                "ownersSlots": {},
            },
        ],
        "buffNames": {
            "buff1": "Victory In a Blink (LC)",
        },
    },
        // 3star
    "Shadowburn": {
        logic(thisTurn,battleData) {},
        "skillFunctions": {},
        "listeners": [
            {
                "trigger": "SummonOnFieldAdjustment",
                condition(battleData,generalInfo) {
                    let ownersSlots = this.ownersSlots;
                    const sourceTurn = generalInfo.assignedTo;

                    if (sourceTurn.lcShadowburnFIRSTSUMMONDONE) {return;}

                    const summonEvent = generalInfo.summonEvent;
                    
                    let ownerRank = ownersSlots[sourceTurn.name];//setAmount
                    if (!ownerRank || !summonEvent.isMemosprite) {return;}//if the summon is assigned to someone who doesn't own the set, then it doesn't matter
                    //or if what was assigned, wasn't a memo

                    const summonWas = generalInfo.summonWas;
                    
                    if (summonWas === "Apply") {

                        let lcNameRef = "Shadowburn";
                        let lcPathing = lightcones[lcNameRef].params;
                        let rankParams = lcPathing[ownerRank-1];
                        updateEnergy(battleData,rankParams[1],sourceTurn,false,"Shadowburn (LC)")
                        updateSkillPoints(battleData,1,sourceTurn,false,"Shadowburn (LC)");

                        sourceTurn.lcShadowburnFIRSTSUMMONDONE = true;
                        battleData.lcShadowburnFIRSTSUMMONDONECOUNTER ??= 0;

                        battleData.lcShadowburnFIRSTSUMMONDONECOUNTER++;

                        if (battleData.lcShadowburnFIRSTSUMMONDONECOUNTER === this.owners.length) {
                            removeListener(battleData,this,sourceTurn);
                        }
                    }
                },
                "target": "self",
                "listenerName": "Shadowburn - summon adjusted from field listener",
                "owners": []
            },
        ],
        "buffNames": {},
    },
    "Reminiscence": {
        logic(thisTurn,battleData) {},
        "skillFunctions": {},
        "listeners": [
            {
                "trigger": "SummonOnFieldAdjustment",
                condition(battleData,generalInfo) {
                    let ownersSlots = this.ownersSlots;
                    const sourceTurn = generalInfo.assignedTo;
                    const summonEvent = generalInfo.summonEvent;
                    
                    let ownerRank = ownersSlots[sourceTurn.name];//setAmount
                    if (!ownerRank || !summonEvent.isMemosprite) {return;}//if the summon is assigned to someone who doesn't own the set, then it doesn't matter
                    //or if what was assigned, wasn't a memo

                    const summonWas = generalInfo.summonWas;
                    
                    if (summonWas === "Remove") {
                        const buffSheet = sourceTurn.lcReminiscenceDMGSHEET;
                        removeBuff(battleData,sourceTurn,buffSheet);
                        removeBuff(battleData,summonEvent,buffSheet);
                    }
                },
                "target": "self",
                "listenerName": "Reminiscence - summon adjusted from field listener",
                "owners": []
            },
            {
                "trigger": "PreActionPhase",
                condition(battleData,generalInfo) {
                    let ownersSlots = this.ownersSlots;
                    const sourceTurn = generalInfo.sourceTurn;
                    if (!sourceTurn.isMemosprite) {return;}

                    const ownerTurn = battleData.nameBasedTurns[sourceTurn.eventOwner];
                    let ownerRank = ownersSlots[ownerTurn.name];//setAmount
                    if (!ownerRank) {return;}//if the summon is assigned to someone who doesn't own the set, then it doesn't matter

                    if (!ownerTurn.lcReminiscenceDMGSHEET) {
                        let lcNameRef = "Reminiscence";
                        let lcPathing = lightcones[lcNameRef].params;
                        let rankParams = lcPathing[ownerRank-1];
                        let buffName = turnLogicLightcones[lcNameRef].buffNames.buff1;

                        ownerTurn.lcReminiscenceDMGSHEET = {
                            "stats": [DamageAll],
                            [DamageAll]: rankParams[0],
                            "source": lcNameRef,
                            "sourceOwner": ownerTurn.properName,
                            "buffName": buffName,
                            "durationInTurn": 1,
                            "duration": 1,
                            "AVApplied": 0,
                            "maxStacks": 4,
                            "currentStacks": 1,
                            "decay": false,
                            "expireType": null,
                        }
                    }

                    const buffSheet = ownerTurn.lcReminiscenceDMGSHEET;
                    updateBuff(battleData,ownerTurn,buffSheet);
                    updateBuff(battleData,sourceTurn,buffSheet);
                },
                "target": "self",
                "listenerName": "Reminiscence turn start listener",
                "owners": [],
                "ownersSlots": {},
            },
        ],
        "buffNames": {
            "buff1": "Reminiscence (LC)"
        },
    },

    //PRESERVATIONN
    //5star
    "Inherently Unjust Destiny": {//REDONE
        logic(thisTurn,battleData) {},
        "skillFunctions": {},
        "listeners": [
            {
                "trigger": "PassiveCalls",
                condition(battleData,generalInfo) {
                    let ownerRef = this.owners;

                    const namedTurns = battleData.nameBasedTurns;
                    const subListeners = this.subListeners;
                    const ownersSlots = this.ownersSlots;

                    for (let owner of ownerRef) {
                        let charSlot = owner.slot;
                        let currentTurn = namedTurns[charSlot];

                        addListenerWithPriority(battleData,subListeners[0],subListeners[0].trigger,currentTurn,ownersSlots);
                        addListenerWithPriority(battleData,subListeners[1],subListeners[1].trigger,currentTurn,ownersSlots);
                    }
                },
                "target": "self",
                "listenerName": "Inherently Unjust Destiny listener setup",
                "owners": [],
                "subListeners": [
                    {
                        "trigger": "TargetShield",
                        condition(battleData,generalInfo) {
                            // let ownerRef = this.owners;
                            let sourceTurn = generalInfo.sourceTurn;
        
                            //who we target with the shield specifically, doesn't matter, only that a shield target proc happened to begin with
        
                            if (!sourceTurn.inherentlyUnjustCRITDMGSHEET) {
                                let ownersSlots = this.ownersSlots;
                                let ownerRank = ownersSlots[sourceTurn.name];
                                let lcNameRef = "Inherently Unjust Destiny";
                                let lcPathing = lightcones[lcNameRef].params;
                                let rankParams = lcPathing[ownerRank-1];
        
                                sourceTurn.inherentlyUnjustCRITDMGSHEET = {
                                    "stats": [CritDamageBase],
                                    [CritDamageBase]: rankParams[1],
                                    "source": lcNameRef,
                                    "sourceOwner": sourceTurn.properName,
                                    "buffName": turnLogicLightcones[lcNameRef].buffNames.unjust,
                                    "durationInTurn": 3,
                                    "duration": 2,
                                    "AVApplied": 0,
                                    "maxStacks": 1,
                                    "currentStacks": 1,
                                    "decay": false,
                                    "expireType": "EndTurn",
                                }
                            }
                            let buffSheet = sourceTurn.inherentlyUnjustCRITDMGSHEET;
                            updateBuff(battleData,sourceTurn,buffSheet);
                        },
                        "target": "self",
                        "isPersonal": true,
                        "listenerName": "Inherently Unjust Destiny - ATK% Stack - Hrunting Stack",
                    },
                    {
                        "trigger": "HitEnemyStart",
                        condition(battleData,generalInfo) {
                            // const turnMerge = {targetTurn,sourceTurn,slot,targetsGotHit,ATKObject};
                            let isFUA = false;
                            const actionTags = generalInfo.ATKObject.actionTags;
                            for (let tag of actionTags) {
                                if (tag === "FUA") {
                                    isFUA = true;
                                    break;
                                }
                            }
                            if (!isFUA) {return;}
        
                            const targetTurn = generalInfo.targetTurn;
                            
                            const targetHits = generalInfo.targetsGotHit[targetTurn.name];
                            if (targetHits > 1) {return}//we only care about first hits for this, no point in evaluating it every fuckin time
                            //have confirmed unjust applies before the dmg takes place, assuming it actually applies
        
                            const sourceTurn = generalInfo.sourceTurn;
                            if (!sourceTurn.inherentlyUnjustDEBUFFSHEET) {
                                let ownersSlots = this.ownersSlots;
                                let ownerRank = ownersSlots[sourceTurn.name];
                                let lcNameRef = "Inherently Unjust Destiny";
                                let lcPathing = lightcones[lcNameRef].params;
                                let rankParams = lcPathing[ownerRank-1];
                                
        
                                sourceTurn.inherentlyUnjustDEBUFFSHEET = {
                                    "stats": [VulnAll],
                                    [VulnAll]: rankParams[4],
                                    "source": lcNameRef,
                                    "sourceOwner": sourceTurn.properName,
                                    "buffName": turnLogicLightcones[lcNameRef].buffNames.unjustVuln,
                                    "durationInTurn": 3,
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
                            updateBuff(battleData,targetTurn,buffSheet);
                        },
                        "target": "self",
                        "isPersonal": true,
                        "listenerName": "Inherently Unjust Destiny - Hit scaling",
                    },
                ]
            },
        ],
        "buffNames": {
            "unjust": "Inherently Unjust Destiny",
            "unjustVuln": "Inherently Unjust Destiny (Vuln)"
        },
    },
    "Though Worlds Apart": {//REDONE
        logic(thisTurn,battleData) {},
        "skillFunctions": {},
        "listeners": [
            {
                "trigger": "PassiveCalls",
                condition(battleData,generalInfo) {
                    let ownerRef = this.owners;

                    const namedTurns = battleData.nameBasedTurns;
                    const subListeners = this.subListeners;
                    const ownersSlots = this.ownersSlots;

                    for (let owner of ownerRef) {
                        let charSlot = owner.slot;
                        let currentTurn = namedTurns[charSlot];

                        addListenerWithPriority(battleData,subListeners[0],subListeners[0].trigger,currentTurn,ownersSlots);
                    }
                },
                "target": "self",
                "listenerName": "Though Worlds Apart listener setup",
                "owners": [],
                "subListeners": [
                    {
                        "trigger": "AbilityStart",
                        condition(battleData,generalInfo) {
                            const action = generalInfo.action;
                            if (action != "Ultimate") {return;}
        
                            // let ownerRef = this.owners;
                            let sourceTurn = generalInfo.sourceTurn;
        
                            if (!sourceTurn.thoughWorldsDMGSHEET) {
                                let ownersSlots = this.ownersSlots;
                                let ownerRank = ownersSlots[sourceTurn.name];

                                let lcNameRef = "Though Worlds Apart";
                                let lcPathing = lightcones[lcNameRef].params;
                                let rankParams = lcPathing[ownerRank-1];
        
                                sourceTurn.thoughWorldsDMGSHEET = {
                                    "stats": [DamageAll],
                                    [DamageAll]: rankParams[1],
                                    "source": lcNameRef,
                                    "sourceOwner": sourceTurn.properName,
                                    "buffName": turnLogicLightcones[lcNameRef].buffNames.redoubt,
                                    "durationInTurn": 4,
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
                                    "durationInTurn": 4,
                                    "duration": 3,
                                    "AVApplied": 0,
                                    "maxStacks": 1,
                                    "currentStacks": 1,
                                    "decay": false,
                                    "expireType": "EndTurn",
                                }
        
                                const actionTags = ["All","Gear","Heal"];
                                const compositeCacheTag = actionTags + sourceTurn.properName;
        
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
                                    slot: "Lightcone",
                                    actionTags,compositeCacheTag
                                }
                            }
                            const buffSheet = sourceTurn.thoughWorldsDMGSHEET;
                            const buffSheet2 = sourceTurn.thoughWorldsDMGSummonSHEET;
                            const healObject = sourceTurn.thoughWorldsHealObject;
        
                            const allyPositions = battleData.allyPositions;
        
                            let lowestHPValue = Infinity;
                            let lowestHPAlly = null;
                            for (let ally of allyPositions) {
                                updateBuff(battleData,ally,buffSheet);
        
                                if (ally.activeMemosprites || ally.activeSummons) {
                                    updateBuff(battleData,ally,buffSheet2);
                                }
        
                                const currentHP = ally.currentHP;
                                if (currentHP < lowestHPValue) {
                                    lowestHPValue = currentHP;
                                    lowestHPAlly = ally;
                                }
                            }
        
                            healAlly(battleData,healObject,sourceTurn,sourceTurn,"Lightcone",1,allyPositions);
        
                            // console.log(allyPositions,lowestHPAlly)
                            healAlly(battleData,healObject,lowestHPAlly,sourceTurn,"Lightcone",1);
                        },
                        "target": "self",
                        "isPersonal": true,
                        "listenerName": "Though Worlds Apart - ult start listener",
                    },
                ]
            },
        ],
        "buffNames": {
            "redoubt": "Redoubt [LC]",
            "redoubtSummon": "Redoubt (Summon) [LC]"
        },
    },
    "Moment of Victory": {//REDONE
        logic(thisTurn,battleData) {},
        "skillFunctions": {},
        "listeners": [
            {
                "trigger": "PassiveCalls",
                condition(battleData,generalInfo) {
                    let ownerRef = this.owners;

                    const namedTurns = battleData.nameBasedTurns;
                    const subListeners = this.subListeners;
                    const ownersSlots = this.ownersSlots;

                    const aggroSheet = this.aggroSheet ??= {
                        "stats": [AggroP],
                        [AggroP]: 2,
                        "source": "Moment of Victory",
                        "sourceOwner": null,
                        "buffName": turnLogicLightcones["Moment of Victory"].buffNames.aggroBuff,
                        "durationInTurn": null,
                        "duration": 1,
                        "AVApplied": 0,
                        "maxStacks": 1,
                        "currentStacks": 1,
                        "decay": false,
                        "expireType": null,
                    }

                    for (let owner of ownerRef) {
                        let charSlot = owner.slot;
                        let currentTurn = namedTurns[charSlot];

                        aggroSheet.sourceOwner = currentTurn.properName;
                        updateBuff(battleData,currentTurn,aggroSheet);

                        addListenerWithPriority(battleData,subListeners[0],subListeners[0].trigger,currentTurn,ownersSlots);
                    }
                },
                "target": "self",
                "listenerName": "Moment of Victory listener setup",
                "owners": [],
                "subListeners": [
                    {
                        "trigger": "WasAttackedEnd",
                        condition(battleData,generalInfo,personalOwner) {
                            // let ownerRef = this.owners;
                            let sourceTurn = personalOwner;
        
                            if (!sourceTurn.lcMomentOfVictoryDEFSHEET) {
                                let ownersSlots = this.ownersSlots;
                                let ownerRank = ownersSlots[sourceTurn.name];

                                let lcNameRef = "Moment of Victory";
                                let lcPathing = lightcones[lcNameRef].params;
                                let rankParams = lcPathing[ownerRank-1];
        
                                sourceTurn.lcMomentOfVictoryDEFSHEET = {
                                    "stats": [DEFP],
                                    [DEFP]: rankParams[2],
                                    "source": lcNameRef,
                                    "sourceOwner": sourceTurn.properName,
                                    "buffName": turnLogicLightcones[lcNameRef].buffNames.defBuff,
                                    "durationInTurn": 1,
                                    "duration": 1,
                                    "AVApplied": 0,
                                    "maxStacks": 1,
                                    "currentStacks": 1,
                                    "decay": false,
                                    "expireType": "EndTurn",
                                }
                            }
                            const buffSheet = sourceTurn.lcMomentOfVictoryDEFSHEET;
                            updateBuff(battleData,sourceTurn,buffSheet);
                        },
                        "target": "self",
                        "isPersonal": true,
                        "listenerName": "Moment of Victory - was attacked listener",
                    },
                ]
            },
        ],
        "buffNames": {
            "defBuff": "Moment of Victory [LC]",
            "aggroBuff": "Moment of Victory (Aggro) [LC]",
        },
    },
    "She Already Shut Her Eyes": {
        logic(thisTurn,battleData) {},
        "skillFunctions": {},
        "listeners": [
            {
                "trigger": "PassiveCalls",
                condition(battleData,generalInfo) {
                    let ownerRef = this.owners;

                    const namedTurns = battleData.nameBasedTurns;
                    const subListeners = this.subListeners;
                    const ownersSlots = this.ownersSlots;

                    for (let owner of ownerRef) {
                        let charSlot = owner.slot;
                        let currentTurn = namedTurns[charSlot];
                        currentTurn.lcSheAlreadyClosedCooldownDone = true;

                        addListenerWithPriority(battleData,subListeners[0],subListeners[0].trigger,currentTurn,ownersSlots);
                    }
                },
                "target": "self",
                "listenerName": "She Already Shut Her Eyes listener setup",
                "owners": [],
                "subListeners": [
                    {
                        "trigger": "AllyLostHP",
                        condition(battleData,generalInfo) {
                            let sourceTurn = generalInfo.sourceTurn;
                            if (!sourceTurn.lcSheAlreadyClosedCooldownDone) {return;}
                            sourceTurn.lcSheAlreadyClosedCooldownDone = false;

                            if (!sourceTurn.lcSheAlreadyClosedDMGSHEET) {
                                let ownersSlots = this.ownersSlots;
                                let ownerRank = ownersSlots[sourceTurn.name];

                                let lcNameRef = "She Already Shut Her Eyes";
                                let lcPathing = lightcones[lcNameRef].params;
                                let rankParams = lcPathing[ownerRank-1];

                                const logicRef = turnLogicLightcones[lcNameRef];
                                const uniqueName = battleActions.getUniqueGearBuffName(battleData,sourceTurn,logicRef,"dmg")
        
                                sourceTurn.lcSheAlreadyClosedDMGSHEET = {
                                    "stats": [DamageAll],
                                    [DamageAll]: rankParams[1],
                                    "source": lcNameRef,
                                    "sourceOwner": sourceTurn.properName,
                                    "buffName": uniqueName,
                                    "durationInTurn": 3,
                                    "duration": 2,
                                    "AVApplied": 0,
                                    "maxStacks": 1,
                                    "currentStacks": 1,
                                    "decay": false,
                                    "expireType": "EndTurn",
                                }
                            }
                            const buffSheet = sourceTurn.lcSheAlreadyClosedDMGSHEET;
                            const allyPositions = battleData.allyPositions;
                            updateBuffBatchTargets(battleData,allyPositions,buffSheet);
                        },
                        "target": "self",
                        "isPersonal": true,
                        "listenerName": "She Already Shut Her Eyes - hp lost listener",
                        "owners": [],
                        "ownersSlots": {},
                    },
                ]
            },
            {
                "trigger": "WaveStart",
                condition(battleData,generalInfo) {
                    let ownersSlots = this.ownersSlots;

                    const namedTurns = battleData.nameBasedTurns;
                    for (let ownerSlot in ownersSlots) {
                        const currentOwner = namedTurns[ownerSlot];

                        if (!currentOwner.lcSheAlreadyClosedHEALSHEET) {
                            let ownersSlots = this.ownersSlots;
                            let ownerRank = ownersSlots[currentOwner.name];

                            let lcNameRef = "She Already Shut Her Eyes";
                            let lcPathing = lightcones[lcNameRef].params;
                            let rankParams = lcPathing[ownerRank-1];
    
                            const actionTags = ["All","Gear","Heal"];
                            const compositeCacheTag = actionTags + currentOwner.properName;
    
                            currentOwner.lcSheAlreadyClosedHEALSHEET = {
                                multipliers: {
                                    primary: null,
                                    blast: null,
                                    all: null,
                                },
                                flatAmounts: {
                                    primary: null,
                                    blast: null,
                                    all: null,
                                },
                                specialMulti: rankParams[2],
                                scalar: null,
                                DMGTags: [],
                                allToughness: false,
                                slot: "Lightcone",
                                actionTags,compositeCacheTag
                            }
                        }
                        const healObject = currentOwner.lcSheAlreadyClosedHEALSHEET;
                        const specialMulti = healObject.specialMulti;
                        const allyPositions = battleData.allyPositions;
                        const flats = healObject.flatAmounts;

                        for (let ally of allyPositions) {
                            const allyMax = ally.maxHP;
                            const hpRatio = ally.currentHP / allyMax;
                            if (hpRatio === 1) {continue;}

                            const healValue = specialMulti * (1 - hpRatio) * allyMax;
                            flats.primary = healValue;

                            healAlly(battleData,healObject,ally,currentOwner,"Lightcone",1);
                        }
                    }
                },
                "target": "self",
                "priority": -80,
                "listenerName": "She Already Shut Her Eyes - wavestart ally healing",
            },
            {
                "trigger": "EndTurn",
                condition(battleData,generalInfo) {
                    let ownersSlots = this.ownersSlots;

                    const namedTurns = battleData.nameBasedTurns;
                    for (let ownerSlot in ownersSlots) {
                        const currentOwner = namedTurns[ownerSlot];

                        currentOwner.lcSheAlreadyClosedCooldownDone = true;
                    }
                },
                "target": "self",
                "listenerName": "She Already Shut Her Eyes - endturn reset flag",
            },
        ],
        "buffNames": {
            "dmg": "She Already Shut Her Eyes [LC]",
        },
    },
        //4star
    "Landau's Choice": {//REDONE
        logic(thisTurn,battleData) {},
        "skillFunctions": {},
        "listeners": [
            {
                "trigger": "PassiveCalls",
                condition(battleData,generalInfo) {
                    let ownerRef = this.owners;//would apply at the start to any and all owners, each, hence owners instead of ownersSlots
                    let ownersSlots = this.ownersSlots;
                    for (let owner of ownerRef) {
                        let charSlot = owner.slot;
                        let currentTurn = battleData.nameBasedTurns[charSlot];
                        // let ownerName = currentTurn.properName;

                        if (!currentTurn.landausChoiceDRAGGROSHEET) {
                            let lcNameRef = "Landau's Choice";
                            let buffName = turnLogicLightcones[lcNameRef].buffNames.drAggro;
                            let lcPathing = lightcones[lcNameRef].params;
                            let ownerRank = ownersSlots[currentTurn.name];
                            let rankParams = lcPathing[ownerRank-1];
    
                            currentTurn.landausChoiceDRAGGROSHEET = {
                                "stats": [AggroP,DamageReductionStandard],
                                [AggroP]: rankParams[0],
                                [DamageReductionStandard]: rankParams[1],
                                "source": lcNameRef,
                                "sourceOwner": currentTurn.properName,
                                "buffName": buffName,
                                "durationInTurn": null,
                                "duration": 1,
                                "AVApplied": 0,
                                "maxStacks": 1,
                                "currentStacks": 1,
                                "decay": false,
                                "expireType": null,
                            }
                        }
                        let buffSheet = currentTurn.landausChoiceDRAGGROSHEET;
                        
                        updateBuff(battleData,currentTurn,buffSheet);
                    }
                },
                "target": "self",
                "listenerName": "Landau's Choice - DR/AggroBuff",
                "owners": [],
                "buffNames": {},
            },
        ],
        "buffNames": {
            "drAggro": "Landau's Choice [LC]"
        },
    },
    "Trend of the Universal Market": {
        logic(thisTurn,battleData) {},
        "skillFunctions": {},
        "listeners": [
            {
                "trigger": "PassiveCalls",
                condition(battleData,generalInfo) {
                    let ownerRef = this.owners;
        
                    const namedTurns = battleData.nameBasedTurns;
                    const subListeners = this.subListeners;
                    const ownersSlots = this.ownersSlots;
        
                    for (let owner of ownerRef) {
                        let charSlot = owner.slot;
                        let currentTurn = namedTurns[charSlot];
        
                        addListenerWithPriority(battleData,subListeners[0],subListeners[0].trigger,currentTurn,ownersSlots);
                    }
                },
                "target": "self",
                "listenerName": "Trend of the Universal Market listener setup",
                "owners": [],
                "subListeners": [
                    {
                        "trigger": "WasAttackedEnd",
                        condition(battleData,generalInfo,personalOwner) {//createStandardElementDOTSHEET 
                            // let ownersSlots = this.ownersSlots;
                            // let sourceTurn = generalInfo.sourceTurn;

                            if (!personalOwner.lcTrendDotBURNSHEET) {
                                let ownersSlots = this.ownersSlots;
                                let ownerRank = ownersSlots[personalOwner.name];

                                let lcNameRef = "Trend of the Universal Market";
                                let lcPathing = lightcones[lcNameRef].params;
                                let rankParams = lcPathing[ownerRank-1];

                                const logicRef = turnLogicLightcones[lcNameRef];
                                const uniqueName = battleActions.getUniqueGearBuffName(battleData,personalOwner,logicRef,"burn")

                                personalOwner.lcTrendDotBURNSHEET ??= superGlobal.createStandardElementDOTSHEET(personalOwner,"Fire",{
                                    "source": lcNameRef,
                                    "buffName": uniqueName,
                                    "durationInTurn": 3,
                                    "duration": 2,
                                    "maxStacks": 1,
                                    "currentStacks": 1,
            
                                    "multiplier": rankParams[2],
                                    "scalar": "DEF",
                                    "slot": "Lightcone",
                                    "baseChance": rankParams[1],
                                });
                            }
                            const dotSheet = personalOwner.lcTrendDotBURNSHEET;

                            const sourceTurn = generalInfo.sourceTurn;
                            generalApplyDOT(battleData,personalOwner,sourceTurn,dotSheet,null,null,false);
                        },
                        "target": "self",
                        "isPersonal": true,
                        "listenerName": "Trend of the Universal Market - attack received listener",
                        "owners": [],
                        "ownersSlots": {},
                    },
                ]
            },
        ],
        "buffNames": {
            "burn": "Trend of the Universal Market [LC]"
        },
    },
    "We Are Wildfire": {
        logic(thisTurn,battleData) {},
        "skillFunctions": {},
        "listeners": [
            {
                "trigger": "WaveStart",
                condition(battleData,generalInfo) {
                    const currentWave = generalInfo.currentWave;
                    if (currentWave != 1) {return;}

                    let ownersSlots = this.ownersSlots;

                    const namedTurns = battleData.nameBasedTurns;
                    for (let ownerSlot in ownersSlots) {
                        const currentOwner = namedTurns[ownerSlot];

                        if (!currentOwner.lcWeAreWildfireHEALSHEET) {
                            let ownersSlots = this.ownersSlots;
                            let ownerRank = ownersSlots[currentOwner.name];

                            let lcNameRef = "We Are Wildfire";
                            let lcPathing = lightcones[lcNameRef].params;
                            let rankParams = lcPathing[ownerRank-1];
    
                            const actionTags = ["All","Gear","Heal"];
                            const compositeCacheTag = actionTags + currentOwner.properName;
    
                            currentOwner.lcWeAreWildfireHEALSHEET = {
                                multipliers: {
                                    primary: null,
                                    blast: null,
                                    all: null,
                                },
                                flatAmounts: {
                                    primary: null,
                                    blast: null,
                                    all: null,
                                },
                                specialMulti: rankParams[0],
                                scalar: null,
                                DMGTags: [],
                                allToughness: false,
                                slot: "Lightcone",
                                actionTags,compositeCacheTag
                            }

                            const logicRef = turnLogicLightcones[lcNameRef];
                            const uniqueName = battleActions.getUniqueGearBuffName(battleData,currentOwner,logicRef,"dr")
    
                            currentOwner.lcWeAreWildfireDRSHEET = {
                                "stats": [DamageReductionStandard],
                                [DamageReductionStandard]: rankParams[1],
                                "source": lcNameRef,
                                "sourceOwner": currentOwner.properName,
                                "buffName": uniqueName,
                                "durationInTurn": 6,
                                "duration": 5,
                                "AVApplied": 0,
                                "maxStacks": 1,
                                "currentStacks": 1,
                                "decay": false,
                                "removeOnDeath": true,
                                "expireType": "EndTurn",
                            }

                        }
                        const healObject = currentOwner.lcWeAreWildfireHEALSHEET;
                        const specialMulti = healObject.specialMulti;
                        const allyPositions = battleData.allyPositions;
                        const flats = healObject.flatAmounts;

                        for (let ally of allyPositions) {
                            const allyMax = ally.maxHP;
                            const hpRatio = ally.currentHP / allyMax;
                            if (hpRatio === 1) {continue;}

                            const healValue = specialMulti * (1 - hpRatio) * allyMax;
                            flats.primary = healValue;

                            healAlly(battleData,healObject,ally,currentOwner,"Lightcone",1);
                        }

                        const buffSheet = currentOwner.lcWeAreWildfireDRSHEET;
                        updateBuffBatchTargets(battleData,allyPositions,buffSheet);
                    }
                },
                "target": "self",
                "priority": -80,
                "listenerName": "We Are Wildfire - wavestart ally healing/DR",
            },
        ],
        "buffNames": {
            "dr": "We Are Wildfire [LC]",
        },
    },
        //3star
    "Defense": {
        logic(thisTurn,battleData) {},
        "skillFunctions": {},
        "listeners": [
            {
                "trigger": "PassiveCalls",
                condition(battleData,generalInfo) {
                    let ownerRef = this.owners;

                    const namedTurns = battleData.nameBasedTurns;
                    const subListeners = this.subListeners;
                    const ownersSlots = this.ownersSlots;

                    for (let owner of ownerRef) {
                        let charSlot = owner.slot;
                        let currentTurn = namedTurns[charSlot];

                        addListenerWithPriority(battleData,subListeners[0],subListeners[0].trigger,currentTurn,ownersSlots);
                    }
                },
                "target": "self",
                "listenerName": "Defense listener setup",
                "owners": [],
                "subListeners": [
                    {
                        "trigger": "AbilityStart",
                        condition(battleData,generalInfo) {
                            const action = generalInfo.action;
                            if (action != "Ultimate") {return;}
        
                            // let ownerRef = this.owners;
                            let sourceTurn = generalInfo.sourceTurn;
        
                            if (!sourceTurn.lcDefenseHEALSHEET) {
                                let ownersSlots = this.ownersSlots;
                                let ownerRank = ownersSlots[sourceTurn.name];

                                let lcNameRef = "Defense";
                                let lcPathing = lightcones[lcNameRef].params;
                                let rankParams = lcPathing[ownerRank-1];
        
                                const actionTags = ["All","Gear","Heal"];
                                const compositeCacheTag = actionTags + sourceTurn.properName;
        
                                sourceTurn.lcDefenseHEALSHEET = {
                                    multipliers: {
                                        primary: rankParams[0],
                                        blast: null,
                                        all: null,
                                    },
                                    flatAmounts: {
                                        primary: null,
                                        blast: null,
                                        all: null,
                                    },
                                    scalar: "HP",
                                    DMGTags: [],
                                    allToughness: false,
                                    slot: "Lightcone",
                                    actionTags,compositeCacheTag
                                }
                            }
                            const healObject = sourceTurn.lcDefenseHEALSHEET;
                            healAlly(battleData,healObject,sourceTurn,sourceTurn,"Lightcone",1);
                        },
                        "target": "self",
                        "isPersonal": true,
                        "listenerName": "Defense - ult start listener",
                    },
                ]
            },
        ],
        "buffNames": {},
    },
    "Pioneering": {
        logic(thisTurn,battleData) {},
        "skillFunctions": {},
        "listeners": [
            {
                "trigger": "PassiveCalls",
                condition(battleData,generalInfo) {
                    let ownerRef = this.owners;

                    const namedTurns = battleData.nameBasedTurns;
                    const subListeners = this.subListeners;
                    const ownersSlots = this.ownersSlots;

                    for (let owner of ownerRef) {
                        let charSlot = owner.slot;
                        let currentTurn = namedTurns[charSlot];

                        addListenerWithPriority(battleData,subListeners[0],subListeners[0].trigger,currentTurn,ownersSlots);
                    }
                },
                "target": "self",
                "listenerName": "Pioneering listener setup",
                "owners": [],
                "subListeners": [
                    {
                        "trigger": "BrokeEnemyWeakness",
                        condition(battleData,generalInfo) {
                            // let ownerRef = this.owners;
                            let sourceTurn = generalInfo.sourceTurn;
        
                            if (!sourceTurn.lcPioneerHEALSHEET) {
                                let ownersSlots = this.ownersSlots;
                                let ownerRank = ownersSlots[sourceTurn.name];

                                let lcNameRef = "Defense";
                                let lcPathing = lightcones[lcNameRef].params;
                                let rankParams = lcPathing[ownerRank-1];
        
                                const actionTags = ["All","Gear","Heal"];
                                const compositeCacheTag = actionTags + sourceTurn.properName;
        
                                sourceTurn.lcPioneerHEALSHEET = {
                                    multipliers: {
                                        primary: rankParams[0],
                                        blast: null,
                                        all: null,
                                    },
                                    flatAmounts: {
                                        primary: null,
                                        blast: null,
                                        all: null,
                                    },
                                    scalar: "HP",
                                    DMGTags: [],
                                    allToughness: false,
                                    slot: "Lightcone",
                                    actionTags,compositeCacheTag
                                }
                            }
                            const healObject = sourceTurn.lcPioneerHEALSHEET;
                            healAlly(battleData,healObject,sourceTurn,sourceTurn,"Lightcone",1);
                        },
                        "target": "self",
                        "isPersonal": true,
                        "listenerName": "Pioneering - break listener",
                    },
                ]
            },
        ],
        "buffNames": {},
    },


    //ERUDITON
    "An Instant Before A Gaze": {//REDONE
        logic(thisTurn,battleData) {},
        "skillFunctions": {},
        "listeners": [
            {
                "trigger": "PreBattleEntersCombat",
                condition(battleData,generalInfo) {
                    let ownerRef = this.owners;//would apply at the start to any and all owners, each, hence owners instead of ownersSlots
                    let lcNameRef = "An Instant Before A Gaze";
                    let lcPathing = lightcones[lcNameRef].params;

                    // let buffName = this.buffNames.fuaDMG;
                    let buffSheet = this.buffSheet ??= {
                        "stats": [DamageAll],
                        [DamageAll]: 0,
                        "source": lcNameRef,
                        "sourceOwner": "",
                        "buffName": turnLogicLightcones[lcNameRef].buffNames.ultDMGBonus,
                        "durationInTurn": null,
                        "duration": 1,
                        "AVApplied": 0,
                        "maxStacks": 1,
                        "currentStacks": 1,
                        "decay": false,
                        "expireType": null,
                        "actionTags": ["Ultimate"],
                    }

                    for (let owner of ownerRef) {
                        let charSlot = owner.slot;
                        let rankParams = lcPathing[owner.rank-1];
                        let currentTurn = battleData.nameBasedTurns[charSlot];

                        const energyMax = Math.min(rankParams[2],currentTurn.maxEnergy);
                        const totalBonus = energyMax * rankParams[1]

                        buffSheet[DamageAll] = totalBonus;
                        buffSheet.sourceOwner = currentTurn.properName;
                        updateBuff(battleData,currentTurn,buffSheet);
                    }
                },
                "target": "self",
                "listenerName": "An Instant Before A Gaze - battlestart energycheck dmg bonus",
                "owners": [],
            },
        ],
        "buffNames": {
            "ultDMGBonus": "A Knight's Pilgrimage [LC]",
        },
    },
    "Today Is Another Peaceful Day": {//REDONE
        logic(thisTurn,battleData) {},
        "skillFunctions": {},
        "listeners": [
            {
                "trigger": "PassiveCalls",
                condition(battleData,generalInfo) {
                    let ownerRef = this.owners;//would apply at the start to any and all owners, each, hence owners instead of ownersSlots
                    let lcNameRef = "Today Is Another Peaceful Day";
                    let lcPathing = lightcones[lcNameRef].params;

                    // let buffName = this.buffNames.fuaDMG;
                    let buffSheet = this.buffSheet ??= {
                        "stats": [DamageAll],
                        [DamageAll]: 0,
                        "source": lcNameRef,
                        "sourceOwner": "",
                        "buffName": turnLogicLightcones[lcNameRef].buffNames.ultDMGBonus,
                        "durationInTurn": null,
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

                        const energyMax = Math.min(rankParams[1],currentTurn.maxEnergy);
                        const totalBonus = energyMax * rankParams[0]

                        buffSheet[DamageAll] = totalBonus;
                        buffSheet.sourceOwner = currentTurn.properName;
                        updateBuff(battleData,currentTurn,buffSheet);
                    }
                },
                "target": "self",
                "listenerName": "Today Is Another Peaceful Day - battlestart energycheck dmg bonus",
                "owners": [],
            },
        ],
        "buffNames": {
            "ultDMGBonus": "A Storm Is Coming [LC]",
        },
    },
    "The Great Cosmic Enterprise": {//REDONE
        logic(thisTurn,battleData) {},
        "skillFunctions": {},
        "listeners": [
            {
                "trigger": "PassiveCalls",
                condition(battleData,generalInfo) {
                    let ownerRef = this.owners;

                    const namedTurns = battleData.nameBasedTurns;
                    const subListeners = this.subListeners;
                    const ownersSlots = this.ownersSlots

                    for (let owner of ownerRef) {
                        let charSlot = owner.slot;
                        let currentTurn = namedTurns[charSlot];

                        addListenerWithPriority(battleData,subListeners[0],subListeners[0].trigger,currentTurn,ownersSlots);
                    }
                },
                "target": "self",
                "listenerName": "The Great Cosmic Enterprise listener setup",
                "owners": [],
                "subListeners": [
                    {
                        "trigger": "AllyDMGStart",
                        condition(battleData,generalInfo) {
                            const sourceTurn = generalInfo.sourceTurn;
                            const checkWeakArray = this.checkWeakArray ??= [WeaknessFire,WeaknessIce,WeaknessImaginary,WeaknessLightning,WeaknessPhysical,WeaknessQuantum,WeaknessWind];
        
                            const targetTurn = generalInfo.targetTurn;
                            const targetStats = targetTurn.statTable;
        
                            let weaknessCount = 0;
                            for (let weakName of checkWeakArray) {
                                weaknessCount += targetStats[weakName] ? 1 : 0;
                            }
        
                            if (!sourceTurn.greatCosmicDMGSHEET) {
                                let ownersSlots = this.ownersSlots;
                                const ownerRank = ownersSlots[sourceTurn.name];
                                let lcNameRef = "The Great Cosmic Enterprise";
                                let lcPathing = lightcones[lcNameRef].params;
                                let rankParams = lcPathing[ownerRank-1];
                                
                                let buffName = turnLogicLightcones[lcNameRef].buffNames.cosmicDMG;
                                sourceTurn.greatCosmicDMGSHEET = {
                                    "stats": [DamageAll],
                                    [DamageAll]: rankParams[1],
                                    "source": lcNameRef,
                                    "sourceOwner": sourceTurn.properName,
                                    "buffName": buffName,
                                    "durationInTurn": null,
                                    "duration": 1,
                                    "AVApplied": 0,
                                    "maxStacks": 7,
                                    "currentStacks": 1,
                                    "decay": false,
                                    "expireType": null,
                                    "actionTags": ["All"],
                                }
                            }
        
                            const buffSheet = sourceTurn.greatCosmicDMGSHEET;
                            const buffCheck = sourceTurn.buffsObject[buffSheet.buffName];
        
                            if (buffCheck) {
                                const currentStacks = buffCheck.currentStacks;
                                if (currentStacks === weaknessCount) {return;}
                                else if (currentStacks < weaknessCount) {
                                    const stackDiff = weaknessCount - currentStacks;
                                    buffSheet.currentStacks = stackDiff;
                                    updateBuff(battleData,sourceTurn,buffSheet);
                                }
                                else {//if stacks are higher than they should be
                                    if (weaknessCount) {//if we have stacks then update
                                        removeBuff(battleData,sourceTurn,buffSheet,true,null,true);
                                        buffSheet.currentStacks = weaknessCount;
                                        updateBuff(battleData,sourceTurn,buffSheet,false,null)
                                    }
                                    else {//otherwise remove
                                        removeBuff(battleData,sourceTurn,buffSheet);
                                    }
                                }
                            }
                            else if (weaknessCount) {
                                buffSheet.currentStacks = weaknessCount;
                                updateBuff(battleData,sourceTurn,buffSheet,false,null);
                            }
                        },
                        "target": "self",
                        "isPersonal": true,
                        "listenerName": "The Great Cosmic Enterprise weakness dmg listener",
                    },
                ]
            },
        ],
        "buffNames": {
            "cosmicDMG": "The Great Cosmic Enterprise",
        },
    },
    "Life Should Be Cast to Flames": {//REDONE
        logic(thisTurn,battleData) {},
        "skillFunctions": {},
        "listeners": [
            {
                "trigger": "PassiveCalls",
                condition(battleData,generalInfo) {
                    let ownerRef = this.owners;

                    const namedTurns = battleData.nameBasedTurns;
                    const subListeners = this.subListeners;
                    const ownersSlots = this.ownersSlots

                    for (let owner of ownerRef) {
                        let charSlot = owner.slot;
                        let currentTurn = namedTurns[charSlot];

                        addListenerWithPriority(battleData,subListeners[0],subListeners[0].trigger,currentTurn,ownersSlots);
                        addListenerWithPriority(battleData,subListeners[1],subListeners[1].trigger,currentTurn,ownersSlots);
                    }
                },
                "target": "self",
                "listenerName": "Life Should Be Cast to Flames listener setup",
                "owners": [],
                "subListeners": [
                    {
                        "trigger": "PreActionPhase",
                        condition(battleData,generalInfo) {
                            const sourceTurn = generalInfo.sourceTurn;
        
                            //NOTE: the energy regen is uniform, not reliant upon superimposition
                            updateEnergy(battleData,10,sourceTurn,false,"Life Should Be Cast to Flames (LC)");
                        },
                        "target": "self",
                        "isPersonal": true,
                        "listenerName": "Life Should Be Cast to Flames - energy on turnstart",
                    },
                    {
                        "trigger": "AllyDMGStart",
                        condition(battleData,generalInfo) {
                            const sourceTurn = generalInfo.sourceTurn;
                            const targetTurn = generalInfo.targetTurn;
                            // const targetStats = targetTurn.statTable;
                            const targetBuffs = targetTurn.buffsObject;
                            let foundImplantedByOwner = false;
                            for (let buffObject in targetBuffs) {
                                const currentBuff = targetBuffs[buffObject];
                                if (currentBuff && currentBuff.isImplant && currentBuff.sourceOwner === sourceTurn.properName) {
                                    foundImplantedByOwner = true;
                                    break;
                                }
                            }
        
                            if (!sourceTurn.lifeShouldBeCastFlamesDMGSHEET) {
                                let ownersSlots = this.ownersSlots;
                                const ownerRank = ownersSlots[sourceTurn.name];
                                let lcNameRef = "Life Should Be Cast to Flames";
                                let lcPathing = lightcones[lcNameRef].params;
                                let rankParams = lcPathing[ownerRank-1];
                                
                                const lcBuffNames = turnLogicLightcones[lcNameRef].buffNames;
                                let buffName = lcBuffNames.dmgBonus;
                                let buffName2 = lcBuffNames.defShred;
                                sourceTurn.lifeShouldBeCastFlamesDMGSHEET = {
                                    "stats": [DamageAll],
                                    [DamageAll]: rankParams[2],
                                    "source": lcNameRef,
                                    "sourceOwner": sourceTurn.properName,
                                    "buffName": buffName,
                                    "durationInTurn": null,
                                    "duration": 1,
                                    "AVApplied": 0,
                                    "maxStacks": 1,
                                    "currentStacks": 1,
                                    "decay": false,
                                    "expireType": null,
                                    "actionTags": ["All"],
                                }
        
                                sourceTurn.lifeShouldBeCastFlamesDEFSHEET = {
                                    "stats": [DEFP],
                                    [DEFP]: -rankParams[1],
                                    "flags": [DEF_DOWN],
                                    "source": lcNameRef,
                                    "sourceOwner": sourceTurn.properName,
                                    "buffName": buffName2,
                                    "durationInTurn": 3,
                                    "duration": 2,
                                    "AVApplied": 0,
                                    "maxStacks": 1,
                                    "currentStacks": 1,
                                    "decay": false,
                                    "isDebuff": true,
                                    "expireType": "EndTurn"
                                }
                            }
        
                            const buffSheet = sourceTurn.lifeShouldBeCastFlamesDMGSHEET;
                            const buffCheck = targetBuffs[buffSheet.buffName];
                            if (foundImplantedByOwner) {
                                if (!buffCheck) {
                                    updateBuff(battleData,sourceTurn,buffSheet);
                                }
                            }
                            else if (buffCheck) {
                                removeBuff(battleData,sourceTurn,buffSheet);
                            }
        
                            const buffJustApplied = buffCheck && buffCheck.AVApplied === battleData.sumAV;
                            if (!buffJustApplied) {
                                const buffSheet2 = sourceTurn.lifeShouldBeCastFlamesDEFSHEET;
                                updateBuff(battleData,targetTurn,buffSheet2);
                            }
                        },
                        "target": "self",
                        "isPersonal": true,
                        "listenerName": "Life Should Be Cast to Flames, implant check and def reduction",
                    },
                ]
            },
        ],
        "buffNames": {
            "dmgBonus": "Life Should Be Cast to Flames (DMG)",
            "defShred": "Life Should Be Cast to Flames (-DEF)",
        },
    },
    "Before Dawn": {
        logic(thisTurn,battleData) {},
        "skillFunctions": {},
        "listeners": [
            {
                "trigger": "PassiveCalls",
                condition(battleData,generalInfo) {
                    let ownerRef = this.owners;

                    const namedTurns = battleData.nameBasedTurns;
                    const subListeners = this.subListeners;
                    const ownersSlots = this.ownersSlots;

                    for (let owner of ownerRef) {
                        let charSlot = owner.slot;
                        let currentTurn = namedTurns[charSlot];

                        addListenerWithPriority(battleData,subListeners[0],subListeners[0].trigger,currentTurn,ownersSlots);
                        addListenerWithPriority(battleData,subListeners[1],subListeners[1].trigger,currentTurn,ownersSlots);
                        addListenerWithPriority(battleData,subListeners[2],subListeners[2].trigger,currentTurn,ownersSlots);
                    }
                },
                "target": "self",
                "listenerName": "Before Dawn - passive application",
                "owners": [],
                "subListeners": [
                    {
                        "trigger": "AllyDMGStart",
                        condition(battleData,generalInfo) {
                            let sourceTurn = generalInfo.sourceTurn;

                            let isValid = false;
                            const actionTags = generalInfo.ATKObject.actionTags ?? [];
                            for (let tag of actionTags) {
                                if (tag === "Ultimate" || tag === "Skill") {
                                    isValid = true;
                                    break;
                                }
                            }
                            // if (!isValid) {return;}
    
                            if (!sourceTurn.lcBeforeDawnDMGSHEET) {
                                let lcNameRef = "Before Dawn";
                                let lcPathing = lightcones[lcNameRef].params;

                                let ownersSlots = this.ownersSlots;
                                let ownerRank = ownersSlots[sourceTurn.name];
                                let rankParams = lcPathing[ownerRank-1];

                                sourceTurn.lcBeforeDawnDMGSHEET ??= {
                                    "stats": [DamageAll],
                                    [DamageAll]: rankParams[1],
                                    "source": lcNameRef,
                                    "sourceOwner": sourceTurn.properName,
                                    "buffName": turnLogicLightcones[lcNameRef].buffNames.buff1,
                                    "durationInTurn": null,
                                    "duration": 1,
                                    "AVApplied": 0,
                                    "maxStacks": 1,
                                    "currentStacks": 1,
                                    "decay": false,
                                    "expireType": null,
                                    "actionTags": ["All"],
                                }
                            }
                            let buffSheet = sourceTurn.lcBeforeDawnDMGSHEET;
                            const buffName = buffSheet.buffName;
                            const buffCheck = sourceTurn.buffsObject[buffName];
        
                            if (isValid) {
                                if (buffCheck) {return;}

                                buffSheet.sourceOwner = sourceTurn.properName;
                                updateBuff(battleData,sourceTurn,buffSheet);
                            }
                            else if (buffCheck) {
                                removeBuff(battleData,sourceTurn,buffSheet);
                            }
                        },
                        "target": "self",
                        "isPersonal": true,
                        "listenerName": "Before Dawn DMG check",
                    },
                    {
                        "trigger": "AttackStart",
                        condition(battleData,generalInfo) {
                            let isFUA = false;
                            const actionTags = generalInfo.ATKObject.actionTags;
                            for (let tag of actionTags) {
                                if (tag === "FUA") {
                                    isFUA = true;
                                    break;
                                }
                            }
                            if (!isFUA) {return;}

                            const sourceTurn = generalInfo.sourceTurn;
                            if (!sourceTurn.lcBeforeDawnSOMNUSSHEET) {
                                const ownersSlots = this.ownersSlots;
                                const ownerRank = ownersSlots[sourceTurn.name];
                                const lcNameRef = "Before Dawn";
                                const lcPathing = lightcones[lcNameRef].params;
                                const rankParams = lcPathing[ownerRank-1];
    
                                sourceTurn.lcBeforeDawnSOMNUSSHEET = {
                                    "stats": [DamageAll],
                                    [DamageAll]: rankParams[2],
                                    "source": lcNameRef,
                                    "sourceOwner": sourceTurn.properName,
                                    "buffName": turnLogicLightcones[lcNameRef].buffNames.buff2,
                                    "durationInTurn": null,
                                    "duration": 1,
                                    "AVApplied": 0,
                                    "maxStacks": 1,
                                    "currentStacks": 1,
                                    "decay": false,
                                    "expireType": null,
                                    "actionTags": ["FUA"],
                                }
                            }
                            
                            const buffSheet = sourceTurn.lcBeforeDawnSOMNUSSHEET;
                            updateBuff(battleData,sourceTurn,buffSheet);
                        },
                        "target": "self",
                        "isPersonal": true,
                        "listenerName": "Before Dawn - FUA listener",
                    },
                    {
                        "trigger": "AttackDMGEnd",
                        condition(battleData,generalInfo) {
                            const sourceTurn = generalInfo.sourceTurn;
                            
                            const buffName = this.buffName ??= turnLogicLightcones["Before Dawn"].buffNames.buff2;
                            const buffCheck = sourceTurn.buffsObject[buffName];

                            if (buffCheck) {
                                removeBuff(battleData,sourceTurn,buffCheck);
                            }
                        },
                        "target": "self",
                        "isPersonal": true,
                        "listenerName": "Before Dawn - FUA Ended",
                    },
                ],
            },
        ],
        "buffNames": {
            "buff1": "Before Dawn (LC)",
            "buff2": "Somnus Corpus (LC)",
        },
    },

    //ELATION
    //5star
    "When She Decided to See": {//REDONE
        logic(thisTurn,battleData) {},
        "skillFunctions": {
            updateFortune(battleData,currentTurn,ownerRank) {
                let ownerName = currentTurn.name;

                if (!currentTurn.updateFortuneCRITSHEET) {
                    let lcNameRef = "When She Decided to See";
                    let lcPathing = lightcones[lcNameRef].params;
                    let rankParams = lcPathing[ownerRank-1];

                    const logicRef = turnLogicLightcones[lcNameRef];
                    const buffNames = logicRef.buffNames;
                    let buffName3 = buffNames.greatFortune;
                    let buffName2 = buffNames.greatFortuneSelf;
                    const uniqueName = `${buffName3} (${currentTurn.properName})`;
                    buffNames[currentTurn.properName] = uniqueName;
                    currentTurn.updateFortuneCRITSHEETOwner = {
                        "stats": [EnergyRegenRate],
                        [EnergyRegenRate]: rankParams[4],
                        "source": lcNameRef,
                        "sourceOwner": currentTurn.properName,
                        "buffName": buffName2,
                        "durationInTurn": 4,
                        "duration": 3,
                        "AVApplied": 0,
                        "maxStacks": 1,
                        "currentStacks": 1,
                        "decay": false,
                        "expireType": "EndTurn",
                        "expireFunction": logicRef.skillFunctions.expireFunction,
                        "expireParam": {sourceTurn:currentTurn.name,uniqueName,countdownName: buffName2}//owner, in this case
                    }

                    currentTurn.updateFortuneCRITSHEET = {
                        "stats": [CritRateBase,CritDamageBase],
                        [CritRateBase]: rankParams[1],
                        [CritDamageBase]: rankParams[2],
                        "source": lcNameRef,
                        "sourceOwner": currentTurn.properName,
                        "buffName": uniqueName,
                        "durationInTurn": null,
                        "duration": 1,
                        "AVApplied": 0,
                        "maxStacks": 1,
                        "currentStacks": 1,
                        "decay": false,
                        "expireType": null,
                    }
                    
                }

                let buffSheet2 = currentTurn.updateFortuneCRITSHEETOwner;
                const buffCheck = currentTurn.buffsObject[buffSheet2.buffName];
                updateBuff(battleData,currentTurn,buffSheet2);

                let buffSheet3 = currentTurn.updateFortuneCRITSHEET;

                if (buffCheck) {return;}//if the owner already had the buff, these guys would have it too bc perma, no need to reapply after refreshing owner duration
                const allyArray = battleData.allAlliesArray;
                updateBuffBatchTargets(battleData,allyArray,buffSheet3);
            },
            expireFunction(battleData,expireParam) {
                const ownerName = expireParam.sourceTurn;//not actually a turn object, rather this is a slot
                const ownerTurn = battleData.nameBasedTurns[ownerName];
                const uniqueBuffName = expireParam.uniqueName;
                const allyArray = battleData.allAlliesArray;

                removeBuffFromBatch(battleData,allyArray,ownerTurn.buffsObject[uniqueBuffName]);
            },
        },
        "listeners": [
            {
                "trigger": "PassiveCalls",
                condition(battleData,generalInfo) {
                    let ownerRef = this.owners;

                    const namedTurns = battleData.nameBasedTurns;
                    const subListeners = this.subListeners;
                    const ownersSlots = this.ownersSlots

                    for (let owner of ownerRef) {
                        let charSlot = owner.slot;
                        let currentTurn = namedTurns[charSlot];

                        addListenerWithPriority(battleData,subListeners[0],subListeners[0].trigger,currentTurn,ownersSlots);
                    }
                },
                "target": "self",
                "listenerName": "When She Decided to See listener setup",
                "owners": [],
                "subListeners": [
                    {
                        "trigger": "AbilityStart",
                        condition(battleData,generalInfo) {
                            const poolKey = generalInfo.poolKey;
                            if (!alliedPoolKeys.has(poolKey) || generalInfo.action != "Ultimate") {return;}//preempt nonally targeting instances
        
                            let ownersSlots = this.ownersSlots;
                            let sourceTurn = generalInfo.sourceTurn;
                            let ownerRank = ownersSlots[sourceTurn.name];
        
                            const updateFortune = this.shortRef ??= turnLogicLightcones["When She Decided to See"].skillFunctions.updateFortune;
                            updateFortune(battleData,sourceTurn,ownerRank);
                        },
                        "target": "self",
                        "isPersonal": true,
                        "listenerName": "When She Decided to See - ult use Great Fortune application",
                    }
                ]
            },
            {
                "trigger": "WaveStart",
                condition(battleData,generalInfo) {
                    let ownerRef = this.owners;//would apply at the start to any and all owners, each, hence owners instead of ownersSlots

                    const namedTurns = battleData.nameBasedTurns;
                    for (let owner of ownerRef) {
                        let charSlot = owner.slot;
                        // let ownerRank = ownersSlots[charSlot];
                        let currentTurn = namedTurns[charSlot];

                        updateEnergy(battleData,15,currentTurn,true,"When She Decided to See");
                    }
                },
                "target": "self",
                "priority": -80,
                "listenerName": "When She Decided to See - Wavestart energy gain",
                "owners": []
            },
            {
                "trigger": "WaveStart",
                condition(battleData,generalInfo) {
                    const currentWave = generalInfo.currentWave;
                    if (currentWave != 1) {return;}
                    let ownerRef = this.owners;//would apply at the start to any and all owners, each, hence owners instead of ownersSlots
                    let ownersSlots = this.ownersSlots;

                    const namedTurns = battleData.nameBasedTurns;
                    const updateFortune = this.shortRef ??= turnLogicLightcones["When She Decided to See"].skillFunctions.updateFortune;
                    for (let owner of ownerRef) {
                        let charSlot = owner.slot;
                        let ownerRank = ownersSlots[charSlot];
                        let currentTurn = namedTurns[charSlot];

                        updateFortune(battleData,currentTurn,ownerRank);
                    }
                },
                "target": "self",
                "priority": -80,
                "listenerName": "When She Decided to See - battlestart Great Fortune application",
                "owners": []
            },
        ],
        "buffNames": {
            "greatFortune": "Great Fortune (LC)",
            "greatFortuneSelf": "Great Fortune (LC Countdown)",
        },
        "buffNamesPerCharacter": {
            "greatFortune": "Great Fortune (LC)",
        },
    },
    "Dazzled by a Flowery World": {//REDONE
        logic(thisTurn,battleData) {},
        "skillFunctions": {},
        "listeners": [
            {
                "trigger": "PassiveCalls",
                condition(battleData,generalInfo) {
                    let ownerRef = this.owners;

                    const namedTurns = battleData.nameBasedTurns;
                    const subListeners = this.subListeners;
                    const ownersSlots = this.ownersSlots

                    const characters = battleData.fullCharacterArray;
                    let elationCount = 0;
                    for (let char of characters) {
                        if (char.path === "Elation") {elationCount += 1;}
                    }

                    //can only happen once even with multiple lightcones on multiple chars
                    elationCount = Math.min(3,elationCount);
                    battleData.battleTable.SPMax += elationCount;
                    if (battleData.isLoggyLogger) {logToBattle(battleData,{logType: "GenericAction", source:this.listenerName, bodyText: "Skill Point Max +2 [Dazzled by a Flowery World]"});}

                    for (let owner of ownerRef) {
                        let charSlot = owner.slot;
                        let currentTurn = namedTurns[charSlot];

                        currentTurn.dazzleFlowerTracker = 0;
                        addListenerWithPriority(battleData,subListeners[0],subListeners[0].trigger,currentTurn,ownersSlots);
                        addListenerWithPriority(battleData,subListeners[1],subListeners[1].trigger,currentTurn,ownersSlots);
                        addListenerWithPriority(battleData,subListeners[2],subListeners[2].trigger,currentTurn,ownersSlots);
                        //NOTE: strictly speaking the actual events are listening to turn starts from anyone to reset the tracker, but that's since SP
                        //usage is only tracked from an owner, it is functionally equivalent to resetting the owner on start/end
                    }
                },
                "target": "self",
                "listenerName": "Dazzled by a Flowery World listener setup",
                "owners": [],
                "subListeners": [
                    {
                        "trigger": "SPChange",
                        condition(battleData,generalInfo) {
                            let sourceTurn = generalInfo.sourceTurn;
        
                            const SPChange = generalInfo.SPChange;
                            if (SPChange > 0) {return;}
                            sourceTurn.dazzleFlowerTracker -= SPChange;
        
                            if (!sourceTurn.floweryWorldSHREDSHEET) {
                                let ownersSlots = this.ownersSlots;
                                let ownerRank = ownersSlots[sourceTurn.name];
                                let lcNameRef = "Dazzled by a Flowery World";
                                let lcPathing = lightcones[lcNameRef].params;
                                let rankParams = lcPathing[ownerRank-1];
            
                                const logicRef = turnLogicLightcones[lcNameRef];
                                const buffNames = logicRef.buffNames;
            
                                sourceTurn.floweryWorldSHREDSHEET = {
                                    "stats": [DEFShredAll],
                                    [DEFShredAll]: rankParams[5],
                                    "source": lcNameRef,
                                    "sourceOwner": sourceTurn.properName,
                                    "buffName": buffNames.genShred,
                                    "durationInTurn": null,
                                    "duration": 1,
                                    "AVApplied": 0,
                                    "maxStacks": 4,
                                    "currentStacks": 1,
                                    "decay": false,
                                    "expireType": null,
                                    "actionTags": ["Elation"],
                                }
                                sourceTurn.floweryWorldTEAMSHEET = {
                                    "stats": [ElationDMGAll],
                                    [ElationDMGAll]: rankParams[3],
                                    "source": lcNameRef,
                                    "sourceOwner": sourceTurn.properName,
                                    "buffName": buffNames.genTeam,
                                    "durationInTurn": null,
                                    "duration": 1,
                                    "AVApplied": 0,
                                    "maxStacks": 1,
                                    "currentStacks": 1,
                                    "decay": false,
                                    "expireType": null,
                                }
                            }
        
                            const buffSheet = sourceTurn.floweryWorldSHREDSHEET;
                            buffSheet.currentStacks = -SPChange;
        
                            const buffCheck = sourceTurn.buffsObject[buffSheet.buffName];
                            if (!buffCheck || buffCheck && buffCheck.currentStacks < buffCheck.maxStacks) {
                                updateBuff(battleData,sourceTurn,buffSheet);
                            }
                            
                            
                            if (sourceTurn.dazzleFlowerTracker >= 4) {
                                const buffSheet2 = sourceTurn.floweryWorldTEAMSHEET;
        
                                if (!sourceTurn.buffsObject[buffSheet2.buffName]) {
                                    const allyArray = battleData.allAlliesArray;
                                    updateBuffBatchTargets(battleData,allyArray,buffSheet2);
                                    removeListener(battleData,this,sourceTurn)
                                }
                            }
                        },
                        "target": "self",
                        "isPersonal": true,
                        "listenerName": "Dazzled by a Flowery World - SP used tracker",
                        "owners": []
                    },
                    {
                        "trigger": "PreActionPhase",
                        condition(battleData,generalInfo) {
                            let sourceTurn = generalInfo.sourceTurn;
        
                            sourceTurn.dazzleFlowerTracker = 0;
                        },
                        "target": "self",
                        "isPersonal": true,
                        "listenerName": "Dazzled by a Flowery World SP used reset 1",
                    },
                    {
                        "trigger": "EndTurn",
                        condition(battleData,generalInfo) {
                            let sourceTurn = generalInfo.sourceTurn;
        
                            sourceTurn.dazzleFlowerTracker = 0;
                        },
                        "target": "self",
                        "isPersonal": true,
                        "listenerName": "Dazzled by a Flowery World SP used reset 2",
                    },
                ]
            },
        ],
        "buffNames": {
            "genShred": "Dazzled by a Flowery World (Shred)",
            "genTeam": "Stream Promo (LC)",
        },
    },
    "Welcome to the Cosmic City": {//REDONE
        logic(thisTurn,battleData) {},
        "skillFunctions": {},
        "listeners": [
            {
                "trigger": "PassiveCalls",
                condition(battleData,generalInfo) {
                    let ownerRef = this.owners;

                    const namedTurns = battleData.nameBasedTurns;
                    const subListeners = this.subListeners;
                    const ownersSlots = this.ownersSlots

                    for (let owner of ownerRef) {
                        let charSlot = owner.slot;
                        let ownerRank = ownersSlots[charSlot];
                        let currentTurn = namedTurns[charSlot];

                        addListenerWithPriority(battleData,subListeners[0],subListeners[0].trigger,currentTurn,ownersSlots);
                        addListenerWithPriority(battleData,subListeners[1],subListeners[1].trigger,currentTurn,ownersSlots);

                        if (!currentTurn.lcCosmicCitySHREDSHEET) {
                            let lcNameRef = "Welcome to the Cosmic City";
                            let lcPathing = lightcones[lcNameRef].params;
                            let rankParams = lcPathing[ownerRank-1];
        
                            const logicRef = turnLogicLightcones[lcNameRef];
                            const buffNames = logicRef.buffNames;
                            currentTurn.lcCosmicCitySHREDSHEET = {
                                "stats": [DEFShredAll],
                                [DEFShredAll]: rankParams[1],
                                "source": lcNameRef,
                                "sourceOwner": currentTurn.properName,
                                "buffName": buffNames.shred,
                                "durationInTurn": null,
                                "duration": 1,
                                "AVApplied": 0,
                                "maxStacks": 1,
                                "currentStacks": 1,
                                "decay": false,
                                "expireType": null,
                                "actionTags": ["Elation"],
                            }
                        }
        
                        let buffSheet2 = currentTurn.lcCosmicCitySHREDSHEET;
                        updateBuff(battleData,currentTurn,buffSheet2);

                        currentTurn.lcCosmicCityBasicCounter = 3;
                    }
                },
                "target": "self",
                "listenerName": "Elation Brimming With Blessings listener setup",
                "owners": [],
                "subListeners": [
                    {
                        "trigger": "AbilityStart",
                        condition(battleData,generalInfo) {
                            const poolKey = generalInfo.poolKey;
                            if (!alliedPoolKeys.has(poolKey)) {return;}//preempt nonally targeting instances
        
                            const action = generalInfo.action;
                            if (action != "Ultimate") {return;}

                            let sourceTurn = generalInfo.sourceTurn;
        
                            const targets = generalInfo.target;
                            const subTarget = generalInfo.subTarget;
                            if (targets.length + (subTarget?.length ?? 0) > 1 || targets[0].properName != sourceTurn.properName) {return;}
        
                            if (sourceTurn.lcCosmicCityBasicCounter != 3) {return;}
        
                            if (!sourceTurn.lcCosmicCityPLGainValue) {
                                let ownersSlots = this.ownersSlots;
                                let ownerSlot = sourceTurn.name;
                                const ownerRank = ownersSlots[ownerSlot];
                                let lcNameRef = "Welcome to the Cosmic City";
                                let lcPathing = lightcones[lcNameRef].params;
                                let rankParams = lcPathing[ownerRank-1];
                                sourceTurn.lcCosmicCityPLGainValue = rankParams[2];
                            }
                            const values = sourceTurn.lcCosmicCityPLGainValue;
                            battleActions.updatePunchlineValue(battleData,values,sourceTurn,"LC Cosmic - Ult used on Self");
                            sourceTurn.lcCosmicCityBasicCounter = 0;
                        },
                        "target": "self",
                        "isPersonal": true,
                        "listenerName": "Welcome to the Cosmic City - self ult listener",
                    },
                    {
                        "trigger": "AbilityEnd",
                        condition(battleData,generalInfo) {
                            const action = generalInfo.action;
                            if (action != "BasicATK") {return;}

                            let sourceTurn = generalInfo.sourceTurn;
        
                            if (sourceTurn.lcCosmicCityBasicCounter < 3) {
                                sourceTurn.lcCosmicCityBasicCounter += 1;
                            }
                        },
                        "target": "self",
                        "isPersonal": true,
                        "listenerName": "Welcome to the Cosmic City - basic atk counter",
                    },
                ]
            },
        ],
        "buffNames": {
            "shred": "Welcome to the Cosmic City (Shred)",
        },
    },
    "Elation Brimming With Blessings": {//REDONE
        logic(thisTurn,battleData) {},
        "skillFunctions": {},
        "listeners": [
            {
                "trigger": "PassiveCalls",
                condition(battleData,generalInfo) {
                    let ownerRef = this.owners;

                    const namedTurns = battleData.nameBasedTurns;
                    const subListeners = this.subListeners;
                    const ownersSlots = this.ownersSlots

                    for (let owner of ownerRef) {
                        let charSlot = owner.slot;
                        let currentTurn = namedTurns[charSlot];

                        addListenerWithPriority(battleData,subListeners[0],subListeners[0].trigger,currentTurn,ownersSlots);
                    }
                },
                "target": "self",
                "listenerName": "Elation Brimming With Blessings listener setup",
                "owners": [],
                "subListeners": [
                    {
                        "trigger": "AbilityEnd",
                        condition(battleData,generalInfo) {
                            const poolKey = generalInfo.poolKey;
                            if (!alliedPoolKeys.has(poolKey)) {return;}//preempt nonally targeting instances
        
                            const action = generalInfo.action;
                            if (action != "Skill" && action != "Ultimate") {return;}
        
                            const targets = generalInfo.target;
                            if (targets.length > 1) {return}
                            
                            let sourceTurn = generalInfo.sourceTurn;
        
                            let targetTurn = targets[0];
                            if (!sourceTurn.lcElationBrimmingELATIONSHEET) {
                                let ownersSlots = this.ownersSlots;
                                let ownerSlot = sourceTurn.name;
                                const ownerRank = ownersSlots[ownerSlot];

                                let lcNameRef = "Elation Brimming With Blessings";
                                let lcPathing = lightcones[lcNameRef].params;
                                let rankParams = lcPathing[ownerRank-1];
                                
                                sourceTurn.lcElationBrimmingELATIONSHEET = {
                                    "stats": [ElationDMGAll],
                                    [ElationDMGAll]: rankParams[1],
                                    "source": lcNameRef,
                                    "sourceOwner": sourceTurn.properName,
                                    "buffName": turnLogicLightcones[lcNameRef].buffNames.brimming,
                                    "durationInTurn": 3,
                                    "duration": 2,
                                    "AVApplied": 0,
                                    "maxStacks": 3,
                                    "currentStacks": 1,
                                    "decay": false,
                                    "expireType": "EndTurn",
                                    "removeOnDeath": true,
                                }
                            }
                            const buffSheet = sourceTurn.lcElationBrimmingELATIONSHEET;
        
                            updateBuff(battleData,targetTurn,buffSheet);
                        },
                        "target": "self",
                        "isPersonal": true,
                        "listenerName": "Elation Brimming With Blessings - buff application",
                    },
                ]
            },
        ],
        "buffNames": {
            "brimming": "Elation Brimming With Blessings [LC]"
            // "buff2": "Aether Code"
            // "hruntingStack": "Hrunting Stack"
        },
    },
    "Until the Flowers Bloom Again": {//REDONE
        logic(thisTurn,battleData) {},
        "skillFunctions": {},
        "listeners": [
            {
                "trigger": "PassiveCalls",
                condition(battleData,generalInfo) {
                    let ownerRef = this.owners;

                    const namedTurns = battleData.nameBasedTurns;
                    const subListeners = this.subListeners;
                    const ownersSlots = this.ownersSlots;

                    const baseLine = 120;
                    const maxStacks = 360;
                    const increment = 10;

                    for (let owner of ownerRef) {
                        let charSlot = owner.slot;
                        let ownerRank = ownersSlots[charSlot];
                        let currentTurn = namedTurns[charSlot];

                        addListenerWithPriority(battleData,subListeners[0],subListeners[0].trigger,currentTurn,ownersSlots);

                        if (!currentTurn.lcUntilFlowersBloomERRSHEET) {
                            let lcNameRef = "Until the Flowers Bloom Again";
                            let lcPathing = lightcones[lcNameRef].params;
                            let rankParams = lcPathing[ownerRank-1];
        
                            const logicRef = turnLogicLightcones[lcNameRef];
                            const buffNames = logicRef.buffNames;

                            const preValue = rankParams[3];
                            const stackValue = rankParams[5];

                            const currentMax = currentTurn.maxEnergy;
                            const toSpare = Math.min(maxStacks, Math.max(0, currentMax - baseLine));

                            const validStacks = Math.floor(toSpare/increment);
                            if (!validStacks) {continue;}

                            currentTurn.lcUntilFlowersBloomERRSHEET = {
                                "stats": [EnergyRegenRate],
                                [EnergyRegenRate]: preValue + validStacks * stackValue,
                                "source": lcNameRef,
                                "sourceOwner": currentTurn.properName,
                                "buffName": buffNames.ERR,
                                "durationInTurn": null,
                                "duration": 1,
                                "AVApplied": 0,
                                "maxStacks": 1,
                                "currentStacks": 1,
                                "decay": false,
                                "expireType": null,
                            }
                        }
                        let buffSheet2 = currentTurn.lcUntilFlowersBloomERRSHEET;
                        updateBuff(battleData,currentTurn,buffSheet2);
                    }
                },
                "target": "self",
                "listenerName": "Until the Flowers Bloom Again listener setup",
                "owners": [],
                "subListeners": [
                    {
                        "trigger": "AbilityStart",
                        condition(battleData,generalInfo) {
                            const action = generalInfo.action;
                            if (action != "ElationSkill") {return;}
        
                            let sourceTurn = generalInfo.sourceTurn;
        
                            if (!sourceTurn.lcUntilFlowersBloomVULNSHEET) {
                                let ownersSlots = this.ownersSlots;
                                let ownerRank = ownersSlots[sourceTurn.name];

                                let lcNameRef = "Until the Flowers Bloom Again";
                                let lcPathing = lightcones[lcNameRef].params;
                                let rankParams = lcPathing[ownerRank-1];
            
                                const logicRef = turnLogicLightcones[lcNameRef];
                                const buffNames = logicRef.buffNames;
                                let buffName3 = buffNames.elationVuln;
            
                                sourceTurn.lcUntilFlowersBloomVULNSHEET = {
                                    "stats": [VulnAll],
                                    [VulnAll]: rankParams[1],
                                    "source": lcNameRef,
                                    "sourceOwner": sourceTurn.properName,
                                    "buffName": buffName3,
                                    "durationInTurn": 3,
                                    "duration": 2,
                                    "AVApplied": 0,
                                    "maxStacks": 1,
                                    "currentStacks": 1,
                                    "decay": false,
                                    "expireType": "EndTurn",
                                }
                                
                            }
            
                            let buffSheet3 = sourceTurn.lcUntilFlowersBloomVULNSHEET;
                            
                            const enemyPositions = battleData.enemyPositions;
                            updateBuffBatchTargets(battleData,enemyPositions,buffSheet3);
                        },
                        "target": "self",
                        "isPersonal": true,
                        "listenerName": "Until the Flowers Bloom Again - elation skill vuln debuff",
                    }
                ]
            },
        ],
        "buffNames": {
            "ERR": "Until the Flowers Bloom Again (ERR)",
            "elationVuln": "Until the Flowers Bloom Again (Vuln)",
        },
    },
    //4start
    "Mushy Shroomy's Adventures": {//REDONE
        logic(thisTurn,battleData) {},
        "skillFunctions": {},
        "listeners": [
            {
                "trigger": "PassiveCalls",
                condition(battleData,generalInfo) {
                    let ownerRef = this.owners;

                    const namedTurns = battleData.nameBasedTurns;
                    const subListeners = this.subListeners;
                    const ownersSlots = this.ownersSlots

                    for (let owner of ownerRef) {
                        let charSlot = owner.slot;
                        let currentTurn = namedTurns[charSlot];

                        addListenerWithPriority(battleData,subListeners[0],subListeners[0].trigger,currentTurn,ownersSlots);
                    }
                },
                "target": "self",
                "listenerName": "Mushy Shroomy's Adventures listener setup",
                "owners": [],
                "subListeners": [
                    {
                        "trigger": "AbilityStart",
                        condition(battleData,generalInfo) {
                            const action = generalInfo.action;
                            if (action != "ElationSkill") {return;}
        
                            let sourceTurn = generalInfo.sourceTurn;
        
                            if (!sourceTurn.mushyShroomyAdventureVULNSHEET) {
                                let ownersSlots = this.ownersSlots;
                                let ownerRank = ownersSlots[sourceTurn.name];

                                let lcNameRef = "Mushy Shroomy's Adventures";
                                let lcPathing = lightcones[lcNameRef].params;
                                let rankParams = lcPathing[ownerRank-1];
            
                                const logicRef = turnLogicLightcones[lcNameRef];
                                const buffNames = logicRef.buffNames;
                                let buffName3 = buffNames.elationVuln;
                                const uniqueName = `${buffName3} (${sourceTurn.properName})`;
                                buffNames[sourceTurn.properName] = uniqueName;
            
                                sourceTurn.mushyShroomyAdventureVULNSHEET = {
                                    "stats": [VulnAll],
                                    [VulnAll]: rankParams[1],
                                    "source": lcNameRef,
                                    "sourceOwner": sourceTurn.properName,
                                    "buffName": uniqueName,
                                    "durationInTurn": 3,
                                    "duration": 2,
                                    "AVApplied": 0,
                                    "maxStacks": 1,
                                    "currentStacks": 1,
                                    "decay": false,
                                    "expireType": "EndTurn",
                                    "actionTags": ["Elation"]
                                }
                            }
            
                            let buffSheet3 = sourceTurn.mushyShroomyAdventureVULNSHEET;
                            
                            const enemyPositions = battleData.enemyPositions;
                            updateBuffBatchTargets(battleData,enemyPositions,buffSheet3);
                        },
                        "target": "self",
                        "isPersonal": true,
                        "listenerName": "Mushy Shroomy's Adventures - elation skill vuln debuff",
                    }
                ]
            },
        ],
        "buffNames": {
            "elationVuln": "Mushy Shroomy's Adventures (LC)",
        },
        "buffNamesPerCharacter": {
            "greatFortune": "Mushy Shroomy's Adventures (LC)",
        },
    },
    "Today's Good Luck": {//REDONE
        logic(thisTurn,battleData) {},
        "skillFunctions": {},
        "listeners": [
            {
                "trigger": "PassiveCalls",
                condition(battleData,generalInfo) {
                    let ownerRef = this.owners;

                    const namedTurns = battleData.nameBasedTurns;
                    const subListeners = this.subListeners;
                    const ownersSlots = this.ownersSlots

                    for (let owner of ownerRef) {
                        let charSlot = owner.slot;
                        let currentTurn = namedTurns[charSlot];

                        addListenerWithPriority(battleData,subListeners[0],subListeners[0].trigger,currentTurn,ownersSlots);
                    }
                },
                "target": "self",
                "listenerName": "Today's Good Luck listener setup",
                "owners": [],
                "subListeners": [
                    {
                        "trigger": "AbilityStart",
                        condition(battleData,generalInfo) {
                            const action = generalInfo.action;
                            if (action != "ElationSkill") {return;}
                            let sourceTurn = generalInfo.sourceTurn;
        
                            if (!sourceTurn.elationTodaysGoodLuck) {
                                let ownersSlots = this.ownersSlots;
                                let ownerRank = ownersSlots[sourceTurn.name];
                                let lcNameRef = "Today's Good Luck";
                                let lcPathing = lightcones[lcNameRef].params;
                                let rankParams = lcPathing[ownerRank-1];
            
                                const logicRef = turnLogicLightcones[lcNameRef];
                                const buffNames = logicRef.buffNames;
            
                                sourceTurn.elationTodaysGoodLuck = {
                                    "stats": [ElationDMGAll],
                                    [ElationDMGAll]: rankParams[1],
                                    "source": lcNameRef,
                                    "sourceOwner": sourceTurn.properName,
                                    "buffName": buffNames.elationBonus,
                                    "durationInTurn": null,
                                    "duration": 1,
                                    "AVApplied": 0,
                                    "maxStacks": 2,
                                    "currentStacks": 1,
                                    "decay": false,
                                    "expireType": null,
                                }
                            }
            
                            let buffSheet3 = sourceTurn.elationTodaysGoodLuck;
                            updateBuff(battleData,sourceTurn,buffSheet3);
        
                            const buffCheck = sourceTurn.buffsObject[buffSheet3.buffName];
                            if (buffCheck && buffCheck.currentStacks === buffCheck.maxStacks) {
                                removeListener(battleData,this,sourceTurn);
                            }
                        },
                        "target": "self",
                        "isPersonal": true,
                        "listenerName": "Today's Good Luck - elation skill listener",
                    }
                ]
            },
        ],
        "buffNames": {
            "elationBonus": "Today's Good Luck (LC)",
        },
    },
    "Tomorrow, Together": {//REDONE
        logic(thisTurn,battleData) {},
        "skillFunctions": {},
        "listeners": [
            {
                "trigger": "PassiveCalls",
                condition(battleData,generalInfo) {
                    let ownerRef = this.owners;

                    const namedTurns = battleData.nameBasedTurns;
                    const subListeners = this.subListeners;
                    const ownersSlots = this.ownersSlots

                    for (let owner of ownerRef) {
                        let charSlot = owner.slot;
                        let currentTurn = namedTurns[charSlot];

                        addListenerWithPriority(battleData,subListeners[0],subListeners[0].trigger,currentTurn,ownersSlots);
                    }
                },
                "target": "self",
                "listenerName": "Tomorrow, Together listener setup",
                "owners": [],
                "subListeners": [
                    {
                        "trigger": "AbilityEnd",
                        condition(battleData,generalInfo) {
                            const action = generalInfo.action;
                            if (action != "Ultimate") {return;}
                            let sourceTurn = generalInfo.sourceTurn;
        
                            if (!sourceTurn.lcTomorrowTogetherELATIONSHEET) {
                                let ownersSlots = this.ownersSlots;
                                let ownerRank = ownersSlots[sourceTurn.name];
                                let lcNameRef = "Tomorrow, Together";
                                let lcPathing = lightcones[lcNameRef].params;
                                let rankParams = lcPathing[ownerRank-1];
            
                                const logicRef = turnLogicLightcones[lcNameRef];
                                const buffNames = logicRef.buffNames;
            
                                sourceTurn.lcTomorrowTogetherELATIONSHEET = {
                                    "stats": [ElationDMGAll],
                                    [ElationDMGAll]: rankParams[1],
                                    "source": lcNameRef,
                                    "sourceOwner": sourceTurn.properName,
                                    "buffName": buffNames.elationBonus,
                                    "durationInTurn": 2,
                                    "duration": 1,
                                    "AVApplied": 0,
                                    "maxStacks": 2,
                                    "currentStacks": 1,
                                    "decay": false,
                                    "expireType": "EndTurn",
                                }
                            }
            
                            let buffSheet3 = sourceTurn.lcTomorrowTogetherELATIONSHEET;

                            const allyPositions = battleData.allyPositions
                            updateBuffBatchTargets(battleData,allyPositions,buffSheet3);
                        },
                        "target": "self",
                        "isPersonal": true,
                        "listenerName": "Tomorrow, Together - ult end listener",
                    }
                ]
            },
        ],
        "buffNames": {
            "elationBonus": "Tomorrow, Together (LC)",
        },
    },
    //3star
    "Sneering": {//NO CHANGE
        logic(thisTurn,battleData) {},
        "skillFunctions": {},
        "listeners": [
            {
                "trigger": "AhaInstantStart",
                condition(battleData,generalInfo) {
                    // let ownerRef = this.owners;
                    let ownersSlots = this.ownersSlots;
                    // let sourceTurn = generalInfo.sourceTurn;
                    // let ownerRank = ownersSlots[sourceTurn.name];
                    

                    const allyTurns = battleData.nameBasedTurns;
                    for (let ownerSlotName in ownersSlots) {
                        const currentOwner = allyTurns[ownerSlotName];

                        if (!currentOwner.elationSneeringELATIONSHEET) {
                            let lcNameRef = "Sneering";
                            let lcPathing = lightcones[lcNameRef].params;
                            let ownerRank = ownersSlots[currentOwner.name];
                            let rankParams = lcPathing[ownerRank-1];
        
                            const logicRef = turnLogicLightcones[lcNameRef];
                            const buffNames = logicRef.buffNames;
        
                            currentOwner.elationSneeringELATIONSHEET = {
                                "stats": [ElationDMGAll],
                                [ElationDMGAll]: rankParams[0],
                                "source": lcNameRef,
                                "sourceOwner": currentOwner.properName,
                                "buffName": buffNames.elationBonus,
                                "durationInTurn": null,
                                "duration": 2,
                                "AVApplied": 0,
                                "maxStacks": 1,
                                "currentStacks": 1,
                                "decay": false,
                                "expireType": null,
                            }
                        }
                        let buffSheet3 = currentOwner.elationSneeringELATIONSHEET;
                        updateBuff(battleData,currentOwner,buffSheet3);
                    }

                    
                    
                },
                "target": "self",
                "listenerName": "Sneering - aha instant start listener",
                "owners": [],
                "ownersSlots": {}
            },
            {
                "trigger": "AhaInstantEnd",
                condition(battleData,generalInfo) {
                    // let ownerRef = this.owners;
                    let ownersSlots = this.ownersSlots;
                    // let sourceTurn = generalInfo.sourceTurn;
                    // let ownerRank = ownersSlots[sourceTurn.name];
                    

                    const allyTurns = battleData.nameBasedTurns;
                    for (let ownerSlotName in ownersSlots) {
                        const currentOwner = allyTurns[ownerSlotName];

                        let buffSheet3 = currentOwner.elationSneeringELATIONSHEET;
                        removeBuff(battleData,currentOwner,buffSheet3);
                    }

                    
                    
                },
                "target": "self",
                "listenerName": "Sneering - aha instant end listener",
                "owners": [],
                "ownersSlots": {}
            },
        ],
        "buffNames": {
            "elationBonus": "Sneering (LC)",
        },
    },
    "Lingering Tear": {//NO CHANGE
        logic(thisTurn,battleData) {},
        "skillFunctions": {},
        "listeners": [
            {
                "trigger": "PunchlineChanged",
                condition(battleData,generalInfo) {
                    // let ownerRef = this.owners;
                    let ownersSlots = this.ownersSlots;
                    // let sourceTurn = generalInfo.sourceTurn;
                    // let ownerRank = ownersSlots[sourceTurn.name];

                    const punchline = battleData.punchline;
                    const applyBuff = punchline >= 10;


                    if (applyBuff && !battleData.elationLingeringTearACTIVE) {
                        battleData.elationLingeringTearACTIVE = true;
                    }
                    else if (applyBuff && battleData.elationLingeringTearACTIVE) {return;}
                    else if (!applyBuff && !battleData.elationLingeringTearACTIVE) {return;}
                    else if (!applyBuff && battleData.elationLingeringTearACTIVE) {
                        battleData.elationLingeringTearACTIVE = false;
                    }
                    

                    const allyTurns = battleData.nameBasedTurns;
                    for (let ownerSlotName in ownersSlots) {
                        const currentOwner = allyTurns[ownerSlotName];

                        if (!currentOwner.elationLingeringTearCRITDMGSHEET) {
                            let lcNameRef = "Lingering Tear";
                            let lcPathing = lightcones[lcNameRef].params;
                            let ownerRank = ownersSlots[currentOwner.name];
                            let rankParams = lcPathing[ownerRank-1];
        
                            const logicRef = turnLogicLightcones[lcNameRef];
                            const buffNames = logicRef.buffNames;
        
                            currentOwner.elationLingeringTearCRITDMGSHEET = {
                                "stats": [CritDamageBase],
                                [CritDamageBase]: rankParams[1],
                                "source": lcNameRef,
                                "sourceOwner": currentOwner.properName,
                                "buffName": buffNames.critDMG,
                                "durationInTurn": null,
                                "duration": 1,
                                "AVApplied": 0,
                                "maxStacks": 1,
                                "currentStacks": 1,
                                "decay": false,
                                "expireType": null,
                            }
                        }
                        let buffSheet3 = currentOwner.elationLingeringTearCRITDMGSHEET;

                        if (battleData.elationLingeringTearACTIVE) {
                            updateBuff(battleData,currentOwner,buffSheet3);
                        }
                        else {
                            removeBuff(battleData,currentOwner,buffSheet3);
                        } 
                    }
                },
                "target": "self",
                "listenerName": "Lingering Tear - punchline listener",
                "owners": [],
                "ownersSlots": {}
            },
        ],
        "buffNames": {
            "critDMG": "Lingering Tear (LC)",
        },
    },
}


const turnLogicRelics = {
    //BODY SETS
    "Genius of Brilliant Stars": {//REDONE
        "2pc": {},
        "4pc": {
            logic(thisTurn,battleData) {},
            "skillFunctions": {},
            "listeners": [
                {
                    "trigger": "PassiveCalls",
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
                            "durationInTurn": null,
                            "duration": 1,
                            "AVApplied": 0,
                            "maxStacks": 1,
                            "currentStacks": 1,
                            "decay": false,
                            "expireType": null
                        }

                        const namedTurns = battleData.nameBasedTurns;
                        const subListeners = this.subListeners[0];
                        for (let owner of ownerRef) {
                            let charSlot = owner.slot;
                            let currentTurn = namedTurns[charSlot];
                            // let values = relicPathing[0];
                            // buffSheet[DEFShredAll] = values
                            buffSheet.sourceOwner = currentTurn.properName;
                            updateBuff(battleData,currentTurn,buffSheet);

                            addListenerWithPriority(battleData,subListeners,subListeners.trigger,currentTurn);
                        }
                    },
                    "target": "self",
                    "listenerName": "Genius of Brilliant Stars - DEF Shred(Any) 4pc",
                    "owners": [],
                    "subListeners": [
                        {
                            "trigger": "AllyDMGStart",
                            condition(battleData,generalInfo) {
                                let sourceTurn = generalInfo.sourceTurn;
                                let targetTurn = generalInfo.targetTurn;
        
                                if (!this.geniusQUANTUMSHREDSHEET) {
                                    let relicNameRef = "Genius of Brilliant Stars";
                                    let pcRef = "4pc";
                                    let buffName = this.buffName ??= turnLogicRelics[relicNameRef][pcRef].buffNames.pc4ShredQuantum;
                                    let relicPathing = this.relicPathing ??= relicSets[relicNameRef].params[1];//0-2pc 1-4pc
                                    this.geniusQUANTUMSHREDSHEET = {
                                        "stats": [DEFShredAll],
                                        [DEFShredAll]: relicPathing[1],
                                        "source": relicNameRef,
                                        "sourceOwner": null,
                                        "buffName": buffName,
                                        "durationInTurn": null,
                                        "duration": 1,
                                        "AVApplied": 0,
                                        "maxStacks": 1,
                                        "currentStacks": 1,
                                        "decay": false,
                                        "expireType": null
                                    }
                                }
                                let buffSheet = this.geniusQUANTUMSHREDSHEET;
                                const buffName = buffSheet.buffName;
        
                                if (targetTurn.statTable[WeaknessQuantum] <= 0) {//if there is no quantum weakness
                                    if (sourceTurn.buffsObject[buffName]) {removeBuff(battleData,sourceTurn,buffSheet);}//then remove the buff if we have it
                                    // else {return;}
                                }
                                else {//if weakness found, apply buff
                                    if (sourceTurn.buffsObject[buffName]) {return;}//if the owner already has the buff, then skip it so we don't reclutter the log 30k times
                                    
                                    buffSheet.sourceOwner = sourceTurn.properName;
                                    updateBuff(battleData,sourceTurn,buffSheet);
                                }
                            },
                            "target": "self",
                            "isPersonal": true,
                            "listenerName": "Genius of Brilliant Stars - DEF Shred(Quantum Enemy) 4pc",
                        },
                    ]
                },
                
            ],
            "buffNames": {
                "pc4ShredAny": "Genius' DEF Shred(Any)",
                "pc4ShredQuantum": "Genius' DEF Shred(Quantum)",
            },
        }
    },
    "Eagle of Twilight Line": {//REDONE
        "2pc": {},
        "4pc": {
            logic(thisTurn,battleData) {},
            "skillFunctions": {},
            "listeners": [
                {
                    "trigger": "PassiveCalls",
                    condition(battleData,generalInfo) {
                        let ownerRef = this.owners;

                        const namedTurns = battleData.nameBasedTurns;
                        const subListeners = this.subListeners[0];
                        for (let owner of ownerRef) {
                            let charSlot = owner.slot;
                            let currentTurn = namedTurns[charSlot];

                            addListenerWithPriority(battleData,subListeners,subListeners.trigger,currentTurn);
                        }
                    },
                    "target": "self",
                    "listenerName": "Eagle 4pc listener setup",
                    "owners": [],
                    "subListeners": [
                        {
                            "trigger": "AbilityEnd",
                            condition(battleData,generalInfo) {
                                const action = generalInfo.action;
                                if (action != "Ultimate") {return;}

                                // let ownerRef = this.owners;
                                let sourceTurn = generalInfo.sourceTurn;
        
                                let relicNameRef = "Eagle of Twilight Line";
                                actionAdvance(0.25,sourceTurn,battleData,relicNameRef);
                            },
                            "target": "self",
                            "isPersonal": true,
                            "listenerName": "Eagle - Advance/Ult",
                        },
                    ]
                },
            ],
            "buffNames": {},
        }
    },
    "Sacerdos\' Relived Ordeal": {//REDONE
        "2pc": {},
        "4pc": {
            logic(thisTurn,battleData) {},
            "skillFunctions": {},
            "listeners": [
                {
                    "trigger": "PassiveCalls",
                    condition(battleData,generalInfo) {
                        let ownerRef = this.owners;

                        const namedTurns = battleData.nameBasedTurns;
                        const subListeners = this.subListeners[0];
                        for (let owner of ownerRef) {
                            let charSlot = owner.slot;
                            let currentTurn = namedTurns[charSlot];

                            addListenerWithPriority(battleData,subListeners,subListeners.trigger,currentTurn);
                        }
                    },
                    "target": "self",
                    "listenerName": "Sacerdos 4pc listener setup",
                    "owners": [],
                    "subListeners": [
                        {
                            "trigger": "AbilityStart",
                            condition(battleData,generalInfo) {
                                // let ownerRef = this.owners;
                                let sourceTurn = generalInfo.sourceTurn;
                                // if (targetTurn.properName != sourceTurn.properName) {return;}

                                const poolKey = generalInfo.poolKey;
                                if (!alliedPoolKeys.has(poolKey)) {return;}//preempt nonally targeting instances

                                const action = generalInfo.action;
                                const actionInvalid = action != "Ultimate" && action != "Skill";

                                let target = generalInfo.target;
                                const subTarget = generalInfo.subTarget;
                                let isNotSingle = target.length + (subTarget?.length ?? 0) > 1;//TODO: set up subtargeting on sunday later, and when I do so then change the condition here to be in line with the reader
                                if (isNotSingle || actionInvalid) {return;}
                                //we skip team-wide ulty or skill buffs, and then avoid non-ulty and non-skills
                                targetTurn = target[0];
        
                                if (!this.sacerdosCRITDMGSHEET) {
                                    let relicNameRef = "Sacerdos\' Relived Ordeal";
                                    let pcRef = "4pc";
                                    let buffName = this.buffName ??= turnLogicRelics[relicNameRef][pcRef].buffNames.sacerdos;
        
                                    let relicPathing = this.relicPathing ??= relicSets[relicNameRef].params[1];//0-2pc 1-4pc
                                    // greatTableIndex
                                    // greatTableKeys
                                    this.sacerdosCRITDMGSHEET = {
                                        "stats": [CritDamageBase],
                                        [CritDamageBase]: relicPathing[0],
                                        "source": relicNameRef,
                                        "sourceOwner": sourceTurn.properName,
                                        "buffName": buffName,
                                        "durationInTurn": 3,
                                        "duration": 2,
                                        "AVApplied": 0,
                                        "maxStacks": 2,
                                        "currentStacks": 1,
                                        "decay": false,
                                        "expireType": "EndTurn",
                                        "removeOnDeath": true,
                                    }
                                }
        
                                let buffSheet = this.sacerdosCRITDMGSHEET;
                                buffSheet.sourceOwner = sourceTurn.properName;
                                
                                updateBuff(battleData,targetTurn,buffSheet);
                                const targetChildEntities = sourceTurn.properName === "Sunday";
                                if (targetChildEntities) {
                                    const hasMemosprite = targetTurn.activeMemosprites;
                                    const memospriteEventRef = targetTurn.memospriteEventRef;
                                    const memoTurn = hasMemosprite ? targetTurn[memospriteEventRef] : null;
                                    if (memoTurn) {updateBuff(battleData,memoTurn,buffSheet);}
                                }
                                //TODO: turns out it's just sunday hardcoded, the childentity extension doesn't work on literally anyone else, lmao?
                            },
                            "target": "self",
                            "isPersonal": true,
                            "listenerName": "Sacerdos targeted ally listener",
                        },
                    ]
                },
            ],
            "buffNames": {
                "sacerdos": "Sacerdos Crit Stack",
            },
        }
    },
    "Wavestrider Captain": {//REDONE
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
                            "durationInTurn": null,
                            "duration": 1,
                            "AVApplied": 0,
                            "maxStacks": 2,
                            "currentStacks": 1,
                            "decay": false,
                            "expireType": null
                        }
                    }

                    let buffSheet = targetTurn.wavestriderHELPSHEET;
                    
                    updateBuff(battleData,targetTurn,buffSheet);
                }
            },
            "listeners": [
                {
                    "trigger": "PassiveCalls",
                    condition(battleData,generalInfo) {
                        let ownerRef = this.owners;

                        const namedTurns = battleData.nameBasedTurns;
                        const subListeners = this.subListeners[0];
                        for (let owner of ownerRef) {
                            let charSlot = owner.slot;
                            let currentTurn = namedTurns[charSlot];

                            addListenerWithPriority(battleData,subListeners,subListeners.trigger,currentTurn);
                        }
                    },
                    "target": "self",
                    "listenerName": "Wavestrider Captain 4pc listener setup",
                    "owners": [],
                    "subListeners": [
                        {
                            "trigger": "AbilityStart",
                            condition(battleData,generalInfo) {
                                const action = generalInfo.action;
                                if (action != "Ultimate") {return;}

                                let sourceTurn = generalInfo.sourceTurn;
        
                                const buffRef = this.buffRef ??= turnLogicRelics["Wavestrider Captain"]["4pc"].buffNames;
                                let helpCheck = sourceTurn.buffsObject[buffRef.help];
        
                                if (helpCheck && helpCheck.currentStacks === 2) {
                                    removeBuff(battleData,sourceTurn,helpCheck);//clear the help stacks
        
                                    if (!this.wavestriderATKSHEET) {
                                        let relicPathing = this.relicPathing ??= relicSets["Wavestrider Captain"].params[1];//0-2pc 1-4pc
                                        let buffName2 = buffRef.atkBuff;
                                        this.wavestriderATKSHEET = {
                                            "stats": [ATKP],
                                            [ATKP]: relicPathing[1],
                                            "source": "Wavestrider Captain",
                                            "sourceOwner": sourceTurn.properName,
                                            "buffName": buffName2,
                                            "durationInTurn": 2,
                                            "duration": 1,
                                            "AVApplied": 0,
                                            "maxStacks": 1,
                                            "currentStacks": 1,
                                            "decay": false,
                                            "expireType": "EndTurn"
                                        }
                                    }
                                    
                                    let buffSheet = this.wavestriderATKSHEET;
                                    buffSheet.sourceOwner = sourceTurn.properName;
                                    updateBuff(battleData,sourceTurn,buffSheet);
                                }
                            },
                            "target": "self",
                            "isPersonal": true,
                            "listenerName": "Wavestrider Captain ATKbuff listener",
                        },
                    ]
                },
                {
                    "trigger": "AbilityStart",//is global
                    condition(battleData,generalInfo) {
                        const sourceTurn = generalInfo.sourceTurn;
                        if (sourceTurn.isEnemy) {return;}//needs to be ally targeting

                        const poolKey = generalInfo.poolKey;
                        if (!alliedPoolKeys.has(poolKey)) {return;}//preempt nonally targeting instances

                        const targets = generalInfo.target;
                        let ownersSlots = this.ownersSlots;
                        let giveHelp = this.giveHelp ??= turnLogicRelics["Wavestrider Captain"]["4pc"].skillFunctions.giveHelp;

                        for (let targetTurn of targets) {
                            const targetIsOwner = ownersSlots[targetTurn.name];

                            if (targetIsOwner && targetTurn.properName != sourceTurn.properName) {giveHelp(battleData,targetTurn);}
                        }
                        const subTarget = generalInfo.subTarget;
                        if (subTarget) {
                            for (let targetTurn of subTarget) {
                                const targetIsOwner = ownersSlots[targetTurn.name];
    
                                if (targetIsOwner && targetTurn.properName != sourceTurn.properName) {giveHelp(battleData,targetTurn);}
                            }
                        }
                    },
                    "target": "self",
                    "listenerName": "Wavestrider Captain targeted ally listener",
                    "owners": []
                },
            ],
            "buffNames": {
                "help": "Wavestrider Help",
                "atkBuff": "Wavestrider ATK",
            },
        }
    },
    "Scholar Lost in Erudition": {//REDONE
        "2pc": {},
        "4pc": {
            logic(thisTurn,battleData) {},
            "skillFunctions": {},
            "listeners": [
                {
                    "trigger": "PassiveCalls",
                    condition(battleData,generalInfo) {
                        let ownerRef = this.owners;

                        const namedTurns = battleData.nameBasedTurns;
                        const subListeners = this.subListeners[0];
                        const subListeners2 = this.subListeners[1];
                        const subListeners3 = this.subListeners[2];
                        const subListeners4 = this.subListeners[3];

                        for (let owner of ownerRef) {
                            let charSlot = owner.slot;
                            let currentTurn = namedTurns[charSlot];

                            addListenerWithPriority(battleData,subListeners,subListeners.trigger,currentTurn);
                            addListenerWithPriority(battleData,subListeners2,subListeners2.trigger,currentTurn);
                            addListenerWithPriority(battleData,subListeners3,subListeners3.trigger,currentTurn);
                            addListenerWithPriority(battleData,subListeners4,subListeners4.trigger,currentTurn);
                        }
                    },
                    "target": "self",
                    "listenerName": "Scholar 4pc listener setup",
                    "owners": [],
                    "subListeners": [
                        {
                            "trigger": "AbilityEnd",
                            condition(battleData,generalInfo) {
                                const action = generalInfo.action;
                                if (action != "Ultimate") {return;}

                                // let ownerRef = this.owners;
                                let sourceTurn = generalInfo.sourceTurn;
                                sourceTurn.scholarIsReadyForSkillBuff = true;
                            },
                            "target": "self",
                            "isPersonal": true,
                            "listenerName": "Scholar ulty listener",
                        },
                        {
                            "trigger": "AbilityStart",
                            condition(battleData,generalInfo) {
                                const action = generalInfo.action;
                                if (action != "Skill") {return;}

                                let sourceTurn = generalInfo.sourceTurn;
                                if (!sourceTurn.scholarIsReadyForSkillBuff) {return;}
                                sourceTurn.scholarIsReadyForSkillBuff = false;
        
                                if (!this.scholarErudtionSKILLDMGSHEET) {
                                    let relicNameRef = "Scholar Lost in Erudition";
                                    let pcRef = "4pc";
                                    let relicPathing = this.relicPathing ??= relicSets[relicNameRef].params[1];//0-2pc 1-4pc
                                    let buffName = this.buffName ??= turnLogicRelics[relicNameRef][pcRef].buffNames.skillDmg;
                                    // greatTableIndex
                                    // greatTableKeys
                                    this.scholarErudtionSKILLDMGSHEET = {
                                        "stats": [DamageAll],
                                        [DamageAll]: relicPathing[1],
                                        "source": relicNameRef,
                                        "sourceOwner": null,
                                        "buffName": buffName,
                                        "durationInTurn": null,
                                        "duration": 1,
                                        "AVApplied": 0,
                                        "maxStacks": 1,
                                        "currentStacks": 1,
                                        "decay": false,
                                        "expireType": null,
                                        "actionTags": ["All"],
                                    }
                                }
        
                                let buffSheet = this.scholarErudtionSKILLDMGSHEET;
                                const buffCheck = sourceTurn.buffsObject[buffSheet.buffName];
                                if (buffCheck) {return;}
                                
                                buffSheet.sourceOwner = sourceTurn.properName;
                                updateBuff(battleData,sourceTurn,buffSheet);
                            },
                            "target": "self",
                            "isPersonal": true,
                            "listenerName": "Scholar skill listener",
                        },
                        {
                            "trigger": "AbilityEnd",
                            condition(battleData,generalInfo) {
                                const action = generalInfo.action;
                                if (action != "Skill") {return;}

                                // let ownerRef = this.owners;
                                // let relicNameRef = "Scholar Lost in Erudition";
                                // let pcRef = "4pc";
                                let sourceTurn = generalInfo.sourceTurn;
        
                                let buffName = this.buffName ??= turnLogicRelics["Scholar Lost in Erudition"]["4pc"].buffNames.skillDmg;
                                let hasBuff = sourceTurn.buffsObject[buffName];
        
                                if (hasBuff) {removeBuff(battleData,sourceTurn,hasBuff);}
                            },
                            "target": "self",
                            "isPersonal": true,
                            "listenerName": "Scholar skill listener",
                        },
                        {
                            "trigger": "AllyDMGStart",
                            condition(battleData,generalInfo) {
                                let sourceTurn = generalInfo.sourceTurn;

                                let isValid = false;
                                const actionTags = generalInfo.ATKObject.actionTags ?? [];
                                for (let tag of actionTags) {
                                    if (tag === "Ultimate" || tag === "Skill") {
                                        isValid = true;
                                        break;
                                    }
                                }
                                // if (!isValid) {return;}
        
                                if (!this.scholarBase4PCSHEET) {
                                    let relicNameRef = "Scholar Lost in Erudition";
                                    let buffName = turnLogicRelics[relicNameRef]["4pc"].buffNames;
                                    let relicPathing = relicSets[relicNameRef].params[1];//0-2pc 1-4pc
                                    this.scholarBase4PCSHEET = {
                                        "stats": [DamageAll],
                                        [DamageAll]: 0.20,
                                        "source": "Scholar Lost in Erudition",
                                        "sourceOwner": "",
                                        "buffName": turnLogicRelics["Scholar Lost in Erudition"]["4pc"].buffNames.skillUltyDmg,
                                        "durationInTurn": null,
                                        "duration": 1,
                                        "AVApplied": 0,
                                        "maxStacks": 1,
                                        "currentStacks": 1,
                                        "decay": false,
                                        "expireType": null,
                                        "actionTags": ["All"],
                                    }
                                }
                                let buffSheet = this.scholarBase4PCSHEET;
                                const buffName = buffSheet.buffName;
                                const buffCheck = sourceTurn.buffsObject[buffName];
            
                                //NOTE: this would include converted crit rate bonuses
                                if (isValid) {//if the target has enough cr for the buff, then we can apply it
                                    if (buffCheck) {return;}//if the target already has the buff, skip, no need to "renew" perma buffs like this

                                    buffSheet.sourceOwner = sourceTurn.properName;
                                    updateBuff(battleData,sourceTurn,buffSheet);
                                }
                                else if (buffCheck) {//but if the target fails the crit check and HAS the buff, then remove it
                                    removeBuff(battleData,sourceTurn,buffSheet);
                                }
                            },
                            "target": "self",
                            "isPersonal": true,
                            "listenerName": "Scholar Ult/Skill DMG check",
                        },
                    ]
                },
            ],
            "buffNames": {
                "skillDmg": "Scholar Skill DMG",
                "skillUltyDmg": "Scholar Ult/Skill DMG",
            },
        }
    },
    "Watchmaker, Master of Dream Machinations": {//REDONE
        "2pc": {},
        "4pc": {
            logic(thisTurn,battleData) {},
            "skillFunctions": {},
            "listeners": [
                {
                    "trigger": "PassiveCalls",
                    condition(battleData,generalInfo) {
                        let ownerRef = this.owners;

                        const namedTurns = battleData.nameBasedTurns;
                        const subListeners = this.subListeners[0];
                        for (let owner of ownerRef) {
                            let charSlot = owner.slot;
                            let currentTurn = namedTurns[charSlot];

                            addListenerWithPriority(battleData,subListeners,subListeners.trigger,currentTurn);
                        }
                    },
                    "target": "self",
                    "listenerName": "Watchmaker 4pc listener setup",
                    "owners": [],
                    "subListeners": [
                        {
                            "trigger": "AbilityStart",
                            condition(battleData,generalInfo) {
                                const poolKey = generalInfo.poolKey;
                                if (!alliedPoolKeys.has(poolKey)) {return;}//preempt nonally targeting instances
                                // let ownerRef = this.owners;
                                let sourceTurn = generalInfo.sourceTurn;
                                // const targetTurn = generalInfo.targetTurn;
                                // if (sourceTurn.properName != targetTurn.properName) {return}

                                if (generalInfo.action != "Ultimate") {return;}
                                //skip non ultimate, non ally targeting skills
        
                                if (!this.watchmatcherBREAKSHEET) {
                                    let relicNameRef = "Watchmaker, Master of Dream Machinations";
                                    let pcRef = "4pc";
                                    let relicPathing = this.relicPathing ??= relicSets[relicNameRef].params[1];//0-2pc 1-4pc
                                    let buffName = this.buffName ??= turnLogicRelics[relicNameRef][pcRef].buffNames.breakBuff;
                                    this.watchmatcherBREAKSHEET = {
                                        "stats": [DamageBreak],
                                        [DamageBreak]: relicPathing[0],
                                        "source": relicNameRef,
                                        "sourceOwner": null,
                                        "buffName": buffName,
                                        "durationInTurn": 3,
                                        "duration": 2,
                                        "AVApplied": 0,
                                        "maxStacks": 1,
                                        "currentStacks": 1,
                                        "decay": false,
                                        "expireType": "EndTurn"
                                    }
                                }
        
                                let buffSheet = this.watchmatcherBREAKSHEET;
                                buffSheet.sourceOwner = sourceTurn.properName;
                                const allyPositions = battleData.allyPositions;
                                updateBuffBatchTargets(battleData,allyPositions,buffSheet);
                            },
                            "target": "self",
                            "isPersonal": true,
                            "listenerName": "Watchmaker ult targeted ally listener",
                        },
                    ]
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
                    if (targetTurn.relicStreetwiseBoxingFinished) {return;}//abort finished users

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
                            "durationInTurn": null,
                            "duration": 1,
                            "AVApplied": 0,
                            "maxStacks": 5,
                            "currentStacks": 1,
                            "decay": false,
                            "expireType": null,
                        }
                    }
                    let buffSheet = targetTurn.streetwiseBoxingATKSHEET;
                    const buffName = buffSheet.buffName;
                    
                    updateBuff(battleData,targetTurn,buffSheet);

                    const stackCheck = targetTurn.buffsObject[buffName].currentStacks;
                    if (stackCheck === 5) {
                        targetTurn.relicStreetwiseBoxingFinished = true;
                    } 
                }
            },
            "listeners": [
                {
                    "trigger": "PassiveCalls",
                    condition(battleData,generalInfo) {
                        let ownerRef = this.owners;

                        const namedTurns = battleData.nameBasedTurns;
                        const subListeners = this.subListeners;
                        for (let owner of ownerRef) {
                            let charSlot = owner.slot;
                            let currentTurn = namedTurns[charSlot];

                            addListenerWithPriority(battleData,subListeners[0],subListeners[0].trigger,currentTurn);
                            addListenerWithPriority(battleData,subListeners[1],subListeners[1].trigger,currentTurn);
                        }
                    },
                    "target": "self",
                    "listenerName": "Champion of Streetwise Boxing 4pc listener setup",
                    "owners": [],
                    "subListeners": [
                        {
                            "trigger": "AttackDMGEnd",
                            condition(battleData,generalInfo) {
                                // let ownerRef = this.owners;
                                // let ownersSlots = this.ownersSlots;
                                let sourceTurn = generalInfo.sourceTurn;
        
                                const streetwise = this.streetwise ??= turnLogicRelics["Champion of Streetwise Boxing"]["4pc"].skillFunctions.streetwise;
                                streetwise(battleData,sourceTurn);

                                if (sourceTurn.relicStreetwiseBoxingFinished) {
                                    removeListener(battleData,this,sourceTurn);
                                }
                            },
                            "target": "self",
                            "isPersonal": true,
                            "listenerName": "Streetwise attack launched check",
                            "owners": []
                        },
                        {
                            "trigger": "WasAttackedEnd",
                            condition(battleData,generalInfo,personalOwner) {
                                // let ownersSlots = this.ownersSlots;
                                let sourceTurn = personalOwner;
        
                                const streetwise = this.streetwise ??= turnLogicRelics["Champion of Streetwise Boxing"]["4pc"].skillFunctions.streetwise;
                                streetwise(battleData,sourceTurn);
        
                                if (sourceTurn.relicStreetwiseBoxingFinished) {
                                    removeListener(battleData,this,sourceTurn);
                                }
                            },
                            "target": "self",
                            "isPersonal": true,
                            "listenerName": "Streetwise attack received check",
                            "owners": []
                        },
                    ]
                },
                
            ],
            "buffNames": {
                "atkBuff": "Champion of Streetwise Boxing",
            },
        }
    },
    "Band of Sizzling Thunder": {//REDONE
        "2pc": {},
        "4pc": {
            logic(thisTurn,battleData) {},
            "skillFunctions": {},
            "listeners": [
                {
                    "trigger": "PassiveCalls",
                    condition(battleData,generalInfo) {
                        let ownerRef = this.owners;

                        const namedTurns = battleData.nameBasedTurns;
                        const subListeners = this.subListeners[0];
                        for (let owner of ownerRef) {
                            let charSlot = owner.slot;
                            let currentTurn = namedTurns[charSlot];

                            addListenerWithPriority(battleData,subListeners,subListeners.trigger,currentTurn);
                        }
                    },
                    "target": "self",
                    "listenerName": "Sizzling 4pc listener setup",
                    "owners": [],
                    "subListeners": [
                        {
                            "trigger": "AbilityStart",
                            condition(battleData,generalInfo) {
                                const action = generalInfo.action;
                                if (action != "Skill") {return;}
        
                                let sourceTurn = generalInfo.sourceTurn;
        
                                if (!this.sizzlingThunderATKSHEET) {
                                    let relicNameRef = "Band of Sizzling Thunder";
                                    let pcRef = "4pc";
                                    let relicPathing = this.relicPathing ??= relicSets[relicNameRef].params[1];//0-2pc 1-4pc
                                    let buffName = this.buffName ??= turnLogicRelics[relicNameRef][pcRef].buffNames.atkBuff;
                                    this.sizzlingThunderATKSHEET = {
                                        "stats": [ATKP],
                                        [ATKP]: relicPathing[0],
                                        "source": relicNameRef,
                                        "sourceOwner": sourceTurn.properName,
                                        "buffName": buffName,
                                        "durationInTurn": 2,
                                        "duration": 1,
                                        "AVApplied": 0,
                                        "maxStacks": 1,
                                        "currentStacks": 1,
                                        "decay": false,
                                        "expireType": "EndTurn"
                                    }
                                }
        
                                let buffSheet = this.sizzlingThunderATKSHEET;
                                buffSheet.sourceOwner = sourceTurn.properName;
                                
                                updateBuff(battleData,sourceTurn,buffSheet);
                            },
                            "target": "self",
                            "isPersonal": true,
                            "listenerName": "Band of Sizzling Thunder skill listener",
                        },
                    ]
                },
            ],
            "buffNames": {
                "atkBuff": "Band of Sizzling Thunder",
            },
        }
    },
    "Musketeer of Wild Wheat": {//REDONE
        "2pc": {},
        "4pc": {
            logic(thisTurn,battleData) {},
            "skillFunctions": {},
            "listeners": [
                {
                    "trigger": "PassiveCalls",
                    condition(battleData,generalInfo) {
                        let ownersSlots = this.ownersSlots;

                        let relicNameRef = "Musketeer of Wild Wheat";
                        let pcRef = "4pc";
                        let relicPathing = this.relicPathing ??= relicSets[relicNameRef].params[1];//0-2pc 1-4pc
                        let buffName = this.buffName ??= turnLogicRelics[relicNameRef][pcRef].buffNames.atkBuff;

                        // greatTableIndex
                        // greatTableKeys
                        let buffSheet = this.buffSheet ??= {
                            "stats": [DamageAll],
                            [DamageAll]: relicPathing[1],
                            "source": relicNameRef,
                            "sourceOwner": "",
                            "buffName": buffName,
                            "durationInTurn": null,
                            "duration": 1,
                            "AVApplied": 0,
                            "maxStacks": 1,
                            "currentStacks": 1,
                            "decay": false,
                            "expireType": null,
                            "actionTags": ["Basic"],
                        }

                        const namedTurns = battleData.nameBasedTurns;
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
    "Firesmith of Lava-Forging": {//REDONE
        "2pc": {},
        "4pc": {
            logic(thisTurn,battleData) {},
            "skillFunctions": {},
            "listeners": [
                {
                    "trigger": "PassiveCalls",
                    condition(battleData,generalInfo) {
                        let ownerRef = this.owners;

                        let relicNameRef = "Firesmith of Lava-Forging";
                        let pcRef = "4pc";
                        let relicPathing = this.relicPathing ??= relicSets[relicNameRef].params[1];//0-2pc 1-4pc
                        let buffName = this.buffName ??= turnLogicRelics[relicNameRef][pcRef].buffNames.skillBuff;

                        let buffSheet = this.buffSheet ??= {
                            "stats": [DamageAll],
                            [DamageAll]: relicPathing[0],
                            "source": relicNameRef,
                            "sourceOwner": "",
                            "buffName": buffName,
                            "durationInTurn": null,
                            "duration": 1,
                            "AVApplied": 0,
                            "maxStacks": 1,
                            "currentStacks": 1,
                            "decay": false,
                            "expireType": null,
                            "actionTags": ["Skill"],
                        }

                        const namedTurns = battleData.nameBasedTurns;
                        const subListeners = this.subListeners[0];
                        const subListeners2 = this.subListeners[1];
                        for (let owner of ownerRef) {
                            let charSlot = owner.slot;
                            let currentTurn = namedTurns[charSlot];

                            buffSheet.sourceOwner = currentTurn.properName;
                            updateBuff(battleData,currentTurn,buffSheet);

                            addListenerWithPriority(battleData,subListeners,subListeners.trigger,currentTurn);
                            addListenerWithPriority(battleData,subListeners2,subListeners2.trigger,currentTurn);
                        }
                    },
                    "target": "self",
                    "listenerName": "Firesmith 4pc listener setup",
                    "owners": [],
                    "subListeners": [
                        {
                            "trigger": "AbilityEnd",
                            condition(battleData,generalInfo) {
                                const action = generalInfo.action;
                                if (action != "Ultimate") {return;}
        
                                let sourceTurn = generalInfo.sourceTurn;

                                if (!this.firesmithNextAttackFIRESHEET) {
                                    let relicNameRef = "Firesmith of Lava-Forging";
                                    let pcRef = "4pc";
                                    let relicPathing = this.relicPathing ??= relicSets[relicNameRef].params[1];//0-2pc 1-4pc
                                    let buffName = this.buffName ??= turnLogicRelics[relicNameRef][pcRef].buffNames.fireBuff;
                                    this.firesmithNextAttackFIRESHEET = {
                                        "stats": [DamageFire],
                                        [DamageFire]: relicPathing[1],
                                        "source": relicNameRef,
                                        "sourceOwner": sourceTurn.properName,
                                        "buffName": buffName,
                                        "durationInTurn": null,
                                        "duration": 1,
                                        "AVApplied": 0,
                                        "maxStacks": 1,
                                        "currentStacks": 1,
                                        "decay": false,
                                        "expireType": null//shit gets removed later
                                    }
                                }
                                
                                let buffSheet = this.firesmithNextAttackFIRESHEET;
                                buffSheet.sourceOwner = sourceTurn.properName;
                                
                                updateBuff(battleData,sourceTurn,buffSheet);
                            },
                            "target": "self",
                            "isPersonal": true,
                            "listenerName": "Firesmith of Lava-Forging ult end buff application",
                        },
                        {
                            "trigger": "AttackDMGEnd",
                            condition(battleData,generalInfo) {
                                let sourceTurn = generalInfo.sourceTurn;
                                const buffName = this.buffName ??= turnLogicRelics["Firesmith of Lava-Forging"]["4pc"].buffNames.fireBuff;
                                const buffCheck = sourceTurn.buffsObject[buffName];

                                if (buffCheck) {removeBuff(battleData,sourceTurn,buffCheck);}
                            },
                            "target": "self",
                            "isPersonal": true,
                            "listenerName": "Firesmith of Lava-Forging Next-Attack buff removal",
                        },
                    ]
                },
            ],
            "buffNames": {
                "skillBuff": "Firesmith of Lava-Forging [Skill]",
                "fireBuff": "Firesmith of Lava-Forging [Fire Attack]",
            },
        }
    },
    "Hunter of Glacial Forest": {//REDONE
        "2pc": {},
        "4pc": {
            logic(thisTurn,battleData) {},
            "skillFunctions": {},
            "listeners": [
                {
                    "trigger": "PassiveCalls",
                    condition(battleData,generalInfo) {
                        let ownerRef = this.owners;

                        const namedTurns = battleData.nameBasedTurns;
                        const subListeners = this.subListeners[0];
                        for (let owner of ownerRef) {
                            let charSlot = owner.slot;
                            let currentTurn = namedTurns[charSlot];

                            addListenerWithPriority(battleData,subListeners,subListeners.trigger,currentTurn);
                        }
                    },
                    "target": "self",
                    "listenerName": "Hunter of Glacial Forest 4pc listener setup",
                    "owners": [],
                    "subListeners": [
                        {
                            "trigger": "AbilityStart",
                            condition(battleData,generalInfo) {
                                const action = generalInfo.action;
                                if (action != "Ultimate") {return;}
        
                                let sourceTurn = generalInfo.sourceTurn;
        
                                if (!this.glacialForestCRITDMGSHEET) {
                                    let relicNameRef = "Hunter of Glacial Forest";
                                    let pcRef = "4pc";
                                    let relicPathing = this.relicPathing ??= relicSets[relicNameRef].params[1];//0-2pc 1-4pc
                                    let buffName = this.buffName ??= turnLogicRelics[relicNameRef][pcRef].buffNames.atkBuff;
                                    this.glacialForestCRITDMGSHEET = {
                                        "stats": [CritDamageBase],
                                        [CritDamageBase]: relicPathing[0],
                                        "source": relicNameRef,
                                        "sourceOwner": sourceTurn.properName,
                                        "buffName": buffName,
                                        "durationInTurn": 3,
                                        "duration": 2,
                                        "AVApplied": 0,
                                        "maxStacks": 1,
                                        "currentStacks": 1,
                                        "decay": false,
                                        "expireType": "EndTurn"
                                    }
                                }
        
                                let buffSheet = this.glacialForestCRITDMGSHEET;
                                buffSheet.sourceOwner = sourceTurn.properName;
                                updateBuff(battleData,sourceTurn,buffSheet);
                            },
                            "target": "self",
                            "isPersonal": true,
                            "listenerName": "Hunter of Glacial Forest ult listener",
                        },
                    ]
                },
            ],
            "buffNames": {
                "atkBuff": "Hunter of Glacial Forest",
            },
        }
    },
    "Knight of Purity Palace": {//REDONE
        "2pc": {},
        "4pc": {
            logic(thisTurn,battleData) {},
            "skillFunctions": {},
            "listeners": [
                {
                    "trigger": "PassiveCalls",
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
                            "durationInTurn": null,
                            "duration": 1,
                            "AVApplied": 0,
                            "maxStacks": 1,
                            "currentStacks": 1,
                            "decay": false,
                            "expireType": null
                        }

                        const namedTurns = battleData.nameBasedTurns;
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
    "Passerby of Wandering Cloud": {//REDONE
        "2pc": {},
        "4pc": {
            logic(thisTurn,battleData) {},
            "skillFunctions": {},
            "listeners": [
                {
                    "trigger": "WaveStart",
                    condition(battleData,generalInfo) {
                        const currentWave = generalInfo.currentWave;
                        if (currentWave != 1) {return;}//TODO: maybe just remove the listener here later instead
                        //but realistically it's probably more performant to just leave this here for the check instead of modifying an array but who fuckin knows really

                        let ownersSlots = this.ownersSlots;

                        let relicNameRef = "Passerby of Wandering Cloud";
                        const namedTurns = battleData.nameBasedTurns;
                        const SPGen = 1;
                        for (let ally in ownersSlots) {
                            let sourceTurn = namedTurns[ally];

                            updateSkillPoints(battleData,SPGen,sourceTurn,false,relicNameRef);
                        }
                    },
                    "target": "self",
                    "priority": -80,
                    "listenerName": "Passerby of Wandering Cloud battlestart SP+",
                    "owners": [],
                    "ownersSlots": {}
                },
            ],
            "buffNames": {},
        }
    },
    "Messenger Traversing Hackerspace": {//REDONE
        "2pc": {},
        "4pc": {
            logic(thisTurn,battleData) {},
            "skillFunctions": {},
            "listeners": [
                {
                    "trigger": "PassiveCalls",
                    condition(battleData,generalInfo) {
                        let ownerRef = this.owners;

                        const namedTurns = battleData.nameBasedTurns;
                        const subListeners = this.subListeners;
                        for (let owner of ownerRef) {
                            let charSlot = owner.slot;
                            let currentTurn = namedTurns[charSlot];

                            addListenerWithPriority(battleData,subListeners[0],subListeners[0].trigger,currentTurn);
                        }
                    },
                    "target": "self",
                    "listenerName": "Messenger Traversing Hackerspace 4pc listener setup",
                    "owners": [],
                    "subListeners": [
                        {
                            "trigger": "AbilityStart",
                            condition(battleData,generalInfo) {
                                const poolKey = generalInfo.poolKey;
                                if (!alliedPoolKeys.has(poolKey)) {return;}//preempt nonally targeting instances
                                // let ownerRef = this.owners;
                                if (generalInfo.action != "Ultimate") {return;}//needs to be from an ulty, who it targets is irrelevant bc if TargetAlly event is called it did target at least one
        
                                const sourceTurn = generalInfo.sourceTurn;
                                if (!this.traversingHackerspaceSPDSHEET) {
                                    let relicNameRef = "Messenger Traversing Hackerspace";
                                    let pcRef = "4pc";
                                    let buffName = this.buffName ??= turnLogicRelics[relicNameRef][pcRef].buffNames.hackerspace;
        
                                    let relicPathing = this.relicPathing ??= relicSets[relicNameRef].params[1];//0-2pc 1-4pc
                                    this.traversingHackerspaceSPDSHEET = {
                                        "stats": [SPDP],
                                        [SPDP]: relicPathing[0],
                                        "source": relicNameRef,
                                        "sourceOwner": sourceTurn.properName,
                                        "buffName": buffName,
                                        "durationInTurn": 2,
                                        "duration": 1,
                                        "AVApplied": 0,
                                        "maxStacks": 1,
                                        "currentStacks": 1,
                                        "decay": false,
                                        "expireType": "EndTurn"
                                    }
                                }
                                let buffSheet = this.traversingHackerspaceSPDSHEET;
                                buffSheet.sourceOwner = sourceTurn.properName;
                                const allyPositions = battleData.allyPositions;
                                updateBuffBatchTargets(battleData,allyPositions,buffSheet);
                            },
                            "target": "self",
                            "isPersonal": true,
                            "listenerName": "Messenger Traversing Hackerspace targeted ally listener",
                        },
                    ]
                },
            ],
            "buffNames": {
                "hackerspace": "Messenger Traversing Hackerspace",
            },
        }
    },
    "Poet of Mourning Collapse": {//REDONE
        "2pc": {},
        "4pc": {
            logic(thisTurn,battleData) {},
            "skillFunctions": {},
            "listeners": [
                {
                    "trigger": "PassiveCalls",
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
                            "durationInTurn": null,
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
                            "durationInTurn": null,
                            "duration": 1,
                            "AVApplied": 0,
                            "maxStacks": 1,
                            "currentStacks": 1,
                            "decay": false,
                            "expireType": null
                        }

                        const namedTurns = battleData.nameBasedTurns;
                        const menuStatsREF = battleData.menuStats;
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
    "Prisoner in Deep Confinement": {//REDONE
        "2pc": {},
        "4pc": {
            logic(thisTurn,battleData) {},
            "skillFunctions": {},
            "listeners": [
                {
                    "trigger": "PassiveCalls",
                    condition(battleData,generalInfo) {
                        let ownerRef = this.owners;

                        const namedTurns = battleData.nameBasedTurns;
                        // const boundFunction = this.boundFunction;
                        const subListener = this.subListeners[0];
                        for (let owner of ownerRef) {
                            let charSlot = owner.slot;
                            let currentTurn = namedTurns[charSlot];
                            addListenerWithPriority(battleData,subListener,subListener.trigger,currentTurn);
                        }
                    },
                    "target": "self",
                    "listenerName": "Prisoner in Deep Confinement - Listener setup",
                    "owners": [],
                    "subListeners": [
                        {
                            "trigger": "AllyDMGStart",
                            condition(battleData,generalInfo) {
                                let sourceTurn = generalInfo.sourceTurn;
                                let targetTurn = generalInfo.targetTurn;
        
                                if (!this.prisonerConfinementDEFSHREDSHEET) {
                                    let relicNameRef = "Prisoner in Deep Confinement";
                                    let pcRef = "4pc";
                                    let buffName = this.buffName ??= turnLogicRelics[relicNameRef][pcRef].buffNames.pc4ShredAny;
                                    let relicPathing = this.relicPathing ??= relicSets[relicNameRef].params[1];//0-2pc 1-4pc
                                    this.prisonerConfinementDEFSHREDSHEET = {
                                        "stats": [DEFShredAll],
                                        [DEFShredAll]: relicPathing[0],
                                        "source": relicNameRef,
                                        "sourceOwner": null,
                                        "buffName": buffName,
                                        "durationInTurn": null,
                                        "duration": 1,
                                        "AVApplied": 0,
                                        "maxStacks": 3,
                                        "currentStacks": 1,
                                        "decay": false,
                                        "expireType": null
                                    }
                                }
                                let buffSheet = this.prisonerConfinementDEFSHREDSHEET;
                                const buffName = buffSheet.buffName;
                                const buffCheck = sourceTurn.buffsObject[buffName];
                                const DOTCount = Math.min(3,targetTurn.DOTCounter);//TODO: dots have been added(functionally at least), verify this works later
        
                                if (buffCheck) {//if the buff already exists
                                    const currentStacks = buffCheck.currentStacks;
                                    if (currentStacks === DOTCount) {return;}//if we're already maxed on stacks and the enemy has that many dots or more, then abort early
                                    else if (DOTCount > currentStacks) {
                                        
                                        buffSheet.currentStacks = DOTCount - currentStacks;//if dot count is 2 but someone already had 1 stack, we can't stack 2 more, gotta stack just the diff
                                        updateBuff(battleData,sourceTurn,buffSheet);
                                        return;//can abort early if all we did was stack it
                                    }
                                    else {
                                        const stackDiff = DOTCount - currentStacks;
                                        if (-stackDiff === currentStacks) {
                                            removeBuff(battleData,sourceTurn,buffCheck);
                                            return;
                                        }

                                        buffSheet.currentStacks = stackDiff;
                                        updateBuff(battleData,sourceTurn,buffSheet);
                                    }
                                    //otherwise remove the buff bc that means the stacks are mismatched and less than
                                    // removeBuff(battleData,sourceTurn,buffCheck);
                                }
                                if (!DOTCount) {return;}
        
                                if (DOTCount) {//then, if the dots > 0, apply the buff as it is now
                                    
                                    buffSheet.currentStacks = DOTCount;
                                    buffSheet.sourceOwner = sourceTurn.properName;
                                    updateBuff(battleData,sourceTurn,buffSheet);
                                }
                            },
                            "target": "self",
                            "isPersonal": true,
                            "listenerName": "Prisoner in Deep Confinement - DEF Shred(Quantum Enemy) 4pc",
                        },
                    ]
                },
            ],
            "buffNames": {
                "pc4ShredAny": "Prisoner in Deep Confinement DEF SHRED",
            },
        }
    },
    "The Ashblazing Grand Duke": {//REDONE
        "2pc": {
            logic(thisTurn,battleData) {},
            "skillFunctions": {},
            "listeners": [
                {
                    "trigger": "PassiveCalls",
                    condition(battleData,generalInfo) {
                        let ownersSlots = this.ownersSlots;

                        let relicNameRef = "The Ashblazing Grand Duke";
                        let pcRef = "2pc";
                        let relicPathing = this.relicPathing ??= relicSets[relicNameRef].params[0];//0-2pc 1-4pc
                        let buffName = this.buffName ??= turnLogicRelics[relicNameRef][pcRef].buffNames.fuaBuff;

                        let buffSheet = this.buffSheet ??= {
                            "stats": [DamageAll],
                            [DamageAll]: relicPathing[0],
                            "source": relicNameRef,
                            "sourceOwner": "",
                            "buffName": buffName,
                            "durationInTurn": null,
                            "duration": 1,
                            "AVApplied": 0,
                            "maxStacks": 1,
                            "currentStacks": 1,
                            "decay": false,
                            "expireType": null,
                            "actionTags": ["FUA"],
                        }

                        const namedTurns = battleData.nameBasedTurns;
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
                    "trigger": "PassiveCalls",
                    condition(battleData,generalInfo) {
                        let ownerRef = this.owners;

                        const namedTurns = battleData.nameBasedTurns;
                        const subListeners = this.subListeners;
                        for (let owner of ownerRef) {
                            let charSlot = owner.slot;
                            let currentTurn = namedTurns[charSlot];

                            addListenerWithPriority(battleData,subListeners[0],subListeners[0].trigger,currentTurn);
                            addListenerWithPriority(battleData,subListeners[1],subListeners[1].trigger,currentTurn);
                            addListenerWithPriority(battleData,subListeners[2],subListeners[2].trigger,currentTurn);
                        }
                    },
                    "target": "self",
                    "listenerName": "Ashblazing 4pc listener setup",
                    "owners": [],
                    "subListeners": [
                        {
                            "trigger": "AttackStart",
                            condition(battleData,generalInfo) {
                                const sourceTurn = generalInfo.sourceTurn;
        
                                let isFUA = false;
                                const actionTags = generalInfo.ATKObject.actionTags;
                                for (let tag of actionTags) {
                                    if (tag === "FUA") {
                                        isFUA = true;
                                        break;
                                    }
                                }
                                if (!isFUA) {return;}

                                let buffName = this.buffName ??= turnLogicRelics["The Ashblazing Grand Duke"]["4pc"].buffNames.fuaATKStack;
        
                                //since this is a new follow up attack, gotta remove the buff, but if it doesn't exist then all we did was create the buff sheet for future use(it will get used)
                                const buffCheck = sourceTurn.buffsObject[buffName];
                                if (buffCheck) {removeBuff(battleData,sourceTurn,buffCheck);}
                                sourceTurn.ashblazingFUATrackingInProgress = true;
                            },
                            "target": "self",
                            "isPersonal": true,
                            "listenerName": "The Ashblazing Grand Duke - Hit tracking start",
                        },
                        {
                            "trigger": "HitEnemyStart",
                            condition(battleData,generalInfo) {
                                const sourceTurn = generalInfo.sourceTurn;
                                if (!sourceTurn.ashblazingFUATrackingInProgress) {return;}

                                if (!this.ashblazing4pcATKSHEET) {
                                    let relicNameRef = "The Ashblazing Grand Duke";
                                    let pcRef = "4pc";
                                    let relicPathing = relicSets[relicNameRef].params[1];//0-2pc 1-4pc
                                    let buffName = turnLogicRelics[relicNameRef][pcRef].buffNames.fuaATKStack;
                                    this.ashblazing4pcATKSHEET = {
                                        "stats": [ATKP],
                                        [ATKP]: relicPathing[0],
                                        "source": relicNameRef,
                                        "sourceOwner": sourceTurn.properName,
                                        "buffName": buffName,
                                        "durationInTurn": 4,
                                        "duration": 3,
                                        "AVApplied": 0,
                                        "maxStacks": 8,
                                        "currentStacks": 1,
                                        "decay": false,
                                        "expireType": "EndTurn"
                                    }
                                }
                                const buffSheet = this.ashblazing4pcATKSHEET;
                                const buffCheck = sourceTurn.buffsObject[buffSheet.name];
                                //if we're in a super hit-spammy attack, and reached the 8 point already, then abort without bothering the buff handler
                                if (buffCheck && buffCheck.currentStacks === 8) {return;}
                                buffSheet.sourceOwner = sourceTurn.properName;
                                updateBuff(battleData,sourceTurn,buffSheet);
                            },
                            "target": "self",
                            "isPersonal": true,
                            "listenerName": "The Ashblazing Grand Duke - Hit scaling",
                        },
                        {
                            "trigger": "AttackDMGEnd",
                            condition(battleData,generalInfo) {
                                const sourceTurn = generalInfo.sourceTurn;
                                if (!sourceTurn.ashblazingFUATrackingInProgress) {return;}
                                sourceTurn.ashblazingFUATrackingInProgress = false;
                            },
                            "target": "self",
                            "isPersonal": true,
                            "listenerName": "The Ashblazing Grand Duke - Hit tracking end",
                        },
                    ]
                },
                
            ],
            "buffNames": {
                "fuaATKStack": "The Ashblazing Grand Duke (4pc)",
            },
        }
    },
    "The Wind-Soaring Valorous": {//REDONE
        "2pc": {},
        "4pc": {
            logic(thisTurn,battleData) {},
            "skillFunctions": {},
            "listeners": [
                {
                    "trigger": "PassiveCalls",
                    condition(battleData,generalInfo) {
                        let ownerRef = this.owners;

                        const namedTurns = battleData.nameBasedTurns;
                        const subListeners = this.subListeners;
                        for (let owner of ownerRef) {
                            let charSlot = owner.slot;
                            let currentTurn = namedTurns[charSlot];

                            addListenerWithPriority(battleData,subListeners[0],subListeners[0].trigger,currentTurn);
                        }
                    },
                    "target": "self",
                    "listenerName": "Wind Soaring 4pc listener setup",
                    "owners": [],
                    "subListeners": [
                        {
                            "trigger": "AttackStart",
                            condition(battleData,generalInfo) {
                                let sourceTurn = generalInfo.sourceTurn;
                                let ownersSlots = this.ownersSlots;
                                let ownerRank = ownersSlots[sourceTurn.name];//setAmount
                                if (!ownerRank) {return;}
        
                                let isFUA = false;
                                const actionTags = generalInfo.ATKObject.actionTags;
                                for (let tag of actionTags) {
                                    if (tag === "FUA") {
                                        isFUA = true;
                                        break;
                                    }
                                }
                                if (!isFUA) {return;}
        
                                if (!this.windSoaringValorousULTDMGSHEET) {
                                    let relicNameRef = "The Wind-Soaring Valorous";
                                    let pcRef = "4pc";
                                    let relicPathing = this.relicPathing ??= relicSets[relicNameRef].params[1];//0-2pc 1-4pc
                                    let buffName = this.buffName ??= turnLogicRelics[relicNameRef][pcRef].buffNames.atkBuff;
                                    this.windSoaringValorousULTDMGSHEET = {
                                        "stats": [DamageAll],
                                        [DamageAll]: relicPathing[1],
                                        "source": relicNameRef,
                                        "sourceOwner": sourceTurn.properName,
                                        "buffName": buffName,
                                        "durationInTurn": 2,
                                        "duration": 1,
                                        "AVApplied": 0,
                                        "maxStacks": 1,
                                        "currentStacks": 1,
                                        "decay": false,
                                        "expireType": "EndTurn",
                                        "actionTags": ["Ultimate"],
                                    }
                                }
        
                                let buffSheet = this.windSoaringValorousULTDMGSHEET;
                                buffSheet.sourceOwner = sourceTurn.properName;
                                updateBuff(battleData,sourceTurn,buffSheet);
                            },
                            "target": "self",
                            "isPersonal": true,
                            "listenerName": "The Wind-Soaring Valorous fua listener",
                        },
                    ]
                },
                
            ],
            "buffNames": {
                "atkBuff": "The Wind-Soaring Valorous",
            },
        }
    },
    //right now the debate is whether I keep old stats likd DEFShredBreak or if I just revert to standard shred and actiontag the bonuses instead
    "Iron Cavalry Against the Scourge": {//REDONE
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
                            "durationInTurn": null,
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
                            "durationInTurn": null,
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
                    "trigger": "PassiveCalls",
                    condition(battleData,generalInfo) {
                        let ownerRef = this.owners;

                        const namedTurns = battleData.nameBasedTurns;
                        const subListeners = this.subListeners;
                        const statCheck = this.statCheck ??= turnLogicRelics["Iron Cavalry Against the Scourge"]["4pc"].skillFunctions.statCheck;
                        for (let owner of ownerRef) {
                            let charSlot = owner.slot;
                            let currentTurn = namedTurns[charSlot];
                            statCheck(battleData,currentTurn);

                            addListenerWithPriority(battleData,subListeners[0],subListeners[0].trigger,currentTurn);
                        }
                    },
                    "target": "self",
                    "listenerName": "Iron Cavalry Against the Scourge 4pc listener setup",
                    "owners": [],
                    "subListeners": [
                        {
                            "trigger": "UpdateStatBreak",//Break stat family
                            condition(battleData,generalInfo) {
                                let sourceTurn = generalInfo.sourceTurn;
        
                                const statCheck = this.statCheck ??= turnLogicRelics["Iron Cavalry Against the Scourge"]["4pc"].skillFunctions.statCheck;
                                statCheck(battleData,sourceTurn);
                            },
                            "target": "self",
                            "isPersonal": true,
                            "listenerName": "Iron Cavalry Against the Scourge Break check",
                        },
                    ]
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
                // {
                //     "trigger": "PassiveCalls",
                //     condition(battleData,generalInfo) {
                //         let ownerRef = this.owners;

                //         const namedTurns = battleData.nameBasedTurns;
                //         const subListeners = this.subListeners;
                //         for (let owner of ownerRef) {
                //             let charSlot = owner.slot;
                //             let currentTurn = namedTurns[charSlot];

                //             addListenerWithPriority(battleData,subListeners[0],subListeners[0].trigger,currentTurn);
                //         }
                //     },
                //     "target": "self",
                //     "listenerName": "Hero of Triumphant Song 4pc listener setup",
                //     "owners": [],
                //     "subListeners": [

                //     ]
                // },
                {
                    "trigger": "SummonOnFieldAdjustment",
                    condition(battleData,generalInfo) {
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
                                "durationInTurn": null,
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
                            updateBuff(battleData,summonAssignedTo,buffSheet);
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
                                "durationInTurn": 3,
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
                        
                        updateBuff(battleData,ownerTurn,buffSheet);//owner
                        updateBuff(battleData,sourceTurn,buffSheet);//memo

                    },
                    "target": "self",
                    // "isPersonal": true,
                    "listenerName": "Hero of Triumphant Song - memo attack listener",
                },
            ],
            "buffNames": {
                "spd": "Hero of Triumphant Song (SPD)",
                "critStack": "Hero of Triumphant Song (Crit)",
            },
        }
    },
    "World-Remaking Deliverer": {//REDONE
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
                            "durationInTurn": null,
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
                            "durationInTurn": null,
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

                    const allAlliesArray = battleData.allAlliesArray;
                    const buffCheck = sourceTurn.buffsObject[buffSheet.buffName];

                    if (memoTurn.isActive) {
                        if (buffCheck) {return;}
                        
                        updateBuff(battleData,sourceTurn,buffSheet);//owner
                        updateBuff(battleData,memoTurn,buffSheet);//memo
                        
                        updateBuffBatchTargets(battleData,allAlliesArray,allySheet);
                    }
                    else {
                        if (buffCheck) {
                            removeBuffFromBatch(battleData,allAlliesArray,allySheet);
                        }
                    }
                }
            },
            "listeners": [
                {
                    "trigger": "PassiveCalls",
                    condition(battleData,generalInfo) {
                        let ownerRef = this.owners;

                        const namedTurns = battleData.nameBasedTurns;
                        const subListeners = this.subListeners;
                        for (let owner of ownerRef) {
                            let charSlot = owner.slot;
                            let currentTurn = namedTurns[charSlot];

                            addListenerWithPriority(battleData,subListeners[0],subListeners[0].trigger,currentTurn);
                        }
                    },
                    "target": "self",
                    "listenerName": "World-Remaking Deliverer 4pc listener setup",
                    "owners": [],
                    "subListeners": [
                        {
                            "trigger": "AbilityEnd",
                            condition(battleData,generalInfo) {
                                const action = generalInfo.action;
                                if (action != "BasicATK" && action != "Skill") {return;}
        
                                const sourceTurn = generalInfo.sourceTurn;
                                const memoRef = sourceTurn.memospriteEventRef;
                                if (!memoRef) {return}//we're only looking for memo owners, not memosprites or reg chars. 
        
                                const memoTurn = sourceTurn[memoRef];
        
                                const addBuffs = this.addBuffs ??= turnLogicRelics["World-Remaking Deliverer"]["4pc"].skillFunctions.addBuffs;
                                addBuffs(battleData,sourceTurn,memoTurn);
                            },
                            "target": "self",
                            "isPersonal": true,
                            "listenerName": "World-Remaking Deliverer - basic attack/skill listener",
                        },
                    ]
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
    "Warrior Goddess of Sun and Thunder": {//REDONE
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

                    const buffSheet2 = ownerTurn.warriorGoddessCRITDMGSHEET;
                    const allyArray = battleData.allAlliesArray;
                    removeBuffFromBatch(battleData,allyArray,buffSheet2);
                }
            },
            "listeners": [
                {
                    "trigger": "PassiveCalls",
                    condition(battleData,generalInfo) {
                        let ownerRef = this.owners;

                        const namedTurns = battleData.nameBasedTurns;
                        const subListeners = this.subListeners;
                        for (let owner of ownerRef) {
                            let charSlot = owner.slot;
                            let currentTurn = namedTurns[charSlot];

                            addListenerWithPriority(battleData,subListeners[0],subListeners[0].trigger,currentTurn);

                            const memoRef = currentTurn.memospriteEventRef;
                            if (memoRef) {
                                const potentialMemo = currentTurn[memoRef];
                                addListenerWithPriority(battleData,subListeners[0],subListeners[0].trigger,potentialMemo);
                            }
                        }
                    },
                    "target": "self",
                    "listenerName": "Warrior Goddess of Sun and Thunder 4pc listener setup",
                    "owners": [],
                    "subListeners": [
                        {
                            "trigger": "HealEnd",
                            condition(battleData,generalInfo) {
                                const sourceTurn = generalInfo.sourceTurn;
                                const isMemo = sourceTurn.isMemosprite;

                                let ownerTurn = isMemo ? battleData.nameBasedTurns[sourceTurn.eventOwner] : sourceTurn;
                                const targetTurn = generalInfo.targetTurn;

                                if (targetTurn.properName === sourceTurn.properName || (isMemo && targetTurn.properName === ownerTurn.properName)) {return;}
                                //if the target is the source, abort, but if this is a memo and the target is the owner, still abort
        
                                if (!ownerTurn.warriorGoddessSPDSHEET) {
                                    let relicNameRef = "Warrior Goddess of Sun and Thunder";
                                    const logicRef = turnLogicRelics[relicNameRef]["4pc"];
                                    const buffRef = logicRef.buffNames;
                                    let relicPathing = relicSets[relicNameRef].params[1];//0-2pc 1-4pc
                                    ownerTurn.warriorGoddessSPDSHEET = {
                                        "stats": [SPDP],
                                        [SPDP]: relicPathing[0],
                                        "source": relicNameRef,
                                        "sourceOwner": ownerTurn.properName,
                                        "buffName": buffRef.spd,
                                        "durationInTurn": 3,
                                        "duration": 2,
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
                                        "durationInTurn": null,
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
                                const buffName = buffSheet.buffName;
                                const buffCheck = ownerTurn.buffsObject[buffName];
        
                                updateBuff(battleData,ownerTurn,buffSheet);
        
                                //if the owner already had gentle rain before renewing it, that means all allies still have the crit dmg, and we don't need to reapply
                                if (!buffCheck) {
                                    const allyArray = battleData.allAlliesArray;
                                    updateBuffBatchTargets(battleData,allyArray,allySheet);
                                }
                            },
                            "target": "self",
                            "isPersonal": true,
                            "listenerName": "Warrior Goddess of Sun and Thunder - heal listener",
                        },
                    ]
                },
            ],
            "buffNames": {
                "spd": "Gentle Rain [Relic]",
                "crit": "Gentle Rain [Relic] (Crit DMG)",
            },
        }
    },
    "Longevous Disciple": {
        "2pc": {},
        "4pc": {
            logic(thisTurn,battleData) {},
            "skillFunctions": {
                longevousStack(battleData,sourceTurn) {
                    if (!sourceTurn.longevousDiscipleCRITSHEET) {
                        let relicNameRef = "Longevous Disciple";
                        let pcRef = "4pc";
                        let relicPathing = relicSets[relicNameRef].params[1];//0-2pc 1-4pc
                        let buffName = turnLogicRelics[relicNameRef][pcRef].buffNames.critBuff;
                        sourceTurn.longevousDiscipleCRITSHEET = {
                            "stats": [CritRateBase],
                            [CritRateBase]: relicPathing[0],
                            "source": relicNameRef,
                            "sourceOwner": sourceTurn.properName,
                            "buffName": buffName,
                            "durationInTurn": 3,
                            "duration": 2,
                            "AVApplied": 0,
                            "maxStacks": 2,
                            "currentStacks": 1,
                            "decay": false,
                            "expireType": "EndTurn"
                        }
                    }

                    let buffSheet = sourceTurn.longevousDiscipleCRITSHEET;
                    updateBuff(battleData,sourceTurn,buffSheet);
                },
            },
            "listeners": [
                {
                    "trigger": "PassiveCalls",
                    condition(battleData,generalInfo) {
                        let ownerRef = this.owners;

                        const namedTurns = battleData.nameBasedTurns;
                        const subListeners = this.subListeners;
                        for (let owner of ownerRef) {
                            let charSlot = owner.slot;
                            let currentTurn = namedTurns[charSlot];

                            addListenerWithPriority(battleData,subListeners[0],subListeners[0].trigger,currentTurn);
                            addListenerWithPriority(battleData,subListeners[1],subListeners[1].trigger,currentTurn);
                        }
                    },
                    "target": "self",
                    "listenerName": "Longevous Disciple 4pc listener setup",
                    "owners": [],
                    "subListeners": [
                        {
                            "trigger": "AllyLostHP",
                            condition(battleData,generalInfo) {
                                let sourceTurn = generalInfo.sourceTurn; 
                                if (generalInfo.wasAttack) {return;}
        
                                const lossSource = generalInfo.lossSource;
                                if (lossSource && lossSource.isEnemy) {return;}
        
                                const addStack = this.addStack ??= turnLogicRelics["Longevous Disciple"]["4pc"].skillFunctions.longevousStack;
                                addStack(battleData,sourceTurn);
                            },
                            "target": "self",
                            "isPersonal": true,
                            "listenerName": "Longevous Disciple - owner lost hp listener",
                        },
                        {
                            "trigger": "WasAttackedEnd",
                            condition(battleData,generalInfo,personalOwner) {
                                const addStack = this.addStack ??= turnLogicRelics["Longevous Disciple"]["4pc"].skillFunctions.longevousStack;
                                addStack(battleData,personalOwner);
                            },
                            "target": "self",
                            "isPersonal": true,
                            "listenerName": "Longevous Disciple - owner attacked listener",
                            "owners": []
                        },
                    ]
                },
            ],
            "buffNames": {
                "critBuff": "Longevous Disciple [Relic]",
            },
        }
    },
    "Self-Enshrouded Recluse": {//PARTIAL REWORK //TODO: need to revisit 4pc handling later
        "2pc": {
            logic(thisTurn,battleData) {},
            "skillFunctions": {},
            "listeners": [
                {
                    "trigger": "PassiveCalls",
                    condition(battleData,generalInfo) {
                        let ownerRef = this.owners;

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
                            "durationInTurn": null,
                            "duration": 1,
                            "AVApplied": 0,
                            "maxStacks": 1,
                            "currentStacks": 1,
                            "decay": false,
                            "expireType": null,
                        }

                        const namedTurns = battleData.nameBasedTurns;
                        // const subListeners = this.subListeners;
                        for (let owner of ownerRef) {
                            let charSlot = owner.slot;
                            let currentTurn = namedTurns[charSlot];

                            buffSheet.sourceOwner = currentTurn.properName;
                            updateBuff(battleData,currentTurn,buffSheet);
                            // addListenerWithPriority(battleData,subListeners[0],subListeners[0].trigger,currentTurn);
                        }
                    },
                    "target": "self",
                    "listenerName": "Self-Enshrouded Recluse 2pc listener setup",
                    "owners": [],
                    "subListeners": [

                    ]
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
                    "trigger": "PassiveCalls",
                    condition(battleData,generalInfo) {
                        let ownerRef = this.owners;

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
                            "durationInTurn": null,
                            "duration": 1,
                            "AVApplied": 0,
                            "maxStacks": 1,
                            "currentStacks": 1,
                            "decay": false,
                            "expireType": null,
                        }

                        const namedTurns = battleData.nameBasedTurns;
                        const subListeners = this.subListeners;
                        for (let owner of ownerRef) {
                            let charSlot = owner.slot;
                            let currentTurn = namedTurns[charSlot];

                            buffSheet.sourceOwner = currentTurn.properName;
                            updateBuff(battleData,currentTurn,buffSheet);

                            // addListenerWithPriority(battleData,subListeners[0],subListeners[0].trigger,currentTurn);
                        }
                    },
                    "target": "self",
                    "listenerName": "Hunter of Glacial Forest 4pc listener setup",
                    "owners": [],
                    "subListeners": [

                    ]
                },
                {
                    "trigger": "ShieldLost",
                    condition(battleData,generalInfo) {
                        // sourceTurn.shieldCounter -= 1;
                        // sourceTurn.activeShields[buffName] = null;
                        let ownersSlots = this.ownersSlots;
                        const sourceTurn = generalInfo.sourceTurn;
                        const shieldSource = generalInfo.currentReference.sourceOwner;

                        const namedTurns = battleData.nameBasedTurns;
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
                    // "isPersonal": true,
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
                                    "durationInTurn": null,
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
                    // "isPersonal": true,
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
    "Guard of Wuthering Snow": {//REDONE
        "2pc": {
            logic(thisTurn,battleData) {},
            "skillFunctions": {},
            "listeners": [
                {
                    "trigger": "PassiveCalls",
                    condition(battleData,generalInfo) {
                        let ownerRef = this.owners;

                        let relicNameRef = "Guard of Wuthering Snow";
                        let pcRef = "2pc";
                        let relicPathing = this.relicPathing ??= relicSets[relicNameRef].params[0];//0-2pc 1-4pc
                        let buffName = this.buffName ??= turnLogicRelics[relicNameRef][pcRef].buffNames.guardDR2pc;

                        // greatTableIndex
                        // greatTableKeys
                        let buffSheet = this.buffSheet ??= {
                            "stats": [DamageReductionStandard],
                            [DamageReductionStandard]: relicPathing[0],
                            "source": relicNameRef,
                            "sourceOwner": "",
                            "buffName": buffName,
                            "durationInTurn": null,
                            "duration": 1,
                            "AVApplied": 0,
                            "maxStacks": 1,
                            "currentStacks": 1,
                            "decay": false,
                            "expireType": null,
                        }

                        const namedTurns = battleData.nameBasedTurns;
                        // const subListeners = this.subListeners;
                        for (let owner of ownerRef) {
                            let charSlot = owner.slot;
                            let currentTurn = namedTurns[charSlot];

                            buffSheet.sourceOwner = currentTurn.properName;
                            updateBuff(battleData,currentTurn,buffSheet);
                            // addListenerWithPriority(battleData,subListeners[0],subListeners[0].trigger,currentTurn);
                        }
                    },
                    "target": "self",
                    "listenerName": "Guard of Wuthering Snow 2pc listener setup",
                    "owners": [],
                    "subListeners": [

                    ],
                },
            ],
            "buffNames": {
                "guardDR2pc": "Guard of Wuthering Snow (DR)",
            },
        },
        "4pc": {
            logic(thisTurn,battleData) {},
            "skillFunctions": {},
            "listeners": [
                {
                    "trigger": "PassiveCalls",
                    condition(battleData,generalInfo) {
                        let ownerRef = this.owners;

                        const namedTurns = battleData.nameBasedTurns;
                        const subListeners = this.subListeners;
                        for (let owner of ownerRef) {
                            let charSlot = owner.slot;
                            let currentTurn = namedTurns[charSlot];

                            addListenerWithPriority(battleData,subListeners[0],subListeners[0].trigger,currentTurn);
                        }
                    },
                    "target": "self",
                    "listenerName": "Guard of Wuthering Snow 4pc listener setup",
                    "owners": [],
                    "subListeners": [
                        {
                            "trigger": "PreActionPhase",
                            condition(battleData,generalInfo) {
                                let sourceTurn = generalInfo.sourceTurn;
        
                                const hpRatio = sourceTurn.currentHP / sourceTurn.maxHP;
                                const hpThreshold = 0.50;
                                const canHeal = hpRatio <= hpThreshold;

                                if (!canHeal) {return;}
        
                                if (!sourceTurn.relicGuardWutheringHealObject) {
                                    let relicNameRef = "Guard of Wuthering Snow";
                                    // let pcRef = "4pc";
                                    let relicPathing = this.relicPathing ??= relicSets[relicNameRef].params[1];//0-2pc 1-4pc
        
                                    const actionTags = ["All","Gear","Heal"];
                                    const compositeCacheTag = actionTags + sourceTurn.properName;
        
                                    sourceTurn.relicGuardWutheringHealObject ??= {
                                        multipliers: {
                                            primary: relicPathing[1],
                                            blast: null,
                                            all: null,
                                        },
                                        flatAmounts: {
                                            primary: null,
                                            blast: null,
                                            all: null,
                                        },
                                        scalar: "HP",
                                        DMGTags: [],
                                        allToughness: false,
                                        slot: "Relic",
                                        actionTags,compositeCacheTag
                                    }
                                }
                                const healObject = sourceTurn.relicGuardWutheringHealObject;
        
                                healAlly(battleData,healObject,sourceTurn,sourceTurn,"Relic",1,null);
                                updateEnergy(battleData,5,sourceTurn,false,"Guard of Wuthering Snow");
                            },
                            "target": "self",
                            "isPersonal": true,
                            "listenerName": "Guard of Wuthering Snow - turnstart heal check",
                        },
                    ]
                },
            ],
            "buffNames": {
                // "critBuff4pc": "Self-Enshrouded Recluse (Crit DMG)",
                // "shieldBuff4pc": "Self-Enshrouded Recluse (4pc)",
            },
            "buffNamesPerCharacter": {
                // "critBuff4pc": "Self-Enshrouded Recluse (Crit DMG)",
            },
        }
    },
    "Thief of Shooting Meteor": {//REDONE
        "2pc": {},
        "4pc": {
            logic(thisTurn,battleData) {},
            "skillFunctions": {},
            "listeners": [
                {
                    "trigger": "PassiveCalls",
                    condition(battleData,generalInfo) {
                        let ownerRef = this.owners;

                        const namedTurns = battleData.nameBasedTurns;
                        const subListeners = this.subListeners;
                        for (let owner of ownerRef) {
                            let charSlot = owner.slot;
                            let currentTurn = namedTurns[charSlot];

                            addListenerWithPriority(battleData,subListeners[0],subListeners[0].trigger,currentTurn);
                        }
                    },
                    "target": "self",
                    "listenerName": "Thief of Shooting Meteor 4pc listener setup",
                    "owners": [],
                    "subListeners": [
                        {
                            "trigger": "BrokeEnemyWeakness",
                            condition(battleData,generalInfo) {
                                // let ownerRef = this.owners;
                                let sourceTurn = generalInfo.sourceTurn;
        
                                updateEnergy(battleData,3,sourceTurn,false,"Thief of Shooting Meteor");
                            },
                            "target": "self",
                            "isPersonal": true,
                            "listenerName": "Thief of Shooting Meteor - weakness break listener",
                        },
                    ]
                },
            ],
            "buffNames": {
                // "critBuff4pc": "Self-Enshrouded Recluse (Crit DMG)",
                // "shieldBuff4pc": "Self-Enshrouded Recluse (4pc)",
            },
            "buffNamesPerCharacter": {
                // "critBuff4pc": "Self-Enshrouded Recluse (Crit DMG)",
            },
        }
    },
    "Diviner of Distant Reach": {//REDONE
        "2pc": {},
        "4pc": {
            logic(thisTurn,battleData) {},
            "skillFunctions": {},
            "listeners": [
                {
                    "trigger": "PassiveCalls",
                    condition(battleData,generalInfo) {
                        let ownerRef = this.owners;

                        let relicNameRef = "Diviner of Distant Reach";
                        let pcRef = "4pc";
                        let relicPathing = this.relicPathing ??= relicSets[relicNameRef].params[1];//0-2pc 1-4pc

                        let buffSheet1 = this.buffSheet1 ??= {
                            "stats": [CritRateBase],
                            [CritRateBase]: relicPathing[3],
                            "source": relicNameRef,
                            "sourceOwner": "",
                            "buffName": turnLogicRelics[relicNameRef][pcRef].buffNames.critBuff1,
                            "durationInTurn": null,
                            "duration": 1,
                            "AVApplied": 0,
                            "maxStacks": 1,
                            "currentStacks": 1,
                            "decay": false,
                            "expireType": null
                        }
                        let buffSheet2 = this.buffSheet2 ??= {
                            "stats": [CritRateBase],
                            [CritRateBase]: relicPathing[2],
                            "source": relicNameRef,
                            "sourceOwner": "",
                            "buffName": turnLogicRelics[relicNameRef][pcRef].buffNames.critBuff2,
                            "durationInTurn": null,
                            "duration": 1,
                            "AVApplied": 0,
                            "maxStacks": 1,
                            "currentStacks": 1,
                            "decay": false,
                            "expireType": null
                        }

                        const menuStatsREF = battleData.menuStats;
                        const getFinalSPD = calcs.getSPDFinal;

                        const namedTurns = battleData.nameBasedTurns;
                        const subListeners = this.subListeners;
                        for (let owner of ownerRef) {
                            let charSlot = owner.slot;
                            let currentTurn = namedTurns[charSlot];


                            let menuStats = menuStatsREF[charSlot];
                            let SPD = getFinalSPD(menuStats).SPDFinal;
                            // const memoRef = currentTurn.memospriteEventRef;
                            
                            const ownerName = currentTurn.properName;
                            buffSheet1.sourceOwner = ownerName;
                            buffSheet2.sourceOwner = ownerName;

                            if (SPD > 160) {
                                updateBuff(battleData,currentTurn,buffSheet1);
                                // if (memoRef) {updateBuff(battleData,currentTurn[memoRef],buffSheet1);}
                            }
                            else if (SPD > 120) {
                                updateBuff(battleData,currentTurn,buffSheet2);
                                // if (memoRef) {updateBuff(battleData,currentTurn[memoRef],buffSheet2);}
                            }

                            addListenerWithPriority(battleData,subListeners[0],subListeners[0].trigger,currentTurn);
                        }
                    },
                    "target": "self",
                    "listenerName": "Diviner of Distant Reach 4pc listener setup",
                    "owners": [],
                    "subListeners": [
                        {
                            "trigger": "AbilityStart",
                            condition(battleData,generalInfo) {
                                const action = generalInfo.action;
                                if (action != "ElationSkill") {return;}
        
                                let sourceTurn = generalInfo.sourceTurn;
        
                                let buffSheet1 = this.buffSheet1 ??= {
                                    "stats": [ElationDMGAll],
                                    [ElationDMGAll]: relicSets["Diviner of Distant Reach"].params[1][4],//0-2pc 1-4pc
                                    "source": "Diviner of Distant Reach",
                                    "sourceOwner": "",
                                    "buffName": turnLogicRelics["Diviner of Distant Reach"]["4pc"].buffNames.elationSkillFirst,
                                    "durationInTurn": null,
                                    "duration": 1,
                                    "AVApplied": 0,
                                    "maxStacks": 1,
                                    "currentStacks": 1,
                                    "decay": false,
                                    "expireType": null
                                }
        
                                buffSheet1.sourceOwner = sourceTurn.properName;
                                const allyArray = battleData.allAlliesArray;
                                updateBuffBatchTargets(battleData,allyArray,buffSheet1);
        
                                removeListener(battleData,this,sourceTurn);
                            },
                            "target": "self",
                            "isPersonal": true,
                            "listenerName": "Diviner of Distant Reach First Elation Skill",
                        },
                    ]
                },
                
            ],
            "buffNames": {
                "critBuff1": "Diviner of Distant Reach (>=160)",
                "critBuff2": "Diviner of Distant Reach (>=120)",
                "elationSkillFirst": "Diviner of Distant Reach (Elation)",
            },
        }
    },
    "Ever-Glorious Magical Girl": {//REDONE
        "2pc": {},
        "4pc": {
            logic(thisTurn,battleData) {},
            "skillFunctions": {},
            "listeners": [
                {
                    "trigger": "PassiveCalls",
                    condition(battleData,generalInfo) {
                        let ownerRef = this.owners;

                        if (!this.buffSheet1) {
                            let relicNameRef = "Ever-Glorious Magical Girl";
                            let pcRef = "4pc";
                            let relicPathing = this.relicPathing ??= relicSets[relicNameRef].params[1];//0-2pc 1-4pc
                            let buffName = this.buffName ??= turnLogicRelics[relicNameRef][pcRef].buffNames.defaultShred;

                            this.buffSheet1 = {
                                "stats": [DEFShredAll],
                                [DEFShredAll]: relicPathing[0],
                                "source": relicNameRef,
                                "sourceOwner": "",
                                "buffName": buffName,
                                "durationInTurn": null,
                                "duration": 1,
                                "AVApplied": 0,
                                "maxStacks": 1,
                                "currentStacks": 1,
                                "decay": false,
                                "expireType": null,
                                "actionTags": ["Elation"],
                            }
                        }

                        let buffSheet1 = this.buffSheet1;

                        const namedTurns = battleData.nameBasedTurns;
                        // const subListeners = this.subListeners;
                        for (let owner of ownerRef) {
                            let charSlot = owner.slot;
                            let currentTurn = namedTurns[charSlot];

                            const memoRef = currentTurn.memospriteEventRef;
                            
                            buffSheet1.sourceOwner = currentTurn.properName;

                            updateBuff(battleData,currentTurn,buffSheet1);
                            if (memoRef) {updateBuff(battleData,currentTurn[memoRef],buffSheet1);}

                            // addListenerWithPriority(battleData,subListeners[0],subListeners[0].trigger,currentTurn);
                        }
                    },
                    "target": "self",
                    "listenerName": "Ever-Glorious Magical Girl 4pc listener setup",
                    "owners": [],
                    "subListeners": [

                    ]
                },
                {
                    "trigger": "PunchlineChanged",//remain global, hard to be personalized though we DO allow a source param on this
                    condition(battleData,generalInfo) {
                        let ownersSlots = this.ownersSlots;
                        const value = generalInfo.newAmount;
                        if (value <= 0) {return;}

                        const currentStacks = battleData.everGloriousMagicalTrackerStacks ??= 0;
                        battleData.everGloriousMagicalTrackerPunchline ??= 0
                        battleData.everGloriousMagicalTrackerPunchline += value;

                        const addedValue = Math.floor(battleData.everGloriousMagicalTrackerPunchline / 5);
                        if (addedValue >= 1) {
                            battleData.everGloriousMagicalTrackerPunchline -= addedValue*5;
                        }
                        else {return;}
                        const finalValue = Math.min(10,(battleData.everGloriousMagicalTrackerStacks + addedValue));
                        const stacksToAdd = finalValue - currentStacks;

                        if (stacksToAdd === 0) {
                            //if we have nothing to add it's bc we are already capped and can kill this listener since it is teamwide and not individual
                            removeListener(battleData,this,null);
                        }
                        battleData.everGloriousMagicalTrackerStacks += stacksToAdd;


                        if (!this.buffSheet1) {
                            let relicNameRef = "Ever-Glorious Magical Girl";
                            let pcRef = "4pc";
                            let relicPathing = this.relicPathing ??= relicSets[relicNameRef].params[1];//0-2pc 1-4pc
                            let buffName = this.buffName ??= turnLogicRelics[relicNameRef][pcRef].buffNames.stackShred;

                            this.buffSheet1 = {
                                "stats": [DEFShredAll],
                                [DEFShredAll]: relicPathing[2],
                                "source": relicNameRef,
                                "sourceOwner": "",
                                "buffName": buffName,
                                "durationInTurn": null,
                                "duration": 1,
                                "AVApplied": 0,
                                "maxStacks": 10,
                                "currentStacks": 1,
                                "decay": false,
                                "expireType": null,
                                "actionTags": ["Elation"],
                            }
                        }

                        let buffSheet1 = this.buffSheet1;
                        buffSheet1.currentStacks = stacksToAdd;

                        const namedTurns = battleData.nameBasedTurns;
                        for (let ally in ownersSlots) {
                            let currentTurn = namedTurns[ally];
                            const memoRef = currentTurn.memospriteEventRef;
                            
                            const ownerName = currentTurn.properName;
                            buffSheet1.sourceOwner = ownerName;

                            updateBuff(battleData,currentTurn,buffSheet1);
                            if (memoRef) {updateBuff(battleData,currentTurn[memoRef],buffSheet1);}
                        }
                    },
                    "target": "self",
                    "listenerName": "Ever-Glorious Magical Girl Stack listener",
                    "owners": [],
                    "ownersSlots": {}
                },
            ],
            "buffNames": {
                "defaultShred": "Ever-Glorious Magical Girl (Default)",
                "stackShred": "Ever-Glorious Magical Girl (Stack)",
            },
        }
    },
    "Pioneer Diver of Dead Waters": {//REDONE
        "2pc": {
            logic(thisTurn,battleData) {},
            "skillFunctions": {},
            "listeners": [
                {
                    "trigger": "PassiveCalls",
                    condition(battleData,generalInfo) {
                        let ownerRef = this.owners;


                        const namedTurns = battleData.nameBasedTurns;
                        const subListeners = this.subListeners[0];
                        for (let owner of ownerRef) {
                            let charSlot = owner.slot;
                            let currentTurn = namedTurns[charSlot];

                            addListenerWithPriority(battleData,subListeners,subListeners.trigger,currentTurn);
                        }
                    },
                    "target": "self",
                    "listenerName": "Pioneer Diver of Dead Waters - 2pc setup",
                    "owners": [],
                    "subListeners": [
                        {
                            "trigger": "AllyDMGStart",
                            condition(battleData,generalInfo) {
                                let sourceTurn = generalInfo.sourceTurn;
                                let targetTurn = generalInfo.targetTurn;
        
                                if (!this.pioneerDMGDebuffedSHEET) {
                                    let relicNameRef = "Pioneer Diver of Dead Waters";
                                    let pcRef = "2pc";
                                    let buffName = this.buffName ??= turnLogicRelics[relicNameRef][pcRef].buffNames.pc2Debuffed;
                                    let relicPathing = this.relicPathing ??= relicSets[relicNameRef].params[0];//0-2pc 1-4pc
                                    this.pioneerDMGDebuffedSHEET = {
                                        "stats": [DamageAll],
                                        [DamageAll]: relicPathing[0],
                                        "source": relicNameRef,
                                        "sourceOwner": null,
                                        "buffName": buffName,
                                        "durationInTurn": null,
                                        "duration": 1,
                                        "AVApplied": 0,
                                        "maxStacks": 1,
                                        "currentStacks": 1,
                                        "decay": false,
                                        "expireType": null,
                                        "actionTags": ["All"],
                                    }
                                }
                                let buffSheet = this.pioneerDMGDebuffedSHEET;

                                const debuffCount = targetTurn.debuffCounter;
                                const buffCheck = sourceTurn.buffsObject[buffSheet.buffName];
        
                                if (debuffCount) {//if there are debuffs
                                    if (buffCheck) {return;}//but we already have it then leave

                                    buffSheet.sourceOwner = sourceTurn.properName;
                                    updateBuff(battleData,sourceTurn,buffSheet);//otherwise apply
                                }
                                else if (buffCheck) {//if we have the buff but no enemy debuffs, remove
                                    removeBuff(battleData,sourceTurn,buffSheet);
                                }
                            },
                            "target": "self",
                            "isPersonal": true,
                            "listenerName": "Pioneer Diver of Dead Waters - 2pc Debuffed listener",
                        },
                    ]
                },
                
            ],
            "buffNames": {
                "pc2Debuffed": "Pioneer Diver of Dead Waters (Debuffed)",
            },
        },
        "4pc": {
            logic(thisTurn,battleData) {},
            "skillFunctions": {},
            "listeners": [
                {
                    "trigger": "PassiveCalls",
                    condition(battleData,generalInfo) {
                        let ownerRef = this.owners;


                        const namedTurns = battleData.nameBasedTurns;
                        const subListeners = this.subListeners[0];
                        for (let owner of ownerRef) {
                            let charSlot = owner.slot;
                            let currentTurn = namedTurns[charSlot];

                            addListenerWithPriority(battleData,subListeners,subListeners.trigger,currentTurn);
                        }
                    },
                    "target": "self",
                    "listenerName": "Pioneer Diver of Dead Waters - 4pc setup",
                    "owners": [],
                    "subListeners": [
                        {
                            "trigger": "AllyDMGStart",
                            condition(battleData,generalInfo) {
                                let sourceTurn = generalInfo.sourceTurn;
                                let targetTurn = generalInfo.targetTurn;
        
                                if (!this.pioneerDMGTripleDebuffSHEET) {
                                    let relicNameRef = "Pioneer Diver of Dead Waters";
                                    let pcRef = "4pc";
                                    const buffNames = turnLogicRelics[relicNameRef][pcRef].buffNames;
                                    let relicPathing = this.relicPathing ??= relicSets[relicNameRef].params[1];//0-2pc 1-4pc
                                    this.pioneerDMGDoubleDebuffSHEET = {
                                        "stats": [CritDamageBase],
                                        [CritDamageBase]: relicPathing[1],
                                        "source": relicNameRef,
                                        "sourceOwner": null,
                                        "buffName": buffNames.buffx2x1,
                                        "durationInTurn": null,
                                        "duration": 1,
                                        "AVApplied": 0,
                                        "maxStacks": 1,
                                        "currentStacks": 1,
                                        "decay": false,
                                        "expireType": null,
                                        "actionTags": ["All"],
                                    }
                                    this.pioneerDMGTripleDebuffSHEET = {
                                        "stats": [CritDamageBase],
                                        [CritDamageBase]: relicPathing[2],
                                        "source": relicNameRef,
                                        "sourceOwner": null,
                                        "buffName": buffNames.buffx3x1,
                                        "durationInTurn": null,
                                        "duration": 1,
                                        "AVApplied": 0,
                                        "maxStacks": 1,
                                        "currentStacks": 1,
                                        "decay": false,
                                        "expireType": null,
                                        "actionTags": ["All"],
                                    }
                                    this.pioneerDMGDoubleDebuffSHEET2 = {
                                        "stats": [CritDamageBase],
                                        [CritDamageBase]: relicPathing[1] * 2,
                                        "source": relicNameRef,
                                        "sourceOwner": null,
                                        "buffName": buffNames.buffx2x2,
                                        "durationInTurn": null,
                                        "duration": 1,
                                        "AVApplied": 0,
                                        "maxStacks": 1,
                                        "currentStacks": 1,
                                        "decay": false,
                                        "expireType": null,
                                        "actionTags": ["All"],
                                    }
                                    this.pioneerDMGTripleDebuffSHEET2 = {
                                        "stats": [CritDamageBase],
                                        [CritDamageBase]: relicPathing[2] * 2,
                                        "source": relicNameRef,
                                        "sourceOwner": null,
                                        "buffName": buffNames.buffx3x2,
                                        "durationInTurn": null,
                                        "duration": 1,
                                        "AVApplied": 0,
                                        "maxStacks": 1,
                                        "currentStacks": 1,
                                        "decay": false,
                                        "expireType": null,
                                        "actionTags": ["All"],
                                    }
                                }
                                const buffx2x1 = this.pioneerDMGDoubleDebuffSHEET;
                                const buffx3x1 = this.pioneerDMGTripleDebuffSHEET;

                                const buffx2x2 = this.pioneerDMGDoubleDebuffSHEET2;
                                const buffx3x2 = this.pioneerDMGTripleDebuffSHEET2;

                                const doubleBuffName = this.doubleBuffName ??= turnLogicRelics["Pioneer Diver of Dead Waters"]["4pc"].buffNames.isDoubled;



                                const debuffCount = targetTurn.debuffCounter;

                                const buffsObject = sourceTurn.buffsObject;

                                const buffCheckbuffx2x1 = buffsObject[buffx2x1.buffName];
                                const buffCheckbuffx3x1 = buffsObject[buffx3x1.buffName];

                                const buffCheckbuffx2x2 = buffsObject[buffx2x2.buffName];
                                const buffCheckbuffx3x2 = buffsObject[buffx3x2.buffName];

                                // const buffCheckbuffCrit = buffsObject[buffCrit.buffName];

                                const doubledCheck = buffsObject[doubleBuffName];


                                if (debuffCount >= 2) {
                                    if (debuffCount >= 3) {
                                        if (doubledCheck) {
                                            if (buffCheckbuffx3x2) {return;}//if we already have the x3 debuff, doubled buff, abort

                                            if (buffCheckbuffx3x1) {removeBuff(battleData,sourceTurn,buffCheckbuffx3x1);}//if we have the nondouble version, remove it
                                            buffx3x2.sourceOwner = sourceTurn.properName;
                                            updateBuff(battleData,sourceTurn,buffx3x2);

                                            if (buffCheckbuffx2x1) {removeBuff(battleData,sourceTurn,buffCheckbuffx2x1);}
                                            if (buffCheckbuffx2x2) {removeBuff(battleData,sourceTurn,buffCheckbuffx2x2);}
                                        }
                                        else {
                                            if (buffCheckbuffx3x1) {return;}//if we already have the x3 NON doubled buff, abort

                                            if (buffCheckbuffx3x2) {removeBuff(battleData,sourceTurn,buffCheckbuffx3x2);}//if we have the double version, remove it
                                            buffx3x1.sourceOwner = sourceTurn.properName;
                                            updateBuff(battleData,sourceTurn,buffx3x1);

                                            if (buffCheckbuffx2x1) {removeBuff(battleData,sourceTurn,buffCheckbuffx2x1);}
                                            if (buffCheckbuffx2x2) {removeBuff(battleData,sourceTurn,buffCheckbuffx2x2);}
                                        }
                                    }
                                    else {
                                        if (doubledCheck) {
                                            if (buffCheckbuffx2x2) {return;}//if we already have the x2 debuff, doubled buff, abort

                                            if (buffCheckbuffx2x1) {removeBuff(battleData,sourceTurn,buffCheckbuffx2x1);}//if we have the nondouble version, remove it
                                            buffx2x2.sourceOwner = sourceTurn.properName;
                                            updateBuff(battleData,sourceTurn,buffx2x2);

                                            if (buffCheckbuffx3x1) {removeBuff(battleData,sourceTurn,buffCheckbuffx3x1);}
                                            if (buffCheckbuffx3x2) {removeBuff(battleData,sourceTurn,buffCheckbuffx3x2);}
                                        }
                                        else {
                                            if (buffCheckbuffx2x1) {return;}//if we already have the x2 NON doubled buff, abort

                                            if (buffCheckbuffx2x2) {removeBuff(battleData,sourceTurn,buffCheckbuffx2x2);}//if we have the double version, remove it
                                            buffx2x1.sourceOwner = sourceTurn.properName;
                                            updateBuff(battleData,sourceTurn,buffx2x1);

                                            if (buffCheckbuffx3x1) {removeBuff(battleData,sourceTurn,buffCheckbuffx3x1);}
                                            if (buffCheckbuffx3x2) {removeBuff(battleData,sourceTurn,buffCheckbuffx3x2);}
                                        }
                                    }
                                }
                                else {
                                    if (buffCheckbuffx3x1) {removeBuff(battleData,sourceTurn,buffCheckbuffx3x1);}
                                    if (buffCheckbuffx3x2) {removeBuff(battleData,sourceTurn,buffCheckbuffx3x2);}
                                    if (buffCheckbuffx2x1) {removeBuff(battleData,sourceTurn,buffCheckbuffx2x1);}
                                    if (buffCheckbuffx2x2) {removeBuff(battleData,sourceTurn,buffCheckbuffx2x2);}
                                }
                            },
                            "target": "self",
                            "isPersonal": true,
                            "listenerName": "Pioneer Diver of Dead Waters - 2pc Debuffed listener",
                        },
                    ]
                },
                {
                    "trigger": "DebuffApplied",
                    condition(battleData,generalInfo) {
                        // let ownerRef = this.owners;
                        const source = generalInfo.currentReference.sourceOwner;
                        const ownerSlot = battleData.nameIndex[source];
    
                        let ownersSlots = this.ownersSlots;
                        let ownerRank = ownersSlots[ownerSlot];
                        if (!ownerRank) {return;}//if the debuff owner isn't an owner of the relic, abort early

                        if (!this.pioneerDMGTripleDebuffSHEET) {
                            let relicNameRef = "Pioneer Diver of Dead Waters";
                            let pcRef = "4pc";
                            const buffNames = turnLogicRelics[relicNameRef][pcRef].buffNames;
                            let relicPathing = this.relicPathing ??= relicSets[relicNameRef].params[1];//0-2pc 1-4pc
                            this.pioneerDMGActiveCritSHEET = {
                                "stats": [CritRateBase],
                                [CritRateBase]: relicPathing[0],
                                "source": relicNameRef,
                                "sourceOwner": null,
                                "buffName": buffNames.isDoubled,
                                "durationInTurn": 2,
                                "duration": 1,
                                "AVApplied": 0,
                                "maxStacks": 1,
                                "currentStacks": 1,
                                "decay": false,
                                "expireType": "EndTurn",
                                "actionTags": ["All"],
                            }
                        }
                        const buffSheet = this.pioneerDMGActiveCritSHEET;
                        const ownerTurn = battleData.nameBasedTurns[ownerSlot];
                        buffSheet.sourceOwner = ownerTurn.properName;
                        updateBuff(battleData,ownerTurn,buffSheet);
                    },
                    "target": "self",
                    "listenerName": "Pioneer Diver of Dead Waters - debuffs applied check",
                    "owners": [],
                },
                
            ],
            "buffNames": {
                "buffx2x1": "Pioneer Diver of Dead Waters (x2, x1)",
                "buffx3x1": "Pioneer Diver of Dead Waters (x3, x1)",
                "buffx2x2": "Pioneer Diver of Dead Waters (x2, x2)",
                "buffx3x2": "Pioneer Diver of Dead Waters (x3, x2)",
                "isDoubled": "Pioneer Diver of Dead Waters",
            },
        }
    },
    "As Navigator Isee Sees It": {
        "2pc": {},
        "4pc": {
            logic(thisTurn,battleData) {},
            "skillFunctions": {},
            "listeners": [
                {
                    "trigger": "PassiveCalls",
                    condition(battleData,generalInfo) {
                        let ownerRef = this.owners;

                        const namedTurns = battleData.nameBasedTurns;
                        const subListeners = this.subListeners;
                        for (let owner of ownerRef) {
                            let charSlot = owner.slot;
                            let currentTurn = namedTurns[charSlot];

                            addListenerWithPriority(battleData,subListeners[0],subListeners[0].trigger,currentTurn);
                            addListenerWithPriority(battleData,subListeners[1],subListeners[1].trigger,currentTurn);
                            addListenerWithPriority(battleData,subListeners[2],subListeners[2].trigger,currentTurn);
                            addListenerWithPriority(battleData,subListeners[3],subListeners[3].trigger,currentTurn);
                        }
                    },
                    "target": "self",
                    "listenerName": "As Navigator Isee Sees It - 4pc setup",
                    "owners": [],
                    "subListeners": [
                        {
                            "trigger": "AbilityStart",
                            condition(battleData,generalInfo) {
                                const action = generalInfo.action;
                                if (action != "Skill") {return;}

                                const sourceTurn = generalInfo.sourceTurn;
                                const buffSheet = sourceTurn.relicIseeSeesItSHEET;
                                buffSheet.currentStacks = 1;

                                updateBuff(battleData,sourceTurn,buffSheet);
                            },
                            "target": "self",
                            "isPersonal": true,
                            "listenerName": "As Navigator Isee Sees It - skill start listener",
                        },
                        {
                            "trigger": "AbilityEnd",
                            condition(battleData,generalInfo) {
                                const action = generalInfo.action;
                                if (action != "Ultimate") {return;}

                                const sourceTurn = generalInfo.sourceTurn;
                                const buffSheet = sourceTurn.relicIseeSeesItSHEET;

                                const buffCheck = sourceTurn.buffsObject[buffSheet.buffName];

                                if (buffCheck) {
                                    const currentStacks = buffCheck.currentStacks;
                                    if (currentStacks === 1) {
                                        removeBuff(battleData,sourceTurn,buffCheck)
                                        return;
                                    }
                                    else {
                                        buffSheet.currentStacks = -1;
                                        updateBuff(battleData,sourceTurn,buffSheet);
                                    }
                                }
                                else {return;}
                            },
                            "target": "self",
                            "isPersonal": true,
                            "listenerName": "As Navigator Isee Sees It - ult end listener",
                        },
                        {
                            "trigger": "PreActionPhase",
                            condition(battleData,generalInfo) {

                                const sourceTurn = generalInfo.sourceTurn;
                                const buffSheet = sourceTurn.relicIseeSeesItSHEET;

                                const buffCheck = sourceTurn.buffsObject[buffSheet.buffName];

                                if (buffCheck) {
                                    const currentStacks = buffCheck.currentStacks;
                                    if (currentStacks === 1) {
                                        removeBuff(battleData,sourceTurn,buffCheck)
                                        return;
                                    }
                                    else {
                                        buffSheet.currentStacks = -1;
                                        updateBuff(battleData,sourceTurn,buffSheet);
                                    }
                                }
                                else {return;}
                            },
                            "target": "self",
                            "isPersonal": true,
                            "listenerName": "As Navigator Isee Sees It - turn start listener",
                        },
                        {
                            "trigger": "AllyDMGStart",
                            condition(battleData,generalInfo) {
                                let sourceTurn = generalInfo.sourceTurn;

                                let isValid = false;
                                const actionTags = generalInfo.ATKObject.actionTags ?? [];
                                for (let tag of actionTags) {
                                    if (tag === "Ultimate" || tag === "Skill") {
                                        isValid = true;
                                        break;
                                    }
                                }
                                // if (!isValid) {return;}

                                if (!sourceTurn.relicIseeSeesItSHEETREAL) {
                                    let relicNameRef = "As Navigator Isee Sees It";
                                    let pcRef = "4pc";
                                    const buffNames = this.buffNames ??= turnLogicRelics[relicNameRef][pcRef].buffNames;
                                    let relicPathing = this.relicPathing ??= relicSets[relicNameRef].params[1];//0-2pc 1-4pc
                                    sourceTurn.relicIseeSeesItSHEETREAL = {
                                        "stats": [DamageAll],
                                        [DamageAll]: relicPathing[1],
                                        "source": relicNameRef,
                                        "sourceOwner": currentTurn.properName,
                                        "buffName": buffNames.dmgBuffReal,
                                        "durationInTurn": null,
                                        "duration": 1,
                                        "AVApplied": 0,
                                        "maxStacks": 3,
                                        "currentStacks": 1,
                                        "decay": false,
                                        "expireType": null,
                                        "actionTags": ["All"],
                                    }
                                }
                                const buffSheet = sourceTurn.relicIseeSeesItSHEETREAL;

                                const stackSheet = sourceTurn.buffsObject[sourceTurn.relicIseeSeesItSHEET.buffName];
                                const stackCount = stackSheet.currentStacks;
        
                                const buffName = buffSheet.buffName;
                                const buffCheck = sourceTurn.buffsObject[buffName];
            
                                if (isValid) {//if this is valid dmg
                                    if (buffCheck) {//if we have the buff
                                        const currentStacks = buffCheck.currentStacks;
                                        if (currentStacks === stackCount) {return;}//if we're at the right stacks abort
                                        else if (stackCount > currentStacks) {//if we need more stacks, add em
                                            const stackDiff = stackCount - currentStacks;

                                            buffSheet.currentStacks = stackDiff;
                                            updateBuff(battleData,sourceTurn,buffSheet);
                                            return;
                                        }
                                        else {//if we have too many, remove em
                                            const stackDiff = stackCount - currentStacks;
                                            if (-stackDiff === currentStacks) {//if the amount removed would be equal to the total stack count overall, kill the whole thing
                                                removeBuff(battleData,sourceTurn,buffCheck);
                                                return;
                                            }

                                            buffSheet.currentStacks = stackDiff;
                                            updateBuff(battleData,sourceTurn,buffSheet);
                                            return;
                                        }
                                    }
                                    else if (stackCount) {//otherwise if we didn't have the buff yet, add it
                                        buffSheet.currentStacks = stackDiff;
                                        updateBuff(battleData,sourceTurn,buffSheet);
                                    }
                                }
                                else if (buffCheck) {//if it's not valid dmg, and we have the buff, kill it
                                    removeBuff(battleData,sourceTurn,buffCheck);
                                }
                            },
                            "target": "self",
                            "isPersonal": true,
                            "listenerName": "Navigator Ult/Skill DMG check",
                        },
                    ]
                },
                {
                    "trigger": "WaveStart",
                    condition(battleData,generalInfo) {
                        const currentWave = generalInfo.currentWave;
                        if (currentWave != 1) {return;}

                        let ownerRef = this.owners;

                        const namedTurns = battleData.nameBasedTurns;
                        for (let owner of ownerRef) {
                            let currentTurn = namedTurns[owner.slot];

                            if (!currentTurn.relicIseeSeesItSHEET) {
                                let relicNameRef = "As Navigator Isee Sees It";
                                let pcRef = "4pc";
                                const buffNames = this.buffNames ??= turnLogicRelics[relicNameRef][pcRef].buffNames;
                                let relicPathing = this.relicPathing ??= relicSets[relicNameRef].params[1];//0-2pc 1-4pc
                                currentTurn.relicIseeSeesItSHEET = {
                                    "stats": null,
                                    "source": relicNameRef,
                                    "sourceOwner": currentTurn.properName,
                                    "buffName": buffNames.dmgBuff,
                                    "durationInTurn": null,
                                    "duration": 1,
                                    "AVApplied": 0,
                                    "maxStacks": 3,
                                    "currentStacks": 1,
                                    "decay": false,
                                    "expireType": null,
                                }
                            }
                            const buffSheet = currentTurn.relicIseeSeesItSHEET;

                            updateBuff(battleData,currentTurn,buffSheet);
                        }
                    },
                    "target": "self",
                    "priority": 0,
                    "listenerName": "As Navigator Isee Sees It battlestart buff application",
                    "owners": []
                },
            ],
            "buffNames": {
                "dmgBuff": "As Navigator Isee Sees It (Stack Holder)",
                "dmgBuffReal": "As Navigator Isee Sees It (On-Hit Buff)",
            },
        }
    },
    "Divine-Querying Master Smith": {
        "2pc": {},
        "4pc": {
            logic(thisTurn,battleData) {},
            "skillFunctions": {},
            "listeners": [
                {
                    "trigger": "PassiveCalls",
                    condition(battleData,generalInfo) {
                        let ownerRef = this.owners;


                        const namedTurns = battleData.nameBasedTurns;
                        const subListeners = this.subListeners[0];
                        for (let owner of ownerRef) {
                            let charSlot = owner.slot;
                            let currentTurn = namedTurns[charSlot];

                            currentTurn.relicMasterSmithReadyToApply = true;

                            addListenerWithPriority(battleData,subListeners,subListeners.trigger,currentTurn);
                        }
                    },
                    "target": "self",
                    "listenerName": "Divine-Querying Master Smith - 4pc setup",
                    "owners": [],
                    "subListeners": [
                        {
                            "trigger": "AllyDMGStart",
                            condition(battleData,generalInfo) {
                                let targetTurn = generalInfo.targetTurn;

                                const isReducing = targetTurn.flags[DEF_DOWN];

                                let sourceTurn = generalInfo.sourceTurn;
        
                                if (!this.relicMasterSmithCRITSHEET) {
                                    let relicNameRef = "Divine-Querying Master Smith";
                                    let pcRef = "4pc";
                                    const buffNames = turnLogicRelics[relicNameRef][pcRef].buffNames;
                                    let relicPathing = this.relicPathing ??= relicSets[relicNameRef].params[1];//0-2pc 1-4pc
                                    this.relicMasterSmithCRITSHEET = {
                                        "stats": [CritDamageBase],
                                        [CritDamageBase]: 0.28,
                                        "source": relicNameRef,
                                        "sourceOwner": null,
                                        "buffName": buffNames.critBuff,
                                        "durationInTurn": null,
                                        "duration": 1,
                                        "AVApplied": 0,
                                        "maxStacks": 1,
                                        "currentStacks": 1,
                                        "decay": false,
                                        "expireType": null,
                                        "actionTags": ["All"],
                                    }
                                }
                                const buffSheet = this.relicMasterSmithCRITSHEET;
                                const buffName = buffSheet.buffName;

                                const buffCheck = sourceTurn.buffsObject[buffName];

                                if (buffCheck) {
                                    if (isReducing) {return;}
                                    removeBuff(battleData,sourceTurn,buffCheck)
                                }
                                else if (isReducing) {
                                    buffSheet.sourceOwner = sourceTurn.properName;
                                    updateBuff(battleData,sourceTurn,buffSheet)
                                }
                            },
                            "target": "self",
                            "isPersonal": true,
                            "listenerName": "Divine-Querying Master Smith - 4pc shredded listener",
                        },
                        {
                            "trigger": "AttackEnd",
                            condition(battleData,generalInfo) {

                                let sourceTurn = generalInfo.sourceTurn;
                                sourceTurn.relicMasterSmithReadyToApply = true;
                            },
                            "target": "self",
                            "isPersonal": true,
                            "listenerName": "Divine-Querying Master Smith - attack end litener",
                        },
                    ]
                },
                {
                    "trigger": "DebuffApplied",
                    condition(battleData,generalInfo) {
                        // let ownerRef = this.owners;
                        const sourceSheet = generalInfo.currentReference;
                        const source = sourceSheet.sourceOwner;
                        const ownerSlot = battleData.nameIndex[source];
    
                        let ownersSlots = this.ownersSlots;
                        let ownerRank = ownersSlots[ownerSlot];
                        if (!ownerRank) {return;}//if the debuff owner isn't an owner of the relic, abort early

                        const sheetFlags = sourceSheet.flags;
                        if (!sheetFlags) {return;}
                        let isReducing = false;
                        for (let flag of sheetFlags) {
                            if (flag === DEF_DOWN) {
                                isReducing = true;
                                break;
                            }
                        }
                        if (!isReducing) {return;}

                        const sourceTurn = generalInfo.sourceTurn?.[0] ?? generalInfo.sourceTurn;
                        if (!sourceTurn.isEnemy) {return;}//the debuff needs to be applied to an enemy entity

                        const ownerTurn = battleData.nameBasedTurns[ownerSlot];
                        if (!ownerTurn.relicMasterSmithReadyToApply) {return;}
                        ownerTurn.relicMasterSmithReadyToApply = false;

                        if (!this.relicMasterSmithSheet) {
                            let relicNameRef = "Divine-Querying Master Smith";
                            let pcRef = "4pc";
                            const buffNames = turnLogicRelics[relicNameRef][pcRef].buffNames;
                            let relicPathing = this.relicPathing ??= relicSets[relicNameRef].params[1];//0-2pc 1-4pc
                            this.relicMasterSmithSheet = {
                                "stats": [DamageAll],
                                [DamageAll]: 0.15,
                                "source": relicNameRef,
                                "sourceOwner": null,
                                "buffName": buffNames.comburent,
                                "durationInTurn": 3,
                                "duration": 2,
                                "AVApplied": 0,
                                "maxStacks": 1,
                                "currentStacks": 1,
                                "decay": false,
                                "expireType": "EndTurn"
                            }
                        }
                        const buffSheet = this.relicMasterSmithSheet;
                        buffSheet.sourceOwner = ownerTurn.properName;

                        const allyPositions = battleData.allyPositions;
                        updateBuffBatchTargets(battleData,allyPositions,buffSheet);
                    },
                    "target": "self",
                    "listenerName": "Divine-Querying Master Smith - debuffs applied check",
                    "owners": [],
                },
                
            ],
            "buffNames": {
                "comburent": "Comburent (Relic)",
                "critBuff": "Divine-Querying Master Smith",
            },
        }
    },


    //PLANAR SETS
    "Rutilant Arena": {//REDONE
        "2pc": {
            logic(thisTurn,battleData) {},
            "skillFunctions": {},
            "listeners": [
                {
                    "trigger": "PassiveCalls",
                    condition(battleData,generalInfo) {
                        let ownerRef = this.owners;

                        const namedTurns = battleData.nameBasedTurns;
                        const subListeners = this.subListeners;
                        for (let owner of ownerRef) {
                            let charSlot = owner.slot;
                            let currentTurn = namedTurns[charSlot];

                            addListenerWithPriority(battleData,subListeners[0],subListeners[0].trigger,currentTurn);
                        }
                    },
                    "target": "self",
                    "listenerName": "Rutilant Arena listener setup",
                    "owners": [],
                    "subListeners": [
                        {
                            "trigger": "AllyDMGStart",
                            condition(battleData,generalInfo) {
                                let sourceTurn = generalInfo.sourceTurn;

                                let isValid = false;
                                const actionTags = generalInfo.ATKObject.actionTags ?? [];
                                for (let tag of actionTags) {
                                    if (tag === "Basic" || tag === "Skill") {
                                        isValid = true;
                                        break;
                                    }
                                }
                                // if (!isValid) {return;}
        
                                if (!this.rutilantDMGbyCRITSHEET) {
                                    let relicNameRef = "Rutilant Arena";
                                    let buffName = turnLogicRelics[relicNameRef]["2pc"].buffNames;
                                    let relicPathing = relicSets[relicNameRef].params[0];//0-2pc 1-4pc
                                    this.rutilantDMGbyCRITSHEET = {
                                        "stats": [DamageAll],
                                        [DamageAll]: relicPathing[2],
                                        "source": relicNameRef,
                                        "sourceOwner": sourceTurn.properName,
                                        "buffName": buffName.basicSkillBuff,
                                        "durationInTurn": null,
                                        "duration": 1,
                                        "AVApplied": 0,
                                        "maxStacks": 1,
                                        "currentStacks": 1,
                                        "decay": false,
                                        "expireType": null,
                                        "actionTags": ["All"],
                                    }
                                }
                                let buffSheet = this.rutilantDMGbyCRITSHEET;
                                const buffName = buffSheet.buffName;
                                const buffCheck = sourceTurn.buffsObject[buffName];
            
                                //NOTE: this would include converted crit rate bonuses
                                if (isValid && sourceTurn.statTable[CritRateBase] >= 0.5) {//if the target has enough cr for the buff, then we can apply it
                                    if (buffCheck) {return;}//if the target already has the buff, skip, no need to "renew" perma buffs like this

                                    buffSheet.sourceOwner = sourceTurn.properName;
                                    updateBuff(battleData,sourceTurn,buffSheet);
                                }
                                else if (!isValid && buffCheck) {//but if the target fails the crit check and HAS the buff, then remove it
                                    removeBuff(battleData,sourceTurn,buffSheet);
                                }
                            },
                            "target": "self",
                            "isPersonal": true,
                            "listenerName": "Rutilant crit rate check",
                        },
                    ]
                },
            ],
            "buffNames": {
                "basicSkillBuff": "Rutilant Basic & Skill DMG",
            },
        }
    },
    "Inert Salsotto": {//REDONE
        "2pc": {
            logic(thisTurn,battleData) {},
            "skillFunctions": {},
            "listeners": [
                {
                    "trigger": "PassiveCalls",
                    condition(battleData,generalInfo) {
                        let ownerRef = this.owners;

                        const namedTurns = battleData.nameBasedTurns;
                        const subListeners = this.subListeners;
                        for (let owner of ownerRef) {
                            let charSlot = owner.slot;
                            let currentTurn = namedTurns[charSlot];

                            addListenerWithPriority(battleData,subListeners[0],subListeners[0].trigger,currentTurn);
                        }
                    },
                    "target": "self",
                    "listenerName": "Salsotto listener setup",
                    "owners": [],
                    "subListeners": [
                        {
                            "trigger": "AllyDMGStart",
                            condition(battleData,generalInfo) {
                                let sourceTurn = generalInfo.sourceTurn;

                                let isValid = false;
                                const actionTags = generalInfo.ATKObject.actionTags ?? [];
                                for (let tag of actionTags) {
                                    if (tag === "FUA" || tag === "Ultimate") {
                                        isValid = true;
                                        break;
                                    }
                                }
                                // if (!isValid) {return;}
        
                                if (!this.salsottoDMGbyCRITSHEET) {
                                    let relicNameRef = "Inert Salsotto";
                                    let buffName = turnLogicRelics[relicNameRef]["2pc"].buffNames;
                                    let relicPathing = relicSets[relicNameRef].params[0];//0-2pc 1-4pc
                                    this.salsottoDMGbyCRITSHEET = {
                                        "stats": [DamageAll],
                                        [DamageAll]: relicPathing[2],
                                        "source": relicNameRef,
                                        "sourceOwner": sourceTurn.properName,
                                        "buffName": buffName.basicSkillBuff,
                                        "durationInTurn": null,
                                        "duration": 1,
                                        "AVApplied": 0,
                                        "maxStacks": 1,
                                        "currentStacks": 1,
                                        "decay": false,
                                        "expireType": null,
                                        "actionTags": ["All"],
                                    }
                                }
                                let buffSheet = this.salsottoDMGbyCRITSHEET;
                                const buffName = buffSheet.buffName;
                                const buffCheck = sourceTurn.buffsObject[buffName];
            
                                //NOTE: this would include converted crit rate bonuses
                                if (isValid && sourceTurn.statTable[CritRateBase] >= 0.5) {//if the target has enough cr for the buff, then we can apply it
                                    if (buffCheck) {return;}//if the target already has the buff, skip, no need to "renew" perma buffs like this

                                    buffSheet.sourceOwner = sourceTurn.properName;
                                    updateBuff(battleData,sourceTurn,buffSheet);
                                }
                                else if (!isValid && buffCheck) {//but if the target fails the crit check and HAS the buff, then remove it
                                    removeBuff(battleData,sourceTurn,buffSheet);
                                }
                            },
                            "target": "self",
                            "isPersonal": true,
                            "listenerName": "Salsotto crit rate check",
                        },
                    ]
                },
            ],
            "buffNames": {
                "basicSkillBuff": "Salsotto Ult/FUA DMG",
            },
        }
    },
    "Broken Keel": {//REDONE
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
                            "durationInTurn": null,
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
                    const allAlliesArray = battleData.allAlliesArray;

                    //NOTE: this DOES include converted effect res, if it ever exists somehow in some weird fuck character in the future.
                    if (currentTurn.statTable[EffectRES] >= 0.3) {//if the target has enough, then we can apply it
                        if (buffCheck) {return;}//if they already have it, then abort

                        updateBuffBatchTargets(battleData,allAlliesArray,buffSheet);
                    }
                    else if (buffCheck) {//but if they don't have enough, but have the buff, then remove it
                        removeBuffFromBatch(battleData,allAlliesArray,buffCheck);
                    }
                }
            },
            "listeners": [
                {
                    "trigger": "PassiveCalls",
                    condition(battleData,generalInfo) {
                        let ownerRef = this.owners;

                        const namedTurns = battleData.nameBasedTurns;
                        const subListeners = this.subListeners;
                        for (let owner of ownerRef) {
                            let charSlot = owner.slot;
                            let currentTurn = namedTurns[charSlot];

                            addListenerWithPriority(battleData,subListeners[0],subListeners[0].trigger,currentTurn);
                        }
                    },
                    "target": "self",
                    "listenerName": "Broken Keel listener setup",
                    "owners": [],
                    "subListeners": [
                        {
                            "trigger": "UpdateStatEffectRES",
                            condition(battleData,generalInfo) {
                                let sourceTurn = generalInfo.sourceTurn;
        
                                const statCheck = this.statCheck ??= turnLogicRelics["Broken Keel"]["2pc"].skillFunctions.statCheck;
                                statCheck(battleData,sourceTurn);
                            },
                            "target": "self",
                            "isPersonal": true,
                            "listenerName": "Broken Keel Effect RES check",
                        },
                    ]
                },
                {
                    "trigger": "WaveStart",
                    condition(battleData,generalInfo) {
                        const currentWave = generalInfo.currentWave;
                        if (currentWave != 1) {return;}

                        let ownerRef = this.owners;

                        const statCheck = this.statCheck ??= turnLogicRelics["Broken Keel"]["2pc"].skillFunctions.statCheck;

                        const namedTurns = battleData.nameBasedTurns;
                        const subListeners = this.subListeners;
                        for (let owner of ownerRef) {
                            let charSlot = owner.slot;
                            let currentTurn = namedTurns[charSlot];

                            statCheck(battleData,currentTurn);
                        }
                    },
                    "target": "self",
                    "priority": -80,
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
    "Lushaka, the Sunken Seas": {//REDONE
        "2pc": {
            logic(thisTurn,battleData) {},
            "skillFunctions": {},
            "listeners": [
                {
                    "trigger": "WaveStart",
                    condition(battleData,generalInfo) {
                        const currentWave = generalInfo.currentWave;
                        if (currentWave != 1) {return;}

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

                            this.buffSheet = {
                                "stats": [ATKP],
                                [ATKP]: values,
                                "source": relicNameRef,
                                "sourceOwner": "",//TODO: circle back here and loop through all owners of 2pc lushaka so assign sourceOwners
                                "buffName": buffName,
                                "durationInTurn": null,
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
                        updateBuff(battleData,firstTurn,buffSheet);
                    },
                    "target": "self",
                    "priority": -80,
                    "listenerName": "Lushaka, the Sunken Seas battle start stat check trigger",
                    "owners": []
                },
            ],
            "buffNames": {
                "basicSkillBuff": "Lushaka ATK%",
            },
        }
    },
    "Penacony, Land of the Dreams": {//REDONE
        "2pc": {
            logic(thisTurn,battleData) {},
            "skillFunctions": {},
            "listeners": [
                {
                    "trigger": "WaveStart",
                    condition(battleData,generalInfo) {
                        const currentWave = generalInfo.currentWave;
                        if (currentWave != 1) {return;}

                        let ownerRef = this.owners;

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
                                "durationInTurn": null,
                                "duration": 1,
                                "AVApplied": 0,
                                "maxStacks": 3,//not that 4 would ever technically be possible bc the user can't self apply, so we say 3 for now as a cap
                                "currentStacks": 1,
                                "decay": false,
                                "expireType": null
                            }
                        }
                        let buffSheet = this.buffSheet

                        // const allyPositions = battleData.allyPositions;
                        const namedTurns = battleData.nameBasedTurns;
                        const allyArray = battleData.allAlliesArray;
                        for (let owner of ownerRef) {
                            let currentTurn = namedTurns[owner.slot];
                            let ownerElement = currentTurn.element;
                            // element: charEntryTemp.element,

                            for (let targetTurn of allyArray) {
                                if (targetTurn.name === currentTurn.name) {continue}//penacony can't apply to the owner, only everyone BUT the owner, that matches

                                let newElement = targetTurn.element;
                                if (newElement != ownerElement) {continue;}//only give a bonus to those matching the same element as the owner
                                buffSheet.sourceOwner = currentTurn.properName;
                                updateBuff(battleData,targetTurn,buffSheet);
                            }
                        }
                    },
                    "target": "self",
                    "priority": -80,
                    "listenerName": "Penacony, Land of the Dreams battle start stat check trigger",
                    "owners": []
                },
            ],
            "buffNames": {
                "basicSkillBuff": "Penacony DMG Boost",
            },
        }
    },
    "Sprightly Vonwacq": {//REDONE
        "2pc": {
            logic(thisTurn,battleData) {},
            "skillFunctions": {},
            "listeners": [
                {
                    "trigger": "WaveStart",
                    condition(battleData,generalInfo) {
                        const currentWave = generalInfo.currentWave;
                        if (currentWave != 1) {return;}

                        let ownerRef = this.owners;
                        let relicNameRef = "Sprightly Vonwacq";
                        let amount = 0.40;

                        const namedTurns = battleData.nameBasedTurns;
                        for (let owner of ownerRef) {
                            let currentTurn = namedTurns[owner.slot];
                            if (currentTurn.SPD >= 120) {
                                actionAdvance(amount,currentTurn,battleData,relicNameRef);
                            }
                        }
                    },
                    "target": "self",
                    "priority": -80,
                    "listenerName": "Sprightly Vonwacq start stat check trigger",
                    "owners": []
                },
            ],
            "buffNames": {},
        }
    },
    "Forge of the Kalpagni Lantern": {//REDONE
        "2pc": {
            logic(thisTurn,battleData) {},
            "skillFunctions": {},
            "listeners": [
                {
                    "trigger": "PassiveCalls",
                    condition(battleData,generalInfo) {
                        let ownerRef = this.owners;

                        const namedTurns = battleData.nameBasedTurns;
                        const subListeners = this.subListeners;
                        for (let owner of ownerRef) {
                            let charSlot = owner.slot;
                            let currentTurn = namedTurns[charSlot];

                            currentTurn.relicKalpagniReady = true;

                            addListenerWithPriority(battleData,subListeners[0],subListeners[0].trigger,currentTurn);
                            addListenerWithPriority(battleData,subListeners[1],subListeners[1].trigger,currentTurn);
                        }
                    },
                    "target": "self",
                    "listenerName": "Forge of the Kalpagni Lantern listener setup",
                    "owners": [],
                    "subListeners": [
                        {
                            "trigger": "HitEnemyEnd",
                            condition(battleData,generalInfo) {
                                let sourceTurn = generalInfo.sourceTurn;
                                if (!sourceTurn.relicKalpagniReady) {return;}
        
                                const targetTurn = generalInfo.targetTurn;
                                if (!targetTurn.statTable[WeaknessFire]) {return;}//we only need one fire weakness in the hit to get it
        
                                if (!this.forgeKalpagniBREAKSHEET) {
                                    let relicNameRef = "Forge of the Kalpagni Lantern";
                                    let relicPathing = this.relicPathing ??= relicSets[relicNameRef].params[0];//0-2pc 1-4pc
                                    let buffName = this.buffName ??= turnLogicRelics[relicNameRef]["2pc"].buffNames.basicSkillBuff;
                                    let values = relicPathing[1];
                                    this.forgeKalpagniBREAKSHEET = {
                                        "stats": [DamageBreak],
                                        [DamageBreak]: values,
                                        "source": relicNameRef,
                                        "sourceOwner": sourceTurn.properName,
                                        "buffName": buffName,
                                        "durationInTurn": 2,
                                        "duration": 1,
                                        "AVApplied": 0,
                                        "maxStacks": 1,
                                        "currentStacks": 1,
                                        "decay": false,
                                        "expireType": "EndTurn"
                                    }
                                }
                            
                                let buffSheet = this.forgeKalpagniBREAKSHEET;
                                buffSheet.sourceOwner = sourceTurn.properName;
        
                                updateBuff(battleData,sourceTurn,buffSheet);
                                sourceTurn.relicKalpagniReady = false;
                            },
                            "target": "self",
                            "isPersonal": true,
                            "listenerName": "Kalpagni weakness check",
                        },
                        {
                            "trigger": "AttackDMGEnd",
                            condition(battleData,generalInfo) {
                                let sourceTurn = generalInfo.sourceTurn;

                                sourceTurn.relicKalpagniReady = true;
                            },
                            "target": "self",
                            "isPersonal": true,
                            "listenerName": "Kalpagni attack end hit listen reset",
                        },
                    ]
                },
            ],
            "buffNames": {
                "basicSkillBuff": "Forge of the Kalpagni Lantern",
            },
        }
    },
    "Belobog of the Architects": {//REDONE
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
                            "durationInTurn": null,
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
                        updateBuff(battleData,currentTurn,buffSheet);

                    }
                    else if (buffCheck) {//but if the target fails the crit check and HAS the buff, then remove it
                        removeBuff(battleData,currentTurn,buffSheet);
                    }
                }
            },
            "listeners": [
                {
                    "trigger": "PassiveCalls",
                    condition(battleData,generalInfo) {
                        let ownerRef = this.owners;

                        const statCheck = this.statCheck ??= turnLogicRelics["Belobog of the Architects"]["2pc"].skillFunctions.statCheck;

                        const namedTurns = battleData.nameBasedTurns;
                        const subListeners = this.subListeners;
                        for (let owner of ownerRef) {
                            let charSlot = owner.slot;
                            let currentTurn = namedTurns[charSlot];

                            statCheck(battleData,currentTurn);

                            addListenerWithPriority(battleData,subListeners[0],subListeners[0].trigger,currentTurn);
                        }
                    },
                    "target": "self",
                    "listenerName": "Belobog of the Architects listener setup",
                    "owners": [],
                    "subListeners": [
                        {
                            "trigger": "UpdateStatEffectHitRate",//EffectHitRate stat family
                            condition(battleData,generalInfo) {
                                let sourceTurn = generalInfo.sourceTurn;
        
                                const statCheck = this.statCheck ??= turnLogicRelics["Belobog of the Architects"]["2pc"].skillFunctions.statCheck;
                                statCheck(battleData,sourceTurn);
                            },
                            "target": "self",
                            "isPersonal": true,
                            "listenerName": "Belobog of the Architects EHR check",
                        },
                    ]
                },
            ],
            "buffNames": {
                "defBuff": "Belobog of the Architects",
            },
        }
    },
    "Talia: Kingdom of Banditry": {//REDONE
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
                            "durationInTurn": null,
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
                        updateBuff(battleData,currentTurn,buffSheet);

                    }
                    else if (buffCheck) {//but if the target fails the crit check and HAS the buff, then remove it
                        removeBuff(battleData,currentTurn,buffSheet);
                    }
                }
            },
            "listeners": [
                {
                    "trigger": "PassiveCalls",
                    condition(battleData,generalInfo) {
                        let ownerRef = this.owners;

                        const statCheck = this.statCheck ??= turnLogicRelics["Talia: Kingdom of Banditry"]["2pc"].skillFunctions.statCheck;

                        const namedTurns = battleData.nameBasedTurns;
                        const subListeners = this.subListeners;
                        for (let owner of ownerRef) {
                            let charSlot = owner.slot;
                            let currentTurn = namedTurns[charSlot];

                            statCheck(battleData,currentTurn);

                            addListenerWithPriority(battleData,subListeners[0],subListeners[0].trigger,currentTurn);
                        }
                    },
                    "target": "self",
                    "listenerName": "Talia: Kingdom of Banditry listener setup",
                    "owners": [],
                    "subListeners": [
                        {
                            "trigger": "UpdateStatSPD",//SPD stat family
                            condition(battleData,generalInfo) {
                                let sourceTurn = generalInfo.sourceTurn;
        
                                const statCheck = this.statCheck ??= turnLogicRelics["Talia: Kingdom of Banditry"]["2pc"].skillFunctions.statCheck;
                                statCheck(battleData,sourceTurn);
                            },
                            "target": "self",
                            "isPersonal": true,
                            "listenerName": "Talia: Kingdom of Banditry SPD check",
                        },
                    ]
                },
            ],
            "buffNames": {
                "breakBuff": "Talia: Kingdom of Banditry",
            },
        }
    },
    "Space Sealing Station": {//REDONE
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
                            "durationInTurn": null,
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
                        updateBuff(battleData,currentTurn,buffSheet);

                    }
                    else if (buffCheck) {//but if the target fails the crit check and HAS the buff, then remove it
                        removeBuff(battleData,currentTurn,buffSheet);
                    }
                }
            },
            "listeners": [
                {
                    "trigger": "PassiveCalls",
                    condition(battleData,generalInfo) {
                        let ownerRef = this.owners;

                        const statCheck = this.statCheck ??= turnLogicRelics["Space Sealing Station"]["2pc"].skillFunctions.statCheck;

                        const namedTurns = battleData.nameBasedTurns;
                        const subListeners = this.subListeners;
                        for (let owner of ownerRef) {
                            let charSlot = owner.slot;
                            let currentTurn = namedTurns[charSlot];

                            statCheck(battleData,currentTurn);

                            addListenerWithPriority(battleData,subListeners[0],subListeners[0].trigger,currentTurn);
                        }
                    },
                    "target": "self",
                    "listenerName": "Space Sealing Station listener setup",
                    "owners": [],
                    "subListeners": [
                        {
                            "trigger": "UpdateStatSPD",//SPD stat family
                            condition(battleData,generalInfo) {
                                let sourceTurn = generalInfo.sourceTurn;
        
                                const statCheck = this.statCheck ??= turnLogicRelics["Space Sealing Station"]["2pc"].skillFunctions.statCheck;
                                statCheck(battleData,sourceTurn);
                            },
                            "target": "self",
                            "isPersonal": true,
                            "listenerName": "Space Sealing Station SPD check",
                        },
                    ]
                },
            ],
            "buffNames": {
                "atkBuff": "Space Sealing Station",
            },
        }
    },
    "Fleet of the Ageless": {//REDONE
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
                            "durationInTurn": null,
                            "duration": 1,
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
                    const allyArray = battleData.allAlliesArray;
                    if (currentTurn.SPD >= 120) {//if the target has enough, then we can apply it
                        if (buffCheck) {return;}//if they already have it, then abort

                        updateBuffBatchTargets(battleData,allyArray,buffSheet);
                    }
                    else if (buffCheck) {//but if they don't have enough, but have the buff, then remove it
                        removeBuffFromBatch(battleData,allyArray,buffCheck);
                    }
                }
            },
            "listeners": [
                {
                    "trigger": "PassiveCalls",
                    condition(battleData,generalInfo) {
                        let ownerRef = this.owners;

                        const namedTurns = battleData.nameBasedTurns;
                        const subListeners = this.subListeners;
                        for (let owner of ownerRef) {
                            let charSlot = owner.slot;
                            let currentTurn = namedTurns[charSlot];

                            addListenerWithPriority(battleData,subListeners[0],subListeners[0].trigger,currentTurn);
                        }
                    },
                    "target": "self",
                    "listenerName": "Fleet of the Ageless listener setup",
                    "owners": [],
                    "subListeners": [
                        {
                            "trigger": "UpdateStatSPD",
                            condition(battleData,generalInfo) {
                                let sourceTurn = generalInfo.sourceTurn;

                                const statCheck = this.statCheck ??= turnLogicRelics["Fleet of the Ageless"]["2pc"].skillFunctions.statCheck;
                                statCheck(battleData,sourceTurn);
                            },
                            "target": "self",
                            "isPersonal": true,
                            "listenerName": "Fleet of the Ageless SPD check",
                        },
                    ]
                },
                {
                    "trigger": "WaveStart",
                    condition(battleData,generalInfo) {
                        const currentWave = generalInfo.currentWave;
                        if (currentWave != 1) {return;}

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
                    "priority": -80,
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
    "Izumo Gensei and Takama Divine Realm": {//REDONE (sort of)
        "2pc": {
            logic(thisTurn,battleData) {},
            "skillFunctions": {},
            "listeners": [
                {
                    "trigger": "WaveStart",
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
                            "durationInTurn": null,
                            "duration": 1,
                            "AVApplied": 0,
                            "maxStacks": 1,
                            "currentStacks": 1,
                            "decay": false,
                            "expireType": null
                        }

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
                    "priority": -80,
                    "listenerName": "Izumo Gensei and Takama Divine Realm battle start stat check trigger",
                    "owners": []
                },
            ],
            "buffNames": {
                "critBuff": "Izumo Gensei and Takama Divine Realm",
            },
        }
    },
    "Bone Collection's Serene Demesne": {//REDONE
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
                            "durationInTurn": null,
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
                    "trigger": "PassiveCalls",
                    condition(battleData,generalInfo) {
                        let ownerRef = this.owners;

                        const statCheck = this.statCheck ??= turnLogicRelics["Bone Collection's Serene Demesne"]["2pc"].skillFunctions.statCheck;

                        const namedTurns = battleData.nameBasedTurns;
                        const subListeners = this.subListeners;
                        for (let owner of ownerRef) {
                            let charSlot = owner.slot;
                            let currentTurn = namedTurns[charSlot];

                            statCheck(battleData,currentTurn);

                            addListenerWithPriority(battleData,subListeners[0],subListeners[0].trigger,currentTurn);
                        }
                    },
                    "target": "self",
                    "listenerName": "Bone Collection's Serene Demesne listener setup",
                    "owners": [],
                    "subListeners": [
                        {
                            "trigger": "UpdateStatHP",//HP stat family
                            condition(battleData,generalInfo) {
                                let sourceTurn = generalInfo.sourceTurn;
        
                                const statCheck = this.statCheck ??= turnLogicRelics["Bone Collection's Serene Demesne"]["2pc"].skillFunctions.statCheck;
                                statCheck(battleData,sourceTurn);
                            },
                            "target": "self",
                            "isPersonal": true,
                            "listenerName": "Bone Collection's Serene Demesne HP check",
                        },
                    ]
                },
            ],
            "buffNames": {
                "critDMGBuff": "Bone Collection's Serene Demesne",
            },
        }
    },
    //TODO: this does NOT actually listen for dynamic changes in EHR, but rather only compares EHR on every turn start/end, and ability start/end from ANYONE
    //wouldn't conflict with something like welt LC bc ability start from the lc is owner, and this relic is anyone after
    //for the time being though I will leave it as adjusted by dynamic bonuses in EHR, bc doing it how it actually works is ass and I can't think of anything
    //that exists in the game that would actually require this relic's 1:1 functionality
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
                            "durationInTurn": null,
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
                    let conversion = +(Math.min(0.25,currentEHR * 0.25)).toFixed(7);;//atk converted by 25% of EHR, up to a max of 25%
                    //also if this is anything like tingyun's benediction(and it is like that), then this amount is not null ATK, can be used in conversions
                    //confirmed this is not converted attack


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
                    
                    updateBuff(battleData,currentTurn,buffSheet);
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

                        const statCheck = this.statCheck ??= turnLogicRelics["Pan-Cosmic Commercial Enterprise"]["2pc"].skillFunctions.statCheck;
                        statCheck(battleData,sourceTurn);
                    },
                    "target": "self",
                    // "isPersonal": true,
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
    "Celestial Differentiator": {//REDONE
        "2pc": {
            logic(thisTurn,battleData) {},
            "skillFunctions": {},
            "listeners": [
                {
                    "trigger": "PassiveCalls",
                    condition(battleData,generalInfo) {
                        let ownerRef = this.owners;

                        const namedTurns = battleData.nameBasedTurns;
                        const subListeners = this.subListeners;
                        for (let owner of ownerRef) {
                            let charSlot = owner.slot;
                            let currentTurn = namedTurns[charSlot];

                            addListenerWithPriority(battleData,subListeners[0],subListeners[0].trigger,currentTurn);
                        }
                    },
                    "target": "self",
                    "listenerName": "Celestial Differentiator listener setup",
                    "owners": [],
                    "subListeners": [
                        {
                            "trigger": "AttackDMGEnd",
                            condition(battleData,generalInfo) {
                                let sourceTurn = generalInfo.sourceTurn;
        
                                let buffName = this.buffName ??= turnLogicRelics["Celestial Differentiator"]["2pc"].buffNames.critBuff;
                                let buffCheck = sourceTurn.buffsObject[buffName];
                                if (buffCheck) {
                                    removeBuff(battleData,sourceTurn,buffCheck);
                                    removeListener(battleData,this,sourceTurn);
                                }
                            },
                            "target": "self",
                            "isPersonal": true,
                            "listenerName": "Celestial Differentiator attack end listener",
                        },
                    ]
                },
                {
                    "trigger": "WaveStart",
                    condition(battleData,generalInfo) {
                        const currentWave = generalInfo.currentWave;
                        if (currentWave != 1) {return;}

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
                            "durationInTurn": null,
                            "duration": 1,//custom removal
                            "AVApplied": 0,
                            "maxStacks": 1,
                            "currentStacks": 1,
                            "decay": false,
                            "expireType": null
                        }

                        let ownersSlots = this.ownersSlots;
                        const namedTurns = battleData.nameBasedTurns;

                        for (let ally in ownersSlots) {
                            let currentTurn = namedTurns[ally];

                            const critDMG = currentTurn.statTable[CritDamageBase];
                            if (critDMG < 1.2) {continue;}
                            buffSheet.sourceOwner = currentTurn.properName;
                            updateBuff(battleData,currentTurn,buffSheet);
                        }
                    },
                    "target": "self",
                    "priority": -80,
                    "listenerName": "Celestial Differentiator battlestart CritDMG check",
                    "owners": [],
                    "ownersSlots": {}
                },
            ],
            "buffNames": {
                "critBuff": "Celestial Differentiator",
            },
        }
    },
    "Duran, Dynasty of Running Wolves": {//REDONE (sort of)
        "2pc": {
            logic(thisTurn,battleData) {},
            "skillFunctions": {},
            "listeners": [
                {
                    "trigger": "PassiveCalls",
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
                    "trigger": "AttackStart",
                    condition(battleData,generalInfo) {
                        let sourceTurn = generalInfo.sourceTurn;
                        if (sourceTurn.isEnemy) {return;}

                        let isFUA = false;
                        const actionTags = generalInfo.ATKObject.actionTags;
                        for (let tag of actionTags) {
                            if (tag === "FUA") {
                                isFUA = true;
                                break;
                            }
                        }
                        if (!isFUA) {return;}

                        if (!this.duranDynastyMERITSHEET) {
                            let relicNameRef = "Duran, Dynasty of Running Wolves";
                            let pcRef = "2pc";
                            let relicPathing = this.relicPathing ??= relicSets[relicNameRef].params[0];//0-2pc 1-4pc
                            const buffRef = this.buffRef ??= turnLogicRelics[relicNameRef][pcRef].buffNames;
                            let buffName = buffRef.dmgBuff;
                            let buffName2 = buffRef.critBuff;

                            this.duranDynastyMERITSHEET = {
                                "stats": [DamageAll],
                                [DamageAll]: relicPathing[1],
                                "source": relicNameRef,
                                "sourceOwner": null,
                                "buffName": buffName,
                                "durationInTurn": null,
                                "duration": 1,
                                "AVApplied": 0,
                                "maxStacks": 5,
                                "currentStacks": 1,
                                "decay": false,
                                "expireType": null,
                                "actionTags": ["FUA"],
                            }
                            this.duranDynastyCRITDMGSHEET = {
                                "stats": [CritDamageBase],
                                [CritDamageBase]: relicPathing[2],
                                "source": relicNameRef,
                                "sourceOwner": null,
                                "buffName": buffName2,
                                "durationInTurn": null,
                                "duration": 1,
                                "AVApplied": 0,
                                "maxStacks": 1,
                                "currentStacks": 1,
                                "decay": false,
                                "expireType": null
                            }
                        }

                        let ownerRef = this.owners;
                        const namedTurns = battleData.nameBasedTurns;

                        for (let owner of ownerRef) {
                            let charSlot = owner.slot;
                            let currentTurn = namedTurns[charSlot];
                            if (currentTurn.duranDynastyStacksFinished) {continue;}

                            let buffSheet = this.duranDynastyMERITSHEET;
                            buffSheet.sourceOwner = currentTurn.properName;
                        
                            updateBuff(battleData,currentTurn,buffSheet);
                            const buffCheck = currentTurn.buffsObject[buffSheet.buffName];

                            if (buffCheck.currentStacks === 5) {
                                let buffSheet2 = this.duranDynastyCRITDMGSHEET;
                                buffSheet2.sourceOwner = currentTurn.properName;
                                updateBuff(battleData,currentTurn,buffSheet2);
                                const tempLogic = battleData.battleLogicTemp;
                                const duranRef = tempLogic.duranDynastyValues;
                                duranRef.completed += 1;
                                currentTurn.duranDynastyStacksFinished = true;

                                if (duranRef.completed === duranRef.total) {
                                    //when all owners have completed, remove the listener so it's not constantly checking for shit
                                    removeListener(battleData,this,currentTurn);
                                    break;//kill the loop at this point
                                }
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
    //TODO: later tweak for the sake of the super happy funtime evernight bullshit
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
                                "durationInTurn": null,
                                "duration": 1,
                                "AVApplied": 0,
                                "maxStacks": 10,
                                "currentStacks": 1,
                                "decay": false,
                                "expireType": null
                            }
                        }
                        let buffSheet = this.sigoniaDesolationCRITDMGSHEET;
                        
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
                            removeListener(battleData,this,null);
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
    "Firmament Frontline: Glamoth": {//REDONE
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
                            "durationInTurn": null,
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
                            "durationInTurn": null,
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
                    const buffCheck2 = buffsObject[buffName2];
                    if (currentTurn.SPD >= 160) {//if the target has enough cr for the buff, then we can apply it
                        if (!buffCheck2) {
                            updateBuff(battleData,currentTurn,buffSheet2);
                        }//if the target already has the buff, skip, no need to "renew" perma buffs like this
                        else {return;}
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
                        else {return;}
                    }
                    else if (buffCheck) {//but if the target fails the crit check and HAS the buff, then remove it
                        removeBuff(battleData,currentTurn,buffSheet);
                    }
                }
            },
            "listeners": [
                {
                    "trigger": "PassiveCalls",
                    condition(battleData,generalInfo) {
                        let ownerRef = this.owners;

                        const namedTurns = battleData.nameBasedTurns;
                        const subListeners = this.subListeners;

                        const statCheck = this.statCheck ??= turnLogicRelics["Firmament Frontline: Glamoth"]["2pc"].skillFunctions.statCheck;
                        for (let owner of ownerRef) {
                            let charSlot = owner.slot;
                            let currentTurn = namedTurns[charSlot];
                            statCheck(battleData,currentTurn);

                            addListenerWithPriority(battleData,subListeners[0],subListeners[0].trigger,currentTurn);
                        }
                    },
                    "target": "self",
                    "listenerName": "Firmament Frontline: Glamoth listener setup",
                    "owners": [],
                    "subListeners": [
                        {
                            "trigger": "UpdateStatSPD",//SPD stat family
                            condition(battleData,generalInfo) {
                                let sourceTurn = generalInfo.sourceTurn;
        
                                const statCheck = this.statCheck ??= turnLogicRelics["Firmament Frontline: Glamoth"]["2pc"].skillFunctions.statCheck;
                                statCheck(battleData,sourceTurn);
                            },
                            "target": "self",
                            "isPersonal": true,
                            "listenerName": "Firmament Frontline: Glamoth SPD check",
                        },
                    ]
                },
            ],
            "buffNames": {
                "dmg1": "Firmament Frontline: Glamoth (135)",
                "dmg2": "Firmament Frontline: Glamoth (160)",
            },
        }
    },
    "Giant Tree of Rapt Brooding": {//REDONE
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
                            "durationInTurn": null,
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
                            "durationInTurn": null,
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

                    if (SPDFinal >= 180) {//if the target has enough cr for the buff, then we can apply it
                        if (!buffCheck2) {
                            updateBuff(battleData,currentTurn,buffSheet2);
                            if (memoRef) {updateBuff(battleData,currentTurn[memoRef],buffSheet2);}
                        }//if the target already has the buff, skip, no need to "renew" perma buffs like this
                        else {return;}
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
                        else {return;}
                    }
                    else if (buffCheck) {//but if the target fails the crit check and HAS the buff, then remove it
                        removeBuff(battleData,currentTurn,buffSheet);
                        if (memoRef) {removeBuff(battleData,currentTurn[memoRef],buffSheet);}
                    }
                }
            },
            "listeners": [
                {
                    "trigger": "PassiveCalls",
                    condition(battleData,generalInfo) {
                        let ownerRef = this.owners;

                        const namedTurns = battleData.nameBasedTurns;
                        const subListeners = this.subListeners;

                        const statCheck = this.statCheck ??= turnLogicRelics["Giant Tree of Rapt Brooding"]["2pc"].skillFunctions.statCheck;
                        for (let owner of ownerRef) {
                            let charSlot = owner.slot;
                            let currentTurn = namedTurns[charSlot];
                            statCheck(battleData,currentTurn);

                            addListenerWithPriority(battleData,subListeners[0],subListeners[0].trigger,currentTurn);
                        }
                    },
                    "target": "self",
                    "listenerName": "Giant Tree of Rapt Brooding listener setup",
                    "owners": [],
                    "subListeners": [
                        {
                            "trigger": "UpdateStatSPD",//SPD stat family
                            condition(battleData,generalInfo) {
                                let sourceTurn = generalInfo.sourceTurn;

                                const statCheck = this.statCheck ??= turnLogicRelics["Giant Tree of Rapt Brooding"]["2pc"].skillFunctions.statCheck;
                                statCheck(battleData,sourceTurn);
                            },
                            "target": "self",
                            "isPersonal": true,
                            "listenerName": "Giant Tree of Rapt Brooding SPD check",
                        },
                    ]
                },
            ],
            "buffNames": {
                "dmg1": "Giant Tree of Rapt Brooding (135)",
                "dmg2": "Giant Tree of Rapt Brooding (180)",
            },
        }
    },
    "Revelry by the Sea": {//REDONE
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
                            "stats": [DamageAll],
                            [DamageAll]: buff1,
                            "source": relicNameRef,
                            "sourceOwner": currentTurn.properName,
                            "buffName": buffName,
                            "durationInTurn": null,
                            "duration": 1,
                            "AVApplied": 0,
                            "maxStacks": 1,
                            "currentStacks": 1,
                            "decay": false,
                            "expireType": null,
                            "actionTags": ["DOT"],
                        }
                        currentTurn.revelryByTheSeaDMG2SHEET = {
                            "stats": [DamageAll],
                            [DamageAll]: buff2,
                            "source": relicNameRef,
                            "sourceOwner": currentTurn.properName,
                            "buffName": buffName2,
                            "durationInTurn": null,
                            "duration": 1,
                            "AVApplied": 0,
                            "maxStacks": 1,
                            "currentStacks": 1,
                            "decay": false,
                            "expireType": null,
                            "actionTags": ["DOT"],
                        }
                    }
                    
                    let buffSheet2 = currentTurn.revelryByTheSeaDMG2SHEET;
                    const buffName2 = buffSheet2.buffName;
                    const buffsObject = currentTurn.buffsObject;
                    const buffCheck2 = buffsObject[buffName2];
                    const atkFinal = calcs.getATKFinal(currentTurn.statTable).ATKFinal;
                    if (atkFinal >= 3600) {//if the target has enough cr for the buff, then we can apply it
                        if (!buffCheck2) {
                            updateBuff(battleData,currentTurn,buffSheet2);
                        }//if the target already has the buff, skip, no need to "renew" perma buffs like this
                        else {return;}
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
                        else {return;}
                    }
                    else if (buffCheck) {//but if the target fails the crit check and HAS the buff, then remove it
                        removeBuff(battleData,currentTurn,buffSheet);
                    }
                }
            },
            "listeners": [
                {
                    "trigger": "PassiveCalls",
                    condition(battleData,generalInfo) {
                        let ownerRef = this.owners;

                        const namedTurns = battleData.nameBasedTurns;
                        const subListeners = this.subListeners;

                        const statCheck = this.statCheck ??= turnLogicRelics["Revelry by the Sea"]["2pc"].skillFunctions.statCheck;
                        for (let owner of ownerRef) {
                            let charSlot = owner.slot;
                            let currentTurn = namedTurns[charSlot];
                            statCheck(battleData,currentTurn);

                            addListenerWithPriority(battleData,subListeners[0],subListeners[0].trigger,currentTurn);
                        }
                    },
                    "target": "self",
                    "listenerName": "Revelry by the Sea listener setup",
                    "owners": [],
                    "subListeners": [
                        {
                            "trigger": "UpdateStatATK",//ATK stat family
                            condition(battleData,generalInfo) {
                                let sourceTurn = generalInfo.sourceTurn;

                                const statCheck = this.statCheck ??= turnLogicRelics["Revelry by the Sea"]["2pc"].skillFunctions.statCheck;
                                statCheck(battleData,sourceTurn);
                            },
                            "target": "self",
                            "isPersonal": true,
                            "listenerName": "Revelry by the Sea ATK check",
                        },
                    ]
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
                                "durationInTurn": null,
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
                            updateBuff(battleData,summonAssignedTo,buffSheet);
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
                                "durationInTurn": null,
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
                                "durationInTurn": null,
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
                                "durationInTurn": null,
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
                                "durationInTurn": null,
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
                                "durationInTurn": null,
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

                        const currentActiveMemosprites = summonAssignedTo.activeMemosprites;

                        if (currentActiveMemosprites) {
                            if (buffCheck) {return;}//if the buff already exists, abort

                            const allyArray = battleData.allAlliesArray;
                            updateBuffBatchTargets(battleData,allyArray,buffSheet);

                        }
                        else if (!currentActiveMemosprites && buffCheck) {//only remove the buff if it already existed

                            const allyArray = battleData.allAlliesArray;
                            removeBuffFromBatch(battleData,allyArray,buffSheet);
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
    "Tengoku@Livestream": {//REDONE
        "2pc": {
            logic(thisTurn,battleData) {},
            "skillFunctions": {},
            "listeners": [
                {
                    "trigger": "PassiveCalls",
                    condition(battleData,generalInfo) {
                        let ownerRef = this.owners;

                        const namedTurns = battleData.nameBasedTurns;
                        const subListeners = this.subListeners;
                        for (let owner of ownerRef) {
                            let charSlot = owner.slot;
                            let currentTurn = namedTurns[charSlot];

                            addListenerWithPriority(battleData,subListeners[0],subListeners[0].trigger,currentTurn);
                            addListenerWithPriority(battleData,subListeners[1],subListeners[1].trigger,currentTurn);
                            addListenerWithPriority(battleData,subListeners[2],subListeners[2].trigger,currentTurn);
                        }
                    },
                    "target": "self",
                    "listenerName": "Tengoku@Livestream listener setup",
                    "owners": [],
                    "subListeners": [
                        {
                            "trigger": "PreActionPhase",
                            condition(battleData,generalInfo) {
                                const sourceTurn = generalInfo.sourceTurn;
        
                                sourceTurn.tengokuTrackingActive = true;
                                sourceTurn.tengokuTrackingCounter = 0;
                            },
                            "target": "self",
                            "isPersonal": true,
                            "listenerName": "Tengoku@Livestream turnstart listener",
                        },
                        {
                            "trigger": "EndTurn",
                            condition(battleData,generalInfo) {
                                const sourceTurn = generalInfo.sourceTurn;
        
                                sourceTurn.tengokuTrackingActive = false;
                                sourceTurn.tengokuTrackingCounter = 0;
                            },
                            "target": "self",
                            "isPersonal": true,
                            "listenerName": "Tengoku@Livestream turnstart listener",
                        },
                        {
                            "trigger": "SPChange",
                            condition(battleData,generalInfo) {
                                const sourceTurn = generalInfo.sourceTurn;
                                if (!sourceTurn.tengokuTrackingActive) {return;}
        
                                const cost = generalInfo.SPChange;
                                if (cost > 0) {return;}
        
                                sourceTurn.tengokuTrackingCounter -= cost;
        
                                if (sourceTurn.tengokuTrackingCounter >= 3) {
        
                                    if (!this.tengokuSPCritDMGSHEET) {
                                        let relicNameRef = "Tengoku@Livestream";
                                        const buffName = this.buffName ??= turnLogicRelics[relicNameRef]["2pc"].buffNames.critDMG;
                                        let relicPathing = this.relicPathing ??= relicSets[relicNameRef].params[0];//0-2pc 1-4pc
                                        this.tengokuSPCritDMGSHEET = {
                                            "stats": [CritDamageBase],
                                            [CritDamageBase]: relicPathing[2],
                                            "source": relicNameRef,
                                            "sourceOwner": sourceTurn.properName,
                                            "buffName": buffName,
                                            "durationInTurn": null,
                                            "duration": 1,
                                            "AVApplied": 0,
                                            "maxStacks": 1,
                                            "currentStacks": 1,
                                            "decay": false,
                                            "expireType": null
                                        }
                                    }
                                    const buffSheet = this.tengokuSPCritDMGSHEET;
                                    buffSheet.sourceOwner = sourceTurn.properName;
        
                                    updateBuff(battleData,sourceTurn,buffSheet);
        
                                    //disable further tracking, someone like archer might spend a gajllion in the bounds of the same turn which would be shite
                                    sourceTurn.tengokuTrackingCounter = 0;
                                    sourceTurn.tengokuTrackingActive = false
                                }
                            },
                            "target": "self",
                            "isPersonal": true,
                            "listenerName": "Tengoku@Livestream skill points listener",
                        },
                    ]
                },
            ],
            "buffNames": {
                "critDMG": "Tengoku@Livestream"
            },
        }
    },
    "Punklorde Stage Zero": {//REDONE
        "2pc": {
            logic(thisTurn,battleData) {},
            "skillFunctions": {
                statCheck(battleData,currentTurn) {
                    if (!currentTurn.punklordeElationCRITSHEET) {
                        let relicNameRef = "Punklorde Stage Zero";
                        const buffRef = turnLogicRelics[relicNameRef]["2pc"].buffNames;
                        let buffName = buffRef.dmg1;
                        let buffName2 = buffRef.dmg2;
                        let relicPathing = relicSets[relicNameRef].params[0];//0-2pc 1-4pc

                        currentTurn.punklordeElationCRITSHEET = {
                            "stats": [CritDamageBase],
                            [CritDamageBase]: relicPathing[3],
                            "source": relicNameRef,
                            "sourceOwner": currentTurn.properName,
                            "buffName": buffName,
                            "durationInTurn": null,
                            "duration": 1,
                            "AVApplied": 0,
                            "maxStacks": 1,
                            "currentStacks": 1,
                            "decay": false,
                            "expireType": null
                        }
                        currentTurn.punklordeElationCRITSHEET2 = {
                            "stats": [CritDamageBase],
                            [CritDamageBase]: relicPathing[4],
                            "source": relicNameRef,
                            "sourceOwner": currentTurn.properName,
                            "buffName": buffName2,
                            "durationInTurn": null,
                            "duration": 1,
                            "AVApplied": 0,
                            "maxStacks": 1,
                            "currentStacks": 1,
                            "decay": false,
                            "expireType": null
                        }
                    }

                    const statTable = currentTurn.statTable;
                    const fullElation = statTable[ElationDMGAll] + statTable[ElationDMGAllNULL];
                    
                    let buffSheet2 = currentTurn.punklordeElationCRITSHEET2;
                    const buffName2 = buffSheet2.buffName;
                    const buffsObject = currentTurn.buffsObject;
                    const buffCheck2 = buffsObject[buffName2];
                    if (buffCheck2) {return;}//unlike something like glamoth, this bonus CANT be removed even if it falls below in the middle of a battle

                    let hadEnoughFor2 = false;
                    if (fullElation >= 0.80) {//if the target has enough cr for the buff, then we can apply it
                        updateBuff(battleData,currentTurn,buffSheet2);
                        hadEnoughFor2 = true;

                        currentTurn.relicPunklordeUserCompleted = true;
                    }

                    let buffSheet = currentTurn.punklordeElationCRITSHEET;
                    const buffName = buffSheet.buffName;
                    const buffCheck = buffsObject[buffName];

                    if (buffCheck && hadEnoughFor2) {
                        removeBuff(battleData,currentTurn,buffCheck);
                        return;
                    }
                    else if (hadEnoughFor2) {return;}

                    if (buffCheck) {return;}

                    if (fullElation >= 0.40) {//if the target has enough cr for the buff, then we can apply it
                        updateBuff(battleData,currentTurn,buffSheet);
                    }
                }
            },
            "listeners": [
                {
                    "trigger": "PassiveCalls",
                    condition(battleData,generalInfo) {
                        let ownerRef = this.owners;

                        const namedTurns = battleData.nameBasedTurns;
                        const subListeners = this.subListeners;
                        const statCheck = this.statCheck ??= turnLogicRelics["Punklorde Stage Zero"]["2pc"].skillFunctions.statCheck;
                        for (let owner of ownerRef) {
                            let charSlot = owner.slot;
                            let currentTurn = namedTurns[charSlot];

                            statCheck(battleData,currentTurn);
                            addListenerWithPriority(battleData,subListeners[0],subListeners[0].trigger,currentTurn);
                        }
                    },
                    "target": "self",
                    "listenerName": "Punklorde Stage Zero listener setup",
                    "owners": [],
                    "subListeners": [
                        {
                            "trigger": "UpdateStatElation",//Elation stat family
                            condition(battleData,generalInfo) {
                                let sourceTurn = generalInfo.sourceTurn;
        
                                if (sourceTurn.relicPunklordeUserCompleted) {
                                    removeListener(battleData,this,sourceTurn);
                                    return;
                                    //the buffs are permanent, other than the lower buff getting replaced with the higher buff
                                    //so once the higher buff has BEEN placed on an entity, that entity no longer needs to listen to elation changes
                                }
        
                                const statCheck = this.statCheck ??= turnLogicRelics["Punklorde Stage Zero"]["2pc"].skillFunctions.statCheck;
                                statCheck(battleData,sourceTurn);
                            },
                            "target": "self",
                            "isPersonal": true,
                            "listenerName": "Punklorde Stage Zero elation changes check",
                        },
                    ]
                },
            ],
            "buffNames": {
                "dmg1": "Punklorde Stage Zero (>=40)",
                "dmg2": "Punklorde Stage Zero (>=80)",
            },
        }
    },
    "City of Converging Stars": {//DONE
        "2pc": {
            logic(thisTurn,battleData) {},
            "skillFunctions": {},
            "listeners": [
                {
                    "trigger": "PassiveCalls",
                    condition(battleData,generalInfo) {
                        let ownerRef = this.owners;

                        const namedTurns = battleData.nameBasedTurns;
                        const subListeners = this.subListeners;

                        for (let owner of ownerRef) {
                            let charSlot = owner.slot;
                            let currentTurn = namedTurns[charSlot];

                            addListenerWithPriority(battleData,subListeners[0],subListeners[0].trigger,currentTurn);
                        }
                    },
                    "target": "self",
                    "listenerName": "City of Converging Stars listener setup",
                    "owners": [],
                    "subListeners": [
                        {
                            "trigger": "AttackStart",
                            condition(battleData,generalInfo) {
                                let sourceTurn = generalInfo.sourceTurn;
        
                                let isFUA = false;
                                const actionTags = generalInfo.ATKObject.actionTags;
                                for (let tag of actionTags) {
                                    if (tag === "FUA") {
                                        isFUA = true;
                                        break;
                                    }
                                }
                                if (!isFUA) {return;}
        
                                if (!this.lcCityConvergingATKSHEET) {
                                    let relicNameRef = "City of Converging Stars";
                                    let pcRef = "2pc";
                                    let relicPathing = this.relicPathing ??= relicSets[relicNameRef].params[0];//0-2pc 1-4pc
                                    const buffRef = this.buffRef ??= turnLogicRelics[relicNameRef][pcRef].buffNames;
                                    let buffName = buffRef.dmgBuff;
        
                                    this.lcCityConvergingATKSHEET = {
                                        "stats": [ATKP],
                                        [ATKP]: relicPathing[0],
                                        "source": relicNameRef,
                                        "sourceOwner": null,
                                        "buffName": buffName,
                                        "durationInTurn": 3,
                                        "duration": 2,
                                        "AVApplied": 0,
                                        "maxStacks": 1,
                                        "currentStacks": 1,
                                        "decay": false,
                                        "expireType": "EndTurn",
                                    }
                                }
                                let buffSheet = this.lcCityConvergingATKSHEET;
                                buffSheet.sourceOwner = sourceTurn.properName;
                                updateBuff(battleData,sourceTurn,buffSheet);
                            },
                            "target": "self",
                            "isPersonal": true,
                            "listenerName": "City of Converging Stars FUA listener",
                        },
                    ]
                },
                {
                    "trigger": "EnemyDied",
                    condition(battleData,generalInfo) {
                        let ownersSlots = this.ownersSlots;

                        if (!this.lcCityConvergingDEATHSHEET) {
                            let relicNameRef = "City of Converging Stars";
                            let pcRef = "2pc";
                            let relicPathing = relicSets[relicNameRef].params[0];//0-2pc 1-4pc
                            const buffName = turnLogicRelics[relicNameRef][pcRef].buffNames.critBuff;

                            this.lcCityConvergingDEATHSHEET = {
                                "stats": [CritDamageBase],
                                [CritDamageBase]: relicPathing[2],
                                "source": relicNameRef,
                                "sourceOwner": "",
                                "buffName": buffName,
                                "durationInTurn": null,
                                "duration": 1,
                                "AVApplied": 0,
                                "maxStacks": 1,
                                "currentStacks": 1,
                                "decay": false,
                                "expireType": null
                            }
                        }
                        let buffSheet = this.lcCityConvergingDEATHSHEET;
                        
                        const namedTurns = battleData.nameBasedTurns;
                        const allAlliesArray = battleData.allAlliesArray;
                        for (let charSlot in ownersSlots) {
                            let currentTurn = namedTurns[charSlot];
                            buffSheet.sourceOwner = currentTurn.properName;
                            updateBuffBatchTargets(battleData,allAlliesArray,buffSheet);
                            break;
                            //bc this does NOT stack, the first owner we find would be considered to be the buff source
                            //afterwards we completely kill the listener so it can never proc again
                        }

                        removeListener(battleData,this,null);
                    },
                    "target": "self",
                    "listenerName": "City of Converging Stars death listener",
                    "owners": [],
                },
            ],
            "buffNames": {
                "critBuff": "City of Converging Stars (CritDMG)",
                "dmgBuff": "City of Converging Stars (ATK)",
            },
        }
    },
}