postMessage({command: `pushDebugLine`, data: "INITIATING CYCLEWORKER"});
importScripts(`data.js`, `../dpsModules/melee.js`,`combinations.js`,`formulas.js`,`code.js`);
postMessage({command: `pushDebugLine`, data: "Worker: Imported scripts"});

self.onmessage = function(event) {
    const data = event.data;
    //Probably make this a switch later
    //Data copy calls
    if (data.command === 'copyFilteredTables') {
        cycles.vars = data.data;
        postMessage({command: `pushDebugLine`, data: "Worker: Copied filtered item tables"});
    }
    if (data.command === 'copyTableFilters') {
        filters.types = data.data;
        postMessage({command: `pushDebugLine`, data: "Worker: Copied filters"});
    }
    if (data.command === 'copyDataTables') {
        globalRecords = data.data;
        postMessage({command: `pushDebugLine`, data: "Worker: Copied data tables"});
    }

    //Initiation call
    if (data.command === 'startCycles') {
        postMessage({command: `pushDebugLine`, data: "Worker: Starting Build Cycles"});
        // cyclesLoop.processCombinations(cyclesLoop.generateCombinations);
        cyclesLoop.generateCombinations();
    }
};