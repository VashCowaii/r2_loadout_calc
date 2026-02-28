const battleActions = {
    hitWrapperOld(battleData,targetTurn,atkEntry,hitType,generalInfo,isLastHit,isBounce) {
        const sourceTurn = generalInfo.sourceTurn;
        const ATKObject = generalInfo.ATKObject;
        const element = generalInfo.element;

        let playerStats = sourceTurn.statTable;
        let playerStatsONHIT = sourceTurn.statTableONHIT;
        let enemyStats = targetTurn.statTable;
        let targetStatsSourceBased = targetTurn[sourceTurn.properName] ?? emptyTableNeverAdd;
        let targetStatsOnTurn = targetTurn.turnState ? (targetTurn.statTableONTurn ?? emptyTableNeverAdd) : emptyTableNeverAdd;
        let targetStatsTeamBased = emptyTableNeverAdd;
        const actionTables = sourceTurn.tagSpecific;
        const actionTablesTarget = targetTurn.tagSpecific;
        const actionTags = ATKObject.actionTags;
        let isEnemy = sourceTurn.isEnemy;

        const scalarSourceOverride = ATKObject.scalarSourceOverride;
        
        const scalarSourceStats = scalarSourceOverride ? battleData.nameBasedTurns[scalarSourceOverride].statTable : playerStats;
        const scalarAmountOverride = ATKObject.scalarAmountOverride;

        const sourceCache = sourceTurn.cacheTagValues;
        const targetCache = targetTurn.cacheTagValues;
        const compositeCacheTag = ATKObject.compositeCacheTag;

        const targetsGotHit = generalInfo.targetsGotHit;
        const targetSlot = targetTurn.name;
        targetsGotHit[targetSlot] = (targetsGotHit[targetSlot] ?? 0 ) + 1;
        
        let slot = ATKObject.slot;
        const turnMerge = {targetTurn,sourceTurn,slot,targetsGotHit,ATKObject};
        poke(isEnemy ? "HitAllyStart" : "HitEnemyStart",battleData,turnMerge);
        poke("AllyDMGStart",battleData,{targetTurn,sourceTurn,slot});
        let atkEntryRef = atkEntry[hitType];
        let currentSplit = atkEntryRef.hitRatio;
        let currentMulti = (ATKObject.customMulti ? ATKObject.customMulti(playerStats,playerStatsONHIT,hitType,ATKObject,isBounce) : (isBounce ? ATKObject.bounceData.multi : ATKObject.multipliers[hitType])) + (ATKObject.bonusMultiplier ?? 0);
        let multiOf = scalarAmountOverride ?? pullScalar(scalarSourceStats,playerStatsONHIT,targetStatsSourceBased,targetStatsOnTurn,ATKObject.scalar);
        let bonusDMGCustom = 0;
        let bonusDMGScalar = 0;
        let bonusDMGMulti = 0;
        let bonudDMGCustomRefName = null;

        const hasBonusScalar = ATKObject.bonusScalar;
        if (hasBonusScalar && !scalarAmountOverride) {
            const hasBonusValue = hasBonusScalar.bonusValue;
            bonusDMGMulti = hasBonusScalar[hitType] ?? 0;
            bonusDMGScalar = (hasBonusScalar.isDynamicValue ? sourceTurn[hasBonusScalar.refName] : hasBonusScalar.refValue) + (hasBonusValue ? hasBonusValue[hitType] ?? 0 : 0);
            bonusDMGCustom += bonusDMGMulti * bonusDMGScalar;
            bonudDMGCustomRefName = hasBonusScalar.isDynamicValue ? hasBonusScalar.refName : null;
        }
        let preDMG = (multiOf * currentMulti * currentSplit) + (bonusDMGCustom * currentSplit);
        let tags = ATKObject.DMGTags;
        let sumDMG = 1 + pullDMG(sourceCache,targetCache,compositeCacheTag,playerStats,playerStatsONHIT,targetStatsSourceBased,targetStatsOnTurn,ATKObject.realDMGKeys);
        let sumPEN = pullPEN(sourceCache,targetCache,compositeCacheTag,playerStats,playerStatsONHIT,targetStatsSourceBased,targetStatsOnTurn,ATKObject.realPENKeys);
        let sumRES = Math.max(0.10, Math.min(2, 1 - (enemyStats[resistanceKeys[element]] ?? 0) - enemyStats[ResistanceAll] + sumPEN));
        let sumSHRED = pullShred(sourceCache,targetCache,compositeCacheTag,playerStats,playerStatsONHIT,targetStatsSourceBased,targetStatsTeamBased,targetStatsOnTurn,ATKObject.realShredKeys,actionTables,actionTags,actionTablesTarget);

        let enemyDEF = Math.max(0, enemyStats[DEFBase] * (1 + enemyStats[DEFP] - sumSHRED));
        let attackerDiffDEF = playerStats[LVL] * 10 + 200;
        let sumDEF = 1 - (enemyDEF / (enemyDEF + attackerDiffDEF));
        let isBroken = targetTurn.currentToughness > 0 ? 0.9 : 1;

        let sumVULN = 1 + pullVULN(sourceCache,targetCache,compositeCacheTag,enemyStats,playerStatsONHIT,targetStatsSourceBased,targetStatsTeamBased,targetStatsOnTurn,ATKObject.realVulnKeys,actionTables,actionTags,actionTablesTarget);
        let sumDR = 1;
        // let sumDR = pullDR(cacheTagValues,targetCache,compositeCacheTag,statTable,enemyStats,statTableONHIT,targetStatsSourceBased,targetStatsOnTurn,tagSpecific,actionTags,actionTablesTarget);//sum of all relevant DR bonuses
        let finalMulti = sourceTurn.finalMultiCounter ? pullFinalMultiplier(sourceTurn,actionTags) : 1;
        let DMGTotalEnd = preDMG * sumDMG * sumRES * sumDEF * isBroken * sumVULN * sumDR * finalMulti;
        
        // const totalCritDMG = pullCritDamage(playerStats,enemyStats,playerStatsONHIT,targetStatsSourceBased,targetStatsTeamBased,targetStatsOnTurn,actionTables,actionTags,actionTablesTarget);
        // const totalCritRate = pullCritRate(playerStats,enemyStats,playerStatsONHIT,targetStatsSourceBased,targetStatsTeamBased,targetStatsOnTurn,actionTables,actionTags,actionTablesTarget);
        
        // const {totalCritRate,totalCritDMG} = pullCritStats(statTable,enemyStats,statTableONHIT,targetStatsSourceBased,targetStatsTeamBased,targetStatsOnTurn,tagSpecific,actionTags,actionTablesTarget);
        const {totalCritRate,totalCritDMG} = pullCritStats(playerStats,enemyStats,playerStatsONHIT,targetStatsSourceBased,targetStatsTeamBased,targetStatsOnTurn,actionTables,actionTags,actionTablesTarget);
        // console.log(totalCritDMG,totalCritRate)

        let DMGTotalCrit = DMGTotalEnd * (1 + totalCritDMG);
        let DMGTotalAVG = DMGTotalEnd * (1 + totalCritDMG * totalCritRate);
        let shieldOverflow = 0;
        let shieldsWereBroken = false;
        const logger = battleData.isLoggyLogger;
        const overKillTotals = generalInfo.overKillTotals;


        if (targetTurn.shieldCounter) {
            const shieldsRef = targetTurn.activeShields;
            let smallestOverflow = 0;
            let shieldsBroken = 0;

            const updateBuff = battleActions.updateBuff;
            for (let shieldName in shieldsRef) {
                const currentShield = shieldsRef[shieldName];
                if (!currentShield) {continue;}

                currentShield.shieldRemaining -= DMGTotalAVG;
                if (logger) {poke("ShieldWasHit",battleData,{battleData,currentShield,DMGTotalAVG,sourceTurn:targetTurn});}
                if (currentShield.shieldRemaining < 0) {
                    shieldsWereBroken = true;
                    shieldsBroken += 1;
                    const overkillShield = currentShield.shieldRemaining * -1;

                    if (shieldsBroken === 1) {
                        smallestOverflow = overkillShield;
                    }
                    else if (overkillShield < smallestOverflow) {
                        smallestOverflow = overkillShield;
                    }
                    updateBuff(battleData,targetTurn,currentShield,"Remove");
                }
                else {continue;}
            }
            shieldOverflow = smallestOverflow;
            if (logger) {poke("ShieldsWereBroken",battleData,{battleData,sourceTurn:targetTurn});}
        }
        else {shieldOverflow = DMGTotalAVG;}

        let DMGOverkill = 0;
        let enemyIsDead = false;
        if (shieldOverflow) {
            if (isEnemy) {
                const proposedDrain = targetTurn.currentHP - shieldOverflow;
                if (battleData.backupHPOnField && proposedDrain < 1) {
                    const distanceTo1 = Math.max(1,targetTurn.currentHP - 1);
                    let dmgToDeal = shieldOverflow - distanceTo1;
                    const backupRefs = battleData.backupHPObject;
                    for (let backup in backupRefs) {
                        const currentBackup = backupRefs[backup];
                        leftoverDMG = currentBackup.backupHPFunction(battleData,currentBackup,dmgToDeal);
                        if (leftoverDMG === 0) {
                            dmgToDeal = 0;
                            break;
                        }
                        else {
                            dmgToDeal = leftoverDMG
                        }
                    }
                    shieldOverflow = (dmgToDeal === 0 ? 0 : dmgToDeal) + distanceTo1;
                }
                targetTurn.currentHP -= shieldOverflow;
                poke("AllyLostHP",battleData,{sourceTurn:targetTurn,HPLost: shieldOverflow,wasAttack:true});
            }
            else {targetTurn.currentHP -= shieldOverflow;}
            
            let enemyHasNoHP = targetTurn.currentHP <= 0;
            if (enemyHasNoHP && !targetTurn.isDead) {
                enemyIsDead = true;
                targetTurn.isDead = true;
            }
            else {
                const enemyName = targetTurn.properName;
                overKillTotals[enemyName] = (overKillTotals[enemyName] ?? 0) + shieldOverflow;
            }
            if (!isEnemy && enemyHasNoHP) {
                //only gauge overkill dmg when it would be on an enemy
                DMGOverkill = targetTurn.currentHP * -1;
                //and reset enemy HP after so that way we can see full overkill on the next in a multihit attack
                targetTurn.currentHP = 0;
            }
        }


        //TOUGHNESS MATH
        let enemyIsBroken = false;
        let toughnessBase = 0;
        let rawReduction = 0
        let overBreak = 0;
        const overBreakRef = generalInfo.overBreakTotals;
        const targetName = targetTurn.properName;
        overBreakRef[targetName] ??= 0;
        if (!isEnemy) {
            rawReduction = currentSplit * getToughnessSum(battleData,atkEntryRef.toughness ?? 0,sourceTurn,targetTurn);
            toughnessBase = ATKObject.toughnessCondition ? ATKObject.toughnessCondition(rawReduction,sourceTurn,targetTurn) : rawReduction;

            let enemyWeakness = enemyStats[weaknessKeys[element]];
            if (toughnessBase && (enemyWeakness || ATKObject.allToughness)) {//only reduce toughness when the attack even has a stat to do so, but also only when matching weakness or forced all-type reductions are in effect.
                
                if (!targetTurn.isBroken) {
                    targetTurn.currentToughness -= toughnessBase;
                    let enemyHasNoToughness = targetTurn.currentToughness <= 0;
                    // let notAlreadyBrokenCheck = enemyHasNoToughness;// && !targetTurn.isBroken;
                    if (enemyHasNoToughness) {
                        enemyIsBroken = true;
                        targetTurn.isBroken = true;
                        overBreak = targetTurn.currentToughness * -1;
                    }
                    if (targetTurn.currentToughness < 0) {targetTurn.currentToughness = 0;}
                }
                else {//if the target IS broken already
                    overBreakRef[targetName] += rawReduction;
                }
            }
            else if (targetTurn.isBroken) {
                overBreakRef[targetName] += rawReduction;
            }
            else {toughnessBase = 0;}//for log purposes we completely nullify the tracked toughness of the attack so we don't fuck up displays later
        }


        if (logger) {
            const hitDisplay = {
                "primary": "Single Target",
                "blast": "Blast",
                "blastAOE": "Blast AOE",
                "all": "AoE"
            };
            
            const hitData = {
                scalar: ATKObject.scalar,bonusDMGCustom,bonudDMGCustomRefName,bonusDMGMulti,bonusDMGScalar,
                currentSplit,currentMulti,multiOf,tags,element,finalMulti,
                DMGTotalEnd,DMGTotalCrit,DMGTotalAVG,DMGOverkill,shieldOverflow,
                // breakerDMG,
                overBreak,
                enemyIsDead,enemyIsBroken,toughnessBase,
                playerData: JSON.stringify(sourceTurn),
                enemyData: JSON.stringify(targetTurn),
                AV:battleData.sumAV
            };
            logToBattle(battleData,{logType: isEnemy ? "HitAlly" : "HitEnemy", hitType: hitDisplay[hitType], target: targetTurn.properName, source:sourceTurn.properName, hitData,enemyIsDead,enemyIsBroken,position:targetTurn.isEnemy ? battleData.enemyPositions.indexOf(targetTurn) : null,positionCount:targetTurn.isEnemy ? battleData.enemyPositions.length : null});
        }

        if (enemyIsDead) {
            if (targetTurn.isEnemy) {
                battleActions.killDesignatedEnemies(battleData,targetTurn,isEnemy,sourceTurn);
            }
            else {
                battleActions.killDesignatedAllies(battleData,targetTurn,isEnemy,sourceTurn);
            }
        }

        if (!isEnemy) {
            if (enemyIsBroken) {
                let breakObject = {//isBroken tied to the enemy here is important bc we need to trigger break dmg REGARDLESS of if this attack actually broke them or not bc break dmg happens when broken anyways, regardless of who did it or what element.
                    toughnessBase,
                    element,
                    rawReduction
                }
                console.log(tags)
                battleActions.getBreakDamage(battleData,breakObject,sourceTurn,targetTurn,tags,isBroken,generalInfo);
                generalInfo.enemiesThatBroke.push(targetTurn);

                const isDOT = battleActions.breakDOTisDOT[element];
                if (isDOT) {
                    if (!sourceTurn.breakDOTSheet) {
                        sourceTurn.breakDOTSheet = {
                            "stats": null,
                            "source": "Break",
                            "sourceOwner": sourceTurn.properName,
                            "buffName": battleActions.breakDOTNames[element],
                            "duration": 1,
                            "AVApplied": 0,
                            "maxStacks": element === "Wind" ? 5 : 1,
                            "currentStacks": 1,
                            "decay": false,
                            "expireType": "EndTurn",
                            "isDOT": isDOT,
                            "isDebuff": true,
                            "element": element,
                            isBreakDOT: true,
                            multiplier: battleActions.breakDOTElementMultipliers[element],
                            // scalar: "ATK",
                            slot: "BreakDOT",
                            ownerIsAllied: true,
                            ownerSlot: sourceTurn.name,
                            avgChanceApplied: 1,
                            baseChance: 1.5,
                        }
                    }
                    const dotSheet = sourceTurn.breakDOTSheet;
                    dotSheet.duration = battleActions.breakDOTDuration[element] + (targetTurn.turnState ? 1 : 0);
                    battleActions.updateBuff(battleData,targetTurn,dotSheet);
                }
                // if (logger) {logToBattle(battleData,{logType: "BrokeEnemyWeakness", target: targetTurn.properName, source:sourceTurn.properName,enemyIsDead});}
                poke("BrokeEnemyWeakness",battleData,{targetTurn,sourceTurn,slot,targetsGotHit,ATKObject,breakObject,tags,isBroken,generalInfo});
            }
            else if (isLastHit && targetTurn.isBroken && !targetTurn.isDead) {
                const triggerRef = battleData.battleListeners.hitWrapSuperBreakCall ??= [];
                const superBreakage = battleActions.getSuperBreakDamage;
                const accumulatedToughness = overBreakRef[targetName];
                for (let i = 0; i < triggerRef.length; i++) {
                    const superDetails = triggerRef[i].condition(battleData,turnMerge);
                    if (!superDetails) {continue;}
                    superBreakage(battleData,element,sourceTurn,targetTurn,tags,superDetails[0],superDetails[1],accumulatedToughness,generalInfo);
                    // return [0.5,this.listenerName]
                }
            }
        }


        poke("AllyDMGEnd",battleData,{targetTurn,sourceTurn,slot,DMGTotalEnd,DMGTotalCrit,DMGTotalAVG});
        poke(isEnemy ? "HitAllyEnd" : "HitEnemyEnd",battleData,turnMerge);

        // else if (hit.enemyIsBroken) {enemiesThatBroke.push(targetTurn);}
        const totalsRef = generalInfo.totals;
        totalsRef.totalAVGDMG += DMGTotalAVG;
        totalsRef.totalOverkill += DMGOverkill;
    },
}