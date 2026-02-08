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

globalUI.currentMainMenuDisplayed = 2;
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
    updateMainMenuDisplayed(elementID) {

        for (let i=1;i<=4;i++) {
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


        megaParsingFuckery.generateInitialTable();

        // if (elementID === 1) {readSelection("teamBoxMainHolderBox").style.display = "flex";}
        // else {readSelection("teamBoxMainHolderBox").style.display = "none";}

        // if (elementID === 2) {
        //     readSelection("battleViewBoxMainHolderBox").style.display = "flex";
        //     readSelection("teamBarHolderBox").style.display = "none";//character icons on the top, not needed for battleview
        // }
        // else {
        //     readSelection("battleViewBoxMainHolderBox").style.display = "none";
        //     readSelection("teamBarHolderBox").style.display = "flex";
        // }


        // if (elementID === 3) {
        //     readSelection("optimizeBoxMainHolderBox").style.display = "flex";
        //     readSelection("teamBarHolderBox").style.display = "flex";//character icons on the top, not needed for battleview
        // }
        // else {
        //     readSelection("optimizeBoxMainHolderBox").style.display = "none";
        //     readSelection("teamBarHolderBox").style.display = "flex";
        // }









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
    cleanDescription(array,desc) {
        //if we have something like "Increases the wearer's CRIT DMG by #1[i]%" then this finds the 1, and replaces it with value 0(1-0) in the related array
        // const replaced = desc.replace(/#(\d+)\[.*?\]/g, (_, index) => {
        //     return array[Number(index-1)];
        // });
        const replaced = desc.replace(/#(\d+)\[.*?\](%?)/g, (_, index, percent) => {
            let value = array[index-1];       // get value from array
            if (percent === "%") {value = `${value}%`;}  // multiply by 100 if % exists
            return `<span class="descriptionNumberColor">${value}</span>`;
        });

        return replaced.replace(/\\n/g, "<br>");
    },
    displayConversions: {
        1: modifiersGlobal,
        2: modifiersCharacter,
        3: modifiersEnemy,
        4: modifiersExtraEffects,
    },
    populateLinkedEntriesGlobal(coloring) {
        const mappingColor = {
            "gTempYellow": megaGlobalFunctionMap,
            "gModGreen": megaGlobalModifierMap,
        }
        const mappingPrefix = {
            "gTempYellow": "fun__",
            "gModGreen": "mod__",
        }

        document.querySelectorAll(`.${coloring}`).forEach(a => {
            const id = a.id;
            if (!id) return;

            const currentMapping = mappingColor[coloring];
            const mappingPrefixFinal = mappingPrefix[coloring];

            // console.log(id,id.split("__")?.[1])
            // const modifierPathing = id.includes(mappingPrefixFinal) ? currentMapping[id.split("__")[1]].split(".") : currentMapping[id].split(".");
            const modifierPathing = id.includes(mappingPrefixFinal) ? currentMapping[id.split("__")[1]]?.split(".") : currentMapping[id]?.split(".");
            if (!modifierPathing) {
                console.log(`Unmapped pathing on: ${id}, ${a.innerHTML}`)
                return
            }

            const prefixPath = modifierPathing[0];
            const filePath = modifierPathing[1];

            const finalPrefixPath = megaMappingPathing[prefixPath] + "/" + filePath + "/";
            const finalDepositPath = `/HonkaiSR/TheLibrary/` + finalPrefixPath + `${id.includes(mappingPrefixFinal) ? `#${id}` : `#${mappingPrefixFinal + id}`}`;

            // megaMappingPathing

            // encodeURIComponent(id)
            a.href = finalDepositPath;
            a.target = "_blank";
        });
    },
    generateInitialTable() {
        // let attacksArray = tableGeneration.generateAttacksArray(isAllAttacks);

        // 
        let currentUserInput = readSelection("statFilterBoxInput").value;

        // erosionModsData
        function fuzzyMatch(input, itemParam1, itemParam2,desc,aim) {
            const search = input.toLowerCase();
            return itemParam1.toLowerCase().includes(search) 
            || itemParam2.toLowerCase().includes(search) 
            || desc.toLowerCase().includes(search)
            || aim.toLowerCase().includes(search)
            
            
            ;
        }

        let tableHeaders = `
        <tr>
            <th class="tableHeader hasHoverTooltip" id=""><div class="centeredTableHeader">Stat ID</div></th>
            <th class="tableHeader hasHoverTooltip" id=""><div class="centeredTableHeader">Internal Name</div></th>
            <th class="tableHeader hasHoverTooltip" id=""><div class="centeredTableHeader">Proper Name</div></th>
            <th class="tableHeader hasHoverTooltip" id=""><div class="centeredTableHeader">Value Floor</div></th>
            <th class="tableHeader hasHoverTooltip" id=""><div class="centeredTableHeader">Value Ceiling</div></th>
            <th class="tableHeader hasHoverTooltip" id=""><div class="centeredTableHeader">Added Floor</div></th>
            <th class="tableHeader hasHoverTooltip" id=""><div class="centeredTableHeader">Added Ceiling</div></th>
            <th class="tableHeader hasHoverTooltip" id=""><div class="centeredTableHeader">Multi Floor</div></th>
            <th class="tableHeader hasHoverTooltip" id=""><div class="centeredTableHeader">Multi Ceiling</div></th>
            <th class="tableHeader hasHoverTooltip" id=""><div class="centeredTableHeader">Display Units</div></th>
            <th class="tableHeader hasHoverTooltip" id=""><div class="centeredTableHeader">Display Decimals</div></th>
        </tr>`;


        let levelString = "";



        // globalUI.currentMainMenuDisplayed

        // const displayConversions = 

        const arrayToParse = megaParsingFuckery.displayConversions[globalUI.currentMainMenuDisplayed];


        // let levelKeys = Object.keys(statListData);

        for (level of arrayToParse) {
            let currentReference = level;

            if (!fuzzyMatch(currentUserInput,currentReference.name ?? "",currentReference.realName ?? "",currentReference.desc ?? "",currentReference.aim ?? "",currentReference.type ?? "")) {continue;}

            // console.log(currentReference["Non-Attribute Power"])
            // let addedLimitChecker = currentReference.Limits.BonusesAdded[0] === 0 && currentReference.Limits.BonusesAdded[1] === 0;
            // let multiLimitChecker = currentReference.Limits.BonusesMultiplied[0] === 0 && currentReference.Limits.BonusesMultiplied[1] === 0;


            // <div class="enemyWaveEnemyIconAndLevelBox">
            //         <img src="/HonkaiSR/misc/glorp.png" class="enemyWaveEnemyIcon">
            //         <div class="enemyWaveEnemyLevelAndWeaknessBox">
            //             <div class="enemyWaveEnemyLevel">LvL 95</div>
            //             <div class="characterDisplayElementWeaknessIconHolderBoxBattleSettings">
            //     <img src="/HonkaiSR/icon/element/Thunder.png" class="characterDisplayElementWeaknessIcon">
            //     <img src="/HonkaiSR/icon/element/Wind.png" class="characterDisplayElementWeaknessIcon">
            //     <img src="/HonkaiSR/icon/element/Quantum.png" class="characterDisplayElementWeaknessIcon"></div>
            //         </div>
            //     </div>


            // <div class="enemyAddWaveEditRow">
            //         <div class="enemyAddWaveEditRowMoveButton clickable" onclick="userTriggers.addEnemyToWave(1,0,true,'Left')">◀</div>
            //         <div class="enemyAddWaveEditRowMoveButton clickable" onclick="userTriggers.addEnemyToWave(1,0,true,'Right')">▶</div>

            //         <div class="enemyAddWaveEditRowButton clickable" onclick="customMenu.createAddedEnemyMenu(1,0,false)">Edit</div>
            //     </div>

            if (globalUI.currentMainMenuDisplayed === 4) {
                levelString += `<div class="enemyWaveEnemyDisplayBox">
                    
                    <div class="addEnemyWeaknessesHeader">${level.name}</div>
                    

                    ${level.desc ? `<div class="rotationsSectionRowHolder3Overview">
                    <div class="actionDetailBody">
                        <div class="actionDetailBody3Description">
                            ${megaParsingFuckery.cleanDescription(level.params ?? [],level.desc)}
                        </div>
                    </div>
                    </div>` : ""}
                    
                </div>`;
            }
            else {
                levelString += `<div class="enemyWaveEnemyDisplayBox">
                    
                    <div class="addEnemyWeaknessesHeader">${level.realName}</div>
                    <div class="enemyAddWaveClass" style="font-size: 10px">${level.name}</div>
                    <div class="enemyAddWaveAttack">
                        [${level.aim}]
                        ${level.perma ? `<div class="enemyAddWaveAttackPerma">Perma</div>` : ""}
                        
                    </div>
                    
                    ${level.type ? `<div class="enemyAddWaveClassUpper">${level.type}</div>` : ""}

                    ${level.desc ? `<div class="rotationsSectionRowHolder3Overview">
                    <div class="actionDetailBody">
                        <div class="actionDetailBody3Description">
                            ${megaParsingFuckery.cleanDescription(level.params ?? [],level.desc)}
                        </div>
                    </div>
                    </div>` : ""}
                    
                </div>`;
            }



            // <div class="imageRowStatisticBox1">
            //         <div class="imageRowStatisticImageBox"><img src="/HonkaiSR/icon/property/IconAttack.png" class="imageRowStatisticImage"></div>
            //         <div class="imageRowStatisticNameBox">ATK</div>
            //         <div class="imageRowStatisticStatBox">718</div>
            //     </div>

            //     <div class="imageRowStatisticBox2">
            //         <div class="imageRowStatisticImageBox"><img src="/HonkaiSR/icon/property/IconSpeed.png" class="imageRowStatisticImage"></div>
            //         <div class="imageRowStatisticNameBox">SPD</div>
            //         <div class="imageRowStatisticStatBox">132</div>
            //     </div>

            //     <div class="imageRowStatisticBox1">
            //         <div class="imageRowStatisticImageBox"><img src="/HonkaiSR/icon/property/IconStatusResistance.png" class="imageRowStatisticImage"></div>
            //         <div class="imageRowStatisticNameBox">Effect RES</div>
            //         <div class="imageRowStatisticStatBox">0.3</div>
            //     </div>
            //     <div class="imageRowStatisticBox2">
            //         <div class="imageRowStatisticImageBox"><img src="/HonkaiSR/icon/property/IconBreakUp.png" class="imageRowStatisticImage"></div>
            //         <div class="imageRowStatisticNameBox">Toughness</div>
            //         <div class="imageRowStatisticStatBox">100 </div>
            //     </div>
            //     <div class="imageRowStatisticBox1">
            //         <div class="imageRowStatisticImageBox"><img src="/HonkaiSR/icon/property/IconMaxHP.png" class="imageRowStatisticImage"></div>
            //         <div class="imageRowStatisticNameBox">HP</div>
            //         <div class="imageRowStatisticStatBox">395,960,000 </div>
            //     </div>








            // levelString += `<div class="statsDisplayBoxEntryHolder">
            //     <div class="statsDisplayBoxEntryHolderHeader">${currentReference.name}</div>


            //     <div class="basicsDRContainer basicsDRContainerStatDisplay hasHoverTooltip" style="margin-bottom:2px"><span class="basicsDRValue basicsDRValueStatDisplay">${currentReference.objectKey}</span></div>

            //     <div class="statsDisplayBoxEntryHolderHeaderMini">LIMITS</div>


            //     <div class="totalHealingBoxBreakdownRows">
            //         <div class="totalHealingBoxHalfBreakdownRows hasHoverTooltip">
            //             <div class="totalHealingHeader">Flat Value Limits</div>
            //             <div class="totalHealingValueBoss">[${currentReference.Limits.FlatValueLimit[0]}, ${currentReference.Limits.FlatValueLimit[1]}]</div>
            //         </div>
            //         <div class="totalHealingBoxHalfBreakdownRows hasHoverTooltip">
            //             <div class="totalHealingHeader">Added Limits</div>
            //             <div class="totalHealingValueBoss">[${addedLimitChecker ? "None" : currentReference.Limits.BonusesAdded}]</div>
            //         </div>
            //         <div class="totalHealingBoxHalfBreakdownRows hasHoverTooltip">
            //             <div class="totalHealingHeader">Multi Limits</div>
            //             <div class="totalHealingValueBoss">[${multiLimitChecker ? "None" : currentReference.Limits.BonusesMultiplied}]</div>
            //         </div>
            //     </div>

            //     <div class="basicsDRContainer hasHoverTooltip">
            //     <span class="basicsDRStat">Display Unit</span><span class="rowTraceLine"></span><span class="basicsDRValue" id="">${currentReference.UnitsDisplay}</span>
            //     </div>
            //     <div class="basicsDRContainer hasHoverTooltip" style="margin-bottom:2px">
            //     <span class="basicsDRStat">UI Decimals</span><span class="rowTraceLine"></span><span class="basicsDRValue" id="">${currentReference.UIDecimalPlaces}</span>
            //     </div>
                
            // </div>`
        }
        // addedLimitChecker
        //currentReference.Limits.BonusesAdded[0]}, ${currentReference.Limits.BonusesAdded[1]

        // <td data-name="Stat ID:">${currentReference.ID}</td>
        //         <td data-name="Internal Name:">${currentReference.objectKey}</td>
        //         <td data-name="Proper Name:">${currentReference.name}</td>
        //         <td data-name="Value Floor:">${currentReference.Limits.FlatValueLimit[0]}</td>
        //         <td data-name="Value Ceiling:">${currentReference.Limits.FlatValueLimit[1]}</td>
        //         <td data-name="Added Floor:">${currentReference.Limits.BonusesAdded[0]}</td>
        //         <td data-name="Added Ceiling:">${currentReference.Limits.BonusesAdded[1]}</td>
        //         <td data-name="Multi Floor:">${currentReference.Limits.BonusesMultiplied[0]}</td>
        //         <td data-name="Multi Ceiling:">${currentReference.Limits.BonusesMultiplied[1]}</td>
        //         <td data-name="Display Units:">${currentReference.UnitsDisplay}</td>
        //         <td data-name="Display Decimals:">${currentReference.UIDecimalPlaces}</td>

        // readSelection("mainListHeaders").innerHTML = tableHeaders;
        readSelection("eventBodyMainBox").innerHTML = levelString;//"";

        megaParsingFuckery.populateLinkedEntriesGlobal("gModGreen")
        megaParsingFuckery.populateLinkedEntriesGlobal("gTempYellow")
        // tooltips.loadTooltips();//update tooltips for things that were just generated
        
    },
    pageLoad(loadFile) {
        const bodyBox = readSelection("eventBodyMainBox");
        // compositeAbilityObject = {}
        // const isLightcone = compositeAbilityObject.isLightcone;
        // const isRelic = compositeAbilityObject.isRelic;

        // globalIsLightcone = isLightcone;
        // globalIsRelic = isRelic;

        // loadFile = loadFile ?? compositeAbilityObject.abilityList[compositeAbilityObject.abilityList.length >= 2 ? 1 : 0];
        // let configAbility = compositeAbilityObject.abilityObject[loadFile];

        // if (!configAbility) {
        //     loadFile = loadFile.replace(compositeAbilityObject.trimCharacterName,compositeAbilityObject.trimSummonName);
        //     // console.log(loadFile)
        //     configAbility = compositeAbilityObject.abilityObject[loadFile];
        //     // compositeAbilityObject.trimSummonName

        // }

        // let initialCounter = 1;
        // let eventBodyString = megaParsingFuckery.fillEventBodyBox(configAbility.parse,initialCounter);
        // let eventBodyStringOnAdd = megaParsingFuckery.fillEventBodyBox(configAbility.whenAdded,initialCounter);
        // let eventBodyStringOnAbort = megaParsingFuckery.fillEventBodyBox(configAbility.onAbort,initialCounter);
        // let eventBodyStringFunctions = megaParsingFuckery.fillEventBodyBox(configAbility.functions,initialCounter);
        

        // let referenceBodyString = configAbility.references.length ? megaParsingFuckery.fillEventBodyBox(configAbility.references,initialCounter) : null;
        // currentCharFilePrefix = compositeAbilityObject.trimCharacterName;

        

        // let referenceGlobalString = configAbility.referencesGlobal?.length ? megaParsingFuckery.fillEventBodyBox(configAbility.referencesGlobal,initialCounter) : null;
        // let referenceGlobalFunctionString = configAbility.referencesGlobalFunctions?.length ? megaParsingFuckery.fillEventBodyBox(configAbility.referencesGlobalFunctions,initialCounter) : null;
        
        

        // // "fileName": "Saber_Skill02",
        // // "abilityType": "Skill",
        // // "energy": 30,
        // // "toughnessList": [
        // //     20,
        // //     0,
        // //     10
        // // ],
        // // parse: []
        // // references: []
        // // desc: currentLCEntry.desc,
        // // params: currentLCEntry.params,
        // const isGlobalNoImage = compositeAbilityObject.fullCharacterName.toLowerCase().includes("global")
        // || compositeAbilityObject.fullCharacterName.toLowerCase().includes("enemyabilities");

        // globalIsNoImage = isGlobalNoImage;

        // // console.log(compositeAbilityObject.fullCharacterName,characterRef.preview)
        // const characterRef = characters[compositeAbilityObject.fullCharacterName];
        // const lightconeRef = lightcones[compositeAbilityObject.fullCharacterName];
        // const relicSetRef = relicSets[compositeAbilityObject.fullCharacterName];
        // // console.log(compositeAbilityObject.fullCharacterName,characterRef,characters)

        // const startingKeys = [
        //     // {leftHand: "File", keyValue: "fileName"},
        //     {leftHand: "Ability", keyValue: "abilityType"},
        //     {leftHand: "Skill Trigger", keyValue: "skillTrigger"},
        //     {leftHand: "Energy", keyValue: "energy"},
            
            
        //     // {leftHand: "Toughness", keyValue: "toughnessList"},
        // ];

        // // if (!isGlobalNoImage) {
        // //     // console.log(readSelection("libraryCharacterHeaderPreview"))
        // //     readSelection("libraryCharacterHeaderPreview").src = `/HonkaiSR/${isRelic ? relicSetRef.icon : (isLightcone ? lightconeRef.preview : characterRef.preview)}`;
        // // }


        // // ${!isGlobalNoImage ? `<div class="customMenuResultRowIcon">
        // //     <img src="/HonkaiSR/${isRelic ? relicSetRef.icon : (isLightcone ? lightconeRef.preview : characterRef.preview)}" class="${isRelic ? "eventCharacterFileIconRelic" : "eventCharacterFileIcon"}" style="border: 2px solid #d2ae73;">
        // // </div>` : ""}
        // let startingString = `
            
            
        //     <div class="eventCharacterFileInfoBox">

        //     <div class="abilitySelectorFloaterBox">
        //         <div class="abilitySelectorFloaterBoxName">Ability Selection</div>
        //         <select class="selectorWidthRestriction" id="fileSelectionSelector" onchange="megaParsingFuckery.renewFileSelected()">
        //     </div>
        //     `;
            

        // let optionsString = "";

        // for (let fileEntry of compositeAbilityObject.abilityList) {
        //     optionsString += `<option value="${fileEntry}" ${fileEntry === loadFile ? "selected" : ""}>${fileEntry}</option>`
        // }
        // optionsString += "</select></div>"
        // startingString += optionsString;



        // let rowAlternating = 1;
        // startingString += `<div class="${globalIsLightcone || globalIsRelic ? "energyAndToughnessRowHolderItems" : "energyAndToughnessRowHolder"}">`;
        // if (!isLightcone) {


        //     const propertyDisplayTemplates = {
        //         energy(keyValue,configAbility) {
        //             return `<div class="imageRowStatisticBoxWithIcon">
        //                 <img src="/HonkaiSR/icon/property/IconEnergyRecovery.png" class="characterDisplayLogStatIcon"></img>
        //                 <div class="imageRowStatisticNameBoxDETAILSWithIcon">${keyValue}</div>
        //             </div>`;
        //         },
        //         skillTrigger(keyValue,configAbility) {
        //             return `<div class="imageRowStatisticBoxWithIcon">
        //                 <div class="imageRowStatisticNameBoxDETAILSWithIcon">${keyValue}${configAbility.abilityType ? `[${configAbility.abilityType}]` : ""}</div>
        //             </div>`;
        //         },
        //         // abilityType(keyValue) {
        //         //     return `<div class="imageRowStatisticBoxWithIcon">
        //         //         <div class="imageRowStatisticNameBoxDETAILSWithIcon">${keyValue}</div>
        //         //     </div>`;
        //         // },
        //     }
            
        //     for (let entry of startingKeys) {
        //         if (configAbility[entry.keyValue] == null) {

        //             // loadFile = loadFile ?? compositeAbilityObject.abilityList[compositeAbilityObject.abilityList.length >= 2 ? 1 : 0];

        //             for (let findAbilityEntry of compositeAbilityObject.abilityList) {
        //                 const testCurrentEntry = compositeAbilityObject.abilityObject[findAbilityEntry];
        //                 if (!testCurrentEntry.childAbilityList) {continue;}

        //                 const newSet = new Set(testCurrentEntry.childAbilityList)
        //                 if (newSet.has(loadFile)) {
        //                     configAbility["energy"] = testCurrentEntry["energy"];
        //                     configAbility["abilityType"] = testCurrentEntry["abilityType"];
        //                     configAbility["skillTrigger"] = testCurrentEntry["skillTrigger"];
        //                     configAbility.toughnessList = testCurrentEntry.toughnessList;
        //                     break;
        //                 }
        //             }

        //             // childAbilityList


        //             continue;
        //         }
        //         if (entry.keyValue === "abilityType") {continue;}
        //         // startingString += `<div class="">${configAbility[entry]}</div>`;

        //         // <div class="imageRowStatisticImageBox"><img src="${currentKey.icon}" class="${isStatMenuCreation ? "imageRowStatisticImageStatMenu" : "imageRowStatisticImage"}"/></div>
        //         // ${subRolls && estRolls ? `<div class="imageRowStatisticStatBoxRollsEst">${estRolls}</div>` : ""}


        //         if (propertyDisplayTemplates[entry.keyValue]) {startingString += propertyDisplayTemplates[entry.keyValue](configAbility[entry.keyValue],configAbility);}
        //         else {
        //             startingString +=  `<div class="imageRowStatisticBox${(globalIsLightcone || globalIsRelic) ? rowAlternating : 0}DETAILS">
        //                 <div class="imageRowStatisticNameBoxDETAILS">${entry.leftHand}</div>
        //                 <div class="imageRowStatisticStatBoxDETAILS">${configAbility[entry.keyValue]}</div>
        //             </div>`;
        //         }

        //         if (rowAlternating === 2) {rowAlternating = 1;}
        //         else {rowAlternating++;}
        //     }
        // }


        // let toughnessRowString = "";
        // if (configAbility.toughnessList) {
        //     const toughnessIndexConversion = {
        //         0: "ST",
        //         1: "AOE",
        //         2: "Blast"
        //     }

        //     const check1 = configAbility.toughnessList[0] != 0;
        //     const check2 = configAbility.toughnessList[1] != 0;
        //     const check3 = configAbility.toughnessList[2] != 0;
        //     const hasActualValues = check1 || check2 || check3;

            

        //     if (hasActualValues) {
        //         toughnessRowString += `<img src="/HonkaiSR/icon/property/IconBreakUp.png" class="characterDisplayLogStatIconCenter"></img>`;

        //         for (let i=0;i<3;i++) {
        //             if (configAbility.toughnessList[i] === 0) {continue;}
        //             toughnessRowString += `<div class="toughnessTableRowItemBox">
        //                 <div class="toughnessTableRowItemHeader">${toughnessIndexConversion[i]}</div>
        //                 <div class="toughnessTableRowItemValue">${configAbility.toughnessList[i]}</div>
        //             </div>`;
        //         }
        //     }
        // }

        // // <div class="toughnessTableRowHeader">Toughness</div>
        // let toughnessString = !isLightcone && toughnessRowString != "" ? `<div class="toughnessTableRowBox">
            

        //     <div class="toughnessTableRowTableRow">
        //         ${toughnessRowString}
        //     </div>
        
        // </div>` : "";

        // let statRowString1 = "";
        // let statRowString2 = "";

        // let lightconeStatRow = "";

        // console.log(compositeAbilityObject.fixedStats)
        // if (isRelic) {
        //     if (compositeAbilityObject.fixedStats[2]) {
        //         const menuBoxDisplayOrder = Object.keys(compositeAbilityObject.fixedStats[2]);
        //         statRowString1 = customHTML.createAlternatingStatRows(menuBoxDisplayOrder,compositeAbilityObject.fixedStats[2]);
        //     }
        //     if (compositeAbilityObject.fixedStats[4]) {
        //         const menuBoxDisplayOrder = Object.keys(compositeAbilityObject.fixedStats[4]);
        //         statRowString2 = customHTML.createAlternatingStatRows(menuBoxDisplayOrder,compositeAbilityObject.fixedStats[4]);
        //     }
        // }
        // if (isLightcone && !isRelic && compositeAbilityObject.fixedStats && compositeAbilityObject.fixedStats[currentLCSuperimposition]) {
        //     const menuBoxDisplayOrder = Object.keys(compositeAbilityObject.fixedStats[currentLCSuperimposition]);
        //     lightconeStatRow = customHTML.createAlternatingStatRows(menuBoxDisplayOrder,compositeAbilityObject.fixedStats[currentLCSuperimposition]);
        // }

        

        // if (isLightcone) {
        //     toughnessString += `
        //     ${!isRelic ? `<div class="customMenuSearchNote" id="customMenuSearchNote">Changing superimposition won't change the events, only the description</div>
        //     <div class="superimpositionHolderbox">
        //         <div class="superimpositionButton clickable" id="superimpositionButton1" onclick="megaParsingFuckery.updateSuperimposition(1)" style="${currentLCSuperimposition === 1 ? "background-color: rgb(225, 225, 228); color: black;" : "background-color: transparent; color: rgb(225, 225, 228);"}">1</div>
        //         <div class="superimpositionButton clickable" id="superimpositionButton2" onclick="megaParsingFuckery.updateSuperimposition(2)" style="${currentLCSuperimposition === 2 ? "background-color: rgb(225, 225, 228); color: black;" : "background-color: transparent; color: rgb(225, 225, 228);"}">2</div>
        //         <div class="superimpositionButton clickable" id="superimpositionButton3" onclick="megaParsingFuckery.updateSuperimposition(3)" style="${currentLCSuperimposition === 3 ? "background-color: rgb(225, 225, 228); color: black;" : "background-color: transparent; color: rgb(225, 225, 228);"}">3</div>
        //         <div class="superimpositionButton clickable" id="superimpositionButton4" onclick="megaParsingFuckery.updateSuperimposition(4)" style="${currentLCSuperimposition === 4 ? "background-color: rgb(225, 225, 228); color: black;" : "background-color: transparent; color: rgb(225, 225, 228);"}">4</div>
        //         <div class="superimpositionButton clickable" id="superimpositionButton5" onclick="megaParsingFuckery.updateSuperimposition(5)" style="${currentLCSuperimposition === 5 ? "background-color: rgb(225, 225, 228); color: black;" : "background-color: transparent; color: rgb(225, 225, 228);"}">5</div>
        //     </div>` : ""}
            
            
            
        //     ${lightconeStatRow ? `<div class="characterDisplayPathAndNameBox">
        //         <div class="characterDisplayPathNameBox">Lightcone Menu Bonuses:</div>
        //     </div>` + lightconeStatRow : ""}
        //     ${isRelic ? `
        //         ${statRowString1 ? `<div class="characterDisplayPathAndNameBox">
        //             <div class="characterDisplayPathNameBox">2-Piece Menu Bonuses:</div>
        //         </div>` + statRowString1 : ""}
                

        //         ${statRowString2 ? `<div class="characterDisplayPathAndNameBox">
        //             <div class="characterDisplayPathNameBox">4-Piece Menu Bonuses:</div>
        //         </div>` + statRowString2 : ""}

                
        //         <div class="rightDescriptionBox" id="lightconeSkillDescription"><span class="descriptionNumberColor">2pc:</span> ${pagePopulation.cleanDescription(relicSetRef.params[0],relicSetRef.desc[0])}</div>
        //         ${relicSetRef.params[1] != undefined && relicSetRef.desc[1] != undefined ? `<div class="rightDescriptionBox" id="lightconeSkillDescription"><span class="descriptionNumberColor">4pc:</span> ${pagePopulation.cleanDescription(relicSetRef.params[1],relicSetRef.desc[1])}</div>` : ""}
        //         ` 
        //         : `<div class="rightDescriptionBox" id="lightconeSkillDescription">${pagePopulation.cleanDescription(lightconeRef.params[currentLCSuperimposition-1],lightconeRef.desc)}</div>`}
        //     `
        // }
        // startingString += toughnessString + ``;
        // startingString += `</div>`



        // // <details class="rotationsPermaConditionsExpand" open="">
        // //     <summary class="rotationConditionOperatorHeaderAbilityTriggerConditionHeader clickable">
        // //         <div class="rotationConditionOperatorHeaderCondition">${parseRef.name}</div>
        // //         ${returnString}
        // //     </summary>

        // //     <div class="rotationConditionOperatorBoxMain">
        // //         ${hasParse ? `<div class="rotationConditionOperatorHeaderConditionTHEN">THEN</div>
        // //         <div class="rotationsSectionRowHolder${initialCounter%2 === 0 ? 2 : 1}">
        // //             ${parseString}
        // //         </div>` : ""}
        // //         ${hasRef ? `<div class="rotationConditionOperatorHeaderConditionELSE">ELSE</div>
        // //         <div class="rotationsSectionRowHolder${initialCounter%2 === 0 ? 2 : 1}">
        // //             ${refString}
        // //         </div>` : ""}
        // //     </div>
        // // </details>


        // //TODO: add back in later
        // // ${startingString}

        // readSelection("eventReaderControlsBox").innerHTML = startingString;

        // const mainAbilityString = `
        // <div class="eventBodyScrollerMain">
        //     <details class="rotationsPermaConditionsExpand" open="">
        //         <summary class="rotationConditionOperatorHeaderAbilityTriggerConditionHeader clickable">
        //             <div class="rotationConditionOperatorHeaderCondition">ABILITY LOG</div>
        //         </summary>
        //         ${eventBodyString}
        //     </details>
        //     ${eventBodyStringOnAdd ? `<details class="rotationsPermaConditionsExpand" open="">
        //         <summary class="rotationConditionOperatorHeaderAbilityTriggerConditionHeader clickable">
        //             <div class="rotationConditionOperatorHeaderCondition">ADDED LOG</div>
        //         </summary>
        //         ${eventBodyStringOnAdd}
        //     </details>` : ""}
        //     ${eventBodyStringOnAbort ? `<details class="rotationsPermaConditionsExpand" open="">
        //         <summary class="rotationConditionOperatorHeaderAbilityTriggerConditionHeader clickable">
        //             <div class="rotationConditionOperatorHeaderCondition">ON ABILITY ABORT</div>
        //         </summary>
        //         ${eventBodyStringOnAbort}
        //     </details>` : ""}

            
        //     ${referenceBodyString ? `<details class="rotationsPermaConditionsExpand" open="">
        //         <summary class="rotationConditionOperatorHeaderAbilityTriggerConditionHeader clickable">
        //             <div class="rotationConditionOperatorHeaderCondition">MODIFIER LOG</div>
        //         </summary>
        //         ${referenceBodyString}
        //     </details>` : ""}
        //     ${eventBodyStringFunctions ? `<details class="rotationsPermaConditionsExpand" open="">
        //         <summary class="rotationConditionOperatorHeaderAbilityTriggerConditionHeader clickable">
        //             <div class="rotationConditionOperatorHeaderCondition">ABILITY FUNCTIONS</div>
        //         </summary>
        //         ${eventBodyStringFunctions}
        //     </details>` : ""}
        //     ${referenceGlobalString ? `<details class="rotationsPermaConditionsExpand" open="">
        //         <summary class="rotationConditionOperatorHeaderAbilityTriggerConditionHeader clickable">
        //             <div class="rotationConditionOperatorHeaderCondition">GLOBAL MODIFERS</div>
        //         </summary>
        //         ${referenceGlobalString}
        //     </details>` : ""}
        //     ${referenceGlobalFunctionString ? `<details class="rotationsPermaConditionsExpand" open="">
        //         <summary class="rotationConditionOperatorHeaderAbilityTriggerConditionHeader clickable">
        //             <div class="rotationConditionOperatorHeaderCondition">GLOBAL FUNCTIONS</div>
        //         </summary>
        //         ${referenceGlobalFunctionString}
        //     </details>` : ""}
        // </div>
        // `;

        

        // bodyBox.innerHTML = mainAbilityString;

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
}

megaParsingFuckery.pageLoad();







// userTriggers.updateCharacterUI();
// customHTML.establishZoomableTraces();
customHTML.establishMobileSideScrollerMenu();
megaParsingFuckery.updateMainMenuDisplayed(2);

megaParsingFuckery.generateInitialTable();

if (location.hash) {
    const elemIDAfter = decodeURIComponent(location.hash.slice(1));
    // const elemIDAfter = location.hash.slice(1);

    // console.log(elemIDAfter,readSelection(decodeURIComponent((elemIDAfter))))
    if (elemIDAfter) {readSelection(elemIDAfter)?.scrollIntoView({block:"center",behavior: "smooth"});};
}





