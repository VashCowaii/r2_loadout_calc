function readSelection(elemID) {return document.getElementById(elemID);}

console.log("reached")
let currentCharFilePrefix = null;
let currentLCSuperimposition = 1;


const skillLevelStore = {

}


let globalUI = {
    "currentMainMenuDisplayed": 1,
    // "defaultTeam": ["Saber","Sunday","Dan Heng • Permansor Terrae","Robin"],

    "currentBattleViewDisplayType": "ActionExpand",
    "currentGraphViewDisplayType": "Summary",
    "defaultActionIndex": 0,
    "currentActionIndex": 0,

    "volumeIsOcclusion": false,
    "volumeIsLock": false,

    "buffGraphs": {
        graphBy: "AV",
        buffEntity: "Character",
        entityName: "Hysilens",
        buffName: "",

        graphByStat: "AV",
        buffEntityStat: "Character",
        entityNameStat: "Hysilens",
        statName: null,
    },
    
    "currentCharacterDisplayed": 1,
    "currentCharacterMenuDisplayed": 1,

    "currentSearchOpen": null,
    "currentSearchVolume": null,

}





const customHTML = {
    establishZoomableTraces() {
        //TODO: clean this up later
        const wrapper = readSelection('characterMainCenterDisplayTraces');
        const board = readSelection('traceMainBoxHolder');
        let scale = 1;
        let posX = 0, posY = 0;
        let startX, startY, isDragging = false;

        // Base maximum offset values
        const baseMaxOffsetX = 500; 
        const baseMaxOffsetY = 500; 

        // Function to calculate max drag based on scale
        function getScaledMaxOffset(base) {
            return base * scale; // Increase max movement as scale increases
        }

        // Zoom In/Out using Scroll Wheel (Desktop)
        wrapper.addEventListener('wheel', (e) => {
            e.preventDefault();
            
            let scaleAmount = 0.1;
            if (e.deltaY < 0) {
                scale = Math.min(scale + scaleAmount, 3); // Max zoom in: 3x
            } else {
                scale = Math.max(scale - scaleAmount, 0.7); // Min zoom out: 0.5x
            }

            // Adjust position constraints after scaling
            posX = Math.min(Math.max(posX, -getScaledMaxOffset(baseMaxOffsetX)), getScaledMaxOffset(baseMaxOffsetX));
            posY = Math.min(Math.max(posY, -getScaledMaxOffset(baseMaxOffsetY)), getScaledMaxOffset(baseMaxOffsetY));

            board.style.transform = `translate(${posX}px, ${posY}px) scale(${scale})`;
        }, { passive: false });

        // Drag Start (Mouse & Touch)
        function startDrag(e) {
            isDragging = true;

            // Handle touch events
            if (e.touches) {
                startX = e.touches[0].clientX - posX;
                startY = e.touches[0].clientY - posY;
            } else {
                startX = e.clientX - posX;
                startY = e.clientY - posY;
            }

            wrapper.style.cursor = 'grabbing';
        }

        // Drag Move (Mouse & Touch)
        function dragMove(e) {
            if (!isDragging) return;
            
            let clientX, clientY;

            // Handle touch events
            if (e.touches) {
                clientX = e.touches[0].clientX;
                clientY = e.touches[0].clientY;
            } else {
                clientX = e.clientX;
                clientY = e.clientY;
            }

            // Calculate new position
            let newX = clientX - startX;
            let newY = clientY - startY;

            // Get scaled movement limits
            const maxOffsetX = getScaledMaxOffset(baseMaxOffsetX);
            const maxOffsetY = getScaledMaxOffset(baseMaxOffsetY);

            // Apply limits using Math.min/max
            posX = Math.min(Math.max(newX, -maxOffsetX), maxOffsetX);
            posY = Math.min(Math.max(newY, -maxOffsetY), maxOffsetY);

            board.style.transform = `translate(${posX}px, ${posY}px) scale(${scale})`;

            // Prevent scrolling the page when dragging
            e.preventDefault();
        }

        // Drag End (Mouse & Touch)
        function endDrag() {
            isDragging = false;
            wrapper.style.cursor = 'grab';
        }

        // Event Listeners for Mouse
        wrapper.addEventListener('mousedown', startDrag);
        document.addEventListener('mousemove', dragMove);
        document.addEventListener('mouseup', endDrag);

        // Event Listeners for Touch
        wrapper.addEventListener('touchstart', startDrag, { passive: false });
        document.addEventListener('touchmove', dragMove, { passive: false });
        document.addEventListener('touchend', endDrag);
    },
    establishMobileSideScrollerMenu() {
        function enableHorizontalDrag(container) {
            const content = container.querySelector('.scrollHolderHorizontalBody');
            let startX, currentTranslate = 0, isDown = false;
          
            const containerWidth = container.offsetWidth;
            let contentWidth;
          
            function updateContentWidth() {
              contentWidth = content.scrollWidth;
            }
          
            updateContentWidth();
            window.addEventListener('resize', updateContentWidth);
          
            function dragStart(clientX) {
              isDown = true;
              startX = clientX;
              container.style.cursor = 'grabbing';
            }
          
            function dragMove(clientX) {
              if (!isDown) return;
              let dx = clientX - startX;
              let newTranslate = currentTranslate + dx;
          
              // enforce boundaries
              const maxTranslate = 0;
              const minTranslate = Math.min(containerWidth - contentWidth, 0); // negative number
          
              if (newTranslate > maxTranslate) newTranslate = maxTranslate;
              if (newTranslate < minTranslate) newTranslate = minTranslate;
          
              content.style.transform = `translateX(${newTranslate}px)`;
            }
          
            function dragEnd(clientX) {
              if (!isDown) return;
              let dx = clientX - startX;
              currentTranslate += dx;
          
              // enforce boundaries
              const maxTranslate = 0;
              const minTranslate = Math.min(containerWidth - contentWidth, 0);
              if (currentTranslate > maxTranslate) currentTranslate = maxTranslate;
              if (currentTranslate < minTranslate) currentTranslate = minTranslate;
          
              content.style.transform = `translateX(${currentTranslate}px)`;
              isDown = false;
              container.style.cursor = 'grab';
            }
          
            // Mouse events
            container.addEventListener('mousedown', e => {
              dragStart(e.clientX);
          
              function mouseMoveHandler(e) { dragMove(e.clientX); }
              function mouseUpHandler(e) { 
                dragEnd(e.clientX); 
                document.removeEventListener('mousemove', mouseMoveHandler);
                document.removeEventListener('mouseup', mouseUpHandler);
              }
          
              document.addEventListener('mousemove', mouseMoveHandler);
              document.addEventListener('mouseup', mouseUpHandler);
            });
          
            // Touch events
            container.addEventListener('touchstart', e => {
              dragStart(e.touches[0].clientX);
            }, { passive: true });
          
            container.addEventListener('touchmove', e => {
              dragMove(e.touches[0].clientX);
            }, { passive: true });
          
            container.addEventListener('touchend', e => {
              dragEnd(e.changedTouches[0].clientX);
            });
          }
        
          // usage
        const container = document.querySelector('.scrollHolderHorizontal');
        enableHorizontalDrag(container);
    },
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
    createAlternatingStatRowsFullNames(displayOrder,statLocation,isMainStat,substatRef,isStatMenuCreation,rollArray) {
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

            let currentKey = basicShorthand.findStatObject(entry);
            const statInternal = greatTableKeys[entry] ?? entry;
            
            let unit = currentKey.sets[entry].unit;
            let isPercent = unit === "%";
            let valuePre = statLocation[entry];
            console.log(valuePre,entry)
            let valueRef = (valuePre * (isPercent ? 100 : 1))?.toFixed(3) || 0;

            // greatTableIndex
            // greatTableKeys
            if (isStatMenuCreation && valuePre === 0) {continue;}
            if (rowAlternating==2) {rowAlternating--;}
            else {rowAlternating++;}

            if (isMainStat) {
                returnString += `
                <div class="imageRowStatisticBoxMain">
                    <div class="imageRowStatisticImageBox"><img src="${currentKey.icon}" class="imageRowStatisticImageMain"/></div>
                    <div class="imageRowStatisticNameBoxMain">${currentKey.sets[entry].display}</div>
                    <div class="imageRowStatisticStatBoxMain">${(+valueRef ?? 0)}${unit}</div>
                </div>
                `
            }
            else {
                let subRolls = substatRef != null;
                let estRolls = subRolls ? rollArray[loopCounter] : 0;

                compositeRollCount += estRolls;
                const potentiallyInvalid = compositeRollCount > 5;
                
                returnString += `
                <div class="imageRowStatisticBox${rowAlternating}">
                    <div class="imageRowStatisticImageBox"><img src="${currentKey.icon}" class="${isStatMenuCreation ? "imageRowStatisticImageStatMenu" : "imageRowStatisticImage"}"/></div>
                    <div class="imageRowStatisticNameBox">${isStatMenuCreation ? currentKey.sets[entry].specific : currentKey.sets[entry].display}</div>
                    <div class="imageRowStatisticStatBox2">${(+valueRef ?? 0)}${unit}</div>
                    ${subRolls && estRolls ? `<div class="imageRowStatisticStatBoxRollsEst">${estRolls}</div>` : ""}
                </div>
                `;
                loopCounter++;
            }
        }

        return returnString;
    },
    createAlternatingStatRows(displayOrder,statLocation,isMainStat,substatRef,isStatMenuCreation,rollArray) {
        let rowAlternating = 2
        let returnString = "";

        // console.log(displayOrder,statLocation)

        let compositeRollCount = 0;
        let loopCounter = 0;
        for (let entry of displayOrder) {
            const isUnique = customHTML.rowUniqueStatExceptions[entry];

            // if (isUnique) {
            //     returnString += `
            //     <div class="imageRowStatisticBox${rowAlternating}">
            //         <div class="imageRowStatisticNameBox">${isUnique.statName}</div>
            //         <div class="imageRowStatisticStatBox">${statLocation[entry]}${isUnique.statUnit}</div>
            //     </div>`;
            //     continue;
            // }

            
            let valuePre = statLocation[entry];
            console.log(valuePre)
            let valueRef = typeof valuePre === "string" ? valuePre : (valuePre ?? 0)?.toFixed(3) || 0;

            // greatTableIndex
            // greatTableKeys
            // if (isStatMenuCreation && valuePre === 0) {continue;}
            if (rowAlternating==2) {rowAlternating--;}
            else {rowAlternating++;}
            
            returnString += `
            <div class="imageRowStatisticBox${rowAlternating}">
                <div class="imageRowStatisticNameBox">${entry}</div>
                <div class="imageRowStatisticStatBox">${(typeof valuePre === "string" ? valueRef : +valueRef ?? 0)}</div>
            </div>
            `;
            loopCounter++;
        }

        return returnString;
    },
}

let globalIsLightcone = false;
let globalIsRelic = false;
let globalIsNoImage = false;
let enemyVariantSelected = null;

let scalingElite = null;
let scalingHard = null;
let levelIndex = 95;
let waveSpecificArray = [0,0];



// const seralize = {
//     ov: enemyVariantSelected,
//     scH: scalingHard,
//     scHL: levelIndex,
//     scE: scalingElite,
//     wave: waveSpecificArray
// };
// const serialized = new URLSearchParams(seralize);
// history.replaceState(null, "", `?${serialized.toString()}`);

const paramsURL = new URLSearchParams(window.location.search);
if ([...paramsURL.keys()].length) {

    const newElite = paramsURL.get("scE");
    const newHard = paramsURL.get("scH");
    const newLevel = paramsURL.get("scHL");
    const newVariant = paramsURL.get("ov");
    const newWave = paramsURL.get("wave");

    // console.log(newElite,newHard,newLevel,newVariant,newWave)


    scalingElite = +newElite ?? scalingElite;
    scalingHard = +newHard ?? scalingHard;
    levelIndex = +newLevel ?? levelIndex;
    enemyVariantSelected = +newVariant ?? +enemyVariantSelected;
    waveSpecificArray = newWave?.split(",") ?? waveSpecificArray;


    // if (enemyVariantSelected) {
    //     readSelection("fileSelectionSelectorEnemyOptions").value = enemyVariantSelected;
    // }
}
else {
    readSelection("noParamsPassedWarningBox").innerHTML = "No activity parameters detected on page-load. Either this is an error, or you opened this enemy's page without going through an activity first.<br>That's a really fucking bad idea lmao, the stats change WILDLY."
    readSelection("noParamsPassedWarningBox").style.display = "flex";
}

// const state = {
//   phase: Number(params.get("phase")),
//   difficulty: params.get("difficulty"),
//   showHints: params.get("showHints") === "true"
// };








const megaParsingFuckery = {
    changeEnemyVariant() {
        enemyVariantSelected = readSelection("fileSelectionSelectorEnemyOptions").value;
        userTriggers.updateCharacterUI();
    },
    pageLoad(loadFile) {
        // const bodyBox = readSelection("eventBodyMainBox");
        // const isLightcone = compositeAbilityObject.isLightcone;
        // const isRelic = compositeAbilityObject.isRelic;


        // enemyData
        // enemyAbilityData
        // enemyImages

        const enemyOptions = enemyData.options;
        const baseEnemyName = enemyData.name;
        let optionsStringer = "";
        enemyVariantSelected ??= enemyData.image;

        for (let enemyOption in enemyOptions) {
            const currentEnemyOption = enemyOptions[enemyOption];
            const optionName = currentEnemyOption.name;

            optionsStringer += `<option value="${enemyOption}" ${enemyOption == enemyVariantSelected ? "selected" : ""}>${enemyOption}${optionName != -1 ? " ["+optionName+"]" : ""}</option>`;
        }
        readSelection("fileSelectionSelectorEnemyOptions").innerHTML = optionsStringer;

        // let initialCounter = 1;
        readSelection("libraryCharacterHeaderPreview").src = `/HonkaiSR/${enemyImages[enemyData.image]}`;









        if (compositeAbilityObject) {
            const bodyBox = readSelection("eventBodyMainBox");
            const isLightcone = compositeAbilityObject.isLightcone;
            const isRelic = compositeAbilityObject.isRelic;

            globalIsLightcone = isLightcone;
            globalIsRelic = isRelic;

            loadFile = loadFile ?? compositeAbilityObject.abilityList[compositeAbilityObject.abilityList.length >= 2 ? 1 : 0];
            let configAbility = compositeAbilityObject.abilityObject[loadFile];

            if (!configAbility && compositeAbilityObject.abilityList.length) {
                loadFile = loadFile.replace(compositeAbilityObject.trimCharacterName,compositeAbilityObject.trimSummonName);
                // console.log(loadFile)
                configAbility = compositeAbilityObject.abilityObject[loadFile];
                // compositeAbilityObject.trimSummonName

            }

            const abilitiesHaveLength = compositeAbilityObject.abilityList.length;

            let initialCounter = 1;
            let eventBodyString = abilitiesHaveLength ? megaParsingFuckery.fillEventBodyBox(configAbility.parse,initialCounter) : "";
            let eventBodyStringOnAdd = abilitiesHaveLength ? megaParsingFuckery.fillEventBodyBox(configAbility.whenAdded,initialCounter) : "";
            let eventBodyStringOnAbort = abilitiesHaveLength ? megaParsingFuckery.fillEventBodyBox(configAbility.onAbort,initialCounter) : "";
            let eventBodyStringFunctions = abilitiesHaveLength ? megaParsingFuckery.fillEventBodyBox(configAbility.functions,initialCounter) : "";
            

            let referenceBodyString = configAbility?.references.length ? megaParsingFuckery.fillEventBodyBox(configAbility.references,initialCounter) : null;
            currentCharFilePrefix = compositeAbilityObject.trimCharacterName;

            

            let referenceGlobalString = configAbility?.referencesGlobal?.length ? megaParsingFuckery.fillEventBodyBox(configAbility.referencesGlobal,initialCounter) : null;
            let referenceGlobalFunctionString = configAbility?.referencesGlobalFunctions?.length ? megaParsingFuckery.fillEventBodyBox(configAbility.referencesGlobalFunctions,initialCounter) : null;
            
            

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
            const isGlobalNoImage = false;
            // const isGlobalNoImage = compositeAbilityObject.fullCharacterName.toLowerCase().includes("global")
            // || compositeAbilityObject.fullCharacterName.toLowerCase().includes("enemyabilities");

            globalIsNoImage = isGlobalNoImage;

            // console.log(compositeAbilityObject.fullCharacterName,characterRef.preview)
            // const characterRef = characters[compositeAbilityObject.fullCharacterName];
            // const lightconeRef = lightcones[compositeAbilityObject.fullCharacterName];
            // const relicSetRef = relicSets[compositeAbilityObject.fullCharacterName];
            // console.log(compositeAbilityObject.fullCharacterName,characterRef,characters)

            const startingKeys = [
                // {leftHand: "File", keyValue: "fileName"},
                {leftHand: "Ability", keyValue: "abilityType"},
                {leftHand: "Skill Trigger", keyValue: "skillTrigger"},
                {leftHand: "Energy", keyValue: "energy"},
                
                
                // {leftHand: "Toughness", keyValue: "toughnessList"},
            ];



            // ${!isGlobalNoImage ? `<div class="customMenuResultRowIcon">
            //     <img src="/HonkaiSR/${isRelic ? relicSetRef.icon : (isLightcone ? lightconeRef.preview : characterRef.preview)}" class="${isRelic ? "eventCharacterFileIconRelic" : "eventCharacterFileIcon"}" style="border: 2px solid #d2ae73;">
            // </div>` : ""}
            let startingString = `
                
                
                <div class="eventCharacterFileInfoBox">

                <div class="abilitySelectorFloaterBox">
                    <div class="abilitySelectorFloaterBoxName">Ability Selection</div>
                    <select class="selectorWidthRestriction" id="fileSelectionSelector" onchange="megaParsingFuckery.renewFileSelected()">
                </div>
                `;
                

            let optionsString = "";

            for (let fileEntry of compositeAbilityObject.abilityList) {
                optionsString += `<option value="${fileEntry}" ${fileEntry === loadFile ? "selected" : ""}>${fileEntry}</option>`
            }
            optionsString += "</select></div>"
            startingString += optionsString;



            let rowAlternating = 1;
            startingString += `<div class="${globalIsLightcone || globalIsRelic ? "energyAndToughnessRowHolderItems" : "energyAndToughnessRowHolder"}">`;
            if (!isLightcone && abilitiesHaveLength) {


                const propertyDisplayTemplates = {
                    energy(keyValue,configAbility) {
                        return `<div class="imageRowStatisticBoxWithIcon">
                            <img src="/HonkaiSR/icon/property/IconEnergyRecovery.png" class="characterDisplayLogStatIcon"></img>
                            <div class="imageRowStatisticNameBoxDETAILSWithIcon">${keyValue}</div>
                        </div>`;
                    },
                    skillTrigger(keyValue,configAbility) {
                        return `<div class="imageRowStatisticBoxWithIcon">
                            <div class="imageRowStatisticNameBoxDETAILSWithIcon">${keyValue}${configAbility.abilityType ? `[${configAbility.abilityType}]` : ""}</div>
                        </div>`;
                    },
                    // abilityType(keyValue) {
                    //     return `<div class="imageRowStatisticBoxWithIcon">
                    //         <div class="imageRowStatisticNameBoxDETAILSWithIcon">${keyValue}</div>
                    //     </div>`;
                    // },
                }
                
                for (let entry of startingKeys) {
                    if (configAbility[entry.keyValue] == null) {

                        // loadFile = loadFile ?? compositeAbilityObject.abilityList[compositeAbilityObject.abilityList.length >= 2 ? 1 : 0];

                        for (let findAbilityEntry of compositeAbilityObject.abilityList) {
                            const testCurrentEntry = compositeAbilityObject.abilityObject[findAbilityEntry];
                            if (!testCurrentEntry.childAbilityList) {continue;}

                            const newSet = new Set(testCurrentEntry.childAbilityList)
                            if (newSet.has(loadFile)) {
                                configAbility["energy"] = testCurrentEntry["energy"];
                                configAbility["abilityType"] = testCurrentEntry["abilityType"];
                                configAbility["skillTrigger"] = testCurrentEntry["skillTrigger"];
                                configAbility.toughnessList = testCurrentEntry.toughnessList;
                                break;
                            }
                        }

                        // childAbilityList


                        continue;
                    }
                    if (entry.keyValue === "abilityType") {continue;}
                    // startingString += `<div class="">${configAbility[entry]}</div>`;

                    // <div class="imageRowStatisticImageBox"><img src="${currentKey.icon}" class="${isStatMenuCreation ? "imageRowStatisticImageStatMenu" : "imageRowStatisticImage"}"/></div>
                    // ${subRolls && estRolls ? `<div class="imageRowStatisticStatBoxRollsEst">${estRolls}</div>` : ""}


                    if (propertyDisplayTemplates[entry.keyValue]) {startingString += propertyDisplayTemplates[entry.keyValue](configAbility[entry.keyValue],configAbility);}
                    else {
                        startingString +=  `<div class="imageRowStatisticBox${(globalIsLightcone || globalIsRelic) ? rowAlternating : 0}DETAILS">
                            <div class="imageRowStatisticNameBoxDETAILS">${entry.leftHand}</div>
                            <div class="imageRowStatisticStatBoxDETAILS">${configAbility[entry.keyValue]}</div>
                        </div>`;
                    }

                    if (rowAlternating === 2) {rowAlternating = 1;}
                    else {rowAlternating++;}
                }
            }


            let toughnessRowString = "";
            if (configAbility?.toughnessList && abilitiesHaveLength) {
                const toughnessIndexConversion = {
                    0: "ST",
                    1: "AOE",
                    2: "Blast"
                }

                const check1 = configAbility.toughnessList[0] != 0;
                const check2 = configAbility.toughnessList[1] != 0;
                const check3 = configAbility.toughnessList[2] != 0;
                const hasActualValues = check1 || check2 || check3;

                

                if (hasActualValues) {
                    toughnessRowString += `<img src="/HonkaiSR/icon/property/IconBreakUp.png" class="characterDisplayLogStatIconCenter"></img>`;

                    for (let i=0;i<3;i++) {
                        if (configAbility.toughnessList[i] === 0) {continue;}
                        toughnessRowString += `<div class="toughnessTableRowItemBox">
                            <div class="toughnessTableRowItemHeader">${toughnessIndexConversion[i]}</div>
                            <div class="toughnessTableRowItemValue">${configAbility.toughnessList[i]}</div>
                        </div>`;
                    }
                }
            }

            // <div class="toughnessTableRowHeader">Toughness</div>
            let toughnessString = !isLightcone && toughnessRowString != "" ? `<div class="toughnessTableRowBox">
                

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
                
                `
            }
            startingString += toughnessString + ``;
            startingString += `</div>`



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


            //TODO: add back in later
            // ${startingString}

            readSelection("eventReaderControlsBox").innerHTML = startingString;

            const mainAbilityString = `
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
                        <div class="rotationConditionOperatorHeaderCondition">MODIFIER LOG</div>
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
        }
    },
    ...megaParsingFuckeryPain
}

megaParsingFuckery.pageLoad();







userTriggers.updateCharacterUI();
// customHTML.establishZoomableTraces();
customHTML.establishMobileSideScrollerMenu();
userTriggers.updateMainMenuDisplayed(2);

if (location.hash) {
    const elemIDAfter = decodeURIComponent(location.hash.slice(1));
    // const elemIDAfter = location.hash.slice(1);

    // console.log(elemIDAfter,readSelection(decodeURIComponent((elemIDAfter))))
    if (elemIDAfter) {readSelection(elemIDAfter)?.scrollIntoView({block:"center",behavior: "smooth"});};
}





