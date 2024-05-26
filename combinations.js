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
            "Health-Flat","Health-%","Health-Global Modifier",
            "Armor-Flat","Armor Effectiveness","DR-Flat","DR-Bulwark","DR-Bulwark Limit","DR-Reduced Enemy Damage","DR-Damage Shared",
            "Shield-Flat","Shield Effectiveness","Shield-%/second",
            "Consumable-Concoction Limit"
        ],
        "TANK:EHP": [
            "Encumbrance/Weight","Encumbrance/Weight - Threshold","Encumbrance/Weight-%",
            "Health-Flat","Health-%","Health-Global Modifier",
            "Armor-Flat","Armor Effectiveness","DR-Flat","DR-Bulwark","DR-Bulwark Limit","DR-Reduced Enemy Damage","DR-Damage Shared",
            "Consumable-Concoction Limit"
        ],
        "TANK:EHP/S": [
            "Encumbrance/Weight","Encumbrance/Weight - Threshold","Encumbrance/Weight-%",
            "Health-Flat","Health-%","Health-Global Modifier",
            "Armor-Flat","Armor Effectiveness","DR-Flat","DR-Bulwark","DR-Bulwark Limit","DR-Reduced Enemy Damage","DR-Damage Shared",
            "Healing Effectiveness","Healing-Global Effectiveness","Healing-Modifiers","Healing-Flat/second","Healing-%/second",
            "Grey Health-% Recovery Modifier","Grey Health-Flat/second",
            "Lifesteal-All","Lifesteal-Melee","Lifesteal-Ranged","Lifesteal-Melee Charged",
            "Relic Effectiveness","Relic-Base Healing","Relic-Healing Type","Relic-Healing Duration",
            "Consumable-Concoction Limit"
        ],
        "Shields": [
            "Shield-Flat","Shield Effectiveness","Shield-%/second"
        ],
        "Grey Health Regen": [
            "Grey Health-Flat/second", "Grey Health-Hit Threshold", "Grey Health-% Recovery Modifier", "Grey Health Conversion",
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
    },
    debugPushLine(string) {
        readSelection("comboDebug").innerHTML += `<br>${string}`;
    },
    applyTagFilter(table,filter,debugTable) {
        let returnTable = cycles.reinstanceJSON(table);
        if (filter) {
            for (let item in returnTable) {
                let itemKey = returnTable[item];
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

        cycles.debugPushLine("APPLYING FILTERS TO TABLES...");
        cyclesLoop.updateSetupStep("Applying Filters to Item Tables",false,1);
        cycles.debugPushLine("- Starting Amulets");
        yield;
        path.amulets.Table = cycles.applyTableFilter(cycles.applyTagFilter(amulets,tagsFilter,"Amulets"),filterPath.amulet.filter[1],filterPath.amulet.filter[2][0],"Amulets");
        cycles.debugPushLine("- Amulets Completed<br>- Starting Rings");
        yield;
        path.rings.Table = cycles.applyTableFilter(cycles.applyTagFilter(rings,tagsFilter,"Rings"),filterPath.ring.filter[1],filterPath.ring.filter[2][0],"Rings");
        cycles.debugPushLine("- Rings Completed<br>- Starting Relics");
        yield;
        path.relics.Table = cycles.applyTableFilter(cycles.applyTagFilter(relics,tagsFilter,"Relics"),filterPath.relic.filter[1],filterPath.relic.filter[2][0],"Relics");
        cycles.debugPushLine("- Relics Completed<br>- Starting Fragments");
        yield;
        path.fragments.Table = cycles.applyTableFilter(cycles.applyTagFilter(fragments,tagsFilter,"Fragments"),filterPath.fragment.filter[1],filterPath.fragment.filter[2][0],"Fragments");
        cycles.debugPushLine("- Fragments Completed<br>- Starting Consumables");
        yield;
        path.consumables.Table = cycles.applyTableFilter(cycles.applyTagFilter(quickUses,tagsFilter,"Consumables"),filterPath.consumable.filter[1],filterPath.consumable.filter[2][0],"Consumables");
        cycles.debugPushLine("- Consumables Completed<br>- Starting Primaries");
        yield;
        path.primaries.Table = cycles.applyTableFilter(cycles.applyTagFilter(primary,tagsFilter,"Primaries"),filterPath.primary.filter[1],filterPath.primary.filter[2][0],"Primaries");
        cycles.debugPushLine("- Primaries Completed<br>- Starting Melee");
        yield;
        path.melee.Table = cycles.applyTableFilter(cycles.applyTagFilter(melee,tagsFilter,"Melee"),filterPath.melee.filter[1],filterPath.melee.filter[2][0],"Melee");
        cycles.debugPushLine("- Melee Completed<br>- Starting Secondaries");
        yield;
        path.secondaries.Table = cycles.applyTableFilter(cycles.applyTagFilter(secondary,tagsFilter,"Secondaries"),filterPath.secondary.filter[1],filterPath.secondary.filter[2][0],"Secondaries");
        cycles.debugPushLine("- Secondaries Completed<br>- Starting Ranged Mutators");
        yield;
        path.primaryMutators.Table = cycles.applyTableFilter(cycles.applyTagFilter(rangedMutators,tagsFilter,"Ranged Mutators"),filterPath.primaryMutator.filter[1],filterPath.primaryMutator.filter[2][0],"Ranged Mutators");
        cycles.debugPushLine("- Ranged Mutators Completed<br>- Starting Melee Mutators");
        yield;
        path.meleeMutators.Table = cycles.applyTableFilter(cycles.applyTagFilter(meleeMutators,tagsFilter,"Melee Mutators"),filterPath.meleeMutator.filter[1],filterPath.meleeMutator.filter[2][0],"Melee Mutators");
        cycles.debugPushLine("- Melee Mutators Completed<br>- Starting Primary Mods");
        yield;
        path.primaryMods.Table = cycles.applyTableFilter(cycles.applyTagFilter(rangedMods,tagsFilter,"Ranged Mods"),filterPath.primaryMod.filter[1],filterPath.primaryMod.filter[2][0],"Ranged Mods");
        cycles.debugPushLine("- Ranged Mods Completed");
        yield;

        cycles.debugPushLine("- Starting Concoctions");
        yield;
        path.concoctions.Table = cycles.applyTableFilter(cycles.applyTagFilter(concoctions,tagsFilter,"Concoctions"),filterPath.concoction.filter[1],filterPath.concoction.filter[2][0],"Concoctions");
        cycles.debugPushLine("- Concoctions Completed");

        cycles.debugPushLine("FILTERS COMPLETED");
        yield;
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
    applyTableFilter(table,filterPath,occlusionType,debugTable) {
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

        return returnTable;
    },
    extractTableEntry(item) {
        if (amulets[item]) {return amulets[item];}
        if (rings[item]) {return rings[item];}
        if (relics[item]) {return relics[item];}
        if (fragments[item]) {return fragments[item];}
        if (primary[item]) {return primary[item];}
        if (melee[item]) {return melee[item];}
        if (secondary[item]) {return secondary[item];}
        if (rangedMutators[item]) {return rangedMutators[item];}
        if (meleeMutators[item]) {return meleeMutators[item];}
        if (rangedMods[item]) {return rangedMods[item];}
        if (concoctions[item]) {return concoctions[item];}
        if (rings[item]) {return rings[item];}
        if (quickUses[item]) {return quickUses[item];}
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
            let armorObject = {slot1:path[i][0],slot2:path[i][1],slot3:path[i][2],slot4:path[i][3]};
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
                valueStorage[weightKey] = {slot1:innerPath[0],slot2:innerPath[1],slot3:innerPath[2],slot4:innerPath[3],armorValue};
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
        if (!slots) {alert(`ERROR: PREGENERATION ABORTED\n\nNo slot count passed to combination pregeneration.\n\nSpecified: ${specified}\nTables: ${tables}`);return [];}

        if (!specified) {specified=null;}
        const slotNamesStarter = Object.keys(tables[0]);

        //If the amount of slots exceeds the table length(so like if an inclusion of 1 ring applies) then cut the slots to match
        //If I ever feed multiple tables for each slot to iterate on like I made this for, I'll have to change how this part works
        //Right now this is skipped entirely if it's for armor combos, as there is no chance this will ever get used
        if (slots>slotNamesStarter.length) {
            if (slotNamesStarter.length>specified.length) {slots = slotNamesStarter.length;}
            else {slots = specified.length;}
        }

        const combinations = [];
        let iterateSeparately = tables.length>1;
        let concoctionLimit = 1;
        let totalArmor,totalWeight; //Only used in loopSlot4
        //Each slot has its own function, and acts as a path branching mechanism for all subsequent slots
        function loopSlot1(index) {
            if (slots>=1) {
                let iteration = 0;
                //if slot 1 is locked/dedicated
                if (specified[0] || specified[0] === "") {
                    if (!iterateSeparately) {iteration = index;}
                    if (slots===1) {
                        if (hasConcoctions) {
                            concoctionLimit = cycles.checkConcoctionLimit(tables,slots,specified[0]);
                            combinations.push([specified[0],concoctionLimit]);
                        }
                        else {
                            combinations.push([specified[0]]);
                        }
                    }//Unless only 1 slot exists, then push the combo
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
                            if (hasConcoctions) {
                                concoctionLimit = cycles.checkConcoctionLimit(tables,slots,slotNamesStarter[i]);
                                combinations.push([slotNamesStarter[i],concoctionLimit]);
                            }
                            else {
                                combinations.push([slotNamesStarter[i]]);
                            }
                        }//If only 1 slot exists, push combo
                        else {loopSlot2(iteration,slotNamesStarter[i]);}//Otherwise continue to the next slot's loops
                    }
                }
            }
        }
        function loopSlot2(index,slot1) {
            if (slots>=2) {
                const slotNames = tables.length>=2 ? Object.keys(tables[1]) : slotNamesStarter;
                let iteration = 0;
                if (specified[1] || specified[1] === "") {
                    if (!iterateSeparately) {iteration = index;}
                    if (slots===2) {
                        if (hasConcoctions) {
                            concoctionLimit = cycles.checkConcoctionLimit(tables,slots,slot1,specified[1]);
                            combinations.push([slot1,specified[1],concoctionLimit]);
                        }
                        else {
                            combinations.push([slot1,specified[1]]);
                        }
                    }
                    else {loopSlot3(iteration,slot1,specified[1]);}
                }
                else {
                    for (let i=index;i<slotNames.length;i++) {
                        if (slotNames[i] != slot1) {
                            if (!slotNames[i]) {continue;}
                            if (!iterateSeparately) {iteration = i+1;}
                            if (slots===2) {
                                if (hasConcoctions) {
                                    concoctionLimit = cycles.checkConcoctionLimit(tables,slots,slot1,slotNames[i]);
                                    combinations.push([slot1,slotNames[i],concoctionLimit]);
                                }
                                else {
                                    combinations.push([slot1,slotNames[i]]);
                                }
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
                let iteration = 0;
                if (specified[2] || specified[2] === "") {
                    if (!iterateSeparately) {iteration = index;}
                    if (slots===3) {
                        if (hasConcoctions) {
                            concoctionLimit = cycles.checkConcoctionLimit(tables,slots,slot1,slot2,specified[2]);
                            combinations.push([slot1,slot2,specified[2],concoctionLimit]);
                        }
                        else {
                            combinations.push([slot1,slot2,specified[2]]);
                        }
                    }
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
                                    combinations.push([slot1,slot2,slotNames[i]]);
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
                let iteration = 0;
                if (specified[3] || specified[3] === "") {
                    if (!iterateSeparately) {iteration = index;}
                    if (slots===4) {
                        if (hasConcoctions) {
                            concoctionLimit = cycles.checkConcoctionLimit(tables,slots,slot1,slot2,slot3,specified[3]);
                            combinations.push([slot1,slot2,slot3,specified[3],concoctionLimit]);
                        }
                        else {
                            combinations.push([slot1,slot2,slot3,specified[3]]);
                        }
                    }
                    else {loopSlot5(iteration,slot1,slot2,slot3,specified[3]);}
                }
                else {
                    for (let i=index;i<slotNames.length;i++) {
                        if (slotNames[i] != slot1 && slotNames[i] != slot2 && slotNames[i] != slot3) {
                            if (!slotNames[i]) {continue;}
                            if (!iterateSeparately) {iteration = i+1;}
                            if (slots===4) {
                                if (!isArmor) {
                                    if (hasConcoctions) {
                                        concoctionLimit = cycles.checkConcoctionLimit(tables,slots,slot1,slot2,slot3,slotNames[i]);
                                        combinations.push([slot1,slot2,slot3,slotNames[i],concoctionLimit]);
                                    }
                                    else {
                                        combinations.push([slot1,slot2,slot3,slotNames[i]]);
                                    }
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
                let iteration = 0;
                if (specified[4] || specified[4] === "") {
                    if (!iterateSeparately) {iteration = index;}
                    if (slots===5) {
                        if (hasConcoctions) {
                            concoctionLimit = cycles.checkConcoctionLimit(tables,slots,slot1,slot2,slot3,slot4,specified[4]);
                            combinations.push([slot1,slot2,slot3,slot4,specified[4],concoctionLimit]);
                        }
                        else {
                            combinations.push([slot1,slot2,slot3,slot4,specified[4]]);
                        }
                    }
                    else {loopSlot6(iteration,slot1,slot2,slot3,slot4,specified[4]);}
                }
                else {
                    for (let i=index;i<slotNames.length;i++) {
                        if (slotNames[i] != slot1 && slotNames[i] != slot2 && slotNames[i] != slot3 && slotNames[i] != slot4) {
                            if (!slotNames[i]) {continue;}
                            if (!iterateSeparately) {iteration = i+1;}
                            if (slots===5) {
                                if (hasConcoctions) {
                                    concoctionLimit = cycles.checkConcoctionLimit(tables,slots,slot1,slot2,slot3,slot4,slotNames[i]);
                                    combinations.push([slot1,slot2,slot3,slot4,slotNames[i],concoctionLimit]);
                                }
                                else {
                                    combinations.push([slot1,slot2,slot3,slot4,slotNames[i]]);
                                }
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
                let iteration = 0;
                if (specified[5] || specified[5] === "") {
                    if (!iterateSeparately) {iteration = index;}
                    if (slots===6) {
                        if (hasConcoctions) {
                            concoctionLimit = cycles.checkConcoctionLimit(tables,slots,slot1,slot2,slot3,slot4,slot5,specified[5]);
                            combinations.push([slot1,slot2,slot3,slot4,slot5,specified[5],concoctionLimit]);
                        }
                        else {
                            combinations.push([slot1,slot2,slot3,slot4,slot5,specified[5]]);
                        }
                    }
                    else {loopSlot7(iteration,slot1,slot2,slot3,slot4,slot5,specified[5]);}
                }
                else {
                    for (let i=index;i<slotNames.length;i++) {
                        if (slotNames[i] != slot1 && slotNames[i] != slot2 && slotNames[i] != slot3 && slotNames[i] != slot4 && slotNames[i] != slot5) {
                            if (!slotNames[i]) {continue;}
                            if (!iterateSeparately) {iteration = i+1;}
                            if (slots===6) {
                                if (hasConcoctions) {
                                    concoctionLimit = cycles.checkConcoctionLimit(tables,slots,slot1,slot2,slot3,slot4,slot5,slotNames[i]);
                                    combinations.push([slot1,slot2,slot3,slot4,slot5,slotNames[i],concoctionLimit]);
                                }
                                else {
                                    combinations.push([slot1,slot2,slot3,slot4,slot5,slotNames[i]]);
                                }
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
                // let iteration = 0; //Not needed for the final rotation
                if (specified[6] || specified[6] === "") {
                    if (slots===7) {
                        if (!iterateSeparately) {iteration = index;}
                        if (hasConcoctions) {
                            concoctionLimit = cycles.checkConcoctionLimit(tables,slots,slot1,slot2,slot3,slot4,slot5,slot6,specified[6]);
                            combinations.push([slot1,slot2,slot3,slot4,slot5,slot6,specified[6],concoctionLimit]);
                        }
                        else {
                            combinations.push([slot1,slot2,slot3,slot4,slot5,slot6,specified[6]]);
                        }
                    }
                    //Notify me if I end up passing more than 4 slots, will remind me to expand from here if needed.
                    else {
                        alert(`Too many slots passed. Only 7 will be adhered to.`);
                        if (hasConcoctions) {
                            concoctionLimit = cycles.checkConcoctionLimit(tables,slots,slot1,slot2,slot3,slot4,slot5,slot6,specified[6]);
                            combinations.push([slot1,slot2,slot3,slot4,slot5,slot6,specified[6],concoctionLimit]);
                        }
                        else {
                            combinations.push([slot1,slot2,slot3,slot4,slot5,slot6,specified[6]]);
                        }
                    }
                }
                else {
                    for (let i=index;i<slotNames.length;i++) {
                        if (slotNames[i]!=slot1 && slotNames[i]!=slot2 && slotNames[i]!=slot3 && slotNames[i]!=slot4 && slotNames[i]!=slot5 && slotNames[i]!=slot6) {
                            if (!slotNames[i]) {continue;}
                            if (slots===7) {
                                if (hasConcoctions) {
                                    concoctionLimit = cycles.checkConcoctionLimit(tables,slots,slot1,slot2,slot3,slot4,slot5,slot6,slotNames[i]);
                                    combinations.push([slot1,slot2,slot3,slot4,slot5,slot6,slotNames[i],concoctionLimit]);
                                }
                                else {
                                    combinations.push([slot1,slot2,slot3,slot4,slot5,slot6,slotNames[i]]);
                                }
                            }
                            else {
                                alert(`Too many slots passed. Only 7 will be adhered to.`);
                                if (hasConcoctions) {
                                    concoctionLimit = cycles.checkConcoctionLimit(tables,slots,slot1,slot2,slot3,slot4,slot5,slot6,slotNames[i]);
                                    combinations.push([slot1,slot2,slot3,slot4,slot5,slot6,slotNames[i],concoctionLimit]);
                                }
                                else {
                                    combinations.push([slot1,slot2,slot3,slot4,slot5,slot6,slotNames[i]]);
                                }
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
    generationStop(endType,cycleWorker,endedWithoutIssue) {

        if (!cycleWorker || cycles.vars.workersRunning === 0) {
        cycles.vars.stopCycles = true;
        readSelection("cycleSTOP").disabled = true;
        readSelection("cycleSTART").disabled = false;
        readSelection("settingsOpenThreads").disabled = false;
        readSelection("searchImportButton").disabled = false;
        cycles.debugPushLine(`Worker: BUILD GENERATION ABORTED<br>`);
        cycles.vars.workersRunning = 0;
        globalRecords.currentBestStatistic = 0;
        readSelection("openThreadsDisplay").innerHTML = 0;
        }

        if (!cycleWorker) {
            for (let i=1;i<=cycles.vars.threadCount;i++) {
                workers[`cycleWorker${i}`].terminate();
            }
        }
        else {workers[cycleWorker].terminate();}

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
        if (filters.types.vars.targetStatistic.includes("Havoc") && filters.types.vars.importedAbility1 != "Havoc Form" && filters.types.vars.importedAbility2 != "Havoc Form") {
            alert(`ERROR: You don't even have Havoc Form selected in your imported classes. Why are you trying to target it.`);
        }
        else if (cycles.vars.stopCycles && filters.types.vars.targetStatistic) {
            cycles.vars.stopCycles = false;
            if (cycles.vars.debug) {readSelection("comboDebug").innerHTML = ".DEBUG VIEW";}

        cycles.debugPushLine("UI LOCK START");
        //Assign the selected classes/abilitiess/traits over to the Alt records so that way if people mess with the UI calc it won't mess up the background calc
        //The stored imported archs so the currently selected archs don't get used every time.
        globalRecords.ALTarchs.one.class = `${filters.types.vars.importedArch1}`;
        globalRecords.ALTarchs.two.class = `${filters.types.vars.importedArch2}`;
        globalRecords.ALTarchs.one.ability = `${filters.types.vars.importedAbility1}`;
        globalRecords.ALTarchs.two.ability = `${filters.types.vars.importedAbility2}`;
        //Like the archs/abilities, need to do the same thing with traits before passing them to the worker
        globalRecords.ALTgreatTraitRecords = [...filters.types.vars.importedTraitRecords];

        globalRecords.ALTsearchSettingsToggles = {...globalRecords.searchSettingsToggles};

        globalRecords.RECORDEDisCoop = `${globalRecords.ALTisCoop}`
        globalRecords.RECORDEDteamCount = +globalRecords.ALTteamCount.toString();
        globalRecords.RECORDEDminionCount = +globalRecords.ALTminionCount.toString();
        globalRecords.RECORDEDcomplexInput = +globalRecords.ALTcomplexInput.toString();
        globalRecords.RECORDEDspiritHealterStacks = +globalRecords.ALTspiritHealterStacks.toString();
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
            readSelection("searchImportButton").disabled = true;
            const iterator = cycles.reinstanceVars();
            function processVars() {
                const { done } = iterator.next();
                if (done) {
                    cycles.vars.counterInt = 0;//console.log(navigator.hardwareConcurrency)
                    cycles.vars.workersRunning = cycles.vars.threadCount;
                    globalRecords.currentBestStatistic = 0;
                    cycles.vars.lastTimerEvaluation = 0;
                    cyclesLoop.bestCombos = {};

                    // cyclesLoop.updateSetupStep(`Initiating Web Workers ${i}-${cycles.vars.threadCount}`,false,1);
                    for (let i=1;i<=cycles.vars.threadCount;i++) {
                        cyclesLoop.startCycleWorker(i,cycles.vars.threadCount);
                        cycles.debugPushLine(`Initiating Web Worker #${i}`);
                    }
                    return;
                }
                setTimeout(processVars, 0);
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

        if (stepString === "Completed Setup") {
            readSelection("openThreadsDisplay").innerHTML = +readSelection("openThreadsDisplay").innerHTML + 1;

        }
    },
    startCycleWorker(identifier,threadCount) {
        let cycleWorker = `cycleWorker${identifier}`
        
        // cycles.vars.counterInt = 0;
        workers[cycleWorker] = new Worker(`cycleWorker.js`);
        workers[cycleWorker].onmessage = function(event) {
            const data = event.data;
            if (!data || data.command === `yieldCombination`) {
                if (data.isClosed) {
                    cycles.vars.workersRunning -= 1;
                    readSelection("openThreadsDisplay").innerHTML = +readSelection("openThreadsDisplay").innerHTML - 1;
                }
                let increments = 200000;//Determines how frequently the est time calculates, in terms of how many combos have passed
                cycles.vars.counterInt += data.lastSent;
                let counterInt = cycles.vars.counterInt;
                let totalCombos = cycles.vars.totalDisplayCombinations;
                if (counterInt>totalCombos) {cyclesLoop.generationStop(`ERROR: MISMATCHED COMBO COUNT\n${counterInt} > ${totalCombos}\n\nIf you ever see this, take note of your filters then join the discord linked at the bottom of any page, and ping Vash with the filter info.`)}
                else if (counterInt === totalCombos && cycles.vars.workersRunning === 0 ) {
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
                
                    if (counterInt === 1) {
                        //If this is the first iteration, set things up. 1 is technically the start.
                        cycles.vars.cycleTimer = performance.now();
                        cycles.vars.cycleTotalTimer = performance.now();
                        cycles.vars.cycleCounter = 0;
                        readSelection(`cycleProgressType`).innerHTML = "BUILD TESTS:"
                        readSelection(`cyclesTimeRemaining`).innerHTML = `Calculating...`

                        let classPath1 = classInfo[globalRecords.ALTarchs.one.class]
                        let classPath2 = classInfo[globalRecords.ALTarchs.two.class]

                        readSelection("comboBackgroundLeftImage").src = classPath1.classIcon;
                        readSelection("comboHeadsUpMessage").style.display = "none";
                        if (globalRecords.ALTarchs.one.class === "") {
                            readSelection("comboBackgroundLeftImage").src = "images/bufferCat.png"
                            readSelection("comboHeadsUpMessage").textContent  = "Who the actual fuck only uses a secondary archetype with no primary.";
                            readSelection("comboHeadsUpMessage").style.display = "block";
                        }
                        readSelection("comboAbility1").src = classPath1.abilities[globalRecords.ALTarchs.one.ability].image;
                        readSelection("backgroundHalvesLeft").style.background = `linear-gradient(225deg, ${classPath1.gradient[0]}, ${classPath1.gradient[1]},black)`;

                        readSelection("comboBackgroundRightImage").src = classPath2.classIcon;
                        if (globalRecords.ALTarchs.two.class === "" && globalRecords.ALTarchs.one.class === "") {
                            readSelection("comboBackgroundLeftImage").src = "images/swagCat.png"
                            readSelection("comboBackgroundRightImage").src = "images/swagCat.png"
                            readSelection("comboHeadsUpMessage").textContent  = "Did you forget to import your archetypes and traits, above?";
                        }
                        readSelection("comboAbility2").src = classPath2.abilities[globalRecords.ALTarchs.two.ability].image;
                        readSelection("backgroundHalvesRight").style.background = `linear-gradient(135deg, ${classPath2.gradient[0]}, ${classPath2.gradient[1]},black)`;
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

                            cycleObject.bestArmorSet = cycleObject.bestArmorSet ?? {slot1:"",slot2:"",slot3:"",slot4:""}

                            readSelection("comboArmorHelmet").src = armor.helmets[cycleObject.bestArmorSet.slot1].image;
                            readSelection("comboArmorChest").src = armor.chests[cycleObject.bestArmorSet.slot2].image;
                            readSelection("comboArmorLeg").src = armor.legs[cycleObject.bestArmorSet.slot3].image;
                            readSelection("comboArmorHand").src = armor.hands[cycleObject.bestArmorSet.slot4].image;

                            readSelection("comboRelic").src = cycleObject.relic[0] ? gear.relics[cycleObject.relic[0]].image : gear.relics[""].image;

                            readSelection("comboAmulet").src = cycleObject.amulet[0] ? gear.amulets[cycleObject.amulet[0]].image : gear.amulets[""].image;
                            readSelection("comboRing1").src = cycleObject.ringSet[0] ? gear.rings[cycleObject.ringSet[0]].image : gear.rings[""].image;
                            readSelection("comboRing2").src = cycleObject.ringSet[1] ? gear.rings[cycleObject.ringSet[1]].image : gear.rings[""].image;
                            readSelection("comboRing3").src = cycleObject.ringSet[2] ? gear.rings[cycleObject.ringSet[2]].image : gear.rings[""].image;
                            readSelection("comboRing4").src = cycleObject.ringSet[3] ? gear.rings[cycleObject.ringSet[3]].image : gear.rings[""].image;

                            cycleObject.gun1[0] = cycleObject.gun1[0] ?? "";
                            cycleObject.stick[0] = cycleObject.stick[0] ?? "";
                            cycleObject.gun2[0] = cycleObject.gun2[0] ?? "";
                            readSelection("comboWeapon1").src = primary[cycleObject.gun1[0]].image;
                            readSelection("comboWeapon2").src = melee[cycleObject.stick[0]].image;
                            readSelection("comboWeapon3").src = secondary[cycleObject.gun2[0]].image;

                            readSelection("comboPrimaryMutator").innerHTML = cycleObject.rangedMutators[0] || "";
                            readSelection("comboPrimaryMod").innerHTML = primary[cycleObject.gun1[0]].builtIN || cycleObject.rangedMods[0] || "";

                            readSelection("comboMeleeMutator").innerHTML = cycleObject.meleeMutators[0] || "";
                            readSelection("comboMeleeMod").innerHTML = melee[cycleObject.stick[0]].builtIN;

                            readSelection("comboSecondaryMutator").innerHTML = cycleObject.rangedMutators[1] || "";
                            readSelection("comboSecondaryMod").innerHTML = secondary[cycleObject.gun2[0]].builtIN || cycleObject.rangedMods[1] || "";


                            for (let i=0;i<7;i++) {
                                let concReference = cycleObject.concoction[i] ?? "";
                                if (concReference===0 || concReference==="") {
                                    concReference="";
                                    readSelection(`comboConcoction${i+1}Holder`).style.display = "none";
                                }
                                else {
                                    readSelection(`comboConcoction${i+1}Holder`).style.display = "block";
                                    readSelection(`comboConcoction${i+1}`).src = concoctions[concReference].image;
                                }
                            }

                            for (let i=0;i<4;i++) {
                                let consReference = cycleObject.quickUse[i] ?? "";
                                if (consReference===0 || consReference==="") {
                                    consReference=""
                                    readSelection(`comboQuickUse${i+1}Holder`).style.display = "none";
                                }
                                else {
                                    readSelection(`comboQuickUse${i+1}Holder`).style.display = "block";
                                    readSelection(`comboConsumable${i+1}`).src = quickUses[consReference].image;
                                }
                            }

                            cyclesLoop.updateCycleRecord(cycleObject,true);//Updates the ALT records with everything from the cycle object

                            for (let i=50;i>1;i--) {
                                cyclesLoop.bestCombos[i] = cyclesLoop.bestCombos[i-1] ? {...cyclesLoop.bestCombos[i-1]} : {"bestValue":0,"link":""};
                            }

                            // cyclesLoop.bestCombos.third = cyclesLoop.bestCombos.second ? {...cyclesLoop.bestCombos.second} : {"bestValue":0,"link":""};
                            // cyclesLoop.bestCombos.second = cyclesLoop.bestCombos.first ? {...cyclesLoop.bestCombos.first} : {"bestValue":0,"link":""};

                            let targetDamageCategory;
                            if (filters.types.vars.oldTarget[0] === globalRecords.ALTarchs.one.ability) {targetDamageCategory = "ability1Breakdown"}
                            else if (filters.types.vars.oldTarget[0] === globalRecords.ALTarchs.two.ability) {targetDamageCategory = "ability2Breakdown"}

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
                                ${cycleObject.fragmentSet[0]}, ${cycleObject.fragmentSet[1]}, ${cycleObject.fragmentSet[2]}
                            `;
                        }
                    }

                    if (counterInt === totalCombos && cycles.vars.workersRunning === 0 ) {
                    cyclesLoop.generationStop("",null,true); 
                    }
            }
            else {
                switch (data.command) {
                    case `pushDebugLine`: cycles.debugPushLine(data.data); break;
                    case `pushAlert`: 
                        if (data.isAborted) {cyclesLoop.generationStop("","",true)}
                        alert(data.data); 
                        break
                    case `pushInnerHTML`:
                        if (data.ID === "comboCount") {
                            //Store the total combo count so we don't have to replace commas every time
                            cycles.vars.totalDisplayCombinations = data.data;
                            data.data = data.data.toLocaleString();
                        }
                        readSelection(data.ID).innerHTML = data.data;
                        break;
                    case `updateStep`: cyclesLoop.updateSetupStep(data.data,false,data.moduloFactor); break;
                    case `passBackArmor`:
                        cycles.vars.armorCombos.Table = data.data[0];
                        cycles.vars.weightFirst.Table = data.data[1];
                        cycles.vars.armorIsGenerated = true;
                        break;
                }
            }
        };
        workers[cycleWorker].onerror = function(error) {
            console.error('Worker error:', error);
            cyclesLoop.generationStop(`${error.message} LINE:${error.lineno}`);
        };

        cyclesLoop.updateSetupStep("Exporting data to Web Worker",false,identifier);
        workers[cycleWorker].postMessage({command:`copyFilteredTables`,data:cycles.vars});
        workers[cycleWorker].postMessage({command:`copyTableFilters`,data:filters.types});
        workers[cycleWorker].postMessage({command:`copyDataTables`,data:globalRecords});
        workers[cycleWorker].postMessage({command:`startCycles`,data:{threadCount,identifier}});
    },
    combineConcoctionLimit(ringCombo,amulet,classSet) {
        let returnLimit = 1;
        for (let item1 of ringCombo) {
            if (item1 === ringCombo[ringCombo.length-1]) {continue;}
            returnLimit += gear.rings[item1].stats.ConcLimit || 0;
        }
        for (let item3 of amulet) {
            if (item3 === amulet[amulet.length-1]) {continue;}
            returnLimit += gear.amulets[item3].stats.ConcLimit || 0;
        }
        for (let item5 of classSet) {
            if (item5 === classSet[classSet.length-1]) {continue;}
            else if (classInfo[item5].primeStats.ConcLimit) {
                returnLimit += classInfo[item5].primeStats.ConcLimit;
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

        bestArmorSet = bestArmorSet ?? {slot1:"",slot2:"",slot3:"",slot4:""};
        let armorReference = globalRecords.ALTarmor
        armorReference.helmet = bestArmorSet.slot1;armorReference.chest = bestArmorSet.slot2;
        armorReference.leg = bestArmorSet.slot3;armorReference.hand = bestArmorSet.slot4;
        return bestArmorSet;
    },
    //This is now only used within the worker cycleWorker
    generateCombinations(isShared,moduloFactor,threadCount) {
        cycles.setupCompleted = false;
        globalRecords.meleeFactors = {...globalRecords.ALTmeleeFactors}//Shift what are normally the search settings factors, to the main factors so the cycles can calculate properly.
        postMessage({command: `pushDebugLine`, data: "Worker: START COMBO GENERATION..."});
        postMessage({command: `pushDebugLine`, data: "Worker: - Starting Amulets"});
        postMessage({command: `updateStep`, data: "Amulet Tables", moduloFactor, threadCount});

        const amuletCombos = cycles.generateAnyCombinations(filters.types.amulet.filter[0],[cycles.vars.amulets.Table],1,false,true);
        postMessage({command: `pushDebugLine`, data: "Worker: - Amulets completed<br>- Starting Rings"});
        postMessage({command: `updateStep`, data: "Ring Tables", moduloFactor});
        //Generate Rings combos, will take a sec if no filters are in play on this one
        const ringCombos = cycles.generateAnyCombinations(filters.types.ring.filter[0],[cycles.vars.rings.Table],4,false,true);
        postMessage({command: `pushDebugLine`, data: "Worker: - Rings completed<br>- Starting Relics"});
        postMessage({command: `updateStep`, data: "Relic Tables", moduloFactor});
        //Only amulets and rings need to be evaluated for concoction limit, for now


        const relicCombos = cycles.generateAnyCombinations(filters.types.relic.filter[0],[cycles.vars.relics.Table],1,false,false);
        postMessage({command: `pushDebugLine`, data: "Worker: - Relics completed<br>- Starting Fragments"});
        postMessage({command: `updateStep`, data: "Fragment Tables", moduloFactor});
        const fragmentCombos = cycles.generateAnyCombinations(filters.types.fragment.filter[0],[cycles.vars.fragments.Table],3,false,false);
        postMessage({command: `pushDebugLine`, data: "Worker: - Fragments completed<br>- Starting Consumables"});
        postMessage({command: `updateStep`, data: "Consumable Tables", moduloFactor});
        const consumableCombos = cycles.generateAnyCombinations(filters.types.consumable.filter[0],[cycles.vars.consumables.Table],4,false,false);
        postMessage({command: `pushDebugLine`, data: "Worker: - Consumables completed<br>- Starting Primaries"});
        postMessage({command: `updateStep`, data: "Primary Tables", moduloFactor});
        const primaryCombos = cycles.generateAnyCombinations(filters.types.primary.filter[0],[cycles.vars.primaries.Table],1,false,false);
        postMessage({command: `pushDebugLine`, data: "Worker: - Primaries completed<br>- Starting Melee"});
        postMessage({command: `updateStep`, data: "Melee Tables", moduloFactor});
        const meleeCombos = cycles.generateAnyCombinations(filters.types.melee.filter[0],[cycles.vars.melee.Table],1,false,false);
        postMessage({command: `pushDebugLine`, data: "Worker: - Melee completed<br>- Starting Secondaries"});
        postMessage({command: `updateStep`, data: "Secondary Tables", moduloFactor});
        const secondaryCombos = cycles.generateAnyCombinations(filters.types.secondary.filter[0],[cycles.vars.secondaries.Table],1,false,false);
        postMessage({command: `pushDebugLine`, data: "Worker: - Secondaries completed<br>- Starting Ranged Mutators"});
        postMessage({command: `updateStep`, data: "Ranged Mutator Tables", moduloFactor});
        let rangedMutatorLocks = [];
        //Combine lock filters for primary/secondary mutators
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
        const rangedMutatorCombos = cycles.generateAnyCombinations(rangedMutatorLocks,[cycles.vars.primaryMutators.Table],2,false,false);
        postMessage({command: `pushDebugLine`, data: "Worker: - Ranged Mutators completed<br>- Starting Melee Mutators"});
        postMessage({command: `updateStep`, data: "Melee Mutator Tables", moduloFactor});
        //Generate Melee Mutators combos
        const meleeMutatorCombos = cycles.generateAnyCombinations(filters.types.meleeMutator.filter[0],[cycles.vars.meleeMutators.Table],1,false,false);
        postMessage({command: `pushDebugLine`, data: "Worker: - Melee Mutators completed<br>- Starting Ranged Mods"});
        postMessage({command: `updateStep`, data: "Mod Tables", moduloFactor});
        //Generate Primary Mods combos
        let rangedModLocks = [];
        //Combine lock filters for primary/secondary mods
        if (filters.types.primaryMod.filter[0].length) {
            rangedModLocks.push(filters.types.primaryMod.filter[0]);
            if (filters.types.secondaryMod.filter[0].length) {rangedModLocks.push(filters.types.secondaryMod.filter[0]);}
        }
        else if (!filters.types.primaryMod.filter[0].length && filters.types.secondaryMod.filter[0].length) {
            rangedMutatorLocks.push();
            rangedMutatorLocks.push(filters.types.secondaryMod.filter[0]);
        }
        // else {
        //     rangedMutatorLocks.push();rangedMutatorLocks.push();
        // }
        const rangedModCombos = cycles.generateAnyCombinations(rangedModLocks,[cycles.vars.primaryMods.Table],2,false,false);
        postMessage({command: `pushDebugLine`, data: "Worker: - Ranged Mods completed"});
        //concoctions
        postMessage({command: `pushDebugLine`, data: "Worker: - Starting Concoctions 1-7"});
        postMessage({command: `updateStep`, data: "Concoction Tables", moduloFactor});
        let concMegaTable = {};
        concMegaTable.concoctionCombos1 = cycles.generateAnyCombinations(filters.types.concoction.filter[0],[cycles.vars.concoctions.Table],1,false,false);
        postMessage({command: `pushDebugLine`, data: "Worker: -- Table 1 completed"});
        concMegaTable.concoctionCombos2 = cycles.generateAnyCombinations(filters.types.concoction.filter[0],[cycles.vars.concoctions.Table],2,false,false);
        postMessage({command: `pushDebugLine`, data: "Worker: -- Table 2 completed"});
        concMegaTable.concoctionCombos3 = cycles.generateAnyCombinations(filters.types.concoction.filter[0],[cycles.vars.concoctions.Table],3,false,false);
        postMessage({command: `pushDebugLine`, data: "Worker: -- Table 3 completed"});
        concMegaTable.concoctionCombos4 = cycles.generateAnyCombinations(filters.types.concoction.filter[0],[cycles.vars.concoctions.Table],4,false,false);
        postMessage({command: `pushDebugLine`, data: "Worker: -- Table 4 completed"});
        concMegaTable.concoctionCombos5 = cycles.generateAnyCombinations(filters.types.concoction.filter[0],[cycles.vars.concoctions.Table],5,false,false);
        postMessage({command: `pushDebugLine`, data: "Worker: -- Table 5 completed"});
        concMegaTable.concoctionCombos6 = cycles.generateAnyCombinations(filters.types.concoction.filter[0],[cycles.vars.concoctions.Table],6,false,false);
        postMessage({command: `pushDebugLine`, data: "Worker: -- Table 6 completed"});
        concMegaTable.concoctionCombos7 = cycles.generateAnyCombinations(filters.types.concoction.filter[0],[cycles.vars.concoctions.Table],7,false,false);
        postMessage({command: `pushDebugLine`, data: "Worker: -- Table 7 completed"});
        postMessage({command: `pushDebugLine`, data: "Worker: - Concoctions completed"});

        postMessage({command: `pushDebugLine`, data: "Worker: GENERATING ARMOR TABLES..."});
        postMessage({command: `updateStep`, data: "Armor Tables", moduloFactor});
        //Only generate the armor table once, it is never modified, only referenced. Make it on first query, but never do it again.
        if (!cycles.vars.armorIsGenerated) {
            cycles.vars.baseArmorCombos.Table = cycles.generateAnyCombinations([],[armor.helmets,armor.chests,armor.legs,armor.hands],4,true,false);
            cycles.vars.armorCombos.Table = [...cycles.vars.baseArmorCombos.Table];
            cycles.vars.weightFirst.Table = [...cycles.vars.baseArmorCombos.Table].sort((a, b) => +a[5] - +b[5]);

            cycles.vars.weightFirst.Table = cycles.createCustomWeightTable(cycles.vars.weightFirst.Table);
            let armorFirst = cycles.createSortedArmorTable(false);//TODO:Shift the armor to the same function as weight, later. Not a priority, still fast. Remember to look at armor pings when I do this.
            cycles.vars.armorCombos.Table = [...armorFirst];
            postMessage({command: `pushDebugLine`, data: "Worker: COMPLETED ARMOR GENERATION"});
            postMessage({command: `passBackArmor`, data: [armorFirst,cycles.vars.weightFirst.Table]});//TODO: Remove this later. It's fast enough now that we can gen it every time after the prior TODO
        }
        else {postMessage({command: `pushDebugLine`, data: "Worker: ARMOR ALREADY GENERATED"});}

        postMessage({command: `pushDebugLine`, data: "Worker: COMBO GENERATION COMPLETED<br>CALCULATING TOTAL COMBOS..."});
        postMessage({command: `updateStep`, data: "Calculating Total Combos...", moduloFactor});

        
        let classSet = [`${globalRecords.ALTarchs.one.class}`,`${globalRecords.ALTarchs.two.class}`];
        let abilitySet = [`${globalRecords.ALTarchs.one.ability}`,`${globalRecords.ALTarchs.two.ability}`];
        // formulasValues.pullTraits();//Assign trait value to the cycles starter table

        let comboCounter = 0;

        //These are all items that do NOT contribute to concoction limits, and as such can be calculated beforehand via easy multiplication
        let staticSets = (relicCombos.length
            * fragmentCombos.length
            * consumableCombos.length
            * primaryCombos.length
            * secondaryCombos.length
            * meleeCombos.length
            * rangedMutatorCombos.length
            * meleeMutatorCombos.length
            * rangedModCombos.length);
        //Combinations counter loops

        for (const ringCombo of ringCombos) {
            for (const amulet of amuletCombos) {
                let currentLimit = cyclesLoop.combineConcoctionLimit(ringCombo,amulet,classSet);//TODO: Add more here if more item types start adding concoction limits
                let switchLength = concMegaTable[`concoctionCombos${currentLimit}`].length;

                if (switchLength<1) {switchLength=1;}
                comboCounter += switchLength;
            }
        }

        comboCounter *= staticSets; //Get the number of combos possible via variable concoction limits, and multi it by the static set precalc number for total combos possible.
        //If this is going to take way too long, then quit and let the user know.
        if (comboCounter > 10000000000 && !cycles.vars.bypassLimit) {
            if (moduloFactor === 1) {
                postMessage({command: `pushAlert`, data: `Possible combinations (${comboCounter.toLocaleString()}) exceeds the limit of 10 BILLION.\nAdjust your filters and try again as there is no feasible way in hell you're getting the answer you need by the time you need it, if we let this query continue.`, isAborted: true});
            }
            cyclesLoop.selfGenerationStop();
            return;
        }
        
        cycles.vars.totalDisplayCombinations = comboCounter;
        postMessage({command: `updateStep`, data: "Completed Setup", moduloFactor});
        postMessage({command: `pushDebugLine`, data: `Worker: - TOTAL COMBOS: ${cycles.vars.totalDisplayCombinations.toLocaleString()}`});
        postMessage({command: `pushInnerHTML`, ID: "comboCount", data: cycles.vars.totalDisplayCombinations});
        postMessage({command: `pushDebugLine`, data: "Worker: - BEGIN CALCULATION CYCLES..."});

        cycles.setupCompleted = true;
        let cycleObject;
        let targetStatistic = playerDerivedStatistics[filters.types.vars.targetStatistic];
        let targetIsArray = Array.isArray(targetStatistic);
        let recordedStatistic = 0;

        let cycleCounter = 0;
        let lastCalculated = 0 - threadCount + moduloFactor;
        let lastSent = 0;
        let isClosed = false;

        let targetDamageCategory;

        if (targetStatistic[0] === abilitySet[0]) {targetDamageCategory = "ability1Breakdown"}
        else if (targetStatistic[0] === abilitySet[1]) {targetDamageCategory = "ability2Breakdown"}


        for (const ringSet of ringCombos) {
            for (const amulet of amuletCombos) {
                //Needed to extract the current concoction limit.
                let currentLimit = cyclesLoop.combineConcoctionLimit(ringSet,amulet,classSet);//TODO: Add more item types if they add concLimit
                let currentTable = concMegaTable[`concoctionCombos${currentLimit}`];
                for (const relic of relicCombos) {
                    for (const stick of meleeCombos) {
                        for (const gun2 of secondaryCombos) {
                            for (const gun1 of primaryCombos) {
                                for (const quickUse of consumableCombos) {
                                    for (const rMod1 of rangedModCombos) {
                                        for (const fragmentSet of fragmentCombos) {
                                            for (const mMutator1 of meleeMutatorCombos) {
                                                for (const rMutator1 of rangedMutatorCombos) {

                                                    for (let conc=0;conc<currentTable.length;conc++) {
                                                        cycleCounter++;

                                                        if (cycleCounter === cycles.vars.totalDisplayCombinations) {
                                                            isClosed = true;
                                                            if (isShared && cycleCounter != lastCalculated + threadCount) {lastSent -= 1;}
                                                            lastCalculated = cycleCounter;
                                                        }
                                                        else if (isShared && cycleCounter != lastCalculated + threadCount) {continue}
                                                        else {lastCalculated = cycleCounter;}
                                                        lastSent++;

                                                        cycleObject = {
                                                            ringSet,relic,fragmentSet,amulet,concoction:currentTable[conc],quickUse,
                                                            gun1,gun2,stick,rangedMutators: rMutator1, meleeMutators: mMutator1,rangedMods: rMod1};

                                                        cyclesLoop.updateCycleRecord(cycleObject);//Assigns cycle items to records so updateFormulas can work
                                                        let preArmor = updateFormulas(`cycleTableKnowerOfAll`,true);//If armor is needed, it will return it. Otherwise it will return stats.

                                                        if (preArmor.slot1) {//if an armor ping returned anything
                                                            cycleObject.bestArmorSet = {...preArmor};
                                                            preArmor = updateFormulas(`cycleTableKnowerOfAll`);//Then redo the updateforms, this time turning ping off, so armor pieces are now factored
                                                        }

                                                        if (!targetIsArray) {
                                                            if (((preArmor[targetStatistic] > recordedStatistic) && !!preArmor[targetStatistic]) || (!recordedStatistic)) {
                                                                recordedStatistic = +preArmor[targetStatistic];
                                                                postMessage({command: `yieldCombination`,isUpdated:true,cycleObject,preArmor:preArmor[targetStatistic],lastSent,isClosed});
                                                                lastSent = 0;
                                                                continue;
                                                            }
                                                        } 
                                                        else {
                                                            if (((preArmor[targetDamageCategory][targetStatistic[1]] > recordedStatistic) && !!preArmor[targetDamageCategory][targetStatistic[1]]) || (!recordedStatistic)) {
                                                                recordedStatistic = +preArmor[targetDamageCategory][targetStatistic[1]];
                                                                postMessage({command:`yieldCombination`,isUpdated:true,cycleObject,preArmor:preArmor[targetDamageCategory][targetStatistic[1]],lastSent,isClosed});
                                                                lastSent = 0;
                                                                continue;
                                                            }
                                                        }
                                                        if (lastSent >= 10000 || cycleCounter === cycles.vars.totalDisplayCombinations) {
                                                            postMessage({command:`yieldCombination`,lastSent,isClosed});
                                                            lastSent = 0;
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
        postMessage({command: `pushDebugLine`, data: "Worker: COMPLETED CALCULATION CYCLES"});
        postMessage({command: `pushDebugLine`, data: `Worker: Closing Worker #${moduloFactor}`});
        postMessage({command: `notifyWorkerClosed`});
        cyclesLoop.selfGenerationStop(null,moduloFactor); //Set things back to normal once completed
    },
    updateCycleRecord(value,addArmor) {
        let accessoryReference = globalRecords.ALTaccessories;
        accessoryReference.amulet = value.amulet[0] || "";
        accessoryReference.ring1 = value.ringSet[0] || "";
        accessoryReference.ring2 = value.ringSet[1] || "";
        accessoryReference.ring3 = value.ringSet[2] || "";
        accessoryReference.ring4 = value.ringSet[3] || "";
        accessoryReference.relic = value.relic[0] || "";
        accessoryReference.fragment1 = value.fragmentSet[0] || "";
        accessoryReference.fragment2 = value.fragmentSet[1] || "";
        accessoryReference.fragment3 = value.fragmentSet[2] || "";

        let consumableReference = globalRecords.ALTconsumables;
        consumableReference.concoction1 = value.concoction[0] || "";
        consumableReference.concoction2 = value.concoction[1] || "";
        consumableReference.concoction3 = value.concoction[2] || "";
        consumableReference.concoction4 = value.concoction[3] || "";
        consumableReference.concoction5 = value.concoction[4] || "";
        consumableReference.concoction6 = value.concoction[5] || "";
        consumableReference.concoction7 = value.concoction[6] || "";
        consumableReference.quickUse1 = value.quickUse[0] || "";
        consumableReference.quickUse2 = value.quickUse[1] || "";
        consumableReference.quickUse3 = value.quickUse[2] || "";
        consumableReference.quickUse4 = value.quickUse[3] || "";

        let weaponReference = globalRecords.ALTweapons;
        weaponReference.primary = value.gun1[0] || "";
        weaponReference.primaryMutator = value.rangedMutators[0] || "";
        weaponReference.primaryMod = value.rangedMods[0] || "";
        if (weaponReference.primary === "Rusty Lever Action") {weaponReference.primaryMod = "";weaponReference.primaryMutator = "";}
        weaponReference.melee = value.stick[0] || "";
        weaponReference.meleeMutator = value.meleeMutators[0] || "";
        weaponReference.secondary = value.gun2[0] || "";
        weaponReference.secondaryMutator = value.rangedMutators[1] || "" ;
        weaponReference.secondaryMod = value.rangedMods[1] || "";
        if (weaponReference.secondary === "Rusty Repeater") {weaponReference.secondaryMod = "";weaponReference.secondaryMutator = "";}

        if (addArmor) {
            globalRecords.ALTarmor.helmet = value.bestArmorSet.slot1 || "";
            globalRecords.ALTarmor.chest = value.bestArmorSet.slot2 || "";
            globalRecords.ALTarmor.leg = value.bestArmorSet.slot3 || "";
            globalRecords.ALTarmor.hand = value.bestArmorSet.slot4 || "";
        }
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
        globalRecords.ALTisCoop = teamCount>1 ? `Co-op` : `Solo`;
        globalRecords.ALTteamCount = teamCount;
        readSelection("selectedTeamCount").innerHTML = teamCount;
        globalRecords.ALTminionCount = summonCount;
        readSelection("selectedSummonCount").innerHTML = summonCount;

        globalRecords.ALTspiritHealterStacks = +readSelection("spiritCountSlider").value;
        readSelection("selectedSpiritCount").innerHTML = readSelection("spiritCountSlider").value;

        globalRecords.ALTuseShields = readSelection("settingsUseShields").checked;
        globalRecords.ALTuseRelicHealing = readSelection("settingsUseRelicHealing").checked;
        globalRecords.ALTuseNonStandardDR = readSelection("settingsUseNonStandardDR").checked;

        let namePath = filters.types.vars;

        readSelection("settingsArch1").innerHTML = namePath.importedArch1;
        readSelection("settingsPrimePerk").innerHTML = classInfo[namePath.importedArch1].primePerk
        readSelection("settingsArch2").innerHTML = namePath.importedArch2;

        readSelection("settingsAbility1").innerHTML = namePath.importedAbility1;
        readSelection("settingsAbility2").innerHTML = namePath.importedAbility2;

        readSelection("settingsPassive1").innerHTML = classInfo[namePath.importedArch1].passives.passive1.name;
        readSelection("settingsPassive2").innerHTML = classInfo[namePath.importedArch1].passives.passive2.name;
        readSelection("settingsPassive3").innerHTML = classInfo[namePath.importedArch1].passives.passive3.name;
        readSelection("settingsPassive4").innerHTML = classInfo[namePath.importedArch1].passives.passive4.name;

        readSelection("settingsPassive5").innerHTML = classInfo[namePath.importedArch2].passives.passive1.name;
        readSelection("settingsPassive6").innerHTML = classInfo[namePath.importedArch2].passives.passive2.name;
        readSelection("settingsPassive7").innerHTML = classInfo[namePath.importedArch2].passives.passive3.name;
        readSelection("settingsPassive8").innerHTML = classInfo[namePath.importedArch2].passives.passive4.name;

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

        path = globalRecords.ALTmeleeFactors;
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
    },
    importNonIterables() {
        filters.types.vars.importedArch1 = `${globalRecords.archs.one.class}`;
        filters.types.vars.importedArch2 = `${globalRecords.archs.two.class}`;
        filters.types.vars.importedAbility1 = `${globalRecords.archs.one.ability}`;
        filters.types.vars.importedAbility2 = `${globalRecords.archs.two.ability}`;
        let displayString = `Archs: ${filters.types.vars.importedArch1},${filters.types.vars.importedArch2} --- Abilities:${filters.types.vars.importedAbility1},${filters.types.vars.importedAbility2}`
        readSelection("settingsImportedArchs").innerHTML = displayString;


        filters.types.vars.importedTraitRecords = [...globalRecords.greatTraitRecords]
        let arrayReference = filters.types.vars.importedTraitRecords;
        readSelection("settingsImportedTraits").innerHTML = "";
        for (let entry of arrayReference) {
            if (entry.name != "") {
                readSelection("settingsImportedTraits").innerHTML += `${entry.name} ${entry.level}, `
            }
        }
        filters.updateDodgeClass();
    }
}