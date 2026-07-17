let globalTargetPoolKeyDisplay = null;
const defaultValidUseConditions = new Set (["Skill","Ultimate"]);
const customHTML = {
    ...traceTreeVisualData,
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

            let currentKey = basicShorthand.findStatObject(entry);
            const statInternal = greatTableKeys[entry] ?? entry;
            
            let unit = currentKey.sets[entry].unit;
            let isPercent = unit === "%";
            let valuePre = statLocation[entry];
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
                    <div class="imageRowStatisticStatBox">${(+valueRef ?? 0)}${unit}</div>
                    ${subRolls && estRolls ? `<div class="imageRowStatisticStatBoxRollsEst">${estRolls}</div>` : ""}
                </div>
                `;
                loopCounter++;
            }
        }

        return returnString;
    },
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
    megaRotationFuckery(characterName) {
        // const conditionsRef = defaultConditions[characterName];
        let conditionsRef = null;
        const warningRef = conditionsCharacterDisplayWarning[characterName];
        const logicRef = turnLogic[characterName];
        const abilityTargetPools = logicRef.abilityTargetPools;
        

        // console.log(characterName)

        const characterObject = globalRecords.character;
        for (let charSlot in characterObject) {
            const currentCharObject = characterObject[charSlot];

            if (currentCharObject.name === characterName) {
                //I initially structured conditions to be stored in the default conditions object, but decided against it
                //bc later if people want to "revert" to default conditions, it wouldn't let them do it since they'd already modified the default storage area
                //so while it's jank to do it this way now, we reference the character object(and in turn, user imports) to assign and modify conditions
                //this way later we can add a button that will let people restore to defaults
                conditionsRef = currentCharObject.conditions;
                break;
            }
        }


        const mainBox = readSelection("mainConditionsBoxHolderOverview");
        mainBox.innerHTML = "";
        const missingBox = readSelection("mainConditionsBoxHolderOverviewMissingWarning");

        const mainBoxTarget = readSelection("mainConditionsTargetBoxHolderOverview");
        mainBoxTarget.innerHTML = "";
        const missingBoxTarget = readSelection("mainConditionsTargetBoxHolderOverviewMissingWarning");

        if (!conditionsRef) {
            mainBox.style.display = "none";
            missingBox.style.display = "block";

            mainBoxTarget.style.display = "none";
            missingBoxTarget.style.display = "block";
        }
        else {
            mainBox.style.display = "flex";
            missingBox.style.display = "none";

            mainBoxTarget.style.display = "flex";
            missingBoxTarget.style.display = "none";

            let fullReturnString = "";

            fullReturnString += customHTML.megaRotationAbilityDisplay(conditionsRef,"Ultimate",characterName);
            fullReturnString += customHTML.megaRotationAbilityDisplay(conditionsRef,"Skill",characterName);
            fullReturnString += `<div class="rotationsSectionRowHolder">
                                    <!-- <div class="traceTypeDisplayBox">
                                        <div class="traceTypeDisplay">Basic ATK</div>
                                    </div> -->
                                    <div class="statFiltersRowHeader">Basic ATK</div>
                                    <div class="traceContentBodyBoxRotationsWarning">Basic ATK is always called when skill conditions fail.</div>
                                </div>`;

            let memoStringer = "";
            memoStringer += customHTML.megaRotationAbilityDisplay(conditionsRef,"MemoSkillEnh",characterName);
            if (memoStringer) {
                memoStringer += `<div class="rotationsSectionRowHolder">
                                    <!-- <div class="traceTypeDisplayBox">
                                        <div class="traceTypeDisplay">MemoSkill</div>
                                    </div> -->
                                    <div class="statFiltersRowHeader">MemoSkill</div>
                                    <div class="traceContentBodyBoxRotationsWarning">MemoSkill is used when the Enhanced MemoSkill conditions fail.</div>
                                </div>`
            }

            mainBox.innerHTML = fullReturnString + memoStringer;


            const targetHasValidChecks = conditionsRef.validTargetChecks ?? [];

            let displayString = "";
            for (let abilityKey of targetHasValidChecks) {
                let addedString = `<div class="rotationsSectionRowHolder">
                    <div class="statFiltersRowHeader">${abilityKey}</div>
                    <div class="rotationsPermaConditionsExpandHolder" id="rotationsConditionsBox${abilityKey}PermaTarget"></div>
                    <div class="traceContentBodyBoxRotationsWarning" id="rotationsConditionsWarningBox${abilityKey}Target"></div>
                    <div class="rotationsConditionsBodyBox" id="rotationsConditionsBodyBox${abilityKey}Target"></div>
                </div>`;
                displayString += addedString;
            }

            mainBoxTarget.innerHTML = displayString || `<div class="traceContentBodyBoxRotationsWarningMissing">
                If you're seeing this then it is for one of the following reasons:<br>
                <ul>
                    <li>This character may not actually have any abilities that aren't AOE targeting, and as such needs no target logic.</li>
                    <li>This character may actually need target logic, but would only need it for ENEMY targeting, which I don't have set up yet. This is in progress. DO NOTE THOUGH that the calc automatically handles enemy targeting for you for now.</li>
                    <li>Or, Vash is dumb as hell and forgot to enable target logic on this character</li>
                </ul>
                If you believe target logic <i><b>should</b></i> be up and running on this character, join the discord and let Vash know.
            </div>`;
            


            customHTML.megaRotationTargetDisplay(conditionsRef,"Skill",characterName,abilityTargetPools) 
            customHTML.megaRotationTargetDisplay(conditionsRef,"Ultimate",characterName,abilityTargetPools) 
            customHTML.megaRotationTargetDisplay(conditionsRef,"MemoSkill",characterName,abilityTargetPools)
            customHTML.megaRotationTargetDisplay(conditionsRef,"MemoSkillEnh",characterName,abilityTargetPools) 
            

            
        }
    },
    megaRotationAbilityDisplay(conditionsRef,refSkillString,characterName) {
        const warningRef = conditionsCharacterDisplayWarning[characterName];

        const ultyCheck = conditionsRef ? conditionsRef[refSkillString] ??= rotationsUISuffering.getReturnStruct("AND") : null;
        if (!defaultValidUseConditions.has(refSkillString)) {
            const hasExtraUseConditions = conditionsRef.extraUseConditions ? new Set(conditionsRef.extraUseConditions) : null;
            if (hasExtraUseConditions) {
                if (!hasExtraUseConditions.has(refSkillString)) {
                    return "";
                }
            }
            else {
                return "";
            }
        }

        let indexCounter = -1;
        let layerCount = 0;

        let rotationStringer = "";
        let permaConditionStringer = "";
        let warningStringer = warningRef ? warningRef[refSkillString] : "";

        const arrayToPass = [];
        if (ultyCheck) {
            rotationStringer = rotationsUISuffering.displayLoop(characterName,ultyCheck,indexCounter,layerCount,arrayToPass,refSkillString,null);

            const fullWarningRef = `${refSkillString}PermaConditions`;
            if (warningRef?.[fullWarningRef]?.length) {
                let addedString = ""
                addedString = `<details class="rotationsPermaConditionsExpand">
                    <summary class="actionDetailBodyDetailExpandHeaderBackground clickable">Show Permanent Conditions (${warningRef[fullWarningRef].length})</summary>`;
    
                for (let conditionText of warningRef[fullWarningRef]) {
                    addedString += `<div class="actionDetailBody">- ${conditionText}</div>`
                }      
                
                permaConditionStringer = addedString + `</details>`
            }
        }


        // <details class="rotationsPermaConditionsExpandTargetBox" open="">
        //         <summary class="calcUserTargetConditionHeader clickable">
        //             <div class="rotationConditionOperatorHeaderCondition">User Conditions</div>
                    
        //         </summary>
                
        //     </details>
        let returnStringer = `<div class="rotationsSectionRowHolder">
            <div class="statFiltersRowHeader">${refSkillString}</div>
            <div class="rotationsPermaConditionsExpandHolder" id="rotationsConditionsBox${refSkillString}Perma">${permaConditionStringer}</div>
            <div class="traceContentBodyBoxRotationsWarning" id="rotationsConditionsWarningBox${refSkillString}">${warningStringer}</div>

            <div class="rotationsConditionsBodyBox" id="rotationsConditionsBodyBox${refSkillString}">${rotationStringer}</div>

            

            
        </div>`;

        return returnStringer;
    },
    megaRotationTargetDisplay(conditionsRef,refSkillString,characterName,abilityTargetPools) {
        const warningRef = conditionsCharacterDisplayWarning[characterName];

        const fullTargetName = `${refSkillString}Target`;
        const validTargetChecks = conditionsRef?.validTargetChecks;
        const newValidSet = new Set (validTargetChecks);

        const hasValidSkillTarget = conditionsRef && (conditionsRef[fullTargetName] != undefined || newValidSet.has(refSkillString));
        if (!hasValidSkillTarget) {return;}

        const skillRotations = readSelection(`rotationsConditionsBodyBox${refSkillString}Target`);
        skillRotations.innerHTML = "";

        readSelection(`rotationsConditionsWarningBox${refSkillString}Target`).innerHTML = warningRef ? warningRef[fullTargetName] : "";
        const permaConditionsBoxSkill = readSelection(`rotationsConditionsBox${refSkillString}PermaTarget`);
        permaConditionsBoxSkill.innerHTML = "";
        
        const skillCheckTarget = hasValidSkillTarget ? conditionsRef[fullTargetName] ??= rotationsUISuffering.getReturnStruct("Target Priority") : null;

        if (skillCheckTarget) {

            const poolKey = abilityTargetPools[refSkillString];
            globalTargetPoolKeyDisplay = poolKey;
            
            let indexCounterSkill = -1;
            let layerCountSkill = 0;

            const arrayToPassSkill = [];
            if (skillCheckTarget) {
                skillRotations.innerHTML = rotationsUISuffering.displayLoop(characterName,skillCheckTarget,indexCounterSkill,layerCountSkill,arrayToPassSkill,fullTargetName,null);

                // rotationsConditionsWarningBoxSkill

                const fullWarningRef = `${refSkillString}PermaConditionsTarget`;
                // console.log(fullWarningRef)
                if (warningRef?.[fullWarningRef].length) {
                    

                    let addedString = ""
                    addedString = `<details class="rotationsPermaConditionsExpand">
                        <summary class="actionDetailBodyDetailExpandHeaderBackground clickable">Show Permanent Conditions (${warningRef[fullWarningRef].length})</summary>`;
        
                    for (let conditionText of warningRef[fullWarningRef]) {
                        addedString += `<div class="actionDetailBody">- ${conditionText}</div>`
                    }      
                    
                    permaConditionsBoxSkill.innerHTML = addedString + `</details>`
                }
                else {permaConditionsBoxSkill.innerHTML = "";}
            }
            globalTargetPoolKeyDisplay = null;
        }
    },
    populateGear(elemID,collection,isStatName) {
        const select = readSelection(elemID);
        // if (collection != traits) {


        // nameAdjustment = propertyImagePaths[mappedFamilies[filterName]].sets[filterName].specific;

        const mappedFamilies = basicShorthand.mappedFamilies;

        // greatTableIndex
        // greatTableKeys

        for (const gear in collection) {
            if (collection.hasOwnProperty(gear)) {
                const option = document.createElement("option");
                let finalText = gear;

                if (isStatName) {
                    const statIndex = greatTableIndex[gear];
                    finalText = propertyImagePaths[mappedFamilies[statIndex]].sets[statIndex].specific;
                }

                option.text = finalText;
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
    populateFilters(filterBox,filterTable) {
        let pathHTML = readSelection(filterBox);
        let table = globalUI.filters[`char${globalUI.currentCharacterDisplayed}`][filterTable];
        let filterHTML = customHTML.displayFilterHTML;

        const isOrderedTable = filterBox.toLowerCase().includes("trash");
        //might have other ordered tables later, but right now this is the only search related setting where order actually matters.
        if (!isOrderedTable) {table.sort();}
        
        let filterString = "";
        for (let filterName in table) {
            filterString += filterHTML(table[filterName],filterBox,filterTable);
        }
        pathHTML.innerHTML = filterString;

    },
    addFilter(filterID,filterBox,filterTable,compareTable,limit,valueInsert) {
        let filterName = readSelection(filterID);
        const isTrashStat = filterTable.toLowerCase().includes("trash");
        const charSlot = `char${globalUI.currentCharacterDisplayed}`;
        const filterPath = globalUI.filters[charSlot];
        let table = filterPath[filterTable];

        if (isTrashStat && !filterPath[filterTable]) {
            filterPath[filterTable] = [
                ...maslow[globalRecords.character[charSlot].name].defaultTrashSub
            ];
            table = filterPath[filterTable];
        }
        // console.log(table)
        //If we are submitting more than the allowed locks, don't do anything, don't add, etc
        // if (table.length>=limit) {filterName.value = "";return;}
        if (limit && table.length === limit) {
            filterName.value = "";
            return;
        }
        const isStat = filterTable.toLowerCase().includes("stat");

        // console.log(isStat ? basicShorthand.reverseKeyMappings[filterName.value] : filterName.value,filterName.value,basicShorthand.reverseKeyMappings);
        // customHTML.addFilter(`mainstatBodyLocksInput`,`mainstatBodyLocksContainer`,`mainstatBodyLocks`,relics.Body.mainAffix)

        const oldValue = compareTable ? filterName.value : valueInsert;
        // console.log(greatTableKeys[basicShorthand.reverseKeyMappings[oldValue]],oldValue,compareTable)
        // console.log(compareTable[isStat ? greatTableKeys?.[basicShorthand.reverseKeyMappings[oldValue]] : oldValue])

        // if ((!compareTable[isStat ? basicShorthand.reverseKeyMappings[oldValue] : oldValue] && oldValue && oldValue != "--")) {filterName.value = "";return;}
        if (compareTable && compareTable[isStat ? greatTableKeys?.[basicShorthand.reverseKeyMappings[oldValue]] : oldValue] == undefined && oldValue && oldValue != "--") {filterName.value = "";return;}
        
        // console.log("reached this point")
        let found = false;
        for (let entry in table) {
            if (table[entry] === oldValue 
                || (isTrashStat && table[entry] === greatTableKeys[basicShorthand.reverseKeyMappings[oldValue]])) 
                {found=true;break;}


            // basicShorthand.reverseKeyMappings[currentGroup.sets[innerKey].specific] = innerKey;

                // basicShorthand.indexToSpecific[innerKey] = currentGroup.sets[innerKey].specific;
        }

        // desired1: null,
        // desired2: null,
        // desired3: null,
        // desired4: null,
        if (isTrashStat) {
            const internalName = greatTableKeys[basicShorthand.reverseKeyMappings[oldValue]];
            if (internalName === filterPath.desired1 
                || internalName === filterPath.desired2
                || internalName === filterPath.desired3
                || internalName === filterPath.desired4) {
                    found = true;
                }

            const currentArray = filterPath[filterTable];
            if (currentArray.length) {
                //might seem pointless but I'm just making sure that a trash sub is never matching a desired sub
                //even if the trash sub array isn't defined yet and gets spread with the default on the character
                //bc we want to avoid a scenario where a user imports a filter set that didn't have trash defined 
                //so it would default to the character default which might have dupes on desired subs
                for (let i=currentArray.length-1;i>=0;i--) {
                    const currentEntry = currentArray[i];

                    if (currentEntry === filterPath.desired1 
                        || currentEntry === filterPath.desired2
                        || currentEntry === filterPath.desired3
                        || currentEntry === filterPath.desired4) {
                            currentArray.splice(i,1);
                        }
                }
            }
        }

        if (compareTable && oldValue === "--") {filterName.value = "";}//if the user WANTS an empty filter
        
        if (!found) {
            const valueToUse = compareTable ? filterName.value : valueInsert;
            table.push(isStat ? greatTableKeys[basicShorthand.reverseKeyMappings[valueToUse]] : valueToUse)
        }
        if (compareTable) {filterName.value = "";}
        
        customHTML.populateFilters(filterBox,filterTable);
        // filters.updateLockedBreakdownOptions();
    },
    updateOcclusion(filterTable,toggleID) {
        let isChecked = readSelection(toggleID).checked;
        globalUI.filters[`char${globalUI.currentCharacterDisplayed}`][filterTable] = isChecked;
    },
    updateOcclusionDisplay(filterTable,toggleID) {
        readSelection(toggleID).checked = globalUI.filters[`char${globalUI.currentCharacterDisplayed}`][filterTable];
    },
    deleteFilter(filterName,filterBox,filterTable,filterIndex) {
        filterName = decodeURIComponent(filterName);
        // console.log(filterName)
        let index = 0;
        let table = globalUI.filters[`char${globalUI.currentCharacterDisplayed}`][filterTable];
        for (let entry in table) {
            if (table[entry] === filterName) {
                globalUI.filters[`char${globalUI.currentCharacterDisplayed}`][filterTable].splice(index,1);
                break;
            }
            index += 1;
        }
        customHTML.populateFilters(filterBox,filterTable);
        // customHTML.updateLockedBreakdownOptions();
    },
    displayFilterHTML(filterName,filterBox,filterTable) {
        //Stop any ' or " from messing everything up, like Brewmaster's Cork
        const encodedFilterName = encodeURIComponent(filterName).replace(/'/g, "\\'");
        let useImage = false;
        let imagePath = null;
        let nameAdjustment = filterName;

        // relicSets
        const relicCheck = filterTable.toLowerCase().includes("armor") || filterTable.toLowerCase().includes("planar");
        if (relicCheck) {
            useImage = true;
            imagePath = "/HonkaiSR/" + relicSets[nameAdjustment].icon;
        }
        // armorSetLocks2pc
        //planarSetLocks

        const lcCheck = filterTable.toLowerCase().includes("lightcone");
        if (lcCheck) {
            useImage = true;
            imagePath = "/HonkaiSR/" + lightcones[nameAdjustment].icon;
        }

        const statCheck = filterTable.toLowerCase().includes("stat");
        if (statCheck) {
            useImage = true;
            const mappedFamilies = basicShorthand.mappedFamilies;
            // console.log(greatTableIndex[filterName],mappedFamilies[greatTableIndex[filterName]])
            const convertedIndex = greatTableIndex[filterName];
            nameAdjustment = propertyImagePaths[mappedFamilies[convertedIndex]].sets[convertedIndex].specific;
            imagePath = propertyImagePaths[mappedFamilies[convertedIndex]].icon;
        }

        return  `<div class="filtersTagsRowContainer">
                    ${useImage ? `<img src="${imagePath}" class="queryFiltersFilterRowIcon"/>` : ""}
                    <div class="filtersTagName">${nameAdjustment}</div>
                    <input type="button" class="filtersTagDelete clickable" onclick="customHTML.deleteFilter('${encodedFilterName}','${filterBox}','${filterTable}')" value="X">
                </div>`;
    },
    clearTagsFilter() {
        globalUI.filters[`char${globalUI.currentCharacterDisplayed}`].tagFilters = [];
        customHTML.populateFilters(`tagsBox`,`tagFilters`,0);//can't remember what the 0 was for, but I obv used it on the remnant 2 optimizer, so I'll leave it there for NOW
    },
    clearOcclusionsFilter() {
        globalUI.filters[`char${globalUI.currentCharacterDisplayed}`].tagFilters = [];
        const charRef = globalUI.filters[`char${globalUI.currentCharacterDisplayed}`];
        const updateFilter = customHTML.populateFilters;
        const filterSet = [
            {tableName: "lightconeOcclusions",tableElem: "lightconeOcclusionsContainer"},
            {tableName: "armorSetOcclusions",tableElem: "armorSetOcclusionsContainer"},
            {tableName: "planarSetOcclusions",tableElem: "planarSetOcclusionsContainer"},
            {tableName: "mainstatBodyOcclusions",tableElem: "mainstatBodyOcclusionsContainer"},
            {tableName: "mainstatFeetOcclusions",tableElem: "mainstatFeetOcclusionsContainer"},
            {tableName: "mainstatOrbOcclusions",tableElem: "mainstatOrbOcclusionsContainer"},
            {tableName: "mainstatRopeOcclusions",tableElem: "mainstatRopeOcclusionsContainer"},
            {tableName: "substatOcclusions",tableElem: "substatOcclusionsContainer"},
        ]

        for (let filterName of filterSet) {
            charRef[filterName.tableName] = []
            customHTML.populateFilters(filterName.tableElem,filterName.tableName,0);
        }
    },
    forceAllExclusion() {
        globalUI.filters[`char${globalUI.currentCharacterDisplayed}`].tagFilters = [];
        const charRef = globalUI.filters[`char${globalUI.currentCharacterDisplayed}`];
        const updateFilter = customHTML.populateFilters;


        const filterSet = [
            {tableName: "lightcone",tableElem: "lightconeOcclusion"},
            {tableName: "armorSet",tableElem: "armorSetOcclusion"},
            {tableName: "planarSet",tableElem: "planarSetOcclusion"},
            {tableName: "mainstatBody",tableElem: "mainstatBodyOcclusion"},
            {tableName: "mainstatFeet",tableElem: "mainstatFeetOcclusion"},
            {tableName: "mainstatOrb",tableElem: "mainstatOrbOcclusion"},
            {tableName: "mainstatRope",tableElem: "mainstatRopeOcclusion"},
        ]

        const updateToggle = customHTML.updateOcclusion;
        for (let filterName of filterSet) {
            readSelection(filterName.tableElem).checked = false;
            updateToggle(filterName.tableName,filterName.tableElem)
        }
    },
    forceAllInclusion() {
        globalUI.filters[`char${globalUI.currentCharacterDisplayed}`].tagFilters = [];
        const charRef = globalUI.filters[`char${globalUI.currentCharacterDisplayed}`];
        const updateFilter = customHTML.populateFilters;


        const filterSet = [
            {tableName: "lightcone",tableElem: "lightconeOcclusion"},
            {tableName: "armorSet",tableElem: "armorSetOcclusion"},
            {tableName: "planarSet",tableElem: "planarSetOcclusion"},
            {tableName: "mainstatBody",tableElem: "mainstatBodyOcclusion"},
            {tableName: "mainstatFeet",tableElem: "mainstatFeetOcclusion"},
            {tableName: "mainstatOrb",tableElem: "mainstatOrbOcclusion"},
            {tableName: "mainstatRope",tableElem: "mainstatRopeOcclusion"},
        ]

        const updateToggle = customHTML.updateOcclusion;
        for (let filterName of filterSet) {
            readSelection(filterName.tableElem).checked = true;
            updateToggle(filterName.tableName,filterName.tableElem)
        }
    },
    clearLocksFilter() {
        globalUI.filters[`char${globalUI.currentCharacterDisplayed}`].tagFilters = [];
        const charRef = globalUI.filters[`char${globalUI.currentCharacterDisplayed}`];

        const filterSet = [
            {tableName: "lightconeLocks",tableElem: "lightconeLocksContainer"},
            {tableName: "armorSetLocks2pc",tableElem: "armorSetLocks2pcContainer"},
            {tableName: "armorSetLocks4pc",tableElem: "armorSetLocks4pcContainer"},
            {tableName: "planarSetLocks",tableElem: "planarSetLocksContainer"},
            {tableName: "mainstatBodyLocks",tableElem: "mainstatBodyLocksContainer"},
            {tableName: "mainstatFeetLocks",tableElem: "mainstatFeetLocksContainer"},
            {tableName: "mainstatOrbLocks",tableElem: "mainstatOrbLocksContainer"},
            {tableName: "mainstatRopeLocks",tableElem: "mainstatRopeLocksContainer"},
        ]

        const updateFilter = customHTML.populateFilters;
        for (let filterName of filterSet) {
            charRef[filterName.tableName] = []
            customHTML.populateFilters(filterName.tableElem,filterName.tableName,0);
        }
    },
    updateSelectedFilterDisplay(elemID) {
        const elementsToHide = [
            "statsFiltersHolder","occlusionsFiltersHolder","locksFiltersHolder","searchSettingsHolder","exportSettingsHolder",//"traitsSettingsHolder","prismSettingsHolder"
        ]
        for (let element of elementsToHide) {
            if (element != "exportSettingsHolder") {
                readSelection(element).style.display = "none";
            }
            readSelection(`${element}Button`).style.color = "white";
            readSelection(`${element}Button`).style.opacity = 0.5;
            readSelection(`${element}Button`).style.backgroundColor = "transparent";
        }
        if (elemID === "exportSettingsHolder") {return;}//the filters export menu has its own popup, it doesn't ever need to be highlighted

        readSelection(elemID).style.display = "flex";   //statsFiltersHolderButton
        readSelection(`${elemID}Button`).style.color = "rgb(255, 219, 145)"; //statsFiltersHolderButton
        readSelection(`${elemID}Button`).style.opacity = 1;
        readSelection(`${elemID}Button`).style.backgroundColor = "#ffffff2f";
        // readSelection(elemID).style.color = "rgb(255, 219, 145);"

        // style="color: rgb(255, 219, 145); opacity: 1; background-color: rgba(255, 255, 255, 0.1);"
    },

    queryResultsStandardRow(slotNumber,charSlot,charSPD,charSubs,charMaslow,isResultInspect) {
        const SPDIconPath = propertyImagePaths.SPD.icon;
        const mappedFamilies = basicShorthand.mappedFamilies;

        // const [charMaslow1,charMaslow2,charMaslow3,charMaslow4] = charMaslow;
        const filterPath = globalUI.filters[`char${slotNumber}`];

        // const [charMaslow1,charMaslow2,charMaslow3,charMaslow4] = charMaslow;

        // console.log(filterPath,slotNumber)
        const charMaslow1 = filterPath.desired1;
        const charMaslow2 = filterPath.desired2;
        const charMaslow3 = filterPath.desired3;
        const charMaslow4 = filterPath.desired4;
        const {BodyMain,FeetMain,SphereMain,RopeMain,name,planar,lcName} = charSlot;
        return `<div class="${isResultInspect ? "queryResultsQuarterBoxInspection" : "queryResultsQuarterBox"}">
            <div class="queryResultsQuarterCharacterImageBox">
                <img src="/HonkaiSR/${characters[name].preview}" class="queryResultsQuarterCharacterImage"/>
                
                <div class="queryResultsQuarterCharacterImageRelicsBox">
                    <img src="/HonkaiSR/${lightcones[lcName].icon}" class="analyticsResultRowRelicsIconHALVESLEFTLightcone"/>
                    <img src="/HonkaiSR/${relicSets[planar].icon}" class="analyticsResultRowRelicsIconHALVESLEFT"/>
                    <img src="/HonkaiSR/${relicSets[charSlot["2pc"]].icon}" class="analyticsResultRowRelicsIconHALVESLEFT"/>
                    <img src="/HonkaiSR/${relicSets[charSlot["4pc"]].icon}" class="analyticsResultRowRelicsIconHALVESRIGHT"/>
                </div>
                <div class="queryResultsQuarterBoxMainstats">
                    <img src="${propertyImagePaths[mappedFamilies[greatTableIndex[BodyMain]]].icon}" class="analyticsResultRowRelicsIconMainstat"/>
                    <img src="${propertyImagePaths[mappedFamilies[greatTableIndex[FeetMain]]].icon}" class="analyticsResultRowRelicsIconMainstat"/>
                    <img src="${propertyImagePaths[mappedFamilies[greatTableIndex[SphereMain]]].icon}" class="analyticsResultRowRelicsIconMainstat"/>
                    <img src="${propertyImagePaths[mappedFamilies[greatTableIndex[RopeMain]]].icon}" class="analyticsResultRowRelicsIconMainstatEnd"/>
                </div>
                <div class="queryResultsCharSPDValue">
                    <img src="${SPDIconPath}" class="analyticsResultSPDDisplayIcon"/>
                    ${Math.floor(charSPD)}
                </div>
            </div>
            <div class="queryResultsQuarterCharacterImageBoxEquivalent">
                <div class="queryResultsQuarterBoxMainstatsEquivalentSubsRow">
                    <img src="${propertyImagePaths[mappedFamilies[greatTableIndex[charMaslow1]]].icon}" class="analyticsResultEquivalentIconLeft"/>
                    <div class="imageRowStatisticStatBoxRollsEstEquivalent">${charSubs[charMaslow1]}</div>
                    <img src="${propertyImagePaths[mappedFamilies[greatTableIndex[charMaslow2]]].icon}" class="analyticsResultEquivalentIconLeft"/>
                    <div class="imageRowStatisticStatBoxRollsEstEquivalent">${charSubs[charMaslow2]}</div>
                    <img src="${propertyImagePaths[mappedFamilies[greatTableIndex[charMaslow3]]].icon}" class="analyticsResultEquivalentIconLeft"/>
                    <div class="imageRowStatisticStatBoxRollsEstEquivalent">${charSubs[charMaslow3]}</div>
                    <img src="${propertyImagePaths[mappedFamilies[greatTableIndex[charMaslow4]]].icon}" class="analyticsResultEquivalentIconRight"/>
                    <div class="imageRowStatisticStatBoxRollsEstEquivalent">${charSubs[charMaslow4]}</div>
                </div>
            </div>
        </div>`;
    },
    queryResultEquivalentRow(slotNumber,charSlot,charSPD,charSubs,charMaslow,uniqueRowHeaderSubs) {
        const SPDIconPath = propertyImagePaths.SPD.icon;
        const mappedFamilies = basicShorthand.mappedFamilies;

        // const [charMaslow1,charMaslow2,charMaslow3,charMaslow4] = charMaslow;
        const filterPath = globalUI.filters[`char${slotNumber}`];

        // const [charMaslow1,charMaslow2,charMaslow3,charMaslow4] = charMaslow;

        const charMaslow1 = filterPath.desired1;
        const charMaslow2 = filterPath.desired2;
        const charMaslow3 = filterPath.desired3;
        const charMaslow4 = filterPath.desired4;
        const {BodyMain,FeetMain,SphereMain,RopeMain,name,planar,lcName} = charSlot;
        const [headerCheck1,headerCheck2,headerCheck3,headerCheck4] = uniqueRowHeaderSubs;
        // const [char1Sub1,char1Sub2,char1Sub3,char1Sub4] = charSubs;

        // const char1Sub1,
        // const char1Sub2,
        // const char1Sub3,
        // const char1Sub4

        const sub1Value = charSubs[charMaslow1];
        const sub2Value = charSubs[charMaslow2];
        const sub3Value = charSubs[charMaslow3];
        const sub4Value = charSubs[charMaslow4];

        return `<div class="queryResultsQuarterBoxEquivalent">
            <div class="queryResultsQuarterCharacterImageBoxEquivalent">
                <img src="/HonkaiSR/${characters[name].preview}" class="queryResultsQuarterCharacterImageEquivalent"/>
                <div class="queryResultsQuarterBoxMainstatsEquivalent">
                    <img src="/HonkaiSR/${lightcones[lcName].icon}" class="analyticsResultEquivalentIconLeft"/>
                    <img src="/HonkaiSR/${relicSets[planar].icon}" class="analyticsResultEquivalentIconLeft"/>
                    <img src="/HonkaiSR/${relicSets[charSlot["2pc"]].icon}" class="analyticsResultEquivalentIconLeft"/>
                    <img src="/HonkaiSR/${relicSets[charSlot["4pc"]].icon}" class="analyticsResultEquivalentIconLeft"/>
                    <img src="${propertyImagePaths[mappedFamilies[greatTableIndex[BodyMain]]].icon}" class="analyticsResultEquivalentIconLeft"/>
                    <img src="${propertyImagePaths[mappedFamilies[greatTableIndex[FeetMain]]].icon}" class="analyticsResultEquivalentIconLeft"/>
                    <img src="${propertyImagePaths[mappedFamilies[greatTableIndex[SphereMain]]].icon}" class="analyticsResultEquivalentIconLeft"/>
                    <img src="${propertyImagePaths[mappedFamilies[greatTableIndex[RopeMain]]].icon}" class="analyticsResultEquivalentIconRight"/>
                </div>
                <div class="queryResultsCharSPDValue">
                    <img src="${SPDIconPath}" class="analyticsResultSPDDisplayIcon"/>
                    ${Math.floor(charSPD)}
                </div>
            </div>
            <div class="queryResultsQuarterCharacterImageBoxEquivalent">
                <div class="queryResultsQuarterBoxMainstatsEquivalentSubsRow">
                    <img src="${propertyImagePaths[mappedFamilies[greatTableIndex[charMaslow1]]].icon}" class="analyticsResultEquivalentIconLeft"/>
                    <div class="${sub1Value != headerCheck1 ? "imageRowStatisticStatBoxRollsEstEquivalentChangeShown" : "imageRowStatisticStatBoxRollsEstEquivalent"}">${sub1Value}</div>
                    <img src="${propertyImagePaths[mappedFamilies[greatTableIndex[charMaslow2]]].icon}" class="analyticsResultEquivalentIconLeft"/>
                    <div class="${sub2Value != headerCheck2 ? "imageRowStatisticStatBoxRollsEstEquivalentChangeShown" : "imageRowStatisticStatBoxRollsEstEquivalent"}">${sub2Value}</div>
                    <img src="${propertyImagePaths[mappedFamilies[greatTableIndex[charMaslow3]]].icon}" class="analyticsResultEquivalentIconLeft"/>
                    <div class="${sub3Value != headerCheck3 ? "imageRowStatisticStatBoxRollsEstEquivalentChangeShown" : "imageRowStatisticStatBoxRollsEstEquivalent"}">${sub3Value}</div>
                    <img src="${propertyImagePaths[mappedFamilies[greatTableIndex[charMaslow4]]].icon}" class="analyticsResultEquivalentIconRight"/>
                    <div class="${sub4Value != headerCheck4 ? "imageRowStatisticStatBoxRollsEstEquivalentChangeShown" : "imageRowStatisticStatBoxRollsEstEquivalent"}">${sub4Value}</div>
                </div>
            </div>
        </div>`;

        // <div class="queryResultsQuarterBoxEquivalent">
        //     <div class="queryResultsQuarterCharacterImageBoxEquivalent">
        //         <img src="/HonkaiSR/${characters[char1Name].preview}" class="queryResultsQuarterCharacterImageEquivalent"/>
        //         <div class="queryResultsQuarterBoxMainstatsEquivalent">
        //             <img src="/HonkaiSR/${relicSets[char1.planar].icon}" class="analyticsResultEquivalentIconLeft"/>
        //             <img src="/HonkaiSR/${relicSets[char1["2pc"]].icon}" class="analyticsResultEquivalentIconLeft"/>
        //             <img src="/HonkaiSR/${relicSets[char1["4pc"]].icon}" class="analyticsResultEquivalentIconLeft"/>
        //             <img src="${propertyImagePaths[mappedFamilies[greatTableIndex[char1.BodyMain]]].icon}" class="analyticsResultEquivalentIconLeft"/>
        //             <img src="${propertyImagePaths[mappedFamilies[greatTableIndex[char1.FeetMain]]].icon}" class="analyticsResultEquivalentIconLeft"/>
        //             <img src="${propertyImagePaths[mappedFamilies[greatTableIndex[char1.SphereMain]]].icon}" class="analyticsResultEquivalentIconLeft"/>
        //             <img src="${propertyImagePaths[mappedFamilies[greatTableIndex[char1.RopeMain]]].icon}" class="analyticsResultEquivalentIconRight"/>
        //         </div>
        //         <div class="queryResultsCharSPDValue">
        //             <img src="${propertyImagePaths.SPD.icon}" class="analyticsResultSPDDisplayIcon"/>
        //             ${Math.floor(char1SPD)}
        //         </div>
        //     </div>
        //     <div class="queryResultsQuarterCharacterImageBoxEquivalent">
        //         <div class="queryResultsQuarterBoxMainstatsEquivalentSubsRow">
        //             <img src="${propertyImagePaths[mappedFamilies[greatTableIndex[char1SubsMaslow[0]]]].icon}" class="analyticsResultEquivalentIconLeft"/>
        //             <div class="${char1Sub1 != uniqueRowHeaderSubs.char1[0] ? "imageRowStatisticStatBoxRollsEstEquivalentChangeShown" : "imageRowStatisticStatBoxRollsEstEquivalent"}">${char1Sub1}</div>
        //             <img src="${propertyImagePaths[mappedFamilies[greatTableIndex[char1SubsMaslow[1]]]].icon}" class="analyticsResultEquivalentIconLeft"/>
        //             <div class="${char1Sub2 != uniqueRowHeaderSubs.char1[1] ? "imageRowStatisticStatBoxRollsEstEquivalentChangeShown" : "imageRowStatisticStatBoxRollsEstEquivalent"}">${char1Sub2}</div>
        //             <img src="${propertyImagePaths[mappedFamilies[greatTableIndex[char1SubsMaslow[2]]]].icon}" class="analyticsResultEquivalentIconLeft"/>
        //             <div class="${char1Sub3 != uniqueRowHeaderSubs.char1[2] ? "imageRowStatisticStatBoxRollsEstEquivalentChangeShown" : "imageRowStatisticStatBoxRollsEstEquivalent"}">${char1Sub3}</div>
        //             <img src="${propertyImagePaths[mappedFamilies[greatTableIndex[char1SubsMaslow[3]]]].icon}" class="analyticsResultEquivalentIconRight"/>
        //             <div class="${char1Sub4 != uniqueRowHeaderSubs.char1[3] ? "imageRowStatisticStatBoxRollsEstEquivalentChangeShown" : "imageRowStatisticStatBoxRollsEstEquivalent"}">${char1Sub4}</div>
        //         </div>
        //     </div>
        // </div>
    },
    queryResultsBestRow(slotNumber,charSlot,charSPD,charSubs,charMaslow) {
        const SPDIconPath = propertyImagePaths.SPD.icon;
        const mappedFamilies = basicShorthand.mappedFamilies;

        const filterPath = globalUI.filters[`char${slotNumber}`];

        // const [charMaslow1,charMaslow2,charMaslow3,charMaslow4] = charMaslow;

        const charMaslow1 = filterPath.desired1;
        const charMaslow2 = filterPath.desired2;
        const charMaslow3 = filterPath.desired3;
        const charMaslow4 = filterPath.desired4;
        const {BodyMain,FeetMain,SphereMain,RopeMain,name,planar,lcName} = charSlot;
        
        return `<div class="queryResultsBestBox">
            <div class="queryResultsQuarterCharacterImageBox">
                <img src="/HonkaiSR/${characters[name].preview}" class="queryResultsQuarterCharacterImageBest"/>
                <div class="queryResultsCharacterImageItemsBox">
                    <img src="/HonkaiSR/${lightcones[lcName].icon}" class="analyticsResultRowLightconeIcon"/>
                    <div class="queryResultsQuarterCharacterImageRelicsBox">
                        <img src="/HonkaiSR/${relicSets[planar].icon}" class="analyticsResultRowRelicsIconHALVESLEFT"/>
                        <img src="/HonkaiSR/${relicSets[charSlot["2pc"]].icon}" class="analyticsResultRowRelicsIconHALVESLEFT"/>
                        <img src="/HonkaiSR/${relicSets[charSlot["4pc"]].icon}" class="analyticsResultRowRelicsIconHALVESRIGHT"/>
                    </div>
                    <div class="queryResultsQuarterBoxMainstats">
                        <img src="${propertyImagePaths[mappedFamilies[greatTableIndex[BodyMain]]].icon}" class="analyticsResultRowRelicsIconMainstat"/>
                        <img src="${propertyImagePaths[mappedFamilies[greatTableIndex[FeetMain]]].icon}" class="analyticsResultRowRelicsIconMainstat"/>
                        <img src="${propertyImagePaths[mappedFamilies[greatTableIndex[SphereMain]]].icon}" class="analyticsResultRowRelicsIconMainstat"/>
                        <img src="${propertyImagePaths[mappedFamilies[greatTableIndex[RopeMain]]].icon}" class="analyticsResultRowRelicsIconMainstatEnd"/>
                    </div>
                </div>
                <div class="queryResultsCharSPDValue">
                    <img src="${SPDIconPath}" class="analyticsResultSPDDisplayIcon"/>
                    ${Math.floor(charSPD)}
                </div>
            </div>

            <div class="queryResultsQuarterCharacterImageBoxEquivalentBest">
                <div class="queryResultsBestSubstatVerticalRow">
                    <div class="queryResultsBestSubstatVertical">
                        <img src="${propertyImagePaths[mappedFamilies[greatTableIndex[charMaslow1]]].icon}" class="analyticsResultEquivalentIconLeft"/>
                        <div class="imageRowStatisticStatBoxRollsEstEquivalent">${charSubs[charMaslow1]}</div>
                    </div>
                    <div class="queryResultsBestSubstatVertical">
                        <img src="${propertyImagePaths[mappedFamilies[greatTableIndex[charMaslow2]]].icon}" class="analyticsResultEquivalentIconLeft"/>
                        <div class="imageRowStatisticStatBoxRollsEstEquivalent">${charSubs[charMaslow2]}</div>
                    </div>
                </div>
                <div class="queryResultsBestSubstatVerticalRow">
                    <div class="queryResultsBestSubstatVertical">
                        <img src="${propertyImagePaths[mappedFamilies[greatTableIndex[charMaslow3]]].icon}" class="analyticsResultEquivalentIconLeft"/>
                        <div class="imageRowStatisticStatBoxRollsEstEquivalent">${charSubs[charMaslow3]}</div>
                    </div>
                    <div class="queryResultsBestSubstatVertical">
                        <img src="${propertyImagePaths[mappedFamilies[greatTableIndex[charMaslow4]]].icon}" class="analyticsResultEquivalentIconRight"/>
                        <div class="imageRowStatisticStatBoxRollsEstEquivalent">${charSubs[charMaslow4]}</div>
                    </div>
                </div>
            </div>
        </div>`;
    }
}

const targetPriorityFixedArray = [
    "Target Priority"
]
const targetSelectOuterArray = [
    "TARGET CHECK",
    // "Delete",
]
const targetSelectInnerArray = [
    "TARGET"
]
const targetSelectListArray = [
    "Preset Targets",
    "Target Filter"
]
const targetSelectPoolArray = [
    "Default Targeting",
    "Ally",
    "Characters",
    "Memosprites",
    "Allies (All)",
    "Allies (On-Field)",
    "Enemy",
    "Active Enemies",
];

const filterBasicListArray = [
    "FILTER: Statistic",
    "FILTER: Path",
    // "FILTER: State",
    "SORT: Statistic",
    "Filter Ally",
    "Healing Presets",
    // "Enemy",
    // "Delete",
]
const filterHealingPresetMenuArray = [
    "Lowest HP Ally (On-Field)",
    "Maximize Blast Healing",
]
const conditionListArray = [
    "AND",
    "OR",
    "COMPARE",
    "NOT",
    "Turn",
    "Next Turn Is:",
    "Buff",
    "Character: State",
    "Sustain Checks",
    "Team Energy Checks",
    // "Value",
    // "SP",


    // "Delete",
    // "AND",
    // "AND",
];
const conditionListValueArray = [
    "MATH",
    "User Value: Number",
    "User Value: Boolean",
    "Stat",
    "Character: Value",
    "Character: Special Value",
    "Team: Value",
    "Enemy Team: Value",
    "Battle: Value",
]
const conditionListValueArrayFilter = [
    "FILTER MATH",
    "Filter User Value: Number",
    // "User Value: Boolean",
    "Filter Stat",
    "Filter Character: Value",
    // "Character: Special Value",
    // "Team: Value",
    // "Enemy Team: Value",
    // "Battle: Value",
    
]
const conditionListCharacterValueArray = [
    "currentEnergy",
    "maxEnergy",

    "specialEnergyCurrent",
    "specialEnergyMax",

    "currentHP",
    "maxHP",

    "shieldValueCurrent",
    "shieldValueMax",

    "debuffCounter",
    "shieldCounter",

    "activeSummons",
    "activeMemosprites",

    "AV",
    "AVBase",
    // "actionCounter"
]
const conditionListTeamValueArray = [
    "Skill Points: Current",
    "Skill Points: Max",
]
const conditionListEnemyTeamValueArray = [
    "Enemies: Count",
]
const conditionListBattleValueArray = [
    "Cycle: AV Passed",
    "Cycle: AV Remaining",
    "Cycle: Current Cycle",
    "Total AV Passed",
    "Waves Completed",
]
const conditionListSustainValueArray = [
    "Any Ally: Has no Shield",
    "Any Ally: HP < 100%",
    "Any Ally: HP <= 75%",
    "Any Ally: HP <= 50%",
    "Any Ally: HP <= 25%",
]

const conditionListEnergyValueArray = [
    "No Energy Full [NORMAL]",
    "No Energy Full [SPECIAL]",
    // "Any Ally: HP < 100%",
    // "Any Ally: HP <= 75%",
    // "Any Ally: HP <= 50%",
    // "Any Ally: HP <= 25%",
]
const conditionListCharacterStateArray = [
    // "ultyQueued",
    {valueName: "Ultimate is Queued", refName: "ultyQueued", isBattleValue: false, isCharacterState: true}
]
const conditionListChars = [
    "Self",
    "char1",
    "char2",
    "char3",
    "char4",
];
for (let characterName in characters) {
    conditionListChars.push(characterName)
}

const conditionListCharsType = [
    "Character",
    "Memosprite",
    "Summon",
]
const conditionListPathType = [
    "Erudition",
    "Harmony",
    "Preservation",
    "Destruction",
    "Hunt",
    "Elation",
    "Remembrance",
    "Nihility",
    "Abundance",
]
const conditionListCharsTypeBuffTarget = [
    "Character",
    "Memosprite",
    // "Summon",
]
const conditionListTurnPhase = [
    "Pre-Action",
    "Post-Action",
    "Any Part"
]
const conditionListBoolean = [
    "true",
    "false"
]

const conditionComparatorList = [
    ">",
    ">=",
    "=",
    "!=",
    "<=",
    "<"
]
const conditionComparatorListFilter = [
    "Maximum",
    // ">=",
    // "=",
    // "!=",
    // "<=",
    "Minimum"
]
const conditionMathList = [
    "+",
    "-",
    "*",
    "/",
    "%"
]

const conditionComparatorCharValueConversions = {
    "currentEnergy": "Energy: Current",
    "maxEnergy": "Energy: Max",

    "currentHP": "HP: Current",
    "maxHP": "HP: Max",

    "specialEnergyCurrent": "Special Energy: Current",
    "specialEnergyMax": "Special Energy: Max",


    "shieldValueCurrent": "Shield Value: Current",
    "shieldValueMax": "Shield Value: Max",

    "debuffCounter": "Debuffs Counter",
    "shieldCounter": "Shields Counter",

    "activeSummons": "Active Summons",
    "activeMemosprites": "Active Memosprites",

    "AV": "Remaining AV to Turn",
    "AVBase": "Base AV/Turn",

    "ultsUsed": "Total Ultimates Used",
    "properName": "Character Name",
}

let conditionCharacterStatList = Object.keys(greatTableKnowerOfAll);

for (let i=conditionCharacterStatList.length-1;i>=0;i--) {
    const currentValue = conditionCharacterStatList[i];

    if (!currentValue) {
        conditionCharacterStatList.splice(i,1);
        continue;
    }//we don't care about the blank entry we have on great table but we still need the blank entry itself there for index position used everywhere else

    const convertedIndex = greatTableIndex[currentValue];

    const group = basicShorthand.findStatObject(convertedIndex);
    const set = group.sets[convertedIndex];
    const detailedName = set.specific;

    conditionCharacterStatList[i] = detailedName;
}




const rotationsUISuffering = {
    getConditionList(selected,conditionArray) {
        let returnString = "";

        if (selected === true) {selected = "true"}
        else if (selected === false) {selected = "false"}

        for (let condition of conditionArray) {
            returnString += `<option value="${condition}" ${condition === selected ? "selected" : ""}>${condition}</option>`
        }
        return returnString;
    },
    getConditionListStats(selected,conditionArray) {
        // console.log(selected,conditionArray)

        if (selected === true) {selected = "true"}
        else if (selected === false) {selected = "false"}

        let returnString = "";
        for (let condition of conditionArray) {
            // const displayValue = basicShorthand.indexToSpecific[greatTableIndex[condition]];
            // basicShorthand.reverseKeyMappings        //specific to index value  greatTableKeys
            // const currentStatIndex = 
            const statIndex = basicShorthand.reverseKeyMappings[condition];
            const internalValue = greatTableKeys[statIndex];

            // if (internalValue === selected) {
            //     console.log(selected,internalValue,condition)
            // }

            returnString += `<option value="${internalValue}" ${internalValue === selected ? "selected" : ""}>${condition}</option>`;
        }
        return returnString;
    },
    getConditionListCharValues(selected,conditionArray) {
        // console.log(selected,conditionArray)

        if (selected === true) {selected = "true"}
        else if (selected === false) {selected = "false"}

        let returnString = "";
        for (let condition of Object.keys(conditionArray)) {
            const convertedName = conditionComparatorCharValueConversions[condition]

            returnString += `<option value="${condition}" ${condition === selected ? "selected" : ""}>${convertedName}</option>`;
        }
        return returnString;
    },
    getConditionListCharStates(selected,conditionArray,charName,targetSlot,onlyReturnFirstValid) {
        // console.log(charName)
        // Self
        let targetName = "";
        if (targetSlot === "Self" || characters[charName]) {targetName = charName;}
        else {
            const charObject = globalRecords.character;
            targetName = charObject[targetSlot].name;
        }
        // console.log(targetName);
        const initialRef = customDisplayValuesLog[targetName ?? globalRecords.character.char1.name] ?? [];
        const currentRef = [
            ...conditionListCharacterStateArray
        ];
        if (initialRef.length) {currentRef.push(...initialRef);}

        // "Saber": [
        //     {valueName: "Basic is Enhanced", refName: "isEnhanced", isBattleValue: true},
        //     {valueName: "Core Resonance", refName: "coreResonance", isBattleValue: true},
        //     {valueName: "Overflow Energy", refName: "overflowEnergy", isBattleValue: true},
        //     {valueName: "Advance Ready", refName: "advanceReady", isBattleValue: true},
        //     {valueName: "E6 Ult Counter", refName: "e6UltCounter", isBattleValue: true, requiresEidolon: 6},
        // ], 


        let returnString = "";
        for (let condition of currentRef) {
            if (!condition.isCharacterState) {continue;}
            if (onlyReturnFirstValid) {return condition.refName;}//used to extract the first valid character state if one exists
            returnString += `<option value="${condition.refName}" ${condition.refName === selected ? "selected" : ""}>${condition.valueName}</option>`;
        }

        return onlyReturnFirstValid ? null : returnString;
    },
    getConditionListCharSpecialValues(selected,conditionArray,charName,targetSlot,onlyReturnFirstValid) {
        // console.log(charName)
        // Self
        let targetName = "";
        if (targetSlot === "Self"|| characters[charName]) {targetName = charName;}
        else {
            const charObject = globalRecords.character;
            targetName = charObject[targetSlot].name;
        }
        const currentRef = customDisplayValuesLog[targetName];

        // "Saber": [
        //     {valueName: "Basic is Enhanced", refName: "isEnhanced", isBattleValue: true},
        //     {valueName: "Core Resonance", refName: "coreResonance", isBattleValue: true},
        //     {valueName: "Overflow Energy", refName: "overflowEnergy", isBattleValue: true},
        //     {valueName: "Advance Ready", refName: "advanceReady", isBattleValue: true},
        //     {valueName: "E6 Ult Counter", refName: "e6UltCounter", isBattleValue: true, requiresEidolon: 6},
        // ], 


        let returnString = "";
        for (let condition of currentRef) {
            if (condition.isCharacterState || condition.isCharacterSlot) {continue;}
            if (onlyReturnFirstValid) {return condition.refName;}//used to extract the first valid character state if one exists
            returnString += `<option value="${condition.refName}" ${condition.refName === selected ? "selected" : ""}>${condition.valueName}</option>`;
        }


        return onlyReturnFirstValid ? null : returnString;
    },

    getConditionAsCopy(newArray,skillSlot,characterName,isFilter) {
        let copiedInstance = JSON.stringify(rotationsUISuffering.updateRotationObject(newArray,skillSlot,characterName,null,null,null,null,null,null,true,null,isFilter));

        if (isFilter) {
            globalUI.conditionsCopyActiveFILTER = copiedInstance;
        }
        else {
            globalUI.conditionsCopyActive = copiedInstance;
        }
        
        rotationsUISuffering.updateRotationObject(newArray,skillSlot,characterName,null,null,null,null,null,null,null,null,true);

        // console.log(JSON.parse(globalUI.conditionsCopyActive))
    },
    getConditionAsCut(newArray,skillSlot,characterName,isFilter) {
        let copiedInstance = JSON.stringify(rotationsUISuffering.updateRotationObject(newArray,skillSlot,characterName,null,null,null,null,null,null,true,null,isFilter));
        if (isFilter) {
            globalUI.conditionsCopyActiveFILTER = copiedInstance;
        }
        else {
            globalUI.conditionsCopyActive = copiedInstance;
        }
        // console.log(copiedInstance)
        rotationsUISuffering.updateRotationObject(newArray,skillSlot,characterName,null,null,null,null,null,true,null,null,isFilter);
        // rotationsUISuffering.updateRotationObject(newArray,skillSlot,characterName);

        // console.log(JSON.parse(globalUI.conditionsCopyActive));
    },
    getConditionAsPaste(newArray,skillSlot,characterName,isFilter) {
        rotationsUISuffering.updateRotationObject(newArray,skillSlot,characterName,null,null,null,null,null,null,null,true,isFilter);
        rotationsUISuffering.updateRotationObject(newArray,skillSlot,characterName);
    },                                          //arrayToPass,skillSlot,characterName,isAddedToOperator,parameterKey,eventObject,isTargetCondition,isOpenClose,isForceDelete
    getConditionAsDeleted(newArray,skillSlot,characterName) {
        rotationsUISuffering.updateRotationObject(newArray,skillSlot,characterName,null,null,null,null,null,true);
    },
    getControlsStringCondition(newArray,skillSlot,characterName,isArrayOperator,isLineOnly,emptyArrayOperator,isFilter,isDeleteOnly) {
        const hasCopyOrCut = globalUI.conditionsCopyActive;//TODO: read the state of w/e is saved via cut/copy and only display paste if that is true
        const hasCopyOrCutFILTER = globalUI.conditionsCopyActiveFILTER;


        const finalUseArray = emptyArrayOperator ? [...newArray,0] : newArray; 


        let paramsStringInitial = `[${finalUseArray}],'${skillSlot}','${characterName}'`;
        const brickClicks = `event.stopPropagation();event.preventDefault();`;
        const filterAdjustment = isFilter ? "rotationsConditionsControlsRowIconBoxFILTERADJUST" : "";
        const filterAdjustmentIcon = isFilter ? "rotationsConditionsControlsIconFILTERADJUST" : "";

        let copyString = `<div class="rotationsConditionsControlsRowIconBox ${filterAdjustment} clickable" onclick="${brickClicks}rotationsUISuffering.getConditionAsCopy(${paramsStringInitial},${isFilter})">
                <img src="/HonkaiSR/misc/copy.png" class="rotationsConditionsControlsIcon ${filterAdjustmentIcon}">
            </div>`;
        let cutString = `<div class="rotationsConditionsControlsRowIconBox ${filterAdjustment} clickable" onclick="${brickClicks}rotationsUISuffering.getConditionAsCut(${paramsStringInitial},${isFilter})">
                <img src="/HonkaiSR/misc/cut.png" class="rotationsConditionsControlsIcon ${filterAdjustmentIcon}">
            </div>`;
        let pasteString = `<div class="rotationsConditionsControlsRowIconBox clickable" onclick="${brickClicks}rotationsUISuffering.getConditionAsPaste(${paramsStringInitial})">
                Paste&nbsp;<img src="/HonkaiSR/misc/paste.png" class="rotationsConditionsControlsIcon">
            </div>`;
        let pasteStringFILTER = `<div class="rotationsConditionsControlsRowIconBox ${filterAdjustment} clickable" onclick="${brickClicks}rotationsUISuffering.getConditionAsPaste(${paramsStringInitial},${isFilter})">
            <img src="/HonkaiSR/misc/paste.png" class="rotationsConditionsControlsIcon ${filterAdjustmentIcon}">
        </div>`;
        let deleteString = `<div class="rotationsConditionsControlsRowIconBox conditionsDeleteButton clickable" onclick="${brickClicks}rotationsUISuffering.getConditionAsDeleted(${paramsStringInitial});">
                X
            </div>`;

        let controlsString = "";

        const finalPasteString = (isFilter ? (hasCopyOrCutFILTER ? pasteStringFILTER : "") : (hasCopyOrCut ? pasteString : ""));
        if (isDeleteOnly) {
            controlsString += deleteString;
        }
        else if (isArrayOperator) {
            controlsString += copyString + cutString + deleteString;
        }
        else if (isLineOnly) {
            controlsString += finalPasteString;
        }
        else {
            controlsString += copyString + cutString + finalPasteString + deleteString;
        }

        // ${hasCopyOrCut && !isArrayOperator ? `<div class="rotationsConditionsControlsRowIconBox clickable" onclick="event.stopPropagation();event.preventDefault();rotationsUISuffering.getConditionAsPaste(${paramsStringInitial})">
        //         <img src="/HonkaiSR/misc/paste.png" class="rotationsConditionsControlsIcon">
        //     </div>` : ""}

        // Copy&nbsp;
        controlsString = `<div class="rotationsConditionsControlsRow">
            ${controlsString}
        </div>`;

        return controlsString;
    },
    displayLoop(characterName,destination,indexCounter,layerCounter,arrayToPass,skillSlot,arrayLength,isFilter,blockFirstAndLastPaste) {
        const typeCheck = destination.type;

        // console.log(destination)
        console.log(typeCheck)
        let returnString = rotationsUISuffering[typeCheck](characterName,destination,indexCounter,layerCounter,arrayToPass,skillSlot);

        if (arrayLength && (indexCounter + 1) < arrayLength) {


            // indexCounter++;
            const newArray = [...arrayToPass];
            newArray.push(indexCounter+2);

            const copyActive = globalUI.conditionsCopyActiveFILTER || globalUI.conditionsCopyActive;

            const controlsString = copyActive ? getControlsStringCondition(newArray,skillSlot,characterName,false,true,null,isFilter) : "";

            const isFirstIndex = indexCounter + 1 === 0;//we start at -1 for shit like this, don't question it
            if (isFirstIndex && !blockFirstAndLastPaste) {
                if (returnString.returnString) {
                    // returnString.returnString += dividerLine;

                    //for now I'm bricking the ability to insert into comparison or math operators, not sure it's needed
                }
                else {

                    const newArray2 = [...arrayToPass];
                    newArray2.push(indexCounter+1);

                    const controlsString = copyActive ? getControlsStringCondition(newArray2,skillSlot,characterName,false,true,null,isFilter) : "";
                    returnString = controlsString + returnString;
                }
            }

            
            if (!blockFirstAndLastPaste) {
                const dividerLine = `<div class="rotationsConditionsDividerLine"></div>` + controlsString;

                if (returnString.returnString) {
                    returnString.returnString += dividerLine;
                }
                else {
                    returnString += dividerLine;
                }
            }
            
        }

        return returnString;
    },
    getReturnStruct(type) {
        // console.log(type)
        switch (type) {
            //LOGIC OPERATORS
            case "AND":
                return {
                    type: "AND",
                    array: []
                }
            case "OR":
                return {
                    type: "OR",
                    array: []
                }
            case "COMPARE":
                return {
                    type: "COMPARE",
                    comparison: "=",
                    array: [
                        {type: "Stat", target: "Self", targetType: "Character", statName: "ATK%"},
                        {type: "Stat", target: "Self", targetType: "Character", statName: "ATK%"}
                    ],
                }
            case "NOT":
                return {
                    type: "NOT",
                    array: [
                        {
                            type: "AND",
                            array: []
                        }
                    ],
                }
            case "Target Priority":
                return {
                    type: "Target Priority",
                    array: [
                        {
                            type: "TARGET CHECK",
                            array: [
                                {
                                    type: "TARGET",
                                    array: [
                                        // {type: "Target Pool", targetType: "Default Targeting",entityType: null,target: null},
                                        {
                                            type: "FILTER: Statistic",
                                            comparison: "=",
                                            array: [
                                                {type: "Filter Stat", statName: "ATK%"},
                                                {type: "Filter Stat", statName: "ATK%"}
                                            ],
                                        }
                                    ],
                                },
                                {
                                    type: "AND",
                                    array: []
                                },
                            ],
                        },
                    ]
                }
            case "TARGET CHECK":
                return {
                    type: "TARGET CHECK",
                    array: [
                        {
                            type: "TARGET",
                            array: [
                                // {type: "Target Pool", targetType: "Default Targeting",entityType: null,target: null},
                                {
                                    type: "FILTER: Statistic",
                                    comparison: "=",
                                    array: [
                                        {type: "Filter Stat", statName: "ATK%"},
                                        {type: "Filter Stat", statName: "ATK%"}
                                    ],
                                }
                            ],
                        },
                        {
                            type: "AND",
                            array: []
                        },
                    ],
                }
            
            case "TARGET":
                return {
                    type: "TARGET",
                    array: [
                        // {type: "Target Pool", targetType: "Default Targeting",entityType: null,target: null},
                        {
                            type: "FILTER: Statistic",
                            comparison: "=",
                            array: [
                                {type: "Filter Stat", statName: "ATK%"},
                                {type: "Filter Stat", statName: "ATK%"}
                            ],
                        }
                    ],
                }
            case "Target Pool": return {type: "Target Pool"}
            case "FILTER: Statistic":
                return {
                    type: "FILTER: Statistic",
                    comparison: "=",
                    array: [
                        {type: "Filter Stat", statName: "ATK%"},
                        {type: "Filter Stat", statName: "ATK%"}
                    ],
                }
            case "FILTER: Path":
                return {
                    type: "FILTER: Path",
                    comparison: "=",
                    path: "Erudition",
                }
            case "SORT: Statistic":
                return {
                    type: "SORT: Statistic",
                    comparison: "Minimum",
                    array: [
                        {type: "Filter Stat", statName: "ATK%"},
                    ],
                }
            case "FILTER MATH":
                return {
                    type: "FILTER MATH",
                    operator: "+",
                    array: [
                        {type: "Filter Stat", statName: "ATK%"},
                        {type: "Filter Stat", statName: "ATK%"}
                    ],
                }
            case "Filter Character: Value": return {type: "Filter Character: Value", characterValue: "currentEnergy"}
            case "Filter Stat": return {type: "Filter Stat", statName: "ATK%"}
            case "Filter User Value: Number": return {type: "Filter User Value: Number", inputValue: 0}
            case "Filter Ally": return {type: "Filter Ally", target: "Self", targetType: "Character"}

            //FILTER HEALING PRESETS
            case "Healing Presets": return {type: "Healing Presets", statName: "Lowest HP Ally (On-Field)"}
            
            
            //STANDARD CONDITIONS
            case "Buff": return {type: "Buff", target: "Self", targetType: "Character", buffName: null, state: true}
            case "Turn": return {type: "Turn", target: "Self", targetType: "Character", phase: "Any Part", state: true}
            case "Next Turn Is:": return {type: "Next Turn Is:", target: "Self", targetType: "Character", state: true}

            //STANDARD VALUE CONDITOINS
            case "User Value: Number": return {type: "User Value: Number", inputValue: 0}
            case "User Value: Boolean": return {type: "User Value: Boolean", inputValue: true}

            //ADVANCED STAT OPERATORS
            case "MATH":
                return {
                    type: "MATH",
                    operator: "+",
                    array: [
                        {type: "Stat", target: "Self", targetType: "Character", statName: "ATK%"},
                        {type: "Stat", target: "Self", targetType: "Character", statName: "ATK%"}
                    ],
                }
            case "Stat": return {type: "Stat", target: "Self", targetType: "Character", statName: "ATK%"}
            
            //CHARACTER VALUES
            case "Character: Value": return {type: "Character: Value", target: "Self", targetType: "Character", characterValue: "currentEnergy"}

            //SPECIAL CHARACTER VALUES
            case "Character: Special Value": return {type: "Character: Special Value", target: "Self", specialValue: null, isBattleValue: false}

            //CHARACTER SPECIFIC STATES
            case "Character: State": return {type: "Character: State", target: "Self", stateName: null, state: true, isBattleValue: false}
            //battleValue will be assigned to true if applicable, within the UI function, cause it has to be determined as we go

            //TEAM VALUES
            case "Team: Value": return {type: "Team: Value", teamValue: "Skill Points: Current"}

            //ENEMY TEAM VALUES
            case "Enemy Team: Value": return {type: "Enemy Team: Value", teamValue: "Enemies: Count"}

            //BATTLE VALUES
            case "Battle: Value": return {type: "Battle: Value", battleValue: "Cycle: AV Passed"}

            
            // case "Skill Points: Current":
            //     return {type: "Skill Points: Current"}
            // case "Skill Points: Max":
            //     return {type: "Skill Points: Max"}

            //SUSTAIN CONDITIONS
            case "Sustain Checks": return {type: "Sustain Checks", sustainValue: "Any Ally: HP <= 50%"}


            //ENERGY CONDITIONS
            case "Team Energy Checks": return {type: "Team Energy Checks", sustainValue: "No Energy Full [NORMAL]"}

            // case "":
            //     return {}
            // case "":
            //     return {}
            // case "":
            //     return {}
        }
    },
    hasArrayOperators: new Set ([
        "AND",
        "OR",
        "COMPARE",
        "NOT",
        "MATH",
        "TARGET CHECK",
        "TARGET",
        "Target Priority",
        "FILTER: Statistic",
        "SORT: Statistic",
    ]),
// updateRotationObject([${newArray}],'${skillSlot}','${characterName}',true)
    updateRotationObject(arrayToPass,skillSlot,characterName,isAddedToOperator,parameterKey,eventObject,isTargetCondition,isOpenClose,isForceDelete,isCopy,isPaste,isFilter) {
        // const characterConditions = defaultConditions[characterName];
        let characterConditions = null;
        const arrayOperators = rotationsUISuffering.hasArrayOperators;

        const characterObject = globalRecords.character;
        for (let charSlot in characterObject) {
            const currentCharObject = characterObject[charSlot];

            if (currentCharObject.name === characterName) {
                //I initially structured conditions to be stored in the default conditions object, but decided against it
                //bc later if people want to "revert" to default conditions, it wouldn't let them do it since they'd already modified the default storage area
                //so while it's jank to do it this way now, we reference the character object(and in turn, user imports) to assign and modify conditions
                //this way later we can add a button that will let people restore to defaults
                characterConditions = currentCharObject.conditions;
                break;
            }
        }
        const currentConditions = characterConditions[skillSlot];

        // console.log(isAddedToOperator)

        const operatorType = currentConditions.type;
        const isOperator = operatorType && arrayOperators.has(operatorType);

        // const currentKeys = Object.keys(currentConditions);
        const parentTotalLength = arrayToPass.length;

        let currentIndex = 0;
        // console.log(arrayToPass)

        
        if (parentTotalLength > 1) {
            let finalReturnValue = rotationsUISuffering.updateRotationObjectLoop(eventObject,parameterKey,arrayToPass,(isOperator ? currentConditions.array : currentConditions),currentIndex,parentTotalLength,skillSlot,characterName,isAddedToOperator,isTargetCondition,isOpenClose,isForceDelete,isCopy,isPaste,isFilter);
        
            if (isCopy) {
                return finalReturnValue
            }
        }
        else {
            const operatorJoinSet = new Set (["AND","OR"]);
            const potentialOperatorElement = readSelection(`rotationConditionType${skillSlot}${arrayToPass.join("|")}`);

            if (isCopy) {
                return currentConditions
            }
            // globalUI.conditionsCopyActive

            const elementDidChange = operatorType != potentialOperatorElement.value;

            if (operatorType && (elementDidChange || isForceDelete || isPaste)) {
                //so if the prior operator was and/or and if the operator we switched is still and/or, then just change the internal to match and that works
                if (!isForceDelete && !isPaste && operatorJoinSet.has(operatorType) && operatorJoinSet.has(potentialOperatorElement.value)) {
                    currentConditions.type = potentialOperatorElement.value;
                }
                //otherwise if we switched from say and to compare, then the and array is removed in its entirety and a new compare object needs to be constructed
                else {
                    if (isForceDelete) {
                        // delete characterConditions[skillSlot];

                        // currentConditions.array = [];
                        // currentConditions.array.push(rotationsUISuffering.getReturnStruct("AND"));

                        characterConditions[skillSlot] = rotationsUISuffering.getReturnStruct("AND")
                        characterConditions[skillSlot].array = [];
                        // currentConditions.splice(arrayToPass[currentIndex],1)
                    }
                    else if (isPaste) {
                        //technically can't ever paste into the top layer of anything since that is reserved for only one instance, be it an array operator or not
                    }
                    else {
                        characterConditions[skillSlot] = rotationsUISuffering.getReturnStruct(potentialOperatorElement.value);
                    }
                }
            }

            // if (operatorType != potentialOperatorElement.value) {
            //     //so if the prior operator was and/or and if the operator we switched is still and/or, then just change the internal to match and that works
            //     if (operatorJoinSet.has(operatorType) && operatorJoinSet.has(potentialOperatorElement.value)) {
            //         newConditions.type = potentialOperatorElement.value;
            //     }
            //     //otherwise if we switched from say and to compare, then the and array is removed in its entirety and a new compare object needs to be constructed
            //     else {
            //         if (potentialOperatorElement.value === "Delete") {
            //             // delete currentConditions[skillSlot];
            //             // console.log(currentConditions)
            //             currentConditions.splice(arrayToPass[currentIndex],1)
            //         }
            //         else {
            //             currentConditions[arrayToPass[currentIndex]] = rotationsUISuffering.getReturnStruct(potentialOperatorElement.value);
            //         }
                    
            //     }
            // }

            else if (eventObject && !isAddedToOperator && !isOpenClose) {
                // updateRotationObject([${newArray}],'${skillSlot}','${characterName}',2)
                const conditionKeys = Object.keys(currentConditions);
                const keyToModify = conditionKeys[parameterKey];

                const newID = eventObject.target.id;
                const newPotentialElem = readSelection(newID);
                let valueToPass = newPotentialElem.value;

                //seems stupid to do this but the value to read isn't always going to be a boolean, we only want to change it to a true boolean value when it IS one lmao
                if (valueToPass === "true") {valueToPass = true;}
                else if (valueToPass === "false") {valueToPass = false;}

                const valueIsNumber = newID.toLowerCase().includes("number");
                currentConditions[keyToModify] = valueIsNumber ? +newPotentialElem.value : valueToPass;
            }
            
            if (operatorType && isAddedToOperator) {

                if (isAddedToOperator === 2) {
                    newConditions.array.push(rotationsUISuffering.getReturnStruct("FILTER: Statistic"));
                }
                else if (isTargetCondition) {
                    // console.log("reached deposit end",isAddedToOperator,isTargetCondition)
                    currentConditions.array.push(rotationsUISuffering.getReturnStruct("TARGET CHECK"));
                    // console.log(currentConditions.array)
                }
                else {
                    currentConditions.array.push(rotationsUISuffering.getReturnStruct("Turn"));
                }
                
            }
            else if (isOpenClose) {
                currentConditions.isClosed = !currentConditions.isClosed;
            }
        }

        customHTML.megaRotationFuckery(characterName);

        userTriggers.getUpdatedBattleLog();


    },
    updateRotationObjectLoop(eventObject,parameterKey,arrayToPass,currentConditions,currentIndex,parentTotalLength,skillSlot,characterName,isAddedToOperator,isTargetCondition,isOpenClose,isForceDelete,isCopy,isPaste,isFilter) {
        currentIndex++;

        // console.log(currentIndex,parentTotalLength - 1,arrayToPass[currentIndex])
        const isLessThanLength = currentIndex < parentTotalLength - 1;
        if (!isLessThanLength && isPaste) {
            let pasteObject = null;

            if (isFilter) {
                pasteObject = JSON.parse(globalUI.conditionsCopyActiveFILTER);
                globalUI.conditionsCopyActiveFILTER = null;
            }
            else {
                pasteObject = JSON.parse(globalUI.conditionsCopyActive);
                globalUI.conditionsCopyActive = null;
            }
            

            currentConditions.splice(arrayToPass[currentIndex],0,pasteObject);
            return;
            //if we're beyond the bounds of an array's normal length then it can cause problems if we allow it to go beyond this point
            //I could technically add a whole bunch of exceptions to allow that OR I could just make this little blurb here
            //and sidestep all that bullshit so until this somehow causes a problem downs the road, I leave this as is.
        }
        

        const newConditions = currentConditions[arrayToPass[currentIndex]];
        // console.log(newConditions)
        // console.log(arrayToPass,currentIndex,currentConditions)

        const operatorType = newConditions?.type;
        const arrayOperators = rotationsUISuffering.hasArrayOperators;
        // console.log(newConditions)


        // console.log(parentTotalLength,arrayToPass,skillSlot,characterName,isAddedToOperator)

        if (isLessThanLength) {
            
            const isOperator = operatorType && arrayOperators.has(operatorType);
            
            // const newIndex = isOperator ? -1 : currentIndex;

            // console.log(operatorType, newConditions)
            return rotationsUISuffering.updateRotationObjectLoop(eventObject,parameterKey,arrayToPass,isOperator ? newConditions.array : newConditions,currentIndex,parentTotalLength,skillSlot,characterName,isAddedToOperator,isTargetCondition,isOpenClose,isForceDelete,isCopy,isPaste,isFilter);
        }
        else {

            const potentialID = `rotationConditionType${skillSlot}${arrayToPass.join("|")}`;
            // console.log("reached deposit else",currentIndex,operatorType,potentialID,newConditions)
            const operatorJoinSet = new Set (["AND","OR"]);

            
            const potentialOperatorElement = readSelection(potentialID);

            // console.log("reached deposit else",operatorType && isAddedToOperator)

            // rotationConditionTypeUltimate0|2|1
            // rotationConditionTypeUltimate0|2|1

            // updateRotationObject([${newArray}],'${skillSlot}','${characterName}',2)

            // console.log(operatorType)

            if (isCopy) {
                return newConditions
            }

            if (operatorType) {
                if (operatorType != potentialOperatorElement.value || isForceDelete || isPaste) {
                    //so if the prior operator was and/or and if the operator we switched is still and/or, then just change the internal to match and that works
                    if (!isForceDelete && !isPaste && operatorJoinSet.has(operatorType) && operatorJoinSet.has(potentialOperatorElement.value)) {
                        newConditions.type = potentialOperatorElement.value;
                    }
                    //otherwise if we switched from say and to compare, then the and array is removed in its entirety and a new compare object needs to be constructed
                    else {
                        if (isForceDelete) {
                            // delete currentConditions[skillSlot];
                            // console.log(currentConditions)
                            currentConditions.splice(arrayToPass[currentIndex],1)
                        }
                        else if (isPaste) {
                            let pasteObject = null;
                            if (isFilter) {
                                pasteObject = JSON.parse(globalUI.conditionsCopyActiveFILTER);
                                globalUI.conditionsCopyActiveFILTER = null;
                            }
                            else {
                                pasteObject = JSON.parse(globalUI.conditionsCopyActive);
                                globalUI.conditionsCopyActive = null;
                            }

                            currentConditions.splice(arrayToPass[currentIndex],0,pasteObject);
                        }

                        // globalUI.conditionsCopyActive
                        else {
                            currentConditions[arrayToPass[currentIndex]] = rotationsUISuffering.getReturnStruct(potentialOperatorElement.value);
                        }
                        
                    }
                }
                else if (eventObject && !isAddedToOperator && !isOpenClose) {
                    // updateRotationObject([${newArray}],'${skillSlot}','${characterName}',2)
                    const conditionKeys = Object.keys(newConditions);
                    const keyToModify = conditionKeys[parameterKey];
    
                    const newID = eventObject.target.id;
                    const newPotentialElem = readSelection(newID);
                    let valueToPass = newPotentialElem.value;
    
                    //seems stupid to do this but the value to read isn't always going to be a boolean, we only want to change it to a true boolean value when it IS one lmao
                    if (valueToPass === "true") {valueToPass = true;}
                    else if (valueToPass === "false") {valueToPass = false;}
                    // else if (newID.toLowerCase().includes("number")) {valueToPass = +valueToPass;}
    
                    // console.log(valueToPass)
                    const valueIsNumber = newID.toLowerCase().includes("number");
                    newConditions[keyToModify] = valueIsNumber ? +newPotentialElem.value : valueToPass;
                }

                // console.log("reached deposit else",operatorType,isAddedToOperator)
                if (isAddedToOperator) {
                    
                    // console.log(parentTotalLength,arrayToPass,skillSlot,characterName,isAddedToOperator,newConditions)
                    if (isAddedToOperator === 2) {
                        newConditions.array.push(rotationsUISuffering.getReturnStruct("FILTER: Statistic"));
                    }
                    else if (isTargetCondition) {
                        // console.log("reached deposit end",isAddedToOperator,isTargetCondition)
                        newConditions.array.push(rotationsUISuffering.getReturnStruct("Target Check"));
                        // console.log(newConditions.array)
                    }
                    else {
                        
                        newConditions.array.push(rotationsUISuffering.getReturnStruct("Turn"));
                        
                    }
                    // console.log(newConditions)
                }
                else if (isOpenClose) {
                    newConditions.isClosed = !newConditions.isClosed;
                }
            }
        }
    },

    getSlotNameFinal(value,slotRef) {
        const charObject = globalRecords.character;

        let targetName = null;
        if (value === "Self" || slotRef === "Self") {
            targetName = charObject[`char${globalUI.currentCharacterDisplayed}`].name;
        }
        else {
            targetName = charObject[value]?.name ?? charObject[slotRef]?.name;
        }

        return targetName;
    },
    getHighlightSummary(value,slotRef,isBattleValue,layerCounter) {
        let targetName = null;
        let finalValue = value;

        targetName = rotationsUISuffering.getSlotNameFinal(value,slotRef);
        if (!slotRef && targetName) {
            finalValue = targetName;
        }

        if (isBattleValue) {
            if (!slotRef) {
                throw new Error(`Missing slotRef passed to highlightSummary text, could not get battleValue for summary.\n\nIf you ever see this, join the discord and let Vash know.`);
            }

            const initialRef = customDisplayValuesLog[targetName ?? globalRecords.character.char1.name] ?? [];
            const currentRef = [
                ...conditionListCharacterStateArray
            ];
            if (initialRef.length) {currentRef.push(...initialRef);}

            for (let condition of currentRef) {

                if (condition.refName === value) {
                    finalValue = condition.valueName;
                    break;
                }
            }
        }

        if (conditionComparatorCharValueConversions[value]) {
            finalValue = conditionComparatorCharValueConversions[value];
        }

        const shmancyColorFinal = rotationsUISuffering.getShmancyBorderColor(layerCounter);

        return `<span class="traceAttackTargetTypeConditionDescHighlight" style="--schmancyColorOverride: ${shmancyColorFinal};">[${finalValue}]</span>`;
    },
    getSummaryCharPreviewIcon(value,slotRef) {
        const targetName = characters[value] ? value : rotationsUISuffering.getSlotNameFinal(value,slotRef);
        const characterIconPath = "/HonkaiSR/" + characters[targetName].icon;

        return `<div class="rotationsCharacterTargetPreviewBox">
            <img src="${characterIconPath}" class="rotationsCharacterTargetPreviewBoxIcon">
        </div>`;
    },

    getShmancyBorderColor(layerCounter) {
        // border-left: 2px solid rgba(255, 255, 255, 0.527);
        const coloring = [
            // "#569CD6",
            // "#D7BA7D",
            // "#C586C0",
            // // "#4EC9B0",
            // // "#9CDCFE",
            // // "#DCDCAA",


            "#569CD6",
            "#D7BA7D",
            "#C586C0",
            // "#4EC9B0",
            // "#9CDCFE",
            // "#DCDCAA",
        ];

        const colorLength = coloring.length;
        const newIndex = layerCounter % colorLength;
        

        // for (let i=0;i<50;i++) {
        //     const newIndex = i % colorLength;
        //     const finalColor = coloring[newIndex];
        //     console.log(i,newIndex,finalColor)
        // }


        const finalColor = coloring[newIndex];

        return finalColor
    },
    AND(characterName,destination,indexCounter,layerCounter,arrayToPass,skillSlot) {
        const array = destination.array;

        indexCounter++;
        const newArray = [...arrayToPass];
        newArray.push(indexCounter);
        

        const arrayIDString = newArray.join("|");
        const baseIDString = `rotationConditionType${skillSlot}${arrayIDString}`;

        // ${adjustmentString}
        let returnString = ``;

        layerCounter += 1;
        let indexCounterNew = -1;

        // inheritedAdjustmentString += indexCounter < parentLength-1 ? "│&nbsp;&nbsp;" : "&nbsp;&nbsp;&nbsp;&nbsp;";

        const displayLoop = rotationsUISuffering.displayLoop;

        // console.log(array)
        for (let entry of array) {

            returnString += displayLoop(characterName,entry,indexCounterNew,layerCounter,newArray,skillSlot,array.length);
            
            indexCounterNew++;
        }

        // onclick="event.stopPropagation();"

        const shmancyColorFinal = rotationsUISuffering.getShmancyBorderColor(layerCounter);//style="--schmancyColorOverride: ${shmancyColorFinal};"
        returnString = `
        <details class="rotationsPermaConditionsExpandTargetBox" ${destination.isClosed ? "" : `open=""`}>
            <summary class="calcUserTargetConditionHeader clickable" style="--schmancyColorOverride: ${shmancyColorFinal};" onclick="rotationsUISuffering.updateRotationObject([${newArray}],'${skillSlot}','${characterName}',false,false,false,false,true);">

                <select class="rotationActionSelectorSub" id="${baseIDString}" onclick="event.stopPropagation();" onchange="rotationsUISuffering.updateRotationObject([${newArray}],'${skillSlot}','${characterName}')">
                    ${rotationsUISuffering.getConditionList("AND",conditionListArray)}
                </select>
                
                ${getControlsStringCondition(newArray,skillSlot,characterName,true)}
            </summary>
            

            <div class="rotationConditionOperatorBox" style="--schmancyColorOverride: ${shmancyColorFinal};">
            
                ${returnString}
                ${!array.length ? getControlsStringCondition(newArray,skillSlot,characterName,false,true,true) : ""}

                <div class="rotationsOperatorAddButtonHolder">
                    <div class="rotationsOperatorAddButton clickable" onclick="rotationsUISuffering.updateRotationObject([${newArray}],'${skillSlot}','${characterName}',true)">
                        Add Condition
                    </div>
                </div>

            </div>
            
        </details>`;


        return returnString;
    },
    OR(characterName,destination,indexCounter,layerCounter,arrayToPass,skillSlot) {
        const array = destination.array;

        indexCounter++;
        const newArray = [...arrayToPass];
        newArray.push(indexCounter);

        const arrayIDString = newArray.join("|");
        const baseIDString = `rotationConditionType${skillSlot}${arrayIDString}`;


        // ${adjustmentString}
        let returnString = ``;

        layerCounter += 1;
        let indexCounterNew = -1;

        // inheritedAdjustmentString += indexCounter < parentLength-1 ? "│&nbsp;&nbsp;" : "&nbsp;&nbsp;&nbsp;&nbsp;";


        const displayLoop = rotationsUISuffering.displayLoop;
        for (let entry of array) {

            returnString += displayLoop(characterName,entry,indexCounterNew,layerCounter,newArray,skillSlot,array.length);
            
            indexCounterNew++;
        }

        const shmancyColorFinal = rotationsUISuffering.getShmancyBorderColor(layerCounter);
        returnString = `
        <details class="rotationsPermaConditionsExpandTargetBox" ${destination.isClosed ? "" : `open=""`}>
            <summary class="calcUserTargetConditionHeader clickable" style="--schmancyColorOverride: ${shmancyColorFinal};" onclick="event.stopPropagation();rotationsUISuffering.updateRotationObject([${newArray}],'${skillSlot}','${characterName}',false,false,false,false,true);">

                <select class="rotationActionSelectorSub" id="${baseIDString}" onclick="event.stopPropagation();" onchange="rotationsUISuffering.updateRotationObject([${newArray}],'${skillSlot}','${characterName}')">
                    ${rotationsUISuffering.getConditionList("OR",conditionListArray)}
                </select>
                
                ${getControlsStringCondition(newArray,skillSlot,characterName,true)}
            </summary>

            <div class="rotationConditionOperatorBox" style="--schmancyColorOverride: ${shmancyColorFinal};">
                ${returnString}
                ${!array.length ? getControlsStringCondition(newArray,skillSlot,characterName,false,true,true) : ""}

                <div class="rotationsOperatorAddButtonHolder">
                    <div class="rotationsOperatorAddButton clickable" onclick="rotationsUISuffering.updateRotationObject([${newArray}],'${skillSlot}','${characterName}',true)">
                        Add Condition
                    </div>
                </div>

            </div>
            
        </details>`;
        return returnString;
    },
    "Target Priority"(characterName,destination,indexCounter,layerCounter,arrayToPass,skillSlot) {
        const array = destination.array;

        indexCounter++;
        const newArray = [...arrayToPass];
        newArray.push(indexCounter);

        const arrayIDString = newArray.join("|");
        const baseIDString = `rotationConditionType${skillSlot}${arrayIDString}`;


        // ${adjustmentString}
        let returnString = `
        <div class="rotationsSectionANDBoxHolder">
            
            <select class="rotationActionSelectorSub" id="${baseIDString}" onchange="rotationsUISuffering.updateRotationObject([${newArray}],'${skillSlot}','${characterName}')" style="display: none">
                ${rotationsUISuffering.getConditionList("Target Priority",targetPriorityFixedArray)}
            </select>
            
        </div>`;

        layerCounter += 1;
        let indexCounterNew = -1;

        // inheritedAdjustmentString += indexCounter < parentLength-1 ? "│&nbsp;&nbsp;" : "&nbsp;&nbsp;&nbsp;&nbsp;";


        // rotationConditionOperatorBox
        returnString += ``;
        const displayLoop = rotationsUISuffering.displayLoop;
        for (let entry of array) {

            returnString += displayLoop(characterName,entry,indexCounterNew,layerCounter,newArray,skillSlot,array.length,true,true);
            
            indexCounterNew++;
        }
        returnString += `
            <div class="rotationsOperatorAddButtonHolder">
                <div class="rotationsOperatorAddButton clickable" onclick="rotationsUISuffering.updateRotationObject([${newArray}],'${skillSlot}','${characterName}',true,null,null,true)">
                    Add New Target
                </div>
            </div>
            
        `


        // returnString += `</div>`
        // <div class="relicStatSelectionRowBuffUptime">
        //     <div class="BuffUptimeHeaderRow">Graph by:</div>
        //     <select class="BuffUptimeSelectionSelector" name="" id="buffUptimeGraphBy" onchange="graphs.createGraphsByBuffUptime()"></select>
        // </div>
        // console.log(returnString)
        return returnString;
    },

    extractUIBuffNames(logicPath,newBuffRef,charName,currentBuffArrayHolder) {
        if (logicPath?.buffNames) {

            for (let buffName in logicPath.buffNames) {
                const fullBuffName = logicPath.buffNames[buffName];

                const finalBuffName = logicPath?.buffNamesPerCharacter?.[buffName] ? `${fullBuffName} (${charName})` : fullBuffName;
                currentBuffArrayHolder.push(finalBuffName);
            }
        }
    },
    Buff(characterName,destination,indexCounter,layerCounter,arrayToPass,skillSlot) {//TODO: read note
        //right now we technically enforce all possible buffs that can be considered in a condition to be a buff from the context of the current battle
        //but if we're allowing out of context conditions to be stored this may cause a problem down the road where someone might
        //end up pasting a condition into a team and getting a new buff name assigned from the current context rather than prior
        //lower priority for the moment though.

        // {type: "Buff", target: "Self", targetType: "Character", buffName: "Benison of Paper and Rites", state: true},

        // const buffNames = [];
        indexCounter++;
        const newArray = [...arrayToPass];
        newArray.push(indexCounter);
        
        const arrayIDString = newArray.join("|");

        const newBuffRef = {};
        // const reverseBuffNames = {};

        const characterObject = globalRecords.character;
        const baseIDString = `rotationConditionType${skillSlot}${arrayIDString}`;

        const targetTypeElem = readSelection(`${baseIDString}TargetType`);
        const targetElem = readSelection(`${baseIDString}Target`);
        const stateElem = readSelection(`${baseIDString}State`);
        const buffNameElem = readSelection(`${baseIDString}BuffName`);

        if (targetTypeElem) {destination.targetType = targetTypeElem.value;}
        if (targetElem) {destination.target = targetElem.value;}
        if (stateElem) {destination.state = stateElem.value === "true" ? true : false;}
        if (buffNameElem) {
            destination.buffName = buffNameElem.value;
            // console.log(destination.buffName,buffNameElem.value)
        }


        const extractUIBuffNames = rotationsUISuffering.extractUIBuffNames;
        // const charNameArray = [char1Name,char2Name,char3Name,char4Name];

        let buffNamesObject = {}

        for (let charSlot in characterObject) {
            const currentSlot = characterObject[charSlot];

            const charName = currentSlot.name;

            const currentBuffArrayHolder = buffNamesObject[charName] ??= [];

            const lcName = currentSlot.lcName;
            const pc2 = currentSlot["2pc"];
            const pc4 = currentSlot["4pc"];
            const planar = currentSlot.planar;

            const charLogic = turnLogic[charName];
            const planarLogic = turnLogicRelics[planar]["2pc"];
            const pc2Logic = turnLogicRelics[pc2]["2pc"];
            const pc4Logic = turnLogicRelics[pc4][pc4 === pc2 ? "4pc" : "2pc"];
            const lcLogic = turnLogicLightcones[lcName];

            // const customName = `${buffNames.allyDMG} (${sourceTurn.properName})`;
            // if (!buffNames[customName]) {buffNames[customName] = customName;}

            extractUIBuffNames(charLogic,newBuffRef,charName,currentBuffArrayHolder);
            extractUIBuffNames(planarLogic,newBuffRef,charName,currentBuffArrayHolder);

            extractUIBuffNames(pc2Logic,newBuffRef,charName,currentBuffArrayHolder);
            extractUIBuffNames(pc4Logic,newBuffRef,charName,currentBuffArrayHolder);

            extractUIBuffNames(lcLogic,newBuffRef,charName,currentBuffArrayHolder);
        }

        if (destination.buffName) {
            let buffIsPossible = false;
            
            for (let charSlot in buffNamesObject) {
                const currentBuffArray = buffNamesObject[charSlot];

                const newSet = new Set(currentBuffArray);
                if (newSet.has(destination.buffName)) {
                    buffIsPossible = true;
                    break;
                }
            }

            // if (buffNameElem && !buffIsPossible) {destination.buffName = buffNameElem.value;}
            if (!buffIsPossible) {
                destination.buffName = buffNamesObject[characterObject.char1.name][0];//default to first buff possible in the current selections
            }
        }
        else {destination.buffName = buffNamesObject[characterObject.char1.name][0];}

        let buffNameOptions = "";

        for (let charName in buffNamesObject) {
            const currentBuffArray = buffNamesObject[charName];

            let currentCharString = "";

            for (let buffEntry of currentBuffArray) {
                currentCharString += `<option value="${buffEntry}" ${destination.buffName === buffEntry ? "selected" : ""}>${buffEntry}</option>`;
            }


            currentCharString = `<option disabled>${charName}</option>
            ${currentCharString}
            <option disabled>---</option>`;

            buffNameOptions += currentCharString;
        }





        

        const getConditionList = rotationsUISuffering.getConditionList;

        // const defaultsArray = [
        //     destination.targetType ?? "Character",
        //     destination.target ?? "Self",
        //     destination.state ?? "true"
        // ]
        const default1 = destination.targetType ?? "Character";
        const default2 = destination.target ?? "Self";
        const default3 = destination.state ?? "true";

        let returnString = `<div class="rotationsConditionsRowHolderWithDesc">
            <div style="display:flex;flex-direction:column">
                <div class="rotationsConditionsRowHolderInner">
                    ${getHighlightCharPreviewIcon(default2,null)}

                    <div class="rotationsConditionsImageAdjacentHolderBox">

                        <div class="rotationsConditionsRowHeader">
                            <select class="rotationActionSelectorSub" id="${baseIDString}" onchange="rotationsUISuffering.updateRotationObject([${newArray}],'${skillSlot}','${characterName}')">
                                ${getConditionList("Buff",conditionListArray)}
                            </select>
                            <select class="rotationActionSelectorSub" id="${baseIDString}TargetType" onchange="rotationsUISuffering.updateRotationObject([${newArray}],'${skillSlot}','${characterName}',false,2,event)">
                                ${getConditionList(default1,conditionListCharsTypeBuffTarget)}
                            </select>
                            ${getControlsStringCondition(newArray,skillSlot,characterName,true)}
                        </div>

                        <div class="rotationsSectionConditionHolderBox">
                            <select class="rotationActionSelectorSub" id="${baseIDString}Target" onchange="rotationsUISuffering.updateRotationObject([${newArray}],'${skillSlot}','${characterName}',false,1,event)">
                                ${getConditionList(default2,conditionListChars)}
                            </select>
                            <select class="rotationActionSelectorSub" id="${baseIDString}State" onchange="rotationsUISuffering.updateRotationObject([${newArray}],'${skillSlot}','${characterName}',false,4,event)">
                                ${getConditionList(default3,conditionListBoolean)}
                            </select>
                        </div>

                    </div>
                </div>

                <div class="rotationsSectionConditionHolderBox">
                    <select class="rotationActionSelectorSub" id="${baseIDString}BuffName" onchange="rotationsUISuffering.updateRotationObject([${newArray}],'${skillSlot}','${characterName}',false,3,event)">
                        ${buffNameOptions}
                    </select>
                </div>

            </div>

            <span class="conditionSummaryDescBox">
                If ${getHighlightSummaryText(default2,null,null,layerCounter)}'s ${getHighlightSummaryText(default1,null,null,layerCounter)} does ${default3 == true ? "" : getHighlightSummaryText("NOT",null,null,layerCounter) + " "}have ${getHighlightSummaryText(destination.buffName,null,null,layerCounter)}
                
            </span>

        </div>`;
        

        return returnString
    },
    Turn(characterName,destination,indexCounter,layerCounter,arrayToPass,skillSlot) {
        // {type: "Turn", target: "Self", targetType: "Character", phase: "Any Part", state: true},

        indexCounter++;
        const newArray = [...arrayToPass];
        newArray.push(indexCounter);
        const arrayIDString = newArray.join("|");
        const baseIDString = `rotationConditionType${skillSlot}${arrayIDString}`;

        const targetTypeElem = readSelection(`${baseIDString}TargetType`);
        const targetElem = readSelection(`${baseIDString}Target`);
        // const valueNameElem = readSelection(`${baseIDString}StatValue`);
        const phaseElem = readSelection(`${baseIDString}Phase`);
        const stateElem = readSelection(`${baseIDString}State`);

        if (targetTypeElem && destination.targetType != targetTypeElem.value) {destination.targetType = targetTypeElem.value;}
        if (targetElem && destination.target != targetElem.value) {destination.target = targetElem.value;}
        // if (valueNameElem && destination.characterValue != valueNameElem.value) {destination.characterValue = valueNameElem.value;}
        if (phaseElem && destination.phase != phaseElem.value) {destination.phase = phaseElem.value;}
        if (stateElem && destination.state != stateElem.value) {destination.state = stateElem.value === "true" ? true : false;}

        const default1 = destination.targetType ?? "Character";
        const default2 = destination.target ?? "Self";
        const default3 = destination.phase ?? "Any Part";
        const default4 = destination.state ?? "true";

        const getConditionList = rotationsUISuffering.getConditionList;

        // getHighlightCharPreviewIcon

        let returnString = `<div class="rotationsConditionsRowHolderWithDesc">
            <div class="rotationsConditionsRowHolderInner">
                ${getHighlightCharPreviewIcon(default2,null)}

                <div class="rotationsConditionsImageAdjacentHolderBox">

                    <div class="rotationsConditionsRowHeader">
                        <select class="rotationActionSelectorSub" id="${baseIDString}" onchange="rotationsUISuffering.updateRotationObject([${newArray}],'${skillSlot}','${characterName}')">
                            ${getConditionList("Turn",conditionListArray)}
                        </select>
                        <select class="rotationActionSelectorSub" id="${baseIDString}TargetType" onchange="rotationsUISuffering.updateRotationObject([${newArray}],'${skillSlot}','${characterName}',false,2,event)">
                            ${getConditionList(default1,conditionListCharsType)}
                        </select>
                        ${getControlsStringCondition(newArray,skillSlot,characterName,true)}
                    </div>

                    <div class="rotationsSectionConditionHolderBox">
                        <select class="rotationActionSelectorSub" id="${baseIDString}Target" onchange="rotationsUISuffering.updateRotationObject([${newArray}],'${skillSlot}','${characterName}',false,1,event)">
                            ${getConditionList(default2,conditionListChars)}
                        </select>
                        <select class="rotationActionSelectorSub" id="${baseIDString}Phase" onchange="rotationsUISuffering.updateRotationObject([${newArray}],'${skillSlot}','${characterName}',false,3,event)">
                            ${getConditionList(default3,conditionListTurnPhase)}
                        </select>
                        <select class="rotationActionSelectorSub" id="${baseIDString}State" onchange="rotationsUISuffering.updateRotationObject([${newArray}],'${skillSlot}','${characterName}',false,4,event)">
                            ${getConditionList(default4,conditionListBoolean)}
                        </select>
                    </div>
            
                </div>
                
            </div>
            <span class="conditionSummaryDescBox">
                If ${getHighlightSummaryText(default2,null,null,layerCounter)}'s ${getHighlightSummaryText(default1,null,null,layerCounter)} is ${default4 == true ? "" : getHighlightSummaryText("NOT",null,null,layerCounter) + " "}in ${getHighlightSummaryText(default3,null,null,layerCounter)} of their turn
            </span>
        </div>`;

        return returnString
    },
    "Next Turn Is:"(characterName,destination,indexCounter,layerCounter,arrayToPass,skillSlot) {

        // {type: "Next Turn", target: "Self", targetType: "Character", state: true}

        indexCounter++;
        const newArray = [...arrayToPass];
        newArray.push(indexCounter);
        const arrayIDString = newArray.join("|");
        const baseIDString = `rotationConditionType${skillSlot}${arrayIDString}`;

        const targetTypeElem = readSelection(`${baseIDString}TargetType`);
        const targetElem = readSelection(`${baseIDString}Target`);
        // const valueNameElem = readSelection(`${baseIDString}StatValue`);
        const stateElem = readSelection(`${baseIDString}State`);

        if (targetTypeElem && destination.targetType != targetTypeElem.value) {destination.targetType = targetTypeElem.value;}
        if (targetElem && destination.target != targetElem.value) {destination.target = targetElem.value;}
        // if (valueNameElem && destination.characterValue != valueNameElem.value) {destination.characterValue = valueNameElem.value;}
        if (stateElem && destination.state != stateElem.value) {destination.state = stateElem.value === "true" ? true : false;}

        const default1 = destination.targetType ?? "Character";
        const default2 = destination.target ?? "Self";
        const default3 = destination.state ?? "true";

        const getConditionList = rotationsUISuffering.getConditionList;
        let returnString = `<div class="rotationsConditionsRowHolderWithDesc">

            <div class="rotationsConditionsRowHolderInner">
                ${getHighlightCharPreviewIcon(default2,null)}

                <div class="rotationsConditionsImageAdjacentHolderBox">

                    <div class="rotationsConditionsRowHeader">
                        <select class="rotationActionSelectorSub" id="${baseIDString}" onchange="rotationsUISuffering.updateRotationObject([${newArray}],'${skillSlot}','${characterName}')">
                            ${getConditionList("Next Turn Is:",conditionListArray)}
                        </select>
                        <select class="rotationActionSelectorSub" id="${baseIDString}TargetType" onchange="rotationsUISuffering.updateRotationObject([${newArray}],'${skillSlot}','${characterName}',false,2,event)">
                            ${getConditionList(default1,conditionListCharsType)}
                        </select>
                        ${getControlsStringCondition(newArray,skillSlot,characterName,true)}
                    </div>

                    <div class="rotationsSectionConditionHolderBox">
                        <select class="rotationActionSelectorSub" id="${baseIDString}Target" onchange="rotationsUISuffering.updateRotationObject([${newArray}],'${skillSlot}','${characterName}',false,1,event)">
                            ${getConditionList(default2,conditionListChars)}
                        </select>
                        <select class="rotationActionSelectorSub" id="${baseIDString}State" onchange="rotationsUISuffering.updateRotationObject([${newArray}],'${skillSlot}','${characterName}',false,3,event)">
                            ${getConditionList(default3,conditionListBoolean)}
                        </select>
                    </div>

                </div>
            </div>

            <span class="conditionSummaryDescBox">
                If the next detected ALLY turn in order is ${default3 == true ? "" : getHighlightSummaryText("NOT",null,null,layerCounter) + " "}${getHighlightSummaryText(default2,null,null,layerCounter)}'s ${getHighlightSummaryText(default1,null,null,layerCounter)}
            </span>
            
        </div>`;

        return returnString
    },
    Stat(characterName,destination,indexCounter,layerCounter,arrayToPass,skillSlot) {

        // {type: "Stat", target: "Self", targetType: "Character", statName: "ATK%"},
        indexCounter++;
        const newArray = [...arrayToPass];
        newArray.push(indexCounter);
        const arrayIDString = newArray.join("|");
        const baseIDString = `rotationConditionType${skillSlot}${arrayIDString}`;


        const targetTypeElem = readSelection(`${baseIDString}TargetType`);
        const targetElem = readSelection(`${baseIDString}Target`);
        const valueNameElem = readSelection(`${baseIDString}StatValue`);

        if (targetTypeElem) {destination.targetType = targetTypeElem.value;}
        if (targetElem) {destination.target = targetElem.value;}
        if (valueNameElem) {
            destination.statName = valueNameElem.value;
        }
        const statName = destination.statName;

        const getConditionList = rotationsUISuffering.getConditionList;

        const default1 = destination.targetType ?? "Character";
        const default2 = destination.target ?? "Self";
        const default3 = statName ?? "SPDFlat";

        let returnString = `<div class="rotationsConditionsRowHolder">
            <div class="rotationsConditionsRowHolderInner">
            ${getHighlightCharPreviewIcon(default2,null)}

                <div class="rotationsConditionsImageAdjacentHolderBox">

                    <div class="rotationsConditionsRowHeader">
                        <select class="rotationActionSelectorSub" id="${baseIDString}" onchange="rotationsUISuffering.updateRotationObject([${newArray}],'${skillSlot}','${characterName}')">
                            ${getConditionList("Stat",conditionListValueArray)}
                        </select>
                        <select class="rotationActionSelectorSub" id="${baseIDString}TargetType" onchange="rotationsUISuffering.updateRotationObject([${newArray}],'${skillSlot}','${characterName}',false,2,event)">
                            ${getConditionList(default1,conditionListCharsTypeBuffTarget)}
                        </select>
                    </div>

                    <div class="rotationsSectionConditionHolderBox">
                        <select class="rotationActionSelectorSub" id="${baseIDString}Target" onchange="rotationsUISuffering.updateRotationObject([${newArray}],'${skillSlot}','${characterName}',false,1,event)">
                            ${getConditionList(default2,conditionListChars)}
                        </select>
                        <select class="rotationActionSelectorSub" id="${baseIDString}StatValue" onchange="rotationsUISuffering.updateRotationObject([${newArray}],'${skillSlot}','${characterName}',false,3,event)">
                            ${rotationsUISuffering.getConditionListStats(default3,conditionCharacterStatList)}
                        </select>
                    </div>

                </div>
            </div>
            
        </div>`;

        // return {returnString, displayString: `${getHighlightSummaryText(default1)}`}
        return {returnString, displayString: `${getHighlightSummaryText(default2,null,null,layerCounter)}'s ${getHighlightSummaryText(default1,null,null,layerCounter)}: ${getHighlightSummaryText(default3,null,null,layerCounter)}`}
    },
    "User Value: Number"(characterName,destination,indexCounter,layerCounter,arrayToPass,skillSlot) {

        // {type: "UserValueNumber", inputValue: 0.50}

        indexCounter++;
        const newArray = [...arrayToPass];
        newArray.push(indexCounter);
        const arrayIDString = newArray.join("|");
        const baseIDString = `rotationConditionType${skillSlot}${arrayIDString}`;

        const numberElem = readSelection(`${baseIDString}InputValueNumber`);
        if (numberElem) {destination.inputValue = +numberElem.value;}

        const getConditionList = rotationsUISuffering.getConditionList;

        const default1 = destination.inputValue ?? 0;
        let returnString = `<div class="rotationsConditionsRowHolder">
            <div class="rotationsConditionsRowHolderInner">

                <select class="rotationActionSelectorSub" id="${baseIDString}" onchange="rotationsUISuffering.updateRotationObject([${newArray}],'${skillSlot}','${characterName}')">
                    ${getConditionList("User Value: Number",conditionListValueArray)}
                </select>
                <div class="presetsSelectorBox">
                    <input type="number" class="tagInput" id="${baseIDString}InputValueNumber" value="${default1}" onchange="rotationsUISuffering.updateRotationObject([${newArray}],'${skillSlot}','${characterName}',false,1,event)">
                </div>

            </div>
            
        </div>`;

        return {returnString, displayString: `${getHighlightSummaryText(default1,null,null,layerCounter)}`}
        // return {returnString, displayString: `${getHighlightSummaryText(default2)}'s ${getHighlightSummaryText(default1)}: ${getHighlightSummaryText(default3)}`}
    },
    "User Value: Boolean"(characterName,destination,indexCounter,layerCounter,arrayToPass,skillSlot) {

        // {type: "User Value: Boolean", inputValue: true}

        indexCounter++;
        const newArray = [...arrayToPass];
        newArray.push(indexCounter);
        const arrayIDString = newArray.join("|");
        const baseIDString = `rotationConditionType${skillSlot}${arrayIDString}`;

        const booleanElem = readSelection(`${baseIDString}InputValueNumber`);
        if (booleanElem) {destination.inputValue = booleanElem.value === "true" ? true : false;}

        const getConditionList = rotationsUISuffering.getConditionList;

        const default1 = destination.inputValue ?? "true";
        let returnString = `<div class="rotationsConditionsRowHolder">
            <div class="rotationsConditionsRowHolderInner">

                <select class="rotationActionSelectorSub" id="${baseIDString}" onchange="rotationsUISuffering.updateRotationObject([${newArray}],'${skillSlot}','${characterName}')">
                    ${getConditionList("User Value: Boolean",conditionListValueArray)}
                </select>

                <select class="rotationActionSelectorSub" id="${baseIDString}InputValueBoolean" onchange="rotationsUISuffering.updateRotationObject([${newArray}],'${skillSlot}','${characterName}',false,1,event)">
                    ${getConditionList(default1,conditionListBoolean)}
                </select>

            </div>
            
        </div>`;

        return {returnString, displayString: `${getHighlightSummaryText(default1,null,null,layerCounter)}`}
        // return {returnString, displayString: `${getHighlightSummaryText(default2)}'s ${getHighlightSummaryText(default1)}: ${getHighlightSummaryText(default3)}`}
    },
    "Character: Value"(characterName,destination,indexCounter,layerCounter,arrayToPass,skillSlot) {
        // {type: "Character: Value", target: "Self", targetType: "Character", characterValue: "Energy: Current"},

        // indexCounter++;
        indexCounter++;
        const newArray = [...arrayToPass];
        newArray.push(indexCounter);
        const arrayIDString = newArray.join("|");
        const baseIDString = `rotationConditionType${skillSlot}${arrayIDString}`;

        const targetTypeElem = readSelection(`${baseIDString}TargetType`);
        const targetElem = readSelection(`${baseIDString}Target`);
        const valueNameElem = readSelection(`${baseIDString}ValueName`);

        if (targetTypeElem) {destination.targetType = targetTypeElem.value;}
        if (targetElem) {destination.target = targetElem.value;}
        if (valueNameElem) {destination.characterValue = valueNameElem.value;}
        
        const getConditionList = rotationsUISuffering.getConditionList;

        const default1 = destination.targetType ?? "Character";
        const default2 = destination.target ?? "Self";
        const default3 = destination.characterValue ?? "energyCurrent";

        let returnString = `<div class="rotationsConditionsRowHolder">
            <div class="rotationsConditionsRowHolderInner">
            ${getHighlightCharPreviewIcon(default2,null)}

                <div class="rotationsConditionsImageAdjacentHolderBox">

                    <div class="rotationsConditionsRowHeader">
                        <select class="rotationActionSelectorSub" id="${baseIDString}" onchange="rotationsUISuffering.updateRotationObject([${newArray}],'${skillSlot}','${characterName}')">
                            ${getConditionList("Character: Value",conditionListValueArray)}
                        </select>
                        <select class="rotationActionSelectorSub" id="${baseIDString}TargetType" onchange="rotationsUISuffering.updateRotationObject([${newArray}],'${skillSlot}','${characterName}',false,2,event)">
                            ${getConditionList(default1,conditionListCharsTypeBuffTarget)}
                        </select>
                    </div>

                    <div class="rotationsSectionConditionHolderBox">
                        <select class="rotationActionSelectorSub" id="${baseIDString}Target" onchange="rotationsUISuffering.updateRotationObject([${newArray}],'${skillSlot}','${characterName}',false,1,event)">
                            ${getConditionList(default2,conditionListChars)}
                        </select>
                        <select class="rotationActionSelectorSub" id="${baseIDString}ValueName" onchange="rotationsUISuffering.updateRotationObject([${newArray}],'${skillSlot}','${characterName}',false,3,event)">
                            ${rotationsUISuffering.getConditionListCharValues(default3,conditionComparatorCharValueConversions)}
                        </select>
                    </div>

                </div>
            </div>
            
        </div>`;

        return {returnString, displayString: `${getHighlightSummaryText(default2,null,null,layerCounter)}'s ${getHighlightSummaryText(default1,null,null,layerCounter)}: ${getHighlightSummaryText(default3,null,null,layerCounter)}`}
    },
    "Team: Value"(characterName,destination,indexCounter,layerCounter,arrayToPass,skillSlot) {
        // {type: "Character: Value", target: "Self", targetType: "Character", characterValue: "Energy: Current"},

        // indexCounter++;
        indexCounter++;
        const newArray = [...arrayToPass];
        newArray.push(indexCounter);
        const arrayIDString = newArray.join("|");
        const baseIDString = `rotationConditionType${skillSlot}${arrayIDString}`;

        const valueNameElem = readSelection(`${baseIDString}ValueName`);
        if (valueNameElem) {destination.teamValue = valueNameElem.value;}



        
        const getConditionList = rotationsUISuffering.getConditionList;

        const default1 = destination.teamValue ?? "Skill Points: Current";

        let returnString = `<div class="rotationsConditionsRowHolder">
            <div class="rotationsConditionsRowHolderInner">

                <div class="rotationsConditionsImageAdjacentHolderBox">

                    <div class="rotationsConditionsRowHeader">
                        <select class="rotationActionSelectorSub" id="${baseIDString}" onchange="rotationsUISuffering.updateRotationObject([${newArray}],'${skillSlot}','${characterName}')">
                            ${getConditionList("Team: Value",conditionListValueArray)}
                        </select>
                    </div>

                    <div class="rotationsSectionConditionHolderBox">
                        <select class="rotationActionSelectorSub" id="${baseIDString}ValueName" onchange="rotationsUISuffering.updateRotationObject([${newArray}],'${skillSlot}','${characterName}',false,1,event)">
                            ${rotationsUISuffering.getConditionList(destination.teamValue ?? "Skill Points: Current",conditionListTeamValueArray)}
                        </select>
                    </div>

                </div>
            </div>
            
        </div>`;

        return {returnString, displayString: `${getHighlightSummaryText(default1,null,null,layerCounter)}`}
    },
    "Enemy Team: Value"(characterName,destination,indexCounter,layerCounter,arrayToPass,skillSlot) {
        // {type: "Character: Value", target: "Self", targetType: "Character", characterValue: "Energy: Current"},

        // indexCounter++;
        indexCounter++;
        const newArray = [...arrayToPass];
        newArray.push(indexCounter);
        const arrayIDString = newArray.join("|");
        const baseIDString = `rotationConditionType${skillSlot}${arrayIDString}`;

        const valueNameElem = readSelection(`${baseIDString}ValueName`);
        if (valueNameElem) {destination.teamValue = valueNameElem.value;}



        
        const getConditionList = rotationsUISuffering.getConditionList;

        const default1 = destination.teamValue ?? "Enemies: Count";

        let returnString = `<div class="rotationsConditionsRowHolder">
            <div class="rotationsConditionsRowHolderInner">

                <div class="rotationsConditionsImageAdjacentHolderBox">

                    <div class="rotationsConditionsRowHeader">
                        <select class="rotationActionSelectorSub" id="${baseIDString}" onchange="rotationsUISuffering.updateRotationObject([${newArray}],'${skillSlot}','${characterName}')">
                            ${getConditionList("Enemy Team: Value",conditionListValueArray)}
                        </select>
                    </div>

                    <div class="rotationsSectionConditionHolderBox">
                        <select class="rotationActionSelectorSub" id="${baseIDString}ValueName" onchange="rotationsUISuffering.updateRotationObject([${newArray}],'${skillSlot}','${characterName}',false,1,event)">
                            ${rotationsUISuffering.getConditionList(default1,conditionListEnemyTeamValueArray)}
                        </select>
                    </div>

                </div>
            </div>
            
        </div>`;

        return {returnString, displayString: `${getHighlightSummaryText(default1,null,null,layerCounter)}`}
    },
    "Battle: Value"(characterName,destination,indexCounter,layerCounter,arrayToPass,skillSlot) {
        // {type: "Character: Value", target: "Self", targetType: "Character", characterValue: "Energy: Current"},

        // indexCounter++;
        indexCounter++;
        const newArray = [...arrayToPass];
        newArray.push(indexCounter);
        const arrayIDString = newArray.join("|");
        const baseIDString = `rotationConditionType${skillSlot}${arrayIDString}`;

        const valueNameElem = readSelection(`${baseIDString}ValueName`);
        if (valueNameElem) {destination.battleValue = valueNameElem.value;}



        
        const getConditionList = rotationsUISuffering.getConditionList;

        const default1 = destination.battleValue ?? "Cycle: AV Passed";

        let returnString = `<div class="rotationsConditionsRowHolder">
            <div class="rotationsConditionsRowHolderInner">

                <div class="rotationsConditionsImageAdjacentHolderBox">

                    <div class="rotationsConditionsRowHeader">
                        <select class="rotationActionSelectorSub" id="${baseIDString}" onchange="rotationsUISuffering.updateRotationObject([${newArray}],'${skillSlot}','${characterName}')">
                            ${getConditionList("Battle: Value",conditionListValueArray)}
                        </select>
                    </div>

                    <div class="rotationsSectionConditionHolderBox">
                        <select class="rotationActionSelectorSub" id="${baseIDString}ValueName" onchange="rotationsUISuffering.updateRotationObject([${newArray}],'${skillSlot}','${characterName}',false,1,event)">
                            ${rotationsUISuffering.getConditionList(default1,conditionListBattleValueArray)}
                        </select>
                    </div>

                </div>
            </div>
            
        </div>`;

        return {returnString, displayString: `${getHighlightSummaryText(default1,null,null,layerCounter)}`}
    },
    "Skill Points: Current"(characterName,destination,indexCounter,layerCounter,arrayToPass,skillSlot) {

        // {type: "UserValueNumber", inputValue: 0.50}

        indexCounter++;
        const newArray = [...arrayToPass];
        newArray.push(indexCounter);
        const arrayIDString = newArray.join("|");
        const baseIDString = `rotationConditionType${skillSlot}${arrayIDString}`;

        const numberElem = readSelection(`${baseIDString}InputValue`);
        if (numberElem) {destination.inputValue = +numberElem.value;}

        const getConditionList = rotationsUISuffering.getConditionList;
        let returnString = `<div class="rotationsConditionsRowHolder">
            <div class="rotationsConditionsRowHolderInner">

                <select class="rotationActionSelectorSub" id="${baseIDString}" onchange="rotationsUISuffering.updateRotationObject([${newArray}],'${skillSlot}','${characterName}',false,1,event)">
                    ${getConditionList("Skill Points: Current",conditionListValueArray)}
                </select>

            </div>
            
        </div>`;

        return returnString
    },
    "Skill Points: Max"(characterName,destination,indexCounter,layerCounter,arrayToPass,skillSlot) {

        // {type: "UserValueNumber", inputValue: 0.50}

        indexCounter++;
        const newArray = [...arrayToPass];
        newArray.push(indexCounter);
        const arrayIDString = newArray.join("|");
        const baseIDString = `rotationConditionType${skillSlot}${arrayIDString}`;

        const numberElem = readSelection(`${baseIDString}InputValue`);
        if (numberElem) {destination.inputValue = +numberElem.value;}

        const getConditionList = rotationsUISuffering.getConditionList;
        let returnString = `<div class="rotationsConditionsRowHolder">
            <div class="rotationsConditionsRowHolderInner">

                <select class="rotationActionSelectorSub" id="${baseIDString}" onchange="rotationsUISuffering.updateRotationObject([${newArray}],'${skillSlot}','${characterName}',false,1,event)">
                    ${getConditionList("Skill Points: Max",conditionListValueArray)}
                </select>

            </div>
            
        </div>`;

        return returnString
    },

    "Team Energy Checks"(characterName,destination,indexCounter,layerCounter,arrayToPass,skillSlot) {
        // {type: "Character: Value", target: "Self", targetType: "Character", characterValue: "Energy: Current"},

        // indexCounter++;
        indexCounter++;
        const newArray = [...arrayToPass];
        newArray.push(indexCounter);
        const arrayIDString = newArray.join("|");
        const baseIDString = `rotationConditionType${skillSlot}${arrayIDString}`;

        const valueNameElem = readSelection(`${baseIDString}ValueName`);
        if (valueNameElem) {destination.teamValue = valueNameElem.value;}



        
        const getConditionList = rotationsUISuffering.getConditionList;

        const default1 = destination.sustainValue ?? "No Energy Full [NORMAL]";

        let returnString = `<div class="rotationsConditionsRowHolderWithDesc">
            <div class="rotationsConditionsRowHolderInner">

                <div class="rotationsConditionsImageAdjacentHolderBox">

                    <div class="rotationsConditionsRowHeader">
                        <select class="rotationActionSelectorSub" id="${baseIDString}" onchange="rotationsUISuffering.updateRotationObject([${newArray}],'${skillSlot}','${characterName}')">
                            ${getConditionList("Team Energy Checks",conditionListArray)}
                        </select>
                        ${getControlsStringCondition(newArray,skillSlot,characterName,true)}
                    </div>

                    <div class="rotationsSectionConditionHolderBox">
                        <select class="rotationActionSelectorSub" id="${baseIDString}ValueName" onchange="rotationsUISuffering.updateRotationObject([${newArray}],'${skillSlot}','${characterName}',false,1,event)">
                            ${rotationsUISuffering.getConditionList(default1,conditionListEnergyValueArray)}
                        </select>
                    </div>

                </div>
            </div>

            <span class="conditionSummaryDescBox">
                If in the allied team, excluding this entity, there is ${getHighlightSummaryText(default1,null,false,layerCounter)}
            </span>
            
        </div>`;

        return returnString
    },
    "Sustain Checks"(characterName,destination,indexCounter,layerCounter,arrayToPass,skillSlot) {
        // {type: "Character: Value", target: "Self", targetType: "Character", characterValue: "Energy: Current"},

        // indexCounter++;
        indexCounter++;
        const newArray = [...arrayToPass];
        newArray.push(indexCounter);
        const arrayIDString = newArray.join("|");
        const baseIDString = `rotationConditionType${skillSlot}${arrayIDString}`;

        const valueNameElem = readSelection(`${baseIDString}ValueName`);
        if (valueNameElem) {destination.teamValue = valueNameElem.value;}



        
        const getConditionList = rotationsUISuffering.getConditionList;

        const default1 = destination.sustainValue ?? "Any Ally: HP <= 50%";

        let returnString = `<div class="rotationsConditionsRowHolderWithDesc">
            <div class="rotationsConditionsRowHolderInner">

                <div class="rotationsConditionsImageAdjacentHolderBox">

                    <div class="rotationsConditionsRowHeader">
                        <select class="rotationActionSelectorSub" id="${baseIDString}" onchange="rotationsUISuffering.updateRotationObject([${newArray}],'${skillSlot}','${characterName}')">
                            ${getConditionList("Sustain Checks",conditionListArray)}
                        </select>
                        ${getControlsStringCondition(newArray,skillSlot,characterName,true)}
                    </div>

                    <div class="rotationsSectionConditionHolderBox">
                        <select class="rotationActionSelectorSub" id="${baseIDString}ValueName" onchange="rotationsUISuffering.updateRotationObject([${newArray}],'${skillSlot}','${characterName}',false,1,event)">
                            ${rotationsUISuffering.getConditionList(default1,conditionListSustainValueArray)}
                        </select>
                    </div>

                </div>
            </div>

            <span class="conditionSummaryDescBox">
                If ${getHighlightSummaryText(default1,null,null,layerCounter)}
            </span>
            
        </div>`;

        return returnString
    },
    "Character: State"(characterName,destination,indexCounter,layerCounter,arrayToPass,skillSlot) {
        // {type: "Character: State", target: "Self", stateName: "currentEnergy", isBattleValue: false},

        // indexCounter++;
        indexCounter++;
        const newArray = [...arrayToPass];
        newArray.push(indexCounter);
        const arrayIDString = newArray.join("|");
        const baseIDString = `rotationConditionType${skillSlot}${arrayIDString}`;

        const targetElem = readSelection(`${baseIDString}Target`);
        const valueNameElem = readSelection(`${baseIDString}ValueName`);
        const stateElem = readSelection(`${baseIDString}State`);

        if (targetElem) {destination.target = targetElem.value;}
        if (valueNameElem) {destination.stateName = valueNameElem.value;}
        if (stateElem && destination.state != stateElem.value) {destination.state = stateElem.value === "true" ? true : false;}

        const characterObject = globalRecords.character;
        const target = destination.target;
        const targetSlot = characters[target] ? target : (characterObject[target === "Self" ? `char${globalUI.currentCharacterDisplayed}` : target.toLowerCase()].name);

        const firstValidState = rotationsUISuffering.getConditionListCharStates(destination.stateName,null,targetSlot,destination.target ?? "Self",true);
        

        const getConditionList = rotationsUISuffering.getConditionList;


        const default1 = destination.target ?? "Self";
        // let default2 = destination.stateName ?? firstValidState;
        const default3 = destination.state ?? "true";

        destination.stateName ??= firstValidState;//if the stateName doesn't exist yet(prob bc this was a new selection and we didn't read char states yet) then assign it the first valid state we can find
        //otherwise we leave it as is with whatever value the element provided from user selections, if this was a preexisting condition
        if (firstValidState != null) {
            const currentRef = customDisplayValuesLog[targetSlot] ?? [];

            let valueFound = false;
            for (let baseEntry of conditionListCharacterStateArray) {
                if (destination.stateName === baseEntry.refName) {
                    valueFound = true;
                    break;
                }
            }
            for (let baseEntry of currentRef) {
                if (destination.stateName === baseEntry.refName) {
                    valueFound = true;
                    break;
                }
            }
            if (!valueFound) {destination.stateName = firstValidState;}





            for (let battleEntry of currentRef) {
                // {type: "Character: State", target: "Self", stateName: "currentEnergy", isBattleValue: false},
                // destination.stateName

                // "Saber": [
                //     {valueName: "Basic is Enhanced", refName: "isEnhanced", isBattleValue: true},
                //     {valueName: "Core Resonance", refName: "coreResonance", isBattleValue: true},
                //     {valueName: "Overflow Energy", refName: "overflowEnergy", isBattleValue: true},
                //     {valueName: "Advance Ready", refName: "advanceReady", isBattleValue: true},
                //     {valueName: "E6 Ult Counter", refName: "e6UltCounter", isBattleValue: true, requiresEidolon: 6},
                // ], 

                if (destination.stateName === battleEntry.refName) {
                    destination.isBattleValue = battleEntry.isBattleValue;
                    break;
                }
            }
        }

        let default2 = destination.stateName ?? firstValidState;

        let returnString = `<div class="rotationsConditionsRowHolderWithDesc">
            <div class="rotationsConditionsRowHolderInner">
            ${getHighlightCharPreviewIcon(default1,null)}

                <div class="rotationsConditionsImageAdjacentHolderBox">

                    <div class="rotationsConditionsRowHeader">
                        <select class="rotationActionSelectorSub" id="${baseIDString}" onchange="rotationsUISuffering.updateRotationObject([${newArray}],'${skillSlot}','${characterName}')">
                            ${getConditionList("Character: State",conditionListArray)}
                        </select>
                        <select class="rotationActionSelectorSub" id="${baseIDString}Target" onchange="rotationsUISuffering.updateRotationObject([${newArray}],'${skillSlot}','${characterName}',false,1,event)">
                            ${getConditionList(default1,conditionListChars)}
                        </select>
                        ${getControlsStringCondition(newArray,skillSlot,characterName,true)}
                    </div>

                    <div class="rotationsSectionConditionHolderBox">
                        
                        <select class="rotationActionSelectorSub" id="${baseIDString}ValueName" onchange="rotationsUISuffering.updateRotationObject([${newArray}],'${skillSlot}','${characterName}',false,2,event)">
                            ${rotationsUISuffering.getConditionListCharStates(default2,null,targetSlot,destination.target ?? "Self",false)}
                        </select>
                        <select class="rotationActionSelectorSub" id="${baseIDString}State" onchange="rotationsUISuffering.updateRotationObject([${newArray}],'${skillSlot}','${characterName}',false,3,event)">
                            ${getConditionList(default3,conditionListBoolean)}
                        </select>
                    </div>

                </div>
            </div>

            <span class="conditionSummaryDescBox">
                If ${getHighlightSummaryText(default1,null,null,layerCounter)}'s ${getHighlightSummaryText(default2,default1,true,layerCounter)} is ${getHighlightSummaryText(default3,null,null,layerCounter)}
            </span>
            
        </div>`;

        // destination.stateName ??= firstValidState;//if the stateName doesn't exist yet(prob bc this was a new selection and we didn't read char states yet) then assign it the first valid state we can find
        // //otherwise we leave it as is with whatever value the element provided from user selections, if this was a preexisting condition
        // if (firstValidState != null) {
        //     const currentRef = customDisplayValuesLog[targetSlot] ?? [];
        //     for (let battleEntry of currentRef) {
        //         // {type: "Character: State", target: "Self", stateName: "currentEnergy", isBattleValue: false},
        //         // destination.stateName

        //         // "Saber": [
        //         //     {valueName: "Basic is Enhanced", refName: "isEnhanced", isBattleValue: true},
        //         //     {valueName: "Core Resonance", refName: "coreResonance", isBattleValue: true},
        //         //     {valueName: "Overflow Energy", refName: "overflowEnergy", isBattleValue: true},
        //         //     {valueName: "Advance Ready", refName: "advanceReady", isBattleValue: true},
        //         //     {valueName: "E6 Ult Counter", refName: "e6UltCounter", isBattleValue: true, requiresEidolon: 6},
        //         // ], 

        //         if (destination.stateName === battleEntry.refName) {
        //             destination.isBattleValue = battleEntry.isBattleValue;
        //             break;
        //         }
        //     }
        // }

        return returnString
    },
    comparisonNaming: {
        ">": "Greater Than",
        ">=": "Greater Than or Equal To",
        "=": "Equal To",
        "!=": "NOT Equal To",
        "<": "Less Than",
        "<=": "Less Than or Equal To"
    },
    COMPARE(characterName,destination,indexCounter,layerCounter,arrayToPass,skillSlot) {


        /*
        COMPARE
            value 1 selections
            comparison operator
            value 2 selections
        */

        layerCounter += 1;
        indexCounter++;
        const newArray = [...arrayToPass];
        newArray.push(indexCounter);

        //we don't need a newIndex at -1 here bc the comparison will always have 2 entries, so index 0 and index 1

        // {
        //     type: "COMPARE",
        //     stat1: {type: "Stat", target: "Self", targetType: "Character", statName: "Any Part"},
        //     comparison: ">",
        //     stat2: {type: "Stat", target: "Self", targetType: "Character", statName: "Any Part"}
        // },

        // statArray: [
        //     {type: "Stat", target: "Self", targetType: "Character", statName: "ATK%"},
        //     {type: "Stat", target: "Self", targetType: "Character", statName: "ATK%"}
        // ],

        const arrayIDString = newArray.join("|");
        const baseIDString = `rotationConditionType${skillSlot}${arrayIDString}`;


        const compareElem = readSelection(`${baseIDString}Comparison`);
        if (compareElem) {destination.comparison = compareElem.value;}

        // console.log(destination)

        let newIndex = -1;
        const getConditionList = rotationsUISuffering.getConditionList;
        let returnString = ``;

        const shmancyColorFinal = rotationsUISuffering.getShmancyBorderColor(layerCounter);

        const value1 = rotationsUISuffering.displayLoop(characterName,destination.array[0],newIndex,layerCounter,newArray,skillSlot,null);
        const value2 = rotationsUISuffering.displayLoop(characterName,destination.array[1],newIndex+1,layerCounter,newArray,skillSlot,null);

        const default1 = destination.comparison ?? "=";

        const comparisonNaming = rotationsUISuffering.comparisonNaming;


        // <u></u>
        returnString = `
        <details class="rotationsPermaConditionsExpandTargetBox" ${destination.isClosed ? "" : `open=""`}>
            <summary class="calcUserTargetConditionHeader clickable" style="--schmancyColorOverride: ${shmancyColorFinal};" onclick="event.stopPropagation();rotationsUISuffering.updateRotationObject([${newArray}],'${skillSlot}','${characterName}',false,false,false,false,true);">

                <select class="rotationActionSelectorSub" id="${baseIDString}" onclick="event.stopPropagation();" onchange="rotationsUISuffering.updateRotationObject([${newArray}],'${skillSlot}','${characterName}')">
                    ${rotationsUISuffering.getConditionList("COMPARE",conditionListArray)}
                </select>
                ${getControlsStringCondition(newArray,skillSlot,characterName,true)}
                
            </summary>

            <div class="rotationConditionOperatorBox" style="--schmancyColorOverride: ${shmancyColorFinal};">
                ${value1.returnString}
                <div class="rotationsConditionsRowHeader">
                    <select class="rotationActionSelectorSub" id="${baseIDString}Comparison" onchange="rotationsUISuffering.updateRotationObject([${newArray}],'${skillSlot}','${characterName}',false,1,event)">
                        ${getConditionList(default1,conditionComparatorList)}
                    </select>
                </div>
                ${value2.returnString}
                
                <span class="conditionSummaryDescBox">
                    If ${value1.displayString} is ${getHighlightSummaryText(comparisonNaming[default1],null,null,layerCounter)} ${value2.displayString}
                </span>
            </div>

            
            
        </details>`;

        return returnString
    },
    NOT(characterName,destination,indexCounter,layerCounter,arrayToPass,skillSlot) {
        /*
        COMPARE
            value 1 selections
            comparison operator
            value 2 selections
        */


        layerCounter+= 1;
        indexCounter++;
        const newArray = [...arrayToPass];
        newArray.push(indexCounter);

        //we don't need a newIndex at -1 here bc the comparison will always have 2 entries, so index 0 and index 1

        // {
        //     type: "COMPARE",
        //     stat1: {type: "Stat", target: "Self", targetType: "Character", statName: "Any Part"},
        //     comparison: ">",
        //     stat2: {type: "Stat", target: "Self", targetType: "Character", statName: "Any Part"}
        // },

        // statArray: [
        //     {type: "Stat", target: "Self", targetType: "Character", statName: "ATK%"},
        //     {type: "Stat", target: "Self", targetType: "Character", statName: "ATK%"}
        // ],

        const arrayIDString = newArray.join("|");
        const baseIDString = `rotationConditionType${skillSlot}${arrayIDString}`;

        if (!destination.array.length) {
            destination.array.push(rotationsUISuffering.getReturnStruct("AND"))
        }

        // console.log(destination)

        let newIndex = -1;
        const getConditionList = rotationsUISuffering.getConditionList;
        let returnString = ``;


        const shmancyColorFinal = rotationsUISuffering.getShmancyBorderColor(layerCounter);
        returnString = `
        <details class="rotationsPermaConditionsExpandTargetBox" ${destination.isClosed ? "" : `open=""`}>
            <summary class="calcUserTargetConditionHeader clickable" style="--schmancyColorOverride: ${shmancyColorFinal};" onclick="event.stopPropagation();rotationsUISuffering.updateRotationObject([${newArray}],'${skillSlot}','${characterName}',false,false,false,false,true);">

                <select class="rotationActionSelectorSub" id="${baseIDString}" onclick="event.stopPropagation();" onchange="rotationsUISuffering.updateRotationObject([${newArray}],'${skillSlot}','${characterName}')">
                    ${rotationsUISuffering.getConditionList("NOT",conditionListArray)}
                </select>
                ${getControlsStringCondition(newArray,skillSlot,characterName,true)}
                
            </summary>

            <div class="rotationConditionOperatorBox" style="--schmancyColorOverride: ${shmancyColorFinal};">
                ${rotationsUISuffering.displayLoop(characterName,destination.array[0],newIndex,layerCounter,newArray,skillSlot,null)}
            </div>
            
        </details>`;

        return returnString
    },
    "TARGET CHECK"(characterName,destination,indexCounter,layerCounter,arrayToPass,skillSlot) {
        indexCounter++;
        const newArray = [...arrayToPass];
        newArray.push(indexCounter);


        const arrayIDString = newArray.join("|");
        const baseIDString = `rotationConditionType${skillSlot}${arrayIDString}`;

        // console.log(destination)

        // targetSelectListArray

        // case "TARGET CHECK":
        //     return {
        //         type: "TARGET CHECK",
        //         targetType: [
        //             {type: "Turn", target: "Self", targetType: "Character", phase: "Any Part", state: true},
        //         ],
        //         array: [
        //             {type: "Turn", target: "Self", targetType: "Character", phase: "Any Part", state: true},
        //         ],
        //     }

        let newIndex = -1;
        const getConditionList = rotationsUISuffering.getConditionList;

        // <div class="rotationConditionOperatorBox"></div>



        // ${rotationsUISuffering.displayLoop(characterName,destination.array[1],newIndex+1,layerCounter,newArray,skillSlot)}

        let varyingFilterStringer = "";
        for (let i=1;i<destination.array.length;i++) {
            varyingFilterStringer += rotationsUISuffering.displayLoop(characterName,destination.array[i],newIndex+i,layerCounter,newArray,skillSlot,destination.array.length)
        }

        

        // let returnString = `<div class="rotationsSectionANDBoxHolder">
        //     <select class="rotationActionSelectorSub" id="${baseIDString}" onchange="rotationsUISuffering.updateRotationObject([${newArray}],'${skillSlot}','${characterName}')">
        //         ${rotationsUISuffering.getConditionList("TARGET CHECK",targetSelectOuterArray)}
        //     </select>
        //     ${getControlsStringCondition(newArray,skillSlot,characterName,true,null,null,null,true)}
        // </div>

        // <div class="rotationConditionOperatorBox" style="--schmancyColorOverride: ${shmancyColorFinal};">
            
            
        // </div>
        // `;



        const shmancyColorFinal = rotationsUISuffering.getShmancyBorderColor(layerCounter);
        returnString = `
        <details class="rotationsPermaConditionsExpandTargetBox" ${destination.isClosed ? "" : `open=""`}>
            <summary class="calcUserTargetConditionHeader clickable" style="--schmancyColorOverride: ${shmancyColorFinal};" onclick="event.stopPropagation();rotationsUISuffering.updateRotationObject([${newArray}],'${skillSlot}','${characterName}',false,false,false,false,true);">

                <select class="rotationActionSelectorSub" id="${baseIDString}" onclick="event.stopPropagation();" onchange="rotationsUISuffering.updateRotationObject([${newArray}],'${skillSlot}','${characterName}')">
                ${rotationsUISuffering.getConditionList("TARGET CHECK",targetSelectOuterArray)}
                </select>
                ${getControlsStringCondition(newArray,skillSlot,characterName,true,null,null,null,true)}
                
            </summary>

            <div class="rotationConditionOperatorBox" style="--schmancyColorOverride: ${shmancyColorFinal};">
                ${rotationsUISuffering.displayLoop(characterName,destination.array[0],newIndex,layerCounter,newArray,skillSlot,null,true)}

                <details class="rotationsPermaConditionsExpandTargetBox" open="">
                    <summary class="calcUserTargetConditionHeader clickable" style="--schmancyColorOverride: ${shmancyColorFinal};">
                        <div class="rotationConditionOperatorHeaderCondition">Requirements</div>
                        
                    </summary>
                    <div class="rotationsPermaConditionsExpandTargetBoxInnerReqs">
                        ${varyingFilterStringer}
                        <div class="rotationsOperatorAddButtonHolder">
                            <div class="rotationsOperatorAddButton clickable" onclick="rotationsUISuffering.updateRotationObject([${newArray}],'${skillSlot}','${characterName}',true,null,null,false)">
                                Add Condition
                            </div>
                        </div>
                    </div>
                </details>
            </div>
            
        </details>`;

        return returnString
    },
    "TARGET"(characterName,destination,indexCounter,layerCounter,arrayToPass,skillSlot) {
        indexCounter++;
        const newArray = [...arrayToPass];
        newArray.push(indexCounter);

        //we don't need a newIndex at -1 here bc the comparison will always have 2 entries, so index 0 and index 1


        const arrayIDString = newArray.join("|");
        const baseIDString = `rotationConditionType${skillSlot}${arrayIDString}`;


        // const compareElem = readSelection(`${baseIDString}Comparison`);
        // if (compareElem) {destination.comparison = compareElem.value;}

        // console.log(destination)

        // targetSelectListArray
    // const targetSelectInnerArray = [
        layerCounter += 1;
        let newIndex = -1;
        let varyingFilterStringer = "";
        for (let i=0;i<destination.array.length;i++) {
            varyingFilterStringer += rotationsUISuffering.displayLoop(characterName,destination.array[i],newIndex+i,layerCounter,newArray,skillSlot,destination.array.length,true)
        }


        const shmancyColorFinal = rotationsUISuffering.getShmancyBorderColor(layerCounter);//Requirements
        let returnString = `<details class="rotationsPermaConditionsExpandTargetBox" open="">
                <summary class="calcUserTargetConditionHeader clickable" style="--schmancyColorOverride: ${shmancyColorFinal};">
                    <div class="rotationConditionOperatorHeaderCondition">FILTER</div>
                    
                </summary>
                
                <select class="rotationActionSelectorSub" id="${baseIDString}" onchange="rotationsUISuffering.updateRotationObject([${newArray}],'${skillSlot}','${characterName}')" style="display: none">
                    ${rotationsUISuffering.getConditionList("TARGET",targetSelectInnerArray)}
                </select>
            <div class="rotationsPermaConditionsExpandTargetBoxInner">
        
            <div class="rotationsConditionsRowHolder">
                <div style="display:flex;flex-direction:column">
                    <div class="rotationsConditionsRowHolderInner">

                        <div class="rotationsConditionsImageAdjacentHolderBox">

                            <div class="rotationsConditionsRowHeader">
                                <div class="rotationsSectionANDBoxHolder">
                                    Target Pool:
                                </div>
                                
                                ${globalTargetPoolKeyDisplay}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            ${varyingFilterStringer}
            
        `;

        returnString += `
            <div class="rotationsOperatorAddButtonHolder">
                <div class="rotationsOperatorAddButton clickable" onclick="rotationsUISuffering.updateRotationObject([${newArray}],'${skillSlot}','${characterName}',2)">
                    Add Target Filter
                </div>
            </div>
            </div>
        </details>`;





        // let returnString = `
        //     <div class="statFiltersRowHeader">Filter</div>
        //     <select class="rotationActionSelectorSub" id="${baseIDString}" onchange="rotationsUISuffering.updateRotationObject([${newArray}],'${skillSlot}','${characterName}')" style="display: none">
        //         ${rotationsUISuffering.getConditionList("TARGET",targetSelectInnerArray)}
        //     </select>

        
        //     <div class="rotationsConditionsRowHolder">
        //         <div style="display:flex;flex-direction:column">
        //             <div class="rotationsConditionsRowHolderInner">

        //                 <div class="rotationsConditionsImageAdjacentHolderBox">

        //                     <div class="rotationsConditionsRowHeader">
        //                         <div class="rotationsSectionANDBoxHolder">
        //                             Target Pool:
        //                         </div>
                                
        //                         ${globalTargetPoolKeyDisplay}
        //                     </div>

        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        //     ${varyingFilterStringer}
            
        // `;

        // returnString += `
        //     <div class="rotationsOperatorAddButtonHolder">
        //         <div class="rotationsOperatorAddButton clickable" onclick="rotationsUISuffering.updateRotationObject([${newArray}],'${skillSlot}','${characterName}',2)">
        //             Add Target Filter
        //         </div>
        //     </div>
        // `;

        return returnString
    },
    "FILTER: Statistic"(characterName,destination,indexCounter,layerCounter,arrayToPass,skillSlot) {


        indexCounter++;
        const newArray = [...arrayToPass];
        newArray.push(indexCounter);

        //we don't need a newIndex at -1 here bc the comparison will always have 2 entries, so index 0 and index 1

        // {
        //     type: "COMPARE",
        //     stat1: {type: "Stat", target: "Self", targetType: "Character", statName: "Any Part"},
        //     comparison: ">",
        //     stat2: {type: "Stat", target: "Self", targetType: "Character", statName: "Any Part"}
        // },

        // statArray: [
        //     {type: "Stat", target: "Self", targetType: "Character", statName: "ATK%"},
        //     {type: "Stat", target: "Self", targetType: "Character", statName: "ATK%"}
        // ],

        const arrayIDString = newArray.join("|");
        const baseIDString = `rotationConditionType${skillSlot}${arrayIDString}`;


        const compareElem = readSelection(`${baseIDString}Comparison`);
        if (compareElem) {destination.comparison = compareElem.value;}

        // console.log(destination)

        layerCounter += 1;
        let newIndex = -1;
        const getConditionList = rotationsUISuffering.getConditionList;

        const value1 = rotationsUISuffering.displayLoop(characterName,destination.array[0],newIndex,layerCounter,newArray,skillSlot,null);
        const value2 = rotationsUISuffering.displayLoop(characterName,destination.array[1],newIndex+1,layerCounter,newArray,skillSlot,null);

        const default1 = destination.comparison ?? "=";

        const comparisonNaming = rotationsUISuffering.comparisonNaming;

        const shmancyColorFinal = rotationsUISuffering.getShmancyBorderColor(layerCounter);
        returnString = `
        <details class="rotationsPermaConditionsExpandTargetBox" ${destination.isClosed ? "" : `open=""`}>
            <summary class="calcUserTargetConditionHeader clickable" style="--schmancyColorOverride: ${shmancyColorFinal};" onclick="event.stopPropagation();rotationsUISuffering.updateRotationObject([${newArray}],'${skillSlot}','${characterName}',false,false,false,false,true);">

                <select class="rotationActionSelectorSub" id="${baseIDString}" onclick="event.stopPropagation();" onchange="rotationsUISuffering.updateRotationObject([${newArray}],'${skillSlot}','${characterName}')">
                    ${rotationsUISuffering.getConditionList("FILTER: Statistic",filterBasicListArray)}
                </select>
                ${getControlsStringCondition(newArray,skillSlot,characterName,true,false,false,true)}
                
            </summary>

            <div class="rotationConditionOperatorBox" style="--schmancyColorOverride: ${shmancyColorFinal};">
                ${value1.returnString}
                <div class="rotationsConditionsRowHeader">
                    <select class="rotationActionSelectorSub" id="${baseIDString}Comparison" onchange="rotationsUISuffering.updateRotationObject([${newArray}],'${skillSlot}','${characterName}',false,1,event)">
                        ${getConditionList(default1,conditionComparatorList)}
                    </select>
                </div>
                ${value2.returnString}

                <span class="conditionSummaryDescBox">
                    Reduce targets to entities that meet the condition:<br> ${value1.displayString} is ${getHighlightSummaryText(comparisonNaming[default1],null,null,layerCounter)} ${value2.displayString}
                </span>
            </div>
            
        </details>`;

        return returnString
    },
    "FILTER: Path"(characterName,destination,indexCounter,layerCounter,arrayToPass,skillSlot) {


        indexCounter++;
        const newArray = [...arrayToPass];
        newArray.push(indexCounter);

        //we don't need a newIndex at -1 here bc the comparison will always have 2 entries, so index 0 and index 1

        // {
        //     type: "FILTER: Path",
        //     comparison: "=",
        //     path: "Erudition",
        // }

        const arrayIDString = newArray.join("|");
        const baseIDString = `rotationConditionType${skillSlot}${arrayIDString}`;


        const compareElem = readSelection(`${baseIDString}Comparison`);
        if (compareElem) {destination.comparison = compareElem.value;}

        const comparePath = readSelection(`${baseIDString}Path`);
        if (comparePath) {destination.path = comparePath.value;}

        // console.log(destination)

        layerCounter += 1;
        let newIndex = -1;
        const getConditionList = rotationsUISuffering.getConditionList;

        const comparisonNaming = rotationsUISuffering.comparisonNaming;
        const default1 = destination.comparison ?? "=";
        const default2 = destination.path ?? "Erudition";

        const shmancyColorFinal = rotationsUISuffering.getShmancyBorderColor(layerCounter);
        returnString = `
        <details class="rotationsPermaConditionsExpandTargetBox" ${destination.isClosed ? "" : `open=""`}>
            <summary class="calcUserTargetConditionHeader clickable" style="--schmancyColorOverride: ${shmancyColorFinal};" onclick="event.stopPropagation();rotationsUISuffering.updateRotationObject([${newArray}],'${skillSlot}','${characterName}',false,false,false,false,true);">

                <select class="rotationActionSelectorSub" id="${baseIDString}" onclick="event.stopPropagation();" onchange="rotationsUISuffering.updateRotationObject([${newArray}],'${skillSlot}','${characterName}')">
                    ${rotationsUISuffering.getConditionList("FILTER: Path",filterBasicListArray)}
                </select>
                ${getControlsStringCondition(newArray,skillSlot,characterName,true,false,false,true)}
                
            </summary>

            <div class="rotationConditionOperatorBox" style="--schmancyColorOverride: ${shmancyColorFinal};">
                <div class="rotationsConditionsRowHeader">
                    <select class="rotationActionSelectorSub" id="${baseIDString}Comparison" onchange="rotationsUISuffering.updateRotationObject([${newArray}],'${skillSlot}','${characterName}',false,1,event)">
                        ${getConditionList(default1,conditionComparatorList)}
                    </select>
                </div>
                <div class="rotationsSectionConditionHolderBox">
                    <select class="rotationActionSelectorSub" id="${baseIDString}Path" onchange="rotationsUISuffering.updateRotationObject([${newArray}],'${skillSlot}','${characterName}',false,2,event)">
                        ${getConditionList(default2,conditionListPathType)}
                    </select>
                </div>
                <span class="conditionSummaryDescBox">
                    Reduce targets to those that are ${getHighlightSummaryText(comparisonNaming[default1],null,null,layerCounter)} the path ${getHighlightSummaryText(default2,null,null,layerCounter)}
                </span>
            </div>
            
        </details>`;

        return returnString
    },
    "SORT: Statistic"(characterName,destination,indexCounter,layerCounter,arrayToPass,skillSlot) {
        indexCounter++;
        const newArray = [...arrayToPass];
        newArray.push(indexCounter);

        //we don't need a newIndex at -1 here bc the comparison will always have 2 entries, so index 0 and index 1

        // {
        //     type: "SORT: Statistic",
        //     stat1: {type: "Stat", target: "Self", targetType: "Character", statName: "Any Part"},
        //     comparison: ">",
        // },

        // statArray: [
        //     {type: "Stat", target: "Self", targetType: "Character", statName: "ATK%"},
        //     {type: "Stat", target: "Self", targetType: "Character", statName: "ATK%"}
        // ],

        const arrayIDString = newArray.join("|");
        const baseIDString = `rotationConditionType${skillSlot}${arrayIDString}`;


        const compareElem = readSelection(`${baseIDString}Comparison`);
        if (compareElem) {destination.comparison = compareElem.value;}

        // console.log(destination)

        layerCounter += 1;
        let newIndex = -1;
        const getConditionList = rotationsUISuffering.getConditionList;//rotationsConditionsRowHeader

        const default1 = destination.comparison ?? "Minimum";

        const value1 = rotationsUISuffering.displayLoop(characterName,destination.array[0],newIndex,layerCounter,newArray,skillSlot,null);

        const shmancyColorFinal = rotationsUISuffering.getShmancyBorderColor(layerCounter);
        returnString = `
        <details class="rotationsPermaConditionsExpandTargetBox" ${destination.isClosed ? "" : `open=""`}>
            <summary class="calcUserTargetConditionHeader clickable" style="--schmancyColorOverride: ${shmancyColorFinal};" onclick="event.stopPropagation();rotationsUISuffering.updateRotationObject([${newArray}],'${skillSlot}','${characterName}',false,false,false,false,true);">

                <select class="rotationActionSelectorSub" id="${baseIDString}" onclick="event.stopPropagation();" onchange="rotationsUISuffering.updateRotationObject([${newArray}],'${skillSlot}','${characterName}')">
                    ${rotationsUISuffering.getConditionList("SORT: Statistic",filterBasicListArray)}
                </select>
                ${getControlsStringCondition(newArray,skillSlot,characterName,true,false,false,true)}
                
            </summary>

            <div class="rotationConditionOperatorBox" style="--schmancyColorOverride: ${shmancyColorFinal};">
                ${value1.returnString}
                <div class="rotationsConditionsRowHeader">
                    <select class="rotationActionSelectorSub" id="${baseIDString}Comparison" onchange="rotationsUISuffering.updateRotationObject([${newArray}],'${skillSlot}','${characterName}',false,1,event)">
                        ${getConditionList(default1,conditionComparatorListFilter)}
                    </select>
                </div>
                <span class="conditionSummaryDescBox">
                    Organize targets by ${getHighlightSummaryText(default1,null,null,layerCounter)} ${value1.displayString}
                </span>
            </div>

        </details>`;

        return returnString
    },
    "Filter Stat"(characterName,destination,indexCounter,layerCounter,arrayToPass,skillSlot) {

        // {type: "Stat", statName: "ATK%"},
        indexCounter++;
        const newArray = [...arrayToPass];
        newArray.push(indexCounter);
        const arrayIDString = newArray.join("|");
        const baseIDString = `rotationConditionType${skillSlot}${arrayIDString}`;


        const valueNameElem = readSelection(`${baseIDString}StatValue`);

        if (valueNameElem) {
            destination.statName = valueNameElem.value;
        }

        const characterObject = globalRecords.character;
        const statName = destination.statName;

        // indexToSpecific

        const statIndex = greatTableIndex[statName];
        const familyName = basicShorthand.mappedFamilies[statIndex];
        const resultingPath = propertyImagePaths[familyName];
        const setGrouping = resultingPath.sets[statIndex].specific;
        // console.log(setGrouping)

        // mappedFamilies: {},
        // mappedCacheTags: {},
        // mappedUpdateStatKeys: {},
        // reverseKeyMappings: {},

        // basicShorthand.reverseKeyMappings        //specific to index value  greatTableKeys
        // console.log(statIndex)

        
        const getConditionList = rotationsUISuffering.getConditionList;

        const default1 = statName ?? "SPDFlat";

        let returnString = `<div class="rotationsConditionsRowHolder">
            <div class="rotationsConditionsRowHolderInner">

                <div class="rotationsConditionsImageAdjacentHolderBox">

                    <div class="rotationsConditionsRowHeader">
                        <select class="rotationActionSelectorSub" id="${baseIDString}" onchange="rotationsUISuffering.updateRotationObject([${newArray}],'${skillSlot}','${characterName}')">
                            ${getConditionList("Filter Stat",conditionListValueArrayFilter)}
                        </select>
                    </div>

                    <div class="rotationsSectionConditionHolderBox">
                        <select class="rotationActionSelectorSub" id="${baseIDString}StatValue" onchange="rotationsUISuffering.updateRotationObject([${newArray}],'${skillSlot}','${characterName}',false,1,event)">
                            ${rotationsUISuffering.getConditionListStats(statName ?? "SPDFlat",conditionCharacterStatList)}
                        </select>
                    </div>

                </div>
            </div>
            
        </div>`;

        return {returnString, displayString: `${getHighlightSummaryText(default1,null,null,layerCounter)}`}
    },
    "Filter Character: Value"(characterName,destination,indexCounter,layerCounter,arrayToPass,skillSlot) {
        // {type: "Character: Value", characterValue: "Energy: Current"},

        // indexCounter++;
        indexCounter++;
        const newArray = [...arrayToPass];
        newArray.push(indexCounter);
        const arrayIDString = newArray.join("|");
        const baseIDString = `rotationConditionType${skillSlot}${arrayIDString}`;

        const valueNameElem = readSelection(`${baseIDString}ValueName`);
        if (valueNameElem) {destination.characterValue = valueNameElem.value;}


        // console.log(setGrouping)

        // mappedFamilies: {},
        // mappedCacheTags: {},
        // mappedUpdateStatKeys: {},
        // reverseKeyMappings: {},

        // basicShorthand.reverseKeyMappings        //specific to index value
        
        // console.log(statIndex)

        
        const getConditionList = rotationsUISuffering.getConditionList;

        const default1 = destination.characterValue ?? "energyCurrent";

        let returnString = `<div class="rotationsConditionsRowHolder">
            <div class="rotationsConditionsRowHolderInner">

                <div class="rotationsConditionsImageAdjacentHolderBox">

                    <div class="rotationsConditionsRowHeader">
                        <select class="rotationActionSelectorSub" id="${baseIDString}" onchange="rotationsUISuffering.updateRotationObject([${newArray}],'${skillSlot}','${characterName}')">
                            ${getConditionList("Filter Character: Value",conditionListValueArrayFilter)}
                        </select>
                    </div>

                    <div class="rotationsSectionConditionHolderBox">
                        <select class="rotationActionSelectorSub" id="${baseIDString}ValueName" onchange="rotationsUISuffering.updateRotationObject([${newArray}],'${skillSlot}','${characterName}',false,1,event)">
                            ${rotationsUISuffering.getConditionListCharValues(default1,conditionComparatorCharValueConversions)}
                        </select>
                    </div>

                </div>
            </div>
            
        </div>`;

        return {returnString, displayString: `${getHighlightSummaryText(default1,null,null,layerCounter)}`}
    },
    "Filter User Value: Number"(characterName,destination,indexCounter,layerCounter,arrayToPass,skillSlot) {

        // {type: "UserValueNumber", inputValue: 0.50}

        indexCounter++;
        const newArray = [...arrayToPass];
        newArray.push(indexCounter);
        const arrayIDString = newArray.join("|");
        const baseIDString = `rotationConditionType${skillSlot}${arrayIDString}`;

        const numberElem = readSelection(`${baseIDString}InputValueNumber`);
        if (numberElem) {destination.inputValue = +numberElem.value;}

        const default1 = destination.inputValue ?? 0;

        const getConditionList = rotationsUISuffering.getConditionList;
        let returnString = `<div class="rotationsConditionsRowHolder">
            <div class="rotationsConditionsRowHolderInner">

                <select class="rotationActionSelectorSub" id="${baseIDString}" onchange="rotationsUISuffering.updateRotationObject([${newArray}],'${skillSlot}','${characterName}')">
                    ${getConditionList("Filter User Value: Number",conditionListValueArrayFilter)}
                </select>
                <div class="presetsSelectorBox">
                    <input type="number" class="tagInput" id="${baseIDString}InputValueNumber" value="${default1}" onchange="rotationsUISuffering.updateRotationObject([${newArray}],'${skillSlot}','${characterName}',false,1,event)">
                </div>

            </div>
            
        </div>`;

        return {returnString, displayString: `${getHighlightSummaryText(default1,null,null,layerCounter)}`}
    },
    "Filter Ally"(characterName,destination,indexCounter,layerCounter,arrayToPass,skillSlot) {
        // {type: "Filter Character", target: "Self", targetType: "Character"},

        // indexCounter++;
        indexCounter++;
        const newArray = [...arrayToPass];
        newArray.push(indexCounter);
        const arrayIDString = newArray.join("|");
        const baseIDString = `rotationConditionType${skillSlot}${arrayIDString}`;

        const targetTypeElem = readSelection(`${baseIDString}TargetType`);
        const targetElem = readSelection(`${baseIDString}Target`);

        if (targetTypeElem) {destination.targetType = targetTypeElem.value;}
        if (targetElem) {destination.target = targetElem.value;}

        const getConditionList = rotationsUISuffering.getConditionList;

        const default1 = destination.targetType ?? "Character";
        const default2 = destination.target ?? "Self";

        let returnString = `<div class="rotationsConditionsRowHolderWithDesc">
            <div class="rotationsConditionsRowHolderInner">
            ${getHighlightCharPreviewIcon(default2,null)}

                <div class="rotationsConditionsImageAdjacentHolderBox">

                    <div class="rotationsConditionsRowHeader">
                        <select class="rotationActionSelectorSub" id="${baseIDString}" onchange="rotationsUISuffering.updateRotationObject([${newArray}],'${skillSlot}','${characterName}')">
                            ${getConditionList("Filter Ally",filterBasicListArray)}
                        </select>
                        <select class="rotationActionSelectorSub" id="${baseIDString}TargetType" onchange="rotationsUISuffering.updateRotationObject([${newArray}],'${skillSlot}','${characterName}',false,2,event)">
                            ${getConditionList(default1,conditionListCharsTypeBuffTarget)}
                        </select>
                        ${getControlsStringCondition(newArray,skillSlot,characterName,true,false,false,true)}
                    </div>

                    <div class="rotationsSectionConditionHolderBox">
                        <select class="rotationActionSelectorSub" id="${baseIDString}Target" onchange="rotationsUISuffering.updateRotationObject([${newArray}],'${skillSlot}','${characterName}',false,1,event)">
                            ${getConditionList(default2,conditionListChars)}
                        </select>
                    </div>

                </div>
                
            </div>

            <span class="conditionSummaryDescBox">
                Finalize target to ${getHighlightSummaryText(default2,null,null,layerCounter)}'s ${getHighlightSummaryText(default1,null,null,layerCounter)}
            </span>
        </div>`;

        return returnString
    },
    "Healing Presets"(characterName,destination,indexCounter,layerCounter,arrayToPass,skillSlot) {

        // {type: "Stat", statName: "ATK%"},
        indexCounter++;
        const newArray = [...arrayToPass];
        newArray.push(indexCounter);
        const arrayIDString = newArray.join("|");
        const baseIDString = `rotationConditionType${skillSlot}${arrayIDString}`;


        const valueNameElem = readSelection(`${baseIDString}StatValue`);

        if (valueNameElem) {
            destination.statName = valueNameElem.value;
        }
        const statName = destination.statName ??= "Lowest HP Ally (On-Field)";

        // basicShorthand.reverseKeyMappings        //specific to index value  greatTableKeys
        // console.log(statIndex)

        
        const getConditionList = rotationsUISuffering.getConditionList;


        // "Healing Presets",
        // "Lowest HP Ally (On-Field)",

        let returnString = `<div class="rotationsConditionsRowHolderWithDesc">
            <div class="rotationsConditionsRowHolderInner">

                <div class="rotationsConditionsImageAdjacentHolderBox">

                    <div class="rotationsConditionsRowHeader">
                        <select class="rotationActionSelectorSub" id="${baseIDString}" onchange="rotationsUISuffering.updateRotationObject([${newArray}],'${skillSlot}','${characterName}')">
                            ${getConditionList("Healing Presets",filterBasicListArray)}
                        </select>
                        ${getControlsStringCondition(newArray,skillSlot,characterName,true,false,false,true)}
                    </div>

                    <div class="rotationsSectionConditionHolderBox">
                        <select class="rotationActionSelectorSub" id="${baseIDString}StatValue" onchange="rotationsUISuffering.updateRotationObject([${newArray}],'${skillSlot}','${characterName}',false,1,event)">
                            ${getConditionList(statName,filterHealingPresetMenuArray)}
                        </select>
                    </div>

                </div>
            </div>
            <span class="conditionSummaryDescBox">
                Finalize target by priority: ${getHighlightSummaryText(statName,null,null,layerCounter)}
            </span>
            
        </div>`;

        return returnString
    },

    "Character: Special Value"(characterName,destination,indexCounter,layerCounter,arrayToPass,skillSlot) {
        // case "Character: Special Value":
        //         return {type: "Character: Special Value", target: "Self", specialValue: "currentEnergy", isBattleValue: false}

        // indexCounter++;
        indexCounter++;
        const newArray = [...arrayToPass];
        newArray.push(indexCounter);
        const arrayIDString = newArray.join("|");
        const baseIDString = `rotationConditionType${skillSlot}${arrayIDString}`;

        const targetElem = readSelection(`${baseIDString}Target`);
        const valueNameElem = readSelection(`${baseIDString}ValueName`);
        // const stateElem = readSelection(`${baseIDString}State`);

        if (targetElem) {destination.target = targetElem.value;}
        if (valueNameElem) {destination.specialValue = valueNameElem.value;}
        // if (stateElem && destination.state != stateElem.value) {destination.state = stateElem.value === "true" ? true : false;}

        const characterObject = globalRecords.character;
        const target = destination.target;
        const targetSlot = characters[target] ? target : (characterObject[target === "Self" ? `char${globalUI.currentCharacterDisplayed}` : target.toLowerCase()].name);

        const firstValidValue = rotationsUISuffering.getConditionListCharSpecialValues(destination.specialValue,null,targetSlot,destination.target ?? "Self",true);
        // console.log(firstValidState)

        const getConditionList = rotationsUISuffering.getConditionList;

        const default1 = destination.target ?? "Self";

        destination.specialValue ??= firstValidValue;//if the stateName doesn't exist yet(prob bc this was a new selection and we didn't read char states yet) then assign it the first valid state we can find
        //otherwise we leave it as is with whatever value the element provided from user selections, if this was a preexisting condition
        if (firstValidValue != null) {
            const currentRef = customDisplayValuesLog[targetSlot] ?? [];

            let valueFound = false;
            for (let baseEntry of conditionListCharacterStateArray) {
                if (destination.specialValue === baseEntry.refName) {
                    valueFound = true;
                    break;
                }
            }
            for (let baseEntry of currentRef) {
                if (destination.specialValue === baseEntry.refName) {
                    valueFound = true;
                    break;
                }
            }
            if (!valueFound) {destination.specialValue = firstValidValue;}

            for (let battleEntry of currentRef) {
                // {type: "Character: State", target: "Self", stateName: "currentEnergy", isBattleValue: false},
                // destination.stateName

                // "Saber": [
                //     {valueName: "Basic is Enhanced", refName: "isEnhanced", isBattleValue: true},
                //     {valueName: "Core Resonance", refName: "coreResonance", isBattleValue: true},
                //     {valueName: "Overflow Energy", refName: "overflowEnergy", isBattleValue: true},
                //     {valueName: "Advance Ready", refName: "advanceReady", isBattleValue: true},
                //     {valueName: "E6 Ult Counter", refName: "e6UltCounter", isBattleValue: true, requiresEidolon: 6},
                // ], 

                if (destination.specialValue === battleEntry.refName) {
                    destination.isBattleValue = battleEntry.isBattleValue;
                    break;
                }
            }
        }

        const default2 = destination.specialValue ?? firstValidValue;



        let returnString = `<div class="rotationsConditionsRowHolder">
            <div class="rotationsConditionsRowHolderInner">
            ${getHighlightCharPreviewIcon(default1,null)}

                <div class="rotationsConditionsImageAdjacentHolderBox">

                    <div class="rotationsConditionsRowHeader">
                        <select class="rotationActionSelectorSub" id="${baseIDString}" onchange="rotationsUISuffering.updateRotationObject([${newArray}],'${skillSlot}','${characterName}')">
                            ${getConditionList("Character: Special Value",conditionListValueArray)}
                        </select>
                        <select class="rotationActionSelectorSub" id="${baseIDString}Target" onchange="rotationsUISuffering.updateRotationObject([${newArray}],'${skillSlot}','${characterName}',false,1,event)">
                            ${getConditionList(default1,conditionListChars)}
                        </select>
                    </div>

                    <div class="rotationsSectionConditionHolderBox">
                        
                        <select class="rotationActionSelectorSub" id="${baseIDString}ValueName" onchange="rotationsUISuffering.updateRotationObject([${newArray}],'${skillSlot}','${characterName}',false,2,event)">
                            ${rotationsUISuffering.getConditionListCharSpecialValues(default2,null,targetSlot,destination.target ?? "Self",false)}
                        </select>
                    </div>

                </div>
            </div>
            
        </div>`;

        return {returnString, displayString: `${getHighlightSummaryText(default1,null,null,layerCounter)}'s ${getHighlightSummaryText(default2,default1,true,layerCounter)}`}
    },
    MATH(characterName,destination,indexCounter,layerCounter,arrayToPass,skillSlot) {


        /*
        COMPARE
            value 1 selections
            comparison operator
            value 2 selections
        */

        layerCounter += 1;
        indexCounter++;
        const newArray = [...arrayToPass];
        newArray.push(indexCounter);

        //we don't need a newIndex at -1 here bc the comparison will always have 2 entries, so index 0 and index 1


        // statArray: [
        //     {type: "Stat", target: "Self", targetType: "Character", statName: "ATK%"},
        //     {type: "Stat", target: "Self", targetType: "Character", statName: "ATK%"}
        // ],

        // case "MATH":
        //     return {
        //         type: "MATH",
        //         array: [
        //             {type: "Stat", target: "Self", targetType: "Character", statName: "ATK%"},
        //             {type: "Stat", target: "Self", targetType: "Character", statName: "ATK%"}
        //         ],
        //         operator: "*",
        //     }

        const arrayIDString = newArray.join("|");
        const baseIDString = `rotationConditionType${skillSlot}${arrayIDString}`;


        const mathElem = readSelection(`${baseIDString}MathOperator`);
        if (mathElem) {destination.operator = mathElem.value;}

        // console.log(destination)

        let newIndex = -1;
        const getConditionList = rotationsUISuffering.getConditionList;

        const value1 = rotationsUISuffering.displayLoop(characterName,destination.array[0],newIndex,layerCounter,newArray,skillSlot,null);
        const value2 = rotationsUISuffering.displayLoop(characterName,destination.array[1],newIndex+1,layerCounter,newArray,skillSlot,null);

        const default1 = destination.operator ?? "+";

        const shmancyColorFinal = rotationsUISuffering.getShmancyBorderColor(layerCounter);
        returnString = `
        <details class="rotationsPermaConditionsExpandTargetBox" ${destination.isClosed ? "" : `open=""`}>
            <summary class="calcUserTargetConditionHeader clickable" style="--schmancyColorOverride: ${shmancyColorFinal};" onclick="event.stopPropagation();rotationsUISuffering.updateRotationObject([${newArray}],'${skillSlot}','${characterName}',false,false,false,false,true);">

                <select class="rotationActionSelectorSub" id="${baseIDString}" onclick="event.stopPropagation();" onchange="rotationsUISuffering.updateRotationObject([${newArray}],'${skillSlot}','${characterName}')">
                    ${rotationsUISuffering.getConditionList("MATH",conditionListValueArray)}
                </select>
                
            </summary>

            <div class="rotationConditionOperatorBox" style="--schmancyColorOverride: ${shmancyColorFinal};">
                ${value1.returnString}
                <div class="rotationsConditionsRowHeader">
                    <select class="rotationActionSelectorSub" id="${baseIDString}MathOperator" onchange="rotationsUISuffering.updateRotationObject([${newArray}],'${skillSlot}','${characterName}',false,1,event)">
                        ${getConditionList(default1,conditionMathList)}
                    </select>
                </div>
                ${value2.returnString}
            </div>
            
        </details>`;

        return {returnString, displayString: `(${value1.displayString} ${getHighlightSummaryText(default1,null,null,layerCounter)} ${value2.displayString})`}
    },
    "FILTER MATH"(characterName,destination,indexCounter,layerCounter,arrayToPass,skillSlot) {


        /*
        COMPARE
            value 1 selections
            comparison operator
            value 2 selections
        */


        indexCounter++;
        const newArray = [...arrayToPass];
        newArray.push(indexCounter);

        //we don't need a newIndex at -1 here bc the comparison will always have 2 entries, so index 0 and index 1


        // statArray: [
        //     {type: "Stat", target: "Self", targetType: "Character", statName: "ATK%"},
        //     {type: "Stat", target: "Self", targetType: "Character", statName: "ATK%"}
        // ],

        // case "MATH":
        //     return {
        //         type: "MATH",
        //         array: [
        //             {type: "Stat", target: "Self", targetType: "Character", statName: "ATK%"},
        //             {type: "Stat", target: "Self", targetType: "Character", statName: "ATK%"}
        //         ],
        //         operator: "*",
        //     }

        const arrayIDString = newArray.join("|");
        const baseIDString = `rotationConditionType${skillSlot}${arrayIDString}`;


        const mathElem = readSelection(`${baseIDString}MathOperator`);
        if (mathElem) {destination.operator = mathElem.value;}

        // console.log(destination)

        layerCounter += 1;
        let newIndex = -1;
        const value1 = rotationsUISuffering.displayLoop(characterName,destination.array[0],newIndex,layerCounter,newArray,skillSlot,null);
        const value2 = rotationsUISuffering.displayLoop(characterName,destination.array[1],newIndex+1,layerCounter,newArray,skillSlot,null);

        const default1 = destination.operator ?? "+";

        
        const getConditionList = rotationsUISuffering.getConditionList;

        const shmancyColorFinal = rotationsUISuffering.getShmancyBorderColor(layerCounter);
        returnString = `
        <details class="rotationsPermaConditionsExpandTargetBox" ${destination.isClosed ? "" : `open=""`}>
            <summary class="calcUserTargetConditionHeader clickable" style="--schmancyColorOverride: ${shmancyColorFinal};" onclick="event.stopPropagation();rotationsUISuffering.updateRotationObject([${newArray}],'${skillSlot}','${characterName}',false,false,false,false,true);">

                <select class="rotationActionSelectorSub" id="${baseIDString}" onclick="event.stopPropagation();" onchange="rotationsUISuffering.updateRotationObject([${newArray}],'${skillSlot}','${characterName}')">
                    ${rotationsUISuffering.getConditionList("FILTER MATH",conditionListValueArrayFilter)}
                </select>
                
            </summary>

            <div class="rotationConditionOperatorBox" style="--schmancyColorOverride: ${shmancyColorFinal};">
                ${value1.returnString}
                <div class="rotationsConditionsRowHeader">
                    <select class="rotationActionSelectorSub" id="${baseIDString}MathOperator" onchange="rotationsUISuffering.updateRotationObject([${newArray}],'${skillSlot}','${characterName}',false,1,event)">
                        ${getConditionList(default1,conditionMathList)}
                    </select>
                </div>
                ${value2.returnString}
            </div>
            
        </details>`;

        return {returnString, displayString: `(${value1.displayString} ${getHighlightSummaryText(default1,null,null,layerCounter)} ${value2.displayString})`}
    },
    actionHeader() {

    }
}
const getHighlightSummaryText = rotationsUISuffering.getHighlightSummary;
const getHighlightCharPreviewIcon = rotationsUISuffering.getSummaryCharPreviewIcon;
const getControlsStringCondition = rotationsUISuffering.getControlsStringCondition;