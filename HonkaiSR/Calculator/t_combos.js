const cyclesLoop = {
    lockFilterUI(queryStarted) {
        const elementsToLock = [
            "cycleSTART","smartSkipsToggle","settingsOpenThreads",
            "characterSearchButton","lightconeSearchButton",
            "eidolonRankButton0","eidolonRankButton1","eidolonRankButton2","eidolonRankButton3","eidolonRankButton4","eidolonRankButton5","eidolonRankButton6",
            "superimpositionButton1","superimpositionButton2","superimpositionButton3","superimpositionButton4","superimpositionButton5",
        ];
        const elementsInvertedLocks = ["cycleSTOP"];
        const elementsToHide = [];
        if (queryStarted) {
            globalUI.queryIsActive = true;
            for (let element of elementsToLock) {
                // console.log(element)
                readSelection(element).disabled = true;
            }
            for (let element of elementsInvertedLocks) {
                readSelection(element).disabled = false;
            }
            for (let element of elementsToHide) {
                readSelection(element).display = "none";
            }
            // readSelection("cycleSTOP").disabled = false;
            // readSelection("cycleSTART").disabled = true;
            // readSelection("settingsOpenThreads").disabled = true;
            // readSelection("smartSkipsToggle").disabled = true;

            // readSelection("settingsBoxHolderVisibility").style.display = "none";
            // readSelection("filtersDisplayMegaBox").style.maxWidth = "100%";
        }
        else {
            globalUI.queryIsActive = false;
            for (let element of elementsToLock) {
                readSelection(element).disabled = false;
            }
            for (let element of elementsInvertedLocks) {
                readSelection(element).disabled = true;
            }
            for (let element of elementsToHide) {
                readSelection(element).display = "flex";
            }
            // readSelection("cycleSTOP").disabled = true;
            // readSelection("cycleSTART").disabled = false;
            // readSelection("settingsOpenThreads").disabled = false;
            // readSelection("smartSkipsToggle").disabled = false;
            
            // readSelection("settingsBoxHolderVisibility").style.display = "flex";
            // readSelection("filtersDisplayMegaBox").style.maxWidth = "600px";
        }
    },
    // compare.debugPushLine
    generationStop(endType,cycleWorker,endedWithoutIssue,endedBeforeWorkerCreation) {
        // let varRef = cycles.vars;

        // cycles.endedClearMemory();

        if (!cycleWorker && globalRecords.workersRunning) {
            for (let i=1;i<=globalRecords.threadsAssignedCount;i++) {
                workers[`cycleWorker${i}`].terminate();
            }
        }
        else if (globalRecords.workersRunning) {
            workers[cycleWorker].terminate();
            globalRecords.workersRunning -= 1;
            readSelection("openThreadsDisplay").innerHTML = globalRecords.workersRunning;
            if (endType) {compare.debugPushLine(endType);}
        }

        if (!cycleWorker) {
            globalUI.cyclesAborted = true;
            cyclesLoop.lockFilterUI(false);

            compare.debugPushLine(`Worker: BUILD GENERATION ABORTED<br>`);
            globalRecords.workersRunning = 0;
            globalRecords.currentBestStatistic = 0;
            readSelection("openThreadsDisplay").innerHTML = 0;
        }

        if (!endType && !endedWithoutIssue) {alert("Cycles were terminated");}
        else if (!endedWithoutIssue) {alert(endType + `\n\n${cycleWorker}`)}
    },
    selfGenerationStop(endType) {
        // cycles.vars.stopCycles = true;
        // postMessage({command: `resetButtons`});
        postMessage({command: `pushDebugLine`, data: "Worker: BUILD GENERATION ABORTED<br>"});
        if (endType===`Mismatched Combo Count`) {
            postMessage({command: `pushAlert`, data: endType});
        }
        self.close();
    },
    generationStartHSR() {
        if (globalUI.cyclesActive) {return;}
        globalUI.cyclesAborted = false;
        globalUI.cyclesActive = true;
        cyclesLoop.lockFilterUI(true);

        // if (globalUI.cyclesAborted && filters.types.vars.targetStatistic) {
        //     globalUI.cyclesAborted = false;
        //     if (varRef.debug) {readSelection("comboDebug").innerHTML = ".DEBUG VIEW";}

        //     varRef.finishedIteratorSetup = false;

        //     compare.debugPushLine("UI LOCK START");
        //     console.log()

        //     if (isTargetArray) {
        //         filters.types.vars.oldTarget = [...playerDerivedStatistics[filters.types.vars.targetStatistic]];
        //     }
        //     else {
        //         filters.types.vars.oldTarget = `${filters.types.vars.targetStatistic}`;//This is purely for tracking what the statistic is for display purposes, if it is changed while running
        //     }

        //     cyclesLoop.lockFilterUI(true);
        //     // readSelection("searchImportButton").disabled = true;
        //     varRef.counterInt = 0;//console.log(navigator.hardwareConcurrency)
        //     // cycles.vars.workersRunning = cycles.vars.threadCount;
        //     globalRecords.currentBestStatistic = 0;
        //     varRef.lastTimerEvaluation = 0;
        //     cyclesLoop.bestCombos = [];

            globalRecords.newIterator = null;
            globalRecords.newIterator = compare.getUpdatedComparisons();
            console.log("reached iterator start");
            
            function processVars() {
                if (globalRecords.newIterator) {
                    const { done } = globalRecords.newIterator.next();
                    if (done || globalUI.cyclesAborted) {
                        globalRecords.newIterator = null;
                        globalUI.cyclesActive = false;
                        globalUI.cyclesAborted = true;
                        // cyclesLoop.lockFilterUI(false);
                        return;
                    }
                    // else if (varRef.finishedIteratorSetup) {return;}
                    setTimeout(processVars, 0);
                }
            }
            processVars();
            // cyclesLoop.lockFilterUI(false);
        //     compare.debugPushLine("UI LOCK END");
        // }
        // else {
        //     alert('ERROR: No Targeted Statistic found. Query aborted.');
        // }
    },
    abortCycles() {
        globalUI.cyclesAborted = true;
        globalUI.cyclesActive = false;
        cyclesLoop.generationStop(null,null);
        readSelection("cyclesTimeRemaining").innerHTML = "Cycles forcibly aborted";
        globalRecords.resultsStorage = [];
    },
    filterEquivalents(globalResults,targetStatistic) {
        // sortedResults.push({
        //     battleDamageSUM: simResult.battleDamageSUM,
        //     battleAV: simResult.sumAV,
        //     cycle: simResult.currentCycle,

        //     char1SPD: getSPD(menuStats.char1).SPDFinal,
        //     char2SPD: getSPD(menuStats.char2).SPDFinal,
        //     char3SPD: getSPD(menuStats.char3).SPDFinal,
        //     char4SPD: getSPD(menuStats.char4).SPDFinal,

        //     // char1Subs: characterObject.char1.statObject,
        //     // char2Subs: characterObject.char2.statObject,
        //     // char3Subs: characterObject.char3.statObject,
        //     // char4Subs: characterObject.char4.statObject,

        //     characterObject: comboDefined,
        // });

        
        for (let i=globalResults.length-1;i>=0;i--) {
            const currentEntry = globalResults[i];
            const outerObject = currentEntry.characterObject;
            let outerComparisonString = "";

            for (let outeri = 1;outeri<=4;outeri++) {
                const currentChar = outerObject["char" + outeri];
                outerComparisonString += currentChar.lcName + currentChar["2pc"] + currentChar["4pc"] + currentChar.planar + currentChar.BodyMain + currentChar.FeetMain + currentChar.SphereMain + currentChar.RopeMain;
            }
            const outerComparisonDMG = currentEntry[targetStatistic];
            const outerSPD = currentEntry.teamSPD;



            for (let ii=i-1;ii>=0;ii--) {
                const currentEntryInner = globalResults[ii];
                const innerObject = currentEntryInner.characterObject;
                const innerSPD = currentEntryInner.teamSPD;

                const innerComparisonDMG = currentEntryInner[targetStatistic];

                if (innerComparisonDMG > outerComparisonDMG) {break;}//if while climbing up, we've reached a result that is higher, then break bc we're done
                else if (innerComparisonDMG != outerComparisonDMG) {continue;}//but otherwise if we're at a result that is less than, than skip to the next


                let innerComparisonString = "";
                for (let inneri = 1;inneri<=4;inneri++) {
                    const currentCharInner = innerObject["char" + inneri];
                    innerComparisonString += currentCharInner.lcName + currentCharInner["2pc"] + currentCharInner["4pc"] + currentCharInner.planar + currentCharInner.BodyMain + currentCharInner.FeetMain + currentCharInner.SphereMain + currentCharInner.RopeMain;
                }
                
                if (innerComparisonString != outerComparisonString) {continue;}
                if (outerSPD >= innerSPD) {
                    globalResults.splice(i,1);//if the speeds are the same or the outer speed is greater than it, then delete the current outer entry from the array
                    // indexToDelete.add(i);
                    break;//then break so we only ever delete one entry at a time, otherwise this itself would shit itself
                }
                else if (innerSPD > outerSPD) {
                    globalResults.splice(ii,1);
                    // indexToDelete.add(ii);
                    break;
                }
            }
        }
    },
    sortResultsByDamage: (a, b) => {
        if (b.battleDamageSUM != a.battleDamageSUM) {return b.battleDamageSUM - a.battleDamageSUM;}
        return a.teamSPD - b.teamSPD;
    },
    targetStatisticSorting: {
        "battleAV": (a, b) => {
            if (b.battleAV != a.battleAV) {return a.battleAV - b.battleAV;}
            return a.teamSPD - b.teamSPD;
        },
        "battleDamageSUM": (a, b) => {
            if (b.battleDamageSUM != a.battleDamageSUM) {return b.battleDamageSUM - a.battleDamageSUM;}
            return a.teamSPD - b.teamSPD;
        },
    },
    isInvertedSearch: {
        "battleDamageSUM": false,
        "battleAV": true,
    },
    startCycleWorker(identifier,threadCount) {
        let cycleWorker = `cycleWorker${identifier}`;
        // const startButton = readSelection("cycleSTART");
        // const stopButton = readSelection("cycleSTOP");
        const timerBox = readSelection(`cyclesTimeRemaining`);
        const workersSentDisplay = readSelection("counterInt");
        const displayCount = readSelection(`combinationsDisplayCount`);

        const comboReceivedObject = {command:'comboReceived'};
        
        // cycles.vars.counterInt = 0;
        const currentWorker = workers[cycleWorker] ??= new Worker(`t_cycleWorker.js`);
        currentWorker.onmessage = function(event) {
            const data = event.data;
            // let varRef = cycles.vars;


            if (data.command === `yieldCombination`) {
                const comboResults = data.comboResults;
                let increments = globalRecords.threadsAssignedCount * 10000;// * 1.5;//Determines how frequently the est time calculates, in terms of how many combos have passed
                globalRecords.counterInt += comboResults.length;
                
                let counterInt = globalRecords.counterInt;
                workersSentDisplay.innerHTML = counterInt.toLocaleString();
                const totalCombos = globalUI.comboCountFinal;
                const reachedQueryEnd = counterInt === totalCombos;
                if (counterInt>totalCombos) {cyclesLoop.generationStop(`ERROR: MISMATCHED COMBO COUNT\n${counterInt} > ${totalCombos}\n\nIf you ever see this, take note of your filters then join the discord linked at the bottom of any page, and ping Vash with the filter info.`)}
                else if (reachedQueryEnd) {
                    // readSelection("comboCount").innerHTML = globalUI.comboCountFinal.toLocaleString();
                    const endTotalTime = (performance.now() - globalUI.startTime)/1000;
                    console.log(endTotalTime);

                    const adjustedTime = endTotalTime>60 ? 60 : 1;
                    let units = adjustedTime > 1 ? "m" : "s";
                    let newEst = endTotalTime/adjustedTime;

                    let remainder = 0;
                    remainderString = ``;
                    if (units===`m` && newEst>60) {
                        remainder = newEst%60;
                        remainderString = ` ${remainder.toFixed(0)}m`;
                        newEst = (newEst-remainder)/60;
                        units = `hr`;
                    }
                    timerBox.innerHTML = `Completed all build cycles in ${newEst.toFixed(0)}${units}${remainderString}`;
                    // console.log(`Completed all build cycles in ${newEst.toFixed(0)}${units}${remainderString}`)
                    globalUI.cyclesAborted = true;
                    readSelection("cycleSTOP").disabled = true;
                    readSelection("cycleSTART").disabled = false;
                }

                // readSelection(`optimizerReachedBox`).innerHTML = counterInt.toLocaleString();
                //we adjust the progress bar width based on COMPLETED battles, whereas the progress bar COUNT will be based on generated combinations
                // displayCount.style.width = `${((counterInt)/totalCombos)*100}%`;
                displayCount.style.width = (100 * counterInt/totalCombos) + "%";

                let timerChecker = Math.floor(counterInt/increments) * increments;
                // if (varRef.firstBatch) {cycles.firstBatchUIAdjustment();}
                // //If the counter matches an increment level
                // const currentTime = performance.now() - globalUI.startTime;
                if (timerChecker > globalUI.lastMeasuredIncrement && globalRecords.workersRunning > 0) {
                    const newCycleTime = performance.now();
                    const timeDiff = newCycleTime - globalRecords.cycleTimer;
                    globalRecords.cycleTimer = newCycleTime;

                    const remainingCombos = totalCombos - counterInt;
                    // varRef.cycleCounter = counterInt;
                    const timePerCycles = timeDiff/increments;
                    const estTime = (timePerCycles*remainingCombos)/1000;

                    const adjustedTime = estTime>60 ? 60 : 1;
                    let units = adjustedTime > 1 ? "m" : "s";
                    let newEst = estTime/adjustedTime;

                    remainderString = "";
                    if (units==="m" && newEst>60) {
                        const remainder = newEst%60;
                        // remainderString = ` ${remainder.toFixed(0)}m`;
                        remainderString = " " + remainder.toFixed(0) + "m";
                        newEst = (newEst-remainder)/60;
                        units = "hr";
                    }
                    // timerBox.innerHTML = `${newEst.toFixed(0)}${units}${remainderString}`;
                    timerBox.innerHTML = newEst.toFixed(0) + units + remainderString;
                    globalUI.lastMeasuredIncrement = timerChecker;
                }


                const targetStatistic = globalRecords.querySettings.searchTarget;
                const globalResults = globalRecords.resultsStorage;
                globalResults.push(...comboResults);
                globalResults.sort(cyclesLoop.targetStatisticSorting[targetStatistic])
                

                const currentWorstResult = globalResults[globalResults.length-1][targetStatistic];
                //for the sake of accurate spread ranges on the "Relative to Equipped Gear" bars and whatnot, I need to know the actual worst result as we go
                //because we trim the results after this point, and if we don't track the worst result, then the spread would only track the top 1k results, and that's not accurate
                const isInvertedSearch = cyclesLoop.isInvertedSearch[targetStatistic];
                if (globalRecords.currentWorstResult === null) {globalRecords.currentWorstResult = currentWorstResult;}
                else if (!isInvertedSearch && currentWorstResult < globalRecords.currentWorstResult) {globalRecords.currentWorstResult = currentWorstResult;}
                else if (isInvertedSearch && currentWorstResult > globalRecords.currentWorstResult) {globalRecords.currentWorstResult = currentWorstResult;}

                cyclesLoop.filterEquivalents(globalResults,targetStatistic);
                if (globalResults.length > 1000) {globalResults.length = 1000;}

                compare.displayCurrentResults(globalResults,null,null,reachedQueryEnd);

                if (reachedQueryEnd) {
                    cyclesLoop.generationStop("",null,true);
                }
            }
            else {
                switch (data.command) {
                    case `canIHaveSomeMore`: 
                        let queueStorage = globalRecords.queueStorage;
                        workerIdentifier = data.workerIdentifier;

                        const globalIterator = globalRecords.newIterator;
                        if (!globalIterator && !queueStorage.length) {
                            cyclesLoop.generationStop(`CLOSED: ${workerIdentifier} - No more batches to process`,workerIdentifier,true);
                            // workers[workerIdentifier].terminate();
                            // globalRecords.workersRunning -= 1;
                        }//if distribution is done and the queue is empty, kill it
                        // else if (globalIterator) {globalIterator.next();}//otherwise if dist is still going, ask it for more

                        if (globalIterator && !queueStorage.length) {globalIterator.next();}
                        if (queueStorage.length) {//ideally this will only fail if we're out of combos to distribute //TODO: add safety handling here later
                            let messageComboArray = queueStorage[0];
                            const stringID = workerIdentifier;
                            const currentWorker = workers[stringID];
                            currentWorker.postMessage({command:`dumpCombos`,messageComboArray});
                            queueStorage.shift();
                            currentWorker.postMessage(comboReceivedObject);//TODO: iirc this was for timeout handling but look at this later
                        }
                        break;
                    case `pushDebugLine`: compare.debugPushLine(data.data); break;
                    case `pushAlert`: 
                        if (data.isAborted) {cyclesLoop.generationStop("","",true)}
                        alert(data.data); 
                        break
                    // case `pushInnerHTML`:
                    //     readSelection(data.ID).innerHTML = data.data;
                    //     break;
                    // case `updateStep`: cyclesLoop.updateSetupStep(data.data,false,data.moduloFactor); break;
                }
            }
        };
        currentWorker.onerror = function(error) {
            globalRecords.resultsStorage = [];
            console.error('Worker error:', error,error.message,error.lineno,error.filename);
            cyclesLoop.generationStop(`${error.message} LINE:${error.lineno}`);
        };
        // console.log(`Completed worker setup ${identifier}`);
    },
    * reinstanceVars() {
        let path = cycles.vars;
        let filterPath = filters.types;
        let tagsFilter = cycles.convertTagNamesToBackend([...filterPath.tags.filter[0]]);
        let pushDebug = compare.debugPushLine;
        let updateStep = cyclesLoop.updateSetupStep;

        cycles.declareGlobalDataKeys();
        readSelection("distributedCounter").innerHTML = 0;
        readSelection("skipsCounter").innerHTML = 0;
        
        //Stat/occlusion filters
        // const occlusionHandlingGenerator = cycles.tableOcclusionHandling(tagsFilter);
        // let resultFilters = occlusionHandlingGenerator.next();
        // while (!resultFilters.done) {yield;resultFilters = occlusionHandlingGenerator.next();}
        // yield;
        //Lock filters
        // const locksHandlingGenerator = cycles.tableLocksHandling(tagsFilter);
        // let resultLocks = locksHandlingGenerator.next();
        // while (!resultLocks.done) {yield;resultLocks = locksHandlingGenerator.next();}
        // yield;
        // //counting total combos possible, not factoring skips reductions bc that would kinda be insane and shit to do frankly without killing our memory requirements
        // const counterGenerator = cycles.comboCounterHandling();
        // let resultCounter = counterGenerator.next();
        // while (!resultCounter.done) {yield;resultCounter = counterGenerator.next();}
        // yield;

        const comboCounter = path.totalDisplayCombinations;
        let cycleCounter = 0,lastSent = 0;
        let messageComboArray = [];
        let threadCount = path.threadCount;
        let workerIdentifier = 0,sentSoFar = 0;
        globalRecords.consumableCombo = path.consumableCombos;
        pushDebug(`Generating static dependencies where applicable...`);
        cycles.pushStaticReqsAndProvisions();
        updateStep("Creating Web Workers",false,1);
        yield;
        updateStep("Exporting data to Web Workers",false,1);

        let initiateWorker = cyclesLoop.startCycleWorker;
        let threadsDisplayElement = readSelection("openThreadsDisplay");
        const threadsAssignedCount = +readSelection("settingsOpenThreads").value;
        for (let i=1;i<=threadsAssignedCount;i++) {
            initiateWorker(i,threadsAssignedCount);
            pushDebug(`Initiating Web Worker #${i}`);

            let cycleWorker = `cycleWorker${i}`
            workers[cycleWorker].postMessage({command:`copyFilteredTables`,cyclesCustom:cycles.createCustomCyclesOverride(path)});
            workers[cycleWorker].postMessage({command:`copyTableFilters`,data:filters.types});
            workers[cycleWorker].postMessage({command:`copyDataTables`,data:globalRecords});
            path.workersRunning += 1;
            threadsDisplayElement.innerHTML = path.workersRunning;
            yield;
        }
        updateStep("Completed Setup",false,1);
        pushDebug(`TOTAL COMBOS: ${comboCounter}`);
        pushDebug(`STARTING QUERY CYCLES...`);

        cycles.clearBaseTableMemory(path);//workers have been given armor info and whatnot, we can clear this shit out

        path.queueStorage = [];
        let concLimitCache = globalRecords.concLimitCache;
        path.firstBatch = true;
        starterPostsComplete = false;

        let firstRunPosts = 0;
        let maxStorageArrays = Math.floor(threadCount*1.2);
        const smartSkips = globalRecords.useSmartSkips;

        let skipped = 0;
        let totalSkipped = 0;
        let checkReq = cycles.checkProvidedRequirement;
        let skipsCounterElement = readSelection("skipsCounter");
        let distributedCounterElement = readSelection("distributedCounter");

        for (const CringSet of path.ringCombos) {
            for (const Camulet of path.amuletCombos) {
                let currentTable = concLimitCache[`${Camulet}${CringSet}`];
                for (const Crelic of path.relicCombos) {
                for (const Cmelee of path.meleeCombos) {
                for (const Csecondary of path.secondaryCombos) {
                for (const Cprimary of path.primaryCombos) {
                for (const rMod1 of path.rangedModCombos) {
                for (const CfragmentSet of path.fragmentCombos) {
                for (const mMutator1 of path.meleeMutatorCombos) {
                for (const rMutator1 of path.rangedMutatorCombos) {
                for (let conc=0;conc<currentTable.length;conc++) {
                    cycleCounter++;
                    if (smartSkips && checkReq(CringSet,Camulet,Crelic,mMutator1,rMutator1,CfragmentSet,Cmelee,Cprimary,Csecondary,rMod1,currentTable[conc])) {
                        skipped++;
                        if (skipped >= 100000) {
                            totalSkipped += skipped;
                            path.counterInt += skipped;
                            skipped=0;
                            skipsCounterElement.innerHTML = totalSkipped.toLocaleString();
                        }
                        if (cycleCounter >= comboCounter) {
                            sentSoFar += lastSent;
                            distributedCounterElement.innerHTML = sentSoFar.toLocaleString();
                            lastSent = 0;
                            path.queueStorage.push(messageComboArray);
                            messageComboArray = [];
                            totalSkipped += skipped;
                            path.counterInt += skipped;
                            skipped=0;
                            skipsCounterElement.innerHTML = totalSkipped.toLocaleString();
                        }
                        continue;
                    }
                lastSent++;

                messageComboArray.push({CringSet,Crelic,CfragmentSet,Camulet,Cconcoction:currentTable[conc],
                    Cprimary,Csecondary,Cmelee,CrangedMutators: rMutator1, CmeleeMutators: mMutator1,CrangedMods: rMod1});

                if (lastSent === 100000 || cycleCounter === comboCounter) {
                    sentSoFar += lastSent;
                    distributedCounterElement.innerHTML = sentSoFar.toLocaleString();
                    lastSent = 0;

                    totalSkipped += skipped;
                    path.counterInt += skipped;
                    skipped=0;
                    skipsCounterElement.innerHTML = totalSkipped.toLocaleString();

                    if (starterPostsComplete) {
                        while (path.queueStorage.length === maxStorageArrays) {yield;}

                        path.queueStorage.push(messageComboArray);
                        messageComboArray = [];
                        yield;
                    }
                    else {
                        firstRunPosts++;
                        if (firstRunPosts === threadCount) {path.finishedIteratorSetup = true;}
                        workerIdentifier++;
                        let cycleWorkerLoop = `cycleWorker${workerIdentifier}`
                        workers[cycleWorkerLoop].postMessage({command:`dumpCombos`,messageComboArray,workerIdentifier});
                        messageComboArray = [];
                        if (firstRunPosts >= threadCount) {starterPostsComplete = true;}
                        yield;
                    }
                }
                }}}}}}}}}
            }  
        }
        cycles.endedClearMemory();
        console.log(`Completed distributing all ${sentSoFar.toLocaleString()} combos to ${threadCount} workers.`);
        return;
    },
    updateSetupStep(stepString,start) {
        // readSelection("maxThreadsDisplay").innerHTML = cycles.vars.threadCount.toFixed(0);

        let stepCount = readSelection("counterInt");
        const totalSteps = 6;
        if (start) {
            stepCount.innerHTML = 0;
            readSelection("comboCount").innerHTML = totalSteps;
            readSelection(`combinationsDisplayCount`).style.width = `${0}%`;
            readSelection(`cycleProgressType`).innerHTML = "SETUP:"
            readSelection(`lastFound`).innerHTML = ""
        }
        else {stepCount.innerHTML = +stepCount.innerHTML + 1;}

        readSelection("cyclesTimeRemaining").innerHTML = stepString;//The step name display
        //18 total steps at the moment to reach cycle iterations, 19 technically with "completed setup"
        let percentWidth = (stepCount.innerHTML)/totalSteps;
        readSelection(`combinationsDisplayCount`).style.width = `${percentWidth*100}%`;
    },
    evaluateComboArrary(comboArray,querySettings,battleSettings) {
        let comboResults = [];

        const battleStart = sim.battleStart;
        const floor = Math.floor;
        for (let comboDefined of comboArray) {
            let simResult = battleStart(comboDefined,false,querySettings,battleSettings);
                              
            const namedTurns = simResult.nameBasedTurns;
            
            comboResults.push({
                battleDamageSUM: floor(simResult.battleDamageSUM),
                battleAV: simResult.sumAV,
                cycle: simResult.currentCycle,
                teamSPD: simResult.teamSPD,

                char1SPD: namedTurns.char1.initialSPD,
                char2SPD: namedTurns.char2.initialSPD,
                char3SPD: namedTurns.char3.initialSPD,
                char4SPD: namedTurns.char4.initialSPD,

                characterObject: comboDefined,
            });
        }
        // sortedResults.sort((a, b) => b.battleDamageSUM - a.battleDamageSUM);

        postMessage({command:`yieldCombination`,comboResults});
    }
}