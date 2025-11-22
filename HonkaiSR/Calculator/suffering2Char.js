const battleActions = {
    updateSkillPoints(cost,battleData,generalInfo) {
        let minimum = 0;
        let maximum = battleData.battleTable.SPMax;
        let sourceTurn = generalInfo.sourceTurn;
        let sourceName = sourceTurn.properName;

        let oldSP = battleData.skillPointCurrent;
        battleData.skillPointCurrent = Math.max(minimum,Math.min(maximum,battleData.skillPointCurrent + cost));
        let newSP = battleData.skillPointCurrent;
        let actualGain = newSP-oldSP;

        if (!battleData.battleTotal.SP[sourceName]) {battleData.battleTotal.SP[sourceName] = 0;}
        battleData.battleTotal.SP[sourceName] += actualGain;
        // battleTotal: {
        //     DMG: {},
        //     Turns: {},
        //     Actions: {},
        //     SP: {},
        // },

        if (battleData.isLoggyLogger) {logToBattle(battleData,{logType: "SkillPointChange", cost, oldSP, newSP, actualGain, maximum, AV:battleData.sumAV, source:sourceName, sourceName:generalInfo.sourceName});}
        poke("SPChange",battleData,{SPChange: cost, sourceTurn});
    },
    updateEnergy(battleData,amount,sourceTurn,isFixed,sourceName) {
        // if (!amount) {return}
        // greatTableIndex
        // greatTableKeys
        let minimum = 0;
        let maximum = sourceTurn.maxEnergy;
        let oldEnergy = sourceTurn.currentEnergy;
        let newAmount = isFixed ? amount : amount * (1 + sourceTurn.statTable[EnergyRegenRate]);
        let overFill = 0;
        
        if (amount>0) {
            const proposedFinal = sourceTurn.currentEnergy + newAmount;
            sourceTurn.currentEnergy = Math.min(maximum,proposedFinal);//since this can only be gains, we only need a minimum operator
            const potentialOverfill = proposedFinal - sourceTurn.currentEnergy;
            overFill = potentialOverfill > 0 ? potentialOverfill : 0;
        }
        else {
            sourceTurn.currentEnergy = Math.max(minimum,sourceTurn.currentEnergy + amount);//whereas this will always be losses, we need a maximum
        }
        if (battleData.isLoggyLogger) {logToBattle(battleData,{logType: "EnergyChange", target: sourceTurn.properName, amount: (amount>0 ? newAmount : amount), oldEnergy, newEnergy:sourceTurn.currentEnergy, maximum, source:sourceName});}
        // console.log(`${battleDataCharacterRow.properName} Energy: ${battleDataCharacterRow.currentEnergy}/${battleDataCharacterRow.maxEnergy} ${sourceName ? `-- ${sourceName}` : ""}`);
        poke("EnergyChanged",battleData,{sourceTurn,newAmount,overFill,amount});
    },
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
    updateBuff(battleData,sourceTurn,buffSheet,silent,shieldSource,ignoreDebuffPokes,ignoreFamilyPokes) {
        let buffRef = sourceTurn.buffsObject;
        let buffName = buffSheet.buffName;

        
        // console.log(sourceTurn)
        const buffExisted = buffRef[buffName] != undefined;
        const currentReference = buffRef[buffName] ??= spreadBuffSheet(buffSheet);

        // if (buffName === "Windfall Bonanza!") {console.log("Reached buff application for Windfall Bonanza!",currentReference)}
        

        
        let changeStats = false;
        let timesToApply = 1;
        // const isEnemy = sourceTurn.isEnemy;
        // const log = battleData.isLoggyLogger;

        // const currentDots = sourceTurn.currentDotsArray;
        // const currentSpecialDots = sourceTurn.specialDotsArray;

        currentReference.duration = buffSheet.duration;
        currentReference.AVApplied = battleData.sumAV;
        
        const {shieldRemaining:oldShield,isShield,isDOT,isDebuff} = currentReference;

        if (isShield) {
            battleActions.getShieldValue(battleData,sourceTurn,currentReference,buffSheet,shieldSource);
        }

        // const maxStacks = currentReference.maxStacks;
        // const currentStacks = currentReference.currentStacks;
        if (!buffExisted) {//if it doesn't exist at all yet and we're applying, then make it
            const newCheck = battleActions.buffDidntExistAdjustment(battleData,sourceTurn,currentReference,buffSheet,isShield,isDOT,isDebuff,ignoreDebuffPokes,silent,oldShield);
            changeStats = newCheck.changeStats;
            timesToApply = newCheck.timesToApply;
        }
        else {
            if (!isDebuff && !isShield && (currentReference.maxStacks === 1 || currentReference.maxStacks === currentReference.currentStacks)) {
                if (!silent && battleData.isLoggyLogger) {logToBattle(battleData,{logType: "BuffApply", buffName, applicationType: "Renew", isShield,oldShield,newShield:currentReference.shieldRemaining,shieldCap:currentReference.shieldCap, name:sourceTurn.properName, source: buffSheet.source, sourceOwner: buffSheet.sourceOwner, enemyRealName: sourceTurn.isEnemy ? sourceTurn.enemyRealName : null,AV: battleData.sumAV, stacks: currentReference.currentStacks});}
                return;
            }
            const existsCheck = battleActions.buffAlreadyExistsAdjustment(battleData,sourceTurn,currentReference,buffSheet,isShield,isDOT,isDebuff,ignoreDebuffPokes,silent,oldShield);
            if (existsCheck) {
                changeStats = existsCheck.changeStats;
                timesToApply = existsCheck.timesToApply;
            }
        }//if it DOES exist but we're still applying it, if it can stack and has room to stack, then STACK it.

        if (changeStats && (currentReference.stats != undefined || currentReference.statsOnHit != undefined || currentReference.statsOnTurn != undefined)) {
           battleActions.buffStatChange(battleData,sourceTurn,buffSheet,currentReference,timesToApply,1,ignoreFamilyPokes);
        }
    },
    updateBuffBatchTargets(battleData,sourceTurnArray,buffSheet,silent,shieldSource,ignoreDebuffPokes,ignoreFamilyPokes) {
        // const buffName = buffSheet.buffName;
        const {buffName,isShield,isDOT,isDebuff,maxStacks} = buffSheet;

        const buffDidntExistAdjustment = battleActions.buffDidntExistAdjustment;
        const buffAlreadyExistsAdjustment = battleActions.buffAlreadyExistsAdjustment;
        const buffStatChange = battleActions.buffStatChange;
        const getShieldValue = battleActions.getShieldValue;
        const hasStatsAtAll = buffSheet.stats != undefined || buffSheet.statsOnHit != undefined || buffSheet.statsOnTurn != undefined;
        for (let sourceTurn of sourceTurnArray) {
            let buffRef = sourceTurn.buffsObject;
            
            
            const buffExisted = buffRef[buffName] != undefined;
            const currentReference = buffRef[buffName] ??= spreadBuffSheet(buffSheet);
            

            
            let changeStats = false;
            let timesToApply = 1;
            // const isEnemy = sourceTurn.isEnemy;
            // const log = battleData.isLoggyLogger;

            // const currentDots = sourceTurn.currentDotsArray;
            // const currentSpecialDots = sourceTurn.specialDotsArray;

            currentReference.duration = buffSheet.duration;
            currentReference.AVApplied = battleData.sumAV;
            
            // const {shieldRemaining:oldShield,isShield,isDOT,isDebuff} = currentReference;
            const oldShield = currentReference.shieldRemaining;

            if (isShield) {
                getShieldValue(battleData,sourceTurn,currentReference,buffSheet,shieldSource);
            }

            // const maxStacks = currentReference.maxStacks;
            // const currentStacks = currentReference.currentStacks;
            if (!buffExisted) {//if it doesn't exist at all yet and we're applying, then make it
                const newCheck = buffDidntExistAdjustment(battleData,sourceTurn,currentReference,buffSheet,isShield,isDOT,isDebuff,ignoreDebuffPokes,silent,oldShield);
                changeStats = newCheck.changeStats;
                timesToApply = newCheck.timesToApply;
            }
            else {
                if (!isDebuff && !isShield && (maxStacks === 1 || maxStacks === currentReference.currentStacks)) {
                    if (!silent && battleData.isLoggyLogger) {logToBattle(battleData,{logType: "BuffApply", buffName, applicationType: "Renew", isShield,oldShield,newShield:currentReference.shieldRemaining,shieldCap:currentReference.shieldCap, name:sourceTurn.properName, source: buffSheet.source, sourceOwner: buffSheet.sourceOwner, enemyRealName: sourceTurn.isEnemy ? sourceTurn.enemyRealName : null,AV: battleData.sumAV, stacks: currentReference.currentStacks});}
                    return;
                }
                const existsCheck = buffAlreadyExistsAdjustment(battleData,sourceTurn,currentReference,buffSheet,isShield,isDOT,isDebuff,ignoreDebuffPokes,silent,oldShield);
                if (existsCheck) {
                    changeStats = existsCheck.changeStats;
                    timesToApply = existsCheck.timesToApply;
                }
            }//if it DOES exist but we're still applying it, if it can stack and has room to stack, then STACK it.

            if (changeStats && hasStatsAtAll) {
                buffStatChange(battleData,sourceTurn,buffSheet,currentReference,timesToApply,1,ignoreFamilyPokes);
            }
        }
    },
    buffDidntExistAdjustment(battleData,sourceTurn,currentReference,buffSheet,isShield,isDOT,isDebuff,ignoreDebuffPokes,silent,oldShield) {
        // const maxStacks = currentReference.maxStacks;
        // const currentStacks = currentReference.currentStacks;
        // const buffName = currentReference.buffName;
        const {maxStacks,currentStacks,buffName,isFinalMulti,isSpecialDOTLast,expireType,actionTags,isAllDOTTypes} = currentReference;

        const log = battleData.isLoggyLogger;
        const isEnemy = sourceTurn.isEnemy;
        if (currentStacks > maxStacks) {currentReference.currentStacks = maxStacks;}
        let changeStats = true;
        let timesToApply = currentStacks;

        if (isShield) {
            sourceTurn.shieldCounter += 1;
            sourceTurn.activeShields[buffName] = currentReference;
        }
        if (isFinalMulti) {
            sourceTurn.finalMultiCounter += 1;

            // const actionTags = currentReference.actionTags;
            const actionTagLength = actionTags.length;
            const characterActions = sourceTurn.activeFinalMultipliers;

            for (let i=0;i<actionTagLength;i++) {
                let currentTag = actionTags[i];
                let activeTable = characterActions[currentTag] ??= {};//make the stat sheet if it doesn't exist yet

                activeTable[buffName] = currentReference;
            }
        }
        if (isDebuff) {
            sourceTurn.debuffCounter += 1;
            if (!ignoreDebuffPokes) {poke("DebuffApplied",battleData,{sourceTurn,currentReference});}

            if (isDOT) {
                sourceTurn.DOTCounter += 1;
                if (!isAllDOTTypes) {
                    const element = currentReference.element;
                    sourceTurn.dots[element] += 1;
                    poke("DOTWasModified",battleData,{sourceTurn,currentReference,dotWas: "Apply",element});
                }
                if (isSpecialDOTLast) {sourceTurn.specialDotsArray.push(currentReference);}
                else {sourceTurn.currentDotsArray.push(currentReference);}
            }

            if (isAllDOTTypes) {
                //in the case of something like black swan Epiphany debuff, it makes it so enemies are considered to be suffering from all types of dot, so we increment the elemental trackers on the target
                const enemyElementalRef = sourceTurn.dots;
                enemyElementalRef.Wind += 1;
                enemyElementalRef.Fire += 1;
                enemyElementalRef.Lightning += 1;
                enemyElementalRef.Physical += 1;
                poke("DOTWasModified",battleData,{sourceTurn,currentReference,dotWas: "Apply",element:null});
            }
        }//we add a debuff to the target's counter only when a new one is applied, not when stacked though that might bite me later I guess, idk if stacks count or unique debuffs each
        if (!silent && log) {logToBattle(battleData,{logType: "BuffApply", buffName, applicationType: "Apply", isShield,oldShield,newShield:currentReference.shieldRemaining,shieldCap:currentReference.shieldCap, name:sourceTurn.properName, source: buffSheet.source, sourceOwner: buffSheet.sourceOwner, enemyRealName: isEnemy ? sourceTurn.enemyRealName : null, AV: battleData.sumAV, stacks: timesToApply});}

        // currentReference.expireType != "StartTurn"//EndTurn
        // const expireType = currentReference.expireType != undefined;
        if (expireType != undefined) {
            if (expireType === "StartTurn") {sourceTurn.buffsStartTurn.push(currentReference);}
            else if (expireType === "EndTurn") {sourceTurn.buffsEndTurn.push(currentReference);}
        }

        return {changeStats,timesToApply}
    },
    buffAlreadyExistsAdjustment(battleData,sourceTurn,currentReference,buffSheet,isShield,isDOT,isDebuff,ignoreDebuffPokes,silent,oldShield) {
        const log = battleData.isLoggyLogger;
        const buffName = currentReference.buffName;
        const currentStacks = currentReference.currentStacks;
        const maxStacks = currentReference.maxStacks;
        const isEnemy = sourceTurn.isEnemy;
        let changeStats = null;
        let timesToApply = 1;
        // console.log(buffSheet.source,buffSheet.sourceOwner)
        // console.log(currentReference.source,currentReference.sourceOwner)
        
        if (isDebuff) {
            if (!ignoreDebuffPokes) {poke("DebuffApplied",battleData,{sourceTurn,currentReference});}
            
            if (isDOT) {
                currentReference.avgChanceApplied = buffSheet.avgChanceApplied;
                //if a dot is refreshed, then it is pushed to the end of the currentdots array to be called LAST
                //rn this is the assumption bc with kafka + erode, if erode is added first, even as the oldest is triggered first when enemy turn starts
                if (!currentReference.isSpecialDOTLast) {
                    const currentDots = sourceTurn.currentDotsArray;
                    currentDots.push(currentDots.splice(currentDots.indexOf(currentReference), 1)[0]);
                }
            }
        }
        //inherit the avg'd chance to apply from the newest application, such that we can relfect changes in EHR or enemy effect RES

        if (maxStacks > currentStacks && maxStacks > 1) {
            changeStats = true;

            const stackSumTemp = currentStacks + buffSheet.currentStacks;
            timesToApply = Math.min(maxStacks, stackSumTemp) - currentStacks;
            //if we had 1 stack, with a max of 5, but 10 were applied, we'd do (current:1 + applied:10)cap at max 5, minus current:1 = 4 NEW stacks applied due to cap, despite the 10 stacks earned from the action

            currentReference.currentStacks = Math.min(maxStacks, stackSumTemp);//pulling the stacks to apply from the sheet bc this can vary based on how many buff procs happen in a single action
            //right now this assumes that all stack values are uniform. If they end up pulling shit like TFD did with first stack x value then subsequent as y value, that's gonna suck
            if (!silent && log) {logToBattle(battleData,{logType: "BuffApply", buffName, applicationType: "Stack", isShield,oldShield,newShield:currentReference.shieldRemaining,shieldCap:currentReference.shieldCap, name:sourceTurn.properName, source: buffSheet.source, sourceOwner: buffSheet.sourceOwner, enemyRealName: isEnemy ? sourceTurn.enemyRealName : null,AV: battleData.sumAV, stacks: currentReference.currentStacks});}
        }
        //if the buff exists, we're applying, and the max stacks are the same as current stack, then we REDO the duration based on the specification involved from the buff sheet
        //example usecase: archer's guardian buff when anyone gets skill points, expires at the end of his turn. But if it's his turn that he gets a skill point in, then it's the end of his NEXT turn
        else if (maxStacks <= currentStacks) {//I did <= to be safe, in theory we should never be less than current stacks due to the min operation in the above section
            if (!silent && log) {logToBattle(battleData,{logType: "BuffApply", buffName, applicationType: "Renew", isShield,oldShield,newShield:currentReference.shieldRemaining,shieldCap:currentReference.shieldCap, name:sourceTurn.properName, source: buffSheet.source, sourceOwner: buffSheet.sourceOwner, enemyRealName: isEnemy ? sourceTurn.enemyRealName : null,AV: battleData.sumAV, stacks: currentReference.currentStacks});}
            //no stat changes necessary, this is just reupping the buff duration, so we'll swap the AV applied, and source
            // return;//if all we did was renew and no added stacks, we can leave early
            return null
        }

        return {changeStats,timesToApply}
    },
    buffStatChange(battleData,sourceTurn,buffSheet,currentReference,timesToApply,applyOrRemove,ignoreFamilyPokes) {
        //switch to onhit stat table for buffs relevant to it(incessant rain is a good example with the crit rate, also acheron e1, etc.)
        //but also if it's a source-specific event, then switch to the source table for the character that applied the buff/debuff

        // basicShorthand.mappedCacheTags 
        const {buffName,stats,actionTags,statsOnHit,onTurnStats,isSourceSpecific,sourceOwner} = currentReference;
        // const buffName = currentReference.buffName;

        // const statDirection = applyOrRemove === "Apply" ? 1 : -1;
        const composite = applyOrRemove * timesToApply;
        // const regStats = currentReference.stats;
        // const actionTags = currentReference.actionTags;

        if (actionTags !== undefined) {
            const characterActions = sourceTurn.tagSpecific;
            //action tags don't have onhit checks bc for all intents and purposes, action tags ARE onhit effects, just a matter of what actions
            //TODO: possibly go through and set all actual onhit effects to be the attack action tag instead
            const actionTagLength = actionTags.length;
            for (let i=0;i<actionTagLength;i++) {
                let currentTag = actionTags[i];
                let activeTable = characterActions[currentTag] ??= new Array(greatTableSize).fill(0);//make the stat sheet if it doesn't exist yet

                for (let elements of stats) {
                    activeTable[elements] += (currentReference[elements] * composite);
                }
            }
            // currentReference.actionTags
            // tagSpecific
        }
        else  {
            if (stats) {
                let currentStatTable = isSourceSpecific ? sourceTurn[sourceOwner] ??= new Array(greatTableSize).fill(0) : sourceTurn.statTable;//Array

                for (let elements of stats) {
                    currentStatTable[elements] += (currentReference[elements] * composite);

                    // console.log(currentReference[elements],currentStatTable[elements],buffSheet.buffName,stats)
                    
                }
                
                const familyRef = battleData.familyRef[buffName] ??= battleActions.getBuffStatFamilies(buffSheet);
                if (familyRef.size && !ignoreFamilyPokes) {
                    // console.log(familyRef)
                    const genInfo = {sourceTurn};
                    pokeSet(familyRef,battleData,genInfo)
                    // for (let familyName of familyRef) {
                    //     poke(familyName,battleData,genInfo);//onhit properties do NOT trigger conditionals since they exist outside the stat sheet
                    // }
                }
            }
            // const onHitStats = currentReference.statsOnHit;
            if (statsOnHit) {
                let currentStatTable = sourceTurn.statTableONHIT;
                for (let elements of statsOnHit) {
                    currentStatTable[elements] += (currentReference[elements] * composite);
                    // console.log(currentReference[elements],currentStatTable[elements],statsOnHit)
                }
            }

            // const onTurnStats = currentReference.onTurnStats;
            if (onTurnStats) {
                let currentStatTable = sourceTurn.statTableONTurn;
                for (let elements of onTurnStats) {
                    currentStatTable[elements] += (currentReference[elements] * composite);
                }
            }
        }

        const familyCacheRef = battleData.familyCacheRef[buffName] ??= battleActions.getBuffCacheFamilies(buffSheet);
        
        if (familyCacheRef.size) {
            // cacheTagValues: {
            //     "UpdateStatDamage": {
            //         //compositeCacheTag will define itself here when used, and the tag will be the key
            //     },
            //     "UpdateStatDEFShred": {},
            //     "UpdateStatPEN": {},
            //     "UpdateStatVulnerable": {},
            //     "UpdateStatCritRate": {},
            //     "UpdateStatCritDamage": {},
            // },

            for (let familyName of familyCacheRef) {
                const isCachedFamily = familyCacheTagSet.has(familyName);
                // console.log(familyCacheRef)

                if (isCachedFamily) {
                    const currentCacheGrouping = sourceTurn.cacheTagValues[familyName];
                    // console.log(currentCacheGrouping)
                    for (let groupName in currentCacheGrouping) {
                        const currentGroup = currentCacheGrouping[groupName];
                        // console.log(groupName,familyName,currentCacheGrouping)
                        currentGroup.valueIsCurrentAsAttacker = false;
                        currentGroup.valueIsCurrentAsTarget = false;
                        currentGroup.cacheValue = null;
                    }
                }

            }
        }
    },
    buffRemovalEnd(battleData,sourceTurn,currentReference,silent,shieldSource,ignoreDebuffPokes,ignoreFamilyPokes) {
        const buffName = currentReference.buffName;
        // if (buffName === "Windfall Bonanza!") {console.log("Reached buff REMOVAL for Windfall Bonanza!",sourceTurn.properName)}
        if (!sourceTurn.buffsObject[buffName]) {return;}

        sourceTurn.buffsObject[buffName] = null;
        currentReference.expireFunction?.(battleData,currentReference.expireParam);
        //if I forget how this works later, go look at earthly escapade(sparkle lc) for a good example
        
        const log = battleData.isLoggyLogger;
        if (!silent && log) {
            const isEnemy = sourceTurn.isEnemy;
            // console.log(buffSheet.source,buffSheet.sourceOwner)
            logToBattle(battleData,{logType: "BuffRemove", buffName, name:sourceTurn.properName, isShield:currentReference.isShield, source: currentReference.source, sourceOwner: currentReference.sourceOwner, enemyRealName: isEnemy ? sourceTurn.enemyRealName : null, AV: battleData.sumAV, stacks: currentReference.currentStacks});
        }

        const changeStats = currentReference.stats != undefined || currentReference.statsOnHit != undefined || currentReference.statsOnTurn != undefined;
        if (changeStats) {battleActions.buffStatChange(battleData,sourceTurn,currentReference,currentReference,currentReference.currentStacks,-1,ignoreFamilyPokes);}


        if (currentReference.isDebuff) {
            sourceTurn.debuffCounter -= 1;
            if (!ignoreDebuffPokes) {poke("DebuffRemoved",battleData,{sourceTurn,currentReference});}

            //IT WILL NEVER BE A DOT OR ALLTYPE DOT IF IT IS NOT A DEBUFF TOO, so we bundle it in there
            const isAllDOTTypes = currentReference.isAllDOTTypes;
            if (currentReference.isDOT) {
                sourceTurn.DOTCounter -= 1;
                if (!isAllDOTTypes) {
                    const element = currentReference.element;
                    sourceTurn.dots[element] -= 1;
                    poke("DOTWasModified",battleData,{sourceTurn,currentReference,dotWas: "Remove",element});
                }

                const currentDots = sourceTurn.currentDotsArray;
                const currentSpecialDots = sourceTurn.specialDotsArray;
                if (currentReference.isSpecialDOTLast) {currentSpecialDots.splice(currentSpecialDots.indexOf(currentReference), 1);}
                else {currentDots.splice(currentDots.indexOf(currentReference), 1);}
            }
            if (isAllDOTTypes) {
                //in the case of something like black swan Epiphany debuff, it makes it so enemies are considered to be suffering from all types of dot, so we increment the elemental trackers on the target
                const enemyElementalRef = sourceTurn.dots;
                enemyElementalRef.Wind -= 1;
                enemyElementalRef.Fire -= 1;
                enemyElementalRef.Lightning -= 1;
                enemyElementalRef.Physical -= 1;
                poke("DOTWasModified",battleData,{sourceTurn,currentReference,dotWas: "Remove",element:null});
            }
        }
        if (currentReference.isShield) {
            sourceTurn.shieldCounter -= 1;
            sourceTurn.activeShields[buffName] = null;

            if (sourceTurn.shieldCounter === 0) {
                sourceTurn.shieldValueCurrent = 0;
                sourceTurn.shieldValueMax = 0;
            }
            else {
                let currentHighest = 0;
                let currentHighestCap = 0;
                for (let shieldKey in currentShields) {
                    const currentShield = currentShields[shieldKey];

                    if (currentShield.shieldRemaining > currentHighest) {
                        currentHighest = currentShield.shieldRemaining;
                        currentHighestCap = currentShield.shieldCap;
                    }
                }

                sourceTurn.shieldValueCurrent = currentHighest;
                sourceTurn.shieldValueMax = currentHighestCap;
            }

            poke("ShieldLost",battleData,{sourceTurn,currentReference});
        }
        if (currentReference.isFinalMulti) {
            sourceTurn.finalMultiCounter -= 1;
            const currentTags = currentReference.actionTags;
            const characterActions = sourceTurn.activeFinalMultipliers;

            for (let i=0;i<currentTags.length;i++) {
                let currentTag = currentTags[i];
                let activeTable = characterActions[currentTag] ??= {};//make the stat sheet if it doesn't exist yet

                activeTable[buffName] = null;
            }
        }
    },
    buffRemovalEndBatchTargets(battleData,sourceTurnArray,currentReference,silent,shieldSource,ignoreDebuffPokes,ignoreFamilyPokes) {
        const buffName = currentReference.buffName;
        const changeStats = currentReference.stats != undefined || currentReference.statsOnHit != undefined || currentReference.statsOnTurn != undefined;

        currentReference.expireFunction?.(battleData,currentReference.expireParam);
        const buffStatChange = battleActions.buffStatChange;
        const isDebuff = currentReference.isDebuff;
        const isAllDOTTypes = currentReference.isAllDOTTypes;
        const isShield = currentReference.isShield;
        const isFinalMulti = currentReference.isFinalMulti;
        for (let sourceTurn of sourceTurnArray) {
            if (!sourceTurn.buffsObject[buffName]) {return;}

            sourceTurn.buffsObject[buffName] = null;
            
            //if I forget how this works later, go look at earthly escapade(sparkle lc) for a good example
            
            if (changeStats) {buffStatChange(battleData,sourceTurn,currentReference,currentReference,currentReference.currentStacks,-1,ignoreFamilyPokes);}

            if (isDebuff) {
                sourceTurn.debuffCounter -= 1;
                if (!ignoreDebuffPokes) {poke("DebuffRemoved",battleData,{sourceTurn,currentReference});}

                //IT WILL NEVER BE A DOT OR ALLTYPE DOT IF IT IS NOT A DEBUFF TOO, so we bundle it in there
                
                if (currentReference.isDOT) {
                    sourceTurn.DOTCounter -= 1;
                    if (!isAllDOTTypes) {
                        const element = currentReference.element;
                        sourceTurn.dots[element] -= 1;
                        poke("DOTWasModified",battleData,{sourceTurn,currentReference,dotWas: "Remove",element});
                    }
                    const currentDots = sourceTurn.currentDotsArray;
                    const currentSpecialDots = sourceTurn.specialDotsArray;
                    if (currentReference.isSpecialDOTLast) {currentSpecialDots.splice(currentSpecialDots.indexOf(currentReference), 1);}
                    else {currentDots.splice(currentDots.indexOf(currentReference), 1);}
                }
                if (isAllDOTTypes) {
                    //in the case of something like black swan Epiphany debuff, it makes it so enemies are considered to be suffering from all types of dot, so we increment the elemental trackers on the target
                    const enemyElementalRef = sourceTurn.dots;
                    enemyElementalRef.Wind -= 1;
                    enemyElementalRef.Fire -= 1;
                    enemyElementalRef.Lightning -= 1;
                    enemyElementalRef.Physical -= 1;
                    poke("DOTWasModified",battleData,{sourceTurn,currentReference,dotWas: "Remove",element:null});
                }
            }
            if (isShield) {
                sourceTurn.shieldCounter -= 1;
                const currentShields = sourceTurn.activeShields;
                currentShields[buffName] = null;

                if (sourceTurn.shieldCounter === 0) {
                    sourceTurn.shieldValueCurrent = 0;
                    sourceTurn.shieldValueMax = 0;
                }
                else {
                    let currentHighest = 0;
                    let currentHighestCap = 0;
                    for (let shieldKey in currentShields) {
                        const currentShield = currentShields[shieldKey];

                        if (currentShield.shieldRemaining > currentHighest) {
                            currentHighest = currentShield.shieldRemaining;
                            currentHighestCap = currentShield.shieldCap;
                        }
                    }

                    sourceTurn.shieldValueCurrent = currentHighest;
                    sourceTurn.shieldValueMax = currentHighestCap;
                }
                poke("ShieldLost",battleData,{sourceTurn,currentReference});
            }
            if (isFinalMulti) {
                sourceTurn.finalMultiCounter -= 1;
                const currentTags = currentReference.actionTags;
                const characterActions = sourceTurn.activeFinalMultipliers;

                for (let i=0;i<currentTags.length;i++) {
                    let currentTag = currentTags[i];
                    let activeTable = characterActions[currentTag] ??= {};//make the stat sheet if it doesn't exist yet

                    activeTable[buffName] = null;
                }
            }
        }

        const log = battleData.isLoggyLogger;
        if (!silent && log) {
            // console.log(buffSheet.source,buffSheet.sourceOwner)
            for (let sourceTurn of sourceTurnArray) {
                const isEnemy = sourceTurn.isEnemy;
                logToBattle(battleData,{logType: "BuffRemove", buffName, name:sourceTurn.properName, isShield, source: currentReference.source, sourceOwner: currentReference.sourceOwner, enemyRealName: isEnemy ? sourceTurn.enemyRealName : null, AV: battleData.sumAV, stacks: currentReference.currentStacks});
            }
        }
    },
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
    //     //     "duration": 3,
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
    //                 currentReference.AVApplied = sumAV;
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
    //                 currentReference.AVApplied = sumAV;
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
    getBuffNewStatArray(buffStatsObject) {
        // greatTableIndex
        // greatTableKeys
        let newArray = [];
        for (let stat in buffStatsObject) {

        }
    },
    getBuffStatFamilies(buffSheet) {
        // greatTableIndex
        // greatTableKeys
        const familyRef = basicShorthand.mappedUpdateStatKeys;
        // console.log(familyRef)
        const statsRef = buffSheet.stats;

        let familySet = null;
        if (statsRef) {
            let familyNameArary = [];
            for (let statName of statsRef) {
                familyNameArary.push(familyRef[statName]);
            }
            familySet = new Set (familyNameArary);
        }

        // console.log(statsRef,familyRef,familySet)
        return familySet;
    },
    getBuffCacheFamilies(buffSheet) {
        const familyRef = basicShorthand.mappedCacheTags;
        // console.log(familyRef)
        const statsRef = [...(buffSheet.stats ?? []),...(buffSheet.statsOnHit ?? [])];
        let familySet = null;
        let familyNameArary = [];
        for (let statName of statsRef) {
            const potentialName = familyRef[statName];
            if (potentialName) {familyNameArary.push(potentialName);}
        }
        familySet = new Set (familyNameArary);
        return familySet;
    },
    actionAdvance(percent,targetTurn,battleData,source,delayLogEntry) {
        battleData.actionCounter += 1;
        targetTurn.actionCounter = battleData.actionCounter;
        let isEnemy = targetTurn.isEnemy;
        let oldAV = targetTurn.AV;
        targetTurn.AV = Math.max(0,oldAV - targetTurn.AVBase * percent);//action advance is determined by the character's full AV per turn value, not on their remaining AV
        //but speed changes do advance the character, based on their remaining AV instead, see speedAdvance()
        

        if (battleData.isLoggyLogger) {
            // const isEvent = action.eventOverrideImage;isUniqueEvent
            // console.log(targetTurn.eventOverrideImage)
            logToBattle(battleData,{logType: delayLogEntry ? "ActionAdvancedBreakDelay" : "ActionAdvanced", name:targetTurn.properName, oldAV: oldAV, newAV:targetTurn.AV,source,isEnemy,eventOverrideImage:targetTurn.isUniqueEvent ? targetTurn.eventImage : null });
        }
    },
    speedAdvance(sourceTurn,battleData,source) {
        let isEnemy = sourceTurn.isEnemy;

        let oldAVRemaining = sourceTurn.AV;
        let oldAVBase = sourceTurn.AVBase;
        let oldSPD = sourceTurn.SPD;
        let SPDStats = calcs.getSPDFinal(sourceTurn.statTable);
        let newBase = SPDStats.SPDActionValue;

        let AVDiff = newBase / oldAVBase;
        let newAVRemaining = oldAVRemaining * AVDiff;
        let AVToAdvance = newAVRemaining - oldAVRemaining;

        sourceTurn.AV = Math.max(0,newAVRemaining);//speed advances can only be a % of the remaining AV, so in theory this should never reach 0 but JUST TO BE SAFE
        sourceTurn.AVBase = newBase;
        sourceTurn.SPD = SPDStats.SPDFinal;

        //looks like doing it based on oldSPD/newSPD is equivalent here, doesn't have to be AV. Honestly woulda thought theyd be diff.
        //but I guess just goes to show diff testing can have the same results.
        // // 0.89552238805970149253731343283582 for 120/134

        // 83.33333333333333
        // 74.62686567164

        if (AVToAdvance != 0) {
            if (battleData.isLoggyLogger) {logToBattle(battleData,{logType: "SpeedAdvanced", name:sourceTurn.properName,oldSPD,newSPD: sourceTurn.SPD, oldAV: oldAVRemaining, newAV:sourceTurn.AV, source,isEnemy,oldAVBase,newBase,eventOverrideImage:sourceTurn.isUniqueEvent ? sourceTurn.eventImage : null});}
        }
    },
    updateMaxHP(sourceTurn,battleData,source,isSilentUpdate) {
        let isEnemy = sourceTurn.isEnemy;

        let oldHPRemaining = sourceTurn.currentHP;
        let oldHPMax = sourceTurn.maxHP;
        let HPStats = calcs.getHPFinal(sourceTurn.statTable);
        let newMaxHP = HPStats.HPFinal;

        let HPDiff = newMaxHP/oldHPMax;
        let newHPRemaining = oldHPRemaining * HPDiff;
        let HPChange = newHPRemaining - oldHPRemaining;

        sourceTurn.currentHP = Math.max(0,newHPRemaining);
        sourceTurn.maxHP = newMaxHP;

        if (HPChange != 0 && !isEnemy && !isSilentUpdate) {poke("TeamMaxHPChanged",battleData);}
    },
    queueFollowUpAttack(battleData,entry) {
        battleData.followUpQueue.push(entry);
        if (battleData.isLoggyLogger) {logToBattle(battleData,{logType: "QueueFUA", name: entry.name});}
    },
    queueUltimateUse(battleData,entry) {
        battleData.ultimateQueue.push(entry);
        if (battleData.isLoggyLogger) {logToBattle(battleData,{logType: "QueueUltimate", name: entry.name});}
    },
    queueInstantUltimateUse(battleData,entry) {//this is needed for cases like ica that queue an action within the ultimate queue, but instantly, so at the start of the queue.
        battleData.ultimateQueue.unshift(entry);
        if (battleData.isLoggyLogger) {logToBattle(battleData,{logType: "QueueUltimate", name: entry.name, isExtraTurn: entry.isExtraTurn});}
    },
    queueExtraTurn(battleData,extraTurnObject,isImmediateAction) {
        battleData.nextTurnAV.push(extraTurnObject);
        if (isImmediateAction) {battleData.extraTurnPriority += 1;}
    },
    "levelFloors": {
        "Basic ATK": 6,
        "Skill": 10,
        "Ultimate": 10,
        "Talent": 10,
        "Memosprite Talent": 6,
        "Memosprite Skill": 6,
        "Technique": 1,
    },
    getLevelBasedParam(battleData,skillPath,currentTurn) {
        //TODO: later go back through and this and make a way for the param array to be assigned to battle specific values for each battle, so that way we don't need to evaluate eidolon level every fuckin time
        let atkSlot = skillPath.slot;
        let baseLevel = battleActions.levelFloors[atkSlot];
        
        let name = currentTurn.properName;
        let rank = currentTurn.rank

        let bonusRef = characters[name].eidlonLevelBonuses;
        if (rank >= 3) {
            baseLevel += bonusRef[3][atkSlot] ?? 0;
        }
        if (rank >= 5) {
            baseLevel += bonusRef[5][atkSlot] ?? 0;
        }

        return skillPath.params[baseLevel];
    },
    pullDMGBonus(sourceCache,targetCache,compositeCacheTag,table,tableONHIT,targetStatsSourceBased,targetStatsOnTurn,tags,actionTables,actionTags,actionTablesTarget) {
        // console.log(targetStatsSourceBased)
        const sourceDeposit = sourceCache.UpdateStatDamage[compositeCacheTag] ??= {};
        const targetDeposit = targetCache.UpdateStatDamage[compositeCacheTag] ??= {};
        const hasChanged = !sourceDeposit.valueIsCurrentAsAttacker || !targetDeposit.valueIsCurrentAsTarget;

        if (hasChanged) {
            let bonus = 0;
            sourceDeposit.valueIsCurrentAsAttacker = true;
            targetDeposit.valueIsCurrentAsTarget = true;
            // console.log(tags)

            // for (let tag of tags) {
            //     bonus += table[tag] + tableONHIT[tag] + targetStatsSourceBased[tag] + targetStatsOnTurn[tag];
            // }

            if (actionTags) {
                for (let tag of tags) {
                    bonus += table[tag] + tableONHIT[tag] + targetStatsSourceBased[tag] + targetStatsOnTurn[tag]; 

                    for (let action of actionTags) {
                        bonus += (actionTables[action]?.[tag] ?? 0) + (actionTablesTarget[action]?.[tag] ?? 0);
                    }
                }
            }
            else {
                for (let tag of tags) {
                    bonus += table[tag] + tableONHIT[tag] + targetStatsSourceBased[tag] + targetStatsOnTurn[tag];
                }
            }

            sourceDeposit.cacheValue = bonus;
        }

        return sourceDeposit.cacheValue;

        // greatTableIndex
        // return bonus;
    },
    pullPENBonus(sourceCache,targetCache,compositeCacheTag,table,tableONHIT,targetStatsSourceBased,targetStatsOnTurn,tags) {
        const sourceDeposit = sourceCache.UpdateStatPEN[compositeCacheTag] ??= {};
        const targetDeposit = targetCache.UpdateStatPEN[compositeCacheTag] ??= {};
        const hasChanged = !sourceDeposit.valueIsCurrentAsAttacker || !targetDeposit.valueIsCurrentAsTarget;

        
        if (hasChanged) {
            let bonus = 0;
            sourceDeposit.valueIsCurrentAsAttacker = true;
            targetDeposit.valueIsCurrentAsTarget = true;

            for (let tag of tags) {bonus += table[tag] + tableONHIT[tag] + targetStatsSourceBased[tag] + targetStatsOnTurn[tag];}
            sourceDeposit.cacheValue = bonus;
        }

        return sourceDeposit.cacheValue;
        // return bonus;
    },
                    // table,attackerStatsONHIT,targetStatsSourceBased,targetStatsTeamBased,tags,actionTables,actionTags,actionTablesTarget
    pullDEFShredBonusOLD(table,tableONHIT,targetStatsSourceBased,tags) {
        let bonus = 0;
        for (let tag of tags) {bonus += table[tag] + tableONHIT[tag] + targetStatsSourceBased[tag]}
        return bonus;
    },
    pullDEFShredBonus(sourceCache,targetCache,compositeCacheTag,table,attackerStatsONHIT,targetStatsSourceBased,targetStatsTeamBased,targetStatsOnTurn,tags,actionTables,actionTags,actionTablesTarget) {
        // table,attackerStatsONHIT,targetStatsSourceBased,tags
        
        const sourceDeposit = sourceCache.UpdateStatDEFShred[compositeCacheTag] ??= {};
        const targetDeposit = targetCache.UpdateStatDEFShred[compositeCacheTag] ??= {};
        const hasChanged = !sourceDeposit.valueIsCurrentAsAttacker || !targetDeposit.valueIsCurrentAsTarget;

        
        if (hasChanged) {
            let bonus = 0;

            sourceDeposit.valueIsCurrentAsAttacker = true;
            targetDeposit.valueIsCurrentAsTarget = true;

            if (actionTags) {
                for (let tag of tags) {
                    bonus += table[tag] + attackerStatsONHIT[tag] + targetStatsSourceBased[tag] + targetStatsOnTurn[tag]; 

                    for (let action of actionTags) {
                        bonus += (actionTables[action]?.[tag] ?? 0) + (actionTablesTarget[action]?.[tag] ?? 0);
                    }
                }
            }
            else {
                for (let tag of tags) {
                    bonus += table[tag] + attackerStatsONHIT[tag] + targetStatsSourceBased[tag] + targetStatsOnTurn[tag];
                }
            }

            sourceDeposit.cacheValue = bonus;
        }

        // if (actionTags) {
        //     for (let tag of tags) {
        //         bonus += table[tag] + attackerStatsONHIT[tag] + targetStatsSourceBased[tag] + targetStatsOnTurn[tag]; 
        //         for (let action of actionTags) {
        //             bonus += (actionTables[action]?.[tag] ?? 0) + (actionTablesTarget[action]?.[tag] ?? 0);
        //         }
        //     }
        // }
        // else {
        //     for (let tag of tags) {
        //         bonus += table[tag] + attackerStatsONHIT[tag] + targetStatsSourceBased[tag] + targetStatsOnTurn[tag];
        //     }
        // }

        // return bonus;
        return sourceDeposit.cacheValue;//sourceTurn.tagSpecific
    },
    // pullVULNBonusOLD(table,attackerStatsONHIT,targetStatsSourceBased,tags) {
    //     let bonus = 0;
    //     for (let tag of tags) {bonus += table[tag] + attackerStatsONHIT[tag] + targetStatsSourceBased[tag]}
    //     return bonus;
    // },
    pullVULNBonus(sourceCache,targetCache,compositeCacheTag,table,attackerStatsONHIT,targetStatsSourceBased,targetStatsTeamBased,targetStatsOnTurn,tags,actionTables,actionTags,actionTablesTarget) {
        // table,attackerStatsONHIT,targetStatsSourceBased,tags
        const sourceDeposit = sourceCache.UpdateStatVulnerable[compositeCacheTag] ??= {};
        const targetDeposit = targetCache.UpdateStatVulnerable[compositeCacheTag] ??= {};
        const hasChanged = !sourceDeposit.valueIsCurrentAsAttacker || !targetDeposit.valueIsCurrentAsTarget;

        
        if (hasChanged) {
            let bonus = 0;
            sourceDeposit.valueIsCurrentAsAttacker = true;
            targetDeposit.valueIsCurrentAsTarget = true;
            if (actionTags) {
                // for (let action of actionTags) {
                //     const currentTable = actionTables[action];
                // }
                for (let tag of tags) {
                    bonus += table[tag] + attackerStatsONHIT[tag] + targetStatsSourceBased[tag] + targetStatsOnTurn[tag]; 
                    for (let action of actionTags) {
                        const actionRef = actionTables[action];
                        const actionRefTarget = actionTablesTarget[action];
                        bonus += (actionRef ? actionRef[tag] : 0) + (actionRefTarget ? actionRefTarget[tag] : 0);
                    }
                }
            }
            else {
                for (let tag of tags) {
                    bonus += table[tag] + attackerStatsONHIT[tag] + targetStatsSourceBased[tag] + targetStatsOnTurn[tag];
                }
            }
            sourceDeposit.cacheValue = bonus;
        }
        
        return sourceDeposit.cacheValue;
        // return bonus;//sourceTurn.tagSpecific
    },

    pullCompositeStats(sourceCache,targetCache,compositeCacheTag,table,enemyTable,attackerStatsONHIT,targetStatsSourceBased,targetStatsTeamBased,targetStatsOnTurn,tagsPEN,tagsShred,tagsVuln,actionTables,actionTags,actionTablesTarget) {
        // realPENKeys,realShredKeys,realVulnKeys
        // console.log(tagsPEN,tagsShred,tagsVuln)
        const {UpdateStatPEN:UpdateStatPENTarget,UpdateStatDEFShred:UpdateStatDEFShredTarget,UpdateStatVulnerable:UpdateStatVulnerableTarget} = targetCache;
        const {UpdateStatPEN,UpdateStatDEFShred,UpdateStatVulnerable} = sourceCache;
        // const {UpdateStatPEN:UpdateStatPENTarget,UpdateStatDEFShred:UpdateStatDEFShredTarget,UpdateStatVulnerable:UpdateStatVulnerableTarget} = targetCache;

        const sourceDepositPEN = UpdateStatPEN[compositeCacheTag] ??= {};
        const targetDepositPEN = UpdateStatPENTarget[compositeCacheTag] ??= {};
        const hasChangedPEN = !sourceDepositPEN.valueIsCurrentAsAttacker || !targetDepositPEN.valueIsCurrentAsTarget;

        const sourceDepositShred = UpdateStatDEFShred[compositeCacheTag] ??= {};
        const targetDepositShred = UpdateStatDEFShredTarget[compositeCacheTag] ??= {};
        const hasChangedShred = !sourceDepositShred.valueIsCurrentAsAttacker || !targetDepositShred.valueIsCurrentAsTarget;

        const sourceDepositVuln = UpdateStatVulnerable[compositeCacheTag] ??= {};
        const targetDepositVuln = UpdateStatVulnerableTarget[compositeCacheTag] ??= {};
        const hasChangedVuln = !sourceDepositVuln.valueIsCurrentAsAttacker || !targetDepositVuln.valueIsCurrentAsTarget;

        const iterateAtAll = hasChangedPEN || hasChangedShred || hasChangedVuln;

        // realPENKeys,realShredKeys,realVulnKeys
        // const hasChanged = !sourceDeposit.valueIsCurrentAsAttacker || !targetDeposit.valueIsCurrentAsTarget;

        if (iterateAtAll) {
            let sumPEN = 0;
            let sumSHRED = 0;
            let sumVULN = 1;

            const totalTagLength = tagsPEN.length;

            if (actionTags) {
                for (let i=0;i<totalTagLength;i++) {
                    const tagPEN = tagsPEN[i];
                    const tagShred = tagsShred[i];
                    const tagVuln = tagsVuln[i];

                    if (hasChangedPEN) {sumPEN += table[tagPEN] + attackerStatsONHIT[tagPEN] + targetStatsSourceBased[tagPEN] + targetStatsOnTurn[tagPEN];}
                    if (hasChangedShred) {sumSHRED += table[tagShred] + attackerStatsONHIT[tagShred] + targetStatsSourceBased[tagShred] + targetStatsOnTurn[tagShred];}
                    if (hasChangedVuln) {sumVULN += enemyTable[tagVuln] + attackerStatsONHIT[tagVuln] + targetStatsSourceBased[tagVuln] + targetStatsOnTurn[tagVuln];}

                    for (let action of actionTags) {
                        const actionTableSource = actionTables[action];
                        const actionTableTarget = actionTablesTarget[action];

                        // bonus += (actionTables[action]?.[tag] ?? 0) + (actionTablesTarget[action]?.[tag] ?? 0);
                        if (hasChangedPEN) {sumPEN += (actionTableSource?.[tagPEN] ?? 0) + (actionTableTarget?.[tagPEN] ?? 0);}
                        if (hasChangedShred) {sumSHRED += (actionTableSource?.[tagShred] ?? 0) + (actionTableTarget?.[tagShred] ?? 0);}
                        if (hasChangedVuln) {sumVULN += (actionTableSource?.[tagVuln] ?? 0) + (actionTableTarget?.[tagVuln] ?? 0);}
                    }
                }
            }
            else {
                for (let i=0;i<totalTagLength;i++) {
                    // bonus += table[tag] + attackerStatsONHIT[tag] + targetStatsSourceBased[tag] + targetStatsOnTurn[tag];
                    const tagPEN = tagsPEN[i];
                    const tagShred = tagsShred[i];
                    const tagVuln = tagsVuln[i];

                    if (hasChangedPEN) {sumPEN += table[tagPEN] + attackerStatsONHIT[tagPEN] + targetStatsSourceBased[tagPEN] + targetStatsOnTurn[tagPEN];}
                    if (hasChangedShred) {sumSHRED += table[tagShred] + attackerStatsONHIT[tagShred] + targetStatsSourceBased[tagShred] + targetStatsOnTurn[tagShred];}
                    if (hasChangedVuln) {sumVULN += enemyTable[tagVuln] + attackerStatsONHIT[tagVuln] + targetStatsSourceBased[tagVuln] + targetStatsOnTurn[tagVuln];}
                }
            }

            if (hasChangedPEN) {
                sourceDepositPEN.valueIsCurrentAsAttacker = true;
                targetDepositPEN.valueIsCurrentAsTarget = true;
                sourceDepositPEN.cacheValue = sumPEN;
            }
            if (hasChangedShred) {
                sourceDepositShred.valueIsCurrentAsAttacker = true;
                targetDepositShred.valueIsCurrentAsTarget = true;
                sourceDepositShred.cacheValue = sumSHRED;
            }
            if (hasChangedVuln) {
                sourceDepositVuln.valueIsCurrentAsAttacker = true;
                targetDepositVuln.valueIsCurrentAsTarget = true;
                sourceDepositVuln.cacheValue = sumVULN;
            }
        }

        return {sumPEN:sourceDepositPEN.cacheValue,sumSHRED:sourceDepositShred.cacheValue,sumVULN:sourceDepositVuln.cacheValue}
    },
    pullCompositeStatsWCrit(sourceCache,targetCache,compositeCacheTag,table,enemyTable,attackerStatsONHIT,targetStatsSourceBased,targetStatsTeamBased,targetStatsOnTurn,tagsPEN,tagsShred,tagsVuln,actionTables,actionTags,actionTablesTarget) {
        // realPENKeys,realShredKeys,realVulnKeys
        // console.log(tagsPEN,tagsShred,tagsVuln)
        const {UpdateStatPEN:UpdateStatPENTarget,UpdateStatDEFShred:UpdateStatDEFShredTarget,UpdateStatVulnerable:UpdateStatVulnerableTarget} = targetCache;
        const {UpdateStatPEN,UpdateStatDEFShred,UpdateStatVulnerable} = sourceCache;
        // const {UpdateStatPEN:UpdateStatPENTarget,UpdateStatDEFShred:UpdateStatDEFShredTarget,UpdateStatVulnerable:UpdateStatVulnerableTarget} = targetCache;

        const sourceDepositPEN = UpdateStatPEN[compositeCacheTag] ??= {};
        const targetDepositPEN = UpdateStatPENTarget[compositeCacheTag] ??= {};
        const hasChangedPEN = !sourceDepositPEN.valueIsCurrentAsAttacker || !targetDepositPEN.valueIsCurrentAsTarget;

        const sourceDepositShred = UpdateStatDEFShred[compositeCacheTag] ??= {};
        const targetDepositShred = UpdateStatDEFShredTarget[compositeCacheTag] ??= {};
        const hasChangedShred = !sourceDepositShred.valueIsCurrentAsAttacker || !targetDepositShred.valueIsCurrentAsTarget;

        const sourceDepositVuln = UpdateStatVulnerable[compositeCacheTag] ??= {};
        const targetDepositVuln = UpdateStatVulnerableTarget[compositeCacheTag] ??= {};
        const hasChangedVuln = !sourceDepositVuln.valueIsCurrentAsAttacker || !targetDepositVuln.valueIsCurrentAsTarget;

        const iterateAtAll = hasChangedPEN || hasChangedShred || hasChangedVuln;

        // realPENKeys,realShredKeys,realVulnKeys
        // const hasChanged = !sourceDeposit.valueIsCurrentAsAttacker || !targetDeposit.valueIsCurrentAsTarget;

        if (iterateAtAll) {
            let sumPEN = 0;
            let sumSHRED = 0;
            let sumVULN = 1;

            const totalTagLength = tagsPEN.length;

            if (actionTags) {
                for (let i=0;i<totalTagLength;i++) {
                    const tagPEN = tagsPEN[i];
                    const tagShred = tagsShred[i];
                    const tagVuln = tagsVuln[i];

                    if (hasChangedPEN) {sumPEN += table[tagPEN] + attackerStatsONHIT[tagPEN] + targetStatsSourceBased[tagPEN] + targetStatsOnTurn[tagPEN];}
                    if (hasChangedShred) {sumSHRED += table[tagShred] + attackerStatsONHIT[tagShred] + targetStatsSourceBased[tagShred] + targetStatsOnTurn[tagShred];}
                    if (hasChangedVuln) {sumVULN += enemyTable[tagVuln] + attackerStatsONHIT[tagVuln] + targetStatsSourceBased[tagVuln] + targetStatsOnTurn[tagVuln];}

                    for (let action of actionTags) {
                        const actionTableSource = actionTables[action];
                        const actionTableTarget = actionTablesTarget[action];

                        // bonus += (actionTables[action]?.[tag] ?? 0) + (actionTablesTarget[action]?.[tag] ?? 0);
                        if (hasChangedPEN) {sumPEN += (actionTableSource?.[tagPEN] ?? 0) + (actionTableTarget?.[tagPEN] ?? 0);}
                        if (hasChangedShred) {sumSHRED += (actionTableSource?.[tagShred] ?? 0) + (actionTableTarget?.[tagShred] ?? 0);}
                        if (hasChangedVuln) {sumVULN += (actionTableSource?.[tagVuln] ?? 0) + (actionTableTarget?.[tagVuln] ?? 0);}
                    }
                }
            }
            else {
                for (let i=0;i<totalTagLength;i++) {
                    // bonus += table[tag] + attackerStatsONHIT[tag] + targetStatsSourceBased[tag] + targetStatsOnTurn[tag];
                    const tagPEN = tagsPEN[i];
                    const tagShred = tagsShred[i];
                    const tagVuln = tagsVuln[i];

                    if (hasChangedPEN) {sumPEN += table[tagPEN] + attackerStatsONHIT[tagPEN] + targetStatsSourceBased[tagPEN] + targetStatsOnTurn[tagPEN];}
                    if (hasChangedShred) {sumSHRED += table[tagShred] + attackerStatsONHIT[tagShred] + targetStatsSourceBased[tagShred] + targetStatsOnTurn[tagShred];}
                    if (hasChangedVuln) {sumVULN += enemyTable[tagVuln] + attackerStatsONHIT[tagVuln] + targetStatsSourceBased[tagVuln] + targetStatsOnTurn[tagVuln];}
                }
            }

            if (hasChangedPEN) {
                sourceDepositPEN.valueIsCurrentAsAttacker = true;
                targetDepositPEN.valueIsCurrentAsTarget = true;
                sourceDepositPEN.cacheValue = sumPEN;
            }
            if (hasChangedShred) {
                sourceDepositShred.valueIsCurrentAsAttacker = true;
                targetDepositShred.valueIsCurrentAsTarget = true;
                sourceDepositShred.cacheValue = sumSHRED;
            }
            if (hasChangedVuln) {
                sourceDepositVuln.valueIsCurrentAsAttacker = true;
                targetDepositVuln.valueIsCurrentAsTarget = true;
                sourceDepositVuln.cacheValue = sumVULN;
            }
        }


        // table,attackerStatsONHIT,targetStatsSourceBased,tags
        // let bonus = 0;
        let totalCritRate = 0;
        let totalCritDMG = 0;

        totalCritDMG += table[CritDamageBase] + attackerStatsONHIT[CritDamageBase] + targetStatsSourceBased[CritDamageBase] + targetStatsTeamBased[CritDamageBase] + targetStatsOnTurn[CritDamageBase];
        totalCritRate += table[CritRateBase] + attackerStatsONHIT[CritRateBase] + targetStatsSourceBased[CritRateBase] + targetStatsTeamBased[CritRateBase] + targetStatsOnTurn[CritRateBase];;
        // console.log(actionTags,hasTagTables)
        if (actionTags) {
            for (let action of actionTags) {
                const currentTable = actionTables[action];
                const currentTableTarget = actionTablesTarget[action];
                // console.log(currentTable.CritDamageBase)
                totalCritDMG += (currentTable ? currentTable[CritDamageBase] : 0) + (currentTableTarget ? currentTableTarget[CritDamageBase] : 0);
                totalCritRate += (currentTable ? currentTable[CritRateBase] : 0) + (currentTableTarget ? currentTableTarget[CritRateBase] : 0);
            }
        }
        totalCritRate = Math.min(1,totalCritRate);
        // return {totalCritDMG,totalCritRate};//sourceTurn.tagSpecific
        return {sumPEN:sourceDepositPEN.cacheValue,sumSHRED:sourceDepositShred.cacheValue,sumVULN:sourceDepositVuln.cacheValue,totalCritDMG,totalCritRate}
    },

    pullCritRateSUM(table,targetStats,attackerStatsONHIT,targetStatsSourceBased,targetStatsTeamBased,targetStatsOnTurn,actionTables,actionTags,actionTablesTarget) {
        // table,attackerStatsONHIT,targetStatsSourceBased,tags
        let bonus = 0;

        bonus += table[CritRateBase] + attackerStatsONHIT[CritRateBase] + targetStatsSourceBased[CritRateBase] + targetStatsTeamBased[CritRateBase];
        // console.log(actionTags,hasTagTables)
        if (actionTags) {
            for (let action of actionTags) {
                const currentTable = actionTables[action];
                const currentTableTarget = actionTablesTarget[action];
                // console.log(currentTable.CritRateBase)
                bonus += (currentTable ? currentTable[CritRateBase] : 0) + (currentTableTarget ? currentTableTarget[CritRateBase] : 0);
            }
        }
        
        return Math.min(1,bonus);//sourceTurn.tagSpecific
    },
    pullCritDamageSUM(table,targetStats,attackerStatsONHIT,targetStatsSourceBased,targetStatsTeamBased,targetStatsOnTurn,actionTables,actionTags,actionTablesTarget) {
        // table,attackerStatsONHIT,targetStatsSourceBased,tags
        let bonus = 0;

        bonus += table[CritDamageBase] + attackerStatsONHIT[CritDamageBase] + targetStatsSourceBased[CritDamageBase] + targetStatsTeamBased[CritDamageBase] + targetStatsOnTurn[CritDamageBase];
        // console.log(actionTags,hasTagTables)
        if (actionTags) {
            for (let action of actionTags) {
                const currentTable = actionTables[action];
                const currentTableTarget = actionTablesTarget[action];
                // console.log(currentTable.CritDamageBase)
                bonus += (currentTable ? currentTable[CritDamageBase] : 0) + (currentTableTarget ? currentTableTarget[CritDamageBase] : 0);
            }
        }
        // console.log(bonus)
        return bonus;//sourceTurn.tagSpecific
    },
    pullCritStats(table,targetStats,attackerStatsONHIT,targetStatsSourceBased,targetStatsTeamBased,targetStatsOnTurn,actionTables,actionTags,actionTablesTarget) {
        // table,attackerStatsONHIT,targetStatsSourceBased,tags
        // let bonus = 0;
        let totalCritRate = 0;
        let totalCritDMG = 0;

        totalCritDMG += table[CritDamageBase] + attackerStatsONHIT[CritDamageBase] + targetStatsSourceBased[CritDamageBase] + targetStatsTeamBased[CritDamageBase] + targetStatsOnTurn[CritDamageBase];
        totalCritRate += table[CritRateBase] + attackerStatsONHIT[CritRateBase] + targetStatsSourceBased[CritRateBase] + targetStatsTeamBased[CritRateBase];
        // console.log(actionTags,hasTagTables)
        if (actionTags) {
            for (let action of actionTags) {
                const currentTable = actionTables[action];
                const currentTableTarget = actionTablesTarget[action];
                // console.log(currentTable.CritDamageBase)
                totalCritDMG += (currentTable ? currentTable[CritDamageBase] : 0) + (currentTableTarget ? currentTableTarget[CritDamageBase] : 0);
                totalCritRate += (currentTable ? currentTable[CritRateBase] : 0) + (currentTableTarget ? currentTableTarget[CritRateBase] : 0);
            }
        }
        totalCritRate = Math.min(1,totalCritRate);
        // console.log(bonus)
        return {totalCritDMG,totalCritRate};//sourceTurn.tagSpecific
    },
    pullScalarSum(table,tableONHIT,targetStatsSourceBased,targetStatsOnTurn,scalarTag) {
        const base = scalarBaseKey[scalarTag];
        const perc = scalarPercKey[scalarTag];
        const flat = scalarFlatKey[scalarTag];

        // greatTableIndex
        return (table[base] + tableONHIT[base] + targetStatsSourceBased[base]) * (1 + table[perc] + tableONHIT[perc] + targetStatsSourceBased[perc]) + table[flat] + tableONHIT[flat] + targetStatsSourceBased[flat];
        // let bonus = table[`${scalarTag}Base`] * (1 + table[`${scalarTag}%`]) + table[`${scalarTag}Flat`];
        // let bonus = table[scalarComponents.b] * (1 + table[scalarComponents.p]) + table[scalarComponents.f];
        // let bonus = table[scalarBaseKey[scalarTag]] * (1 + table[scalarPercKey[scalarTag]]) + table[scalarFlatKey[scalarTag]];
    },
    pullFinalMultiplier(sourceTurn,actionTags) {
        let resultingMulti = 1;

        const characterActions = sourceTurn.activeFinalMultipliers;
        // const newTags = [...actionTags,"All"]

        if (actionTags) {
            for (let i=0;i<actionTags.length;i++) {
                let currentTag = actionTags[i];
                let activeTable = characterActions[currentTag] ??= {};//make the stat sheet if it doesn't exist yet

                for (let buffName in activeTable) {
                    const currentMultiBuff = activeTable[buffName];
                    if (!currentMultiBuff) {continue;}
                    resultingMulti *= activeTable[buffName].multiplier ?? 1
                }
            }
        }
        // console.log("Multi check preAll: ", resultingMulti,characterActions)
        const allRef = characterActions.All;
        if (allRef) {
            for (let buffName in allRef) {
                const currentMultiBuff = allRef[buffName];
                if (!currentMultiBuff) {continue;}
                // console.log("Actual multi from All: ",allRef[buffName].multiplier,characterActions)
                resultingMulti *= allRef[buffName].multiplier ?? 1
            }
        }

        // if (actionTags) {
        //     for (let i=0;i<actionTags.length;i++) {
        //         let currentTag = actionTags[i];
        //         let activeTable = characterActions[currentTag] ??= {};//make the stat sheet if it doesn't exist yet

        //         for (let buffName in activeTable) {
        //             const currentMultiBuff = activeTable[buffName];
        //             if (!currentMultiBuff) {continue;}
        //             resultingMulti += (activeTable[buffName].multiplier ?? 1) - 1;
        //         }
        //     }
        // }
        // // console.log("Multi check preAll: ", resultingMulti,characterActions)
        // const allRef = characterActions.All;
        // if (allRef) {
        //     for (let buffName in allRef) {
        //         const currentMultiBuff = allRef[buffName];
        //         if (!currentMultiBuff) {continue;}
        //         // console.log("Actual multi from All: ",allRef[buffName].multiplier,characterActions)
        //         resultingMulti += (allRef[buffName].multiplier ?? 1) - 1;
        //     }
        // }
        return resultingMulti;
    },
    getToughnessSum(battleData,reduction,attackerTurn,enemyTurn) {
        let attackerStats = attackerTurn.statTable;
        let onHIT = attackerTurn.statTableONHIT;
        let enemyStats = enemyTurn.statTable;
        return reduction * (1 + attackerStats[DamageBreakEfficiency] + onHIT[DamageBreakEfficiency]);
        //supposedly: (reduction + flatBonuses) * (1 + breakEff + toughnessVuln)
        // * (1 + toughnessReductionIncrease) * abilityMultiplier
        //where multi is 1 if not specified, but I have no clue where it would even be specified so we'll circle back to this later
        //also supposed 300% efficiency limit
    },
    breakElementMultipliers: {
        "Ice": 1,
        "Lightning": 1,
        "Fire": 2,
        "Quantum": 0.5,
        "Imaginary": 0.5,
        "Wind": 1.5,
        "Physical": 2,
    },
    breakLevelRef: 3767.5533,
    breakDOTElementMultipliers: {
        "Ice": 1 * 3767.5533,
        "Lightning": 2 * 3767.5533,
        "Fire": 1 * 3767.5533,
        "Quantum": 0.6 * 3767.5533,
        "Imaginary": 0,
        "Wind": 1 * 3767.5533,
        "Physical": 2 * 3767.5533,
    },
    breakDOTDuration: {
        "Ice": 1,
        "Lightning": 2,
        "Fire": 2,
        "Quantum": 1,
        "Imaginary": 1,
        "Wind": 2,
        "Physical": 2,
    },
    breakDOTNames: {
        "Ice": "Break [Frozen]",
        "Lightning": "Break [Shock]",
        "Fire": "Break [Burn]",
        "Quantum": "Break [Entanglement]",
        "Imaginary": "Break [Imprison]",
        "Wind": "Break [Shear]",
        "Physical": "Break [Bleed]",
    },
    breakDOTisDOT: {
        "Ice": false,
        "Lightning": true,
        "Fire": true,
        "Quantum": false,
        "Imaginary": false,
        "Wind": true,
        "Physical": true,
    },
    pullBreakDMGMulti(targetStats,targetStatsONHIT,targetStatsSourceBased,targetStatsOnTurn) {
        return (1 + targetStats[DamageBreak] + targetStatsONHIT[DamageBreak] + targetStatsSourceBased[DamageBreak]) * (1 + targetStats[DamageBreakBonus] + targetStatsONHIT[DamageBreakBonus] + targetStatsSourceBased[DamageBreakBonus]);
        // - targetStats.DamageBreakNULL - targetStatsONHIT.DamageBreakNULL - targetStatsSourceBased.DamageBreakNULL) 
        
        //supposedly it is:
        //base * abilityMulti * 1+breakEffect * 1+breakDMGIncrease
        //*DEFstuff * RESstuff * VULNstuff * brokenMulti
    },
    pullSuperBreakDMGMulti(targetStats,targetStatsONHIT,targetStatsSourceBased,targetStatsOnTurn) {
        return (1 + targetStats[DamageBreak] + targetStatsONHIT[DamageBreak] + targetStatsSourceBased[DamageBreak]) 
        * (1 + targetStats[DamageBreakBonus] + targetStatsONHIT[DamageBreakBonus] + targetStatsSourceBased[DamageBreakBonus])
        * (1 + targetStats[DamageBreakSuper] + targetStatsONHIT[DamageBreakSuper] + targetStatsSourceBased[DamageBreakSuper]);
        // - targetStats.DamageBreakNULL - targetStatsONHIT.DamageBreakNULL - targetStatsSourceBased.DamageBreakNULL) 
        
        //supposedly it is:
        //base * abilityMulti * 1+breakEffect * 1+breakDMGIncrease
        //*DEFstuff * RESstuff * VULNstuff * brokenMulti
    },
    //TODO: test if kinda like other action tags, break might inherit the final dmg multi of the action that caused the break
    //until then, final dmg multi doesn't exist in break math, YET
    getBreakDamage(battleData,breakObject,sourceTurn,targetTurn,tags,isBroken,generalInfo,breakMulti) {
        const element = breakObject.element;
        const baseMulti = battleActions.breakElementMultipliers[element];
        const levelMulti = 3767.5533;//parse this later, p sure I saw it but wasn't sure what it was for, should be easy to find again.
        const toughMulti = (targetTurn.maxToughness/40) + 0.5;
        const targetStatsTeamBased = emptyTableNeverAdd;

        const ATKObject = generalInfo.ATKObject;
        const baseBreak = toughMulti * levelMulti * baseMulti * (breakMulti ?? 1);

        // const attackerStats = sourceTurn.statTable;
        // const attackerStatsONHIT = sourceTurn.statTableONHIT;
        const targetStatsSourceBased = targetTurn[sourceTurn.properName] ?? emptyTableNeverAdd;
        // const actionTables = sourceTurn.tagSpecific;
        // const sourceCache = sourceTurn.cacheTagValues;
        const {statTable,statTableONHIT,tagSpecific,cacheTagValues} = sourceTurn;

        const targetStats = targetTurn.statTable;
        const targetStatsOnTurn = targetTurn.turnState ? (targetTurn.statTableONTurn ?? emptyTableNeverAdd) : emptyTableNeverAdd;
        const actionTablesTarget = targetTurn.tagSpecific;
        const actionTags = ATKObject.actionTags;

        const targetCache = targetTurn.cacheTagValues;


        const compositeCacheTag = ATKObject.compositeCacheTag + "Break";
        let newTags = [...tags,"Break"];

        // const realDMGKeys = keyShortcut(dmgKeys,tags);
        const keyShortcut = basicShorthand.makeKeysArray;
        const realPENKeys = keyShortcut(resPENKeys,newTags);
        const realShredKeys = keyShortcut(defShredKeys,newTags);
        const realVulnKeys = keyShortcut(vulnKeys,newTags);

        //supposedly it is:
        //base * abilityMulti * 1+breakEffect * 1+breakDMGIncrease
        //*DEFstuff * RESstuff * VULNstuff * brokenMulti
        const turnMerge = {targetTurn,sourceTurn};
        poke("BreakDMGStart",battleData,turnMerge);
        poke("AllyDMGStart",battleData,turnMerge);

        //might seem dumb to have this stat stuff redone in the break dmg calcs, but bc the act of breaking something might trigger new bonuses or onhit effects, we HAVE to have new calcs and pokes in here

        //resistanced and PEN
        const {sumPEN,sumSHRED,sumVULN} = pullCompositeStats(cacheTagValues,targetCache,compositeCacheTag,statTable,targetStats,statTableONHIT,targetStatsSourceBased,targetStatsTeamBased,targetStatsOnTurn,realPENKeys,realShredKeys,realVulnKeys,tagSpecific,actionTags,actionTablesTarget);
        // let sumPEN = battleActions.pullPENBonus(cacheTagValues,targetCache,compositeCacheTag,statTable,statTableONHIT,targetStatsSourceBased,targetStatsOnTurn,realPENKeys);
        let sumRES = Math.max(0.10, Math.min(2, 1 - targetStats[resistanceKeys[element]] - targetStats[ResistanceAll] + sumPEN));//pen caps out at -100% or 2x multi, and floor at 90% res so 0.10x multi

        //DEF
        // let sumSHRED = battleActions.pullDEFShredBonus(cacheTagValues,targetCache,compositeCacheTag,statTable,statTableONHIT,targetStatsSourceBased,targetStatsTeamBased,targetStatsOnTurn,realShredKeys,tagSpecific,actionTags,actionTablesTarget);
        // let sumSHRED = battleActions.pullDEFShredBonus(attackerStats,attackerStatsONHIT,targetStatsSourceBased,realShredKeys);
        let enemyDEF = Math.max(0, targetStats[DEFBase] * (1 + targetStats[DEFP] - sumSHRED));//def shred will always be a positive value, just how I'd prefer it. So always - here
        let attackerDiffDEF = statTable[LVL] * 10 + 200;//80 being the player's level here
        let sumDEF = 1 - (enemyDEF / (enemyDEF + attackerDiffDEF));

        //broken multi, though I'm p fuckin sure this actually can be modified later, need to revisit down the road.
        // let isBroken = targetTurn.currentToughness > 0 ? 0.9 : 1;
        //SO TURNS OUT THE HIT THAT BREAKS AN ENEMY STILL COUNTS AS NOT BROKEN EVEN ON THE BREAK DMG HOW FUCKIN DUMB IS THAT JESUS DUDE

        // let sumVULN = 1 + battleActions.pullVULNBonus(targetStats,attackerStatsONHIT,targetStatsSourceBased,realVulnKeys);
        // let sumVULN = 1 + battleActions.pullVULNBonus(enemyStats,playerStatsONHIT,targetStatsSourceBased,targetStatsTeamBased,ATKObject.realVulnKeys,actionTables,actionTags,actionTablesTarget);
        // let sumVULN = battleActions.pullVULNBonus(cacheTagValues,targetCache,compositeCacheTag,targetStats,statTableONHIT,targetStatsSourceBased,targetStatsTeamBased,targetStatsOnTurn,realVulnKeys,tagSpecific,actionTags,actionTablesTarget);
        let sumDR = 1;//dunno where we would apply actual DR values from enemies, but will include this for later.

        let sumDMG = battleActions.pullBreakDMGMulti(statTable,statTableONHIT,targetStatsSourceBased,targetStatsOnTurn);//sum of all relevant dmg bonuses

        let DMGTotalEndBreak = baseBreak * sumDMG * sumRES * sumDEF * isBroken * sumVULN * sumDR;//baseBreak
        // console.log(baseBreak,sumDMG,sumRES,sumDEF,isBroken,sumVULN,sumDR)

        targetTurn.currentHP -= DMGTotalEndBreak;
        let enemyHasNoHP = targetTurn.currentHP <= 0;
        let enemyIsDead = false;
        if (enemyHasNoHP && !targetTurn.isDead) {
            enemyIsDead = true;
            targetTurn.isDead = true;
            battleActions.killDesignatedEnemies(battleData,targetTurn,false,sourceTurn);
        }//we only want to declare the enemy dead once, bc an attack might have 30 hits but if they die at hit 10 we don't want to say they died 20 times after
        let DMGOverkill = 0;
        if (enemyHasNoHP) {
            //only gauge overkill dmg when it would be on an enemy
            DMGOverkill = targetTurn.currentHP * -1;
            //and reset enemy HP after so that way we can see full overkill on the next in a multihit attack
            targetTurn.currentHP = 0;
        }

        battleData.battleDamageSUM += DMGTotalEndBreak;
        
        if (battleData.isLoggyLogger) {
            let totalsRef = battleData.battleTotal;
            const charName = sourceTurn.properName;
            let sumSlotRef = totalsRef.DMG[charName] ??= {};
            const breakString = "Break";
            sumSlotRef[breakString] = (sumSlotRef[breakString] ?? 0) + DMGTotalEndBreak;
            let sumSlotRef2 = totalsRef.Actions[charName] ??= {};
            sumSlotRef2[breakString] = (sumSlotRef2[breakString] ?? 0) + 1;
            let sumSlotRef3 = totalsRef.DMGOverkill[charName] ??= {};
            sumSlotRef3[breakString] = (sumSlotRef3[breakString] ?? 0) + DMGOverkill;

            let hitDataBreak = {
                DMGTotalEndBreak,
                DMGTotalAVG:DMGTotalEndBreak,DMGOverkill,element,
                tags: newTags,enemyIsDead,
                breakObject,
                playerData: JSON.stringify(sourceTurn),
                enemyData: JSON.stringify(targetTurn),
                AV:battleData.sumAV
            }
            // console.log(DMGTotalEndBreak,sumRES)
            // logToBattle(battleData,{logType: isEnemy ? "HitAlly" : "HitEnemy", hitType: hitDisplay[hitType], target: targetTurn.properName, source:sourceTurn.properName, hitData,enemyIsDead,enemyIsBroken});
            // if (logger) {logToBattle(battleData,{logType: "BrokeEnemyWeakness", hitType: hitDisplay[hitType], target: targetTurn.properName, source:sourceTurn.properName, hitData,enemyIsDead});}

            logToBattle(battleData,{logType: "HitEnemy", hitType: "Break", target: targetTurn.properName, source:charName, hitData:hitDataBreak,enemyIsDead});
        }
        poke("AllyDMGEnd",battleData,{targetTurn,sourceTurn,DMGTotalEndBreak});
        poke("BreakDMGEnd",battleData,turnMerge);
        if (battleData.attackIsActive) {battleData.addedDMGTallyAttack += DMGTotalEndBreak;}

        return DMGTotalEndBreak
    },
    getSuperBreakDamage(battleData,element,sourceTurn,targetTurn,tags,instanceMulti,sourceName,rawReduction,generalInfo) {
        const levelMulti = 3767.5533;//parse this later, p sure I saw it but wasn't sure what it was for, should be easy to find again.
        const toughMulti = rawReduction/10;
        const isSuperBreak = true;
        const targetStatsTeamBased = emptyTableNeverAdd;

        instanceMulti = instanceMulti ?? 1;
        const baseBreak = toughMulti * levelMulti * instanceMulti;
        const ATKObject = generalInfo.ATKObject;

        // const attackerStats = sourceTurn.statTable;
        // const attackerStatsONHIT = sourceTurn.statTableONHIT;
        const targetStatsSourceBased = targetTurn[sourceTurn.properName] ?? emptyTableNeverAdd;
        // const actionTables = sourceTurn.tagSpecific;
        // const sourceCache = sourceTurn.cacheTagValues;
        const {statTable,statTableONHIT,tagSpecific,cacheTagValues} = sourceTurn;

        const targetStats = targetTurn.statTable;
        const targetStatsOnTurn = targetTurn.turnState ? (targetTurn.statTableONTurn ?? emptyTableNeverAdd) : emptyTableNeverAdd;
        const actionTablesTarget = targetTurn.tagSpecific;
        const actionTags = ATKObject.actionTags;

        const targetCache = targetTurn.cacheTagValues;
        const compositeCacheTag = ATKObject.compositeCacheTag + "Break" + "BreakSuper";


        let newTags = [...tags,"Break","BreakSuper"];

        // const realDMGKeys = keyShortcut(dmgKeys,tags);
        const keyShortcut = basicShorthand.makeKeysArray;
        const realPENKeys = keyShortcut(resPENKeys,newTags);
        const realShredKeys = keyShortcut(defShredKeys,newTags);
        const realVulnKeys = keyShortcut(vulnKeys,newTags);
        // console.log(compositeCacheTag)

        //supposedly it is:
        //base * abilityMulti * 1+breakEffect * 1+breakDMGIncrease
        //*DEFstuff * RESstuff * VULNstuff * brokenMulti
        
        const turnMerge = {targetTurn,sourceTurn,isSuperBreak};
        poke("BreakDMGStart",battleData,turnMerge);
        poke("AllyDMGStart",battleData,turnMerge);

        //might seem dumb to have this stat stuff redone in the break dmg calcs, but bc the act of breaking something might trigger new bonuses or onhit effects, we HAVE to have new calcs and pokes in here

        //resistanced and PEN
        // console.log(cacheTagValues,targetCache,compositeCacheTag,statTable,targetStats,statTableONHIT,targetStatsSourceBased,targetStatsTeamBased,targetStatsOnTurn,realPENKeys,realShredKeys,realVulnKeys,tagSpecific,actionTags,actionTablesTarget)
        // console.log(battleData.sumAV);
        const {sumPEN,sumSHRED,sumVULN} = pullCompositeStats(cacheTagValues,targetCache,compositeCacheTag,statTable,targetStats,statTableONHIT,targetStatsSourceBased,targetStatsTeamBased,targetStatsOnTurn,realPENKeys,realShredKeys,realVulnKeys,tagSpecific,actionTags,actionTablesTarget);
        // let sumPEN = battleActions.pullPENBonus(cacheTagValues,targetCache,compositeCacheTag,statTable,statTableONHIT,targetStatsSourceBased,targetStatsOnTurn,realPENKeys);
        let sumRES = Math.max(0.10, Math.min(2, 1 - targetStats[resistanceKeys[element]] - targetStats[ResistanceAll] + sumPEN));//pen caps out at -100% or 2x multi, and floor at 90% res so 0.10x multi

        //DEF
        // let sumSHRED = battleActions.pullDEFShredBonus(attackerStats,attackerStatsONHIT,targetStatsSourceBased,realShredKeys);
        // let sumSHRED = battleActions.pullDEFShredBonus(cacheTagValues,targetCache,compositeCacheTag,statTable,statTableONHIT,targetStatsSourceBased,targetStatsTeamBased,targetStatsOnTurn,realShredKeys,tagSpecific,actionTags,actionTablesTarget);
        let enemyDEF = Math.max(0, targetStats[DEFBase] * (1 + targetStats[DEFP] - sumSHRED));//def shred will always be a positive value, just how I'd prefer it. So always - here
        let attackerDiffDEF = statTable[LVL] * 10 + 200;//80 being the player's level here
        let sumDEF = 1 - (enemyDEF / (enemyDEF + attackerDiffDEF));

        //broken multi doesn't apply on super break dmg bc it can ONLY happen when the taret is already broken, so...

        // let sumVULN = 1 + battleActions.pullVULNBonus(targetStats,attackerStatsONHIT,targetStatsSourceBased,realVulnKeys);
        // let sumVULN = 1 + battleActions.pullVULNBonus(cacheTagValues,targetCache,compositeCacheTag,targetStats,statTableONHIT,targetStatsSourceBased,targetStatsTeamBased,targetStatsOnTurn,realVulnKeys,tagSpecific,actionTags,actionTablesTarget);
        let sumDR = 1;//dunno where we would apply actual DR values from enemies, but will include this for later.

        let sumDMG = battleActions.pullSuperBreakDMGMulti(statTable,statTableONHIT,targetStatsSourceBased,targetStatsOnTurn);//sum of all relevant dmg bonuses

        //TODO: later in the future if some unnamed character happens to have an ability that lets us superbreak when not broken, we do need to factor
        //for the isBroken dr multi.
        let DMGTotalEndBreak = baseBreak * sumDMG * sumRES * sumDEF * sumVULN * sumDR;//baseBreak
        // console.log(baseBreak,sumDMG,sumRES,sumDEF,sumVULN,sumDR)

        targetTurn.currentHP -= DMGTotalEndBreak;
        let enemyHasNoHP = targetTurn.currentHP <= 0;
        let enemyIsDead = false;
        if (enemyHasNoHP && !targetTurn.isDead) {
            enemyIsDead = true;
            targetTurn.isDead = true;
            battleActions.killDesignatedEnemies(battleData,targetTurn,false,sourceTurn);
        }//we only want to declare the enemy dead once, bc an attack might have 30 hits but if they die at hit 10 we don't want to say they died 20 times after
        let DMGOverkill = 0;
        if (enemyHasNoHP) {
            //only gauge overkill dmg when it would be on an enemy
            DMGOverkill = targetTurn.currentHP * -1;
            //and reset enemy HP after so that way we can see full overkill on the next in a multihit attack
            targetTurn.currentHP = 0;
        }


        
        battleData.battleDamageSUM += DMGTotalEndBreak;
        
        // console.log(DMGTotalEndBreak,sumRES)
        // logToBattle(battleData,{logType: isEnemy ? "HitAlly" : "HitEnemy", hitType: hitDisplay[hitType], target: targetTurn.properName, source:sourceTurn.properName, hitData,enemyIsDead,enemyIsBroken});
        // if (logger) {logToBattle(battleData,{logType: "BrokeEnemyWeakness", hitType: hitDisplay[hitType], target: targetTurn.properName, source:sourceTurn.properName, hitData,enemyIsDead});}
        if (battleData.isLoggyLogger) {
            let totalsRef = battleData.battleTotal;
            const charName = sourceTurn.properName;
            let sumSlotRef = totalsRef.DMG[charName] ??= {};
            const superString = "SuperBreak";
            sumSlotRef[superString] = (sumSlotRef[superString] ?? 0) + DMGTotalEndBreak;
            let sumSlotRef2 = totalsRef.Actions[charName] ??= {};
            sumSlotRef2[superString] = (sumSlotRef2[superString] ?? 0) + 1;
            let sumSlotRef3 = totalsRef.DMGOverkill[charName] ??= {};
            sumSlotRef3[superString] = (sumSlotRef3[superString] ?? 0) + DMGOverkill;
            
            let hitDataBreakSuper = {
                DMGTotalEndBreak,
                DMGTotalAVG:DMGTotalEndBreak,DMGOverkill,element,
                tags: newTags,instanceMulti,rawReduction,enemyIsDead,
                playerData: JSON.stringify(sourceTurn),
                enemyData: JSON.stringify(targetTurn),
                AV:battleData.sumAV
            }
            // console.log("reached super break")
            logToBattle(battleData,{logType: "HitEnemy", hitType: superString, target: targetTurn.properName, source:charName, hitData:hitDataBreakSuper,enemyIsDead,sourceString:sourceName});
        }
        poke("AllyDMGEnd",battleData,{targetTurn,sourceTurn,isSuperBreak,DMGTotalEndBreak});
        poke("BreakDMGEnd",battleData,turnMerge);
        if (battleData.attackIsActive) {battleData.addedDMGTallyAttack += DMGTotalEndBreak;}

        // console.log(DMGTotalEndBreak)
        return DMGTotalEndBreak
    },
    hitWrapper(battleData,targetTurn,atkEntry,hitType,generalInfo,isLastHit,isBounce) {
        const {sourceTurn,ATKObject,element,overBreakTotals,targetsGotHit,overKillTotals,totals} = generalInfo;
        const {actionTags,scalarSourceOverride,scalarAmountOverride,compositeCacheTag,slot,customMulti,scalar,bonusScalar,DMGTags,realDMGKeys,realPENKeys,realShredKeys,realVulnKeys} = ATKObject;
        const {statTable,statTableONHIT,properName,tagSpecific,isEnemy,cacheTagValues,finalMultiCounter} = sourceTurn;
        // const {statTable:enemyStats,
        //     [properName]:targetStatsSourceBased = emptyTableNeverAdd,
        //     statTableONTurn,
        //     properName: targetName,
        //     cacheTagValues: targetCache,
        //     name: targetSlot,
        //     tagSpecific: actionTablesTarget,
        // } = targetTurn;

        const enemyStats = targetTurn.statTable;
        const targetStatsSourceBased = targetTurn[properName] ?? emptyTableNeverAdd;
        const targetStatsOnTurn = targetTurn.turnState ? (targetTurn.statTableONTurn ?? emptyTableNeverAdd) : emptyTableNeverAdd;
        const targetName = targetTurn.properName;
        const targetCache = targetTurn.cacheTagValues;
        const targetSlot = targetTurn.name;
        const actionTablesTarget = targetTurn.tagSpecific;
        const targetStatsTeamBased = emptyTableNeverAdd;
    

        const scalarSourceStats = scalarSourceOverride ? battleData.nameBasedTurns[scalarSourceOverride].statTable : statTable;
        targetsGotHit[targetSlot] = (targetsGotHit[targetSlot] ?? 0 ) + 1;
        
        const turnMerge = {targetTurn,sourceTurn,slot,targetsGotHit,ATKObject};
        poke(isEnemy ? "HitAllyStart" : "HitEnemyStart",battleData,turnMerge);
        poke("AllyDMGStart",battleData,{targetTurn,sourceTurn,slot});
        let atkEntryRef = atkEntry[hitType];
        let currentSplit = atkEntryRef.hitRatio;//the hit split of the current attack
        let currentMulti = (customMulti ? customMulti(statTable,statTableONHIT,hitType,ATKObject,isBounce) : (isBounce ? ATKObject.bounceData.multi : ATKObject.multipliers[hitType])) + (ATKObject.bonusMultiplier ?? 0);//the %multi from the description of the current attack
        let multiOf = scalarAmountOverride ?? pullScalar(scalarSourceStats,statTableONHIT,targetStatsSourceBased,targetStatsOnTurn,scalar);//the stat that this attacks scales off of, so ATK or HP etc
        // console.log(multiOf)
        // bonusScalar: {
        //     primary: values[4],
        //     blast: values[5],
        //     all: null,
        //     // refName: "bladeHPTally",
        //     isDynamicValue: false,
        //     refValue: 0,
        //     bonusValue: rank >=1 ? {
        //         primary: 0,
        //         blast: null,
        //         all: null,
        //     } : null,
        // },
        let bonusDMGCustom = 0;
        let bonusDMGScalar = 0;
        let bonusDMGMulti = 0;
        let bonudDMGCustomRefName = null;

        if (bonusScalar && !scalarAmountOverride) {
            const hasBonusValue = bonusScalar.bonusValue;
            bonusDMGMulti = bonusScalar[hitType] ?? 0;
            bonusDMGScalar = (bonusScalar.isDynamicValue ? sourceTurn[bonusScalar.refName] : bonusScalar.refValue) + (hasBonusValue ? hasBonusValue[hitType] ?? 0 : 0);
            bonusDMGCustom += bonusDMGMulti * bonusDMGScalar;
            bonudDMGCustomRefName = bonusScalar.isDynamicValue ? bonusScalar.refName : null;
        }
        //in the case of someone like Blade, blade's HP tally can change dynamically from hit to hit in the same attack, depending on allies in the team, lc equipped, so on and so forth
        //so in that case, we assign what the bonus multiplier is if it exists through the hitType parameter, and then assign the actual ref value that would be 
        //attached to the turn object, again in blade's case that would be "bladeHPTally", and since I can't directly assign the tally without it being a snapshot
        //I instead need to assign the name of the parameter instead, so we can pull it each time for accurate values
        //TODO: I'm pretty sure a scalar override will never, EVER happen if there is a bonus scalar, but if it does, you can more or less handle it within the override instead


        let preDMG = (multiOf * currentMulti * currentSplit) + (bonusDMGCustom * currentSplit);//sum amount of the scalar, before DMG bonuses come into play
        // console.log(multiOf,currentMulti,currentSplit,bonusDMGCustom)

        let sumDMG = 1 + pullDMG(cacheTagValues,targetCache,compositeCacheTag,statTable,statTableONHIT,targetStatsSourceBased,targetStatsOnTurn,realDMGKeys,tagSpecific,actionTags,actionTablesTarget);//sum of all relevant dmg bonuses

        //resistanced and PEN
        // let sumPEN = pullPEN(cacheTagValues,targetCache,compositeCacheTag,statTable,statTableONHIT,targetStatsSourceBased,targetStatsOnTurn,realPENKeys);
        // console.log(enemyStats[resistanceKeys[element]])

        const {sumPEN,sumSHRED,sumVULN,totalCritDMG,totalCritRate} = pullCompositeStatsWCrit(cacheTagValues,targetCache,compositeCacheTag,statTable,enemyStats,statTableONHIT,targetStatsSourceBased,targetStatsTeamBased,targetStatsOnTurn,realPENKeys,realShredKeys,realVulnKeys,tagSpecific,actionTags,actionTablesTarget);
        // console.log(sumPEN,sumSHRED,sumVULN)
        let sumRES = Math.max(0.10, Math.min(2, 1 - (enemyStats[resistanceKeys[element]] ?? 0) - enemyStats[ResistanceAll] + sumPEN));//pen caps out at -100% or 2x multi, and floor at 90% res so 0.10x multi

        

        //DEF
        // let sumSHRED = pullShred(cacheTagValues,targetCache,compositeCacheTag,statTable,statTableONHIT,targetStatsSourceBased,targetStatsTeamBased,targetStatsOnTurn,realShredKeys,tagSpecific,actionTags,actionTablesTarget);
        let enemyDEF = Math.max(0, enemyStats[DEFBase] * (1 + enemyStats[DEFP] - sumSHRED));//def shred will always be a positive value, just how I'd prefer it. So always - here
        let attackerDiffDEF = statTable[LVL] * 10 + 200;//80 being the player's level here
        // console.log(playerStats[LVL],LVL)
        let sumDEF = 1 - (enemyDEF / (enemyDEF + attackerDiffDEF));

        //broken multi, though I'm p fuckin sure this actually can be modified later, need to revisit down the road.
        let isBroken = targetTurn.currentToughness > 0 ? 0.9 : 1;

        // let sumVULN = 1 + pullVULN(cacheTagValues,targetCache,compositeCacheTag,enemyStats,statTableONHIT,targetStatsSourceBased,targetStatsTeamBased,targetStatsOnTurn,realVulnKeys,tagSpecific,actionTags,actionTablesTarget);
        // console.log(sumPEN,sumSHRED,sumVULN)
        let sumDR = 1;//dunno where we would apply actual DR values from enemies, but will include this for later.
        
        
        let finalMulti = finalMultiCounter ? pullFinalMultiplier(sourceTurn,actionTags) : 1;//TODO: possibly do cachetags for final multis, we'll see though

        
        let DMGTotalEnd = preDMG * sumDMG * sumRES * sumDEF * isBroken * sumVULN * sumDR * finalMulti;
        // console.log(preDMG,sumDMG,sumRES,sumDEF,isBroken,sumVULN,sumDR,finalMulti)

        // const {totalCritRate,totalCritDMG} = pullCritStats(statTable,enemyStats,statTableONHIT,targetStatsSourceBased,targetStatsTeamBased,targetStatsOnTurn,tagSpecific,actionTags,actionTablesTarget);

        let DMGTotalCrit = DMGTotalEnd * (1 + totalCritDMG);
        let DMGTotalAVG = DMGTotalEnd * (1 + totalCritDMG * totalCritRate);
        let shieldOverflow = 0;
        let shieldsWereBroken = false;
        const logger = battleData.isLoggyLogger;
        // if (isEnemy) {console.log(DMGTotalAVG)}


        if (targetTurn.shieldCounter) {
            const shieldsRef = targetTurn.activeShields;
            let smallestOverflow = 0;
            let shieldsBroken = 0;

            // const updateBuff = battleActions.updateBuff;
            for (let shieldName in shieldsRef) {
                const currentShield = shieldsRef[shieldName];
                if (!currentShield) {continue;}//shield keys can exist after getting removed, but they'll be null

                currentShield.shieldRemaining -= DMGTotalAVG;
                if (logger) {poke("ShieldWasHit",battleData,{battleData,currentShield,DMGTotalAVG,sourceTurn:targetTurn});}
                if (currentShield.shieldRemaining < 0) {
                    shieldsWereBroken = true;
                    shieldsBroken += 1;
                    const overkillShield = currentShield.shieldRemaining * -1;

                    //so if this is the very first shield we broke, store the overflow for comparison
                    if (shieldsBroken === 1) {
                        smallestOverflow = overkillShield;
                    }
                    //THEN, after that, check shields to see what the smallest overflow is, then store that instead
                    else if (overkillShield < smallestOverflow) {
                        smallestOverflow = overkillShield;
                    }
                    //this is bc shields don't stack from diff sources. Some shields can build value like aven Fortified Wager, but that's only building value on the same shield
                    //with this in mind, the dmg applies to ALL shields at once, meaning it can break any or all of them together
                    //however HP is only damaged if there are no shields remaining, but HP would only be hurt after the strongest shield is broken, hence: the smallest overflow is stored to dmg HP

                    removeBuff(battleData,targetTurn,currentShield);
                    //for all intents and purposes in the calc, shields are just really fancy buffs lmfao, gotta remove them if they break
                }
                else {continue;}//if we didn't break the shield, move on to the next
                // currentReference.shieldRemaining = finalShield;
                // currentReference.shieldCap = totalShieldCap;
            }
            shieldOverflow = smallestOverflow;
            if (logger) {poke("ShieldsWereBroken",battleData,{battleData,sourceTurn:targetTurn});}
        }
        else {shieldOverflow = DMGTotalAVG;}

        // targetTurn.currentHP -= (DMGTotalAVG + breakerDMG + breakerDMGSuper);
        let DMGOverkill = 0;
        let enemyIsDead = false;
        if (shieldOverflow) {

            // battleData.backupHPObject["Netherwing: Pollux"] = ActionEntry;
            // backupHPOnField: 0,
            // backupHPObject: {},
            
            // targetTurn.currentHP -= shieldOverflow;
            if (isEnemy) {
                const proposedDrain = targetTurn.currentHP - shieldOverflow;
                if (battleData.backupHPOnField && proposedDrain < 1) {
                    const distanceTo1 = Math.max(1,targetTurn.currentHP - 1);
                    let dmgToDeal = shieldOverflow - distanceTo1;
                    const backupRefs = battleData.backupHPObject;
                    for (let backup in backupRefs) {
                        const currentBackup = backupRefs[backup];
                        leftoverDMG = currentBackup.backupHPFunction(battleData,currentBackup,dmgToDeal);
                        //if there is a backupHP source like netherwing, then call the backup function defined on its turn object
                        //which will return the amount of dmg it could not consume

                        //in this case, if the dmg returned is 0 that means all dmg was consumed, and we can break
                        if (leftoverDMG === 0) {
                            dmgToDeal = 0;
                            break;
                        }
                        else {
                            dmgToDeal = leftoverDMG
                        }
                    }
                    //if the leftover dmg is 0 then the amount of dmg that would breach shields and go beyond 1hp is obv 0
                    shieldOverflow = (dmgToDeal === 0 ? 0 : dmgToDeal) + distanceTo1;
                    //otherwise, we need to assign the dmgs that backups couldn't eat, to the target to still deal it
                }
                targetTurn.currentHP -= shieldOverflow;
                poke("AllyLostHP",battleData,{sourceTurn:targetTurn,HPLost: shieldOverflow,wasAttack:true});
            }
            else {targetTurn.currentHP -= shieldOverflow;}
            
            let enemyHasNoHP = targetTurn.currentHP <= 0;
            if (enemyHasNoHP && !targetTurn.isDead) {
                enemyIsDead = true;
                targetTurn.isDead = true;
            }//we only want to declare the enemy dead once, bc an attack might have 30 hits but if they die at hit 10 we don't want to say they died 20 times after
            else {
                const enemyName = targetTurn.properName;
                overKillTotals[enemyName] = (overKillTotals[enemyName] ?? 0) + shieldOverflow;
            }
            // let oldHPRemaining = targetTurn.currentHP;
            // let oldHPMax = targetTurn.maxHP;
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
        
        overBreakTotals[targetName] ??= 0;
        if (!isEnemy) {
            rawReduction = currentSplit * getToughnessSum(battleData,atkEntryRef.toughness ?? 0,sourceTurn,targetTurn);
            // if (ATKObject.toughnessCondition) {toughnessBase = ATKObject.toughnessCondition(rawReduction,sourceTurn,targetTurn)}
            toughnessBase = ATKObject.toughnessCondition ? ATKObject.toughnessCondition(rawReduction,sourceTurn,targetTurn) : rawReduction;
            // toughnessBase = currentSplit * rawReduction;

            let enemyWeakness = enemyStats[weaknessKeys[element]];
            // console.log(targetTurn.currentToughness,targetTurn.maxToughness,currentSplit,toughnessBase)
            if (toughnessBase && (enemyWeakness || ATKObject.allToughness)) {//only reduce toughness when the attack even has a stat to do so, but also only when matching weakness or forced all-type reductions are in effect.
                
                if (!targetTurn.isBroken) {
                    targetTurn.currentToughness -= toughnessBase;
                    let enemyHasNoToughness = targetTurn.currentToughness <= 0;
                    // let notAlreadyBrokenCheck = enemyHasNoToughness;// && !targetTurn.isBroken;
                    if (enemyHasNoToughness) {
                        enemyIsBroken = true;
                        targetTurn.isBroken = true;
                        overBreak = targetTurn.currentToughness * -1;
                        // overBreakRef[targetName] += overBreak;
                        // overBreakRef[targetName] += toughnessBase;
                    }
                    if (targetTurn.currentToughness < 0) {targetTurn.currentToughness = 0;}
                }
                else {//if the target IS broken already
                    overBreakTotals[targetName] += rawReduction;
                }
            }
            else if (targetTurn.isBroken) {
                overBreakTotals[targetName] += rawReduction;
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
                scalar,bonusDMGCustom,bonudDMGCustomRefName,bonusDMGMulti,bonusDMGScalar,
                currentSplit,currentMulti,multiOf,tags:DMGTags,element,finalMulti,
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
                // console.log(DMGTags)
                battleActions.getBreakDamage(battleData,breakObject,sourceTurn,targetTurn,DMGTags,isBroken,generalInfo);
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
                poke("BrokeEnemyWeakness",battleData,{targetTurn,sourceTurn,slot,targetsGotHit,ATKObject,breakObject,tags:DMGTags,isBroken,generalInfo});
            }
            else if (isLastHit && targetTurn.isBroken && !targetTurn.isDead) {
                const triggerRef = battleData.battleListeners.hitWrapSuperBreakCall ??= [];
                const superBreakage = battleActions.getSuperBreakDamage;
                const accumulatedToughness = overBreakTotals[targetName];
                for (let i = 0; i < triggerRef.length; i++) {
                    const superDetails = triggerRef[i].condition(battleData,turnMerge);
                    if (!superDetails) {continue;}
                    superBreakage(battleData,element,sourceTurn,targetTurn,DMGTags,superDetails[0],superDetails[1],accumulatedToughness,generalInfo);
                    // return [0.5,this.listenerName]
                }
            }
        }


        poke("AllyDMGEnd",battleData,{targetTurn,sourceTurn,slot,DMGTotalEnd,DMGTotalCrit,DMGTotalAVG});
        poke(isEnemy ? "HitAllyEnd" : "HitEnemyEnd",battleData,turnMerge);
        if (battleData.attackIsActive) {battleData.addedDMGTallyAttack += DMGTotalAVG;}

        // else if (hit.enemyIsBroken) {enemiesThatBroke.push(targetTurn);}
        // totalsRef.totalAVGDMG += DMGTotalAVG;
        // totalsRef.totalOverkill += DMGOverkill;
        totals.totalAVGDMG += DMGTotalAVG;
        totals.totalOverkill += DMGOverkill;
    },
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
    hitWrapperBattleStart(battleData,targetTurn,hitType,generalInfo) {
        const sourceTurn = generalInfo.sourceTurn;
        const ATKObject = generalInfo.ATKObject;
        const tags = ATKObject.DMGTags;
        const element = generalInfo.element;


        let playerStats = sourceTurn.statTable;
        let playerStatsONHIT = sourceTurn.statTableONHIT;
        let enemyStats = targetTurn.statTable;
        let isEnemy = false;

        // const scalarSourceStatsONHIT = scalarSourceOverride ? scalarSourceOverride.statTableONHIT : playerStatsONHIT;



        // battleTotal.Actions
        // let ATKObject = {
        //     multipliers: {
        //         primary: values[0],
        //         blast: null,
        //         all: null,
        //     },
        //     scalar: "ATKFinal",
        //     DMGTags: ["All","Basic","Fire"]
            // isEnemy: true
            // slot: skillRef.slot
        // }
        
        let slot = ATKObject.slot;
        const turnMerge = {targetTurn,sourceTurn,slot,ATKObject};
        



        //TOUGHNESS MATH
        let enemyIsBroken = false;
        let toughnessBase = 0;
        let rawReduction = 0
        let overBreak = 0;
        let breakerDMG = 0;
        // const overBreakRef = generalInfo.overBreakTotals;
        // const targetName = targetTurn.properName;
        // overBreakRef[targetName] ??= 0;
        if (!isEnemy) {
            rawReduction = battleActions.getToughnessSum(battleData,10,sourceTurn,targetTurn);
            // if (ATKObject.toughnessCondition) {toughnessBase = ATKObject.toughnessCondition(rawReduction,sourceTurn,targetTurn)}
            toughnessBase = ATKObject.toughnessCondition ? ATKObject.toughnessCondition(rawReduction,sourceTurn,targetTurn) : rawReduction;
            // toughnessBase = currentSplit * rawReduction;

            let enemyWeakness = enemyStats[weaknessKeys[element]];
            // console.log(targetTurn.currentToughness,targetTurn.maxToughness,currentSplit,toughnessBase)
            if (toughnessBase && (enemyWeakness || ATKObject.allToughness)) {//only reduce toughness when the attack even has a stat to do so, but also only when matching weakness or forced all-type reductions are in effect.
                
                // console.log(targetTurn.currentToughness)
                if (!targetTurn.isBroken) {
                    targetTurn.currentToughness -= toughnessBase;
                    // console.log(targetTurn.currentToughness)
                    let enemyHasNoToughness = targetTurn.currentToughness <= 0;
                    // let notAlreadyBrokenCheck = enemyHasNoToughness;// && !targetTurn.isBroken;
                    if (enemyHasNoToughness) {
                        enemyIsBroken = true;
                        targetTurn.isBroken = true;
                        overBreak = targetTurn.currentToughness * -1;
                    }
                    if (targetTurn.currentToughness < 0) {targetTurn.currentToughness = 0;}
                }
                // else {//if the target IS broken already
                //     overBreakRef[targetName] += rawReduction;
                // }
            }
            else if (targetTurn.isBroken) {
                // overBreakRef[targetName] += rawReduction;
            }
            else {toughnessBase = 0;}//for log purposes we completely nullify the tracked toughness of the attack so we don't fuck up displays later
        }

        const logger = battleData.isLoggyLogger;
        if (logger) {
            const hitDisplay = {
                "primary": "Single Target",
                "blast": "Blast",
                "all": "AoE"
            };
            // console.log(sourceTurn.statTable)
            const hitData = {
                scalar: "",
                currentSplit:0,currentMulti:0,multiOf:0,tags,element:0,finalMulti:0,
                DMGTotalEnd:0,DMGTotalCrit:0,DMGTotalAVG:0,DMGOverkill:0,shieldOverflow:0,
                strongestShieldRef:null,
                // breakerDMG,
                overBreak,
                enemyIsDead:false,enemyIsBroken,toughnessBase,
                playerData: logger ? JSON.stringify(sourceTurn) : null,
                enemyData: logger ? JSON.stringify(targetTurn) : null,
                AV:battleData.sumAV
            };
            logToBattle(battleData,{logType: isEnemy ? "HitAlly" : "HitEnemy", hitType: hitType, target: targetTurn.properName, source:sourceTurn.properName, hitData,enemyIsDead:false,enemyIsBroken});
        }

        if (enemyIsBroken) {
            let breakObject = {//isBroken tied to the enemy here is important bc we need to trigger break dmg REGARDLESS of if this attack actually broke them or not bc break dmg happens when broken anyways, regardless of who did it or what element.
                toughnessBase,
                element,
                rawReduction
            }
            breakerDMG = battleActions.getBreakDamage(battleData,breakObject,sourceTurn,targetTurn,tags,isBroken,generalInfo);
            // generalInfo.enemiesThatBroke.push(targetTurn);

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
            poke("BrokeEnemyWeakness",battleData,turnMerge);
        }

        // const totalsRef = generalInfo.totals;
        // totalsRef.totalBreakDMG += breakerDMG;
        // totalsRef.totalBreakSuperDMG += breakerDMGSuper;

        //TODO: circle back here and get the character tracking enabled for the correct slots on the battlestart break if it happens
    },
    additionalDMGHitWrapper(battleData,charName,sourceTurn,targetTurn,ATKObject,element,enemiesAttackedThisAction,sourceString) {
        // let playerStats = sourceTurn.statTable;
        // let playerStatsONHIT = sourceTurn.statTableONHIT;
        // const actionTables = sourceTurn.tagSpecific;
        // const sourceCache = sourceTurn.cacheTagValues;
        const {statTable,statTableONHIT,tagSpecific,cacheTagValues} = sourceTurn;

        // const actionTags = ATKObject.actionTags;
        // let currentMulti = ATKObject.multipliers.additional;//the %multi from the description of the current attack
        // const scalar = ATKObject.scalar;
        // const compositeCacheTag = ATKObject.compositeCacheTag;
        // let tags = ATKObject.DMGTags;//all dmg related tags associated with this attack, so skilldmg, firedmg, etc.

        // ATKObject.fixedCritDMG,ATKObject.fixedCritRate
        // ATKObject.realDMGKeys, ATKObject.realPENKeys, ATKObject.realShredKeys, ATKObject.realVulnKeys
        const {actionTags,multipliers,scalar,compositeCacheTag,DMGTags,realDMGKeys,realPENKeys,realShredKeys,realVulnKeys,fixedCritDMG,fixedCritRate} = ATKObject;
        const currentMulti = multipliers.additional;



        let enemyStats = targetTurn.statTable;
        let targetStatsSourceBased = targetTurn[sourceTurn.properName] ?? emptyTableNeverAdd;
        let targetStatsOnTurn = targetTurn.turnState ? (targetTurn.statTableONTurn ?? emptyTableNeverAdd) : emptyTableNeverAdd;
        const actionTablesTarget = targetTurn.tagSpecific;
        const targetCache = targetTurn.cacheTagValues;
        let isBroken = targetTurn.currentToughness > 0 ? 0.9 : 1;
        
        let isEnemy = false;//enemies can't source additional dmg, this will always be an ally accessing this point
        let targetStatsTeamBased = emptyTableNeverAdd;


        poke("AllyDMGStart",battleData,{targetTurn,sourceTurn});
        
        let multiOf = scalar ? battleActions.pullScalarSum(statTable,statTableONHIT,targetStatsSourceBased,targetStatsOnTurn,scalar) : 1;//the stat that this attacks scales off of, so ATK or HP etc
        let preDMG = multiOf * currentMulti;//sum amount of the scalar, before DMG bonuses come into play
        let sumDMG = 1 + battleActions.pullDMGBonus(cacheTagValues,targetCache,compositeCacheTag,statTable,statTableONHIT,targetStatsSourceBased,targetStatsOnTurn,realDMGKeys);//sum of all relevant dmg bonuses
        

        //resistance and PEN
        const {sumPEN,sumSHRED,sumVULN,totalCritDMG,totalCritRate} = pullCompositeStatsWCrit(cacheTagValues,targetCache,compositeCacheTag,statTable,enemyStats,statTableONHIT,targetStatsSourceBased,targetStatsTeamBased,targetStatsOnTurn,realPENKeys,realShredKeys,realVulnKeys,tagSpecific,actionTags,actionTablesTarget);
        
        // let sumPEN = battleActions.pullPENBonus(cacheTagValues,targetCache,compositeCacheTag,statTable,statTableONHIT,targetStatsSourceBased,targetStatsOnTurn,ATKObject.realPENKeys);
        let sumRES = Math.max(0.10, Math.min(2, 1 - enemyStats[resistanceKeys[element]] - enemyStats[ResistanceAll] + sumPEN));//pen caps out at -100% or 2x multi, and floor at 90% res so 0.10x multi
        
        //DEF
        // let sumSHRED = battleActions.pullDEFShredBonus(cacheTagValues,targetCache,compositeCacheTag,statTable,statTableONHIT,targetStatsSourceBased,targetStatsTeamBased,targetStatsOnTurn,ATKObject.realShredKeys,tagSpecific,actionTags,actionTablesTarget);
        // let sumSHRED = battleActions.pullDEFShredBonus(playerStats,playerStatsONHIT,targetStatsSourceBased,ATKObject.realShredKeys);
        let enemyDEF = Math.max(0, enemyStats[DEFBase] * (1 + enemyStats[DEFP] - sumSHRED));//def shred will always be a positive value, just how I'd prefer it. So always - here
        let attackerDiffDEF = statTable[LVL] * 10 + 200;//80 being the player's level here
        let sumDEF = 1 - (enemyDEF / (enemyDEF + attackerDiffDEF));
        

        //broken multi, though I'm p fuckin sure this actually can be modified later, need to revisit down the road.

        // let sumVULN = 1 + battleActions.pullVULNBonus(enemyStats,playerStatsONHIT,targetStatsSourceBased,ATKObject.realVulnKeys);
        // let sumVULN = 1 + battleActions.pullVULNBonus(cacheTagValues,targetCache,compositeCacheTag,enemyStats,statTableONHIT,targetStatsSourceBased,targetStatsTeamBased,targetStatsOnTurn,ATKObject.realVulnKeys,tagSpecific,actionTags,actionTablesTarget);
        let sumDR = 1;//dunno where we would apply actual DR values from enemies, but will include this for later.

        // Outgoing DMG = Base DMG * DMG% Multiplier * DEF Multiplier * RES Multiplier * DMG Taken Multiplier * Universal DMG Reduction Multiplier * Weaken Multiplier

        let finalMulti = sourceTurn.finalMultiCounter ? battleActions.pullFinalMultiplier(sourceTurn,actionTags) : 1;
        // if (isEnemy) {console.log(preDMG, sumDMG, sumRES, sumDEF, isBroken, sumVULN, sumDR)}
        let DMGTotalEnd = preDMG * sumDMG * sumRES * sumDEF * isBroken * sumVULN * sumDR * finalMulti;


        const finalCritDMG = fixedCritDMG ?? totalCritDMG;
        const finalCritRate = fixedCritRate ?? totalCritRate;
        //right now robin is the only one who uses this, the fixed rates and dmg

        let DMGTotalCrit = DMGTotalEnd * (1 + finalCritDMG);
        let DMGTotalAVG = DMGTotalEnd * (1 + finalCritDMG * finalCritRate);
        // if (isEnemy) {console.log(DMGTotalAVG)}


        targetTurn.currentHP -= DMGTotalAVG;
        let enemyHasNoHP = targetTurn.currentHP <= 0;
        let enemyIsDeadCheck = enemyHasNoHP && !targetTurn.isDead;
        let enemyIsDead = false;
        if (enemyIsDeadCheck) {
            enemyIsDead = true;
            targetTurn.isDead = true;
            battleActions.killDesignatedEnemies(battleData,targetTurn,isEnemy,sourceTurn);
        }//we only want to declare the enemy dead once, bc an attack might have 30 hits but if they die at hit 10 we don't want to say they died 20 times after
        let DMGOverkill = 0;

        if (!isEnemy && enemyHasNoHP) {
            //only gauge overkill dmg when it would be on an enemy
            DMGOverkill = targetTurn.currentHP * -1;
            //and reset enemy HP after so that way we can see full overkill on the next in a multihit attack
            targetTurn.currentHP = 0;
        }


        let logger = battleData.isLoggyLogger;
        let hitData = {
            scalar,
            currentMulti,multiOf,tags:DMGTags,element,
            DMGTotalEnd,DMGTotalCrit,DMGTotalAVG,DMGOverkill,
            enemyIsDead,
            playerData: logger ? JSON.stringify(sourceTurn) : null,
            enemyData: logger ? JSON.stringify(targetTurn) : null,
            AV:battleData.sumAV
        }
        enemiesAttackedThisAction[targetTurn.name] = targetTurn;

        if (battleData.isLoggyLogger) {logToBattle(battleData,{logType: "HitEnemy", hitType: "Additional", target: targetTurn.properName, source:charName, hitData,enemyIsDead,sourceString});}
        poke("AllyDMGEnd",battleData,{targetTurn,sourceTurn,DMGTotalEnd,DMGTotalCrit,DMGTotalAVG});
        if (battleData.attackIsActive) {battleData.addedDMGTallyAttack += DMGTotalAVG;}
        
        return {hitData,DMGTotalAVG,DMGOverkill,enemyIsDead}
    },
    additionalDMGWrapper(battleData,sourceTurn,charName,ATKObject,targetTurn,sourceString) {
        let logging = battleData.isLoggyLogger;
        if (logging) {logToBattle(battleData,{logType: "AdditionalDMGStart"});}
        let dmgSlot = "Additional DMG";
        poke("AdditionalDMGStart",battleData,{sourceTurn,skillSlot:dmgSlot});

        let totalHits = 0;
        let totalAVGDMG = 0;
        let totalOverkill = 0;

        let element = ATKObject.element;

        let enemiesAttackedThisAction = {};
        let hitWrap = battleActions.additionalDMGHitWrapper;

        let dmgSum = 0;
        let overkillSum = 0;

        totalHits ++;
        let hit = hitWrap(battleData,charName,sourceTurn,targetTurn,ATKObject,element,enemiesAttackedThisAction,sourceString);
        dmgSum += hit.DMGTotalAVG;
        overkillSum += hit.DMGOverkill;

        totalAVGDMG += dmgSum;
        totalOverkill += overkillSum;

        battleData.battleDamageSUM += totalAVGDMG;

        poke("AdditionalDMGEnd",battleData,{sourceTurn, enemiesAttackedThisAction,dmgSlot,sourceString});
        if (logging) {
            let totalsRef = battleData.battleTotal;
            let sumSlotRef = totalsRef.DMG[charName] ??= {};
            sumSlotRef[dmgSlot] = (sumSlotRef[dmgSlot] ?? 0) + totalAVGDMG;
            let sumSlotRef2 = totalsRef.Actions[charName] ??= {};
            sumSlotRef2[dmgSlot] = (sumSlotRef2[dmgSlot] ?? 0) + 1;
            let sumSlotRef3 = totalsRef.DMGOverkill[charName] ??= {};
            sumSlotRef3[dmgSlot] = (sumSlotRef3[dmgSlot] ?? 0) + totalOverkill;
            logToBattle(battleData,{logType: "AdditionalDMGEnd", totalHits, totalAVGDMG});
        }

        return {enemiesAttackedThisAction,hit}
    },
    // dotDetonateWrapper(battleData,sourceTurn,ATKObject,targetTurn,"Kafka Talent Detonate");
    dotDetonateWrapper(battleData,sourceTurn,detonateMulti,targetTurn) {
        if (!targetTurn.DOTCounter) {return;}
        let logging = battleData.isLoggyLogger;
        const isTurnStartTrigger = detonateMulti ? false : true;
        detonateMulti = detonateMulti ?? 1;
        //TODO: use the above to swap between actual detonate triggers vs turn start dot triggers
        let dmgSlot = "DOT";
        const turnMerge = {sourceTurn,dmgSlot,targetTurn};
        const isDetonated = !isTurnStartTrigger;
        if (isDetonated) {
            if (logging) {logToBattle(battleData,{logType: "DOTDetonateStart"});}
            poke("DOTDetonateStart",battleData,turnMerge);
        }


        const alliedTurns = battleData.nameBasedTurns;
        const currentDots = targetTurn.currentDotsArray;
        const specialDots = targetTurn.specialDotsArray;
        
        let dotWrap = battleActions.dotDMGWrapper;
        // for (let dotRef of currentDots) {
        for (let i=0;i<currentDots.length;i++) {
            if (targetTurn.isDead) {break;}
            const dotRef = currentDots[i];
            // currentBuff = buffsRef[buffName];
            // if (!currentBuff || !currentBuff.isDOT) {continue;}
            const dotOwner = alliedTurns[dotRef.ownerSlot];
            const turnStartFunction = dotRef.customTurnStartFunction;
            if (isTurnStartTrigger && turnStartFunction) {
                turnStartFunction(battleData,dotOwner,targetTurn);
            }
            else {
                const element = dotRef.element;
                const multi = dotRef.multiplier;
                const scalar = dotRef.scalar;
                const averaged = dotRef.avgChanceApplied;

                dotWrap(battleData,dotOwner,targetTurn,element,multi,scalar,averaged,detonateMulti,isDetonated,dotRef);
                // sourceTurn.kafkaUltimateDOTSHEET = {
                //     "stats": null,
                //     "source": characterName,
                //     "buffName": buffName,
                //     "duration": 3,
                //     "AVApplied": 0,
                //     "maxStacks": 1,
                //     "currentStacks": 1,
                //     "decay": false,
                //     "expireType": "EndTurn",
                //     "isDOT": true,
                //     "isDebuff": true,
                //     "element": sourceTurn.element,
                //     multiplier: values[3],
                //     scalar: "ATK",
                //     slot: skillRef.slot,
                //     ownerIsAllied: true,
                //     ownerSlot: sourceTurn.name,
                // }
            }
        }
        for (let dotRef of specialDots) {
            if (targetTurn.isDead) {break;}
            // currentBuff = buffsRef[buffName];
            // if (!currentBuff || !currentBuff.isDOT) {continue;}
            const dotOwner = alliedTurns[dotRef.ownerSlot];
            const turnStartFunction = dotRef.customTurnStartFunction;
            if (isTurnStartTrigger && turnStartFunction) {
                turnStartFunction(battleData,dotOwner,targetTurn);
            }
            else {
                const element = dotRef.element;
                const multi = dotRef.multiplier;
                const scalar = dotRef.scalar;
                const averaged = dotRef.avgChanceApplied;

                dotWrap(battleData,dotOwner,targetTurn,element,multi,scalar,averaged,detonateMulti,isDetonated,dotRef);
                // sourceTurn.kafkaUltimateDOTSHEET = {
                //     "stats": null,
                //     "source": characterName,
                //     "buffName": buffName,
                //     "duration": 3,
                //     "AVApplied": 0,
                //     "maxStacks": 1,
                //     "currentStacks": 1,
                //     "decay": false,
                //     "expireType": "EndTurn",
                //     "isDOT": true,
                //     "isDebuff": true,
                //     "element": sourceTurn.element,
                //     multiplier: values[3],
                //     scalar: "ATK",
                //     slot: skillRef.slot,
                //     ownerIsAllied: true,
                //     ownerSlot: sourceTurn.name,
                // }
            }
        }

        if (isDetonated) {poke("DOTDetonateEnd",battleData,turnMerge);}
        if (logging) {logToBattle(battleData,{logType: "DOTDetonateEnd"});}
    },
    dotDMGWrapper(battleData,sourceTurn,targetTurn,element,multi,scalar,averaged,detonateMulti,isDetonated,currentBuff,sourceOverride) {

        const characterName = sourceTurn.properName;
        let playerStats = sourceTurn.statTable;
        let playerStatsONHIT = sourceTurn.statTableONHIT;
        let enemyStats = targetTurn.statTable;
        let targetStatsSourceBased = targetTurn[characterName] ?? emptyTableNeverAdd;
        let targetStatsOnTurn = targetTurn.turnState ? (targetTurn.statTableONTurn ?? emptyTableNeverAdd) : emptyTableNeverAdd;
        let targetStatsTeamBased = emptyTableNeverAdd;
        const actionTables = sourceTurn.tagSpecific;
        const actionTablesTarget = targetTurn.tagSpecific;
        // const actionTags = ["DOT"];
        
        let isEnemy = false;//sourceTurn.isEnemy

        const {isBreakDOT,actionTags,realDMGKeys,realPENKeys,realShredKeys,realVulnKeys} = currentBuff;

        // let newTags = isBreakDOT ? ["All",element,"DOT","Break"] : ["All",element,"DOT"];


        const sourceCache = sourceTurn.cacheTagValues;
        const targetCache = targetTurn.cacheTagValues;

        const turnMerge = {targetTurn,sourceTurn,element,isDetonated,sourceOverride,isBreakDOT};
        poke("DOTDMGStart",battleData,turnMerge);
        poke("AllyDMGStart",battleData,turnMerge);
        let currentMulti = multi;//the %multi from the description of the current attack
        // let detonateMulti //passed through as a param, no need to define


        let multiOf = null;
        let bleedMultiOf = null;
        let bleedLimit = null;
        let tags = null;
        let preDMG = null;
        let finalMulti = null;
        let DMGTotalEnd = null;
        let DMGTotalAVG = null;
        if (!isBreakDOT) {
            multiOf = battleActions.pullScalarSum(playerStats,playerStatsONHIT,targetStatsSourceBased,targetStatsOnTurn,scalar);//the stat that this attacks scales off of, so ATK or HP etc

            const compositeCacheTag = currentBuff.compositeCacheTag;
            // sourceTurn.hysilensTalentDOTSHEETPhysical = {
            //     "stats": null,
            //     "source": characterName,
            //     "buffName": buffNames.talentBleed,
            //     "duration": 2,
            //     "AVApplied": 0,
            //     "maxStacks": 1,
            //     "currentStacks": 1,
            //     "decay": false,
            //     "expireType": "EndTurn",
            //     "isDOT": true,
            //     "isDebuff": true,
            //     "element": "Physical",
            //     multiplier: null,
            //     bleedMulti: values[2],
            //     bleedLimit: values[3],
            //     scalar: "ATK",
            //     slot: skillRef.slot,
            //     ownerIsAllied: true,
            //     ownerSlot: sourceTurn.name,
            //     avgChanceApplied: 1,
            //     baseChance: values[0],
            // }

            // multiplier: values[0],
            // multiPerStack: values[2],
            const stackedMulti = currentBuff.multiPerStack;
            if (stackedMulti) {currentMulti += (currentBuff.currentStacks - 1) * stackedMulti;}
            //see black swan's arcana stacking later if I forget what this was for
            let prePreDMG = multiOf * currentMulti;

            if (element === "Physical" && !sourceOverride) {
                const HPMax = targetTurn.maxHP;
                bleedMultiOf = HPMax;

                currentMulti = currentBuff.bleedMulti;
                bleedLimit = currentBuff.bleedLimit ? currentBuff.bleedLimit * multiOf : null;

                const possibleBleed = currentMulti * HPMax;
                const totalBleed = bleedLimit ? Math.min(bleedLimit,possibleBleed) : possibleBleed;
                prePreDMG = totalBleed;
            }
            preDMG = prePreDMG * detonateMulti;//sum amount of the scalar, before DMG bonuses come into play
            tags = currentBuff.tags;//all dmg related tags associated with this attack, so skilldmg, firedmg, etc.
            let sumDMG = 1 + battleActions.pullDMGBonus(sourceCache,targetCache,compositeCacheTag,playerStats,playerStatsONHIT,targetStatsSourceBased,targetStatsOnTurn,realDMGKeys);//sum of all relevant dmg bonuses

            //resistanced and PEN
            const {sumPEN,sumSHRED,sumVULN} = pullCompositeStats(sourceCache,targetCache,compositeCacheTag,playerStats,enemyStats,playerStatsONHIT,targetStatsSourceBased,targetStatsTeamBased,targetStatsOnTurn,realPENKeys,realShredKeys,realVulnKeys,actionTables,actionTags,actionTablesTarget);
            // let sumPEN = battleActions.pullPENBonus(sourceCache,targetCache,compositeCacheTag,playerStats,playerStatsONHIT,targetStatsSourceBased,targetStatsOnTurn,realPENKeys);
            let sumRES = Math.max(0.10, Math.min(2, 1 - enemyStats[resistanceKeys[element]] - enemyStats[ResistanceAll] + sumPEN));//pen caps out at -100% or 2x multi, and floor at 90% res so 0.10x multi

            //DEF
            // let sumSHRED = battleActions.pullDEFShredBonus(sourceCache,targetCache,compositeCacheTag,playerStats,playerStatsONHIT,targetStatsSourceBased,targetStatsTeamBased,targetStatsOnTurn,realShredKeys,actionTables,actionTags,actionTablesTarget);
            let enemyDEF = Math.max(0, enemyStats[DEFBase] * (1 + enemyStats[DEFP] - sumSHRED));//def shred will always be a positive value, just how I'd prefer it. So always - here
            let attackerDiffDEF = playerStats[LVL] * 10 + 200;//80 being the player's level here
            let sumDEF = 1 - (enemyDEF / (enemyDEF + attackerDiffDEF));
            

            //broken multi, though I'm p fuckin sure this actually can be modified later, need to revisit down the road.
            let isBroken = targetTurn.currentToughness > 0 ? 0.9 : 1;
            // let sumVULN = 1 + battleActions.pullVULNBonus(sourceCache,targetCache,compositeCacheTag,enemyStats,playerStatsONHIT,targetStatsSourceBased,targetStatsTeamBased,targetStatsOnTurn,realVulnKeys,actionTables,actionTags,actionTablesTarget);
            let sumDR = 1;//dunno where we would apply actual DR values from enemies, but will include this for later.
            finalMulti = sourceTurn.finalMultiCounter ? battleActions.pullFinalMultiplier(sourceTurn,actionTags) : 1;

            // Outgoing DMG = Base DMG * DMG% Multiplier * DEF Multiplier * RES Multiplier * DMG Taken Multiplier * Universal DMG Reduction Multiplier * Weaken Multiplier

            // if (isEnemy) {console.log(preDMG, sumDMG, sumRES, sumDEF, isBroken, sumVULN, sumDR)}
            DMGTotalEnd = preDMG * sumDMG * sumRES * sumDEF * isBroken * sumVULN * sumDR * finalMulti;
            // const totalCritDMG = battleActions.pullCritDamageSUM(playerStats,enemyStats,playerStatsONHIT,targetStatsSourceBased,targetStatsTeamBased,actionTables,actionTags,actionTablesTarget);
            // const totalCritRate = battleActions.pullCritRateSUM(playerStats,enemyStats,playerStatsONHIT,targetStatsSourceBased,targetStatsTeamBased,actionTables,actionTags,actionTablesTarget);
            // let DMGTotalCrit = DMGTotalEnd * (1 + totalCritDMG);
            // let DMGTotalAVG = DMGTotalEnd * (1 + totalCritDMG * totalCritRate);
            // let DMGTotalCrit = DMGTotalEnd * (1 + totalCritDMG);


            //TODO: effect res vs EHR averages, the avg chance to apply is assigned when dots are created since that is when they can reference hits involved in the application
            //for now though, I just wanna see if dmg can line up, so not yet.
            DMGTotalAVG = DMGTotalEnd * averaged;
        }
        else {
            // multiOf = battleActions.pullScalarSum(playerStats,playerStatsONHIT,targetStatsSourceBased,scalar);
            multiOf = 1;

            tags = ["All",element,"DOT","Break"];
            const keyShortcut = basicShorthand.makeKeysArray;
            // const realDMGKeys = keyShortcut(dmgKeys,tags);
            const realPENKeys = keyShortcut(resPENKeys,tags);
            const realShredKeys = keyShortcut(defShredKeys,tags);
            const realVulnKeys = keyShortcut(vulnKeys,tags);

            const compositeCacheTag = tags + actionTags;

            // sourceTurn.breakDOTSheet = {
            //     "stats": null,
            //     "source": "Break",
            //     "sourceOwner": sourceTurn.properName,
            //     "buffName": battleActions.breakDOTNames[element],
            //     "duration": 1,
            //     "AVApplied": 0,
            //     "maxStacks": element === "Wind" ? 5 : 1,
            //     "currentStacks": 1,
            //     "decay": false,
            //     "expireType": "EndTurn",
            //     "isDOT": isDOT,
            //     "isDebuff": true,
            //     "element": element,
            //     isBreakDOT: true,
            //     multiplier: battleActions.breakDOTElementMultipliers[element],
            //     // scalar: "ATK",
            //     slot: "BreakDOT",
            //     ownerIsAllied: true,
            //     ownerSlot: sourceTurn.name,
            //     avgChanceApplied: 1,
            //     baseChance: 1.5,
            // }


            let prePreDMG = multiOf * multi;
            currentMulti = multi * (element === "Wind" ? currentBuff.currentStacks : 1);
            if (element === "Physical") {
                const HPMax = targetTurn.maxHP;
                bleedMultiOf = HPMax;

                currentMulti = targetTurn.enemyType != "minion" ? 0.07 : 0.16;
                bleedLimit = multi * (0.5 + (targetTurn.maxToughness/40));

                const possibleBleed = currentMulti * HPMax;
                const totalBleed = Math.min(bleedLimit,possibleBleed);
                prePreDMG = totalBleed;
            }
            

            const breakDMGBonus = battleActions.pullBreakDMGMulti(playerStats,playerStatsONHIT,targetStatsSourceBased);
            preDMG = prePreDMG * breakDMGBonus * detonateMulti;
            // if (element === "Lightning") {console.log(prePreDMG,multiOf,multi,breakDMGBonus)}
            let sumDMG = 1;//break dot cannot in any capacity, benefit from a dmg bonus that isn't break dmg dealt bonuses

            //resistanced and PEN
            const {sumPEN,sumSHRED,sumVULN} = pullCompositeStats(sourceCache,targetCache,compositeCacheTag,playerStats,enemyStats,playerStatsONHIT,targetStatsSourceBased,targetStatsTeamBased,targetStatsOnTurn,realPENKeys,realShredKeys,realVulnKeys,actionTables,actionTags,actionTablesTarget);
            // let sumPEN = battleActions.pullPENBonus(sourceCache,targetCache,compositeCacheTag,playerStats,playerStatsONHIT,targetStatsSourceBased,targetStatsOnTurn,realPENKeys);
            let sumRES = Math.max(0.10, Math.min(2, 1 - enemyStats[resistanceKeys[element]] - enemyStats[ResistanceAll] + sumPEN));//pen caps out at -100% or 2x multi, and floor at 90% res so 0.10x multi

            //DEF
            // let sumSHRED = battleActions.pullDEFShredBonus(sourceCache,targetCache,compositeCacheTag,playerStats,playerStatsONHIT,targetStatsSourceBased,targetStatsTeamBased,targetStatsOnTurn,realShredKeys,actionTables,actionTags,actionTablesTarget);
            // let sumSHRED = battleActions.pullDEFShredBonus(playerStats,playerStatsONHIT,targetStatsSourceBased,realShredKeys);
            let enemyDEF = Math.max(0, enemyStats[DEFBase] * (1 + enemyStats[DEFP] - sumSHRED));//def shred will always be a positive value, just how I'd prefer it. So always - here
            let attackerDiffDEF = playerStats[LVL] * 10 + 200;//80 being the player's level here
            let sumDEF = 1 - (enemyDEF / (enemyDEF + attackerDiffDEF));

            //broken multi, though I'm p fuckin sure this actually can be modified later, need to revisit down the road.
            let isBroken = targetTurn.currentToughness > 0 ? 0.9 : 1;

            // let sumVULN = 1 + battleActions.pullVULNBonus(enemyStats,playerStatsONHIT,targetStatsSourceBased,ATKObject.realVulnKeys);
            // let sumVULN = 1 + battleActions.pullVULNBonus(sourceCache,targetCache,compositeCacheTag,enemyStats,playerStatsONHIT,targetStatsSourceBased,targetStatsTeamBased,targetStatsOnTurn,realVulnKeys,actionTables,actionTags,actionTablesTarget);
            let sumDR = 1;//dunno where we would apply actual DR values from enemies, but will include this for later.
            finalMulti = sourceTurn.finalMultiCounter ? battleActions.pullFinalMultiplier(sourceTurn,actionTags) : 1;

            // Outgoing DMG = Base DMG * DMG% Multiplier * DEF Multiplier * RES Multiplier * DMG Taken Multiplier * Universal DMG Reduction Multiplier * Weaken Multiplier

            // if (isEnemy) {console.log(preDMG, sumDMG, sumRES, sumDEF, isBroken, sumVULN, sumDR)}
            DMGTotalEnd = preDMG * sumDMG * sumRES * sumDEF * isBroken * sumVULN * sumDR * finalMulti;
            
            // const totalCritDMG = battleActions.pullCritDamageSUM(playerStats,enemyStats,playerStatsONHIT,targetStatsSourceBased,targetStatsTeamBased,actionTables,actionTags,actionTablesTarget);
            // const totalCritRate = battleActions.pullCritRateSUM(playerStats,enemyStats,playerStatsONHIT,targetStatsSourceBased,targetStatsTeamBased,actionTables,actionTags,actionTablesTarget);
            // let DMGTotalCrit = DMGTotalEnd * (1 + totalCritDMG);
            // let DMGTotalAVG = DMGTotalEnd * (1 + totalCritDMG * totalCritRate);
            // let DMGTotalCrit = DMGTotalEnd * (1 + totalCritDMG);


            //TODO: effect res vs EHR averages, the avg chance to apply is assigned when dots are created since that is when they can reference hits involved in the application
            //for now though, I just wanna see if dmg can line up, so not yet.
            DMGTotalAVG = DMGTotalEnd * averaged;
            
        }


        // targetTurn.currentHP -= DMGTotalAVG;
        if (!targetTurn.isEnemy) {
            const proposedDrain = targetTurn.currentHP - DMGTotalAVG;
            if (battleData.backupHPOnField && proposedDrain < 1) {
                const distanceTo1 = Math.max(1,targetTurn.currentHP - 1);
                let dmgToDeal = DMGTotalAVG - distanceTo1;
                const backupRefs = battleData.backupHPObject;
                for (let backup in backupRefs) {
                    const currentBackup = backupRefs[backup];
                    leftoverDMG = currentBackup.backupHPFunction(battleData,currentBackup,dmgToDeal);
                    //if there is a backupHP source like netherwing, then call the backup function defined on its turn object
                    //which will return the amount of dmg it could not consume

                    //in this case, if the dmg returned is 0 that means all dmg was consumed, and we can break
                    if (leftoverDMG === 0) {
                        dmgToDeal = 0;
                        break;
                    }
                    else {
                        dmgToDeal = leftoverDMG
                    }
                }
                //if the leftover dmg is 0 then the amount of dmg that would breach shields and go beyond 1hp is obv 0
                DMGTotalAVG = (dmgToDeal === 0 ? 0 : dmgToDeal) + distanceTo1;
                //otherwise, we need to assign the dmgs that backups couldn't eat, to the target to still deal it
            }
            targetTurn.currentHP -= DMGTotalAVG;
            
            poke("AllyLostHP",battleData,{targetTurn,HPLost: DMGTotalAVG});
        }
        else {targetTurn.currentHP -= DMGTotalAVG;}

        let enemyHasNoHP = targetTurn.currentHP <= 0;
        let enemyIsDeadCheck = enemyHasNoHP && !targetTurn.isDead;
        let enemyIsDead = false;
        if (enemyIsDeadCheck) {
            enemyIsDead = true;
            targetTurn.isDead = true;
            battleActions.killDesignatedEnemies(battleData,targetTurn,isEnemy,sourceTurn);
        }//we only want to declare the enemy dead once, bc an attack might have 30 hits but if they die at hit 10 we don't want to say they died 20 times after
        let DMGOverkill = 0;

        if (!isEnemy && enemyHasNoHP) {
            //only gauge overkill dmg when it would be on an enemy
            DMGOverkill = targetTurn.currentHP * -1;
            //and reset enemy HP after so that way we can see full overkill on the next in a multihit attack
            targetTurn.currentHP = 0;
        }


        let logger = battleData.isLoggyLogger;
        if (logger) {
            let hitData = {
                scalar,isBreakDOT,finalMulti,
                currentMulti,multiOf,detonateMulti,tags,element,bleedMultiOf,bleedLimit,
                DMGTotalEnd,DMGTotalAVG,DMGOverkill,averaged,
                enemyIsDead,buffName:currentBuff.buffName,
                playerData: logger ? JSON.stringify(sourceTurn) : null,
                enemyData: logger ? JSON.stringify(targetTurn) : null,
                AV:battleData.sumAV
            }
            logToBattle(battleData,{logType: "HitEnemy", hitType: "DOT", target: targetTurn.properName, source:sourceTurn.properName, hitData,enemyIsDead,sourceString:""});

            //tracking stuff
            let dmgSlot = "DOT";
            let totalsRef = battleData.battleTotal;
            const dmgTotals = totalsRef.DMG;
            const actionTotals = totalsRef.Actions;
            const overkillTotals = totalsRef.DMGOverkill;
            let sumSlotRef = dmgTotals[characterName] ??= {};
            sumSlotRef[dmgSlot] = (sumSlotRef[dmgSlot] ?? 0) + DMGTotalAVG;
            let sumSlotRef2 = actionTotals[characterName] ??= {};
            sumSlotRef2[dmgSlot] = (sumSlotRef2[dmgSlot] ?? 0) + 1;
            let sumSlotRef3 = overkillTotals[characterName] ??= {};
            sumSlotRef3[dmgSlot] = (sumSlotRef3[dmgSlot] ?? 0) + DMGOverkill;
        }
        battleData.battleDamageSUM += DMGTotalAVG;
        if (battleData.attackIsActive) {battleData.addedDMGTallyAttack += DMGTotalAVG;}

        poke("AllyDMGEnd",battleData,{targetTurn,sourceTurn,element,isDetonated,sourceOverride,isBreakDOT,DMGTotalEnd,DMGTotalAVG});
        poke("DOTDMGEnd",battleData,turnMerge);
    },
    trueDMGHitWrapper(battleData,sourceTurn,targetTurn,percentInstance,trueBase,trueCrit,trueAVG,sourceString) {
        // let playerStats = sourceTurn.statTable;
        // let playerStatsONHIT = sourceTurn.statTableONHIT;
        // let enemyStats = targetTurn.statTable;
        // let targetStatsSourceBased = targetTurn[sourceTurn.properName] ?? greatTableKnowerOfAll;
        // let targetStatsTeamBased = greatTableKnowerOfAll;
        // let targetStatsOnTurn = targetTurn.turnState ? (targetTurn.statTableONTurn ?? greatTableKnowerOfAll) : greatTableKnowerOfAll;
        // const actionTables = sourceTurn.tagSpecific;
        // const actionTablesTarget = targetTurn.tagSpecific;
        // const actionTags = ATKObject.actionTags;
        let isEnemy = false;//sourceTurn.isEnemy

        poke("TrueDMGStart",battleData,{targetTurn,sourceTurn});
        //TODO: seems I forgot to add shield handling to the additional dmg wrapper, which is why this is missing it too, go add that later when we let enemies hold shields as well, low priority
    

        // if (isEnemy) {console.log(preDMG, sumDMG, sumRES, sumDEF, isBroken, sumVULN, sumDR)}
        let DMGTotalEnd = trueBase * percentInstance;
        let DMGTotalCrit = trueCrit * percentInstance;
        let DMGTotalAVG = (trueAVG ?? trueBase) * percentInstance;


        targetTurn.currentHP -= DMGTotalAVG;
        let enemyHasNoHP = targetTurn.currentHP <= 0;
        let enemyIsDeadCheck = enemyHasNoHP && !targetTurn.isDead;
        let enemyIsDead = false;
        if (enemyIsDeadCheck) {
            enemyIsDead = true;
            targetTurn.isDead = true;
            battleActions.killDesignatedEnemies(battleData,targetTurn,isEnemy,sourceTurn);
        }//we only want to declare the enemy dead once, bc an attack might have 30 hits but if they die at hit 10 we don't want to say they died 20 times after
        let DMGOverkill = 0;

        if (!isEnemy && enemyHasNoHP) {
            //only gauge overkill dmg when it would be on an enemy
            DMGOverkill = targetTurn.currentHP * -1;
            //and reset enemy HP after so that way we can see full overkill on the next in a multihit attack
            targetTurn.currentHP = 0;
        }


        
        battleData.battleDamageSUM += DMGTotalAVG;

        if (battleData.isLoggyLogger) {
            let dmgSlot = "True";
            let totalsRef = battleData.battleTotal;
            const dmgTotals = totalsRef.DMG;
            const actionTotals = totalsRef.Actions;
            const overkillTotals = totalsRef.DMGOverkill;
            const characterName = sourceTurn.properName;
            let sumSlotRef = dmgTotals[characterName] ??= {};
            sumSlotRef[dmgSlot] = (sumSlotRef[dmgSlot] ?? 0) + DMGTotalAVG;
            let sumSlotRef2 = actionTotals[characterName] ??= {};
            sumSlotRef2[dmgSlot] = (sumSlotRef2[dmgSlot] ?? 0) + 1;
            let sumSlotRef3 = overkillTotals[characterName] ??= {};
            sumSlotRef3[dmgSlot] = (sumSlotRef3[dmgSlot] ?? 0) + DMGOverkill;
            let hitData = {
                scalar: null,
                currentMulti:percentInstance,multiOf:null,tags:["True"],element:"True",
                DMGTotalEnd,DMGTotalCrit,DMGTotalAVG,DMGOverkill,
                enemyIsDead,
                playerData: JSON.stringify(sourceTurn),
                enemyData: JSON.stringify(targetTurn),
                AV:battleData.sumAV
            }

            logToBattle(battleData,{logType: "HitEnemy", hitType: "True", target: targetTurn.properName, source:sourceTurn.properName, hitData,enemyIsDead,sourceString});
        }
        poke("TrueDMGEnd",battleData,{targetTurn,sourceTurn,DMGTotalEnd,DMGTotalCrit,DMGTotalAVG});
        
        // return {hitData,DMGTotalAVG,DMGOverkill,enemyIsDead}
    },
    attackWrapper(battleData,ATKPath,sourceTurn,ATKObject) {
        let logging = battleData.isLoggyLogger;
        if (logging) {logToBattle(battleData,{logType: "AttackStart"});}
        
        battleData.attackIsActive = true;
        battleData.addedDMGTallyAttack = 0;
        let dmgSlot = ATKPath.slot;
        let hitSplits = ATKPath.hitSplits;
        let element = ATKPath.element;

        let totalHits = 0;
        const totals = {totalAVGDMG: 0,totalBreakDMG: 0,totalBreakSuperDMG: 0,totalOverkill: 0};
        const targetsGotHit = {};
        const overBreakTotals = {};
        const overKillTotals = {};
        let enemiesThatBroke = [];

        let isEnemy = sourceTurn.isEnemy;

        const multiRef = ATKObject.multipliers;
        const {all,primary,blast,blastAOE} = multiRef;
        
        const enemyPrimary = (!isEnemy ? battleData.primaryTarget : battleData.primaryTargetEnemy) ?? null;
        const enemyBlastTargets = (!isEnemy ? battleData.blastTargets : battleData.blastTargetsEnemy) ?? null;
        const enemyBlastAOETargets = (!isEnemy ? battleData.blastAOETargets : battleData.blastAOETargetsEnemy) ?? null;

        let hitWrap = battleActions.hitWrapper;
        let quickEntry = hitSplits[0];
        let enemiesToHit = [];
        const enemyPositions = battleData.allEnemyTargets;
        // const allyPositions = battleData.allyPositions;
        const allTargetArray = !isEnemy ? enemyPositions : battleData.AOETargetsEnemy;
        if (quickEntry) {
            if (quickEntry.all) {enemiesToHit = allTargetArray;}
            else if (quickEntry.blast) {enemiesToHit = !isEnemy ? battleData.fullBlastTargets : battleData.fullBlastTargetsEnemy;}
            else {enemiesToHit = [enemyPrimary];}
        }
        // poke("AttackStart",battleData,{sourceTurn,dmgSlot,enemiesToHit});
        
        let hitTypePrimary = "primary";
        let hitTypeBlast = "blast";
        let hitTypeBlastAOE = "blastAOE";
        let hitTypeAll = "all";

        const generalInfo = {sourceTurn,enemiesToHit,targetsGotHit,enemiesThatBroke,dmgSlot,ATKObject,element,totals,overBreakTotals,overKillTotals};
        poke("AttackStart",battleData,generalInfo);
        
        const allLength = allTargetArray.length;
        const blastLength = enemyBlastTargets.length;
        const blastAOELength = enemyBlastAOETargets.length;

        const hitsLengthTotal = hitSplits.length;
        let isLastHit = false;
        if (all && !primary) {
            totalHits += allLength * hitsLengthTotal;
            for (let i=0;i<hitsLengthTotal;i++) {
                isLastHit = i === hitsLengthTotal-1 ? true : false;
                const atkEntry = hitSplits[i];
                for (let ee=0;ee<allTargetArray.length;ee++) {
                    const currentTarget = allTargetArray[ee];
                    if (currentTarget.cantBeTargeted) {continue;}
                    hitWrap(battleData,allTargetArray[ee],atkEntry,hitTypeAll,generalInfo,isLastHit,false);
                }
            }
        }
        else if (blast && blastLength) {//in practice blast should never proc without a primary target also
            totalHits += hitsLengthTotal * (1 + blastLength);
            
            for (let i=0;i<hitsLengthTotal;i++) {
                isLastHit = i === hitsLengthTotal-1 ? true : false;
                const atkEntry = hitSplits[i];
                hitWrap(battleData,enemyPrimary,atkEntry,hitTypePrimary,generalInfo,isLastHit,false);
                
                if (!atkEntry.blast) {continue;}
                for (let enemyEntry of enemyBlastTargets) {
                    hitWrap(battleData,enemyEntry,atkEntry,hitTypeBlast,generalInfo,isLastHit,false);
                }
            }
        }
        else if (blastAOE && blastAOELength) {//in practice blast should never proc without a primary target also
            // totalHits += hitsLengthTotal * (1 + blastLength);
            
            for (let i=0;i<hitsLengthTotal;i++) {
                isLastHit = i === hitsLengthTotal-1 ? true : false;
                const atkEntry = hitSplits[i];
                if (atkEntry.blastAOE) {
                    for (let enemyEntry of enemyBlastAOETargets) {
                        hitWrap(battleData,enemyEntry,atkEntry,hitTypeBlastAOE,generalInfo,isLastHit,false);
                    }
                    totalHits += enemyBlastAOETargets.length;
                }
                if (atkEntry.primary) {
                    hitWrap(battleData,enemyPrimary,atkEntry,hitTypePrimary,generalInfo,isLastHit,false);
                    totalHits += 1;
                }
            }
        }
        else {//if blast is ever true but there are no blast targets, primary will still be true so it will default to this instead (jk pure bounce attacks for instance can skip all 3)
            totalHits += hitsLengthTotal;
            for (let i=0;i<hitsLengthTotal;i++) {
                const atkEntry = hitSplits[i];
                if (atkEntry.primary) {
                    isLastHit = i === hitsLengthTotal-1 ? true : false;
                    hitWrap(battleData,enemyPrimary,atkEntry,hitTypePrimary,generalInfo,isLastHit,false);
                }
                else if (atkEntry.all) {
                    isLastHit = i === hitsLengthTotal-1 ? true : false;
                    for (let ee=0;ee<allTargetArray.length;ee++) {
                        const currentTarget = allTargetArray[ee];
                        if (currentTarget.cantBeTargeted) {continue;}
                        hitWrap(battleData,allTargetArray[ee],atkEntry,hitTypeAll,generalInfo,isLastHit,false);
                    }
                }
            }
        }
        

        const bounceRef = ATKObject.bounceData;
        if (bounceRef) {
            const bounceOrder = battleData.bounceOrder;
            const bounceCount = bounceRef.bounceCount
            const isSingleTargetBounce = bounceRef.isSingleTargetBounce;
            // battleData.bounceOrder = bounceOrder
            const atkEntry = bounceRef.hitSplit;
            const isLastHit = true;
            const bounceLength = bounceOrder.length;
            let currentEnemyIndex = 0;
            const isBounce = true;

            if (atkEntry.all) {
                totalHits += allTargetArray.length * bounceCount;
                for (let i=0;i<bounceCount;i++) {
                    // totalHits += allTargetArray.length;
                    for (let enemyTarget of allTargetArray) {
                        hitWrap(battleData,enemyTarget,atkEntry,hitTypeAll,generalInfo,isLastHit,isBounce);
                    }
                }
            }
            else if (atkEntry.blast) {
                //TODO: bounce logic on a blast type bounce, that could be weird
            }
            else {
                for (let i=0;i<bounceCount;i++) {
                    if (currentEnemyIndex === bounceLength) {currentEnemyIndex = 0;}
                    const currentEnemy = isSingleTargetBounce ? enemyPrimary : bounceOrder[currentEnemyIndex];
                    currentEnemyIndex++;

                    if (currentEnemy === undefined) {continue;}

                    if (currentEnemy.isDead) {continue;}//skip dead bois
                    hitWrap(battleData,currentEnemy,atkEntry,hitTypePrimary,generalInfo,isLastHit,isBounce);
                    totalHits += 1;//since we skip dead guys, gotta increments hits inside the loop
                }
            }

            // for (let i=0;i<hitsLengthTotal;i++) {
            //     isLastHit = i === hitsLengthTotal-1 ? true : false;
            //     const atkEntry = hitSplits[i];
            //     hitWrap(battleData,enemyPrimary,atkEntry,hitTypePrimary,generalInfo,isLastHit,isBounce);
            // }

            // bounceData: {
            //     primary: values[1],
            //     bounceCount: 10,
            //     hitSplit: {
            //         "primary": {
            //             "hitRatio": 1,
            //             "energyRatio": 1,
            //             "toughness": 20
            //           },
            //         "blast": null,
            //         "all": null,
            //         "allEnemiesHit": null,
            //         "unknownTypers": false
            //     },
            // }
        }


        poke("AttackDMGEnd",battleData,generalInfo);
        // // kafkaUltimateDOT(battleData,sourceTurn,targetTurn,usableHits)
        // dotApplyFunction: logicRef.skillFunctions.kafkaUltimateDOT
        ATKObject.dotApplyFunction?.(battleData,sourceTurn,generalInfo);
        // if (ATKObject.dotApplyFunction)

        poke("AdditionalTriggerAttackEnd",battleData,generalInfo);
        poke("TrueTriggerAttackEnd",battleData,generalInfo);

    

        // poke("DetonateDOTTriggerAttackEnd",battleData,generalInfo);

        // const possibleDotMulti = ATKObject.detonateDotsByMulti;
        ATKObject.dotDetonateFunction?.(battleData,sourceTurn,generalInfo);
        // if (possibleDotMulti) {battleActions.dotDetonateWrapper(battleData,sourceTurn,possibleDotMulti,targetTurn);}
        // battleActions.dotDetonateWrapper(battleData,sourceTurn,detonateDotsByMulti,targetTurn,"Kafka Talent Detonate");

        poke("AttackEnd",battleData,generalInfo);


        
        if (!isEnemy) {
            if (logging) {
                let totalsRef = battleData.battleTotal;
                let characterName = sourceTurn.properName;
                let sumSlotRef = totalsRef.DMG[characterName] ??= {};
                sumSlotRef[dmgSlot] = (sumSlotRef[dmgSlot] ?? 0) + totals.totalAVGDMG;
                let sumSlotRef2 = totalsRef.Actions[characterName] ??= {};
                sumSlotRef2[dmgSlot] = (sumSlotRef2[dmgSlot] ?? 0) + 1;
                let sumSlotRef3 = totalsRef.DMGOverkill[characterName] ??= {};
                sumSlotRef3[dmgSlot] = (sumSlotRef3[dmgSlot] ?? 0) + totals.totalOverkill;
            }
            battleData.battleDamageSUM += totals.totalAVGDMG;
        }
        // totals.totalAVGDMG += addedDMGTally;//don't wanna include the additional dmg in the attack total for tracking, but do want it in the total atk dmg for logging/graphing, additional dmg adds to its own tracking
        // if (totals.totalBreakDMG>0) {sumSlotRef.Break = (sumSlotRef.Break ?? 0) + totals.totalBreakDMG;}

        if (enemiesThatBroke.length) {
            for (let brokenEnemy of enemiesThatBroke) {
                if (!brokenEnemy.isDead) {battleActions.actionAdvance(-0.25,brokenEnemy,battleData,"Break: Action Delay",true);}
            }
        }

        battleData.attackIsActive = false;
        // poke("AttackEnd",battleData,generalInfo);
        if (logging) {logToBattle(battleData,{logType: "AttackEnd", totalHits, totalAVGDMG:battleData.addedDMGTallyAttack, isEnemy});}
        battleData.addedDMGTallyAttack = 0;

        if (isEnemy && battleData.onHitEnergyGain) {
            const energyGain = battleActions.updateEnergy;
            const hitEnergyGain = battleData.onHitEnergyAmount;
            const namedTurns = battleData.nameBasedTurns;
            for (let targetHit in targetsGotHit) {
                // eventOwner: ownerTurn.name
                let currentTurn = namedTurns[targetHit];
                // console.log(currentTurn)
                if (currentTurn.isMemosprite) {currentTurn = namedTurns[currentTurn.eventOwner];}
                energyGain(battleData,hitEnergyGain,currentTurn,false,"Hit Received");
            }
        }

        return {targetsGotHit}
    },
    attackWrapperChained(battleData,ATKPath,sourceTurn,ATKObject,attackState,chainedAttackRef) {
        let logging = battleData.isLoggyLogger;
        if (logging) {logToBattle(battleData,{logType: "AttackStart"});}
        
        battleData.attackIsActive = true;
        battleData.addedDMGTallyAttack = 0;
        let dmgSlot = ATKPath.slot;
        let hitSplits = ATKPath.hitSplits;
        let element = ATKPath.element;

        let totalHits = 0;
        const totals = {
            totalAVGDMG: 0,
            totalBreakDMG: 0,
            totalBreakSuperDMG: 0,
            totalOverkill: 0
        }

        if (chainedAttackRef) {
            chainedAttackRef.enemiesThatBroke = [];
        }
        const targetsGotHit = chainedAttackRef ? chainedAttackRef.targetsGotHit : {};
        const overBreakTotals = chainedAttackRef ? chainedAttackRef.overBreakTotals : {};
        const overKillTotals = chainedAttackRef ? chainedAttackRef.overKillTotals : {};
        // const overKillTotals = {};
        let enemiesThatBroke = chainedAttackRef ? chainedAttackRef.enemiesThatBroke : [];

        

        let isEnemy = sourceTurn.isEnemy;

        const multiRef = ATKObject.multipliers;
        const isAll = multiRef.all;
        const isPrimary = multiRef.primary;
        const isBlast = multiRef.blast;
        // const isBounce = multiRef.bounce;
        
        const enemyPrimary = battleData.primaryTarget ?? null;
        const enemyBlastTargets = battleData.blastTargets ?? null;

        let hitWrap = battleActions.hitWrapper;
        let quickEntry = hitSplits[0];
        let enemiesToHit = [];
        const enemyPositions = battleData.allEnemyTargets;
        const allyPositions = battleData.allyPositions;
        const allTargetArray = !isEnemy ? enemyPositions : allyPositions;
        if (quickEntry) {
            if (quickEntry.all) {enemiesToHit = allTargetArray;}
            else if (quickEntry.blast) {enemiesToHit = battleData.fullBlastTargets;}
            else {enemiesToHit = [enemyPrimary];}
        }
        // poke("AttackStart",battleData,{sourceTurn,dmgSlot,enemiesToHit});
        
        let hitTypePrimary = "primary";
        let hitTypeBlast = "blast";
        let hitTypeAll = "all";

        // console.log(sourceTurn.tagSpecific)
        // const hasTagTables = !isEnemy && Object.keys(sourceTurn.tagSpecific).length;
        const generalInfo = chainedAttackRef ?? {sourceTurn,enemiesToHit,targetsGotHit,enemiesThatBroke,dmgSlot,ATKObject,element,totals,overBreakTotals,overKillTotals};
        generalInfo.ATKObject = ATKObject;
        if (!attackState || attackState === "Start") {poke("AttackStart",battleData,generalInfo);}
        
        const allLength = allTargetArray.length;
        const blastLength = enemyBlastTargets.length;

        const hitsLengthTotal = hitSplits.length;
        let isLastHit = false;
        if (isAll) {
            totalHits += allLength * hitsLengthTotal;
            for (let i=0;i<hitsLengthTotal;i++) {
                isLastHit = i === hitsLengthTotal-1 ? true : false;
                const atkEntry = hitSplits[i];
                for (let ee=0;ee<allLength;ee++) {hitWrap(battleData,allTargetArray[ee],atkEntry,hitTypeAll,generalInfo,isLastHit,false);}
            }
        }
        else if (isBlast && blastLength) {//in practice blast should never proc without a primary target also
            totalHits += hitsLengthTotal * (1 + blastLength);
            
            for (let i=0;i<hitsLengthTotal;i++) {
                isLastHit = i === hitsLengthTotal-1 ? true : false;
                const atkEntry = hitSplits[i];
                hitWrap(battleData,enemyPrimary,atkEntry,hitTypePrimary,generalInfo,isLastHit,false);

                if (!atkEntry.blast) {continue;}
                for (let enemyEntry of enemyBlastTargets) {hitWrap(battleData,enemyEntry,atkEntry,hitTypeBlast,generalInfo,isLastHit,false);}
            }
        }
        else if (isPrimary) {//if blast is ever true but there are no blast targets, primary will still be true so it will default to this instead (jk pure bounce attacks for instance can skip all 3)
            totalHits += hitsLengthTotal;
            for (let i=0;i<hitsLengthTotal;i++) {
                isLastHit = i === hitsLengthTotal-1 ? true : false;
                const atkEntry = hitSplits[i];
                hitWrap(battleData,enemyPrimary,atkEntry,hitTypePrimary,generalInfo,isLastHit,false);
            }
        }

        const bounceRef = ATKObject.bounceData;
        if (bounceRef) {
            const bounceOrder = battleData.bounceOrder;
            const bounceCount = bounceRef.bounceCount
            // battleData.bounceOrder = bounceOrder
            const atkEntry = bounceRef.hitSplit;
            const isLastHit = true;
            const bounceLength = bounceOrder.length;
            let currentEnemyIndex = 0;
            const isBounce = true;

            if (atkEntry.all) {
                totalHits += allTargetArray.length * bounceCount;
                for (let i=0;i<bounceCount;i++) {
                    // totalHits += allTargetArray.length;
                    for (let enemyTarget of allTargetArray) {
                        hitWrap(battleData,enemyTarget,atkEntry,hitTypeAll,generalInfo,isLastHit,isBounce);
                    }
                }
            }
            else if (atkEntry.blast) {
                //TODO: bounce logic on a blast type bounce, that could be weird
            }
            else {
                for (let i=0;i<bounceCount;i++) {
                    if (currentEnemyIndex === bounceLength) {currentEnemyIndex = 0;}
                    const currentEnemy = bounceOrder[currentEnemyIndex];
                    currentEnemyIndex++;
                    if (battleData.battleIsOver) {break;}
                    if (currentEnemy.isDead) {i--;continue;}//skip dead bois
                    hitWrap(battleData,currentEnemy,atkEntry,hitTypePrimary,generalInfo,isLastHit,isBounce);
                    totalHits += 1;//since we skip dead guys, gotta increments hits inside the loop
                }
            }

            // for (let i=0;i<hitsLengthTotal;i++) {
            //     isLastHit = i === hitsLengthTotal-1 ? true : false;
            //     const atkEntry = hitSplits[i];
            //     hitWrap(battleData,enemyPrimary,atkEntry,hitTypePrimary,generalInfo,isLastHit,isBounce);
            // }

            // bounceData: {
            //     primary: values[1],
            //     bounceCount: 10,
            //     hitSplit: {
            //         "primary": {
            //             "hitRatio": 1,
            //             "energyRatio": 1,
            //             "toughness": 20
            //           },
            //         "blast": null,
            //         "all": null,
            //         "allEnemiesHit": null,
            //         "unknownTypers": false
            //     },
            // }
        }

        // let addedDMGTally = 0;
        const newTotals = generalInfo.totals;
        if (!attackState || attackState === "End" || battleData.battleIsOver) {
            poke("AttackDMGEnd",battleData,generalInfo);

            // // kafkaUltimateDOT(battleData,sourceTurn,targetTurn,usableHits)
            // dotApplyFunction: logicRef.skillFunctions.kafkaUltimateDOT
            ATKObject.dotApplyFunction?.(battleData,sourceTurn,generalInfo);
            // if (ATKObject.dotApplyFunction)

            poke("AdditionalTriggerAttackEnd",battleData,generalInfo);
            poke("TrueTriggerAttackEnd",battleData,generalInfo);
            // poke("DetonateDOTTriggerAttackEnd",battleData,generalInfo);

            // const possibleDotMulti = ATKObject.detonateDotsByMulti;
            ATKObject.dotDetonateFunction?.(battleData,sourceTurn,generalInfo);


            poke("AttackEnd",battleData,generalInfo);


            
            let totalsRef = battleData.battleTotal;
            let characterName = sourceTurn.properName;
            let sumSlotRef = totalsRef.DMG[characterName] ??= {};
            sumSlotRef[dmgSlot] = (sumSlotRef[dmgSlot] ?? 0) + newTotals.totalAVGDMG;
            let sumSlotRef2 = totalsRef.Actions[characterName] ??= {};
            sumSlotRef2[dmgSlot] = (sumSlotRef2[dmgSlot] ?? 0) + 1;
            let sumSlotRef3 = totalsRef.DMGOverkill[characterName] ??= {};
            sumSlotRef3[dmgSlot] = (sumSlotRef3[dmgSlot] ?? 0) + newTotals.totalOverkill;

            if (!isEnemy) {battleData.battleDamageSUM += newTotals.totalAVGDMG;}
        }
        

        
        
        // if (possibleDotMulti) {battleActions.dotDetonateWrapper(battleData,sourceTurn,possibleDotMulti,targetTurn);}
        // battleActions.dotDetonateWrapper(battleData,sourceTurn,detonateDotsByMulti,targetTurn,"Kafka Talent Detonate");

        // if (!attackState || attackState === "End") {poke("AttackEnd",battleData,generalInfo);}
        // poke("AttackEnd",battleData,generalInfo);
        // if (logging) {logToBattle(battleData,{logType: "AttackEnd", totalHits, totalAVGDMG:(totals.totalAVGDMG + totals.totalBreakDMG + totals.totalBreakSuperDMG), isEnemy});}


        

        

        if (enemiesThatBroke.length) {
            for (let brokenEnemy of enemiesThatBroke) {
                if (!brokenEnemy.isDead) {battleActions.actionAdvance(-0.25,brokenEnemy,battleData,"Break: Action Delay",true);}
            }
        }

        battleData.attackIsActive = false;
        
        // poke("AttackEnd",battleData,generalInfo);
        if (logging) {logToBattle(battleData,{logType: "AttackEnd", totalHits, totalAVGDMG:battleData.addedDMGTallyAttack, isEnemy});}
        battleData.addedDMGTallyAttack = 0;

        if (isEnemy && battleData.onHitEnergyGain) {
            const energyGain = battleActions.updateEnergy;
            const hitEnergyGain = battleData.onHitEnergyAmount;
            const namedTurns = battleData.nameBasedTurns;
            for (let targetHit in targetsGotHit) {
                // eventOwner: ownerTurn.name
                let currentTurn = namedTurns[targetHit];
                // console.log(currentTurn)
                if (currentTurn.isMemosprite) {currentTurn = namedTurns[currentTurn.eventOwner];}
                energyGain(battleData,hitEnergyGain,currentTurn,false,"Hit Received");
            }
        }

        return generalInfo
        // return {generalInfo.targetsGotHit}
    },
    attackWrapperJoint(battleData,ATKPath,sourceTurn,sourceTurn2,ATKObject,ATKObject2) {
        let logging = battleData.isLoggyLogger;
        if (logging) {logToBattle(battleData,{logType: "AttackStart"});}
        
        battleData.attackIsActive = true;
        battleData.addedDMGTallyAttack = 0;
        let dmgSlot = ATKPath.slot;
        let hitSplits = ATKPath.hitSplits;
        let element = ATKPath.element;

        let totalHits = 0;
        const totals = {
            totalAVGDMG: 0,
            totalBreakDMG: 0,
            totalBreakSuperDMG: 0,
            totalOverkill: 0
        }
        const totals2 = {
            totalAVGDMG: 0,
            totalBreakDMG: 0,
            totalBreakSuperDMG: 0,
            totalOverkill: 0
        }
        const targetsGotHit = {};
        const overBreakTotals = {};
        const overKillTotals = {};
        let enemiesThatBroke = [];

        let isEnemy = sourceTurn.isEnemy;

        const multiRef = ATKObject.multipliers;
        const isAll = multiRef.all;
        const isPrimary = multiRef.primary;
        const isBlast = multiRef.blast;
        
        const enemyPrimary = battleData.primaryTarget ?? null;
        const enemyBlastTargets = battleData.blastTargets ?? null;

        let hitWrap = battleActions.hitWrapper;
        let quickEntry = hitSplits[0];
        let enemiesToHit = [];
        const enemyPositions = battleData.allEnemyTargets;
        const allyPositions = battleData.allyPositions;
        const allTargetArray = !isEnemy ? enemyPositions : allyPositions;
        if (quickEntry) {
            if (quickEntry.all) {enemiesToHit = allTargetArray;}
            else if (quickEntry.blast) {enemiesToHit = battleData.fullBlastTargets;}
            else {enemiesToHit = [enemyPrimary];}
        }
        //rn this assumes that no attack can ever have varying targeting in the hitsplits, which might not hold true later
        // poke("AttackStart",battleData,{sourceTurn,dmgSlot,enemiesToHit});
        
        let hitTypePrimary = "primary";
        let hitTypeBlast = "blast";
        let hitTypeAll = "all";

        // console.log(sourceTurn.tagSpecific)
        // const hasTagTables = !isEnemy && Object.keys(sourceTurn.tagSpecific).length;
        const isJointAttack = true;
        const generalInfo = {sourceTurn,enemiesToHit,targetsGotHit,enemiesThatBroke,dmgSlot,ATKObject,element,totals,overBreakTotals,overKillTotals,isJointAttack};
        const generalInfo2 = {sourceTurn:sourceTurn2,enemiesToHit,targetsGotHit,enemiesThatBroke,dmgSlot,ATKObject:ATKObject2,element,totals:totals2,overBreakTotals,overKillTotals,isJointAttack};
        poke("AttackStart",battleData,generalInfo);
        const allLength = allTargetArray.length;
        const blastLength = enemyBlastTargets.length;

        const hitsLengthTotal = hitSplits.length;
        let isLastHit = false;


        // lastHit.isPrimaryLastHit = true;
        // hitsRef.push(
        //     {
        //         "primary": {
        //             "hitRatio": 1,
        //             "energyRatio": 1,
        //             "toughness": 10
        //         },
        //         "blast": {
        //             "hitRatio": 1,
        //             "toughness": 5
        //         },
        //         "all": null,
        //         "allEnemiesHit": null,
        //         "unknownTypers": false,
        //         "isSecondarySource": true,
        //         "isSecondaryLastHit": true
        //     }
        // )

        if (isAll) {
            totalHits += allLength * hitsLengthTotal;
            for (let i=0;i<hitsLengthTotal;i++) {
                isLastHit = i === hitsLengthTotal-1 ? true : false;
                const atkEntry = hitSplits[i];
                let infoRef = atkEntry.isMemo ? generalInfo2 : generalInfo;
                for (let currentTarget of allTargetArray) {
                    // if (currentTarget.isDead) {continue;}
                    // console.log("attack start, enemies: ",newAll.length,allTargetArray.length)
                    // console.log(sourceTurn2.activeFinalMultipliers)
                    hitWrap(battleData,currentTarget,atkEntry,hitTypeAll,infoRef,isLastHit,false);
                }
                if (atkEntry.isSourceLastHit) {
                    poke("AttackDMGEnd",battleData,infoRef);
                    poke("AdditionalTriggerAttackEnd",battleData,infoRef);
                    poke("TrueTriggerAttackEnd",battleData,infoRef);
                }
                // for (let ee=0;ee<allLength;ee++) {hitWrap(battleData,allTargetArray[ee],atkEntry,hitTypeAll,generalInfo2,isLastHit,false);}
            }
        }
        else if (isBlast && blastLength) {//in practice blast should never proc without a primary target also
            totalHits += hitsLengthTotal * (1 + blastLength);
            
            for (let i=0;i<hitsLengthTotal;i++) {
                isLastHit = i === hitsLengthTotal-1 ? true : false;
                const atkEntry = hitSplits[i];
                let infoRef = atkEntry.isMemo ? generalInfo2 : generalInfo;
                hitWrap(battleData,enemyPrimary,atkEntry,hitTypePrimary,infoRef,isLastHit,false);
                if (atkEntry.blast) {for (let enemyEntry of enemyBlastTargets) {hitWrap(battleData,enemyEntry,atkEntry,hitTypeBlast,infoRef,isLastHit,false);}}
                if (atkEntry.isSourceLastHit) {
                    poke("AttackDMGEnd",battleData,infoRef);
                    poke("AdditionalTriggerAttackEnd",battleData,infoRef);
                    // for (let addedDMG of battleData.addedDMGTallyAttack) {
                    //     addedDMGTally += addedDMG.DMGTotalAVG;
                    //     // {hitData,DMGTotalAVG,DMGOverkill,enemyIsDead}
                    // }
                    battleData.addedDMGTallyAttack = [];
                }
                // if (isLastHit) {poke("AttackEndJointSection",battleData,generalInfo);}

                // hitWrap(battleData,enemyPrimary,atkEntry,hitTypePrimary,generalInfo2,isLastHit,false);
                // if (atkEntry.blast) {for (let enemyEntry of enemyBlastTargets) {hitWrap(battleData,enemyEntry,atkEntry,hitTypeBlast,generalInfo2,isLastHit,false);}}
                // if (isLastHit) {poke("AttackEndJointSection",battleData,generalInfo2);}
                
            }
        }
        else if (isPrimary) {//if blast is ever true but there are no blast targets, primary will still be true so it will default to this instead
            totalHits += hitsLengthTotal;
            for (let i=0;i<hitsLengthTotal;i++) {
                isLastHit = i === hitsLengthTotal-1 ? true : false;
                const atkEntry = hitSplits[i];
                let infoRef = atkEntry.isMemo ? generalInfo2 : generalInfo;
                hitWrap(battleData,enemyPrimary,atkEntry,hitTypePrimary,infoRef,isLastHit,false);
                if (atkEntry.isSourceLastHit) {
                    poke("AttackDMGEnd",battleData,infoRef);
                    poke("AdditionalTriggerAttackEnd",battleData,infoRef);
                    poke("TrueTriggerAttackEnd",battleData,infoRef);
                }
                // hitWrap(battleData,enemyPrimary,atkEntry,hitTypePrimary,generalInfo2,isLastHit,false);
            }
        }
        //problem is this way while faster, does allow for dynamic hit types in hitsplits, so if hit1 in an attack is blast but hit2 is all and hit3 is primary, then this doesn't work for that
        //however I think every character that does something like that(acheron) breaks them into separate attacks, rather than diff hits in the same attack
        //so we leave this be for now and look at attackWrapFullHandling() laster if we end up needing it, bc I left a comment in there for how I was doing it before and it would work with that
        //so we could if needed just have everyone with standard attacks call this one, and people with dynamic hitsplits use the other one, but I leave it for now.

        const bounceRef = ATKObject.bounceData;
        if (bounceRef) {
            const bounceOrder = battleData.bounceOrder;
            const bounceCount = bounceRef.bounceCount
            // battleData.bounceOrder = bounceOrder
            const atkEntry = bounceRef.hitSplit;
            const isLastHit = true;
            const bounceLength = bounceOrder.length;
            let currentEnemyIndex = 0;
            const isBounce = true;

            if (atkEntry.all) {
                totalHits += allTargetArray.length * bounceCount * 2;
                for (let i=0;i<bounceCount;i++) {
                    // totalHits += allTargetArray.length;
                    for (let enemyTarget of allTargetArray) {
                        hitWrap(battleData,enemyTarget,atkEntry,hitTypeAll,generalInfo,isLastHit,isBounce);
                        hitWrap(battleData,enemyTarget,atkEntry,hitTypeAll,generalInfo2,isLastHit,isBounce);
                    }
                }
            }
            else if (atkEntry.blast) {
                //TODO: bounce logic on a blast type bounce, that could be weird
            }
            else {
                for (let i=0;i<bounceCount;i++) {
                    if (currentEnemyIndex === bounceLength) {currentEnemyIndex = 0;}
                    const currentEnemy = bounceOrder[currentEnemyIndex];
                    currentEnemyIndex++;
                    if (currentEnemy.isDead) {continue;}//skip dead bois
                    hitWrap(battleData,currentEnemy,atkEntry,hitTypePrimary,generalInfo,isLastHit,isBounce);
                    hitWrap(battleData,currentEnemy,atkEntry,hitTypePrimary,generalInfo2,isLastHit,isBounce);
                    totalHits += 2;//since we skip dead guys, gotta increments hits inside the loop
                }
            }
        }

        poke("AttackEnd",battleData,generalInfo);
        // if (logging) {logToBattle(battleData,{logType: "AttackEnd", totalHits, totalAVGDMG:(totals.totalAVGDMG + totals.totalBreakDMG + totals.totalBreakSuperDMG), isEnemy});}


        if (!isEnemy) {battleData.battleDamageSUM += totals.totalAVGDMG + totals2.totalAVGDMG;}

        if (enemiesThatBroke.length) {
            const actionAdvance = battleActions.actionAdvance;
            for (let brokenEnemy of enemiesThatBroke) {
                if (!brokenEnemy.isDead) {battleActions.actionAdvance(-0.25,brokenEnemy,battleData,"Break: Action Delay",true);}
            }
        }

        battleData.attackIsActive = false;
        battleData.addedDMGTallyAttack = 0;
        // poke("AttackEnd",battleData,generalInfo);
        if (logging) {
            let totalsRef = battleData.battleTotal;
            let characterName = sourceTurn.properName;
            let sumSlotRef = totalsRef.DMG[characterName] ??= {};
            sumSlotRef[dmgSlot] = (sumSlotRef[dmgSlot] ?? 0) + totals.totalAVGDMG;
            let sumSlotRef2 = totalsRef.Actions[characterName] ??= {};
            sumSlotRef2[dmgSlot] = (sumSlotRef2[dmgSlot] ?? 0) + 1;
            let sumSlotRef3 = totalsRef.DMGOverkill[characterName] ??= {};
            sumSlotRef3[dmgSlot] = (sumSlotRef3[dmgSlot] ?? 0) + totals.totalOverkill;

            let characterName2 = sourceTurn2.properName;
            let _2sumSlotRef = totalsRef.DMG[characterName2] ??= {};
            _2sumSlotRef[dmgSlot] = (_2sumSlotRef[dmgSlot] ?? 0) + totals2.totalAVGDMG;
            let _2sumSlotRef2 = totalsRef.Actions[characterName] ??= {};
            _2sumSlotRef2[dmgSlot] = (_2sumSlotRef2[dmgSlot] ?? 0) + 1;
            let _2sumSlotRef3 = totalsRef.DMGOverkill[characterName] ??= {};
            _2sumSlotRef3[dmgSlot] = (_2sumSlotRef3[dmgSlot] ?? 0) + totals2.totalOverkill;
            
            logToBattle(battleData,{logType: "AttackEnd", totalHits, totalAVGDMG:totals.totalAVGDMG + totals2.totalAVGDMG, isEnemy});
        }

        if (isEnemy && battleData.onHitEnergyGain) {
            const energyGain = battleActions.updateEnergy;
            const hitEnergyGain = battleData.onHitEnergyAmount;
            const namedTurns = battleData.nameBasedTurns;
            for (let targetHit in targetsGotHit) {
                // eventOwner: ownerTurn.name

                let currentTurn = namedTurns[targetHit];
                // console.log(currentTurn)
                if (currentTurn.isMemosprite) {currentTurn = namedTurns[currentTurn.eventOwner]}
                energyGain(battleData,hitEnergyGain,namedTurns[targetHit],false,"Hit Received");
            }
        }

        return {targetsGotHit}
    },
    attackWrapFullHandling() {
        // for (let i=0;i<hitSplits.length;i++) {
        //     const atkEntry = hitSplits[i];
        //     if (isAll && atkEntry.all) {
        //         totalHits += allLength;
        //         for (let ee=0;ee<allLength;ee++) {hitWrap(battleData,allTargetArray[ee],atkEntry,hitTypeAll,generalInfo);}
        //     }
        //     else if (isPrimary && atkEntry.primary && enemyPrimary) {
        //         totalHits ++;
        //         hitWrap(battleData,enemyPrimary,atkEntry,hitTypePrimary,generalInfo);

        //         if (isBlast && atkEntry.blast && blastLength) {//in practice blast should never proc without a primary target also
        //             totalHits += blastLength;
        //             for (let enemyEntry of enemyBlastTargets) {hitWrap(battleData,enemyEntry,atkEntry,hitTypeBlast,generalInfo);}
        //         }
        //     }
        // }
    },
    killDesignatedEnemies(battleData,targetTurn,isEnemy,sourceTurn) {
        // battleActions.killDesignatedEnemies(battleData,targetTurn,false,sourceTurn);
        let giveEnergy = !isEnemy;
        let energyDeath = 10;
        //kinda counterintuitive on my part but if it !isEnemy that means an ally was responsible for killing these targets

        let killer = sourceTurn.isMemosprite ? battleData.nameBasedTurns[sourceTurn.eventOwner] : sourceTurn;
        let killed = targetTurn;
        if (!isEnemy) {//{sourceTurn,targetTurn:currentTarget}
            // console.log(enemyDeath.properName)


            


            //find the enemy position and remove it from the enemy lineup and turn order
            const indexToRemove = battleData.enemyPositions.indexOf(killed);
            const indexToRemove2 = battleData.nextTurnAV.indexOf(killed);
            battleData.enemyPositions.splice(indexToRemove, 1);
            battleData.nextTurnAV.splice(indexToRemove2, 1);

            poke("EnemyDied",battleData,{sourceTurn, enemyKilled:killed});
            
            if (battleData.isLoggyLogger) {
                logToBattle(battleData,{logType: "EnemyDiedNote", enemyKilled:killed.properName});
                logToBattle(battleData,{logType: "EnemyDied", source:killer.properName, enemyKilled:killed.properName});
            }
            if (giveEnergy) {battleActions.updateEnergy(battleData,energyDeath,killer,false,"Enemy Killed");}
            battleData.enemiesRemaining -= 1;
            
        
        }

        if (battleData.enemiesRemaining === 0) {
            // battleData.wavesToRun = battleSettings.totalWaves;
            // battleData.wavesCompleted = 0;
            battleData.wavesCompleted += 1;
            if (battleData.wavesCompleted === battleData.wavesToRun) {
                battleData.battleIsOver = true;
            }
            else {
                battleData.readyForNewWave = true;
                const nextAV = battleData.nextTurnAV;

                for (let turnEntity of nextAV) {turnEntity.turnShouldEnd = true;}
                //if anything was in the middle of a turn with no action assigned yet, this should break their turn and return to the turn order so we can apply a new wave

                return;
            }

            
        }
        if (!isEnemy) {
            //then once done, redefine the enemy targets available
            battleActions.assignAttackTargets(battleData);
        }
        // console.log(battleData.enemiesRemaining)
    },
    killDesignatedAllies(battleData,targetTurn,isEnemy,sourceTurn) {

        const allyPositions = battleData.allyPositions;
        const nextAV = battleData.nextTurnAV;
        let killer = sourceTurn;
        let killed = targetTurn;
        // console.log(enemyDeath.properName)
        poke("AllyDied",battleData,{sourceTurn, targetTurn:killed});
        // poke("AllyDied",battleData,{targetTurn:deathTurn});
        if (battleData.isLoggyLogger) {
            logToBattle(battleData,{logType: "EnemyDiedNote", enemyKilled:killed.properName, isEnemy: true});
            if (!targetTurn.isMemosprite) {logToBattle(battleData,{logType: "EnemyDied", source:killer.properName, enemyKilled:killed.properName, isEnemy: true});}
        }

        //find the enemy position and remove it from the enemy lineup and turn order
        const indexToRemove = allyPositions.indexOf(killed);
        const indexToRemove2 = nextAV.indexOf(killed);
        allyPositions.splice(indexToRemove, 1);
        nextAV.splice(indexToRemove2, 1);
        //TODO: revive handling here

        if (!targetTurn.isUniqueEvent) {
            battleData.charactersRemaining -= 1;
        }
        else if (targetTurn.isMemosprite) {targetTurn?.deathFunction?.(battleData,targetTurn,targetTurn.deathParam)}
        //obv there can be cases where the memo owner dies but the memo itself would still be left before their function procs

        if (battleData.charactersRemaining === 0) {
            battleData.battleIsOver = true;
            battleData.battleFailed = true;
        }
        else {
            if (targetTurn.memospriteEventRef) {
                const memoTurn = targetTurn[targetTurn.memospriteEventRef];
                if (memoTurn.isActive) {targetTurn?.deathFunction?.(battleData,targetTurn,targetTurn.deathParam)}
            }
        }
        
            //then once done, redefine the enemy targets available
        battleActions.assignAttackTargetsEnemy(battleData);
        // console.log(battleData.enemiesRemaining)
    },
    nonViolentWrapper(battleData,ATKPath,charName) {
        let dmgSlot = ATKPath.slot;
        let sumSlotRef2 = battleData.battleTotal.Actions[charName] ??= {};
        sumSlotRef2[dmgSlot] = (sumSlotRef2[dmgSlot] ?? 0) + 1;
    },
    energyLookAhead(thisTurn,potentialAmount) {
        if (thisTurn.maxEnergy === thisTurn.currentEnergy) {return false}
        return (thisTurn.maxEnergy - thisTurn.currentEnergy) <= (potentialAmount * (1 + thisTurn.statTable.EnergyRegenRate));
    },
    findLowestHPAlly(battleData) {
        let allyToReturn = battleData.nameBasedTurns.char1;
        let allyRatio = allyToReturn.currentHP / allyToReturn.maxHP;
        for (let targetTurn of battleData.allyPositions) {
            if (targetTurn.name === "char1" || targetTurn.cantBeTargeted) {continue;}//we start with char1 anyways, skip
            //canBeHealed is for say summons that might exist but aren't targetable

            let currentPercent = targetTurn.currentHP / targetTurn.maxHP;
            if (currentPercent === 1) {continue;}

            let isLowerPercent = currentPercent < allyRatio;
            let hasMoreHPMax = targetTurn.maxHP > allyToReturn.maxHP;
            //if the ally we're comparing has lower %max hp, then return this ally
            //but if the %HP is the same, and this ally has more max HP, then return this ally even still.
            if (isLowerPercent || (currentPercent === allyRatio && hasMoreHPMax)) {
                allyToReturn = targetTurn;
                allyRatio = currentPercent;
            }
        }

        if (allyRatio === 1) {return null}
        else {
            return allyToReturn;
        }
    },
    healedOLD(battleData,targetTurn,sourceTurn,hitType,percent,flat,scalar,skillSlot,targetsHealedThisTurn) {
        let targetStats = targetTurn.statTable;
        let sourceStats = sourceTurn.statTable;

        poke("HealStart",battleData,{source:sourceTurn.name,target:targetTurn.name});
        let sourceMulti = 1 + sourceStats.HealingOutgoing + targetStats.HealingIncoming;
        // let targetMulti = 1 + targetStats.HealingIncoming;
        let composite = sourceMulti;// * targetMulti;

        let scalarSUM = scalar ? battleActions.pullScalarSum(sourceStats,scalar) : 0;

        let percentHealed = percent * composite * scalarSUM;
        let flatHealed = flat * composite;
        let totalHealed = percentHealed + flatHealed;

        let targetMax = targetTurn.maxHP;
        let proposedHealing = targetTurn.currentHP + totalHealed
        targetTurn.currentHP = Math.min(targetMax,proposedHealing);

        let overHeal = proposedHealing > targetMax ? proposedHealing - targetMax : 0;
        let actualHeal = totalHealed - overHeal;

        let logger = battleData.isLoggyLogger;
        let hitData = {
            scalar,percent,flat,
            totalHealed,actualHeal,overHeal,
            sourceData: logger ? JSON.stringify(sourceTurn) : null,
            targetData: logger ? JSON.stringify(targetTurn) : null,
            AV:battleData.sumAV
        }
        if (!targetsHealedThisTurn[targetTurn.name]) {targetsHealedThisTurn[targetTurn.name] = 0}
        targetsHealedThisTurn[targetTurn.name] += 1;
        let hitDisplay = {
            "primary": "Single Target",
            "blast": "Blast",
            "all": "AoE"
        }
        if (battleData.isLoggyLogger) {logToBattle(battleData,{logType: "HealAlly", hitType: hitDisplay[hitType], target: targetTurn.properName, source:sourceTurn.properName, hitData});}
        
        poke("HealEnd",battleData,{source:sourceTurn.name,target:targetTurn.name});
        return {totalHealed,actualHeal,overHeal}
    },
    healAllyWrapper(battleData,targetTurn,sourceTurn,ATKObject,skillSlo) {
        //idk if there are any "when healing allies, increase the healing amount by x" benefits but if there are then we'd need this poke trigger
        //revise later if worthless
        if (battleData.isLoggyLogger) {logToBattle(battleData,{logType: "HealAllyStart"});}
        poke("HealAllyStart",battleData,{sourceTurn,targetTurn});
        // poke("HealAllyStart",battleData,{source:sourceTurn.name,target:targetTurn.name});

        let multis = ATKObject.multipliers;
        let flats = ATKObject.flatAmounts;

        let totalHeal = 0;
        let overHeal = 0;
        let targetsHealedThisTurn = {};
        let targetsHealed = 0;

        //target for the heal doesn't HAVE to be specified, but it needs to be if it is actually a targeted, non-all type heal.
        let namedTurned = battleData.nameBasedTurns;

        if (multis.primary || flats.primary) {
            let hitType = "primary";
            let percent = multis[hitType] ? multis[hitType] : 0;
            let flat = flats[hitType] ? flats[hitType] : 0;

            let heal = battleActions.healed(battleData,targetTurn,sourceTurn,hitType,percent,flat,ATKObject.scalar,skillSlot,targetsHealedThisTurn);
            totalHeal += heal.totalHealed;
            overHeal += heal.overHeal;
            targetsHealed++;
        }
        if (multis.blast || flats.blast) {
            let targetSlot = targetTurn.slotNumber;
            let blast1Slot = `char${targetSlot - 1}`;
            let blast2Slot = `char${targetSlot + 1}`;
            let blastTargets = [];
            
            let hitType = "blast";
            let percent = multis[hitType] ? multis[hitType] : 0;
            let flat = flats[hitType] ? flats[hitType] : 0;

            if (blast1Slot != "char0" && !namedTurned[blast1Slot].isDead) {blastTargets.push(namedTurned[blast1Slot])}
            if (blast2Slot != "char5" && !namedTurned[blast2Slot].isDead) {blastTargets.push(namedTurned[blast2Slot])}
            //TODO: dynamic handling for summons that can be healed and are between characters
            //iirc a summon will always be to the RIGHT of a character, so char1 summon is char1.5 never char0

            for (let blastTarget of blastTargets) {
                let heal = battleActions.healed(battleData,blastTarget,sourceTurn,hitType,percent,flat,ATKObject.scalar,skillSlot,targetsHealedThisTurn);
                // return {totalHealed,actualHeal,overHeal,targetsHealedThisTurn}
                totalHeal += heal.totalHealed;
                overHeal += heal.overHeal;
                targetsHealed++;
            }
        }
        if (multis.all || flats.all) {
            let hitType = "all";
            let percent = multis[hitType] ? multis[hitType] : 0;
            let flat = flats[hitType] ? flats[hitType] : 0;

            for (let allySlot in namedTurned) {
                let currentAlly = namedTurned[allySlot];

                let heal = battleActions.healed(battleData,currentAlly,sourceTurn,hitType,percent,flat,ATKObject.scalar,skillSlot,targetsHealedThisTurn);
                totalHeal += heal.totalHealed;
                overHeal += heal.overHeal;
                targetsHealed++;
            }
        }
        // let ATKObject = {
        //     multipliers: {
        //         primary: null,
        //         blast: null,
        //         all: null,
        //     },
        //     flatAmounts: {
        //         primary: values[0],
        //         blast: null,
        //         all: null,
        //     },
        //     scalar: null,
        //     DMGTags: []
        // }
        battleData.battleHealingSUM += totalHeal;

        let sourceName = sourceTurn.properName;
        let totalsRef = battleData.battleTotal;
        let sumSlotRef = totalsRef.Healing[sourceName] ??= {};
        sumSlotRef[skillSlot] = (sumSlotRef[skillSlot] ?? 0) + totalHeal;
        let sumSlotRef2 = totalsRef.Actions[sourceName] ??= {};
        sumSlotRef2[skillSlot] = (sumSlotRef2[skillSlot] ?? 0) + 1;
        let sumSlotRef3 = totalsRef.OverHeal[sourceName] ??= {};
        sumSlotRef3[skillSlot] = (sumSlotRef3[skillSlot] ?? 0) + overHeal;

        poke("HealAllyEnd",battleData,{sourceTurn,targetTurn});
        if (battleData.isLoggyLogger) {logToBattle(battleData,{logType: "HealAllyEnd", targetsHealed, totalHeal});}
        return {targetsHealedThisTurn}
    },
    healed(battleData,targetTurn,skillSlot,percent,flat,generalInfo,isFixedHealing) {
        // const generalInfo = {sourceTurn,skillSlot,scalar:healObject.scalar,totals};
        const sourceTurn = generalInfo.sourceTurn;
        const scalar = generalInfo.scalar;

        const targetStats = targetTurn.statTable;
        const sourceStats = sourceTurn.statTable;
        const onTurnStats = emptyTableNeverAdd;

        const turnMerge = {targetTurn,sourceTurn}
        poke("HealStart",battleData,turnMerge);
        let sourceMulti = 1 + (isFixedHealing ? 0 : (sourceStats[HealingOutgoing] + targetStats[HealingIncoming]));
        // let targetMulti = 1 + targetStats.HealingIncoming;
        let composite = sourceMulti;// * targetMulti;

        const pseudoTable = emptyTableNeverAdd;
        // pullScalarSum(table,tableONHIT,targetStatsSourceBased,scalarTag)
        //TODO: if there are every source to target specific heal bonuses, I need to actually hook up those tables later
        //until then I assume healing has no fuckery like that, and do not bother

        const scalarSourceOverride = generalInfo.scalarSourceOverride;
        
        const scalarSourceStats = scalarSourceOverride ? battleData.nameBasedTurns[scalarSourceOverride].statTable : sourceStats;
        let scalarSUM = scalar ? battleActions.pullScalarSum(scalarSourceStats,pseudoTable,pseudoTable,onTurnStats,scalar) : targetTurn.maxHP;//if no scalar is specified, assume that %heals are on the target's hp

        let percentHealed = percent * composite * scalarSUM;
        let flatHealed = flat * composite;
        const preHeal = (percentHealed ?? 0) + (flatHealed ?? 0);
        // let totalHealed = calcs.customCeiling(preHeal,0.25);
        let totalHealed = preHeal;
        // console.log(preHeal,totalHealed)

        let targetMax = targetTurn.maxHP;
        let proposedHealing = targetTurn.currentHP + totalHealed
        targetTurn.currentHP = Math.min(targetMax,proposedHealing);
        let overHeal = proposedHealing > targetMax ? proposedHealing - targetMax : 0;
        let actualHeal = totalHealed - overHeal;

        let logger = battleData.isLoggyLogger;
        if (battleData.isLoggyLogger) {
            let hitData = {
                scalar,percent,flat,scalarSUM,
                totalHealed,actualHeal,overHeal,
                sourceData: logger ? JSON.stringify(sourceTurn) : null,
                targetData: logger ? JSON.stringify(targetTurn) : null,
                AV:battleData.sumAV
            }
            // let hitDisplay = {
            //     "primary": "Single Target",
            //     "blast": "Blast",
            //     "all": "AoE"
            // }
            // hitType: hitDisplay[hitType]
            logToBattle(battleData,{logType: "HealAlly", target: targetTurn.properName, source:sourceTurn.properName, hitData});
        }
        
        poke("HealEnd",battleData,{targetTurn,sourceTurn,totalHealed,overHeal,actualHeal});
        const totals = generalInfo.totals;
        totals.totalHeal += totalHealed;
        totals.actualHeal += actualHeal;
        totals.overHeal += overHeal;
    },
    healAlly(battleData,healObject,targetTurn,sourceTurn,skillSlot,timesToHeal,batchArray,forceHeal) {
        const logger = battleData.isLoggyLogger;
        let totalHealed = 0;

        let totalHeal = 0;
        let overHeal = 0;
        let targetsHealedThisTurn = {};
        let targetsHealed = 0;

        const totals = {
            totalHeal: 0,
            overHeal: 0,
            actualHeal: 0,
        }

        const multipliers = healObject.multipliers;
        const flatAmounts = healObject.flatAmounts;
        const isFixedHealing = healObject.isFixedHealing;
        // sourceTurn.huohuoBasicSkillHealHEALOBJECT = {
        //     multipliers: {
        //         primary: values[0],
        //         blast: values[2],
        //         all: null,
        //     },
        //     flatAmounts: {
        //         primary: values[1],
        //         blast: values[3],
        //         all: null,
        //     },
        //     scalar: "HP",
        //     DMGTags: [],
        //     allToughness: false,
        //     slot: skillRef.slot
        // }

        
        const isAll = multipliers.all || flatAmounts.all;
        const isBlast = multipliers.blast || flatAmounts.blast;
        const isPrimary = multipliers.primary || flatAmounts.primary;
        const hitTypePrimary = "primary";
        const hitTypeBlast = "blast";
        const hitTypeAll = "all";
        const scalarSourceOverride = healObject.scalarSourceOverride;

        const generalInfo = {sourceTurn,skillSlot,scalar:healObject.scalar,totals,scalarSourceOverride};
        // const allLength = allTargetArray.length;
        // const blastLength = enemyBlastTargets.length;

        const healer = battleActions.healed;
        if (batchArray) {
            let percent = multipliers[hitTypePrimary] ?? 0;
            let flat = flatAmounts[hitTypePrimary] ?? 0;

            if (logger) {logToBattle(battleData,{logType: "HealAllyStart"});}
            poke("HealAllyStart",battleData,{sourceTurn,targetTurn});
            for (let i=0;i<timesToHeal;i++) {
                for (let batchMember of batchArray) {
                    if (batchMember.cantBeHealed && !forceHeal) {continue}
                    healer(battleData,batchMember,skillSlot,percent,flat,generalInfo,isFixedHealing);
                }
            }
            poke("HealAllyEnd",battleData,{sourceTurn,targetTurn});
            if (logger) {logToBattle(battleData,{logType: "HealAllyEnd", targetsHealed, totalHeal:totals.totalHeal});}
        }
        else if (isAll) {
            let percent = multipliers[hitTypeAll] ?? 0;
            let flat = flatAmounts[hitTypeAll] ?? 0;
            const allyPositions = battleData.allyPositions;

            if (logger) {logToBattle(battleData,{logType: "HealAllyStart"});}
            poke("HealAllyStart",battleData,{sourceTurn,targetTurn});
            for (let i=0;i<timesToHeal;i++) {
                for (let ally of allyPositions) {

                    // let heal = healer(battleData,ally,sourceTurn,hitType,percent,flat,ATKObject.scalar,skillSlot);
                    // totalHeal += heal.totalHealed;
                    // overHeal += heal.overHeal;
                    // targetsHealed++;
                }
            }
            poke("HealAllyEnd",battleData,{sourceTurn,targetTurn});
            if (logger) {logToBattle(battleData,{logType: "HealAllyEnd", targetsHealed, totalHeal:totals.totalHeal});}
        }
        else {
            if (isBlast) {
                let percent = multipliers[hitTypePrimary] ?? 0;
                let flat = flatAmounts[hitTypePrimary] ?? 0;

                let percentBlast = multipliers[hitTypeBlast] ?? 0;
                let flatBlast = flatAmounts[hitTypeBlast] ?? 0;
                if (targetTurn.cantBeTargeted && !forceHeal) {return;}
                if (logger && timesToHeal>1) {logToBattle(battleData,{logType: "HealAllyStart"});}
                poke("HealAllyStart",battleData,{sourceTurn,targetTurn});

                const allyPositions = battleData.allyPositions;
                const indexOfPrimary = allyPositions.indexOf(targetTurn);
                const blast1 = indexOfPrimary > 0 ? allyPositions[indexOfPrimary-1] : null;
                const blast2 = indexOfPrimary < allyPositions.length-1 ? allyPositions[indexOfPrimary+1] : null;

                //primary heal
                for (let i=0;i<timesToHeal;i++) {
                    healer(battleData,targetTurn,skillSlot,percent,flat,generalInfo,isFixedHealing);
                    if (blast1) {healer(battleData,blast1,skillSlot,percentBlast,flatBlast,generalInfo,isFixedHealing);}
                    if (blast2) {healer(battleData,blast2,skillSlot,percentBlast,flatBlast,generalInfo,isFixedHealing);}
                }

                poke("HealAllyEnd",battleData,{sourceTurn,targetTurn});
                if (logger && timesToHeal>1) {logToBattle(battleData,{logType: "HealAllyEnd", targetsHealed, totalHeal:totals.totalHeal});}
            }
            else {
                let percent = multipliers[hitTypePrimary] ?? 0;
                let flat = flatAmounts[hitTypePrimary] ?? 0;
                if (targetTurn.cantBeTargeted && !forceHeal) {return;}
                if (logger && timesToHeal>1) {logToBattle(battleData,{logType: "HealAllyStart"});}
                poke("HealAllyStart",battleData,{sourceTurn,targetTurn});
                for (let i=0;i<timesToHeal;i++) {
                    healer(battleData,targetTurn,skillSlot,percent,flat,generalInfo,isFixedHealing);
                }
                poke("HealAllyEnd",battleData,{sourceTurn,targetTurn});
                if (logger && timesToHeal>1) {logToBattle(battleData,{logType: "HealAllyEnd", targetsHealed, totalHeal:totals.totalHeal});}
                // hitWrap(battleData,enemyPrimary,atkEntry,hitTypePrimary,generalInfo);
            }
        }


        const overTotals = battleData.battleTotal;
        const sourceName = sourceTurn.properName;
        const healingRef = overTotals.Healing[sourceName] ??= {};
        const overHealingRef = overTotals.OverHeal[sourceName] ??= {};
        healingRef[skillSlot] = (healingRef[skillSlot] ?? 0) + totals.totalHeal;
        overHealingRef[skillSlot] = (overHealingRef[skillSlot] ?? 0) + totals.overHeal;

        //TODO: probably need a list type poke for people who only want to evaluate the sum of a healing action over all targets
        // poke("ConsumedAllyHPList",battleData,{isAllAllies,targetTurn,totalHealed,sourceTurn,skillSlot});//for characters that need a running total on the full HP consume across the team
    },
    getShieldValue(battleData,targetTurn,currentReference,sourceRef,sourceTurn) {
        // existingShield,percent,flat,percentCap,flatCap,scalar

        const existingShield = currentReference.shieldRemaining;
        const addPercent = sourceRef.multipliers;
        const addFlat = sourceRef.flatAmounts;
        const percentLimit = sourceRef.multipliersCAP;
        const flatLimit = sourceRef.flatAmountsCAP;
        
                // battleData,sourceTurn,addPercent,addFlat,percentLimit,flatLimit,scalar,shieldSource
        // const generalInfo = {sourceTurn,skillSlot,scalar:healObject.scalar,totals};
        // const sourceTurn = generalInfo.sourceTurn;
        // const scalar = generalInfo.scalar;

        const targetStats = targetTurn.statTable;
        const sourceStats = sourceTurn.statTable;
        const sourceStatsONHIT = sourceTurn.statTableONHIT

        const turnMerge = {targetTurn,sourceTurn}
        poke("ShieldStart",battleData,turnMerge);
        let sourceMulti = 1 + sourceStats[ShieldOutgoing] + targetStats[ShieldIncoming];
        // let targetMulti = 1 + targetStats.HealingIncoming;
        let composite = sourceMulti;// * targetMulti;

        const scalar = sourceRef.scalar;

                    // pullScalarSum(table,tableONHIT,targetStatsSourceBased,scalarTag)
        let scalarSUM = scalar ? battleActions.pullScalarSum(sourceStats,sourceStatsONHIT,emptyTableNeverAdd,emptyTableNeverAdd,scalar) : targetTurn[maxHP];//if no scalar is specified, assume that %shields are on the target's hp

        let percentShield = addPercent * composite * scalarSUM;
        let flatShield = addFlat * composite;
        let totalShield = percentShield + flatShield;

        let percentShieldTotal = percentLimit * composite * scalarSUM;
        let flatShieldTotal = flatLimit * composite;
        let totalShieldCap = percentShieldTotal + flatShieldTotal;

        let targetMax = totalShieldCap;
        let proposedShielding = existingShield + totalShield;
        let finalShield = Math.min(targetMax,proposedShielding);
        let overShield = proposedShielding > targetMax ? proposedShielding - targetMax : 0;
        let actualShield = totalShield - overShield;

        currentReference.shieldRemaining = finalShield;
        currentReference.shieldCap = totalShieldCap;

        // shieldValueCurrent: 0,
        // shieldValueMax: 0,

        if (targetTurn.shieldValueCurrent < finalShield) {
            targetTurn.shieldValueCurrent = finalShield;
            targetTurn.shieldValueMax = totalShieldCap;
        }


        let logger = battleData.isLoggyLogger;
        
        
        if (battleData.isLoggyLogger) {
            let hitData = {
                scalar,percentShield,flatShield,
                totalShield,actualShield,overShield,
                sourceData: logger ? JSON.stringify(sourceTurn) : null,
                targetData: logger ? JSON.stringify(targetTurn) : null,
                AV:battleData.sumAV
            }
            // let hitDisplay = {
            //     "primary": "Single Target",
            //     "blast": "Blast",
            //     "all": "AoE"
            // }
            logToBattle(battleData,{logType: "ShieldAlly", shieldName: currentReference.buffName, 
                oldShield:existingShield,
                newShield:finalShield,
                shieldCap:totalShieldCap,
                target: targetTurn.properName, source:sourceTurn.properName, hitData});

            const dmgSlot = sourceRef.slot
            let totalsRef = battleData.battleTotal;
            let characterName = sourceTurn.properName;
            let sumSlotRef = totalsRef.ShieldAmount[characterName] ??= {};
            sumSlotRef[dmgSlot] = (sumSlotRef[dmgSlot] ?? 0) + totalShield;
            let sumSlotRef2 = totalsRef.Shields[characterName] ??= {};
            sumSlotRef2[dmgSlot] = (sumSlotRef2[dmgSlot] ?? 0) + 1;
            let sumSlotRef3 = totalsRef.Overshield[characterName] ??= {};
            sumSlotRef3[dmgSlot] = (sumSlotRef3[dmgSlot] ?? 0) + overShield;
        }
        
        poke("ShieldEnd",battleData,turnMerge);
        // ShieldAmount: {},
        // Shields: {},
        // Overshield: {}

        

        

        // const totals = generalInfo.totals;
        // totals.totalHeal += totalShield;
        // totals.actualHeal += actualHeal;
        // totals.overHeal += overShield;
    },
    consumeHP(battleData,isAllAllies,percent,targetTurn,sourceTurn,skillSlot,forceConsume,isCurrentHP) {
        const logger = battleData.isLoggyLogger;
        let totalEaten = 0;
        if (isAllAllies) {
            const allies = battleData.allyPositions;
            const min = Math.min;
            if (logger) {logToBattle(battleData,{logType: "ConsumeHPStart"});}
            for (let ally of allies) {
                if (ally.cantBeTargeted && !forceConsume) {continue;}
                const amountToEat = isCurrentHP ? ally.currentHP * percent : ally.maxHP * percent;
                // calcs.customCeiling
                const currentHP = ally.currentHP - 1;//-1 here bc consuming can't reduce a character below 1hp
                const amountEaten = min(amountToEat,currentHP);
                ally.currentHP -= amountEaten;
                totalEaten += amountEaten;
                // totalEaten += calcs.customTruncate(amountEaten,1);
                if (logger) {logToBattle(battleData,{logType: "ConsumeHP", name:sourceTurn.properName, amountEaten, target:ally.properName, isEnemy: false, isCharacter: true, AV: battleData.sumAV, actionSlot:skillSlot});}
                poke("ConsumedAllyHP",battleData,{isAllAllies,targetTurn:ally,amountEaten,sourceTurn,skillSlot});
                poke("AllyLostHP",battleData,{sourceTurn:ally,HPLost: amountEaten,lossSource: sourceTurn});
            }
            if (logger) {logToBattle(battleData,{logType: "ConsumeHPEnd", name:sourceTurn.properName,totalEaten,targetTurn:null, isEnemy: false, isCharacter: true, AV: battleData.sumAV, actionSlot:skillSlot});}
        }
        else if (!targetTurn.cantBeTargeted || forceConsume) {
            const amountToEat = isCurrentHP ? targetTurn.currentHP * percent : targetTurn.maxHP * percent;
            const currentHP = targetTurn.currentHP - 1;//-1 here bc consuming can't reduce a character below 1hp
            const amountEaten = Math.min(amountToEat,currentHP);//then min to see if it's smaller to reduce to 1, or consume the full %
            targetTurn.currentHP -= amountEaten;
            totalEaten += amountEaten;
            if (logger) {logToBattle(battleData,{logType: "ConsumeHP", name:sourceTurn.properName, amountEaten, target:targetTurn.properName, isEnemy: false, isCharacter: true, AV: battleData.sumAV, actionSlot:skillSlot});}
            poke("ConsumedAllyHP",battleData,{isAllAllies,targetTurn,amountEaten,sourceTurn,skillSlot});
            poke("AllyLostHP",battleData,{sourceTurn:targetTurn,HPLost: amountEaten,lossSource: sourceTurn});
        }

        const returnObject = {isAllAllies,targetTurn,totalEaten,sourceTurn,skillSlot};
        poke("ConsumedAllyHPList",battleData,{isAllAllies,targetTurn,totalEaten,sourceTurn,skillSlot});//for characters that need a running total on the full HP consume across the team
        return returnObject
    },
    cleanseDebuff(battleData,targetTurn,amountToRemove,removeType) {
        if (!targetTurn.debuffCounter) {return;}

        let amountRemoved = 0;
        for (let buffName in targetTurn.buffsObject) {
            let currentBuff = targetTurn.buffsObject[buffName];
            let isDebuff = currentBuff.isDebuff;

            if (isDebuff && removeType === "any") {
                removeBuff(battleData,targetTurn,currentBuff);
                amountRemoved++;
            }

            if (amountToRemove && amountToRemove === amountRemoved) {break;}
        }
    },
    findHighestHPCenteredEnemy(enemyLineup,enemiesOrder) {
        //I hate this fucking game man.
        if (!enemyLineup.length) return null;
        const maxHP = Math.max(...enemyLineup.map(e => e.maxHP));
        const enemyOptions = enemyLineup.filter(e => e.maxHP === maxHP);

        if (enemyOptions.length === 1) return enemyOptions[0];

        const center = Math.floor(enemiesOrder.length / 2);
        let best = enemyOptions[0];
        let bestDist = Math.abs(enemiesOrder.indexOf(best) - center);

        for (const c of enemyOptions) {
            const dist = Math.abs(enemiesOrder.indexOf(c) - center);
            if (dist < bestDist) {
                best = c;
                bestDist = dist;
            }
        }
        return best;
    },
    assignAttackTargets(battleData) {
        let enemies = battleData.enemyPositions;
        if (!enemies.length) {
            battleData.primaryTarget = null;
            battleData.blastTargets = [];
            battleData.fullBlastTargets = [];
            battleData.bounceOrder = [];
            battleData.allEnemyTargets = [...battleData.enemyPositions];
            return;
        };
      
        let primary = null;
      
        //I only allow for 1 boss-type enemy so if one exists it will pretty much ALWAYS be the primary target of attacks
        const boss = enemies.find(e => e.enemyType === "boss");
        if (boss) {primary = boss;}
        else {
            //basically, if an elite/minion(in that order) exists with higher HP, then the primary is that one, BUT IF WE HAVE A TIE, then we choose the centermost enemy in the lineup
            //this is PURELY for the sake of blast-type targeting so that way if we have a more or less equivalent choice, the best choice is to hit more targets so we move inward.
            const elites = enemies.filter(e => e.enemyType === "elite");
            const minions = enemies.filter(e => e.enemyType === "minion");
            primary = battleActions.findHighestHPCenteredEnemy(elites,enemies) || battleActions.findHighestHPCenteredEnemy(minions,enemies);
        }
      
        if (!primary) {
            battleData.primaryTarget = null;
            battleData.blastTargets = [];
            battleData.fullBlastTargets = [];
            battleData.bounceOrder = [];
            battleData.allEnemyTargets = [...battleData.enemyPositions];
            return;
        }
      
        //now that we have a primary target(assuming we found one) then we can just index check for adjacents
        //obv edge targets that have no adjacents on one side, will not return 2 blast targets, just one if more than one enemy exists
        let blastTargets = [];
        let fullBlastTargets = [primary];
        let bounceOrder = [primary];
        const index = enemies.indexOf(primary);
        if (index > 0) {
            let enemytoPush = enemies[index - 1];
            blastTargets.push(enemytoPush);
            fullBlastTargets.push(enemytoPush);
            bounceOrder.push(enemytoPush);
        }
        if (index < enemies.length - 1) {
            let enemytoPush = enemies[index + 1];
            blastTargets.push(enemytoPush);
            fullBlastTargets.push(enemytoPush);
            bounceOrder.push(enemytoPush);
        }
        if (index > 1) {
            let enemytoPush = enemies[index - 2];
            bounceOrder.push(enemytoPush);
        }
        if (index < enemies.length - 2) {
            let enemytoPush = enemies[index + 2];
            bounceOrder.push(enemytoPush);
        }
      
        battleData.primaryTarget = primary;
        let blastAOETargets = [];
        if (primary) {
            for (let enemy of enemies) {
                if (enemy.properName === primary.properName) {continue;}
                blastAOETargets.push(enemy);
            }
        }

        battleData.blastAOETargets = blastAOETargets;
        battleData.blastTargets = blastTargets;
        battleData.fullBlastTargets = fullBlastTargets;
        battleData.bounceOrder = bounceOrder;
        battleData.allEnemyTargets = [...battleData.enemyPositions];
    },
    assignAttackTargetsEnemy(battleData) {
        let allyPositions = battleData.allyPositions;
        if (!allyPositions.length) {
            battleData.primaryTargetEnemy = null;
            battleData.blastTargetsEnemy = [];
            battleData.fullBlastTargetsEnemy = [];
            battleData.bounceOrderEnemy = [];
            battleData.blastAOETargetsEnemy = [];
            battleData.AOETargetsEnemy = [];
            return;
        };


        // let AggroStats = calcs.getAggroFinal(menuStats);
        //     currentAggro: AggroStats.AggroFinal,
        //         baseAggro: AggroStats.AggroBaseFinal,

        let primary = null;
        let bounceOrder = [];
        let blastAOETargets = [];
        let blastTargets = [];
        let fullBlastTargets = [];

        let newPositions = allyPositions.filter(ally => {return (!ally.isDead && !ally.isOffField && !ally.isDeparted && !ally.cantBeTargeted);});
        let aggroSort = [...newPositions].sort((x, y) => {
            //pull highest current aggro first
            if (y.currentAggro !== x.currentAggro) return y.currentAggro - x.currentAggro;
            //tiebreak by base aggro
            return y.baseAggro - x.baseAggro;
        });


        if (!newPositions.length) {
            battleData.primaryTargetEnemy = null;
            battleData.blastTargetsEnemy = [];
            battleData.fullBlastTargetsEnemy = [];
            battleData.bounceOrderEnemy = [];
            battleData.blastAOETargetsEnemy = [];
            battleData.AOETargetsEnemy = [];
            return;
        }
        else {
            primary = aggroSort[0];
            fullBlastTargets [primary];
            bounceOrder = aggroSort;

            const primaryIndex = newPositions.indexOf(primary);

            if (primaryIndex > 0) {
                let enemytoPush = newPositions[primaryIndex - 1];
                blastTargets.push(enemytoPush);
                fullBlastTargets.push(enemytoPush);
            }
            if (primaryIndex < newPositions.length - 1) {
                let enemytoPush = newPositions[primaryIndex + 1];
                blastTargets.push(enemytoPush);
                fullBlastTargets.push(enemytoPush);
            }

            if (primaryIndex != 0) {
                for (let ally of newPositions) {
                    if (ally.properName === primary.properName) {continue;}
                    blastAOETargets.push(ally);
                }
            }
        }
      
        battleData.primaryTargetEnemy = primary;
        battleData.blastAOETargetsEnemy = blastAOETargets;
        battleData.blastTargetsEnemy = blastTargets;
        battleData.fullBlastTargetsEnemy = fullBlastTargets;
        battleData.bounceOrderEnemy = bounceOrder;
        battleData.AOETargetsEnemy = newPositions;
    },
    removeListenerInBattle(battleData,listenerName,trigger) {
        let listenerRef = battleData.battleListeners[trigger];
        for (let i=0;i<listenerRef.length;i++) {
            let currentListener = listenerRef[i];
            if (currentListener.listenerName === listenerName) {
                listenerRef.splice(i, 1);
                break;
            }
        }
    },
    buffExpireController(battleData,sourceTurn,arrayTarget) {
        for (let i=arrayTarget.length-1;i>=0;i--) {
            let currentBuff = arrayTarget[i];
            
            currentBuff.duration -= 1;
            if (currentBuff.duration <= 0) {
                removeBuff(battleData,sourceTurn,currentBuff,false);
                arrayTarget.splice(i, 1);
            }
        }
    },
    getChanceToApply(battleData,sourceTurn,targetTurn,baseChance) {
        const ownerEHR = sourceTurn.statTable[EffectHitRate];
        const targetRES = targetTurn.statTable[EffectRES];
        //right now I'm kind of assuming that there are no on-hit EHR buffs, or on-hit only effect res reductions, but if there are, I need to follow
        //more closely to what I do for hit-based dmg calls here
        //TODO: if I ever find a buff like mentioned above, do that

        //not doing a lot, but we may add more here later, would rather bundle it all into a function in case we need to edit once rather than 300 times
        const resultingChance = Math.min(1,baseChance * (1 - targetRES) * (1 + ownerEHR));
        return resultingChance;
    }
}
const pullShred = battleActions.pullDEFShredBonus;
const pullPEN = battleActions.pullPENBonus;
const pullVULN = battleActions.pullVULNBonus;
const pullDMG = battleActions.pullDMGBonus;
const pullScalar = battleActions.pullScalarSum;
const pullFinalMultiplier = battleActions.pullFinalMultiplier;
const pullCritDamage = battleActions.pullCritDamageSUM;
const pullCritRate = battleActions.pullCritRateSUM;
const pullCritStats = battleActions.pullCritStats;
const pullCompositeStatsWCrit = battleActions.pullCompositeStatsWCrit
const pullCompositeStats = battleActions.pullCompositeStats;
const getToughnessSum = battleActions.getToughnessSum;
const removeBuff = battleActions.buffRemovalEnd;
const removeBuffFromBatch = battleActions.buffRemovalEndBatchTargets;
const updateBuffBatchTargets = battleActions.updateBuffBatchTargets;
const getShieldValue = battleActions.getShieldValue;

const turnLogic = {
    "Universal": {
        logic(thisTurn,battleData) {},
        "skillFunctions": {
            battleStartMatchingWeakness(battleData) {
                const firstTurn = battleData.nameBasedTurns.char1;
                const firstTurnElement = firstTurn.element;
                const enemyPositions = battleData.enemyPositions;

                const scalar = "HP";//does not actually matter, break doesn't reference a scalar
                const tags = ["All",firstTurnElement];
                const actionTags = ["Attack"];
                const keyShortcut = basicShorthand.makeKeysArray;
                const realDMGKeys = keyShortcut(dmgKeys,tags);
                const realPENKeys = keyShortcut(resPENKeys,tags);
                const realShredKeys = keyShortcut(defShredKeys,tags);
                const realVulnKeys = keyShortcut(vulnKeys,tags);
                //realDMGKeys,realPENKeys,realShredKeys,realVulnKeys
                const ATKObject = {
                    multipliers: {
                        primary: null,
                        blast: null,
                        all: null,
                    },
                    scalar,
                    DMGTags: tags,
                    allToughness: false,
                    slot: "BattleStart",
                    realDMGKeys,realPENKeys,realShredKeys,realVulnKeys,
                    actionTags
                }

                enemiesThatBroke = [];
                const generalInfo = {sourceTurn:firstTurn,enemiesThatBroke,hitType:"BattleStart",ATKObject,element:firstTurnElement};

                if (battleData.isLoggyLogger) {logToBattle(battleData,{logType: "BattleStartWeakness", name:firstTurn.properName, target:"enemy", isEnemy: false, isCharacter: true, AV: battleData.sumAV, actionSlot:"BattleStartWeakness"});}
                for (let enemy of enemyPositions) {
                    if (!enemy.statTable[greatTableIndex[`Weakness${firstTurnElement}`]]) {continue;}

                    battleActions.hitWrapperBattleStart(battleData,enemy,"BattleStart",generalInfo)
                                    // hitWrapperBattleStart(battleData,targetTurn,hitType,generalInfo)
                }

            }
        },
        "listeners": [
            {
                "trigger": "UpdateStatSPD",//SPD stat change
                condition(battleData,generalInfo) {
                    let sourceTurn = generalInfo.sourceTurn;

                    battleActions.speedAdvance(sourceTurn,battleData,"SPD Change");
                },
                "target": "self",
                "listenerName": "Universal SPD Change AV Controller",
                "announce": false
            },
            {
                "trigger": "UpdateStatHP",//SPD stat change
                condition(battleData,generalInfo) {
                    let sourceTurn = generalInfo.sourceTurn;

                    battleActions.updateMaxHP(sourceTurn,battleData,"Max HP Controller");
                },
                "target": "self",
                "listenerName": "Universal Max HP adjustment controller",
                "announce": false
            },
            {
                "trigger": "SummonOnFieldAdjustment",
                condition(battleData,generalInfo) {
                    // poke("SummonOnFieldAdjustment",battleData,{summonWas: "Apply",assignedTo: ownerTurn, summonedBy: ownerTurn, summonEvent: ownerTurn.topazNUMBYTURNEVENT});
                    const memoTurn = generalInfo.summonEvent;
                    const action = generalInfo.summonWas;
                    if (!memoTurn.isMemosprite || action != "Remove") {return;}

                    const buffsRef = memoTurn.buffsObject;
                    // const updateBuff = battleActions.updateBuff;
                    for (let buffName in buffsRef) {
                        const currentBuff = buffsRef[buffName];
                        if (currentBuff && currentBuff.removeOnDeath) {
                            removeBuff(battleData,memoTurn,currentBuff);
                        }
                    }
                    if (battleData.isLoggyLogger) {logToBattle(battleData,{logType: "GenericAction", source:"Memosprite removal listener", bodyText: `Memosprite ${memoTurn.properName} was removed from the field`});}
                },
                "target": "self",
                "listenerName": "Universal memosprite buff remover",
                // "ownerTurn": {},
            },
            {
                "trigger": "AllyDied",
                condition(battleData,generalInfo) {
                    // poke("AllyDied",battleData,{targetTurn:deathTurn});
                    battleActions.assignAttackTargetsEnemy(battleData);
                },
                "target": "self",
                "listenerName": "Universal ally died aggro redo",
                // "ownerTurn": {},
            },
        ],
        "finalListeners": [
            {
                "trigger": "BasicATKStart",
                condition(battleData,generalInfo) {
                    poke("ActionStart",battleData,generalInfo);
                },
                "target": "self",
                "listenerName": "Universal action start listener (Basic ATK)",
                "ownerTurn": {},
            },
            {
                "trigger": "SkillStart",
                condition(battleData,generalInfo) {
                    poke("ActionStart",battleData,generalInfo);
                },
                "target": "self",
                "listenerName": "Universal action start listener (Skill)",
                "ownerTurn": {},
            },
            {
                "trigger": "UltimateStart",
                condition(battleData,generalInfo) {
                    poke("ActionStart",battleData,generalInfo);
                },
                "target": "self",
                "listenerName": "Universal action start listener (Ultimate)",
                "ownerTurn": {},
            },
            {
                "trigger": "FUAStart",
                condition(battleData,generalInfo) {
                    poke("ActionStart",battleData,generalInfo);
                },
                "target": "self",
                "listenerName": "Universal action start listener (FUA)",
                "ownerTurn": {},
            },
            {
                "trigger": "MemoSkillStart",
                condition(battleData,generalInfo) {
                    poke("ActionStart",battleData,generalInfo);
                },
                "target": "self",
                "listenerName": "Universal action start listener (Memo Skill)",
                "ownerTurn": {},
            },


            {
                "trigger": "BasicATKEnd",
                condition(battleData,generalInfo) {
                    poke("ActionEnd",battleData,generalInfo);
                },
                "target": "self",
                "listenerName": "Universal action end listener (Basic ATK)",
                "ownerTurn": {},
            },
            {
                "trigger": "SkillEnd",
                condition(battleData,generalInfo) {
                    poke("ActionEnd",battleData,generalInfo);
                },
                "target": "self",
                "listenerName": "Universal action end listener (Skill)",
                "ownerTurn": {},
            },
            {
                "trigger": "UltimateEnd",
                condition(battleData,generalInfo) {
                    poke("ActionEnd",battleData,generalInfo);
                },
                "target": "self",
                "listenerName": "Universal action end listener (Ultimate)",
                "ownerTurn": {},
            },
            {
                "trigger": "FUAEnd",
                condition(battleData,generalInfo) {
                    poke("ActionEnd",battleData,generalInfo);
                },
                "target": "self",
                "listenerName": "Universal action end listener (FUA)",
                "ownerTurn": {},
            },
            {
                "trigger": "MemoSkillEnd",
                condition(battleData,generalInfo) {
                    poke("ActionEnd",battleData,generalInfo);
                },
                "target": "self",
                "listenerName": "Universal action end listener (Memo Skill)",
                "ownerTurn": {},
            },
        ],
        "characterValues": {},
        "characterValuesBattle": {},
    },
    //Enemies
    "Generic Boss": {
        logic(thisTurn,battleData) {
            // let skillPointsCheck = battleData.skillPointCurrent > 4;
            // let ultySoon = (thisTurn.currentEnergy - thisTurn.currentEnergy) <= 30;//TODO: need to make it so this will account for energy regen rate too
            let actionUsed = false;
            const shortCall = this;
            // let statCalls = shortCall.characterValuesBattle;
            let shortCalls = shortCall.skillFunctions;
            // let skillPathing = characters["Generic Boss"].skills;

            // if (skillPointsCheck > 4 || (skillPointsCheck >= 1 && ultySoon)) {
            //     //basically, are we greater than 4sp for archer, or are we at the minimum to use a skill and then ult afterwards
            //     let target = "char1";
            //     actionUsed = true;
                
            //     return {action: "Skill", points: -1, actionCall: shortCalls.sparkleAdvance, target: target, endTurn: true};
            // }


            if (!actionUsed) {
                let basicCall = shortCalls.genericBossBasic;
                return {action: "BasicATK", points: 1, actionCall: basicCall, target: "team", endTurn: true};
            }
        },
        "enemyData": {
            "name": "N/A",
            "path": "N/A",
            "element": "N/A",
            "energyMax": 110,
            "skills": {
                "Basic ATK": {
                    "Generic AOE ATK": {
                        "variant1": {
                            "skillID": 1100601,
                            "trigger": "Skill01",
                            "name": "System Warning",
                            "type": "AoE",
                            "slot": "Basic ATK",
                            "desc": "",
                            "energyCost": null,
                            "energyRegen": 0,
                            "energyRate": 0,
                            "toughnessReductionDisplayed": 0,
                            "skillPointCost": 0,
                            "skillPointGain": 0,
                            "params": {
                                "6": [
                                    1
                                ]
                            },
                            "element": "N/A",
                            "attackType": "Normal",
                            "skillEffect": "AoEAttack",
                            "hitSplits": [
                                {
                                    "primary": null,
                                    "blast": null,
                                    "all": {
                                        "hitRatio": 1,
                                        "energyRatio": 0,
                                        "toughness": 0
                                    },
                                    "unknownTypers": false
                                }
                            ]
                        }
                    }
                },
                "Skill": {
                    "Allow Changes?": {
                    "variant1": {
                        "skillID": 1100602,
                        "trigger": "Skill02",
                        "name": "Allow Changes?",
                        "type": "Single Target",
                        "slot": "Skill",
                        "desc": "There is a #2[i]% base chance to add 1 Weakness of an on-field ally target's Type to one designated enemy target (prioritizing the implant of a Weakness that matches the first character in the team lineup). This also reduces the enemy target's RES to that Weakness Type by #4[i]% for #3[i] turn(s). If the enemy target already has that Type of Weakness, the RES reduction effect to that Type will not be triggered.\\nEach enemy target can only have 1 Weakness implanted by Silver Wolf. When Silver Wolf implants another Weakness to the target, only the most recent implanted Weakness will be retained.\\nIn addition, there is a #5[i]% base chance to further reduce the target's All-Type RES by #6[f1]% for #7[i] turn(s).\\nDeals Quantum DMG equal to #1[i]% of Silver Wolf's ATK to this target.",
                        "energyCost": null,
                        "energyRegen": 30,
                        "energyRate": 0.5,
                        "toughnessReductionDisplayed": 20,
                        "skillPointCost": 1,
                        "skillPointGain": 0,
                        "params": {
                        "10": [
                            1.96,
                            1.2,
                            3,
                            0.2,
                            1,
                            0.13,
                            2
                        ],
                        "11": [
                            2.058,
                            1.24,
                            3,
                            0.2,
                            1,
                            0.1325,
                            2
                        ],
                        "12": [
                            2.156,
                            1.28,
                            3,
                            0.2,
                            1,
                            0.135,
                            2
                        ]
                        },
                        "element": "Quantum",
                        "attackType": "BPSkill",
                        "skillEffect": "SingleAttack",
                        "maxLevel": 15,
                        "configAbilityList": [
                        "Avatar_Advanced_Silwolf_00_Skill02_Camera",
                        "Avatar_Advanced_Silwolf_00_Skill02_Phase01",
                        "Avatar_Advanced_Silwolf_00_Skill02_Phase02",
                        "Avatar_Advanced_Silwolf_00_Skill02_Success_Camera",
                        "Avatar_Advanced_Silwolf_00_Skill02_Failed_Camera"
                        ],
                        "hitSplits": [],
                        "extraEffects": {
                        "Base Chance": {
                            "desc": "The base chance of applying debuffs to targets hit. \\nThe final probability is affected by the attacker's Effect Hit Rate and enemy targets' Effect RES."
                        }
                        }
                    }
                    }
                },
                "Ultimate": {
                    "User Banned": {
                    "variant1": {
                        "skillID": 1100603,
                        "trigger": "Skill03",
                        "name": "User Banned",
                        "type": "AoE",
                        "slot": "Ultimate",
                        "desc": "Has a #2[i]% base chance to reduce the DEF of all enemies by #3[f1]% for #4[i] turn(s). At the same time, deals Quantum DMG equal to #1[i]% of Silver Wolf's ATK to all enemies.",
                        "energyCost": 110,
                        "energyRegen": 5,
                        "energyRate": 0.5,
                        "toughnessReductionDisplayed": 20,
                        "skillPointCost": 0,
                        "skillPointGain": 0,
                        "params": {
                        "10": [
                            3.8,
                            1.2,
                            0.45,
                            3
                        ],
                        "11": [
                            3.952,
                            1.24,
                            0.459,
                            3
                        ],
                        "12": [
                            4.104,
                            1.28,
                            0.468,
                            3
                        ]
                        },
                        "element": "Quantum",
                        "attackType": "Ultra",
                        "skillEffect": "AoEAttack",
                        "maxLevel": 15,
                        "configAbilityList": [
                        "Avatar_Advanced_Silwolf_00_Skill03_Camera",
                        "Avatar_Advanced_Silwolf_00_Skill03_EnterReady",
                        "Avatar_Advanced_Silwolf_00_Skill03_Phase01",
                        "Avatar_Advanced_Silwolf_00_Skill03_Phase02"
                        ],
                        "hitSplits": [
                        {
                            "primary": null,
                            "blast": null,
                            "all": {
                            "hitRatio": 1,
                            "energyRatio": 1,
                            "toughness": 20
                            },
                            "unknownTypers": false
                        }
                        ],
                        "extraEffects": {
                        "Base Chance": {
                            "desc": "The base chance of applying debuffs to targets hit. \\nThe final probability is affected by the attacker's Effect Hit Rate and enemy targets' Effect RES."
                        }
                        }
                    }
                    }
                },
                "Talent": {
                    "Awaiting System Response...": {
                    "variant1": {
                        "skillID": 1100604,
                        "trigger": "SkillP01",
                        "name": "Awaiting System Response...",
                        "type": "Impair",
                        "slot": "Talent",
                        "desc": "Silver Wolf can create three types of \"Bugs\": Reduce ATK by #1[f1]%, reduce DEF by #2[f1]%, and reduce SPD by #3[f1]%.\\nAfter every attack launched by Silver Wolf, she has a #4[i]% base chance to implant 1 random \"Bug\" that lasts for #5[i] turn(s) in the attacked enemy target. \\nWhen the enemy target gets defeated, the Weakness Silver Wolf implanted on it will be transferred to another surviving enemy on the field that hasn't been implanted with Weakness by Silver Wolf, prioritizing targets at Elite-level and above.",
                        "energyCost": null,
                        "energyRegen": null,
                        "energyRate": 0.5,
                        "toughnessReductionDisplayed": null,
                        "skillPointCost": 0,
                        "skillPointGain": 0,
                        "params": {
                        "10": [
                            0.1,
                            0.12,
                            0.06,
                            1,
                            3
                        ],
                        "11": [
                            0.105,
                            0.126,
                            0.063,
                            1.04,
                            3
                        ],
                        "12": [
                            0.11,
                            0.132,
                            0.066,
                            1.08,
                            3
                        ]
                        },
                        "skillEffect": "Impair",
                        "maxLevel": 15,
                        "configAbilityList": [
                        "Avatar_Advanced_Silwolf_00_PassiveSkill01"
                        ],
                        "hitSplits": [],
                        "extraEffects": {
                        "Base Chance": {
                            "desc": "The base chance of applying debuffs to targets hit. \\nThe final probability is affected by the attacker's Effect Hit Rate and enemy targets' Effect RES."
                        }
                        }
                    }
                    }
                },
                "Technique": {
                    "Force Quit Program": {
                    "variant1": {
                        "skillID": 1100607,
                        "trigger": "SkillMaze",
                        "name": "Force Quit Program",
                        "slot": "Technique",
                        "desc": "Immediately attacks the enemy. After entering combat, deals Quantum DMG equal to #1[i]% of Silver Wolf's ATK to all enemies, and reduces Toughness of all enemies regardless of Weakness Types. Enemies with their Weakness Broken in this way will trigger the Quantum Weakness Break effect.",
                        "energyCost": null,
                        "energyRegen": null,
                        "energyRate": 0.5,
                        "toughnessReductionDisplayed": 20,
                        "skillPointCost": 0,
                        "skillPointGain": 0,
                        "params": {
                        "1": [
                            0.8
                        ]
                        },
                        "element": "Quantum",
                        "attackType": "Maze",
                        "skillEffect": "MazeAttack",
                        "maxLevel": 1,
                        "configAbilityList": [
                        "Avatar_Advanced_Silwolf_00_SkillMazeInLevel"
                        ],
                        "hitSplits": []
                    }
                    }
                }
            },
            "hasSummon": false,
        },
        "skillFunctions": {
            genericBossBasic(battleData,target,sourceTurn) {
                const enemyTypeAttack = sourceTurn.enemyTypeAttack;
                const logicRef = turnLogic[enemyTypeAttack];
                const ATKObjects = logicRef.ATKObjects;

                let skillRef = ATKObjects.genericBossBasicREF ??= turnLogic[enemyTypeAttack].enemyData.skills["Basic ATK"]["Generic AOE ATK"].variant1;

                if (!ATKObjects.genericBossBasic) {
                    let values = skillRef.params[6];
                    const scalar = "ATK";
                    const tags = ["All"];
                    const actionTags = ["Attack"];
                    const keyShortcut = basicShorthand.makeKeysArray;
                    const realDMGKeys = keyShortcut(dmgKeys,tags);
                    const realPENKeys = keyShortcut(resPENKeys,tags);
                    const realShredKeys = keyShortcut(defShredKeys,tags);
                    const realVulnKeys = keyShortcut(vulnKeys,tags);
                    const compositeCacheTag = tags + actionTags;

                    ATKObjects.genericBossBasic = {
                        multipliers: {
                            primary: null,
                            blast: null,
                            all: values[0],
                        },
                        scalar: scalar,
                        DMGTags: tags,
                        isEnemy: true,
                        allToughness: false,
                        slot: skillRef.slot,
                        realDMGKeys,realPENKeys,realShredKeys,realVulnKeys,
                        actionTags,
                        compositeCacheTag
                    }
                }
                let ATKObject = ATKObjects.genericBossBasic;

                if (battleData.isLoggyLogger) {logToBattle(battleData,{logType: "BasicATKStart", name:sourceTurn.properName, target, isEnemy: true, isCharacter: false, AV: battleData.sumAV, actionSlot:skillRef.slot});}
                poke("BasicATKStart",battleData,{sourceTurn});
                battleActions.attackWrapper(battleData,skillRef,sourceTurn,ATKObject);
                poke("BasicATKEnd",battleData,{sourceTurn});
            },
            genericBossBasicOLD(battleData,target,sourceTurn) {
                let skillPathing = turnLogic[sourceTurn.enemyTypeAttack].enemyData.skills;
                let skillRef = skillPathing["Basic ATK"]["Generic AOE ATK"].variant1;

                let values = skillRef.params[6];
                let ATKObject = {
                    multipliers: {
                        primary: null,
                        blast: null,
                        all: values[0],
                    },
                    scalar: "ATK",
                    DMGTags: ["All"],
                    isEnemy: true,
                    allToughness: false,
                    slot: skillRef.slot
                }
                
                if (battleData.isLoggyLogger) {logToBattle(battleData,{logType: "BasicATKStart", name:sourceTurn.properName, target, isEnemy: true, isCharacter: false, AV: battleData.sumAV, actionSlot:skillRef.slot});}
                poke("BasicATKStart",battleData,{sourceTurn});
                battleActions.attackWrapper(battleData,skillRef,sourceTurn,ATKObject);
                poke("BasicATKEnd",battleData,{sourceTurn});
            },
        },
        "ATKObjects": {},
        "listeners": [],
        "characterValues": {},
        "characterValuesBattle": {},
    },
    "Generic Boss ST": {
        logic(thisTurn,battleData) {
            // let skillPointsCheck = battleData.skillPointCurrent > 4;
            // let ultySoon = (thisTurn.currentEnergy - thisTurn.currentEnergy) <= 30;//TODO: need to make it so this will account for energy regen rate too
            let actionUsed = false;

            const shortCall = this;
            // let statCalls = shortCall.characterValuesBattle;
            let shortCalls = shortCall.skillFunctions;
            // let skillPathing = characters["Generic Boss"].skills;

            // if (skillPointsCheck > 4 || (skillPointsCheck >= 1 && ultySoon)) {
            //     //basically, are we greater than 4sp for archer, or are we at the minimum to use a skill and then ult afterwards
            //     let target = "char1";
            //     actionUsed = true;
                
            //     return {action: "Skill", points: -1, actionCall: shortCalls.sparkleAdvance, target: target, endTurn: true};
            // }

            if (!actionUsed) {
                let basicCall = shortCalls.genericBossBasic;
                return {action: "BasicATK", points: 1, actionCall: basicCall, target: "team", endTurn: true};
            }
        },
        "enemyData": {
            "name": "N/A",
            "path": "N/A",
            "element": "N/A",
            "energyMax": 110,
            "skills": {
                "Basic ATK": {
                    "Generic ST ATK": {
                        "variant1": {
                            "skillID": 1100601,
                            "trigger": "Skill01",
                            "name": "System Warning",
                            "type": "AoE",
                            "slot": "Basic ATK",
                            "desc": "",
                            "energyCost": null,
                            "energyRegen": 0,
                            "energyRate": 0,
                            "toughnessReductionDisplayed": 0,
                            "skillPointCost": 0,
                            "skillPointGain": 0,
                            "params": {
                                "6": [
                                    1
                                ]
                            },
                            "element": "N/A",
                            "attackType": "Normal",
                            "skillEffect": "AoEAttack",
                            "hitSplits": [
                                {
                                    "primary": {
                                        "hitRatio": 1,
                                        "energyRatio": 0,
                                        "toughness": 0
                                    },
                                    "blast": null,
                                    "all": null,
                                    "unknownTypers": false
                                }
                            ]
                        }
                    }
                },
                "Skill": {
                    "Allow Changes?": {
                    "variant1": {
                        "skillID": 1100602,
                        "trigger": "Skill02",
                        "name": "Allow Changes?",
                        "type": "Single Target",
                        "slot": "Skill",
                        "desc": "There is a #2[i]% base chance to add 1 Weakness of an on-field ally target's Type to one designated enemy target (prioritizing the implant of a Weakness that matches the first character in the team lineup). This also reduces the enemy target's RES to that Weakness Type by #4[i]% for #3[i] turn(s). If the enemy target already has that Type of Weakness, the RES reduction effect to that Type will not be triggered.\\nEach enemy target can only have 1 Weakness implanted by Silver Wolf. When Silver Wolf implants another Weakness to the target, only the most recent implanted Weakness will be retained.\\nIn addition, there is a #5[i]% base chance to further reduce the target's All-Type RES by #6[f1]% for #7[i] turn(s).\\nDeals Quantum DMG equal to #1[i]% of Silver Wolf's ATK to this target.",
                        "energyCost": null,
                        "energyRegen": 30,
                        "energyRate": 0.5,
                        "toughnessReductionDisplayed": 20,
                        "skillPointCost": 1,
                        "skillPointGain": 0,
                        "params": {
                        "10": [
                            1.96,
                            1.2,
                            3,
                            0.2,
                            1,
                            0.13,
                            2
                        ],
                        "11": [
                            2.058,
                            1.24,
                            3,
                            0.2,
                            1,
                            0.1325,
                            2
                        ],
                        "12": [
                            2.156,
                            1.28,
                            3,
                            0.2,
                            1,
                            0.135,
                            2
                        ]
                        },
                        "element": "Quantum",
                        "attackType": "BPSkill",
                        "skillEffect": "SingleAttack",
                        "maxLevel": 15,
                        "configAbilityList": [
                        "Avatar_Advanced_Silwolf_00_Skill02_Camera",
                        "Avatar_Advanced_Silwolf_00_Skill02_Phase01",
                        "Avatar_Advanced_Silwolf_00_Skill02_Phase02",
                        "Avatar_Advanced_Silwolf_00_Skill02_Success_Camera",
                        "Avatar_Advanced_Silwolf_00_Skill02_Failed_Camera"
                        ],
                        "hitSplits": [],
                        "extraEffects": {
                        "Base Chance": {
                            "desc": "The base chance of applying debuffs to targets hit. \\nThe final probability is affected by the attacker's Effect Hit Rate and enemy targets' Effect RES."
                        }
                        }
                    }
                    }
                },
                "Ultimate": {
                    "User Banned": {
                    "variant1": {
                        "skillID": 1100603,
                        "trigger": "Skill03",
                        "name": "User Banned",
                        "type": "AoE",
                        "slot": "Ultimate",
                        "desc": "Has a #2[i]% base chance to reduce the DEF of all enemies by #3[f1]% for #4[i] turn(s). At the same time, deals Quantum DMG equal to #1[i]% of Silver Wolf's ATK to all enemies.",
                        "energyCost": 110,
                        "energyRegen": 5,
                        "energyRate": 0.5,
                        "toughnessReductionDisplayed": 20,
                        "skillPointCost": 0,
                        "skillPointGain": 0,
                        "params": {
                        "10": [
                            3.8,
                            1.2,
                            0.45,
                            3
                        ],
                        "11": [
                            3.952,
                            1.24,
                            0.459,
                            3
                        ],
                        "12": [
                            4.104,
                            1.28,
                            0.468,
                            3
                        ]
                        },
                        "element": "Quantum",
                        "attackType": "Ultra",
                        "skillEffect": "AoEAttack",
                        "maxLevel": 15,
                        "configAbilityList": [
                        "Avatar_Advanced_Silwolf_00_Skill03_Camera",
                        "Avatar_Advanced_Silwolf_00_Skill03_EnterReady",
                        "Avatar_Advanced_Silwolf_00_Skill03_Phase01",
                        "Avatar_Advanced_Silwolf_00_Skill03_Phase02"
                        ],
                        "hitSplits": [
                        {
                            "primary": null,
                            "blast": null,
                            "all": {
                            "hitRatio": 1,
                            "energyRatio": 1,
                            "toughness": 20
                            },
                            "unknownTypers": false
                        }
                        ],
                        "extraEffects": {
                        "Base Chance": {
                            "desc": "The base chance of applying debuffs to targets hit. \\nThe final probability is affected by the attacker's Effect Hit Rate and enemy targets' Effect RES."
                        }
                        }
                    }
                    }
                },
                "Talent": {
                    "Awaiting System Response...": {
                    "variant1": {
                        "skillID": 1100604,
                        "trigger": "SkillP01",
                        "name": "Awaiting System Response...",
                        "type": "Impair",
                        "slot": "Talent",
                        "desc": "Silver Wolf can create three types of \"Bugs\": Reduce ATK by #1[f1]%, reduce DEF by #2[f1]%, and reduce SPD by #3[f1]%.\\nAfter every attack launched by Silver Wolf, she has a #4[i]% base chance to implant 1 random \"Bug\" that lasts for #5[i] turn(s) in the attacked enemy target. \\nWhen the enemy target gets defeated, the Weakness Silver Wolf implanted on it will be transferred to another surviving enemy on the field that hasn't been implanted with Weakness by Silver Wolf, prioritizing targets at Elite-level and above.",
                        "energyCost": null,
                        "energyRegen": null,
                        "energyRate": 0.5,
                        "toughnessReductionDisplayed": null,
                        "skillPointCost": 0,
                        "skillPointGain": 0,
                        "params": {
                        "10": [
                            0.1,
                            0.12,
                            0.06,
                            1,
                            3
                        ],
                        "11": [
                            0.105,
                            0.126,
                            0.063,
                            1.04,
                            3
                        ],
                        "12": [
                            0.11,
                            0.132,
                            0.066,
                            1.08,
                            3
                        ]
                        },
                        "skillEffect": "Impair",
                        "maxLevel": 15,
                        "configAbilityList": [
                        "Avatar_Advanced_Silwolf_00_PassiveSkill01"
                        ],
                        "hitSplits": [],
                        "extraEffects": {
                        "Base Chance": {
                            "desc": "The base chance of applying debuffs to targets hit. \\nThe final probability is affected by the attacker's Effect Hit Rate and enemy targets' Effect RES."
                        }
                        }
                    }
                    }
                },
                "Technique": {
                    "Force Quit Program": {
                    "variant1": {
                        "skillID": 1100607,
                        "trigger": "SkillMaze",
                        "name": "Force Quit Program",
                        "slot": "Technique",
                        "desc": "Immediately attacks the enemy. After entering combat, deals Quantum DMG equal to #1[i]% of Silver Wolf's ATK to all enemies, and reduces Toughness of all enemies regardless of Weakness Types. Enemies with their Weakness Broken in this way will trigger the Quantum Weakness Break effect.",
                        "energyCost": null,
                        "energyRegen": null,
                        "energyRate": 0.5,
                        "toughnessReductionDisplayed": 20,
                        "skillPointCost": 0,
                        "skillPointGain": 0,
                        "params": {
                        "1": [
                            0.8
                        ]
                        },
                        "element": "Quantum",
                        "attackType": "Maze",
                        "skillEffect": "MazeAttack",
                        "maxLevel": 1,
                        "configAbilityList": [
                        "Avatar_Advanced_Silwolf_00_SkillMazeInLevel"
                        ],
                        "hitSplits": []
                    }
                    }
                }
            },
            "hasSummon": false,
        },
        "skillFunctions": {
            genericBossBasic(battleData,target,sourceTurn) {
                const enemyTypeAttack = sourceTurn.enemyTypeAttack;
                const logicRef = turnLogic[enemyTypeAttack];
                const ATKObjects = logicRef.ATKObjects;

                let skillRef = ATKObjects.genericBossBasicREF ??= turnLogic[enemyTypeAttack].enemyData.skills["Basic ATK"]["Generic ST ATK"].variant1;

                if (!ATKObjects.genericBossBasic) {
                    let values = skillRef.params[6];
                    const scalar = "ATK";
                    const tags = ["All"];
                    const actionTags = ["Attack"];
                    const keyShortcut = basicShorthand.makeKeysArray;
                    const realDMGKeys = keyShortcut(dmgKeys,tags);
                    const realPENKeys = keyShortcut(resPENKeys,tags);
                    const realShredKeys = keyShortcut(defShredKeys,tags);
                    const realVulnKeys = keyShortcut(vulnKeys,tags);
                    const compositeCacheTag = tags + actionTags;

                    ATKObjects.genericBossBasic = {
                        multipliers: {
                            primary: values[0],
                            blast: null,
                            all: null,
                        },
                        scalar: scalar,
                        DMGTags: tags,
                        isEnemy: true,
                        allToughness: false,
                        slot: skillRef.slot,
                        realDMGKeys,realPENKeys,realShredKeys,realVulnKeys,
                        actionTags,
                        compositeCacheTag
                    }
                }
                let ATKObject = ATKObjects.genericBossBasic;

                if (battleData.isLoggyLogger) {logToBattle(battleData,{logType: "BasicATKStart", name:sourceTurn.properName, target, isEnemy: true, isCharacter: false, AV: battleData.sumAV, actionSlot:skillRef.slot});}
                poke("BasicATKStart",battleData,{sourceTurn});
                battleActions.attackWrapper(battleData,skillRef,sourceTurn,ATKObject);
                poke("BasicATKEnd",battleData,{sourceTurn});
            },
            genericBossBasicOLD(battleData,target,sourceTurn) {
                let skillPathing = turnLogic[sourceTurn.enemyTypeAttack].enemyData.skills;
                let skillRef = skillPathing["Basic ATK"]["Generic AOE ATK"].variant1;

                let values = skillRef.params[6];
                let ATKObject = {
                    multipliers: {
                        primary: null,
                        blast: null,
                        all: values[0],
                    },
                    scalar: "ATK",
                    DMGTags: ["All"],
                    isEnemy: true,
                    allToughness: false,
                    slot: skillRef.slot
                }
                
                if (battleData.isLoggyLogger) {logToBattle(battleData,{logType: "BasicATKStart", name:sourceTurn.properName, target, isEnemy: true, isCharacter: false, AV: battleData.sumAV, actionSlot:skillRef.slot});}
                poke("BasicATKStart",battleData,{sourceTurn});
                battleActions.attackWrapper(battleData,skillRef,sourceTurn,ATKObject);
                poke("BasicATKEnd",battleData,{sourceTurn});
            },
        },
        "ATKObjects": {},
        "listeners": [],
        "characterValues": {},
        "characterValuesBattle": {},
    },
    //Abundance
    "Gallagher": {//ATKOBJECTS DONE
        logic(thisTurn,battleData) {//TODO: circle back for target logic for the skill
            // let skillPointsCheck = battleData.skillPointCurrent > 4;
            // let ultySoon = (thisTurn.currentEnergy - thisTurn.currentEnergy) <= 30;//TODO: need to make it so this will account for energy regen rate too
            // const shortRef = this;
            // const battleValues = shortRef.characterValuesBattle;
            // let actionUsed = false;
            // let statCalls = shortRef.characterValuesBattle;
            // let shortCalls = shortRef.skillFunctions;
            // let skillPathing = characters.Gallagher.skills;

            // let allyWorthHealing = battleActions.findLowestHPAlly(battleData);
            // let hpRatio = allyWorthHealing ? allyWorthHealing.currentHP / allyWorthHealing.maxHP : null;
            // let healThreshold = 0.5;
            // let shouldHeal = allyWorthHealing && hpRatio <= healThreshold;
            let currentSP = battleData.skillPointCurrent;
            let minimum = currentSP >= 1;
            // let enhancedCheck = battleValues.nextBasicEnhanced;

            // shouldHeal
            // !enhancedCheck
            if (minimum && checkSkill(battleData,thisTurn)) {
                //is there an ally low enough, and if so, do we even have a skill point to put into play here
                //then lastly, are we in an enhanced basic attack mode, bc that will heal everyone ANYWAYS.
                //if everyone is full, it's impossible to pass this check, OR AT LEAST IT SHOULD BE
                // let target = allyWorthHealing.name;
                // actionUsed = true;
                
                const returnSkillCall = this.returnSkillCall ??= {action: "Skill", points: -1, actionCall: this.skillFunctions.gallagherSkillHeal, target: null, endTurn: true};
                returnSkillCall.target = battleActions.findLowestHPAlly(battleData)?.name ?? battleData.nameBasedTurns.char1;
                return returnSkillCall;
            }

            const returnBasicCall = this.returnBasicCall ??= {action: "BasicATK", points: 1, actionCall: this.skillFunctions.gallagherBasic, target: "enemy", endTurn: true}
            const returnBasicEnhCall = this.returnBasicEnhCall ??= {action: "BasicATK", points: 1, actionCall: this.skillFunctions.gallagherBasicEnhanced, target: "enemy", endTurn: true}
            return thisTurn.battleValues.nextBasicEnhanced ? returnBasicEnhCall : returnBasicCall;
        },
        "skillFunctions": {
            gallagherBasic(battleData,target,sourceTurn) {
                const logicRef = turnLogic[sourceTurn.properName];
                const ATKObjects = logicRef.ATKObjects;


                let skillRef = ATKObjects.gallagherBasicREF ??= ATKObjects["Basic ATK"]["Corkage Fee"].variant1;
                if (!ATKObjects.gallagherBasicATKOBJECT) {
                    let values = battleActions.getLevelBasedParam(battleData,skillRef,sourceTurn);
                    const scalar = "ATK";
                    const tags = ["All","Basic","Fire"];
                    const actionTags = ["Basic","Attack"];
                    const keyShortcut = basicShorthand.makeKeysArray;
                    const realDMGKeys = keyShortcut(dmgKeys,tags);
                    const realPENKeys = keyShortcut(resPENKeys,tags);
                    const realShredKeys = keyShortcut(defShredKeys,tags);
                    const realVulnKeys = keyShortcut(vulnKeys,tags);
                    const compositeCacheTag = tags + actionTags;
                    //realDMGKeys,realPENKeys,realShredKeys,realVulnKeys
                    ATKObjects.gallagherBasicATKOBJECT = {
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
                let ATKObject = ATKObjects.gallagherBasicATKOBJECT;

                if (battleData.isLoggyLogger) {logToBattle(battleData,{logType: "BasicATKStart", name:sourceTurn.properName, target, isEnemy: false, isCharacter: true, AV: battleData.sumAV, actionSlot:skillRef.slot});}
                poke("BasicATKStart",battleData,{sourceTurn});
                battleActions.attackWrapper(battleData,skillRef,sourceTurn,ATKObject);
                battleActions.updateEnergy(battleData,skillRef.energyRegen,sourceTurn);
                poke("BasicATKEnd",battleData,{sourceTurn});
            },
            gallagherSkillHeal(battleData,targetTurn,sourceTurn) {
                const logicRef = turnLogic[sourceTurn.properName];
                const ATKObjects = logicRef.ATKObjects;

                let skillRef = ATKObjects.gallagherSkillHealREF ??= ATKObjects.Skill["Special Brew"].variant1;
                let rank = sourceTurn.rank;
                let e2 = rank >= 2;
                
                
                if (!ATKObjects.gallagherSkillHealHEALOBJECT) {
                    let characterName = sourceTurn.properName;
                    let values = ATKObjects.gallagherSkillHealREFVALUES ??= battleActions.getLevelBasedParam(battleData,skillRef,sourceTurn);
                    ATKObjects.gallagherSkillHealHEALOBJECT = {
                        multipliers: {
                            primary: null,
                            blast: null,
                            all: null,
                        },
                        flatAmounts: {
                            primary: values[0],
                            blast: null,
                            all: null,
                        },
                        scalar: null,
                        DMGTags: [],
                        allToughness: false,
                        slot: skillRef.slot
                    }

                    let buffName = turnLogic[characterName].buffNames.lionsTail;
                    ATKObjects.gallagherSkillHealEFFECTRESSHEET = {
                        "stats": [EffectRES],
                        [EffectRES]: 0.30,
                        "source": characterName,
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
    

                if (battleData.isLoggyLogger) {logToBattle(battleData,{logType: "SkillStart", name:sourceTurn.properName, target:targetTurn.properName, isEnemy: false, isCharacter: true, AV: battleData.sumAV, actionSlot:skillRef.slot});}
                poke("SkillStart",battleData,{sourceTurn});

                poke("TargetAlly",battleData,{targetType:"Single", sourceTurn, targetTurn, targetSkill:skillRef.slot});

                // let targetTurn = battleData.nameBasedTurns[target];
                let healObject = ATKObjects.gallagherSkillHealHEALOBJECT
                battleActions.healAlly(battleData,healObject,targetTurn,sourceTurn,skillRef.slot,1,null)

                if (e2) {
                    let buffSheet = ATKObjects.gallagherSkillHealEFFECTRESSHEET;
                    buffSheet.duration = targetTurn.turnState ? 3 : 2;
                    battleActions.updateBuff(battleData,targetTurn,buffSheet);
                    battleActions.cleanseDebuff(battleData,targetTurn,1,"any");
                }

                // battleActions.attackWrapper(battleData,skillRef,sourceTurn,ATKObject);
                battleActions.updateEnergy(battleData,skillRef.energyRegen,sourceTurn);
                poke("SkillEnd",battleData,{sourceTurn});
            },
            gallagherTalentHeal(battleData,targetTurn,sourceTurn,batchArray,timesToHeal) {
                const logicRef = turnLogic[sourceTurn.properName];
                const ATKObjects = logicRef.ATKObjects;


                let skillRef = ATKObjects.gallagherTalentHealREF ??= ATKObjects.Talent["Tipsy Tussle"].variant1;

                if (!ATKObjects.gallagherTalentHealHEALOBJECT) {
                    let values = ATKObjects.gallagherTalentHealREFVALUES ??= battleActions.getLevelBasedParam(battleData,skillRef,sourceTurn);

                    ATKObjects.gallagherTalentHealHEALOBJECT = {
                        multipliers: {
                            primary: null,
                            blast: null,
                            all: null,
                        },
                        flatAmounts: {
                            primary: values[1],
                            blast: null,
                            all: null,
                        },
                        scalar: null,
                        DMGTags: [],
                        allToughness: false,
                        slot: skillRef.slot
                    }
                }
                
                let healObject = ATKObjects.gallagherTalentHealHEALOBJECT;

                if (battleData.isLoggyLogger) {logToBattle(battleData,{logType: "TalentStart", name:sourceTurn.properName, target:null, isEnemy: false, isCharacter: true, AV: battleData.sumAV, actionSlot:skillRef.slot});}
                poke("TalentStart",battleData,{sourceTurn});
                battleActions.healAlly(battleData,healObject,targetTurn,sourceTurn,skillRef.slot,timesToHeal,batchArray);
                poke("TalentEnd",battleData,{sourceTurn});
            },
            gallagherBasicEnhanced(battleData,target,sourceTurn) {
                const logicRef = turnLogic[sourceTurn.properName];
                const ATKObjects = logicRef.ATKObjects;


                let characterName = sourceTurn.properName;
                let skillRef = ATKObjects.gallagherBasicEnhancedREF ??= ATKObjects["Basic ATK"]["Nectar Blitz"].variant1;

                if (!ATKObjects.gallagherBasicEnhancedATKOBJECT) {
                    let values = ATKObjects.gallagherBasicEnhancedREFVALUES ??= battleActions.getLevelBasedParam(battleData,skillRef,sourceTurn);
                    const scalar = "ATK";
                    const tags = ["All","Basic","Fire"];
                    const actionTags = ["Basic","Attack"];
                    const keyShortcut = basicShorthand.makeKeysArray;
                    const realDMGKeys = keyShortcut(dmgKeys,tags);
                    const realPENKeys = keyShortcut(resPENKeys,tags);
                    const realShredKeys = keyShortcut(defShredKeys,tags);
                    const realVulnKeys = keyShortcut(vulnKeys,tags);
                    const compositeCacheTag = tags + actionTags;
                    //realDMGKeys,realPENKeys,realShredKeys,realVulnKeys
                    ATKObjects.gallagherBasicEnhancedATKOBJECT = {
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

                    ATKObjects.gallagherBasicEnhancedBLITZSHEET = {
                        "stats": [ATKP],
                        [ATKP]: -values[1],
                        "source": characterName,
                        "sourceOwner": sourceTurn.properName,
                        "buffName": "Nectar Blitz -ATK%",
                        "duration": 2,
                        "AVApplied": 0,
                        "maxStacks": 1,
                        "currentStacks": 1,
                        "decay": false,
                        "isDebuff": true,
                        "expireType": "EndTurn"
                    }
                }
                
                let ATKObject = ATKObjects.gallagherBasicEnhancedATKOBJECT;
                if (battleData.isLoggyLogger) {logToBattle(battleData,{logType: "BasicATKStart", name:characterName, target, isEnemy: false, isCharacter: true, AV: battleData.sumAV, isEnhanced: true, actionSlot:skillRef.slot});}
                poke("BasicATKStart",battleData,{sourceTurn});

                let targetTurn = battleData.primaryTarget//single target, so the enemy hit will always be one enemy, aka first key;
                let buffSheet = ATKObjects.gallagherBasicEnhancedBLITZSHEET;
                battleActions.updateBuff(battleData,targetTurn,buffSheet);


                battleActions.attackWrapper(battleData,skillRef,sourceTurn,ATKObject);
                battleActions.updateEnergy(battleData,skillRef.energyRegen,sourceTurn);

                poke("BasicATKEnd",battleData,{sourceTurn});
                logicRef.characterValuesBattle.nextBasicEnhanced = false;
            },
            gallagherUltimate(battleData,sourceTurn) {
                const logicRef = turnLogic[sourceTurn.properName];
                const ATKObjects = logicRef.ATKObjects;

                let characterName = sourceTurn.properName;
                let skillRef = ATKObjects.gallagherUltimateREF ??= ATKObjects.Ultimate["Champagne Etiquette"].variant1;
                let rank = sourceTurn.rank;

                if (!ATKObjects.gallagherUltimateATKOBJECT) {
                    let values = battleActions.getLevelBasedParam(battleData,skillRef,sourceTurn);
                    const scalar = "ATK";
                    const tags = ["All","Ultimate","Fire"];
                    const actionTags = ["Ultimate","Attack"];
                    const keyShortcut = basicShorthand.makeKeysArray;
                    const realDMGKeys = keyShortcut(dmgKeys,tags);
                    const realPENKeys = keyShortcut(resPENKeys,tags);
                    const realShredKeys = keyShortcut(defShredKeys,tags);
                    const realVulnKeys = keyShortcut(vulnKeys,tags);
                    const compositeCacheTag = tags + actionTags;
                    //realDMGKeys,realPENKeys,realShredKeys,realVulnKeys
                    ATKObjects.gallagherUltimateATKOBJECT = {
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
                        compositeCacheTag
                    }
                }
                let ATKObject = ATKObjects.gallagherUltimateATKOBJECT;


                let e4 = rank >= 4;
                let skillRef2 = ATKObjects.gallagherTalentHealREF ??= ATKObjects.Talent["Tipsy Tussle"].variant1;
                let values2 = ATKObjects.gallagherTalentHealREFVALUES ??= battleActions.getLevelBasedParam(battleData,skillRef2,sourceTurn);
                let besotted = ATKObjects.besottedFunction ??= turnLogic[characterName].skillFunctions.besotted;
                for (let enemySlot of battleData.enemyPositions) {
                    besotted(battleData,sourceTurn,enemySlot,e4,values2);
                }


                // poke("BasicATKStart",battleData,{source:"Gallagher"});
                battleActions.updateEnergy(battleData,-sourceTurn.maxEnergy,sourceTurn);
                battleActions.attackWrapper(battleData,skillRef,sourceTurn,ATKObject);
                battleActions.updateEnergy(battleData,skillRef.energyRegen,sourceTurn);
                logicRef.characterValuesBattle.nextBasicEnhanced = true;
                // poke("BasicATKEnd",battleData,{source:"Gallagher"});

                if (!sourceTurn.turnState) {battleActions.actionAdvance(1,sourceTurn,battleData,"Major Trace: Organic Yeast");}//will advance when ult is cast but not within his turn, obv does nothing then
                sourceTurn.ultyQueued = false;
            },
            besotted(battleData,sourceTurn,targetTurn,e4,values2) {
                const logicRef = turnLogic[sourceTurn.properName];
                const ATKObjects = logicRef.ATKObjects;

                let characterName = sourceTurn.properName;
                let buffName = ATKObjects.besottedBuffName ??= turnLogic[characterName].buffNames.besotted;


                //technique isn't the ultimate, so e4 shouldn't modify it (I believe, at least)
                //for now, technique always passes false/null to e4 to ensure that.
                if (!ATKObjects.enemyBesottedSHEET) {
                    ATKObjects.enemyBesottedSHEET = {
                        "stats": [VulnBreak],
                        [VulnBreak]: values2[0],
                        "source": characterName,
                        "sourceOwner": characterName,
                        "buffName": buffName,
                        "duration": 2,
                        "AVApplied": 0,
                        "maxStacks": 1,
                        "currentStacks": 1,
                        "decay": false,
                        "isDebuff": true,
                        "expireType": "EndTurn"
                    }
                }
                let buffSheet = ATKObjects.enemyBesottedSHEET;
                buffSheet.duration = (e4 ? 3 : 2) + (targetTurn.turnState ? 1 : 0),//TODO: see if debuffs applied to the enemy on their turn, also gain 1 extra turn from the perspective of EndTurn expirations
                battleActions.updateBuff(battleData,targetTurn,buffSheet);
            },
            statCheck(battleData,currentTurn) {
                const logicRef = turnLogic[currentTurn.properName];
                const ATKObjects = logicRef.ATKObjects;

                let buffNames = logicRef.buffNames;
                let buffName1 = buffNames.concoction;

                let currentBE = currentTurn.statTable[DamageBreak];
                let conversion = Math.min(0.75,currentBE * 0.5);
                let buffRef = currentTurn.buffsObject;
                let buffCheck = buffRef[buffName1];

                let ownerName = currentTurn.properName;

                if (buffCheck && buffCheck[HealingOutgoing] === conversion) {return;}//if buff exists and the amount hasn't changed, then end it here
                else if (buffCheck && buffCheck[HealingOutgoing] != conversion) {
                    //so if gallagher already has the buff, but the new conversion amount does NOT match the existing amount
                    //then silently remove the old buff
                    removeBuff(battleData,currentTurn,buffCheck,true);
                }


                //then apply the new buff, which we can announce instead of keeping it silent.
                //bc if we're adding a new one it's bc the amount changed, and if the amount changed then the action SHOULD be visible in the log.
                if (!ATKObjects.gallagherHealingConversionSHEET) {
                    ATKObjects.gallagherHealingConversionSHEET = {
                        "stats": [HealingOutgoing],
                        [HealingOutgoing]: conversion,
                        "source": ownerName,
                        "sourceOwner": currentTurn.properName,
                        "buffName": buffName1,
                        "duration": 1,
                        "AVApplied": 0,
                        "maxStacks": 1,
                        "currentStacks": 1,
                        "decay": false,
                        "expireType": null
                    }
                }
                let buffSheet = ATKObjects.gallagherHealingConversionSHEET;
                buffSheet[HealingOutgoing] = conversion;
                battleActions.updateBuff(battleData,currentTurn,buffSheet);
            },
            gallagherTechnique(battleData,target,sourceTurn) {
                let characterName = sourceTurn.properName;

                const logicRef = turnLogic[sourceTurn.properName];
                const ATKObjects = logicRef.ATKObjects;

                // let charSlot = sourceTurn.name;
                // let skillPathing = characters[characterName].skills;
                let skillRef = ATKObjects.gallagherTechREF ??= ATKObjects.Technique["Artisan Elixir"].variant1;

                if (!ATKObjects.gallagherTechATKObject) {
                    let values = ATKObjects.gallagherTechREFVALUES ??= battleActions.getLevelBasedParam(battleData,skillRef,sourceTurn);
                    const scalar = "ATK";
                    const tags = ["All","Technique","Fire"];
                    const actionTags = ["Technique","Attack"];
                    const keyShortcut = basicShorthand.makeKeysArray;
                    const realDMGKeys = keyShortcut(dmgKeys,tags);
                    const realPENKeys = keyShortcut(resPENKeys,tags);
                    const realShredKeys = keyShortcut(defShredKeys,tags);
                    const realVulnKeys = keyShortcut(vulnKeys,tags);
                    const compositeCacheTag = tags + actionTags;
                    //realDMGKeys,realPENKeys,realShredKeys,realVulnKeys
                    ATKObjects.gallagherTechATKObject = {
                        multipliers: {
                            primary: null,
                            blast: null,
                            all: values[1],
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
                const ATKObject = ATKObjects.gallagherTechATKObject;

                if (battleData.isLoggyLogger) {logToBattle(battleData,{logType: "TechniqueStart", name:characterName, target, isEnemy: false, isCharacter: true, AV: battleData.sumAV, actionSlot:skillRef.slot});}
                poke("TechniqueStart",battleData,{sourceTurn});

                let skillRef2 = ATKObjects.gallagherTalentHealREF ??= ATKObjects.Talent["Tipsy Tussle"].variant1;
                let values2 = ATKObjects.gallagherTalentHealREFVALUES ??= battleActions.getLevelBasedParam(battleData,skillRef2,sourceTurn);
                let besotted = ATKObjects.besottedFunction ??= turnLogic[characterName].skillFunctions.besotted;
                for (let enemySlot of battleData.enemyPositions) {
                    besotted(battleData,sourceTurn,enemySlot,false,values2);
                }

                battleActions.attackWrapper(battleData,skillRef,sourceTurn,ATKObject);
                poke("TechniqueEnd",battleData,{sourceTurn});
            },
        },
        "listeners": [
            {
                "trigger": "AttackEnd",
                condition(battleData,generalInfo) {
                    let ownerTurn = this.ownerTurn;
                    let characterName = ownerTurn.properName;
                    let sourceTurn = generalInfo.sourceTurn;
                    if (sourceTurn.isEnemy) {return;}//is the attack coming from an allied source
                    // let charSlot = sourceTurn.name;

                    let logicRef = turnLogic[characterName];
                    let buffName = this.buffName ??= logicRef.buffNames.besotted;
                    const targetsGotHit = generalInfo.targetsGotHit;
                    //CONFIRMED USING ASTA BOUNCE: healing was evaluated after the attack completed and bounces were finished, thank GOD
                    //this would have sucked major anus if we had to evaluate it on a hit-by-hit basis
                    let besottedWasFound = false;

                    let healCall = this.healCall ??= logicRef.skillFunctions.gallagherTalentHeal;
                    let timesToHeal = 0;
                    const enemyTurns = battleData.enemyBasedTurns;
                    for (let targetHit in targetsGotHit) {
                        const currentTarget = enemyTurns[targetHit];
                        if (currentTarget.buffsObject[buffName]) {
                            timesToHeal += 1;
                            besottedWasFound = true;
                        }
                    } 

                    if (besottedWasFound) {
                        let enhancedCheck = logicRef.characterValuesBattle.nextBasicEnhanced;
                        if (sourceTurn.properName === characterName && generalInfo.dmgSlot === "Basic ATK" && enhancedCheck) {
                            if (battleData.isLoggyLogger) {logToBattle(battleData,{logType: "GenericAction", source:this.listenerName, bodyText: `Activated "Bottoms Up"`});}
                            healCall(battleData,null,ownerTurn,battleData.allyPositions,1);
                        }
                        else {
                            healCall(battleData,sourceTurn,ownerTurn,null,timesToHeal);
                        }
                    }
                },
                "target": "allies",
                "listenerName": "Besotted Healing controller",
                "ownerTurn": {},
            },
            {
                "trigger": "UpdateStatBreak",
                condition(battleData,generalInfo) {
                    let ownerTurn = this.ownerTurn;
                    let sourceTurn = generalInfo.sourceTurn;

                    if (sourceTurn.properName != ownerTurn.properName) {return;}

                    const statCheck = this.statCheck ??= turnLogic[ownerTurn.properName].skillFunctions.statCheck;
                    statCheck(battleData,ownerTurn);
                },
                "target": "self",
                "listenerName": "Novel Concoction B.E. check",
                "ownerTurn": {},
            },
            {
                "trigger": "PreBattleEntersCombat",
                condition(battleData,generalInfo) {
                    let ownerTurn = this.ownerTurn;

                    const statCheck = this.statCheck ??= turnLogic[ownerTurn.properName].skillFunctions.statCheck
                    statCheck(battleData,ownerTurn);//side note buff, can be handled in this one since it's already here
                },
                "target": "self",
                "listenerName": "Gallagher - Novel Concoction start check",
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
                            attack: turnLogic[ownerTurn.properName].skillFunctions.gallagherUltimate,
                            target: this.target,
                            name: this.listenerName,
                            properName: ownerTurn.properName,
                            sourceTurn: ownerTurn
                        }
                        queueObject.sourceTurn = ownerTurn;
                        battleActions.queueUltimateUse(battleData,queueObject);
                    }
                },
                "target": "enemy",
                "listenerName": "Gallagher - Ultimate queued - Ultimate",
                "ownerTurn": {},
            },
            {
                "trigger": "StartBattle",
                condition(battleData,generalInfo) {
                    let ownerTurn = this.ownerTurn;
                    let characterName = ownerTurn.properName;

                    let logicRef = turnLogic[characterName];
                    //PreBattleStartTechniquesNormal for always active techniques that don't need to care
                    //StartBattle for dmg techniques that could have conflicts
                    let useTechnique = logicRef.useTechnique;
                    let attackUsed = battleData.attackTechniqueUsed;
                    if (useTechnique && !attackUsed && battleData.techniquesAllowed) {
                        const gallagherTechnique = this.gallagherTechnique ??= logicRef.skillFunctions.gallagherTechnique;
                        gallagherTechnique(battleData,"enemy",ownerTurn);
                        battleData.attackTechniqueUsed = true;
                    }
                },
                "target": "self",
                "listenerName": "Gallagher Technique",
                "ownerTurn": {},
            },
        ],
        "eidolonListeners": {
            1: [
                {
                    "trigger": "PreBattleEntersCombat",
                    condition(battleData,generalInfo) {
                        let ownerTurn = this.ownerTurn;
    
                        let amount = 20;
                        battleActions.updateEnergy(battleData,amount,ownerTurn,false,this.listenerName);
                        
                        let buffSheet = this.buffSheet ??= {
                            "stats": [EffectRES],
                            [EffectRES]: 0.50,
                            "source": "E1",
                            "sourceOwner": ownerTurn.properName,
                            "buffName": turnLogic[ownerTurn.properName].buffNames.e1Buff,
                            "duration": null,
                            "AVApplied": 0,
                            "maxStacks": 1,
                            "currentStacks": 1,
                            "decay": false,
                            "expireType": null
                        }
                        battleActions.updateBuff(battleData,ownerTurn,buffSheet)
                        // When entering the battle, Gallagher regenerates 20 Energy and increases Effect RES by 50%.
                    },
                    "target": "self",
                    "listenerName": "Gallagher - +Energy & EffectRES/Start - E1",
                    "announce": false,
                    "ownerTurn": {},
                },
            ],
            2: [],
            3: [],
            4: [],
            5: [],
            6: [
                {
                    "trigger": "PreBattleEntersCombat",
                    condition(battleData,generalInfo) {
                        let ownerTurn = this.ownerTurn;
    
                        let buffSheet = this.buffSheet ??= {
                            "stats": [DamageBreak,DamageBreakEfficiency],
                            [DamageBreak]: 0.20,
                            [DamageBreakEfficiency]: 0.20,
                            "source": "E6",
                            "sourceOwner": ownerTurn.properName,
                            "buffName": turnLogic[ownerTurn.properName].buffNames.e6Buff,
                            "duration": null,
                            "AVApplied": 0,
                            "maxStacks": 1,
                            "currentStacks": 1,
                            "decay": false,
                            "expireType": null
                        }
                        battleActions.updateBuff(battleData,ownerTurn,buffSheet)
                    },
                    "target": "self",
                    "listenerName": "Gallagher - +Break Effect/Efficiency - E6",
                    "announce": false,
                    "ownerTurn": {},
                },
            ],
        },
        "ATKObjects": {},
        "characterValues": {
            "nextBasicEnhanced": false,
        },
        "useTechnique": true,
        "techniqueType": "Attack",
        "buffNames": {
            "concoction": "Novel Concoction",
            "besotted": "Besotted",
            "lionsTail": "Lion's Tail E2",

            "e1Buff": "E1: Salty Dog",
            "e6Buff": "E6: Blood and Sand",
        },
        "characterValuesBattle": {},
    },
    "Huohuo": {//ATKOBJECTS DONE //TODO: e2: ally revive shit, later when I allow for ally deaths // e4: dunno if healing final multi or just outgoing healing
        logic(thisTurn,battleData) {
            let currentSP = battleData.skillPointCurrent;
            let minimum = currentSP >= 1;

            if (minimum && checkSkill(battleData,thisTurn)) {
                const returnSkillCall = this.returnSkillCall ??= {action: "Skill", points: -1, actionCall: this.skillFunctions.huohuoSkillHeal, target: null, endTurn: true}
                returnSkillCall.target = battleActions.findLowestHPAlly(battleData);
                return returnSkillCall;
            }

            const returnBasicCall = this.returnBasicCall ??= {action: "BasicATK", points: 1, actionCall: this.skillFunctions.huohuoBasic, target: "enemy", endTurn: true}
            return returnBasicCall;
        },
        "skillFunctions": {
            huohuoBasic(battleData,target,sourceTurn) {
                const logicRef = turnLogic[sourceTurn.properName];
                const ATKObjects = logicRef.ATKObjects;

                let skillRef = ATKObjects.huohuoBasicREF ??= ATKObjects["Basic ATK"]["Banner: Stormcaller"].variant1;
                if (!ATKObjects.huohuoBasicATKOBJECT) {
                    let values = ATKObjects.huohuoBasicREFVALUES ??= battleActions.getLevelBasedParam(battleData,skillRef,sourceTurn);
                    const scalar = "HP";
                    const tags = ["All","Basic","Wind"];
                    const actionTags = ["Basic","Attack"];
                    const keyShortcut = basicShorthand.makeKeysArray;
                    const realDMGKeys = keyShortcut(dmgKeys,tags);
                    const realPENKeys = keyShortcut(resPENKeys,tags);
                    const realShredKeys = keyShortcut(defShredKeys,tags);
                    const realVulnKeys = keyShortcut(vulnKeys,tags);
                    const compositeCacheTag = tags + actionTags;
                    //realDMGKeys,realPENKeys,realShredKeys,realVulnKeys
                    ATKObjects.huohuoBasicATKOBJECT = {
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
                let ATKObject = ATKObjects.huohuoBasicATKOBJECT;

                if (battleData.isLoggyLogger) {logToBattle(battleData,{logType: "BasicATKStart", name:sourceTurn.properName, target, isEnemy: false, isCharacter: true, AV: battleData.sumAV, actionSlot:skillRef.slot});}
                poke("BasicATKStart",battleData,{sourceTurn});
                battleActions.attackWrapper(battleData,skillRef,sourceTurn,ATKObject);
                battleActions.updateEnergy(battleData,skillRef.energyRegen,sourceTurn);
                poke("BasicATKEnd",battleData,{sourceTurn});
            },
            huohuoSkillHeal(battleData,targetTurn,sourceTurn) {
                const logicRef = turnLogic[sourceTurn.properName];
                const ATKObjects = logicRef.ATKObjects;

                let skillRef = ATKObjects.huohuoSkillHealHealREF ??= ATKObjects.Skill["Talisman: Protection"].variant1;
                let rank = sourceTurn.rank;
                // let e2 = rank >= 2;
                targetTurn = targetTurn ?? sourceTurn;
                //in some cases the team may be healed to full already, however if we recast for the sake of renewing divine provision, then we auto to herself to heal
                
                //TODO: do blast heal targets count as targeted for the sake of something like sacerdos or wavestrider
                if (!ATKObjects.huohuoSkillHealHealHEALOBJECT) {
                    let values = ATKObjects.huohuoSkillHealHealREFVALUES ?? battleActions.getLevelBasedParam(battleData,skillRef,sourceTurn);
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
                        slot: skillRef.slot
                    }
                }
                
    

                if (battleData.isLoggyLogger) {logToBattle(battleData,{logType: "SkillStart", name:sourceTurn.properName, target:targetTurn.properName, isEnemy: false, isCharacter: true, AV: battleData.sumAV, actionSlot:skillRef.slot});}
                poke("SkillStart",battleData,{sourceTurn});

                poke("TargetAlly",battleData,{targetType:"Single", sourceTurn, targetTurn, targetSkill:skillRef.slot});

                // let targetTurn = battleData.nameBasedTurns[target];
                let healObject = ATKObjects.huohuoSkillHealHealHEALOBJECT;
                battleActions.healAlly(battleData,healObject,targetTurn,sourceTurn,skillRef.slot,1,null)

                logicRef.skillFunctions.huohuoApplyDivineProvision(battleData,sourceTurn);

                // battleActions.attackWrapper(battleData,skillRef,sourceTurn,ATKObject);
                battleActions.updateEnergy(battleData,skillRef.energyRegen,sourceTurn);
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
                        "duration": 0,
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
                countdownSheet.duration = turnOverride ? turnOverride : e1 ? 3 : 2;
                sourceTurn.talentProvisionIsActive = true;
                sourceTurn.talentCleanseCounter = 0;
                const updateBuff = battleActions.updateBuff;
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
                    // const updateBuff = battleActions.updateBuff;
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
                        slot: skillRef.slot
                    }
                }

                if (battleData.isLoggyLogger) {logToBattle(battleData,{logType: "TalentStart", name:sourceTurn.properName, target:targetTurn.properName, isEnemy: false, isCharacter: true, AV: battleData.sumAV, actionSlot:skillRef.slot});}
                poke("TalentStart",battleData,{sourceTurn});

                // let targetTurn = battleData.nameBasedTurns[target];
                let healObject = ATKObjects.provisionHealHEALOBJECT;
                const healAlly = battleActions.healAlly;
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
                battleActions.updateEnergy(battleData,1,sourceTurn,false,"Stress Reaction to Horror");
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


                battleActions.updateEnergy(battleData,-sourceTurn.maxEnergy,sourceTurn);

                const allyPositions = battleData.allyPositions;
                const updateBuff = battleActions.updateBuff;
                const updateEnergy = battleActions.updateEnergy;
                const percentRegen = values[0];

                poke("TargetAlly",battleData,{targetType:"Team", sourceTurn, targetTurn:null, targetSkill:skillRef.slot,targetChildEntities: false});
                for (let ally of allyPositions) {
                    if (ally.properName === characterName) {continue;}//huohuo doesn't give herself energy, rip
                    const energyToRegen = ally.maxEnergy * percentRegen;
                    updateEnergy(battleData,energyToRegen,ally,true,"Huohuo Ultimate");
                    buffSheet.duration = ally.turnState ? 3 : 2;
                    updateBuff(battleData,ally,buffSheet);
                }

                battleActions.nonViolentWrapper(battleData,skillRef,characterName);
                battleActions.updateEnergy(battleData,skillRef.energyRegen,sourceTurn);

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
                const updateBuff = battleActions.updateBuff;
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
                            attack: turnLogic[ownerTurn.properName].skillFunctions.huohuoUltimate,
                            target: this.target,
                            name: this.listenerName,
                            properName: ownerTurn.properName,
                            sourceTurn: null
                        }
                        queueObject.sourceTurn = ownerTurn;
                        battleActions.queueUltimateUse(battleData,queueObject);
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
                        "duration": null,
                        "AVApplied": 0,
                        "maxStacks": 1,
                        "currentStacks": 1,
                        "decay": false,
                        "expireType": null
                    }
                    battleActions.updateBuff(battleData,ownerTurn,buffSheet)
                },
                "target": "self",
                "listenerName": "The Cursed One - CC RES application",
                "announce": false,
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
                        buffSheet.duration = targetTurn.turnState ? 3 : 2;
                        battleActions.updateBuff(battleData,targetTurn,buffSheet)
                    },
                    "target": "ally",
                    "listenerName": "Woven Together, Cohere Forever - healed ally listener",
                    "announce": false,
                    "ownerTurn": {},
                },
            ],
        },
        "ATKObjects": {},
        "characterValues": {
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
    },
    //Nihility
    "Silver Wolf": {//ATKOBJECTS DONE
        logic(thisTurn,battleData) {
            // let skillPointsCheck = battleData.skillPointCurrent > 4;
            // let ultySoon = (thisTurn.currentEnergy - thisTurn.currentEnergy) <= 30;//TODO: need to make it so this will account for energy regen rate too
            // let characterName = "Silver Wolf";
            // let logicShort = turnLogic[characterName]
            // let statCalls = shortRef.characterValuesBattle;
            // let shortCalls = shortRef.skillFunctions;
            // let skillPathing = characters[characterName].skills;

            let currentSP = battleData.skillPointCurrent;
            let minimum = currentSP >= 1;

            let couldImplant = true;//shortRef.skillFunctions.swCheckWeakness(battleData);

            if (minimum && couldImplant && checkSkill(battleData,thisTurn)) {
                const returnSkillCall = this.returnSkillCall ??= {action: "Skill", points: -1, actionCall: this.skillFunctions.swSkill, target: "enemy", endTurn: true};
                return returnSkillCall;
            }

            const returnBasicCall = this.returnBasicCall ??= {action: "BasicATK", points: 1, actionCall: this.skillFunctions.swBasic, target: "enemy", endTurn: true};
            return returnBasicCall;
        },
        "weaknessIndexConversion": {
            "Fire": WeaknessFire,
            "Ice": WeaknessIce,
            "Lightning": WeaknessLightning,
            "Wind": WeaknessWind,
            "Quantum": WeaknessQuantum,
            "Imaginary": WeaknessImaginary,
            "Physical": WeaknessPhysical,
        },
        "resistanceIndexConversion": {
            "Fire": ResistanceFire,
            "Ice": ResistanceIce,
            "Lightning": ResistanceLightning,
            "Wind": ResistanceWind,
            "Quantum": ResistanceQuantum,
            "Imaginary": ResistanceImaginary,
            "Physical": ResistancePhysical,
        },
        "skillFunctions": {
            swBasic(battleData,target,sourceTurn) {
                const logicRef = turnLogic[sourceTurn.properName];
                const ATKObjects = logicRef.ATKObjects;

                let skillRef = ATKObjects.swBasicREF ??= ATKObjects["Basic ATK"]["System Warning"].variant1;

                if (!ATKObjects.swBasicATKOBJECT) {
                    let values = ATKObjects.swBasicREFVALUES ??= battleActions.getLevelBasedParam(battleData,skillRef,sourceTurn);
                    const scalar = "ATK";
                    const tags = ["All","Basic","Quantum"];
                    const actionTags = ["Basic","Attack"];
                    const keyShortcut = basicShorthand.makeKeysArray;
                    const realDMGKeys = keyShortcut(dmgKeys,tags);
                    const realPENKeys = keyShortcut(resPENKeys,tags);
                    const realShredKeys = keyShortcut(defShredKeys,tags);
                    const realVulnKeys = keyShortcut(vulnKeys,tags);
                    const compositeCacheTag = tags + actionTags;
                    //realDMGKeys,realPENKeys,realShredKeys,realVulnKeys
                    ATKObjects.swBasicATKOBJECT = {
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
                let ATKObject = ATKObjects.swBasicATKOBJECT;

                if (battleData.isLoggyLogger) {logToBattle(battleData,{logType: "BasicATKStart", name:sourceTurn.properName, target, isEnemy: false, isCharacter: true, AV: battleData.sumAV, actionSlot:skillRef.slot});}
                poke("BasicATKStart",battleData,{sourceTurn});
                battleActions.attackWrapper(battleData,skillRef,sourceTurn,ATKObject);
                battleActions.updateEnergy(battleData,skillRef.energyRegen,sourceTurn);
                poke("BasicATKEnd",battleData,{sourceTurn});
            },
            swSkill(battleData,target,sourceTurn) {
                const logicRef = turnLogic[sourceTurn.properName];
                const ATKObjects = logicRef.ATKObjects;

                let characterName = sourceTurn.properName;
                // let charSlot = sourceTurn.name;
                // let skillPathing = characters[characterName].skills;
                let skillRef = ATKObjects.silverwolfSkillREF ??= ATKObjects["Skill"]["Allow Changes?"].variant1;
                let values = ATKObjects.silverwolfSkillREFVALUES ??= battleActions.getLevelBasedParam(battleData,skillRef,sourceTurn);

                if (!ATKObjects.silverwolfSkillATKOBJECT) {
                    const scalar = "ATK";
                    const tags = ["All","Skill","Quantum"];
                    const actionTags = ["Skill","Attack"];
                    const keyShortcut = basicShorthand.makeKeysArray;
                    const realDMGKeys = keyShortcut(dmgKeys,tags);
                    const realPENKeys = keyShortcut(resPENKeys,tags);
                    const realShredKeys = keyShortcut(defShredKeys,tags);
                    const realVulnKeys = keyShortcut(vulnKeys,tags);
                    const compositeCacheTag = tags + actionTags;
                    //realDMGKeys,realPENKeys,realShredKeys,realVulnKeys
                    ATKObjects.silverwolfSkillATKOBJECT = {
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


                    ATKObjects.silverwolfSkillALLRESSHEET = {
                        "stats": [ResistanceAll],
                        [ResistanceAll]: -values[5],
                        "source": characterName,
                        "sourceOwner": sourceTurn.properName,
                        "buffName": logicRef.buffNames.resReduction,
                        "duration": 2,
                        "AVApplied": 0,
                        "maxStacks": 1,
                        "currentStacks": 1,
                        "decay": false,
                        "isDebuff": true,
                        "expireType": "EndTurn"
                    }

                    const implantRef = ATKObjects.implantSheets ??= {};
                    const buffNames = logicRef.buffNames;
                    const elementKeys = logicRef.weaknessIndexConversion;

                    //we need to construct and cache just once, the initial debuff sheet for every possible element implant available to sw
                    //then we can modify the res reduction aspect after the fact
                    for (let elementKey in elementKeys) {
                        implantRef[elementKey] = {
                            "stats": [
                                [`Weakness${elementKey}`],
                                [`Resistance${elementKey}`]
                            ],
                            [`Weakness${elementKey}`]: 1,
                            [`Resistance${elementKey}`]: 0,
                            "source": "Skill",
                            "sourceOwner": characterName,
                            "buffName": buffNames[`implant${elementKey}`],
                            "duration": 3,
                            "AVApplied": 0,
                            "maxStacks": 1,
                            "currentStacks": 1,
                            "decay": false,
                            "isDebuff": true,
                            "expireType": "EndTurn"
                        }
                    }
                }
                let ATKObject = ATKObjects.silverwolfSkillATKOBJECT;

                if (battleData.isLoggyLogger) {logToBattle(battleData,{logType: "SkillStart", name:characterName, target, isEnemy: false, isCharacter: true, AV: battleData.sumAV, actionSlot:skillRef.slot});}
                poke("SkillStart",battleData,{sourceTurn});

                const firstCharObject = battleData.nameBasedTurns.char1;
                const firstCharElement = firstCharObject.element;
                const targetEnemy = battleData.primaryTarget;
                const weaknessIndex = logicRef.weaknessIndexConversion[firstCharElement];
                const fullImplant = !targetEnemy.statTable[weaknessIndex];

                const weaknessSheet = ATKObjects.implantSheets[firstCharElement];
                
                const resistanceIndex = logicRef.resistanceIndexConversion[firstCharElement];
                weaknessSheet[resistanceIndex] = fullImplant ? -values[3] : 0;
                //So fun fact, the implant + res reduction CAN stack with other implants(like archer e2) but sw has to implant first to get her 20% res reduction for that element
                //if archer implants first and sw implants after, only 20% res reduction is applied from archer only, but if sw comes first then it's 40% total.


                const updateBuff = battleActions.updateBuff;
                updateBuff(battleData,targetEnemy,weaknessSheet);

                //NOTE: normally I'd bother with the whole, "if it is the enemy's turn right now, add one more duration to the timer"
                //but this will only ever be applied on SW's turn, so it's never gonna happen
                //TODO: this may not actually be true when implant shifts from enemy to enemy via death swapping, check later if the duration renews and also if it does does it also modify the duration based on turnstate
                let buffSheet2 = ATKObjects.silverwolfSkillALLRESSHEET;
                updateBuff(battleData,targetEnemy,buffSheet2);


                battleActions.attackWrapper(battleData,skillRef,sourceTurn,ATKObject);
                battleActions.updateEnergy(battleData,skillRef.energyRegen,sourceTurn);
                poke("SkillEnd",battleData,{sourceTurn});
            },
            swUltimate(battleData,sourceTurn) {
                const logicRef = turnLogic[sourceTurn.properName];
                const ATKObjects = logicRef.ATKObjects;

                let skillRef = ATKObjects.silverwolfUltimateREF ??= ATKObjects.Ultimate["User Banned"].variant1;

                if (!ATKObjects.silverwolfUltimateATKOBJECT) {
                    let values = ATKObjects.silverwolfUltimateREFVALUES ??= battleActions.getLevelBasedParam(battleData,skillRef,sourceTurn);
                    const scalar = "ATK";
                    const tags = ["All","Ultimate","Quantum"];
                    const actionTags = ["Ultimate","Attack"];
                    const keyShortcut = basicShorthand.makeKeysArray;
                    const realDMGKeys = keyShortcut(dmgKeys,tags);
                    const realPENKeys = keyShortcut(resPENKeys,tags);
                    const realShredKeys = keyShortcut(defShredKeys,tags);
                    const realVulnKeys = keyShortcut(vulnKeys,tags);
                    const compositeCacheTag = tags + actionTags;
                    //realDMGKeys,realPENKeys,realShredKeys,realVulnKeys
                    ATKObjects.silverwolfUltimateATKOBJECT = {
                        multipliers: {
                            primary: null,//TODO, fix issue with sw ulty still pulling from the old skill, seems to be fucked
                            blast: null,
                            all: values[0],
                        },
                        scalar,
                        DMGTags: tags,
                        allToughness: false,
                        slot: skillRef.slot,
                        realDMGKeys,realPENKeys,realShredKeys,realVulnKeys,
                        actionTags,
                        compositeCacheTag
                    }

                    ATKObjects.silverwolfUltimateDEFDEBUFFSHEET = {
                        "stats": [DEFP],
                        [DEFP]: -values[2],
                        "source": "Ultimate",
                        "sourceOwner": sourceTurn.properName,
                        "buffName": logicRef.buffNames.defDebuff,
                        "duration": 3,
                        "AVApplied": 0,
                        "maxStacks": 1,
                        "currentStacks": 1,
                        "decay": false,
                        "isDebuff": true,
                        "expireType": "EndTurn"
                    }
                }
                
                const updateBuff = battleActions.updateBuff;
                let ATKObject = ATKObjects.silverwolfUltimateATKOBJECT;
                let buffSheet = ATKObjects.silverwolfUltimateDEFDEBUFFSHEET;
                for (let enemySlot of battleData.enemyPositions) {
                    buffSheet.duration = enemySlot.turnState ? 4 : 3;
                    updateBuff(battleData,enemySlot,buffSheet);
                }
                battleActions.updateEnergy(battleData,-sourceTurn.maxEnergy,sourceTurn);
                let ultyHit = battleActions.attackWrapper(battleData,skillRef,sourceTurn,ATKObject);
                battleActions.updateEnergy(battleData,skillRef.energyRegen,sourceTurn);



                let e1 = sourceTurn.rank >= 1;
                if (e1) {
                    let debuffCounter = 0;
                    let targetsGotHit = ultyHit.targetsGotHit;
                    const enemyTurns = battleData.enemyBasedTurns;

                    const min = Math.min;
                    for (let entry in targetsGotHit) {
                        const currentTarget = enemyTurns[entry];
                        let debuffsCountNew = currentTarget.debuffCounter;
                        debuffCounter = min(5,debuffCounter + debuffsCountNew);
                        if (debuffCounter === 5) {break;}
                    }

                    if (debuffCounter) {
                        let energyRegen = debuffCounter * 7;
                        battleActions.updateEnergy(battleData,energyRegen,sourceTurn,false,"E1: Social Engineering");
                    }
                }
                sourceTurn.ultyQueued = false;
            },
            applySWBug(battleData,targetTurn,sourceTurn) {
                const logicRef = turnLogic[sourceTurn.properName];
                const ATKObjects = logicRef.ATKObjects;

                let characterName = sourceTurn.properName;
                // let skillPathing = characters[characterName].skills;
                const skillRef = ATKObjects.applySWBugREF ??= ATKObjects.Talent["Awaiting System Response..."].variant1;

                if (!ATKObjects.applySWBugINDEX) {
                    const values = ATKObjects.applySWBugREFVALUES ??= battleActions.getLevelBasedParam(battleData,skillRef,sourceTurn);

                    const buffNames = logicRef.buffNames;
                    ATKObjects.applySWBugINDEX = [
                        {buffName: buffNames.bugDEF, statIndex: DEFP, bugValue: -values[1], buffSheet: null},
                        {buffName: buffNames.bugATK, statIndex: ATKP, bugValue: -values[0], buffSheet: null},
                        {buffName: buffNames.bugSPD, statIndex: SPDP, bugValue: -values[2], buffSheet: null}
                    ];

                    for (let bugEntry of ATKObjects.applySWBugINDEX) {
                        bugEntry.buffSheet = {
                            "stats": [bugEntry.statIndex],
                            [bugEntry.statIndex]: bugEntry.bugValue,
                            "source": "Talent",
                            "sourceOwner": sourceTurn.properName,
                            "buffName":  bugEntry.buffName,
                            "duration": 4,//major trace: Generate extends the duration to 4 from 3
                            "AVApplied": 0,
                            "maxStacks": 1,
                            "currentStacks": 1,
                            "decay": false,
                            "isDebuff": true,
                            "expireType": "EndTurn"
                        }
                    }
                }
                
                const bugIndex = ATKObjects.applySWBugINDEX;
                const charValuesRef = sourceTurn.battleValues;
                charValuesRef.bugCycleCounter += 1;
                const bugToApply = bugIndex[charValuesRef.bugCycleCounter-1];
                const buffSheet = bugToApply.buffSheet;
                buffSheet.duration = targetTurn.turnState ? 5 : 4;

                if (battleData.isLoggyLogger) {logToBattle(battleData,{logType: "TalentStart", name:characterName, target:targetTurn.properName, isEnemy: false, isCharacter: true, AV: battleData.sumAV, actionSlot:skillRef.slot});}
                poke("TalentStart",battleData,{sourceTurn});

                battleActions.updateBuff(battleData,targetTurn,buffSheet);
                if (charValuesRef.bugCycleCounter === 3) {charValuesRef.bugCycleCounter = 0;}//reset the bug rotation
                battleActions.nonViolentWrapper(battleData,skillRef,characterName);

                poke("TalentEnd",battleData,{sourceTurn});
            },
            statCheck(battleData,currentTurn) {
                const logicRef = turnLogic[currentTurn.properName];
                const ATKObjects = logicRef.ATKObjects;

                let buffNames = logicRef.buffNames;
                let buffName1 = buffNames.side1;
                let ownerName = currentTurn.properName;

                const buffSheet = ATKObjects.swSideNoteATKSHEET ??= {
                    "stats": [ATKP],
                    [ATKP]: 0.10,
                    "source": ownerName,
                    "sourceOwner": currentTurn.properName,
                    "buffName": buffName1,
                    "duration": 1,
                    "AVApplied": 0,
                    "maxStacks": 5,
                    "currentStacks": 1,
                    "decay": false,
                    "expireType": null
                }

                const currentEHR = currentTurn.statTable[EffectHitRate];
                const stacksToApply = Math.min(5,Math.floor(currentEHR/0.10));

                const buffCheck = currentTurn.buffsObject[buffName1];
                const updateBuff = battleActions.updateBuff;
                if (buffCheck) {//if sw already has the buff
                    const currentStacks = buffCheck.currentStacks;//then check the current stacks on the existing buff

                    if (currentStacks < stacksToApply) {//if current is less than the total ehr conversion stacks
                        const newStacks = stacksToApply - currentStacks;//then get the diff between total conversion stacks and currently existing, and add the diff
                        buffSheet.currentStacks = newStacks;
                        updateBuff(battleData,currentTurn,buffSheet);
                    }
                    else if (currentStacks === stacksToApply) {//but if the stacks match, then abort bc we don't need to change the buff
                        return;
                    }
                    else {//lastly, if current stacks is greater than the converted stacks, then remove the buff so we can apply it with the correct amount
                        //this removal in the log will be silent only if there are still stacks to apply
                        //if no stacks to apply exist, then we would log the buff removal wholly
                        removeBuff(battleData,currentTurn,buffSheet,stacksToApply > 0);
                    }
                }

                buffSheet.currentStacks = stacksToApply;
                updateBuff(battleData,currentTurn,buffSheet);
            },
            swTechnique(battleData,target,sourceTurn) {
                const logicRef = turnLogic[sourceTurn.properName];
                const ATKObjects = logicRef.ATKObjects;

                let characterName = sourceTurn.properName;
                // let charSlot = sourceTurn.name;
                // let skillPathing = characters[characterName].skills;
                let skillRef = ATKObjects.swTechREF ??= ATKObjects.Technique["Force Quit Program"].variant1;

                if (!ATKObjects.swTechATKObject) {
                    let values = ATKObjects.swTechREFVALUES ??= battleActions.getLevelBasedParam(battleData,skillRef,sourceTurn);
                    const scalar = "ATK";
                    const tags = ["All","Technique","Quantum"];
                    const actionTags = ["Technique","Attack"];
                    const keyShortcut = basicShorthand.makeKeysArray;
                    const realDMGKeys = keyShortcut(dmgKeys,tags);
                    const realPENKeys = keyShortcut(resPENKeys,tags);
                    const realShredKeys = keyShortcut(defShredKeys,tags);
                    const realVulnKeys = keyShortcut(vulnKeys,tags);
                    const compositeCacheTag = tags + actionTags;
                    //realDMGKeys,realPENKeys,realShredKeys,realVulnKeys
                    ATKObjects.swTechATKObject = {
                        multipliers: {
                            primary: null,
                            blast: null,
                            all: values[0],
                        },
                        scalar,
                        DMGTags: tags,
                        allToughness: true,
                        slot: skillRef.slot,
                        realDMGKeys,realPENKeys,realShredKeys,realVulnKeys,
                        actionTags,
                        compositeCacheTag
                    }
                }
                const ATKObject = ATKObjects.swTechATKObject

                if (battleData.isLoggyLogger) {logToBattle(battleData,{logType: "TechniqueStart", name:characterName, target, isEnemy: false, isCharacter: true, AV: battleData.sumAV, actionSlot:skillRef.slot});}
                poke("TechniqueStart",battleData,{sourceTurn});
                battleActions.attackWrapper(battleData,skillRef,sourceTurn,ATKObject);
                poke("TechniqueEnd",battleData,{sourceTurn});
            },
            swE4DMG(battleData,generalInfo,allyTurn,allTargetsArray) {
                const logicRef = turnLogic[allyTurn.properName];
                const ATKObjects = logicRef.ATKObjects;

                if (!ATKObjects.swE4DMGREF) {
                    const scalar = "ATK";
                    const tags = ["All","Quantum"];
                    const actionTags = ["Additional"];
                    const keyShortcut = basicShorthand.makeKeysArray;
                    const realDMGKeys = keyShortcut(dmgKeys,tags);
                    const realPENKeys = keyShortcut(resPENKeys,tags);
                    const realShredKeys = keyShortcut(defShredKeys,tags);
                    const realVulnKeys = keyShortcut(vulnKeys,tags);
                    const compositeCacheTag = tags + actionTags;
                    //realDMGKeys,realPENKeys,realShredKeys,realVulnKeys
                    ATKObjects.swE4DMGREF = {
                        multipliers: {
                            primary: null,
                            blast: null,
                            all: null,
                            additional: 0.20
                        },
                        scalar,
                        element: "Quantum",//override for additional dmg, not used otherwise
                        DMGTags: tags,
                        allToughness: false,
                        slot: null,
                        realDMGKeys,realPENKeys,realShredKeys,realVulnKeys,
                        actionTags,
                        compositeCacheTag
                    }
                }
                let ATKObject = ATKObjects.swE4DMGREF;

                //aight so for sw we get every enemy that the ult hit passed through here
                //then we check every enemy hit for debuffs, then we hit them for each debuff up to 5, god that's gonna clutter the log like fuckin mad

                const allyAssignedName = allyTurn.properName;
                const addedWrapper = battleActions.additionalDMGWrapper;
                for (let enemySlot of allTargetsArray) {
                    let debuffCount = Math.min(5,enemySlot.debuffCounter);
                    for (let i=1;i<=debuffCount;i++) {
                        addedWrapper(battleData,allyTurn,allyAssignedName,ATKObject,enemySlot,"E6 Bounce Attack");
                    }
                }
            },
        },
        "listeners": [
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
                "listenerName": "Side Note EHR check",
                "ownerTurn": {},
            },
            {
                "trigger": "PreBattleEntersCombat",
                condition(battleData,generalInfo) {
                    let ownerTurn = this.ownerTurn;

                    const statCheck = this.statCheck ??= turnLogic[ownerTurn.properName].skillFunctions.statCheck;
                    statCheck(battleData,ownerTurn);//side note buff, can be handled in this one since it's already here
                },
                "target": "self",
                "listenerName": "Silver Wolf - Side Note start check",
                "ownerTurn": {},
            },
            {
                "trigger": "EnemyDied",
                condition(battleData,generalInfo) {
                    // poke("EnemyDied",battleData,{sourceTurn, enemyKilled:killed});
                    let ownerTurn = this.ownerTurn;
                    let characterName = ownerTurn.properName;
                    const enemyKilled = generalInfo.enemyKilled;

                    // const buffNames = turnLogic[characterName].buffNames;
                    const implantNames = turnLogic[characterName].implantBuffNames;
                    const enemyKilledBuffs = enemyKilled.buffsObject;

                    let implantNameFound = null;
                    for (let implantName of implantNames) {
                        if (enemyKilledBuffs[implantName]) {
                            implantNameFound = implantName;
                            break;
                        }
                    }

                    //and if the new primary target has no implant yet, then implant it from the enemy that died
                    //obv can't implant though if everyone is dead and a primary target is missing
                    const primaryRef = battleData.primaryTarget;
                    if (implantNameFound && primaryRef && !primaryRef.buffsObject[implantNameFound]) {
                        const implantSheetToTransfer = enemyKilledBuffs[implantNameFound]
                        battleActions.updateBuff(battleData,primaryRef,implantSheetToTransfer);
                    }
                    //note this does mean that we are only actually giving a shit about one single implant getting swapped, and only to the primary target(which would be elite or higher anyways by default)
                    //if there are ever more than one implants, only one will ever get swapped at death and only the first one found in the loop
                    //TODO: prob better way to do this later, but kind hard pressed to give a shit about trying to find what that might be. Mega low priority since
                    //most people are just getting their main dps implant in and fucking off instead of blowing sw skill points left and right to implant the whole world.
                },
                "target": "enemy",
                "listenerName": "Silver Wolf death implant switch controller",
                "ownerTurn": {},
            },
            {
                "trigger": "BrokeEnemyWeakness",
                condition(battleData,generalInfo) {
                    let ownerTurn = this.ownerTurn;
                    let targetTurn = generalInfo.targetTurn;

                    //smol ass function, but really all she needs. weakness breaks add a new bug, all there is to it.
                    const applySWBug = this.applySWBug ??= turnLogic[ownerTurn.properName].skillFunctions.applySWBug
                    applySWBug(battleData,targetTurn,ownerTurn); 
                },
                "target": "enemy",
                "listenerName": "Silver Wolf weakness break bug implant",
                "ownerTurn": {},
            },
            {
                "trigger": "HitEnemyStart",
                condition(battleData,generalInfo) {
                    const sourceTurn = generalInfo.sourceTurn;
                    const targetsGotHit = generalInfo.targetsGotHit;
                    const targetTurn = generalInfo.targetTurn;
                    if (sourceTurn.isEnemy || targetsGotHit[targetTurn.name] != 1) {return;}//we only evaluate first hits, on allied attacks

                    let ownerTurn = this.ownerTurn;
                    let characterName = ownerTurn.properName;
                    let e2 = ownerTurn.rank >= 2;
                    if (!e2 && sourceTurn.properName != characterName) {return;}//if it's not sw and it's not e2sw as an ally, then abort

                    let isSWE2 = sourceTurn.properName === characterName && e2;

                    const applySWBug = this.applySWBug ??= turnLogic[characterName].skillFunctions.applySWBug
                    applySWBug(battleData,targetTurn,ownerTurn);
                    if (isSWE2) {applySWBug(battleData,targetTurn,ownerTurn);}//sw applies TWO bugs in her attacks at e2
                },
                "target": "enemy",
                "listenerName": "Silver Wolf Talent Bug Controller",
                "ownerTurn": {},
            },
            {
                "trigger": "PreBattleEntersCombat",
                condition(battleData,generalInfo) {
                    let ownerTurn = this.ownerTurn;
                    // let characterName = ownerTurn.properName;

                    let amount = 20;
                    battleActions.updateEnergy(battleData,amount,ownerTurn,false,this.listenerName);
                },
                "target": "self",
                "listenerName": "Silver Wolf - Major Trace: Inject",
                "ownerTurn": {},
            },
            {
                "trigger": "StartTurn",
                condition(battleData,generalInfo) {
                    let ownerTurn = this.ownerTurn;
                    // let characterName = ownerTurn.properName;
                    // let sourceTurn = generalInfo.sourceTurn;

                    if (ownerTurn.turnState) {
                        let amount = 5;
                        battleActions.updateEnergy(battleData,amount,ownerTurn,false,this.listenerName);
                    }
                },
                "target": "self",
                "listenerName": "Silver Wolf - Major Trace: Inject",
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
                            attack: turnLogic[ownerTurn.properName].skillFunctions.swUltimate,
                            target: this.target,
                            name: this.listenerName,
                            properName: ownerTurn.properName,
                            sourceTurn: null
                        }
                        queueObject.sourceTurn = ownerTurn;
                        battleActions.queueUltimateUse(battleData,queueObject);
                    }
                },
                "target": "enemy",
                "listenerName": "Silver Wolf - Ultimate queued",
                "ownerTurn": {},
            },
            {
                "trigger": "StartBattle",
                condition(battleData,generalInfo) {
                    let ownerTurn = this.ownerTurn;
                    let characterName = ownerTurn.properName;

                    let logicRef = turnLogic[characterName];
                    //PreBattleStartTechniquesNormal for always active techniques that don't need to care
                    //StartBattle for dmg techniques that could have conflicts
                    let useTechnique = logicRef.useTechnique;
                    let attackUsed = battleData.attackTechniqueUsed;
                    if (useTechnique && !attackUsed && battleData.techniquesAllowed) {
                        const swTechnique = this.swTechnique ??= logicRef.skillFunctions.swTechnique
                        swTechnique(battleData,"enemy",ownerTurn);
                        battleData.attackTechniqueUsed = true;
                    }
                },
                "target": "self",
                "listenerName": "Silver Wolf Technique",
                "ownerTurn": {},
            },
        ],
        "eidolonListeners": {
            1: [],
            2: [
                {
                    "trigger": "EnemyCreated",
                    condition(battleData,generalInfo) {
                        let ownerTurn = this.ownerTurn;
                        let targetTurn = generalInfo.slotRef;

                        let buffSheet = this.buffSheet ??= {
                            "stats": [VulnAll],
                            [VulnAll]: 0.20,
                            "source": "E2",
                            "sourceOwner": ownerTurn.properName,
                            "buffName": this.listenerName,
                            "duration": null,
                            "AVApplied": 0,
                            "maxStacks": 1,
                            "currentStacks": 1,
                            "decay": false,
                            "isDebuff": true,
                            "expireType": null
                        };
    
                        battleActions.updateBuff(battleData,targetTurn,buffSheet);
                    },
                    "target": "enemy",
                    "listenerName": "E2 Vuln Zombie Network",
                    "announce": false,
                    "ownerTurn": {},
                },
            ],
            3: [],
            4: [
                {
                    "trigger": "AdditionalTriggerAttackEnd",
                    condition(battleData,generalInfo) {
                        let ownerTurn = this.ownerTurn;
                        let characterName = ownerTurn.properName;
    
                        let sourceTurn = generalInfo.sourceTurn;
                        let enemiesAttackedThisAction = battleData.enemyPositions;//her ult is an AOE attack so... everyone gets hit
    
                        //we don't trigger the additional dmg unless it comes from an ultimate that is sw's, or if sw isn't e4 or higher
                        if (sourceTurn.properName != characterName || sourceTurn.rank < 4 || generalInfo.dmgSlot != "Ultimate") {return;}

                        const swE4DMG = this.swE4DMG ??= turnLogic[characterName].skillFunctions.swE4DMG;
                        swE4DMG(battleData,generalInfo,sourceTurn,enemiesAttackedThisAction);
                    },
                    "target": "enemy",
                    "listenerName": "Silver Wolf E4 additional DMG controller",
                    "announce": false,
                    "ownerTurn": {},
                },
            ],
            5: [],
            6: [
                {
                    "trigger": "AllyDMGStart",
                    condition(battleData,generalInfo) {
                        let ownerTurn = this.ownerTurn;
                        let characterName = ownerTurn.properName;
    
                        let sourceTurn = generalInfo.sourceTurn;
                        if (sourceTurn.properName != characterName) {return;}

                        let targetTurn = generalInfo.targetTurn;
                        let targetDebuffs = Math.min(5,targetTurn.debuffCounter);
    
                        let buffSheet = this.buffSheet ??= {
                            "stats": [DamageAll],
                            [DamageAll]: 0.20,
                            "source": "E6",
                            "sourceOwner": sourceTurn.properName,
                            "buffName": turnLogic[characterName].buffNames.e6,
                            "duration": 1,
                            "AVApplied": 0,
                            "maxStacks": 5,
                            "currentStacks": 0,
                            "decay": false,
                            "expireType": null
                        }
                        let buffName = buffSheet.buffName;
                        const buffCheck = sourceTurn.buffsObject[buffName];

                        const updateBuff = battleActions.updateBuff;
                        if (buffCheck) {//if the buff exists
                            const currentStacks = buffCheck.currentStacks;
                            if (currentStacks < targetDebuffs) {//and if the current stacks are lower than the stacks we need
                                const stackDiff = targetDebuffs - currentStacks;//then get the diff and add that diff in stacks
                                buffSheet.currentStacks = stackDiff;
                                updateBuff(battleData,sourceTurn,buffSheet);
                            }
                            else if (currentStacks === targetDebuffs) {//but if stacks are equal, then abort bc nothing should be done
                                return;
                            }
                            else {//but if stacks are greater than they should be, then remove the buff and reapply with the correct amount
                                //logging for the removal will be silent if the target has debuffs at all
                                removeBuff(battleData,sourceTurn,buffSheet,targetDebuffs>0);
                            }
                        }
    
                        buffSheet.currentStacks = targetDebuffs;
                        updateBuff(battleData,sourceTurn,buffSheet);
                    },
                    "target": "self",
                    "listenerName": "Silver Wolf E6 bonus DMG ONHIT",
                    "announce": false,
                    "ownerTurn": {},
                },
            ],
        },
        "ATKObjects": {},
        "characterValues": {
            "bugCycleCounter": 0,
        },
        "useTechnique": true,
        "techniqueType": "Attack",
        "buffNames": {
            "defDebuff": "User Banned -DEF%",
            "side1": "Side Note",

            "implantFire": "SW Weakness Implant (Fire)",
            "implantIce": "SW Weakness Implant (Ice)",
            "implantLightning": "SW Weakness Implant (Lightning)",
            "implantWind": "SW Weakness Implant (Wind)",
            "implantQuantum": "SW Weakness Implant (Quantum)",
            "implantImaginary": "SW Weakness Implant (Imaginary)",
            "implantPhysical": "SW Weakness Implant (Physical)",

            "bugDEF": "Bug - Type: DEF%",
            "bugATK": "Bug - Type: ATK%",
            "bugSPD": "Bug - Type: SPD%",

            "resReduction": "SW All-type RES Reduction",
            "e6": "Overlay Network E6",
        },
        "implantBuffNames": ["implantFire","implantIce","implantLightning","implantWind","implantQuantum","implantImaginary","implantPhysical"],
        "characterValuesBattle": {},
    },
    //Hunt

    //Harmony
    "Tingyun": {//ATKOBJECTS DONE
        logic(thisTurn,battleData) {

            let currentSP = battleData.skillPointCurrent;
            let minimum = currentSP >= 1;


            if (minimum && checkSkill(battleData,thisTurn)) {
                const returnSkillCall = this.returnSkillCall ??= {action: "Skill", points: -1, actionCall: this.skillFunctions.tingyunSkill, target: "char1", endTurn: true};
                return returnSkillCall;
            }

            const returnBasicCall = this.returnBasicCall ??= {action: "BasicATK", points: 1, actionCall: this.skillFunctions.tingyunBasic, target: "enemy", endTurn: true};
            return returnBasicCall;
        },
        "skillFunctions": {
            tingyunBasic(battleData,target,sourceTurn) {
                const logicRef = turnLogic[sourceTurn.properName];
                const ATKObjects = logicRef.ATKObjects;

                let skillRef = ATKObjects.tingyunBasicREF ??= ATKObjects["Basic ATK"]["Dislodged"].variant1;

                if (!ATKObjects.tingyunBasicATKOBJECT) {
                    // let characterName = sourceTurn.properName;
                    let values = ATKObjects.tingyunBasicREFVALUES ??= battleActions.getLevelBasedParam(battleData,skillRef,sourceTurn);
                    const scalar = "ATK";
                    const tags = ["All","Basic","Lightning"];
                    const actionTags = ["Basic","Attack"];
                    const keyShortcut = basicShorthand.makeKeysArray;
                    const realDMGKeys = keyShortcut(dmgKeys,tags);
                    const realPENKeys = keyShortcut(resPENKeys,tags);
                    const realShredKeys = keyShortcut(defShredKeys,tags);
                    const realVulnKeys = keyShortcut(vulnKeys,tags);
                    const compositeCacheTag = tags + actionTags;
                    //realDMGKeys,realPENKeys,realShredKeys,realVulnKeys
                    ATKObjects.tingyunBasicATKOBJECT = {
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
                let ATKObject = ATKObjects.tingyunBasicATKOBJECT;

                if (battleData.isLoggyLogger) {logToBattle(battleData,{logType: "BasicATKStart", name:sourceTurn.properName, target, isEnemy: false, isCharacter: true, AV: battleData.sumAV, actionSlot:skillRef.slot});}
                poke("BasicATKStart",battleData,{sourceTurn});
                battleActions.attackWrapper(battleData,skillRef,sourceTurn,ATKObject);
                battleActions.updateEnergy(battleData,skillRef.energyRegen,sourceTurn);
                poke("BasicATKEnd",battleData,{sourceTurn});
            },
            expireFunction(battleData,param) {
                let characterName = "Tingyun";
                turnLogic[characterName].characterValuesBattle.charWithBenediction = null;
            },
            tingyunSkill(battleData,target,sourceTurn) {
                const logicRef = turnLogic[sourceTurn.properName];
                const ATKObjects = logicRef.ATKObjects;

                let characterName = sourceTurn.properName;
                let skillRef = ATKObjects.tingyunSkillREF ??= ATKObjects.Skill["Soothing Melody"].variant1;

                if (battleData.isLoggyLogger) {logToBattle(battleData,{logType: "SkillStart", name:characterName, target, isEnemy: false, isCharacter: true, AV: battleData.sumAV, actionSlot:skillRef.slot});}
                poke("SkillStart",battleData,{sourceTurn});
                battleActions.updateEnergy(battleData,skillRef.energyRegen,sourceTurn);

                let targetTurn = battleData.nameBasedTurns[target];
                poke("TargetAlly",battleData,{targetType:"Single", sourceTurn, targetTurn:targetTurn, targetSkill:skillRef.slot,targetChildEntities: false});
                
                let values = ATKObjects.tingyunSkillREFVALUES ??= battleActions.getLevelBasedParam(battleData,skillRef,sourceTurn);
                let baseATKTarget = targetTurn.statTable[ATKBase] * values[1];
                let tingyunCurrent = calcs.getATKFinal(sourceTurn.statTable).ATKFinal * values[3];
                let finalBuff = Math.min(baseATKTarget,tingyunCurrent);

                let buffName = logicRef.buffNames.benediction;

                if (!ATKObjects.tingyunSkillBENEDICTIONSHEET) {
                    ATKObjects.tingyunSkillBENEDICTIONSHEET = {
                        "stats": [ATKFlat],
                        [ATKFlat]: 0,
                        "source": characterName,
                        "sourceOwner": sourceTurn.properName,
                        "buffName": buffName,
                        "duration": 3,//technically still would need the "if their turn, +1 duration" we do on buffs, but it can only ever apply on her own turn, so it will never be theirs when applied
                        "AVApplied": 0,
                        "maxStacks": 1,
                        "currentStacks": 1,
                        "decay": false,
                        "expireType": "EndTurn",
                        "expireFunction": logicRef.skillFunctions.expireFunction,//we just need to specify in tingyun's stats that no target has benediction anymore, when removed
                        "expireParam": null,
                        "removeOnDeath": true,
                    }

                    let buffName2 = logicRef.buffNames.selfSPD;
                    ATKObjects.tingyunSkillBENEDICTIONSHEETSPD = {
                        "stats": [SPDP],
                        [SPDP]: 0.20,
                        "source": characterName,
                        "sourceOwner": sourceTurn.properName,
                        "buffName": buffName2,
                        "duration": 2,//technically it's a 1turn duration but it will always apply on her own turn, so that means it's really a 2 turn duration bc the moment her turn ends it will remove 1 turn to have 1 turn remaining
                        "AVApplied": 0,
                        "maxStacks": 1,
                        "currentStacks": 1,
                        "decay": false,
                        "expireType": "EndTurn",
                        "removeOnDeath": true,
                    }
                }


                let buffSheet = ATKObjects.tingyunSkillBENEDICTIONSHEET;
                buffSheet[ATKFlat] = finalBuff;

                const updateBuff = battleActions.updateBuff;
                let charValuesRef = logicRef.characterValuesBattle;
                if (charValuesRef.charWithBenediction) {//if someone exists on the team right now with benediction
                    let oldTarget = battleData.nameBasedTurns[charValuesRef.charWithBenediction];
                    let beneRef = oldTarget.buffsObject[buffName];
                    if (targetTurn.properName != charValuesRef.charWithBenediction) {//if that someone does NOT match the current buff target
                        //benediction can only apply on the most recent target, so if we ever find a scenario where benediction is getting applied to a new target
                        //that does not match the last target she applied to, then we need to remove it
                        //however if the currently assigned target is nobody, then we never reach this point and it's chillin
                        removeBuff(battleData,oldTarget,beneRef);
                    }
                    else {//if the target turn IS the same person with benediction
                        //and if the new buff is DIFFERENT than the prior applied buff, then remove it, SILENTLY
                        if (beneRef && beneRef[ATKFlat] != finalBuff) {removeBuff(battleData,oldTarget,beneRef,true);}
                        //TODO: see todo list about overwriting buffs, would be really fucking handy honestly dunno why I didn't think of it sooner
                    }
                }

                //then finally, for the love of god, apply the fucking buff.
                updateBuff(battleData,targetTurn,buffSheet);
                charValuesRef.charWithBenediction = targetTurn.name;//an ofcd assign the current benediction target
                //the assignment of this char value tho is extremely important for her kit.

                //major trace Nourished Joviality for spd boost
                let buffSheet2 = ATKObjects.tingyunSkillBENEDICTIONSHEETSPD;
                updateBuff(battleData,sourceTurn,buffSheet2);


                battleActions.nonViolentWrapper(battleData,skillRef,characterName);
                poke("SkillEnd",battleData,{sourceTurn});
            },
            benedictionDMG(battleData,sourceTurn,allyTurn) {
                const logicRef = turnLogic[sourceTurn.properName];
                const ATKObjects = logicRef.ATKObjects;

                let skillRef = ATKObjects.benedictionDMGADDEDREF ??= ATKObjects.Skill["Soothing Melody"].variant1;

                if (!ATKObjects.benedictionDMGADDEDATKOBJECT) {
                    let e4 = sourceTurn.rank >= 4;
                    let values = ATKObjects.benedictionDMGADDEDREFVALUES ??= battleActions.getLevelBasedParam(battleData,skillRef,sourceTurn);
                    const scalar = "ATK";
                    const tags = ["All","Lightning"];
                    const actionTags = ["Additional"];
                    const keyShortcut = basicShorthand.makeKeysArray;
                    const realDMGKeys = keyShortcut(dmgKeys,tags);
                    const realPENKeys = keyShortcut(resPENKeys,tags);
                    const realShredKeys = keyShortcut(defShredKeys,tags);
                    const realVulnKeys = keyShortcut(vulnKeys,tags);
                    const compositeCacheTag = tags + actionTags;
                    //realDMGKeys,realPENKeys,realShredKeys,realVulnKeys
                    ATKObjects.benedictionDMGADDEDATKOBJECT = {
                        multipliers: {
                            primary: null,
                            blast: null,
                            all: null,
                            additional: values[0] + (e4 ? 0.20 : 0)
                        },
                        scalar,
                        element: "Lightning",//override for additional dmg, not used otherwise
                        // DMGTags: ["All","Basic","Quantum"],
                        DMGTags: tags,
                        allToughness: false,
                        slot: null,
                        realDMGKeys,realPENKeys,realShredKeys,realVulnKeys,
                        actionTags,
                        compositeCacheTag
                    }
                }
                let ATKObject = ATKObjects.benedictionDMGADDEDATKOBJECT;
                
                let targetTurn = battleData.primaryTarget
                battleActions.additionalDMGWrapper(battleData,allyTurn,allyTurn.properName,ATKObject,targetTurn,"Benediction");
                // battleData.addedDMGTallyAttack.push({
                //     ...addedHit.hit
                // })
            },
            talentDMG(battleData,sourceTurn,allyTurn) {
                const logicRef = turnLogic[sourceTurn.properName];
                const ATKObjects = logicRef.ATKObjects;

                let characterName = sourceTurn.properName;
                // let skillPathing = characters[characterName].skills;
                let skillRef = ATKObjects.talentDMGADDEDREF ??= ATKObjects.Talent["Violet Sparknado"].variant1;

                if (!ATKObjects.talentDMGADDEDATKOBJECT) {
                    let values = ATKObjects.talentDMGADDEDREFVALUES ??= battleActions.getLevelBasedParam(battleData,skillRef,sourceTurn);
                    const scalar = "ATK";
                    const tags = ["All","Lightning"];
                    const actionTags = ["Additional"];
                    const keyShortcut = basicShorthand.makeKeysArray;
                    const realDMGKeys = keyShortcut(dmgKeys,tags);
                    const realPENKeys = keyShortcut(resPENKeys,tags);
                    const realShredKeys = keyShortcut(defShredKeys,tags);
                    const realVulnKeys = keyShortcut(vulnKeys,tags);
                    const compositeCacheTag = tags + actionTags;
                    //realDMGKeys,realPENKeys,realShredKeys,realVulnKeys
                    ATKObjects.talentDMGADDEDATKOBJECT = {
                        multipliers: {
                            primary: null,
                            blast: null,
                            all: null,
                            additional: values[0]
                        },
                        scalar,
                        element: "Lightning",//override for additional dmg, not used otherwise
                        // DMGTags: ["All","Basic","Quantum"],
                        DMGTags: tags,
                        allToughness: false,
                        slot: null,
                        realDMGKeys,realPENKeys,realShredKeys,realVulnKeys,
                        actionTags,
                        compositeCacheTag
                    }
                }

                let ATKObject = ATKObjects.talentDMGADDEDATKOBJECT;
                let targetTurn = battleData.primaryTarget
                battleActions.additionalDMGWrapper(battleData,allyTurn,allyTurn.properName,ATKObject,targetTurn,"Violet Sparknado");
                battleActions.nonViolentWrapper(battleData,skillRef,characterName);

                // battleData.addedDMGTallyAttack.push({
                //     ...addedHit.hit
                // })
            },
            tingyunUltimate(battleData,sourceTurn) {
                const logicRef = turnLogic[sourceTurn.properName];
                const ATKObjects = logicRef.ATKObjects;

                let characterName = sourceTurn.properName;
                // let charSlot = sourceTurn.name;
                // let skillPathing = characters[characterName].skills;
                let skillRef = ATKObjects.tingyunUltimateREF ??= ATKObjects.Ultimate["Amidst the Rejoicing Clouds"].variant1;

                let rank = sourceTurn.rank;
                let e6 = rank >= 6;

                const energy = battleActions.updateEnergy;
                energy(battleData,-sourceTurn.maxEnergy,sourceTurn);

                let charValuesRef = logicRef.characterValuesBattle;
                //atm we look for the ally with benediction, if nobody has it then we assume char1 gets the energy, always
                let targetTurn = battleData.nameBasedTurns[charValuesRef.charWithBenediction ?? battleData.nameBasedTurns.char1.name];
                //TODO:rn we just assume the first character is the one that should get the dmg buff which is reasonable
                //however deciding that char1 should always get the energy is not always reasonable, sometimes
                //there might be another character with a battle changing ultimate like say idk robin maybe(don't judge)
                //and it might be best to get robin a little more energy to advance the whole team instead of int and give it to char1 before a cycle ends.

                let values = ATKObjects.tingyunUltimateREFVALUES ??= battleActions.getLevelBasedParam(battleData,skillRef,sourceTurn);
                let energyRegen = values[0] + (e6 ? 10 : 0);
                energy(battleData,energyRegen,targetTurn,true,"Amidst the Rejoicing Clouds");

                if (!ATKObjects.tingyunUltimateDMGSHEET) {
                    let buffName = logicRef.buffNames.clouds;
                    ATKObjects.tingyunUltimateDMGSHEET = {
                        "stats": [DamageAll],
                        [DamageAll]: values[2],
                        "source": characterName,
                        "sourceOwner": sourceTurn.properName,
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
                
                poke("TargetAlly",battleData,{targetType:"Single", sourceTurn, targetTurn:targetTurn, targetSkill:skillRef.slot,targetChildEntities: false});
                let buffSheet = ATKObjects.tingyunUltimateDMGSHEET;
                buffSheet.duration = targetTurn.turnState ? 3 : 2;
                battleActions.updateBuff(battleData,targetTurn,buffSheet);

                energy(battleData,skillRef.energyRegen,sourceTurn);
                battleActions.nonViolentWrapper(battleData,skillRef,characterName);
                sourceTurn.ultyQueued = false;
            },
            tingyunTechnique(battleData,target,sourceTurn) {
                const logicRef = turnLogic[sourceTurn.properName];
                const ATKObjects = logicRef.ATKObjects;

                let characterName = sourceTurn.properName;
                // let charSlot = sourceTurn.name;
                // let skillPathing = characters[characterName].skills;
                let skillRef = ATKObjects.tingyunTechREF ??= ATKObjects.Technique["Gentle Breeze"].variant1;

                //atm tingyun is... maybe the only one that benefits from multi-cast techniques?
                //as such, I feel the safe assumption is people are gonna double cast to get insta ult on combat start
                //TODO: later look into technique use count specification(if needed)

                if (battleData.isLoggyLogger) {logToBattle(battleData,{logType: "TechniqueStart", name:characterName, target, isEnemy: false, isCharacter: true, AV: battleData.sumAV, actionSlot:skillRef.slot});}
                poke("TechniqueStart",battleData,{sourceTurn});

                let amount = 50;//4th param true for fixed amount
                battleActions.updateEnergy(battleData,amount,sourceTurn,true,"Tingyun Technique");
                battleActions.nonViolentWrapper(battleData,skillRef,characterName);

                poke("TechniqueEnd",battleData,{sourceTurn});

                if (battleData.isLoggyLogger) {logToBattle(battleData,{logType: "TechniqueStart", name:characterName, target, isEnemy: false, isCharacter: true, AV: battleData.sumAV, actionSlot:skillRef.slot});}
                poke("TechniqueStart",battleData,{sourceTurn});

                // let amount = 50;//4th param true for fixed amount
                battleActions.updateEnergy(battleData,amount,sourceTurn,true,"Tingyun Technique");
                battleActions.nonViolentWrapper(battleData,skillRef,characterName);

                poke("TechniqueEnd",battleData,{sourceTurn});
            }
        },
        "listeners": [
            {
                "trigger": "StartTurn",
                condition(battleData,generalInfo) {
                    let ownerTurn = this.ownerTurn;
                    // let characterName = ownerTurn.properName;
                    // let sourceTurn = generalInfo.sourceTurn;
                    
                    if (ownerTurn.turnState) {
                        let amount = 5;
                        battleActions.updateEnergy(battleData,amount,ownerTurn,false,this.listenerName);
                    }
                },
                "target": "self",
                "listenerName": "Tingyun - Major Trace: Jubilant Passage",
                "ownerTurn": {},
            },
            {
                "trigger": "PreBattleEntersCombat",
                condition(battleData,generalInfo) {
                    let ownerTurn = this.ownerTurn;

                    let buffSheet = this.buffSheet ??= {
                        "stats": [DamageBasic],
                        [DamageBasic]: 0.40,
                        "source": "Trace",
                        "sourceOwner": ownerTurn.properName,
                        "buffName": "Knell Subdual",
                        "duration": null,
                        "AVApplied": 0,
                        "maxStacks": 1,
                        "currentStacks": 1,
                        "decay": false,
                        "expireType": null,
                    }
                    battleActions.updateBuff(battleData,ownerTurn,buffSheet)
                },
                "target": "self",
                "listenerName": "Tingyun - Major Trace: Knell Subdual",
                "ownerTurn": {},
            },
            {
                "trigger": "AdditionalTriggerAttackEnd",
                condition(battleData,generalInfo) {
                    let ownerTurn = this.ownerTurn;
                    let characterName = ownerTurn.properName;

                    let sourceTurn = generalInfo.sourceTurn;
                    let charValuesRef = ownerTurn.battleValues;
                    let targetTurn = battleData.nameBasedTurns[charValuesRef.charWithBenediction];
                    if (!targetTurn) {return;}//if no character has benediction, can obv abort early.
                    let sourceCheck = sourceTurn.properName === targetTurn.properName;
                    if (!sourceCheck) {return;}//is the attack coming from an allied source
                    const benedictionDMG = this.benedictionDMG ??= turnLogic[characterName].skillFunctions.benedictionDMG
                    benedictionDMG(battleData,ownerTurn,targetTurn);
                },
                "target": "enemy",
                "listenerName": "Tingyun benediction ally atk additional DMG controller",
                "ownerTurn": {},
            },
            {
                "trigger": "AdditionalTriggerAttackEnd",
                condition(battleData,generalInfo) {
                    let ownerTurn = this.ownerTurn;
                    let characterName = ownerTurn.properName;

                    let charValuesRef = ownerTurn.battleValues;
                    let targetTurn = battleData.nameBasedTurns[charValuesRef.charWithBenediction];
                    if (!targetTurn) {return;}//if no character has benediction, can obv abort early.
                    let sourceCheck = ownerTurn.turnState && generalInfo.dmgSlot === "Basic ATK";
                    if (!sourceCheck) {return;}//is the attack coming from tingyun
                    const talentDMG = this.talentDMG ??= turnLogic[characterName].skillFunctions.talentDMG
                    talentDMG(battleData,ownerTurn,targetTurn);
                },
                "target": "enemy",
                "listenerName": "Tingyun talent basic atk additional DMG controller",
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
                            attack: turnLogic[ownerTurn.properName].skillFunctions.tingyunUltimate,
                            target: this.target,
                            name: this.listenerName,
                            properName: ownerTurn.properName,
                            sourceTurn: null
                        }
                        queueObject.sourceTurn = ownerTurn;
                        battleActions.queueUltimateUse(battleData,queueObject);
                    }
                },
                "target": "char1",
                "listenerName": "Tingyun - Ultimate queued",
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
                        const tingyunTechnique = this.tingyunTechnique ??= logicRef.skillFunctions.tingyunTechnique;
                        tingyunTechnique(battleData,"self",ownerTurn);
                    }
                },
                "target": "self",
                "listenerName": "Tingyun Technique",
                "ownerTurn": {},
            },
        ],
        "eidolonListeners": {
            1: [
                {
                    "trigger": "UltimateEnd",
                    condition(battleData,generalInfo) {
                        let ownerTurn = this.ownerTurn;
                        let characterName = ownerTurn.properName;
    
                        let sourceTurn = generalInfo.sourceTurn;
                        let charValuesRef = ownerTurn.battleValues;
                        let targetTurn = battleData.nameBasedTurns[charValuesRef.charWithBenediction];
                        if (!targetTurn) {return;}//if no character has benediction, can obv abort early.
    
                        let sourceCheck = sourceTurn.properName === targetTurn.properName;
                        if (!sourceCheck) {return;}
    
                        let buffSheet = this.buffSheet ??= {
                            "stats": [SPDP],
                            [SPDP]: 0.20,
                            "source": characterName,
                            "sourceOwner": ownerTurn.properName,
                            "buffName": turnLogic[characterName].buffNames.e1SPD,
                            "duration": 1,
                            "AVApplied": 0,
                            "maxStacks": 1,
                            "currentStacks": 1,
                            "decay": false,
                            "expireType": "EndTurn"
                        }

                        buffSheet.duration = targetTurn.turnState ? 2 : 1;
                        battleActions.updateBuff(battleData,targetTurn,buffSheet);
                    },
                    "target": "self",
                    "listenerName": "Tingyun - E1 spd boost controller",
                    "announce": false,
                    "ownerTurn": {},
                },
            ],
            2: [
                {
                    "trigger": "StartTurn",
                    condition(battleData,generalInfo) {
                        let ownerTurn = this.ownerTurn;
    
                        let sourceTurn = generalInfo.sourceTurn;
                        let charValuesRef = ownerTurn.battleValues;
                        let targetTurn = battleData.nameBasedTurns[charValuesRef.charWithBenediction];
                        if (!targetTurn) {return;}//if no character has benediction, can obv abort early.
    
                        let sourceCheck = sourceTurn.properName === targetTurn.properName;
                        if (!sourceCheck) {return;}
                        charValuesRef.benedictorKilledEnemy = false;//reset the kill achieved for the E2 energy regen
                    },
                    "target": "self",
                    "listenerName": "Tingyun - E2 ally kill count reset",
                    "announce": false,
                    "ownerTurn": {},
                },
                {
                    "trigger": "EnemyDied",
                    condition(battleData,generalInfo) {//poke("EnemyDied",battleData,{sourceTurn, enemyKilled:killed});
                        let ownerTurn = this.ownerTurn;
    
                        let sourceTurn = generalInfo.sourceTurn;
                        let charValuesRef = ownerTurn.battleValues;
                        let targetTurn = battleData.nameBasedTurns[charValuesRef.charWithBenediction];
                        if (!targetTurn) {return;}//if no character has benediction, can obv abort early.
    
                        let sourceCheck = sourceTurn.properName === targetTurn.properName;
                        if (!sourceCheck || charValuesRef.benedictorKilledEnemy) {return;}//if this isn't the ally with benediction, or they've already killed within this turn, then abort
    
                        charValuesRef.benedictorKilledEnemy = true;
                        let amount = 5;
                        battleActions.updateEnergy(battleData,amount,targetTurn,false,"Gainfully Gives, Givingly Gains");
                    },
                    "target": "self",
                    "listenerName": "Tingyun - E2 ally energy gain",
                    "announce": false,
                    "ownerTurn": {},
                },
            ],
            3: [],
            4: [],
            5: [],
            6: [],
        },
        "ATKObjects": {},
        "characterValues": {
            "charWithBenediction": null,
            "benedictorKilledEnemy": false,
            // "bugCycleCounter": 0,
        },
        "useTechnique": true,
        "techniqueType": "Attack",
        "buffNames": {
            "selfSPD": "Nourished Joviality",
            "benediction": "Benediction",
            "clouds": "Amidst the Rejoicing Clouds",
            "e1SPD": "Windfall of Lucky Springs",
            "side1": "Side Note (1)",
            "side2": "Side Note (2)",
            "side3": "Side Note (3)",
            "side4": "Side Note (4)",
            "side5": "Side Note (5)",
            "implant": "SW Weakness Implant",
            "resReduction": "SW All-type RES Reduction"
            // "guardian": "Major Trace: Guardian",
            // "caladbolg": "Caladbolg II",
        },
        "characterValuesBattle": {},
    },
    "Bronya": {//ATKOBJECTS DONE        ////TODO: come back later and enforce wind weakness check on e4 before launching the attack
        logic(thisTurn,battleData) {
            // const shortRef = this;
            // let characterName = thisTurn.properName
            let currentSP = battleData.skillPointCurrent;
            // let actionUsed = false;
            // let statCalls = shortRef.characterValuesBattle;
            // let shortCalls = shortRef.skillFunctions;
            // let skillPathing = characters[characterName].skills;

            // let ultySoon = battleActions.energyLookAhead(thisTurn,30);
            let minimum = currentSP >= 1;
            // let skillPointsCheck = currentSP > 3;

            if (minimum && checkSkill(battleData,thisTurn)) {
                const returnSkillCall = this.returnSkillCall ??= {action: "Skill", points: -1, actionCall: this.skillFunctions.bronyaAdvance, target: battleData.nameBasedTurns.char1, endTurn: true};
                return returnSkillCall;
            }


            const returnBasicCall = this.returnBasicCall ??= {action: "BasicATK", points: 1, actionCall: this.skillFunctions.bronyaBasic, target: "enemy", endTurn: true};
            return returnBasicCall;
        },
        "skillFunctions": {
            bronyaBasic(battleData,target,sourceTurn) {
                const logicRef = turnLogic[sourceTurn.properName];
                const ATKObjects = logicRef.ATKObjects;

                let characterName = sourceTurn.properName;
                let skillRef = ATKObjects.bronyaBasicREF ??= ATKObjects["Basic ATK"]["Windrider Bullet"].variant1;

                if (!ATKObjects.bronyaBasic) {
                    let values = ATKObjects.bronyaBasicREFVALUES ??= battleActions.getLevelBasedParam(battleData,skillRef,sourceTurn);
                    const scalar = "ATK";
                    const tags = ["All","Basic","Wind"];
                    const actionTags = ["Basic","Attack"];
                    const keyShortcut = basicShorthand.makeKeysArray;
                    const realDMGKeys = keyShortcut(dmgKeys,tags);
                    const realPENKeys = keyShortcut(resPENKeys,tags);
                    const realShredKeys = keyShortcut(defShredKeys,tags);
                    const realVulnKeys = keyShortcut(vulnKeys,tags);
                    const compositeCacheTag = tags + actionTags;
                    //realDMGKeys,realPENKeys,realShredKeys,realVulnKeys
                    ATKObjects.bronyaBasic = {
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
                let ATKObject = ATKObjects.bronyaBasic;

                if (battleData.isLoggyLogger) {logToBattle(battleData,{logType: "BasicATKStart", name:characterName, target, isEnemy: false, isCharacter: true, AV: battleData.sumAV, actionSlot:skillRef.slot});}
                poke("BasicATKStart",battleData,{sourceTurn});
                battleActions.attackWrapper(battleData,skillRef,sourceTurn,ATKObject);
                battleActions.updateEnergy(battleData,skillRef.energyRegen,sourceTurn);
                poke("BasicATKEnd",battleData,{sourceTurn});

                const bronyaTalent = ATKObjects.bronyaTalent ??= logicRef.skillFunctions.bronyaTalent;
                bronyaTalent(battleData,sourceTurn);
            },
            bronyaFUABasic(battleData,sourceTurn) {
                const logicRef = turnLogic[sourceTurn.properName];
                const ATKObjects = logicRef.ATKObjects;

                let characterName = sourceTurn.properName;
                let skillRef = ATKObjects.bronyaFUABasicREF1 ??= ATKObjects.Talent["Leading the Way"].variant1;

                //so here's the deal with e4
                //it doesn't deal basic attack damage, it doesn't get the crit rate bonus from her major trace
                //it JUST deals 80% of whatever multiplier your currently leveled basic attack does
                //which is why we need the current level on the basic attack, then multi by .8
                if (!ATKObjects.bronyaFUABasic) {
                    let skillRef2 = ATKObjects["Basic ATK"]["Windrider Bullet"].variant1;
                    let values = battleActions.getLevelBasedParam(battleData,skillRef2,sourceTurn);
                    const scalar = "ATK";
                    const tags = ["All","FUA","Wind"];
                    const keyShortcut = basicShorthand.makeKeysArray;
                    const realDMGKeys = keyShortcut(dmgKeys,tags);
                    const realPENKeys = keyShortcut(resPENKeys,tags);
                    const realShredKeys = keyShortcut(defShredKeys,tags);
                    const realVulnKeys = keyShortcut(vulnKeys,tags);
                    const actionTags = ["FUA","Attack"];
                    const compositeCacheTag = tags + actionTags;
                    //realDMGKeys,realPENKeys,realShredKeys,realVulnKeys
                    ATKObjects.bronyaFUABasic = {
                        multipliers: {
                            primary: 0.80 * values[0],//the .8 here isn't for a modified trace level, it's bc e4 is a multi based on the multi of the basic atk
                            blast: null,
                            all: null,
                        },
                        scalar,
                        DMGTags: tags,
                        allToughness: false,
                        slot: skillRef.slot,
                        realDMGKeys,realPENKeys,realShredKeys,realVulnKeys,
                        actionTags,
                        isFUA: true,
                        compositeCacheTag
                    }
                }
                let ATKObject = ATKObjects.bronyaFUABasic

                if (battleData.isLoggyLogger) {logToBattle(battleData,{logType: "TalentStart", name:characterName, target:"enemy", isEnemy: false, isCharacter: true, AV: battleData.sumAV, actionSlot:skillRef.slot});}
                poke("TalentStart",battleData,{sourceTurn});
                battleActions.attackWrapper(battleData,skillRef,sourceTurn,ATKObject);
                battleActions.updateEnergy(battleData,skillRef.energyRegen,sourceTurn);
                poke("TalentEnd",battleData,{sourceTurn});
            },
            bronyaTalent(battleData,sourceTurn) {
                const logicRef = turnLogic[sourceTurn.properName];
                const ATKObjects = logicRef.ATKObjects;

                let characterName = sourceTurn.properName;
                // let charSlot = sourceTurn.name;
                // let skillPathing = characters[characterName].skills;
                let skillRef = ATKObjects.bronyaTalentREF ??= ATKObjects.Talent["Leading the Way"].variant1;

                if (battleData.isLoggyLogger) {logToBattle(battleData,{logType: "TalentStart", name:characterName, target:"self", isEnemy: false, isCharacter: true, AV: battleData.sumAV, actionSlot:skillRef.slot});}
                poke("TalentStart",battleData,{sourceTurn});
                let values = ATKObjects.bronyaTalentREFPARAM ??= battleActions.getLevelBasedParam(battleData,skillRef,sourceTurn);
                battleActions.nonViolentWrapper(battleData,skillRef,characterName);
                battleActions.actionAdvance(values[0],sourceTurn,battleData,"Bronya Talent");
                poke("TalentEnd",battleData,{sourceTurn});
            },
            bronyaAdvance(battleData,targetTurn,sourceTurn) {
                const logicRef = turnLogic[sourceTurn.properName];
                const ATKObjects = logicRef.ATKObjects;

                let characterName = sourceTurn.properName;
                let skillRef = ATKObjects.bronyaAdvanceREF ??= ATKObjects.Skill["Combat Redeployment"].variant1;

                if (battleData.isLoggyLogger) {logToBattle(battleData,{logType: "SkillStart", name:characterName, target:targetTurn.name, isEnemy: false, isCharacter: true, AV: battleData.sumAV, actionSlot:skillRef.slot});}
                poke("SkillStart",battleData,{sourceTurn});

                battleActions.updateEnergy(battleData,skillRef.energyRegen,sourceTurn);
                
                let rank = sourceTurn.rank;
                let e1 = rank >= 1;
                let e2 = rank >= 2;
                let e6 = rank >= 6;

                poke("TargetAlly",battleData,{targetType:"Single", sourceTurn, targetTurn, targetSkill:skillRef.slot,targetChildEntities: false});

                if (!ATKObjects.bronyaAdvanceSHEET) {
                    let values = ATKObjects.bronyaAdvanceREFPARAM ??= battleActions.getLevelBasedParam(battleData,skillRef,sourceTurn);
                    
                    const buffRef = logicRef.buffNames;
                    let buffName = buffRef.combat;
                    let turnOverride = e6 ? 2 : 1;
                    ATKObjects.bronyaAdvanceSHEET = {
                        "stats": [DamageAll],
                        [DamageAll]: values[0],
                        "source": characterName,
                        "sourceOwner": sourceTurn.properName,
                        "buffName": buffName,
                        "duration": turnOverride,
                        "AVApplied": 0,
                        "maxStacks": 1,
                        "currentStacks": 1,
                        "decay": false,
                        "expireType": "EndTurn"
                    }
                }
                const buffSheet = ATKObjects.bronyaAdvanceSHEET;
                battleActions.updateBuff(battleData,targetTurn,buffSheet);

                if (e1) {
                    const quickRef = logicRef.characterValuesBattle;
                    if (quickRef.e1SPRegenReady) {
                        quickRef.e1SPRegenReady = false;
                        battleActions.updateSkillPoints(1,battleData,{sourceTurn,sourceName:"Bronya E1 SP Regen"});
                    }
                    else {quickRef.e1SPRegenReady = true;}
                    //just a basic on/off switch. If the sp regen is ready, then we regen and turn it off
                    //if the next turn comes up and it's off, then we turn it on so we can regen on the next turn
                    //TODO: need to look and see later if the 1turn cooldown means it'd technically be after every 2 turns though
                }

                if (targetTurn.properName != characterName) {battleActions.actionAdvance(1,targetTurn,battleData,"Bronya Skill");}//prevent self advancement
                battleActions.nonViolentWrapper(battleData,skillRef,characterName);

                if (e2) {
                    if (!ATKObjects.bronyaAdvanceE2SHEET) {
                        let buffName = logicRef.buffNames.march;
                        ATKObjects.bronyaAdvanceE2SHEET = {
                            "stats": [SPDP],
                            [SPDP]: 0.30,
                            "source": characterName,
                            "sourceOwner": sourceTurn.properName,
                            "buffName": buffName,
                            "duration": 2,//lasts for 1 turn but it gets applied before their turn starts, but applies after their turn ends so wtf, we say 2 turns to make it work
                            "AVApplied": 0,
                            "maxStacks": 1,
                            "currentStacks": 1,
                            "decay": false,
                            "expireType": "EndTurn"
                        }
                    }
                    const buffSheet = ATKObjects.bronyaAdvanceE2SHEET;
                    battleActions.updateBuff(battleData,targetTurn,buffSheet);
                }

                poke("SkillEnd",battleData,{sourceTurn});
            },
            bronyaUltimate(battleData,sourceTurn) {
                const logicRef = turnLogic[sourceTurn.properName];
                const ATKObjects = logicRef.ATKObjects;

                let characterName = sourceTurn.properName;
                let skillRef = ATKObjects.bronyaUltimateREF ??= ATKObjects.Ultimate["The Belobog March"].variant1;

                battleActions.updateEnergy(battleData,-sourceTurn.maxEnergy,sourceTurn);

                poke("TargetAlly",battleData,{targetType:"Team", sourceTurn, targetTurn:null, targetSkill:skillRef.slot,targetChildEntities: false});
                //team wide buffs already cycle through the allyPositions array, in which case active memos will get targeted without needing targetChildEntities to be true
                
                let values = ATKObjects.bronyaUltimateREFPARAM ??= battleActions.getLevelBasedParam(battleData,skillRef,sourceTurn);
                let stats = sourceTurn.statTable;
                let critDMG = stats[CritDamageBase] + stats[CritDamageBaseNULL];//null is for shit that can't be included in the ratio
                
                let fixedBonus = values[2];
                let bonusRatio = values[1];
                let critDMGTotalBonus = bonusRatio*critDMG + fixedBonus;

                if (!ATKObjects.bronyaUltimateSHEET) {
                    let buffName = logicRef.buffNames.belobog;
                    ATKObjects.bronyaUltimateSHEET = {
                        "stats": [ATKP,CritDamageBase,CritDamageBaseNULL],
                        [ATKP]: values[0],
                        [CritDamageBase]: 0,
                        [CritDamageBaseNULL]: -0,
                        "source": "Ultimate",
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
                const buffSheet = ATKObjects.bronyaUltimateSHEET;
                buffSheet[CritDamageBase] = critDMGTotalBonus;
                buffSheet[CritDamageBaseNULL] = -critDMGTotalBonus;

                for (let targetTurn of battleData.allyPositions) {
                    let isTheirTurn = targetTurn.turnState;
                    let turnOverride = isTheirTurn ? 3 : 2;//procs that occur within their own turn, will last beyond that turn. I think. I hope. Archer's guardian works that way, at least.

                    buffSheet.duration = turnOverride;
                    battleActions.updateBuff(battleData,targetTurn,buffSheet);
                }

                battleActions.updateEnergy(battleData,skillRef.energyRegen,sourceTurn);
                battleActions.nonViolentWrapper(battleData,skillRef,characterName);
                sourceTurn.ultyQueued = false;
            },
            bronyaTechnique(battleData,target,sourceTurn) {
                const logicRef = turnLogic[sourceTurn.properName];
                const ATKObjects = logicRef.ATKObjects;

                let characterName = sourceTurn.properName;
                let skillRef = ATKObjects.bronyaTechniqueREF ??= ATKObjects.Technique["Banner of Command"].variant1;
                let values = ATKObjects.bronyaTechniqueREFPARAM ??= battleActions.getLevelBasedParam(battleData,skillRef,sourceTurn);
                let buffName = turnLogic[characterName].buffNames.banner;
                const buffSheet = ATKObjects.bronyaTechSHEET ??= {
                    "stats": [ATKP],
                    [ATKP]: values[0],
                    "source": characterName,
                    "sourceOwner": sourceTurn.properName,
                    "buffName": buffName,
                    "duration": 2,
                    "AVApplied": 0,
                    "maxStacks": 1,
                    "currentStacks": 1,
                    "decay": false,
                    "expireType": "EndTurn"
                }

                if (battleData.isLoggyLogger) {logToBattle(battleData,{logType: "TechniqueStart", name:characterName, target, isEnemy: false, isCharacter: true, AV: battleData.sumAV, actionSlot:skillRef.slot});}
                poke("TargetAlly",battleData,{targetType:"Team", sourceTurn, targetTurn:null, targetSkill:skillRef.slot,targetChildEntities: false});
                poke("TechniqueStart",battleData,{sourceTurn});

                for (let targetTurn of battleData.allyPositions) {
                    buffSheet.target = targetTurn.properName;
                    battleActions.updateBuff(battleData,targetTurn,buffSheet)
                }

                battleActions.nonViolentWrapper(battleData,skillRef,characterName);
                poke("TechniqueEnd",battleData,{sourceTurn});
            },
        },
        "listeners": [
            {
                "trigger": "AllyCreated",
                condition(battleData,generalInfo) {
                    let ownerTurn = this.ownerTurn;

                    if (!this.bronyaMightDMGSHEET) {
                        let characterName = ownerTurn.properName;
                        let buffName = turnLogic[characterName].buffNames.might;
                        this.bronyaMightDMGSHEET = {
                            "stats": [DamageAll],
                            [DamageAll]: 0.10,
                            "source": characterName,
                            "sourceOwner": ownerTurn.properName,
                            "buffName": buffName,
                            "duration": null,
                            "AVApplied": 0,
                            "maxStacks": 1,
                            "currentStacks": 1,
                            "decay": false,
                            "expireType": null
                        }
                    }
                    const buffSheet = this.bronyaMightDMGSHEET;
                    const targetTurn = generalInfo.targetTurn;
                    battleActions.updateBuff(battleData,targetTurn,buffSheet);
                },
                "target": "team",
                "listenerName": "Bronya - Major Trace: Military Might",
                "ownerTurn": {},
            },
            {
                "trigger": "AllyCreated",
                condition(battleData,generalInfo) {
                    //this one is super weird, it says on battle start, but tested with aggy and garment, it applies to garment EACH time it is added to the field.
                    let ownerTurn = this.ownerTurn;

                    if (!this.bronyaBattlefieldDEFSHEET) {
                        let characterName = ownerTurn.properName;
                        let buffName = turnLogic[characterName].buffNames.battlefield;
                        this.bronyaBattlefieldDEFSHEET = {
                            "stats": [DEFP],
                            [DEFP]: 0.20,
                            "source": characterName,
                            "sourceOwner": ownerTurn.properName,
                            "buffName": buffName,
                            "duration": 2,
                            "AVApplied": 0,
                            "maxStacks": 1,
                            "currentStacks": 1,
                            "decay": false,
                            "expireType": "EndTurn",
                            "removeOnDeath": true
                        }
                    }
                    const buffSheet = this.bronyaBattlefieldDEFSHEET;

                    const targetTurn = generalInfo.targetTurn;
                    battleActions.updateBuff(battleData,targetTurn,buffSheet);
                },
                "target": "team",
                "listenerName": "Bronya - Major Trace: Battlefield",
                "ownerTurn": {},
            },
            {
                "trigger": "UltimateReady",
                condition(battleData,generalInfo) {
                    let ownerTurn = this.ownerTurn;
                    if (ownerTurn.ultyQueued) {return;}

                    let energyCheck = ownerTurn.currentEnergy === ownerTurn.maxEnergy;
                    let otherObscureCondition = energyCheck ? checkUlty(battleData,ownerTurn) : false;

                    if (otherObscureCondition) {
                        ownerTurn.ultyQueued = true;

                        const queueObject = this.queueObject ??= {
                            attack: turnLogic[ownerTurn.properName].skillFunctions.bronyaUltimate,
                            target: this.target,
                            name: this.listenerName,
                            properName: ownerTurn.properName,
                            sourceTurn: ownerTurn
                        }
                        queueObject.sourceTurn = ownerTurn;
                        battleActions.queueUltimateUse(battleData,queueObject);
                    }
                },
                "target": "team",
                "listenerName": "Bronya - Ultimate queued",
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
                        const bronyaTechnique = this.bronyaTechnique ??= logicRef.skillFunctions.bronyaTechnique
                        bronyaTechnique(battleData,"self",ownerTurn)
                    }
                },
                "target": "team",
                "listenerName": "Bronya Technique",
                "ownerTurn": {},
            },
            {
                "trigger": "PreBattleEntersCombat",
                condition(battleData,generalInfo) {
                    let ownerTurn = this.ownerTurn;

                    const buffSheet = this.buffSheet ??= {
                        "stats": [CritRateBase],
                        [CritRateBase]: 1,
                        "target": null,
                        "source": "Trace",
                        "sourceOwner": ownerTurn.properName,
                        "buffName": turnLogic[ownerTurn.properName].buffNames.command,
                        "duration": 2,
                        "AVApplied": 0,
                        "maxStacks": 1,
                        "currentStacks": 1,
                        "decay": false,
                        "expireType": null,
                        "actionTags": ["Basic"]
                    }

                    battleActions.updateBuff(battleData,ownerTurn,buffSheet);
                },
                "target": "team",
                "listenerName": "Bronya - Major Trace: Command",
                "ownerTurn": {},
            },
        ],
        "eidolonListeners": {
            1: [],
            2: [],
            3: [],
            4: [
                {
                    "trigger": "StartTurn",
                    condition(battleData,generalInfo) {
                        let ownerTurn = this.ownerTurn;
                        let sourceTurn = generalInfo.sourceTurn;
    
                        if (sourceTurn.properName != ownerTurn.properName) {return;}
                        ownerTurn.battleValues.e4FUAReady = true;
                    },
                    "target": "self",
                    "listenerName": "Bronya E4 FUA stack reset",
                    "announce": false,
                    "ownerTurn": {},
                },
                {
                    "trigger": "AttackEnd",
                    condition(battleData,generalInfo) {
                        let ownerTurn = this.ownerTurn;
                        let characterName = ownerTurn.properName;
                        
                        let sourceTurn = generalInfo.sourceTurn;
                        if (sourceTurn.isEnemy || sourceTurn.properName === characterName) {return;}//can't self proc off basic atk, only happens at e4+ as well
    
                        let logicRef = turnLogic[characterName];
                        let valuesRef = ownerTurn.battleValues;
    
                        if (valuesRef.e4FUAReady && generalInfo.dmgSlot === "Basic ATK") {
                            valuesRef.e4FUAReady = false;
    
                            const queueObject = this.queueObject ??= {
                                attack: logicRef.skillFunctions.bronyaFUABasic,
                                target: this.target,
                                name: this.listenerName,
                                properName: characterName,
                                sourceTurn: null
                            }
                            queueObject.sourceTurn = ownerTurn;
                            battleActions.queueFollowUpAttack(battleData,queueObject);
                        }
                    },
                    "target": "enemy",
                    "listenerName": "Bronya E4 FUA controller",
                    "announce": false,
                    "ownerTurn": {},
                },
            ],
            5: [],
            6: [],
        },
        "ATKObjects": {},
        "characterValues": {
            "e1SPRegenReady": true,
            "e4FUAReady": true,
        },
        "useTechnique": true,
        "techniqueType": "Buff",
        "buffNames": {
            "might": "Military Might",
            "command": "Command: Crit Rate",
            "battlefield": "Battlefield DEF",
            "banner": "Banner of Command",
            "combat": "Combat Redeployment",
            "march": "Quick March",
            "belobog": "The Belobog March",
        },
        "characterValuesBattle": {},
    },
    "Sunday": {//ATKOBJECTS DONE
        logic(thisTurn,battleData) {
            // const shortRef = this;
            // let characterName = thisTurn.properName
            
            // let actionUsed = false;
            // let statCalls = thisTurn.battleValues;
            // let shortCalls = shortRef.skillFunctions;

            // let ultySoon = battleActions.energyLookAhead(thisTurn,30);

            let currentSP = battleData.skillPointCurrent;
            let minimum = currentSP >= 1;

            if (minimum && checkSkill(battleData,thisTurn)) {
                let target = battleData.nameBasedTurns.char1;
                const returnSkillCall = this.returnSkillCall ??= {action: "Skill", points: -1, actionCall: this.skillFunctions.sundayAdvance, target: null, endTurn: true}
                returnSkillCall.target = target;
                return returnSkillCall;
            }

            const returnBasicCall = this.returnBasicCall ??= {action: "BasicATK", points: 1, actionCall: this.skillFunctions.sundayBasic, target: "enemy", endTurn: true}
            return returnBasicCall;
        },
        "skillFunctions": {
            sundayBasic(battleData,target,sourceTurn) {
                let characterName = sourceTurn.properName;

                const logicRef = turnLogic[characterName];
                const ATKObjects = logicRef.ATKObjects;
                // const logicRef = turnLogic[sourceTurn.properName];
                // const ATKObjects = logicRef.ATKObjects;
                let skillRef = ATKObjects.sundayBasicREF ??= ATKObjects["Basic ATK"]["Gleaming Admonition"].variant1;
                
                if (!ATKObjects.sundayBasicATKOBJECT) {
                    let values = battleActions.getLevelBasedParam(battleData,skillRef,sourceTurn);
                    const scalar = "ATK";
                    const tags = ["All","Basic","Imaginary"];
                    const actionTags = ["Basic","Attack"];
                    const keyShortcut = basicShorthand.makeKeysArray;
                    const realDMGKeys = keyShortcut(dmgKeys,tags);
                    const realPENKeys = keyShortcut(resPENKeys,tags);
                    const realShredKeys = keyShortcut(defShredKeys,tags);
                    const realVulnKeys = keyShortcut(vulnKeys,tags);
                    const compositeCacheTag = tags + actionTags;
                    //realDMGKeys,realPENKeys,realShredKeys,realVulnKeys
                    ATKObjects.sundayBasicATKOBJECT = {
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
                let ATKObject = ATKObjects.sundayBasicATKOBJECT;

                if (battleData.isLoggyLogger) {logToBattle(battleData,{logType: "BasicATKStart", name:characterName, target, isEnemy: false, isCharacter: true, AV: battleData.sumAV, actionSlot:skillRef.slot});}
                poke("BasicATKStart",battleData,{sourceTurn});
                battleActions.attackWrapper(battleData,skillRef,sourceTurn,ATKObject);
                battleActions.updateEnergy(battleData,skillRef.energyRegen,sourceTurn);
                poke("BasicATKEnd",battleData,{sourceTurn});

                // turnLogic[characterName].skillFunctions.bronyaTalent(battleData,sourceTurn);
            },
            sundayAdvance(battleData,targetTurn,sourceTurn) {
                let characterName = sourceTurn.properName;
                const logicRef = turnLogic[characterName];
                const ATKObjects = logicRef.ATKObjects;
                
                let skillRef = ATKObjects.sundayAdvanceREF ??= ATKObjects.Skill["Benison of Paper and Rites"].variant1;
                let values = ATKObjects.sundayAdvanceREFPARAM ??= battleActions.getLevelBasedParam(battleData,skillRef,sourceTurn);

                // console.log(targetTurn)
                // const targetTurn = battleData.nameBasedTurns.char1;
                if (battleData.isLoggyLogger) {logToBattle(battleData,{logType: "SkillStart", name:characterName, target:targetTurn.name, isEnemy: false, isCharacter: true, AV: battleData.sumAV, actionSlot:skillRef.slot});}
                poke("SkillStart",battleData,{sourceTurn});

                // const logicRef = turnLogic[characterName];
                const buffRef = logicRef.buffNames;
                const rank = sourceTurn.rank;
                const e1 = rank >= 1;

                poke("TargetAlly",battleData,{targetType:"Single", sourceTurn, targetTurn, targetSkill:skillRef.slot,targetChildEntities: true});
                //TODO: add the cleanse that the skill does, mega fuckin low priority though

                if (!ATKObjects.sundayAdvanceBUFFSHEET) {
                    let buffName = buffRef.skillBuff;
                    // greatTableIndex
                    // greatTableKeys
                    ATKObjects.sundayAdvanceBUFFSHEET = {
                        "stats": [DamageAll],
                        [DamageAll]: values[1],
                        "source": "Skill",
                        "sourceOwner": characterName,
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
                let buffSheet = ATKObjects.sundayAdvanceBUFFSHEET;
                buffSheet[DamageAll] = (targetTurn.activeSummons ? values[3] : 0) + values[1];
                const hasMemosprite = targetTurn.activeMemosprites;
                const memospriteEventRef = targetTurn.memospriteEventRef;
                const memoTurn = hasMemosprite ? targetTurn[memospriteEventRef] : null;
                // buffSheet.duration = targetTurn.turnState
                const updateBuff = battleActions.updateBuff;
                updateBuff(battleData,targetTurn,buffSheet);
                if (memoTurn) {
                    updateBuff(battleData,memoTurn,buffSheet);
                }
                logicRef.skillFunctions.sundayTalent(battleData,sourceTurn,targetTurn);

                if (e1) {
                    if (!ATKObjects.sundayE1OwnerSheet) {
                        // greatTableIndex
                        // greatTableKeys
                        ATKObjects.sundayE1OwnerSheet = {
                            "stats": [DEFShredAll],
                            [DEFShredAll]: 0.16,
                            "source": characterName,
                            "sourceOwner": characterName,
                            "buffName": buffRef.e1Owner,
                            "duration": 2,
                            "AVApplied": 0,
                            "maxStacks": 1,
                            "currentStacks": 1,
                            "decay": false,
                            "expireType": "EndTurn",
                        }
                        ATKObjects.sundayE1SummonSheet = {
                            "stats": [DEFShredAll],
                            [DEFShredAll]: 0.40,
                            "source": characterName,
                            "sourceOwner": characterName,
                            "buffName": buffRef.e1Summon,
                            "duration": 2,
                            "AVApplied": 0,
                            "maxStacks": 1,
                            "currentStacks": 1,
                            "decay": false,
                            "expireType": "EndTurn",
                            "actionTags": ["Summon"],
                        }
                        ATKObjects.sundayE1SummonSheetAdjustment = {
                            "stats": [DEFShredAll],
                            [DEFShredAll]: -0.16,
                            "source": characterName,
                            "sourceOwner": characterName,
                            "buffName": buffRef.e1SummonAdjustment,
                            "duration": 2,
                            "AVApplied": 0,
                            "maxStacks": 1,
                            "currentStacks": 1,
                            "decay": false,
                            "expireType": "EndTurn",
                            "actionTags": ["Summon"],
                        }
                        ATKObjects.sundayE1MemoSheet = {
                            "stats": [DEFShredAll],
                            [DEFShredAll]: 0.40,
                            "source": characterName,
                            "sourceOwner": characterName,
                            "buffName": buffRef.e1Summon,
                            "duration": 2,
                            "AVApplied": 0,
                            "maxStacks": 1,
                            "currentStacks": 1,
                            "decay": false,
                            "expireType": "EndTurn",
                            "removeOnDeath": true,
                        }
                    }
                    
                    const ownerSheet = ATKObjects.sundayE1OwnerSheet;
                    ownerSheet.AVApplied = battleData.sumAV;
                    updateBuff(battleData,targetTurn,ownerSheet);
                    const summonSheet = ATKObjects.sundayE1SummonSheet;
                    const memoSheet = ATKObjects.sundayE1MemoSheet;
                    if (targetTurn.activeMemosprites) {
                        const memoRefName = targetTurn.memospriteEventRef;
                        const memoTurn = targetTurn[memoRefName];
                        updateBuff(battleData,memoTurn,memoSheet);
                    }
                    if (targetTurn.activeSummons) {
                        const summonRefName = targetTurn.summonEventRef;
                        const adjustedSheet = ATKObjects.sundayE1SummonSheetAdjustment;
                        // const summonTurn = targetTurn[summonRefName];
                        if (summonRefName) {
                            updateBuff(battleData,targetTurn,summonSheet);
                            updateBuff(battleData,targetTurn,adjustedSheet);
                        }
                        //TODO: new shield dan might screw with this a bit.
                        //right now I assume that dan assigning souldragon to an entity does NOT actually make that entity the owner of the summon, it only makes the bondmate think it owns one
                        //for the purposes of banana planar, but I don't know if that is actually the case.
                        //it's entirely possible that when sunday advances the bondmate, it would also advance souldragon, but I *believe* it would not since dan is the true owner.

                        //for now though what I'm doing is checking not just if the active summons counter is up(bc bondmate would have a counter), but also if the summonEventRef exists on that character
                        //done like this, bondmate wouldn't get the summon shred applied to them as the bondmate, but if applied to dan, he would have an eventref for the summon, and get it applied
                    }
                }

                if (targetTurn.path != "Harmony") {
                    const actionAdvance = battleActions.actionAdvance;
                    if (targetTurn.activeSummons) {
                        const declaredSummons = battleData.declaredSummons;
                        const ownedSummon = targetTurn.summonEventRef;
                        const ownedSummonTurn = ownedSummon ? targetTurn[ownedSummon] : null;

                        for (let summon of declaredSummons) {
                            if (ownedSummonTurn && summon.properName === ownedSummonTurn.properName) {continue;}
                            if (summon.isActive && summon.currentlyOwnedBy === targetTurn.name) {
                                actionAdvance(1,summon,battleData,"Sunday Skill");
                            }
                        }

                        if (ownedSummonTurn && ownedSummonTurn.isActive) {actionAdvance(1,ownedSummonTurn,battleData,"Sunday Skill");}
                        //this is omega cursed bc of the new dan, but basically the action advance happens like this
                        //if the target has a supplemented summon, that is advanced first, then if the target has an owned summon from
                        //themselves, that is advanced next, then if the target has a memosprite, that is advanced next
                        //and then the character is advanced last, so that way the turn order after an advance would be as follows:
                        //character -> memosprite -> owned summon -> provided summon
                    }
                    if (targetTurn.activeMemosprites) {
                        const memoRefName = targetTurn.memospriteEventRef;
                        const memoTurn = targetTurn[memoRefName];
                        actionAdvance(1,memoTurn,battleData,"Sunday Skill");
                    }
                    
                    actionAdvance(1,targetTurn,battleData,"Sunday Skill");
                }//prevent self advancement or harmony characters as the skill describes

                battleActions.nonViolentWrapper(battleData,skillRef,characterName);
                battleActions.updateEnergy(battleData,skillRef.energyRegen,sourceTurn);

                const charWithBeatified = sourceTurn.battleValues.charWithBeatifiedNameSlot;
                if (charWithBeatified) {battleActions.updateSkillPoints(1,battleData,{sourceTurn,sourceName:"Skill used on Beatified"});}


                poke("SkillEnd",battleData,{sourceTurn});
            },
            sundayUltimate(battleData,sourceTurn) {
                let characterName = sourceTurn.properName;
                const logicRef = turnLogic[characterName];
                const ATKObjects = logicRef.ATKObjects;
                
                let skillRef = ATKObjects.sundayUltimateREF ??= ATKObjects.Ultimate["Ode to Caress and Cicatrix"].variant1;
                let values = ATKObjects.sundayUltimateREFPARAM ??= battleActions.getLevelBasedParam(battleData,skillRef,sourceTurn);


                // const logicRef = turnLogic[sourceTurn.properName];
                // const ATKObjects = logicRef.ATKObjects;
                const getEnergy = battleActions.updateEnergy;
                getEnergy(battleData,-sourceTurn.maxEnergy,sourceTurn);

                const allyTurns = battleData.nameBasedTurns;
                const targetTurn = allyTurns.char1;
                poke("TargetAlly",battleData,{targetType:"Single", sourceTurn, targetTurn, targetSkill:skillRef.slot,targetChildEntities: true});
                
                // let targetTurn = battleData.nameBasedTurns[target];
                const maxEnergy = targetTurn.maxEnergy;
                if (maxEnergy) {
                    const proposedRegen = maxEnergy * 0.20;
                    const actualRegen = Math.max(proposedRegen,40);
                    const regenString = proposedRegen < 40 ? "Rest Day's Longing" : "Sunday Ultimate";
                    getEnergy(battleData,actualRegen,targetTurn,true,regenString);
                }
                
                const rank = sourceTurn.rank;
                const e2 = rank >= 2;
                const e6 = rank >= 6;

                // const logicRef = turnLogic[characterName];
                if (!ATKObjects.sundayUltimateBeatifiedSHEET) {
                    const buffNames = logicRef.buffNames;
                    // greatTableIndex
                    // greatTableKeys
                    ATKObjects.sundayUltimateBeatifiedSHEET = {
                        "stats": [CritDamageBase,CritDamageBaseNULL,DamageAll],
                        [CritDamageBase]: 0,
                        [CritDamageBaseNULL]: -0,
                        [DamageAll]: e2 ? 0.30 : 0,
                        "source": characterName,
                        "sourceOwner": sourceTurn.properName,
                        "buffName": buffNames.beatified,
                        "duration": 1,
                        "AVApplied": battleData.sumAV,
                        "maxStacks": 1,
                        "currentStacks": 1,
                        "decay": false,
                        "expireType": null,
                        "removeOnDeath": true,
                    }

                    ATKObjects.sundayUltimateBeatifiedCountdownSHEET = {
                        "stats": null,
                        "source": characterName,
                        "sourceOwner": sourceTurn.properName,
                        "buffName": buffNames.beatifiedSunday,
                        "duration": 3,
                        "AVApplied": battleData.sumAV,
                        "maxStacks": 1,
                        "currentStacks": 1,
                        "decay": false,
                        "expireType": "StartTurn",
                        expireFunction: logicRef.skillFunctions.beatifiedExpired,
                        expireParam: sourceTurn.name,
                        "removeOnDeath": true,
                    }
                    
                }

                
                let stats = sourceTurn.statTable;
                let critDMG = stats[CritDamageBase] + stats[CritDamageBaseNULL];//null is for shit that can't be included in the ratio
                
                let fixedBonus = values[3];
                let bonusRatio = values[1];
                let critDMGTotalBonus = bonusRatio*critDMG + fixedBonus;

                
                const buffSheet = ATKObjects.sundayUltimateBeatifiedSHEET;
                const buffName = buffSheet.buffName;
                buffSheet[CritDamageBase] = critDMGTotalBonus;
                buffSheet[CritDamageBaseNULL] = -critDMGTotalBonus;


                const hasMemosprite = targetTurn.activeMemosprites;
                const memospriteEventRef = targetTurn.memospriteEventRef;
                const memoTurn = hasMemosprite ? targetTurn[memospriteEventRef] : null;
                const updateBuff = battleActions.updateBuff;
                let charValuesRef = sourceTurn.battleValues;
                if (charValuesRef.charWithBeatifiedNameSlot != null) {//if someone exists on the team right now with benediction
                    let oldTarget = allyTurns[charValuesRef.charWithBeatifiedNameSlot];
                    let beatifiedRef = oldTarget.buffsObject[buffName];
                    if (targetTurn.name != charValuesRef.charWithBeatifiedNameSlot) {//if that someone does NOT match the current buff target
                        //benediction can only apply on the most recent target, so if we ever find a scenario where benediction is getting applied to a new target
                        //that does not match the last target she applied to, then we need to remove it
                        //however if the currently assigned target is nobody, then we never reach this point and it's chillin
                        removeBuff(battleData,oldTarget,beatifiedRef);
                        if (memoTurn) {removeBuff(battleData,memoTurn,beatifiedRef);}
                    }
                    else {//if the target turn IS the same person with benediction
                        //and if the new buff is DIFFERENT than the prior applied buff, then remove it, SILENTLY
                        if (beatifiedRef && beatifiedRef[CritDamageBase] != critDMGTotalBonus) {
                            removeBuff(battleData,oldTarget,beatifiedRef,true);
                            if (memoTurn) {removeBuff(battleData,memoTurn,beatifiedRef,true);}
                        }
                        //TODO: see todo list about overwriting buffs, would be really fucking handy honestly dunno why I didn't think of it sooner
                    }
                }

                //then finally, for the love of god, apply the fucking buff.
                updateBuff(battleData,targetTurn,buffSheet);
                if (memoTurn) {updateBuff(battleData,memoTurn,buffSheet);}
                if (e6) {logicRef.skillFunctions.sundayTalent(battleData,sourceTurn,targetTurn);}
                charValuesRef.charWithBeatifiedNameSlot = targetTurn.name;//an ofcd assign the current benediction target

                const sundayCountdown = ATKObjects.sundayUltimateBeatifiedCountdownSHEET;
                updateBuff(battleData,sourceTurn,sundayCountdown);

                getEnergy(battleData,skillRef.energyRegen,sourceTurn);
                battleActions.nonViolentWrapper(battleData,skillRef,characterName);
                sourceTurn.ultyQueued = false;
            },
            sundayTalent(battleData,sourceTurn,targetTurn) {
                const rank = sourceTurn.rank;
                // const e1 = rank >= 1;
                // const e2 = rank >= 2;
                const e6 = rank >= 6;

                const logicRef = turnLogic[sourceTurn.properName];
                const ATKObjects = logicRef.ATKObjects;
                if (!ATKObjects.sundayTalentCRITSHEET) {
                    let skillRef2 = ATKObjects.sundayTalentREF ??= ATKObjects.Talent["The Sorrowing Body"].variant1;
                    let values2 = ATKObjects.sundayTalentREFPARAM ??= battleActions.getLevelBasedParam(battleData,skillRef2,sourceTurn);
                    const characterName = sourceTurn.properName;
                    const buffRef = turnLogic[characterName].buffNames;
                    let buffName2 = buffRef.talentCrit;
                    let buffName3 = buffRef.talentCritE6;

                    // greatTableIndex
                    // greatTableKeys
                    ATKObjects.sundayTalentCRITSHEET = {
                        "stats": [CritRateBase],
                        [CritRateBase]: values2[0],
                        "source": characterName,
                        "sourceOwner": sourceTurn.properName,
                        "buffName": buffName2,
                        "duration": e6 ? 4 : 3,
                        "AVApplied": 0,
                        "maxStacks": e6 ? 3 : 1,
                        "currentStacks": 1,
                        "decay": false,
                        "expireType": "EndTurn",
                        "removeOnDeath": true,
                    }
                    ATKObjects.sundayTalentCRITe6SHEET = {
                        "stats": [CritDamageBase,CritDamageBaseNULL],
                        [CritDamageBase]: 0,
                        [CritDamageBaseNULL]: -0,
                        "source": characterName,
                        "sourceOwner": sourceTurn.properName,
                        "buffName": buffName3,
                        "duration": e6 ? 4 : 3,
                        "AVApplied": 0,
                        "maxStacks": e6 ? 3 : 1,
                        "currentStacks": 1,
                        "decay": false,
                        "expireType": "EndTurn",
                        "removeOnDeath": true,
                    }
                }

                let buffSheet = ATKObjects.sundayTalentCRITSHEET;
                // const buffName = buffSheet.buffName;

                const hasMemosprite = targetTurn.activeMemosprites;
                const memospriteEventRef = targetTurn.memospriteEventRef;
                const memoTurn = hasMemosprite ? targetTurn[memospriteEventRef] : null;
                // buffSheet.duration = targetTurn.turnState
                const updateBuff = battleActions.updateBuff;
                updateBuff(battleData,targetTurn,buffSheet);
                if (memoTurn) {updateBuff(battleData,memoTurn,buffSheet);}

                if (e6) {
                    // const buffOwner = targetTurn.buffsObject[buffName];
                    const statCheck = logicRef.skillFunctions.statCheck;
                    statCheck(battleData,targetTurn,sourceTurn);
                    if (memoTurn) {statCheck(battleData,memoTurn,sourceTurn);}
                }
            },
            beatifiedExpired(battleData,sundaySlot) {
                const allyTurns = battleData.nameBasedTurns;
                const sundayTurn = allyTurns[sundaySlot];

                const logicRef = turnLogic[sundayTurn.properName];
                const ATKObjects = logicRef.ATKObjects;
                const charValuesRef = sundayTurn.battleValues;
                const charWithBeatified = allyTurns[charValuesRef.charWithBeatifiedNameSlot];

                const hasMemosprite = charWithBeatified.activeMemosprites;
                const memospriteEventRef = charWithBeatified.memospriteEventRef;
                const memoTurn = hasMemosprite ? charWithBeatified[memospriteEventRef] : null;

                const targetSheet = ATKObjects.sundayUltimateBeatifiedSHEET;
                // const updateBuff = battleActions.updateBuff;
                removeBuff(battleData,charWithBeatified,targetSheet);
                if (memoTurn) {removeBuff(battleData,memoTurn,targetSheet);}
                charValuesRef.charWithBeatifiedNameSlot = null;
            },
            sundayTechnique(battleData,target,sourceTurn) {
                let characterName = sourceTurn.properName;

                const logicRef = turnLogic[characterName];
                const ATKObjects = logicRef.ATKObjects;

                let skillRef = this.sundayTechPath ??= ATKObjects.Technique["The Glorious Mysteries"].variant1;

                if (battleData.isLoggyLogger) {logToBattle(battleData,{logType: "TechniqueStart", name:characterName, target, isEnemy: false, isCharacter: true, AV: battleData.sumAV, actionSlot:skillRef.slot});}
                poke("TechniqueStart",battleData,{sourceTurn});

                let attackEndings = battleData.battleListeners.TargetAlly ??= [];
                
                const listenerToInejct = ATKObjects.techListener ??= logicRef.listenersToInjectLater.techniqueAllyTarget;
                listenerToInejct.ownerTurn = sourceTurn;

                attackEndings.unshift(listenerToInejct);//it will self remove after it procs, so nothing else needs to be done here
                battleActions.nonViolentWrapper(battleData,skillRef,characterName);
                poke("TechniqueEnd",battleData,{sourceTurn});
            },
            statCheck(battleData,currentTurn,sourceTurn) {
                // sourceTurn.sundayTalentCRITe6SHEET

                const logicRef = turnLogic[sourceTurn.properName];
                const ATKObjects = logicRef.ATKObjects;

                const buffSheet = ATKObjects.sundayTalentCRITe6SHEET;
                const buffName = buffSheet.buffName;
                const buffCheck = currentTurn.buffsObject[buffName];


                const currentStats = currentTurn.statTable;
                const critBeyondThis = 1;
                const critFinal = Math.max(0,(currentStats[CritRateBase] + currentStats[CritRateBaseNULL]) - critBeyondThis);//can't benefit from converted bonuses
                const conversion = Math.floor(critFinal/.01) * 0.02;

                // greatTableIndex
                // greatTableKeys
                // const updateBuff = battleActions.updateBuff;
                if (buffCheck) {
                    const statCheck = buffCheck[CritDamageBase];
                    if (!conversion) {
                        removeBuff(battleData,currentTurn,buffCheck);
                        return;
                    }
                    if (statCheck != conversion) {
                        //so if gallagher already has the buff, but the new conversion amount does NOT match the existing amount
                        //then silently remove the old buff
                        removeBuff(battleData,currentTurn,buffCheck,true);
                    }
                }

                if (!conversion) {return;}
                buffSheet[CritDamageBase] = conversion;
                buffSheet[CritDamageBaseNULL] = -conversion;
                battleActions.updateBuff(battleData,currentTurn,buffSheet);
            },
        },
        "listeners": [
            {
                "trigger": "PreBattleEntersCombat",
                condition(battleData,generalInfo) {
                    let ownerTurn = this.ownerTurn;

                    battleActions.updateEnergy(battleData,25,ownerTurn,false,"Exalted Sweep");
                },
                "target": "self",
                "listenerName": "Exalted Sweep: energy regen on battleStart",
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
                            attack: turnLogic[ownerTurn.properName].skillFunctions.sundayUltimate,
                            target: this.target,
                            name: this.listenerName,
                            properName: ownerTurn.properName,
                            sourceTurn: ownerTurn
                        }
                        queueObject.sourceTurn = ownerTurn;
                        battleActions.queueUltimateUse(battleData,queueObject);
                    }
                },
                "target": "ally",
                "listenerName": "Sunday - Ultimate queued",
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
                        const techniqueCall = this.techniqueCall ??= logicRef.skillFunctions.sundayTechnique;
                        techniqueCall(battleData,"self",ownerTurn)
                    }
                },
                "target": "self",
                "listenerName": "Sunday Technique",
                "ownerTurn": {},
            },
        ],
        "eidolonListeners": {
            1: [],
            2: [
                {
                    "trigger": "UltimateStart",
                    condition(battleData,generalInfo) {
                        let ownerTurn = this.ownerTurn;
                        const sourceTurn = generalInfo.sourceTurn;
                        if (sourceTurn.properName != ownerTurn.properName) {return;}

                        battleActions.updateSkillPoints(2,battleData,{sourceTurn,sourceName:"E2: Faith Outstrips Frailty"});
    
                        battleActions.removeListenerInBattle(battleData,this.listenerName,this.trigger);
                    },
                    "target": "self",
                    "listenerName": "Faith Outstrips Frailty - SP regen on first ult",
                    "ownerTurn": {},
                }
            ],
            3: [],
            4: [
                {
                    "trigger": "StartTurn",
                    condition(battleData,generalInfo) {
                        let ownerTurn = this.ownerTurn;
                        // let characterName = ownerTurn.properName;
                        // let sourceTurn = generalInfo.sourceTurn;
    
                        if (ownerTurn.turnState) {
                            let amount = 8;
                            battleActions.updateEnergy(battleData,amount,ownerTurn,false,this.listenerName);
                        }
                    },
                    "target": "self",
                    "listenerName": "Sculpture's Preamble - turn start energy gain",
                    "ownerTurn": {},
                },
            ],
            5: [],
            6: [],
        },
        "listenersToInjectLater": {
            "techniqueAllyTarget": {
                "trigger": "TargetAlly",
                condition(battleData,generalInfo) {
                    let ownerTurn = this.ownerTurn;
                    const sourceTurn = generalInfo.sourceTurn;
                    // poke("TargetAlly",battleData,{targetType:"Single", sourceTurn:sourceTurn, targetTurn, targetSkill:skillRef.slot});
                    if (sourceTurn.properName != ownerTurn.properName) {return;}
                    // const dmgSlot = generalInfo.dmgSlot;
                    // if (dmgSlot != "Skill" && dmgSlot != "Talent") {return;}
                    const targetTurn = generalInfo.targetTurn;

                    // greatTableIndex
                    // greatTableKeys
                    const buffSheet = this.buffSheet ??= {
                        "stats": [DamageAll],
                        [DamageAll]: 0.50,
                        "source": ownerTurn.properName,
                        "sourceOwner": ownerTurn.properName,
                        "buffName": turnLogic[ownerTurn.properName].buffNames.technique,
                        "duration": 2,
                        "AVApplied": battleData.sumAV,
                        "maxStacks": 1,
                        "currentStacks": 1,
                        "decay": false,
                        "expireType": "EndTurn",
                        "removeOnDeath": true,
                    }

                    const hasMemosprite = targetTurn.activeMemosprites;
                    const memospriteEventRef = targetTurn.memospriteEventRef;
                    const memoTurn = hasMemosprite ? targetTurn[memospriteEventRef] : null;

                    const updateBuff = battleActions.updateBuff;
                    updateBuff(battleData,targetTurn,buffSheet);
                    if (memoTurn) {updateBuff(battleData,memoTurn,buffSheet);}
                    //then remove, bc this is the only time it'll get called
                    battleActions.removeListenerInBattle(battleData,this.listenerName,this.trigger);
                },
                "target": "self",
                "listenerName": "Sunday Technique ability target listener",
                "ownerTurn": {},
            }
        },
        "ATKObjects": {},
        "characterValues": {
            "charWithBeatifiedNameSlot": null,
        },
        "useTechnique": true,
        "techniqueType": "Support",
        "buffNames": {
            "talentCrit": "The Sorrowing Body",
            "talentCritE6": "E6: The Sorrowing Body",
            "skillBuff": "Benison of Paper and Rites",
            "e1Owner": "Millennium's Quietus [Owner]",
            "e1Summon": "Millennium's Quietus [Summon]",
            "e1SummonAdjustment": "Millennium's Quietus [Adjusted for Owner's Shred]",
            "beatified": "The Beatified",
            "beatifiedSunday": "The Beatified (Countdown)",
            "technique": "The Glorious Mysteries",
        },
        "characterValuesBattle": {},
    },
    "Tribbie": {//ATKOBJECTS DONE
        logic(thisTurn,battleData) {
            // const shortRef = this;
            // let characterName = thisTurn.properName
            let currentSP = battleData.skillPointCurrent;
            // let actionUsed = false;
            // let statCalls = shortRef.characterValuesBattle;
            // let shortCalls = shortRef.skillFunctions;
            // let skillPathing = characters[characterName].skills;

            // let ultySoon = battleActions.energyLookAhead(thisTurn,30);
            let minimum = currentSP >= 1;


            if (minimum && checkSkill(battleData,thisTurn)) {
                const returnSkillCall = this.returnSkillCall ??= {action: "Skill", points: -1, actionCall: this.skillFunctions.tribbieSkill, target: "team", endTurn: true};
                return returnSkillCall;
            }


            const returnBasicCall = this.returnBasicCall ??= {action: "BasicATK", points: 1, actionCall: this.skillFunctions.tribbieBasic, target: "enemy", endTurn: true}
            return returnBasicCall;
        },
        "skillFunctions": {
            tribbieBasic(battleData,target,sourceTurn) {
                const logicRef = turnLogic[sourceTurn.properName];
                const ATKObjects = logicRef.ATKObjects;

                let skillRef = ATKObjects.tribbieBasicREF ??= ATKObjects["Basic ATK"]["Hundred Rockets"].variant1;

                if (!ATKObjects.tribbieBasicATKOBJECT) {
                    let values = battleActions.getLevelBasedParam(battleData,skillRef,sourceTurn);
                    const scalar = "HP";
                    const tags = ["All","Basic","Quantum"];
                    const actionTags = ["Basic","Attack"];
                    const keyShortcut = basicShorthand.makeKeysArray;
                    const realDMGKeys = keyShortcut(dmgKeys,tags);
                    const realPENKeys = keyShortcut(resPENKeys,tags);
                    const realShredKeys = keyShortcut(defShredKeys,tags);
                    const realVulnKeys = keyShortcut(vulnKeys,tags);
                    const compositeCacheTag = tags + actionTags;
                    //realDMGKeys,realPENKeys,realShredKeys,realVulnKeys
                    ATKObjects.tribbieBasicATKOBJECT = {
                        multipliers: {
                            primary: values[0],
                            blast: values[1],
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
                let ATKObject = ATKObjects.tribbieBasicATKOBJECT;

                if (battleData.isLoggyLogger) {logToBattle(battleData,{logType: "BasicATKStart", name:sourceTurn.properName, target, isEnemy: false, isCharacter: true, AV: battleData.sumAV, actionSlot:skillRef.slot});}
                poke("BasicATKStart",battleData,{sourceTurn});
                battleActions.attackWrapper(battleData,skillRef,sourceTurn,ATKObject);
                battleActions.updateEnergy(battleData,skillRef.energyRegen,sourceTurn);
                poke("BasicATKEnd",battleData,{sourceTurn});

                // turnLogic[characterName].skillFunctions.bronyaTalent(battleData,sourceTurn);
            },
            tribbieSkill(battleData,targetTurn,sourceTurn) {
                const logicRef = turnLogic[sourceTurn.properName];
                const ATKObjects = logicRef.ATKObjects;

                let characterName = sourceTurn.properName;
                let skillRef = ATKObjects.tribbieSkillREF ??= ATKObjects.Skill["Where'd the Gifts Go"].variant1;

                // console.log(targetTurn)
                // const targetTurn = battleData.nameBasedTurns.char1;
                if (battleData.isLoggyLogger) {logToBattle(battleData,{logType: "SkillStart", name:characterName, target:targetTurn.name, isEnemy: false, isCharacter: true, AV: battleData.sumAV, actionSlot:skillRef.slot});}
                poke("SkillStart",battleData,{sourceTurn});

                const applyNuminosity = ATKObjects.applyNuminosity ??= turnLogic[sourceTurn.properName].skillFunctions.applyNuminosity;
                applyNuminosity(battleData,sourceTurn);

                battleActions.nonViolentWrapper(battleData,skillRef,characterName);
                battleActions.updateEnergy(battleData,skillRef.energyRegen,sourceTurn);

                poke("SkillEnd",battleData,{sourceTurn});
            },
            applyNuminosity(battleData,sourceTurn) {
                const logicRef = turnLogic[sourceTurn.properName];
                const ATKObjects = logicRef.ATKObjects;

                let characterName = sourceTurn.properName;
                let skillRef = ATKObjects.tribbieSkillREF ??= ATKObjects.Skill["Where'd the Gifts Go"].variant1;
                let values = ATKObjects.tribbieSkillREFPARAM ??= battleActions.getLevelBasedParam(battleData,skillRef,sourceTurn);

                poke("TargetAlly",battleData,{targetType:"Single", sourceTurn, targetTurn:sourceTurn, targetSkill:skillRef.slot,targetChildEntities: false});

                
                if (!ATKObjects.tribbieSkillOWNERSHEET) {
                    const rank = sourceTurn.rank;
                    const logicRef = turnLogic[characterName];
                    const buffRef = logicRef.buffNames;
                    ATKObjects.tribbieSkillOWNERSHEET = {
                        "stats": null,
                        "source": "Skill",
                        "sourceOwner": sourceTurn.properName,
                        "buffName": buffRef.numinosityOwner,
                        "duration": 3,
                        "AVApplied": 0,
                        "maxStacks": 1,
                        "currentStacks": 1,
                        "decay": false,
                        "expireType": "StartTurn",
                        expireFunction: logicRef.skillFunctions.numinosityExpired,
                        expireParam: sourceTurn.name,
                        "removeOnDeath": true,
                    }
                    ATKObjects.tribbieSkillBUFFSHEET = {
                        "stats": [ResistanceAllPEN,DEFShredAll],
                        [ResistanceAllPEN]: values[0],
                        [DEFShredAll]: rank >= 4 ? 0.18 : 0,
                        "source": "Skill",
                        "sourceOwner": sourceTurn.properName,
                        "buffName": buffRef.numinosity,
                        "duration": 1,
                        "AVApplied": 0,
                        "maxStacks": 1,
                        "currentStacks": 1,
                        "decay": false,
                        "expireType": null,
                        "removeOnDeath": true,
                    }
                }

                const ownerSheet = ATKObjects.tribbieSkillOWNERSHEET;
                const buffSheet = ATKObjects.tribbieSkillBUFFSHEET;

                const countdownName = ownerSheet.buffName;
                const buffCheck = sourceTurn.buffsObject[countdownName];
                sourceTurn.numinosityIsActive = true;

                const updateBuff = battleActions.updateBuff;
                updateBuff(battleData,sourceTurn,ownerSheet);

                if (!buffCheck) {
                    //only if numinosity countdown wasn't already on tribbie when the skill started, do we bother with applying the buff to all allies
                    //since the allied buff doesn't expire unless the countdown does
                    const allyPositions = battleData.allyPositions;
                    for (let ally of allyPositions) {
                        updateBuff(battleData,ally,buffSheet);
                    }
                }
            },
            numinosityExpired(battleData,tribbieSlot) {
                const tribbieTurn = battleData.nameBasedTurns[tribbieSlot];
                tribbieTurn.numinosityIsActive = false;

                const logicRef = turnLogic[tribbieTurn.properName];
                const ATKObjects = logicRef.ATKObjects;

                const buffSheet = ATKObjects.tribbieSkillBUFFSHEET;
                const allyPositions = battleData.allyPositions;
                // const updateBuff = battleActions.updateBuff;
                for (let ally of allyPositions) {
                    removeBuff(battleData,ally,buffSheet);
                }
            },
            tribbieTechnique(battleData,target,sourceTurn) {
                const logicRef = turnLogic[sourceTurn.properName];
                const ATKObjects = logicRef.ATKObjects;

                let characterName = sourceTurn.properName;
                let skillRef = ATKObjects.tribbieTechREF ??= ATKObjects.Technique["If You're Happy and You Know It"].variant1;

                if (battleData.isLoggyLogger) {logToBattle(battleData,{logType: "TechniqueStart", name:characterName, target, isEnemy: false, isCharacter: true, AV: battleData.sumAV, actionSlot:skillRef.slot});}
                poke("TechniqueStart",battleData,{sourceTurn});

                const applyNuminosity = ATKObjects.applyNuminosity ??= turnLogic[sourceTurn.properName].skillFunctions.applyNuminosity;
                applyNuminosity(battleData,sourceTurn);

                battleActions.nonViolentWrapper(battleData,skillRef,characterName);
                poke("TechniqueEnd",battleData,{sourceTurn});
            },
            tribbieFUA(battleData,sourceTurn) {
                const logicRef = turnLogic[sourceTurn.properName];
                const ATKObjects = logicRef.ATKObjects;

                let skillRef = ATKObjects.tribbieFUAREF ??= ATKObjects.Talent["Busy as Tribbie"].variant1;

                if (!ATKObjects.tribbieFUAATKOBJECT) {
                    let values = ATKObjects.tribbieFUAREFVALUES ??= battleActions.getLevelBasedParam(battleData,skillRef,sourceTurn);
                    const scalar = "HP";
                    const tags = ["All","FUA","Quantum"];
                    const actionTags = ["FUA","Attack"];
                    const keyShortcut = basicShorthand.makeKeysArray;
                    const realDMGKeys = keyShortcut(dmgKeys,tags);
                    const realPENKeys = keyShortcut(resPENKeys,tags);
                    const realShredKeys = keyShortcut(defShredKeys,tags);
                    const realVulnKeys = keyShortcut(vulnKeys,tags);
                    const compositeCacheTag = tags + actionTags;
                    //realDMGKeys,realPENKeys,realShredKeys,realVulnKeys
                    ATKObjects.tribbieFUAATKOBJECT = {
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
                        isFUA: true,
                        compositeCacheTag,
                    }
                }
                let ATKObject = ATKObjects.tribbieFUAATKOBJECT;

                poke("TalentStart",battleData,{sourceTurn});
                battleActions.attackWrapper(battleData,skillRef,sourceTurn,ATKObject);
                battleActions.updateEnergy(battleData,skillRef.energyRegen,sourceTurn);
                poke("TalentEnd",battleData,{sourceTurn});
            },
            tribbieUltimate(battleData,sourceTurn) {
                const logicRef = turnLogic[sourceTurn.properName];
                const ATKObjects = logicRef.ATKObjects;

                let skillRef = ATKObjects.tribbieUltimateREF ??= ATKObjects.Ultimate["Guess Who Lives Here"].variant1;

                const getEnergy = battleActions.updateEnergy;
                getEnergy(battleData,-sourceTurn.maxEnergy,sourceTurn);

                if (!ATKObjects.tribbieUltimateZoneCountdownSHEET) {
                    const buffNames = logicRef.buffNames;
                    const characterName = sourceTurn.properName;
                    let values = ATKObjects.tribbieUltimateREFVALUES ??= battleActions.getLevelBasedParam(battleData,skillRef,sourceTurn);
                    // "zoneDebuff": "Guess Who Lives Here",
                    // "zoneCountdown": "Guess Who Lives Here (Countdown)",
                    ATKObjects.tribbieUltimateZoneDebuffSHEET = {
                        "stats": [VulnAll],
                        [VulnAll]: values[1],
                        "source": "Ultimate Zone",
                        "sourceOwner": characterName,
                        "buffName": buffNames.zoneDebuff,
                        "duration": 1,
                        "AVApplied": 0,
                        "maxStacks": 1,
                        "currentStacks": 1,
                        "decay": false,
                        "expireType": null,
                        "removeOnDeath": true
                    }
                    ATKObjects.tribbieUltimateZoneCountdownSHEET = {
                        "stats": null,
                        "source": "Ultimate",
                        "sourceOwner": characterName,
                        "buffName": buffNames.zoneCountdown,
                        "duration": 2,
                        "AVApplied": 0,
                        "maxStacks": 1,
                        "currentStacks": 1,
                        "decay": false,
                        "expireType": "StartTurn",
                        expireFunction: logicRef.skillFunctions.ultimateZoneExpired,
                        expireParam: sourceTurn.name,
                        "removeOnDeath": true,
                    }

                    const scalar = "HP";
                    const tags = ["All","Ultimate","Quantum"];
                    const actionTags = ["Ultimate","Attack"];
                    const keyShortcut = basicShorthand.makeKeysArray;
                    const realDMGKeys = keyShortcut(dmgKeys,tags);
                    const realPENKeys = keyShortcut(resPENKeys,tags);
                    const realShredKeys = keyShortcut(defShredKeys,tags);
                    const realVulnKeys = keyShortcut(vulnKeys,tags);
                    const compositeCacheTag = tags + actionTags;
                    //realDMGKeys,realPENKeys,realShredKeys,realVulnKeys
                    ATKObjects.tribbieUltimateATKOBJECT = {
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
                        compositeCacheTag
                    }
                    
                }

                const countdownSheet = ATKObjects.tribbieUltimateZoneCountdownSHEET;
                const buffCheck = sourceTurn.buffsObject[countdownSheet.buffName];
                const updateBuff = battleActions.updateBuff;
                updateBuff(battleData,sourceTurn,countdownSheet);
                sourceTurn.tribbieZoneActive = true;

                if (!buffCheck) {
                    //only if the countdown owner, tribbie, does NOT already have the countdown active, then apply the debuffs to all enemies
                    //this is bc we have an enemyCreated listener that looks for enemies that are added while the field is active
                    //and bc of that, along with the fact that the debuff never expires unless the zone does, we don't need reup the duration
                    const enemyPositions = battleData.enemyPositions;
                    const debuffSheet = ATKObjects.tribbieUltimateZoneDebuffSHEET;
                    for (let enemy of enemyPositions) {
                        updateBuff(battleData,enemy,debuffSheet);
                    }

                    const statCheck = ATKObjects.tribbieHPStatcheck ??= logicRef.skillFunctions.statCheck;
                    statCheck(battleData,sourceTurn);
                }

                const ATKObject = ATKObjects.tribbieUltimateATKOBJECT;
                battleActions.attackWrapper(battleData,skillRef,sourceTurn,ATKObject);

                getEnergy(battleData,skillRef.energyRegen,sourceTurn);
                sourceTurn.ultyQueued = false;
            },
            ultimateZoneExpired(battleData,tribbieSlot) {
                const tribbieTurn = battleData.nameBasedTurns[tribbieSlot];
                tribbieTurn.tribbieZoneActive = false;

                const logicRef = turnLogic[tribbieTurn.properName];
                const ATKObjects = logicRef.ATKObjects;

                const buffSheet = ATKObjects.tribbieUltimateZoneDebuffSHEET;
                const enemyPositions = battleData.enemyPositions;
                // const updateBuff = battleActions.updateBuff;
                for (let enemy of enemyPositions) {
                    removeBuff(battleData,enemy,buffSheet);
                }

                // const buffSheetHP = tribbieTurn.tribbieZoneHPBuffSHEET;
                const statCheck = ATKObjects.tribbieHPStatcheck ??= logicRef.skillFunctions.statCheck
                statCheck(battleData,tribbieTurn);
            },
            statCheck(battleData,currentTurn) {
                const logicRef = turnLogic[currentTurn.properName];
                const ATKObjects = logicRef.ATKObjects;

                if (!ATKObjects.tribbieZoneHPBuffSHEET) {
                    ATKObjects.tribbieZoneHPBuffSHEET = {
                        "stats": [HPFlat,HPFlatNULL],
                        [HPFlat]: 0,
                        [HPFlatNULL]: -0,
                        "source": "Ultimate Zone",
                        "sourceOwner": currentTurn.properName,
                        "buffName": logicRef.buffNames.zoneHPBuff,
                        "duration": 1,
                        "AVApplied": 0,
                        "maxStacks": 1,
                        "currentStacks": 1,
                        "decay": false,
                        "expireType": null,
                        "removeOnDeath": true
                    }
                }
                const buffSheet = ATKObjects.tribbieZoneHPBuffSHEET;

                const updateBuff = battleActions.updateBuff;
                // console.log(currentTurn.tribbieZoneActive)
                if (!currentTurn.tribbieZoneActive) {
                    removeBuff(battleData,currentTurn,buffSheet);
                    return;
                }
                const buffName = buffSheet.buffName;
                const buffsObject = currentTurn.buffsObject;
                const buffCheck = buffsObject[buffName];

                const allyPositions = battleData.allyPositions;
                let HPTally = 0;
                const getHPFinal = calcs.getHPFinal;
                for (let ally of allyPositions) {
                    if (ally.isDead || ally.cantBeTargeted || ally.isMemosprite) {continue;}
                    const allyStatTable = ally.statTable;
                    const finalHP = getHPFinal(allyStatTable).HPFinal;
                    const nullHP = allyStatTable[HPFlatNULL];
                    HPTally += finalHP + nullHP; 

                    // if (ally.properName === "Tribbie") {console.log(finalHP,nullHP)}
                }
                const conversion = HPTally * 0.09;

                
                if (buffCheck) {
                    const buffAmount = buffCheck[HPFlat];
                    // console.log(buffAmount,conversion)
                    if (buffAmount === conversion) {return;}
                    else {
                        removeBuff(battleData,currentTurn,buffCheck,true,null,false,true);
                        //log-wise the removal here will always be silent bc there will always be allies on the field to gain HP from
                    }
                }

                buffSheet[HPFlat] = conversion;
                buffSheet[HPFlatNULL] = -conversion;
                battleActions.updateBuff(battleData,currentTurn,buffSheet,false,null,false,true);
                //TODO: fix the recursion bug here
                //right now the last param needs to be true to avoid poking hp listeners, but that is a prob
                //if there is ever anyone else that does something based on max HP
                //in the end it may literally work this way that I've done it, in game, but we'll have to see
                //I STILL don't understand why it's recursive here given the checks I have in place to abort early
            },
            zoneAddedDMG(battleData,generalInfo,sourceTurn,targetsGotHit) {
                // battleData,generalInfo,sourceTurn,targetsGotHit
                const rank = sourceTurn.rank;
                const e2 = rank>=2;

                const logicRef = turnLogic[sourceTurn.properName];
                const ATKObjects = logicRef.ATKObjects;

                if (!ATKObjects.zoneAddedDMG) {
                    let values = ATKObjects.tribbieUltimateREFVALUES;
                    const scalar = "HP";
                    const tags = ["All","Quantum"];
                    const actionTags = ["Additional"];
                    const keyShortcut = basicShorthand.makeKeysArray;
                    const realDMGKeys = keyShortcut(dmgKeys,tags);
                    const realPENKeys = keyShortcut(resPENKeys,tags);
                    const realShredKeys = keyShortcut(defShredKeys,tags);
                    const realVulnKeys = keyShortcut(vulnKeys,tags);
                    const compositeCacheTag = tags + actionTags;
                    //realDMGKeys,realPENKeys,realShredKeys,realVulnKeys
                    ATKObjects.zoneAddedDMG = {
                        multipliers: {
                            primary: null,
                            blast: null,
                            all: null,
                            additional: values[2] * (e2 ? 1.2 : 1)
                        },
                        scalar,
                        element: "Quantum",//override for additional dmg, not used otherwise
                        DMGTags: tags,
                        allToughness: false,
                        slot: null,
                        realDMGKeys,realPENKeys,realShredKeys,realVulnKeys,
                        actionTags,
                        compositeCacheTag
                    }
                }
                let ATKObject = ATKObjects.zoneAddedDMG;

                let highestHPEnemy = null;
                const enemyTurns = battleData.enemyBasedTurns;
                let hitsToDo = 0 + (e2 ? 1 : 0);
                for (let enemyHit in targetsGotHit) {
                    hitsToDo++;
                    const currentEnemy = enemyTurns[enemyHit];
                    if (currentEnemy.isDead) {continue;}
                    const currentHP = currentEnemy.currentHP;
                    if (!highestHPEnemy) {
                        highestHPEnemy = currentEnemy;
                        continue;
                    }
                    else {
                        const highestCurrent = highestHPEnemy.currentHP;
                        //evaluate to the highest current hp enemy in the targets hit
                        if (currentHP > highestCurrent) {
                            highestHPEnemy = currentEnemy;
                        }
                        //otherwise if we have a tie, then check max hp instead
                        else if (currentHP === highestCurrent) {
                            if (currentEnemy.maxHP > highestHPEnemy.maxHP) {highestHPEnemy = currentEnemy;}
                        }
                    }
                }

                if (highestHPEnemy) {
                    const addedWrapper = battleActions.additionalDMGWrapper;
                    const characterName = sourceTurn.properName;
                    // const tallyRef = battleData.addedDMGTallyAttack;
                    for (let i=0;i<hitsToDo;i++) {3
                        if (highestHPEnemy.isDead) {break;}
                        addedWrapper(battleData,sourceTurn,characterName,ATKObject,highestHPEnemy,"Tribbie Zone");
                        // tallyRef.push({
                        //     ...addedHit.hit
                        // })
                    }

                    const e1 = rank >= 1;
                    if (e1) {sourceTurn.battleValues.highestHPTarget = highestHPEnemy;}
                }
                else {sourceTurn.battleValues.highestHPTarget = null;}
            },
        },
        "listeners": [
            {
                "trigger": "UpdateStatHP",//HP stat family
                condition(battleData,generalInfo) {
                    let ownerTurn = this.ownerTurn;
                    let sourceTurn = generalInfo.sourceTurn;
                    if (sourceTurn.isEnemy || sourceTurn.isMemosprite || !ownerTurn.tribbieZoneActive) {return;}
                    const statCheck = this.statCheck ??= turnLogic[ownerTurn.properName].skillFunctions.statCheck
                    statCheck(battleData,ownerTurn);
                },
                "target": "self",
                "listenerName": "Glass Ball with Wings! HP check",
                "ownerTurn": {},
            },
            {
                "trigger": "EnemyCreated",
                condition(battleData,generalInfo) {
                    let ownerTurn = this.ownerTurn;
                    let targetTurn = generalInfo.slotRef;

                    if (!ownerTurn.tribbieZoneActive) {return;}

                    const logicRef = turnLogic[ownerTurn.properName];
                    const ATKObjects = logicRef.ATKObjects;

                    let buffSheet = ATKObjects.tribbieUltimateZoneDebuffSHEET;
                    battleActions.updateBuff(battleData,targetTurn,buffSheet);
                },
                "target": "enemy",
                "listenerName": "Enemy created while zone active debuff application",
                "announce": false,
                "ownerTurn": {},
            },
            {
                "trigger": "UltimateEnd",
                condition(battleData,generalInfo) {
                    let ownerTurn = this.ownerTurn;
                    let sourceTurn = generalInfo.sourceTurn;
                    const rank = ownerTurn.rank;
                    if ((sourceTurn.properName === ownerTurn.properName && rank < 6) || sourceTurn.usedTribbieFUA) {return;}

                    
                    sourceTurn.usedTribbieFUA = true;

                    const queueObject = this.queueObject ??= {
                        attack: turnLogic[ownerTurn.properName].skillFunctions.tribbieFUA,
                        target: this.target,
                        name: this.listenerName,
                        properName: ownerTurn.properName,
                        sourceTurn: ownerTurn
                    }
                    queueObject.sourceTurn = ownerTurn;

                    battleActions.queueFollowUpAttack(battleData,queueObject);
                },
                "target": "enemy",
                "listenerName": "Tribbie - Follow-up queued - Talent",
                "ownerTurn": {},
            },
            {
                "trigger": "FUAEnd",
                condition(battleData,generalInfo) {
                    let ownerTurn = this.ownerTurn;
                    let sourceTurn = generalInfo.sourceTurn;
                    if (sourceTurn.properName != ownerTurn.properName) {return;}

                    if (!this.tribbieFUABuffStackSHEET) {
                        const characterName = sourceTurn.properName;
                        const logicRef = turnLogic[characterName];
                        const buffRef = logicRef.buffNames;
                        this.tribbieFUABuffStackSHEET = {
                            "stats": [DamageAll],
                            [DamageAll]: 0.72,
                            "source": "Trace",
                            "sourceOwner": characterName,
                            "buffName": buffRef.fuaLamb,
                            "duration": 3,
                            "AVApplied": 0,
                            "maxStacks": 3,
                            "currentStacks": 1,
                            "decay": false,
                            "expireType": "EndTurn",
                            "removeOnDeath": true,
                        }
                    }
                    const buffSheet = this.tribbieFUABuffStackSHEET;
                    buffSheet.duration = ownerTurn.turnState ? 4 : 3;
                    
                    battleActions.updateBuff(battleData,ownerTurn,buffSheet);
                },
                "target": "self",
                "listenerName": "Lamb Outside the Wall... - FUA listener",
                "ownerTurn": {},
            },
            {
                "trigger": "PreBattleEntersCombat",
                condition(battleData,generalInfo) {
                    let ownerTurn = this.ownerTurn;
                    battleActions.updateEnergy(battleData,30,ownerTurn,false,"Pebble at Crossroads?");
                },
                "target": "self",
                "listenerName": "Pebble at Crossroads?: energy regen on battleStart",
                "ownerTurn": {},
            },
            {
                "trigger": "AttackDMGEnd",
                condition(battleData,generalInfo) {
                    const sourceTurn = generalInfo.sourceTurn;
                    let ownerTurn = this.ownerTurn;
                    if (sourceTurn.isEnemy || sourceTurn.properName === ownerTurn.properName) {return;}
                    //the trace specifies OTHER ally targets

                    const targetsGotHit = generalInfo.targetsGotHit;
                    enemyCounter = 0;
                    for (let targetHit in targetsGotHit) {
                        enemyCounter += 1;
                    }
                    const energyToRegen = enemyCounter * 1.5;

                    battleActions.updateEnergy(battleData,energyToRegen,ownerTurn,false,"Pebble at Crossroads?");
                },
                "target": "self",
                "listenerName": "Pebble at Crossroads?: ally attack listener",
                "ownerTurn": {},
            },
            {
                "trigger": "AllyCreated",
                condition(battleData,generalInfo) {
                    let ownerTurn = this.ownerTurn;

                    if (!ownerTurn.numinosityIsActive) {return;}

                    const logicRef = turnLogic[ownerTurn.properName];
                    const ATKObjects = logicRef.ATKObjects;

                    const buffSheet = ATKObjects.tribbieSkillBUFFSHEET;
                    const targetTurn = generalInfo.targetTurn;
                    battleActions.updateBuff(battleData,targetTurn,buffSheet);
                },
                "target": "team",
                "listenerName": "Numinosity (skill) ally created listener",
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
                            attack: turnLogic[ownerTurn.properName].skillFunctions.tribbieUltimate,
                            target: this.target,
                            name: this.listenerName,
                            properName: ownerTurn.properName,
                            sourceTurn: null,
                        }
                        queueObject.sourceTurn = ownerTurn;
                        battleActions.queueUltimateUse(battleData,queueObject);
                    }
                },
                "target": "enemy",
                "listenerName": "Tribbie - Ultimate queued",
                "ownerTurn": {},
            },
            {
                "trigger": "AdditionalTriggerAttackEnd",
                condition(battleData,generalInfo) {
                    let ownerTurn = this.ownerTurn;
                    let sourceTurn = generalInfo.sourceTurn;
                    if (sourceTurn.isEnemy || !ownerTurn.tribbieZoneActive) {return;}

                    const targetsGotHit = generalInfo.targetsGotHit;
                    const zoneAddedDMG = this.zoneAddedDMG ??= turnLogic[ownerTurn.properName].skillFunctions.zoneAddedDMG
                    zoneAddedDMG(battleData,generalInfo,ownerTurn,targetsGotHit);
                },
                "target": "enemy",
                "listenerName": "Tribbie ult zone attack listener for additional dmg",
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
                        const tribbieTechnique = this.tribbieTechnique ??= logicRef.skillFunctions.tribbieTechnique;
                        tribbieTechnique(battleData,"self",ownerTurn)
                    }
                },
                "target": "self",
                "listenerName": "Tribbie Technique",
                "ownerTurn": {},
            },
        ],
        "eidolonListeners": {
            1: [
                {
                    "trigger": "TrueTriggerAttackEnd",
                    condition(battleData,generalInfo) {
                        // poke("TrueTriggerAttackEnd",battleData,generalInfo);
                        let ownerTurn = this.ownerTurn;
                        let sourceTurn = generalInfo.sourceTurn;
                        if (sourceTurn.isEnemy || !ownerTurn.tribbieZoneActive) {return;}


                        // console.log(sourceTurn.battleValues.highestHPTarget)

                        const highestHPEnemy = ownerTurn.battleValues.highestHPTarget;
                        // console.log(battleData.sumAV,highestHPEnemy)
                        
                        if (!highestHPEnemy) {return;}
                        // sourceTurn.battleValues.highestHPTarget = highestHPEnemy;
                        let trueBase = battleData.addedDMGTallyAttack;
                        let trueCrit = null;
                        let trueAVG = null;
                        const trueDMGMulti = 0.24;

                        // battleData.attackIsActive = true;
                        // battleData.addedDMGTallyAttack = 0;

                        battleActions.trueDMGHitWrapper(battleData,ownerTurn,highestHPEnemy,trueDMGMulti,trueBase,trueCrit,trueAVG,"E1 Tribbie");
                    },
                    "target": "self",
                    "listenerName": "Pebble at Crossroads?: ally attack listener",
                    "ownerTurn": {},
                },
            ],
            2: [],
            3: [],
            4: [],
            5: [],
            6: [
                {
                    "trigger": "PreBattleEntersCombat",
                    condition(battleData,generalInfo) {
                        let ownerTurn = this.ownerTurn;

                        const buffSheet = this.buffSheet ??= {
                            "stats": [DamageFUA],
                            [DamageFUA]: 7.29,
                            "source": "E6",
                            "sourceOwner": ownerTurn.properName,
                            "buffName": turnLogic[ownerTurn.properName].buffNames.e6FUADMG,
                            "duration": 1,
                            "AVApplied": 0,
                            "maxStacks": 1,
                            "currentStacks": 1,
                            "decay": false,
                            "expireType": null
                        }
                        battleActions.updateBuff(battleData,ownerTurn,buffSheet);
                    },
                    "target": "self",
                    "listenerName": "Morrow of Star Shine - E6 FUA DMG application",
                    "ownerTurn": {},
                    "buffNames": {}
                },
            ],
        },
        "ATKObjects": {},
        "listenersToInjectLater": {},
        "characterValues": {
            "highestHPTarget": null,
        },
        "useTechnique": true,
        "techniqueType": "Enhance",
        "buffNames": {
            "numinosity": "Numinosity",
            "numinosityOwner": "Numinosity (Countdown)",
            "fuaLamb": "Lamb Outside the Wall...",
            "zoneDebuff": "Guess Who Lives Here",
            "zoneCountdown": "Guess Who Lives Here (Countdown)",
            "zoneHPBuff": "Glass Ball with Wings!",
            "e6FUADMG": "Morrow of Star Shine",
        },
        "characterValuesBattle": {},
    },
    "Robin": {//ATKOBJECTS DONE
        logic(thisTurn,battleData) {
            // const shortRef = this;
            // let characterName = thisTurn.properName
            let currentSP = battleData.skillPointCurrent;
            // let actionUsed = false;
            // let statCalls = thisTurn.battleValues;
            // let shortCalls = shortRef.skillFunctions;
            // let skillPathing = characters[characterName].skills;

            // let ultySoon = battleActions.energyLookAhead(thisTurn,35);
            let minimum = currentSP >= 1;


            // checkSkill(battleData,thisTurn)
            if (minimum && checkSkill(battleData,thisTurn)) {
                const returnSkillCall = this.returnSkillCall ??= {action: "Skill", points: -1, actionCall: this.skillFunctions.robinSkill, target: "self", endTurn: true};
                return returnSkillCall;
            }

            const returnBasicCall = this.returnBasicCall ??= {action: "BasicATK", points: 1, actionCall: this.skillFunctions.robinBasic, target: "enemy", endTurn: true}
            return returnBasicCall;
        },
        "skillFunctions": {
            robinBasic(battleData,target,sourceTurn) {
                let characterName = sourceTurn.properName;
                const logicRef = turnLogic[characterName];
                const ATKObjects = logicRef.ATKObjects;
                
                let skillRef = ATKObjects.robinBasicREF ??= ATKObjects["Basic ATK"]["Wingflip White Noise"].variant1;

                if (!ATKObjects.robinBasicATKOBJECT) {
                    let values = battleActions.getLevelBasedParam(battleData,skillRef,sourceTurn);
                    const scalar = "ATK";
                    const tags = ["All","Basic","Physical"];
                    const actionTags = ["Basic","Attack"];
                    const keyShortcut = basicShorthand.makeKeysArray;
                    const realDMGKeys = keyShortcut(dmgKeys,tags);
                    const realPENKeys = keyShortcut(resPENKeys,tags);
                    const realShredKeys = keyShortcut(defShredKeys,tags);
                    const realVulnKeys = keyShortcut(vulnKeys,tags);
                    const compositeCacheTag = tags + actionTags;
                    //realDMGKeys,realPENKeys,realShredKeys,realVulnKeys
                    ATKObjects.robinBasicATKOBJECT = {
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
                let ATKObject = ATKObjects.robinBasicATKOBJECT;

                if (battleData.isLoggyLogger) {logToBattle(battleData,{logType: "BasicATKStart", name:characterName, target, isEnemy: false, isCharacter: true, AV: battleData.sumAV, actionSlot:skillRef.slot});}
                poke("BasicATKStart",battleData,{sourceTurn});
                battleActions.attackWrapper(battleData,skillRef,sourceTurn,ATKObject);
                battleActions.updateEnergy(battleData,skillRef.energyRegen,sourceTurn);
                poke("BasicATKEnd",battleData,{sourceTurn});

                // turnLogic[characterName].skillFunctions.bronyaTalent(battleData,sourceTurn);
            },
            robinSkill(battleData,targetTurn,sourceTurn) {
                const characterName = sourceTurn.properName;
                const logicRef = turnLogic[characterName];
                const ATKObjects = logicRef.ATKObjects;
                // const logicRef = turnLogic[robinTurn.properName];
                // const ATKObjects = logicRef.ATKObjects;
                let skillRef = ATKObjects.robinSkillREF ??= ATKObjects.Skill["Pinion's Aria"].variant1;
                let values = ATKObjects.robinSkillREFPARAM ??= battleActions.getLevelBasedParam(battleData,skillRef,sourceTurn);

                // console.log(targetTurn)
                // const targetTurn = battleData.nameBasedTurns.char1;
                if (battleData.isLoggyLogger) {logToBattle(battleData,{logType: "SkillStart", name:characterName, target:targetTurn.name, isEnemy: false, isCharacter: true, AV: battleData.sumAV, actionSlot:skillRef.slot});}
                poke("SkillStart",battleData,{sourceTurn});

                poke("TargetAlly",battleData,{targetType:"Single", sourceTurn, targetTurn:sourceTurn, targetSkill:skillRef.slot,targetChildEntities: false});
                //a weird one, but this does only target herself

                
                if (!ATKObjects.robinSkillOWNERSHEET) {
                    const rank = sourceTurn.rank;
                    const logicRef = turnLogic[characterName];
                    const buffRef = logicRef.buffNames;
                    // greatTableIndex
                    // greatTableKeys
                    ATKObjects.robinSkillOWNERSHEET = {
                        "stats": null,
                        "source": "Skill",
                        "sourceOwner": characterName,
                        "buffName": buffRef.robinSkillOwner,
                        "duration": 3,
                        "AVApplied": 0,
                        "maxStacks": 1,
                        "currentStacks": 1,
                        "decay": false,
                        "expireType": "StartTurn",
                        expireFunction: logicRef.skillFunctions.robinSkillExpired,
                        expireParam: sourceTurn.name,
                        "removeOnDeath": true,
                    }
                    ATKObjects.robinSkillBUFFSHEET = {
                        "stats": [DamageAll],
                        [DamageAll]: values[0],
                        "source": "Skill",
                        "sourceOwner": characterName,
                        "buffName": buffRef.robinSkill,
                        "duration": 1,
                        "AVApplied": 0,
                        "maxStacks": 1,
                        "currentStacks": 1,
                        "decay": false,
                        "expireType": null,
                    }
                }

                const ownerSheet = ATKObjects.robinSkillOWNERSHEET;
                const buffSheet = ATKObjects.robinSkillBUFFSHEET;

                const countdownName = ownerSheet.buffName;
                const buffCheck = sourceTurn.buffsObject[countdownName];
                sourceTurn.battleValues.ariaIsActive = true;

                const updateBuff = battleActions.updateBuff;
                updateBuff(battleData,sourceTurn,ownerSheet);

                if (!buffCheck) {
                    //only if numinosity countdown wasn't already on tribbie when the skill started, do we bother with applying the buff to all allies
                    //since the allied buff doesn't expire unless the countdown does

                    // const allyTurns = battleData.nameBasedTurns;
                    // for (let ally in allyTurns) {
                    //     const allyTurn = allyTurns[ally];
                    //     updateBuff(battleData,allyTurn,buffSheet);
                    // }

                    const allyArray = battleData.allAlliesArray;
                    updateBuffBatchTargets(battleData,allyArray,buffSheet);
                }

                battleActions.nonViolentWrapper(battleData,skillRef,characterName);
                const updateEnergy = battleActions.updateEnergy;
                updateEnergy(battleData,skillRef.energyRegen,sourceTurn);
                updateEnergy(battleData,5,sourceTurn,false,"Sequential Passage");//trace regen on skill use

                poke("SkillEnd",battleData,{sourceTurn});
            },
            robinSkillExpired(battleData,robinSlot) {
                const robinTurn = battleData.nameBasedTurns[robinSlot];
                robinTurn.battleValues.ariaIsActive = false;

                const logicRef = turnLogic[robinTurn.properName];
                const ATKObjects = logicRef.ATKObjects;

                const buffSheet = ATKObjects.robinSkillBUFFSHEET;
                // const updateBuff = battleActions.updateBuff;

                // const allyTurns = battleData.nameBasedTurns;
                // for (let ally in allyTurns) {
                //     const allyTurn = allyTurns[ally];
                //     removeBuff(battleData,allyTurn,buffSheet);
                // }

                let allyArray = battleData.allAlliesArray;
                removeBuffFromBatch(battleData,allyArray,buffSheet);
            },
            robinUltimate(battleData,sourceTurn) {
                let characterName = sourceTurn.properName;
                const logicRef = turnLogic[characterName];
                const ATKObjects = logicRef.ATKObjects;
                // const logicRef = turnLogic[sourceTurn.properName];
                // const ATKObjects = logicRef.ATKObjects;
                let skillRef = ATKObjects.robinUltimateREF ??= ATKObjects.Ultimate["Vox Harmonique, Opus Cosmique"].variant1;
                let values = ATKObjects.robinUltimateREFVALUES ??= battleActions.getLevelBasedParam(battleData,skillRef,sourceTurn);

                poke("TargetAlly",battleData,{targetType:"Single", sourceTurn, targetTurn:sourceTurn, targetSkill:skillRef.slot,targetChildEntities: false});

                const getEnergy = battleActions.updateEnergy;
                getEnergy(battleData,-sourceTurn.maxEnergy,sourceTurn);
                const rank = sourceTurn.rank;
                sourceTurn.battleValues.robinConcertoActive = true;

                if (rank >= 6) {sourceTurn.robinE6TriggerCount = 0;}

                if (!ATKObjects.robinConcertoCountdownSHEET) {
                    const buffNames = logicRef.buffNames;
                    
                    
                    //TODO: E4 does a cleanse on the team, add that later when enemies start applying debuffs
                    // greatTableIndex
                    // greatTableKeys
                    ATKObjects.robinConcertoCountdownBuffSHEET = {
                        "stats": [ATKFlat,ATKFlatNULL,ResistanceAllPEN,SPDP,EffectRES],
                        [ATKFlat]: 0,
                        [ATKFlatNULL]: -0,
                        [ResistanceAllPEN]: rank >= 1 ? 0.24 : 0,
                        [SPDP]: rank >= 2 ? 0.16 : 0,
                        [EffectRES]: rank >= 4 ? 0.50 : 0,
                        "source": "Ultimate",
                        "sourceOwner": characterName,
                        "buffName": buffNames.ultBuff,
                        "duration": 1,
                        "AVApplied": 0,
                        "maxStacks": 1,
                        "currentStacks": 1,
                        "decay": false,
                        "expireType": null,
                    }
                    ATKObjects.robinConcertoCountdownBuffFUASHEET = {
                        "stats": [CritDamageBase],
                        [CritDamageBase]: 0.25,
                        "source": "Ultimate",
                        "sourceOwner": characterName,
                        "buffName": buffNames.ultBuffFUA,
                        "duration": 1,
                        "AVApplied": 0,
                        "maxStacks": 1,
                        "currentStacks": 1,
                        "decay": false,
                        "expireType": null,
                        "actionTags": ["FUA"],
                    }
                }
                
                // const countdownSheet = sourceTurn.robinConcertoCountdownSHEET;
                // countdownSheet.AVApplied = battleData.sumAV;
                // const updateBuff = battleActions.updateBuff;
                // updateBuff(battleData,sourceTurn,countdownSheet);

                const conversionRatio = values[0];
                const flatBonus = values[2];
                const robinStats = sourceTurn.statTable;
                const atkFinal = calcs.getATKFinal(robinStats).ATKFinal + robinStats[ATKFlatNULL];
                const conversion = (conversionRatio * atkFinal) + flatBonus;
            
                const buffSheet = ATKObjects.robinConcertoCountdownBuffSHEET;
                const buffSheetFUA = ATKObjects.robinConcertoCountdownBuffFUASHEET;
                buffSheet[ATKFlat] = conversion;
                buffSheet[ATKFlatNULL] = -conversion;


                const allyArray = battleData.allAlliesArray;
                updateBuffBatchTargets(battleData,allyArray,buffSheet);
                updateBuffBatchTargets(battleData,allyArray,buffSheetFUA);
                // const allyTurns = battleData.nameBasedTurns;
                // for (let ally in allyTurns) {
                //     const currentAlly = allyTurns[ally];
                //     updateBuff(battleData,currentAlly,buffSheet);
                //     updateBuff(battleData,currentAlly,buffSheetFUA);
                // }

                
                const nextAV = battleData.nextTurnAV;
                sourceTurn.notPresentInActionOrder = true;
                const robinIndex = nextAV.indexOf(sourceTurn);
                nextAV.splice(robinIndex, 1);
                //TODO: I have no clue how performant indexOf is, so possibly revert this later but we'll see
                // for (let i=0;i<nextAV.length;i++) {
                //     let currentTurn = nextAV[i];
                //     if (currentTurn.properName === eventName) {
                //         nextAV.splice(i, 1);
                //         break;//we found the event to remove, so we need to obv remove it now
                //     }
                // }


                battleActions.nonViolentWrapper(battleData,skillRef,characterName);
                getEnergy(battleData,skillRef.energyRegen,sourceTurn);

                const ActionEntry = sourceTurn.robinUltimateCONCERTOTURNEVENT ??= {
                    // name:characterEntry,
                    AV:10000/90,
                    AVBase:10000/90,
                    SPD:90,
                    actionCounter: 0,
                    turnState: 0,
                    properName: "Robin Concerto Timer",
                    // buffsObject: {},
                    // buffsStartTurn: [],
                    // buffsEndTurn: [],
                    // additionalDMGObject: {},
                    cantBeTargeted: true,
                    isUniqueEvent: true,
                    eventOwner: sourceTurn.name,//pass through the slot of the character who owns the event, avoids cyclic issues when logging
                    uniqueEventFunction: logicRef.skillFunctions.concertoExpired,
                    eventImage: "icon/skill/1309_ultimate1.png",
                };
                nextAV.push(ActionEntry);
                if (battleData.isLoggyLogger) {logToBattle(battleData,{logType: "GenericAction", source:"Robin Ultimate", bodyText: `Robin was removed from the turn order`});}

                const nextAVDupe = [...nextAV].sort((a, b) => {
                    if (a.AV !== b.AV) {return a.AV - b.AV;}//will sort by AV first
                    return b.actionCounter - a.actionCounter;//but on tiebreakers, sorts by order instead
                });


                const actionAdvance = battleActions.actionAdvance;
                for (let i=nextAVDupe.length-1;i>=0;i--) {
                    const currentTurn = nextAVDupe[i];
                    if (currentTurn.isEnemy || currentTurn.isUniqueEvent && !currentTurn.isSummon) {continue;}
                    actionAdvance(1,currentTurn,battleData,"Robin's Ultimate");
                }
                

                sourceTurn.ultyQueued = false;
            },
            concertoExpired(battleData,eventTurn) {
                const allyTurns = battleData.nameBasedTurns;
                const robinTurn = allyTurns[eventTurn.eventOwner];
                const logicRef = turnLogic[robinTurn.properName];
                const ATKObjects = logicRef.ATKObjects;
                
                robinTurn.battleValues.robinConcertoActive = false;
                robinTurn.notPresentInActionOrder = false;


                const buffSheet = ATKObjects.robinConcertoCountdownBuffSHEET;
                const buffSheetFUA = ATKObjects.robinConcertoCountdownBuffFUASHEET;
                // const updateBuff = battleActions.updateBuff;

                // removeBuffFromBatch
                let allyArray = battleData.allAlliesArray;
                removeBuffFromBatch(battleData,allyArray,buffSheet);
                removeBuffFromBatch(battleData,allyArray,buffSheetFUA);
                // }
                
                // for (let ally in allyTurns) {
                //     const currentAlly = allyTurns[ally];
                //     removeBuff(battleData,currentAlly,buffSheet);
                //     removeBuff(battleData,currentAlly,buffSheetFUA);
                // }

                const eventName = eventTurn.properName;
                const nextAV = battleData.nextTurnAV;
                for (let i=0;i<nextAV.length;i++) {
                    let currentTurn = nextAV[i];
                    if (currentTurn.properName === eventName) {
                        nextAV.splice(i, 1);
                        break;//we found the event to remove, so we need to obv remove it now
                    }
                }

                nextAV.push(robinTurn);
                battleActions.actionAdvance(1,robinTurn,battleData,"Robin exited Concerto state");
            },
            ultAddedDMG(battleData,generalInfo,sourceTurn,targetsGotHit) {
                // battleData,generalInfo,sourceTurn,targetsGotHit
                const rank = sourceTurn.rank;
                const characterName = sourceTurn.properName;
                const logicRef = turnLogic[characterName];
                const ATKObjects = logicRef.ATKObjects;
    
                let skillRef = ATKObjects.robinUltimateREF ??= ATKObjects.Ultimate["Vox Harmonique, Opus Cosmique"].variant1;
                let values = ATKObjects.robinUltimateREFVALUES ??= battleActions.getLevelBasedParam(battleData,skillRef,sourceTurn);
                if (!ATKObjects.ultAddedDMG) {
                    const scalar = "ATK";
                    const tags = ["All","Physical"];
                    const actionTags = ["Additional"];
                    const keyShortcut = basicShorthand.makeKeysArray;
                    const realDMGKeys = keyShortcut(dmgKeys,tags);
                    const realPENKeys = keyShortcut(resPENKeys,tags);
                    const realShredKeys = keyShortcut(defShredKeys,tags);
                    const realVulnKeys = keyShortcut(vulnKeys,tags);
                    const compositeCacheTag = tags + actionTags;
                    //realDMGKeys,realPENKeys,realShredKeys,realVulnKeys
                    ATKObjects.ultAddedDMG = {
                        multipliers: {
                            primary: null,
                            blast: null,
                            all: null,
                            additional: values[3]
                        },
                        scalar,
                        element: "Physical",//override for additional dmg, not used otherwise
                        DMGTags: tags,
                        allToughness: false,
                        slot: skillRef.slot,
                        realDMGKeys,realPENKeys,realShredKeys,realVulnKeys,
                        actionTags,
                        fixedCritRate: 1,
                        fixedCritDMG: 1.5,
                        compositeCacheTag
                    }
                }
                let ATKObject = ATKObjects.ultAddedDMG;
                // (rank>=6 ? 4.5 : 0)

                if (rank >= 6) {
                    let useAddedCrit = false;
                    if (sourceTurn.robinE6TriggerCount < 8) {
                        sourceTurn.robinE6TriggerCount += 1;
                        useAddedCrit = true;
                    }
                    ATKObject.fixedCritDMG = 1.5 + (useAddedCrit ? 4.5 : 0)
                }
                // sourceTurn.robinE6TriggerCount

                const enemyTurns = battleData.enemyBasedTurns;
                const addedWrapper = battleActions.additionalDMGWrapper;
                

                const primaryTarget = battleData.primaryTarget;
                let targetFound = null;
                for (let enemyHit in targetsGotHit) {
                    const currentEnemy = enemyTurns[enemyHit];
                    if (!currentEnemy.isDead) {
                        if (currentEnemy.properName === primaryTarget.properName) {
                            targetFound = currentEnemy;
                            break;
                        }
                        else if (!targetFound) {targetFound = currentEnemy;}
                    }
                }

                if (targetFound) {
                    addedWrapper(battleData,sourceTurn,characterName,ATKObject,targetFound,"Robin Ult");
                }
            },
            robinTechnique(battleData,target,sourceTurn) {
                let characterName = sourceTurn.properName;

                const logicRef = turnLogic[characterName];
                const ATKObjects = logicRef.ATKObjects;
                let skillRef = ATKObjects.robinTechREF ??= ATKObjects.Technique["Overture of Inebriation"].variant1;

                if (battleData.isLoggyLogger) {logToBattle(battleData,{logType: "TechniqueStart", name:characterName, target, isEnemy: false, isCharacter: true, AV: battleData.sumAV, actionSlot:skillRef.slot});}
                poke("TechniqueStart",battleData,{sourceTurn});

                let attackEndings = battleData.battleListeners.WaveStart ??= [];
                const listenerToInject = logicRef.listenersToInjectLater.techniqueWaveStart;
                listenerToInject.ownerTurn = sourceTurn;

                attackEndings.unshift(listenerToInject);
                battleActions.nonViolentWrapper(battleData,skillRef,characterName);
                poke("TechniqueEnd",battleData,{sourceTurn});
            },
        },
        "listeners": [
            {
                "trigger": "PreBattleEntersCombat",
                condition(battleData,generalInfo) {
                    let ownerTurn = this.ownerTurn;
                    battleActions.actionAdvance(0.25,ownerTurn,battleData,"Coloratura Cadenza");
                },
                "target": "self",
                "listenerName": "Coloratura Cadenza: battlestart advance",
                "ownerTurn": {},
            },
            {
                "trigger": "PreBattleEntersCombat",
                condition(battleData,generalInfo) {
                    let ownerTurn = this.ownerTurn;
                    // battleActions.actionAdvance(0.25,ownerTurn,battleData,"Coloratura Cadenza");

                    if (!this.skillRef) {
                        const characterName = ownerTurn.properName;
                        const logicRef = turnLogic[characterName];
                        let skillRef = this.skillRef ??= logicRef.ATKObjects["Talent"]["Tonal Resonance"].variant1;
                        let values = this.values ??= battleActions.getLevelBasedParam(battleData,skillRef,ownerTurn);

                        // greatTableIndex
                        // greatTableKeys
                        this.buffSheet = {
                            "stats": [CritDamageBase],
                            [CritDamageBase]: values[0],
                            "source": "Talent",
                            "sourceOwner": characterName,
                            "buffName": logicRef.buffNames.talentCritDMG,
                            "duration": 1,
                            "AVApplied": 0,
                            "maxStacks": 1,
                            "currentStacks": 1,
                            "decay": false,
                            "expireType": null,
                        }
                    }

                    const allyTurns = battleData.nameBasedTurns;
                    const updateBuff = battleActions.updateBuff;
                    for (let ally in allyTurns) {
                        const currentAlly = allyTurns[ally];
                        updateBuff(battleData,currentAlly,this.buffSheet);
                    }
                },
                "target": "self",
                "listenerName": "Talent: ally crit dmg application",
                "ownerTurn": {},
            },
            {
                "trigger": "AttackDMGEnd",
                condition(battleData,generalInfo) {
                    const sourceTurn = generalInfo.sourceTurn;
                    if (sourceTurn.isEnemy) {return;}
                    let ownerTurn = this.ownerTurn;
                    const energyToRegen = ownerTurn.rank >= 2 ? 3 : 2;
                    battleActions.updateEnergy(battleData,energyToRegen,ownerTurn,false,"Tonal Resonance?");
                },
                "target": "self",
                "listenerName": "Talent: ally attack listener",
                "ownerTurn": {},
            },
            {
                "trigger": "UltimateReady",
                condition(battleData,generalInfo) {
                    let ownerTurn = this.ownerTurn;
                    if (ownerTurn.ultyQueued) {return;}

                    let energyCheck = ownerTurn.currentEnergy === ownerTurn.maxEnergy;
                    const notMyTurn = !ownerTurn.turnState;
                    const notInUlt = !ownerTurn.battleValues.robinConcertoActive;
                    let otherObscureCondition = energyCheck && notMyTurn && notInUlt && checkUlty(battleData,ownerTurn);

                    if (otherObscureCondition) {
                        ownerTurn.ultyQueued = true;

                        const queueObject = this.queueObject ??= {
                            attack: turnLogic[ownerTurn.properName].skillFunctions.robinUltimate,
                            target: this.target,
                            name: this.listenerName,
                            properName: ownerTurn.properName,
                            sourceTurn: ownerTurn
                        }
                        queueObject.sourceTurn = ownerTurn;
                        battleActions.queueUltimateUse(battleData,queueObject);
                    }
                },
                "target": "self",
                "listenerName": "Robin - Ultimate queued",
                "ownerTurn": {},
            },
            {
                "trigger": "AdditionalTriggerAttackEnd",
                condition(battleData,generalInfo) {
                    let ownerTurn = this.ownerTurn;
                    let sourceTurn = generalInfo.sourceTurn;
                    if (sourceTurn.isEnemy || !ownerTurn.battleValues.robinConcertoActive) {return;}

                    // let characterName = ownerTurn.properName;
                    // let logicRef = turnLogic[characterName];

                    const targetsGotHit = generalInfo.targetsGotHit;
                    const ultAddedDMG = this.ultAddedDMG ??= turnLogic[ownerTurn.properName].skillFunctions.ultAddedDMG;
                    ultAddedDMG(battleData,generalInfo,ownerTurn,targetsGotHit);
                },
                "target": "enemy",
                "listenerName": "Robin ult - ally attack listener for additional dmg",
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
                    let dimensionUsed = battleData.dimensionTechniqueUsed;
                    if (useTechnique && !dimensionUsed && battleData.techniquesAllowed) {
                        const techCall = this.techCall ??= logicRef.skillFunctions.robinTechnique;
                        techCall(battleData,"enemy",ownerTurn);
                        battleData.dimensionTechniqueUsed = true;
                    }
                },
                "target": "self",
                "listenerName": "Robin Technique",
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
        "listenersToInjectLater": {
            "techniqueWaveStart": {
                "trigger": "WaveStart",
                condition(battleData,generalInfo) {
                    let ownerTurn = this.ownerTurn;
                    battleActions.updateEnergy(battleData,5,ownerTurn,false,"Robin Technique");
                },
                "target": "self",
                "listenerName": "Robin Technique wave start listener",
                "ownerTurn": {},
            }
        },
        "characterValues": {
            "ariaIsActive": false,
            "robinConcertoActive": false,
        },
        "useTechnique": true,
        "techniqueType": "Dimension",
        "buffNames": {
            "talentCritDMG": "Tonal Resonance",
            "robinSkill": "Aria (DMG)",
            "robinSkillOwner": "Aria (Countdown)",
            "ultBuff": "Concerto (Robin)",
            "ultBuffFUA": "Concerto (Robin) [FUA]",
        },
        "characterValuesBattle": {},
    },
    
    //Destruction
    "Saber": {//ATKOBJECTS DONE
        logic(thisTurn,battleData) {
            let statCalls = thisTurn.battleValues;
            let currentSP = battleData.skillPointCurrent;
            const minimum = currentSP>0;
            const isEnhanced = statCalls.isEnhanced;

            if (!isEnhanced && minimum && checkSkill(battleData,thisTurn)) {//lockout skill when enhanced, user defined condition is irrelevant at that point for her
                const returnSkillCall = this.returnSkillCall ??= {action: "Skill", points: -1, actionCall: this.skillFunctions.saberSkill, target: "enemy", endTurn: true};
                return returnSkillCall;
            }

            const returnBasicCall = this.returnBasicCall ??= {action: "BasicATK", points: 1, actionCall: this.skillFunctions.saberBasicReg, target: "enemy", endTurn: true};
            const returnBasicEnhCall = this.returnBasicEnhCall ??= {action: "BasicATK", points: 1, actionCall: this.skillFunctions.saberBasicEnhanced, target: "enemy", endTurn: true};
            return isEnhanced ? returnBasicEnhCall : returnBasicCall;
            //default to basic atk when all else fails
        },
        "skillFunctions": {
            saberBasicReg(battleData,target,sourceTurn) {
                const logicRef = turnLogic[sourceTurn.properName];
                const ATKObjects = logicRef.ATKObjects;

                let skillRef = ATKObjects.saberBasicRegREF ??= ATKObjects["Basic ATK"]["Invisible Air: Barrier of the Wind King"].variant1;

                
                if (!ATKObjects.saberBasicRegATKOBJECT) {
                    let values = battleActions.getLevelBasedParam(battleData,skillRef,sourceTurn);
                    const scalar = "ATK";
                    const tags = ["All","Basic","Wind"];
                    const keyShortcut = basicShorthand.makeKeysArray;
                    const realDMGKeys = keyShortcut(dmgKeys,tags);
                    const realPENKeys = keyShortcut(resPENKeys,tags);
                    const realShredKeys = keyShortcut(defShredKeys,tags);
                    const realVulnKeys = keyShortcut(vulnKeys,tags);
                    //realDMGKeys,realPENKeys,realShredKeys,realVulnKeys
                    const actionTags = ["Basic","Attack"];
                    const compositeCacheTag = tags + actionTags;
                    ATKObjects.saberBasicRegATKOBJECT = {
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
                let ATKObject = ATKObjects.saberBasicRegATKOBJECT;

                if (battleData.isLoggyLogger) {logToBattle(battleData,{logType: "BasicATKStart", name:sourceTurn.properName, target, isEnemy: false, isCharacter: true, AV: battleData.sumAV, actionSlot:skillRef.slot});}
                poke("BasicATKStart",battleData,{sourceTurn});
                battleActions.attackWrapper(battleData,skillRef,sourceTurn,ATKObject);
                battleActions.updateEnergy(battleData,skillRef.energyRegen,sourceTurn);
                poke("BasicATKEnd",battleData,{sourceTurn});
            },
            saberSkill(battleData,target,sourceTurn) {
                const characterName = sourceTurn.properName;
                const logicRef = turnLogic[characterName];
                const ATKObjects = logicRef.ATKObjects;

                let skillRef = ATKObjects.saberSkillREF ??= ATKObjects["Skill"]["Strike Air: Hammer of the Wind King"].variant1;
                let values = ATKObjects.saberSkillREFVALUES ??= battleActions.getLevelBasedParam(battleData,skillRef,sourceTurn);

                
                if (!ATKObjects.saberSkillATKOBJECT) {
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
                    const compositeCacheTag = tags + actionTags;
                    ATKObjects.saberSkillATKOBJECT = {
                        multipliers: {
                            primary: values[0],
                            blast: values[1],
                            all: null,
                        },
                        bonusMultiplier: 0,
                        scalar,
                        DMGTags: tags,
                        allToughness: false,
                        slot: skillRef.slot,
                        realDMGKeys,realPENKeys,realShredKeys,realVulnKeys,
                        actionTags,
                        compositeCacheTag
                    }

                    ATKObjects.saberSkillCRITDMGSHEET ??= {
                        "stats": [CritDamageBase],
                        [CritDamageBase]: 0.50,
                        "source": characterName,
                        "sourceOwner": characterName,
                        "buffName": logicRef.buffNames.crown,
                        "duration": 3,//2 turns, but will always be applied on her own turn, so 3
                        "AVApplied": 0,
                        "maxStacks": 1,
                        "currentStacks": 1,
                        "decay": false,
                        "expireType": "EndTurn",
                    }
                }
                let ATKObject = ATKObjects.saberSkillATKOBJECT;


                const valuesRef = sourceTurn.battleValues;
                const resoRef = valuesRef.coreResonance;
                let possibleEnergy = resoRef * 8;
                let maxCheck = (sourceTurn.currentEnergy + possibleEnergy) >= sourceTurn.maxEnergy;

                if (battleData.isLoggyLogger) {logToBattle(battleData,{logType: "SkillStart", name:characterName, target, isEnemy: false, isCharacter: true, AV: battleData.sumAV, isEnhanced: maxCheck, actionSlot:skillRef.slot});}
                poke("SkillStart",battleData,{sourceTurn});

                const buffSheet = ATKObjects.saberSkillCRITDMGSHEET;
                battleActions.updateBuff(battleData,sourceTurn,buffSheet);
                
                if (maxCheck) {
                    battleActions.updateEnergy(battleData,possibleEnergy,sourceTurn,true);
                    const rank = sourceTurn.rank;
                    ATKObject.bonusMultiplier = (values[3] + (rank>=2 ? 0.07 : 0)) * resoRef;
                    poke("SaberGainCoreResonance",battleData,{pointsGained: -resoRef,sourceString:"Consumed Core Resonance (Skill Enhance)"});
                }
                else {
                    ATKObject.bonusMultiplier = 0;
                    poke("SaberGainCoreResonance",battleData,{pointsGained: 3,sourceString:"Skill"});
                }

                battleActions.attackWrapper(battleData,skillRef,sourceTurn,ATKObject);
                battleActions.updateEnergy(battleData,skillRef.energyRegen,sourceTurn);
                poke("SkillEnd",battleData,{sourceTurn});
            },
            saberUltimate(battleData,sourceTurn) {
                // const characterName = sourceTurn.properName;
                const logicRef = turnLogic[sourceTurn.properName];
                const ATKObjects = logicRef.ATKObjects;
                // const logicRef = turnLogic[sourceTurn.properName];
                // const ATKObjects = logicRef.ATKObjects;
                const skillRef = ATKObjects.saberUltimateREF ??= ATKObjects.Ultimate["Excalibur"].variant1;

                // const logicRef = turnLogic[ownerTurn.properName];
                // const ATKObjects = logicRef.ATKObjects;

                if (!ATKObjects.saberUltimateATKOBJECT) {
                    const values = battleActions.getLevelBasedParam(battleData,skillRef,sourceTurn);
                    const scalar = "ATK";
                    const tags = ["All","Ultimate","Wind"];
                    const keyShortcut = basicShorthand.makeKeysArray;
                    const realDMGKeys = keyShortcut(dmgKeys,tags);
                    const realPENKeys = keyShortcut(resPENKeys,tags);
                    const realShredKeys = keyShortcut(defShredKeys,tags);
                    const realVulnKeys = keyShortcut(vulnKeys,tags);
                    const actionTags = ["Ultimate","Attack"];
                    const compositeCacheTag = tags + actionTags;
                    //realDMGKeys,realPENKeys,realShredKeys,realVulnKeys
                    ATKObjects.saberUltimateATKOBJECT = {
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
                        bounceData: {
                            multi: values[1],
                            bounceCount: 10,
                            hitSplit: {
                                "primary": {
                                    "hitRatio": 1,
                                    "energyRatio": 1,
                                    "toughness": 20/10
                                },
                                "blast": null,
                                "all": null,
                                "allEnemiesHit": null,
                                "unknownTypers": false
                            },
                        }
                    }
                }
                let ATKObject = ATKObjects.saberUltimateATKOBJECT;

                const updateEnergy = battleActions.updateEnergy;
                updateEnergy(battleData,-sourceTurn.maxEnergy,sourceTurn);
                battleActions.attackWrapper(battleData,skillRef,sourceTurn,ATKObject);
                updateEnergy(battleData,skillRef.energyRegen,sourceTurn);

                // const logicRef = turnLogic[characterName];
                const valuesRef = sourceTurn.battleValues;
                const oldAmount = valuesRef.overflowEnergy;
                if (oldAmount) {
                    valuesRef.overflowEnergy = 0;
                    // if (battleData.isLoggyLogger) {logToBattle(battleData,{logType: "GenericAction", source:"Ultimate use: Blessing of the Lake", bodyText: `Energy Overflow (Saber): ${oldAmount.toLocaleString()} --> 0`});}
                    if (battleData.isLoggyLogger) {logToBattle(battleData,{logType: "EnergyChange", isOverflow: true, target: sourceTurn.properName, amount: -oldAmount, oldEnergy:oldAmount, newEnergy:0, maximum:sourceTurn.rank>=6 ? 200 : 120, source:"Blessing of the Lake"});}
                    updateEnergy(battleData,oldAmount,sourceTurn,true,"Blessing of the Lake");
                }
                valuesRef.isEnhanced = true;


                if (sourceTurn.rank >= 6) {
                    valuesRef.e6UltCounter += 1;
                    if (valuesRef.e6UltCounter >= 3) {
                        updateEnergy(battleData,300,sourceTurn,true,"The Long Fated Night");
                        valuesRef.e6UltCounter = 0;
                    }
                }
                sourceTurn.ultyQueued = false;
            },
            saberBasicEnhanced(battleData,target,sourceTurn) {
                const logicRef = turnLogic[sourceTurn.properName];
                const ATKObjects = logicRef.ATKObjects;
                let skillRef = ATKObjects.saberBasicEnhancedREF ??= ATKObjects["Basic ATK"]["Release, the Golden Scepter"].variant1;
                let values = ATKObjects.saberBasicEnhancedREFVALUES ??= battleActions.getLevelBasedParam(battleData,skillRef,sourceTurn);

                if (!ATKObjects.saberBasicEnhancedATKOBJECT) {
                    const scalar = "ATK";
                    const tags = ["All","Basic","Wind"];
                    const keyShortcut = basicShorthand.makeKeysArray;
                    const realDMGKeys = keyShortcut(dmgKeys,tags);
                    const realPENKeys = keyShortcut(resPENKeys,tags);
                    const realShredKeys = keyShortcut(defShredKeys,tags);
                    const realVulnKeys = keyShortcut(vulnKeys,tags);
                    //realDMGKeys,realPENKeys,realShredKeys,realVulnKeys
                    const actionTags = ["Basic","Attack"];
                    const compositeCacheTag = tags + actionTags;
                    ATKObjects.saberBasicEnhancedATKOBJECT = {
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
                        bounceData: null,
                        compositeCacheTag
                    }
                }
                let ATKObject = ATKObjects.saberBasicEnhancedATKOBJECT;

                const enemyPositions = battleData.enemyPositions;
                if (enemyPositions.length <= 2) {
                    let insert = 0;
                    if (enemyPositions.length === 1) {insert = values[3];}
                    else {insert = values[2];}

                    ATKObject.bounceData = {
                        multi: insert,
                        bounceCount: 1,
                        hitSplit: {
                            "primary": null,
                            "blast": null,
                            "all": {
                                "hitRatio": 1,
                                "energyRatio": 1,
                                "toughness": 20
                            },
                            "allEnemiesHit": null,
                            "unknownTypers": false
                        },
                    }
                }
                else {ATKObject.bounceData = null;}

                if (battleData.isLoggyLogger) {logToBattle(battleData,{logType: "BasicATKStart", name:sourceTurn.properName, target, isEnemy: false, isCharacter: true, AV: battleData.sumAV, isEnhanced: true, actionSlot:skillRef.slot});}
                poke("BasicATKStart",battleData,{sourceTurn});

                const buffSheet = ATKObjects.saberManaBurstNULLSHEET;
                battleActions.updateBuff(battleData,sourceTurn,buffSheet);

                const battleValues = sourceTurn.battleValues;
                battleValues.advanceReady = true;
                poke("SaberGainCoreResonance",battleData,{pointsGained: 2,sourceString:"Enhanced Basic"});
                battleActions.attackWrapper(battleData,skillRef,sourceTurn,ATKObject);
                battleActions.updateEnergy(battleData,skillRef.energyRegen,sourceTurn);
                poke("BasicATKEnd",battleData,{sourceTurn});

                battleValues.isEnhanced = false;
            },
            saberTechnique(battleData,target,sourceTurn) {
                let characterName = sourceTurn.properName;

                const logicRef = turnLogic[sourceTurn.properName];
                const ATKObjects = logicRef.ATKObjects;

                let skillRef = ATKObjects.saberTechREF ??= ATKObjects.Technique["Behold, the King of Knights"].variant1;
                let values = ATKObjects.saberTechREFVALUES ??= battleActions.getLevelBasedParam(battleData,skillRef,sourceTurn);


                const buffSheet = ATKObjects.techSheet ??= {
                    "stats": [ATKP],
                    [ATKP]: values[0],
                    "source": characterName,
                    "sourceOwner": sourceTurn.properName,
                    "buffName": logicRef.buffNames.technique,
                    "duration": 2,
                    "AVApplied": 0,
                    "maxStacks": 1,
                    "currentStacks": 1,
                    "decay": false,
                    "expireType": "EndTurn",
                }

                if (battleData.isLoggyLogger) {logToBattle(battleData,{logType: "TechniqueStart", name:characterName, target, isEnemy: false, isCharacter: true, AV: battleData.sumAV, actionSlot:skillRef.slot});}
                poke("TechniqueStart",battleData,{sourceTurn});

                battleActions.updateBuff(battleData,sourceTurn,buffSheet);
                poke("SaberGainCoreResonance",battleData,{pointsGained: 2,sourceString:"Behold, the King of Knights"});
                battleActions.nonViolentWrapper(battleData,skillRef,characterName);

                poke("TechniqueEnd",battleData,{sourceTurn});

                
            },
        },
        "listeners": [
            {
                "trigger": "SaberGainCoreResonance",
                condition(battleData,generalInfo) {
                    // poke("SaberGainCoreResonance",battleData,{pointsGained: 1,sourceString:"asdf"});
                    let ownerTurn = this.ownerTurn;
                    //NEVER need to check the source turn on this, bc only saber can poke this, and only she will ever have listeners for this
                    const pointsGained = generalInfo.pointsGained;
                    const characterName = ownerTurn.properName;
                    const logicRef = this.logicRef ??= turnLogic[characterName];
                    
                    const buffsObject = ownerTurn.buffsObject;

                    if (pointsGained>0) {
                        const rank = ownerTurn.rank;
                        if (!ownerTurn.saberCoreGainCRITDMGSHEET) {
                            const buffNames = logicRef.buffNames;

                            // greatTableIndex
                            // greatTableKeys
                            this.saberCoreGainCRITDMGSHEET ??= {
                                "stats": [CritDamageBase],
                                [CritDamageBase]: 0.04,
                                "source": "E1",
                                "sourceOwner": characterName,
                                "buffName": buffNames.crownStack,
                                "duration": 1,
                                "AVApplied": 0,
                                "maxStacks": 8,
                                "currentStacks": 1,
                                "decay": false,
                                "expireType": null,
                            }
                            ownerTurn.coreResonanceCRITDMGDone = false;

                            if (rank>=2) {
                                this.saberCoreGainE2SHREDSHEET ??= {
                                    "stats": [DEFShredAll],
                                    [DEFShredAll]: 0.01,
                                    "source": "E2",
                                    "sourceOwner": characterName,
                                    "buffName": buffNames.e2Shred,
                                    "duration": 1,
                                    "AVApplied": 0,
                                    "maxStacks": 15,
                                    "currentStacks": 1,
                                    "decay": false,
                                    "expireType": null,
                                }
                                ownerTurn.coreResonanceE2SHREDDone = false;
                            }
                        }

                        //REG CRIT DMG HANDLING
                        if (!ownerTurn.coreResonanceCRITDMGDone && pointsGained>0) {
                            //only check this if we haven't finished stacking yet, and if the change in points is actually positive
                            const buffSheet = this.saberCoreGainCRITDMGSHEET;
                            buffSheet.currentStacks = pointsGained;
                            battleActions.updateBuff(battleData,ownerTurn,buffSheet);
                            const buffCheck = buffsObject[buffSheet.buffName];
                            if (buffCheck.currentStacks === 8) {ownerTurn.coreResonanceCRITDMGDone = true;}//mark as completed so this buff is never called again
                        }
                        //E2 BUFF HANDLING
                        if (rank>=2 && !ownerTurn.coreResonanceE2SHREDDone && pointsGained>0) {
                            //only check this if we haven't finished stacking yet, and if the change in points is actually positive
                            const buffSheet = this.saberCoreGainE2SHREDSHEET;
                            buffSheet.currentStacks = pointsGained;
                            battleActions.updateBuff(battleData,ownerTurn,buffSheet);
                            const buffCheck = buffsObject[buffSheet.buffName];
                            if (buffCheck.currentStacks === 15) {ownerTurn.coreResonanceE2SHREDDone = true;}//mark as completed so this buff is never called again
                        }
                    }

                    
                    const valuesRef = ownerTurn.battleValues;
                    const oldValue = valuesRef.coreResonance;
                    valuesRef.coreResonance += pointsGained;
                    const resoRef = valuesRef.coreResonance;
                    const sourceString = generalInfo.sourceString
                    if (pointsGained && battleData.isLoggyLogger) {
                        // GenericActionWithImage
                        logToBattle(battleData,{logType: "GenericActionWithImage", imagePath:"/HonkaiSR/" + characters[ownerTurn.properName].traces.Point04.icon,sourceName: ownerTurn.properName, source:this.listenerName, bodyText: `Core Resonance: ${oldValue} --> ${resoRef} [${sourceString}]`});
                        // logToBattle(battleData,{logType: "GenericAction", source:this.listenerName, bodyText: `Core Resonance (Saber): ${oldValue} --> ${resoRef} [${sourceString}]`});
                    }
                    if (pointsGained<0) {return;}//if all we did was remove points, we can end it here now that we reached the log point


                    const manaName = logicRef.buffNames.mana;
                    const manaCheck = buffsObject[manaName];
                    if (manaCheck) {
                        let possibleEnergy = resoRef * 8;
                        let maxCheck = (ownerTurn.currentEnergy + possibleEnergy) >= ownerTurn.maxEnergy;

                        if (maxCheck) {
                            removeBuff(battleData,ownerTurn,manaCheck);
                            battleActions.updateSkillPoints(1,battleData,{sourceTurn:ownerTurn,sourceName:"Knight of the Dragon"});

                            // battleActions.actionAdvance(1,ownerTurn,battleData,"Knight of the Dragon");
                            valuesRef.advanceReady = false;
                            valuesRef.waitingToAdvance = true;
                            //in the event of souldragon from dhpt being on saber, when saber does a skill that would push her over the core resonance threshold
                            //you would think that the core reso advance from manaburst happens before souldragon's bondmate attacked advance, but it does not
                            //souldragon will trigger his advance first since the attack ends before the action is evaluated, then after
                            //core reso checks the count to advance, and advances ahead of souldragon. Bc of this I moved the advance to a separate actionEnded trigger instead.
                        }
                    }
                },
                "target": "self",
                "listenerName": "Core Resonance Handler",
                "ownerTurn": {},
            },
            {
                "trigger": "ActionEnd",
                condition(battleData,generalInfo) {
                    // poke("EnergyChanged",battleData,{sourceTurn,newAmount,overFill,amount});
                    const ownerTurn = this.ownerTurn;
                    const battleValues = ownerTurn.battleValues;
                    if (!battleValues.waitingToAdvance) {return;}
                    battleActions.actionAdvance(1,ownerTurn,battleData,"Knight of the Dragon");
                    battleValues.waitingToAdvance = false;
                },
                "target": "self",
                "listenerName": "Blessing of the Lake Overflow",
                "ownerTurn": {},
            },
            {
                "trigger": "EnergyChanged",
                condition(battleData,generalInfo) {
                    // poke("EnergyChanged",battleData,{sourceTurn,newAmount,overFill,amount});
                    const ownerTurn = this.ownerTurn;
                    const sourceTurn = generalInfo.sourceTurn;
                    if (sourceTurn.name != ownerTurn.name) {return;}
                    

                    const overflow = generalInfo.overFill;
                    if (overflow) {
                        // const characterName = ownerTurn.properName;
                        // const logicRef = turnLogic[characterName];
                        const valuesRef = ownerTurn.battleValues;
                        const rank = ownerTurn.rank;
                        // overflowEnergy
                        const oldAmount = valuesRef.overflowEnergy;
                        const cap = rank>=6 ? 200 : 120;
                        valuesRef.overflowEnergy = Math.min(cap,valuesRef.overflowEnergy + overflow);
                        const amountGained = valuesRef.overflowEnergy - oldAmount;
                        // if (battleData.isLoggyLogger) {logToBattle(battleData,{logType: "GenericAction", source:this.listenerName, bodyText: `Energy Overflow (Saber): ${oldAmount.toLocaleString()} --> ${valuesRef.overflowEnergy.toLocaleString()}/${cap}`});}


                        if (battleData.isLoggyLogger) {logToBattle(battleData,{logType: "EnergyChange", isOverflow: true, target: sourceTurn.properName, amount: amountGained, oldEnergy:oldAmount, newEnergy:valuesRef.overflowEnergy, maximum:cap, source:"Blessing of the Lake"});}
                    }

                    poke("SaberGainCoreResonance",battleData,{pointsGained: 0,sourceString:null});//this will pseudo check if she has manaburst and can be advanced, instead of having it in its own listener
                },
                "target": "self",
                "listenerName": "Blessing of the Lake Overflow",
                "ownerTurn": {},
            },
            {
                "trigger": "UltimateStart",
                condition(battleData,generalInfo) {
                    // poke("SaberGainCoreResonance",battleData,{pointsGained: 1});
                    const ownerTurn = this.ownerTurn;
                    //NEVER need to check the source turn on this, bc this works if ANY ally uses an ultimate
                    const logicRef = turnLogic[ownerTurn.properName];
                    const ATKObjects = logicRef.ATKObjects;

                    if (!ATKObjects.saberDragonCoreDMGSHEET) {
                        let skillRef = ATKObjects.saberTalentREF ??= ATKObjects["Talent"]["Dragon Reactor Core"].variant1;
                        let values = ATKObjects.saberTalentREFVALUES ??= battleActions.getLevelBasedParam(battleData,skillRef,ownerTurn);
                        const characterName = ownerTurn.properName;
                        const logicRef = turnLogic[characterName];
                        const buffNames = logicRef.buffNames;

                        const buffName = buffNames.dragonCore;
                        // greatTableIndex
                        // greatTableKeys
                        ATKObjects.saberDragonCoreDMGSHEET = {
                            "stats": [DamageAll],
                            [DamageAll]: values[2],
                            "source": "Dragon Reactor Core",
                            "sourceOwner": characterName,
                            "buffName": buffName,
                            "duration": 1,
                            "AVApplied": 0,
                            "maxStacks": 1,
                            "currentStacks": 1,
                            "decay": false,
                            "expireType": null,
                        }
                    }

                    const buffSheet = ATKObjects.saberDragonCoreDMGSHEET;
                    buffSheet.duration = ownerTurn.turnState ? 3 : 2;
                    battleActions.updateBuff(battleData,ownerTurn,buffSheet);

                    poke("SaberGainCoreResonance",battleData,{pointsGained: 3,sourceString:"Dragon Reactor Core: Ally Ultimate"});
                },
                "target": "self",
                "listenerName": "Dragon Reactor Core ult listener",
                "ownerTurn": {},
            },
            {
                "trigger": "PreBattleEntersCombat",
                condition(battleData,generalInfo) {
                    let ownerTurn = this.ownerTurn;

                    const buffSheet = this.buffSheet ??= {
                        "stats": [CritRateBase],
                        [CritRateBase]: 0.20,
                        "source": "Trace",
                        "sourceOwner": ownerTurn.properName,
                        "buffName": turnLogic[ownerTurn.properName].buffNames.traceCritRate,
                        "duration": 1,
                        "AVApplied": 0,
                        "maxStacks": 1,
                        "currentStacks": 1,
                        "decay": false,
                        "expireType": null,
                    }
                    const updateBuff = battleActions.updateBuff;
                    updateBuff(battleData,ownerTurn,buffSheet);

                    const buffSheet2 = this.buffSheet2 ??= {
                        "stats": null,
                        "statsOnHit": null,
                        "source": "Trace",
                        "sourceOwner": ownerTurn.properName,
                        "buffName": turnLogic[ownerTurn.properName].buffNames.mana,
                        "duration": 1,
                        "AVApplied": 0,
                        "maxStacks": 1,
                        "currentStacks": 1,
                        "decay": false,
                        "expireType": null,
                    }

                    const logicRef = turnLogic[ownerTurn.properName];
                    const ATKObjects = logicRef.ATKObjects;
                    
                    ATKObjects.saberManaBurstNULLSHEET = buffSheet2;
                    updateBuff(battleData,ownerTurn,buffSheet2);
                },
                "target": "self",
                "listenerName": "Knight of the Dragon battlestart Crit Rate/Mana Burst",
                "ownerTurn": {},
            },
            {
                "trigger": "PreBattleEntersCombat",
                condition(battleData,generalInfo) {
                    let ownerTurn = this.ownerTurn;
                    
                    const skillRef = this.skillRef ??= turnLogic[ownerTurn.properName].ATKObjects.Ultimate["Excalibur"].variant1;
                    if (skillRef.hitSplits.length > 1) {
                        skillRef.hitSplits.length = 1;
                    }
                    //parsing picks up a little more than I can use right now, on this one, is why I do this
                },
                "target": "self",
                "listenerName": "Saber ultimate hitsplit trim",
                "ownerTurn": {},
            },
            {
                "trigger": "PreBattleEntersCombat",
                condition(battleData,generalInfo) {
                    // let ownerTurn = this.ownerTurn;
                    //kinda pepega to have a listener that exists to poke another listener, but it be like that
                    poke("SaberGainCoreResonance",battleData,{pointsGained: 1,sourceString:"Dragon Reactor Core: Battlestart"});
                },
                "target": "self",
                "listenerName": "Dragon Reactor Core battlestart +1 Resonance",
                "ownerTurn": {},
            },
            {
                "trigger": "PreBattleEntersCombat",
                condition(battleData,generalInfo) {
                    let ownerTurn = this.ownerTurn;
                    // let characterName = ownerTurn.properName;

                    const sixtyPercent = ownerTurn.maxEnergy * 0.6;
                    const currentEnergy = ownerTurn.currentEnergy;
                    const energyToRegen = currentEnergy < sixtyPercent ? sixtyPercent-currentEnergy : 0;

                    if (energyToRegen) {battleActions.updateEnergy(battleData,energyToRegen,ownerTurn,true,"Blessing of the Lake");}
                },
                "target": "self",
                "listenerName": "Blessing of the Lake: energy regen on battleStart",
                "ownerTurn": {},
            },
            {
                "trigger": "UltimateReady",
                condition(battleData,generalInfo) {
                    let ownerTurn = this.ownerTurn;
                    if (ownerTurn.ultyQueued) {return;}

                    let energyCheck = ownerTurn.currentEnergy === ownerTurn.maxEnergy;
                    let otherObscureCondition = energyCheck ? checkUlty(battleData,ownerTurn) : false;

                    if (otherObscureCondition) {
                        ownerTurn.ultyQueued = true;
                        const queueObject = this.queueObject ??= {
                            attack: this.ultPath ??= turnLogic[ownerTurn.properName].skillFunctions.saberUltimate,
                            target: this.target,
                            name: this.listenerName,
                            properName: ownerTurn.properName,
                            sourceTurn: ownerTurn
                        }
                        queueObject.sourceTurn = ownerTurn;
                        battleActions.queueUltimateUse(battleData,queueObject);
                    }
                },
                "target": "self",
                "listenerName": "Saber - Ultimate queued",
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
                        const saberTechnique = this.saberTechnique ??= logicRef.skillFunctions.saberTechnique
                        saberTechnique(battleData,"self",ownerTurn)
                    }
                },
                "target": "self",
                "listenerName": "Saber Technique",
                "ownerTurn": {},
            },
        ],
        "eidolonListeners": {
            1: [
                {
                    "trigger": "PreBattleEntersCombat",
                    condition(battleData,generalInfo) {
                        let ownerTurn = this.ownerTurn;
                        // greatTableIndex
                        // greatTableKeys
                        const buffSheet = this.buffSheet ??= {
                            "stats": [DamageUltimate],
                            [DamageUltimate]: 0.60,
                            "source": ownerTurn.properName,
                            "sourceOwner": ownerTurn.properName,
                            "buffName": turnLogic[ownerTurn.properName].buffNames.e1DMG,
                            "duration": 1,
                            "AVApplied": 0,
                            "maxStacks": 1,
                            "currentStacks": 1,
                            "decay": false,
                            "expireType": null,
                        }
                        battleActions.updateBuff(battleData,ownerTurn,buffSheet);
                    },
                    "target": "self",
                    "listenerName": "The Lost White Walls Ult DMG",
                    "ownerTurn": {},
                },
                {
                    "trigger": "BasicATKEnd",
                    condition(battleData,generalInfo) {
                        // poke("SaberGainCoreResonance",battleData,{pointsGained: 1});
                        let ownerTurn = this.ownerTurn;
                        const sourceTurn = generalInfo.sourceTurn;
                        if (sourceTurn.name != ownerTurn.name) {return;}
                        poke("SaberGainCoreResonance",battleData,{pointsGained: 1,sourceString:"E1: The Lost White Walls"});
                        //was really tempted to slap this into an AttackEnd listener instead to bundle both together
                        //but realistically, processing-wise it's better to just stick to the specific skill-type listeners
                        //instead of checking every fucking attack including follow-ups, ults, etc
                    },
                    "target": "self",
                    "listenerName": "The Lost White Walls Basic listener",
                    "ownerTurn": {},
                },
                {
                    "trigger": "SkillEnd",
                    condition(battleData,generalInfo) {
                        // poke("SaberGainCoreResonance",battleData,{pointsGained: 1});
                        let ownerTurn = this.ownerTurn;
                        const sourceTurn = generalInfo.sourceTurn;
                        if (sourceTurn.name != ownerTurn.name) {return;}
                        poke("SaberGainCoreResonance",battleData,{pointsGained: 1,sourceString:"E1: The Lost White Walls"});
                        //was really tempted to slap this into an AttackEnd listener instead to bundle both together
                        //but realistically, processing-wise it's better to just stick to the specific skill-type listeners
                        //instead of checking every fucking attack including follow-ups, ults, etc

                        //also considered just putting these inside each skill function, but would rather keep these in the eido bracket(for now, at least, might change my mind later)
                    },
                    "target": "self",
                    "listenerName": "The Lost White Walls Skill listener",
                    "ownerTurn": {},
                },
            ],
            2: [],
            3: [],
            4: [
                {
                    "trigger": "PreBattleEntersCombat",
                    condition(battleData,generalInfo) {
                        let ownerTurn = this.ownerTurn;

                        const buffSheet = this.buffSheet ??= {
                            "stats": [ResistanceWindPEN],
                            [ResistanceWindPEN]: 0.08,
                            "statsOnHit": null,
                            "source": "E4",
                            "sourceOwner": ownerTurn.properName,
                            "buffName": turnLogic[ownerTurn.properName].buffNames.e4Pen,
                            "duration": 1,
                            "AVApplied": 0,
                            "maxStacks": 1,
                            "currentStacks": 1,
                            "decay": false,
                            "expireType": null,
                        }
                        battleActions.updateBuff(battleData,ownerTurn,buffSheet);
                    },
                    "target": "self",
                    "listenerName": "The Saga of Sixteen Winter Days battlestart RES PEN",
                    "ownerTurn": {},
                },
                {
                    "trigger": "UltimateEnd",
                    condition(battleData,generalInfo) {
                        let ownerTurn = this.ownerTurn;
                        const sourceTurn = generalInfo.sourceTurn;
                        if (sourceTurn.name != ownerTurn.name) {return;}

                        if (!this.saberSagaSixteenDaysPENSHEET) {
                            const logicRef = turnLogic[ownerTurn.properName];
                            const buffName = logicRef.buffNames.e4PenStack
                            // greatTableIndex
                            // greatTableKeys
                            this.saberSagaSixteenDaysPENSHEET = {
                                "stats": [ResistanceWindPEN],
                                [ResistanceWindPEN]: 0.04,
                                "statsOnHit": null,
                                "source": "E4",
                                "sourceOwner": ownerTurn.properName,
                                "buffName": buffName,
                                "duration": 1,
                                "AVApplied": 0,
                                "maxStacks": 3,
                                "currentStacks": 1,
                                "decay": false,
                                "expireType": null,
                            }
                        }

                        const buffSheet = this.saberSagaSixteenDaysPENSHEET;
                        battleActions.updateBuff(battleData,ownerTurn,buffSheet);
                        //TODO: listener self removal later
                        //also make sure I addressed the issue about removing a listener mid poke and the array length not reflecting in the for let i= loops
                    },
                    "target": "self",
                    "listenerName": "The Saga of Sixteen Winter Days ult listener",
                    "ownerTurn": {},
                },
            ],
            5: [],
            6: [
                {
                    "trigger": "PreBattleEntersCombat",
                    condition(battleData,generalInfo) {
                        let ownerTurn = this.ownerTurn;
                        // greatTableIndex
                        // greatTableKeys
                        const buffSheet = this.buffSheet ??= {
                            "stats": [ResistanceUltimatePEN],
                            [ResistanceUltimatePEN]: 0.20,
                            "source": ownerTurn.properName,
                            "sourceOwner": ownerTurn.properName,
                            "buffName": turnLogic[ownerTurn.properName].buffNames.e6Pen,
                            "duration": 1,
                            "AVApplied": 0,
                            "maxStacks": 1,
                            "currentStacks": 1,
                            "decay": false,
                            "expireType": null,
                        }
                        battleActions.updateBuff(battleData,ownerTurn,buffSheet);
                    },
                    "target": "self",
                    "listenerName": "The Long Fated Night Ult RES PEN",
                    "ownerTurn": {},
                },
            ],
        },
        "ATKObjects": {},
        "listenersBattle": [],
        "buffsBattle": {},
        "buffsBattleTemp": {},
        "characterValues": {
            "isEnhanced": false,
            "coreResonance": 0,
            "overflowEnergy": 0,
            "e6UltCounter": 2,
            "advanceReady": true,
            "waitingToAdvance": false,
        },
        "useTechnique": true,
        "techniqueType": "Attack",
        "buffNames": {
            "mana": "Mana Burst",
            "crown": "Crown of the Star",
            "crownStack": "Crown of the Star (Stack)",
            "dragonCore": "Dragon Reactor Core",
            "traceCritRate": "Knight of the Dragon",
            "e1DMG": "E1: The Lost White Walls",
            "e2Shred": "E2: The Lost Oath of the Round Table",
            "e4Pen": "E4: The Saga of Sixteen Winter Days",
            "e4PenStack": "E4: The Saga of Sixteen Winter Days (Stack)",
            "technique": "Behold, the King of Knights",
            "e6Pen": "The Long Fated Night"
        },
        "characterValuesBattle": {},
    },
    
    //Remembrance
    "Trailblazer - Remembrance": { //ATKOBJECTS DONE
        logic(thisTurn,battleData) {
            // if (battleData.battleIsOver) {return {action: "EndTurn", endTurn: true}}
            const shortRef = this;
            let actionUsed = false;

            let statCalls = thisTurn.battleValues;
            const summonUp = statCalls.memIsActive;
            let shortCalls = shortRef.skillFunctions;

            let currentSP = battleData.skillPointCurrent;
            // let minimumPointsToStart = 4;
            // let desiredCasts = 5;
            // let maximumCasts = 5;
            const minimum = currentSP>0;
            // const skillIsUp = thisTurn.evernightSkillIsActive;



            if (minimum && !summonUp && statCalls.memCharge != 1) {//thisTurn.numinosityIsActive
                return {action: "Skill", points: -1, actionCall: shortCalls.rmcSkill, target: "self", endTurn: true};
            }

            if (!actionUsed) {
                // const basicToCall = isEnhanced ? shortCalls.aggyBasicEnhanced : shortCalls.aggyBasicReg;
                const basicIsEnhanced = statCalls.epicStacks && summonUp;
                const basicToCall = basicIsEnhanced ? shortCalls.rmcBasicEnhanced : shortCalls.rmcBasic;
                return {action: "BasicATK", points: 1, actionCall: basicToCall, target: "enemy", endTurn: true};
            }
            //default to basic atk when all else fails
        },
        "skillFunctions": {//rmcMemTURNEVENT
            rmcBasic(battleData,target,sourceTurn) {
                const logicRef = turnLogic[sourceTurn.properName];
                const ATKObjects = logicRef.ATKObjects;

                let skillRef = ATKObjects.rmcBasicREF ??= ATKObjects["Basic ATK"]["Leave It to Me!"].variant1;

                if (!ATKObjects.rmcBasicATKOBJECT) {
                    let values = ATKObjects.rmcBasicREFVALUES ??= battleActions.getLevelBasedParam(battleData,skillRef,sourceTurn);
                    const scalar = "ATK";
                    const tags = ["All","Basic","Ice"];
                    const keyShortcut = basicShorthand.makeKeysArray;
                    const realDMGKeys = keyShortcut(dmgKeys,tags);
                    const realPENKeys = keyShortcut(resPENKeys,tags);
                    const realShredKeys = keyShortcut(defShredKeys,tags);
                    const realVulnKeys = keyShortcut(vulnKeys,tags);
                    //realDMGKeys,realPENKeys,realShredKeys,realVulnKeys
                    // console.log(values[0])
                    const actionTags = ["Basic","Attack"];
                    const compositeCacheTag = tags + actionTags;
                    ATKObjects.rmcBasicATKOBJECT = {
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
                        actionTags,compositeCacheTag,
                        isFUA: false,
                    }
                }
                let ATKObject = ATKObjects.rmcBasicATKOBJECT;

                if (battleData.isLoggyLogger) {logToBattle(battleData,{logType: "BasicATKStart", name:sourceTurn.properName, target, isEnemy: false, isCharacter: true, AV: battleData.sumAV, actionSlot:skillRef.slot});}
                poke("BasicATKStart",battleData,{sourceTurn});

                // logicRef.skillFunctions.traceHPConsume(battleData,sourceTurn,sourceTurn);
                battleActions.attackWrapper(battleData,skillRef,sourceTurn,ATKObject);
                battleActions.updateEnergy(battleData,skillRef.energyRegen,sourceTurn);
                poke("BasicATKEnd",battleData,{sourceTurn});
            },
            rmcBasicEnhanced(battleData,target,sourceTurn) {
                const logicRef = turnLogic[sourceTurn.properName];
                const ATKObjects = logicRef.ATKObjects;

                let skillRef = ATKObjects.rmcBasicEnhancedREF ??= ATKObjects["Basic ATK"]["Together, We Script Tomorrow!"].variant1;
                let values = ATKObjects.rmcBasicEnhancedREFVALUES ??= battleActions.getLevelBasedParam(battleData,skillRef,sourceTurn);

                if (!ATKObjects.rmcBasicEnhancedATKOBJECT) {
                    const scalar = "ATK";
                    const tags = ["All","Basic","Ice"];
                    const keyShortcut = basicShorthand.makeKeysArray;
                    const realDMGKeys = keyShortcut(dmgKeys,tags);
                    const realPENKeys = keyShortcut(resPENKeys,tags);
                    const realShredKeys = keyShortcut(defShredKeys,tags);
                    const realVulnKeys = keyShortcut(vulnKeys,tags);
                    //realDMGKeys,realPENKeys,realShredKeys,realVulnKeys
                    // console.log(values[0])
                    const actionTags = ["Basic","Attack","Joint"];
                    const compositeCacheTag = tags + actionTags;

                    const actionTags2 = ["Basic","Attack","Joint","Summon","Memosprite"];
                    const compositeCacheTag2 = tags + actionTags2;

                    ATKObjects.rmcBasicEnhancedATKOBJECT = {
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
                        actionTags,compositeCacheTag,
                        isFUA: false,
                    }

                    ATKObjects.rmcBasicEnhancedMemATKOBJECT = {
                        multipliers: {
                            primary: null,
                            blast: null,
                            all: values[1],
                        },
                        scalar,
                        DMGTags: tags,
                        allToughness: false,
                        slot: skillRef.slot,
                        realDMGKeys,realPENKeys,realShredKeys,realVulnKeys,
                        actionTags: actionTags2,
                        compositeCacheTag:compositeCacheTag2,
                        isFUA: false,
                    }
                }
                const ATKObject = ATKObjects.rmcBasicEnhancedATKOBJECT;
                const ATKObject2 = ATKObjects.rmcBasicEnhancedMemATKOBJECT;

                // console.log(ATKObject.actionTags)

                if (battleData.isLoggyLogger) {logToBattle(battleData,{logType: "BasicATKStart", name:sourceTurn.properName, target, isEnemy: false, isCharacter: true, isEnhanced: true, AV: battleData.sumAV, actionSlot:skillRef.slot});}
                poke("BasicATKStart",battleData,{sourceTurn});

                const valuesRef = sourceTurn.battleValues;
                valuesRef.epicStacks -= 1;
                if (battleData.isLoggyLogger) {logToBattle(battleData,{logType: "GenericAction", source:"Enhanced Basic ATK", bodyText: `Epic (RMC): ${valuesRef.epicStacks + 1} --> ${valuesRef.epicStacks}`});}

                // logicRef.skillFunctions.traceHPConsume(battleData,sourceTurn,sourceTurn);
                // battleActions.attackWrapper(battleData,skillRef,sourceTurn,ATKObject);
                const memTurn = sourceTurn.rmcMemTURNEVENT;
                battleActions.attackWrapperJoint(battleData,skillRef,sourceTurn,memTurn,ATKObject,ATKObject2);
                battleActions.updateEnergy(battleData,skillRef.energyRegen,sourceTurn);

                poke("rmcMemGainedCharge",battleData,{pointsGained: values[2],sourceString:"Enhanced Basic ATK"});
                poke("BasicATKEnd",battleData,{sourceTurn});
            },
            rmcSkill(battleData,targetTurn,sourceTurn) {
                const logicRef = turnLogic[sourceTurn.properName];
                const ATKObjects = logicRef.ATKObjects;

                let characterName = sourceTurn.properName;
                let skillRef = ATKObjects.rmcSkillREF ??= ATKObjects.Skill["I Choose You!"].variant1;
                let values = ATKObjects.rmcSkillREFVALUES ??= battleActions.getLevelBasedParam(battleData,skillRef,sourceTurn);

                if (battleData.isLoggyLogger) {logToBattle(battleData,{logType: "SkillStart", name:characterName, target:targetTurn.name, isEnemy: false, isCharacter: true, AV: battleData.sumAV, actionSlot:skillRef.slot});}
                poke("SkillStart",battleData,{sourceTurn});

                poke("TargetAlly",battleData,{targetType:"Single", sourceTurn, targetTurn:sourceTurn, targetSkill:skillRef.slot});
                const summonUp = sourceTurn.battleValues.memIsActive;

                if (summonUp) {
                    if (!ATKObjects.rmcSkillMemHEALOBJECT) {
                        // let values = battleActions.getLevelBasedParam(battleData,skillRef,sourceTurn);
                        ATKObjects.rmcSkillMemHEALOBJECT = {
                            multipliers: {
                                primary: values[0],
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
                    let healObject = ATKObjects.rmcSkillMemHEALOBJECT;
                    const memTurn = sourceTurn.rmcMemTURNEVENT;
                    battleActions.healAlly(battleData,healObject,memTurn,sourceTurn,skillRef.slot,1);
                    // poke("TargetAlly",battleData,{targetType:"Single", sourceTurn, targetTurn:healTarget, targetSkill:skillRef.slot});

                    poke("rmcMemGainedCharge",battleData,{pointsGained: values[1],sourceString:"RMC Skill"});
                }
                else {
                    logicRef.skillFunctions.addMemToField(battleData,sourceTurn);
                    // battleActions.actionAdvance(1,sourceTurn,battleData,"Skill summoned garment, Aglaea gained extra turn");
                }
                battleActions.updateEnergy(battleData,skillRef.energyRegen,sourceTurn);
                battleActions.nonViolentWrapper(battleData,skillRef,characterName);
                // if (targetTurn.properName != "Sparkle") {battleActions.actionAdvance(0.5,targetTurn,battleData,"Sparkle Skill");}//prevent self advancement
                poke("SkillEnd",battleData,{sourceTurn});
            },
            addMemToField(battleData,sourceTurn) {
                const memTurn = sourceTurn.rmcMemTURNEVENT;

                memTurn.currentHP = memTurn.maxHP;//reset HP to full
                memTurn.isDead = false;
                memTurn.isActive = true;
                memTurn.AV = memTurn.AVBase;//reset accumulated AV

                //inserting into physical positions
                const alliedSpots = battleData.allyPositions;
                for (let i=0;i<alliedSpots.length;i++) {
                    const currentTurn = alliedSpots[i];
                    //look for aggy's position and put garment in AFTER her, slotwise, so if she's char1, garment is inserted between char1 and char2
                    if (currentTurn.properName === sourceTurn.properName) {
                        alliedSpots.splice(i+1,0,memTurn);
                        break;
                    }
                }

                const logicRef = turnLogic[sourceTurn.properName];
                const charValuesRef = sourceTurn.battleValues;
                // charValuesRef.netherRemainingTurns = 3;

                sourceTurn.activeSummons += 1;
                sourceTurn.activeMemosprites += 1;
                charValuesRef.memIsActive = true;
                // sourceTurn.memoriaIsReadyForAdvance = true;

                //inserting into the actual turn order
                battleData.nextTurnAV.push(memTurn);
                if (battleData.isLoggyLogger) {logToBattle(battleData,{logType: "SummonOnFieldAdjustment", summonWas: "Apply", assignedTo: sourceTurn.properName, summonedBy: sourceTurn.properName, isEnemy: false, isCharacter: true,eventOverrideImage: memTurn.eventImage, AV: battleData.sumAV});}
                poke("SummonOnFieldAdjustment",battleData,{summonWas: "Apply",assignedTo: sourceTurn, summonedBy: sourceTurn, summonEvent: memTurn});
                poke("AllyCreated",battleData,{targetTurn:memTurn});
                battleActions.assignAttackTargetsEnemy(battleData);


                logicRef.skillFunctions.memTalentCritDMG(battleData,sourceTurn);

                poke("rmcMemGainedCharge",battleData,{pointsGained: 0.5,sourceString:"Memo Talent: Go, Mem, Go!"});
            },
            memTalentCritDMG(battleData,sourceTurn) {
                const logicRef = turnLogic[sourceTurn.properName];
                const ATKObjects = logicRef.ATKObjects;

                let characterName = sourceTurn.properName;
                let skillRef = ATKObjects.memTalentREF ??= ATKObjects["Memosprite Talent"]["Friends! Together!"].variant1;
                let values = ATKObjects.memTalentREFVALUES ??= battleActions.getLevelBasedParam(battleData,skillRef,sourceTurn);

                if (!ATKObjects.memTalentCritDMGSHEET) {
                    const rank = sourceTurn.rank;
                    const logicRef = turnLogic[characterName];
                    const buffRef = logicRef.buffNames;
                    ATKObjects.memTalentCritDMGSHEET = {
                        "stats": [CritDamageBase,CritDamageBaseNULL],
                        [CritDamageBase]: 0,
                        [CritDamageBaseNULL]: -0,
                        "source": "Memosprite Talent",
                        "sourceOwner": sourceTurn.properName,
                        "buffName": buffRef.memTalentCritDMG,
                        "duration": 1,
                        "AVApplied": 0,
                        "maxStacks": 1,
                        "currentStacks": 1,
                        "decay": false,
                        "expireType": null,
                        "removeOnDeath": false,
                    }
                }

                const memTurn = sourceTurn.rmcMemTURNEVENT;
                const statsRef = memTurn.statTable;
                const critDamage = statsRef[CritDamageBase] + statsRef[CritDamageBaseNULL];
                const conversion = (values[0] * critDamage) + values[1];

                // const buffCheck = sourceTurn.buffsObject[ownerSheet.name];
                const updateBuff = battleActions.updateBuff;
                const allySheet = ATKObjects.memTalentCritDMGSHEET;
                const buffCheck = sourceTurn.buffsObject[allySheet.buffName];
                const allyTurns = battleData.nameBasedTurns;

                if (!memTurn.isActive) {//if mem is off the field, then remove the buffs
                    for (let allySlot in allyTurns) {
                        const currentTurn = allyTurns[allySlot];
                        removeBuff(battleData,currentTurn,allySheet);
                    }
                    return;
                }

                if (buffCheck) {//if we have the buff
                    const statCheck = buffCheck[CritDamageBase];
                    if (statCheck === conversion) {return;}//but the amount converted is the same, then abort
                    else {//otherwise remove so we can apply the right amount
                        for (let allySlot in allyTurns) {
                            const currentTurn = allyTurns[allySlot];
                            removeBuff(battleData,currentTurn,allySheet,true,false,true);
                        }
                    }
                }

                allySheet[CritDamageBase] = conversion;
                allySheet[CritDamageBaseNULL] = -conversion;

                for (let allySlot in allyTurns) {
                    const currentTurn = allyTurns[allySlot];
                    updateBuff(battleData,currentTurn,allySheet,false,null,false,true);
                }
            },
            memTurnAttack(battleData,memoTurn) {
                // eventOwner: ownerTurn.name
                const rmcTurn = battleData.nameBasedTurns[memoTurn.eventOwner];
                const logicRef = turnLogic[rmcTurn.properName];
                const skillFunctions = logicRef.skillFunctions;

                const isEnhanced = rmcTurn.battleValues.memIsEnhanced;

                if (!isEnhanced) {skillFunctions.memBasicAttack(battleData,memoTurn,rmcTurn);}
                else {skillFunctions.memSkillAdvance(battleData,memoTurn,rmcTurn);}
            },
            memBasicAttack(battleData,memoTurn,sourceTurn) {
                const logicRef = turnLogic[sourceTurn.properName];
                const ATKObjects = logicRef.ATKObjects;

                let skillRef = ATKObjects.memBasicAttackREF ??= ATKObjects["Memosprite Skill"]["Baddies! Trouble!"].variant1;
                let values = ATKObjects.memBasicAttackREFVALUES ??= battleActions.getLevelBasedParam(battleData,skillRef,sourceTurn);

                const rank = sourceTurn.rank;
                if (!ATKObjects.memBasicAttackATKOBJECT1) {
                    const scalar = "ATK";
                    const tags = ["All","MemoSkill","Ice"];
                    const keyShortcut = basicShorthand.makeKeysArray;
                    const realDMGKeys = keyShortcut(dmgKeys,tags);
                    const realPENKeys = keyShortcut(resPENKeys,tags);
                    const realShredKeys = keyShortcut(defShredKeys,tags);
                    const realVulnKeys = keyShortcut(vulnKeys,tags);
                    const actionTags = ["Attack","MemoSkill","Summon","Memosprite"];
                    const compositeCacheTag = tags + actionTags;

                    if (skillRef.hitSplits.length > 1) {skillRef.hitSplits = skillRef.hitSplits.splice(4,1);}
                    ATKObjects.memBasicAttackATKOBJECT1 = {
                        multipliers: {
                            primary: null,
                            blast: null,
                            all: null,
                        },
                        scalar,
                        DMGTags: tags,
                        allToughness: false,
                        slot: skillRef.slot,
                        realDMGKeys,realPENKeys,realShredKeys,realVulnKeys,
                        isFUA: false,
                        // scalarSourceOverride: sourceTurn.name,
                        actionTags,compositeCacheTag,
                        bounceData: {
                            multi: values[0],
                            bounceCount: 4,
                            hitSplit: {
                                "primary": {
                                    "hitRatio": 1,
                                    "toughness": 5
                                },
                                "blast": null,
                                "all": null,
                                "allEnemiesHit": null,
                                "unknownTypers": false
                            },
                        }
                    }
                    ATKObjects.memBasicAttackATKOBJECT2 = {
                        multipliers: {
                            primary: null,
                            blast: null,
                            all: values[2],
                        },
                        scalar,
                        DMGTags: tags,
                        allToughness: false,
                        slot: skillRef.slot,
                        realDMGKeys,realPENKeys,realShredKeys,realVulnKeys,
                        isFUA: false,
                        // scalarSourceOverride: sourceTurn.name,
                        actionTags,compositeCacheTag,
                    }
                }
                const ATKObject1 = ATKObjects.memBasicAttackATKOBJECT1;
                const ATKObject2 = ATKObjects.memBasicAttackATKOBJECT2;

                if (battleData.isLoggyLogger) {logToBattle(battleData,{logType: "MemoSkillStart", name:memoTurn.properName, target:"enemy", isEnemy: false, isCharacter: true, AV: battleData.sumAV, isEnhanced: false, actionSlot:skillRef.slot, eventOverrideImage: memoTurn.eventImage});}
                poke("MemoSkillStart",battleData,{sourceTurn:memoTurn});

                let chainedAttackRef = null;
                const chainedAttack = battleActions.attackWrapperChained;
                
                chainedAttackRef = chainedAttack(battleData,skillRef,memoTurn,ATKObject1,"Start",chainedAttackRef);
                chainedAttack(battleData,skillRef,memoTurn,ATKObject2,"End",chainedAttackRef);
                battleActions.updateEnergy(battleData,skillRef.energyRegen,sourceTurn);

                poke("MemoSkillEnd",battleData,{sourceTurn:memoTurn});
                poke("rmcMemGainedCharge",battleData,{pointsGained: 0.05,sourceString:"Petite Parable"});
            },
            memSkillAdvance(battleData,memoTurn,sourceTurn) {
                const logicRef = turnLogic[sourceTurn.properName];
                const ATKObjects = logicRef.ATKObjects;

                let skillRef = ATKObjects.memSkillAdvanceREF ??= ATKObjects["Memosprite Skill"]["Lemme! Help You!"].variant1;
                let values = ATKObjects.memSkillAdvanceREFVALUES ??= battleActions.getLevelBasedParam(battleData,skillRef,sourceTurn);

                const rank = sourceTurn.rank;
                if (!ATKObjects.rmcMemsSupportSHEET) {
                    const buffRef = logicRef.buffNames;
                    ATKObjects.rmcMemsSupportSHEET = {
                        "stats": [CritRateBase],
                        [CritRateBase]: rank >= 1 ? 0.10 : 0,
                        "source": "Memosprite Skill",
                        "sourceOwner": sourceTurn.properName,
                        "buffName": buffRef.memsSupport,
                        "duration": 3,
                        "AVApplied": 0,
                        "maxStacks": 1,
                        "currentStacks": 1,
                        "decay": false,
                        "expireType": "EndTurn",
                        "removeOnDeath": false,
                        expireFunction: logicRef.skillFunctions.memsSupportExpired,
                        expireParam: {sourceTurn:sourceTurn.name,targetTurn:null}
                    }
                    ATKObjects.rmcMemsSupportMemoSHEET = {
                        "stats": [CritRateBase],
                        [CritRateBase]: rank >= 1 ? 0.10 : 0,
                        "source": "Memosprite Skill",
                        "sourceOwner": sourceTurn.properName,
                        "buffName": buffRef.memsSupportMemo,
                        "duration": 1,
                        "AVApplied": 0,
                        "maxStacks": 1,
                        "currentStacks": 1,
                        "decay": false,
                        "expireType": null,
                        "removeOnDeath": false,
                    }
                }

                if (battleData.isLoggyLogger) {logToBattle(battleData,{logType: "MemoSkillStart", name:memoTurn.properName, target:"char1", isEnemy: false, isCharacter: true, AV: battleData.sumAV, isEnhanced: true, actionSlot:skillRef.slot, eventOverrideImage: memoTurn.eventImage});}
                poke("MemoSkillStart",battleData,{sourceTurn:memoTurn});

                poke("rmcMemGainedCharge",battleData,{pointsGained: -1,sourceString:"Advance used: Lemme! Help You!"});

                const char1 = battleData.nameBasedTurns.char1;
                poke("TargetAlly",battleData,{targetType:"Single", sourceTurn, targetTurn:char1, targetSkill:skillRef.slot});
                battleActions.actionAdvance(1,char1,battleData,"Mem's Support");

                const buffSheet = ATKObjects.rmcMemsSupportSHEET;
                buffSheet.expireParam.targetTurn = char1.name;


                const updateBuff = battleActions.updateBuff;
                updateBuff(battleData,char1,buffSheet);
                char1.rmcCharHasMemSupport = true;
                //TODO: for now we force char1 as the assumed target of mem's support, but remember to hook this up as a parameter for user defined conditions later

                const hasMemo = char1.memospriteEventRef;
                if (rank>=1 && hasMemo) {
                    const memoTurn = char1[hasMemo];
                    const memoSheet = ATKObjects.rmcMemsSupportMemoSHEET;
                    updateBuff(battleData,memoTurn,memoSheet);
                    memoTurn.rmcCharHasMemSupport = true;
                }

                battleActions.updateEnergy(battleData,skillRef.energyRegen,sourceTurn);
                poke("MemoSkillEnd",battleData,{sourceTurn:memoTurn});
                sourceTurn.battleValues.memIsEnhanced = false;
            },
            memsSupportExpired(battleData,expireParam) {
                const ownerSlot = expireParam.targetTurn;
                const rmcSlot = expireParam.sourceTurn;

                const allyTurns = battleData.nameBasedTurns;
                const rmcTurn = allyTurns[rmcSlot];
                // {sourceTurn:sourceTurn.name,targetTurn:null}
                const ownerTurn = allyTurns[ownerSlot];
                ownerTurn.rmcCharHasMemSupport = false;

                if (rmcTurn.rank >= 1) {
                    const hasMemo = ownerTurn.memospriteEventRef;
                    if (!hasMemo) {return;}

                    const logicRef = turnLogic[ownerTurn.properName];
                    const ATKObjects = logicRef.ATKObjects;

                    const buffSheet = ATKObjects.rmcMemsSupportMemoSHEET;
                    const memoTurn = ownerTurn[hasMemo];
                    removeBuff(battleData,memoTurn,buffSheet);
                    memoTurn.rmcCharHasMemSupport = false;
                }
            },
            memDeathFunction(battleData,deathTurn,deathParam) {
                const ownerTurn = battleData.nameBasedTurns[deathTurn.eventOwner];

                deathTurn.currentHP = 0;
                deathTurn.isDead = true;
                deathTurn.isActive = false;
                ownerTurn.battleValues.memCharge = 0;
                const logicRef = turnLogic[ownerTurn.properName];
                const valuesRef = ownerTurn.battleValues;

                //remove nether from the turn order
                const eventName = deathTurn.properName;
                const nextAV = battleData.nextTurnAV;
                for (let i=0;i<nextAV.length;i++) {
                    let deathTurn = nextAV[i];
                    if (deathTurn.properName === eventName) {
                        nextAV.splice(i, 1);
                        break;//we found the event to remove, so we need to obv remove it now
                    }
                }
                //removal from actual lineup positions(for blast factors on enemy to ally attacks)
                const positions = battleData.allyPositions;
                for (let i=0;i<positions.length;i++) {
                    let deathTurn = positions[i];
                    if (deathTurn.properName === eventName) {
                        positions.splice(i, 1);
                        break;//we found the event to remove, so we need to obv remove it now
                    }
                }

                
                ownerTurn.activeSummons -= 1;
                ownerTurn.activeMemosprites -= 1;
                valuesRef.memIsActive = false;

                if (battleData.isLoggyLogger) {logToBattle(battleData,{logType: "SummonOnFieldAdjustment", summonWas: "Remove", assignedTo: ownerTurn.properName, summonedBy: ownerTurn.properName, isEnemy: false, isCharacter: true,eventOverrideImage: deathTurn.eventImage, AV: battleData.sumAV});}
                battleActions.assignAttackTargetsEnemy(battleData);


                poke("SummonOnFieldAdjustment",battleData,{summonWas: "Remove",assignedTo: ownerTurn, summonedBy: ownerTurn, summonEvent: deathTurn});
                poke("AllyDied",battleData,{targetTurn:deathTurn});

                battleActions.actionAdvance(0.25,ownerTurn,battleData,"Mem Died");
            },
            rmcUltimate(battleData,sourceTurn) {
                const logicRef = turnLogic[sourceTurn.properName];
                const ATKObjects = logicRef.ATKObjects;

                let characterName = sourceTurn.properName;
                const valuesRef = sourceTurn.battleValues;
                let skillRef = ATKObjects.rmcUltimateREF ??= ATKObjects.Ultimate["Together, Mem!"].variant1;
                
                const rank = sourceTurn.rank;


                if (!ATKObjects.rmcUltimateATKOBJECT) {
                    let values = ATKObjects.rmcUltimateREFVALUES ??= battleActions.getLevelBasedParam(battleData,skillRef,sourceTurn);

                    const scalar = "ATK";
                    // const tags = ["All","Basic","Lightning"];
                    const tags = ["All","Ice","Ultimate"];
                    const keyShortcut = basicShorthand.makeKeysArray;
                    const realDMGKeys = keyShortcut(dmgKeys,tags);
                    const realPENKeys = keyShortcut(resPENKeys,tags);
                    const realShredKeys = keyShortcut(defShredKeys,tags);
                    const realVulnKeys = keyShortcut(vulnKeys,tags);
                    //realDMGKeys,realPENKeys,realShredKeys,realVulnKeys
                    // console.log(values[0])
                    // const actionTags = ["Basic","Attack"];
                    const actionTags = ["Attack","Ultimate"];
                    const compositeCacheTag = tags + actionTags;
                    ATKObjects.rmcUltimateATKOBJECT = {
                        multipliers: {
                            primary: null,
                            blast: null,
                            all: 2.25,//values[0],  //TODO: remove later, was just lining up trace values
                        },
                        scalar,
                        DMGTags: tags,
                        allToughness: false,
                        slot: skillRef.slot,
                        realDMGKeys,realPENKeys,realShredKeys,realVulnKeys,
                        actionTags,
                        compositeCacheTag,
                        isFUA: false,
                    }
                }
                let ATKObject = ATKObjects.rmcUltimateATKOBJECT;

                const energy = battleActions.updateEnergy;
                energy(battleData,-sourceTurn.maxEnergy,sourceTurn);

                const summonUp = sourceTurn.battleValues.memIsActive;
                if (!summonUp) {logicRef.skillFunctions.addMemToField(battleData,sourceTurn);}

                poke("rmcMemGainedCharge",battleData,{pointsGained: 0.4,sourceString:"RMC: Ultimate used"});

                const oldValue = valuesRef.epicStacks;
                valuesRef.epicStacks = Math.min(2,valuesRef.epicStacks + 1);
                if (battleData.isLoggyLogger) {logToBattle(battleData,{logType: "GenericAction", source:"Ultimate", bodyText: `Epic (RMC): ${oldValue} --> ${valuesRef.epicStacks}`});}

                const memTurn = sourceTurn.rmcMemTURNEVENT;
                battleActions.attackWrapper(battleData,skillRef,memTurn,ATKObject);
                energy(battleData,skillRef.energyRegen,sourceTurn);

                sourceTurn.ultyQueued = false;
            },
            rmcTechnique(battleData,target,sourceTurn) {
                const logicRef = turnLogic[sourceTurn.properName];
                const ATKObjects = logicRef.ATKObjects;

                let characterName = sourceTurn.properName;
                // let charSlot = sourceTurn.name;
                // let skillPathing = characters[characterName].skills;
                let skillRef = ATKObjects.rmcTechREF ??= ATKObjects.Technique["Memories Back as Echoes"].variant1;
                skillRef.element = "Ice";
                //The actual technique doesn't have a standard element associated with the ability use, this is the first time I've ever actually seen that
                //TODO: later, go through and in the parsing, if an element is undefined, inherit the user's predefined element
                //the bug in this case is purely a UI quirk

                let values = ATKObjects.rmcTechREFVALUES ??= battleActions.getLevelBasedParam(battleData,skillRef,sourceTurn);
                if (!ATKObjects.rmcTechATKObject) {
                    const scalar = "ATK";
                    const tags = ["All","Technique","Ice"];
                    const actionTags = ["Technique","Attack"];
                    const keyShortcut = basicShorthand.makeKeysArray;
                    const realDMGKeys = keyShortcut(dmgKeys,tags);
                    const realPENKeys = keyShortcut(resPENKeys,tags);
                    const realShredKeys = keyShortcut(defShredKeys,tags);
                    const realVulnKeys = keyShortcut(vulnKeys,tags);
                    const compositeCacheTag = tags + actionTags;
                    //realDMGKeys,realPENKeys,realShredKeys,realVulnKeys
                    ATKObjects.rmcTechATKObject = {
                        multipliers: {
                            primary: null,
                            blast: null,
                            all: values[2],
                        },
                        scalar,
                        DMGTags: tags,
                        allToughness: false,
                        slot: skillRef.slot,
                        realDMGKeys,realPENKeys,realShredKeys,realVulnKeys,
                        actionTags,compositeCacheTag
                    }
                }
                const ATKObject = ATKObjects.rmcTechATKObject;

                if (battleData.isLoggyLogger) {logToBattle(battleData,{logType: "TechniqueStart", name:characterName, target, isEnemy: false, isCharacter: true, AV: battleData.sumAV, actionSlot:skillRef.slot});}
                poke("TechniqueStart",battleData,{sourceTurn});

                const enemyPositions = battleData.enemyPositions;
                const actionAdvance = battleActions.actionAdvance;
                for (let enemy of enemyPositions) {
                    actionAdvance(-values[1],enemy,battleData,"RMC Technique Delay");
                }
                battleActions.attackWrapper(battleData,skillRef,sourceTurn,ATKObject);

                poke("TechniqueEnd",battleData,{sourceTurn});
                // poke("SkillEnd",battleData,{source:"Archer"});
            },
        },
        "listeners": [//rmcMemTURNEVENT
            {
                "trigger": "BattlePrep",
                condition(battleData,generalInfo) {
                    let ownerTurn = this.ownerTurn;

                    const logicRef = turnLogic[ownerTurn.properName];
                    const ATKObjects = logicRef.ATKObjects;

                    // const rank = ownerTurn.rank;
                    // const charValuesRef = ownerTurn.battleValues;
                    // const buffNames = logicRef.buffNames;



                    // battleData.nameIndex[properName] = characterEntry;
                    const rmcMenuStats = [...battleData.menuStats[ownerTurn.name]];
                    let skillRef = ATKObjects.rmcTalentREF ??= ATKObjects["Talent"]["Almighty Companion"].variant1;
                    let values = ATKObjects.rmcTalentREFVALUES ??= battleActions.getLevelBasedParam(battleData,skillRef,ownerTurn);
                    const SPDScalar = values[0];
                    const HPScalar = values[1];
                    const flatHP = values[3];
                    Object.assign(rmcMenuStats,{
                        "SPDBase": SPDScalar,
                        "SPDFlat": 0,
                        "SPD%": 0,

                        "HPBase": rmcMenuStats.HPBase * HPScalar,
                        "HPFlat": rmcMenuStats.HPFlat * HPScalar + flatHP,
                        "HP%": rmcMenuStats["HP%"],
                        "LVL": 80,

                        "AggroBase": characters[ownerTurn.properName]?.baseSummonInfo?.BaseAggro ?? 0,
                    });


                    let AggroStats = calcs.getAggroFinal(rmcMenuStats);
                    let SPDStats = calcs.getSPDFinal(rmcMenuStats);
                    let HPStats = calcs.getHPFinal(rmcMenuStats);
                    const skillFunctionsRef = logicRef.skillFunctions;
                    const memTurnAttack = skillFunctionsRef.memTurnAttack;
                    const ActionEntry = {
                        AV:SPDStats.SPDActionValue,
                        AVBase:SPDStats.SPDActionValue,
                        SPD:SPDStats.SPDFinal,

                        currentHP: HPStats.HPFinal,
                        maxHP: HPStats.HPFinal,

                        currentAggro: AggroStats.AggroFinal,
                        baseAggro: AggroStats.AggroBaseFinal,

                        maxEnergy: ownerTurn.maxEnergy,

                        actionCounter: 0,
                        turnState: 0,
                        debuffCounter: 0,
                        DOTCounter: 0,
                        activeFinalMultipliers: {},
                        finalMultiCounter: 0,
                        shieldCounter: 0,
                        shieldValueCurrent: 0,
                        shieldValueMax: 0,
                        activeShields: {},

                        properName: "Mem",
                        name: "rmcMemosprite",
                        
                        statTable: rmcMenuStats,
                        statTableONHIT: new Array(greatTableSize).fill(0),
                        buffsObject: {},
                        teamDebuffs: {},
                        buffsStartTurn: [],
                        buffsEndTurn: [],
                        tagSpecific: {},
                        cacheTagValues: {
                            "UpdateStatDamage": {
                                //compositeCacheTag will define itself here when used, and the tag will be the key
                            },
                            "UpdateStatDEFShred": {},
                            "UpdateStatPEN": {},
                            "UpdateStatVulnerable": {},
                            "UpdateStatCritRate": {},
                            "UpdateStatCritDamage": {},
                        },
                        isDead: false,
                        rank: ownerTurn.rank,
                        element: ownerTurn.element,
                        path: null,
                        cantBeTargeted: false,
                        diesWithOwner: true,
                        isUniqueEvent: true,
                        isSummon: true,
                        isMemosprite: true,
                        eventOwner: ownerTurn.name,//pass through the slot of the character who owns the event, avoids cyclic issues when logging
                        uniqueEventFunction: memTurnAttack,//logicRef.skillFunctions.combustionExpired,
                        eventImage: graphs.summonCustomImages["Mem"],
                        deathFunction: skillFunctionsRef.memDeathFunction,
                        deathParam: ownerTurn.name,
                    };
                    battleData.nameIndex["Mem"] = "rmcMemosprite";

                    // summaryTurns[properName] = 0;
                    battleData.nameBasedTurns["rmcMemosprite"] = ActionEntry;
                    ownerTurn.rmcMemTURNEVENT = ActionEntry;
                    battleData.declaredMemosprites.push(ActionEntry);
                    battleData.battleTotal.Turns[ActionEntry.properName] = 0;
                    ownerTurn.summonEventRef = "rmcMemTURNEVENT";
                    ownerTurn.memospriteEventRef = "rmcMemTURNEVENT";
                    
                    if (battleData.isLoggyLogger) {logToBattle(battleData,{logType: "GenericAction", source:"Mem creation", bodyText: `Memosprite "${ActionEntry.properName}" entity constructed`});}
                },
                "target": "self",
                "listenerName": "RMC Mem turn construction",
                "ownerTurn": {},
            },
            {
                "trigger": "rmcMemGainedCharge",
                condition(battleData,generalInfo) {
                    // poke("rmcMemGainedCharge",battleData,{pointsGained: 1,sourceString:"asdf"});
                    let ownerTurn = this.ownerTurn;
                    // memCharge
                    //NEVER need to check the source turn on this, bc only saber can poke this, and only she will ever have listeners for this
                    const pointsGained = generalInfo.pointsGained;

                    const memTurn = ownerTurn.rmcMemTURNEVENT;
                    if (!memTurn.isActive) {return;}

                    // const logicRef = turnLogic[ownerTurn.properName];
                    const valuesRef = ownerTurn.battleValues;
                    const oldValue = valuesRef.memCharge;
                    valuesRef.memCharge = Math.min(1, valuesRef.memCharge + pointsGained);
                    if (oldValue === valuesRef.memCharge) {return;}
                    const resoRef = valuesRef.memCharge;
                    const sourceString = generalInfo.sourceString;
                    if (pointsGained && battleData.isLoggyLogger) {logToBattle(battleData,{logType: "GenericAction", source:this.listenerName, bodyText: `Charge (Mem): ${(oldValue*100).toLocaleString()}% --> ${(resoRef*100).toLocaleString()}% [${sourceString}]`});}
                    if (pointsGained<0) {return;}//if all we did was remove points, we can end it here now that we reached the log point


                    let maxCheck = valuesRef.memCharge === 1;

                    if (maxCheck) {
                        
                        battleActions.actionAdvance(1,memTurn,battleData,"Friends! Together!");
                        ownerTurn.battleValues.memIsEnhanced = true;
                    }
                },
                "target": "self",
                "listenerName": "Mem Charge Handler",
                "ownerTurn": {},
            },
            {
                "trigger": "AllyDMGEnd",
                condition(battleData,generalInfo) {

                    //DMGTotalEndBreak
                    // DMGTotalEnd,DMGTotalCrit,DMGTotalAVG
                    // DMGTotalEnd,DMGTotalAVG

                    const sourceTurn = generalInfo.sourceTurn;
                    if (!sourceTurn.rmcCharHasMemSupport) {return;}//skip characters that obv don't have mem's support

                    const ownerTurn = this.ownerTurn;
                    const logicRef = turnLogic[ownerTurn.properName];
                    const ATKObjects = logicRef.ATKObjects;

                    
                    let trueBase = null;
                    let trueCrit = null;
                    let trueAVG = null;
                    const targetTurn = generalInfo.targetTurn;

                    if (generalInfo.DMGTotalEndBreak) {
                        trueBase = generalInfo.DMGTotalEndBreak;
                    }
                    else if (generalInfo.DMGTotalCrit) {
                        trueBase = generalInfo.DMGTotalEnd;
                        trueCrit = generalInfo.DMGTotalCrit;
                        trueAVG = generalInfo.DMGTotalAVG;
                    }
                    else if (generalInfo.DMGTotalAVG) {
                        trueBase = generalInfo.DMGTotalEnd;
                        trueAVG = generalInfo.DMGTotalAVG;
                    }
                    else {
                        trueBase = generalInfo.DMGTotalEnd;
                    }

                    let values = ATKObjects.memSkillAdvanceREFVALUES;

                    let addedMulti = 0;
                    if (!sourceTurn.isUniqueEvent || sourceTurn.isSummon) {
                        const energyMax = sourceTurn.maxEnergy;
                        if (energyMax === 0) {
                            addedMulti += sourceTurn.rank >= 4 ? 0.06 : 0;
                        }
                        else {
                            const validEnergy = energyMax - 100;
                            addedMulti += validEnergy > 0 ? Math.min(0.20, Math.floor(validEnergy/10) * 0.02) : 0;
                        }
                    }
                    //the memosprite does inherit the max energy value of the owner, obv they just can't get energy for themselves
                    //bc of this specificially, I went back and added the maxEnergy param on all memos when their turns are constructed

                    const trueDMGMulti = values[0] + addedMulti;
                    battleActions.trueDMGHitWrapper(battleData,ownerTurn,targetTurn,trueDMGMulti,trueBase,trueCrit,trueAVG,"Mem's Support");
                },
                "target": "self",
                "listenerName": "Mem's support true dmg handling",
                "ownerTurn": {},
            },
            {
                "trigger": "EnergyChanged",
                condition(battleData,generalInfo) {
                    // poke("EnergyChanged",battleData,{sourceTurn,newAmount,overFill,amount});
                    // const ownerTurn = this.ownerTurn;
                    const energyAmount = generalInfo.newAmount - generalInfo.overFill;
                    if (energyAmount <= 0) {return;}//we only care about positive energy gains
                    //this does count energy gained from ANY source including enemy attacks
                    //however it does NOT ever factor overflow energy.
                    //TODO: make sure that saber overflow energy regen post ult can factor for this, bc it should.

                    const conversion = energyAmount/1000;
                    poke("rmcMemGainedCharge",battleData,{pointsGained: conversion,sourceString:"Ally Gained Energy"});
                },
                "target": "self",
                "listenerName": "Mem charge ally gained energy listener",
                "ownerTurn": {},
            },
            {
                "trigger": "PreBattleEntersCombat",
                condition(battleData,generalInfo) {
                    let ownerTurn = this.ownerTurn;
                    battleActions.actionAdvance(0.30,ownerTurn,battleData,"Rhapsode's Scepter");
                },
                "target": "self",
                "listenerName": "Rhapsode's Scepter: battlestart action advance",
                "ownerTurn": {},
            },
            {
                "trigger": "SummonOnFieldAdjustment",
                condition(battleData,generalInfo) {
                    // poke("SummonOnFieldAdjustment",battleData,{summonWas: "Apply",assignedTo: ownerTurn, summonedBy: ownerTurn, summonEvent: ownerTurn.topazNUMBYTURNEVENT});
                    const ownerTurn = this.ownerTurn;
                    const summonAssignedTo = generalInfo.assignedTo;
                    const memTurn = ownerTurn.rmcMemTURNEVENT;
                    const summonWas = generalInfo.summonWas;
                    const summonEvent = generalInfo.summonEvent;
                    
                    if (summonWas != "Apply" || summonAssignedTo.properName != ownerTurn.properName || summonEvent.properName != memTurn.properName) {return;}//if the summon is assigned to someone who doesn't own the set, then it doesn't matter
                    poke("rmcMemGainedCharge",battleData,{pointsGained: 0.4,sourceString:"Rhapsode's Scepter"});

                    battleActions.removeListenerInBattle(battleData,this.listenerName,this.trigger);
                    //since it only applies to the very first summon, we have to remove this listener from the battle state
                    //so it doesn't try to evaluate every single summon on field adjustment for the rest of the fight
                },
                "target": "self",
                "listenerName": "Rhapsode's Scepter - first summon only charge gain",
                "ownerTurn": {},
            },
            {
                "trigger": "UpdateStatCritDamage",//CritDamage stat family
                condition(battleData,generalInfo) {
                    let ownerTurn = this.ownerTurn;
                    let sourceTurn = generalInfo.sourceTurn;
                    const memTurn = ownerTurn.rmcMemTURNEVENT;
                    if (sourceTurn.name != memTurn.name) {return;}

                    const memTalentCritDMG = this.memTalentCritDMG ??= turnLogic[ownerTurn.properName].skillFunctions.memTalentCritDMG;
                    memTalentCritDMG(battleData,ownerTurn);
                },
                "target": "self",
                "listenerName": "Memo talent - mem's crit dmg updated",
                "ownerTurn": {},
            },
            {
                "trigger": "UltimateReady",
                condition(battleData,generalInfo) {
                    let ownerTurn = this.ownerTurn;
                    if (ownerTurn.ultyQueued) {return;}

                    let energyCheck = ownerTurn.currentEnergy === ownerTurn.maxEnergy;
                    let otherObscureCondition = energyCheck ? checkUlty(battleData,ownerTurn) : false;

                    if (otherObscureCondition) {
                        ownerTurn.ultyQueued = true;

                        const queueObject = this.queueObject ??= {
                            attack: turnLogic[ownerTurn.properName].skillFunctions.rmcUltimate,
                            target: this.target,
                            name: this.listenerName,
                            properName: ownerTurn.properName,
                            sourceTurn: null
                        }
                        queueObject.sourceTurn = ownerTurn;
                        battleActions.queueUltimateUse(battleData,queueObject);
                    }
                },
                "target": "self",
                "listenerName": "Trailblazer: Remembrance - Ultimate queued",
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
                    let dimensionUsed = battleData.dimensionTechniqueUsed;
                    if (useTechnique && !dimensionUsed && battleData.techniquesAllowed) {
                        const rmcTechnique = this.rmcTechnique ??= logicRef.skillFunctions.rmcTechnique
                        rmcTechnique(battleData,"enemy",ownerTurn);
                        battleData.dimensionTechniqueUsed = true;
                    }
                },
                "target": "self",
                "listenerName": "Trailblazer: Remembrance -  Technique",
                "ownerTurn": {},
            },
        ],
        "eidolonListeners": {
            1: [],
            2: [
                {
                    "trigger": "ActionEnd",
                    condition(battleData,generalInfo) {
                        let ownerTurn = this.ownerTurn;
                        let sourceTurn = generalInfo.sourceTurn;
                        const memTurn = ownerTurn.rmcMemTURNEVENT;
                        if (!sourceTurn.isMemosprite || sourceTurn.properName === memTurn.properName || ownerTurn.e2EnergyAlreadyProcd) {return;}

                        battleActions.updateEnergy(battleData,8,sourceTurn,false,"Gleaner of the Past");
                        ownerTurn.e2EnergyAlreadyProcd = true;
                    },
                    "target": "self",
                    "listenerName": "E4 energy regen - ally memosprite took action",
                    "ownerTurn": {},
                },
                {
                    "trigger": "StartTurn",
                    condition(battleData,generalInfo) {
                        let ownerTurn = this.ownerTurn;
                        if (ownerTurn.turnState) {ownerTurn.e2EnergyAlreadyProcd = false;}
                    },
                    "target": "self",
                    "listenerName": "E4 energy regen turn start reset",
                    "ownerTurn": {},
                },
            ],
            3: [],
            4: [
                //TODO: I have action as a bundled event, but not active ability use, why not. Add that later
                //I'm pretty sure aggy E2 also relies on active ability use, and for some reason I defined every ability there as well
                {
                    "trigger": "BasicATKStart",
                    condition(battleData,generalInfo) {
                        let ownerTurn = this.ownerTurn;
                        const sourceTurn = generalInfo.sourceTurn;
                        if (sourceTurn.isEnemy) {return;}
                        if (sourceTurn.maxEnergy === 0) {poke("rmcMemGainedCharge",battleData,{pointsGained: 0.03,sourceString:"E4 - ally ability with 0 max energy"});}
                    },
                    "target": "self",
                    "listenerName": "E4 ally ability (Basic ATK)",
                    "ownerTurn": {},
                },
                {
                    "trigger": "SkillStart",
                    condition(battleData,generalInfo) {
                        let ownerTurn = this.ownerTurn;
                        const sourceTurn = generalInfo.sourceTurn;
                        if (sourceTurn.isEnemy) {return;}
                        if (sourceTurn.maxEnergy === 0) {poke("rmcMemGainedCharge",battleData,{pointsGained: 0.03,sourceString:"E4 - ally ability with 0 max energy"});}
                    },
                    "target": "self",
                    "listenerName": "E4 ally ability (Skill)",
                    "ownerTurn": {},
                },
                {
                    "trigger": "UltimateStart",
                    condition(battleData,generalInfo) {
                        let ownerTurn = this.ownerTurn;
                        const sourceTurn = generalInfo.sourceTurn;
                        if (sourceTurn.isEnemy) {return;}
                        if (sourceTurn.maxEnergy === 0) {poke("rmcMemGainedCharge",battleData,{pointsGained: 0.03,sourceString:"E4 - ally ability with 0 max energy"});}
                    },
                    "target": "self",
                    "listenerName": "E4 ally ability (Ultimate)",
                    "ownerTurn": {},
                },
                {
                    "trigger": "MemoSkillStart",
                    condition(battleData,generalInfo) {
                        let ownerTurn = this.ownerTurn;
                        const sourceTurn = generalInfo.sourceTurn;
                        if (sourceTurn.isEnemy) {return;}
                        if (sourceTurn.maxEnergy === 0) {poke("rmcMemGainedCharge",battleData,{pointsGained: 0.03,sourceString:"E4 - ally ability with 0 max energy"});}
                    },
                    "target": "self",
                    "listenerName": "E4 ally ability (Memo Skill)",
                    "ownerTurn": {},
                },
            ],
            5: [],
            6: [
                {
                    "trigger": "PreBattleEntersCombat",
                    condition(battleData,generalInfo) {
                        let ownerTurn = this.ownerTurn;
    
                        const buffSheet = this.buffSheet ??= {
                            "stats": [CritRateBase],
                            [CritRateBase]: 1,
                            "source": "E6",
                            "sourceOwner": ownerTurn.properName,
                            "buffName": turnLogic[ownerTurn.properName].buffNames.e6UltCrit,
                            "duration": 1,
                            "AVApplied": 0,
                            "maxStacks": 1,
                            "currentStacks": 1,
                            "decay": false,
                            "expireType": null,
                            "actionTags": ["Ultimate"]
                        }
                        const memTurn = ownerTurn.rmcMemTURNEVENT;
    
                        battleActions.updateBuff(battleData,memTurn,buffSheet);
                    },
                    "target": "self",
                    "listenerName": "E6 ult crit bonus",
                    "ownerTurn": {},
                },
            ],
        },
        "ATKObjects": {},
        "listenersBattle": [],
        "buffsBattle": {},
        "buffsBattleTemp": {},
        "characterValues": {
            "memIsActive": false,
            "memCharge": 0,
            "memIsEnhanced": false,
            "epicStacks": 0,
        },
        "useTechnique": true,
        "techniqueType": "Dimension",
        "buffNames": {
            "memTalentCritDMG": "Friends! Together!",
            "memsSupport": "Mem's Support",
            "memsSupportMemo": "Mem's Support (Memosprite)",
            "e6UltCrit": "Bearer of the Revelation",
        },
        "characterValuesBattle": {},
    },
    //Preservation
    "Dan Heng • Permansor Terrae": {//ATK OBJECTS DONE
        logic(thisTurn,battleData) {
            // let skillPointsCheck = battleData.skillPointCurrent > 4;
            // let ultySoon = (thisTurn.currentEnergy - thisTurn.currentEnergy) <= 30;//TODO: need to make it so this will account for energy regen rate too
            // const shortRef = this;
            // const battleValues = shortRef.characterValuesBattle;
            // let actionUsed = false;
            // let statCalls = shortRef.characterValuesBattle;
            // let shortCalls = shortRef.skillFunctions;

            let currentSP = battleData.skillPointCurrent;
            let minimum = currentSP >= 1;

            if (minimum && checkSkill(battleData,thisTurn)) {
                const returnSkillCall = this.returnSkillCall ??= {action: "Skill", points: -1, actionCall: this.skillFunctions.dhptSkill, target: "self", endTurn: true};
                return returnSkillCall;
            }

            const returnBasicCall = this.returnBasicCall ??= {action: "BasicATK", points: 1, actionCall: this.skillFunctions.dhptBasic, target: "enemy", endTurn: true};
            return returnBasicCall;
        },
        "skillFunctions": {
            dhptBasic(battleData,target,sourceTurn) {
                const logicRef = turnLogic[sourceTurn.properName];
                const ATKObjects = logicRef.ATKObjects;

                let skillRef = ATKObjects.dhptBasicREF ??= ATKObjects["Basic ATK"]["Aegis Vitae"].variant1;
                if (!ATKObjects.dhptBasicATKOBJECT) {
                    let values = battleActions.getLevelBasedParam(battleData,skillRef,sourceTurn);
                    const scalar = "ATK";
                    const tags = ["All","Basic","Physical"];
                    const actionTags = ["Basic","Attack"];
                    const keyShortcut = basicShorthand.makeKeysArray;
                    const realDMGKeys = keyShortcut(dmgKeys,tags);
                    const realPENKeys = keyShortcut(resPENKeys,tags);
                    const realShredKeys = keyShortcut(defShredKeys,tags);
                    const realVulnKeys = keyShortcut(vulnKeys,tags);
                    const logicRef = turnLogic[sourceTurn.properName];
                    const compositeCacheTag = tags + actionTags;
                    //realDMGKeys,realPENKeys,realShredKeys,realVulnKeys
                    ATKObjects.dhptBasicATKOBJECT = {
                        multipliers: {
                            primary: values[0] * 0.6,//TODO: remove trace level adjustment later
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
                let ATKObject = ATKObjects.dhptBasicATKOBJECT;

                if (battleData.isLoggyLogger) {logToBattle(battleData,{logType: "BasicATKStart", name:sourceTurn.properName, target, isEnemy: false, isCharacter: true, AV: battleData.sumAV, actionSlot:skillRef.slot});}
                poke("BasicATKStart",battleData,{sourceTurn});
                battleActions.attackWrapper(battleData,skillRef,sourceTurn,ATKObject);
                battleActions.updateEnergy(battleData,skillRef.energyRegen,sourceTurn);
                poke("BasicATKEnd",battleData,{sourceTurn});
            },
            // ownerTurn.battleValues.bondmateSlot
            // ownerTurn.dhptSouldragonTURNEVENT
            dhptSkill(battleData,target,sourceTurn) {
                const characterName = sourceTurn.properName;
                const logicRef = turnLogic[characterName];
                const ATKObjects = logicRef.ATKObjects;

                let skillRef = ATKObjects.dhptSkillShieldREF ??= ATKObjects.Skill["Terra Omnibus"].variant1;
    
                const char1 = battleData.nameBasedTurns.char1;
                if (battleData.isLoggyLogger) {logToBattle(battleData,{logType: "SkillStart", name:characterName, target:char1.properName, isEnemy: false, isCharacter: true, AV: battleData.sumAV, actionSlot:skillRef.slot});}
                poke("SkillStart",battleData,{sourceTurn});


                // poke("TargetShield",battleData,{targetType:"Team", sourceTurn, targetTurn:null, targetSkill:skillRef.slot});
                //moved this into the actual shielf function, makes more sense there
                
                poke("TargetAlly",battleData,{targetType:"Single", sourceTurn, targetTurn:char1, targetSkill:skillRef.slot});

                const skillFunctions = logicRef.skillFunctions;
                const shieldCall = skillFunctions.dhptSkillShield;
                // //more than one thing can reference the skill shield itself, but may not be a skill cast
                shieldCall(battleData,sourceTurn);

                
                const dragonTurn = sourceTurn.dhptSouldragonTURNEVENT;
                
                if (!dragonTurn.isActive) {
                    skillFunctions.addDragonToOrder(battleData,sourceTurn,char1);
                    sourceTurn.battleValues.bondmateSlot = char1.name;
                }
                //TODO: come back later and add a hook in for user defined functions to determine who actually gets bondmate other than char1,
                //and when I do, just add a benediction-type adjustment for the most recent application of the skill, bc that code already exists on tingyun it's just not used
                
                skillFunctions.bondmateATKConversion(battleData,sourceTurn,char1);
                


                // battleActions.attackWrapper(battleData,skillRef,sourceTurn,ATKObject);
                battleActions.updateEnergy(battleData,skillRef.energyRegen,sourceTurn);
                battleActions.nonViolentWrapper(battleData,skillRef,characterName);
                poke("SkillEnd",battleData,{sourceTurn});
            },
            bondmateATKConversion(battleData,sourceTurn,targetTurn) {
                const logicRef = turnLogic[sourceTurn.properName];
                const ATKObjects = logicRef.ATKObjects;

                if (!ATKObjects.dhptBondmateATKSHEET) {
                    const rank = sourceTurn.rank;
                    let buffName = turnLogic[sourceTurn.properName].buffNames.bondmateATK;
                    // greatTableIndex
                    // greatTableKeys
                    ATKObjects.dhptBondmateATKSHEET = {
                        "stats": [ATKFlat,ATKFlatNULL,ResistanceAllPEN,DEFShredAll],
                        [ATKFlat]: 0,
                        [ATKFlatNULL]: -0,
                        [ResistanceAllPEN]: rank >= 1 ? 0.18 : 0,
                        [DEFShredAll]: rank >= 6 ? 0.12 : 0,
                        "source": "Trace",
                        "sourceOwner": sourceTurn.properName,
                        "buffName": buffName,
                        "duration": 1,
                        "AVApplied": 0,
                        "maxStacks": 1,
                        "currentStacks": 1,
                        "decay": false,
                        "expireType": null,
                    }
                }
                const statTable = sourceTurn.statTable;
                const atkRatio = 0.15;
                const conversion = atkRatio * (calcs.getATKFinal(statTable).ATKFinal + statTable[ATKFlatNULL]);

                const buffSheet = ATKObjects.dhptBondmateATKSHEET;
                buffSheet[ATKFlat] = conversion;
                buffSheet[ATKFlatNULL] = -conversion;

                const bondmateSlot = sourceTurn.battleValues.bondmateSlot;
                const bondmateTurn = battleData.nameBasedTurns[bondmateSlot];

                const buffCheck = targetTurn.buffsObject[buffSheet.buffName];
                const updateBuff = battleActions.updateBuff;

                const dragonTurn = sourceTurn.dhptSouldragonTURNEVENT;
                if (!dragonTurn.isActive || bondmateSlot != targetTurn.name) {
                    //if souldragon was removed from the owner, then remove the buff and back out nothing needs to be done
                    removeBuff(battleData,targetTurn,buffCheck,false,null,false,true);
                    return;
                }

                if (buffCheck) {
                    const atkAmount = buffCheck[ATKFlat];
                    if (atkAmount === conversion) {return;}//if the conversion is equal to the present amount, nothing needs to be done and we can leave
                    else {
                        removeBuff(battleData,bondmateTurn,buffCheck,true,null,false,true);
                    }
                }

                //if we reach this point, it's bc souldragon is on the field, a bondmate is designated, and there is a conversion to apply
                updateBuff(battleData,bondmateTurn,buffSheet,false,null,false,true);
            },
            dhptSkillShield(battleData,sourceTurn) {
                const logicRef = turnLogic[sourceTurn.properName];
                const ATKObjects = logicRef.ATKObjects;


                let skillRef = ATKObjects.dhptSkillShieldREF ??= ATKObjects.Skill["Terra Omnibus"].variant1;
                let values = ATKObjects.dhptSkillShieldREFVALUES ??= battleActions.getLevelBasedParam(battleData,skillRef,sourceTurn);
                // let rank = sourceTurn.rank;
                // // let e2 = rank >= 2;
                
                
                if (!ATKObjects.dhptSkillShieldSHIELDSHEET) {
                    let characterName = sourceTurn.properName;

                    let buffName = turnLogic[characterName].buffNames.dhptShield;
                    ATKObjects.dhptSkillShieldSHIELDSHEET = {
                        "stats": null,
                        "source": "Skill",
                        "sourceOwner": characterName,
                        "buffName": buffName,
                        "duration": 3,
                        "AVApplied": 0,
                        "maxStacks": 1,
                        "currentStacks": 1,
                        "decay": false,
                        "expireType": "EndTurn",
                        "isShield": true,
                        multipliers: values[0],//to give to existing shield of the same name
                        flatAmounts: values[1],//to give to existing shield of the same name
                        multipliersCAP: values[0]*3,//to limit by
                        flatAmountsCAP: values[1]*3,//to limit by
                        scalar: "ATK",
                        shieldRemaining: 0,
                        shieldCap: 0,
                        // shieldTags: ["All","Skill","Imaginary"],
                        // shieldActionTags: ["Skill"],
                        slot: skillRef.slot,
                        removeOnDeath: true,
                    }
                    // .callWhenHit?.(battleData,currentShield,DMGTotalAVG,targetTurn)
                }

                poke("TargetShield",battleData,{targetType:"Team", sourceTurn, targetTurn:null, targetSkill:skillRef.slot});
                const shieldBuffObject = ATKObjects.dhptSkillShieldSHIELDSHEET;
                shieldBuffObject.AVApplied = battleData.sumAV;
                const allyPositions = battleData.allyPositions;
                const updateBuff = battleActions.updateBuff;
                for (let ally of allyPositions) {
                    shieldBuffObject.duration = ally.turnState ? 4 : 3;
                    // console.log(ally)
                    updateBuff(battleData,ally,shieldBuffObject,false,sourceTurn);
                }
            },
            dhptTalentShield(battleData,sourceTurn) {
                let rank = sourceTurn.rank;
                const logicRef = turnLogic[sourceTurn.properName];
                const ATKObjects = logicRef.ATKObjects;
                // let e2 = rank >= 1;

                let skillRefTalent = ATKObjects.dhptTalentREF ??= ATKObjects["Talent"]["Of Virtue, Forms Unfold"].variant1;
                let valuesTalent = ATKObjects.dhptTalentREFVALUES ??= battleActions.getLevelBasedParam(battleData,skillRefTalent,sourceTurn);

                if (!ATKObjects.dhptTalentSHIELDSHEET) {
                    let skillRef = ATKObjects.dhptSkillShieldREF ??= ATKObjects.Skill["Terra Omnibus"].variant1;
                    let values = ATKObjects.dhptSkillShieldREFVALUES ??= battleActions.getLevelBasedParam(battleData,skillRef,sourceTurn);
                    let characterName = sourceTurn.properName;

                    let buffName = turnLogic[characterName].buffNames.dhptShield;
                    ATKObjects.dhptTalentSHIELDSHEET = {
                        "stats": null,
                        "source": characterName,
                        "sourceOwner": characterName,
                        "buffName": buffName,
                        "duration": 3,
                        "AVApplied": 0,
                        "maxStacks": 1,
                        "currentStacks": 1,
                        "decay": false,
                        "expireType": "EndTurn",
                        "isShield": true,
                        multipliers: valuesTalent[0],//to give to existing shield of the same name
                        flatAmounts: valuesTalent[1],//to give to existing shield of the same name
                        multipliersCAP: values[0]*2,//to limit by
                        flatAmountsCAP: values[1]*2,//to limit by
                        scalar: "ATK",
                        shieldRemaining: 0,
                        shieldCap: 0,
                        slot: skillRef.slot,
                        removeOnDeath: true,
                    }
                    ATKObjects.dhptTraceSHIELDSHEET = {
                        "stats": null,
                        "source": characterName,
                        "sourceOwner": characterName,
                        "buffName": buffName,
                        "duration": 3,
                        "AVApplied": 0,
                        "maxStacks": 1,
                        "currentStacks": 1,
                        "decay": false,
                        "expireType": "EndTurn",
                        "isShield": true,
                        multipliers: 0.05,//to give to existing shield of the same name
                        flatAmounts: 100,//to give to existing shield of the same name
                        multipliersCAP: values[0]*2,//to limit by
                        flatAmountsCAP: values[1]*2,//to limit by
                        scalar: "ATK",
                        shieldRemaining: 0,
                        shieldCap: 0,
                        slot: skillRef.slot,
                        removeOnDeath: true,
                    }
                    // .callWhenHit?.(battleData,currentShield,DMGTotalAVG,targetTurn)
                }

                const shieldBuffObject = ATKObjects.dhptTalentSHIELDSHEET;
                shieldBuffObject.AVApplied = battleData.sumAV;
                const allyPositions = battleData.allyPositions;
                const updateBuff = battleActions.updateBuff;
                poke("TargetShield",battleData,{targetType:"Team", sourceTurn, targetTurn:null, targetSkill:skillRefTalent.slot});


                if (rank>=2) {
                    if (sourceTurn.battleValues.souldragonEnhancedTurns) {
                        shieldBuffObject.multipliers = valuesTalent[0] * 2;
                        shieldBuffObject.flatAmounts = valuesTalent[1] * 2;
                    }
                    else {
                        shieldBuffObject.multipliers = valuesTalent[0];
                        shieldBuffObject.flatAmounts = valuesTalent[1];
                    }
                    
                }

                // (rank>=2 ? 2 : 1)
                
                let allyWithLowestShield = null;
                let allyLowestAmount = 0;
                const shieldName = shieldBuffObject.buffName;
                let alliesChecked = 0;
                for (let ally of allyPositions) {
                    alliesChecked += 1;
                    shieldBuffObject.duration = ally.turnState ? 4 : 3;
                    updateBuff(battleData,ally,shieldBuffObject,false,sourceTurn);
                    const shieldRead = ally.shieldValueCurrent;
                    if (alliesChecked === 1) {
                        //first ally gets assigned regardless
                        allyWithLowestShield = ally;
                        allyLowestAmount = shieldRead;
                    }
                    else if (shieldRead < allyLowestAmount) {
                        //then we look for people will less as we go
                        allyWithLowestShield = ally;
                        allyLowestAmount = shieldRead;
                    }
                }

                const traceShield = ATKObjects.dhptTraceSHIELDSHEET;
                traceShield.duration = allyWithLowestShield.turnState ? 4 : 3;
                updateBuff(battleData,allyWithLowestShield,traceShield,false,sourceTurn);
            },
            addDragonToOrder(battleData,sourceTurn,targetTurn) {
                const dragonTurn = sourceTurn.dhptSouldragonTURNEVENT;

                targetTurn.activeSummons += 1;
                dragonTurn.currentlyOwnedBy = targetTurn.name;
                dragonTurn.AV = dragonTurn.AVBase;
                dragonTurn.isActive = true;
                sourceTurn.battleValues.souldragonActive = true;

                battleData.nextTurnAV.push(dragonTurn);
                poke("SummonOnFieldAdjustment",battleData,{summonWas: "Apply",assignedTo: targetTurn, summonedBy: sourceTurn, summonEvent: dragonTurn});

                if (sourceTurn.rank >= 6) {
                    const logicRef = turnLogic[sourceTurn.properName];
                    const ATKObjects = logicRef.ATKObjects;

                    if (!ATKObjects.e6VulnSHEET) {
                        let buffName = turnLogic[sourceTurn.properName].buffNames.e6Vuln;
                        // greatTableIndex
                        // greatTableKeys
                        ATKObjects.e6VulnSHEET = {
                            "stats": [VulnAll],
                            [VulnAll]: 0.20,
                            "source": "E6",
                            "sourceOwner": sourceTurn.properName,
                            "buffName": buffName,
                            "duration": 1,
                            "AVApplied": 0,
                            "maxStacks": 1,
                            "currentStacks": 1,
                            "decay": false,
                            "expireType": null,
                            "isDebuff": true,
                        }
                    }
                    const buffSheet = ATKObjects.e6VulnSHEET;
                    buffSheet.AVApplied = battleData.sumAV;

                    const enemyPositions = battleData.enemyPositions;
                    const updateBuff = battleActions.updateBuff;
                    for (let enemy of enemyPositions) {
                        updateBuff(battleData,enemy,buffSheet);
                    }
                }
            },
            removeDragonFromOrder(battleData,sourceTurn,targetTurn) {
                const dragonTurn = sourceTurn.dhptSouldragonTURNEVENT;

                targetTurn.activeSummons -= 1;
                dragonTurn.currentlyOwnedBy = null;
                dragonTurn.AV = dragonTurn.AVBase;
                sourceTurn.battleValues.bondmateSlot = null;
                dragonTurn.isActive = false;
                sourceTurn.battleValues.souldragonActive = false;

                const nextAV = battleData.nextTurnAV;
                nextAV.splice(nextAV.indexOf(dragonTurn),1);
                poke("SummonOnFieldAdjustment",battleData,{summonWas: "Remove",assignedTo: targetTurn, summonedBy: sourceTurn, summonEvent: dragonTurn});


                if (sourceTurn.rank >= 6) {
                    const logicRef = turnLogic[sourceTurn.properName];
                    const ATKObjects = logicRef.ATKObjects;
                    const buffSheet = ATKObjects.e6VulnSHEET;

                    const enemyPositions = battleData.enemyPositions;
                    const updateBuff = battleActions.updateBuff;
                    for (let enemy of enemyPositions) {
                        updateBuff(battleData,enemy,buffSheet);
                    }
                }
            },
            souldragonTurnAttack(battleData,eventTurn) {
                const sourceTurn = battleData.nameBasedTurns[eventTurn.eventOwner];
                const logicRef = turnLogic[sourceTurn.properName];
                const ATKObjects = logicRef.ATKObjects;

                const valuesRef = sourceTurn.battleValues;


                let skillRef = ATKObjects.dhptTalentREF ??= ATKObjects["Talent"]["Of Virtue, Forms Unfold"].variant1;
                let values = ATKObjects.dhptTalentREFVALUES ??= battleActions.getLevelBasedParam(battleData,skillRef,sourceTurn);

                logicRef.skillFunctions.dhptTalentShield(battleData,sourceTurn);

                if (valuesRef.souldragonEnhancedTurns) {
                    valuesRef.souldragonEnhancedTurns -= 1;

                    if (!ATKObjects.dhptSouldragonAutoATKOBJECT) {
                        let valuesUlt = ATKObjects.dhptUltimateREFVALUES;
    
                        if (skillRef.hitSplits.length > 4) {skillRef.hitSplits.length = 4;}
                        const scalar = "ATK";
                        const tags = ["All","FUA","Physical"];
                        const keyShortcut = basicShorthand.makeKeysArray;
                        const realDMGKeys = keyShortcut(dmgKeys,tags);
                        const realPENKeys = keyShortcut(resPENKeys,tags);
                        const realShredKeys = keyShortcut(defShredKeys,tags);
                        const realVulnKeys = keyShortcut(vulnKeys,tags);
                        //realDMGKeys,realPENKeys,realShredKeys,realVulnKeys
                        // console.log(values[0])
                        const actionTags = ["Souldragon","FUA","Attack","Summon"];
                        const compositeCacheTag = tags + actionTags;
                        ATKObjects.dhptSouldragonAutoATKOBJECT = {
                            multipliers: {
                                primary: null,
                                blast: null,
                                all: 0.70, //valuesUlt[1],
                            },
                            scalar,
                            DMGTags: tags,
                            allToughness: false,
                            slot: skillRef.slot,
                            realDMGKeys,realPENKeys,realShredKeys,realVulnKeys,
                            actionTags,
                            isFUA: true,
                            isSummon: true,
                            compositeCacheTag,
                            // bonusMultiplier: 0,
                        }
                    }
                    let ATKObject = ATKObjects.dhptSouldragonAutoATKOBJECT;
    
                    // if (battleData.isLoggyLogger) {logToBattle(battleData,{logType: "BasicATKStart", name:sourceTurn.properName, target:"enemy", isEnemy: false, isCharacter: true, AV: battleData.sumAV, actionSlot:skillRef.slot});}
                    if (battleData.isLoggyLogger) {logToBattle(battleData,{logType: "FUAStart", name:eventTurn.properName, target: "enemy", AV: battleData.sumAV, fuaName: "souldragonTurnAttack", isEnhanced:true, eventOverrideImage: eventTurn.eventImage});}
                    // poke("BasicATKStart",battleData,{sourceTurn});
                    poke("FUAStart",battleData,{sourceTurn});
                    battleActions.attackWrapper(battleData,skillRef,sourceTurn,ATKObject);
                    // battleActions.updateEnergy(battleData,skillRef.energyRegen,sourceTurn);
                    
                    poke("FUAEnd",battleData,{sourceTurn});
                    // poke("BasicATKEnd",battleData,{sourceTurn});
                }
            },
            dhptUltimate(battleData,sourceTurn) {
                let characterName = sourceTurn.properName;
                const logicRef = turnLogic[characterName];
                const ATKObjects = logicRef.ATKObjects;
                // const logicRef = turnLogic[sourceTurn.properName];
                // const ATKObjects = logicRef.ATKObjects;
                const skillRef = ATKObjects.dhptUltimateREF ??= ATKObjects.Ultimate["A Dragon's Zenith Knows No Rue"].variant1;
                const rank = sourceTurn.rank;

                if (!ATKObjects.dhptUltimateATKOBJECT) {
                    let values = ATKObjects.dhptUltimateREFVALUES ??= battleActions.getLevelBasedParam(battleData,skillRef,sourceTurn);
                    if (skillRef.hitSplits.length > 1) {skillRef.hitSplits.length = 1;}
                    const scalar = "ATK";
                    const tags = ["All","Ultimate","Physical"];
                    const actionTags = ["Ultimate","Attack"];
                    const keyShortcut = basicShorthand.makeKeysArray;
                    const realDMGKeys = keyShortcut(dmgKeys,tags);
                    const realPENKeys = keyShortcut(resPENKeys,tags);
                    const realShredKeys = keyShortcut(defShredKeys,tags);
                    const realVulnKeys = keyShortcut(vulnKeys,tags);
                    const compositeCacheTag = tags + actionTags;
                    //realDMGKeys,realPENKeys,realShredKeys,realVulnKeys
                    ATKObjects.dhptUltimateATKOBJECT = {
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
                        compositeCacheTag
                    }
                }
                const ATKObject = ATKObjects.dhptUltimateATKOBJECT;

                
                // poke("SkillStart",battleData,{source:"Archer"});//ultimate listeners are poked before and after ulty use, within the ulty queue dump function
                battleActions.updateEnergy(battleData,-sourceTurn.maxEnergy,sourceTurn);
                // battleActions.updateBuff(battleData,targetEnemy,buffSheet);

                const battleValues = sourceTurn.battleValues;
                battleValues.souldragonEnhancedTurns = 2 + (rank>=2 ? 2 : 0);
                logicRef.skillFunctions.dhptUltimateShield(battleData,sourceTurn);
                battleActions.attackWrapper(battleData,skillRef,sourceTurn,ATKObject);
                battleActions.updateEnergy(battleData,skillRef.energyRegen,sourceTurn);

                battleValues.souldragonEnhanced = true;

                if (rank>=2) {battleActions.actionAdvance(1,sourceTurn.dhptSouldragonTURNEVENT,battleData,"E2: Souldragon advanced");}

                sourceTurn.ultyQueued = false;
            },
            dhptUltimateShield(battleData,sourceTurn) {
                let rank = sourceTurn.rank;
                const logicRef = turnLogic[sourceTurn.properName];
                const ATKObjects = logicRef.ATKObjects;
                // let e2 = rank >= 1;

                let skillRefUlt = ATKObjects.dhptUltimateREF;
                let valuesUlt = ATKObjects.dhptUltimateREFVALUES;

                if (!ATKObjects.dhptUltimateSHIELDSHEET) {
                    let skillRef = ATKObjects.dhptSkillShieldREF ??= ATKObjects.Skill["Terra Omnibus"].variant1;
                    let values = ATKObjects.dhptSkillShieldREFVALUES ??= battleActions.getLevelBasedParam(battleData,skillRef,sourceTurn);
                    let characterName = sourceTurn.properName;
                    // console.log(values)

                    let buffName = turnLogic[characterName].buffNames.dhptShield;
                    ATKObjects.dhptUltimateSHIELDSHEET = {
                        "stats": null,
                        "source": characterName,
                        "sourceOwner": characterName,
                        "buffName": buffName,
                        "duration": 3,
                        "AVApplied": 0,
                        "maxStacks": 1,
                        "currentStacks": 1,
                        "decay": false,
                        "expireType": "EndTurn",
                        "isShield": true,
                        multipliers: valuesUlt[3],//to give to existing shield of the same name
                        flatAmounts: valuesUlt[4],//to give to existing shield of the same name
                        multipliersCAP: values[0]*2,//to limit by
                        flatAmountsCAP: values[1]*2,//to limit by
                        scalar: "ATK",
                        shieldRemaining: 0,
                        shieldCap: 0,
                        slot: skillRef.slot,
                        removeOnDeath: true,
                    }
                }

                const shieldBuffObject = ATKObjects.dhptUltimateSHIELDSHEET;
                const allyPositions = battleData.allyPositions;
                const updateBuff = battleActions.updateBuff;
                poke("TargetShield",battleData,{targetType:"Team", sourceTurn, targetTurn:null, targetSkill:skillRefUlt.slot});
                
                for (let ally of allyPositions) {
                    shieldBuffObject.duration = ally.turnState ? 4 : 3;
                    updateBuff(battleData,ally,shieldBuffObject,false,sourceTurn);
                }
            },
            bondmateAddedDMG(battleData,sourceTurn,allyTurn,generalInfo) {
                const logicRef = turnLogic[sourceTurn.properName];
                const ATKObjects = logicRef.ATKObjects;

                if (!ATKObjects.bondmateAddedDMGATKOBJECT) {
                    const rank = sourceTurn.rank;
                    let skillRef = ATKObjects.dhptUltimateREF;
                    // let e4 = sourceTurn.rank >= 4;
                    let values = battleActions.getLevelBasedParam(battleData,skillRef,sourceTurn);
                    const scalar = "ATK";
                    const tags = ["All","Physical"];
                    const actionTags = ["Additional"];
                    const keyShortcut = basicShorthand.makeKeysArray;
                    const realDMGKeys = keyShortcut(dmgKeys,tags);
                    const realPENKeys = keyShortcut(resPENKeys,tags);
                    const realShredKeys = keyShortcut(defShredKeys,tags);
                    const realVulnKeys = keyShortcut(vulnKeys,tags);
                    // const compositeCacheTag = tags + actionTags;
                    //realDMGKeys,realPENKeys,realShredKeys,realVulnKeys
                    ATKObjects.bondmateAddedDMGATKOBJECT = {
                        multipliers: {
                            primary: null,
                            blast: null,
                            all: null,
                            additional: values[7] * (rank>=2 ? 2 : 1)
                        },
                        scalar,
                        element: "Physical",//override for additional dmg, not used otherwise
                        // DMGTags: ["All","Basic","Quantum"],
                        DMGTags: tags,
                        allToughness: false,
                        slot: null,
                        realDMGKeys,realPENKeys,realShredKeys,realVulnKeys,
                        actionTags,
                        // compositeCacheTag
                    }
                    ATKObjects.bondmateAddedDMGATKOBJECT2 = {
                        multipliers: {
                            primary: null,
                            blast: null,
                            all: null,
                            additional: 0.40 * (rank>=2 ? 2 : 1)
                        },
                        scalar,
                        element: "Physical",//override for additional dmg, not used otherwise
                        // DMGTags: ["All","Basic","Quantum"],
                        DMGTags: tags,
                        allToughness: false,
                        slot: null,
                        realDMGKeys,realPENKeys,realShredKeys,realVulnKeys,
                        actionTags,
                        // compositeCacheTag
                    }
                }
                let ATKObject = ATKObjects.bondmateAddedDMGATKOBJECT;
                let ATKObject2 = ATKObjects.bondmateAddedDMGATKOBJECT2;
                const addedDMG = battleActions.additionalDMGWrapper;
                const targetsGotHit = generalInfo.targetsGotHit;
                const enemyTurns = battleData.enemyBasedTurns;

                //overwrite the element and dmg tagging to the bondmate's, otherwise this will get royally fucked up
                ATKObject.element = allyTurn.element;
                ATKObject.DMGTags = ["All",allyTurn.element];
                ATKObject.compositeCacheTag = ATKObject.DMGTags + ATKObject.actionTags;
                ATKObject2.element = allyTurn.element;
                ATKObject2.DMGTags = ["All",allyTurn.element];
                ATKObject2.compositeCacheTag = ATKObject2.DMGTags + ATKObject2.actionTags;

                let highestHPEnemy = null;
                let enemiesChecked = 0;
                for (let enemyHit in targetsGotHit) {
                    const currentEnemy = enemyTurns[enemyHit];
                    if (currentEnemy.isDead) {continue;}
                    addedDMG(battleData,allyTurn,allyTurn.properName,ATKObject,currentEnemy,"Bondmate");

                    if (!currentEnemy.isDead) {
                        if (enemiesChecked === 0) {highestHPEnemy = currentEnemy;}
                        else if (currentEnemy.currentHP > highestHPEnemy.currentHP) {highestHPEnemy = currentEnemy}
                        enemiesChecked++;
                    }
                }

                if (highestHPEnemy) {addedDMG(battleData,allyTurn,allyTurn.properName,ATKObject2,highestHPEnemy,"Bondmate [Sublimity]");}
            },
            bondmateAddedDMGE6(battleData,sourceTurn,allyTurn,generalInfo) {
                const logicRef = turnLogic[sourceTurn.properName];
                const ATKObjects = logicRef.ATKObjects;

                if (!ATKObjects.bondmateAddedDMGE6ATKOBJECT) {
                    const rank = sourceTurn.rank;
                    let skillRef = ATKObjects.dhptUltimateREF;
                    // let e4 = sourceTurn.rank >= 4;
                    // let values = battleActions.getLevelBasedParam(battleData,skillRef,sourceTurn);
                    const scalar = "ATK";
                    const tags = ["All","Physical"];
                    const actionTags = ["Additional"];
                    const keyShortcut = basicShorthand.makeKeysArray;
                    const realDMGKeys = keyShortcut(dmgKeys,tags);
                    const realPENKeys = keyShortcut(resPENKeys,tags);
                    const realShredKeys = keyShortcut(defShredKeys,tags);
                    const realVulnKeys = keyShortcut(vulnKeys,tags);
                    const compositeCacheTag = tags + actionTags;
                    //realDMGKeys,realPENKeys,realShredKeys,realVulnKeys
                    ATKObjects.bondmateAddedDMGE6ATKOBJECT = {
                        multipliers: {
                            primary: null,
                            blast: null,
                            all: null,
                            additional: 3.3
                        },
                        scalar,
                        element: "Physical",//override for additional dmg, not used otherwise
                        // DMGTags: ["All","Basic","Quantum"],
                        DMGTags: tags,
                        allToughness: false,
                        slot: null,
                        realDMGKeys,realPENKeys,realShredKeys,realVulnKeys,
                        actionTags,
                        compositeCacheTag
                    }
                }
                let ATKObject = ATKObjects.bondmateAddedDMGE6ATKOBJECT;
                const addedDMG = battleActions.additionalDMGWrapper;
                const targetsGotHit = generalInfo.targetsGotHit;
                const enemyTurns = battleData.enemyBasedTurns;

                //overwrite the element and dmg tagging to the bondmate's, otherwise this will get royally fucked up
                ATKObject.element = allyTurn.element;
                ATKObject.DMGTags = ["All",allyTurn.element];

                for (let enemyHit in targetsGotHit) {
                    const currentEnemy = enemyTurns[enemyHit];
                    if (currentEnemy.isDead) {continue;}
                    addedDMG(battleData,allyTurn,allyTurn.properName,ATKObject,currentEnemy,"Bondmate");
                }
            },
            dhptTechnique(battleData,target,sourceTurn) {
                let characterName = sourceTurn.properName;
                const logicRef = turnLogic[characterName];
                const ATKObjects = logicRef.ATKObjects;

                let skillRef = ATKObjects.dhptTechREF ??= ATKObjects.Technique["Earthrend"].variant1;
                // let values = battleActions.getLevelBasedParam(battleData,skillRef,sourceTurn);

                if (battleData.isLoggyLogger) {logToBattle(battleData,{logType: "TechniqueStart", name:characterName, target, isEnemy: false, isCharacter: true, AV: battleData.sumAV, actionSlot:skillRef.slot});}
                poke("TechniqueStart",battleData,{sourceTurn});

                const dhptTechSkillCall = ATKObjects.dhptTechSkillCall ??= turnLogic[characterName].skillFunctions.dhptSkill;
                dhptTechSkillCall(battleData,null,sourceTurn)
                battleActions.nonViolentWrapper(battleData,skillRef,characterName);

                poke("TechniqueEnd",battleData,{sourceTurn});
            },
        },
        "listeners": [
            {
                "trigger": "PreBattleEntersCombat",
                condition(battleData,generalInfo) {
                    let ownerTurn = this.ownerTurn;

                    const souldragonTurnAttack = this.souldragonTurnAttack ??= turnLogic[ownerTurn.properName].skillFunctions.souldragonTurnAttack;
                    const ActionEntry = ownerTurn.dhptSouldragonTURNEVENT ??= {
                        // name:characterEntry,
                        AV:10000/165,
                        AVBase:10000/165,
                        SPD:165,
                        actionCounter: 0,
                        turnState: 0,
                        name: "dhptSummon",
                        properName: "Souldragon",
                        // buffsObject: {},
                        // buffsStartTurn: [],
                        // buffsEndTurn: [],
                        // additionalDMGObject: {},
                        cantBeTargeted: true,
                        diesWithOwner: true,
                        isUniqueEvent: true,
                        isSummon: true,
                        isActive: false,
                        isMemosprite: false,
                        eventOwner: ownerTurn.name,//pass through the slot of the character who owns the event, avoids cyclic issues when logging
                        currentlyOwnedBy: null,
                        uniqueEventFunction: souldragonTurnAttack,//logicRef.skillFunctions.combustionExpired,
                        eventImage: graphs.summonCustomImages["Souldragon"],
                    };
                    ownerTurn.summonEventRef = "dhptSouldragonTURNEVENT";
                    ownerTurn.battleValues.bondmateSlot = null;
                    // ownerTurn.activeSummons += 1;
                    // battleData.nextTurnAV.push(ActionEntry);
                    battleData.declaredSummons.push(ActionEntry);
                    battleData.battleTotal.Turns[ActionEntry.properName] = 0;
                    // poke("SummonOnFieldAdjustment",battleData,{summonWas: "Apply",assignedTo: ownerTurn, summonedBy: ownerTurn, summonEvent: ownerTurn.topazNUMBYTURNEVENT});
                },
                "target": "self",
                "listenerName": "DHPT: Souldragon event creation",
                "ownerTurn": {},
            },
            {
                "trigger": "AdditionalTriggerAttackEnd",
                condition(battleData,generalInfo) {
                    let ownerTurn = this.ownerTurn;
                    let characterName = ownerTurn.properName;

                    const sourceTurn = generalInfo.sourceTurn;
                    if (!ownerTurn.battleValues.bondmateSlot || sourceTurn.properName != characterName || !generalInfo.ATKObject.isSummon) {return;}
                    //if the bondmate isn't assigned yet, or the source of the attack isn't dan, or if it is dan but it's not considered his summon, then abort

                    let targetTurn = battleData.nameBasedTurns[ownerTurn.battleValues.bondmateSlot];
                    const bondmateAddedDMG = this.bondmateAddedDMG ??= turnLogic[characterName].skillFunctions.bondmateAddedDMG;
                    bondmateAddedDMG(battleData,ownerTurn,targetTurn,generalInfo);
                },
                "target": "enemy",
                "listenerName": "Souldragon took action - bondmate additional DMG",
                "ownerTurn": {},
            },
            {
                "trigger": "UpdateStatATK",//ATK stat family
                condition(battleData,generalInfo) {
                    let ownerTurn = this.ownerTurn;
                    const bondmateSlot = ownerTurn.battleValues.bondmateSlot
                    const sourceTurn = generalInfo.sourceTurn;
                    if (!bondmateSlot || sourceTurn.name != ownerTurn.name) {return;}
                    //if the bondmate isn't assigned, the source is an enemy, or if the source isn't the bondmate, then abort

                    const bondmateTurn = battleData.nameBasedTurns[bondmateSlot];
                    const bondmateATKConversion = this.bondmateATKConversion ??= turnLogic[ownerTurn.properName].skillFunctions.bondmateATKConversion;
                    bondmateATKConversion(battleData,ownerTurn,bondmateTurn)
                },
                "target": "self",
                "listenerName": "Sylvanity: Bondmate attack update",
                "ownerTurn": {},
            },
            {
                "trigger": "AttackStart",
                condition(battleData,generalInfo) {
                    let ownerTurn = this.ownerTurn;
                    const bondmateSlot = ownerTurn.battleValues.bondmateSlot
                    const sourceTurn = generalInfo.sourceTurn;
                    if (!bondmateSlot || sourceTurn.isEnemy || sourceTurn.name != bondmateSlot) {return;}
                    //if the bondmate isn't assigned, the source is an enemy, or if the source isn't the bondmate, then abort

                    const dragonTurn = ownerTurn.dhptSouldragonTURNEVENT;
                    battleActions.updateEnergy(battleData,6,ownerTurn,false,"Sylvanity (Bondmate Attack)");
                    battleActions.actionAdvance(0.15,dragonTurn,battleData,"Sylvanity (Bondmate Attack)");
                },
                "target": "self",
                "listenerName": "Sylvanity: Bondmate attack action advance + energy",
                "ownerTurn": {},
            },
            {
                "trigger": "PreBattleEntersCombat",
                condition(battleData,generalInfo) {
                    let ownerTurn = this.ownerTurn;
                    battleActions.actionAdvance(0.40,ownerTurn,battleData,"Sylvanity");
                },
                "target": "self",
                "listenerName": "Sylvanity: battlestart action advance",
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
                            attack: turnLogic[ownerTurn.properName].skillFunctions.dhptUltimate,
                            target: this.target,
                            name: this.listenerName,
                            properName: ownerTurn.properName,
                            sourceTurn: ownerTurn
                        }
                        queueObject.sourceTurn = ownerTurn;
                        battleActions.queueUltimateUse(battleData,queueObject);
                    }
                },
                "target": "enemy",
                "listenerName": "DHPT - Ultimate queued",
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
                        const dhptTechnique = this.dhptTechnique ??= logicRef.skillFunctions.dhptTechnique;
                        dhptTechnique(battleData,"self",ownerTurn)
                    }
                },
                "target": "self",
                "listenerName": "DHPT Technique",
                "ownerTurn": {},
            },
        ],
        "eidolonListeners": {
            1: [
                {
                    "trigger": "UltimateStart",
                    condition(battleData,generalInfo) {
                        let ownerTurn = this.ownerTurn;
                        const sourceTurn = generalInfo.sourceTurn;
                        if (sourceTurn.properName != ownerTurn.properName) {return;}
    
                        battleActions.updateSkillPoints(1,battleData,{sourceTurn,sourceName:"E1: Shed Scales of Old"});
                    },
                    "target": "self",
                    "listenerName": "E1: dan used ult skillpoint gain",
                    "ownerTurn": {},
                },
            ],
            2: [],
            3: [],
            4: [
                //TODO: when I connect the DR stuff, just go into the ATK conversion function and add the DR instance there
            ],
            5: [],
            6: [
                {
                    "trigger": "EnemyCreated",
                    condition(battleData,generalInfo) {
                        let ownerTurn = this.ownerTurn;
                        if (!ownerTurn.battleValues.bondmateSlot) {return;}

                        let targetTurn = generalInfo.slotRef;

                        const logicRef = turnLogic[sourceTurn.properName];
                        const ATKObjects = logicRef.ATKObjects;
                        let buffSheet = ATKObjects.e6VulnSHEET;
    
                        battleActions.updateBuff(battleData,targetTurn,buffSheet);
                    },
                    "target": "enemy",
                    "listenerName": "E6 vuln application enemy added to field while bondmate exists",
                    "announce": false,
                    "ownerTurn": {},
                },
                {
                    "trigger": "AdditionalTriggerAttackEnd",
                    condition(battleData,generalInfo) {
                        let ownerTurn = this.ownerTurn;
                        let characterName = ownerTurn.properName;
    
                        const sourceTurn = generalInfo.sourceTurn;
                        const battleValues = ownerTurn.battleValues;
                        if (!battleValues.bondmateSlot || sourceTurn.properName != characterName || generalInfo.dmgSlot != "Ultimate") {return;}
                        //if the bondmate isn't assigned yet, or the source of the attack isn't dan, or if it is dan but it's not considered his summon, then abort
    
                        // let logicRef = turnLogic[characterName];
                        let targetTurn = battleData.nameBasedTurns[battleValues.bondmateSlot];
                        const e6ADDDMG = this.e6ADDDMG ??= turnLogic[characterName].skillFunctions.bondmateAddedDMGE6
                        e6ADDDMG(battleData,ownerTurn,targetTurn,generalInfo);
                    },
                    "target": "enemy",
                    "listenerName": "Souldragon took action - bondmate additional DMG",
                    "ownerTurn": {},
                },
            ],
        },
        "ATKObjects": {},
        "characterValues": {
            "souldragonEnhancedTurns": 0,
            "bondmateSlot": null,
            "souldragonActive": false,
        },
        "useTechnique": true,
        "techniqueType": "Impair",
        "buffNames": {
            "bondmateATK": "Bondmate [Empyreanity]",
            "dhptShield": "Shield (DHPT)",
            "e6Vuln": "One Dream to Enfold All Wilds",
        },
        "characterValuesBattle": {},
    },
}