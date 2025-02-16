//Shorthand for selecting an element by ID. Follow up with .value or .innerHTML, etc.
function readSelection(elemID) {return document.getElementById(elemID);}

readSelection("bossDataBox").innerHTML = "";
const typeImages = {
    "Burst": "/TFD/TFDImages/PhysIcons/Icon_Weak_Burst.png",
    "Pierce": "/TFD/TFDImages/PhysIcons/Icon_Weak_Piercing.png",
    "Crush": "/TFD/TFDImages/PhysIcons/Icon_Weak_Crush.png",
}
const difficulty = {
    "Normal": "(N)",
    "Hard": "(H)",
    "VeryHard": "(A)",
}
let bossStatKeyLibaryCategory = {
    "": "",
    "Movement Speed": "Movement",
    "Climb Speed (Monster)": "Movement",
    "Sprint Speed": "Movement",
    "Walking Speed (Monster)": "Movement",
    "Environmental Destruction (Boss)": "Movement",


    "Critical Hit Resistance": "Resist",
    "Skill DEF": "Resist",
    "Penetration DEF": "Resist",
    "Max Common Gauge": "Frenzy",
    "Non-Attribute Resistance": "Resist",
    "Fire Resistance": "Resist",
    "Chill Resistance": "Resist",
    "Electric Resistance": "Resist",
    "Toxin Resistance": "Resist",
    "Stiffness Resistance Value": "Resist",
    "DEF": "Resist",
    


    "Max Rage Rate": "Rage",
    // "Stat_RageMaxRate": "Rage",
    
    "Max HP": "HP",
    "HP Recovery Time Interval": "HP",
    "HP Recovery Out of Combat": "HP",
    "HP Recovery In Combat": "HP",
    
    


    "Firearm ATK": "Damage",
    "Fire ATK": "Damage",
    "Chill ATK": "Damage",
    "Electric ATK": "Damage",
    "Toxic ATK": "Damage",
    "Firearm Critical Hit Rate": "Damage",
    "Firearm Critical Hit Damage": "Damage",
    "Projectile Penetration": "Damage",
    "Launcher Explosion Radius": "Damage",
    // "Penetration": "Damage",


    

    "Max Shield": "Shield",
    "Shield Recovery Time Interval": "Shield",
    "Shield Recovery Out of Combat": "Shield",
    "Shield Recovery In Combat": "Shield",
    // "Shield Recovery In Combat": "Shield",

    "Minimum Stagger Rate": "Stagger",
    "Maximum Stagger Rate": "Stagger",
    "Max Stagger Rate": "Stagger",
    "Stagger Decrease Rate": "Stagger",
    "Stagger Decrease Delay": "Stagger",
    "Stagger Damage Rate": "Stagger",
    "Stagger Cooldown": "Stagger",

    "Time Limit": "",
    "Frenzy Conversion Ratio": "Frenzy",
    "Frenzy Damage Rate": "Frenzy",
    "Frenzy Decrease Delay": "Frenzy",
    "Frenzy Decrease Rate": "Frenzy",
    "Frenzy Duration": "Frenzy",
    "Rage Damage Rate": "Rage",
    "Rage Decrease Rate": "Rage",
    "Rage Conversion Ratio": "Rage",
    "Colossus Level": "",
}

const bossKeys = Object.keys(monsterData);
const listArray = [];
for (let boss in monsterData) {
    let current = monsterData[boss];
    let displayName = boss;
    listArray.push(displayName)
    current.displayName = displayName;
}
listArray.sort((a, b) => b.localeCompare(a));

let dropdown = readSelection("bossList")

listArray.reverse().forEach(optionText => {
    const optionElement = document.createElement("option");
    optionElement.value = optionText.toLowerCase();
    optionElement.textContent = optionText;
    dropdown.appendChild(optionElement);
});


function generateBossData() {
    readSelection("bossDataBox").innerHTML = "";
    readSelection("bossDataTable").innerHTML = "";
    let currentBoss = dropdown.value;
    let currentPlayers = readSelection("playerCountSlider").value;
    readSelection("playerCountDisplay").innerHTML = currentPlayers;


    //assign the current boss
    let currentEntry = null;
    for (let boss in monsterData) {
        let current = monsterData[boss];
        if (current.displayName.toLowerCase() === currentBoss) {currentEntry = current;break;}
    }



    let HPIndex = statIndex["Max HP"];
    let totalLevels = (currentEntry.levelKeys[HPIndex].length-1) * 5;
    readSelection("enemyLevelSlider").max = totalLevels;


    let currentLevel = Math.min(totalLevels,+readSelection("enemyLevelSlider").value);
    if (currentLevel != 0) {
        currentLevel = Math.round(currentLevel / 5) * 5; // Snap to nearest multiple of 5
        if (currentLevel < 5) currentLevel = 5; // Ensure 5 is the next value after 1
    }
    else if (currentLevel === 0) {currentLevel = 1;}
    readSelection("enemyLevelSlider").value = currentLevel;
    readSelection("enemyLevelDisplay").innerHTML = currentLevel;
    const levelIndex = currentLevel === 1 ? 0 : currentLevel/5;

    //weak point data
    let partsString = `<div class="bossDataHeader">WP MODS</div>`;
    const partsRef = currentEntry.HitPoint;
    const partsRefKeys = partsRef ? Object.keys(partsRef) : [];
    for (let part of partsRefKeys) {
        let partName = partsRef[part].name.toUpperCase();
        partsString += `
        <div class="bossResistBoxHolder">
            <img class="bossWeaknessIcon" src="${typeImages[partsRef[part].type]}">
            <div>${partName}</div>
            ${partName === "BODY" ? "" :
            `<span class="rowTraceLine"></span>
            <span class="bossResistValue">+${partsRef[part].wpMod.toFixed(3)}x</span>`}
        </div>
        `
    }

    // let basicStats = currentEntry.levelKeys[currentPlayers];
    let bossLevel = currentEntry.stats;
    let bossStats = currentEntry.levelKeys;

    // readSelection("selectedBossImage").src = `/TFD/TFDImages/Bosses/${currentEntry.smallIcon}.png`;

    // "Legion": "None",
    readSelection("bossDataBox").innerHTML += `
        <div class="bossDataMainHolder">
                <div class="bossDataBreakdownBox">
                    <div class="bossDataHeaderBig">SUMMARY STATS LvL ${(bossStats[statIndex["Item Level"]][levelIndex] ?? 0).toLocaleString()}</div>
                    <div class="filtersInstructionsBox">These stats do not include mission-based modifiers. Yet. So 4-man erosion hp scaling bonuses don't show on the HP values, just as an example.</div>
                    <div class="bossDataCritResist">LEGION: ${currentEntry.Legion ? currentEntry.Legion.toUpperCase() : "N/A"}</div>
                    <div class="bossDataCritResist">HP: ${(bossStats[statIndex["Max HP"]][levelIndex] ?? 0).toLocaleString()} - Shield: ${(bossStats[statIndex["Max Shield"]][levelIndex] ?? 0).toLocaleString()}</div>

                    <div class="bossDataBreakdownBoxRow">
                        <div class="bossDataCritResistAttributes">
                            <div class="bossDataHeader">RESISTS</div>
                            <div class="bossResistBoxHolder">
                                <div>Firearm Crit</div>
                                <span class="rowTraceLine"></span>
                                <span class="bossResistValue">${(bossLevel[statIndex["Critical Hit Resistance"]] ?? 0).toLocaleString()}%</span>
                            </div>
                            <div class="bossResistBoxHolder">
                                <div>Skill Crit</div>
                                <span class="rowTraceLine"></span>
                                <span class="bossResistValue">${(bossLevel[statIndex["Skill DEF"]] ?? 0).toLocaleString()}%</span>
                            </div>


                            <!-- def -->
                            <div class="bossResistBoxHolder">
                                <div>DEF</div>
                                <span class="rowTraceLine"></span>
                                <span class="bossResistValue">${(bossStats[statIndex["DEF"]][levelIndex] ?? 0).toLocaleString()}</span>
                                <img class="bossWeaknessIcon" src="/TFD/TFDImages/DamageTypes/Icon_Stat_Pc_Def.png">
                            </div>

                            <!-- non attribute -->
                            <div class="bossResistBoxHolder">
                                <div>Non-Attribute</div>
                                <span class="rowTraceLine"></span>
                                <span class="bossResistValue">${(bossStats[statIndex["Non-Attribute Resistance"]][levelIndex] ?? 0).toLocaleString()}</span>
                                <img class="bossWeaknessIcon" src="/TFD/TFDImages/DamageTypes/Icon_DamageFloater_000.png">
                            </div>

                            <!-- fire -->
                            <div class="bossResistBoxHolder">
                                <div>Fire</div>
                                <span class="rowTraceLine"></span>
                                <span class="bossResistValue">${(bossStats[statIndex["Fire Resistance"]][levelIndex] ?? 0).toLocaleString()}</span>
                                <img class="bossWeaknessIcon" src="/TFD/TFDImages/DamageTypes/Icon_DamageFloater_001.png">
                            </div>
                            <!-- chill -->
                            <div class="bossResistBoxHolder">
                                <div>Chill</div>
                                <span class="rowTraceLine"></span>
                                <span class="bossResistValue">${(bossStats[statIndex["Chill Resistance"]][levelIndex] ?? 0).toLocaleString()}</span>
                                <img class="bossWeaknessIcon" src="/TFD/TFDImages/DamageTypes/Icon_DamageFloater_003.png">
                            </div>
                            <!-- Elec -->
                            <div class="bossResistBoxHolder">
                                <div>Electric</div>
                                <span class="rowTraceLine"></span>
                                <span class="bossResistValue">${(bossStats[statIndex["Electric Resistance"]][levelIndex] ?? 0).toLocaleString()}</span>
                                <img class="bossWeaknessIcon" src="/TFD/TFDImages/DamageTypes/Icon_DamageFloater_002.png">
                            </div>
                            <!-- toxin -->
                            <div class="bossResistBoxHolder">
                                <div>Toxic</div>
                                <span class="rowTraceLine"></span>
                                <span class="bossResistValue">${(bossStats[statIndex["Toxin Resistance"]][levelIndex] ?? 0).toLocaleString()}</span>
                                <img class="bossWeaknessIcon" src="/TFD/TFDImages/DamageTypes/Icon_DamageFloater_004.png">
                            </div>
                        </div>

                        <div class="bossDataPartsRow">${partsString}</div>
                    </div>
                    <!-- asdf -->
                </div>
            </div>
        `;

    let rowObject = {
        // ...currentEntry.stats,
        // ...bossStats
    }


    // let bossStats = currentEntry.levelKeys;
    // bossStats[statIndex["DEF"]][levelIndex]
    // statIndexNames[].properName

    for (let entry in currentEntry.stats) {
        rowObject[statIndexNames[entry].properName] = currentEntry.stats[entry];
    }

    let variableKeys = Object.keys(bossStats);

    for (let entry of variableKeys) {
        rowObject[statIndexNames[entry].properName] = bossStats[entry][levelIndex];
    }



    let rowObjectKeys = Object.keys(rowObject);
    let rowString = "<div class='bossDataHeaderBig'>DETAILED STATS</div>";
    let stringCategories = {
        
        "Damage": "",
        "HP": "",
        "Shield": "",
        "Resist": "",
        "Stagger": "",
        "Frenzy": "",
        "Rage": "",

        "Movement": "",
        "Misc": "",
    }
    const stringKeys = Object.keys(stringCategories);

    for (let entry of rowObjectKeys) {
        let stringCategory = bossStatKeyLibaryCategory[entry] || "Misc";
        stringCategories[stringCategory] += `<div class="statsRowNameDetailed">${entry}<span class="rowTraceLine"></span><span>${(rowObject[entry] ?? 0).toLocaleString()}</span></div>`
    }

    for (let key of stringKeys) {
        current = stringCategories[key];

        if (current) {
            rowString += `<div class='bossDataHeader'>${key.toUpperCase()}</div>`;
            rowString += current
        }
    }


    let tagsRow = "";
    if (currentEntry.Tags && currentEntry.Tags.length) {
        tagsRow = `<div class='bossDataHeaderBig'>TAGS</div> <div class="statsRowNameDetailed" style="display: flex;justify-content:center;align-items:center;white-space:normal;">`;

        for (let entry of currentEntry.Tags) {
            tagsRow += `${entry}, `
        }
        tagsRow += `</div><br>`
    }
        

    readSelection("bossDataBoxHalves").innerHTML = "";


    readSelection("bossDataTable").innerHTML += tagsRow + rowString;
}

generateBossData();