

let currentActiveCycle = null;
let currentFloor = null;
let currentFilter = "BigBoss";


const endgameModeDisplay = {
    pageloadEntry() {

        // if (stageTypers === "anom") {

        //     mocSchedule.reverse();
        //     const newActiveRange = mocSchedule[mocSchedule.length-1];
        //     currentActiveCycle = newActiveRange.id;
        //     currentFloor = 4;
        //     endgameModeDisplay.setEndgameDisplay(newActiveRange.id,newActiveRange);

        //     return 
        // }

        // mocSchedule.sort((a, b) => {
        //     const aDate = parseLocalDate(a.start);
        //     const bDate = parseLocalDate(b.start);
        //     return aDate - bDate;
        // });
        
        // // for (let entry of mocSchedule) {
        // //     console.log(entry.realName);
        // // }
        
        
        // const today = todayLocal();
        // const activeRange = mocSchedule.find(r => {
        //     const start = parseLocalDate(r.start);
        //     const end   = parseLocalDate(r.end);
        //     return today >= start && today <= end;
        // });
        
        // // console.log(activeRange)

        // currentActiveCycle = activeRange.id;

        
        
        endgameModeDisplay.setEndgameDisplay();
        
    },
    linkToEnemy() {
        alert("Enemy linking will be set up in a day or two.\n\nForgive me for setting up the onclick early.")
    },
    setActivityBuffDisplay(display) {
        // activityBuffDisplay2Button${selectorCounter2}
        // activityBuffDisplay2Box${selectorCounter2}

        
        const entriesArray = ["BigBoss","LittleBoss","Elite","Minion","MinionLv2"]

        for (let i=1;i<=4;i++) {
            readSelection(`activityBuffDisplayButton${i}`).style.backgroundColor = i === display ? "rgb(225, 225, 228)" : "rgba(0, 0, 0, 0.562)";
            readSelection(`activityBuffDisplayButton${i}`).style.color = i === display ? "black" : "#e1e1e4";
        }

        currentFilter = entriesArray[display-1];
        endgameModeDisplay.setEndgameDisplay();

        // style="background-color: rgb(225, 225, 228); color: black;"

        // background-color: rgba(0, 0, 0, 0.562);
        // color: #e1e1e4;
    },
    setEndgameDisplay() {
        
        // const bgImagePath = `activityBG/ChallengeRogueTournBanner4.png`;
        const bgImagePath = `activityBG/RogueTournBanner.png`;

        // RogueTournBanner
        // RogueBanner
        // MainStorySecondWorldBanner
        // MainStoryFirstWorldBanner
        // RoguePanelFormalBanner
        
        readSelection("mainGridRow").style.background = `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),url('/HonkaiSR/${bgImagePath}') center top / cover`;
        readSelection("pureFictionBannerImage").src = `/HonkaiSR/${bgImagePath}`;


        // let currentUserInput = readSelection("statFilterBoxInput").value;

        // erosionModsData
        function fuzzyMatch(input, itemParam1, itemParam2,desc,aim) {
            if (typeof itemParam1 != "string") {itemParam1 = itemParam1.toString()}

            const search = input.toLowerCase();
            return itemParam1.toLowerCase().includes(search) 
            // || itemParam2.toLowerCase().includes(search) 
            // || desc.toLowerCase().includes(search)
            // || aim.toLowerCase().includes(search)
            
            
            ;
        }


        const currentLeaderboard = weaknessTracking[currentFilter];
        // sizeLeaderboardArray

        

        let sizeLeaderboardArray = [];

        for (let weaknessEntry in currentLeaderboard) {
            sizeLeaderboardArray.push({
                elem: weaknessEntry,
                count: currentLeaderboard[weaknessEntry]
            })
        }



        // mocEachSide1
        // mocEachSide2


        sizeLeaderboardArray.sort((a, b) => b.count - a.count);
        const sizeLength = sizeLeaderboardArray.length;

        const biggestSize = sizeLeaderboardArray[0].count;
        const smallestSize = sizeLeaderboardArray[sizeLength-1].count;
        const fullSizeRange = biggestSize-smallestSize;

        
        // console.log("test",sizeLeaderboardArray,currentLeaderboard,weaknessTracking)


        let sizeString = ``;
        
        let rankCounter = 1;
        for (let sizeEntry of sizeLeaderboardArray) {

            let finalImage = null;
            let barType = null;
            let circleType = null;
            let linkBase = "/HonkaiSR/TheLibrary/AbilityConfigs/"
            const entryTypers = sizeEntry.entryType;

            // if (currentFilter != entryTypers) {continue;}

            
            if (entryTypers === "char") {
                barType = "turnStarterBarAlly";
                circleType = "weirdSideSemiCircleThingerAlly";
                linkBase += `${sizeEntry.trimCharacterName}/`;
            }
            else if (entryTypers === "enemy") {
                barType = "turnStarterBarEnemy";
                circleType = "weirdSideSemiCircleThingerEnemy";
                linkBase = `/HonkaiSR/TheLibrary/EnemyConfigs/${sizeEntry.enemyID}/`;
            }
            else {
                barType = "turnStarterBarMiniActionComplexity";
                circleType = "weirdSideSemiCircleThinger";
                linkBase += `${sizeEntry.trimCharacterName}/`;
            }

            if (sizeEntry.entryType === "char" || sizeEntry.entryType === "lc" || sizeEntry.entryType === "relic") {
                finalImage = `/HonkaiSR/${sizeEntry.entryIcon}`
            }
            else if (sizeEntry.entryType === "enemy") {finalImage = `/HonkaiSR/enemiesSmol/${enemyImages[sizeEntry.enemyID].replace("enemies/","")}`}

            // enemyImages



            // turnStarterBarAlly, .turnStarterBarEnemy, .turnStarterBarUltimate, .turnStarterBarMiniAction, .turnStarterBarMiniActionEnemy

            const currentSize = sizeEntry.sizeCount;
            const currentSizeFinal = 100 * (sizeEntry.count - (smallestSize)) / fullSizeRange;//trimCharacterName
            // console.log(currentSizeFinal,sizeEntry.count,smallestSize,fullSizeRange)
            rankCounter++
            // if (!fuzzyMatch(currentUserInput,sizeEntry.entryName ?? sizeEntry.enemyID ?? "")) {continue;}
            

            
            // style="background: linear-gradient(200deg, rgb(13, 57, 59), transparent);"

            // turnOrderDisplayPreviewGREY
            sizeString += `<a class="turnStarterBarMiniActionComplexity clickable hoverOpacity">
                    <div class="weirdSideSemiCircleThinger"></div>
                    <img src="/HonkaiSR/icon/element/${sizeEntry.elem}.png" class="turnOrderDisplayPreview">
                    <div class="turnOrderAVBox">${rankCounter-1}</div>
                    <div class="complexityHolderBoxDisplay">
                        <div class="rowSummaryDMGNameAndPercent">${sizeEntry.elem}:&nbsp;<span class="smallFont">${(sizeEntry.count).toLocaleString()} enemies</span></div>
                        
                        <div class="actionDetailBodyRowSummaryDMG">
                            <div class="rowSummaryDMGBarDynamic" style="width:${Math.max(currentSizeFinal,1)}%;background-color: #6e2020"></div>
                            
                        </div>
                        
                    </div>
                </a>`;
            
                // <div class="turnOrderAVBox">37.5</div>
        }
        readSelection("mocEachSide1").innerHTML = sizeString;
        sizeString = null;


        // sizeLeaderboardArray.sort((a, b) => b.lineCount - a.lineCount);
        // const biggestSize2 = sizeLeaderboardArray[0].lineCount;
        // const smallestSize2 = sizeLeaderboardArray[sizeLength-1].lineCount;
        // const fullSizeRange2 = biggestSize2-smallestSize2;


        readSelection("mocEachSide2").style.display = "none";
        linesStringer = null;
    },
}



endgameModeDisplay.pageloadEntry();



// const difficultyList = guideObject.difficultyList;
                // selectorCounter = 3;
                // listStringer = "";
                // for (let traceEntry of difficultyList) {
                //     // let listStringer = "";
                //     // selectorCounter++;
                //     const currentTraceRef = traceEntry;
                //     // if (!currentTraceRef.desc && !currentTraceRef.skillRef) {continue}
        
                //     // const traceIcon = currentTraceRef.icon;
                //     const currentTraceRefSkill = currentTraceRef.skillRef;
                //     const skillSlot = currentTraceRefSkill?.skillSlot;
        
        
                //     const skillLevel = userTriggers.levelFloors[skillSlot];
        
                //     let entryString = "";
        
        
        
                //     entryString += `
                //     <div class="rotationsSectionRowHolder2Overview">
                //     <div class="eidolonRowBoxHolder">
                        
                //         <div class="rightDescriptionBoxEidolons smallFont">
                            
                //     `;
                //     // ${entry.desc}
        
        
        
                    
        
        
                //     // "skillRef": {
                //     //     "skillName": "I Choose You!",
                //     //     "skillSlot": "Skill"
                //     // }
        
                //     // ${pagePopulation.cleanDescription(lightconeRef.params[currentLCSuperimposition-1],lightconeRef.desc)}
                //     entryString += `<div class="rotationsSectionRowHolder1Overview">
                //         <div class="actionDetailBody">
                //             <div class="actionDetailBody2Description">
                //                 ${pagePopulation.cleanDescription(currentTraceRef.params ?? [],currentTraceRef.desc)}
                //             </div>
                //         </div>
                //     `
    
                //     if (currentTraceRef.params?.length) {
    
                //         let paramString = "";
                //         let paramCounter = 0;
                //         for (let paramEntry of currentTraceRef.params) {
                //             paramString += `${paramEntry}${paramCounter != currentTraceRef.params.length-1 ? ", " : ""}`;
                //             paramCounter++;
                //         }
    
                //         entryString += `
                //             <div class="actionDetailBody">
                //                 <div class="rotationConditionOperatorHeaderInlineParams">Parameters: [${paramString}]</div>
                //             </div>
                //         `
                //     }
    
                //     if (currentTraceRef.extraEffects && Object.keys(currentTraceRef.extraEffects).length) {
    
                //         let paramString = "";
                //         let paramCounter = 0;
                //         for (let paramEntry in currentTraceRef.extraEffects) {
                //             const currentValue = currentTraceRef.extraEffects[paramEntry];
                //             const numChecker = typeof currentValue === "number";
                //             const currentEffect = numChecker ? modifiersExtraEffects[currentValue] : currentValue;
                            
                //             // if (typeof currentEffect === "number") {
                //             //     modifiersExtraEffects
                //             // }
                //             // else {
    
                //                 paramString += `<div class="rotationsSectionRowHolder3Overview">
                //                     <div class="actionDetailBody">
                //                         <div class="rotationConditionOperatorHeaderInlineParamsExtraEffectHeader">${numChecker ? modifiersExtraEffects[currentValue].name : paramEntry}</div>
                //                     </div>
                //                     <div class="actionDetailBody">
                //                         <div class="actionDetailBody3DescriptionExtra">
                //                             ${pagePopulation.cleanDescription(currentEffect.params ?? [],currentEffect.desc)}
                //                         </div>
                //                     </div>
                //                 </div>`;
                //             // }
    
                //             // paramString += `${paramEntry}${paramCounter != currentTraceRef.params.length-1 ? ", " : ""}`;
                //             // paramCounter++;
                //         }
    
                //         // entryString += `
                //         //     <div class="actionDetailBody">
                //         //         <div class="rotationConditionOperatorHeaderInlineParams">Parameters: [${paramString}]</div>
                //         //     </div>
                //         // `
                //         entryString += paramString;
                //     } 
    
                //     entryString += `</div>`;
        
        
        
                //     entryString += `</div>
                //     </div>
                //     </div>`;



                //     listStringer += entryString;
                //     // <div class="eidolonRowBoxHolder">
                            
                //     //         <div class="rightDescriptionBoxEidolons smallFont">
                //     //             <div class="eidolonRowNameTrigger">${buffEntry.name}</div>
                //     //         </div>
                //     //     </div>
                        

                //     //     <div class="actionDetailBody">
                //     //         <div class="actionDetailBody2Description">
                //     //             ${pagePopulation.cleanDescription(buffEntry.params,buffEntry.desc)}
                //     //         </div>
                //     //     </div>
                        
                //     //     <div class="actionDetailBody">
                //     //         <div class="rotationConditionOperatorHeaderInlineParams">Parameters: [${buffEntry.params}]</div>
                //     //     </div>
        
                //     // overviewString += listStringer;
                    
                // }
                // listStringer = `<div class="rotationsSectionRowHolder2Overview" id="activityBuffDisplay${sideNumber}GuideOverview${selectorCounter}" style="display: ${selectorCounter === 1 ? "flex" : "none"}">
                //     ${listStringer}
                
                // </div>`;
                // overviewString += listStringer;

















                // let waveCounter = 0;
                // let returnString = "";
                // for (let sideEntry of arraytoParse) {
                //     let enemyLevel = sideEntry.enemyLevel;

                //     let buffOverride = sideEntry.buffOverride;
                //     if (buffOverride && !overrideMainBuffDescUsed) {
                //         // ${pagePopulation.cleanDescription(buffEntry.params,buffEntry.desc)}
                //         readSelection("mocDescriptionBox").innerHTML = pagePopulation.cleanDescription(buffOverride.params,buffOverride.desc)
                //         readSelection("mocDescriptionBox").style.display = "block";
                //         overrideMainBuffDescUsed = true;
                //         console.log(`Override main desc: used`)
                //     }

                //     let modifierList = sideEntry.modifiersToAdd;
    
                //     const waveArray = sideEntry.enemyList;
    
                //     let allWavesString = `<div class="statFiltersRowHeaderSides">Part ${sideNumber}</div>`;
                //     for (let waveEntry of waveArray) {
                //         waveCounter++;
                //         let wholeWaveString = "";

                //         const isObject = typeof waveEntry === "object" && !Array.isArray(waveEntry);
                //         const isPF = stageTypers === "pf";

                        
                        

                //         const entryToIterate = isPF ? waveEntry.enemies : waveEntry;

                //         const counterObjectPF = {};


                //         if (isPF) {
                //             for (let m=entryToIterate.length-1;m>=0;m--) {
                //                 // waveEntry.enemies
                //                 const currentCountChecker = entryToIterate[m];

                //                 if (typeof currentCountChecker === "number") {
                //                     const realEntry = entryToIterate[currentCountChecker];
                //                     counterObjectPF[realEntry.id] ??= 1;
                //                     counterObjectPF[realEntry.id] += 1;
                //                     // entryToIterate.splice(m,1)
                //                 }
                //             }
                //         }
                //         // console.log(entryToIterate)

                //         for (let enemyEntry of entryToIterate) {

                //             const wasNumber = typeof enemyEntry === "number";
                //             if (wasNumber) {
                //                 if (isPF) {continue;}
                //                 enemyEntry = entryToIterate[enemyEntry];
                //             }
    
                //             // console.log(enemyEntry,wasNumber,entryToIterate)
                //             const enemyImage = enemyImages[enemyEntry.image];
    
    
                //             // <div class="addEnemyWeaknessesHeader">${enemyEntry.name}</div>

                //             // <div class="enemyAddWaveClassAndAttackRow">
                //             //     <div class="enemyAddWaveClass">Elite</div>
                //             //     <div class="enemyAddWaveAttack">[ST]</div>
                //             // </div>

                //             let weaknessIconString = "";

                //             for (let weaknessEntry of enemyEntry.weaknessList) {
                //                 weaknessIconString += `<img src="/HonkaiSR/icon/element/${weaknessEntry}.png" class="characterDisplayElementWeaknessIcon">`
                //             }


                //             // <div class="imageRowStatisticBox2">
                //             //     <div class="imageRowStatisticImageBox"><img src="/HonkaiSR/icon/property/IconMaxHP.png" class="imageRowStatisticImage"></div>
                //             //     <div class="imageRowStatisticStatBox">Health</div>
                //             // </div>

                //             // <span class="enemyLinkerText">Take me to:</span>
                //             wholeWaveString += `<div class="enemyWaveEnemyDisplayBox">
    
                //                 <img src="/HonkaiSR/${enemyImage}" class="enemyWaveEnemyIcon">
                //                 <div class="enemyWaveEnemyLevel">${enemyLevel}</div>

                //                 ${isPF && counterObjectPF[enemyEntry.id]>1 ? `<div class="enemyWaveEnemyPFCount">x${counterObjectPF[enemyEntry.id]}</div>` : ""}
                                
    
                //                 <div class="enemyWaveEnemyDisplayBoxIDLinker clickable" onclick="endgameModeDisplay.linkToEnemy()">
                                    
                //                     <span class="enemyLinkerText">${enemyEntry.name}</span>
                                    
                //                     <span>${enemyEntry.id}</span>
                //                 </div>
                                
                //                 <div class="characterDisplayElementWeaknessIconHolderBoxBattleSettings">
                //                     ${weaknessIconString}
                //                 </div>
                                

                //                 ${enemyEntry.delay && enemyEntry.delay != 1 ? `<div class="imageRowStatisticBox1">
                //                     Start AV
                //                     <div class="imageRowStatisticStatBox">x${enemyEntry.delay}</div>
                //                 </div>` : ""}
                                
                //                 <div class="imageRowStatisticBox2">
                //                     <div class="imageRowStatisticImageBox"><img src="/HonkaiSR/icon/property/IconStatusResistance.png" class="imageRowStatisticImage"></div>
                //                     <div class="imageRowStatisticStatBox">${((enemyEntry.effectRES ?? 0) * 100).toLocaleString()}</div>
                //                     <div class="imageRowStatisticImageBox"><img src="/HonkaiSR/icon/property/IconSpeed.png" class="imageRowStatisticImage"></div>
                //                     <div class="imageRowStatisticStatBox">${Math.floor(enemyEntry.speedBase).toLocaleString()}</div>
                //                 </div>
    
                //                 <div class="imageRowStatisticBox1">
                //                     <div class="imageRowStatisticImageBox"><img src="/HonkaiSR/icon/property/IconBreakUp.png" class="imageRowStatisticImage"></div>
                //                     <div class="imageRowStatisticStatBox">${enemyEntry.toughnessBase}${enemyEntry.toughnessBars && enemyEntry.toughnessBars>1 ? ` x${enemyEntry.toughnessBars}` : ""}</div>
                //                 </div>
    
                                
                                
                //                 <div class="imageRowStatisticBox3">
                //                     <div class="imageRowStatisticStatBox">${Math.floor(enemyEntry.hpBase).toLocaleString()}${enemyEntry.hpBars && enemyEntry.hpBars>1 ? ` x${enemyEntry.hpBars}` : ""}</div>
                //                 </div>
                                
                //             </div>`
                //             // wholeWaveString += `<div class="enemyWaveEnemyDisplayBox">
    
                //             //     <div class="enemyWaveEnemyIconAndLevelBox">
                //             //         <img src="/HonkaiSR/misc/glorp.png" class="enemyWaveEnemyIcon">
                //             //         <div class="enemyWaveEnemyLevelAndWeaknessBox">
                //             //             <div class="enemyWaveEnemyLevel">LvL 95</div>
                //             //             <div class="characterDisplayElementWeaknessIconHolderBoxBattleSettings">
                //             //                 <img src="/HonkaiSR/icon/element/Thunder.png" class="characterDisplayElementWeaknessIcon">
                //             //                 <img src="/HonkaiSR/icon/element/Wind.png" class="characterDisplayElementWeaknessIcon">
                //             //                 <img src="/HonkaiSR/icon/element/Quantum.png" class="characterDisplayElementWeaknessIcon">
                //             //             </div>
                //             //         </div>
                //             //     </div>
    
                //             //     <div class="addEnemyWeaknessesHeader">${enemyEntry.name}</div>
                                    
    
                //             //     <div class="enemyAddWaveClassAndAttackRow">
                //             //         <div class="enemyAddWaveClass">Elite</div>
                //             //         <div class="enemyAddWaveAttack">[ST]</div>
                //             //     </div>
    
    
                //             //     <div class="imageRowStatisticBox1">
                //             //         <div class="imageRowStatisticImageBox"><img src="/HonkaiSR/icon/property/IconAttack.png" class="imageRowStatisticImage"></div>
                //             //         <div class="imageRowStatisticStatBox">718</div>
                //             //     </div>
    
                //             //     <div class="imageRowStatisticBox2">
                //             //         <div class="imageRowStatisticImageBox"><img src="/HonkaiSR/icon/property/IconSpeed.png" class="imageRowStatisticImage"></div>
                //             //         <div class="imageRowStatisticStatBox">132</div>
                //             //     </div>
    
                //             //     <div class="imageRowStatisticBox1">
                //             //         <div class="imageRowStatisticImageBox"><img src="/HonkaiSR/icon/property/IconStatusResistance.png" class="imageRowStatisticImage"></div>
                //             //         <div class="imageRowStatisticStatBox">0.3</div>
                //             //     </div>
                //             //     <div class="imageRowStatisticBox2">
                //             //         <div class="imageRowStatisticImageBox"><img src="/HonkaiSR/icon/property/IconBreakUp.png" class="imageRowStatisticImage"></div>
                //             //         <div class="imageRowStatisticStatBox">100 </div>
                //             //     </div>
                //             //     <div class="imageRowStatisticBox1">
                //             //         <div class="imageRowStatisticImageBox"><img src="/HonkaiSR/icon/property/IconMaxHP.png" class="imageRowStatisticImage"></div>
                //             //         <div class="imageRowStatisticStatBox">${Math.floor(enemyEntry.hpBase).toLocaleString()}</div>
                //             //     </div>
                                
                //             // </div>`
                //         }
    
    
    
    
    
    
                //         allWavesString += `<div class="statFiltersRowHeader">Wave ${waveCounter}</div>
                //         ${isPF ? `<div class="statFiltersRowHeaderSides">Field Limit: ${waveEntry.fieldMax}</div>` : ""}
                //         <div class="enemyWaveSummaryHolder">
                //             ${wholeWaveString}
                //         </div>`
                //     }
    
                //     returnString += allWavesString;
                // }