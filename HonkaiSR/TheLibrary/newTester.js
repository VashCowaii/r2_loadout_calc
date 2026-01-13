function readSelection(elemID) {return document.getElementById(elemID);}

console.log("reached")
let currentCharFilePrefix = null;
let currentLCSuperimposition = 1;


const customHTML = {
    makeSkillCircle(x,y,r,imgHref,id,type) {
        let fillValue = type === "skill" ? "#1e2137" : "#ffffff";
        let borderColor = type === "skill" ? "#928d85" : "#b2c8ff"
        if (type === "memoSkill") {
            fillValue = "#241b5a";
            borderColor = "#646390"
        }
        let borderWidth = type === "trace" ? 0 : 3;

        return `<g>
            <circle cx="${x}" cy="${y}" r="${r}" fill="${fillValue}" stroke="${borderColor}" stroke-width="${borderWidth}" class=""/>
    
            <clipPath id="circleClip${id}">
                <circle cx="${x}" cy="${y}" r="${r}"/>
            </clipPath>
    
            <image href="${imgHref}" x="${x - r}" y="${y - r}" width="${r * 2}" height="${r * 2}" clip-path="url(#circleClip-${id})" class="clickable hoveredTraceIcon" 
            style="${type != "skill" && type != "memoSkill" ? "filter: brightness(0)" : ""}" onclick="userTriggers.updateSelectedTraceDisplay(${id})"/>
        </g>`;
    },
    rowUniqueStatExceptions: {
        "Multiplier": {statName: "Final Multiplier", statUnit: "x"},
    },
    createAlternatingStatRows(displayOrder,statLocation,isMainStat,substatRef,isStatMenuCreation,rollArray) {
        let rowAlternating = 2
        let returnString = "";

        // console.log(displayOrder,statLocation)

        let compositeRollCount = 0;
        let loopCounter = 0;
        for (let entry of displayOrder) {
            const isUnique = customHTML.rowUniqueStatExceptions[entry];

            if (isUnique) {
                returnString += `
                <div class="imageRowStatisticBox${rowAlternating}">
                    <div class="imageRowStatisticNameBox">${isUnique.statName}</div>
                    <div class="imageRowStatisticStatBox">${statLocation[entry]}${isUnique.statUnit}</div>
                </div>`;
                continue;
            }

            
            let valuePre = statLocation[entry];
            let valueRef = (valuePre)?.toFixed(3) || 0;

            // greatTableIndex
            // greatTableKeys
            if (isStatMenuCreation && valuePre === 0) {continue;}
            if (rowAlternating==2) {rowAlternating--;}
            else {rowAlternating++;}
            
            returnString += `
            <div class="imageRowStatisticBox${rowAlternating}">
                <div class="imageRowStatisticNameBox">${entry}</div>
                <div class="imageRowStatisticStatBox">${(+valueRef ?? 0)}</div>
            </div>
            `;
            loopCounter++;
        }

        return returnString;
    },
}


const megaParsingFuckery = {
    checkKnownKeys(keySet,objectToCheck,functionName) {
        if (keySet.size) {
            let unknownKeys = [];
            for (let entry in objectToCheck) {
                if (!keySet.has(entry)) {unknownKeys.push(entry)}
            }

            if (unknownKeys.length) {
                const errorMessage = `Unknown key found in ${functionName}: ${unknownKeys}`;
                alert(errorMessage);
                throw new Error(errorMessage);
            }
        }
    },
    renewFileSelected() {
        const newValue = readSelection("fileSelectionSelector").value;

        megaParsingFuckery.pageLoad(newValue);
    },
    updateSuperimposition(superimposition) {
        currentLCSuperimposition = superimposition;


        // for (let i=1;i<=5;i++) {
        //     readSelection(`superimpositionButton${i}`).style.backgroundColor = "transparent";
        //     readSelection(`superimpositionButton${i}`).style.color = "#e1e1e4";
        // }
        // readSelection(`superimpositionButton${superimposition}`).style.backgroundColor = "#e1e1e4";
        // readSelection(`superimpositionButton${superimposition}`).style.color = "black";

        megaParsingFuckery.renewFileSelected();
    },
    pageLoad(loadFile) {
        const bodyBox = readSelection("eventBodyMainBox");
        const isLightcone = compositeAbilityObject.isLightcone;
        const isRelic = compositeAbilityObject.isRelic;

        loadFile = loadFile ?? compositeAbilityObject.abilityList[compositeAbilityObject.abilityList.length >= 2 ? 1 : 0];
        const configAbility = compositeAbilityObject.abilityObject[loadFile];

        let initialCounter = 1;
        let eventBodyString = megaParsingFuckery.fillEventBodyBox(configAbility.parse,initialCounter);
        let eventBodyStringOnAdd = megaParsingFuckery.fillEventBodyBox(configAbility.whenAdded,initialCounter);
        let eventBodyStringOnAbort = megaParsingFuckery.fillEventBodyBox(configAbility.onAbort,initialCounter);
        let eventBodyStringFunctions = megaParsingFuckery.fillEventBodyBox(configAbility.functions,initialCounter);
        

        let referenceBodyString = configAbility.references.length ? megaParsingFuckery.fillEventBodyBox(configAbility.references,initialCounter) : null;
        currentCharFilePrefix = compositeAbilityObject.trimCharacterName;

        let referenceGlobalString = configAbility.referencesGlobal?.length ? megaParsingFuckery.fillEventBodyBox(configAbility.referencesGlobal,initialCounter) : null;
        let referenceGlobalFunctionString = configAbility.referencesGlobalFunctions?.length ? megaParsingFuckery.fillEventBodyBox(configAbility.referencesGlobalFunctions,initialCounter) : null;
        
        

        // "fileName": "Saber_Skill02",
        // "abilityType": "Skill",
        // "energy": 30,
        // "toughnessList": [
        //     20,
        //     0,
        //     10
        // ],
        // parse: []
        // references: []
        // desc: currentLCEntry.desc,
        // params: currentLCEntry.params,
        const isGlobalNoImage = compositeAbilityObject.fullCharacterName.toLowerCase().includes("global")
        || compositeAbilityObject.fullCharacterName.toLowerCase().includes("enemyabilities");

        // console.log(compositeAbilityObject.fullCharacterName,characterRef.preview)
        const characterRef = characters[compositeAbilityObject.fullCharacterName];
        const lightconeRef = lightcones[compositeAbilityObject.fullCharacterName];
        const relicSetRef = relicSets[compositeAbilityObject.fullCharacterName];
        // console.log(compositeAbilityObject.fullCharacterName,characterRef,characters)

        const startingKeys = [
            // {leftHand: "File", keyValue: "fileName"},
            {leftHand: "Ability", keyValue: "abilityType"},
            {leftHand: "Energy", keyValue: "energy"},
            // {leftHand: "Toughness", keyValue: "toughnessList"},
        ];
        let startingString = `<div class="eventCharacterFileHeader">
            ${!isGlobalNoImage ? `<div class="customMenuResultRowIcon">
                <img src="/HonkaiSR/${isRelic ? relicSetRef.icon : (isLightcone ? lightconeRef.preview : characterRef.preview)}" class="${isRelic ? "eventCharacterFileIconRelic" : "eventCharacterFileIcon"}" style="border: 2px solid #d2ae73;">
            </div>` : ""}
            
            <div class="eventCharacterFileInfoBox">
            
            <select class="selectorWidthRestriction" id="fileSelectionSelector" onchange="megaParsingFuckery.renewFileSelected()">`;

        let optionsString = "";

        for (let fileEntry of compositeAbilityObject.abilityList) {
            optionsString += `<option value="${fileEntry}" ${fileEntry === loadFile ? "selected" : ""}>${fileEntry}</option>`
        }
        optionsString += "</select>"
        startingString += optionsString;

        let rowAlternating = 1;
        if (!isLightcone) {
            for (let entry of startingKeys) {
                // startingString += `<div class="">${configAbility[entry]}</div>`;

                // <div class="imageRowStatisticImageBox"><img src="${currentKey.icon}" class="${isStatMenuCreation ? "imageRowStatisticImageStatMenu" : "imageRowStatisticImage"}"/></div>
                // ${subRolls && estRolls ? `<div class="imageRowStatisticStatBoxRollsEst">${estRolls}</div>` : ""}
                startingString +=  `<div class="imageRowStatisticBox${rowAlternating}DETAILS">
                    <div class="imageRowStatisticNameBox">${entry.leftHand}</div>
                    <div class="imageRowStatisticStatBox">${configAbility[entry.keyValue]}</div>
                </div>`;

                if (rowAlternating === 2) {rowAlternating = 1;}
                else {rowAlternating++;}
            }
        }


        let toughnessRowString = "";
        if (configAbility.toughnessList) {
            const toughnessIndexConversion = {
                0: "ST",
                1: "AOE",
                2: "Blast"
            }
            for (let i=0;i<3;i++) {
                toughnessRowString += `<div class="toughnessTableRowItemBox">
                    <div class="toughnessTableRowItemHeader">${toughnessIndexConversion[i]}</div>
                    <div class="toughnessTableRowItemValue">${configAbility.toughnessList[i]}</div>
                </div>`
            }
        }

        let toughnessString = !isLightcone ? `<div class="toughnessTableRowBox">
            <div class="toughnessTableRowHeader">Toughness</div>

            <div class="toughnessTableRowTableRow">
                ${toughnessRowString}
            </div>
        
        </div>` : "";

        let statRowString1 = "";
        let statRowString2 = "";

        let lightconeStatRow = "";

        console.log(compositeAbilityObject.fixedStats)
        if (isRelic) {
            if (compositeAbilityObject.fixedStats[2]) {
                const menuBoxDisplayOrder = Object.keys(compositeAbilityObject.fixedStats[2]);
                statRowString1 = customHTML.createAlternatingStatRows(menuBoxDisplayOrder,compositeAbilityObject.fixedStats[2]);
            }
            if (compositeAbilityObject.fixedStats[4]) {
                const menuBoxDisplayOrder = Object.keys(compositeAbilityObject.fixedStats[4]);
                statRowString2 = customHTML.createAlternatingStatRows(menuBoxDisplayOrder,compositeAbilityObject.fixedStats[4]);
            }
        }
        if (isLightcone && !isRelic && compositeAbilityObject.fixedStats && compositeAbilityObject.fixedStats[currentLCSuperimposition]) {
            const menuBoxDisplayOrder = Object.keys(compositeAbilityObject.fixedStats[currentLCSuperimposition]);
            lightconeStatRow = customHTML.createAlternatingStatRows(menuBoxDisplayOrder,compositeAbilityObject.fixedStats[currentLCSuperimposition]);
        }

        

        if (isLightcone) {
            toughnessString += `
            ${!isRelic ? `<div class="customMenuSearchNote" id="customMenuSearchNote">Changing superimposition won't change the events, only the description</div>
            <div class="superimpositionHolderbox">
                <div class="superimpositionButton clickable" id="superimpositionButton1" onclick="megaParsingFuckery.updateSuperimposition(1)" style="${currentLCSuperimposition === 1 ? "background-color: rgb(225, 225, 228); color: black;" : "background-color: transparent; color: rgb(225, 225, 228);"}">1</div>
                <div class="superimpositionButton clickable" id="superimpositionButton2" onclick="megaParsingFuckery.updateSuperimposition(2)" style="${currentLCSuperimposition === 2 ? "background-color: rgb(225, 225, 228); color: black;" : "background-color: transparent; color: rgb(225, 225, 228);"}">2</div>
                <div class="superimpositionButton clickable" id="superimpositionButton3" onclick="megaParsingFuckery.updateSuperimposition(3)" style="${currentLCSuperimposition === 3 ? "background-color: rgb(225, 225, 228); color: black;" : "background-color: transparent; color: rgb(225, 225, 228);"}">3</div>
                <div class="superimpositionButton clickable" id="superimpositionButton4" onclick="megaParsingFuckery.updateSuperimposition(4)" style="${currentLCSuperimposition === 4 ? "background-color: rgb(225, 225, 228); color: black;" : "background-color: transparent; color: rgb(225, 225, 228);"}">4</div>
                <div class="superimpositionButton clickable" id="superimpositionButton5" onclick="megaParsingFuckery.updateSuperimposition(5)" style="${currentLCSuperimposition === 5 ? "background-color: rgb(225, 225, 228); color: black;" : "background-color: transparent; color: rgb(225, 225, 228);"}">5</div>
            </div>` : ""}
            
            
            
            ${lightconeStatRow ? `<div class="characterDisplayPathAndNameBox">
                <div class="characterDisplayPathNameBox">Lightcone Menu Bonuses:</div>
            </div>` + lightconeStatRow : ""}
            ${isRelic ? `
                ${statRowString1 ? `<div class="characterDisplayPathAndNameBox">
                    <div class="characterDisplayPathNameBox">2-Piece Menu Bonuses:</div>
                </div>` + statRowString1 : ""}
                

                ${statRowString2 ? `<div class="characterDisplayPathAndNameBox">
                    <div class="characterDisplayPathNameBox">4-Piece Menu Bonuses:</div>
                </div>` + statRowString2 : ""}

                
                <div class="rightDescriptionBox" id="lightconeSkillDescription"><span class="descriptionNumberColor">2pc:</span> ${pagePopulation.cleanDescription(relicSetRef.params[0],relicSetRef.desc[0])}</div>
                ${relicSetRef.params[1] != undefined && relicSetRef.desc[1] != undefined ? `<div class="rightDescriptionBox" id="lightconeSkillDescription"><span class="descriptionNumberColor">4pc:</span> ${pagePopulation.cleanDescription(relicSetRef.params[1],relicSetRef.desc[1])}</div>` : ""}
                ` 
                : `<div class="rightDescriptionBox" id="lightconeSkillDescription">${pagePopulation.cleanDescription(lightconeRef.params[currentLCSuperimposition-1],lightconeRef.desc)}</div>`}
            `
        }
        startingString += toughnessString + `</div></div>`;



        // <details class="rotationsPermaConditionsExpand" open="">
        //     <summary class="rotationConditionOperatorHeaderAbilityTriggerConditionHeader clickable">
        //         <div class="rotationConditionOperatorHeaderCondition">${parseRef.name}</div>
        //         ${returnString}
        //     </summary>

        //     <div class="rotationConditionOperatorBoxMain">
        //         ${hasParse ? `<div class="rotationConditionOperatorHeaderConditionTHEN">THEN</div>
        //         <div class="rotationsSectionRowHolder${initialCounter%2 === 0 ? 2 : 1}">
        //             ${parseString}
        //         </div>` : ""}
        //         ${hasRef ? `<div class="rotationConditionOperatorHeaderConditionELSE">ELSE</div>
        //         <div class="rotationsSectionRowHolder${initialCounter%2 === 0 ? 2 : 1}">
        //             ${refString}
        //         </div>` : ""}
        //     </div>
        // </details>

        const mainAbilityString = `${startingString}
        <div class="eventBodyScrollerMain">
            <details class="rotationsPermaConditionsExpand" open="">
                <summary class="rotationConditionOperatorHeaderAbilityTriggerConditionHeader clickable">
                    <div class="rotationConditionOperatorHeaderCondition">ABILITY LOG</div>
                </summary>
                ${eventBodyString}
            </details>
            ${eventBodyStringOnAdd ? `<details class="rotationsPermaConditionsExpand" open="">
                <summary class="rotationConditionOperatorHeaderAbilityTriggerConditionHeader clickable">
                    <div class="rotationConditionOperatorHeaderCondition">ADDED LOG</div>
                </summary>
                ${eventBodyStringOnAdd}
            </details>` : ""}
            ${eventBodyStringOnAbort ? `<details class="rotationsPermaConditionsExpand" open="">
                <summary class="rotationConditionOperatorHeaderAbilityTriggerConditionHeader clickable">
                    <div class="rotationConditionOperatorHeaderCondition">ON ABILITY ABORT</div>
                </summary>
                ${eventBodyStringOnAbort}
            </details>` : ""}

            
            ${referenceBodyString ? `<details class="rotationsPermaConditionsExpand" open="">
                <summary class="rotationConditionOperatorHeaderAbilityTriggerConditionHeader clickable">
                    <div class="rotationConditionOperatorHeaderCondition">MODIFER LOG</div>
                </summary>
                ${referenceBodyString}
            </details>` : ""}
            ${eventBodyStringFunctions ? `<details class="rotationsPermaConditionsExpand" open="">
                <summary class="rotationConditionOperatorHeaderAbilityTriggerConditionHeader clickable">
                    <div class="rotationConditionOperatorHeaderCondition">ABILITY FUNCTIONS</div>
                </summary>
                ${eventBodyStringFunctions}
            </details>` : ""}
            ${referenceGlobalString ? `<details class="rotationsPermaConditionsExpand" open="">
                <summary class="rotationConditionOperatorHeaderAbilityTriggerConditionHeader clickable">
                    <div class="rotationConditionOperatorHeaderCondition">GLOBAL MODIFERS</div>
                </summary>
                ${referenceGlobalString}
            </details>` : ""}
            ${referenceGlobalFunctionString ? `<details class="rotationsPermaConditionsExpand" open="">
                <summary class="rotationConditionOperatorHeaderAbilityTriggerConditionHeader clickable">
                    <div class="rotationConditionOperatorHeaderCondition">GLOBAL FUNCTIONS</div>
                </summary>
                ${referenceGlobalFunctionString}
            </details>` : ""}
        </div>
        `;

        

        bodyBox.innerHTML = mainAbilityString;

        // if (isLightcone) {readSelection("lightconeSkillDescription").innerHTML = pagePopulation.cleanDescription(lightconeRef.params[currentLCSuperimposition],lightconeRef.desc);}
    },
    fillEventBodyBox(parseRef,initialCounter) {
        // initialCounter++;
        let returnString = "";

        const isArray = Array.isArray(parseRef);
        const isObject = typeof parseRef === "object";
        const isString = typeof parseRef === "string";


        if (isArray) {
            for (let entry of parseRef) {

                const isArrayInner = Array.isArray(entry);
                const isObjectInner = typeof entry === "object";
                const isStringInner = typeof entry === "string";

                // console.log(`reached objectparse on ${entry.name}`)

                if (isArrayInner) {returnString += megaParsingFuckery.fillEventBodyBox(entry,initialCounter);}//go recursive if the entry is another array
                else if (isObjectInner) {
                    const functionExists = megaParsingFuckery[entry.name];
                    if (functionExists) {returnString += `<div class="rotationsConditionsBodyBox">` + functionExists(entry,initialCounter) + `</div>`;}
                    else if (entry.displayLines != undefined) {
                        // entry.displayLines
                        // console.log(entry.displayLines,typeof entry.displayLines,entry)

                        // const finalString = `<div class="rotationsConditionsBodyBox">${entry.displayLines}</div>`
                        // console.log(finalString,entry.displayLines,typeof entry.displayLines,entry)

                        returnString += `<div class="rotationsConditionsBodyBox">${entry.displayLines}</div>`;
                    }
                    else if (entry.eventTrigger) {returnString += `<div class="rotationsConditionsBodyBox">` + megaParsingFuckery["eventTrigger"](entry,initialCounter) + `</div>`;}
                    else {
                        console.log(entry)
                        throw new Error(`Unknown function to call: ${entry.name}`);
                    }
                    // rotationConditionOperatorBox
                    // rotationsConditionsBodyBox
                }
                else if (isStringInner && entry != "Deleted bullshit") {
                    returnString += `<div class="rotationsConditionsBodyBox">
                        <div class="rotationConditionOperatorHeaderConditionTriggerRow">${entry}</div>
                    </div>`;

                    
                }
                // entry.eventTrigger
                
            }
        }
        else if (isObject) {
            const functionExists = megaParsingFuckery[parseRef.name];

            
            // if (functionExists) {returnString += functionExists(parseRef);}
            if (functionExists) {returnString += `<div class="rotationsConditionsBodyBox">` + functionExists(parseRef,initialCounter) + `</div>`;}
            else if (parseRef.eventTrigger) {returnString += `<div class="rotationsConditionsBodyBox">` + megaParsingFuckery["eventTrigger"](parseRef,initialCounter) + `</div>`;}
            else {
                console.log(parseRef)
                throw new Error(`Unknown function to call: ${parseRef.name}`);
            }
            // else {console.log(parseRef)}
        }
        else if (isString && parseRef != "Deleted bullshit") {
            returnString += `<div class="rotationsConditionsBodyBox">` + parseRef + `</div>`;
        }


        return returnString;
    },
    perKeyFunctions: {

    },
    "Trigger Joint-Attack Ability"(parseRef,initialCounter) {
        initialCounter++;

        const knownKeySet = new Set ([
            "name",
            "abilityList",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Trigger Ability")
        // let returnString = "";

        // console.log(parseRef)


        // returnString += ``;
        // from
        // ability
        // isTrigger    //possibly skip showing this

        // parse
        // references

        // returnString += megaParsingFuckery.fillEventBodyBox(parseRef.parse);


        let parseString = "";
        // let refString = "";
        const hasParse = parseRef.abilityList?.length;
        // const hasRef = parseRef.references?.length;
        if (hasParse) {parseString += megaParsingFuckery.fillEventBodyBox(parseRef.abilityList,initialCounter);}
        // if (hasRef) {refString += megaParsingFuckery.fillEventBodyBox(parseRef.references,initialCounter);}

        // rotationConditionOperatorBox
        return `
            <div class="rotationConditionOperatorHeaderAbilityTrigger">${parseRef.name}</div>
            
            ${hasParse ? `<div class="rotationConditionOperatorHeader">ABILITIES</div>
            <div class="rotationsSectionRowHolder${initialCounter%2 === 0 ? 2 : 1}">
                ${parseString}
            </div>` : ""}
        `;
    },
    "Add Ability"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "abilityName",
            // "ability",
            // "from",
            // "parse",
            // "references",
            // "inherentTarget",
            // "parameters",

            // //potentially not gonna use
            // "isTrigger"
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Trigger Ability")
        // let returnString = "";

        // console.log(parseRef)


        // returnString += ``;
        // from
        // ability
        // isTrigger    //possibly skip showing this

        // parse
        // references

        // returnString += megaParsingFuckery.fillEventBodyBox(parseRef.parse);


        // let parseString = "";
        // let refString = "";
        // const hasParse = parseRef.parse?.length;
        // const hasRef = parseRef.references?.length;
        // if (hasParse) {parseString += megaParsingFuckery.fillEventBodyBox(parseRef.parse,initialCounter);}
        // if (hasRef) {refString += megaParsingFuckery.fillEventBodyBox(parseRef.references,initialCounter);}

        // rotationConditionOperatorBox
        return `
            <div class="rotationConditionOperatorHeaderAbilityTrigger">${parseRef.name}</div>

            <div class="modifierDetailsBox">
                ${parseRef.inherentTarget != undefined ? `<div class="actionDetailBody2">
                    <div class="rotationConditionOperatorHeaderInline">Inherent Target:</div>&nbsp;
                    ${parseRef.inherentTarget}
                </div>` : ""}
            </div>
        `;
    },
    "Trigger Ability"(parseRef,initialCounter) {
        initialCounter++;

        const knownKeySet = new Set ([
            "name",
            "ability",
            "from",
            "parse",
            "references",
            "inherentTarget",
            "parameters",

            //potentially not gonna use
            "isTrigger"
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Trigger Ability")
        // let returnString = "";

        // console.log(parseRef)


        // returnString += ``;
        // from
        // ability
        // isTrigger    //possibly skip showing this

        // parse
        // references

        // returnString += megaParsingFuckery.fillEventBodyBox(parseRef.parse);


        let parseString = "";
        let refString = "";
        const hasParse = parseRef.parse?.length;
        const hasRef = parseRef.references?.length;
        if (hasParse) {parseString += megaParsingFuckery.fillEventBodyBox(parseRef.parse,initialCounter);}
        if (hasRef) {refString += megaParsingFuckery.fillEventBodyBox(parseRef.references,initialCounter);}

        // rotationConditionOperatorBox
        return `
            <div class="rotationConditionOperatorHeaderAbilityTrigger">${parseRef.name}</div>
            <div class="actionDetailBody">${parseRef.ability} from ${Array.isArray(parseRef.from) ? megaParsingFuckery.makeConditionTargetBox(parseRef.from,initialCounter) : parseRef.from}</div>
            
            ${hasParse ? `<div class="rotationConditionOperatorHeader">Execute</div>
            <div class="rotationsSectionRowHolder${initialCounter%2 === 0 ? 2 : 1}">
                ${parseString}
            </div>` : ""}
            ${hasRef ? `<div class="rotationConditionOperatorHeader">References</div>
            <div class="rotationsSectionRowHolder${initialCounter%2 === 0 ? 2 : 1}">
                ${refString}
            </div>` : ""}

            <div class="modifierDetailsBox">
                ${parseRef.inherentTarget != undefined ? `<div class="actionDetailBody2">
                    <div class="rotationConditionOperatorHeaderInline">Inherent Target:</div>&nbsp;
                    ${parseRef.inherentTarget}
                </div>` : ""}
                ${parseRef.isTrigger != undefined ? `<div class="actionDetailBody2">
                    <div class="rotationConditionOperatorHeaderInline">isTrigger:</div>&nbsp;
                    ${parseRef.isTrigger}
                </div>` : ""}
                ${parseRef.parameters != undefined ? `<div class="actionDetailBody2">
                    <div class="rotationConditionOperatorHeaderInline">Parameters:</div>&nbsp;
                    ${parseRef.parameters.displayLines ?? typeof parseRef.parameters === "object" ? megaParsingFuckery.ValuePerStackParsing(parseRef.parameters,initialCounter) : parseRef.parameters}
                </div>` : ""}
            </div>

            
            

            <div class="triggerAbilityButtonHolderRow">
                <div class="characterSearchButtonDMGDetails clickable" id="" onclick="megaParsingFuckery.pageLoad('${currentCharFilePrefix}_${parseRef.ability}')">Take me there</div>
            </div>
        `;
    },
    "Force-Trigger Ability Last-Phase"(parseRef,initialCounter) {
        // initialCounter++;

        const knownKeySet = new Set ([
            "name",
            "ability",
            // "from",
            // "parse",
            // "references",
            // "inherentTarget",
            // "parameters",

            //potentially not gonna use
            // "isTrigger"
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Force-Trigger Ability Last-Phase")
        // let returnString = "";

        // console.log(parseRef)


        // returnString += ``;
        // from
        // ability
        // isTrigger    //possibly skip showing this

        // parse
        // references

        // returnString += megaParsingFuckery.fillEventBodyBox(parseRef.parse);


        // let parseString = "";
        // let refString = "";
        // const hasParse = parseRef.parse?.length;
        // const hasRef = parseRef.references?.length;
        // if (hasParse) {parseString += megaParsingFuckery.fillEventBodyBox(parseRef.parse,initialCounter);}
        // if (hasRef) {refString += megaParsingFuckery.fillEventBodyBox(parseRef.references,initialCounter);}

        // rotationConditionOperatorBox
        return `
            <div class="rotationConditionOperatorHeaderAbilityTrigger">${parseRef.name}</div>
            <div class="actionDetailBody">${parseRef.ability}</div>
            

            <div class="modifierDetailsBox">
                ${parseRef.inherentTarget != undefined ? `<div class="actionDetailBody2">
                    <div class="rotationConditionOperatorHeaderInline">Inherent Target:</div>&nbsp;
                    ${parseRef.inherentTarget}
                </div>` : ""}
            </div>
        `;
    },
    "Update Displayed Energy Bar"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "value",
            "target",
            "activeCount",

            "maximum",
            "assignState",
            "priorState",
            "bar#",
            "cooldown",
            "skipWhenCCd",
            "isSummoner",

            "displaySubType",
            "displayShowIcon",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Update Displayed Energy Bar");
        // initialCounter++;
        return `<div class="actionDetailBody2">
            <div class="rotationConditionOperatorHeaderInline">Update Energy Bar(Display):</div>&nbsp;
            ${parseRef.value != undefined ? parseRef.value.displayLines ?? parseRef.value : ""}
        </div>
        <div class="modifierDetailsBox">
            ${parseRef.activeCount != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Active Count:</div>&nbsp;
                ${parseRef.activeCount.displayLines ?? parseRef.activeCount}
            </div>` : ""}
        
            ${parseRef.target != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Target:</div>&nbsp;
                ${Array.isArray(parseRef.target) ? megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter) : parseRef.target}
            </div>` : ""}
            ${parseRef.isSummoner != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Summoner's Bar:</div>&nbsp;
                ${parseRef.isSummoner}
            </div>` : ""}
            ${parseRef.maximum != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Limit:</div>&nbsp;
                ${parseRef.maximum.displayLines ?? parseRef.maximum}
            </div>` : ""}
            ${parseRef.assignState != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">State to Assign:</div>&nbsp;
                ${parseRef.assignState}
            </div>` : ""}
            ${parseRef.priorState != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Last State:</div>&nbsp;
                ${parseRef.priorState}
            </div>` : ""}
            ${parseRef["bar#"] != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Bar #:</div>&nbsp;
                ${parseRef["bar#"]}
            </div>` : ""}
            ${parseRef.cooldown != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Cooldown Display:</div>&nbsp;
                ${parseRef.cooldown.displayLines ?? parseRef.cooldown}
            </div>` : ""}
            ${parseRef.skipWhenCCd != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Skip when Crowd Controlled:</div>&nbsp;
                ${parseRef.skipWhenCCd}
            </div>` : ""}
            ${parseRef.displaySubType != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Display Type:</div>&nbsp;
                ${parseRef.displaySubType}
            </div>` : ""}
            ${parseRef.displayShowIcon != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Show Icon:</div>&nbsp;
                ${parseRef.displayShowIcon}
            </div>` : ""}
        </div>
        
        `;
    },
    "Modify Weaknesses"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "target",

            "action",
            "valueList",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Modify Weaknesses");
        // initialCounter++;
        return `<div class="actionDetailBody2">
            <div class="rotationConditionOperatorHeaderInline">${parseRef.name}:</div>&nbsp;
            ${parseRef.action} ${parseRef.valueList} ${Array.isArray(parseRef.target) ? megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter) : parseRef.target}
        </div>
        `;
    },
    "Is Ability Ongoing"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "target",
            "invertCondition"
            // "action",
            // "valueList",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Is Ability Ongoing");
        // initialCounter++;
        return `<div class="actionDetailBody2">
            <div class="rotationConditionOperatorHeaderInline">${parseRef.name}</div>
            ${parseRef.invertCondition ? "NOT": ""}${parseRef.target ? ` from ${Array.isArray(parseRef.target) ? megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter) : parseRef.target}` : ""}
        </div>
        `;
    },
    "Gender is"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "gender",
            // "target",

            // "action",
            // "valueList",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Gender is");
        // initialCounter++;
        return `<div class="actionDetailBody2">
            <div class="rotationConditionOperatorHeaderInline">${parseRef.name}:</div>&nbsp;
            ${parseRef.gender}
        </div>
        `;
    },
    "Is Post-DMG Effect(like True DMG)"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "invertCondition",
            // "target",

            // "action",
            // "valueList",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Is Post-DMG Effect(like True DMG)");
        // initialCounter++;
        return `<div class="actionDetailBody2">
            <div class="rotationConditionOperatorHeaderInline">${parseRef.name}</div>&nbsp;
            ${parseRef.invertCondition ? "[NOT]" : ""}
        </div>
        `;
    },
    "Is NOT in Auto-Battle State"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            // "target",

            // "action",
            // "valueList",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Is NOT in Auto-Battle State");
        // initialCounter++;
        return `<div class="actionDetailBody2">
            <div class="rotationConditionOperatorHeaderInline">${parseRef.name}</div>
        </div>
        `;
    },
    "Is Auto-Battle"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "invertCondition",
            // "target",

            // "action",
            // "valueList",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Is Auto-Battle");
        // initialCounter++;
        return `<div class="actionDetailBody2">
            <div class="rotationConditionOperatorHeaderInline">${parseRef.name}${parseRef.invertCondition ? " [NOT]" : ""}</div>
        </div>
        `;
    },
    "Is Extra-Turn"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            // "target",

            // "action",
            // "valueList",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Is Extra-Turn");
        // initialCounter++;
        return `<div class="actionDetailBody2">
            <div class="rotationConditionOperatorHeaderInline">${parseRef.name}</div>
        </div>
        `;
    },
    "Implant Weaknesses"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "target",

            "element",
            "resReduction",
            "prefWeakness",
            "maxImplant",
            "returnWeaknessVar",
            "noNewWeaknesses",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Implant Weaknesses");
        // initialCounter++;





        let parseString = "";
        // let refString = "";
        const hasParse = parseRef.noNewWeaknesses?.length;
        // const hasRef = parseRef.failed?.length;
        if (hasParse) {parseString += megaParsingFuckery.fillEventBodyBox(parseRef.noNewWeaknesses,initialCounter);}
        // if (hasRef) {refString += megaParsingFuckery.fillEventBodyBox(parseRef.failed,initialCounter);}

        // const conditionObject = parseRef.conditions;
        // const conditionName = conditionObject?.name;

        // let returnString = "" + (typeof conditionObject === "string" ? `<div class="rotationsConditionsBodyBox">${conditionObject}</div>` : "");
        // const functionExists = megaParsingFuckery[conditionName];
        // if (functionExists) {returnString += `<div class="rotationsConditionsBodyBox">` + functionExists(conditionObject,initialCounter) + `</div>`;}

        // if (!returnString) {
        //     console.log(conditionObject)
        //     throw new Error(`Missing condition display-only definition in IF: ${conditionName}`)
        // }


        // <div class="actionDetailBody">${parseRef.ability} from ${parseRef.from}</div>

        // rotationsSectionRowHolder
        // rotationConditionOperatorBox


        // <details class="rotationsPermaConditionsExpand" open="">
        //     <summary class="actionDetailBodyDetailExpandHeaderBackground clickable">Show Permanent Conditions (1)</summary><div class="actionDetailBody">- Skill Points: Current &gt;= 1</div>
        // </details>

        // if (!hasParse && !hasRef) {return "";}

        return `
        <details class="rotationsPermaConditionsExpand" open="">
            <summary class="rotationConditionOperatorHeaderAbilityTriggerConditionHeader clickable">
                <div class="rotationConditionOperatorHeaderCondition">${parseRef.name}</div>
            </summary>

            <div class="modifierDetailsBox">
                ${parseRef.target != undefined ? `<div class="actionDetailBody2">
                    <div class="rotationConditionOperatorHeaderInline">Element:</div>&nbsp;
                    ${Array.isArray(parseRef.target) ? megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter) : parseRef.target}
                </div>` : ""}
                ${parseRef.element != undefined ? `<div class="actionDetailBody2">
                    <div class="rotationConditionOperatorHeaderInline">Element:</div>&nbsp;
                    ${parseRef.element}
                </div>` : ""}
                ${parseRef.resReduction != undefined ? `<div class="actionDetailBody2">
                    <div class="rotationConditionOperatorHeaderInline">RES Reduction:</div>&nbsp;
                    ${parseRef.resReduction.displayLines ?? parseRef.resReduction}
                </div>` : ""}
                ${parseRef.maxImplant != undefined ? `<div class="actionDetailBody2">
                    <div class="rotationConditionOperatorHeaderInline">Max Implant Count:</div>&nbsp;
                    ${parseRef.maxImplant.displayLines ?? parseRef.maxImplant}
                </div>` : ""}
                ${parseRef.prefWeakness != undefined ? `<div class="actionDetailBody2">
                    <div class="rotationConditionOperatorHeaderInline">Element:</div>&nbsp;
                    ${parseRef.prefWeakness}
                </div>` : ""}
                ${parseRef.returnWeaknessVar != undefined ? `<div class="actionDetailBody2">
                    <div class="rotationConditionOperatorHeaderInline">Return Variables:</div>&nbsp;
                    ${parseRef.returnWeaknessVar}
                </div>` : ""}

            </div>

            <div class="rotationConditionOperatorBoxMain">
                ${hasParse ? `<div class="rotationConditionOperatorHeaderConditionELSE">NO NEW WEAKNESSES</div>
                <div class="rotationsSectionRowHolder${initialCounter%2 === 0 ? 2 : 1}">
                    ${parseString}
                </div>` : ""}
            </div>
        </details>
        `;
        
    },
    "Allow Queued Actions(Ult?)"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Allow Queued Actions(Ult?)");
        // initialCounter++;

        return "";
        // return `<div class="actionDetailBody2">
        //     <div class="rotationConditionOperatorHeaderInline">${parseRef.name}</div>&nbsp
        // </div>
        // `;
    },
    "Unknown Action To Define(Not always an error)"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Unknown Action To Define(Not always an error)");
        // initialCounter++;
        return `<div class="actionDetailBody2">
            <div class="rotationConditionOperatorHeaderInline">${parseRef.name}</div>&nbsp
        </div>
        `;
    },
    "Change Character UI"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "characterName",
            "target",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Change Character UI");
        // initialCounter++;
        return `<div class="actionDetailBody2">
            <div class="rotationConditionOperatorHeaderInline">Change Character UI:</div>&nbsp;
            ${parseRef.characterName} ${parseRef.target ? `on ${Array.isArray(parseRef.target) ? megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter) : parseRef.target}` : ""}
        </div>
        `;
    },
    "Update Ult Alt Display"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "variableName",
            "value",
            "target",
            "scope",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Update Ult Alt Display");
        // initialCounter++;
        return `<div class="actionDetailBody2">
            <div class="rotationConditionOperatorHeaderInline">${parseRef.name}</div>&nbsp;
        </div>`;
    },
     "Declare Custom Variable"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "variableName",
            "value",
            "target",
            "scope",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Declare Custom Variable");
        // initialCounter++;
        return `<div class="actionDetailBody2">
            <div class="rotationConditionOperatorHeaderInline">Declare:</div>&nbsp;
            ${parseRef.variableName} = ${parseRef.value?.displayLines ?? parseRef.value ?? "No value assignment(yet)/Reset"} ${parseRef.target ? `on ${Array.isArray(parseRef.target) ? megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter) : parseRef.target}` : ""}
        </div>
        <div class="modifierDetailsBox">
            ${parseRef.scope != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Context:</div>&nbsp;
                ${parseRef.scope}
            </div>` : ""}
        </div>`;
    },
    "Define Custom Variable"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "variableName",
            "value",
            "target",
            "scope",
            "skipWhenMindControlled",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Define Custom Variable");
        // initialCounter++;
        return `<div class="actionDetailBody2">
            <div class="rotationConditionOperatorHeaderInline">Define:</div>&nbsp;
            ${parseRef.variableName} = ${parseRef.value?.displayLines ?? parseRef.value} ${parseRef.target ? `on ${Array.isArray(parseRef.target) ? megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter) : parseRef.target}` : ""}
        </div>
        <div class="modifierDetailsBox">
            ${parseRef.scope != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Context:</div>&nbsp;
                ${parseRef.scope}
            </div>` : ""}
            ${parseRef.skipWhenMindControlled != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Skip while MindControlled:</div>&nbsp;
                ${parseRef.skipWhenMindControlled}
            </div>` : ""}
        </div>`;
    },
    "Define Custom Variable (VFX)"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "variableName",
            "value",
            "target",
            "scope",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Define Custom Variable");
        // initialCounter++;
        return `<div class="actionDetailBody2">
            <div class="rotationConditionOperatorHeaderInline">Define:</div>&nbsp;
            ${parseRef.variableName} = ${parseRef.value?.displayLines ?? parseRef.value} ${parseRef.target ? `on ${Array.isArray(parseRef.target) ? megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter) : parseRef.target}` : ""}
        </div>
        <div class="modifierDetailsBox">
            ${parseRef.scope != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Context:</div>&nbsp;
                ${parseRef.scope}
            </div>` : ""}
        </div>`;
    },
    "Define Custom Variable with Toughness Reduction Est"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "target",
            "targetDefender",
            "dmgType",
            "attackType",

            "toughnessValue",
            "reduceAllToughness",
            "toughnessValueForcedPercent",
            "variableName",
            // "roundBy",
            // "ignoreBelow",

            // "target2",
            // "modifier2",
            // "variable2",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Define Custom Variable with Toughness Reduction Est");
        // initialCounter++;

        return `<div class="actionDetailBody2">
            <div class="rotationConditionOperatorHeaderInline">Define with Toughness Red. Estimate:</div>&nbsp;
            ${parseRef.variableName}
        </div>
        <div class="modifierDetailsBox">
            ${parseRef.target != undefined ? `<div class="actionDetailBody2Detail">
                <div class="rotationConditionOperatorHeaderInline">Attacker:</div>&nbsp;
                ${Array.isArray(parseRef.target) ? megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter) : parseRef.target}
            </div>` : ""}
            ${parseRef.targetDefender != undefined ? `<div class="actionDetailBody2Detail">
                <div class="rotationConditionOperatorHeaderInline">Context:</div>&nbsp;
                ${Array.isArray(parseRef.targetDefender) ? megaParsingFuckery.makeConditionTargetBox(parseRef.targetDefender,initialCounter) : parseRef.targetDefender}
            </div>` : ""}
            ${parseRef.dmgType != undefined ? `<div class="actionDetailBody2Detail">
                <div class="rotationConditionOperatorHeaderInline">DMG Type:</div>&nbsp;
                ${parseRef.dmgType}
            </div>` : ""}
            ${parseRef.attackType != undefined ? `<div class="actionDetailBody2Detail">
                <div class="rotationConditionOperatorHeaderInline">Attack Type:</div>&nbsp;
                ${parseRef.attackType}
            </div>` : ""}
            ${parseRef.toughnessValue != undefined ? `<div class="actionDetailBody2Detail">
                <div class="rotationConditionOperatorHeaderInline">Toughness Value:</div>&nbsp;
                ${parseRef.toughnessValue.displayLines ?? parseRef.toughnessValue}
            </div>` : ""}
            ${parseRef.reduceAllToughness != undefined ? `<div class="actionDetailBody2Detail">
                <div class="rotationConditionOperatorHeaderInline">Reduce All Toughness:</div>&nbsp;
                ${parseRef.reduceAllToughness}
            </div>` : ""}
            ${parseRef.toughnessValueForcedPercent != undefined ? `<div class="actionDetailBody2Detail">
                <div class="rotationConditionOperatorHeaderInline">Forced %:</div>&nbsp;
                ${parseRef.toughnessValueForcedPercent.displayLines ?? parseRef.toughnessValueForcedPercent}
            </div>` : ""}
            
        </div>
        `;
    },
    "Define Custom Variable with Clamp Configuration"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            // "target",
            // "modifier",
            // "variable",

            "context",
            "variableName",
            "roundBy",
            "ignoreBelow",

            // "target2",
            // "modifier2",
            // "variable2",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Define Custom Variable with Clamp Configuration");
        // initialCounter++;

        return `<div class="actionDetailBody2">
            <div class="rotationConditionOperatorHeaderInline">Define with Restrictions:</div>&nbsp;
            ${parseRef.variableName}
        </div>
        <div class="modifierDetailsBox">
            ${parseRef.context != undefined ? `<div class="actionDetailBody2Detail">
                <div class="rotationConditionOperatorHeaderInline">Context:</div>&nbsp;
                ${parseRef.context}
            </div>` : ""}
            ${parseRef.roundBy != undefined ? `<div class="actionDetailBody2Detail">
                <div class="rotationConditionOperatorHeaderInline">Rounding Rule:</div>&nbsp;
                ${parseRef.roundBy}
            </div>` : ""}
            ${parseRef.ignoreBelow != undefined ? `<div class="actionDetailBody2Detail">
                <div class="rotationConditionOperatorHeaderInline">Threshold:</div>&nbsp;
                ${parseRef.ignoreBelow}
            </div>` : ""}
            
        </div>
        `;
    },
    "Define Custom Variable with Copy"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "target",
            "modifier",
            "variable",
            "scope",

            "target2",
            "modifier2",
            "variable2",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Define Custom Variable with Copy");
        // initialCounter++;

        return `<div class="actionDetailBody2">
            <div class="rotationConditionOperatorHeaderInline">Define with Copy:</div>&nbsp;
        </div>
        <div class="modifierDetailsBox">
            ${parseRef.variable != undefined ? `<div class="actionDetailBody2Detail">
                <div class="rotationConditionOperatorHeaderInline">Copy From:</div>&nbsp;
                ${parseRef.variable} ${parseRef.modifier ? `from (${parseRef.modifier})` : ""} on ${Array.isArray(parseRef.target) ? megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter) : parseRef.target}
            </div>` : ""}
            ${parseRef.variable2 != undefined ? `<div class="actionDetailBody2Detail">
                <div class="rotationConditionOperatorHeaderInline">Paste To:</div>&nbsp;
                ${parseRef.variable2} ${parseRef.modifier2 ? `from (${parseRef.modifier2})` : ""} on ${Array.isArray(parseRef.target2) ? megaParsingFuckery.makeConditionTargetBox(parseRef.target2,initialCounter) : parseRef.target2}
            </div>` : ""}
            ${parseRef.scope != undefined ? `<div class="actionDetailBody2Detail">
                <div class="rotationConditionOperatorHeaderInline">Context:</div>&nbsp;
                ${parseRef.scope}
            </div>` : ""}
        </div>
        `;
    },
    "Define Custom Variable with Weakness Count"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "target",
            // "modifier",
            "variable",
            "context",

            "target2",
            "weaknessFilter",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Define Custom Variable with Weakness Count");
        // initialCounter++;

        return `<div class="actionDetailBody2">
            <div class="rotationConditionOperatorHeaderInline">Define with Weakness Counts:</div>&nbsp;
            ${parseRef.variable}
        </div>
        <div class="modifierDetailsBox">
            ${parseRef.target != undefined ? `<div class="actionDetailBody2Detail">
                <div class="rotationConditionOperatorHeaderInline">From:</div>&nbsp;
                ${Array.isArray(parseRef.target) ? megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter) : parseRef.target}
            </div>` : ""}
            ${parseRef.target2 != undefined ? `<div class="actionDetailBody2Detail">
                <div class="rotationConditionOperatorHeaderInline">Write To:</div>&nbsp;
                ${Array.isArray(parseRef.target2) ? megaParsingFuckery.makeConditionTargetBox(parseRef.target2,initialCounter) : parseRef.target2}
            </div>` : ""}
            ${parseRef.context != undefined ? `<div class="actionDetailBody2Detail">
                <div class="rotationConditionOperatorHeaderInline">Context:</div>&nbsp;
                ${parseRef.context}
            </div>` : ""}
            ${parseRef.weaknessFilter != undefined ? `<div class="actionDetailBody2Detail">
                <div class="rotationConditionOperatorHeaderInline">Weakness Filter:</div>&nbsp;
                ${parseRef.weaknessFilter}
            </div>` : ""}
        </div>
        `;
    },
    "Define Custom Variable with Changes to Stats"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "variableName",
            "type",
            "context",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Define Custom Variable with Changes to Stats");
        // initialCounter++;
        return `<div class="actionDetailBody2">
            <div class="rotationConditionOperatorHeaderInline">Define with Changes in Stat:</div>&nbsp;
            ${parseRef.variableName}${parseRef.type ? ` (${parseRef.type})` : ""}
        </div>
        <div class="modifierDetailsBox">
            ${parseRef.context != undefined ? `<div class="actionDetailBody2Detail">
                <div class="rotationConditionOperatorHeaderInline">Context:</div>&nbsp;
                ${parseRef.context}
            </div>` : ""}
        </div>`;
    },
    "Define Custom Variable with Ability Property"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "variableName",
            "propertyName",
            "skillKey",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Define Custom Variable with Ability Property");
        // initialCounter++;
        return `<div class="actionDetailBody2">
            <div class="rotationConditionOperatorHeaderInline">Define with Ability Property:</div>&nbsp;
            ${parseRef.variableName} = ${parseRef.skillKey}'s ${parseRef.propertyName}
        </div>`;
    },
    "Define Custom Variable with SkillPoint Changes"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "variableName",
            "type",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Define Custom Variable with SkillPoint Changes");
        // initialCounter++;
        return `<div class="actionDetailBody2">
            <div class="rotationConditionOperatorHeaderInline">Define with Changes in Skill Points:</div>&nbsp;
            ${parseRef.variableName}${parseRef.type ? ` (${parseRef.type})` : ""}
        </div>`;
    },
    "Define Custom Variable with Shield Value"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "variableName",
            "target",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Define Custom Variable with Shield Value");
        // initialCounter++;
        return `<div class="actionDetailBody2">
            <div class="rotationConditionOperatorHeaderInline">Define with Shield:</div>&nbsp;
            ${parseRef.variableName} on ${Array.isArray(parseRef.target) ? megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter) : parseRef.target}
        </div>`;
    },
    "Define Custom Variable with Skill Points"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "variableName",
            // "target",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Define Custom Variable with Skill Points");
        // initialCounter++;
        return `<div class="actionDetailBody2">
            <div class="rotationConditionOperatorHeaderInline">Define with Skill Points:</div>&nbsp;
            ${parseRef.variableName}
        </div>`;
    },
    "Define Custom Variable with Attack Targets"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "variableName",
            "target",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Define Custom Variable with Attack Targets");
        // initialCounter++;
        return `<div class="actionDetailBody2">
            <div class="rotationConditionOperatorHeaderInline">Define with Attack Target Count:</div>&nbsp;
            ${parseRef.variableName} = ATTACK TARGETS from attack by ${Array.isArray(parseRef.target) ? megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter) : parseRef.target}
        </div>`;
    },
    "Define Custom Variable with Skill Point Max"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "variableName",
            // "target",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Define Custom Variable with Skill Point Max");
        // initialCounter++;
        return `<div class="actionDetailBody2">
            <div class="rotationConditionOperatorHeaderInline">Define with Skill Point Maximum:</div>&nbsp;
            ${parseRef.variableName}
        </div>`;
    },
    "Define Custom Variable with Healing"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "variableName",
            "target",
            "context",
            "healProperty",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Define Custom Variable with Healing");
        // initialCounter++;
        return `<div class="actionDetailBody2">
            <div class="rotationConditionOperatorHeaderInline">Define with Healing:</div>&nbsp;
            ${parseRef.variableName} on ${Array.isArray(parseRef.target) ? megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter) : parseRef.target}
        </div>
        <div class="modifierDetailsBox">
            ${parseRef.context != undefined ? `<div class="actionDetailBody2Detail">
                <div class="rotationConditionOperatorHeaderInline">Context:</div>&nbsp;
                ${parseRef.context}
            </div>` : ""}
            ${parseRef.healProperty != undefined ? `<div class="actionDetailBody2Detail">
                <div class="rotationConditionOperatorHeaderInline">Healing Property:</div>&nbsp;
                ${parseRef.healProperty}
            </div>` : ""}
        </div>`;
    },
    "Override Modifier Name"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "modifierName",
            "modifierNameUpdate",
            // "function",
            // "value",
            "target",
            // "valueType",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Override Modifier Name");

        // const functionAdjustments = {
        //     "Add": "+",
        // }
        // const finalAdjustment = parseRef.function ? functionAdjustments[parseRef.function] : "=";
        // if (!finalAdjustment) {throw new Error(`Unknown function key in Define Modifier Variable: ${parseRef.function}`)}

        // initialCounter++;
        return `<div class="actionDetailBody">
            <div class="rotationConditionOperatorHeaderInline">Override Modifier Name:</div>&nbsp;
            ${parseRef.modifierName ?? ""} to ${parseRef.modifierNameUpdate ?? ""}${parseRef.target ? ` from ${Array.isArray(parseRef.target) ? megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter) : parseRef.target}` : ""}
        </div>`;
    },
    "Modify Skill-Point Extras"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            // "modifierName",
            "function",
            "value",
            "target",
            // "valueType",
            "silentChange",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Modify Skill-Point Extras");

        const functionAdjustments = {
            "Add": "+",
            "Set": "=",
        }
        const finalAdjustment = parseRef.function ? functionAdjustments[parseRef.function] : "=";
        if (!finalAdjustment) {throw new Error(`Unknown function key in Modify Skill-Point Extras: ${parseRef.function}`)}

        // initialCounter++;
        return `<div class="actionDetailBody2">
            <div class="rotationConditionOperatorHeaderInline">Modify Skill-Point Extras:</div>&nbsp;
            Extras ${finalAdjustment} ${parseRef.value?.displayLines ?? parseRef.value ?? (finalAdjustment === "+" ? "-1(no value defined)" : "")}
        </div>
        <div class="modifierDetailsBox">
            ${parseRef.target != undefined ? `<div class="actionDetailBody2Detail">
                <div class="rotationConditionOperatorHeaderInline">Target:</div>&nbsp;
                ${Array.isArray(parseRef.target) ? megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter) : parseRef.target}
            </div>` : ""}
            ${parseRef.silentChange != undefined ? `<div class="actionDetailBody2Detail">
                <div class="rotationConditionOperatorHeaderInline">Silent Change:</div>&nbsp;
                ${parseRef.silentChange}
            </div>` : ""}
        </div>`;
    },
    "Define Modifier Variable"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "modifierName",
            "function",
            "value",
            "target",
            "valueType",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Define Modifier Variable");

        const functionAdjustments = {
            "Add": "+",
        }
        const finalAdjustment = parseRef.function ? functionAdjustments[parseRef.function] : "=";
        if (!finalAdjustment) {throw new Error(`Unknown function key in Define Modifier Variable: ${parseRef.function}`)}

        // initialCounter++;
        return `<div class="actionDetailBody2">
            <div class="rotationConditionOperatorHeaderInline">Adjust Modifier Value:</div>&nbsp;
            ${parseRef.modifierName ?? ""}${parseRef.valueType ? `(${parseRef.valueType})` : ""} ${finalAdjustment} ${parseRef.value?.displayLines ?? parseRef.value ?? (finalAdjustment === "+" ? "-1(no value defined)" : "")}${parseRef.target ? ` from ${Array.isArray(parseRef.target) ? megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter) : parseRef.target}` : ""}
        </div>`;
    },
    "Define Modifier Variable with Flag"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "valueType",
            "function",
            "value",
            "target",
            "flagName",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Define Modifier Variable with Flag");

        const functionAdjustments = {
            "Add": "+",
        }
        const finalAdjustment = parseRef.function ? functionAdjustments[parseRef.function] : "=";
        if (!finalAdjustment) {throw new Error(`Unknown function key in Define Modifier Variable with Flag: ${parseRef.function}`)}

        // initialCounter++;
        return `<div class="actionDetailBody2">
            <div class="rotationConditionOperatorHeaderInline">Adjust Modifier Value w/Flag:</div>&nbsp;
            ${parseRef.valueType ?? ""}${finalAdjustment} ${parseRef.value?.displayLines ?? parseRef.value ?? (finalAdjustment === "+" ? "-1(no value defined)" : "")}${parseRef.target ? ` on ${Array.isArray(parseRef.target) ? megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter) : parseRef.target}` : ""}
        </div>
        <div class="modifierDetailsBox">
            ${parseRef.flagName != undefined ? `<div class="actionDetailBody2Detail">
                <div class="rotationConditionOperatorHeaderInline">Flag Name(s):</div>&nbsp;
                ${parseRef.flagName}
            </div>` : ""}
        </div>`;
    },
    "Change Skill Point Max"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            // "valueType",
            "function",
            "value",
            // "target",
            // "flagName",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Change Skill Point Max");

        const functionAdjustments = {
            "Add": "+",
        }
        const finalAdjustment = parseRef.function ? functionAdjustments[parseRef.function] : "=";
        if (!finalAdjustment) {throw new Error(`Unknown function key in Change Skill Point Max: ${parseRef.function}`)}

        // initialCounter++;
        return `<div class="actionDetailBody2">
            <div class="rotationConditionOperatorHeaderInline">Change Skill Point Max:</div>&nbsp;
            ${finalAdjustment} ${parseRef.value?.displayLines ?? parseRef.value ?? (finalAdjustment === "+" ? "-1(no value defined)" : "")}
        </div>`;
    },
    "Define Modifier-Specific Variable"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "modifierName",
            "variableName",
            "value",
            "target",
            "adjustmentType",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Define Modifier-Specific Variable");

        // const functionAdjustments = {
        //     "Add": "+",
        // }
        // const finalAdjustment = parseRef.function ? functionAdjustments[parseRef.function] : "=";
        // if (!finalAdjustment) {throw new Error(`Unknown function key in Define Modifier Variable: ${parseRef.function}`)}

        // initialCounter++;
        return `<div class="actionDetailBody2">
            <div class="rotationConditionOperatorHeaderInline">Define Modifier Value:</div>&nbsp;
            ${parseRef.variableName}(${parseRef.modifierName}) =${parseRef.adjustmentType ? `(${parseRef.adjustmentType})` : ""} ${parseRef.value?.displayLines ?? parseRef.value}${parseRef.target ? ` on ${Array.isArray(parseRef.target) ? megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter) : parseRef.target}` : ""}
        </div>`;
    },
    "Adjust Variable Value"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "variableName",
            "value",
            "adjustmentType",
            "on",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Adjust Variable Value");

        // initialCounter++;
        const adjustmentConversions = {
            "Add to Value (Default)": "+=",
            "Overwrite Value": "="
        }
        const adjustmentOperator = adjustmentConversions[parseRef.adjustmentType];
        // console.log(parseRef.adjustmentType)

        return `<div class="actionDetailBody2">
            <div class="rotationConditionOperatorHeaderInline">Adjust Variable:</div>&nbsp;
            ${parseRef.variableName} ${adjustmentOperator ?? "+="} ${parseRef.value.displayLines ?? parseRef.value}${parseRef.on ? ` on ${parseRef.on}` : ""}
        </div>`;
    },
    "Adjust Target Healing Stats"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "on",
            "statName",
            "value",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Adjust Target Healing Stats");

        // const functionAdjustments = {
        //     "Add": "+",
        // }
        // const finalAdjustment = parseRef.function ? functionAdjustments[parseRef.function] : "=";
        // if (!finalAdjustment) {throw new Error(`Unknown function key in Define Modifier Variable: ${parseRef.function}`)}

        // initialCounter++;
        return `<div class="actionDetailBody2">
            <div class="rotationConditionOperatorHeaderInline">Adjust Target Healing Stats:</div>&nbsp;
            ${parseRef.statName} (${parseRef.value?.displayLines ?? parseRef.value}) on ${parseRef.on}
        </div>`;
    },
    "Adjust Target Stats"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "on",
            "statName",
            "value",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Adjust Target Stats");

        // const functionAdjustments = {
        //     "Add": "+",
        // }
        // const finalAdjustment = parseRef.function ? functionAdjustments[parseRef.function] : "=";
        // if (!finalAdjustment) {throw new Error(`Unknown function key in Define Modifier Variable: ${parseRef.function}`)}

        // initialCounter++;
        return `<div class="actionDetailBody2">
            <div class="rotationConditionOperatorHeaderInline">Adjust Target Stats:</div>&nbsp;
            ${parseRef.statName} (${parseRef.value?.displayLines ?? parseRef.value}) on ${parseRef.on}
        </div>`;
    },
    "Stack Target Resistance"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "target",
            "statName",
            "value",
            // "isRefresh",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Stack Target Resistance");

        // const functionAdjustments = {
        //     "Add": "+",
        // }
        // const finalAdjustment = parseRef.function ? functionAdjustments[parseRef.function] : "=";
        // if (!finalAdjustment) {throw new Error(`Unknown function key in Define Modifier Variable: ${parseRef.function}`)}

        // initialCounter++;
        return `<div class="actionDetailBody2">
            <div class="rotationConditionOperatorHeaderInline">Stack Target Resistance:</div>&nbsp;
            ${parseRef.statName} (${parseRef.value?.displayLines ?? parseRef.value}) on ${Array.isArray(parseRef.target) ? megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter) : parseRef.target}
        </div>
        <div class="modifierDetailsBox">
            ${parseRef.isRefresh != undefined ? `<div class="actionDetailBody2Detail">
                <div class="rotationConditionOperatorHeaderInline">Is Refresh:</div>&nbsp;
                ${parseRef.isRefresh}
            </div>` : ""}
        </div>`;
    },
    "Reinstance Stat Value/Bounds"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "target",
            "statName",
            "value",
            "floor",
            "ceiling",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Reinstance Stat Value/Bounds");

        // const functionAdjustments = {
        //     "Add": "+",
        // }
        // const finalAdjustment = parseRef.function ? functionAdjustments[parseRef.function] : "=";
        // if (!finalAdjustment) {throw new Error(`Unknown function key in Define Modifier Variable: ${parseRef.function}`)}

        // initialCounter++;
        return `<div class="actionDetailBody2">
            <div class="rotationConditionOperatorHeaderInline">Reinstance Stat Value/Bounds:</div>&nbsp;
            ${parseRef.statName} (${parseRef.value?.displayLines ?? parseRef.value}) on ${Array.isArray(parseRef.target) ? megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter) : parseRef.target}
        </div>
        <div class="modifierDetailsBox">
            ${parseRef.value != undefined ? `<div class="actionDetailBody2Detail">
                <div class="rotationConditionOperatorHeaderInline">New Value:</div>&nbsp;
                ${parseRef.value?.displayLines ?? parseRef.value}
            </div>` : ""}
            ${parseRef.floor != undefined ? `<div class="actionDetailBody2Detail">
                <div class="rotationConditionOperatorHeaderInline">Floor:</div>&nbsp;
                ${parseRef.floor?.displayLines ?? parseRef.floor}
            </div>` : ""}
            ${parseRef.ceiling != undefined ? `<div class="actionDetailBody2Detail">
                <div class="rotationConditionOperatorHeaderInline">Ceiling:</div>&nbsp;
                ${parseRef.ceiling?.displayLines ?? parseRef.ceiling}
            </div>` : ""}
        </div>`;
    },
    "Stack Target Stat Value"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "target",
            "statName",
            "value",
            "isRefresh",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Stack Target Stat Value");

        // const functionAdjustments = {
        //     "Add": "+",
        // }
        // const finalAdjustment = parseRef.function ? functionAdjustments[parseRef.function] : "=";
        // if (!finalAdjustment) {throw new Error(`Unknown function key in Define Modifier Variable: ${parseRef.function}`)}

        // initialCounter++;
        return `<div class="actionDetailBody2">
            <div class="rotationConditionOperatorHeaderInline">Stack Target Stat Value:</div>&nbsp;
            ${parseRef.statName} (${parseRef.value?.displayLines ?? parseRef.value}) on ${Array.isArray(parseRef.target) ? megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter) : parseRef.target}
        </div>
        <div class="modifierDetailsBox">
            ${parseRef.isRefresh != undefined ? `<div class="actionDetailBody2Detail">
                <div class="rotationConditionOperatorHeaderInline">Is Refresh:</div>&nbsp;
                ${parseRef.isRefresh}
            </div>` : ""}
        </div>`;
    },
    "Consume"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "consumeFrom",
            "target",
            "consumePercent",
            "flatConsume",
            "consumeFloor",
            "dynamicAssignment",
            "attackType",
            "DamageType",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Consume");

        // const functionAdjustments = {
        //     "Add": "+",
        // }
        // const finalAdjustment = parseRef.function ? functionAdjustments[parseRef.function] : "=";
        // if (!finalAdjustment) {throw new Error(`Unknown function key in Define Modifier Variable: ${parseRef.function}`)}

        // initialCounter++;
        return `<div class="actionDetailBody2">
            <div class="rotationConditionOperatorHeaderInline">Consume:</div>&nbsp;
            ${parseRef.consumeFrom} ${parseRef.consumeFloor != undefined ? `(Floor: ${parseRef.consumeFloor})` : ""} from ${Array.isArray(parseRef.target) ? megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter) : parseRef.target}
        </div>
        
        <div class="modifierDetailsBox">
            ${parseRef.consumePercent != undefined ? `<div class="actionDetailBody2Detail">
                <div class="rotationConditionOperatorHeaderInline">Percent Consume:</div>&nbsp;
                ${parseRef.consumePercent.displayLines ?? parseRef.consumePercent}
            </div>` : ""}
            ${parseRef.flatConsume != undefined ? `<div class="actionDetailBody2Detail">
                <div class="rotationConditionOperatorHeaderInline">Flat Consume:</div>&nbsp;
                ${parseRef.flatConsume.displayLines ?? parseRef.flatConsume}
            </div>` : ""}
            ${parseRef.dynamicAssignment != undefined ? `<div class="actionDetailBody2Detail">
                <div class="rotationConditionOperatorHeaderInline">Assign Ratio To:</div>&nbsp;
                ${parseRef.dynamicAssignment}
            </div>` : ""}
            ${parseRef.attackType != undefined ? `<div class="actionDetailBody2Detail">
                <div class="rotationConditionOperatorHeaderInline">Attack Type:</div>&nbsp;
                ${parseRef.attackType}
            </div>` : ""}
            ${parseRef.DamageType != undefined ? `<div class="actionDetailBody2Detail">
                <div class="rotationConditionOperatorHeaderInline">Damage Type:</div>&nbsp;
                ${parseRef.DamageType}
            </div>` : ""}
        </div>`;
    },
    "Trigger Modifier Event"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "target",
            "variableName",
            "eventType",
            "value"
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Trigger Modifier Event");

        // const functionAdjustments = {
        //     "Add": "+",
        // }
        // const finalAdjustment = parseRef.function ? functionAdjustments[parseRef.function] : "=";
        // if (!finalAdjustment) {throw new Error(`Unknown function key in Define Modifier Variable: ${parseRef.function}`)}

        // initialCounter++;
        console.log(parseRef.value.displayLines)
        return `<div class="actionDetailBody2">
            <div class="rotationConditionOperatorHeaderInline">Trigger Modifier Event:</div>&nbsp;
            ${parseRef.eventType}
        </div>
        
        <div class="modifierDetailsBox">
            ${parseRef.target != undefined ? `<div class="actionDetailBody2Detail">
                <div class="rotationConditionOperatorHeaderInline">Target:</div>&nbsp;
                ${Array.isArray(parseRef.target) ? megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter) : parseRef.target}
            </div>` : ""}
            ${parseRef.variableName != undefined ? `<div class="actionDetailBody2Detail">
                <div class="rotationConditionOperatorHeaderInline">Variable Name:</div>&nbsp;
                ${parseRef.variableName}
            </div>` : ""}
            ${parseRef.value != undefined ? `<div class="actionDetailBody2Detail">
                <div class="rotationConditionOperatorHeaderInline">Value:</div>&nbsp;
                
                ${parseRef.value.displayLines ?? (typeof parseRef.value === "object" ? megaParsingFuckery.ValuePerStackParsing(parseRef.value,initialCounter) : parseRef.value)}
            </div>` : ""}
        </div>`;
    },
    "Read Variable Value"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "variableName",
            "adjustmentType",
            "on",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Read Variable Value");

        // initialCounter++;
        const adjustmentConversions = {
            "Add to Value (Default)": "+=",
            "Overwrite Value": "="
        }
        const adjustmentOperator = adjustmentConversions[parseRef.adjustmentType];
        // console.log(parseRef.adjustmentType)

        // console.log(adjustmentOperator,parseRef.adjustmentType)
        return `<div class="actionDetailBody2">
            <div class="rotationConditionOperatorHeaderInline">Read Variable:</div>&nbsp;
            ${parseRef.variableName}${parseRef.on ? ` on ${parseRef.on}` : ""} ${parseRef.value?.displayLines ?? parseRef.value ? "Value found, error, let vash know" : ""}
        </div>`;
    },
    "Define Custom Variable with Damage Data"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "variableName",
            "target",
            "value",
            "context",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Define Custom Variable with Damage Data");

        let warningString = "";
        if (parseRef.warningType === "MaxToughness") {
            warningString += `<div class="customMenuSearchNoteWarning">PLEASE NOTE that toughness values in the game are 3x what you see displayed. If this value is used in a formula, then because of this the formula will NOT be the one you are familiar with.</div>`
        }

        // initialCounter++;
        return `<div class="actionDetailBody2">
            <div class="rotationConditionOperatorHeaderInline">Define with DMG Data:</div>&nbsp;
            ${parseRef.variableName} = ${parseRef.value?.displayLines ?? parseRef.value} from ${Array.isArray(parseRef.target) ? megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter) : parseRef.target}
        </div>
        <div class="modifierDetailsBox">
            ${parseRef.context != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Context:</div>&nbsp;
                ${parseRef.context}
            </div>` : ""}
        </div>`;
    },
    "Define Custom Variable with Stat"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "variableName",
            "target",
            "value",
            "warningType",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Define Custom Variable with Stat");

        let warningString = "";
        if (parseRef.warningType === "MaxToughness") {
            warningString += `<div class="customMenuSearchNoteWarning">PLEASE NOTE that toughness values in the game are 3x what you see displayed. If this value is used in a formula, then because of this the formula will NOT be the one you are familiar with.</div>`
        }

        // initialCounter++;
        return `<div class="actionDetailBody2">
            <div class="rotationConditionOperatorHeaderInline">Define with Stat:</div>&nbsp;
            ${parseRef.variableName} = ${parseRef.value.displayLines ?? parseRef.value} from ${Array.isArray(parseRef.target) ? megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter) : parseRef.target}
        </div>
        ${warningString ?? ""}`;
    },
    "Define Custom Variable with Varying Data"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "variableName",
            "target",
            "value",
            "context",
            // "warningType",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Define Custom Variable with Varying Data");

        let warningString = "";
        if (parseRef.warningType === "MaxToughness") {
            warningString += `<div class="customMenuSearchNoteWarning">PLEASE NOTE that toughness values in the game are 3x what you see displayed. If this value is used in a formula, then because of this the formula will NOT be the one you are familiar with.</div>`
        }

        // initialCounter++;
        return `<div class="actionDetailBody2">
            <div class="rotationConditionOperatorHeaderInline">Define with Misc Data:</div>&nbsp;
            ${parseRef.variableName} = ${parseRef.value?.displayLines ?? parseRef.value} from ${Array.isArray(parseRef.target) ? megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter) : parseRef.target}
        </div>
        <div class="modifierDetailsBox">
            ${parseRef.context != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Context:</div>&nbsp;
                ${parseRef.context}
            </div>` : ""}
        </div>`;
    },
    "Define Custom Variable with Flag Resistance"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "variableName",
            "target",
            // "value",
            "flagName",
            "context",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Define Custom Variable with Flag Resistance");
        // initialCounter++;
        return `<div class="actionDetailBody2">
            <div class="rotationConditionOperatorHeaderInline">Define with Base Break DMG:</div>&nbsp;
            ${parseRef.variableName} = RESISTANCE ${parseRef.flagName} 
        </div>
        <div class="modifierDetailsBox">
            ${parseRef.context != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Context:</div>&nbsp;
                ${parseRef.context}
            </div>` : ""}
            ${parseRef.target != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Target:</div>&nbsp;
                ${Array.isArray(parseRef.target) ? megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter) : parseRef.target}
            </div>` : ""}
        </div>`;
    },
    "Define Custom Variable with Base Break Damage"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "variableName",
            "target",
            // "value",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Define Custom Variable with Base Break Damage");
        // initialCounter++;
        return `<div class="actionDetailBody2">
            <div class="rotationConditionOperatorHeaderInline">Define with Base Break DMG:</div>&nbsp;
            ${parseRef.variableName} from ${Array.isArray(parseRef.target) ? megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter) : parseRef.target}
        </div>`;
    },
    "Define Custom Variable with Team Count"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "variableName",
            "target",
            // "value",
            "livingTargets",
            "conditions",
            "context",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Define Custom Variable with Team Count");

        const conditionObject = parseRef.conditions;
        const conditionName = conditionObject?.name;
        let returnString = "" + (typeof conditionObject === "string" ? `<div class="rotationsConditionsBodyBox">${conditionObject}</div>` : "");
        const functionExists = megaParsingFuckery[conditionName];
        if (functionExists) {returnString += `<div class="rotationsConditionsBodyBox">` + functionExists(conditionObject,initialCounter) + `</div>`;}

        if (conditionObject && !returnString) {throw new Error(`Missing condition display-only definition in IF: ${conditionName}`)}
        // initialCounter++;
        return `<div class="actionDetailBody2">
            <div class="rotationConditionOperatorHeaderInline">Define with Team Count:</div>&nbsp;
            ${parseRef.variableName} = ${parseRef.livingTargets ? `(Living Targets)` : ""}${Array.isArray(parseRef.target) ? megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter) : parseRef.target}
        </div>
        ${returnString}
        <div class="modifierDetailsBox">
            ${parseRef.context != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Context:</div>&nbsp;
                ${parseRef.context}
            </div>` : ""}
        </div>`;
    },
    "Define Custom Variable with Added Value"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "variableName",
            "target",
            "value",
            "context",
            "min",
            "max",
            // "livingTargets",
            // "conditions",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Define Custom Variable with Added Value");

        const conditionObject = parseRef.conditions;
        const conditionName = conditionObject?.name;
        let returnString = "" + (typeof conditionObject === "string" ? `<div class="rotationsConditionsBodyBox">${conditionObject}</div>` : "");
        const functionExists = megaParsingFuckery[conditionName];
        if (functionExists) {returnString += `<div class="rotationsConditionsBodyBox">` + functionExists(conditionObject,initialCounter) + `</div>`;}

        if (conditionObject && !returnString) {throw new Error(`Missing condition display-only definition in IF: ${conditionName}`)}
        // initialCounter++;
        return `<div class="actionDetailBody2">
            <div class="rotationConditionOperatorHeaderInline">Define with Added Value:</div>&nbsp;
            ${parseRef.variableName} += ${parseRef.value.displayLines ?? parseRef.value} ${parseRef.target ? `on ${Array.isArray(parseRef.target) ? megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter) : parseRef.target}` : ""}
        </div>
        ${returnString}
        <div class="modifierDetailsBox">
            ${parseRef.context != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Context:</div>&nbsp;
                ${parseRef.context}
            </div>` : ""}
            ${parseRef.min != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Min:</div>&nbsp;
                ${parseRef.min.displayLines ?? parseRef.min}
            </div>` : ""}
            ${parseRef.max != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Max:</div>&nbsp;
                ${parseRef.max.displayLines ?? parseRef.max}
            </div>` : ""}
        </div>`;
    },
    "Trigger: Ability End"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "skipAttackSettle",
            // "matchToPathFrom",
            // "context",
            // "value",
            // "variableName",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Trigger: Ability End");
        // initialCounter++;
        return `<div class="actionDetailBody2">
            <div class="rotationConditionOperatorHeaderInline">Trigger: Ability End:</div>
        </div>
        <div class="modifierDetailsBox">
            ${parseRef.skipAttackSettle != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Skip Attack Settlement:</div>&nbsp;
                ${parseRef.skipAttackSettle}
            </div>` : ""}
        </div>`;
    },
    "Trigger: Attack End"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "skipDeathSettle",
            "fakeCharacterAttack",
            // "matchToPathFrom",
            // "context",
            // "value",
            // "variableName",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Trigger: Attack End");
        // initialCounter++;
        return `<div class="actionDetailBody2">
            <div class="rotationConditionOperatorHeaderInline">Trigger: Attack End:</div>
        </div>
        <div class="modifierDetailsBox">
            ${parseRef.skipDeathSettle != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Skip Death Settlement:</div>&nbsp;
                ${parseRef.skipDeathSettle}
            </div>` : ""}
            ${parseRef.fakeCharacterAttack != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Fake Character Attack:</div>&nbsp;
                ${parseRef.fakeCharacterAttack}
            </div>` : ""}
        </div>`;
    },
    "Define Custom Variable with Ability Hits"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "target",
            // "matchToPathFrom",
            // "context",
            // "value",
            "variableName",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Define Custom Variable with Ability Hits");
        // initialCounter++;
        return `<div class="actionDetailBody2">
            <div class="rotationConditionOperatorHeaderInline">Define with Ability Hits:</div>&nbsp;
            ${parseRef.variableName} = Hits from ${Array.isArray(parseRef.matchToPathFrom) ? megaParsingFuckery.makeConditionTargetBox(parseRef.matchToPathFrom,initialCounter) : parseRef.matchToPathFrom}
        </div>`;
    },
    "Define Custom Variable with Matching Path"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "target",
            "matchToPathFrom",
            "context",
            // "value",
            "variableName",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Define Custom Variable with Team Count");
        // initialCounter++;
        return `<div class="actionDetailBody2">
            <div class="rotationConditionOperatorHeaderInline">Define with Matching Paths:</div>&nbsp;
            ${parseRef.variableName} = Entites that match Path of ${Array.isArray(parseRef.matchToPathFrom) ? megaParsingFuckery.makeConditionTargetBox(parseRef.matchToPathFrom,initialCounter) : parseRef.matchToPathFrom}
        </div>
        <div class="modifierDetailsBox">
            ${parseRef.target != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Target Pool:</div>&nbsp;
                ${Array.isArray(parseRef.target) ? megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter) : parseRef.target}
            </div>` : ""}
            ${parseRef.context != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Context:</div>&nbsp;
                ${parseRef.context}
            </div>` : ""}
        </div>`;
    },
    "Define Custom Variable with WorldLevel"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "variableName",
            "target",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Define Custom Variable with WorldLevel");
        // initialCounter++;
        return `<div class="actionDetailBody2">
            <div class="rotationConditionOperatorHeaderInline">Define with Equilibrium Level:</div>&nbsp;
            ${parseRef.variableName} = Equilibrium Level on ${Array.isArray(parseRef.target) ? megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter) : parseRef.target}
        </div>`;
    },
    "Define Custom Variable with HP%"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "variableName",
            "target",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Define Custom Variable with HP%");
        // initialCounter++;
        return `<div class="actionDetailBody2">
            <div class="rotationConditionOperatorHeaderInline">Define with HP%:</div>&nbsp;
            ${parseRef.variableName} = current HP Percent on ${Array.isArray(parseRef.target) ? megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter) : parseRef.target}
        </div>`;
    },
    "Define Custom Variable with Status Counter"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "variableName",
            "target",
            "casterFilter",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Define Custom Variable with Status Counter");
        // initialCounter++;
        return `<div class="actionDetailBody2">
            <div class="rotationConditionOperatorHeaderInline">Define with Status Count:</div>&nbsp;
            ${parseRef.variableName} = current Status Count on ${Array.isArray(parseRef.target) ? megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter) : parseRef.target}
        </div>
        <div class="modifierDetailsBox">
            ${parseRef.casterFilter != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Caster Filter:</div>&nbsp;
                ${Array.isArray(parseRef.casterFilter) ? megaParsingFuckery.makeConditionTargetBox(parseRef.casterFilter,initialCounter) : parseRef.casterFilter}
            </div>` : ""}
        </div>`;
    },
    "Define Custom Variable with Flag Count"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "variableName",
            "target",
            "flagName"
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Define Custom Variable with Flag Count");
        // initialCounter++;
        return `<div class="actionDetailBody2">
            <div class="rotationConditionOperatorHeaderInline">Define with Flag Count:</div>&nbsp;
            ${parseRef.variableName} = ${parseRef.flagName} Count on ${Array.isArray(parseRef.target) ? megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter) : parseRef.target}
        </div>`;
    },
    "Remove Modifier Behavior Flag(s)"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "variableName",
            "target",
            "flagNames"
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Remove Modifier Behavior Flag(s)");
        // initialCounter++;
        return `<div class="actionDetailBody2">
            <div class="rotationConditionOperatorHeaderInline">Remove Modifier Behavior Flag(s):</div>&nbsp;
            ${parseRef.flagNames} on ${Array.isArray(parseRef.target) ? megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter) : parseRef.target}
        </div>`;
    },
    "Define Custom Variable with Modifier Values"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "variableName",
            "target",
            "valueType",
            "multiplier",
            "modifierName",
            "scope",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Define Custom Variable with Modifier Values");
        // initialCounter++;
        return `<div class="actionDetailBody2Preview"> 
            <div class="rotationConditionOperatorHeaderInline">Define with Modifier Attribute:</div>&nbsp;
            ${parseRef.variableName} = ${parseRef.valueType} * ${parseRef.multiplier} on ${parseRef.modifierName ? `(${parseRef.modifierName})` : ""}${Array.isArray(parseRef.target) ? megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter) : parseRef.target ?? "[Undefined or Context Target]"}
        </div>
        <div class="modifierDetailsBox">
            ${parseRef.scope != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Context:</div>&nbsp;
                ${parseRef.scope}
            </div>` : ""}
        </div>`;
    },
    "Define Custom Property"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "variableName",
            "target",
            "value",
            "function",
            // "valueType",
            // "multiplier",
            // "modifierName",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Define Custom Property");
        // initialCounter++;
        return `<div class="actionDetailBody2Preview"> 
            <div class="rotationConditionOperatorHeaderInline">Define Property Value:</div>&nbsp;
            ${parseRef.variableName} ${parseRef.function ?? ""}= ${parseRef.value?.displayLines ?? parseRef.value} on ${Array.isArray(parseRef.target) ? megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter) : parseRef.target}
        </div>`;
    },
    "Has DMG Instance Tag"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            // "variableName",
            "tag",
            // "value",
            // "function",
            // "valueType",
            // "multiplier",
            // "modifierName",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Has DMG Instance Tag");
        // initialCounter++;
        return `<div class="actionDetailBody2Preview"> 
            <div class="rotationConditionOperatorHeaderInline">Has DMG Instance Tag:</div>&nbsp;
            ${parseRef.tag}
        </div>`;
    },
    "Toggle Skill Mark"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "toggle",
            "skillTypesAllow",
            "trigger",
            // "variableName",
            // "target",
            // "value",
            // "function",
            // "valueType",
            // "multiplier",
            // "modifierName",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Toggle Skill Mark");
        // initialCounter++;
        return `<div class="actionDetailBody2Preview"> 
            <div class="rotationConditionOperatorHeaderInline">Toggle Skill Mark:</div>
        </div>
        <div class="modifierDetailsBox">
            ${parseRef.toggle != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Toggle State:</div>&nbsp;
                ${parseRef.toggle}
            </div>` : ""}
            ${parseRef.skillTypesAllow != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Allowed Skills:</div>&nbsp;
                ${parseRef.skillTypesAllow}
            </div>` : ""}
            ${parseRef.trigger != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Trigger:</div>&nbsp;
                ${parseRef.trigger}
            </div>` : ""}
        </div>`;
    },
    "Share DMG Taken"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "state",
            "target",
            "selfSplit",
            "targetSplit",
            // "variableName",
            // "target",
            // "value",
            // "function",
            // "valueType",
            // "multiplier",
            // "modifierName",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Share DMG Taken");
        // initialCounter++;
        return `<div class="actionDetailBody2Preview"> 
            <div class="rotationConditionOperatorHeaderInline">Share DMG Taken:</div>&nbsp;
            ${parseRef.target ? `${Array.isArray(parseRef.target) ? megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter) : parseRef.target}` : ""}
        </div>
        <div class="modifierDetailsBox">
            ${parseRef.state != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">State:</div>&nbsp;
                ${parseRef.state}
            </div>` : ""}
            ${parseRef.selfSplit != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Self Split:</div>&nbsp;
                ${parseRef.selfSplit.displayLines ?? parseRef.selfSplit}
            </div>` : ""}
            ${parseRef.targetSplit != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Target Split:</div>&nbsp;
                ${parseRef.targetSplit.displayLines ?? parseRef.targetSplit}
            </div>` : ""}
        </div>`;
    },
    "Is Damage Type/Element"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            // "variableName",
            "target",
            "invertCondition",
            "list",
            // "value",
            // "function",
            // "valueType",
            // "multiplier",
            // "modifierName",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Is Damage Type/Element");
        // initialCounter++;
        return `<div class="actionDetailBody2Preview"> 
            <div class="rotationConditionOperatorHeaderInline">Is Damage Type/Element:</div>&nbsp;
            ${parseRef.invertCondition ? "NOT " : ""}${parseRef.target ? `${Array.isArray(parseRef.target) ? megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter) : parseRef.target}` : ""}
        </div>
        <div class="modifierDetailsBox">
            ${parseRef.list != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Compare List:</div>&nbsp;
                ${parseRef.list}
            </div>` : ""}
        </div>`;
    },
    "Is Joint-Attack"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            // "variableName",
            "target",
            "invertCondition",
            // "value",
            // "function",
            // "valueType",
            // "multiplier",
            // "modifierName",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Is Joint-Attack");
        // initialCounter++;
        return `<div class="actionDetailBody2Preview"> 
            <div class="rotationConditionOperatorHeaderInline">Is Joint-Attack:</div>&nbsp;
            ${parseRef.invertCondition ? "NOT " : ""}${parseRef.target ? `${Array.isArray(parseRef.target) ? megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter) : parseRef.target}` : ""}
        </div>`;
    },
    "Is NegativeHP Enabled"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            // "variableName",
            "target",
            // "value",
            // "function",
            // "valueType",
            // "multiplier",
            // "modifierName",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Is NegativeHP Enabled");
        // initialCounter++;
        return `<div class="actionDetailBody2Preview"> 
            <div class="rotationConditionOperatorHeaderInline">Is NegativeHP Enabled:</div>&nbsp;
            ${parseRef.target ? `${Array.isArray(parseRef.target) ? megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter) : parseRef.target}` : ""}
        </div>`;
    },
    "Update Energy"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "on",
            "value",
            "valuePercent",
            "ofAbilitySplit",
            "isFixed",
            "isSetToValue",
            "tag",
            "ignoreBlock",
            "isSpecialEnergy",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Update Energy");
        // initialCounter++;
        return `<div class="actionDetailBody2">
            <div class="rotationConditionOperatorHeaderInline">Update Energy${parseRef.isSpecialEnergy ? " [SPECIAL]" : ""}:</div>&nbsp;
            ${parseRef.on ? `${Array.isArray(parseRef.on) ? megaParsingFuckery.makeConditionTargetBox(parseRef.on,initialCounter) : parseRef.on}` : ""} 
        </div>
        <div class="modifierDetailsBox">
            ${parseRef.valuePercent != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Percent:</div>&nbsp;
                (${parseRef.valuePercent?.displayLines ?? parseRef.valuePercent} * 100)%
            </div>` : ""}
            ${parseRef.value != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Flat:</div>&nbsp;
                ${parseRef.value?.displayLines ?? parseRef.value}
            </div>` : ""}
            ${parseRef.ofAbilitySplit != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Is % of Ability Energy:</div>&nbsp;
                ${parseRef.ofAbilitySplit}
            </div>` : ""}
            ${parseRef.isFixed != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Modified by:</div>&nbsp;
                ${parseRef.isFixed}
            </div>` : ""}
            ${parseRef.isSetToValue ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Is Set to Value:</div>&nbsp;
                ${parseRef.isSetToValue}
            </div>` : ""}
            ${parseRef.tag != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Tag:</div>&nbsp;
                ${parseRef.tag}
            </div>` : ""}
            ${parseRef.ignoreBlock != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Ignore Block:</div>&nbsp;
                ${parseRef.ignoreBlock}
            </div>` : ""}
        </div>`;
    },
    "Update Energy Value"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "on",
            "value",
            "adjustment",
            "ignoreBlock",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Update Energy");
        // initialCounter++;
        return `<div class="actionDetailBody2">
            <div class="rotationConditionOperatorHeaderInline">Update Energy:</div>&nbsp;
            ${parseRef.adjustment} ${parseRef.value.displayLines ?? parseRef.value} on ${parseRef.on}
        </div>
        <div class="modifierDetailsBox">
            ${parseRef.ignoreBlock != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Ignore Block:</div>&nbsp;
                ${parseRef.ignoreBlock}
            </div>` : ""}
        </div>`;
    },
    "Use Custom Character Function"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "functionName",
            "target",
            "variables",
            "paramSequence",

            "baseDelay",
            "delayInterval",
            "parallelCount",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Use Custom Character Function");


        let parseString = "";
        // let refString = "";
        const hasParse = parseRef.paramSequence?.length;
        // const hasRef = parseRef.failed?.length;
        if (hasParse) {parseString += megaParsingFuckery.fillEventBodyBox(parseRef.paramSequence,initialCounter);}
        // if (hasRef) {refString += megaParsingFuckery.fillEventBodyBox(parseRef.failed,initialCounter);}



        // <div class="actionDetailBody">${parseRef.ability} from ${parseRef.from}</div>

        // rotationsSectionRowHolder
        // rotationConditionOperatorBox


        // <details class="rotationsPermaConditionsExpand" open="">
        //     <summary class="actionDetailBodyDetailExpandHeaderBackground clickable">Show Permanent Conditions (1)</summary><div class="actionDetailBody">- Skill Points: Current &gt;= 1</div>
        // </details>

        // if (!hasParse && !hasRef) {return "";}








        let addString = "";
        if (parseRef.variables) {
            for (let variableEntry in parseRef.variables) {
                const currentVariable = parseRef.variables[variableEntry];

                addString += `<div class="actionDetailBody2">
                    <div class="rotationConditionOperatorHeaderInline">${variableEntry}:</div>&nbsp;
                    ${currentVariable.displayLines ?? currentVariable}
                </div>`
            }
        }


        // initialCounter++;
        return `<div class="actionDetailBody">
            <div class="rotationConditionOperatorHeaderInline">${parseRef.name}:</div>&nbsp;
            ${parseRef.functionName} ${parseRef.target ? `on ${Array.isArray(parseRef.target) ? megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter) : parseRef.target}` : ""}
        </div>
        <div class="modifierDetailsBox">
            ${parseRef.baseDelay != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">baseDelay:</div>&nbsp;
                ${parseRef.baseDelay.displayLines ?? parseRef.baseDelay}
            </div>` : ""}
            ${parseRef.delayInterval != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">delayInterval:</div>&nbsp;
                ${parseRef.delayInterval.displayLines ?? parseRef.delayInterval}
            </div>` : ""}
            ${parseRef.parallelCount != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">parallelCount:</div>&nbsp;
                ${parseRef.parallelCount.displayLines ?? parseRef.parallelCount}
            </div>` : ""}
        </div>
        <div class="modifierDetailsBox">
            ${addString}
        </div>
        <div class="rotationConditionOperatorBoxMain">
            ${hasParse ? `<div class="rotationConditionOperatorHeaderConditionTHEN">Parameter Sequence</div>
            <div class="rotationsSectionRowHolder${initialCounter%2 === 0 ? 2 : 1}">
                ${parseString}
            </div>` : ""}
        </div>`;
    },
    "Trigger Multiple Functions"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "functionList",
            "variables"
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Trigger Multiple Functions");


        // let functionListString = ""
        let addString = "";
        if (parseRef.variables) {
            for (let variableEntry in parseRef.variables) {
                const currentVariable = parseRef.variables[variableEntry];

                addString += `<div class="actionDetailBody2">
                    <div class="rotationConditionOperatorHeaderInline">${variableEntry}:</div>&nbsp;
                    ${currentVariable.displayLines ?? currentVariable}
                </div>`
            }
        }
        // if (parseRef.functionList) {
        //     for (let variableEntry of parseRef.functionList) {

        //         functionListString += `<div class="actionDetailBody2">
        //             <div class="rotationConditionOperatorHeaderInline">${variableEntry}</div>&nbsp;
        //         </div>`
        //     }
        // }

        let parseString = "";
        // let refString = "";
        const hasParse = parseRef.functionList?.length;
        // const hasRef = parseRef.failed?.length;
        if (hasParse) {parseString += megaParsingFuckery.fillEventBodyBox(parseRef.functionList,initialCounter);}
        // if (hasRef) {refString += megaParsingFuckery.fillEventBodyBox(parseRef.failed,initialCounter);}

        // initialCounter++;
        return `<div class="actionDetailBody">
            <div class="rotationConditionOperatorHeaderInline">${parseRef.name}:</div>&nbsp;
        </div>
        <div class="modifierDetailsBox">
            ${addString}
        </div>
        <div class="rotationConditionOperatorBoxMain">
            ${hasParse ? `<div class="rotationConditionOperatorHeaderConditionTHEN">Function List</div>
            <div class="rotationsSectionRowHolder${initialCounter%2 === 0 ? 2 : 1}">
                ${parseString}
            </div>` : ""}
        </div>`;
    },
    "Change Character Transformation"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "target",
            "phase"
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Change Character Transformation");

        // initialCounter++;
        return `<div class="actionDetailBody">
            <div class="rotationConditionOperatorHeaderInline">${parseRef.name}:</div>&nbsp;
            ${parseRef.phase}${parseRef.target ? ` on ${Array.isArray(parseRef.target) ? megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter) : parseRef.target}` : ""}
        </div>`;
    },
    "Is Stage Wave 1"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            // "target",
            // "phase"
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Is Stage Wave 1");

        // initialCounter++;
        return `<div class="actionDetailBody">
            <div class="rotationConditionOperatorHeaderInline">${parseRef.name}</div>
        </div>`;
    },
    "Technique Modifies Current Wave"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            // "target",
            // "phase"
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Technique Modifies Current Wave");

        // initialCounter++;
        return `<div class="actionDetailBody">
            <div class="rotationConditionOperatorHeaderInline">${parseRef.name}</div>
        </div>`;
    },
    "Eidolon Activated"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "eidolon",
            "target",
            "invertCondition",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Eidolon Activated");

        // initialCounter++;
        return `<div class="actionDetailBody">
            <div class="rotationConditionOperatorHeaderInline">${parseRef.name}:</div>&nbsp;
            ${parseRef.invertCondition ? "NOT ": ""}${parseRef.eidolon} ${parseRef.target ? `on ${Array.isArray(parseRef.target) ? megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter) : parseRef.target}` : ""}
        </div>`;
    },
    "Target is Pathstrider"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "path",
            "target",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Target is Pathstrider");

        // initialCounter++;
        return `<div class="actionDetailBody">
            <div class="rotationConditionOperatorHeaderInline">${parseRef.name}:</div>&nbsp;
            ${parseRef.path} ${parseRef.target ? `on ${Array.isArray(parseRef.target) ? megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter) : parseRef.target}` : ""}
        </div>`;
    },
    "Is Entity a Battle Event/Summon"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "invertCondition",
            "target",
            "expectedType",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Target is Pathstrider");

        // initialCounter++;
        return `<div class="actionDetailBody">
            <div class="rotationConditionOperatorHeaderInline">${parseRef.name}:</div>&nbsp;
            ${parseRef.invertCondition ? "NOT ": ""}${parseRef.target ? `on ${Array.isArray(parseRef.target) ? megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter) : parseRef.target}` : ""}
        </div>
        <div class="modifierDetailsBox">
            ${parseRef.expectedType != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Expected Sub-Type:</div>&nbsp;
                ${parseRef.expectedType}
            </div>` : ""}
        </div>`;
    },
    "Is Entity a Part/Body Extension"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "invertCondition",
            "target",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Is Entity a Part/Body Extension");

        // initialCounter++;
        return `<div class="actionDetailBody">
            <div class="rotationConditionOperatorHeaderInline">${parseRef.name}:</div>&nbsp;
            ${parseRef.invertCondition ? "NOT ": ""}${parseRef.target ? `on ${Array.isArray(parseRef.target) ? megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter) : parseRef.target}` : ""}
        </div>`;
    },
    "Change Battle Arena"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "arena",
            "tag",
            "status",
            "priorityTag",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Change Battle Arena");

        // initialCounter++;
        return `<div class="actionDetailBody">
            <div class="rotationConditionOperatorHeaderInline">${parseRef.name}:</div>
        </div>
        <div class="modifierDetailsBox">
            ${parseRef.arena != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Arena:</div>&nbsp;
                ${parseRef.arena}
            </div>` : ""}
            ${parseRef.tag != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Arena Tag:</div>&nbsp;
                ${parseRef.tag}
            </div>` : ""}
            ${parseRef.status != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Change Status:</div>&nbsp;
                ${parseRef.status}
            </div>` : ""}
            ${parseRef.priorityTag != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Priority Tag:</div>&nbsp;
                ${parseRef.priorityTag}
            </div>` : ""}
        </div>`;
    },
    "Set Netherwing's Ardent Will Stacks"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "show",
            "display",
            "preview",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Set Netherwing's Ardent Will Stacks");

        // initialCounter++;
        return `<div class="actionDetailBody">
            <div class="rotationConditionOperatorHeaderInline">${parseRef.name}:</div>
        </div>
        <div class="modifierDetailsBox">
            ${parseRef.show != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Hide:</div>&nbsp;
                ${!parseRef.show}
            </div>` : ""}
            ${parseRef.display != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Show:</div>&nbsp;
                ${parseRef.display.displayLines ?? parseRef.display}
            </div>` : ""}
            ${parseRef.preview != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Preview:</div>&nbsp;
                ${parseRef.preview.displayLines ?? parseRef.preview}
            </div>` : ""}
        </div>`;
    },
    "Set Netherwing Skill Phase"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "level",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Set Netherwing Skill Phase");

        // initialCounter++;
        return `<div class="actionDetailBody">
            <div class="rotationConditionOperatorHeaderInline">${parseRef.name}:</div>
        </div>
        <div class="modifierDetailsBox">
            ${parseRef.level != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Level:</div>&nbsp;
                ${parseRef.level}
            </div>` : ""}
        </div>`;
    },
    "Target Index"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "indexType",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Target Index");

        // initialCounter++;
        return `<div class="actionDetailBody">
            <div class="rotationConditionOperatorHeaderInline">${parseRef.name}:</div>
        </div>
        <div class="modifierDetailsBox">
            ${parseRef.indexType != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Index Type:</div>&nbsp;
                ${parseRef.indexType}
            </div>` : ""}
            
        </div>`;
    },
    "Sort by Monster Rank"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            // "stat",
            // "living",
            // "state",
            // "defenders",
            "byHighest",
            "maxRank",
            // "sortByHighest",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Sort by Monster Rank");

        // initialCounter++;
        return `<div class="actionDetailBody">
            <div class="rotationConditionOperatorHeaderInline">${parseRef.name}:</div>
        </div>
        <div class="modifierDetailsBox">
            ${parseRef.byHighest != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">By Highest:</div>&nbsp;
                ${parseRef.byHighest}
            </div>` : ""}
            ${parseRef.maxRank != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Highest Sorted Rank:</div>&nbsp;
                ${parseRef.maxRank}
            </div>` : ""}
        </div>`;
    },
    "Sort by Life-State"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            // "stat",
            // "living",
            "state",
            // "defenders",
            // "sortByHighest",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Sort by Life-State");

        // initialCounter++;
        return `<div class="actionDetailBody">
            <div class="rotationConditionOperatorHeaderInline">${parseRef.name}:</div>
        </div>
        <div class="modifierDetailsBox">
            ${parseRef.state != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Match First:</div>&nbsp;
                ${parseRef.state}
            </div>` : ""}
        </div>`;
    },
    "Join Targets"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            // "stat",
            // "living",
            "TargetList",
            // "sortByHighest",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Join Targets");

        // initialCounter++;
        return `<div class="actionDetailBody">
            <div class="rotationConditionOperatorHeaderInline">${parseRef.name}:</div>
        </div>
        <div class="modifierDetailsBox">
            ${parseRef.TargetList != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Defenders:</div>&nbsp;
                ${Array.isArray(parseRef.TargetList) ? megaParsingFuckery.makeConditionTargetBox(parseRef.TargetList,initialCounter) : parseRef.TargetList}
            </div>` : ""}
            
        </div>`;
    },
    "Sort by Matching Weakness"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            // "stat",
            // "living",
            "matchFirst",
            "defenders",
            // "sortByHighest",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Sort by Matching Weakness");

        // initialCounter++;
        return `<div class="actionDetailBody">
            <div class="rotationConditionOperatorHeaderInline">${parseRef.name}:</div>
        </div>
        <div class="modifierDetailsBox">
            ${parseRef.matchFirst != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Match First:</div>&nbsp;
                ${parseRef.matchFirst}
            </div>` : ""}
            ${parseRef.defenders != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Defenders:</div>&nbsp;
                ${Array.isArray(parseRef.defenders) ? megaParsingFuckery.makeConditionTargetBox(parseRef.defenders,initialCounter) : parseRef.defenders}
            </div>` : ""}
            
        </div>`;
    },
    "Set Enemy Phase"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            // "stat",
            // "living",
            "mode",
            "target",
            // "sortByHighest",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Set Enemy Phase");

        // initialCounter++;
        return `<div class="actionDetailBody">
            <div class="rotationConditionOperatorHeaderInline">${parseRef.name}:</div>
        </div>
        <div class="modifierDetailsBox">
            ${parseRef.mode != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Mode:</div>&nbsp;
                ${parseRef.mode}
            </div>` : ""}
            ${parseRef.target != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Target:</div>&nbsp;
                ${Array.isArray(parseRef.target) ? megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter) : parseRef.target}
            </div>` : ""}
            
        </div>`;
    },
    "Sort by Stat"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "stat",
            "living",
            "sortByHighest",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Sort by Stat");

        // initialCounter++;
        return `<div class="actionDetailBody">
            <div class="rotationConditionOperatorHeaderInline">${parseRef.name}:</div>&nbsp;
            ${parseRef.stat}${parseRef.living ? "(Living)" : ""}
        </div>
        <div class="modifierDetailsBox">
            ${parseRef.sortByHighest != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">By Highest:</div>&nbsp;
                ${parseRef.sortByHighest}
            </div>` : ""}
        </div>`;
    },
    "Return Target"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "value",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Return Target");

        // initialCounter++;
        return `<div class="actionDetailBody">
            <div class="rotationConditionOperatorHeaderInline">${parseRef.name}:</div>&nbsp;
            ${parseRef.value?.displayLines ?? parseRef.value}
        </div>`;
    },
    "Start Battle Track Progress"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "ID",
            "count",
            "progress",
            "desc",
            // "target",
            // "targetRef",
            // "refPoint",
            // "isStartingAV",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Start Battle Track Progress");


        // advanceType

        
        // initialCounter++;
        return `<div class="actionDetailBody">
            <div class="rotationConditionOperatorHeaderInline">${parseRef.name}:</div>&nbsp;
            ${parseRef.ID ?? ""}
        </div>
        ${parseRef.desc ? `<div class="actionDetailBody2">
            <div class="rotationConditionOperatorHeaderInline">Description:</div>&nbsp;
            <div class="actionDetailBody2Description">
            ${parseRef.desc}
            </div>
        </div>` : ""}
        <div class="modifierDetailsBox">
            ${parseRef.progress != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Progress:</div>&nbsp;
                ${parseRef.progress.displayLines ?? parseRef.progress}
            </div>` : ""}
            ${parseRef.count != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Count:</div>&nbsp;
                ${parseRef.count.displayLines ?? parseRef.count}
            </div>` : ""}

            
        </div>`;
    },
    "Set Battle Track Progress"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "ID",
            "count",
            "progress",
            // "target",
            // "targetRef",
            // "refPoint",
            // "isStartingAV",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Set Battle Track Progress");


        // advanceType

        
        // initialCounter++;
        return `<div class="actionDetailBody">
            <div class="rotationConditionOperatorHeaderInline">${parseRef.name}:</div>&nbsp;
            ${parseRef.ID ?? ""}
        </div>
        <div class="modifierDetailsBox">
            ${parseRef.progress != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Progress:</div>&nbsp;
                ${parseRef.progress.displayLines ?? parseRef.progress}
            </div>` : ""}
            ${parseRef.count != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Count:</div>&nbsp;
                ${parseRef.count.displayLines ?? parseRef.count}
            </div>` : ""}

            
        </div>`;
    },
    "Compare: Animator Variable"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "paramName",
            "paramType",
            "compareValue",
            "compareType",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Compare: Animator Variable");

        // initialCounter++;
        return `<div class="actionDetailBody">
            <div class="rotationConditionOperatorHeaderInline">${parseRef.name}:</div>&nbsp;
            ${parseRef.paramName} ${parseRef.compareType ?? "[=?]"} ${parseRef.compareValue}
        </div>
        <div class="modifierDetailsBox">
            ${parseRef.paramType != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Variable Type:</div>&nbsp;
                ${parseRef.paramType}
            </div>` : ""}

        </div>`;
    },
    "Compare: Resistance Chance"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "resistanceList",
            "target",
            "compareValue",
            "compareType",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Compare: Resistance Chance");

        // initialCounter++;
        return `<div class="actionDetailBody">
            <div class="rotationConditionOperatorHeaderInline">${parseRef.name}:</div>&nbsp;
            ${parseRef.compareType ?? "[=?]"} ${parseRef.compareValue}
        </div>
        <div class="modifierDetailsBox">
            ${parseRef.target != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Target:</div>&nbsp;
                ${Array.isArray(parseRef.target) ? megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter) : parseRef.target}
            </div>` : ""}
            ${parseRef.resistanceList != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Flag List:</div>&nbsp;
                ${parseRef.resistanceList}
            </div>` : ""}

        </div>`;
    },
    "Stage ID"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "ID",
            "target",
            "characterName",
            "compareType",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Stage ID");

        // initialCounter++;
        return `<div class="actionDetailBody">
            <div class="rotationConditionOperatorHeaderInline">${parseRef.name}:</div>&nbsp;
            ${parseRef.compareType ?? "[=?]"} ${parseRef.ID}(${parseRef.characterName})
        </div>
        <div class="modifierDetailsBox">
            ${parseRef.target != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Target:</div>&nbsp;
                ${Array.isArray(parseRef.target) ? megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter) : parseRef.target}
            </div>` : ""}

        </div>`;
    },
    "Enemy ID"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "ID",
            "target",
            "characterName",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Enemy ID");

        // initialCounter++;
        return `<div class="actionDetailBody">
            <div class="rotationConditionOperatorHeaderInline">${parseRef.name}:</div>&nbsp;
            ${parseRef.target} = ${parseRef.ID}(${parseRef.characterName})
        </div>`;
    },
    "Character ID"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "ID",
            "target",
            "characterName",
            "invertCondition",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Character ID");

        // initialCounter++;
        return `<div class="actionDetailBody">
            <div class="rotationConditionOperatorHeaderInline">${parseRef.name}:</div>&nbsp;
            ${parseRef.target} ${parseRef.invertCondition ? "NOT" : ""}= ${parseRef.ID}(${parseRef.characterName})
        </div>`;
    },
    "Trace Activated"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "conditionList",
            "target",
            "invertCondition",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Trace Activated");

        // initialCounter++;
        return `<div class="actionDetailBody">
            <div class="rotationConditionOperatorHeaderInline">${parseRef.name}:</div>&nbsp;
            ${parseRef.invertCondition ? "NOT" : ""}${parseRef.conditionList} ${parseRef.target ? `on ${Array.isArray(parseRef.target) ? megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter) : parseRef.target}` : ""}
        </div>`;
    },
    "Is a Crit" (parseRef,initialCounter){
        const knownKeySet = new Set ([
            "name",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Is a Crit");

        // initialCounter++;
        return `<div class="actionDetailBody">
            <div class="rotationConditionOperatorHeaderInline">${parseRef.name}</div>
        </div>`;
    },
    "Advance/Delay up to Target"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "target",
            "targetRef",
            "refPoint",
            "isStartingAV",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Advance/Delay up to Target");

        const advanceType = parseRef.advanceType;
        const displayValue = parseRef.value?.displayLines ?? parseRef.value;
        const finalDisplay = (typeof displayValue === "number" ? +displayValue : displayValue) + (advanceType != "Set" ? "* 100%" : " AV")

        // advanceType

        
        // initialCounter++;
        return `<div class="actionDetailBody">
            <div class="rotationConditionOperatorHeaderInline">${parseRef.name}:</div>
        </div>
        <div class="modifierDetailsBox">
            ${parseRef.target != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Target to Move:</div>&nbsp;
                ${Array.isArray(parseRef.target) ? megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter) : parseRef.target}
            </div>` : ""}
            ${parseRef.targetRef != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Target to Reference:</div>&nbsp;
                ${Array.isArray(parseRef.targetRef) ? megaParsingFuckery.makeConditionTargetBox(parseRef.targetRef,initialCounter) : parseRef.targetRef}
            </div>` : ""}
            ${parseRef.refPoint != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Reference Point:</div>&nbsp;
                ${parseRef.refPoint}
            </div>` : ""}
            ${parseRef.isStartingAV != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Is Starting AV:</div>&nbsp;
                ${parseRef.isStartingAV}
            </div>` : ""}

            
        </div>`;
    },
    "Action Advance/Delay"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "target",
            "value",
            "advanceType",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Action Advance/Delay");

        const advanceType = parseRef.advanceType;
        const displayValue = parseRef.value?.displayLines ?? parseRef.value;
        const finalDisplay = (typeof displayValue === "number" ? +displayValue : displayValue) + (advanceType != "Set" ? "* 100%" : " AV")

        // advanceType

        
        // initialCounter++;
        return `<div class="actionDetailBody">
            <div class="rotationConditionOperatorHeaderInline">${parseRef.name}:</div>&nbsp;
            ${advanceType === "Set" ? "AV til Next Turn = " : ""}${finalDisplay} ${advanceType != "Set" ? advanceType : ""} ${parseRef.target ? `on ${Array.isArray(parseRef.target) ? megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter) : parseRef.target}` : ""}
        </div>`;
    },
    "Compare: Target"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "target",
            "target2",
            "invertCondition",
            "state",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Compare: Target");

        // initialCounter++;

        // ${Array.isArray(parseRef.target) ? megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter) : parseRef.target}
        return `<div class="actionDetailBody">
            <div class="rotationConditionOperatorHeaderInline">${parseRef.name}:</div>&nbsp;
            ${Array.isArray(parseRef.target) ? megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter) : parseRef.target} ${parseRef.invertCondition ? "NOT" : ""}= ${Array.isArray(parseRef.target2) ? megaParsingFuckery.makeConditionTargetBox(parseRef.target2,initialCounter) : parseRef.target2}
        </div>
        
        <div class="modifierDetailsBox">
            ${parseRef.state != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">State:</div>&nbsp;
                ${parseRef.state}
            </div>` : ""}
        </div>`;
    },
    "Compare: Modifier Status Type"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "statusType",
            "invertCondition",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Compare: Target");

        // initialCounter++;

        // ${Array.isArray(parseRef.target) ? megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter) : parseRef.target}
        return `<div class="actionDetailBody">
            <div class="rotationConditionOperatorHeaderInline">${parseRef.name}:</div>&nbsp;
            Current Status Type ${parseRef.invertCondition ? "NOT" : ""}= ${parseRef.statusType}
        </div>`;
    },
    "Current Turn Is"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "target",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Current Turn Is");

        // initialCounter++;
        return `<div class="actionDetailBody">
            <div class="rotationConditionOperatorHeaderInline">${parseRef.name}:</div>&nbsp;
            ${Array.isArray(parseRef.target) ? megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter) : parseRef.target}
        </div>`;
    },
    "Event was Triggered by Modifier's Self"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            // "target",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Event was Triggered by Modifier's Self");

        // initialCounter++;
        return `<div class="actionDetailBody">
            <div class="rotationConditionOperatorHeaderInline">${parseRef.name}</div>
        </div>`;
    },
    "Current Turn's Action Phase is Over"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            // "target",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Current Turn's Action Phase is Over");

        // initialCounter++;
        return `<div class="actionDetailBody">
            <div class="rotationConditionOperatorHeaderInline">${parseRef.name}</div>
        </div>`;
    },
    "Battle is Over"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            // "target",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Battle is Over");

        // initialCounter++;
        return `<div class="actionDetailBody">
            <div class="rotationConditionOperatorHeaderInline">${parseRef.name}</div>
        </div>`;
    },
    "Living/Death State"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "state",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Living/Death State");

        // initialCounter++;
        return `<div class="actionDetailBody">
            <div class="rotationConditionOperatorHeaderInline">${parseRef.name}:</div>&nbsp;
            ${parseRef.state}
        </div>`;
    },
    "Living State"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "state",
            "target",
            "invertCondition",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Living/Death State");

        // initialCounter++;
        return `<div class="actionDetailBody">
            <div class="rotationConditionOperatorHeaderInline">${parseRef.name}:</div>&nbsp;
            ${parseRef.state} ${parseRef.invertCondition ? "NOT " : ""}${parseRef.target ? `on ${Array.isArray(parseRef.target) ? megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter) : parseRef.target}` : ""}
        </div>`;
    },
    "Damage was Blocked"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "target",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Damage was Blocked");

        // initialCounter++;
        return `<div class="actionDetailBody">
            <div class="rotationConditionOperatorHeaderInline">${parseRef.name}:</div>&nbsp;
            ${Array.isArray(parseRef.target) ? megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter) : parseRef.target}
        </div>`;
    },
    "Current Action Holder Is"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "target",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Current Action Holder Is");

        // initialCounter++;
        return `<div class="actionDetailBody">
            <div class="rotationConditionOperatorHeaderInline">${parseRef.name}:</div>&nbsp;
            ${Array.isArray(parseRef.target) ? megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter) : parseRef.target}
        </div>`;
    },
    "Current Action Holder's Team"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "team",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Current Action Holder's Team");

        // initialCounter++;
        return `<div class="actionDetailBody">
            <div class="rotationConditionOperatorHeaderInline">${parseRef.name}:</div>&nbsp;
            ${parseRef.team}
        </div>`;
    },
    "Attack-Type Extension"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "target",
            "typeToExtend",
            "extendTypeTo",
            "isRemove",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Attack-Type Extension");

        // initialCounter++;
        return `<div class="actionDetailBody">
            <div class="rotationConditionOperatorHeaderInline">${parseRef.name}${parseRef.isRemove ? "[RESET]" : ""}:</div>&nbsp;
            ${Array.isArray(parseRef.target) ? megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter) : parseRef.target}
        </div>
        <div class="modifierDetailsBox">
            ${parseRef.typeToExtend != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Base Type:</div>&nbsp;
                ${parseRef.typeToExtend}
            </div>` : ""}
            ${parseRef.extendTypeTo != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Consider as:</div>&nbsp;
                ${parseRef.extendTypeTo}
            </div>` : ""}
        </div>`;
    },
    "Disable Abilities"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "target",
            "abilityTypes",
            "text",
            "controlTypes",
            "extraText",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Disable Abilities");

        // initialCounter++;
        return `<div class="actionDetailBody">
            <div class="rotationConditionOperatorHeaderInline">${parseRef.name}:</div>&nbsp;
            ${parseRef.abilityTypes}${parseRef.text ? `("${parseRef.text}")` : ""} on ${Array.isArray(parseRef.target) ? megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter) : parseRef.target}
        </div>
        <div class="modifierDetailsBox">
            ${parseRef.controlTypes != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Controlled Types:</div>&nbsp;
                ${parseRef.controlTypes}
            </div>` : ""}
            ${parseRef.extraText != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Extra Description:</div>&nbsp;
                ${parseRef.extraText}
            </div>` : ""}
        </div>`;
    },
    "Update Ability Binding"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "target",
            "abilityName",
            "skillSlot",
            "enableSecondaryType",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Update Ability Binding");

        // initialCounter++;
        return `<div class="actionDetailBody">
            <div class="rotationConditionOperatorHeaderInline">${parseRef.name}:</div>&nbsp;
            use ${parseRef.abilityName}${parseRef.enableSecondaryType ? `(and ${parseRef.enableSecondaryType})` : ""} in ${parseRef.skillSlot} slot, from ${Array.isArray(parseRef.target) ? megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter) : parseRef.target}
        </div>`;
    },
    "Update Ability Description"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "popUpText",
            "skillTrigger",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Update Ability Description");

        // initialCounter++;
        return `<div class="actionDetailBody">
            <div class="rotationConditionOperatorHeaderInline">${parseRef.name}:</div>&nbsp;
            ${parseRef.popUpText ? `text["${parseRef.popUpText}"]` : ""}
        </div>
        <div class="modifierDetailsBox">
            ${parseRef.skillTrigger != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Skill Trigger:</div>&nbsp;
                ${parseRef.skillTrigger}
            </div>` : ""}
        </div>`;
    },
    "Update Modifier Description"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "popUpText",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Update Modifier Description");

        // initialCounter++;
        return `<div class="actionDetailBody">
            <div class="rotationConditionOperatorHeaderInline">${parseRef.name}:</div>&nbsp;
            ${parseRef.popUpText ? `text["${parseRef.popUpText}"]` : ""}
        </div>`;
    },
    "UI Display Event"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "popUpText",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"UI Display Event");

        // initialCounter++;
        return `<div class="actionDetailBody">
            <div class="rotationConditionOperatorHeaderInline">${parseRef.name}:</div>&nbsp;
            ${parseRef.popUpText ? `bannerPopUp["${parseRef.popUpText}"]` : ""}
        </div>`;
    },
    "UI Display Event (On Entity)"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "popUpText",
            "target",
            "living",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"UI Display Event");

        // initialCounter++;
        return `<div class="actionDetailBody">
            <div class="rotationConditionOperatorHeaderInline">${parseRef.name}:</div>&nbsp;
            ${parseRef.popUpText ? `bannerPopUp["${parseRef.popUpText}"]` : ""} on ${parseRef.target}${parseRef.living ? "(Living)" : ""}
        </div>`;
    },
    "Block Advance/Delay Effects"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "on",
            "whitelist",
            "whitelistTag",
            // "stateName",
            // "state",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Block Advance/Delay Effects");
        // initialCounter++;

        return `<div class="actionDetailBody2">
            <div class="rotationConditionOperatorHeaderInline">Block Advance/Delay Effects:</div>&nbsp;
            ${parseRef.on ? `on ${Array.isArray(parseRef.on) ? megaParsingFuckery.makeConditionTargetBox(parseRef.on,initialCounter) : parseRef.on}` : ""}
        </div>
        <div class="modifierDetailsBox">
            ${parseRef.whitelist != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Whitelist Targets:</div>&nbsp;
                ${parseRef.whitelist}
            </div>` : ""}
            ${parseRef.whitelistTag != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Whitelist Tag:</div>&nbsp;
                ${parseRef.whitelistTag}
            </div>` : ""}
        </div>`;
    },
    "Set Action-State"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "on",
            "stateName",
            "state",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Set Action-State");
        // initialCounter++;

        return `<div class="actionDetailBody2">
            <div class="rotationConditionOperatorHeaderInline">Set Action-State:</div>&nbsp;
            ${parseRef.stateName ?? ""} ${parseRef.on ? `on ${Array.isArray(parseRef.on) ? megaParsingFuckery.makeConditionTargetBox(parseRef.on,initialCounter) : parseRef.on}` : ""}
        </div>
        <div class="modifierDetailsBox">
            ${parseRef.state != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">State:</div>&nbsp;
                ${parseRef.state}
            </div>` : ""}
        </div>
        `;
    },
    "Insert Ability Condition"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "type",
            "typeValue",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Insert Ability Condition");
        // initialCounter++;

        return `<div class="actionDetailBody2">
            <div class="rotationConditionOperatorHeaderInline">Inject Condition:</div>&nbsp;
        </div>
        <div class="modifierDetailsBox">
            ${parseRef.type != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Type:</div>&nbsp;
                ${parseRef.type}
            </div>` : ""}
            ${parseRef.typeValue != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Type Value:</div>&nbsp;
                ${parseRef.typeValue.displayLines ?? parseRef.typeValue}
            </div>` : ""}
        </div>
        `;
    },
    "Inject Ability Use"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "abilityName",
            "abilitySource",
            "abilityTarget",
            "priorityTag",
            "valuePerStack",

            "condition",
            "canHitNonTargets",
            "showInActionOrder",
            "abortFlags",
            "customFlags",
            "conditionActive",

            "ownerState",
            "targetState",
            "allowAbilityTriggers",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Inject Ability Use");
        // initialCounter++;

        const conditionObject = parseRef.condition;
        const conditionName = conditionObject?.name;

        let returnString = "" + (typeof conditionObject === "string" ? `<div class="rotationsConditionsBodyBox">${conditionObject}</div>` : "");
        const functionExists = megaParsingFuckery[conditionName];
        if (functionExists) {returnString += `<div class="rotationsConditionsBodyBox">` + functionExists(conditionObject,initialCounter) + `</div>`;}

        if (conditionObject && !returnString) {throw new Error(`Missing condition display-only definition in IF: ${conditionName}`)}



        const conditionObject2 = parseRef.conditionActive;
        const conditionName2 = conditionObject2?.name;

        let returnString2 = "" + (typeof conditionObject2 === "string" ? `<div class="rotationsConditionsBodyBox">${conditionObject2}</div>` : "");
        const functionExists2 = megaParsingFuckery[conditionName2];
        if (functionExists2) {returnString2 += `<div class="rotationsConditionsBodyBox">` + functionExists2(conditionObject2,initialCounter) + `</div>`;}

        if (conditionObject2 && !returnString2) {throw new Error(`Missing condition display-only definition in IF: ${conditionName2}`)}

        

        return `<div class="actionDetailBody2">
            <div class="rotationConditionOperatorHeaderInline">Inject Ability Use:</div>&nbsp;
            ${parseRef.abilityName} ${parseRef.abilityTarget ?? ""}
        </div>
        <div class="modifierDetailsBox">
            ${parseRef.abilitySource != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Ability Source:</div>&nbsp;
                ${parseRef.abilitySource}
            </div>` : ""}
            ${parseRef.abilityTarget != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Ability Target:</div>&nbsp;
                ${parseRef.abilityTarget}
            </div>` : ""}
            

            ${parseRef.ownerState != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Owner State:</div>&nbsp;
                ${parseRef.ownerState}
            </div>` : ""}
            ${parseRef.targetState != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Target State:</div>&nbsp;
                ${parseRef.targetState}
            </div>` : ""}
            
            ${parseRef.showInActionOrder != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Show in Action Order:</div>&nbsp;
                ${parseRef.showInActionOrder}
            </div>` : ""}
            ${parseRef.allowAbilityTriggers != undefined && parseRef.allowAbilityTriggers ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Ability Triggers Used:</div>&nbsp;
                ${parseRef.allowAbilityTriggers}
            </div>` : ""}
            ${parseRef.priorityTag != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Priority Tag:</div>&nbsp;
                ${parseRef.priorityTag}
            </div>` : ""}
            ${parseRef.abortFlags != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Abort Flags:</div>&nbsp;
                ${parseRef.abortFlags}
            </div>` : ""}
            ${parseRef.customFlags != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Custom Flags:</div>&nbsp;
                ${parseRef.customFlags}
            </div>` : ""}

            
            ${parseRef.canHitNonTargets != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Can Hit Non-Targets:</div>&nbsp;
                ${parseRef.canHitNonTargets}
            </div>` : ""}
            ${parseRef.valuePerStack != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Parameters:</div>&nbsp;
                ${parseRef.valuePerStack.displayLines ?? typeof parseRef.valuePerStack === "object" ? megaParsingFuckery.ValuePerStackParsing(parseRef.valuePerStack,initialCounter) : parseRef.valuePerStack}
            </div>` : ""}

        </div>

        ${returnString != "" ? `<div class="actionDetailBody2">
            <div class="rotationConditionOperatorHeaderInline">Pre-Check</div>
        </div>
        ${returnString}` : ""}

        ${returnString2 != "" ? `<div class="actionDetailBody2">
            <div class="rotationConditionOperatorHeaderInline">Active Condition</div>
        </div>
        ${returnString2}` : ""}
        `;
    },
    "Update Ability Enhance Button"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "target",
            "display",
            "abilityName"
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Update Ability Enhance Button");

        // initialCounter++;
        return `<div class="actionDetailBody">
            <div class="rotationConditionOperatorHeaderInline">${parseRef.name}:</div>&nbsp;
            ${parseRef.display} ENHANCE on ${parseRef.abilityName} on ${Array.isArray(parseRef.target) ? megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter) : parseRef.target}
        </div>`;
    },
    "Skill Type"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "skillType",
            "activeSkill",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Skill Type");

        // initialCounter++;
        return `<div class="actionDetailBody">
            <div class="rotationConditionOperatorHeaderInline">${parseRef.name}:</div>&nbsp;
            ${parseRef.skillType}
        </div>
        <div class="modifierDetailsBox">
            ${parseRef.activeSkill != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Active Skill:</div>&nbsp;
                ${parseRef.activeSkill}
            </div>` : ""}
        </div>`;
    },
    "Attack Type"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "attackTypes",
            "target",
            "invertCondition",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Attack Type");

        // initialCounter++;
        return `<div class="actionDetailBody">
            <div class="rotationConditionOperatorHeaderInline">${parseRef.name}:</div>&nbsp;
            ${parseRef.invertCondition ? "NOT " : ""}${parseRef.attackTypes} ${parseRef.target ? `on ${Array.isArray(parseRef.target) ? megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter) : parseRef.target}` : ""}
        </div>`;
    },
    "Modifier Type Was"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            // "modifier",
            // "casterFilter",
            "invertCondition",
            "statusType",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Modifier Was");

        // initialCounter++;
        return `<div class="actionDetailBody">
            <div class="rotationConditionOperatorHeaderInline">${parseRef.name}:</div>&nbsp;
            ${parseRef.modifier} ${parseRef.invertCondition ? "NOT " : ""}
        </div>
        <div class="modifierDetailsBox">
            ${parseRef.statusType != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Status Type:</div>&nbsp;
                ${parseRef.statusType}
            </div>` : ""}
        </div>`;
    },
    "Modifier Was"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "modifier",
            "casterFilter",
            "invertCondition"
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Modifier Was");

        // initialCounter++;
        return `<div class="actionDetailBody">
            <div class="rotationConditionOperatorHeaderInline">${parseRef.name}:</div>&nbsp;
            ${parseRef.modifier} ${parseRef.invertCondition ? "NOT " : ""}
        </div>
        <div class="modifierDetailsBox">
            ${parseRef.casterFilter != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Caster Filter:</div>&nbsp;
                ${Array.isArray(parseRef.casterFilter) ? megaParsingFuckery.makeConditionTargetBox(parseRef.casterFilter,initialCounter) : parseRef.casterFilter}
            </div>` : ""}
        </div>`;
    },
    "HP Can be Damaged"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "target",
            // "modifier",
            "invertCondition",
            // "casterFilter",
            // "justAddedOrActive",
            // "includePreDeath",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"HP Can be Damaged");

        // initialCounter++;
        return `<div class="actionDetailBody">
            <div class="rotationConditionOperatorHeaderInline">${parseRef.name}:</div>&nbsp;
            ${parseRef.invertCondition ? "NOT " : ""}on ${Array.isArray(parseRef.target) ? megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter) : parseRef.target}
        </div>
        <div class="modifierDetailsBox">
            ${parseRef.justAddedOrActive != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Needs Active or Just Added:</div>&nbsp;
                ${parseRef.justAddedOrActive}
            </div>` : ""}
            ${parseRef.includePreDeath != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Include Pre-Death:</div>&nbsp;
                ${parseRef.includePreDeath}
            </div>` : ""}
            ${parseRef.casterFilter != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Caster Filter:</div>&nbsp;
                ${parseRef.casterFilter}
            </div>` : ""}
        </div>`;
    },
    "Set Enhanced-State"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "type",
            // "modifier",
            // "invertCondition",
            // "casterFilter",
            // "justAddedOrActive",
            // "includePreDeath",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Set Enhanced-State");

        // initialCounter++;
        return `<div class="actionDetailBody">
            <div class="rotationConditionOperatorHeaderInline">${parseRef.name}:</div>&nbsp;
            ${parseRef.type}
        </div>`;
    },
    "Has Modifier"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "target",
            "modifier",
            "invertCondition",
            "casterFilter",
            "justAddedOrActive",
            "includePreDeath",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Has Modifier");

        // initialCounter++;
        return `<div class="actionDetailBody">
            <div class="rotationConditionOperatorHeaderInline">${parseRef.name}:</div>&nbsp;
            ${parseRef.modifier} ${parseRef.invertCondition ? "NOT " : ""}on ${Array.isArray(parseRef.target) ? megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter) : parseRef.target}
        </div>
        <div class="modifierDetailsBox">
            ${parseRef.justAddedOrActive != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Needs Active or Just Added:</div>&nbsp;
                ${parseRef.justAddedOrActive}
            </div>` : ""}
            ${parseRef.includePreDeath != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Include Pre-Death:</div>&nbsp;
                ${parseRef.includePreDeath}
            </div>` : ""}
            ${parseRef.casterFilter != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Caster Filter:</div>&nbsp;
                ${parseRef.casterFilter}
            </div>` : ""}
        </div>`;
    },
    "Modifier Has Flag"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "flagName",
            "target",
            "invertCondition"
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Modifier Has Flag");

        // initialCounter++;
        return `<div class="actionDetailBody">
            <div class="rotationConditionOperatorHeaderInline">Has Modifier Flag:</div>&nbsp;
            ${parseRef.flagName} ${parseRef.invertCondition ? "(Inverted) " : ""} ${parseRef.target ? `on ${Array.isArray(parseRef.target) ? megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter) : parseRef.target}` : ""}
        </div>`;
    },
    "Update Action Bar Display"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "triggerName",
            "target"
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Has Modifier");

        // initialCounter++;
        return `<div class="actionDetailBody">
            <div class="rotationConditionOperatorHeaderInline">${parseRef.name}:</div>&nbsp;
            ${parseRef.triggerName} on ${Array.isArray(parseRef.target) ? megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter) : parseRef.target}
        </div>`;
    },
    "Has Param Flag"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            // "target",
            "flagName",
            "invertCondition"
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Has Param Flag");

        // initialCounter++;
        return `<div class="actionDetailBody">
            <div class="rotationConditionOperatorHeaderInline">${parseRef.name}:</div>&nbsp;
            ${parseRef.flagName} ${parseRef.invertCondition ? "NOT " : ""}
        </div>`;
    },
    "DMG Source Has Flag"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            // "target",
            "flagName",
            "invertCondition",
            // "casterFilter",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"DMG Source Has Flag");

        // initialCounter++;
        return `<div class="actionDetailBody">
            <div class="rotationConditionOperatorHeaderInline">${parseRef.name}:</div>&nbsp;
            ${parseRef.invertCondition ? "NOT " : ""} ${parseRef.flagName}
        </div>`;
    },
    "Has Flag"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "target",
            "flagName",
            "invertCondition",
            "casterFilter",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Has Flag");

        // initialCounter++;
        return `<div class="actionDetailBody">
            <div class="rotationConditionOperatorHeaderInline">${parseRef.name}:</div>&nbsp;
            ${parseRef.flagName} ${parseRef.invertCondition ? "NOT " : ""}on ${Array.isArray(parseRef.target) ? megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter) : parseRef.target}
        </div>
        <div class="modifierDetailsBox">
            ${parseRef.casterFilter != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Caster Filter:</div>&nbsp;
                ${parseRef.casterFilter}
            </div>` : ""}
        </div>`;
    },
    "Remove Flags from Modifier"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "target",
            "flagName",
            // "invertCondition",
            "casterFilter",
            "modifierName",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Remove Flags from Modifier");

        // initialCounter++;
        return `<div class="actionDetailBody">
            <div class="rotationConditionOperatorHeaderInline">${parseRef.name}:</div>&nbsp;
            ${parseRef.flagName}
        </div>
        <div class="modifierDetailsBox">
            ${parseRef.modifierName != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Modifier:</div>&nbsp;
                ${parseRef.modifierName}
            </div>` : ""}
            ${parseRef.target != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Target:</div>&nbsp;
                ${Array.isArray(parseRef.target) ? megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter) : parseRef.target}
            </div>` : ""}
            ${parseRef.casterFilter != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Caster Filter:</div>&nbsp;
                ${parseRef.casterFilter}
            </div>` : ""}
        </div>`;
    },
    "Add Flags to Modifier"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "target",
            "flagName",
            // "invertCondition",
            "casterFilter",
            "modifierName",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Add Flags to Modifier");

        // initialCounter++;
        return `<div class="actionDetailBody">
            <div class="rotationConditionOperatorHeaderInline">${parseRef.name}:</div>&nbsp;
            ${parseRef.flagName}
        </div>
        <div class="modifierDetailsBox">
            ${parseRef.modifierName != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Modifier:</div>&nbsp;
                ${parseRef.modifierName}
            </div>` : ""}
            ${parseRef.target != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Target:</div>&nbsp;
                ${Array.isArray(parseRef.target) ? megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter) : parseRef.target}
            </div>` : ""}
            ${parseRef.casterFilter != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Caster Filter:</div>&nbsp;
                ${parseRef.casterFilter}
            </div>` : ""}
        </div>`;
    },
    "Has Toughness Reduction Preview"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "target",
            "caster",
            "invertCondition"
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Has Toughness Reduction Preview");

        // initialCounter++;
        return `<div class="actionDetailBody">
            <div class="rotationConditionOperatorHeaderInline">${parseRef.name}:</div>&nbsp;
            from ${parseRef.caster} to ${parseRef.invertCondition ? "(INVERTED) " : ""}${Array.isArray(parseRef.target) ? megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter) : parseRef.target}
        </div>`;
    },
    "Skill Name"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "skillName",
            "useActive",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Skill Name");

        // initialCounter++;
        return `<div class="actionDetailBody">
            <div class="rotationConditionOperatorHeaderInline">Has Skill Name:</div>&nbsp;
            ${parseRef.skillName}
        </div>
        <div class="modifierDetailsBox">
            ${parseRef.useActive != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Use Active Skill:</div>&nbsp;
                ${parseRef.useActive}
            </div>` : ""}
        </div>`;
    },
    "Change Battle Event Owner"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "eventName",
            "assignOwner",
            "variables",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Change Battle Event Owner");

        // initialCounter++;
        return `<div class="actionDetailBody">
            <div class="rotationConditionOperatorHeaderInline">${parseRef.name}:</div>&nbsp;
            ${parseRef.eventName}
        </div>
        <div class="modifierDetailsBox">
            ${parseRef.assignOwner != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Owner Assign:</div>&nbsp;
                ${Array.isArray(parseRef.assignOwner) ? megaParsingFuckery.makeConditionTargetBox(parseRef.assignOwner,initialCounter) : parseRef.assignOwner}
            </div>` : ""}

            ${parseRef.variables != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Parameters:</div>&nbsp;
                ${parseRef.variables.displayLines ?? typeof parseRef.variables === "object" ? megaParsingFuckery.ValuePerStackParsing(parseRef.variables,initialCounter) : parseRef.variables}
            </div>` : ""}
        </div>`;
    },
    "Lock HP"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "threshold",
            "target",
            "lockHolder",
            "isUnlock",
            // "typeOverride",
            // "dispelCount",
            // "dispelOrder",
            // "livingTargets",
            // "silent",
            // "toRemove",
            // "counterKey",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Lock HP");

        // initialCounter++;
        return `<div class="actionDetailBody">
            <div class="rotationConditionOperatorHeaderInline">${parseRef.isUnlock ? "UN" : ""}${parseRef.name}:</div>
        </div>
        <div class="modifierDetailsBox">
            ${parseRef.threshold != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Threshold:</div>&nbsp;
                ${parseRef.threshold}
            </div>` : ""}
            ${parseRef.lockHolder != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Lock Holder:</div>&nbsp;
                ${parseRef.lockHolder}
            </div>` : ""}
            ${parseRef.target != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Target:</div>&nbsp;
                ${Array.isArray(parseRef.target) ? megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter) : parseRef.target}
            </div>` : ""}
        </div>`;
    },
    "Dispel Debuffs"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "target",
            "typeOverride",
            "dispelCount",
            "dispelOrder",
            "livingTargets",
            "silent",
            "toRemove",
            "counterKey",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Dispel Debuffs");

        // initialCounter++;
        return `<div class="actionDetailBody">
            <div class="rotationConditionOperatorHeaderInline">${parseRef.name}:</div>&nbsp;
            ${Array.isArray(parseRef.target) ? megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter) : parseRef.target}
        </div>
        <div class="modifierDetailsBox">
            ${parseRef.typeOverride != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Status Type:</div>&nbsp;
                ${parseRef.typeOverride}
            </div>` : ""}
            ${parseRef.dispelCount != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Quantity:</div>&nbsp;
                ${parseRef.dispelCount.displayLines ?? parseRef.dispelCount}
            </div>` : ""}
            ${parseRef.counterKey != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Quantity Key:</div>&nbsp;
                ${parseRef.counterKey}
            </div>` : ""}
            ${parseRef.dispelOrder != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Order:</div>&nbsp;
                ${parseRef.dispelOrder}
            </div>` : ""}
            ${parseRef.livingTargets != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Living Only:</div>&nbsp;
                ${parseRef.livingTargets}
            </div>` : ""}
            ${parseRef.silent != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Is Silent:</div>&nbsp;
                ${parseRef.silent}
            </div>` : ""}
            ${parseRef.toRemove != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Removal List:</div>&nbsp;
                ${parseRef.toRemove}
            </div>` : ""}
        </div>`;
    },
    "Redirect Targeting"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "target",
            "affectedTeam",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Redirect Targeting");

        // initialCounter++;
        return `<div class="actionDetailBody">
            <div class="rotationConditionOperatorHeaderInline">${parseRef.name}:</div>&nbsp;
            ${Array.isArray(parseRef.target) ? megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter) : parseRef.target}
        </div>
        <div class="modifierDetailsBox">
            ${parseRef.affectedTeam != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Affected Team:</div>&nbsp;
                ${parseRef.affectedTeam}
            </div>` : ""}
        </div>`;
    },
    "Heal"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "target",
            
            "EnergyGainPercent",
            "healPercent",
            "healFlat",
            "formula",
            "healer",
            "livingOnly",
            // "value1",
            // "compareType",
            // "value2"
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Heal");
        
        return `<div class="actionDetailBody2">
            <div class="rotationConditionOperatorHeaderInline">Heal:</div>&nbsp;
            ${Array.isArray(parseRef.target) ? megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter) : parseRef.target}
        </div>
        <div class="modifierDetailsBox">
            ${parseRef.healer != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Healer:</div>&nbsp;
                ${Array.isArray(parseRef.healer) ? megaParsingFuckery.makeConditionTargetBox(parseRef.healer,initialCounter) : parseRef.healer}
            </div>` : ""}
            ${parseRef.healPercent != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Heal%:</div>&nbsp;
                ${parseRef.healPercent.displayLines ?? parseRef.healPercent}
            </div>` : ""}
            ${parseRef.healFlat != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Heal Flat:</div>&nbsp;
                ${parseRef.healFlat.displayLines ?? parseRef.healFlat}
            </div>` : ""}
            ${parseRef.EnergyGainPercent != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Energy Split:</div>&nbsp;
                ${parseRef.EnergyGainPercent.displayLines ?? parseRef.EnergyGainPercent}
            </div>` : ""}
            ${parseRef.formula != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Heal Formula:</div>&nbsp;
                ${parseRef.formula}
            </div>` : ""}
            ${parseRef.livingOnly != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Living Only:</div>&nbsp;
                ${parseRef.livingOnly}
            </div>` : ""}
        </div>
        `;
    },
    "Set HP Value"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "target",
            "setValue",
            "clearNegativeHP",
            
            // "EnergyGainPercent",
            // "healPercent",
            // "healFlat",
            // "formula",
            // "healer",
            // "livingOnly",
            // "value1",
            // "compareType",
            // "value2"
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Set HP Value");
        
        return `<div class="actionDetailBody2">
            <div class="rotationConditionOperatorHeaderInline">Set HP to:</div>&nbsp;
            ${Array.isArray(parseRef.target) ? megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter) : parseRef.target}
        </div>
        <div class="modifierDetailsBox">
            ${parseRef.clearNegativeHP != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Clears Negative HP:</div>&nbsp;
                ${parseRef.clearNegativeHP}
            </div>` : ""}
            ${parseRef.setValue != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Heal Flat:</div>&nbsp;
                ${parseRef.setValue.displayLines ?? parseRef.setValue}
            </div>` : ""}
        </div>
        `;
    },
    "Action is an Attack"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            // "on",
            // "show",
            // "time",
            "useActiveAbility",
            
            // "healPercent",
            // "formula",
            // "value1",
            // "compareType",
            // "value2"
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Action is an Attack");


        
        return `<div class="actionDetailBody2">
            <div class="rotationConditionOperatorHeaderInline">Action is Attack/DMG</div>&nbsp;
        </div>
        <div class="modifierDetailsBox">
            ${parseRef.useActiveAbility != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Current Active Ability:</div>&nbsp;
                ${parseRef.useActiveAbility}
            </div>` : ""}
        </div>
        `;
    },
    "Show Attack Time"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "on",
            "show",
            "time",
            "enhanced",
            
            // "healPercent",
            // "formula",
            // "value1",
            // "compareType",
            // "value2"
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Show Attack Time");


        
        return `<div class="actionDetailBody2">
            <div class="rotationConditionOperatorHeaderInline">Show Attack Time:</div>&nbsp;
            ${parseRef.time?.displayLines ?? parseRef.time} ${parseRef.on ? `on ${Array.isArray(parseRef.on) ? megaParsingFuckery.makeConditionTargetBox(parseRef.on,initialCounter) : parseRef.on}` : ""}
        </div>
        <div class="modifierDetailsBox">
            ${parseRef.show != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Show:</div>&nbsp;
                ${parseRef.show}
            </div>` : ""}
            ${parseRef.enhanced != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Enhanced Time:</div>&nbsp;
                ${parseRef.enhanced.displayLines ?? parseRef.enhanced}
            </div>` : ""}
        </div>
        `;
    },
    "Use Operation"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "opMask",
            // "living",
            
            // "healPercent",
            // "formula",
            // "value1",
            // "compareType",
            // "value2"
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Use Operation");

        return `<div class="actionDetailBody2">
            <div class="rotationConditionOperatorHeaderInline">Use Operation:</div>&nbsp;
            ${parseRef.opMask}
        </div>
        `;
    },
    "Switch to Action/Ability Context"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "target",
            // "living",
            
            // "healPercent",
            // "formula",
            // "value1",
            // "compareType",
            // "value2"
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Switch to Action/Ability Context");

        return `<div class="actionDetailBody2">
            <div class="rotationConditionOperatorHeaderInline">Switch to Current Action/Ability Context:</div>&nbsp;
            ${Array.isArray(parseRef.target) ? megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter) : parseRef.target}${parseRef.living ? "(Living)" : ""}
        </div>
        `;
    },
    "Clear DMG Numbers(UI)"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "target",
            // "living",
            
            // "healPercent",
            // "formula",
            // "value1",
            // "compareType",
            // "value2"
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Clear DMG Numbers(UI)");

        return `<div class="actionDetailBody2">
            <div class="rotationConditionOperatorHeaderInline">Clear DMG Numbers(UI):</div>&nbsp;
            ${Array.isArray(parseRef.target) ? megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter) : parseRef.target}${parseRef.living ? "(Living)" : ""}
        </div>
        `;
    },
    "Automatically use Ultimate"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "target",
            // "living",
            
            // "healPercent",
            // "formula",
            // "value1",
            // "compareType",
            // "value2"
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Automatically use Ultimate");

        return `<div class="actionDetailBody2">
            <div class="rotationConditionOperatorHeaderInline">Automatically use Ultimate:</div>&nbsp;
            ${Array.isArray(parseRef.target) ? megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter) : parseRef.target}${parseRef.living ? "(Living)" : ""}
        </div>
        `;
    },
    "Use Controlled Ability"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "target",
            // "living",
            
            // "healPercent",
            // "formula",
            // "value1",
            // "compareType",
            // "value2"
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Use Controlled Ability");


        
        return `<div class="actionDetailBody2">
            <div class="rotationConditionOperatorHeaderInline">Use Controlled Ability:</div>&nbsp;
            on ${Array.isArray(parseRef.target) ? megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter) : parseRef.target}${parseRef.living ? "(Living)" : ""}
        </div>
        `;
    },
    "Is CC Immune"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "target",
            // "living",
            
            // "healPercent",
            // "formula",
            // "value1",
            // "compareType",
            // "value2"
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Is CC Immune");


        
        return `<div class="actionDetailBody2">
            <div class="rotationConditionOperatorHeaderInline">Is CC Immune:</div>&nbsp;
            ${Array.isArray(parseRef.target) ? megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter) : parseRef.target}${parseRef.living ? "(Living)" : ""}
        </div>
        `;
    },
    "Target is HP-Locked"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "target",
            "living",
            "invertCondition",
            "lockHolder",
            
            // "healPercent",
            // "formula",
            // "value1",
            // "compareType",
            // "value2"
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Target is HP-Locked");


        
        return `<div class="actionDetailBody2">
            <div class="rotationConditionOperatorHeaderInline">Target is HP-Locked:</div>&nbsp;
            ${parseRef.invertCondition ? "NOT " : ""}${Array.isArray(parseRef.target) ? megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter) : parseRef.target}${parseRef.living ? "(Living)" : ""}
        </div>
        <div class="modifierDetailsBox">
            ${parseRef.lockHolder != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Lock Holder:</div>&nbsp;
                ${parseRef.lockHolder}
            </div>` : ""}
        </div>
        `;
    },
    "Target is Unselectable"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "target",
            "living",
            "invertCondition",
            
            // "healPercent",
            // "formula",
            // "value1",
            // "compareType",
            // "value2"
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Target is Unselectable");


        
        return `<div class="actionDetailBody2">
            <div class="rotationConditionOperatorHeaderInline">Target is Unselectable:</div>&nbsp;
            ${parseRef.invertCondition ? "NOT " : ""}${Array.isArray(parseRef.target) ? megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter) : parseRef.target}${parseRef.living ? "(Living)" : ""}
        </div>
        `;
    },
    "Boss Bar Display"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "target",
            // "living",
            "display",
            // "invertCondition",
            
            // "healPercent",
            // "formula",
            // "value1",
            // "compareType",
            // "value2"
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Boss Bar Display");


        
        return `<div class="actionDetailBody2">
            <div class="rotationConditionOperatorHeaderInline">Boss Bar Display:</div>&nbsp;
            ${parseRef.invertCondition ? "NOT " : ""} ${Array.isArray(parseRef.target) ? megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter) : parseRef.target}${parseRef.living ? "(Living)" : ""}
        </div>
        <div class="modifierDetailsBox">
            ${parseRef.display != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Display:</div>&nbsp;
                ${parseRef.display}
            </div>` : ""}
        </div>
        `;
    },
    "Has Body-Types"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "target",
            "types",
            "invertCondition",
            
            // "healPercent",
            // "formula",
            // "value1",
            // "compareType",
            // "value2"
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Has Body-Types");


        
        return `<div class="actionDetailBody2">
            <div class="rotationConditionOperatorHeaderInline">Has Body-Types:</div>&nbsp;
            ${parseRef.invertCondition ? "NOT " : ""} ${Array.isArray(parseRef.target) ? megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter) : parseRef.target}${parseRef.living ? "(Living)" : ""}
        </div>
        <div class="modifierDetailsBox">
            ${parseRef.types != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Types:</div>&nbsp;
                ${parseRef.types}
            </div>` : ""}
        </div>
        `;
    },
    "Target has Extra-Turn Queued"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "target",
            "living",
            "invertCondition",
            
            // "healPercent",
            // "formula",
            // "value1",
            // "compareType",
            // "value2"
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Target has Extra-Turn Queued");


        
        return `<div class="actionDetailBody2">
            <div class="rotationConditionOperatorHeaderInline">Target has Extra-Turn Queued:</div>&nbsp;
            ${parseRef.invertCondition ? "NOT " : ""} 
        </div>
        <div class="modifierDetailsBox">
            ${parseRef.target != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Target:</div>&nbsp;
                ${Array.isArray(parseRef.target) ? megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter) : parseRef.target}${parseRef.living ? "(Living)" : ""}
            </div>` : ""}
        </div>
        `;
    },
    "Target Exists"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "target",
            "living",
            "invertCondition",
            
            // "healPercent",
            // "formula",
            // "value1",
            // "compareType",
            // "value2"
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Target Exists");


        
        return `<div class="actionDetailBody2">
            <div class="rotationConditionOperatorHeaderInline">Target Exists:</div>&nbsp;
            ${parseRef.invertCondition ? "NOT " : ""} ${Array.isArray(parseRef.target) ? megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter) : parseRef.target}${parseRef.living ? "(Living)" : ""}
        </div>
        `;
    },
    "Target Is Hostile"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "target",
            "target2",
            
            // "healPercent",
            // "formula",
            // "value1",
            // "compareType",
            // "value2"
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Target Is Hostile");

        return `<div class="actionDetailBody2">
            <div class="rotationConditionOperatorHeaderInline">Target Is Hostile:</div>&nbsp;
            ${Array.isArray(parseRef.target) ? megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter) : parseRef.target} is hostile to ${Array.isArray(parseRef.target2) ? megaParsingFuckery.makeConditionTargetBox(parseRef.target2,initialCounter) : parseRef.target2}
        </div>
        `;
    },
    "Trigger: Break"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "target",
            
            // "healPercent",
            // "formula",
            // "value1",
            // "compareType",
            // "value2"
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Trigger: Break");

        return `<div class="actionDetailBody2">
            <div class="rotationConditionOperatorHeaderInline">Trigger: Break:</div>&nbsp;
            ${Array.isArray(parseRef.target) ? megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter) : parseRef.target}
        </div>
        `;
    },
    "Assign Unique Name"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "target",
            "uniqueName",
            
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Define Toughness Value");

        return `<div class="actionDetailBody2">
            <div class="rotationConditionOperatorHeaderInline">Assign Unique Name:</div>&nbsp;
            ${Array.isArray(parseRef.target) ? megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter) : parseRef.target}
        </div>
        <div class="modifierDetailsBox">
            ${parseRef.uniqueName != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Unique Identifier:</div>&nbsp;
                ${parseRef.uniqueName}
            </div>` : ""}
        </div>
        `;
    },
    "Define Toughness Value"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "target",
            
            // "healPercent",
            // "formula",
            // "value1",
            // "compareType",
            // "value2"
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Define Toughness Value");

        return `<div class="actionDetailBody2">
            <div class="rotationConditionOperatorHeaderInline">Define Toughness Value:</div>&nbsp;
            ${Array.isArray(parseRef.target) ? megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter) : parseRef.target}
        </div>
        `;
    },
    "Exit Broken-State"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "target",
            // "preventWhen0",
            // "skipTeamLock",
            
            // "healPercent",
            // "formula",
            // "value1",
            // "compareType",
            // "value2"
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Exit Broken-State");

        return `<div class="actionDetailBody2">
            <div class="rotationConditionOperatorHeaderInline">Exit Broken-State:</div>&nbsp;
            ${Array.isArray(parseRef.target) ? megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter) : parseRef.target}
        </div>
        <div class="modifierDetailsBox">
            ${parseRef.preventWhen0 != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Prevent when 0:</div>&nbsp;
                ${parseRef.preventWhen0}
            </div>` : ""}
        </div>
        `;
    },
    "Reset Toughness"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "target",
            "preventWhen0",
            "skipTeamLock",
            
            // "healPercent",
            // "formula",
            // "value1",
            // "compareType",
            // "value2"
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Reset Toughness");

        return `<div class="actionDetailBody2">
            <div class="rotationConditionOperatorHeaderInline">Reset Toughness:</div>&nbsp;
            ${Array.isArray(parseRef.target) ? megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter) : parseRef.target}
        </div>
        <div class="modifierDetailsBox">
            ${parseRef.preventWhen0 != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Prevent when 0:</div>&nbsp;
                ${parseRef.preventWhen0}
            </div>` : ""}
            ${parseRef.skipTeamLock != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Bypass Team Lock:</div>&nbsp;
                ${parseRef.skipTeamLock}
            </div>` : ""}
        </div>
        `;
    },
    "Add Battle Event"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "teamName",
            "eventID",
            "variables",
            "assignOwner",
            "whenCreated",
            "statSource",
            
            // "healPercent",
            // "formula",
            // "value1",
            // "compareType",
            // "value2"
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Add Battle Event");











        let addString = "";
        if (parseRef.variables) {
            for (let variableEntry in parseRef.variables) {
                const currentVariable = parseRef.variables[variableEntry];

                addString += `<div class="actionDetailBody2">
                    <div class="rotationConditionOperatorHeaderInline">${variableEntry}:</div>&nbsp;
                    ${currentVariable.displayLines ?? currentVariable}
                </div>`
            }
        }



        
        // return `<div class="actionDetailBody2">
        //     <div class="rotationConditionOperatorHeaderInline">Add Battle Event:</div>&nbsp;
        //     ${parseRef.eventID} to ${parseRef.teamName}
        // </div>
        // <div class="modifierDetailsBox">
        //     ${parseRef.assignOwner != undefined ? `<div class="actionDetailBody2">
        //         <div class="rotationConditionOperatorHeaderInline">Assign Owner:</div>&nbsp;
                
        //     </div>` : ""}
        //     ${addString}
        // </div>
        // `;




        let parseString = "";
        // let refString = "";
        const hasParse = parseRef.whenCreated?.length;
        // const hasRef = parseRef.failed?.length;
        if (hasParse) {parseString += megaParsingFuckery.fillEventBodyBox(parseRef.whenCreated,initialCounter);}
        // if (hasRef) {refString += megaParsingFuckery.fillEventBodyBox(parseRef.failed,initialCounter);}



        // <div class="actionDetailBody">${parseRef.ability} from ${parseRef.from}</div>

        // rotationsSectionRowHolder
        // rotationConditionOperatorBox


        // <details class="rotationsPermaConditionsExpand" open="">
        //     <summary class="actionDetailBodyDetailExpandHeaderBackground clickable">Show Permanent Conditions (1)</summary><div class="actionDetailBody">- Skill Points: Current &gt;= 1</div>
        // </details>

        // if (!hasParse && !hasRef) {return "";}

        return `
        <details class="rotationsPermaConditionsExpand" open="">
            <summary class="rotationConditionOperatorHeaderAbilityTriggerConditionHeader clickable">
                <div class="rotationConditionOperatorHeaderCondition">Add Battle Event:</div>
                ${parseRef.eventID} to ${parseRef.teamName}
            </summary>

            <div class="modifierDetailsBox">
                ${parseRef.assignOwner != undefined ? `<div class="actionDetailBody2">
                    <div class="rotationConditionOperatorHeaderInline">Assign Owner:</div>&nbsp;
                        ${Array.isArray(parseRef.assignOwner) ? megaParsingFuckery.makeConditionTargetBox(parseRef.assignOwner,initialCounter) : parseRef.assignOwner}
                </div>` : ""}
                ${parseRef.statSource != undefined ? `<div class="actionDetailBody2">
                    <div class="rotationConditionOperatorHeaderInline">Stat Source:</div>&nbsp;
                        ${Array.isArray(parseRef.statSource) ? megaParsingFuckery.makeConditionTargetBox(parseRef.statSource,initialCounter) : parseRef.statSource}
                </div>` : ""}

                
                ${addString}
            </div>

            <div class="rotationConditionOperatorBoxMain">
                ${hasParse ? `<div class="rotationConditionOperatorHeaderConditionTHEN">EXECUTE</div>
                <div class="rotationsSectionRowHolder${initialCounter%2 === 0 ? 2 : 1}">
                    ${parseString}
                </div>` : ""}
            </div>
        </details>
        `;
    },
    "Decrement Buff Durations"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "target",
            // "buffID",
            // "variables",
            
            // "healPercent",
            // "formula",
            // "value1",
            // "compareType",
            // "value2"
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Decrement Buff Durations");

        
        return `<div class="actionDetailBody2">
            <div class="rotationConditionOperatorHeaderInline">Decrement Buff Durations:</div>&nbsp;
            ${Array.isArray(parseRef.target) ? megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter) : parseRef.target}
        </div>
        `;
    },
    "Mark Entity as Non-Target(Unselectable) [CUSTOM]"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "blockTeams",
            "entityType",
            // "buffID",
            // "variables",
            
            // "healPercent",
            // "formula",
            // "value1",
            // "compareType",
            // "value2"
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Mark Entity as Non-Target(Unselectable) [CUSTOM]");

        const conditionObject = parseRef.conditions;
        const conditionName = conditionObject?.name;

        let returnString = "" + (typeof conditionObject === "string" ? `<div class="rotationsConditionsBodyBox">${conditionObject}</div>` : "");
        const functionExists = megaParsingFuckery[conditionName];
        if (functionExists) {returnString += `<div class="rotationsConditionsBodyBox">` + functionExists(conditionObject,initialCounter) + `</div>`;}

        if (conditionObject && !returnString) {throw new Error(`Missing condition display-only definition in IF: ${conditionName}`)}

        
        return `<div class="actionDetailBody2">
            <div class="rotationConditionOperatorHeaderInline">Mark Entity as Non-Target(Unselectable) [CUSTOM]:</div>&nbsp;
        </div>
        ${returnString}
        <div class="modifierDetailsBox">
            ${parseRef.blockTeams != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Block Teams:</div>&nbsp;
                ${parseRef.blockTeams}
            </div>` : ""}
            ${parseRef.entityType != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Entity Type:</div>&nbsp;
                ${parseRef.entityType}
            </div>` : ""}
        </div>
        `;
    },
    "Add to Team Target Grouping"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "target",
            // "buffID",
            // "variables",
            
            // "healPercent",
            // "formula",
            // "value1",
            // "compareType",
            // "value2"
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Add to Team Target Grouping");

        
        return `<div class="actionDetailBody2">
            <div class="rotationConditionOperatorHeaderInline">Add to Team Target Grouping:</div>&nbsp;
            ${Array.isArray(parseRef.target) ? megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter) : parseRef.target}
        </div>
        `;
    },
    "Remove from Team Target Grouping"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "target",
            "stayInTeam",
            // "buffID",
            // "variables",
            
            // "healPercent",
            // "formula",
            // "value1",
            // "compareType",
            // "value2"
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Remove from Team Target Grouping");

        
        return `<div class="actionDetailBody2">
            <div class="rotationConditionOperatorHeaderInline">Remove from Team Target Grouping:</div>&nbsp;
            ${Array.isArray(parseRef.target) ? megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter) : parseRef.target}
        </div>
        <div class="modifierDetailsBox">
            ${parseRef.stayInTeam != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Stay in Team Label:</div>&nbsp;
                ${parseRef.stayInTeam}
            </div>` : ""}
        </div>
        `;
    },
    "Mark for Future Revive"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "target",
            // "buffID",
            // "variables",
            
            // "healPercent",
            // "formula",
            // "value1",
            // "compareType",
            // "value2"
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Mark for Future Revive");

        
        return `<div class="actionDetailBody2">
            <div class="rotationConditionOperatorHeaderInline">Mark for Future Revive:</div>&nbsp;
            ${Array.isArray(parseRef.target) ? megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter) : parseRef.target}
        </div>
        `;
    },
    "Record Global Buff Usage"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            // "teamName",
            "buffID",
            // "variables",
            
            // "healPercent",
            // "formula",
            // "value1",
            // "compareType",
            // "value2"
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Record Global Buff Usage");


        // let addString = "";
        // if (parseRef.variables) {
        //     for (let variableEntry in parseRef.variables) {
        //         const currentVariable = parseRef.variables[variableEntry];

        //         addString += `<div class="actionDetailBody2">
        //             <div class="rotationConditionOperatorHeaderInline">${variableEntry}:</div>&nbsp;
        //             ${currentVariable.displayLines ?? currentVariable}
        //         </div>`
        //     }
        // }
        
        return `<div class="actionDetailBody2">
            <div class="rotationConditionOperatorHeaderInline">Record Global Buff Usage:</div>&nbsp;
            ${parseRef.buffID}
        </div>
        `;
    },
    "Assign Global Buff State"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            // "teamName",
            "buffID",
            "variables",
            "state",
            "amount",
            
            // "healPercent",
            // "formula",
            // "value1",
            // "compareType",
            // "value2"
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Assign Global Buff State");


        // let addString = "";
        // if (parseRef.variables) {
        //     for (let variableEntry in parseRef.variables) {
        //         const currentVariable = parseRef.variables[variableEntry];

        //         addString += `<div class="actionDetailBody2">
        //             <div class="rotationConditionOperatorHeaderInline">${variableEntry}:</div>&nbsp;
        //             ${currentVariable.displayLines ?? currentVariable}
        //         </div>`
        //     }
        // }
        
        return `<div class="actionDetailBody2">
            <div class="rotationConditionOperatorHeaderInline">Assign Global Buff State:</div>&nbsp;
            ${parseRef.buffID}
        </div>
        <div class="modifierDetailsBox">
            ${parseRef.state != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Buff State:</div>&nbsp;
                ${parseRef.state}
            </div>` : ""}
            ${parseRef.amount != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Count:</div>&nbsp;
                ${parseRef.amount}
            </div>` : ""}
        </div>
        `;
    },
    "Preload Battle Event(s)"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "teamName",
            "eventID",
            "variables",
            
            // "healPercent",
            // "formula",
            // "value1",
            // "compareType",
            // "value2"
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Preload Battle Event(s)");


        // let addString = "";
        // if (parseRef.variables) {
        //     for (let variableEntry in parseRef.variables) {
        //         const currentVariable = parseRef.variables[variableEntry];

        //         addString += `<div class="actionDetailBody2">
        //             <div class="rotationConditionOperatorHeaderInline">${variableEntry}:</div>&nbsp;
        //             ${currentVariable.displayLines ?? currentVariable}
        //         </div>`
        //     }
        // }
        
        return `<div class="actionDetailBody2">
            <div class="rotationConditionOperatorHeaderInline">Preload Battle Event(s):</div>&nbsp;
            ${parseRef.eventID}
        </div>
        `;
    },
    "Has Weakness"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "target",
            "DamageType",
            "invertCondition",
            "weaknessFilter",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Has Weakness");

        // initialCounter++;
        return `<div class="actionDetailBody">
            <div class="rotationConditionOperatorHeaderInline">${parseRef.name}:</div>&nbsp;
            ${parseRef.DamageType} Weakness is${parseRef.invertCondition ? " NOT" : ""} on ${Array.isArray(parseRef.target) ? megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter) : parseRef.target}
        </div>
        <div class="modifierDetailsBox">
            ${parseRef.weaknessFilter != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Weakness Filter:</div>&nbsp;
                ${parseRef.weaknessFilter}
            </div>` : ""}
        </div>`;
    },
    "Has Element"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "target",
            "DamageType",
            "invertCondition",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Has Element");

        // initialCounter++;
        return `<div class="actionDetailBody">
            <div class="rotationConditionOperatorHeaderInline">${parseRef.name}:</div>&nbsp;
            ${parseRef.DamageType.sourceType ?? parseRef.DamageType} Element is${parseRef.invertCondition ? " NOT" : ""} on ${Array.isArray(parseRef.target) ? megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter) : parseRef.target}
        </div>`;
    },
    "Is Entity Type"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "target",
            "type",
            "invertCondition",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Is Entity Type");

        // initialCounter++;
        return `<div class="actionDetailBody">
            <div class="rotationConditionOperatorHeaderInline">${parseRef.name}:</div>&nbsp;
            ${Array.isArray(parseRef.target) ? megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter) : parseRef.target} ${parseRef.invertCondition ? "(NOT)" : ""}= ${parseRef.type}
        </div>`;
    },
    "Death Animation Completed"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "team",
            "type",
            "invertCondition",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Death Animation Completed");

        // initialCounter++;
        return `<div class="actionDetailBody">
            <div class="rotationConditionOperatorHeaderInline">${parseRef.name}:</div>&nbsp;
            ${parseRef.invertCondition ? `NOT ` : ""}${parseRef.team}, ${parseRef.type}
        </div>`;
    },
    "Is Related Summoned Entity"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "target",
            "target2",
            // "of",
            // "invertCondition",
            // "mustBeAlive1",
            // "mustBeAlive2",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Is Related Summoned Entity");

        // initialCounter++;
        return `<div class="actionDetailBody">
            <div class="rotationConditionOperatorHeaderInline">${parseRef.name}:</div>&nbsp;
        </div>
        <div class="modifierDetailsBox">
            ${parseRef.target != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Summoner:</div>&nbsp;
                ${Array.isArray(parseRef.target) ? megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter) : parseRef.target}${parseRef.mustBeAlive1 ? "(Living)" : ""}
            </div>` : ""}
            ${parseRef.target2 != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Summon:</div>&nbsp;
                ${Array.isArray(parseRef.target2) ? megaParsingFuckery.makeConditionTargetBox(parseRef.target2,initialCounter) : parseRef.target2}${parseRef.mustBeAlive2 ? "(Living)" : ""}
            </div>` : ""}
        </div>`;
    },
    "Is Part Of"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "target",
            "of",
            "invertCondition",
            "mustBeAlive1",
            "mustBeAlive2",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Is Part Of");

        // initialCounter++;
        return `<div class="actionDetailBody">
            <div class="rotationConditionOperatorHeaderInline">${parseRef.name}:</div>&nbsp;
            target family [${parseRef.of}${parseRef.mustBeAlive1 ? "(Living)" : ""}] ${parseRef.invertCondition ? "NOT " : ""}includes ${Array.isArray(parseRef.target) ? megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter) : parseRef.target}${parseRef.mustBeAlive2 ? "(Living)" : ""}
        </div>`;
    },
    "Is Part Of Group"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "target",
            // "of",
            "group",
            "invertCondition",
            // "mustBeAlive1",
            // "mustBeAlive2",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Is Part Of Group");

        // initialCounter++;
        return `<div class="actionDetailBody">
            <div class="rotationConditionOperatorHeaderInline">${parseRef.name}:</div>&nbsp;
            ${parseRef.group} ${parseRef.invertCondition ? "NOT " : ""}includes ${Array.isArray(parseRef.target) ? megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter) : parseRef.target}
        </div>`;
    },
    "Is Teammate"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "target",
            "invertCondition",
            "team",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Is Teammate");

        // initialCounter++;
        return `<div class="actionDetailBody">
            <div class="rotationConditionOperatorHeaderInline">${parseRef.name}:</div>&nbsp;
            ${parseRef.invertCondition ? "NOT " : ""} ${Array.isArray(parseRef.target) ? megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter) : parseRef.target}
        </div>`;
    },
    "Next Injected Action Is Owned"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            // "target",
            "invertCondition",
            // "team",
            // "actionType",
            // "tag",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Next Injected Action Is Owned");

        // initialCounter++;
        return `<div class="actionDetailBody">
            <div class="rotationConditionOperatorHeaderInline">${parseRef.name}:</div>&nbsp;
            ${parseRef.invertCondition ? "NOT " : ""}
        </div>`;
    },
    "Next Extra Turn Is"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "target",
            "invertCondition",
            // "team",
            "actionType",
            "tag",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Next Extra Turn Is");

        // initialCounter++;
        return `<div class="actionDetailBody">
            <div class="rotationConditionOperatorHeaderInline">${parseRef.name}:</div>&nbsp;
            ${parseRef.invertCondition ? "NOT " : ""}${parseRef.target ? ` from ${Array.isArray(parseRef.target) ? megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter) : parseRef.target}` : ""} 
        </div>
        <div class="modifierDetailsBox">
            ${parseRef.actionType != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Action Type:</div>&nbsp;
                ${parseRef.actionType}
            </div>` : ""}
            ${parseRef.tag != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Tag:</div>&nbsp;
                ${parseRef.tag}
            </div>` : ""}
        </div>`;
    },
    "Enemies Still Alive"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "target",
            "invertCondition",
            "includeNonTargets",
            // "team",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Enemies Still Alive");

        // initialCounter++;
        return `<div class="actionDetailBody">
            <div class="rotationConditionOperatorHeaderInline">${parseRef.name}:</div>&nbsp;
            ${parseRef.invertCondition ? "NOT " : ""} in relation to ${Array.isArray(parseRef.target) ? megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter) : parseRef.target}
        </div>
        <div class="modifierDetailsBox">
            ${parseRef.includeNonTargets != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">With Non-Targets:</div>&nbsp;
                ${parseRef.includeNonTargets}
            </div>` : ""}
        </div>`;
    },
    "Is Part Of Team"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "target",
            "team",
            "invertCondition",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Is Part Of Team");

        // initialCounter++;
        return `<div class="actionDetailBody">
            <div class="rotationConditionOperatorHeaderInline">${parseRef.name}:</div>&nbsp;
            target team [${parseRef.team}] ${parseRef.invertCondition ? "NOT " : ""}includes ${Array.isArray(parseRef.target) ? megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter) : parseRef.target}
        </div>`;
    },
    "Target Has Lowest/Highest Value"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "target",
            "partOf",
            "exclude",
            "minOrMax",
            "compareValue",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Target Has Lowest/Highest Value");

        // initialCounter++;
        return `<div class="actionDetailBody">
            <div class="rotationConditionOperatorHeaderInline">${parseRef.name}:</div>
        </div>
        <div class="modifierDetailsBox">
            ${parseRef.target != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Target:</div>&nbsp;
                ${Array.isArray(parseRef.target) ? megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter) : parseRef.target}
            </div>` : ""}
            ${parseRef.partOf != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Part of Target Family:</div>&nbsp;
                ${Array.isArray(parseRef.partOf) ? megaParsingFuckery.makeConditionTargetBox(parseRef.partOf,initialCounter) : parseRef.partOf}
            </div>` : ""}
            ${parseRef.exclude != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Excludes:</div>&nbsp;
                ${Array.isArray(parseRef.exclude) ? megaParsingFuckery.makeConditionTargetBox(parseRef.exclude,initialCounter) : parseRef.exclude}
            </div>` : ""}
            ${parseRef.minOrMax != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Compare Operation:</div>&nbsp;
                ${parseRef.minOrMax}
            </div>` : ""}
            ${parseRef.compareValue != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Compare Stat:</div>&nbsp;
                ${parseRef.compareValue.displayLines ?? parseRef.compareValue}
            </div>` : ""}
        </div>`;
    },
    "Random Chance"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "chance",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Random Chance");

        // initialCounter++;
        return `<div class="actionDetailBody">
            <div class="rotationConditionOperatorHeaderInline">${parseRef.name}:</div>&nbsp;
            ${parseRef.chance?.displayLines ?? parseRef.chance}
        </div>`;
    },
    "Random Value"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "variableName",
            "values",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Random Chance");

        // initialCounter++;
        return `<div class="actionDetailBody">
            <div class="rotationConditionOperatorHeaderInline">${parseRef.name}:</div>&nbsp;
            ${parseRef.variableName} from ${parseRef.values}
        </div>`;
    },
    "Target is Next Turn"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "target",
            "partOf",
            "exclude"
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Target is Next Turn");

        // initialCounter++;
        return `<div class="actionDetailBody">
            <div class="rotationConditionOperatorHeaderInline">${parseRef.name}:</div>&nbsp;
            target family [${parseRef.partOf}] includes ${Array.isArray(parseRef.target) ? megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter) : parseRef.target}, and excludes ${Array.isArray(parseRef.exclude) ? megaParsingFuckery.makeConditionTargetBox(parseRef.exclude,initialCounter) : parseRef.exclude}
        </div>`;
    },
    "Compare: Variable"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "value1",
            "changeIndex",
            "compareType",
            "value2",
            "target",
            "skillOwner",
            "valueType",
            "contextScope",
            "invertCondition",
            "includeInjectedActions",
            "includeExoToughness",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Compare: Variable");

        // initialCounter++;
        return `<div class="actionDetailBody">
            <div class="rotationConditionOperatorHeaderInline">${parseRef.name}:</div>&nbsp;
            ${parseRef.value1?.displayLines ?? parseRef.value1 ?? ""}${parseRef.valueType ? `(Type: ${parseRef.valueType})` : ""}${parseRef.changeIndex != undefined ? `(Index[${parseRef.changeIndex}])` : ""} ${parseRef.invertCondition ? "NOT_" : ""}${parseRef.compareType} ${parseRef.value2?.displayLines ?? parseRef.value2}
        </div>
        <div class="modifierDetailsBox">
            ${parseRef.target != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Target:</div>&nbsp;
                ${Array.isArray(parseRef.target) ? megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter) : parseRef.target}
            </div>` : ""}
            ${parseRef.skillOwner != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Skill Owner Target:</div>&nbsp;
                ${Array.isArray(parseRef.skillOwner) ? megaParsingFuckery.makeConditionTargetBox(parseRef.skillOwner,initialCounter) : parseRef.skillOwner}
            </div>` : ""}
            ${parseRef.contextScope != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Context:</div>&nbsp;
                ${parseRef.contextScope}
            </div>` : ""}
            ${parseRef.includeInjectedActions != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Include Injected Actions:</div>&nbsp;
                ${parseRef.includeInjectedActions}
            </div>` : ""}
            ${parseRef.includeExoToughness != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Include Exo-Toughness:</div>&nbsp;
                ${parseRef.includeExoToughness}
            </div>` : ""}
        </div>`;
    },
    "Compare: Target Count"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "compareType",
            "livingTargets",
            "value2",
            "target",
            "invertCondition",
            "isClientOnly",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Compare: Target Count");
        
        // initialCounter++;
        return `<div class="actionDetailBody">
            <div class="rotationConditionOperatorHeaderInline">${parseRef.name}${parseRef.isClientOnly ? "[CLIENT]" : ""}:</div>&nbsp;
            Targets${parseRef.livingTargets ? "(Living)" : ""}${parseRef.invertCondition ? " NOT" : ""} in ${parseRef.target ? `${Array.isArray(parseRef.target) ? megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter) : parseRef.target}` : ""} ${parseRef.compareType} ${parseRef.value2.displayLines ?? parseRef.value2} 
        </div>`;
    },
    "Compare: Monster Rank"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "compareType",
            "livingTargets",
            "value2",
            "target",
            "invertCondition",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Compare: Variable");
        
        // initialCounter++;
        return `<div class="actionDetailBody">
            <div class="rotationConditionOperatorHeaderInline">${parseRef.name}:</div>&nbsp;
            Targets${parseRef.livingTargets ? "(Living)" : ""}${parseRef.invertCondition ? " NOT" : ""} in ${parseRef.target ? `${Array.isArray(parseRef.target) ? megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter) : parseRef.target}` : ""} ${parseRef.compareType} ${parseRef.value2.displayLines ?? parseRef.value2} 
        </div>`;
    },
    "Compare: Target Count SUM"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            // "compareType",
            // "livingTargets",
            "conditions",
            "target",
            "invertCondition",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Compare: Variable");

        const conditionObject = parseRef.conditions;
        const conditionName = conditionObject?.name;

        let returnString = "" + (typeof conditionObject === "string" ? `<div class="rotationsConditionsBodyBox">${conditionObject}</div>` : "");
        const functionExists = megaParsingFuckery[conditionName];
        if (functionExists) {returnString += `<div class="rotationsConditionsBodyBox">` + functionExists(conditionObject,initialCounter) + `</div>`;}

        if (conditionObject && !returnString) {throw new Error(`Missing condition display-only definition in IF: ${conditionName}`)}
        
        // initialCounter++;
        return `<div class="actionDetailBody">
            <div class="rotationConditionOperatorHeaderInline">${parseRef.name}:</div>&nbsp;
            Targets ${parseRef.invertCondition ? "NOT " : ""}in ${parseRef.target ? `${Array.isArray(parseRef.target) ? megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter) : parseRef.target}` : ""}
        </div>
        ${returnString}`;
    },
    "Compare: Ability Value"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "value1",
            "compareType",
            "value2",
            "target",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Compare: Ability Value");

        // initialCounter++;
        return `<div class="actionDetailBody">
            <div class="rotationConditionOperatorHeaderInline">${parseRef.name}:</div>&nbsp;
            ${parseRef.value1.displayLines ?? parseRef.value1} ${parseRef.compareType} ${parseRef.value2.displayLines ?? parseRef.value2} ${parseRef.target ? `on ${Array.isArray(parseRef.target) ? megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter) : parseRef.target}` : ""}
        </div>`;
    },
    "Compare: Parameter String"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "compareType",
            "value2",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Compare: Parameter String");

        // initialCounter++;
        return `<div class="actionDetailBody">
            <div class="rotationConditionOperatorHeaderInline">${parseRef.name}:</div>&nbsp;
            ${parseRef.compareType} ${parseRef.value2.displayLines ?? parseRef.value2}
        </div>`;
    },
    "Force Auto-Battle on Target"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "target",
            "enable",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Force Auto-Battle on Target");

        // const conditionObject = parseRef.conditions;
        // const conditionName = conditionObject?.name;

        // let returnString = "" + (typeof conditionObject === "string" ? `<div class="rotationsConditionsBodyBox">${conditionObject}</div>` : "");
        // const functionExists = megaParsingFuckery[conditionName];
        // if (functionExists) {returnString += `<div class="rotationsConditionsBodyBox">` + functionExists(conditionObject,initialCounter) + `</div>`;}

        // if (conditionObject && !returnString) {throw new Error(`Missing condition display-only definition in IF: ${conditionName}`)}
        
        return `<div class="actionDetailBody2">
            <div class="rotationConditionOperatorHeaderInline">Force Auto-Battle on Target:</div>&nbsp;
            ${parseRef.enable} on ${Array.isArray(parseRef.target) ? megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter) : parseRef.target}
        </div>
        `;
    },
    "Add Sub-Events/Bonuses"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "to",
            "modifier",
            "duration",
            // "stackLimit",
            "valuePerStack",
            "includeBattleEvent",
            "refModifier",
            // "addStacksPerTrigger",
            // "duration",
            // "counter",
            // "value1",
            // "compareType",
            // "value2"
            "conditions",

            "aliveOnly",
            "haloStatus",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Add Sub-Events/Bonuses");

        const conditionObject = parseRef.conditions;
        const conditionName = conditionObject?.name;

        let returnString = "" + (typeof conditionObject === "string" ? `<div class="rotationsConditionsBodyBox">${conditionObject}</div>` : "");
        const functionExists = megaParsingFuckery[conditionName];
        if (functionExists) {returnString += `<div class="rotationsConditionsBodyBox">` + functionExists(conditionObject,initialCounter) + `</div>`;}

        if (conditionObject && !returnString) {throw new Error(`Missing condition display-only definition in IF: ${conditionName}`)}
        
        return `<div class="actionDetailBody2">
            <div class="rotationConditionOperatorHeaderInline">Add Event/Bonus:</div>&nbsp;
            ${parseRef.modifier}
        </div>
        ${returnString ?? ""}
        <div class="modifierDetailsBox">
            ${parseRef.duration != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Duration:</div>&nbsp;
                ${parseRef.duration.displayLines ?? parseRef.duration}
            </div>` : ""}
            ${parseRef.to != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Target:</div>&nbsp;
                ${Array.isArray(parseRef.to) ? megaParsingFuckery.makeConditionTargetBox(parseRef.to,initialCounter) : parseRef.to}
            </div>` : ""}
            ${parseRef.valuePerStack != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Parameters:</div>&nbsp;
                ${parseRef.valuePerStack.displayLines ?? typeof parseRef.valuePerStack === "object" ? megaParsingFuckery.ValuePerStackParsing(parseRef.valuePerStack,initialCounter) : parseRef.valuePerStack}
            </div>` : ""}
            ${parseRef.haloStatus != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Is Zone/Team Buff:</div>&nbsp;
                ${parseRef.haloStatus}
            </div>` : ""}
            ${parseRef.refModifier != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Reference Modifier:</div>&nbsp;
                ${parseRef.refModifier}
            </div>` : ""}

            
            ${parseRef.aliveOnly != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Apply to Living Only:</div>&nbsp;
                ${parseRef.aliveOnly}
            </div>` : ""}
            ${parseRef.includeBattleEvent != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Include Battle Events:</div>&nbsp;
                ${parseRef.includeBattleEvent}
            </div>` : ""}

            
        </div>
        `;
    },
    "Add Events/Bonuses"(parseRef,initialCounter) {
        initialCounter++;
        const knownKeySet = new Set ([
            "name",
            "to",
            "modifier",
            "stackLimit",
            "valuePerStack",
            "addStacksPerTrigger",
            "duration",
            "counter",
            "casterAssign",
            "stackFlag",
            "baseChance",
            "immediateEffect",
            "referenceModifier",
            "needLiving",
            "silentAdd",
            "success",
            "failed",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Add Events/Bonuses");


        let parseString = "";
        let refString = "";
        const hasParse = parseRef.success?.length;
        const hasRef = parseRef.failed?.length;
        if (hasParse) {parseString += megaParsingFuckery.fillEventBodyBox(parseRef.success,initialCounter);}
        if (hasRef) {refString += megaParsingFuckery.fillEventBodyBox(parseRef.failed,initialCounter);}

        // const conditionObject = parseRef.conditions;
        // const conditionName = conditionObject?.name;

        // let returnString = "" + (typeof conditionObject === "string" ? `<div class="rotationsConditionsBodyBox">${conditionObject}</div>` : "");
        // const functionExists = megaParsingFuckery[conditionName];
        // if (functionExists) {returnString += `<div class="rotationsConditionsBodyBox">` + functionExists(conditionObject,initialCounter) + `</div>`;}

        // if (!returnString) {
        //     console.log(conditionObject)
        //     throw new Error(`Missing condition display-only definition in IF: ${conditionName}`)
        // }


        // <div class="actionDetailBody">${parseRef.ability} from ${parseRef.from}</div>

        // rotationsSectionRowHolder
        // rotationConditionOperatorBox


        // <details class="rotationsPermaConditionsExpand" open="">
        //     <summary class="actionDetailBodyDetailExpandHeaderBackground clickable">Show Permanent Conditions (1)</summary><div class="actionDetailBody">- Skill Points: Current &gt;= 1</div>
        // </details>

        // if (!hasParse && !hasRef) {return "";}

        return `
        <details class="rotationsPermaConditionsExpand" open="">
            <summary class="rotationConditionOperatorHeaderAbilityTriggerConditionHeader clickable">
                <div class="rotationConditionOperatorHeaderCondition">Add Event/Bonus:</div>
                ${parseRef.modifier}
            </summary>


            <div class="modifierDetailsBox">
                ${parseRef.to != undefined ? `<div class="actionDetailBody2">
                    <div class="rotationConditionOperatorHeaderInline">Target:</div>&nbsp;
                    ${Array.isArray(parseRef.to) ? megaParsingFuckery.makeConditionTargetBox(parseRef.to,initialCounter) : parseRef.to}
                </div>` : ""}
                ${parseRef.referenceModifier != undefined ? `<div class="actionDetailBody2">
                    <div class="rotationConditionOperatorHeaderInline">Reference Modifier:</div>&nbsp;
                    ${parseRef.referenceModifier}
                </div>` : ""}
                ${parseRef.counter != undefined ? `<div class="actionDetailBody2">
                    <div class="rotationConditionOperatorHeaderInline">Counter:</div>&nbsp;
                    ${parseRef.counter.displayLines ?? parseRef.counter}
                </div>` : ""}
                ${parseRef.duration != undefined ? `<div class="actionDetailBody2">
                    <div class="rotationConditionOperatorHeaderInline">Duration:</div>&nbsp;
                    ${parseRef.duration.displayLines ?? parseRef.duration} Turns
                </div>` : ""}
                ${parseRef.stackLimit != undefined ? `<div class="actionDetailBody2">
                    <div class="rotationConditionOperatorHeaderInline">Stack Limit:</div>&nbsp;
                    ${parseRef.stackLimit.displayLines ?? parseRef.stackLimit}
                </div>` : ""}
                ${parseRef.stackFlag != undefined ? `<div class="actionDetailBody2">
                    <div class="rotationConditionOperatorHeaderInline">Stack FlagType:</div>&nbsp;
                    ${parseRef.stackFlag}
                </div>` : ""}
                ${parseRef.baseChance != undefined ? `<div class="actionDetailBody2">
                    <div class="rotationConditionOperatorHeaderInline">Base Chance:</div>&nbsp;
                    ${parseRef.baseChance.displayLines ?? parseRef.baseChance}
                </div>` : ""}
                
                ${parseRef.valuePerStack != undefined ? `<div class="actionDetailBody2">
                    <div class="rotationConditionOperatorHeaderInline">Parameters:</div>&nbsp;
                    ${parseRef.valuePerStack.displayLines ?? typeof parseRef.valuePerStack === "object" ? megaParsingFuckery.ValuePerStackParsing(parseRef.valuePerStack,initialCounter) : parseRef.valuePerStack}
                </div>` : ""}
                ${parseRef.addStacksPerTrigger != undefined ? `<div class="actionDetailBody2">
                    <div class="rotationConditionOperatorHeaderInline">Stacks/Trigger:</div>&nbsp;
                    ${parseRef.addStacksPerTrigger.displayLines ?? parseRef.addStacksPerTrigger}
                </div>` : ""}
                ${parseRef.casterAssign != undefined ? `<div class="actionDetailBody2">
                    <div class="rotationConditionOperatorHeaderInline">Give Caster-tag To:</div>&nbsp;
                    ${parseRef.casterAssign}
                </div>` : ""}
                ${parseRef.immediateEffect != undefined ? `<div class="actionDetailBody2">
                    <div class="rotationConditionOperatorHeaderInline">Benefit Immediately:</div>&nbsp;
                    ${parseRef.immediateEffect}
                </div>` : ""}
                ${parseRef.needLiving != undefined ? `<div class="actionDetailBody2">
                    <div class="rotationConditionOperatorHeaderInline">Need Living:</div>&nbsp;
                    ${parseRef.needLiving}
                </div>` : ""}
                ${parseRef.silentAdd != undefined ? `<div class="actionDetailBody2">
                    <div class="rotationConditionOperatorHeaderInline">Silent Additions:</div>&nbsp;
                    ${parseRef.silentAdd}
                </div>` : ""}

                
            </div>

            <div class="rotationConditionOperatorBoxMain">
                ${hasParse ? `<div class="rotationConditionOperatorHeaderConditionTHEN">SUCCESS</div>
                <div class="rotationsSectionRowHolder${initialCounter%2 === 0 ? 2 : 1}">
                    ${parseString}
                </div>` : ""}
                ${hasRef ? `<div class="rotationConditionOperatorHeaderConditionTHEN">FAILED</div>
                    <div class="rotationsSectionRowHolder${initialCounter%2 === 0 ? 2 : 1}">
                        ${refString}
                    </div>` : ""}
            </div>
        </details>
        `;
        
        // return `<div class="actionDetailBody2">
        //     <div class="rotationConditionOperatorHeaderInline">Add Event/Bonus:</div>&nbsp;
        //     ${parseRef.modifier} to ${Array.isArray(parseRef.to) ? megaParsingFuckery.makeConditionTargetBox(parseRef.to,initialCounter) : parseRef.to}
        // </div>
        // `;
    },
    "ValuePerStackParsing"(parseRef,initialCounter) {
        let partialString = "";

        for (let objectKey in parseRef) {
            const currentValue = parseRef[objectKey];
            partialString += `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">${objectKey}:</div>&nbsp;
                ${currentValue?.displayLines ?? currentValue}
            </div>`
        }

        return `<div class="modifierDetailsBox">
            ${partialString}
        </div>`
    },
    "Remove Events/Bonuses"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "to",
            "modifier",
            "onlyRemoveOwnersInstance",
            "removeAllInstances",
            // "value1",
            // "compareType",
            // "value2"
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Remove Events/Bonuses");

        // console.log(parseRef.to)
        return `<div class="actionDetailBody2Preview">
            <div class="rotationConditionOperatorHeaderInline">Remove Event/Bonus:</div>&nbsp;
            ${parseRef.modifier} from ${Array.isArray(parseRef.to) ? megaParsingFuckery.makeConditionTargetBox(parseRef.to,initialCounter) : parseRef.to}
        </div>
        
        <div class="modifierDetailsBox">
            ${parseRef.onlyRemoveOwnersInstance != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Only remove Owner's Application:</div>&nbsp;
                ${parseRef.onlyRemoveOwnersInstance}
            </div>` : ""}
            ${parseRef.removeAllInstances != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Remove All Instances:</div>&nbsp;
                ${parseRef.removeAllInstances}
            </div>` : ""}
        </div>`
    },
    "ATK Scaling DMG"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "target",
            "canPhase",
            "AttackScaling",
            "canOverkill",
            "isConvertedDMG",
            "dealAfterOriginialHit",

            "overrideDamageOwner",
            "overrideDamageStatSource",
            "postHitTaskList",

            // "modifier",
            // "stackLimit",
            // "valuePerStack",
            // "addStacksPerTrigger",
            // "duration",
            // "value1",
            // "compareType",
            // "value2"
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"ATK Scaling DMG");

        // <div class="rotationConditionOperatorHeaderCondition">THEN</div>
        //     <div class="rotationsSectionRowHolder${initialCounter%2 === 0 ? 2 : 1}">
        //     ${parseString}
        // </div>

        let parseString = "";
        // let refString = "";
        const hasParse = parseRef.postHitTaskList?.length;
        // const hasRef = parseRef.failed?.length;
        if (hasParse) {parseString += megaParsingFuckery.fillEventBodyBox(parseRef.postHitTaskList,initialCounter);}
        // if (hasRef) {refString += megaParsingFuckery.fillEventBodyBox(parseRef.failed,initialCounter);}


        megaParsingFuckery.AttackScaling(parseRef.AttackScaling,initialCounter)
        return `
        <details class="rotationsPermaConditionsExpand" open="">
            <summary class="rotationConditionOperatorHeaderAbilityTriggerConditionHeader clickable">
                <div class="rotationConditionOperatorHeaderCondition">ATTACK</div>
                <img src="/HonkaiSR/icon/property/IconAttack.png" class="characterDisplayLogStatIconCenter">
                <div class="actionDetailBody2">
                    <div class="rotationConditionOperatorHeaderInline">Target:</div>&nbsp;
                    ${Array.isArray(parseRef.target) ? megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter) : parseRef.target}
                </div>
            </summary>

            <div class="modifierDetailsBox">
                ${parseRef.overrideDamageOwner != undefined ? `<div class="actionDetailBody2">
                    <div class="rotationConditionOperatorHeaderInline">Override Owner:</div>&nbsp;
                    ${parseRef.overrideDamageOwner}
                </div>` : ""}
                ${parseRef.overrideDamageStatSource != undefined ? `<div class="actionDetailBody2">
                    <div class="rotationConditionOperatorHeaderInline">Override Stat-Provider:</div>&nbsp;
                    ${parseRef.overrideDamageStatSource}
                </div>` : ""}
                ${parseRef.canOverkill != undefined ? `<div class="actionDetailBody2">
                    <div class="rotationConditionOperatorHeaderInline">Can Overkill:</div>&nbsp;
                    ${parseRef.canOverkill}
                </div>` : ""}
                ${parseRef.isConvertedDMG != undefined ? `<div class="actionDetailBody2">
                    <div class="rotationConditionOperatorHeaderInline">Is Converted DMG:</div>&nbsp;
                    ${parseRef.isConvertedDMG}
                </div>` : ""}
                ${parseRef.dealAfterOriginialHit != undefined ? `<div class="actionDetailBody2">
                    <div class="rotationConditionOperatorHeaderInline">Deal AFTER Original Hit/DMG:</div>&nbsp;
                    ${parseRef.dealAfterOriginialHit}
                </div>` : ""}
                
                
            </div>

            <div class="rotationConditionOperatorBoxMainAttack">
                ${parseRef.AttackScaling ? `
                <div class="rotationsConditionsBodyBox${initialCounter%2 === 0 ? 2 : 1}">
                    ${megaParsingFuckery.AttackScaling(parseRef.AttackScaling,initialCounter)}
                </div>` : ""}
                ${1 === 2 ? `<div class="rotationConditionOperatorHeaderConditionELSE">ELSE</div>
                <div class="rotationsSectionRowHolder${initialCounter%2 === 0 ? 2 : 1}">
                    ${"asdf"}
                </div>` : ""}
            </div>

            <div class="rotationConditionOperatorBoxMain">
                ${hasParse ? `<div class="rotationConditionOperatorHeaderConditionTHEN">AFTER HIT</div>
                <div class="rotationsSectionRowHolder${initialCounter%2 === 0 ? 2 : 1}">
                    ${parseString}
                </div>` : ""}
            </div>
        </details>
        
        `;

        // return `<div class="actionDetailBody2">
        //     <div class="rotationConditionOperatorHeaderInline">Add Event/Bonus:</div>&nbsp;
        //     ${parseRef.modifier} to ${parseRef.to}
        // </div>
        // <div class="modifierDetailsBox">
        //     ${parseRef.duration != undefined ? `<div class="actionDetailBody2">
        //         <div class="rotationConditionOperatorHeaderInline">Duration:</div>&nbsp;
        //         ${parseRef.duration} Turns
        //     </div>` : ""}
        //     ${parseRef.stackLimit != undefined ? `<div class="actionDetailBody2">
        //         <div class="rotationConditionOperatorHeaderInline">Stack Limit:</div>&nbsp;
        //         ${parseRef.stackLimit.displayLines ?? parseRef.stackLimit}
        //     </div>` : ""}
        //     ${parseRef.valuePerStack != undefined ? `<div class="actionDetailBody2">
        //         <div class="rotationConditionOperatorHeaderInline">Value/Stack:</div>&nbsp;
        //         ${parseRef.valuePerStack.displayLines ?? parseRef.valuePerStack}
        //     </div>` : ""}
        //     ${parseRef.addStacksPerTrigger != undefined ? `<div class="actionDetailBody2">
        //         <div class="rotationConditionOperatorHeaderInline">Stacks/Trigger:</div>&nbsp;
        //         ${parseRef.addStacksPerTrigger.displayLines ?? parseRef.addStacksPerTrigger}
        //     </div>` : ""}
        // </div>
        // `;
    },
    "AttackScaling"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "DamageType",
            "Damage",
            "DamageExtra",
            "DamageBreak",
            "Toughness",
            "Tags",
            "EnergyGainPercent",
            "HitSplit",

            "attackType",
            "hitOwner",
            "ToughnessDMGType",
            "instanceTag",

            "indirectDMG",
            "dmgFormula",
            "dmgFormulaExtra",
            "dmgFormulaFinal",
            "keepDMGType",
            "inheritTargetFrom",

            // "modifier",
            // "stackLimit",
            // "valuePerStack",
            // "addStacksPerTrigger",
            // "duration",
            // "value1",
            // "compareType",
            // "value2"
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"AttackScaling");


        // {
        //     "name": "Damage Type Source",
        //     "sourceType": "ReadTargetType",
        //     "target": "Caster"
        //   }


        return `
        ${parseRef.Damage ? `<div class="actionDetailBody2">
            <div class="rotationConditionOperatorHeaderInline">DMG:</div>&nbsp;
            ${parseRef.Damage?.displayLines ?? parseRef.Damage} ${typeof parseRef.DamageType === "object" ? megaParsingFuckery.ValuePerStackParsing(parseRef.DamageType,initialCounter) : `(${parseRef.DamageType})`}
        </div>` : ""}
        ${parseRef.DamageBreak ? `<div class="actionDetailBody2">
            <div class="rotationConditionOperatorHeaderInline">Break DMG:</div>&nbsp;
            ${parseRef.DamageBreak?.displayLines ?? parseRef.DamageBreak} ${typeof parseRef.DamageType === "object" ? megaParsingFuckery.ValuePerStackParsing(parseRef.DamageType,initialCounter) : `(${parseRef.DamageType})`}
        </div>` : ""}
        <div class="modifierDetailsBox">
            ${parseRef.HitSplit != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Hit-Split (Extra):</div>&nbsp;
                ${parseRef.HitSplit.displayLines ?? parseRef.HitSplit}
            </div>` : ""}
            ${parseRef.Toughness != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Toughness:</div>&nbsp;
                ${parseRef.Toughness.displayLines ?? parseRef.Toughness}
            </div>` : ""}
            ${parseRef.EnergyGainPercent != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Energy Split:</div>&nbsp;
                ${parseRef.EnergyGainPercent.displayLines ?? parseRef.EnergyGainPercent}
            </div>` : ""}
            ${parseRef.Tags != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Tags:</div>&nbsp;
                ${parseRef.Tags}
            </div>` : ""}
            ${parseRef.attackType != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Attack Type:</div>&nbsp;
                ${parseRef.attackType}
            </div>` : ""}
            ${parseRef.hitOwner != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Hit Owner:</div>&nbsp;
                ${parseRef.hitOwner}
            </div>` : ""}

            ${parseRef.ToughnessDMGType != undefined  && parseRef.ToughnessDMGType.DamageType? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Toughness Element:</div>&nbsp;
                ${parseRef.ToughnessDMGType.DamageType}
            </div>` : ""}
            ${parseRef.indirectDMG != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Indirect DMG:</div>&nbsp;
                ${parseRef.indirectDMG}
            </div>` : ""}

            ${parseRef.dmgFormula != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">DMG Scaling:</div>&nbsp;
                ${parseRef.dmgFormula}
            </div>` : ""}

            
            ${parseRef.dmgFormulaFinal != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">DMG Formula(Final):</div>&nbsp;
                ${parseRef.dmgFormulaFinal}
            </div>` : ""}
            ${parseRef.instanceTag != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Instance Tag:</div>&nbsp;
                ${parseRef.instanceTag}
            </div>` : ""}

            ${parseRef.keepDMGType != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Inherit DMG Type:</div>&nbsp;
                ${parseRef.keepDMGType}
            </div>` : ""}
            ${parseRef.inheritTargetFrom != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Inherit Target:</div>&nbsp;
                ${parseRef.inheritTargetFrom}
            </div>` : ""}
            
        </div>

        
        ${parseRef.DamageExtra ? `<div class="actionDetailBody2">
            <div class="rotationConditionOperatorHeaderInline">Secondary DMG:</div>&nbsp;
            ${parseRef.DamageExtra?.displayLines ?? parseRef.DamageExtra} ${typeof parseRef.DamageType === "object" ? megaParsingFuckery.ValuePerStackParsing(parseRef.DamageType,initialCounter) : `(${parseRef.DamageType})`}
        </div>
        <div class="modifierDetailsBox">
            ${parseRef.dmgFormulaExtra != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Secondary DMG Scaling:</div>&nbsp;
                ${parseRef.dmgFormulaExtra}
            </div>` : ""}
        </div>` : ""}
        `;
    },
    "Stack Shield"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            // "target",
            // "value",

            "stackValue",
            "stackLimit",

            // "modifier",
            // "stackLimit",
            // "valuePerStack",
            // "addStacksPerTrigger",
            // "duration",
            // "value1",
            // "compareType",
            // "value2"
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Stack Shield");


        // {
        //     "name": "Damage Type Source",
        //     "sourceType": "ReadTargetType",
        //     "target": "Caster"
        //   }


        return `<div class="actionDetailBody2">
            <div class="rotationConditionOperatorHeaderInline">Stack Shield:</div>&nbsp;
        </div>
        
        <div class="modifierDetailsBox">
            ${parseRef.stackValue != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Added Value:</div>&nbsp;
                ${parseRef.stackValue?.displayLines ?? parseRef.stackValue}
            </div>` : ""}
            ${parseRef.stackLimit != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Shield Cap:</div>&nbsp;
                ${parseRef.stackLimit?.displayLines ?? parseRef.stackLimit}
            </div>` : ""}
        </div>
        `;
    },
    "Create Shield"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "target",
            "value",
            "formula",
            "valuePercent",

            // "modifier",
            // "stackLimit",
            // "valuePerStack",
            // "addStacksPerTrigger",
            // "duration",
            // "value1",
            // "compareType",
            // "value2"
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Create Shield");


        // {
        //     "name": "Damage Type Source",
        //     "sourceType": "ReadTargetType",
        //     "target": "Caster"
        //   }


        return `<div class="actionDetailBody2">
            <div class="rotationConditionOperatorHeaderInline">Create Shield:</div>&nbsp;
            on ${Array.isArray(parseRef.target) ? megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter) : parseRef.target}
        </div>
        
        <div class="modifierDetailsBox">
            ${parseRef.formula != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Formula:</div>&nbsp;
                ${parseRef.formula}
            </div>` : ""}
            ${parseRef.value != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Shield Value:</div>&nbsp;
                ${parseRef.value.displayLines ?? parseRef.value}
            </div>` : ""}
            ${parseRef.valuePercent != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Shield Value Percent:</div>&nbsp;
                ${parseRef.valuePercent.displayLines ?? parseRef.valuePercent}
            </div>` : ""}

            
        </div>
        `;
    },
    "Remove Shield"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "target",

            // "modifier",
            // "stackLimit",
            // "valuePerStack",
            // "addStacksPerTrigger",
            // "duration",
            // "value1",
            // "compareType",
            // "value2"
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Remove Shield");


        // {
        //     "name": "Damage Type Source",
        //     "sourceType": "ReadTargetType",
        //     "target": "Caster"
        //   }


        return `<div class="actionDetailBody2">
            <div class="rotationConditionOperatorHeaderInline">Remove Shield:</div>&nbsp;
            on ${Array.isArray(parseRef.target) ? megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter) : parseRef.target}
        </div>
        `;
    },
    "Set Shield State/Value"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "reset",

            // "modifier",
            // "stackLimit",
            // "valuePerStack",
            // "addStacksPerTrigger",
            // "duration",
            // "value1",
            // "compareType",
            // "value2"
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Set Shield State/Value");


        // {
        //     "name": "Damage Type Source",
        //     "sourceType": "ReadTargetType",
        //     "target": "Caster"
        //   }


        return `<div class="actionDetailBody2">
            <div class="rotationConditionOperatorHeaderInline">Set Shield State/Value</div>&nbsp;
            ${parseRef.reset ? parseRef.reset : ""}
        </div>
        `;
    },
    "Skill Data Entry"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "skillTrigger",
            "energyCost",
            "parameters",

            // "modifier",
            // "stackLimit",
            // "valuePerStack",
            // "addStacksPerTrigger",
            // "duration",
            // "value1",
            // "compareType",
            // "value2"
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Skill Data Entry");


        // {
        //     "name": "Damage Type Source",
        //     "sourceType": "ReadTargetType",
        //     "target": "Caster"
        //   }


        return `<div class="actionDetailBody2">
            <div class="rotationConditionOperatorHeaderInline">Skill Data Entry:</div>
        </div>
        
        <div class="modifierDetailsBox">
            ${parseRef.skillTrigger != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Skill Trigger:</div>&nbsp;
                ${parseRef.skillTrigger}
            </div>` : ""}
            ${parseRef.energyCost != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Energy Cost:</div>&nbsp;
                ${parseRef.energyCost.displayLines ?? parseRef.energyCost}
            </div>` : ""}
            ${parseRef.parameters != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Parameters:</div>&nbsp;
                ${parseRef.parameters.displayLines ?? typeof parseRef.parameters === "object" ? megaParsingFuckery.ValuePerStackParsing(parseRef.parameters,initialCounter) : parseRef.parameters}
            </div>` : ""}
        </div>
        `;
    },
    "Copy Modifier"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "target",
            "source",
            "dispelFilter",
            "copyType",
            "useParamModifier",

            // "modifier",
            // "stackLimit",
            // "valuePerStack",
            // "addStacksPerTrigger",
            // "duration",
            // "value1",
            // "compareType",
            // "value2"
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Copy Modifier");


        // {
        //     "name": "Damage Type Source",
        //     "sourceType": "ReadTargetType",
        //     "target": "Caster"
        //   }


        return `<div class="actionDetailBody2">
            <div class="rotationConditionOperatorHeaderInline">Copy Modifier:</div>
        </div>
        
        <div class="modifierDetailsBox">
            ${parseRef.target != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Copy To:</div>&nbsp;
                ${Array.isArray(parseRef.target) ? megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter) : parseRef.target}
            </div>` : ""}
            ${parseRef.source != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Copy From:</div>&nbsp;
                ${Array.isArray(parseRef.source) ? megaParsingFuckery.makeConditionTargetBox(parseRef.source,initialCounter) : parseRef.source}
            </div>` : ""}
            ${parseRef.copyType != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Copy Type:</div>&nbsp;
                ${parseRef.copyType}
            </div>` : ""}
            ${parseRef.dispelFilter != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Dispel Filter:</div>&nbsp;
                ${parseRef.dispelFilter}
            </div>` : ""}
            ${parseRef.useParamModifier != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Use Prior Modifier as Parameter:</div>&nbsp;
                ${parseRef.useParamModifier}
            </div>` : ""}
        </div>
        `;
    },
    "Skill Points Modification"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "adjustmentValue",
            "adjustmentType",
            // "previewType",
            // "previewValue",
            // "DynamicValues",
            // "stackType",
            // "variableValueChange",
            // "stackData",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Skill Points Modification");


        // rotationsSectionRowHolder
        // rotationConditionOperatorBox


        // <details class="rotationsPermaConditionsExpand" open="">
        //     <summary class="actionDetailBodyDetailExpandHeaderBackground clickable">Show Permanent Conditions (1)</summary><div class="actionDetailBody">- Skill Points: Current &gt;= 1</div>
        // </details>


        // stackData
        // return `
        // <details class="rotationsPermaConditionsExpand" open="">
        //     <summary class="rotationConditionOperatorHeaderAbilityTriggerConditionHeader clickable">
        //         <div class="rotationConditionOperatorHeaderCondition">${parseRef.name}</div>
        //         ${parseRef.adjustmentType}${parseRef.adjustmentValue}
        //     </summary>
        // </details>
        // `;
        return `<div class="actionDetailBody2">
            <div class="rotationConditionOperatorHeaderInline">${parseRef.name}</div>&nbsp;
            ${parseRef.adjustmentType}${parseRef.adjustmentValue.displayLines ?? parseRef.adjustmentValue}
        </div>
        `;
    },
    "Assign Advance/Delay to Current Ability Use"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "adjustmentValue",
            "adjustmentType",
            // "previewType",
            // "previewValue",
            // "DynamicValues",
            // "stackType",
            // "variableValueChange",
            // "stackData",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Override Effect Advance/Delay");


        // rotationsSectionRowHolder
        // rotationConditionOperatorBox


        // <details class="rotationsPermaConditionsExpand" open="">
        //     <summary class="actionDetailBodyDetailExpandHeaderBackground clickable">Show Permanent Conditions (1)</summary><div class="actionDetailBody">- Skill Points: Current &gt;= 1</div>
        // </details>


        // stackData
        // return `
        // <details class="rotationsPermaConditionsExpand" open="">
        //     <summary class="rotationConditionOperatorHeaderAbilityTriggerConditionHeader clickable">
        //         <div class="rotationConditionOperatorHeaderCondition">${parseRef.name}</div>
        //         ${parseRef.adjustmentType}${parseRef.adjustmentValue}
        //     </summary>
        // </details>
        // `;
        return `<div class="actionDetailBody2">
            <div class="rotationConditionOperatorHeaderInline">Add Advance/Delay to Current Ability</div>&nbsp;
            AV ${parseRef.adjustmentType} ${parseRef.adjustmentValue.displayLines ?? parseRef.adjustmentValue}
        </div>
        `;
    },
    "Update UI Preview"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "show",
            "target",
            "previewType",
            "previewValue",

            "skillType",
            // "DynamicValues",
            // "stackType",
            // "variableValueChange",
            // "stackData",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Update UI Preview");

        // let parseString = "";
        // let refString = "";
        // const hasParse = parseRef.execute?.length;
        // const hasRef = parseRef.variableValueChange?.length;
        // if (hasParse) {parseString += megaParsingFuckery.fillEventBodyBox(parseRef.execute,initialCounter);}
        // if (hasRef) {refString += megaParsingFuckery.fillEventBodyBox(parseRef.variableValueChange,initialCounter);}

        // const conditionObject = parseRef.conditions;
        // const conditionName = conditionObject.name;

        // let returnString = "";
        // const functionExists = megaParsingFuckery[conditionName];
        // if (functionExists) {returnString += `<div class="rotationsConditionsBodyBox">` + functionExists(conditionObject,initialCounter) + `</div>`;}

        // <div class="actionDetailBody">${parseRef.ability} from ${parseRef.from}</div>

        // rotationsSectionRowHolder
        // rotationConditionOperatorBox


        // <details class="rotationsPermaConditionsExpand" open="">
        //     <summary class="actionDetailBodyDetailExpandHeaderBackground clickable">Show Permanent Conditions (1)</summary><div class="actionDetailBody">- Skill Points: Current &gt;= 1</div>
        // </details>


        // stackData
        // return `
        // <details class="rotationsPermaConditionsExpand" open="">
        //     <summary class="rotationConditionOperatorHeaderAbilityTriggerConditionHeader clickable">
        //         <div class="rotationConditionOperatorHeaderCondition">${parseRef.name}</div>
        //         ${parseRef.show} ${parseRef.previewType} on ${parseRef.target}
        //     </summary>

        //     <div class="modifierDetailsBox">
        //         ${parseRef.previewValue ? `<div class="actionDetailBody2">
        //             <div class="rotationConditionOperatorHeaderInline">Amount:</div>&nbsp;
        //             ${parseRef.previewValue.displayLines ?? parseRef.previewValue}
        //         </div>` : ""}
        //     </div>
        // </details>
        // `;
        return `<div class="actionDetailBody2">
            <div class="rotationConditionOperatorHeaderInline">${parseRef.name}</div>&nbsp;
            ${parseRef.show} ${parseRef.previewType} on ${Array.isArray(parseRef.target) ? megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter) : parseRef.target}
        </div>
        <div class="modifierDetailsBox">
            ${parseRef.skillType ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Skill Type:</div>&nbsp;
                ${parseRef.skillType}
            </div>` : ""}
            ${parseRef.previewValue ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Amount:</div>&nbsp;
                ${parseRef.previewValue.displayLines ?? parseRef.previewValue}
            </div>` : ""}
        </div>
        `;
    },
    "Target List"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "target",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Update UI Preview");

        return `<div class="actionDetailBody2">
            <div class="rotationConditionOperatorHeaderInline">${parseRef.name}</div>&nbsp;
            ${Array.isArray(parseRef.target) ? megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter) : parseRef.target}
        </div>
        `;
    },
    "Is Weak to Attacker"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "weakTo",
            "target",
            "invertCondition",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Is Weak to Attacker");

        return `<div class="actionDetailBody2">
            <div class="rotationConditionOperatorHeaderInline">${parseRef.name}</div>&nbsp;
            ${parseRef.weakTo} is${parseRef.invertCondition != undefined ? " NOT" : ""} Weak to ${Array.isArray(parseRef.target) ? megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter) : parseRef.target}
        </div>
        `;
    },
    "Has Damage Tags"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "damageTag",
            "invertCondition",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Has Damage Tags");

        return `<div class="actionDetailBody2">
            <div class="rotationConditionOperatorHeaderInline">${parseRef.name}</div>&nbsp;
            ${parseRef.invertCondition != undefined ? " NOT" : ""} ${parseRef.damageTag}
        </div>
        `;
    },
    "Addition Dependency"(parseRef,initialCounter) {
        //THIS SHARES A FUNCTION ON WITH REMOVAL, just remember that later
        const knownKeySet = new Set ([
            "name",
            "dependancyName",
            "casterFilter",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Addition Dependency");

        return `<div class="actionDetailBody2Preview">
            <div class="rotationConditionOperatorHeaderInline">${parseRef.name}</div>&nbsp;
            ${parseRef.dependancyName}
        </div>
        <div class="modifierDetailsBox">
            ${parseRef.casterFilter ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Caster Filter:</div>&nbsp;
                ${Array.isArray(parseRef.casterFilter) ? megaParsingFuckery.makeConditionTargetBox(parseRef.casterFilter,initialCounter) : parseRef.casterFilter}
            </div>` : ""}
        </div>
        `;
    },
    "Removal Dependency"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "dependancyName",
            "casterFilter",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Removal Dependency");

        return `<div class="actionDetailBody2Preview">
            <div class="rotationConditionOperatorHeaderInline">${parseRef.name}</div>&nbsp;
            ${parseRef.dependancyName}
        </div>
        <div class="modifierDetailsBox">
            ${parseRef.casterFilter ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Caster Filter:</div>&nbsp;
                ${Array.isArray(parseRef.casterFilter) ? megaParsingFuckery.makeConditionTargetBox(parseRef.casterFilter,initialCounter) : parseRef.casterFilter}
            </div>` : ""}
        </div>
        `;
    },
    "Target Filter"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "conditions",
            // "passed",
            // "failed"
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"IF");

        // conditions
        // passed
        // failed

        // let parseString = "";
        // let refString = "";
        // const hasParse = parseRef.passed?.length;
        // const hasRef = parseRef.failed?.length;
        // if (hasParse) {parseString += megaParsingFuckery.fillEventBodyBox(parseRef.passed,initialCounter);}
        // if (hasRef) {refString += megaParsingFuckery.fillEventBodyBox(parseRef.failed,initialCounter);}

        const conditionObject = parseRef.conditions;
        const conditionName = conditionObject?.name;

        let returnString = "" + (typeof conditionObject === "string" ? `<div class="rotationsConditionsBodyBox">${conditionObject}</div>` : "");
        const functionExists = megaParsingFuckery[conditionName];
        if (functionExists) {returnString += `<div class="rotationsConditionsBodyBox">` + functionExists(conditionObject,initialCounter) + `</div>`;}

        if (!returnString) {throw new Error(`Missing condition display-only definition in IF: ${conditionName}`)}

        // <div class="actionDetailBody">${parseRef.ability} from ${parseRef.from}</div>

        // rotationsSectionRowHolder
        // rotationConditionOperatorBox


        // <details class="rotationsPermaConditionsExpand" open="">
        //     <summary class="actionDetailBodyDetailExpandHeaderBackground clickable">Show Permanent Conditions (1)</summary><div class="actionDetailBody">- Skill Points: Current &gt;= 1</div>
        // </details>

        // if (!hasParse && !hasRef) {return "";}

        return `
            <div class="rotationConditionOperatorHeaderAbilityTriggerConditionHeader clickable">
                <div class="rotationConditionOperatorHeaderCondition">${parseRef.name}</div>
                ${returnString}
            </div>
        `;
        // return `
        //     <div class="rotationConditionOperatorHeaderAbilityTriggerConditionHeader">
        //         <div class="rotationConditionOperatorHeaderCondition">${parseRef.name}</div>
        //         ${returnString}
        //     </div>
            
        //     <div class="rotationConditionOperatorBoxMain">
        //         ${hasParse ? `<div class="rotationConditionOperatorHeaderConditionTHEN">THEN</div>
        //         <div class="rotationsSectionRowHolder${initialCounter%2 === 0 ? 2 : 1}">
        //             ${parseString}
        //         </div>` : ""}
        //         ${hasRef ? `<div class="rotationConditionOperatorHeaderConditionELSE">ELSE</div>
        //         <div class="rotationsSectionRowHolder${initialCounter%2 === 0 ? 2 : 1}">
        //             ${refString}
        //         </div>` : ""}
        //     </div>
        // `;
    },
    

    generalValueParsing(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "to",
            "modifier",
            "stackLimit",
            "valuePerStack",
            "addStacksPerTrigger",
            "duration",
            // "value1",
            // "compareType",
            // "value2"
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Add Events/Bonuses");
    },
    "Inject Extra-Turn"(parseRef,initialCounter) {
        initialCounter++;
        const knownKeySet = new Set ([
            "name",
            "actionTag",
            "afterInjection",
            "skillType",
            "forceAction",
            "runsAfterBattleEnd",
            "castTarget",
            "target",
            "followSameTagAsAction",
            "canInjectUltimates",
            "abilityName",
            "priorityTag",
            "skillIndex",
            "abortFlags",
            "ignoreCost",
            "conditions",
            "skillTypeDelayed",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Inject Extra-Turn");

        // conditions
        // passed
        // failed

        let parseString = "";
        // let refString = "";
        const hasParse = parseRef.afterInjection?.length;
        // const hasRef = parseRef.failed?.length;
        if (hasParse) {parseString += megaParsingFuckery.fillEventBodyBox(parseRef.afterInjection,initialCounter);}
        // if (hasRef) {refString += megaParsingFuckery.fillEventBodyBox(parseRef.failed,initialCounter);}

        // const conditionObject = parseRef.conditions;
        // const conditionName = conditionObject.name;

        // let returnString = "";
        // const functionExists = megaParsingFuckery[conditionName];
        // if (functionExists) {returnString += `<div class="rotationsConditionsBodyBox">` + functionExists(conditionObject,initialCounter) + `</div>`;}

        // <div class="actionDetailBody">${parseRef.ability} from ${parseRef.from}</div>

        // rotationsSectionRowHolder
        // rotationConditionOperatorBox


        // <details class="rotationsPermaConditionsExpand" open="">
        //     <summary class="actionDetailBodyDetailExpandHeaderBackground clickable">Show Permanent Conditions (1)</summary><div class="actionDetailBody">- Skill Points: Current &gt;= 1</div>
        // </details>

        const conditionObject = parseRef.conditions;
        const conditionName = conditionObject?.name;

        let returnString = "" + (typeof conditionObject === "string" ? `<div class="rotationsConditionsBodyBox">${conditionObject}</div>` : "");
        const functionExists = megaParsingFuckery[conditionName];
        if (functionExists) {returnString += `<div class="rotationsConditionsBodyBox">` + functionExists(conditionObject,initialCounter) + `</div>`;}

        if (conditionObject && !returnString) {throw new Error(`Missing condition display-only definition in IF: ${conditionName}`)}

        return `
        <details class="rotationsPermaConditionsExpand" open="">
            <summary class="rotationConditionOperatorHeaderAbilityTriggerConditionHeader clickable">
                <div class="rotationConditionOperatorHeaderCondition">${parseRef.name}</div>
                ${parseRef.actionTag ? `${parseRef.actionTag} tag` : ""}
            </summary>

            ${returnString}
            <div class="modifierDetailsBox">
                ${parseRef.skillType ? `<div class="actionDetailBody2">
                    <div class="rotationConditionOperatorHeaderInline">Use Ability:</div>&nbsp;
                    ${parseRef.skillType + (parseRef.skillType === "ControlSkill02" ? "(Auto-Skill)" : "")}
                </div>` : ""}
                ${parseRef.skillTypeDelayed ? `<div class="actionDetailBody2">
                    <div class="rotationConditionOperatorHeaderInline">Use Ability When Delayed:</div>&nbsp;
                    ${parseRef.skillTypeDelayed + (parseRef.skillTypeDelayed === "ControlSkill02" ? "(Auto-Skill)" : "")}
                </div>` : ""}
                ${parseRef.abilityName ? `<div class="actionDetailBody2">
                    <div class="rotationConditionOperatorHeaderInline">Use Ability(By Name):</div>&nbsp;
                    ${parseRef.abilityName}
                </div>` : ""}
                ${parseRef.skillIndex != undefined ? `<div class="actionDetailBody2">
                    <div class="rotationConditionOperatorHeaderInline">Skill Index:</div>&nbsp;
                    ${parseRef.skillIndex?.displayLines ?? parseRef.skillIndex}
                </div>` : ""}

                

                
                ${parseRef.forceAction ? `<div class="actionDetailBody2">
                    <div class="rotationConditionOperatorHeaderInline">Action is Forced:</div>&nbsp;
                    ${parseRef.forceAction}
                </div>` : ""}
                ${parseRef.runsAfterBattleEnd ? `<div class="actionDetailBody2">
                    <div class="rotationConditionOperatorHeaderInline">Can Run After Battle End:</div>&nbsp;
                    ${parseRef.runsAfterBattleEnd}
                </div>` : ""}
                ${parseRef.canInjectUltimates ? `<div class="actionDetailBody2">
                    <div class="rotationConditionOperatorHeaderInline">Can Inject Ultimates:</div>&nbsp;
                    ${parseRef.canInjectUltimates}
                </div>` : ""}
                ${parseRef.ignoreCost ? `<div class="actionDetailBody2">
                    <div class="rotationConditionOperatorHeaderInline">Ignore Skill Point Cost:</div>&nbsp;
                    ${parseRef.ignoreCost}
                </div>` : ""}

                
                ${parseRef.followSameTagAsAction ? `<div class="actionDetailBody2">
                    <div class="rotationConditionOperatorHeaderInline">Follows Same Tags as Reg Action:</div>&nbsp;
                    ${parseRef.followSameTagAsAction}
                </div>` : ""}
                ${parseRef.priorityTag ? `<div class="actionDetailBody2">
                    <div class="rotationConditionOperatorHeaderInline">Priority Tag:</div>&nbsp;
                    ${parseRef.priorityTag}
                </div>` : ""}
                ${parseRef.abortFlags ? `<div class="actionDetailBody2">
                    <div class="rotationConditionOperatorHeaderInline">Abort Flags:</div>&nbsp;
                    ${parseRef.abortFlags}
                </div>` : ""}
                

                
                    
                

                ${parseRef.target ? `<div class="actionDetailBody2">
                    <div class="rotationConditionOperatorHeaderInline">Target:</div>&nbsp;
                    ${Array.isArray(parseRef.target) ? megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter) : parseRef.target}
                </div>` : ""}
                ${parseRef.castTarget ? `<div class="actionDetailBody2">
                    <div class="rotationConditionOperatorHeaderInline">Cast Target:</div>&nbsp;
                    ${Array.isArray(parseRef.castTarget) ? megaParsingFuckery.makeConditionTargetBox(parseRef.castTarget,initialCounter) : parseRef.castTarget}
                </div>` : ""}
            </div>

            <div class="rotationConditionOperatorBoxMain">
                ${hasParse ? `<div class="rotationConditionOperatorHeaderConditionTHEN">Injection Failure</div>
                <div class="rotationsSectionRowHolder${initialCounter%2 === 0 ? 2 : 1}">
                    ${parseString}
                </div>` : ""}
            </div>
        </details>
        `;
    },
    "Looped Event"(parseRef,initialCounter) {
        initialCounter++;
        const knownKeySet = new Set ([
            "name",
            "maxLoops",
            "Event",
            "conditions",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Looped Event");

        // conditions
        // passed
        // failed

        let parseString = "";
        // let refString = "";
        const hasParse = parseRef.Event?.length;
        // const hasRef = parseRef.failed?.length;
        if (hasParse) {parseString += megaParsingFuckery.fillEventBodyBox(parseRef.Event,initialCounter);}
        // if (hasRef) {refString += megaParsingFuckery.fillEventBodyBox(parseRef.failed,initialCounter);}


        const conditionObject = parseRef.conditions;
        const conditionName = conditionObject?.name;

        let returnString = "" + (typeof conditionObject === "string" ? `<div class="rotationsConditionsBodyBox">${conditionObject}</div>` : "");
        const functionExists = megaParsingFuckery[conditionName];
        if (functionExists) {returnString += `<div class="rotationsConditionsBodyBox">` + functionExists(conditionObject,initialCounter) + `</div>`;}

        if (conditionObject && !returnString) {throw new Error(`Missing condition display-only definition in IF: ${conditionName}`)}

        // const conditionObject = parseRef.conditions;
        // const conditionName = conditionObject.name;

        // let returnString = "";
        // const functionExists = megaParsingFuckery[conditionName];
        // if (functionExists) {returnString += `<div class="rotationsConditionsBodyBox">` + functionExists(conditionObject,initialCounter) + `</div>`;}

        // <div class="actionDetailBody">${parseRef.ability} from ${parseRef.from}</div>

        // rotationsSectionRowHolder
        // rotationConditionOperatorBox


        // <details class="rotationsPermaConditionsExpand" open="">
        //     <summary class="actionDetailBodyDetailExpandHeaderBackground clickable">Show Permanent Conditions (1)</summary><div class="actionDetailBody">- Skill Points: Current &gt;= 1</div>
        // </details>

        return `
        <details class="rotationsPermaConditionsExpand" open="">
            <summary class="rotationConditionOperatorHeaderAbilityTriggerConditionHeader clickable">
                <div class="rotationConditionOperatorHeaderCondition">${parseRef.name}</div>
                ${parseRef.maxLoops != undefined ? `${parseRef.maxLoops.displayLines ?? parseRef.maxLoops} Loops` : ""}
            </summary>
            ${returnString}

            <div class="rotationConditionOperatorBoxMain">
                ${hasParse ? `<div class="rotationConditionOperatorHeaderConditionTHEN">Event</div>
                <div class="rotationsSectionRowHolder${initialCounter%2 === 0 ? 2 : 1}">
                    ${parseString}
                </div>` : ""}
            </div>
        </details>
        `;
    },
    "Find New Target"(parseRef,initialCounter) {
        initialCounter++;
        const knownKeySet = new Set ([
            "name",
            "from",
            "searchRandom",
            "includeDyingTargets",
            "maxTargets",
            "conditions",
            "ifTargetFound",
            "noTargetFound",
            "ignoreParallelWarning",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Find New Target");

        // conditions
        // passed
        // failed

        let parseString = "";
        let refString = "";
        const hasParse = parseRef.ifTargetFound?.length;
        const hasRef = parseRef.noTargetFound?.length;
        if (hasParse) {parseString += megaParsingFuckery.fillEventBodyBox(parseRef.ifTargetFound,initialCounter);}
        if (hasRef) {refString += megaParsingFuckery.fillEventBodyBox(parseRef.noTargetFound,initialCounter);}

        const conditionObject = parseRef.conditions;
        const conditionName = conditionObject?.name;

        let returnString = "";
        const functionExists = megaParsingFuckery[conditionName];
        if (functionExists) {returnString += `<div class="rotationsConditionsBodyBox">` + functionExists(conditionObject,initialCounter) + `</div>`;}

        // <div class="actionDetailBody">${parseRef.ability} from ${parseRef.from}</div>

        // rotationsSectionRowHolder
        // rotationConditionOperatorBox


        // <details class="rotationsPermaConditionsExpand" open="">
        //     <summary class="actionDetailBodyDetailExpandHeaderBackground clickable">Show Permanent Conditions (1)</summary><div class="actionDetailBody">- Skill Points: Current &gt;= 1</div>
        // </details>

        return `
        <details class="rotationsPermaConditionsExpand" open="">
            <summary class="rotationConditionOperatorHeaderAbilityTriggerConditionHeader clickable">
                <div class="rotationConditionOperatorHeaderCondition">${parseRef.name}</div>
                ${returnString ?? `<div class="rotationsConditionsBodyBox">No conditions</div>`}
            </summary>

            <div class="modifierDetailsBox">
                ${parseRef.from ? `<div class="actionDetailBody2">
                    <div class="rotationConditionOperatorHeaderInline">Target Pool:</div>&nbsp;
                    ${Array.isArray(parseRef.from) ? megaParsingFuckery.makeConditionTargetBox(parseRef.from,initialCounter) : parseRef.from}
                </div>` : ""}
                ${parseRef.searchRandom ? `<div class="actionDetailBody2">
                    <div class="rotationConditionOperatorHeaderInline">Random Search:</div>&nbsp;
                    ${parseRef.searchRandom}
                </div>` : ""}
                ${parseRef.includeDyingTargets ? `<div class="actionDetailBody2">
                    <div class="rotationConditionOperatorHeaderInline">Dying Targets:</div>&nbsp;
                    ${parseRef.includeDyingTargets}
                </div>` : ""}
                ${parseRef.maxTargets ? `<div class="actionDetailBody2">
                    <div class="rotationConditionOperatorHeaderInline">Max Targets Returned:</div>&nbsp;
                    ${parseRef.maxTargets.displayLines ?? parseRef.maxTargets}
                </div>` : ""}
                ${parseRef.ignoreParallelWarning != undefined ? `<div class="actionDetailBody2">
                    <div class="rotationConditionOperatorHeaderInline">Ignore Parallel Warning:</div>&nbsp;
                    ${parseRef.ignoreParallelWarning}
                </div>` : ""}

                
            </div>

            <div class="rotationConditionOperatorBoxMain">
                ${hasParse ? `<div class="rotationConditionOperatorHeaderConditionTHEN">THEN</div>
                <div class="rotationsSectionRowHolder${initialCounter%2 === 0 ? 2 : 1}">
                    ${parseString}
                </div>` : ""}
                ${hasRef ? `<div class="rotationConditionOperatorHeaderConditionELSE">ELSE</div>
                <div class="rotationsSectionRowHolder${initialCounter%2 === 0 ? 2 : 1}">
                    ${refString}
                </div>` : ""}
            </div>
        </details>
        `;
    },
    "Random Event"(parseRef,initialCounter) {
        initialCounter++;
        const knownKeySet = new Set ([
            "name",
            "odds",
            "execute",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Random Event");

        // conditions
        // passed
        // failed

        let parseString = "";
        let refString = "";
        const hasParse = parseRef.odds?.length;
        const hasRef = parseRef.execute?.length;
        if (hasParse) {parseString += megaParsingFuckery.fillEventBodyBox(parseRef.odds,initialCounter);}
        if (hasRef) {refString += megaParsingFuckery.fillEventBodyBox(parseRef.execute,initialCounter);}

        if (parseRef.odds?.length) {
            for (let i=0;i<parseRef.odds.length;i++) {
                if (parseRef.odds[i].displayLines) {parseRef.odds[i] = parseRef.odds[i].displayLines;}
            }
        }

        return `
        <details class="rotationsPermaConditionsExpand" open="">
            <summary class="rotationConditionOperatorHeaderAbilityTriggerConditionHeader clickable">
                <div class="rotationConditionOperatorHeaderCondition">${parseRef.name}</div>
            </summary>

            <div class="modifierDetailsBox">
                ${parseRef.odds ? `<div class="actionDetailBody2">
                    <div class="rotationConditionOperatorHeaderInline">ODDS:</div>&nbsp;
                    ${parseRef.odds}
                </div>` : ""}
            </div>

            <div class="rotationConditionOperatorBoxMain">
                ${hasRef ? `<div class="rotationConditionOperatorHeaderConditionTHEN">Execute</div>
                <div class="rotationsSectionRowHolder${initialCounter%2 === 0 ? 2 : 1}">
                    ${refString}
                </div>` : ""}
            </div>
        </details>
        `;
    },
    "Reconstruct Modifier"(parseRef,initialCounter) {
        initialCounter++;
        const knownKeySet = new Set ([
            "name",
            "target",
            "casterFilter",
            "counter",
            "modifier",
            "execute",
            "failed",
            "includeTargetsInLimbo",
            "flagFilter",
            "priority",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Reconstruct Modifier");

        let parseString = "";
        let refString = "";
        // let abilityString = "";
        // let functionString = "";
        // let subModString = "";
        const hasParse = parseRef.execute?.length;
        const hasRef = parseRef.failed?.length;
        // const hasAbilityChange = parseRef.abilityValueChange?.length;
        // const hasFunctions = parseRef.modifierFunctions?.length;
        // const hasSubMods = parseRef.subModList?.length;
        if (hasParse) {parseString += megaParsingFuckery.fillEventBodyBox(parseRef.execute,initialCounter);}
        if (hasRef) {refString += megaParsingFuckery.fillEventBodyBox(parseRef.failed,initialCounter);}
        // if (hasAbilityChange) {abilityString += megaParsingFuckery.fillEventBodyBox(parseRef.abilityValueChange,initialCounter);}
        // if (hasFunctions) {functionString += megaParsingFuckery.fillEventBodyBox(parseRef.modifierFunctions,initialCounter);}
        // if (hasSubMods) {subModString += megaParsingFuckery.fillEventBodyBox(parseRef.subModList,initialCounter);}


        

        // const conditionObject = parseRef.conditions;
        // const conditionName = conditionObject.name;

        // let returnString = "";
        // const functionExists = megaParsingFuckery[conditionName];
        // if (functionExists) {returnString += `<div class="rotationsConditionsBodyBox">` + functionExists(conditionObject,initialCounter) + `</div>`;}

        // <div class="actionDetailBody">${parseRef.ability} from ${parseRef.from}</div>

        // rotationsSectionRowHolder
        // rotationConditionOperatorBox


        // <details class="rotationsPermaConditionsExpand" open="">
        //     <summary class="actionDetailBodyDetailExpandHeaderBackground clickable">Show Permanent Conditions (1)</summary><div class="actionDetailBody">- Skill Points: Current &gt;= 1</div>
        // </details>

        // const previewValue = parseRef.previewValue ? megaParsingFuckery["Modifier: UI Preview"](parseRef.previewValue,initialCounter) : null;


        // const dependencyObject = parseRef.removalDependencies;
        // const dependencyName = dependencyObject?.name;
        // let returnStringDependencies = "";
        // const functionExists = megaParsingFuckery[dependencyName];
        // if (functionExists) {returnStringDependencies += `<div class="rotationsConditionsBodyBox">` + functionExists(dependencyObject,initialCounter) + `</div>`;}

        // stackData

        return `
        <details class="rotationsPermaConditionsExpand" open="">
            <summary class="rotationConditionOperatorHeaderAbilityTriggerConditionHeader clickable">
                <div class="rotationConditionOperatorHeaderCondition">${parseRef.name}</div>
                ${parseRef.modifier ?? "undefined(or listening to any applied)"} 
            </summary>

            ${Array.isArray(parseRef.target) ? megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter) : parseRef.target ?? ""}

            <div class="modifierDetailsBox">
                ${parseRef.counter ? `<div class="actionDetailBody2">
                    <div class="rotationConditionOperatorHeaderInline">Counter:</div>&nbsp;
                    ${parseRef.counter.displayLines ?? parseRef.counter}
                </div>` : ""}
                ${parseRef.includeTargetsInLimbo ? `<div class="actionDetailBody2">
                    <div class="rotationConditionOperatorHeaderInline">Include Targets in Limbo:</div>&nbsp;
                    ${parseRef.includeTargetsInLimbo}
                </div>` : ""}
                ${parseRef.flagFilter ? `<div class="actionDetailBody2">
                    <div class="rotationConditionOperatorHeaderInline">Flag Filter:</div>&nbsp;
                    ${parseRef.flagFilter}
                </div>` : ""}
                ${parseRef.priority ? `<div class="actionDetailBody2">
                    <div class="rotationConditionOperatorHeaderInline">Priority Tag:</div>&nbsp;
                    ${parseRef.priority}
                </div>` : ""}

                

                
                ${parseRef.target ? `<div class="actionDetailBody2">
                    <div class="rotationConditionOperatorHeaderInline">Target:</div>&nbsp;
                    ${Array.isArray(parseRef.target) ? megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter) : parseRef.target ?? ""}
                </div>` : ""}
                ${parseRef.casterFilter ? `<div class="actionDetailBody2">
                    <div class="rotationConditionOperatorHeaderInline">Use Entity Snapshot:</div>&nbsp;
                    ${Array.isArray(parseRef.casterFilter) ? megaParsingFuckery.makeConditionTargetBox(parseRef.casterFilter,initialCounter) : parseRef.casterFilter ?? ""}
                </div>` : ""}
            </div>

            <div class="rotationConditionOperatorBoxMain">
                ${hasParse ? `<div class="rotationConditionOperatorHeaderConditionTHEN">Execute</div>
                    <div class="rotationsSectionRowHolder${initialCounter%2 === 0 ? 2 : 1}">
                        ${parseString}
                    </div>` : ""}
                ${hasRef ? `<div class="rotationConditionOperatorHeaderConditionELSE">Failed</div>
                    <div class="rotationsSectionRowHolder${initialCounter%2 === 0 ? 2 : 1}">
                        ${refString}
                    </div>` : ""}

            </div>
        </details>
        `;

    },
    "Modifier Construction"(parseRef,initialCounter) {
        initialCounter++;
        const knownKeySet = new Set ([
            "name",
            "for",
            "counter",
            "execute",
            "AdditionConfig",
            "DynamicValues",
            "stackType",
            "variableValueChange",
            "lifeCyclePhaseAllowed",
            "useEntitySnapshot",
            "removalDependencies",
            "applyBindingFlagEffects",
            "filter",

            "stackData",
            "latentQueue",
            "duration",

            "stackLimit",
            "addStacksPerTrigger",

            "targetRestriction",
            "targetRestrictionFor",

            "abilityValueChange",
            "previewValue",
            "modifierFlags",
            "description",
            "type",
            "effectName",
            "statusName",
            "priority",

            "modifierFunctions",
            "subModList",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Modifier Construction");

        let parseString = "";
        let refString = "";
        let abilityString = "";
        let functionString = "";
        let subModString = "";
        const hasParse = parseRef.execute?.length;
        const hasRef = parseRef.variableValueChange?.length;
        const hasAbilityChange = parseRef.abilityValueChange?.length;
        const hasFunctions = parseRef.modifierFunctions?.length;
        const hasSubMods = parseRef.subModList?.length;
        if (hasParse) {parseString += megaParsingFuckery.fillEventBodyBox(parseRef.execute,initialCounter);}
        if (hasRef) {refString += megaParsingFuckery.fillEventBodyBox(parseRef.variableValueChange,initialCounter);}
        if (hasAbilityChange) {abilityString += megaParsingFuckery.fillEventBodyBox(parseRef.abilityValueChange,initialCounter);}
        if (hasFunctions) {functionString += megaParsingFuckery.fillEventBodyBox(parseRef.modifierFunctions,initialCounter);}
        if (hasSubMods) {subModString += megaParsingFuckery.fillEventBodyBox(parseRef.subModList,initialCounter);}


        

        // const conditionObject = parseRef.conditions;
        // const conditionName = conditionObject.name;

        // let returnString = "";
        // const functionExists = megaParsingFuckery[conditionName];
        // if (functionExists) {returnString += `<div class="rotationsConditionsBodyBox">` + functionExists(conditionObject,initialCounter) + `</div>`;}

        // <div class="actionDetailBody">${parseRef.ability} from ${parseRef.from}</div>

        // rotationsSectionRowHolder
        // rotationConditionOperatorBox


        // <details class="rotationsPermaConditionsExpand" open="">
        //     <summary class="actionDetailBodyDetailExpandHeaderBackground clickable">Show Permanent Conditions (1)</summary><div class="actionDetailBody">- Skill Points: Current &gt;= 1</div>
        // </details>

        const previewValue = parseRef.previewValue ? megaParsingFuckery["Modifier: UI Preview"](parseRef.previewValue,initialCounter) : null;


        const dependencyObject = parseRef.removalDependencies;
        const dependencyName = dependencyObject?.name;
        let returnStringDependencies = "";
        const functionExists = megaParsingFuckery[dependencyName];
        if (functionExists) {returnStringDependencies += `<div class="rotationsConditionsBodyBox">` + functionExists(dependencyObject,initialCounter) + `</div>`;}

        // stackData

        
        return `
        <details class="rotationsPermaConditionsExpand" open="">
            <summary class="rotationConditionOperatorHeaderAbilityTriggerConditionHeader clickable">
                <div class="rotationConditionOperatorHeaderCondition">${parseRef.name}</div>
                ${parseRef.for} 
            </summary>

            <div class="modifierDetailsBox">
                ${returnStringDependencies ?? ""}
                
                ${parseRef.targetRestriction ? `<div class="actionDetailBody2">
                    <div class="rotationConditionOperatorHeaderInline">Restrict Targets To:</div>&nbsp;
                    ${Array.isArray(parseRef.targetRestriction) ? megaParsingFuckery.makeConditionTargetBox(parseRef.targetRestriction,initialCounter) : parseRef.targetRestriction ?? ""}
                </div>` : ""}
                ${parseRef.targetRestrictionFor ? `<div class="actionDetailBody2">
                    <div class="rotationConditionOperatorHeaderInline">Restrict Targets For:</div>&nbsp;
                    ${parseRef.targetRestrictionFor}
                </div>` : ""}
                ${parseRef.priority != undefined ? `<div class="actionDetailBody2">
                    <div class="rotationConditionOperatorHeaderInline">Priority Tag:</div>&nbsp;
                    ${parseRef.priority}
                </div>` : ""}
                ${parseRef.duration != undefined ? `<div class="actionDetailBody2">
                    <div class="rotationConditionOperatorHeaderInline">Duration:</div>&nbsp;
                    ${parseRef.duration.displayLines ?? parseRef.duration}
                </div>` : ""}
                ${parseRef.counter ? `<div class="actionDetailBody2">
                    <div class="rotationConditionOperatorHeaderInline">Counter:</div>&nbsp;
                    ${parseRef.counter.displayLines ?? parseRef.counter}
                </div>` : ""}
                ${parseRef.stackType ? `<div class="actionDetailBody2">
                    <div class="rotationConditionOperatorHeaderInline">Stack Type:</div>&nbsp;
                    ${parseRef.stackType}
                </div>` : ""}
                ${parseRef.lifeCyclePhaseAllowed ? `<div class="actionDetailBody2">
                    <div class="rotationConditionOperatorHeaderInline">Allow in LifeCycle Phase:</div>&nbsp;
                    ${parseRef.lifeCyclePhaseAllowed}
                </div>` : ""}
                ${parseRef.useEntitySnapshot ? `<div class="actionDetailBody2">
                    <div class="rotationConditionOperatorHeaderInline">Use Entity Snapshot:</div>&nbsp;
                    ${parseRef.useEntitySnapshot}
                </div>` : ""}
                ${parseRef.applyBindingFlagEffects ? `<div class="actionDetailBody2">
                    <div class="rotationConditionOperatorHeaderInline">Binding Flag Effects:</div>&nbsp;
                    ${parseRef.applyBindingFlagEffects}
                </div>` : ""}
                ${parseRef.removalDependencies ? `<div class="actionDetailBody2">
                    <div class="rotationConditionOperatorHeaderInline">Removal Dependencies:</div>&nbsp;
                    ${typeof parseRef.removalDependencies === "object" ? megaParsingFuckery.ValuePerStackParsing(parseRef.removalDependencies,initialCounter) : parseRef.removalDependencies}
                </div>` : ""}

                ${parseRef.filter ? `<div class="actionDetailBody2">
                    <div class="rotationConditionOperatorHeaderInline">Filter:</div>&nbsp;
                    ${parseRef.filter}
                </div>` : ""}
                

                

                
                ${parseRef.modifierFlags ? `<div class="actionDetailBody2">
                    <div class="rotationConditionOperatorHeaderInline">Flags:</div>&nbsp;
                    ${parseRef.modifierFlags}
                </div>` : ""}
                ${parseRef.stackLimit ? `<div class="actionDetailBody2">
                    <div class="rotationConditionOperatorHeaderInline">Limit:</div>&nbsp;
                    ${parseRef.stackLimit}
                </div>` : ""}
                ${parseRef.addStacksPerTrigger ? `<div class="actionDetailBody2">
                    <div class="rotationConditionOperatorHeaderInline">Stacks/Trigger:</div>&nbsp;
                    ${parseRef.addStacksPerTrigger}
                </div>` : ""}

                

                ${previewValue ? `<div class="actionDetailBody2Preview">
                    <div class="rotationConditionOperatorHeaderInline">Preview:</div>&nbsp;
                    ${previewValue}
                </div>` : ""}

                
                ${parseRef.type ? `<div class="actionDetailBody2">
                    <div class="rotationConditionOperatorHeaderInline">Type:</div>&nbsp;
                    ${parseRef.type}
                </div>` : ""}
                ${parseRef.effectName && parseRef.effectName != parseRef.statusName ? `<div class="actionDetailBody2">
                    <div class="rotationConditionOperatorHeaderInline">Effect:</div>&nbsp;
                    ${parseRef.effectName}
                </div>` : ""}


                
                ${parseRef.description ? `<div class="actionDetailBody2">
                    <div class="rotationConditionOperatorHeaderInline">Description:</div>&nbsp;
                    <div class="actionDetailBody2Description">
                    ${parseRef.description}
                    </div>
                </div>` : ""}
            </div>

            <div class="rotationConditionOperatorBoxMain">
            ${hasParse ? `<div class="rotationConditionOperatorHeaderConditionTHEN">Execute</div>
                <div class="rotationsSectionRowHolder${initialCounter%2 === 0 ? 2 : 1}">
                    ${parseString}
                </div>` : ""}
            ${hasRef ? `<div class="rotationConditionOperatorHeaderConditionTHEN">Variable Change</div>
                <div class="rotationsSectionRowHolder${initialCounter%2 === 0 ? 2 : 1}">
                    ${refString}
                </div>` : ""}
            ${hasAbilityChange ? `<div class="rotationConditionOperatorHeaderConditionTHEN">Ability Variable Change</div>
                <div class="rotationsSectionRowHolder${initialCounter%2 === 0 ? 2 : 1}">
                    ${abilityString}
                </div>` : ""}
            ${hasFunctions ? `<div class="rotationConditionOperatorHeaderConditionTHEN">Modifier Functions</div>
                <div class="rotationsSectionRowHolder${initialCounter%2 === 0 ? 2 : 1}">
                    ${functionString}
                </div>` : ""}
            ${hasSubMods ? `<div class="rotationConditionOperatorHeaderConditionTHEN">Sub-Modifiers</div>
                <div class="rotationsSectionRowHolder${subModString%2 === 0 ? 2 : 1}">
                    ${subModString}
                </div>` : ""}

                
            </div>
        </details>
        `;

    },
    "Update Character Data Entry"(parseRef,initialCounter) {
        initialCounter++;
        const knownKeySet = new Set ([
            "name",
            "energyCost",
            "skills",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Update Character Data Entry");

        let parseString = "";
        // let refString = "";
        // let abilityString = "";
        // let functionString = "";
        // let subModString = "";
        const hasParse = parseRef.skills?.length;
        // const hasRef = parseRef.variableValueChange?.length;
        // const hasAbilityChange = parseRef.abilityValueChange?.length;
        // const hasFunctions = parseRef.modifierFunctions?.length;
        // const hasSubMods = parseRef.subModList?.length;
        if (hasParse) {parseString += megaParsingFuckery.fillEventBodyBox(parseRef.skills,initialCounter);}
        // if (hasRef) {refString += megaParsingFuckery.fillEventBodyBox(parseRef.variableValueChange,initialCounter);}
        // if (hasAbilityChange) {abilityString += megaParsingFuckery.fillEventBodyBox(parseRef.abilityValueChange,initialCounter);}
        // if (hasFunctions) {functionString += megaParsingFuckery.fillEventBodyBox(parseRef.modifierFunctions,initialCounter);}
        // if (hasSubMods) {subModString += megaParsingFuckery.fillEventBodyBox(parseRef.subModList,initialCounter);}


        
        return `
        <details class="rotationsPermaConditionsExpand" open="">
            <summary class="rotationConditionOperatorHeaderAbilityTriggerConditionHeader clickable">
                <div class="rotationConditionOperatorHeaderCondition">${parseRef.name}</div>
            </summary>

            <div class="modifierDetailsBox">
                ${parseRef.energyCost ? `<div class="actionDetailBody2">
                    <div class="rotationConditionOperatorHeaderInline">Energy Cost:</div>&nbsp;
                    ${parseRef.energyCost.displayLines ?? parseRef.energyCost}
                </div>` : ""}

            </div>

            <div class="rotationConditionOperatorBoxMain">
                ${hasParse ? `<div class="rotationConditionOperatorHeaderConditionTHEN">Execute</div>
                    <div class="rotationsSectionRowHolder${initialCounter%2 === 0 ? 2 : 1}">
                        ${parseString}
                    </div>` : ""}

            </div>
        </details>
        `;
    },
    "Modifier: UI Preview"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "show",
            "target",
            "skillType",

            "delayAdvancePreview",

            "toughnessReductionPreview",
            "toughnessForcedReductionPreview",
            "showAsForcedReduction",

            "conditions",
            "addedDisplayWeakness",
            "multiplier",

            "entityType",
            "entityID",

            // "for",
            // "stackType",
            // "stackData",
            // "previewValue",

            // "execute",
            // "AdditionConfig",
            // "DynamicValues",
            // "stackType",
            // "variableValueChange",
            // "stackData",
            // "abilityValueChange",
            // "previewValue",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Modifier: UI Preview");


        const delayAdvancePreview = parseRef.delayAdvancePreview ? megaParsingFuckery["Preview: Delay/Advance"](parseRef.delayAdvancePreview,initialCounter) : null;

        const toughnessReductionPreview = parseRef.toughnessReductionPreview?.displayLines ?? parseRef.toughnessReductionPreview;
        const toughnessForcedReductionPreview = parseRef.toughnessForcedReductionPreview?.displayLines ?? parseRef.toughnessForcedReductionPreview;


        const conditionObject = parseRef.conditions;
        const conditionName = conditionObject?.name;
        let returnString = "";
        const functionExists = megaParsingFuckery[conditionName];
        if (functionExists) {returnString += `<div class="rotationsConditionsBodyBox">` + functionExists(conditionObject,initialCounter) + `</div>`;}

        // stackData
        return `
            <div class="rotationConditionOperatorHeaderAbilityTriggerConditionHeader">
                <div class="rotationConditionOperatorHeaderCondition">${parseRef.name}</div>
                
            </div>
            ${returnString ?? ""} ${Array.isArray(parseRef.target) ? megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter) : parseRef.target ?? ""}

            <div class="modifierDetailsBox">
                ${parseRef.show ? `<div class="actionDetailBody2">
                    <div class="rotationConditionOperatorHeaderInline">Display:</div>&nbsp;
                    ${parseRef.show}
                </div>` : ""}
                ${parseRef.skillType ? `<div class="actionDetailBody2">
                    <div class="rotationConditionOperatorHeaderInline">Skill Type(s):</div>&nbsp;
                    ${parseRef.skillType}
                </div>` : ""}
                ${parseRef.entityType ? `<div class="actionDetailBody2">
                    <div class="rotationConditionOperatorHeaderInline">Entity Type:</div>&nbsp;
                    ${parseRef.entityType}
                </div>` : ""}
                ${parseRef.entityID ? `<div class="actionDetailBody2">
                    <div class="rotationConditionOperatorHeaderInline">Entity ID:</div>&nbsp;
                    ${parseRef.entityID}
                </div>` : ""}
                ${delayAdvancePreview ? `<div class="actionDetailBody2">
                    <div class="rotationConditionOperatorHeaderInline">Preview Value:</div>&nbsp;
                    ${delayAdvancePreview}
                </div>` : ""}

                ${toughnessReductionPreview ? `<div class="actionDetailBody2">
                    <div class="rotationConditionOperatorHeaderInline">Preview Toughness:</div>&nbsp;
                    ${toughnessReductionPreview}
                </div>` : ""}
                ${toughnessForcedReductionPreview ? `<div class="actionDetailBody2">
                    <div class="rotationConditionOperatorHeaderInline">Preview Toughness Forced:</div>&nbsp;
                    ${toughnessForcedReductionPreview}
                </div>` : ""}
                ${parseRef.showAsForcedReduction ? `<div class="actionDetailBody2">
                    <div class="rotationConditionOperatorHeaderInline">Display as Forced Reduction:</div>&nbsp;
                    ${parseRef.showAsForcedReduction}
                </div>` : ""}
                ${parseRef.addedDisplayWeakness ? `<div class="actionDetailBody2">
                    <div class="rotationConditionOperatorHeaderInline">Display Added Weakness:</div>&nbsp;
                    ${parseRef.addedDisplayWeakness}
                </div>` : ""}
                ${parseRef.multiplier ? `<div class="actionDetailBody2">
                    <div class="rotationConditionOperatorHeaderInline">Multiplier:</div>&nbsp;
                    ${parseRef.multiplier.displayLines ?? parseRef.multiplier}
                </div>` : ""}

                

                
            </div>
        `;
    },
    "Preview: Delay/Advance"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "previewValue",

            // "execute",
            // "AdditionConfig",
            // "DynamicValues",
            // "stackType",
            // "variableValueChange",
            // "stackData",
            // "abilityValueChange",
            // "previewValue",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Preview: Delay/Advance");


        // const delayAdvancePreview = parseRef.delayAdvancePreview ? megaParsingFuckery["Preview: Delay/Advance"](parseRef.delayAdvancePreview,initialCounter) : null;

        // stackData
        return `
            <div class="rotationConditionOperatorHeaderAbilityTriggerConditionHeader">
                <div class="rotationConditionOperatorHeaderCondition">${parseRef.name}</div>
                ${parseRef.previewValue.displayLines ?? parseRef.previewValue}
            </div>
        `;
    },
    "Preview: Delay/Advance"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "previewValue",

            // "execute",
            // "AdditionConfig",
            // "DynamicValues",
            // "stackType",
            // "variableValueChange",
            // "stackData",
            // "abilityValueChange",
            // "previewValue",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Preview: Delay/Advance");


        // const delayAdvancePreview = parseRef.delayAdvancePreview ? megaParsingFuckery["Preview: Delay/Advance"](parseRef.delayAdvancePreview,initialCounter) : null;

        // stackData
        return `
            <div class="rotationConditionOperatorHeaderAbilityTriggerConditionHeader">
                <div class="rotationConditionOperatorHeaderCondition">${parseRef.name}</div>
                ${parseRef.previewValue.displayLines ?? parseRef.previewValue}
            </div>
        `;
    },
    "Update Ability Properties"(parseRef,initialCounter) {
        initialCounter++;
        const knownKeySet = new Set ([
            "name",
            "abilityTagList",
            "propertyList",
            "abilityTypeList",
            "target",
            // "execute",
            // "AdditionConfig",
            // "DynamicValues",
            // "stackType",
            // "variableValueChange",
            // "stackData",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"CharacterFunction");

        let parseString = "";
        // let refString = "";
        const hasParse = parseRef.propertyList?.length;
        // const hasRef = parseRef.variableValueChange?.length;
        if (hasParse) {parseString += megaParsingFuckery.fillEventBodyBox(parseRef.propertyList,initialCounter);}
        // if (hasRef) {refString += megaParsingFuckery.fillEventBodyBox(parseRef.variableValueChange,initialCounter);}


        return `
        <details class="rotationsPermaConditionsExpand" open="">
            <summary class="rotationConditionOperatorHeaderAbilityTriggerConditionHeader clickable">
                <div class="rotationConditionOperatorHeaderCondition">Update Ability Data:</div>
                ${parseRef.abilityTagList ?? ""}
            </summary>

            <div class="modifierDetailsBox">
                ${parseRef.target ? `<div class="actionDetailBody2">
                    <div class="rotationConditionOperatorHeaderInline">Target:</div>&nbsp;
                    ${Array.isArray(parseRef.target) ? megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter) : parseRef.target ?? ""}
                </div>` : ""}
                ${parseRef.abilityTypeList ? `<div class="actionDetailBody2">
                    <div class="rotationConditionOperatorHeaderInline">Type List:</div>&nbsp;
                    ${parseRef.abilityTypeList}
                </div>` : ""}

                
            </div>


            <div class="rotationConditionOperatorBoxMain">
            ${hasParse ? `<div class="rotationConditionOperatorHeaderConditionTHEN">Execute</div>
                <div class="rotationsSectionRowHolder${initialCounter%2 === 0 ? 2 : 1}">
                    ${parseString}
                </div>` : ""}
            </div>
        </details>
        `;
    },
    "Ability Property Action"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "propertyName",
            "propertyAction",
            "value",

            // "for",
            // "stackType",
            // "stackData",
            // "previewValue",

            // "execute",
            // "AdditionConfig",
            // "DynamicValues",
            // "stackType",
            // "variableValueChange",
            // "stackData",
            // "abilityValueChange",
            // "previewValue",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Ability Property Action");

        // stackData
        return `<div class="actionDetailBody2">
            <div class="rotationConditionOperatorHeaderInline">${parseRef.name}:</div>&nbsp;
            ${parseRef.propertyName} (${parseRef.propertyAction}) ${parseRef.value?.displayLines ?? parseRef.value ?? ""}
        </div>`
    },
    "Override Special Cost Deductions"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "overrideValue",

            // "for",
            // "stackType",
            // "stackData",
            // "previewValue",

            // "execute",
            // "AdditionConfig",
            // "DynamicValues",
            // "stackType",
            // "variableValueChange",
            // "stackData",
            // "abilityValueChange",
            // "previewValue",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Ability Property Action");

        // stackData
        return `<div class="actionDetailBody2">
            <div class="rotationConditionOperatorHeaderInline">${parseRef.name}:</div>&nbsp;
            ${parseRef.overrideValue?.displayLines ?? parseRef.overrideValue}
        </div>`
    },
    "CharacterFunctions"(parseRef,initialCounter) {
        initialCounter++;
        const knownKeySet = new Set ([
            "name",
            "functionName",
            "parse",
            // "execute",
            // "AdditionConfig",
            // "DynamicValues",
            // "stackType",
            // "variableValueChange",
            // "stackData",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"CharacterFunction");

        let parseString = "";
        // let refString = "";
        const hasParse = parseRef.parse?.length;
        // const hasRef = parseRef.variableValueChange?.length;
        if (hasParse) {parseString += megaParsingFuckery.fillEventBodyBox(parseRef.parse,initialCounter);}
        // if (hasRef) {refString += megaParsingFuckery.fillEventBodyBox(parseRef.variableValueChange,initialCounter);}


        return `
        <details class="rotationsPermaConditionsExpand" open="">
            <summary class="rotationConditionOperatorHeaderAbilityTriggerConditionHeader clickable">
                <div class="rotationConditionOperatorHeaderCondition">Character Function:</div>
                ${parseRef.functionName}
            </summary>


            <div class="rotationConditionOperatorBoxMain">
            ${hasParse ? `<div class="rotationConditionOperatorHeaderConditionTHEN">Execute</div>
                <div class="rotationsSectionRowHolder${initialCounter%2 === 0 ? 2 : 1}">
                    ${parseString}
                </div>` : ""}
            </div>
        </details>
        `;
    },
    "Changes"(parseRef,initialCounter) {
        initialCounter++;
        const knownKeySet = new Set ([
            "name",
            "execute",,
            // "AdditionConfig",
            // "DynamicValues",
            // "stackType",
            // "variableValueChange"
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Changes");

        let parseString = "";
        // let refString = "";
        const hasParse = parseRef.execute?.length;
        // const hasRef = parseRef.variableValueChange?.length;
        if (hasParse) {parseString += megaParsingFuckery.fillEventBodyBox(parseRef.execute,initialCounter);}
        // if (hasRef) {refString += megaParsingFuckery.fillEventBodyBox(parseRef.variableValueChange,initialCounter);}

        // const conditionObject = parseRef.conditions;
        // const conditionName = conditionObject.name;

        // let returnString = "";
        // const functionExists = megaParsingFuckery[conditionName];
        // if (functionExists) {returnString += `<div class="rotationsConditionsBodyBox">` + functionExists(conditionObject,initialCounter) + `</div>`;}

        // <div class="actionDetailBody">${parseRef.ability} from ${parseRef.from}</div>

        // rotationsSectionRowHolder
        // rotationConditionOperatorBox


        // <details class="rotationsPermaConditionsExpand" open="">
        //     <summary class="actionDetailBodyDetailExpandHeaderBackground clickable">Show Permanent Conditions (1)</summary><div class="actionDetailBody">- Skill Points: Current &gt;= 1</div>
        // </details>

        return `
        <details class="rotationsPermaConditionsExpand" open="">
            <summary class="rotationConditionOperatorHeaderAbilityTriggerConditionHeader clickable">
                <div class="rotationConditionOperatorHeaderCondition">${parseRef.name}</div>
            </summary>

            <div class="rotationConditionOperatorBoxMain">
            ${hasParse ? `<div class="rotationConditionOperatorHeaderConditionTHEN">Execute</div>
                <div class="rotationsSectionRowHolder${initialCounter%2 === 0 ? 2 : 1}">
                    ${parseString}
                </div>` : ""}
            </div>
        </details>
        `;
    },
    "Ability Value Changes"(parseRef,initialCounter) {
        initialCounter++;
        const knownKeySet = new Set ([
            "name",
            "variableName",
            "valueRanges",
            // "AdditionConfig",
            // "DynamicValues",
            // "stackType",
            // "variableValueChange"
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Ability Value Changes");

        let parseString = "";
        // let refString = "";
        const hasParse = parseRef.valueRanges?.length;
        // const hasRef = parseRef.variableValueChange?.length;
        if (hasParse) {parseString += megaParsingFuckery.fillEventBodyBox(parseRef.valueRanges,initialCounter);}
        // if (hasRef) {refString += megaParsingFuckery.fillEventBodyBox(parseRef.variableValueChange,initialCounter);}

        // const conditionObject = parseRef.conditions;
        // const conditionName = conditionObject.name;

        // let returnString = "";
        // const functionExists = megaParsingFuckery[conditionName];
        // if (functionExists) {returnString += `<div class="rotationsConditionsBodyBox">` + functionExists(conditionObject,initialCounter) + `</div>`;}

        // <div class="actionDetailBody">${parseRef.ability} from ${parseRef.from}</div>

        // rotationsSectionRowHolder
        // rotationConditionOperatorBox


        // <details class="rotationsPermaConditionsExpand" open="">
        //     <summary class="actionDetailBodyDetailExpandHeaderBackground clickable">Show Permanent Conditions (1)</summary><div class="actionDetailBody">- Skill Points: Current &gt;= 1</div>
        // </details>

        return `
        <details class="rotationsPermaConditionsExpand" open="">
            <summary class="rotationConditionOperatorHeaderAbilityTriggerConditionHeader clickable">
                <div class="rotationConditionOperatorHeaderCondition">${parseRef.name}</div>
                ${parseRef.variableName}
            </summary>

            <div class="rotationConditionOperatorBoxMain">
            ${hasParse ? `<div class="rotationConditionOperatorHeaderConditionTHEN">Value Ranges</div>
                <div class="rotationsSectionRowHolder${initialCounter%2 === 0 ? 2 : 1}">
                    ${parseString}
                </div>` : ""}
            </div>
        </details>
        `;
    },
    "Variable Value Changes"(parseRef,initialCounter) {
        initialCounter++;
        const knownKeySet = new Set ([
            "name",
            "variableName",
            "from",
            "valueRanges",
            // "AdditionConfig",
            // "DynamicValues",
            // "stackType",
            // "variableValueChange"
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Variable Value Changes");

        let parseString = "";
        // let refString = "";
        const hasParse = parseRef.valueRanges?.length;
        // const hasRef = parseRef.variableValueChange?.length;
        if (hasParse) {parseString += megaParsingFuckery.fillEventBodyBox(parseRef.valueRanges,initialCounter);}
        // if (hasRef) {refString += megaParsingFuckery.fillEventBodyBox(parseRef.variableValueChange,initialCounter);}

        // const conditionObject = parseRef.conditions;
        // const conditionName = conditionObject.name;

        // let returnString = "";
        // const functionExists = megaParsingFuckery[conditionName];
        // if (functionExists) {returnString += `<div class="rotationsConditionsBodyBox">` + functionExists(conditionObject,initialCounter) + `</div>`;}

        // <div class="actionDetailBody">${parseRef.ability} from ${parseRef.from}</div>

        // rotationsSectionRowHolder
        // rotationConditionOperatorBox


        // <details class="rotationsPermaConditionsExpand" open="">
        //     <summary class="actionDetailBodyDetailExpandHeaderBackground clickable">Show Permanent Conditions (1)</summary><div class="actionDetailBody">- Skill Points: Current &gt;= 1</div>
        // </details>

        return `
        <details class="rotationsPermaConditionsExpand" open="">
            <summary class="rotationConditionOperatorHeaderAbilityTriggerConditionHeader clickable">
                <div class="rotationConditionOperatorHeaderCondition">${parseRef.name}</div>
                ${parseRef.variableName} ${parseRef.from ? `from ${Array.isArray(parseRef.from) ? megaParsingFuckery.makeConditionTargetBox(parseRef.from,initialCounter) : parseRef.from}` : ""}
            </summary>


            <div class="rotationConditionOperatorBoxMain">
            ${hasParse ? `<div class="rotationConditionOperatorHeaderConditionTHEN">Value Ranges</div>
                <div class="rotationsSectionRowHolder${initialCounter%2 === 0 ? 2 : 1}">
                    ${parseString}
                </div>` : ""}
            </div>
        </details>
        `;

        // <div class="modifierDetailsBox">
        //     ${parseRef.counter ? `<div class="actionDetailBody2">
        //         <div class="rotationConditionOperatorHeaderInline">Counter:</div>&nbsp;
        //         ${parseRef.counter}
        //     </div>` : ""}
        //     ${parseRef.stackType ? `<div class="actionDetailBody2">
        //         <div class="rotationConditionOperatorHeaderInline">Stack Type:</div>&nbsp;
        //         ${parseRef.stackType}
        //     </div>` : ""}
        // </div>
    },
    "Variable Value Range Conditions"(parseRef,initialCounter) {
        initialCounter++;
        const knownKeySet = new Set ([
            "name",
            "minValue",
            "maxValue",
            "whenEnteringRange",
            "whenLeavingRange",
            "whenValueChanges",
            "includeMaxValueInRange",
            "triggerClampedChanges",
            // "AdditionConfig",
            // "DynamicValues",
            // "stackType",
            // "variableValueChange"
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Variable Value Range Conditions");

        let parseString = "";
        let parseString2 = "";
        let refString = "";
        const hasParse = parseRef.whenEnteringRange?.length;
        const hasParse2 = parseRef.whenLeavingRange?.length;
        const hasRef = parseRef.whenValueChanges?.length;
        if (hasParse) {parseString += megaParsingFuckery.fillEventBodyBox(parseRef.whenEnteringRange,initialCounter);}
        if (hasParse2) {parseString2 += megaParsingFuckery.fillEventBodyBox(parseRef.whenLeavingRange,initialCounter);}
        if (hasRef) {refString += megaParsingFuckery.fillEventBodyBox(parseRef.whenValueChanges,initialCounter);}

        // const conditionObject = parseRef.conditions;
        // const conditionName = conditionObject.name;

        // let returnString = "";
        // const functionExists = megaParsingFuckery[conditionName];
        // if (functionExists) {returnString += `<div class="rotationsConditionsBodyBox">` + functionExists(conditionObject,initialCounter) + `</div>`;}

        // <div class="actionDetailBody">${parseRef.ability} from ${parseRef.from}</div>

        // rotationsSectionRowHolder
        // rotationConditionOperatorBox


        // <details class="rotationsPermaConditionsExpand" open="">
        //     <summary class="actionDetailBodyDetailExpandHeaderBackground clickable">Show Permanent Conditions (1)</summary><div class="actionDetailBody">- Skill Points: Current &gt;= 1</div>
        // </details>

        return `
        <details class="rotationsPermaConditionsExpand" open="">
            <summary class="rotationConditionOperatorHeaderAbilityTriggerConditionHeader clickable">
                <div class="rotationConditionOperatorHeaderCondition">Variable Range Conditions</div>
            </summary>

            <div class="modifierDetailsBox">
                ${parseRef.minValue != undefined ? `<div class="actionDetailBody2">
                    <div class="rotationConditionOperatorHeaderInline">Lower Limit:</div>&nbsp;
                    ${parseRef.minValue.displayLines ?? parseRef.minValue}
                </div>` : ""}
                ${parseRef.maxValue != undefined ? `<div class="actionDetailBody2">
                    <div class="rotationConditionOperatorHeaderInline">Upper Limit:</div>&nbsp;
                    ${parseRef.maxValue.displayLines ?? parseRef.maxValue}
                </div>` : ""}
                ${parseRef.includeMaxValueInRange != undefined ? `<div class="actionDetailBody2">
                    <div class="rotationConditionOperatorHeaderInline">Include Max Value:</div>&nbsp;
                    ${parseRef.includeMaxValueInRange}
                </div>` : ""}
                ${parseRef.triggerClampedChanges != undefined ? `<div class="actionDetailBody2">
                    <div class="rotationConditionOperatorHeaderInline">Trigger Clamped Values:</div>&nbsp;
                    ${parseRef.triggerClampedChanges}
                </div>` : ""}

            </div>

            <div class="rotationConditionOperatorBoxMain">
            ${hasParse ? `<div class="rotationConditionOperatorHeaderConditionTHEN">When Entering Range</div>
                <div class="rotationsSectionRowHolder${initialCounter%2 === 0 ? 2 : 1}">
                    ${parseString}
                </div>` : ""}
            ${hasParse2 ? `<div class="rotationConditionOperatorHeaderConditionTHEN">When Leaving Range</div>
                <div class="rotationsSectionRowHolder${initialCounter%2 === 0 ? 2 : 1}">
                    ${parseString2}
                </div>` : ""}
            ${hasRef ? `<div class="rotationConditionOperatorHeaderConditionTHEN">Value Changes</div>
                <div class="rotationsSectionRowHolder${initialCounter%2 === 0 ? 2 : 1}">
                    ${refString}
                </div>` : ""}
            </div>
        </details>
        `;

        
    },
    "Shot Fired"(parseRef,initialCounter) {
        initialCounter++;
        const knownKeySet = new Set ([
            "name",
            "execute",
            "target",
            "projectileCount",
            "projectileCountTotal",
            "caster",
            "projectileDMG",

            // "counter",
            // "execute",
            // "AdditionConfig",
            // "DynamicValues"
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Shot Fired");

        let parseString = "";
        // let refString = "";
        const hasParse = parseRef.execute?.length;
        // const hasRef = parseRef.failed?.length;
        if (hasParse) {parseString += megaParsingFuckery.fillEventBodyBox(parseRef.execute,initialCounter);}
        // if (hasRef) {refString += megaParsingFuckery.fillEventBodyBox(parseRef.failed,initialCounter);}

        // const conditionObject = parseRef.conditions;
        // const conditionName = conditionObject.name;

        // let returnString = "";
        // const functionExists = megaParsingFuckery[conditionName];
        // if (functionExists) {returnString += `<div class="rotationsConditionsBodyBox">` + functionExists(conditionObject,initialCounter) + `</div>`;}

        // <div class="actionDetailBody">${parseRef.ability} from ${parseRef.from}</div>

        // rotationsSectionRowHolder
        // rotationConditionOperatorBox

        let returnString = "";

        if (parseRef.projectileDMG) {
            const functionExists = megaParsingFuckery["ATK Scaling DMG"];
            if (functionExists) {returnString += `<div class="rotationsConditionsBodyBox">` + functionExists(parseRef.projectileDMG,initialCounter) + `</div>`;}
        }


        // <details class="rotationsPermaConditionsExpand" open="">
        //     <summary class="actionDetailBodyDetailExpandHeaderBackground clickable">Show Permanent Conditions (1)</summary><div class="actionDetailBody">- Skill Points: Current &gt;= 1</div>
        // </details>

        return `
        <details class="rotationsPermaConditionsExpand" open="">
            <summary class="rotationConditionOperatorHeaderAbilityTriggerConditionHeader clickable">
                <div class="rotationConditionOperatorHeaderCondition">Shot Fired</div>
            </summary>

            <div class="rotationConditionOperatorBoxMainAttack">
            <div class="modifierDetailsBox">
                ${parseRef.projectileCount != undefined ? `<div class="actionDetailBody2">
                    <div class="rotationConditionOperatorHeaderInline">Projectile Count Max:</div>&nbsp;
                    ${parseRef.projectileCount.displayLines ?? parseRef.projectileCount}
                </div>` : ""}
                ${parseRef.projectileCountTotal != undefined ? `<div class="actionDetailBody2">
                    <div class="rotationConditionOperatorHeaderInline">Projectile Count Total:</div>&nbsp;
                    ${parseRef.projectileCountTotal.displayLines ?? parseRef.projectileCountTotal}
                </div>` : ""}
                ${parseRef.target != undefined ? `<div class="actionDetailBody2">
                    <div class="rotationConditionOperatorHeaderInline">Lower Limit:</div>&nbsp;
                    ${Array.isArray(parseRef.target) ? megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter) : parseRef.target}
                </div>` : ""}
                ${parseRef.caster != undefined ? `<div class="actionDetailBody2">
                    <div class="rotationConditionOperatorHeaderInline">Caster:</div>&nbsp;
                    ${Array.isArray(parseRef.caster) ? megaParsingFuckery.makeConditionTargetBox(parseRef.caster,initialCounter) : parseRef.caster}
                </div>` : ""}

            </div>
            ${returnString}

            <div class="rotationConditionOperatorBoxMain">
            ${hasParse ? `<div class="rotationConditionOperatorHeaderConditionTHEN">Execute</div>
                <div class="rotationsSectionRowHolder${initialCounter%2 === 0 ? 2 : 1}">
                    ${parseString}
                </div>` : ""}
            </div>
            </div>
        </details>
        `;
    },
    "eventTrigger"(parseRef,initialCounter) {
        initialCounter++;
        const knownKeySet = new Set ([
            "eventTrigger",
            "execute",
            "priorityLevel"

            // "counter",
            // "execute",
            // "AdditionConfig",
            // "DynamicValues"
        ])
        console.log(parseRef)
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"eventTrigger");

        let parseString = "";
        // let refString = "";
        const hasParse = parseRef.execute?.length;
        // const hasRef = parseRef.failed?.length;
        if (hasParse) {parseString += megaParsingFuckery.fillEventBodyBox(parseRef.execute,initialCounter);}
        // if (hasRef) {refString += megaParsingFuckery.fillEventBodyBox(parseRef.failed,initialCounter);}

        // const conditionObject = parseRef.conditions;
        // const conditionName = conditionObject.name;

        // let returnString = "";
        // const functionExists = megaParsingFuckery[conditionName];
        // if (functionExists) {returnString += `<div class="rotationsConditionsBodyBox">` + functionExists(conditionObject,initialCounter) + `</div>`;}

        // <div class="actionDetailBody">${parseRef.ability} from ${parseRef.from}</div>

        // rotationsSectionRowHolder
        // rotationConditionOperatorBox


        // <details class="rotationsPermaConditionsExpand" open="">
        //     <summary class="actionDetailBodyDetailExpandHeaderBackground clickable">Show Permanent Conditions (1)</summary><div class="actionDetailBody">- Skill Points: Current &gt;= 1</div>
        // </details>

        return `
        <details class="rotationsPermaConditionsExpand" open="">
            <summary class="rotationConditionOperatorHeaderAbilityTriggerConditionHeader clickable">
                <div class="rotationConditionOperatorHeaderCondition">Event Listener</div>
                ${parseRef.eventTrigger} ${parseRef.priorityLevel ? `(Priority ${parseRef.priorityLevel})` : ""}
            </summary>

            <div class="rotationConditionOperatorBoxMain">
            ${hasParse ? `<div class="rotationConditionOperatorHeaderConditionTHEN">Execute</div>
                <div class="rotationsSectionRowHolder${initialCounter%2 === 0 ? 2 : 1}">
                    ${parseString}
                </div>` : ""}
            </div>
        </details>
        `;
    },
    "Force Entity Death"(parseRef,initialCounter) {
        initialCounter++;
        const knownKeySet = new Set ([
            "name",
            "target",
            "ignoreHPLossTriggers",
            "ignoreDeathTriggers",
            "abortInsertedAbilities",
            "canRevive",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Force Entity Death");

        // conditions
        // passed
        // failed

        let parseString = "";
        // let refString = "";
        const hasParse = parseRef.target?.length;
        // const hasRef = parseRef.failed?.length;
        if (hasParse) {parseString += megaParsingFuckery.fillEventBodyBox(parseRef.target,initialCounter);}
        // if (hasRef) {refString += megaParsingFuckery.fillEventBodyBox(parseRef.failed,initialCounter);}



        if (!hasParse && !hasRef) {return "";}

        return `
        <details class="rotationsPermaConditionsExpand" open="">
            <summary class="rotationConditionOperatorHeaderAbilityTriggerConditionHeader clickable">
                <div class="rotationConditionOperatorHeaderCondition">${parseRef.name}</div>
            </summary>

            <div class="modifierDetailsBox">
                ${parseRef.ignoreHPLossTriggers != undefined ? `<div class="actionDetailBody2">
                    <div class="rotationConditionOperatorHeaderInline">Bypass Event: HP loss triggers</div>&nbsp;
                    ${parseRef.ignoreHPLossTriggers}
                </div>` : ""}
                ${parseRef.ignoreDeathTriggers != undefined ? `<div class="actionDetailBody2">
                    <div class="rotationConditionOperatorHeaderInline">Bypass Event: Death triggers</div>&nbsp;
                    ${parseRef.ignoreDeathTriggers}
                </div>` : ""}
                ${parseRef.abortInsertedAbilities != undefined ? `<div class="actionDetailBody2">
                    <div class="rotationConditionOperatorHeaderInline">Abort Injected Ability Actions</div>&nbsp;
                    ${parseRef.abortInsertedAbilities}
                </div>` : ""}
                ${parseRef.canRevive != undefined ? `<div class="actionDetailBody2">
                    <div class="rotationConditionOperatorHeaderInline">Can Revive</div>&nbsp;
                    ${parseRef.canRevive}
                </div>` : ""}
            </div>

            <div class="rotationConditionOperatorBoxMain">
                ${hasParse ? `<div class="rotationConditionOperatorHeaderConditionTHEN">Target Logic</div>
                <div class="rotationsSectionRowHolder${initialCounter%2 === 0 ? 2 : 1}">
                    ${parseString}
                </div>` : ""}
            </div>
        </details>
        `;
        // return `
        //     <div class="rotationConditionOperatorHeaderAbilityTriggerConditionHeader">
        //         <div class="rotationConditionOperatorHeaderCondition">${parseRef.name}</div>
        //         ${returnString}
        //     </div>
            
        //     <div class="rotationConditionOperatorBoxMain">
        //         ${hasParse ? `<div class="rotationConditionOperatorHeaderConditionTHEN">THEN</div>
        //         <div class="rotationsSectionRowHolder${initialCounter%2 === 0 ? 2 : 1}">
        //             ${parseString}
        //         </div>` : ""}
        //         ${hasRef ? `<div class="rotationConditionOperatorHeaderConditionELSE">ELSE</div>
        //         <div class="rotationsSectionRowHolder${initialCounter%2 === 0 ? 2 : 1}">
        //             ${refString}
        //         </div>` : ""}
        //     </div>
        // `;
    },
    "Mark Entity For Immediate Death"(parseRef,initialCounter) {
        initialCounter++;
        const knownKeySet = new Set ([
            "name",
            "target",
            "enable",
            // "ignoreHPLossTriggers",
            // "ignoreDeathTriggers"
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Mark Entity For Immediate Death");

        // conditions
        // passed
        // failed

        let parseString = "";
        // let refString = "";
        const hasParse = parseRef.target?.length;
        // const hasRef = parseRef.failed?.length;
        if (hasParse) {parseString += megaParsingFuckery.fillEventBodyBox(parseRef.target,initialCounter);}
        // if (hasRef) {refString += megaParsingFuckery.fillEventBodyBox(parseRef.failed,initialCounter);}
        if (!hasParse && !hasRef) {return "";}

        return `
        <details class="rotationsPermaConditionsExpand" open="">
            <summary class="rotationConditionOperatorHeaderAbilityTriggerConditionHeader clickable">
                <div class="rotationConditionOperatorHeaderCondition">${parseRef.name}</div>
            </summary>

            <div class="modifierDetailsBox">
                ${parseRef.enable != undefined ? `<div class="actionDetailBody2">
                    <div class="rotationConditionOperatorHeaderInline">Enable</div>&nbsp;
                    ${parseRef.enable}
                </div>` : ""}
            </div>

            <div class="rotationConditionOperatorBoxMain">
                ${hasParse ? `<div class="rotationConditionOperatorHeaderConditionTHEN">Target Logic</div>
                <div class="rotationsSectionRowHolder${initialCounter%2 === 0 ? 2 : 1}">
                    ${parseString}
                </div>` : ""}
            </div>
        </details>
        `;
        // return `
        //     <div class="rotationConditionOperatorHeaderAbilityTriggerConditionHeader">
        //         <div class="rotationConditionOperatorHeaderCondition">${parseRef.name}</div>
        //         ${returnString}
        //     </div>
            
        //     <div class="rotationConditionOperatorBoxMain">
        //         ${hasParse ? `<div class="rotationConditionOperatorHeaderConditionTHEN">THEN</div>
        //         <div class="rotationsSectionRowHolder${initialCounter%2 === 0 ? 2 : 1}">
        //             ${parseString}
        //         </div>` : ""}
        //         ${hasRef ? `<div class="rotationConditionOperatorHeaderConditionELSE">ELSE</div>
        //         <div class="rotationsSectionRowHolder${initialCounter%2 === 0 ? 2 : 1}">
        //             ${refString}
        //         </div>` : ""}
        //     </div>
        // `;
    },
    "WAIT FOR"(parseRef,initialCounter) {
        initialCounter++;
        const knownKeySet = new Set ([
            "name",
            "condition",
            // "passed",
            // "failed"
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"NOT");

        // conditions
        // passed
        // failed

        // let parseString = "";
        // let refString = "";
        // const hasParse = parseRef.passed?.length;
        // const hasRef = parseRef.failed?.length;
        // if (hasParse) {parseString += megaParsingFuckery.fillEventBodyBox(parseRef.passed,initialCounter);}
        // if (hasRef) {refString += megaParsingFuckery.fillEventBodyBox(parseRef.failed,initialCounter);}

        const conditionObject = parseRef.condition;
        const conditionName = conditionObject?.name;

        let returnString = "" + (typeof conditionObject === "string" ? `<div class="rotationsConditionsBodyBox">${conditionObject}</div>` : "");
        const functionExists = megaParsingFuckery[conditionName];
        if (functionExists) {returnString += `<div class="rotationsConditionsBodyBox">` + functionExists(conditionObject,initialCounter) + `</div>`;}

        if (!returnString) {
            console.log(conditionObject)
            throw new Error(`Missing condition display-only definition in IF: ${conditionName}`)
        }



        // if (!hasParse && !hasRef) {return "";}

        return `
        <details class="rotationsPermaConditionsExpand" open="">
            <summary class="rotationConditionOperatorHeaderAbilityTriggerConditionHeader clickable">
                <div class="rotationConditionOperatorHeaderCondition">${parseRef.name}</div>
                ${returnString}
            </summary>

        </details>
        `;
    },
    makeConditionTargetBox(parseRef,initialCounter) {
        // const knownKeySet = new Set ([
        //     "name",
        //     "conditionList",
        // ])
        // megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"OR");

        // initialCounter++;

        let parseString = "";
        // const hasRef = parseRef.failed?.length;
        parseString += megaParsingFuckery.fillEventBodyBox(parseRef,initialCounter);
        // if (hasRef) {refString += megaParsingFuckery.fillEventBodyBox(parseRef.failed);}

        // const conditionObject = parseRef.conditions;
        // const conditionName = conditionObject.name;

        // let returnString = "";
        // const functionExists = megaParsingFuckery[conditionName];
        // if (functionExists) {returnString += `<div class="rotationsConditionsBodyBox">` + functionExists(conditionObject) + `</div>`;}

        // <div class="actionDetailBody">${parseRef.ability} from ${parseRef.from}</div>
        return `<div class="isConditionContainerBox">
            <div class="rotationsSectionRowHolder${initialCounter%2 === 0 ? 2 : 1} isConditionContainer">
                ${parseString}
            </div>
        </div>`;
    },
    "Enemy Entry"(parseRef,initialCounter) {
        initialCounter++;
        const knownKeySet = new Set ([
            "name",
            "enemyID",
            "locationType",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Enemy Entry");


        // if (!hasParse && !hasRef) {return "";}

        return `
        <details class="rotationsPermaConditionsExpand" open="">
            <summary class="rotationConditionOperatorHeaderAbilityTriggerConditionHeader clickable">
                <div class="rotationConditionOperatorHeaderCondition">${parseRef.name}</div>
            </summary>

            <div class="modifierDetailsBox">
                ${parseRef.enemyID != undefined ? `<div class="actionDetailBody2">
                    <div class="rotationConditionOperatorHeaderInline">Enemy ID:</div>&nbsp;
                    ${parseRef.enemyID.displayLines ?? parseRef.enemyID}
                </div>` : ""}
                ${parseRef.locationType != undefined ? `<div class="actionDetailBody2">
                    <div class="rotationConditionOperatorHeaderInline">Location Type:</div>&nbsp;
                    ${parseRef.locationType}
                </div>` : ""}

            </div>
        </details>
        `;
        // return `
        //     <div class="rotationConditionOperatorHeaderAbilityTriggerConditionHeader">
        //         <div class="rotationConditionOperatorHeaderCondition">${parseRef.name}</div>
        //         ${returnString}
        //     </div>
            
        //     <div class="rotationConditionOperatorBoxMain">
        //         ${hasParse ? `<div class="rotationConditionOperatorHeaderConditionTHEN">THEN</div>
        //         <div class="rotationsSectionRowHolder${initialCounter%2 === 0 ? 2 : 1}">
        //             ${parseString}
        //         </div>` : ""}
        //         ${hasRef ? `<div class="rotationConditionOperatorHeaderConditionELSE">ELSE</div>
        //         <div class="rotationsSectionRowHolder${initialCounter%2 === 0 ? 2 : 1}">
        //             ${refString}
        //         </div>` : ""}
        //     </div>
        // `;
    },
    "Create Enemies"(parseRef,initialCounter) {
        initialCounter++;
        const knownKeySet = new Set ([
            "name",
            "enemyList",
            "refreshPositions",
            "delayPercent",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Create Enemies");

        // conditions
        // passed
        // failed

        let parseString = "";
        // let refString = "";
        const hasParse = parseRef.enemyList?.length;
        // const hasRef = parseRef.failed?.length;
        if (hasParse) {parseString += megaParsingFuckery.fillEventBodyBox(parseRef.enemyList,initialCounter);}
        // if (hasRef) {refString += megaParsingFuckery.fillEventBodyBox(parseRef.failed,initialCounter);}

        // const conditionObject = parseRef.conditions;
        // const conditionName = conditionObject?.name;

        // let returnString = "" + (typeof conditionObject === "string" ? `<div class="rotationsConditionsBodyBox">${conditionObject}</div>` : "");
        // const functionExists = megaParsingFuckery[conditionName];
        // if (functionExists) {returnString += `<div class="rotationsConditionsBodyBox">` + functionExists(conditionObject,initialCounter) + `</div>`;}

        // if (!returnString) {
        //     console.log(conditionObject)
        //     throw new Error(`Missing condition display-only definition in IF: ${conditionName}`)
        // }


        // <div class="actionDetailBody">${parseRef.ability} from ${parseRef.from}</div>

        // rotationsSectionRowHolder
        // rotationConditionOperatorBox


        // <details class="rotationsPermaConditionsExpand" open="">
        //     <summary class="actionDetailBodyDetailExpandHeaderBackground clickable">Show Permanent Conditions (1)</summary><div class="actionDetailBody">- Skill Points: Current &gt;= 1</div>
        // </details>

        // if (!hasParse && !hasRef) {return "";}

        return `
        <details class="rotationsPermaConditionsExpand" open="">
            <summary class="rotationConditionOperatorHeaderAbilityTriggerConditionHeader clickable">
                <div class="rotationConditionOperatorHeaderCondition">${parseRef.name}</div>
            </summary>

            <div class="modifierDetailsBox">
                ${parseRef.delayPercent != undefined ? `<div class="actionDetailBody2">
                    <div class="rotationConditionOperatorHeaderInline">Projectile Count:</div>&nbsp;
                    ${parseRef.delayPercent.displayLines ?? parseRef.delayPercent}
                </div>` : ""}
                ${parseRef.refreshPositions != undefined ? `<div class="actionDetailBody2">
                    <div class="rotationConditionOperatorHeaderInline">Refresh Positions:</div>&nbsp;
                    ${parseRef.refreshPositions}
                </div>` : ""}

            </div>

            <div class="rotationConditionOperatorBoxMain">
                ${hasParse ? `<div class="rotationConditionOperatorHeaderConditionTHEN">LIST</div>
                <div class="rotationsSectionRowHolder${initialCounter%2 === 0 ? 2 : 1}">
                    ${parseString}
                </div>` : ""}
            </div>
        </details>
        `;
        // return `
        //     <div class="rotationConditionOperatorHeaderAbilityTriggerConditionHeader">
        //         <div class="rotationConditionOperatorHeaderCondition">${parseRef.name}</div>
        //         ${returnString}
        //     </div>
            
        //     <div class="rotationConditionOperatorBoxMain">
        //         ${hasParse ? `<div class="rotationConditionOperatorHeaderConditionTHEN">THEN</div>
        //         <div class="rotationsSectionRowHolder${initialCounter%2 === 0 ? 2 : 1}">
        //             ${parseString}
        //         </div>` : ""}
        //         ${hasRef ? `<div class="rotationConditionOperatorHeaderConditionELSE">ELSE</div>
        //         <div class="rotationsSectionRowHolder${initialCounter%2 === 0 ? 2 : 1}">
        //             ${refString}
        //         </div>` : ""}
        //     </div>
        // `;
    },
    NOT(parseRef,initialCounter) {
        initialCounter++;
        const knownKeySet = new Set ([
            "name",
            "condition",
            "passed",
            "failed"
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"NOT");

        // conditions
        // passed
        // failed

        // let parseString = "";
        // let refString = "";
        // const hasParse = parseRef.passed?.length;
        // const hasRef = parseRef.failed?.length;
        // if (hasParse) {parseString += megaParsingFuckery.fillEventBodyBox(parseRef.passed,initialCounter);}
        // if (hasRef) {refString += megaParsingFuckery.fillEventBodyBox(parseRef.failed,initialCounter);}

        const conditionObject = parseRef.condition;
        const conditionName = conditionObject?.name;

        let returnString = "" + (typeof conditionObject === "string" ? `<div class="rotationsConditionsBodyBox">${conditionObject}</div>` : "");
        const functionExists = megaParsingFuckery[conditionName];
        if (functionExists) {returnString += `<div class="rotationsConditionsBodyBox">` + functionExists(conditionObject,initialCounter) + `</div>`;}

        if (!returnString) {
            console.log(conditionObject)
            throw new Error(`Missing condition display-only definition in IF: ${conditionName}`)
        }



        // if (!hasParse && !hasRef) {return "";}

        return `
        <details class="rotationsPermaConditionsExpand" open="">
            <summary class="rotationConditionOperatorHeaderAbilityTriggerConditionHeader clickable">
                <div class="rotationConditionOperatorHeaderCondition">${parseRef.name}</div>
                ${returnString}
            </summary>

        </details>
        `;
    },
    IF(parseRef,initialCounter) {
        initialCounter++;
        const knownKeySet = new Set ([
            "name",
            "conditions",
            "passed",
            "failed"
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"IF");

        // conditions
        // passed
        // failed

        let parseString = "";
        let refString = "";
        const hasParse = parseRef.passed?.length;
        const hasRef = parseRef.failed?.length;
        if (hasParse) {parseString += megaParsingFuckery.fillEventBodyBox(parseRef.passed,initialCounter);}
        if (hasRef) {refString += megaParsingFuckery.fillEventBodyBox(parseRef.failed,initialCounter);}

        const conditionObject = parseRef.conditions;
        const conditionName = conditionObject?.name;

        let returnString = "" + (typeof conditionObject === "string" ? `<div class="rotationsConditionsBodyBox">${conditionObject}</div>` : "");
        const functionExists = megaParsingFuckery[conditionName];
        if (functionExists) {returnString += `<div class="rotationsConditionsBodyBox">` + functionExists(conditionObject,initialCounter) + `</div>`;}

        if (!returnString) {
            console.log(conditionObject)
            throw new Error(`Missing condition display-only definition in IF: ${conditionName}`)
        }


        // <div class="actionDetailBody">${parseRef.ability} from ${parseRef.from}</div>

        // rotationsSectionRowHolder
        // rotationConditionOperatorBox


        // <details class="rotationsPermaConditionsExpand" open="">
        //     <summary class="actionDetailBodyDetailExpandHeaderBackground clickable">Show Permanent Conditions (1)</summary><div class="actionDetailBody">- Skill Points: Current &gt;= 1</div>
        // </details>

        // if (!hasParse && !hasRef) {return "";}

        return `
        <details class="rotationsPermaConditionsExpand" open="">
            <summary class="rotationConditionOperatorHeaderAbilityTriggerConditionHeader clickable">
                <div class="rotationConditionOperatorHeaderCondition">${parseRef.name}</div>
                ${returnString}
            </summary>

            <div class="rotationConditionOperatorBoxMain">
                ${hasParse ? `<div class="rotationConditionOperatorHeaderConditionTHEN">THEN</div>
                <div class="rotationsSectionRowHolder${initialCounter%2 === 0 ? 2 : 1}">
                    ${parseString}
                </div>` : ""}
                ${hasRef ? `<div class="rotationConditionOperatorHeaderConditionELSE">ELSE</div>
                <div class="rotationsSectionRowHolder${initialCounter%2 === 0 ? 2 : 1}">
                    ${refString}
                </div>` : ""}
            </div>
        </details>
        `;
        // return `
        //     <div class="rotationConditionOperatorHeaderAbilityTriggerConditionHeader">
        //         <div class="rotationConditionOperatorHeaderCondition">${parseRef.name}</div>
        //         ${returnString}
        //     </div>
            
        //     <div class="rotationConditionOperatorBoxMain">
        //         ${hasParse ? `<div class="rotationConditionOperatorHeaderConditionTHEN">THEN</div>
        //         <div class="rotationsSectionRowHolder${initialCounter%2 === 0 ? 2 : 1}">
        //             ${parseString}
        //         </div>` : ""}
        //         ${hasRef ? `<div class="rotationConditionOperatorHeaderConditionELSE">ELSE</div>
        //         <div class="rotationsSectionRowHolder${initialCounter%2 === 0 ? 2 : 1}">
        //             ${refString}
        //         </div>` : ""}
        //     </div>
        // `;
    },
    OR(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "conditionList",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"OR");

        initialCounter++;

        let parseString = "";
        // let refString = "";
        const hasParse = parseRef.conditionList?.length;
        // const hasRef = parseRef.failed?.length;
        if (hasParse) {parseString += megaParsingFuckery.fillEventBodyBox(parseRef.conditionList,initialCounter);}
        // if (hasRef) {refString += megaParsingFuckery.fillEventBodyBox(parseRef.failed);}
        initialCounter++;
        // const conditionObject = parseRef.conditions;
        // const conditionName = conditionObject.name;

        // let returnString = "";
        // const functionExists = megaParsingFuckery[conditionName];
        // if (functionExists) {returnString += `<div class="rotationsConditionsBodyBox">` + functionExists(conditionObject) + `</div>`;}

        // <div class="actionDetailBody">${parseRef.ability} from ${parseRef.from}</div>
        return `
            
            ${hasParse ? `<div class="isConditionContainerBox">
                <div class="rotationConditionOperatorHeaderCondition">${parseRef.name}</div>
                <div class="rotationsSectionRowHolder${initialCounter%2 === 0 ? 2 : 1} isConditionContainer">
                    ${parseString}
                </div>
            </div>` 
            : `<div class="rotationConditionOperatorHeaderAbilityTrigger">${parseRef.name}</div>`}
        `;
    },
    AND(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "conditionList",
            "invertCondition",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"AND");

        initialCounter++;

        let parseString = "";
        // let refString = "";
        const hasParse = parseRef.conditionList?.length;
        // const hasRef = parseRef.failed?.length;
        if (hasParse) {parseString += megaParsingFuckery.fillEventBodyBox(parseRef.conditionList,initialCounter);}
        // if (hasRef) {refString += megaParsingFuckery.fillEventBodyBox(parseRef.failed);}

        initialCounter++;
        // const conditionObject = parseRef.conditions;
        // const conditionName = conditionObject.name;

        // let returnString = "";
        // const functionExists = megaParsingFuckery[conditionName];
        // if (functionExists) {returnString += `<div class="rotationsConditionsBodyBox">` + functionExists(conditionObject) + `</div>`;}

        // <div class="actionDetailBody">${parseRef.ability} from ${parseRef.from}</div>
        return `
            
            ${hasParse ? `<div class="isConditionContainerBox">
                <div class="rotationConditionOperatorHeaderCondition">${parseRef.name}${parseRef.invertCondition ? " NOT" : ""}</div>
                <div class="rotationsSectionRowHolder${initialCounter%2 === 0 ? 2 : 1} isConditionContainer">
                    ${parseString}
                </div>
            </div>` 
            : `<div class="rotationConditionOperatorHeaderAbilityTrigger">${parseRef.name}</div>`}
        `;
    },
    SWITCH(parseRef,initialCounter) {
        initialCounter++;
        const knownKeySet = new Set ([
            "name",
            "switchValue",
            "source",
            "caseEvents",
            "defaultEvents",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"IF");

        // conditions
        // passed
        // failed

        let parseString = "";
        let refString = "";
        const hasParse = parseRef.caseEvents?.length;
        const hasRef = parseRef.defaultEvents?.length;
        if (hasParse) {parseString += megaParsingFuckery.fillEventBodyBox(parseRef.caseEvents,initialCounter);}
        if (hasRef) {refString += megaParsingFuckery.fillEventBodyBox(parseRef.defaultEvents,initialCounter);}

        // const conditionObject = parseRef.conditions;
        // const conditionName = conditionObject.name;

        // let returnString = "" + (typeof conditionObject === "string" ? `<div class="rotationsConditionsBodyBox">${conditionObject}</div>` : "");
        // const functionExists = megaParsingFuckery[conditionName];
        // if (functionExists) {returnString += `<div class="rotationsConditionsBodyBox">` + functionExists(conditionObject,initialCounter) + `</div>`;}

        // if (!returnString) {
        //     console.log(conditionObject)
        //     throw new Error(`Missing condition display-only definition in IF: ${conditionName}`)
        // }


        // <div class="actionDetailBody">${parseRef.ability} from ${parseRef.from}</div>

        // rotationsSectionRowHolder
        // rotationConditionOperatorBox


        // <details class="rotationsPermaConditionsExpand" open="">
        //     <summary class="actionDetailBodyDetailExpandHeaderBackground clickable">Show Permanent Conditions (1)</summary><div class="actionDetailBody">- Skill Points: Current &gt;= 1</div>
        // </details>

        // if (!hasParse && !hasRef) {return "";}

        return `
        <details class="rotationsPermaConditionsExpand" open="">
            <summary class="rotationConditionOperatorHeaderAbilityTriggerConditionHeader clickable">
                <div class="rotationConditionOperatorHeaderCondition">${parseRef.name}</div>
            </summary>

            <div class="modifierDetailsBox">
                ${parseRef.switchValue != undefined ? `<div class="actionDetailBody2">
                    <div class="rotationConditionOperatorHeaderInline">Case Value:</div>&nbsp;
                    ${parseRef.switchValue.displayLines ?? parseRef.switchValue}
                </div>` : ""}
                ${parseRef.source != undefined ? `<div class="actionDetailBody2">
                    <div class="rotationConditionOperatorHeaderInline">Source Type:</div>&nbsp;
                    ${typeof parseRef.source === "object" ? megaParsingFuckery.ValuePerStackParsing(parseRef.source,initialCounter) : `(${parseRef.source})`}
                </div>` : ""}

            </div>

            <div class="rotationConditionOperatorBoxMain">
                ${hasParse ? `<div class="rotationConditionOperatorHeaderConditionTHEN">CASE LIST</div>
                <div class="rotationsSectionRowHolder${initialCounter%2 === 0 ? 2 : 1}">
                    ${parseString}
                </div>` : ""}
                ${hasRef ? `<div class="rotationConditionOperatorHeaderConditionTHEN">FALLBACK</div>
                <div class="rotationsSectionRowHolder${initialCounter%2 === 0 ? 2 : 1}">
                    ${refString}
                </div>` : ""}
            </div>
        </details>
        `;
        // return `
        //     <div class="rotationConditionOperatorHeaderAbilityTriggerConditionHeader">
        //         <div class="rotationConditionOperatorHeaderCondition">${parseRef.name}</div>
        //         ${returnString}
        //     </div>
            
        //     <div class="rotationConditionOperatorBoxMain">
        //         ${hasParse ? `<div class="rotationConditionOperatorHeaderConditionTHEN">THEN</div>
        //         <div class="rotationsSectionRowHolder${initialCounter%2 === 0 ? 2 : 1}">
        //             ${parseString}
        //         </div>` : ""}
        //         ${hasRef ? `<div class="rotationConditionOperatorHeaderConditionELSE">ELSE</div>
        //         <div class="rotationsSectionRowHolder${initialCounter%2 === 0 ? 2 : 1}">
        //             ${refString}
        //         </div>` : ""}
        //     </div>
        // `;
    },
    "SWITCH CONDITON"(parseRef,initialCounter) {
        initialCounter++;
        const knownKeySet = new Set ([
            "name",
            "caseValueIs",
            "execute",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"IF");

        // conditions
        // passed
        // failed

        let parseString = "";
        // let refString = "";
        const hasParse = parseRef.execute?.length;
        // const hasRef = parseRef.failed?.length;
        if (hasParse) {parseString += megaParsingFuckery.fillEventBodyBox(parseRef.execute,initialCounter);}
        // if (hasRef) {refString += megaParsingFuckery.fillEventBodyBox(parseRef.failed,initialCounter);}

        // const conditionObject = parseRef.conditions;
        // const conditionName = conditionObject.name;

        // let returnString = "" + (typeof conditionObject === "string" ? `<div class="rotationsConditionsBodyBox">${conditionObject}</div>` : "");
        // const functionExists = megaParsingFuckery[conditionName];
        // if (functionExists) {returnString += `<div class="rotationsConditionsBodyBox">` + functionExists(conditionObject,initialCounter) + `</div>`;}

        // if (!returnString) {
        //     console.log(conditionObject)
        //     throw new Error(`Missing condition display-only definition in IF: ${conditionName}`)
        // }


        // <div class="actionDetailBody">${parseRef.ability} from ${parseRef.from}</div>

        // rotationsSectionRowHolder
        // rotationConditionOperatorBox


        // <details class="rotationsPermaConditionsExpand" open="">
        //     <summary class="actionDetailBodyDetailExpandHeaderBackground clickable">Show Permanent Conditions (1)</summary><div class="actionDetailBody">- Skill Points: Current &gt;= 1</div>
        // </details>

        // if (!hasParse && !hasRef) {return "";}

        return `
        <details class="rotationsPermaConditionsExpand" open="">
            <summary class="rotationConditionOperatorHeaderAbilityTriggerConditionHeader clickable">
                <div class="rotationConditionOperatorHeaderCondition">${parseRef.name}</div>
                Case = ${parseRef.caseValueIs.displayLines ?? parseRef.caseValueIs}
            </summary>

            <div class="rotationConditionOperatorBoxMain">
                ${hasParse ? `<div class="rotationConditionOperatorHeaderConditionTHEN">Execute</div>
                <div class="rotationsSectionRowHolder${initialCounter%2 === 0 ? 2 : 1}">
                    ${parseString}
                </div>` : ""}
            </div>
        </details>
        `;
        // return `
        //     <div class="rotationConditionOperatorHeaderAbilityTriggerConditionHeader">
        //         <div class="rotationConditionOperatorHeaderCondition">${parseRef.name}</div>
        //         ${returnString}
        //     </div>
            
        //     <div class="rotationConditionOperatorBoxMain">
        //         ${hasParse ? `<div class="rotationConditionOperatorHeaderConditionTHEN">THEN</div>
        //         <div class="rotationsSectionRowHolder${initialCounter%2 === 0 ? 2 : 1}">
        //             ${parseString}
        //         </div>` : ""}
        //         ${hasRef ? `<div class="rotationConditionOperatorHeaderConditionELSE">ELSE</div>
        //         <div class="rotationsSectionRowHolder${initialCounter%2 === 0 ? 2 : 1}">
        //             ${refString}
        //         </div>` : ""}
        //     </div>
        // `;
    },
    "Summon Memosprite"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "memoID",
            "valuePerStack",
            "afterSummon",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Change Battle Event Owner");

        let parseString = "";
        // let refString = "";
        const hasParse = parseRef.afterSummon?.length;
        // const hasRef = parseRef.failed?.length;
        if (hasParse) {parseString += megaParsingFuckery.fillEventBodyBox(parseRef.afterSummon,initialCounter);}
        // if (hasRef) {refString += megaParsingFuckery.fillEventBodyBox(parseRef.failed,initialCounter);}

        // initialCounter++;
        return `<div class="actionDetailBody">
            <div class="rotationConditionOperatorHeaderInline">${parseRef.name}:</div>&nbsp;
            ${parseRef.memoID}
        </div>
        <div class="modifierDetailsBox">

            ${parseRef.valuePerStack != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Parameters:</div>&nbsp;
                ${parseRef.valuePerStack.displayLines ?? typeof parseRef.valuePerStack === "object" ? megaParsingFuckery.ValuePerStackParsing(parseRef.valuePerStack,initialCounter) : parseRef.valuePerStack}
            </div>` : ""}
        </div>
        <div class="rotationConditionOperatorBoxMain">
            ${hasParse ? `<div class="rotationConditionOperatorHeaderConditionTHEN">THEN</div>
            <div class="rotationsSectionRowHolder${initialCounter%2 === 0 ? 2 : 1}">
                ${parseString}
            </div>` : ""}
        </div>`;
    },
    "Battle Event Construction"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "ID",
            "team",
            "eventType",
            "abilityList",
            "overridesArray",
            "hardLevelEvent",
            "barType",
            "actionDescription",

            "eventSpeed",
            // "DynamicValues",
            // "stackType",
            // "variableValueChange",
            // "stackData",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Battle Event Construction");

        // let parseString = "";
        // let refString = "";
        // const hasParse = parseRef.execute?.length;
        // const hasRef = parseRef.variableValueChange?.length;
        // if (hasParse) {parseString += megaParsingFuckery.fillEventBodyBox(parseRef.execute,initialCounter);}
        // if (hasRef) {refString += megaParsingFuckery.fillEventBodyBox(parseRef.variableValueChange,initialCounter);}

        // const conditionObject = parseRef.conditions;
        // const conditionName = conditionObject.name;

        // let returnString = "";
        // const functionExists = megaParsingFuckery[conditionName];
        // if (functionExists) {returnString += `<div class="rotationsConditionsBodyBox">` + functionExists(conditionObject,initialCounter) + `</div>`;}

        // <div class="actionDetailBody">${parseRef.ability} from ${parseRef.from}</div>

        let lightconeStatRow = "";
        if (parseRef.overridesArray && parseRef.overridesArray.length) {
            const pseudoStatsObject = {};
            for (let statEntry of parseRef.overridesArray) {
                pseudoStatsObject[statEntry.statName] = statEntry.value ?? 0;
            }

            const menuBoxDisplayOrder = Object.keys(pseudoStatsObject);
            lightconeStatRow = customHTML.createAlternatingStatRows(menuBoxDisplayOrder,pseudoStatsObject);
        }

        let abilityListRow = "";
        if (parseRef.abilityList && parseRef.abilityList.length) {
            for (let nameEntry of parseRef.abilityList) {
                abilityListRow += `<div>${nameEntry}</div>`;
            }
        }

        return `<div class="actionDetailBody2">
            <div class="rotationConditionOperatorHeaderInline">${parseRef.name}</div>&nbsp;
            ${parseRef.ID} ${parseRef.eventType ? `(${parseRef.eventType})` : ""}
        </div>

            ${parseRef.actionDescription ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Description:</div>&nbsp;
                <div class="actionDetailBody2Description">
                ${parseRef.actionDescription}
                </div>
            </div>` : ""}
        <div class="modifierDetailsBox">
            ${parseRef.team ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Team:</div>&nbsp;
                ${parseRef.team}
            </div>` : ""}
            ${parseRef.barType ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Bar Type:</div>&nbsp;
                ${parseRef.barType}
            </div>` : ""}

            
            ${parseRef.eventSpeed ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">SPD:</div>&nbsp;
                ${parseRef.eventSpeed}
            </div>` : ""}
            ${abilityListRow  ? `<div class="actionDetailBody2BattleEventOverrides">
                <div class="rotationConditionOperatorHeaderInline">Ability List:</div>&nbsp;
                ${abilityListRow}
            </div>` : ""}

            
            ${lightconeStatRow  ? `<div class="actionDetailBody2BattleEventOverrides">
                <div class="rotationConditionOperatorHeaderInline">Stat Overrides:</div>&nbsp;
                ${lightconeStatRow}
            </div>` : ""}
            
        </div>
        `;
    },
    "Achievement"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "matchTags",
            "relatedAchievements",

            // "ID",
            // "team",
            // "eventType",
            // "abilityList",
            // "overridesArray",
            // "hardLevelEvent",
            // "barType",
            // "actionDescription",

            // "eventSpeed",
            // "DynamicValues",
            // "stackType",
            // "variableValueChange",
            // "stackData",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Achievement");

        // let parseString = "";
        // let refString = "";
        // const hasParse = parseRef.execute?.length;
        // const hasRef = parseRef.variableValueChange?.length;
        // if (hasParse) {parseString += megaParsingFuckery.fillEventBodyBox(parseRef.execute,initialCounter);}
        // if (hasRef) {refString += megaParsingFuckery.fillEventBodyBox(parseRef.variableValueChange,initialCounter);}

        // const conditionObject = parseRef.conditions;
        // const conditionName = conditionObject.name;

        // let returnString = "";
        // const functionExists = megaParsingFuckery[conditionName];
        // if (functionExists) {returnString += `<div class="rotationsConditionsBodyBox">` + functionExists(conditionObject,initialCounter) + `</div>`;}

        // <div class="actionDetailBody">${parseRef.ability} from ${parseRef.from}</div>

        // let lightconeStatRow = "";
        // if (parseRef.overridesArray && parseRef.overridesArray.length) {
        //     const pseudoStatsObject = {};
        //     for (let statEntry of parseRef.overridesArray) {
        //         pseudoStatsObject[statEntry.statName] = statEntry.value ?? 0;
        //     }

        //     const menuBoxDisplayOrder = Object.keys(pseudoStatsObject);
        //     lightconeStatRow = customHTML.createAlternatingStatRows(menuBoxDisplayOrder,pseudoStatsObject);
        // }

        let abilityListRow = "";
        for (let nameEntry of parseRef.relatedAchievements) {
            abilityListRow += `
            <div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">${nameEntry.title}</div>
            </div>

            <div class="modifierDetailsBox">
                ${parseRef.type ? `<div class="actionDetailBody2">
                    <div class="rotationConditionOperatorHeaderInline">Achievement Type:</div>&nbsp;
                    ${parseRef.type}
                </div>` : ""}
            </div>

            <div class="actionDetailBody">
                <div class="rotationConditionOperatorHeaderInline">Description:</div>&nbsp;
                <div class="actionDetailBody2Description">
                ${nameEntry.desc}
                </div>
            </div>
            ${nameEntry.desc2 ? `<div class="actionDetailBody">
                <div class="rotationConditionOperatorHeaderInline">Hidden Desc:</div>&nbsp;
                <div class="actionDetailBody2Description">
                ${nameEntry.desc2}
                </div>
            </div>` : ""}`
        }
        // type
        // desc2

        return `<div class="actionDetailBody2">
            <div class="rotationConditionOperatorHeaderInline">${parseRef.name}</div>
        </div>

        
        <div class="modifierDetailsBox">
            ${parseRef.matchTags ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Match Tags:</div>&nbsp;
                ${parseRef.matchTags}
            </div>` : ""}

            ${abilityListRow  ? `<div class="actionDetailBody2BattleEventOverrides">
                <div class="rotationConditionOperatorHeaderInline">Related Achievements:</div>&nbsp;
                ${abilityListRow}
            </div>` : ""}
 
        </div>
        `;
    },
    
}

megaParsingFuckery.pageLoad();

