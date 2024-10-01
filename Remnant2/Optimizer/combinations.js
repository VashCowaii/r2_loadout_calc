let cycles = {
    debugView() {
        let state = readSelection("debugShow").checked;
        let element = readSelection("comboDebug");

        element.style.display = state ? "block" : "none";
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
        "Way of Kaeula Damage": [
            "Critical Chance-All","Critical Chance-Elemental","Critical Chance-Skill",
            "Critical Damage-All",
            "Damage-All","Damage-Elemental","Damage-Shock","Damage-Skill",
            "Skill-Duration",

            "Status-Bleed","Status-Burn","Status-Corroded","Status-Exposed","Status-Overloaded","Status-Slow","Status-Outgoing Statuses",
            "Status-Self-Bleed","Status-Incomng Statuses",

            // "Armor-Flat","Armor Effectiveness","DR-Flat",
            "DR-Bulwark","DR-Bulwark Limit",
            "Encumbrance/Weight","Encumbrance/Weight - Threshold","Encumbrance/Weight-%",

            "Consumable-Concoction Limit",
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
        "Melee Damage (Physical)": [
            "Critical Chance-All","Critical Chance-Melee","Critical Chance-Melee Charge",
            "Critical Damage-All","Critical Damage-Melee","Critical Damage-Melee Charge",
            "Damage-All","Damage-Melee","Damage-Melee Charge","Damage-Melee Backstep","Damage-Melee Unarmed/Fist",
            "Weakspot-All","Weakspot-Melee","Weakspot-Melee Charge",
            "Weakspot-Enable/Disable",

            "Speed-HASTE","Melee-Attack Speed","Melee-Charge Speed",

            "Melee-Special Ability Threshold","Damage-Melee Special Ability",

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
    firstBatchUIAdjustment() {
        const varRef = cycles.vars;
        //If this is the first iteration, set things up. 1 is technically the start.
        readSelection("comboCount").innerHTML = varRef.totalDisplayCombinations.toLocaleString();
        varRef.cycleTimer = performance.now();
        varRef.cycleTotalTimer = performance.now();
        varRef.cycleCounter = 0;
        readSelection(`cycleProgressType`).innerHTML = "BUILD TESTS:";
        readSelection(`cyclesTimeRemaining`).innerHTML = `Calculating...`;

        const archsRef = globalRecords.archs;

        const classPath1 = classInfo[archsRef.one.class]
        const classPath2 = classInfo[archsRef.two.class]

        readSelection("archetype1MAIN").src = classPath1.classIcon;
        readSelection("comboHeadsUpMessage").style.display = "none";
        if (archsRef.one.class === "") {
            readSelection("archetype1MAIN").src = "/images/bufferCat.png"
            readSelection("comboHeadsUpMessage").textContent  = "Who the actual fuck only uses a secondary archetype with no primary.";
            readSelection("comboHeadsUpMessage").style.display = "block";
        }
        readSelection("archetype1abilityIcon").src = classPath1.abilities[archsRef.one.ability].image;
        readSelection("archetype1MAINbg").style.background = `linear-gradient(225deg, ${classPath1.gradient[0]}, ${classPath1.gradient[1]},black)`;

        readSelection("archetype2MAIN").src = classPath2.classIcon;
        if (archsRef.two.class === "" && archsRef.one.class === "") {
            readSelection("archetype1MAIN").src = "/images/swagCat.png"
            readSelection("archetype2MAIN").src = "/images/swagCat.png"
            readSelection("comboHeadsUpMessage").textContent  = "Did you forget to select your archetypes and traits, in settings?";
        }
        readSelection("archetype2abilityIcon").src = classPath2.abilities[archsRef.two.ability].image;
        readSelection("archetype2MAINbg").style.background = `linear-gradient(135deg, ${classPath2.gradient[0]}, ${classPath2.gradient[1]},black)`;
        varRef.firstBatch = false;
    },
    declareGlobalDataKeys() {
        globalRecords.dataKeys = {};
        let getKeys = Object.keys;
        const dataKeyRef = globalRecords.dataKeys;
        dataKeyRef.helmetRef = getKeys(helmets);
        dataKeyRef.chestRef = getKeys(chests);
        dataKeyRef.legRef = getKeys(legs);
        dataKeyRef.handRef = getKeys(hands);
        dataKeyRef.ringRef = getKeys(rings);
        dataKeyRef.amuletRef = getKeys(amulets);
        dataKeyRef.relicRef = getKeys(relics);
        dataKeyRef.fragRef = getKeys(fragments);
        dataKeyRef.quickRef = getKeys(quickUses);
        dataKeyRef.concRef = getKeys(concoctions);
        dataKeyRef.primRef = getKeys(primaries);
        dataKeyRef.meleeRef = getKeys(melees);
        dataKeyRef.secRef = getKeys(secondaries);
        dataKeyRef.rangedModRef = getKeys(rangedMods);
        dataKeyRef.rangedMutRef = getKeys(rangedMutators);
        dataKeyRef.meleeMutRef = getKeys(meleeMutators);
    },
    convertTagNamesToBackend(conversionTable) {
        let pushDebug = cycles.debugPushLine;
        let updateStep = cyclesLoop.updateSetupStep;

         //Convert from user-friendly stat names, to the names I use in the backend.
        pushDebug("FIND STAT TAG FILTERS");
        updateStep("Converting stat tag filters",true,1);
        if (conversionTable.length) {
            pushDebug("- Converting to back-end names");
            for (let tags in conversionTable) {
                for (let stats in referenceTable) {if (referenceTable[conversionTable[tags]]) {conversionTable[tags] = referenceTable[conversionTable[tags]];}}
            }
            pushDebug("- Finished");
            return conversionTable;
        }
        //Needed. If no tag filtering is in place, I need it to be null or an undefined array for everything else to work
        else {tagsFilter = null;pushDebug("- None found");}
    },
    * tableOcclusionHandling(tagsFilter) {
        let pushDebug = cycles.debugPushLine;
        let updateStep = cyclesLoop.updateSetupStep;
        let tableFilter = cycles.applyTableFilter;
        let tagFilter = cycles.applyTagFilter;
        const filterPath = filters.types;
        const path = cycles.vars;
        pushDebug("APPLYING STAT FILTERS TO TABLES...");
        updateStep("Filtering by Stat Tags",false,1);

        const filterGenSettings = [
            {stepString:"Amulets",filterNames:"amulets",actualTable:amulets,filterPathName:"amulet"},
            {stepString:"Rings",filterNames:"rings",actualTable:rings,filterPathName:"ring"},
            {stepString:"Relics",filterNames:"relics",actualTable:relics,filterPathName:"relic"},
            {stepString:"Fragments",filterNames:"fragments",actualTable:fragments,filterPathName:"fragment"},
            {stepString:"Consumables",filterNames:"consumables",actualTable:quickUses,filterPathName:"consumable"},
            {stepString:"Primaries",filterNames:"primaries",actualTable:primaries,filterPathName:"primary"},
            {stepString:"Melee",filterNames:"melee",actualTable:melees,filterPathName:"melee"},
            {stepString:"Secondaries",filterNames:"secondaries",actualTable:secondaries,filterPathName:"secondary"},
            {stepString:"Ranged Mutators",filterNames:"primaryMutators",actualTable:rangedMutators,filterPathName:"primaryMutator"},
            {stepString:"Melee Mutators",filterNames:"meleeMutators",actualTable:meleeMutators,filterPathName:"meleeMutator"},
            {stepString:"Ranged Mods",filterNames:"primaryMods",actualTable:rangedMods,filterPathName:"primaryMod"},
            {stepString:"Concoctions",filterNames:"concoctions",actualTable:concoctions,filterPathName:"concoction"},
            {stepString:"Helmets",filterNames:"helmets",actualTable:helmets,filterPathName:"helmets",tagOverride:["Armor"]},
            {stepString:"Chests",filterNames:"chests",actualTable:chests,filterPathName:"chests",tagOverride:["Armor"]},
            {stepString:"Hands",filterNames:"hands",actualTable:hands,filterPathName:"hands",tagOverride:["Armor"]},
            {stepString:"Legs",filterNames:"legs",actualTable:legs,filterPathName:"legs",tagOverride:["Armor"]},
            // {stepString:"Amulets",filterNames:"amulets",actualTable:amulets,filterPathName:"amulet"},
        ]
        //Tag overrides are to ensure that armor pieces aren't excluded from queries simply for not having another stat that the user filtered by, so that way armor combos can still be used for pings properly.

        for (let entry of filterGenSettings) {
            pushDebug(`- Starting ${entry.stepString}`);yield;
            const filtersPath = filterPath[entry.filterPathName].filter;
            path[entry.filterNames].Table = tableFilter(entry.actualTable,tagFilter(entry.actualTable,entry.tagOverride ? entry.tagOverride : tagsFilter,entry.stepString),filtersPath[1],filtersPath[2][0],entry.stepString);
            pushDebug(`- ${entry.stepString} completed`);
        }
        pushDebug("FILTERS COMPLETED");
    },
    * tableLocksHandling() {
        let pushDebug = cycles.debugPushLine;
        let updateStep = cyclesLoop.updateSetupStep;
        let comboGen = cycles.generateAnyCombinations;
        const filterPath = filters.types;
        const path = cycles.vars;
        pushDebug("APPLYING LOCK FILTERS TO TABLES...");
        //merge ranged mutator lock filters if any
        const rangedMutatorLocks = filters.mergeLockFilters(filterPath.primaryMutator.filter[0], filterPath.secondaryMutator.filter[0]);
        const rangedModLocks = filters.mergeLockFilters(filterPath.primaryMod.filter[0], filterPath.secondaryMod.filter[0]);

        const comboGenSettings = [
            {stepString: "Amulets",comboNames: "amuletCombos",locks: filterPath.amulet.filter[0],tableArray: [path.amulets.Table],slots: 1,isArmor: false},
            {stepString: "Rings",comboNames: "ringCombos",locks: filterPath.ring.filter[0],tableArray: [path.rings.Table],slots: 4,isArmor: false},
            {stepString: "Relics",comboNames: "relicCombos",locks: filterPath.relic.filter[0],tableArray: [path.relics.Table],slots: 1,isArmor: false},
            {stepString: "Fragments",comboNames: "fragmentCombos",locks: filterPath.fragment.filter[0],tableArray: [path.fragments.Table],slots: 3,isArmor: false},
            {stepString: "Consumables (Quick-use)",comboNames: "consumableCombos",locks: filterPath.consumable.filter[0],tableArray: [path.consumables.Table],slots: null,isArmor: false},
            {stepString: "Primaries",comboNames: "primaryCombos",locks: filterPath.primary.filter[0],tableArray: [path.primaries.Table],slots: 1,isArmor: false},
            {stepString: "Melee",comboNames: "meleeCombos",locks: filterPath.melee.filter[0],tableArray: [path.melee.Table],slots: 1,isArmor: false},
            {stepString: "Secondaries",comboNames: "secondaryCombos",locks: filterPath.secondary.filter[0],tableArray: [path.secondaries.Table],slots: 1,isArmor: false},
            {stepString: "Ranged Mutators",comboNames: "rangedMutatorCombos",locks: rangedMutatorLocks,tableArray: [path.primaryMutators.Table],slots: 2,isArmor: false},
            {stepString: "Melee Mutators",comboNames: "meleeMutatorCombos",locks: filterPath.meleeMutator.filter[0],tableArray: [path.meleeMutators.Table],slots: 1,isArmor: false},
            {stepString: "Ranged Mods",comboNames: "rangedModCombos",locks: rangedModLocks,tableArray: [path.primaryMods.Table],slots: 2,isArmor: false}
        ]

        for (let entry of comboGenSettings) {
            updateStep(`Applying Lock Filters to ${entry.stepString}`,false,1);yield;
            path[entry.comboNames] = comboGen(entry.locks,entry.tableArray,entry.slots,entry.isArmor);
        }

        updateStep("Applying Lock Filters to Variable Concoction Limit Tables",false,1);
        yield;
        path.concMegaTable = {};
        const currentMaxConcLimitPossible = 7;
        const concLockFilters = filterPath.concoction.filter[0];
        const concComboTable =  path.concoctions.Table;
        //generate possible combination tables, based on the maximum possible conc limit available within the game. Right now that is 7, but it could change later.
        for (let i=1;i<=currentMaxConcLimitPossible;i++) {path.concMegaTable[`concoctionCombos${i}`] = comboGen(concLockFilters,[concComboTable],i,false);}

        updateStep("Defining Armor Tables",false,1);
        yield;
    
        let armorLocksArray = [];
        const armorLocksPaths = ["helmets","chests","legs","hands"];
        //If armor locks exist, push the 0th entry as locks are set as arrays, but can only carry one entry as a lock.
        for (let entry of armorLocksPaths) {armorLocksArray.push(filterPath[entry].filter[0].length ? filterPath[entry].filter[0][0] :  null);}

        let armorTablesArray = [path.helmets.Table,path.chests.Table,path.legs.Table,path.hands.Table,]
        path.baseArmorCombos.Table = comboGen(armorLocksArray,armorTablesArray,4,true);
        path.armorCombos.Table = [...path.baseArmorCombos.Table];
        path.weightFirst.Table = [...path.baseArmorCombos.Table].sort((a, b) => +a[5] - +b[5]);

        path.weightFirst.Table = cycles.createCustomWeightTable(path.weightFirst.Table);
        let armorFirst = cycles.createSortedArmorTable(false);//TODO:Shift the armor to the same function as weight, later. Not a priority, still fast. Remember to look at armor pings when I do this.
        path.armorCombos.Table = [...armorFirst];

        delete path.baseArmorCombos.Table;
        delete armorFirst;
    },
    * comboCounterHandling() {
        let comboCounter = 0;
        let updateStep = cyclesLoop.updateSetupStep;
        const path = cycles.vars;
        let archsRef = globalRecords.archs;
        let classSet = [`${archsRef.one.class}`,`${archsRef.two.class}`];
        updateStep("Calculating Total Combinations...",false,1);
        yield;
        //These are all items that do NOT contribute to concoction limits, and as such can be calculated beforehand via easy multiplication
        const staticSets = (path.relicCombos.length
            * path.fragmentCombos.length
            // * path.consumableCombos.length
            * path.primaryCombos.length
            * path.secondaryCombos.length
            * path.meleeCombos.length
            * path.rangedMutatorCombos.length
            * path.meleeMutatorCombos.length
            * path.rangedModCombos.length);
        //Combinations counter loops

        //Preempt variable conc limits, since they are currently just tied to classes(static), rings, and amulets.
        let comboConcLimit = cyclesLoop.combineConcoctionLimit;
        globalRecords.concLimitCache = {}
        let concLimitCache = globalRecords.concLimitCache;
        let counterChecker = 0
        for (const ringCombo of path.ringCombos) {
            for (const amulet of path.amuletCombos) {
                const currentLimit = comboConcLimit(ringCombo,amulet,classSet);//TODO: Add more here if more item types start adding concoction limits
                const cacheName = `${amulet}${ringCombo}`;

                concLimitCache[cacheName] = path.concMegaTable[`concoctionCombos${currentLimit}`];//`concoctionCombos${currentLimit}`;
                let switchLength = concLimitCache[cacheName].length;

                if (switchLength<1) {switchLength=1;}
                comboCounter += switchLength;
                counterChecker++
                if (counterChecker > 100000) {counterChecker = 0;yield;}
            }
        }
        comboCounter *= staticSets; //Get the number of combos possible via variable concoction limits, and multi it by the static set precalc number for total combos possible.
        //If this is going to take way too long, then quit and let the user know.
        currentQueryLimit = 1000000000000;
        if (comboCounter > currentQueryLimit && !path.bypassLimit) {
            cyclesLoop.generationStop("","",true,true);
            alert(`Possible combinations (${comboCounter.toLocaleString()}) exceeds the limit of 1 TRILLION.\nAdjust your filters and try again as there is no feasible way in hell you're getting the answer you need by the time you need it, if we let this query continue.`);
            yield;
        }
        path.totalDisplayCombinations = comboCounter;
    },
    * reinstanceVars() {
        let path = cycles.vars;
        let filterPath = filters.types;
        let tagsFilter = cycles.convertTagNamesToBackend([...filterPath.tags.filter[0]]);
        let pushDebug = cycles.debugPushLine;
        let updateStep = cyclesLoop.updateSetupStep;

        cycles.declareGlobalDataKeys();
        readSelection("distributedCounter").innerHTML = 0;
        readSelection("skipsCounter").innerHTML = 0;
        
        //Stat/occlusion filters
        const occlusionHandlingGenerator = cycles.tableOcclusionHandling(tagsFilter);
        let resultFilters = occlusionHandlingGenerator.next();
        while (!resultFilters.done) {yield;resultFilters = occlusionHandlingGenerator.next();}
        yield;
        //Lock filters
        const locksHandlingGenerator = cycles.tableLocksHandling(tagsFilter);
        let resultLocks = locksHandlingGenerator.next();
        while (!resultLocks.done) {yield;resultLocks = locksHandlingGenerator.next();}
        yield;
        //counting total combos possible, not factoring skips reductions bc that would kinda be insane and shit to do frankly without killing our memory requirements
        const counterGenerator = cycles.comboCounterHandling();
        let resultCounter = counterGenerator.next();
        while (!resultCounter.done) {yield;resultCounter = counterGenerator.next();}
        yield;

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
        for (let i=1;i<=threadCount;i++) {
            initiateWorker(i,threadCount);
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
    checkProvidedRequirement(CringSet,Camulet,Crelic,mMutator1,rMutator1,CfragmentSet,Cmelee,Cprimary,Csecondary,rMod1,Cconcoction) {
        let required = [...globalRecords.lockedReqsArray];
        let provided = [...globalRecords.lockedProvisionsArray];
        const {ringRef,amuletRef,relicRef,fragRef,quickRef,concRef,primRef,meleeRef,secRef,rangedModRef,rangedMutRef,meleeMutRef} = globalRecords.dataKeys;
        
        for (let entry of CringSet) {
            const currentRing = rings[ringRef[entry]];
            if (currentRing.requires) {required.push(...currentRing.requires)}
            if (currentRing.provides) {provided.push(...currentRing.provides)}
        }

        const currentAmulet = amulets[amuletRef[Camulet[0]]];
        if (currentAmulet.requires) {required.push(...currentAmulet.requires)}
        if (currentAmulet.provides) {provided.push(...currentAmulet.provides)}

        const currentRelic = relics[relicRef[Crelic[0]]];
        if (currentRelic.requires) {required.push(...currentRelic.requires)}
        if (currentRelic.provides) {provided.push(...currentRelic.provides)}

        const currentMMutator = meleeMutators[meleeMutRef[mMutator1[0]]];
        if (currentMMutator.requires) {required.push(...currentMMutator.requires)}
        if (currentMMutator.provides) {provided.push(...currentMMutator.provides)}

        for (let entry of rMutator1) {
            if (!entry || entry === -1) {continue;}
            const currentRMutator = rangedMutators[rangedMutRef[entry]];
            if (currentRMutator.requires) {required.push(...currentRMutator.requires)}
            if (currentRMutator.provides) {provided.push(...currentRMutator.provides)}
        }
        for (let entry of Cconcoction) {
            if (!entry || entry === -1) {continue;}
            const currentConc = concoctions[concRef[entry]];
            if (currentConc.requires) {required.push(...currentConc.requires)}
            if (currentConc.provides) {provided.push(...currentConc.provides)}
        }
        for (let entry of CfragmentSet) {
            if (!entry || entry === -1) {continue;}
            const currentFrag = fragments[fragRef[entry]];
            if (currentFrag.requires) {required.push(...currentFrag.requires)}
            if (currentFrag.provides) {provided.push(...currentFrag.provides)}
        }

        const primaryHolder = primRef[Cprimary[0]] || "";
        const meleeHolder = meleeRef[Cmelee[0]] || "";
        const secondaryHolder = secRef[Csecondary[0]] || "";

        const primariesRef = primaries[primaryHolder];
        if (primariesRef.requires) {required.push(...primariesRef.requires)}
        if (primariesRef.provides) {provided.push(...primariesRef.provides)}
        const meleesRef = melees[meleeHolder];
        if (meleesRef.requires) {required.push(...meleesRef.requires)}
        if (meleesRef.provides) {provided.push(...meleesRef.provides)}
        const secondariesRef = secondaries[secondaryHolder];
        if (secondariesRef.requires) {required.push(...secondariesRef.requires)}
        if (secondariesRef.provides) {provided.push(...secondariesRef.provides)}

        if (rMod1[0] != -1) {
            const currentPrimaryMod = primariesRef.builtIN ? builtInPrimary[primariesRef.builtIN] : rangedMods[rangedModRef[rMod1[0] ?? 0]];
            if (currentPrimaryMod.requires) {required.push(...currentPrimaryMod.requires)}
            if (currentPrimaryMod.provides) {provided.push(...currentPrimaryMod.provides)}
        }
        if (meleesRef.builtIN) {
            const currentMeleeMod = builtInMelee[meleesRef.builtIN];
            if (currentMeleeMod.requires) {required.push(...currentMeleeMod.requires)}
            if (currentMeleeMod.provides) {provided.push(...currentMeleeMod.provides)}
        }
        if (rMod1[1] != -1) {
            const currentSecondaryMod = secondariesRef.builtIN ? builtInSecondary[secondariesRef.builtIN] : rangedMods[rangedModRef[rMod1[1] ?? 0]];
            if (currentSecondaryMod.requires) {required.push(...currentSecondaryMod.requires)}
            if (currentSecondaryMod.provides) {provided.push(...currentSecondaryMod.provides)}
        }

        required = new Set(required);
        provided = new Set(provided);

        for (let entry of required) {
            if (!provided.has(entry)) {return true;}
        }
    },
    pushStaticReqsAndProvisions() {
        //this shit is for storing active provisions and requirements, if applicable, from quick-use consumables, classes, passives, and traits even I guess. Storing though, not calling.
        const dataKeyRef = globalRecords.dataKeys;
        globalRecords.lockedReqsArray = [];
        globalRecords.lockedProvisionsArray = [];

        recordPath = globalRecords.consumableCombo;
        for (let i=1;i<=recordPath.length;i++) {
            let quickUse = dataKeyRef.quickRef[recordPath[i-1]];
            let pathRef = quickUses[quickUse];
            if (pathRef) {
                if (pathRef.requires) {globalRecords.lockedReqsArray.push(...pathRef.requires)}
                if (pathRef.provides) {globalRecords.lockedProvisionsArray.push(...pathRef.provides)}
            }
        }

        //Right now I don't allow any abilities or perks or traits or whatnot to actually have a requirement, because if a user is dumb
        //and if they selected an ability and left it enabled while it had a req that wasn't met, that meant the query couldn't ever get off the ground.
        let archsRecord = globalRecords.archs;
        let path1 = classInfo[archsRecord.one.class];let path2 = classInfo[archsRecord.two.class];
        let ability1 = archsRecord.one.ability;let ability2 = archsRecord.two.ability;
        let pathALT = globalRecords.searchSettingsToggles;
        const passives = ["passive1","passive2","passive3","passive4"];
        const passSettings = ["usePassive1","usePassive2","usePassive3","usePassive4","usePassive5","usePassive6","usePassive7","usePassive8"];

        if (!pathALT.usePrimePerk) {
            if (path1.requires) {globalRecords.lockedReqsArray.push(...path1.requires)}
            if (path1.provides) {globalRecords.lockedProvisionsArray.push(...path1.provides)}
        }//PRIME PERK
        if (!pathALT.useAbility1) {
            if (path1.abilities[ability1].requires) {globalRecords.lockedReqsArray.push(...path1.abilities[ability1].requires)}
            if (path1.abilities[ability1].provides) {globalRecords.lockedProvisionsArray.push(...path1.abilities[ability1].provides)}
        }//ABILITIES
        if (!pathALT.useAbility2) {
            if (path2.abilities[ability2].requires) {globalRecords.lockedReqsArray.push(...path2.abilities[ability2].requires)}
            if (path2.abilities[ability2].provides) {globalRecords.lockedProvisionsArray.push(...path2.abilities[ability2].provides)}
        }

        arch1 = path1.passives;
        arch2 = path2.passives;
        for (let i=1;i<=4;i++) {
            toggleCheck = globalRecords.searchSettingsToggles[passSettings[i-1]];
            let paths1 = arch1[passives[i-1]];
            if (!toggleCheck) {
                if (paths1.requires) {globalRecords.lockedReqsArray.push(...paths1.requires)}
                if (paths1.provides) {globalRecords.lockedProvisionsArray.push(...paths1.provides)}
            }
            
            toggleCheck = globalRecords.searchSettingsToggles[passSettings[i-1+4]];
            let paths2 = arch2[passives[i-1]];
            if (!toggleCheck) {
                if (paths2.requires) {globalRecords.lockedReqsArray.push(...paths2.requires)}
                if (paths2.provides) {globalRecords.lockedProvisionsArray.push(...paths2.provides)}
            }
        }
        const recordReference = globalRecords.greatTraitRecords; //Yoink all active trait values
        for (const trait of recordReference) {
            const traitPath = traits[trait.name];

            if (trait.level >= 1) {
                if (traitPath.requires) {globalRecords.lockedReqsArray.push(...traitPath.requires)}
                if (traitPath.provides) {globalRecords.lockedProvisionsArray.push(...traitPath.provides)}
            }
        }

        if (globalRecords.teamCount > 1) {globalRecords.lockedProvisionsArray.push("Team Members")}
        if (globalRecords.minionCount > 0) {globalRecords.lockedProvisionsArray.push("Active Summons")}
        if (globalRecords.isPerfectDodge) {globalRecords.lockedProvisionsArray.push("Perfect Dodge")}
        if (globalRecords.greyHealthActive) {globalRecords.lockedProvisionsArray.push("Grey Health Active")}

        //get rid of duplicates in the reqs/provisions
        globalRecords.lockedProvisionsArray = new Set(globalRecords.lockedProvisionsArray) ?? [];
        globalRecords.lockedReqsArray = new Set(globalRecords.lockedReqsArray) ?? [];
    },
    createCustomCyclesOverride(path) {
        let cyclesCustom = {};
            cyclesCustom.armorCombos = path.armorCombos;//armor tables
            cyclesCustom.weightFirst = path.weightFirst;
            cyclesCustom.totalDisplayCombinations = path.totalDisplayCombinations;//general variables
            cyclesCustom.stopCycles = path.stopCycles;
            cyclesCustom.setupCompleted = path.setupCompleted;
            cyclesCustom.armorIsGenerated = path.armorIsGenerated;
            cyclesCustom.bypassLimit = path.bypassLimit;
            cyclesCustom.debug = path.debug;
            cyclesCustom.cycleTimer = path.cycleTimer;
            cyclesCustom.cycleTotalTimer = path.cycleTotalTimer;
            cyclesCustom.cycleCounter = path.cycleCounter;
            cyclesCustom.counterInt = path.counterInt;
            cyclesCustom.printedSubObjects = path.printedSubObjects;
            cyclesCustom.threadCount = path.threadCount;
            cyclesCustom.workersRunning = path.workersRunning;
            cyclesCustom.lastTimerEvaluation = path.lastTimerEvaluation;
            cyclesCustom.finishedIteratorSetup = path.finishedIteratorSetup;
        return cyclesCustom;
    },
    clearBaseTableMemory(path) {
        delete path.weightFirst.Table;
        delete path.armorCombos.Table;
        delete path.baseArmorCombos;
        delete path.armorCombos;
        delete path.weightFirst;
        delete path.amulets;
        delete path.rings;
        delete path.relics;
        delete path.fragments;
        delete path.concoctions;
        delete path.consumables;
        delete path.primaries;
        delete path.melee;
        delete path.secondaries;
        delete path.primaryMutators;
        delete path.meleeMutators;
        delete path.primaryMods;
        delete path.helmets;
        delete path.chests;
        delete path.hands;
        delete path.legs;
    },
    endedClearMemory() {
        const varRef = cycles.vars;
        varRef.baseArmorCombos = {};
        varRef.armorCombos = {};
        varRef.weightFirst = {};
        varRef.amulets = {};
        varRef.rings = {};
        varRef.relics = {};
        varRef.fragments = {};
        varRef.concoctions = {};
        varRef.consumables = {};
        varRef.primaries = {};
        varRef.melee = {};
        varRef.secondaries = {};
        varRef.primaryMutators = {};
        varRef.meleeMutators = {};
        varRef.primaryMods = {};
        varRef.helmets = {};
        varRef.chests = {};
        varRef.hands = {};
        varRef.legs = {};
        delete varRef.ringCombos;
        delete varRef.amuletCombos;
        delete varRef.concMegaTable;
        delete varRef.relicCombos;
        delete varRef.meleeCombos;
        delete varRef.secondaryCombos;
        delete varRef.primaryCombos;
        delete varRef.consumableCombos;
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
        let extract = cycles.extractTableEntry;
        for (let i=0;i<filter.length;i++) {
            //If the inclusion item was filtered out in tags, add it back
            if (!table[filter[i]]) {table[filter[i]] = extract(filter[i]);}
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
        const dataSources = [
            amulets,
            rings,
            relics,
            fragments,
            primaries,
            melees,
            secondaries,
            rangedMutators,
            meleeMutators,
            rangedMods,
            concoctions,
            quickUses
        ];
    
        for (let dataSource of dataSources) {
            if (item in dataSource) {return {ID:Object.keys(dataSource).indexOf(item) };}
        }
    
        postMessage({command: `pushAlert`, data: `cycles.extractTableEntry(${item}) failed to find a valid item entry.`});
    },
    checkConcoctionLimit(table,slots,...items) {
        let limit = 0;
        let extract = cycles.extractTableEntry;

        for (let i = 0; i < slots; i++) {
            let currentTable = table.length > i ? table[i] : table[0];
            let item = items[i];
            if (!currentTable[item]) {currentTable[item] = extract(item);}
            if (currentTable[item].stats && currentTable[item].stats.ConcLimit) {limit += currentTable[item].stats.ConcLimit;}
        }

        return limit || 0;
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
        let getKeys = Object.keys;

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
        let valueKeys = getKeys(valueStorage);

        let objectArray = valueKeys.map(function(key) {return {[key]: valueStorage[key]} })
            .sort(function(a, b) {return +getKeys(a)[0] - +getKeys(b)[0];});

        for (let i=1;i<objectArray.length;i++) {
            const currentKey = getKeys(objectArray[i])[0];
            const currentEntry = objectArray[i][currentKey];
            const previousEntry = objectArray[i-1][getKeys(objectArray[i-1])[0]];
            //If the armor value of the previous weight is higher than the current armor value, use the prior armor combo instead
            if (currentEntry.armorValue <= previousEntry.armorValue) {objectArray[i][currentKey] = previousEntry;}
        }

        return objectArray;
    },
    generateAnyCombinations(specified, tables, slots, isArmor) {
        if (!tables) {alert(`ERROR: PREGENERATION ABORTED\n\nNo table references passed to combination pregeneration.\n\nSpecified: ${specified}\nSlots: ${slots}`);return [];}
        if (!slots && slots !== null) { alert(`ERROR: PREGENERATION ABORTED\n\nNo slot count passed to combination pregeneration.\n\nSpecified: ${specified}\nTables: ${tables}`);return [];}
    
        specified = specified || null;
        const slotNamesStarter = Object.keys(tables[0]);
        const combinations = [];
    
        if (slots === null) {//quick-use consumables are considered one combo, and don't give a slots number indicator. This is for stuff like that where it all gets pushed to one combo
            for (const entry of slotNamesStarter) {combinations.push(tables[0][entry].ID);}
            return combinations.length ? combinations : [""];
        }
    
        if (slots>slotNamesStarter.length) {//If we have more slots indicated than valid entries
            if (slotNamesStarter.length>specified.length) {slots = slotNamesStarter.length;}//then check if the amount of valid entries is greater than the amount of locked entries, and if so, slots is changed the to entries length
            else {slots = specified.length;}//otherwise, if we have more locked entries than valid entries, slots is changed to the specified entries length as specified entries get added back to the table length.
        }
    
        const iterateSeparately = tables.length > 1;
        const dataKeyRef = globalRecords.dataKeys;
        const {helmetRef,chestRef,legRef,handRef} = dataKeyRef;
        let getKeys = Object.keys;
        let arrayCheck = Array.isArray;
        let extractEntry = cycles.extractTableEntry;
    
        function addCombination(slotIndex, ...slots) {
            if (isArmor && slotIndex === 4) {
                const armorArray = [helmets[slots[0]].stats,chests[slots[1]].stats,legs[slots[2]].stats,hands[slots[3]].stats];
                const totalArmor = +armorArray.reduce((total, armorPiece) => {return total + armorPiece.Armor;}, 0).toFixed(2);
                const totalWeight = +armorArray.reduce((total, armorPiece) => {return total + armorPiece.Encumbrance;}, 0).toFixed(2);
                combinations.push([helmetRef.indexOf(slots[0]),chestRef.indexOf(slots[1]),legRef.indexOf(slots[2]),handRef.indexOf(slots[3]),totalArmor,totalWeight]);
            }
            else {
                const ids = slots.map(slot => {return tables.find(table => table[slot])[slot].ID || 0;});//If we got nothin, then give an index of 0 which will always be the first, blank entry of a data object
                combinations.push(ids);
            }
        }
    
        function processSlot(index, slotIndex, ...prevSlots) {
            const adjustedSlotIndex = slotIndex-1;
            const nextSlotIndex = slotIndex + 1;
            //If we have moved to an index value greater than our amount of slots, then push the combined slots, and end this combination before moving on to the next
            if (slotIndex > slots) {addCombination(adjustedSlotIndex, ...prevSlots);return;}
    
            const currentSlot = specified[adjustedSlotIndex];
            const slotNames = tables.length > adjustedSlotIndex ? getKeys(tables[adjustedSlotIndex]) : slotNamesStarter;
            const refTable = tables.length > adjustedSlotIndex ? tables[adjustedSlotIndex] : tables[0];
    
            if (arrayCheck(currentSlot)) {specified[adjustedSlotIndex] = currentSlot[0];}
            if (currentSlot === "") {refTable[currentSlot] = {ID:0};}
            if (currentSlot || currentSlot === "") {
                if (!iterateSeparately) {index = 0;}
                if (!refTable[currentSlot]) {refTable[currentSlot] = extractEntry(currentSlot);}
                processSlot(index, nextSlotIndex, ...prevSlots, currentSlot);
            }
            else {
                for (let i = index; i < slotNames.length; i++) {
                    const slotName = slotNames[i];
                    if (!slotName || prevSlots.includes(slotName)) {continue;}
                    if (!iterateSeparately) {index = i + 1;}
                    processSlot(index, nextSlotIndex, ...prevSlots, slotName);
                }
            }
        }
    
        processSlot(0, 1);//everything will always have at least one slot count specified, except quick-use consumables, so we start with a slots count of 1
        //but quick use consumables are considered one combo, and we have handling specific to those at the start before this even gets called

        //If we would have returned nothing, still return nothing but make it valid and usable nothing
        if (!isArmor && combinations.length === 0) {combinations.push(new Array(slots).fill(""));}//had no idea fill existed until now, that is nice
    
        return combinations;
    },
} 

let cyclesLoop = {
    "bestCombos": [],
    //Stop the cycles
    generationStop(endType,cycleWorker,endedWithoutIssue,endedBeforeWorkerCreation) {
        let varRef = cycles.vars;

        cycles.endedClearMemory();

        if (!cycleWorker && varRef.workersRunning) {
            for (let i=1;i<=varRef.threadCount;i++) {
                workers[`cycleWorker${i}`].terminate();
            }
        }
        else if (varRef.workersRunning) {workers[cycleWorker].terminate();}

        if (!cycleWorker) {
            varRef.stopCycles = true;
            cyclesLoop.lockFilterUI(false);

            cycles.debugPushLine(`Worker: BUILD GENERATION ABORTED<br>`);
            varRef.workersRunning = 0;
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
    lockFilterUI(isTrue) {
        if (isTrue) {
            readSelection("cycleSTOP").disabled = false;
            readSelection("cycleSTART").disabled = true;
            readSelection("settingsOpenThreads").disabled = true;
            readSelection("smartSkipsToggle").disabled = true;

            readSelection("settingsBoxHolderVisibility").style.display = "none";
            readSelection("filtersDisplayMegaBox").style.maxWidth = "100%";
        }
        else {
            readSelection("cycleSTOP").disabled = true;
            readSelection("cycleSTART").disabled = false;
            readSelection("settingsOpenThreads").disabled = false;
            readSelection("smartSkipsToggle").disabled = false;
            
            readSelection("settingsBoxHolderVisibility").style.display = "flex";
            readSelection("filtersDisplayMegaBox").style.maxWidth = "600px";
        }
    },
    //Start the cycles
    generationStart() {
        let currentTarget = playerDerivedStatistics[filters.types.vars.targetStatistic];
        let isTargetArray = Array.isArray(playerDerivedStatistics[filters.types.vars.targetStatistic]);
        let varRef = cycles.vars;
        console.log(currentTarget)


        if (isTargetArray) {
            let category = currentTarget[3];
            let abort = false;

            if (currentTarget[0] === "Composite") {
                let hasActiveBreakdown = false;
                for (let entry of globalRecords.damageBreakdownsArray) {
                    if (entry.isUsed) {hasActiveBreakdown = true;break;}
                }
                if (!hasActiveBreakdown) {abort = true;}
            }

            // switch (category) {
            //     case "Ability": 
            //         if (globalRecords.archs.one.ability != currentTarget[0] && globalRecords.archs.two.ability != currentTarget[0]) {abort = true;}
            //         break;
            //     case "Mod": 
            //         let locksOverPath = filters.types;

            //         if (globalWeaponPath.primaryMod === currentTarget[0]
            //         || globalWeaponPath.secondaryMod === currentTarget[0]) {break;}

            //         else if ((globalWeaponPath.primary && primaries[globalWeaponPath.primary].builtIN === currentTarget[0])
            //         || (globalWeaponPath.secondary && secondaries[globalWeaponPath.secondary].builtIN === currentTarget[0])) {break;}

            //         else {abort = true;}
            //         break;
            // }

            if (abort) {
                alert(`ERROR: You don't even have a damage breakdown active. Why are you trying to target it?\n\n- If you don't see a breakdown to turn on or include, you have no supported damage items locked. Hover/tap "Supported Damage Calcs [?]" to see a list of available options that will display when locked.\n- If you do see breakdowns, don't forget to toggle them on.\n\nQuery was aborted.`);
                return;
            }
        }
        if (varRef.stopCycles && filters.types.vars.targetStatistic) {
            varRef.stopCycles = false;
            if (varRef.debug) {readSelection("comboDebug").innerHTML = ".DEBUG VIEW";}

            varRef.finishedIteratorSetup = false;

        cycles.debugPushLine("UI LOCK START");

        if (isTargetArray) {
            filters.types.vars.oldTarget = [...playerDerivedStatistics[filters.types.vars.targetStatistic]];
        }
        else {
            filters.types.vars.oldTarget = `${filters.types.vars.targetStatistic}`;//This is purely for tracking what the statistic is for display purposes, if it is changed while running
        }

            cyclesLoop.lockFilterUI(true);
            // readSelection("searchImportButton").disabled = true;
            varRef.counterInt = 0;//console.log(navigator.hardwareConcurrency)
            // cycles.vars.workersRunning = cycles.vars.threadCount;
            globalRecords.currentBestStatistic = 0;
            varRef.lastTimerEvaluation = 0;
            cyclesLoop.bestCombos = [];

            cycles.iterator = cycles.reinstanceVars();
            function processVars() {
                if (cycles.iterator) {
                    const { done } = cycles.iterator.next();
                    if (done) {cycles.iterator = null;return;}
                    else if (varRef.finishedIteratorSetup) {return;}
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
            let varRef = cycles.vars;


            if (data.command === `yieldCombination`) {
                let increments = varRef.threadCount * 100000 * 1.5;//Determines how frequently the est time calculates, in terms of how many combos have passed
                varRef.counterInt += data.cycleCounter;
                let counterInt = varRef.counterInt;
                const totalCombos = varRef.totalDisplayCombinations;
                if (counterInt>totalCombos) {cyclesLoop.generationStop(`ERROR: MISMATCHED COMBO COUNT\n${counterInt} > ${totalCombos}\n\nIf you ever see this, take note of your filters then join the discord linked at the bottom of any page, and ping Vash with the filter info.`)}
                else if (counterInt === totalCombos) {
                    // readSelection("comboCount").innerHTML = varRef.totalDisplayCombinations.toLocaleString();
                    const endTotalTime = (performance.now() - varRef.cycleTotalTimer)/1000;console.log(endTotalTime);

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
                    varRef.stopCycles = true;
                    readSelection("cycleSTOP").disabled = true;
                    readSelection("cycleSTART").disabled = false;
                }

                    readSelection(`counterInt`).innerHTML = counterInt.toLocaleString();
                    readSelection(`combinationsDisplayCount`).style.width = `${((counterInt)/totalCombos)*100}%`;

                    let timerChecker = Math.floor(counterInt/increments) * increments;
                
                    if (varRef.firstBatch) {cycles.firstBatchUIAdjustment();}
                    //If the counter matches an increment level
                    else if (timerChecker > varRef.lastTimerEvaluation && varRef.workersRunning > 0) {
                        const newCycleTime = performance.now();
                        const timeDiff = newCycleTime - varRef.cycleTimer;
                        varRef.cycleTimer = newCycleTime;

                        const remainingCombos = totalCombos - counterInt;
                        varRef.cycleCounter = counterInt;
                        const timePerCycles = timeDiff/increments;
                        const estTime = (timePerCycles*remainingCombos)/1000;

                        const adjustedTime = estTime>60 ? 60 : 1;
                        let units = adjustedTime > 1 ? "m" : "s";
                        let newEst = estTime/adjustedTime;

                        remainderString = ``;
                        if (units===`m` && newEst>60) {
                            const remainder = newEst%60;
                            remainderString = ` ${remainder.toFixed(0)}m`;
                            newEst = (newEst-remainder)/60;
                            units = `hr`;
                        }
                        readSelection(`cyclesTimeRemaining`).innerHTML = `${newEst.toFixed(0)}${units}${remainderString}`;
                        varRef.lastTimerEvaluation = timerChecker;
                    }
                    if (data.isUpdated) {
                        let preArmor = data.preArmor;
                        let cycleObject = data.cycleObject;

                        if (preArmor >= globalRecords.currentBestStatistic) {
                            globalRecords.currentBestStatistic = preArmor;

                            const dataKeyRef = globalRecords.dataKeys;
                            const {ringRef,amuletRef,relicRef,fragRef,quickRef,concRef,primRef,meleeRef,secRef,rangedModRef,rangedMutRef,meleeMutRef} = dataKeyRef;
                            const archsRef = globalRecords.archs;

                            let ability1Path = classInfo[archsRef.one.class].abilities[archsRef.one.ability];
                            let ability2Path = classInfo[archsRef.two.class].abilities[archsRef.two.ability];
                            tooltipStorage.archetype1abilityIcon = `<div>${ability1Path.name || "No selected ability"}</div><br>${ability1Path.desc}`;
                            tooltipStorage.archetype2abilityIcon = `<div>${ability2Path.name || "No selected ability"}</div><br>${ability2Path.desc}`;

                            const {helmet,chest,leg,hand} = cycleObject.bestArmorSet ?? {helmet:"",chest:"",leg:"",hand:""};
                            const helmStatsRef = helmets[helmet];
                            readSelection("comboArmorHelmet").src = helmStatsRef.image;
                            tooltipStorage.comboArmorHelmet = `<div>${helmet}</div><br>Armor: ${helmStatsRef.stats.Armor ?? 0}<br>Weight: ${helmStatsRef.stats.Encumbrance ?? 0}`;
                            const chestStatsRef = chests[chest];
                            readSelection("comboArmorChest").src = chestStatsRef.image;
                            tooltipStorage.comboArmorChest = `<div>${chest}</div><br>Armor: ${chestStatsRef.stats.Armor ?? 0}<br>Weight: ${chestStatsRef.stats.Encumbrance ?? 0}`;
                            const legStatsRef = legs[leg];
                            readSelection("comboArmorLeg").src = legStatsRef.image;
                            tooltipStorage.comboArmorLeg = `<div>${leg}</div><br>Armor: ${legStatsRef.stats.Armor ?? 0}<br>Weight: ${legStatsRef.stats.Encumbrance ?? 0}`;
                            const handStatsRef = hands[hand]
                            readSelection("comboArmorHand").src = handStatsRef.image;
                            tooltipStorage.comboArmorHand = `<div>${hand}</div><br>Armor: ${handStatsRef.stats.Armor ?? 0}<br>Weight: ${handStatsRef.stats.Encumbrance ?? 0}`;

                            const {CringSet,Crelic,CfragmentSet,Camulet,Cconcoction,Cprimary,Csecondary,Cmelee,CrangedMutators,CmeleeMutators,CrangedMods} = cycleObject;

                            const relicStatsRef = relics[relicRef[Crelic[0]]]
                            readSelection("comboRelic").src = Crelic[0] ? relicStatsRef.image : relics[""].image;
                            tooltipStorage.comboRelic = `<div>${relicStatsRef.name}</div><br>${relicStatsRef.desc}`;
                            
                            const amuStatsRef = amulets[amuletRef[Camulet[0]]];
                            readSelection("comboAmulet").src = Camulet[0] ? amuStatsRef.image : amulets[""].image;
                            tooltipStorage.comboAmulet = `<div>${amuStatsRef.name}</div><br>${amuStatsRef.desc}`;

                            const comboRingID = ["comboRing1","comboRing2","comboRing3","comboRing4"];
                            for (let i=0;i<4;i++) {
                                const ringStatsRef = rings[ringRef[CringSet[i]]];
                                readSelection(comboRingID[i]).src = CringSet[i] ? ringStatsRef.image : rings[""].image;
                                tooltipStorage[`comboRing${i+1}`] = `<div>${ringStatsRef.name}</div><br>${ringStatsRef.desc}`;
                            }

                            primaryHolder = primRef[Cprimary[0]] || "";
                            meleeHolder = meleeRef[Cmelee[0]] || "";
                            secondaryHolder = secRef[Csecondary[0]] || "";

                            let primariesRef = primaries[primaryHolder];
                            let meleesRef = melees[meleeHolder];
                            let secondariesRef = secondaries[secondaryHolder];

                            readSelection("comboWeapon1").src = primariesRef.image;     tooltipStorage.comboWeapon1 = primaryHolder ? `<div>${primariesRef.name}</div><br>${primariesRef.desc}` : "";
                            readSelection("comboWeapon2").src = meleesRef.image;        tooltipStorage.comboWeapon2 = meleeHolder ? `<div>${meleesRef.name}</div><br>${meleesRef.desc}` : "";
                            readSelection("comboWeapon3").src = secondariesRef.image;   tooltipStorage.comboWeapon3 = secondaryHolder ? `<div>${secondariesRef.name}</div><br>${secondariesRef.desc}` : "";

                            const primariesModRef = rangedModRef[CrangedMods[0]], primariesMutRef = rangedMutRef[CrangedMutators[0]];
                            readSelection("comboPrimaryMutator").innerHTML = primariesMutRef || "";
                            tooltipStorage.comboPrimaryMutator = `<div>${primariesMutRef || ""}</div><br>${rangedMutators[primariesMutRef || ""].desc}`;
                            readSelection("comboPrimaryMod").innerHTML = primariesRef.builtIN || primariesModRef || "";
                            tooltipStorage.comboPrimaryMod = primariesRef.builtIN ? `<div>${primariesRef.builtIN || ""}</div><br>${builtInPrimary[primariesRef.builtIN || ""].desc}` : `<div>${primariesModRef || ""}</div><br>${rangedMods[primariesModRef || ""].desc}`;

                            const meleeMutStatsRef = meleeMutRef[CmeleeMutators[0]];
                            readSelection("comboMeleeMutator").innerHTML = meleeMutStatsRef || "";
                            tooltipStorage.comboMeleeMutator = `<div>${meleeMutStatsRef || ""}</div><br>${meleeMutators[meleeMutStatsRef || ""].desc}`;
                            readSelection("comboMeleeMod").innerHTML = meleesRef.builtIN;
                            tooltipStorage.comboMeleeMod = meleesRef.builtIN ? `<div>${meleesRef.builtIN || ""}</div><br>${builtInMelee[meleesRef.builtIN || ""].desc}` : ``;

                            const secondariesModRef = rangedModRef[CrangedMods[1]], secondariesMutRef = rangedMutRef[CrangedMutators[1]];
                            readSelection("comboSecondaryMutator").innerHTML = secondariesMutRef || "";
                            tooltipStorage.comboSecondaryMutator = `<div>${secondariesMutRef || ""}</div><br>${rangedMutators[secondariesMutRef || ""].desc}`;
                            readSelection("comboSecondaryMod").innerHTML = secondariesRef.builtIN || secondariesModRef || "";
                            tooltipStorage.comboSecondaryMod = secondariesRef.builtIN ? `<div>${secondariesRef.builtIN || ""}</div><br>${builtInSecondary[secondariesRef.builtIN || ""].desc}` : `<div>${secondariesModRef || ""}</div><br>${rangedMods[secondariesModRef || ""].desc}`;



                            let concRow = readSelection("comboConcoctionsBox");
                            concRow.innerHTML = "";
                            for (let i=0;i<Cconcoction.length;i++) {let concBox = `
                                <div class="comboConsumableImageBox hasHoverTooltip" id="comboConc${i+1}Holder">
                                    <img class="comboArmorImage" src="/images/Remnant/clear.png" id="comboConc${i+1}" alt="Combo Consumable1">
                                </div>`;
                                concRow.innerHTML += concBox;
                            }
                            for (let i=0;i<Cconcoction.length;i++) {
                                let consReference = concRef[Cconcoction[i]] ?? "";
                                const statsRef = concoctions[consReference];
                                readSelection(`comboConc${i+1}`).src = statsRef.image;
                                tooltipStorage[`comboConc${i+1}Holder`] = consReference ? `<div>${statsRef.name}</div><br>${statsRef.desc}` : "";
                            }

                            for (let i=0;i<globalRecords.consumableCombo.length;i++) {let quickUseBox = `
                                <div class="comboConsumableImageBox hasHoverTooltip" id="comboQuickUse${i+1}Holder">
                                    <img class="comboArmorImage" src="/images/Remnant/clear.png" id="comboConsumable${i+1}" alt="Combo Consumable1">
                                </div>`;
                                concRow.innerHTML += quickUseBox;
                            }
                            for (let i=0;i<globalRecords.consumableCombo.length;i++) {
                                let consReference = quickRef[globalRecords.consumableCombo[i]] ?? "";
                                const statsRef = quickUses[consReference];
                                readSelection(`comboConsumable${i+1}`).src = statsRef.image;
                                tooltipStorage[`comboQuickUse${i+1}Holder`] = consReference ? `<div>${statsRef.name}</div><br>${statsRef.desc}` : "";
                            }

                            cyclesLoop.updateCycleRecordMainUI(cycleObject);//Updates the ALT records with everything from the cycle object, for the purposes of URL exports in results

                            comboPath = cyclesLoop.bestCombos;
                            comboPath.unshift({"bestValue": preArmor.toFixed(2),"link": manipulateURL.updateURLparameters(false,true)});
                            let oldTargetRef = filters.types.vars.oldTarget;
                            let targetName = Array.isArray(oldTargetRef) ? oldTargetRef[0] + " " + oldTargetRef[2] : oldTargetRef;
                            readSelection("comboTargetDisplay").innerHTML = `<div class="bestOptionsRow">Target Statistic: ${targetName}</div>`
                            for (let i=0;i<comboPath.length;i++) {
                                if (i>49) {break;}
                                let currentSet = comboPath[i];
                                let textPrefix = i+1;
                                if (i===0) {textPrefix = `Current Best`;}
                                if (currentSet.bestValue) {
                                readSelection("comboTargetDisplay").innerHTML += `
                                <div class="bestOptionsRow">${textPrefix}: <a href="${currentSet.link}" rel="noopener noreferrer" target="_blank" class="bestOptionsLink">${currentSet.bestValue}</a></div>
                                `}
                            }

                            readSelection(`lastFound`).innerHTML = `Last Loadout Found at #${counterInt.toLocaleString()}`
                            readSelection(`comboDisplay`).innerHTML = `${[fragRef[CfragmentSet[0]],fragRef[CfragmentSet[1]],fragRef[CfragmentSet[2]]]}`;
                            //Decided not to have tooltips for frags on the query display, kinda no point? The name is obv.

                            tooltips.loadTooltips();
                        }
                    }

                    if (counterInt === totalCombos) {
                    cyclesLoop.generationStop("",null,true); 
                    }
            }
            else {
                switch (data.command) {
                    case `canIHaveSomeMore`: 
                        let queueStorage = varRef.queueStorage;
                        workerIdentifier = data.workerIdentifier;

                        if (!cycles.iterator && !queueStorage.length) {workers[`cycleWorker${workerIdentifier}`].terminate();}//if distribution is done and the queue is empty, kill it
                        else if (cycles.iterator) {cycles.iterator.next();}//otherwise if dist is still going, ask it for more

                        if (queueStorage.length) {//ideally this will only fail if we're out of combos to distribute //TODO: add safety handling here later
                            let messageComboArray = queueStorage[0];
                            const stringID = `cycleWorker${workerIdentifier}`;
                            workers[stringID].postMessage({command:`dumpCombos`,messageComboArray,workerIdentifier});
                            varRef.queueStorage.shift();
                            workers[stringID].postMessage({command:'comboReceived'});
                        }
                        //we used to kill workers at this point if a length check failed, but we shifted that handling to the cycleWorker.js file
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
        let returnLimit = 1;

        const ringRef = globalRecords.dataKeys.ringRef;
        const amuletRef = globalRecords.dataKeys.amuletRef;

        for (let item1 of ringCombo) {returnLimit += rings[ringRef[item1]].stats.ConcLimit || 0;}
        for (let item3 of amulet) {returnLimit += amulets[amuletRef[item3]].stats.ConcLimit || 0;}
        for (let item5 of classSet) {
            if (classInfo[item5].primeStats.ConcLimit) {returnLimit += classInfo[item5].primeStats.ConcLimit || 0; }
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
        let getKeys = Object.keys;
        // key = +key;
    
        while (start <= end) {
            let middle = Math.floor((start + end) / 2);
            let middleObject = path[middle];
            let middleKey = +getKeys(middleObject)[0];

            if (middleKey === key) {return {indexID:middle,keyID:middleKey.toString()}}//If found, return index/key pair
            else if (middleKey < key) {start = middle+1;}//middle<key, move start
            else {end = middle-1;}//middle>key, move end
        }

        if (nearest) {
            let returnObect,index;
            if (isArmor) {index = start>=path.length ? path.length-1 : start;}//Armor tables - closest GREATER. If start is out of bounds, return the last set
            else {index = end<0 ? 0: end;}//Weight tables - closest UNDER. If end is out of bounds, return the first set
            returnObect = {indexID:index,keyID:getKeys(path[index])[0]};
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
        //Also set the default maximum weight class to flop if not specified
        let targetWeightClass = filters.types.vars.dodgeClass || 4;
        let threshold = 0;let bestArmorSet; 
        // targetArmor = targetArmor;

        switch(targetWeightClass) {
            case 1: threshold = 25.00 + weightThreshold;break;
            case 2: threshold = 50.00 + weightThreshold;break;
            case 3: threshold = 75.00 + weightThreshold;break;
            case 4: threshold = 10000 + weightThreshold;break;//This just needs to be a really big number, bigger than an possible weight, doesn't actually matter what it is.
        }

        let targetWeight = +((threshold/weightModifier)-existingWeight).toFixed(2);
        let targetString = `${targetArmor}${targetWeight}`;
        if (globalRecords.cachedArmorResults[targetString]) {globalRecords.armor = globalRecords.cachedArmorResults[targetString];return true;}
        // console.log(targetArmor,targetWeight)

        let isPossible = isExact ?? true;//Find exact values if specified, otherwise maximize armor per the given weight category
        let armorSearch,weightSearch;
        if (isPossible) {
            let armorFirst = cycles.vars.armorCombos.Table;
            armorSearch = cyclesLoop.binarySearch(armorFirst,targetArmor,true,true);
            if (armorSearch != -1) {
                let path = armorFirst[armorSearch.indexID][armorSearch.keyID];
                const weights = +Object.keys(path[0])[0];

                if (weights <= targetWeight) {bestArmorSet = path[0][weights];}
                else {isPossible=false;}
            }
        }
        if (!isPossible) {
            let weightFirst = cycles.vars.weightFirst.Table;
            //If the target armor or closest approx armor, had no weight options under the target weight, check weight table instead.
            weightSearch = cyclesLoop.binarySearch(weightFirst,targetWeight,true,false);

            if (weightSearch != -1) {bestArmorSet = weightFirst[weightSearch.indexID][weightSearch.keyID];}
            else {postMessage({command: `pushAlert`, data: "ERROR: Somehow an armor ping failed. Join the discord and let Vash know."});}
        }

        if (bestArmorSet) {
            const datakeyRef = globalRecords.dataKeys;
            const {helmet,chest,leg,hand} = bestArmorSet;
            bestArmorSet = {
                helmet: datakeyRef.helmetRef[helmet],
                chest: datakeyRef.chestRef[chest],
                leg: datakeyRef.legRef[leg],
                hand: datakeyRef.handRef[hand]
            }
            globalRecords.cachedArmorResults[targetString] = bestArmorSet;
        }

        globalRecords.armor = bestArmorSet ?? {helmet:"",chest:"",leg:"",hand:""};
        return true;
    },
    //This is now only used within the worker cycleWorker
    evaluateCombinationsInt(comboArray,midQuery,targetStatistic) {
        let cycleCounter = 0;
        let comboArrayLength = comboArray.length;
        let betterFound = false;
        let recordRefresh = cyclesLoop.updateCycleRecord;

        for (let i=comboArrayLength-1;i>=0;i--) {
            cycleCounter++;
            let cycleObject = comboArray[i];

            recordRefresh(cycleObject);//Assigns cycle items to records so updateFormulas can work
            let preArmor = updateFormulas(true);//If armor is needed, it will return it. Otherwise it will return stats.

            if (preArmor[targetStatistic] > midQuery.recordedStatistic) {
                midQuery.recordedStatistic = preArmor[targetStatistic];
                midQuery.bestLoadout = cycleObject;
                midQuery.bestLoadout.bestArmorSet = {...globalRecords.armor};
                betterFound = true;
            }
            comboArray.splice(i,1);
        }
        postMessage({command:`yieldCombination`,isUpdated:betterFound,cycleObject:midQuery.bestLoadout,preArmor:midQuery.recordedStatistic,cycleCounter});
    },
    evaluateCombinationsArray(comboArray,midQuery,targetStatistic) {
        let targetDamageCategory = midQuery.targetDamageCategory
        let cycleCounter = 0;
        let comboArrayLength = comboArray.length;
        let betterFound = false;
        let recordRefresh = cyclesLoop.updateCycleRecord;

        for (let i=comboArrayLength-1;i>=0;i--) {
            cycleCounter++;
            let cycleObject = comboArray[i];

            recordRefresh(cycleObject);//Assigns cycle items to records so updateFormulas can work
            let preArmor = updateFormulas(true);//If armor is needed, it will return it. Otherwise it will return stats.

            if (preArmor[targetDamageCategory][targetStatistic] > midQuery.recordedStatistic) {
                midQuery.recordedStatistic = preArmor[targetDamageCategory][targetStatistic];
                midQuery.bestLoadout = cycleObject;
                midQuery.bestLoadout.bestArmorSet = {...globalRecords.armor};
                betterFound = true;
            }
            comboArray.splice(i,1);
        }
        postMessage({command:`yieldCombination`,isUpdated:betterFound,cycleObject:midQuery.bestLoadout,preArmor:midQuery.recordedStatistic,cycleCounter});
    },
    updateCycleRecord(value) {
        const dataKeyRef = globalRecords.dataKeys;
        const {ringRef,amuletRef,relicRef,fragRef,quickRef,concRef,primRef,meleeRef,secRef,rangedModRef,rangedMutRef,meleeMutRef} = dataKeyRef;
        const {CringSet,Crelic,CfragmentSet,Camulet,Cconcoction,Cprimary,Csecondary,Cmelee,CrangedMutators,CmeleeMutators,CrangedMods} = value;

        globalRecords.accessories = {
            amulet: amuletRef[Camulet] || "",
            ring1: ringRef[CringSet[0]] || "",
            ring2: ringRef[CringSet[1]] || "",
            ring3: ringRef[CringSet[2]] || "",
            ring4: ringRef[CringSet[3]] || "",
            relic: relicRef[Crelic[0]] || ""
        }

        globalRecords.greatRowRecords[0].name = fragRef[CfragmentSet[0]] || "";
        globalRecords.greatRowRecords[1].name = fragRef[CfragmentSet[1]] || "";
        globalRecords.greatRowRecords[2].name = fragRef[CfragmentSet[2]] || "";
        // for (let i=4;i<=9;i++) {globalRecords.greatRowRecords[i-1].name = "";}

        globalRecords.greatConcoctionRecords = [...Cconcoction.map(item => {
            return concRef[item];
        })];

        let primaryRef = primRef[Cprimary[0]] || "";
        let isPrimaryRusted = primaryRef === "Rusty Lever Action";
        let secondaryRef = secRef[Csecondary[0]] || "";
        let isSecondaryRusted = secondaryRef === "Rusty Repeater";

        globalRecords.weapons = {
            primary: primRef[Cprimary[0]] || "",
            primaryMutator: isPrimaryRusted ? "" : rangedMutRef[CrangedMutators[0]] || "",
            primaryMod: isPrimaryRusted ? "" : rangedModRef[CrangedMods[0]] || "",
            melee: meleeRef[Cmelee[0]] || "",
            meleeMutator: meleeMutRef[CmeleeMutators[0]] || "",
            secondary: secRef[Csecondary[0]] || "",
            secondaryMutator: isSecondaryRusted ? "" : rangedMutRef[CrangedMutators[1]] || "",
            secondaryMod: isSecondaryRusted ? "" : rangedModRef[CrangedMods[1]] || "",
        }
    },
    updateCycleRecordMainUI(value) {//No longer needs to be alt variants, this version is only used by the optimizer which is now separate from the calc
        const dataKeyRef = globalRecords.dataKeys;
        const {ringRef,amuletRef,relicRef,fragRef,quickRef,concRef,primRef,meleeRef,secRef,rangedModRef,rangedMutRef,meleeMutRef} = dataKeyRef;
        const {CringSet,Crelic,CfragmentSet,Camulet,Cconcoction,Cprimary,Csecondary,Cmelee,CrangedMutators,CmeleeMutators,CrangedMods} = value;

        globalRecords.accessories = {
            amulet: amuletRef[Camulet] || "",
            ring1: ringRef[CringSet[0]] || "",
            ring2: ringRef[CringSet[1]] || "",
            ring3: ringRef[CringSet[2]] || "",
            ring4: ringRef[CringSet[3]] || "",
            relic: relicRef[Crelic[0]] || ""
        }

        globalRecords.greatRowRecords[0].name = fragRef[CfragmentSet[0]] || "";
        globalRecords.greatRowRecords[1].name = fragRef[CfragmentSet[1]] || "";
        globalRecords.greatRowRecords[2].name = fragRef[CfragmentSet[2]] || "";
        // for (let i=4;i<=9;i++) {globalRecords.greatRowRecords[i-1].name = "";}

        globalRecords.greatConcoctionRecords = [...Cconcoction.map(item => {
            return concRef[item];
        })];
        globalRecords.greatConsumableRecords = [...globalRecords.consumableCombo.map(item => {
            return quickRef[item];
        })];

        let primaryRef = primRef[Cprimary[0]] || "";
        let isPrimaryRusted = primaryRef === "Rusty Lever Action";
        let secondaryRef = secRef[Csecondary[0]] || "";
        let isSecondaryRusted = secondaryRef === "Rusty Repeater";

        globalRecords.weapons = {
            primary: primRef[Cprimary[0]] || "",
            primaryMutator: isPrimaryRusted ? "" : rangedMutRef[CrangedMutators[0]] || "",
            primaryMod: isPrimaryRusted ? "" : rangedModRef[CrangedMods[0]] || "",
            melee: meleeRef[Cmelee[0]] || "",
            meleeMutator: meleeMutRef[CmeleeMutators[0]] || "",
            secondary: secRef[Csecondary[0]] || "",
            secondaryMutator: isSecondaryRusted ? "" : rangedMutRef[CrangedMutators[1]] || "",
            secondaryMod: isSecondaryRusted ? "" : rangedModRef[CrangedMods[1]] || "",
        }
        
        globalRecords.armor = value.bestArmorSet;
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
        let filterHTML = filters.displayFilterHTML;
        table.sort();
        pathHTML.innerHTML = "";
        for (let filterName in table) {
            pathHTML.innerHTML += filterHTML(table[filterName],filterBox,filterTable,filterIndex);
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
        filters.updateLockedBreakdownOptions();
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
        filterName = decodeURIComponent(filterName);
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
        filters.updateLockedBreakdownOptions();
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
        const filterPath = filters.types;
        filterPath.amulet.filter[0] = [];
        filterPath.ring.filter[0] = [];
        filterPath.relic.filter[0] = [];
        filterPath.fragment.filter[0] = [];
        filterPath.concoction.filter[0] = [];
        filterPath.consumable.filter[0] = [];
        filterPath.primary.filter[0] = [];
        filterPath.primaryMutator.filter[0] = [];
        filterPath.primaryMod.filter[0] = [];
        filterPath.melee.filter[0] = [];
        filterPath.meleeMutator.filter[0] = [];
        filterPath.secondary.filter[0] = [];
        filterPath.secondaryMutator.filter[0] = [];
        filterPath.secondaryMod.filter[0] = [];

        let popFilter = filters.populateFilters;

        popFilter(`amuletsLocksContainer`,`amulet`,0);
        popFilter(`ringsLocksContainer`,`ring`,0);
        popFilter(`relicsLocksContainer`,`relic`,0);
        popFilter(`fragmentsLocksContainer`,`fragment`,0);
        popFilter(`concoctionsLocksContainer`,`concoction`,0);

        popFilter(`consumablesLocksContainer`,`consumable`,0);
        popFilter(`primaryLocksContainer`,`primary`,0);
        popFilter(`primaryMutatorLocksContainer`,`primaryMutator`,0);
        popFilter(`primaryModLocksContainer`,`primaryMod`,0);
        popFilter(`meleeLocksContainer`,`melee`,0);

        popFilter(`meleeMutatorLocksContainer`,`meleeMutator`,0);
        popFilter(`secondaryLocksContainer`,`secondary`,0);
        popFilter(`secondaryMutatorLocksContainer`,`secondaryMutator`,0);
        popFilter(`secondaryModLocksContainer`,`secondaryMod`,0);
    },
    clearOcclusionsFilter() {
        const filterPath = filters.types;
        filterPath.amulet.filter[1] = [];
        filterPath.ring.filter[1] = [];
        filterPath.relic.filter[1] = [];
        filterPath.fragment.filter[1] = [];
        filterPath.concoction.filter[1] = [];
        filterPath.consumable.filter[1] = [];
        filterPath.primary.filter[1] = [];
        filterPath.primaryMutator.filter[1] = [];
        filterPath.primaryMod.filter[1] = [];
        filterPath.melee.filter[1] = [];
        filterPath.meleeMutator.filter[1] = [];
        filterPath.secondary.filter[1] = [];

        let popFilter = filters.populateFilters;

        popFilter(`amuletsOcclusionsContainer`,`amulet`,1);
        popFilter(`ringsOcclusionsContainer`,`ring`,1);
        popFilter(`relicsOcclusionsContainer`,`relic`,1);
        popFilter(`fragmentsOcclusionsContainer`,`fragment`,1);
        popFilter(`concoctionsOcclusionsContainer`,`concoction`,1);

        popFilter(`consumablesOcclusionsContainer`,`consumable`,1);
        popFilter(`primaryOcclusionsContainer`,`primary`,1);
        popFilter(`primaryMutatorOcclusionsContainer`,`primaryMutator`,1);
        popFilter(`primaryModOcclusionsContainer`,`primaryMod`,1);
        popFilter(`meleeOcclusionsContainer`,`melee`,1);

        popFilter(`meleeMutatorOcclusionsContainer`,`meleeMutator`,1);
        popFilter(`secondaryOcclusionsContainer`,`secondary`,1);
    },
    displayFilterHTML(filterName,filterBox,filterTable,filterIndex) {
        //Stop any ' or " from messing everything up, like Brewmaster's Cork
        const encodedFilterName = encodeURIComponent(filterName).replace(/'/g, "\\'");
        return  `<div class="filtersTagsRowContainer">
                    <div class="filtersTagName">${filterName}</div>
                    <input type="button" class="filtersTagDelete" onclick="filters.deleteFilter('${encodedFilterName}','${filterBox}','${filterTable}','${filterIndex}')" value="X">
                </div>`;
    },
    mergeLockFilters(primaryLocks, secondaryLocks) {
        //this is for shit like mutators and mods, to merge their locks together
        //if there is no lock for one slot, but there is one after, ensure the first slot is null so it is read properly by generateAnyCombinations() later
        let locks = [];
        if (primaryLocks.length) {
            locks.push(primaryLocks);
            if (secondaryLocks.length) {locks.push(secondaryLocks);}
        }
        else if (!primaryLocks.length && secondaryLocks.length) {locks.push(null,secondaryLocks);}
        return locks;
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

        globalRecords.useREdamage = readSelection("settingsUseNonStandardDR").checked;
        globalRecords.useDMGKept = readSelection("settingsUseNonStandardDR").checked;

        let path = globalRecords.searchSettingsToggles;
        path.usePrimePerk = readSelection("settingsUsePrimePerk").checked;
		path.useAbility1 = readSelection("settingsUseAbility1").checked;
		path.useAbility2 = readSelection("settingsUseAbility2").checked;

        for (let i=1;i<=4;i++) {
            path[`usePassive${i}`] = readSelection(`settingsUsePassive${i}`).checked;
            path[`usePassive${i+4}`] = readSelection(`settingsUsePassive${i+4}`).checked;
        }

        cycles.vars.bypassLimit = readSelection("bypassLimit").checked;

        path = globalRecords;
        let enemyCount = readSelection("enemyCountSlider").value;

        path.enemyCount = enemyCount;
        readSelection("selectedEnemyCount").innerHTML = enemyCount;
        path.greyHealthActive = readSelection("settingsUseGreyHealth").checked;
        path.isPerfectDodge = readSelection("settingsUsePerfectDodge").checked;
        path.isEvade = readSelection("settingsUseEvades").checked;

        globalRecords.enableWeakspots = readSelection(`settingsUseWeakspots`).checked;
        globalRecords.enableCrits = readSelection(`settingsUseCrits`).checked;

        globalRecords.enableEngTurretModes = readSelection("enableEngTurretModes").checked;


        if (!readSelection("enableMainSwings").checked && !readSelection("enableMeleeEffects").checked) {
            let opposingStat = "";
            if (globalRecords.enableMainSwings != readSelection("enableMainSwings").checked){opposingStat = "enableMeleeEffects";}
            else {opposingStat = "enableMainSwings";}
            readSelection(opposingStat).checked = true;//if both would be turned off, turn ON the other stat that wasn't just modified
        }
        globalRecords.enableMainSwings = readSelection("enableMainSwings").checked;
        globalRecords.enableMeleeEffects = readSelection("enableMeleeEffects").checked;

        globalRecords.useSmartSkips = readSelection("smartSkipsToggle").checked;
        globalRecords.findLightestArmor = readSelection("settingsFindLightestArmor").checked;

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
        filters.updateLockedBreakdownOptions();
    },
    updateLockedBreakdownOptions() {
        breakdownOptions = readSelection("compositeQueryDisplaybox");
        breakdownOptions.innerHTML = "";

        let locksOverPath = filters.types;
        let globalWeaponPath = globalRecords.weapons;

        globalWeaponPath.primary = locksOverPath.primary.filter[0][0] ?? "";
        globalWeaponPath.secondary = locksOverPath.secondary.filter[0][0] ?? "";

        globalWeaponPath.primaryMod = locksOverPath.primaryMod.filter[0][0] ?? "";
        globalWeaponPath.secondaryMod = locksOverPath.secondaryMod.filter[0][0] ?? "";

        function addBreakdownName(pathArray) {
            let breakdownListArray = [];
            for (let path of pathArray) {
                if (path.customStats && path.customStats.customDPS) {breakdownListArray.push(path.customStats.customDPS)}
            }
            return breakdownListArray;
        }

        const ability1Path = classInfo[globalRecords.archs.one.class].abilities[globalRecords.archs.one.ability];//customStats
        const ability2Path = classInfo[globalRecords.archs.two.class].abilities[globalRecords.archs.two.ability];
        const mod1Path = (globalWeaponPath.primary && primaries[globalWeaponPath.primary].builtIN) ? builtInPrimary[primaries[globalWeaponPath.primary].builtIN] : rangedMods[globalWeaponPath.primaryMod];
        const mod2Path = (globalWeaponPath.secondary && secondaries[globalWeaponPath.secondary].builtIN) ? builtInsecondary[secondaries[globalWeaponPath.secondary].builtIN] : rangedMods[globalWeaponPath.secondaryMod];

        let pathArray = [ability1Path,ability2Path,mod1Path,mod2Path];
        let breakdownListArray = addBreakdownName(pathArray);
        if (locksOverPath.melee.filter[0][0]) {breakdownListArray.push("MeleeDamage");}

        //If we don't see a stored value within this list anymore, then remove the stored value
        for (let i=0;i<globalRecords.damageBreakdownsArray.length;i++) {
            let found = false;
            for (let pathEntry of breakdownListArray) {
                if (globalRecords.damageBreakdownsArray[i].name === pathEntry) {found = true;break;}
            }
            if (!found) {globalRecords.damageBreakdownsArray.splice(i, 1);}
        }
        
        //Then, if we see a new entry that is not a stored value, store it
        for (let entry of breakdownListArray) {
            let found = false;
            for (let pathEntry of globalRecords.damageBreakdownsArray) {if (entry === pathEntry.name) {found = true;break;}}
            if (!found) {globalRecords.damageBreakdownsArray.push({name: entry, isUsed: false});}
        }

        globalRecords.damageBreakdownsArray.sort((a, b) => a.name.localeCompare(b.name));

        if (readSelection("statisticInput").value.includes("Custom")) {
            for (let entry of globalRecords.damageBreakdownsArray) {
                let explainNoTotalDamage = false;
                if ((entry.name === "MeleeDamage" || entry.name.includes("Carry")) && readSelection("statisticInput").value === "Total Damage (Custom)") {
                    entry.isUsed = false;//stop melee from being factored even if it was checked before on a DPS target
                    explainNoTotalDamage = true;
                }
                breakdownOptions.innerHTML += `
                <div class="statisticSettingsRow" style="border-bottom: 1px solid black;">
                    <div class="statsRowName">${entry.name.replace(/([a-z])([A-Z])/g, '$1 $2')}</div>
                    <div class="statsRowToggle">
                        ${explainNoTotalDamage ? 
                            `<span>
                                - Is DPS Only
                            </span>`
                            :
                            `<label class="toggleContainer">
                                <input type="checkbox" class="toggleCheckbox" id="${entry.name}InclusionToggle" onchange="filters.updateBreakdownUsage('${entry.name}')" ${entry.isUsed ? "checked" : ""}><span class="toggleSlider"></span>
                            </label>`
                        }
                    </div>
                </div>
                `
            }
        }

    },
    updateBreakdownUsage(nameToFind) {
        for (let i=0;i<globalRecords.damageBreakdownsArray.length;i++) {
            let entryName = globalRecords.damageBreakdownsArray[i].name;
            if (entryName === nameToFind) {
                globalRecords.damageBreakdownsArray[i].isUsed = readSelection(`${entryName}InclusionToggle`).checked;
                break;
            }
        }
    }
}