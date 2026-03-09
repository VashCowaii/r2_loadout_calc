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
                    return {action: "Skill", points: -1, actionCall: shortCalls.sparkleAdvance, target: target, endTurn: true};
                }
            }


            if (!actionUsed) {
                // let skillRef = skillPathing["Basic ATK"].Monodrama.variant1;
                return {action: "BasicATK", points: 1, actionCall: shortCalls.sparkleBasic, target: "enemy", endTurn: true};
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
                battleActions.updateEnergy(battleData,skillRef.energyRegen,sourceTurn);
                poke("BasicATKEnd",battleData,{sourceTurn});

                battleActions.updateEnergy(battleData,10,sourceTurn,false,"Sparkle Major Trace: Almanac");//sparkle regens 10 energy on basic atk
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

                const updateBuff = battleActions.updateBuff;
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
                battleActions.updateEnergy(battleData,skillRef.energyRegen,sourceTurn);
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
                if (targetTurn.properName != "Sparkle") {battleActions.actionAdvance(0.5,targetTurn,battleData,"Sparkle Skill");}//prevent self advancement
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

                const energy = battleActions.updateEnergy;
                energy(battleData,-sourceTurn.maxEnergy,sourceTurn);
                battleActions.updateSkillPoints(spRecovery,battleData,{sourceTurn,sourceName:"Sparkle Ultimate"});

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
                const updateBuff = battleActions.updateBuff;
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

                energy(battleData,skillRef.energyRegen,sourceTurn);
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
                const updateBuff = battleActions.updateBuff;
                

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
                battleActions.updateSkillPoints(spRecovery,battleData,{sourceTurn,sourceName:"Sparkle Technique"});
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
                    battleActions.updateBuff(battleData,targetTurn,buffSheet1);
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

                    const updateBuff = battleActions.updateBuff;
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
                            attack: turnLogic[ownerTurn.properName].skillFunctions.sparkleUltimate,
                            target: this.target,
                            name: this.listenerName,
                            properName: characterNaownerTurn.properNameme,
                            sourceTurn: null
                        }
                        queueObject.sourceTurn = ownerTurn;
                        battleActions.queueUltimateUse(battleData,queueObject);
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
                const returnSkillCall = this.returnSkillCall ??= {action: "Skill", points: -1, actionCall: this.skillFunctions.blackswanSkill, target: "enemy", endTurn: true};
                return returnSkillCall;
            }

            if (!actionUsed) {
                return this.returnBasicCall ??= {action: "BasicATK", points: 1, actionCall: this.skillFunctions.blackswanBasic, target: "enemy", endTurn: true};
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
                battleActions.updateEnergy(battleData,skillRef.energyRegen,sourceTurn);
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
                battleActions.updateBuff(battleData,currentTurn,buffSheet);
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
                battleActions.updateBuff(battleData,targetTurn,arcanaSheet);
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
                const updateBuff = battleActions.updateBuff;

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

                const updateBuff = battleActions.updateBuff;
                for (let enemy of allBlastTargets) {updateBuff(battleData,enemy,debuffSheet);}

                battleActions.updateEnergy(battleData,skillRef.energyRegen,sourceTurn);
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
                const updateBuff = battleActions.updateBuff;

                battleActions.updateEnergy(battleData,-sourceTurn.maxEnergy,sourceTurn);
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
                battleActions.updateEnergy(battleData,skillRef.energyRegen,sourceTurn);

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
                    // battleActions.updateBuff(battleData,enemyTurn,debuffSheet);
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
                            attack: turnLogic[ownerTurn.properName].skillFunctions.blackswanUltimate,
                            target: this.target,
                            name: this.listenerName,
                            properName: ownerTurn.properName,
                            sourceTurn: null,
                            isAttackUlt: true,
                        }
                        queueObject.sourceTurn = ownerTurn;
                        battleActions.queueUltimateUse(battleData,queueObject);
                    }
                },
                "target": "self",
                "listenerName": "Black Swan - Ultimate queued",
                "announce": false,
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
                        const updateBuff = battleActions.updateBuff;

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

                        battleActions.updateEnergy(battleData,8,ownerTurn,false,"E4: energy regen");
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

                        battleActions.updateEnergy(battleData,8,ownerTurn,false,"E4: energy regen");
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