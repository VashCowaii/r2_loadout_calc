let workers = {};

const compare = {
    debugPushLine(string) {
        readSelection("comboDebug").innerHTML += `<br>${string}`;
    },
    debugView() {
        let state = readSelection("debugShow").checked;
        let element = readSelection("comboDebug");

        element.style.display = state ? "block" : "none";
    },
    updateThreadCountDisplay() {
        readSelection("selectedThreadCount").innerHTML = +readSelection("settingsOpenThreads").value;
    },
    * getCharacterNeedsWants(querySettings,Needs,NeedsTeam,GivesTeam,AddTeamNeeds,planarSets,bodySets,lightconeSets,char2pcLock,char4pcLock,charCanUse2pc) {
        // const allow2pc = querySettings.allow2pcSearch;

        for (let iLightcone = 0;iLightcone<lightconeSets.length;iLightcone++) {
            let currentLightcone = lightconeSets[iLightcone];
            const maslowLightcone = maslow[currentLightcone];
            const lightconeGives = new Set (maslowLightcone.gives);
            const lightconeGivesTeam = new Set (maslowLightcone.givesTeam);
            const lightconeWants = new Set (maslowLightcone.wants);

            let ValidSelf = false;

            // console.log("reached at all again")
            for (let gives of lightconeGives) {
                let check = Needs.has(gives);
                if (check) {ValidSelf = true;break;}
            }
            const lightcone = {Item:currentLightcone,Gives:lightconeGives,GivesTeam:lightconeGivesTeam,Wants:lightconeWants,ValidSelf}

            for (let iPlanar = 0;iPlanar<planarSets.length;iPlanar++) {
                let currentPlanar = planarSets[iPlanar];
                const maslowPlanar = maslow[currentPlanar];
                const planarGives = new Set (maslowPlanar.gives);
                const planarGivesTeam = new Set (maslowPlanar.givesTeam);
                const planarWants = new Set (maslowPlanar.wants);

                
                let ValidSelf = false;

                // console.log("reached at all again")
                for (let gives of planarGives) {
                    let check = Needs.has(gives);
                    if (check) {ValidSelf = true;break;}
                }
                const planar = {Item:currentPlanar,Gives:planarGives,GivesTeam:planarGivesTeam,Wants:planarWants,ValidSelf}

                const pc2Lock = char2pcLock.length;
                const arrayToUse2pc = pc2Lock ? char2pcLock : bodySets;

                for (let i2pc = 0;i2pc<arrayToUse2pc.length;i2pc++) {
                    let current2pc1 = arrayToUse2pc[i2pc];
                    const maslow2pc1 = maslow[current2pc1]["2"];
                    // let lookingFor4PC = false;
                    const pc2Gives = new Set (maslow2pc1.gives);
                    const pc2GivesTeam = new Set (maslow2pc1.givesTeam);
                    const pc2Wants = new Set (maslow2pc1.wants);

                    let ValidSelf = false;
                    for (let gives of pc2Gives) {
                        let check = Needs.has(gives);
                        if (check) {ValidSelf = true;break;}
                    }
                    const pc2 = {Item:current2pc1,Gives:pc2Gives,GivesTeam:pc2GivesTeam,Wants:pc2Wants,ValidSelf};

                    const pc4Lock = char4pcLock.length;
                    if (charCanUse2pc || pc4Lock || pc2Lock) {
                        
                        const arrayToUse4pc = pc4Lock ? char4pcLock : bodySets;
                        for (let i4pc = pc4Lock || pc2Lock ? 0 : i2pc;i4pc<arrayToUse4pc.length;i4pc++) {
                            //4pc = 2pc here bc the 2pc + 2pc can match in order to make the 4pc, otherwise this is technically 2pc and 2pc separate, idk why I bother naming it like this
                            let current2pc2 = arrayToUse4pc[i4pc];
                            const is4pc = current2pc2 === current2pc1;
                            // const SKIPAMOUNT = chestKeys.length * bootKeys.length * orbKeys.length * ropeKeys.length;
                            const maslow2pc2 = maslow[current2pc2][is4pc ? "4" : "2"];
                            const pc4Gives = new Set (maslow2pc2.gives);
                            const pc4GivesTeam = new Set (maslow2pc2.givesTeam);
                            const pc4Wants = new Set (maslow2pc2.wants);

                            let ValidSelf = false;
                            for (let gives of pc4Gives) {
                                let check = Needs.has(gives);
                                if (check) {ValidSelf = true;break;}
                            }
                            const pc4 = {Item:current2pc2,Gives:pc4Gives,GivesTeam:pc4GivesTeam,Wants:pc4Wants,ValidSelf,is4pc};

                            // console.log("yielded")
                            yield {planar,pc2,pc4,lightcone}
                        }
                    }
                    else {//if 2pc mixing isn't allowed, bypass the entire loop for pc checks and directly feed the 2pc set into the 4pc as well to match it
                        let current2pc2 = arrayToUse2pc[i2pc];
                        const is4pc = current2pc2 === current2pc1;
                        // const SKIPAMOUNT = chestKeys.length * bootKeys.length * orbKeys.length * ropeKeys.length;
                        const maslow2pc2 = maslow[current2pc2][is4pc ? "4" : "2"];
                        const pc4Gives = new Set (maslow2pc2.gives);
                        const pc4GivesTeam = new Set (maslow2pc2.givesTeam);
                        const pc4Wants = new Set (maslow2pc2.wants);

                        const pc4 = {Item:current2pc2,Gives:pc4Gives,GivesTeam:pc4GivesTeam,Wants:pc4Wants,ValidSelf,is4pc};
                        yield {planar,pc2,pc4,lightcone}
                    }
                }
            }
        }
    },
    * getCharacterMainstatIteration(charNeeds,chestKeys,bootKeys,orbKeys,ropeKeys) {
        //getMainstats(char1Needs,chestKeys,bootKeys,orbKeys,ropeKeys)


        // const bodyStatName = chestMain.key;
        // const chestMaslow = chestMain.value;
        // const SKIPAMOUNT = bootKeys.length * orbKeys.length * ropeKeys.length;
        // let check = compositeCharacterWantsTotal.has(chestMaslow);
        // if (!check) {
        //     skipped += SKIPAMOUNT;
        //     continue;
        // }

        let mainstatSkipped = 0;
        let mainstatProcessed = 0;
        for (let chestMain of chestKeys) {
            const chestName = chestMain.key;
            const chestMaslow = chestMain.value;

            if (!charNeeds.has(chestMaslow)) {
                mainstatSkipped++;
                continue;
            }

            for (let bootMain of bootKeys) {
                const bootName = bootMain.key;
                const bootMaslow = bootMain.value;
    
                if (!charNeeds.has(bootMaslow)) {
                    mainstatSkipped++;
                    continue;
                }

                for (let orbMain of orbKeys) {
                    const orbName = orbMain.key;
                    const orbMaslow = orbMain.value;
        
                    if (!charNeeds.has(orbMaslow)) {
                        mainstatSkipped++;
                        continue;
                    }

                    for (let ropeMain of ropeKeys) {
                        const ropeName = ropeMain.key;
                        const ropeMaslow = ropeMain.value;
            
            
                        if (!charNeeds.has(ropeMaslow)) {
                            mainstatSkipped++;
                            continue;
                        }

                        mainstatProcessed++;
                        yield {chestName,bootName,orbName,ropeName,mainstatSkipped}
                    }
                }
            }
        }
    },
    sortByConflicts: (a, b) => b.conflictCount - a.conflictCount,
    * getCharacterSubstatIterationOLD(usableBaseSubstatPool,baseSubstatTableStarter,baseSubstatIncrements,querySettings,desiredStats,charSubsStarter,chestMain,bootMain,orbMain,ropeMain,charSubstatBounds1,charSubstatBounds2,charSubstatBounds3,charSubstatBounds4,charSubsTrash) {
        const desired1 = desiredStats[0];
        const desired2 = desiredStats[1];
        const desired3 = desiredStats[2];
        const desired4 = desiredStats[3];

        const headMain = "HPFlat";
        const handMain = "ATKFlat";

        const usableBasePerSub = usableBaseSubstatPool / 4;
        // console.log(usableBasePerSub)

        /*
            12 / 4 = 3 relics max, 3 conflicts
            20 / 4 = 5 relics max, 1 conflict 
        */

        //we need to know the total number of mainstat conflicts, PER stat desired
        const mainstat1Conflicts = Math.min(usableBasePerSub,(desired1 === chestMain ? 1 : 0) + (desired1 === bootMain ? 1 : 0) + (desired1 === orbMain ? 1 : 0) + (desired1 === ropeMain ? 1 : 0) + (desired1 === headMain ? 1 : 0) + (desired1 === handMain ? 1 : 0));
        const mainstat2Conflicts = Math.min(usableBasePerSub,(desired2 === chestMain ? 1 : 0) + (desired2 === bootMain ? 1 : 0) + (desired2 === orbMain ? 1 : 0) + (desired2 === ropeMain ? 1 : 0) + (desired2 === headMain ? 1 : 0) + (desired2 === handMain ? 1 : 0));
        const mainstat3Conflicts = Math.min(usableBasePerSub,(desired3 === chestMain ? 1 : 0) + (desired3 === bootMain ? 1 : 0) + (desired3 === orbMain ? 1 : 0) + (desired3 === ropeMain ? 1 : 0) + (desired3 === headMain ? 1 : 0) + (desired3 === handMain ? 1 : 0));
        const mainstat4Conflicts = Math.min(usableBasePerSub,(desired4 === chestMain ? 1 : 0) + (desired4 === bootMain ? 1 : 0) + (desired4 === orbMain ? 1 : 0) + (desired4 === ropeMain ? 1 : 0) + (desired4 === headMain ? 1 : 0) + (desired4 === handMain ? 1 : 0));

        const trash1 = charSubsTrash[0];
        const trash1Conflicts = (trash1 === chestMain ? 1 : 0) + (trash1 === bootMain ? 1 : 0) + (trash1 === orbMain ? 1 : 0) + (trash1 === ropeMain ? 1 : 0) + (trash1 === headMain ? 1 : 0) + (trash1 === handMain ? 1 : 0);

        // defaultMainSubs: ["CritRateBase","CritDamageBase","ATK%","SPDFlat"],
        // defaultTrashSub: "ATKFlat",

        // const minimumAddedRollPerDesired = querySettings.minimumAddedRoll;
        const starterRollsPerRelic = querySettings.rollsPerRelic;
        const failedRollsPerRelic = querySettings.failedAddedRolls;
        const subsPerItem = starterRollsPerRelic - failedRollsPerRelic;
        const possibleSubs = subsPerItem * 6;// - (minimumAddedRollPerDesired * 4);
        // const usableSubs = possibleSubs - 1;

        const stat1TotalConflictOffset = mainstat1Conflicts*subsPerItem;
        const stat2TotalConflictOffset = mainstat2Conflicts*subsPerItem;
        const stat3TotalConflictOffset = mainstat3Conflicts*subsPerItem;
        const stat4TotalConflictOffset = mainstat4Conflicts*subsPerItem;

        const trash1TotalConflictOffset = trash1Conflicts*subsPerItem;

        const sub1Max = charSubstatBounds1[1];
        const sub2Max = charSubstatBounds2[1];
        const sub3Max = charSubstatBounds3[1];
        const sub4Max = charSubstatBounds4[1];

        const sub1Min = charSubstatBounds1[0];
        const sub2Min = charSubstatBounds2[0];
        const sub3Min = charSubstatBounds3[0];
        const sub4Min = charSubstatBounds4[0];

        

        const min = Math.min;
        const max = Math.max;
        const stat1MaxOffset = possibleSubs - min(possibleSubs,sub1Max);
        const stat2MaxOffset = possibleSubs - min(possibleSubs,sub2Max);
        const stat3MaxOffset = possibleSubs - min(possibleSubs,sub3Max);
        const stat4MaxOffset = possibleSubs - min(possibleSubs,sub4Max);



        const substatsConflictSort = [
            {statName: desired1, conflictCount: mainstat1Conflicts, conflictOffset: stat1TotalConflictOffset, min: sub1Min, max: sub1Max, maxOffset: stat1MaxOffset, increment: baseSubstatIncrements[desired1]},
            {statName: desired2, conflictCount: mainstat2Conflicts, conflictOffset: stat2TotalConflictOffset, min: sub2Min, max: sub2Max, maxOffset: stat2MaxOffset, increment: baseSubstatIncrements[desired2]},
            {statName: desired3, conflictCount: mainstat3Conflicts, conflictOffset: stat3TotalConflictOffset, min: sub3Min, max: sub3Max, maxOffset: stat3MaxOffset, increment: baseSubstatIncrements[desired3]},
            {statName: desired4, conflictCount: mainstat4Conflicts, conflictOffset: stat4TotalConflictOffset, min: sub4Min, max: sub4Max, maxOffset: stat4MaxOffset, increment: baseSubstatIncrements[desired4]}
        ].sort(compare.sortByConflicts);
        // console.log(substatsConflictSort)
        // const increment = querySettings.rollsPerBundle;
        
        const conflictNameArray = [headMain,handMain,chestMain,bootMain,orbMain,ropeMain];

        const sortedEntry1 = substatsConflictSort[0];
        const sortedEntry2 = substatsConflictSort[1];
        const sortedEntry3 = substatsConflictSort[2];
        const sortedEntry4 = substatsConflictSort[3];

        const statName1 = sortedEntry1.statName;
        const statName2 = sortedEntry2.statName;
        const statName3 = sortedEntry3.statName;
        const statName4 = sortedEntry4.statName;

        let repeatsCheckerObject = {}

        const sorted1Min = sortedEntry1.min;
        const sorted2Min = sortedEntry2.min;
        const sorted3Min = sortedEntry3.min;
        const sorted4Min = sortedEntry4.min;

        const sorted1Max = sortedEntry1.max;
        const sorted2Max = sortedEntry2.max;
        const sorted3Max = sortedEntry3.max;
        const sorted4Max = sortedEntry4.max;

        const sorted1Inc = sortedEntry1.increment;
        const sorted2Inc = sortedEntry2.increment;
        const sorted3Inc = sortedEntry3.increment;
        const sorted4Inc = sortedEntry4.increment;

        const stat1StartSubs = min(possibleSubs - sortedEntry1.conflictOffset,possibleSubs,sorted1Max);

        const stat1PossiblePieces = [];
        const stat2PossiblePieces = [];
        const stat3PossiblePieces = [];
        const stat4PossiblePieces = [];
        for (let i=0;i<conflictNameArray.length;i++) {
            if (conflictNameArray[i] != statName1) {stat1PossiblePieces.push(i);}
            if (conflictNameArray[i] != statName2) {stat2PossiblePieces.push(i);}
            if (conflictNameArray[i] != statName3) {stat3PossiblePieces.push(i);}
            if (conflictNameArray[i] != statName4) {stat4PossiblePieces.push(i);}
        }


        // const loop1Offset = possibleSubs - stat1StartSubs;
        //loop one starts with either the max possible sub count, or the max minus the conflicts difference, or the max specified by the user, whichever is LEAST
        for (let stat1i = stat1StartSubs; stat1i >= sorted1Min; stat1i -= (stat1i - sorted1Min < sorted1Inc && stat1i>sorted1Min ? stat1i - sorted1Min : sorted1Inc)) {
            const remainingSubs1 = possibleSubs - stat1i;
            const stat1NeededBaseRolls = min(6-mainstat1Conflicts,max(usableBasePerSub,1,Math.ceil(stat1i / subsPerItem)));

            const stat2StartSubs = min(possibleSubs - sortedEntry2.conflictOffset,remainingSubs1,sorted2Max);
            for (let stat2i = stat2StartSubs; stat2i >= sorted2Min; stat2i -= (stat2i - sorted2Min < sorted2Inc && stat2i > sorted2Min ? stat2i - sorted2Min : sorted2Inc)) {
                const remainingSubs2 = possibleSubs - stat2i - stat1i;
                const stat2NeededBaseRolls = min(6-mainstat2Conflicts,max(usableBasePerSub,1,Math.ceil(stat2i / subsPerItem)));

                const stat3StartSubs = min(possibleSubs - sortedEntry3.conflictOffset,remainingSubs2,sorted3Max);
                for (let stat3i = stat3StartSubs; stat3i >= sorted3Min; stat3i -= (stat3i - sorted3Min < sorted3Inc && stat3i>sorted3Min ? stat3i - sorted3Min : sorted3Inc)) {
                    const remainingSubs3 = possibleSubs - stat3i - stat2i - stat1i;
                    const stat3NeededBaseRolls = min(6-mainstat3Conflicts,max(usableBasePerSub,1,Math.ceil(stat3i / subsPerItem)));
                    

                    //SUBSTAT #4, this would be the stat with the least amount of mainstat conflicts, and is derived by taking the values of the other 3 substats
                    //since there is piss for reason to have ANOTHER loop inside here just for the 4th if we know for a fact it is only the remainder of the other 3
                    const stat4StartSubs = max(sorted4Min,min(possibleSubs - sortedEntry4.conflictOffset,remainingSubs3,sorted4Max));
                    const stat4NeededBaseRolls = min(6-mainstat4Conflicts,max(usableBasePerSub,1,Math.ceil(stat4StartSubs / subsPerItem)));
                    // charSubsTrash

                    const totalBaseRollsNeeded = stat1NeededBaseRolls + stat2NeededBaseRolls + stat3NeededBaseRolls + stat4NeededBaseRolls;
                    // console.log(totalBaseRollsNeeded,usableBaseSubstatPool)
                    const isNotPossibleBaseRolls = totalBaseRollsNeeded > usableBaseSubstatPool;
                    
                    // console.log(stat4StartSubs + stat1i + stat2i + stat3i,stat4StartSubs,stat1i,stat2i,stat3i)
                    const sumCompare = (stat4StartSubs + stat1i + stat2i + stat3i) > possibleSubs;
                    if (sumCompare || isNotPossibleBaseRolls) {continue;}




                    /*
                        right now we ensure possible roll distributions by taking the amount of pieces that have mainstat conflicts, and whenever those stats in particular come up to iterate we ensure that the highest
                        that they could start from since we start from the top, is the highest those conflicts would allow for, OR, the highest the total roll pool would allow for because there are times
                        when total available rolls set by the user can be lower than the conflict ceiling on a given stat

                        the conundrum with ensuring relics get filled is that while everything we do right now is still correct, filling a relic relies on reserving spots that may or may not be dictated by the user
                        since right now we do allow the user to specify how many base rolls on a given relic were usable and it defaults to 12

                        so if we still use that user specification then we have 12 slots to fill with base rolls first before we do added rolls 
                        but we'd also need to ensure the the slot placement is based on how many added rolls could happen but also based on mainstat conflicts
                        this is gonna be weird
                    */


                        // usableBaseSubstatPool,baseSubstatTableStarter



                    const newPieceArray = [];
                    let pieceCounter = 0;
                    for (let entry of conflictNameArray) {
                        pieceCounter++;
                        newPieceArray.push({
                            currentRolls: starterRollsPerRelic,
                            slotsOpen: 4,
                            sortPriority: pieceCounter,
                            statsApplied: {},
                            mainStat: entry,
                        });
                    }

                    // const starterRollsPerRelic = querySettings.rollsPerRelic;
                    // const failedRollsPerRelic = querySettings.failedAddedRolls;


                    let newBasePool = usableBaseSubstatPool;
                    let remainingSubsStat1 = stat1i;
                    let remainingSubsBase1 = stat1NeededBaseRolls;
                    for (let indexEntry of stat1PossiblePieces) {
                        const currentPiece = newPieceArray[indexEntry];

                        // stat1NeededBaseRolls
                        // const currentIncrement = Math.min(remainingSubsStat1,Math.ceil(currentPiece.currentRolls / stat1NeededBaseRolls));
                        const currentIncrement = min(Math.ceil(remainingSubsStat1 / remainingSubsBase1),currentPiece.currentRolls);
                        
                        if (!remainingSubsBase1 && !remainingSubsStat1) {break;}
                        if (!currentPiece.slotsOpen || !currentPiece.currentRolls) {continue;}


                        if (currentIncrement > 0 && remainingSubsBase1 > 0) {
                            remainingSubsStat1 -= currentIncrement;
    
                            currentPiece.currentRolls -= currentIncrement;
                            if (!currentPiece.statsApplied[statName1]) {
                                remainingSubsBase1 -= 1;
                                currentPiece.slotsOpen -= 1;
                            }
                            currentPiece.statsApplied[statName1] = currentIncrement + 1;
                        }
                        else if (currentIncrement === 0 && remainingSubsBase1 > 0 && !currentPiece.statsApplied[statName1]) {
                            remainingSubsBase1 -= 1;
                            currentPiece.statsApplied[statName1] = 1;
                            currentPiece.slotsOpen -= 1;
                        }
                    }

                    let remainingSubsStat2 = stat2i;
                    let remainingSubsBase2 = stat2NeededBaseRolls;
                    for (let indexEntry of stat2PossiblePieces) {
                        const currentPiece = newPieceArray[indexEntry];

                        // stat1NeededBaseRolls
                        // const currentIncrement = Math.min(remainingSubsStat1,Math.ceil(currentPiece.currentRolls / stat1NeededBaseRolls));
                        const currentIncrement = min(Math.ceil(remainingSubsStat2 / remainingSubsBase2),currentPiece.currentRolls);
                        
                        if (!remainingSubsBase2 && !remainingSubsStat2) {break;}
                        if (!currentPiece.slotsOpen || !currentPiece.currentRolls) {continue;}


                        if (currentIncrement > 0 && remainingSubsBase2 > 0) {
                            remainingSubsStat2 -= currentIncrement;
    
                            currentPiece.currentRolls -= currentIncrement;
                            if (!currentPiece.statsApplied[statName2]) {
                                remainingSubsBase2 -= 1;
                                currentPiece.slotsOpen -= 1;
                            }
                            currentPiece.statsApplied[statName2] = currentIncrement + 1;
                        }
                        else if (currentIncrement === 0 && remainingSubsBase2 > 0 && !currentPiece.statsApplied[statName2]) {
                            remainingSubsBase2 -= 1;
                            currentPiece.statsApplied[statName2] = 1;
                            currentPiece.slotsOpen -= 1;
                        }
                    }

                    let remainingSubsStat3 = stat3i;
                    let remainingSubsBase3 = stat3NeededBaseRolls;
                    for (let indexEntry of stat3PossiblePieces) {
                        const currentPiece = newPieceArray[indexEntry];

                        // stat1NeededBaseRolls
                        // const currentIncrement = Math.min(remainingSubsStat1,Math.ceil(currentPiece.currentRolls / stat1NeededBaseRolls));
                        const currentIncrement = min(Math.ceil(remainingSubsStat3 / remainingSubsBase3),currentPiece.currentRolls);
                        
                        if (!remainingSubsBase3 && !remainingSubsStat3) {break;}
                        if (!currentPiece.slotsOpen || !currentPiece.currentRolls) {continue;}

                        if (currentIncrement > 0 && remainingSubsBase3 > 0) {
                            remainingSubsStat3 -= currentIncrement;
    
                            currentPiece.currentRolls -= currentIncrement;
                            if (!currentPiece.statsApplied[statName3]) {
                                remainingSubsBase3 -= 1;
                                currentPiece.slotsOpen -= 1;
                            }
                            currentPiece.statsApplied[statName3] = currentIncrement + 1;
                        }
                        else if (currentIncrement === 0 && remainingSubsBase3 > 0 && !currentPiece.statsApplied[statName3]) {
                            remainingSubsBase3 -= 1;
                            currentPiece.statsApplied[statName3] = 1;
                            currentPiece.slotsOpen -= 1;
                        }
                    }

                    let remainingSubsStat4 = stat4StartSubs;
                    let remainingSubsBase4 = stat4NeededBaseRolls;
                    for (let indexEntry of stat4PossiblePieces) {
                        const currentPiece = newPieceArray[indexEntry];

                        // stat1NeededBaseRolls
                        // const currentIncrement = Math.min(remainingSubsStat1,Math.ceil(currentPiece.currentRolls / stat1NeededBaseRolls));
                        const currentIncrement = min(Math.ceil(remainingSubsStat4 / remainingSubsBase4),currentPiece.currentRolls);

                        if (!remainingSubsBase4 && !remainingSubsStat4) {break;}
                        if (!currentPiece.slotsOpen || !currentPiece.currentRolls) {continue;}

                        if (currentIncrement > 0 && remainingSubsBase4 > 0) {
                            remainingSubsStat4 -= currentIncrement;
    
                            currentPiece.currentRolls -= currentIncrement;
                            if (!currentPiece.statsApplied[statName4]) {
                                remainingSubsBase4 -= 1;
                                currentPiece.slotsOpen -= 1;
                            }
                            currentPiece.statsApplied[statName4] = currentIncrement + 1;
                        }
                        else if (currentIncrement === 0 && remainingSubsBase4 > 0 && !currentPiece.statsApplied[statName4]) {
                            remainingSubsBase4 -= 1;
                            currentPiece.statsApplied[statName4] = 1;
                            currentPiece.slotsOpen -= 1;
                        }
                    }



                    //after the desired stats are filled in on their base rolls and added rolls, then this will loop over each supposed piece and fill in trash stats and use the rest of the rolls
                    //rolls used will be based on the user defined rolls-per-relic stat though just keep in mind, so a "6" roll is not possible when rolls per relic is set to 4, only a 5 roll could take place (base + 4 rolls)
                    for (let trashStatName of charSubsTrash) {

                        for (let pieceObject of newPieceArray) {
                            // if (!pieceObject.slotsOpen & !pieceObject.currentRolls) {continue;}
                            if (!pieceObject.slotsOpen || trashStatName === pieceObject.mainStat) {continue;}

                            const rollsToApply = pieceObject.currentRolls > 0 ? Math.ceil(pieceObject.currentRolls/pieceObject.slotsOpen) : 0;
                            pieceObject.currentRolls -= rollsToApply;

                            pieceObject.statsApplied[trashStatName] = 1 + rollsToApply;
                            pieceObject.slotsOpen -= 1;
                        }
                    }


                    // console.log(newPieceArray,remainingSubsStat1,remainingSubsStat2,remainingSubsStat3,remainingSubsStat4)

                    // stat1i would represent the total added rolls desired in this loop
                    // subsPerItem would be the total added rolls possible on EACH relic

                    
                    
                    
                    

                    //not sure if we're actually gonna restrict this way, but this would ensure that the minimum base rolls required for a given combination does not exceed the
                    //user defined base roll pool
                    

                    // const baseTable = {...charSubsStarter};
                    const baseTable = {...baseSubstatTableStarter};


                    for (let pieceObject of newPieceArray) {
                        const currentPieceStats = pieceObject.statsApplied;

                        for (let statName in currentPieceStats) {
                            const currentStatValue = currentPieceStats[statName];

                            baseTable[statName] += currentStatValue;
                        }
                    }

                    let dupeKey = "";
                    for (let statName in baseTable) {
                        const currentRollValue = baseTable[statName];

                        dupeKey += currentRollValue + "|";
                    }

                    if (!repeatsCheckerObject[dupeKey]) {repeatsCheckerObject[dupeKey] = 1;}
                    else {continue;}

                    // baseTable[statName1] += stat1i;
                    // baseTable[statName2] += stat2i;
                    // baseTable[statName3] += stat3i;
                    // baseTable[statName4] += stat4StartSubs;

                    // const remainingTrashRolls = possibleSubs - stat4StartSubs - stat3i - stat2i - stat1i;
                    // baseTable[trash1] += min(possibleSubs - trash1TotalConflictOffset,remainingTrashRolls);

                    //TODO: this is omega fuckin cursed, I also dislike needing to spread every time but I'm also unsure if there is actually another way, look at this later

                    yield {baseTable,newPieceArray};
                }
            }
        }
        repeatsCheckerObject = null;//I have no actual clue if this will matter, but for the sake of the garbage collector, I'd prefer to clear the mapping BEFORE we exit this function at any given time just in case.
    },
//     * getCharacterSubstatIteration(baseSubstatIncrements,querySettings,desiredStats,charSubsStarter,chestMain,bootMain,orbMain,ropeMain,charSubstatBounds1,charSubstatBounds2,charSubstatBounds3,charSubstatBounds4,charSubsTrash) {
//     const desired1 = desiredStats[0];
//     const desired2 = desiredStats[1];
//     const desired3 = desiredStats[2];
//     const desired4 = desiredStats[3];

//     const headMain = "HPFlat";
//     const handMain = "ATKFlat";

//     //we need to know the total number of mainstat conflicts, PER stat desired
//     const mainstat1Conflicts = (desired1 === chestMain ? 1 : 0) + (desired1 === bootMain ? 1 : 0) + (desired1 === orbMain ? 1 : 0) + (desired1 === ropeMain ? 1 : 0) + (desired1 === headMain ? 1 : 0) + (desired1 === handMain ? 1 : 0);
//     const mainstat2Conflicts = (desired2 === chestMain ? 1 : 0) + (desired2 === bootMain ? 1 : 0) + (desired2 === orbMain ? 1 : 0) + (desired2 === ropeMain ? 1 : 0) + (desired2 === headMain ? 1 : 0) + (desired2 === handMain ? 1 : 0);
//     const mainstat3Conflicts = (desired3 === chestMain ? 1 : 0) + (desired3 === bootMain ? 1 : 0) + (desired3 === orbMain ? 1 : 0) + (desired3 === ropeMain ? 1 : 0) + (desired3 === headMain ? 1 : 0) + (desired3 === handMain ? 1 : 0);
//     const mainstat4Conflicts = (desired4 === chestMain ? 1 : 0) + (desired4 === bootMain ? 1 : 0) + (desired4 === orbMain ? 1 : 0) + (desired4 === ropeMain ? 1 : 0) + (desired4 === headMain ? 1 : 0) + (desired4 === handMain ? 1 : 0);

//     const trash1 = charSubsTrash[0];
//     const trash1Conflicts = (trash1 === chestMain ? 1 : 0) + (trash1 === bootMain ? 1 : 0) + (trash1 === orbMain ? 1 : 0) + (trash1 === ropeMain ? 1 : 0) + (trash1 === headMain ? 1 : 0) + (trash1 === handMain ? 1 : 0);

//     // defaultMainSubs: ["CritRateBase","CritDamageBase","ATK%","SPDFlat"],
//     // defaultTrashSub: "ATKFlat",

//     // const minimumAddedRollPerDesired = querySettings.minimumAddedRoll;
//     const subsPerItem = querySettings.rollsPerRelic - querySettings.failedAddedRolls;
//     const possibleSubs = subsPerItem * 6;// - (minimumAddedRollPerDesired * 4);
//     // const usableSubs = possibleSubs - 1;

//     const stat1TotalConflictOffset = mainstat1Conflicts*subsPerItem;
//     const stat2TotalConflictOffset = mainstat2Conflicts*subsPerItem;
//     const stat3TotalConflictOffset = mainstat3Conflicts*subsPerItem;
//     const stat4TotalConflictOffset = mainstat4Conflicts*subsPerItem;

//     const trash1TotalConflictOffset = trash1Conflicts*subsPerItem;

//     const sub1Max = charSubstatBounds1[1];
//     const sub2Max = charSubstatBounds2[1];
//     const sub3Max = charSubstatBounds3[1];
//     const sub4Max = charSubstatBounds4[1];

//     const sub1Min = charSubstatBounds1[0];
//     const sub2Min = charSubstatBounds2[0];
//     const sub3Min = charSubstatBounds3[0];
//     const sub4Min = charSubstatBounds4[0];

    

//     const min = Math.min;
//     const stat1MaxOffset = possibleSubs - min(possibleSubs,sub1Max);
//     const stat2MaxOffset = possibleSubs - min(possibleSubs,sub2Max);
//     const stat3MaxOffset = possibleSubs - min(possibleSubs,sub3Max);
//     const stat4MaxOffset = possibleSubs - min(possibleSubs,sub4Max);

//     const substatsConflictSort = [
//         {statName: desired1, conflictCount: mainstat1Conflicts, conflictOffset: stat1TotalConflictOffset, min: sub1Min, max: sub1Max, maxOffset: stat1MaxOffset, increment: baseSubstatIncrements[desired1]},
//         {statName: desired2, conflictCount: mainstat2Conflicts, conflictOffset: stat2TotalConflictOffset, min: sub2Min, max: sub2Max, maxOffset: stat2MaxOffset, increment: baseSubstatIncrements[desired2]},
//         {statName: desired3, conflictCount: mainstat3Conflicts, conflictOffset: stat3TotalConflictOffset, min: sub3Min, max: sub3Max, maxOffset: stat3MaxOffset, increment: baseSubstatIncrements[desired3]},
//         {statName: desired4, conflictCount: mainstat4Conflicts, conflictOffset: stat4TotalConflictOffset, min: sub4Min, max: sub4Max, maxOffset: stat4MaxOffset, increment: baseSubstatIncrements[desired4]}
//     ].sort(compare.sortByConflicts);
//     // console.log(substatsConflictSort)
//     // const increment = querySettings.rollsPerBundle;
    

//     const sortedEntry1 = substatsConflictSort[0];
//     const sortedEntry2 = substatsConflictSort[1];
//     const sortedEntry3 = substatsConflictSort[2];
//     const sortedEntry4 = substatsConflictSort[3];

//     const statName1 = sortedEntry1.statName;
//     const statName2 = sortedEntry2.statName;
//     const statName3 = sortedEntry3.statName;
//     const statName4 = sortedEntry4.statName;

//     // let repeatsCheckerObject = {}

//     const sorted1Min = sortedEntry1.min;
//     const sorted2Min = sortedEntry2.min;
//     const sorted3Min = sortedEntry3.min;
//     const sorted4Min = sortedEntry4.min;

//     const sorted1Max = sortedEntry1.max;
//     const sorted2Max = sortedEntry2.max;
//     const sorted3Max = sortedEntry3.max;
//     const sorted4Max = sortedEntry4.max;

//     const sorted1Inc = sortedEntry1.increment;
//     const sorted2Inc = sortedEntry2.increment;
//     const sorted3Inc = sortedEntry3.increment;
//     const sorted4Inc = sortedEntry4.increment;

//     const stat1StartSubs = min(possibleSubs - sortedEntry1.conflictOffset,possibleSubs,sorted1Max);
//     // const loop1Offset = possibleSubs - stat1StartSubs;
//     //loop one starts with either the max possible sub count, or the max minus the conflicts difference, or the max specified by the user, whichever is LEAST
//     for (let stat1i = stat1StartSubs; stat1i >= sorted1Min; stat1i -= (stat1i - sorted1Min < sorted1Inc && stat1i>sorted1Min ? stat1i - sorted1Min : sorted1Inc)) {
//         const remainingSubs1 = possibleSubs - stat1i;


//         const stat2StartSubs = min(possibleSubs - sortedEntry2.conflictOffset,remainingSubs1,sorted2Max);
//         for (let stat2i = stat2StartSubs; stat2i >= sorted2Min; stat2i -= (stat2i - sorted2Min < sorted2Inc && stat2i > sorted2Min ? stat2i - sorted2Min : sorted2Inc)) {
//             const remainingSubs2 = possibleSubs - stat2i - stat1i;

//             const stat3StartSubs = min(possibleSubs - sortedEntry3.conflictOffset,remainingSubs2,sorted3Max);
//             for (let stat3i = stat3StartSubs; stat3i >= sorted3Min; stat3i -= (stat3i - sorted3Min < sorted3Inc && stat3i>sorted3Min ? stat3i - sorted3Min : sorted3Inc)) {
//                 const remainingSubs3 = possibleSubs - stat3i - stat2i - stat1i;
                
//                 const stat4StartSubs = Math.max(sorted4Min,min(possibleSubs - sortedEntry4.conflictOffset,remainingSubs3,sorted4Max));
//                 // charSubsTrash


                
//                 // console.log(stat4StartSubs + stat1i + stat2i + stat3i,stat4StartSubs,stat1i,stat2i,stat3i)
//                 const sumCompare = (stat4StartSubs + stat1i + stat2i + stat3i) > possibleSubs;
//                 if (sumCompare) {continue;}




//                 /*
//                     right now we ensure possible roll distributions by taking the amount of pieces that have mainstat conflicts, and whenever those stats in particular come up to iterate we ensure that the highest
//                     that they could start from since we start from the top, is the highest those conflicts would allow for, OR, the highest the total roll pool would allow for because there are times
//                     when total available rolls set by the user can be lower than the conflict ceiling on a given stat

//                     the conundrum with ensuring relics get filled is that while everything we do right now is still correct, filling a relic relies on reserving spots that may or may not be dictated by the user
//                     since right now we do allow the user to specify how many base rolls on a given relic were usable and it defaults to 12

//                     so if we still use that user specification then we have 12 slots to fill with base rolls first before we do added rolls 
//                     but we'd also need to ensure the the slot placement is based on how many added rolls could happen but also based on mainstat conflicts
//                     this is gonna be weird
//                 */














//                 // const keyString = stat1i + "|" + stat2i + "|" + stat3i + "|" + stat4StartSubs;
//                 // if (!repeatsCheckerObject[keyString]) {repeatsCheckerObject[keyString] = 1;}
//                 // else {continue;}

//                 const baseTable = {...charSubsStarter};

//                 baseTable[statName1] += stat1i;
//                 baseTable[statName2] += stat2i;
//                 baseTable[statName3] += stat3i;
//                 baseTable[statName4] += stat4StartSubs;

//                 const remainingTrashRolls = possibleSubs - stat4StartSubs - stat3i - stat2i - stat1i;
//                 baseTable[trash1] += min(possibleSubs - trash1TotalConflictOffset,remainingTrashRolls);

//                 //TODO: this is omega fuckin cursed, I also dislike needing to spread every time but I'm also unsure if there is actually another way, look at this later

//                 yield baseTable;
//             }
//         }
//     }
// },


    * getCharacterSubstatIteration(usableBaseSubstatPool,baseSubstatTableStarter,baseSubstatIncrements,querySettings,desiredStats,charSubsStarter,chestMain,bootMain,orbMain,ropeMain,charSubstatBounds1,charSubstatBounds2,charSubstatBounds3,charSubstatBounds4,charSubsTrash) {
        const desired1 = desiredStats[0];
        const desired2 = desiredStats[1];
        const desired3 = desiredStats[2];
        const desired4 = desiredStats[3];

        const headMain = "HPFlat";
        const handMain = "ATKFlat";

        const usableBasePerSub = usableBaseSubstatPool / 4;
        // console.log(usableBasePerSub)

        /*
            12 / 4 = 3 relics max, 3 conflicts
            20 / 4 = 5 relics max, 1 conflict 
        */

        //we need to know the total number of mainstat conflicts, PER stat desired
        const mainstat1Conflicts = Math.max(6-usableBasePerSub,(desired1 === chestMain ? 1 : 0) + (desired1 === bootMain ? 1 : 0) + (desired1 === orbMain ? 1 : 0) + (desired1 === ropeMain ? 1 : 0) + (desired1 === headMain ? 1 : 0) + (desired1 === handMain ? 1 : 0));
        const mainstat2Conflicts = Math.max(6-usableBasePerSub,(desired2 === chestMain ? 1 : 0) + (desired2 === bootMain ? 1 : 0) + (desired2 === orbMain ? 1 : 0) + (desired2 === ropeMain ? 1 : 0) + (desired2 === headMain ? 1 : 0) + (desired2 === handMain ? 1 : 0));
        const mainstat3Conflicts = Math.max(6-usableBasePerSub,(desired3 === chestMain ? 1 : 0) + (desired3 === bootMain ? 1 : 0) + (desired3 === orbMain ? 1 : 0) + (desired3 === ropeMain ? 1 : 0) + (desired3 === headMain ? 1 : 0) + (desired3 === handMain ? 1 : 0));
        const mainstat4Conflicts = Math.max(6-usableBasePerSub,(desired4 === chestMain ? 1 : 0) + (desired4 === bootMain ? 1 : 0) + (desired4 === orbMain ? 1 : 0) + (desired4 === ropeMain ? 1 : 0) + (desired4 === headMain ? 1 : 0) + (desired4 === handMain ? 1 : 0));

        const trash1 = charSubsTrash[0];
        const trash1Conflicts = (trash1 === chestMain ? 1 : 0) + (trash1 === bootMain ? 1 : 0) + (trash1 === orbMain ? 1 : 0) + (trash1 === ropeMain ? 1 : 0) + (trash1 === headMain ? 1 : 0) + (trash1 === handMain ? 1 : 0);

        // defaultMainSubs: ["CritRateBase","CritDamageBase","ATK%","SPDFlat"],
        // defaultTrashSub: "ATKFlat",

        // const minimumAddedRollPerDesired = querySettings.minimumAddedRoll;
        const starterRollsPerRelic = querySettings.rollsPerRelic;
        const failedRollsPerRelic = querySettings.failedAddedRolls;
        const subsPerItem = starterRollsPerRelic - failedRollsPerRelic;
        const possibleSubs = subsPerItem * 6;// - (minimumAddedRollPerDesired * 4);
        // const usableSubs = possibleSubs - 1;

        const stat1TotalConflictOffset = mainstat1Conflicts*subsPerItem;
        const stat2TotalConflictOffset = mainstat2Conflicts*subsPerItem;
        const stat3TotalConflictOffset = mainstat3Conflicts*subsPerItem;
        const stat4TotalConflictOffset = mainstat4Conflicts*subsPerItem;

        const trash1TotalConflictOffset = trash1Conflicts*subsPerItem;

        const sub1Max = charSubstatBounds1[1];
        const sub2Max = charSubstatBounds2[1];
        const sub3Max = charSubstatBounds3[1];
        const sub4Max = charSubstatBounds4[1];

        const sub1Min = charSubstatBounds1[0];
        const sub2Min = charSubstatBounds2[0];
        const sub3Min = charSubstatBounds3[0];
        const sub4Min = charSubstatBounds4[0];

        

        const min = Math.min;
        const max = Math.max;
        const stat1MaxOffset = possibleSubs - min(possibleSubs,sub1Max);
        const stat2MaxOffset = possibleSubs - min(possibleSubs,sub2Max);
        const stat3MaxOffset = possibleSubs - min(possibleSubs,sub3Max);
        const stat4MaxOffset = possibleSubs - min(possibleSubs,sub4Max);



        const substatsConflictSort = [
            {statName: desired1, conflictCount: mainstat1Conflicts, conflictOffset: stat1TotalConflictOffset, min: sub1Min, max: sub1Max, maxOffset: stat1MaxOffset, increment: baseSubstatIncrements[desired1]},
            {statName: desired2, conflictCount: mainstat2Conflicts, conflictOffset: stat2TotalConflictOffset, min: sub2Min, max: sub2Max, maxOffset: stat2MaxOffset, increment: baseSubstatIncrements[desired2]},
            {statName: desired3, conflictCount: mainstat3Conflicts, conflictOffset: stat3TotalConflictOffset, min: sub3Min, max: sub3Max, maxOffset: stat3MaxOffset, increment: baseSubstatIncrements[desired3]},
            {statName: desired4, conflictCount: mainstat4Conflicts, conflictOffset: stat4TotalConflictOffset, min: sub4Min, max: sub4Max, maxOffset: stat4MaxOffset, increment: baseSubstatIncrements[desired4]}
        ].sort(compare.sortByConflicts);
        // console.log(substatsConflictSort)
        // const increment = querySettings.rollsPerBundle;
        
        const conflictNameArray = [headMain,handMain,chestMain,bootMain,orbMain,ropeMain];

        const sortedEntry1 = substatsConflictSort[0];
        const sortedEntry2 = substatsConflictSort[1];
        const sortedEntry3 = substatsConflictSort[2];
        const sortedEntry4 = substatsConflictSort[3];

        const statName1 = sortedEntry1.statName;
        const statName2 = sortedEntry2.statName;
        const statName3 = sortedEntry3.statName;
        const statName4 = sortedEntry4.statName;

        let repeatsCheckerObject = {}

        const sorted1Min = sortedEntry1.min;
        const sorted2Min = sortedEntry2.min;
        const sorted3Min = sortedEntry3.min;
        const sorted4Min = sortedEntry4.min;

        const sorted1Max = sortedEntry1.max;
        const sorted2Max = sortedEntry2.max;
        const sorted3Max = sortedEntry3.max;
        const sorted4Max = sortedEntry4.max;

        const sorted1Inc = sortedEntry1.increment;
        const sorted2Inc = sortedEntry2.increment;
        const sorted3Inc = sortedEntry3.increment;
        const sorted4Inc = sortedEntry4.increment;

        const stat1StartSubs = min(possibleSubs - sortedEntry1.conflictOffset,possibleSubs,sorted1Max);

        const stat1PossiblePieces = [];
        const stat2PossiblePieces = [];
        const stat3PossiblePieces = [];
        const stat4PossiblePieces = [];
        for (let i=0;i<conflictNameArray.length;i++) {
            if (conflictNameArray[i] != statName1) {stat1PossiblePieces.push(i);}
            if (conflictNameArray[i] != statName2) {stat2PossiblePieces.push(i);}
            if (conflictNameArray[i] != statName3) {stat3PossiblePieces.push(i);}
            if (conflictNameArray[i] != statName4) {stat4PossiblePieces.push(i);}
        }


        // const loop1Offset = possibleSubs - stat1StartSubs;
        //loop one starts with either the max possible sub count, or the max minus the conflicts difference, or the max specified by the user, whichever is LEAST
        for (let stat1i = stat1StartSubs; stat1i >= sorted1Min; stat1i -= (stat1i - sorted1Min < sorted1Inc && stat1i>sorted1Min ? stat1i - sorted1Min : sorted1Inc)) {
            const remainingSubs1 = possibleSubs - stat1i;
            const stat1NeededBaseRolls = min(6-sortedEntry1.conflictCount,max(usableBasePerSub,1,Math.ceil(stat1i / subsPerItem)));

            const stat2StartSubs = min(possibleSubs - sortedEntry2.conflictOffset,remainingSubs1,sorted2Max);
            for (let stat2i = stat2StartSubs; stat2i >= sorted2Min; stat2i -= (stat2i - sorted2Min < sorted2Inc && stat2i > sorted2Min ? stat2i - sorted2Min : sorted2Inc)) {
                const remainingSubs2 = possibleSubs - stat2i - stat1i;
                const stat2NeededBaseRolls = min(6-sortedEntry2.conflictCount,max(usableBasePerSub,1,Math.ceil(stat2i / subsPerItem)));

                const stat3StartSubs = min(possibleSubs - sortedEntry3.conflictOffset,remainingSubs2,sorted3Max);
                for (let stat3i = stat3StartSubs; stat3i >= sorted3Min; stat3i -= (stat3i - sorted3Min < sorted3Inc && stat3i>sorted3Min ? stat3i - sorted3Min : sorted3Inc)) {
                    const remainingSubs3 = possibleSubs - stat3i - stat2i - stat1i;
                    const stat3NeededBaseRolls = min(6-sortedEntry3.conflictCount,max(usableBasePerSub,1,Math.ceil(stat3i / subsPerItem)));
                    

                    //SUBSTAT #4, this would be the stat with the least amount of mainstat conflicts, and is derived by taking the values of the other 3 substats
                    //since there is piss for reason to have ANOTHER loop inside here just for the 4th if we know for a fact it is only the remainder of the other 3
                    const stat4StartSubs = max(sorted4Min,min(possibleSubs - sortedEntry4.conflictOffset,remainingSubs3,sorted4Max));
                    const stat4NeededBaseRolls = min(6-sortedEntry4.conflictCount,max(usableBasePerSub,1,Math.ceil(stat4StartSubs / subsPerItem)));
                    // charSubsTrash

                    const totalBaseRollsNeeded = stat1NeededBaseRolls + stat2NeededBaseRolls + stat3NeededBaseRolls + stat4NeededBaseRolls;
                    // console.log(totalBaseRollsNeeded,usableBaseSubstatPool)
                    const isNotPossibleBaseRolls = totalBaseRollsNeeded > usableBaseSubstatPool;
                    
                    // console.log(stat4StartSubs + stat1i + stat2i + stat3i,stat4StartSubs,stat1i,stat2i,stat3i)
                    const sumCompare = (stat4StartSubs + stat1i + stat2i + stat3i) > possibleSubs;
                    if (sumCompare || isNotPossibleBaseRolls) {continue;}




                    /*
                        right now we ensure possible roll distributions by taking the amount of pieces that have mainstat conflicts, and whenever those stats in particular come up to iterate we ensure that the highest
                        that they could start from since we start from the top, is the highest those conflicts would allow for, OR, the highest the total roll pool would allow for because there are times
                        when total available rolls set by the user can be lower than the conflict ceiling on a given stat

                        the conundrum with ensuring relics get filled is that while everything we do right now is still correct, filling a relic relies on reserving spots that may or may not be dictated by the user
                        since right now we do allow the user to specify how many base rolls on a given relic were usable and it defaults to 12

                        so if we still use that user specification then we have 12 slots to fill with base rolls first before we do added rolls 
                        but we'd also need to ensure the the slot placement is based on how many added rolls could happen but also based on mainstat conflicts
                        this is gonna be weird
                    */


                        // usableBaseSubstatPool,baseSubstatTableStarter



                    const newPieceArray = [];
                    let pieceCounter = 0;
                    for (let entry of conflictNameArray) {
                        pieceCounter++;
                        newPieceArray.push({
                            currentRolls: starterRollsPerRelic,
                            slotsOpen: 4,
                            sortPriority: pieceCounter,
                            statsApplied: {},
                            mainStat: entry,
                        });
                    }

                    // const starterRollsPerRelic = querySettings.rollsPerRelic;
                    // const failedRollsPerRelic = querySettings.failedAddedRolls;


                    let newBasePool = usableBaseSubstatPool;
                    let remainingSubsStat1 = stat1i;
                    let remainingSubsBase1 = stat1NeededBaseRolls;
                    for (let indexEntry of stat1PossiblePieces) {
                        const currentPiece = newPieceArray[indexEntry];

                        // stat1NeededBaseRolls
                        // const currentIncrement = Math.min(remainingSubsStat1,Math.ceil(currentPiece.currentRolls / stat1NeededBaseRolls));
                        const currentIncrement = min(Math.ceil(remainingSubsStat1 / remainingSubsBase1),currentPiece.currentRolls);
                        
                        if (!remainingSubsBase1 && !remainingSubsStat1) {break;}
                        if (!currentPiece.slotsOpen) {continue;}

                        const statIsNotThereYet = currentPiece.statsApplied[statName1] == undefined;
                        if (currentIncrement > 0 && remainingSubsBase1 > 0 && currentPiece.currentRolls > 0) {
                            remainingSubsStat1 -= currentIncrement;

                            currentPiece.currentRolls -= currentIncrement;
                            if (statIsNotThereYet) {
                                remainingSubsBase1 -= 1;
                                currentPiece.slotsOpen -= 1;
                            }
                            currentPiece.statsApplied[statName1] = currentIncrement + 1;
                        }
                        else if (currentIncrement === 0 && remainingSubsBase1 > 0 && statIsNotThereYet) {
                            remainingSubsBase1 -= 1;
                            currentPiece.statsApplied[statName1] = 1;
                            currentPiece.slotsOpen -= 1;
                        }
                    }

                    let remainingSubsStat2 = stat2i;
                    let remainingSubsBase2 = stat2NeededBaseRolls;
                    for (let indexEntry of stat2PossiblePieces) {
                        const currentPiece = newPieceArray[indexEntry];

                        // stat1NeededBaseRolls
                        // const currentIncrement = Math.min(remainingSubsStat1,Math.ceil(currentPiece.currentRolls / stat1NeededBaseRolls));
                        const currentIncrement = min(Math.ceil(remainingSubsStat2 / remainingSubsBase2),currentPiece.currentRolls);
                        
                        if (!remainingSubsBase2 && !remainingSubsStat2) {break;}
                        if (!currentPiece.slotsOpen) {continue;}

                        const statIsNotThereYet = currentPiece.statsApplied[statName2] == undefined;
                        if (currentIncrement > 0 && remainingSubsBase2 > 0 && currentPiece.currentRolls > 0) {
                            remainingSubsStat2 -= currentIncrement;

                            currentPiece.currentRolls -= currentIncrement;
                            if (statIsNotThereYet) {
                                remainingSubsBase2 -= 1;
                                currentPiece.slotsOpen -= 1;
                            }
                            currentPiece.statsApplied[statName2] = currentIncrement + 1;
                        }
                        else if (currentIncrement === 0 && remainingSubsBase2 > 0 && statIsNotThereYet) {
                            remainingSubsBase2 -= 1;
                            currentPiece.statsApplied[statName2] = 1;
                            currentPiece.slotsOpen -= 1;
                        }
                    }

                    let remainingSubsStat3 = stat3i;
                    let remainingSubsBase3 = stat3NeededBaseRolls;
                    for (let indexEntry of stat3PossiblePieces) {
                        const currentPiece = newPieceArray[indexEntry];

                        // stat1NeededBaseRolls
                        // const currentIncrement = Math.min(remainingSubsStat1,Math.ceil(currentPiece.currentRolls / stat1NeededBaseRolls));
                        const currentIncrement = min(Math.ceil(remainingSubsStat3 / remainingSubsBase3),currentPiece.currentRolls);
                        
                        if (!remainingSubsBase3 && !remainingSubsStat3) {break;}
                        if (!currentPiece.slotsOpen) {continue;}

                        const statIsNotThereYet = currentPiece.statsApplied[statName3] == undefined;
                        if (currentIncrement > 0 && remainingSubsBase3 > 0 && currentPiece.currentRolls > 0) {
                            remainingSubsStat3 -= currentIncrement;

                            currentPiece.currentRolls -= currentIncrement;
                            if (statIsNotThereYet) {
                                remainingSubsBase3 -= 1;
                                currentPiece.slotsOpen -= 1;
                            }
                            currentPiece.statsApplied[statName3] = currentIncrement + 1;
                        }
                        else if (currentIncrement === 0 && remainingSubsBase3 > 0 && statIsNotThereYet) {
                            remainingSubsBase3 -= 1;
                            currentPiece.statsApplied[statName3] = 1;
                            currentPiece.slotsOpen -= 1;
                        }
                    }

                    let remainingSubsStat4 = stat4StartSubs;
                    let remainingSubsBase4 = stat4NeededBaseRolls;
                    for (let indexEntry of stat4PossiblePieces) {
                        const currentPiece = newPieceArray[indexEntry];

                        // stat1NeededBaseRolls
                        // const currentIncrement = Math.min(remainingSubsStat1,Math.ceil(currentPiece.currentRolls / stat1NeededBaseRolls));
                        const currentIncrement = min(Math.ceil(remainingSubsStat4 / remainingSubsBase4),currentPiece.currentRolls);

                        if (!remainingSubsBase4 && !remainingSubsStat4) {break;}
                        if (!currentPiece.slotsOpen) {continue;}

                        const statIsNotThereYet = currentPiece.statsApplied[statName4] == undefined;
                        if (currentIncrement > 0 && remainingSubsBase4 > 0 && currentPiece.currentRolls > 0) {
                            remainingSubsStat4 -= currentIncrement;

                            currentPiece.currentRolls -= currentIncrement;
                            if (statIsNotThereYet) {
                                remainingSubsBase4 -= 1;
                                currentPiece.slotsOpen -= 1;
                            }
                            currentPiece.statsApplied[statName4] = currentIncrement + 1;
                        }
                        else if (currentIncrement === 0 && remainingSubsBase4 > 0 && statIsNotThereYet) {
                            remainingSubsBase4 -= 1;
                            currentPiece.statsApplied[statName4] = 1;
                            currentPiece.slotsOpen -= 1;
                        }
                    }



                    //after the desired stats are filled in on their base rolls and added rolls, then this will loop over each supposed piece and fill in trash stats and use the rest of the rolls
                    //rolls used will be based on the user defined rolls-per-relic stat though just keep in mind, so a "6" roll is not possible when rolls per relic is set to 4, only a 5 roll could take place (base + 4 rolls)
                    for (let trashStatName of charSubsTrash) {

                        for (let pieceObject of newPieceArray) {
                            // if (!pieceObject.slotsOpen & !pieceObject.currentRolls) {continue;}
                            if (!pieceObject.slotsOpen || trashStatName === pieceObject.mainStat) {continue;}

                            const rollsToApply = pieceObject.currentRolls > 0 ? Math.ceil(pieceObject.currentRolls/pieceObject.slotsOpen) : 0;
                            pieceObject.currentRolls -= rollsToApply;

                            pieceObject.statsApplied[trashStatName] = 1 + rollsToApply;
                            pieceObject.slotsOpen -= 1;
                        }
                    }


                    // console.log(newPieceArray,remainingSubsStat1,remainingSubsStat2,remainingSubsStat3,remainingSubsStat4)

                    // stat1i would represent the total added rolls desired in this loop
                    // subsPerItem would be the total added rolls possible on EACH relic

                    
                    
                    
                    

                    //not sure if we're actually gonna restrict this way, but this would ensure that the minimum base rolls required for a given combination does not exceed the
                    //user defined base roll pool
                    

                    // const baseTable = {...charSubsStarter};
                    const baseTable = {...baseSubstatTableStarter};


                    for (let pieceObject of newPieceArray) {
                        const currentPieceStats = pieceObject.statsApplied;

                        for (let statName in currentPieceStats) {
                            const currentStatValue = currentPieceStats[statName];

                            baseTable[statName] += currentStatValue;
                        }
                    }

                    let dupeKey = "";
                    for (let statName in baseTable) {
                        const currentRollValue = baseTable[statName];

                        dupeKey += currentRollValue + "|";
                    }

                    if (!repeatsCheckerObject[dupeKey]) {repeatsCheckerObject[dupeKey] = 1;}
                    else {continue;}

                    // baseTable[statName1] += stat1i;
                    // baseTable[statName2] += stat2i;
                    // baseTable[statName3] += stat3i;
                    // baseTable[statName4] += stat4StartSubs;

                    // const remainingTrashRolls = possibleSubs - stat4StartSubs - stat3i - stat2i - stat1i;
                    // baseTable[trash1] += min(possibleSubs - trash1TotalConflictOffset,remainingTrashRolls);

                    //TODO: this is omega fuckin cursed, I also dislike needing to spread every time but I'm also unsure if there is actually another way, look at this later

                    yield {baseTable,newPieceArray};
                }
            }
        }
        repeatsCheckerObject = null;//I have no actual clue if this will matter, but for the sake of the garbage collector, I'd prefer to clear the mapping BEFORE we exit this function at any given time just in case.
    },
    hertaShopLCList: new Set ([
        "Cruising in the Stellar Sea",
        "On the Fall of an Aeon",
        "Texture of Memories",
        "Solitary Healing",
        "Eternal Calculus",
        "Memory's Curtain Never Falls",

        "Hey, Over Here",
        "For Tomorrow's Journey",
        "Ninja Record: Sound Hunt",
        "The Great Cosmic Enterprise",
        "Before the Tutorial Mission Starts"
    ]),
    MoCShopLCList: new Set ([
        "Quid Pro Quo",
        "Fermata",
        "We Are Wildfire",
        "River Flows in Spring",
        "Past and Future",
        "Woof! Walk Time!",
        "The Seriousness of Breakfast",
        "What is Real?",
        "Dreamville Adventure",
        "Final Victor",
        "Flames Afar",
        "Destiny's Threads Forewoven",
        "The Day The Cosmos Fell",
        "It's Showtime",
        "Victory In a Blink"
    ]),
    battlePassLCList: new Set ([
        "Today Is Another Peaceful Day",
        "Nowhere to Run",
        "Carve the Moon, Weave the Clouds",
        "Return to Darkness",
        "This is Me!",
        "We Will Meet Again",
        "Warmth Shortens Cold Nights",
        "Sweat Now, Cry Less",
        "A Dream Scented in Wheat",
        "A Trail of Bygone Blood",
        "In Pursuit of the Wind",
        "See You at the End",
        "Journey, Forever Peaceful",
        "Holiday Thermae Escapade",
        "Unto Tomorrow's Morrow",
        "The Flower Remembers"
    ]),
    sigLCList: {
        //DESTRUCTION
        "A Thankless Coronation": "Saber",
        "Brighter Than the Sun": "Dan Heng • Imbibitor Lunae",
        "Dance at Sunset": "Yunli",
        "Flame of Blood, Blaze My Path": "Mydei",
        "I Shall Be My Own Sword": "Jingliu",
        "Something Irreplaceable": "Clara",
        "The Unreachable Side": "Blade",
        "Thus Burns the Dawn": "Phainon",
        "Whereabouts Should Dreams Rest": "Firefly",

        //ERUDITION
        "Night on the Milky Way": "Himeko",
        "Before Dawn": "Jing Yuan",
        "An Instant Before A Gaze": "Argenti",
        "Yet Hope Is Priceless": "Jade",
        "Ninjutsu Inscription: Dazzling Evilbreaker": "Rappa",
        "Into the Unreachable Veil": "The Herta",
        "Life Should Be Cast to Flames": "Anaxa",

        //HARMONY
        "A Grounded Ascent": "Sunday",
        "But the Battle Isn't Over": "Bronya",
        "Earthly Escapade": "Sparkle",
        "Epoch Etched in Golden Blood": "Cerydra",
        "Flowing Nightglow": "Robin",
        "If Time Were a Flower": "Tribbie",
        "Past Self in Mirror": "Ruan Mei",

        //NIHILITY
        "Along the Passing Shore": "Acheron",
        "In the Name of the World": "Welt",
        "Incessant Rain": "Silver Wolf",
        "Lies Dance on the Breeze": "Cipher",
        "Long Road Leads Home": "Fugue",
        "Patience Is All You Need": "Kafka",
        "Reforged Remembrance": "Black Swan",
        "Those Many Springs": "Jiaqui",
        "Why Does the Ocean Sing": "Hysilens",

        //PRESERVATION
        "Inherently Unjust Destiny": "Aventurine",
        "Moment of Victory": "Gepard",
        "She Already Shut Her Eyes": "Fu Xuan",
        "Though Worlds Apart": "Dan Heng • Permansor Terrae",

        //HUNT
        "Sleep Like the Dead": "Yanqing",
        "Worrisome, Blissful": "Topaz & Numby",
        "In the Night": "Seele",
        "Baptism of Pure Thought": "Dr. Ratio",
        "Sailing Towards a Second Life": "Boothill",
        "I Venture Forth to Hunt": "Feixiao",
        "The Hell Where Ideals Burn": "Archer",

        //ABUNDANCE
        "Echoes of the Coffin": "Luocha",
        "Night of Fright": "Huohuo",
        "Scent Alone Stays True": "Lingsha",
        "Time Waits for No One": "Baliu",
        
        //REMEMBRANCE
        "Time Woven Into Gold": "Aglaea",
        "Make Farewells More Beautiful": "Castorice",
        "Long May Rainbows Adorn the Sky": "Hyacine",
        "To Evernight's Stars": "Evernight",
        "This Love, Forever": "Cyrene",
    },
    starlightLCList: new Set ([
        "Night on the Milky Way",
        "Something Irreplaceable",
        "But the Battle Isn't Over",
        "In the Name of the World",
        "Moment of Victory",
        "Sleep Like the Dead",
        "Time Waits for No One"
    ]),
    stellarLCList: new Set ([
        "Worrisome, Blissful",
        "Past Self in Mirror",
        "She Already Shut Her Eyes",
        "The Unreachable Side",
        "Echoes of the Coffin",
        "In the Night",

        "Night on the Milky Way",
        "Something Irreplaceable",
        "But the Battle Isn't Over",
        "In the Name of the World",
        "Moment of Victory",
        "Sleep Like the Dead",

        "Time Waits for No One",
    ]),
    * getUpdatedComparisons(battleData) {
        let charObjectRef = globalRecords.character;
        let currentCharacter = charObjectRef[`char${globalUI.currentCharacterDisplayed}`];
        const pushDebug = compare.debugPushLine;
        readSelection("comboDebug").innerHTML = "";
        readSelection("counterInt").innerHTML = 0;
        const updateStep = cyclesLoop.updateSetupStep;
        readSelection(`cycleProgressType`).innerHTML = "SETUP:";
        globalRecords.resultsStorage = [];
        globalRecords.queueStorage = [];
        readSelection("comparisonsDisplayHolderBox").innerHTML = "";

        

        pushDebug(`Starting Query`);
        yield;
        // console.log("reached generation start")

        updateStep("Mapping Stat Keys",true);
        pushDebug(`MAP: Stats - Starting`);
        yield;
        const substatKeys = Object.keys(relics.Head.subAffix).map(entry => ({key:entry, value:maslow[entry]}));
        const chestKeys = Object.keys(relics.Body.mainAffix).map(entry => ({key:entry, value:maslow[entry]}));
        const bootKeys = Object.keys(relics.Feet.mainAffix).map(entry => ({key:entry, value:maslow[entry]}));
        const orbKeys = Object.keys(relics["Planar Sphere"].mainAffix).map(entry => ({key:entry, value:maslow[entry]}));
        const ropeKeys = Object.keys(relics["Link Rope"].mainAffix).map(entry => ({key:entry, value:maslow[entry]}));
        pushDebug(`MAP: Stats - Completed`);
        yield;
        // console.log(bootKeys)

        

        let newObject = {
            char1: {...charObjectRef.char1},
            char2: {...charObjectRef.char2},
            char3: {...charObjectRef.char3},
            char4: {...charObjectRef.char4},
        }


        // sim.battleStart(characterObject)
        let battle = sim.battleStart;

        updateStep("Copying Settings",false);
        const querySettings = {...globalRecords.querySettings};
        pushDebug(`SETTINGS: Copied`);
        yield;
        // "querySettings": {
        //     "cyclesToRun": 4,
        //     "cycleMode": "MOC",
        //     "enforceBattlesWon": true,
        // },

        // desc.length //if length is 1, it's planar, if 2 then it's a body set

        let planarSets = [];
        let bodySets = [];

        updateStep("Creating Item Arrays",false);
        pushDebug(`MAP: New base arrays - Starting`);
        yield;
        for (let entry in relicSets) {
            let currentSet = relicSets[entry];

            if (currentSet.desc.length === 1) {
                planarSets.push(currentSet.name);
            }
            else {
                bodySets.push(currentSet.name);
            }
        }
        let lightconeSets = [];
        for (let lightcone in lightcones) {
            const currentLightcone = lightcones[lightcone];
            lightconeSets.push(currentLightcone.name);
        }
        pushDebug(`MAP: New base arrays - Completed`);
        yield;


        let refPlanar = currentCharacter.planar;
        let ref2pc = currentCharacter["2pc"];
        let ref4pc = currentCharacter["4pc"];
        let refString = refPlanar + ref2pc + ref4pc;
        let refWasFound = false;

        updateStep("Establishing Maslow's Hierarchy",false);
        pushDebug(`MASLOW: Begin establishing needs`);
        yield;

        const filtersRef = globalUI.filters;

        const char1Filters = filtersRef.char1;
        const char2Filters = filtersRef.char2;
        const char3Filters = filtersRef.char3;
        const char4Filters = filtersRef.char4;


        const char1Ref = newObject.char1;
        const char2Ref = newObject.char2;
        const char3Ref = newObject.char3;
        const char4Ref = newObject.char4;

        const char1Maslow = maslow[char1Ref.name];
        const char2Maslow = maslow[char2Ref.name];
        const char3Maslow = maslow[char3Ref.name];
        const char4Maslow = maslow[char4Ref.name];

        const characterNeeds1 = char1Maslow[char1Ref.rank];
        const characterNeeds2 = char2Maslow[char2Ref.rank];
        const characterNeeds3 = char3Maslow[char3Ref.rank];
        const characterNeeds4 = char4Maslow[char4Ref.rank];

        // defaultMainSubs: ["CritRateBase","CritDamageBase","ATK%","SPDFlat"],
        // defaultTrashSub: "ATKFlat",
        const char1SubsDefault = char1Filters.desired1 != undefined ? [
            char1Filters.desired1,
            char1Filters.desired2,
            char1Filters.desired3,
            char1Filters.desired4
        ] : [...char1Maslow.defaultMainSubs];
        const char2SubsDefault = char2Filters.desired1 != undefined ? [
            char2Filters.desired1,
            char2Filters.desired2,
            char2Filters.desired3,
            char2Filters.desired4
        ] : [...char2Maslow.defaultMainSubs];
        const char3SubsDefault = char3Filters.desired1 != undefined ? [
            char3Filters.desired1,
            char3Filters.desired2,
            char3Filters.desired3,
            char3Filters.desired4
        ] : [...char3Maslow.defaultMainSubs];
        const char4SubsDefault = char4Filters.desired1 != undefined ? [
            char4Filters.desired1,
            char4Filters.desired2,
            char4Filters.desired3,
            char4Filters.desired4
        ] : [...char4Maslow.defaultMainSubs];


        const char1SubsTrash = char1Filters.trashStatFilters ?? [...char1Maslow.defaultTrashSub];
        const char2SubsTrash = char2Filters.trashStatFilters ?? [...char2Maslow.defaultTrashSub];
        const char3SubsTrash = char3Filters.trashStatFilters ?? [...char3Maslow.defaultTrashSub];
        const char4SubsTrash = char4Filters.trashStatFilters ?? [...char4Maslow.defaultTrashSub];


        // trashStatFilters: null,
        

        // console.log(characterNeeds)
        const char1Needs = new Set (characterNeeds1.wants);
        const char1NeedsTeam = new Set (characterNeeds1.wantsTeam);
        const char1GivesTeam = new Set (characterNeeds1.givesTeam);
        const char1AddsTeamNeed = new Set (characterNeeds1.addTeamWant);
        pushDebug(`MASLOW: Needs established - Char 1`);
        yield;
        // addTeamWant: ["EHR"],

        const char2Needs = new Set (characterNeeds2.wants);
        const char2NeedsTeam = new Set (characterNeeds2.wantsTeam);
        const char2GivesTeam = new Set (characterNeeds2.givesTeam);
        const char2AddsTeamNeed = new Set (characterNeeds2.addTeamWant);
        pushDebug(`MASLOW: Needs established - Char 2`);
        yield;

        const char3Needs = new Set (characterNeeds3.wants);
        const char3NeedsTeam = new Set (characterNeeds3.wantsTeam);
        const char3GivesTeam = new Set (characterNeeds3.givesTeam);
        const char3AddsTeamNeed = new Set (characterNeeds3.addTeamWant);
        pushDebug(`MASLOW: Needs established - Char 3`);
        yield;

        const char4Needs = new Set (characterNeeds4.wants);
        const char4NeedsTeam = new Set (characterNeeds4.wantsTeam);
        const char4GivesTeam = new Set (characterNeeds4.givesTeam);
        const char4AddsTeamNeed = new Set (characterNeeds4.addTeamWant);
        pushDebug(`MASLOW: Needs established - Char 4`);
        yield;

        const compositeTeamNeedsPRE = new Set ([...char1NeedsTeam,...char2NeedsTeam,...char3NeedsTeam,...char4NeedsTeam]);
        const compositeAddedNeedsPRE = new Set ([...char1AddsTeamNeed,...char2AddsTeamNeed,...char3AddsTeamNeed,...char4AddsTeamNeed]);


        const getNeeds = compare.getCharacterNeedsWants;
        const getMainstats = compare.getCharacterMainstatIteration;
        const getSubstats = compare.getCharacterSubstatIteration;
        let results = [];
        let skipped = 0;
        let reached = 0;
        let mainstatSkipped = 0;
        let mainstatReached = 0;
        let starterPostsComplete = false;

        let lastReachedDisplayIncrement = 0;
        
        const counterDisplayIncrement = 10000;

        function shouldWeDisplay(skipped,reached,counterDisplayIncrement) {
            const total = skipped + reached;
            const newIncrement = Math.floor(total/counterDisplayIncrement);

            if (newIncrement > lastReachedDisplayIncrement) {
                lastReachedDisplayIncrement = newIncrement;
                return true;
            }
            return false;
        }

        // const skipUpdateCount = 10000000;
        // const reachedUpdateCount = 10000;

        // armorSetOcclusions":["Scholar Lost in Erudition","Wavestrider Captain"]
        
        updateStep("Applying Filters",false);
        yield;

        function applyFilters(baseArray,filterBy,isInclusion,locks,isLightcone,characterPath) {
            let returnArray = [];
            const filterBySet = new Set (filterBy);

            //if there are locks in play, those take priority over anything else
            if (locks && locks.length) {
                returnArray = [...locks];
            }
            else if (filterBySet.size) {//if no locks, but we have occlusions of any kind, factor them
                for (let entry of baseArray) {
                    if (isInclusion && filterBySet.has(entry)) {returnArray.push(entry);}
                    else if (!isInclusion && !filterBySet.has(entry)) {
                        if (isLightcone) {
                            const lcPath = lightcones[entry].path;
                            if (lcPath === characterPath) {returnArray.push(entry);}
                        }
                        else {
                            returnArray.push(entry);
                        }
                    }
                }
            }
            else if (isLightcone) {
                for (let entry of baseArray) {
                    const lcPath = lightcones[entry].path;
                    if (lcPath === characterPath) {returnArray.push(entry);}
                }
            }
            else {returnArray = [...baseArray]}//but if we have no locks and no occlusions, the actual array is the normal one
            
            // console.log(returnArray)
            return returnArray;
            
        }
        function applyFiltersStats(baseArray,filterBy,isInclusion,locks) {
            let returnArray = [];
            const filterBySet = new Set (filterBy);

            //if there are locks in play, those take priority over anything else
            if (locks && locks.length) {
                returnArray = [];
                for (let entry of locks) {
                    returnArray.push({key:entry, value:maslow[entry]});
                }
            }
            else if (filterBySet.size) {//if no locks, but we have occlusions of any kind, factor them
                for (let entry of baseArray) {
                    if (isInclusion && filterBySet.has(entry.key)) {returnArray.push(entry);}
                    else if (!isInclusion && !filterBySet.has(entry.key)) {returnArray.push(entry);}
                }
            }
            else {returnArray = baseArray}//but if we have no locks and no occlusions, the actual array is the normal one
            
            // console.log(returnArray)
            return returnArray;
            
        }

        pushDebug(`FILTER: Lightcones - Starting`);
        const char1FilteredLightcone = applyFilters(lightconeSets,char1Filters.lightconeOcclusions,char1Filters.lightcone,null,true,characters[charObjectRef.char1.name].path);
        const char2FilteredLightcone = applyFilters(lightconeSets,char2Filters.lightconeOcclusions,char2Filters.lightcone,null,true,characters[charObjectRef.char2.name].path);
        const char3FilteredLightcone = applyFilters(lightconeSets,char3Filters.lightconeOcclusions,char3Filters.lightcone,null,true,characters[charObjectRef.char3.name].path);
        const char4FilteredLightcone = applyFilters(lightconeSets,char4Filters.lightconeOcclusions,char4Filters.lightcone,null,true,characters[charObjectRef.char4.name].path);
        pushDebug(`FILTER: Lightcones - Completed`);
        yield;
        

        pushDebug(`FILTER: Relics - Starting`);

        // char12pcLock,char14pcLock,char1HasBodyLock
        const char12pcLock = char1Filters.armorSetLocks2pc;
        const char14pcLock = char1Filters.armorSetLocks4pc;
        const char1HasBodyLock = char12pcLock.length && char14pcLock.length;
        const char1FilteredBody = applyFilters(bodySets,char1Filters.armorSetOcclusions,char1Filters.armorSet,null);

        const char22pcLock = char2Filters.armorSetLocks2pc;
        const char24pcLock = char2Filters.armorSetLocks4pc;
        const char2HasBodyLock = char22pcLock.length && char24pcLock.length;
        const char2FilteredBody = applyFilters(bodySets,char2Filters.armorSetOcclusions,char2Filters.armorSet,null);

        const char32pcLock = char3Filters.armorSetLocks2pc;
        const char34pcLock = char3Filters.armorSetLocks4pc;
        const char3HasBodyLock = char32pcLock.length && char34pcLock.length;
        const char3FilteredBody = applyFilters(bodySets,char3Filters.armorSetOcclusions,char3Filters.armorSet,null);

        const char42pcLock = char4Filters.armorSetLocks2pc;
        const char44pcLock = char4Filters.armorSetLocks4pc;
        const char4HasBodyLock = char42pcLock.length && char44pcLock.length;
        const char4FilteredBody = applyFilters(bodySets,char4Filters.armorSetOcclusions,char4Filters.armorSet,null);

        console.log(char42pcLock,char44pcLock)

        // char1Filters

        // armorSetLocks2pc: [],
        // armorSetLocks4pc: [],

        pushDebug(`FILTER: Relics - Completed`);
        yield;

        pushDebug(`FILTER: Planars - Starting`);
        const char1FilteredPlanar = applyFilters(planarSets,char1Filters.planarSetOcclusions,char1Filters.planarSet,char1Filters.planarSetLocks);
        const char2FilteredPlanar = applyFilters(planarSets,char2Filters.planarSetOcclusions,char2Filters.planarSet,char2Filters.planarSetLocks);
        const char3FilteredPlanar = applyFilters(planarSets,char3Filters.planarSetOcclusions,char3Filters.planarSet,char3Filters.planarSetLocks);
        const char4FilteredPlanar = applyFilters(planarSets,char4Filters.planarSetOcclusions,char4Filters.planarSet,char4Filters.planarSetLocks);
        pushDebug(`FILTER: Planars - Completed`);
        yield;

        pushDebug(`FILTER: Mainstat [Chest] - Starting`);
        const char1FilteredChest = applyFiltersStats(chestKeys,char1Filters.mainstatBodyOcclusions,char1Filters.mainstatBody,char1Filters.mainstatBodyLocks);
        const char2FilteredChest = applyFiltersStats(chestKeys,char2Filters.mainstatBodyOcclusions,char2Filters.mainstatBody,char2Filters.mainstatBodyLocks);
        const char3FilteredChest = applyFiltersStats(chestKeys,char3Filters.mainstatBodyOcclusions,char3Filters.mainstatBody,char3Filters.mainstatBodyLocks);
        const char4FilteredChest = applyFiltersStats(chestKeys,char4Filters.mainstatBodyOcclusions,char4Filters.mainstatBody,char4Filters.mainstatBodyLocks);
        pushDebug(`FILTER: Mainstat [Chest] - Completed`);
        yield;

        pushDebug(`FILTER: Mainstat [Feet] - Starting`);
        const char1FilteredFeet = applyFiltersStats(bootKeys,char1Filters.mainstatFeetOcclusions,char1Filters.mainstatFeet,char1Filters.mainstatFeetLocks);
        const char2FilteredFeet = applyFiltersStats(bootKeys,char2Filters.mainstatFeetOcclusions,char2Filters.mainstatFeet,char2Filters.mainstatFeetLocks);
        const char3FilteredFeet = applyFiltersStats(bootKeys,char3Filters.mainstatFeetOcclusions,char3Filters.mainstatFeet,char3Filters.mainstatFeetLocks);
        const char4FilteredFeet = applyFiltersStats(bootKeys,char4Filters.mainstatFeetOcclusions,char4Filters.mainstatFeet,char4Filters.mainstatFeetLocks);
        pushDebug(`FILTER: Mainstat [Feet] - Completed`);
        yield;

        pushDebug(`FILTER: Mainstat [Orb] - Starting`);
        const char1FilteredOrb = applyFiltersStats(orbKeys,char1Filters.mainstatOrbOcclusions,char1Filters.mainstatOrb,char1Filters.mainstatOrbLocks);
        const char2FilteredOrb = applyFiltersStats(orbKeys,char2Filters.mainstatOrbOcclusions,char2Filters.mainstatOrb,char2Filters.mainstatOrbLocks);
        const char3FilteredOrb = applyFiltersStats(orbKeys,char3Filters.mainstatOrbOcclusions,char3Filters.mainstatOrb,char3Filters.mainstatOrbLocks);
        const char4FilteredOrb = applyFiltersStats(orbKeys,char4Filters.mainstatOrbOcclusions,char4Filters.mainstatOrb,char4Filters.mainstatOrbLocks);
        pushDebug(`FILTER: Mainstat [Orb] - Completed`);
        yield;

        pushDebug(`FILTER: Mainstat [Rope] - Starting`);
        const char1FilteredRope = applyFiltersStats(ropeKeys,char1Filters.mainstatRopeOcclusions,char1Filters.mainstatRope,char1Filters.mainstatRopeLocks)
        const char2FilteredRope = applyFiltersStats(ropeKeys,char2Filters.mainstatRopeOcclusions,char2Filters.mainstatRope,char2Filters.mainstatRopeLocks);
        const char3FilteredRope = applyFiltersStats(ropeKeys,char3Filters.mainstatRopeOcclusions,char3Filters.mainstatRope,char3Filters.mainstatRopeLocks);
        const char4FilteredRope = applyFiltersStats(ropeKeys,char4Filters.mainstatRopeOcclusions,char4Filters.mainstatRope,char4Filters.mainstatRopeLocks);
        pushDebug(`FILTER: Mainstat [Rope] - Completed`);
        yield;

        const char1NoFilters = !char1Filters.lightconeOcclusions.length 
            && !char1Filters.armorSetOcclusions.length 
            && !char1Filters.planarSetOcclusions.length
            && !char1Filters.mainstatBodyOcclusions.length
            && !char1Filters.mainstatFeetOcclusions.length
            && !char1Filters.mainstatOrbOcclusions.length
            && !char1Filters.mainstatRopeOcclusions.length;

        const char2NoFilters = !char2Filters.lightconeOcclusions.length 
            && !char2Filters.armorSetOcclusions.length 
            && !char2Filters.planarSetOcclusions.length
            && !char2Filters.mainstatBodyOcclusions.length
            && !char2Filters.mainstatFeetOcclusions.length
            && !char2Filters.mainstatOrbOcclusions.length
            && !char2Filters.mainstatRopeOcclusions.length;

        const char3NoFilters = !char3Filters.lightconeOcclusions.length 
            && !char3Filters.armorSetOcclusions.length 
            && !char3Filters.planarSetOcclusions.length
            && !char3Filters.mainstatBodyOcclusions.length
            && !char3Filters.mainstatFeetOcclusions.length
            && !char3Filters.mainstatOrbOcclusions.length
            && !char3Filters.mainstatRopeOcclusions.length;

        const char4NoFilters = !char4Filters.lightconeOcclusions.length 
            && !char4Filters.armorSetOcclusions.length 
            && !char4Filters.planarSetOcclusions.length
            && !char4Filters.mainstatBodyOcclusions.length
            && !char4Filters.mainstatFeetOcclusions.length
            && !char4Filters.mainstatOrbOcclusions.length
            && !char4Filters.mainstatRopeOcclusions.length;

        if (char1NoFilters || char2NoFilters || char3NoFilters || char4NoFilters) {
            alert(`Character(s) ${(char1NoFilters ? "[1]" : "") + (char2NoFilters ? "[2]" : "") + (char3NoFilters ? "[3]" : "") + (char4NoFilters ? "[4]" : "")} has no filters in place. I'm doing you a favor by aborting the search now.\nPlease add filters and try again.\n\nIf you believe you're seeing this message in error, join the discord linked at the bottom of the page and ping Vash to let him know.`)
            cyclesLoop.abortCycles();
            return;
        }
        // if (countedReached >= 100000000) {
        //     cyclesLoop.abortCycles();
        //     alert(`The number of combos that will actually see battle(Valid Combos) has exceeded the limit 100 million combinations.\n\nPlease use stronger filters and try again.\nIn the future the limit will be increased as greater speeds and optimizations are achieved.`)
            
        //     yield;
        // }

        function nCr(n,r){
            if(r<0||r>n) return 0;
            r = Math.min(r,n-r);
            let res=1;
            for(let i=1;i<=r;i++){ res = res*(n-r+i)/i; }
            return Math.round(res);
        }
        function maxPossibleCombos(pool, increment=2, stats=4){
            const fullUnits = Math.floor(pool / increment);
            const remainderUnits = Math.floor((pool - 1) / increment);
        
            const base = nCr(fullUnits + stats - 1, stats - 1);
            const extra = stats * nCr(remainderUnits + stats - 1, stats - 1);
        
            return base + extra;
        }
        
        const rollsPerRelic = querySettings.rollsPerRelic;
        const failedAddedRolls = querySettings.failedAddedRolls;
        const totalRollPoolAdded = (rollsPerRelic - failedAddedRolls) * 6 - (querySettings.minimumAddedRoll * 4);
        const usableBaseSubstatPool = querySettings.usableBaseRolls;

        // querySettingsglobalUI.filters

        const char1SubstatBounds1 = char1Filters.substat1;
        const char1SubstatBounds2 = char1Filters.substat2;
        const char1SubstatBounds3 = char1Filters.substat3;
        const char1SubstatBounds4 = char1Filters.substat4;

        const char2SubstatBounds1 = char2Filters.substat1;
        const char2SubstatBounds2 = char2Filters.substat2;
        const char2SubstatBounds3 = char2Filters.substat3;
        const char2SubstatBounds4 = char2Filters.substat4;

        const char3SubstatBounds1 = char3Filters.substat1;
        const char3SubstatBounds2 = char3Filters.substat2;
        const char3SubstatBounds3 = char3Filters.substat3;
        const char3SubstatBounds4 = char3Filters.substat4;

        const char4SubstatBounds1 = char4Filters.substat1;
        const char4SubstatBounds2 = char4Filters.substat2;
        const char4SubstatBounds3 = char4Filters.substat3;
        const char4SubstatBounds4 = char4Filters.substat4;



        // totalRollPoolAdded
        const char1MinimumTotal = char1SubstatBounds1[0] + char1SubstatBounds2[0] + char1SubstatBounds3[0] + char1SubstatBounds4[0];
        const char2MinimumTotal = char2SubstatBounds1[0] + char2SubstatBounds2[0] + char2SubstatBounds3[0] + char2SubstatBounds4[0];
        const char3MinimumTotal = char3SubstatBounds1[0] + char3SubstatBounds2[0] + char3SubstatBounds3[0] + char3SubstatBounds4[0];
        const char4MinimumTotal = char4SubstatBounds1[0] + char4SubstatBounds2[0] + char4SubstatBounds3[0] + char4SubstatBounds4[0];

        const char1ExceedsPoolValue = char1MinimumTotal > totalRollPoolAdded;
        const char2ExceedsPoolValue = char2MinimumTotal > totalRollPoolAdded;
        const char3ExceedsPoolValue = char3MinimumTotal > totalRollPoolAdded;
        const char4ExceedsPoolValue = char4MinimumTotal > totalRollPoolAdded;

        const anyoneExceedsPoolValue = char1ExceedsPoolValue || char2ExceedsPoolValue || char3ExceedsPoolValue || char4ExceedsPoolValue;

        if (anyoneExceedsPoolValue) {
            alert(`The following character(s) have minimum substat values that exceed the total added rolls possible within your settings.\n
                ${(char1ExceedsPoolValue ? "[Char1]": "")+(char2ExceedsPoolValue ? "[Char2]": "")+(char3ExceedsPoolValue ? "[Char3]": "")+(char4ExceedsPoolValue ? "[Char4]": "")}
                \nIf you are unable to change the floor value on any given stat related to these characters, then instead go to search settings and raise the total added rolls possible`);
            cyclesLoop.abortCycles();
            return;
        }


        // substat1: [1,30],
        // substat2: [1,30],
        // substat3: [1,30],
        // substat4: [1,30],

        // const substatsSkipsPerCharacter = totalCombinations(totalRollPoolAdded,2,4);//total rolls either gonna be 18, 24, or 30, then increment we check with, then number of usable substats
        // const substatsSkipsPerCharacter = maxPossibleCombos(totalRollPoolAdded);//total rolls either gonna be 18, 24, or 30, then increment we check with, then number of usable substats
        const substatsSkipsPerCharacter = maxPossibleCombos(totalRollPoolAdded,querySettings.rollsPerBundle);
        console.log("Substat combos per character(max): " + substatsSkipsPerCharacter);
        const totalSubsSkipTeam = substatsSkipsPerCharacter ** 4;
        //TODO: later go hook up the actual increment amount, rn I default to two(and should probably just leave it like that but fuck it, bitches love toggles)

        const baseSubstatTableStarter = {
            "HPFlat": 0,
            "ATKFlat": 0,
            "DEFFlat": 0,
            "HP%": 0,
            "ATK%": 0,
            "DEF%": 0,
            "SPDFlat": 0,
            "CritRateBase": 0,
            "CritDamageBase": 0,
            "EffectHitRate": 0,
            "EffectRES": 0,
            "DamageBreak": 0,
        }

        const baseSubstatIncrements = {
            "HPFlat": 5,
            "ATKFlat": 5,
            "DEFFlat": 5,
            "HP%": 5,
            "ATK%": 5,
            "DEF%": 5,
            "SPDFlat": 2,
            "CritRateBase": 2,
            "CritDamageBase": 5,
            "EffectHitRate": 5,
            "EffectRES": 5,
            "DamageBreak": 5,
        }
        const char1SubsStarter = {...baseSubstatTableStarter};
        const char2SubsStarter = {...baseSubstatTableStarter};
        const char3SubsStarter = {...baseSubstatTableStarter};
        const char4SubsStarter = {...baseSubstatTableStarter};

        const rollsPerBaseSubStarter = usableBaseSubstatPool/4;
        for (let subEntry of char1SubsDefault) {
            char1SubsStarter[subEntry] = rollsPerBaseSubStarter;
        }
        for (let subEntry of char2SubsDefault) {
            char2SubsStarter[subEntry] = rollsPerBaseSubStarter;
        }
        for (let subEntry of char3SubsDefault) {
            char3SubsStarter[subEntry] = rollsPerBaseSubStarter;
        }
        for (let subEntry of char4SubsDefault) {
            char4SubsStarter[subEntry] = rollsPerBaseSubStarter;
        }

        // const char1SubsDefault = char1Maslow.defaultMainSubs;
        // const char2SubsDefault = char2Maslow.defaultMainSubs;
        // const char3SubsDefault = char3Maslow.defaultMainSubs;
        // const char4SubsDefault = char4Maslow.defaultMainSubs;

        readSelection("currentBestResultHolderBox").innerHTML = "";



        // const allow2pcSearch = querySettings.allow2pcSearch;

        const char1Allow2pc = char1Filters.armorSetAllow2pc;
        const char2Allow2pc = char2Filters.armorSetAllow2pc;
        const char3Allow2pc = char3Filters.armorSetAllow2pc;
        const char4Allow2pc = char4Filters.armorSetAllow2pc;

        const char1BodyComboCount = char1Allow2pc ? (char1FilteredBody.length * (char1FilteredBody.length+1)/2) : char1FilteredBody.length;
        const char2BodyComboCount = char2Allow2pc ? (char2FilteredBody.length * (char2FilteredBody.length+1)/2) : char2FilteredBody.length;
        const char3BodyComboCount = char3Allow2pc ? (char3FilteredBody.length * (char3FilteredBody.length+1)/2) : char3FilteredBody.length;
        const char4BodyComboCount = char4Allow2pc ? (char4FilteredBody.length * (char4FilteredBody.length+1)/2) : char4FilteredBody.length;


        const character1PossibleChecks = char1FilteredPlanar.length * char1BodyComboCount * char1FilteredChest.length * char1FilteredFeet.length * char1FilteredOrb.length * char1FilteredRope.length * char1FilteredLightcone.length * substatsSkipsPerCharacter;
        const character2PossibleChecks = char2FilteredPlanar.length * char2BodyComboCount * char2FilteredChest.length * char2FilteredFeet.length * char2FilteredOrb.length * char2FilteredRope.length * char2FilteredLightcone.length * substatsSkipsPerCharacter;
        const character3PossibleChecks = char3FilteredPlanar.length * char3BodyComboCount * char3FilteredChest.length * char3FilteredFeet.length * char3FilteredOrb.length * char3FilteredRope.length * char3FilteredLightcone.length * substatsSkipsPerCharacter;
        const character4PossibleChecks = char4FilteredPlanar.length * char4BodyComboCount * char4FilteredChest.length * char4FilteredFeet.length * char4FilteredOrb.length * char4FilteredRope.length * char4FilteredLightcone.length * substatsSkipsPerCharacter;

        const precalcComboCount = character1PossibleChecks * character2PossibleChecks * character3PossibleChecks * character4PossibleChecks;
        readSelection("optimizerTotalPossibleComboCount").innerHTML = precalcComboCount.toLocaleString();
        globalRecords.currentWorstResult = null;
        // console.log()

        pushDebug(`COMBOS: Char 1 - ${character1PossibleChecks.toLocaleString()} [${char1FilteredPlanar.length}][${char1BodyComboCount}][${char1FilteredChest.length}][${char1FilteredFeet.length}][${char1FilteredOrb.length}][${char1FilteredRope.length}][${char1FilteredLightcone.length}][${substatsSkipsPerCharacter}]`);
        pushDebug(`COMBOS: Char 2 - ${character2PossibleChecks.toLocaleString()} [${char2FilteredPlanar.length}][${char2BodyComboCount}][${char2FilteredChest.length}][${char2FilteredFeet.length}][${char2FilteredOrb.length}][${char2FilteredRope.length}][${char2FilteredLightcone.length}][${substatsSkipsPerCharacter}]`);
        pushDebug(`COMBOS: Char 3 - ${character3PossibleChecks.toLocaleString()} [${char3FilteredPlanar.length}][${char3BodyComboCount}][${char3FilteredChest.length}][${char3FilteredFeet.length}][${char3FilteredOrb.length}][${char3FilteredRope.length}][${char3FilteredLightcone.length}][${substatsSkipsPerCharacter}]`);
        pushDebug(`COMBOS: Char 4 - ${character4PossibleChecks.toLocaleString()} [${char4FilteredPlanar.length}][${char4BodyComboCount}][${char4FilteredChest.length}][${char4FilteredFeet.length}][${char4FilteredOrb.length}][${char4FilteredRope.length}][${char4FilteredLightcone.length}][${substatsSkipsPerCharacter}]`);
        pushDebug(`COMBOS: Substat/Char Maximum (Pre-skips, already applied to chars) - ${substatsSkipsPerCharacter.toLocaleString()}`);
        pushDebug(`COMBOS: Substat Total Maximum (Pre-skips) - ${totalSubsSkipTeam.toLocaleString()}`);
        pushDebug(`COMBOS: TOTAL POSSIBLE - ${precalcComboCount}`);
        yield;








        // 2 sets
        //set 1 + set 1
        //set 1 + set 2
        //set 2 + set 2

        // [
        //     {
        //         "key": "HP%",
        //         "value": "HP"
        //     },
        //     {
        //         "key": "ATK%",
        //         "value": "ATK"
        //     },
        //     {
        //         "key": "DEF%",
        //         "value": "DEF"
        //     },
        //     {
        //         "key": "SPDFlat",
        //         "value": "SPD"
        //     }
        // ]

        updateStep("Creating WebWorkers",false);
        yield;
        let initiateWorker = cyclesLoop.startCycleWorker;
        let threadsDisplayElement = readSelection("openThreadsDisplay");
        globalRecords.threadsAssignedCount = +readSelection("settingsOpenThreads").value;
        globalRecords.finishedIteratorSetup = false;
        readSelection("maxThreadsDisplay").innerHTML = globalRecords.threadsAssignedCount;
        workers = {}
        for (let i=1;i<=globalRecords.threadsAssignedCount;i++) {
            initiateWorker(i,globalRecords.threadsAssignedCount);
            pushDebug(`Initiating Web Worker #${i}`);

            let cycleWorker = `cycleWorker${i}`;
            workers[cycleWorker].postMessage({command:`whoAmI`,data:cycleWorker});
            workers[cycleWorker].postMessage({command:`inheritQuerySettings`,data:globalRecords.querySettings,data2:globalRecords.battleSettings});

            // workers[cycleWorker].postMessage({command:`copyFilteredTables`,cyclesCustom:cycles.createCustomCyclesOverride(path)});
            // workers[cycleWorker].postMessage({command:`copyTableFilters`,data:filters.types});
            // workers[cycleWorker].postMessage({command:`copyDataTables`,data:globalRecords});
            globalRecords.workersRunning += 1;
            threadsDisplayElement.innerHTML = globalRecords.workersRunning;
            yield;
        }
        const skippedBox = readSelection("optimizerSkippedBox");
        const workersSentDisplay = readSelection("counterInt");




        updateStep("Counting Valid Combinations, please wait...",false);
        yield;

        const assignTo = Object.assign;
        globalUI.startTime = performance.now();
        globalUI.lastMeasuredTime = globalUI.startTime;
        globalUI.lastMeasuredIncrement = 0;
        globalRecords.counterInt = 0;
        globalRecords.globalSkipCount = 0;
        globalRecords.cycleTimer = globalUI.startTime;

        const mainstatSkipAmountTotals = char1FilteredChest.length * char2FilteredChest.length * char3FilteredChest.length * char4FilteredChest.length
        * char1FilteredFeet.length * char2FilteredFeet.length * char3FilteredFeet.length * char4FilteredFeet.length
        * char1FilteredOrb.length * char2FilteredOrb.length * char3FilteredOrb.length * char4FilteredOrb.length
        * char1FilteredRope.length * char2FilteredRope.length * char3FilteredRope.length * char4FilteredRope.length
        * totalSubsSkipTeam;
        

        let messageComboArray = [];
        let lastSent = 0;
        let firstRunPosts = 0;
        let maxStorageArrays = Math.floor(globalRecords.threadsAssignedCount*1.2);
        



        pushDebug(`COUNT: CHECKING USABLE COMBINATIONS...`);


        /*
        */
        const countedProgressHolderBox = readSelection("queriesCombosCounteHolderBox");
        countedProgressHolderBox.style.display = "flex";
        const combosCountedProgress = readSelection("combinationsCountedDisplayCount");
        const validCombosBox = readSelection("optimizerValidCombos");


        let countedSkip = 0;
        let skipCountCounting = 0;
        let countedReached = 0;
        let lastSentCounted = 0;
        console.log("reached counting")
        for (let char1Result of getNeeds(querySettings,char1Needs,char1NeedsTeam,char1GivesTeam,char1AddsTeamNeed,char1FilteredPlanar,char1FilteredBody,char1FilteredLightcone,char12pcLock,char14pcLock,char1Allow2pc)) {
            // console.log("reached at all")
            const char1PlanarCheck = char1Result.planar;
            const char12pcCheck = char1Result.pc2;
            const char14pcCheck = char1Result.pc4;
            const char1Lightcone = char1Result.lightcone;
            let validPlanar1 = char1PlanarCheck.ValidSelf;
            let valid2pc1 = char12pcCheck.ValidSelf;
            let valid4pc1 = char14pcCheck.ValidSelf;
            let validLightcone1 = char1Lightcone.ValidSelf;
            const is4pc1 = char14pcCheck.is4pc;

            const char1PlanarGivesTeam = char1PlanarCheck.GivesTeam;
            const char12pcGivesTeam = char12pcCheck.GivesTeam;
            const char14pcGivesTeam = char14pcCheck.GivesTeam;
            const char1LightconeGivesTeam = char1Lightcone.GivesTeam;

            for (let char2Result of getNeeds(querySettings,char2Needs,char2NeedsTeam,char2GivesTeam,char2AddsTeamNeed,char2FilteredPlanar,char2FilteredBody,char2FilteredLightcone,char22pcLock,char24pcLock,char2Allow2pc)) {
                const char2PlanarCheck = char2Result.planar;
                const char22pcCheck = char2Result.pc2;
                const char24pcCheck = char2Result.pc4;
                const char2Lightcone = char2Result.lightcone;
                let validPlanar2 = char2PlanarCheck.ValidSelf;
                let valid2pc2 = char22pcCheck.ValidSelf;
                let valid4pc2 = char24pcCheck.ValidSelf;
                let validLightcone2 = char2Lightcone.ValidSelf;
                const is4pc2 = char24pcCheck.is4pc;

                const char2PlanarGivesTeam = char2PlanarCheck.GivesTeam;
                const char22pcGivesTeam = char22pcCheck.GivesTeam;
                const char24pcGivesTeam = char24pcCheck.GivesTeam;
                const char2LightconeGivesTeam = char2Lightcone.GivesTeam;

                for (let char3Result of getNeeds(querySettings,char3Needs,char3NeedsTeam,char3GivesTeam,char3AddsTeamNeed,char3FilteredPlanar,char3FilteredBody,char3FilteredLightcone,char32pcLock,char34pcLock,char3Allow2pc)) {
                    const char3PlanarCheck = char3Result.planar;
                    const char32pcCheck = char3Result.pc2;
                    const char34pcCheck = char3Result.pc4;
                    const char3Lightcone = char3Result.lightcone;
                    let validPlanar3 = char3PlanarCheck.ValidSelf;
                    let valid2pc3 = char32pcCheck.ValidSelf;
                    let valid4pc3 = char34pcCheck.ValidSelf;
                    let validLightcone3 = char3Lightcone.ValidSelf;
                    const is4pc3 = char34pcCheck.is4pc;

                    const char3PlanarGivesTeam = char3PlanarCheck.GivesTeam;
                    const char32pcGivesTeam = char32pcCheck.GivesTeam;
                    const char34pcGivesTeam = char34pcCheck.GivesTeam;
                    const char3LightconeGivesTeam = char3Lightcone.GivesTeam;

                    for (let char4Result of getNeeds(querySettings,char4Needs,char4NeedsTeam,char4GivesTeam,char4AddsTeamNeed,char4FilteredPlanar,char4FilteredBody,char4FilteredLightcone,char42pcLock,char44pcLock,char4Allow2pc)) {
                        const char4PlanarCheck = char4Result.planar;
                        const char42pcCheck = char4Result.pc2;
                        const char44pcCheck = char4Result.pc4;
                        const char4Lightcone = char4Result.lightcone;
                        let validPlanar4 = char4PlanarCheck.ValidSelf;
                        let valid2pc4 = char42pcCheck.ValidSelf;
                        let valid4pc4 = char44pcCheck.ValidSelf;
                        let validLightcone4 = char4Lightcone.ValidSelf;
                        const is4pc4 = char44pcCheck.is4pc;

                        const char4PlanarGivesTeam = char4PlanarCheck.GivesTeam;
                        const char42pcGivesTeam = char42pcCheck.GivesTeam;
                        const char44pcGivesTeam = char44pcCheck.GivesTeam;
                        const char4LightconeGivesTeam = char4Lightcone.GivesTeam;

                        let willSkipLightcone = false;
                        if (!validLightcone1 && !willSkipLightcone) {
                            if (char1LightconeGivesTeam.size) {
                                let foundValidTeamProvision = false;
                                for (let provision of char1LightconeGivesTeam) {if (compositeTeamNeedsPRE.has(provision)) {foundValidTeamProvision = true;break;}}
                                if (!foundValidTeamProvision) {willSkipLightcone = true;}
                            }
                            else {willSkipLightcone = true;}
                        }
                        if (!validLightcone2 && !willSkipLightcone) {
                            if (char2LightconeGivesTeam.size) {
                                let foundValidTeamProvision = false;
                                for (let provision of char2LightconeGivesTeam) {if (compositeTeamNeedsPRE.has(provision)) {foundValidTeamProvision = true;break;}}
                                if (!foundValidTeamProvision) {willSkipLightcone = true;}
                            }
                            else {willSkipLightcone = true;}
                        }
                        if (!validLightcone3 && !willSkipLightcone) {
                            if (char3LightconeGivesTeam.size) {
                                let foundValidTeamProvision = false;
                                for (let provision of char3LightconeGivesTeam) {if (compositeTeamNeedsPRE.has(provision)) {foundValidTeamProvision = true;break;}}
                                if (!foundValidTeamProvision) {willSkipLightcone = true;}
                            }
                            else {willSkipLightcone = true;}
                        }
                        if (!validLightcone4 && !willSkipLightcone) {
                            if (char4LightconeGivesTeam.size) {
                                let foundValidTeamProvision = false;
                                for (let provision of char4LightconeGivesTeam) {if (compositeTeamNeedsPRE.has(provision)) {foundValidTeamProvision = true;break;}}
                                if (!foundValidTeamProvision) {willSkipLightcone = true;}
                            }
                            else {willSkipLightcone = true;}
                        }
                        if (willSkipLightcone) {
                            countedSkip += mainstatSkipAmountTotals;

                            skipCountCounting ++;
                            if (skipCountCounting >= 1000000) {
                                skipCountCounting = 0;

                                const currentTotal = countedReached+countedSkip;
                                combosCountedProgress.style.width = (100 * currentTotal/precalcComboCount) + "%";


                                // workersSentDisplay.innerHTML = currentTotal.toLocaleString();
                                skippedBox.innerHTML = countedSkip.toLocaleString();

                                // }
                                yield;
                            }
                            continue;
                        }

                        let willSkipPlanar = false;
                        if (!validPlanar1 && !willSkipPlanar) {
                            if (char1PlanarGivesTeam.size) {
                                let foundValidTeamProvision = false;
                                for (let provision of char1PlanarGivesTeam) {if (compositeTeamNeedsPRE.has(provision)) {foundValidTeamProvision = true;break;}}
                                if (!foundValidTeamProvision) {willSkipPlanar = true;}
                            }
                            else {willSkipPlanar = true;}
                        }
                        if (!validPlanar2 && !willSkipPlanar) {
                            if (char2PlanarGivesTeam.size) {
                                let foundValidTeamProvision = false;
                                for (let provision of char2PlanarGivesTeam) {if (compositeTeamNeedsPRE.has(provision)) {foundValidTeamProvision = true;break;}}
                                if (!foundValidTeamProvision) {willSkipPlanar = true;}
                            }
                            else {willSkipPlanar = true;}
                        }
                        if (!validPlanar3 && !willSkipPlanar) {
                            if (char3PlanarGivesTeam.size) {
                                let foundValidTeamProvision = false;
                                for (let provision of char3PlanarGivesTeam) {if (compositeTeamNeedsPRE.has(provision)) {foundValidTeamProvision = true;break;}}
                                if (!foundValidTeamProvision) {willSkipPlanar = true;}
                            }
                            else {willSkipPlanar = true;}
                        }
                        if (!validPlanar4 && !willSkipPlanar) {
                            if (char4PlanarGivesTeam.size) {
                                let foundValidTeamProvision = false;
                                for (let provision of char4PlanarGivesTeam) {if (compositeTeamNeedsPRE.has(provision)) {foundValidTeamProvision = true;break;}}
                                if (!foundValidTeamProvision) {willSkipPlanar = true;}
                            }
                            else {willSkipPlanar = true;}
                        }
                        if (willSkipPlanar) {
                            countedSkip += mainstatSkipAmountTotals;

                            skipCountCounting ++;
                            if (skipCountCounting >= 1000000) {
                                skipCountCounting = 0;

                                const currentTotal = countedReached+countedSkip;
                                combosCountedProgress.style.width = (100 * currentTotal/precalcComboCount) + "%";


                                // workersSentDisplay.innerHTML = currentTotal.toLocaleString();
                                skippedBox.innerHTML = countedSkip.toLocaleString();

                                // }
                                yield;
                            }
                            continue;
                        }

                        let willSkip2pc = false;
                        if (!valid2pc1 && !is4pc1 && !willSkip2pc) {
                            if (char12pcGivesTeam.size) {
                                let foundValidTeamProvision = false;
                                for (let provision of char12pcGivesTeam) {if (compositeTeamNeedsPRE.has(provision)) {foundValidTeamProvision = true;break;}}
                                if (!foundValidTeamProvision) {willSkip2pc = true;}
                            }
                            else {willSkip2pc = true;}
                        }
                        if (!valid2pc2 && !is4pc2 && !willSkip2pc) {
                            if (char22pcGivesTeam.size) {
                                let foundValidTeamProvision = false;
                                for (let provision of char22pcGivesTeam) {if (compositeTeamNeedsPRE.has(provision)) {foundValidTeamProvision = true;break;}}
                                if (!foundValidTeamProvision) {willSkip2pc = true;}
                            }
                            else {willSkip2pc = true;}
                        }
                        if (!valid2pc3 && !is4pc3 && !willSkip2pc) {
                            if (char32pcGivesTeam.size) {
                                let foundValidTeamProvision = false;
                                for (let provision of char32pcGivesTeam) {if (compositeTeamNeedsPRE.has(provision)) {foundValidTeamProvision = true;break;}}
                                if (!foundValidTeamProvision) {willSkip2pc = true;}
                            }
                            else {willSkip2pc = true;}
                        }
                        if (!valid2pc4 && !is4pc4 && !willSkip2pc) {
                            if (char42pcGivesTeam.size) {
                                let foundValidTeamProvision = false;
                                for (let provision of char42pcGivesTeam) {if (compositeTeamNeedsPRE.has(provision)) {foundValidTeamProvision = true;break;}}
                                if (!foundValidTeamProvision) {willSkip2pc = true;}
                            }
                            else {willSkip2pc = true;}
                        }
                        if (willSkip2pc) {
                            countedSkip += mainstatSkipAmountTotals;

                            skipCountCounting ++;
                            if (skipCountCounting >= 1000000) {
                                skipCountCounting = 0;

                                const currentTotal = countedReached+countedSkip;
                                combosCountedProgress.style.width = (100 * currentTotal/precalcComboCount) + "%";


                                // workersSentDisplay.innerHTML = currentTotal.toLocaleString();
                                skippedBox.innerHTML = countedSkip.toLocaleString();

                                // }
                                yield;
                            }
                            continue;
                        }

                        let willSkip4pc = false;
                        if (!valid4pc1 && !willSkip4pc) {
                            if (char14pcGivesTeam.size) {
                                let foundValidTeamProvision = false;
                                for (let provision of char14pcGivesTeam) {if (compositeTeamNeedsPRE.has(provision)) {foundValidTeamProvision = true;break;}}
                                if (!foundValidTeamProvision) {willSkip4pc = true;}
                            }
                            else {willSkip4pc = true;}
                        }
                        if (!valid4pc2 && !willSkip4pc) {
                            if (char24pcGivesTeam.size) {
                                let foundValidTeamProvision = false;
                                for (let provision of char24pcGivesTeam) {if (compositeTeamNeedsPRE.has(provision)) {foundValidTeamProvision = true;break;}}
                                if (!foundValidTeamProvision) {willSkip4pc = true;}
                            }
                            else {willSkip4pc = true;}
                        }
                        if (!valid4pc3 && !willSkip4pc) {
                            if (char34pcGivesTeam.size) {
                                let foundValidTeamProvision = false;
                                for (let provision of char34pcGivesTeam) {if (compositeTeamNeedsPRE.has(provision)) {foundValidTeamProvision = true;break;}}
                                if (!foundValidTeamProvision) {willSkip4pc = true;}
                            }
                            else {willSkip4pc = true;}
                        }
                        if (!valid4pc4 && !willSkip4pc) {
                            if (char44pcGivesTeam.size) {
                                let foundValidTeamProvision = false;
                                for (let provision of char44pcGivesTeam) {if (compositeTeamNeedsPRE.has(provision)) {foundValidTeamProvision = true;break;}}
                                if (!foundValidTeamProvision) {willSkip4pc = true;}
                            }
                            else {willSkip4pc = true;}
                        }
                        if (willSkip4pc) {
                            countedSkip += mainstatSkipAmountTotals;
                            skipCountCounting ++;
                            if (skipCountCounting >= 1000000) {
                                skipCountCounting = 0;

                                const currentTotal = countedReached+countedSkip;
                                combosCountedProgress.style.width = (100 * currentTotal/precalcComboCount) + "%";


                                // workersSentDisplay.innerHTML = currentTotal.toLocaleString();
                                skippedBox.innerHTML = countedSkip.toLocaleString();

                                // }
                                yield;
                            }
                            continue;
                        }

                        for (let char1Mainstats of getMainstats(char1Needs,char1FilteredChest,char1FilteredFeet,char1FilteredOrb,char1FilteredRope)) {
                            const char1Chest = char1Mainstats.chestName;
                            const char1Feet = char1Mainstats.bootName;
                            const char1Orb = char1Mainstats.orbName;
                            const char1Rope = char1Mainstats.ropeName;
                            const hasMainstatSkip1 = char1Mainstats.mainstatSkipped;
                            const char1MainSkipped = hasMainstatSkip1 || 1;

                            for (let char2Mainstats of getMainstats(char2Needs,char2FilteredChest,char2FilteredFeet,char2FilteredOrb,char2FilteredRope)) {
                                const char2Chest = char2Mainstats.chestName;
                                const char2Feet = char2Mainstats.bootName;
                                const char2Orb = char2Mainstats.orbName;
                                const char2Rope = char2Mainstats.ropeName;
                                const hasMainstatSkip2 = char2Mainstats.mainstatSkipped;
                                const char2MainSkipped = hasMainstatSkip2 || 1;

                                for (let char3Mainstats of getMainstats(char3Needs,char3FilteredChest,char3FilteredFeet,char3FilteredOrb,char3FilteredRope)) {
                                    const char3Chest = char3Mainstats.chestName;
                                    const char3Feet = char3Mainstats.bootName;
                                    const char3Orb = char3Mainstats.orbName;
                                    const char3Rope = char3Mainstats.ropeName;
                                    const hasMainstatSkip3 = char3Mainstats.mainstatSkipped;
                                    const char3MainSkipped = hasMainstatSkip3 || 1;

                                    for (let char4Mainstats of getMainstats(char4Needs,char4FilteredChest,char4FilteredFeet,char4FilteredOrb,char4FilteredRope)) {
                                        const char4Chest = char4Mainstats.chestName;
                                        const char4Feet = char4Mainstats.bootName;
                                        const char4Orb = char4Mainstats.orbName;
                                        const char4Rope = char4Mainstats.ropeName;
                                        const hasMainstatSkip4 = char4Mainstats.mainstatSkipped;
                                        const char4MainSkipped = hasMainstatSkip4 || 1;
                                        const compositeMainstatSkip = hasMainstatSkip1 + hasMainstatSkip2 + hasMainstatSkip3 + hasMainstatSkip4;
                                        
                                        countedSkip += compositeMainstatSkip ? char1MainSkipped * char2MainSkipped * char3MainSkipped * char4MainSkipped * totalSubsSkipTeam : 0;


                                        let subsReached1 = 0 
                                        for (let char1Substats of getSubstats(usableBaseSubstatPool,baseSubstatTableStarter,baseSubstatIncrements,querySettings,char1SubsDefault,char1SubsStarter,char1Chest,char1Feet,char1Orb,char1Rope,char1SubstatBounds1,char1SubstatBounds2,char1SubstatBounds3,char1SubstatBounds4,char1SubsTrash)) {
                                            subsReached1 ++;

                                            let subsReached2 = 0;
                                            for (let char2Substats of getSubstats(usableBaseSubstatPool,baseSubstatTableStarter,baseSubstatIncrements,querySettings,char2SubsDefault,char2SubsStarter,char2Chest,char2Feet,char2Orb,char2Rope,char2SubstatBounds1,char2SubstatBounds2,char2SubstatBounds3,char2SubstatBounds4,char2SubsTrash)) {
                                                subsReached2++;

                                                let subsReached3 = 0;
                                                for (let char3Substats of getSubstats(usableBaseSubstatPool,baseSubstatTableStarter,baseSubstatIncrements,querySettings,char3SubsDefault,char3SubsStarter,char3Chest,char3Feet,char3Orb,char3Rope,char3SubstatBounds1,char3SubstatBounds2,char3SubstatBounds3,char3SubstatBounds4,char3SubsTrash)) {
                                                    subsReached3++;

                                                    let subsReached4 = 0;
                                                    for (let char4Substats of getSubstats(usableBaseSubstatPool,baseSubstatTableStarter,baseSubstatIncrements,querySettings,char4SubsDefault,char4SubsStarter,char4Chest,char4Feet,char4Orb,char4Rope,char4SubstatBounds1,char4SubstatBounds2,char4SubstatBounds3,char4SubstatBounds4,char4SubsTrash)) {
                                                        subsReached4++;

                                                        countedReached += 1;
                                                        lastSentCounted++;
                
                                                        
                                                        const currentTotal = countedReached+countedSkip;
                                                        if (countedReached >= 100000000 && !querySettings.ignoreQueryLimit) {
                                                            cyclesLoop.abortCycles();
                                                            alert(`The number of combos that will actually see battle(Valid Combos) has exceeded the limit 100 million combinations.\n\nPlease use stronger filters and try again.\nIn the future the limit will be increased as greater speeds and optimizations are achieved.`)
                                                            
                                                            yield;
                                                        }
                                                        if (lastSentCounted === 100000 || currentTotal === precalcComboCount) {
                                                            lastSentCounted = 0;

                                                            validCombosBox.innerHTML = countedReached.toLocaleString();
                                                            combosCountedProgress.style.width = (100 * currentTotal/precalcComboCount) + "%";


                                                            // workersSentDisplay.innerHTML = currentTotal.toLocaleString();
                                                            skippedBox.innerHTML = countedSkip.toLocaleString();
                
                                                            // }
                                                            yield;
                                                        }
                                                    }
                                                    if (subsReached4 != substatsSkipsPerCharacter) {countedSkip += (substatsSkipsPerCharacter - subsReached4)}
                                                    // console.log(subsReached4)
                                                }
                                                if (subsReached3 != substatsSkipsPerCharacter) {countedSkip += (substatsSkipsPerCharacter - subsReached3) * substatsSkipsPerCharacter}
                                            }
                                            if (subsReached2 != substatsSkipsPerCharacter) {countedSkip += (substatsSkipsPerCharacter - subsReached2) * (substatsSkipsPerCharacter ** 2)}
                                        }
                                        if (subsReached1 != substatsSkipsPerCharacter) {countedSkip += (substatsSkipsPerCharacter - subsReached1) * (substatsSkipsPerCharacter ** 3)}
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        combosCountedProgress.style.width = (100 * (countedSkip + countedReached)/precalcComboCount) + "%";
        console.log("finished counting")
        yield;
        countedProgressHolderBox.style.display = "none";
        skippedBox.innerHTML = countedSkip.toLocaleString();
        validCombosBox.innerHTML = countedReached.toLocaleString();
        const validCombos = countedReached;
        globalUI.comboCountFinal = validCombos;


        // return;


        const hertaShopLCSet = compare.hertaShopLCList;


        pushDebug(`COUNT: FINISHED, USABLE COMBOS ~ ${validCombos.toLocaleString()}`);
        const distributedLine = readSelection("optimizerDistributedBox");
        // console.log(char1FilteredPlanar,char1FilteredBody)
        pushDebug(`CYCLES STARTED`);
        readSelection("counterInt").innerHTML = 0;
        readSelection("comboCount").innerHTML = validCombos.toLocaleString();
        readSelection(`combinationsDisplayCount`).style.width = `0%`;
        readSelection("counterInt").innerHTML = 0;
        readSelection("cyclesTimeRemaining").innerHTML = "Estimating time to complete...";
        readSelection(`cycleProgressType`).innerHTML = "BUILD TESTS:"
        yield;
        console.log("reached loop start")

        const queries5starHertaValue = querySettings.queries5starHertaValue;
        const queries5starSuperValue = querySettings.queries5starSuperValue;
        const queries4starSuperValue = querySettings.queries4starSuperValue;

        for (let char1Result of getNeeds(querySettings,char1Needs,char1NeedsTeam,char1GivesTeam,char1AddsTeamNeed,char1FilteredPlanar,char1FilteredBody,char1FilteredLightcone,char12pcLock,char14pcLock,char1Allow2pc)) {
            // console.log("reached at all")
            const char1PlanarCheck = char1Result.planar;
            const char12pcCheck = char1Result.pc2;
            const char14pcCheck = char1Result.pc4;
            const char1Lightcone = char1Result.lightcone;

            const char1LightconeRank = lightcones[char1Lightcone.Item].rarity < 5 ? queries4starSuperValue : hertaShopLCSet.has(char1Lightcone.Item) ? queries5starHertaValue : queries5starSuperValue;
            // querySettings.queries5starHertaValue
            // hertaShopLCSet


            let validPlanar1 = char1PlanarCheck.ValidSelf;
            let valid2pc1 = char12pcCheck.ValidSelf;
            let valid4pc1 = char14pcCheck.ValidSelf;
            let validLightcone1 = char1Lightcone.ValidSelf;
            const is4pc1 = char14pcCheck.is4pc;

            const char1PlanarGivesTeam = char1PlanarCheck.GivesTeam;
            const char12pcGivesTeam = char12pcCheck.GivesTeam;
            const char14pcGivesTeam = char14pcCheck.GivesTeam;
            const char1LightconeGivesTeam = char1Lightcone.GivesTeam;

            

            for (let char2Result of getNeeds(querySettings,char2Needs,char2NeedsTeam,char2GivesTeam,char2AddsTeamNeed,char2FilteredPlanar,char2FilteredBody,char2FilteredLightcone,char22pcLock,char24pcLock,char2Allow2pc)) {
                const char2PlanarCheck = char2Result.planar;
                const char22pcCheck = char2Result.pc2;
                const char24pcCheck = char2Result.pc4;
                const char2Lightcone = char2Result.lightcone;
                const char2LightconeRank = lightcones[char2Lightcone.Item].rarity < 5 ? queries4starSuperValue : hertaShopLCSet.has(char2Lightcone.Item) ? queries5starHertaValue : queries5starSuperValue;
                let validPlanar2 = char2PlanarCheck.ValidSelf;
                let valid2pc2 = char22pcCheck.ValidSelf;
                let valid4pc2 = char24pcCheck.ValidSelf;
                let validLightcone2 = char2Lightcone.ValidSelf;
                const is4pc2 = char24pcCheck.is4pc;

                const char2PlanarGivesTeam = char2PlanarCheck.GivesTeam;
                const char22pcGivesTeam = char22pcCheck.GivesTeam;
                const char24pcGivesTeam = char24pcCheck.GivesTeam;
                const char2LightconeGivesTeam = char2Lightcone.GivesTeam;

                for (let char3Result of getNeeds(querySettings,char3Needs,char3NeedsTeam,char3GivesTeam,char3AddsTeamNeed,char3FilteredPlanar,char3FilteredBody,char3FilteredLightcone,char32pcLock,char34pcLock,char3Allow2pc)) {
                    const char3PlanarCheck = char3Result.planar;
                    const char32pcCheck = char3Result.pc2;
                    const char34pcCheck = char3Result.pc4;
                    const char3Lightcone = char3Result.lightcone;
                    const char3LightconeRank = lightcones[char3Lightcone.Item].rarity < 5 ? queries4starSuperValue : hertaShopLCSet.has(char3Lightcone.Item) ? queries5starHertaValue : queries5starSuperValue;
                    let validPlanar3 = char3PlanarCheck.ValidSelf;
                    let valid2pc3 = char32pcCheck.ValidSelf;
                    let valid4pc3 = char34pcCheck.ValidSelf;
                    let validLightcone3 = char3Lightcone.ValidSelf;
                    const is4pc3 = char34pcCheck.is4pc;

                    const char3PlanarGivesTeam = char3PlanarCheck.GivesTeam;
                    const char32pcGivesTeam = char32pcCheck.GivesTeam;
                    const char34pcGivesTeam = char34pcCheck.GivesTeam;
                    const char3LightconeGivesTeam = char3Lightcone.GivesTeam;

                    for (let char4Result of getNeeds(querySettings,char4Needs,char4NeedsTeam,char4GivesTeam,char4AddsTeamNeed,char4FilteredPlanar,char4FilteredBody,char4FilteredLightcone,char42pcLock,char44pcLock,char4Allow2pc)) {
                        const char4PlanarCheck = char4Result.planar;
                        const char42pcCheck = char4Result.pc2;
                        const char44pcCheck = char4Result.pc4;
                        const char4Lightcone = char4Result.lightcone;
                        const char4LightconeRank = lightcones[char4Lightcone.Item].rarity < 5 ? queries4starSuperValue : hertaShopLCSet.has(char4Lightcone.Item) ? queries5starHertaValue : queries5starSuperValue;
                        let validPlanar4 = char4PlanarCheck.ValidSelf;
                        let valid2pc4 = char42pcCheck.ValidSelf;
                        let valid4pc4 = char44pcCheck.ValidSelf;
                        let validLightcone4 = char4Lightcone.ValidSelf;
                        const is4pc4 = char44pcCheck.is4pc;

                        const char4PlanarGivesTeam = char4PlanarCheck.GivesTeam;
                        const char42pcGivesTeam = char42pcCheck.GivesTeam;
                        const char44pcGivesTeam = char44pcCheck.GivesTeam;
                        const char4LightconeGivesTeam = char4Lightcone.GivesTeam;

                        let willSkipLightcone = false;

                        if (!validLightcone1 && !willSkipLightcone) {
                            if (char1LightconeGivesTeam.size) {
                                let foundValidTeamProvision = false;
                                for (let provision of char1LightconeGivesTeam) {if (compositeTeamNeedsPRE.has(provision)) {foundValidTeamProvision = true;break;}}
                                if (!foundValidTeamProvision) {willSkipLightcone = true;}
                            }
                            else {willSkipLightcone = true;}
                        }
                        if (!validLightcone2 && !willSkipLightcone) {
                            if (char2LightconeGivesTeam.size) {
                                let foundValidTeamProvision = false;
                                for (let provision of char2LightconeGivesTeam) {if (compositeTeamNeedsPRE.has(provision)) {foundValidTeamProvision = true;break;}}
                                if (!foundValidTeamProvision) {willSkipLightcone = true;}
                            }
                            else {willSkipLightcone = true;}
                        }
                        if (!validLightcone3 && !willSkipLightcone) {
                            if (char3LightconeGivesTeam.size) {
                                let foundValidTeamProvision = false;
                                for (let provision of char3LightconeGivesTeam) {if (compositeTeamNeedsPRE.has(provision)) {foundValidTeamProvision = true;break;}}
                                if (!foundValidTeamProvision) {willSkipLightcone = true;}
                            }
                            else {willSkipLightcone = true;}
                        }
                        if (!validLightcone4 && !willSkipLightcone) {
                            if (char4LightconeGivesTeam.size) {
                                let foundValidTeamProvision = false;
                                for (let provision of char4LightconeGivesTeam) {if (compositeTeamNeedsPRE.has(provision)) {foundValidTeamProvision = true;break;}}
                                if (!foundValidTeamProvision) {willSkipLightcone = true;}
                            }
                            else {willSkipLightcone = true;}
                        }
                        if (willSkipLightcone) {
                            // globalRecords.globalSkipCount += mainstatSkipAmountTotals;
                            // if (shouldWeDisplay(skipped,reached,counterDisplayIncrement)) {displayCurrentResults(results,reached,skipped,false);yield;}
                            continue;
                        }
                        // console.log("Reached after planar skip")

                        let willSkipPlanar = false;
                        if (!validPlanar1 && !willSkipPlanar) {
                            if (char1PlanarGivesTeam.size) {
                                let foundValidTeamProvision = false;
                                for (let provision of char1PlanarGivesTeam) {if (compositeTeamNeedsPRE.has(provision)) {foundValidTeamProvision = true;break;}}
                                if (!foundValidTeamProvision) {willSkipPlanar = true;}
                            }
                            else {willSkipPlanar = true;}
                        }
                        if (!validPlanar2 && !willSkipPlanar) {
                            if (char2PlanarGivesTeam.size) {
                                let foundValidTeamProvision = false;
                                for (let provision of char2PlanarGivesTeam) {if (compositeTeamNeedsPRE.has(provision)) {foundValidTeamProvision = true;break;}}
                                if (!foundValidTeamProvision) {willSkipPlanar = true;}
                            }
                            else {willSkipPlanar = true;}
                        }
                        if (!validPlanar3 && !willSkipPlanar) {
                            if (char3PlanarGivesTeam.size) {
                                let foundValidTeamProvision = false;
                                for (let provision of char3PlanarGivesTeam) {if (compositeTeamNeedsPRE.has(provision)) {foundValidTeamProvision = true;break;}}
                                if (!foundValidTeamProvision) {willSkipPlanar = true;}
                            }
                            else {willSkipPlanar = true;}
                        }
                        if (!validPlanar4 && !willSkipPlanar) {
                            if (char4PlanarGivesTeam.size) {
                                let foundValidTeamProvision = false;
                                for (let provision of char4PlanarGivesTeam) {if (compositeTeamNeedsPRE.has(provision)) {foundValidTeamProvision = true;break;}}
                                if (!foundValidTeamProvision) {willSkipPlanar = true;}
                            }
                            else {willSkipPlanar = true;}
                        }
                        if (willSkipPlanar) {
                            // globalRecords.globalSkipCount += mainstatSkipAmountTotals;
                            // if (shouldWeDisplay(skipped,reached,counterDisplayIncrement)) {displayCurrentResults(results,reached,skipped,false);yield;}
                            continue;
                        }
                        // console.log("Reached after planar skip")

                        let willSkip2pc = false;
                        if (!valid2pc1 && !is4pc1 && !willSkip2pc) {
                            if (char12pcGivesTeam.size) {
                                let foundValidTeamProvision = false;
                                for (let provision of char12pcGivesTeam) {if (compositeTeamNeedsPRE.has(provision)) {foundValidTeamProvision = true;break;}}
                                if (!foundValidTeamProvision) {willSkip2pc = true;}
                            }
                            else {willSkip2pc = true;}
                        }
                        if (!valid2pc2 && !is4pc2 && !willSkip2pc) {
                            if (char22pcGivesTeam.size) {
                                let foundValidTeamProvision = false;
                                for (let provision of char22pcGivesTeam) {if (compositeTeamNeedsPRE.has(provision)) {foundValidTeamProvision = true;break;}}
                                if (!foundValidTeamProvision) {willSkip2pc = true;}
                            }
                            else {willSkip2pc = true;}
                            // console.log("Reached char2 2pc fail")
                        }
                        if (!valid2pc3 && !is4pc3 && !willSkip2pc) {
                            if (char32pcGivesTeam.size) {
                                let foundValidTeamProvision = false;
                                for (let provision of char32pcGivesTeam) {if (compositeTeamNeedsPRE.has(provision)) {foundValidTeamProvision = true;break;}}
                                if (!foundValidTeamProvision) {willSkip2pc = true;}
                            }
                            else {willSkip2pc = true;}
                            // console.log("Reached char3 2pc fail")
                        }
                        if (!valid2pc4 && !is4pc4 && !willSkip2pc) {
                            if (char42pcGivesTeam.size) {
                                let foundValidTeamProvision = false;
                                for (let provision of char42pcGivesTeam) {if (compositeTeamNeedsPRE.has(provision)) {foundValidTeamProvision = true;break;}}
                                if (!foundValidTeamProvision) {willSkip2pc = true;}
                            }
                            else {willSkip2pc = true;}
                            // console.log("Reached char4 2pc fail")
                        }
                        if (willSkip2pc) {
                            // globalRecords.globalSkipCount += mainstatSkipAmountTotals;
                            // if (shouldWeDisplay(skipped,reached,counterDisplayIncrement)) {displayCurrentResults(results,reached,skipped,false);yield;}
                            continue;
                        }
                        // console.log("Reached after 2pc skip")

                        let willSkip4pc = false;
                        if (!valid4pc1 && !willSkip4pc) {
                            if (char14pcGivesTeam.size) {
                                let foundValidTeamProvision = false;
                                for (let provision of char14pcGivesTeam) {if (compositeTeamNeedsPRE.has(provision)) {foundValidTeamProvision = true;break;}}
                                if (!foundValidTeamProvision) {willSkip4pc = true;}
                            }
                            else {willSkip4pc = true;}
                        }
                        if (!valid4pc2 && !willSkip4pc) {
                            if (char24pcGivesTeam.size) {
                                let foundValidTeamProvision = false;
                                for (let provision of char24pcGivesTeam) {if (compositeTeamNeedsPRE.has(provision)) {foundValidTeamProvision = true;break;}}
                                if (!foundValidTeamProvision) {willSkip4pc = true;}
                            }
                            else {willSkip4pc = true;}
                        }
                        if (!valid4pc3 && !willSkip4pc) {
                            if (char34pcGivesTeam.size) {
                                let foundValidTeamProvision = false;
                                for (let provision of char34pcGivesTeam) {if (compositeTeamNeedsPRE.has(provision)) {foundValidTeamProvision = true;break;}}
                                if (!foundValidTeamProvision) {willSkip4pc = true;}
                            }
                            else {willSkip4pc = true;}
                        }
                        if (!valid4pc4 && !willSkip4pc) {
                            if (char44pcGivesTeam.size) {
                                let foundValidTeamProvision = false;
                                for (let provision of char44pcGivesTeam) {if (compositeTeamNeedsPRE.has(provision)) {foundValidTeamProvision = true;break;}}
                                if (!foundValidTeamProvision) {willSkip4pc = true;}
                            }
                            else {willSkip4pc = true;}
                        }
                        if (willSkip4pc) {
                            // globalRecords.globalSkipCount += mainstatSkipAmountTotals;
                            // if (shouldWeDisplay(skipped,reached,counterDisplayIncrement)) {displayCurrentResults(results,reached,skipped,false);yield;}
                            continue;
                        }
                        // console.log("Reached after 4pc skip")
                        // console.log(char1FilteredChest,bootKeys,orbKeys,ropeKeys)
                        // [
                        //     {
                        //         "key": "HP%",
                        //         "value": "HP"
                        //     },
                        //     {
                        //         "key": "ATK%",
                        //         "value": "ATK"
                        //     },
                        //     {
                        //         "key": "DEF%",
                        //         "value": "DEF"
                        //     },
                        //     {
                        //         "key": "SPDFlat",
                        //         "value": "SPD"
                        //     }
                        // ]

                        // console.log("pre mainstat skip display: ",skipped)
                        // getMainstats(char1Needs,chestKeys,bootKeys,orbKeys,ropeKeys)
                        // getMainstats(char1Needs)
                        // console.log("Reached mainstat start inner loop mainstats")
                        for (let char1Mainstats of getMainstats(char1Needs,char1FilteredChest,char1FilteredFeet,char1FilteredOrb,char1FilteredRope)) {
                            const char1Chest = char1Mainstats.chestName;
                            const char1Feet = char1Mainstats.bootName;
                            const char1Orb = char1Mainstats.orbName;
                            const char1Rope = char1Mainstats.ropeName;
                            const hasMainstatSkip1 = char1Mainstats.mainstatSkipped;
                            const char1MainSkipped = hasMainstatSkip1 || 1;

                            for (let char2Mainstats of getMainstats(char2Needs,char2FilteredChest,char2FilteredFeet,char2FilteredOrb,char2FilteredRope)) {
                                const char2Chest = char2Mainstats.chestName;
                                const char2Feet = char2Mainstats.bootName;
                                const char2Orb = char2Mainstats.orbName;
                                const char2Rope = char2Mainstats.ropeName;
                                const hasMainstatSkip2 = char2Mainstats.mainstatSkipped;
                                const char2MainSkipped = hasMainstatSkip2 || 1;

                                for (let char3Mainstats of getMainstats(char3Needs,char3FilteredChest,char3FilteredFeet,char3FilteredOrb,char3FilteredRope)) {
                                    const char3Chest = char3Mainstats.chestName;
                                    const char3Feet = char3Mainstats.bootName;
                                    const char3Orb = char3Mainstats.orbName;
                                    const char3Rope = char3Mainstats.ropeName;
                                    const hasMainstatSkip3 = char3Mainstats.mainstatSkipped;
                                    const char3MainSkipped = hasMainstatSkip3 || 1;

                                    for (let char4Mainstats of getMainstats(char4Needs,char4FilteredChest,char4FilteredFeet,char4FilteredOrb,char4FilteredRope)) {
                                        const char4Chest = char4Mainstats.chestName;
                                        const char4Feet = char4Mainstats.bootName;
                                        const char4Orb = char4Mainstats.orbName;
                                        const char4Rope = char4Mainstats.ropeName;
                                        const hasMainstatSkip4 = char4Mainstats.mainstatSkipped;
                                        const char4MainSkipped = hasMainstatSkip4 || 1;
                                        const compositeMainstatSkip = hasMainstatSkip1 + hasMainstatSkip2 + hasMainstatSkip3 + hasMainstatSkip4;
                                        
                                        // globalRecords.globalSkipCount += compositeMainstatSkip ? char1MainSkipped * char2MainSkipped * char3MainSkipped * char4MainSkipped * totalSubsSkipTeam : 0;


                                        // let subsReached1 = 0
                                        for (let char1Substats of getSubstats(usableBaseSubstatPool,baseSubstatTableStarter,baseSubstatIncrements,querySettings,char1SubsDefault,char1SubsStarter,char1Chest,char1Feet,char1Orb,char1Rope,char1SubstatBounds1,char1SubstatBounds2,char1SubstatBounds3,char1SubstatBounds4,char1SubsTrash)) {
                                            // subsReached1 ++;
                                            const char1Subs = char1Substats.baseTable;
                                            const char1NewPieceArray = char1Substats.newPieceArray;


                                            // let subsReached2 = 0;
                                            for (let char2Substats of getSubstats(usableBaseSubstatPool,baseSubstatTableStarter,baseSubstatIncrements,querySettings,char2SubsDefault,char2SubsStarter,char2Chest,char2Feet,char2Orb,char2Rope,char2SubstatBounds1,char2SubstatBounds2,char2SubstatBounds3,char2SubstatBounds4,char2SubsTrash)) {
                                                // subsReached2++;
                                                const char2Subs = char2Substats.baseTable;
                                                const char2NewPieceArray = char2Substats.newPieceArray;

                                                // let subsReached3 = 0;
                                                for (let char3Substats of getSubstats(usableBaseSubstatPool,baseSubstatTableStarter,baseSubstatIncrements,querySettings,char3SubsDefault,char3SubsStarter,char3Chest,char3Feet,char3Orb,char3Rope,char3SubstatBounds1,char3SubstatBounds2,char3SubstatBounds3,char3SubstatBounds4,char3SubsTrash)) {
                                                    // subsReached3++;
                                                    const char3Subs = char3Substats.baseTable;
                                                    const char3NewPieceArray = char3Substats.newPieceArray;

                                                    // let subsReached4 = 0;
                                                    for (let char4Substats of getSubstats(usableBaseSubstatPool,baseSubstatTableStarter,baseSubstatIncrements,querySettings,char4SubsDefault,char4SubsStarter,char4Chest,char4Feet,char4Orb,char4Rope,char4SubstatBounds1,char4SubstatBounds2,char4SubstatBounds3,char4SubstatBounds4,char4SubsTrash)) {
                                                        // subsReached4++;
                                                        const char4Subs = char4Substats.baseTable;
                                                        const char4NewPieceArray = char4Substats.newPieceArray;

                                                        // subsReached++;
                                                        assignTo(newObject.char1,{
                                                            "lcName": char1Lightcone.Item,
                                                            "lcRank": char1LightconeRank,
                                                            "planar": char1PlanarCheck.Item,
                                                            "2pc": char12pcCheck.Item,
                                                            "4pc": char14pcCheck.Item,
                                                            "BodyMain": char1Chest,
                                                            "FeetMain": char1Feet,
                                                            "SphereMain": char1Orb,
                                                            "RopeMain": char1Rope,
                                                            "statObject": char1Subs,
                                                            "pieceArray": char1NewPieceArray
                                                        });
                                                        assignTo(newObject.char2,{
                                                            "lcName": char2Lightcone.Item,
                                                            "lcRank": char2LightconeRank,
                                                            "planar": char2PlanarCheck.Item,
                                                            "2pc": char22pcCheck.Item,
                                                            "4pc": char24pcCheck.Item,
                                                            "BodyMain": char2Chest,
                                                            "FeetMain": char2Feet,
                                                            "SphereMain": char2Orb,
                                                            "RopeMain": char2Rope,
                                                            "statObject": char2Subs,
                                                            "pieceArray": char2NewPieceArray
                                                        });
                                                        assignTo(newObject.char3,{
                                                            "lcName": char3Lightcone.Item,
                                                            "lcRank": char3LightconeRank,
                                                            "planar": char3PlanarCheck.Item,
                                                            "2pc": char32pcCheck.Item,
                                                            "4pc": char34pcCheck.Item,
                                                            "BodyMain": char3Chest,
                                                            "FeetMain": char3Feet,
                                                            "SphereMain": char3Orb,
                                                            "RopeMain": char3Rope,
                                                            "statObject": char3Subs,
                                                            "pieceArray": char3NewPieceArray
                                                        });
                                                        assignTo(newObject.char4,{
                                                            "lcName": char4Lightcone.Item,
                                                            "lcRank": char4LightconeRank,
                                                            "planar": char4PlanarCheck.Item,
                                                            "2pc": char42pcCheck.Item,
                                                            "4pc": char44pcCheck.Item,
                                                            "BodyMain": char4Chest,
                                                            "FeetMain": char4Feet,
                                                            "SphereMain": char4Orb,
                                                            "RopeMain": char4Rope,
                                                            "statObject": char4Subs,
                                                            "pieceArray": char4NewPieceArray
                                                        });
                
                                                        // let simResult = sim.battleStart(newObject,false,querySettings);
                                                        reached += 1;
                                                        messageComboArray.push({
                                                            char1: {...newObject.char1},
                                                            char2: {...newObject.char2},
                                                            char3: {...newObject.char3},
                                                            char4: {...newObject.char4},
                                                        });//TODO: spreading here is a pretty big impact on batch bundling speed, but in theory as long as batch bundling is faster than battle completion(literally always) then it shouldn't be an issue
                                                        lastSent++;
                
                                                        
                                                        const currentTotal = reached+globalRecords.globalSkipCount;
                                                        // console.log("reached pre increment check",currentTotal,precalcComboCount)
                                                        // reached pre increment check 82752 82944
                                                        // if (lastSent === 100000 || currentTotal === precalcComboCount) {
                                                        if (lastSent === 10000 || currentTotal === validCombos) {
                                                            lastSent = 0;
                
                                                            distributedLine.innerHTML = "Distributed Combos: " + currentTotal.toLocaleString();
                                                            // skippedBox.innerHTML = globalRecords.globalSkipCount.toLocaleString();
                
                                                            if (starterPostsComplete) {
                                                                // console.log("reached completed post")
                                                                while (globalRecords.queueStorage.length === maxStorageArrays) {yield;}
                
                                                                globalRecords.queueStorage.push(messageComboArray);
                                                                messageComboArray = [];
                                                            }
                                                            else {
                                                                firstRunPosts++;
                                                                // console.log("reached first run post")
                                                                if (firstRunPosts === globalRecords.threadsAssignedCount) {globalRecords.finishedIteratorSetup = true;}
                                                                // workerIdentifier++;
                                                                // let cycleWorkerLoop = `cycleWorker${workerIdentifier}`;
                                                                let cycleWorkerLoop = `cycleWorker${firstRunPosts}`;
                                                                workers[cycleWorkerLoop].postMessage({command:`dumpCombos`,messageComboArray});
                                                                messageComboArray = [];
                                                                if (firstRunPosts >= globalRecords.threadsAssignedCount) {starterPostsComplete = true;}
                                                                // console.log("reached first run post")
                                                            }
                                                            yield;
                                                        }

                                                    }
                                                }
                                            }
                                        }

                                    }
                                }
                            }
                        }
                    }
                }
            }
        }

        const currentTotal = reached+globalRecords.globalSkipCount;
        // console.log("reached pre increment check",currentTotal,precalcComboCount)
        // reached pre increment check 82752 82944
        if (lastSent > 0 && currentTotal === validCombos) {
            lastSent = 0;

            // totalSkipped += skipped;
            // path.counterInt += skipped;
            // skipped=0;
            distributedLine.innerHTML = "Distributed Combos: " + currentTotal.toLocaleString();
            // skippedBox.innerHTML = globalRecords.globalSkipCount.toLocaleString();

            if (starterPostsComplete) {
                // console.log("reached completed post")
                // while (globalRecords.queueStorage.length === maxStorageArrays) {yield;}

                globalRecords.queueStorage.push(messageComboArray);
                messageComboArray = [];
            }
            else {
                firstRunPosts++;
                // console.log("reached first run post")
                if (firstRunPosts === globalRecords.threadsAssignedCount) {globalRecords.finishedIteratorSetup = true;}
                // workerIdentifier++;
                // let cycleWorkerLoop = `cycleWorker${workerIdentifier}`;
                let cycleWorkerLoop = `cycleWorker${firstRunPosts}`;
                workers[cycleWorkerLoop].postMessage({command:`dumpCombos`,messageComboArray});
                messageComboArray = [];
                if (firstRunPosts >= globalRecords.threadsAssignedCount) {starterPostsComplete = true;}
                // console.log("reached first run post")
            }
            yield;
        }




        
        // console.log("query end: ",skipped)
        // cyclesLoop.abortCycles();
        // let endTime = performance.now();
        pushDebug(`GENERATION: All combinations processed`);
        // let finalTime = (endTime-globalUI.startTime)/1000;
        
    },
    visualComparisonResults: {
        "battleAV"(ratio,refRatio) {
            return ratio >= refRatio
        },
        "battleDamageSUM"(ratio,refRatio) {
            return ratio >= refRatio
        }
    },
    convertBattleValuestoSearchValues: {
        "battleDamageSUM": "battleDamageSUM",
        "battleAV": "sumAV",
    },
    displayCurrentResults(results,reached,skipped,isBattleEnd) {

        // globalUI.startTime = performance.now();

        // reachedBox.innerHTML = reached.toLocaleString();
        // skippedBox.innerHTML = skipped.toLocaleString();

        // // globalUI.comboCountFinal = precalcComboCount.toLocaleString();
        // const compositeCount = reached + skipped;
        // // console.log(100 * (compositeCount)/globalUI.comboCountFinal,compositeCount,globalUI.comboCountFinal)
        // readSelection("combinationsDisplayCount").style.width = `${100 * (compositeCount)/globalUI.comboCountFinal}%`;
        // readSelection("counterInt").innerHTML = compositeCount.toLocaleString();


        // results.sort((a, b) => b.battleDamageSUM - a.battleDamageSUM);
        const limit = 100;
        let counter = 0;
        const mappedFamilies = basicShorthand.mappedFamilies;
        const targetStatistic = globalRecords.querySettings.searchTarget;
        
        const refPoint = globalRecords.battleData[compare.convertBattleValuestoSearchValues[targetStatistic]];
        const isInvertedRange = cyclesLoop.isInvertedSearch[targetStatistic];

        // console.log(results)
        let battleFloor = globalRecords.currentWorstResult;
        if (isInvertedRange) {
            if (globalRecords.currentWorstResult < refPoint) {battleFloor = refPoint;}
            else {battleFloor = globalRecords.currentWorstResult;}
        }
        else {
            if (globalRecords.currentWorstResult > refPoint) {battleFloor = refPoint;}
            else {battleFloor = globalRecords.currentWorstResult;}
        }
        let battleCeiling = results[0][targetStatistic];
        if (isInvertedRange) {
            if (battleCeiling > refPoint) {battleCeiling = refPoint;}
            // else {battleFloor = globalRecords.currentWorstResult;}
        }
        else {
            if (battleCeiling < refPoint) {battleCeiling = refPoint;}
            // else {battleFloor = globalRecords.currentWorstResult;}
        }






        const battleSpread = Math.abs(battleCeiling - battleFloor);

        const upperSpread = isInvertedRange ? refPoint - battleCeiling : battleCeiling - refPoint;
        const upperSpreadPercent = upperSpread/battleSpread;
        /*
        lowest av was 30
        ref av from sim was 60
        worst av was 100

        30 - 60
        */
        const lowerSpread = isInvertedRange ? battleFloor - refPoint : refPoint - battleFloor;
        const lowerSpreadPercent = lowerSpread/battleSpread;


        // console.log(targetStatistic,battleFloor,battleCeiling)
        const refRatio = (isInvertedRange ? battleFloor - refPoint : refPoint - battleFloor) / battleSpread;
        // const characterObject = globalRecords.character;

        const bestResultBox = readSelection("currentBestResultHolderBox");

        const bestEntry = results[0];
        // console.log(bestEntry[0])
        const currentEvalBest = bestEntry[targetStatistic];
        // const currentRatioBest = (currentEvalBest - battleFloor) / battleSpread;
        const currentRatioBest = (isInvertedRange ? battleFloor - currentEvalBest : currentEvalBest - battleFloor) / battleSpread;

        
        const isGainBest = compare.visualComparisonResults[targetStatistic](currentRatioBest,refRatio);//currentRatioBest >= refRatio;
        // console.log(isGainBest)
        const bestCharObject = bestEntry.characterObject;


        // char1SPD: getSPD(menuStats.char1).SPDFinal,
        // char2SPD: getSPD(menuStats.char2).SPDFinal,
        // char3SPD: getSPD(menuStats.char3).SPDFinal,
        // char4SPD: getSPD(menuStats.char4).SPDFinal,
        const {char1,char2,char3,char4} = bestCharObject;
        const {char1SPD,char2SPD,char3SPD,char4SPD} = bestEntry;

        const char1Name = char1.name;
        const char1SubsMaslow = maslow[char1Name].defaultMainSubs;
        const char2Name = char2.name;
        const char2SubsMaslow = maslow[char2Name].defaultMainSubs;
        const char3Name = char3.name;
        const char3SubsMaslow = maslow[char3Name].defaultMainSubs;
        const char4Name = char4.name;
        const char4SubsMaslow = maslow[char4Name].defaultMainSubs;

        const char1SubsEntry = char1.statObject;
        const char2SubsEntry = char2.statObject;
        const char3SubsEntry = char3.statObject;
        const char4SubsEntry = char4.statObject;

        // console.log(refRatio,battleSpread,battleCeiling,battleFloor)

        const queryResultsBestRow = customHTML.queryResultsBestRow;
        bestResultBox.innerHTML = `<div class="queryResultTeamRowBox">
            <div class="analyticsResultRowDMG">
                <span class="queryResultRowDMGDamage">${isGainBest ? "+" : ""}${((isInvertedRange ? -100 : 100) * (currentEvalBest/refPoint - 1)).toLocaleString()}% (${currentEvalBest.toLocaleString()})</span>
                <span class="queryResultRowDMGAV">[AV:${bestEntry.battleAV.toLocaleString()} C:${bestEntry.cycle}]</span>
            </div>
            ${isBattleEnd ? `<div class="inspectOptimizerGearResultRow">
                            <div class="inspectOptimizerGearResultButton clickable" onclick="customMenu.createOptimizerResultInspectMenu(${counter})">View Relics/Stats</div>
                        </div>` : ""}
            <div class="analyticsResultRowDMGBarHolderOuter">
                <div class="queryBarGainText">Total Gain/Loss</div>
                <div class="analyticsResultRowDMGBarHolder">
                    <div class="${isGainBest ? "analyticsResultRowDMGBarGreaterThan" : "analyticsResultRowDMGBarLessThan"}" style="left:0%;width:${isGainBest ? ((currentEvalBest - refPoint)/upperSpread) *(isInvertedRange ? -100 : 100): ((refPoint - currentEvalBest)/lowerSpread)*(isInvertedRange ? -100 : 100)}%;"></div>
                </div>
                <div class="queryBarGainText">Relative to Equipped Gear</div>
                <div class="analyticsResultRowDMGBarHolder">
                    <div class="${isGainBest ? "analyticsResultRowDMGBarGreaterThan" : "analyticsResultRowDMGBarLessThan"}" style="left:${isGainBest ? refRatio*100 : currentRatioBest*100}%;width:${isGainBest ? ((currentEvalBest - refPoint)/upperSpread) * upperSpreadPercent * (isInvertedRange ? -100 : 100) : ((refPoint - currentEvalBest)/lowerSpread)*lowerSpreadPercent*(isInvertedRange ? -100 : 100)}%;"></div>
                    <div class="analyticsResultRowDMGBarRefPoint" style="left:${refRatio*100}%;"></div>
                </div>
            </div>
            <div class="analyticsResultBestResultRowRelicsBox">
                ${queryResultsBestRow(1,char1,char1SPD,char1SubsEntry,char1SubsMaslow)
                    + queryResultsBestRow(2,char2,char2SPD,char2SubsEntry,char2SubsMaslow)
                    + queryResultsBestRow(3,char3,char3SPD,char3SubsEntry,char3SubsMaslow)
                    + queryResultsBestRow(4,char4,char4SPD,char4SubsEntry,char4SubsMaslow)
                }
            </div>
        </div>`;

        // <div class="analyticsResultRowDMGBarHolder">
        //             <div class="${isGainBest ? "analyticsResultRowDMGBarGreaterThan" : "analyticsResultRowDMGBarLessThan"}" style="left:${isGainBest ? refRatio*100 : currentRatioBest*100}%;width:${isGainBest ? (isInvertedRange ? refRatio - currentRatioBest : currentRatioBest - refRatio)*100 : (refRatio - currentRatioBest)*100}%;"></div>
        //             <div class="analyticsResultRowDMGBarRefPoint" style="left:${refRatio*100}%;"></div>
        //         </div>
        

        if (isBattleEnd) {
            let displayBox = readSelection("comparisonsDisplayHolderBox");
            displayBox.innerHTML = "";
            let resultsString = "";
            let equivalentResultActive = false;
            let equivalentContainer = "";
            let similarContainer = "";
            let rowCounter = 0;
            let equivalentCounter = 0;
            let similarCounter = 0;
            let similarResultActive = false;



            // <details class="actionDetailBodyDetailExpandBuffs" open>
            //             <summary class="actionDetailBodyDetailExpandHeaderBackgroundINNER clickable"></summary>
            // </details>

            let uniqueRowHeaderSubs = {
                "char1": [],
                "char2": [],
                "char3": [],
                "char4": [],
            }

            const queryResultsStandardRow = customHTML.queryResultsStandardRow;
            const queryResultEquivalentRow = customHTML.queryResultEquivalentRow;
            const compareFunctionVisual = compare.visualComparisonResults[targetStatistic];
            // compare.visualComparisonResults[targetStatistic](currentRatioBest,refRatio);
            for (let entry of results) {
                const currentEval = entry[targetStatistic];
                const currentRatio = (isInvertedRange ? battleFloor - currentEval : currentEval - battleFloor) / battleSpread;


                // compare.visualComparisonResults[targetStatistic](currentRatioBest,refRatio);
                // const isGain = currentRatio >= refRatio;
                const isGain = compareFunctionVisual(currentRatio,refRatio);//currentRatio >= refRatio;
                const currentCharacterObject = entry.characterObject;

                const char1 = currentCharacterObject.char1;
                const char2 = currentCharacterObject.char2;
                const char3 = currentCharacterObject.char3;
                const char4 = currentCharacterObject.char4;

                const char1Name = char1.name;
                const char1SubsMaslow = maslow[char1Name].defaultMainSubs;
                const char2Name = char2.name;
                const char2SubsMaslow = maslow[char2Name].defaultMainSubs;
                const char3Name = char3.name;
                const char3SubsMaslow = maslow[char3Name].defaultMainSubs;
                const char4Name = char4.name;
                const char4SubsMaslow = maslow[char4Name].defaultMainSubs;

                const char1SubsEntry = char1.statObject;
                const char2SubsEntry = char2.statObject;
                const char3SubsEntry = char3.statObject;
                const char4SubsEntry = char4.statObject;

                const {char1SPD,char2SPD,char3SPD,char4SPD} = entry;

                let outerComparisonString = "";
                for (let outeri = 1;outeri<=4;outeri++) {
                    const currentChar = currentCharacterObject["char" + outeri];
                    outerComparisonString += currentChar.lcName + currentChar["2pc"] + currentChar["4pc"] + currentChar.planar + currentChar.BodyMain + currentChar.FeetMain + currentChar.SphereMain + currentChar.RopeMain;
                }

                if (!equivalentResultActive && !similarResultActive) {

                    const globalFilters = globalUI.filters;
                    const filterPath1 = globalFilters.char1;
                    const filterPath2 = globalFilters.char2;
                    const filterPath3 = globalFilters.char3;
                    const filterPath4 = globalFilters.char4;
                    // const [charMaslow1,charMaslow2,charMaslow3,charMaslow4] = charMaslow;

                    // const charMaslow1 = filterPath.desired1;
                    // const charMaslow2 = filterPath.desired2;
                    // const charMaslow3 = filterPath.desired3;
                    // const charMaslow4 = filterPath.desired4;
                    uniqueRowHeaderSubs = {
                        "char1": [char1SubsEntry[filterPath1.desired1],char1SubsEntry[filterPath1.desired2],char1SubsEntry[filterPath1.desired3],char1SubsEntry[filterPath1.desired4]],
                        "char2": [char2SubsEntry[filterPath2.desired1],char2SubsEntry[filterPath2.desired2],char2SubsEntry[filterPath2.desired3],char2SubsEntry[filterPath2.desired4]],
                        "char3": [char3SubsEntry[filterPath3.desired1],char3SubsEntry[filterPath3.desired2],char3SubsEntry[filterPath3.desired3],char3SubsEntry[filterPath3.desired4]],
                        "char4": [char4SubsEntry[filterPath4.desired1],char4SubsEntry[filterPath4.desired2],char4SubsEntry[filterPath4.desired3],char4SubsEntry[filterPath4.desired4]],
                    }

    
                    // currentBestResultHolderBox
                    //analyticsResultRowRelicsIcon
                    resultsString += `<div class="queryResultTeamRowBox">
                        <div class="analyticsResultRowDMG">
                            <span class="queryResultRowDMGDamage">${isGain ? "+" : ""}${((isInvertedRange ? -100 : 100) * (currentEval/refPoint - 1)).toLocaleString()}% (${currentEval.toLocaleString()})</span>
                            <span class="queryResultRowDMGAV">[AV:${entry.battleAV.toLocaleString()} C:${entry.cycle}]</span>
                        </div>
                        <div class="inspectOptimizerGearResultRow">
                            <div class="inspectOptimizerGearResultButton clickable" onclick="customMenu.createOptimizerResultInspectMenu(${counter})">View Relics/Stats</div>
                        </div>
                        <div class="analyticsResultRowDMGBarHolderOuter">
                            <div class="queryBarGainText">Total Gain/Loss</div>
                            <div class="analyticsResultRowDMGBarHolder">
                                <div class="${isGain ? "analyticsResultRowDMGBarGreaterThan" : "analyticsResultRowDMGBarLessThan"}" style="left:0%;width:${isGain ? ((currentEval - refPoint)/upperSpread) *(isInvertedRange ? -100 : 100) : ((refPoint - currentEval)/lowerSpread)*(isInvertedRange ? -100 : 100)}%;"></div>
                            </div>
                            <div class="queryBarGainText">Relative to Equipped Gear</div>
                            <div class="analyticsResultRowDMGBarHolder">
                                <div class="${isGain ? "analyticsResultRowDMGBarGreaterThan" : "analyticsResultRowDMGBarLessThan"}" style="left:${isGain ? refRatio*100 : currentRatio*100}%;width:${isGain ? ((currentEval - refPoint)/upperSpread) *upperSpreadPercent*(isInvertedRange ? -100 : 100) : ((refPoint - currentEval)/lowerSpread)*lowerSpreadPercent*(isInvertedRange ? -100 : 100)}%;"></div>
                                <div class="analyticsResultRowDMGBarRefPoint" style="left:${refRatio*100}%;"></div>
                            </div>
                        </div>
                        <div class="analyticsResultRowRelicsBox">
                            ${queryResultsStandardRow(1,char1,char1SPD,char1SubsEntry,char1SubsMaslow)
                                + queryResultsStandardRow(2,char2,char2SPD,char2SubsEntry,char2SubsMaslow)
                                + queryResultsStandardRow(3,char3,char3SPD,char3SubsEntry,char3SubsMaslow)
                                + queryResultsStandardRow(4,char4,char4SPD,char4SubsEntry,char4SubsMaslow)
                            }
                        </div>
                    </div>`;

                    const nextResult = results[counter + 1];
                    const equivalentLookahead = nextResult?.[targetStatistic] === currentEval;
                    if (equivalentLookahead) {
                        equivalentResultActive = true;
                    }
                    else if (nextResult) {
                        let innerComparisonString = "";
                        for (let inneri = 1;inneri<=4;inneri++) {
                            const currentChar = nextResult.characterObject["char" + inneri];
                            innerComparisonString += currentChar.lcName + currentChar["2pc"] + currentChar["4pc"] + currentChar.planar + currentChar.BodyMain + currentChar.FeetMain + currentChar.SphereMain + currentChar.RopeMain;
                        }
                        if (outerComparisonString === innerComparisonString) {similarResultActive = true;}
                    }

                    rowCounter++;
                }
                else if (equivalentResultActive) {
                    // maslow[currentCharacterObject.char1.name]
                    // defaultMainSubs: ["ATK%","CritRateBase","CritDamageBase","SPDFlat"],

                    // char1Subs: characterObject.char1.statObject,

                    // uniqueRowHeaderSubs = {
                    //     "char1": [char1SubsEntry[char1SubsMaslow[0]],char1SubsEntry[char1SubsMaslow[1]],char1SubsEntry[char1SubsMaslow[2]],char1SubsEntry[char1SubsMaslow[3]]],
                    //     "char2": [char2SubsEntry[char1SubsMaslow[0]],char2SubsEntry[char1SubsMaslow[1]],char2SubsEntry[char1SubsMaslow[2]],char2SubsEntry[char1SubsMaslow[3]]],
                    //     "char3": [char3SubsEntry[char1SubsMaslow[0]],char3SubsEntry[char1SubsMaslow[1]],char3SubsEntry[char1SubsMaslow[2]],char3SubsEntry[char1SubsMaslow[3]]],
                    //     "char4": [char4SubsEntry[char1SubsMaslow[0]],char4SubsEntry[char1SubsMaslow[1]],char4SubsEntry[char1SubsMaslow[2]],char4SubsEntry[char1SubsMaslow[3]]],
                    // }


                    // queryResultEquivalentRow(charSlot,charSPD,charSubs,charMaslow,uniqueRowHeaderSubs)
                    equivalentContainer += `<div class="queryResultTeamRowBox">
                        <div class="analyticsResultRowRelicsBox">
                            ${queryResultEquivalentRow(1,char1,char1SPD,char1SubsEntry,char1SubsMaslow,uniqueRowHeaderSubs.char1)
                                + queryResultEquivalentRow(2,char2,char2SPD,char2SubsEntry,char2SubsMaslow,uniqueRowHeaderSubs.char2)
                                + queryResultEquivalentRow(3,char3,char3SPD,char3SubsEntry,char3SubsMaslow,uniqueRowHeaderSubs.char3)
                                + queryResultEquivalentRow(4,char4,char4SPD,char4SubsEntry,char4SubsMaslow,uniqueRowHeaderSubs.char4)
                            }
                        </div>
                    </div>`;

                    const equivalentLookahead = results[counter + 1]?.[targetStatistic] === currentEval;
                    equivalentCounter++;
                    if (!equivalentLookahead) {
                        equivalentResultActive = false;
                        equivalentContainer = `<details class="actionDetailBodyDetailExpandBuffs">
                        <summary class="actionDetailBodyDetailExpandHeaderBackgroundINNER clickable">Show ${equivalentCounter.toLocaleString()} equivalent results</summary>` + equivalentContainer + `</details>`;
                        // equivalentContainer += `</details>`;
                        resultsString += equivalentContainer;
                        equivalentContainer = "";
                        equivalentCounter = 0;
                    }
                }
                else if (similarResultActive) {
                    // maslow[currentCharacterObject.char1.name]
                    // defaultMainSubs: ["ATK%","CritRateBase","CritDamageBase","SPDFlat"],

                    // char1Subs: characterObject.char1.statObject,

                    // uniqueRowHeaderSubs = {
                    //     "char1": [char1SubsEntry[char1SubsMaslow[0]],char1SubsEntry[char1SubsMaslow[1]],char1SubsEntry[char1SubsMaslow[2]],char1SubsEntry[char1SubsMaslow[3]]],
                    //     "char2": [char2SubsEntry[char1SubsMaslow[0]],char2SubsEntry[char1SubsMaslow[1]],char2SubsEntry[char1SubsMaslow[2]],char2SubsEntry[char1SubsMaslow[3]]],
                    //     "char3": [char3SubsEntry[char1SubsMaslow[0]],char3SubsEntry[char1SubsMaslow[1]],char3SubsEntry[char1SubsMaslow[2]],char3SubsEntry[char1SubsMaslow[3]]],
                    //     "char4": [char4SubsEntry[char1SubsMaslow[0]],char4SubsEntry[char1SubsMaslow[1]],char4SubsEntry[char1SubsMaslow[2]],char4SubsEntry[char1SubsMaslow[3]]],
                    // }

                    similarContainer += `<div class="queryResultTeamRowBox">
                        <div class="analyticsResultRowRelicsBox">
                            ${queryResultEquivalentRow(1,char1,char1SPD,char1SubsEntry,char1SubsMaslow,uniqueRowHeaderSubs.char1)
                                + queryResultEquivalentRow(2,char2,char2SPD,char2SubsEntry,char2SubsMaslow,uniqueRowHeaderSubs.char2)
                                + queryResultEquivalentRow(3,char3,char3SPD,char3SubsEntry,char3SubsMaslow,uniqueRowHeaderSubs.char3)
                                + queryResultEquivalentRow(4,char4,char4SPD,char4SubsEntry,char4SubsMaslow,uniqueRowHeaderSubs.char4)
                            }
                        </div>
                    </div>`;

                    // const char1Sub1 = char1SubsEntry[char1SubsMaslow[0]];
                    // const char1Sub2 = char1SubsEntry[char1SubsMaslow[1]];
                    // const char1Sub3 = char1SubsEntry[char1SubsMaslow[2]];
                    // const char1Sub4 = char1SubsEntry[char1SubsMaslow[3]];

                    // const char2Sub1 = char2SubsEntry[char2SubsMaslow[0]];
                    // const char2Sub2 = char2SubsEntry[char2SubsMaslow[1]];
                    // const char2Sub3 = char2SubsEntry[char2SubsMaslow[2]];
                    // const char2Sub4 = char2SubsEntry[char2SubsMaslow[3]];

                    // const char3Sub1 = char3SubsEntry[char3SubsMaslow[0]];
                    // const char3Sub2 = char3SubsEntry[char3SubsMaslow[1]];
                    // const char3Sub3 = char3SubsEntry[char3SubsMaslow[2]];
                    // const char3Sub4 = char3SubsEntry[char3SubsMaslow[3]];

                    // const char4Sub1 = char4SubsEntry[char4SubsMaslow[0]];
                    // const char4Sub2 = char4SubsEntry[char4SubsMaslow[1]];
                    // const char4Sub3 = char4SubsEntry[char4SubsMaslow[2]];
                    // const char4Sub4 = char4SubsEntry[char4SubsMaslow[3]];

                    // similarContainer += `<div class="queryResultTeamRowBox">
                    //     <div class="analyticsResultRowRelicsBox">
        
                    //         <div class="queryResultsQuarterBoxEquivalent">
                    //             <div class="queryResultsQuarterCharacterImageBoxEquivalent">
                    //                 <img src="/HonkaiSR/${characters[char1Name].preview}" class="queryResultsQuarterCharacterImageEquivalent"/>
                    //                 <div class="queryResultsQuarterBoxMainstatsEquivalent">
                    //                     <img src="/HonkaiSR/${relicSets[char1.planar].icon}" class="analyticsResultEquivalentIconLeft"/>
                    //                     <img src="/HonkaiSR/${relicSets[char1["2pc"]].icon}" class="analyticsResultEquivalentIconLeft"/>
                    //                     <img src="/HonkaiSR/${relicSets[char1["4pc"]].icon}" class="analyticsResultEquivalentIconLeft"/>
                    //                     <img src="${propertyImagePaths[mappedFamilies[greatTableIndex[char1.BodyMain]]].icon}" class="analyticsResultEquivalentIconLeft"/>
                    //                     <img src="${propertyImagePaths[mappedFamilies[greatTableIndex[char1.FeetMain]]].icon}" class="analyticsResultEquivalentIconLeft"/>
                    //                     <img src="${propertyImagePaths[mappedFamilies[greatTableIndex[char1.SphereMain]]].icon}" class="analyticsResultEquivalentIconLeft"/>
                    //                     <img src="${propertyImagePaths[mappedFamilies[greatTableIndex[char1.RopeMain]]].icon}" class="analyticsResultEquivalentIconRight"/>
                    //                 </div>
                    //                 <div class="queryResultsCharSPDValue">
                    //                     <img src="${propertyImagePaths.SPD.icon}" class="analyticsResultSPDDisplayIcon"/>
                    //                     ${Math.floor(entry.char1SPD)}
                    //                 </div>
                    //             </div>
                    //             <div class="queryResultsQuarterCharacterImageBoxEquivalent">
                    //                 <div class="queryResultsQuarterBoxMainstatsEquivalentSubsRow">
                    //                     <img src="${propertyImagePaths[mappedFamilies[greatTableIndex[char1SubsMaslow[0]]]].icon}" class="analyticsResultEquivalentIconLeft"/>
                    //                     <div class="${char1Sub1 != uniqueRowHeaderSubs.char1[0] ? "imageRowStatisticStatBoxRollsEstEquivalentChangeShown" : "imageRowStatisticStatBoxRollsEstEquivalent"}">${char1Sub1}</div>
                    //                     <img src="${propertyImagePaths[mappedFamilies[greatTableIndex[char1SubsMaslow[1]]]].icon}" class="analyticsResultEquivalentIconLeft"/>
                    //                     <div class="${char1Sub2 != uniqueRowHeaderSubs.char1[1] ? "imageRowStatisticStatBoxRollsEstEquivalentChangeShown" : "imageRowStatisticStatBoxRollsEstEquivalent"}">${char1Sub2}</div>
                    //                     <img src="${propertyImagePaths[mappedFamilies[greatTableIndex[char1SubsMaslow[2]]]].icon}" class="analyticsResultEquivalentIconLeft"/>
                    //                     <div class="${char1Sub3 != uniqueRowHeaderSubs.char1[2] ? "imageRowStatisticStatBoxRollsEstEquivalentChangeShown" : "imageRowStatisticStatBoxRollsEstEquivalent"}">${char1Sub3}</div>
                    //                     <img src="${propertyImagePaths[mappedFamilies[greatTableIndex[char1SubsMaslow[3]]]].icon}" class="analyticsResultEquivalentIconRight"/>
                    //                     <div class="${char1Sub4 != uniqueRowHeaderSubs.char1[3] ? "imageRowStatisticStatBoxRollsEstEquivalentChangeShown" : "imageRowStatisticStatBoxRollsEstEquivalent"}">${char1Sub4}</div>
                    //                 </div>
                    //             </div>
                    //         </div>
        
                    //         <div class="queryResultsQuarterBoxEquivalent">
                    //             <div class="queryResultsQuarterCharacterImageBoxEquivalent">
                    //                 <img src="/HonkaiSR/${characters[char2.name].preview}" class="queryResultsQuarterCharacterImageEquivalent"/>
                    //                 <div class="queryResultsQuarterBoxMainstatsEquivalent">
                    //                     <img src="/HonkaiSR/${relicSets[char2.planar].icon}" class="analyticsResultEquivalentIconLeft"/>
                    //                     <img src="/HonkaiSR/${relicSets[char2["2pc"]].icon}" class="analyticsResultEquivalentIconLeft"/>
                    //                     <img src="/HonkaiSR/${relicSets[char2["4pc"]].icon}" class="analyticsResultEquivalentIconLeft"/>
                    //                     <img src="${propertyImagePaths[mappedFamilies[greatTableIndex[char2.BodyMain]]].icon}" class="analyticsResultEquivalentIconLeft"/>
                    //                     <img src="${propertyImagePaths[mappedFamilies[greatTableIndex[char2.FeetMain]]].icon}" class="analyticsResultEquivalentIconLeft"/>
                    //                     <img src="${propertyImagePaths[mappedFamilies[greatTableIndex[char2.SphereMain]]].icon}" class="analyticsResultEquivalentIconLeft"/>
                    //                     <img src="${propertyImagePaths[mappedFamilies[greatTableIndex[char2.RopeMain]]].icon}" class="analyticsResultEquivalentIconRight"/>
                    //                 </div>
                    //                 <div class="queryResultsCharSPDValue">
                    //                     <img src="${propertyImagePaths.SPD.icon}" class="analyticsResultSPDDisplayIcon"/>
                    //                     ${Math.floor(entry.char2SPD)}
                    //                 </div>
                    //             </div>
                    //             <div class="queryResultsQuarterCharacterImageBoxEquivalent">
                    //                 <div class="queryResultsQuarterBoxMainstatsEquivalentSubsRow">
                    //                     <img src="${propertyImagePaths[mappedFamilies[greatTableIndex[char2SubsMaslow[0]]]].icon}" class="analyticsResultEquivalentIconLeft"/>
                    //                     <div class="${char2Sub1 != uniqueRowHeaderSubs.char2[0] ? "imageRowStatisticStatBoxRollsEstEquivalentChangeShown" : "imageRowStatisticStatBoxRollsEstEquivalent"}">${char2Sub1}</div>
                    //                     <img src="${propertyImagePaths[mappedFamilies[greatTableIndex[char2SubsMaslow[1]]]].icon}" class="analyticsResultEquivalentIconLeft"/>
                    //                     <div class="${char2Sub2 != uniqueRowHeaderSubs.char2[1] ? "imageRowStatisticStatBoxRollsEstEquivalentChangeShown" : "imageRowStatisticStatBoxRollsEstEquivalent"}">${char2Sub2}</div>
                    //                     <img src="${propertyImagePaths[mappedFamilies[greatTableIndex[char2SubsMaslow[2]]]].icon}" class="analyticsResultEquivalentIconLeft"/>
                    //                     <div class="${char2Sub3 != uniqueRowHeaderSubs.char2[2] ? "imageRowStatisticStatBoxRollsEstEquivalentChangeShown" : "imageRowStatisticStatBoxRollsEstEquivalent"}">${char2Sub3}</div>
                    //                     <img src="${propertyImagePaths[mappedFamilies[greatTableIndex[char2SubsMaslow[3]]]].icon}" class="analyticsResultEquivalentIconRight"/>
                    //                     <div class="${char2Sub4 != uniqueRowHeaderSubs.char2[3] ? "imageRowStatisticStatBoxRollsEstEquivalentChangeShown" : "imageRowStatisticStatBoxRollsEstEquivalent"}">${char2Sub4}</div>
                    //                 </div>
                    //             </div>
                    //         </div>
        
                    //         <div class="queryResultsQuarterBoxEquivalent">
                    //             <div class="queryResultsQuarterCharacterImageBoxEquivalent">
                    //                 <img src="/HonkaiSR/${characters[char3.name].preview}" class="queryResultsQuarterCharacterImageEquivalent"/>
                    //                 <div class="queryResultsQuarterBoxMainstatsEquivalent">
                    //                     <img src="/HonkaiSR/${relicSets[char3.planar].icon}" class="analyticsResultEquivalentIconLeft"/>
                    //                     <img src="/HonkaiSR/${relicSets[char3["2pc"]].icon}" class="analyticsResultEquivalentIconLeft"/>
                    //                     <img src="/HonkaiSR/${relicSets[char3["4pc"]].icon}" class="analyticsResultEquivalentIconLeft"/>
                    //                     <img src="${propertyImagePaths[mappedFamilies[greatTableIndex[char3.BodyMain]]].icon}" class="analyticsResultEquivalentIconLeft"/>
                    //                     <img src="${propertyImagePaths[mappedFamilies[greatTableIndex[char3.FeetMain]]].icon}" class="analyticsResultEquivalentIconLeft"/>
                    //                     <img src="${propertyImagePaths[mappedFamilies[greatTableIndex[char3.SphereMain]]].icon}" class="analyticsResultEquivalentIconLeft"/>
                    //                     <img src="${propertyImagePaths[mappedFamilies[greatTableIndex[char3.RopeMain]]].icon}" class="analyticsResultEquivalentIconRight"/>
                    //                 </div>
                    //                 <div class="queryResultsCharSPDValue">
                    //                     <img src="${propertyImagePaths.SPD.icon}" class="analyticsResultSPDDisplayIcon"/>
                    //                     ${Math.floor(entry.char3SPD)}
                    //                 </div>
                    //             </div>
                    //             <div class="queryResultsQuarterCharacterImageBoxEquivalent">
                    //                 <div class="queryResultsQuarterBoxMainstatsEquivalentSubsRow">
                    //                     <img src="${propertyImagePaths[mappedFamilies[greatTableIndex[char3SubsMaslow[0]]]].icon}" class="analyticsResultEquivalentIconLeft"/>
                    //                     <div class="${char3Sub1 != uniqueRowHeaderSubs.char3[0] ? "imageRowStatisticStatBoxRollsEstEquivalentChangeShown" : "imageRowStatisticStatBoxRollsEstEquivalent"}">${char3Sub1}</div>
                    //                     <img src="${propertyImagePaths[mappedFamilies[greatTableIndex[char3SubsMaslow[1]]]].icon}" class="analyticsResultEquivalentIconLeft"/>
                    //                     <div class="${char3Sub2 != uniqueRowHeaderSubs.char3[1] ? "imageRowStatisticStatBoxRollsEstEquivalentChangeShown" : "imageRowStatisticStatBoxRollsEstEquivalent"}">${char3Sub2}</div>
                    //                     <img src="${propertyImagePaths[mappedFamilies[greatTableIndex[char3SubsMaslow[2]]]].icon}" class="analyticsResultEquivalentIconLeft"/>
                    //                     <div class="${char3Sub3 != uniqueRowHeaderSubs.char3[2] ? "imageRowStatisticStatBoxRollsEstEquivalentChangeShown" : "imageRowStatisticStatBoxRollsEstEquivalent"}">${char3Sub3}</div>
                    //                     <img src="${propertyImagePaths[mappedFamilies[greatTableIndex[char3SubsMaslow[3]]]].icon}" class="analyticsResultEquivalentIconRight"/>
                    //                     <div class="${char3Sub4 != uniqueRowHeaderSubs.char3[3] ? "imageRowStatisticStatBoxRollsEstEquivalentChangeShown" : "imageRowStatisticStatBoxRollsEstEquivalent"}">${char3Sub4}</div>
                    //                 </div>
                    //             </div>
                    //         </div>
        
                    //         <div class="queryResultsQuarterBoxEquivalent">
                    //             <div class="queryResultsQuarterCharacterImageBoxEquivalent">
                    //                 <img src="/HonkaiSR/${characters[char4.name].preview}" class="queryResultsQuarterCharacterImageEquivalent"/>
                    //                 <div class="queryResultsQuarterBoxMainstatsEquivalent">
                    //                     <img src="/HonkaiSR/${relicSets[char4.planar].icon}" class="analyticsResultEquivalentIconLeft"/>
                    //                     <img src="/HonkaiSR/${relicSets[char4["2pc"]].icon}" class="analyticsResultEquivalentIconLeft"/>
                    //                     <img src="/HonkaiSR/${relicSets[char4["4pc"]].icon}" class="analyticsResultEquivalentIconLeft"/>
                    //                     <img src="${propertyImagePaths[mappedFamilies[greatTableIndex[char4.BodyMain]]].icon}" class="analyticsResultEquivalentIconLeft"/>
                    //                     <img src="${propertyImagePaths[mappedFamilies[greatTableIndex[char4.FeetMain]]].icon}" class="analyticsResultEquivalentIconLeft"/>
                    //                     <img src="${propertyImagePaths[mappedFamilies[greatTableIndex[char4.SphereMain]]].icon}" class="analyticsResultEquivalentIconLeft"/>
                    //                     <img src="${propertyImagePaths[mappedFamilies[greatTableIndex[char4.RopeMain]]].icon}" class="analyticsResultEquivalentIconRight"/>
                    //                 </div>
                    //                 <div class="queryResultsCharSPDValue">
                    //                     <img src="${propertyImagePaths.SPD.icon}" class="analyticsResultSPDDisplayIcon"/>
                    //                     ${Math.floor(entry.char4SPD)}
                    //                 </div>
                    //             </div>
                    //             <div class="queryResultsQuarterCharacterImageBoxEquivalent">
                    //                 <div class="queryResultsQuarterBoxMainstatsEquivalentSubsRow">
                    //                     <img src="${propertyImagePaths[mappedFamilies[greatTableIndex[char4SubsMaslow[0]]]].icon}" class="analyticsResultEquivalentIconLeft"/>
                    //                     <div class="${char4Sub1 != uniqueRowHeaderSubs.char4[0] ? "imageRowStatisticStatBoxRollsEstEquivalentChangeShown" : "imageRowStatisticStatBoxRollsEstEquivalent"}">${char4Sub1}</div>
                    //                     <img src="${propertyImagePaths[mappedFamilies[greatTableIndex[char4SubsMaslow[1]]]].icon}" class="analyticsResultEquivalentIconLeft"/>
                    //                     <div class="${char4Sub2 != uniqueRowHeaderSubs.char4[1] ? "imageRowStatisticStatBoxRollsEstEquivalentChangeShown" : "imageRowStatisticStatBoxRollsEstEquivalent"}">${char4Sub2}</div>
                    //                     <img src="${propertyImagePaths[mappedFamilies[greatTableIndex[char4SubsMaslow[2]]]].icon}" class="analyticsResultEquivalentIconLeft"/>
                    //                     <div class="${char4Sub3 != uniqueRowHeaderSubs.char4[2] ? "imageRowStatisticStatBoxRollsEstEquivalentChangeShown" : "imageRowStatisticStatBoxRollsEstEquivalent"}">${char4Sub3}</div>
                    //                     <img src="${propertyImagePaths[mappedFamilies[greatTableIndex[char4SubsMaslow[3]]]].icon}" class="analyticsResultEquivalentIconRight"/>
                    //                     <div class="${char4Sub4 != uniqueRowHeaderSubs.char4[3] ? "imageRowStatisticStatBoxRollsEstEquivalentChangeShown" : "imageRowStatisticStatBoxRollsEstEquivalent"}">${char4Sub4}</div>
                    //                 </div>
                    //             </div>
                    //         </div>
                            
                    //     </div>
                    // </div>`;


                    const nextResult = results[counter + 1];
                    similarCounter++;
                    if (nextResult) {
                        let innerComparisonString = "";
                        for (let inneri = 1;inneri<=4;inneri++) {
                            const currentChar = nextResult.characterObject["char" + inneri];
                            innerComparisonString += currentChar.lcName + currentChar["2pc"] + currentChar["4pc"] + currentChar.planar + currentChar.BodyMain + currentChar.FeetMain + currentChar.SphereMain + currentChar.RopeMain;
                        }
                        if (outerComparisonString === innerComparisonString) {similarResultActive = true;}
                        else {similarResultActive = false;}
                    }
                    else {similarResultActive = false;}

                    if (!similarResultActive) {
                        similarResultActive = false;
                        similarContainer = `<details class="actionDetailBodyDetailExpandBuffs">
                        <summary class="actionDetailBodyDetailExpandHeaderBackgroundINNER clickable">Show ${similarCounter.toLocaleString()} similar gear results</summary>` + similarContainer + `</details>`;
                        // equivalentContainer += `</details>`;
                        resultsString += similarContainer;
                        similarContainer = "";
                        similarCounter = 0;
                    }
                }
                
                counter++;
                if (rowCounter>=limit || counter === results.length) {1

                    if (equivalentResultActive) {
                        equivalentContainer = `<details class="actionDetailBodyDetailExpandBuffs">
                        <summary class="actionDetailBodyDetailExpandHeaderBackgroundINNER clickable">Show ${equivalentCounter.toLocaleString()} equivalent results</summary>` + equivalentContainer + `</details>`;
                        // equivalentContainer += `</details>`;
                        resultsString += equivalentContainer;
                    }
                    if (similarResultActive) {
                        similarContainer = `<details class="actionDetailBodyDetailExpandBuffs">
                        <summary class="actionDetailBodyDetailExpandHeaderBackgroundINNER clickable">Show ${similarCounter.toLocaleString()} similar gear results</summary>` + similarContainer + `</details>`;
                        // equivalentContainer += `</details>`;
                        resultsString += similarContainer;
                    }
                    break;
                }
            }

            displayBox.innerHTML += resultsString;
        }
    },










    clearQueryResultsDisplay() {
        readSelection("moduleQueryBoxHolder").innerHTML = "";
    },
    clearInvalidQuerySelections() {
        const referenceArray = globalRecords.character.modQueryOptions;
        let isValidMod = false;
        for (let entry of referenceArray) {
            if (entry === readSelection("queryMod").value && entry != "") {isValidMod = true;break;}
        }
        if (!isValidMod) {
            for (let entry of referenceArray) {if (entry != "") {readSelection("queryMod").value = entry;break;}}
        }
    },
    updateQueryCoreSelected(imageElementID) {
        const weaponRef = globalRecords.weapon;
        const typeRef2 = [`1 - ${weaponRef.coreRoll1 || "No input"}`,`2 - ${weaponRef.coreRoll2 || "No input"}`,`3 - ${weaponRef.coreRoll3 || "No input"}`,`4 - ${weaponRef.coreRoll4 || "No input"}`,`5 - ${weaponRef.coreRoll5 || "No input"}`];

        readSelection("queryMod").value = typeRef2[imageElementID-1];
        moduleQueryFunctions.getModuleQueryResults();
    },
    updateQueryAbilitySelected(imageElementID) {
        // damageAbilityIcon1Comparisons //readSelection("centerAbilityImageRowComparisons").style.display = "flex";
        // const weaponRef = globalRecords.weapon;
        // const typeRef2 = [`1 - ${weaponRef.coreRoll1 || "No input"}`,`2 - ${weaponRef.coreRoll2 || "No input"}`,`3 - ${weaponRef.coreRoll3 || "No input"}`,`4 - ${weaponRef.coreRoll4 || "No input"}`,`5 - ${weaponRef.coreRoll5 || "No input"}`];


        const characterRef = globalRecords.character;
        const currentCharacter = characterRef.currentCharacter;
        //ability array handling is done within userTriggers.updateSelectedMod
        const arrayRef = characterRef.abilityArray;
        const abilityRefs = characters[currentCharacter].abilities;

        //ABILITY KEYS
        let abilityRefArray = [];
        for (let i=1;i<=5;i++) {
            const path = arrayRef[i-1] === 0 ? "base" : arrayRef[i-1];
            const currentPath = abilityRefs[`ability${i}`][path];
            abilityRefArray.push(currentPath.name);
        }
        const abilityRefSet = new Set(abilityRefArray);

        if (!abilityRefSet.has(readSelection("queryAbility").value)) {imageElementID = 1}
        else if (!imageElementID) {
            imageElementID = abilityRefArray.indexOf(readSelection("queryAbility").value) + 1;
        }
        readSelection("queryAbility").value = abilityRefArray[imageElementID-1];

        for (let i=1;i<=5;i++) {
            readSelection(`damageAbilityIcon${i}Comparisons`).style.border = "none";
            readSelection(`damageAbilityIcon${i}Comparisons`).style.opacity = "0.3";
        }
        readSelection(`damageAbilityIcon${imageElementID}Comparisons`).style.border = "1px solid white";
        readSelection(`damageAbilityIcon${imageElementID}Comparisons`).style.opacity = "1";

        moduleQueryFunctions.getModuleQueryResults();
    },
    updateQueryTypeSelected(imageElementID) {
        let abilityRefArray = ["Ability","Weapon","Stat"];

        readSelection("queryType").value = abilityRefArray[imageElementID-1];

        for (let i=1;i<=3;i++) {
            readSelection(`queryTypeSelectorDisplayBox${i}`).style.border = "none";
            readSelection(`queryTypeSelectorDisplayBox${i}`).style.opacity = "0.3";
        }
        readSelection(`queryTypeSelectorDisplayBox${imageElementID}`).style.border = "1px solid white";
        readSelection(`queryTypeSelectorDisplayBox${imageElementID}`).style.opacity = "1";

        moduleQueryFunctions.getModuleQueryResults();
    },
    updateQueryGearSelected(imageElementID) {
        let abilityRefArray = ["Character [Mods]","Reactor [Substats]","Weapon [Mods]","Weapon [Substats]","Weapon [Cores]","Component [Sets]"];

        readSelection("queryTypeGear").value = abilityRefArray[imageElementID-1];

        for (let i=1;i<=6;i++) {
            readSelection(`queryTypeSelectorGearBox${i}`).style.border = "none";
            readSelection(`queryTypeSelectorGearBox${i}`).style.opacity = "0.3";
        }
        readSelection(`queryTypeSelectorGearBox${imageElementID}`).style.border = "1px solid white";
        readSelection(`queryTypeSelectorGearBox${imageElementID}`).style.opacity = "1";

        moduleQueryFunctions.getModuleQueryResults();
    },
    updateQueryReactorSelected(imageElementID) {
        const reactorRef = globalRecords.reactor;
        // queryReactorName1     "Ability - Reactor Roll": [reactorRef.subRoll1,reactorRef.subRoll2],
        const typeRef2 = [`${reactorRef.subRoll1 || "No input"}`,`${reactorRef.subRoll2 || "No input"}`];

        readSelection("queryMod").value = typeRef2[imageElementID-1];
        moduleQueryFunctions.getModuleQueryResults();
    },
    updateQueryWeaponSubSelected(imageElementID) {
        const weaponRef = globalRecords.weapon;
        // queryReactorName1     "Ability - Reactor Roll": [reactorRef.subRoll1,reactorRef.subRoll2],
        const typeRef2 = [`${weaponRef.subRoll1 || "No input"}`,`${weaponRef.subRoll2 || "No input"}`,`${weaponRef.subRoll3 || "No input"}`,`${weaponRef.subRoll4 || "No input"}`];

        readSelection("queryMod").value = typeRef2[imageElementID-1];
        moduleQueryFunctions.getModuleQueryResults();
    },
    updateQueryCharacterModSelected(imageElementID) {
        const modsRef = globalRecords.character.mods;
        const typeRef2 = [
            `${modsRef[2] || "No input"}`,
            `${modsRef[3] || "No input"}`,
            `${modsRef[4] || "No input"}`,
            `${modsRef[5] || "No input"}`,
            `${modsRef[6] || "No input"}`,
            `${modsRef[7] || "No input"}`,
            `${modsRef[8] || "No input"}`,
            `${modsRef[9] || "No input"}`,
            `${modsRef[10] || "No input"}`,
            `${modsRef[11] || "No input"}`,
        ];

        //-3 here bc the offset is 2 to start with on the modsRef, but it's gonna be -1 for a 0starter then -2 for the offset, so -3
        readSelection("queryMod").value = typeRef2[imageElementID-3];
        moduleQueryFunctions.getModuleQueryResults();
    },
    updateQueryWeaponModSelected(imageElementID) {
        const modsRef = globalRecords.weapon.mods;
        const typeRef2 = [
            `${modsRef[0] || "No input"}`,
            `${modsRef[1] || "No input"}`,
            `${modsRef[2] || "No input"}`,
            `${modsRef[3] || "No input"}`,
            `${modsRef[4] || "No input"}`,
            `${modsRef[5] || "No input"}`,
            `${modsRef[6] || "No input"}`,
            `${modsRef[7] || "No input"}`,
            `${modsRef[8] || "No input"}`,
            `${modsRef[9] || "No input"}`,
        ];

        //-3 here bc the offset is 2 to start with on the modsRef, but it's gonna be -1 for a 0starter then -2 for the offset, so -3
        readSelection("queryMod").value = typeRef2[imageElementID-1];
        moduleQueryFunctions.getModuleQueryResults();
    },
    getUpdatedQueryModSelections(queryType,queryTypeGear) {
        //this function is purely for populating the correct Target dropdown info based on what is provided
        //but no actual math is done here, that's in the next function that calls this one
        const characterRef = globalRecords.character;
        const currentCharacter = characterRef.currentCharacter;
        const currentCharacterMods = characterRef.mods;
        const abilityArray = characterRef.abilityArray;
        const currentAbilityBreakdown = characterRef.currentAbilityBreakdown;

        const globalWeapon = globalRecords.weapon;
        const currentWeaponRef = sniperList[globalWeapon.currentWeapon];
        const currentWeaponMods = globalWeapon.mods;
        const currentAmmoType = currentWeaponRef.ammoType;
        const currentWeaponType = currentWeaponRef.weaponType;
        const reactorRef = globalRecords.reactor;
        const weaponRef = globalRecords.weapon;

        const typeRef3 = {
            "Character [Mods]": currentCharacterMods,
            "Weapon [Mods]": currentWeaponMods,
            "Reactor [Substats]": [reactorRef.subRoll1,reactorRef.subRoll2],
            "Weapon [Substats]": [weaponRef.subRoll1,weaponRef.subRoll2,weaponRef.subRoll3,weaponRef.subRoll4],
            "Weapon [Cores]": [`1 - ${weaponRef.coreRoll1 || "No input"}`,`2 - ${weaponRef.coreRoll2 || "No input"}`,`3 - ${weaponRef.coreRoll3 || "No input"}`,`4 - ${weaponRef.coreRoll4 || "No input"}`,`5 - ${weaponRef.coreRoll5 || "No input"}`],
            "Component [Sets]": [globalRecords.components.current4piece],
        }
        // console.log(globalRecords.components.current4piece)

        //character stuff ignores the first 2 slots, whereas weapon stuff does not
        let isWeaponBased = !queryTypeGear.toLowerCase().includes("character");
        let isReactorBased = queryTypeGear.toLowerCase().includes("reactor");
        let newModArray1 = [...typeRef3[queryTypeGear]];
        let newModArray2 = isWeaponBased ? [...typeRef3[queryTypeGear]] 
        : (isReactorBased ? [...typeRef3[queryTypeGear]] : [...typeRef3[queryTypeGear]].slice(2));//to exclude the first 2 mods, the augment and the subattack mod
        //but if it is still an ability based query but uses reactors, skip the slice as we need every entry in the array.
        characterRef.modQueryOptions = (isWeaponBased || isReactorBased) ? [...typeRef3[queryTypeGear]] : [...typeRef3[queryTypeGear]].slice(2);

        // Array of strings that will be the option names
        const queryLister = readSelection("queryModList");
        queryLister.innerHTML = "";
        // Loop through the array and create option elements
        newModArray2.forEach(function(optionName) {
            const option = document.createElement("option");
            option.textContent = optionName; // Set the display name
            queryLister.appendChild(option); // Append the option to the select element
        });

        let isValidMod = false;
        for (let entry of newModArray2) {
            if (entry === readSelection("queryMod").value && entry != "") {isValidMod = true;break;}
        }
        if (!isValidMod) {
            let backupFound = false;
            for (let entry of newModArray2) {
                if (entry != "") {readSelection("queryMod").value = entry;backupFound = true;break;}
            }
            if (!backupFound) {readSelection("queryMod").value = "";}
        }
        
        if (queryType === "Ability") {
            const abilityLister = readSelection("queryAbilityList");
            const abilityOptionLister = readSelection("queryAbilityOptionList");

            //ability array handling is done within userTriggers.updateSelectedMod
            const arrayRef = characterRef.abilityArray;
            const abilityRefs = characters[currentCharacter].abilities;

            //ABILITY KEYS
            let abilityRefArray = [];
            for (let i=1;i<=5;i++) {
                const path = arrayRef[i-1] === 0 ? "base" : arrayRef[i-1];
                const currentPath = abilityRefs[`ability${i}`][path];
                abilityRefArray.push(currentPath.name);
            }
            const abilityRefSet = new Set(abilityRefArray);
            // readSelection("queryAbilityBoxHolder").style.display = "flex";
            abilityLister.innerHTML = "";
            abilityRefArray.forEach(function(optionName) {
                const option = document.createElement("option");
                option.textContent = optionName;
                abilityLister.appendChild(option);
            });
            if (!abilityRefSet.has(readSelection("queryAbility").value)) {readSelection("queryAbility").value = abilityRefArray[0]}
            const selectedAbilityIndexReference = abilityRefArray.indexOf(readSelection("queryAbility").value);
            const selectedAbilityPath = abilityRefs[`ability${selectedAbilityIndexReference+1}`][arrayRef[selectedAbilityIndexReference] === 0 ? "base" : arrayRef[selectedAbilityIndexReference]];
            const currentAbilityReturnOptions = selectedAbilityPath.returnStatOptions;

            //ABILITY OPTION RETURN KEYS
            const optionKeys = Object.keys(currentAbilityReturnOptions);
            const optionKeysSet = new Set(optionKeys);
            abilityOptionLister.innerHTML = "";
            if (!optionKeys.length) {readSelection("queryAbilityOption").value = "N/A (or not coded yet)"}
            else {
                optionKeys.forEach(function(optionName) {
                    const option = document.createElement("option");
                    option.textContent = optionName || "N/A (or not coded yet)";
                    abilityOptionLister.appendChild(option);
                });
                if (!optionKeysSet.has(readSelection("queryAbilityOption").value)) {readSelection("queryAbilityOption").value = optionKeys[optionKeys.length-1]}
            }
            const selectedAbilityOptionIndexReference = optionKeys.indexOf(readSelection("queryAbilityOption").value);
            const selectedAbilityOptionPath = !optionKeys.length ? "N/A (or not coded yet)" : currentAbilityReturnOptions[optionKeys[selectedAbilityOptionIndexReference]];

            return {selectedAbilityIndexReference,selectedAbilityOptionPath}
        }
        else if (queryType === "Weapon") {
            //STAT OPTION RETURN KEYS
            readSelection("queryAbilityBoxHolder").style.display = "none";
            const abilityOptionLister = readSelection("queryAbilityOptionList");
            const statRefs = weaponTargetReferences;

            const optionKeys = Object.keys(statRefs);
            const optionKeysSet = new Set(optionKeys);
            abilityOptionLister.innerHTML = "";
            if (!optionKeys.length) {readSelection("queryAbilityOption").value = "N/A (or not coded yet)"}
            else {
                optionKeys.forEach(function(optionName) {
                    const option = document.createElement("option");
                    option.textContent = optionName || "N/A (or not coded yet)";
                    abilityOptionLister.appendChild(option);
                });
                if (!optionKeysSet.has(readSelection("queryAbilityOption").value)) {readSelection("queryAbilityOption").value = optionKeys[0]}//default to the first return option if an invalid input was found
            }
            const selectedAbilityOptionIndexReference = optionKeys.indexOf(readSelection("queryAbilityOption").value);
            const selectedAbilityOptionPath = !optionKeys.length ? "N/A (or not coded yet)" : statRefs[optionKeys[selectedAbilityOptionIndexReference]];
            const selectedAbilityIndexReference = 0;//just so something is returned despite not being used on stat targets

            return {selectedAbilityIndexReference,selectedAbilityOptionPath}
        }
        else if (queryType === "Stat") {
            //STAT OPTION RETURN KEYS
            readSelection("queryAbilityBoxHolder").style.display = "none";
            const abilityOptionLister = readSelection("queryAbilityOptionList");
            const statRefs = characterRef.statTargets;


            const optionKeys = Object.keys(statRefs);
            const optionKeysSet = new Set(optionKeys);
            abilityOptionLister.innerHTML = "";
            if (!optionKeys.length) {readSelection("queryAbilityOption").value = "N/A (or not coded yet)"}
            else {
                optionKeys.forEach(function(optionName) {
                    const option = document.createElement("option");
                    option.textContent = optionName || "N/A (or not coded yet)";
                    abilityOptionLister.appendChild(option);
                });
                if (!optionKeysSet.has(readSelection("queryAbilityOption").value)) {readSelection("queryAbilityOption").value = optionKeys[0]}//default to the first return option if an invalid input was found
            }
            const selectedAbilityOptionIndexReference = optionKeys.indexOf(readSelection("queryAbilityOption").value);
            const selectedAbilityOptionPath = !optionKeys.length ? "N/A (or not coded yet)" : statRefs[optionKeys[selectedAbilityOptionIndexReference]];
            const selectedAbilityIndexReference = 0;//just so something is returned despite not being used on stat targets

            return {selectedAbilityIndexReference,selectedAbilityOptionPath}
        }
    },
    getModuleQueryResults() {
        //never allow a blank query, default to ability if all else fails
        const typeRef = {"Ability": "","Stat": "","Weapon": ""}
        const gearRef = {"Character [Mods]": "","Reactor [Substats]": "","Weapon [Mods]": "","Weapon [Substats]": "","Weapon [Cores]": "","Component [Sets]": ""}
        if (typeRef[readSelection("queryType").value] === undefined) {readSelection("queryType").value = "Ability"}
        if (gearRef[readSelection("queryTypeGear").value] === undefined) {readSelection("queryTypeGear").value = "Character [Mods]"}
        const queryType = readSelection("queryType").value;
        const queryTypeGear = readSelection("queryTypeGear").value;

        if (queryType.toLowerCase().includes("ability")) {readSelection("centerAbilityImageRowComparisons").style.display = "flex";}
        else {readSelection("centerAbilityImageRowComparisons").style.display = "none";}

        const {selectedAbilityIndexReference,selectedAbilityOptionPath} = moduleQueryFunctions.getUpdatedQueryModSelections(queryType,queryTypeGear);
        moduleQueryFunctions.clearInvalidQuerySelections();

        const displayBoxElemIDs = [
            "queriesCoreSelectionRow",
            "queriesReactorSelectionRow",
            "queriesCharacterModSelectionRow",
            "queriesWeaponModSelectionRow",
            "queriesWeaponSubSelectionRow",
            "componentComparisonWarning",
        ]
        for (let entry of displayBoxElemIDs) {
            readSelection(entry).style.display = "none";
        }

        const characterRef = globalRecords.character;
        const currentCharacter = characterRef.currentCharacter;
        const currentCharacterMods = characterRef.mods;
        const abilityArray = characterRef.abilityArray;
        const currentAbilityBreakdown = characterRef.currentAbilityBreakdown;

        const globalWeapon = globalRecords.weapon;
        const currentWeaponRef = sniperList[globalWeapon.currentWeapon];
        const currentWeaponMods = globalWeapon.mods;
        const currentAmmoType = currentWeaponRef.ammoType;
        const currentWeaponType = currentWeaponRef.weaponType;
        const reactorRef = globalRecords.reactor;
        const weaponRef = globalRecords.weapon;

        // const currentWeaponImage = sniperList[currentWeapon.value].image;
        const currentCoreArray = sniperList[globalWeapon.currentWeapon].coreArray;


        let isWeaponBased = !queryTypeGear.toLowerCase().includes("character");;
        //for assigning the right mod selection that is currently equipped
        const typeRef2 = {
            "Character [Mods]": currentCharacterMods,
            "Weapon [Mods]": currentWeaponMods,
            "Reactor [Substats]": [reactorRef.subRoll1,reactorRef.subRoll2],
            "Weapon [Substats]": [weaponRef.subRoll1,weaponRef.subRoll2,weaponRef.subRoll3,weaponRef.subRoll4],
            "Weapon [Cores]": [weaponRef.coreRoll1,weaponRef.coreRoll2,weaponRef.coreRoll3,weaponRef.coreRoll4,weaponRef.coreRoll5],
            "Component [Sets]": [globalRecords.components.current4piece],
        }
        const typeRefCategory = {
            "Character [Mods]": modData,
            "Weapon [Mods]": userTriggers.weaponTypeModList[currentAmmoType],
            "Reactor [Substats]": reactorSubRolls,
            "Weapon [Substats]": weaponSubstatList,
            "Weapon [Cores]": coreRainbow,
            "Component [Sets]": componentSetBonuses,
        }

        // "Component [Sets]": [globalRecords.components.current4piece],

        // const typeRef3 = {
        //     "Character [Mods]": currentCharacterMods,
        //     "Weapon [Mods]": currentWeaponMods,
        //     "Reactor [Substats]": [reactorRef.subRoll1,reactorRef.subRoll2],
        //     "Weapon [Substats]": [weaponRef.subRoll1,weaponRef.subRoll2,weaponRef.subRoll3,weaponRef.subRoll4],
        //     "Weapon [Cores]": [`1 - ${weaponRef.coreRoll1 || "No input"}`,`2 - ${weaponRef.coreRoll2 || "No input"}`,`3 - ${weaponRef.coreRoll3 || "No input"}`,`4 - ${weaponRef.coreRoll4 || "No input"}`,`5 - ${weaponRef.coreRoll5 || "No input"}`],
        // }
        const modLists = typeRefCategory[queryTypeGear];

        let newModArray1 = [...typeRef2[queryTypeGear]];
        const modSelection = readSelection("queryMod").value;
        //abort invalid or empty queries
        if (modSelection === "" && queryTypeGear != "Component [Sets]" || selectedAbilityOptionPath === "N/A (or not coded yet)") {
            readSelection("moduleQueryBoxHolder").innerHTML = "No valid query could be completed under your current settings.<br><br>This is likely because the target you selected:<br>- Doesn't have any mods equipped to compare against<br>- Isn't meant to be optimized, maybe it just gives a bonus to other abilities<br>- Has not been coded with options to optimize around. Yet.";
            return;
        }
        else if (queryTypeGear === "Weapon [Cores]" && !currentCoreArray) {
            readSelection("moduleQueryBoxHolder").innerHTML = "Your currently selected weapon does not have cores assigned within the calculator.<br><br>This is either because it is a non-ultimate weapon, or Vash hasn't assigned slots to this weapon yet.<br>If the latter, ping Vash in discord and let him know.";
            return;
        }


        //character stuff ignores the first 2 slots, whereas weapon stuff does not
        // console.log(characterRef.modQueryOptions)
        const indexToModify = isWeaponBased ? characterRef.modQueryOptions.indexOf(modSelection) : characterRef.modQueryOptions.indexOf(modSelection) + 2;
        // console.log(indexToModify)
        const modKeyReference = Object.keys(modLists);
        const abilityTarget = `ability${selectedAbilityIndexReference+1}`;
        const targetReturnValue = `${selectedAbilityOptionPath}`;


        let oldReference = newModArray1[indexToModify];
        newModArray1[indexToModify] = "";
        const modCategoriesHolder = [];
        //create the set of categories that will help us determine when to skip things
        for (let entry of newModArray1) {
            if (modLists[entry]) {
                if (modLists[entry].category === "") {continue;}
                modCategoriesHolder.push(modLists[entry].category);
            }
        }
        const categorySet = new Set(modCategoriesHolder);
        const modSet = new Set(newModArray1);
        readSelection("moduleQueryBoxHolder").innerHTML = "";

        // console.log(indexToModify)
        let queryResultsArray = [];

        let overrideObject = {
            modArrayOverride: queryTypeGear === "Character [Mods]" ? newModArray1 : null,
            weaponModOverride: queryTypeGear === "Weapon [Mods]" ? newModArray1 : null,
            reactorRollsOverride: queryTypeGear === "Reactor [Substats]" ? newModArray1 : null,
            weaponSubstatOverride: queryTypeGear === "Weapon [Substats]" ? newModArray1 : null,
            weaponCoreOverride: queryTypeGear === "Weapon [Cores]" ? newModArray1 : null,
            componentSetOverride: queryTypeGear === "Component [Sets]" ? newModArray1 : null,
        }


        let inclusionSetSubs = new Set(newModArray1);
        let currentSlotColor = currentCoreArray && indexToModify<currentCoreArray.length ? currentCoreArray[indexToModify] : null;
        for (let entry of modKeyReference) {
            //skip logic
            if (queryTypeGear === "Character [Mods]") {
                if (categorySet.has(modLists[entry].category) || modSet.has(entry) || entry === "") {continue}
            }
            else if (queryTypeGear === "Weapon [Mods]") {
                if (categorySet.has(modLists[entry].category) || modSet.has(entry) || entry === "") {continue}

                const inclusionSet = new Set(modLists[entry].inclusion);
                const exclusionSet = new Set(modLists[entry].exclusion);

                // console.log(newModArray1);
                //if the inclusion filter is set with an actual entry, and the weapon type doesn't match it, skip it (example: sniper type but a shotgun mod, we skip that mod)
                if (modLists[entry].inclusion.length>0 && !inclusionSet.has(currentWeaponType)) {continue;}
                //otherwise, if there an exclusion filter set for the mod and we DO match it, then skip it
                else if (modLists[entry].exclusion.length>0 && exclusionSet.has(currentWeaponType)) {continue;}
            }
            else if (queryTypeGear === "Weapon [Substats]") {
                if (entry === "" || inclusionSetSubs.has(entry)) {continue}
            }
            else if (queryTypeGear === "Weapon [Cores]") {
                let currentEntry = modLists[entry];

                if (entry==="" && oldReference != "") {continue;}//Skipped empty entry when target was not blank
                else if (currentEntry.color != currentSlotColor && currentSlotColor != "Rainbow" && entry!="") {continue;}//Skipped color that did not match and wasn't rainbow
            }
            else if (queryTypeGear === "Reactor [Substats]") {
                if (entry === "" && oldReference != "") {continue;}
                else if (inclusionSetSubs.has(entry) && entry != "") {continue;}
            }
            else if (queryTypeGear === "Component [Sets]") {
                if (inclusionSetSubs.has(entry) && entry != "") {continue;}
            }


            newModArray1[indexToModify] = entry;

            let queryChecked = updateFormulas(true,overrideObject).returnObject;
            let queryEntry = null;

            if (queryType === "Weapon") {queryEntry = queryChecked.weapon[targetReturnValue];}
            else if (queryType === "Ability") {queryEntry = queryChecked[abilityTarget][targetReturnValue];}
            else {queryEntry = queryChecked[targetReturnValue];}

            // console.log(queryEntry)
            queryResultsArray.push(
                {"modName":entry,"returnedValue":queryEntry,"category": modLists[entry].category}
            )
        }

        // if (queryTypeGear === "Weapon") {}
        // else if (queryTypeGear === "Weapon") {}
        if (queryTypeGear === "Reactor [Substats]") {
            readSelection("queriesReactorSelectionRow").style.display = "flex";
            for (let i=1;i<=2;i++) {
                readSelection(`queryReactorBoxHolder${i}`).style.border = "none";
                readSelection(`queryReactorBoxHolder${i}`).style.opacity = "0.3";
            }
            // console.log(indexToModify)
            readSelection(`queryReactorBoxHolder${indexToModify+1}`).style.border = "1px solid white";
            readSelection(`queryReactorBoxHolder${indexToModify+1}`).style.opacity = "1";
        }
        else if (queryTypeGear === "Weapon [Mods]") {
            readSelection("queriesWeaponModSelectionRow").style.display = "flex";
            for (let i=1;i<=10;i++) {
                readSelection(`queryWeaponBoxHolder${i}`).style.border = "none";
                readSelection(`queryWeaponBoxHolder${i}`).style.opacity = "0.3";
            }
            readSelection(`queryWeaponBoxHolder${indexToModify+1}`).style.border = "1px solid white";
            readSelection(`queryWeaponBoxHolder${indexToModify+1}`).style.opacity = "1";
        }
        else if (queryTypeGear === "Weapon [Substats]") {
            readSelection("queriesWeaponSubSelectionRow").style.display = "flex";
            for (let i=1;i<=4;i++) {
                readSelection(`queryWeaponSubBoxHolder${i}`).style.border = "none";
                readSelection(`queryWeaponSubBoxHolder${i}`).style.opacity = "0.3";
            }
            readSelection(`queryWeaponSubBoxHolder${indexToModify+1}`).style.border = "1px solid white";
            readSelection(`queryWeaponSubBoxHolder${indexToModify+1}`).style.opacity = "1";
        }
        else if (queryTypeGear === "Weapon [Cores]") {
            readSelection("queriesCoreSelectionRow").style.display = "flex";
            for (let i=1;i<=5;i++) {
                readSelection(`weaponCore${i}IconQuery`).style.border = "none";
                readSelection(`weaponCore${i}IconQuery`).style.opacity = "0.3";
            }
            readSelection(`weaponCore${indexToModify+1}IconQuery`).style.border = "1px solid white";
            readSelection(`weaponCore${indexToModify+1}IconQuery`).style.opacity = "1";
        }
        else if (queryTypeGear === "Character [Mods]"){
            readSelection("queriesCharacterModSelectionRow").style.display = "flex";
            for (let i=3;i<=12;i++) {
                readSelection(`queryCharacterBoxHolder${i}`).style.border = "none";
                readSelection(`queryCharacterBoxHolder${i}`).style.opacity = "0.3";
            }
            readSelection(`queryCharacterBoxHolder${indexToModify+1}`).style.border = "1px solid white";
            readSelection(`queryCharacterBoxHolder${indexToModify+1}`).style.opacity = "1";
        }
        else if (queryTypeGear === "Component [Sets]"){
            readSelection("componentComparisonWarning").style.display = "flex";
        }
        // else if (queryTypeGear === "Weapon") {}

        componentComparisonWarning



        

        queryResultsArray.sort((a, b) => b.returnedValue - a.returnedValue);//sort in ascending order

        let referencePoint = {};
        //if this is a core selection, remove the "1 - " prefix from it, and if this is an empty core, treat it as an empty string instead of "no input"
        let newModSelectionName = queryTypeGear === "Weapon [Cores]" ? (modSelection.slice(4)!="No input" ? modSelection.slice(4) : "") : modSelection!="No input" ? modSelection : "";
        let foundRef = false;
        for (let entry of queryResultsArray) {
            if (entry.modName === "" && newModSelectionName != "") {
                queryResultsArray.splice(queryResultsArray.indexOf(entry),1);
                continue;
            }
            // if (entry.modName === "") {con}
            if (!foundRef && entry.modName === newModSelectionName) {
                referencePoint = {...entry};
                queryResultsArray.splice(queryResultsArray.indexOf(entry),1);
                foundRef = true;
                // break;
            }
        }

        const highestValue = queryResultsArray[0].returnedValue
        const lowestValue = queryResultsArray[queryResultsArray.length-1].returnedValue;
        const referenceValue = referencePoint.returnedValue;
        // console.log(referenceValue)modSelection
        
        // Get the container for the table
        const table = document.getElementById('moduleQueryBoxHolder');
        function createRow(entry) {
            const totalRange = highestValue - lowestValue;//the range between the lowest value seen, and the highest value seen, used to enact proportions between the ref point
            const referencePositionPercentage = ((referenceValue - lowestValue) / totalRange) * 100;//ref point placement
            const percentageDifference = ((entry.returnedValue - referenceValue) / totalRange) * 100;//this is ONLY for the bar % width, not the diff %

            //And then this is for the actual value % diff, not the bar width
            const percentageDifferenceCheck = entry.returnedValue/referenceValue;
            const percentageDifferenceValue = percentageDifferenceCheck >= 0 ? (percentageDifferenceCheck-1) * 100 : (1 - percentageDifferenceCheck) * -100;
        
            //row creation
            const row = document.createElement('div');
            row.classList.add('modsQueryResultsRow');
        
            //name generation
            const nameDiv = document.createElement('div');
            nameDiv.classList.add('modsQueryResultsRowName');
            nameDiv.textContent = `${percentageDifferenceValue>=0 ? "+" : ""}${(percentageDifferenceValue).toFixed(2)}% ${entry.modName} (${(+entry.returnedValue.toFixed(0)).toLocaleString()})`;
        
            //bar div
            const barContainer = document.createElement('div');
            barContainer.classList.add('modsQueryResultsRowBarBoxHolder');
        
            //reference tick mark
            const refMark = document.createElement('div');
            refMark.classList.add('modsQueryResultsRowBarTickMark');
            refMark.style.position = 'absolute';
            refMark.style.left = `${referencePositionPercentage}%`;//Set to ref point
            refMark.style.width = '2px';
            refMark.style.height = '100%';
            refMark.style.backgroundColor = 'white';
            refMark.style.zIndex = '1';
        
            //bar
            const bar = document.createElement('div');
            bar.classList.add('modsQueryResultsRowBar');
            bar.style.position = 'absolute';
            bar.style.height = '100%';
        
            if (percentageDifference < 0) {
                // Negative bar (to the left of the reference point)
                bar.style.width = `${Math.abs(percentageDifference)}%`;
                bar.style.backgroundColor = 'red';
                bar.style.left = `${referencePositionPercentage - Math.abs(percentageDifference)}%`;
            } else {
                // Positive bar (to the right of the reference point)
                bar.style.width = `${percentageDifference}%`;
                bar.style.backgroundColor = 'green';
                bar.style.left = `${referencePositionPercentage}%`;
            }
        
            //add to bar container
            barContainer.appendChild(refMark);
            barContainer.appendChild(bar);
            //add to row
            row.appendChild(nameDiv);
            row.appendChild(barContainer);
            //add to table
            table.appendChild(row);
        }
        
        //add a row for each entry in the comparison cycles
        queryResultsArray.forEach(entry => createRow(entry));
    }
};

//TODO: not relevant to the sim, but to the graphs only
//when graphs are constructed, the character list is pulled from globalRecords.character
//and in the case you have 2 of one character selected (which we'll disable later, but I still want to remember this quirk)
//then it will cycle through the key for each of them, aka twice, and give graphs for them both.
const graphs = {
    clearGraphRelatedTooltips() {
        for (let tooltipEntry in tooltipStorage) {
            if (tooltipEntry.includes("graphElement")) {
                delete tooltipStorage[tooltipEntry];
            }
        }
    },
    summonCustomImages: {
        "Numby": "icon/avatar/UI_Message_Contacts_Zhangzhang.png",
        "Netherwing: Pollux": "misc/11407B.png",
        "Garmentmaker": "icon/avatar/UI_Message_Contacts_AglaeaServant.png",
        "Evey": "misc/11413B.png",
        "Little Ica": "misc/11409B.png",
        "Mem": "misc/18007B.png",
        "Souldragon": "icon/skill/1414_skill.png",
        "Demiurge": "misc/11415B.png",
    },
    enemyCustomImages: {
        "default": "misc/glorp.png",
    },
    characterColors: [
        "",
        "#6e2020",
        "orange",
        "Green",
        "Lightblue",
        "#0458b8",
        "Lightblue",
        "Lightblue",
        "Lightblue",
    ],
    dmgTypeColors: {
        "Basic ATK": "#6e2020",
        "Skill": "#6e2020",
        "Ultimate": "#6e2020",
        "Break": "orange",
        "Additional DMG": "Green",
        "DOT": "Lightblue",
        "True": "",
        "Talent": "#0458b8",
        "Memosprite Skill": "#0458b8",
    },
    createGraphsByBuffUptime() {
        // tooltipStorage.graphTooltips = {};
        const battleData = globalRecords.battleData;
        graphs.clearGraphRelatedTooltips();



        // "buffGraphs": {
        //     graphBy: "AV",
        //     buffEntity: "Character",
        //     entityName: "Hysilens",
        //     buffName: "",
        // },

        const buffGraphs = globalUI.buffGraphs;
        const graphByElement = readSelection("buffUptimeGraphBy");
        const buffEntityElement = readSelection("buffUptimeSourceFrom");
        const entityNameElement = readSelection("buffUptimeSourceName");
        const buffNameElement = readSelection("buffUptimeBuffName");

        if (graphByElement.innerHTML === "") {
            graphByElement.innerHTML = `
            <option value="AV">AV</option>
            <option value="DMG">DMG Dealt</option>
            <option value="Taken">DMG Taken</option>
            `;
            buffGraphs.graphBy = "AV";
        }
        else {buffGraphs.graphBy = graphByElement.value;}

        if (buffEntityElement.innerHTML === "") {
            buffEntityElement.innerHTML = `
            <option value="Character">Character</option>
            <option value="Lightcone">Lightcone</option>
            <option value="Relic">Relic</option>
            `;
            buffGraphs.buffEntity = "Character";
        }
        else {buffGraphs.buffEntity = buffEntityElement.value;}



        const currentEntityType = buffEntityElement.value;
        let entityTypeArray = [];
        //establish all the names possible from the given entity type
        const characterObject = globalRecords.character;
        if (currentEntityType === "Character") {
            for (let characterSlot in characterObject) {
                const currentCharacter = characterObject[characterSlot];
                entityTypeArray.push(currentCharacter.name)
            }
        }
        else if (currentEntityType === "Lightcone") {
            for (let characterSlot in characterObject) {
                const currentCharacter = characterObject[characterSlot];
                entityTypeArray.push(currentCharacter.lcName)
            }
        }
        else if (currentEntityType === "Relic") {
            // "2pc": "Scholar Lost in Erudition",
            // "4pc": "Scholar Lost in Erudition",
            for (let characterSlot in characterObject) {
                const currentCharacter = characterObject[characterSlot];
                entityTypeArray.push(currentCharacter["2pc"],currentCharacter["4pc"],currentCharacter.planar)
            }
        }
        const entityTypeSet = new Set (entityTypeArray);

        

        //then check if the currently selected entity name is a valid name in the currently selected typ
        if (!entityTypeSet.has(entityNameElement.value)) {
            entityNameElement.innerHTML = "";
            let optionsString = "";
            for (let entityTypeName of entityTypeSet) {
                optionsString += `<option value="${entityTypeName}">${entityTypeName}</option>`
            }
            entityNameElement.innerHTML = optionsString;
            buffGraphs.entityName = entityNameElement.value;

            //if not, then update the entity name selections and update the global selection as well
        }
        else {buffGraphs.entityName = entityNameElement.value;}

        let buffNamePlacement = null;
        let buffNameArray = [];
        if (currentEntityType === "Character") {
            buffNamePlacement = turnLogic[buffGraphs.entityName]?.buffNames
        }
        else if (currentEntityType === "Lightcone") {
            buffNamePlacement = turnLogicLightcones[buffGraphs.entityName]?.buffNames
        }
        else if (currentEntityType === "Relic") {
            const logicPlacement = turnLogicRelics[buffGraphs.entityName];

            const logic2 = logicPlacement["2pc"]?.buffNames;
            const logic4 = logicPlacement["4pc"]?.buffNames;

            buffNamePlacement = {
                ...(logic2 ? logic2 : {}),
                ...(logic4 ? logic4 : {}),
            }
        }
        //loop through the buffNames object and push the true buff name
        for (let buffEntry in buffNamePlacement) {
            const currentEntry = buffNamePlacement[buffEntry];
            buffNameArray.push(currentEntry);
        }
        const buffNamesSet = new Set (buffNameArray);

        if (!buffNamesSet.has(buffNameElement.value)) {
            buffNameElement.innerHTML = "";
            let optionsString = "";
            for (let buffName of buffNamesSet) {
                optionsString += `<option value="${buffName}">${buffName}</option>`
            }
            buffNameElement.innerHTML = optionsString;
            buffGraphs.buffName = buffNameElement.value;

            //if not, then update the entity name selections and update the global selection as well
        }
        else {buffGraphs.buffName = buffNameElement.value;}
        const buffToFind = buffGraphs.buffName;


        // buffGraphs.graphBy = graphByElement.value;
        // buffGraphs.buffEntity = buffEntityElement.value;
        // buffGraphs.entityName = entityNameElement.value;
        // buffGraphs.buffName = buffNameElement.value;





















        let log = battleData.battleLog;
        let lastAV = null;
        for (let i=log.length-1;i>=0;i--) {
            let currentEntry = log[i];
            if (currentEntry.AV) {lastAV = currentEntry.AV;break;}
        }
    
        let lineString = "";
        let pointString = "";
    
        // battleData.characterObject.char1.name;
        let turnPoints = {
            [characterObject.char1.name]: [],
            ...(characters[characterObject.char1.name].hasRemembranceSummon ? {[characters[characterObject.char1.name].summonName]: []} : {}),

            [characterObject.char2.name]: [],
            ...(characters[characterObject.char2.name].hasRemembranceSummon ? {[characters[characterObject.char2.name].summonName]: []} : {}),

            [characterObject.char3.name]: [],
            ...(characters[characterObject.char3.name].hasRemembranceSummon ? {[characters[characterObject.char3.name].summonName]: []} : {}),

            [characterObject.char4.name]: [],
            ...(characters[characterObject.char4.name].hasRemembranceSummon ? {[characters[characterObject.char4.name].summonName]: []} : {}),
        }
    

        //     "hasRemembranceSummon": true,
        // "remembranceSummonID": 11407,
        // "summonName": "Netherwing: Pollux"

        if (buffGraphs.graphBy === "AV") {
            for (let entry of log) {
                if ((entry.logType === "BuffApply" || entry.logType === "BuffRemove") && entry.buffName === buffToFind) {
                    let charName = entry.name;
                    let AV = entry.AV;
        
                    // if (entry.buffName === "Roar Rumbles the Realm" && charName === "Kafka" && (entry.logType === "BuffApply" || entry.logType === "BuffRemove")) {
                    //     console.log(charName,entry.logType)
                    //     console.log(turnPoints[charName])
                    // }
                    if (charName.toLowerCase().includes("enemy ")) {continue;}
        
                    // console.log(turnPoints[charName],charName)
                    let lengthCheck = turnPoints[charName].length;
                    let pushToPoints = true;
                    if (entry.logType === "BuffApply") {//if the current entry is an applied buff
                        let lastEntry = turnPoints[charName][turnPoints[charName].length-1]
                        if (lengthCheck && lastEntry.logType === "BuffApply") {//and the last entry was too
                            if (lastEntry.subApplications === undefined) {lastEntry.subApplications = [];}
                            lastEntry.subApplications.push({...entry})//then push the current entry into the last entry
                            pushToPoints = false;
                        }
                        else {//otherwise, push the current entry into itself
                            if (entry.subApplications === undefined) {entry.subApplications = [];}
                            entry.subApplications.push({...entry})//yes this is stupid, yes I am lazy and would rather just ref within the array handling than access the parent each time
                        }
                    }
                    if (pushToPoints) {turnPoints[charName].push({...entry});}
                }
            }
            // console.log(turnPoints)
            for (let innerEntry in turnPoints) {
                let currentEntry = turnPoints[innerEntry];
                if (currentEntry && currentEntry.length && currentEntry[currentEntry.length-1].logType === "BuffApply") {
                    currentEntry.push({AV:lastAV,logType:"BuffRemove",buffName:currentEntry[currentEntry.length-1].buffName, name: currentEntry[currentEntry.length-1].name, source: currentEntry[currentEntry.length-1].source});
                }//if the array length is odd then that means it didn't expire before the battle ended and we can push last AV to the array when done
            }
        
            // console.log(turnPoints)
        
            let obscureGraphElementCounterWhoCares = 0;
            let lineRow = 0;
            let lineColors = graphs.characterColors;
            const turnKeys = Object.keys(turnPoints);
            let validTargets = 0;
            for (let i=turnKeys.length-1;i>=0;i--) {
                let currentKey = turnKeys[i];
                if (currentKey.toLowerCase().includes("enemy")) {
                    turnKeys.push(turnKeys.splice(turnKeys[i])[0]);
                }
                let currentEntry = turnPoints[currentKey];
                if (currentEntry && currentEntry.length) {validTargets += 1;}
            }
            // console.log(turnKeys)
            const turnLength = turnKeys.length;
            // console.log(turnLength)
            const yAdjustmentLines = (100/turnLength) * 0.95;
            let iconStringer = ``;
            const bufferRange = 80;
            const QuantityAdjustment = (bufferRange)/ (turnLength + 1)
            for (let turnEntry of turnKeys) {
                
                
                const characterCheck = characters[turnEntry] || graphs.summonCustomImages[turnEntry];
                if (!characterCheck) {continue}
                lineRow++;
                let currentEntry = turnPoints[turnEntry];
                // const currentYAdjustment = ((yAdjustmentLines * lineRow)/100) * bufferRange;
                const currentYAdjustment = (lineRow * (bufferRange)/ (validTargets + 1)) + 10;

                
                let yValue = currentYAdjustment;

                if (characters[turnEntry] && currentEntry.length) {
                    iconStringer += `<image href="/HonkaiSR/${characters[turnEntry].icon}" x="0%" y="${currentYAdjustment - 6}%" width="45" height="45" />`
                }
                else if (graphs.summonCustomImages[turnEntry] && currentEntry.length) {
                    iconStringer += `<image href="/HonkaiSR/${graphs.summonCustomImages[turnEntry]}" x="0%" y="${currentYAdjustment -6}%" width="45" height="45" />`
                }
                else {
                    lineRow--;
                    continue;
                }
                // `<image href="/HonkaiSR/${characters[battleData.characterObject.char1.name].icon}" x="0%" y="${((yAdjustmentLines * 1)/100) * 80 + 4}%" width="45" height="45" />`
        
                for (let i=0;i<currentEntry.length;i+=2) {
                    let newEntry1 = currentEntry[i];
                    let newEntry2 = currentEntry[i+1];
                    let xValue1 = newEntry1.AV/lastAV * 85 + 7.5;
                    let xValue2 = newEntry2.AV/lastAV * 85 + 7.5;
        
                    obscureGraphElementCounterWhoCares++;
                    let ID = `graphElement${obscureGraphElementCounterWhoCares}`;
        
                    let stackStringer = ``;
                    let stackPoints = [];
                    let highestStack = 0;
                    if (newEntry1.subApplications) {
                        // console.log("subs existed here")
                        // console.log(newEntry1.subApplications)
                        for (let z=0;z<newEntry1.subApplications.length;z++) {
                            let currentierCurrent = newEntry1.subApplications[z];
        
                            if (highestStack < currentierCurrent.stacks) {highestStack = currentierCurrent.stacks;}
                            // stackStringer += `${currentierCurrent.stacks}: ${+currentierCurrent.AV.toFixed(3)} --`
                            stackPoints.push({x: currentierCurrent.AV, y: currentierCurrent.stacks})
                        }
                        // let heightDiff = Math.max(2,highestStack - 1);//so 1 stack will always show in the middle, assuming a max of 2 is established
                        let heightDiff = highestStack;
                        let linePoints = ``;
                        // console.log(stackPoints)
                        for (let zz = 0;zz<stackPoints.length;zz++) {
                            let currentPoint = stackPoints[zz];
                            let minX = Math.floor(newEntry1.AV);
                            let minYBuffer = highestStack*0.1;
                            let maxY = highestStack + minYBuffer;
                            let minY = 1 - minYBuffer;
                            let fullYSpread = maxY - minY;
                            
                            let diffX = newEntry2.AV - newEntry1.AV;
                            let xValue11 = ((newEntry1.AV-minX)/diffX) * 85 + 7.5;
                            let xValue22 = Math.ceil(((newEntry2.AV-minX)/diffX) * 85 + 7.5);
        
                            // if (stackPoints.length === 1) {
                            //     // let yNew = stackPoints[currentIndex].y/heightDiff * 80 + 10;
        
                            //     linePoints += `
                            //     <line x1="${xValue11}%" y1="50%" x2="${xValue22}%" y2="50%" stroke="white" stroke-width="3"/>
                            //     <text x="3%" y="52%" fill="white" font-size="30" text-anchor="middle">${currentPoint.y}</text>
                            //     `;
                            // }
                            // else {
                                
                            let currentIndex = zz;
                            let nextIndex = zz + 1;
        
                            let xNew = (stackPoints[currentIndex].x - minX)/diffX * 85 + 7.5;
                            // let yNew = (1 - (stackPoints[currentIndex].y - minY)/heightDiff) * 80;
                            let yNew = ((1 - ((stackPoints[currentIndex].y - minY)/fullYSpread) * 0.80 - 0.10)*100);
        
                    // let yValue = ((1 - ((bulletsArray[i-3].damageAVGTotal - minDMG)/dmgSpread) * 0.80 - 0.10)*100).toFixed(4);
        
                            let xNew2 = null;
                            let yNew2 = null;
        
                            if (nextIndex >= stackPoints.length) {
                                xNew2 = xValue22;
                                yNew2 = yNew;
                                // console.log("entry was skipped",currentIndex,nextIndex,stackPoints.length);
                                // continue;
                            }
                            else {
                                xNew2 = (stackPoints[nextIndex].x - minX)/diffX * 85 + 7.5;
                                // yNew2 = (1 - (stackPoints[nextIndex].y - minY)/heightDiff) * 80;
                                yNew2 = ((1 - ((stackPoints[nextIndex].y - minY)/fullYSpread) * 0.80 - 0.10)*100);
                            }

                            if (xNew === Infinity) {xNew = 7.5;}
                            if (xNew2 === Infinity) {xNew2 = 100 - 7.5;}
        
                            // linePoints += `${xNew}%,${yNew}% `
                            linePoints += xNew != xNew2 ? `<line x1="${xNew}%" y1="${yNew}%" x2="${xNew2}%" y2="${yNew2}%" stroke="white" stroke-width="6"/>`
                            : `<circle cx="${xNew}%" cy="${yNew}%" r="5" fill="white" opacity="1"/>`;
                            if (zz === 0) {
                                let yNew3 = ((1 - ((1 - minY)/fullYSpread) * 0.80 - 0.10)*100);
                                let yNew4 = ((1 - ((highestStack - minY)/fullYSpread) * 0.80 - 0.10)*100);
                                linePoints += `
                                <text x="2%" y="${yNew3+2}%" fill="white" font-size="30" text-anchor="middle">1</text>
                                <text x="2%" y="${yNew4+2}%" fill="white" font-size="30" text-anchor="middle">${highestStack}</text>
                                `
                                highestStack
                            }
                            // }
                        }
                        // console.log(linePoints)
        
        
                        stackStringer += `
                        <svg class="weaponBulletArrayGraphBuffStacks" id="" viewBox="0 0 600 400">
                            <line x1="7.5%" y1="90%" x2="7.5%" y2="10%" stroke="grey" /> <!-- Y-axis -->
                            <line x1="7.5%" y1="90%" x2="92.5%" y2="90%" stroke="grey" /> <!-- X-axis -->
        
        
                            <text x="50%" y="7.5%" fill="white" font-size="30" text-anchor="middle">STACKS</text>
        
                            <text x="7.5%" y="97.5%" fill="white" font-size="20" text-anchor="middle">${Math.floor(newEntry1.AV)} AV</text>
                            <text x="92.5%" y="97.5%" fill="white" font-size="20" text-anchor="middle">${Math.floor(newEntry2.AV)} AV</text>
        
                            ${linePoints}
                        </svg>
                        `
                    }
                    else {console.log(newEntry1)}
        
                    let tooltipStringer = `
                    <div class="buffTooltipHolderbox">
                        <div class="buffNameHeaderRow">${newEntry1.buffName}</div>
                        <div class="buffTooltipbuffNameRow">Applied by: ${newEntry1.source}</div>
                        <div class="buffTooltipbuffNameRow">Given to: ${turnEntry}</div>
                        <div class="buffTooltipbuffNameRow">AV: ${+newEntry1.AV.toFixed(3)} to ${newEntry2.AV === lastAV ? "Battle End" : `${+newEntry2.AV.toFixed(3)}`} (${Math.floor(((newEntry2.AV-newEntry1.AV)/lastAV)*100)}%)</div>
                        ${stackStringer}
                    </div>
                    `
        
                    tooltipStorage[ID] = tooltipStringer;
        
        
                    // // let xValue = newEntry * 0.3;
                    // let yAdjustment = 0;
                    // for (let ii=i;ii>=0;ii--) {//if the last entry of a given character's turns, was at the same AV as before, or the ones before it, keep adding vertical offsets to move it out of the same plotting space
                    //     let oldEntry = currentEntry[ii];
                    //     if (oldEntry != newEntry) {break;}
        
                    //     yAdjustment += 1.5;
                    // }
        
                    // pointString += `<circle cx="${xValue}%" cy="${yValue + yAdjustment}%" r="2.5" fill="${lineColors[lineRow-1]}"/>`;
                    let liner = `
                    <g class="hover-group">
                        <line x1="20" y1="50" x2="280" y2="50"
                            stroke="blue" stroke-width="4"/>
                        <text x="150" y="30" text-anchor="middle" class="tooltip">
                        Custom tooltip text
                        </text>
                    </g>
                    `
                    const currentString = xValue1 != xValue2 ? `<line x1="${xValue1}%" y1="${yValue}%" x2="${xValue2}%" y2="${yValue}%" stroke="${lineColors[lineRow]}" stroke-width="12" opacity="0.9" class="hasHoverTooltip hoverFade" id="${ID}"/>`
                    : `<circle cx="${xValue1}%" cy="${yValue}%" r="5" fill="${lineColors[lineRow]}" opacity="1" class="hasHoverTooltip hoverFade" id="${ID}"/>`;
                    lineString += currentString;
                    // if (turnEntry === "Kafka") {console.log(currentString)}
                }
            }
            
            const graphString = `
                <div id="bulletsDisplayGraphBox" class="graphContainerboxUptime">
                    <svg class="weaponBulletArrayGraphUptime" id="" viewBox="0 0 600 400">
                        <line x1="7.5%" y1="90%" x2="7.5%" y2="10%" stroke="grey" /> <!-- Y-axis -->
                        <line x1="7.5%" y1="90%" x2="92.5%" y2="90%" stroke="grey" /> <!-- X-axis -->
        
                        ${iconStringer}
        
                        <text x="50%" y="7.5%" fill="white" font-size="15" text-anchor="middle">Buff - "${buffToFind}" Uptime by AV</text>
        
                        <text x="7.5%" y="97.5%" fill="white" font-size="15" text-anchor="middle">0 AV</text>
                        <text x="92.5%" y="97.5%" fill="white" font-size="15" text-anchor="middle">${Math.floor(lastAV)} AV</text>
                        ${lineString}
                    </svg>
                </div>
                `;
                // <text x="50%" y="97.5%" fill="white" font-size="15" text-anchor="middle">More words</text>
                // <text x="-2.5%" y="10%" fill="white" font-size="15" text-anchor="middle" transform="rotate(-90, 50, 50)">Other words</text>
                // <line x1="7.5%" y1="90%" x2="92.5%" y2="90%" stroke="black" /> <!-- X-axis -->
            readSelection("actualGraphHolderbox").innerHTML = graphString;
        }
        else if (buffGraphs.graphBy === "DMG") {
            let totalDMGTracker = {};


            // let hitData = {
            //     scalar: null,
            //     currentMulti:percentInstance,multiOf:null,tags:["True"],element:"True",
            //     DMGTotalEnd,DMGTotalCrit,DMGTotalAVG,DMGOverkill,
            //     enemyIsDead,
            //     playerData: JSON.stringify(sourceTurn),
            //     enemyData: JSON.stringify(targetTurn),
            //     AV:battleData.sumAV
            // }

            // logToBattle(battleData,{logType: "HitEnemy", hitType: "True", target: targetTurn.properName, source:sourceTurn.properName, hitData,enemyIsDead,sourceString});// let hitData = {
            //     scalar: null,
            //     currentMulti:percentInstance,multiOf:null,tags:["True"],element:"True",
            //     DMGTotalEnd,DMGTotalCrit,DMGTotalAVG,DMGOverkill,
            //     enemyIsDead,
            //     playerData: JSON.stringify(sourceTurn),
            //     enemyData: JSON.stringify(targetTurn),
            //     AV:battleData.sumAV
            // }

            // logToBattle(battleData,{logType: "HitEnemy", hitType: "True", target: targetTurn.properName, source:sourceTurn.properName, hitData,enemyIsDead,sourceString});

            for (let entry of log) {
                if (entry.logType === "HitEnemy") {
                    const hitData = entry.hitData;
                    const sourceTurn = JSON.parse(hitData.playerData);

                    if (sourceTurn.properName.toLowerCase().includes("enemy ")) {continue;}

                    const buffCheck = sourceTurn.buffsObject[buffToFind];
                    // if (!buffCheck) {continue;}
                    // entry.buffName === buffToFind

                    const currentCharacterTracker = totalDMGTracker[sourceTurn.properName] ??= {};

                    currentCharacterTracker.totalDealt = (currentCharacterTracker.totalDealt ?? 0) + hitData.DMGTotalAVG;
                    currentCharacterTracker.totalWithBuff = (currentCharacterTracker.totalWithBuff ?? 0) + (buffCheck ? hitData.DMGTotalAVG : 0);
                }
            }

            for (let charName in totalDMGTracker) {
                const currentSlot = totalDMGTracker[charName];

                if (!currentSlot.totalWithBuff) {delete totalDMGTracker[charName]}
            }




            let obscureGraphElementCounterWhoCares = 0;
            let lineRow = 0;
            let lineColors = graphs.characterColors;
            const turnKeys = Object.keys(turnPoints);
            let validTargets = 0;
            for (let i=turnKeys.length-1;i>=0;i--) {
                let currentKey = turnKeys[i];
                if (currentKey.toLowerCase().includes("enemy")) {
                    turnKeys.push(turnKeys.splice(turnKeys[i])[0]);
                }
                let currentEntry = totalDMGTracker[currentKey];
                if (currentEntry) {validTargets += 1;}
            }
            // console.log(turnKeys)
            const turnLength = turnKeys.length;
            // console.log(turnLength)
            const yAdjustmentLines = (100/turnLength) * 0.95;
            let iconStringer = ``;
            const bufferRange = 80;
            const QuantityAdjustment = (bufferRange)/ (turnLength + 1)
            for (let turnEntry of turnKeys) {
                
                
                const characterCheck = characters[turnEntry] || graphs.summonCustomImages[turnEntry];
                if (!characterCheck) {continue}
                lineRow++;
                let currentEntry = totalDMGTracker[turnEntry];

                const currentYAdjustment = (lineRow * (bufferRange)/ (validTargets + 1)) + 10;

                let yValue = currentYAdjustment;

                if (characters[turnEntry] && currentEntry) {
                    iconStringer += `<image href="/HonkaiSR/${characters[turnEntry].icon}" x="0%" y="${currentYAdjustment - 6}%" width="45" height="45" />`
                }
                else if (graphs.summonCustomImages[turnEntry] && currentEntry) {
                    iconStringer += `<image href="/HonkaiSR/${graphs.summonCustomImages[turnEntry]}" x="0%" y="${currentYAdjustment -6}%" width="45" height="45" />`
                }
                else {
                    lineRow--;
                    continue;
                }

                const totalDMG = currentEntry.totalDealt;
                const totalDMGBuff = currentEntry.totalWithBuff;

                const resultingUptimeRatio = totalDMGBuff / totalDMG;
                
                let xValue1 = 7.5;
                let xValue2 = resultingUptimeRatio * 85 + 7.5;
    
                obscureGraphElementCounterWhoCares++;
                let ID = `graphElement${obscureGraphElementCounterWhoCares}`;
    
                let tooltipStringer = `
                    <div class="buffTooltipHolderbox">
                        <div class="buffNameHeaderRow">${buffToFind}</div>
                        <div class="buffTooltipbuffNameRow">Applied to DMG: ${totalDMGBuff.toLocaleString()}</div>
                        <div class="buffTooltipbuffNameRow">Of Total: ${totalDMG.toLocaleString()}</div>
                        <div class="buffTooltipbuffNameRow">%: ${(100*resultingUptimeRatio).toLocaleString()}%</div>
                    </div>
                    `
        
                tooltipStorage[ID] = tooltipStringer;
    
                const currentString = `<line x1="${xValue1}%" y1="${yValue}%" x2="${xValue2}%" y2="${yValue}%" stroke="${lineColors[lineRow]}" stroke-width="12" opacity="0.9" class="hasHoverTooltip hoverFade" id="${ID}"/>`;
                lineString += currentString;
            }
            
            const graphString = `
                <div id="bulletsDisplayGraphBox" class="graphContainerboxUptime">
                    <svg class="weaponBulletArrayGraphUptime" id="" viewBox="0 0 600 400">
                        <line x1="7.5%" y1="90%" x2="7.5%" y2="10%" stroke="grey" /> <!-- Y-axis -->
                        <line x1="7.5%" y1="90%" x2="92.5%" y2="90%" stroke="grey" /> <!-- X-axis -->
        
                        ${iconStringer}
        
                        <text x="50%" y="7.5%" fill="white" font-size="15" text-anchor="middle">Buff - "${buffToFind}" Uptime by DMG Dealt</text>
        
                        <text x="7.5%" y="97.5%" fill="white" font-size="15" text-anchor="middle">0%</text>
                        <text x="92.5%" y="97.5%" fill="white" font-size="15" text-anchor="middle">100%</text>
                        ${lineString}
                    </svg>
                </div>
                `;

            readSelection("actualGraphHolderbox").innerHTML = graphString;
        }
        else if (buffGraphs.graphBy === "Taken") {
            let totalDMGTracker = {};


            // let hitData = {
            //     scalar: null,
            //     currentMulti:percentInstance,multiOf:null,tags:["True"],element:"True",
            //     DMGTotalEnd,DMGTotalCrit,DMGTotalAVG,DMGOverkill,
            //     enemyIsDead,
            //     playerData: JSON.stringify(sourceTurn),
            //     enemyData: JSON.stringify(targetTurn),
            //     AV:battleData.sumAV
            // }

            // logToBattle(battleData,{logType: "HitEnemy", hitType: "True", target: targetTurn.properName, source:sourceTurn.properName, hitData,enemyIsDead,sourceString});// let hitData = {
            //     scalar: null,
            //     currentMulti:percentInstance,multiOf:null,tags:["True"],element:"True",
            //     DMGTotalEnd,DMGTotalCrit,DMGTotalAVG,DMGOverkill,
            //     enemyIsDead,
            //     playerData: JSON.stringify(sourceTurn),
            //     enemyData: JSON.stringify(targetTurn),
            //     AV:battleData.sumAV
            // }

            // logToBattle(battleData,{logType: "HitEnemy", hitType: "True", target: targetTurn.properName, source:sourceTurn.properName, hitData,enemyIsDead,sourceString});

            for (let entry of log) {
                if (entry.logType === "HitAlly") {
                    const hitData = entry.hitData;
                    const sourceTurn = JSON.parse(hitData.enemyData);//enemy data is the target of the attack, just an old ass naming scheme I had before enemies could attack, should prob change that later but ehhhhhhh, EHHHHH

                    if (sourceTurn.properName.toLowerCase().includes("enemy ")) {continue;}

                    const buffCheck = sourceTurn.buffsObject[buffToFind];
                    // if (!buffCheck) {continue;}
                    // entry.buffName === buffToFind

                    const currentCharacterTracker = totalDMGTracker[sourceTurn.properName] ??= {};

                    currentCharacterTracker.totalDealt = (currentCharacterTracker.totalDealt ?? 0) + hitData.DMGTotalAVG;
                    currentCharacterTracker.totalWithBuff = (currentCharacterTracker.totalWithBuff ?? 0) + (buffCheck ? hitData.DMGTotalAVG : 0);
                }
            }

            for (let charName in totalDMGTracker) {
                const currentSlot = totalDMGTracker[charName];

                if (!currentSlot.totalWithBuff) {delete totalDMGTracker[charName]}
            }




            let obscureGraphElementCounterWhoCares = 0;
            let lineRow = 0;
            let lineColors = graphs.characterColors;
            const turnKeys = Object.keys(turnPoints);
            let validTargets = 0;
            for (let i=turnKeys.length-1;i>=0;i--) {
                let currentKey = turnKeys[i];
                if (currentKey.toLowerCase().includes("enemy")) {
                    turnKeys.push(turnKeys.splice(turnKeys[i])[0]);
                }
                let currentEntry = totalDMGTracker[currentKey];
                if (currentEntry) {validTargets += 1;}
            }

            const turnLength = turnKeys.length;
            const yAdjustmentLines = (100/turnLength) * 0.95;
            let iconStringer = ``;
            const bufferRange = 80;
            const QuantityAdjustment = (bufferRange)/ (turnLength + 1)
            for (let turnEntry of turnKeys) {
                
                
                const characterCheck = characters[turnEntry] || graphs.summonCustomImages[turnEntry];
                if (!characterCheck) {continue}
                lineRow++;
                let currentEntry = totalDMGTracker[turnEntry];

                const currentYAdjustment = (lineRow * (bufferRange)/ (validTargets + 1)) + 10;

                
                let yValue = currentYAdjustment;

                if (characters[turnEntry] && currentEntry) {
                    iconStringer += `<image href="/HonkaiSR/${characters[turnEntry].icon}" x="0%" y="${currentYAdjustment - 6}%" width="45" height="45" />`
                }
                else if (graphs.summonCustomImages[turnEntry] && currentEntry) {
                    iconStringer += `<image href="/HonkaiSR/${graphs.summonCustomImages[turnEntry]}" x="0%" y="${currentYAdjustment -6}%" width="45" height="45" />`
                }
                else {
                    lineRow--;
                    continue;
                }

                const totalDMG = currentEntry.totalDealt;
                const totalDMGBuff = currentEntry.totalWithBuff;

                const resultingUptimeRatio = totalDMGBuff / totalDMG;
                


                let xValue1 = 7.5;
                let xValue2 = resultingUptimeRatio * 85 + 7.5;
    
                obscureGraphElementCounterWhoCares++;
                let ID = `graphElement${obscureGraphElementCounterWhoCares}`;
    
                let tooltipStringer = `
                    <div class="buffTooltipHolderbox">
                        <div class="buffNameHeaderRow">${buffToFind}</div>
                        <div class="buffTooltipbuffNameRow">Held when Taking DMG: ${totalDMGBuff.toLocaleString()}</div>
                        <div class="buffTooltipbuffNameRow">Of Total Taken DMG: ${totalDMG.toLocaleString()}</div>
                        <div class="buffTooltipbuffNameRow">%: ${(100*resultingUptimeRatio).toLocaleString()}%</div>
                    </div>
                    `
        
                tooltipStorage[ID] = tooltipStringer;

                const currentString = `<line x1="${xValue1}%" y1="${yValue}%" x2="${xValue2}%" y2="${yValue}%" stroke="${lineColors[lineRow]}" stroke-width="12" opacity="0.9" class="hasHoverTooltip hoverFade" id="${ID}"/>`;
                lineString += currentString;
            }
            
            const graphString = `
                <div id="bulletsDisplayGraphBox" class="graphContainerboxUptime">
                    <svg class="weaponBulletArrayGraphUptime" id="" viewBox="0 0 600 400">
                        <line x1="7.5%" y1="90%" x2="7.5%" y2="10%" stroke="grey" /> <!-- Y-axis -->
                        <line x1="7.5%" y1="90%" x2="92.5%" y2="90%" stroke="grey" /> <!-- X-axis -->
        
                        ${iconStringer}
        
                        <text x="50%" y="7.5%" fill="white" font-size="15" text-anchor="middle">Buff - "${buffToFind}" Uptime by %DMG Received</text>
        
                        <text x="7.5%" y="97.5%" fill="white" font-size="15" text-anchor="middle">0%</text>
                        <text x="92.5%" y="97.5%" fill="white" font-size="15" text-anchor="middle">100%</text>
                        ${lineString}
                    </svg>
                </div>
                `;
            readSelection("actualGraphHolderbox").innerHTML = graphString;
        }
    
        tooltips.loadTooltips();
    },
    createSummaryDataCharts(battleData) {
        graphs.clearGraphRelatedTooltips();
        let log = battleData.battleLog;

        const mainBox = readSelection("actualGraphHolderbox");
        mainBox.innerHTML = "";


        // mainBox.innerHTML += `<div class="actionDetailHeaderRow"><span class="detailHeaderName">Summary Statistics</span></div>`;

        let actionTotals = 0;
        let turnTotals = 0;
        const battleTotalsObject = battleData.battleTotal;
        // battleTotal: {
        //     DMG: {},
        //     Turns: {},
        //     Actions: {},
        // },
        for (let entry in battleTotalsObject.Actions) {
            if (entry.toLowerCase().includes("enemy")) {continue;}
            let currentChar = battleTotalsObject.Actions[entry];

            for (let subEntry in currentChar) {
                let newEntry = currentChar[subEntry];
                actionTotals += newEntry;
            }
        }
        for (let entry in battleTotalsObject.Turns) {
            if (entry.toLowerCase().includes("enemy")) {continue;}
            let currentChar = battleTotalsObject.Turns[entry];

            turnTotals += currentChar;
            // for (let subEntry in currentChar) {
            //     let newEntry = currentChar[subEntry];
            //     turnTotals += newEntry;
            // }
        }

        let DMGTotals = {};
        for (let entry in battleTotalsObject.DMG) {
            if (entry.toLowerCase().includes("enemy")) {continue;}
            let currentChar = battleTotalsObject.DMG[entry];

            if (!DMGTotals[entry]) {DMGTotals[entry] = 0;};

            for (let subEntry in currentChar) {
                let newEntry = currentChar[subEntry];
                // actionTotals += newEntry;
                DMGTotals[entry] += newEntry
            }
        }

        // let lineColors = ["red","orange","Green","Lightblue"];
        let lineColors = graphs.characterColors;

        // battleTotal: {
        //     DMG: {},
        //     DMGOverkill: {},
        //     Turns: {},
        //     Actions: {},
        //     SP: {},
        //     Healing: {},
        //     OverHeal: {},
        //     ShieldAmount: {},
        //     Shields: {},
        //     Overshield: {}
        // },

        const characterBarsOpen = `<div class="actionDetailBodyRowSummaryDMGBoxHolder">`;
        const divClose = `</div>`;
        let characterBarsHolder = "";

        let currentCharacter = 0;
        let sourcePoints = {};


        const characterObject = globalRecords.character;
        const turnOrderSet = [
            characterObject.char1.name,
            ...(characters[characterObject.char1.name].hasRemembranceSummon ? [characters[characterObject.char1.name].summonName] : []),

            characterObject.char2.name,
            ...(characters[characterObject.char2.name].hasRemembranceSummon ? [characters[characterObject.char2.name].summonName] : []),

            characterObject.char3.name,
            ...(characters[characterObject.char3.name].hasRemembranceSummon ? [characters[characterObject.char3.name].summonName] : []),

            characterObject.char4.name,
            ...(characters[characterObject.char4.name].hasRemembranceSummon ? [characters[characterObject.char4.name].summonName] : []),
        ]

        const dmgCheckRef = battleTotalsObject.DMG;
        for (let charEntry of turnOrderSet) {
            // console.log(charEntry)
            const didDMG = dmgCheckRef[charEntry];
            if (!didDMG) {continue;}
            currentCharacter += 1
            sourcePoints[charEntry] = {
                points: [],
                color: lineColors[currentCharacter],
                total: 0,
            }
            // let currentName = battleData.characterObject[charEntry].name;
            if (charEntry.toLowerCase().includes("enemy")) {continue;}

            let currentDMG = DMGTotals[charEntry];
            if (!currentDMG) {continue;}
            let currentPercent = currentDMG/battleData.battleDamageSUM * 100;
            // console.log(currentDMG,currentName)
            characterBarsHolder += `
            <div class="actionDetailBodyRowSummaryDMG">
                <div class="rowSummaryDMGBarDynamic" style="width:${currentPercent}%;background-color: ${lineColors[currentCharacter]}"></div>
                <div class="rowSummaryDMGNameAndPercent">${charEntry}: ${currentDMG.toLocaleString()} (${currentPercent.toLocaleString()}%)</div>
            </div>
            `;
        }

        // mainBox.innerHTML += characterBarsOpen + characterBarsHolder + divClose;


        // <div class="buffNameHeaderRow">DMG Overview</div>
        // background-color: #ffffff1A
        

        

                // <div class="hsrTeamIconBar">
                //     <!-- <div class="smolLineDividerTopper"></div> -->
                //     <div class="teamLineBoxHolder" id="teamBarHolderBox">
                //         <img src="" class="teamBarImgRounded clickable" id="teamBarChar1IMG" onclick="userTriggers.updateCharacterSlotSelected(1)"/>
                //         <img src="" class="teamBarImgRounded clickable" id="teamBarChar2IMG" onclick="userTriggers.updateCharacterSlotSelected(2)"/>
                //         <img src="" class="teamBarImgRounded clickable" id="teamBarChar3IMG" onclick="userTriggers.updateCharacterSlotSelected(3)"/>
                //         <img src="" class="teamBarImgRounded clickable" id="teamBarChar4IMG" onclick="userTriggers.updateCharacterSlotSelected(4)"/>
                //     </div>
                // </div>

        // let hitData = {
        //     scalar: ATKObject.scalar,
        //     currentSplit,currentMulti,multiOf,tags,
        //     DMGTotalEnd,DMGTotalCrit,DMGTotalAVG,
        //     playerData: JSON.stringify(currentTurn),
        //     enemyData: JSON.stringify(enemyTurn),
            // AV:battleData.sumAV,
        // }
        // battleData.battleLog.push({logType: "HitEnemy", hitType: hitDisplay[hitType], target: enemyTurn.properName, source:charName, hitData});

        const viewWidth = 600;
        const viewHeight = 300;
        let xCushionGraph = 2.5;
        let xWidthFull = 100 - xCushionGraph*2;
        let yCushionGraph = 10;
        let yDepthFull = 100 - yCushionGraph*2;

        let highestSumDMG = 0;
        let highestName = "";
        for (let entry in DMGTotals) {
            let currentEntry = DMGTotals[entry];
            if (currentEntry > highestSumDMG) {
                highestSumDMG = currentEntry;
                highestName = entry;
            }
        }
        // console.log(highestName,highestSumDMG)
        // console.log(highestSumDMG)

        let xSpread = battleData.sumAV;
        let ySpread = highestSumDMG;

        let xBuffer = 0.05 * xSpread;
        let yBuffer = 0.05 * ySpread;

        let xMin = 0;
        let xMax = xSpread;//xSpread + xBuffer;

        let yMin = 0;
        let yMax = ySpread;//ySpread + yBuffer

        let polyStringer = "";
        let dmgPoints = [];
        
        let dmgSUM = 0;
        

        for (let entry of log) {

            if (entry.logType === "HitEnemy") {
                let hitData = entry.hitData;
                let source = entry.source;

                sourcePoints[source].total += hitData.DMGTotalAVG;

                let currentDMG = sourcePoints[source].total;//hitData.DMGTotalAVG + dmgSUM;


                let currentAV = hitData.AV;

                let xNew = (currentAV - xMin)/xSpread * xWidthFull + xCushionGraph;
                // let yNew = ((1 - ((currentDMG - yMin)/ySpread) * yDepthFull - (yCushionGraph/100))*100);
                let yNew = 1 - ((currentDMG - yMin)/ySpread * yDepthFull - yDepthFull - (yCushionGraph - 1));


                // console.log(xNew,yNew,currentDMG)
                const point = {x: xNew,y: yNew};
                dmgPoints.push(point);

                // sourcePoints[source] ??= {};
                // sourcePoints[source].points = []

                // sourcePoints[charEntry] = {
                //     points: [],
                //     color: lineColors[currentCharacter]
                // }
                sourcePoints[source].points.push(point)
                dmgSUM += hitData.DMGTotalAVG;
            }
        }

        let sumLineStringer = "";

        for (let entry in sourcePoints) {
            if (entry.toLowerCase().includes("enemy")) {continue;}
            let currentEntry = sourcePoints[entry];
            let currentPoints = currentEntry.points;
            let currentColor = currentEntry.color;
            // console.log(entry)

            let lineStringer = `<path d="M ${viewWidth * xCushionGraph/100},${viewHeight * (1 - yCushionGraph/100)} `;
            for (let i=0;i<currentPoints.length-1;i++) {
                let currentPoint = currentPoints[i];
                let nextPoint = currentPoints[i+1];

                const midX = (currentPoint.x + nextPoint.x) / 2;
                const midY = (currentPoint.y + nextPoint.y) / 2;
                if (i === currentPoints.length-2) {
                    lineStringer += `Q ${viewWidth * currentPoint.x/100},${viewHeight * currentPoint.y/100} ${viewWidth * nextPoint.x/100},${viewHeight * nextPoint.y/100} `;
                }
                else {
                    lineStringer += `Q ${viewWidth * currentPoint.x/100},${viewHeight * currentPoint.y/100} ${viewWidth * midX/100},${viewHeight * midY/100} `;
                }
            }
            lineStringer += `
            " 
            fill="none" stroke="${currentColor}" stroke-width="2"/>`;//fill="red"

            sumLineStringer += lineStringer;
        }



        // <polyline points="20,80 60,20 100,80 140,20 180,80" fill="none" stroke="blue" stroke-width="3" />

        // <image href="/HonkaiSR/${characters[battleData.characterObject.char1.name].icon}" x="0%" y="${((20 * 1)/100) * 80 + 4}%" width="45" height="45" />
        // <image href="/HonkaiSR/${characters[battleData.characterObject.char2.name].icon}" x="0%" y="${((20 * 2)/100) * 80 + 4}%" width="45" height="45" />
        // <image href="/HonkaiSR/${characters[battleData.characterObject.char3.name].icon}" x="0%" y="${((20 * 3)/100) * 80 + 4}%" width="45" height="45" />
        // <image href="/HonkaiSR/${characters[battleData.characterObject.char4.name].icon}" x="0%" y="${((20 * 4)/100) * 80 + 4}%" width="45" height="45" />

        //20,80 60,20 100,80 140,20 180,80
        // ${lineStringer}
        const graphString = `
            <div id="bulletsDisplayGraphBox" class="graphContainerbox">
                <svg class="weaponBulletArrayGraph" id="" viewBox="0 0 ${viewWidth} ${viewHeight}">
                    <line x1="${xCushionGraph}%" y1="${100-yCushionGraph}%" x2="${xCushionGraph}%" y2="${yCushionGraph}%" stroke="grey" stroke-width="3"/> <!-- Y-axis -->
                    <line x1="${xCushionGraph}%" y1="${100-yCushionGraph}%" x2="${100-xCushionGraph}%" y2="${100-yCushionGraph}%" stroke="grey" stroke-width="3"/> <!-- X-axis -->
    
                    <text x="50%" y="7.5%" fill="white" font-size="15" text-anchor="middle">Sum DMG by AV</text>
                    ${sumLineStringer}
    
                    <text x="${xCushionGraph}%" y="97.5%" fill="white" font-size="15" text-anchor="start">0 AV</text>
                    <text x="${100-xCushionGraph}%" y="97.5%" fill="white" font-size="15" text-anchor="end">${battleData.sumAV.toFixed(2)} AV</text>
                </svg>
            </div>
            `;//text-anchor="end" //start middle end
            // <text x="50%" y="97.5%" fill="white" font-size="15" text-anchor="middle">More words</text>
            // <text x="-2.5%" y="10%" fill="white" font-size="15" text-anchor="middle" transform="rotate(-90, 50, 50)">Other words</text>
            // <line x1="7.5%" y1="90%" x2="92.5%" y2="90%" stroke="black" /> <!-- X-axis -->
    
        // mainBox.innerHTML += graphString;


        const dmgTypeColors = graphs.dmgTypeColors;
        // battleTotalsObject

        const dmgTotals = battleTotalsObject.DMG;
        const dmgOverkillTotals = battleTotalsObject.DMGOverkill;
        let dmgDisplayString = `<details class="rotationsPermaConditionsExpand">
        <summary class="actionDetailBodyDetailExpandHeaderBackground clickable">DAMAGE</summary>`;
        let overkillDisplayString = `<details class="rotationsPermaConditionsExpand">
        <summary class="actionDetailBodyDetailExpandHeaderBackground clickable">OVERKILL</summary>`;

        for (let charEntry in dmgTotals) {
            const charDMG = dmgTotals[charEntry];
            const charOverkill = dmgOverkillTotals[charEntry];

            let entryLineStringer = "";
            let totalCharacterDMG = 0;
            for (let dmgTypeEntry in charDMG) {
                totalCharacterDMG += charDMG[dmgTypeEntry];
            }

            let entryLineStringerOverkill = "";
            let totalCharacterOverkill = 0;
            for (let dmgTypeEntry in charOverkill) {
                totalCharacterOverkill += charOverkill[dmgTypeEntry];
            }


            const characterIconPath = "/HonkaiSR/" + (characters[charEntry] ? characters[charEntry].preview : (graphs.summonCustomImages[charEntry] ? graphs.summonCustomImages[charEntry] : graphs.enemyCustomImages["default"]))

            for (let dmgTypeEntry in charDMG) {
                const currentDMG = charDMG[dmgTypeEntry];
                const currentPercent = 100 * currentDMG/totalCharacterDMG

                entryLineStringer += `
                <div class="actionDetailBodyRowSummaryDMGBoxHolderACTIONBAR">
                    <div class="rowSummaryDMGBarDynamicACTIONBAR" style="width:${currentPercent}%;background-color: ${dmgTypeColors[dmgTypeEntry]}"></div>
                    <div class="rowSummaryDMGNameAndPercentACTIONBAR">${dmgTypeEntry}: ${currentDMG.toLocaleString()} (${currentPercent.toLocaleString()}%)</div>
                </div>
                `;
            }

            for (let dmgTypeEntry in charOverkill) {
                const currentDMG = charOverkill[dmgTypeEntry];
                const currentPercent = 100 * currentDMG/totalCharacterDMG

                entryLineStringerOverkill += `
                <div class="actionDetailBodyRowSummaryDMGBoxHolderACTIONBAR">
                    <div class="rowSummaryDMGBarDynamicACTIONBAR" style="width:${currentPercent}%;background-color: ${dmgTypeColors[dmgTypeEntry]}"></div>
                    <div class="rowSummaryDMGNameAndPercentACTIONBAR">${dmgTypeEntry}: ${currentDMG.toLocaleString()} (${currentPercent.toLocaleString()}%)</div>
                </div>
                `;
            }


            let currentCharacterString = `<div class="summaryCharacterBreakdownPerCharBox">
                <div class="summaryCharacterBreakdownInnerRowBox">
                    <div class="summaryCharacterBreakdownInnerRowHeader">
                        <div class="rotationsCharacterTargetPreviewBox">
                            <img src="${characterIconPath}" class="rotationsCharacterTargetPreviewBoxIcon">
                        </div>
                        ${charEntry}
                    </div>
                    
                    <div class="summaryCharacterBreakdownInnerBarBoxHolder">
                        ${entryLineStringer}
                    </div>
                </div>
            `;

            let currentCharacterStringOverkill = `<div class="summaryCharacterBreakdownPerCharBox">
                <div class="summaryCharacterBreakdownInnerRowBox">
                    <div class="summaryCharacterBreakdownInnerRowHeader">
                        <div class="rotationsCharacterTargetPreviewBox">
                            <img src="${characterIconPath}" class="rotationsCharacterTargetPreviewBoxIcon">
                        </div>
                        ${charEntry}
                    </div>
                    
                    <div class="summaryCharacterBreakdownInnerBarBoxHolder">
                        ${entryLineStringerOverkill}
                    </div>
                </div>
            `;



            currentCharacterString += "</div>";

            dmgDisplayString += currentCharacterString;
            overkillDisplayString += currentCharacterStringOverkill;
        }
        dmgDisplayString += "</details>";
        overkillDisplayString += "</details>";













        const healTotals = battleTotalsObject.Healing;
        const overhealTotals = battleTotalsObject.OverHeal;
        let healDisplayString = `<details class="rotationsPermaConditionsExpand">
        <summary class="actionDetailBodyDetailExpandHeaderBackground clickable">HEALING</summary>`;
        let overhealDisplayString = `<details class="rotationsPermaConditionsExpand">
        <summary class="actionDetailBodyDetailExpandHeaderBackground clickable">OVER-HEALING</summary>`;

        for (let charEntry in healTotals) {
            const charDMG = healTotals[charEntry];
            const charOverkill = overhealTotals[charEntry];

            let entryLineStringer = "";
            let totalCharacterDMG = 0;
            for (let dmgTypeEntry in charDMG) {
                totalCharacterDMG += charDMG[dmgTypeEntry];
            }

            let entryLineStringerOverkill = "";
            let totalCharacterOverkill = 0;
            for (let dmgTypeEntry in charOverkill) {
                totalCharacterOverkill += charOverkill[dmgTypeEntry];
            }


            const characterIconPath = "/HonkaiSR/" + (characters[charEntry] ? characters[charEntry].preview : (graphs.summonCustomImages[charEntry] ? graphs.summonCustomImages[charEntry] : graphs.enemyCustomImages["default"]))

            for (let dmgTypeEntry in charDMG) {
                const currentDMG = charDMG[dmgTypeEntry];
                const currentPercent = 100 * currentDMG/totalCharacterDMG

                entryLineStringer += `
                <div class="actionDetailBodyRowSummaryDMGBoxHolderACTIONBAR">
                    <div class="rowSummaryDMGBarDynamicACTIONBAR" style="width:${currentPercent}%;background-color: ${dmgTypeColors[dmgTypeEntry]}"></div>
                    <div class="rowSummaryDMGNameAndPercentACTIONBAR">${dmgTypeEntry}: ${currentDMG.toLocaleString()} (${currentPercent.toLocaleString()}%)</div>
                </div>
                `;
            }

            for (let dmgTypeEntry in charOverkill) {
                const currentDMG = charOverkill[dmgTypeEntry];
                const currentPercent = 100 * currentDMG/totalCharacterDMG

                entryLineStringerOverkill += `
                <div class="actionDetailBodyRowSummaryDMGBoxHolderACTIONBAR">
                    <div class="rowSummaryDMGBarDynamicACTIONBAR" style="width:${currentPercent}%;background-color: ${dmgTypeColors[dmgTypeEntry]}"></div>
                    <div class="rowSummaryDMGNameAndPercentACTIONBAR">${dmgTypeEntry}: ${currentDMG.toLocaleString()} (${currentPercent.toLocaleString()}%)</div>
                </div>
                `;
            }


            let currentCharacterString = `<div class="summaryCharacterBreakdownPerCharBox">
                <div class="summaryCharacterBreakdownInnerRowBox">
                    <div class="summaryCharacterBreakdownInnerRowHeader">
                        <div class="rotationsCharacterTargetPreviewBox">
                            <img src="${characterIconPath}" class="rotationsCharacterTargetPreviewBoxIcon">
                        </div>
                        ${charEntry}
                    </div>
                    
                    <div class="summaryCharacterBreakdownInnerBarBoxHolder">
                        ${entryLineStringer}
                    </div>
                </div>
            `;

            let currentCharacterStringOverkill = `<div class="summaryCharacterBreakdownPerCharBox">
                <div class="summaryCharacterBreakdownInnerRowBox">
                    <div class="summaryCharacterBreakdownInnerRowHeader">
                        <div class="rotationsCharacterTargetPreviewBox">
                            <img src="${characterIconPath}" class="rotationsCharacterTargetPreviewBoxIcon">
                        </div>
                        ${charEntry}
                    </div>
                    
                    <div class="summaryCharacterBreakdownInnerBarBoxHolder">
                        ${entryLineStringerOverkill}
                    </div>
                </div>
            `;



            currentCharacterString += "</div>";

            healDisplayString += currentCharacterString;
            overhealDisplayString += currentCharacterStringOverkill;
        }
        healDisplayString += "</details>";
        overhealDisplayString += "</details>";






        const shieldTotals = battleTotalsObject.ShieldAmount;
        const overshieldTotals = battleTotalsObject.Overshield;
        let shieldDisplayString = `<details class="rotationsPermaConditionsExpand">
        <summary class="actionDetailBodyDetailExpandHeaderBackground clickable">SHIELD</summary>`;
        let overshieldDisplayString = `<details class="rotationsPermaConditionsExpand">
        <summary class="actionDetailBodyDetailExpandHeaderBackground clickable">OVER-SHIELD</summary>`;

        for (let charEntry in shieldTotals) {
            const charDMG = shieldTotals[charEntry];
            const charOverkill = overshieldTotals[charEntry];

            let entryLineStringer = "";
            let totalCharacterDMG = 0;
            for (let dmgTypeEntry in charDMG) {
                totalCharacterDMG += charDMG[dmgTypeEntry];
            }

            let entryLineStringerOverkill = "";
            let totalCharacterOverkill = 0;
            for (let dmgTypeEntry in charOverkill) {
                totalCharacterOverkill += charOverkill[dmgTypeEntry];
            }


            const characterIconPath = "/HonkaiSR/" + (characters[charEntry] ? characters[charEntry].preview : (graphs.summonCustomImages[charEntry] ? graphs.summonCustomImages[charEntry] : graphs.enemyCustomImages["default"]))

            for (let dmgTypeEntry in charDMG) {
                const currentDMG = charDMG[dmgTypeEntry];
                const currentPercent = 100 * currentDMG/totalCharacterDMG

                entryLineStringer += `
                <div class="actionDetailBodyRowSummaryDMGBoxHolderACTIONBAR">
                    <div class="rowSummaryDMGBarDynamicACTIONBAR" style="width:${currentPercent}%;background-color: ${dmgTypeColors[dmgTypeEntry]}"></div>
                    <div class="rowSummaryDMGNameAndPercentACTIONBAR">${dmgTypeEntry}: ${currentDMG.toLocaleString()} (${currentPercent.toLocaleString()}%)</div>
                </div>
                `;
            }

            for (let dmgTypeEntry in charOverkill) {
                const currentDMG = charOverkill[dmgTypeEntry];
                const currentPercent = 100 * currentDMG/totalCharacterDMG

                entryLineStringerOverkill += `
                <div class="actionDetailBodyRowSummaryDMGBoxHolderACTIONBAR">
                    <div class="rowSummaryDMGBarDynamicACTIONBAR" style="width:${currentPercent}%;background-color: ${dmgTypeColors[dmgTypeEntry]}"></div>
                    <div class="rowSummaryDMGNameAndPercentACTIONBAR">${dmgTypeEntry}: ${currentDMG.toLocaleString()} (${currentPercent.toLocaleString()}%)</div>
                </div>
                `;
            }


            let currentCharacterString = `<div class="summaryCharacterBreakdownPerCharBox">
                <div class="summaryCharacterBreakdownInnerRowBox">
                    <div class="summaryCharacterBreakdownInnerRowHeader">
                        <div class="rotationsCharacterTargetPreviewBox">
                            <img src="${characterIconPath}" class="rotationsCharacterTargetPreviewBoxIcon">
                        </div>
                        ${charEntry}
                    </div>
                    
                    <div class="summaryCharacterBreakdownInnerBarBoxHolder">
                        ${entryLineStringer}
                    </div>
                </div>
            `;

            let currentCharacterStringOverkill = `<div class="summaryCharacterBreakdownPerCharBox">
                <div class="summaryCharacterBreakdownInnerRowBox">
                    <div class="summaryCharacterBreakdownInnerRowHeader">
                        <div class="rotationsCharacterTargetPreviewBox">
                            <img src="${characterIconPath}" class="rotationsCharacterTargetPreviewBoxIcon">
                        </div>
                        ${charEntry}
                    </div>
                    
                    <div class="summaryCharacterBreakdownInnerBarBoxHolder">
                        ${entryLineStringerOverkill}
                    </div>
                </div>
            `;



            currentCharacterString += "</div>";

            shieldDisplayString += currentCharacterString;
            overshieldDisplayString += currentCharacterStringOverkill;
        }
        shieldDisplayString += "</details>";
        overshieldDisplayString += "</details>";












        const actionCountTotals = battleTotalsObject.Actions;
        let actionCountDisplayString = `<details class="rotationsPermaConditionsExpand">
        <summary class="actionDetailBodyDetailExpandHeaderBackground clickable">ACTION COUNTS</summary>`;

        for (let charEntry in actionCountTotals) {
            const charActions = actionCountTotals[charEntry];

            let entryLineStringer = "";
            let totalCharacterActions = 0;
            for (let dmgTypeEntry in charActions) {
                totalCharacterActions += charActions[dmgTypeEntry];
            }

            const characterIconPath = "/HonkaiSR/" + (characters[charEntry] ? characters[charEntry].preview : (graphs.summonCustomImages[charEntry] ? graphs.summonCustomImages[charEntry] : graphs.enemyCustomImages["default"]))

            for (let actionCountEntry in charActions) {
                const currentActionCount = charActions[actionCountEntry];
                const currentPercent = 100 * currentActionCount/totalCharacterActions

                entryLineStringer += `
                <div class="actionDetailBodyRowSummaryDMGBoxHolderACTIONBAR">
                    <div class="rowSummaryDMGBarDynamicACTIONBAR" style="width:${currentPercent}%;background-color: ${dmgTypeColors[actionCountEntry]}"></div>
                    <div class="rowSummaryDMGNameAndPercentACTIONBAR">${actionCountEntry}: ${currentActionCount.toLocaleString()} (${currentPercent.toLocaleString()}%)</div>
                </div>
                `;
            }

            let currentCharacterString = `<div class="summaryCharacterBreakdownPerCharBox">
                <div class="summaryCharacterBreakdownInnerRowBox">
                    <div class="summaryCharacterBreakdownInnerRowHeader">
                        <div class="rotationsCharacterTargetPreviewBox">
                            <img src="${characterIconPath}" class="rotationsCharacterTargetPreviewBoxIcon">
                        </div>
                        ${charEntry}
                    </div>
                    
                    <div class="summaryCharacterBreakdownInnerBarBoxHolder">
                        ${entryLineStringer}
                    </div>
                </div>
            `;

            currentCharacterString += "</div>";

            actionCountDisplayString += currentCharacterString;
        }
        actionCountDisplayString += "</details>";

        // {
        //     "DMG": {
        //         "Dan Heng • Permansor Terrae": {
        //             "Basic ATK": 5748.781439919443,
        //             "Break": 14381.358615987096,
        //             "Ultimate": 53714.75231763306,
        //             "Talent": 27257.05988953528,
        //             "DOT": 10652.858234064515
        //         },
        //         "Saber": {
        //             "Skill": 2968232.7335577784,
        //             "Ultimate": 8029300.680815246,
        //             "Additional DMG": 532633.6505871831,
        //             "Basic ATK": 826224.3774977403,
        //             "Break": 6038.101665897741
        //         },
        //         "Robin": {
        //             "Additional DMG": 110034.31435083972,
        //             "Basic ATK": 3515.2721676503543
        //         }
        //     },
        //     "DMGOverkill": {
        //         "Dan Heng • Permansor Terrae": {
        //             "Basic ATK": 0,
        //             "Break": 0,
        //             "Ultimate": 0,
        //             "Talent": 0,
        //             "DOT": 0
        //         },
        //         "Saber": {
        //             "Skill": 0,
        //             "Ultimate": 0,
        //             "Additional DMG": 0,
        //             "Basic ATK": 0,
        //             "Break": 0
        //         },
        //         "Robin": {
        //             "Additional DMG": 0,
        //             "Basic ATK": 0
        //         }
        //     },
        //     "Turns": {
        //         "Robin": 2,
        //         "Dan Heng • Permansor Terrae": 4,
        //         "Sunday": 4,
        //         "Saber": 6,
        //         "Enemy 1: Gunner Guy": 1,
        //         "Enemy 2: Quantum Dog": 3,
        //         "Enemy 3: Gunner Guy": 1,
        //         "Souldragon": 8
        //     },
        //     "Actions": {
        //         "Saber": {
        //             "Technique": 1,
        //             "Skill": 4,
        //             "Ultimate": 3,
        //             "Additional DMG": 16,
        //             "Basic ATK": 2,
        //             "Break": 1
        //         },
        //         "Sunday": {
        //             "Technique": 1,
        //             "Skill": 4,
        //             "Ultimate": 2
        //         },
        //         "Dan Heng • Permansor Terrae": {
        //             "Skill": 1,
        //             "Technique": 1,
        //             "Basic ATK": 4,
        //             "Break": 3,
        //             "Ultimate": 2,
        //             "Talent": 4,
        //             "DOT": 2
        //         },
        //         "Robin": {
        //             "Technique": 1,
        //             "Skill": 1,
        //             "Ultimate": 1,
        //             "Additional DMG": 9,
        //             "Basic ATK": 1
        //         }
        //     },
        //     "SP": {
        //         "Dan Heng • Permansor Terrae": 3,
        //         "Robin": -1,
        //         "Sunday": 1,
        //         "Saber": -1
        //     },
        //     "Healing": {},
        //     "OverHeal": {},
        //     "ShieldAmount": {
        //         "Dan Heng • Permansor Terrae": {
        //             "Skill": 42303.69889920688
        //         }
        //     },
        //     "Shields": {
        //         "Dan Heng • Permansor Terrae": {
        //             "Skill": 52
        //         }
        //     },
        //     "Overshield": {
        //         "Dan Heng • Permansor Terrae": {
        //             "Skill": 26906.9689744325
        //         }
        //     }
        // }









































        mainBox.innerHTML += `
                <div class="totalHealingBoxBreakdownRows" style="background-color: #ffffff1A">
                    <div class="totalHealingBoxHalfBreakdownRows hasHoverTooltip">
                        <div class="totalHealingHeader">AV</div>
                        <div class="totalHealingValueBoss">${battleData.sumAV.toLocaleString()}</div>
                    </div>
                    <div class="totalHealingBoxHalfBreakdownRows hasHoverTooltip">
                        <div class="totalHealingHeader">DMG/AV</div>
                        <div class="totalHealingValueBoss">${(battleData.battleDamageSUM/battleData.sumAV).toLocaleString()}</div>
                    </div>
                    <div class="totalHealingBoxHalfBreakdownRows hasHoverTooltip">
                        <div class="totalHealingHeader">Actions</div>
                        <div class="totalHealingValueBoss">${actionTotals.toLocaleString()}</div>
                    </div>
                    <div class="totalHealingBoxHalfBreakdownRows hasHoverTooltip">
                        <div class="totalHealingHeader">Turns</div>
                        <div class="totalHealingValueBoss">${turnTotals.toLocaleString()}</div>
                    </div>
                </div>

                <div class="actionSummaryMainHeaderRowHolder">
                    ${characterBarsOpen 
                        + `<div class="totalHealingBoxHalfBreakdownRowsMAINDMGBOX hasHoverTooltip">
                                <div class="totalHealingHeaderBigPPDMG">Total DMG</div>
                                <div class="totalHealingValueBossBigPPDMG">${battleData.battleDamageSUM.toLocaleString()}</div>
                            </div>`
                        + characterBarsHolder 
                        + divClose}
                </div>

                ${graphString +
                dmgDisplayString +
                overkillDisplayString +
                actionCountDisplayString +
                healDisplayString + overhealDisplayString +
                shieldDisplayString + overshieldDisplayString}
                `;

        // ${bulletsArray.length<=1 ? "" : lineString}
        // ${bulletsArray.length<=1 ? "" : pointString}
    
        tooltips.loadTooltips();
    },

    createSummarySPCharts(battleData) {
        // tooltipStorage.graphTooltips = {};
        // const battleData = globalRecords.battleData;
        graphs.clearGraphRelatedTooltips();



        let log = battleData.battleLog;
        let lastAV = null;
        for (let i=log.length-1;i>=0;i--) {
            let currentEntry = log[i];
            if (currentEntry.AV) {lastAV = currentEntry.AV;break;}
        }
    
        let lineString = "";
        let pointString = "";

        let mainSPStringHolder = "";
    
        // battleData.characterObject.char1.name;
        const characterObject = globalRecords.character;
        let turnPoints = {
            [characterObject.char1.name]: {
                points: [{points: 0, AV: 0, totalCost: 0}],
                spent: 0,
                gained: 0,
            },
            // ...(characters[characterObject.char1.name].hasRemembranceSummon ? {[characters[characterObject.char1.name].summonName]: []} : {}),

            [characterObject.char2.name]: {
                points: [{points: 0, AV: 0, totalCost: 0}],
                spent: 0,
                gained: 0,
            },
            // ...(characters[characterObject.char2.name].hasRemembranceSummon ? {[characters[characterObject.char2.name].summonName]: []} : {}),

            [characterObject.char3.name]: {
                points: [{points: 0, AV: 0, totalCost: 0}],
                spent: 0,
                gained: 0,
            },
            // ...(characters[characterObject.char3.name].hasRemembranceSummon ? {[characters[characterObject.char3.name].summonName]: []} : {}),

            [characterObject.char4.name]: {
                points: [{points: 0, AV: 0, totalCost: 0}],
                spent: 0,
                gained: 0,
            },
            // ...(characters[characterObject.char4.name].hasRemembranceSummon ? {[characters[characterObject.char4.name].summonName]: []} : {}),
        }
    

        // logToBattle(battleData,{logType: "SkillPointChange", cost, oldSP, newSP, actualGain, maximum, AV:battleData.sumAV, source:sourceName, sourceName:generalInfo.sourceName});

        let skillPointTotals = [
            {points: 3, AV: 0}
        ];

        let SPMax = 0;
        let teamSPSpent = 0;
        let teamSPGained = 0;
        for (let entry of log) {
            if (entry.logType === "SkillPointChange") {
                let charName = entry.source;


                const currentCharEntry = turnPoints[charName] ??= {
                    points: [{points: 0, AV: 0, totalCost: 0}],
                    spent: 0,
                    gained: 0,

                }
                
                const pointDiff = entry.actualGain;
                const AV = entry.AV;

                //CHARACTER SPECIFIC TRACKING
                // const pointsLength = currentCharEntry.points.length;
                // const lastPoints = pointsLength ? currentCharEntry.points[pointsLength-1] : null;
                currentCharEntry.points.push({points: pointDiff, AV,totalCost: entry.cost})
                if (pointDiff > 0) {
                    currentCharEntry.gained += pointDiff;
                    teamSPGained += pointDiff;
                }
                else if (pointDiff < 0) {
                    currentCharEntry.spent += pointDiff;
                    teamSPSpent += pointDiff;
                }



                //TEAMWIDE TRACKING
                if (!SPMax) {SPMax = entry.maximum;}
                // const lastSkillTotalEntry = skillPointTotals[skillPointTotals.length-1];
                skillPointTotals.push({
                    points: entry.newSP, 
                    actualGain: pointDiff,
                    AV,
                    totalCost: entry.cost,
                    charName,
                    sourceName: entry.sourceName
                });
            }
        }





        let characterBarsHolder = "";
        let obscureGraphElementCounterWhoCares = 0;





        // const spChartPoints = currentEntry.points;
        const viewWidth = 1000;
        const viewHeight = 100;
        let xCushionGraph = 2.5;
        let xWidthFull = 100 - xCushionGraph*2;
        let yCushionGraph = 8;
        let yDepthFull = 100 - yCushionGraph*2;

        let xSpread = skillPointTotals.length - 1;
        let ySpread = SPMax;

        


        let xMin = 0;
        // let xMax = xSpread;//xSpread + xBuffer;
        let yMin = 0;
        // let yMax = ySpread;//ySpread + yBuffer

        let entryCounter = 0;
        let pointsString = "";
        for (let i=0;i<skillPointTotals.length;i++) {
            const currentEntry = skillPointTotals[i];
            const nextEntry = i < skillPointTotals.length - 1 ? skillPointTotals[i+1] : null;


            // {
            //     points: entry.newSP, 
            //     actualGain: pointDiff,
            //     AV,
            //     totalCost: entry.cost,
            // }

            
            const currentPoints = currentEntry.points;
            const currentAction = entryCounter;
            const currentAV = currentEntry.AV;
            entryCounter++;

            obscureGraphElementCounterWhoCares++;
            let ID = `graphElement${obscureGraphElementCounterWhoCares}`;


            let xNew = (currentAction - xMin)/xSpread * xWidthFull + xCushionGraph;
            let yNew = 1 - ((currentPoints - yMin)/ySpread * yDepthFull - yDepthFull - (yCushionGraph - 1));

            currentEntry.x = xNew;
            currentEntry.y = yNew;
            // entry.tooltipID = ID;


            pointsString += `<circle cx="${xNew}%" cy="${yNew}%" r="5" fill="#6e2020" opacity="1" id="${ID}" class="hasHoverTooltip clickable"/>`;

            
            let tooltipStringer = `
            <div class="buffTooltipHolderbox">
                <div class="buffNameHeaderRow">${currentPoints} - ${(currentEntry.charName) ?? "Battle Start Amount"}</div>
                <div class="buffTooltipbuffNameRow">Cause: ${currentEntry.sourceName}</div>


                <div class="buffTooltipbuffNameRow">AV: ${currentAV.toLocaleString()}</div>
                <div class="buffTooltipbuffNameRow">Actual SP: ${(currentEntry.totalCost ?? 0).toLocaleString()}</div>
                <div class="buffTooltipbuffNameRow">Resulting SP: ${(currentEntry.actualGain ?? 0).toLocaleString()}</div>
                <div class="buffTooltipbuffNameRow">If Actual SP is not equal to Resulting SP, that means the SP gain was limited by your max SP.</div>
            </div>
            `;
            tooltipStorage[ID] = tooltipStringer;
        }

        let sumLineStringer = "";


        const startingPointY = 1 - ((3 - yMin)/ySpread * yDepthFull - yDepthFull - (yCushionGraph - 1));
        let lineStringer = `<path d="M ${viewWidth * xCushionGraph/100},${viewHeight * (startingPointY/100)} `;
        for (let i=0;i<skillPointTotals.length-1;i++) {
            let currentPoint = skillPointTotals[i];
            let nextPoint = skillPointTotals[i+1];

            // const midX = (currentPoint.x + nextPoint.x) / 2;
            // const midY = (currentPoint.y + nextPoint.y) / 2;
            lineStringer += `Q ${viewWidth * currentPoint.x/100},${viewHeight * currentPoint.y/100} ${viewWidth * nextPoint.x/100},${viewHeight * nextPoint.y/100} `;
        }
        lineStringer += `
        " 
        fill="none" stroke="white" stroke-width="2"/>`;//fill="red"
        sumLineStringer += lineStringer;

        const graphString = `
            <div id="bulletsDisplayGraphBox" class="graphContainerboxSP">
                <svg class="weaponBulletArrayGraph" id="" viewBox="0 0 ${viewWidth} ${viewHeight}" preserveAspectRatio="none">
                    <line x1="${xCushionGraph}%" y1="${100-yCushionGraph}%" x2="${xCushionGraph}%" y2="${yCushionGraph}%" stroke="grey" stroke-width="3"/> <!-- Y-axis -->

                    <line x1="${xCushionGraph}%" y1="${100-yCushionGraph}%" x2="${100-xCushionGraph}%" y2="${100-yCushionGraph}%" stroke="grey" stroke-width="3"/> <!-- X-axis -->
    
                    ${sumLineStringer + pointsString}

                    <text x="0.5%" y="${yCushionGraph + 5}%" fill="white" font-size="15" text-anchor="start">${SPMax}</text>
                    <text x="0.5%" y="${100 - yCushionGraph + 5}%" fill="white" font-size="15" text-anchor="start">${0}</text>
                </svg>
            </div>
            `;


        mainSPStringHolder += `<div class="statFiltersRowHeader">Team</div>` + `<div class="totalHealingBoxBreakdownRows" style="background-color: #ffffff1A">
            <div class="totalHealingBoxHalfBreakdownRows hasHoverTooltip">
                <div class="totalHealingHeader">Team Gained</div>
                <div class="totalHealingValueBoss">${teamSPGained.toLocaleString()}</div>
            </div>
            <div class="totalHealingBoxHalfBreakdownRows hasHoverTooltip">
                <div class="totalHealingHeader">Team Spent</div>
                <div class="totalHealingValueBoss">${teamSPSpent.toLocaleString()}</div>
            </div>
        </div>` + graphString;



        for (let charEntry in turnPoints) {
            const currentEntry = turnPoints[charEntry];


            // [characterObject.char4.name]: {
            //     points: [{points: 0, AV: 0}],
            //     spent: 0,
            //     gained: 0,
            // },

            const spent = currentEntry.spent;
            const gained = currentEntry.gained;
            const total = (Math.abs(spent) + gained) || 1;



            let currentPercentSpent = spent/total * -100;
            let currentPercentGained = gained/total * 100;
            // console.log(currentDMG,currentName)

            const SPRatio = (gained/total - 0.50) / 0.50 * 100;
            let SPRatioName = "";

            if (SPRatio > 0) {SPRatioName = "Positive";}
            else if (SPRatio === 0) {SPRatioName = "Neutral";}
            else {SPRatioName = "Negative";}

            // "#6e2020",
            // "Green",
            
            let innerBarsHolder = `
            <div class="actionDetailBodyRowSummaryDMGBoxHolderACTIONBAR">
                <div class="rowSummaryDMGBarDynamicACTIONBARSPGained" style="width:${currentPercentGained}%;background-color: Green"></div>
                <div class="rowSummaryDMGBarDynamicACTIONBARSPSpent" style="width:${currentPercentSpent}%;background-color: #6e2020"></div>
                <div class="rowSummaryDMGBarDynamicACTIONBARMIDDLE"></div>

                <div class="rowSummaryDMGNameAndPercentACTIONBARGained">+${gained.toLocaleString()} / -${Math.abs(spent).toLocaleString()} (${SPRatio.toLocaleString()}% SP ${SPRatioName})</div>
            </div>`;




            const spChartPoints = currentEntry.points;

            const viewWidth = 1000;
            const viewHeight = 100;
            let xCushionGraph = 2.5;
            let xWidthFull = 100 - xCushionGraph*2;
            let yCushionGraph = 8;
            let yDepthFull = 100 - yCushionGraph*2;

            // {points: 0, AV: 0}

            let charHighestGain = 0;
            let charHighestLoss = 0;

            for (let entry of spChartPoints) {
                const currentPoints = entry.points;
                if (currentPoints > charHighestGain) {
                    charHighestGain = currentPoints;
                }
                else if (currentPoints < charHighestLoss) {
                    charHighestLoss = currentPoints;
                }
            }

            if (!charHighestGain) {charHighestGain = 1;}
            if (!charHighestLoss) {charHighestLoss = -1;}

            let xSpread = spChartPoints.length - 1;
            // console.log(xSpread)
            const highestLossABS = Math.abs(charHighestLoss);
            let ySpread = charHighestGain + highestLossABS;


            const refPointRatio = highestLossABS/ySpread;
            const refPointHeight = refPointRatio * yDepthFull;
            


            let xMin = 0;
            // let xMax = xSpread;//xSpread + xBuffer;

            let yMin = 0;
            // let yMax = ySpread;//ySpread + yBuffer

            

            // console.log(spChartPoints)
            let entryCounter = 0;

            
            let pointsString = "";
            for (let entry of spChartPoints) {
                    // {points: 0, AV: 0}

                    const currentPoints = entry.points;
                    const currentAction = entryCounter;
                    const currentAV = entry.AV;
                    entryCounter++;

                    obscureGraphElementCounterWhoCares++;
                    let ID = `graphElement${obscureGraphElementCounterWhoCares}`;
    
                    let adjustedYValue = 0;
                    if (currentPoints>0) {adjustedYValue = currentPoints + highestLossABS}
                    else if (currentPoints === 0) {adjustedYValue = highestLossABS}
                    else {
                        adjustedYValue = highestLossABS - Math.abs(currentPoints);
                        /*
                            if the current point loss was -3 and the range was -5 somehow
                            5 - 3 = 2 + upperRangeTotal

                            //
                            2
                            1
                            0
                            -1
                            -2
                            -3

                            upperRange = 2
                            lowerRange = 3

                            currentPoint = -1

                            3 - 1 = 2
                        */
                    }


                    let xNew = (currentAction - xMin)/xSpread * xWidthFull + xCushionGraph;
                    let yNew = 1 - ((adjustedYValue - yMin)/ySpread * yDepthFull - yDepthFull - (yCushionGraph - 1));

                    entry.x = xNew;
                    entry.y = yNew;
                    // entry.tooltipID = ID;


                    pointsString += `<circle cx="${xNew}%" cy="${yNew}%" r="5" fill="#6e2020" opacity="1" id="${ID}" class="hasHoverTooltip clickable"/>`;

                    let tooltipStringer = `
                    <div class="buffTooltipHolderbox">
                        <div class="buffNameHeaderRow">${currentPoints}</div>
                        <div class="buffTooltipbuffNameRow">AV: ${currentAV.toLocaleString()}</div>
                        <div class="buffTooltipbuffNameRow">Actual SP: ${entry.totalCost.toLocaleString()}</div>
                        <div class="buffTooltipbuffNameRow">If points is not equal to Actual SP, that means the SP gain was limited by your max SP.</div>
                    </div>
                    `;
                    tooltipStorage[ID] = tooltipStringer;
            }


            let sumLineStringer = "";


            const startingPointY = 1 - ((highestLossABS - yMin)/ySpread * yDepthFull - yDepthFull - (yCushionGraph - 1));
            let lineStringer = `<path d="M ${viewWidth * xCushionGraph/100},${viewHeight * (startingPointY/100)} `;
            for (let i=0;i<spChartPoints.length-1;i++) {
                let currentPoint = spChartPoints[i];
                let nextPoint = spChartPoints[i+1];

                const midX = (currentPoint.x + nextPoint.x) / 2;
                const midY = (currentPoint.y + nextPoint.y) / 2;
                // if (i === spChartPoints.length-2) {
                    lineStringer += `Q ${viewWidth * currentPoint.x/100},${viewHeight * currentPoint.y/100} ${viewWidth * nextPoint.x/100},${viewHeight * nextPoint.y/100} `;
                // }
                // else {
                //     lineStringer += `Q ${viewWidth * currentPoint.x/100},${viewHeight * currentPoint.y/100} ${viewWidth * midX/100},${viewHeight * midY/100} `;
                // }
            }
            lineStringer += `
            " 
            fill="none" stroke="white" stroke-width="2"/>`;//fill="red"

            sumLineStringer += lineStringer;


            const graphString = `
                <div id="bulletsDisplayGraphBox" class="graphContainerboxSP">
                    <svg class="weaponBulletArrayGraph" id="" viewBox="0 0 ${viewWidth} ${viewHeight}" preserveAspectRatio="none">
                        <line x1="${xCushionGraph}%" y1="${100-yCushionGraph}%" x2="${xCushionGraph}%" y2="${yCushionGraph}%" stroke="grey" stroke-width="3"/> <!-- Y-axis -->

                        <line x1="${xCushionGraph}%" y1="${100-yCushionGraph-refPointHeight}%" x2="${100-xCushionGraph}%" y2="${100-yCushionGraph-refPointHeight}%" stroke="grey" stroke-width="3"/> <!-- X-axis -->
        
                        ${sumLineStringer + pointsString}

                        <text x="0.5%" y="${yCushionGraph + 5}%" fill="white" font-size="15" text-anchor="start">+${charHighestGain}</text>
                        <text x="0.5%" y="${100 - yCushionGraph + 5}%" fill="white" font-size="15" text-anchor="start">-${highestLossABS}</text>
                    </svg>
                </div>
                `;


                innerBarsHolder += graphString;



            const characterIconPath = "/HonkaiSR/" + (characters[charEntry] ? characters[charEntry].preview : (graphs.summonCustomImages[charEntry] ? graphs.summonCustomImages[charEntry] : graphs.enemyCustomImages["default"]))
            const finalCharacterString = `<div class="characterSPDisplayBox">
                <div class="summaryCharacterBreakdownInnerRowBox">
                    <div class="summaryCharacterBreakdownInnerRowHeader">
                        <div class="rotationsCharacterTargetPreviewBox">
                            <img src="${characterIconPath}" class="rotationsCharacterTargetPreviewBoxIcon"/>
                        </div>
                        ${charEntry}
                    </div>
                    
                    <div class="summaryCharacterBreakdownInnerBarBoxHolder">
                        ${innerBarsHolder}
                    </div>
                </div>
                </div>`   ; 

            characterBarsHolder += finalCharacterString;
        }


        readSelection("actualGraphHolderbox").innerHTML = `<div class="actualGraphHolderboxSPMain">
        ${mainSPStringHolder}
        </div>` + `<div class="statFiltersRowHeader">Characters</div>` +
        `<div class="actualGraphHolderboxSPMain">
        ${characterBarsHolder}
        </div>`;//graphString;
        
    
        tooltips.loadTooltips();
    },
    createGraphsByTurn(battleData) {
        // tooltipStorage.graphTooltips = {};
        // const battleData = globalRecords.battleData;
        graphs.clearGraphRelatedTooltips();

        let log = battleData.battleLog;
        let lastAV = null;
        for (let i=log.length-1;i>=0;i--) {
            let currentEntry = log[i];
            if (currentEntry.AV) {lastAV = currentEntry.AV;break;}
        }
    
        let lineString = "";
        let pointString = "";
    
        // battleData.characterObject.char1.name;
        const characterObject = globalRecords.character;


        let turnPoints = {
            [characterObject.char1.name]: 0,
            [characterObject.char2.name]: 1,
            [characterObject.char3.name]: 2,
            [characterObject.char4.name]: 3,
        }


        // const spChartPoints = currentEntry.points;
        const viewWidth = 400;
        const perEntryWidth = viewWidth/5;

        const viewHeight = 1000;
        let xCushionGraph = 2.5;
        let xWidthFull = 100 - xCushionGraph*2;
        let yCushionGraph = 8;
        let yDepthFull = 100 - yCushionGraph*2;

        let xSpread = 5;
        let ySpread = 0;

        


        let xMin = 0;
        // let xMax = xSpread;//xSpread + xBuffer;
        let yMin = 0;


        let turnEntryString = "";
        let heightCounter = 0;

        let defAndMasks = "";
        let imagesString = "";
        // let lineStringer = `<path d="M ${viewWidth * xCushionGraph/100},${viewHeight * (startingPointY/100)} `;

        let pointsArray = [];
        let indexCounter = 0;
        for (let entry of log) {
            if (entry.logType === "StartTurn") {
                let turnRef = JSON.parse(entry.turnRef);

                const isUniqueEvent = turnRef.isUniqueEvent;
                const isEnemy = turnRef.isEnemy;
                const isEventOrEnemy = isUniqueEvent || isEnemy;
                const charName = turnRef.properName;
                const slotNumber = turnRef.eventOwner ? turnPoints[battleData.nameBasedTurns[turnRef.eventOwner].properName] : turnPoints[charName] ?? 4;
                const characterIconPath = "/HonkaiSR/" + 
                (turnRef.eventImage ?? (characters[charName] ? characters[charName].preview : 
                    (graphs.summonCustomImages[charName] ? graphs.summonCustomImages[charName] : 
                        turnRef.properName.toLowerCase().includes("boss") ? "misc/glorpard.png" : graphs.enemyCustomImages["default"])))

                const imageHeightTotal = 25;
                defAndMasks += `<clipPath id="cropRect${heightCounter}">
                        <rect x="${perEntryWidth * slotNumber}" y="${heightCounter * imageHeightTotal}" width="${perEntryWidth}" height="20" />
                    </clipPath>`;

                pointsArray.push([perEntryWidth * slotNumber + perEntryWidth*0.5, heightCounter * imageHeightTotal + 10]);


                imagesString += `<image
                    href="${characterIconPath}"
                    ${isEventOrEnemy ? `x="${perEntryWidth * slotNumber}" y="${heightCounter * imageHeightTotal-5}" width="${perEntryWidth}" height="25"` :
                        `x="${perEntryWidth * slotNumber}" y="${heightCounter * imageHeightTotal - 20}" width="${perEntryWidth}" height="100"`}
                    clip-path="url(#cropRect${heightCounter})" class="turnViewPreviewBox clickable" onclick="userTriggers.expandBattleLog(${indexCounter})"/>
                <rect x="${perEntryWidth * slotNumber + 3}" y="${heightCounter * imageHeightTotal + 14.5}" width="20" height="6" fill="black" rx="2"/>
                <text x="${perEntryWidth * slotNumber + 4}" y="${heightCounter * imageHeightTotal + 20}" font-size="6" fill="white">${entry.AV.toFixed(1)}</text>`;//<div class="turnOrderAVBox">${entry.AV.toFixed(1)}</div>

                heightCounter++;
            }
            indexCounter++;
        }

        let lineStringer = `<path d="M ${pointsArray[0][0]},${pointsArray[0][1]} `;
        for (let i=0;i<pointsArray.length-1;i++) {
            const currentPoint = pointsArray[i];
            const nextPoint = pointsArray[i+1];

            lineStringer += `Q ${currentPoint[0]},${currentPoint[1]} ${nextPoint[0]},${nextPoint[1]} `;
        }
        lineStringer += `
        " fill="none" stroke="grey" stroke-width="0.2"/>`;





        // const startingPointY = 1 - ((3 - yMin)/ySpread * yDepthFull - yDepthFull - (yCushionGraph - 1));
        // let lineStringer = `<path d="M ${viewWidth * xCushionGraph/100},${viewHeight * (startingPointY/100)} `;
        // for (let i=0;i<skillPointTotals.length-1;i++) {
        //     let currentPoint = skillPointTotals[i];
        //     let nextPoint = skillPointTotals[i+1];

        //     // const midX = (currentPoint.x + nextPoint.x) / 2;
        //     // const midY = (currentPoint.y + nextPoint.y) / 2;
        //     lineStringer += `Q ${viewWidth * currentPoint.x/100},${viewHeight * currentPoint.y/100} ${viewWidth * nextPoint.x/100},${viewHeight * nextPoint.y/100} `;
        // }
        // lineStringer += `
        // " 
        // fill="none" stroke="white" stroke-width="2"/>`;//fill="red"
        // sumLineStringer += lineStringer;


        const compositeHeight = heightCounter * 25;
        const graphString = `
            <div id="bulletsDisplayGraphBox" class="graphContainerboxSP">
                <svg class="weaponBulletArrayGraph" id="" viewBox="0 0 ${viewWidth} ${compositeHeight}" preserveAspectRatio="none">

                    <defs>
                        ${defAndMasks}
                    </defs>

                    ${lineStringer + imagesString}
                </svg>
            </div>
            `;




        readSelection("actualGraphHolderbox").innerHTML = `<div class="actualGraphHolderboxSPMain">
        ${graphString}
       </div>`;//graphString;
        
    
        tooltips.loadTooltips();
    }
};