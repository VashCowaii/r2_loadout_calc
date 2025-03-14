//Shorthand for selecting an element by ID. Follow up with .value or .innerHTML, etc.
function readSelection(elemID) {return document.getElementById(elemID);}

// populateSelectedLevel();


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
        // let attacksArray = tableGeneration.generateAttacksArray(isAllAttacks);

        let currentUserInput = readSelection("statFilterBoxInput").value;

        // erosionModsData
        function fuzzyMatch(input, itemParam1, itemParam2) {
            const search = input.toLowerCase();
            return itemParam1.toLowerCase().includes(search) || itemParam2.toLowerCase().includes(search);
        }

        let tableHeaders = `
        <tr>
            <th class="tableHeader hasHoverTooltip" id=""><div class="centeredTableHeader">Stat ID</div></th>
            <th class="tableHeader hasHoverTooltip" id=""><div class="centeredTableHeader">Internal Name</div></th>
            <th class="tableHeader hasHoverTooltip" id=""><div class="centeredTableHeader">Proper Name</div></th>
            <th class="tableHeader hasHoverTooltip" id=""><div class="centeredTableHeader">Value Floor</div></th>
            <th class="tableHeader hasHoverTooltip" id=""><div class="centeredTableHeader">Value Ceiling</div></th>
            <th class="tableHeader hasHoverTooltip" id=""><div class="centeredTableHeader">Added Floor</div></th>
            <th class="tableHeader hasHoverTooltip" id=""><div class="centeredTableHeader">Added Ceiling</div></th>
            <th class="tableHeader hasHoverTooltip" id=""><div class="centeredTableHeader">Multi Floor</div></th>
            <th class="tableHeader hasHoverTooltip" id=""><div class="centeredTableHeader">Multi Ceiling</div></th>
            <th class="tableHeader hasHoverTooltip" id=""><div class="centeredTableHeader">Display Units</div></th>
            <th class="tableHeader hasHoverTooltip" id=""><div class="centeredTableHeader">Display Decimals</div></th>
        </tr>`;


        let levelString = "";

        let levelKeys = Object.keys(statListData);

        for (level of levelKeys) {
            let currentReference = statListData[level];

            if (!fuzzyMatch(currentUserInput,currentReference.name,currentReference.objectKey)) {continue;}

            // console.log(currentReference["Non-Attribute Power"])
            let addedLimitChecker = currentReference.Limits.BonusesAdded[0] === 0 && currentReference.Limits.BonusesAdded[1] === 0;
            let multiLimitChecker = currentReference.Limits.BonusesMultiplied[0] === 0 && currentReference.Limits.BonusesMultiplied[1] === 0;
            levelString += `<div class="statsDisplayBoxEntryHolder">
                <div class="statsDisplayBoxEntryHolderHeader">${currentReference.name}</div>


                <div class="basicsDRContainer basicsDRContainerStatDisplay hasHoverTooltip" style="margin-bottom:2px"><span class="basicsDRValue basicsDRValueStatDisplay">${currentReference.objectKey}</span></div>

                <div class="statsDisplayBoxEntryHolderHeaderMini">LIMITS</div>


                <div class="totalHealingBoxBreakdownRows">
                    <div class="totalHealingBoxHalfBreakdownRows hasHoverTooltip">
                        <div class="totalHealingHeader">Flat Value Limits</div>
                        <div class="totalHealingValueBoss">[${currentReference.Limits.FlatValueLimit[0]}, ${currentReference.Limits.FlatValueLimit[1]}]</div>
                    </div>
                    <div class="totalHealingBoxHalfBreakdownRows hasHoverTooltip">
                        <div class="totalHealingHeader">Added Limits</div>
                        <div class="totalHealingValueBoss">[${addedLimitChecker ? "None" : currentReference.Limits.BonusesAdded}]</div>
                    </div>
                    <div class="totalHealingBoxHalfBreakdownRows hasHoverTooltip">
                        <div class="totalHealingHeader">Multi Limits</div>
                        <div class="totalHealingValueBoss">[${multiLimitChecker ? "None" : currentReference.Limits.BonusesMultiplied}]</div>
                    </div>
                </div>

                <div class="basicsDRContainer hasHoverTooltip">
                <span class="basicsDRStat">Display Unit</span><span class="rowTraceLine"></span><span class="basicsDRValue" id="">${currentReference.UnitsDisplay}</span>
                </div>
                <div class="basicsDRContainer hasHoverTooltip" style="margin-bottom:2px">
                <span class="basicsDRStat">UI Decimals</span><span class="rowTraceLine"></span><span class="basicsDRValue" id="">${currentReference.UIDecimalPlaces}</span>
                </div>
                
            </div>`
        }
        // addedLimitChecker
        //currentReference.Limits.BonusesAdded[0]}, ${currentReference.Limits.BonusesAdded[1]

        // <td data-name="Stat ID:">${currentReference.ID}</td>
        //         <td data-name="Internal Name:">${currentReference.objectKey}</td>
        //         <td data-name="Proper Name:">${currentReference.name}</td>
        //         <td data-name="Value Floor:">${currentReference.Limits.FlatValueLimit[0]}</td>
        //         <td data-name="Value Ceiling:">${currentReference.Limits.FlatValueLimit[1]}</td>
        //         <td data-name="Added Floor:">${currentReference.Limits.BonusesAdded[0]}</td>
        //         <td data-name="Added Ceiling:">${currentReference.Limits.BonusesAdded[1]}</td>
        //         <td data-name="Multi Floor:">${currentReference.Limits.BonusesMultiplied[0]}</td>
        //         <td data-name="Multi Ceiling:">${currentReference.Limits.BonusesMultiplied[1]}</td>
        //         <td data-name="Display Units:">${currentReference.UnitsDisplay}</td>
        //         <td data-name="Display Decimals:">${currentReference.UIDecimalPlaces}</td>

        // readSelection("mainListHeaders").innerHTML = tableHeaders;
        readSelection("attackListDisplay").innerHTML = levelString;//"";


        // tooltips.loadTooltips();//update tooltips for things that were just generated
        
    }
}



tableGeneration.generateInitialTable();