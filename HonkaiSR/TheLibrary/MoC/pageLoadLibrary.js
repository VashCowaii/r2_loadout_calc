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

    const [date,time] = yyyyMmDd.split(" ");
    const [y,m,d] = date.split("-").map(Number);
    const [hh=0,mm=0,ss=0] = time.split(":").map(Number);

    return new Date(Date.UTC(y,m-1,d,hh-8,mm,ss));
  }
function todayLocal() {
    return new Date();
    // const now = new Date();
    // return new Date(now.getFullYear(),now.getMonth(),now.getDate());
}


let currentActiveCycle = null;
let currentFloor = null;
let currentCycleIndex = null;
let farmingPagePopSelectionsDone = false;
let firstBoxGenDCompleted = false;


const endgameModeDisplay = {
    pageloadEntry() {
        readSelection("PFDescriptionBox").innerHTML = "";

        if (stageTypers === "anom" || stageTypers === "echo" || stageTypers === "relic" || stageTypers === "crimson" || stageTypers === "golden" || stageTypers === "shadow" || stageTypers === "planar") {

            mocSchedule.reverse();
            const newActiveRange = mocSchedule[mocSchedule.length-1];
            currentActiveCycle = newActiveRange.id;
            currentCycleIndex = mocSchedule.indexOf(newActiveRange);
            currentFloor = 4;
            endgameModeDisplay.setEndgameDisplay(newActiveRange.id,newActiveRange);

            return 
        }

        mocSchedule.sort((a, b) => {
            const aDate = parseLocalDate(a.start);
            const bDate = parseLocalDate(b.start);
            return aDate - bDate;
        });
        
        
        const today = todayLocal();
        // console.log(today)
        const activeRange = mocSchedule.find(r => {
            const start = parseLocalDate(r.start);
            const end = parseLocalDate(r.end);

            // console.log(start,end)
            return today >= start && today <= end;
        });
        
        // console.log(activeRange.start)

        currentActiveCycle = activeRange.id;
        currentCycleIndex = mocSchedule.indexOf(activeRange);

        

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
    setBossTraitDisplay(display,set,setLength) {

        // activityBuffDisplay${sideNumber}GuideButton${selectorCounter}
        console.log(display,set,setLength)
        for (let i=1;i<=setLength;i++) {
            readSelection(`activityBuffDisplay${set}GuideButton${i}`).style.backgroundColor = i === display ? "rgb(225, 225, 228)" : "rgba(0, 0, 0, 0.562)";
            readSelection(`activityBuffDisplay${set}GuideButton${i}`).style.color = i === display ? "black" : "#e1e1e4";

            readSelection(`activityBuffDisplay${set}GuideOverview${i}`).style.display = i === display ? "flex" : "none";
                        // activityBuffDisplay${sideNumber}GuideOverview${selectorCounter}
        }
    },
    getBuffDisplayBox(buffObject,idString,isShow,abilitiesArray) {


        let arrayAbilityStringer = "";
        let buffCounter = 0;
        if (buffObject?.abilitiesArray?.length) {
            for (let abilityArrayEntry of buffObject.abilitiesArray) {
                buffCounter++;
                arrayAbilityStringer += `<a class="exportIconBoxHolderBuffButton clickable" href="/HonkaiSR/TheLibrary/AbilityConfigsBE/${abilityArrayEntry.BEKey}/#${encodeURIComponent(abilityArrayEntry.realModifierNamne)}" target="_blank">
                    Buff ${buffCounter}&nbsp;
                    <img src="/HonkaiSR/misc/export.png" class="exportButtonIcon">
                </a>`
            }
        }

        if (abilitiesArray?.length) {
            
            for (let abilityArrayEntry of abilitiesArray) {
                buffCounter++;
                arrayAbilityStringer += `<a class="exportIconBoxHolderBuffButton clickable" href="/HonkaiSR/TheLibrary/AbilityConfigsBE/${abilityArrayEntry.BEKey}/#${encodeURIComponent(abilityArrayEntry.realModifierNamne)}" target="_blank">
                    Buff ${buffCounter}&nbsp;
                    <img src="/HonkaiSR/misc/export.png" class="exportButtonIcon">
                </a>`
            }
        }


        let isValueShow = idString && isShow != undefined;
        let showBox = isValueShow ? isShow : true;



        return buffObject ? `<div class="rotationsSectionRowHolder2Overview" style="display: ${showBox ? "flex" : "none"}" ${idString ? `id="${idString}"` : ""}>
            ${buffObject.name ? `<div class="eidolonRowBoxHolder">
                <div class="rightDescriptionBoxEidolons smallFont">
                    <div class="eidolonRowNameTrigger">${buffObject.name}</div>
                </div>
            </div>` : ""}
            
            ${buffObject.desc ? `<div class="actionDetailBody">
                <div class="actionDetailBody2Description">
                    ${pagePopulation.cleanDescription(buffObject.params ?? [],buffObject.desc ?? "")}
                </div>
            </div>` : ""}

            ${buffObject.params?.length ? `<div class="actionDetailBody">
                <div class="rotationConditionOperatorHeaderInlineParams">Parameters: [${buffObject.params}]</div>
            </div>` : ""}

            
            <div class="actionDetailBody">
                ${buffObject.BEKey ? `<a class="exportIconBoxHolderBuffButton clickable" href="/HonkaiSR/TheLibrary/AbilityConfigsBE/${buffObject.BEKey}/#${encodeURIComponent(buffObject.realModifierNamne)}" target="_blank">
                    Go to Buff&nbsp;
                    <img src="/HonkaiSR/misc/export.png" class="exportButtonIcon">
                </a>` : ""}
                ${arrayAbilityStringer}
                
                
            </div>
        
        </div>` : "";
    },
    setEndgameDisplay(adjustment,directEntry,floorNameNew,directIndex) {
        readSelection("PFDescriptionBox").innerHTML = "";
        if (adjustment != undefined) {firstBoxGenDCompleted = false;}

        if (directIndex != undefined) {
            directEntry = mocSchedule[directIndex];


            // farmingBoxRow${zz}
            for (let i=0;i<mocSchedule.length;i++) {
                readSelection(`farmingBoxRow${i}`).style.background = i===directIndex ? "linear-gradient(-90deg, transparent,transparent,transparent,#ffffff3b)" : "transparent";
            }
        }


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
                        currentCycleIndex = mocSchedule.indexOf(correctEntry);
                        directEntry = correctEntry;
    
                        // endgameModeDisplay.setEndgameDisplay(null,correctEntry);
    
                        break;
                    }
                }
            }

            let isFarmingActivity = false;
            if (stageTypers === "echo") {
                directEntry.image = `activityBG/RogueNousInfoBg.png`;
                isFarmingActivity = true;


                // ChallengeThemeBanner_2004
                // RogueNousInfoBg
            }
            else if (stageTypers === "relic") {
                directEntry.image = `activityBG/RogueMagicInfoBg.png`;
                isFarmingActivity = true;

            }
            else if (stageTypers === "planar") {
                directEntry.image = `activityBG/RoguePanelFormalBanner.png`;
                isFarmingActivity = true;

            }
            else if (stageTypers === "crimson") {
                directEntry.image = `activityBG/ChallengeBossInfoBg.png`;
                isFarmingActivity = true;

            }
            else if (stageTypers === "golden") {
                directEntry.image = `activityBG/ChallengeBossInfoBg.png`;
                isFarmingActivity = true;

            }
            else if (stageTypers === "shadow") {
                directEntry.image = `activityBG/RogueInfoBg.png`;
                isFarmingActivity = true;

            }


            if (isFarmingActivity) {
                readSelection("versionUpdateValue").style.display = "none";
                readSelection("superimpositionHolderbox").style.display = "none";
            }


            // mocEachSide2

            // if (isFarmingActivity && !directEntry.buffData?.desc) {




            // if (isFarmingActivity) {
            //     readSelection("mocEachSide2").style.display = "none";
            // }




            // Banner1
            // MainStoryFifthWorldBanner
            // Banner2
            // ChallengeRogueTournBanner4

            let pfBannerString = "";
            readSelection("mainGridRow").style.background = `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),url('/HonkaiSR/${directEntry.image || "mocBG/AbyssSenceBgl_Red_00.png"}') center top / cover`;
            // if (stageTypers != "pf") {
            //     readSelection("mainGridRow").style.background = `url('/HonkaiSR/${directEntry.image || "mocBG/AbyssSenceBgl_Red_00.png"}') center / cover no-repeat`;
            // }

            if (stageTypers === "pf" || stageTypers === "apoc") {
                // readSelection("mainGridRow").style.background = `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),
                // url('/HonkaiSR/${directEntry.image}') center / cover no-repeat`;
                readSelection("pureFictionBannerImage").src = `/HonkaiSR/${directEntry.image}`
                // pfBannerString = `<img src="/HonkaiSR/${directEntry.image}" class="characterDisplayElementWeaknessIcon">`
            }


            // if (stageTypers === "apoc") {
            //     readSelection("pureFictionBannerImage").src = `/HonkaiSR/${directEntry.image}`
            //     // pfBannerString = `<img src="/HonkaiSR/${directEntry.image}" class="characterDisplayElementWeaknessIcon">`
            // }

            if (!isFarmingActivity) {
                readSelection("cardBoxIconTextVersion").innerHTML = directEntry.realName;
            }
            


            // patchName

            const hasPatchTitle = stageTypers === "anom";

            // stageTypers === "echo"



            const startStringer = stageTypers === "anom" || stageTypers === "echo" || stageTypers === "relic" ? (hasPatchTitle ? "Patch: " : "") + directEntry.patchName : directEntry.start?.split(" ")[0] + " - " + directEntry.end?.split(" ")[0];

            readSelection("versionUpdateValue").innerHTML = `<div class="toggleArrowBox" onclick="endgameModeDisplay.setEndgameDisplay(-1)">&#9664;</div>`
            + startStringer + `<div class="toggleArrowBox" onclick="endgameModeDisplay.setEndgameDisplay(1)">&#9654;</div>`;


            const currentFloors = directEntry.floorData;
            // console.log(directEntry)
            let floorCounts = Object.keys(currentFloors);
            let floorMin = +floorCounts[0];
            let floorMax = +floorCounts[floorCounts.length-1];

            // console.log(floorMax,floorMin,currentFloors[floorMax])

            if (currentFloor == null) {currentFloor = floorMax;}
            currentFloor = Math.max(floorMin,Math.min(floorMax,+currentFloor));


            // const currentStage = currentFloors[currentFloor] ?? currentFloors[15] ?? currentFloors[12] ?? currentFloors[6];
            const currentStage = currentFloors[currentFloor];
            

            const currentStageData = currentStage.stageDataObject;

            const boss1Guide = currentStage.boss1Guide;
            const boss2Guide = currentStage.boss2Guide;

            const abilitiesArray = currentStage.abilitiesArray;

            // console.log(boss1Guide)


            const side1 = currentStageData.stage1.stageDataArray;
            const side2 = currentStageData.stage2.stageDataArray;

            const descriptionToUse = directEntry.buffData?.desc && directEntry.buffData.desc != "undefined" ? pagePopulation.cleanDescription(directEntry.buffData.params,directEntry.buffData.desc) : "";
            // readSelection("mocDescriptionBox").innerHTML = descriptionToUse;


            readSelection("mocDescriptionBox").innerHTML = endgameModeDisplay.getBuffDisplayBox(directEntry.buffData,null,null,abilitiesArray);



            if (!descriptionToUse) {
                readSelection("mocDescriptionBox").style.display = "none";
            }
            else {
                readSelection("mocDescriptionBox").style.display = "block";
            }


            if (directEntry.buffList2?.length || directEntry.buffList1?.length || directEntry.kingBuffList?.length) {
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

                        list2Stringer += endgameModeDisplay.getBuffDisplayBox(buffEntry,`activityBuffDisplay2Box${selectorCounter2}`,setLength === selectorCounter2 && !firstBoxGenDCompleted && setLength>1);
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


                        // realModifierNamne
                        list1Stringer += endgameModeDisplay.getBuffDisplayBox(buffEntry,`activityBuffDisplay1Box${selectorCounter1}`,setLength === selectorCounter1 && !firstBoxGenDCompleted && setLength>1);
                    }
                    selector1Stringer += `</div>`;
                }


                let king1Stringer = "";
                let selector1KingStringer = "";
                
                if (directEntry.kingBuffList && directEntry.kingBuffList.length && (currentFloor === 4 || currentFloor === 5)) {
                    selector1KingStringer += `<div class="superimpositionHolderboxActivityButtons">`;
                    let selectorCounter1 = 0;
                    for (let buffEntry of directEntry.kingBuffList) {

                        const setLength = directEntry.kingBuffList.length;
                        selectorCounter1++;
                        selector1KingStringer += `<div class="superimpositionButtonActivityButton clickable" ${selectorCounter1 === setLength ? `style="background-color: rgb(225, 225, 228); color: black;"` : ""}
                        id="activityBuffDisplay3Button${selectorCounter1}" onclick="endgameModeDisplay.setActivityBuffDisplay(${selectorCounter1},3,${setLength})">${buffEntry.name}</div>`

                        // endgameModeDisplay.getBuffDisplayBox(buffEntry)
                        // id="activityBuffDisplay3Box${selectorCounter1}"
                        king1Stringer += endgameModeDisplay.getBuffDisplayBox(buffEntry,`activityBuffDisplay3Box${selectorCounter1}`,setLength === selectorCounter1 && !firstBoxGenDCompleted && setLength>1);
                    }
                    selector1KingStringer += `</div>`;
                }


                // if (list1Stringer) {
                //     list1Stringer = `<div class="statFiltersRowHeaderSides">Player Buff Options</div>` + list1Stringer;
                // }

                readSelection("PFDescriptionBox").innerHTML = selector1Stringer + list1Stringer + selector2Stringer + list2Stringer + selector1KingStringer + king1Stringer;
            }
            else if (readSelection("PFDescriptionBox") && adjustment == undefined) {readSelection("PFDescriptionBox").style.display = "none";}


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
                else if (+floorName === 5 && stageTypers === "anom") {
                    bgString = `background-color: #52001F; color: rgb(225, 225, 228);`
                }

                let knightsPrefix = stageTypers === "anom" && +floorName <= 3 ? "Knight " : "";

                let overrideString = "";

                if (stageTypers === "anom" && +floorName === 4) {overrideString = "King"}
                if (stageTypers === "anom" && +floorName === 5) {overrideString = "Plight"}

                floorStringer += `<div class="superimpositionButton clickable" id="superimpositionButton1" onclick="endgameModeDisplay.setEndgameDisplay(0,null,${floorName})" style="${bgString}">${knightsPrefix + (overrideString || floorName)}</div>`
            }
            readSelection("superimpositionHolderbox").innerHTML = floorStringer;
            

            let overrideMainBuffDescUsed = false;
            let battleEventAbilities = [];
            function getSideString(arraytoParse,sideNumber) {
                let waveCounter = 0;
                let returnString = "";
                for (let sideEntry of arraytoParse) {
                    let enemyLevel = sideEntry.enemyLevel;


                    let newScaleElite = sideEntry.scalarElite;
                    let newScaleHard = sideEntry.scalarHard;


                    


                    let buffOverride = sideEntry.buffOverride;
                    let checkBattleEventAbilities = sideEntry.battleEventAbilities;
                    if (buffOverride && !overrideMainBuffDescUsed) {
                        // ${pagePopulation.cleanDescription(buffEntry.params,buffEntry.desc)}
                        // readSelection("mocDescriptionBox").innerHTML = pagePopulation.cleanDescription(buffOverride.params,buffOverride.desc)


                        readSelection("mocDescriptionBox").innerHTML = endgameModeDisplay.getBuffDisplayBox(buffOverride);




                        readSelection("mocDescriptionBox").style.display = "block";
                        overrideMainBuffDescUsed = true;
                        console.log(`Override main desc: used`)
                    }
                    if (checkBattleEventAbilities && checkBattleEventAbilities.length) {
                        // ${pagePopulation.cleanDescription(buffEntry.params,buffEntry.desc)}
                        // readSelection("mocDescriptionBox").innerHTML = pagePopulation.cleanDescription(buffOverride.params,buffOverride.desc)


                        // readSelection("mocDescriptionBox").innerHTML = endgameModeDisplay.getBuffDisplayBox(buffOverride);

                        
                        for (let beAbilityEntry of checkBattleEventAbilities) {
                            let existingKey = beAbilityEntry.BEKey;
                            let hasMatch = false;

                            for (let beAbilityEntryOuter of battleEventAbilities) {
                                let existingKey2 = beAbilityEntryOuter.BEKey;

                                if (existingKey === existingKey2) {
                                    hasMatch = true;
                                    break
                                }
                                if (hasMatch) {break;}
                            }
                            if (!hasMatch) {
                                battleEventAbilities.push(beAbilityEntry);
                            }
                        }




                        // readSelection("mocDescriptionBox").style.display = "block";
                        // overrideMainBuffDescUsed = true;
                        // console.log(`Override main desc: used`)
                    }


                    

                    let modifierList = sideEntry.modifiersToAdd;
    
                    const waveArray = sideEntry.enemyList;
    
                    let allWavesString = `<div class="statFiltersRowHeaderSides">Part ${sideNumber}</div>`;
                    for (let waveEntry of waveArray) {
                        waveCounter++;
                        let wholeWaveString = "";

                        const isObject = typeof waveEntry === "object" && !Array.isArray(waveEntry);
                        const isPF = stageTypers === "pf" || stageTypers === "anom";

                        
                        

                        const entryToIterate = isPF ? waveEntry.enemies : waveEntry;

                        const potentialElite = waveEntry.scaleElite;
                        const potentialParams = waveEntry.params;

                        

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

                            let finalHPRows = `<div class="imageRowStatisticBox3">
                                    <div class="imageRowStatisticStatBox">${Math.floor(enemyEntry.hpBase).toLocaleString()}${enemyEntry.hpBars && enemyEntry.hpBars>1 ? ` x${enemyEntry.hpBars}` : ""}</div>
                                </div>`;

                            let finalToughnessRows = `<div class="imageRowStatisticBox1">
                                    <div class="imageRowStatisticImageBox"><img src="/HonkaiSR/icon/property/IconBreakUp.png" class="imageRowStatisticImage"></div>
                                    <div class="imageRowStatisticStatBox">${enemyEntry.toughnessBase}${!Array.isArray(enemyEntry.toughnessBase) && enemyEntry.toughnessBars && enemyEntry.toughnessBars>1 ? ` x${enemyEntry.toughnessBars}` : ""}</div>
                                </div>`


                            let isHPArray = false;
                            if (Array.isArray(enemyEntry.hpBase)) {
                                isHPArray = true;
                                finalHPRows = `<div class="imageRowStatisticBox1">
                                    <div class="imageRowStatisticImageBox"><img src="/HonkaiSR/icon/property/IconMaxHP.png" class="imageRowStatisticImage"></div>
                                    <div class="imageRowStatisticStatBox">HP/Phase</div>
                                </div>`;

                                let hpCounter = 0;
                                for (let hpValue of enemyEntry.hpBase) {
                                    hpCounter++;
                                    finalHPRows += `<div class="imageRowStatisticBox3PhaseData">
                                        <span>${hpCounter}:</span>
                                        <div class="imageRowStatisticStatBox">${Math.floor(hpValue).toLocaleString()}</div>
                                    </div>`
                                }


                                // finalHPRows += "</div>";
                            }

                            let isToughnessArray = false;
                            if (Array.isArray(enemyEntry.toughnessBase)) {
                                isToughnessArray = true;
                                finalToughnessRows = `<div class="imageRowStatisticBox1">
                                    <div class="imageRowStatisticImageBox"><img src="/HonkaiSR/icon/property/IconBreakUp.png" class="imageRowStatisticImage"></div>
                                    <div class="imageRowStatisticStatBox">T/Phase</div>
                                </div>`;

                                let hpCounter = 0;
                                for (let hpValue of enemyEntry.toughnessBase) {
                                    hpCounter++;
                                    finalToughnessRows += `<div class="imageRowStatisticBox3PhaseData">
                                        <span>${hpCounter}:</span>
                                        <div class="imageRowStatisticStatBox">${hpValue}${Array.isArray(enemyEntry.toughnessBars) ? ` x${enemyEntry.toughnessBars[hpCounter-1]}` : ` x${enemyEntry.toughnessBars}`}</div>
                                    </div>`
                                }


                                // finalHPRows += "</div>";
                            }



                            const isBigFucker = (isToughnessArray && isHPArray) || stageTypers === "echo" || (entryToIterate.length === 1 && stageTypers === "planar");
                            

                            
                            // newScaleHard,newScaleElite,enemyLevel,potentialElite
                            console.log(potentialElite,newScaleElite)
                            const seralize = {
                                ov: enemyEntry.id,
                                scH: newScaleHard,
                                scHL: enemyLevel,
                                scE: potentialElite ?? newScaleElite ?? 1,
                                wave: potentialParams?.length ? potentialParams.join(",") : [0,0].join(",")
                            };
                            const serialized = new URLSearchParams(seralize);



                            // onclick="endgameModeDisplay.linkToEnemy()"
                            wholeWaveString += `<a class="${isBigFucker ? "enemyWaveEnemyDisplayBoxWideEnemy" : "enemyWaveEnemyDisplayBox"}" href="/HonkaiSR/TheLibrary/EnemyConfigs/${enemyEntry.image}/?${serialized}" target="_blank">
    
                                <img src="/HonkaiSR/${enemyImage}" class="enemyWaveEnemyIcon">
                                <div class="enemyWaveEnemyLevel">${enemyLevel}</div>

                                ${isPF && counterObjectPF[enemyEntry.id]>1 ? `<div class="enemyWaveEnemyPFCount">x${counterObjectPF[enemyEntry.id]}</div>` : ""}
                                
    
                                <div class="enemyWaveEnemyDisplayBoxIDLinker clickable" >
                                    
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
    
                                ${!isBigFucker ? finalToughnessRows : ""}
    
                                
                                
                                ${!isBigFucker ? finalHPRows : ""}

                                ${isBigFucker ? `<div class="bigFuckerBoxRow bigFuckerBoxRowMobileAnom">
                                        <div class="bigFuckerBox">
                                            ${finalToughnessRows}
                                        </div>
                                        <div class="bigFuckerBox">
                                            ${finalHPRows}
                                        </div>

                                    </div>` : ""}
                                
                            </a>`
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
            function getGuideString(guideObject,sideNumber) {
                let overviewString = "";


                let optionList = [
                    "Traits",
                    "Strategy",
                    // "Mode",
                    // "Tips",
                ]

                // let listStringer = "";
                let selectorStringer = "";

                selectorStringer += `<div class="superimpositionHolderboxActivityButtons">`;


                let selectorCounter = 0;
                for (let buffEntry of optionList) {
                    const setLength = optionList.length;

                    selectorCounter++;
                    selectorStringer += `<div class="superimpositionButtonActivityButton clickable" ${selectorCounter === 1 ? `style="background-color: rgb(225, 225, 228); color: black;"` : ""}
                    id="activityBuffDisplay${sideNumber}GuideButton${selectorCounter}" onclick="endgameModeDisplay.setBossTraitDisplay(${selectorCounter},${sideNumber},${setLength})">${buffEntry}</div>`;

                }
                selectorStringer += `</div>`;


                overviewString += selectorStringer;



                




                const tagList = guideObject.tagList;
                selectorCounter = 1;
                let listStringer = "";
                for (let traceEntry of tagList) {
                    
                    // console.log(traceEntry)
                    // selectorCounter++;
                    const currentTraceRef = traceEntry;
                    // if (!currentTraceRef.desc && !currentTraceRef.skillRef) {continue}
        
                    // const traceIcon = currentTraceRef.icon;
                    const currentTraceRefSkill = currentTraceRef.skillRef;
                    const skillSlot = currentTraceRefSkill?.skillSlot;
        
        
                    const skillLevel = userTriggers.levelFloors[skillSlot];
        
                    let entryString = ``;

        
        
                    entryString += `
                    <div class="rotationsSectionRowHolder2Overview">
                    <div class="eidolonRowBoxHolder">
                        
                        <div class="rightDescriptionBoxEidolons smallFont">
                            <div class="eidolonRowName">
                                ${skillSlot ?? currentTraceRef.name}
                            </div>
                            
                    `;
                    // ${entry.desc}
        
        
        
                    
        
        
                    // "skillRef": {
                    //     "skillName": "I Choose You!",
                    //     "skillSlot": "Skill"
                    // }
                    if (currentTraceRefSkill) {
                        // const skillName = currentTraceRefSkill.skillName;
                        const skillSlot = currentTraceRefSkill.skillSlot;
        
                        const skillEntry = skillRef[skillSlot];
        
                        for (let innerSkill in skillEntry) {
                            const currentInnerSkill = skillEntry[innerSkill];
        
        
        
        
                            entryString += `
                                <div class="rotationsSectionRowHolder1Overview">
                                    <div class="eidolonRowBoxHolder">
                                        
                                            <div class="eidolonRowNameSkill">${innerSkill}</div>
        
                                    </div>
        
                                        
        
                                    `;
        
        
        
                            for (let innerSkillVariant in currentInnerSkill) {
                                const currentInnerSkillVariant = currentInnerSkill[innerSkillVariant];
        
                                const paramsCheck = currentInnerSkillVariant?.params[skillLevelStore[skillSlot]];
                                let paramsStringer = "";
                                if (paramsCheck?.length) {
        
                                    let paramString = "";
                                    let paramCounter = 0;
                                    for (let paramEntry of paramsCheck) {
                                        // console.log(paramEntry)
                                        paramString += `${paramEntry}${paramCounter != paramsCheck.length-1 ? ", " : ""}`;
                                        paramCounter++;
                                    }
                
                                    paramsStringer += `
                                        <div class="actionDetailBody">
                                            <div class="rotationConditionOperatorHeaderInlineParams">Parameters: [${paramString}]</div>
                                        </div>
                                    `
                                }
        
                                let paramString2 = "";
                                if (currentInnerSkillVariant.extraEffects && Object.keys(currentInnerSkillVariant.extraEffects).length) {
        
                                    // let paramString = "";
                                    let paramCounter = 0;
                                    for (let paramEntry in currentInnerSkillVariant.extraEffects) {
                                        const currentEffect = currentInnerSkillVariant.extraEffects[paramEntry];
                
                
                                        paramString2 += `<div class="rotationsSectionRowHolder3Overview">
                                            <div class="actionDetailBody">
                                                <div class="rotationConditionOperatorHeaderInlineParamsExtraEffectHeader">${paramEntry}</div>
                                            </div>
                                            <div class="actionDetailBody">
                                                <div class="actionDetailBody3Description">
                                                    ${pagePopulation.cleanDescription(currentEffect.params ?? [],currentEffect.desc)}
                                                </div>
                                            </div>
                                        </div>`;
                
                                        // paramString += `${paramEntry}${paramCounter != currentTraceRef.params.length-1 ? ", " : ""}`;
                                        // paramCounter++;
                                    }
                
                                    // entryString += `
                                    //     <div class="actionDetailBody">
                                    //         <div class="rotationConditionOperatorHeaderInlineParams">Parameters: [${paramString}]</div>
                                    //     </div>
                                    // `
                                    // entryString += paramString;
                                } 
        
        
                                entryString += `
                                    <div class="rotationsSectionRowHolder3Overview">
                                        <div class="eidolonRowBoxHolder">
                                            
                                            <div class="rightDescriptionBoxEidolons smallFont">
                                                <div class="eidolonRowNameTrigger">${currentInnerSkillVariant.trigger}${currentInnerSkillVariant.type ? ` <span class="traceAttackTargetType">[${currentInnerSkillVariant.type}]</span>` : ""}</div>
        
                                            </div>
        
                                            
        
                                        </div>
        
                                        <div class="overviewSkillDataBox">
                                            
                                        
                                            ${(currentInnerSkillVariant.skillPointCost || currentInnerSkillVariant.skillPointGain) ? `<div class="traceToughnessBoxOverviewSkill">
                                                <div class="traceToughnessTitleBox">Skill Points</div>
                                                <div class="traceToughnessValueBox">${currentInnerSkillVariant.skillPointGain ? "+" : "-"}${currentInnerSkillVariant.skillPointCost || currentInnerSkillVariant.skillPointGain}</div>
                                            </div>` : ""}
                                            ${currentInnerSkillVariant.energyCost ? `<div class="traceToughnessBoxOverviewSkill">
                                                <div class="traceToughnessTitleBox">Energy Cost</div>
                                                <div class="traceToughnessValueBox">${currentInnerSkillVariant.energyCost}</div>
                                            </div>` : ""}
                                            ${currentInnerSkillVariant.energyRegen ? `<div class="traceToughnessBoxOverviewSkill">
                                                <div class="traceToughnessTitleBox">Energy</div>
                                                <div class="traceToughnessValueBox">${currentInnerSkillVariant.energyRegen}</div>
                                            </div>` : ""}
        
                                            ${currentInnerSkillVariant.toughnessList?.length ? `<div class="traceToughnessBoxOverviewSkill" style="background-color: transparent">
                                                <div class="traceToughnessTitleBoxToughnessRow">
                                                    ${currentInnerSkillVariant.toughnessList[0].Value ? `ST[<span class="traceToughnessValueBoxToughness">${currentInnerSkillVariant.toughnessList[0].Value/3}</span>] ` : ""}
                                                    ${currentInnerSkillVariant.toughnessList[1].Value ? `AOE[<span class="traceToughnessValueBoxToughness">${currentInnerSkillVariant.toughnessList[1].Value/3}</span>] ` : ""}
                                                    ${currentInnerSkillVariant.toughnessList[2].Value ? `Blast[<span class="traceToughnessValueBoxToughness">${currentInnerSkillVariant.toughnessList[2].Value/3}</span>] ` : ""}
                                                </div>
                                            </div>` : ""}
                                            
                                        </div>
                                        
        
                                        <div class="actionDetailBody">
                                            <div class="actionDetailBody2Description">
                                                ${pagePopulation.cleanDescription(paramsCheck ?? [],currentInnerSkillVariant.desc)}
                                            </div>
                                        </div>
                                        ${paramsStringer}
                                        ${paramString2}
                                    </div>`;
                            }
        
                            entryString += `
        
                                </div>`
        
                            // trigger
        
        
                            // const paramsCheck = currentInnerSkill.variant1?.params[skillLevel];
                            // let paramsStringer = "";
                            // if (paramsCheck?.length) {
        
                            //     let paramString = "";
                            //     let paramCounter = 0;
                            //     for (let paramEntry of paramsCheck) {
                            //         // console.log(paramEntry)
                            //         paramString += `${paramEntry}${paramCounter != paramsCheck.length-1 ? ", " : ""}`;
                            //         paramCounter++;
                            //     }
            
                            //     paramsStringer += `<div class="rotationsSectionRowHolder2Overview">
                            //         <div class="actionDetailBody">
                            //             <div class="rotationConditionOperatorHeaderInline">Parameters: [${paramString}]</div>
                            //         </div>
                            //     </div>`
                            // }
        
        
                            // entryString += `
                            //     <div class="rotationsSectionRowHolder1Overview">
                            //         <div class="eidolonRowBoxHolder">
                                        
                            //             <div class="rightDescriptionBoxEidolons smallFont">
                            //                 <div class="eidolonRowName">${innerSkill}</div>
        
                            //             </div>
        
                                        
        
                            //         </div>
        
                            //         <div class="actionDetailBody">
                            //             <div class="actionDetailBody2Description">
                            //                 ${pagePopulation.cleanDescription(paramsCheck ?? [],currentInnerSkill.variant1.desc)}
                            //             </div>
                            //         </div>
                            //         ${paramsStringer}
                            //     </div>`;
                        }
        
        
                        // entryString += `<div class="rotationsSectionRowHolder1Overview">
                        //     <div class="actionDetailBody">
                        //         <div class="rotationConditionOperatorHeaderInline">Description:</div>&nbsp;
                        //         <div class="actionDetailBody2Description">
                        //         ${pagePopulation.cleanDescription(currentTraceRef.params,currentTraceRef.desc)}
                        //         </div>
                        //     </div>
                        // </div>`
        
        
                    }
                    else {
        
                        // ${pagePopulation.cleanDescription(lightconeRef.params[currentLCSuperimposition-1],lightconeRef.desc)}
                        entryString += `<div class="rotationsSectionRowHolder1Overview">
                            <div class="actionDetailBody">
                                <div class="actionDetailBody2Description">
                                    ${pagePopulation.cleanDescription(currentTraceRef.params ?? [],currentTraceRef.desc ?? "")}
                                </div>
                            </div>
                        `
        
                        if (currentTraceRef.params?.length) {
        
                            let paramString = "";
                            let paramCounter = 0;
                            for (let paramEntry of currentTraceRef.params) {
                                paramString += `${paramEntry}${paramCounter != currentTraceRef.params.length-1 ? ", " : ""}`;
                                paramCounter++;
                            }
        
                            entryString += `
                                <div class="actionDetailBody">
                                    <div class="rotationConditionOperatorHeaderInlineParams">Parameters: [${paramString}]</div>
                                </div>
                            `
                        }
        
                        if (currentTraceRef.extraEffects && Object.keys(currentTraceRef.extraEffects).length) {
        
                            let paramString = "";
                            let paramCounter = 0;
                            for (let paramEntry in currentTraceRef.extraEffects) {
                                const currentValue = currentTraceRef.extraEffects[paramEntry];
                                const numChecker = typeof currentValue === "number";
                                const currentEffect = numChecker ? modifiersExtraEffects[currentValue] : currentValue;
                                
                                // if (typeof currentEffect === "number") {
                                //     modifiersExtraEffects
                                // }
                                // else {
        
                                    paramString += `<div class="rotationsSectionRowHolder3Overview">
                                        <div class="actionDetailBody">
                                            <div class="rotationConditionOperatorHeaderInlineParamsExtraEffectHeader">${numChecker ? modifiersExtraEffects[currentValue].name : paramEntry}</div>
                                        </div>
                                        <div class="actionDetailBody">
                                            <div class="actionDetailBody3DescriptionExtra">
                                                ${pagePopulation.cleanDescription(currentEffect.params ?? [],currentEffect.desc)}
                                            </div>
                                        </div>
                                    </div>`;
                                // }
        
                                // paramString += `${paramEntry}${paramCounter != currentTraceRef.params.length-1 ? ", " : ""}`;
                                // paramCounter++;
                            }
        
                            // entryString += `
                            //     <div class="actionDetailBody">
                            //         <div class="rotationConditionOperatorHeaderInlineParams">Parameters: [${paramString}]</div>
                            //     </div>
                            // `
                            entryString += paramString;
                        } 
        
                        entryString += `</div>`
                    }
        
        
        
                    entryString += `</div>
                    </div>
                    </div>`;



                    listStringer += entryString;
                    // <div class="eidolonRowBoxHolder">
                            
                    //         <div class="rightDescriptionBoxEidolons smallFont">
                    //             <div class="eidolonRowNameTrigger">${buffEntry.name}</div>
                    //         </div>
                    //     </div>
                        

                    //     <div class="actionDetailBody">
                    //         <div class="actionDetailBody2Description">
                    //             ${pagePopulation.cleanDescription(buffEntry.params,buffEntry.desc)}
                    //         </div>
                    //     </div>
                        
                    //     <div class="actionDetailBody">
                    //         <div class="rotationConditionOperatorHeaderInlineParams">Parameters: [${buffEntry.params}]</div>
                    //     </div>
        
                    
                    
                }
                listStringer = `<div class="rotationsSectionRowHolder2Overview" id="activityBuffDisplay${sideNumber}GuideOverview${selectorCounter}" style="display: ${selectorCounter === 1 ? "flex" : "none"}">
                <div class="customMenuSearchNote">
                    PLEASE NOTE: Unique to Apocalyptic Shadow, the abilities listed here are baked INTO the enemies themselves.<br>
                    To see the event-readers for these bonuses, simply open the enemy's page.
                </div>
                    ${listStringer}
                
                </div>`;
                overviewString += listStringer;








                const textList = guideObject.textList;
                // selectorCounter = 4;
                listStringerText = "";
                for (let traceEntry of textList) {
                    // let listStringer = "";
                    // selectorCounter++;
                    const currentTraceRef = traceEntry;
                    // if (!currentTraceRef.desc && !currentTraceRef.skillRef) {continue}
        
                    // const traceIcon = currentTraceRef.icon;
                    const currentTraceRefSkill = currentTraceRef.skillRef;
                    const skillSlot = currentTraceRefSkill?.skillSlot;
        
        
                    const skillLevel = userTriggers.levelFloors[skillSlot];
        
                    let entryString = "";
        
        
        
                    // entryString += `
                    // <div class="rotationsSectionRowHolder2Overview">
                    // <div class="eidolonRowBoxHolder">
                        
                    //     <div class="rightDescriptionBoxEidolons smallFont">
                            
                    // `;
                    // ${entry.desc}
        
        
        
                    
        
        
                    // "skillRef": {
                    //     "skillName": "I Choose You!",
                    //     "skillSlot": "Skill"
                    // }
        
                    // ${pagePopulation.cleanDescription(lightconeRef.params[currentLCSuperimposition-1],lightconeRef.desc)}
                    entryString += `
                            <li class="actionDetailBody2Description">
                                ${pagePopulation.cleanDescription(currentTraceRef.params ?? [],currentTraceRef.desc)}
                            </li>
                    `
    
                    if (currentTraceRef.params?.length) {
    
                        let paramString = "";
                        let paramCounter = 0;
                        for (let paramEntry of currentTraceRef.params) {
                            paramString += `${paramEntry}${paramCounter != currentTraceRef.params.length-1 ? ", " : ""}`;
                            paramCounter++;
                        }
    
                        entryString += `
                                <div class="rotationConditionOperatorHeaderInlineParams">Parameters: [${paramString}]</div>
                        `
                    }
    
                    if (currentTraceRef.extraEffects && Object.keys(currentTraceRef.extraEffects).length) {
    
                        let paramString = "";
                        let paramCounter = 0;
                        for (let paramEntry in currentTraceRef.extraEffects) {
                            const currentValue = currentTraceRef.extraEffects[paramEntry];
                            const numChecker = typeof currentValue === "number";
                            const currentEffect = numChecker ? modifiersExtraEffects[currentValue] : currentValue;
                            
                            // if (typeof currentEffect === "number") {
                            //     modifiersExtraEffects
                            // }
                            // else {
    
                                paramString += `<div class="rotationsSectionRowHolder3Overview">
                                    <div class="actionDetailBody">
                                        <div class="rotationConditionOperatorHeaderInlineParamsExtraEffectHeader">${numChecker ? modifiersExtraEffects[currentValue].name : paramEntry}</div>
                                    </div>
                                    <div class="actionDetailBody">
                                        <div class="actionDetailBody3DescriptionExtra">
                                            ${pagePopulation.cleanDescription(currentEffect.params ?? [],currentEffect.desc)}
                                        </div>
                                    </div>
                                </div>`;
                            // }
    
                            // paramString += `${paramEntry}${paramCounter != currentTraceRef.params.length-1 ? ", " : ""}`;
                            // paramCounter++;
                        }
    
                        // entryString += `
                        //     <div class="actionDetailBody">
                        //         <div class="rotationConditionOperatorHeaderInlineParams">Parameters: [${paramString}]</div>
                        //     </div>
                        // `
                        entryString += paramString;
                    } 
    
                    entryString += ``;
        
        
        
                    entryString += `
                    
                    `;



                    listStringerText += entryString;
                    // <div class="eidolonRowBoxHolder">
                            
                    //         <div class="rightDescriptionBoxEidolons smallFont">
                    //             <div class="eidolonRowNameTrigger">${buffEntry.name}</div>
                    //         </div>
                    //     </div>
                        

                    //     <div class="actionDetailBody">
                    //         <div class="actionDetailBody2Description">
                    //             ${pagePopulation.cleanDescription(buffEntry.params,buffEntry.desc)}
                    //         </div>
                    //     </div>
                        
                    //     <div class="actionDetailBody">
                    //         <div class="rotationConditionOperatorHeaderInlineParams">Parameters: [${buffEntry.params}]</div>
                    //     </div>
        
                    // overviewString += listStringer;
                    
                }




                const phaseList = guideObject.phaseList;
                selectorCounter = 2;
                listStringer = "";
                for (let traceEntry of phaseList) {
                    
                    // console.log(traceEntry)
                    // selectorCounter++;
                    const currentTraceRef = traceEntry;
                    // if (!currentTraceRef.desc && !currentTraceRef.skillRef) {continue}
        
                    // const traceIcon = currentTraceRef.icon;
                    const currentTraceRefSkill = currentTraceRef.skillRef;
                    const skillSlot = currentTraceRefSkill?.skillSlot;
        
        
                    const skillLevel = userTriggers.levelFloors[skillSlot];
        
                    let entryString = "";
        
        
        
                    entryString += `
                    <div class="rotationsSectionRowHolder2Overview">
                    <div class="eidolonRowBoxHolder">
                        
                        <div class="rightDescriptionBoxEidolons smallFont">
                            <div class="eidolonRowName">
                                ${skillSlot ?? currentTraceRef.name}
                            </div>

                            


                            
                            
                    `;
                    // ${entry.desc}
        
        
        
                    
        
        
                    // "skillRef": {
                    //     "skillName": "I Choose You!",
                    //     "skillSlot": "Skill"
                    // }
                    if (currentTraceRefSkill) {
                        // const skillName = currentTraceRefSkill.skillName;
                        const skillSlot = currentTraceRefSkill.skillSlot;
        
                        const skillEntry = skillRef[skillSlot];
        
                        for (let innerSkill in skillEntry) {
                            const currentInnerSkill = skillEntry[innerSkill];
        
        
        
        
                            entryString += `
                                <div class="rotationsSectionRowHolder1Overview">
                                    <div class="eidolonRowBoxHolder">
                                        
                                            <div class="eidolonRowNameSkill">${innerSkill}</div>
        
                                    </div>
        
                                        
        
                                    `;
        
        
        
                            for (let innerSkillVariant in currentInnerSkill) {
                                const currentInnerSkillVariant = currentInnerSkill[innerSkillVariant];
        
                                const paramsCheck = currentInnerSkillVariant?.params[skillLevelStore[skillSlot]];
                                let paramsStringer = "";
                                if (paramsCheck?.length) {
        
                                    let paramString = "";
                                    let paramCounter = 0;
                                    for (let paramEntry of paramsCheck) {
                                        // console.log(paramEntry)
                                        paramString += `${paramEntry}${paramCounter != paramsCheck.length-1 ? ", " : ""}`;
                                        paramCounter++;
                                    }
                
                                    paramsStringer += `
                                        <div class="actionDetailBody">
                                            <div class="rotationConditionOperatorHeaderInlineParams">Parameters: [${paramString}]</div>
                                        </div>
                                    `
                                }
        
                                let paramString2 = "";
                                if (currentInnerSkillVariant.extraEffects && Object.keys(currentInnerSkillVariant.extraEffects).length) {
        
                                    // let paramString = "";
                                    let paramCounter = 0;
                                    for (let paramEntry in currentInnerSkillVariant.extraEffects) {
                                        const currentEffect = currentInnerSkillVariant.extraEffects[paramEntry];
                
                
                                        paramString2 += `<div class="rotationsSectionRowHolder3Overview">
                                            <div class="actionDetailBody">
                                                <div class="rotationConditionOperatorHeaderInlineParamsExtraEffectHeader">${paramEntry}</div>
                                            </div>
                                            <div class="actionDetailBody">
                                                <div class="actionDetailBody3Description">
                                                    ${pagePopulation.cleanDescription(currentEffect.params ?? [],currentEffect.desc)}
                                                </div>
                                            </div>
                                        </div>`;
                
                                        // paramString += `${paramEntry}${paramCounter != currentTraceRef.params.length-1 ? ", " : ""}`;
                                        // paramCounter++;
                                    }
                
                                    // entryString += `
                                    //     <div class="actionDetailBody">
                                    //         <div class="rotationConditionOperatorHeaderInlineParams">Parameters: [${paramString}]</div>
                                    //     </div>
                                    // `
                                    // entryString += paramString;
                                } 
        
        
                                entryString += `
                                    <div class="rotationsSectionRowHolder3Overview">
                                        <div class="eidolonRowBoxHolder">
                                            
                                            <div class="rightDescriptionBoxEidolons smallFont">
                                                <div class="eidolonRowNameTrigger">${currentInnerSkillVariant.trigger}${currentInnerSkillVariant.type ? ` <span class="traceAttackTargetType">[${currentInnerSkillVariant.type}]</span>` : ""}</div>
        
                                            </div>
        
                                            
        
                                        </div>
        
                                        <div class="overviewSkillDataBox">
                                            
                                        
                                            ${(currentInnerSkillVariant.skillPointCost || currentInnerSkillVariant.skillPointGain) ? `<div class="traceToughnessBoxOverviewSkill">
                                                <div class="traceToughnessTitleBox">Skill Points</div>
                                                <div class="traceToughnessValueBox">${currentInnerSkillVariant.skillPointGain ? "+" : "-"}${currentInnerSkillVariant.skillPointCost || currentInnerSkillVariant.skillPointGain}</div>
                                            </div>` : ""}
                                            ${currentInnerSkillVariant.energyCost ? `<div class="traceToughnessBoxOverviewSkill">
                                                <div class="traceToughnessTitleBox">Energy Cost</div>
                                                <div class="traceToughnessValueBox">${currentInnerSkillVariant.energyCost}</div>
                                            </div>` : ""}
                                            ${currentInnerSkillVariant.energyRegen ? `<div class="traceToughnessBoxOverviewSkill">
                                                <div class="traceToughnessTitleBox">Energy</div>
                                                <div class="traceToughnessValueBox">${currentInnerSkillVariant.energyRegen}</div>
                                            </div>` : ""}
        
                                            ${currentInnerSkillVariant.toughnessList?.length ? `<div class="traceToughnessBoxOverviewSkill" style="background-color: transparent">
                                                <div class="traceToughnessTitleBoxToughnessRow">
                                                    ${currentInnerSkillVariant.toughnessList[0].Value ? `ST[<span class="traceToughnessValueBoxToughness">${currentInnerSkillVariant.toughnessList[0].Value/3}</span>] ` : ""}
                                                    ${currentInnerSkillVariant.toughnessList[1].Value ? `AOE[<span class="traceToughnessValueBoxToughness">${currentInnerSkillVariant.toughnessList[1].Value/3}</span>] ` : ""}
                                                    ${currentInnerSkillVariant.toughnessList[2].Value ? `Blast[<span class="traceToughnessValueBoxToughness">${currentInnerSkillVariant.toughnessList[2].Value/3}</span>] ` : ""}
                                                </div>
                                            </div>` : ""}
                                            
                                        </div>
                                        
        
                                        <div class="actionDetailBody">
                                            <div class="actionDetailBody2Description">
                                                ${pagePopulation.cleanDescription(paramsCheck ?? [],currentInnerSkillVariant.desc)}
                                            </div>
                                        </div>
                                        ${paramsStringer}
                                        ${paramString2}
                                    </div>`;
                            }
        
                            entryString += `
        
                                </div>`
        
                            // trigger
        
        
                            // const paramsCheck = currentInnerSkill.variant1?.params[skillLevel];
                            // let paramsStringer = "";
                            // if (paramsCheck?.length) {
        
                            //     let paramString = "";
                            //     let paramCounter = 0;
                            //     for (let paramEntry of paramsCheck) {
                            //         // console.log(paramEntry)
                            //         paramString += `${paramEntry}${paramCounter != paramsCheck.length-1 ? ", " : ""}`;
                            //         paramCounter++;
                            //     }
            
                            //     paramsStringer += `<div class="rotationsSectionRowHolder2Overview">
                            //         <div class="actionDetailBody">
                            //             <div class="rotationConditionOperatorHeaderInline">Parameters: [${paramString}]</div>
                            //         </div>
                            //     </div>`
                            // }
        
        
                            // entryString += `
                            //     <div class="rotationsSectionRowHolder1Overview">
                            //         <div class="eidolonRowBoxHolder">
                                        
                            //             <div class="rightDescriptionBoxEidolons smallFont">
                            //                 <div class="eidolonRowName">${innerSkill}</div>
        
                            //             </div>
        
                                        
        
                            //         </div>
        
                            //         <div class="actionDetailBody">
                            //             <div class="actionDetailBody2Description">
                            //                 ${pagePopulation.cleanDescription(paramsCheck ?? [],currentInnerSkill.variant1.desc)}
                            //             </div>
                            //         </div>
                            //         ${paramsStringer}
                            //     </div>`;
                        }
        
        
                        // entryString += `<div class="rotationsSectionRowHolder1Overview">
                        //     <div class="actionDetailBody">
                        //         <div class="rotationConditionOperatorHeaderInline">Description:</div>&nbsp;
                        //         <div class="actionDetailBody2Description">
                        //         ${pagePopulation.cleanDescription(currentTraceRef.params,currentTraceRef.desc)}
                        //         </div>
                        //     </div>
                        // </div>`
        
        
                    }
                    else {
        
                        // ${pagePopulation.cleanDescription(lightconeRef.params[currentLCSuperimposition-1],lightconeRef.desc)}
                        entryString += `<div class="rotationsSectionRowHolder1OverviewStratDescBox">
                            <div class="actionDetailBody">
                                <div class="actionDetailBody2DescriptionStratDesc">
                                    ${pagePopulation.cleanDescription(currentTraceRef.params ?? [],currentTraceRef.desc)}
                                </div>
                            </div>
                        `
        
                        if (currentTraceRef.params?.length) {
        
                            let paramString = "";
                            let paramCounter = 0;
                            for (let paramEntry of currentTraceRef.params) {
                                paramString += `${paramEntry}${paramCounter != currentTraceRef.params.length-1 ? ", " : ""}`;
                                paramCounter++;
                            }
        
                            entryString += `
                                <div class="actionDetailBody">
                                    <div class="rotationConditionOperatorHeaderInlineParams">Parameters: [${paramString}]</div>
                                </div>
                            `
                        }
        
                        if (currentTraceRef.extraEffects && Object.keys(currentTraceRef.extraEffects).length) {
        
                            let paramString = "";
                            let paramCounter = 0;
                            for (let paramEntry in currentTraceRef.extraEffects) {
                                const currentValue = currentTraceRef.extraEffects[paramEntry];
                                const numChecker = typeof currentValue === "number";
                                const currentEffect = numChecker ? modifiersExtraEffects[currentValue] : currentValue;
                                
                                // if (typeof currentEffect === "number") {
                                //     modifiersExtraEffects
                                // }
                                // else {
        
                                    paramString += `<div class="rotationsSectionRowHolder3Overview">
                                        <div class="actionDetailBody">
                                            <div class="rotationConditionOperatorHeaderInlineParamsExtraEffectHeader">${numChecker ? modifiersExtraEffects[currentValue].name : paramEntry}</div>
                                        </div>
                                        <div class="actionDetailBody">
                                            <div class="actionDetailBody3DescriptionExtra">
                                                ${pagePopulation.cleanDescription(currentEffect.params ?? [],currentEffect.desc)}
                                            </div>
                                        </div>
                                    </div>`;
                                // }
        
                                // paramString += `${paramEntry}${paramCounter != currentTraceRef.params.length-1 ? ", " : ""}`;
                                // paramCounter++;
                            }
        
                            // entryString += `
                            //     <div class="actionDetailBody">
                            //         <div class="rotationConditionOperatorHeaderInlineParams">Parameters: [${paramString}]</div>
                            //     </div>
                            // `
                            entryString += paramString;
                        } 
        
                        entryString += `</div>
                        <div class="eidolonRowNameStrategy">
                                ${skillSlot ?? currentTraceRef.answer}
                            </div>`;
                    }



                    const skillList = traceEntry.skillList;

                    let skillListString = "";
                    if (skillList?.length) {
                        // name
                        // descData

                        for (let skillListEntry of skillList) {
                            skillListString += `
                                <div class="rotationsSectionRowHolder2Overview">
                                <div class="eidolonRowBoxHolder">
                                    
                                    <div class="rightDescriptionBoxEidolons smallFont">
                                        <div class="eidolonRowNameStratCounterTitle">
                                            <img src="/HonkaiSR/icon/sign/CommonTabIcon.png" class="cardBoxGameModeStratIcon">
                                            ${skillListEntry.name}
                                        </div>
                            `;


                            const descriptionsArray = skillListEntry.descData;

                            let descStringer = "";
                            for (let descDataEntry of descriptionsArray) {
                                
                                descStringer += `<div class="rotationsSectionRowHolder1OverviewStratDescBox">
                                    <div class="actionDetailBody">
                                        <div class="actionDetailBody2DescriptionStratDesc">
                                            ${pagePopulation.cleanDescription(descDataEntry.params ?? [],descDataEntry.desc)}
                                        </div>
                                    </div>
                                `
                
                                if (descDataEntry.params?.length) {
                
                                    let paramString = "";
                                    let paramCounter = 0;
                                    for (let paramEntry of descDataEntry.params) {
                                        paramString += `${paramEntry}${paramCounter != descDataEntry.params.length-1 ? ", " : ""}`;
                                        paramCounter++;
                                    }
                
                                    descStringer += `
                                        <div class="actionDetailBody">
                                            <div class="rotationConditionOperatorHeaderInlineParams">Parameters: [${paramString}]</div>
                                        </div>
                                    `
                                }
                
                                if (descDataEntry.extraEffects && Object.keys(descDataEntry.extraEffects).length) {
                
                                    let paramString = "";
                                    let paramCounter = 0;
                                    for (let paramEntry in descDataEntry.extraEffects) {
                                        const currentValue = descDataEntry.extraEffects[paramEntry];
                                        const numChecker = typeof currentValue === "number";
                                        const currentEffect = numChecker ? modifiersExtraEffects[currentValue] : currentValue;
                                        
                                        // if (typeof currentEffect === "number") {
                                        //     modifiersExtraEffects
                                        // }
                                        // else {
                
                                            paramString += `<div class="rotationsSectionRowHolder3Overview">
                                                <div class="actionDetailBody">
                                                    <div class="rotationConditionOperatorHeaderInlineParamsExtraEffectHeader">${numChecker ? modifiersExtraEffects[currentValue].name : paramEntry}</div>
                                                </div>
                                                <div class="actionDetailBody">
                                                    <div class="actionDetailBody3DescriptionExtra">
                                                        ${pagePopulation.cleanDescription(currentEffect.params ?? [],currentEffect.desc)}
                                                    </div>
                                                </div>
                                            </div>`;
                                        // }
                
                                        // paramString += `${paramEntry}${paramCounter != currentTraceRef.params.length-1 ? ", " : ""}`;
                                        // paramCounter++;
                                    }
                
                                    // entryString += `
                                    //     <div class="actionDetailBody">
                                    //         <div class="rotationConditionOperatorHeaderInlineParams">Parameters: [${paramString}]</div>
                                    //     </div>
                                    // `
                                    descStringer += paramString;
                                } 
                
                                descStringer += `</div>`;

                            }















                            skillListString += descStringer + `</div></div></div>`;
                        }

                        
                    }
        
        
        
                    entryString += skillListString + `</div>
                    </div>
                    </div>`;



                    listStringer += entryString;
                    // <div class="eidolonRowBoxHolder">
                            
                    //         <div class="rightDescriptionBoxEidolons smallFont">
                    //             <div class="eidolonRowNameTrigger">${buffEntry.name}</div>
                    //         </div>
                    //     </div>
                        

                    //     <div class="actionDetailBody">
                    //         <div class="actionDetailBody2Description">
                    //             ${pagePopulation.cleanDescription(buffEntry.params,buffEntry.desc)}
                    //         </div>
                    //     </div>
                        
                    //     <div class="actionDetailBody">
                    //         <div class="rotationConditionOperatorHeaderInlineParams">Parameters: [${buffEntry.params}]</div>
                    //     </div>
        
                    
                    
                }
                listStringer = `<div class="rotationsSectionRowHolder2Overview" id="activityBuffDisplay${sideNumber}GuideOverview${selectorCounter}" style="display: ${selectorCounter === 1 ? "flex" : "none"}">

                
                    <div class="apocBossTipsBox">
                        <ul>
                        ${listStringerText}
                        </ul>
                    </div>

                    ${listStringer}
                
                </div>`;
                overviewString += listStringer;









                

                return overviewString;
            }
            

            let side1String = getSideString(side1,1);
            let side2String = getSideString(side2,2);
            
            let guide1String = boss1Guide ? getGuideString(boss1Guide,1) : "";
            let guide2String = boss2Guide ? getGuideString(boss2Guide,2) : "";
            // boss1Guide



            readSelection("mocEachSide1").innerHTML = side1String + guide1String;
            if (!isFarmingActivity) {
                readSelection("mocEachSide2").innerHTML = side2String + guide2String;
            }
            else if (!farmingPagePopSelectionsDone) {
                farmingPagePopSelectionsDone = true;


                // let dropsList = directEntry.realDropList;
                let dropsStringer = `<div class="mainSelectionHeaderRowDropsHolderBox">`;
                
                let indexTracker = 0;
                for (let zz = mocSchedule.length-1;zz>=0;zz--) {
                    let mocEntry = mocSchedule[zz];
                    // <a class="mainSelectionHeader" href="/HonkaiSR/TheLibrary/Modifiers/" rel="noopener noreferrer">Effects</a>
                    let dropImageStringer = "";
                    for (let imageEntry of mocEntry.realDropList) {
                        dropImageStringer += `<img src="/HonkaiSR/icon/item/${imageEntry}" class="cardBoxGameModeIconDrop"/>`
                    }

                    // <img src="/HonkaiSR/icon/sign/AbyssIcon01.png" class="cardBoxGameModeIcon"></img>

                    let firstEntryStyle = "";
                    if (indexTracker === 0) {
                        firstEntryStyle = `style="background: linear-gradient(-90deg, transparent,transparent,transparent,#ffffff3b);"`
                    }


                    dropsStringer += `<div class="mainSelectionHeaderRowDropsBox clickable" id="farmingBoxRow${zz}" onclick="endgameModeDisplay.setEndgameDisplay(null,null,null,${zz})" ${firstEntryStyle}>
                        <div class="mainSelectionHeaderRowDropsHeader">${mocEntry.realName}</div>
                        <div class="mainSelectionHeaderRowDrops">
                            ${dropImageStringer}
                        </div>
                    </div>`
                    indexTracker++;
                }
                dropsStringer += `</div>`;


                readSelection("mocEachSide2").innerHTML = dropsStringer;


            }
            



            if (stageTypers === "anom") {



                const tagList = currentStage.tagList;
                // selectorCounter = 1;
                let listStringer = "";
                for (let traceEntry of tagList) {
                    
                    // console.log(traceEntry)
                    // selectorCounter++;
                    const currentTraceRef = traceEntry;
                    // if (!currentTraceRef.desc && !currentTraceRef.skillRef) {continue}
        
                    // const traceIcon = currentTraceRef.icon;
                    const currentTraceRefSkill = currentTraceRef.skillRef;
                    const skillSlot = currentTraceRefSkill?.skillSlot;
        
        
                    const skillLevel = userTriggers.levelFloors[skillSlot];
        
                    let entryString = "";
        
        
        
                    entryString += `
                    <div class="rotationsSectionRowHolder2Overview">
                    <div class="eidolonRowBoxHolder">
                        
                        <div class="rightDescriptionBoxEidolons smallFont">
                            <div class="eidolonRowName">
                                ${skillSlot ?? currentTraceRef.name}
                            </div>
                            
                    `;
                    // ${entry.desc}
        
        
        
        
                    // ${pagePopulation.cleanDescription(lightconeRef.params[currentLCSuperimposition-1],lightconeRef.desc)}
                    entryString += `<div class="rotationsSectionRowHolder1Overview">
                        <div class="actionDetailBody">
                            <div class="actionDetailBody2Description">
                                ${pagePopulation.cleanDescription(currentTraceRef.params ?? [],currentTraceRef.desc ?? "")}
                            </div>
                        </div>
                        
                
                
            </div>
                    `
    
                    if (currentTraceRef.params?.length) {
    
                        let paramString = "";
                        let paramCounter = 0;
                        for (let paramEntry of currentTraceRef.params) {
                            paramString += `${paramEntry}${paramCounter != currentTraceRef.params.length-1 ? ", " : ""}`;
                            paramCounter++;
                        }
    
                        entryString += `
                            <div class="actionDetailBody">
                                <div class="rotationConditionOperatorHeaderInlineParams">Parameters: [${paramString}]</div>
                            </div>
                        `
                    }


                    entryString += `<div class="actionDetailBody">
                            ${currentTraceRef.BEKey ? `<a class="exportIconBoxHolderBuffButton clickable" href="/HonkaiSR/TheLibrary/AbilityConfigsBE/${currentTraceRef.BEKey}/#${encodeURIComponent(currentTraceRef.realModifierNamne)}" target="_blank">
                                Go to Buff&nbsp;
                                <img src="/HonkaiSR/misc/export.png" class="exportButtonIcon">
                            </a>` : ""}
                        </div>`
    
                    if (currentTraceRef.extraEffects && Object.keys(currentTraceRef.extraEffects).length) {
    
                        let paramString = "";
                        let paramCounter = 0;
                        for (let paramEntry in currentTraceRef.extraEffects) {
                            const currentValue = currentTraceRef.extraEffects[paramEntry];
                            const numChecker = typeof currentValue === "number";
                            const currentEffect = numChecker ? modifiersExtraEffects[currentValue] : currentValue;
                            
                            // if (typeof currentEffect === "number") {
                            //     modifiersExtraEffects
                            // }
                            // else {
    
                                paramString += `<div class="rotationsSectionRowHolder3Overview">
                                    <div class="actionDetailBody">
                                        <div class="rotationConditionOperatorHeaderInlineParamsExtraEffectHeader">${numChecker ? modifiersExtraEffects[currentValue].name : paramEntry}</div>
                                    </div>
                                    <div class="actionDetailBody">
                                        <div class="actionDetailBody3DescriptionExtra">
                                            ${pagePopulation.cleanDescription(currentEffect.params ?? [],currentEffect.desc)}
                                        </div>
                                    </div>
                                </div>`;
                            // }
    
                            // paramString += `${paramEntry}${paramCounter != currentTraceRef.params.length-1 ? ", " : ""}`;
                            // paramCounter++;
                        }
    
                        // entryString += `
                        //     <div class="actionDetailBody">
                        //         <div class="rotationConditionOperatorHeaderInlineParams">Parameters: [${paramString}]</div>
                        //     </div>
                        // `
                        entryString += paramString;
                    } 
    
                    entryString += `</div>`;
        
        
        
                    entryString += `</div>
                    </div>
                    </div>`;



                    listStringer += entryString;
                    // <div class="eidolonRowBoxHolder">
                            
                    //         <div class="rightDescriptionBoxEidolons smallFont">
                    //             <div class="eidolonRowNameTrigger">${buffEntry.name}</div>
                    //         </div>
                    //     </div>
                        

                    //     <div class="actionDetailBody">
                    //         <div class="actionDetailBody2Description">
                    //             ${pagePopulation.cleanDescription(buffEntry.params,buffEntry.desc)}
                    //         </div>
                    //     </div>
                        
                    //     <div class="actionDetailBody">
                    //         <div class="rotationConditionOperatorHeaderInlineParams">Parameters: [${buffEntry.params}]</div>
                    //     </div>
        
                    
                    
                }
                listStringer = `<div class="rotationsSectionRowHolder2Overview" style="display: flex">
                    ${listStringer}
                
                </div>`;
                // overviewString += listStringer;


                // overviewString += selectorStringer;
                readSelection("mocEachSide2").innerHTML = listStringer;

                // tagList



                // readSelection("mocEachSide2").style.display = "none";
            }



            if (battleEventAbilities.length) {
                
                let buttonString = "";


                `<div class="rotationsSectionRowHolder2Overview" style="display: flex">
                    <div class="eidolonRowBoxHolder">
                        <div class="rightDescriptionBoxEidolons smallFont">
                            <div class="eidolonRowNameTrigger">Memory Turbulence</div>
                        </div>
                    </div>
                    
                    <div class="actionDetailBody">
                        <div class="actionDetailBody2Description">
                            At the beginning of each Cycle, randomly causes an ally following the Path of The Hunt or the Path of Erudition to take action immediately, and increases their DMG dealt by <span class="descriptionNumberColor">50.00%</span> for <span class="descriptionNumberColor">1</span> turn(s).
                        </div>
                    </div>

                    <div class="actionDetailBody">
                        <div class="rotationConditionOperatorHeaderInlineParams">Parameters: [0.5,1]</div>
                    </div>

                    
                    <div class="actionDetailBody">
                    </div>
                
                </div>`

                for (let beEntry of battleEventAbilities) {
                    // buttonString += `${beEntry.BEKey ? `<a class="exportIconBoxHolderBuffButton clickable" href="/HonkaiSR/TheLibrary/AbilityConfigsBE/${beEntry.BEKey}/#${encodeURIComponent(beEntry.realModifierNamne)}" target="_blank">
                    //     ${beEntry.realModifierNamne}&nbsp;
                    //     <img src="/HonkaiSR/misc/export.png" class="exportButtonIcon">
                    // </a>` : ""}`

                    const displayName = beEntry.realModifierNamne.replace("BattleEventAbility_","").replace("ChallengePeakBattle_","")

                    buttonString += `${beEntry.BEKey ? `<div class="eidolonRowBoxHolderBEAbility">
                        <div class="rightDescriptionBoxEidolons smallFont">
                            <div class="eidolonRowNameTriggerBEAbility">${displayName}
                            
                                <div class="actionDetailBody" style="width: auto;">
                                    <a class="exportIconBoxHolderBuffButton clickable" href="/HonkaiSR/TheLibrary/AbilityConfigsBE/${beEntry.BEKey}/#${encodeURIComponent(beEntry.realModifierNamne)}" target="_blank">
                                        Go to BE Ability&nbsp;
                                        <img src="/HonkaiSR/misc/export.png" class="exportButtonIcon">
                                    </a>
                                </div>

                                <div class="actionDetailBody" style="width: auto;">
                                    <div class="rotationConditionOperatorHeaderInlineParams">Parameters: [${beEntry.actualParams ?? "N/A"}]</div>
                                </div>
                                
                            </div>
                            
                        </div>
                    </div>
                    
                    ` : ""}`
                }

                if (buttonString) {
                    readSelection("PFDescriptionBox").style.display = "block";
                    buttonString = `<div class="rotationsSectionRowHolder2Overview" style="display: flex">
                        ${buttonString}
                    </div>`;

                    readSelection("PFDescriptionBox").innerHTML += buttonString;
                }
                // ${arrayAbilityStringer}
            }





            if (stageTypers === "anom" || stageTypers === "apoc" || stageTypers === "pf" || stageTypers === "moc") {


                readSelection("hpChartBoxHolder").innerHTML = endgameModeDisplay.getActiveBulletGraph();
                tooltips.loadTooltips();
            }

        }
        else {
            for (let i=0;i<mocSchedule.length;i++) {
                const currentEntry = mocSchedule[i];

                if (currentEntry.id === currentActiveCycle) {

                    const correctIndex = Math.max(0,Math.min(mocSchedule.length-1, i + adjustment));
                    const correctEntry = mocSchedule[correctIndex];

                    currentActiveCycle = correctEntry.id;
                    currentCycleIndex = mocSchedule.indexOf(correctEntry);

                    endgameModeDisplay.setEndgameDisplay(null,correctEntry);

                    break;
                }
            }
        }


        
        firstBoxGenDCompleted = true;
    },
    getActiveBulletGraph(bulletsArray2,isSkill) {
        let correctEntry = null;
        // for (let i=0;i<mocSchedule.length;i++) {
        //     const currentEntry = mocSchedule[i];

        //     if (currentEntry.id === currentActiveCycle) {

        //         const correctIndex = Math.max(0,Math.min(mocSchedule.length-1, i + adjustment));
        //         const correctEntry = mocSchedule[correctIndex];

        //         currentActiveCycle = correctEntry.id;

        //         endgameModeDisplay.setEndgameDisplay(null,correctEntry);

        //         break;
        //     }
        // }


        let pointsArray = []
        for (let i=0;i<mocSchedule.length;i++) {
            const currentEntry = mocSchedule[i];

            const stageName = currentEntry.realName;

            const floorData = currentEntry.floorData[currentFloor]
            //?? currentEntry.floorData[Object.keys(currentEntry.floorData)[0]];
            if (!floorData) {continue}

            const stageDataObject = floorData.stageDataObject;
            const side1 = stageDataObject.stage1.stageDataArray;
            const side2 = stageDataObject.stage2.stageDataArray;

            let AOESUM = 0;
            let STSUM = 0;
            for (let waveEntry of side1) {
                const checkEnemiesArray = waveEntry.enemies;

                if (checkEnemiesArray && Array.isArray(checkEnemiesArray)) {
                    for (let waveEntry2 of checkEnemiesArray) {
                        AOESUM += waveEntry2.aoeSUM;
                        STSUM += waveEntry2.highSTSUM;
                    }
                }
                else {
                    AOESUM += waveEntry.aoeSUM;
                    STSUM += waveEntry.highSTSUM;
                }
            }
            for (let waveEntry of side2) {
                const checkEnemiesArray = waveEntry.enemies;

                if (checkEnemiesArray && Array.isArray(checkEnemiesArray)) {
                    for (let waveEntry2 of checkEnemiesArray) {
                        AOESUM += waveEntry2.aoeSUM;
                        STSUM += waveEntry2.highSTSUM;
                    }
                }
                else {
                    AOESUM += waveEntry.aoeSUM;
                    STSUM += waveEntry.highSTSUM;
                }
            }


            pointsArray.push({
                stageName,AOESUM,STSUM,
                index: i
            })

            // if (currentEntry.id === currentActiveCycle) {

            //     const correctIndex = Math.max(0,Math.min(mocSchedule.length-1, i + adjustment));
            //     const correctEntry = mocSchedule[correctIndex];

            //     currentActiveCycle = correctEntry.id;

            //     endgameModeDisplay.setEndgameDisplay(null,correctEntry);

            //     break;
            // }
        }

        const checkAOEHighest = [...pointsArray]
        const checkSTHighest = [...pointsArray]

        const floorDMG1 = checkAOEHighest.length ? checkAOEHighest.reduce((min, obj) => (obj.AOESUM < min.AOESUM ? obj : min), checkAOEHighest[0]).AOESUM : 1;
        const ceilDMG1 = checkAOEHighest.length ? checkAOEHighest.reduce((max, obj) => (obj.AOESUM > max.AOESUM ? obj : max), checkAOEHighest[0]).AOESUM : 1;

        const floorDMG2 = checkSTHighest.length ? checkSTHighest.reduce((min, obj) => (obj.STSUM < min.STSUM ? obj : min), checkSTHighest[0]).STSUM : 1;
        const ceilDMG2 = checkSTHighest.length ? checkSTHighest.reduce((max, obj) => (obj.STSUM > max.STSUM ? obj : max), checkSTHighest[0]).STSUM : 1;

        const trueFloor = floorDMG2 < floorDMG1 ? floorDMG2 : floorDMG1;
        const trueCeiling = ceilDMG2 > ceilDMG1 ? ceilDMG2 : ceilDMG1;


        let bulletArrayString = "";
        let minTime = 0;
        //if an invalid array is passed, default the time to 1s
        // let maxTime = bulletsArray[bulletsArray.length-1] && bulletsArray[bulletsArray.length-1].timePassed ? bulletsArray[bulletsArray.length-1].timePassed : 1;
        let maxTime = pointsArray.length-1;

        // const floorDMG = bulletsArray.length ? bulletsArray.reduce((min, obj) => (obj.damageAVGTotal < min.damageAVGTotal ? obj : min), bulletsArray[0]) : {"damageAVGTotal":1};
        // const ceilDMG = bulletsArray.length ? bulletsArray.reduce((max, obj) => (obj.damageAVGTotal > max.damageAVGTotal ? obj : max), bulletsArray[0]) : {"damageAVGTotal":1};
        //&#9664; LEFT FACING
        //&#9660; DOWN FACING
        let minDMGBuffer = trueFloor * 0.1;
        let minDMG = Math.max(0,trueFloor - minDMGBuffer);
        let maxDMG = trueCeiling + minDMGBuffer;
        let dmgSpread = maxDMG-minDMG;

        let pointString = "";
        let linesArray = [];
        let lineString = "";
        let lineString2 = "";

        let bulletsArray = pointsArray;
        let currentLine = "";
        let svgString = "";

        for (let i=0;i<bulletsArray.length;i++) {
            // "reloadState": "start",middle,end
            // "timePassed": baseReference,
            let currentBullet = bulletsArray[i];
            // if (currentBullet.reloadState) {
            //     let reloadState = currentBullet.reloadState;

            //     //TODO: switch case later
            //     if (reloadState === "start") {
            //         let xValue = (((bulletsArray[i].timePassed/maxTime) * 0.85 + 0.075)*100).toFixed(4);
            //         let yValue = ((1 - ((bulletsArray[i-1].damageAVGTotal - minDMG)/dmgSpread) * 0.80 - 0.10)*100).toFixed(4);
            //         pointString += `<circle cx="${xValue}%" cy="${yValue}%" r="2.5" fill="white" onclick="bullets.toggleExpandedBullet(${i+1},${bulletsArray.length},true,${isSkill ? "true" : "false"})" class="weaponBulletArrayPoint hasHoverTooltip" id="weaponBulletArrayPoint${isSkill ? "Skill" : ""}${i}"/>`;
            //     }
            //     else if (reloadState === "end") {
            //         let xValue = (((bulletsArray[i].timePassed/maxTime) * 0.85 + 0.075)*100).toFixed(4);
            //         let yValue = ((1 - ((bulletsArray[i-2].damageAVGTotal - minDMG)/dmgSpread) * 0.80 - 0.10)*100).toFixed(4);
            //         pointString += `<circle cx="${xValue}%" cy="${yValue}%" r="2.5" fill="white" onclick="bullets.toggleExpandedBullet(${i+1},${bulletsArray.length},true,${isSkill ? "true" : "false"})" class="weaponBulletArrayPoint hasHoverTooltip" id="weaponBulletArrayPoint${isSkill ? "Skill" : ""}${i}"/>`;
                
            //         let xValue2 = (((bulletsArray[i-1].timePassed/maxTime) * 0.85 + 0.075)*100).toFixed(4);
            //         let yValue2 = ((1 - ((bulletsArray[i-2].damageAVGTotal - minDMG)/dmgSpread) * 0.80 - 0.10)*100).toFixed(4);
            //         lineString += `<line x1="${xValue}%" y1="${yValue}%" x2="${xValue2}%" y2="${yValue2}%" stroke="black" stroke-dasharray="5,2" id="weaponBulletArrayPointReloadLine${isSkill ? "Skill" : ""}${i}" class="hasHoverTooltip"/>`;

            //         let headerString = `<div class="totalHealingBoxBreakdownRows">
            //             <div class="totalHealingBoxHalfBreakdownRows hasHoverTooltip">
            //                 <div class="totalHealingHeader">Start Time:&nbsp;${bulletsArray[i-1].timePassed.toLocaleString()}s</div>
            //                 <div class="totalHealingHeader">End Time:&nbsp;${bulletsArray[i].timePassed.toLocaleString()}s</div>
            //                 <div class="totalHealingHeader">Duration:&nbsp;${(bulletsArray[i].timePassed - bulletsArray[i-1].timePassed).toLocaleString()}s</div>
            //             </div>
            //         </div>`;

            //         let tooltipString = `<div class="bulletTooltip">
            //             <div class="tooltipHeader">Reload&nbsp;${currentBullet.reloadNumber}&nbsp;</div>
            //             ${headerString}
            //         </div>`;

            //         tooltipStorage[`weaponBulletArrayPoint${isSkill ? "Skill" : ""}${i}`] = tooltipString;
            //         tooltipStorage[`weaponBulletArrayPoint${isSkill ? "Skill" : ""}${i-1}`] = tooltipString;
            //         tooltipStorage[`weaponBulletArrayPointReloadLine${isSkill ? "Skill" : ""}${i}`] = tooltipString;

            //         bulletArrayString += `<div class="bulletEntryRowContainer">
            //             <div class="bulletEntryRowBody" id="expandedBulletBody${isSkill ? "Skill" : ""}${i}" style="display: ${bulletsArray[i].shots != 1 ? "none" : "block"}">
            //                 <div class="tooltipHeader">Reload End</div>
            //                 ${headerString}
            //             </div>
            //         </div>`;
            //         bulletArrayString += `<div class="bulletEntryRowContainer">
            //             <div class="bulletEntryRowBody" id="expandedBulletBody${isSkill ? "Skill" : ""}${i-1}" style="display: ${bulletsArray[i-1].shots != 1 ? "none" : "block"}">
            //             <div class="tooltipHeader">Reload Start</div>
            //                 ${headerString}
            //             </div>
            //         </div>`;
            //     }
            //     else if (reloadState === "buffer") {
            //         let xValue = (((bulletsArray[i].timePassed/maxTime) * 0.85 + 0.075)*100).toFixed(4);
            //         let yValue = ((1 - ((bulletsArray[i-3].damageAVGTotal - minDMG)/dmgSpread) * 0.80 - 0.10)*100).toFixed(4);
            //         pointString += `<circle cx="${xValue}%" cy="${yValue}%" r="2.5" fill="white" onclick="bullets.toggleExpandedBullet(${i+1},${bulletsArray.length},true,${isSkill ? "true" : "false"})" class="weaponBulletArrayPoint hasHoverTooltip" id="weaponBulletArrayPoint${isSkill ? "Skill" : ""}${i}"/>`;

            //         let headerString = `<div class="totalHealingBoxBreakdownRows">
            //             <div class="totalHealingBoxHalfBreakdownRows hasHoverTooltip">
            //                 <div class="totalHealingHeader">Weapon Ready Time:&nbsp;${bulletsArray[i].timePassed.toLocaleString()}s</div>
            //                 <div class="abilityBreakdownGeneralMessage">After a reload your weapon has a "ready state" that is not modified by any speed bonuses, and this stat is hidden internally in-game.<br><br>This point on the graph represents when the weapon would normally be shooting again, but since it is the end we leave it as a non-bullet entry simply to maintain a uniform time to measure with on DPS metrics.</div>
            //             </div>
            //         </div>`;

            //         tooltipStorage[`weaponBulletArrayPoint${isSkill ? "Skill" : ""}${i}`] = `<div class="bulletTooltip">
            //             <div class="tooltipHeader">Weapon Ready</div>
            //             ${headerString}
            //         </div>`;

            //         bulletArrayString += `<div class="bulletEntryRowContainer">
            //             <div class="bulletEntryRowBody" id="expandedBulletBody${isSkill ? "Skill" : ""}${i}" style="display: ${bulletsArray[i].shots != 1 ? "none" : "block"}">
            //                 ${headerString}
            //             </div>
            //         </div>`;
            //     }
            // }
            // else {


                // let headerString = `<div class="totalHealingBoxBreakdownRows">
                //         <div class="totalHealingBoxHalfBreakdownRows hasHoverTooltip">
                //             <div class="totalHealingHeader">Time Fired:&nbsp;${bulletsArray[i].timePassed.toLocaleString()}s</div>
                //         </div>
                //         <div class="totalHealingBoxHalfBreakdownRows hasHoverTooltip">
                //             <div class="totalHealingHeader">Next Delay:&nbsp;${bulletsArray[i].shotDelay.toLocaleString()}s</div>
                //         </div>
                //         <div class="totalHealingBoxHalfBreakdownRows hasHoverTooltip">
                //             <div class="totalHealingHeader">Fire Rate:&nbsp;${bulletsArray[i].rateValue.toLocaleString()}</div>
                //         </div>
                //         <div class="totalHealingBoxBreakdownRows">
                //             <div class="totalHealingBoxHalfBreakdownRows hasHoverTooltip">
                //                 <div class="totalHealingHeader">SUM AVG of Shot</div>
                //                 <div class="totalHealingValueBoss">${bulletsArray[i].damageAVGTotal.toLocaleString()}</div>
                //             </div>
                //         </div>
                //     </div>`;



                // let ATKString = bulletsArray[i].totalATK != 0 ? `<div class="weaponBreakdownSplitterHeader">PHYSICAL</div>
                //     <div class="totalHealingBoxBreakdownRows">
                //         <div class="totalHealingBoxHalfBreakdownRows hasHoverTooltip">
                //             <div class="totalHealingHeader">ATK</div>
                //             <div class="totalHealingValueBoss">${currentBullet.totalATK.toFixed(2)}</div>
                //         </div>
                //         <div class="totalHealingBoxHalfBreakdownRows hasHoverTooltip">
                //             <div class="totalHealingHeader">DMG/Hit</div>
                //             <div class="totalHealingValueBoss">${currentBullet.damage.toFixed(2)}</div>
                //         </div>
                //         <div class="totalHealingBoxHalfBreakdownRows hasHoverTooltip">
                //             <div class="totalHealingHeader">DMG/Crit</div>
                //             <div class="totalHealingValueBoss">${currentBullet.damageCrit.toFixed(2)}</div>
                //         </div>
                //         <div class="totalHealingBoxHalfBreakdownRows hasHoverTooltip">
                //             <div class="totalHealingHeader">AVG/Hit</div>
                //             <div class="totalHealingValueBoss">${currentBullet.damageAVG.toFixed(2)}</div>
                //         </div>
                //         ${currentBullet.shellCount > 1 ? `<div class="totalHealingBoxHalfBreakdownRows hasHoverTooltip">
                //             <div class="totalHealingHeader">Shells</div>
                //             <div class="totalHealingValueBoss">${currentBullet.shellCount.toFixed(0)}</div>
                //         </div>` : ""}
                //     </div>
                //     ${currentBullet.weaponDamage.AVGMulti ? `<div class="bulletSimMultiShotRowHeader">Multi-Hit Damage</div>
                //     <div class="totalHealingBoxBreakdownRows">
                //         <div class="totalHealingBoxHalfBreakdownRows hasHoverTooltip">
                //             <div class="totalHealingHeader">DMG/Multi-Hit</div>
                //             <div class="totalHealingValueBoss">${currentBullet.weaponDamage.perHitMulti.toFixed(2)}</div>
                //         </div>
                //         <div class="totalHealingBoxHalfBreakdownRows hasHoverTooltip">
                //             <div class="totalHealingHeader">DMG/Multi-Crit</div>
                //             <div class="totalHealingValueBoss">${currentBullet.weaponDamage.perCritMulti.toFixed(2)}</div>
                //         </div>
                //         <div class="totalHealingBoxHalfBreakdownRows hasHoverTooltip">
                //             <div class="totalHealingHeader">AVG/Multi-Hit</div>
                //             <div class="totalHealingValueBoss">${currentBullet.weaponDamage.AVGMulti.toFixed(2)}</div>
                //         </div>
                //     </div>` : ""}
                //     ` : "";

                    // specialGunUltimateFunction
                // let specialATKUltimateString = bulletsArray[i].specialGunUltimateFunction ? `<div class="weaponBreakdownSplitterHeader">${bulletsArray[i].specialGunUltimateFunction.name}</div>
                // <div class="breakdownRowInjectionHeaderBulletSim">${bulletsArray[i].specialGunUltimateFunction.desc}</div>
                // <div class="totalHealingBoxBreakdownRows">
                //     <div class="totalHealingBoxHalfBreakdownRows hasHoverTooltip">
                //         <div class="totalHealingHeader">DMG/Hit</div>
                //         <div class="totalHealingValueBoss">${bulletsArray[i].specialGunUltimateFunction.perHit.toFixed(2)}</div>
                //     </div>
                //     <div class="totalHealingBoxHalfBreakdownRows hasHoverTooltip">
                //         <div class="totalHealingHeader">DMG/Crit</div>
                //         <div class="totalHealingValueBoss">${bulletsArray[i].specialGunUltimateFunction.perCrit.toFixed(2)}</div>
                //     </div>
                //     <div class="totalHealingBoxHalfBreakdownRows hasHoverTooltip">
                //         <div class="totalHealingHeader">AVG/Hit</div>
                //         <div class="totalHealingValueBoss">${bulletsArray[i].specialGunUltimateFunction.AVG.toFixed(2)}</div>
                //     </div>
                //     ${!bulletsArray[i].specialGunUltimateFunction.ticks ? "" : `
                //         <div class="totalHealingBoxHalfBreakdownRows hasHoverTooltip">
                //             <div class="totalHealingHeader">Ticks</div>
                //             <div class="totalHealingValueBoss">${bulletsArray[i].specialGunUltimateFunction.ticks.toFixed(2)}</div>
                //         </div>
                //         <div class="totalHealingBoxHalfBreakdownRows hasHoverTooltip">
                //             <div class="totalHealingHeader">SUM AVG</div>
                //             <div class="totalHealingValueBoss">${bulletsArray[i].specialGunUltimateFunction.totalTickDamage.toFixed(2)}</div>
                //         </div>
                //             `}
                //     </div>` : "";
                // let specialATKString = bulletsArray[i].specialGunFunction ? `<div class="weaponBreakdownSplitterHeader">${bulletsArray[i].specialGunFunction.name}</div>
                //     <div class="breakdownRowInjectionHeaderBulletSim">${bulletsArray[i].specialGunFunction.desc}</div>
                //     <div class="totalHealingBoxBreakdownRows">
                //         <div class="totalHealingBoxHalfBreakdownRows hasHoverTooltip">
                //             <div class="totalHealingHeader">DMG/Hit</div>
                //             <div class="totalHealingValueBoss">${bulletsArray[i].specialGunFunction.perHit.toFixed(2)}</div>
                //         </div>
                //         <div class="totalHealingBoxHalfBreakdownRows hasHoverTooltip">
                //             <div class="totalHealingHeader">DMG/Crit</div>
                //             <div class="totalHealingValueBoss">${bulletsArray[i].specialGunFunction.perCrit.toFixed(2)}</div>
                //         </div>
                //         <div class="totalHealingBoxHalfBreakdownRows hasHoverTooltip">
                //             <div class="totalHealingHeader">AVG/Hit</div>
                //             <div class="totalHealingValueBoss">${bulletsArray[i].specialGunFunction.AVG.toFixed(2)}</div>
                //         </div>
                //         ${!bulletsArray[i].specialGunFunction.ticks ? "" : `
                //             <div class="totalHealingBoxHalfBreakdownRows hasHoverTooltip">
                //                 <div class="totalHealingHeader">Ticks</div>
                //                 <div class="totalHealingValueBoss">${bulletsArray[i].specialGunFunction.ticks.toFixed(2)}</div>
                //             </div>
                //             <div class="totalHealingBoxHalfBreakdownRows hasHoverTooltip">
                //                 <div class="totalHealingHeader">SUM AVG</div>
                //                 <div class="totalHealingValueBoss">${bulletsArray[i].specialGunFunction.totalTickDamage.toFixed(2)}</div>
                //             </div>
                //                 `}
                //     </div>` : "";
                // let specialSkillString = bulletsArray[i].specialSkillFunction ? `<div class="weaponBreakdownSplitterHeader">${bulletsArray[i].specialSkillFunction.name}</div>
                // <div class="breakdownRowInjectionHeaderBulletSim">${bulletsArray[i].specialSkillFunction.desc}</div>
                // <div class="totalHealingBoxBreakdownRows">
                //     <div class="totalHealingBoxHalfBreakdownRows hasHoverTooltip">
                //         <div class="totalHealingHeader">DMG/Hit</div>
                //         <div class="totalHealingValueBoss">${bulletsArray[i].specialSkillFunction.perHit.toFixed(2)}</div>
                //     </div>
                //     <div class="totalHealingBoxHalfBreakdownRows hasHoverTooltip">
                //         <div class="totalHealingHeader">DMG/Crit</div>
                //         <div class="totalHealingValueBoss">${bulletsArray[i].specialSkillFunction.perCrit.toFixed(2)}</div>
                //     </div>
                //     <div class="totalHealingBoxHalfBreakdownRows hasHoverTooltip">
                //         <div class="totalHealingHeader">AVG/Hit</div>
                //         <div class="totalHealingValueBoss">${bulletsArray[i].specialSkillFunction.AVG.toFixed(2)}</div>
                //     </div>
                //     ${!bulletsArray[i].specialSkillFunction.ticks ? "" : `
                //     <div class="totalHealingBoxHalfBreakdownRows hasHoverTooltip">
                //         <div class="totalHealingHeader">Ticks</div>
                //         <div class="totalHealingValueBoss">${bulletsArray[i].specialSkillFunction.ticks.toFixed(2)}</div>
                //     </div>
                //     <div class="totalHealingBoxHalfBreakdownRows hasHoverTooltip">
                //         <div class="totalHealingHeader">SUM AVG</div>
                //         <div class="totalHealingValueBoss">${bulletsArray[i].specialSkillFunction.totalTickDamage.toFixed(2)}</div>
                //     </div>
                //         `}
                // </div>` : "";
                // let SkillString = bulletsArray[i].SkillDamage && bulletsArray[i].SkillDamage.AVG != 0 ? `<div class="weaponBreakdownSplitterHeader">SKILL</div>
                //     <div class="totalHealingBoxBreakdownRows">
                //         <div class="totalHealingBoxHalfBreakdownRows hasHoverTooltip">
                //             <div class="totalHealingHeader">Mod</div>
                //             <div class="totalHealingValueBoss">${(bulletsArray[i].SkillDamageMod*100).toFixed(2)}%</div>
                //         </div>
                //         <div class="totalHealingBoxHalfBreakdownRows hasHoverTooltip">
                //             <div class="totalHealingHeader">DMG/Hit</div>
                //             <div class="totalHealingValueBoss">${bulletsArray[i].SkillDamage.perHit.toFixed(2)}</div>
                //         </div>
                //         <div class="totalHealingBoxHalfBreakdownRows hasHoverTooltip">
                //             <div class="totalHealingHeader">DMG/Crit</div>
                //             <div class="totalHealingValueBoss">${bulletsArray[i].SkillDamage.perCrit.toFixed(2)}</div>
                //         </div>
                //         <div class="totalHealingBoxHalfBreakdownRows hasHoverTooltip">
                //             <div class="totalHealingHeader">AVG/Hit</div>
                //             <div class="totalHealingValueBoss">${bulletsArray[i].SkillDamage.AVG.toFixed(2)}</div>
                //         </div>
                //     </div>` : "";


                // //BULLET DISPLAY SECTIONS
                // bulletArrayString += `<div class="bulletEntryRowContainer">
                //     <div class="bulletEntryRowBody" id="expandedBulletBody${isSkill ? "Skill" : ""}${i}" style="display: ${bulletsArray[i].shots != 1 ? "none" : "block"}">
                //         ${headerString}
                //         ${SkillString}
                //         ${specialSkillString}
                //         ${ATKString}
                //         ${bullets.getAttributeRowStrings(bulletsArray[i].elementalDamage)}
                //         ${specialATKString}
                //         ${specialATKUltimateString}
                //         ${bulletsArray[i].bonusesApplied.length ? `<div class='weaponBreakdownSplitterHeader'>BONUSES</div>
                //             <div style="white-space: normal">${bulletsArray[i].bonusesApplied}</div>` : ""}
                //     </div>
                // </div>`;


                // let xValue = (((bulletsArray[i].timePassed/maxTime) * 0.85 + 0.075)*100).toFixed(4);
                // let yValue = ((1 - ((bulletsArray[i-1].damageAVGTotal - minDMG)/dmgSpread) * 0.80 - 0.10)*100).toFixed(4);
                // pointString += `<circle cx="${xValue}%" cy="${yValue}%" r="2.5" fill="white" onclick="bullets.toggleExpandedBullet(${i+1},${bulletsArray.length},true,${isSkill ? "true" : "false"})" class="weaponBulletArrayPoint hasHoverTooltip" id="weaponBulletArrayPoint${isSkill ? "Skill" : ""}${i}"/>`;


                //BULLET TOOLTIP SECTIONS
                let xValue = (((i/maxTime) * 0.85 + 0.075)*100).toFixed(4);
                let yValue = ((1 - ((currentBullet.STSUM - minDMG)/dmgSpread) * 0.80 - 0.10)*100).toFixed(4);
                let yValue2 = ((1 - ((currentBullet.AOESUM - minDMG)/dmgSpread) * 0.80 - 0.10)*100).toFixed(4);
                pointString += `<circle cx="${xValue}%" cy="${yValue}%" r="2.5" fill="${currentBullet.wasFree ? "grey":"lightcoral"}" class="weaponBulletArrayPoint hasHoverTooltip" id="weaponBulletArrayPoint${isSkill ? "Skill" : ""}${i}"/>`;
                pointString += `<circle cx="${xValue}%" cy="${yValue2}%" r="2.5" fill="${currentBullet.wasFree ? "grey":"lightblue"}" class="weaponBulletArrayPoint hasHoverTooltip" id="weaponBulletArrayPoint${isSkill ? "Skill" : ""}${i}"/>`;

                let yValue_12 = ((1 - ((trueFloor - minDMG)/dmgSpread) * 0.80 - 0.10)*100).toFixed(4);
                let yValue_122 = ((1 - ((trueCeiling - minDMG)/dmgSpread) * 0.80 - 0.10)*100).toFixed(4);
                if (currentBullet.index === currentCycleIndex) {
                    
                    currentLine = `<line x1="${xValue}%" y1="${yValue_12}%" x2="${xValue}%" y2="${yValue_122}%" stroke="grey" stroke-dasharray="5,2"/>`
                }

                if (i < bulletsArray.length-1) {
                    let xValue2 = ((((i+1)/maxTime) * 0.85 + 0.075)*100).toFixed(4);
                    let yValue_2 = ((1 - ((bulletsArray[i+1].STSUM - minDMG)/dmgSpread) * 0.80 - 0.10)*100).toFixed(4);
                    let yValue_22 = ((1 - ((bulletsArray[i+1].AOESUM - minDMG)/dmgSpread) * 0.80 - 0.10)*100).toFixed(4);
                    lineString += `<line x1="${xValue}%" y1="${yValue}%" x2="${xValue2}%" y2="${yValue_2}%" stroke="lightcoral"/>`;
                    lineString2 += `<line x1="${xValue}%" y1="${yValue2}%" x2="${xValue2}%" y2="${yValue_22}%" stroke="lightblue"/>`;


                    
                }
                let fullWidthBound = ((((maxTime/maxTime) * 0.85 + 0.075)*100)/maxTime).toFixed(4);
                    // const lBound = (prevX + currentX)/2;
                    // const rBound = (currentX + nextX)/2;
                    // const width = rBound - lBound;

                    // let xValue2 = ((((i+1)/maxTime) * 0.85 + 0.075)*100).toFixed(4);
                    // let yValue_2 = ((1 - ((bulletsArray[i+1].STSUM - minDMG)/dmgSpread) * 0.80 - 0.10)*100).toFixed(4);
                    // let yValue_22 = ((1 - ((bulletsArray[i+1].AOESUM - minDMG)/dmgSpread) * 0.80 - 0.10)*100).toFixed(4);

                    const actualWidth = (+fullWidthBound).toFixed(0);
                    const halfWidth = actualWidth/2
                    svgString += `
                        <rect x="${xValue - halfWidth}%" 
                            y="${yValue_122}%" 
                            width="${actualWidth}%" 
                            height="${yValue_12 - yValue_122}%" 
                            fill="transparent"
                            class="hasHoverTooltip mocQuadrantDisplay clickable"
                            id="mocDisplayIndex${currentBullet.index}"
                            onclick="endgameModeDisplay.setEndgameDisplay(${currentBullet.index - currentCycleIndex});"
                        />
                    `;

                    // ${headerString}
                    // stageName,AOESUM,STSUM,

                    // ${bulletsArray[i].bonusesApplied.length ? `<div class="totalHealingHeader">Bonuses applied to/on shot</div>
                    //     ${bulletsArray[i].bonusesApplied}` : ""}
                    let headerString = `<div class="totalHealingBoxBreakdownRows">
                        <div class="totalHealingBoxHalfBreakdownRows" style="color:lightblue;">
                            <div class="totalHealingHeader">SUM HP:</div>${bulletsArray[i].AOESUM.toLocaleString()}
                        </div>
                        <div class="totalHealingBoxHalfBreakdownRows" style="color:lightcoral;">
                            <div class="totalHealingHeader">SUM Highest HP/Wave:</div>${bulletsArray[i].STSUM.toLocaleString()}
                        </div>
                    </div>`;
                    
                    const hasPatchTitle = stageTypers === "anom";
                    let startStringer2 = stageTypers === "anom" || stageTypers === "echo" || stageTypers === "relic" ? (hasPatchTitle ? "Patch: " : "") + mocSchedule[currentBullet.index].patchName : mocSchedule[currentBullet.index].start?.split(" ")[0] + " - " + mocSchedule[currentBullet.index].end?.split(" ")[0];

                    tooltipStorage[`mocDisplayIndex${currentBullet.index}`] = `<div class="bulletTooltip">
                            <div class="eidolonRowNameTrigger">${bulletsArray[i].stageName}</div>
                            ${startStringer2}
                            <br>
                            <br>
                            ${headerString}
                        </div>`;
            // }
        }

        // for (let i=0;i<bulletsArray.length;i++) {
        //     // "reloadState": "start",middle,end
        //     // "timePassed": baseReference,
        //     let currentBullet = bulletsArray[i];
        //     if (currentBullet.reloadState) {
        //         let reloadState = currentBullet.reloadState;

        //         //TODO: switch case later
        //         if (reloadState === "start") {
        //             let xValue = (((bulletsArray[i].timePassed/maxTime) * 0.85 + 0.075)*100).toFixed(4);
        //             let yValue = ((1 - ((bulletsArray[i-1].damageAVGTotal - minDMG)/dmgSpread) * 0.80 - 0.10)*100).toFixed(4);
        //             pointString += `<circle cx="${xValue}%" cy="${yValue}%" r="2.5" fill="white" onclick="bullets.toggleExpandedBullet(${i+1},${bulletsArray.length},true,${isSkill ? "true" : "false"})" class="weaponBulletArrayPoint hasHoverTooltip" id="weaponBulletArrayPoint${isSkill ? "Skill" : ""}${i}"/>`;
        //         }
        //         else if (reloadState === "end") {
        //             let xValue = (((bulletsArray[i].timePassed/maxTime) * 0.85 + 0.075)*100).toFixed(4);
        //             let yValue = ((1 - ((bulletsArray[i-2].damageAVGTotal - minDMG)/dmgSpread) * 0.80 - 0.10)*100).toFixed(4);
        //             pointString += `<circle cx="${xValue}%" cy="${yValue}%" r="2.5" fill="white" onclick="bullets.toggleExpandedBullet(${i+1},${bulletsArray.length},true,${isSkill ? "true" : "false"})" class="weaponBulletArrayPoint hasHoverTooltip" id="weaponBulletArrayPoint${isSkill ? "Skill" : ""}${i}"/>`;
                
        //             let xValue2 = (((bulletsArray[i-1].timePassed/maxTime) * 0.85 + 0.075)*100).toFixed(4);
        //             let yValue2 = ((1 - ((bulletsArray[i-2].damageAVGTotal - minDMG)/dmgSpread) * 0.80 - 0.10)*100).toFixed(4);
        //             lineString += `<line x1="${xValue}%" y1="${yValue}%" x2="${xValue2}%" y2="${yValue2}%" stroke="black" stroke-dasharray="5,2" id="weaponBulletArrayPointReloadLine${isSkill ? "Skill" : ""}${i}" class="hasHoverTooltip"/>`;

        //             let headerString = `<div class="totalHealingBoxBreakdownRows">
        //                 <div class="totalHealingBoxHalfBreakdownRows hasHoverTooltip">
        //                     <div class="totalHealingHeader">Start Time:&nbsp;${bulletsArray[i-1].timePassed.toLocaleString()}s</div>
        //                     <div class="totalHealingHeader">End Time:&nbsp;${bulletsArray[i].timePassed.toLocaleString()}s</div>
        //                     <div class="totalHealingHeader">Duration:&nbsp;${(bulletsArray[i].timePassed - bulletsArray[i-1].timePassed).toLocaleString()}s</div>
        //                 </div>
        //             </div>`;

        //             let tooltipString = `<div class="bulletTooltip">
        //                 <div class="tooltipHeader">Reload&nbsp;${currentBullet.reloadNumber}&nbsp;</div>
        //                 ${headerString}
        //             </div>`;

        //             tooltipStorage[`weaponBulletArrayPoint${isSkill ? "Skill" : ""}${i}`] = tooltipString;
        //             tooltipStorage[`weaponBulletArrayPoint${isSkill ? "Skill" : ""}${i-1}`] = tooltipString;
        //             tooltipStorage[`weaponBulletArrayPointReloadLine${isSkill ? "Skill" : ""}${i}`] = tooltipString;

        //             bulletArrayString += `<div class="bulletEntryRowContainer">
        //                 <div class="bulletEntryRowBody" id="expandedBulletBody${isSkill ? "Skill" : ""}${i}" style="display: ${bulletsArray[i].shots != 1 ? "none" : "block"}">
        //                     <div class="tooltipHeader">Reload End</div>
        //                     ${headerString}
        //                 </div>
        //             </div>`;
        //             bulletArrayString += `<div class="bulletEntryRowContainer">
        //                 <div class="bulletEntryRowBody" id="expandedBulletBody${isSkill ? "Skill" : ""}${i-1}" style="display: ${bulletsArray[i-1].shots != 1 ? "none" : "block"}">
        //                 <div class="tooltipHeader">Reload Start</div>
        //                     ${headerString}
        //                 </div>
        //             </div>`;
        //         }
        //         else if (reloadState === "buffer") {
        //             let xValue = (((bulletsArray[i].timePassed/maxTime) * 0.85 + 0.075)*100).toFixed(4);
        //             let yValue = ((1 - ((bulletsArray[i-3].damageAVGTotal - minDMG)/dmgSpread) * 0.80 - 0.10)*100).toFixed(4);
        //             pointString += `<circle cx="${xValue}%" cy="${yValue}%" r="2.5" fill="white" onclick="bullets.toggleExpandedBullet(${i+1},${bulletsArray.length},true,${isSkill ? "true" : "false"})" class="weaponBulletArrayPoint hasHoverTooltip" id="weaponBulletArrayPoint${isSkill ? "Skill" : ""}${i}"/>`;

        //             let headerString = `<div class="totalHealingBoxBreakdownRows">
        //                 <div class="totalHealingBoxHalfBreakdownRows hasHoverTooltip">
        //                     <div class="totalHealingHeader">Weapon Ready Time:&nbsp;${bulletsArray[i].timePassed.toLocaleString()}s</div>
        //                     <div class="abilityBreakdownGeneralMessage">After a reload your weapon has a "ready state" that is not modified by any speed bonuses, and this stat is hidden internally in-game.<br><br>This point on the graph represents when the weapon would normally be shooting again, but since it is the end we leave it as a non-bullet entry simply to maintain a uniform time to measure with on DPS metrics.</div>
        //                 </div>
        //             </div>`;

        //             tooltipStorage[`weaponBulletArrayPoint${isSkill ? "Skill" : ""}${i}`] = `<div class="bulletTooltip">
        //                 <div class="tooltipHeader">Weapon Ready</div>
        //                 ${headerString}
        //             </div>`;

        //             bulletArrayString += `<div class="bulletEntryRowContainer">
        //                 <div class="bulletEntryRowBody" id="expandedBulletBody${isSkill ? "Skill" : ""}${i}" style="display: ${bulletsArray[i].shots != 1 ? "none" : "block"}">
        //                     ${headerString}
        //                 </div>
        //             </div>`;
        //         }
        //     }
        //     else {
        //         let headerString = `<div class="totalHealingBoxBreakdownRows">
        //                 <div class="totalHealingBoxHalfBreakdownRows hasHoverTooltip">
        //                     <div class="totalHealingHeader">Time Fired:&nbsp;${bulletsArray[i].timePassed.toLocaleString()}s</div>
        //                 </div>
        //                 <div class="totalHealingBoxHalfBreakdownRows hasHoverTooltip">
        //                     <div class="totalHealingHeader">Next Delay:&nbsp;${bulletsArray[i].shotDelay.toLocaleString()}s</div>
        //                 </div>
        //                 <div class="totalHealingBoxHalfBreakdownRows hasHoverTooltip">
        //                     <div class="totalHealingHeader">Fire Rate:&nbsp;${bulletsArray[i].rateValue.toLocaleString()}</div>
        //                 </div>
        //                 <div class="totalHealingBoxBreakdownRows">
        //                     <div class="totalHealingBoxHalfBreakdownRows hasHoverTooltip">
        //                         <div class="totalHealingHeader">SUM AVG of Shot</div>
        //                         <div class="totalHealingValueBoss">${bulletsArray[i].damageAVGTotal.toLocaleString()}</div>
        //                     </div>
        //                 </div>
        //             </div>`;
        //         let ATKString = bulletsArray[i].totalATK != 0 ? `<div class="weaponBreakdownSplitterHeader">PHYSICAL</div>
        //             <div class="totalHealingBoxBreakdownRows">
        //                 <div class="totalHealingBoxHalfBreakdownRows hasHoverTooltip">
        //                     <div class="totalHealingHeader">ATK</div>
        //                     <div class="totalHealingValueBoss">${currentBullet.totalATK.toFixed(2)}</div>
        //                 </div>
        //                 <div class="totalHealingBoxHalfBreakdownRows hasHoverTooltip">
        //                     <div class="totalHealingHeader">DMG/Hit</div>
        //                     <div class="totalHealingValueBoss">${currentBullet.damage.toFixed(2)}</div>
        //                 </div>
        //                 <div class="totalHealingBoxHalfBreakdownRows hasHoverTooltip">
        //                     <div class="totalHealingHeader">DMG/Crit</div>
        //                     <div class="totalHealingValueBoss">${currentBullet.damageCrit.toFixed(2)}</div>
        //                 </div>
        //                 <div class="totalHealingBoxHalfBreakdownRows hasHoverTooltip">
        //                     <div class="totalHealingHeader">AVG/Hit</div>
        //                     <div class="totalHealingValueBoss">${currentBullet.damageAVG.toFixed(2)}</div>
        //                 </div>
        //                 ${currentBullet.shellCount > 1 ? `<div class="totalHealingBoxHalfBreakdownRows hasHoverTooltip">
        //                     <div class="totalHealingHeader">Shells</div>
        //                     <div class="totalHealingValueBoss">${currentBullet.shellCount.toFixed(0)}</div>
        //                 </div>` : ""}
        //             </div>
        //             ${currentBullet.weaponDamage.AVGMulti ? `<div class="bulletSimMultiShotRowHeader">Multi-Hit Damage</div>
        //             <div class="totalHealingBoxBreakdownRows">
        //                 <div class="totalHealingBoxHalfBreakdownRows hasHoverTooltip">
        //                     <div class="totalHealingHeader">DMG/Multi-Hit</div>
        //                     <div class="totalHealingValueBoss">${currentBullet.weaponDamage.perHitMulti.toFixed(2)}</div>
        //                 </div>
        //                 <div class="totalHealingBoxHalfBreakdownRows hasHoverTooltip">
        //                     <div class="totalHealingHeader">DMG/Multi-Crit</div>
        //                     <div class="totalHealingValueBoss">${currentBullet.weaponDamage.perCritMulti.toFixed(2)}</div>
        //                 </div>
        //                 <div class="totalHealingBoxHalfBreakdownRows hasHoverTooltip">
        //                     <div class="totalHealingHeader">AVG/Multi-Hit</div>
        //                     <div class="totalHealingValueBoss">${currentBullet.weaponDamage.AVGMulti.toFixed(2)}</div>
        //                 </div>
        //             </div>` : ""}
        //             ` : "";

        //             // specialGunUltimateFunction
        //         let specialATKUltimateString = bulletsArray[i].specialGunUltimateFunction ? `<div class="weaponBreakdownSplitterHeader">${bulletsArray[i].specialGunUltimateFunction.name}</div>
        //         <div class="breakdownRowInjectionHeaderBulletSim">${bulletsArray[i].specialGunUltimateFunction.desc}</div>
        //         <div class="totalHealingBoxBreakdownRows">
        //             <div class="totalHealingBoxHalfBreakdownRows hasHoverTooltip">
        //                 <div class="totalHealingHeader">DMG/Hit</div>
        //                 <div class="totalHealingValueBoss">${bulletsArray[i].specialGunUltimateFunction.perHit.toFixed(2)}</div>
        //             </div>
        //             <div class="totalHealingBoxHalfBreakdownRows hasHoverTooltip">
        //                 <div class="totalHealingHeader">DMG/Crit</div>
        //                 <div class="totalHealingValueBoss">${bulletsArray[i].specialGunUltimateFunction.perCrit.toFixed(2)}</div>
        //             </div>
        //             <div class="totalHealingBoxHalfBreakdownRows hasHoverTooltip">
        //                 <div class="totalHealingHeader">AVG/Hit</div>
        //                 <div class="totalHealingValueBoss">${bulletsArray[i].specialGunUltimateFunction.AVG.toFixed(2)}</div>
        //             </div>
        //             ${!bulletsArray[i].specialGunUltimateFunction.ticks ? "" : `
        //                 <div class="totalHealingBoxHalfBreakdownRows hasHoverTooltip">
        //                     <div class="totalHealingHeader">Ticks</div>
        //                     <div class="totalHealingValueBoss">${bulletsArray[i].specialGunUltimateFunction.ticks.toFixed(2)}</div>
        //                 </div>
        //                 <div class="totalHealingBoxHalfBreakdownRows hasHoverTooltip">
        //                     <div class="totalHealingHeader">SUM AVG</div>
        //                     <div class="totalHealingValueBoss">${bulletsArray[i].specialGunUltimateFunction.totalTickDamage.toFixed(2)}</div>
        //                 </div>
        //                     `}
        //             </div>` : "";
        //         let specialATKString = bulletsArray[i].specialGunFunction ? `<div class="weaponBreakdownSplitterHeader">${bulletsArray[i].specialGunFunction.name}</div>
        //             <div class="breakdownRowInjectionHeaderBulletSim">${bulletsArray[i].specialGunFunction.desc}</div>
        //             <div class="totalHealingBoxBreakdownRows">
        //                 <div class="totalHealingBoxHalfBreakdownRows hasHoverTooltip">
        //                     <div class="totalHealingHeader">DMG/Hit</div>
        //                     <div class="totalHealingValueBoss">${bulletsArray[i].specialGunFunction.perHit.toFixed(2)}</div>
        //                 </div>
        //                 <div class="totalHealingBoxHalfBreakdownRows hasHoverTooltip">
        //                     <div class="totalHealingHeader">DMG/Crit</div>
        //                     <div class="totalHealingValueBoss">${bulletsArray[i].specialGunFunction.perCrit.toFixed(2)}</div>
        //                 </div>
        //                 <div class="totalHealingBoxHalfBreakdownRows hasHoverTooltip">
        //                     <div class="totalHealingHeader">AVG/Hit</div>
        //                     <div class="totalHealingValueBoss">${bulletsArray[i].specialGunFunction.AVG.toFixed(2)}</div>
        //                 </div>
        //                 ${!bulletsArray[i].specialGunFunction.ticks ? "" : `
        //                     <div class="totalHealingBoxHalfBreakdownRows hasHoverTooltip">
        //                         <div class="totalHealingHeader">Ticks</div>
        //                         <div class="totalHealingValueBoss">${bulletsArray[i].specialGunFunction.ticks.toFixed(2)}</div>
        //                     </div>
        //                     <div class="totalHealingBoxHalfBreakdownRows hasHoverTooltip">
        //                         <div class="totalHealingHeader">SUM AVG</div>
        //                         <div class="totalHealingValueBoss">${bulletsArray[i].specialGunFunction.totalTickDamage.toFixed(2)}</div>
        //                     </div>
        //                         `}
        //             </div>` : "";
        //         let specialSkillString = bulletsArray[i].specialSkillFunction ? `<div class="weaponBreakdownSplitterHeader">${bulletsArray[i].specialSkillFunction.name}</div>
        //         <div class="breakdownRowInjectionHeaderBulletSim">${bulletsArray[i].specialSkillFunction.desc}</div>
        //         <div class="totalHealingBoxBreakdownRows">
        //             <div class="totalHealingBoxHalfBreakdownRows hasHoverTooltip">
        //                 <div class="totalHealingHeader">DMG/Hit</div>
        //                 <div class="totalHealingValueBoss">${bulletsArray[i].specialSkillFunction.perHit.toFixed(2)}</div>
        //             </div>
        //             <div class="totalHealingBoxHalfBreakdownRows hasHoverTooltip">
        //                 <div class="totalHealingHeader">DMG/Crit</div>
        //                 <div class="totalHealingValueBoss">${bulletsArray[i].specialSkillFunction.perCrit.toFixed(2)}</div>
        //             </div>
        //             <div class="totalHealingBoxHalfBreakdownRows hasHoverTooltip">
        //                 <div class="totalHealingHeader">AVG/Hit</div>
        //                 <div class="totalHealingValueBoss">${bulletsArray[i].specialSkillFunction.AVG.toFixed(2)}</div>
        //             </div>
        //             ${!bulletsArray[i].specialSkillFunction.ticks ? "" : `
        //             <div class="totalHealingBoxHalfBreakdownRows hasHoverTooltip">
        //                 <div class="totalHealingHeader">Ticks</div>
        //                 <div class="totalHealingValueBoss">${bulletsArray[i].specialSkillFunction.ticks.toFixed(2)}</div>
        //             </div>
        //             <div class="totalHealingBoxHalfBreakdownRows hasHoverTooltip">
        //                 <div class="totalHealingHeader">SUM AVG</div>
        //                 <div class="totalHealingValueBoss">${bulletsArray[i].specialSkillFunction.totalTickDamage.toFixed(2)}</div>
        //             </div>
        //                 `}
        //         </div>` : "";
        //         let SkillString = bulletsArray[i].SkillDamage && bulletsArray[i].SkillDamage.AVG != 0 ? `<div class="weaponBreakdownSplitterHeader">SKILL</div>
        //             <div class="totalHealingBoxBreakdownRows">
        //                 <div class="totalHealingBoxHalfBreakdownRows hasHoverTooltip">
        //                     <div class="totalHealingHeader">Mod</div>
        //                     <div class="totalHealingValueBoss">${(bulletsArray[i].SkillDamageMod*100).toFixed(2)}%</div>
        //                 </div>
        //                 <div class="totalHealingBoxHalfBreakdownRows hasHoverTooltip">
        //                     <div class="totalHealingHeader">DMG/Hit</div>
        //                     <div class="totalHealingValueBoss">${bulletsArray[i].SkillDamage.perHit.toFixed(2)}</div>
        //                 </div>
        //                 <div class="totalHealingBoxHalfBreakdownRows hasHoverTooltip">
        //                     <div class="totalHealingHeader">DMG/Crit</div>
        //                     <div class="totalHealingValueBoss">${bulletsArray[i].SkillDamage.perCrit.toFixed(2)}</div>
        //                 </div>
        //                 <div class="totalHealingBoxHalfBreakdownRows hasHoverTooltip">
        //                     <div class="totalHealingHeader">AVG/Hit</div>
        //                     <div class="totalHealingValueBoss">${bulletsArray[i].SkillDamage.AVG.toFixed(2)}</div>
        //                 </div>
        //             </div>` : "";


        //         //BULLET DISPLAY SECTIONS
        //         bulletArrayString += `<div class="bulletEntryRowContainer">
        //             <div class="bulletEntryRowBody" id="expandedBulletBody${isSkill ? "Skill" : ""}${i}" style="display: ${bulletsArray[i].shots != 1 ? "none" : "block"}">
        //                 ${headerString}
        //                 ${SkillString}
        //                 ${specialSkillString}
        //                 ${ATKString}
        //                 ${bullets.getAttributeRowStrings(bulletsArray[i].elementalDamage)}
        //                 ${specialATKString}
        //                 ${specialATKUltimateString}
        //                 ${bulletsArray[i].bonusesApplied.length ? `<div class='weaponBreakdownSplitterHeader'>BONUSES</div>
        //                     <div style="white-space: normal">${bulletsArray[i].bonusesApplied}</div>` : ""}
        //             </div>
        //         </div>`;


        //         //BULLET TOOLTIP SECTIONS
        //         let xValue = (((bulletsArray[i].timePassed/maxTime) * 0.85 + 0.075)*100).toFixed(4);
        //         let yValue = ((1 - ((bulletsArray[i].damageAVGTotal - minDMG)/dmgSpread) * 0.80 - 0.10)*100).toFixed(4);
        //         pointString += `<circle cx="${xValue}%" cy="${yValue}%" r="2.5" fill="${bulletsArray[i].wasFree ? "grey":"red"}" onclick="bullets.toggleExpandedBullet(${i+1},${bulletsArray.length},true,${isSkill ? "true" : "false"})" class="weaponBulletArrayPoint hasHoverTooltip" id="weaponBulletArrayPoint${isSkill ? "Skill" : ""}${i}"/>`;

        //         if (i < bulletsArray.length-1 && !bulletsArray[i+1].reloadState) {
        //             let xValue2 = (((bulletsArray[i+1].timePassed/maxTime) * 0.85 + 0.075)*100).toFixed(4);
        //             let yValue2 = ((1 - ((bulletsArray[i+1].damageAVGTotal - minDMG)/dmgSpread) * 0.80 - 0.10)*100).toFixed(4);
        //             lineString += `<line x1="${xValue}%" y1="${yValue}%" x2="${xValue2}%" y2="${yValue2}%" stroke="black"/>`;
        //         }

        //         tooltipStorage[`weaponBulletArrayPoint${isSkill ? "Skill" : ""}${i}`] = `<div class="bulletTooltip">
        //                 <div class="tooltipHeader">Shot&nbsp;${bulletsArray[i].shots}</div>
        //                 ${headerString}
        //                 ${SkillString}
        //                 ${specialSkillString}
        //                 ${ATKString}
        //                 ${bullets.getAttributeRowStrings(bulletsArray[i].elementalDamage)}
        //                 ${specialATKString}
        //                 ${specialATKUltimateString}
        //                 ${bulletsArray[i].bonusesApplied.length ? `<div class="totalHealingHeader">Bonuses applied to/on shot</div>
        //                     ${bulletsArray[i].bonusesApplied}` : ""}
        //             </div>`;
        //     }
        // }
        
        //kill the graph if there is no array
        



        // <text x="7.5%" y="97.5%" fill="white" font-size="15" text-anchor="middle">0s</text>
        //     <text x="92.5%" y="97.5%" fill="white" font-size="15" text-anchor="middle">${maxTime.toFixed(1)}s</text>

        function abbreviate(num) {return new Intl.NumberFormat('en', {notation: 'compact',maximumFractionDigits: 2}).format(num);}
        // <text x="-2.5%" y="27%" fill="white" font-size="15" text-anchor="middle" transform="rotate(-90, 50, 50)">HP</text>
        const graphString = `
        <div id="bulletsDisplayGraphBox" class="graphContainerbox">
            <svg class="weaponBulletArrayGraph" id="bulletsDisplayGraph">
                <line x1="7.5%" y1="90%" x2="7.5%" y2="10%" stroke="black" /> <!-- Y-axis -->
                <line x1="7.5%" y1="90%" x2="92.5%" y2="90%" stroke="black" /> <!-- X-axis -->

                <text x="50%" y="7.5%" fill="white" font-size="15" text-anchor="middle">HP by Floor Selected: ${currentFloor}</text>
                
                <text x="50%" y="97.5%" fill="white" font-size="15" text-anchor="middle">Stages (${bulletsArray.length})</text>

                ${currentLine}
                <line x1="7.5%" y1="90%" x2="7.5%" y2="10%" stroke="black" />


                

                <text x="4.5%" y="91%" fill="white" font-size="15" text-anchor="middle">${abbreviate(trueFloor)}</text>
                <text x="4.5%" y="11%" fill="white" font-size="15" text-anchor="middle">${abbreviate(trueCeiling)}</text>
                ${bulletsArray.length<=1 ? "" : lineString}
                ${bulletsArray.length<=1 ? "" : lineString2}
                
                ${bulletsArray.length<=1 ? "" : pointString}
                ${svgString}
            </svg>
        </div>
        `;

        return graphString
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