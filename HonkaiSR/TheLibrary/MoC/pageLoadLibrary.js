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

            readSelection("mainGridRow").style.background = `url('/HonkaiSR/${directEntry.image || "mocBG/AbyssSenceBgl_Red_00.png"}') center / cover no-repeat`;

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

            readSelection("mocDescriptionBox").innerHTML = directEntry.buffData?.desc ? pagePopulation.cleanDescription(directEntry.buffData.params,directEntry.buffData.desc) : "";


            // <div class="superimpositionHolderbox">
                // <div class="superimpositionButton clickable" id="superimpositionButton1" onclick="endgameModeDisplay.setEndgameDisplay(0,null,)" style="background-color: rgb(225, 225, 228); color: black;">1</div>
                // <div class="superimpositionButton clickable" id="superimpositionButton2" onclick="endgameModeDisplay.setEndgameDisplay(0,null,)" style="background-color: transparent; color: rgb(225, 225, 228);">2</div>
                // <div class="superimpositionButton clickable" id="superimpositionButton3" onclick="endgameModeDisplay.setEndgameDisplay(0,null,)" style="background-color: transparent; color: rgb(225, 225, 228);">3</div>
                // <div class="superimpositionButton clickable" id="superimpositionButton4" onclick="endgameModeDisplay.setEndgameDisplay(0,null,)" style="background-color: transparent; color: rgb(225, 225, 228);">4</div>
                // <div class="superimpositionButton clickable" id="superimpositionButton5" onclick="endgameModeDisplay.setEndgameDisplay(0,null,)" style="background-color: transparent; color: rgb(225, 225, 228);">5</div>
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
    
                        for (let enemyEntry of waveEntry) {
    
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
    
                                <div class="enemyWaveEnemyDisplayBoxIDLinker clickable" onclick="endgameModeDisplay.linkToEnemy()">
                                    
                                    <span class="enemyLinkerText">${enemyEntry.name}</span>
                                    
                                    <span>${enemyEntry.id}</span>
                                </div>
                                
                                <div class="characterDisplayElementWeaknessIconHolderBoxBattleSettings">
                                    ${weaknessIconString}
                                </div>
                                
                                <div class="imageRowStatisticBox1">
                                    <div class="imageRowStatisticImageBox"><img src="/HonkaiSR/icon/property/IconAttack.png" class="imageRowStatisticImage"></div>
                                    <div class="imageRowStatisticStatBox">${Math.floor(enemyEntry.attackBase).toLocaleString()}</div>
                                    <div class="imageRowStatisticImageBox"><img src="/HonkaiSR/icon/property/IconSpeed.png" class="imageRowStatisticImage"></div>
                                    <div class="imageRowStatisticStatBox">${Math.floor(enemyEntry.speedBase).toLocaleString()}</div>
                                </div>
    
                                <div class="imageRowStatisticBox2">
                                    <div class="imageRowStatisticImageBox"><img src="/HonkaiSR/icon/property/IconStatusResistance.png" class="imageRowStatisticImage"></div>
                                    <div class="imageRowStatisticStatBox">${((enemyEntry.effectRES ?? 0) * 100).toLocaleString()}</div>
                                    <div class="imageRowStatisticImageBox"><img src="/HonkaiSR/icon/property/IconStatusProbability.png" class="imageRowStatisticImage"></div>
                                    <div class="imageRowStatisticStatBox">${(enemyEntry.ehr * 100).toLocaleString()}</div>
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