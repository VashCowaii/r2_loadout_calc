//ripped code I made for the remnant section of my site here, some of this will be commented out and not relevant but will be there to remind me of how I did things later if I add more filtering options
function readSelection(elemID) {
	let selectedValue = document.getElementById(elemID);
	return selectedValue;
}


function populateGear(elemID,collection) {
    const select = readSelection(elemID);
    for (const gear in collection) {
        if (collection.hasOwnProperty(gear)) {
            const option = document.createElement("option");
            option.text = gear;
            select.appendChild(option);
        }
    }
}


//&#9664; LEFT FACING
//&#9660; DOWN FACING
//&infin;
let tableGeneration = {
    applyPlayerLevelScalar(level,base,baseInc,exp) {
        return exp!=1 ? base+baseInc*(Math.pow(exp,Math.max(0,level))-1)/(exp-1): base+(Math.max(0,level)*baseInc)
    },
    getSpitefulModifier() {
        let count = 10 - (userSettings.vars.bossHP/10);
        let baseMulti = 0.0277;

        return count*baseMulti;
    }, 
    generateAttacksArray(isAllAttacks) {

        let attacksArray = [];

        if (!isAllAttacks) {
            let boss = bosses[readSelection("bossList").value]
            let bossAttacks = boss.attacks;
            readSelection("selectedBossImage").src = boss.image;

            for (let i=0;i<bossAttacks.length;i++) {
                let currentAttack = bossAttacks[i];
                attacksArray.push(tableGeneration.createAttackEntry(currentAttack,boss));
            }
            return attacksArray;
        }
        else {
            let bossNamesArray = Object.keys(bosses);
            for (let name of bossNamesArray) {
                let boss = bosses[name];
                let bossAttacks = boss.attacks;

                for (let i=0;i<bossAttacks.length;i++) {
                    let currentAttack = bossAttacks[i];
                    attacksArray.push(tableGeneration.createAttackEntry(currentAttack,boss));
                }
            }
            return attacksArray
        }

    },
    createAttackEntry(currentAttack,boss) {
        let scaling21 = tableGeneration.applyPlayerLevelScalar(21-1,1,scalingInfo.DamageScalarPerLevelInc,scalingInfo.DamageScalarPerLevelExp) * tableGeneration.applyPlayerLevelScalar(21-1,1,scalingInfo.DamageScalarPerLevel,1);
        const setRef = userSettings.vars;
        let worldLevel = setRef.worldLevel;
        //Calculate the world level scalar
        let compositeWorldScalar = tableGeneration.applyPlayerLevelScalar(worldLevel-1,1,scalingInfo.DamageScalarPerLevelInc,scalingInfo.DamageScalarPerLevelExp) * tableGeneration.applyPlayerLevelScalar(worldLevel-1,1,scalingInfo.DamageScalarPerLevel,1);

        //Determine if this is health based damage or not. If it is, apply the correct percentage.
        let damage = currentAttack.attackType === "%HP" ? setRef.maxHealth * (currentAttack.hpPercent/100) : currentAttack.damage;
        //If the world level is 21, then leave the values as they are. This is because all damage values were obtained in Apocalypse difficulty, with world level 21.
        //However if the world level is NOT 21, then work backwards to find the values for the current world level.
        damage = worldLevel===21 ? damage : (damage/scaling21)*compositeWorldScalar;

        let diffName = ""
        switch (setRef.difficulty) {
            case 1: diffName = "Survivor"; break;
            case 2: diffName = "Veteran"; break;
            case 3: diffName = "Nightmare"; break;
            case 4: diffName = "Apocalypse"; break;
        }

        let apocEnemyScalar = scalingInfo.difficulty.Apocalypse.enemyDamage;
        let apocMiniBossScalar = scalingInfo.difficulty.Apocalypse.miniBossDamage * apocEnemyScalar;
        let apocWorldBossScalar = scalingInfo.difficulty.Apocalypse.worldBossDamage * apocEnemyScalar;
        let currentApocBossScalar = boss.bossType==="worldBoss" ? apocWorldBossScalar : apocMiniBossScalar;
        let currentDiffBossScalar = scalingInfo.difficulty[diffName][`${boss.bossType}Damage`];

        damage = diffName==="Apocalypse" ? damage : (damage/currentApocBossScalar)*currentDiffBossScalar;
        //Establish if the boss has damage affixes, how many players are active in the world, and if the boss has a buff to apply if selected
        let viciousScalar = 1 + (setRef.isVicious ? 0.15 : 0);
        let spitefulScalar = 1 + (setRef.isSpiteful ? tableGeneration.getSpitefulModifier() : 0);
        let playerCountScalar = 1 + (scalingInfo.DamageScalarPerPlayer * (setRef.playerCount-1));
        let bossBuffScalar = (setRef.useBuffs && currentAttack.isBuffed) ? (1 + boss.buffs) : 1;
        damage *= viciousScalar * spitefulScalar * playerCountScalar * bossBuffScalar;//Apply all scalar values to the main damage value

        let element = currentAttack.damageType;
        let resistanceValue = 0;

        switch (element) {
            case "Bleed": resistanceValue = +setRef.playerBleedRes; break;
            case "Fire": resistanceValue = +setRef.playerBurnRes; break;
            case "Shock": resistanceValue = +setRef.playerShockRes; break;
            case "Acid": resistanceValue = +setRef.playerAcidRes; break;
            case "Blight": resistanceValue = +setRef.playerBlightRes; break;
        }

        if (!currentAttack.drBypass) {
            damage *= (1-(setRef.effectiveDR/100)) * (1-(resistanceValue/100));
        }//If the attack does not ignore DR, reduce by DR
        else {
            damage *= (1-(resistanceValue/100)); //still apply elem resistances
        }
        let dps = currentAttack.frequency ? ((1/currentAttack.frequency)*damage) : 0;//If the attack does continuous damage, calculate its DPS
        return {
            bossName: boss.shortName,
            bossType: boss.bossType,
            attackName: currentAttack.name,
            damage,
            stagger: currentAttack.stagger,
            usesDR: currentAttack.drBypass,
            lethal: currentAttack.canBeLethal,
            isKillConditional: currentAttack.lethalCondition,
            attackType: currentAttack.attackType,
            damageType: element,
            frequency: currentAttack.frequency,
            dps,
            duration: currentAttack.duration,
            totalDamage: (currentAttack.duration && currentAttack.frequency) ? (currentAttack.duration/currentAttack.frequency)*damage : 0,
            description: currentAttack.description,
        }
    },
    shouldIncludeEntry(current) {
        const vars = userSettings.vars;
    
        // Check individual settings
        const conditions = [
            {condition: current.damageType, setting: vars.includeElemental},
            {condition: current.lethal, setting: vars.includeLethal},
            {condition: current.usesDR, setting: vars.includeDRBypass},
            {condition: current.frequency, setting: vars.includeDOT},
            {condition: current.attackType === "%HP", setting: vars.includePercentHP},
            { 
                condition: !current.damageType && !current.lethal && !current.usesDR && !current.frequency && current.attackType === "Hit", 
                setting: vars.includeStandard 
            }
        ];
    
        //Loop through any conditions to see if they are met, and if so include them
        for (let i = 0; i < conditions.length; i++) {
            if (conditions[i].condition && conditions[i].setting) {
                return true;
            }
        }
    
        return false;// If no conditions are met, skip the entry
    },
    updateSubstatColor(description) {
        for (let substat of substatColorMods) {
          //And if the description contains the looped substat ANYWHERE within it, proceed
          if (description.toLowerCase().includes(substat) === true) {
            let substatExclusion = "";
            if (substatColorExclusions[substat] != undefined) {
              //(?!) = lookahead is not [whatever you don't want to be next]
              substatExclusion = `(?!${substatColorExclusions[substat]})`;
              //This is to only find exclusion values based upon the specified substat. So fire = rate, status = effect, etc.
            }
            //b = word boundary, g = global, i = case insensitive. Any \\ is just bc \ is an escape itself and needs to be escaped. \s = whitespace character
            let regEx = new RegExp(`\\b(${substat})${substatExclusion}\\b`, "gi");
            description = description.replace(regEx, `<span class="${substat.replace(/\s/g,"")}">${substat.toUpperCase()}</span>`);
          }
        }
        //d= digit character, w = word character
        let regExNumbers = new RegExp(`\\b(\\d[%\\w]*)`, "gi");
        description = description.replace(regExNumbers, `<span class="numberTag">$&</span>`);
        return description;
    },
    generateInitialTable() {


        // let attacksArray = contentGuides;
        let tableHeaders = `
        <tr>
            <th class="tableHeader hasHoverTooltip" id="tableHeaderName">Topic</th>
            <th class="tableHeader hasHoverTooltip" id="asdf">Author</th>
            <th class="tableHeader hasHoverTooltip" id="tableHeaderDamage">Platform</th>
            <th class="tableHeader hasHoverTooltip" id="tableHeaderStagger">Date</th>
            <th class="tableHeader hasHoverTooltip" id="tableHeaderDR">Type</th>
            <th class="tableHeader hasHoverTooltip" id="tableHeaderLethal">Outdated?</th>
            <th class="tableHeader hasHoverTooltip" id="tableHeaderATKType">See Pin?</th>
        </tr>`;
        // if (isAllAttacks) {
        //     readSelection("bossSelectionOverviewBox").style.display = "none"
        //     readSelection("listingSettingsBox").style.display = "flex";

        //     let sortingKey = "";
        //     let selectedKey = readSelection("sortByKey").value;

        //     switch (selectedKey) {
        //         case "Damage": sortingKey = "damage"; break;
        //         case "Stagger": sortingKey = "stagger"; break;
        //         case "DPS": sortingKey = "dps"; break;
        //         case "Total DMG": sortingKey = "totalDamage"; break;
        //     }

        //     attacksArray.sort((a, b) => b[sortingKey] - a[sortingKey]);

        //     readSelection("toggledToList").style.color = "#e06666";
        //     readSelection("toggledToBoss").style.color = "gray";

        // }
        // else {
        //     readSelection("bossSelectionOverviewBox").style.display = "flex"
        //     readSelection("listingSettingsBox").style.display = "none";

        //     readSelection("toggledToList").style.color = "gray";
        //     readSelection("toggledToBoss").style.color = "#e06666";
        // }
        readSelection("mainListHeaders").innerHTML = tableHeaders;
        // readSelection("attackListDisplay").innerHTML = "";

        // let attackID = 0;
        let htmlString = "";
        for (let i=0;i<contentGuides.length;i++) {
            let current = contentGuides[i];


            const typeCheck = readSelection("sortByType").value;
            if (typeCheck != "ALL" && typeCheck != current.contentType) {continue;}
            if (typeCheck != "ALL" && typeCheck != "Build") {
                readSelection("sortByEntity").value = "ALL";
                readSelection("entityContainer").style.display = "none";
            }
            else {
                readSelection("entityContainer").style.display = "block";
            }
            const entityCheck = readSelection("sortByEntity").value;
            const entitySet = new Set(current.entityArray)
            if (entityCheck != "ALL" && !entitySet.has(entityCheck)) {continue;}
            // if (isAllAttacks) {
            //     //Skip any entries that don't meet our attack toggles if we are in full list mode
            //     if (!tableGeneration.shouldIncludeEntry(current)) {continue;}
            //     if (!userSettings.vars.includeWorldBoss && current.bossType ==="worldBoss") {continue}
            //     else if (!userSettings.vars.includeMiniBoss && current.bossType ==="miniBoss") {continue}
            // }

            //make the topic the link here later
            const dateString = current.date.toString();
            const linkString = current.isYTVid ? `https://youtu.be/${current.embedLink}` : `https://twitter.com/TfdMaths/status/${current.embedLink}`;
            htmlString += `
            <tr class="attackRow">
                <td data-name="Topic:"><a href="${linkString}" target="_blank" rel="noopener noreferrer">${current.topic}</a></td>
                <td data-name="Author:">${current.author}</td>
                <td data-name="Platform:">${current.isYTVid ? `<img class="footerIconTable" src="/images/youtube.webp" alt="YT Icon">` : `<img class="footerIconTable" src="/images/twitter.webp" alt="Twitter Icon">`}</td>
                <td data-name="Date:">${dateString.slice(0, 4) + '/' + dateString.slice(4, 6) + '/' + dateString.slice(6)}</td>
                <td data-name="Type:">${current.contentType}</td>
                <td data-name="Outdated?:">${current.isOutdated ? "Yes": ""}</td>
                <td data-name="Pinned Comment Info:">${current.pinnedCommentFlag ? "Yes" : ""}</td>

            </tr>
            <tr style="display: none;">
                <td colspan="9" class="attackDescription" data-name="">${current.description}</td>
            </tr>
            `;

            // attackID++;
            // htmlString += `
            // <tr class="attackRow">
            //     ${isAllAttacks ? `<td data-name="Boss:">${current.bossName}</td>` : ""}
            //     <td class="attackName" data-name="Attack Name:">
            //         <button class="descriptionButton" onclick="showOrHideDescription(${attackID})">
            //             <div class="buttonTitle">${current.attackName}</div><div id="attackArrow${attackID}" class="attackArrow">&#9664;</div>
            //         </button>
            //     </td>
            //     <td data-name="Damage:">${current.damage.toFixed(3)}</td>
            //     <td data-name="Stagger:" ${current.stagger>2 ? "style='color: #e06666'" : ""}>${current.stagger || ""}</td>
            //     <td data-name="${current.usesDR ? "Ignores DR:" : ""}" ${current.usesDR ? "style='color: #e06666'" : ""}>${current.usesDR ? "Yes" : ""}</td>
            //     <td data-name="${current.lethal ? "Lethal:" : ""}" ${current.lethal ? "style='color: #e06666'" : ""}>${current.isKillConditional ? "Conditional" :
            //         current.lethal ? "Yes" : ""
            //     }</td>
            //     <td data-name="Attack Type:" ${current.attackType != "Hit" ? "style='color: #e06666'" : ""}>${current.attackType}</td>
            //     <td data-name="${current.damageType ? "DMG Type:" : ""}" ${current.damageType ? "style='color: red'" : ""}>${current.damageType ? tableGeneration.updateSubstatColor(current.damageType) : ""}</td>
            //     <td data-name="${current.frequency ? "Frequency:" : ""}">${current.frequency ? current.frequency.toFixed(3) + "s" : ""}</td>
            //     <td data-name="${current.dps ? "DPS:" : ""}">${current.dps ? current.dps.toFixed(3) : ""}</td>
            //     <td data-name="${current.frequency ? "Duration:" : ""}">${(current.frequency === 0) ? "" : 
            //         !current.duration ? "&infin;" : current.duration + "s"}</td>
            //     <td data-name="${current.duration ? "Total DMG:" : ""}">${current.totalDamage ? current.totalDamage.toFixed(3) : ""}</td>
            // </tr>
            // <tr id="attack${attackID}" style="display: none;">
            //     <td colspan="9" class="attackDescription" data-name="">${current.description}</td>
            // </tr>
            // `;
        }
        readSelection("attackListDisplay").innerHTML = htmlString;
        // tooltips.loadTooltips();//update tooltips for things that were just generated
        
    }
}

let tagArray = ["ALL"];
for (let entry of contentGuides) {
    tagArray.push(...entry.entityArray);
}
let tagSet = new Set(tagArray);
let sortedTags = [...tagSet].sort();

sortedTags.forEach(optionText => {
    const option = document.createElement("option");  // Create a new <option> element
    option.value = optionText;                        // Set the option's value
    option.textContent = optionText;                  // Set the text that appears in the dropdown
    readSelection("sortByEntity").appendChild(option);                // Append the option to the <select>
});

// populateGear("bossList",bosses)
// readSelection("bossList").value = "Venom";
// manipulateURL.importURLparameters();
tableGeneration.generateInitialTable();

// function applyPlayerLevelScalar(level,base,baseInc,exp) {
//     return exp!=1 ? base+baseInc*(Math.pow(exp,Math.max(0,level))-1)/(exp-1): base+(Math.max(0,level)*baseInc)
// }

// for (let i=0;i<=20;i++) {
//     let composite = applyPlayerLevelScalar(i,1,scalingInfo.DamageScalarPerLevelInc,scalingInfo.DamageScalarPerLevelExp) 
//     * applyPlayerLevelScalar(i,1,scalingInfo.DamageScalarPerLevel,1);
//     console.log(i,composite)
// }

// userSettings.updateUserInputs();
// manipulateURL.importURLparameters();