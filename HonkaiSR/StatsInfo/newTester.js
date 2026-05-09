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
    // ...traceTreeVisualData,
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
let isVaryingAbilityPage = false;
let firstPageLoad = false;

const isBattleEvent = false;//compositeAbilityObject.isBattleEvent;
const hasNoReader = true;//isBattleEvent || (compositeAbilityObject.noReader != undefined && compositeAbilityObject.noReader === true);
const BEREF = false;//battleEvents[compositeAbilityObject.fullCharacterName];


let currentPage = null;
const megaParsingFuckery = {
    fullStatList: {
        "Resistance (RES)": "createRESPage",
        "Vulnerability": "createVULNPage",
        "Defense": "createDEFPage",
        "Effect Hit Rate (EHR)": "createEHRPage",
    },
    updateStatSearch() {
        let currentUserInput = readSelection("statFilterBoxInput").value;
        const scrollerListElem = readSelection("actionLogScrollerVertical");
        let listerStringer = "";

        // statFilterBoxInput
        const statLister = megaParsingFuckery.fullStatList;

        // erosionModsData
        function fuzzyMatch(input,statName) {
            const search = input.toLowerCase();
            return statName.toLowerCase().includes(search);
        }

        let listStringer = "";
        for (let statName in statLister) {
            const checkHas = fuzzyMatch(currentUserInput,statName);

            listStringer += checkHas ? `<div class="cycleEndBar clickable" onclick="megaParsingFuckery['${statLister[statName]}']()">${statName}<div class="weirdSideSemiCircleThinger"></div></div>` : ""
        }

        scrollerListElem.innerHTML = listStringer;
    },
    updateCurrentPage() { 
        let urlObject = {
            stat: currentPage,
        }
      
    
        // if (isExported != true) {
        decoded = new URLSearchParams(urlObject).toString().replace(/%2C/g, ',');
        const newUrl = `${window.location.origin}/HonkaiSR/StatsInfo/?${decoded}`;
    
        // if (!isOverride) {
            history.replaceState({}, '', newUrl);
        // }
        // else {return newUrl;}
        // }
    },
    loadCurrentPage() {
        let feed = (new URL(document.location)).searchParams;
        let urlStat = feed.get("stat");

        if (urlStat) {
            console.log(urlStat)
            currentPage = urlStat;
            // megaParsingFuckery.updateCurrentPage()
            megaParsingFuckery[megaParsingFuckery.fullStatList[urlStat]]();
        }
        else {
            megaParsingFuckery[megaParsingFuckery.fullStatList["Effect Hit Rate (EHR)"]]();
        }
    },
    pageLoad(loadFile) {
        

        // let listerStringer = "";
        // const statLister = megaParsingFuckery.fullStatList;
        // for (let statName in statLister) {
        //     listerStringer += `<div class="cycleEndBar clickable" onclick="megaParsingFuckery['${statLister[statName]}']()">${statName}<div class="weirdSideSemiCircleThinger"></div></div>`
        // }
        


        megaParsingFuckery.updateStatSearch();
        // megaParsingFuckery.createVULNPage();
        // megaParsingFuckery[megaParsingFuckery.fullStatList["Resistance (RES)"]]();

        // let feed = (new URL(document.location)).searchParams;
        // megaParsingFuckery[megaParsingFuckery.fullStatList["Effect Hit Rate (EHR)"]]();

        megaParsingFuckery.loadCurrentPage()

    },
    createEHRPage() {
        // <div class="imageRowStatisticImageBox"><img src="/HonkaiSR/icon/element/Physical.png" class="imageRowStatisticImage"></div>

        // <div class="imageRowStatisticBox1">
                
                
        //         <div class="statisticSettingsRow">
        //             <div class="statsRowName">Enemy RES %:&nbsp;<span id="enemyRESSliderValue">20%</span></div>
        //             <div class="statsRowToggle">
        //                 <input type="range" id="enemyRESSlider" name="slider" min="0" max="90" value="20" step="10" list="tickmarks" onchange="megaParsingFuckery.updateRESPage()">
        //             </div>
        //         </div>

        //         <div class="statisticSettingsRow">
        //             <div class="statsRowName">SUM PEN %:&nbsp;<span id="allyPENSliderValue">20%</span></div>
        //             <div class="statsRowToggle">
        //                 <input type="range" id="allyPENSlider" name="slider" min="0" max="190" value="20" step="10" list="tickmarks" onchange="megaParsingFuckery.updateRESPage()">
        //             </div>
        //         </div>

        //     </div>





        // <div class="characterDisplayElementWeaknessIconHolderBox">
        //     <img src="/HonkaiSR/icon/element/Fire.png" class="characterDisplayElementWeaknessIcon">
        //     <img src="/HonkaiSR/icon/element/Thunder.png" class="characterDisplayElementWeaknessIcon">
        //     <img src="/HonkaiSR/icon/element/Wind.png" class="characterDisplayElementWeaknessIcon">
        //     <div class="characterDisplayEnemyLineupBarHeader">Position</div>
        //     <div class="characterDisplayEnemyLineupBar">
        //         <div class="characterDisplayEnemyLineupCircleEmpty"></div>
        //         <div class="characterDisplayEnemyLineupCircleFill"></div>
        //         <div class="characterDisplayEnemyLineupCircleEmpty"></div>
        //     </div>
        // </div>
        // <div class="characterSearchButtonDMGDetailsTurnInspect clickable" id="" onclick="customMenu.createCharacterStatScreenBattleLogged(9)">Inspect</div>
        let resStringerMain = `
            <div class="actionDetailHeaderRow"><span class="detailHeaderName">EFFECT HIT RATE</span></div>



            <div class="actionDetailHeaderRowCharacterImageBox">
                <div class="actionDetailHeaderRowCharacterImageAndEnergyBox">
                    <img src="/HonkaiSR/misc/Glorpard.png" class="actionDetailHeaderRowEnemyImage">
                </div>
                <div class="actionDetailHeaderRowCharacterCustomValues">
                <div class="cyclesSettingsHeader">Stat Comparison</div>

                        <div class="imageRowStatisticBox2">
                            <div class="imageRowStatisticImageBox"></div>
                            <div class="imageRowStatisticNameBox">Base Chance</div>
                            <div class="imageRowStatisticStatBox">
                                <div class="presetsSelectorBox">
                                    <input type="number" class="tagInput" id="baseChanceValue" value="100" onchange="megaParsingFuckery.updateEHRPage()">%
                                </div>
                            </div>
                        </div>
                        <div class="imageRowStatisticBox2">
                            <div class="imageRowStatisticImageBox"><img src="/HonkaiSR/icon/property/IconStatusResistance.png" class="imageRowStatisticImage"></div>
                            <div class="imageRowStatisticNameBox">Enemy Effect RES</div>
                            <div class="imageRowStatisticStatBox">
                                <div class="presetsSelectorBox">
                                    <input type="number" class="tagInput" id="effectRESValue" value="40" onchange="megaParsingFuckery.updateEHRPage()">%
                                </div>
                            </div>
                        </div>
                        <div class="imageRowStatisticBox2">
                            <div class="imageRowStatisticImageBox"><img src="/HonkaiSR/icon/property/IconStatusProbability.png" class="imageRowStatisticImage"></div>
                            <div class="imageRowStatisticNameBox">Effect Hit Rate</div>
                            <div class="imageRowStatisticStatBox">
                                <div class="presetsSelectorBox">
                                    <input type="number" class="tagInput" id="ehrValue" value="80" onchange="megaParsingFuckery.updateEHRPage()">%
                                </div>
                            </div>
                        </div>

                        <div class="statisticSettingsRow">
                            <div class="statsRowName">HIT COUNT(READ BELOW):&nbsp;<span id="hitCountSliderValue">1x</span></div>
                            <div class="statsRowToggle">
                                <input type="range" id="hitCountSlider" name="slider" min="1" max="15" value="1" step="1" list="tickmarks" onchange="megaParsingFuckery.updateEHRPage()">
                            </div>
                        </div>


                        <div class="totalHealingBoxBreakdownRows" style="background-color: #ffffff1A">
                            <div class="totalHealingBoxHalfBreakdownRows hasHoverTooltip">
                                <div class="totalHealingHeader">Final Chance</div>
                                <div class="totalHealingValueBoss" id="finalMulti">x1</div>
                            </div>
                            <div class="totalHealingBoxHalfBreakdownRows hasHoverTooltip">
                                <div class="totalHealingHeader">EHR For 100%</div>
                                <div class="totalHealingValueBoss" id="finalMulti2">x1</div>
                            </div>
                            <div class="totalHealingBoxHalfBreakdownRows hasHoverTooltip">
                                <div class="totalHealingHeader">At least 1 Proc</div>
                                <div class="totalHealingValueBoss" id="gainValue2">x1</div>
                            </div>
                        </div>
                        
                        <div class="statsBoxResultingText" id="resultingText"></div>
                </div>
            </div>

            <div class="statsPageParaHeader">LIMITS & FORMULA</div>
            <p class="formulaP">FinalChance = baseChance * (1 - EffectRES) * (1 + EHR)</p>
            <div class="totalHealingBoxBreakdownRows" style="background-color: #ffffff1A">
                <div class="totalHealingBoxHalfBreakdownRows hasHoverTooltip">
                    <div class="totalHealingHeader">Effect RES Limit</div>
                    <div class="totalHealingValueBoss">100%</div>
                </div>
                <div class="totalHealingBoxHalfBreakdownRows hasHoverTooltip">
                    <div class="totalHealingHeader">EHR Limit</div>
                    <div class="totalHealingValueBoss">N/A</div>
                </div>
                <div class="totalHealingBoxHalfBreakdownRows hasHoverTooltip">
                    <div class="totalHealingHeader">Final Chance Limit</div>
                    <div class="totalHealingValueBoss">100%</div>
                </div>
            </div>
            <div class="statsPageParaBody">
                
            </div>

            <div class="statsPageParaHeader">HIT COUNTS ARE NOT WHAT YOU THINK</div>
            <div class="statsPageParaBody">
                It's an extremely common misconception that debuffs or DoTs can be applied on every hit in an attack. That's some horse shit.<br>
                As an example, it's commonly believed that Kafka's Talent FUA can apply her Ult DoT on every hit, which drastically changes the math for some of her applications, but her talent only applies the Ult DoT once at the end of the attack. On the flip side, her signature lightcone DOES actually try to apply the shock DoT on every hit in her attacks when used.
                <br><br>I said above to read here below, because I fucking guarantee you that you guys have NO IDEA what the actual applicable hit count is in an attack 90% of the time and you're doing math based on some crazy ass assumptions. Do not do that.
                <br>Please for the love of god, just check the entity's eventreader in the library here on the site if you aren't sure. Or just ask in discord.
            </div>

            <div class="statsPageParaHeader">HOW ARE MULTIPLE HITS FACTORED?</div>
            <div class="statsPageParaBody">
                The correct approach for this is to use what are called Bernoulli Trials.<br>
                With these, we take the final chance to apply in one instance, convert it into a chance to fail instead of apply, and then we raise that chance to fail to the power of however many hits can apply the debuff, and then revert it back to a chance to apply instead of fail.
                <p class="formulaP">AtLeastOneChance = 1 - ((1 - FinalChance)^hitCount)</p>
                And this will give you the proper chance of at least ONE proc succeeding between all hits.
            </div>
        `;

        readSelection("statsPageMainBox").innerHTML = resStringerMain;

        megaParsingFuckery.updateEHRPage();
    },
    updateEHRPage() {
        currentPage = "Effect Hit Rate (EHR)";
        megaParsingFuckery.updateCurrentPage()
        const baseChancePre = +readSelection("baseChanceValue").value;
        readSelection("baseChanceValue").value = Math.max(1,Math.min(500,baseChancePre));
        const baseChance = +readSelection("baseChanceValue").value;

        const effectRESPre = +readSelection("effectRESValue").value;
        readSelection("effectRESValue").value = Math.max(0,Math.min(100,effectRESPre));
        const effectRES = +readSelection("effectRESValue").value;

        const ehrValuePre = +readSelection("ehrValue").value;
        readSelection("ehrValue").value = Math.max(0,Math.min(500,ehrValuePre));
        const ehrValue = +readSelection("ehrValue").value; 
        
        const hitCount = +readSelection("hitCountSlider").value;

        const finalChance = (baseChance/100) * (1 - (effectRES/100)) * (1 + (ehrValue/100))
        readSelection("finalMulti").innerHTML = (100 * finalChance).toLocaleString() + "%";

        readSelection("finalMulti2").innerHTML = (((1/((baseChance/100) * (1 - (effectRES/100)))) - 1) * 100).toLocaleString() + "%";
        // (1/(baseChance * (1 - effectRES))) - 1 = EHR

        readSelection("hitCountSliderValue").innerHTML = hitCount + "x";


        const invertedChance = 1 - Math.min(1,finalChance);
        const compositeFailure = invertedChance ** hitCount;
        const finalPass = 1 - compositeFailure;
        

        



        // let enemyDEF = Math.max(0, enemyDEFBase * (1 - (PENValue/100)));//def shred will always be a positive value, just how I'd prefer it. So always - here
        // let enemyDEF2 = Math.max(0, enemyDEFBase * (1 - (PENValue2/100)));
        
        // let sumDEF = 1 - (enemyDEF / (enemyDEF + attackerDiffDEF));
        // let sumDEF2 = 1 - (enemyDEF2 / (enemyDEF2 + attackerDiffDEF));

        // const preValue = 1 - (RESValue/100);
        // const finalMulti = sumDEF;
        // const finalMulti2 = sumDEF2;

        // const gainValue = (finalMulti/preValue) - 1;
        // const gainValue2 = (finalMulti2/preValue) - 1;
        // const gainValueCompare = (finalMulti2/finalMulti) - 1;

        // readSelection("finalMulti").innerHTML = "x" + (finalMulti).toLocaleString();
        // readSelection("gainValue").innerHTML = (gainValue * 100).toLocaleString() + "%";


        
        // readSelection("finalMulti2").innerHTML = "x" + (finalMulti2).toLocaleString();
        readSelection("gainValue2").innerHTML = (finalPass * 100).toLocaleString() + "%";

        // readSelection("allyPENSlider2").disabled = !isCompare;

        const isGain = true;//gainValueCompare >= 0;
        readSelection("resultingText").innerHTML = "";
        // `On a LVL <span>${RESValue.toLocaleString()}</span> enemy, going from <span>${PENValue.toLocaleString()}%</span> to <span>${PENValue2.toLocaleString()}%</span> SHRED, will result in a ${isGain ? `<span class="relativeGain">` : `<span class="relativeLoss">`}${(gainValueCompare * 100).toLocaleString()}% DMG ${isGain ? `GAIN` : `LOSS`}</span>`

    },
    createDEFPage() {
        // <div class="imageRowStatisticImageBox"><img src="/HonkaiSR/icon/element/Physical.png" class="imageRowStatisticImage"></div>

        // <div class="imageRowStatisticBox1">
                
                
        //         <div class="statisticSettingsRow">
        //             <div class="statsRowName">Enemy RES %:&nbsp;<span id="enemyRESSliderValue">20%</span></div>
        //             <div class="statsRowToggle">
        //                 <input type="range" id="enemyRESSlider" name="slider" min="0" max="90" value="20" step="10" list="tickmarks" onchange="megaParsingFuckery.updateRESPage()">
        //             </div>
        //         </div>

        //         <div class="statisticSettingsRow">
        //             <div class="statsRowName">SUM PEN %:&nbsp;<span id="allyPENSliderValue">20%</span></div>
        //             <div class="statsRowToggle">
        //                 <input type="range" id="allyPENSlider" name="slider" min="0" max="190" value="20" step="10" list="tickmarks" onchange="megaParsingFuckery.updateRESPage()">
        //             </div>
        //         </div>

        //     </div>





        // <div class="characterDisplayElementWeaknessIconHolderBox">
        //     <img src="/HonkaiSR/icon/element/Fire.png" class="characterDisplayElementWeaknessIcon">
        //     <img src="/HonkaiSR/icon/element/Thunder.png" class="characterDisplayElementWeaknessIcon">
        //     <img src="/HonkaiSR/icon/element/Wind.png" class="characterDisplayElementWeaknessIcon">
        //     <div class="characterDisplayEnemyLineupBarHeader">Position</div>
        //     <div class="characterDisplayEnemyLineupBar">
        //         <div class="characterDisplayEnemyLineupCircleEmpty"></div>
        //         <div class="characterDisplayEnemyLineupCircleFill"></div>
        //         <div class="characterDisplayEnemyLineupCircleEmpty"></div>
        //     </div>
        // </div>
        // <div class="characterSearchButtonDMGDetailsTurnInspect clickable" id="" onclick="customMenu.createCharacterStatScreenBattleLogged(9)">Inspect</div>
        let resStringerMain = `
            <div class="actionDetailHeaderRow"><span class="detailHeaderName">DEFENSE</span></div>



            <div class="actionDetailHeaderRowCharacterImageBox">
                <div class="actionDetailHeaderRowCharacterImageAndEnergyBox">
                    <img src="/HonkaiSR/misc/Glorpard.png" class="actionDetailHeaderRowEnemyImage">

                    
                    
                </div>
                <div class="actionDetailHeaderRowCharacterCustomValues">
                <div class="cyclesSettingsHeader">Stat Comparison</div>

                        
                        <div class="imageRowStatisticBox2">
                            <div class="imageRowStatisticImageBox"></div>
                            <div class="imageRowStatisticNameBox">Enemy LVL&nbsp;<span id="enemyRESSliderValue">95</span></div>
                            <div class="imageRowStatisticStatBox">
                                <div class="presetsSelectorBox">
                                    <input type="number" class="tagInput" id="enemyRESSlider" value="95" onchange="megaParsingFuckery.updateDEFPage()">
                                </div>
                            </div>
                        </div>

                        <div class="statisticSettingsRow">
                            <div class="statsRowName">SUM SHRED %:&nbsp;<span id="allyPENSliderValue">60%</span></div>
                            <div class="statsRowToggle">
                                <input type="range" id="allyPENSlider" name="slider" min="0" max="100" value="60" step="10" list="tickmarks" onchange="megaParsingFuckery.updateDEFPage()">
                            </div>
                        </div>

                        <div class="statisticSettingsRow">
                            <div class="statsRowName">COMPARE SHRED %:&nbsp;<span id="allyPENSliderValue2">70%</span></div>
                            <div class="statsRowToggle">
                                <input type="range" id="allyPENSlider2" name="slider" min="0" max="100" value="70" step="10" list="tickmarks" onchange="megaParsingFuckery.updateDEFPage()">
                            </div>
                        </div>


                        <div class="totalHealingBoxBreakdownRows" style="background-color: #ffffff1A">
                            <div class="totalHealingBoxHalfBreakdownRows hasHoverTooltip">
                                <div class="totalHealingHeader">Final Multi #1</div>
                                <div class="totalHealingValueBoss" id="finalMulti">x1</div>
                            </div>
                            <div class="totalHealingBoxHalfBreakdownRows hasHoverTooltip">
                                <div class="totalHealingHeader">Final Multi #2</div>
                                <div class="totalHealingValueBoss" id="finalMulti2">x1</div>
                            </div>
                            <div class="totalHealingBoxHalfBreakdownRows hasHoverTooltip">
                                <div class="totalHealingHeader">COMPARE Gain</div>
                                <div class="totalHealingValueBoss" id="gainValue2">689.841</div>
                            </div>
                        </div>
                        
                        <div class="statsBoxResultingText" id="resultingText"></div>
                </div>
            </div>

            <div class="statsPageParaHeader">LIMITS & FORMULA</div>
            <p class="formulaP">DEFValue = totalDEF * (1 - SHRED)</p>
            <p class="formulaP">DEFMulti = 1 - (DEFValue / (DEFValue + (AttackerLVL * 10 + 200)))</p>
            <div class="totalHealingBoxBreakdownRows" style="background-color: #ffffff1A">
                <div class="totalHealingBoxHalfBreakdownRows hasHoverTooltip">
                    <div class="totalHealingHeader">Lower Limit</div>
                    <div class="totalHealingValueBoss">N/A</div>
                </div>
                <div class="totalHealingBoxHalfBreakdownRows hasHoverTooltip">
                    <div class="totalHealingHeader">Upper Limit</div>
                    <div class="totalHealingValueBoss">x1 (100% SHRED)</div>
                </div>
                <div class="totalHealingBoxHalfBreakdownRows hasHoverTooltip">
                    <div class="totalHealingHeader">SHRED Limit</div>
                    <div class="totalHealingValueBoss">100%</div>
                </div>
            </div>
            <div class="statsPageParaBody">
                
            </div>

            <div class="statsPageParaHeader">UNIQUE SCALING</div>
            <div class="statsPageParaBody">
                Due to the formula structure, SHRED scales more efficiently the more you have of it which runs contrary to how most other benefits work.
                <br><span>Example</span>: on a LVL 95 enemy, the relative gain from 0% to 10% SHRED is ~5.6%, but the relative gain from 90% to 100% SHRED is 11.5%.
                <br><br>In addition, since enemies gain more DEF with higher levels, SHRED applied to higher LVL enemies will ALWAYS provide a higher relative gain vs lower LVL enemies.
                <br><span>Example</span>: on a LVL 95 enemy, the relative gain from 0% to 100% SHRED is 115%, but on a LVL 120 enemy that same jump gives a 140% relative gain.
                <br>This is because shred at 100% will always bring the final multi to x1, but at 0% shred, when enemies have higher DEF at higher LVLs, the starting multiplier will be lower than lower LVL enemies. So at higher LVLs, there is a wider gap to close, making SHRED more valuable than before.
            </div>
        `;

        readSelection("statsPageMainBox").innerHTML = resStringerMain;

        megaParsingFuckery.updateDEFPage();
    },
    updateDEFPage() {
        currentPage = "Defense";
        megaParsingFuckery.updateCurrentPage()
        const RESValuePre = +readSelection("enemyRESSlider").value;
        readSelection("enemyRESSlider").value = Math.floor(Math.max(60,Math.min(120,RESValuePre)));
        const RESValue = +readSelection("enemyRESSlider").value
        const enemyDEFBase = RESValue * 10 + 200;//RESValue being enemy level

        const PENValue = +readSelection("allyPENSlider").value;
        const PENValue2 = +readSelection("allyPENSlider2").value;

        // const isCompare = readSelection("use2ndValueCompare").checked;

        readSelection("enemyRESSliderValue").innerHTML = `(${enemyDEFBase.toLocaleString()} DEF)`;
        readSelection("allyPENSliderValue").innerHTML = PENValue + "%";
        readSelection("allyPENSliderValue2").innerHTML = PENValue2 + "%";

        
        const attackerDiffDEF = 80 * 10 + 200;//80 being the player's level here



        let enemyDEF = Math.max(0, enemyDEFBase * (1 - (PENValue/100)));//def shred will always be a positive value, just how I'd prefer it. So always - here
        let enemyDEF2 = Math.max(0, enemyDEFBase * (1 - (PENValue2/100)));
        
        let sumDEF = 1 - (enemyDEF / (enemyDEF + attackerDiffDEF));
        let sumDEF2 = 1 - (enemyDEF2 / (enemyDEF2 + attackerDiffDEF));

        const preValue = 1 - (RESValue/100);
        const finalMulti = sumDEF;
        const finalMulti2 = sumDEF2;

        // const gainValue = (finalMulti/preValue) - 1;
        const gainValue2 = (finalMulti2/preValue) - 1;
        const gainValueCompare = (finalMulti2/finalMulti) - 1;

        readSelection("finalMulti").innerHTML = "x" + (finalMulti).toLocaleString();
        // readSelection("gainValue").innerHTML = (gainValue * 100).toLocaleString() + "%";


        
        readSelection("finalMulti2").innerHTML = "x" + (finalMulti2).toLocaleString();
        readSelection("gainValue2").innerHTML = (gainValueCompare * 100).toLocaleString() + "%";

        // readSelection("allyPENSlider2").disabled = !isCompare;

        const isGain = gainValueCompare >= 0;
        readSelection("resultingText").innerHTML = `On a LVL <span>${RESValue.toLocaleString()}</span> enemy, going from <span>${PENValue.toLocaleString()}%</span> to <span>${PENValue2.toLocaleString()}%</span> SHRED, will result in a ${isGain ? `<span class="relativeGain">` : `<span class="relativeLoss">`}${(gainValueCompare * 100).toLocaleString()}% DMG ${isGain ? `GAIN` : `LOSS`}</span>`

    },
    createRESPage() {
        // <div class="imageRowStatisticImageBox"><img src="/HonkaiSR/icon/element/Physical.png" class="imageRowStatisticImage"></div>

        // <div class="imageRowStatisticBox1">
                
                
        //         <div class="statisticSettingsRow">
        //             <div class="statsRowName">Enemy RES %:&nbsp;<span id="enemyRESSliderValue">20%</span></div>
        //             <div class="statsRowToggle">
        //                 <input type="range" id="enemyRESSlider" name="slider" min="0" max="90" value="20" step="10" list="tickmarks" onchange="megaParsingFuckery.updateRESPage()">
        //             </div>
        //         </div>

        //         <div class="statisticSettingsRow">
        //             <div class="statsRowName">SUM PEN %:&nbsp;<span id="allyPENSliderValue">20%</span></div>
        //             <div class="statsRowToggle">
        //                 <input type="range" id="allyPENSlider" name="slider" min="0" max="190" value="20" step="10" list="tickmarks" onchange="megaParsingFuckery.updateRESPage()">
        //             </div>
        //         </div>

        //     </div>





        // <div class="characterDisplayElementWeaknessIconHolderBox">
        //     <img src="/HonkaiSR/icon/element/Fire.png" class="characterDisplayElementWeaknessIcon">
        //     <img src="/HonkaiSR/icon/element/Thunder.png" class="characterDisplayElementWeaknessIcon">
        //     <img src="/HonkaiSR/icon/element/Wind.png" class="characterDisplayElementWeaknessIcon">
        //     <div class="characterDisplayEnemyLineupBarHeader">Position</div>
        //     <div class="characterDisplayEnemyLineupBar">
        //         <div class="characterDisplayEnemyLineupCircleEmpty"></div>
        //         <div class="characterDisplayEnemyLineupCircleFill"></div>
        //         <div class="characterDisplayEnemyLineupCircleEmpty"></div>
        //     </div>
        // </div>
        // <div class="characterSearchButtonDMGDetailsTurnInspect clickable" id="" onclick="customMenu.createCharacterStatScreenBattleLogged(9)">Inspect</div>
        let resStringerMain = `
            <div class="actionDetailHeaderRow"><span class="detailHeaderName">RESISTANCE</span></div>



            <div class="actionDetailHeaderRowCharacterImageBox">
                <div class="actionDetailHeaderRowCharacterImageAndEnergyBox">
                    <img src="/HonkaiSR/misc/Glorpard.png" class="actionDetailHeaderRowEnemyImage">

                    
                    
                </div>
                <div class="actionDetailHeaderRowCharacterCustomValues">
                <div class="cyclesSettingsHeader">Stat Comparison</div>

                        

                        <div class="statisticSettingsRow">
                            <div class="statsRowName">Enemy RES %:&nbsp;<span id="enemyRESSliderValue">20%</span></div>
                            <div class="statsRowToggle">
                                <input type="range" id="enemyRESSlider" name="slider" min="0" max="90" value="20" step="10" list="tickmarks" onchange="megaParsingFuckery.updateRESPage()">
                            </div>
                        </div>

                        <div class="statisticSettingsRow">
                            <div class="statsRowName">SUM PEN %:&nbsp;<span id="allyPENSliderValue">0%</span></div>
                            <div class="statsRowToggle">
                                <input type="range" id="allyPENSlider" name="slider" min="0" max="190" value="0" step="10" list="tickmarks" onchange="megaParsingFuckery.updateRESPage()">
                            </div>
                        </div>

                        <div class="statisticSettingsRow">
                            <div class="statsRowName">COMPARE PEN %:&nbsp;<span id="allyPENSliderValue2">20%</span></div>
                            <div class="statsRowToggle">
                                <input type="range" id="allyPENSlider2" name="slider" min="0" max="190" value="20" step="10" list="tickmarks" onchange="megaParsingFuckery.updateRESPage()">
                            </div>
                        </div>


                        <div class="totalHealingBoxBreakdownRows" style="background-color: #ffffff1A">
                            <div class="totalHealingBoxHalfBreakdownRows hasHoverTooltip">
                                <div class="totalHealingHeader">Final Multi #1</div>
                                <div class="totalHealingValueBoss" id="finalMulti">x1</div>
                            </div>
                            <div class="totalHealingBoxHalfBreakdownRows hasHoverTooltip">
                                <div class="totalHealingHeader">Final Multi #2</div>
                                <div class="totalHealingValueBoss" id="finalMulti2">x1</div>
                            </div>
                            <div class="totalHealingBoxHalfBreakdownRows hasHoverTooltip">
                                <div class="totalHealingHeader">COMPARE Gain</div>
                                <div class="totalHealingValueBoss" id="gainValue2">689.841</div>
                            </div>
                        </div>
                        
                        <div class="statsBoxResultingText" id="resultingText"></div>
                </div>
            </div>

            <div class="statsPageParaHeader">LIMITS & FORMULA</div>
            <p class="formulaP">ResistanceMulti = 1 - (enemyRES - sumPEN)</p>
            <div class="totalHealingBoxBreakdownRows" style="background-color: #ffffff1A">
                <div class="totalHealingBoxHalfBreakdownRows hasHoverTooltip">
                    <div class="totalHealingHeader">Lower Limit</div>
                    <div class="totalHealingValueBoss">x0.1 (90% RES)</div>
                </div>
                <div class="totalHealingBoxHalfBreakdownRows hasHoverTooltip">
                    <div class="totalHealingHeader">Upper Limit</div>
                    <div class="totalHealingValueBoss" id="finalMulti2">x2 (-100% RES)</div>
                </div>
            </div>
            <div class="statsPageParaBody">
            Due to the 90% RES limit on enemies, and the 2x multi cap, this means the player at a MAXIMUM would never want to go beyond a 190% sum PEN/Reduction value.
            <br>Do note though that obviously based on enemy starting RES, the practical maximum is often much lower. (eg: 20% RES = 120% cap) 
            </div>

            <div class="statsPageParaHeader">UNDERSTANDING GAINS</div>
            <div class="statsPageParaBody">
            Framing is really fucking important for this stuff.<br><br>
            Say we have an enemy with 90% RES and you have 0% PEN. This means the enemy will apply a multiplier of x0.10 to your damage, reducing it to 1/10th of what it was. Now say that you get a measly 10% PEN which may not seem like much but now that 10% DMG you were doing is suddenly increased to 20% because the multiplier went from x0.10 to x0.20. Suddenly that 10% PEN is resulting in a 100% DMG increase since relative to your initial 10%, 20% is 100% more than 10%.
            <br>On the other end of the spectrum, say an enemy has 20% RES, and you have 100% PEN, meaning the multiplier is x1.8. Now say you gain 10% more PEN, which moves the multi from x1.8 to x1.9, meaning the relative DMG gain here is 1.9/1.8 = 5.55% gain, which on paper looks considerably worse than the prior scenario.
            <br><br>Both cases here are extremes to be certain, but in both cases we only gain 10% PEN and the results vary DRASTICALLY. You'll see a lot of people try to argue and say it's diminishing returns but really it's just about balancing multipliers.
            <br><br>Say your choices for a bonus are between 10% more pen when already at a x1.8 multi, or 10% DMG% when you have no DMG%. In this scenario 10% more PEN results in a ~5% relative dmg gain, but 10% DMG% when you have no DMG% yet is going to be exactly 10% more relative DMG. Because of this, again, framing is really fucking important. You can never compare JUST differences in RES because most often you're also comparing it against another bonus which changes the multiplier balancing.
            </div>
        `;

        readSelection("statsPageMainBox").innerHTML = resStringerMain;

        megaParsingFuckery.updateRESPage();
    },
    updateRESPage() {
        currentPage = "Resistance (RES)";
        megaParsingFuckery.updateCurrentPage()
        const RESValue = +readSelection("enemyRESSlider").value;
        const PENValue = +readSelection("allyPENSlider").value;
        const PENValue2 = +readSelection("allyPENSlider2").value;

        // const isCompare = readSelection("use2ndValueCompare").checked;

        readSelection("enemyRESSliderValue").innerHTML = RESValue + "%";
        readSelection("allyPENSliderValue").innerHTML = PENValue + "%";
        readSelection("allyPENSliderValue2").innerHTML = PENValue2 + "%";

        const preValue = 1 - (RESValue/100);
        const finalMulti = Math.max(0.1, Math.min(2, 1 - ((RESValue/100) - (PENValue/100))));
        const finalMulti2 = Math.max(0.1, Math.min(2, 1 - ((RESValue/100) - (PENValue2/100))));

        // const gainValue = (finalMulti/preValue) - 1;
        const gainValue2 = (finalMulti2/preValue) - 1;
        const gainValueCompare = (finalMulti2/finalMulti) - 1;

        readSelection("finalMulti").innerHTML = "x" + (finalMulti).toLocaleString();
        // readSelection("gainValue").innerHTML = (gainValue * 100).toLocaleString() + "%";


        
        readSelection("finalMulti2").innerHTML = "x" + (finalMulti2).toLocaleString();
        readSelection("gainValue2").innerHTML = (gainValueCompare * 100).toLocaleString() + "%";

        // readSelection("allyPENSlider2").disabled = !isCompare;

        const isGain = gainValueCompare >= 0;
        readSelection("resultingText").innerHTML = `On an enemy with <span>${RESValue.toLocaleString()}%</span> RES, going from <span>${PENValue.toLocaleString()}%</span> to <span>${PENValue2.toLocaleString()}%</span> PEN, will result in a ${isGain ? `<span class="relativeGain">` : `<span class="relativeLoss">`}${(gainValueCompare * 100).toLocaleString()}% DMG ${isGain ? `GAIN` : `LOSS`}</span>`

    },
    createVULNPage() {
        // <div class="imageRowStatisticImageBox"><img src="/HonkaiSR/icon/element/Physical.png" class="imageRowStatisticImage"></div>

        // <div class="imageRowStatisticBox1">
                
                
        //         <div class="statisticSettingsRow">
        //             <div class="statsRowName">Enemy RES %:&nbsp;<span id="enemyRESSliderValue">20%</span></div>
        //             <div class="statsRowToggle">
        //                 <input type="range" id="enemyRESSlider" name="slider" min="0" max="90" value="20" step="10" list="tickmarks" onchange="megaParsingFuckery.updateRESPage()">
        //             </div>
        //         </div>

        //         <div class="statisticSettingsRow">
        //             <div class="statsRowName">SUM PEN %:&nbsp;<span id="allyPENSliderValue">20%</span></div>
        //             <div class="statsRowToggle">
        //                 <input type="range" id="allyPENSlider" name="slider" min="0" max="190" value="20" step="10" list="tickmarks" onchange="megaParsingFuckery.updateRESPage()">
        //             </div>
        //         </div>

        //     </div>





        // <div class="characterDisplayElementWeaknessIconHolderBox">
        //     <img src="/HonkaiSR/icon/element/Fire.png" class="characterDisplayElementWeaknessIcon">
        //     <img src="/HonkaiSR/icon/element/Thunder.png" class="characterDisplayElementWeaknessIcon">
        //     <img src="/HonkaiSR/icon/element/Wind.png" class="characterDisplayElementWeaknessIcon">
        //     <div class="characterDisplayEnemyLineupBarHeader">Position</div>
        //     <div class="characterDisplayEnemyLineupBar">
        //         <div class="characterDisplayEnemyLineupCircleEmpty"></div>
        //         <div class="characterDisplayEnemyLineupCircleFill"></div>
        //         <div class="characterDisplayEnemyLineupCircleEmpty"></div>
        //     </div>
        // </div>
        // <div class="characterSearchButtonDMGDetailsTurnInspect clickable" id="" onclick="customMenu.createCharacterStatScreenBattleLogged(9)">Inspect</div>
        let resStringerMain = `
            <div class="actionDetailHeaderRow"><span class="detailHeaderName">VULNERABILITY</span></div>



            <div class="actionDetailHeaderRowCharacterImageBox">
                <div class="actionDetailHeaderRowCharacterImageAndEnergyBox">
                    <img src="/HonkaiSR/misc/Glorpard.png" class="actionDetailHeaderRowEnemyImage">

                    
                    
                </div>
                <div class="actionDetailHeaderRowCharacterCustomValues">
                <div class="cyclesSettingsHeader">Stat Comparison</div>


                        <div class="statisticSettingsRow">
                            <div class="statsRowName">SUM VULN %:&nbsp;<span id="allyPENSliderValue">0%</span></div>
                            <div class="statsRowToggle">
                                <input type="range" id="allyPENSlider" name="slider" min="0" max="250" value="20" step="10" list="tickmarks" onchange="megaParsingFuckery.updateVULNPage()">
                            </div>
                        </div>

                        <div class="statisticSettingsRow">
                            <div class="statsRowName">COMPARE VULN %:&nbsp;<span id="allyPENSliderValue2">20%</span></div>
                            <div class="statsRowToggle">
                                <input type="range" id="allyPENSlider2" name="slider" min="0" max="250" value="40" step="10" list="tickmarks" onchange="megaParsingFuckery.updateVULNPage()">
                            </div>
                        </div>


                        <div class="totalHealingBoxBreakdownRows" style="background-color: #ffffff1A">
                            <div class="totalHealingBoxHalfBreakdownRows hasHoverTooltip">
                                <div class="totalHealingHeader">Final Multi #1</div>
                                <div class="totalHealingValueBoss" id="finalMulti">x1</div>
                            </div>
                            <div class="totalHealingBoxHalfBreakdownRows hasHoverTooltip">
                                <div class="totalHealingHeader">Final Multi #2</div>
                                <div class="totalHealingValueBoss" id="finalMulti2">x1</div>
                            </div>
                            <div class="totalHealingBoxHalfBreakdownRows hasHoverTooltip">
                                <div class="totalHealingHeader">COMPARE Gain</div>
                                <div class="totalHealingValueBoss" id="gainValue2">689.841</div>
                            </div>
                        </div>
                        
                        <div class="statsBoxResultingText" id="resultingText"></div>
                </div>
            </div>

            <div class="statsPageParaHeader">LIMITS & FORMULA</div>
            <p>VulnMulti = 1 + sumVULN</p>
            <div class="totalHealingBoxBreakdownRows" style="background-color: #ffffff1A">
                <div class="totalHealingBoxHalfBreakdownRows hasHoverTooltip">
                    <div class="totalHealingHeader">Lower Limit</div>
                    <div class="totalHealingValueBoss">x1 (0% Vuln)</div>
                </div>
                <div class="totalHealingBoxHalfBreakdownRows hasHoverTooltip">
                    <div class="totalHealingHeader">Upper Limit</div>
                    <div class="totalHealingValueBoss">x3.5 (250% Vuln)</div>
                </div>
            </div>
            <div class="statsPageParaBody">
            Please note that this limit includes MOST Vuln effects that enemies can apply to themselves, like Zandar, where those bonuses will add together with player-sourced vuln to reach the cap.<br>
            250% may sound extreme, but it happens more than you think. 
            </div>
            <p class="formulaP">SPECIAL_EnemyVulnMulti = 1 + specialVulnEnemy</p>
            <div class="totalHealingBoxBreakdownRows" style="background-color: #ffffff1A">
                <div class="totalHealingBoxHalfBreakdownRows hasHoverTooltip">
                    <div class="totalHealingHeader">Lower Limit</div>
                    <div class="totalHealingValueBoss">x1 (0% Special)</div>
                </div>
                <div class="totalHealingBoxHalfBreakdownRows hasHoverTooltip">
                    <div class="totalHealingHeader">Upper Limit</div>
                    <div class="totalHealingValueBoss">${Infinity}</div>
                </div>
            </div>
            
            <div class="statsPageParaBody">
            ONLY 2 ENEMIES IN THE ENTIRE FUCKIN GAME CAN APPLY THIS DEBUFF TO THEMSELVES.<br>
            However when it IS applied, it's an entirely separate vulnerability multiplier that does NOT have a cap, and does NOT add into the standard vuln multi calculated above this one. The enemies that can apply it to themselves are Doomsday Beat, and the enemy Sunday boss but only the story fight.
            </div>

            <div class="statsPageParaHeader">UNDERSTANDING GAINS</div>
            <div class="statsPageParaBody">
            Framing is always going to be important, but admittedly for Vuln it's not nearly as drastic as RES or DEF.<br>
            Functionally vuln is just another DMG% multiplier, with a cap instead of being infinitely scalable.<br><br>

            As always though, context matters. If you already have 200% vuln(a x3.0 multiplier), and you have the choice between taking 10% more vuln, or 10% DMG% when you have 0 DMG%, then taking 10% more vuln will only result in a 3.1/3.0 = ~3% relative DMG gain, whereas taking the 10% DMG% when you have none yet is going to be an exact 10% relative DMG increase.<br>
            Big numbers go BRRRR but sometimes increasing the little number can matter a whole lot more.
            </div>
        `;

        readSelection("statsPageMainBox").innerHTML = resStringerMain;

        megaParsingFuckery.updateVULNPage();
    },
    updateVULNPage() {
        currentPage = "Vulnerability";
        megaParsingFuckery.updateCurrentPage()
        // const RESValue = +readSelection("enemyRESSlider").value;
        const PENValue = +readSelection("allyPENSlider").value;
        const PENValue2 = +readSelection("allyPENSlider2").value;

        // const isCompare = readSelection("use2ndValueCompare").checked;

        // readSelection("enemyRESSliderValue").innerHTML = RESValue + "%";
        readSelection("allyPENSliderValue").innerHTML = PENValue + "%";
        readSelection("allyPENSliderValue2").innerHTML = PENValue2 + "%";

        // const preValue = 1 - (RESValue/100);
        const finalMulti = Math.max(1, Math.min(3.5, 1 + (PENValue/100)));
        const finalMulti2 = Math.max(1, Math.min(3.5, 1 + (PENValue2/100)));

        // const gainValue = (finalMulti/preValue) - 1;
        // const gainValue2 = (finalMulti2/preValue) - 1;
        const gainValueCompare = (finalMulti2/finalMulti) - 1;

        readSelection("finalMulti").innerHTML = "x" + (finalMulti).toLocaleString();
        // readSelection("gainValue").innerHTML = (gainValue * 100).toLocaleString() + "%";


        
        readSelection("finalMulti2").innerHTML = "x" + (finalMulti2).toLocaleString();
        readSelection("gainValue2").innerHTML = (gainValueCompare * 100).toLocaleString() + "%";

        // readSelection("allyPENSlider2").disabled = !isCompare;

        const isGain = gainValueCompare >= 0;
        readSelection("resultingText").innerHTML = `Going from <span>${PENValue.toLocaleString()}%</span> to <span>${PENValue2.toLocaleString()}%</span> VULN, will result in a ${isGain ? `<span class="relativeGain">` : `<span class="relativeLoss">`}${(gainValueCompare * 100).toLocaleString()}% DMG ${isGain ? `GAIN` : `LOSS`}</span>`

    },
    // pageLoad(loadFile) {
    //     const bodyBox = readSelection("eventBodyMainBox");
    //     const isLightcone = compositeAbilityObject.isLightcone;
    //     const isRelic = compositeAbilityObject.isRelic;


    //     globalIsLightcone = isLightcone;
    //     globalIsRelic = isRelic;

    //     loadFile = loadFile ?? compositeAbilityObject.abilityList[compositeAbilityObject.abilityList.length >= 2 ? 1 : 0];
    //     let configAbility = compositeAbilityObject.abilityObject[loadFile];
        

    //     // console.log(loadFile)
        
    //     if ((!configAbility || location.hash) && !hasNoReader && !isBattleEvent) {
    //         let foundValidFile = false;
            
    //         if (location.hash) {
    //             const elemIDAfter = decodeURIComponent(location.hash.slice(1));
    //             // const elemIDAfter = location.hash.slice(1);
                
    //             // console.log(elemIDAfter,readSelection(decodeURIComponent((elemIDAfter))))
    //             if (!firstPageLoad && elemIDAfter && (elemIDAfter.includes("mod__") || elemIDAfter.includes("fun__"))) {
    //                 // readSelection(elemIDAfter)?.scrollIntoView({block:"center",behavior: "smooth"});

    //                 firstPageLoad = true;
                    
    //                 for (let loadFileEntry in compositeAbilityObject.abilityObject) {
    //                     let currentEntry = JSON.stringify(compositeAbilityObject.abilityObject[loadFileEntry]);

    //                     console.log(elemIDAfter,currentEntry.includes(elemIDAfter))
    //                     if (currentEntry.includes(elemIDAfter)) {
    //                         configAbility = compositeAbilityObject.abilityObject[loadFileEntry];
    //                         loadFile = loadFileEntry;
    //                         currentEntry = "";
    //                         foundValidFile = true;
    //                         break;
    //                     }
    //                     currentEntry = "";
    //                 }

    //                 // console.log(elemIDAfter)
    //                 // if (elemIDAfter.includes("mod__") || elemIDAfter.includes("fun__")) {
    //                 //     readSelection(elemIDAfter)?.scrollIntoView({block:"center",behavior: "smooth"});
    //                 // }
    //                 // else {
    //                 //     readSelection("fileSelectionSelector").value = `${currentCharFilePrefix}_${elemIDAfter}`;
    //                 //     megaParsingFuckery.renewFileSelected()
    //                 // }

    //                 if (!foundValidFile) {
    //                     alert(`Couldn't find a matching file under this entity, for the link you were provided.\n\nIf you believe this is in error and you didn't just fuck with the URL like an idiot, then join the discord and let Vash know.`)
    //                 }
    //             };
    //         }



    //         if ((!firstPageLoad || !foundValidFile) && !configAbility) {
    //             firstPageLoad = true;
    //             // loadFile = loadFile.replace(compositeAbilityObject.trimCharacterName + "_Servant",compositeAbilityObject.trimSummonName);
    //             loadFile = loadFile.replace(compositeAbilityObject.trimCharacterName,compositeAbilityObject.trimSummonName);
    //             // console.log(loadFile)
    //             // console.log(loadFile)
    //             configAbility = compositeAbilityObject.abilityObject[loadFile];
    //             // compositeAbilityObject.trimSummonName
    //         }

            
            

    //     }

    //     let initialCounter = 1;
    //     console.log(loadFile)
    //     let eventBodyString = hasNoReader ? "" : megaParsingFuckery.fillEventBodyBox(configAbility.parse,initialCounter);
    //     let eventBodyStringOnAdd = hasNoReader ? "" : megaParsingFuckery.fillEventBodyBox(configAbility.whenAdded,initialCounter);
    //     let eventBodyStringOnRemove = hasNoReader ? "" : megaParsingFuckery.fillEventBodyBox(configAbility.whenRemoved,initialCounter);
    //     let eventBodyStringOnAbort = hasNoReader ? "" : megaParsingFuckery.fillEventBodyBox(configAbility.onAbort,initialCounter);
    //     let eventBodyStringFunctions = hasNoReader ? "" : megaParsingFuckery.fillEventBodyBox(configAbility.functions,initialCounter);
        

    //     let referenceBodyString = configAbility?.references?.length ? megaParsingFuckery.fillEventBodyBox(configAbility.references,initialCounter) : null;
    //     currentCharFilePrefix = compositeAbilityObject.trimCharacterName;

        

    //     let referenceGlobalString = configAbility?.referencesGlobal?.length ? megaParsingFuckery.fillEventBodyBox(configAbility.referencesGlobal,initialCounter) : null;
    //     let referenceGlobalFunctionString = configAbility?.referencesGlobalFunctions?.length ? megaParsingFuckery.fillEventBodyBox(configAbility.referencesGlobalFunctions,initialCounter) : null;
        
        

    //     // "fileName": "Saber_Skill02",
    //     // "abilityType": "Skill",
    //     // "energy": 30,
    //     // "toughnessList": [
    //     //     20,
    //     //     0,
    //     //     10
    //     // ],
    //     // parse: []
    //     // references: []
    //     // desc: currentLCEntry.desc,
    //     // params: currentLCEntry.params,
    //     if (typeof compositeAbilityObject.fullCharacterName === "number") {isVaryingAbilityPage = true;}
    //     const isGlobalNoImage = !isBattleEvent && (typeof compositeAbilityObject.fullCharacterName === "number"
    //     || compositeAbilityObject.fullCharacterName.toLowerCase().includes("global")
    //     || compositeAbilityObject.fullCharacterName.toLowerCase().includes("enemyabilities"));

    //     globalIsNoImage = isGlobalNoImage;

    //     // console.log(compositeAbilityObject.fullCharacterName,characterRef.preview)
    //     const characterRef = characters[compositeAbilityObject.fullCharacterName];
    //     const lightconeRef = lightcones[compositeAbilityObject.fullCharacterName];
    //     const relicSetRef = relicSets[compositeAbilityObject.fullCharacterName];
    //     const battleEventRef = battleEvents[compositeAbilityObject.fullCharacterName];

    //     // console.log(compositeAbilityObject.fullCharacterName,characterRef,characters)

    //     const startingKeys = [
    //         // {leftHand: "File", keyValue: "fileName"},
    //         {leftHand: "Ability", keyValue: "abilityType"},
    //         {leftHand: "Skill Trigger", keyValue: "skillTrigger"},
    //         {leftHand: "Energy", keyValue: "energy"},
            
            
    //         // {leftHand: "Toughness", keyValue: "toughnessList"},
    //     ];

    //     if (!isGlobalNoImage) {
    //         // console.log(readSelection("libraryCharacterHeaderPreview"))
    //         readSelection("libraryCharacterHeaderPreview").src = `/HonkaiSR/${isRelic ? relicSetRef.icon : (isLightcone ? lightconeRef.preview : (isBattleEvent ? `BEicons/${battleEventRef.icon}` : characterRef.preview))}`;
    //     }


    //     // ${!isGlobalNoImage ? `<div class="customMenuResultRowIcon">
    //     //     <img src="/HonkaiSR/${isRelic ? relicSetRef.icon : (isLightcone ? lightconeRef.preview : characterRef.preview)}" class="${isRelic ? "eventCharacterFileIconRelic" : "eventCharacterFileIcon"}" style="border: 2px solid #d2ae73;">
    //     // </div>` : ""}
    //     let startingString = `
            
            
    //         <div class="eventCharacterFileInfoBox">
            
    //         <div class="abilitySelectorFloaterBox">
    //             <div class="abilitySelectorFloaterBoxName">Ability Selection</div>
    //             <select class="selectorWidthRestriction" id="fileSelectionSelector" onchange="megaParsingFuckery.renewFileSelected()">
    //         </div>
            
    //         `;
            

    //     let optionsString = "";

    //     for (let fileEntry of compositeAbilityObject.abilityList) {
    //         optionsString += `<option value="${fileEntry}" ${fileEntry === loadFile ? "selected" : ""}>${fileEntry}</option>`
    //     }
    //     optionsString += "</select></div>"
    //     startingString += optionsString;



    //     let rowAlternating = 1;
    //     startingString += `<div class="${globalIsLightcone || globalIsRelic ? "energyAndToughnessRowHolderItems" : "energyAndToughnessRowHolder"}">`;
    //     if (!isLightcone && !hasNoReader) {


    //         const propertyDisplayTemplates = {
    //             energy(keyValue,configAbility) {
    //                 return `<div class="imageRowStatisticBoxWithIcon">
    //                     <img src="/HonkaiSR/icon/property/IconEnergyRecovery.png" class="characterDisplayLogStatIcon"></img>
    //                     <div class="imageRowStatisticNameBoxDETAILSWithIcon">${keyValue}</div>
    //                 </div>`;
    //             },
    //             skillTrigger(keyValue,configAbility) {
    //                 return `<div class="imageRowStatisticBoxWithIcon">
    //                     <div class="imageRowStatisticNameBoxDETAILSWithIcon">${keyValue}${configAbility.abilityType ? `[${configAbility.abilityType}]` : ""}</div>
    //                 </div>`;
    //             },
    //             // abilityType(keyValue) {
    //             //     return `<div class="imageRowStatisticBoxWithIcon">
    //             //         <div class="imageRowStatisticNameBoxDETAILSWithIcon">${keyValue}</div>
    //             //     </div>`;
    //             // },
    //         }
            
    //         for (let entry of startingKeys) {
    //             if (configAbility[entry.keyValue] == null) {

    //                 // loadFile = loadFile ?? compositeAbilityObject.abilityList[compositeAbilityObject.abilityList.length >= 2 ? 1 : 0];

    //                 for (let findAbilityEntry of compositeAbilityObject.abilityList) {
    //                     const testCurrentEntry = compositeAbilityObject.abilityObject[findAbilityEntry];
    //                     if (!testCurrentEntry.childAbilityList) {continue;}

    //                     const newSet = new Set(testCurrentEntry.childAbilityList)
    //                     if (newSet.has(loadFile)) {
    //                         configAbility["energy"] = testCurrentEntry["energy"];
    //                         configAbility["abilityType"] = testCurrentEntry["abilityType"];
    //                         configAbility["skillTrigger"] = testCurrentEntry["skillTrigger"];
    //                         configAbility.toughnessList = testCurrentEntry.toughnessList;
    //                         break;
    //                     }
    //                 }

    //                 // childAbilityList


    //                 continue;
    //             }
    //             if (entry.keyValue === "abilityType") {continue;}
    //             // startingString += `<div class="">${configAbility[entry]}</div>`;

    //             // <div class="imageRowStatisticImageBox"><img src="${currentKey.icon}" class="${isStatMenuCreation ? "imageRowStatisticImageStatMenu" : "imageRowStatisticImage"}"/></div>
    //             // ${subRolls && estRolls ? `<div class="imageRowStatisticStatBoxRollsEst">${estRolls}</div>` : ""}


    //             if (propertyDisplayTemplates[entry.keyValue]) {startingString += propertyDisplayTemplates[entry.keyValue](configAbility[entry.keyValue],configAbility);}
    //             else {
    //                 startingString +=  `<div class="imageRowStatisticBox${(globalIsLightcone || globalIsRelic) ? rowAlternating : 0}DETAILS">
    //                     <div class="imageRowStatisticNameBoxDETAILS">${entry.leftHand}</div>
    //                     <div class="imageRowStatisticStatBoxDETAILS">${configAbility[entry.keyValue]}</div>
    //                 </div>`;
    //             }

    //             if (rowAlternating === 2) {rowAlternating = 1;}
    //             else {rowAlternating++;}
    //         }
    //     }


    //     let toughnessRowString = "";
    //     if (configAbility?.toughnessList && !hasNoReader) {
    //         const toughnessIndexConversion = {
    //             0: "ST",
    //             1: "AOE",
    //             2: "Blast"
    //         }

    //         const check1 = configAbility.toughnessList[0] != 0;
    //         const check2 = configAbility.toughnessList[1] != 0;
    //         const check3 = configAbility.toughnessList[2] != 0;
    //         const hasActualValues = check1 || check2 || check3;

            

    //         if (hasActualValues) {
    //             toughnessRowString += `<img src="/HonkaiSR/icon/property/IconBreakUp.png" class="characterDisplayLogStatIconCenter"></img>`;

    //             for (let i=0;i<3;i++) {
    //                 if (configAbility.toughnessList[i] === 0) {continue;}
    //                 toughnessRowString += `<div class="toughnessTableRowItemBox">
    //                     <div class="toughnessTableRowItemHeader">${toughnessIndexConversion[i]}</div>
    //                     <div class="toughnessTableRowItemValue">${+(configAbility.toughnessList[i]).toFixed(5)}</div>
    //                 </div>`;
    //             }
    //         }
    //     }

    //     // <div class="toughnessTableRowHeader">Toughness</div>
    //     let toughnessString = !isLightcone && toughnessRowString != "" ? `<div class="toughnessTableRowBox">
            

    //         <div class="toughnessTableRowTableRow">
    //             ${toughnessRowString}
    //         </div>
        
    //     </div>` : "";

    //     let statRowString1 = "";
    //     let statRowString2 = "";

    //     let lightconeStatRow = "";

    //     let paramsStringer = "";

    //     console.log(compositeAbilityObject.fixedStats)
    //     if (isRelic) {
    //         if (compositeAbilityObject.fixedStats[2]) {
    //             const menuBoxDisplayOrder = Object.keys(compositeAbilityObject.fixedStats[2]);
    //             statRowString1 = customHTML.createAlternatingStatRows(menuBoxDisplayOrder,compositeAbilityObject.fixedStats[2]);
    //         }
    //         if (compositeAbilityObject.fixedStats[4]) {
    //             const menuBoxDisplayOrder = Object.keys(compositeAbilityObject.fixedStats[4]);
    //             statRowString2 = customHTML.createAlternatingStatRows(menuBoxDisplayOrder,compositeAbilityObject.fixedStats[4]);
    //         }
    //     }
    //     if (isLightcone && !isRelic && compositeAbilityObject.fixedStats && compositeAbilityObject.fixedStats[currentLCSuperimposition]) {
    //         const menuBoxDisplayOrder = Object.keys(compositeAbilityObject.fixedStats[currentLCSuperimposition]);
    //         lightconeStatRow = customHTML.createAlternatingStatRows(menuBoxDisplayOrder,compositeAbilityObject.fixedStats[currentLCSuperimposition]);


    //         const paramsCheck = lightconeRef?.params[currentLCSuperimposition-1];
    //         if (paramsCheck?.length) {

    //             let paramString = "";
    //             let paramCounter = 0;
    //             for (let paramEntry of paramsCheck) {
    //                 // console.log(paramEntry)
    //                 paramString += `${paramEntry}${paramCounter != paramsCheck.length-1 ? ", " : ""}`;
    //                 paramCounter++;
    //             }

    //             paramsStringer += `
    //                 <div class="actionDetailBody">
    //                     <div class="rotationConditionOperatorHeaderInlineParams">Params: [${paramString}]</div>
    //                 </div>
    //             `
    //         }
    //     }




        

        

    //     if (isLightcone) {
    //         toughnessString += `
    //         ${!isRelic ? `<div class="customMenuSearchNote" id="customMenuSearchNote">Changing superimposition won't change the events, only the description</div>
    //         <div class="superimpositionHolderbox">
    //             <div class="superimpositionButton clickable" id="superimpositionButton1" onclick="megaParsingFuckery.updateSuperimposition(1)" style="${currentLCSuperimposition === 1 ? "background-color: rgb(225, 225, 228); color: black;" : "background-color: transparent; color: rgb(225, 225, 228);"}">1</div>
    //             <div class="superimpositionButton clickable" id="superimpositionButton2" onclick="megaParsingFuckery.updateSuperimposition(2)" style="${currentLCSuperimposition === 2 ? "background-color: rgb(225, 225, 228); color: black;" : "background-color: transparent; color: rgb(225, 225, 228);"}">2</div>
    //             <div class="superimpositionButton clickable" id="superimpositionButton3" onclick="megaParsingFuckery.updateSuperimposition(3)" style="${currentLCSuperimposition === 3 ? "background-color: rgb(225, 225, 228); color: black;" : "background-color: transparent; color: rgb(225, 225, 228);"}">3</div>
    //             <div class="superimpositionButton clickable" id="superimpositionButton4" onclick="megaParsingFuckery.updateSuperimposition(4)" style="${currentLCSuperimposition === 4 ? "background-color: rgb(225, 225, 228); color: black;" : "background-color: transparent; color: rgb(225, 225, 228);"}">4</div>
    //             <div class="superimpositionButton clickable" id="superimpositionButton5" onclick="megaParsingFuckery.updateSuperimposition(5)" style="${currentLCSuperimposition === 5 ? "background-color: rgb(225, 225, 228); color: black;" : "background-color: transparent; color: rgb(225, 225, 228);"}">5</div>
    //         </div>` : ""}

            
            
    //         ${isLightcone && !isRelic ? `
    //         <div class="characterDisplayPathAndNameBox" style="margin-top: 10px;">
    //             <div class="characterDisplayPathNameBox" id="lightconeDisplaySkillName">Base Stats</div>
    //         </div>
    //         <div class="characterDisplayStatsBasic" id="lightconeDisplayStatsBasic">
    //             <div class="imageRowStatisticBox1">
    //                 <div class="imageRowStatisticImageBox"><img src="/HonkaiSR/icon/property/IconMaxHP.png" class="imageRowStatisticImage"></div>
    //                 <div class="imageRowStatisticNameBox">HP</div>
    //                 <div class="imageRowStatisticStatBox">${lightconeRef.baseStats.HPBase.toLocaleString()}</div>
                    
    //             </div>
                
    //             <div class="imageRowStatisticBox2">
    //                 <div class="imageRowStatisticImageBox"><img src="/HonkaiSR/icon/property/IconAttack.png" class="imageRowStatisticImage"></div>
    //                 <div class="imageRowStatisticNameBox">ATK</div>
    //                 <div class="imageRowStatisticStatBox">${lightconeRef.baseStats.ATKBase.toLocaleString()}</div>
                    
    //             </div>
                
    //             <div class="imageRowStatisticBox1">
    //                 <div class="imageRowStatisticImageBox"><img src="/HonkaiSR/icon/property/IconDefence.png" class="imageRowStatisticImage"></div>
    //                 <div class="imageRowStatisticNameBox">DEF</div>
    //                 <div class="imageRowStatisticStatBox">${lightconeRef.baseStats.DEFBase.toLocaleString()}</div>
                    
    //             </div>
    //         </div>` : ""}
            
    //         ${lightconeStatRow ? `<div class="characterDisplayPathAndNameBox" style="margin-top: 10px;">
    //             <div class="characterDisplayPathNameBox">Menu Stats:</div>
    //         </div>` + lightconeStatRow : ""}
    //         ${isRelic ? `
    //             ${statRowString1 ? `<div class="characterDisplayPathAndNameBox" style="margin-top: 10px;">
    //                 <div class="characterDisplayPathNameBox">2-Piece Stats:</div>
    //             </div>` + statRowString1 : ""}
                

    //             ${statRowString2 ? `<div class="characterDisplayPathAndNameBox" style="margin-top: 10px;">
    //                 <div class="characterDisplayPathNameBox">4-Piece Stats:</div>
    //             </div>` + statRowString2 : ""}

    //             <div class="statFiltersRowHeader"></div>
    //             <div class="rightDescriptionBox" id="lightconeSkillDescription"><span class="descriptionNumberColor">2pc:</span> ${pagePopulation.cleanDescription(relicSetRef.params[0],relicSetRef.desc[0])}</div>
    //             ${relicSetRef.params[1] != undefined && relicSetRef.desc[1] != undefined ? `
    //             <div class="rightDescriptionBox" id="lightconeSkillDescription"><span class="descriptionNumberColor">4pc:</span> ${pagePopulation.cleanDescription(relicSetRef.params[1],relicSetRef.desc[1])}</div>` : ""}
    //             ` 
    //             : `<div class="statFiltersRowHeader">${lightconeRef.skillName}</div>
    //             <div class="rightDescriptionBox" id="lightconeSkillDescription">${pagePopulation.cleanDescription(lightconeRef.params[currentLCSuperimposition-1],lightconeRef.desc)}</div>
    //             ${paramsStringer}`}
    //         `
    //     }
    //     startingString += toughnessString + ``;
    //     startingString += `</div>`



    //     // <details class="rotationsPermaConditionsExpand" open="">
    //     //     <summary class="rotationConditionOperatorHeaderAbilityTriggerConditionHeader clickable">
    //     //         <div class="rotationConditionOperatorHeaderCondition">${parseRef.name}</div>
    //     //         ${returnString}
    //     //     </summary>

    //     //     <div class="rotationConditionOperatorBoxMain">
    //     //         ${hasParse ? `<div class="rotationConditionOperatorHeaderConditionTHEN">THEN</div>
    //     //         <div class="rotationsSectionRowHolder${initialCounter%2 === 0 ? 2 : 1}">
    //     //             ${parseString}
    //     //         </div>` : ""}
    //     //         ${hasRef ? `<div class="rotationConditionOperatorHeaderConditionELSE">ELSE</div>
    //     //         <div class="rotationsSectionRowHolder${initialCounter%2 === 0 ? 2 : 1}">
    //     //             ${refString}
    //     //         </div>` : ""}
    //     //     </div>
    //     // </details>


    //     //TODO: add back in later
    //     // ${startingString}

    //     readSelection("eventReaderControlsBox").innerHTML = startingString;

    //     const mainAbilityString = `
    //     <div class="eventBodyScrollerMain">
    //         <details class="rotationsPermaConditionsExpand" open="">
    //             <summary class="rotationConditionOperatorHeaderAbilityTriggerConditionHeader clickable">
    //                 <div class="rotationConditionOperatorHeaderCondition">ABILITY LOG</div>
    //             </summary>
    //             ${eventBodyString}
    //             ${hasNoReader ? `<div class="customMenuSearchNote">No events to read. Either this is a 4.0 entity and I can't get their eventreader data yet, or it's an error.<br><br>If you believe this to be an error, let me know in the discord.</div>` : ""}
    //         </details>
    //         ${eventBodyStringOnAdd ? `<details class="rotationsPermaConditionsExpand" open="">
    //             <summary class="rotationConditionOperatorHeaderAbilityTriggerConditionHeader clickable">
    //                 <div class="rotationConditionOperatorHeaderCondition">ADDED LOG</div>
    //             </summary>
    //             ${eventBodyStringOnAdd}
    //         </details>` : ""}
    //         ${eventBodyStringOnRemove ? `<details class="rotationsPermaConditionsExpand" open="">
    //             <summary class="rotationConditionOperatorHeaderAbilityTriggerConditionHeader clickable">
    //                 <div class="rotationConditionOperatorHeaderCondition">REMOVED LOG</div>
    //             </summary>
    //             ${eventBodyStringOnRemove}
    //         </details>` : ""}

            
    //         ${eventBodyStringOnAbort ? `<details class="rotationsPermaConditionsExpand" open="">
    //             <summary class="rotationConditionOperatorHeaderAbilityTriggerConditionHeader clickable">
    //                 <div class="rotationConditionOperatorHeaderCondition">ON ABILITY ABORT</div>
    //             </summary>
    //             ${eventBodyStringOnAbort}
    //         </details>` : ""}

            
    //         ${referenceBodyString ? `<details class="rotationsPermaConditionsExpand" open="">
    //             <summary class="rotationConditionOperatorHeaderAbilityTriggerConditionHeader clickable">
    //                 <div class="rotationConditionOperatorHeaderCondition">MODIFIER LOG</div>
    //             </summary>
    //             ${referenceBodyString}
    //         </details>` : ""}
    //         ${eventBodyStringFunctions ? `<details class="rotationsPermaConditionsExpand" open="">
    //             <summary class="rotationConditionOperatorHeaderAbilityTriggerConditionHeader clickable">
    //                 <div class="rotationConditionOperatorHeaderCondition">ABILITY FUNCTIONS</div>
    //             </summary>
    //             ${eventBodyStringFunctions}
    //         </details>` : ""}
    //         ${referenceGlobalString ? `<details class="rotationsPermaConditionsExpand" open="">
    //             <summary class="rotationConditionOperatorHeaderAbilityTriggerConditionHeader clickable">
    //                 <div class="rotationConditionOperatorHeaderCondition">GLOBAL MODIFERS</div>
    //             </summary>
    //             ${referenceGlobalString}
    //         </details>` : ""}
    //         ${referenceGlobalFunctionString ? `<details class="rotationsPermaConditionsExpand" open="">
    //             <summary class="rotationConditionOperatorHeaderAbilityTriggerConditionHeader clickable">
    //                 <div class="rotationConditionOperatorHeaderCondition">GLOBAL FUNCTIONS</div>
    //             </summary>
    //             ${referenceGlobalFunctionString}
    //         </details>` : ""}
    //     </div>
    //     `;

        

    //     bodyBox.innerHTML = mainAbilityString;
    //     megaParsingFuckery.populateLinkedEntriesGlobal("gModGreen")
    //     megaParsingFuckery.populateLinkedEntriesGlobal("gTempYellow")

    //     // if (isLightcone) {readSelection("lightconeSkillDescription").innerHTML = pagePopulation.cleanDescription(lightconeRef.params[currentLCSuperimposition],lightconeRef.desc);}
    // },
    // ...megaParsingFuckeryPain
}

megaParsingFuckery.pageLoad();







// userTriggers.updateCharacterUI();

// if (!isBattleEvent) {
//     customHTML.establishZoomableTraces();
// }

// customHTML.establishMobileSideScrollerMenu();
// userTriggers.updateMainMenuDisplayed(1);

// if ((hasNoReader && entityPageType === "char") || isBattleEvent) {
//     userTriggers.updateMainMenuDisplayed(2);
// }

// const value = decodeURIComponent(window.location.hash.slice(1));

// megaParsingFuckery.renewFileSelected()
// fileSelectionSelector

if (location.hash && isVaryingAbilityPage) {
    const elemIDAfter = decodeURIComponent(location.hash.slice(1));
    // const elemIDAfter = location.hash.slice(1);

    // console.log(elemIDAfter,readSelection(decodeURIComponent((elemIDAfter))))
    if (elemIDAfter) {
        // readSelection(elemIDAfter)?.scrollIntoView({block:"center",behavior: "smooth"});
        console.log(elemIDAfter)
        if (elemIDAfter.includes("mod__") || elemIDAfter.includes("fun__")) {
            readSelection(elemIDAfter)?.scrollIntoView({block:"center",behavior: "smooth"});
        }
        else {
            readSelection("fileSelectionSelector").value = `${currentCharFilePrefix}_${elemIDAfter}`;
            megaParsingFuckery.renewFileSelected()
        }


        
    
    
    
    };
}
else if (location.hash) {
    const elemIDAfter = decodeURIComponent(location.hash.slice(1));
    // const elemIDAfter = location.hash.slice(1);

    // console.log(elemIDAfter,readSelection(decodeURIComponent((elemIDAfter))))
    if (elemIDAfter) {readSelection(elemIDAfter)?.scrollIntoView({block:"center",behavior: "smooth"});};
}





