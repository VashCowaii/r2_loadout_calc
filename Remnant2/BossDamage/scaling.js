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
        "survivor": {
            "enemyDamage": 1,
            "miniBossDamage": 1,
            "worldBossDamage": 1,
        },
        "veteran": {
            "enemyDamage": 1.25,
            "miniBossDamage": 1.1,
            "worldBossDamage": 1.1,
        },
        "nightmare": {
            "enemyDamage": 2.15,
            "miniBossDamage": 0.9,
            "worldBossDamage": 0.9,
        },
        "apocalypse": {
            "enemyDamage": 2.75,
            "miniBossDamage": 1,
            "worldBossDamage": 0.95,
        },
    }
    //1.25, 1.275, 1.5, 2.2 BRUIN

    // bruin survivor WL1 = 82.5 dmg //

    // Apoc WL21 or PL20
// 279.072
// Surv WL21 or PL20
// 178.606
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
            case 1: diffName = "Survivor"; break;
            case 2: diffName = "Veteran"; break;
            case 3: diffName = "Nightmare"; break;
            case 4: diffName = "Apocalypse"; break;
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
    generateInitialTable() {
        readSelection("attackListDisplay").innerHTML = "";
        let boss = bosses[readSelection("bossList").value]
        let bossAttacks = boss.attacks;
        readSelection("selectedBossImage").src = boss.image;
        let scaling21 = tableGeneration.applyPlayerLevelScalar(21-1,1,scalingInfo.DamageScalarPerLevelInc,scalingInfo.DamageScalarPerLevelExp) * tableGeneration.applyPlayerLevelScalar(21-1,1,scalingInfo.DamageScalarPerLevel,1);
        let htmlString = "";
        let attackID = 0;
        for (let i=0;i<bossAttacks.length;i++) {
            attackID++;
            let currentAttack = bossAttacks[i];
            let damage = currentAttack.attackType === "%HP" ? userSettings.vars.maxHealth * (currentAttack.hpPercent/100) : currentAttack.damage;
            let worldLevel = userSettings.vars.worldLevel;
            let compositeWorldScalar = tableGeneration.applyPlayerLevelScalar(worldLevel-1,1,scalingInfo.DamageScalarPerLevelInc,scalingInfo.DamageScalarPerLevelExp) * tableGeneration.applyPlayerLevelScalar(worldLevel-1,1,scalingInfo.DamageScalarPerLevel,1);
            damage = worldLevel===21 ? damage : (damage/scaling21)*compositeWorldScalar;
            let affixScalars = ((1 + (userSettings.vars.isVicious ? 0.15 : 0)) 
            * (1 + (userSettings.vars.isSpiteful ? tableGeneration.getSpitefulModifier() : 0)) 
            * (1 + (scalingInfo.DamageScalarPerPlayer * (userSettings.vars.playerCount-1))));
            damage *= affixScalars;
            if (userSettings.vars.useBuffs && currentAttack.isBuffed) {damage *= (1 + boss.buffs);}//If the attack is buffed by a boss's self-buff, buff it
            if (!currentAttack.drBypass) {damage *= (1-(userSettings.vars.effectiveDR/100))}//If the attack does not ignore DR, reduce by DR
            let dps = currentAttack.frequency ? ((1/currentAttack.frequency)*damage).toFixed(3) + "/s" : "";
            htmlString += `
            <tr class="attackRow">
                <td class="attackName" data-name="Attack Name:">
                    <button class="descriptionButton" onclick="showOrHideDescription(${attackID})">
                        <div class="buttonTitle">${currentAttack.name}</div><div id="attackArrow${attackID}" class="attackArrow">&#9664;</div>
                    </button>
                </td>
                <td data-name="Damage:">${damage.toFixed(3)}</td>
                <td data-name="Stagger:" ${currentAttack.stagger>2 ? "style='color: red'" : ""}>${currentAttack.stagger || ""}</td>
                <td data-name="${currentAttack.drBypass ? "Ignores DR:" : ""}" ${currentAttack.drBypass ? "style='color: red'" : ""}>${currentAttack.drBypass ? "Yes" : ""}</td>
                <td data-name="${currentAttack.canBeLethal ? "Lethal:" : ""}" ${currentAttack.canBeLethal ? "style='color: red'" : ""}>${currentAttack.lethalCondition ? "Conditional" :
                    currentAttack.canBeLethal ? "Yes" : ""
                }</td>
                <td data-name="Attack Type:" ${currentAttack.attackType != "Hit" ? "style='color: red'" : ""}>${currentAttack.attackType}</td>
                <td data-name="DMG Type:" ${currentAttack.damageType ? "style='color: red'" : ""}>${currentAttack.damageType || ""}</td>
                <td data-name="${currentAttack.frequency ? "Frequency:" : ""}">${currentAttack.frequency ? currentAttack.frequency.toFixed(3) + "s" : ""}</td>
                <td data-name="${currentAttack.frequency ? "DPS:" : ""}">${dps}</td>
                <td data-name="${currentAttack.frequency ? "Duration:" : ""}">${(currentAttack.attackType === "Hit" && currentAttack.frequency === 0) ? "" : 
                    !currentAttack.duration ? "&infin;" : currentAttack.duration + "s"}</td>
                <td data-name="${currentAttack.duration ? "Total DMG:" : ""}">${(currentAttack.duration && currentAttack.frequency) ? ((currentAttack.duration/currentAttack.frequency)*damage).toFixed(3) : ""}</td>
            </tr>
            <tr id="attack${attackID}" style="display: none;">
                <td colspan="9" class="attackDescription" data-name="">${currentAttack.description}</td>
            </tr>
            `;
            // <td colspan="3" class="attackDescription">${currentAttack.description}</td>
            
            
            // `<div>${currentAttack.name}: ${currentAttack.damage}</div>`
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