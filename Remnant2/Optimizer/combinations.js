let cycles = {
    debugView() {
        let state = readSelection("debugShow").checked;
        let element = readSelection("comboDebug");
        if (!state) {
            element.style.display = "none";
        }
        else {
            element.style.display = "block";
        }
    },
    "presets": {
        "None": [],
        "TANK:EHP+Shields": [
            "Encumbrance/Weight","Encumbrance/Weight - Threshold","Encumbrance/Weight-%",
            "Health-Flat","Health-%","Health-Global Modifier","Health-Cap%",
            "Armor-Flat","Armor Effectiveness","DR-Flat","DR-Bulwark","DR-Bulwark Limit","DR-Reduced Enemy Damage","DR-Damage Shared",
            "Shield-Flat","Shield Effectiveness","Shield-%/second",
            "Consumable-Concoction Limit"
        ],
        "TANK:EHP": [
            "Encumbrance/Weight","Encumbrance/Weight - Threshold","Encumbrance/Weight-%",
            "Health-Flat","Health-%","Health-Global Modifier","Health-Cap%",
            "Armor-Flat","Armor Effectiveness","DR-Flat","DR-Bulwark","DR-Bulwark Limit","DR-Reduced Enemy Damage","DR-Damage Shared",
            "Consumable-Concoction Limit"
        ],
        "TANK:EHP/S": [
            "Encumbrance/Weight","Encumbrance/Weight - Threshold","Encumbrance/Weight-%",
            "Health-Flat","Health-%","Health-Global Modifier","Health-Cap%",
            "Armor-Flat","Armor Effectiveness","DR-Flat","DR-Bulwark","DR-Bulwark Limit","DR-Reduced Enemy Damage","DR-Damage Shared",
            "Healing Effectiveness","Healing-Global Effectiveness","Healing-Modifiers","Healing-Flat/second","Healing-%/second",
            "Grey Health-Flat/second",
            "Lifesteal-All","Lifesteal-Melee","Lifesteal-Ranged","Lifesteal-Melee Charged",
            "Relic Effectiveness","Relic-Base Healing","Relic-Healing Type","Relic-Healing Duration",
            "Consumable-Concoction Limit"
        ],
        "Shields": [
            "Shield-Flat","Shield Effectiveness","Shield-%/second"
        ],
        "Grey Health Regen": [
            "Grey Health-Flat/second", "Grey Health-Hit Threshold", "Grey Health Conversion",
        ],
        "Lifesteal (All forms)": [
            "Lifesteal Effectiveness","RelicLifesteal","Lifesteal-All","Lifesteal-Melee","Lifesteal-Melee Charged","Lifesteal-Ranged","Status-Outgoing Statuses","Status-Self-Bleed","Relic Effectiveness"
        ],
        "Havoc Form Damage": [
            "Critical Chance-All","Critical Chance-Elemental","Critical Chance-Skill",
            "Critical Damage-All",
            "Damage-All","Damage-Elemental","Damage-Shock","Damage-Skill",
            "Skill-Duration","Speed-Cast","Speed-HASTE",

            "Status-Bleed","Status-Burn","Status-Corroded","Status-Exposed","Status-Overloaded","Status-Slow","Status-Outgoing Statuses",
            "Status-Self-Bleed","Status-Incomng Statuses",

            // "Armor-Flat","Armor Effectiveness","DR-Flat",
            "DR-Bulwark","DR-Bulwark Limit",
            "Encumbrance/Weight","Encumbrance/Weight - Threshold","Encumbrance/Weight-%",

            "Healing-Flat/second","Healing-%/second","Consumable-Concoction Limit",

            "Shield-Flat",
        ],
        "Darude - Sandstorm": [
            "Critical Chance-All","Critical Chance-Elemental","Critical Chance-Mod",
            "Critical Damage-All",
            "Damage-All","Damage-Elemental","Damage-Mod",
            "Mod-Duration",

            "Status-Bleed","Status-Burn","Status-Corroded","Status-Exposed","Status-Overloaded","Status-Slow","Status-Outgoing Statuses",
            "Status-Self-Bleed","Status-Incomng Statuses",

            // "Armor-Flat","Armor Effectiveness","DR-Flat",
            "DR-Bulwark","DR-Bulwark Limit",
            "Encumbrance/Weight","Encumbrance/Weight - Threshold","Encumbrance/Weight-%",

            "Healing-Flat/second","Healing-%/second","Consumable-Concoction Limit",

            "Shield-Flat",
        ],
        "Movement Speed": [
            "Speed-Movement",
            "Encumbrance/Weight","Encumbrance/Weight - Threshold","Encumbrance/Weight-%",
        ]
    },
    "vars": {
        //ARMOR
        "baseArmorCombos": {
            "Table": {},
            "armorKeys": [],
        },
        "armorCombos": {
            "Table": {},
            "armorKeys": [],
        },
        "weightFirst": {
            "Table": {},
            "armorKeys": [],
        },
        "archetypes1": {
            "Table": {},
        },
        "archetypes2": {
            "Table": {},
        },
        "amulets": {
            "Table": {},
        },
        "rings": {
            "Table": {},
        },
        "relics": {
            "Table": {},
        },
        "fragments": {
            "Table": {},
        },
        "concoctions": {
            "Table": {},
        },
        "consumables": {
            "Table": {},
        },
        "primaries": {
            "Table": {},
        },
        "melee": {
            "Table": {},
        },
        "secondaries": {
            "Table": {},
        },
        "primaryMutators": { //ranged, in general
            "Table": {},
        },
        "meleeMutators": {
            "Table": {},
        },
        "primaryMods": { //ranged, in general
            "Table": {},
        },
        "helmets": {
            "Table": {},
        },
        "chests": {
            "Table": {},
        },
        "hands": {
            "Table": {},
        },
        "legs": {
            "Table": {},
        },
        // "asdf": {},
        "totalDisplayCombinations": 0,
        "stopCycles": true,
        "setupCompleted": false,
        "armorIsGenerated": false,
        "bypassLimit": false,
        "debug": true,
        "cycleTimer": 0,
        "cycleTotalTimer": 0,
        "cycleCounter": 0,
        "counterInt": 0,
        "printedSubObjects": false,
        "threadCount": 0,
        "workersRunning": 0,
        "lastTimerEvaluation": 0,
        "finishedIteratorSetup": false,
    },
    debugPushLine(string) {
        readSelection("comboDebug").innerHTML += `<br>${string}`;
    },
    applyTagFilter(table,filter,debugTable) {
        let returnTable = cycles.reinstanceJSON(table);
        if (filter) {
            for (let item in returnTable) {
                let itemKey = returnTable[item];

                if (itemKey.classTags) {
                    let classPath = globalRecords.archs;
                    if (itemKey.classTags != classPath.one.class && itemKey.classTags != classPath.two.class) {
                        delete returnTable[item];
                        continue;
                    }
                }

                //Merge .stats object, into .tags array
                for (let statistic in itemKey.stats) {
                    if (statistic) {itemKey.tags.push(statistic);}
                }
                //If no tags are found, delete this entry and go to the next
                if (itemKey.tags.length === 0) {
                    delete returnTable[item];
                    continue;
                }
                let found = false;
                for (let tag of itemKey.tags) {
                    for (let filters of filter) {
                        if (tag === filters) {
                            found = true;
                            break;
                        }
                    }
                    if (found) {break;}
                }
                //If we never found a stat matching the filter, delete it
                if (!found) {delete returnTable[item];}
            }
        }
        //Debug logging
        let applied = "SKIPPED";
        let filterSample = "";
        if (filter) {
            applied = "APPLIED";
            filterSample = ` / Start [0]:"${filter[0]}" - End [${filter.length-1}]:"${filter[filter.length-1]}"`
        }
        cycles.debugPushLine(`-- Filters/Tags - ${applied} on ${debugTable}${filterSample}`);
        return returnTable;
    },
    * reinstanceVars() {
        let path = cycles.vars;
        let conversionTable = [...filters.types.tags.filter[0]]
        let tagsFilter = conversionTable;
        let filterPath = filters.types;

        readSelection("distributedCounter").innerHTML = 0;
        
        //Convert from user-friendly stat names, to the names I use in the backend.
        cycles.debugPushLine("FIND STAT TAG FILTERS");
        cyclesLoop.updateSetupStep("Converting stat tag filters",true,1);
        if (conversionTable.length) {
            cycles.debugPushLine("- Converting to back-end names");
            for (let tags in tagsFilter) {
                for (let stats in referenceTable) {
                    if (referenceTable[tagsFilter[tags]]) {tagsFilter[tags] = referenceTable[tagsFilter[tags]];}
                }
            }
            cycles.debugPushLine("- Finished");
        }
        //Needed. If no tag filtering is in place, I need it to be null or an undefined array for everything else to work
        else {tagsFilter = null;cycles.debugPushLine("- None found");}

        cycles.debugPushLine("APPLYING STAT FILTERS TO TABLES...");
        cyclesLoop.updateSetupStep("Filtering by Stat Tags",false,1);
        cycles.debugPushLine("- Starting Amulets");
        yield;
        path.amulets.Table = cycles.applyTableFilter(amulets,cycles.applyTagFilter(amulets,tagsFilter,"Amulets"),filterPath.amulet.filter[1],filterPath.amulet.filter[2][0],"Amulets");
        cycles.debugPushLine("- Amulets Completed<br>- Starting Rings");
        yield;
        path.rings.Table = cycles.applyTableFilter(rings,cycles.applyTagFilter(rings,tagsFilter,"Rings"),filterPath.ring.filter[1],filterPath.ring.filter[2][0],"Rings");
        cycles.debugPushLine("- Rings Completed<br>- Starting Relics");
        yield;
        path.relics.Table = cycles.applyTableFilter(relics,cycles.applyTagFilter(relics,tagsFilter,"Relics"),filterPath.relic.filter[1],filterPath.relic.filter[2][0],"Relics");
        cycles.debugPushLine("- Relics Completed<br>- Starting Fragments");
        yield;
        path.fragments.Table = cycles.applyTableFilter(fragments,cycles.applyTagFilter(fragments,tagsFilter,"Fragments"),filterPath.fragment.filter[1],filterPath.fragment.filter[2][0],"Fragments");
        cycles.debugPushLine("- Fragments Completed<br>- Starting Consumables");
        yield;
        path.consumables.Table = cycles.applyTableFilter(quickUses,cycles.applyTagFilter(quickUses,tagsFilter,"Consumables"),filterPath.consumable.filter[1],filterPath.consumable.filter[2][0],"Consumables");
        cycles.debugPushLine("- Consumables Completed<br>- Starting Primaries");
        yield;
        path.primaries.Table = cycles.applyTableFilter(primary,cycles.applyTagFilter(primary,tagsFilter,"Primaries"),filterPath.primary.filter[1],filterPath.primary.filter[2][0],"Primaries");
        cycles.debugPushLine("- Primaries Completed<br>- Starting Melee");
        yield;
        path.melee.Table = cycles.applyTableFilter(melee,cycles.applyTagFilter(melee,tagsFilter,"Melee"),filterPath.melee.filter[1],filterPath.melee.filter[2][0],"Melee");
        cycles.debugPushLine("- Melee Completed<br>- Starting Secondaries");
        yield;
        path.secondaries.Table = cycles.applyTableFilter(secondary,cycles.applyTagFilter(secondary,tagsFilter,"Secondaries"),filterPath.secondary.filter[1],filterPath.secondary.filter[2][0],"Secondaries");
        cycles.debugPushLine("- Secondaries Completed<br>- Starting Ranged Mutators");
        yield;
        path.primaryMutators.Table = cycles.applyTableFilter(rangedMutators,cycles.applyTagFilter(rangedMutators,tagsFilter,"Ranged Mutators"),filterPath.primaryMutator.filter[1],filterPath.primaryMutator.filter[2][0],"Ranged Mutators");
        cycles.debugPushLine("- Ranged Mutators Completed<br>- Starting Melee Mutators");
        yield;
        path.meleeMutators.Table = cycles.applyTableFilter(meleeMutators,cycles.applyTagFilter(meleeMutators,tagsFilter,"Melee Mutators"),filterPath.meleeMutator.filter[1],filterPath.meleeMutator.filter[2][0],"Melee Mutators");
        cycles.debugPushLine("- Melee Mutators Completed<br>- Starting Primary Mods");
        yield;
        path.primaryMods.Table = cycles.applyTableFilter(rangedMods,cycles.applyTagFilter(rangedMods,tagsFilter,"Ranged Mods"),filterPath.primaryMod.filter[1],filterPath.primaryMod.filter[2][0],"Ranged Mods");
        cycles.debugPushLine("- Ranged Mods Completed");
        yield;

        cycles.debugPushLine("- Starting Concoctions");
        yield;
        path.concoctions.Table = cycles.applyTableFilter(concoctions,cycles.applyTagFilter(concoctions,tagsFilter,"Concoctions"),filterPath.concoction.filter[1],filterPath.concoction.filter[2][0],"Concoctions");
        cycles.debugPushLine("- Concoctions Completed<br>- Starting Armor - Helmets");
        yield;
        path.helmets.Table = cycles.applyTableFilter(helmets,cycles.applyTagFilter(helmets,["Armor"],"Helmets"),filterPath.helmets.filter[1],filterPath.helmets.filter[2][0],"Helmets");
        cycles.debugPushLine("- Armor - Helmets Completed<br>- Starting Armor - Chests");
        yield;
        path.chests.Table = cycles.applyTableFilter(chests,cycles.applyTagFilter(chests,["Armor"],"Chests"),filterPath.chests.filter[1],filterPath.chests.filter[2][0],"Chests");
        cycles.debugPushLine("- Armor - Chests Completed<br>- Starting Armor - Hands");
        yield;
        path.hands.Table = cycles.applyTableFilter(hands,cycles.applyTagFilter(hands,["Armor"],"Hands"),filterPath.hands.filter[1],filterPath.hands.filter[2][0],"Hands");
        cycles.debugPushLine("- Armor - Hands Completed<br>- Starting Armor - Legs");
        yield;
        path.legs.Table = cycles.applyTableFilter(legs,cycles.applyTagFilter(legs,["Armor"],"Legs"),filterPath.legs.filter[1],filterPath.legs.filter[2][0],"Legs");
        cycles.debugPushLine("- Armor - Hands Completed");
        yield;
        cycles.debugPushLine("FILTERS COMPLETED");
        yield;


        //----------------------------------------------------------------------------------------------
        //----------------------------------------------------------------------------------------------
        //----------------------------------------------------------------------------------------------
        //----------------------------------------------------------------------------------------------
        //----------------------------------------------------------------------------------------------



        cycles.debugPushLine("APPLYING ITEM FILTERS TO TABLES...");
        cyclesLoop.updateSetupStep("Applying Item Filters to Amulets",false,1);
        yield;
        path.amuletCombos = cycles.generateAnyCombinations(filters.types.amulet.filter[0],[cycles.vars.amulets.Table],1,false,true);
        cyclesLoop.updateSetupStep("Applying Item Filters to Rings",false,1);
        yield;
        path.ringCombos = cycles.generateAnyCombinations(filters.types.ring.filter[0],[cycles.vars.rings.Table],4,false,true);
        cyclesLoop.updateSetupStep("Applying Item Filters to Relics",false,1);
        yield;
        path.relicCombos = cycles.generateAnyCombinations(filters.types.relic.filter[0],[cycles.vars.relics.Table],1,false,false);
        cyclesLoop.updateSetupStep("Applying Item Filters to Fragments",false,1);
        yield;
        path.fragmentCombos = cycles.generateAnyCombinations(filters.types.fragment.filter[0],[cycles.vars.fragments.Table],3,false,false);
        cyclesLoop.updateSetupStep("Applying Item Filters to Consumables",false,1);
        yield;
        path.consumableCombos = cycles.generateAnyCombinations(filters.types.consumable.filter[0],[cycles.vars.consumables.Table],null,false,false);
        cyclesLoop.updateSetupStep("Applying Item Filters to Primaries",false,1);
        yield;
        path.primaryCombos = cycles.generateAnyCombinations(filters.types.primary.filter[0],[cycles.vars.primaries.Table],1,false,false);
        cyclesLoop.updateSetupStep("Applying Item Filters to Melee",false,1);
        yield;
        path.meleeCombos = cycles.generateAnyCombinations(filters.types.melee.filter[0],[cycles.vars.melee.Table],1,false,false);
        cyclesLoop.updateSetupStep("Applying Item Filters to Secondaries",false,1);
        yield;
        path.secondaryCombos = cycles.generateAnyCombinations(filters.types.secondary.filter[0],[cycles.vars.secondaries.Table],1,false,false);
        let rangedMutatorLocks = [];
        //Combine lock filters for primary/secondary mutators
        cyclesLoop.updateSetupStep("Applying Item Filters to Ranged Mutators",false,1);
        yield;
        if (filters.types.primaryMutator.filter[0].length) {
            rangedMutatorLocks.push(filters.types.primaryMutator.filter[0]);
            if (filters.types.secondaryMutator.filter[0].length) {
                rangedMutatorLocks.push(filters.types.secondaryMutator.filter[0]);
            }
        }
        else if (!filters.types.primaryMutator.filter[0].length && filters.types.secondaryMutator.filter[0].length) {
            rangedMutatorLocks.push();
            rangedMutatorLocks.push(filters.types.secondaryMutator.filter[0]);
        }
        path.rangedMutatorCombos = cycles.generateAnyCombinations(rangedMutatorLocks,[cycles.vars.primaryMutators.Table],2,false,false);
        //Generate Melee Mutators combos
        cyclesLoop.updateSetupStep("Applying Item Filters to Melee Mutators",false,1);
        yield;
        path.meleeMutatorCombos = cycles.generateAnyCombinations(filters.types.meleeMutator.filter[0],[cycles.vars.meleeMutators.Table],1,false,false);
        //Generate Primary Mods combos
        let rangedModLocks = [];
        //Combine lock filters for primary/secondary mods
        cyclesLoop.updateSetupStep("Applying Item Filters to Ranged Mods",false,1);
        yield;
        if (filters.types.primaryMod.filter[0].length) {
            rangedModLocks.push(filters.types.primaryMod.filter[0]);
            if (filters.types.secondaryMod.filter[0].length) {rangedModLocks.push(filters.types.secondaryMod.filter[0]);}
        }
        else if (!filters.types.primaryMod.filter[0].length && filters.types.secondaryMod.filter[0].length) {
            rangedModLocks.push();
            rangedModLocks.push(filters.types.secondaryMod.filter[0]);
        }
        path.rangedModCombos = cycles.generateAnyCombinations(rangedModLocks,[cycles.vars.primaryMods.Table],2,false,false);
        // //concoctions
        cyclesLoop.updateSetupStep("Applying Item Filters to Variable Concoction Tables",false,1);
        yield;
        path.concMegaTable = {};
        path.concMegaTable.concoctionCombos1 = cycles.generateAnyCombinations(filters.types.concoction.filter[0],[cycles.vars.concoctions.Table],1,false,false);
        path.concMegaTable.concoctionCombos2 = cycles.generateAnyCombinations(filters.types.concoction.filter[0],[cycles.vars.concoctions.Table],2,false,false);
        path.concMegaTable.concoctionCombos3 = cycles.generateAnyCombinations(filters.types.concoction.filter[0],[cycles.vars.concoctions.Table],3,false,false);
        path.concMegaTable.concoctionCombos4 = cycles.generateAnyCombinations(filters.types.concoction.filter[0],[cycles.vars.concoctions.Table],4,false,false);
        path.concMegaTable.concoctionCombos5 = cycles.generateAnyCombinations(filters.types.concoction.filter[0],[cycles.vars.concoctions.Table],5,false,false);
        path.concMegaTable.concoctionCombos6 = cycles.generateAnyCombinations(filters.types.concoction.filter[0],[cycles.vars.concoctions.Table],6,false,false);
        path.concMegaTable.concoctionCombos7 = cycles.generateAnyCombinations(filters.types.concoction.filter[0],[cycles.vars.concoctions.Table],7,false,false);

        cyclesLoop.updateSetupStep("Defining Armor Tables",false,1);
        yield;
    
        let armorLocksArray = [];
        armorLocksArray.push(filters.types.helmets.filter[0].length ? filters.types.helmets.filter[0] :  null);
        armorLocksArray.push(filters.types.chests.filter[0].length ? filters.types.chests.filter[0] : null);
        armorLocksArray.push(filters.types.legs.filter[0].length ? filters.types.legs.filter[0] : null);
        armorLocksArray.push(filters.types.hands.filter[0].length ? filters.types.hands.filter[0] : null);

        let armorTablesArray = [cycles.vars.helmets.Table,cycles.vars.chests.Table,cycles.vars.legs.Table,cycles.vars.hands.Table,]
        cycles.vars.baseArmorCombos.Table = cycles.generateAnyCombinations(armorLocksArray,armorTablesArray,4,true,false);
        cycles.vars.armorCombos.Table = [...cycles.vars.baseArmorCombos.Table];
        cycles.vars.weightFirst.Table = [...cycles.vars.baseArmorCombos.Table].sort((a, b) => +a[5] - +b[5]);

        cycles.vars.weightFirst.Table = cycles.createCustomWeightTable(cycles.vars.weightFirst.Table);
        let armorFirst = cycles.createSortedArmorTable(false);//TODO:Shift the armor to the same function as weight, later. Not a priority, still fast. Remember to look at armor pings when I do this.
        cycles.vars.armorCombos.Table = [...armorFirst];

        let classSet = [`${globalRecords.archs.one.class}`,`${globalRecords.archs.two.class}`];
        let abilitySet = [`${globalRecords.archs.one.ability}`,`${globalRecords.archs.two.ability}`];


        let comboCounter = 0;
        cyclesLoop.updateSetupStep("Calculating Total Combinations...",false,1);
        yield;
        //These are all items that do NOT contribute to concoction limits, and as such can be calculated beforehand via easy multiplication
        let staticSets = (path.relicCombos.length
            * path.fragmentCombos.length
            // * path.consumableCombos.length
            * path.primaryCombos.length
            * path.secondaryCombos.length
            * path.meleeCombos.length
            * path.rangedMutatorCombos.length
            * path.meleeMutatorCombos.length
            * path.rangedModCombos.length);
        //Combinations counter loops

        let counterChecker = 0
        for (const ringCombo of path.ringCombos) {
            for (const amulet of path.amuletCombos) {
                let currentLimit = cyclesLoop.combineConcoctionLimit(ringCombo,amulet,classSet);//TODO: Add more here if more item types start adding concoction limits
                let switchLength = path.concMegaTable[`concoctionCombos${currentLimit}`].length;

                if (switchLength<1) {switchLength=1;}
                comboCounter += switchLength;
                counterChecker++
                if (counterChecker > 100000) {counterChecker = 0;yield;}
            }
        }
        let moduloFactor = 1;
        comboCounter *= staticSets; //Get the number of combos possible via variable concoction limits, and multi it by the static set precalc number for total combos possible.
        //If this is going to take way too long, then quit and let the user know.
        currentQueryLimit = 10000000000;
        if (comboCounter > currentQueryLimit && !cycles.vars.bypassLimit) {
            cyclesLoop.generationStop("","",true,true);
            alert(`Possible combinations (${comboCounter.toLocaleString()}) exceeds the limit of 10 BILLION.\nAdjust your filters and try again as there is no feasible way in hell you're getting the answer you need by the time you need it, if we let this query continue.`);
            yield;
        }
        else {
            cycles.vars.totalDisplayCombinations = comboCounter;

            let cycleCounter = 0;
            let lastSent = 0;

            let targetDamageCategory;

            let targetStatistic = filters.types.vars.targetStatistic;
            if (targetStatistic[0] === abilitySet[0]) {targetDamageCategory = "ability1Breakdown"}
            else if (targetStatistic[0] === abilitySet[1]) {targetDamageCategory = "ability2Breakdown"}

            let messageComboArray = [];
            let threadCount = cycles.vars.threadCount;
            let workerIdentifier = 0;
            let sentSoFar = 0;

            cyclesLoop.updateSetupStep("Creating Web Workers",false,1);
            yield;

            let cyclesCustom = {}
                cyclesCustom.armorCombos = cycles.vars.armorCombos;//armor tables
                cyclesCustom.weightFirst = cycles.vars.weightFirst;
                cyclesCustom.totalDisplayCombinations = cycles.vars.totalDisplayCombinations;//general variables
                cyclesCustom.stopCycles = cycles.vars.stopCycles;
                cyclesCustom.setupCompleted = cycles.vars.setupCompleted;
                cyclesCustom.armorIsGenerated = cycles.vars.armorIsGenerated;
                cyclesCustom.bypassLimit = cycles.vars.bypassLimit;
                cyclesCustom.debug = cycles.vars.debug;
                cyclesCustom.cycleTimer = cycles.vars.cycleTimer;
                cyclesCustom.cycleTotalTimer = cycles.vars.cycleTotalTimer;
                cyclesCustom.cycleCounter = cycles.vars.cycleCounter;
                cyclesCustom.counterInt = cycles.vars.counterInt;
                cyclesCustom.printedSubObjects = cycles.vars.printedSubObjects;
                cyclesCustom.threadCount = cycles.vars.threadCount;
                cyclesCustom.workersRunning = cycles.vars.workersRunning;
                cyclesCustom.lastTimerEvaluation = cycles.vars.lastTimerEvaluation;
                cyclesCustom.finishedIteratorSetup = cycles.vars.finishedIteratorSetup;

            cyclesLoop.updateSetupStep("Exporting data to Web Workers",false,1);

            globalRecords.consumableCombo = path.consumableCombos;

            for (let i=1;i<=threadCount;i++) {
                cyclesLoop.startCycleWorker(i,threadCount);
                cycles.debugPushLine(`Initiating Web Worker #${i}`);

                let cycleWorker = `cycleWorker${i}`
                workers[cycleWorker].postMessage({command:`copyFilteredTables`,cyclesCustom});
                workers[cycleWorker].postMessage({command:`copyTableFilters`,data:filters.types});
                workers[cycleWorker].postMessage({command:`copyDataTables`,data:globalRecords});
                cycles.vars.workersRunning += 1;
                readSelection("openThreadsDisplay").innerHTML = cycles.vars.workersRunning;
                yield;
            }
            cyclesLoop.updateSetupStep("Completed Setup",false,1);
            cycles.debugPushLine(`TOTAL COMBOS: ${comboCounter}`);
            cycles.debugPushLine(`STARTING QUERY CYCLES...`);

            cycles.vars.baseArmorCombos = {};
            cycles.vars.armorCombos = {};
            cycles.vars.weightFirst = {};
            // cycles.vars.amulets = {};
            // cycles.vars.rings = {};
            // cycles.vars.relics = {};
            // cycles.vars.fragments = {};
            // cycles.vars.concoctions = {};
            // cycles.vars.consumables = {};
            // cycles.vars.primaries = {};
            // cycles.vars.melee = {};
            // cycles.vars.secondaries = {};
            // cycles.vars.primaryMutators = {};
            // cycles.vars.meleeMutators = {};
            // cycles.vars.primaryMods = {};
            cycles.vars.helmets = {};
            cycles.vars.chests = {};
            cycles.vars.hands = {};
            cycles.vars.legs = {};

            storageRef = cycles.vars;
            storageRef.queueStorage = [];

            let firstRunPosts = 0;
            let maxStorageArrays = Math.floor(threadCount*1.2)
            const quickUse = path.consumableCombos;

            for (const ringSet of path.ringCombos) {
                for (const amulet of path.amuletCombos) {
                    //Needed to extract the current concoction limit.
                    let currentLimit = cyclesLoop.combineConcoctionLimit(ringSet,amulet,classSet);//TODO: Add more item types if they add concLimit
                    let currentTable = path.concMegaTable[`concoctionCombos${currentLimit}`];
                    for (const relic of path.relicCombos) {
                    for (const stick of path.meleeCombos) {
                    for (const gun2 of path.secondaryCombos) {
                    for (const gun1 of path.primaryCombos) {
                    for (const rMod1 of path.rangedModCombos) {
                    for (const fragmentSet of path.fragmentCombos) {
                    for (const mMutator1 of path.meleeMutatorCombos) {
                    for (const rMutator1 of path.rangedMutatorCombos) {
                    for (let conc=0;conc<currentTable.length;conc++) {
                    cycleCounter++;
                    lastSent++;

                    // console.log({ringSet,relic,fragmentSet,amulet,concoction:currentTable[conc],
                    //     gun1,gun2,stick,rangedMutators: rMutator1, meleeMutators: mMutator1,rangedMods: rMod1})

                    messageComboArray.push({ringSet,relic,fragmentSet,amulet,concoction:currentTable[conc],
                        gun1,gun2,stick,rangedMutators: rMutator1, meleeMutators: mMutator1,rangedMods: rMod1});

                    if (lastSent === 100000 || cycleCounter === comboCounter) {
                        sentSoFar += lastSent;
                        readSelection("distributedCounter").innerHTML = sentSoFar.toLocaleString();
                        lastSent = 0;

                        if (firstRunPosts < threadCount) {
                            firstRunPosts++;
                            if (firstRunPosts === threadCount) {cycles.vars.finishedIteratorSetup = true;}
                            workerIdentifier++;
                            let cycleWorkerLoop = `cycleWorker${workerIdentifier}`
                            workers[cycleWorkerLoop].postMessage({command:`dumpCombos`,messageComboArray,workerIdentifier});
                            messageComboArray = [];
                            yield;
                        }
                        else {
                            while (storageRef.queueStorage.length === maxStorageArrays) {
                                yield;
                            }

                            storageRef.queueStorage.push(messageComboArray);
                            messageComboArray = [];
                            yield;
                        }
                    }
                    }}}}}}}}}
                }  
            }
            // delete ringCombos;
            // delete amuletCombos;
            // delete concMegaTable;
            // delete relicCombos;
            // delete meleeCombos;
            // delete secondaryCombos;
            // delete primaryCombos;
            // delete consumableCombos;
            cycles.vars.baseArmorCombos = {};
            cycles.vars.armorCombos = {};
            cycles.vars.weightFirst = {};
            cycles.vars.amulets = {};
            cycles.vars.rings = {};
            cycles.vars.relics = {};
            cycles.vars.fragments = {};
            cycles.vars.concoctions = {};
            cycles.vars.consumables = {};
            cycles.vars.primaries = {};
            cycles.vars.melee = {};
            cycles.vars.secondaries = {};
            cycles.vars.primaryMutators = {};
            cycles.vars.meleeMutators = {};
            cycles.vars.primaryMods = {};
            cycles.vars.helmets = {};
            cycles.vars.chests = {};
            cycles.vars.hands = {};
            cycles.vars.legs = {};
            delete cycles.vars.ringCombos;
            delete cycles.vars.amuletCombos;
            delete cycles.vars.concMegaTable;
            delete cycles.vars.relicCombos;
            delete cycles.vars.meleeCombos;
            delete cycles.vars.secondaryCombos;
            delete cycles.vars.primaryCombos;
            delete cycles.vars.consumableCombos;
            console.log(`Completed distributing all ${sentSoFar.toLocaleString()} combos to ${threadCount} workers.`);
        }
        return;
    },
    reinstanceJSON(table) {return JSON.parse(JSON.stringify(table));},
    removeExclusions(table,filter) {
        for (let i=0;i<filter.length;i++) {
            delete table[filter[i]];
        }
        return table;
    },
    enforceInclusions(table,filter) {
        let tempTable = {};
        for (let i=0;i<filter.length;i++) {
            //If the inclusion item was filtered out in tags, add it back
            if (!table[filter[i]]) {table[filter[i]] = cycles.extractTableEntry(filter[i]);}
            tempTable[filter[i]] = table[filter[i]];
        }
        return tempTable;
    },
    applyTableFilter(refTable,table,filterPath,occlusionType,debugTable) {
        let returnTable;
        if (filterPath.length && !occlusionType) {returnTable = cycles.removeExclusions(table,filterPath);}
        else if (filterPath.length && occlusionType) {returnTable = cycles.enforceInclusions(table,filterPath);}
        else {returnTable = table;}
        //Debug logging
        let applied = "SKIPPED";
        let emptyOrNot = "empty ";
        let type = "EXCLUSION"
        let filterSample = "";
        if (filterPath.length) {
            applied = "APPLIED";
            emptyOrNot = "";
            filterSample = ` / Start [0]:"${filterPath[0]}" - End [${filterPath.length-1}]:"${filterPath[filterPath.length-1]}"`
        }
        if (occlusionType) {type = "INCLUSION";}
        cycles.debugPushLine(`-- Filters/Occlusions - ${applied} ${emptyOrNot}${type} on ${debugTable}${filterSample}`);

        let refKeys = Object.keys(refTable);

        for (let key in returnTable) {
            if (refKeys.includes(key)) {
                returnTable[key].ID = refKeys.indexOf(key);
            }
        }

        return returnTable;
    },
    extractTableEntry(item) {
        let ID;
        if (amulets[item]) {
            dataRef = Object.keys(amulets);
            for (let i=0;i<dataRef.length;i++) {if (dataRef[i] === item) {ID = i;}}
        }
        if (rings[item]) {
            dataRef = Object.keys(rings);
            for (let i=0;i<dataRef.length;i++) {if (dataRef[i] === item) {ID = i;}}
        }
        if (relics[item]) {
            dataRef = Object.keys(relics);
            for (let i=0;i<dataRef.length;i++) {if (dataRef[i] === item) {ID = i;}}
        }
        if (fragments[item]) {
            dataRef = Object.keys(fragments);
            for (let i=0;i<dataRef.length;i++) {if (dataRef[i] === item) {ID = i;}}
        }
        if (primary[item]) {
            dataRef = Object.keys(primary);
            for (let i=0;i<dataRef.length;i++) {if (dataRef[i] === item) {ID = i;}}
        }
        if (melee[item]) {
            dataRef = Object.keys(melee);
            for (let i=0;i<dataRef.length;i++) {if (dataRef[i] === item) {ID = i;}}
        }
        if (secondary[item]) {
            dataRef = Object.keys(secondary);
            for (let i=0;i<dataRef.length;i++) {if (dataRef[i] === item) {ID = i;}}
        }
        if (rangedMutators[item[0]]) {
            dataRef = Object.keys(rangedMutators);
            for (let i=0;i<dataRef.length;i++) {
                if (dataRef[i] === item[0]) { ID = i;}
            }
        }
        if (meleeMutators[item]) {
            dataRef = Object.keys(meleeMutators);
            for (let i=0;i<dataRef.length;i++) {if (dataRef[i] === item) {ID = i;}}
        }
        if (rangedMods[item]) {
            dataRef = Object.keys(rangedMods);
            for (let i=0;i<dataRef.length;i++) {if (dataRef[i] === item) {ID = i;}}
        }
        if (concoctions[item]) {
            dataRef = Object.keys(concoctions);
            for (let i=0;i<dataRef.length;i++) {if (dataRef[i] === item) {ID = i;}}
        }
        if (quickUses[item]) {
            dataRef = Object.keys(quickUses);
            for (let i=0;i<dataRef.length;i++) {if (dataRef[i] === item) {ID = i;}}
        }

        if (ID) {return {ID}}

        postMessage({command: `pushAlert`, data: `cycles.extractTableEntry(${item}) failed to find an valid item entry.`});
    },
    checkConcoctionLimit(table,slots,item1,item2,item3,item4,item5,item6,item7) {
        table1 = table[0];
        let limit = 0;
        //If the item is a Locked item that was excluded by filters, add it back to the table.
        if (!table1[item1]) {table1[item1] = cycles.extractTableEntry(item1);}
        if (table1[item1].stats) {
            if (table1[item1].stats) {limit += table1[item1].stats.ConcLimit;}
        }
        if (slots > 1) {
            table2 = table.length>1 ? table[1] : table[0];
            if (!table2[item2]) {table2[item2] = cycles.extractTableEntry(item2);}
            if (table2[item2].stats) {
                if (table2[item2].stats.ConcLimit) {limit += table2[item2].stats.ConcLimit;}
            }
        }
        if (slots > 2) {
            table3 = table.length>2 ? table[2] : table[0];
            if (!table2[item3]) {table2[item3] = cycles.extractTableEntry(item3);}
            if (table3[item3].stats.ConcLimit) {
                if (table3[item3].stats.ConcLimit) {limit += table3[item3].stats.ConcLimit;}
            }
        }
        if (slots > 3) {
            table4 = table.length>3 ? table[3] : table[0];
            if (!table4[item4]) {table4[item4] = cycles.extractTableEntry(item4);}
            if (table4[item4].stats.ConcLimit) {
                if (table4[item4].stats.ConcLimit) {limit += table4[item4].stats.ConcLimit;}
            }
        }
        if (slots > 4) {
            table5 = table.length>4 ? table[4] : table[0];
            if (!table5[item5]) {table5[item5] = cycles.extractTableEntry(item5);}
            if (table5[item5].stats.ConcLimit) {
                if (table5[item5].stats.ConcLimit) {limit += table5[item5].stats.ConcLimit;}
            }
        }
        if (slots > 5) {
            table6 = table.length>5 ? table[5] : table[0];
            if (!table6[item6]) {table6[item6] = cycles.extractTableEntry(item6);}
            if (table6[item6].stats.ConcLimit) {
                if (table6[item6].stats.ConcLimit) {limit += table6[item6].stats.ConcLimit;}
            }
        }
        if (slots > 6) {
            table7 = table.length>6 ? table[6] : table[0];
            if (!table7[item7]) {table7[item7] = cycles.extractTableEntry(item7);}
            if (table7[item7].stats.ConcLimit) {
                if (table7[item7].stats.ConcLimit) {limit += table7[item7].stats.ConcLimit;}
            }
        }
        if (!limit) {limit=0;}
        return limit;
    },
    createSortedArmorTable(weightFirst) {
        let whatToCallIt = {};

        let path = !weightFirst ? cycles.vars.armorCombos.Table : cycles.vars.weightFirst.Table;

        for (let i=0;i<path.length;i++) {
            let armorObject = {helmet:path[i][0],chest:path[i][1],leg:path[i][2],hand:path[i][3]};
            let totalArmor = path[i][4];
            let totalWeight = path[i][5];

            let first = !weightFirst ? totalArmor : totalWeight;
            let second = !weightFirst ? totalWeight : totalArmor;

            if (whatToCallIt[first] === undefined) {
                whatToCallIt[first] = [{[second]: armorObject}];
            }
            else {
                whatToCallIt[first].push({[second]: armorObject});
            }
        }

        let ascendingNumericString = (a, b) => {
            const keyA = +a;
            const keyB = +b;
            return keyA - keyB;
        }
        let ascendingFirstKey = (a, b) => {
            const keyA = +Object.keys(a)[0];
            const keyB = +Object.keys(b)[0];
            return keyA - keyB;
        }

        let sortedFirstKeys = Object.keys(whatToCallIt).sort(ascendingNumericString);

        return sortedFirstKeys.map(function(x){
            return {
                [x]: whatToCallIt[x]
                    .sort(ascendingFirstKey)
            }
        })
    },
    createCustomWeightTable(path) {
        let valueStorage = {};

        //TODO: We can skip the loop here if we insert this into the armor combo gen as a whole.
        //Would allow us to more easily filter, which we can't filter armor pieces at all right now
        //Would also allow us to skip storing the base 370k table, and condense functions bc this is all done between 3 when it could be one
        for (let i=0;i<path.length;i++) {
            let innerPath = path[i];
            const armorValue = innerPath[4];
            const weightKey = innerPath[5];

            // If the weight is encountered for the first time or if the current combination has better armor
            if (valueStorage[weightKey] === undefined || valueStorage[weightKey].armorValue <= armorValue) {
                valueStorage[weightKey] = {helmet:innerPath[0],chest:innerPath[1],leg:innerPath[2],hand:innerPath[3],armorValue};
            }
        }
        let valueKeys = Object.keys(valueStorage);

        let objectArray = valueKeys.map(function(key) {return {[key]: valueStorage[key]} })
            .sort(function(a, b) {return +Object.keys(a)[0] - +Object.keys(b)[0];});

        for (let i=1;i<objectArray.length;i++) {
            const currentKey = Object.keys(objectArray[i])[0];
            const currentEntry = objectArray[i][currentKey];
            const previousEntry = objectArray[i-1][Object.keys(objectArray[i-1])[0]];
            //If the armor value of the previous weight is higher than the current armor value, use the prior armor combo instead
            if (currentEntry.armorValue <= previousEntry.armorValue) {objectArray[i][currentKey] = previousEntry;}
        }

        return objectArray;
    },
    generateAnyCombinations(specified,tables,slots,isArmor,hasConcoctions) {
        if (!tables) {alert(`ERROR: PREGENERATION ABORTED\n\nNo table references passed to combination pregeneration.\n\nSpecified: ${specified}\nSlots: ${slots}`);return [];}
        if (!slots && slots != null) {alert(`ERROR: PREGENERATION ABORTED\n\nNo slot count passed to combination pregeneration.\n\nSpecified: ${specified}\nTables: ${tables}`);return [];}

        if (!specified) {specified=null;}
        const slotNamesStarter = Object.keys(tables[0]);
        const combinations = [];

        if (slots === null) {
            for (entry of slotNamesStarter) {combinations.push(tables[0][entry].ID);}
            return combinations || [""];
        }

        //If the amount of slots exceeds the table length(so like if an inclusion of 1 ring applies) then cut the slots to match
        //If I ever feed multiple tables for each slot to iterate on like I made this for, I'll have to change how this part works
        //Right now this is skipped entirely if it's for armor combos, as there is no chance this will ever get used
        if (slots>slotNamesStarter.length) {
            if (slotNamesStarter.length>specified.length) {slots = slotNamesStarter.length;}
            else {slots = specified.length;}
        }

        let iterateSeparately = tables.length>1;
        let concoctionLimit = 1;
        let totalArmor,totalWeight; //Only used in loopSlot4
        //Each slot has its own function, and acts as a path branching mechanism for all subsequent slots
        function loopSlot1(index) {
            if (slots>=1) {
                let iteration = 0;
                const refTable = tables[0];
                //if slot 1 is locked/dedicated
                if (specified[0] || specified[0] === "") {
                    if (!iterateSeparately) {iteration = index;}
                    if (!refTable[specified[0]]) {
                        refTable[specified[0]] = cycles.extractTableEntry(specified[0])
                    }
                    if (slots===1) {combinations.push([refTable[specified[0]].ID]);}//Unless only 1 slot exists, then push the combo
                    else {loopSlot2(iteration,specified[0]);}//Otherwise head to slot 2 loops
                }
                //if the ring slots are not locked at all, then initiate all other loops within a loop for slot 1
                else {
                    for (let i=index;i<slotNamesStarter.length;i++) {
                        //If the option is blank, skip this iteration
                        if (!slotNamesStarter[i]) {continue;}
                        //No dupe check needed here as it's the first slot
                        if (!iterateSeparately) {iteration = i+1;}
                        if (slots===1) {
                            combinations.push([refTable[slotNamesStarter[i]].ID]);
                        }//If only 1 slot exists, push combo
                        else {loopSlot2(iteration,slotNamesStarter[i]);}//Otherwise continue to the next slot's loops
                    }
                }
            }
        }
        function loopSlot2(index,slot1) {
            if (slots>=2) {
                const slotNames = tables.length>=2 ? Object.keys(tables[1]) : slotNamesStarter;
                const refTable = tables.length>=2 ? tables[1] : tables[0];
                let iteration = 0;
                if (specified[1] || specified[1] === "") {
                    if (!iterateSeparately) {iteration = index;}
                    if (!refTable[specified[1]]) {
                        refTable[specified[1]] = cycles.extractTableEntry(specified[1])
                    }
                    if (slots===2) {combinations.push([refTable[slot1].ID,refTable[specified[1]].ID]);}
                    else {loopSlot3(iteration,slot1,specified[1]);}
                }
                else {
                    for (let i=index;i<slotNames.length;i++) {
                        if (slotNames[i] != slot1) {
                            if (!slotNames[i]) {continue;}
                            if (!iterateSeparately) {iteration = i+1;}
                            if (slots===2) {
                                combinations.push([refTable[slot1].ID,refTable[slotNames[i]].ID]);
                            }
                            else {loopSlot3(iteration,slot1,slotNames[i]);}
                        }
                    }
                }
            }
        }
        function loopSlot3(index,slot1,slot2) {
            if (slots>=3) {
                const slotNames = tables.length>=3 ? Object.keys(tables[2]) : slotNamesStarter;
                const refTable = tables.length>=3 ? tables[2] : tables[0];
                let iteration = 0;
                if (specified[2] || specified[2] === "") {
                    if (!iterateSeparately) {iteration = index;}
                    if (!refTable[specified[2]]) {
                        refTable[specified[2]] = cycles.extractTableEntry(specified[2])
                    }
                    if (slots===3) {combinations.push([refTable[slot1].ID,refTable[slot2].ID,refTable[specified[2]].ID]);}
                    else {loopSlot4(iteration,slot1,slot2,specified[2]);}
                }
                else {
                    for (let i=index;i<slotNames.length;i++) {
                        if (slotNames[i] != slot1 && slotNames[i] != slot2) {
                            if (!slotNames[i]) {continue;}
                            if (!iterateSeparately) {iteration = i+1;}
                            if (slots===3) {
                                if (hasConcoctions) {
                                    concoctionLimit = cycles.checkConcoctionLimit(tables,slots,slot1,slot2,slotNames[i]);
                                    combinations.push([slot1,slot2,slotNames[i],concoctionLimit]);
                                }
                                else {
                                    combinations.push([refTable[slot1].ID,refTable[slot2].ID,refTable[slotNames[i]].ID]);
                                }
                            }
                            else {loopSlot4(iteration,slot1,slot2,slotNames[i]);}
                        }
                    }
                }
            }
        }
        function loopSlot4(index,slot1,slot2,slot3) {
            if (slots>=4) {
                const slotNames = tables.length>=4 ? Object.keys(tables[3]) : slotNamesStarter;
                const refTable = tables.length>=4 ? tables[3] : tables[0];
                let iteration = 0;
                if (specified[3] || specified[3] === "") {
                    if (!iterateSeparately) {iteration = index;}
                    if (!refTable[specified[3]]) {
                        refTable[specified[3]] = cycles.extractTableEntry(specified[3])
                    }
                    if (slots===4) {combinations.push([refTable[slot1].ID,refTable[slot2].ID,refTable[slot3].ID,refTable[specified[3]].ID]);}
                    else {loopSlot5(iteration,slot1,slot2,slot3,specified[3]);}
                }
                else {
                    for (let i=index;i<slotNames.length;i++) {
                        if (slotNames[i] != slot1 && slotNames[i] != slot2 && slotNames[i] != slot3) {
                            if (!slotNames[i]) {continue;}
                            if (!iterateSeparately) {iteration = i+1;}
                            if (slots===4) {
                                if (!isArmor) {
                                    combinations.push([refTable[slot1].ID,refTable[slot2].ID,refTable[slot3].ID,refTable[slotNames[i]].ID]);
                                }
                                else if (isArmor) {
                                    totalArmor = armor.helmets[slot1].stats.Armor + armor.chests[slot2].stats.Armor + armor.legs[slot3].stats.Armor + armor.hands[slotNames[i]].stats.Armor;
                                    totalWeight = armor.helmets[slot1].stats.Encumbrance + armor.chests[slot2].stats.Encumbrance + armor.legs[slot3].stats.Encumbrance + armor.hands[slotNames[i]].stats.Encumbrance;
                                    
                                    totalArmor = +totalArmor.toFixed(2);totalWeight = +totalWeight.toFixed(2);
                                    // totalArmor = totalArmor;totalWeight = totalWeight;

                                    combinations.push([slot1,slot2,slot3,slotNames[i],totalArmor,totalWeight]);
                                }
                                else {
                                    alert(`Something went wrong with loopSlot4 in generateAnyCombinations()`);
                                }
                            }
                            else {loopSlot5(iteration,slot1,slot2,slot3,slotNames[i]);}
                        }
                    }
                }
            }
        }
        function loopSlot5(index,slot1,slot2,slot3,slot4) {
            if (slots>=5) {
                const slotNames = tables.length>=5 ? Object.keys(tables[4]) : slotNamesStarter;
                const refTable = tables.length>=5 ? tables[4] : tables[0];
                let iteration = 0;
                if (specified[4] || specified[4] === "") {
                    if (!iterateSeparately) {iteration = index;}
                    if (!refTable[specified[4]]) {
                        refTable[specified[4]] = cycles.extractTableEntry(specified[4])
                    }
                    if (slots===5) {
                        combinations.push([refTable[slot1].ID,refTable[slot2].ID,refTable[slot3].ID,refTable[slot4].ID,refTable[specified[4]].ID]);
                    }
                    else {loopSlot6(iteration,slot1,slot2,slot3,slot4,specified[4]);}
                }
                else {
                    for (let i=index;i<slotNames.length;i++) {
                        if (slotNames[i] != slot1 && slotNames[i] != slot2 && slotNames[i] != slot3 && slotNames[i] != slot4) {
                            if (!slotNames[i]) {continue;}
                            if (!iterateSeparately) {iteration = i+1;}
                            if (slots===5) {
                                combinations.push([refTable[slot1].ID,refTable[slot2].ID,refTable[slot3].ID,refTable[slot4].ID,refTable[slotNames[i]].ID]);
                            }
                            else {loopSlot6(iteration,slot1,slot2,slot3,slot4,slotNames[i]);}
                        }
                    }
                }
            }
        }
        function loopSlot6(index,slot1,slot2,slot3,slot4,slot5) {
            if (slots>=6) {
                const slotNames = tables.length>=6 ? Object.keys(tables[5]) : slotNamesStarter;
                const refTable = tables.length>=6 ? tables[5] : tables[0];
                let iteration = 0;
                if (specified[5] || specified[5] === "") {
                    if (!iterateSeparately) {iteration = index;}
                    if (!refTable[specified[5]]) {
                        refTable[specified[5]] = cycles.extractTableEntry(specified[5])
                    }
                    if (slots===6) {
                        combinations.push([refTable[slot1].ID,refTable[slot2].ID,refTable[slot3].ID,refTable[slot4].ID,refTable[slot5].ID,refTable[specified[5]].ID]);
                    }
                    else {loopSlot7(iteration,slot1,slot2,slot3,slot4,slot5,specified[5]);}
                }
                else {
                    for (let i=index;i<slotNames.length;i++) {
                        if (slotNames[i] != slot1 && slotNames[i] != slot2 && slotNames[i] != slot3 && slotNames[i] != slot4 && slotNames[i] != slot5) {
                            if (!slotNames[i]) {continue;}
                            if (!iterateSeparately) {iteration = i+1;}
                            if (slots===6) {
                                combinations.push([refTable[slot1].ID,refTable[slot2].ID,refTable[slot3].ID,refTable[slot4].ID,refTable[slot5].ID,refTable[slotNames[i]].ID]);
                            }
                            else {loopSlot7(iteration,slot1,slot2,slot3,slot4,slot5,slotNames[i]);}
                        }
                    }
                }
            }
        }
        function loopSlot7(index,slot1,slot2,slot3,slot4,slot5,slot6) {
            if (slots>=7) {
                const slotNames = tables.length>=7 ? Object.keys(tables[6]) : slotNamesStarter;
                const refTable = tables.length>=7 ? tables[6] : tables[0];
                // let iteration = 0; //Not needed for the final rotation
                if (specified[6] || specified[6] === "") {
                    if (slots===7) {
                        if (!iterateSeparately) {iteration = index;}
                        if (!refTable[specified[6]]) {
                            refTable[specified[6]] = cycles.extractTableEntry(specified[6])
                        }
                        combinations.push([refTable[slot1].ID,refTable[slot2].ID,refTable[slot3].ID,refTable[slot4].ID,refTable[slot5].ID,refTable[slot6].ID,refTable[specified[6]].ID]);
                    }
                    //Notify me if I end up passing more than 4 slots, will remind me to expand from here if needed.
                    else {
                        alert(`Too many slots passed. Only 7 will be adhered to.`);
                        if (!refTable[specified[6]]) {
                            refTable[specified[6]] = cycles.extractTableEntry(specified[6])
                        }
                        combinations.push([refTable[slot1].ID,refTable[slot2].ID,refTable[slot3].ID,refTable[slot4].ID,refTable[slot5].ID,refTable[slot6].ID,refTable[specified[6]].ID]);
                    }
                }
                else {
                    for (let i=index;i<slotNames.length;i++) {
                        if (slotNames[i]!=slot1 && slotNames[i]!=slot2 && slotNames[i]!=slot3 && slotNames[i]!=slot4 && slotNames[i]!=slot5 && slotNames[i]!=slot6) {
                            if (!slotNames[i]) {continue;}
                            if (slots===7) {
                                combinations.push([refTable[slot1].ID,refTable[slot2].ID,refTable[slot3].ID,refTable[slot4].ID,refTable[slot5].ID,refTable[slot6].ID,refTable[slotNames[i]].ID]);
                            }
                            else {
                                alert(`Too many slots passed. Only 7 will be adhered to.`);
                                combinations.push([refTable[slot1].ID,refTable[slot2].ID,refTable[slot3].ID,refTable[slot4].ID,refTable[slot5].ID,refTable[slot6].ID,refTable[slotNames[i]].ID]);
                            }
                        }
                    }
                }
            }
        }
        loopSlot1(0);
        if (!isArmor && !combinations.length) {
            let emptyArray = []
            for (let i=0;i<slots;i++) {
                emptyArray.push()
            }
            combinations.push(emptyArray);
        }
        return combinations;
    }
} 

let cyclesLoop = {
    "bestCombos": {
        "first": {},
        "second": {},
        "third": {},
    },
    //Stop the cycles
    generationStop(endType,cycleWorker,endedWithoutIssue,endedBeforeWorkerCreation) {

        cycles.vars.baseArmorCombos = {};
        cycles.vars.armorCombos = {};
        cycles.vars.weightFirst = {};
        cycles.vars.amulets = {};
        cycles.vars.rings = {};
        cycles.vars.relics = {};
        cycles.vars.fragments = {};
        cycles.vars.concoctions = {};
        cycles.vars.consumables = {};
        cycles.vars.primaries = {};
        cycles.vars.melee = {};
        cycles.vars.secondaries = {};
        cycles.vars.primaryMutators = {};
        cycles.vars.meleeMutators = {};
        cycles.vars.primaryMods = {};
        cycles.vars.helmets = {};
        cycles.vars.chests = {};
        cycles.vars.hands = {};
        cycles.vars.legs = {};
        delete cycles.vars.ringCombos;
        delete cycles.vars.amuletCombos;
        delete cycles.vars.concMegaTable;
        delete cycles.vars.relicCombos;
        delete cycles.vars.meleeCombos;
        delete cycles.vars.secondaryCombos;
        delete cycles.vars.primaryCombos;
        delete cycles.vars.consumableCombos;

        if (!cycleWorker && cycles.vars.workersRunning) {
            for (let i=1;i<=cycles.vars.threadCount;i++) {
                workers[`cycleWorker${i}`].terminate();
            }
        }
        else if (cycles.vars.workersRunning) {workers[cycleWorker].terminate();}

        if (!cycleWorker) {
        cycles.vars.stopCycles = true;
        readSelection("cycleSTOP").disabled = true;
        readSelection("cycleSTART").disabled = false;
        readSelection("settingsOpenThreads").disabled = false;
        // readSelection("searchImportButton").disabled = false;
        readSelection("settingsBoxHolderVisibility").style.display = "flex";
        readSelection("filtersDisplayMegaBox").style.maxWidth = "600px";
        // readSelection("filtersDisplayMegaBox").style.width = "50%";

        cycles.debugPushLine(`Worker: BUILD GENERATION ABORTED<br>`);
        cycles.vars.workersRunning = 0;
        globalRecords.currentBestStatistic = 0;
        readSelection("openThreadsDisplay").innerHTML = 0;
        }

        // if (!cycleWorker && !endedBeforeWorkerCreation) {
        //     for (let i=1;i<=cycles.vars.threadCount;i++) {
        //         workers[`cycleWorker${i}`].terminate();
        //     }
        // }
        // else if (!endedBeforeWorkerCreation) {workers[cycleWorker].terminate();}

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
    lockFilterUI(isTrue) {
        //TODO: Add UI disable toggles here later
    },
    //Start the cycles
    generationStart() {
        if (filters.types.vars.targetStatistic.includes("Havoc") && globalRecords.archs.one.ability != "Havoc Form" && globalRecords.archs.two.ability != "Havoc Form") {
            alert(`ERROR: You don't even have Havoc Form selected in your imported classes. Why are you trying to target it.`);
        }
        else if (cycles.vars.stopCycles && filters.types.vars.targetStatistic) {
            cycles.vars.stopCycles = false;
            if (cycles.vars.debug) {readSelection("comboDebug").innerHTML = ".DEBUG VIEW";}

        cycles.vars.finishedIteratorSetup = false;

        cycles.debugPushLine("UI LOCK START");
        //Assign the selected classes/abilitiess/traits over to the Alt records so that way if people mess with the UI calc it won't mess up the background calc
        //The stored imported archs so the currently selected archs don't get used every time.

        globalRecords.ALTsearchSettingsToggles = {...globalRecords.searchSettingsToggles};

        globalRecords.RECORDEDisCoop = `${globalRecords.ALTisCoop}`
        globalRecords.RECORDEDteamCount = +globalRecords.ALTteamCount.toString();
        globalRecords.RECORDEDminionCount = +globalRecords.ALTminionCount.toString();
        globalRecords.RECORDEDcomplexInput = +globalRecords.ALTcomplexInput.toString();
        globalRecords.RECORDEDspiritHealerStacks = +globalRecords.ALTspiritHealerStacks.toString();
        globalRecords.RECORDEDuseShields = globalRecords.ALTuseShields ? true : false;
        globalRecords.RECORDEDuseRelicHealing = globalRecords.ALTuseRelicHealing ? true : false;
        globalRecords.RECORDEDuseNonStandardDR = globalRecords.ALTuseNonStandardDR ? true : false;


        if (Array.isArray(playerDerivedStatistics[filters.types.vars.targetStatistic])) {
            filters.types.vars.oldTarget = [...playerDerivedStatistics[filters.types.vars.targetStatistic]];
        }
        else {
            filters.types.vars.oldTarget = `${filters.types.vars.targetStatistic}`;//This is purely for tracking what the statistic is for display purposes, if it is changed while running
        }

            readSelection("cycleSTOP").disabled = false;
            readSelection("cycleSTART").disabled = true;
            readSelection("settingsOpenThreads").disabled = true;

            readSelection("settingsBoxHolderVisibility").style.display = "none";
            readSelection("filtersDisplayMegaBox").style.maxWidth = "100%";
            // readSelection("searchImportButton").disabled = true;
            cycles.vars.counterInt = 0;//console.log(navigator.hardwareConcurrency)
            // cycles.vars.workersRunning = cycles.vars.threadCount;
            globalRecords.currentBestStatistic = 0;
            cycles.vars.lastTimerEvaluation = 0;
            cyclesLoop.bestCombos = {};

            cycles.iterator = cycles.reinstanceVars();
            function processVars() {
                if (cycles.iterator) {
                    const { done } = cycles.iterator.next();
                    if (done) {cycles.iterator = null;return;}
                    else if (cycles.vars.finishedIteratorSetup) {return;}
                    setTimeout(processVars, 0);
                }
            }
            processVars();
            cycles.debugPushLine("UI LOCK END");
        }
        else {
            alert('ERROR: No Targeted Statistic found. Query aborted.');
        }
    },
    updateSetupStep(stepString,start,moduloFactor) {
        readSelection("maxThreadsDisplay").innerHTML = cycles.vars.threadCount.toFixed(0);

        if (moduloFactor === 1) {
            let stepCount = readSelection("counterInt");
            if (start) {
                stepCount.innerHTML = 0;
                readSelection("comboCount").innerHTML = 18;
                readSelection(`combinationsDisplayCount`).style.width = `${0}%`;
                readSelection(`cycleProgressType`).innerHTML = "SETUP:"
                readSelection(`lastFound`).innerHTML = ""
            }
            else {stepCount.innerHTML = +stepCount.innerHTML + 1;}

            readSelection("cyclesTimeRemaining").innerHTML = stepString;//The step name display
            //18 total steps at the moment to reach cycle iterations, 19 technically with "completed setup"
            let percentWidth = (stepCount.innerHTML)/18;
            readSelection(`combinationsDisplayCount`).style.width = `${percentWidth*100}%`;
        }
    },
    startCycleWorker(identifier,threadCount) {
        let cycleWorker = `cycleWorker${identifier}`
        
        // cycles.vars.counterInt = 0;
        workers[cycleWorker] = new Worker(`cycleWorker.js`);
        workers[cycleWorker].onmessage = function(event) {
            const data = event.data;
            if (!data || data.command === `yieldCombination`) {
                let increments = 400000;//Determines how frequently the est time calculates, in terms of how many combos have passed
                let firstBatch = false;
                if (cycles.vars.counterInt === 0) {firstBatch = true;}
                cycles.vars.counterInt += data.cycleCounter;
                let counterInt = cycles.vars.counterInt;
                let totalCombos = cycles.vars.totalDisplayCombinations;
                if (counterInt>totalCombos) {cyclesLoop.generationStop(`ERROR: MISMATCHED COMBO COUNT\n${counterInt} > ${totalCombos}\n\nIf you ever see this, take note of your filters then join the discord linked at the bottom of any page, and ping Vash with the filter info.`)}
                else if (counterInt === totalCombos) {
                    // cycles.vars.workersRunning = 0;
                    // readSelection("openThreadsDisplay").innerHTML = 0;
                    let endTotalTime = performance.now();
                    endTotalTime -= cycles.vars.cycleTotalTimer;

                    endTotalTime = endTotalTime/1000;
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
                    readSelection(`cyclesTimeRemaining`).innerHTML = `Completed all build cycles in ${newEst.toFixed(0)}${units}${remainderString}`;
                    console.log(`Completed all build cycles in ${newEst.toFixed(0)}${units}${remainderString}`)
                    cycles.vars.stopCycles = true;
                    readSelection("cycleSTOP").disabled = true;
                    readSelection("cycleSTART").disabled = false;
                }

                    let percentWidth = (counterInt)/totalCombos;
                    readSelection(`counterInt`).innerHTML = counterInt.toLocaleString();
                    readSelection(`combinationsDisplayCount`).style.width = `${percentWidth*100}%`;

                    let timerChecker = Math.floor(counterInt/increments) * increments;
                
                    if (firstBatch) {
                        //If this is the first iteration, set things up. 1 is technically the start.
                        readSelection("comboCount").innerHTML = cycles.vars.totalDisplayCombinations.toLocaleString();
                        cycles.vars.cycleTimer = performance.now();
                        cycles.vars.cycleTotalTimer = performance.now();
                        cycles.vars.cycleCounter = 0;
                        readSelection(`cycleProgressType`).innerHTML = "BUILD TESTS:"
                        readSelection(`cyclesTimeRemaining`).innerHTML = `Calculating...`

                        let classPath1 = classInfo[globalRecords.archs.one.class]
                        let classPath2 = classInfo[globalRecords.archs.two.class]

                        readSelection("archetype1MAIN").src = classPath1.classIcon;
                        readSelection("comboHeadsUpMessage").style.display = "none";
                        if (globalRecords.archs.one.class === "") {
                            readSelection("archetype1MAIN").src = "/images/bufferCat.png"
                            readSelection("comboHeadsUpMessage").textContent  = "Who the actual fuck only uses a secondary archetype with no primary.";
                            readSelection("comboHeadsUpMessage").style.display = "block";
                        }
                        readSelection("archetype1abilityIcon").src = classPath1.abilities[globalRecords.archs.one.ability].image;
                        readSelection("archetype1MAINbg").style.background = `linear-gradient(225deg, ${classPath1.gradient[0]}, ${classPath1.gradient[1]},black)`;

                        readSelection("archetype2MAIN").src = classPath2.classIcon;
                        if (globalRecords.archs.two.class === "" && globalRecords.archs.one.class === "") {
                            readSelection("archetype1MAIN").src = "/images/swagCat.png"
                            readSelection("archetype2MAIN").src = "/images/swagCat.png"
                            readSelection("comboHeadsUpMessage").textContent  = "Did you forget to select your archetypes and traits, in settings?";
                        }
                        readSelection("archetype2abilityIcon").src = classPath2.abilities[globalRecords.archs.two.ability].image;
                        readSelection("archetype2MAINbg").style.background = `linear-gradient(135deg, ${classPath2.gradient[0]}, ${classPath2.gradient[1]},black)`;
                    }
                    //If the counter matches an increment level
                    else if (timerChecker > cycles.vars.lastTimerEvaluation && cycles.vars.workersRunning > 0) {
                        const newCycleTime = performance.now();
                        const timeDiff = newCycleTime - cycles.vars.cycleTimer;
                        cycles.vars.cycleTimer = newCycleTime;

                        const remainingCombos = totalCombos - counterInt;
                        cycles.vars.cycleCounter = counterInt;
                        const timePerCycles = timeDiff/increments;
                        const estTime = ((timePerCycles*remainingCombos)/1000);
                        const adjustedTime = estTime>60 ? 60 : 1;
                        let units = adjustedTime > 1 ? "m" : "s";
                        let newEst = estTime/adjustedTime;

                        let remainder = 0;
                        remainderString = ``;
                        if (units===`m` && newEst>60) {
                            remainder = newEst%60;
                            remainderString = ` ${remainder.toFixed(0)}m`;
                            newEst = (newEst-remainder)/60;
                            units = `hr`;
                        }
                        readSelection(`cyclesTimeRemaining`).innerHTML = `${newEst.toFixed(0)}${units}${remainderString}`;
                        cycles.vars.lastTimerEvaluation = timerChecker;
                    }
                    if (data.isUpdated) {
                        let preArmor = data.preArmor;
                        let cycleObject = data.cycleObject;


                        if (preArmor >= globalRecords.currentBestStatistic) {
                            globalRecords.currentBestStatistic = preArmor;
                            // console.log(cycleObject)

                            cycleObject.bestArmorSet = cycleObject.bestArmorSet ?? {helmet:"",chest:"",leg:"",hand:""}

                            readSelection("comboArmorHelmet").src = armor.helmets[cycleObject.bestArmorSet.helmet].image;
                            readSelection("comboArmorChest").src = armor.chests[cycleObject.bestArmorSet.chest].image;
                            readSelection("comboArmorLeg").src = armor.legs[cycleObject.bestArmorSet.leg].image;
                            readSelection("comboArmorHand").src = armor.hands[cycleObject.bestArmorSet.hand].image;

                            let ringRef = Object.keys(rings);
                            let amuletRef = Object.keys(amulets);
                            let relicRef = Object.keys(relics);
                            let fragRef = Object.keys(fragments);
                            let quickRef = Object.keys(quickUses);
                            let concRef = Object.keys(concoctions);
                            let primRef = Object.keys(primary);
                            let meleeRef = Object.keys(melee);
                            let secRef = Object.keys(secondary);
                            let rangedModRef = Object.keys(rangedMods);
                            let rangedMutRef = Object.keys(rangedMutators);
                            let meleeMutRef = Object.keys(meleeMutators);

                            // accessoryReference.amulet = amuletRef[value.amulet[0]] || "";
                            // accessoryReference.ring1 = ringRef[value.ringSet[0]] || "";
                            // // console.log(accessoryReference.ring1)
                            // accessoryReference.ring2 = ringRef[value.ringSet[1]] || "";
                            // accessoryReference.ring3 = ringRef[value.ringSet[2]] || "";
                            // accessoryReference.ring4 = ringRef[value.ringSet[3]] || "";
                            // accessoryReference.relic = relicRef[value.relic[0]] || "";
                            // accessoryReference.fragment1 = fragRef[value.fragmentSet[0]] || "";
                            // accessoryReference.fragment2 = fragRef[value.fragmentSet[1]] || "";
                            // accessoryReference.fragment3 = fragRef[value.fragmentSet[2]] || "";

                            // let consumableReference = globalReference.consumables;
                            // globalRecords.greatConcoctionRecords = [...value.concoction];
                            // globalRecords.greatConcoctionRecords = [...value.concoction.map(item => {
                            //     return concRef[item];
                            // })];
                            // // globalRecords.greatConsumableRecords = [...value.quickUse];
                            // globalRecords.greatConsumableRecords = [...value.quickUse.map(item => {
                            //     return quickRef[item];
                            // })];

                            readSelection("comboRelic").src = cycleObject.relic[0] ? gear.relics[relicRef[cycleObject.relic[0]]].image : gear.relics[""].image;

                            readSelection("comboAmulet").src = cycleObject.amulet[0] ? gear.amulets[amuletRef[cycleObject.amulet[0]]].image : gear.amulets[""].image;
                            readSelection("comboRing1").src = cycleObject.ringSet[0] ? gear.rings[ringRef[cycleObject.ringSet[0]]].image : gear.rings[""].image;
                            readSelection("comboRing2").src = cycleObject.ringSet[1] ? gear.rings[ringRef[cycleObject.ringSet[1]]].image : gear.rings[""].image;
                            readSelection("comboRing3").src = cycleObject.ringSet[2] ? gear.rings[ringRef[cycleObject.ringSet[2]]].image : gear.rings[""].image;
                            readSelection("comboRing4").src = cycleObject.ringSet[3] ? gear.rings[ringRef[cycleObject.ringSet[3]]].image : gear.rings[""].image;

                            primaryHolder = primRef[cycleObject.gun1[0]] ?? "";
                            meleeHolder = meleeRef[cycleObject.stick[0]] ?? "";
                            secondaryHolder = secRef[cycleObject.gun2[0]] ?? "";
                            readSelection("comboWeapon1").src = primary[primaryHolder].image;
                            // console.log(cycleObject.gun1[0])
                            readSelection("comboWeapon2").src = melee[meleeHolder].image;
                            readSelection("comboWeapon3").src = secondary[secondaryHolder].image;

                            readSelection("comboPrimaryMutator").innerHTML = rangedMutRef[cycleObject.rangedMutators[0]] || "";
                            readSelection("comboPrimaryMod").innerHTML = primary[primaryHolder].builtIN || rangedModRef[cycleObject.rangedMods[0]] || "";

                            readSelection("comboMeleeMutator").innerHTML = meleeMutRef[cycleObject.meleeMutators[0]] || "";
                            readSelection("comboMeleeMod").innerHTML = melee[meleeHolder].builtIN;

                            readSelection("comboSecondaryMutator").innerHTML = rangedMutRef[cycleObject.rangedMutators[1]] || "";
                            readSelection("comboSecondaryMod").innerHTML = secondary[secondaryHolder].builtIN || rangedModRef[cycleObject.rangedMods[1]] || "";


                            for (let i=0;i<cycleObject.concoction.length;i++) {
                                let concReference = concRef[cycleObject.concoction[i]] ?? "";
                                if (concReference===0 || concReference==="") {
                                    concReference="";
                                    readSelection(`comboConcoction${i+1}Holder`).style.display = "none";
                                }
                                else {
                                    readSelection(`comboConcoction${i+1}Holder`).style.display = "block";
                                    readSelection(`comboConcoction${i+1}`).src = concoctions[concReference].image;
                                }
                            }


                            let quickUseRow = readSelection("comboQuickUseBox");
                            quickUseRow.innerHTML = "";
                            // globalRecords.greatConsumableRecords = [...globalRecords.consumableCombo.map(item => {
                            //     return globalRecords.dataKeys.quickRef[item];
                            // })];
                            for (let i=0;i<globalRecords.consumableCombo.length;i++) {let quickUseBox = `
                                <div class="comboConsumableImageBox" id="comboQuickUse${i+1}Holder">
                                    <img class="comboArmorImage" src="/images/Remnant/clear.png" id="comboConsumable${i+1}" alt="Combo Consumable1">
                                </div>`;

                                quickUseRow.innerHTML += quickUseBox;
                            }
                            for (let i=0;i<globalRecords.consumableCombo.length;i++) {
                                let consReference = quickRef[globalRecords.consumableCombo[i]] ?? "";
                                readSelection(`comboConsumable${i+1}`).src = quickUses[consReference].image;
                            }

                            cyclesLoop.updateCycleRecordMainUI(cycleObject);//Updates the ALT records with everything from the cycle object

                            for (let i=50;i>1;i--) {
                                cyclesLoop.bestCombos[i] = cyclesLoop.bestCombos[i-1] ? {...cyclesLoop.bestCombos[i-1]} : {"bestValue":0,"link":""};
                            }

                            // cyclesLoop.bestCombos.third = cyclesLoop.bestCombos.second ? {...cyclesLoop.bestCombos.second} : {"bestValue":0,"link":""};
                            // cyclesLoop.bestCombos.second = cyclesLoop.bestCombos.first ? {...cyclesLoop.bestCombos.first} : {"bestValue":0,"link":""};

                            let targetDamageCategory;
                            if (filters.types.vars.oldTarget[0] === globalRecords.archs.one.ability) {targetDamageCategory = "ability1Breakdown"}
                            else if (filters.types.vars.oldTarget[0] === globalRecords.archs.two.ability) {targetDamageCategory = "ability2Breakdown"}

                            cyclesLoop.bestCombos[1] = {
                                "bestValue": preArmor.toFixed(2),
                                "link": manipulateURL.updateURLparameters(false,true)
                            }

                            comboPath = cyclesLoop.bestCombos
                            let targetName = Array.isArray(filters.types.vars.oldTarget) ? filters.types.vars.oldTarget[0] + " " + filters.types.vars.oldTarget[2] : filters.types.vars.oldTarget;
                            
                            
                            readSelection("comboTargetDisplay").innerHTML = `<div class="bestOptionsRow">Target Statistic: ${targetName}</div>`
                            for (let i=1;i<=50;i++) {
                                let textPrefix = `${i}`
                                if (i===1) {textPrefix = `Current Best`;}
                                if (comboPath[i].bestValue) {
                                readSelection("comboTargetDisplay").innerHTML += `
                                <div class="bestOptionsRow">${textPrefix}: <a href="${comboPath[i].link}" rel="noopener noreferrer" target="_blank" class="bestOptionsLink">${comboPath[i].bestValue}</a></div>
                                `}
                            }

                            readSelection(`lastFound`).innerHTML = `Last Loadout Found at #${counterInt.toLocaleString()}`

                            readSelection(`comboDisplay`).innerHTML = `
                                ${fragRef[cycleObject.fragmentSet[0]]}, ${fragRef[cycleObject.fragmentSet[1]]}, ${fragRef[cycleObject.fragmentSet[2]]}
                            `;
                        }
                    }

                    if (counterInt === totalCombos) {
                    cyclesLoop.generationStop("",null,true); 
                    }
            }
            else {
                switch (data.command) {
                    case `canIHaveSomeMore`: 
                        if (cycles.iterator) {cycles.iterator.next();}
                        workerIdentifier = data.workerIdentifier;
                        let queueStorage = cycles.vars.queueStorage;
                        if (queueStorage.length) {//ideally this will only fail if we're out of combos to distribute //TODO: add safety handling here later
                            let messageComboArray = queueStorage[0];
                            let cycleWorkerLoop = `cycleWorker${workerIdentifier}`
                            workers[cycleWorkerLoop].postMessage({command:`dumpCombos`,messageComboArray,workerIdentifier});
                            cycles.vars.queueStorage.shift();
                        }
                        else {
                            cycles.vars.workersRunning -= 1;
                            readSelection("openThreadsDisplay").innerHTML = cycles.vars.workersRunning;
                        }
                        break;
                    case `pushDebugLine`: cycles.debugPushLine(data.data); break;
                    case `pushAlert`: 
                        if (data.isAborted) {cyclesLoop.generationStop("","",true)}
                        alert(data.data); 
                        break
                    case `pushInnerHTML`:
                        readSelection(data.ID).innerHTML = data.data;
                        break;
                    case `updateStep`: cyclesLoop.updateSetupStep(data.data,false,data.moduloFactor); break;
                }
            }
        };
        workers[cycleWorker].onerror = function(error) {
            console.error('Worker error:', error);
            cyclesLoop.generationStop(`${error.message} LINE:${error.lineno}`);
        };
    },
    combineConcoctionLimit(ringCombo,amulet,classSet) {
        // let refKeys = Object.keys(refTable);
        // for (let key in returnTable) {
        //     if (refKeys.includes(key)) {
        //         returnTable[key].ID = refKeys.indexOf(key);
        //     }
        // }
        let returnLimit = 1;

        let ringRef = Object.keys(rings);
        let amuletRef = Object.keys(amulets);

        for (let item1 of ringCombo) {
            // if (item1 === ringCombo[ringCombo.length-1]) {continue;}
            returnLimit += gear.rings[ringRef[item1]].stats.ConcLimit || 0;
        }
        for (let item3 of amulet) {
            // if (item3 === amulet[amulet.length-1]) {continue;}
            returnLimit += gear.amulets[amuletRef[item3]].stats.ConcLimit || 0;
        }
        for (let item5 of classSet) {
            // if (item5 === classSet[classSet.length-1]) {continue;}
            if (classInfo[item5].primeStats.ConcLimit) {
                returnLimit += classInfo[item5].primeStats.ConcLimit || 0;
            }
        }
        return returnLimit;
    },
    //Used to be for factorial calcs in variable concoction limits. Not currently used, will keep for now.
    factorial(n) {
        if (n===0 || n===1) {return 1;}
        else {return n * cyclesLoop.factorial(n - 1);}
    },
    //Quick check for weight class
    getWeightClass(totalWeight,weightThreshold) {
        if (totalWeight > 75 + weightThreshold) {return 4;}//Flop
        else if (totalWeight > 50 + weightThreshold) {return 3;}//Heavy
        else if (totalWeight > 25 + weightThreshold) {return 2;}//Medium
        else {return 1;} //Light
    },
    binarySearch(path,key,nearest,isArmor) {
        let start = 0;
        let end = path.length - 1;
    
        while (start <= end) {
            let middle = Math.floor((start + end) / 2);
            let middleObject = path[middle];
            let middleKey = +Object.keys(middleObject)[0];

            if (middleKey === key) {return {indexID:middle,keyID:middleKey.toString()}}//If found, return index/key pair
            else if (middleKey < key) {start = middle+1;}//middle<key, move start
            else {end = middle-1;}//middle>key, move end
        }

        if (nearest) {
            let returnObect,index;
            if (isArmor) {index = start>=path.length ? path.length-1 : start;}//Armor tables - closest GREATER. If start is out of bounds, return the last set
            else {index = end<0 ? 0: end;}//Weight tables - closest UNDER. If end is out of bounds, return the first set
            returnObect = {indexID:index,keyID:Object.keys(path[index])[0]};
            return returnObect;
        }
        else {return -1;}//Nothing found
    },
    binarySearchArray(path,targetValue,rowIndex) {
        let start = 0;
        let end = path.length - 1;
        let closestIndex = -1;


        if (targetValue < +path[0][rowIndex]) {return -1;}
        if (targetValue > +path[end][rowIndex]) {return end;}

        while (start <= end) {
            let middle = Math.floor((start + end) / 2);
            if (+path[middle][rowIndex] <= targetValue) {
            closestIndex = middle;
            start = middle + 1;
            }
            else {end = middle - 1;}
        }
        
        return closestIndex;
    },
    pingArmorCombos(targetArmor,existingWeight,weightThreshold,weightModifier,isExact) {
        //armor combos are found at cycles.vars.armorCombos.Table or cycles.vars.weightFirst.Table
        //This is in case other items provide weight, like the ring that adds 50
        existingWeight = existingWeight || 0;
        //Also set the default maximum weight class to flop if not specified
        let targetWeightClass = filters.types.vars.dodgeClass || 4;
        let threshold = 0;let bestArmorSet; 

        switch(targetWeightClass) {
            case 1: threshold = 25.00 + weightThreshold;break;
            case 2: threshold = 50.00 + weightThreshold;break;
            case 3: threshold = 75.00 + weightThreshold;break;
            case 4: threshold = 10000 + weightThreshold;break;//This just needs to be a really big number, bigger than an possible weight, doesn't actually matter what it is.
        }

        
        let targetWeight = ((threshold/weightModifier)-existingWeight);

        let isPossible = isExact ?? true;//Find exact values if specified, otherwise maximize armor per the given weight category
        // let isPossible = false;
        let armorSearch,weightSearch;
        if (isPossible) {
            armorSearch = cyclesLoop.binarySearch(cycles.vars.armorCombos.Table,targetArmor,true,true);
            if (armorSearch != -1) {
                let path = cycles.vars.armorCombos.Table[armorSearch.indexID][armorSearch.keyID];
                const weights = +Object.keys(path[0])[0];

                if (weights <= targetWeight) {bestArmorSet = path[0][weights];}
                else {isPossible=false;}
            }
        }
        if (!isPossible) {
            //If the target armor or closest approx armor, had no weight options under the target weight, check weight table instead.
            weightSearch = cyclesLoop.binarySearch(cycles.vars.weightFirst.Table, targetWeight,true,false);

            if (weightSearch != -1) {
                bestArmorSet = cycles.vars.weightFirst.Table[weightSearch.indexID][weightSearch.keyID];
            }
            else {postMessage({command: `pushAlert`, data: "ERROR: Somehow an armor ping failed. Join the discord and let Vash know."});}
        }

        // bestArmorSet = bestArmorSet ?? {helmet:"",chest:"",leg:"",hand:""};
        globalRecords.armor = {... bestArmorSet ?? {helmet:"",chest:"",leg:"",hand:""}};
        return true;
        // return bestArmorSet;
    },
    //This is now only used within the worker cycleWorker
    evaluateCombinationsInt(comboArray,midQuery,targetStatistic) {
        let cycleCounter = 0;
        let comboArrayLength = comboArray.length;
        let betterFound = false;

        for (let i=comboArrayLength-1;i>=0;i--) {
            cycleCounter++;
            let cycleObject = comboArray[i];

            cyclesLoop.updateCycleRecord(cycleObject);//Assigns cycle items to records so updateFormulas can work
            let preArmor = updateFormulas(`cycleTableKnowerOfAll`,true);//If armor is needed, it will return it. Otherwise it will return stats.

            if (preArmor[targetStatistic] > midQuery.recordedStatistic) {
                midQuery.recordedStatistic = +preArmor[targetStatistic];
                midQuery.bestLoadout = cycleObject;
                midQuery.bestLoadout.bestArmorSet = {...globalRecords.armor};
                betterFound = true;
            }
            // else if (preArmor[targetStatistic] === 0) {continue}
            comboArray.splice(i,1);
        }
        postMessage({command:`yieldCombination`,isUpdated:betterFound,cycleObject:midQuery.bestLoadout,preArmor:midQuery.recordedStatistic,cycleCounter});
        // console.log({command:`yieldCombination`,isUpdated:betterFound,cycleObject:midQuery.bestLoadout,preArmor:midQuery.recordedStatistic,cycleCounter})
    },
    evaluateCombinationsArray(comboArray,midQuery,targetStatistic) {
        let targetDamageCategory = midQuery.targetDamageCategory
        let cycleCounter = 0;
        let comboArrayLength = comboArray.length;
        let betterFound = false;

        for (let i=comboArrayLength-1;i>=0;i--) {
            cycleCounter++;
            let cycleObject = comboArray[i];

            cyclesLoop.updateCycleRecord(cycleObject);//Assigns cycle items to records so updateFormulas can work
            let preArmor = updateFormulas(`cycleTableKnowerOfAll`,true);//If armor is needed, it will return it. Otherwise it will return stats.

            if (preArmor[targetDamageCategory][targetStatistic] > midQuery.recordedStatistic) {
                midQuery.recordedStatistic = +preArmor[targetDamageCategory][targetStatistic];
                midQuery.bestLoadout = cycleObject;
                midQuery.bestLoadout.bestArmorSet = {...globalRecords.armor};
                betterFound = true;
            }
            comboArray.splice(i,1);
        }
        postMessage({command:`yieldCombination`,isUpdated:betterFound,cycleObject:midQuery.bestLoadout,preArmor:midQuery.recordedStatistic,cycleCounter});
        // postMessage({command:`yieldCombination`,cycleCounter});
    },
    updateCycleRecord(value) {
        let globalReference = globalRecords;
        let accessoryReference = globalReference.accessories;
        let dataKeyReference = globalRecords.dataKeys;

        let ringRef = dataKeyReference.ringRef;
        let amuletRef = dataKeyReference.amuletRef;
        let relicRef = dataKeyReference.relicRef;
        let fragRef = dataKeyReference.fragRef;
        // let quickRef = dataKeyReference.quickRef;
        let concRef = dataKeyReference.concRef;
        let primRef = dataKeyReference.primRef;
        let meleeRef = dataKeyReference.meleeRef;
        let secRef = dataKeyReference.secRef;
        let rangedModRef = dataKeyReference.rangedModRef;
        let rangedMutRef = dataKeyReference.rangedMutRef;
        let meleeMutRef = dataKeyReference.meleeMutRef;

        accessoryReference.amulet = amuletRef[value.amulet[0]] || "";
        accessoryReference.ring1 = ringRef[value.ringSet[0]] || "";
        // console.log(accessoryReference.ring1)
        accessoryReference.ring2 = ringRef[value.ringSet[1]] || "";
        accessoryReference.ring3 = ringRef[value.ringSet[2]] || "";
        accessoryReference.ring4 = ringRef[value.ringSet[3]] || "";
        accessoryReference.relic = relicRef[value.relic[0]] || "";
        accessoryReference.fragment1 = fragRef[value.fragmentSet[0]] || "";
        accessoryReference.fragment2 = fragRef[value.fragmentSet[1]] || "";
        accessoryReference.fragment3 = fragRef[value.fragmentSet[2]] || "";

        // let consumableReference = globalReference.consumables;
        // globalRecords.greatConcoctionRecords = [...value.concoction];
        globalRecords.greatConcoctionRecords = [...value.concoction.map(item => {
            return concRef[item];
        })];
        // globalRecords.greatConsumableRecords = [...value.quickUse];
        // globalRecords.greatConsumableRecords = [...value.quickUse.map(item => {
        //     return quickRef[item];
        // })];

        let weaponReference = globalReference.weapons;
        weaponReference.primary = primRef[value.gun1[0]] || "";
        weaponReference.primaryMutator = rangedMutRef[value.rangedMutators[0]] || "";
        weaponReference.primaryMod = rangedModRef[value.rangedMods[0]] || "";
        if (weaponReference.primary === "Rusty Lever Action") {weaponReference.primaryMod = "";weaponReference.primaryMutator = "";}
        weaponReference.melee = meleeRef[value.stick[0]] || "";
        weaponReference.meleeMutator = meleeMutRef[value.meleeMutators[0]] || "";
        weaponReference.secondary = secRef[value.gun2[0]] || "";
        weaponReference.secondaryMutator = rangedMutRef[value.rangedMutators[1]] || "" ;
        weaponReference.secondaryMod = rangedModRef[value.rangedMods[1]] || "";
        if (weaponReference.secondary === "Rusty Repeater") {weaponReference.secondaryMod = "";weaponReference.secondaryMutator = "";}
    },
    updateCycleRecordMainUI(value) {//No longer needs to be alt variants, this version is only used by the optimizer which is now separate from the calc
        let globalReference = globalRecords;
        let accessoryReference = globalReference.accessories;

        let ringRef = Object.keys(rings);
        let amuletRef = Object.keys(amulets);
        let relicRef = Object.keys(relics);
        let fragRef = Object.keys(fragments);
        let quickRef = Object.keys(quickUses);
        let concRef = Object.keys(concoctions);
        let primRef = Object.keys(primary);
        let meleeRef = Object.keys(melee);
        let secRef = Object.keys(secondary);
        let rangedModRef = Object.keys(rangedMods);
        let rangedMutRef = Object.keys(rangedMutators);
        let meleeMutRef = Object.keys(meleeMutators);

        accessoryReference.amulet = amuletRef[value.amulet[0]] || "";
        accessoryReference.ring1 = ringRef[value.ringSet[0]] || "";
        // console.log(accessoryReference.ring1)
        accessoryReference.ring2 = ringRef[value.ringSet[1]] || "";
        accessoryReference.ring3 = ringRef[value.ringSet[2]] || "";
        accessoryReference.ring4 = ringRef[value.ringSet[3]] || "";
        accessoryReference.relic = relicRef[value.relic[0]] || "";
        accessoryReference.fragment1 = fragRef[value.fragmentSet[0]] || "";
        accessoryReference.fragment2 = fragRef[value.fragmentSet[1]] || "";
        accessoryReference.fragment3 = fragRef[value.fragmentSet[2]] || "";

        // let consumableReference = globalReference.consumables;
        // globalRecords.greatConcoctionRecords = [...value.concoction];
        globalRecords.greatConcoctionRecords = [...value.concoction.map(item => {
            return concRef[item];
        })];
        // globalRecords.greatConsumableRecords = [...value.quickUse];
        globalRecords.greatConsumableRecords = [...globalRecords.consumableCombo.map(item => {
            return quickRef[item];
        })];

        let weaponReference = globalReference.weapons;
        weaponReference.primary = primRef[value.gun1[0]] || "";
        weaponReference.primaryMutator = rangedMutRef[value.rangedMutators[0]] || "";
        weaponReference.primaryMod = rangedModRef[value.rangedMods[0]] || "";
        if (weaponReference.primary === "Rusty Lever Action") {weaponReference.primaryMod = "";weaponReference.primaryMutator = "";}
        weaponReference.melee = meleeRef[value.stick[0]] || "";
        weaponReference.meleeMutator = meleeMutRef[value.meleeMutators[0]] || "";
        weaponReference.secondary = secRef[value.gun2[0]] || "";
        weaponReference.secondaryMutator = rangedMutRef[value.rangedMutators[1]] || "" ;
        weaponReference.secondaryMod = rangedModRef[value.rangedMods[1]] || "";
        if (weaponReference.secondary === "Rusty Repeater") {weaponReference.secondaryMod = "";weaponReference.secondaryMutator = "";}

        globalReference.armor.helmet = value.bestArmorSet.helmet || "";
        globalReference.armor.chest = value.bestArmorSet.chest || "";
        globalReference.armor.leg = value.bestArmorSet.leg || "";
        globalReference.armor.hand = value.bestArmorSet.hand || "";
    },
}


let filters = {
    "types": {
        "vars": {
            "dodgeClass": 4,
            "targetStatistic": "",
            "oldTarget": "",
            "importedArch1": "",
            "importedArch2": "",
            "importedAbility1": "",
            "importedAbility2": "",
            "importedTraitRecords": [],
        },
        "tags": {"filter": [[]]},
        "amulet": {"filter": [[],[],[]]},
        "ring": {"filter": [[],[],[]]},
        "relic": {"filter": [[],[],[]]},
        "fragment": {"filter": [[],[],[]]},
        "concoction": {"filter": [[],[],[]]},
        "consumable": {"filter": [[],[],[]]},
        "primary": {"filter": [[],[],[]]},
        "primaryMutator": {"filter": [[],[],[]]},
        "primaryMod": {"filter": [[],[],[]]},
        "melee": {"filter": [[],[],[]]},
        "meleeMutator": {"filter": [[],[],[]]},
        "secondary": {"filter": [[],[],[]]},
        "secondaryMutator": {"filter": [[],[],[]]},
        "secondaryMod": {"filter": [[],[],[]]},
        "helmets": {"filter": [[],[],[]]},
        "chests": {"filter": [[],[],[]]},
        "hands": {"filter": [[],[],[]]},
        "legs": {"filter": [[],[],[]]},
    },
    populateFilters(filterBox,filterTable,filterIndex) {
        let pathHTML = readSelection(filterBox);
        let table = filters.types[filterTable].filter[filterIndex];
        table.sort();
        pathHTML.innerHTML = "";
        for (let filterName in table) {
            pathHTML.innerHTML += filters.displayFilterHTML(table[filterName],filterBox,filterTable,filterIndex);
        }
    },
    addFilter(filterID,filterBox,filterTable,filterIndex,compareTable,limit) {
        let filterName = readSelection(filterID);
        let table = filters.types[filterTable].filter[filterIndex];
        //If we are submitting more than the allowed locks, don't do anything, don't add, etc
        if (table.length>=limit) {filterName.value = "";return;}

        if ((!compareTable[filterName.value] && filterName.value && filterName.value != "--")) {filterName.value = "";return;}
        
        let found = false;
        for (let entry in table) {
            if (table[entry]===filterName.value) {found=true;}
        }
        if (filterName.value === "--") {filterName.value = "";}//if the user WANTS an empty filter
        if (!found) {filters.types[filterTable].filter[filterIndex].push(filterName.value)}
        filterName.value = "";
        filters.populateFilters(filterBox,filterTable,filterIndex);
    },
    addPresets(presetName,filterBox,filterTable,filterIndex) {
        let selectedPreset = cycles.presets[readSelection(presetName).value];
        if (!selectedPreset) {console.log("break");return;}
        let table = filters.types[filterTable].filter[filterIndex];
        for (let tag in selectedPreset) {
            let found = false;
            for (let entry in table) {
                if (table[entry]===selectedPreset[tag]) {found=true;}
            }
            if (!found) {filters.types[filterTable].filter[filterIndex].push(selectedPreset[tag])}
        }
        filters.populateFilters(filterBox,filterTable,filterIndex);
    },
    deleteFilter(filterName,filterBox,filterTable,filterIndex) {
        let index = 0;
        let table = filters.types[filterTable].filter[filterIndex];
        for (let entry in table) {
            if (table[entry] === filterName) {
                filters.types[filterTable].filter[filterIndex].splice(index,1);
                break;
            }
            index += 1;
        }
        filters.populateFilters(filterBox,filterTable,filterIndex);
    },
    updateOcclusion(filterTable,toggleID) {
        let isChecked = readSelection(toggleID).checked;
        filters.types[filterTable].filter[2] = [isChecked];
    },
    clearTagsFilter() {
        filters.types.tags.filter[0] = [];
        filters.populateFilters(`tagsBox`,`tags`,0);
    },
    clearLocksFilter() {
        filters.types.amulet.filter[0] = [];
        filters.types.ring.filter[0] = [];
        filters.types.relic.filter[0] = [];
        filters.types.fragment.filter[0] = [];
        filters.types.concoction.filter[0] = [];
        filters.types.consumable.filter[0] = [];
        filters.types.primary.filter[0] = [];
        filters.types.primaryMutator.filter[0] = [];
        filters.types.primaryMod.filter[0] = [];
        filters.types.melee.filter[0] = [];
        filters.types.meleeMutator.filter[0] = [];
        filters.types.secondary.filter[0] = [];
        filters.types.secondaryMutator.filter[0] = [];
        filters.types.secondaryMod.filter[0] = [];

        filters.populateFilters(`amuletsLocksContainer`,`amulet`,0);
        filters.populateFilters(`ringsLocksContainer`,`ring`,0);
        filters.populateFilters(`relicsLocksContainer`,`relic`,0);
        filters.populateFilters(`fragmentsLocksContainer`,`fragment`,0);
        filters.populateFilters(`concoctionsLocksContainer`,`concoction`,0);

        filters.populateFilters(`consumablesLocksContainer`,`consumable`,0);
        filters.populateFilters(`primaryLocksContainer`,`primary`,0);
        filters.populateFilters(`primaryMutatorLocksContainer`,`primaryMutator`,0);
        filters.populateFilters(`primaryModLocksContainer`,`primaryMod`,0);
        filters.populateFilters(`meleeLocksContainer`,`melee`,0);

        filters.populateFilters(`meleeMutatorLocksContainer`,`meleeMutator`,0);
        filters.populateFilters(`secondaryLocksContainer`,`secondary`,0);
        filters.populateFilters(`secondaryMutatorLocksContainer`,`secondaryMutator`,0);
        filters.populateFilters(`secondaryModLocksContainer`,`secondaryMod`,0);
    },
    clearOcclusionsFilter() {
        filters.types.amulet.filter[1] = [];
        filters.types.ring.filter[1] = [];
        filters.types.relic.filter[1] = [];
        filters.types.fragment.filter[1] = [];
        filters.types.concoction.filter[1] = [];
        filters.types.consumable.filter[1] = [];
        filters.types.primary.filter[1] = [];
        filters.types.primaryMutator.filter[1] = [];
        filters.types.primaryMod.filter[1] = [];
        filters.types.melee.filter[1] = [];
        filters.types.meleeMutator.filter[1] = [];
        filters.types.secondary.filter[1] = [];
        // filters.types.secondaryMutator.filter[1] = [];
        // filters.types.secondaryMod.filter[1] = [];

        filters.populateFilters(`amuletsOcclusionsContainer`,`amulet`,1);
        filters.populateFilters(`ringsOcclusionsContainer`,`ring`,1);
        filters.populateFilters(`relicsOcclusionsContainer`,`relic`,1);
        filters.populateFilters(`fragmentsOcclusionsContainer`,`fragment`,1);
        filters.populateFilters(`concoctionsOcclusionsContainer`,`concoction`,1);

        filters.populateFilters(`consumablesOcclusionsContainer`,`consumable`,1);
        filters.populateFilters(`primaryOcclusionsContainer`,`primary`,1);
        filters.populateFilters(`primaryMutatorOcclusionsContainer`,`primaryMutator`,1);
        filters.populateFilters(`primaryModOcclusionsContainer`,`primaryMod`,1);
        filters.populateFilters(`meleeOcclusionsContainer`,`melee`,1);

        filters.populateFilters(`meleeMutatorOcclusionsContainer`,`meleeMutator`,1);
        filters.populateFilters(`secondaryOcclusionsContainer`,`secondary`,1);
        // filters.populateFilters(`secondaryMutatorOcclusionsContainer`,`secondaryMutator`,1);
        // filters.populateFilters(`secondaryModOcclusionsContainer`,`secondaryMod`,1);
    },
    displayFilterHTML(filterName,filterBox,filterTable,filterIndex) {
        //Stop any ' from messing everything up, like Brewmaster's Cork
        const escapedFilterName = filterName.replace(/'/g, "\\'");
        return  `<div class="filtersTagsRowContainer">
                    <div class="filtersTagName">${filterName}</div>
                    <input type="button" class="filtersTagDelete" onclick="filters.deleteFilter('${escapedFilterName}','${filterBox}','${filterTable}','${filterIndex}')" value="X">
                </div>`;
    },
    updateDodgeClass() {
        let dodgeClass = readSelection("dodgeSlider").value;
        let teamCount = +readSelection("teamCountSlider").value;
        let summonCount = +readSelection("summonCountSlider").value;

        let dodgeLable,hex;
        switch (dodgeClass) {
            case "1": dodgeLable = "Light";hex = "#93CCEA";break;
            case "2": dodgeLable = "Medium";hex = "#90ee90";break;
            case "3": dodgeLable = "Heavy";hex = "orange";break;
            case "4": dodgeLable = "Flop";hex = "#e06666";break;
        }
        readSelection("selectedDodgeType").innerHTML = dodgeLable;
        readSelection("selectedDodgeType").style.color = hex;
        filters.types.vars.dodgeClass = +dodgeClass;
        //Team and Summon counts
        globalRecords.isCoop = teamCount>1 ? `Co-op` : `Solo`;
        globalRecords.teamCount = teamCount;
        readSelection("selectedTeamCount").innerHTML = teamCount;
        globalRecords.minionCount = summonCount;
        readSelection("selectedSummonCount").innerHTML = summonCount;

        globalRecords.spiritHealerStacks = +readSelection("spiritCountSlider").value;
        readSelection("selectedSpiritCount").innerHTML = readSelection("spiritCountSlider").value;

        globalRecords.useShields = readSelection("settingsUseShields").checked;
        globalRecords.useRelicHealing = readSelection("settingsUseRelicHealing").checked;
        globalRecords.useNonStandardDR = readSelection("settingsUseNonStandardDR").checked;


        let path = globalRecords.searchSettingsToggles;
        path.usePrimePerk = readSelection("settingsUsePrimePerk").checked;
		path.useAbility1 = readSelection("settingsUseAbility1").checked;
		path.useAbility2 = readSelection("settingsUseAbility2").checked;
		
		path.usePassive1 = readSelection("settingsUsePassive1").checked;
		path.usePassive2 = readSelection("settingsUsePassive2").checked;
		path.usePassive3 = readSelection("settingsUsePassive3").checked;
		path.usePassive4 = readSelection("settingsUsePassive4").checked;

		path.usePassive5 = readSelection("settingsUsePassive5").checked;
		path.usePassive6 = readSelection("settingsUsePassive6").checked;
		path.usePassive7 = readSelection("settingsUsePassive7").checked;
		path.usePassive8 = readSelection("settingsUsePassive8").checked;

        cycles.vars.bypassLimit = readSelection("bypassLimit").checked;

        path = globalRecords.meleeFactors;
        let enemyCount = readSelection("enemyCountSlider").value;

        path.enemyCount = enemyCount;
        readSelection("selectedEnemyCount").innerHTML = enemyCount;
        path.greyHealthActive = readSelection("settingsUseGreyHealth").checked;
        path.isPerfectDodge = readSelection("settingsUsePerfectDodge").checked;
        path.isEvade = readSelection("settingsUseEvades").checked;
        path.weakspotOverride = readSelection("settingsNeverWeakspot").checked;

        
        // <input type="range" id="settingsOpenThreads" name="slider" min="2" max="16" value="4" step="1" list="tickmarks" onchange="filters.updateDodgeClass()">
        // <span id="selectedThreadCount">0</span>

        let selectedThreads = +readSelection("settingsOpenThreads").value
        readSelection("selectedThreadCount").innerHTML = selectedThreads;
        cycles.vars.threadCount = selectedThreads;

    },
    updateTargetStat() {
        let currentStatistic = readSelection("statisticInput").value;

        if (!playerDerivedStatistics[currentStatistic]) {
            readSelection("statisticInput").value = ""
        }
        else {
            filters.types.vars.targetStatistic = currentStatistic;
        }
    }
}