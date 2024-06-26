// postMessage({command: 'pushDebugLine', data: "INITIATING CYCLEWORKER"});
importScripts('/Remnant2/Calculator/data.js','/Remnant2/Optimizer/combinations.js','/Remnant2/Calculator/formulas.js','/Remnant2/Calculator/code.js');//`../dpsModules/melee.js`,
postMessage({command: 'pushDebugLine', data: "Worker: Imported scripts"});

self.onmessage = function(event) {
    const data = event.data;
    //Probably make this a switch later
    //Data copy calls
    if (data.command === 'copyFilteredTables') {

        delete createHTML;
        delete basicsUpdates;
        delete advancedUpdates;
        delete userTrigger;
        delete manipulateConsumable;
        delete manipulateTrait;
        delete manipulateURL;

        delete titleCombos;
        delete substatColorMods;
        delete substatColorExclusions;

        cycles = {};
        cycles.vars = {...data.cyclesCustom};
        postMessage({command: 'pushDebugLine', data: "Worker: Copied cycles variables"});
    }
    if (data.command === 'copyTableFilters') {
        filters = {};
        filters.types = {...data.data};
        postMessage({command: 'pushDebugLine', data: "Worker: Copied filters variables"});
    }
    if (data.command === 'copyDataTables') {
        globalRecords = data.data;

        // globalRecords.meleeFactors = {...globalRecords.ALTmeleeFactors}

        // globalRecords.armor = globalRecords.ALTarmor;
        // globalRecords.accessories = globalRecords.ALTaccessories;
        // globalRecords.consumables = globalRecords.ALTconsumables;
        // globalRecords.weapons = globalRecords.ALTweapons;
        
        // globalRecords.teamCount = globalRecords.ALTteamCount;
        // globalRecords.minionCount = globalRecords.ALTminionCount;
        // globalRecords.useREdamage = globalRecords.ALTuseNonStandardDR;
        // globalRecords.useDMGKept = globalRecords.ALTuseNonStandardDR;
        // globalRecords.useRelicHealing = globalRecords.ALTuseRelicHealing;
        // globalRecords.useShields = globalRecords.ALTuseShields;



        let abilityPath = globalRecords.archs;
        let targetStatistic = playerDerivedStatistics[filters.types.vars.targetStatistic];
        let targetIsArray = Array.isArray(targetStatistic);
        let targetDamageCategory;
        if (targetStatistic[0] === abilityPath.one.ability) {targetDamageCategory = "ability1Breakdown"}
        else if (targetStatistic[0] === abilityPath.two.ability) {targetDamageCategory = "ability2Breakdown"}

        globalRecords.midQuery = {};
        globalRecords.midQuery.recordedStatistic = 0;
        globalRecords.midQuery.targetStatistic = targetStatistic;
        globalRecords.midQuery.targetDamageCategory = targetDamageCategory;
        globalRecords.midQuery.targetIsArray = targetIsArray;
        globalRecords.midQuery.bestLoadout = {};



        formulasValues.pullTraits(starterTable);//Assign trait value to the cycles starter table
        starterTable = {...starterTable};//Why is this even necessary
        starterTable.thisIsAQuery = 1;//Designate this as a query table for the functions that need that info
        postMessage({command: 'pushDebugLine', data: "Worker: Copied data tables"});
    }

    //Initiation call
    if (data.command === 'dumpCombos') {
        // postMessage({command: 'pushDebugLine', data: `Worker${data.workerIdentifier}: Batch Received`});
        let midQuery = globalRecords.midQuery;
        if (midQuery.targetIsArray) {
            let targetStatistic = midQuery.targetStatistic[1];
            cyclesLoop.evaluateCombinationsArray(data.messageComboArray,midQuery,targetStatistic);
        }
        else {
            let targetStatistic = midQuery.targetStatistic;
            cyclesLoop.evaluateCombinationsInt(data.messageComboArray,midQuery,targetStatistic);
        }
        workerIdentifier = data.workerIdentifier;
        postMessage({command: 'canIHaveSomeMore',workerIdentifier});
    }
};