// readyCharacterCounts
// readyLightconeCounts
// readyRelicCounts
// lastVerionHSR

// const totalCharacters = readyCharacterCounts.totalCharacterCount;
// const readyCharacters = readyCharacterCounts.readyCharacterCount;

// const totalLightcones = readyLightconeCounts.totalLightconeCount;
// const readyLightcones = readyLightconeCounts.readyLightconeCount;

// const totalRelics = readyRelicCounts.totalRelicCount;
// const readyRelics = readyRelicCounts.readyRelicCount;


// readSelection("charactersCompletedPercent").innerHTML = `${(100 * readyCharacters / totalCharacters).toLocaleString(1,{maximumFractionDigits: 0})}% (${readyCharacters}/${totalCharacters})`;
// readSelection("lightconesCompletedPercent").innerHTML = `${(100 * readyLightcones / totalLightcones).toLocaleString(1,{maximumFractionDigits: 0})}% (${readyLightcones}/${totalLightcones})`;
// readSelection("relicsCompletedPercent").innerHTML = `${(100 * readyRelics / totalRelics).toLocaleString(1,{maximumFractionDigits: 0})}% (${readyRelics}/${totalRelics})`;

// readSelection("versionUpdateValue").innerHTML = `${lastVerionHSR.version}-${lastVerionHSR.date}`;





function parseLocalDate(yyyyMmDd) {
    if (!yyyyMmDd) return null;
  
    const [y, m, d] = yyyyMmDd.split("-").map(Number);
    return new Date(y, m - 1, d);
  }
function todayLocal() {
    const now = new Date();
    return new Date(now.getFullYear(),now.getMonth(),now.getDate());
}


let currentActiveCycle = null;
let currentFloor = null;


const endgameModeDisplay = {
    pageloadEntry() {
        mocSchedule.sort((a, b) => {
            const aDate = parseLocalDate(a.start);
            const bDate = parseLocalDate(b.start);
            return aDate - bDate;
        });
        
        // for (let entry of mocSchedule) {
        //     console.log(entry.realName);
        // }
        
        
        const today = todayLocal();
        const activeRange = mocSchedule.find(r => {
            const start = parseLocalDate(r.start);
            const end   = parseLocalDate(r.end);
            return today >= start && today <= end;
        });
        
        // console.log(activeRange)

        currentActiveCycle = activeRange.id;

        

        endgameModeDisplay.setEndgameDisplay(activeRange.id,activeRange);
        
    },
    linkToEnemy() {
        alert("Enemy linking will be set up in a day or two.\n\nForgive me for setting up the onclick early.")
    },
    setActivityBuffDisplay(display,set,setLength) {
        // activityBuffDisplay2Button${selectorCounter2}
        // activityBuffDisplay2Box${selectorCounter2}

        for (let i=1;i<=setLength;i++) {
            readSelection(`activityBuffDisplay${set}Button${i}`).style.backgroundColor = i === display ? "rgb(225, 225, 228)" : "rgba(0, 0, 0, 0.562)";
            readSelection(`activityBuffDisplay${set}Button${i}`).style.color = i === display ? "black" : "#e1e1e4";

            readSelection(`activityBuffDisplay${set}Box${i}`).style.display = i === display ? "flex" : "none";
        }

        // style="background-color: rgb(225, 225, 228); color: black;"

        // background-color: rgba(0, 0, 0, 0.562);
        // color: #e1e1e4;
    },
    setEndgameDisplay(adjustment,directEntry,floorNameNew) {

        if (directEntry || floorNameNew != undefined) {
            if (floorNameNew) {
                currentFloor = floorNameNew;
                // console.log(currentFloor)

                for (let i=0;i<mocSchedule.length;i++) {
                    const currentEntry = mocSchedule[i];
    
                    if (currentEntry.id === currentActiveCycle) {
    
                        const correctIndex = Math.max(0,Math.min(mocSchedule.length-1, i + adjustment));
                        const correctEntry = mocSchedule[correctIndex];
    
                        currentActiveCycle = correctEntry.id;
                        directEntry = correctEntry;
    
                        // endgameModeDisplay.setEndgameDisplay(null,correctEntry);
    
                        break;
                    }
                }
            }

            let pfBannerString = "";
            if (stageTypers != "pf") {
                readSelection("mainGridRow").style.background = `url('/HonkaiSR/${directEntry.image || "mocBG/AbyssSenceBgl_Red_00.png"}') center / cover no-repeat`;
            }
            else if (stageTypers === "pf") {
                readSelection("pureFictionBannerImage").src = `/HonkaiSR/${directEntry.image}`
                // pfBannerString = `<img src="/HonkaiSR/${directEntry.image}" class="characterDisplayElementWeaknessIcon">`
            }

            readSelection("cardBoxIconTextVersion").innerHTML = directEntry.realName;

            readSelection("versionUpdateValue").innerHTML = `<div class="toggleArrowBox" onclick="endgameModeDisplay.setEndgameDisplay(-1)">&#9664;</div>`
            + directEntry.start + " - " + directEntry.end + `<div class="toggleArrowBox" onclick="endgameModeDisplay.setEndgameDisplay(1)">&#9654;</div>`;


            const currentFloors = directEntry.floorData;
            let floorCounts = Object.keys(currentFloors);
            let floorMin = +floorCounts[0];
            let floorMax = +floorCounts[floorCounts.length-1];

            // console.log(floorMax,floorMin,currentFloors[floorMax])

            if (currentFloor == null) {currentFloor = floorMax;}
            currentFloor = Math.max(floorMin,Math.min(floorMax,+currentFloor));


            // const currentStage = currentFloors[currentFloor] ?? currentFloors[15] ?? currentFloors[12] ?? currentFloors[6];
            const currentStage = currentFloors[currentFloor];
            

            const currentStageData = currentStage.stageDataObject;
            const side1 = currentStageData.stage1.stageDataArray;
            const side2 = currentStageData.stage2.stageDataArray;

            const descriptionToUse = directEntry.buffData?.desc && directEntry.buffData.desc != "undefined" ? pagePopulation.cleanDescription(directEntry.buffData.params,directEntry.buffData.desc) : "";
            readSelection("mocDescriptionBox").innerHTML = descriptionToUse;
            if (!descriptionToUse) {
                readSelection("mocDescriptionBox").style.display = "none";
            }
            else {
                readSelection("mocDescriptionBox").style.display = "block";
            }


            if (directEntry.buffList2?.length || directEntry.buffList1?.length) {
                readSelection("PFDescriptionBox").style.display = "block";

                // desc
                let list2Stringer = "";
                let selector2Stringer = "";
                if (directEntry.buffList2 && directEntry.buffList2.length) {

                    selector2Stringer += `<div class="superimpositionHolderboxActivityButtons">`;


                    let selectorCounter2 = 0;
                    for (let buffEntry of directEntry.buffList2) {
                        const setLength = directEntry.buffList2.length;

                        selectorCounter2++;
                        selector2Stringer += `<div class="superimpositionButtonActivityButton clickable" ${selectorCounter2 === setLength ? `style="background-color: rgb(225, 225, 228); color: black;"` : ""}
                        id="activityBuffDisplay2Button${selectorCounter2}" onclick="endgameModeDisplay.setActivityBuffDisplay(${selectorCounter2},2,${setLength})">${buffEntry.name}</div>`;

                        list2Stringer += `<div class="rotationsSectionRowHolder2Overview" id="activityBuffDisplay2Box${selectorCounter2}" style="display: ${selectorCounter2 === setLength ? "flex" : "none"}">
                                    <div class="eidolonRowBoxHolder">
                                        
                                        <div class="rightDescriptionBoxEidolons smallFont">
                                            <div class="eidolonRowNameTrigger">${buffEntry.name}</div>
                                        </div>
                                    </div>
                                    

                                    <div class="actionDetailBody">
                                        <div class="actionDetailBody2Description">
                                            ${pagePopulation.cleanDescription(buffEntry.params,buffEntry.desc)}
                                        </div>
                                    </div>
                                    
                                    <div class="actionDetailBody">
                                        <div class="rotationConditionOperatorHeaderInlineParams">Parameters: [${buffEntry.params}]</div>
                                    </div>
                                
                                </div>`;
                    }
                    selector2Stringer += `</div>`;
                }

                let list1Stringer = "";
                let selector1Stringer = "";
                
                if (directEntry.buffList1 && directEntry.buffList1.length) {
                    selector1Stringer += `<div class="superimpositionHolderboxActivityButtons">`;
                    let selectorCounter1 = 0;
                    for (let buffEntry of directEntry.buffList1) {

                        const setLength = directEntry.buffList1.length;
                        selectorCounter1++;
                        selector1Stringer += `<div class="superimpositionButtonActivityButton clickable" ${selectorCounter1 === setLength ? `style="background-color: rgb(225, 225, 228); color: black;"` : ""}
                        id="activityBuffDisplay1Button${selectorCounter1}" onclick="endgameModeDisplay.setActivityBuffDisplay(${selectorCounter1},1,${setLength})">${buffEntry.name}</div>`

                        list1Stringer += `<div class="rotationsSectionRowHolder2Overview" id="activityBuffDisplay1Box${selectorCounter1}" style="display: ${selectorCounter1 === setLength ? "flex" : "none"}">
                                    <div class="eidolonRowBoxHolder">
                                        
                                        <div class="rightDescriptionBoxEidolons smallFont">
                                            <div class="eidolonRowNameTrigger">${buffEntry.name}</div>
                                        </div>
                                    </div>

                                    <div class="overviewSkillDataBox">
                                        <div class="traceToughnessBoxOverviewSkill" style="background-color: transparent">
                                            <div class="traceToughnessTitleBoxToughnessRow">
                                                
                                            </div>
                                        </div>
                                        
                                    </div>
                                    

                                    <div class="actionDetailBody">
                                        <div class="actionDetailBody2Description">
                                            ${pagePopulation.cleanDescription(buffEntry.params,buffEntry.desc)}
                                        </div>
                                    </div>
                                    
                                    <div class="actionDetailBody">
                                        <div class="rotationConditionOperatorHeaderInlineParams">Parameters: [${buffEntry.params}]</div>
                                    </div>
                                
                                </div>`;
                    }
                    selector1Stringer += `</div>`;
                }


                // if (list1Stringer) {
                //     list1Stringer = `<div class="statFiltersRowHeaderSides">Player Buff Options</div>` + list1Stringer;
                // }

                readSelection("PFDescriptionBox").innerHTML = selector2Stringer + list2Stringer + selector1Stringer + list1Stringer;
            }
            else if (readSelection("PFDescriptionBox")) {readSelection("PFDescriptionBox").style.display = "none";}


            // <div class="superimpositionHolderbox">
            //     <div class="superimpositionButton clickable" id="superimpositionButton1" onclick="endgameModeDisplay.setEndgameDisplay(0,null,)" style="background-color: rgb(225, 225, 228); color: black;">1</div>
            //     <div class="superimpositionButton clickable" id="superimpositionButton2" onclick="endgameModeDisplay.setEndgameDisplay(0,null,)" style="background-color: transparent; color: rgb(225, 225, 228);">2</div>
            //     <div class="superimpositionButton clickable" id="superimpositionButton3" onclick="endgameModeDisplay.setEndgameDisplay(0,null,)" style="background-color: transparent; color: rgb(225, 225, 228);">3</div>
            //     <div class="superimpositionButton clickable" id="superimpositionButton4" onclick="endgameModeDisplay.setEndgameDisplay(0,null,)" style="background-color: transparent; color: rgb(225, 225, 228);">4</div>
            //     <div class="superimpositionButton clickable" id="superimpositionButton5" onclick="endgameModeDisplay.setEndgameDisplay(0,null,)" style="background-color: transparent; color: rgb(225, 225, 228);">5</div>
            // </div>

            let floorStringer = "";
            
            for (let floorName  of floorCounts) {

                let bgString = `background-color: rgba(0, 0, 0, 0.562); color: rgb(225, 225, 228);`
                if (+floorName === currentFloor) {
                    bgString = `background-color: rgb(225, 225, 228); color: black;`;
                }
                floorStringer += `<div class="superimpositionButton clickable" id="superimpositionButton1" onclick="endgameModeDisplay.setEndgameDisplay(0,null,${floorName})" style="${bgString}">${floorName}</div>`
            }
            readSelection("superimpositionHolderbox").innerHTML = floorStringer;
            

            function getSideString(arraytoParse,sideNumber) {
                let waveCounter = 0;
                let returnString = "";
                for (let sideEntry of arraytoParse) {
                    let enemyLevel = sideEntry.enemyLevel;

                    let modifierList = sideEntry.modifiersToAdd;
    
                    const waveArray = sideEntry.enemyList;
    
                    let allWavesString = `<div class="statFiltersRowHeaderSides">Part ${sideNumber}</div>`;
                    for (let waveEntry of waveArray) {
                        waveCounter++;
                        let wholeWaveString = "";

                        const isObject = typeof waveEntry === "object" && !Array.isArray(waveEntry);
                        const isPF = stageTypers === "pf";

                        
                        

                        const entryToIterate = isPF ? waveEntry.enemies : waveEntry;

                        const counterObjectPF = {};


                        if (isPF) {
                            for (let m=entryToIterate.length-1;m>=0;m--) {
                                // waveEntry.enemies
                                const currentCountChecker = entryToIterate[m];

                                if (typeof currentCountChecker === "number") {
                                    const realEntry = entryToIterate[currentCountChecker];
                                    counterObjectPF[realEntry.id] ??= 1;
                                    counterObjectPF[realEntry.id] += 1;
                                    // entryToIterate.splice(m,1)
                                }
                            }
                        }
                        // console.log(entryToIterate)

                        for (let enemyEntry of entryToIterate) {

                            const wasNumber = typeof enemyEntry === "number";
                            if (wasNumber) {
                                if (isPF) {continue;}
                                enemyEntry = entryToIterate[enemyEntry];
                            }
    
                            // console.log(enemyEntry,wasNumber,entryToIterate)
                            const enemyImage = enemyImages[enemyEntry.image];
    
    
                            // <div class="addEnemyWeaknessesHeader">${enemyEntry.name}</div>

                            // <div class="enemyAddWaveClassAndAttackRow">
                            //     <div class="enemyAddWaveClass">Elite</div>
                            //     <div class="enemyAddWaveAttack">[ST]</div>
                            // </div>

                            let weaknessIconString = "";

                            for (let weaknessEntry of enemyEntry.weaknessList) {
                                weaknessIconString += `<img src="/HonkaiSR/icon/element/${weaknessEntry}.png" class="characterDisplayElementWeaknessIcon">`
                            }


                            // <div class="imageRowStatisticBox2">
                            //     <div class="imageRowStatisticImageBox"><img src="/HonkaiSR/icon/property/IconMaxHP.png" class="imageRowStatisticImage"></div>
                            //     <div class="imageRowStatisticStatBox">Health</div>
                            // </div>

                            // <span class="enemyLinkerText">Take me to:</span>
                            wholeWaveString += `<div class="enemyWaveEnemyDisplayBox">
    
                                <img src="/HonkaiSR/${enemyImage}" class="enemyWaveEnemyIcon">
                                <div class="enemyWaveEnemyLevel">${enemyLevel}</div>

                                ${isPF && counterObjectPF[enemyEntry.id]>1 ? `<div class="enemyWaveEnemyPFCount">x${counterObjectPF[enemyEntry.id]}</div>` : ""}
                                
    
                                <div class="enemyWaveEnemyDisplayBoxIDLinker clickable" onclick="endgameModeDisplay.linkToEnemy()">
                                    
                                    <span class="enemyLinkerText">${enemyEntry.name}</span>
                                    
                                    <span>${enemyEntry.id}</span>
                                </div>
                                
                                <div class="characterDisplayElementWeaknessIconHolderBoxBattleSettings">
                                    ${weaknessIconString}
                                </div>
                                

                                ${enemyEntry.delay && enemyEntry.delay != 1 ? `<div class="imageRowStatisticBox1">
                                    Start AV
                                    <div class="imageRowStatisticStatBox">x${enemyEntry.delay}</div>
                                </div>` : ""}
                                
                                <div class="imageRowStatisticBox2">
                                    <div class="imageRowStatisticImageBox"><img src="/HonkaiSR/icon/property/IconStatusResistance.png" class="imageRowStatisticImage"></div>
                                    <div class="imageRowStatisticStatBox">${((enemyEntry.effectRES ?? 0) * 100).toLocaleString()}</div>
                                    <div class="imageRowStatisticImageBox"><img src="/HonkaiSR/icon/property/IconSpeed.png" class="imageRowStatisticImage"></div>
                                    <div class="imageRowStatisticStatBox">${Math.floor(enemyEntry.speedBase).toLocaleString()}</div>
                                </div>
    
                                <div class="imageRowStatisticBox1">
                                    <div class="imageRowStatisticImageBox"><img src="/HonkaiSR/icon/property/IconBreakUp.png" class="imageRowStatisticImage"></div>
                                    <div class="imageRowStatisticStatBox">${enemyEntry.toughnessBase}${enemyEntry.toughnessBars && enemyEntry.toughnessBars>1 ? ` x${enemyEntry.toughnessBars}` : ""}</div>
                                </div>
    
                                
                                
                                <div class="imageRowStatisticBox3">
                                    <div class="imageRowStatisticStatBox">${Math.floor(enemyEntry.hpBase).toLocaleString()}${enemyEntry.hpBars && enemyEntry.hpBars>1 ? ` x${enemyEntry.hpBars}` : ""}</div>
                                </div>
                                
                            </div>`
                            // wholeWaveString += `<div class="enemyWaveEnemyDisplayBox">
    
                            //     <div class="enemyWaveEnemyIconAndLevelBox">
                            //         <img src="/HonkaiSR/misc/glorp.png" class="enemyWaveEnemyIcon">
                            //         <div class="enemyWaveEnemyLevelAndWeaknessBox">
                            //             <div class="enemyWaveEnemyLevel">LvL 95</div>
                            //             <div class="characterDisplayElementWeaknessIconHolderBoxBattleSettings">
                            //                 <img src="/HonkaiSR/icon/element/Thunder.png" class="characterDisplayElementWeaknessIcon">
                            //                 <img src="/HonkaiSR/icon/element/Wind.png" class="characterDisplayElementWeaknessIcon">
                            //                 <img src="/HonkaiSR/icon/element/Quantum.png" class="characterDisplayElementWeaknessIcon">
                            //             </div>
                            //         </div>
                            //     </div>
    
                            //     <div class="addEnemyWeaknessesHeader">${enemyEntry.name}</div>
                                    
    
                            //     <div class="enemyAddWaveClassAndAttackRow">
                            //         <div class="enemyAddWaveClass">Elite</div>
                            //         <div class="enemyAddWaveAttack">[ST]</div>
                            //     </div>
    
    
                            //     <div class="imageRowStatisticBox1">
                            //         <div class="imageRowStatisticImageBox"><img src="/HonkaiSR/icon/property/IconAttack.png" class="imageRowStatisticImage"></div>
                            //         <div class="imageRowStatisticStatBox">718</div>
                            //     </div>
    
                            //     <div class="imageRowStatisticBox2">
                            //         <div class="imageRowStatisticImageBox"><img src="/HonkaiSR/icon/property/IconSpeed.png" class="imageRowStatisticImage"></div>
                            //         <div class="imageRowStatisticStatBox">132</div>
                            //     </div>
    
                            //     <div class="imageRowStatisticBox1">
                            //         <div class="imageRowStatisticImageBox"><img src="/HonkaiSR/icon/property/IconStatusResistance.png" class="imageRowStatisticImage"></div>
                            //         <div class="imageRowStatisticStatBox">0.3</div>
                            //     </div>
                            //     <div class="imageRowStatisticBox2">
                            //         <div class="imageRowStatisticImageBox"><img src="/HonkaiSR/icon/property/IconBreakUp.png" class="imageRowStatisticImage"></div>
                            //         <div class="imageRowStatisticStatBox">100 </div>
                            //     </div>
                            //     <div class="imageRowStatisticBox1">
                            //         <div class="imageRowStatisticImageBox"><img src="/HonkaiSR/icon/property/IconMaxHP.png" class="imageRowStatisticImage"></div>
                            //         <div class="imageRowStatisticStatBox">${Math.floor(enemyEntry.hpBase).toLocaleString()}</div>
                            //     </div>
                                
                            // </div>`
                        }
    
    
    
    
    
    
                        allWavesString += `<div class="statFiltersRowHeader">Wave ${waveCounter}</div>
                        ${isPF ? `<div class="statFiltersRowHeaderSides">Field Limit: ${waveEntry.fieldMax}</div>` : ""}
                        <div class="enemyWaveSummaryHolder">
                            ${wholeWaveString}
                        </div>`
                    }
    
                    returnString += allWavesString;
                }

                return returnString;
            }
            

            let side1String = getSideString(side1,1);
            let side2String = getSideString(side2,2);
            





            readSelection("mocEachSide1").innerHTML = side1String;
            readSelection("mocEachSide2").innerHTML = side2String;
























        }
        else {
            for (let i=0;i<mocSchedule.length;i++) {
                const currentEntry = mocSchedule[i];

                if (currentEntry.id === currentActiveCycle) {

                    const correctIndex = Math.max(0,Math.min(mocSchedule.length-1, i + adjustment));
                    const correctEntry = mocSchedule[correctIndex];

                    currentActiveCycle = correctEntry.id;

                    endgameModeDisplay.setEndgameDisplay(null,correctEntry);

                    break;
                }
            }
        }


        

    },
}



endgameModeDisplay.pageloadEntry();