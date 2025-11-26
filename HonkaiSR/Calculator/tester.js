function readSelection(elemID) {return document.getElementById(elemID);}

const handleUI = {

}


const customMenu = {
    "rarityColors": {
        "1": "#4982c6",
        "2": "#4982c6",
        "3": "#4982c6",
        "4": "#9762d5",
        "5": "#d2ae73"
    },
    closeMenu() {
        readSelection("blockoutBackgroundShutter").style.display = "none";//remove the bg shutter
        readSelection("customMenuSearchBarBox").style.display = "flex";//this is set to none during relic stat modifications, but otherwise needs to be visible everywhere else
        readSelection("customMenuSearchBodyStats").style.display = "none";
        readSelection("customMenuSearchBodyStatsAttackData").style.display = "none";


        const elementsToClear = ["customMenuSearchTitle","customMenuSearchBarInput","customMenuSearchBody"]
        for (let elemEntry of elementsToClear) {readSelection(elemEntry).innerHTML = "";}
        readSelection("customMenuSearchBarInput").value = "";
        //technically the order in which we remove the actual menu box isn't relevant, but I'm putting it at the end to remind myself in the future to
        //always clear the contents of the elements inside, first, to clear memory(or at least I hope it works this way TODO: make sure it fuckin works this way lmao)
        readSelection("customMenuMainHolderBox").style.display = "none";

        readSelection("customMenuSearchBodyStatsAttackData").innerHTML = "";

        globalUI.currentSearchOpen = null;
        globalUI.currentSearchVolume = null;
    },
    createLightconeSearchMenu() {
        if (globalUI.queryIsActive) {return;}//do NOT allow modifications while a query is running, I am not confident that I've handled things properly enough yet for that
        readSelection("blockoutBackgroundShutter").style.display = "flex";
        readSelection("customMenuMainHolderBox").style.display = "flex";
        readSelection("customMenuSearchTitle").innerHTML = "Lightcones";

        readSelection("customMenuSearchNote").innerHTML = "Search for a lightcone NAME or DESCRIPTION.<br>S1 values applied for descriptions in search.";

    

        globalUI.currentSearchOpen = "lightcones";
        globalUI.currentSearchVolume = lightcones;
        readSelection("customMenuSearchBarInput").focus();
        customMenu.updateSearchResults();
    },
    //for sets search
    createRelicSearchMenu(relicSet) {
        if (globalUI.queryIsActive) {return;}//do NOT allow modifications while a query is running, I am not confident that I've handled things properly enough yet for that
        readSelection("blockoutBackgroundShutter").style.display = "flex";
        readSelection("customMenuMainHolderBox").style.display = "flex";

        let searchRef = {
            "1": "Planar",
            "2": "Relics 1-2",
            "3": "Relics 3-4",
        }
        readSelection("customMenuSearchTitle").innerHTML = searchRef[relicSet];
        readSelection("customMenuSearchNote").innerHTML = "Search for a relic NAME or effect DESCRIPTION.";

        globalUI.currentSearchOpen = searchRef[relicSet];
        globalUI.currentSearchVolume = relicSets;
        readSelection("customMenuSearchBarInput").focus();
        customMenu.updateSearchResults();
    },
    createOptimizerResultInspectMenu(resultIndex) {
        if (globalUI.queryIsActive) {return;}//do NOT allow modifications while a query is running, I am not confident that I've handled things properly enough yet for that
        readSelection("blockoutBackgroundShutter").style.display = "flex";
        readSelection("customMenuMainHolderBox").style.display = "flex";

        readSelection("customMenuSearchTitle").innerHTML = `Result ${resultIndex}`;
        readSelection("customMenuSearchBarBox").style.display = "none";
        readSelection("customMenuSearchNote").innerHTML = "This is a breakdown on the stats required for this result to work, as well as examples of what relics COULD look like on each piece in order to the overall roll distribution.";

        globalUI.currentSearchOpen = "OptimizerResult";
        globalUI.currentSearchVolume = null;
        // customMenu.updateSearchResults();
        customMenu.createOptimizerResultDetail(resultIndex);
    },
    createOptimizerResultDetail(resultIndex) {
        // if (globalUI.queryIsActive) {return;}//do NOT allow modifications while a query is running, I am not confident that I've handled things properly enough yet for that


        const globalResults = globalRecords.resultsStorage;
        const currentResult = globalResults[resultIndex];
        const characterObject = currentResult.characterObject;

        // console.log(currentResult.characterObject)
        // {
        //     battleDamageSUM: floor(simResult.battleDamageSUM),
        //     battleAV: simResult.sumAV,
        //     cycle: simResult.currentCycle,
        //     teamSPD: simResult.teamSPD,

        //     char1SPD: namedTurns.char1.initialSPD,
        //     char2SPD: namedTurns.char2.initialSPD,
        //     char3SPD: namedTurns.char3.initialSPD,
        //     char4SPD: namedTurns.char4.initialSPD,

        //     characterObject: comboDefined,
        // }


        // tableReference,returnObject
        // console.log(statTableRef.tableReference)

        let compositeCharacterString = `<div class="characterSearchButton clickable" id="characterSearchButton" onclick="userTriggers.useResultOnCurrentTeam(${resultIndex})">Apply this result to Current Team</div>`;
        
        for (let charSlot in characterObject) {
            let currentCharacterString = ``;
            const currentCharacter = characterObject[charSlot];
            const returnMenu = updateFormulas(charSlot,null,characterObject,{...globalRecords.querySettings});
            const menuStats = returnMenu.tableReference;
            const compositeStats = returnMenu.returnObject;

            const menuBoxDisplayOrder = [...Object.keys(menuStats),...Object.keys(compositeStats)].sort();
            menuBoxDisplayOrder.splice(0,1);


            const currentCharacterMenuString = `<details class="rotationsPermaConditionsExpand">
            <summary class="actionDetailBodyDetailExpandHeaderBackground clickable">Menu Stats</summary>
            ${customHTML.createAlternatingStatRows(menuBoxDisplayOrder,{...menuStats,...compositeStats},null,null,true)}
            </details>`;


            let exampleRelicsString = "";

            let pieceArray = ["Head","Hands","Body","Feet","Sphere","Rope"];
            let conflictStatArray = [];

            let conflictsObject = {};
            const pieceConflictSum = {};
            const pieceObject = {};
            const newRelicsDistribution = {}

            let pieceCounter = 0;
            for (let entry of pieceArray) {
                pieceCounter++;
                newRelicsDistribution[entry] = {
                    currentRolls: 5,
                    sortPriority: pieceCounter,
                    statsApplied: {},
                    mainStat: currentCharacter[`${entry}Main`],
                    pieceName: entry
                }
            }
            const currentStatObject = currentCharacter.statObject;

            for (let piece of pieceArray) {
                const currentMaintstat = currentCharacter[`${piece}Main`];
                conflictsObject[currentMaintstat] = (conflictsObject[currentMaintstat] ?? 0) + 1;
            }

            for (let statName in currentStatObject) {


                let possiblePiecesArray = [];
                for (let piece of pieceArray) {
                    const currentMaintstat = currentCharacter[`${piece}Main`];
                    if (currentMaintstat != statName) {possiblePiecesArray.push(piece)}
                }


                conflictStatArray.push({
                    statName,
                    conflictCount: conflictsObject[statName] ?? 0,
                    possibleRelics: possiblePiecesArray,
                    rollCount: currentStatObject[statName]
                })
            }

            conflictStatArray.sort((a, b) => {return b.conflictCount - a.conflictCount;});
            // console.log(conflictStatArray)

            for (let entry of conflictStatArray) {
                const currentPossiblePieces = entry.possibleRelics;

                for (let pieceName of currentPossiblePieces) {
                    const currentRelic = newRelicsDistribution[pieceName];

                    const subsRemaining = currentRelic.currentRolls;

                    const actualPossiblePieces = 6 - entry.conflictCount;
                    const currentIncrement = Math.min(subsRemaining,Math.ceil(entry.rollCount / actualPossiblePieces));
                    if (currentIncrement > 0) {
                        entry.conflictCount += 1;
                        entry.rollCount -= currentIncrement;
                        // currentRelic.currentRolls -= currentIncrement;

                        
                        if (!currentRelic.statsApplied[entry.statName]) {
                            currentRelic.currentRolls -= (currentIncrement - 1);
                        }
                        else {
                            currentRelic.currentRolls -= currentIncrement;
                        }
                        currentRelic.statsApplied[entry.statName] = currentIncrement;
                    }
                }
            }

            // console.log(newRelicsDistribution)
            const newFinalExampleArray = []
            for (let entryName in newRelicsDistribution) {
                const currentEntry = newRelicsDistribution[entryName];
                newFinalExampleArray.push(currentEntry)
            }
            newFinalExampleArray.sort((a, b) => {return a.sortPriority - b.sortPriority;});
            
            exampleRelicsString += `<details class="rotationsPermaConditionsExpand">
            <summary class="actionDetailBodyDetailExpandHeaderBackground clickable">Example Relics</summary>`;




            let currentCharRelicsRef = currentCharacter;

            const querySettings = globalRecords.querySettings;

            const substatRollValue = querySettings.substatRollValue === "High" ? 2 : (querySettings.substatRollValue === "Mid" ? 1 : 0);
            let subStatRefInner = relics.Head.subAffix;
            for (let piece of newFinalExampleArray) {
                let currentPieceName = piece.pieceName//link rope -> just rope, otherwise leave the name as is.

                let actualPieceName = userTriggers.relicSlotNameConversions[currentPieceName];


                // newRelicsDistribution[entry] = {
                //     currentRolls: 5,
                //     sortPriority: pieceCounter,
                //     statsApplied: {},
                //     mainStat: currentCharacter[`${entry}Main`],
                //     pieceName: entry
                // }

                const statsApplied = piece.statsApplied;
                const statsAppliedKeys = Object.keys(statsApplied);

                const stat1Name = statsAppliedKeys[0] ?? "";
                let stat1Value = stat1Name ? statsApplied[stat1Name] : null;
                if (stat1Value != null) {
                    const subStatRef = subStatRefInner[stat1Name];
                    stat1Value = stat1Value * (subStatRef.base + (subStatRef.step * substatRollValue))
                } 

                const stat2Name = statsAppliedKeys[1] ?? "";
                let stat2Value = stat2Name ? statsApplied[stat2Name] : null;
                if (stat2Value != null) {
                    const subStatRef = subStatRefInner[stat2Name];
                    stat2Value = stat2Value * (subStatRef.base + (subStatRef.step * substatRollValue))
                } 

                const stat3Name = statsAppliedKeys[2] ?? "";
                let stat3Value = stat3Name ? statsApplied[stat3Name] : null;
                if (stat3Value != null) {
                    const subStatRef = subStatRefInner[stat3Name];
                    stat3Value = stat3Value * (subStatRef.base + (subStatRef.step * substatRollValue))
                } 

                const stat4Name = statsAppliedKeys[3] ?? "";
                let stat4Value = stat4Name ? statsApplied[stat4Name] : null;
                if (stat4Value != null) {
                    const subStatRef = subStatRefInner[stat4Name];
                    stat4Value = stat4Value * (subStatRef.base + (subStatRef.step * substatRollValue))
                } 

                // console.log(statsApplied)

                Object.assign(currentCharacter,{
                    // [`${currentPieceName}Main`]: "HPFlat",
                    [`${currentPieceName}1Stat`]: stat1Name,
                    [`${currentPieceName}1Value`]: stat1Value,
                    [`${currentPieceName}2Stat`]: stat2Name,
                    [`${currentPieceName}2Value`]: stat2Value,
                    [`${currentPieceName}3Stat`]: stat3Name,
                    [`${currentPieceName}3Value`]: stat3Value,
                    [`${currentPieceName}4Stat`]: stat4Name,
                    [`${currentPieceName}4Value`]: stat4Value,
                })




                let currentPiece = currentCharRelicsRef[actualPieceName];
                let mainStat = currentCharRelicsRef[`${currentPieceName}Main`];
                let mainStatRef = relics[actualPieceName].mainAffix[mainStat].maxed;
                let subStatRef = relics.Head.subAffix;

                // let subRollArray = customMenu.restrictSubstatsAndReturnRolls(currentCharRelicsRef,actualPieceName,currentPieceName);
                let subRollArray = [];

                const displayOrder = [];
                if (stat1Name) {
                    displayOrder.push(greatTableIndex[currentCharRelicsRef[`${currentPieceName}1Stat`]]);
                    subRollArray.push(statsApplied[stat1Name]-1);
                };
                if (stat2Name) {
                    displayOrder.push(greatTableIndex[currentCharRelicsRef[`${currentPieceName}2Stat`]]);
                    subRollArray.push(statsApplied[stat2Name]-1);
                };
                if (stat3Name) {
                    displayOrder.push(greatTableIndex[currentCharRelicsRef[`${currentPieceName}3Stat`]]);
                    subRollArray.push(statsApplied[stat3Name]-1);
                };
                if (stat4Name) {
                    displayOrder.push(greatTableIndex[currentCharRelicsRef[`${currentPieceName}4Stat`]]);
                    subRollArray.push(statsApplied[stat4Name]-1);
                };
                const statDestination = {
                    ...(stat1Name ? {[greatTableIndex[currentCharRelicsRef[`${currentPieceName}1Stat`]]]: currentCharRelicsRef[`${currentPieceName}1Value`]} : {}),
                    ...(stat2Name ? {[greatTableIndex[currentCharRelicsRef[`${currentPieceName}2Stat`]]]: currentCharRelicsRef[`${currentPieceName}2Value`]} : {}),
                    ...(stat3Name ? {[greatTableIndex[currentCharRelicsRef[`${currentPieceName}3Stat`]]]: currentCharRelicsRef[`${currentPieceName}3Value`]} : {}),
                    ...(stat4Name ? {[greatTableIndex[currentCharRelicsRef[`${currentPieceName}4Stat`]]]: currentCharRelicsRef[`${currentPieceName}4Value`]} : {})
                };

                // let compositeRollCount = 0;
                // for (let entry of displayOrder) {
                //     const statInternal = greatTableKeys[entry] ?? entry;

                //     let valuePre = statDestination[entry];
                //     // let valueRef = (valuePre * (isPercent ? 100 : 1))?.toFixed(3) || 0;
        
                //     let estRolls = basicShorthand.estimateSubRolls(subStatRef[statInternal],valuePre);

                //     compositeRollCount += estRolls;
                // }


                // greatTableIndex
                let mainRow = customHTML.createAlternatingStatRows([greatTableIndex[mainStat]],{[greatTableIndex[mainStat]]: mainStatRef},true);
                let statRows = customHTML.createAlternatingStatRows(
                    // currentPiece.order,
                    displayOrder,
                    statDestination,
                    // currentPiece.stats,
                    false,
                    subStatRef,
                    null,
                    subRollArray
                );

                exampleRelicsString += `
                <div class="relicsPieceHolderBoxQueriesResultInspect">
                    <div class="characterDisplayNameAndElement">
                        <div class="traceDisplayNameBox">${currentPieceName}</div>
                    </div>
                    <div class="characterDisplayStatsBasic">

                        ${mainRow}
                        ${statRows}
                    </div>
                </div>`;
            }
            exampleRelicsString += `</details>`;



            currentCharacterString += `<div class="queryResultTeamRowBox">
                <div class="analyticsResultRowRelicsBox">
                    ${customHTML.queryResultsStandardRow(currentCharacter,currentResult[`${charSlot}SPD`],currentCharacter.statObject,maslow[currentCharacter.name].defaultMainSubs,true)}
                </div>
            </div>
            ${currentCharacterMenuString + exampleRelicsString}`;
            
            compositeCharacterString += currentCharacterString;
        }
        
        readSelection("customMenuSearchBody").innerHTML = compositeCharacterString;
    },
    restrictSubstatsAndReturnRolls(depositRef,partName,part) {
        let totalAVGRollEst = 0;
        let estSubstatArray = [];

        // const nameConversions = userTriggers.relicSlotNameConversions;
        let subStatRef = relics.Head.subAffix;

        for (let i=1;i<=4;i++) {
            const currentSlotDeposit = depositRef[`${part}${i}Stat`];
            if (currentSlotDeposit === null) {
                estSubstatArray.push(0);
                continue;
            }
            
            let initialValue = depositRef[`${part}${i}Value`];

            let estRolls = basicShorthand.estimateSubRolls(subStatRef[currentSlotDeposit],initialValue);
            totalAVGRollEst += estRolls;
            estSubstatArray.push(estRolls);
        }

        const potentialInvalidRolls = totalAVGRollEst > 5;
        // console.log(potentialInvalidRolls,totalAVGRollEst)

        let totalRestrictedRolls = 0;
        for (let i=1;i<=4;i++) {

            const currentSlotDeposit = depositRef[`${part}${i}Stat`];
            if (currentSlotDeposit === null) {continue;}
            const currentSubstatValueFamily = subStatRef[currentSlotDeposit];
            let initialValue = depositRef[`${part}${i}Value`];

            // let currentRollEst = estSubstatArray[i-1];
            if (potentialInvalidRolls) {
                const baseValue = currentSubstatValueFamily.base;
                const stepValue = currentSubstatValueFamily.step;
                const stepCount = currentSubstatValueFamily.stepsPossible;

                const maxBaseRoll = +(baseValue + (stepValue * stepCount)).toFixed(7);

                let highestPossibleMax = 0;
                for (let z=0;z<=5;z++) {
                    const maxUpperRange = +(maxBaseRoll * z + maxBaseRoll).toFixed(7);

                    if (totalRestrictedRolls + z > 5) {
                        depositRef[`${part}${i}Value`] = +(maxBaseRoll * (z - 1) + maxBaseRoll).toFixed(7);
                        highestPossibleMax = z-1;
                        totalRestrictedRolls += z-1;
                        break;
                    }
                    else if (initialValue > maxUpperRange) {
                        // console.log(initialValue,maxUpperRange)
                        continue;
                    }
                    else {
                        highestPossibleMax = z;
                        totalRestrictedRolls += z;
                        break;
                    } 
                }
                estSubstatArray[i-1] = highestPossibleMax;
            }
        }

        return estSubstatArray;
    },
    //for creating individual piece stat adjustment menus
    createRelicDetailMenu(part) {
        if (globalUI.queryIsActive) {return;}//do NOT allow modifications while a query is running, I am not confident that I've handled things properly enough yet for that
        readSelection("blockoutBackgroundShutter").style.display = "flex";
        readSelection("customMenuMainHolderBox").style.display = "flex";

        let currentSlot = `char${globalUI.currentCharacterDisplayed}`;
        let depositRef = globalRecords.character[currentSlot];

        readSelection("customMenuSearchBarBox").style.display = "none";
        readSelection("customMenuSearchTitle").innerHTML = part;
        readSelection("customMenuSearchNote").innerHTML = "";

        globalUI.currentSearchOpen = part;
        globalUI.currentSearchVolume = part; 

        const nameConversions = userTriggers.relicSlotNameConversions;
        const realPartName = nameConversions[part];
        let mainStatRef = relics[nameConversions[part]].mainAffix;
        let subStatRef = relics.Head.subAffix;
        let mainStatKeys = Object.keys(mainStatRef);
        let subStatKeys = Object.keys(subStatRef);
        // ["Head","Hands","Body","Feet","Sphere","Rope"]

        let subStrings = [
            {"array": -1,"value": depositRef[`${part}Main`],"name": "Main","string": "","keys": mainStatKeys,"ref": mainStatRef},
            {"array": 0,"value": depositRef[`${part}1Stat`],"name": `${part}1Value`,"string": "","keys": subStatKeys,"ref": subStatRef},
            {"array": 1,"value": depositRef[`${part}2Stat`],"name": `${part}2Value`,"string": "","keys": subStatKeys,"ref": subStatRef},
            {"array": 2,"value": depositRef[`${part}3Stat`],"name": `${part}3Value`,"string": "","keys": subStatKeys,"ref": subStatRef},
            {"array": 3,"value": depositRef[`${part}4Stat`],"name": `${part}4Value`,"string": "","keys": subStatKeys,"ref": subStatRef},
        ];


        // greatTableIndex
        // greatTableKeys
        
        // console.log(basicShorthand.mappedFamilies)
        for (let entry of subStrings) {
            // let currentEntry = subStrings[entry];
            // mainOptionsString += `<option value="${mainKey}">${basicShorthand.findStatObject(mainKey).sets[mainKey].display}</option>`

            for (let mainKey of entry.keys) {
                const keyIndex = greatTableIndex[mainKey];
                let group = basicShorthand.findStatObject(keyIndex).sets[keyIndex];
                const adjustedNameKey = group.display + group.unit;
                entry.string += `<option value="${mainKey}">${adjustedNameKey}</option>`;
            }
        }

        let mainStatRowEntries = `<div class="relicStatsSelectionMainstatIconRow">`;
        let mainStatTitle = "";
        const currentMainStat = subStrings[0].value;
        for (let mainKey of subStrings[0].keys) {
            const keyIndex = greatTableIndex[mainKey];
            let imagePath = propertyImagePaths[basicShorthand.mappedFamilies[keyIndex]].icon;

            const isMainKey = currentMainStat === mainKey;
            if (isMainKey) {
                mainStatTitle = basicShorthand.findStatObject(keyIndex).sets[keyIndex].specific;
            }
            mainStatRowEntries += `
            <img src="${imagePath}" class="${isMainKey ? "characterDisplayRelicStatChoiceIconCHOSEN" : "characterDisplayRelicStatChoiceIcon"} clickable" onclick="customMenu.updateSelectedRelicStatsNew(false,'${part}','Main','${mainKey}')"/>
            `
        }
        mainStatRowEntries += "</div>"

        let decimalsNote = `Roll count is priotized from <b style="color:white">top to bottom</b>. If you have 5 rolls on your last stat, but then you input 5 rolls on the first stat, it will put those 5 rolls on the top but then remove any rolls that go over 5 on all rolls after that.<br>`;
        let adjustNote = "The game hides decimal places on every stat, so while you may enter \"19\" on a flat DEF substat, you will see it change to 19.051896 because that is the real value.<br><br>The calc can adjust values properly for anything but SPD."
        let changeString = `onchange="customMenu.updateSelectedRelicStats()"`;




        const rollArray = customMenu.restrictSubstatsAndReturnRolls(depositRef,realPartName,part);

        let inputLoopString = "";
        for (let i=1;i<=4;i++) {

            const currentSlotDeposit = depositRef[`${part}${i}Stat`];

            let currentValue = depositRef[`${part}${i}Value`];

            const indexValue = greatTableIndex[currentSlotDeposit];
            const statFamily = basicShorthand.findStatObject(indexValue);

            const unit = statFamily.sets[indexValue].unit;
            const isPercent = unit === "%";
            // propertyImagePaths

            const currentRollValue = rollArray[i-1];


            inputLoopString += `<div class="relicStatSelectionRow">
                <select class="relicStatSelectionSelector" id="relicStatSelectionSelectorSub${i}" ${changeString}>${subStrings[i].string}</select>
                <div class="customMenuSearchBarBoxRelicValueInput">
                    <input type="number" class="customMenuSearchBarInputRelicValues" id="relicStatSelectionSelectorSub${i}Input" ${changeString} min="${+(subStatRef[currentSlotDeposit].bounds[0] * (isPercent ? 100 : 1)).toFixed(7)}" max="${+(subStatRef[currentSlotDeposit].bounds[1] * (isPercent ? 100 : 1)).toFixed(7)}" step="${+(subStatRef[currentSlotDeposit].step * (isPercent ? 100 : 1)).toFixed(7)}" value="${+(currentValue * (isPercent ? 100 : 1)).toFixed(7)}">
                    ${isPercent ? "%" : ""}
                </div>
                ${currentRollValue > 0 ? `<div class="imageRowStatisticStatBoxRollsEst">${currentRollValue}</div>` : `<div class="imageRowStatisticStatBoxRollsEst0Roll"></div>`}
            </div>`;

            // <div class="relicStatSelectionRow">
            //     <select class="relicStatSelectionSelector" id="relicStatSelectionSelectorSub1" ${changeString}>${subStrings[1].string}</select>
            //     <div class="customMenuSearchBarBoxRelicValueInput">
            //         <input type="number" class="customMenuSearchBarInputRelicValues" id="relicStatSelectionSelectorSub1Input" ${changeString} min="${subStatRef[slot1Conversion].bounds[0]}" max="${subStatRef[slot1Conversion].bounds[1]}" step="${subStatRef[slot1Conversion].step}" value="${depositRef[`${part}1Value`]}">
            //     </div>
            // </div>
        }

        // ${subRolls && estRolls ? `<div class="${potentiallyInvalid ? "imageRowStatisticStatBoxRollsEstInvalid" : "imageRowStatisticStatBoxRollsEst"}">${estRolls}</div>` : ""}
        readSelection("customMenuSearchBody").innerHTML = `
            <div class="relicStatsSelectionMainstatRow">
                <div class="characterDisplayNameBox">Main Stat: ${mainStatTitle}</div>
            </div>
            ${mainStatRowEntries}

            <div class="relicStatsSelectionMainstatRow">
                <div class="characterDisplayNameBox">Substats</div>
            </div>
            <div class="customMenuSearchNote">${decimalsNote}</div>
            <div class="customMenuSearchNoteWarning" id="relicStatWindowWarningMessage"></div>
            ${inputLoopString}
            <div class="customMenuSearchNote">${adjustNote}</div>
        `;

        let newKeyCounter = 0;
        for (let key of subStrings) {
            if (key.name === "Main") {
                newKeyCounter ++;
                continue}
            readSelection(`relicStatSelectionSelector${newKeyCounter > 0 ? `Sub${newKeyCounter}` : key.name}`).value = key.name === "Main" ? depositRef[`${part}Main`] : depositRef[`${part}${newKeyCounter}Stat`];// [currentEntry.array];//currentEntry.ref.value;
            newKeyCounter ++;
        }

        // customMenu.updateSelectedRelicStats();
    },
    createCharacterSearchMenu() {
        if (globalUI.queryIsActive) {return;}//do NOT allow modifications while a query is running, I am not confident that I've handled things properly enough yet for that
        readSelection("blockoutBackgroundShutter").style.display = "flex";
        readSelection("customMenuMainHolderBox").style.display = "flex";
        readSelection("customMenuSearchTitle").innerHTML = "Characters";

        readSelection("customMenuSearchNote").innerHTML = "Search for character NAME, PATH, or ELEMENT.";

        globalUI.currentSearchOpen = "characters";
        globalUI.currentSearchVolume = characters;
        readSelection("customMenuSearchBarInput").focus();
        customMenu.updateSearchResults();
    },
    createCharacterStatScreen() {
        if (globalUI.queryIsActive) {return;}//do NOT allow modifications while a query is running, I am not confident that I've handled things properly enough yet for that
        readSelection("blockoutBackgroundShutter").style.display = "flex";
        readSelection("customMenuMainHolderBox").style.display = "flex";
        readSelection("customMenuSearchTitle").innerHTML = "Stats";

        readSelection("customMenuSearchNote").innerHTML = "OUT OF COMBAT stats for the currently selected character.<br><br>Mainly for debugging purposes on my end, as most of you will never give a shit about all of this.";
        readSelection("customMenuSearchBarBox").style.display = "none";

        readSelection("customMenuSearchBodyStats").style.display = "flex";
        //this is something we can't redo a menu for each time, as the stats can only be referenced from the statRefTable from updateFormulas, and I don't want to call that every fuckin time
        //someone opens the menu. As such, updatecharacterUI will add everything to the table, which will toggle visible or not based on that button click.
        //TODO: later in the same way we log the battle sim data to global records, should probably just do that with the menu-only stats, dunno why I didn't think of that sooner. Dentge.
    },
    createCharacterExportScreen() {
        if (globalUI.queryIsActive) {return;}

        readSelection("blockoutBackgroundShutter").style.display = "flex";
        readSelection("customMenuMainHolderBox").style.display = "flex";
        readSelection("customMenuSearchTitle").innerHTML = "Import & Export";
        readSelection("customMenuSearchBarBox").style.display = "none";

        readSelection("customMenuSearchNote").innerHTML = `<b style="color:white;">Export</b> will assign the data of a character or team to your clipboard.<br><b style="color:white;">Import</b> will take whatever text has been input into the field below, and assign it to whatever category you clicked Import for.`;

        const bodyElem = readSelection("customMenuSearchBody");
        // customMenuSearchBody


        let characterExportString = "";

        const characterObject = globalRecords.character;

        for (let i=1;i<=4;i++) {
            const currentCharacter = characterObject[`char${i}`].name;
            const iconPath = characters[currentCharacter].preview;
            // console.log(iconPath)

            characterExportString += `<div class="importCharacterBoxItem">
                <div class="filterCharacterExportSwitchIconBox">
                    <img src="/HonkaiSR/${iconPath}" class="filterCharacterSelectionSwitchIcon">
                </div>
                <div class="exportIconBoxHolder clickable" onclick="userTriggers.exportCharacterData('char${i}')">Export</div>
                <div class="exportIconBoxHolder clickable" onclick="userTriggers.importCharacterData('char${i}')">Import</div>
            </div>`;
        }

        bodyElem.innerHTML = `
        <div class="exportMenuMainBox">
            <div class="teamwideImportBox">
                <div class="teamwideImportBoxRow">
                    <div class="teamwideImportHeaderInner">Team</div>
                    <div class="exportIconBoxHolder clickable" onclick="userTriggers.exportCharacterData('ALL')">Export</div>
                    <div class="exportIconBoxHolder clickable" onclick="userTriggers.importCharacterData('ALL')">Import</div>
                </div>
            </div>

            <div class="teamwideImportBox">
                <div class="teamwideImportHeader">Characters</div>
                <div class="characterImportBox">
                    ${characterExportString}
                </div>
            </div>

            <div class="teamwideImportHeader">Import Data</div>
            <div class="customMenuSearchNote">Paste your prior exported data below, then click import on either the character slot it should go in, or the team-wide import button to assign an entire team.</div>

            <div class="statFiltersRowContainer">
                <div class="presetsTitle">INPUT:</div>
                <div class="presetsSelectorBox">
                    <input class="tagInput" id="importTextInputTeam"/>
                </div>
            </div>
        </div>
        `;
    },
    createCharacterFiltersExportScreen() {
        if (globalUI.queryIsActive) {return;}

        readSelection("blockoutBackgroundShutter").style.display = "flex";
        readSelection("customMenuMainHolderBox").style.display = "flex";
        readSelection("customMenuSearchTitle").innerHTML = "Filters<br>Import & Export";
        readSelection("customMenuSearchBarBox").style.display = "none";

        readSelection("customMenuSearchNote").innerHTML = `<b style="color:white;">Export</b> will assign the FILTER data of a character or team to your clipboard.<br><b style="color:white;">Import</b> will take whatever text has been input into the field below, and assign it to whatever category you clicked Import for.`;

        const bodyElem = readSelection("customMenuSearchBody");
        // customMenuSearchBody


        let characterExportString = "";

        const characterObject = globalRecords.character;

        for (let i=1;i<=4;i++) {
            const currentCharacter = characterObject[`char${i}`].name;
            const iconPath = characters[currentCharacter].preview;
            // console.log(iconPath)

            characterExportString += `<div class="importCharacterBoxItem">
                <div class="filterCharacterExportSwitchIconBox">
                    <img src="/HonkaiSR/${iconPath}" class="filterCharacterSelectionSwitchIcon">
                </div>
                <div class="exportIconBoxHolder clickable" onclick="userTriggers.exportCharacterDataFilter('char${i}')">Export</div>
                <div class="exportIconBoxHolder clickable" onclick="userTriggers.importCharacterDataFilter('char${i}')">Import</div>
            </div>`;
        }


        bodyElem.innerHTML = `
        <div class="exportMenuMainBox">
            <div class="teamwideImportBox">
                <div class="teamwideImportBoxRow">
                    <div class="teamwideImportHeaderInner">Team Filters</div>
                    <div class="exportIconBoxHolder clickable" onclick="userTriggers.exportCharacterDataFilter('ALL')">Export</div>
                    <div class="exportIconBoxHolder clickable" onclick="userTriggers.importCharacterDataFilter('ALL')">Import</div>
                </div>
            </div>
            <div class="teamwideImportBox">
                <div class="teamwideImportHeader">Character Filters</div>
                <div class="characterImportBox">
                    ${characterExportString}
                </div>
            </div>

            <div class="teamwideImportHeader">Import Data</div>
            <div class="customMenuSearchNote">Paste your prior exported data below, then click import on either the character slot it should go in, or the team-wide import button to assign an entire team.</div>

            <div class="statFiltersRowContainer">
                <div class="presetsTitle">INPUT:</div>
                <div class="presetsSelectorBox">
                    <input class="tagInput" id="importTextInputTeam"/>
                </div>
            </div>
        </div>
        `;
    },
    createAddedEnemyMenu(waveID,index) {
        if (globalUI.queryIsActive) {return;}

        const isEdit = index != undefined;
        readSelection("blockoutBackgroundShutter").style.display = "flex";
        readSelection("customMenuMainHolderBox").style.display = "flex";
        readSelection("customMenuSearchTitle").innerHTML = `${isEdit ? "Edit" : "Add to"} Wave ${waveID}${isEdit ? ":"+(index + 1) : ""}`;
        readSelection("customMenuSearchBarBox").style.display = "none";

        readSelection("customMenuSearchNote").innerHTML = `Construct a custom enemy, or select a preset to add an enemy to your selected wave.`;

        const bodyElem = readSelection("customMenuSearchBody");
        const waveRef = globalRecords.battleSettings[`waveArray${waveID}`];
        const slotRef = isEdit ? waveRef[index] : null;
        // customMenuSearchBody

        // const weaknessToggleEntries = ["Physical","Fire","Ice","Lightning","Wind", "Quantum","Imaginary"];
        const weaknessToggleEntries = [
            {element: "Physical", elementIcon: "Physical"},
            {element: "Fire", elementIcon: "Fire"},
            {element: "Ice", elementIcon: "Ice"},
            {element: "Lightning", elementIcon: "Thunder"},
            {element: "Wind", elementIcon: "Wind"},
            {element: "Quantum", elementIcon: "Quantum"},
            {element: "Imaginary", elementIcon: "Imaginary"},
        ];
        function addEnemyWeaknessToggles(entry) {
            const elementName = entry.element;

            //beta started with resistance as a boolean to work with whether enemies were weak to or not, in order to tell if it was 0%, 20%, or 40%
            //but I was made aware of some enemies that have no weakness but are still 0% res, and I forgot there are also enemies at 60% res when resistant rather than 40%
            //so the boolean check is purely there for people who already exported enemy data with the boolean only resistance, so it can convert properly
            return `<div class="imageRowStatisticBox1">
                <div class="imageRowStatisticImageBox"><img src="/HonkaiSR/icon/element/${entry.elementIcon}.png" class="imageRowStatisticImage"/></div>
                <div class="imageRowStatisticNameBox" id="addEnemyWeakness${elementName}Box">
                    <div class="statsRowToggle">
                        Weakness&nbsp;
                        <label class="toggleContainer">
                            <input type="checkbox" class="toggleCheckbox" id="addEnemyWeakness${elementName}" onchange="userTriggers.updateEnemyAddedMenuUI()" ${isEdit && slotRef.weaknessOverrides[elementName] ? "checked" : ""}><span class="toggleSlider"></span>
                        </label>
                    </div>
                </div>
                
                <div class="statisticSettingsRow">
                    <div class="statsRowName">RES %:&nbsp;<span id="addEnemyResistanceSliderDisplay${elementName}">20%</span></div>
                    <div class="statsRowToggle">
                        <input type="range" id="addEnemyResistanceSlider${elementName}" name="slider" min="0" max="60" value="${isEdit ? slotRef.weaknessOverrides[elementName] ? 0 : (slotRef.resistantTo[elementName] ?? 20) : (slotRef.weaknessOverrides[elementName] ? 0 : 20)}" step="20" list="tickmarks" onchange="userTriggers.updateEnemyAddedMenuUI()">
                    </div>
                </div>

            </div>`;

            // <div class="imageRowStatisticStatBox" id="addEnemyResistance${elementName}Box">
            //     <div class="statsRowToggle">
            //         Resistant&nbsp;
            //         <label class="toggleContainer">
            //             <input type="checkbox" class="toggleCheckbox" id="addEnemyResistance${elementName}" onchange="userTriggers.updateEnemyAddedMenuUI()" ${isEdit && slotRef.resistantTo[elementName] ? "checked" : ""}><span class="toggleSlider"></span>
            //         </label>
            //     </div>
            // </div>
        }
        // function addEnemyWeaknessToggles(entry) {
        //     const elementName = entry.element;
        //     return `<div class="imageRowStatisticBox1">
        //         <div class="imageRowStatisticImageBox"><img src="/HonkaiSR/icon/element/${entry.elementIcon}.png" class="imageRowStatisticImage"/></div>
        //         <div class="imageRowStatisticNameBox" id="addEnemyWeakness${elementName}Box">
        //             <div class="statsRowToggle">
        //                 Weakness&nbsp;
        //                 <label class="toggleContainer">
        //                     <input type="checkbox" class="toggleCheckbox" id="addEnemyWeakness${elementName}" onchange="userTriggers.updateEnemyAddedMenuUI()" ${isEdit && slotRef.weaknessOverrides[elementName] ? "checked" : ""}><span class="toggleSlider"></span>
        //                 </label>
        //             </div>
        //         </div>
        //         <div class="imageRowStatisticStatBox" id="addEnemyResistance${elementName}Box">
        //             <div class="statsRowToggle">
        //                 Resistant&nbsp;
        //                 <label class="toggleContainer">
        //                     <input type="checkbox" class="toggleCheckbox" id="addEnemyResistance${elementName}" onchange="userTriggers.updateEnemyAddedMenuUI()" ${isEdit && slotRef.resistantTo[elementName] ? "checked" : ""}><span class="toggleSlider"></span>
        //                 </label>
        //             </div>
        //         </div>
        //     </div>`
        // }
        let weaknessString = "";
        for (let entry of weaknessToggleEntries) {
            weaknessString += addEnemyWeaknessToggles(entry);
        }

        // {
        //     "image": null,
        //     "entry": null,
        //     "name": "Gunner Guy",
        //     "lvl": 66,
        //     "hpBars": 1,
        //     "toughnessBars": 1,
        //     "stats": {
        //         "HPBase": 395960000,
        //         "ATKBase": 718,
        //         "SPDBase": 91,
        //         "Toughness": 30,
        //         "EffectRES": 0.3
        //     },
        //     "enemyTypeAttack": "Bounce",
        //     "enemyType": "minion",
        //     "weaknessOverrides": {
        //         "Ice": true,
        //         "Physical": true,
        //         "Wind": true
        //     },
        //     "resistantTo": {}
        // },


        // <option value="Blast">Blast</option>
        // <option value="Bounce">Bounce</option>
        bodyElem.innerHTML = `
            <div class="statisticSettingsRow">
                <div class="statsRowName">Name:</div>
                <div class="presetsSelectorBox">
                    <input class="tagInput" id="addEnemyStatsName" ${isEdit ? `value="${slotRef.name}"` : ""}/>
                </div>
            </div>

            <div class="statisticSettingsRow">
                <div class="statsRowName">Level:&nbsp;<span id="addEnemyLevelSliderDisplay">95</span></div>
                <div class="statsRowToggle">
                    <input type="range" id="addEnemyLevelSlider" name="slider" min="1" max="120" value="${isEdit ? slotRef.lvl : "95"}" step="1" list="tickmarks" onchange="userTriggers.updateEnemyAddedMenuUI()">
                </div>
            </div>
            <div class="statisticSettingsRow">
                <div class="statsRowName">HP Bars:&nbsp;<span id="addEnemyHPBarsDisplay">1</span></div>
                <div class="statsRowToggle">
                    <input type="range" id="addEnemyHPBars" name="slider" min="1" max="10" value="${isEdit ? slotRef.hpBars : "1"}" step="1" list="tickmarks" onchange="userTriggers.updateEnemyAddedMenuUI()" disabled>
                </div>
            </div>
            <div class="statisticSettingsRow">
                <div class="statsRowName">Toughness Bars:&nbsp;<span id="addEnemyToughnessBarsDisplay">1</span></div>
                <div class="statsRowToggle">
                    <input type="range" id="addEnemyToughnessBars" name="slider" min="1" max="10" value="${isEdit ? slotRef.toughnessBars : "1"}" step="1" list="tickmarks" onchange="userTriggers.updateEnemyAddedMenuUI()" disabled>
                </div>
            </div>
            <div class="statisticSettingsRow">
                <div class="statsRowName">Attack Type:&nbsp;</div>
                <div class="statsRowToggle">
                    <select class="relicStatSelectionSelector" id="addEnemyAttackTypeSelector">
                        <option value="Single Target">Single Target</option>
                        <option value="AoE">AoE</option>
                    </select>
                </div>
            </div>
            <div class="statisticSettingsRow">
                <div class="statsRowName">Enemy Type:&nbsp;</div>
                <div class="statsRowToggle">
                    <select class="relicStatSelectionSelector" id="addEnemyEnemyTypeSelector">
                        <option value="boss">Boss</option>
                        <option value="elite">Elite</option>
                        <option value="minion">Minion</option>
                    </select>
                </div>
            </div>

            <div class="customMenuSearchNote">Enemy DEF is assigned automatically based on level selected</div>

            
            <div class="imageRowStatisticBox2">
                <div class="imageRowStatisticImageBox"><img src="/HonkaiSR/icon/property/IconAttack.png" class="imageRowStatisticImage"/></div>
                <div class="imageRowStatisticNameBox">ATK</div>
                <div class="imageRowStatisticStatBox">
                    <div class="presetsSelectorBox">
                        <input type="number" class="tagInput" id="addEnemyStatsATK" value="${isEdit ? slotRef.stats[ATKBase] : ""}"/>
                    </div>
                </div>
            </div>
            <div class="imageRowStatisticBox1">
                <div class="imageRowStatisticImageBox"><img src="/HonkaiSR/icon/property/IconSpeed.png" class="imageRowStatisticImage"/></div>
                <div class="imageRowStatisticNameBox">SPD</div>
                <div class="imageRowStatisticStatBox">
                    <div class="presetsSelectorBox">
                        <input type="number" class="tagInput" id="addEnemyStatsSPD" value="${isEdit ? slotRef.stats[SPDBase] : ""}"/>
                    </div>
                </div>
            </div>
            <div class="imageRowStatisticBox2">
                <div class="imageRowStatisticImageBox"><img src="/HonkaiSR/icon/property/IconStatusResistance.png" class="imageRowStatisticImage"/></div>
                <div class="imageRowStatisticNameBox">Effect RES</div>
                <div class="imageRowStatisticStatBox">
                    <div class="presetsSelectorBox">
                        <input type="number" class="tagInput" id="addEnemyStatsEffectRES" value="${isEdit ? slotRef.stats[EffectRES] : ""}"/>
                    </div>
                </div>
            </div>
            <div class="imageRowStatisticBox1">
                <div class="imageRowStatisticImageBox"><img src="/HonkaiSR/icon/property/IconBreakUp.png" class="imageRowStatisticImage"/></div>
                <div class="imageRowStatisticNameBox">Toughness</div>
                <div class="imageRowStatisticStatBox">
                    <div class="presetsSelectorBox">
                        <input type="number" class="tagInput" id="addEnemyStatsToughness" value="${isEdit ? slotRef.stats[Toughness] : ""}"/>
                    </div>
                </div>
            </div>
            <div class="imageRowStatisticBox2">
                <div class="imageRowStatisticImageBox"><img src="/HonkaiSR/icon/property/IconMaxHP.png" class="imageRowStatisticImage"/></div>
                <div class="imageRowStatisticNameBox">HP</div>
                <div class="imageRowStatisticStatBox">
                    <div class="presetsSelectorBox">
                        <input type="number" class="tagInput" id="addEnemyStatsHP" value="${isEdit ? slotRef.stats[HPBase] : ""}"/>
                    </div>
                </div>
            </div>

            <div class="addEnemyWeaknessesHeader">Weaknesses & Resistance</div>
            <div class="customMenuSearchNote">Toggling a weakness will force the RES of that element to be 0.</div>
            ${weaknessString}

            ${!isEdit ? `
            <div class="teamwideImportHeader">Import Data</div>
            <div class="addEnemyExportNote">Paste your prior exported enemy data below, then click Add to Wave. To export an enemy, open the edit menu on any active enemy and click Export.</div>

            <div class="statFiltersRowContainer">
                <div class="presetsTitle">INPUT:</div>
                <div class="presetsSelectorBox">
                    <input class="tagInput" id="importTextInputTeam"/>
                </div>
            </div>` : `
            <div class="takeMeToBattleSettingsHolder">
                <div class="characterSearchButton clickable" id="characterSearchButton" onclick="userTriggers.addEnemyToWave(${waveID},${index},false,null,true)">Export Enemy</div>
            </div>`}

            <div class="statFiltersRowHeader">
                &nbsp;
                ${isEdit ? `<div class="deleteEnemyFromWaveButtonBottom clickable" onclick="userTriggers.deleteEnemyFromWave(${waveID},${index})">Delete Enemy</div>` : ""}
                <div class="addEnemyToWaveButtonBottom clickable" onclick="userTriggers.addEnemyToWave(${waveID},${index})">${isEdit ? "Save Edit" : "Add"} to Wave</div>
            </div>
        `;
        if (isEdit) {
            readSelection("addEnemyAttackTypeSelector").value = slotRef.enemyTypeAttack;
            readSelection("addEnemyEnemyTypeSelector").value = slotRef.enemyType;
        }
        userTriggers.updateEnemyAddedMenuUI();

        // copyToClipboard
    },
    createWaveImportsMenu() {
        if (globalUI.queryIsActive) {return;}

        // const isEdit = index != undefined;
        readSelection("blockoutBackgroundShutter").style.display = "flex";
        readSelection("customMenuMainHolderBox").style.display = "flex";
        readSelection("customMenuSearchTitle").innerHTML = `Wave Import`;
        readSelection("customMenuSearchBarBox").style.display = "none";

        readSelection("customMenuSearchNote").innerHTML = `Construct a custom enemy, or select a preset to add an enemy to your selected wave.`;

        const bodyElem = readSelection("customMenuSearchBody");
        // const waveRef = globalRecords.battleSettings[`waveArray${waveID}`];
        // const slotRef = isEdit ? waveRef[index] : null;
        // customMenuSearchBody

        const battleSettings = globalRecords.battleSettings;
        const totalWaves = battleSettings.totalWaves;

        // const weaknessToggleEntries = ["Physical","Fire","Ice","Lightning","Wind", "Quantum","Imaginary"];
        function addWaveExportRows(waveNumber) {
            return `<div class="teamwideImportBox">
                <div class="characterImportBox">
                    <div class="importWaveBoxItemWaveRow">
                        <div class="importWaveWaveName">Wave ${waveNumber}</div>
                        <div class="exportIconBoxHolder clickable" onclick="userTriggers.exportWaveData(${waveNumber})">Export</div>
                        <div class="exportIconBoxHolder clickable" onclick="userTriggers.importWaveData(${waveNumber})">Import</div>
                    </div>
                </div>
            </div>`;
        }

        let waveString = "";
        for (let i=1;i<=totalWaves;i++) {
            waveString += addWaveExportRows(i);
        }


        bodyElem.innerHTML = `
            <div class="teamwideImportBox">
                <div class="teamwideImportHeader">ALL WAVES</div>
                <div class="teamwideImportBoxRow">
                    <div class="exportIconBoxHolder clickable" onclick="userTriggers.exportWaveData('ALL')">Export</div>
                    <div class="exportIconBoxHolder clickable" onclick="userTriggers.importWaveData('ALL')">Import</div>
                </div>
            </div>
            ${waveString}

            <div class="teamwideImportHeader">Import Data</div>
            <div class="customMenuSearchNote">Paste your prior exported WAVE(not single enemy) data below, then click import on either the wave slot it should go in, or the battle-wide import button to assign an array of waves to the battle.</div>

            <div class="statFiltersRowContainer">
                <div class="presetsTitle">INPUT:</div>
                <div class="presetsSelectorBox">
                    <input class="tagInput" id="importTextInputTeam"/>
                </div>
            </div>

            <div class="customMenuSearchNote">Wave Presets are bundles of enemies hardcoded into the site, usually for the purposes of Vash's testing.</div>
            <div class="statisticSettingsRow">
                <div class="statsRowName">Preset:&nbsp;</div>
                <div class="statsRowToggle">
                    <select class="relicStatSelectionSelector" id="addWavePresetsSelector">
                        <option value="Glorp-ard">Glorp-ard</option>
                        <option value="quantumDoggo">Calyx: Destruction</option>
                        <option value="MoX6">MoX: 6</option>
                    </select>
                </div>
            </div>
            <div class="takeMeToBattleSettingsHolder">
                <div class="characterSearchButton clickable" onclick="userTriggers.addWaveApplyPreset()">Apply Preset</div>
            </div>
        `;
        // if (isEdit) {
        //     readSelection("addEnemyAttackTypeSelector").value = slotRef.enemyTypeAttack;
        //     readSelection("addEnemyEnemyTypeSelector").value = slotRef.enemyType;
        // }
        // userTriggers.updateEnemyAddedMenuUI();

        // copyToClipboard
    },
    createCharacterStatScreenBattleLogged(actionIndex) {
        // globalRecords.battleData

        // battleData.battleLog.push({logType: "HitEnemy", hitType: "Single Target", target: enemyPrimary.properName, source:charName, hitData});
        const battleData = globalRecords.battleData;
        let logRef = battleData.battleLog;
        let currentAction = logRef[actionIndex];

        // <div class="${turnData.isEnemy ? "weirdSideSemiCircleThingerEnemy" : "weirdSideSemiCircleThingerAlly"}"></div>
        // weirdSideSemiCircleThingerAlly  weirdSideSemiCircleThingerEnemy
        readSelection("blockoutBackgroundShutter").style.display = "flex";
        readSelection("customMenuMainHolderBox").style.display = "flex";
        readSelection("customMenuSearchTitle").innerHTML = "Stats Snapshot";

        readSelection("customMenuSearchNote").innerHTML = "Please note that these numbers are a SNAPSHOT of the event you expanded. Bonuses or DMG triggered AFTER this event, even as a direct result, are not included and are viewed within their own detail window.";
        readSelection("customMenuSearchBarBox").style.display = "none";

        let statBox = readSelection("customMenuSearchBodyStatsAttackData");
        statBox.style.display = "flex";

        function getStatsAndBuffsDisplay(turnData,TitleName) {
            // console.log(TitleName,turnData)
            let returnString = "";
            let currentBuffsPlayer = turnData.buffsObject;
            returnString += `<div class="buffNameHeaderRow">${TitleName}</div>`;
            // const percentHPRemaining = (turnData.currentHP/turnData.maxHP) * 100;
            // returnString += `
            // <div class="buffNameBreakdownClickerHeaderBoxHEALTHROW">
            //     <div class="healthDisplayFilled" style="width: ${percentHPRemaining}%"></div>
            //     <div class="healthDisplayMissing" style="width: ${100 - percentHPRemaining}%"></div>
            //     <div class="buffShieldHealthValueDisplay">HP: ${turnData.currentHP.toLocaleString()}/${turnData.maxHP.toLocaleString()}</div>
            // </div>`
            let totalPlayerStringer = ``;
            let playerBuffsStringer = `<details class="actionDetailBodyDetailExpandBuffsBox">
                <summary class="actionDetailBodyDetailExpandHeader clickable">Buffs/Debuffs</summary>`;


            for (let buffEntry in currentBuffsPlayer) {
                let currentBuff = currentBuffsPlayer[buffEntry];
                if (!currentBuff) {continue;}
                let buffStringer = "";

                // console.log(currentBuff)
                // shieldRemaining,shieldCap
                // ${currentBuff.isShield ? "<br>[SHIELD] " : ""}

                if (currentBuff.isShield) {

                    // console.log(currentBuff)
                    const currentShield = currentBuff.shieldRemaining;
                    const shieldCap = currentBuff.shieldCap;
                    const percentFilled = currentShield/shieldCap;
                    const percentMissing = 1 - percentFilled;
                    buffStringer += `
                    <details class="actionDetailBodyDetailExpandBuffs" open>
                        <summary class="actionDetailBodyDetailExpandHeaderBackgroundINNER clickable">
                            <div class="buffNameBreakdownClickerHeaderBox">
                                <img src="/HonkaiSR/misc/Icon_Shield.png" class="buffShieldIcon"/>
                                <div class="buffNameBreakdownClickerHeaderBoxBUFFROWOUTER">
                                    <div class="buffNameBreakdownClickerHeaderBoxBUFFROW">
                                        <div class="buffNameBreakdownClickerHeaderBoxBUFFNAME">
                                            ${currentBuff.buffName} ${currentBuff.maxStacks > 1 ? `(${currentBuff.currentStacks})` : ""}
                                        </div>
                                        ${currentBuff.expireType ? `
                                            <div class="buffNameBreakdownClickerHeaderBoxExpireHolder">
                                            ${currentBuff.duration}
                                            <img src="/HonkaiSR/misc/turnIcon.png" class="buffExpireIcon"/>
                                            </div>
                                            ` : ""}
                                    </div>
                                    <div class="buffNameBreakdownClickerHeaderBoxSHIELDROW">
                                        <div class="buffShieldHealthDisplayFilled" style="width: ${percentFilled*100}%"></div>
                                        <div class="buffShieldHealthDisplayMissing" style="width: ${percentMissing*100}%"></div>
                                        <div class="buffShieldHealthValueDisplay">${currentShield.toLocaleString()} / ${shieldCap.toLocaleString()}</div>
                                    </div>
                                </div>
                            </div>
                        </summary>
                    `;
                }
                else {
                    buffStringer += `
                    <details class="actionDetailBodyDetailExpandBuffs" open>
                        <summary class="actionDetailBodyDetailExpandHeaderBackgroundINNER clickable">
                            <div class="buffNameBreakdownClickerHeaderBox">
                                <div class="buffNameBreakdownClickerHeaderBoxBUFFROW">
                                    <div class="buffNameBreakdownClickerHeaderBoxBUFFNAME">
                                        ${currentBuff.buffName} ${currentBuff.maxStacks > 1 ? `(${currentBuff.currentStacks})` : ""}
                                    </div>
                                    ${currentBuff.expireType ? `
                                        <div class="buffNameBreakdownClickerHeaderBoxExpireHolder">
                                        ${currentBuff.duration}
                                        <img src="/HonkaiSR/misc/turnIcon.png" class="buffExpireIcon"/>
                                        </div>
                                        ` : ""}
                                </div>
                            </div>
                        </summary>
                    `;
                }

                // tagSpecific
                buffStringer += `<div class="expandedBuffBodyIndented">`;
                if (currentBuff.stats) {
                    // if (!currentBuff.actionTags) {buffStringer += `<div class="actionDetailBody">Regular Stats:</div>`;}
                    
                    if (currentBuff.actionTags) {
                        let taggerString = `<div class="actionDetailBody">Action Tags: ${currentBuff.actionTags}`

                        taggerString += `</div>`
                        buffStringer += taggerString;
                    }
                    
                    let adjustedStatsObject = {};
                    for (let statEntry of currentBuff.stats) {
                        adjustedStatsObject[statEntry] = currentBuff[statEntry];
                    }
                    buffStringer += customHTML.createAlternatingStatRows(currentBuff.stats,adjustedStatsObject,null,null,true);
                }
                if (currentBuff.statsOnHit) {
                    buffStringer += `<div class="actionDetailBody">On-Hit Stats:</div>`
                    // let displayOrder = Object.keys(currentBuff.statsOnHit);
                    let adjustedStatsObject = {};
                    for (let statEntry of currentBuff.statsOnHit) {
                        adjustedStatsObject[statEntry] = currentBuff[statEntry];
                    }
                    buffStringer += customHTML.createAlternatingStatRows(currentBuff.statsOnHit,adjustedStatsObject,null,null,true);
                }
                if (currentBuff.isFinalMulti) {
                    if (currentBuff.actionTags) {
                        let taggerString = `<div class="actionDetailBody">Action Tags: ${currentBuff.actionTags}</div>`
                        buffStringer += taggerString;
                    }
                    // buffStringer += `<div class="actionDetailBody">Multiplier: x${currentBuff.multiplier}</div>`
                    const multiObject = {Multiplier: currentBuff.multiplier}
                    let displayOrder = Object.keys(multiObject);
                    buffStringer += customHTML.createAlternatingStatRows(displayOrder,{...multiObject},null,null,true);
                }

                buffStringer += `<div class="actionDetailBodyBuffSource">${currentBuff.source}</div>`
                buffStringer += `</div>`;
                
                
                buffStringer += `</details>`;
                playerBuffsStringer += buffStringer;
            }
            playerBuffsStringer += `</details>`;

            let playerStatStringer = `
                <details class="actionDetailBodyDetailExpand">
                    <summary class="actionDetailBodyDetailExpandHeader clickable">Stat Totals (Regular)</summary>
                `;
            // greatTableIndex
            // greatTableKeys
            playerStatStringer += customHTML.createAlternatingStatRows(greatIndexArrayOrder,turnData.statTable,null,null,true);
            playerStatStringer += `</details>`;

            playerStatStringerONHIT = "";
            if (turnData.statTableONHIT) {
                playerStatStringerONHIT = `
                    <details class="actionDetailBodyDetailExpand">
                        <summary class="actionDetailBodyDetailExpandHeader clickable">Stat Totals (ON-HIT)</summary>
                        <div class="actionDetailBody">On-Hit bonuses can apply to DMG when attacking enemies, but do not actually apply to the character.</div>
                    `;
                let testString = customHTML.createAlternatingStatRows(greatIndexArrayOrder,turnData.statTableONHIT,null,null,true);
                playerStatStringerONHIT += testString;
                playerStatStringerONHIT += `</details>`;
                if (testString === "") {playerStatStringerONHIT = "";}
                // console.log(playerStatStringerONHIT)
            }

            const taggers = turnData.tagSpecific;
            let tagSpecificStringer = "";
            if (Object.keys(taggers).length) {
                for (let actionTag of Object.keys(taggers)) {
                    const currentTable = taggers[actionTag];
                    newTagString = `
                    <details class="actionDetailBodyDetailExpand">
                        <summary class="actionDetailBodyDetailExpandHeader clickable">Action-Based: ${actionTag}</summary>
                        <div class="actionDetailBody">Action-based bonuses exist outside the character stat sheet, and apply only to their specifc action types.</div>
                    `;
                    let testString = customHTML.createAlternatingStatRows(greatIndexArrayOrder,currentTable,null,null,true);
                    newTagString += testString;
                    newTagString += `</details>`;
                    if (testString === "") {newTagString = "";}
                    tagSpecificStringer += newTagString;
                }
            }


            let characterSpecificStringer = "";
            for (let enemy in battleData.enemyBasedTurns) {
                const currentEnemy = battleData.enemyBasedTurns[enemy];
                const enemyName = currentEnemy.properName;
                const refChecker = turnData[enemyName];
                let newStringer = "";
                if (refChecker) {
                    newStringer = `
                        <details class="actionDetailBodyDetailExpand">
                            <summary class="actionDetailBodyDetailExpandHeader clickable">Target-Based: ${enemyName}</summary>
                            <div class="actionDetailBody">Target specific bonuses are bonuses that only take effect when the target of an attack/heal is the target listed above.</div>
                        `;
                    let testString = customHTML.createAlternatingStatRows(greatIndexArrayOrder,refChecker,null,null,true);
                    newStringer += testString;
                    newStringer += `</details>`;
                    if (testString === "") {newStringer = "";}
                    // console.log(playerStatStringerONHIT)
                }
                characterSpecificStringer += newStringer;
            }
            for (let ally in battleData.nameBasedTurns) {
                const currentAlly = battleData.nameBasedTurns[ally];
                const allyName = currentAlly.properName;
                const refChecker = turnData[allyName];
                let newStringer = "";
                if (refChecker) {
                    newStringer = `
                        <details class="actionDetailBodyDetailExpand">
                            <summary class="actionDetailBodyDetailExpandHeader clickable">Source-Based: ${allyName}</summary>
                            <div class="actionDetailBody">Source-specific bonuses are bonuses that only take effect when the source of an attack/heal is the name listed above.</div>
                        `;
                    let testString = customHTML.createAlternatingStatRows(greatIndexArrayOrder,refChecker,null,null,true);
                    newStringer += testString;
                    newStringer += `</details>`;
                    if (testString === "") {newStringer = "";}
                    // console.log(playerStatStringerONHIT)
                }
                characterSpecificStringer += newStringer;
            }

            totalPlayerStringer += playerBuffsStringer + playerStatStringer + playerStatStringerONHIT + tagSpecificStringer + characterSpecificStringer;
            returnString += totalPlayerStringer;
            return returnString;
        }

        // console.log(actionIndex,currentAction)
        if (currentAction.logType === "StartTurn") {
            let playerData = JSON.parse(currentAction.turnRef);
            readSelection("customMenuSearchTitle").innerHTML = "Turn Start";

            let sourceString = getStatsAndBuffsDisplay(playerData,playerData.properName);
            statBox.innerHTML += sourceString;
        }
        else if (currentAction.logType === "HitEnemy" || currentAction.logType === "HitAlly") {
            let isEnemy = currentAction.logType === "HitAlly";
            readSelection("customMenuSearchTitle").innerHTML = "Hit Snapshot";
            let hitData = currentAction.hitData;
            // hitData = hitData = {
            //     scalar: ATKObject.scalar,
            //     currentSplit,currentMulti,multiOf,tags,
            //     DMGTotalEnd,DMGTotalCrit,DMGTotalAVG,DMGOverkill,
            //     enemyIsDead,enemyIsBroken,toughnessBase,overBreak,
                // breakerDMG,
            //     playerData: JSON.stringify(currentTurn),
            //     enemyData: JSON.stringify(enemyTurn),
            //     AV:battleData.sumAV
            // }
            let tagString = `<div class="actionDetailBodyCenterTags">`;
            for (let entry of hitData.tags) {
                tagString += `+${entry} `;
            }
            tagString += "</div>";

            //quick note, player and enemy data are relative to who is attacking. If an enemy is attacking a character, they are playerdata here, and the character is enemydata
            let playerData = JSON.parse(hitData.playerData);
            let enemyData = JSON.parse(hitData.enemyData);

            // let hitDataBreakSuper = {
            //     DMGTotalEndBreak,
            //     DMGTotalAVG:DMGTotalEndBreak,DMGOverkill,
            //     tags: newTags,instanceMulti,
            //     playerData: JSON.stringify(sourceTurn),
            //     enemyData: JSON.stringify(targetTurn),
            //     AV:battleData.sumAV
            // }
            // logToBattle(battleData,{logType: "HitEnemy", hitType: superString, target: targetTurn.properName, source:charName, hitData:hitDataBreakSuper,enemyIsDead,sourceString:sourceName});

            const percentHPRemaining = (enemyData.currentHP/enemyData.maxHP) * 100;
            // const shieldRef = hitData.strongestShieldRef ? JSON.parse(hitData.strongestShieldRef) : null;
            // const shieldPercentage = shieldRef ? (shieldRef.shieldRemaining/shieldRef.shieldCap) * 100 : null;
            let shieldString = "";
            const activeShields = enemyData.activeShields;
            let strongestShield = null;
            let shieldPercentage = 0;
            for (let shield in activeShields) {
                const currentShield = activeShields[shield];
                if (!currentShield) {continue;}

                if (!strongestShield) {strongestShield = currentShield;}
                else if (currentShield.shieldRemaining > strongestShield) {strongestShield = currentShield;}
            }
            shieldPercentage = strongestShield ? strongestShield.shieldRemaining/strongestShield.shieldCap : 0;
            shieldString += strongestShield ? `
            <div class="buffNameBreakdownClickerHeaderBoxSHIELDROW">
                <div class="buffShieldHealthDisplayFilled" style="width: ${shieldPercentage*100}%"></div>
                <div class="buffShieldHealthDisplayMissing" style="width: ${100 - (shieldPercentage*100)}%"></div>
                <div class="buffShieldHealthValueDisplay">Shield: ${hitData.DMGTotalAVG.toLocaleString()} lost --> ${strongestShield.shieldRemaining.toLocaleString()}/${strongestShield.shieldCap.toLocaleString()}</div>
            </div>` : "";
            //DMGOverkill,enemyIsDead,

            let toughnessString = "";
            let weaknessString = `<div class="characterDisplayElementWeaknessIconHolderBoxINSPECT">`;
            let enemyPlacementString = "";
            if (!isEnemy) {
                const currentToughness = enemyData.currentToughness;
                const maxToughness = enemyData.maxToughness;
                const toughnessRatio = currentToughness/maxToughness;

                // ${hitData.toughnessBase ? `
                //     <div class="actionDetailBodyCenterTags">Toughness: ${(enemyData.currentToughness + hitData.toughnessBase - (hitData.overBreak ?? 0)).toLocaleString()} --> ${enemyData.currentToughness.toLocaleString()}/${enemyData.maxToughness.toLocaleString()}</div>
                //     `: ""}

                const actualReductionDisplayText = hitData.toughnessBase ? (currentToughness + hitData.toughnessBase - (hitData.overBreak ?? 0)).toLocaleString() + " --> " : "";
                toughnessString += `
                <div class="buffNameBreakdownClickerHeaderBoxTOUGHNESSROW">
                    <div class="buffToughnessHealthDisplayFilled" style="width: ${toughnessRatio*100}%"></div>
                    <div class="buffShieldHealthDisplayMissing" style="width: ${100 - (toughnessRatio*100)}%"></div>
                    <div class="buffToughnessHealthValueDisplay">Toughness: ${actualReductionDisplayText}${currentToughness.toLocaleString()}/${maxToughness.toLocaleString()}</div>
                </div>`;

                const enemyStatTable = enemyData.statTable;
                for (let weaknessType in elementImagePaths) {
                    const currentWeakness = `Weakness${weaknessType}`;
                    if (enemyStatTable[greatTableIndex[currentWeakness]]) {
                        const imagePath = elementImagePaths[weaknessType];
                        weaknessString += `
                        <img src="${imagePath}" class="characterDisplayElementWeaknessIcon"/>`;
                    }
                }

                const currentPosition = currentAction.position;
                const positionOf = currentAction.positionCount;
                enemyPlacementString += `<div class="characterDisplayEnemyLineupBarHeader">Enemy Lineup Position:</div><div class="characterDisplayEnemyLineupBar">`;
                for (let i=0;i<positionOf;i++) {
                    if (i===currentPosition) {
                        enemyPlacementString += `<div class="characterDisplayEnemyLineupCircleFill"></div>`;
                    }
                    else {
                        enemyPlacementString += `<div class="characterDisplayEnemyLineupCircleEmpty"></div>`;
                    }
                }
                enemyPlacementString += "</div>";
                // enemyPlacementString
                // positionCount,position
            }
            weaknessString += "</div>";

            const breakString = currentAction.hitType === "SuperBreak" || currentAction.hitType === "Break" ? `
            <div class="totalHealingBoxBreakdownRows">
                ${hitData.instanceMulti ? `<div class="totalHealingBoxHalfBreakdownRows hasHoverTooltip">
                    <div class="totalHealingHeader">Instance</div>
                    <div class="totalHealingValueBoss">${(hitData.instanceMulti * 100).toLocaleString() }%</div>
                </div>` : ""}
                
                ${hitData.finalMulti > 1 ? `
                    <div class="totalHealingBoxHalfBreakdownRows hasHoverTooltip">
                        <div class="totalHealingHeader">Final Multi</div>
                        <div class="totalHealingValueBoss">${(hitData.finalMulti * 100).toLocaleString()}%</div>
                    </div>` : ""}
                ${currentAction.hitType === "SuperBreak" ? `
                <div class="totalHealingBoxHalfBreakdownRows hasHoverTooltip">
                    <div class="totalHealingHeader">Reduction</div>
                    <div class="totalHealingValueBoss">${hitData.rawReduction.toLocaleString()}</div>
                </div>` : ""}
                <div class="totalHealingBoxHalfBreakdownRows hasHoverTooltip">
                    <div class="totalHealingHeader">DMG/Hit</div>
                    <div class="totalHealingValueBoss">${hitData.DMGTotalEndBreak.toLocaleString()}</div>
                </div>
            </div>` : "";

            // let hitData = {
            //     scalar,
            //     currentMulti,multiOf,detonateMulti,tags,element,
            //     DMGTotalEnd,DMGTotalAVG,DMGOverkill,averaged,
            //     enemyIsDead,
            //     playerData: logger ? JSON.stringify(sourceTurn) : null,
            //     enemyData: logger ? JSON.stringify(targetTurn) : null,
            //     AV:battleData.sumAV
            // }
            // DMGTotalEnd,DMGTotalAVG,DMGOverkill,averaged
            const dotString = currentAction.hitType === "DOT" ? `
            <div class="actionDetailBodyCenterTags">${hitData.buffName}</div>
            <div class="totalHealingBoxBreakdownRows">
                ${hitData.isBreakDOT ? `` : `
                <div class="totalHealingBoxHalfBreakdownRows hasHoverTooltip">
                    <div class="totalHealingHeader">${hitData.scalar}</div>
                    <div class="totalHealingValueBoss">${hitData.multiOf.toLocaleString()}</div>
                </div>`}
                ${hitData.isBreakDOT ? `
                    <div class="totalHealingBoxHalfBreakdownRows hasHoverTooltip">
                    <div class="totalHealingHeader">Base DMG</div>
                    <div class="totalHealingValueBoss">${hitData.currentMulti.toLocaleString()}</div>
                </div>` : `
                <div class="totalHealingBoxHalfBreakdownRows hasHoverTooltip">
                    <div class="totalHealingHeader">Source Multi</div>
                    <div class="totalHealingValueBoss">${(hitData.currentMulti * 100).toLocaleString()}%</div>
                </div>`}
                ${hitData.finalMulti > 1 ? `
                <div class="totalHealingBoxHalfBreakdownRows hasHoverTooltip">
                    <div class="totalHealingHeader">Final Multi</div>
                    <div class="totalHealingValueBoss">${(hitData.finalMulti * 100).toLocaleString()}%</div>
                </div>` : ""}
                ${hitData.detonateMulti != 1 ? `
                    <div class="totalHealingBoxHalfBreakdownRows hasHoverTooltip">
                        <div class="totalHealingHeader">Detonate Multi</div>
                        <div class="totalHealingValueBoss">${(hitData.detonateMulti * 100).toLocaleString()}%</div>
                    </div>
                    `: ""}
                <div class="totalHealingBoxHalfBreakdownRows hasHoverTooltip">
                    <div class="totalHealingHeader">DMG/Proc</div>
                    <div class="totalHealingValueBoss">${hitData.DMGTotalEnd.toLocaleString()}</div>
                </div>
                <div class="totalHealingBoxHalfBreakdownRows hasHoverTooltip">
                    <div class="totalHealingHeader">AVG/Proc</div>
                    <div class="totalHealingValueBoss">${hitData.DMGTotalAVG.toLocaleString()}</div>
                </div>
                <div class="totalHealingBoxHalfBreakdownRows hasHoverTooltip">
                    <div class="totalHealingHeader">AVG by Chance</div>
                    <div class="totalHealingValueBoss">${(hitData.averaged*100).toLocaleString()}%</div>
                </div>
            </div>` : "";
            const trueString = currentAction.hitType === "True" ? `
            <div class="totalHealingBoxBreakdownRows">
                <div class="totalHealingBoxHalfBreakdownRows hasHoverTooltip">
                    <div class="totalHealingHeader">True Multi</div>
                    <div class="totalHealingValueBoss">${(hitData.currentMulti * 100).toLocaleString()}%</div>
                </div>
                ${hitData.DMGTotalEnd ? `<div class="totalHealingBoxHalfBreakdownRows hasHoverTooltip">
                    <div class="totalHealingHeader">DMG/Hit</div>
                    <div class="totalHealingValueBoss">${hitData.DMGTotalEnd.toLocaleString()}</div>
                </div>` : ""}
                ${hitData.DMGTotalCrit ? `<div class="totalHealingBoxHalfBreakdownRows hasHoverTooltip">
                    <div class="totalHealingHeader">DMG/Crit</div>
                    <div class="totalHealingValueBoss">${hitData.DMGTotalCrit.toLocaleString()}</div>
                </div>` : ""}
                ${hitData.DMGTotalAVG ? `<div class="totalHealingBoxHalfBreakdownRows hasHoverTooltip">
                    <div class="totalHealingHeader">AVG/Hit</div>
                    <div class="totalHealingValueBoss">${hitData.DMGTotalAVG.toLocaleString()}</div>
                </div>` : ""}
            </div>` : "";

            const standardCheck = breakString === "" && dotString === "" && trueString === "";
            // multiOf

            // bonusDMGCustom,bonudDMGCustomRefName,bonusDMGMulti,bonusDMGScalar,
            const standardString = standardCheck ? `
            <div class="totalHealingBoxBreakdownRows">
                <div class="totalHealingBoxHalfBreakdownRows hasHoverTooltip">
                    <div class="totalHealingHeader">${hitData.scalar}</div>
                    <div class="totalHealingValueBoss">${hitData.multiOf.toLocaleString()}</div>
                </div>
                ${hitData.bonusDMGCustom ? `
                    <div class="totalHealingBoxHalfBreakdownRows hasHoverTooltip">
                        <div class="totalHealingHeader">${hitData.bonudDMGCustomRefName ?? "No ref given"}</div>
                        <div class="totalHealingValueBoss">${(hitData.bonusDMGScalar).toLocaleString() ?? 0}</div>
                    </div>
                    <div class="totalHealingBoxHalfBreakdownRows hasHoverTooltip">
                        <div class="totalHealingHeader">${hitData.bonudDMGCustomRefName ?? "No ref given"} Multi</div>
                        <div class="totalHealingValueBoss">${(hitData.bonusDMGMulti * 100).toLocaleString() ?? 0}%</div>
                    </div>` : ""}
                ${hitData.currentSplit ? `<div class="totalHealingBoxHalfBreakdownRows hasHoverTooltip">
                    <div class="totalHealingHeader">Split</div>
                    <div class="totalHealingValueBoss">${(hitData.currentSplit * 100).toLocaleString()}%</div>
                </div>` : ""}
                
                <div class="totalHealingBoxHalfBreakdownRows hasHoverTooltip">
                    <div class="totalHealingHeader">Multi</div>
                    <div class="totalHealingValueBoss">${(hitData.currentMulti * 100).toLocaleString()}%</div>
                </div>
                ${hitData.finalMulti > 1 ? `
                    <div class="totalHealingBoxHalfBreakdownRows hasHoverTooltip">
                        <div class="totalHealingHeader">Final Multi</div>
                        <div class="totalHealingValueBoss">${(hitData.finalMulti * 100).toLocaleString()}%</div>
                    </div>` : ""}
                <div class="totalHealingBoxHalfBreakdownRows hasHoverTooltip">
                    <div class="totalHealingHeader">DMG/Hit</div>
                    <div class="totalHealingValueBoss">${hitData.DMGTotalEnd.toLocaleString()}</div>
                </div>
                <div class="totalHealingBoxHalfBreakdownRows hasHoverTooltip">
                    <div class="totalHealingHeader">DMG/Crit</div>
                    <div class="totalHealingValueBoss">${hitData.DMGTotalCrit.toLocaleString()}</div>
                </div>
                <div class="totalHealingBoxHalfBreakdownRows hasHoverTooltip">
                    <div class="totalHealingHeader">AVG/Hit</div>
                    <div class="totalHealingValueBoss">${hitData.DMGTotalAVG.toLocaleString()}</div>
                </div>
            </div>` : "";



            // DOT
            
            if (dotString != "") {hitData.shieldOverflow = hitData.DMGTotalAVG}
            statBox.innerHTML = `
                <div class="buffNameHeaderRow">DMG Overview</div>
                ${breakString}
                ${dotString}
                ${trueString}
                ${standardString}
                ${hitData.isBreakDOT ? "" : tagString}
                ${hitData.shieldOverflow>0 && hitData.shieldOverflow != hitData.DMGTotalAVG ? `<div class="actionDetailBodyCenterTags">Target shields were broken by this DMG</div>` : ""}

                ${hitData.enemyIsDead ? `<div class="actionDetailBodyCenterTags">Target was killed by this DMG</div>` : ""}
                
                ${toughnessString}
                ${shieldString}
                <div class="buffNameBreakdownClickerHeaderBoxHEALTHROW">
                    <div class="healthDisplayFilled" style="width: ${percentHPRemaining}%"></div>
                    <div class="healthDisplayMissing" style="width: ${100 - percentHPRemaining}%"></div>
                    <div class="buffShieldHealthValueDisplay">HP: ${(hitData.DMGOverkill === hitData.DMGTotalAVG ? 0 : hitData.shieldOverflow ?? hitData.DMGTotalAVG).toLocaleString()} lost --> ${enemyData.currentHP.toLocaleString()}/${enemyData.maxHP.toLocaleString()}</div>
                </div>
                ${hitData.DMGOverkill ? `
                <div class="totalHealingBoxBreakdownRows">
                    <div class="totalHealingBoxHalfBreakdownRows hasHoverTooltip">
                        <div class="totalHealingHeader">Overkill</div>
                        <div class="totalHealingValueBoss">${hitData.DMGOverkill.toLocaleString()}</div>
                    </div>
                </div>
                ` : ""}
                ${weaknessString}
                ${enemyPlacementString}
                ${hitData.enemyIsBroken ? `<div class="actionDetailBodyCenterTags">Enemy was weakness broken by this DMG</div>` : ""}
                ${hitData.breakerDMG ? `<div class="actionDetailBodyCenterTags">Break DMG: ${hitData.breakerDMG.DMGTotalEndBreak.toLocaleString()}</div>` : ""}
                `;

            let sourceString = getStatsAndBuffsDisplay(playerData,playerData.properName);
            let targetString = getStatsAndBuffsDisplay(enemyData,enemyData.properName);
            statBox.innerHTML += sourceString + targetString;
        }
        else if (currentAction.logType === "HealAlly") {
            let isEnemy = false;//currentAction.logType === "HitAlly";
            readSelection("customMenuSearchTitle").innerHTML = "Heal Snapshot";
            let hitData = currentAction.hitData;
            // let hitData = {
            //     scalar,percent,flat,
            //     totalHealed,actualHeal,overHeal,
            //     sourceData: JSON.stringify(sourceTurn),
            //     targetData: JSON.stringify(targetTurn),
            //     AV:battleData.sumAV
            // }

            //quick note, player and enemy data are relative to who is attacking. If an enemy is attacking a character, they are playerdata here, and the character is enemydata
            let playerData = JSON.parse(hitData.sourceData);
            let targetData = JSON.parse(hitData.targetData);

            //DMGOverkill,enemyIsDead,
            statBox.innerHTML = `
                <div class="buffNameHeaderRow">DMG Overview</div>
                
                <div class="totalHealingBoxBreakdownRows">
                    ${hitData.scalar ? `
                        <div class="totalHealingBoxHalfBreakdownRows attributeRowStarterWeapons hasHoverTooltip">
                        <div class="totalHealingHeader" style="border:none;">${hitData.scalar}</div>
                        <div class="totalHealingValueBoss">${hitData.scalarSUM.toLocaleString()}</div>
                    </div>` : ""}
                    ${hitData.percent ? `
                        <div class="totalHealingBoxHalfBreakdownRows hasHoverTooltip">
                        <div class="totalHealingHeader">%</div>
                        <div class="totalHealingValueBoss">${(hitData.percent * 100).toLocaleString()}%</div>
                    </div>` : ""}
                    ${hitData.flat ? `
                        <div class="totalHealingBoxHalfBreakdownRows hasHoverTooltip">
                        <div class="totalHealingHeader">Flat</div>
                        <div class="totalHealingValueBoss">${hitData.flat.toLocaleString()}</div>
                    </div>` : ""}
                    <div class="totalHealingBoxHalfBreakdownRows hasHoverTooltip">
                        <div class="totalHealingHeader">Bonus: Out</div>
                        <div class="totalHealingValueBoss">${(playerData.statTable[HealingOutgoing] * 100).toLocaleString()}%</div>
                    </div>
                    <div class="totalHealingBoxHalfBreakdownRows hasHoverTooltip">
                        <div class="totalHealingHeader">Bonus: In</div>
                        <div class="totalHealingValueBoss">${(targetData.statTable[HealingIncoming] * 100).toLocaleString()}%</div>
                    </div>
                    <div class="totalHealingBoxHalfBreakdownRows hasHoverTooltip">
                        <div class="totalHealingHeader">Total</div>
                        <div class="totalHealingValueBoss">${hitData.totalHealed.toLocaleString()}</div>
                    </div>
                </div>
                <div class="actionDetailBodyCenterTags">HP ${(targetData.currentHP - hitData.actualHeal).toLocaleString()} --> ${targetData.currentHP.toLocaleString()}/${targetData.maxHP.toLocaleString()}</div>
                ${hitData.overHeal ? `
                <div class="totalHealingBoxBreakdownRows">
                    <div class="totalHealingBoxHalfBreakdownRows hasHoverTooltip">
                        <div class="totalHealingHeader">Overheal</div>
                        <div class="totalHealingValueBoss">${hitData.overHeal.toLocaleString()}</div>
                    </div>
                </div>
                ` : ""}
                `;

            let sourceString = getStatsAndBuffsDisplay(playerData,"Source");
            let targetString = getStatsAndBuffsDisplay(targetData,"Target");
            statBox.innerHTML += sourceString + targetString;
        }


    },
    //for actually reading and updating things inside the individual piece menus, technically should go inside userTriggers to be consistent but w/e
    // updateSelectedRelicStatsNew(false,'${part}','Main','${mainKey}')
    updateSelectedRelicStatsNew(isSilent,part,mainOrSub,keyToInherit) {
        let currentSlot = `char${globalUI.currentCharacterDisplayed}`;
        let charSlot = currentSlot;
        let depositRef = globalRecords.character[currentSlot];

        const refString = `${part}${mainOrSub}`;
        depositRef[refString] = keyToInherit;

        customMenu.createRelicDetailMenu(part);
        if (!isSilent) {
            userTriggers.updateSelectedRelicStats();
            userTriggers.updateCharacterUI(updateFormulas(charSlot),+globalUI.currentCharacterDisplayed);
        }
    },
    updateSelectedRelicStats(isSilent) {
        if (globalUI.queryIsActive) {return;}//do NOT allow modifications while a query is running, I am not confident that I've handled things properly enough yet for that
        // globalUI.currentSearchOpen = part;
        // globalUI.currentSearchVolume = relics[part]; 

        let part = globalUI.currentSearchOpen;
        let currentSlot = `char${globalUI.currentCharacterDisplayed}`;
        let charSlot = currentSlot;
        let depositRef = globalRecords.character[currentSlot];


        const nameConversions = userTriggers.relicSlotNameConversions;
        let mainStatRef = relics[nameConversions[part]].mainAffix;
        let subStatRef = relics.Head.subAffix;
        let mainStatKeys = Object.keys(mainStatRef);
        let subStatKeys = Object.keys(subStatRef);

        let warningMessage = readSelection("relicStatWindowWarningMessage");
        warningMessage.innerHTML = "";//clear warning message
        let dupeSub = "ERROR: DUPLICATE SUBSTATS FOUND<br>";
        let dupeMain = "ERROR: Substats cannot match the mainstat of a piece.<br>Ex: ATK% body can have ATK flat, but not ATK% in the subs.<br>";

        function getClosestSTatStep(input, options) {
            let higherOrEqual = options.filter(n => n >= input);
            
            if (higherOrEqual.length === 0) return options[options.length-1];
            
            return Math.min(...higherOrEqual);
        }

        // basicShorthand.findStatObject();

        // for (let mainKey of mainStatKeys) {
        //     mainOptionsString += `<option value="${mainKey}">${basicShorthand.findStatObject(mainKey).sets[mainKey].display}</option>`
        // }
        let subStrings = [
            {"array": -1,"value": depositRef[`${part}Main`],"name": "Main","string": "","keys": mainStatKeys,"ref": mainStatRef},
            {"array": 0,"value": depositRef[`${part}1Stat`],"name": `${part}1Value`,"string": "","keys": subStatKeys,"ref": subStatRef},
            {"array": 1,"value": depositRef[`${part}2Stat`],"name": `${part}2Value`,"string": "","keys": subStatKeys,"ref": subStatRef},
            {"array": 2,"value": depositRef[`${part}3Stat`],"name": `${part}3Value`,"string": "","keys": subStatKeys,"ref": subStatRef},
            {"array": 3,"value": depositRef[`${part}4Stat`],"name": `${part}4Value`,"string": "","keys": subStatKeys,"ref": subStatRef},
        ];//dunno why I bothered making this an object earlier
        // ["Head","Hands","Body","Feet","Sphere","Rope"]

        let volumeKeys = Object.keys(globalUI.currentSearchVolume).sort();
        let resultString = "";
        let currentInput = (readSelection("customMenuSearchBarInput").value).toString().toLowerCase();


        depositRef.stats = {};//clear stats object
        depositRef.order = [];
        let subCounter = 0;
        let currentCounter = 0;

        let dupeSubFound = false;
        let mainstatConflict = false;
        for (let entry of subStrings) {
            if (entry.name === "Main") {continue;}
            currentCounter++;
            const elementRefName = `relicStatSelectionSelector${currentCounter >= 0 ? `Sub${currentCounter}` : entry.name}`;
            let selectorRef = readSelection(elementRefName);
            let valueSelector = entry.name != "Main" ? readSelection(`relicStatSelectionSelector${currentCounter >= 0 ? `Sub${currentCounter}` : entry.name}Input`) : null;
            

            let currentStatName = selectorRef.value;
            let mainName = subStrings[0].value;
            

            if (entry.name === "Main") {
                depositRef[`${part}Main`] = currentStatName;
                // for (let i=1;i<=4;i++) {
                //     if (readSelection(`relicStatSelectionSelectorSub${i}`).value === currentStatName) {warningMessage.innerHTML += dupeMain;break;}
                // }
            }
            else {
                subCounter += 1;
                // for (let i=1;i<=4;i++) {
                //     if (readSelection(`relicStatSelectionSelectorSub${i}`).value === currentStatName && i-1 != entry.array) {dupeSubFound = true;break;}
                // }

                depositRef[`${part}${subCounter}Stat`] = currentStatName;

                const indexValue = greatTableIndex[currentStatName];
                const statFamily = basicShorthand.findStatObject(indexValue);

                const unit = statFamily.sets[indexValue].unit;
                const isPercent = unit === "%";

                let subs = subStatRef[currentStatName];

                const floorValue = subs.bounds[0];
                const ceilingValue = subs.bounds[1];
                const initialStepValue = subs.step;
                const maxSteps = subs.stepsPossible;
                const baseValue = subs.base;

                valueSelector.min = +(floorValue * (isPercent ? 100 : 1)).toFixed(7);
                valueSelector.max = +(ceilingValue * (isPercent ? 100 : 1)).toFixed(7);
                valueSelector.step = currentStatName === "SPDFlat" ? 0.1 : +(initialStepValue * (isPercent ? 100 : 1)).toFixed(7);//we can enforce steps on anything BUT speed, explained more a bit lower here

                const boundsCheckValue = +(+valueSelector.value/(isPercent ? 100 : 1)).toFixed(7)
                if (boundsCheckValue < floorValue) {
                    valueSelector.value = +(floorValue * (isPercent ? 100 : 1)).toFixed(7);
                }//for when we switch from like, 3% crit to SPD, so we don't accidentally keep 0.03 speed lmao, and actually swap to the minimum
                if (boundsCheckValue > ceilingValue) {
                    valueSelector.value = +(ceilingValue * (isPercent ? 100 : 1)).toFixed(7);
                }//for when we switch from like, 3% crit to SPD, so we don't accidentally keep 0.03 speed lmao, and actually swap to the minimum
                if (currentStatName != "SPDFlat" && subs.stepRatio === 8) {
                    let options = [baseValue];
                    
                    //the first 2 steps, and then the 8 steps that make up base, time 5 the max possible rolls on a single stat
                    let StepsLeft = (maxSteps + subs.stepRatio)*5 + maxSteps;
                    let step = initialStepValue

                    for (let i=StepsLeft;i>=0;i--) {
                        let flipped = StepsLeft-i;
                        options.push(+(baseValue + step*flipped).toFixed(7));
                    }
                    // console.log(options)
                    //the whole point of that shit was just to make it so if someone inputs DEF flat as 19 on their substat, then the calc will autocorrect it to 19.051896 as that's the only thing it could be if 19 was entered
                    //AKA: it's a way to derive the real decimal value of a given statistic without needing access to relic API fuckery
                    //THAT SAID, it DOES NOT WORK ON SPEED, speed shows no decimals, and the steps are 0.3 which means you could have multiple steps appear within the bounds of 1 speed, and that fuckin sucks

                    // console.log(valueSelector.value)

                    // console.log(+valueSelector.value/(isPercent ? 100 : 1))
                    const adjustedValue = +(+valueSelector.value/(isPercent ? 100 : 1)).toFixed(7)
                    const closestValue = +getClosestSTatStep(adjustedValue,options);
                    valueSelector.value = +(closestValue * (isPercent ? 100 : 1)).toFixed(7);
                    

                    // "base": 0.03456,
                    // "step": 0.00432,
                    // "stepsPossible": 2,
                    // "stepRatio": 8,
                    // "bounds": [
                    //     0.03456,
                    //     0.2592
                    // ]
                }

                depositRef[`${part}${subCounter}Value`] = +(+valueSelector.value /(isPercent ? 100 : 1)).toFixed(7);
            }

        }

        const currentPartMainstat = depositRef[`${part}Main`];
        for (let i=1;i<=4;i++) {
            const currentStatName = readSelection(`relicStatSelectionSelectorSub${i}`).value;
            for (let z=i+1;z<=4;z++) {
                if (readSelection(`relicStatSelectionSelectorSub${z}`).value === currentStatName) {dupeSubFound = true;}
            }
            if (readSelection(`relicStatSelectionSelectorSub${i}`).value === currentPartMainstat) {mainstatConflict = true;}
        }


        if (dupeSubFound) {warningMessage.innerHTML += dupeSub;}
        if (mainstatConflict) {warningMessage.innerHTML += dupeMain;}

        if (!isSilent) {
            customMenu.createRelicDetailMenu(part);
            customMenu.updateSelectedRelicStats(true);//this one is obv for the edit menu
            userTriggers.updateSelectedRelicStats();//this is for the relic page boxes, not the edit menu
            
            userTriggers.updateCharacterUI(updateFormulas(charSlot),+globalUI.currentCharacterDisplayed);
        }
    },
    updateSearchResults() {
        if (globalUI.queryIsActive) {return;}//do NOT allow modifications while a query is running, I am not confident that I've handled things properly enough yet for that
        let currentSlot = `char${globalUI.currentCharacterDisplayed}`;
        let currentPathCharacter = characters[globalRecords.character[currentSlot].name].path;

        let volumeKeys = Object.keys(globalUI.currentSearchVolume).sort();
        let resultString = "";
        let currentInput = (readSelection("customMenuSearchBarInput").value).toString().toLowerCase();

        function raritySort(a, b) {
            if (a.rarity !== b.rarity) {
                return b.rarity - a.rarity;//rarity first
            }
            return a.name.localeCompare(b.name);//then name
        }
        function regSort(a, b) {return a.name.localeCompare(b.name);}
        function getPathDivider(pathName) {
            return `
                <div class="characterDisplayPathAndNameBox">
                    <div class="characterDisplayPathImageBox">
                        <img src="${pathImagePaths[pathName].small}" class="characterDisplayPathImage"/>
                    </div>
                    <div class="characterDisplayPathNameBox">${pathName}</div>
                </div>
                `
        }

        if (globalUI.currentSearchOpen === "characters") {
            let pathsObject = {};
            // pathImagePaths
            for (let charEntry of volumeKeys) {
                let currentCharacterEntry = characters[charEntry];
                let currentPath = currentCharacterEntry.path;
                if (!pathsObject[currentPath]) {pathsObject[currentPath] = [];}//only make a new entry when it doesn't exist yet
                //skip any char name, path, or element that does NOT contain our search, and forced lowercase just to avoid headaches
                let fuzzy = currentCharacterEntry.name.toLowerCase().includes(currentInput) || currentCharacterEntry.path.toLowerCase().includes(currentInput) || currentCharacterEntry.element.toLowerCase().includes(currentInput);
                if (!fuzzy && currentInput != "" || !turnLogic[currentCharacterEntry.name]) {continue;}
                //TODO: remove the logic check later

                pathsObject[currentPath].push(currentCharacterEntry);
            }

            for (let pathKey of Object.keys(pathsObject)) {pathsObject[pathKey].sort(raritySort);}//sort rarity -> name

            function getResultStringForCharacterPath(array) {
                let returnString = "";
                for (let result of array) {
                    let stringCustom = `
                        <div class="customMenuResultRowBox clickable" onclick="customMenu.closeMenu();userTriggers.updateSelectedCharacter(\`${result.name}\`)">
                            <div class="customMenuResultRowIcon">
                                <img src="/HonkaiSR/${result.icon}" class="customMenuResultImgRounded" style="border: 2px solid ${customMenu.rarityColors[result.rarity]};"/>
                            </div>
                            <div class="customMenuResultBodyBox">

                                <div class="characterDisplayNameAndElement">
                                    <div class="characterDisplayNameBox">${result.name}</div>
                                    <div class="characterDisplayElementBox">
                                        <img src="${elementImagePaths[result.element]}" class="characterDisplayElement"/>
                                    </div>
                                </div>

                                ${turnLogic[result.name] ? "" : `<div class="characterDisplayNameAndElementItemNotAdded">Not added yet</div>`}

                            </div>
                        </div>
                    `
                    returnString += stringCustom;
                }
                return returnString;
            }


            for (let pathKey of Object.keys(pathsObject)) {
                let currentArray = pathsObject[pathKey];
                if (currentArray.length) {resultString += getPathDivider(pathKey) + getResultStringForCharacterPath(currentArray)}

            }
        }
        else if (globalUI.currentSearchOpen === "lightcones") {
            let currentPathResults = [];
            let otherResults = [];

            for (let lcEntry of volumeKeys) {
                let currentLightcone = lightcones[lcEntry];
                //skip any lc name or desc that does NOT contain our search, and forced lowercase just to avoid headaches
                let fuzzy = currentLightcone.name.toLowerCase().includes(currentInput) || currentLightcone.desc.toLowerCase().includes(currentInput);
                // if (!fuzzy && currentInput != "" || !turnLogicLightcones[currentLightcone.name]) {continue;}
                if (!fuzzy && currentInput != "") {continue;}
                if (currentLightcone.path === currentPathCharacter) {currentPathResults.push(currentLightcone);}
                else {otherResults.push(currentLightcone);}
            }

            

            currentPathResults.sort(raritySort);
            otherResults.sort(raritySort);

            function fuckyCutoffFix(snippet) {
                const lastOpen = snippet.lastIndexOf("<");
                const lastClose = snippet.lastIndexOf(">");
                
                //if we see a <> that is incomplete, and our desc trimming left it open, we need to remove the unfinished tab
                if (lastOpen > lastClose) {snippet = snippet.slice(0, lastOpen) + "...";}
                
                return snippet;
            }

            function getResultStringForLightconeSet(array) {
                let returnString = "";
                for (let result of array) {
                    //get the desc colors fixed, and parameters inserted for the blank values
                    let cleanDesc = pagePopulation.cleanDescription(result.params[0],result.desc);
                    //then limit the description to x characters, I don't see a point in showing the whole thing on a selection
                    let cleanDescTrim = fuckyCutoffFix(cleanDesc.length > 150 ? cleanDesc.slice(0, 150) + "..." : cleanDesc);
                    let stringCustom = `
                        <div class="customMenuResultRowBox clickable" onclick="customMenu.closeMenu();userTriggers.updateSelectedLightcone(\`${result.name}\`)">
                            <div class="customMenuResultRowIcon">
                                <img src="/HonkaiSR/${result.icon}" class="customMenuResultImgRounded" style="border: 2px solid ${customMenu.rarityColors[result.rarity]};"/>
                            </div>
                            <div class="customMenuResultBodyBox">
                                <div class="customMenuResultBodyTitle">${result.name}</div>
                                <div class="customMenuResultBodyDesc">${cleanDescTrim}</div>
                                ${turnLogicLightcones[result.name] ? "" : `<div class="characterDisplayNameAndElementItemNotAdded">Not added yet</div>`}
                            </div>
                        </div>
                    `
                    returnString += stringCustom;
                }
                return returnString;
            }


            let currentPathDivider = getPathDivider(currentPathCharacter);
            let otherPathsDivider = `
                <div class="characterDisplayPathAndNameBox">
                    <div class="characterDisplayPathNameBox">Other Paths</div>
                </div>
                `
            if (currentPathResults.length) {resultString += currentPathDivider + getResultStringForLightconeSet(currentPathResults);}
            if (otherResults.length) {resultString += otherPathsDivider + getResultStringForLightconeSet(otherResults);}
        }
        else if (globalUI.currentSearchOpen.toLowerCase().includes("relics") || globalUI.currentSearchOpen.toLowerCase().includes("planar")) {
            let otherResults = [];

            for (let setEntry of volumeKeys) {
                let currentSet = relicSets[setEntry];
                currentSet.name = setEntry;//I technically don't put the name as an attribute on set effect, it's the very key itself, but I want to sort still so we need this.
                let joinedDesc = currentSet.desc[0] + (currentSet.desc.length > 1 ? currentSet.desc[1] : "");//wanna search 2pc and 4pc at once, if applicable 

                //skip any relic name or desc that does NOT contain our search, and forced lowercase just to avoid headaches
                let fuzzy = setEntry.toLowerCase().includes(currentInput) || joinedDesc.toLowerCase().includes(currentInput);
                if (!fuzzy && currentInput != "") {continue;}

                //skip reg relics on a planar search, and skip planars on a relic search, bc planars never have more than one description length should be 1(hopefully, unless I screwed up parsing)
                if (globalUI.currentSearchOpen === "Planar" && currentSet.desc.length === 2) {continue;}
                else if (globalUI.currentSearchOpen != "Planar" && currentSet.desc.length === 1) {continue;}

                otherResults.push(currentSet);
            }

            otherResults.sort(regSort);

            function fuckyCutoffFix(snippet) {
                const lastOpen = snippet.lastIndexOf("<");
                const lastClose = snippet.lastIndexOf(">");
                
                //if we see a <> that is incomplete, and our desc trimming left it open, we need to remove the unfinished tab lest it fuck us (visually)
                if (lastOpen > lastClose) {snippet = snippet.slice(0, lastOpen) + "...";}
                
                return snippet;
            }

            function getResultStringForLightconeSet(array) {
                let returnString = "";
                for (let result of array) {
                    //get the desc colors fixed, and parameters inserted for the blank values
                    let cleanDesc = pagePopulation.cleanDescription(result.params[0],result.desc[0]) + (result.desc.length>1 ? "<br>" + pagePopulation.cleanDescription(result.params[1],result.desc[1]) : "");
                    //then limit the description to x characters, I don't see a point in showing the whole thing on a selection
                    let cleanDescTrim = fuckyCutoffFix(cleanDesc.length > 150 ? cleanDesc.slice(0, 150) + "..." : cleanDesc);
                    let stringCustom = `
                        <div class="customMenuResultRowBox clickable" onclick="customMenu.closeMenu();userTriggers.updateSelectedRelicSet('${globalUI.currentSearchOpen}',\`${result.name}\`)">
                            <div class="customMenuResultRowIcon">
                                <img src="/HonkaiSR/${result.icon}" class="customMenuResultImgRounded" style="border: 2px solid ${customMenu.rarityColors[5]};"/>
                            </div>
                            <div class="customMenuResultBodyBox">
                                <div class="customMenuResultBodyTitle">${result.name}</div>
                                <div class="customMenuResultBodyDesc">${cleanDescTrim}</div>
                                ${turnLogicRelics[result.name] ? "" : `<div class="characterDisplayNameAndElementItemNotAdded">Not added yet</div>`}
                            </div>
                        </div>
                    `;
                    returnString += stringCustom;
                }
                return returnString;
            }

            if (otherResults.length) {resultString += getResultStringForLightconeSet(otherResults);}
        }

        

        readSelection("customMenuSearchBody").innerHTML = resultString;
    },
    moveHorizontalScroller(e) {

    },
    insertLogActions(log) {
        let scrollerBox = readSelection("actionLogScrollerVertical");
        scrollerBox.innerHTML = "";
        let actionIndex = 0;
        let addedDefaultIndex = false;
    
        for (let action of log) {
            const isEvent = action.eventOverrideImage;

            if (action.logType === "EndCycle") {scrollerBox.innerHTML += `<div class="cycleEndBar">End Cycle -- ${action.cycle} --<div class="weirdSideSemiCircleThinger"></div></div>`;}
            else if (action.logType === "StartBattle"){scrollerBox.innerHTML += `<div class="cycleEndBar">Battle Start<div class="weirdSideSemiCircleThinger"></div></div>`;}

            if (action.logType === "CycleAVReset"){scrollerBox.innerHTML += `<div class="cycleEndBar">Cycle ${action.currentCycle} AV Reset<div class="weirdSideSemiCircleThinger"></div></div>`;}
            if (action.logType === "TurnOrderReset"){scrollerBox.innerHTML += `<div class="cycleEndBar">Turn Order Reset<div class="weirdSideSemiCircleThinger"></div></div>`;}
            // logToBattle(battleData,{logType: "CycleAVReset",AV:battleData.sumAV,waveID: waveID,currentCycle: battleData.currentCycle});
            // logToBattle(battleData,{logType: "TurnOrderReset",AV:battleData.sumAV,waveID: waveID,currentCycle: battleData.currentCycle});
    
            if (action.logType === "BattlePrep"){scrollerBox.innerHTML += `<div class="cycleEndBar clickable hoverOpacity" onclick="userTriggers.expandBattleLog(${actionIndex})">Battle Prep<div class="weirdSideSemiCircleThinger"></div></div>`;}
            if (action.logType === "BattleSettings"){scrollerBox.innerHTML += `<div class="cycleEndBar clickable hoverOpacity" onclick="userTriggers.expandBattleLog(${actionIndex})">Battle Settings<div class="weirdSideSemiCircleThinger"></div></div>`;}
            if (action.logType === "EnterCombat"){scrollerBox.innerHTML += `<div class="cycleEndBar clickable hoverOpacity" onclick="userTriggers.expandBattleLog(${actionIndex})">Enter Combat<div class="weirdSideSemiCircleThinger"></div></div>`;}
            
            // if (battleData.isLoggyLogger) {logToBattle(battleData,{logType: "WaveStart",AV:battleData.sumAV,waveID: waveID});}
            if (action.logType === "WaveStart"){scrollerBox.innerHTML += `<div class="cycleEndBar clickable hoverOpacity" onclick="userTriggers.expandBattleLog(${actionIndex})">Wave ${action.waveID}<div class="weirdSideSemiCircleThinger"></div></div>`;}
            

            if (action.logType === "StartTurn") {
                let characterRef = characters[action.name];
                if (!addedDefaultIndex) {
                    globalUI.defaultActionIndex = actionIndex;
                    addedDefaultIndex = true;
                }
                const turnRef = JSON.parse(action.turnRef);
                const isEvent = turnRef.isUniqueEvent;
                //when the first turn start is found, assign it as the default action to expand on when the action detail menu is opened. This is later overwritten by w/e action was last clicked
                //but overall default to first turn start in a log whenever the battle is remade and relogged. Dislike opening a new menu and having it blank.
    
                scrollerBox.innerHTML += `<div class="${action.isEnemy ? "turnStarterBarEnemy" : "turnStarterBarAlly"} clickable hoverOpacity" onclick="userTriggers.expandBattleLog(${actionIndex})">
                    <div class="${action.isEnemy ? "weirdSideSemiCircleThingerEnemy" : "weirdSideSemiCircleThingerAlly"}"></div>
                    ${action.isEnemy ? `<img src="/HonkaiSR/misc/${action.name.toLowerCase().includes("boss") ? "Glorpard.png" : "glorp.png"}" class="turnOrderDisplayPreviewEnemyGlorp"/>` : `<img src="/HonkaiSR/${isEvent ? turnRef.eventImage : characterRef.preview}" class="${isEvent ? "turnOrderDisplayPreviewEventIcon" : "turnOrderDisplayPreview"}"/>`}
                    <div class="turnOrderAVBox">${action.AV.toFixed(1)}</div>
                </div>`;
            }
            if (action.logType === "UltimateStart") {
                let characterRef = characters[action.name];
    
                scrollerBox.innerHTML += `<div class="turnStarterBarUltimate clickable hoverOpacity" onclick="userTriggers.expandBattleLog(${actionIndex})">
                    <div class="weirdSideSemiCircleThingerAlly"></div>
                    <img src="/HonkaiSR/${characterRef.preview}" class="turnOrderDisplayPreviewUltimate"/>
                    <div class="miniActionNameBox">Ult</div>
                </div>`;
            }
            if (action.logType === "ImmediateExtraTurn") {
                const isCharacter = characters?.[action.name];
                let imagePath = isCharacter ? characters[action.name].preview : graphs.summonCustomImages[action.name];
                // turnOrderDisplayPreviewUltimateSummon
    
                scrollerBox.innerHTML += `<div class="turnStarterBarUltimate clickable hoverOpacity" onclick="userTriggers.expandBattleLog(${actionIndex})">
                    <div class="weirdSideSemiCircleThingerAlly"></div>
                    <img src="/HonkaiSR/${imagePath}" class="${isCharacter ? "turnOrderDisplayPreviewUltimate" : "turnOrderDisplayPreviewUltimateSummon"}"/>
                    <div class="miniActionNameBox">Ex-Turn</div>
                </div>`;
            }
            if (action.logType === "ActionAdvanced" || action.logType === "ActionAdvancedBreakDelay") {
                let characterRef = characters[action.name];
    
                scrollerBox.innerHTML += `<div class="${action.isEnemy ? "turnStarterBarMiniActionEnemy" : "turnStarterBarMiniAction"} clickable hoverOpacity" onclick="userTriggers.expandBattleLog(${actionIndex})">
                    <div class="${action.isEnemy ? "weirdSideSemiCircleThingerEnemy" : "weirdSideSemiCircleThingerAlly"}"></div>
                    ${action.isEnemy ? `<img src="/HonkaiSR/misc/${action.name.toLowerCase().includes("boss") ? "Glorpard.png" : "glorp.png"}" class="turnOrderDisplayPreviewEnemyGlorp"/>` : `<img src="/HonkaiSR/${isEvent ? isEvent : characterRef.preview}" class="${isEvent ? "turnOrderDisplayPreviewEventAction" : "turnOrderDisplayPreviewUltimate"}"/>`}
                    <div class="miniActionNameBoxAdvance">${action.newAV > action.oldAV ? "DELAY" : "ADV"}: ${Math.floor(action.oldAV)} -> ${Math.floor(action.newAV)}</div>
                </div>`;
            }
            if (action.logType === "SpeedAdvanced") {
                let characterRef = characters[action.name];
    
                scrollerBox.innerHTML += `<div class="${action.isEnemy ? "turnStarterBarMiniActionEnemy" : "turnStarterBarMiniAction"} clickable hoverOpacity" onclick="userTriggers.expandBattleLog(${actionIndex})">
                    <div class="${action.isEnemy ? "weirdSideSemiCircleThingerEnemy" : "weirdSideSemiCircleThingerAlly"}"></div>
                    ${action.isEnemy ? `<img src="/HonkaiSR/misc/${action.name.toLowerCase().includes("boss") ? "Glorpard.png" : "glorp.png"}" class="turnOrderDisplayPreviewEnemyGlorp"/>` : `<img src="/HonkaiSR/${isEvent ? isEvent : characterRef.preview}" class="${isEvent ? "turnOrderDisplayPreviewEventAction" : "turnOrderDisplayPreviewUltimate"}"/>`}
                    <div class="miniActionNameBoxAdvance">${action.newAV > action.oldAV ? "-" : "+"}SPD AV: ${Math.floor(action.oldAV)} -> ${Math.floor(action.newAV)}</div>
                </div>`;
            }
            if (action.logType === "EnemyDied") {//logToBattle(battleData,{logType: "EnemyDied", source:killer.properName, enemyKilled:killed.properName, isEnemy: true});
                scrollerBox.innerHTML += `<div class="${action.isEnemy ? "turnStarterBarMiniAction" : "turnStarterBarMiniActionEnemy"} clickable hoverOpacity" onclick="userTriggers.expandBattleLog(${actionIndex})">
                    <div class="${action.isEnemy ? "weirdSideSemiCircleThingerAlly" : "weirdSideSemiCircleThingerEnemy"}"></div>
                    <img src="/HonkaiSR/${action.isEnemy ? characters[action.enemyKilled].preview : `misc/${action.enemyKilled.toLowerCase().includes("boss") ? "Glorpard.png" : "glorp.png"}`}" class="${action.isEnemy ? "turnOrderDisplayPreviewUltimate" : "turnOrderDisplayPreviewEnemyGlorp"}"/>
                    <div class="miniActionNameBox">Died</div>
                </div>`;
            }
    
            // logToBattle(battleData,{logType: "SummonOnFieldAdjustment", summonWas: "Apply", assignedTo: sourceTurn.properName, summonedBy: sourceTurn.properName, isEnemy: false, isCharacter: true,eventOverrideImage: netherTurnObject.eventImage, AV: battleData.sumAV});
            // logToBattle(battleData,{logType: "BattleStartWeakness", name:firstTurn.properName, target, isEnemy: false, isCharacter: true, AV: battleData.sumAV, actionSlot:"BattleStartWeakness"});
            let basicMiniAction = {
                "FUAStart": "FuA",
                "SkillStart": "Skill",
                "BasicATKStart": "Basic",
                "TechniqueStart": "Tech.",
                "MemoSkillStart": "Skill",
                "SummonOnFieldAdjustment": "",
                "BattleStartWeakness": "Weakness",
            }
            if (basicMiniAction[action.logType] || basicMiniAction[action.logType] === "") {
                let characterRef = characters[action.name];
                
                scrollerBox.innerHTML += `<div class="${action.isEnemy ? "turnStarterBarMiniActionEnemy" : "turnStarterBarMiniAction"} clickable hoverOpacity" onclick="userTriggers.expandBattleLog(${actionIndex})">
                    <div class="${action.isEnemy ? "weirdSideSemiCircleThingerEnemy" : "weirdSideSemiCircleThingerAlly"}"></div>
                    ${action.isEnemy ? `<img src="/HonkaiSR/${isEvent ? isEvent : `misc/${action.name.toLowerCase().includes("boss") ? "Glorpard.png" : "glorp.png"}`}" class="turnOrderDisplayPreviewEnemyGlorp"/>` : `<img src="/HonkaiSR/${isEvent ? isEvent : characterRef.preview}" class="${isEvent ? "turnOrderDisplayPreviewEventAction" : "turnOrderDisplayPreviewUltimate"}"/>`}
                    <div class="miniActionNameBox">${action.logType === "SummonOnFieldAdjustment" ? (action.summonWas === "Apply" ? "Summon" : "Died") : ""}${action.isEnemy ? "Attack" : basicMiniAction[action.logType]}${action.isEnhanced ? " Enh." : ""}</div>
                </div>`;
            }

            
    
            // battleData.battleLog.push({logType: "SkillStart", name:characterName, isEnemy: false, isCharacter: true, AV: battleData.sumAV});
    
    
    
    
            // battleData.battleLog.push({logType: "ActionAdvanced", name:globalRecords.character[target].name, oldAV: oldAV, newAV:targetRef.AV});
    
    
            // battleData.battleLog.push({logType: "StartTurn", name:currentTurn, isEnemy: thisTurn.isEnemy, AV: battleData.sumAV})
            actionIndex++;
        }
    }
}

const userTriggers = {
    openBattleSettings() {
        userTriggers.updateMainMenuDisplayed(2);
        userTriggers.updateBattleViewDisplayed('SettingsExpand');
    },
    updateBattleViewDisplayed(displayType) {
        globalUI.currentBattleViewDisplayType = displayType;

        let mainElemID = ["actionDetailMainHolderBox","actualGraphHolderbox","graphsControllerBoxHolder","battleSettingsMainHolderBox"];
        let buttonElemID = ["expandButtonHeaderAction","expandButtonHeaderGraph","expandButtonHeaderSettings"];
        for (let elem of mainElemID) {
            readSelection(elem).style.display = "none";
        }
        for (let elem of buttonElemID) {
            readSelection(elem).style.border = "none";
            readSelection(elem).style.background = "none";
            readSelection(elem).style.filter = "brightness(0.5)"

            // background: linear-gradient(to top, #1e1e1e, #1e1e1e, transparent);
        }
        

        if (displayType === "ActionExpand") {
            readSelection("actionDetailMainHolderBox").style.display = "flex";
            readSelection("expandButtonHeaderAction").style.border = "2px solid grey";//color: rgb(255, 219, 145);
            readSelection("expandButtonHeaderAction").style.background = "linear-gradient(to top, #1e1e1e, #1e1e1e, transparent)";
            readSelection("expandButtonHeaderAction").style.filter = "brightness(1)";


            // filter: sepia(1) saturate(100) hue-rotate(56deg) brightness(2); border: 1px solid white; opacity: 1;
        }
        else if (displayType === "GraphExpand") {
            readSelection("actualGraphHolderbox").style.display = "flex";
            readSelection("graphsControllerBoxHolder").style.display = "flex";

            readSelection("expandButtonHeaderGraph").style.border = "2px solid grey";
            readSelection("expandButtonHeaderGraph").style.background = "linear-gradient(to top, #1e1e1e, #1e1e1e, transparent)";
            readSelection("expandButtonHeaderGraph").style.filter = "brightness(1)";
        }
        else if (displayType === "SettingsExpand") {
            readSelection("battleSettingsMainHolderBox").style.display = "flex";

            readSelection("expandButtonHeaderSettings").style.border = "2px solid grey";
            readSelection("expandButtonHeaderSettings").style.background = "linear-gradient(to top, #1e1e1e, #1e1e1e, transparent)";
            readSelection("expandButtonHeaderSettings").style.filter = "brightness(1)";
        }
    },
    updateGraphViewDisplayed(displayType) {
        globalUI.currentGraphViewDisplayType = displayType;

        let mainElemID = ["actualGraphControlsBoxBattleSummary"];
        for (let elem of mainElemID) {
            readSelection(elem).style.display = "none";
        }

        let buttonElemID = ["expandButtonGraphViewSummary","expandButtonGraphViewBuffs","expandButtonGraphViewStat","expandButtonGraphViewSP","expandButtonGraphViewTurns","expandButtonGraphViewCustom"];
        for (let elem of buttonElemID) {
            readSelection(elem).style.color = "white";
            readSelection(elem).style.border = "none";
            readSelection(elem).style.background = "none";
            readSelection(elem).style.filter = "brightness(0.5)"

            // background: linear-gradient(to top, #1e1e1e, #1e1e1e, transparent);
        }
        //graphsControllerBoxHolder

        const battleData = globalRecords.battleData;
        if (displayType === "Summary") {
            // readSelection("actionDetailMainHolderBox").style.display = "flex";
            readSelection("expandButtonGraphViewSummary").style.color = "rgb(255, 219, 145)";//color: rgb(255, 219, 145);
            readSelection("expandButtonGraphViewSummary").style.background = "linear-gradient(to top, #1e1e1e, #1e1e1e, transparent)";
            readSelection("expandButtonGraphViewSummary").style.filter = "brightness(1)";


            // globalRecords.battleData = battleData;
            // graphs.createGraphsByBuffUptime(battleData, "Red Herring");
            // console.log("reached summary")
            graphs.createSummaryDataCharts(battleData);


            // filter: sepia(1) saturate(100) hue-rotate(56deg) brightness(2); border: 1px solid white; opacity: 1;
        }
        else if (displayType === "Buffs") {
            // readSelection("actualGraphHolderbox").style.display = "flex";
            readSelection("graphsControllerBoxHolder").style.display = "flex";
            readSelection("actualGraphControlsBoxBattleSummary").style.display = "flex";

            readSelection("expandButtonGraphViewBuffs").style.color = "rgb(255, 219, 145)";
            readSelection("expandButtonGraphViewBuffs").style.background = "linear-gradient(to top, #1e1e1e, #1e1e1e, transparent)";
            readSelection("expandButtonGraphViewBuffs").style.filter = "brightness(1)";


            // readSelection("actualGraphControlsBoxBattleSummary").innerHTML = `
            
            // `

            // "buffGraphs": {
            //     graphBy: "AV",
            //     buffEntity: "Character",
            //     entityName: "Hysilens",
            //     buffName: "",
            // },

            graphs.createGraphsByBuffUptime(globalUI.buffGraphs.buffName);
        }
        else if (displayType === "SP") {
            readSelection("expandButtonGraphViewSP").style.color = "rgb(255, 219, 145)";//color: rgb(255, 219, 145);
            readSelection("expandButtonGraphViewSP").style.background = "linear-gradient(to top, #1e1e1e, #1e1e1e, transparent)";
            readSelection("expandButtonGraphViewSP").style.filter = "brightness(1)";


            // globalRecords.battleData = battleData;
            // graphs.createGraphsByBuffUptime(battleData, "Red Herring");
            // console.log("reached summary")
            graphs.createSummarySPCharts(battleData);
        }

        else if (displayType === "Turns") {
            readSelection("expandButtonGraphViewTurns").style.color = "rgb(255, 219, 145)";//color: rgb(255, 219, 145);
            readSelection("expandButtonGraphViewTurns").style.background = "linear-gradient(to top, #1e1e1e, #1e1e1e, transparent)";
            readSelection("expandButtonGraphViewTurns").style.filter = "brightness(1)";


            // globalRecords.battleData = battleData;
            // graphs.createGraphsByBuffUptime(battleData, "Red Herring");
            // console.log("reached summary")
            graphs.createGraphsByTurn(battleData);
        }
    },
    updateMainMenuDisplayed(elementID) {

        for (let i=1;i<=3;i++) {
            let currentButton = readSelection(`mainMenuTypeButton${i}`);

            currentButton.style.color = "white";
            currentButton.style.opacity = "0.75";
            currentButton.style.backgroundColor = "";
        }
        let selectedRef = readSelection(`mainMenuTypeButton${elementID}`);
        selectedRef.style.color = "#ffdb91";
        selectedRef.style.opacity = "1";
        selectedRef.style.backgroundColor = "#ffffff1A";

        globalUI.currentMainMenuDisplayed = elementID;

        if (elementID === 1) {readSelection("teamBoxMainHolderBox").style.display = "flex";}
        else {readSelection("teamBoxMainHolderBox").style.display = "none";}

        if (elementID === 2) {
            readSelection("battleViewBoxMainHolderBox").style.display = "flex";
            readSelection("teamBarHolderBox").style.display = "none";//character icons on the top, not needed for battleview
        }
        else {
            readSelection("battleViewBoxMainHolderBox").style.display = "none";
            readSelection("teamBarHolderBox").style.display = "flex";
        }


        if (elementID === 3) {
            readSelection("optimizeBoxMainHolderBox").style.display = "flex";
            readSelection("teamBarHolderBox").style.display = "flex";//character icons on the top, not needed for battleview
        }
        else {
            readSelection("optimizeBoxMainHolderBox").style.display = "none";
            readSelection("teamBarHolderBox").style.display = "flex";
        }

        // let idRef = ["Overview","Lightcone","Traces","Relics","Eidolons"];
        // for (let entry in idRef) {
        //     readSelection(`characterDisplayClicker${idRef[entry]}`).style.color = "white";//changes the left menu option names to be plain so we can highlight the selected one after
        //     readSelection(`characterDisplayClicker${idRef[entry]}`).style.opacity = "0.75";
            

        //     //change the displays to hidden then only open up the right ones after
        //     readSelection(`mainStatsDisplay${idRef[entry]}`).style.display = "none";

        //     // if (entry<5) {
        //     readSelection(`characterMainCenterDisplay${idRef[entry]}`).style.display = "none";
        //     // }
        // }
        // readSelection(`characterDisplayClicker${idRef[elementID-1]}`).style.color = "#ffdb91";
        // readSelection(`characterDisplayClicker${idRef[elementID-1]}`).style.opacity = "1";
        // readSelection(`mainStatsDisplay${idRef[elementID-1]}`).style.display = "flex";
        // globalUI.currentCharacterMenuDisplayed = elementID;
        // // if (elementID<=4) {
        //     readSelection(`characterMainCenterDisplay${idRef[elementID-1]}`).style.display = "flex";
        // // }


        //mainStatsDisplay
    },
    updateCharacterBreakdownClicked(elementID) {
        let idRef = ["Overview","Lightcone","Traces","Relics","Eidolons","Rotation"];
        for (let entry in idRef) {
            let currentButton = readSelection(`characterDisplayClicker${idRef[entry]}`);
            currentButton.style.color = "white";//changes the left menu option names to be plain so we can highlight the selected one after
            currentButton.style.opacity = "0.75";
            currentButton.style.backgroundColor = "";
            
            //change the displays to hidden then only open up the right ones after
            readSelection(`mainStatsDisplay${idRef[entry]}`).style.display = "none";
            readSelection(`characterMainCenterDisplay${idRef[entry]}`).style.display = "none";
        }
        let selectedRef = readSelection(`characterDisplayClicker${idRef[elementID-1]}`);
        selectedRef.style.color = "#ffdb91";
        selectedRef.style.opacity = "1";
        selectedRef.style.backgroundColor = "#ffffff1A";
        readSelection(`mainStatsDisplay${idRef[elementID-1]}`).style.display = "flex";
        globalUI.currentCharacterMenuDisplayed = elementID;
        // if (elementID<=4) {
            readSelection(`characterMainCenterDisplay${idRef[elementID-1]}`).style.display = "flex";
        // }


        // const traceSummaryBoxElem = readSelection("characterMainCenterDisplayTracesSummary");
        // if (elementID === 3) {//3 is Traces
        //     traceSummaryBoxElem.style.display = "flex";
        // }
        // else {
        //     traceSummaryBoxElem.style.display = "none";
        // }

        //mainStatsDisplay
    },
    updateCharacterSlotSelected(slot) {
        globalUI.currentCharacterDisplayed = slot;
        let charSlot = `char${slot}`;
        
        userTriggers.updateCharacterUI(updateFormulas(charSlot),slot,true);
        userTriggers.updateCharacterBreakdownClicked(globalUI.currentCharacterMenuDisplayed);//the trace summary value box will show without this getting called

        userTriggers.updateSelectedRelicStats();
        userTriggers.renewFiltersDisplayValues();
    },
    updateEnemyAddedMenuUI() {
        readSelection("addEnemyLevelSliderDisplay").innerHTML = +readSelection("addEnemyLevelSlider").value;
        readSelection("addEnemyHPBarsDisplay").innerHTML = +readSelection("addEnemyHPBars").value;
        readSelection("addEnemyToughnessBarsDisplay").innerHTML = +readSelection("addEnemyToughnessBars").value;


        const weaknessToggleEntries = ["Fire","Ice","Imaginary","Physical","Quantum","Lightning","Wind"];

        for (let element of weaknessToggleEntries) {
            const isWeak = readSelection(`addEnemyWeakness${element}`);

            if (isWeak.checked) {
                readSelection(`addEnemyResistanceSlider${element}`).value = 0;
            }
            readSelection(`addEnemyResistanceSliderDisplay${element}`).innerHTML = +readSelection(`addEnemyResistanceSlider${element}`).value;
        }
    },
    addEnemyToWave(waveID,waveIndex,pageloadUIAdjustment,leftOrRight,isExport) {
        // addEnemyStatsHP,addEnemyStatsToughness,addEnemyStatsEffectRES,addEnemyStatsSPD,addEnemyStatsATK,addEnemyStatsName

        // enemyWaveHolder1
        const waveDeposit = globalRecords.battleSettings[`waveArray${waveID}`];
        const elementDeposit = readSelection(`enemyWaveHolder${waveID}`);

        const importField = readSelection("importTextInputTeam");
        let isImported = false;
        if (importField && importField.value) {
            isImported = true;
            pageloadUIAdjustment = true;
        }
        
        if (!pageloadUIAdjustment) {
            const enemyName = readSelection("addEnemyStatsName").value;
            const enemyATK = +readSelection("addEnemyStatsATK").value;
            if (+readSelection("addEnemyStatsSPD").value > 300) {readSelection("addEnemyStatsSPD").value = 300;}
            const enemySPD = +readSelection("addEnemyStatsSPD").value;
            const enemyEffectRES = +readSelection("addEnemyStatsEffectRES").value;
            const enemyToughness = +readSelection("addEnemyStatsToughness").value;
            const enemyHP = +readSelection("addEnemyStatsHP").value;

            // "Everwinter Shadewalker": {//gunner boi
            //     name: "Everwinter Shadewalker",
            //     lvl: 66,//95,
            //     stats: {
            //         "HPBase": 10892*3,//70000,//2000000,
            //         "ATKBase": 397,
            //         "SPDBase": 110,
            //         "Toughness": 200,
            //         "EffectRES": 0.164,
            //     },
            //     enemyTypeAttack: "Generic Boss",
            //     enemyType: "minion",
            // },

            // {entry:"GenericMinion", weaknesses: null,weaknessOverrides: {"Lightning": true,"Ice":true,"Quantum":true},resistantTo: {}},

            let missingKeyValue = false;
            let missingValueString = "";
            const valuesToCheck = [
                {userFacingName: "Name", value: enemyName},
                {userFacingName: "ATK", value: enemyATK},
                {userFacingName: "SPD", value: enemySPD},
                {userFacingName: "Effect RES", value: enemyEffectRES},
                {userFacingName: "Toughness", value: enemyToughness},
                {userFacingName: "HP", value: enemyHP},
                // {userFacingName: "", value: 1}
            ]
            for (let values of valuesToCheck) {
                if (!values.value || +values.value < 0) {
                    missingKeyValue = true;
                    missingValueString += values.userFacingName + ",";
                }
            }
            if (missingKeyValue) {
                alert(`Enemy could not be added, missing key definition values or values were negative.\n\nValues missing/negative:\n${missingValueString}`);
                return;
            }//we never want to construct an enemy unless the user has defined values on ALL parameters we would need

            const weaknessToggleEntries = ["Physical","Fire","Ice","Lightning","Wind", "Quantum","Imaginary"];

            const weaknessOverrides = {};
            const resistantTo = {}

            for (let element of weaknessToggleEntries) {
                const isWeak = readSelection(`addEnemyWeakness${element}`);
                const isResistant = readSelection(`addEnemyResistanceSlider${element}`);

                if (isWeak.checked) {
                    weaknessOverrides[element] = true;
                }
                resistantTo[element] = +isResistant.value;
            }


            const enemyLvL = +readSelection("addEnemyLevelSlider").value;
            const baseRes = 0.20;
            const enemyObject = {
                image: null,
                entry: null,
                name: enemyName,
                lvl: enemyLvL,
                hpBars: +readSelection("addEnemyHPBars").value,
                toughnessBars: +readSelection("addEnemyToughnessBars").value,
                stats: new Array(greatTableSize).fill(0),
                enemyTypeAttack: readSelection("addEnemyAttackTypeSelector").value,
                enemyType: readSelection("addEnemyEnemyTypeSelector").value,
                weaknessOverrides,
                resistantTo,
            }
            const enemyStats = enemyObject.stats;

            enemyStats[LVL] = enemyLvL;
            enemyStats[HPBase] = enemyHP;
            enemyStats[ATKBase] = enemyATK;
            enemyStats[SPDBase] = enemySPD;
            enemyStats[Toughness] = enemyToughness;
            // console.log(enemyStats[Toughness])
            enemyStats[EffectRES] = enemyEffectRES;
            enemyStats[DEFBase] = (enemyLvL*10) + 200;

            enemyStats[ResistanceImaginary] = (weaknessOverrides.Imaginary ? 0 : (resistantTo.Imaginary ?? 0))/100;
            enemyStats[ResistanceQuantum] = (weaknessOverrides.Quantum ? 0 : (resistantTo.Quantum ?? 0))/100;
            enemyStats[ResistanceWind] = (weaknessOverrides.Wind ? 0 : (resistantTo.Wind ?? 0))/100;
            enemyStats[ResistanceLightning] = (weaknessOverrides.Lightning ? 0 : (resistantTo.Lightning ?? 0))/100;
            enemyStats[ResistanceIce] = (weaknessOverrides.Ice ? 0 : (resistantTo.Ice ?? 0))/100;
            enemyStats[ResistanceFire] = (weaknessOverrides.Fire ? 0 : (resistantTo.Fire ?? 0))/100;
            enemyStats[ResistancePhysical] = (weaknessOverrides.Physical ? 0 : (resistantTo.Physical ?? 0))/100;

            enemyStats[WeaknessImaginary] = weaknessOverrides.Imaginary ? 1 : 0;
            enemyStats[WeaknessQuantum] = weaknessOverrides.Quantum ? 1 : 0;
            enemyStats[WeaknessWind] = weaknessOverrides.Wind  ? 1 : 0;
            enemyStats[WeaknessLightning] = weaknessOverrides.Lightning ? 1 : 0;
            enemyStats[WeaknessIce] = weaknessOverrides.Ice ? 1 : 0;
            enemyStats[WeaknessFire] = weaknessOverrides.Fire ? 1 : 0;
            enemyStats[WeaknessPhysical] = weaknessOverrides.Physical ? 1 : 0;
            // console.log(enemyObject.stats)

            // Object.assign(psuedoStats,enemyObject.stats);
            enemyObject.finalStats = updateFormulas(null,enemyStats);

            if (isExport) {
                userTriggers.copyToClipboard(enemyObject);
                return;
            }

            

            if (waveIndex != undefined) {
                waveDeposit[waveIndex] = enemyObject;
            }
            else if (waveDeposit.length < 5) {
                waveDeposit.push(enemyObject);
            }
        }
        else if (isImported && waveDeposit.length < 5) {
            const parsedValue = JSON.parse(importField.value);
            const isArray = Array.isArray(parsedValue);

            if (isArray) {
                alert("You can't import a WAVE of enemies onto a single enemy slot.\n\nBack out of this menu, and open the Wave Import menu instead of the Add Enemy menu.");
                return;
            }
            waveDeposit.push(parsedValue);
        }


        let enemiesDisplayedString = "";
        function getEnemyWaveDisplay(enemyEntry,waveID,counter) {
            let weaknessString = `<div class="characterDisplayElementWeaknessIconHolderBoxBattleSettings">`;
            for (let weaknessType in elementImagePaths) {
                if (!enemyEntry.weaknessOverrides[weaknessType]) {continue;}
                const imagePath = elementImagePaths[weaknessType];
                weaknessString += `
                <img src="${imagePath}" class="characterDisplayElementWeaknessIcon"/>`
            }
            weaknessString += "</div>";

            // "HPBase": 10892*3,//70000,//2000000,
            // "ATKBase": 397,
            // "SPDBase": 110,
            // "Toughness": 200,
            // "EffectRES": 0.164,

            // ◀
            // ▶
            

            const correctedEnemyTypes = {
                "minion": "Minion",
                "elite": "Elite",
                "boss": "Boss",
            }
            const stats = enemyEntry.stats;

            return `
            <div class="enemyWaveEnemyDisplayBox">
                <div class="enemyAddWaveEditRow">
                    <div class="enemyAddWaveEditRowMoveButton clickable" onclick="userTriggers.addEnemyToWave(${waveID},${counter},true,'Left')">◀</div>
                    <div class="enemyAddWaveEditRowMoveButton clickable" onclick="userTriggers.addEnemyToWave(${waveID},${counter},true,'Right')">▶</div>

                    <div class="enemyAddWaveEditRowButton clickable" onclick="customMenu.createAddedEnemyMenu(${waveID},${counter},false)">Edit</div>
                </div>

                <div class="enemyWaveEnemyIconAndLevelBox">
                    <img src="/HonkaiSR/misc/${enemyEntry.enemyType === "boss" ? "Glorpard.png" : "glorp.png"}" class="enemyWaveEnemyIcon"/>
                    <div class="enemyWaveEnemyLevelAndWeaknessBox">
                        <div class="enemyWaveEnemyLevel">LvL ${enemyEntry.lvl}</div>
                        ${weaknessString}
                    </div>
                </div>
                <div class="addEnemyWeaknessesHeader">${enemyEntry.name}</div>

                <div class="enemyAddWaveClassAndAttackRow">
                    <div class="enemyAddWaveClass">${correctedEnemyTypes[enemyEntry.enemyType]}</div>
                    <div class="enemyAddWaveAttack">[${enemyEntry.enemyTypeAttack === "Single Target" ? "ST" : enemyEntry.enemyTypeAttack}]</div>
                </div>


                <div class="imageRowStatisticBox1">
                    <div class="imageRowStatisticImageBox"><img src="/HonkaiSR/icon/property/IconAttack.png" class="imageRowStatisticImage"/></div>
                    <div class="imageRowStatisticNameBox">ATK</div>
                    <div class="imageRowStatisticStatBox">${stats[ATKBase]}</div>
                </div>

                <div class="imageRowStatisticBox2">
                    <div class="imageRowStatisticImageBox"><img src="/HonkaiSR/icon/property/IconSpeed.png" class="imageRowStatisticImage"/></div>
                    <div class="imageRowStatisticNameBox">SPD</div>
                    <div class="imageRowStatisticStatBox">${stats[SPDBase]}</div>
                </div>

                <div class="imageRowStatisticBox1">
                    <div class="imageRowStatisticImageBox"><img src="/HonkaiSR/icon/property/IconStatusResistance.png" class="imageRowStatisticImage"/></div>
                    <div class="imageRowStatisticNameBox">Effect RES</div>
                    <div class="imageRowStatisticStatBox">${stats[EffectRES]}</div>
                </div>
                <div class="imageRowStatisticBox2">
                    <div class="imageRowStatisticImageBox"><img src="/HonkaiSR/icon/property/IconBreakUp.png" class="imageRowStatisticImage"/></div>
                    <div class="imageRowStatisticNameBox">Toughness</div>
                    <div class="imageRowStatisticStatBox">${stats[Toughness].toLocaleString()} ${enemyEntry.toughnessBars > 1 ? "x" + enemyEntry.toughnessBars : ""}</div>
                </div>
                <div class="imageRowStatisticBox1">
                    <div class="imageRowStatisticImageBox"><img src="/HonkaiSR/icon/property/IconMaxHP.png" class="imageRowStatisticImage"/></div>
                    <div class="imageRowStatisticNameBox">HP</div>
                    <div class="imageRowStatisticStatBox">${stats[HPBase].toLocaleString()} ${enemyEntry.hpBars > 1 ? "x" + enemyEntry.hpBars : ""}</div>
                </div>
                
            </div>`;
        }


        if (leftOrRight && waveIndex != undefined && waveDeposit.length > 1) {//only allow moves if the array length even has 2 entries
            if (leftOrRight === "Left" && waveIndex > 0) {
                waveDeposit.splice(waveIndex-1,0,waveDeposit.splice(waveIndex,1)[0]);
            }
            else if (leftOrRight === "Right" && waveIndex < waveDeposit.length-1) {
                waveDeposit.splice(waveIndex+1,0,waveDeposit.splice(waveIndex,1)[0]);
            }
        }


        let counter = 0;
        for (let enemyEntry of waveDeposit) {
            enemiesDisplayedString += getEnemyWaveDisplay(enemyEntry,waveID,counter);
            counter++;
        }

        elementDeposit.innerHTML = enemiesDisplayedString;
        if (!pageloadUIAdjustment || (pageloadUIAdjustment && isImported) || (pageloadUIAdjustment && leftOrRight)) {userTriggers.updateQuerySearchSettings(true);}
    },
    addWaveApplyPreset() {
        const presetSelected = readSelection("addWavePresetsSelector").value;

        const currentPreset = JSON.stringify(vashWavePresets[presetSelected]);

        const inputElem = readSelection("importTextInputTeam");
        inputElem.value = currentPreset;
        userTriggers.importWaveData("ALL");
    },
    deleteEnemyFromWave(waveID,waveIndex) {
        const depositRef = globalRecords.battleSettings[`waveArray${waveID}`];
        depositRef.splice(waveIndex,1);

        userTriggers.addEnemyToWave(waveID,null,true);
        userTriggers.updateQuerySearchSettings(true);
        customMenu.closeMenu();
    },
    updateSuperimposition(rank) {
        if (globalUI.queryIsActive) {return;}//do NOT allow modifications while a query is running, I am not confident that I've handled things properly enough yet for that
        let currentSlot = globalUI.currentCharacterDisplayed;
        let charSlot = `char${currentSlot}`;

        globalRecords.character[charSlot].lcRank = rank;

        userTriggers.updateCharacterUI(updateFormulas(charSlot),currentSlot);
    },
    updateEidolonRank(rank) {
        if (globalUI.queryIsActive) {return;}//do NOT allow modifications while a query is running, I am not confident that I've handled things properly enough yet for that
        let currentSlot = globalUI.currentCharacterDisplayed;
        let charSlot = `char${currentSlot}`;

        globalRecords.character[charSlot].rank = rank;

        userTriggers.updateCharacterUI(updateFormulas(charSlot),currentSlot);
    },
    updateSelectedRelicSet(slot,updated) {
        let currentSlot = globalUI.currentCharacterDisplayed;
        let charSlot = `char${currentSlot}`;
        let depositRef = globalRecords.character[charSlot];

        switch (slot) {
            case "Planar": depositRef.planar = updated;break;
            case "Relics 1-2": depositRef["2pc"] = updated;break;
            case "Relics 3-4": depositRef["4pc"] = updated;break;
        }

        userTriggers.updateCharacterUI(updateFormulas(charSlot),currentSlot);
    },
    updateSelectedLightcone(updated) {
        let currentSlot = globalUI.currentCharacterDisplayed;
        let charSlot = `char${currentSlot}`;

        if (globalRecords.character[charSlot].lcName = updated) {//if we're not loading a file, but the lc actually changed, then assume superimposition based on rarity
            globalRecords.character[charSlot].lcName = updated;
            globalRecords.character[charSlot].lcRank = lightcones[updated].rarity <= 4 ? 5 : 1;
            //TODO: later when I have imports/exports of character data, need to look into how I wanna handle this.
            //not sure if it's too much to feed to the URL or not, or if I should just do save files.
            //cache can work but I dislike that people clear it on the regular, so would prefer not to
        }

        userTriggers.updateCharacterUI(updateFormulas(charSlot),currentSlot);
    },
    updateSelectedCharacter(updated) {
        let currentSlot = globalUI.currentCharacterDisplayed;
        let charSlot = `char${currentSlot}`;

        // console.log(updated)

        const characterObject = globalRecords.character;
        const currentCharObject = characterObject[charSlot];

        const slot1Conflict = characterObject.char1.name === updated && currentSlot != 1;
        const slot2Conflict = characterObject.char2.name === updated && currentSlot != 2;
        const slot3Conflict = characterObject.char3.name === updated && currentSlot != 3;
        const slot4Conflict = characterObject.char4.name === updated && currentSlot != 4;

        const duplicateCharacterExists = slot1Conflict || slot2Conflict || slot3Conflict || slot4Conflict;
        if (duplicateCharacterExists) {
            alert(`Cannot input duplicate characters into multiple slots.\n\nConflicting character slot: ${slot1Conflict ? "char1" : ""}${slot2Conflict ? "char2" : ""}${slot3Conflict ? "char3" : ""}${slot4Conflict ? "char4" : ""}`);
            return;
        }

        if (currentCharObject.name != updated && updated && !duplicateCharacterExists) {//if we're not loading a file, but the character actually changed, assume eidolons based on rarity
            currentCharObject.name = updated;
            currentCharObject.rank = characters[updated].rarity === 4 || updated.toLowerCase().includes("trailblazer") ? 6 : 0;
            //TODO: later when I have imports/exports of character data, need to look into how I wanna handle this.
            //not sure if it's too much to feed to the URL or not, or if I should just do save files.
            //cache can work but I dislike that people clear it on the regular, so would prefer not to

            currentCharObject.conditions = defaultConditions[updated] ? JSON.parse(JSON.stringify(defaultConditions[updated])) : null;
        }

        userTriggers.updateCharacterUI(updateFormulas(charSlot),currentSlot);
        userTriggers.updateCharacterBreakdownClicked(1)
    },
    updateSelectedTraceDisplay(traceID) {
        let currentSlot = globalUI.currentCharacterDisplayed;
        let charSlot = `char${currentSlot}`;
        //since viewing a trace isn't actually gonna change our stats, we will NOT call updateformulas here NOR updatecharacterUI
        let charRef = characters[globalRecords.character[charSlot].name];
        let traceRef = charRef.traces;
        let calledID = `Point${traceID.toString().padStart(2, "0")}`;
        let currentTrace = traceRef[calledID];
        let eidoRank = globalRecords.character[charSlot].rank;

        let levelReference = {
            "Basic ATK": 6,
            "Ultimate": 10,
            "Skill": 10,
            "Talent": 10,
            "Technique": 1,
            "Memosprite Talent": 6,
            "Memosprite Skill": 6
        }

        readSelection("traceContentBodyBox").innerHTML = "";

        if (!currentTrace.skillRef) {
            readSelection("traceAttackType").innerHTML = currentTrace.desc ? "Bonus Ability" : "Stat Bonus";

            let desc = "";
            if (currentTrace.desc) {desc = pagePopulation.cleanDescription(currentTrace.params || [],currentTrace.desc);}
            else {
                let keyStat = Object.keys(currentTrace.stats)[0];
                desc = `${(currentTrace.stats[keyStat] * (keyStat.includes("SPD") ? 1 : 100)).toFixed(2) + (keyStat.includes("SPD") ? "" : "%")}`;
            }

            readSelection("traceContentBodyBox").innerHTML = `
            <div class="characterDisplayNameAndElement">
                <div class="traceDisplayNameBox">${currentTrace.name}</div>
            </div>
            <div class="rightDescriptionBox" style="color: white;">${desc}</div>
            `
        }
        else {
            let skillSlot = currentTrace.skillRef.skillSlot;
            let baseLevel = battleActions.levelFloors[skillSlot];
            let baseLevelCompare = battleActions.levelFloors[skillSlot];
            let levelIsBlue = false;
            if (eidoRank >= 3) {baseLevel += charRef.eidlonLevelBonuses[3][skillSlot] ?? 0;}
            if (eidoRank >= 5) {baseLevel += charRef.eidlonLevelBonuses[5][skillSlot] ?? 0;}
            if (baseLevel != baseLevelCompare) {levelIsBlue = true;}
            // #2efff8

            readSelection("traceAttackType").innerHTML = skillSlot;

            let skillPath = charRef.skills[skillSlot];

            let skillKeys = Object.keys(skillPath);
            for (let skillKey of skillKeys) {
                let currentSkill = skillPath[skillKey].variant1;;
                // console.log(currentSkill.variant1.name);break;

                // type
                readSelection("traceContentBodyBox").innerHTML += `
                <div class="characterDisplayNameAndElement">
                    <div class="${skillPath[skillKeys[0]].variant1.name === currentSkill.name ? "traceDisplayNameBox" : "traceDisplayNameBoxAlt"}" id="traceDisplayName">${currentSkill.name}</div>
                </div>

                <div class="traceLevelBox">
                    <div class="traceAttackTargetType">${currentSkill.type ? `[${currentSkill.type}]` : ""}</div>
                    <div class="${levelIsBlue ? "traceSkillLevelBlue" : "traceSkillLevel"}">${skillPath[skillKeys[0]].variant1.name === currentSkill.name ? `Lv.  ${baseLevel}` : ""}</div>
                </div>

                ${!currentSkill.skillPointCost && !currentSkill.skillPointGain ? "" : `<div class="traceToughnessBox">
                    <div class="traceToughnessTitleBox">Skill Points</div>
                    <div class="traceToughnessValueBox">${currentSkill.skillPointCost ? `-${currentSkill.skillPointCost}` : ""}${currentSkill.skillPointGain ? `+${currentSkill.skillPointGain}` : ""}</div>
                </div>`}

                ${!currentSkill.toughnessReductionDisplayed ? "" : `<div class="traceToughnessBox">
                    <div class="traceToughnessTitleBox">Toughness</div>
                    <div class="traceToughnessValueBox">${currentSkill.toughnessReductionDisplayed}</div>
                </div>`}

                ${!currentSkill.energyCost ? "" : `<div class="traceToughnessBox">
                    <div class="traceToughnessTitleBox">Energy Cost</div>
                    <div class="traceToughnessValueBox">${currentSkill.energyCost}</div>
                </div>`}

                ${!currentSkill.energyRegen ? "" : `<div class="traceToughnessBox">
                    <div class="traceToughnessTitleBox">Energy</div>
                    <div class="traceToughnessValueBox">${currentSkill.energyRegen}</div>
                </div>`}

                <div class="rightDescriptionBox" style="color: white;">${pagePopulation.cleanDescription(currentSkill.params[baseLevel] || [],currentSkill.desc)}</div>
                `
            }
        }


        const traceSummaryBoxElem = readSelection("characterMainCenterDisplayTracesSummary");
        // traceSummaryBoxElem.style.display = "flex";

        const currentCharacterName = globalRecords.character[charSlot].name;
        const characterTraceRef = characters[currentCharacterName].traces;

        let traceValueHolder = {};
        // "Point10": {
        //     "name": "ATK Boost",
        //     "icon": "icon/property/IconAttack.png",
        //     "stats": {
            //     "ATK%": 0.04
        //     }
        // },

        for (let traceEntry in characterTraceRef) {
            const currentTraceRef = characterTraceRef[traceEntry];

            const statRef = currentTraceRef.stats;
            if (!statRef) {continue;}

            for (let innerStatRef in statRef) {
                const currentStatValue = statRef[innerStatRef];

                traceValueHolder[innerStatRef] = (traceValueHolder[innerStatRef] ?? 0) + currentStatValue;
            }
        }

        let traceSummaryString = "";
        for (let traceStatEntry in traceValueHolder) {
            const traceStatValue = traceValueHolder[traceStatEntry];

            const convertedStatIndex = greatTableIndex[traceStatEntry];

            const currentStatFamily = basicShorthand.findStatObject(convertedStatIndex);
            const imgPath = currentStatFamily.icon;

            const currentStatSet = currentStatFamily.sets[convertedStatIndex];
            const unit = currentStatSet.unit;

            traceSummaryString += `<div class="traceSummaryEntryBox">
                <img src="${imgPath}" class="traceSummaryEntryImage"/>
                <div class="">${unit === "%" ? `${(traceStatValue * 100).toLocaleString()}%` : traceStatValue.toLocaleString()}</div>
            </div>`
            // console.log(currentStatFamily,imgPath,currentStatSet)
        }
        traceSummaryBoxElem.innerHTML = traceSummaryString;
    },
    relicSlotNameConversions: {
        "Head": "Head",
        "Hands": "Hands",
        "Body": "Body",
        "Feet": "Feet",
        "Sphere": "Planar Sphere",
        "Rope": "Link Rope",
    },
    updateSelectedRelicStats() {
        if (globalUI.queryIsActive) {return;}//do NOT allow modifications while a query is running, I am not confident that I've handled things properly enough yet for that
        let currentSlot = globalUI.currentCharacterDisplayed;
        let charSlot = `char${currentSlot}`;
        let pieceKeys = ["Head","Hands","Body","Feet","Sphere","Rope"];

        let relicDisplayBox = readSelection("relicsMainPieceHolderBox");
        relicDisplayBox.innerHTML = "";

        let currentCharRelicsRef = globalRecords.character[charSlot];
        


        for (let piece of pieceKeys) {
            let currentPieceName = piece.split(" ").length > 1 ? piece.split(" ")[1] : piece;//link rope -> just rope, otherwise leave the name as is.

            let actualPieceName = userTriggers.relicSlotNameConversions[piece]
            let currentPiece = currentCharRelicsRef[actualPieceName];
            let mainStat = currentCharRelicsRef[`${piece}Main`];
            let mainStatRef = relics[actualPieceName].mainAffix[mainStat].maxed;
            let subStatRef = relics.Head.subAffix;

            let subRollArray = customMenu.restrictSubstatsAndReturnRolls(currentCharRelicsRef,actualPieceName,piece);

            const displayOrder = [greatTableIndex[currentCharRelicsRef[`${piece}1Stat`]],greatTableIndex[currentCharRelicsRef[`${piece}2Stat`]],greatTableIndex[currentCharRelicsRef[`${piece}3Stat`]],greatTableIndex[currentCharRelicsRef[`${piece}4Stat`]]];
            const statDestination = {
                [greatTableIndex[currentCharRelicsRef[`${piece}1Stat`]]]: currentCharRelicsRef[`${piece}1Value`],
                [greatTableIndex[currentCharRelicsRef[`${piece}2Stat`]]]: currentCharRelicsRef[`${piece}2Value`],
                [greatTableIndex[currentCharRelicsRef[`${piece}3Stat`]]]: currentCharRelicsRef[`${piece}3Value`],
                [greatTableIndex[currentCharRelicsRef[`${piece}4Stat`]]]: currentCharRelicsRef[`${piece}4Value`]
            };

            // let compositeRollCount = 0;
            // for (let entry of displayOrder) {
            //     const statInternal = greatTableKeys[entry] ?? entry;

            //     let valuePre = statDestination[entry];
            //     // let valueRef = (valuePre * (isPercent ? 100 : 1))?.toFixed(3) || 0;
    
            //     let estRolls = basicShorthand.estimateSubRolls(subStatRef[statInternal],valuePre);

            //     compositeRollCount += estRolls;
            // }


            // greatTableIndex
            let mainRow = customHTML.createAlternatingStatRows([greatTableIndex[mainStat]],{[greatTableIndex[mainStat]]: mainStatRef},true);
            let statRows = customHTML.createAlternatingStatRows(
                // currentPiece.order,
                displayOrder,
                statDestination,
                // currentPiece.stats,
                false,
                subStatRef,
                null,
                subRollArray
            );

            if (actualPieceName.toLowerCase().includes("sphere")) {
                relicDisplayBox.innerHTML += `<div class="relicsDividerLine"></div>`
            }

            relicDisplayBox.innerHTML += `
            <div class="relicsPieceHolderBox clickable" onclick="customMenu.createRelicDetailMenu('${piece}')">
                <div class="characterDisplayNameAndElement">
                    <div class="traceDisplayNameBox">${currentPieceName}</div>
                    <div class="characterSearchButtonRelicTotalSubsOverview">${subRollArray[0] + subRollArray[1] + subRollArray[2] + subRollArray[3]}/5</div>
                    <div class="characterSearchButtonRelicEdit clickable" id="">Edit</div>
                </div>
                <div class="characterDisplayStatsBasic">

                    ${mainRow}
                    ${statRows}
                </div>
            </div>
            `;
        }
    },
    shiftDefaultConditionsToCharObjects() {
        const characterObject = globalRecords.character;

        for (let charSlot in characterObject) {
            const currentCharObject = characterObject[charSlot];

            const charName = currentCharObject.name;

            const defaultConditionsChar = JSON.stringify(defaultConditions[charName]);

            currentCharObject.conditions = JSON.parse(defaultConditionsChar);
        }
    },
    updateCharacterUI(statTableRef,currentSlot,silent) {
        let globalPathChar = globalRecords.character[`char${currentSlot}`];
        const characterName = globalPathChar.name;
        let charRef = characters[characterName];
        let lightconeRef = lightcones[globalPathChar.lcName];
        // let imgPathTest = "/HonkaiSR/" + charRef.icon;
        // readSelection(`teamBarChar1IMG`).src = "/HonkaiSR/" + characters[globalRecords.character.char1.name].icon;
        // readSelection(`teamBarChar2IMG`).src = "/HonkaiSR/" + characters[globalRecords.character.char2.name].icon;
        // readSelection(`teamBarChar3IMG`).src = "/HonkaiSR/" + characters[globalRecords.character.char3.name].icon;
        // readSelection(`teamBarChar4IMG`).src = "/HonkaiSR/" + characters[globalRecords.character.char4.name].icon;

        for (let i=1;i<=4;i++) {
            let globalCharRef = characters[globalRecords.character[`char${i}`].name]
            readSelection(`teamBarChar${i}IMG`).src = "/HonkaiSR/" + globalCharRef.icon;
            readSelection(`teamBarChar${i}IMG`).style.border = `2px solid ${customMenu.rarityColors[globalCharRef.rarity]}`;
            readSelection(`teamBarChar${i}IMG`).style.filter = `brightness(0.5)`;

            readSelection(`characterFiltersSwitchIcon${i}`).src = "/HonkaiSR/" + globalCharRef.preview;
            readSelection(`characterFiltersSwitchIcon${i}`).style.filter = `brightness(0.3)`;
            
        }
        readSelection(`teamBarChar${currentSlot}IMG`).style.filter = "brightness(1)";
        readSelection(`characterFiltersSwitchIcon${currentSlot}`).style.filter = "brightness(1)";

        readSelection("rotationsDisableCharacterToggle").checked = globalPathChar.disabled;
        // style="border: 2px solid #ffdb91;"

        readSelection("characterMainCenterImageOverview").src = "/HonkaiSR/" + charRef.portrait;
        // readSelection("characterMainCenterImageOverview").src = "/HonkaiSR/" + charRef.portrait;

        if (true) {
            let imageOffsetTest = charRef.bannerOffsets;
            readSelection("characterMainCenterImageOverview").style.transform = '';


            const dx = imageOffsetTest[0];
            const dy = -imageOffsetTest[1];

            const natHeight = 2160;//2160 //2048
            const natWidth = 3840;//3840 //2048

            const borderWidth = 0;

            const borderScalar = (natHeight + natWidth - borderWidth*4) / (natHeight + natWidth);
            const scale = imageOffsetTest[2]/borderScalar;

            // const gameWidth = 3840;
            // const gameWidth = 3840*3;
            const gameWidth = 3840; //for frib seems like no *3 would work
            const elemWidth = 500;

            const scalar = gameWidth/(elemWidth - borderWidth*(natHeight/natWidth));
            const shrunkenImageHeight = gameWidth * (natHeight/natWidth) * scalar;
            const finalDy = dy * (natHeight / shrunkenImageHeight);
            const finalDx = dx * (natWidth / gameWidth)/scalar;

            readSelection("characterMainCenterImageOverview").style.width = `100%`;
            if (imageOffsetTest.length) {
                // readSelection("characterMainCenterImageOverview").style.transform = `translate(${finalDx*3}px, ${finalDy*3}px) scale(${scale*3})`;
                readSelection("characterMainCenterImageOverview").style.transform = `scale(${scale*3}) translate(${finalDx*3}px, ${finalDy*3}px)`;
            }
            else {
                // console.log(imageOffsetTest)
                readSelection("characterMainCenterImageOverview").style.transform = `scale(${1.75})`;
            }
        }

        // "AvatarDropOffset": [
        //     -44,
        //     -134,
        //     0.64,
        //     -44,
        //     -134,
        //     0.64,
        //     -44,
        //     -134,
        //     0.64
        // ],







        readSelection("characterDisplayName").innerHTML = charRef.name;
        readSelection("characterDisplayElement").src = elementImagePaths[charRef.element];
        readSelection("characterDisplayPathName").innerHTML = charRef.path;
        readSelection("characterDisplayPathImage").src = pathImagePaths[charRef.path].small;
        readSelection("characterStarRatingImage").src = `/HonkaiSR/icon/deco/Star${charRef.rarity}.png`;


        readSelection("lightconeDisplayName").innerHTML = lightconeRef.name
        readSelection("lightconeDisplayPathName").innerHTML = lightconeRef.path;
        readSelection("lightconeDisplayPathImage").src = pathImagePaths[lightconeRef.path].small;
        readSelection("lightconeDisplaySkillName").innerHTML = lightconeRef.skillName;
        readSelection("lightconeSkillDescription").innerHTML = pagePopulation.cleanDescription(lightconeRef.params[globalPathChar.lcRank-1],lightconeRef.desc);
        

        readSelection("lightconeStarRatingImage").src = `/HonkaiSR/icon/deco/Star${lightconeRef.rarity}.png`;
        readSelection("characterMainCenterImageLightcone").src = "/HonkaiSR/" + lightconeRef.portrait;
        readSelection("characterDisplayLightconePreviewImageText").innerHTML = lightconeRef.name;

        //superimpositionButton1
        for (let i=1;i<=5;i++) {
            readSelection(`superimpositionButton${i}`).style.backgroundColor = "transparent";
            readSelection(`superimpositionButton${i}`).style.color = "#e1e1e4";
        }
        readSelection(`superimpositionButton${globalPathChar.lcRank}`).style.backgroundColor = "#e1e1e4";
        readSelection(`superimpositionButton${globalPathChar.lcRank}`).style.color = "black";

        for (let i=0;i<=6;i++) {
            readSelection(`eidolonRankButton${i}`).style.backgroundColor = "transparent";
            readSelection(`eidolonRankButton${i}`).style.color = "#e1e1e4";
        }
        readSelection(`eidolonRankButton${globalPathChar.rank}`).style.backgroundColor = "#e1e1e4";
        readSelection(`eidolonRankButton${globalPathChar.rank}`).style.color = "black";

    
        let src1 = "/HonkaiSR/" + lightconeRef.portrait;
        const topContainer = readSelection('testContainer');

        topContainer.innerHTML = "";
        const img = document.createElement('img');
        img.src = src1;
    
        const dx = lightconeRef.imageOffset[0];
        const dy = -lightconeRef.imageOffset[1];

        const natHeight = 1260;
        const natWidth = 904;
        const borderWidth = 14;

        const borderScalar = (natHeight + natWidth - borderWidth*4) / (natHeight + natWidth);
        const scale = lightconeRef.imageOffset[2]/borderScalar;

        const gameWidth = 520;
        const elemWidth = 247;

        const scalar = gameWidth/(elemWidth - borderWidth*(natHeight/natWidth));
        const shrunkenImageHeight = gameWidth * (natHeight/natWidth) * scalar;
        const finalDy = dy * (natHeight / shrunkenImageHeight);
        const finalDx = dx * (natWidth / gameWidth)/scalar;
        
        img.style.width = "100%";
        img.style.transform = `translate(${finalDx}px, ${finalDy}px) scale(${scale})`;
        topContainer.appendChild(img);

        //some shit I wrote out to help fribbels fix their LC offsets, then they didn't even care LMAO, is what it is
        // if (true) {
        //     // testContainer4 //240 by 280
        //     let src1 = "/HonkaiSR/" + lightconeRef.portrait;
        //     const fribSizeTest = readSelection('testContainer4');

        //     fribSizeTest.innerHTML = "";
        //     const testIMG = document.createElement('img');
        //     testIMG.src = src1;
        
        //     const dx = lightconeRef.imageOffset[0];
        //     let dy = -lightconeRef.imageOffset[1];


        //     // 404 x 128 is the width/height aspect ratio normally applied to game-matching offsets

        //     const natHeight = 1260;
        //     const natWidth = 904;
        //     const natBorder = 14;//all the portaits have that white border, and it DOES matter

        //     const borderScalar = (natHeight + natWidth - natBorder*4) / (natHeight + natWidth);
        //     const scale = lightconeRef.imageOffset[2]/borderScalar;

        //     const gameWidth = 520;
        //     //WIDTH AND HEIGHT HERE CAN BE ANYTHING BUT YOU DO NEED TO CLARIFY WHAT THEY ARE
        //     //so rn I'm using your "stat score only" dimensions
        //     //only diff from the prior example is now the height needs to specified, before it was just width
        //     const elemWidthYOURS = 240;
        //     const elemHeight = 280;

        //     const borderWidthSumYOURS = 0;//if you use borderbox and have a 2px border width, then this is a 4px sum
        //     const elemWidthAdjusted = (elemWidthYOURS-borderWidthSumYOURS)*borderScalar;

        //     const scalar = gameWidth/(elemWidthAdjusted - natBorder*(natHeight/natWidth));
        //     const beeg = gameWidth * (natHeight/natWidth) * scalar;
        //     let finalDy = dy * (natHeight / beeg);
        //     const finalDx = dx * (natWidth / gameWidth)/scalar;

        //     const fullyScaledHeight = elemWidthYOURS * (natHeight/natWidth) * scale * 0.5;
        //     const fullyScaledBorder = (natBorder*2.5)/natHeight * fullyScaledHeight;
        //     const halfContainerHeight = elemHeight * 0.5;

        //     if ((finalDy - halfContainerHeight) < -fullyScaledHeight + fullyScaledBorder) {
        //         finalDy += -((finalDy - halfContainerHeight) + fullyScaledHeight - fullyScaledBorder);
        //     }
        //     else if ((finalDy + halfContainerHeight) > +fullyScaledHeight - fullyScaledBorder) {
        //         finalDy += -((finalDy + halfContainerHeight) - fullyScaledHeight + fullyScaledBorder);
        //     }

            
        //     testIMG.style.width = "100%";
        //     testIMG.style.transform = `translate(${finalDx}px, ${finalDy}px) scale(${scale})`;//ORDER MATTERS HERE
        //     fribSizeTest.appendChild(testIMG);
        // }


        
        readSelection("traceMainBoxHolder").innerHTML = customHTML.trees[charRef.path](charRef);
        //trace tree construction handled in custom html, way too much to throw in here
        //and YES I made these manually, it sucked
        userTriggers.updateSelectedTraceDisplay(3);//default to ulty info selected when people open the trace menu or update anything related to the character
        


        readSelection("relicSetName1").innerHTML = globalPathChar.planar;
        readSelection("relicSetDesc1").innerHTML = "2-Pc: " + pagePopulation.cleanDescription(relicSets[globalPathChar.planar].params[0],relicSets[globalPathChar.planar].desc[0]);
        readSelection("relicSetIcon1").src = "/HonkaiSR/" + relicSets[globalPathChar.planar].icon;

        readSelection("relicSetName2").innerHTML = globalPathChar["2pc"];
        readSelection("relicSetDesc2").innerHTML = "2-Pc: " + pagePopulation.cleanDescription(relicSets[globalPathChar["2pc"]].params[0],relicSets[globalPathChar["2pc"]].desc[0]);
        readSelection("relicSetIcon2").src = "/HonkaiSR/" + relicSets[globalPathChar["2pc"]].icon;

        //if we have a full 4pc effect, there is no need to display a 3rd set name, so hide it if so
        if (globalPathChar["2pc"] === globalPathChar["4pc"]) {
            readSelection("relicSetName3").innerHTML = "";
            readSelection("relicsExtraSetNameHidden").style.display = "none";
            readSelection("relicSetIcon3").src = "/HonkaiSR/" + relicSets[globalPathChar["2pc"]].icon;

            readSelection("relicSetDesc3").innerHTML = "4-Pc: " + pagePopulation.cleanDescription(relicSets[globalPathChar["2pc"]].params[1],relicSets[globalPathChar["2pc"]].desc[1]);
        }
        else {
            readSelection("relicsExtraSetNameHidden").style.display = "flex";
            readSelection("relicSetIcon3").src = "/HonkaiSR/" + relicSets[globalPathChar["4pc"]].icon;

            readSelection("relicSetName3").innerHTML = globalPathChar["4pc"];
            readSelection("relicSetDesc3").innerHTML = "2-Pc: " + pagePopulation.cleanDescription(relicSets[globalPathChar["4pc"]].params[0],relicSets[globalPathChar["4pc"]].desc[0]);
        }




        let eidoRef = charRef.eidolons;
        let eidoString = ``;
        for (let entry of eidoRef) {
            eidoString += `
            <div class="eidolonRowBoxHolder" style="opacity:${globalPathChar.rank >= entry.rank ? 1 : 0.5}">
                <div class="eidolonRowIconHolder">
                    <img src="/HonkaiSR/${entry.icon}" class="eidolonRowIcon" id=""/>
                    <div class="eidolonRowName">${entry.name}</div>
                </div>
                <div class="rightDescriptionBoxEidolons smallFont">${entry.desc}</div>
            </div>
            `
        }
        readSelection("eidolonsMainBoxHolder").innerHTML = eidoString;






        let statBox = readSelection("characterDisplayStatsBasic");
        statBox.innerHTML = "";
        const menuBoxDisplayOrder = ["HPFinal","ATKFinal","DEFFinal","SPDFinal","CritRateFinal","CritDamageFinal"];
        statBox.innerHTML = customHTML.createAlternatingStatRows(menuBoxDisplayOrder,statTableRef.returnObject);

        statBox = readSelection("lightconeDisplayStatsBasic");
        statBox.innerHTML = "";
        


        const newLightconeBase = {};
        for (let entry in lightconeRef.baseStats) {
            newLightconeBase[greatTableIndex[entry]] = lightconeRef.baseStats[entry]
        }
        // const menuBoxDisplayOrder2 = ["HPBase","ATKBase","DEFBase"];
        const menuBoxDisplayOrder2 = [greatTableIndex["HPBase"],greatTableIndex["ATKBase"],greatTableIndex["DEFBase"]];
        statBox.innerHTML = customHTML.createAlternatingStatRows(menuBoxDisplayOrder2,newLightconeBase);

        statBox = readSelection("customMenuSearchBodyStats");
        statBox.innerHTML = "";
        // tableReference,returnObject
        // console.log(statTableRef.tableReference)
        const menuBoxDisplayOrder3 = [...Object.keys(statTableRef.tableReference),...Object.keys(statTableRef.returnObject)].sort();
        menuBoxDisplayOrder3.splice(0,1);
        statBox.innerHTML = customHTML.createAlternatingStatRows(menuBoxDisplayOrder3,{...statTableRef.tableReference,...statTableRef.returnObject},null,null,true);


        // characterName
        customHTML.megaRotationFuckery(characterName);


        if (globalUI.pageLoadIsDone && !silent) {
            userTriggers.getUpdatedBattleLog();
        }
    },
    getUpdatedBattleLog() {
        console.log("battle simulate start")
        // console.log(globalRecords.character.char4)
        // let battleData = sim.battleStart(globalRecords.character,true);

        // console.log(globalRecords.character.char1)
        const characterObject = globalRecords.character;
        for (let characterSlot in characterObject) {
            const currentChar = characterObject[characterSlot];

            const logicRef = turnLogic[currentChar.name];
            const ATKObjRef = logicRef?.ATKObjects;

            if (logicRef && ATKObjRef) {logicRef.ATKObjects = {}}
            // turnLogic[currentChar.name] ? turnLogic[currentChar.name].ATKObjects = {};
        }

        // globalRecords.character[charSlot].disabled

        const newBattleCharacterObject = {
            char1:{...characterObject.char1},
            ...(characterObject.char2.disabled ? {} : {char2:{...characterObject.char2}}),
            ...(characterObject.char3.disabled ? {} : {char3:{...characterObject.char3}}),
            ...(characterObject.char4.disabled ? {} : {char4:{...characterObject.char4}})

            // char1:{...characterObject.char1},
            // char2:{...characterObject.char2},
            // char3:{...characterObject.char3},
            // char4:{...characterObject.char4}
        };

        console.log(newBattleCharacterObject)

        let battleData = sim.battleStart(newBattleCharacterObject,true,null,globalRecords.battleSettings);
        globalRecords.battleData = battleData;

        //creates the action order on the left
        customMenu.insertLogActions(battleData.battleLog);
        


        //not gonna be necessary once we hook up more graphs later, but for now we log to console the tracking for debug purposes bc I'm too lazy to actually hook them up
        console.log(battleData.battleTotal);

        graphs.createSummaryDataCharts(battleData);
        //we default to the graph view whenever a new battle is generated, since new battles would mean new actions as mentioned above
        //and it wouldn't make sense to default view to the first action in a new battle instead of a summary graph

        if (globalUI.currentBattleViewDisplayType === "ActionExpand") {
            //had a complaint that people didn't like the refresh to graph view after changing a setting, this is just making so we only refresh to graph view if action view was selected
            //so after changing a setting, the settings menu will persist now
            userTriggers.updateBattleViewDisplayed("GraphExpand");
        }

        //redoes the default first action expanded, if you click on action details, since obv on a new battle we have new actions
        //would be weird af if we had old actions confusing peope
        userTriggers.expandBattleLog(globalUI.defaultActionIndex,true);

        //tracks whatever graph was last selected, and renews it for the current battle, doesn't strictly have to be summary data
        userTriggers.updateGraphViewDisplayed(globalUI.currentGraphViewDisplayType)
    },
    expandBattleLog(logIndex,silentUpdate) {
        let battleData = globalRecords.battleData;
        let logRef = battleData.battleLog;
        let currentAction = logRef[logIndex];

        let displayBox = readSelection("actionDetailMainHolderBox");

        let actionHeadersSorta = new Set ([
            "StartTurn",
            "UltimateStart",
            "ImmediateExtraTurn",
            // "ActionAdvanced",
            // "SpeedAdvanced",
            "FUAStart",
            "SkillStart",
            "MemoSkillStart",
            "BasicATKStart",
            "TechniqueStart",
            // "TalentStart",

            "BattlePrep",
            "BattleSettings",
            "EnterCombat",
            "WaveStart",
            "SummonOnFieldAdjustment"
        ]);
        // logToBattle(battleData,{logType: "SummonOnFieldAdjustment", summonWas: "Apply", assignedTo: sourceTurn.properName, summonedBy: sourceTurn.properName, isEnemy: false, isCharacter: true,eventOverrideImage: netherTurnObject.eventImage, AV: battleData.sumAV});

        displayBox.innerHTML = "";

        const dmgColorKeys = {
            "Imaginary": "#fddb4d",
            "Fire": "#F26C70",
            "Wind": "#48F1AE",
            "Quantum": "#7A6FFF",
            "Lightning": "#D758D9",
            "Ice": "#99dbe6",
            "Physical": "#dddddd",
            "True": "#DFBCEA",
        }


        function lineTypeDisplays(action,newIndex) {
            let currentType = action.logType;
            let turnRef = action.turnRef ? JSON.parse(action.turnRef) : null;
            let returnString = ``;

            // battleData.battleLog.push({logType: "EnergyChange", target: battleDataCharacterRow.properName, amount: (amount>0 ? newAmount : amount), oldEnergy, newEnergy:battleDataCharacterRow.currentEnergy, maximum, source:sourceName});


            const specialEnergyData = {
                //elements
                "Wind": {
                    energyColor1: "#7AFFD0",
                    energyColor2: "#0EA366"
                },
                "Ice": {
                    energyColor1: "#7AFFFF",
                    energyColor2: "#43B5E3"
                },
                "Physical": {
                    energyColor1: "#FFFFFF",
                    energyColor2: "#B9BABB"
                },
                "Imaginary": {
                    energyColor1: "#FFEC7D",
                    energyColor2: "#F7D551"
                },
                "Quantum": {
                    energyColor1: "#86A0FF",
                    energyColor2: "#2130BD"
                },
                "Fire": {
                    energyColor1: "#FF8B7F",
                    energyColor2: "#D4402F"
                },
                "Lightning": {
                    energyColor1: "#CC7CFF",
                    energyColor2: "#8E55FB"
                },


                //character specific
                "Castorice": {
                    energyName: "Newbuds",
                    energyColor1: "#856EFF",
                    energyColor2: "#EC97FF"
                },
                "Cyrene": {
                    energyName: "Recollection",
                    energyColor1: "#74C1FD",
                    energyColor2: "#705BFF"
                },



                
            }
            switch (currentType) {
                case "BattlePrep": 
                    returnString = `
                    <div class="actionDetailHeaderRow"><span class="detailHeaderName">Battle Prep</span></div>
                    <div class="actionDetailBody">Battle prep is the calc's time to create character/LC entries, construct buff handlers, so on and so forth.<br>Most often nothing will show up in events here but enemy creation, but there might be other random stuff that does too.</div>
                    `
                    break;
                case "BattleSettings": 
                    returnString = `
                    <div class="actionDetailHeaderRow"><span class="detailHeaderName">Battle Settings</span></div>
                    <div class="actionDetailBody">This section is for things that need to happen before combat starts. Examples would be Poet SPD checks, skill point max modifications, etc.</div>
                    `
                    break;
                case "EnterCombat": 
                    returnString = `
                    <div class="actionDetailHeaderRow"><span class="detailHeaderName">Enter Combat</span></div>
                    <div class="actionDetailBody">This step initiates all bonuses that are triggered in combat that don't show up in the main character menu stats. This step also triggers all non-damaging techniques (that you as the user enabled) before combat actually begins.</div>
                    `
                    break;
                case "StartTurn": 
                    // ({logType: "StartTurn", name:currentTurn, isEnemy: thisTurn.isEnemy, isCharacter, AV: battleData.sumAV, turnRef: JSON.stringify(thisTurn)});
                    let percentHPRemaining = (turnRef.currentHP/turnRef.maxHP) * 100;

                    // const customDisplayValuesLog = {
                    //     "Blade": [
                    //         {valueName: "Charge", refName: "charge", isBattleValue: true},
                    //         {valueName: "Hellscape", refName: "hellscapeActive", isBattleValue: true},
                    //         {valueName: "HP Tally", refName: "bladeHPTally", isBattleValue: false},
                    //     ]
                    // }

                    const isEnemy = turnRef.isEnemy;
                    const isEvent = turnRef.isUniqueEvent;
                    const isMemo = isEvent && turnRef.isMemosprite;

                    let customValuesString = "";
                    if (!isEnemy && !turnRef.isUniqueEvent) {
                        const customValues = customDisplayValuesLog[turnRef.properName];
                        if (customValues) {
                            for (let entry of customValues) {
                                const valueActual = entry.isBattleValue ? turnRef.battleValues[entry.refName] : turnRef[entry.refName];
                                let valueAdjusted = null;
                                const typeOfValue = typeof valueActual;

                                if (typeOfValue === "number") {valueAdjusted = valueActual.toLocaleString();}
                                else {valueAdjusted = valueActual;}

                                if (entry.isCharacterSlot && valueActual) {valueAdjusted = battleData.nameBasedTurns[valueActual].properName;}
                                if (entry.requiresEidolon && turnRef.rank < entry.requiresEidolon) {continue;}

                                customValuesString += `<div class="actionDetailBody">${entry.valueName}: ${valueAdjusted}</div>`
                            }
                        }
                    }


                    let shieldString = "";
                    const activeShields = turnRef.activeShields;
                    let strongestShield = null;
                    let shieldPercentage = 0;
                    for (let shield in activeShields) {
                        const currentShield = activeShields[shield];
                        if (!currentShield) {continue;}

                        if (!strongestShield) {strongestShield = currentShield;}
                        else if (currentShield.shieldRemaining > strongestShield) {strongestShield = currentShield;}
                    }
                    shieldPercentage = strongestShield ? strongestShield.shieldRemaining/strongestShield.shieldCap : 0;
                    shieldString += strongestShield ? `
                    <div class="buffNameBreakdownClickerHeaderBoxSHIELDROW">
                        <div class="buffShieldHealthDisplayFilled" style="width: ${shieldPercentage*100}%"></div>
                        <div class="buffShieldHealthDisplayMissing" style="width: ${100 - (shieldPercentage*100)}%"></div>
                        <div class="buffShieldHealthValueDisplay">Shield: ${strongestShield.shieldRemaining.toLocaleString()}/${strongestShield.shieldCap.toLocaleString()}</div>
                    </div>` : "";

                    let toughnessString = "";
                    let enemyPlacementString = "";
                    let weaknessString = `<div class="characterDisplayElementWeaknessIconHolderBox">`;
                    if (isEnemy) {
                        const currentToughness = turnRef.currentToughness;
                        const maxToughness = turnRef.maxToughness;
                        const toughnessRatio = currentToughness/maxToughness;

                        toughnessString += `
                        <div class="buffNameBreakdownClickerHeaderBoxTOUGHNESSROW">
                            <div class="buffToughnessHealthDisplayFilled" style="width: ${toughnessRatio*100}%"></div>
                            <div class="buffShieldHealthDisplayMissing" style="width: ${100 - (toughnessRatio*100)}%"></div>
                            <div class="buffToughnessHealthValueDisplay">Toughness: ${currentToughness.toLocaleString()}/${maxToughness.toLocaleString()}</div>
                        </div>`;

                        const enemyStatTable = turnRef.statTable;
                        for (let weaknessType in elementImagePaths) {
                            const currentWeakness = `Weakness${weaknessType}`;
                            if (enemyStatTable[greatTableIndex[currentWeakness]]) {
                                const imagePath = elementImagePaths[weaknessType];
                                weaknessString += `
                                <img src="${imagePath}" class="characterDisplayElementWeaknessIcon"/>`
                            }
                        }

                        const currentPosition = action.position;
                        const positionOf = action.positionCount;
                        enemyPlacementString += `<div class="characterDisplayEnemyLineupBarHeader">Position</div><div class="characterDisplayEnemyLineupBar">`;
                        for (let i=0;i<positionOf;i++) {
                            if (i===currentPosition) {
                                enemyPlacementString += `<div class="characterDisplayEnemyLineupCircleFill"></div>`;
                            }
                            else {
                                enemyPlacementString += `<div class="characterDisplayEnemyLineupCircleEmpty"></div>`;
                            }
                        }
                        enemyPlacementString += "</div>";
                    }
                    weaknessString += enemyPlacementString + "</div>";

                    
                    
                    // onclick="customMenu.createRelicSearchMenu(3)"
                    returnString = `
                    <div class="actionDetailHeaderRow"><span class="detailHeaderName">${action.name === "Little Ica" ? "Fat Fuck" : action.name}'s Turn Start</span><span class="detailHeaderAV">AV ${+action.AV.toFixed(7)}</span></div>
                    <div class="actionDetailHeaderRowCharacterImageBox">
                        <div class="actionDetailHeaderRowCharacterImageAndEnergyBox">
                            <img src="/HonkaiSR/${isEnemy ? graphs.enemyCustomImages?.[turnRef.enemyRealName] ?? action.name.toLowerCase().includes("boss") ? "misc/Glorpard.png" : graphs.enemyCustomImages.default : (characters[action.name]?.preview ?? graphs.summonCustomImages[action.name] ?? turnRef.eventImage)}" class="${isEnemy || turnRef.isUniqueEvent ? "actionDetailHeaderRowEnemyImage" : "actionDetailHeaderRowCharacterImage"}"/>

                            ${!isEnemy && (!turnRef.isSummon && !turnRef.isUniqueEvent) ? `
                            <div class="actionDetailHeaderRowCharacterEnergyBox" style="border:4px solid ${specialEnergyData[turnRef.specialEnergy ? turnRef.properName : turnRef.element].energyColor1}">
                                
                                <div class="actionDetailHeaderRowCharacterEnergyBoxEnergyShutter" 
                                style="height: ${
                                    (turnRef.specialEnergy ? turnRef.specialEnergyCurrent : turnRef.currentEnergy)
                                    /(turnRef.specialEnergy ? turnRef.specialEnergyMax : turnRef.maxEnergy) 
                                    * 100
                                }%;
                                background: linear-gradient(to bottom, ${specialEnergyData[turnRef.specialEnergy ? turnRef.properName : turnRef.element].energyColor2}, ${specialEnergyData[turnRef.specialEnergy ? turnRef.properName : turnRef.element].energyColor2}80);"></div>
                                ${customEnergyBar[action.name] ? customEnergyBar[action.name].fillFunction(turnRef) : ""}
                                <img src="/HonkaiSR/${characters[action.name].traces.Point03.icon}" class="actionDetailHeaderRowCharacterEnergyImage"/>

                                <div class="actionDetailHeaderRowCharacterEnergyValueBox">
                                    <div class="actionDetailHeaderRowCharacterEnergyValue">${(turnRef.specialEnergy ? turnRef.specialEnergyCurrent : turnRef.currentEnergy).toLocaleString()}/</div>
                                    <div class="actionDetailHeaderRowCharacterEnergyValue">${(turnRef.specialEnergy ? turnRef.specialEnergyMax : turnRef.maxEnergy).toLocaleString()}</div>
                                </div>
                            </div>` : ""}
                            ${isEnemy ? weaknessString : ""}
                            ${!isEvent || isMemo ? `<div class="characterSearchButtonDMGDetailsTurnInspect clickable" id="" onclick="customMenu.createCharacterStatScreenBattleLogged(${newIndex})">Inspect</div>` : ""}
                        </div>
                        <div class="actionDetailHeaderRowCharacterCustomValues">
                            <div class="actionDetailHeaderRowCharacterCustomValuesInner">
                                ${customValuesString}
                            </div>
                        </div>
                    </div>
                    ${toughnessString}
                    ${turnRef.currentHP ? `
                    <div class="buffNameBreakdownClickerHeaderBoxHEALTHROW">
                        <div class="healthDisplayFilled" style="width: ${percentHPRemaining}%"></div>
                        <div class="healthDisplayMissing" style="width: ${100 - percentHPRemaining}%"></div>
                        <div class="buffShieldHealthValueDisplay">HP: ${turnRef.currentHP.toLocaleString()}/${turnRef.maxHP.toLocaleString()}</div>
                    </div>` : ""}
                    ${shieldString}
                    <div class="actionDetailBody">Base AV: ${+turnRef.AVBase.toFixed(7)}</div>
                    `
                    break;
                case "TechniqueStart":
                case "MemoSkillStart":
                case "BasicATKStart": 
                case "SkillStart": 
                // case "TalentStart":
                    // battleData.battleLog.push({logType: "BasicATKStart", name:characterName, isEnemy: false, isCharacter: true, AV: battleData.sumAV});
                    returnString = `
                    <div class="actionDetailHeaderRow"><span class="detailHeaderName">${action.name}'s ${action.actionSlot} ${action.isEnhanced ? "Enhanced" : ""}</span><span class="detailHeaderAV">AV ${+action.AV.toFixed(7)}</span></div>
                    <div class="actionDetailBody">Target: ${action.target}</div>
                    `
                    break;
                case "FUAStart": 
                    // battleData.battleLog.push({logType: "FUAStart", name:currentUltimate.nameProper, target: currentUltimate.target, AV: battleData.sumAV, fuaName: currentFUA.attack.name});
                    returnString = `
                    <div class="actionDetailHeaderRow"><span class="detailHeaderName">${action.name}'s Follow-up Attack ${action.isEnhanced ? "Enhanced" : ""}</span><span class="detailHeaderAV">AV ${+action.AV.toFixed(7)}</span></div>
                    <div class="actionDetailBody">Target: ${action.target}</div>
                    <div class="actionDetailBody">Call: ${action.fuaName}</div>
                    `
                    break;
                case "ImmediateExtraTurn":
                    // logToBattle(battleData,{logType: "ImmediateExtraTurn", name:characterName, target, AV: currentAV, ultName: currentUltyFunction.name});
                    returnString = `
                    <div class="actionDetailHeaderRow"><span class="detailHeaderName">${action.name}'s Extra Turn ${action.isEnhanced ? "Enhanced" : ""}</span><span class="detailHeaderAV">AV ${+action.AV.toFixed(7)}</span></div>
                    <div class="actionDetailBody">Target: ${action.target}</div>
                    <div class="actionDetailBody">Call: ${action.ultName}</div>
                    `
                    break;
                case "WaveStart":
                    // if (battleData.isLoggyLogger) {logToBattle(battleData,{logType: "WaveStart",AV:battleData.sumAV,waveID: waveID});}
                    returnString = `
                    <div class="actionDetailHeaderRow"><span class="detailHeaderName">Begin Wave #${action.waveID}</span><span class="detailHeaderAV">AV ${+action.AV.toFixed(7)}</span></div>
                    `
                    break;
                case "UltimateStart": 
                    // battleData.battleLog.push({logType: "UltimateStart", name:currentUltimate.nameProper, target: currentUltimate.target, AV: battleData.sumAV, ultName: currentUltimate.attack.name});
                    returnString = `
                    <div class="actionDetailHeaderRow"><span class="detailHeaderName">${action.name}'s Ultimate ${action.isEnhanced ? "Enhanced" : ""}</span><span class="detailHeaderAV">AV ${+action.AV.toFixed(7)}</span></div>
                    <div class="actionDetailBody">Target: ${action.target}</div>
                    <div class="actionDetailBody">Call: ${action.ultName}</div>
                    `
                    break;
                case "ActionAdvancedBreakDelay":
                case "ActionAdvanced": 
                    // battleData.battleLog.push({logType: "ActionAdvanced", name:globalRecords.character[target].name, oldAV: oldAV, newAV:targetRef.AV});
                    returnString = `
                    <div class="actionDetailHeaderRow"><span class="detailHeaderName">${action.name}'s Action ${action.newAV > action.oldAV ? "Delayed" : "Advanced"}</span></div>
                    <div class="actionDetailBody">Action Value til next turn changed from ${+action.oldAV.toFixed(7)} --> ${+action.newAV.toFixed(7)}, Source: ${action.source}</div>
                    `
                    break;
                case "SpeedAdvanced":
                    // logToBattle(battleData,{logType: "SpeedAdvanced", name:targetRef.properName, oldAV: oldAVRemaining, newAV:targetRef.AV, source});
                    returnString = `
                    <div class="actionDetailHeaderRow"><span class="detailHeaderName">${action.name}'s SPD Change AV Alteration</span></div>
                    <div class="actionDetailBody">Target's SPD has changed. As such, the % difference between their old and new AV per turn is taken and applied to the remaining AV til their next turn.<br>As a % adjustment on an already existing value, this DOES mean that action advances caused by SPD changes will NEVER fully advance a target. This is why SPD advances are noted differently in the action order.</div>
                    <div class="actionDetailBody">Action Value til next turn changed from ${+action.oldAV.toFixed(7)} --> ${+action.newAV.toFixed(7)}, Source: ${action.source}</div>
                    <div class="actionDetailBody">AV per Turn(Old): ${+action.oldAVBase.toFixed(7)} --> AV per Turn(New): ${+action.newBase.toFixed(7)}</div>
                    <div class="actionDetailBody">SPD per Turn(Old): ${+action.oldSPD.toFixed(7)} --> SPD per Turn(New): ${+action.newSPD.toFixed(7)}</div>
                    `
                    break;
                case "EnemyDied":
                    // logToBattle(battleData,{logType: "EnemyDied", source:currentTurn.properName, enemyKilled:enemyDeath.properName});
                    returnString = `
                    <div class="actionDetailHeaderRow"><span class="detailHeaderName">${action.enemyKilled} died</span></div>
                    <div class="actionDetailBody">Energy awarded to ${action.source} for the kill</div>
                    <div class="actionDetailBody">If viewed from the action order, this death took place in the attack just prior on the list.</div>
                    <div class="actionDetailBody">Events triggered after the death of this target will still show within the bounds of the attack event that killed this target, to avoid breaking up the event log in ways that don't make sense</div>
                    `
                    break;
                case "EnergyChange":
                    // battleData.battleLog.push({logType: "EnergyChange", target: battleDataCharacterRow.properName, amount, oldEnergy, newEnergy:battleDataCharacterRow.currentEnergy, maximum, source:sourceName})
                    returnString = `<div class="turnOrderDisplayPreviewActionExpandRow">
                        <div class="turnOrderDisplayPreviewActionExpandRowIconBox">
                            <img src="/HonkaiSR/${characters[action.target].icon}" class="turnOrderDisplayPreviewActionExpandRowIcon"/>
                        </div>
                        <img src="${propertyImagePaths.EnergyRegen.icon}" class="characterDisplayLogStatIcon"/>
                        ${action.isOverflow ? "[OVERFLOW] " : ""}${+action.amount.toFixed(7)} || ${+action.oldEnergy.toFixed(7)}/${action.maximum} --> ${+action.newEnergy.toFixed(7)}/${action.maximum} ${action.source ? ` [${action.source}]` : ""}
                    </div>`;
                    // returnString = `<div class="actionDetailBody">
                    // <img src="${propertyImagePaths.EnergyRegen.icon}" class="characterDisplayLogStatIcon"/>
                    // --${action.target} ${action.amount>=0 ? "gained" : "lost"} ${+action.amount.toFixed(7)} energy. ${+action.oldEnergy.toFixed(7)}/${action.maximum} --> ${+action.newEnergy.toFixed(7)}/${action.maximum} ${action.source ? ` -- from ${action.source}` : ""}
                    // </div>`;
                    // console.log(`${battleDataCharacterRow.properName} Energy: ${battleDataCharacterRow.currentEnergy}/${battleDataCharacterRow.maxEnergy} ${sourceName ? `-- ${sourceName}` : ""}`);
                    break;
                case "SkillPointChange":
                    // logToBattle(battleData,{logType: "SkillPointChange", cost, oldSP, newSP, maximum, source:sourceName, sourceName:generalInfo.sourceName})
                    // returnString = `<div class="actionDetailBody">--Skill Points ${action.cost>=0 ? "+" : ""}${action.cost.toFixed(0)}. ${+action.oldSP.toFixed(7)}/${action.maximum} --> ${+action.newSP.toFixed(7)}/${action.maximum} ${action.sourceName ? ` -- from ${action.sourceName}` : ""}</div>`;
                    
                    let SPString = "";
                    const SPDiff = action.newSP - action.oldSP;
                    const potentialSPDiff = SPDiff<=0 ? action.newSP :  action.newSP - SPDiff;

                    for (let i=1;i<=potentialSPDiff;i++) {
                        SPString += `<img src="/HonkaiSR/misc/SkillPointIcon.png" class="characterDisplayLogStatIconSP"/>`;
                    }
                    if (SPDiff>0) {//tint blue for gains
                        for (let i=1;i<=Math.abs(SPDiff);i++) {
                            SPString += `<img src="/HonkaiSR/misc/SkillPointIcon.png" class="characterDisplayLogStatIconSP" style="filter: invert(56%) sepia(32%) saturate(745%) hue-rotate(127deg) brightness(201%) contrast(86%);"/>`;
                        }
                    }
                    else {//tint red for loss
                        for (let i=1;i<=Math.abs(SPDiff);i++) {
                            SPString += `<img src="/HonkaiSR/misc/SkillPointIcon.png" class="characterDisplayLogStatIconSP" style="filter: invert(32%) sepia(8%) saturate(3763%) hue-rotate(314deg) brightness(100%) contrast(95%);"/>`;
                        }
                    }
                    
                    const SPToMax = action.maximum - (action.newSP + (SPDiff>0 ? 0 : -SPDiff));
                    for (let i=1;i<=SPToMax;i++) {
                        SPString += `<img src="/HonkaiSR/misc/SkillPointIcon.png" class="characterDisplayLogStatIconSP" style="filter: invert(100%);"/>`;
                    }

                    //gain  #3DB0A8
                    //loss  #9D423F
                    // sepia(63%) saturate(528%) hue-rotate(356deg)

                    // filter: brightness(0)
                    returnString = `<div class="turnOrderDisplayPreviewActionExpandRow">
                        <div class="turnOrderDisplayPreviewActionExpandRowIconBox">
                            <img src="/HonkaiSR/${characters[action.source].icon}" class="turnOrderDisplayPreviewActionExpandRowIcon"/>
                        </div>
                        ${SPString}
                        
                        
                        <div class="actionDetailBody">
                        ${+action.newSP.toFixed(7)}/${action.maximum} ${action.sourceName ? `  [${action.sourceName}]` : ""}</div>
                    </div>`;
                    
                    
                    break;
                case "ActionChosen":
                    // battleData.battleLog.push({logType: "ActionChosen", actionType: designatedAction.action, on:designatedAction.target, actionCall: designatedAction.actionCall, source: charName});
                    returnString = `<div class="actionDetailBody">--Action Queued: ${action.actionType} on ${action.on} ${action.source ? ` -- from ${action.source}` : ""} -- call: ${action.actionCall}</div>`;
                    break;
                case "QueueFUA":
                    // battleData.battleLog.push({logType: "QueueFUA", name: entry.name});
                    returnString = `<div class="actionDetailBody">--Queued Follow-up attack from: ${action.name}</div>`;
                    break;
                case "QueueUltimate":
                    // logToBattle(battleData,{logType: "QueueUltimate", name: entry.name, isExtraTurn: entry.isExtraTurn});
                    returnString = `<div class="actionDetailBody">--Queued ${action.isExtraTurn ? "Immediate Extra-Turn" : "Ultimate"} from: ${action.name}</div>`;
                    break;
                case "BuffApply":
                    let applyType = action.applicationType;
                    let actionVerb = "";
                    if (applyType === "Apply") {actionVerb = "Applied";}
                    else if (applyType === "Stack") {actionVerb = "Stacked";}
                    else if (applyType === "Renew") {actionVerb = "Renewed";}

                    // graphs.enemyCustomImages[]
                    // enemyRealName: isEnemy ? sourceTurn.enemyRealName : null,
                    // sourceOwner: buffSheet.sourceOwner
                    // console.log(action)
                    returnString = `<div class="turnOrderDisplayPreviewActionExpandRow">
                        ${action.sourceOwner != action.name ? `<div class="turnOrderDisplayPreviewActionExpandRowIconBox">
                            <img src="/HonkaiSR/${characters[action.sourceOwner] ? characters[action.sourceOwner].icon : (graphs.summonCustomImages[action.sourceOwner] ?? graphs.enemyCustomImages.default)}" class="turnOrderDisplayPreviewActionExpandRowIcon"/>
                        </div>` : ""}
                        <img src="/HonkaiSR/misc/UpArrowBuffGain.png" class="characterDisplayLogStatIcon"/>
                        <div class="turnOrderDisplayPreviewActionExpandRowIconBox">
                            ${action.name.toLowerCase().includes("enemy") ? `
                                <img src="/HonkaiSR/${graphs.enemyCustomImages[action.name] ?? graphs.enemyCustomImages.default}" class="turnOrderDisplayPreviewActionExpandRowIconEnemy"/>` :
                            `<img src="/HonkaiSR/${characters[action.name]?.icon ?? graphs.summonCustomImages[action.name]}" class="turnOrderDisplayPreviewActionExpandRowIcon"/>`}
                        </div>
                        
                        
                        <div class="actionDetailBody">
                        ${actionVerb}${action.isShield ? ` [SHIELD ${action.oldShield.toLocaleString()} --> ${action.newShield.toLocaleString()}/${action.shieldCap.toLocaleString()}]` : ""} "${action.buffName}" (${action.stacks} stack${action.stacks>1 ? "s" : ""}) -- Source: ${action.source}</div>
                    </div>`;

                    // // isShield:currentReference.isShield,oldShield,newShield:currentReference.shieldRemaining,shieldCap:currentReference.shieldCap
                    // returnString = `<div class="actionDetailBody">--${actionVerb}${action.isShield ? ` [SHIELD ${action.oldShield.toLocaleString()} --> ${action.newShield.toLocaleString()}/${action.shieldCap.toLocaleString()}]` : ""} buff "${action.buffName}" --> ${action.name} (${action.stacks} stack${action.stacks>1 ? "s" : ""}) -- Source: ${action.source}</div>`;
                    // // battleData.battleLog.push({logType: "BuffApply", buffname, applicationType: "Apply", name:targetData.properName, source: buffSheet.source, AV: battleData.sumAV, stacks: timesToApply});
                    // // console.log(`${+battleData.sumAV.toFixed(3)} Applied buff "${buffname}" --> ${buffSheet.target} (${buffRef[buffname].currentStacks}) source: ${buffSheet.source}`);
                    break;
                case "BuffRemove":
                    // returnString = `<div class="actionDetailBody">--Lost${action.isShield ? ` [SHIELD]` : ""} buff "${action.buffName}" --> ${action.name} (${action.stacks} stack${action.stacks>1 ? "s" : ""}) -- Source: ${action.source}</div>`;
                    // console.log(action.buffName,action)
                    returnString = `<div class="turnOrderDisplayPreviewActionExpandRow">
                        ${action.sourceOwner != action.name ? `<div class="turnOrderDisplayPreviewActionExpandRowIconBox">
                                <img src="/HonkaiSR/${characters[action.sourceOwner] ? characters[action.sourceOwner].icon : (graphs.summonCustomImages[action.sourceOwner] ?? graphs.enemyCustomImages.default)}" class="turnOrderDisplayPreviewActionExpandRowIcon"/>
                            </div>` : ""}
                        <img src="/HonkaiSR/misc/DownArrowBuffLoss.png" class="characterDisplayLogStatIcon"/>
                        <div class="turnOrderDisplayPreviewActionExpandRowIconBox">
                            ${action.name.toLowerCase().includes("enemy") ? `
                                <img src="/HonkaiSR/${graphs.enemyCustomImages[action.name] ?? graphs.enemyCustomImages.default}" class="turnOrderDisplayPreviewActionExpandRowIconEnemy"/>` :
                            `<img src="/HonkaiSR/${characters[action.name]?.icon ?? graphs.summonCustomImages[action.name]}" class="turnOrderDisplayPreviewActionExpandRowIcon"/>`}
                        </div>
                        
                        <div class="actionDetailBody">
                        ${action.isShield ? ` [SHIELD]` : ""} "${action.buffName}" (${action.stacks} stack${action.stacks>1 ? "s" : ""}) -- Source: ${action.source}</div>
                    </div>`;


                    // battleData.battleLog.push({logType: "BuffRemove", buffname, name:targetData.properName, source: buffSheet.source, AV: battleData.sumAV, stacks: buffRef[buffname].currentStacks});
                    // console.log(`${+battleData.sumAV.toFixed(3)} Removed buff "${buffname}" --> ${buffRef[buffname].target} (${buffRef[buffname].currentStacks}) source: ${buffRef[buffname].source}`);
                    break;
                case "GenericAction":
                    returnString = `<div class="actionDetailBody">--${action.bodyText} -- Source: ${action.source}</div>`;
                    // battleData.battleLog.push({logType: "GenericAction", source:this.listenerName, bodyText: "Skill Point Max +2"});
                    break;
                case "GenericActionWithImage":
                    // returnString = `<div class="actionDetailBody">--${action.bodyText} -- Source: ${action.source}</div>`;

                    returnString = `<div class="turnOrderDisplayPreviewActionExpandRow">
                        <div class="turnOrderDisplayPreviewActionExpandRowIconBox">
                            <img src="/HonkaiSR/${characters[action.sourceName].icon}" class="turnOrderDisplayPreviewActionExpandRowIcon"/>
                        </div>
                        <img src="${action.imagePath}" class="characterDisplayLogStatIcon"/>
                        <div class="actionDetailBody">${action.bodyText}</div>
                    </div>`;

                    // battleData.battleLog.push({logType: "GenericAction", source:this.listenerName, bodyText: "Skill Point Max +2"});
                    break;
                case "RecoveredFromBreak":
                    returnString = `<div class="actionDetailBody">--${action.name} recovered from Weakness Break</div>`;
                    // if (isLoggyLogger) {logToBattle(battleData,{logType: "RecoveredFromBreak", name:turnName, isEnemy: sourceTurn.isEnemy, isCharacter:true, AV: battleData.sumAV, turnRef: null});}
                    break;
                case "EnemyDiedNote":
                    returnString = `<div class="actionDetailBody">--${action.enemyKilled} was killed.</div>`;
                    // logToBattle(battleData,{logType: "EnemyDiedNote", enemyKilled:enemyDeath.properName});
                    break;
                case "HitAlly":
                case "HitEnemy":
                    let hitData = action.hitData;
                    // let hitData = {
                    //     scalar: ATKObject.scalar,
                    //     currentSplit,currentMulti,multiOf,tags,
                    //     DMGTotalEnd,DMGTotalCrit,DMGTotalAVG,DMGOverkill,
                    //     enemyIsDead,enemyIsBroken,toughnessBase,overBreak,
                    //     playerData: JSON.stringify(currentTurn),
                    //     enemyData: JSON.stringify(enemyTurn),
                    //     AV:battleData.sumAV
                    // }
                    // logToBattle(battleData,{logType: "HitEnemy", hitType: superString, target: targetTurn.properName, source:charName, hitData:hitDataBreakSuper,enemyIsDead,sourceString:sourceName});


                    // element

                    // <span style="color: ;"></span>
                    // DOT
                    const colorOpening = `<span style="${hitData.element ? `color:${dmgColorKeys[hitData.element]};` : ""}">`;
                    // console.log(hitData)
                    const colorClose = `</span>`
                    if (action.hitType && action.hitType === "SuperBreak") {
                        returnString = `<div class="actionDetailBody" ${action.enemyIsDead ? `style="color:lightcoral"` : ""}>
                            <div class="characterSearchButtonDMGDetails clickable" id="" onclick="customMenu.createCharacterStatScreenBattleLogged(${newIndex})">Details</div>
                            <div class="actionDetailBodyInner">${action.sourceString ? `[${action.sourceString}] ` : ""}${action.source} ${action.enemyIsDead ? "[KILL] " : ""}[SUPER BREAK]- DMG: ${colorOpening}${hitData.DMGTotalEndBreak.toLocaleString()}${colorClose} --> ${action.target}</div>
                        </div>`;
                    }
                    else if (action.hitType && action.hitType === "Break") {
                        returnString = `<div class="actionDetailBody" ${action.enemyIsDead ? `style="color:lightcoral"` : ""}>
                            <div class="characterSearchButtonDMGDetails clickable" id="" onclick="customMenu.createCharacterStatScreenBattleLogged(${newIndex})">Details</div>
                            <div class="actionDetailBodyInner">${action.sourceString ? `[${action.sourceString}] ` : ""}${action.source} ${action.enemyIsDead ? "[KILL] " : ""}[BREAK]- DMG: ${colorOpening}${hitData.DMGTotalEndBreak.toLocaleString()}${colorClose} --> ${action.target}</div>
                        </div>`;
                    }
                    // DMGTotalEnd,DMGTotalAVG,DMGOverkill,averaged
                    else if (action.hitType && action.hitType === "DOT") {
                        returnString = `<div class="actionDetailBody" ${action.enemyIsDead ? `style="color:lightcoral"` : ""}>
                            <div class="characterSearchButtonDMGDetails clickable" id="" onclick="customMenu.createCharacterStatScreenBattleLogged(${newIndex})">Details</div>
                            <div class="actionDetailBodyInner">${action.source} ${action.enemyIsDead ? "[KILL] " : ""}[DOT] ${colorOpening}[${hitData.element}]${colorClose} - DMG:${colorOpening}${hitData.DMGTotalEnd.toLocaleString()}${colorClose} (AVG:${colorOpening}${hitData.DMGTotalAVG.toLocaleString()}${colorClose}) --> ${action.target}</div>
                        </div>`;
                    }
                    else {
                        returnString = `<div class="actionDetailBody" ${action.enemyIsDead ? `style="color:lightcoral"` : ""}>
                            <div class="characterSearchButtonDMGDetails clickable" id="" onclick="customMenu.createCharacterStatScreenBattleLogged(${newIndex})">Details</div>
                            <div class="actionDetailBodyInner">${action.sourceString ? `[${action.sourceString}] ` : ""}${action.source} ${action.enemyIsDead ? "[KILL] " : ""}${action.enemyIsBroken ? "[BREAK]" : ""}- ${hitData.currentSplit ? `${+(hitData.currentSplit*100).toFixed(2)}% `: ""}${action.hitType} DMG: ${colorOpening}${hitData.DMGTotalEnd.toLocaleString()}${colorClose}/${colorOpening}${hitData.DMGTotalCrit.toLocaleString()}${colorClose} (AVG ${colorOpening}${hitData.DMGTotalAVG.toLocaleString()}${colorClose})--> ${action.target}</div>
                        </div>`;
                    }
                    // battleData.battleLog.push({logType: "HitEnemy", hitType: "Single Target", target: enemyPrimary.properName, source:charName, hitData});
                    // logToBattle(battleData,{logType: "HitEnemy", hitType: "Additional", target: enemyTurn.properName, source:charName, hitData,enemyIsDead,sourceString});
                    break;
                case "AttackStart":
                    returnString = `
                        <div class="actionDetailBody">Attack started...</div>
                        <details class="actionDetailBodyDetailExpand">
                        <summary class="actionDetailBodyDetailExpandHeaderBackground clickable">Toggle per-hit Details & Sub-Events</summary>`;
                    // battleData.battleLog.push({logType: "AttackStart"});
                    break;
                case "AttackEnd":
                    returnString = `</details><div class="actionDetailBody">Attack finished, ${action.totalHits} hit${action.totalHits>1 ? "s" : ""} for ${action.totalAVGDMG.toLocaleString()} AVG Total DMG</div>`;
                    // battleData.battleLog.push({logType: "AttackEnd", totalHits, totalAVGDMG});
                    break;
                case "HealAllyStart":
                    returnString = `
                        <div class="actionDetailBody">Healing started...</div>
                        <details class="actionDetailBodyDetailExpand">
                        <summary class="actionDetailBodyDetailExpandHeaderBackground clickable">Toggle per-target Details & Sub-Events</summary>`;
                    // logToBattle(battleData,{logType: "HealAllyStart"});
                    break;
                case "HealAllyEnd":
                    returnString = `</details><div class="actionDetailBody">Healing finished, ${action.targetsHealed} target healed for ${action.totalHeal.toLocaleString()} Total</div>`;
                    // logToBattle(battleData,{logType: "HealAllyEnd", targetsHealed, totalHeal});
                    break;
                case "HealAlly":
                    let hitDataHealing = action.hitData; //#C4FE50
                    const healColorOpening = `<span style="color:#C4FE50;">`;
                    const healColorClose = `</span>`;
                    // returnString = `<div class="actionDetailBody">
                    //     <div class="characterSearchButtonDMGDetails clickable" id="" onclick="customMenu.createCharacterStatScreenBattleLogged(${newIndex})">Details</div>
                    //     ${action.source} healed ${action.target} for&nbsp;${healColorOpening}${hitDataHealing.totalHealed.toLocaleString()}${healColorClose} ${hitDataHealing.overHeal ? `(Overheal ${hitDataHealing.overHeal.toLocaleString()})` : ""}
                    // </div>`;

                    returnString = `<div class="turnOrderDisplayPreviewActionExpandRow">

                        <div class="characterSearchButtonDMGDetails clickable" id="" onclick="customMenu.createCharacterStatScreenBattleLogged(${newIndex})">Details</div>

                        
                            ${action.target != action.source ? `<div class="turnOrderDisplayPreviewActionExpandRowIconBox">
                                <img src="/HonkaiSR/${characters[action.source] ? characters[action.source].icon : (graphs.summonCustomImages[action.source] ?? graphs.enemyCustomImages.default)}" class="turnOrderDisplayPreviewActionExpandRowIcon"/>
                            </div>` : ""}
                        
                        <img src="/HonkaiSR/misc/IconHealRatio.png" class="characterDisplayLogStatIcon"/>
                        <div class="turnOrderDisplayPreviewActionExpandRowIconBox">
                            ${action.target.toLowerCase().includes("enemy") ? `
                                <img src="/HonkaiSR/${graphs.enemyCustomImages[action.target] ?? graphs.enemyCustomImages.default}" class="turnOrderDisplayPreviewActionExpandRowIconEnemy"/>` :
                            `<img src="/HonkaiSR/${characters[action.target]?.icon ?? graphs.summonCustomImages[action.target]}" class="turnOrderDisplayPreviewActionExpandRowIcon"/>`}
                        </div>
                        
                        
                        <div class="actionDetailBody">
                            for&nbsp;${healColorOpening}${hitDataHealing.totalHealed.toLocaleString()}${healColorClose} ${hitDataHealing.overHeal ? `(Overheal ${hitDataHealing.overHeal.toLocaleString()})` : ""}
                        </div>

                    </div>`;

                    // logToBattle(battleData,{logType: "HealAlly", target: targetTurn.properName, source:sourceTurn.properName, hitData});
                    break;
                case "EnemyCreated":
                    let enemyData = JSON.parse(action.turnRef);
                    // battleData.battleLog.push({logType: "EnemyCreated", name:slot, AV: battleData.sumAV, turnRef: JSON.stringify(battleData.enemyBasedTurns[slot])});
                    returnString = `<div class="actionDetailBody">Created "${enemyData.properName}" in slot: ${enemyData.name} - AV: ${+action.AV.toFixed(7)}</div>`;
                    break;
                case "ConsumeHPStart":
                    returnString = `
                        <div class="actionDetailBody">HP Consume started...</div>
                        <details class="actionDetailBodyDetailExpand">
                        <summary class="actionDetailBodyDetailExpandHeaderBackground clickable">Toggle per-consume Details & Sub-Events</summary>`;
                    // battleData.battleLog.push({logType: "AttackStart"});
                    break;
                case "ConsumeHPEnd":
                    returnString = `</details><div class="actionDetailBody">Consume finished, drained a total of ${action.totalEaten.toLocaleString()} HP</div>`;
                    // battleData.battleLog.push({logType: "AttackEnd", totalHits, totalAVGDMG});
                    break;
                case "ConsumeHP":
                    // if (logger) {logToBattle(battleData,{logType: "ConsumeHP", name:sourceTurn.properName, amountEaten, target:ally.properName, isEnemy: false, isCharacter: true, AV: battleData.sumAV, actionSlot:skillRef.slot});}
                    returnString = `<div class="actionDetailBody">
                        --${action.name} drained ${action.target} for ${action.amountEaten.toLocaleString()} HP
                    </div>`;
                    // battleData.battleLog.push({logType: "HitEnemy", hitType: "Single Target", target: enemyPrimary.properName, source:charName, hitData});
                    // logToBattle(battleData,{logType: "HitEnemy", hitType: "Additional", target: enemyTurn.properName, source:charName, hitData,enemyIsDead,sourceString});
                    break;
   
            }
            // <details>
            // <summary>Click to expand</summary>
            // <div class="panel">
            //     <p>Content inside the expandable box.</p>
            // </div>
            // </details>

            return returnString;
        }

        displayBox.innerHTML += lineTypeDisplays(currentAction,logIndex);

        let eventsString = ``;
        let eventOpen = `<div class="actionDetailBodyEvent">`;
        let eventClose = `</div>`;
        let skipEventBody = false;

        let awkwardLogTypes = {
            "EnemyDied": 1,
            "SpeedAdvanced": 1,
            "ActionAdvancedBreakDelay": 1,
            "ActionAdvanced": 1,
        }

        if (!awkwardLogTypes[currentAction.logType]) {
            //spd advance can happen in the middle of an attack, which fucks things up a bit UI-wise
            for (let i=logIndex+1;i<logRef.length;i++) {
                let newAction = logRef[i];

                // let postActionSPDModifications 
                if (actionHeadersSorta.has(newAction.logType)) {break;}
                else {
                    if (awkwardLogTypes[newAction.logType]) {continue;}
                    eventsString += lineTypeDisplays(newAction,i)
                }
            }
        }
        else {skipEventBody = true;}

        if (eventsString === "") {
            eventsString += `<div class="actionDetailBody">No sub events were triggered by the parent event<br><br>Parent events would be attacks, ultimates, or other definitive actions. Sub events would be the results of a parent action like energy gains, skill point changes, buff applications/removals, or damage dealt.</div>`
        }
        if (!skipEventBody) {
            displayBox.innerHTML += `<br><div class="actionDetailHeaderRow">Events</div>` + eventOpen + eventsString + eventClose;
        }
        if (!silentUpdate && logIndex != null) {
            userTriggers.updateBattleViewDisplayed("ActionExpand");
        }
    },
    exportCharacterData(charSlot) {
        if (charSlot === "ALL") {
            userTriggers.copyToClipboard(globalRecords.character);
        }
        else {
            const currentCharacter = globalRecords.character[charSlot];
            userTriggers.copyToClipboard(currentCharacter);
        }
    },
    importCharacterData(charSlot) {
        const inputElem = readSelection("importTextInputTeam");
        if (inputElem.value === "") {return;}
        const parsedData = JSON.parse(inputElem.value);

        if (charSlot === "ALL") {
            globalRecords.character = parsedData;

            for (let i=1;i<=4;i++) {
                // const trimmedNumber = +charSlot.replace("char","");
                userTriggers.updateCharacterSlotSelected(i);
                userTriggers.updateCharacterBreakdownClicked(i);
                userTriggers.updateSelectedCharacter(globalRecords.character[`char${i}`].name);
                userTriggers.updateSelectedTraceDisplay(3);//default to ulty on page load, otherwise the trace desc right side will be empty, and that's fuckin weird
                userTriggers.updateSelectedRelicStats();
            }
        }
        else {
            const characterName = parsedData.name;
            const characterObject = globalRecords.character;

            const slot1Conflict = characterObject.char1.name === characterName && charSlot != "char1";
            const slot2Conflict = characterObject.char2.name === characterName && charSlot != "char2";
            const slot3Conflict = characterObject.char3.name === characterName && charSlot != "char3";
            const slot4Conflict = characterObject.char4.name === characterName && charSlot != "char4";

            const conflictExists = slot1Conflict || slot2Conflict || slot3Conflict || slot4Conflict;

            if (conflictExists) {
                inputElem.value = "";
                alert(`Cannot input duplicate characters into multiple slots.\n\nConflicting character slot: ${slot1Conflict ? "char1" : ""}${slot2Conflict ? "char2" : ""}${slot3Conflict ? "char3" : ""}${slot4Conflict ? "char4" : ""}`);
                return;
            }

            globalRecords.character[charSlot] = parsedData;
            const trimmedNumber = +charSlot.replace("char","");
            userTriggers.updateCharacterSlotSelected(trimmedNumber);
            userTriggers.updateCharacterBreakdownClicked(trimmedNumber);
            userTriggers.updateSelectedCharacter(globalRecords.character[charSlot].name);
            userTriggers.updateSelectedTraceDisplay(3);//default to ulty on page load, otherwise the trace desc right side will be empty, and that's fuckin weird
            userTriggers.updateSelectedRelicStats();
            
            userTriggers.updateMainMenuDisplayed(1);
        }

        inputElem.value = "";

        customMenu.createCharacterExportScreen();
        // userTriggers.updateSelectedCharacter(globalRecords.character.char1.name);
        // userTriggers.updateSelectedRelicStats();
    },
    exportCharacterDataFilter(charSlot) {
        if (charSlot === "ALL") {
            userTriggers.copyToClipboard(globalUI.filters);
        }
        else {
            const currentCharacter = globalUI.filters[charSlot];
            userTriggers.copyToClipboard(currentCharacter);
        }
    },
    importCharacterDataFilter(charSlot) {
        const inputElem = readSelection("importTextInputTeam");
        if (inputElem.value === "") {return;}
        const parsedData = JSON.parse(inputElem.value);

        if (charSlot === "ALL") {
            globalUI.filters = parsedData;
        }
        else {
            globalUI.filters[charSlot] = parsedData;
        }


        userTriggers.renewFiltersDisplayValues();
        // updateCharacterSlotSelected(slot) {
        //     globalUI.currentCharacterDisplayed = slot;
        //     let charSlot = `char${slot}`;
    
        //     userTriggers.updateCharacterUI(updateFormulas(charSlot),slot,true);
        //     userTriggers.updateSelectedRelicStats();
        // },

        

        inputElem.value = "";
        // userTriggers.updateSelectedCharacter(globalRecords.character.char1.name);
        // userTriggers.updateSelectedRelicStats();
    },

    exportWaveData(waveSlot) {
        const battleSettings = globalRecords.battleSettings;
        if (waveSlot === "ALL") {
            let exportArray = [];
            for (let i=1;i<=battleSettings.totalWaves;i++) {
                exportArray.push(battleSettings[`waveArray${i}`]);
            }
            //waveArray entries are each distinct keys within battleSettings, not an array of arrays, but for the sake of bundling an entire battle's waves into one export, we can just do this
            userTriggers.copyToClipboard(exportArray);
        }
        else {
            const extractRef = battleSettings[`waveArray${waveSlot}`];
            userTriggers.copyToClipboard(extractRef);
        }
    },
    importWaveData(waveSlot) {
        const inputElem = readSelection("importTextInputTeam");
        const battleSettings = globalRecords.battleSettings;
        if (inputElem.value === "") {return;}
        const parsedData = JSON.parse(inputElem.value);
        inputElem.value = "";
        
        if (!Array.isArray(parsedData)) {
            alert("You can't import a single enemy export into a Wave import. Back out of this menu and import in the Add Enemy menu instead.\n\nIf you see this menu and you are positive that you are importing a wave array instead of an enemy object, join the discord linked at the bottom and ping Vash to let him know.");
            return;
            //enemy exports are done as objects, waves are exported as arrays, so just prevent anyone from importing anything that isn't an array
        }

        const addWave = userTriggers.addEnemyToWave;
        if (waveSlot === "ALL") {
            for (let i=1;i<=battleSettings.totalWaves;i++) {
                const isBeyondImportedLength = i > parsedData.length;
                if (isBeyondImportedLength) {break;}

                const currentWaveArray = parsedData[i-1];
                battleSettings[`waveArray${i}`] = currentWaveArray;
                addWave(i,null,true);
            }
        }
        else {
            battleSettings[`waveArray${waveSlot}`] = parsedData;
            addWave(waveSlot,null,true);
        }

        

        userTriggers.updateQuerySearchSettings(true);
    },
    useResultOnCurrentTeam(resultIndex) {
        const globalResults = globalRecords.resultsStorage;
        const currentResult = globalResults[resultIndex];
        const characterObject = currentResult.characterObject;


        const parsedData = JSON.parse(JSON.stringify(characterObject));
        globalRecords.character = parsedData;

        for (let i=1;i<=4;i++) {
            // const trimmedNumber = +charSlot.replace("char","");
            userTriggers.updateCharacterSlotSelected(i);
            userTriggers.updateCharacterBreakdownClicked(i);
            userTriggers.updateSelectedCharacter(globalRecords.character[`char${i}`].name);
            userTriggers.updateSelectedTraceDisplay(3);//default to ulty on page load, otherwise the trace desc right side will be empty, and that's fuckin weird
            userTriggers.updateSelectedRelicStats();
        }
    },

    renewFiltersDisplayValues(isSubstatChange,substatChanged) {


        const filterSet = [
            {tableName: "lightconeOcclusions",tableElem: "lightconeOcclusionsContainer"},
            {tableName: "armorSetOcclusions",tableElem: "armorSetOcclusionsContainer"},
            {tableName: "planarSetOcclusions",tableElem: "planarSetOcclusionsContainer"},
            {tableName: "mainstatBodyOcclusions",tableElem: "mainstatBodyOcclusionsContainer"},
            {tableName: "mainstatFeetOcclusions",tableElem: "mainstatFeetOcclusionsContainer"},
            {tableName: "mainstatOrbOcclusions",tableElem: "mainstatOrbOcclusionsContainer"},
            {tableName: "mainstatRopeOcclusions",tableElem: "mainstatRopeOcclusionsContainer"},
            // {tableName: "substatOcclusions",tableElem: "substatOcclusionsContainer"},

            {tableName: "lightconeLocks",tableElem: "lightconeLocksContainer"},
            {tableName: "armorSetLocks2pc",tableElem: "armorSetLocks2pcContainer"},
            {tableName: "armorSetLocks4pc",tableElem: "armorSetLocks4pcContainer"},
            {tableName: "planarSetLocks",tableElem: "planarSetLocksContainer"},
            {tableName: "mainstatBodyLocks",tableElem: "mainstatBodyLocksContainer"},
            {tableName: "mainstatFeetLocks",tableElem: "mainstatFeetLocksContainer"},
            {tableName: "mainstatOrbLocks",tableElem: "mainstatOrbLocksContainer"},
            {tableName: "mainstatRopeLocks",tableElem: "mainstatRopeLocksContainer"},
        ];
        const occlusionToggles = [
            {tableName: "lightcone",tableElem: "lightconeOcclusion"},
            {tableName: "armorSet",tableElem: "armorSetOcclusion"},
            {tableName: "armorSetAllow2pc",tableElem: "armorSetAllow2pcOcclusion"},
            {tableName: "planarSet",tableElem: "planarSetOcclusion"},
            {tableName: "mainstatBody",tableElem: "mainstatBodyOcclusion"},
            {tableName: "mainstatFeet",tableElem: "mainstatFeetOcclusion"},
            {tableName: "mainstatOrb",tableElem: "mainstatOrbOcclusion"},
            {tableName: "mainstatRope",tableElem: "mainstatRopeOcclusion"},

            
            // {tableName: "substat",tableElem: "substatOcclusion"},
        ];

        const populate = customHTML.populateFilters;
        for (let filterData of filterSet) {
            populate(filterData.tableElem,filterData.tableName);
        }
        
        const updateToggle = customHTML.updateOcclusionDisplay;//updateOcclusion;
        for (let toggleEntry of occlusionToggles) {
            updateToggle(toggleEntry.tableName,toggleEntry.tableElem)
        }

        const slot = globalUI.currentCharacterDisplayed;
        let charSlot = `char${slot}`;
        const charName = globalRecords.character[charSlot].name;
        const charMaslowMain = maslow[charName];
        const maslowSubstats = charMaslowMain.defaultMainSubs;
        const maslowTrashStats = charMaslowMain.defaultTrashSub;

        const reverseKeyMappings = basicShorthand.reverseKeyMappings;
        const mappedFamilies = basicShorthand.mappedFamilies;

        // mappedFamilies: {},
        // mappedCacheTags: {},
        // mappedUpdateStatKeys: {},
        // reverseKeyMappings: {},
        for (let i=1;i<=4;i++) {
            const maslowSlot = maslowSubstats[i-1];
            // console.log(maslowSlot,maslowSubstats)

            const currentStatIndex = greatTableIndex[maslowSlot];
            const statFamilyName = mappedFamilies[currentStatIndex];
            const currentStatFamily = propertyImagePaths[statFamilyName];
            // console.log(maslowSubstats,maslowSlot,currentStatFamily,statFamilyName,currentStatIndex)
            const currentFamilySet = currentStatFamily.sets;

            // defaultMainSubs: ["ATK%","CritRateBase","CritDamageBase","SPDFlat"],
            
            readSelection(`substatLocksStat${i}IMG`).src = currentStatFamily.icon;
            readSelection(`substatLocksStat${i}Name`).innerHTML = currentFamilySet[currentStatIndex].specific;
            // console.log("reached")

            
        }


        let trashSubString = "";

        for (let i=0;i<maslowTrashStats.length;i++) {
            const currentStatInternal = maslowTrashStats[i];
            const isLastStat = i === maslowTrashStats.length - 1;

            const currentStatIndex = greatTableIndex[currentStatInternal];
            const statFamilyName = mappedFamilies[currentStatIndex];
            const currentStatFamily = propertyImagePaths[statFamilyName];
            // console.log(maslowSubstats,maslowSlot,currentStatFamily,statFamilyName,currentStatIndex)
            const currentFamilySet = currentStatFamily.sets;

            trashSubString += currentFamilySet[currentStatIndex].specific + (isLastStat ? "" : " > ");
        }
        readSelection("statFiltersRowContainerSubstatsTrashRow").innerHTML = trashSubString;


        const filterPath = globalUI.filters;
        // const slot = globalUI.currentCharacterDisplayed;
        // let charSlot = `char${slot}`;
        const currentCharFilters = filterPath[charSlot];

        //limit the max value by 0-30
        const min = Math.min;
        const max = Math.max;
        const floor = Math.floor;

        const subsPath = relics.Head.subAffix;
        const querySettings = globalRecords.querySettings;
        const substatRollValue = querySettings.substatRollValue;
        const rollValueStepMulti = substatRollValue === "High" ? 2 : (substatRollValue === "Mid" ? 1 : 0);

        const usableBaseRolls = querySettings.usableBaseRolls;
        const basePerRelic = usableBaseRolls/4;
        // "usableBaseRolls": 12,

        // substatLocksStat1BaseRolls
        for (let i=1;i<=4;i++) {
            const statElemMax = readSelection(`substatLocksStat${i}Max`);
            const statElemMin = readSelection(`substatLocksStat${i}Min`);

            const statArray = currentCharFilters[`substat${i}`] ??= [];
            if (isSubstatChange && i === substatChanged) {statArray[1] = max(0,min(30,floor(+statElemMax.value)));}
            
            statElemMax.value = statArray[1];

            if (isSubstatChange && i === substatChanged) {statArray[0] = max(0,min(statArray[1],floor(+statElemMin.value)));}
            
            statElemMin.value = statArray[0];

            const maslowSlot = maslowSubstats[i-1];
            // console.log(maslowSlot)

            const subsPathInner = subsPath[maslowSlot];
            const valuePerRoll = subsPathInner.base + (subsPathInner.step * rollValueStepMulti);


            const baseDisplay = readSelection(`substatLocksStat${i}BaseRolls`);
            baseDisplay.innerHTML = "Base: x" + basePerRelic;
            const totalBaseValue = basePerRelic * valuePerRoll;

            // "usableBaseRolls": 12,
            // "ATKFlat": {
            //     "base": 16.935019,
            //     "step": 2.116877,
            //     "stepsPossible": 2,
            //     "stepRatio": 8,
            //     "bounds": [
            //         16.935019,
            //         127.012638
            //     ]
            // },


            // "querySettings": {
            //     "enforceBattlesWon": false,

            //     "substatRollValue": "Mid",
            //     "rollsPerRelic": 4,
            //     "rollsPerBundle": 2,
            //     "usableBaseRolls": 12,
            //     "failedAddedRolls": 1,
            //     "minimumAddedRoll": 1,

            //     "keepLightconeRank": false,
            // },
            



            const statElemMaxDisplay = readSelection(`substatLocksStat${i}MaxDisplay`);
            const statElemMinDisplay = readSelection(`substatLocksStat${i}MinDisplay`);

            statElemMaxDisplay.innerHTML = (totalBaseValue + valuePerRoll * statArray[1]).toLocaleString(undefined, { maximumFractionDigits: 5 });
            statElemMinDisplay.innerHTML = (totalBaseValue + valuePerRoll * statArray[0]).toLocaleString(undefined, { maximumFractionDigits: 5 });
        }

        // substatLocksStat1IMG
        // substatLocksStat1Name
    },
    async copyToClipboard(fullObject) {
        let stringified = JSON.stringify(fullObject)
        try {
            await navigator.clipboard.writeText(stringified);
            alert("Copied to clipboard");
        }
        catch (error) {console.error("Failed to copy:",error);}
    },
    "battleModeAVConversions": {
        "MOC": {
            hasCycles: true,
            startingCycle: 150,
            afterCycles: 100,
        },
        "AS": {
            hasCycles: false,
            startingCycle: 2000,
            afterCycles: null,
        }
    },
    updateQuerySearchSettings(isBattleSetting) {
        const querySettings = globalRecords.querySettings;
        const battleSettings = globalRecords.battleSettings;

        // battleSettings.enemiesArray = [
        //     // {entry:"GenericBoss", weaknesses: "All"},
        //     // {entry:"GenericBoss", weaknesses: "None"},
        //     // {entry:"GenericElite", weaknesses: "None"},
        //     // {entry:"GenericElite", weaknesses: "All"},

        //     //CALYX CRIMSON
        //     {entry:"GenericMinion", weaknesses: null,weaknessOverrides: {"Lightning": true,"Ice":true,"Quantum":true},resistantTo: {}},
        //     // {entry:"GenericMinion", weaknesses: null,weaknessOverrides: {"Lightning": true,"Wind":false,"Quantum":false}, resistantTo: {"Wind":true}},
        //     {entry:"GenericMinion2", weaknesses: null,weaknessOverrides: {"Physical": true,"Wind":true,"Ice":true,},resistantTo: {}},
        //     {entry:"GenericMinion2", weaknesses: null,weaknessOverrides: {"Physical": true,"Wind":true,"Ice":true,},resistantTo: {}},

        //     //STAGNANT SHADOW - ICE - SHAPE OF RHIME
        //     // {entry:"Everwinter Shadewalker", weaknesses: null,weaknessOverrides: {"Physical": true,"Fire":true,"Quantum":true,},resistantTo: {"Ice":true,}},
        //     // {entry:"Frigid Prowler", weaknesses: null,weaknessOverrides: {"Lightning": true,"Fire":true,"Quantum":true},resistantTo: {"Ice":true,}},
        //     // {entry:"Everwinter Shadewalker", weaknesses: null,weaknessOverrides: {"Physical": true,"Fire":true,"Quantum":true,},resistantTo: {"Ice":true,}},


        //     // //MOC6
        //     // {entry:"MOC6SwordBoi", weaknesses: null,weaknessOverrides: {"Ice": true,"Fire":true,"Quantum":true}, resistantTo: {"Wind":true}},
        //     // {entry:"MOC6SwordBoi", weaknesses: null,weaknessOverrides: {"Ice": true,"Fire":true,"Quantum":true}, resistantTo: {"Wind":true}},
        //     // {entry:"MOC6Fish", weaknesses: null,weaknessOverrides: {"Physical": true,"Lightning":true,"Imaginary":true},resistantTo: {}},
        //     // {entry:"MOC6Fish", weaknesses: null,weaknessOverrides: {"Physical": true,"Lightning":true,"Imaginary":true},resistantTo: {}},
            
        // ]





        const cycleMode = readSelection("queriesModeSelector").value;
        battleSettings.cycleMode = cycleMode;
        readSelection("queriesBattleSummaryMode").innerHTML = cycleMode;

        //cycles to evaluate in the queries
        const cycleValue = +readSelection("queriesCycleCountSlider").value;
        battleSettings.cyclesToRun = cycleValue;
        const currentAVConversion = userTriggers.battleModeAVConversions[cycleMode];
        readSelection("cyclesToRunQueriesDisplay").innerHTML = cycleValue;
        readSelection("queriesBattleSummaryCycles").innerHTML = currentAVConversion.hasCycles ? cycleValue : "N/A";




        const queries4starSuperValue = +readSelection("queries4starSuperValue").value;
        readSelection("queries4starSuperValueDisplay").innerHTML = queries4starSuperValue;
        querySettings.queries4starSuperValue = queries4starSuperValue;

        const queries5starHertaValue = +readSelection("queries5starHertaValue").value;
        readSelection("queries5starHertaValueDisplay").innerHTML = queries5starHertaValue;
        querySettings.queries5starHertaValue = queries5starHertaValue;

        const queries5starSuperValue = +readSelection("queries5starSuperValue").value;
        readSelection("queries5starSuperValue").innerHTML = queries5starSuperValue;
        querySettings.queries5starSuperValue = queries5starSuperValue;

        // <div class="statFiltersRowHeader" id="enemyWaveHolder5Header">
        //     Wave 5
        //     <div class="addEnemyToWaveButton clickable" onclick="customMenu.createAddedEnemyMenu(5)">Add Enemy</div>
        // </div>
        // <div class="enemyWaveSummaryHolder" id="enemyWaveHolder2"></div>





        const totalWaves = +readSelection("queriesTotalWavesSlider").value;
        readSelection("queriesTotalWavesDisplay").innerHTML = totalWaves;
        battleSettings.totalWaves = totalWaves;

        // console.log(totalWaves)
        for (let i=2;i<=5;i++) {
            readSelection(`enemyWaveHolder${i}Header`).style.display = "none";
            readSelection(`enemyWaveHolder${i}`).style.display = "none";
        }

        for (let i=2;i<=totalWaves;i++) {
            readSelection(`enemyWaveHolder${i}Header`).style.display = "flex";
            readSelection(`enemyWaveHolder${i}`).style.display = "flex";
        }


        
        

        readSelection("queriesBattleSummaryAV").innerHTML = currentAVConversion.hasCycles ? currentAVConversion.startingCycle + currentAVConversion.afterCycles * cycleValue : currentAVConversion.startingCycle;
        // queriesBattleSummaryAV
        //TODO: later just go into the battlestart wrapper and have the first cycle AV + subsequent cycle AV values change based on the mode selected


        //queriesBattlesWonEnforce
        const enforceBattlesWon = readSelection("queriesBattlesWonEnforce").checked;
        querySettings.enforceBattlesWon = enforceBattlesWon;

        const useTechniques = readSelection("queriesUseTechniques").checked;
        battleSettings.useTechniques = useTechniques;
        readSelection("queriesBattleSummaryTechniques").innerHTML = useTechniques;

        if (useTechniques) {readSelection("queriesSettingsTechniquesBox").style.display = "flex";}
        else {readSelection("queriesSettingsTechniquesBox").style.display = "none";}

        const useTechniquesChar1 = readSelection("queriesUseTechniquesChar1").checked;
        const useTechniquesChar2 = readSelection("queriesUseTechniquesChar2").checked;
        const useTechniquesChar3 = readSelection("queriesUseTechniquesChar3").checked;
        const useTechniquesChar4 = readSelection("queriesUseTechniquesChar4").checked;
        battleSettings.useTechniquesChar1 = useTechniquesChar1;
        battleSettings.useTechniquesChar2 = useTechniquesChar2;
        battleSettings.useTechniquesChar3 = useTechniquesChar3;
        battleSettings.useTechniquesChar4 = useTechniquesChar4;


        const useStartToughness = readSelection("queriesUseStartToughness").checked;
        battleSettings.useStartToughness = useStartToughness;



        const substatRollValue = +readSelection("queriesSubstatRollValue").value;
        const substatRollValueDisplayArray = ["Low","Mid","High"];
        const substatRollValueDisplayColors = ["orange","rgb(144, 238, 144)","rgb(224, 102, 102)"];
        const baseRollValueDisplayColors = ["rgb(144, 238, 144)","orange","rgb(224, 102, 102)","rgb(224, 102, 102)"];

        // style="color: rgb(224, 102, 102);"
        //orange
        //color: rgb(144, 238, 144);
        //color: rgb(147, 204, 234);

        readSelection("queriesSubstatRollValueDisplay").innerHTML = substatRollValueDisplayArray[substatRollValue];
        readSelection("queriesSubstatRollValueDisplay").style.color = substatRollValueDisplayColors[substatRollValue];
        querySettings.substatRollValue = substatRollValueDisplayArray[substatRollValue];

        readSelection("substatsLocksRollValueDisplay").innerHTML = substatRollValueDisplayArray[substatRollValue];
        readSelection("substatsLocksRollValueDisplay").style.color = substatRollValueDisplayColors[substatRollValue];

        const rollsPerRelic = +readSelection("queriesRollsPerRelic").value;
        querySettings.rollsPerRelic = rollsPerRelic;
        readSelection("queriesRollsPerRelicDisplay").innerHTML = rollsPerRelic;
        readSelection("queriesRollsPerRelicDisplay").style.color = substatRollValueDisplayColors[rollsPerRelic-3];
        // queriesRollsPerRelic rollsPerRelic

        // const rollsPerBundle = +readSelection("queriesRollsPerBundle").value;
        // querySettings.rollsPerBundle = rollsPerBundle;
        // readSelection("queriesRollsPerBundleDisplay").innerHTML = rollsPerBundle;
        // readSelection("queriesRollsPerBundleDisplay").style.color = substatRollValueDisplayColors[2 - rollsPerBundle + 1];
        // // queriesRollsPerBundle queriesRollsPerBundleDisplay


        // queriesUsableBaseRolls queriesUsableBaseRollsDisplay usableBaseRolls
        const usableBaseRolls = +readSelection("queriesUsableBaseRolls").value;
        querySettings.usableBaseRolls = usableBaseRolls;
        readSelection("queriesUsableBaseRollsDisplay").innerHTML = usableBaseRolls;
        readSelection("queriesUsableBaseRollsDisplay").style.color = baseRollValueDisplayColors[(usableBaseRolls/4) - 3];



        // queriesFailedAddedRolls queriesFailedAddedRollsDisplay failedAddedRolls
        const failedAddedRolls = +readSelection("queriesFailedAddedRolls").value;
        querySettings.failedAddedRolls = failedAddedRolls;
        readSelection("queriesFailedAddedRollsDisplay").innerHTML = failedAddedRolls;
        readSelection("queriesFailedAddedRollsDisplay").style.color = substatRollValueDisplayColors[2-failedAddedRolls]


        readSelection("finalBaseRollsSettings").innerHTML = usableBaseRolls + "/24";
        readSelection("finalAddedRollsSettings").innerHTML = ((rollsPerRelic - failedAddedRolls)*6) + "/" + (rollsPerRelic * 6);
        readSelection("finalUsableTotalSettings").innerHTML = ((rollsPerRelic - failedAddedRolls)*6 + usableBaseRolls) + "/" + (rollsPerRelic * 6 + 24)


        // const minimumAddedRoll = +readSelection("queriesMinimumAddedRoll").value;
        // querySettings.minimumAddedRoll = minimumAddedRoll;
        // readSelection("queriesMinimumAddedRollDisplay").innerHTML = minimumAddedRoll;


        const keepLightconeRank = readSelection("queriesKeepLightconeRank").checked;
        querySettings.keepLightconeRank = keepLightconeRank;


        const ignoreQueryLimit = readSelection("bypassLimit").checked;
        querySettings.ignoreQueryLimit = ignoreQueryLimit;


        // rotationsDisableCharacterToggle

        const characterIsIgnored = readSelection("rotationsDisableCharacterToggle").checked;

        const slot = globalUI.currentCharacterDisplayed;
        const charSlot = `char${slot}`;
        globalRecords.character[charSlot].disabled = characterIsIgnored;
        // console.log(globalRecords.character[charSlot])

        if (isBattleSetting) {userTriggers.getUpdatedBattleLog()}
    }
}

const pagePopulation = {
    populateQueryOptions() {
        const populate = customHTML.populateGear;//(elemID,object);



        const populationList = [
            {elemID: "filterTagList", collection: maslowDisplayTagsReversed},

            {elemID: "armorSetOcclusionsList", collection: finalSets.bodySets},
            // {elemID: "substatOcclusionsList", collection: relics['Link Rope'].subAffix, isStatName:true},

            {elemID: "armorSetLocks2pcList", collection: finalSets.bodySets},
            {elemID: "armorSetLocks4pcList", collection: finalSets.bodySets},//armorSetLocks2pc
            

            // {elemID: "filterTagList", collection: maslowFrontFacingTags}
        ]

        const filterDualDefinitions = [
            {elemIDBase: "mainstatBody", collection: relics.Body.mainAffix, isStatName:true},
            {elemIDBase: "mainstatFeet", collection: relics.Feet.mainAffix, isStatName:true},
            {elemIDBase: "mainstatOrb", collection: relics["Planar Sphere"].mainAffix, isStatName:true},
            {elemIDBase: "mainstatRope", collection: relics["Link Rope"].mainAffix, isStatName:true},
            
            {elemIDBase: "lightcone", collection: lightcones},
            {elemIDBase: "planarSet", collection: finalSets.planarSets},


            // finalSets.bodySets

            
        ];//mainstatRopeLocksList
        for (let dualDefinition of filterDualDefinitions) {
            populationList.push(
                {elemID: `${dualDefinition.elemIDBase}OcclusionsList`, collection: dualDefinition.collection, isStatName:dualDefinition.isStatName},//just reg inclusion/exclusions
                {elemID: `${dualDefinition.elemIDBase}LocksList`, collection: dualDefinition.collection, isStatName:dualDefinition.isStatName}
            )
        }

        for (let option of populationList) {
            // console.log(option.elemID)
            populate(option.elemID,option.collection,option.isStatName);
        }

    },
    cleanDescription(array,desc) {
        //if we have something like "Increases the wearer's CRIT DMG by #1[i]%" then this finds the 1, and replaces it with value 0(1-0) in the related array
        // const replaced = desc.replace(/#(\d+)\[.*?\]/g, (_, index) => {
        //     return array[Number(index-1)];
        // });
        const replaced = desc.replace(/#(\d+)\[.*?\](%?)/g, (_, index, percent) => {
            let value = Number(array[index-1]);       // get value from array
            if (percent === "%") value = `${(value*100).toFixed(2)}%`;  // multiply by 100 if % exists
            return `<span class="descriptionNumberColor">${value}</span>`;
        });

        return replaced.replace(/\\n/g, "<br>");
    },
    // "dataListsList": [
    //     {"Name": "characterList", "DataSet": characters},
    //     {"Name": "characterWeaponList", "DataSet": sniperList},

    //     // {"Name": "reactorList", "DataSet": helmets},
    //     // {"Name": "auxiliaryList", "DataSet": helmets},
    //     // {"Name": "sensorList", "DataSet": helmets},
    //     // {"Name": "memoryList", "DataSet": helmets},
    //     // {"Name": "processorList", "DataSet": helmets},
    //     {"Name": "mod1List", "DataSet": augments},
    //     {"Name": "mod2List", "DataSet": subAttacks},
    //     {"Name": "mod3List", "DataSet": modData},
    //     {"Name": "mod4List", "DataSet": modData},
    //     {"Name": "mod5List", "DataSet": modData},
    //     {"Name": "mod6List", "DataSet": modData},
    //     {"Name": "mod7List", "DataSet": modData},
    //     {"Name": "mod8List", "DataSet": modData},
    //     {"Name": "mod9List", "DataSet": modData},
    //     {"Name": "mod10List", "DataSet": modData},
    //     {"Name": "mod11List", "DataSet": modData},
    //     {"Name": "mod12List", "DataSet": modData},

    //     {"Name": "mod21List", "DataSet": highPowerRounds},
    //     {"Name": "mod22List", "DataSet": highPowerRounds},
    //     {"Name": "mod23List", "DataSet": highPowerRounds},
    //     {"Name": "mod24List", "DataSet": highPowerRounds},
    //     {"Name": "mod25List", "DataSet": highPowerRounds},
    //     {"Name": "mod26List", "DataSet": highPowerRounds},
    //     {"Name": "mod27List", "DataSet": highPowerRounds},
    //     {"Name": "mod28List", "DataSet": highPowerRounds},
    //     {"Name": "mod29List", "DataSet": highPowerRounds},
    //     {"Name": "mod30List", "DataSet": highPowerRounds},

    //     // {"Name": "reactorAttributeList", "DataSet": attributeList},
    //     // {"Name": "reactorTypeList", "DataSet": typeList},

    //     {"Name": "reactorSub1List", "DataSet": reactorSubRolls},
    //     {"Name": "reactorSub2List", "DataSet": reactorSubRolls},

    //     {"Name": "auxiliaryList", "DataSet": auxiliary},
    //     {"Name": "auxiliarySub1List", "DataSet": auxiliaryRolls},
    //     {"Name": "auxiliarySub2List", "DataSet": auxiliaryRolls},

    //     {"Name": "sensorList", "DataSet": sensor},
    //     {"Name": "sensorSub1List", "DataSet": sensorRolls},
    //     {"Name": "sensorSub2List", "DataSet": sensorRolls},

    //     {"Name": "memoryList", "DataSet": memory},
    //     {"Name": "memorySub1List", "DataSet": memoryRolls},
    //     {"Name": "memorySub2List", "DataSet": memoryRolls},

    //     {"Name": "processorList", "DataSet": processor},
    //     {"Name": "processorSub1List", "DataSet": processorRolls},
    //     {"Name": "processorSub2List", "DataSet": processorRolls},

    //     {"Name": "weaponSub1List", "DataSet": weaponSubstatList},
    //     {"Name": "weaponSub2List", "DataSet": weaponSubstatList},
    //     {"Name": "weaponSub3List", "DataSet": weaponSubstatList},
    //     {"Name": "weaponSub4List", "DataSet": weaponSubstatList},

    //     {"Name": "bossList", "DataSet": bosses},
    // ],
    populateGear(elemID,collection) {
        const select = readSelection(elemID);
        // if (collection != traits) {
          for (const gear in collection) {
            if (collection.hasOwnProperty(gear)) {
              const option = document.createElement("option");
              option.text = gear;
              select.appendChild(option);
            }
          }
        // }
        // else {
        //   for (const gear in collection) {
        //     if (collection.hasOwnProperty(gear)) {
        //       let matchFound = false;
        //       for (let i=1;i<=globalRecords.greatTraitRecords.length;i++) {
        //         if (gear === globalRecords.greatTraitRecords[i-1].name && gear && `trait${i}` != elemID) {
        //           matchFound = true;
        //           break;
        //         }
        //       }
        //       if (matchFound===false) {
        //         const option = document.createElement("option");
        //         option.text = gear;
        //         select.appendChild(option);
        //       }
        //     }
        //   }
        // }
    },
    populateGearRestricted(elemID,collection,restrictionName) {
        const select = readSelection(elemID);
        // if (collection != traits) {
          for (const gear in collection) {
            if (collection.hasOwnProperty(gear)) {
                let current = collection[gear]
                // console.log(current)
                //if the inclusion restriction is NOT met, then skip this mod entry
                if (current.inclusion.length) {
                    let inclusionSet = new Set(current.inclusion);
                    if (!inclusionSet.has(restrictionName)) {continue}
                }
                //but if the exclusion restriction IS met, then skip it as well
                else if (current.exclusion.length) {
                    let exclusionSet = new Set(current.exclusion);
                    if (exclusionSet.has(restrictionName)) {continue}
                }

                //otherwise add the option
                const option = document.createElement("option");
                option.text = gear;
                select.appendChild(option);
            }
          }
    },
    pagePopulation() {
        let populate = pagePopulation.populateGear;
        for (let entry of pagePopulation.dataListsList) {
            populate(entry.Name,entry.DataSet);
        }
    },
}

const formulasValues = {
    "relicPartNames": ["Head","Hands","Body","Feet","Sphere","Rope"],
    //Shorthand for looping through an elements "stats" object and adding it to the corresponding master value

    pullStats(index,path) {
        for (let elements in path) {
            index[greatTableIndex[elements]] += path[elements];
        }
    },
    pullStatsArray(index,pathsArray) {
        let arrayCheck = Array.isArray;
        for (let path of pathsArray) {
        for (let elements in path) {
            let pathElement = path[elements];
            if (arrayCheck(pathElement)) {index[elements] *= 1 + pathElement[0]}
            else {index[elements] += pathElement}
        }
        }
    },
    rollValueConversion: {
        "Low": 0,
        "Mid": 1,
        "High": 2,
    },
    pullBaseStats(index,characterRef,querySettingsOverride) {
        //character base stats
        let charRef = characters[characterRef.name];
        let pullChar = charRef.baseStats;
        const pullStats = formulasValues.pullStats;
        pullStats(index,pullChar);
        //traces
        let traceRef = charRef.traces;
        let traceKeys = Object.keys(traceRef);
        for (let trace of traceKeys) {
            let currentTrace = traceRef[trace];
            if (currentTrace.stats) {pullStats(index,currentTrace.stats);}
        }

        //lightcone base stats
        let pullLC = lightcones[characterRef.lcName];
        pullStats(index,pullLC.baseStats);
        //lightcone unconditional bonuses
        if (charRef.path === pullLC.path) {
            pullStats(index,pullLC.fixedStats[characterRef.lcRank]);
        }

        const HeadMain = characterRef.HeadMain;
        index[greatTableIndex[HeadMain]] += relics.Head.mainAffix[HeadMain].maxed;
        const HandsMain = characterRef.HandsMain;
        index[greatTableIndex[HandsMain]] += relics.Hands.mainAffix[HandsMain].maxed;
        const BodyMain = characterRef.BodyMain;
        index[greatTableIndex[BodyMain]] += relics.Body.mainAffix[BodyMain].maxed;
        const FeetMain = characterRef.FeetMain;
        index[greatTableIndex[FeetMain]] += relics.Feet.mainAffix[FeetMain].maxed;
        const SphereMain = characterRef.SphereMain;
        index[greatTableIndex[SphereMain]] += relics["Planar Sphere"].mainAffix[characterRef.SphereMain].maxed;
        const RopeMain = characterRef.RopeMain;
        index[greatTableIndex[RopeMain]] += relics["Link Rope"].mainAffix[RopeMain].maxed;
        

        if (querySettingsOverride) {//this is for query/search cycles when users are doing searches, where we base substats off of roll counts instead of hardset values specified by the user
            const substatRollValue = querySettingsOverride.substatRollValue;
            const substatRef = relics.Head.subAffix;
            const stepConversion = formulasValues.rollValueConversion;
            const currentStepCount = stepConversion[substatRollValue];

            const charTable = characterRef.statObject;
            for (let entry in charTable) {
                const currentRollValue = charTable[entry];
                const currentSubRef = substatRef[entry];

                // console.log(currentRollValue,currentSubRef)
                index[greatTableIndex[entry]] += currentRollValue * (currentSubRef.base + currentSubRef.step * currentStepCount);

                // console.log(greatTableIndex[entry],(currentRollValue * (currentSubRef.base + currentSubRef.step * currentStepCount)),currentSubRef,currentRollValue)





                //this way we take the total rolls assigned to a given stat, and multiply it by the base roll amount + whatever amount the user specified for the steps, being low mid or high
            }
            // "HPFlat": {
            //     "base": 33.87004,
            //     "step": 4.233755,
            //     "stepsPossible": 2,
            //     "stepRatio": 8,
            //     "bounds": [
            //     33.87004,
            //     254.0253
            //     ]
            // },
            //Low, Mid, or High
        }
        else {
            //this is when we do a cycle for the battle sim that users can see, or we are modifying stats for the team input UI
            index[greatTableIndex[characterRef.Head1Stat]] += characterRef.Head1Value;
            index[greatTableIndex[characterRef.Head2Stat]] += characterRef.Head2Value;
            index[greatTableIndex[characterRef.Head3Stat]] += characterRef.Head3Value;
            index[greatTableIndex[characterRef.Head4Stat]] += characterRef.Head4Value;

            index[greatTableIndex[characterRef.Hands1Stat]] += characterRef.Hands1Value;
            index[greatTableIndex[characterRef.Hands2Stat]] += characterRef.Hands2Value;
            index[greatTableIndex[characterRef.Hands3Stat]] += characterRef.Hands3Value;
            index[greatTableIndex[characterRef.Hands4Stat]] += characterRef.Hands4Value;

            index[greatTableIndex[characterRef.Body1Stat]] += characterRef.Body1Value;
            index[greatTableIndex[characterRef.Body2Stat]] += characterRef.Body2Value;
            index[greatTableIndex[characterRef.Body3Stat]] += characterRef.Body3Value;
            index[greatTableIndex[characterRef.Body4Stat]] += characterRef.Body4Value;

            index[greatTableIndex[characterRef.Feet1Stat]] += characterRef.Feet1Value;
            index[greatTableIndex[characterRef.Feet2Stat]] += characterRef.Feet2Value;
            index[greatTableIndex[characterRef.Feet3Stat]] += characterRef.Feet3Value;
            index[greatTableIndex[characterRef.Feet4Stat]] += characterRef.Feet4Value;

            index[greatTableIndex[characterRef.Sphere1Stat]] += characterRef.Sphere1Value;
            index[greatTableIndex[characterRef.Sphere2Stat]] += characterRef.Sphere2Value;
            index[greatTableIndex[characterRef.Sphere3Stat]] += characterRef.Sphere3Value;
            index[greatTableIndex[characterRef.Sphere4Stat]] += characterRef.Sphere4Value;

            index[greatTableIndex[characterRef.Rope1Stat]] += characterRef.Rope1Value;
            index[greatTableIndex[characterRef.Rope2Stat]] += characterRef.Rope2Value;
            index[greatTableIndex[characterRef.Rope3Stat]] += characterRef.Rope3Value;
            index[greatTableIndex[characterRef.Rope4Stat]] += characterRef.Rope4Value;
        }






        // //relic main/substats
        // for (let part of formulasValues.relicPartNames) {
        //     let currentPart = characterRef.pieces[part];
        //     let main = currentPart.main;
        //     let newStats = {
        //         [main]: relics[part].mainAffix[main].maxed,
        //         ...currentPart.stats
        //     };

        //     formulasValues.pullStats(index,newStats);
        // }

        //relic fixed bonuses from set effects
        // relicSets
        let pc2 = characterRef["2pc"];
        let pc4 = characterRef["4pc"];
        //is this a 4pc
        if (pc2 === pc4) {
            pullStats(index,relicSets[pc2].fixedStats["2"]);
            pullStats(index,relicSets[pc2].fixedStats["4"]);
        }
        //or is this a 2pc 2pc mix and match
        else {
            pullStats(index,relicSets[pc2].fixedStats["2"]);
            pullStats(index,relicSets[pc4].fixedStats["2"]);
        }
        //planar will always be 2pc
        pullStats(index,relicSets[characterRef.planar].fixedStats["2"]);
    },




    //old TFD calc stuff, prob not gonna use any of it here but keeping it in this file for now just in case I think of a need later
    pullModStats(index,modArrayOverride) {
        let modArrayRef = modArrayOverride || globalRecords.character.mods;
        let pullStats = formulasValues.pullStats;

        for (let i=2;i<=11;i++) {
            let path = modData[modArrayRef[i]].stats;
            pullStats(index,path);
        }
    },
    pullWeaponStats(index,weaponModOverride,weaponSubstatOverride,weaponCoreOverride) {
        let pullStats = formulasValues.pullStats;

        //weapon mods
        let modArrayRef = weaponModOverride || globalRecords.weapon.mods;
        const weaponModsCategory = userTriggers.weaponTypeModList[sniperList[globalRecords.weapon.currentWeapon].ammoType];
        for (let i=0;i<=9;i++) {
            let path = weaponModsCategory[modArrayRef[i]].stats;
            pullStats(index,path);
        }
        //this is for stats that are hardbaked into a weapon, like base attribute attack on weapons since that's a new thing separate from subs.
        modArrayRef = sniperList[globalRecords.weapon.currentWeapon].stats;
        pullStats(index,modArrayRef)

        const weaponRef = globalRecords.weapon;
        const overrideCheck = weaponSubstatOverride && weaponSubstatOverride.length;

        const rollName1 = weaponSubstatList[overrideCheck ? weaponSubstatOverride[0] : weaponRef.subRoll1];
        const rollName2 = weaponSubstatList[overrideCheck ? weaponSubstatOverride[1] : weaponRef.subRoll2];
        const rollName3 = weaponSubstatList[overrideCheck ? weaponSubstatOverride[2] : weaponRef.subRoll3];
        const rollName4 = weaponSubstatList[overrideCheck ? weaponSubstatOverride[3] : weaponRef.subRoll4];

        //if the cycles are active and this isn't a UI calculation, then assume the highest possible value when going through each substat.
        //also, if a stat is a negative stat, the assumption needs to be the "lowest" aka more negative stat for a maximum value
        const weaponType = sniperList[weaponRef.currentWeapon].weaponType;
        index[rollName1.statName] += overrideCheck ? (rollName1[weaponType][1]>0 ? rollName1[weaponType][1] : rollName1[weaponType][0]) : weaponRef.subRoll1Value;
        index[rollName2.statName] += overrideCheck ? (rollName2[weaponType][1]>0 ? rollName2[weaponType][1] : rollName2[weaponType][0]) : weaponRef.subRoll2Value;
        index[rollName3.statName] += overrideCheck ? (rollName3[weaponType][1]>0 ? rollName3[weaponType][1] : rollName3[weaponType][0]) : weaponRef.subRoll3Value;
        index[rollName4.statName] += overrideCheck ? (rollName4[weaponType][1]>0 ? rollName4[weaponType][1] : rollName4[weaponType][0]) : weaponRef.subRoll4Value;

        //WEAPON CORES
        const coreOverrideCheck = weaponCoreOverride && weaponCoreOverride.length;
        const coreName1 = coreRainbow[coreOverrideCheck ? weaponCoreOverride[0] : weaponRef.coreRoll1];
        const coreName2 = coreRainbow[coreOverrideCheck ? weaponCoreOverride[1] : weaponRef.coreRoll2];
        const coreName3 = coreRainbow[coreOverrideCheck ? weaponCoreOverride[2] : weaponRef.coreRoll3];
        const coreName4 = coreRainbow[coreOverrideCheck ? weaponCoreOverride[3] : weaponRef.coreRoll4];
        const coreName5 = coreRainbow[coreOverrideCheck ? weaponCoreOverride[4] : weaponRef.coreRoll5];
        // index[coreName1.statName] += coreOverrideCheck ? (coreName1.range[1]>0 ? coreName1.range[1] : coreName1.range[0]) : weaponRef.coreRoll1Value;
        // index[coreName2.statName] += coreOverrideCheck ? (coreName2.range[1]>0 ? coreName2.range[1] : coreName2.range[0]) : weaponRef.coreRoll2Value;
        // index[coreName3.statName] += coreOverrideCheck ? (coreName3.range[1]>0 ? coreName3.range[1] : coreName3.range[0]) : weaponRef.coreRoll3Value;
        // index[coreName4.statName] += coreOverrideCheck ? (coreName4.range[1]>0 ? coreName4.range[1] : coreName4.range[0]) : weaponRef.coreRoll4Value;
        // index[coreName5.statName] += coreOverrideCheck ? (coreName5.range[1]>0 ? coreName5.range[1] : coreName5.range[0]) : weaponRef.coreRoll5Value;
        index[coreName1.statName] += coreOverrideCheck ? coreName1.range[1] : weaponRef.coreRoll1Value;
        index[coreName2.statName] += coreOverrideCheck ? coreName2.range[1] : weaponRef.coreRoll2Value;
        index[coreName3.statName] += coreOverrideCheck ? coreName3.range[1] : weaponRef.coreRoll3Value;
        index[coreName4.statName] += coreOverrideCheck ? coreName4.range[1] : weaponRef.coreRoll4Value;
        index[coreName5.statName] += coreOverrideCheck ? coreName5.range[1] : weaponRef.coreRoll5Value;
    },
    pullReactorStats(index,reactorRollsOverride) {
        let reactorRef = globalRecords.reactor;

        //if this is just a UI calc then use the user inputs on values for reactor substats, OTHERWISE
        //if this is midcycles, then assume the maximum value for the sake of comparisons
        const overrideCheck = reactorRollsOverride && reactorRollsOverride.length;
        const rollName1 = reactorSubRolls[overrideCheck ? reactorRollsOverride[0] : reactorRef.subRoll1];
        const rollName2 = reactorSubRolls[overrideCheck ? reactorRollsOverride[1] : reactorRef.subRoll2];
        index[rollName1.statName] += overrideCheck ? (rollName1.maximum<0 ? rollName1.minimum : rollName1.maximum) : reactorRef.subRoll1Value;
        index[rollName2.statName] += overrideCheck ? (rollName2.maximum<0 ? rollName2.minimum : rollName2.maximum) : reactorRef.subRoll2Value;

        const ratioTable = {
            "Fire" : "PowerRatioFire",
            "Non-Attribute" : "PowerRatioNonAttribute",
            "Electric" : "PowerRatioElectric",
            "Chill" : "PowerRatioChill",
            "Toxic" : "PowerRatioToxic",
            "Tech" : "PowerRatioTech",
            "Singular" : "PowerRatioSingular",
            "Dimension" : "PowerRatioDimension",
            "Fusion": "PowerRatioFusion"
        }

        index[ratioTable[reactorRef.currentAttribute]] += 0.2;
        index[ratioTable[reactorRef.currentType]] += 0.2;
    },
    pullComponentStats(index,componentSetOverride) {
        const globalRef = globalRecords.components;
        let pullStats = formulasValues.pullStats;
        const overrideCheck = componentSetOverride && componentSetOverride.length;

        //add the main stats of each component
        // console.log(globalRef.auxiliary)
        index[auxiliary[overrideCheck ? componentSetOverride[0] : globalRef.auxiliary].headerStat] += auxiliary[overrideCheck ? componentSetOverride[0] : globalRef.auxiliary].value;
        index[sensor[overrideCheck ? componentSetOverride[0] : globalRef.sensor].headerStat] += sensor[overrideCheck ? componentSetOverride[0] : globalRef.sensor].value;
        index[memory[overrideCheck ? componentSetOverride[0] : globalRef.memory].headerStat] += memory[overrideCheck ? componentSetOverride[0] : globalRef.memory].value;
        index[processor[overrideCheck ? componentSetOverride[0] : globalRef.processor].headerStat] += processor[overrideCheck ? componentSetOverride[0] : globalRef.processor].value;

        index[Object.keys(auxiliaryRolls[globalRef.auxiliarySub1].stats)[0]] += globalRef.auxiliarySub1Value || 0;
        index[Object.keys(auxiliaryRolls[globalRef.auxiliarySub2].stats)[0]] += globalRef.auxiliarySub2Value || 0;

        index[Object.keys(sensorRolls[globalRef.sensorSub1].stats)[0]] += globalRef.sensorSub1Value || 0;
        index[Object.keys(sensorRolls[globalRef.sensorSub2].stats)[0]] += globalRef.sensorSub2Value || 0;

        index[Object.keys(memoryRolls[globalRef.memorySub1].stats)[0]] += globalRef.memorySub1Value || 0;
        index[Object.keys(memoryRolls[globalRef.memorySub2].stats)[0]] += globalRef.memorySub2Value || 0;

        index[Object.keys(processorRolls[globalRef.processorSub1].stats)[0]] += globalRef.processorSub1Value || 0;
        index[Object.keys(processorRolls[globalRef.processorSub2].stats)[0]] += globalRef.processorSub2Value || 0;

        if (!overrideCheck) {
            //later, look into doing this in a way that just has the parts provide a +1 to greatTable during the earlier pullstats section,
            //then no for loops are needed. low priority, but it'd be better
            const setListArray = Object.keys(componentSetBonuses);
            const compArray = [globalRef.auxiliary,globalRef.sensor,globalRef.memory,globalRef.processor];
            let setCounter = {};
            //make a quick object with each key as a set name, then add to the count of each set as needed.
            for (let entry of setListArray) {setCounter[entry] = 0;}
            for (let item of compArray) {setCounter[item] += 1;}
            let set2Found = false;
            let set4Found = false;
            for (let entry of setListArray) {
                if (setCounter[entry] >= 2) {
                    set2Found = true;
                    pullStats(index,componentSetBonuses[entry]["2pc"].stats);
                    globalRef.current2piece = entry;
                    //we'll never reach a 4 set if we don't have a 2 sec, so we can include the 4set logic inside the 2set
                    if (setCounter[entry] === 4) {
                        set4Found = true;
                        pullStats(index,componentSetBonuses[entry]["4pc"].stats);
                        globalRef.current4piece = entry;
                    }
                }
            }
            if (!set2Found) {globalRef.current2piece = "";}
            if (!set4Found) {globalRef.current4piece = "";}
        }
        else {
            pullStats(index,componentSetBonuses[componentSetOverride[0]]["2pc"].stats);
            pullStats(index,componentSetBonuses[componentSetOverride[0]]["4pc"].stats);
            // globalRef.current2piece = componentSetOverride[0];
            // globalRef.current4piece = componentSetOverride[0];
        }


    },
    pullAbilityStats(index) {
        const selectedCharacter = globalRecords.character.currentCharacter;

        readSelection("characterBreakdownIcon").src = characters[selectedCharacter].image;
        readSelection("buttonsCharacterIcon").src = characters[selectedCharacter].image;

        //ability array handling is done within userTriggers.updateSelectedMod
        const arrayRef = globalRecords.character.abilityArray;
        const abilityRefs = characters[selectedCharacter].abilities;

        for (let i=1;i<=5;i++) {
            const path = arrayRef[i-1] === 0 ? "base" : arrayRef[i-1];

            formulasValues.pullStats(index,abilityRefs[`ability${i}`][path].stats);
        }
    },
    pullTeamBuffsStats(index) {
        //the teambuffs object is populated in userTriggers.updateTeamBuffsObject()
        const teamRef = globalRecords.teamBuffs;
        const enemyRef = globalRecords.enemyBuffs;
        formulasValues.pullStats(index,teamRef.stats);
        formulasValues.pullStats(index,enemyRef.stats);

        //paragon board stat pull
        const paragonRef = globalRecords.paragonBoard;
        formulasValues.pullStats(index,paragonRef.stats);
        // paragonRef.stats = {...statsObject};
    },
}


// action value = 10,000 / SPD
// first cycle is 150 action value
// all cycles after are 100 action value










function updateFormulas(charSlot,menuStatTable,objectOverride,querySettingsOverride) {

    // const modArrayOverride = overrideObject ? overrideObject.modArrayOverride ?? null : null;
    // const weaponModOverride = overrideObject ? overrideObject.weaponModOverride ?? null : null;
    // const reactorRollsOverride = overrideObject ? overrideObject.reactorRollsOverride ?? null : null;
    // const weaponSubstatOverride = overrideObject ? overrideObject.weaponSubstatOverride ?? null : null;
    // const weaponCoreOverride = overrideObject ? overrideObject.weaponCoreOverride ?? null : null;
    // const componentSetOverride = overrideObject ? overrideObject.componentSetOverride ?? null : null;

    let tableOverride = menuStatTable != null;


    let tableReference = tableOverride ? [...menuStatTable] : new Array(greatTableSize).fill(0);//get a fresh table to work with
    // console.log(tableReference)

    if (!tableOverride) {
        //if this is the battle prep phase then we need to populate character stats
        //but if this is mid-battle then we skip this shit to save processing.
        //unlike the R2 and TFD calculators, trying something new this time to monitor
        //property changes instead of clean-slate table crafting each iteration
        const characterRef = objectOverride ? objectOverride[charSlot] : globalRecords.character[charSlot];
        formulasValues.pullBaseStats(tableReference,characterRef,querySettingsOverride);
    }

    // formulasValues.pullRelicStats(tableReference,relicRef);
    // formulasValues.pullFixedLightConeBonuses(tableReference,lightConeRef);
    // formulasValues.pullFixedTraceBonuses(tableReference,characterRef);

    // formulasValues.pullModStats(tableReference,modArrayOverride);
    // formulasValues.pullComponentStats(tableReference,componentSetOverride);
    // formulasValues.pullReactorStats(tableReference,reactorRollsOverride);
    // formulasValues.pullWeaponStats(tableReference,weaponModOverride,weaponSubstatOverride,weaponCoreOverride);
    // formulasValues.pullAbilityStats(tableReference);
    // formulasValues.pullTeamBuffsStats(tableReference);
    
    // const {limitedAbilityBonuses,limitedWeaponBonuses,limitedWeaponAbilityBonuses} = customDamage.callAbilityFunctionsTier0(tableReference,isCycleCalcs,modArrayOverride,weaponModOverride,componentSetOverride);


    const {ATKBaseFinal,ATKBonusPercent,ATKBonusFlat,ATKFinal} = calcs.getATKFinal(tableReference);
    const {HPBaseFinal,HPBonusPercent,HPBonusFlat,HPFinal} = calcs.getHPFinal(tableReference);
    const {DEFBaseFinal,DEFBonusPercent,DEFBonusFlat,DEFFinal} = calcs.getDEFFinal(tableReference);
    const {SPDBaseFinal,SPDBonusPercent,SPDBonusFlat,SPDFinal,SPDActionValue} = calcs.getSPDFinal(tableReference);
    const {CritRateFinal,CritDamageFinal} = calcs.getCritFinal(tableReference);

    let returnObject = {
        ATKBaseFinal,ATKBonusPercent,ATKBonusFlat,ATKFinal,
        HPBaseFinal,HPBonusPercent,HPBonusFlat,HPFinal,
        DEFBaseFinal,DEFBonusPercent,DEFBonusFlat,DEFFinal,
        SPDBaseFinal,SPDBonusPercent,SPDBonusFlat,SPDFinal,SPDActionValue,
        CritRateFinal,CritDamageFinal

    }
    // returnObject = {...returnObject,
    //     //...customDamage.callAbilityFunctions(tableReference,returnObject,isCycleCalcs,limitedAbilityBonuses,limitedWeaponBonuses,limitedWeaponAbilityBonuses)
    //     }



    if (tableOverride) {
        return returnObject;
    }
    else {
        return {tableReference,returnObject};
    }
}
