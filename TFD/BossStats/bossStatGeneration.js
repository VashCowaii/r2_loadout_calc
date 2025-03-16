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

let priorBoss = null;

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
    let rowStringAttacks = ``;
    let rowStringAttacks2 = ``;
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



    //if the boss name actually changes, redo the attacks list
    // let dropdown2 = readSelection("bossListAttacks");
    // let attackKeys = Object.keys(currentEntry.ActiveSkills);
    // if (priorBoss != currentBoss) {
    //     // ActiveSkills
    //     dropdown2.innerHTML = "";

    //     attackKeys.forEach(optionText => {
    //         const optionElement = document.createElement("option");
    //         optionElement.value = optionText;
    //         optionElement.textContent = optionText;
    //         dropdown2.appendChild(optionElement);
    //     });

    //     //populate first entry by default
    //     dropdown2.value = attackKeys[0];
    // }

    // priorBoss = currentBoss;
    // const currentAttack = currentEntry.ActiveSkills[dropdown2.value]
    // const currentOperations = currentAttack.operationsArray
    // const currentParameters = currentAttack.paramsArray

    // let attackTypeAttr = null;
    // if (bossStats["Fire ATK"] != null) {attackTypeAttr = "Fire ATK";}
    // else if (bossStats["Chill ATK"] != null) {attackTypeAttr = "Chill ATK";}
    // else if (bossStats["Toxic ATK"] != null) {attackTypeAttr = "Toxic ATK";}
    // else if (bossStats["Electric ATK"] != null) {attackTypeAttr = "Electric ATK";}

    // let baseFirearmATK = bossStats["ATK"];
    // let baseAttributeATK = bossStats[attackTypeAttr];
    // let baseCritDMG = currentEntry.stats["Crit Damage"];
    // let baseCritRate = currentEntry.stats["Crit Chance"];

    // if (currentOperations && currentOperations.length) {
    //     rowStringAttacks += ``;//<div style="white-space: normal;">Attack Modifiers</div>

    //     let bonusesObject = {};
    //     console.log(currentOperations)

    //     for (let entry of currentOperations) {
    //         let entryKeys = Object.keys(entry);

    //         rowStringAttacks2 += `<div class="attacksStatDisplayBoxHolder">`

    //         let FirearmATK = 0;
    //         let AttributeATK = 0;
    //         let bonusType = null;
    //         let eventType = null;

    //         // console.log(entryKeys)

    //         for (let innerEntry of entryKeys) {
    //             let currentInnerEntry = entry[innerEntry];

    //             if (innerEntry === "Firearm ATK") {FirearmATK = +currentInnerEntry;}
    //             else if (innerEntry === attackTypeAttr) {AttributeATK = +currentInnerEntry;}
    //             else if (innerEntry === "EventType") {eventType = currentInnerEntry.split(".")[1]}
    //             else if (innerEntry === "ModOp") {bonusType = currentInnerEntry;}

    //             if (innerEntry === attackTypeAttr) {console.log("matching attribute found 2",AttributeATK)}
    //             // rowStringAttacks2 += `<div class="statsRowNameDetailed">${innerEntry}<span class="rowTraceLine"></span><span>${currentInnerEntry}</span></div>`
    //         }

    //         if (bonusesObject[eventType] === undefined) {bonusesObject[eventType] = {
    //             "Firearm ATK": null,
    //             [attackTypeAttr]: null,
    //             "Bonus Type": null,
    //             "Event Type": eventType
    //         };}
    //         if (!!FirearmATK && eventType) {bonusesObject[eventType]["Firearm ATK"] = +(baseFirearmATK * (1 + FirearmATK)).toFixed(2)};
    //         if (!!AttributeATK && eventType) {bonusesObject[eventType][attackTypeAttr] = +(baseAttributeATK * (1 + AttributeATK)).toFixed(2);};
    //         bonusesObject[eventType]["Bonus Type"] = bonusType;
    //         bonusesObject[eventType]["Event Type"] = eventType;



    //         rowStringAttacks2 += `</div>`
    //     }

    //     let bonusKeys = Object.keys(bonusesObject);
    //     for (let entry of bonusKeys) {
    //         if (entry === "Period" || entry === "Activate") {continue;}

    //         let physical = bonusesObject[entry]["Firearm ATK"];
    //         let attribute = bonusesObject[entry][attackTypeAttr];
    //         let SUM = +(physical + attribute).toFixed(2);
    //         let SUMCrit = +(SUM * baseCritDMG).toFixed(2);
    //         let SUMCritAVG = +(SUM * ((baseCritDMG-1)*(baseCritRate/100) + 1) ).toFixed(2)

    //         rowStringAttacks += `
    //             <div style="white-space: normal;">${entry}</div>
    //             <div class="totalHealingBoxBreakdownRows">
    //                 <div class="totalHealingBoxHalfBreakdownRows hasHoverTooltip">
    //                     <div class="totalHealingHeader">Firearm ATK</div>
    //                     <div class="totalHealingValueBoss">${physical}</div>
    //                 </div>
    //                 <div class="totalHealingBoxHalfBreakdownRows hasHoverTooltip">
    //                     <div class="totalHealingHeader">${attackTypeAttr}</div>
    //                     <div class="totalHealingValueBoss">${attribute}</div>
    //                 </div>
    //                 <div class="totalHealingBoxHalfBreakdownRows hasHoverTooltip">
    //                     <div class="totalHealingHeader">SUM</div>
    //                     <div class="totalHealingValueBoss">${SUM}</div>
    //                 </div>
    //                 <div class="totalHealingBoxHalfBreakdownRows hasHoverTooltip">
    //                     <div class="totalHealingHeader">Crit</div>
    //                     <div class="totalHealingValueBoss">${SUMCrit}</div>
    //                 </div>
    //                 <div class="totalHealingBoxHalfBreakdownRows hasHoverTooltip">
    //                     <div class="totalHealingHeader">AVG</div>
    //                     <div class="totalHealingValueBoss">${SUMCritAVG}</div>
    //                 </div>
    //             </div>
    //             <br>
    //         `

    //         // `<div style="white-space: normal;">Attack Modifiers</div>`
    //     }



    //     // console.log(bonusesObject)
    // }
    // if (currentParameters && currentParameters.length) {
    //     rowStringAttacks += `<div style="white-space: normal;">Attack Parameters</div>`;
    // }
    // readSelection("bossAttacksTable").innerHTML = rowStringAttacks + rowStringAttacks2;
}

generateBossData();