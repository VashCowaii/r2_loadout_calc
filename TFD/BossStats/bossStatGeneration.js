//Shorthand for selecting an element by ID. Follow up with .value or .innerHTML, etc.
function readSelection(elemID) {return document.getElementById(elemID);}

    // const readSelection = document.getElementById;
    readSelection("bossDataBox").innerHTML = "";



    const typeImages = {
        "Burst": "/TFD/TFDImages/PhysIcons/Icon_Weak_Burst.png",
        "Pierce": "/TFD/TFDImages/PhysIcons/Icon_Weak_Piercing.png",
        "Crush": "/TFD/TFDImages/PhysIcons/Icon_Weak_Crush.png",
    }




    const bossKeys = Object.keys(bosses);


    for (let entry of bossKeys) {

        const bossRef = bosses[entry];
        const currentBoss = bosses[entry].shortName;
        if (currentBoss === "NONE") {continue;}
        console.log(bossRef.skillCrit)

        let partsString = ``;
        const partsRef = bossRef.parts;


        for (let part of partsRef) {
            partsString += `
            <div class="bossDataPartsBox">
                <div class="bossDataHeaderBody">
                    ${part.name.toUpperCase()}
                    <img class="bossWeaknessIcon" src="${typeImages[part.type]}">
                </div>
                <div class="totalHealingBox">
                    <div class="totalHealingBoxHalf hasHoverTooltip">
                        <div class="totalHealingHeaderBoss">+WeakPt.</div>
                        <div class="totalHealingValueBoss">+${part.wpMod.toFixed(3)}x</div>
                    </div>
                </div>
            </div>
            `
        }


        readSelection("bossDataBox").innerHTML += `
        <div class="bossDataMainHolder"> <!-- EXECUTIONER -->
                <div class="breakdownDisplayImageBoxBoss">
                    <img class="breakdownDisplayIcon" src="${bossRef.image}">
                </div>
                <div class="bossDataBreakdownBox">
                    <div class="bossDataHeader">${currentBoss.toUpperCase()}</div>
                    <div class="bossDataCritResist">Skill/Gun Crit Resist: ${(bossRef.skillCrit*100).toFixed(0)}% / ${(bossRef.gunCrit*100).toFixed(0)}%</div>
                    <div class="bossDataCritResist" style="white-space:normal;">${bossRef.note}</div>

                    <div class="bossDataCritResistAttributes">
                        <!-- def -->
                        <div class="bossResistBoxHolder">
                            <img class="bossWeaknessIcon" src="/TFD/TFDImages/DamageTypes/Icon_Stat_Pc_Def.png">
                            <span class="bossResistValue">${bossRef.DEF.toLocaleString()}</span>
                        </div>

                        <!-- non attribute -->
                        <div class="bossResistBoxHolder">
                            <img class="bossWeaknessIcon" src="/TFD/TFDImages/DamageTypes/Icon_DamageFloater_000.png">
                            <span class="bossResistValue">${bossRef["Non-Attribute"].toLocaleString()}</span>
                        </div>

                        <!-- fire -->
                        <div class="bossResistBoxHolder">
                            <img class="bossWeaknessIcon" src="/TFD/TFDImages/DamageTypes/Icon_DamageFloater_001.png">
                            <span class="bossResistValue">${bossRef.Fire.toLocaleString()}</span>
                        </div>

                        <!-- Elec -->
                        <div class="bossResistBoxHolder">
                            <img class="bossWeaknessIcon" src="/TFD/TFDImages/DamageTypes/Icon_DamageFloater_002.png">
                            <span class="bossResistValue">${bossRef.Electric.toLocaleString()}</span>
                        </div>

                        <!-- chill -->
                        <div class="bossResistBoxHolder">
                            <img class="bossWeaknessIcon" src="/TFD/TFDImages/DamageTypes/Icon_DamageFloater_003.png">
                            <span class="bossResistValue">${bossRef.Chill.toLocaleString()}</span>
                        </div>

                        <!-- toxin -->
                        <div class="bossResistBoxHolder">
                            <img class="bossWeaknessIcon" src="/TFD/TFDImages/DamageTypes/Icon_DamageFloater_004.png">
                            <span class="bossResistValue">${bossRef.Toxic.toLocaleString()}</span>
                        </div>
                    </div>

                    <div class="bossDataPartsRow">${partsString}</div>
                    <!-- asdf -->
                </div>
            </div>
        `
    }