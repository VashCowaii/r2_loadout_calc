function getStandardNameDisplay(initialCounter,value,displayName,isTarget) {
    // booleanBlue

    if (isTarget) {
        if (value == undefined) {return "";}
        value = megaParsingFuckery.makeConditionTargetBox(value,initialCounter)
    }

    const finalValue = value?.displayLines ?? value;

    const isBoolean = finalValue === "False" || finalValue === "false" || finalValue === false || finalValue === "True" || finalValue === "true" || finalValue === true;

    return `${value == undefined ? "" : `<div class="actionDetailBody2">
        <div class="rotationConditionOperatorHeaderInline">
            ${displayName}:
        </div>&nbsp;
        <span class="${isBoolean ? "booleanBlue" : "regValueBlue"}">
            ${finalValue}
        </span>
    </div>`}`;
}




const megaParsingFuckeryPain = {
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
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Trigger Joint-Attack Ability")
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
            "parameters"
            // "ability",
            // "from",
            // "parse",
            // "references",
            // "inherentTarget",
            // "parameters",

            // //potentially not gonna use
            // "isTrigger"
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Add Ability")
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
                ${getStandardNameDisplay(initialCounter,parseRef.abilityName,"Ability Name")}
                ${parseRef.parameters != undefined ? `<div class="actionDetailBody2">
                    <div class="rotationConditionOperatorHeaderInline">Parameters:</div>&nbsp;
                    ${parseRef.parameters.displayLines ?? typeof parseRef.parameters === "object" ? megaParsingFuckery.ValuePerStackParsing(parseRef.parameters,initialCounter) : parseRef.parameters}
                </div>` : ""}
            </div>
        `;
    },
    "Add Stage Ability"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "abilityName",
            "parameters"
            // "ability",
            // "from",
            // "parse",
            // "references",
            // "inherentTarget",
            // "parameters",

            // //potentially not gonna use
            // "isTrigger"
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Add Stage Ability")
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


        // if (hasRef) {refString += megaParsingFuckery.fillEventBodyBox(parseRef.failed,initialCounter);}





        return `
            <div class="rotationConditionOperatorHeaderAbilityTrigger">${parseRef.name}</div>

            <div class="modifierDetailsBox">
                ${getStandardNameDisplay(initialCounter,parseRef.abilityName,"Ability Name")}
                ${parseRef.parameters != undefined ? `<div class="actionDetailBody2">
                    <div class="rotationConditionOperatorHeaderInline">Parameters:</div>&nbsp;
                    ${parseRef.parameters.displayLines ?? typeof parseRef.parameters === "object" ? megaParsingFuckery.ValuePerStackParsing(parseRef.parameters,initialCounter) : parseRef.parameters}
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
            <div class="actionDetailBody">${parseRef.ability} from ${megaParsingFuckery.makeConditionTargetBox(parseRef.from,initialCounter)}</div>
            
            ${hasParse ? `<div class="rotationConditionOperatorHeader">Execute</div>
            <div class="rotationsSectionRowHolder${initialCounter%2 === 0 ? 2 : 1}">
                ${parseString}
            </div>` : ""}
            ${hasRef ? `<div class="rotationConditionOperatorHeader">References</div>
            <div class="rotationsSectionRowHolder${initialCounter%2 === 0 ? 2 : 1}">
                ${refString}
            </div>` : ""}

            <div class="modifierDetailsBox">
                ${getStandardNameDisplay(initialCounter,parseRef.inherentTarget,"Inherent Target",true)}
                ${getStandardNameDisplay(initialCounter,parseRef.isTrigger,"isTrigger")}
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
    "Force-Trigger Ability Next-Phase"(parseRef,initialCounter) {
        // initialCounter++;

        const knownKeySet = new Set ([
            "name",
            "ability",
            "subAbilityIndex",
            // "from",
            // "parse",
            // "references",
            // "inherentTarget",
            // "parameters",

            //potentially not gonna use
            // "isTrigger"
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Force-Trigger Ability Next-Phase")
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
                ${getStandardNameDisplay(initialCounter,parseRef.inherentTarget,"Inherent Target",true)}
                ${getStandardNameDisplay(initialCounter,parseRef.subAbilityIndex,"Sub-Ability Index")}
            </div>
        `;
    },
    "Update Displayed Energy Bar"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "value",
            "target",
            "activeCount",
            "entityClass",

            "maximum",
            "assignState",
            "priorState",
            "bar#",
            "barType",
            "cooldown",
            "skipWhenCCd",
            "isSummoner",

            "displaySubType",
            "displayShowIcon",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Update Displayed Energy Bar");
        // initialCounter++;
        return `<div class="actionDetailBody2">
            <div class="rotationConditionOperatorHeaderInline">Update Energy Bar(Display)${parseRef.entityClass ? `[${parseRef.entityClass}]` : ""}:</div>&nbsp;
            ${parseRef.value != undefined ? parseRef.value.displayLines ?? parseRef.value : ""}
        </div>
        <div class="modifierDetailsBox">
            ${getStandardNameDisplay(initialCounter,parseRef.activeCount,"Active Count")}
            ${getStandardNameDisplay(initialCounter,parseRef.target,"Target",true)}
            ${getStandardNameDisplay(initialCounter,parseRef.isSummoner,"Summoner's Bar")}
            ${getStandardNameDisplay(initialCounter,parseRef.maximum,"Limit")}
            ${getStandardNameDisplay(initialCounter,parseRef.assignState,"State to Assign")}
            ${getStandardNameDisplay(initialCounter,parseRef.priorState,"Last State")}
            ${getStandardNameDisplay(initialCounter,parseRef["bar#"],"Bar #")}
            ${getStandardNameDisplay(initialCounter,parseRef.barType,"Bar Type")}
            ${getStandardNameDisplay(initialCounter,parseRef.cooldown,"Cooldown Display")}
            ${getStandardNameDisplay(initialCounter,parseRef.skipWhenCCd,"Skip when Crowd Controlled")}
            ${getStandardNameDisplay(initialCounter,parseRef.displaySubType,"Display Type")}
            ${getStandardNameDisplay(initialCounter,parseRef.displayShowIcon,"Show Icon")}
        </div>
        
        `;
    },
    "Clear Weaknesses"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "target",

            "action",
            "valueList",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Clear Weaknesses");
        // initialCounter++;
        return `<div class="actionDetailBody2">
            <div class="rotationConditionOperatorHeaderInline">${parseRef.name}:</div>&nbsp;
            ${parseRef.action} ${parseRef.valueList}
        </div>
        <div class="modifierDetailsBox">
            ${getStandardNameDisplay(initialCounter,parseRef.target,"Target",true)}
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
            ${parseRef.action ?? "undefined_Action(Or default Add)"} ${parseRef.valueList}
        </div>
        <div class="modifierDetailsBox">
            ${getStandardNameDisplay(initialCounter,parseRef.target,"Target",true)}
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
            ${parseRef.invertCondition ? "NOT": ""}${parseRef.target ? ` from ${megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter)}` : ""}
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
    "Is in Timeline Execution"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "invertCondition",
            // "target",

            // "action",
            // "valueList",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Is in Timeline Execution");
        // initialCounter++;
        return `<div class="actionDetailBody2">
            <div class="rotationConditionOperatorHeaderInline">${parseRef.name}</div>
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
    "Active: Fast-Forward Animations"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "invertCondition",
            // "target",

            // "action",
            // "valueList",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Active: Fast-Forward Animations");
        // initialCounter++;
        return `<div class="actionDetailBody2">
            <div class="rotationConditionOperatorHeaderInline">${parseRef.name}${parseRef.invertCondition ? " [NOT]" : ""}</div>
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
            "invertCondition",
            // "target",

            // "action",
            // "valueList",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Is Extra-Turn");
        // initialCounter++;
        return `<div class="actionDetailBody2">
            <div class="rotationConditionOperatorHeaderInline">${parseRef.name}</div>
            ${parseRef.invertCondition ? " [NOT]" : ""}
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
                ${getStandardNameDisplay(initialCounter,parseRef.target,"Target",true)}
                ${getStandardNameDisplay(initialCounter,parseRef.element,"Element")}
                ${getStandardNameDisplay(initialCounter,parseRef.resReduction,"RES Reduction")}
                ${getStandardNameDisplay(initialCounter,parseRef.maxImplant,"Max Implant Count")}
                ${getStandardNameDisplay(initialCounter,parseRef.prefWeakness,"Weakness Preference")}
                ${getStandardNameDisplay(initialCounter,parseRef.returnWeaknessVar,"Return Variables")}

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
            ${parseRef.characterName} ${parseRef.target ? `on ${megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter)}` : ""}
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
            ${parseRef.variableName} = ${parseRef.value?.displayLines ?? parseRef.value ?? "No value assignment(yet)/Reset"} ${parseRef.target ? `on ${megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter)}` : ""}
        </div>
        <div class="modifierDetailsBox">
            ${getStandardNameDisplay(initialCounter,parseRef.scope,"Context")}
        </div>`;
    },
    "Assign Value to Stat"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "variableName",
            "value",
            "target",
            "scope",
            "skipWhenMindControlled",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Assign Value to Stat");
        // initialCounter++;
        return `<div class="actionDetailBody2">
            <div class="rotationConditionOperatorHeaderInline">Assign Custom:</div>&nbsp;
            ${parseRef.variableName} = ${parseRef.value?.displayLines ?? parseRef.value}
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
            ${parseRef.variableName} = ${parseRef.value?.displayLines ?? parseRef.value} ${parseRef.target ? `on ${megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter)}` : ""}
        </div>
        <div class="modifierDetailsBox">
            ${getStandardNameDisplay(initialCounter,parseRef.scope,"Context")}
            ${getStandardNameDisplay(initialCounter,parseRef.skipWhenMindControlled,"Skip while MindControlled")}
        </div>`;
    },
    "Define Variable with Buff Configs"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "finalKeyArray",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Define Variable with Buff Configs");

        let keysStringer = "";
        if (parseRef.finalKeyArray?.length) {
            for (let dataEntry of parseRef.finalKeyArray) {
                keysStringer += getStandardNameDisplay(initialCounter,dataEntry.value,dataEntry.name)
            }
        }



        // initialCounter++;
        return `<div class="actionDetailBody2">
            <div class="rotationConditionOperatorHeaderInline">Define with Buff Configs:</div>
        </div>
        <div class="modifierDetailsBox">
            ${keysStringer}
        </div>`;
    },
    "Show VS. Countdown Effect"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "show",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Show VS. Countdown Effect");
        // initialCounter++;
        return `<div class="actionDetailBody2">
            <div class="rotationConditionOperatorHeaderInline">Show VS. Countdown Effect:</div>&nbsp;
        </div>
        <div class="modifierDetailsBox">
            ${getStandardNameDisplay(initialCounter,parseRef.show,"Show")}
        </div>`;
    },
    "Define Variable with Battle Goal ID"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "variableName",
            // "value",
            "ability",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Define Variable with Battle Goal ID");
        // initialCounter++;
        return `<div class="actionDetailBody2">
            <div class="rotationConditionOperatorHeaderInline">Define with Battle Goal ID:</div>&nbsp;
            ${parseRef.variableName}
        </div>
        <div class="modifierDetailsBox">
            ${getStandardNameDisplay(initialCounter,parseRef.ability,"Ability")}
        </div>`;
    },
    "Define Variable with Random Value"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "variableName",
            // "value",
            "integer",
            "scope",
            "min",
            "max",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Define Variable with Random Value");
        // initialCounter++;
        return `<div class="actionDetailBody2">
            <div class="rotationConditionOperatorHeaderInline">Define with Random Value:</div>&nbsp;
            ${parseRef.variableName} = Random value from Range~
        </div>
        <div class="modifierDetailsBox">
            ${getStandardNameDisplay(initialCounter,parseRef.min,"Minimum")}
            ${getStandardNameDisplay(initialCounter,parseRef.max,"Maximum")}
            ${getStandardNameDisplay(initialCounter,parseRef.integer,"Integer")}
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
            ${parseRef.variableName} = ${parseRef.value?.displayLines ?? parseRef.value} ${parseRef.target ? `on ${megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter)}` : ""}
        </div>
        <div class="modifierDetailsBox">
            ${getStandardNameDisplay(initialCounter,parseRef.scope,"Context")}
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
            ${getStandardNameDisplay(initialCounter,parseRef.target,"Attacker",true)}
            ${getStandardNameDisplay(initialCounter,parseRef.targetDefender,"Defender",true)}

            ${getStandardNameDisplay(initialCounter,parseRef.dmgType,"DMG Type")}
            ${getStandardNameDisplay(initialCounter,parseRef.attackType,"Attack Type")}
            ${getStandardNameDisplay(initialCounter,parseRef.toughnessValue,"Toughness Value")}
            ${getStandardNameDisplay(initialCounter,parseRef.reduceAllToughness,"Reduce All Toughness")}
            ${getStandardNameDisplay(initialCounter,parseRef.toughnessValueForcedPercent,"Forced %")}
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
            ${getStandardNameDisplay(initialCounter,parseRef.context,"Context")}
            ${getStandardNameDisplay(initialCounter,parseRef.roundBy,"Rounding Rule")}
            ${getStandardNameDisplay(initialCounter,parseRef.ignoreBelow,"Threshold")}
            
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
                ${parseRef.variable} ${parseRef.modifier ? `from (${parseRef.modifier})` : ""} on ${megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter)}
            </div>` : ""}
            ${parseRef.variable2 != undefined ? `<div class="actionDetailBody2Detail">
                <div class="rotationConditionOperatorHeaderInline">Paste To:</div>&nbsp;
                ${parseRef.variable2} ${parseRef.modifier2 ? `from (${parseRef.modifier2})` : ""}${parseRef.target2 ? ` on ${megaParsingFuckery.makeConditionTargetBox(parseRef.target2,initialCounter)}` : ""}
            </div>` : ""}
            ${getStandardNameDisplay(initialCounter,parseRef.scope,"Context")}
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
            ${getStandardNameDisplay(initialCounter,parseRef.target,"From",true)}
            ${getStandardNameDisplay(initialCounter,parseRef.target2,"Write To",true)}

            ${getStandardNameDisplay(initialCounter,parseRef.context,"Context")}
            ${getStandardNameDisplay(initialCounter,parseRef.weaknessFilter,"Weakness Filter")}
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
            ${getStandardNameDisplay(initialCounter,parseRef.context,"Context")}
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
            ${parseRef.variableName} on ${megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter)}
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
            ${parseRef.variableName} = ATTACK TARGETS from attack by ${megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter)}
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
            ${parseRef.variableName} on ${megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter)}
        </div>
        <div class="modifierDetailsBox">
            ${getStandardNameDisplay(initialCounter,parseRef.context,"Context")}
            ${getStandardNameDisplay(initialCounter,parseRef.healProperty,"Healing Property")}
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
            ${parseRef.modifierName ?? ""} to ${parseRef.modifierNameUpdate ?? ""}${parseRef.target ? ` from ${megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter)}` : ""}
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
            ${getStandardNameDisplay(initialCounter,parseRef.target,"Target",true)}
            ${getStandardNameDisplay(initialCounter,parseRef.silentChange,"Silent Change")}
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
            ${parseRef.modifierName ?? ""}${parseRef.valueType ? `(${parseRef.valueType})` : ""} ${finalAdjustment} ${parseRef.value?.displayLines ?? parseRef.value ?? (finalAdjustment === "+" ? "-1(no value defined)" : "")}${parseRef.target ? ` from ${megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter)}` : ""}
        </div>`;
    },
    "Stage Type"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "stageType",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Stage Type");


        // initialCounter++;
        return `<div class="actionDetailBody2">
            <div class="rotationConditionOperatorHeaderInline">Adjust Modifier Value w/Flag:</div>&nbsp;
            Type === ${parseRef.stageType ?? "(No type defined)"}
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
            ${parseRef.valueType ?? ""}${finalAdjustment} ${parseRef.value?.displayLines ?? parseRef.value ?? (finalAdjustment === "+" ? "-1(no value defined)" : "")}${parseRef.target ? ` on ${megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter)}` : ""}
        </div>
        <div class="modifierDetailsBox">
            ${getStandardNameDisplay(initialCounter,parseRef.flagName,"Flag Name(s)")}
        </div>`;
    },
    "Set Phainon Charge Points"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "value",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Set Phainon Charge Points");


        // initialCounter++;
        return `<div class="actionDetailBody2">
            <div class="rotationConditionOperatorHeaderInline">Set Phainon Charge Points:</div>&nbsp;
            ${parseRef.value?.displayLines ?? parseRef.value}
        </div>`;
    },
    "Set Phainon Charge Points Preview"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "value",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Set Phainon Points Preview");


        // initialCounter++;
        return `<div class="actionDetailBody2">
            <div class="rotationConditionOperatorHeaderInline">Set Phainon Points Preview:</div>&nbsp;
            ${parseRef.value?.displayLines ?? parseRef.value}
        </div>`;
    },
    "Set Phainon Action Count"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "value",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Set Phainon Action Count");


        // initialCounter++;
        return `<div class="actionDetailBody2">
            <div class="rotationConditionOperatorHeaderInline">Set Phainon Action Count:</div>&nbsp;
            ${parseRef.value?.displayLines ?? parseRef.value}
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
            ${parseRef.variableName}(${parseRef.modifierName}) =${parseRef.adjustmentType ? `(${parseRef.adjustmentType})` : ""} ${parseRef.value?.displayLines ?? parseRef.value}${parseRef.target ? ` on ${megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter)}` : ""}
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
            ${parseRef.variableName} ${adjustmentOperator ?? "+="} ${parseRef.value.displayLines ?? parseRef.value}${parseRef.on ? ` on ${megaParsingFuckery.makeConditionTargetBox(parseRef.on,initialCounter)}` : ""}
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
            ${parseRef.statName} (${parseRef.value?.displayLines ?? parseRef.value}) on ${megaParsingFuckery.makeConditionTargetBox(parseRef.on,initialCounter)}
        </div>`;
    },
    "Adjust Target Stats"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "modifiedValuesArray",
            // "on",
            // "statName",
            // "value",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Adjust Target Stats");

        // const functionAdjustments = {
        //     "Add": "+",
        // }
        // const finalAdjustment = parseRef.function ? functionAdjustments[parseRef.function] : "=";
        // if (!finalAdjustment) {throw new Error(`Unknown function key in Define Modifier Variable: ${parseRef.function}`)}


        let lightconeStatRow = "";
        if (parseRef.modifiedValuesArray && parseRef.modifiedValuesArray.length) {
            const pseudoStatsObject = {};
            for (let statEntry of parseRef.modifiedValuesArray) {
                pseudoStatsObject[`<span>${statEntry.on}: </span> ${statEntry.statName}`] = statEntry.value ?? 0;
            }

            const menuBoxDisplayOrder = Object.keys(pseudoStatsObject);
            lightconeStatRow = customHTML.createAlternatingStatRows(menuBoxDisplayOrder,pseudoStatsObject);
        }

        // initialCounter++;
        return `<div class="actionDetailBody2">
            <div class="rotationConditionOperatorHeaderInline">Adjust Target Stats:</div>
        </div>
        ${lightconeStatRow  ? `<div class="actionDetailBody2BattleEventOverrides">
            <div class="rotationConditionOperatorHeaderInline">Stat Changes:</div>&nbsp;
            ${lightconeStatRow}
        </div>` : ""}`;
    },
    "Stack Element Resistance"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "target",
            "resistArray",
            // "value",
            "stackType",
            // "isRefresh",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Stack Element Resistance");

        // const functionAdjustments = {
        //     "Add": "+",
        // }
        // const finalAdjustment = parseRef.function ? functionAdjustments[parseRef.function] : "=";
        // if (!finalAdjustment) {throw new Error(`Unknown function key in Define Modifier Variable: ${parseRef.function}`)}


        let resistString = "";

        if (parseRef.resistArray?.length) {
            for (let resistEntry of parseRef.resistArray) {
                resistString += `<div class="actionDetailBody2Detail">
                    <div class="rotationConditionOperatorHeaderInline">${resistEntry.element}:</div>&nbsp;
                    ${resistEntry.value}
                </div>`
            }
        }


        // initialCounter++;
        return `<div class="actionDetailBody2">
            <div class="rotationConditionOperatorHeaderInline">Stack Element Resistance:</div>&nbsp;
            ${parseRef.stackType ?? ""} on ${megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter)}
        </div>
        <div class="modifierDetailsBox">
            ${parseRef.isRefresh != undefined ? `<div class="actionDetailBody2Detail">
                <div class="rotationConditionOperatorHeaderInline">Is Refresh:</div>&nbsp;
                ${parseRef.isRefresh}
            </div>` : ""}
            ${resistString}
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
            ${parseRef.statName} (${parseRef.value?.displayLines ?? parseRef.value}) on ${megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter)}
        </div>
        <div class="modifierDetailsBox">
            ${getStandardNameDisplay(initialCounter,parseRef.isRefresh,"Is Refresh")}
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
            ${parseRef.statName} (${parseRef.value?.displayLines ?? parseRef.value}) on ${megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter)}
        </div>
        <div class="modifierDetailsBox">
            ${getStandardNameDisplay(initialCounter,parseRef.value,"New Value")}
            ${getStandardNameDisplay(initialCounter,parseRef.floor,"Floor")}
            ${getStandardNameDisplay(initialCounter,parseRef.ceiling,"Ceiling")}
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
            ${parseRef.statName} (${parseRef.value?.displayLines ?? parseRef.value}) on ${megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter)}
        </div>
        <div class="modifierDetailsBox">
            ${getStandardNameDisplay(initialCounter,parseRef.isRefresh,"Is Refresh")}
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
            "sourceTarget",
            "eatShield",
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
            ${parseRef.consumeFrom} ${parseRef.consumeFloor != undefined ? `(Floor: ${parseRef.consumeFloor})` : ""} from ${megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter)}
        </div>
        
        <div class="modifierDetailsBox">
            ${getStandardNameDisplay(initialCounter,parseRef.consumePercent,"Percent Consume")}
            ${getStandardNameDisplay(initialCounter,parseRef.sourceTarget,"Source",true)}
            ${getStandardNameDisplay(initialCounter,parseRef.flatConsume,"Flat Consume")}
            ${getStandardNameDisplay(initialCounter,parseRef.dynamicAssignment,"Assign Ratio To")}
            ${getStandardNameDisplay(initialCounter,parseRef.attackType,"Attack Type")}
            ${getStandardNameDisplay(initialCounter,parseRef.eatShield,"Eats Shield")}
            ${getStandardNameDisplay(initialCounter,parseRef.floor,"Floor")}
            ${parseRef.DamageType != undefined ? `<div class="actionDetailBody2Detail">
                <div class="rotationConditionOperatorHeaderInline">Damage Type:</div>&nbsp;
                ${parseRef.DamageType === "object" && parseRef.DamageType.name === "Target Name" ? megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter) : parseRef.DamageType}
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
            ${getStandardNameDisplay(initialCounter,parseRef.target,"Target",true)}
            ${getStandardNameDisplay(initialCounter,parseRef.variableName,"Variable Name")}
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
            ${parseRef.variableName}${parseRef.on ? ` on ${megaParsingFuckery.makeConditionTargetBox(parseRef.on,initialCounter)}` : ""} ${parseRef.value?.displayLines ?? parseRef.value ? "Value found, error, let vash know" : ""}
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
            ${parseRef.variableName} = ${parseRef.value?.displayLines ?? parseRef.value} from ${megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter)}
        </div>
        <div class="modifierDetailsBox">
            ${getStandardNameDisplay(initialCounter,parseRef.context,"Context")}
        </div>`;
    },
    "Define Custom Variable with Stat"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "variableName",
            "target",
            "value",
            "warningType",
            "context",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Define Custom Variable with Stat");

        let warningString = "";
        if (parseRef.warningType === "MaxToughness") {
            warningString += `<div class="customMenuSearchNoteWarning">PLEASE NOTE that toughness values in the game are 3x what you see displayed. If this value is used in a formula, then because of this the formula will NOT be the one you are familiar with.</div>`
        }

        // initialCounter++;
        return `<div class="actionDetailBody2">
            <div class="rotationConditionOperatorHeaderInline">Define with Stat:</div>&nbsp;
            ${parseRef.variableName} = ${parseRef.value.displayLines ?? parseRef.value} from ${megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter)}
        </div>
        <div class="modifierDetailsBox">
            ${getStandardNameDisplay(initialCounter,parseRef.context,"Context")}
        </div>
        ${warningString ?? ""}`;
    },
    "Define Custom Variable with Varying Value SUM"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "variableName",
            "target",
            "value",
            "valueType",
            "context",
            // "warningType",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Define Custom Variable with Varying Value SUM");

        let warningString = "";
        if (parseRef.warningType === "MaxToughness") {
            warningString += `<div class="customMenuSearchNoteWarning">PLEASE NOTE that toughness values in the game are 3x what you see displayed. If this value is used in a formula, then because of this the formula will NOT be the one you are familiar with.</div>`
        }

        // initialCounter++;
        return `<div class="actionDetailBody2">
            <div class="rotationConditionOperatorHeaderInline">Define with Varying SUM:</div>&nbsp;
            ${parseRef.variableName}
        </div>
        <div class="modifierDetailsBox">
            ${getStandardNameDisplay(initialCounter,parseRef.value,"Value",true)}
            ${getStandardNameDisplay(initialCounter,parseRef.valueType,"Value Type",true)}
            ${getStandardNameDisplay(initialCounter,parseRef.target,"Target",true)}
            ${getStandardNameDisplay(initialCounter,parseRef.context,"Context")}
        </div>`;
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
            ${parseRef.variableName} = ${parseRef.value?.displayLines ?? parseRef.value}
        </div>
        <div class="modifierDetailsBox">
            ${getStandardNameDisplay(initialCounter,parseRef.target,"From",true)}
            ${getStandardNameDisplay(initialCounter,parseRef.targetWrite,"To",true)}
            ${getStandardNameDisplay(initialCounter,parseRef.context,"Context")}
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
            ${getStandardNameDisplay(initialCounter,parseRef.target,"Target",true)}
            ${getStandardNameDisplay(initialCounter,parseRef.context,"Context")}
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
            ${parseRef.variableName} from ${megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter)}
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
            ${parseRef.variableName} = ${parseRef.livingTargets ? `(Living Targets)` : ""}${megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter)}
        </div>
        ${returnString}
        <div class="modifierDetailsBox">
            ${getStandardNameDisplay(initialCounter,parseRef.context,"Context")}
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
            ${parseRef.variableName} += ${parseRef.value.displayLines ?? parseRef.value} ${parseRef.target ? `on ${megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter)}` : ""}
        </div>
        ${returnString}
        <div class="modifierDetailsBox">
            ${getStandardNameDisplay(initialCounter,parseRef.context,"Context")}
            ${getStandardNameDisplay(initialCounter,parseRef.min,"Min")}
            ${getStandardNameDisplay(initialCounter,parseRef.max,"Max")}
        </div>`;
    },
    "Show BattleEvent Button"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "show",
            // "matchToPathFrom",
            // "context",
            // "value",
            // "variableName",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Show BattleEvent Button");
        // initialCounter++;
        return `<div class="actionDetailBody2">
            <div class="rotationConditionOperatorHeaderInline">Show BattleEvent Button:</div>
        </div>
        <div class="modifierDetailsBox">
            ${getStandardNameDisplay(initialCounter,parseRef.show,"Show")}
        </div>`;
    },
    "Toggle View Mode"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "enable",
            // "matchToPathFrom",
            // "context",
            // "value",
            // "variableName",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Toggle View Mode");
        // initialCounter++;
        return `<div class="actionDetailBody2">
            <div class="rotationConditionOperatorHeaderInline">Toggle View Mode:</div>
        </div>
        <div class="modifierDetailsBox">
            ${getStandardNameDisplay(initialCounter,parseRef.enable,"Enable")}
        </div>`;
    },
    "Assign DEPARTED(Modifier: Standard_Departed)"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "groupName",
            // "matchToPathFrom",
            // "context",
            // "value",
            // "variableName",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Assign DEPARTED(Modifier: Standard_Departed)");
        // initialCounter++;
        return `<div class="actionDetailBody2">
            <div class="rotationConditionOperatorHeaderInline">Assign DEPARTED(Modifier: Standard_Departed):</div>
        </div>
        <div class="modifierDetailsBox">
            ${getStandardNameDisplay(initialCounter,parseRef.groupName,"Group Name")}
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
            ${getStandardNameDisplay(initialCounter,parseRef.skipAttackSettle,"Skip Attack Settlement")}
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
            ${getStandardNameDisplay(initialCounter,parseRef.skipDeathSettle,"Skip Death Settlement")}
            ${getStandardNameDisplay(initialCounter,parseRef.fakeCharacterAttack,"Fake Character Attack")}
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
            ${parseRef.variableName} = Hits from ${megaParsingFuckery.makeConditionTargetBox(parseRef.matchToPathFrom,initialCounter)}
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
            ${parseRef.variableName} = Entites that match Path of ${megaParsingFuckery.makeConditionTargetBox(parseRef.matchToPathFrom,initialCounter)}
        </div>
        <div class="modifierDetailsBox">
            ${getStandardNameDisplay(initialCounter,parseRef.target,"Target Pool",true)}
            ${getStandardNameDisplay(initialCounter,parseRef.context,"Context")}
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
            ${parseRef.variableName} = Equilibrium Level on ${megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter)}
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
            ${parseRef.variableName} = current HP Percent on ${megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter)}
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
            ${parseRef.variableName} = current Status Count on ${megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter)}
        </div>
        <div class="modifierDetailsBox">
            ${getStandardNameDisplay(initialCounter,parseRef.casterFilter,"Caster Filter",true)}
        </div>`;
    },
    "Define Custom Variable with Flag Count"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "variableName",
            "target",
            "flagName",
            "context",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Define Custom Variable with Flag Count");
        // initialCounter++;
        return `<div class="actionDetailBody2">
            <div class="rotationConditionOperatorHeaderInline">Define with Flag Count:</div>&nbsp;
            ${parseRef.variableName} = ${parseRef.flagName} Count on ${megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter)}
        </div>
        <div class="modifierDetailsBox">
            ${getStandardNameDisplay(initialCounter,parseRef.context,"Context")}
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
            ${parseRef.flagNames} on ${megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter)}
        </div>`;
    },
    "Battle was Victory"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "invertCondition",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Battle was Victory");
        // initialCounter++;
        return `<div class="actionDetailBody2">
            <div class="rotationConditionOperatorHeaderInline">Battle was Victory:</div>&nbsp;
            ${parseRef.invertCondition ? "NOT " : ""}
        </div>`;
    },
    "Compare: Energy Tags"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "variableName",
            "target",
            "flagNames"
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Compare: Energy Tags");
        // initialCounter++;
        return `<div class="actionDetailBody2">
            <div class="rotationConditionOperatorHeaderInline">Compare: Energy Tags:</div>&nbsp;
            ${parseRef.flagNames}
        </div>`;
    },
    "Define Custom Variable with Lineup Position"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "variableName",
            "target",
            "living",
            // "multiplier",
            // "modifierName",
            "scope",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Define Custom Variable with Lineup Position");
        // initialCounter++;
        return `<div class="actionDetailBody2Preview"> 
            <div class="rotationConditionOperatorHeaderInline">Define with Lineup Position:</div>&nbsp;
            ${parseRef.variableName}
        </div>
        <div class="modifierDetailsBox">
            ${getStandardNameDisplay(initialCounter,parseRef.target,"Target",true)}
            ${getStandardNameDisplay(initialCounter,parseRef.scope,"Context")}
            ${getStandardNameDisplay(initialCounter,parseRef.living,"Require Living")}
        </div>`;
    },
    "Define Custom Variable with Distance to Team Center"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "variableName",
            "target",
            "living",
            // "multiplier",
            // "modifierName",
            "scope",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Define Custom Variable with Distance to Team Center");
        // initialCounter++;
        return `<div class="actionDetailBody2Preview"> 
            <div class="rotationConditionOperatorHeaderInline">Define with Distance to Team's Center:</div>&nbsp;
            ${parseRef.variableName}
        </div>
        <div class="modifierDetailsBox">
            ${getStandardNameDisplay(initialCounter,parseRef.target,"Target",true)}
            ${getStandardNameDisplay(initialCounter,parseRef.scope,"Context")}
            ${getStandardNameDisplay(initialCounter,parseRef.living,"Require Living")}
        </div>`;
    },
    "Define Custom Variable with Stage Wave Count"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "variableName",
            // "target",
            // "valueType",
            // "multiplier",
            // "modifierName",
            "scope",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Define Custom Variable with Stage Wave Count");
        // initialCounter++;
        return `<div class="actionDetailBody2Preview"> 
            <div class="rotationConditionOperatorHeaderInline">Define with Stage's Wave Count:</div>&nbsp;
            ${parseRef.variableName}
        </div>
        <div class="modifierDetailsBox">
            ${getStandardNameDisplay(initialCounter,parseRef.scope,"Context")}
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
            ${parseRef.variableName} = ${parseRef.valueType} * ${parseRef.multiplier} on ${parseRef.modifierName ? `(${parseRef.modifierName})` : ""}${megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter) ?? "[Undefined or Context Target]"}
        </div>
        <div class="modifierDetailsBox">
            ${getStandardNameDisplay(initialCounter,parseRef.scope,"Context")}
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
            ${parseRef.variableName} ${parseRef.function ?? ""}= ${parseRef.value?.displayLines ?? parseRef.value} on ${megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter)}
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
            ${getStandardNameDisplay(initialCounter,parseRef.toggle,"Toggle State")}
            ${getStandardNameDisplay(initialCounter,parseRef.skillTypesAllow,"Allowed Skills")}
            ${getStandardNameDisplay(initialCounter,parseRef.trigger,"Trigger")}
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
            ${parseRef.target ? `${megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter)}` : ""}
        </div>
        <div class="modifierDetailsBox">
            ${getStandardNameDisplay(initialCounter,parseRef.state,"State")}
            ${getStandardNameDisplay(initialCounter,parseRef.selfSplit,"Self Split")}
            ${getStandardNameDisplay(initialCounter,parseRef.targetSplit,"Target Split")}
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
            ${parseRef.invertCondition ? "NOT " : ""}${parseRef.target ? `${megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter)}` : ""}
        </div>
        <div class="modifierDetailsBox">
            ${getStandardNameDisplay(initialCounter,parseRef.list,"Compare List")}
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
            ${parseRef.invertCondition ? "NOT " : ""}${parseRef.target ? `${megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter)}` : ""}
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
            ${parseRef.target ? `${megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter)}` : ""}
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
            <img src="/HonkaiSR/icon/property/IconEnergyRecovery.png" class="characterDisplayLogStatIcon"></img>
            <div class="rotationConditionOperatorHeaderInline">Update Energy${parseRef.isSpecialEnergy ? " [SPECIAL]" : ""}:</div>&nbsp;
            ${parseRef.on ? `${megaParsingFuckery.makeConditionTargetBox(parseRef.on,initialCounter)}` : ""} 
        </div>
        <div class="modifierDetailsBox">
            ${getStandardNameDisplay(initialCounter,parseRef.valuePercent,"Percent(*100)")}
            ${getStandardNameDisplay(initialCounter,parseRef.value,"Flat")}
            ${getStandardNameDisplay(initialCounter,parseRef.ofAbilitySplit,"Is % of Ability Energy")}
            ${getStandardNameDisplay(initialCounter,parseRef.isFixed,"Modified by")}
            ${getStandardNameDisplay(initialCounter,parseRef.isSetToValue,"Is Set to Value")}
            ${getStandardNameDisplay(initialCounter,parseRef.tag,"Tag")}
            ${getStandardNameDisplay(initialCounter,parseRef.ignoreBlock,"Ignore Block")}
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
            <img src="/HonkaiSR/icon/property/IconEnergyRecovery.png" class="characterDisplayLogStatIcon"></img>
            <div class="rotationConditionOperatorHeaderInline">Update Energy Value:</div>&nbsp;
            ${parseRef.adjustment} ${parseRef.value.displayLines ?? parseRef.value} on ${megaParsingFuckery.makeConditionTargetBox(parseRef.on,initialCounter)}
        </div>
        <div class="modifierDetailsBox">
            ${getStandardNameDisplay(initialCounter,parseRef.ignoreBlock,"Ignore Block")}
        </div>`;
    },
    "Use Custom Character Function"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "functionName",
            "target",
            "variables",
            "paramSequence",
            "damageSequence",

            "baseDelay",
            "delayInterval",
            "parallelCount",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Use Custom Character Function");


        let parseString = "";
        let refString = "";
        const hasParse = parseRef.paramSequence?.length;
        const hasRef = parseRef.damageSequence?.length;
        if (hasParse) {parseString += megaParsingFuckery.fillEventBodyBox(parseRef.paramSequence,initialCounter);}
        if (hasRef) {refString += megaParsingFuckery.fillEventBodyBox(parseRef.damageSequence,initialCounter);}



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
            ${parseRef.functionName} ${parseRef.target ? `on ${megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter)}` : ""}
        </div>
        <div class="modifierDetailsBox">
            ${getStandardNameDisplay(initialCounter,parseRef.baseDelay,"baseDelay")}
            ${getStandardNameDisplay(initialCounter,parseRef.delayInterval,"delayInterval")}
            ${getStandardNameDisplay(initialCounter,parseRef.parallelCount,"parallelCount")}
        </div>
        <div class="modifierDetailsBox">
            ${addString}
        </div>
        <div class="rotationConditionOperatorBoxMain">
            ${hasParse ? `<div class="rotationConditionOperatorHeaderConditionTHEN">Parameter Sequence</div>
            <div class="rotationsSectionRowHolder${initialCounter%2 === 0 ? 2 : 1}">
                ${parseString}
            </div>` : ""}
            ${hasRef ? `<div class="rotationConditionOperatorHeaderConditionTHEN">DMG Sequence</div>
                <div class="rotationsSectionRowHolder${initialCounter%2 === 0 ? 2 : 1}">
                    ${refString}
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

                // addString += `<div class="actionDetailBody2">
                //     <div class="rotationConditionOperatorHeaderInline">${variableEntry}:</div>&nbsp;
                //     ${currentVariable.displayLines ?? currentVariable}
                // </div>`
                addString += getStandardNameDisplay(initialCounter,currentVariable,variableEntry)
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
            ${parseRef.phase}${parseRef.target ? ` on ${megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter)}` : ""}
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
            ${parseRef.invertCondition ? "NOT ": ""}${parseRef.eidolon} ${parseRef.target ? `on ${megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter)}` : ""}
        </div>`;
    },
    "Target is Pathstrider"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "path",
            "target",
            "invertCondition",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Target is Pathstrider");

        // initialCounter++;
        return `<div class="actionDetailBody">
            <div class="rotationConditionOperatorHeaderInline">${parseRef.name}:</div>&nbsp;
            ${parseRef.invertCondition ? "NOT ": ""}${parseRef.path} ${parseRef.target ? `on ${megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter)}` : ""}
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
            ${parseRef.invertCondition ? "NOT ": ""}${parseRef.target ? `on ${megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter)}` : ""}
        </div>
        <div class="modifierDetailsBox">
            ${getStandardNameDisplay(initialCounter,parseRef.expectedType,"Expected Sub-Type")}
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
            ${parseRef.invertCondition ? "NOT ": ""}${parseRef.target ? `on ${megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter)}` : ""}
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
            ${getStandardNameDisplay(initialCounter,parseRef.arena,"Arena")}
            ${getStandardNameDisplay(initialCounter,parseRef.tag,"Arena Tag")}
            ${getStandardNameDisplay(initialCounter,parseRef.status,"Change Status")}
            ${getStandardNameDisplay(initialCounter,parseRef.priorityTag,"Priority Tag")}
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
            ${getStandardNameDisplay(initialCounter,parseRef.show,"Hide")}
            ${getStandardNameDisplay(initialCounter,parseRef.display,"Show")}
            ${getStandardNameDisplay(initialCounter,parseRef.preview,"Preview")}
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
            ${getStandardNameDisplay(initialCounter,parseRef.level,"Level")}
        </div>`;
    },
    "Target Index"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "indexType",
            "indexValue",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Target Index");

        // initialCounter++;
        return `<div class="actionDetailBody">
            <div class="rotationConditionOperatorHeaderInline">${parseRef.name}:</div>
        </div>
        <div class="modifierDetailsBox">
            ${getStandardNameDisplay(initialCounter,parseRef.indexType,"Index Type")}
            ${getStandardNameDisplay(initialCounter,parseRef.indexValue,"Index Value")}
            
        </div>`;
    },
    "Sort by Action Order"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "excludeNonActionableEntities",
            // "living",
            // "state",
            // "defenders",
            // "byHighest",
            // "maxRank",
            // "sortByHighest",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Sort by Action Order");

        // initialCounter++;
        return `<div class="actionDetailBody">
            <div class="rotationConditionOperatorHeaderInline">${parseRef.name}:</div>
        </div>
        <div class="modifierDetailsBox">
            ${getStandardNameDisplay(initialCounter,parseRef.excludeNonActionableEntities,"Exclude Non-Actionable Entities")}
        </div>`;
    },
    "Sort by Physical Positioning"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            // "stat",
            // "living",
            // "state",
            // "defenders",
            "byHighest",
            // "maxRank",
            // "sortByHighest",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Sort by Physical Positioning");

        // initialCounter++;
        return `<div class="actionDetailBody">
            <div class="rotationConditionOperatorHeaderInline">${parseRef.name}:</div>
        </div>
        <div class="modifierDetailsBox">
            ${getStandardNameDisplay(initialCounter,parseRef.byHighest,"By Highest")}
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
            ${getStandardNameDisplay(initialCounter,parseRef.byHighest,"By Highest")}
            ${getStandardNameDisplay(initialCounter,parseRef.maxRank,"Highest Sorted Rank")}
        </div>`;
    },
    "Filter by Target"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            // "stat",
            // "living",
            "exclude",
            // "defenders",
            // "sortByHighest",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Filter by Target");

        // initialCounter++;
        return `<div class="actionDetailBody">
            <div class="rotationConditionOperatorHeaderInline">${parseRef.name}:</div>
        </div>
        <div class="modifierDetailsBox">
            ${getStandardNameDisplay(initialCounter,parseRef.exclude,"Exclude",true)}
        </div>`;
    },
    "Filter by Life-State"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            // "stat",
            // "living",
            "state",
            // "defenders",
            // "sortByHighest",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Filter by Life-State");

        // initialCounter++;
        return `<div class="actionDetailBody">
            <div class="rotationConditionOperatorHeaderInline">${parseRef.name}:</div>
        </div>
        <div class="modifierDetailsBox">
            ${getStandardNameDisplay(initialCounter,parseRef.state,"State")}
        </div>`;
    },
    "Compute Targets"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            // "stat",
            "type",
            "TargetList",
            // "sortByHighest",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Compute Targets");

        // initialCounter++;
        return `<div class="actionDetailBody">
            <div class="rotationConditionOperatorHeaderInline">${parseRef.name}:</div>
        </div>
        <div class="modifierDetailsBox">
            ${parseRef.type != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Computation:</div>&nbsp;
                ${parseRef.type}
            </div>` : ""}
            ${getStandardNameDisplay(initialCounter,parseRef.type,"Computation")}
            ${getStandardNameDisplay(initialCounter,parseRef.TargetList,"List",true)}
            
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
            ${getStandardNameDisplay(initialCounter,parseRef.TargetList,"List",true)}
            
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
            ${getStandardNameDisplay(initialCounter,parseRef.matchFirst,"Match First")}
            ${getStandardNameDisplay(initialCounter,parseRef.defenders,"Defenders",true)}
            
        </div>`;
    },
    "Set Enemy Phase"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            // "stat",
            // "living",
            "mode",
            "target",
            "phase",
            // "sortByHighest",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Set Enemy Phase");

        // initialCounter++;
        return `<div class="actionDetailBody">
            <div class="rotationConditionOperatorHeaderInline">${parseRef.name}:</div>
        </div>
        <div class="modifierDetailsBox">
            ${getStandardNameDisplay(initialCounter,parseRef.mode,"Mode")}
            ${getStandardNameDisplay(initialCounter,parseRef.phase,"Phase")}

            ${getStandardNameDisplay(initialCounter,parseRef.target,"Target",true)}
            
        </div>`;
    },
    "Filter Target List"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "conditions",
            "target",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Filter Target List");



        const conditionObject = parseRef.conditions;
        const conditionName = conditionObject?.name;

        let returnString = "" + (typeof conditionObject === "string" ? `<div class="rotationsConditionsBodyBox">${conditionObject}</div>` : "");
        const functionExists = megaParsingFuckery[conditionName];
        if (functionExists) {returnString += `<div class="rotationsConditionsBodyBox">` + functionExists(conditionObject,initialCounter) + `</div>`;}

        if (conditionObject && !returnString) {throw new Error(`Missing condition display-only definition in IF: ${conditionName}`)}
        

        // initialCounter++;
        return `<div class="actionDetailBody">
            <div class="rotationConditionOperatorHeaderInline">${parseRef.name}:</div>
        </div>
        
        <div class="modifierDetailsBox">
            ${getStandardNameDisplay(initialCounter,parseRef.targetPass,"Target Passed",true)}
        </div>
        ${returnString != "" ? `<div class="actionDetailBody2">
            <div class="rotationConditionOperatorHeaderInline">Conditions</div>
        </div>
        ${returnString}` : ""}`;
    },
    "Target Selector"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "conditions",
            "targetPass",
            "targetFail",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Target Selector");



        const conditionObject = parseRef.conditions;
        const conditionName = conditionObject?.name;

        let returnString = "" + (typeof conditionObject === "string" ? `<div class="rotationsConditionsBodyBox">${conditionObject}</div>` : "");
        const functionExists = megaParsingFuckery[conditionName];
        if (functionExists) {returnString += `<div class="rotationsConditionsBodyBox">` + functionExists(conditionObject,initialCounter) + `</div>`;}

        if (conditionObject && !returnString) {throw new Error(`Missing condition display-only definition in IF: ${conditionName}`)}
        

        // initialCounter++;
        return `<div class="actionDetailBody">
            <div class="rotationConditionOperatorHeaderInline">${parseRef.name}:</div>
        </div>
        ${returnString != "" ? `<div class="actionDetailBody2">
            <div class="rotationConditionOperatorHeaderInline">Conditions</div>
        </div>
        ${returnString}` : ""}
        <div class="modifierDetailsBox">
            ${getStandardNameDisplay(initialCounter,parseRef.targetPass,"Target Passed",true)}
            ${getStandardNameDisplay(initialCounter,parseRef.targetFail,"Target Failed",true)}
        </div>`;
    },
    "Sort by Modifier Value"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "modifier",
            "value",
            "sortByHighest",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Sort by Modifier Value");

        // initialCounter++;
        return `<div class="actionDetailBody">
            <div class="rotationConditionOperatorHeaderInline">${parseRef.name}:</div>
        </div>
        <div class="modifierDetailsBox">
            ${getStandardNameDisplay(initialCounter,parseRef.modifier,"Modifier")}
            ${getStandardNameDisplay(initialCounter,parseRef.value,"Modifier Value")}

            ${getStandardNameDisplay(initialCounter,parseRef.sortByHighest,"By Highest")}
        </div>`;
    },
    "Sort by Modifier Variable"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "modifier",
            "value",
            // "sortByHighest",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Sort by Modifier Variable");

        // initialCounter++;
        return `<div class="actionDetailBody">
            <div class="rotationConditionOperatorHeaderInline">${parseRef.name}:</div>
        </div>
        <div class="modifierDetailsBox">
            ${getStandardNameDisplay(initialCounter,parseRef.modifier,"Modifier")}
            ${getStandardNameDisplay(initialCounter,parseRef.value,"Modifier Value")}

            ${getStandardNameDisplay(initialCounter,parseRef.sortByHighest,"By Highest")}
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
            ${getStandardNameDisplay(initialCounter,parseRef.sortByHighest,"By Highest")}
        </div>`;
    },
    "Sort by Lineup Name Index"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "lineupName",
            // "stat",
            // "living",
            // "sortByHighest",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Sort by Lineup Name Index");

        // initialCounter++;
        return `<div class="actionDetailBody">
            <div class="rotationConditionOperatorHeaderInline">${parseRef.name}:</div>&nbsp;
            ${parseRef.living ? "(Living)" : ""}
        </div>
        <div class="modifierDetailsBox">
            ${getStandardNameDisplay(initialCounter,parseRef.lineupName,"Lineup Name")}
        </div>`;
    },
    "Sort by Modifier Types"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "buffType",
            // "stat",
            // "living",
            "sortByHighest",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Sort by Modifier Types");

        // initialCounter++;
        return `<div class="actionDetailBody">
            <div class="rotationConditionOperatorHeaderInline">${parseRef.name}:</div>&nbsp;
            ${parseRef.living ? "(Living)" : ""}
        </div>
        <div class="modifierDetailsBox">
            ${getStandardNameDisplay(initialCounter,parseRef.buffType,"Status Type")}
            ${getStandardNameDisplay(initialCounter,parseRef.sortByHighest,"By Highest")}
            
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
            ${getStandardNameDisplay(initialCounter,parseRef.progress,"Progress")}
            ${getStandardNameDisplay(initialCounter,parseRef.count,"Count")}
            
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
            ${getStandardNameDisplay(initialCounter,parseRef.progress,"Progress")}
            ${getStandardNameDisplay(initialCounter,parseRef.count,"Count")}
            
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
            ${getStandardNameDisplay(initialCounter,parseRef.paramType,"Variable Type")}

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
            ${getStandardNameDisplay(initialCounter,parseRef.target,"Target",true)}

            ${getStandardNameDisplay(initialCounter,parseRef.resistanceList,"Flag List")}

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
            ${getStandardNameDisplay(initialCounter,parseRef.target,"Target",true)}

        </div>`;
    },
    "Enemy ID"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "ID",
            "target",
            "characterName",
            "isCompareUniqueID",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Enemy ID");

        // initialCounter++;
        return `<div class="actionDetailBody">
            <div class="rotationConditionOperatorHeaderInline">${parseRef.name}:</div>&nbsp;
            ${megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter)} = ${parseRef.ID?.displayLines ?? parseRef.ID}(${parseRef.characterName})
        </div>
        <div class="modifierDetailsBox">
            ${getStandardNameDisplay(initialCounter,parseRef.isCompareUniqueID,"Is Partial Unique ID Comparison")}

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
            ${megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter)} ${parseRef.invertCondition ? "NOT" : ""}= ${parseRef.ID}(${parseRef.characterName})
        </div>`;
    },
    "Battle Event ID"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "ID",
            "target",
            // "characterName",
            "invertCondition",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Battle Event ID");

        // initialCounter++;
        return `<div class="actionDetailBody">
            <div class="rotationConditionOperatorHeaderInline">${parseRef.name}:</div>&nbsp;
            ${megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter)} ${parseRef.invertCondition ? "NOT" : ""}= ${parseRef.ID}
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
            ${parseRef.invertCondition ? "NOT" : ""}${parseRef.conditionList} ${parseRef.target ? `on ${megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter)}` : ""}
        </div>`;
    },
    "Is Converted DMG" (parseRef,initialCounter){
        const knownKeySet = new Set ([
            "name",
            "invertCondition",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Is Converted DMG");

        // initialCounter++;
        return `<div class="actionDetailBody">
            <div class="rotationConditionOperatorHeaderInline">${parseRef.name}</div>
            ${parseRef.invertCondition ? "NOT" : ""}
        </div>`;
    },
    "Is a Crit" (parseRef,initialCounter){
        const knownKeySet = new Set ([
            "name",
            "invertCondition",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Is a Crit");

        // initialCounter++;
        return `<div class="actionDetailBody">
            <div class="rotationConditionOperatorHeaderInline">${parseRef.name}</div>
            ${parseRef.invertCondition ? "NOT" : ""}
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

        
        // initialCounter++;
        return `<div class="actionDetailBody">
            <div class="rotationConditionOperatorHeaderInline">${parseRef.name}:</div>
        </div>
        <div class="modifierDetailsBox">
            ${getStandardNameDisplay(initialCounter,parseRef.target,"Target to Move",true)}
            ${getStandardNameDisplay(initialCounter,parseRef.targetRef,"Target to Reference",true)}

            ${getStandardNameDisplay(initialCounter,parseRef.refPoint,"Reference Point")}
            ${getStandardNameDisplay(initialCounter,parseRef.isStartingAV,"Is Starting AV")}
            
        </div>`;
    },
    "Action Advance/Delay"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "target",
            // "value",
            "multi",
            "add",
            "set",
            "advanceType",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Action Advance/Delay");

        const advanceType = parseRef.advanceType;
        const displayValue = parseRef.value?.displayLines ?? parseRef.value;
        const finalDisplay = (typeof displayValue === "number" ? +displayValue : displayValue) + (advanceType != "Set" ? "* 100%" : " AV")

        // advanceType

        
        // initialCounter++;


        // ${advanceType === "Set" ? "AV til Next Turn = " : ""}${finalDisplay} ${advanceType != "Set" ? advanceType : ""} ${parseRef.target ? `on ${megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter)}` : ""}
        return `<div class="actionDetailBody">
            <div class="rotationConditionOperatorHeaderInline">${parseRef.name}:</div>&nbsp;
            ${parseRef.target ? `on ${megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter)}` : ""}
        </div>
        <div class="modifierDetailsBox">
            ${getStandardNameDisplay(initialCounter,parseRef.set,"Set")}
            ${getStandardNameDisplay(initialCounter,parseRef.multi,"AV Multi")}
            ${getStandardNameDisplay(initialCounter,parseRef.isStartingAV,"Add")}
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

        // ${megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter)}
        return `<div class="actionDetailBody">
            <div class="rotationConditionOperatorHeaderInline">${parseRef.name}:</div>&nbsp;
            ${megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter)} ${parseRef.invertCondition ? "NOT" : ""}= ${megaParsingFuckery.makeConditionTargetBox(parseRef.target2,initialCounter)}
        </div>
        
        <div class="modifierDetailsBox">
            ${getStandardNameDisplay(initialCounter,parseRef.state,"State")}
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

        // ${megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter)}
        return `<div class="actionDetailBody">
            <div class="rotationConditionOperatorHeaderInline">${parseRef.name}:</div>&nbsp;
            Current Status Type ${parseRef.invertCondition ? "NOT" : ""}= ${parseRef.statusType}
        </div>`;
    },
    "Current Turn Is"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "target",
            "invertCondition",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Current Turn Is");

        // initialCounter++;
        return `<div class="actionDetailBody">
            <div class="rotationConditionOperatorHeaderInline">${parseRef.name}:</div>&nbsp;
            ${parseRef.invertCondition ? "NOT " : ""}${megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter)}
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
    "Current Turn Owner has Pending"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "invertCondition",
            // "target",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Current Turn Owner has Pending");

        // initialCounter++;
        return `<div class="actionDetailBody">
            <div class="rotationConditionOperatorHeaderInline">${parseRef.name}</div>&nbsp;
            ${parseRef.invertCondition ? "NOT " : ""}
        </div>`;
    },
    "Current Turn's Action Phase is Over"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "invertCondition",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Current Turn's Action Phase is Over");

        // initialCounter++;
        return `<div class="actionDetailBody">
            <div class="rotationConditionOperatorHeaderInline">${parseRef.name}</div>&nbsp;
            ${parseRef.invertCondition ? "NOT " : ""}
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
            ${parseRef.state} ${parseRef.invertCondition ? "NOT " : ""}${parseRef.target ? `on ${megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter)}` : ""}
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
            ${megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter)}
        </div>`;
    },
    "Current Action Holder Is"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "target",
            "invertCondition",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Current Action Holder Is");

        // initialCounter++;
        return `<div class="actionDetailBody">
            <div class="rotationConditionOperatorHeaderInline">${parseRef.name}:</div>&nbsp;
            ${parseRef.invertCondition ? "NOT " : ""}${megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter)}
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
    "Add Target by Pseudo-Character Partner"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "target",
            "identifier",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Attack-Type Extension");

        // initialCounter++;
        return `<div class="actionDetailBody">
            <div class="rotationConditionOperatorHeaderInline">${parseRef.name}:</div>
        </div>
        <div class="modifierDetailsBox">
            ${getStandardNameDisplay(initialCounter,parseRef.identifier,"Identifier")}

            ${getStandardNameDisplay(initialCounter,parseRef.target,"Target",true)}
        </div>`;
    },
    "Attack-Type Extension"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "target",
            "typeToExtend",
            "extendTypeTo",
            "isRemove",
            "instanceIdentifier",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Attack-Type Extension");

        // initialCounter++;
        return `<div class="actionDetailBody">
            <div class="rotationConditionOperatorHeaderInline">${parseRef.name}${parseRef.isRemove ? "[RESET]" : ""}:</div>&nbsp;
            ${megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter)}
        </div>
        <div class="modifierDetailsBox">
            ${getStandardNameDisplay(initialCounter,parseRef.typeToExtend,"Base Type")}
            ${getStandardNameDisplay(initialCounter,parseRef.extendTypeTo,"Consider as")}
            ${getStandardNameDisplay(initialCounter,parseRef.instanceIdentifier,"Instance Tag/Identifier")}
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
            ${parseRef.abilityTypes}${parseRef.text ? `("${parseRef.text}")` : ""} on ${megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter)}
        </div>
        <div class="modifierDetailsBox">
            ${getStandardNameDisplay(initialCounter,parseRef.controlTypes,"Controlled Types")}
            ${getStandardNameDisplay(initialCounter,parseRef.extraText,"Extra Description")}

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
            use ${parseRef.abilityName}${parseRef.enableSecondaryType ? `(and ${parseRef.enableSecondaryType})` : ""} in ${parseRef.skillSlot} slot, from ${megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter)}
        </div>`;
    },
    "Update Enemy InfoPanel"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "text",
            "type",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Update Enemy InfoPanel");

        // initialCounter++;
        return `<div class="actionDetailBody">
            <div class="rotationConditionOperatorHeaderInline">${parseRef.name}:</div>&nbsp;
            ${parseRef.text ? `text["${parseRef.text}"]` : ""}
        </div>
        <div class="modifierDetailsBox">
            ${getStandardNameDisplay(initialCounter,parseRef.type,"Type")}
        </div>`;
    },
    "Set Render/Load State"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "showOrLoad",
            "target",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Set Render/Load State");

        // initialCounter++;
        return `<div class="actionDetailBody">
            <div class="rotationConditionOperatorHeaderInline">${parseRef.name}:</div>
        </div>
        <div class="modifierDetailsBox">
            ${getStandardNameDisplay(initialCounter,parseRef.target,"Target",true)}

            ${getStandardNameDisplay(initialCounter,parseRef.showOrLoad,"Show or Load")}
            
        </div>`;
    },
    "Update Character Panel Visibility"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "show",
            "forceDisplayUltButton",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Update Character Panel Visibility");

        // initialCounter++;
        return `<div class="actionDetailBody">
            <div class="rotationConditionOperatorHeaderInline">${parseRef.name}:</div>
        </div>
        <div class="modifierDetailsBox">
            ${getStandardNameDisplay(initialCounter,parseRef.show,"Show")}
            ${getStandardNameDisplay(initialCounter,parseRef.forceDisplayUltButton,"Force Display Ult-Button")}
            
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
            ${getStandardNameDisplay(initialCounter,parseRef.skillTrigger,"Skill Trigger")}
        </div>`;
    },
    "Update Modifier Description"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "popUpText",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Update Modifier Description");

        // initialCounter++;
        // ${parseRef.popUpText ? `text["${parseRef.popUpText}"]` : ""}

        // <div class="rotationConditionOperatorHeaderInline">Description:</div>&nbsp;
        return `<div class="actionDetailBody">
            <div class="rotationConditionOperatorHeaderInline">${parseRef.name}:</div>&nbsp;
            
            ${parseRef.popUpText ? `<div class="actionDetailBody2">
                
                <div class="actionDetailBody2Description">
                ${parseRef.popUpText}
                </div>
            </div>` : ""}
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
            ${parseRef.popUpText ? `bannerPopUp["${parseRef.popUpText}"]` : ""} on ${megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter)}${parseRef.living ? "(Living)" : ""}
        </div>`;
    },
    "Redirect AV Changes"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "from",
            "to",
            "endRedirect",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Redirect AV Changes");
        // initialCounter++;

        return `<div class="actionDetailBody2">
            <div class="rotationConditionOperatorHeaderInline">Redirect AV Changes:</div>
            
        </div>
        <div class="modifierDetailsBox">
            ${getStandardNameDisplay(initialCounter,parseRef.from,"From",true)}
            ${getStandardNameDisplay(initialCounter,parseRef.to,"To",true)}

            ${getStandardNameDisplay(initialCounter,parseRef.endRedirect,"End Redirect")}
        </div>`;
    },
    "Reset Turn AV"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "target",
            "skipTurn",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Reset Turn AV");
        // initialCounter++;

        return `<div class="actionDetailBody2">
            <div class="rotationConditionOperatorHeaderInline">Reset Turn AV:</div>&nbsp;
            ${parseRef.target ? `on ${megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter)}` : ""}
        </div>
        <div class="modifierDetailsBox">
            ${getStandardNameDisplay(initialCounter,parseRef.skipTurn,"Skip Turn")}
        </div>`;
    },
    "Set Warning Countdown"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "time",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Lock Target AV");
        // initialCounter++;

        return `<div class="actionDetailBody2">
            <div class="rotationConditionOperatorHeaderInline">Lock Target AV:</div>
        </div>
        <div class="modifierDetailsBox">
            ${getStandardNameDisplay(initialCounter,parseRef.time,"Time")}
        </div>`;
    },
    "Lock Target AV"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "on",
            "whitelist",
            "whitelistTag",
            "whitelistType",
            "isLock",
            // "state",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Lock Target AV");
        // initialCounter++;

        return `<div class="actionDetailBody2">
            <div class="rotationConditionOperatorHeaderInline">Lock Target AV:</div>&nbsp;
            ${parseRef.on ? `on ${megaParsingFuckery.makeConditionTargetBox(parseRef.on,initialCounter)}` : ""}
        </div>
        <div class="modifierDetailsBox">

        </div>`;
    },
    "Block Advance/Delay Effects"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "on",
            "whitelist",
            "whitelistTag",
            "whitelistType",
            "isLock",
            // "state",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Block Advance/Delay Effects");
        // initialCounter++;

        return `<div class="actionDetailBody2">
            <div class="rotationConditionOperatorHeaderInline">Block Advance/Delay Effects:</div>&nbsp;
            ${parseRef.on ? `on ${megaParsingFuckery.makeConditionTargetBox(parseRef.on,initialCounter)}` : ""}
        </div>
        <div class="modifierDetailsBox">
            ${getStandardNameDisplay(initialCounter,parseRef.whitelist,"Whitelist Targets",true)}

            ${getStandardNameDisplay(initialCounter,parseRef.whitelistTag,"Whitelist Tag")}
            ${getStandardNameDisplay(initialCounter,parseRef.whitelistType,"Whitelist Type")}
            ${getStandardNameDisplay(initialCounter,parseRef.isLock,"Lock")}

        </div>`;
    },
    "Set Action-State"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "on",
            "stateName",
            "state",
            "cancelQueueUlt",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Set Action-State");
        // initialCounter++;

        return `<div class="actionDetailBody2">
            <div class="rotationConditionOperatorHeaderInline">Set Action-State:</div>&nbsp;
            ${parseRef.stateName ?? ""} ${parseRef.on ? `on ${megaParsingFuckery.makeConditionTargetBox(parseRef.on,initialCounter)}` : ""}
        </div>
        <div class="modifierDetailsBox">
            ${getStandardNameDisplay(initialCounter,parseRef.state,"State")}
            ${getStandardNameDisplay(initialCounter,parseRef.cancelQueueUlt,"Cancel Queued Ults")}
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
            ${getStandardNameDisplay(initialCounter,parseRef.type,"Type")}
            ${getStandardNameDisplay(initialCounter,parseRef.typeValue,"Type Value")}
        </div>
        `;
    },
    "Condition Priority"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "overridePriority",
            "condition",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Condition Priority");
        // initialCounter++;

        const conditionObject = parseRef.condition;
        const conditionName = conditionObject?.name;

        let returnString = "" + (typeof conditionObject === "string" ? `<div class="rotationsConditionsBodyBox">${conditionObject}</div>` : "");
        const functionExists = megaParsingFuckery[conditionName];
        if (functionExists) {returnString += `<div class="rotationsConditionsBodyBox">` + functionExists(conditionObject,initialCounter) + `</div>`;}

        if (conditionObject && !returnString) {throw new Error(`Missing condition display-only definition in IF: ${conditionName}`)}




        return `<div class="actionDetailBody2">
            <div class="rotationConditionOperatorHeaderInline">Condition Priority:</div>
        </div>
        <div class="modifierDetailsBox">
            ${getStandardNameDisplay(initialCounter,parseRef.overridePriority,"Priority Tag")}

        </div>

        ${returnString != "" ? `<div class="actionDetailBody2">
            <div class="rotationConditionOperatorHeaderInline">Conditions</div>
        </div>
        ${returnString}` : ""}
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
            "checkOverride",
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



        const conditionObject3 = parseRef.checkOverride;
        const conditionName3 = conditionObject3?.name;

        let returnString3 = "" + (typeof conditionObject3 === "string" ? `<div class="rotationsConditionsBodyBox">${conditionObject3}</div>` : "");
        const functionExists3 = megaParsingFuckery[conditionName3];
        if (functionExists3) {returnString3 += `<div class="rotationsConditionsBodyBox">` + functionExists3(conditionObject3,initialCounter) + `</div>`;}

        if (conditionObject3 && !returnString3) {throw new Error(`Missing condition display-only definition in IF: ${conditionName3}`)}

        

        return `<div class="actionDetailBody2">
            <div class="rotationConditionOperatorHeaderInline">Inject Ability Use:</div>&nbsp;
            ${parseRef.abilityName}
        </div>
        <div class="modifierDetailsBox">
            ${getStandardNameDisplay(initialCounter,parseRef.abilitySource,"Ability Source",true)}
            ${getStandardNameDisplay(initialCounter,parseRef.abilityTarget,"Ability Target",true)}

            ${getStandardNameDisplay(initialCounter,parseRef.ownerState,"Owner State")}
            ${getStandardNameDisplay(initialCounter,parseRef.targetState,"Target State")}
            ${getStandardNameDisplay(initialCounter,parseRef.showInActionOrder,"Show in Action Order")}
            ${getStandardNameDisplay(initialCounter,parseRef.allowAbilityTriggers,"Ability Triggers Used")}
            ${getStandardNameDisplay(initialCounter,parseRef.priorityTag,"Priority Tag")}
            ${getStandardNameDisplay(initialCounter,parseRef.abortFlags,"Abort Flags")}
            ${getStandardNameDisplay(initialCounter,parseRef.customFlags,"Custom Flags")}
            ${getStandardNameDisplay(initialCounter,parseRef.canHitNonTargets,"Can Hit Non-Targets")}
            
            ${parseRef.valuePerStack != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Parameters:</div>&nbsp;
                ${parseRef.valuePerStack.displayLines ?? typeof parseRef.valuePerStack === "object" ? megaParsingFuckery.ValuePerStackParsing(parseRef.valuePerStack,initialCounter) : parseRef.valuePerStack}
            </div>` : ""}

        </div>

        ${returnString != "" ? `<div class="actionDetailBody2">
            <div class="rotationConditionOperatorHeaderInline">Pre-Check</div>
        </div>
        ${returnString}` : ""}

        ${returnString3 != "" ? `<div class="actionDetailBody2">
            <div class="rotationConditionOperatorHeaderInline">Check Override</div>
        </div>
        ${returnString3}` : ""}

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
            "abilityName",
            "subAbilityIndex",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Update Ability Enhance Button");

        // initialCounter++;
        return `<div class="actionDetailBody">
            <div class="rotationConditionOperatorHeaderInline">${parseRef.name}:</div>&nbsp;
            ${parseRef.display} ENHANCE on ${parseRef.abilityName} on ${megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter)}
        </div>
        <div class="modifierDetailsBox">
            ${getStandardNameDisplay(initialCounter,parseRef.subAbilityIndex,"Sub-Ability Index")}
        </div>`;
    },
    "Skill Effect"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "skillType",
            "activeSkill",
            "target",
            "invertCondition",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Skill Effect");

        // initialCounter++;
        return `<div class="actionDetailBody">
            <div class="rotationConditionOperatorHeaderInline">${parseRef.name}:</div>&nbsp;
            ${parseRef.invertCondition ? "NOT " : ""}${parseRef.skillType}
        </div>
        <div class="modifierDetailsBox">
            ${getStandardNameDisplay(initialCounter,parseRef.target,"Target",true)}
            ${getStandardNameDisplay(initialCounter,parseRef.activeSkill,"Active Skill")}
        </div>`;
    },
    "Skill Type"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "skillType",
            "activeSkill",
            "invertCondition",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Skill Type");

        // initialCounter++;
        return `<div class="actionDetailBody">
            <div class="rotationConditionOperatorHeaderInline">${parseRef.name}:</div>&nbsp;
            ${parseRef.invertCondition ? "NOT " : ""}${parseRef.skillType}
        </div>
        <div class="modifierDetailsBox">
            ${getStandardNameDisplay(initialCounter,parseRef.activeSkill,"Active Skill")}
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
            ${parseRef.invertCondition ? "NOT " : ""}${parseRef.attackTypes} ${parseRef.target ? `on ${megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter)}` : ""}
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
            ${getStandardNameDisplay(initialCounter,parseRef.statusType,"Status Type")}
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
            ${getStandardNameDisplay(initialCounter,parseRef.casterFilter,"Caster Filter",true)}
        </div>`;
    },
    "Enemy Team is Dead"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            // "target",
            // "modifier",
            "invertCondition",
            // "casterFilter",
            // "justAddedOrActive",
            // "includePreDeath",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Enemy Team is Dead");

        // initialCounter++;
        return `<div class="actionDetailBody">
            <div class="rotationConditionOperatorHeaderInline">${parseRef.name}:</div>&nbsp;
            ${parseRef.invertCondition ? "NOT " : ""}
        </div>
        <div class="modifierDetailsBox">
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
            ${parseRef.invertCondition ? "NOT " : ""}on ${megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter)}
        </div>
        <div class="modifierDetailsBox">
            ${getStandardNameDisplay(initialCounter,parseRef.justAddedOrActive,"Needs Active or Just Added")}
            ${getStandardNameDisplay(initialCounter,parseRef.includePreDeath,"Include Pre-Death")}

            ${getStandardNameDisplay(initialCounter,parseRef.casterFilter,"Caster Filter",true)}
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
    "Is Character-Change Target"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "target",
            // "modifier",
            "invertCondition",
            // "casterFilter",
            // "justAddedOrActive",
            // "includePreDeath",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Is Character-Change Target");

        // initialCounter++;
        return `<div class="actionDetailBody">
            <div class="rotationConditionOperatorHeaderInline">${parseRef.name}:</div>&nbsp;
            ${parseRef.invertCondition ? "NOT " : ""}on ${megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter)}
        </div>
        <div class="modifierDetailsBox">
            ${getStandardNameDisplay(initialCounter,parseRef.justAddedOrActive,"Needs Active or Just Added")}
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
            ${parseRef.modifier} ${parseRef.invertCondition ? "NOT " : ""}on ${megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter)}
        </div>
        <div class="modifierDetailsBox">
            ${getStandardNameDisplay(initialCounter,parseRef.justAddedOrActive,"Needs Active or Just Added")}
            ${getStandardNameDisplay(initialCounter,parseRef.includePreDeath,"Include Pre-Death")}
            ${getStandardNameDisplay(initialCounter,parseRef.casterFilter,"Caster Filter",true)}
        </div>`;
    },
    "Check String Value"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "value",
            "target",
            "invertCondition"
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Check String Value");

        // initialCounter++;
        return `<div class="actionDetailBody">
            <div class="rotationConditionOperatorHeaderInline">Check String Value:</div>&nbsp;
            ${parseRef.invertCondition ? "(Inverted) " : ""}
        </div>
        <div class="modifierDetailsBox">
            ${getStandardNameDisplay(initialCounter,parseRef.value,"Value to Check")}
            ${getStandardNameDisplay(initialCounter,parseRef.target,"Target",true)}
        </div>`;
    },
    "Check Boolean Value"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "value",
            "target",
            "invertCondition"
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Check Boolean Value");

        // initialCounter++;
        return `<div class="actionDetailBody">
            <div class="rotationConditionOperatorHeaderInline">Check Boolean Value:</div>&nbsp;
            ${parseRef.invertCondition ? "(Inverted) " : ""}
        </div>
        <div class="modifierDetailsBox">
            ${getStandardNameDisplay(initialCounter,parseRef.value,"Value to Check")}
            ${getStandardNameDisplay(initialCounter,parseRef.target,"Target",true)}
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
            ${parseRef.flagName} ${parseRef.invertCondition ? "(Inverted) " : ""} ${parseRef.target ? `on ${megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter)}` : ""}
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
            ${parseRef.triggerName} on ${megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter)}
        </div>`;
    },
    "Has Exo-Toughness"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            // "target",
            "target",
            "invertCondition"
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Has Exo-Toughness");

        // initialCounter++;
        return `<div class="actionDetailBody">
            <div class="rotationConditionOperatorHeaderInline">${parseRef.name}:</div>&nbsp;
            ${parseRef.invertCondition ? "NOT " : ""}on ${megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter)}
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
            "justAddedOrLiving",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Has Flag");

        // initialCounter++;
        return `<div class="actionDetailBody">
            <div class="rotationConditionOperatorHeaderInline">${parseRef.name}:</div>&nbsp;
            ${parseRef.flagName} ${parseRef.invertCondition ? "NOT " : ""}on ${megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter)}
        </div>
        <div class="modifierDetailsBox">
            ${getStandardNameDisplay(initialCounter,parseRef.casterFilter,"Caster Filter",true)}
            ${getStandardNameDisplay(initialCounter,parseRef.justAddedOrLiving,"Just Added/Living")}
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
            ${getStandardNameDisplay(initialCounter,parseRef.modifierName,"Modifier")}
            ${getStandardNameDisplay(initialCounter,parseRef.target,"Target",true)}
            ${getStandardNameDisplay(initialCounter,parseRef.casterFilter,"Caster Filter",true)}
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
            ${getStandardNameDisplay(initialCounter,parseRef.modifierName,"Modifier")}

            ${getStandardNameDisplay(initialCounter,parseRef.target,"Target",true)}
            ${getStandardNameDisplay(initialCounter,parseRef.casterFilter,"Caster Filter",true)}
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
            from ${parseRef.caster} to ${parseRef.invertCondition ? "(INVERTED) " : ""}${megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter)}
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
            ${getStandardNameDisplay(initialCounter,parseRef.useActive,"Use Active Skill")}
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
            ${getStandardNameDisplay(initialCounter,parseRef.assignOwner,"Owner Assign",true)}

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
            ${getStandardNameDisplay(initialCounter,parseRef.threshold,"Threshold")}
            ${getStandardNameDisplay(initialCounter,parseRef.lockHolder,"Lock Holder")}
            ${getStandardNameDisplay(initialCounter,parseRef.target,"Target",true)}
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
            "onlyDispel",
            "toRemove",
            "counterKey",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Dispel Debuffs");

        // initialCounter++;
        return `<div class="actionDetailBody">
            <div class="rotationConditionOperatorHeaderInline">${parseRef.name}:</div>&nbsp;
            ${megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter)}
        </div>
        <div class="modifierDetailsBox">

            ${getStandardNameDisplay(initialCounter,parseRef.typeOverride,"Status Type")}
            ${getStandardNameDisplay(initialCounter,parseRef.dispelCount,"Quantity")}
            ${getStandardNameDisplay(initialCounter,parseRef.counterKey,"Quantity Key")}
            ${getStandardNameDisplay(initialCounter,parseRef.dispelOrder,"Order")}
            ${getStandardNameDisplay(initialCounter,parseRef.livingTargets,"Living Only")}
            ${getStandardNameDisplay(initialCounter,parseRef.silent,"Is Silent")}
            ${getStandardNameDisplay(initialCounter,parseRef.onlyDispel,"Only Dispel")}
            ${getStandardNameDisplay(initialCounter,parseRef.toRemove,"Removal List")}

        </div>`;
    },
    "Deal Toughness DMG"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "attacker",
            "defender",
            "value",

            "forceReduction",
            "ignoreAttackerBonuses",
            "canDelay",
            "livingState",
            "ToughnessDMGType",



            // "target",
            // "typeOverride",
            // "dispelCount",
            // "dispelOrder",
            // "livingTargets",
            // "silent",
            // "toRemove",
            // "counterKey",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Deal Toughness DMG");

        // initialCounter++;
        // console.log(parseRef.ToughnessDMGType,"checker")
        return `<div class="actionDetailBody">
            <div class="rotationConditionOperatorHeaderInline">${parseRef.name}:</div>&nbsp;
            
        </div>
        <div class="modifierDetailsBox">
            ${getStandardNameDisplay(initialCounter,parseRef.value,"Value")}

            ${getStandardNameDisplay(initialCounter,parseRef.attacker,"Attacker",true)}
            ${getStandardNameDisplay(initialCounter,parseRef.defender,"Defender",true)}

            ${getStandardNameDisplay(initialCounter,parseRef.forceReduction,"Force Reduction")}
            ${getStandardNameDisplay(initialCounter,parseRef.ignoreAttackerBonuses,"Ignore Attacker Bonuses")}
            ${getStandardNameDisplay(initialCounter,parseRef.canDelay,"Can Delay")}
            ${getStandardNameDisplay(initialCounter,parseRef.livingState,"Living State")}
            
            ${parseRef.ToughnessDMGType != undefined && (typeof parseRef?.ToughnessDMGType === "object" ? parseRef.ToughnessDMGType.name === "Target Name" : true) ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Toughness DMG Type:</div>&nbsp;
                ${megaParsingFuckery.makeConditionTargetBox(parseRef.ToughnessDMGType,initialCounter)}
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
            ${megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter)}
        </div>
        <div class="modifierDetailsBox">
            ${getStandardNameDisplay(initialCounter,parseRef.affectedTeam,"Affected Team")}
        </div>`;
    },
    "Update Max Wave Count"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "add",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Update Max Wave Count");
        
        return `<div class="actionDetailBody2">
            <div class="rotationConditionOperatorHeaderInline">Update Max Wave Count:</div>&nbsp;
            ${megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter)}
        </div>
        <div class="modifierDetailsBox">
            ${getStandardNameDisplay(initialCounter,parseRef.add,"Add")}
        </div>
        `;
    },
    "Update Surging Grit[PF]"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "current",
            "max",
            "delta",
            "type",
            "text",
            "phaseType",
            "extra",
            "reachedLimit",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Update Surging Grit[PF]");
        
        return `<div class="actionDetailBody2">
            <div class="rotationConditionOperatorHeaderInline">Update Surging Grit[PF]:</div>&nbsp;
            ${megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter)}
        </div>
        <div class="modifierDetailsBox">
            ${getStandardNameDisplay(initialCounter,parseRef.current,"Current")}
            ${getStandardNameDisplay(initialCounter,parseRef.max,"Max")}
            ${getStandardNameDisplay(initialCounter,parseRef.delta,"Change")}
            ${getStandardNameDisplay(initialCounter,parseRef.extra,"Extra")}
            ${getStandardNameDisplay(initialCounter,parseRef.type,"Type")}
            ${getStandardNameDisplay(initialCounter,parseRef.reachedLimit,"Reached Limit")}
            ${getStandardNameDisplay(initialCounter,parseRef.phaseType,"Phase Type")}
            ${getStandardNameDisplay(initialCounter,parseRef.text,"Text")}
        </div>
        `;
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
            ${megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter)}
        </div>
        <div class="modifierDetailsBox">
            ${getStandardNameDisplay(initialCounter,parseRef.healer,"Healer",true)}

            ${getStandardNameDisplay(initialCounter,parseRef.healPercent,"Heal%")}
            ${getStandardNameDisplay(initialCounter,parseRef.healFlat,"Heal Flat")}
            ${getStandardNameDisplay(initialCounter,parseRef.EnergyGainPercent,"Energy Split")}
            ${getStandardNameDisplay(initialCounter,parseRef.formula,"Heal Formula")}
            ${getStandardNameDisplay(initialCounter,parseRef.livingOnly,"Living Only")}
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
            ${megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter)}
        </div>
        <div class="modifierDetailsBox">
            ${getStandardNameDisplay(initialCounter,parseRef.clearNegativeHP,"Clears Negative HP")}
            ${getStandardNameDisplay(initialCounter,parseRef.setValue,"Heal Flat")}
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
            ${getStandardNameDisplay(initialCounter,parseRef.useActiveAbility,"Current Active Ability")}
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
            ${parseRef.time?.displayLines ?? parseRef.time} ${parseRef.on ? `on ${megaParsingFuckery.makeConditionTargetBox(parseRef.on,initialCounter)}` : ""}
        </div>
        <div class="modifierDetailsBox">
            ${getStandardNameDisplay(initialCounter,parseRef.show,"Show")}
            ${getStandardNameDisplay(initialCounter,parseRef.enhanced,"Enhanced Time")}
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
            ${megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter)}${parseRef.living ? "(Living)" : ""}
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
            ${megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter)}${parseRef.living ? "(Living)" : ""}
        </div>
        `;
    },
    "Automatically use Ultimate"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "target",
            "enable",
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
            ${megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter)}${parseRef.living ? "(Living)" : ""}
        </div>
        <div class="modifierDetailsBox">
            ${getStandardNameDisplay(initialCounter,parseRef.enable,"Enable")}
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
            on ${megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter)}${parseRef.living ? "(Living)" : ""}
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
            ${megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter)}${parseRef.living ? "(Living)" : ""}
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
            ${parseRef.invertCondition ? "NOT " : ""}${megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter)}${parseRef.living ? "(Living)" : ""}
        </div>
        <div class="modifierDetailsBox">
            ${getStandardNameDisplay(initialCounter,parseRef.lockHolder,"Lock Holder")}
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
            ${parseRef.invertCondition ? "NOT " : ""}${megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter)}${parseRef.living ? "(Living)" : ""}
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
            ${parseRef.invertCondition ? "NOT " : ""} ${megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter)}${parseRef.living ? "(Living)" : ""}
        </div>
        <div class="modifierDetailsBox">
            ${getStandardNameDisplay(initialCounter,parseRef.display,"Display")}
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
            ${parseRef.invertCondition ? "NOT " : ""} ${megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter)}${parseRef.living ? "(Living)" : ""}
        </div>
        <div class="modifierDetailsBox">
            ${getStandardNameDisplay(initialCounter,parseRef.types,"Types")}
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
            ${getStandardNameDisplay(initialCounter,parseRef.target,"Target",true)}
            ${getStandardNameDisplay(initialCounter,parseRef.living,"Living")}
        </div>
        `;
    },
    "Destroy Battle Entity"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "target",
            "identifier",
            
            // "healPercent",
            // "formula",
            // "value1",
            // "compareType",
            // "value2"
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Destroy Battle Entity");


        
        return `<div class="actionDetailBody2">
            <div class="rotationConditionOperatorHeaderInline">Destroy Battle Entity:</div>
        </div>
        <div class="modifierDetailsBox">
            ${getStandardNameDisplay(initialCounter,parseRef.target,"Target",true)}
            ${getStandardNameDisplay(initialCounter,parseRef.identifier,"Identifier")}
        </div>
        `;
    },
    "Is Sub-Target in HP-Share Group"(parseRef,initialCounter) {
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
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Is Sub-Target in HP-Share Group");


        
        return `<div class="actionDetailBody2">
            <div class="rotationConditionOperatorHeaderInline">Is Sub-Target in HP-Share Group:</div>&nbsp;
            ${parseRef.invertCondition ? "NOT " : ""} ${megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter)}${parseRef.living ? "(Living)" : ""}
        </div>
        `;
    },
    "Add Target by Aggro"(parseRef,initialCounter) {return megaParsingFuckery["Add Target by Obscure Bullshit"](parseRef,initialCounter)},
    "Add Target by Player's Aim-List"(parseRef,initialCounter) {return megaParsingFuckery["Add Target by Obscure Bullshit"](parseRef,initialCounter)},
    "Add Target by Unique Identifier"(parseRef,initialCounter) {return megaParsingFuckery["Add Target by Obscure Bullshit"](parseRef,initialCounter)},
    "Add Target by Adventure Team Leader(Started Combat)"(parseRef,initialCounter) {return megaParsingFuckery["Add Target by Obscure Bullshit"](parseRef,initialCounter)},
    "Add Target by Adventure Player"(parseRef,initialCounter) {return megaParsingFuckery["Add Target by Obscure Bullshit"](parseRef,initialCounter)},
    "Add Target by Off-Stage"(parseRef,initialCounter) {return megaParsingFuckery["Add Target by Obscure Bullshit"](parseRef,initialCounter)},
    "Add Target by Team Entity"(parseRef,initialCounter) {return megaParsingFuckery["Add Target by Obscure Bullshit"](parseRef,initialCounter)},
    "Add Target by All Unselectable Targets"(parseRef,initialCounter) {return megaParsingFuckery["Add Target by Obscure Bullshit"](parseRef,initialCounter)},
    "Add Target by All Custom Unselectable Targets"(parseRef,initialCounter) {return megaParsingFuckery["Add Target by Obscure Bullshit"](parseRef,initialCounter)},

    
    "Adjust Target by Summoner"(parseRef,initialCounter) {return megaParsingFuckery["Add Target by Obscure Bullshit"](parseRef,initialCounter)},
    "Adjust Target by Part Sub-Targets"(parseRef,initialCounter) {return megaParsingFuckery["Add Target by Obscure Bullshit"](parseRef,initialCounter)},
    "Adjust Target by Adjacent Targets"(parseRef,initialCounter) {return megaParsingFuckery["Add Target by Obscure Bullshit"](parseRef,initialCounter)},
    "Adjust Target by Skill Point User"(parseRef,initialCounter) {return megaParsingFuckery["Add Target by Obscure Bullshit"](parseRef,initialCounter)},
    "Adjust Relative to First Target, Get Team"(parseRef,initialCounter) {return megaParsingFuckery["Add Target by Obscure Bullshit"](parseRef,initialCounter)},
    "Adjust Relative to Target, Get Team"(parseRef,initialCounter) {return megaParsingFuckery["Add Target by Obscure Bullshit"](parseRef,initialCounter)},
    "Adjust Target by Character Change Source"(parseRef,initialCounter) {return megaParsingFuckery["Add Target by Obscure Bullshit"](parseRef,initialCounter)},
    "Adjust Target by Character Change Target"(parseRef,initialCounter) {return megaParsingFuckery["Add Target by Obscure Bullshit"](parseRef,initialCounter)},
    "Adjust Target by Dummy Entity"(parseRef,initialCounter) {return megaParsingFuckery["Add Target by Obscure Bullshit"](parseRef,initialCounter)},
    "Adjust Target by Ability Target"(parseRef,initialCounter) {return megaParsingFuckery["Add Target by Obscure Bullshit"](parseRef,initialCounter)},

    

    "Add Target by Obscure Bullshit"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "target",
            "useRandomWhenFailed",
            "recursiveSearch",
            "identifier",
            "getLatest",
            "partID",
            "whichSide",
            "canFail",
            "excludeNonActionableEntities",
            "getHostileTeamInstead",
            "removeUnselectable",
            "reason",
            "team",
            "includeSelf",
            "autoCreate",
            "entityName",
            "errorIfFailed",
            "countSetting",
            // "healPercent",
            // "formula",
            // "value1",
            // "compareType",
            // "value2"
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,parseRef.name + "[[Add Target by Obscure Bullshit]]");


        
        return `<div class="actionDetailBody2">
            <div class="rotationConditionOperatorHeaderInline">${parseRef.name}:</div>&nbsp;
            ${parseRef.target ? megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter) : ""}
        </div>
        <div class="modifierDetailsBox">

            ${getStandardNameDisplay(initialCounter,parseRef.useRandomWhenFailed,"Random when Failed")}
            ${getStandardNameDisplay(initialCounter,parseRef.countSetting,"Count Setting")}
            ${getStandardNameDisplay(initialCounter,parseRef.errorIfFailed,"Error when Failed")}
            ${getStandardNameDisplay(initialCounter,parseRef.autoCreate,"Auto-Create")}
            ${getStandardNameDisplay(initialCounter,parseRef.entityName,"Entity Name")}
            ${getStandardNameDisplay(initialCounter,parseRef.recursiveSearch,"Recursive Search")}
            ${getStandardNameDisplay(initialCounter,parseRef.identifier,"Identifier")}
            ${getStandardNameDisplay(initialCounter,parseRef.getLatest,"Get Latest")}
            ${getStandardNameDisplay(initialCounter,parseRef.partID,"Part ID")}
            ${getStandardNameDisplay(initialCounter,parseRef.whichSide,"Which Side")}
            ${getStandardNameDisplay(initialCounter,parseRef.canFail,"Can Fail")}
            ${getStandardNameDisplay(initialCounter,parseRef.getHostileTeamInstead,"Get Hostile Team Instead")}
            ${getStandardNameDisplay(initialCounter,parseRef.removeUnselectable,"Remove Unselectable")}
            ${getStandardNameDisplay(initialCounter,parseRef.reason,"Reason")}
            ${getStandardNameDisplay(initialCounter,parseRef.team,"Team")}
            ${getStandardNameDisplay(initialCounter,parseRef.includeSelf,"Include Self")}
            
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
            ${parseRef.invertCondition ? "NOT " : ""} ${megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter)}${parseRef.living ? "(Living)" : ""}
        </div>
        `;
    },
    "Get Prior Entity Defined by Index"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "index",
            // "living",
            // "invertCondition",
            
            // "healPercent",
            // "formula",
            // "value1",
            // "compareType",
            // "value2"
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Get Prior Entity Defined by Index");


        
        return `<div class="actionDetailBody2">
            <div class="rotationConditionOperatorHeaderInline">Get Prior Entity Defined by Index:</div>&nbsp;
            ${parseRef.index?.displayLines ?? parseRef.index}
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
            ${megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter)} is hostile to ${megaParsingFuckery.makeConditionTargetBox(parseRef.target2,initialCounter)}
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
            ${megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter)}
        </div>
        `;
    },
    "Has Unique Name"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "target",
            "uniqueName",

            "invertCondition",
            
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Has Unique Name");

        return `<div class="actionDetailBody2">
            <div class="rotationConditionOperatorHeaderInline">Has Unique Name:</div>&nbsp;
            ${parseRef.invertCondition ? "NOT on " : ""}${megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter)}
        </div>
        <div class="modifierDetailsBox">
            ${getStandardNameDisplay(initialCounter,parseRef.uniqueName,"Unique Identifier")}
        </div>
        `;
    },
    "Assign Unique Name"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "target",
            "uniqueName",

            "unknownBoolean",
            
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Assign Unique Name");

        return `<div class="actionDetailBody2">
            <div class="rotationConditionOperatorHeaderInline">Assign Unique Name:</div>&nbsp;
            ${megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter)}
        </div>
        <div class="modifierDetailsBox">
            ${getStandardNameDisplay(initialCounter,parseRef.uniqueName,"Unique Identifier")}
            ${getStandardNameDisplay(initialCounter,parseRef.unknownBoolean,"Unknown Boolean")}

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
            ${megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter)}
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
            ${megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter)}
        </div>
        <div class="modifierDetailsBox">
            ${getStandardNameDisplay(initialCounter,parseRef.preventWhen0,"Prevent when 0")}
        </div>
        `;
    },
    "Reset Toughness"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "target",
            "preventWhen0",
            "skipTeamLock",

            "addFlat",
            "constantValue",
            
            // "healPercent",
            // "formula",
            // "value1",
            // "compareType",
            // "value2"
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Reset Toughness");

        return `<div class="actionDetailBody2">
            <div class="rotationConditionOperatorHeaderInline">Reset Toughness:</div>&nbsp;
            ${megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter)}
        </div>
        <div class="modifierDetailsBox">
            ${getStandardNameDisplay(initialCounter,parseRef.preventWhen0,"Prevent when 0")}
            ${getStandardNameDisplay(initialCounter,parseRef.skipTeamLock,"Bypass Team Lock")}
            ${getStandardNameDisplay(initialCounter,parseRef.addFlat,"Add Flat")}
            ${getStandardNameDisplay(initialCounter,parseRef.constantValue,"Constant Value")}
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
                ${getStandardNameDisplay(initialCounter,parseRef.dmgCountsForTeam,"DMG Counts for Team")}
                ${getStandardNameDisplay(initialCounter,parseRef.assignOwner,"Assign Owner",true)}
                ${getStandardNameDisplay(initialCounter,parseRef.statSource,"Stat Source",true)}

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
            ${megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter)}
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
            ${getStandardNameDisplay(initialCounter,parseRef.blockTeams,"Block Teams")}
            ${getStandardNameDisplay(initialCounter,parseRef.entityType,"Entity Type")}
        </div>
        `;
    },
    "Stack Exo-Toughness"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "exoPercent",
            "exoFlat",
            // "buffID",
            // "variables",
            
            // "healPercent",
            // "formula",
            // "value1",
            // "compareType",
            // "value2"
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Stack Exo-Toughness");

        // const conditionObject = parseRef.conditions;
        // const conditionName = conditionObject?.name;

        // let returnString = "" + (typeof conditionObject === "string" ? `<div class="rotationsConditionsBodyBox">${conditionObject}</div>` : "");
        // const functionExists = megaParsingFuckery[conditionName];
        // if (functionExists) {returnString += `<div class="rotationsConditionsBodyBox">` + functionExists(conditionObject,initialCounter) + `</div>`;}

        // if (conditionObject && !returnString) {throw new Error(`Missing condition display-only definition in IF: ${conditionName}`)}

        
        return `<div class="actionDetailBody2">
            <div class="rotationConditionOperatorHeaderInline">Stack Exo-Toughness:</div>&nbsp;
        </div>
        <div class="modifierDetailsBox">
            ${getStandardNameDisplay(initialCounter,parseRef.exoPercent,"Exo-Percent")}
            ${getStandardNameDisplay(initialCounter,parseRef.exoFlat,"Exo-Flat")}
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
            ${megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter)}
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
            ${megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter)}
        </div>
        <div class="modifierDetailsBox">
            ${getStandardNameDisplay(initialCounter,parseRef.amount,"Stay in Team Label")}
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
            ${megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter)}
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
            ${getStandardNameDisplay(initialCounter,parseRef.state,"Buff State")}
            ${getStandardNameDisplay(initialCounter,parseRef.amount,"Count")}
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
    "Has Weakness Preview"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "target",
            "DamageType",
            "invertCondition",
            "weaknessFilter",
            "anyMatchingTarget",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Has Weakness Preview");

        // initialCounter++;
        return `<div class="actionDetailBody">
            <div class="rotationConditionOperatorHeaderInline">${parseRef.name}:</div>&nbsp;
            ${parseRef.DamageType} Weakness is${parseRef.invertCondition ? " NOT" : ""} on ${megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter)}
        </div>
        <div class="modifierDetailsBox">
            ${getStandardNameDisplay(initialCounter,parseRef.weaknessFilter,"Weakness Filter")}
            ${getStandardNameDisplay(initialCounter,parseRef.anyMatchingTarget,"Any Matching Target")}
        </div>`;
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
            ${parseRef.DamageType} Weakness is${parseRef.invertCondition ? " NOT" : ""} on ${megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter)}
        </div>
        <div class="modifierDetailsBox">
            ${getStandardNameDisplay(initialCounter,parseRef.weaknessFilter,"Weakness Filter")}
            ${getStandardNameDisplay(initialCounter,parseRef.anyMatchingTarget,"Any Matching Target")}

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
            ${parseRef.DamageType.sourceType ?? parseRef.DamageType} Element is${parseRef.invertCondition ? " NOT" : ""} on ${megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter)}
        </div>`;
    },
    "Is Entity Type"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "target",
            "type",
            "invertCondition",
            "livingState",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Is Entity Type");

        // initialCounter++;
        return `<div class="actionDetailBody">
            <div class="rotationConditionOperatorHeaderInline">${parseRef.name}:</div>&nbsp;
            ${megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter)} ${parseRef.invertCondition ? "(NOT)" : ""}= ${parseRef.type}
        </div>
        <div class="modifierDetailsBox">
            ${getStandardNameDisplay(initialCounter,parseRef.livingState,"Living State")}
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
    "Establish Group Relationship"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "target",
            "subTarget",
            "relatedGroup",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Sever Group Relationship");

        // initialCounter++;
        return `<div class="actionDetailBody">
            <div class="rotationConditionOperatorHeaderInline">${parseRef.name}:</div>
        </div>
        <div class="modifierDetailsBox">
            ${getStandardNameDisplay(initialCounter,parseRef.target,"Main Targets",true)}
            ${getStandardNameDisplay(initialCounter,parseRef.subTarget,"Sub Targets",true)}
            ${getStandardNameDisplay(initialCounter,parseRef.relatedGroup,"Related Group")}

        </div>`;
    },
    "Sever Group Relationship"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "target",
            "relatedGroup",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Sever Group Relationship");

        // initialCounter++;
        return `<div class="actionDetailBody">
            <div class="rotationConditionOperatorHeaderInline">${parseRef.name}:</div>
        </div>
        <div class="modifierDetailsBox">
            ${getStandardNameDisplay(initialCounter,parseRef.target,"Target",true)}
            ${getStandardNameDisplay(initialCounter,parseRef.relatedGroup,"Related Group")}

        </div>`;
    },
    "Is Related Summoned Entity"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "target",
            "target2",
            // "of",
            "invertCondition",
            "allGenerated",
            // "mustBeAlive2",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Is Related Summoned Entity");

        // initialCounter++;
        return `<div class="actionDetailBody">
            <div class="rotationConditionOperatorHeaderInline">${parseRef.name}:</div>&nbsp;
            ${parseRef.invertCondition ? `NOT ` : ""}
        </div>
        <div class="modifierDetailsBox">
            ${getStandardNameDisplay(initialCounter,parseRef.target,"Summoner",true)}
            ${getStandardNameDisplay(initialCounter,parseRef.target2,"Summon",true)}
            ${getStandardNameDisplay(initialCounter,parseRef.allGenerated,"All Generated")}

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
            ${parseRef.invertCondition ? "NOT " : ""}includes ${megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter)}${parseRef.mustBeAlive2 ? "(Living)" : ""}
        </div>
        <div class="modifierDetailsBox">
            ${getStandardNameDisplay(initialCounter,parseRef.of,"Target Family Reference",true)}
            ${getStandardNameDisplay(initialCounter,parseRef.mustBeAlive1,"Living 2")}
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
            ${parseRef.invertCondition ? "NOT " : ""}includes ${megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter)}
        </div>
        <div class="modifierDetailsBox">
            ${getStandardNameDisplay(initialCounter,parseRef.group,"Target Family Reference",true)}
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
            ${parseRef.invertCondition ? "NOT " : ""} ${megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter)}
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
            ${parseRef.invertCondition ? "NOT " : ""}${parseRef.target ? ` from ${megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter)}` : ""} 
        </div>
        <div class="modifierDetailsBox">
            ${getStandardNameDisplay(initialCounter,parseRef.actionType,"Action Type")}
            ${getStandardNameDisplay(initialCounter,parseRef.tag,"Tag")}
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
            ${parseRef.invertCondition ? "NOT " : ""} in relation to ${megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter)}
        </div>
        <div class="modifierDetailsBox">
            ${getStandardNameDisplay(initialCounter,parseRef.includeNonTargets,"With Non-Targets")}
        </div>`;
    },
    "Is Current Ability Target"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "target",
            // "team",
            "invertCondition",
            "dynamic",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Is Current Ability Target");

        // initialCounter++;
        return `<div class="actionDetailBody">
            <div class="rotationConditionOperatorHeaderInline">${parseRef.name}:</div>&nbsp;
            ${parseRef.invertCondition ? "NOT " : ""}${megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter)}
        </div>
        <div class="modifierDetailsBox">
            ${getStandardNameDisplay(initialCounter,parseRef.dynamic,"Dynamic")}
        </div>`;
    },
    "Is Body Part Owner"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "target",
            // "team",
            "invertCondition",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Is Body Part Owner");

        // initialCounter++;
        return `<div class="actionDetailBody">
            <div class="rotationConditionOperatorHeaderInline">${parseRef.name}:</div>&nbsp;
           ${parseRef.invertCondition ? "NOT " : ""}${megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter)}
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
            target team [${parseRef.team}] ${parseRef.invertCondition ? "NOT " : ""}includes ${megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter)}
        </div>`;
    },
    "Is Part Of Team Location"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "target",
            "team",
            "location",
            "invertCondition",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Is Part Of Team Location");

        // initialCounter++;
        return `<div class="actionDetailBody">
            <div class="rotationConditionOperatorHeaderInline">${parseRef.name}:</div>&nbsp;
            target team [${parseRef.team}] ${parseRef.invertCondition ? "NOT " : ""}includes ${megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter)}
        </div>
        <div class="modifierDetailsBox">
            ${getStandardNameDisplay(initialCounter,parseRef.location,"Location")}
        </div>`;
    },
    "Is Matching Team Count"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "countType",
            // "team",
            // "location",
            "invertCondition",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Is Matching Team Count");

        // initialCounter++;
        return `<div class="actionDetailBody">
            <div class="rotationConditionOperatorHeaderInline">${parseRef.name}:</div>&nbsp;
            ${parseRef.invertCondition ? "NOT " : ""}
        </div>
        <div class="modifierDetailsBox">
            ${getStandardNameDisplay(initialCounter,parseRef.countType,"Count Type")}
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

            ${getStandardNameDisplay(initialCounter,parseRef.target,"Target",true)}
            ${getStandardNameDisplay(initialCounter,parseRef.partOf,"Part of Target Family",true)}
            ${getStandardNameDisplay(initialCounter,parseRef.exclude,"Excludes",true)}

            ${getStandardNameDisplay(initialCounter,parseRef.minOrMax,"Compare Operation")}
            ${getStandardNameDisplay(initialCounter,parseRef.compareValue,"Compare Stat")}
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
            target family [${parseRef.partOf}] includes ${megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter)}, and excludes ${megaParsingFuckery.makeConditionTargetBox(parseRef.exclude,initialCounter)}
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

            "from",
            "to",
            "team",

            "valueType",
            "contextScope",
            "invertCondition",
            "includeInjectedActions",
            "includeExoToughness",
            "livingOnly",
            "conditions",
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
            ${parseRef.value1?.displayLines ?? parseRef.value1 ?? ""}${parseRef.valueType ? `(Type: ${parseRef.valueType})` : ""}${parseRef.changeIndex != undefined ? `(Index[${parseRef.changeIndex}])` : ""} ${parseRef.invertCondition ? "NOT_" : ""}${parseRef.compareType} ${parseRef.value2?.displayLines ?? parseRef.value2}
        </div>
        <div class="modifierDetailsBox">

            ${getStandardNameDisplay(initialCounter,parseRef.target,"Target",true)}
            ${getStandardNameDisplay(initialCounter,parseRef.skillOwner,"Skill Owner Target",true)}
            ${getStandardNameDisplay(initialCounter,parseRef.from,"From",true)}
            ${getStandardNameDisplay(initialCounter,parseRef.to,"To",true)}

            ${getStandardNameDisplay(initialCounter,parseRef.contextScope,"Context")}
            ${getStandardNameDisplay(initialCounter,parseRef.team,"Team")}
            ${getStandardNameDisplay(initialCounter,parseRef.includeInjectedActions,"Include Injected Actions")}
            ${getStandardNameDisplay(initialCounter,parseRef.includeExoToughness,"Include Exo-Toughness")}
            ${getStandardNameDisplay(initialCounter,parseRef.livingOnly,"Living Only")}

            ${returnString ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Conditions:</div>
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
            Targets${parseRef.livingTargets ? "(Living)" : ""}${parseRef.invertCondition ? " NOT" : ""} in ${parseRef.target ? `${megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter)}` : ""} ${parseRef.compareType} ${parseRef.value2.displayLines ?? parseRef.value2} 
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
            "yieldWhenNotEnemy",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Compare: Variable");
        
        // initialCounter++;
        return `<div class="actionDetailBody">
            <div class="rotationConditionOperatorHeaderInline">${parseRef.name}:</div>&nbsp;
            Targets${parseRef.livingTargets ? "(Living)" : ""}${parseRef.invertCondition ? " NOT" : ""} in ${parseRef.target ? `${megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter)}` : ""} ${parseRef.compareType} ${parseRef.value2.displayLines ?? parseRef.value2} 
        </div>
        <div class="modifierDetailsBox">

            ${getStandardNameDisplay(initialCounter,parseRef.yieldWhenNotEnemy,"Still Yield when Not Enemy")}
            
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
            Targets ${parseRef.invertCondition ? "NOT " : ""}in ${parseRef.target ? `${megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter)}` : ""}
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
            ${parseRef.value1.displayLines ?? parseRef.value1} ${parseRef.compareType} ${parseRef.value2.displayLines ?? parseRef.value2} ${parseRef.target ? `on ${megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter)}` : ""}
        </div>`;
    },
    "Compare: Currency Wars Value"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "value1",
            "compareType",
            "value2",
            "target",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Compare: Currency Wars Value");

        // initialCounter++;
        return `<div class="actionDetailBody">
            <div class="rotationConditionOperatorHeaderInline">${parseRef.name}:</div>&nbsp;
            ${parseRef.value1.displayLines ?? parseRef.value1} ${parseRef.compareType} ${parseRef.value2.displayLines ?? parseRef.value2} ${parseRef.target ? `on ${megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter)}` : ""}
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
    "Force Team Target-Lock on Target"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "target",
            "team",
            "enable",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Force Team Target-Lock on Target");

        // const conditionObject = parseRef.conditions;
        // const conditionName = conditionObject?.name;

        // let returnString = "" + (typeof conditionObject === "string" ? `<div class="rotationsConditionsBodyBox">${conditionObject}</div>` : "");
        // const functionExists = megaParsingFuckery[conditionName];
        // if (functionExists) {returnString += `<div class="rotationsConditionsBodyBox">` + functionExists(conditionObject,initialCounter) + `</div>`;}

        // if (conditionObject && !returnString) {throw new Error(`Missing condition display-only definition in IF: ${conditionName}`)}
        
        return `<div class="actionDetailBody2">
            <div class="rotationConditionOperatorHeaderInline">Force Team Target-Lock on Target:</div>&nbsp;
            ${parseRef.enable ?? ""} on ${megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter)}
        </div>
        <div class="modifierDetailsBox">
            ${getStandardNameDisplay(initialCounter,parseRef.team,"Team")}
        </div>`;
    },
    "Entity Escape Battle"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "target",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Entity Escape Battle");

        // const conditionObject = parseRef.conditions;
        // const conditionName = conditionObject?.name;

        // let returnString = "" + (typeof conditionObject === "string" ? `<div class="rotationsConditionsBodyBox">${conditionObject}</div>` : "");
        // const functionExists = megaParsingFuckery[conditionName];
        // if (functionExists) {returnString += `<div class="rotationsConditionsBodyBox">` + functionExists(conditionObject,initialCounter) + `</div>`;}

        // if (conditionObject && !returnString) {throw new Error(`Missing condition display-only definition in IF: ${conditionName}`)}
        
        return `<div class="actionDetailBody2">
            <div class="rotationConditionOperatorHeaderInline">Entity Escape Battle:</div>&nbsp;
            ${megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter)}
        </div>
        <div class="modifierDetailsBox">
            ${getStandardNameDisplay(initialCounter,parseRef.reason,"Reason")}
        </div>`;
    },
    "Entity Exit Stage"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "target",
            "reason",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Entity Exit Stage");

        // const conditionObject = parseRef.conditions;
        // const conditionName = conditionObject?.name;

        // let returnString = "" + (typeof conditionObject === "string" ? `<div class="rotationsConditionsBodyBox">${conditionObject}</div>` : "");
        // const functionExists = megaParsingFuckery[conditionName];
        // if (functionExists) {returnString += `<div class="rotationsConditionsBodyBox">` + functionExists(conditionObject,initialCounter) + `</div>`;}

        // if (conditionObject && !returnString) {throw new Error(`Missing condition display-only definition in IF: ${conditionName}`)}
        
        return `<div class="actionDetailBody2">
            <div class="rotationConditionOperatorHeaderInline">Entity Exit Stage:</div>&nbsp;
            ${megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter)}
        </div>
        <div class="modifierDetailsBox">
            ${getStandardNameDisplay(initialCounter,parseRef.reason,"Reason")}
        </div>`;
    },
    "Force Target-Lock on Target"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "target",
            "enable",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Force Target-Lock on Target");

        // const conditionObject = parseRef.conditions;
        // const conditionName = conditionObject?.name;

        // let returnString = "" + (typeof conditionObject === "string" ? `<div class="rotationsConditionsBodyBox">${conditionObject}</div>` : "");
        // const functionExists = megaParsingFuckery[conditionName];
        // if (functionExists) {returnString += `<div class="rotationsConditionsBodyBox">` + functionExists(conditionObject,initialCounter) + `</div>`;}

        // if (conditionObject && !returnString) {throw new Error(`Missing condition display-only definition in IF: ${conditionName}`)}
        
        return `<div class="actionDetailBody2">
            <div class="rotationConditionOperatorHeaderInline">Force Target-Lock on Target:</div>&nbsp;
            ${parseRef.enable} on ${megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter)}
        </div>
        `;
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
            ${parseRef.enable} on ${megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter)}
        </div>
        `;
    },
    "Assign Target Battle-Location"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "target",
            "row",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Assign Target Battle-Location");

        // const conditionObject = parseRef.conditions;
        // const conditionName = conditionObject?.name;

        // let returnString = "" + (typeof conditionObject === "string" ? `<div class="rotationsConditionsBodyBox">${conditionObject}</div>` : "");
        // const functionExists = megaParsingFuckery[conditionName];
        // if (functionExists) {returnString += `<div class="rotationsConditionsBodyBox">` + functionExists(conditionObject,initialCounter) + `</div>`;}

        // if (conditionObject && !returnString) {throw new Error(`Missing condition display-only definition in IF: ${conditionName}`)}
        
        return `<div class="actionDetailBody2">
            <div class="rotationConditionOperatorHeaderInline">Assign Target Battle-Location:</div>&nbsp;
            ${megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter)}
        </div>
        <div class="modifierDetailsBox">
            ${getStandardNameDisplay(initialCounter,parseRef.row,"Row")}
            
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
            ${getStandardNameDisplay(initialCounter,parseRef.to,"Target",true)}

            ${getStandardNameDisplay(initialCounter,parseRef.duration,"Duration")}

            ${parseRef.valuePerStack != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Parameters:</div>&nbsp;
                ${parseRef.valuePerStack.displayLines ?? typeof parseRef.valuePerStack === "object" ? megaParsingFuckery.ValuePerStackParsing(parseRef.valuePerStack,initialCounter) : parseRef.valuePerStack}
            </div>` : ""}

            ${getStandardNameDisplay(initialCounter,parseRef.haloStatus,"Is Zone/Team Buff")}
            ${getStandardNameDisplay(initialCounter,parseRef.refModifier,"Reference Modifier")}
            ${getStandardNameDisplay(initialCounter,parseRef.aliveOnly,"Apply to Living Only")}
            ${getStandardNameDisplay(initialCounter,parseRef.includeBattleEvent,"Include Battle Events")}
            
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
                ${getStandardNameDisplay(initialCounter,parseRef.to,"Target",true)}

                ${getStandardNameDisplay(initialCounter,parseRef.referenceModifier,"Reference Modifier")}
                ${getStandardNameDisplay(initialCounter,parseRef.counter,"Counter")}
                ${getStandardNameDisplay(initialCounter,parseRef.duration,"Duration")}
                ${getStandardNameDisplay(initialCounter,parseRef.stackLimit,"Stack Limit")}
                ${getStandardNameDisplay(initialCounter,parseRef.stackFlag,"Stack FlagType")}
                ${getStandardNameDisplay(initialCounter,parseRef.baseChance,"Base Chance")}
                
                ${parseRef.valuePerStack != undefined ? `<div class="actionDetailBody2">
                    <div class="rotationConditionOperatorHeaderInline">Parameters:</div>&nbsp;
                    ${parseRef.valuePerStack.displayLines ?? typeof parseRef.valuePerStack === "object" ? megaParsingFuckery.ValuePerStackParsing(parseRef.valuePerStack,initialCounter) : parseRef.valuePerStack}
                </div>` : ""}

                ${getStandardNameDisplay(initialCounter,parseRef.addStacksPerTrigger,"Stacks/Trigger")}
                ${getStandardNameDisplay(initialCounter,parseRef.casterAssign,"Give Caster-tag To",true)}
                ${getStandardNameDisplay(initialCounter,parseRef.immediateEffect,"Benefit/Decrement Immediately")}
                ${getStandardNameDisplay(initialCounter,parseRef.needLiving,"Need Living")}
                ${getStandardNameDisplay(initialCounter,parseRef.silentAdd,"Silent Additions")}
                ${getStandardNameDisplay(initialCounter,parseRef.removeToBeAdded,"Remove to be Added")}

                
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
        //     ${parseRef.modifier} to ${megaParsingFuckery.makeConditionTargetBox(parseRef.to,initialCounter)}
        // </div>
        // `;
    },
    "ValuePerStackParsing"(parseRef,initialCounter) {
        let partialString = "";

        for (let objectKey in parseRef) {
            const currentValue = parseRef[objectKey];


            // megaParsingFuckery.makeConditionTargetBox(parseRef.hitOwner,initialCounter)

            const finalValue = typeof currentValue === "object" && currentValue.name === "Target Name" ? megaParsingFuckery.makeConditionTargetBox(currentValue,initialCounter) : currentValue;


            partialString += `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline smallFont">${objectKey}:</div>&nbsp;
                <span class="regValueBlue">${finalValue?.displayLines ?? finalValue}</span>
            </div>`
        }//regValueBlue

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
            "removeToBeAdded",
            // "value1",
            // "compareType",
            // "value2"
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Remove Events/Bonuses");

        // console.log(parseRef.to)
        return `<div class="actionDetailBody2Preview">
            <div class="rotationConditionOperatorHeaderInline">Remove Event/Bonus:</div>&nbsp;
            ${parseRef.modifier} from ${megaParsingFuckery.makeConditionTargetBox(parseRef.to,initialCounter)}
        </div>
        
        <div class="modifierDetailsBox">
            ${getStandardNameDisplay(initialCounter,parseRef.onlyRemoveOwnersInstance,"Only remove Owner's Application")}
            ${getStandardNameDisplay(initialCounter,parseRef.removeAllInstances,"Remove All Instances")}
            ${getStandardNameDisplay(initialCounter,parseRef.removeToBeAdded,"Remove to be Added")}
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
            "attackType",
            "dealAfterOriginialHit",

            "overrideDamageOwner",
            "overrideDamageStatSource",
            "postHitTaskList",
            "distributeEqually",

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
                    ${megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter)}
                </div>
            </summary>

            <div class="modifierDetailsBox">
                ${getStandardNameDisplay(initialCounter,parseRef.attackType,"Attack Type")}

                ${getStandardNameDisplay(initialCounter,parseRef.overrideDamageOwner,"Override Owner",true)}
                ${getStandardNameDisplay(initialCounter,parseRef.overrideDamageStatSource,"Override Stat-Provider",true)}


                ${getStandardNameDisplay(initialCounter,parseRef.canOverkill,"Can Overkill")}
                ${getStandardNameDisplay(initialCounter,parseRef.isConvertedDMG,"Is Converted DMG")}
                ${getStandardNameDisplay(initialCounter,parseRef.dealAfterOriginialHit,"Deal AFTER Original Hit/DMG")}
                ${getStandardNameDisplay(initialCounter,parseRef.distributeEqually,"Distribute Equally to All Targets")}

                
                
                
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
    getAttackTypeColoring(attackTypeName,justTheColor) {
        const knownAttackTypes = {
            "True DMG": "trueDMGColoring",
            "Imaginary": "ImaginaryDMGColoring",

            "Fire": "FireDMGColoring",
            "Ice": "IceDMGColoring",
            "Physical": "PhysicalDMGColoring",
            "Quantum": "QuantumDMGColoring",
            "Lightning": "LightningDMGColoring",
            "Thunder": "LightningDMGColoring",
            "Wind": "WindDMGColoring",
        }
        if (typeof attackTypeName != "string" || !knownAttackTypes[attackTypeName]) {return attackTypeName}

        const currentColoring = knownAttackTypes[attackTypeName];

        if (justTheColor) {return currentColoring}

        // trueDMGColoring
        return `<span class="${currentColoring}">${attackTypeName}</span>`;
        // return `<span style="gradient-text: linear-gradient(to bottom,${currentColoring.top},${currentColoring.bottom});">${attackTypeName}</span>`;
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
            "notAHit",
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


        // <img src="/HonkaiSR/icon/property/IconEnergyRecovery.png" class="characterDisplayLogStatIcon"></img>
        // `(${parseRef.DamageType})`


        const checkColoring = megaParsingFuckery.getAttackTypeColoring(parseRef.DamageType,true) ?? "";



        return `
        ${parseRef.Damage ? `<div class="actionDetailBody2">
            <div class="rotationConditionOperatorHeaderInline">DMG:</div>&nbsp;
            ${parseRef.Damage?.displayLines ?? parseRef.Damage} ${typeof parseRef.DamageType === "object" ? megaParsingFuckery.ValuePerStackParsing(parseRef.DamageType,initialCounter) : `<img src="/HonkaiSR/icon/element/${parseRef.DamageType}.png" class="characterDisplayLogStatIconElement"></img>`}
        </div>` : ""}
        ${parseRef.DamageBreak ? `<div class="actionDetailBody2">
            <div class="rotationConditionOperatorHeaderInline">Break DMG:</div>&nbsp;
            ${parseRef.DamageBreak?.displayLines ?? parseRef.DamageBreak} ${typeof parseRef.DamageType === "object" ? megaParsingFuckery.ValuePerStackParsing(parseRef.DamageType,initialCounter) : `<img src="/HonkaiSR/icon/element/${parseRef.DamageType}.png" class="characterDisplayLogStatIconElement"></img>`}
        </div>` : ""}
        <div class="modifierDetailsBox">
            ${getStandardNameDisplay(initialCounter,parseRef.HitSplit,"Hit-Split (Extra)")}
            ${getStandardNameDisplay(initialCounter,parseRef.Toughness,"Toughness")}
            ${getStandardNameDisplay(initialCounter,parseRef.EnergyGainPercent,"Energy Split")}
            ${getStandardNameDisplay(initialCounter,parseRef.Tags,"Tags")}
            
            ${parseRef.attackType != undefined ? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Attack Type:</div>&nbsp;
                ${megaParsingFuckery.getAttackTypeColoring(parseRef.attackType)}
            </div>` : ""}

            ${getStandardNameDisplay(initialCounter,parseRef.hitOwner,"Hit Owner",true)}

            ${parseRef.ToughnessDMGType != undefined  && parseRef.ToughnessDMGType.DamageType? `<div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">Toughness Element:</div>&nbsp;
                ${typeof parseRef.ToughnessDMGType?.DamageType === "object" ? megaParsingFuckery.ValuePerStackParsing(parseRef.ToughnessDMGType.DamageType,initialCounter) : `<img src="/HonkaiSR/icon/element/${parseRef.ToughnessDMGType.DamageType}.png" class="characterDisplayLogStatIconElement"></img>`}
            </div>` : ""}


            ${getStandardNameDisplay(initialCounter,parseRef.indirectDMG,"Indirect DMG")}
            ${getStandardNameDisplay(initialCounter,parseRef.notAHit,"Not a Hit")}
            
            ${getStandardNameDisplay(initialCounter,parseRef.dmgFormula,"DMG Scaling")}
            
            ${getStandardNameDisplay(initialCounter,parseRef.dmgFormulaFinal,"DMG Formula(Final)")}

            ${getStandardNameDisplay(initialCounter,parseRef.instanceTag,"Instance Tag")}
            ${getStandardNameDisplay(initialCounter,parseRef.keepDMGType,"Inherit DMG Type")}
            ${getStandardNameDisplay(initialCounter,parseRef.inheritTargetFrom,"Inherit Target")}
            
        </div>

        
        ${parseRef.DamageExtra ? `<div class="actionDetailBody2">
            <div class="rotationConditionOperatorHeaderInline">Secondary DMG:</div>&nbsp;
            ${parseRef.DamageExtra?.displayLines ?? parseRef.DamageExtra} ${typeof parseRef.DamageType === "object" ? megaParsingFuckery.ValuePerStackParsing(parseRef.DamageType,initialCounter) : `(${parseRef.DamageType})`}
        </div>
        <div class="modifierDetailsBox">
            ${getStandardNameDisplay(initialCounter,parseRef.dmgFormulaExtra,"Secondary DMG Scaling")}
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
            ${getStandardNameDisplay(initialCounter,parseRef.stackValue,"Added Value")}
            ${getStandardNameDisplay(initialCounter,parseRef.stackLimit,"Shield Cap")}
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
            on ${megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter)}
        </div>
        
        <div class="modifierDetailsBox">
            ${getStandardNameDisplay(initialCounter,parseRef.formula,"Formula")}
            ${getStandardNameDisplay(initialCounter,parseRef.value,"Shield Value")}
            ${getStandardNameDisplay(initialCounter,parseRef.valuePercent,"Shield Value Percent")}
        </div>
        `;
    },
    "Adjust Shield"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "target",
            "value",
            "modifierNameArray",
            "isMax",

            // "modifier",
            // "stackLimit",
            // "valuePerStack",
            // "addStacksPerTrigger",
            // "duration",
            // "value1",
            // "compareType",
            // "value2"
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Adjust Shield");


        // {
        //     "name": "Damage Type Source",
        //     "sourceType": "ReadTargetType",
        //     "target": "Caster"
        //   }


        return `<div class="actionDetailBody2">
            <div class="rotationConditionOperatorHeaderInline">Adjust Shield${parseRef.isMax ? "[MAX]" : ""}:</div>&nbsp;
            on ${megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter)}
        </div>
        
        <div class="modifierDetailsBox">
            ${getStandardNameDisplay(initialCounter,parseRef.formula,"Formula")}
            ${getStandardNameDisplay(initialCounter,parseRef.value,"Shield Value")}
            ${getStandardNameDisplay(initialCounter,parseRef.modifierNameArray,"Modifier Names")}
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
            on ${megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter)}
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
            ${getStandardNameDisplay(initialCounter,parseRef.skillTrigger,"Skill Trigger")}
            ${getStandardNameDisplay(initialCounter,parseRef.energyCost,"Energy Cost")}
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
            "filterList",
            "flagFilter",
            "useParamModifier",
            "chance",

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
            ${getStandardNameDisplay(initialCounter,parseRef.skiltargetlType,"Copy To",true)}
            ${getStandardNameDisplay(initialCounter,parseRef.source,"Copy From",true)}

            ${getStandardNameDisplay(initialCounter,parseRef.copyType,"Copy Type")}
            ${getStandardNameDisplay(initialCounter,parseRef.chance,"Chance")}
            ${getStandardNameDisplay(initialCounter,parseRef.dispelFilter,"Dispel Filter")}
            ${getStandardNameDisplay(initialCounter,parseRef.filterList,"Filter List")}
            ${getStandardNameDisplay(initialCounter,parseRef.flagFilter,"Flag Filter")}
            
            ${getStandardNameDisplay(initialCounter,parseRef.useParamModifier,"Use Prior Modifier as Parameter")}
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


        return `<div class="actionDetailBody2">
            <div class="rotationConditionOperatorHeaderInline">${parseRef.name}</div>&nbsp;
            ${parseRef.show} ${parseRef.previewType} on ${megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter)}
        </div>
        <div class="modifierDetailsBox">
            ${getStandardNameDisplay(initialCounter,parseRef.skillType,"Skill Type")}
            ${getStandardNameDisplay(initialCounter,parseRef.previewValue,"Amount")}
        </div>
        `;
    },
    
    "Target Name"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "target",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Update UI Preview");
        
        

        // <span class="targetNaming"></span>
        // <span class="targetFunction"></span>


        // <a class="customMenuResultRowBox clickable" href="/HonkaiSR/TheLibrary/AbilityConfigs/Anaxa/" target="_blank">
        //                 </a>

        let resultingTarget = megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter);


        let wasString = false;
        if (typeof resultingTarget === "string") {
            // const regexConfig = /\{\{([^}]+)\}\}/g;
            const regexConfig = /\{\{(.+?)\}\}/g;
            
            // const regexOperator = /\[\[([^}]+)\]\]/g;
            const regexOperator = /\[\[(.+?)\]\](-\d+)?/g;
            
            resultingTarget = resultingTarget.replace(regexConfig, (match, replaceValue) => {return `<a class="targetNaming" target="_blank" href="/HonkaiSR/TheLibrary/AbilityConfigs/GlobalTargetN/#id${encodeURIComponent(replaceValue)}">${replaceValue}</a>`;});
            resultingTarget = resultingTarget.replace(regexOperator, (match, replaceValue) => {return `<a class="targetFunction" target="_blank" href="/HonkaiSR/TheLibrary/AbilityConfigs/GlobalTargetO/#id${encodeURIComponent(replaceValue)}">${replaceValue}</a><span>()</span>`;});
        
            // resultingTarget = `
            // <div class="actionDetailBody2DetailTargetNaming">
            //     ${resultingTarget}
            // </div>`
        }

        // return `<div class="actionDetailBody2">
        //     <div class="rotationConditionOperatorHeaderInline">${parseRef.name}</div>&nbsp;
        //     ${resultingTarget}
        // </div>
        // `;
        return `<div class="${!wasString ? "actionDetailBody2DetailTargetNaming" : "actionDetailBody2"}">
            ${resultingTarget}
        </div>
        `;
    },
    // "Target List"(parseRef,initialCounter) {
    //     const knownKeySet = new Set ([
    //         "name",
    //         "target",
    //     ])
    //     megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Update UI Preview");

    //     return `<div class="actionDetailBody2">
    //         <div class="rotationConditionOperatorHeaderInline">${parseRef.name}</div>&nbsp;
    //         ${megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter)}
    //     </div>
    //     `;
    // },
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
            ${megaParsingFuckery.makeConditionTargetBox(parseRef.weakTo,initialCounter)} is${parseRef.invertCondition != undefined ? " NOT" : ""} Weak to ${megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter)}
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
            ${getStandardNameDisplay(initialCounter,parseRef.casterFilter,"Caster Filter",true)}
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
            ${getStandardNameDisplay(initialCounter,parseRef.casterFilter,"Caster Filter",true)}
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
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Target Filter");

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
    "Target Search"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "conditions",
            "entityType",
            "teamType",
            "livingState",
            // "passed",
            // "failed"
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Target Search");

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

        if (conditionObject && !returnString) {throw new Error(`Missing condition display-only definition in IF: ${conditionName}`)}

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
            <div class="modifierDetailsBox">
            ${getStandardNameDisplay(initialCounter,parseRef.entityType,"Entity Type")}
            ${getStandardNameDisplay(initialCounter,parseRef.teamType,"Team Type")}
            ${getStandardNameDisplay(initialCounter,parseRef.livingState,"Living State")}
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
    "Target Sequence"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "Sequence",
            // "entityType",
            // "teamType",
            // "livingState",
            // "passed",
            // "failed"
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Target Sequence");

        // conditions
        // passed
        // failed

        let parseString = "";
        // let refString = "";
        const hasParse = parseRef.Sequence?.length;
        // const hasRef = parseRef.failed?.length;
        if (hasParse) {parseString += megaParsingFuckery.fillEventBodyBox(parseRef.Sequence,initialCounter);}
        // if (hasRef) {refString += megaParsingFuckery.fillEventBodyBox(parseRef.failed,initialCounter);}

        // const conditionObject = parseRef.conditions;
        // const conditionName = conditionObject?.name;

        // let returnString = "" + (typeof conditionObject === "string" ? `<div class="rotationsConditionsBodyBox">${conditionObject}</div>` : "");
        // const functionExists = megaParsingFuckery[conditionName];
        // if (functionExists) {returnString += `<div class="rotationsConditionsBodyBox">` + functionExists(conditionObject,initialCounter) + `</div>`;}

        // if (!returnString) {throw new Error(`Missing condition display-only definition in IF: ${conditionName}`)}

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
            </div>
            <div class="modifierDetailsBox">
                ${getStandardNameDisplay(initialCounter,parseRef.entityType,"Entity Type")}
            </div>
            <div class="rotationConditionOperatorBoxMain">
                ${hasParse ? `<div class="rotationConditionOperatorHeaderConditionTHEN">Execute</div>
                <div class="rotationsSectionRowHolder${initialCounter%2 === 0 ? 2 : 1}">
                    ${parseString}
                </div>` : ""}
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
    "Sort with Actions"(parseRef,initialCounter) {
        const knownKeySet = new Set ([
            "name",
            "execute",
            "sortOperator",
            "includeDying",
            "target",
            "max",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Sort with Actions");

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
        // const conditionName = conditionObject?.name;

        // let returnString = "" + (typeof conditionObject === "string" ? `<div class="rotationsConditionsBodyBox">${conditionObject}</div>` : "");
        // const functionExists = megaParsingFuckery[conditionName];
        // if (functionExists) {returnString += `<div class="rotationsConditionsBodyBox">` + functionExists(conditionObject,initialCounter) + `</div>`;}

        // if (!returnString) {throw new Error(`Missing condition display-only definition in IF: ${conditionName}`)}

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
            </div>
            <div class="modifierDetailsBox">
                ${getStandardNameDisplay(initialCounter,parseRef.target,"Target",true)}
                ${getStandardNameDisplay(initialCounter,parseRef.sortOperator,"Sort Operator",true)}

                ${getStandardNameDisplay(initialCounter,parseRef.max,"Max")}
                ${getStandardNameDisplay(initialCounter,parseRef.includeDying,"Include Dying")}
            </div>
            <div class="rotationConditionOperatorBoxMain">
                ${hasParse ? `<div class="rotationConditionOperatorHeaderConditionTHEN">Execute</div>
                <div class="rotationsSectionRowHolder${initialCounter%2 === 0 ? 2 : 1}">
                    ${parseString}
                </div>` : ""}
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
            "cancelIfDelayed",
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

                ${getStandardNameDisplay(initialCounter,parseRef.abilityName,"Use Ability(By Name)")}
                ${getStandardNameDisplay(initialCounter,parseRef.skillIndex,"Skill Index")}
                ${getStandardNameDisplay(initialCounter,parseRef.forceAction,"Action is Forced")}
                ${getStandardNameDisplay(initialCounter,parseRef.cancelIfDelayed,"Cancel when Delayed")}
                ${getStandardNameDisplay(initialCounter,parseRef.runsAfterBattleEnd,"Can Run After Battle End")}
                ${getStandardNameDisplay(initialCounter,parseRef.canInjectUltimates,"Can Inject Ultimates")}
                ${getStandardNameDisplay(initialCounter,parseRef.ignoreCost,"Ignore Skill Point Cost")}
                ${getStandardNameDisplay(initialCounter,parseRef.followSameTagAsAction,"Follows Same Tags as Reg Action")}
                ${getStandardNameDisplay(initialCounter,parseRef.priorityTag,"Priority Tag")}
                ${getStandardNameDisplay(initialCounter,parseRef.abortFlags,"Abort Flags")}
                
                ${getStandardNameDisplay(initialCounter,parseRef.target,"Target",true)}
                ${getStandardNameDisplay(initialCounter,parseRef.castTarget,"Cast Target",true)}
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
                ${getStandardNameDisplay(initialCounter,parseRef.from,"Target Pool",true)}

                ${getStandardNameDisplay(initialCounter,parseRef.searchRandom,"Random Search")}
                ${getStandardNameDisplay(initialCounter,parseRef.includeDyingTargets,"Dying Targets")}
                ${getStandardNameDisplay(initialCounter,parseRef.maxTargets,"Max Targets Returned")}
                ${getStandardNameDisplay(initialCounter,parseRef.ignoreParallelWarning,"Ignore Parallel Warning")}
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
            "isUnique",
            "count",
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
                ${getStandardNameDisplay(initialCounter,parseRef.odds,"ODDS")}
                ${getStandardNameDisplay(initialCounter,parseRef.count,"Count")}
                ${getStandardNameDisplay(initialCounter,parseRef.isUnique,"Is Unique")}
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
            "modifierType",
            "conditions",
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


        

        const conditionObject = parseRef.conditions;
        const conditionName = conditionObject?.name;

        let returnString = "";
        const functionExists = megaParsingFuckery[conditionName];
        if (functionExists) {returnString += `<div class="rotationsConditionsBodyBox">` + functionExists(conditionObject,initialCounter) + `</div>`;}


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

            <div class="modifierDetailsBox">
                ${getStandardNameDisplay(initialCounter,parseRef.counter,"Counter")}
                ${getStandardNameDisplay(initialCounter,parseRef.includeTargetsInLimbo,"Include Targets in Limbo")}
                ${getStandardNameDisplay(initialCounter,parseRef.flagFilter,"Flag Filter")}
                ${getStandardNameDisplay(initialCounter,parseRef.priority,"Priority Tag")}
                ${getStandardNameDisplay(initialCounter,parseRef.modifierType,"Modifier Type")}

                ${getStandardNameDisplay(initialCounter,parseRef.target,"Target",true)}
                ${getStandardNameDisplay(initialCounter,parseRef.casterFilter,"Use Entity Snapshot",true)}

                ${parseRef.returnString ? `
                    <div class="rotationConditionOperatorHeaderInline">Conditions:</div>
                ${returnString}` : ""}
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
    "Target Configuration"(parseRef,initialCounter) {
        initialCounter++;
        const knownKeySet = new Set ([
            "name",
            "nameTarget",
            "isTargetOperator",


            //old modifier stuff
            "execute",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Modifier Construction");
        console.log(parseRef.nameTarget)

        let parseString = "";
        // let refString = "";
        // let abilityString = "";
        // let functionString = "";
        // let subModString = "";
        const hasParse = parseRef.execute?.length;
        // const hasRef = parseRef.variableValueChange?.length;
        // const hasAbilityChange = parseRef.abilityValueChange?.length;
        // const hasFunctions = parseRef.modifierFunctions?.length;
        // const hasSubMods = parseRef.subModList?.length;
        if (hasParse) {parseString += megaParsingFuckery.fillEventBodyBox(parseRef.execute,initialCounter);}
        // if (hasRef) {refString += megaParsingFuckery.fillEventBodyBox(parseRef.variableValueChange,initialCounter);}
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


        // <span class="targetNaming"></span>
        // <span class="targetFunction"></span>

        const isOperator = parseRef.isTargetOperator;
        
        return `
        <details class="rotationsPermaConditionsExpand" open="">
            <summary class="rotationConditionOperatorHeaderAbilityTriggerConditionHeader clickable">
                <div class="rotationConditionOperatorHeaderCondition">${parseRef.name}${isOperator ? " Operator" : ""}</div>
                <span class="${isOperator ? "targetFunction" :"targetNaming"}" id="id${parseRef.nameTarget}">${parseRef.nameTarget}</span>
            </summary>

            <div class="modifierDetailsBox">
                ${getStandardNameDisplay(initialCounter,parseRef.effectName && parseRef.effectName != parseRef.statusName ? parseRef.effectName : undefined,"Effect")}
                
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
                
                ${getStandardNameDisplay(initialCounter,parseRef.targetRestriction,"Restrict Targets To",true)}
                ${getStandardNameDisplay(initialCounter,parseRef.targetRestrictionFor,"Restrict Targets For")}

                ${getStandardNameDisplay(initialCounter,parseRef.priority,"Priority Tag")}
                ${getStandardNameDisplay(initialCounter,parseRef.duration,"Duration")}
                ${getStandardNameDisplay(initialCounter,parseRef.counter,"Counter")}
                ${getStandardNameDisplay(initialCounter,parseRef.stackType,"Stack Type")}
                ${getStandardNameDisplay(initialCounter,parseRef.lifeCyclePhaseAllowed,"Expire Type")}
                ${getStandardNameDisplay(initialCounter,parseRef.useEntitySnapshot,"Use Entity Snapshot")}
                ${getStandardNameDisplay(initialCounter,parseRef.applyBindingFlagEffects,"Binding Flag Effects")}
                ${getStandardNameDisplay(initialCounter,parseRef.filter,"Filter")}
                ${getStandardNameDisplay(initialCounter,parseRef.modifierFlags,"Flags")}
                ${getStandardNameDisplay(initialCounter,parseRef.stackLimit,"Limit")}
                ${getStandardNameDisplay(initialCounter,parseRef.addStacksPerTrigger,"Stacks/Trigger")}
                ${getStandardNameDisplay(initialCounter,parseRef.type,"Type")}
                ${getStandardNameDisplay(initialCounter,parseRef.effectName && parseRef.effectName != parseRef.statusName ? parseRef.effectName : undefined,"Effect")}

                ${parseRef.removalDependencies ? `<div class="actionDetailBody2">
                    <div class="rotationConditionOperatorHeaderInline">Removal Dependencies:</div>&nbsp;
                    ${typeof parseRef.removalDependencies === "object" ? megaParsingFuckery.ValuePerStackParsing(parseRef.removalDependencies,initialCounter) : parseRef.removalDependencies}
                </div>` : ""}
                ${previewValue ? `<div class="actionDetailBody2Preview">
                    <div class="rotationConditionOperatorHeaderInline">Preview:</div>&nbsp;
                    ${previewValue}
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
                ${getStandardNameDisplay(initialCounter,parseRef.energyCost,"Energy Cost")}
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
            "attacker",
            "skillType",

            "delayAdvancePreview",

            "toughnessReductionPreview",
            "toughnessForcedReductionPreview",
            "showAsForcedReduction",
            "isForcedReduction",
            "changeDelay",

            "conditions",
            "addedDisplayWeakness",
            "multiplier",

            "entityType",
            "entityID",

            "isPercentofMaxToughness",
            "addedPercent",
            "addedValue",
            "maxToughness",
            "minToughness",
            "toughnessType",
            "baseToughnessDMG",
            "percent",

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
            ${returnString ?? ""} ${megaParsingFuckery.makeConditionTargetBox(parseRef.target,initialCounter) ?? ""}

            <div class="modifierDetailsBox">
                ${getStandardNameDisplay(initialCounter,parseRef.attacker,"Attacker",true)}
                ${getStandardNameDisplay(initialCounter,parseRef.show,"Display")}
                ${getStandardNameDisplay(initialCounter,parseRef.skillType,"Skill Type(s)")}
                ${getStandardNameDisplay(initialCounter,parseRef.entityType,"Entity Type")}
                ${getStandardNameDisplay(initialCounter,parseRef.entityID,"Entity ID")}
                ${getStandardNameDisplay(initialCounter,parseRef.isPercentofMaxToughness,"Based on Max Toughness")}
                ${getStandardNameDisplay(initialCounter,parseRef.addedPercent,"Added Percent Value")}
                ${getStandardNameDisplay(initialCounter,parseRef.addedValue,"Added Value")}
                ${getStandardNameDisplay(initialCounter,parseRef.maxToughness,"Max Toughness")}
                ${getStandardNameDisplay(initialCounter,parseRef.minToughness,"Min Toughness")}

                ${getStandardNameDisplay(initialCounter,parseRef.toughnessType,"Toughness Element")}
                ${getStandardNameDisplay(initialCounter,parseRef.baseToughnessDMG,"Base Toughness DMG")}
                ${getStandardNameDisplay(initialCounter,parseRef.showAsForcedReduction,"Display as Forced Reduction")}
                ${getStandardNameDisplay(initialCounter,parseRef.isForcedReduction,"Is Forced Reduction")}
                ${getStandardNameDisplay(initialCounter,parseRef.multiplier,"Multiplier")}
                ${getStandardNameDisplay(initialCounter,parseRef.percent,"Percent")}
                ${getStandardNameDisplay(initialCounter,parseRef.abilityTypeList,"Type")}
                ${getStandardNameDisplay(initialCounter,parseRef.changeDelay,"Change Delay")}
                

                
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

                ${parseRef.addedDisplayWeakness ? `<div class="actionDetailBody2">
                    <div class="rotationConditionOperatorHeaderInline">Display Added Weakness:</div>&nbsp;
                    
                    ${parseRef.addedDisplayWeakness?.DamageType ? parseRef.addedDisplayWeakness?.DamageType : megaParsingFuckery.makeConditionTargetBox(parseRef.addedDisplayWeakness,initialCounter)}
                </div>` : ""}

                    
            </div>
        `;
        // ${parseRef.addedDisplayWeakness} //this one can be a target read as fun as that is
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
                ${getStandardNameDisplay(initialCounter,parseRef.target,"Target",true)}
                ${getStandardNameDisplay(initialCounter,parseRef.abilityTypeList,"Type List")}

                
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
                ${parseRef.variableName} ${parseRef.from ? `from ${megaParsingFuckery.makeConditionTargetBox(parseRef.from,initialCounter)}` : ""}
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
                ${getStandardNameDisplay(initialCounter,parseRef.minValue,"Lower Limit")}
                ${getStandardNameDisplay(initialCounter,parseRef.maxValue,"Upper Limit")}
                ${getStandardNameDisplay(initialCounter,parseRef.includeMaxValueInRange,"Include Max Value")}
                ${getStandardNameDisplay(initialCounter,parseRef.triggerClampedChanges,"Trigger Clamped Values")}

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
                ${getStandardNameDisplay(initialCounter,parseRef.projectileCount,"Projectile Count Max")}
                ${getStandardNameDisplay(initialCounter,parseRef.projectileCountTotal,"Projectile Count Total")}

                ${getStandardNameDisplay(initialCounter,parseRef.target,"Target",true)}
                ${getStandardNameDisplay(initialCounter,parseRef.caster,"Caster",true)}

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
        console.log(parseRef.eventTrigger ?? parseRef["$type"])
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
            "canOverkill",
            "deathSourceType",
            "killer",
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



        // if (!hasParse && !hasRef) {return "";}

        return `
        <details class="rotationsPermaConditionsExpand" open="">
            <summary class="rotationConditionOperatorHeaderAbilityTriggerConditionHeader clickable">
                <div class="rotationConditionOperatorHeaderCondition">${parseRef.name}</div>
            </summary>

            <div class="modifierDetailsBox">
                ${getStandardNameDisplay(initialCounter,parseRef.target,"Target",true)}
                ${getStandardNameDisplay(initialCounter,parseRef.killer,"Killer",true)}
                
                ${getStandardNameDisplay(initialCounter,parseRef.ignoreHPLossTriggers,"Bypass Event: HP loss triggers")}
                ${getStandardNameDisplay(initialCounter,parseRef.ignoreDeathTriggers,"Bypass Event: Death triggers")}
                ${getStandardNameDisplay(initialCounter,parseRef.abortInsertedAbilities,"Abort Injected Ability Actions")}
                ${getStandardNameDisplay(initialCounter,parseRef.canRevive,"Can Revive")}
                ${getStandardNameDisplay(initialCounter,parseRef.canOverkill,"Can Overkill")}
                ${getStandardNameDisplay(initialCounter,parseRef.deathSourceType,"Source Type")}
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
        // if (!hasParse && !hasRef) {return "";}

        return `
        <details class="rotationsPermaConditionsExpand" open="">
            <summary class="rotationConditionOperatorHeaderAbilityTriggerConditionHeader clickable">
                <div class="rotationConditionOperatorHeaderCondition">${parseRef.name}</div>
            </summary>

            <div class="modifierDetailsBox">
                ${getStandardNameDisplay(initialCounter,parseRef.enable,"Enable")}
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

        const typeOfParse = typeof parseRef;
        let parseString = "";

        let wasArray = false;
        let wasObject = false;

        if (typeOfParse === "string") {return parseRef;}
        else if (Array.isArray(parseRef)) {
            wasArray = true;
            parseString = megaParsingFuckery.fillEventBodyBox(parseRef,initialCounter);
        }
        else if (typeOfParse === "object") {
            wasObject = true;
            // console.log(parseRef)
            console.log(parseRef.name)
            parseString = megaParsingFuckery[parseRef.name](parseRef,initialCounter);

            // if (typeof parseString === "object") {console.log(parseString)}
        }
        

        // console.log(parseString)


        if (wasArray) {
            parseString = `<div class="isConditionContainerBox">
                <div class="rotationsSectionRowHolder${initialCounter%2 === 0 ? 2 : 1} isConditionContainer">
                    ${parseString}
                </div>
            </div>`;
        }

        
        // const hasRef = parseRef.failed?.length;
        
        // if (hasRef) {refString += megaParsingFuckery.fillEventBodyBox(parseRef.failed);}

        // const conditionObject = parseRef.conditions;
        // const conditionName = conditionObject.name;

        // let returnString = "";
        // const functionExists = megaParsingFuckery[conditionName];
        // if (functionExists) {returnString += `<div class="rotationsConditionsBodyBox">` + functionExists(conditionObject) + `</div>`;}

        // <div class="actionDetailBody">${parseRef.ability} from ${parseRef.from}</div>
        return parseString;
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
                ${getStandardNameDisplay(initialCounter,parseRef.enemyID,"Enemy ID")}
                ${getStandardNameDisplay(initialCounter,parseRef.locationType,"Location Type")}
                ${getStandardNameDisplay(initialCounter,parseRef.overrideActivityGroup,"Override Activity Group")}
                ${getStandardNameDisplay(initialCounter,parseRef.slot,"Slot")}

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
    "Create Enemy from Custom"(parseRef,initialCounter) {
        initialCounter++;
        const knownKeySet = new Set ([
            "name",
            "value",
            "summonLocation",
            "propertyListIherit",
            "inheritDelay",
            "inheritWeakness",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Create Enemies");


        return `
        <details class="rotationsPermaConditionsExpand" open="">
            <summary class="rotationConditionOperatorHeaderAbilityTriggerConditionHeader clickable">
                <div class="rotationConditionOperatorHeaderCondition">${parseRef.name}</div>
            </summary>

            <div class="modifierDetailsBox">
                ${getStandardNameDisplay(initialCounter,parseRef.value,"Custom ID")}
                ${getStandardNameDisplay(initialCounter,parseRef.summonLocation,"Summon Position")}
                ${getStandardNameDisplay(initialCounter,parseRef.propertyListIherit,"Inherited Stats")}

                ${getStandardNameDisplay(initialCounter,parseRef.inheritDelay,"Inherit Initial AV Multi")}
                ${getStandardNameDisplay(initialCounter,parseRef.inheritWeakness,"Inherit Weaknesses")}

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
            "propertyListIherit",

            "inheritDelay",
            "inheritWeakness",
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
                ${getStandardNameDisplay(initialCounter,parseRef.delayPercent,"Delay Value/Multi[?]")}
                ${getStandardNameDisplay(initialCounter,parseRef.refreshPositions,"Refresh Positions")}
                ${getStandardNameDisplay(initialCounter,parseRef.propertyListIherit,"Inherited Stats")}

                ${getStandardNameDisplay(initialCounter,parseRef.inheritDelay,"Inherit Initial AV Multi")}
                ${getStandardNameDisplay(initialCounter,parseRef.inheritWeakness,"Inherit Weaknesses")}

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
    "Change Character Model"(parseRef,initialCounter) {
        initialCounter++;
        const knownKeySet = new Set ([
            "name",
            // "conditions",
            "passed",
            // "failed"
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"IF");


        let parseString = "";
        // let refString = "";
        const hasParse = parseRef.passed?.length;
        // const hasRef = parseRef.failed?.length;
        if (hasParse) {parseString += megaParsingFuckery.fillEventBodyBox(parseRef.passed,initialCounter);}
        // if (hasRef) {refString += megaParsingFuckery.fillEventBodyBox(parseRef.failed,initialCounter);}


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
            "invertCondition",
        ])
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"OR");

        initialCounter++;

        let parseString = "";
        // let refString = "";
        const hasParse = parseRef.conditionList?.length;
        // const hasRef = parseRef.failed?.length;

        console.log(parseRef.conditionList)
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
            "teamCountFrom",
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
                ${getStandardNameDisplay(initialCounter,parseRef.switchValue,"Case Value")}
                ${parseRef.source != undefined ? `<div class="actionDetailBody2">
                    <div class="rotationConditionOperatorHeaderInline">Source Type:</div>&nbsp;
                    ${typeof parseRef.source === "object" ? megaParsingFuckery.ValuePerStackParsing(parseRef.source,initialCounter) : `(${parseRef.source})`}
                </div>` : ""}
                ${getStandardNameDisplay(initialCounter,parseRef.teamCountFrom,"Team Count From")}

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
        megaParsingFuckery.checkKnownKeys(knownKeySet,parseRef,"Summon Memosprite");

        let parseString = "";
        // let refString = "";
        const hasParse = parseRef.afterSummon?.length;
        // const hasRef = parseRef.failed?.length;
        if (hasParse) {parseString += megaParsingFuckery.fillEventBodyBox(parseRef.afterSummon,initialCounter);}
        // if (hasRef) {refString += megaParsingFuckery.fillEventBodyBox(parseRef.failed,initialCounter);}

        // initialCounter++;
        return `<div class="actionDetailBody">
            <div class="rotationConditionOperatorHeaderInline">${parseRef.name}:</div>&nbsp;
            ${parseRef.memoID?.displayLines ?? parseRef.memoID}
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
            "eliteGroup",
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
            ${getStandardNameDisplay(initialCounter,parseRef.team,"Team")}
            ${getStandardNameDisplay(initialCounter,parseRef.barType,"Bar Type")}
            ${getStandardNameDisplay(initialCounter,parseRef.eventSpeed,"SPD")}
            ${getStandardNameDisplay(initialCounter,parseRef.hardLevelEvent,"Hard Level")}
            ${getStandardNameDisplay(initialCounter,parseRef.eliteGroup,"Elite Group")}
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

            const params = nameEntry.params ?? [];
            abilityListRow += `
            <div class="actionDetailBody2">
                <div class="rotationConditionOperatorHeaderInline">${nameEntry.title}</div>
            </div>

            <div class="modifierDetailsBox">
                ${getStandardNameDisplay(initialCounter,parseRef.type,"Achievement Type")}
            </div>

            <div class="actionDetailBody">
                <div class="rotationConditionOperatorHeaderInline">Description:</div>&nbsp;
                <div class="actionDetailBody2Description">
                ${pagePopulation.cleanDescription(params,nameEntry.desc)}
                </div>
            </div>
            ${nameEntry.desc2 ? `<div class="actionDetailBody">
                <div class="rotationConditionOperatorHeaderInline">Hidden Desc:</div>&nbsp;
                <div class="actionDetailBody2Description">
                ${pagePopulation.cleanDescription(params,nameEntry.desc2)}
                </div>
            </div>` : ""}`
        }
        // type
        // desc2

        return `<div class="actionDetailBody2">
            <div class="rotationConditionOperatorHeaderInline">${parseRef.name}</div>
        </div>

        
        <div class="modifierDetailsBox">
            ${getStandardNameDisplay(initialCounter,parseRef.matchTags,"Match Tags")}

            ${abilityListRow  ? `<div class="actionDetailBody2BattleEventOverrides">
                <div class="rotationConditionOperatorHeaderInline">Related Achievements:</div>&nbsp;
                ${abilityListRow}
            </div>` : ""}
 
        </div>
        `;
    },
}


