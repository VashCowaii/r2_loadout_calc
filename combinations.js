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
        // "Lifesteal Peak": [
        //     "Lifesteal Effectiveness","Lifesteal-All","Lifesteal-Melee","Lifesteal-Melee Charged","Lifesteal-Ranged","Status-Outgoing Statuses","Status-Self-Bleed"
        // ],
        // "HavocDPS": [
        //     "Critical Chance-All","Critical Chance-Elemental","Critical Chance-Skill",
        //     "Critical Damage-All",
        //     "Damage-All","Damage-Elemental","Damage-Shock","Damage-Skill",
        //     "Skill-Duration","Speed-Cast","Speed-HASTE",

        //     "Status-Bleed","Status-Burn","Status-Corroded","Status-Exposed","Status-Overloaded","Status-Slow","Status-Outgoing Statuses",
        //     "Status-Self-Bleed","Status-Incomng Statuses",

        //     "Armor-Flat","Armor Effectiveness","DR-Flat","DR-Bulwark","DR-Bulwark Limit",
        //     "Encumbrance/Weight","Encumbrance/Weight - Threshold","Encumbrance/Weight-%",

        //     "Healing-Flat/second","Healing-%/second",

        //     "Shield-Flat",
        // ]
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
        cycles.debugPushLine("FIND STAT TAG FILTERS");cyclesLoop.updateSetupStep("Converting stat tag filters",true);
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

        cycles.debugPushLine("APPLYING FILTERS TO TABLES...");cyclesLoop.updateSetupStep("Applying Filters to Item Tables");
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
        for (let entry in amulets) {
            if (item===entry) {return amulets[item];}
        }
        for (let entry in rings ) {
            if (item===entry) {return rings[item];}
        }
        for (let entry in relics ) {
            if (item===entry) {return relics[item];}
        }
        for (let entry in fragments) {
            if (item===entry) {return fragments[item];}
        }
        for (let entry in primary) {
            if (item===entry) {return primary[item];}
        }
        for (let entry in melee) {
            if (item===entry) {return melee[item];}
        }
        for (let entry in secondary) {
            if (item===entry) {return secondary[item];}
        }
        for (let entry in rangedMutators) {
            if (item===entry) {return rangedMutators[item];}
        }
        for (let entry in meleeMutators) {
            if (item===entry) {return meleeMutators[item];}
        }
        for (let entry in rangedMods) {
            if (item===entry) {return rangedMods[item];}
        }
        for (let entry in concoctions) {
            if (item===entry) {return concoctions[item];}
        }
        for (let entry in quickUses) {
            if (item===entry) {return quickUses[item];}
        }
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
            const armorValue = +innerPath[4];
            const weightKey = innerPath[5];

            // If the weight is encountered for the first time or if the current combination has better armor
            if (valueStorage[weightKey] === undefined || valueStorage[weightKey].armorValue < armorValue) {
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
            if (currentEntry.armorValue < previousEntry.armorValue) {objectArray[i][currentKey] = previousEntry;}
        }

        return objectArray;
    },
    generateAnyCombinations(specified,tables,slots,isArmor) {
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
                if (specified[0]) {
                    if (!iterateSeparately) {iteration = index;}
                    if (slots===1) {
                        concoctionLimit = cycles.checkConcoctionLimit(tables,slots,specified[0]);
                        combinations.push([specified[0],concoctionLimit]);
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
                            concoctionLimit = cycles.checkConcoctionLimit(tables,slots,slotNamesStarter[i]);
                            combinations.push([slotNamesStarter[i],concoctionLimit]);
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
                if (specified[1]) {
                    if (!iterateSeparately) {iteration = index;}
                    if (slots===2) {
                        concoctionLimit = cycles.checkConcoctionLimit(tables,slots,slot1,specified[1]);
                        combinations.push([slot1,specified[1],concoctionLimit]);
                    }
                    else {loopSlot3(iteration,slot1,specified[1]);}
                }
                else {
                    for (let i=index;i<slotNames.length;i++) {
                        if (slotNames[i] != slot1) {
                            if (!slotNames[i]) {continue;}
                            if (!iterateSeparately) {iteration = i+1;}
                            if (slots===2) {
                                concoctionLimit = cycles.checkConcoctionLimit(tables,slots,slot1,slotNames[i]);
                                combinations.push([slot1,slotNames[i],concoctionLimit]);
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
                if (specified[2]) {
                    if (!iterateSeparately) {iteration = index;}
                    if (slots===3) {
                        concoctionLimit = cycles.checkConcoctionLimit(tables,slots,slot1,slot2,specified[2]);
                        combinations.push([slot1,slot2,specified[2],concoctionLimit]);
                    }
                    else {loopSlot4(iteration,slot1,slot2,specified[2]);}
                }
                else {
                    for (let i=index;i<slotNames.length;i++) {
                        if (slotNames[i] != slot1 && slotNames[i] != slot2) {
                            if (!slotNames[i]) {continue;}
                            if (!iterateSeparately) {iteration = i+1;}
                            if (slots===3) {
                                concoctionLimit = cycles.checkConcoctionLimit(tables,slots,slot1,slot2,slotNames[i]);
                                combinations.push([slot1,slot2,slotNames[i],concoctionLimit]);
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
                if (specified[3]) {
                    if (!iterateSeparately) {iteration = index;}
                    if (slots===4) {
                        concoctionLimit = cycles.checkConcoctionLimit(tables,slots,slot1,slot2,slot3,specified[3]);
                        combinations.push([slot1,slot2,slot3,specified[3],concoctionLimit]);
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
                                    concoctionLimit = cycles.checkConcoctionLimit(tables,slots,slot1,slot2,slot3,slotNames[i]);
                                    combinations.push([slot1,slot2,slot3,slotNames[i],concoctionLimit]);
                                }
                                else if (isArmor) {
                                    totalArmor = armor.helmets[slot1].stats.Armor + armor.chests[slot2].stats.Armor + armor.legs[slot3].stats.Armor + armor.hands[slotNames[i]].stats.Armor;
                                    totalWeight = armor.helmets[slot1].stats.Encumbrance + armor.chests[slot2].stats.Encumbrance + armor.legs[slot3].stats.Encumbrance + armor.hands[slotNames[i]].stats.Encumbrance;
                                    
                                    totalArmor = totalArmor.toFixed(2);totalWeight = totalWeight.toFixed(2);
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
                if (specified[4]) {
                    if (!iterateSeparately) {iteration = index;}
                    if (slots===5) {
                        concoctionLimit = cycles.checkConcoctionLimit(tables,slots,slot1,slot2,slot3,slot4,specified[4]);
                        combinations.push([slot1,slot2,slot3,slot4,specified[4],concoctionLimit]);
                    }
                    else {loopSlot6(iteration,slot1,slot2,slot3,slot4,specified[4]);}
                }
                else {
                    for (let i=index;i<slotNames.length;i++) {
                        if (slotNames[i] != slot1 && slotNames[i] != slot2 && slotNames[i] != slot3 && slotNames[i] != slot4) {
                            if (!slotNames[i]) {continue;}
                            if (!iterateSeparately) {iteration = i+1;}
                            if (slots===5) {
                                concoctionLimit = cycles.checkConcoctionLimit(tables,slots,slot1,slot2,slot3,slot4,slotNames[i]);
                                combinations.push([slot1,slot2,slot3,slot4,slotNames[i],concoctionLimit]);
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
                if (specified[5]) {
                    if (!iterateSeparately) {iteration = index;}
                    if (slots===6) {
                        concoctionLimit = cycles.checkConcoctionLimit(tables,slots,slot1,slot2,slot3,slot4,slot5,specified[5]);
                        combinations.push([slot1,slot2,slot3,slot4,slot5,specified[5],concoctionLimit]);
                    }
                    else {loopSlot7(iteration,slot1,slot2,slot3,slot4,slot5,specified[5]);}
                }
                else {
                    for (let i=index;i<slotNames.length;i++) {
                        if (slotNames[i] != slot1 && slotNames[i] != slot2 && slotNames[i] != slot3 && slotNames[i] != slot4 && slotNames[i] != slot5) {
                            if (!slotNames[i]) {continue;}
                            if (!iterateSeparately) {iteration = i+1;}
                            if (slots===6) {
                                concoctionLimit = cycles.checkConcoctionLimit(tables,slots,slot1,slot2,slot3,slot4,slot5,slotNames[i]);
                                combinations.push([slot1,slot2,slot3,slot4,slot5,slotNames[i],concoctionLimit]);
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
                if (specified[6]) {
                    if (slots===7) {
                        if (!iterateSeparately) {iteration = index;}
                        concoctionLimit = cycles.checkConcoctionLimit(tables,slots,slot1,slot2,slot3,slot4,slot5,slot6,specified[6]);
                        combinations.push([slot1,slot2,slot3,slot4,slot5,slot6,specified[6],concoctionLimit]);
                    }
                    //Notify me if I end up passing more than 4 slots, will remind me to expand from here if needed.
                    else {
                        alert(`Too many slots passed. Only 7 will be adhered to.`);
                        concoctionLimit = cycles.checkConcoctionLimit(tables,slots,slot1,slot2,slot3,slot4,slot5,slot6,specified[6]);
                        combinations.push([slot1,slot2,slot3,slot4,slot5,slot6,specified[6],concoctionLimit]);
                    }
                }
                else {
                    for (let i=index;i<slotNames.length;i++) {
                        if (slotNames[i]!=slot1 && slotNames[i]!=slot2 && slotNames[i]!=slot3 && slotNames[i]!=slot4 && slotNames[i]!=slot5 && slotNames[i]!=slot6) {
                            if (!slotNames[i]) {continue;}
                            if (slots===7) {
                                concoctionLimit = cycles.checkConcoctionLimit(tables,slots,slot1,slot2,slot3,slot4,slot5,slot6,slotNames[i]);
                                combinations.push([slot1,slot2,slot3,slot4,slot5,slot6,slotNames[i],concoctionLimit]);}
                            else {
                                alert(`Too many slots passed. Only 7 will be adhered to.`);
                                concoctionLimit = cycles.checkConcoctionLimit(tables,slots,slot1,slot2,slot3,slot4,slot5,slot6,slotNames[i]);
                                combinations.push([slot1,slot2,slot3,slot4,slot5,slot6,slotNames[i],concoctionLimit]);}
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
    generationStop(endType) {
        cycles.vars.stopCycles = true;
        readSelection("cycleSTOP").disabled = true;
        readSelection("cycleSTART").disabled = false;
        cycles.debugPushLine(`Worker: BUILD GENERATION ABORTED<br>`);
        workers.cycleWorker.terminate();
        if (!endType) {alert("Cycles were terminated");}
        else (alert(endType))
    },
    selfGenerationStop(endType) {
        cycles.vars.stopCycles = true;
        postMessage({command: `resetButtons`});
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
        if (cycles.vars.stopCycles && filters.types.vars.targetStatistic != "") {
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
        console.log("Recorded: " + globalRecords.RECORDEDcomplexInput)
        globalRecords.RECORDEDspiritHealterStacks = +globalRecords.ALTspiritHealterStacks.toString();
        globalRecords.RECORDEDuseShields = globalRecords.ALTuseShields ? true : false;
        globalRecords.RECORDEDuseRelicHealing = globalRecords.ALTuseRelicHealing ? true : false;
        globalRecords.RECORDEDuseNonStandardDR = globalRecords.ALTuseNonStandardDR ? true : false;



        filters.types.vars.oldTarget =  `${filters.types.vars.targetStatistic}`;//This is purely for tracking what the statistic is for display purposes, if it is changed while running

            readSelection("cycleSTOP").disabled = false;
            readSelection("cycleSTART").disabled = true;
            const iterator = cycles.reinstanceVars();
            function processVars() {
                const { done } = iterator.next();
                if (done) {
                    cyclesLoop.startCycleWorker();
                    cyclesLoop.updateSetupStep("Initiating Web Worker");
                    return;
                }
                setTimeout(processVars, 0);
            }
            processVars();
            cycles.debugPushLine("UI LOCK END");
        }
        else {
            alert('ERROR: No Targeted Statistic found. Query aborted.')
        }
    },
    updateSetupStep(stepString,start) {
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
    },
    startCycleWorker() {
        cycles.vars.counterInt = 0;
        workers.cycleWorker = new Worker('cycleWorker.js');
        workers.cycleWorker.onmessage = function(event) {
            const data = event.data;
            if (data.command === `pushDebugLine`) {
                cycles.debugPushLine(data.data);
            }
            if (data.command === `pushAlert`) {
                alert(data.data);
            }
            if (data.command === `pushInnerHTML`) {
                if (data.ID === "comboCount") {
                    //Store the total combo count so we don't have to replace commas every time
                    cycles.vars.totalDisplayCombinations = data.data;
                    data.data = data.data.toLocaleString();
                }
                readSelection(data.ID).innerHTML = data.data;
            }
            if (data.command === `updateStep`) {
                cyclesLoop.updateSetupStep(data.data);
            }
            if (data.command === `yieldCombination`) {
                let increments = 50000;//Determines how frequently the est time calculates, in terms of how many combos have passed
                cycles.vars.counterInt += 1;
                let counterInt = cycles.vars.counterInt;
                if (counterInt>cycles.vars.totalDisplayCombinations) {cyclesLoop.generationStop("`ERROR: MISMATCHED COMBO COUNT\n\nIf you ever see this, take note of your filters then join the discord linked at the bottom of any page, and ping Vash with the filter info.`");}
                else if (counterInt === cycles.vars.totalDisplayCombinations) {
                    let endTotalTime = performance.now();
                    endTotalTime -= cycles.vars.cycleTotalTimer;

                    endTotalTime = endTotalTime/1000;
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
                }
                let percentWidth = (counterInt)/cycles.vars.totalDisplayCombinations;
                readSelection(`counterInt`).innerHTML = counterInt.toLocaleString();
                readSelection(`combinationsDisplayCount`).style.width = `${percentWidth*100}%`;

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
                else if (!(counterInt%increments)) {
                    const newCycleTime = performance.now();
                    const timeDiff = newCycleTime - cycles.vars.cycleTimer;
                    cycles.vars.cycleTimer = newCycleTime;

                    const remainingCombos = cycles.vars.totalDisplayCombinations - counterInt;
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
                }
                if (data.isUpdated) {
                    let newTable = data.data.newTable;
                    let cycleObject = data.data.cycleObject;

                    cycleObject.bestArmorSet = cycleObject.bestArmorSet ?? {slot1:"",slot2:"",slot3:"",slot4:""}

                    readSelection("comboArmorHelmet").src = armor.helmets[cycleObject.bestArmorSet.slot1].image;
                    readSelection("comboArmorChest").src = armor.chests[cycleObject.bestArmorSet.slot2].image;
                    readSelection("comboArmorLeg").src = armor.legs[cycleObject.bestArmorSet.slot3].image;
                    readSelection("comboArmorHand").src = armor.hands[cycleObject.bestArmorSet.slot4].image;
                    readSelection("comboRelic").src = gear.relics[cycleObject.relic[0]].image;

                    readSelection("comboAmulet").src = gear.amulets[cycleObject.amulet[0]].image;
                    readSelection("comboRing1").src = gear.rings[cycleObject.ringSet[0]].image;
                    readSelection("comboRing2").src = gear.rings[cycleObject.ringSet[1]].image;
                    readSelection("comboRing3").src = gear.rings[cycleObject.ringSet[2]].image;
                    readSelection("comboRing4").src = gear.rings[cycleObject.ringSet[3]].image;

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

                    cyclesLoop.bestCombos.third = cyclesLoop.bestCombos.second ? {...cyclesLoop.bestCombos.second} : {"bestValue":0,"link":""};
                    cyclesLoop.bestCombos.second = cyclesLoop.bestCombos.first ? {...cyclesLoop.bestCombos.first} : {"bestValue":0,"link":""};
                    cyclesLoop.bestCombos.first = {
                        "bestValue": newTable[playerDerivedStatistics[filters.types.vars.oldTarget]].toFixed(2),
                        "link": manipulateURL.updateURLparameters(false,true)
                    }

                    comboPath = cyclesLoop.bestCombos
                    readSelection("comboTargetDisplay").innerHTML = `
                    <div class="bestOptionsRow">Target Statistic: ${filters.types.vars.oldTarget}</div>
                    <div class="bestOptionsRow">Current Best: <a href="${comboPath.first.link}" rel="noopener noreferrer" target="_blank" class="bestOptionsLink">${comboPath.first.bestValue}</a></div>
                    <div class="bestOptionsRow">Second: <a href="${comboPath.second.link}" rel="noopener noreferrer" target="_blank" class="bestOptionsLink">${comboPath.second.bestValue}</a></div>
                    <div class="bestOptionsRow">Third: <a href="${comboPath.third.link}" rel="noopener noreferrer" target="_blank" class="bestOptionsLink">${comboPath.third.bestValue}</a></div>
                    `

                    filters.types.vars.oldTarget
                        

                    readSelection(`lastFound`).innerHTML = `Current Best Loadout at #${counterInt.toLocaleString()}`

                    readSelection(`comboDisplay`).innerHTML = `
                        ${cycleObject.fragmentSet[0]}, ${cycleObject.fragmentSet[1]}, ${cycleObject.fragmentSet[2]}
                    `;
                }
            }
            if (data.command === `resetButtons`) {
                cycles.vars.stopCycles = true;
                readSelection("cycleSTOP").disabled = true;
                readSelection("cycleSTART").disabled = false;
            }
            if (data.command === `passBackArmor`) {
                cycles.vars.armorCombos.Table = data.data[0];
                cycles.vars.weightFirst.Table = data.data[1];
                cycles.vars.armorIsGenerated = true;
            }
        };
        workers.cycleWorker.onerror = function(error) {
            console.error('Worker error:', error);
            cyclesLoop.generationStop(`${error.message} LINE:${error.lineno}`);
        };

        cyclesLoop.updateSetupStep("Exporting data to Web Worker");
        workers.cycleWorker.postMessage({command:`copyFilteredTables`,data:cycles.vars});
        workers.cycleWorker.postMessage({command:`copyTableFilters`,data:filters.types});
        workers.cycleWorker.postMessage({command:`copyDataTables`,data:globalRecords});

        workers.cycleWorker.postMessage({command:`startCycles`});
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
            returnLimit += classInfo[item5].primeStats.ConcLimit || 0;
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
            case 1: threshold = 25 + weightThreshold;break;
            case 2: threshold = 50 + weightThreshold;break;
            case 3: threshold = 75 + weightThreshold;break;
            case 4: threshold = 10000 + weightThreshold;break;//This just needs to be a really big number, bigger than an possible weight, doesn't actually matter what it is.
        }
        
        let targetWeight = ((threshold/weightModifier)-existingWeight).toFixed(2);

        let isPossible = isExact ?? true;//Find exact values if specified, otherwise maximize armor per the given weight category
        // let isPossible = false;
        let armorSearch,weightSearch;
        if (isPossible) {
            armorSearch = cyclesLoop.binarySearch(cycles.vars.armorCombos.Table,targetArmor.toString(),true,true);
            if (armorSearch != -1) {
                let path = cycles.vars.armorCombos.Table[armorSearch.indexID][armorSearch.keyID];
                const weights = Object.keys(path[0])[0];

                if (+weights <= +targetWeight) {bestArmorSet = path[0][weights];}
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
        globalRecords.ALTarmor.helmet = bestArmorSet.slot1;globalRecords.ALTarmor.chest = bestArmorSet.slot2;
        globalRecords.ALTarmor.leg = bestArmorSet.slot3;globalRecords.ALTarmor.hand = bestArmorSet.slot4;
        return {bestArmorSet};
    },
    // No longer a generator function to yield combinations including fragment combinations
    //This is now only used within the worker cycleWorker
    generateCombinations() {
        cycles.setupCompleted = false;
        globalRecords.meleeFactors = {...globalRecords.ALTmeleeFactors}//Shift what are normally the search settings factors, to the main factors so the cycles can calculate properly.
        postMessage({command: `pushDebugLine`, data: "Worker: START COMBO GENERATION..."});
        postMessage({command: `pushDebugLine`, data: "Worker: - Starting Amulets"});postMessage({command: `updateStep`, data: "Amulet Tables"});

        const amuletCombos = cycles.generateAnyCombinations(filters.types.amulet.filter[0],[cycles.vars.amulets.Table],1);
        postMessage({command: `pushDebugLine`, data: "Worker: - Amulets completed<br>- Starting Rings"});postMessage({command: `updateStep`, data: "Ring Tables"});
        //Generate Rings combos, will take a sec if no filters are in play on this one
        const ringCombos = cycles.generateAnyCombinations(filters.types.ring.filter[0],[cycles.vars.rings.Table],4);
        postMessage({command: `pushDebugLine`, data: "Worker: - Rings completed<br>- Starting Relics"});postMessage({command: `updateStep`, data: "Relic Tables"});
        const relicCombos = cycles.generateAnyCombinations(filters.types.relic.filter[0],[cycles.vars.relics.Table],1);
        postMessage({command: `pushDebugLine`, data: "Worker: - Relics completed<br>- Starting Fragments"});postMessage({command: `updateStep`, data: "Fragment Tables"});
        const fragmentCombos = cycles.generateAnyCombinations(filters.types.fragment.filter[0],[cycles.vars.fragments.Table],3);
        postMessage({command: `pushDebugLine`, data: "Worker: - Fragments completed<br>- Starting Consumables"});postMessage({command: `updateStep`, data: "Consumable Tables"});
        const consumableCombos = cycles.generateAnyCombinations(filters.types.consumable.filter[0],[cycles.vars.consumables.Table],4); //Change to 4 slots later once I rework consumables
        postMessage({command: `pushDebugLine`, data: "Worker: - Consumables completed<br>- Starting Primaries"});postMessage({command: `updateStep`, data: "Primary Tables"});
        const primaryCombos = cycles.generateAnyCombinations(filters.types.primary.filter[0],[cycles.vars.primaries.Table],1);
        postMessage({command: `pushDebugLine`, data: "Worker: - Primaries completed<br>- Starting Melee"});postMessage({command: `updateStep`, data: "Melee Tables"});
        const meleeCombos = cycles.generateAnyCombinations(filters.types.melee.filter[0],[cycles.vars.melee.Table],1);
        postMessage({command: `pushDebugLine`, data: "Worker: - Melee completed<br>- Starting Secondaries"});postMessage({command: `updateStep`, data: "Secondary Tables"});
        const secondaryCombos = cycles.generateAnyCombinations(filters.types.secondary.filter[0],[cycles.vars.secondaries.Table],1);
        postMessage({command: `pushDebugLine`, data: "Worker: - Secondaries completed<br>- Starting Ranged Mutators"});postMessage({command: `updateStep`, data: "Ranged Mutator Tables"});
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
        const rangedMutatorCombos = cycles.generateAnyCombinations(rangedMutatorLocks,[cycles.vars.primaryMutators.Table],2);
        postMessage({command: `pushDebugLine`, data: "Worker: - Ranged Mutators completed<br>- Starting Melee Mutators"});postMessage({command: `updateStep`, data: "Melee Mutator Tables"});
        //Generate Melee Mutators combos
        const meleeMutatorCombos = cycles.generateAnyCombinations(filters.types.meleeMutator.filter[0],[cycles.vars.meleeMutators.Table],1);
        postMessage({command: `pushDebugLine`, data: "Worker: - Melee Mutators completed<br>- Starting Ranged Mods"});postMessage({command: `updateStep`, data: "Mod Tables"});
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
        const rangedModCombos = cycles.generateAnyCombinations(rangedModLocks,[cycles.vars.primaryMods.Table],2);
        postMessage({command: `pushDebugLine`, data: "Worker: - Ranged Mods completed"});
        //concoctions
        postMessage({command: `pushDebugLine`, data: "Worker: - Starting Concoctions 1-7"});postMessage({command: `updateStep`, data: "Concoction Tables"});
        let concMegaTable = {};
        concMegaTable.concoctionCombos1 = cycles.generateAnyCombinations(filters.types.concoction.filter[0],[cycles.vars.concoctions.Table],1);
        postMessage({command: `pushDebugLine`, data: "Worker: -- Table 1 completed"});
        concMegaTable.concoctionCombos2 = cycles.generateAnyCombinations(filters.types.concoction.filter[0],[cycles.vars.concoctions.Table],2);
        postMessage({command: `pushDebugLine`, data: "Worker: -- Table 2 completed"});
        concMegaTable.concoctionCombos3 = cycles.generateAnyCombinations(filters.types.concoction.filter[0],[cycles.vars.concoctions.Table],3);
        postMessage({command: `pushDebugLine`, data: "Worker: -- Table 3 completed"});
        concMegaTable.concoctionCombos4 = cycles.generateAnyCombinations(filters.types.concoction.filter[0],[cycles.vars.concoctions.Table],4);
        postMessage({command: `pushDebugLine`, data: "Worker: -- Table 4 completed"});
        concMegaTable.concoctionCombos5 = cycles.generateAnyCombinations(filters.types.concoction.filter[0],[cycles.vars.concoctions.Table],5);
        postMessage({command: `pushDebugLine`, data: "Worker: -- Table 5 completed"});
        concMegaTable.concoctionCombos6 = cycles.generateAnyCombinations(filters.types.concoction.filter[0],[cycles.vars.concoctions.Table],6);
        postMessage({command: `pushDebugLine`, data: "Worker: -- Table 6 completed"});
        concMegaTable.concoctionCombos7 = cycles.generateAnyCombinations(filters.types.concoction.filter[0],[cycles.vars.concoctions.Table],7);
        postMessage({command: `pushDebugLine`, data: "Worker: -- Table 7 completed"});
        postMessage({command: `pushDebugLine`, data: "Worker: - Concoctions completed"});

        postMessage({command: `pushDebugLine`, data: "Worker: GENERATING ARMOR TABLES..."});postMessage({command: `updateStep`, data: "Armor Tables"});
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

        postMessage({command: `pushDebugLine`, data: "Worker: COMBO GENERATION COMPLETED<br>CALCULATING TOTAL COMBOS..."});postMessage({command: `updateStep`, data: "Calculating Total Combos..."});

        
        let classSet = [globalRecords.ALTarchs.one.class,globalRecords.ALTarchs.two.class];
        let abilitySet = [globalRecords.ALTarchs.one.ability,globalRecords.ALTarchs.two.ability];

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
        if (comboCounter > 300000000 && !cycles.vars.bypassLimit) {
            postMessage({command: `pushAlert`, data: "Possible combinations exceeds the limit of 300 MILLION.\nAdjust your filters and try again as there is no feasible way in hell you're getting the answer you need by the time you need it, if we let this query continue."});
            cyclesLoop.selfGenerationStop();
            return;
        }
        
        cycles.vars.totalDisplayCombinations = comboCounter;postMessage({command: `updateStep`, data: "Completed Setup"});
        postMessage({command: `pushDebugLine`, data: `Worker: - TOTAL COMBOS: ${cycles.vars.totalDisplayCombinations.toLocaleString()}`});
        postMessage({command: `pushInnerHTML`, ID: "comboCount", data: cycles.vars.totalDisplayCombinations});
        postMessage({command: `pushDebugLine`, data: "Worker: - BEGIN CALCULATION CYCLES..."});

        cycles.setupCompleted = true;
        let cycleObject;
        let recordedStats = {};
        const drCAP = 0.8;
        let targetStatistic = playerDerivedStatistics[filters.types.vars.targetStatistic];


        for (const ringSet of ringCombos) {
            for (const amulet of amuletCombos) {
                //Needed to extract the current concoction limit.
                let currentLimit = cyclesLoop.combineConcoctionLimit(ringSet,amulet,classSet);//TODO: Add more item types if they add concLimit
                for (const relic of relicCombos) {
                    for (const stick of meleeCombos) {
                        for (const gun2 of secondaryCombos) {
                            for (const gun1 of primaryCombos) {
                                for (const quickUse of consumableCombos) {
                                    for (const rMod1 of rangedModCombos) {
                                        for (const fragmentSet of fragmentCombos) {
                                            for (const mMutator1 of meleeMutatorCombos) {
                                                for (const rMutator1 of rangedMutatorCombos) {

                                                    for (let conc=0;conc<concMegaTable[`concoctionCombos${currentLimit}`].length;conc++) {
                                                        // console.log("PreObject: ",rangedModCombos)
                                                        cycleObject = {
                                                            ringSet,relic,fragmentSet,amulet,classSet,abilitySet,concoction:concMegaTable[`concoctionCombos${currentLimit}`][conc],quickUse,
                                                            gun1,gun2,stick,rangedMutators: rMutator1, meleeMutators: mMutator1,rangedMods: rMod1};

                                                        cyclesLoop.updateCycleRecord(cycleObject);//Assigns cycle items to records so updateFormulas can work
                                                        let preArmor = updateFormulas(`cycleTableKnowerOfAll`,true);//Now call updateforms to get values without armor
                                        
                                                        let newTable = preArmor;
                                                        if (preArmor.totalFlat < 0.80) {
                                                            let flatDR = Math.max(0, preArmor.totalFlat);
                                                            //Work backwards to find the total base armor we're after, if flat DR is less than the DR cap
                                                            let targetArmorDR = Math.max(0, Math.min(drCAP, 1-((1-drCAP)/((1-flatDR))) ) );
                                                            let targetArmor = Math.max(0, (((targetArmorDR*200)/(1-targetArmorDR)) / preArmor.armorEff) - preArmor.baseArmor);

                                                            let armorPing = cyclesLoop.pingArmorCombos(targetArmor.toFixed(2),preArmor.baseWeight,preArmor.weightThreshold,preArmor.weightBoost)
                                                            cycleObject.bestArmorSet = armorPing.bestArmorSet;
                                                            newTable = updateFormulas(`cycleTableKnowerOfAll`);//Then redo the updateforms, this time turning ping off, so armor pieces are now factored
                                                        }
                                                        
                                                        if (newTable[targetStatistic] > recordedStats[targetStatistic] || !recordedStats[targetStatistic]) {
                                                            recordedStats = {...newTable};
                                                            postMessage({command: `yieldCombination`, isUpdated: true, data: {cycleObject,newTable}});
                                                        }
                                                        else {
                                                            postMessage({command: `yieldCombination`, isUpdated: false});
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
        cyclesLoop.selfGenerationStop(); //Set things back to normal once completed
    },
    updateCycleRecord(value,addArmor) {

        globalRecords.ALTaccessories.amulet = value.amulet[0] || "";
        globalRecords.ALTaccessories.ring1 = value.ringSet[0] || "";
        globalRecords.ALTaccessories.ring2 = value.ringSet[1] || "";
        globalRecords.ALTaccessories.ring3 = value.ringSet[2] || "";
        globalRecords.ALTaccessories.ring4 = value.ringSet[3] || "";

        globalRecords.ALTaccessories.relic = value.relic[0] || "";
        globalRecords.ALTaccessories.fragment1 = value.fragmentSet[0] || "";
        globalRecords.ALTaccessories.fragment2 = value.fragmentSet[1] || "";
        globalRecords.ALTaccessories.fragment3 = value.fragmentSet[2] || "";


        globalRecords.ALTconsumables.concoction1 = value.concoction[0] || "";
        globalRecords.ALTconsumables.concoction2 = value.concoction[1] || "";
        globalRecords.ALTconsumables.concoction3 = value.concoction[2] || "";
        globalRecords.ALTconsumables.concoction4 = value.concoction[3] || "";
        globalRecords.ALTconsumables.concoction5 = value.concoction[4] || "";
        globalRecords.ALTconsumables.concoction6 = value.concoction[5] || "";
        globalRecords.ALTconsumables.concoction7 = value.concoction[6] || "";
        globalRecords.ALTconsumables.quickUse1 = value.quickUse[0] || "";
        globalRecords.ALTconsumables.quickUse2 = value.quickUse[1] || "";
        globalRecords.ALTconsumables.quickUse3 = value.quickUse[2] || "";
        globalRecords.ALTconsumables.quickUse4 = value.quickUse[3] || "";

        globalRecords.ALTweapons.primary = value.gun1[0] || "";
        globalRecords.ALTweapons.primaryMutator = value.rangedMutators[0] || "";
        globalRecords.ALTweapons.primaryMod = value.rangedMods[0] || "";

        globalRecords.ALTweapons.melee = value.stick[0] || "";
        globalRecords.ALTweapons.meleeMutator = value.meleeMutators[0] || "";

        globalRecords.ALTweapons.secondary = value.gun2[0] || "";
        globalRecords.ALTweapons.secondaryMutator = value.rangedMutators[1] || "";
        globalRecords.ALTweapons.secondaryMod = value.rangedMods[1] || "";

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
        let teamCount = readSelection("teamCountSlider").value;
        let summonCount = readSelection("summonCountSlider").value;

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

        globalRecords.ALTspiritHealterStacks = readSelection("spiritCountSlider").value;
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