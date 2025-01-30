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
    "Movespeed": "Movement",
    "Aim Movespeed": "Movement",
    "Berserk Movespeed": "Movement",
    "Movement Destruction": "Movement",
    "Crit Chance": "Damage",
    "Crit Damage": "Damage",
    "Firearm Crit Resist": "Resist",
    "Skill Crit Resist": "Resist",
    "Max Common Gauge": "Frenzy",
    "Penetration Resist": "Resist",
    "Max Rage Rate": "Rage",
    "Penetration": "Damage",
    "HP": "HP",
    "Shield": "Shield",
    "DEF": "Resist",
    "Non-Attribute": "Resist",
    "Fire": "Resist",
    "Chill": "Resist",
    "Electric": "Resist",
    "Toxic": "Resist",
    "ATK": "Damage",
    "Fire ATK": "Damage",
    "Chill ATK": "Damage",
    "Electric ATK": "Damage",
    "Toxic ATK": "Damage",
    "HP Recovery Interval": "HP",
    "HP Recovery": "HP",
    "HP Recovery In Combat": "HP",
    "Shield Recovery Interval": "Shield",
    "Shield Recovery": "Shield",
    "Shield Recovery In Combat": "Shield",

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

const bossKeys = Object.keys(bossData);
const listArray = [];
for (let boss in bossData) {
    let current = bossData[boss];
    let displayName = current.realName + " " + difficulty[current.difficulty];
    listArray.push(displayName)
    current.displayName = displayName;
}

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
    for (let boss in bossData) {
        let current = bossData[boss];
        if (current.displayName.toLowerCase() === currentBoss) {currentEntry = current;break;}
    }

    //weak point data
    let partsString = `<div class="bossDataHeader">WP MODS</div>`;
    const partsRef = currentEntry.weaknessKeys;
    const partsRefKeys = Object.keys(partsRef);
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

    let basicStats = currentEntry.levelKeys[currentPlayers];
    let bossLevel = basicStats.lvl;
    let bossStats = basicStats.lvlStats;

    readSelection("selectedBossImage").src = `/TFD/TFDImages/Bosses/${currentEntry.smallIcon}.png`;

    let frenzyRangeString = "";
    let frenzyCheck = bossStats["Frenzy Conversion Ratio"];
    const sumHPValue = bossStats.HP + bossStats.Shield;
    if (frenzyCheck) {
        let frenzyHP = sumHPValue * frenzyCheck;
        frenzyRangeString += `<div class="bossDataCritResist">Frenzy: ${(+frenzyHP.toFixed(0)).toLocaleString()}</div>`
    }

    let rageRangeString = "";
    let rageCheck = bossStats["Rage Conversion Ratio"];//Max Rage Gauge  //Max Rage Rate
    if (rageCheck) {
        let frenzyHP = sumHPValue * rageCheck;
        rageRangeString += `<div class="bossDataCritResist">Rage: ${(+frenzyHP.toFixed(0)).toLocaleString()}</div>`
    }
    let staggerRangeString = "";
    let staggerCheck = bossStats["Minimum Stagger Rate"];//Max Rage Gauge  //Max Rage Rate
    if (staggerCheck) {
        let minHP = sumHPValue * bossStats["Minimum Stagger Rate"];
        let maxHP = sumHPValue * bossStats["Maximum Stagger Rate"];
        staggerRangeString += `<div class="bossDataCritResist">Stagger: [${(+minHP.toFixed(0)).toLocaleString()} ~ ${(+maxHP.toFixed(0)).toLocaleString()}]</div>`
    }

    // <div class="bossDataHeaderBig">EHP: ${(bossStats.HP + bossStats.Shield).toLocaleString()}</div>

    // <div class="bossDataCritResist" style="white-space:normal;">${currentEntry.note}</div>
    readSelection("bossDataBox").innerHTML += `
        <div class="bossDataMainHolder">
                <div class="bossDataBreakdownBox">
                    <div class="bossDataHeaderBig">SUMMARY STATS LvL ${bossStats["Colossus Level"]}</div>
                    <div class="bossDataCritResist">HP: ${bossStats.HP.toLocaleString()} - Shield: ${bossStats.Shield.toLocaleString()}</div>
                    ${frenzyRangeString}
                    ${rageRangeString}
                    ${staggerRangeString}
                    

                    <div class="bossDataBreakdownBoxRow">
                        <div class="bossDataCritResistAttributes">
                            <div class="bossDataHeader">RESISTS</div>
                            <div class="bossResistBoxHolder">
                                <div>Firearm Crit</div>
                                <span class="rowTraceLine"></span>
                                <span class="bossResistValue">${currentEntry.stats["Firearm Crit Resist"].toFixed(0)}%</span>
                            </div>
                            <div class="bossResistBoxHolder">
                                <div>Skill Crit</div>
                                <span class="rowTraceLine"></span>
                                <span class="bossResistValue">${currentEntry.stats["Skill Crit Resist"].toFixed(0)}%</span>
                            </div>


                            <!-- def -->
                            <div class="bossResistBoxHolder">
                                <div>DEF</div>
                                <span class="rowTraceLine"></span>
                                <span class="bossResistValue">${bossStats.DEF.toLocaleString()}</span>
                                <img class="bossWeaknessIcon" src="/TFD/TFDImages/DamageTypes/Icon_Stat_Pc_Def.png">
                            </div>

                            <!-- non attribute -->
                            <div class="bossResistBoxHolder">
                                <div>Non-Attribute</div>
                                <span class="rowTraceLine"></span>
                                <span class="bossResistValue">${bossStats["Non-Attribute"].toLocaleString()}</span>
                                <img class="bossWeaknessIcon" src="/TFD/TFDImages/DamageTypes/Icon_DamageFloater_000.png">
                            </div>

                            <!-- fire -->
                            <div class="bossResistBoxHolder">
                                <div>Fire</div>
                                <span class="rowTraceLine"></span>
                                <span class="bossResistValue">${bossStats.Fire.toLocaleString()}</span>
                                <img class="bossWeaknessIcon" src="/TFD/TFDImages/DamageTypes/Icon_DamageFloater_001.png">
                            </div>
                            <!-- chill -->
                            <div class="bossResistBoxHolder">
                                <div>Chill</div>
                                <span class="rowTraceLine"></span>
                                <span class="bossResistValue">${bossStats.Chill.toLocaleString()}</span>
                                <img class="bossWeaknessIcon" src="/TFD/TFDImages/DamageTypes/Icon_DamageFloater_003.png">
                            </div>
                            <!-- Elec -->
                            <div class="bossResistBoxHolder">
                                <div>Electric</div>
                                <span class="rowTraceLine"></span>
                                <span class="bossResistValue">${bossStats.Electric.toLocaleString()}</span>
                                <img class="bossWeaknessIcon" src="/TFD/TFDImages/DamageTypes/Icon_DamageFloater_002.png">
                            </div>
                            <!-- toxin -->
                            <div class="bossResistBoxHolder">
                                <div>Toxic</div>
                                <span class="rowTraceLine"></span>
                                <span class="bossResistValue">${bossStats.Toxic.toLocaleString()}</span>
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
        ...currentEntry.stats,
        ...bossStats
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
        stringCategories[stringCategory] += `<div class="statsRowNameDetailed">${entry}<span class="rowTraceLine"></span><span>${rowObject[entry].toLocaleString()}</span></div>`
    }

    for (let key of stringKeys) {
        current = stringCategories[key];

        if (current) {
            rowString += `<div class='bossDataHeader'>${key.toUpperCase()}</div>`;
            rowString += current
        }
    }
        

    readSelection("bossDataBoxHalves").innerHTML = "";


    readSelection("bossDataTable").innerHTML += rowString;
}

generateBossData();