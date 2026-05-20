const turnLogic = {
    "Sparkle_v0": {//ATKOBJECTS DONE
        logic(thisTurn,battleData) {
            const shortRef = this;
            let currentSP = battleData.skillPointCurrent;
            let actionUsed = false;
            let statCalls = shortRef.characterValuesBattle;
            let shortCalls = shortRef.skillFunctions;
            let skillPathing = characters.Sparkle.skills;

            let ultySoon = battleActions.energyLookAhead(thisTurn,30);
            let minimum = currentSP >= 1;
            let skillPointsCheck = currentSP > 6;

            if (minimum) {
                // if (skillPointsCheck || (ultySoon && currentSP>2)) {
                if (skillPointsCheck || (ultySoon && currentSP > 4)) {
                    //basically, are we greater than 4sp for archer, or are we at the minimum to use a skill and then ult afterwards
                    let target = battleData.nameBasedTurns.char1;
                    actionUsed = true;
                    // console.log("skill logic reached")
                    return {action: "Skill", points: -1, actionCall: shortCalls.sparkleAdvance, target: target};
                }
            }


            if (!actionUsed) {
                // let skillRef = skillPathing["Basic ATK"].Monodrama.variant1;
                return {action: "BasicATK", points: 1, actionCall: shortCalls.sparkleBasic, target: "enemy"};
            }
        },
        "skillFunctions": {
            sparkleBasic(battleData,target,sourceTurn) {
                const logicRef = turnLogic[sourceTurn.properName];
                const ATKObjects = logicRef.ATKObjects;

                // let characterName = sourceTurn.properName;
                // let charSlot = sourceTurn.name;
                // let skillPathing = characters[characterName].skills;
                let skillRef = ATKObjects.sparkleBasicREF ??= ATKObjects["Basic ATK"]["Monodrama"].variant1;

                if (!ATKObjects.sparkleBasicATKOBJECT) {
                    skillRef.hitSplits = hitSplitters[sourceTurn.properName].basic;
                    let values = ATKObjects.sparkleBasicREFVALUES ??= battleActions.getLevelBasedParam(battleData,skillRef,sourceTurn);
                    const scalar = "ATK";
                    const tags = ["All","Basic","Quantum"];
                    const actionTags = ["Basic","Attack"];
                    const keyShortcut = basicShorthand.makeKeysArray;
                    const realDMGKeys = keyShortcut(dmgKeys,tags);
                    const realPENKeys = keyShortcut(resPENKeys,tags);
                    const realShredKeys = keyShortcut(defShredKeys,tags);
                    const realVulnKeys = keyShortcut(vulnKeys,tags);
                    const compositeCacheTag = tags + actionTags + sourceTurn.properName;
                    //realDMGKeys,realPENKeys,realShredKeys,realVulnKeys
                    ATKObjects.sparkleBasicATKOBJECT = {
                        multipliers: {
                            primary: values[0],
                            blast: null,
                            all: null,
                        },
                        scalar,
                        DMGTags: tags,
                        allToughness: false,
                        slot: skillRef.slot,
                        realDMGKeys,realPENKeys,realShredKeys,realVulnKeys,
                        actionTags,
                        compositeCacheTag
                    }
                }
                let ATKObject = ATKObjects.sparkleBasicATKOBJECT;

                if (battleData.isLoggyLogger) {logToBattle(battleData,{logType: "BasicATKStart", name:sourceTurn.properName, target, isEnemy: false, isCharacter: true, AV: battleData.sumAV, actionSlot:skillRef.slot});}
                poke("BasicATKStart",battleData,{sourceTurn});
                battleActions.attackWrapper(battleData,skillRef,sourceTurn,ATKObject);
                updateEnergy(battleData,skillRef.energyRegen,sourceTurn);
                poke("BasicATKEnd",battleData,{sourceTurn});

                updateEnergy(battleData,10,sourceTurn,false,"Sparkle Major Trace: Almanac");//sparkle regens 10 energy on basic atk
            },
            applyDreamdiver(battleData,targetTurn,sourceTurn,e6) {
                const logicRef = turnLogic[sourceTurn.properName];
                const ATKObjects = logicRef.ATKObjects;
                
                // let charSlot = sourceTurn.name;
                // let skillPathing = characters.Sparkle.skills;
                let skillRef = ATKObjects.applyDreamdiverREF ??= ATKObjects.Skill.Dreamdiver.variant1;
                let values = ATKObjects.applyDreamdiverVALUESREF ??= battleActions.getLevelBasedParam(battleData,skillRef,sourceTurn);

                //the major trace "Artificial Flower" technically changes the behavior of this buff, so instead of making it last until the end of a turn
                //we pretend it expires at the start of a character's turn, and say it lasts for 2 turns. This way, when advancing someone they have 2 turns,
                //and their advanced turn will start bringing the turns remaining to just 1

                //however if applied via E6, this needs to be reverted and stick to the 1turn duration if the buff is received ON the target's turn
                //this is normally impossible bc the buff is only ever applied on action advance, but e6 makes it possible

                if (!ATKObjects.applyDreamdiverCRITDMGSHEET) {
                    let characterName = sourceTurn.properName;
                    let buffName = turnLogic[characterName].buffNames.dreamdiver;
                    ATKObjects.applyDreamdiverCRITDMGSHEET = {
                        "stats": [CritDamageBase,CritDamageBaseNULL],
                        [CritDamageBase]: 0,
                        [CritDamageBaseNULL]: -0,
                        "source": characterName,
                        "sourceOwner": sourceTurn.properName,
                        "buffName": buffName,
                        "durationInTurn": 2,
                        "duration": 1,
                        "AVApplied": 0,
                        "maxStacks": 1,
                        "currentStacks": 1,
                        "decay": false,
                        "expireType": "StartTurn",
                        "removeOnDeath": true,
                    }
                }
                let buffSheet = ATKObjects.applyDreamdiverCRITDMGSHEET;
                const buffName = buffSheet.buffName;

                const stats = sourceTurn.statTable;
                const critDMG = stats[CritDamageBase] + stats[CritDamageBaseNULL];//null is for shit that can't be included in the ratio
                const fixedBonus = values[1];
                const bonusRatio = values[0] + (e6 ? 0.30 : 0);//e6 boosts the conversion ratio by 30%
                const critDMGTotalBonus = bonusRatio*critDMG + fixedBonus;

                const buffCheck = targetTurn.buffsObject[buffName];

                if (buffCheck) {//if the buff already exists
                    const statCheck = buffCheck[CritDamageBase];
                    if (statCheck === critDMGTotalBonus) {//if the bonus is the same, then just renew it
                        updateBuff(battleData,targetTurn,buffSheet);
                        return;//can obv end here bc that's it in this case
                    }
                    else {
                        removeBuff(battleData,targetTurn,buffSheet,true);//otherwise silently remove it without triggering a log event
                    }
                }

                buffSheet[CritDamageBase] = critDMGTotalBonus;
                buffSheet[CritDamageBaseNULL] = -critDMGTotalBonus;
                updateBuff(battleData,targetTurn,buffSheet);
            },
            sparkleAdvance(battleData,targetTurn,sourceTurn) {
                const logicRef = turnLogic[sourceTurn.properName];
                const ATKObjects = logicRef.ATKObjects;

                let characterName = sourceTurn.properName;
                let skillRef = ATKObjects.applyDreamdiverREF ??= ATKObjects.Skill.Dreamdiver.variant1;

                if (battleData.isLoggyLogger) {logToBattle(battleData,{logType: "SkillStart", name:characterName, target:targetTurn.name, isEnemy: false, isCharacter: true, AV: battleData.sumAV, actionSlot:skillRef.slot});}
                poke("SkillStart",battleData,{sourceTurn});
                updateEnergy(battleData,skillRef.energyRegen,sourceTurn);
                let rank = sourceTurn.rank;
                let e6 = rank >= 6;

                poke("TargetAlly",battleData,{targetType:"Single", sourceTurn:sourceTurn, targetTurn, targetSkill:skillRef.slot,targetChildEntities: false});
                
                let diver = ATKObjects.diverFunction ??= logicRef.skillFunctions.applyDreamdiver;
                diver(battleData,targetTurn,sourceTurn,e6);

                if (e6) {
                    let buffName = logicRef.buffNames.cipher;
                    for (let targetTurn2 of battleData.allyPositions) {
                        let buffCheck = targetTurn2.buffsObject[buffName];
                        if (buffCheck && targetTurn2.name != sourceTurn.name) {//we skip the char she JUST applied it to via the reg skill
                            diver(battleData,targetTurn2,sourceTurn,e6);
                        }
                    }
                }

                battleActions.nonViolentWrapper(battleData,skillRef,characterName);
                if (targetTurn.properName != "Sparkle") {actionAdvance(0.5,targetTurn,battleData,"Sparkle Skill");}//prevent self advancement
                poke("SkillEnd",battleData,{sourceTurn});
            },
            sparkleUltimate(battleData,sourceTurn) {
                const logicRef = turnLogic[sourceTurn.properName];
                const ATKObjects = logicRef.ATKObjects;

                let characterName = sourceTurn.properName;
                // let charSlot = sourceTurn.name;
                // let skillPathing = characters[characterName].skills;
                let skillRef = ATKObjects.sparkleUltimateREF ??= ATKObjects.Ultimate["The Hero with a Thousand Faces"].variant1;

                let rank = sourceTurn.rank;
                let e4 = rank >= 4;
                let e6 = rank >= 6;

                let spRecovery = 4 + (e4 ? 1 : 0);

                updateEnergy(battleData,-sourceTurn.maxEnergy,sourceTurn);
                updateSkillPoints(spRecovery,battleData,{sourceTurn,sourceName:"Sparkle Ultimate"});

                const buffNAMES = logicRef.buffNames;
                let buffName = buffNAMES.cipher;
                let buffName2 = buffNAMES.redHerring;
                let buffName3 = buffNAMES.dreamdiver;

                if (!ATKObjects.sparkleUltimateCIPHERSHEET) {
                    let e1 = rank >= 1;
                    ATKObjects.sparkleUltimateCIPHERSHEET = {
                        "stats": [ATKP],
                        [ATKP]: e1 ? 0.40 : 0,//cipher is actually completely empty, barring the e1 buff. mainly serves to boost the red herring stacks from talent
                        "source": characterName,
                        "sourceOwner": sourceTurn.properName,
                        "buffName": buffName,
                        "durationInTurn": 3,
                        "duration": 2,
                        "AVApplied": 0,
                        "maxStacks": 1,
                        "currentStacks": 1,
                        "decay": false,
                        "expireType": "EndTurn",
                        "expireFunction": logicRef.skillFunctions.cipherExpired,//we just need to specify in tingyun's stats that no target has benediction anymore, when removed
                        "expireParam": null,
                        "removeOnDeath": true,
                    }
                }
                let buffSheet = ATKObjects.sparkleUltimateCIPHERSHEET;
                
                let dreamDiverFound = false;
                poke("TargetAlly",battleData,{targetType:"Team", sourceTurn, targetTurn:null, targetSkill:skillRef.slot,targetChildEntities: false});
                const recreate = logicRef.skillFunctions.sparkleRecreateHerringBuff;
                for (let targetTurn of battleData.allyPositions) {
                    const currentBuffs = targetTurn.buffsObject;
                    let alreadyHasHerring = currentBuffs[buffName2];
                    let alreadyHasDiver = currentBuffs[buffName3];
                    if (alreadyHasDiver) {dreamDiverFound = true;}//for e6
                    
                    buffSheet.expireParam = currentBuffs[buffName] ? null : {targetTurn:targetTurn.name,sourceTurn:sourceTurn.name};//no need to construct the expire param if they already have it
                    //ALSO, needs to be a slot that passes on the param, bc this is cyclic in the log otherwise
                    updateBuff(battleData,targetTurn,buffSheet);

                    if (alreadyHasHerring) {
                        recreate(battleData,targetTurn,sourceTurn);
                        //then remake the herring buff object
                        //also set a trigger that will remake it again when the cipher buff expires if it ever does
                    }
                }

                if (e6 && dreamDiverFound) {
                    let diver = logicRef.skillFunctions.applyDreamdiver;
                    for (let targetTurn of battleData.allyPositions) {
                        diver(battleData,targetTurn,sourceTurn,e6);
                        //the phrasing here technically implies we should look for people with cipher but like
                        //bro we just ulted, everyone has cipher, who are we shitting rn. Just give it to em.
                    }
                    //my fear is that this is like cipher's dmg increase that is tied to red herring
                    //bc if it is, jesus FUCKING christ that will be annoying. Not that I can't account
                    //for it bc I absolutely can, I just don't want to lmfao. No way to know though without e6 on-hand
                    //so we'll see later if some e6-haver complains.
                }

                updateEnergy(battleData,skillRef.energyRegen,sourceTurn);
                battleActions.nonViolentWrapper(battleData,skillRef,characterName);
                sourceTurn.ultyQueued = false;
            },
            cipherExpired(battleData,param) {
                const namedTurns = battleData.nameBasedTurns;
                let targetTurn = namedTurns[param.targetTurn];
                let sourceTurn = namedTurns[param.sourceTurn];
                let characterName = sourceTurn.properName;

                let logicRef = turnLogic[characterName];
                let buffName2 = logicRef.buffNames.redHerring;
                let alreadyHasHerring = targetTurn.buffsObject[buffName2];

                if (alreadyHasHerring) {//if herring is on this character, redo the herring buff to remove the bonus dmg added from cipher
                    logicRef.skillFunctions.sparkleRecreateHerringBuff(battleData,targetTurn,sourceTurn);
                }
            },
            sparkleRecreateHerringBuff(battleData,currentSlot,ownerTurn) {
                //ideally this should remain silent in logging when remade since red herring existed already, we just don't have a really correct way to have two separate buffs where one scales the values of the other
                //so this is my super hacky fix for that, for now. Not sure how best to do this but I can look at it again later.
                let silent = true;
                let isRedone = true;
                

                turnLogic.Sparkle.skillFunctions.sparkleCreateHerringBuff(battleData,ownerTurn,null,silent,isRedone,currentSlot);
            },
            sparkleCreateHerringBuff(battleData,sourceTurn,totalChange,silent,isRedone,turnToRedo) {
                const logicRef = turnLogic[sourceTurn.properName];
                const ATKObjects = logicRef.ATKObjects;

                let characterName = sourceTurn.properName;
                
                // let skillPathing = characters[characterName].skills;
                let skillRef = ATKObjects.sparkleCreateHerringBuffREF ??= ATKObjects.Talent["Red Herring"].variant1;

                if (!isRedone && !silent) {
                    if (battleData.isLoggyLogger) {logToBattle(battleData,{logType: "TalentStart", name:characterName, target:"team", isEnemy: false, isCharacter: true, AV: battleData.sumAV, actionSlot:skillRef.slot});}
                    poke("TalentStart",battleData,{sourceTurn});
                }

                const buffNames = turnLogic[characterName].buffNames;
                let buffName = buffNames.redHerring;
                let cipherName = buffNames.cipher;
                if (!ATKObjects.sparkleCreateHerringBuffDMGSHEET) {
                    let e2 = sourceTurn.rank >= 2;
                    
                    ATKObjects.sparkleCreateHerringBuffDMGSHEET = {
                        "stats": [DamageAll,DEFShredAll],
                        [DamageAll]: 0,
                        [DEFShredAll]: e2 ? 0.08 : 0,//the e2 def shred is independent of cipher existing or not, purely related to e2 alone so we can give a static add here
                        "source": characterName,
                        "sourceOwner": sourceTurn.properName,
                        "buffName": buffName,
                        "durationInTurn": 3,
                        "duration": 2,
                        "AVApplied": 0,
                        "maxStacks": 3,
                        "currentStacks": totalChange,
                        "decay": false,
                        "expireType": "EndTurn",
                        "removeOnDeath": true,
                    }
                }

                const buffSheet = ATKObjects.sparkleCreateHerringBuffDMGSHEET;
                const redoName = turnToRedo ? turnToRedo.properName : null;
                

                for (let targetTurn of battleData.allyPositions) {
                    const buffRef = targetTurn.buffsObject;
                    let currentHerringRef = buffRef[buffName];
                    
                    if (isRedone && (redoName != targetTurn.properName || !currentHerringRef)) {continue;}//if we're remaking buffs, but this person doesn't actually have it to remake it, then skip.
                    
                    let hasCipherBuff = buffRef[cipherName];
                    buffSheet[DamageAll] = hasCipherBuff ? 0.16 : 0.06;

                    if (isRedone) {
                        //if we're redoing the buff and it exits(otherwise skip earlier), then yoink the data from the old buff and spread it
                        //stats won't spread here and will be a ref, but ideally once removed then it doesn't exist anymore, we can set stats to {} to be safe and delete it after
                        //the reason we can't delete stats BEFORE removal is the removal needs the stats that exist in order to reverse them on the character otherwise we'd see infinite buff scaling issues
                        buffSheet.duration = currentHerringRef.duration;
                        buffSheet.currentStacks = currentHerringRef.currentStacks;
                        removeBuff(battleData,targetTurn,currentHerringRef,silent);
                    }
                    else {
                        buffSheet.currentStacks = totalChange;
                    }
                    updateBuff(battleData,targetTurn,buffSheet,silent);
                }

                if (!isRedone && !silent) {
                    battleActions.nonViolentWrapper(battleData,skillRef,characterName);
                    poke("TalentEnd",battleData,{sourceTurn});
                }
            },
            sparkleTechnique(battleData,target,sourceTurn) {
                const logicRef = turnLogic[sourceTurn.properName];
                const ATKObjects = logicRef.ATKObjects;

                let characterName = sourceTurn.properName;
                // let charSlot = sourceTurn.name;
                // let skillPathing = characters[characterName].skills;
                let skillRef = ATKObjects.sparkleTechREF ??= ATKObjects.Technique["Unreliable Narrator"].variant1;


                if (battleData.isLoggyLogger) {logToBattle(battleData,{logType: "TechniqueStart", name:characterName, target, isEnemy: false, isCharacter: true, AV: battleData.sumAV, actionSlot:skillRef.slot});}
                poke("TechniqueStart",battleData,{sourceTurn});

                let spRecovery = 3;
                updateSkillPoints(spRecovery,battleData,{sourceTurn,sourceName:"Sparkle Technique"});
                battleActions.nonViolentWrapper(battleData,skillRef,characterName);

                poke("TechniqueEnd",battleData,{sourceTurn});
            },
        },
        "listeners": [
            {
                "trigger": "SPChange",
                condition(battleData,generalInfo) {
                    let ownerTurn = this.ownerTurn;
                    let characterName = ownerTurn.properName;
                    // let sourceTurn = generalInfo.sourceTurn;
                    //fail condition if the change isn't for points spent
                    let spChange = generalInfo.SPChange;
                    let changeIsNegative = spChange < 0;

                    if (changeIsNegative) {
                        let totalChange = Math.min(3, spChange * -1);//since the bonus caps out at 3 stacks we limit it to a maximum of 3 total spent that can stack here
                        const sparkleCreateHerringBuff = this.sparkleCreateHerringBuff ??= turnLogic[characterName].skillFunctions.sparkleCreateHerringBuff;
                        sparkleCreateHerringBuff(battleData,ownerTurn,totalChange,false);
                    }
                },
                "target": "team",
                "listenerName": "Sparkle - Applied: Red Herring - Talent",
                "ownerTurn": {},
            },
            {
                "trigger": "PreBattleSettings",
                condition(battleData,generalInfo) {
                    let ownerTurn = this.ownerTurn;
                    let characterName = ownerTurn.properName;

                    let e4 = ownerTurn.rank >= 4;
                    battleData.battleTable.SPMax += 2 + (e4 ? 1 : 0);
                    if (battleData.isLoggyLogger) {logToBattle(battleData,{logType: "GenericAction", source:this.listenerName, bodyText: "Skill Point Max +2"});}
                },
                "target": "self",
                "listenerName": "Sparkle - +SP Max - Talent",
                "ownerTurn": {},
            },
            {
                "trigger": "AllyCreated",
                condition(battleData,generalInfo) {
                    let ownerTurn = this.ownerTurn;
                    let characterName = ownerTurn.properName;

                    if (!this.sparkleNocturneUniversalATKSHEET) {
                        this.sparkleNocturneUniversalATKSHEET = {
                            "stats": [ATKP],
                            [ATKP]: 0.15,
                            "source": "Trace",
                            "sourceOwner": ownerTurn.properName,
                            "buffName": "Nocturne: Team ATK%",
                            "durationInTurn": null,
                            "duration": null,
                            "AVApplied": 0,
                            "maxStacks": 1,
                            "currentStacks": 1,
                            "decay": false,
                            "expireType": null
                        }
                    }
                    let buffSheet1 = this.sparkleNocturneUniversalATKSHEET;
                    const targetTurn = generalInfo.targetTurn;
                    updateBuff(battleData,targetTurn,buffSheet1);
                },
                "target": "self",
                "listenerName": "Sparkle - ATK Bonus - Major Trace: Nocturne",
                "ownerTurn": {},
            },
            {
                "trigger": "PreBattleEntersCombat",
                condition(battleData,generalInfo) {
                    let ownerTurn = this.ownerTurn;
                    let characterName = ownerTurn.properName;

                    let quantumCounter = 0;
                    let buffArrayQuantum = [0.05,0.15,0.30];
                    let quantumAllies = [];

                    for (let targetTurn of battleData.allyPositions) {
                        let currentType = targetTurn.element;
                        if (currentType === "Quantum") {
                            quantumCounter++;
                            quantumAllies.push(targetTurn);
                        }
                    }
                    quantumCounter = Math.min(3,quantumCounter);//cap out at 3 for the bonus
                    let bonusToGive = buffArrayQuantum[quantumCounter-1];//will always be at least 1 bc sparkle is quantum herself, so if this ever pops an error with a -1 index, something is mega fucked

                    let buffSheet2 = this.buffSheet2 ??= {
                        "stats": [ATKP],
                        [ATKP]: 0,
                        "source": characterName,
                        "sourceOwner": ownerTurn.properName,
                        "buffName": "Nocturne: Quantum Member Bonus ATK%",
                        "durationInTurn": null,
                        "duration": null,
                        "AVApplied": 0,
                        "maxStacks": 1,
                        "currentStacks": 1,
                        "decay": false,
                        "expireType": null
                    }
                    buffSheet2[ATKP] = bonusToGive;
                    for (let targetTurn of quantumAllies) {
                        updateBuff(battleData,targetTurn,buffSheet2);
                        const hasMemo = targetTurn.memospriteEventRef;
                        if (hasMemo) {
                            const memoTurn = targetTurn[hasMemo];
                            updateBuff(battleData,memoTurn,buffSheet2);
                        }
                    }
                },
                "target": "self",
                "listenerName": "Sparkle - ATK Bonus - Major Trace: Nocturne",
                "ownerTurn": {},
            },
            {
                "trigger": "UltimateReady",
                condition(battleData,generalInfo) {
                    let ownerTurn = this.ownerTurn;
                    if (ownerTurn.ultyQueued) {return;}

                    let energyCheck = ownerTurn.currentEnergy === ownerTurn.maxEnergy;
                    let otherObscureCondition = energyCheck && checkUlty(battleData,ownerTurn);

                    if (otherObscureCondition) {
                        ownerTurn.ultyQueued = true;

                        const queueObject = this.queueObject ??= {
                            actionCall: turnLogic[ownerTurn.properName].skillFunctions.sparkleUltimate,
                            target: this.target,
                            name: this.listenerName,
                            properName: characterNaownerTurn.properNameme,
                            sourceTurn: null,
                            priority: priorityList.turn.Default,
                        }
                        queueObject.sourceTurn = ownerTurn;
                        queueUltimate(battleData,queueObject);
                    }
                },
                "target": "team",
                "listenerName": "Sparkle - Ultimate queued",
                "ownerTurn": {},
            },
            {
                "trigger": "PreBattleStartTechniquesNormal",
                condition(battleData,generalInfo) {
                    let ownerTurn = this.ownerTurn;
                    let characterName = ownerTurn.properName;
                    //PreBattleStartTechniquesNormal for always active techniques that don't need to care
                    //StartBattle for dmg techniques that could have conflicts
                    let logicRef = turnLogic[characterName];
                    let useTechnique = logicRef.useTechnique;
                    if (useTechnique && battleData.techniquesAllowed) {
                        const sparkleTechnique = this.sparkleTechnique ??= logicRef.skillFunctions.sparkleTechnique;
                        sparkleTechnique(battleData,"self",ownerTurn)
                    }
                },
                "target": "self",
                "listenerName": "Sparkle Technique",
                "ownerTurn": {},
            },
        ],
        "eidolonListeners": {
            1: [],
            2: [],
            3: [],
            4: [],
            5: [],
            6: [],
        },
        "ATKObjects": {},
        "characterValues": {},
        "useTechnique": true,
        "techniqueType": "Buff",
        "buffNames": {
            "cipher": "Cipher",
            "redHerring": "Red Herring",
            "dreamdiver": "Dreamdiver"
        },
        "characterValuesBattle": {},
    },
    "Black Swan_v0": {//ATKOBJECTS DONE
        logic(thisTurn,battleData) {
            let actionUsed = false;

            let currentSP = battleData.skillPointCurrent;
            const minimum = currentSP>0;


            if (minimum && checkSkill(battleData,thisTurn)) {
                const returnSkillCall = this.returnSkillCall ??= {action: "Skill", points: -1, actionCall: this.skillFunctions.blackswanSkill, target: "enemy"};
                return returnSkillCall;
            }

            if (!actionUsed) {
                return this.returnBasicCall ??= {action: "BasicATK", points: 1, actionCall: this.skillFunctions.blackswanBasic, target: "enemy"};
            }
        },
        "skillFunctions": {
            blackswanBasic(battleData,target,sourceTurn) {
                const logicRef = turnLogic[sourceTurn.properName];
                const ATKObjects = logicRef.ATKObjects;

                let skillRef = ATKObjects.blackswanBasicREF ??= ATKObjects["Basic ATK"]["Percipience, Silent Dawn"].variant1;

                if (!ATKObjects.blackswanBasicATKOBJECT) {
                    skillRef.hitSplits = hitSplitters[sourceTurn.properName].basic;
                    let values = ATKObjects.blackswanBasicREFVALUES ??= battleActions.getLevelBasedParam(battleData,skillRef,sourceTurn);
                    const scalar = "ATK";
                    const tags = ["All","Basic","Wind"];
                    const keyShortcut = basicShorthand.makeKeysArray;
                    const realDMGKeys = keyShortcut(dmgKeys,tags);
                    const realPENKeys = keyShortcut(resPENKeys,tags);
                    const realShredKeys = keyShortcut(defShredKeys,tags);
                    const realVulnKeys = keyShortcut(vulnKeys,tags);
                    //realDMGKeys,realPENKeys,realShredKeys,realVulnKeys
                    const actionTags = ["Basic","Attack"];
                    const compositeCacheTag = tags + actionTags + sourceTurn.properName;
                    ATKObjects.blackswanBasicATKOBJECT = {
                        multipliers: {
                            primary: values[0],
                            blast: null,
                            all: null,
                        },
                        scalar,
                        DMGTags: tags,
                        allToughness: false,
                        slot: skillRef.slot,
                        realDMGKeys,realPENKeys,realShredKeys,realVulnKeys,
                        actionTags,
                        compositeCacheTag
                    }
                }
                let ATKObject = ATKObjects.blackswanBasicATKOBJECT;

                if (battleData.isLoggyLogger) {logToBattle(battleData,{logType: "BasicATKStart", name:sourceTurn.properName, target, isEnemy: false, isCharacter: true, AV: battleData.sumAV, actionSlot:skillRef.slot});}
                poke("BasicATKStart",battleData,{sourceTurn});


                // dots: {
                //     "Lightning": 0,
                //     "Fire": 0,
                //     "Wind": 0,
                //     "Physical": 0
                // },

                const primaryTarget = battleData.primaryTarget;
                const targetDots = primaryTarget.dots;
                let stacksToApply = 1;
                stacksToApply += (targetDots.Lightning ? 1 : 0) + (targetDots.Fire ? 1 : 0) + (targetDots.Wind ? 1 : 0) + (targetDots.Physical ? 1 : 0);

                const dotFunction = ATKObjects.blackswanArcanaDOTFunction ??= logicRef.skillFunctions.blackswanArcanaDOT;
                dotFunction(battleData,sourceTurn,primaryTarget,null,stacksToApply);


                battleActions.attackWrapper(battleData,skillRef,sourceTurn,ATKObject);
                updateEnergy(battleData,skillRef.energyRegen,sourceTurn);
                poke("BasicATKEnd",battleData,{sourceTurn});
            },
            statCheck(battleData,currentTurn) {
                const logicRef = turnLogic[currentTurn.properName];
                const ATKObjects = logicRef.ATKObjects;

                if (!ATKObjects.blackswanEHRtoDMGSHEET) {
                    const characterName = currentTurn.properName;
                    const buffName = turnLogic[characterName].buffNames.ehrToDMG;
                    ATKObjects.blackswanEHRtoDMGSHEET = {
                        "stats": [DamageAll],
                        [DamageAll]: 0,
                        "source": characterName,
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
                let buffSheet = ATKObjects.blackswanEHRtoDMGSHEET;
                const buffName = buffSheet.buffName;
                const buffCheck = currentTurn.buffsObject[buffName];

                const EHRCheck = currentTurn.statTable[EffectHitRate];
                const usableValue = Math.min(0.72,EHRCheck * 0.60);

                if (buffCheck) {//if the buff exists
                    const currentValue = buffCheck[DamageAll];
                    if (currentValue === usableValue) {return;}//and we have enough, then get out
                    //if we have a mismatch on the buff amount, then remove it
                    //in BS's case, there will always be EHR to convert, so the removal here will always be silent in the log
                    else {removeBuff(battleData,currentTurn,buffCheck,true);}
                }

                buffSheet[DamageAll] = usableValue;
                updateBuff(battleData,currentTurn,buffSheet);
            },
            blackswanArcanaDOT(battleData,sourceTurn,targetTurn,generalInfo,stacksToPass) {
                const logicRef = turnLogic[sourceTurn.properName];
                const ATKObjects = logicRef.ATKObjects;

                // const generalInfo = {sourceTurn,enemiesToHit,targetsGotHit,enemiesThatBroke,dmgSlot,ATKObject,element,totals,overBreakTotals};
                const skillRef = ATKObjects.blackswanTalentREF ??= ATKObjects.Talent["Loom of Fate's Caprice"].variant1;
                const values = ATKObjects.blackswanTalentREFVALUES ??= battleActions.getLevelBasedParam(battleData,skillRef,sourceTurn);
                const rank = sourceTurn.rank;
                let characterName = sourceTurn.properName;
                
                if (!ATKObjects.blackswanArcanaDOTSHEET) {
                    const buffNames = logicRef.buffNames;

                    const tags = ["All","Wind","DOT"];
                    const keyShortcut = basicShorthand.makeKeysArray;
                    const realDMGKeys = keyShortcut(dmgKeys,tags);
                    const realPENKeys = keyShortcut(resPENKeys,tags);
                    const realShredKeys = keyShortcut(defShredKeys,tags);
                    const realVulnKeys = keyShortcut(vulnKeys,tags);
                    //realDMGKeys,realPENKeys,realShredKeys,realVulnKeys
                    const actionTags = ["DOT"];
                    const compositeCacheTag = tags + actionTags + sourceTurn.properName;
                    
                    ATKObjects.blackswanArcanaDOTSHEET = {
                        "stats": null,
                        "source": characterName,
                        "sourceOwner": sourceTurn.properName,
                        "buffName": buffNames.talentShear,
                        "durationInTurn": 3,
                        "duration": 2,
                        "AVApplied": 0,
                        "maxStacks": 50,
                        "currentStacks": 1,
                        "decay": false,
                        "expireType": null,
                        "isDOT": true,
                        "isDebuff": true,
                        "element": "Wind",
                        isAllDOTTypes: false,
                        multiplier: values[0],
                        multiPerStack: values[2],
                        scalar: "ATK",
                        slot: skillRef.slot,
                        ownerIsAllied: true,
                        ownerSlot: sourceTurn.name,
                        avgChanceApplied: 1,
                        baseChance: values[1],
                        customTurnStartFunction: logicRef.skillFunctions.blackswanArcanaDOTTurnStart,
                        isSpecialDOTLast: true,
                        tags,actionTags,compositeCacheTag,
                        realDMGKeys,realPENKeys,realShredKeys,realVulnKeys
                    }
                }
                const arcanaSheet = ATKObjects.blackswanArcanaDOTSHEET;
                const baseChance = arcanaSheet.baseChance;
                let addedE6Stack = 0;
                if (rank>=6) {
                    const valuesRef = logicRef.characterValuesBattle;
                    if (valuesRef.e6Alternator) {
                        addedE6Stack = 1;
                        valuesRef.e6Alternator = false;
                    }
                    else {
                        addedE6Stack = 0;
                        valuesRef.e6Alternator = true;
                    }
                }
                arcanaSheet.currentStacks = (stacksToPass ?? 1) + addedE6Stack;

                const getChance = battleActions.getChanceToApply;
                totalTimesHit = 1;//enemiesHit[enemySlot];

                const resultingChance = getChance(battleData,sourceTurn,targetTurn,baseChance);
                let finalAVG = resultingChance;
                if (totalTimesHit && totalTimesHit>1 && resultingChance != 1) {
                    const chanceToFail = 1 - resultingChance;
                    const composite = chanceToFail ** totalTimesHit;
                    finalAVG = 1 - composite;
                }
                arcanaSheet.avgChanceApplied = finalAVG;
                updateBuff(battleData,targetTurn,arcanaSheet);
            },
            blackswanArcanaDOTTurnStart(battleData,sourceTurn,targetTurn) {
                const logicRef = turnLogic[sourceTurn.properName];
                const ATKObjects = logicRef.ATKObjects;

                const arcanaSheet = ATKObjects.blackswanArcanaDOTSHEET;
                const arcanaName = arcanaSheet.buffName;

                const buffCheck = targetTurn.buffsObject[arcanaName];
                const stackCount = buffCheck.currentStacks;

                const sevenCheck = stackCount >= 7;
                const threeCheck = stackCount >= 3;
                const values = ATKObjects.blackswanTalentREFVALUES;

                if (sevenCheck) {
                    if (!ATKObjects.blackswanArcanaStacks7OrMoreSHEET) {
                        const characterName = sourceTurn.properName;
                        const buffName = turnLogic[characterName].buffNames.sevenStackShred;
                        ATKObjects.blackswanArcanaStacks7OrMoreSHEET = {
                            "stats": [DEFShredDOT],
                            [DEFShredDOT]: values[6],
                            "source": "Arcana Stacks",
                            "sourceOwner": characterName,
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
                    const buffSheet = ATKObjects.blackswanArcanaStacks7OrMoreSHEET;
                    updateBuff(battleData,sourceTurn,buffSheet);
                }

                const dotDMG = battleActions.dotDMGWrapper;
                // const dotOwner = alliedTurns[dotRef.ownerSlot];
                const element = buffCheck.element;
                const multi = buffCheck.multiplier;
                const scalar = buffCheck.scalar;
                const averaged = buffCheck.avgChanceApplied;
                // if (battleData.isLoggyLogger) {logToBattle(battleData,{logType: "GenericAction", source:"", bodyText: `Turnstart dot start`});}
                dotDMG(battleData,sourceTurn,targetTurn,element,multi,scalar,averaged,1,false,buffCheck);
                // if (battleData.isLoggyLogger) {logToBattle(battleData,{logType: "GenericAction", source:"", bodyText: `Turnstart dot end`});}

                if (threeCheck) {
                    const enemyPositions = battleData.enemyPositions;
                    const currentSlot = enemyPositions.indexOf(targetTurn);
                    const blast1 = currentSlot != 0 ? enemyPositions[currentSlot - 1] : null;
                    const blast2 = currentSlot != enemyPositions.length-1 ? enemyPositions[currentSlot + 1] : null;
                    const dotFunction = ATKObjects.blackswanArcanaDOTFunction ??= logicRef.skillFunctions.blackswanArcanaDOT;
                    const dotDMG = battleActions.dotDMGWrapper;


                    if (!ATKObjects.talentBlastRef) {
                        const keyShortcut = basicShorthand.makeKeysArray;
                        const tags = ["All","Wind","DOT"];
                        ATKObjects.talentBlastRef = {
                            buffName: "Arcana Blast (Stacks >= 3)",
                            tags,
                            actionTags: ["DOT"],
                            realDMGKeys: keyShortcut(dmgKeys,tags),
                            realPENKeys: keyShortcut(resPENKeys,tags),
                            realShredKeys: keyShortcut(defShredKeys,tags),
                            realVulnKeys: keyShortcut(vulnKeys,tags),
                        }
                    }
                    const talentBlastRef = ATKObjects.talentBlastRef;

                    if (blast1) {
                        dotFunction(battleData,sourceTurn,blast1,null,1);
                        dotDMG(battleData,sourceTurn,blast1,"Wind",values[4],"ATK",1,1,false,talentBlastRef);
                    }
                    if (blast2) {
                        dotFunction(battleData,sourceTurn,blast2,null,1);
                        dotDMG(battleData,sourceTurn,blast2,"Wind",values[4],"ATK",1,1,false,talentBlastRef);
                        // dotDMG(battleData,sourceTurn,blast1,"Wind",values[4],"ATK",1,1,false,talentBlastRef,true);
                    }
                }

                if (sevenCheck) {
                    const buffSheet = ATKObjects.blackswanArcanaStacks7OrMoreSHEET;
                    removeBuff(battleData,sourceTurn,buffSheet);
                }

                // enemy.blackswanEpiphanyResetDelayReady = true;
                if (!targetTurn.blackswanEpiphanyResetDelayReady) {
                    buffCheck.currentStacks = 1;
                    if (battleData.isLoggyLogger) {logToBattle(battleData,{logType: "GenericAction", source:"Arcana turn-start handler", bodyText: `Arcana stacks reset to 1`});}
                }
            },
            blackswanSkill(battleData,target,sourceTurn) {
                const logicRef = turnLogic[sourceTurn.properName];
                const ATKObjects = logicRef.ATKObjects;

                let skillRef = ATKObjects.blackswanSkillREF ??= ATKObjects["Skill"]["Decadence, False Twilight"].variant1;
                let values = ATKObjects.blackswanSkillREFVALUES ??= battleActions.getLevelBasedParam(battleData,skillRef,sourceTurn);

                const characterName = sourceTurn.properName;
                if (!ATKObjects.blackswanSkillATKOBJECT) {
                    skillRef.hitSplits = hitSplitters[sourceTurn.properName].skill;
                    // let values = battleActions.getLevelBasedParam(battleData,skillRef,sourceTurn);
                    const scalar = "ATK";
                    const tags = ["All","Skill","Wind"];
                    const keyShortcut = basicShorthand.makeKeysArray;
                    const realDMGKeys = keyShortcut(dmgKeys,tags);
                    const realPENKeys = keyShortcut(resPENKeys,tags);
                    const realShredKeys = keyShortcut(defShredKeys,tags);
                    const realVulnKeys = keyShortcut(vulnKeys,tags);
                    //realDMGKeys,realPENKeys,realShredKeys,realVulnKeys
                    const actionTags = ["Skill","Attack"];
                    const compositeCacheTag = tags + actionTags + sourceTurn.properName;
                    ATKObjects.blackswanSkillATKOBJECT = {
                        multipliers: {
                            primary: values[0],
                            blast: values[0],
                            all: null,
                        },
                        scalar,
                        DMGTags: tags,
                        allToughness: false,
                        slot: skillRef.slot,
                        realDMGKeys,realPENKeys,realShredKeys,realVulnKeys,
                        actionTags,
                        compositeCacheTag,
                        dotDetonateFunction: null,//logicRef.skillFunctions.kafkaSkillDetonate
                    }

                    const buffNames = logicRef.buffNames;
                    ATKObjects.blackswanSkillDEBUFFSHEET = {
                        "stats": [DEFP],
                        [DEFP]: -values[3],
                        "statsOnHit": null,
                        "source": "Skill",
                        "sourceOwner": characterName,
                        "buffName": buffNames.skillShred,
                        "durationInTurn": 4,
                        "duration": 3,
                        "AVApplied": 0,
                        "maxStacks": 1,
                        "currentStacks": 1,
                        "decay": false,
                        "expireType": "EndTurn",
                        "isDebuff": true,
                    }
                }
                let ATKObject = ATKObjects.blackswanSkillATKOBJECT;
                const debuffSheet = ATKObjects.blackswanSkillDEBUFFSHEET;


                if (battleData.isLoggyLogger) {logToBattle(battleData,{logType: "SkillStart", name:sourceTurn.properName, target, isEnemy: false, isCharacter: true, AV: battleData.sumAV, actionSlot:skillRef.slot});}
                poke("SkillStart",battleData,{sourceTurn});


                const allBlastTargets = battleData.fullBlastTargets;
                const dotFunction = ATKObjects.blackswanArcanaDOTFunction ??= logicRef.skillFunctions.blackswanArcanaDOT;

                //Viscera's Disquiet, the trace, applies more stacks following the same logic as the basic attack,
                //but for w/e fuckin reason is considered its own trace instead of being bundled into the skill. Very cool.
                let stacksToApply = 1;
                for (let enemy of allBlastTargets) {
                    dotFunction(battleData,sourceTurn,enemy,null,stacksToApply);
                }
                const primaryTarget = battleData.primaryTarget;
                const targetDots = primaryTarget.dots;
                stacksToApply = 0;
                stacksToApply += (targetDots.Lightning ? 1 : 0) + (targetDots.Fire ? 1 : 0) + (targetDots.Wind ? 1 : 0) + (targetDots.Physical ? 1 : 0);
                dotFunction(battleData,sourceTurn,primaryTarget,null,stacksToApply);

                battleActions.attackWrapper(battleData,skillRef,sourceTurn,ATKObject);

                for (let enemy of allBlastTargets) {updateBuff(battleData,enemy,debuffSheet);}

                updateEnergy(battleData,skillRef.energyRegen,sourceTurn);
                poke("SkillEnd",battleData,{sourceTurn});
            },
            blackswanUltimate(battleData,sourceTurn) {
                const logicRef = turnLogic[sourceTurn.properName];
                const ATKObjects = logicRef.ATKObjects;

                const characterName = sourceTurn.properName;
                let skillRef = ATKObjects.blackswanUltimateREF ??= ATKObjects.Ultimate["Bliss of Otherworld's Embrace"].variant1;
                let values = ATKObjects.blackswanUltimateREFVALUES ??= battleActions.getLevelBasedParam(battleData,skillRef,sourceTurn);
                const rank = sourceTurn.rank;

                if (!ATKObjects.blackswanUltimateATKOBJECT) {
                    skillRef.hitSplits = hitSplitters[sourceTurn.properName].ult;
                    // const values = battleActions.getLevelBasedParam(battleData,skillRef,sourceTurn);
                    const scalar = "ATK";
                    const tags = ["All","Ultimate","Wind"];
                    const keyShortcut = basicShorthand.makeKeysArray;
                    const realDMGKeys = keyShortcut(dmgKeys,tags);
                    const realPENKeys = keyShortcut(resPENKeys,tags);
                    const realShredKeys = keyShortcut(defShredKeys,tags);
                    const realVulnKeys = keyShortcut(vulnKeys,tags);
                    const actionTags = ["Ultimate","Attack"];
                    const compositeCacheTag = tags + actionTags + sourceTurn.properName;
                    //realDMGKeys,realPENKeys,realShredKeys,realVulnKeys
                    ATKObjects.blackswanUltimateATKOBJECT = {
                        multipliers: {
                            primary: null,
                            blast: null,
                            all: values[0],
                        },
                        scalar,
                        DMGTags: tags,
                        allToughness: false,
                        slot: skillRef.slot,
                        realDMGKeys,realPENKeys,realShredKeys,realVulnKeys,
                        actionTags,
                        compositeCacheTag,
                        // dotApplyFunction: logicRef.skillFunctions.kafkaUltimateDOT,
                        // dotDetonateFunction: logicRef.skillFunctions.fishladyUltimateDetonate
                    }

                    const buffNames = logicRef.buffNames;
                    ATKObjects.blackswanUltimateDEBUFFSHEET = {
                        "stats": null,
                        "statsOnTurn": [VulnAll],
                        [VulnAll]: values[2],
                        "source": "Ultimate",
                        "sourceOwner": characterName,
                        "buffName": buffNames.ultVuln,
                        "durationInTurn": 3,
                        "duration": 2,
                        "AVApplied": 0,
                        "maxStacks": 1,
                        "currentStacks": 1,
                        "decay": false,
                        "expireType": "EndTurn",
                        "isDebuff": true,
                        "isAllDOTTypes": true,
                    }
                    if (rank >=4) {
                        ATKObjects.blackswanUltimateDEBUFFSHEETE4 = {
                            "stats": [EffectRES],
                            [EffectRES]: -0.10,
                            "source": "E4",
                            "sourceOwner": characterName,
                            "buffName": buffNames.ultVulnE4,
                            "durationInTurn": 3,
                            "duration": 2,
                            "AVApplied": 0,
                            "maxStacks": 1,
                            "currentStacks": 1,
                            "decay": false,
                            "expireType": "EndTurn",
                            "isDebuff": false,
                        }
                    }
                }
                let ATKObject = ATKObjects.blackswanUltimateATKOBJECT;
                const debuffSheet = ATKObjects.blackswanUltimateDEBUFFSHEET;
                
                const enemyPositions = battleData.enemyPositions;

                updateEnergy(battleData,-sourceTurn.maxEnergy,sourceTurn);
                // logicRef.skillFunctions.addHysilensField(battleData,sourceTurn);

                if (rank>=4) {
                    const e4Sheet = ATKObjects.blackswanUltimateDEBUFFSHEETE4;
                    for (let enemy of enemyPositions) {
                        updateBuff(battleData,enemy,debuffSheet);
                        enemy.blackswanEpiphanyResetDelayReady = true;
                        e4Sheet.duration = duration;
                        updateBuff(battleData,enemy,e4Sheet);
                    }

                }
                else {
                    for (let enemy of enemyPositions) {
                        updateBuff(battleData,enemy,debuffSheet);
                        enemy.blackswanEpiphanyResetDelayReady = true;
                    }
                }
                
                battleActions.attackWrapper(battleData,skillRef,sourceTurn,ATKObject);
                updateEnergy(battleData,skillRef.energyRegen,sourceTurn);

                sourceTurn.ultyQueued = false;
            },
            blackswanTechnique(battleData,target,sourceTurn) {
                const logicRef = turnLogic[sourceTurn.properName];
                const ATKObjects = logicRef.ATKObjects;

                let characterName = sourceTurn.properName;
                // let charSlot = sourceTurn.name;
                // let skillPathing = characters[characterName].skills;
                let skillRef = ATKObjects.blackswanTechREF ??= ATKObjects.Technique["From Façade to Vérité"].variant1;


                if (battleData.isLoggyLogger) {logToBattle(battleData,{logType: "TechniqueStart", name:characterName, target, isEnemy: false, isCharacter: true, AV: battleData.sumAV, actionSlot:skillRef.slot});}
                poke("TechniqueStart",battleData,{sourceTurn});

                const enemyTurns = battleData.enemyPositions;
                const dotProc = ATKObjects.blackswanArcanaDOT ??= turnLogic[characterName].skillFunctions.blackswanArcanaDOT;
                // blackswanArcanaDOT(battleData,sourceTurn,targetTurn,generalInfo,stacksToPass)

                const getChance = battleActions.getChanceToApply;
                for (let enemy of enemyTurns) {
                    let baseChance = 1.5 * 0.5;
                    // const resultingChance = getChance(battleData,sourceTurn,enemy,baseChance);
                    let timesToApply = 1;
                    let currentChance = getChance(battleData,sourceTurn,enemy,baseChance);
                    while (currentChance > 0.50) {
                        //for now we assume if the final chance to apply is ever greater than 50%, then we apply, otherwise we abort and move on to the next target
                        //TODO: come back later and see if statistically this is an actual fair method
                        baseChance *= 0.5;
                        currentChance = getChance(battleData,sourceTurn,enemy,baseChance);
                        timesToApply += 1;
                    }
                    dotProc(battleData,sourceTurn,enemy,null,timesToApply);
                }

                poke("TechniqueEnd",battleData,{sourceTurn});
            },
        },
        "listeners": [
            {
                "trigger": "DOTDMGStart",
                condition(battleData,generalInfo) {
                    // poke("DOTDMGEnd",battleData,turnMerge)
                    // const turnMerge = {targetTurn,sourceTurn,element,isDetonated,sourceOverride};
                    // dotDMGWrapper(battleData,sourceTurn,targetTurn,element,multi,scalar,averaged,detonateMulti,isDetonated,currentBuff,sourceOverride)

                    const isDetonated = generalInfo.isDetonated;
                    if (isDetonated) {return;}

                    const targetTurn = generalInfo.targetTurn;
                    const ownerTurn = this.ownerTurn;
                    const dotFunction = this.blackswanArcanaDOTFunction ??= turnLogic[ownerTurn.properName].skillFunctions.blackswanArcanaDOT;
                    // if (battleData.isLoggyLogger) {logToBattle(battleData,{logType: "GenericAction", source:"", bodyText: `Detonated stack start`});}
                    dotFunction(battleData,ownerTurn,targetTurn,null,1);
                    // if (battleData.isLoggyLogger) {logToBattle(battleData,{logType: "GenericAction", source:"", bodyText: `Detonated stack End`});}
                    //the talent makes it so at the start of any dot received from a turn start dot array, will have a chance to further stack arcana even more
                },
                "target": "enemy",
                "listenerName": "Talent stacker - dot dmg start listener",
                "ownerTurn": {},
            },
            {
                "trigger": "DOTDMGEnd",
                condition(battleData,generalInfo) {
                    // poke("DOTDMGEnd",battleData,turnMerge)
                    // const turnMerge = {targetTurn,sourceTurn,element,isDetonated,sourceOverride};
                    // dotDMGWrapper(battleData,sourceTurn,targetTurn,element,multi,scalar,averaged,detonateMulti,isDetonated,currentBuff,sourceOverride)

                    const isDetonated = generalInfo.isDetonated;
                    if (!isDetonated) {return;}
                    const targetTurn = generalInfo.targetTurn;
                    // console.log(targetTurn.blackSwanAllyAttackProcCounter)
                    if (targetTurn.blackSwanAllyAttackProcCounter >= 3) {return;}
                    // const turnMerge = {targetTurn,sourceTurn,element,isDetonated,sourceOverride,isBreakDOT};

                    // let skillRef = sourceTurn.fishladyUltimateREF ??= sourceTurn.Ultimate["Maelstrom Rhapsody"].variant1;
                    const ownerTurn = this.ownerTurn;
                    const dotFunction = this.blackswanArcanaDOTFunction ??= turnLogic[ownerTurn.properName].skillFunctions.blackswanArcanaDOT;
                    dotFunction(battleData,ownerTurn,targetTurn,null,1);
                    targetTurn.blackSwanAllyAttackProcCounter += 1;
                    // console.log(targetTurn.blackSwanAllyAttackProcCounter)
                    //the major trace makes it so dots detonated/triggered during an ally attack can apply another arcana stack to the target, up to 3 dots max
                    //confirmed that the 3 stack limit is per target, per attack, using kafka, hysilens, and black swan
                },
                "target": "enemy",
                "listenerName": "Goblet's Dredges - dot dmg listener",
                "ownerTurn": {},
            },
            {
                "trigger": "DOTDetonateStart",
                condition(battleData,generalInfo) {
                    // poke("DOTDetonateStart",battleData,{sourceTurn,skillSlot:dmgSlot,targetTurn});
                    const enemyPositions = battleData.enemyPositions;
                    for (let enemy of enemyPositions) {
                        enemy.blackSwanAllyAttackProcCounter = 0;
                    }
                },
                "target": "self",
                "listenerName": "Goblet's Dredges - dot detonate start listener",
                "ownerTurn": {},
            },
            {
                "trigger": "EnemyCreated",
                condition(battleData,generalInfo) {
                    // poke("HealEnd",battleData,turnMerge);
                    let ownerTurn = this.ownerTurn;
                    const enemyTurn = generalInfo.slotRef;

                    const stacks = 1;
                    const dotFunction = this.blackswanArcanaDOTFunction ??= turnLogic[ownerTurn.properName].skillFunctions.blackswanArcanaDOT;
                    dotFunction(battleData,ownerTurn,enemyTurn,generalInfo,stacks);
                    // updateBuff(battleData,enemyTurn,debuffSheet);
                },
                "target": "self",
                "listenerName": "Arcana - enemy added to field listener",
                "ownerTurn": {},
            },
            {
                "trigger": "UpdateStatEffectHitRate",//EffectHitRate stat family
                condition(battleData,generalInfo) {
                    let ownerTurn = this.ownerTurn;
                    let characterName = ownerTurn.properName;
                    let sourceTurn = generalInfo.sourceTurn;

                    if (sourceTurn.properName != characterName) {return;}

                    const statCheck = this.statCheck ??= turnLogic[characterName].skillFunctions.statCheck;
                    statCheck(battleData,ownerTurn);
                },
                "target": "self",
                "listenerName": "EHR to DMG EHR check",
                "ownerTurn": {},
            },
            {
                "trigger": "PreBattleEntersCombat",
                condition(battleData,generalInfo) {
                    let ownerTurn = this.ownerTurn;
                    let characterName = ownerTurn.properName;

                    const statCheck = this.statCheck ??= turnLogic[characterName].skillFunctions.statCheck;
                    statCheck(battleData,ownerTurn);
                },
                "target": "self",
                "listenerName": "EHR to DMG battlestart check",
                "ownerTurn": {},
            },
            {
                "trigger": "UltimateReady",
                condition(battleData,generalInfo) {
                    let ownerTurn = this.ownerTurn;
                    if (ownerTurn.ultyQueued) {return;}

                    let energyCheck = ownerTurn.currentEnergy === ownerTurn.maxEnergy;
                    let otherObscureCondition = energyCheck && checkUlty(battleData,ownerTurn);

                    if (otherObscureCondition) {
                        ownerTurn.ultyQueued = true;

                        const queueObject = this.queueObject ??= {
                            actionCall: turnLogic[ownerTurn.properName].skillFunctions.blackswanUltimate,
                            target: this.target,
                            name: this.listenerName,
                            properName: ownerTurn.properName,
                            sourceTurn: null,
                            isAttack: true,
                            priority: priorityList.turn.Default,
                        }
                        queueObject.sourceTurn = ownerTurn;
                        queueUltimate(battleData,queueObject);
                    }
                },
                "target": "self",
                "listenerName": "Black Swan - Ultimate queued",
                "ownerTurn": {},
            },
            {
                "trigger": "PreBattleStartTechniquesNormal",
                condition(battleData,generalInfo) {
                    let ownerTurn = this.ownerTurn;
                    let characterName = ownerTurn.properName;
                    //PreBattleStartTechniquesNormal for always active techniques that don't need to care
                    //StartBattle for dmg techniques that could have conflicts
                    let logicRef = turnLogic[characterName];
                    let useTechnique = logicRef.useTechnique;
                    if (useTechnique && battleData.techniquesAllowed) {
                        const blackswanTechnique = this.blackswanTechnique ??= logicRef.skillFunctions.blackswanTechnique
                        blackswanTechnique(battleData,"enemy",ownerTurn);
                    }
                },
                "target": "self",
                "listenerName": "Black Swan Technique",
                "ownerTurn": {},
            },
        ],
        "eidolonListeners": {
            1: [
                {
                    "trigger": "DOTWasModified",
                    condition(battleData,generalInfo) {
                        // let ownerRef = this.owners;
                        const sourceTurn = generalInfo.sourceTurn;
                        const ownerTurn = this.ownerTurn;

                        const logicRef = turnLogic[ownerTurn.properName];
                        const ATKObjects = logicRef.ATKObjects;

                        if (!ATKObjects.E1DebuffRESSHEETLightning) {
                            // "E1RESLightning": "Seven Pillars of Wisdom [Lightning]",
                            // "E1RESPhysical": "Seven Pillars of Wisdom [Physical]",
                            // "E1RESFire": "Seven Pillars of Wisdom [Fire]",
                            // "E1RESWind": "Seven Pillars of Wisdom [Wind]",
                            const characterName = ownerTurn.properName;
                            const buffNames = logicRef.buffNames;
                            ATKObjects.E1DebuffRESSHEETLightning = {
                                "stats": [ResistanceLightning],
                                [ResistanceLightning]: -0.25,
                                "source": "E1",
                                "sourceOwner": characterName,
                                "buffName": buffNames.E1RESLightning,
                                "durationInTurn": null,
                                "duration": 1,
                                "AVApplied": 0,
                                "maxStacks": 1,
                                "currentStacks": 1,
                                "decay": false,
                                "expireType": null,
                                "isDebuff": true,
                            }
                            ATKObjects.E1DebuffRESSHEETPhysical = {
                                "stats": [ResistancePhysical],
                                [ResistancePhysical]: -0.25,
                                "source": "E1",
                                "sourceOwner": characterName,
                                "buffName": buffNames.E1RESPhysical,
                                "durationInTurn": null,
                                "duration": 1,
                                "AVApplied": 0,
                                "maxStacks": 1,
                                "currentStacks": 1,
                                "decay": false,
                                "expireType": null,
                                "isDebuff": true,
                            }
                            ATKObjects.E1DebuffRESSHEETFire = {
                                "stats": [ResistancePhysical],
                                [ResistancePhysical]: -0.25,
                                "source": "E1",
                                "sourceOwner": characterName,
                                "buffName": buffNames.E1RESFire,
                                "durationInTurn": null,
                                "duration": 1,
                                "AVApplied": 0,
                                "maxStacks": 1,
                                "currentStacks": 1,
                                "decay": false,
                                "expireType": null,
                                "isDebuff": true,
                            }
                            ATKObjects.E1DebuffRESSHEETWind = {
                                "stats": [ResistancePhysical],
                                [ResistancePhysical]: -0.25,
                                "source": "E1",
                                "sourceOwner": characterName,
                                "buffName": buffNames.E1RESWind,
                                "durationInTurn": null,
                                "duration": 1,
                                "AVApplied": 0,
                                "maxStacks": 1,
                                "currentStacks": 1,
                                "decay": false,
                                "expireType": null,
                                "isDebuff": true,
                            }
                        }

                        // const enemyElementalRef = sourceTurn.dots;
                        // enemyElementalRef.Wind -= 1;
                        // enemyElementalRef.Fire -= 1;
                        // enemyElementalRef.Lightning -= 1;
                        // enemyElementalRef.Physical -= 1;
                        const lightningSheet = ATKObjects.E1DebuffRESSHEETLightning;
                        const physicalSheet = ATKObjects.E1DebuffRESSHEETPhysical;
                        const fireSheet = ATKObjects.E1DebuffRESSHEETFire;
                        const windSheet = ATKObjects.E1DebuffRESSHEETWind;
                        const sourceDots = sourceTurn.dots;
                        const sourceBuffs = sourceTurn.buffsObject;

                        if (sourceDots.Lightning) {
                            const buffCheck = sourceBuffs[lightningSheet.buffName];
                            if (!buffCheck) {updateBuff(battleData,sourceTurn,lightningSheet);}
                        }
                        else {
                            const buffCheck = sourceBuffs[lightningSheet.buffName];
                            if (buffCheck) {removeBuff(battleData,sourceTurn,lightningSheet);}
                        }

                        if (sourceDots.Physical) {
                            const buffCheck = sourceBuffs[physicalSheet.buffName];
                            if (!buffCheck) {updateBuff(battleData,sourceTurn,physicalSheet);}
                        }
                        else {
                            const buffCheck = sourceBuffs[physicalSheet.buffName];
                            if (buffCheck) {removeBuff(battleData,sourceTurn,physicalSheet);}
                        }

                        if (sourceDots.Fire) {
                            const buffCheck = sourceBuffs[fireSheet.buffName];
                            if (!buffCheck) {updateBuff(battleData,sourceTurn,fireSheet);}
                        }
                        else {
                            const buffCheck = sourceBuffs[fireSheet.buffName];
                            if (buffCheck) {removeBuff(battleData,sourceTurn,fireSheet);}
                        }

                        if (sourceDots.Wind) {
                            const buffCheck = sourceBuffs[windSheet.buffName];
                            if (!buffCheck) {updateBuff(battleData,sourceTurn,windSheet);}
                        }
                        else {
                            const buffCheck = sourceBuffs[windSheet.buffName];
                            if (buffCheck) {removeBuff(battleData,sourceTurn,windSheet);}
                        }
                    },
                    "target": "self",
                    "listenerName": "Seven Pillars of Wisdom - dot applied/removed listener",
                    "owners": []
                },
            ],
            2: [
                {
                    "trigger": "EnemyDied",
                    condition(battleData,generalInfo) {
                        // poke("HealEnd",battleData,turnMerge);
                        let ownerTurn = this.ownerTurn;

                        const logicRef = turnLogic[ownerTurn.properName];
                        const ATKObjects = logicRef.ATKObjects;

                        const targetTurn = generalInfo.enemyKilled;
                        const arcanaSheet = ATKObjects.blackswanArcanaDOTSHEET;
                        const arcanaName = arcanaSheet.buffName;
                        const buffCheck = targetTurn.buffsObject[arcanaName];
                        if (!buffCheck) {return;}

                        const enemyPositions = battleData.enemyPositions;
                        const currentSlot = enemyPositions.indexOf(targetTurn);
                        const blast1 = currentSlot != 0 ? enemyPositions[currentSlot - 1] : null;
                        const blast2 = currentSlot != enemyPositions.length-1 ? enemyPositions[currentSlot + 1] : null;
                        const dotFunction = this.blackswanArcanaDOTFunction ??= logicRef.skillFunctions.blackswanArcanaDOT;
    
                        const E2Stacks = 6;
                        if (blast1) {
                            dotFunction(battleData,ownerTurn,blast1,null,E2Stacks);
                        }
                        if (blast2) {
                            dotFunction(battleData,ownerTurn,blast2,null,E2Stacks);
                        }
                    },
                    "target": "self",
                    "listenerName": "Black Swan E2 enemy died listener",
                    "ownerTurn": {},
                },
            ],
            3: [],
            4: [
                {
                    "trigger": "EnemyDied",
                    condition(battleData,generalInfo) {
                        // poke("HealEnd",battleData,turnMerge);
                        let ownerTurn = this.ownerTurn;

                        const logicRef = turnLogic[ownerTurn.properName];
                        const ATKObjects = logicRef.ATKObjects;

                        const epiphanySheet = ATKObjects.blackswanUltimateDEBUFFSHEET;
                        if (!epiphanySheet || !ownerTurn.isReadyForE4Regen) {return;}
                        //if the epiphany sheet hasn't been constructed uncer black swan yet, then obv nobody would have epiphany anyways, and we can abort
                        const targetTurn = generalInfo.enemyKilled;
                        const epiphanyName = epiphanySheet.buffName;
                        const buffCheck = targetTurn.buffsObject[epiphanyName];
                        if (!buffCheck) {return;}
                        //if the enemy died with no debuff, then we can abort

                        updateEnergy(battleData,8,ownerTurn,false,"E4: energy regen");
                        ownerTurn.isReadyForE4Regen = false;
                    },
                    "target": "self",
                    "listenerName": "Black Swan E2 enemy died listener",
                    "ownerTurn": {},
                },
                {
                    "trigger": "StartTurn",
                    condition(battleData,generalInfo) {
                        let ownerTurn = this.ownerTurn;
                        const sourceTurn = generalInfo.sourceTurn;

                        const logicRef = turnLogic[ownerTurn.properName];
                        const ATKObjects = logicRef.ATKObjects;

                        const epiphanySheet = ATKObjects.blackswanUltimateDEBUFFSHEET;
                        if (!sourceTurn.isEnemy || !ownerTurn.isReadyForE4Regen || !epiphanySheet) {return;}
                        //we're only looking for enemy turns that start, while we're ready for e4 regen, and the epiphany sheet has been constructed

                        const epiphanyName = epiphanySheet.buffName;
                        const buffCheck = sourceTurn.buffsObject[epiphanyName];
                        if (!buffCheck) {return;}

                        updateEnergy(battleData,8,ownerTurn,false,"E4: energy regen");
                        ownerTurn.isReadyForE4Regen = false;
                    },
                    "target": "self",
                    "listenerName": "Black Swan E4 enemy turn start listener",
                    "ownerTurn": {},
                },
                {
                    "trigger": "UltimateStart",
                    condition(battleData,generalInfo) {
                        let ownerTurn = this.ownerTurn;
                        const sourceTurn = generalInfo.sourceTurn;
                        if (sourceTurn.properName != ownerTurn.properName) {return;}
                        ownerTurn.isReadyForE4Regen = true;
                    },
                    "target": "self",
                    "listenerName": "Black Swan E4 regen reset",
                    "ownerTurn": {},
                },
            ],
            5: [],
            6: [
                {
                    "trigger": "AttackEnd",
                    condition(battleData,generalInfo) {
                        const ownerTurn = this.ownerTurn;
                        const sourceTurn = generalInfo.sourceTurn;
                        if (sourceTurn.isEnemy) {return;}

                        const targetsGotHit = generalInfo.targetsGotHit;
                        const enemyTurns = battleData.enemyBasedTurns;
                        const dotFunction = this.blackswanArcanaDOTFunction ??= turnLogic[ownerTurn.properName].skillFunctions.blackswanArcanaDOT;
                        for (let enemy in targetsGotHit) {
                            const enemyTurn = enemyTurns[enemy];
                            dotFunction(battleData,ownerTurn,enemyTurn,null,1);
                        }
                    },
                    "target": "self",
                    "listenerName": "Black Swan E6 ally attacked listener",
                    "ownerTurn": {},
                },
            ],
        },
        "ATKObjects": {},
        "listenersBattle": [],
        "buffsBattle": {},
        "buffsBattleTemp": {},
        "characterValues": {
            "talentDOTCounter": 0,
            "e6Alternator": true,
        },
        "useTechnique": true,
        "techniqueType": "Buff",
        "buffNames": {
            "ehrToDMG": "Candleflame's Portent",
            "talentShear": "Arcana [Black Swan]",
            "sevenStackShred": "Arcana DEF Shred (Stacks >= 7)",
            "skillShred": "Decadence, False Twilight",
            "ultVuln": "Epiphany [Bliss of Otherworld's Embrace]",
            "ultVulnE4": "Epiphany [Bliss of Otherworld's Embrace: E4]",

            "E1RESLightning": "Seven Pillars of Wisdom [Lightning]",
            "E1RESPhysical": "Seven Pillars of Wisdom [Physical]",
            "E1RESFire": "Seven Pillars of Wisdom [Fire]",
            "E1RESWind": "Seven Pillars of Wisdom [Wind]",
        },
        "characterValuesBattle": {},
    },
    "Firefly_v0": {//ATKOBJECTS DONE
        logic(thisTurn,battleData) {
            let statCalls = thisTurn.battleValues;

            let currentSP = battleData.skillPointCurrent;
            const minimum = currentSP>0;
            const isCombustion = statCalls.combustionActive;
            const rank = thisTurn.rank;

            const skillCheck1 = minimum;
            const skillCheck2 = isCombustion && rank >= 1;
            const canUseSkill = (skillCheck1 || skillCheck2) && checkSkill(battleData,thisTurn);

            if (canUseSkill) {
                if (isCombustion) {
                    return rank>=1 ? this.returnSkillCallEnhE1 : this.returnSkillCallEnh;
                }
                else {return this.returnSkillCall;}
            }

            const actionChosen = isCombustion ? this.returnBasicEnhCall : this.returnBasicCall;
            return actionChosen;
            //default to basic atk when all else fails
        },
        preLogic(thisTurn,battleData) {
            this.returnSkillCallEnhE1 ??= {
                action: "Skill", 
                isAttack: true,
                isAbility: true,
                points: 0, 
                actionCall: this.skillFunctions.fireflySkillEnhanced, 
                target: "enemy", 
            }
            this.returnSkillCallEnh ??= {
                action: "Skill", 
                isAttack: true,
                isAbility: true,
                points: -1, 
                actionCall: this.skillFunctions.fireflySkillEnhanced, 
                target: "enemy", 
            }
            this.returnSkillCall ??= {
                action: "Skill", 
                isAttack: true,
                isAbility: true,
                points: -1, 
                actionCall: this.skillFunctions.fireflySkillReg, 
                target: "enemy", 
            }
            this.returnBasicEnhCall ??= {
                action: "BasicATK", 
                isAttack: true,
                isAbility: true,
                points: 1, 
                actionCall: this.skillFunctions.fireflyBasicEnhanced, 
                target: "enemy", 
            }
            this.returnBasicCall ??= {
                action: "BasicATK", 
                isAttack: true,
                isAbility: true,
                points: 1, 
                actionCall: this.skillFunctions.fireflyBasicReg, 
                target: "enemy", 
            }
        },
        "skillFunctions": {
            fireflyBasicReg(battleData,target,sourceTurn) {
                const logicRef = turnLogic[sourceTurn.properName];
                const ATKObjects = logicRef.ATKObjects;

                let skillRef = ATKObjects.fireflyBasicRegREF ??= ATKObjects["Basic ATK"]["Order: Flare Propulsion"].variant1;

                if (!ATKObjects.fireflyBasicRegATKOBJECT) {
                    skillRef.hitSplits = hitSplitters[sourceTurn.properName].basic;
                    let values = ATKObjects.fireflyBasicRegREFVALUES ??= battleActions.getLevelBasedParam(battleData,skillRef,sourceTurn);
                    const scalar = "ATK";
                    const tags = ["All","Basic","Fire"];
                    const keyShortcut = basicShorthand.makeKeysArray;
                    const realDMGKeys = keyShortcut(dmgKeys,tags);
                    const realPENKeys = keyShortcut(resPENKeys,tags);
                    const realShredKeys = keyShortcut(defShredKeys,tags);
                    const realVulnKeys = keyShortcut(vulnKeys,tags);
                    const actionTags = ["Basic","Attack"];
                    const compositeCacheTag = tags + actionTags + sourceTurn.properName;
                    //realDMGKeys,realPENKeys,realShredKeys,realVulnKeys
                    
                    ATKObjects.fireflyBasicRegATKOBJECT = {
                        multipliers: {
                            primary: values[0],
                            blast: null,
                            all: null,
                        },
                        scalar,
                        DMGTags: tags,
                        allToughness: false,
                        slot: skillRef.slot,
                        realDMGKeys,realPENKeys,realShredKeys,realVulnKeys,
                        actionTags,
                        compositeCacheTag
                    }
                }
                let ATKObject = ATKObjects.fireflyBasicRegATKOBJECT;

                if (battleData.isLoggyLogger) {logToBattle(battleData,{logType: "BasicATKStart", name:sourceTurn.properName, target, isEnemy: false, isCharacter: true, AV: battleData.sumAV, actionSlot:skillRef.slot});}
                poke("BasicATKStart",battleData,{sourceTurn});
                battleActions.attackWrapper(battleData,skillRef,sourceTurn,ATKObject);
                updateEnergy(battleData,skillRef.energyRegen,sourceTurn);
                poke("BasicATKEnd",battleData,{sourceTurn});
            },
            fireflySkillReg(battleData,target,sourceTurn) {
                const logicRef = turnLogic[sourceTurn.properName];
                const ATKObjects = logicRef.ATKObjects;

                let skillRef = ATKObjects.fireflySkillRegREF ??= ATKObjects["Skill"]["Order: Aerial Bombardment"].variant1;
                let values = ATKObjects.fireflySkillRegREFVALUES ??= battleActions.getLevelBasedParam(battleData,skillRef,sourceTurn);

                if (!ATKObjects.fireflySkillRegATKOBJECT) {
                    skillRef.hitSplits = hitSplitters[sourceTurn.properName].skill;
                    // let values = battleActions.getLevelBasedParam(battleData,skillRef,sourceTurn);
                    const scalar = "ATK";
                    const tags = ["All","Skill","Fire"];
                    const keyShortcut = basicShorthand.makeKeysArray;
                    const realDMGKeys = keyShortcut(dmgKeys,tags);
                    const realPENKeys = keyShortcut(resPENKeys,tags);
                    const realShredKeys = keyShortcut(defShredKeys,tags);
                    const realVulnKeys = keyShortcut(vulnKeys,tags);
                    const actionTags = ["Skill","Attack"];
                    const compositeCacheTag = tags + actionTags + sourceTurn.properName;
                    //realDMGKeys,realPENKeys,realShredKeys,realVulnKeys
                    ATKObjects.fireflySkillRegATKOBJECT = {
                        multipliers: {
                            primary: values[0],
                            blast: null,
                            all: null,
                        },
                        scalar,
                        DMGTags: tags,
                        allToughness: false,
                        slot: skillRef.slot,
                        realDMGKeys,realPENKeys,realShredKeys,realVulnKeys,
                        actionTags,
                        compositeCacheTag
                    }
                }
                let ATKObject = ATKObjects.fireflySkillRegATKOBJECT;

                if (battleData.isLoggyLogger) {logToBattle(battleData,{logType: "SkillStart", name:sourceTurn.properName, target, isEnemy: false, isCharacter: true, AV: battleData.sumAV, actionSlot:skillRef.slot});}
                poke("SkillStart",battleData,{sourceTurn});

                const energyBump = sourceTurn.maxEnergy * 0.60;
                updateEnergy(battleData,energyBump,sourceTurn,true);
                // battleActions.consumeHP(battleData,isAllAllies,percent,targetTurn,sourceTurn)
                battleActions.consumeHP(battleData,false,values[1],sourceTurn,sourceTurn,skillRef.slot);

                battleActions.attackWrapper(battleData,skillRef,sourceTurn,ATKObject);
                // updateEnergy(battleData,skillRef.energyRegen,sourceTurn);//Firefly skill doesn't actually have energy regen associated with it, just the fixed% regen it causes
                poke("SkillEnd",battleData,{sourceTurn});
                actionAdvance(0.25,sourceTurn,battleData,"Firefly Skill [Regular]");
            },
            fireflyUltimate(battleData,sourceTurn) {
                const logicRef = turnLogic[sourceTurn.properName];
                const ATKObjects = logicRef.ATKObjects;

                let characterName = sourceTurn.properName;
                let skillRef = ATKObjects.fireflyUltimateREF ??= ATKObjects.Ultimate["Fyrefly Type-IV: Complete Combustion"].variant1;
                let skillRef2 = ATKObjects.fireflyTalentREF ??= ATKObjects.Talent["Chrysalid Pyronexus"].variant1;

                if (!ATKObjects.fireflyUltimateCOMBUSTIONSHEET) {
                    let values = ATKObjects.fireflyUltimateREFVALUES ??= battleActions.getLevelBasedParam(battleData,skillRef,sourceTurn);
                    let values2 = ATKObjects.fireflyTalentREFVALUES ??= battleActions.getLevelBasedParam(battleData,skillRef2,sourceTurn);
                    const buffName = logicRef.buffNames.combustion;
                    const rank = sourceTurn.rank;
                    ATKObjects.fireflyUltimateCOMBUSTIONSHEET = {
                        "stats": [SPDFlat,DamageBreakEfficiency,EffectRES,DEFShredSkill,ResistanceFirePEN],
                        [SPDFlat]: values[2],
                        [DamageBreakEfficiency]: values[1] + (rank >= 6 ? 0.50 : 0),
                        [EffectRES]: values2[3] + (rank >= 4 ? 0.50 : 0),
                        [DEFShredSkill]: rank >= 1 ? 0.15 : 0,
                        [ResistanceFirePEN]: rank >= 6 ? 0.20 : 0,
                        "statsOnHit": [VulnBreak],
                        [VulnBreak]: values[0],
                        "source": characterName,
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
                    // "VulnBreak": rankParams[1] //WHY IS THIS A FUCKING VULN GOD DAMNIT
                    //might wanna look into a statsOnHit{} that I bundle into the buff sheet for times like this, bc that is some jank shit

                    //E1 gives skill def shred but only to the enhanced skill
                    //so... is there a reason to bundle it anywhere else but the cumbustion buff?
                    //E4 gives more effect res in the same conditions
                    //E6 gives fire res pen to the state itself, and then more weakness break efficiency to both enhanced options
                    //this is probably the easiest fuckin set of eidolons I've ever done, holy shit lmao, e2 is the only remotely tricky one
                }
                let buffSheet = ATKObjects.fireflyUltimateCOMBUSTIONSHEET;

                updateEnergy(battleData,-sourceTurn.maxEnergy,sourceTurn);

                updateBuff(battleData,sourceTurn,buffSheet);
                logicRef.characterValuesBattle.combustionActive = true;

                updateEnergy(battleData,skillRef.energyRegen,sourceTurn);

                // let newCharge = Math.min(4,chargeRef.charge + 2)
                // if (battleData.isLoggyLogger) {logToBattle(battleData,{logType: "GenericAction", source:"Ultimate", bodyText: `Archer Charge ${chargeRef.charge} --> ${newCharge}/4`});}

                actionAdvance(1,sourceTurn,battleData,"Firefly Ult Advance");

                const ActionEntry = sourceTurn.fireflyUltimateCOMBUSTTURNEVENT ??= {
                    // name:characterEntry,
                    AV:10000/70,
                    AVBase:10000/70,
                    SPD:70,
                    actionCounter: 0,
                    turnState: 0,
                    properName: "Firefly Combustion Timer",
                    // buffsObject: {},
                    // buffsStartTurn: [],
                    // buffsEndTurn: [],
                    // additionalDMGObject: {},
                    cantBeTargeted: true,
                    isUniqueEvent: true,
                    eventOwner: sourceTurn.name,//pass through the slot of the character who owns the event, avoids cyclic issues when logging
                    uniqueEventFunction: logicRef.skillFunctions.combustionExpired,
                    eventImage: "icon/skill/1310_ultimate1.png",
                };
                battleData.nextTurnAV.push(ActionEntry);
                sourceTurn.ultyQueued = false;
            },
            combustionExpired(battleData,eventTurn) {
                const fireflyTurn = battleData.nameBasedTurns[eventTurn.eventOwner];
                const logicRef = turnLogic[fireflyTurn.properName];
                const ATKObjects = logicRef.ATKObjects;
                logicRef.characterValuesBattle.combustionActive = false;
                let buffSheet = ATKObjects.fireflyUltimateCOMBUSTIONSHEET;
                removeBuff(battleData,fireflyTurn,buffSheet);

                const eventName = eventTurn.properName;
                const nextAV = battleData.nextTurnAV;
                for (let i=0;i<nextAV.length;i++) {
                    let currentTurn = nextAV[i];
                    if (currentTurn.properName === eventName) {
                        nextAV.splice(i, 1);
                        break;//we found the event to remove, so we need to obv remove it now
                    }
                }
            },
            antilagToughnessAdjustment(toughnessAmount,sourceTurn,targetTurn) {
                const fireWeakness = targetTurn.statTable[WeaknessFire];
                return toughnessAmount * (fireWeakness ? 1 : 0.55)
            },
            fireflyBasicEnhanced(battleData,target,sourceTurn) {
                const logicRef = turnLogic[sourceTurn.properName];
                const ATKObjects = logicRef.ATKObjects;

                let skillRef = ATKObjects.fireflyBasicEnhancedREF ??= ATKObjects["Basic ATK"]["Fyrefly Type-IV: Pyrogenic Decimation"].variant1;
                let values = ATKObjects.fireflyBasicEnhancedREFVALUES ??= battleActions.getLevelBasedParam(battleData,skillRef,sourceTurn);

                if (!ATKObjects.fireflyBasicEnhancedATKOBJECT) {
                    skillRef.hitSplits = hitSplitters[sourceTurn.properName].eba;
                    const scalar = "ATK";
                    const tags = ["All","Basic","Fire"];
                    const keyShortcut = basicShorthand.makeKeysArray;
                    const realDMGKeys = keyShortcut(dmgKeys,tags);
                    const realPENKeys = keyShortcut(resPENKeys,tags);
                    const realShredKeys = keyShortcut(defShredKeys,tags);
                    const realVulnKeys = keyShortcut(vulnKeys,tags);
                    const actionTags = ["Basic","Attack"];
                    const compositeCacheTag = tags + actionTags + sourceTurn.properName;
                    //realDMGKeys,realPENKeys,realShredKeys,realVulnKeys
                    ATKObjects.fireflyBasicEnhancedATKOBJECT = {
                        multipliers: {
                            primary: values[0],
                            blast: null,
                            all: null,
                        },
                        scalar,
                        DMGTags: tags,
                        allToughness: true,//Module α: Antilag Outburst, see hit start listener
                        toughnessCondition: logicRef.skillFunctions.antilagToughnessAdjustment,
                        slot: skillRef.slot,
                        realDMGKeys,realPENKeys,realShredKeys,realVulnKeys,
                        actionTags,
                        compositeCacheTag
                    }

                    ATKObjects.fireflyBasicEnhancedHEALOBJECT = {
                        multipliers: {
                            primary: values[1],
                            blast: null,
                            all: null,
                        },
                        flatAmounts: {
                            primary: null,
                            blast: null,
                            all: null,
                        },
                        scalar: null,
                        DMGTags: [],
                        slot: skillRef.slot
                    }
                }
                let ATKObject = ATKObjects.fireflyBasicEnhancedATKOBJECT;
                let healObject = ATKObjects.fireflyBasicEnhancedHEALOBJECT;

                if (battleData.isLoggyLogger) {logToBattle(battleData,{logType: "BasicATKStart", name:sourceTurn.properName, target, isEnemy: false, isCharacter: true, AV: battleData.sumAV, isEnhanced: true, actionSlot:skillRef.slot});}
                poke("BasicATKStart",battleData,{sourceTurn});


                
                // let healed = battleActions.healAlly(battleData,healObject,targetTurn,sourceTurn,skillSlot,timesToApply)
                battleActions.healAlly(battleData,healObject,sourceTurn,sourceTurn,skillRef.slot,1)
                battleActions.attackWrapper(battleData,skillRef,sourceTurn,ATKObject);
                // updateEnergy(battleData,skillRef.energyRegen,sourceTurn);//NO ENERGY ASSOCIATED WITH THIS ATTACK
                poke("BasicATKEnd",battleData,{sourceTurn});
            },
            fireflySkillEnhanced(battleData,target,sourceTurn) {
                const logicRef = turnLogic[sourceTurn.properName];
                const ATKObjects = logicRef.ATKObjects;

                let skillRef = ATKObjects.fireflySkillEnhancedREF ??= ATKObjects["Skill"]["Fyrefly Type-IV: Deathstar Overload"].variant1;
                let values = ATKObjects.fireflySkillEnhancedREFVALUES ??= battleActions.getLevelBasedParam(battleData,skillRef,sourceTurn);

                if (!ATKObjects.fireflySkillEnhancedATKOBJECT) {
                    skillRef.hitSplits = hitSplitters[sourceTurn.properName].es;
                    // let values = battleActions.getLevelBasedParam(battleData,skillRef,sourceTurn);
                    const scalar = "ATK";
                    const tags = ["All","Skill","Fire"];
                    const keyShortcut = basicShorthand.makeKeysArray;
                    const realDMGKeys = keyShortcut(dmgKeys,tags);
                    const realPENKeys = keyShortcut(resPENKeys,tags);
                    const realShredKeys = keyShortcut(defShredKeys,tags);
                    const realVulnKeys = keyShortcut(vulnKeys,tags);
                    const actionTags = ["Skill","Attack"];
                    const compositeCacheTag = tags + actionTags + sourceTurn.properName;
                    //realDMGKeys,realPENKeys,realShredKeys,realVulnKeys
                    const characterName = sourceTurn.properName;
                    const logicRef = turnLogic[characterName];
                    ATKObjects.fireflySkillEnhancedATKOBJECT = {
                        multipliers: {
                            primary: 0,
                            blast: 0,
                            all: null,
                        },
                        scalar,
                        DMGTags: tags,
                        allToughness: true,//Module α: Antilag Outburst, see hit start listener
                        toughnessCondition: logicRef.skillFunctions.antilagToughnessAdjustment,
                        slot: skillRef.slot,
                        realDMGKeys,realPENKeys,realShredKeys,realVulnKeys,
                        actionTags,
                        compositeCacheTag,
                        valuesRef: values,
                        customMulti: logicRef.skillFunctions.pullMultiCUSTOMFIREFLY
                        // ATKObject.customMulti(playerStats,playerStatsONHIT,hitType,ATKObject)
                    }
                    ATKObjects.fireflySkillEnhancedHEALOBJECT = {
                        multipliers: {
                            primary: values[2],
                            blast: null,
                            all: null,
                        },
                        flatAmounts: {
                            primary: null,
                            blast: null,
                            all: null,
                        },
                        scalar: null,
                        DMGTags: [],
                        slot: skillRef.slot
                    }

                    let buffName = logicRef.buffNames.implant;
                    ATKObjects.fireflySkillEnhancedIMPLANTSHEET = {
                        "stats": [WeaknessFire],
                        [WeaknessFire]: 1,
                        "source": characterName,
                        "sourceOwner": sourceTurn.properName,
                        "buffName": buffName,
                        "durationInTurn": 3,
                        "duration": 2,//her skill will never be applied outside her own turn, so we don't need to worry about the primary target's turn state duration increase
                        "AVApplied": 0,
                        "maxStacks": 1,
                        "currentStacks": 1,
                        "decay": false,
                        "expireType": "EndTurn"
                    }
                }
                let ATKObject = ATKObjects.fireflySkillEnhancedATKOBJECT;
                let healObject = ATKObjects.fireflySkillEnhancedHEALOBJECT;

                

                if (battleData.isLoggyLogger) {logToBattle(battleData,{logType: "SkillStart", name:sourceTurn.properName, target, isEnemy: false, isCharacter: true, AV: battleData.sumAV, isEnhanced: true, actionSlot:skillRef.slot});}
                poke("SkillStart",battleData,{sourceTurn});

                battleActions.healAlly(battleData,healObject,sourceTurn,sourceTurn,skillRef.slot,1);

                const buffSheet = ATKObjects.fireflySkillEnhancedIMPLANTSHEET;
                updateBuff(battleData,battleData.primaryTarget,buffSheet);


                // Restores HP by an amount equal to 25.00% of this unit's Max HP. Applies Fire Weakness to a single target enemy, lasting for 2 turn(s). Deals Fire DMG equal to (0.2 × Break Effect + 200.00%) of SAM's
                // ATK to this target. At the same time, deals Fire DMG equal to (0.1 × Break Effect + 100.00%) of SAM's ATK to adjacent targets. The Break Effect taken into the calculation is capped at 360.00%.
                const breakEffect = Math.min(3.6,sourceTurn.statTable[DamageBreak]);
                const primaryConversion = 0.2 * breakEffect + values[0];
                const blastConversion = 0.1 * breakEffect + values[1];

                const multiRef = ATKObject.multipliers;
                multiRef.primary = primaryConversion;
                multiRef.blast = blastConversion;
                // console.log(multiRef,values[1])

                battleActions.attackWrapper(battleData,skillRef,sourceTurn,ATKObject);
                // updateEnergy(battleData,skillRef.energyRegen,sourceTurn);//Firefly skill doesn't actually have energy regen associated with it
                poke("SkillEnd",battleData,{sourceTurn});
            },
            pullMultiCUSTOMFIREFLY(sourceTurn,targetTurn,dmgNeedsElationComposite,table,tableONHIT,hitType,ATKObject) {
                // console.log("multi reached")
                const totalBreak = Math.min(3.6,table[DamageBreak] + tableONHIT[DamageBreak]);
                //TODO: if we ever update FF so we can add her to the live site any time soon, this is some remarkably old fucking code, will need to redo this custom multi for her

                const values = ATKObject.valuesRef;
                const conversion = hitType === "blast" ? 0.1 * totalBreak + values[1] : 0.2 * totalBreak + values[0];
                return conversion;
            },
            fireflyTechnique(battleData,target,sourceTurn) {
                const logicRef = turnLogic[sourceTurn.properName];
                const ATKObjects = logicRef.ATKObjects;

                let characterName = sourceTurn.properName;
                let skillRef = ATKObjects.fireflyTechREF ??= ATKObjects.Technique["Δ Order: Meteoric Incineration"].variant1;

                if (!ATKObjects.fireflyTechATKObject) {
                    skillRef.hitSplits = hitSplitters[sourceTurn.properName].tech;
                    let values = ATKObjects.fireflyTechREFVALUES ??= battleActions.getLevelBasedParam(battleData,skillRef,sourceTurn);
                    const scalar = "ATK";
                    const tags = ["All","Technique","Fire"];
                    const keyShortcut = basicShorthand.makeKeysArray;
                    const realDMGKeys = keyShortcut(dmgKeys,tags);
                    const realPENKeys = keyShortcut(resPENKeys,tags);
                    const realShredKeys = keyShortcut(defShredKeys,tags);
                    const realVulnKeys = keyShortcut(vulnKeys,tags);
                    const actionTags = ["Technique","Attack"];
                    //realDMGKeys,realPENKeys,realShredKeys,realVulnKeys
                    ATKObjects.fireflyTechATKObject = {
                        multipliers: {
                            primary: null,
                            blast: null,
                            all: values[0],
                        },
                        scalar,
                        DMGTags: tags,
                        allToughness: false,
                        slot: skillRef.slot,
                        realDMGKeys,realPENKeys,realShredKeys,realVulnKeys,
                        actionTags
                    }

                    let buffName = turnLogic[characterName].buffNames.techImplant
                    ATKObjects.fireflyTechImplantSHEET = {
                        "stats": [WeaknessFire],
                        [WeaknessFire]: 1,
                        "source": characterName,
                        "sourceOwner": sourceTurn.properName,
                        "buffName": buffName,
                        "durationInTurn": 2,
                        "duration": 2,
                        "AVApplied": 0,
                        "maxStacks": 1,
                        "currentStacks": 1,
                        "decay": false,
                        "expireType": "EndTurn"
                    }
                }
                const ATKObject = ATKObjects.fireflyTechATKObject;
                const buffSheet = ATKObjects.fireflyTechImplantSHEET;

                if (battleData.isLoggyLogger) {logToBattle(battleData,{logType: "TechniqueStart", name:characterName, target, isEnemy: false, isCharacter: true, AV: battleData.sumAV, actionSlot:skillRef.slot});}
                poke("TechniqueStart",battleData,{sourceTurn});
                for (let enemy of battleData.enemyPositions) {
                    updateBuff(battleData,enemy,buffSheet);
                }
                battleActions.attackWrapper(battleData,skillRef,sourceTurn,ATKObject);
                poke("TechniqueEnd",battleData,{sourceTurn});
                // poke("SkillEnd",battleData,{source:"Archer"});
            },
            statCheck(battleData,currentTurn) {
                const logicRef = turnLogic[currentTurn.properName];
                const ATKObjects = logicRef.ATKObjects;

                if (!ATKObjects.fireflyCoreOverloadATKSHEET) {
                    const characterName = currentTurn.properName;
                    const buffName = turnLogic[characterName].buffNames.coreOverload;
                    // let relicPathing = relicSets[relicNameRef].params[0];//0-2pc 1-4pc
                    // let values = relicPathing[2];
                    ATKObjects.fireflyCoreOverloadATKSHEET = {
                        "stats": [DamageBreak,DamageBreakNULL],
                        [DamageBreak]: 0,
                        [DamageBreakNULL]: 0,
                        "source": characterName,
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
                let buffSheet = ATKObjects.fireflyCoreOverloadATKSHEET;
                const buffName = buffSheet.buffName;
                const buffCheck = currentTurn.buffsObject[buffName];


                const currentStats = currentTurn.statTable;
                const atkBeyondThis = 1800;
                const atkFinal = Math.max(0,calcs.getATKFinal(currentStats).ATKFinal - currentStats[ATKFlatNULL] - atkBeyondThis);//can't benefit from converted bonuses
                const conversion = (Math.floor(atkFinal/10) * 0.80)/100;

                if (buffCheck) {
                    const statCheck = buffCheck[DamageBreak];
                    if (statCheck === conversion) {return;}//if buff exists and the amount hasn't changed, then end it here
                    else {
                        //so if gallagher already has the buff, but the new conversion amount does NOT match the existing amount
                        //then silently remove the old buff
                        removeBuff(battleData,currentTurn,buffCheck,true);
                    }
                }

                if (!conversion) {return;}
                buffSheet[DamageBreak] = conversion;
                buffSheet[DamageBreakNULL] = -conversion;
                updateBuff(battleData,currentTurn,buffSheet);
            },
        },
        "listeners": [
            {
                "trigger": "hitWrapSuperBreakCall",
                condition(battleData,generalInfo) {
                    let ownerTurn = this.ownerTurn;
                    let sourceTurn = generalInfo.sourceTurn;
                    if (sourceTurn.name != ownerTurn.name) {return;}

                    const battleValues = ownerTurn.battleValues;
                    if (!battleValues.combustionActive) {return;}//only applies inside combustion state

                    const breakValue = ownerTurn.statTable[DamageBreak];
                    if (breakValue < 2) {return}

                    if (breakValue > 3.6) {
                        return this.break1 ??= [0.5,this.listenerName];
                    }
                    else {//at this point it's guaranteed to be the 200% break, no IF needed on that given the return check above
                        return this.break2 ??= [0.35,this.listenerName];
                    }
                },
                "target": "enemy",
                "listenerName": "Module β: Autoreactive Armor",
                "ownerTurn": {},
            },
            {
                "trigger": "PreBattleEntersCombat",
                condition(battleData,generalInfo) {
                    let ownerTurn = this.ownerTurn;
                    // let characterName = ownerTurn.properName;

                    const fiftyPercent = ownerTurn.maxEnergy * 0.5;
                    const currentEnergy = ownerTurn.currentEnergy;
                    const energyToRegen = currentEnergy < fiftyPercent ? fiftyPercent-currentEnergy : 0;

                    if (energyToRegen) {updateEnergy(battleData,energyToRegen,ownerTurn,true,"Talent: Chrysalid Pyronexus");}
                },
                "target": "self",
                "listenerName": "Firefly talent: energy regen on battleStart",
                "ownerTurn": {},
            },
            {
                "trigger": "UpdateStatATK",//ATK stat family
                condition(battleData,generalInfo) {
                    let ownerTurn = this.ownerTurn;
                    let sourceTurn = generalInfo.sourceTurn;
                    if (sourceTurn.name != ownerTurn.name) {return;}

                    const statCheck = this.statCheck ??= turnLogic[ownerTurn.properName].skillFunctions.statCheck;
                    statCheck(battleData,sourceTurn);
                },
                "target": "self",
                "listenerName": "Firefly Module γ: Core Overload ATK check",
                "ownerTurn": {},
            },
            {
                "trigger": "PreBattleEntersCombat",
                condition(battleData,generalInfo) {
                    let ownerTurn = this.ownerTurn;
                    const statCheck = this.statCheck ??= turnLogic[ownerTurn.properName].skillFunctions.statCheck;
                    statCheck(battleData,ownerTurn);
                },
                "target": "self",
                "listenerName": "Firefly Module γ: Core Overload battle start stat check trigger",
                "ownerTurn": {},
            },
            {
                "trigger": "UltimateReady",
                condition(battleData,generalInfo) {
                    let ownerTurn = this.ownerTurn;
                    if (ownerTurn.ultyQueued) {return;}

                    let energyCheck = ownerTurn.currentEnergy === ownerTurn.maxEnergy;
                    const notOnFire = !ownerTurn.battleValues.combustionActive;
                    let otherObscureCondition = energyCheck && notOnFire && checkUlty(battleData,ownerTurn);

                    if (otherObscureCondition) {
                        ownerTurn.ultyQueued = true;

                        const queueObject = this.queueObject ??= {
                            actionCall: turnLogic[ownerTurn.properName].skillFunctions.fireflyUltimate,
                            target: this.target,
                            name: this.listenerName,
                            properName: ownerTurn.properName,
                            sourceTurn: null,
                            isAttack: true,
                            priority: priorityList.turn.Default,
                        }
                        queueObject.sourceTurn = ownerTurn;
                        queueUltimate(battleData,queueObject);
                    }
                },
                "target": "self",
                "listenerName": "Firefly - Ultimate queued",
                "ownerTurn": {},
            },
            {
                "trigger": "StartBattle",
                condition(battleData,generalInfo) {
                    let ownerTurn = this.ownerTurn;
                    let characterName = ownerTurn.properName;
                    //PreBattleStartTechniquesNormal for always active techniques that don't need to care
                    //StartBattle for dmg techniques that could have conflicts
                    let logicRef = turnLogic[characterName];
                    let useTechnique = logicRef.useTechnique;
                    let attackUsed = battleData.attackTechniqueUsed;
                    if (useTechnique && !attackUsed && battleData.techniquesAllowed) {
                        const fireflyTechnique = this.fireflyTechnique ??= logicRef.skillFunctions.fireflyTechnique;
                        
                        fireflyTechnique(battleData,"enemy",ownerTurn);
                        battleData.attackTechniqueUsed = true;
                    }
                },
                "target": "self",
                "listenerName": "Firefly Technique",
                "ownerTurn": {},
            },
        ],
        "eidolonListeners": {
            1: [],
            2: [
                {
                    "trigger": "FireflyE2QueueExtraTurn",
                    condition(battleData,generalInfo) {
                        // poke("FireflyE2QueueExtraTurn",battleData,exoTurnRef);
                        let ownerTurn = this.ownerTurn;
                        
                        const queueObject = this.queueObject ??= {
                            actionCall: sim.turnWrapper,
                            target: this.target,
                            name: this.listenerName,
                            properName: ownerTurn.properName,
                            sourceTurn: null,
                            isExtraTurn: true,
                            allowUlts: false,
                            priority: priorityList.turn.Default,
                            decrementBuffs: false,
                            extraTurnHasChoice: true,
            
                        }
                        queueObject.sourceTurn = ownerTurn;
                        battleActions.queueInstantUltimateUse(battleData,queueObject);
                    },
                    "target": "self",
                    "listenerName": "Firefly E2 - Queued Extra Turn",
                    "ownerTurn": {},
                },
                {
                    "trigger": "EnemyDied",
                    condition(battleData,generalInfo) {
                        // poke("EnemyDied",battleData,{sourceTurn, enemyKilled:killed});
                        let ownerTurn = this.ownerTurn;
                        let sourceTurn = generalInfo.sourceTurn;
                        if (sourceTurn.name != ownerTurn.name) {return;}
    
                        const logicRefValues = (this.logicRefValues ??= turnLogic[ownerTurn.properName]).characterValuesBattle;
                        if (!logicRefValues.combustionActive) {return;}//only applies inside combustion state
    
                        if (logicRefValues.e2AdvanceCooldown >=2) {
                            logicRefValues.e2AdvanceCooldown = 0;
                            poke("FireflyE2QueueExtraTurn",battleData,{sourceTurn});
                        }
                    },
                    "target": "self",
                    "listenerName": "From Shattered Sky, I Free Fall kill check",
                    "ownerTurn": {},
                },
                {
                    "trigger": "BrokeEnemyWeakness",
                    condition(battleData,generalInfo) {
                        // poke("BrokeEnemyWeakness",battleData,{targetTurn,sourceTurn,slot,targetsGotHit,ATKObject,breakObject,tags:DMGTags,isBroken,generalInfo});
                        let ownerTurn = this.ownerTurn;
                        let sourceTurn = generalInfo.sourceTurn;
                        if (sourceTurn.name != ownerTurn.name) {return;}
    
                        const logicRefValues = (this.logicRefValues ??= turnLogic[ownerTurn.properName]).characterValuesBattle;
                        
                        if (!logicRefValues.combustionActive) {return;}//only applies inside combustion state
    
                        if (logicRefValues.e2AdvanceCooldown >=2) {
                            logicRefValues.e2AdvanceCooldown = 0;
                            poke("FireflyE2QueueExtraTurn",battleData,{sourceTurn});
                        }
                    },
                    "target": "self",
                    "listenerName": "From Shattered Sky, I Free Fall Weakness Break check",
                    "ownerTurn": {},
                },
                {
                    "trigger": "StartTurn",
                    condition(battleData,generalInfo) {
                        // poke("BrokeEnemyWeakness",battleData,turnMerge);
                        let ownerTurn = this.ownerTurn;
                        let sourceTurn = generalInfo.sourceTurn;
                        if (sourceTurn.name != ownerTurn.name) {return;}
    
                        const logicRefValues = this.logicRefValues ??= turnLogic[ownerTurn.properName].characterValuesBattle;

                        logicRefValues.e2AdvanceCooldown += 1;
                    },
                    "target": "self",
                    "listenerName": "From Shattered Sky, I Free Fall cooldown increment",
                    "ownerTurn": {},
                },
            ],
            3: [],
            4: [],
            5: [],
            6: [],
        },
        "ATKObjects": {},
        "listenersBattle": [],
        "buffsBattle": {},
        "buffsBattleTemp": {},
        "characterValues": {
            "combustionActive": false,
            "e2AdvanceCooldown": 2,
        },
        "useTechnique": true,
        "techniqueType": "Attack",
        "buffNames": {
            "coreOverload": "Module γ: Core Overload",
            "combustion": "Complete Combustion",
            "implant": "Fyrefly Type-IV: Deathstar Overload",
            "techImplant": "Δ Order: Meteoric Incineration"
        },
        "characterValuesBattle": {},
    },
    //TODO: e2: ally revive shit, later when I allow for ally deaths // e4: dunno if healing final multi or just outgoing healing //the cleanse I didn't add yet just forgot looks like
    "Huohuo_v0": {//ENERGY DONE
        logic(thisTurn,battleData) {
            let currentSP = battleData.skillPointCurrent;
            let minimum = currentSP >= 1;

            if (minimum && checkSkill(battleData,thisTurn)) {
                const returnSkillCall = this.returnSkillCall;
                returnSkillCall.target = checkAbilityTarget(battleData,thisTurn,returnSkillCall.poolKey,"Lowest HP Ally (On-Field)","SkillTarget");
                return returnSkillCall;
            }

            return this.returnBasicCall;
        },
        preLogic(thisTurn,battleData) {
            this.returnSkillCall ??= {
                action: "Skill", 
                isAttack: false,
                isAbility: true,
                points: -1, 
                actionCall: this.skillFunctions.huohuoSkillHeal, 
                target: null, 
                poolKey: this.abilityTargetPools.Skill,
            }
            this.returnBasicCall ??= {
                action: "BasicATK", 
                isAttack: true,
                isAbility: true,
                points: 1, 
                actionCall: this.skillFunctions.huohuoBasic, 
                target: "enemy", 
                poolKey: this.abilityTargetPools.BasicATK,
            }
        },
        "abilityTargetPools": {
            "Skill": "Allies (On-Field)",
            "BasicATK": "Enemies (On-Field)",
        },
        "skillFunctions": {
            huohuoBasic(battleData,target,sourceTurn) {
                const logicRef = turnLogic[sourceTurn.properName];
                const ATKObjects = logicRef.ATKObjects;

                let skillRef = ATKObjects.huohuoBasicREF ??= ATKObjects["Basic ATK"]["Banner: Stormcaller"].variant1;
                if (!ATKObjects.huohuoBasicATKOBJECT) {
                    skillRef.hitSplits = hitSplitters[sourceTurn.properName].basic;
                    let values = ATKObjects.huohuoBasicREFVALUES ??= battleActions.getLevelBasedParam(battleData,skillRef,sourceTurn);
                    const scalar = "HP";
                    const tags = ["All","Basic","Wind"];
                    const actionTags = ["Basic","Attack"];
                    const keyShortcut = basicShorthand.makeKeysArray;
                    const realDMGKeys = keyShortcut(dmgKeys,tags);
                    const realPENKeys = keyShortcut(resPENKeys,tags);
                    const realShredKeys = keyShortcut(defShredKeys,tags);
                    const realVulnKeys = keyShortcut(vulnKeys,tags);
                    const compositeCacheTag = tags + actionTags + sourceTurn.properName;
                    //realDMGKeys,realPENKeys,realShredKeys,realVulnKeys
                    ATKObjects.huohuoBasicATKOBJECT = {
                        multipliers: {
                            primary: values[0],
                            blast: null,
                            all: null,
                        },
                        energy: skillRef.energyRegen,
                        scalar,
                        DMGTags: tags,
                        allToughness: false,
                        slot: skillRef.slot,
                        realDMGKeys,realPENKeys,realShredKeys,realVulnKeys,
                        actionTags,
                        compositeCacheTag
                    }
                }
                let ATKObject = ATKObjects.huohuoBasicATKOBJECT;

                if (battleData.isLoggyLogger) {logToBattle(battleData,{logType: "BasicATKStart", name:sourceTurn.properName, target, isEnemy: false, isCharacter: true, AV: battleData.sumAV, actionSlot:skillRef.slot});}
                poke("BasicATKStart",battleData,{sourceTurn});
                battleActions.attackWrapper(battleData,skillRef,sourceTurn,ATKObject);
                poke("BasicATKEnd",battleData,{sourceTurn});
            },
            huohuoSkillHeal(battleData,target,sourceTurn) {
                const logicRef = turnLogic[sourceTurn.properName];
                const ATKObjects = logicRef.ATKObjects;

                let skillRef = ATKObjects.huohuoSkillHealHealREF ??= ATKObjects.Skill["Talisman: Protection"].variant1;
                let rank = sourceTurn.rank;
                // let e2 = rank >= 2;
                const targetTurn = target[0];
                // console.log(targetTurn)
                //in some cases the team may be healed to full already, however if we recast for the sake of renewing divine provision, then we auto to herself to heal
                
                //Q: do blast heal targets count as targeted for the sake of something like sacerdos or wavestrider?
                //YES on wavestrider, even subtargets count, NO on sacerdos, only single targets count unless sunday bc reasons
                if (!ATKObjects.huohuoSkillHealHealHEALOBJECT) {
                    let values = ATKObjects.huohuoSkillHealHealREFVALUES ?? battleActions.getLevelBasedParam(battleData,skillRef,sourceTurn);
                    const actionTags = ["Heal","Skill"];
                    const compositeCacheTag = actionTags + sourceTurn.properName;

                    ATKObjects.huohuoSkillHealHealHEALOBJECT = {
                        multipliers: {
                            primary: values[0],
                            blast: values[2],
                            all: null,
                        },
                        flatAmounts: {
                            primary: values[1],
                            blast: values[3],
                            all: null,
                        },
                        scalar: "HP",
                        DMGTags: [],
                        allToughness: false,
                        slot: skillRef.slot,
                        actionTags,compositeCacheTag
                    }
                }
                
    

                if (battleData.isLoggyLogger) {logToBattle(battleData,{logType: "SkillStart", name:sourceTurn.properName, target:targetTurn.properName, isEnemy: false, isCharacter: true, AV: battleData.sumAV, actionSlot:skillRef.slot});}
                poke("SkillStart",battleData,{sourceTurn});

                // poke("TargetAlly",battleData,{targetType:"Single", sourceTurn, targetTurn, targetSkill:skillRef.slot});
                poke("TargetAlly",battleData,{targetType:"Blast", sourceTurn, targetTurn, targetSkill:skillRef.slot,targetChildEntities: false});

                let healObject = ATKObjects.huohuoSkillHealHealHEALOBJECT;
                healAlly(battleData,healObject,targetTurn,sourceTurn,skillRef.slot,1,null)

                logicRef.skillFunctions.huohuoApplyDivineProvision(battleData,sourceTurn);

                // battleActions.attackWrapper(battleData,skillRef,sourceTurn,ATKObject);
                updateEnergy(battleData,skillRef.energyRegen,sourceTurn);
                poke("SkillEnd",battleData,{sourceTurn});
            },
            huohuoApplyDivineProvision(battleData,sourceTurn,turnOverride) {
                const logicRef = turnLogic[sourceTurn.properName];
                const ATKObjects = logicRef.ATKObjects;

                let skillRef = ATKObjects.huohuoTalentREF ??= ATKObjects.Talent["Possession: Ethereal Metaflow"].variant1;
                let values = ATKObjects.huohuoTalentREFVALUES ??= battleActions.getLevelBasedParam(battleData,skillRef,sourceTurn);

                const rank = sourceTurn.rank;
                const e1 = rank>=1;
                if (!ATKObjects.huohuoTalentOwnerSHEET) {
                    const buffNames = logicRef.buffNames;
                    ATKObjects.huohuoTalentOwnerSHEET = {
                        "stats": null,
                        "source": "Talent",
                        "sourceOwner": sourceTurn.properName,
                        "buffName": buffNames.talentCountdown,
                        "durationInTurn": 3,
                        "duration": 2,
                        "AVApplied": 0,
                        "maxStacks": 1,
                        "currentStacks": 1,
                        "decay": false,
                        "expireType": "StartTurn",
                        expireFunction: logicRef.skillFunctions.provisionExpired,
                        expireParam: sourceTurn.name
                    }

                    if (e1) {
                        ATKObjects.huohuoTalentE1SPDSHEET = {
                            "stats": [SPDP],
                            [SPDP]: 0.12,
                            "source": "E1",
                            "sourceOwner": sourceTurn.properName,
                            "buffName": buffNames.e1SPD,
                            "durationInTurn": null,
                            "duration": 1,
                            "AVApplied": 0,
                            "maxStacks": 1,
                            "currentStacks": 1,
                            "decay": false,
                            "expireType": null,
                            removeOnDeath: true,
                        }
                    }
                }
                const countdownSheet = ATKObjects.huohuoTalentOwnerSHEET;
                sourceTurn.talentProvisionIsActive = true;
                sourceTurn.talentCleanseCounter = 0;
                updateBuff(battleData,sourceTurn,countdownSheet);

                if (e1) {
                    const spdSheet = ATKObjects.huohuoTalentE1SPDSHEET;
                    const allyPositions = battleData.allyPositions;
                    
                    for (let ally of allyPositions) {
                        updateBuff(battleData,ally,spdSheet);
                    }
                }
                
                // const buffCheck = 
            },
            provisionExpired(battleData,expireParam) {
                const huohuoTurn = battleData.nameBasedTurns[expireParam];
                huohuoTurn.talentProvisionIsActive = false;

                const rank = huohuoTurn.rank;
                if (rank>=1) {
                    const logicRef = turnLogic[huohuoTurn.properName];
                    const ATKObjects = logicRef.ATKObjects;

                    const spdSheet = ATKObjects.huohuoTalentE1SPDSHEET;
                    const allyPositions = battleData.allyPositions;
                    
                    for (let ally of allyPositions) {
                        removeBuff(battleData,ally,spdSheet);
                    }
                }
            },
            provisionHeal(battleData,sourceTurn,targetTurn) {
                const logicRef = turnLogic[sourceTurn.properName];
                const ATKObjects = logicRef.ATKObjects;

                // sourceTurn.talentProvisionIsActive = true;
                // sourceTurn.talentCleanseCounter = 0;
                let skillRef = ATKObjects.huohuoTalentREF ??= ATKObjects.Talent["Possession: Ethereal Metaflow"].variant1;
                let values = ATKObjects.huohuoTalentREFVALUES ??= battleActions.getLevelBasedParam(battleData,skillRef,sourceTurn);

                if (!ATKObjects.provisionHealHEALOBJECT) {
                    const actionTags = ["Heal","Talent"];
                    const compositeCacheTag = actionTags + sourceTurn.properName;

                    ATKObjects.provisionHealHEALOBJECT = {
                        multipliers: {
                            primary: values[2],
                            blast: null,
                            all: null,
                        },
                        flatAmounts: {
                            primary: values[4],
                            blast: null,
                            all: null,
                        },
                        scalar: "HP",
                        DMGTags: [],
                        allToughness: false,
                        slot: skillRef.slot,
                        actionTags,compositeCacheTag
                    }
                }

                if (battleData.isLoggyLogger) {logToBattle(battleData,{logType: "TalentStart", name:sourceTurn.properName, target:targetTurn.properName, isEnemy: false, isCharacter: true, AV: battleData.sumAV, actionSlot:skillRef.slot});}
                poke("TalentStart",battleData,{sourceTurn});

                let healObject = ATKObjects.provisionHealHEALOBJECT;
                healAlly(battleData,healObject,targetTurn,sourceTurn,skillRef.slot,1,null);
                //TODO: cleanse later, not a huge deal, gallagher already has something that would do it in his skill, I just don't let enemies apply debuffs YET

                let alliesArray = [];
                const allyPositions = battleData.allyPositions;
                for (let ally of allyPositions) {
                    const HPRatio = ally.currentHP/ally.maxHP;
                    if (HPRatio <= 0.5) {alliesArray.push(ally)}
                }
                if (alliesArray.length) {
                    healAlly(battleData,healObject,null,sourceTurn,skillRef.slot,1,alliesArray);
                }

                // battleActions.attackWrapper(battleData,skillRef,sourceTurn,ATKObject);
                updateEnergy(battleData,1,sourceTurn,false,"Stress Reaction to Horror");
                poke("TalentEnd",battleData,{sourceTurn});
            },
            huohuoUltimate(battleData,sourceTurn) {
                const logicRef = turnLogic[sourceTurn.properName];
                const ATKObjects = logicRef.ATKObjects;

                let skillRef = ATKObjects.huohuoUltimateREF ??= ATKObjects.Ultimate["Tail: Spiritual Domination"].variant1;
                let values = ATKObjects.huohuoUltimateREFVALUES ??= battleActions.getLevelBasedParam(battleData,skillRef,sourceTurn);
                let rank = sourceTurn.rank;
                const characterName = sourceTurn.properName;

                if (!ATKObjects.huohuoUltimateBuffSHEET) {
                    const buffNames = logicRef.buffNames;
                    ATKObjects.huohuoUltimateBuffSHEET = {
                        "stats": [ATKP],
                        [ATKP]: values[1],
                        "source": "Ultimate",
                        "sourceOwner": characterName,
                        "buffName": buffNames.ultATK,
                        "durationInTurn": 3,
                        "duration": 2,
                        "AVApplied": 0,
                        "maxStacks": 1,
                        "currentStacks": 1,
                        "decay": false,
                        "isDebuff": false,
                        "expireType": "EndTurn"
                    }
                }
                const buffSheet = ATKObjects.huohuoUltimateBuffSHEET;


                updateEnergy(battleData,-sourceTurn.maxEnergy,sourceTurn);

                const allyPositions = battleData.allyPositions;
                const percentRegen = values[0];

                poke("TargetAlly",battleData,{targetType:"Team", sourceTurn, targetTurn:null, targetSkill:skillRef.slot,targetChildEntities: false});
                for (let ally of allyPositions) {
                    if (ally.properName === characterName || ally.isMemosprite) {continue;}//huohuo doesn't give herself energy, rip
                    const energyToRegen = ally.maxEnergy * percentRegen;
                    updateEnergy(battleData,energyToRegen,ally,true,"Huohuo Ultimate");
                    updateBuff(battleData,ally,buffSheet);
                }

                battleActions.nonViolentWrapper(battleData,skillRef,characterName);
                updateEnergy(battleData,skillRef.energyRegen,sourceTurn);

                sourceTurn.ultyQueued = false;
            },
            huohuoTechnique(battleData,target,sourceTurn) {
                const logicRef = turnLogic[sourceTurn.properName];
                const ATKObjects = logicRef.ATKObjects;

                let characterName = sourceTurn.properName;
                let skillRef = ATKObjects.huohuoTechREF ??= ATKObjects.Technique["Fiend: Impeachment of Evil"].variant1;

                if (battleData.isLoggyLogger) {logToBattle(battleData,{logType: "TechniqueStart", name:characterName, target, isEnemy: false, isCharacter: true, AV: battleData.sumAV, actionSlot:skillRef.slot});}
                poke("TechniqueStart",battleData,{sourceTurn});

                // turnLogic[sourceTurn.properName].skillFunctions.applyNuminosity(battleData,sourceTurn);
                if (!ATKObjects.huohuoTechBUFFSHEET) {
                    ATKObjects.huohuoTechBUFFSHEET = {
                        "stats": [ATKP],
                        [ATKP]: -0.25,
                        "source": "Technique",
                        "sourceOwner": characterName,
                        "buffName": logicRef.buffNames.techniqueATKDebuff,
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
                const buffSheet = ATKObjects.huohuoTechBUFFSHEET;

                const enemyPositions = battleData.enemyPositions;
                for (let enemy of enemyPositions) {
                    updateBuff(battleData,enemy,buffSheet);
                }

                battleActions.nonViolentWrapper(battleData,skillRef,characterName);
                poke("TechniqueEnd",battleData,{sourceTurn});
            },
        },
        "listeners": [
            {
                "trigger": "StartTurn",
                condition(battleData,generalInfo) {
                    let ownerTurn = this.ownerTurn;
                    let sourceTurn = generalInfo.sourceTurn;
                    if (sourceTurn.isEnemy || !ownerTurn.talentProvisionIsActive) {return;}//if it's an enemy turn start or if divine provision is not active, abort

                    const provisionHeal = this.provisionHeal ??= turnLogic[ownerTurn.properName].skillFunctions.provisionHeal
                    provisionHeal(battleData,ownerTurn,sourceTurn);
                },
                "target": "allies",
                "listenerName": "Divine Provision Healing controller (turn started)",
                "ownerTurn": {},
            },
            {
                "trigger": "UltimateStart",
                condition(battleData,generalInfo) {
                    let ownerTurn = this.ownerTurn;
                    let sourceTurn = generalInfo.sourceTurn;
                    if (sourceTurn.isEnemy || !ownerTurn.talentProvisionIsActive) {return;}//if it's an enemy turn start or if divine provision is not active, abort

                    const provisionHeal = this.provisionHeal ??= turnLogic[ownerTurn.properName].skillFunctions.provisionHeal
                    provisionHeal(battleData,ownerTurn,sourceTurn);
                },
                "target": "allies",
                "listenerName": "Divine Provision Healing controller (ultimate used)",
                "ownerTurn": {},
            },
            {
                "trigger": "PreBattleEntersCombat",
                condition(battleData,generalInfo) {
                    let ownerTurn = this.ownerTurn;
                    let characterName = ownerTurn.properName;

                    const huohuoApplyDivineProvision = this.huohuoApplyDivineProvision ??= turnLogic[characterName].skillFunctions.huohuoApplyDivineProvision
                    huohuoApplyDivineProvision(battleData,ownerTurn,1);
                },
                "target": "self",
                "listenerName": "Fearful to Act - battlestart Provision application",
                "ownerTurn": {},
            },
            {
                "trigger": "UltimateReady",
                condition(battleData,generalInfo) {
                    let ownerTurn = this.ownerTurn;
                    if (ownerTurn.ultyQueued) {return;}

                    let energyCheck = ownerTurn.currentEnergy === ownerTurn.maxEnergy;
                    let otherObscureCondition = energyCheck && checkUlty(battleData,ownerTurn);

                    if (otherObscureCondition) {
                        ownerTurn.ultyQueued = true;

                        const queueObject = this.queueObject ??= {
                            actionCall: turnLogic[ownerTurn.properName].skillFunctions.huohuoUltimate,
                            target: this.target,
                            name: this.listenerName,
                            properName: ownerTurn.properName,
                            sourceTurn: null,
                            priority: priorityList.turn.Default,
                        }
                        queueObject.sourceTurn = ownerTurn;
                        queueUltimate(battleData,queueObject);
                    }
                },
                "target": "team",
                "listenerName": "Huohuo - Ultimate queued",
                "ownerTurn": {},
            },
            {
                "trigger": "PreBattleStartTechniquesNormal",
                condition(battleData,generalInfo) {
                    let ownerTurn = this.ownerTurn;
                    let characterName = ownerTurn.properName;
                    //PreBattleStartTechniquesNormal for always active techniques that don't need to care
                    //StartBattle for dmg techniques that could have conflicts
                    let logicRef = turnLogic[characterName];
                    let useTechnique = logicRef.useTechnique;
                    if (useTechnique && battleData.techniquesAllowed) {
                        const huohuoTechnique = this.huohuoTechnique ??= logicRef.skillFunctions.huohuoTechnique
                        huohuoTechnique(battleData,"enemy",ownerTurn)
                    }
                },
                "target": "enemy",
                "listenerName": "Huohuo Technique",
                "ownerTurn": {},
            },
            {
                "trigger": "PreBattleEntersCombat",
                condition(battleData,generalInfo) {
                    let ownerTurn = this.ownerTurn;

                    let buffSheet = this.buffSheet ??= {
                        "stats": [CrowdControlRES],
                        [CrowdControlRES]: 0.35,
                        "source": "Trace",
                        "sourceOwner": ownerTurn.properName,
                        "buffName": turnLogic[ownerTurn.properName].buffNames.ccRES,
                        "durationInTurn": null,
                        "duration": null,
                        "AVApplied": 0,
                        "maxStacks": 1,
                        "currentStacks": 1,
                        "decay": false,
                        "expireType": null
                    }
                    updateBuff(battleData,ownerTurn,buffSheet)
                },
                "target": "self",
                "listenerName": "The Cursed One - CC RES application",
                "ownerTurn": {},
            },
        ],
        "eidolonListeners": {
            1: [],
            2: [],
            3: [],
            4: [
                //presumably the 80% scales from the ally's 100% full as a basis, so if an ally has 20% hp they get the full 80% bonus
                //but the question is is this a healing final multi on all huohuo healing or is it just outgoing healing
            ],
            5: [],
            6: [
                {
                    "trigger": "HealEnd",
                    condition(battleData,generalInfo) {
                        // poke("HealEnd",battleData,{targetTurn,sourceTurn,totalHealed,overHeal,actualHeal});
                        let ownerTurn = this.ownerTurn;
                        const sourceTurn = generalInfo.sourceTurn;
                        if (sourceTurn.properName != ownerTurn.properName) {return;}
                        // let characterName = ownerTurn.properName;
    
                        if (!this.e6DMGBuffSHEET) {
                            const buffNames = turnLogic[ownerTurn.properName].buffNames;
                            this.e6DMGBuffSHEET = {
                                "stats": [DamageAll],
                                [DamageAll]: 0.50,
                                "source": "E6",
                                "sourceOwner": ownerTurn.properName,
                                "buffName": buffNames.e6DMG,
                                "durationInTurn": 3,
                                "duration": 2,
                                "AVApplied": 0,
                                "maxStacks": 1,
                                "currentStacks": 1,
                                "decay": false,
                                "expireType": "EndTurn"
                            }
                        }
                        const buffSheet = this.e6DMGBuffSHEET;
                        const targetTurn = generalInfo.targetTurn;
                        updateBuff(battleData,targetTurn,buffSheet)
                    },
                    "target": "ally",
                    "listenerName": "Woven Together, Cohere Forever - healed ally listener",
                    "ownerTurn": {},
                },
            ],
        },
        "ATKObjects": {},
        "characterValues": {
            "talentProvisionIsActive": false,
            "cleanseCounter": 0
        },
        "useTechnique": true,
        "techniqueType": "Impair",
        "buffNames": {
            "talentCountdown": "Divine Provision (Countdown)",
            "ultATK": "Tail: Spiritual Domination",
            "techniqueATKDebuff": "Fiend: Impeachment of Evil",
            "ccRES": "The Cursed One",
            "e1SPD": "E1: Anchored to Vessel, Specters Nestled",
            "e6DMG": "E6: Woven Together, Cohere Forever",
        },
        "characterValuesBattle": {},
    }
}

// updateBuff(battleData,sourceTurn,buffSheet,applyOrRemove,silent,shieldSource,ignoreDebuffPokes,ignoreFamilyPokes) {
    //     let buffRef = sourceTurn.buffsObject;
    //     let buffName = buffSheet.buffName;

    //     // let currentReference = buffRef[buffName];

    //     const isApplied = applyOrRemove === "Apply";
    //     const buffExisted = buffRef[buffName];
    //     if (!isApplied && !buffExisted) {return;}//if we're removing a buff, and it never existed, then abort
    //     const currentReference = buffRef[buffName] ??= isApplied ? {...buffSheet} : null;//only if the buff doesn't exist yet, and only if we're applying a buff, spread the buff sheet, otherwise leave it be as null

    //     let changeStats = false;
    //     let timesToApply = 1;
    //     let deleteBuff = false;
    //     const isEnemy = sourceTurn.isEnemy;
    //     const log = battleData.isLoggyLogger;


    //     if (isApplied) {
    //         currentReference.duration = buffSheet.duration;
    //         currentReference.AVApplied = battleData.sumAV;
    //         const currentDots = sourceTurn.currentDotsArray;
    //         const currentSpecialDots = sourceTurn.specialDotsArray;

    //         const oldShield = currentReference.shieldRemaining;
    //         const isShield = currentReference.isShield;
    //         if (isShield) {battleActions.getShieldValue(battleData,sourceTurn,currentReference,buffSheet,shieldSource);}
    //         const isDOT = currentReference.isDOT;
    //         const isAllDOTTypes = currentReference.isAllDOTTypes;

    //         const isDebuff = currentReference.isDebuff;

    //         const maxStacks = currentReference.maxStacks;
    //         const currentStacks = currentReference.currentStacks;
    //         if (!buffExisted) {//if it doesn't exist at all yet and we're applying, then make it
    //             if (currentStacks > maxStacks) {currentReference.currentStacks = maxStacks;}
    //             changeStats = true;
    //             timesToApply = currentStacks;

    //             if (isShield) {
    //                 sourceTurn.shieldCounter += 1;
    //                 sourceTurn.activeShields[buffName] = currentReference;
    //             }
    //             if (isDOT) {
    //                 sourceTurn.DOTCounter += 1;
    //                 if (!isAllDOTTypes) {
    //                     const element = currentReference.element;
    //                     sourceTurn.dots[element] += 1;
    //                     poke("DOTWasModified",battleData,{sourceTurn,currentReference,dotWas: "Apply",element});
    //                 }
    //                 if (currentReference.isSpecialDOTLast) {currentSpecialDots.push(currentReference);}
    //                 else {currentDots.push(currentReference);}
    //             }
    //             if (currentReference.isFinalMulti) {sourceTurn.finalMultiCounter += 1;}
                
    //             if (!silent && log) {logToBattle(battleData,{logType: "BuffApply", buffName, applicationType: "Apply", isShield,oldShield,newShield:currentReference.shieldRemaining,shieldCap:currentReference.shieldCap, name:sourceTurn.properName, source: buffSheet.source, sourceOwner: buffSheet.sourceOwner, enemyRealName: isEnemy ? sourceTurn.enemyRealName : null, AV: battleData.sumAV, stacks: timesToApply});}
    //             if (isDebuff) {
    //                 sourceTurn.debuffCounter += 1;
    //                 if (!ignoreDebuffPokes) {poke("DebuffApplied",battleData,{sourceTurn,currentReference});}
    //             }//we add a debuff to the target's counter only when a new one is applied, not when stacked though that might bite me later I guess, idk if stacks count or unique debuffs each
    //             if (isAllDOTTypes) {
    //                 //in the case of something like black swan Epiphany debuff, it makes it so enemies are considered to be suffering from all types of dot, so we increment the elemental trackers on the target
    //                 const enemyElementalRef = sourceTurn.dots;
    //                 enemyElementalRef.Wind += 1;
    //                 enemyElementalRef.Fire += 1;
    //                 enemyElementalRef.Lightning += 1;
    //                 enemyElementalRef.Physical += 1;
    //                 poke("DOTWasModified",battleData,{sourceTurn,currentReference,dotWas: "Apply",element:null});
    //             }

    //             currentReference.expireType != "StartTurn"//EndTurn
    //             const expireType = currentReference.expireType;
    //             if (expireType) {
    //                 if (expireType === "StartTurn") {sourceTurn.buffsStartTurn.push(currentReference);}
    //                 else if (expireType === "EndTurn") {sourceTurn.buffsEndTurn.push(currentReference);}
    //             }
    //         }
    //         else {//if it DOES exist but we're still applying it, if it can stack and has room to stack, then STACK it.
    //             if (isDOT) {
    //                 currentReference.avgChanceApplied = buffSheet.avgChanceApplied;
    //                 //if a dot is refreshed, then it is pushed to the end of the currentdots array to be called LAST
    //                 //rn this is the assumption bc with kafka + erode, if erode is added first, even as the oldest is triggered first when enemy turn starts
    //                 if (!currentReference.isSpecialDOTLast) {currentDots.push(currentDots.splice(currentDots.indexOf(currentReference), 1)[0]);}
    //             }
    //             if (isDebuff && !ignoreDebuffPokes) {poke("DebuffApplied",battleData,{sourceTurn,currentReference});}
    //             //inherit the avg'd chance to apply from the newest application, such that we can relfect changes in EHR or enemy effect RES

    //             if (maxStacks > currentStacks && maxStacks > 1) {
    //                 changeStats = true;

    //                 const stackSumTemp = currentStacks + buffSheet.currentStacks;
    //                 timesToApply = Math.min(maxStacks, stackSumTemp) - currentStacks;
    //                 //if we had 1 stack, with a max of 5, but 10 were applied, we'd do (current:1 + applied:10)cap at max 5, minus current:1 = 4 NEW stacks applied due to cap, despite the 10 stacks earned from the action

    //                 currentReference.currentStacks = Math.min(maxStacks, stackSumTemp);//pulling the stacks to apply from the sheet bc this can vary based on how many buff procs happen in a single action
    //                 //right now this assumes that all stack values are uniform. If they end up pulling shit like TFD did with first stack x value then subsequent as y value, that's gonna suck
    //                 if (!silent && log) {logToBattle(battleData,{logType: "BuffApply", buffName, applicationType: "Stack", isShield,oldShield,newShield:currentReference.shieldRemaining,shieldCap:currentReference.shieldCap, name:sourceTurn.properName, source: buffSheet.source, sourceOwner: buffSheet.sourceOwner, enemyRealName: isEnemy ? sourceTurn.enemyRealName : null,AV: battleData.sumAV, stacks: currentReference.currentStacks});}
    //             }
    //             //if the buff exists, we're applying, and the max stacks are the same as current stack, then we REDO the duration based on the specification involved from the buff sheet
    //             //example usecase: archer's guardian buff when anyone gets skill points, expires at the end of his turn. But if it's his turn that he gets a skill point in, then it's the end of his NEXT turn
    //             else if (maxStacks <= currentStacks) {//I did <= to be safe, in theory we should never be less than current stacks due to the min operation in the above section
    //                 if (!silent && log) {logToBattle(battleData,{logType: "BuffApply", buffName, applicationType: "Renew", isShield,oldShield,newShield:currentReference.shieldRemaining,shieldCap:currentReference.shieldCap, name:sourceTurn.properName, source: buffSheet.source, sourceOwner: buffSheet.sourceOwner, enemyRealName: isEnemy ? sourceTurn.enemyRealName : null,AV: battleData.sumAV, stacks: currentReference.currentStacks});}
    //                 //no stat changes necessary, this is just reupping the buff duration, so we'll swap the AV applied, and source
    //                 return;//if all we did was renew and no added stacks, we can leave early
    //             }
    //         }
    //     }
    //     else {
    //         timesToApply = currentReference.currentStacks;//if there were more than 1 stack of bonuses, remove according to the stack count
    //         changeStats = true;
    //         deleteBuff = true;
    //         if (!silent && log) {logToBattle(battleData,{logType: "BuffRemove", buffName, name:sourceTurn.properName, isShield:currentReference.isShield, source: buffSheet.source, sourceOwner: buffSheet.sourceOwner, enemyRealName: isEnemy ? sourceTurn.enemyRealName : null, AV: battleData.sumAV, stacks: currentReference.currentStacks});}
    //         //RIGHT NOW I CANT THINK OF ANYONE WHO ACTUALLY USES DECAY BASED STACKING ON BUFFS, so for now it gets commented(really, removed), can revisit it later
    //     }
    //     // else {return;}//if the buff is removed, but doesn't exist

    //     if (changeStats) {battleActions.buffStatChange(battleData,sourceTurn,buffSheet,currentReference,timesToApply,applyOrRemove,ignoreFamilyPokes)}
    //     if (deleteBuff) {battleActions.buffRemovalEnd(battleData,sourceTurn,currentReference);}
    // },


// updateBuff(battleData,sourceTurn,buffSheet,applyOrRemove,silent,shieldSource,ignoreDebuffPokes,ignoreFamilyPokes) {
    //     let buffRef = sourceTurn.buffsObject;
    //     let buffName = buffSheet.buffName;

    //     let currentReference = buffRef[buffName];
    //     const buffExists = currentReference != undefined;
    //     let changeStats = false;
    //     let timesToApply = 1;
    //     let deleteBuff = false;
    //     const isEnemy = sourceTurn.isEnemy;
    //     // let statsPath = buffExists ? currentReference.stats : null;
    //     let isSourceSpecific = buffExists ? currentReference.isSourceSpecific : null;
    //     const log = battleData.isLoggyLogger;

    //     // let buffSheet = {
    //     //     "stats": {
    //     //         "EffectRES": 0.50
    //     //     },
    //     //     "target": "applied to",
    //     //     "source": "who applied",
    //     //     "buffName": "asdf",
    //     //     "durationInTurn": 
    //     //     "duration": null,
    //     //     "AVApplied": battleData.sumAV,
    //     //     "maxStacks": 1,
    //     //     "currentStacks": 1,
    //     // }

    //     // {
    //     //     "stats": {
    //     //         "EffectRES": 0.50,
    //     //         ...(rank >= 1 ? {"CritDamageBase": 0.20} : {}),
    //     //     },
    //     //     "source": characterName,
    //     //     "buffName": buffName,
    //     //     "durationInTurn": 
    //     //    "duration": 3,
    //     //     "AVApplied": 0,
    //     //     "maxStacks": 1,
    //     //     "currentStacks": 1,
    //     //     "decay": false,
    //     //     "expireType": "EndTurn",
    //     //     "isShield": true,
    //     //     multipliers: values[0],//to give to existing shield of the same name
    //     //     flatAmounts: values[1],//to give to existing shield of the same name
    //     //     multipliersCAP: values[0]*2,//to limit by
    //     //     flatAmountsCAP: values[1]*2,//to limit by
    //     //     scalar: "DEF",
    //     //     shieldRemaining: 0,
    //     //     slot: skillRef.slot,
    //     //     removeOnDeath: true,
    //     // }

    //     // {
    //     //     "stats": null,
    //     //     "multiplier": 1.2,
    //     //     "source": characterName,
    //     //     "buffName": buffNames.e1BigBuff,
    //     //     "durationInTurn": 
    //     //     "duration": 1,
    //     //     "AVApplied": 0,
    //     //     "maxStacks": 1,
    //     //     "currentStacks": 1,
    //     //     "decay": false,
    //     //     "expireType": null,
    //     //     "isFinalMulti": true,
    //     //     "actionTags": ["Skill","MemoSkill"]
    //     // }

        
    //     const currentDots = sourceTurn.currentDotsArray;
    //     const currentSpecialDots = sourceTurn.specialDotsArray;
    //     if (applyOrRemove === "Apply") {
    //         if (!currentReference) {//if it doesn't exist at all yet and we're applying, then make it
    //             currentReference = buffRef[buffName] ??= {...buffSheet};

    //             // getShieldValue(battleData,targetTurn,hitType,percent,flat,scalar,sourceTurn)
    //             const oldShield = currentReference.shieldRemaining;
    //             if (currentReference.isShield) {
    //                 sourceTurn.shieldCounter += 1;
    //                 battleActions.getShieldValue(battleData,sourceTurn,currentReference,buffSheet,shieldSource);
    //                 sourceTurn.activeShields[buffName] = currentReference;
    //             }
    //             if (currentReference.isDOT) {
    //                 sourceTurn.DOTCounter += 1;
    //                 if (!currentReference.isAllDOTTypes) {
    //                     const element = currentReference.element;
    //                     sourceTurn.dots[element] += 1;
    //                     poke("DOTWasModified",battleData,{sourceTurn,currentReference,dotWas: "Apply",element});

    //                     // elementalDOTPokes: {
    //                     //     "Physical": "UpdatedDOTBleed",
    //                     //     "Wind": "UpdatedDOTWindShear",
    //                     //     "Fire": "UpdatedDOTBurn",
    //                     //     "Lightning": "UpdatedDOTShock",
    //                     // },
    //                 }
    //                 if (currentReference.isSpecialDOTLast) {currentSpecialDots.push(currentReference);}
    //                 else {currentDots.push(currentReference);}
    //             }
    //             if (currentReference.isFinalMulti) {sourceTurn.finalMultiCounter += 1;}
                
    //             isSourceSpecific = currentReference.isSourceSpecific;
                
    //             changeStats = true;
    //             timesToApply = Math.min(buffSheet.maxStacks,buffSheet.currentStacks);//limit stacks applied to be safe, something like sparkle talent will apply more than the stack limit if enough skill points are consumed, gotta fix that when it happens
    //             if (!silent && log) {logToBattle(battleData,{logType: "BuffApply", buffName, applicationType: "Apply", isShield:currentReference.isShield,oldShield,newShield:currentReference.shieldRemaining,shieldCap:currentReference.shieldCap, name:sourceTurn.properName, source: buffSheet.source, sourceOwner: buffSheet.sourceOwner, enemyRealName: isEnemy ? sourceTurn.enemyRealName : null, AV: battleData.sumAV, stacks: timesToApply});}
    //             if (currentReference.isDebuff) {
    //                 sourceTurn.debuffCounter += 1;
    //                 if (!ignoreDebuffPokes) {poke("DebuffApplied",battleData,{sourceTurn,currentReference});}
    //             }//we add a debuff to the target's counter only when a new one is applied, not when stacked though that might bite me later I guess, idk if stacks count or unique debuffs each
    //             if (currentReference.isAllDOTTypes) {
    //                 //in the case of something like black swan Epiphany debuff, it makes it so enemies are considered to be suffering from all types of dot, so we increment the elemental trackers on the target
    //                 const enemyElementalRef = sourceTurn.dots;
    //                 enemyElementalRef.Wind += 1;
    //                 enemyElementalRef.Fire += 1;
    //                 enemyElementalRef.Lightning += 1;
    //                 enemyElementalRef.Physical += 1;
    //                 poke("DOTWasModified",battleData,{sourceTurn,currentReference,dotWas: "Apply",element:null});
    //             }

    //             currentReference.expireType != "StartTurn"//EndTurn
    //             const expireType = currentReference.expireType;
    //             if (expireType) {
    //                 if (expireType === "StartTurn") {sourceTurn.buffsStartTurn.push(currentReference);}
    //                 else if (expireType === "EndTurn") {sourceTurn.buffsEndTurn.push(currentReference);}
    //             }
    //         }
    //         else {//if it DOES exist but we're still applying it, if it can stack and has room to stack, then STACK it.
    //             const maxStacks = currentReference.maxStacks;
    //             const currentStacks = currentReference.currentStacks;
    //             const sumAV = battleData.sumAV;
    //             const oldShield = currentReference.shieldRemaining;
    //             //shield value gets adjusted regardless of what happens here
    //             if (currentReference.isShield) {battleActions.getShieldValue(battleData,sourceTurn,currentReference,buffSheet,shieldSource);}
    //             if (currentReference.isDOT) {
    //                 currentReference.avgChanceApplied = buffSheet.avgChanceApplied;

    //                 //if a dot is refreshed, then it is pushed to the end of the currentdots array to be called LAST
    //                 //rn this is the assumption bc with kafka + erode, if erode is added first, even as the oldest is triggered first when enemy turn starts
    //                 if (!currentReference.isSpecialDOTLast) {currentDots.push(currentDots.splice(currentDots.indexOf(currentReference), 1)[0]);}
    //             }
    //             if (currentReference.isDebuff && !ignoreDebuffPokes) {poke("DebuffApplied",battleData,{sourceTurn,currentReference});}
    //             //inherit the avg'd chance to apply from the newest application, such that we can relfect changes in EHR or enemy effect RES

    //             if (currentReference.maxStacks > currentStacks && maxStacks > 1) {
    //                 changeStats = true;
    //                 currentReference.duration = buffSheet.duration;
    //                 currentReference.source = buffSheet.source;

    //                 const stackSumTemp = currentStacks + buffSheet.currentStacks;
    //                 timesToApply = Math.min(maxStacks, stackSumTemp) - currentStacks;
    //                 //if we had 1 stack, with a max of 5, but 10 were applied, we'd do (current:1 + applied:10)cap at max 5, minus current:1 = 4 NEW stacks applied due to cap, despite the 10 stacks earned from the action

    //                 currentReference.currentStacks = Math.min(maxStacks, stackSumTemp);//pulling the stacks to apply from the sheet bc this can vary based on how many buff procs happen in a single action
    //                 //right now this assumes that all stack values are uniform. If they end up pulling shit like TFD did with first stack x value then subsequent as y value, that's gonna suck
    //                 if (!silent && log) {logToBattle(battleData,{logType: "BuffApply", buffName, applicationType: "Stack", isShield:currentReference.isShield,oldShield,newShield:currentReference.shieldRemaining,shieldCap:currentReference.shieldCap, name:sourceTurn.properName, source: buffSheet.source, sourceOwner: buffSheet.sourceOwner, enemyRealName: isEnemy ? sourceTurn.enemyRealName : null,AV: battleData.sumAV, stacks: currentReference.currentStacks});}
    //             }
    //             //if the buff exists, we're applying, and the max stacks are the same as current stack, then we REDO the duration based on the specification involved from the buff sheet
    //             //example usecase: archer's guardian buff when anyone gets skill points, expires at the end of his turn. But if it's his turn that he gets a skill point in, then it's the end of his NEXT turn
    //             else if (maxStacks <= currentStacks) {//I did <= to be safe, in theory we should never be less than current stacks due to the min operation in the above section
    //                 currentReference.duration = buffSheet.duration;
    //                 currentReference.source = buffSheet.source;

    //                 if (!silent && log) {logToBattle(battleData,{logType: "BuffApply", buffName, applicationType: "Renew", isShield:currentReference.isShield,oldShield,newShield:currentReference.shieldRemaining,shieldCap:currentReference.shieldCap, name:sourceTurn.properName, source: buffSheet.source, sourceOwner: buffSheet.sourceOwner, enemyRealName: isEnemy ? sourceTurn.enemyRealName : null,AV: battleData.sumAV, stacks: currentReference.currentStacks});}
    //                 //no stat changes necessary, this is just reupping the buff duration, so we'll swap the AV applied, and source
    //                 return;//if all we did was renew and no added stacks, we can leave early
    //             }
    //         }
    //     }
    //     else if (applyOrRemove === "Remove" && currentReference) {
    //         timesToApply = currentReference.currentStacks;//if there were more than 1 stack of bonuses, remove according to the stack count
    //         changeStats = true;
    //         deleteBuff = true;
    //         if (!silent && log) {logToBattle(battleData,{logType: "BuffRemove", buffName, name:sourceTurn.properName, isShield:currentReference.isShield, source: buffSheet.source, sourceOwner: buffSheet.sourceOwner, enemyRealName: isEnemy ? sourceTurn.enemyRealName : null, AV: battleData.sumAV, stacks: currentReference.currentStacks});}
    //         //RIGHT NOW I CANT THINK OF ANYONE WHO ACTUALLY USES DECAY BASED STACKING ON BUFFS, so for now it gets commented(really, removed), can revisit it later
    //     }
    //     else {return;}//if the buff is removed, but doesn't exist

    //     if (changeStats) {
    //         //switch to onhit stat table for buffs relevant to it(incessant rain is a good example with the crit rate, also acheron e1, etc.)
    //         //but also if it's a source-specific event, then switch to the source table for the character that applied the buff/debuff

    //         // basicShorthand.mappedCacheTags 
            

    //         const statDirection = applyOrRemove === "Apply" ? 1 : -1;
    //         const composite = statDirection * timesToApply;
    //         const regStats = currentReference.stats;
    //         const actionTags = currentReference.actionTags;

    //         if (!actionTags) {
                
    //             if (regStats) {
    //                 let currentStatTable = isSourceSpecific ? sourceTurn[currentReference.sourceOwner] ??= new Array(greatTableSize).fill(0) : sourceTurn.statTable;//Array

    //                 for (let elements of regStats) {
    //                     currentStatTable[elements] += (currentReference[elements] * composite);
    //                 }
                    
    //                 const familyRef = battleData.familyRef[buffName] ??= battleActions.getBuffStatFamilies(buffSheet);
    //                 if (familyRef.size && !ignoreFamilyPokes) {
    //                     const genInfo = {sourceTurn};
    //                     pokeSet(familyRef,battleData,genInfo)
    //                     // for (let familyName of familyRef) {
    //                     //     poke(familyName,battleData,genInfo);//onhit properties do NOT trigger conditionals since they exist outside the stat sheet
    //                     // }
    //                 }
    //             }
    //             const onHitStats = currentReference.statsOnHit;
    //             if (onHitStats) {
    //                 let currentStatTable = sourceTurn.statTableONHIT;
    //                 for (let elements of onHitStats) {
    //                     currentStatTable[elements] += (currentReference[elements] * composite);
    //                 }
    //             }

    //             const onTurnStats = currentReference.onTurnStats;
    //             if (onTurnStats) {
    //                 let currentStatTable = sourceTurn.statTableONTurn;
    //                 for (let elements of onTurnStats) {
    //                     currentStatTable[elements] += (currentReference[elements] * composite);
    //                 }
    //             }
    //         }
    //         else {
    //             const actionTagLength = actionTags.length;
    //             if (currentReference.isFinalMulti) {
    //                 // activeFinalMultipliers
    //                 // sourceTurn.finalMultiCounter += 1;
    //                 // sourceTurn.activeFinalMultipliers

    //                 const characterActions = sourceTurn.activeFinalMultipliers;

    //                 for (let i=0;i<actionTagLength;i++) {
    //                     let currentTag = actionTags[i];
    //                     let activeTable = characterActions[currentTag] ??= {};//make the stat sheet if it doesn't exist yet

    //                     activeTable[buffName] = currentReference;
    //                     // for (let elements in regStats) {
    //                     //     activeTable[elements] += (regStats[elements] * composite);
    //                     // }
    //                 }
    //             }
    //             else {


    //                 const characterActions = sourceTurn.tagSpecific;
    //                 //action tags don't have onhit checks bc for all intents and purposes, action tags ARE onhit effects, just a matter of what actions
    //                 //TODO: possibly go through and set all actual onhit effects to be the attack action tag instead

    //                 for (let i=0;i<actionTagLength;i++) {
    //                     let currentTag = actionTags[i];
    //                     let activeTable = characterActions[currentTag] ??= new Array(greatTableSize).fill(0);//make the stat sheet if it doesn't exist yet

    //                     for (let elements of regStats) {
    //                         activeTable[elements] += (currentReference[elements] * composite);
    //                     }
    //                 }
    //                 // currentReference.actionTags
    //                 // tagSpecific
    //             }
    //         }

    //         const familyCacheRef = battleData.familyCacheRef[buffName] ??= battleActions.getBuffCacheFamilies(buffSheet);
            
    //         if (familyCacheRef.size) {
    //             // cacheTagValues: {
    //             //     "UpdateStatDamage": {
    //             //         //compositeCacheTag will define itself here when used, and the tag will be the key
    //             //     },
    // "UpdateStatElation": {},
    // "UpdateStatMerryMake": {},
    //             //     "UpdateStatDEFShred": {},
    //             //     "UpdateStatPEN": {},
    //             //     "UpdateStatVulnerable": {},
    //             //     "UpdateStatCritRate": {},
    //             //     "UpdateStatCritDamage": {},
    //             // },

    //             for (let familyName of familyCacheRef) {
    //                 const isCachedFamily = familyCacheTagSet.has(familyName);
    //                 // console.log(familyCacheRef)

    //                 if (isCachedFamily) {
    //                     const currentCacheGrouping = sourceTurn.cacheTagValues[familyName];
    //                     // console.log(currentCacheGrouping)
    //                     for (let groupName in currentCacheGrouping) {
    //                         const currentGroup = currentCacheGrouping[groupName];
    //                         // console.log(groupName,familyName,currentCacheGrouping)
    //                         currentGroup.valueIsCurrentAsAttacker = false;
    //                         currentGroup.valueIsCurrentAsTarget = false;
    //                         currentGroup.cacheValue = null;
    //                     }
    //                 }

    //             }
    //         }
    //     }
    //     if (deleteBuff) {
    //         buffRef[buffName] = null;
    //         currentReference.expireFunction?.(battleData,currentReference.expireParam);
    //         //if I forget how this works later, go look at earthly escapade(sparkle lc) for a good example


    //         if (currentReference.isDebuff) {
    //             sourceTurn.debuffCounter -= 1;
    //             if (!ignoreDebuffPokes) {poke("DebuffRemoved",battleData,{sourceTurn,currentReference});}
    //         }
    //         if (currentReference.isDOT) {
    //             sourceTurn.DOTCounter -= 1;
    //             if (!currentReference.isAllDOTTypes) {
    //                 const element = currentReference.element;
    //                 sourceTurn.dots[element] -= 1;
    //                 poke("DOTWasModified",battleData,{sourceTurn,currentReference,dotWas: "Remove",element});
    //             }
    //             if (currentReference.isSpecialDOTLast) {currentSpecialDots.splice(currentSpecialDots.indexOf(currentReference), 1);}
    //             else {currentDots.splice(currentDots.indexOf(currentReference), 1);}
    //         }
    //         if (currentReference.isAllDOTTypes) {
    //             //in the case of something like black swan Epiphany debuff, it makes it so enemies are considered to be suffering from all types of dot, so we increment the elemental trackers on the target
    //             const enemyElementalRef = sourceTurn.dots;
    //             enemyElementalRef.Wind -= 1;
    //             enemyElementalRef.Fire -= 1;
    //             enemyElementalRef.Lightning -= 1;
    //             enemyElementalRef.Physical -= 1;
    //             poke("DOTWasModified",battleData,{sourceTurn,currentReference,dotWas: "Remove",element:null});
    //         }
    //         if (currentReference.isShield) {
    //             sourceTurn.shieldCounter -= 1;
    //             sourceTurn.activeShields[buffName] = null;
    //             poke("ShieldLost",battleData,{sourceTurn,currentReference});
    //         }
    //         if (currentReference.isFinalMulti) {
    //             // activeFinalMultipliers
    //             // sourceTurn.finalMultiCounter += 1;
    //             // sourceTurn.activeFinalMultipliers

    //             sourceTurn.finalMultiCounter -= 1;
    //             const currentTags = currentReference.actionTags;
    //             const characterActions = sourceTurn.activeFinalMultipliers;

    //             for (let i=0;i<currentTags.length;i++) {
    //                 let currentTag = currentTags[i];
    //                 let activeTable = characterActions[currentTag] ??= {};//make the stat sheet if it doesn't exist yet

    //                 activeTable[buffName] = null;
    //                 // for (let elements in regStats) {
    //                 //     activeTable[elements] += (regStats[elements] * composite);
    //                 // }
    //             }
    //         }
            
    //     }
    // },


// pullCompositeStats(sourceCache,targetCache,compositeCacheTag,table,enemyTable,attackerStatsONHIT,targetStatsSourceBased,targetStatsTeamBased,targetStatsOnTurn,tagsPEN,tagsShred,tagsVuln,actionTables,actionTags,actionTablesTarget) {
//     // realPENKeys,realShredKeys,realVulnKeys
//     // console.log(tagsPEN,tagsShred,tagsVuln)
//     const {UpdateStatPEN:UpdateStatPENTarget,UpdateStatDEFShred:UpdateStatDEFShredTarget,UpdateStatVulnerable:UpdateStatVulnerableTarget} = targetCache;
//     const {UpdateStatPEN,UpdateStatDEFShred,UpdateStatVulnerable} = sourceCache;
//     // const {UpdateStatPEN:UpdateStatPENTarget,UpdateStatDEFShred:UpdateStatDEFShredTarget,UpdateStatVulnerable:UpdateStatVulnerableTarget} = targetCache;

//     const sourceDepositPEN = UpdateStatPEN[compositeCacheTag] ??= {};
//     const targetDepositPEN = UpdateStatPENTarget[compositeCacheTag] ??= {};
//     const hasChangedPEN = !sourceDepositPEN.valueIsCurrentAsAttacker || !targetDepositPEN.valueIsCurrentAsTarget;

//     const sourceDepositShred = UpdateStatDEFShred[compositeCacheTag] ??= {};
//     const targetDepositShred = UpdateStatDEFShredTarget[compositeCacheTag] ??= {};
//     const hasChangedShred = !sourceDepositShred.valueIsCurrentAsAttacker || !targetDepositShred.valueIsCurrentAsTarget;

//     const sourceDepositVuln = UpdateStatVulnerable[compositeCacheTag] ??= {};
//     const targetDepositVuln = UpdateStatVulnerableTarget[compositeCacheTag] ??= {};
//     const hasChangedVuln = !sourceDepositVuln.valueIsCurrentAsAttacker || !targetDepositVuln.valueIsCurrentAsTarget;

//     const iterateAtAll = hasChangedPEN || hasChangedShred || hasChangedVuln;

//     // realPENKeys,realShredKeys,realVulnKeys
//     // const hasChanged = !sourceDeposit.valueIsCurrentAsAttacker || !targetDeposit.valueIsCurrentAsTarget;

//     if (iterateAtAll) {
//         let sumPEN = 0;
//         let sumSHRED = 0;
//         let sumVULN = 1;

//         const totalTagLength = tagsPEN.length;

//         if (actionTags) {
//             for (let i=0;i<totalTagLength;i++) {
//                 const tagPEN = tagsPEN[i];
//                 const tagShred = tagsShred[i];
//                 const tagVuln = tagsVuln[i];

//                 if (hasChangedPEN) {sumPEN += table[tagPEN] + attackerStatsONHIT[tagPEN] + targetStatsSourceBased[tagPEN] + targetStatsOnTurn[tagPEN];}
//                 if (hasChangedShred) {sumSHRED += table[tagShred] + attackerStatsONHIT[tagShred] + targetStatsSourceBased[tagShred] + targetStatsOnTurn[tagShred];}
//                 if (hasChangedVuln) {sumVULN += enemyTable[tagVuln] + attackerStatsONHIT[tagVuln] + targetStatsSourceBased[tagVuln] + targetStatsOnTurn[tagVuln];}

//                 for (let action of actionTags) {
//                     const actionTableSource = actionTables[action];
//                     const actionTableTarget = actionTablesTarget[action];

//                     // bonus += (actionTables[action]?.[tag] ?? 0) + (actionTablesTarget[action]?.[tag] ?? 0);
//                     if (hasChangedPEN) {sumPEN += (actionTableSource?.[tagPEN] ?? 0) + (actionTableTarget?.[tagPEN] ?? 0);}
//                     if (hasChangedShred) {sumSHRED += (actionTableSource?.[tagShred] ?? 0) + (actionTableTarget?.[tagShred] ?? 0);}
//                     if (hasChangedVuln) {sumVULN += (actionTableSource?.[tagVuln] ?? 0) + (actionTableTarget?.[tagVuln] ?? 0);}
//                 }
//             }
//         }
//         else {
//             for (let i=0;i<totalTagLength;i++) {
//                 // bonus += table[tag] + attackerStatsONHIT[tag] + targetStatsSourceBased[tag] + targetStatsOnTurn[tag];
//                 const tagPEN = tagsPEN[i];
//                 const tagShred = tagsShred[i];
//                 const tagVuln = tagsVuln[i];

//                 if (hasChangedPEN) {sumPEN += table[tagPEN] + attackerStatsONHIT[tagPEN] + targetStatsSourceBased[tagPEN] + targetStatsOnTurn[tagPEN];}
//                 if (hasChangedShred) {sumSHRED += table[tagShred] + attackerStatsONHIT[tagShred] + targetStatsSourceBased[tagShred] + targetStatsOnTurn[tagShred];}
//                 if (hasChangedVuln) {sumVULN += enemyTable[tagVuln] + attackerStatsONHIT[tagVuln] + targetStatsSourceBased[tagVuln] + targetStatsOnTurn[tagVuln];}
//             }
//         }

//         if (hasChangedPEN) {
//             sourceDepositPEN.valueIsCurrentAsAttacker = true;
//             targetDepositPEN.valueIsCurrentAsTarget = true;
//             sourceDepositPEN.cacheValue = sumPEN;
//         }
//         if (hasChangedShred) {
//             sourceDepositShred.valueIsCurrentAsAttacker = true;
//             targetDepositShred.valueIsCurrentAsTarget = true;
//             sourceDepositShred.cacheValue = sumSHRED;
//         }
//         if (hasChangedVuln) {
//             sourceDepositVuln.valueIsCurrentAsAttacker = true;
//             targetDepositVuln.valueIsCurrentAsTarget = true;
//             sourceDepositVuln.cacheValue = sumVULN;
//         }
//     }

//     return {sumPEN:sourceDepositPEN.cacheValue,sumSHRED:sourceDepositShred.cacheValue,sumVULN:sourceDepositVuln.cacheValue}
// },






// pullDamageReduction(sourceCache,targetCache,compositeCacheTag,table,targetStats,tableONHIT,targetStatsSourceBased,targetStatsOnTurn,actionTables,actionTags,actionTablesTarget) {
//     // console.log(targetStatsSourceBased)
//     const sourceDeposit = sourceCache.UpdateStatDamageReduction[compositeCacheTag] ??= {};
//     const targetDeposit = targetCache.UpdateStatDamageReduction[compositeCacheTag] ??= {};
//     const hasChanged = !sourceDeposit.valueIsCurrentAsAttacker || !targetDeposit.valueIsCurrentAsTarget;
//     // const hasChanged = !targetDeposit.valueIsCurrentAsTarget;

//     const standardDRIndex = DamageReductionStandard;

//     if (hasChanged) {
//         let bonus = 0;
//         sourceDeposit.valueIsCurrentAsAttacker = true;
//         targetDeposit.valueIsCurrentAsTarget = true;//targetStats

        
//         if (actionTags) {
//             bonus += targetStats[standardDRIndex] + tableONHIT[standardDRIndex] + targetStatsSourceBased[standardDRIndex]; 

//             for (let action of actionTags) {
//                 bonus += (actionTables[action]?.[standardDRIndex] ?? 0) + (actionTablesTarget[action]?.[standardDRIndex] ?? 0);
//             }
//         }
//         else {

//             bonus += targetStats[standardDRIndex] + tableONHIT[standardDRIndex] + targetStatsSourceBased[standardDRIndex];

//         }

//         targetDeposit.cacheValue = bonus;
//     }

//     return Math.max(0.01,1 - targetDeposit.cacheValue);

//     // greatTableIndex
//     // return bonus;
// },



// pullCritRateSUM(table,targetStats,attackerStatsONHIT,targetStatsSourceBased,targetStatsTeamBased,targetStatsOnTurn,actionTables,actionTags,actionTablesTarget) {
//     // table,attackerStatsONHIT,targetStatsSourceBased,tags
//     let bonus = 0;

//     bonus += table[CritRateBase] + attackerStatsONHIT[CritRateBase] + targetStatsSourceBased[CritRateBase] + targetStatsTeamBased[CritRateBase];
//     // console.log(actionTags,hasTagTables)
//     if (actionTags) {
//         for (let action of actionTags) {
//             const currentTable = actionTables[action];
//             const currentTableTarget = actionTablesTarget[action];
//             // console.log(currentTable.CritRateBase)
//             bonus += (currentTable ? currentTable[CritRateBase] : 0) + (currentTableTarget ? currentTableTarget[CritRateBase] : 0);
//         }
//     }
    
//     return Math.min(1,bonus);//sourceTurn.tagSpecific
// },
// pullCritDamageSUM(table,targetStats,attackerStatsONHIT,targetStatsSourceBased,targetStatsTeamBased,targetStatsOnTurn,actionTables,actionTags,actionTablesTarget) {
//     // table,attackerStatsONHIT,targetStatsSourceBased,tags
//     let bonus = 0;

//     bonus += table[CritDamageBase] + attackerStatsONHIT[CritDamageBase] + targetStatsSourceBased[CritDamageBase] + targetStatsTeamBased[CritDamageBase] + targetStatsOnTurn[CritDamageBase];
//     // console.log(actionTags,hasTagTables)
//     if (actionTags) {
//         for (let action of actionTags) {
//             const currentTable = actionTables[action];
//             const currentTableTarget = actionTablesTarget[action];
//             // console.log(currentTable.CritDamageBase)
//             bonus += (currentTable ? currentTable[CritDamageBase] : 0) + (currentTableTarget ? currentTableTarget[CritDamageBase] : 0);
//         }
//     }
//     // console.log(bonus)
//     return bonus;//sourceTurn.tagSpecific
// },
// pullCritStats(table,targetStats,attackerStatsONHIT,targetStatsSourceBased,targetStatsTeamBased,targetStatsOnTurn,actionTables,actionTags,actionTablesTarget) {
//     // table,attackerStatsONHIT,targetStatsSourceBased,tags
//     // let bonus = 0;
//     let totalCritRate = 0;
//     let totalCritDMG = 0;

//     totalCritDMG += table[CritDamageBase] + attackerStatsONHIT[CritDamageBase] + targetStatsSourceBased[CritDamageBase] + targetStatsTeamBased[CritDamageBase] + targetStatsOnTurn[CritDamageBase];
//     totalCritRate += table[CritRateBase] + attackerStatsONHIT[CritRateBase] + targetStatsSourceBased[CritRateBase] + targetStatsTeamBased[CritRateBase];
//     // console.log(actionTags,hasTagTables)
//     if (actionTags) {
//         for (let action of actionTags) {
//             const currentTable = actionTables[action];
//             const currentTableTarget = actionTablesTarget[action];
//             // console.log(currentTable.CritDamageBase)
//             totalCritDMG += (currentTable ? currentTable[CritDamageBase] : 0) + (currentTableTarget ? currentTableTarget[CritDamageBase] : 0);
//             totalCritRate += (currentTable ? currentTable[CritRateBase] : 0) + (currentTableTarget ? currentTableTarget[CritRateBase] : 0);
//         }
//     }
//     totalCritRate = Math.min(1,totalCritRate);
//     // console.log(bonus)
//     return {totalCritDMG,totalCritRate};//sourceTurn.tagSpecific
// },



// pullPENBonus(sourceCache,targetCache,compositeCacheTag,table,tableONHIT,targetStatsSourceBased,targetStatsOnTurn,tags) {
//     const sourceDeposit = sourceCache.UpdateStatPEN[compositeCacheTag] ??= {};
//     const targetDeposit = targetCache.UpdateStatPEN[compositeCacheTag] ??= {};
//     const hasChanged = !sourceDeposit.valueIsCurrentAsAttacker || !targetDeposit.valueIsCurrentAsTarget;

    
//     if (hasChanged) {
//         let bonus = 0;
//         sourceDeposit.valueIsCurrentAsAttacker = true;
//         targetDeposit.valueIsCurrentAsTarget = true;

//         for (let tag of tags) {bonus += table[tag] + tableONHIT[tag] + targetStatsSourceBased[tag] + targetStatsOnTurn[tag];}
//         sourceDeposit.cacheValue = bonus;
//     }

//     return sourceDeposit.cacheValue;
//     // return bonus;
// },
//                 // table,attackerStatsONHIT,targetStatsSourceBased,targetStatsTeamBased,tags,actionTables,actionTags,actionTablesTarget
// pullDEFShredBonusOLD(table,tableONHIT,targetStatsSourceBased,tags) {
//     let bonus = 0;
//     for (let tag of tags) {bonus += table[tag] + tableONHIT[tag] + targetStatsSourceBased[tag]}
//     return bonus;
// },
// pullDEFShredBonus(sourceCache,targetCache,compositeCacheTag,table,attackerStatsONHIT,targetStatsSourceBased,targetStatsTeamBased,targetStatsOnTurn,tags,actionTables,actionTags,actionTablesTarget) {
//     // table,attackerStatsONHIT,targetStatsSourceBased,tags
    
//     const sourceDeposit = sourceCache.UpdateStatDEFShred[compositeCacheTag] ??= {};
//     const targetDeposit = targetCache.UpdateStatDEFShred[compositeCacheTag] ??= {};
//     const hasChanged = !sourceDeposit.valueIsCurrentAsAttacker || !targetDeposit.valueIsCurrentAsTarget;

    
//     if (hasChanged) {
//         let bonus = 0;

//         sourceDeposit.valueIsCurrentAsAttacker = true;
//         targetDeposit.valueIsCurrentAsTarget = true;

//         if (actionTags) {
//             for (let tag of tags) {
//                 bonus += table[tag] + attackerStatsONHIT[tag] + targetStatsSourceBased[tag] + targetStatsOnTurn[tag]; 

//                 for (let action of actionTags) {
//                     bonus += (actionTables[action]?.[tag] ?? 0) + (actionTablesTarget[action]?.[tag] ?? 0);
//                 }
//             }
//         }
//         else {
//             for (let tag of tags) {
//                 bonus += table[tag] + attackerStatsONHIT[tag] + targetStatsSourceBased[tag] + targetStatsOnTurn[tag];
//             }
//         }

//         sourceDeposit.cacheValue = bonus;
//     }

//     // if (actionTags) {
//     //     for (let tag of tags) {
//     //         bonus += table[tag] + attackerStatsONHIT[tag] + targetStatsSourceBased[tag] + targetStatsOnTurn[tag]; 
//     //         for (let action of actionTags) {
//     //             bonus += (actionTables[action]?.[tag] ?? 0) + (actionTablesTarget[action]?.[tag] ?? 0);
//     //         }
//     //     }
//     // }
//     // else {
//     //     for (let tag of tags) {
//     //         bonus += table[tag] + attackerStatsONHIT[tag] + targetStatsSourceBased[tag] + targetStatsOnTurn[tag];
//     //     }
//     // }

//     // return bonus;
//     return sourceDeposit.cacheValue;//sourceTurn.tagSpecific
// },
// // pullVULNBonusOLD(table,attackerStatsONHIT,targetStatsSourceBased,tags) {
// //     let bonus = 0;
// //     for (let tag of tags) {bonus += table[tag] + attackerStatsONHIT[tag] + targetStatsSourceBased[tag]}
// //     return bonus;
// // },
// pullVULNBonus(sourceCache,targetCache,compositeCacheTag,table,attackerStatsONHIT,targetStatsSourceBased,targetStatsTeamBased,targetStatsOnTurn,tags,actionTables,actionTags,actionTablesTarget) {
//     // table,attackerStatsONHIT,targetStatsSourceBased,tags
//     const sourceDeposit = sourceCache.UpdateStatVulnerable[compositeCacheTag] ??= {};
//     const targetDeposit = targetCache.UpdateStatVulnerable[compositeCacheTag] ??= {};
//     const hasChanged = !sourceDeposit.valueIsCurrentAsAttacker || !targetDeposit.valueIsCurrentAsTarget;

    
//     if (hasChanged) {
//         let bonus = 0;
//         sourceDeposit.valueIsCurrentAsAttacker = true;
//         targetDeposit.valueIsCurrentAsTarget = true;
//         if (actionTags) {
//             // for (let action of actionTags) {
//             //     const currentTable = actionTables[action];
//             // }
//             for (let tag of tags) {
//                 bonus += table[tag] + attackerStatsONHIT[tag] + targetStatsSourceBased[tag] + targetStatsOnTurn[tag]; 
//                 for (let action of actionTags) {
//                     const actionRef = actionTables[action];
//                     const actionRefTarget = actionTablesTarget[action];
//                     bonus += (actionRef ? actionRef[tag] : 0) + (actionRefTarget ? actionRefTarget[tag] : 0);
//                 }
//             }
//         }
//         else {
//             for (let tag of tags) {
//                 bonus += table[tag] + attackerStatsONHIT[tag] + targetStatsSourceBased[tag] + targetStatsOnTurn[tag];
//             }
//         }
//         sourceDeposit.cacheValue = bonus;
//     }
    
//     return sourceDeposit.cacheValue;
//     // return bonus;//sourceTurn.tagSpecific
// },



// healedOLD(battleData,targetTurn,sourceTurn,hitType,percent,flat,scalar,skillSlot,targetsHealedThisTurn) {
//     let targetStats = targetTurn.statTable;
//     let sourceStats = sourceTurn.statTable;

//     poke("HealStart",battleData,{source:sourceTurn.name,target:targetTurn.name});
//     let sourceMulti = 1 + sourceStats.HealingOutgoing + targetStats.HealingIncoming;
//     // let targetMulti = 1 + targetStats.HealingIncoming;
//     let composite = sourceMulti;// * targetMulti;

//     let scalarSUM = scalar ? pullScalar(sourceStats,scalar) : 0;

//     let percentHealed = percent * composite * scalarSUM;
//     let flatHealed = flat * composite;
//     let totalHealed = percentHealed + flatHealed;

//     let targetMax = targetTurn.maxHP;
//     let proposedHealing = targetTurn.currentHP + totalHealed
//     targetTurn.currentHP = Math.min(targetMax,proposedHealing);

//     let overHeal = proposedHealing > targetMax ? proposedHealing - targetMax : 0;
//     let actualHeal = totalHealed - overHeal;

//     let logger = battleData.isLoggyLogger;
//     let hitData = {
//         scalar,percent,flat,
//         totalHealed,actualHeal,overHeal,
//         sourceData: logger ? JSON.stringify(sourceTurn) : null,
//         targetData: logger ? JSON.stringify(targetTurn) : null,
//         AV:battleData.sumAV
//     }
//     if (!targetsHealedThisTurn[targetTurn.name]) {targetsHealedThisTurn[targetTurn.name] = 0}
//     targetsHealedThisTurn[targetTurn.name] += 1;
//     let hitDisplay = {
//         "primary": "Single Target",
//         "blast": "Blast",
//         "all": "AoE"
//     }
//     if (battleData.isLoggyLogger) {logToBattle(battleData,{logType: "HealAlly", hitType: hitDisplay[hitType], target: targetTurn.properName, source:sourceTurn.properName, hitData});}
    
//     poke("HealEnd",battleData,{source:sourceTurn.name,target:targetTurn.name});
//     return {totalHealed,actualHeal,overHeal}
// },



// healAllyWrapper(battleData,targetTurn,sourceTurn,ATKObject,skillSlo) {
//     //idk if there are any "when healing allies, increase the healing amount by x" benefits but if there are then we'd need this poke trigger
//     //revise later if worthless
//     if (battleData.isLoggyLogger) {logToBattle(battleData,{logType: "HealAllyStart"});}
//     poke("HealAllyStart",battleData,{sourceTurn,targetTurn});
//     // poke("HealAllyStart",battleData,{source:sourceTurn.name,target:targetTurn.name});

//     let multis = ATKObject.multipliers;
//     let flats = ATKObject.flatAmounts;

//     let totalHeal = 0;
//     let overHeal = 0;
//     let targetsHealedThisTurn = {};
//     let targetsHealed = 0;

//     //target for the heal doesn't HAVE to be specified, but it needs to be if it is actually a targeted, non-all type heal.
//     let namedTurned = battleData.nameBasedTurns;

//     if (multis.primary || flats.primary) {
//         let hitType = "primary";
//         let percent = multis[hitType] ? multis[hitType] : 0;
//         let flat = flats[hitType] ? flats[hitType] : 0;

//         let heal = battleActions.healed(battleData,targetTurn,sourceTurn,hitType,percent,flat,ATKObject.scalar,skillSlot,targetsHealedThisTurn);
//         totalHeal += heal.totalHealed;
//         overHeal += heal.overHeal;
//         targetsHealed++;
//     }
//     if (multis.blast || flats.blast) {
//         let targetSlot = targetTurn.slotNumber;
//         let blast1Slot = `char${targetSlot - 1}`;
//         let blast2Slot = `char${targetSlot + 1}`;
//         let blastTargets = [];
        
//         let hitType = "blast";
//         let percent = multis[hitType] ? multis[hitType] : 0;
//         let flat = flats[hitType] ? flats[hitType] : 0;

//         if (blast1Slot != "char0" && !namedTurned[blast1Slot].isDead) {blastTargets.push(namedTurned[blast1Slot])}
//         if (blast2Slot != "char5" && !namedTurned[blast2Slot].isDead) {blastTargets.push(namedTurned[blast2Slot])}
//         //TODO: dynamic handling for summons that can be healed and are between characters
//         //iirc a summon will always be to the RIGHT of a character, so char1 summon is char1.5 never char0

//         for (let blastTarget of blastTargets) {
//             let heal = battleActions.healed(battleData,blastTarget,sourceTurn,hitType,percent,flat,ATKObject.scalar,skillSlot,targetsHealedThisTurn);
//             // return {totalHealed,actualHeal,overHeal,targetsHealedThisTurn}
//             totalHeal += heal.totalHealed;
//             overHeal += heal.overHeal;
//             targetsHealed++;
//         }
//     }
//     if (multis.all || flats.all) {
//         let hitType = "all";
//         let percent = multis[hitType] ? multis[hitType] : 0;
//         let flat = flats[hitType] ? flats[hitType] : 0;

//         for (let allySlot in namedTurned) {
//             let currentAlly = namedTurned[allySlot];

//             let heal = battleActions.healed(battleData,currentAlly,sourceTurn,hitType,percent,flat,ATKObject.scalar,skillSlot,targetsHealedThisTurn);
//             totalHeal += heal.totalHealed;
//             overHeal += heal.overHeal;
//             targetsHealed++;
//         }
//     }
//     // let ATKObject = {
//     //     multipliers: {
//     //         primary: null,
//     //         blast: null,
//     //         all: null,
//     //     },
//     //     flatAmounts: {
//     //         primary: values[0],
//     //         blast: null,
//     //         all: null,
//     //     },
//     //     scalar: null,
//     //     DMGTags: []
//     // }
//     battleData.battleHealingSUM += totalHeal;

//     let sourceName = sourceTurn.properName;
//     let totalsRef = battleData.battleTotal;
//     let sumSlotRef = totalsRef.Healing[sourceName] ??= {};
//     sumSlotRef[skillSlot] = (sumSlotRef[skillSlot] ?? 0) + totalHeal;
//     let sumSlotRef2 = totalsRef.Actions[sourceName] ??= {};
//     sumSlotRef2[skillSlot] = (sumSlotRef2[skillSlot] ?? 0) + 1;
//     let sumSlotRef3 = totalsRef.OverHeal[sourceName] ??= {};
//     sumSlotRef3[skillSlot] = (sumSlotRef3[skillSlot] ?? 0) + overHeal;

//     poke("HealAllyEnd",battleData,{sourceTurn,targetTurn});
//     if (battleData.isLoggyLogger) {logToBattle(battleData,{logType: "HealAllyEnd", targetsHealed, totalHeal});}
//     return {targetsHealedThisTurn}
// },



// pullSuperBreakDMGMultiOLD(targetStats,targetStatsONHIT,targetStatsSourceBased) {
//     return (1 + targetStats[DamageBreak] + targetStatsONHIT[DamageBreak] + targetStatsSourceBased[DamageBreak]) 
//     * (1 + targetStats[DamageBreakBonus] + targetStatsONHIT[DamageBreakBonus] + targetStatsSourceBased[DamageBreakBonus])
//     * (1 + targetStats[DamageBreakSuper] + targetStatsONHIT[DamageBreakSuper] + targetStatsSourceBased[DamageBreakSuper]);
//     // - targetStats.DamageBreakNULL - targetStatsONHIT.DamageBreakNULL - targetStatsSourceBased.DamageBreakNULL) 
    
//     //supposedly it is:
//     //base * abilityMulti * 1+breakEffect * 1+breakDMGIncrease
//     //*DEFstuff * RESstuff * VULNstuff * brokenMulti
// },

// pullBreakDMGMultiOLD(targetStats,targetStatsONHIT,targetStatsSourceBased) {
//     return (1 + targetStats[DamageBreak] + targetStatsONHIT[DamageBreak] + targetStatsSourceBased[DamageBreak]) * (1 + targetStats[DamageBreakBonus] + targetStatsONHIT[DamageBreakBonus] + targetStatsSourceBased[DamageBreakBonus]);
//     // - targetStats.DamageBreakNULL - targetStatsONHIT.DamageBreakNULL - targetStatsSourceBased.DamageBreakNULL) 
    
//     //supposedly it is:
//     //base * abilityMulti * 1+breakEffect * 1+breakDMGIncrease
//     //*DEFstuff * RESstuff * VULNstuff * brokenMulti
// },


// findLowestHPAlly(battleData) {
//     let allyToReturn = battleData.nameBasedTurns.char1;
//     let allyRatio = allyToReturn.currentHP / allyToReturn.maxHP;
//     for (let targetTurn of battleData.allyPositions) {
//         if (targetTurn.name === "char1" || targetTurn.cantBeTargeted) {continue;}//we start with char1 anyways, skip
//         //canBeHealed is for say summons that might exist but aren't targetable

//         let currentPercent = targetTurn.currentHP / targetTurn.maxHP;
//         if (currentPercent === 1) {continue;}

//         let isLowerPercent = currentPercent < allyRatio;
//         let hasMoreHPMax = targetTurn.maxHP > allyToReturn.maxHP;
//         //if the ally we're comparing has lower %max hp, then return this ally
//         //but if the %HP is the same, and this ally has more max HP, then return this ally even still.
//         if (isLowerPercent || (currentPercent === allyRatio && hasMoreHPMax)) {
//             allyToReturn = targetTurn;
//             allyRatio = currentPercent;
//         }
//     }

//     if (allyRatio === 1) {return null}
//     else {
//         return allyToReturn;
//     }
// },



// energyLookAhead(thisTurn,potentialAmount) {
//     if (thisTurn.maxEnergy === thisTurn.currentEnergy) {return false}
//     return (thisTurn.maxEnergy - thisTurn.currentEnergy) <= (potentialAmount * (1 + thisTurn.statTable.EnergyRegenRate));
// },