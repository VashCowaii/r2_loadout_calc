substatColorMods = [
	"corrosive","corroded","acid","toxic",
	"bleed","bleeding",
	"shock","shocked","overload","overloaded",
	"slow","bulwark","haste","status","tarred","spirit of the red doe","drenched","gloom","brittle",
	"fire","burn","burning",
	"shield","shields",
	"blight","madness","fragmented","level 10","exposed", "gift of the forest",
	"curse",
	"root rot",
	"suppression"
]
// List all exclusion cases here
// \s = any whitespace character
substatColorExclusions = {
	"fire": ":|\\srate|\\sall",
    // "status": "\\seffect" //Use this if for whatever reason, a need to differentiate between STATUS and STATUS EFFECT arises.
}




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

function showOrHideDescription(elemID) {
    let elementStyle = readSelection(`attack${elemID}`).style;
    let arrowElement = readSelection(`attackArrow${elemID}`);

    if (elementStyle.display === "none") {
        elementStyle.display = "table-row";
        arrowElement.innerHTML = "&#9660";
    }
    else {
        elementStyle.display = "none";
        arrowElement.innerHTML = "&#9664";
    }
}

let scalingInfo = {
    "DamageScalarPerLevel": 0.035,
    "DamageScalarPerLevelInc": 0.025,
    "DamageScalarPerLevelExp": 0.93,
    "DamageScalarPerPlayer": 0.1,

    "HealthScalarPerLevel": 0.12,
    "HealthScalarPerLevelInc": 0.028,
    "HealthScalarPerLevelExp": 1.005,
    "HealthScalarPerPlayer": 0.25,

    "difficulty": {
        "Survivor": {
            "enemyDamage": 1,
            "miniBossDamage": 1,
            "worldBossDamage": 1,
        },
        "Veteran": {
            "enemyDamage": 1.25,
            "miniBossDamage": 1.1,
            "worldBossDamage": 1.1,
        },
        "Nightmare": {
            "enemyDamage": 2.15,
            "miniBossDamage": 0.9,
            "worldBossDamage": 0.9,
        },
        "Apocalypse": {
            "enemyDamage": 2.75,
            "miniBossDamage": 1,
            "worldBossDamage": 0.95,
        },
    }
}

let userSettings = {
    "vars": {
        "maxHealth": 100,
        "worldLevel": 21,
        "difficulty": 4,
        "bossHP": 100,
        "isVicious": false,
        "isSpiteful": false,
        "useBuffs": false,
        "effectiveDR": 0,
        "playerCount": 1,
        "includeStandard": true,
        "includePercentHP": true,
        "includeDOT": true,
        "includeDRBypass": true,
        "includeLethal": true,
        "includeElemental": true,

        "includeWorldBoss": true,
        "includeMiniBoss": true,

        "playerBleedRes": 0,
        "playerBurnRes": 0,
        "playerShockRes": 0,
        "playerAcidRes": 0,
        "playerBlightRes": 0,
    },
    updateUserInputs() {
        let HPvalue = Math.max(1,Math.min(+readSelection("playerHealthValue").value,1000));
        readSelection("playerHealthValue").value = HPvalue;
        userSettings.vars.maxHealth = Math.max(1,Math.min(HPvalue,1000));

        let worldLevel = +readSelection("worldLevelSlider").value;
        readSelection("worldLevelDisplay").innerHTML = worldLevel;
        userSettings.vars.worldLevel = worldLevel;

        let difficulty = +readSelection("difficultySlider").value;
        let diffName = ""
        switch (difficulty) {
            case 1: diffName = "Survivor";readSelection("difficultyDisplay").style.color = "#93CCEA"; break;
            case 2: diffName = "Veteran";readSelection("difficultyDisplay").style.color = "#90ee90"; break;
            case 3: diffName = "Nightmare";readSelection("difficultyDisplay").style.color = "orange"; break;
            case 4: diffName = "Apocalypse";readSelection("difficultyDisplay").style.color = "#e06666"; break;
        }
        userSettings.vars.difficulty = difficulty;
        readSelection("difficultyDisplay").innerHTML = diffName;

        let vicious = readSelection("isVicious").checked;
        userSettings.vars.isVicious = vicious;

        readSelection("bossHPSlider").disabled = false;
        let hpLevel = +readSelection("bossHPSlider").value;
        readSelection("bossHPDisplay").innerHTML = hpLevel;
        userSettings.vars.bossHP = hpLevel;

        let spiteful = readSelection("isSpiteful").checked;
        userSettings.vars.isSpiteful = spiteful;
        readSelection("spitefulDisplay").innerHTML = (tableGeneration.getSpitefulModifier()*100).toFixed(2);

        if (!spiteful) {
            readSelection("spitefulDisplay").innerHTML = 0.00
            readSelection("bossHPDisplay").innerHTML = 100;
            userSettings.vars.bossHP = 100;
            readSelection("bossHPSlider").value = 100;
            readSelection("bossHPSlider").disabled = true;
        }

        let useBuffs = readSelection("useBuffs").checked;
        userSettings.vars.useBuffs = useBuffs;

        let playerCount = +readSelection("playerCountSlider").value;
        readSelection("playerCountDisplay").innerHTML = playerCount;
        userSettings.vars.playerCount = playerCount;

        let effectiveDR = +readSelection("playerDRValue").value;
        userSettings.vars.effectiveDR = effectiveDR || 0.00;

        userSettings.vars.includeStandard = readSelection("includeStandard").checked;
        userSettings.vars.includePercentHP = readSelection("includePercentHP").checked;
        userSettings.vars.includeDOT = readSelection("includeDOT").checked;
        userSettings.vars.includeDRBypass = readSelection("includeDRBypass").checked;
        userSettings.vars.includeLethal = readSelection("includeLethal").checked;
        userSettings.vars.includeElemental = readSelection("includeElemental").checked;

        userSettings.vars.includeWorldBoss = readSelection("includeWorldBoss").checked;
        userSettings.vars.includeMiniBoss = readSelection("includeMiniBoss").checked;

        readSelection("playerBleedRes").value = Math.max(0,Math.min(80,readSelection("playerBleedRes").value))
        userSettings.vars.playerBleedRes = readSelection("playerBleedRes").value;
        readSelection("playerBurnRes").value = Math.max(0,Math.min(80,readSelection("playerBurnRes").value))
        userSettings.vars.playerBurnRes = readSelection("playerBurnRes").value;
        readSelection("playerShockRes").value = Math.max(0,Math.min(80,readSelection("playerShockRes").value))
        userSettings.vars.playerShockRes = readSelection("playerShockRes").value;
        readSelection("playerAcidRes").value = Math.max(0,Math.min(80,readSelection("playerAcidRes").value))
        userSettings.vars.playerAcidRes = readSelection("playerAcidRes").value;
        readSelection("playerBlightRes").value = Math.max(0,Math.min(80,readSelection("playerBlightRes").value))
        userSettings.vars.playerBlightRes = readSelection("playerBlightRes").value;


        tableGeneration.generateInitialTable();
    }
}

// let venomSelector = bosses.Venom;
// let venomAttacks = venomSelector.attacks;

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
        let worldLevel = userSettings.vars.worldLevel;
        //Calculate the world level scalar
        let compositeWorldScalar = tableGeneration.applyPlayerLevelScalar(worldLevel-1,1,scalingInfo.DamageScalarPerLevelInc,scalingInfo.DamageScalarPerLevelExp) * tableGeneration.applyPlayerLevelScalar(worldLevel-1,1,scalingInfo.DamageScalarPerLevel,1);

        //Determine if this is health based damage or not. If it is, apply the correct percentage.
        let damage = currentAttack.attackType === "%HP" ? userSettings.vars.maxHealth * (currentAttack.hpPercent/100) : currentAttack.damage;
        //If the world level is 21, then leave the values as they are. This is because all damage values were obtained in Apocalypse difficulty, with world level 21.
        //However if the world level is NOT 21, then work backwards to find the values for the current world level.
        damage = worldLevel===21 ? damage : (damage/scaling21)*compositeWorldScalar;

        let diffName = ""
        switch (userSettings.vars.difficulty) {
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
        let viciousScalar = 1 + (userSettings.vars.isVicious ? 0.15 : 0);
        let spitefulScalar = 1 + (userSettings.vars.isSpiteful ? tableGeneration.getSpitefulModifier() : 0);
        let playerCountScalar = 1 + (scalingInfo.DamageScalarPerPlayer * (userSettings.vars.playerCount-1));
        let bossBuffScalar = (userSettings.vars.useBuffs && currentAttack.isBuffed) ? (1 + boss.buffs) : 1;
        damage *= viciousScalar * spitefulScalar * playerCountScalar * bossBuffScalar;//Apply all scalar values to the main damage value

        let element = currentAttack.damageType;
        let resistanceValue = 0;

        switch (element) {
            case "Bleed": resistanceValue = userSettings.vars.playerBleedRes; break;
            case "Fire": resistanceValue = userSettings.vars.playerBurnRes; break;
            case "Shock": resistanceValue = userSettings.vars.playerShockRes; break;
            case "Acid": resistanceValue = userSettings.vars.playerAcidRes; break;
            case "Blight": resistanceValue = userSettings.vars.playerBlightRes; break;
        }

        if (!currentAttack.drBypass) {
            damage *= (1-(userSettings.vars.effectiveDR/100)) * (1-(resistanceValue/100));
        }//If the attack does not ignore DR, reduce by DR
        else {
            damage *= (1-resistanceValue); //still apply elem resistances
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
        let isAllAttacks = readSelection("listAllAttacks").checked;


        let attacksArray = tableGeneration.generateAttacksArray(isAllAttacks);
        let tableHeaders = `
        <tr>
            ${isAllAttacks ? '<th class="tableHeader hasHoverTooltip">Boss</th>' : ""}
            <th class="tableHeader" onmouseleave="hideTooltip()" onmouseenter="showTooltip('tableHeaderName')" id="tableHeaderName">Name</th>
            <th class="tableHeader" onmouseleave="hideTooltip()" onmouseenter="showTooltip('tableHeaderDamage')" id="tableHeaderDamage">Damage</th>
            <th class="tableHeader" onmouseleave="hideTooltip()" onmouseenter="showTooltip('tableHeaderStagger')" id="tableHeaderStagger">Stagger</th>
            <th class="tableHeader" onmouseleave="hideTooltip()" onmouseenter="showTooltip('tableHeaderDR')" id="tableHeaderDR">Ignores DR?</th>
            <th class="tableHeader" onmouseleave="hideTooltip()" onmouseenter="showTooltip('tableHeaderLethal')" id="tableHeaderLethal">Lethal</th>
            <th class="tableHeader" onmouseleave="hideTooltip()" onmouseenter="showTooltip('tableHeaderATKType')" id="tableHeaderATKType">Attack Type</th>
            <th class="tableHeader" onmouseleave="hideTooltip()" onmouseenter="showTooltip('tableHeaderDMGType')" id="tableHeaderDMGType">DMG Type</th>
            <th class="tableHeader" onmouseleave="hideTooltip()" onmouseenter="showTooltip('tableHeaderFrequency')" id="tableHeaderFrequency">Frequency</th>
            <th class="tableHeader" onmouseleave="hideTooltip()" onmouseenter="showTooltip('tableHeaderDPS')" id="tableHeaderDPS">DPS</th>
            <th class="tableHeader" onmouseleave="hideTooltip()" onmouseenter="showTooltip('tableHeaderDuration')" id="tableHeaderDuration">Duration</th>
            <th class="tableHeader" onmouseleave="hideTooltip()" onmouseenter="showTooltip('tableHeaderTotalDMG')" id="tableHeaderTotalDMG">Total Damage</th>
        </tr>`;
        if (isAllAttacks) {
            readSelection("bossSelectionOverviewBox").style.display = "none"
            readSelection("listingSettingsBox").style.display = "flex";

            let sortingKey = "";
            let selectedKey = readSelection("sortByKey").value;

            switch (selectedKey) {
                case "Damage": sortingKey = "damage"; break;
                case "Stagger": sortingKey = "stagger"; break;
                case "DPS": sortingKey = "dps"; break;
                case "Total DMG": sortingKey = "totalDamage"; break;
            }

            attacksArray.sort((a, b) => b[sortingKey] - a[sortingKey]);

            readSelection("toggledToList").style.color = "#e06666";
            readSelection("toggledToBoss").style.color = "gray";

        }
        else {
            readSelection("bossSelectionOverviewBox").style.display = "flex"
            readSelection("listingSettingsBox").style.display = "none";

            readSelection("toggledToList").style.color = "gray";
            readSelection("toggledToBoss").style.color = "#e06666";
        }
        readSelection("mainListHeaders").innerHTML = tableHeaders;
        readSelection("attackListDisplay").innerHTML = "";

        let attackID = 0;
        let htmlString = "";
        for (let i=0;i<attacksArray.length;i++) {
            let current = attacksArray[i];

            if (isAllAttacks) {
                //Skip any entries that don't meet our attack toggles if we are in full list mode
                if (!tableGeneration.shouldIncludeEntry(current)) {continue;}
                if (!userSettings.vars.includeWorldBoss && current.bossType ==="worldBoss") {continue}
                else if (!userSettings.vars.includeMiniBoss && current.bossType ==="miniBoss") {continue}
            }


            attackID++;
            htmlString += `
            <tr class="attackRow">
                ${isAllAttacks ? `<td data-name="Boss:">${current.bossName}</td>` : ""}
                <td class="attackName" data-name="Attack Name:">
                    <button class="descriptionButton" onclick="showOrHideDescription(${attackID})">
                        <div class="buttonTitle">${current.attackName}</div><div id="attackArrow${attackID}" class="attackArrow">&#9664;</div>
                    </button>
                </td>
                <td data-name="Damage:">${current.damage.toFixed(3)}</td>
                <td data-name="Stagger:" ${current.stagger>2 ? "style='color: #e06666'" : ""}>${current.stagger || ""}</td>
                <td data-name="${current.usesDR ? "Ignores DR:" : ""}" ${current.usesDR ? "style='color: #e06666'" : ""}>${current.usesDR ? "Yes" : ""}</td>
                <td data-name="${current.lethal ? "Lethal:" : ""}" ${current.lethal ? "style='color: #e06666'" : ""}>${current.isKillConditional ? "Conditional" :
                    current.lethal ? "Yes" : ""
                }</td>
                <td data-name="Attack Type:" ${current.attackType != "Hit" ? "style='color: #e06666'" : ""}>${current.attackType}</td>
                <td data-name="${current.damageType ? "DMG Type:" : ""}" ${current.damageType ? "style='color: red'" : ""}>${current.damageType ? tableGeneration.updateSubstatColor(current.damageType) : ""}</td>
                <td data-name="${current.frequency ? "Frequency:" : ""}">${current.frequency ? current.frequency.toFixed(3) + "s" : ""}</td>
                <td data-name="${current.dps ? "DPS:" : ""}">${current.dps ? current.dps.toFixed(3) : ""}</td>
                <td data-name="${current.frequency ? "Duration:" : ""}">${(current.frequency === 0) ? "" : 
                    !current.duration ? "&infin;" : current.duration + "s"}</td>
                <td data-name="${current.duration ? "Total DMG:" : ""}">${current.totalDamage ? current.totalDamage.toFixed(3) : ""}</td>
            </tr>
            <tr id="attack${attackID}" style="display: none;">
                <td colspan="9" class="attackDescription" data-name="">${current.description}</td>
            </tr>
            `;
        }
        readSelection("attackListDisplay").innerHTML = htmlString;
        
    }
}

populateGear("bossList",bosses)
readSelection("bossList").value = "Venom";
tableGeneration.generateInitialTable();

function applyPlayerLevelScalar(level,base,baseInc,exp) {
    return exp!=1 ? base+baseInc*(Math.pow(exp,Math.max(0,level))-1)/(exp-1): base+(Math.max(0,level)*baseInc)
}

for (let i=0;i<=20;i++) {
    let composite = applyPlayerLevelScalar(i,1,scalingInfo.DamageScalarPerLevelInc,scalingInfo.DamageScalarPerLevelExp) 
    * applyPlayerLevelScalar(i,1,scalingInfo.DamageScalarPerLevel,1);
    console.log(i,composite)
}





const tooltipStorage = {
    "tableHeaderName": "The name of the attack. If you're confused on any name I gave an attack, click the attack name to expand a description.",
    "tableHeaderDamage": "The total damage from a single instance of the attack. If the attack is a continuous damage over time attack, this value only represents one tick of damage within the combo.",
    "tableHeaderStagger": "The stagger level of the attack.<br>1 = Flinch<br>2 = Interrupt<br>3 = Knocked to the floor",
    "tableHeaderDR": "Whether the attack ignores player DR or not. More attacks do this than you'd think.",
    "tableHeaderLethal": "Can the attack kill you no matter what? Sometimes this can be conditional, like Bruin's impale attack needs you to be at or less than 30% max health in order to instakill you.",
    "tableHeaderATKType": "Is the attack a single hit, a continuous damage over time effect, %HP?",
    "tableHeaderDMGType": "The damage type of the attack: elemental, player damage, etc.",
    "tableHeaderFrequency": "If the attack is a continuous damage over time attack, how often does it deal its damage to the player assuming it can always hit.",
    "tableHeaderDPS": "If the attack is a continuous damage over time attack, how much damage does it deal per second, factoring in its frequency?",
    "tableHeaderDuration": "If the attack is a continuous damage over time attack, how long does it last? If you see an infinity symbol, that just means that the attack can potentially last forever or as long as the player wants it to.",
    "tableHeaderTotalDMG": "If the attack is a continuous damage over time attack, and if it has a fixed duration, how much total damage will it deal over the total duration?",


    "spitefulExplainer": "Spiteful increases boss damage for every 10%HP they are missing. It doesn't actually reach a 25% buff, but rather just beneath it. Use the boss HP slider after toggling spiteful on, to change the spiteful bonus.",
    "bossBuffExplainer": "Right now the only boss that actually buffs himself is Ravager with a multiplicative 10% bonus, granted it doesn't actually buff every single one of his attacks.",
    "selectedBossImage": "Boss images provided by ConRaven",
    "difficultyDisclaimer": "All values shown are gained from Apocalypse, WL21. We've mathed out how world level changes enemy damage, as well as how difficulty scales it as well, but not all attacks adhere to these alone. A good example would be Bruin's impale since it has distinct difficulty scalars separate from the general difficulty scalars and I don't account for those less than Apoc level, not yet at least.<br><br> TLDR: The values shown are only perfectly accurate on apoc WL21, if you lower the difficulty or WL, values may not always be 100% correct but will be in most cases.",
};

function showTooltip(elementId) {
    // console.log("triggered")
    const tooltip = document.getElementById('tooltip');
    const element = document.getElementById(elementId);
    const tooltipText = tooltipStorage[elementId];

    if (tooltipText) {
        tooltip.innerHTML = tableGeneration.updateSubstatColor(tooltipText);
        tooltip.style.display = 'block';

        element.addEventListener('mousemove', function (event) {
            tooltip.style.left = event.pageX + 10 + 'px';
            tooltip.style.top = event.pageY + 10 + 'px';
        });
    }
}

function hideTooltip() {
    const tooltip = document.getElementById('tooltip');
    tooltip.style.display = 'none';
}

document.querySelectorAll('.hasHoverTooltip').forEach(element => {
    element.addEventListener('mouseenter', () => showTooltip(element.id));
    element.addEventListener('mouseleave', hideTooltip);
});

userSettings.updateUserInputs();





//HEALTH
// 1.000000,
// 1.151360,
// 1.309614,
// 1.474812,
// 1.647007,
// 1.826251,
// 2.012596,
// 2.206095,
// 2.406800,
// 2.614766,
// 2.830046,
// 3.052694,
// 3.282765,
// 3.520313,
// 3.765395,
// 4.018064,
// 4.278378,
// 4.546393,
// 4.822165,
// 5.105751,
// 5.397210

//DAMAGE
// 1.000000,
// 1.060875,
// 1.121627,
// 1.182209,
// 1.242579,
// 1.302702,
// 1.362550,
// 1.422101,
// 1.481334,
// 1.540235,
// 1.598794,
// 1.657002,
// 1.714854,
// 1.772348,
// 1.829483,
// 1.886261,
// 1.942683,
// 1.998755,
// 2.054482,
// 2.109870,
// 2.164926