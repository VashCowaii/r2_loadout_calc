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

                buffSheet.duration = targetTurn.turnState ? 1 : 2;
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
                        "duration": 0,
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
                    
                    buffSheet.duration = targetTurn.turnState ? 3 : 2;//procs that occur within their own turn, will last beyond that turn. I think. I hope. Archer's guardian works that way, at least.
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
                        "duration": 0,
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
                        buffSheet.duration = targetTurn.turnState ? 3 : 2;//procs that occur within their own turn, will last beyond that turn. I think. I hope. Archer's guardian works that way, at least.
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
}