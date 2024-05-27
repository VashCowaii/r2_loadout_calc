// postMessage({command: 'pushDebugLine', data: "INITIATING CYCLEWORKER"});
importScripts('data.js','combinations.js','formulas.js','code.js');//`../dpsModules/melee.js`,
postMessage({command: 'pushDebugLine', data: "Worker: Imported scripts"});

self.onmessage = function(event) {
    const data = event.data;
    //Probably make this a switch later
    //Data copy calls
    if (data.command === 'copyFilteredTables') {
        cycles.vars = data.data;
        postMessage({command: 'pushDebugLine', data: "Worker: Copied filtered item tables"});
    }
    if (data.command === 'copyTableFilters') {
        filters.types = data.data;
        postMessage({command: 'pushDebugLine', data: "Worker: Copied filters"});
    }
    if (data.command === 'copyDataTables') {
        globalRecords = data.data;

        globalRecords.archs = globalRecords.ALTarchs;
        globalRecords.armor = globalRecords.ALTarmor;
        globalRecords.accessories = globalRecords.ALTaccessories;
        globalRecords.consumables = globalRecords.ALTconsumables;
        globalRecords.weapons = globalRecords.ALTweapons;


        postMessage({command: 'pushDebugLine', data: "Worker: Copied data tables"});
    }

    //Initiation call
    if (data.command === 'startCycles') {
        postMessage({command: 'pushDebugLine', data: "Worker: Starting Build Cycles"});
        cyclesLoop.generateCombinations(true,data.data.identifier,data.data.threadCount);
    }
};