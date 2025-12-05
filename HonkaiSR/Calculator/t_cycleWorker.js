importScripts(
    '/HonkaiSR/Calculator/dCharacters.js',
    '/HonkaiSR/Calculator/dLightcones.js',
    '/HonkaiSR/Calculator/dRelics.js',
    '/HonkaiSR/Calculator/dRelicSets.js',
    '/HonkaiSR/Calculator/statList.js',
    "/HonkaiSR/Calculator/formulas.js",
    "/HonkaiSR/Calculator/suffering4Analytics.js",
    "/HonkaiSR/Calculator/suffering3Gear.js",
    "/HonkaiSR/Calculator/suffering2Char.js",
    "/HonkaiSR/Calculator/t_combos.js",
    "/HonkaiSR/Calculator/suffering1Sim.js",
    "/HonkaiSR/Calculator/testerValues.js",
    "/HonkaiSR/Calculator/tester.js",
);
postMessage({command: 'pushDebugLine', data: "Worker: Imported scripts"});
let cycleWorkerIdentifier = null;
let querySettings = {};
let battleSettings = {};


//make le shit wait
function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

//Has the worker wait for x seconds before offing itself, as if it can go that long without getting work then clearly the cpu can't keep up.
async function requestMoreTasks(workerIdentifier) {
    postMessage({ command: 'canIHaveSomeMore', workerIdentifier });

    // Wait for a response
    const timeout = 10000; //10 second timeout, adjust as needed
    const checkInterval = 100; //Check every 100ms if a new message is received
    let waitedTime = 0;

    while (waitedTime < timeout) {
        await wait(checkInterval);
        waitedTime += checkInterval;

        // Check if a new task has been received during the wait
        if (self.newTaskReceived) {
            self.newTaskReceived = false; // Reset the flag for future use
            return;
        }
    }

    // If no new task is received after waiting, request more tasks again
    postMessage({ command: 'canIHaveSomeMore', workerIdentifier });

    // Wait for another response
    waitedTime = 0;
    while (waitedTime < timeout) {
        await wait(checkInterval);
        waitedTime += checkInterval;

        // Check if a new task has been received during the wait
        if (self.newTaskReceived) {
            self.newTaskReceived = false; // Reset the flag for future use
            return;
        }
    }

    // If still no new task, terminate the worker
    self.close();
}

self.onmessage = function(event) {
    const data = event.data;

    if (data.command === "whoAmI") {
        cycleWorkerIdentifier = data.data;
        postMessage({command: 'pushDebugLine', data: `${cycleWorkerIdentifier}: Identifier defined`});
    }
    if (data.command === "inheritQuerySettings") {
        querySettings = data.data;
        battleSettings = data.data2;
        postMessage({command: 'pushDebugLine', data: `${cycleWorkerIdentifier}: Settings copied`});
    }

    if (data.command === 'dumpCombos') {
        // let midQuery = globalRecords.midQuery;
        // if (midQuery.targetIsArray) {
        //     let targetStatistic = midQuery.targetStatistic[1];
        //     cyclesLoop.evaluateCombinationsArray(data.messageComboArray, midQuery, targetStatistic);
        // } else {
        //     let targetStatistic = midQuery.targetStatistic;
        //     cyclesLoop.evaluateCombinationsInt(data.messageComboArray, midQuery, targetStatistic);
        // }
        cyclesLoop.evaluateComboArrary(data.messageComboArray,querySettings,battleSettings);
        delete data.messageComboArray;
        // workerIdentifier = data.workerIdentifier;
        requestMoreTasks(cycleWorkerIdentifier);
    }

    if (data.command === 'comboReceived') {
        // Flag to indicate a new task has been received
        self.newTaskReceived = true;
    }
};























// importScripts(
//     '/HonkaiSR/Calculator/dCharacters.js',
//     '/HonkaiSR/Calculator/dLightcones.js',
//     '/HonkaiSR/Calculator/dRelics.js',
//     '/HonkaiSR/Calculator/dRelicSets.js',
//     '/HonkaiSR/Calculator/statList.js',
//     "/HonkaiSR/Calculator/formulas.js",
//     "/HonkaiSR/Calculator/suffering3Gear.js",
//     "/HonkaiSR/Calculator/suffering2Char.js",
//     "/HonkaiSR/Calculator/suffering1Sim.js",
//     "/HonkaiSR/Calculator/testerValues.js",
// );
// postMessage({command: 'pushDebugLine', data: "Worker: Imported scripts"});


// //make le shit wait
// function wait(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }

// //Has the worker wait for x seconds before offing itself, as if it can go that long without getting work then clearly the cpu can't keep up.
// async function requestMoreTasks(workerIdentifier) {
//     postMessage({ command: 'canIHaveSomeMore', workerIdentifier });

//     // Wait for a response
//     const timeout = 10000; //10 second timeout, adjust as needed
//     const checkInterval = 100; //Check every 100ms if a new message is received
//     let waitedTime = 0;

//     while (waitedTime < timeout) {
//         await wait(checkInterval);
//         waitedTime += checkInterval;

//         // Check if a new task has been received during the wait
//         if (self.newTaskReceived) {
//             self.newTaskReceived = false; // Reset the flag for future use
//             return;
//         }
//     }

//     // If no new task is received after waiting, request more tasks again
//     postMessage({ command: 'canIHaveSomeMore', workerIdentifier });

//     // Wait for another response
//     waitedTime = 0;
//     while (waitedTime < timeout) {
//         await wait(checkInterval);
//         waitedTime += checkInterval;

//         // Check if a new task has been received during the wait
//         if (self.newTaskReceived) {
//             self.newTaskReceived = false; // Reset the flag for future use
//             return;
//         }
//     }

//     // If still no new task, terminate the worker
//     self.close();
// }

// self.onmessage = function(event) {
//     const data = event.data;
//     //Probably make this a switch later
//     //Data copy calls
//     if (data.command === 'copyFilteredTables') {
//         delete substatColorMods;
//         delete substatColorExclusions;

//         cycles = {};
//         cycles.vars = {...data.cyclesCustom};
//         postMessage({command: 'pushDebugLine', data: "Worker: Copied cycles variables"});
//     }
//     if (data.command === 'copyTableFilters') {
//         filters = {};
//         filters.types = {...data.data};
//         postMessage({command: 'pushDebugLine', data: "Worker: Copied filters variables"});
//     }
//     if (data.command === 'copyDataTables') {
//         globalRecords = data.data;

//         //datakey references are constructed in reinstanceVars and passed in the globalRecords handoff here, they don't need to be made again thankfully

//         let abilityPath = globalRecords.archs;
//         let targetStatistic = playerDerivedStatistics[filters.types.vars.targetStatistic];
//         console.log(targetStatistic)
//         let targetIsArray = Array.isArray(targetStatistic);
//         let targetDamageCategory;
//         if (targetStatistic[3] === "Composite") {
//             targetDamageCategory = "compositeBreakdown";
//         }
//         else if (targetStatistic[3] === "Melee") {targetDamageCategory = "meleeBreakdown"}//though we've reworked dmg stuff to stick to composite categories, we still need this for "Highest Hit" on melee since we kept that target

//         globalRecords.midQuery = {};
//         globalRecords.midQuery.recordedStatistic = 0;
//         globalRecords.midQuery.targetStatistic = targetStatistic;
//         globalRecords.midQuery.targetDamageCategory = targetDamageCategory;
//         globalRecords.midQuery.targetIsArray = targetIsArray;
//         globalRecords.midQuery.bestLoadout = {};

//         globalRecords.cachedArmorResults = {};
//         globalRecords.cachedRingResults = {};//not used anymore, pretty much was not worth on the performance and had an equiv result, armor results are def worth it though

//         globalRecords.greatConsumableRecords = [...globalRecords.consumableCombo.map(item => {
//             return globalRecords.dataKeys.quickRef[item];
//         })];

//         let pullStatsCall = formulasValues.pullStats;
//         let pullStatsCallArray = formulasValues.pullStatsArray;

//         formulasValues.pullTraits(starterTable);//Assign trait value to the cycles starter table

//         recordPath = globalRecords.greatConsumableRecords;//Then assign consumable statistics since they are also static like traits within the queries
//         for (let i=1;i<=recordPath.length;i++) {
//             let quickUse = recordPath[i-1];
//             let pathRef = quickUses[quickUse];

//             if (pathRef) {pullStatsCall(starterTable,pathRef.stats);}
//         }

//         for (let i=4;i<=9;i++) {
//             let categoryRef = i<9 ? prismRowOptions : legendaryPerks;
//             let current = categoryRef[globalRecords.greatRowRecords[i-1].name];
//             if (current.color === "Combo") {
//                 pullStatsCall(starterTable,categoryRef[current.requirements[0]].stats);
//                 pullStatsCall(starterTable,categoryRef[current.requirements[1]].stats);
//                 continue;
//             }
//             else {
//                 pullStatsCall(starterTable,current.stats);
//             }
//             // console.log(globalRecords.greatRowRecords[i-1].name)
//         }
//         console.log(globalRecords.greatRowRecords)

//         //Abilities, passives, prime perks, are all static within queries. Shifted their pullStats evaluations to the cycle worker initiation so they'll be permnantly a part of the starter table within a query
//         //Ideally this should make things faster but we'll see. Custom functions still have to be pulled mid-cycle, it's just the base stats that this can be done with.
//         let archsRecord = globalRecords.archs;
//         let path1 = classInfo[archsRecord.one.class];
//         let path2 = classInfo[archsRecord.two.class];
//         let ability1 = archsRecord.one.ability;
//         let ability2 = archsRecord.two.ability;
//         let pathALT = globalRecords.searchSettingsToggles;
//         const passives = ["passive1","passive2","passive3","passive4"]
//         const passSettings = ["usePassive1","usePassive2","usePassive3","usePassive4","usePassive5","usePassive6","usePassive7","usePassive8"];//Do not ask me why this is faster

//         for (let i=1;i<=4;i++) {
//             let iterableArray = [
//                 !pathALT[passSettings[i-1]] ? path1.passives[passives[i-1]].stats : {},
//                 !pathALT[passSettings[i-1+4]] ? path2.passives[passives[i-1]].stats : {},
//             ]
//             pullStatsCallArray(starterTable,iterableArray);
//         }
//         if (!pathALT.usePrimePerk) {pullStatsCall(starterTable,path1.primeStats);}//PRIME PERK
//         if (!pathALT.useAbility1) {pullStatsCall(starterTable,path1.abilities[ability1].stats);}//ABILITIES
//         if (!pathALT.useAbility2) {pullStatsCall(starterTable,path2.abilities[ability2].stats);}

//         //this shit is for storing active conditionals, if applicable, from classes and passives, and traits even I guess. Storing though, not calling.
//         arch1 = path1.passives;
//         arch2 = path2.passives;
//         globalRecords.tieredFunctionStorage = {};
//         for (let i=1;i<=4;i++) {
//             toggleCheck = globalRecords.searchSettingsToggles[passSettings[i-1]];
//             let paths1 = arch1[passives[i-1]];
//             conditionalPath = paths1.usesConditional;
//             formulasValues.readActiveConditionalsGeneralMAINUI(globalRecords.tieredFunctionStorage,toggleCheck,conditionalPath);
            
//             toggleCheck = globalRecords.searchSettingsToggles[passSettings[i-1+4]];
//             let paths2 = arch2[passives[i-1]];
//             conditionalPath = paths2.usesConditional;
//             formulasValues.readActiveConditionalsGeneralCYCLES(globalRecords.tieredFunctionStorage,toggleCheck,conditionalPath);
//         }
//         const recordReference = globalRecords.greatTraitRecords; //Yoink all active trait values
//         for (const trait of recordReference) {
//             const traitLevel = trait.level;
//             const traitPath = traits[trait.name];
//             const conditionalPath = traitPath.usesConditional;
//             formulasValues.readActiveConditionalsTraits(globalRecords.tieredFunctionStorage,conditionalPath,traitLevel);
//         }

//         recordPath = globalRecords.greatRowRecords;
//         for (let i=4;i<=recordPath.length;i++) {
//             let entry = recordPath[i-1].name;
//             let pathRef = i!=9 ? prismRowOptions[entry] : legendaryPerks[entry];
//             const conditionalPath = pathRef.usesConditional;

//             formulasValues.readActiveConditionalsGeneralCYCLES(globalRecords.tieredFunctionStorage,null,conditionalPath);
//         }

//         globalRecords.tieredFunctionStorageKeys = Object.keys(globalRecords.tieredFunctionStorage);
        
//         starterTable = {...starterTable};//Why is this even necessary
//         starterTable.thisIsAQuery = 1;//Designate this as a query table for the functions that need that info
//         postMessage({command: 'pushDebugLine', data: "Worker: Copied data tables"});
//     }

//     // //Initiation call
//     // if (data.command === 'dumpCombos') {
//     //     let midQuery = globalRecords.midQuery;
//     //     if (midQuery.targetIsArray) {
//     //         let targetStatistic = midQuery.targetStatistic[1];
//     //         cyclesLoop.evaluateCombinationsArray(data.messageComboArray,midQuery,targetStatistic);
//     //     }
//     //     else {
//     //         let targetStatistic = midQuery.targetStatistic;
//     //         cyclesLoop.evaluateCombinationsInt(data.messageComboArray,midQuery,targetStatistic);
//     //     }
//     //     delete data.messageComboArray;
//     //     workerIdentifier = data.workerIdentifier;
//     //     postMessage({command: 'canIHaveSomeMore',workerIdentifier});
//     // }

//     if (data.command === 'dumpCombos') {
//         let midQuery = globalRecords.midQuery;
//         if (midQuery.targetIsArray) {
//             let targetStatistic = midQuery.targetStatistic[1];
//             cyclesLoop.evaluateCombinationsArray(data.messageComboArray, midQuery, targetStatistic);
//         } else {
//             let targetStatistic = midQuery.targetStatistic;
//             cyclesLoop.evaluateCombinationsInt(data.messageComboArray, midQuery, targetStatistic);
//         }
//         delete data.messageComboArray;
//         workerIdentifier = data.workerIdentifier;
//         requestMoreTasks(workerIdentifier);
//     }

//     if (data.command === 'comboReceived') {
//         // Flag to indicate a new task has been received
//         self.newTaskReceived = true;
//     }
// };