const calcs = {
    getHealth(index,characterRef) {
        const baseCharacterHealth = characterRef.HP;
        const baseHealthBonus = index.HP + (index.boostHPFromShield ? calcs.getShield(index,characterRef).totalShield * modData["Overwhelming HP"].conversionRate : 0);
        const healthPercentBonus = index["HP%"];
        const totalHealth = Math.max(1,(baseCharacterHealth + baseHealthBonus) * (1 + healthPercentBonus));
        const displayHealth = index.isHPSetTo1 ? 1 : totalHealth;

        return {baseCharacterHealth,baseHealthBonus,healthPercentBonus,totalHealth,displayHealth}
    },
    getShield(index,characterRef) {
        const baseCharacterShield = characterRef.Shield;
        const baseShieldBonus = index.Shield + (index.boostShieldFromHP ? calcs.getHealth(index,characterRef).totalHealth * modData["Overwhelming Shield"].conversionRate : 0);
        const shieldPercentBonus = index["Shield%"];
        const totalShield = Math.max(1,(baseCharacterShield + baseShieldBonus) * (1 + shieldPercentBonus));
        const displayShield = index.isShieldSetTo1 ? 1 : totalShield;

        return {baseCharacterShield,baseShieldBonus,shieldPercentBonus,totalShield,displayShield}
    },
    getDefense(index,characterRef) {
        const baseCharacterDEF = characterRef.DEF;
        const baseDEFBonus = index.DEF + (index.boostDEFFromHP ? calcs.getHealth(index,characterRef).totalHealth * modData["Overwhelming DEF"].conversionRate : 0);
        const DEFPercentBonus = index["DEF%"];
        const totalDEF = Math.max((baseCharacterDEF + baseDEFBonus) * (1 + DEFPercentBonus));
        const displayDEF = totalDEF;

        return {baseCharacterDEF,baseDEFBonus,DEFPercentBonus,totalDEF,displayDEF}
    },
    getMP(index,characterRef) {
        const baseCharacterMP = characterRef.MP;
        const baseMPBonus = index.MP;
        const MPPercentBonus = index["MP%"];
        const totalMP = (baseCharacterMP + baseMPBonus) * (1 + MPPercentBonus);
        const displayMP = totalMP;

        return {baseCharacterMP,baseMPBonus,MPPercentBonus,totalMP,displayMP}
    },
    getRecovery(index,characterRef) {
        //MP
        const MPRecoveryModifier = index.MPRecovery;

        const baseCharacterMPInCombat = characterRef.MPInCombat;
        const baseMPInCombatBonus = index.MPInCombat;
        const totalMPInCombat = (baseCharacterMPInCombat+baseMPInCombatBonus) * (1+MPRecoveryModifier);

        const baseCharacterMPOutCombat = characterRef.MPOutCombat;
        const baseMPOutCombatBonus = index.MPOutCombat;
        const totalMPOutCombat = (baseCharacterMPOutCombat+baseMPOutCombatBonus) * (1+MPRecoveryModifier);

        //SHIELDS
        const shieldRecoveryModifier = index.ShieldRecovery;

        const baseCharacterShieldInCombat = characterRef.ShieldInCombat;
        const baseShieldInCombatBonus = index.ShieldInCombat;
        const totalShieldInCombat = (baseCharacterShieldInCombat+baseShieldInCombatBonus) * (1 + shieldRecoveryModifier)

        const baseCharacterShieldOutCombat = characterRef.ShieldOutCombat;
        const baseShieldOutCombatBonus = index.ShieldOutCombat;
        const totalShieldOutCombat = (baseCharacterShieldOutCombat+baseShieldOutCombatBonus) * (1 + shieldRecoveryModifier)

        //HP
        const totalHPRecoveryModifier = index.HPRecovery;
        const totalHPHealModifier = index.HPHeal;

        return {
            MPRecoveryModifier,baseCharacterMPInCombat,baseMPInCombatBonus,totalMPInCombat,baseCharacterMPOutCombat,baseMPOutCombatBonus,totalMPOutCombat,
            shieldRecoveryModifier,baseCharacterShieldInCombat,baseShieldInCombatBonus,totalShieldInCombat,baseCharacterShieldOutCombat,baseShieldOutCombatBonus,totalShieldOutCombat,
            totalHPRecoveryModifier,totalHPHealModifier
        }
    },
    getResistance(index,characterRef) {
        const totalFireResist = (characterRef.ResistanceFire + index.ResistanceFire) * (1 + index["ResistanceFire%"]);
        const totalChillResist = (characterRef.ResistanceChill + index.ResistanceChill) * (1 + index["ResistanceChill%"]);
        const totalToxinResist = (characterRef.ResistanceToxin + index.ResistanceToxin) * (1 + index["ResistanceToxin%"]);
        const totalElectricResist = (characterRef.ResistanceElectric + index.ResistanceElectricity) * (1 + index["ResistanceElectricity%"]);

        return {totalFireResist,totalChillResist,totalToxinResist,totalElectricResist}
    },
    getSkillCrit(index,characterRef) {
        const baseCharacterCritRate = characterRef.CritRate;
        const baseCharacterCritDamage = characterRef.CritDamage;

        //This is if something boosts the base crit rate of a character, before % bonuses come into play
        const baseCritRateBonus = index.SkillCritRateBaseBonus;
        const baseCritDamageBonus = index.SkillCritDamageBaseBonus;

        const critRatePercentBonus = index.SkillCritRate;
        const critDamagePercentBonus = index.SkillCritDamage;

        const totalSkillCritRatePreCap = (baseCharacterCritRate + baseCritRateBonus) * (1 + critRatePercentBonus)
        const totalSkillCritRate = globalRecords.useCrits ? Math.max(0,Math.min(totalSkillCritRatePreCap,1)) * (1 + (+globalRecords.skillCritCeiling/100)) : 0;
        const totalSkillCritDamage = Math.max(1,(baseCharacterCritDamage + baseCritDamageBonus) * (1 + critDamagePercentBonus))

        return {baseCharacterCritRate,baseCharacterCritDamage,baseCritRateBonus,baseCritDamageBonus,critRatePercentBonus,critDamagePercentBonus,totalSkillCritRate,totalSkillCritDamage}
    },

    customTruncate(num, decimalPlaces) {
        const factor = Math.pow(10, decimalPlaces);
        return Math.floor(num * factor)/factor;
    },
    customCeiling(value, precision = 0.00001) {
        return Math.ceil(value / precision) * precision;
    },


    getTotalSkillPowerModifier(index,abilityTypeArray) {
        let sumModifierBonus = index.PowerModifierBase;
        for (let type of abilityTypeArray) {sumModifierBonus += index[`PowerModifier${type.replace(/-/g, "")}`];}
        return sumModifierBonus;
    },
    getTotalSkillPower(index,abilityTypeArray,skillDependentModifier) {
        const powerOptimization = index.PowerOptimization;
        skillDependentModifier = skillDependentModifier || 1;

        const basePowerRatio = 1 + index.PowerRatioBase;
        // let baseSkillPower = (11060.96 * powerOptimization + index.SkillAttackColossus) * basePowerRatio;//uncomment when verifying resistances on an unenhanced reactor
        let baseSkillPower = (11724.62 * powerOptimization * skillDependentModifier + index.SkillAttackColossus) * basePowerRatio;
        for (let type of abilityTypeArray) {baseSkillPower *= (1 + index[`PowerRatio${type.replace(/-/g, "")}`]);}

        // return calcs.customTruncate(baseSkillPower + 0.00001,4);
        return baseSkillPower;
    },
    getResistanceBasedDR(index,typeName) {
        const currentBoss = globalRecords.boss.currentBoss;
        const reductionValue = index[`enemy${typeName.replace(/-/g, '')}ResistanceReduction`];
        const resistReduction = 1 + reductionValue;
        const currentResistValue = bosses[currentBoss][typeName] * resistReduction;

        const drConstant = 150;

        let sqRoot = Math.sqrt(currentResistValue);
        let initialValue = 1 - (drConstant/(drConstant + sqRoot))
        // if (typeName === "DEF") {initialValue = calcs.customCeiling(initialValue,0.00001);}
        if (typeName === "DEF") {initialValue += 0.00001;}
        const endValue = 1 - calcs.customTruncate(initialValue,4);
        
        return endValue;
    },
    getCritComposites(returnObject) {
        const Rate = returnObject.totalSkillCritRate;
        // console.log(returnObject.totalSkillCritDamage)
        // const Damage = returnObject.totalSkillCritDamage;
        const Damage = calcs.customTruncate(returnObject.totalSkillCritDamage + 0.00001,4);
        const Composite = 1 + (Rate * (Damage-1));

        return {Rate,Damage,Composite}
    },
    getFirearmCritComposites(returnObject) {
        const Rate = returnObject.totalFirearmCritRate;
        // const Damage = returnObject.totalFirearmCritDamage;
        // console.log(returnObject.totalFirearmCritDamage)
        const Damage = calcs.customTruncate(returnObject.totalFirearmCritDamage + 0.00001,4);
        const Composite = 1 + (Rate * (Damage-1));

        return {Rate,Damage,Composite}
    },
    getCompositeDamageSpread(basicInfo,skillPowerModifier,addedExtraneousDamage,addedExtraneousMultiplier) {
        addedExtraneousDamage = addedExtraneousDamage || 0;//this is something like Kyle's damage based purely on mag force, that needs to add in for crits but not for modifiers
        addedExtraneousMultiplier = addedExtraneousMultiplier || 1//this is for stuff like Last Stand on kyle
        const perHit = (basicInfo.baseSkillPower * skillPowerModifier + addedExtraneousDamage) * addedExtraneousMultiplier * basicInfo.abilityDR;
        const perCrit = perHit * basicInfo.crit.Damage;
        const AVG = perHit * basicInfo.crit.Composite;

        return {perHit,perCrit,AVG}
    },
    getDPSPerSkillInterval(index,totalDamageDealt,baseCooldown,extraUsageDuration) {
        const cooldown = baseCooldown * Math.max(0.10,1 + index.SkillCooldown);//enforce the 90% CDR cap
        const interval = cooldown + (extraUsageDuration || 0);
        const DPS = totalDamageDealt/interval;

        return {cooldown,interval,DPS}
    },
    getDoTTotalBreakdown(index,dmgPerTick,interval,baseDuration) {
        const durationDOT = baseDuration * (1 + index.SkillDuration);
        const intervalDOT = interval;
        const totalTicks = Math.floor(durationDOT/interval);
        const totalTickDamage = dmgPerTick * totalTicks;

        return {durationDOT,totalTicks,intervalDOT,totalTickDamage}
    },
    getCompositeFirearmDamageSpread(baseDamage,critFirearm,factorDR) {
        const perHit = baseDamage * (factorDR ? factorDR : 1);
        const perCrit = perHit * critFirearm.Damage;
        const AVG = perHit * critFirearm.Composite;

        return {perHit,perCrit,AVG}
    },

    getFirearmATK(index,weaponRef) {
        const baseFirearmATK = weaponRef.baseATK;

        const attackPercent = index["FirearmATK%"];
        const weaknessCheck = globalRecords.useFirearmPhysical ? globalRecords.boss.currentBossPartType === weaponRef.physicalType : false;
        const physicalTypeBonus = globalRecords.boss.enemyType === "Colossus" ? 0.20 : 0.10;
        const physicalTypeMulti = weaknessCheck ? physicalTypeBonus : 0;
        const firearmColossusATK = weaponRef.baseATK === 0 ? 0 : index["ColossusATK"];

        const firearmAttributeConversionBase = baseFirearmATK * (1 + attackPercent);//firearm attribute dmg can't benefit from faction attack or type bonuses or the zenithMultiplier
        const totalFirearmATK = (firearmAttributeConversionBase + index.ColossusATK) * (1 + physicalTypeMulti);

        return {baseFirearmATK,attackPercent,physicalTypeMulti,firearmColossusATK,firearmAttributeConversionBase,totalFirearmATK}
    },
    getFirearmWeakpoint(index,weaponRef) {
        const baseWPMulti = weaponRef.baseWeakPoint;
        const weakpointBonus = index["WeakPointDamage%"];

        const bossPartWPBonus = globalRecords.boss.currentBossPartWP;

        const totalWPBonus = globalRecords.useWeakspots && bossPartWPBonus != 0 ? baseWPMulti * (1 + weakpointBonus) + bossPartWPBonus : 1;

        return {baseWPMulti,weakpointBonus,bossPartWPBonus,totalWPBonus}
    },
    getFirearmCrit(index,weaponRef) {
        const baseFirearmCritRate = weaponRef.baseCritRate;
        const baseFirearmCritDamage = weaponRef.baseCritDamage;

        const baseFirearmCritRateBonus = index.FirearmCritRateBase;
        const baseFirearmCritDamageBonus = index.FirearmCritDamageBase;

        const firearmCritRateBonus = index.FirearmCritRate;
        const firearmCritDamageBonus = index.FirearmCritDamage;

        const totalFirearmCritRatePreCap = (baseFirearmCritRate + baseFirearmCritRateBonus) * (1 + firearmCritRateBonus);
        const totalFirearmCritRate = globalRecords.useCrits ? Math.max(0,Math.min(totalFirearmCritRatePreCap,1)) * (1 + (+globalRecords.weaponCritCeiling/100)) : 0;

        const totalFirearmCritDamage = (baseFirearmCritDamage + baseFirearmCritDamageBonus) * (1 + firearmCritDamageBonus);

        return {baseFirearmCritRate,baseFirearmCritDamage,baseFirearmCritRateBonus,baseFirearmCritDamageBonus,firearmCritRateBonus,firearmCritDamageBonus,totalFirearmCritRate,totalFirearmCritDamage}
    },
    getFirearmElementalSpread(index,elementName,usableBase,critFirearm) {
        const elemDR = calcs.getResistanceBasedDR(index,elementName) || 1;
        const damageElementBase = ((usableBase) * index[`${elementName}ATK%`] + index[`${elementName}ATK`]) * (1 + index[`${elementName}ATK%Bonus`]) * elemDR;

        const perHit = damageElementBase;
        const perCrit = perHit * critFirearm.Damage;
        const AVG = perHit * critFirearm.Composite;

        return {perHit,perCrit,AVG}
    },
    getActiveFirearmAttributesArrays(index,preElementDamage,critFirearm) {
        let activeElements = [];
        let activeElementsDamage = [];

        if (index["ChillATK%"] || index["ChillATK"]) {activeElements.push("Chill");}
        if (index["ElectricATK%"] || index["ElectricATK"]) {activeElements.push("Electric");}
        if (index["ToxicATK%"] || index["ToxicATK"]) {activeElements.push("Toxic");}
        if (index["FireATK%"] || index["FireATK"]) {activeElements.push("Fire");}
        if (!activeElements.length) {
            activeElements.push("None");
            activeElementsDamage.push(0);
        }
        else {
            const damageSubAttribute = calcs.getFirearmElementalSpread(index,activeElements[0],preElementDamage,critFirearm)
            activeElementsDamage.push(damageSubAttribute.perHit);
        }

        return {activeElements,activeElementsDamage}
    },
}

const calcsUIHelper = {
    addHealingBoxCluster(name,value,unit) {
        const displayValue = unit ? value * (unit === "%" ? 100 : 1) : value;
        return `
        <div class="totalHealingBoxHalfBreakdownRows hasHoverTooltip">
            <div class="totalHealingHeader">${name}</div>
            <div class="totalHealingValueBoss">${(displayValue).toLocaleString()}${unit}</div>
        </div>
        `
    },
    addHealingBoxRows(bodyID,breakdownArray,displayStatsPath,index,returnObject,characterName,isWeapon) {
        const addRow = calcsUIHelper.addHealingBoxCluster;
        let returnString = `${displayStatsPath ? conditionalHelpers.addAbilityInfoRows(displayStatsPath["BASIC"],index,returnObject) : ""}`;
        if (characterName === undefined) {return ""}
        const settingsRef = !isWeapon ? characters[characterName].characterSettings : sniperList[characterName].weaponSettings;

        for (let entry of breakdownArray) {
            if (entry.condition) {continue;}//skip any rows with a condition that was met

            function getInjectionString(path) {
                if (path && path[0].length) {
                    let returnString = `<div class="totalHealingBoxBreakdownRows">`
                    for (let entry2 of path[0]) {returnString += addRow(entry2.name,entry2.value,entry2.unit);}
                    returnString += `</div>`
                    return returnString;
                }
                else {return}
            }

            let rowInjectionString = getInjectionString(entry.rowInjection);
            let rowInjectionString2 = getInjectionString(entry.rowInjection2);
            let rowInjectionString3 = getInjectionString(entry.rowInjection3);


            returnString += `
            <div class="${!isWeapon ? "abilityBreakdownSplitterHeader" : "weaponBreakdownSplitterHeader"}">${entry.header}</div>
            ${entry.toggleElemID ? 
                `<div class="totalHealingBox">
                    <div class="totalHealingBoxHalf hasHoverTooltip">
                        <div style="padding-right: 5px;">${entry.toggleElemID[1] ? entry.toggleElemID[1] : "Include in Character Statistics?"}</div>
                        <label class="toggleContainer">
                            <input type="checkbox" class="toggleCheckbox" id="${entry.toggleElemID[0]}" onchange="settings.${!isWeapon ? "updateCharacterSettings" : "updateWeaponSettings"}(\`${characterName}\`)" ${settingsRef[entry.toggleElemID[0]] ? "checked" : ""}>
                            <span class="toggleSlider"></span>
                        </label>
                    </div>
                    ${entry.toggleElemID2 ? 
                    `<div class="totalHealingBoxHalf hasHoverTooltip">
                        <div style="padding-right: 5px;">${entry.toggleElemID2[1] ? entry.toggleElemID2[1] : "Include in Character Statistics?"}</div>
                        <label class="toggleContainer">
                            <input type="checkbox" class="toggleCheckbox" id="${entry.toggleElemID2[0]}" onchange="settings.${!isWeapon ? "updateCharacterSettings" : "updateWeaponSettings"}(\`${characterName}\`)" ${settingsRef[entry.toggleElemID2[0]] ? "checked" : ""}>
                            <span class="toggleSlider"></span>
                        </label>
                    </div>` : ""}
                </div>` : ""}
            ${entry.sliderElemID ? 
                ` <div class="totalHealingBox">
                    <div class="statsRowName">${entry.sliderElemID[4]}:&nbsp;<span>${settingsRef[entry.sliderElemID[0]]}</span></div>
                    <div class="statsRowToggle">
                        <input type="range" id="${entry.sliderElemID[0]}" name="slider" min="${entry.sliderElemID[1]}" max="${entry.sliderElemID[2]}" value="${+settingsRef[entry.sliderElemID[0]]}" step="${entry.sliderElemID[3]}" onchange="settings.${!isWeapon ? "updateCharacterSettings" : "updateWeaponSettings"}('${characterName}')">
                    </div>
                </div>` : ""}
            ${entry.desc ? `<div class="abilityBreakdownGeneralMessage">${entry.desc}</div>` : ""}
            ${entry.value != null ? `<div class="totalHealingBoxBreakdownRows">
                ${entry.modifier ? addRow("Mod",entry.modifier,"%") : ""}
                ${entry.FirearmATK ? addRow("Firearm ATK",entry.FirearmATK,"") : ""}
                ${addRow("Hit",entry.value.perHit,"")}
                ${entry.hasCritAVG ? addRow("Crit",entry.value.perCrit,"") : ""}
                ${entry.hasCritAVG ? addRow("AVG",entry.value.AVG,"") : ""}
                ${entry.magazineTypeWeapon ? addRow("SUM AVG",entry.magazineTypeWeapon[1],"") : ""}
            </div>` : ""}
            ${rowInjectionString ? `<div class="breakdownRowInjectionHeader">${entry.rowInjection[1]}</div>` + rowInjectionString : ""}
            ${rowInjectionString2 ? `<div class="breakdownRowInjectionHeader">${entry.rowInjection2[1]}</div>` + rowInjectionString2 : ""}
            ${rowInjectionString3 ? `<div class="breakdownRowInjectionHeader">${entry.rowInjection3[1]}</div>` + rowInjectionString3 : ""}
            ${displayStatsPath ? conditionalHelpers.addAbilityInfoRows(displayStatsPath[entry.header],index,returnObject) : ""}
            `
        }
        return returnString;
        // <div class="abilityBreakdownGeneralMessage">asdf.</div>
    },
}

let localInsertionDamage = localCheck ? {} : customDamageLocal;
const customDamage = {
    callAbilityFunctionsTier0(index,isCycleCalcs) {
        const globalRef = globalRecords.character;
        const selectedCharacter = globalRef.currentCharacter;

        //ability array handling is done within userTriggers.updateSelectedMod
        const arrayRef = globalRef.abilityArray;
        const abilityRefs = characters[selectedCharacter].abilities;

        for (let i=1;i<=5;i++) {
            const path = arrayRef[i-1] === 0 ? "base" : arrayRef[i-1];

            const currentPath = abilityRefs[`ability${i}`][path];
            if (currentPath.customDPSBase) {customDamage[currentPath.customDPSBase](index,null,isCycleCalcs);}
        }

        const absentBreakdownWeapon = `<span class="missingBreakdownHeadsup"><br>
        No unique weapon ability found/supported for the current selection</span>`;
        const currentWeaponRef = sniperList[globalRecords.weapon.currentWeapon];
        if (currentWeaponRef.customDPSBase) {customDamage[currentWeaponRef.customDPSBase](index,null,isCycleCalcs);}
        else {readSelection(`weaponBreakdownBody1`).innerHTML = absentBreakdownWeapon}
    },
    callAbilityFunctions(index,returnObject,isCycleCalcs) {
        const globalRef = globalRecords.character;
        const selectedCharacter = globalRef.currentCharacter;

        //ability array handling is done within userTriggers.updateSelectedMod
        const arrayRef = globalRef.abilityArray;
        const abilityRefs = characters[selectedCharacter].abilities;

        const absentBreakdown = `<span class="missingBreakdownHeadsup">
        You are seeing this for one of three reasons:<br>
        1) You have no character equipped<br>
        2) This ability doesn't have breakdown calculations supported. Yet.<br>
        3) This ability is supported, but only when using a transcendant mod you don't have selected.
        <br><br>
        Please note that adding breakdown calculations for every ability with every transcendant mod with every fuckin character, is going to take a long time. If you want to speed up that process, feel free to join my discord and help me.
        </span>`;

        let returnValuesObject = {};

        for (let i=1;i<=5;i++) {
            const path = arrayRef[i-1] === 0 ? "base" : arrayRef[i-1];

            const currentPath = abilityRefs[`ability${i}`][path];
            if (currentPath.customDPS) {returnValuesObject[`ability${i}`] = customDamage[currentPath.customDPS](index,returnObject,isCycleCalcs);}
            else if (!currentPath.customDPSBase && !isCycleCalcs) {readSelection(`abilityBreakdownBody${i}`).innerHTML = absentBreakdown;}
            else {returnValuesObject[`ability${i}`] = {};}
        }

        if (!isCycleCalcs) {
            for (let i=1;i<=5;i++) {
                const path = arrayRef[i-1] === 0 ? "base" : arrayRef[i-1];

                const currentPath = abilityRefs[`ability${i}`][path].displayStats;
                readSelection(`abilityBreakdownFooter${i}`).innerHTML = currentPath ? conditionalHelpers.addAbilityInfoRows(currentPath,index,returnObject) : "";
            }
        }

        const currentWeaponRef = sniperList[globalRecords.weapon.currentWeapon];
        if (currentWeaponRef.customDPS) {customDamage[currentWeaponRef.customDPS](index,returnObject,isCycleCalcs);}
        else {customDamage.generalizedWeaponBreakdown(index,returnObject,isCycleCalcs,currentWeaponRef);}

        return returnValuesObject;
    },





    //Kyle
    //ability 1
    kyleRepulsionCalcsTier0(index,returnObject,isCycleCalcs,nameOverride) {
        const characterRef = characters.Kyle;
        const settingsRef = characterRef.characterSettings;
        const skillPlacement = 1;
        const abilityMap = characterRef.abilities[`ability${skillPlacement}`][nameOverride ? nameOverride : "base"];
        const abilityTypeArray = abilityMap.type;
        const abilityMods = abilityMap.powerMods;


        const defBonus = abilityMap.powerMods["DEF"];

        index["DEF%"] += settingsRef.repulsionDEFBonus ? defBonus : 0;

        // <div class="abilityBreakdownGeneralMessage">asdf.</div>
    },
    kyleRepulsionCalcs(index,returnObject,isCycleCalcs,nameOverride) {
        const characterRef = characters.Kyle;
        const settingsRef = characterRef.characterSettings;
        const skillPlacement = 1;
        const abilityMap = characterRef.abilities[`ability${skillPlacement}`][nameOverride ? nameOverride : "base"];
        const abilityTypeArray = abilityMap.type;
        const abilityMods = abilityMap.powerMods;

        const sumModifierBonus = calcs.getTotalSkillPowerModifier(index,abilityTypeArray);
        const baseSkillPower = calcs.getTotalSkillPower(index,abilityTypeArray);
        const abilityDR = calcs.getResistanceBasedDR(index,abilityTypeArray[0]);
        const crit = calcs.getCritComposites(returnObject);

        const basicInfo = {baseSkillPower,abilityDR,crit};

        const skillPowerModifier = abilityMods.base + sumModifierBonus;
        const baseCooldown = abilityMods.cooldown;

        const damage = calcs.getCompositeDamageSpread(basicInfo,skillPowerModifier);

        const avgDmgPerImpact1 = damage.AVG;
        const {cooldown,interval,DPS} = calcs.getDPSPerSkillInterval(index,damage.AVG,baseCooldown,null)
        const avgDPSImpact1 = DPS;

        
        if (!isCycleCalcs) {
            let rowInjection = [
                {"name": "Cooldown","value": cooldown,"unit": ""},
                {"name": "Interval Length (s)","value": interval,"unit": ""},
                {"name": "DPS","value": DPS,"unit": ""},
            ]

            const breakdownArray = [
                {"header": "SKILL EFFECT","value": damage,"modifier": skillPowerModifier,"hasCritAVG": true,"unit": "",//"magazineTypeWeapon": [turretTotalHits,totalTurretAVG1],
                    "rowInjection": [rowInjection,""],
                    "condition": false,"desc": ""},
                {"header": "DEF +","value": null,"modifier": null,"hasCritAVG": true,"unit": "",//only shows with no transcendent mod equipped
                    "toggleElemID": ["repulsionDEFBonus",""],
                    "condition": nameOverride,"desc": ""},
                {"header": "STUN","value": null,"modifier": null,"hasCritAVG": true,"unit": "",//only shows if collission instinct is equipped
                    "condition": !nameOverride,"desc": ""},
            ];
            const bodyString = `abilityBreakdownBody${skillPlacement}`;
            
            const addRow = calcsUIHelper.addHealingBoxCluster;
            readSelection(`abilityBreakdownBody${skillPlacement}`).innerHTML = `
            ${addRow("Power",baseSkillPower,"")}
            <div class="basicsSummaryBox" id="lepicResultsBox">
                ${calcsUIHelper.addHealingBoxRows(bodyString,breakdownArray,abilityMap.displayStatsALT,index,returnObject,characterRef.name)}
            </div>
            <div class="abilityBreakdownHeader">DESCRIPTION</div>
            <div class="abilityBreakdownDescription">${tooltips.updateSubstatColor(abilityMap.desc)}</div>
            `;
        }
        else {
            return {avgDmgPerImpact1,avgDPSImpact1}
        }
        // <div class="abilityBreakdownGeneralMessage">asdf.</div>
    },
    kyleRepulsionCalcsInstinctStarter(index,returnObject,isCycleCalcs,nameOverride) {
        customDamage.kyleRepulsionCalcs(index,returnObject,isCycleCalcs,"Collision Instinct");
    },
    //ability 2
    kyleBulwarkCalcs(index,returnObject,isCycleCalcs,nameOverride) { 
        const characterRef = characters.Kyle;
        const settingsRef = characterRef.characterSettings;
        const skillPlacement = 2;
        const abilityMap = characterRef.abilities[`ability${skillPlacement}`][nameOverride ? nameOverride : "base"];
        const abilityTypeArray = abilityMap.type;
        const abilityMods = abilityMap.powerMods;

        if (!isCycleCalcs) {
            const breakdownArray = [
                {"header": "BARRIER","value": null,"modifier": null,"hasCritAVG": true,"unit": "",
                    "condition": false,"desc": ""},
            ];
            const bodyString = `abilityBreakdownBody${skillPlacement}`;
            
            const addRow = calcsUIHelper.addHealingBoxCluster;
            readSelection(`abilityBreakdownBody${skillPlacement}`).innerHTML = `
            <div class="basicsSummaryBox" id="lepicResultsBox">
                ${calcsUIHelper.addHealingBoxRows(bodyString,breakdownArray,abilityMap.displayStatsALT,index,returnObject,characterRef.name)}
            </div>
            <div class="abilityBreakdownHeader">DESCRIPTION</div>
            <div class="abilityBreakdownDescription">${tooltips.updateSubstatColor(abilityMap.desc)}</div>
            `;
        }
        else {
            return {}
        }
        // <div class="abilityBreakdownGeneralMessage">asdf.</div>
    },
    kyleDiamagneticCalcs(index,returnObject,isCycleCalcs,nameOverride) {
        const characterRef = characters.Kyle;
        const settingsRef = characterRef.characterSettings;
        const skillPlacement = 2;
        const abilityMap = characterRef.abilities[`ability${skillPlacement}`]["Diamagnetic Bulwark"];
        const abilityTypeArray = abilityMap.type;
        const abilityMods = abilityMap.powerMods;

        const sumModifierBonus = calcs.getTotalSkillPowerModifier(index,abilityTypeArray);
        const baseSkillPower = calcs.getTotalSkillPower(index,abilityTypeArray);
        const abilityDR = calcs.getResistanceBasedDR(index,abilityTypeArray[0]);
        const crit = calcs.getCritComposites(returnObject);

        const basicInfo = {baseSkillPower,abilityDR,crit};

        const skillPowerModifier = abilityMods.base + sumModifierBonus;
        const baseCooldown = abilityMods.cooldown;
        const usageDuration = 4;
        const maxTicks = abilityMods.MaxHits;

        const damage = calcs.getCompositeDamageSpread(basicInfo,skillPowerModifier);

        const avgDmgPerTick2 = damage.AVG;
        const sumTotalAVGTicks2 = damage.AVG * maxTicks;
        const {cooldown,interval,DPS} = calcs.getDPSPerSkillInterval(index,sumTotalAVGTicks2,baseCooldown,usageDuration)
        const avgDPSTicks2 = DPS;

        
        if (!isCycleCalcs) {
            let rowInjection = [
                {"name": "Cooldown","value": cooldown,"unit": ""},
                {"name": "Active Duration","value": usageDuration,"unit": ""},
                {"name": "Interval Length (s)","value": interval,"unit": ""},
                {"name": "DPS","value": DPS,"unit": ""},
            ]

            const breakdownArray = [
                {"header": "BARRIER","value": damage,"modifier": skillPowerModifier,"hasCritAVG": true,"unit": "","magazineTypeWeapon": [maxTicks,sumTotalAVGTicks2],
                    "rowInjection": [rowInjection,""],
                    "condition": false,"desc": ""},
            ];
            const bodyString = `abilityBreakdownBody${skillPlacement}`;
            
            const addRow = calcsUIHelper.addHealingBoxCluster;
            readSelection(`abilityBreakdownBody${skillPlacement}`).innerHTML = `
            ${addRow("Power",baseSkillPower,"")}
            <div class="basicsSummaryBox" id="lepicResultsBox">
                ${calcsUIHelper.addHealingBoxRows(bodyString,breakdownArray,abilityMap.displayStatsALT,index,returnObject,characterRef.name)}
            </div>
            <div class="abilityBreakdownHeader">DESCRIPTION</div>
            <div class="abilityBreakdownDescription">${tooltips.updateSubstatColor(abilityMap.desc)}</div>
            `;
        }
        else {
            return {avgDmgPerTick2,avgDPSTicks2,sumTotalAVGTicks2}
        }
        // <div class="abilityBreakdownGeneralMessage">asdf.</div>
    },
    //ability 3
    kyleSpurtCalcs(index,returnObject,isCycleCalcs,nameOverride) {
        const characterRef = characters.Kyle;
        const settingsRef = characterRef.characterSettings;
        const skillPlacement = 3;
        const abilityMap = characterRef.abilities[`ability${skillPlacement}`][nameOverride ? nameOverride : "base"];
        const abilityTypeArray = abilityMap.type;
        const abilityMods = abilityMap.powerMods;

        const sumModifierBonus = calcs.getTotalSkillPowerModifier(index,abilityTypeArray);
        const baseSkillPower = calcs.getTotalSkillPower(index,abilityTypeArray);
        const abilityDR = calcs.getResistanceBasedDR(index,abilityTypeArray[0]);
        const crit = calcs.getCritComposites(returnObject);

        const basicInfo = {baseSkillPower,abilityDR,crit};

        const magForce = (returnObject.totalShield * 2) * (+settingsRef.magForceBarState/100);
        const magPowerModifier = abilityMods.baseMagForce;
        const magForceDamage = magForce * magPowerModifier;
        const skillPowerModifier = abilityMods.base + sumModifierBonus;

        const damage = calcs.getCompositeDamageSpread(basicInfo,skillPowerModifier,magForceDamage);

        const avgDmgPerExplosion = damage.AVG;

        
        if (!isCycleCalcs) {
            let rowInjection = [
                {"name": "Magnetic Force","value": magForce,"unit": ""},
                {"name": "%Mag Force DMG","value": magPowerModifier,"unit": "%"},
                {"name": "Mag Force DMG","value": magForceDamage,"unit": ""},
            ]

            const breakdownArray = [
                {"header": "SKILL EFFECT","value": damage,"modifier": skillPowerModifier,"hasCritAVG": true,"unit": "",//"magazineTypeWeapon": [turretTotalHits,totalTurretAVG1],
                    "rowInjection": [rowInjection,"The Magnetic Force bonus damage is already added in the damage spread above, and reduced by DR"],
                    "condition": false,"desc": ""},
                {"header": "TRACTION BEAM","value": null,"modifier": null,"hasCritAVG": true,"unit": "",//only shows if trans mod is equipped
                    "condition": !nameOverride,"desc": ""},
            ];
            const bodyString = `abilityBreakdownBody${skillPlacement}`;
            
            const addRow = calcsUIHelper.addHealingBoxCluster;
            readSelection(`abilityBreakdownBody${skillPlacement}`).innerHTML = `
            ${addRow("Power",baseSkillPower,"")}
            <div class="basicsSummaryBox" id="lepicResultsBox">
                ${calcsUIHelper.addHealingBoxRows(bodyString,breakdownArray,abilityMap.displayStatsALT,index,returnObject,characterRef.name)}
            </div>
            <div class="abilityBreakdownHeader">DESCRIPTION</div>
            <div class="abilityBreakdownDescription">${tooltips.updateSubstatColor(abilityMap.desc)}</div>
            `;
        }
        else {
            return {avgDmgPerExplosion}
        }
        // <div class="abilityBreakdownGeneralMessage">asdf.</div>
    },
    kyleSpurtCalcsEruptionStarter(index,returnObject,isCycleCalcs,nameOverride) {
        customDamage.kyleSpurtCalcs(index,returnObject,isCycleCalcs,"Self-Directed Eruption");
    },
    //ability 4
    kyleThrustersCalcs(index,returnObject,isCycleCalcs,nameOverride) {
        const characterRef = characters.Kyle;
        const settingsRef = characterRef.characterSettings;
        const skillPlacement = 4;
        const abilityMap = characterRef.abilities[`ability${skillPlacement}`][nameOverride ? nameOverride : "base"];
        const abilityTypeArray = abilityMap.type;
        const abilityMods = abilityMap.powerMods;

        const sumModifierBonus = calcs.getTotalSkillPowerModifier(index,abilityTypeArray);
        const baseSkillPower = calcs.getTotalSkillPower(index,abilityTypeArray);
        const abilityDR = calcs.getResistanceBasedDR(index,abilityTypeArray[0]);
        const crit = calcs.getCritComposites(returnObject);

        const basicInfo = {baseSkillPower,abilityDR,crit};

        const magForce = (returnObject.totalShield * 2) * (+settingsRef.magForceBarState/100);
        const magPowerModifier = abilityMods.baseMagForce;
        const magForceDamage = magForce * magPowerModifier;
        const skillPowerModifier = abilityMods.base + sumModifierBonus;

        let isLastStand = false;
        for (let entry of globalRecords.character.mods) {if (entry === "Last Stand") {isLastStand = true;}}
        let lastStandMulti = isLastStand ? 0.085 + (Math.min(10000,returnObject.displayShield)/10000) * 0.17 : 1;

        const damage = calcs.getCompositeDamageSpread(basicInfo,skillPowerModifier,magForceDamage);

        const lastStandDamage = isLastStand ? lastStandMulti * damage.AVG : 0;
        const avgDmgPerImpact4 = damage.AVG;
        const totalImpactDamage4 = damage.AVG + lastStandDamage;
        
        const baseCooldown = abilityMods.cooldown;
        const avgActiveDuration = 5;

        const {cooldown,interval,DPS} = calcs.getDPSPerSkillInterval(index,totalImpactDamage4,baseCooldown,avgActiveDuration)
        const avgDPSImpact1 = DPS;



        if (!isCycleCalcs) {
            let rowInjection = [
                {"name": "Magnetic Force","value": magForce,"unit": ""},
                {"name": "%Mag Force DMG","value": magPowerModifier,"unit": "%"},
                {"name": "Mag Force DMG","value": magForceDamage * abilityDR,"unit": ""},
            ]
            let rowInjectionLastStand = isLastStand ? [
                {"name": "Last Stand Multi","value": lastStandMulti,"unit": "x"},
                {"name": "Last Stand DMG","value": lastStandDamage,"unit": ""},
            ] : [];
            let rowInjectionDPS = [
                {"name": "SUM Total AVG","value": totalImpactDamage4,"unit": ""},
                {"name": "Cooldown","value": cooldown,"unit": "s"},
                {"name": "Active Duration","value": avgActiveDuration,"unit": "s"},
                {"name": "Total Interval","value": interval,"unit": "s"},
                {"name": "AVG DPS","value": DPS,"unit": ""},
            ]

            const breakdownArray = [
                {"header": "SKILL EFFECT","value": damage,"modifier": skillPowerModifier,"hasCritAVG": true,"unit": "",//"magazineTypeWeapon": [turretTotalHits,totalTurretAVG1],
                    "rowInjection": [rowInjection,"The Magnetic Force bonus damage is already added in the damage spread above"],
                    "rowInjection2": [rowInjectionLastStand,"Last Stand appears as a separate damage number."],
                    "condition": false,"desc": ""},
                {"header": "SUM","value": null,"modifier": null,"hasCritAVG": true,"unit": "",//"magazineTypeWeapon": [turretTotalHits,totalTurretAVG1],
                    "rowInjection3": [rowInjectionDPS,""],
                    "condition": false,"desc": ""},
            ];
            const bodyString = `abilityBreakdownBody${skillPlacement}`;
            
            const addRow = calcsUIHelper.addHealingBoxCluster;
            readSelection(`abilityBreakdownBody${skillPlacement}`).innerHTML = `
            ${addRow("Power",baseSkillPower,"")}
            <div class="basicsSummaryBox" id="lepicResultsBox">
                ${calcsUIHelper.addHealingBoxRows(bodyString,breakdownArray,abilityMap.displayStatsALT,index,returnObject,characterRef.name)}
            </div>
            <div class="abilityBreakdownHeader">DESCRIPTION</div>
            <div class="abilityBreakdownDescription">${tooltips.updateSubstatColor(abilityMap.desc)}</div>
            `;
        }
        else {
            return {avgDmgPerImpact4,avgDPSImpact1,totalImpactDamage4}
        }
    },
    kyleBomberCalcs(index,returnObject,isCycleCalcs,nameOverride) {
        const characterRef = characters.Kyle;
        const settingsRef = characterRef.characterSettings;
        const skillPlacement = 4;
        const abilityMap = characterRef.abilities[`ability${skillPlacement}`]["Superconductive Bombing"];
        const abilityTypeArray = abilityMap.type;
        const abilityMods = abilityMap.powerMods;

        const sumModifierBonus = calcs.getTotalSkillPowerModifier(index,abilityTypeArray);
        const baseSkillPower = calcs.getTotalSkillPower(index,abilityTypeArray);
        const abilityDR = calcs.getResistanceBasedDR(index,abilityTypeArray[0]);
        const crit = calcs.getCritComposites(returnObject);

        const basicInfo = {baseSkillPower,abilityDR,crit};

        const magForce = (returnObject.totalShield * 2) * (+settingsRef.magForceBarState/100);

        const skillPowerModifier = abilityMods.base + sumModifierBonus;
        const skillPowerModifierBombs = abilityMods.baseBombs + sumModifierBonus;

        const damage = calcs.getCompositeDamageSpread(basicInfo,skillPowerModifier);
        const damageBombs = calcs.getCompositeDamageSpread(basicInfo,skillPowerModifierBombs);

        const baseCooldown = abilityMods.cooldown;
        const flightDuration = abilityMods.duration * (1 + index.SkillDuration);
        const dropInterval = abilityMods.dropInterval;
        const maxDropIntervals = Math.floor(flightDuration/dropInterval);
        const avgActiveDuration = flightDuration;

        const costPerDropSet = abilityMods.bombCost * (1 + index.SkillCost);
        const totalDropsPossible = Math.min(maxDropIntervals,Math.floor(magForce/costPerDropSet));
        const bombsPerSet = abilityMods.bombsPerSet;
        const totalBombsDropped = bombsPerSet * totalDropsPossible;

        const avgDmgPerImpact4 = damage.AVG;
        const avgDmgPerBomb4 = damageBombs.AVG;
        const sumTotalAVGBombs = totalBombsDropped * damageBombs.AVG;
        const sumTotalAVGSkill = totalBombsDropped * damageBombs.AVG + damage.AVG;
        

        const {cooldown,interval,DPS} = calcs.getDPSPerSkillInterval(index,sumTotalAVGSkill,baseCooldown,avgActiveDuration)
        const avgActiveDPS = sumTotalAVGSkill/flightDuration;
        const avgTotalDPS4 = DPS;


        if (!isCycleCalcs) {
            let rowInjectionBombs = [
                {"name": "Magnetic Force","value": magForce,"unit": ""},
                {"name": "Cost Per Set","value": costPerDropSet,"unit": ""},
                {"name": "Bombs Per Set","value": bombsPerSet,"unit": ""},
                {"name": "Total Bombs","value": totalBombsDropped,"unit": ""},
            ]
            let rowInjection = [
                {"name": "SUM Total AVG","value": sumTotalAVGSkill,"unit": ""},
                {"name": "DPS per Cast","value": avgActiveDPS,"unit": ""},
                {"name": "DPS w/Cooldown","value": avgTotalDPS4,"unit": ""},
            ]

            const breakdownArray = [
                {"header": "IMPACT","value": damage,"modifier": skillPowerModifier,"hasCritAVG": true,"unit": "",//"magazineTypeWeapon": [turretTotalHits,totalTurretAVG1],
                    "condition": false,"desc": ""},
                {"header": "BOMBS","value": damageBombs,"modifier": skillPowerModifierBombs,"hasCritAVG": true,"unit": "","magazineTypeWeapon": [totalBombsDropped,sumTotalAVGBombs],
                    "rowInjection": [rowInjectionBombs,""],
                    "condition": false,"desc": ""},
                {"header": "SUM","value": null,"modifier": null,"hasCritAVG": true,"unit": "",//"magazineTypeWeapon": [turretTotalHits,totalTurretAVG1],
                    "rowInjection": [rowInjection,""],
                    "condition": false,"desc": ""},
            ];
            const bodyString = `abilityBreakdownBody${skillPlacement}`;
            
            const addRow = calcsUIHelper.addHealingBoxCluster;
            readSelection(`abilityBreakdownBody${skillPlacement}`).innerHTML = `
            ${addRow("Power",baseSkillPower,"")}
            <div class="basicsSummaryBox" id="lepicResultsBox">
                ${calcsUIHelper.addHealingBoxRows(bodyString,breakdownArray,abilityMap.displayStatsALT,index,returnObject,characterRef.name)}
            </div>
            <div class="abilityBreakdownHeader">DESCRIPTION</div>
            <div class="abilityBreakdownDescription">${tooltips.updateSubstatColor(abilityMap.desc)}</div>
            `;
        }
        else {
            return {avgDmgPerImpact4,avgDmgPerBomb4,sumTotalAVGBombs,avgTotalDPS4,avgActiveDPS,sumTotalAVGSkill}
        }

    },
    //passive
    kyleBarCalcsTier0(index,returnObject,isCycleCalcs,nameOverride) { 
        const characterRef = characters.Kyle;
        const settingsRef = characterRef.characterSettings;
        const skillPlacement = 5;
        const abilityMap = characterRef.abilities[`ability${skillPlacement}`][nameOverride ? nameOverride : "base"];
        const abilityTypeArray = abilityMap.type;
        const abilityMods = abilityMap.powerMods;

        if (!isCycleCalcs) {
            const breakdownArray = [
                {"header": "MAGNETIC FORCE","value": null,"modifier": null,"hasCritAVG": null,"unit": "","isDOT": false,"ticksDOT": 0,"intervalDOT": 0,
                    "condition": false,"desc": "The bar here modifies all abilities that depend on Magnetic force for fuel or damage.",
                    "sliderElemID": ["magForceBarState",0,100,1,"%Mag Force Filled"]},
                {"header": "MAGNETIC CARE","value": null,"modifier": null,"hasCritAVG": null,"unit": "","isDOT": false,"ticksDOT": 0,"intervalDOT": 0,
                    "condition": false,"desc": ""},
            ];
            const bodyString = `abilityBreakdownBody${skillPlacement}`;
            
            const addRow = calcsUIHelper.addHealingBoxCluster;
            readSelection(`abilityBreakdownBody${skillPlacement}`).innerHTML = `
            <div class="basicsSummaryBox" id="lepicResultsBox">
                ${calcsUIHelper.addHealingBoxRows(bodyString,breakdownArray,abilityMap.displayStatsALT,index,returnObject,characterRef.name)}
            </div>
            <div class="abilityBreakdownHeader">DESCRIPTION</div>
            <div class="abilityBreakdownDescription">${tooltips.updateSubstatColor(abilityMap.desc)}</div>
            `;
        }
        // <div class="abilityBreakdownGeneralMessage">asdf.</div>
    },

    //MY MAN JAYBER
    //ability1
    jayberAssaultCalcs(index,returnObject,isCycleCalcs,nameOverride) {
        const characterRef = characters.Jayber;
        const settingsRef = characterRef.characterSettings;
        const skillPlacement = 1;
        const abilityMap = characterRef.abilities[`ability${skillPlacement}`][nameOverride ? nameOverride : "base"];
        const abilityTypeArray = abilityMap.type;
        const abilityMods = abilityMap.powerMods;

        const jayberCuckedPowerModifierModifier = 0.755;


        const sumModifierBonus = calcs.getTotalSkillPowerModifier(index,abilityTypeArray);
        const baseSkillPower = calcs.getTotalSkillPower(index,abilityTypeArray,jayberCuckedPowerModifierModifier);
        const abilityDR = calcs.getResistanceBasedDR(index,abilityTypeArray[0]);
        const crit = calcs.getCritComposites(returnObject);

        const basicInfo = {baseSkillPower,abilityDR,crit};

        const skillPowerModifier = (abilityMods.base + sumModifierBonus);
        const skillPowerModifierZone = (abilityMods.zone + sumModifierBonus);

        // const skillPowerModifier = (abilityMods.base* jayberCuckedPowerModifierModifier + index[`PowerModifier${abilityTypeArray[1].replace(/-/g, "")}`] + index.PowerModifierBase)* jayberCuckedPowerModifierModifier;
        // const skillPowerModifierZone = (abilityMods.zone* jayberCuckedPowerModifierModifier + index[`PowerModifier${abilityTypeArray[1].replace(/-/g, "")}`] + index.PowerModifierBase)* jayberCuckedPowerModifierModifier;

        const damage = calcs.getCompositeDamageSpread(basicInfo,skillPowerModifier);
        const damageZone = calcs.getCompositeDamageSpread(basicInfo,skillPowerModifierZone);

        const turretInterval = 1/0.6;
        const zoneInterval = 1/0.3

        const turretCount = nameOverride ? 2 : 1;
        const skillDurationMulti = 1 + index.SkillDuration;
        const turretTotalHits = Math.floor((15*skillDurationMulti)/1) * turretCount;
        const zoneTotalHits = Math.floor((10*skillDurationMulti)/0.30) * turretCount;

        const avgAssaultTick1 = damage.AVG;
        const avgZoneTick1 = damageZone.AVG;
        const totalTurretAVG1 = avgAssaultTick1 * turretTotalHits;
        const totalZoneAVG1 = avgZoneTick1 * zoneTotalHits;
        const sumTotalAVG1 = totalTurretAVG1 + totalZoneAVG1;

        
        if (!isCycleCalcs) {
            let rowInjectionTurretTicks = [
                {"name": "Hit/s","value": turretInterval,"unit": ""},
                {"name": "Total Hits","value": turretTotalHits,"unit": ""},
            ]
            let rowInjectionZoneTicks = [
                {"name": "Hit/s","value": zoneInterval,"unit": ""},
                {"name": "Total Hits","value": zoneTotalHits,"unit": ""},
            ]
            let rowInjectionSum = [
                {"name": "","value": sumTotalAVG1,"unit": ""},
            ]

            const breakdownArray = [
                {"header": "ASSAULT TURRET","value": damage,"modifier": skillPowerModifier,"hasCritAVG": true,"unit": "","magazineTypeWeapon": [turretTotalHits,totalTurretAVG1],
                    "rowInjection": [rowInjectionTurretTicks,""],
                    "condition": false,"desc": ""},
                {"header": "TURRET ZONE","value": damageZone,"modifier": skillPowerModifierZone,"hasCritAVG": true,"unit": "","magazineTypeWeapon": [zoneTotalHits,totalZoneAVG1],
                    "rowInjection": [rowInjectionZoneTicks,""],
                    "condition": false,"desc": ""},
                {"header": "SUM","value": null,"modifier": null,"hasCritAVG": null,"unit": "",
                    "rowInjection": [rowInjectionSum,"SUM AVG per Cast"],
                    "condition": false,"desc": ""},
            ];
            const bodyString = `abilityBreakdownBody${skillPlacement}`;
            
            const addRow = calcsUIHelper.addHealingBoxCluster;
            readSelection(`abilityBreakdownBody${skillPlacement}`).innerHTML = `
            ${addRow("Power",baseSkillPower,"")}
            <div class="basicsSummaryBox" id="lepicResultsBox">
                ${calcsUIHelper.addHealingBoxRows(bodyString,breakdownArray,abilityMap.displayStatsALT,index,returnObject,characterRef.name)}
            </div>
            <div class="abilityBreakdownHeader">DESCRIPTION</div>
            <div class="abilityBreakdownDescription">${tooltips.updateSubstatColor(abilityMap.desc)}</div>
            `;
        }
        else {
            return {avgAssaultTick1,avgZoneTick1,totalTurretAVG1,totalZoneAVG1,sumTotalAVG1}
        }
        // <div class="abilityBreakdownGeneralMessage">asdf.</div>
    },
    jayberAssaultCalcsAttackCompulsionStarter(index,returnObject,isCycleCalcs,nameOverride) {
        return customDamage.jayberAssaultCalcs(index,returnObject,isCycleCalcs,"Attacking Compulsion")
    },
    jayberAssaultCalcsMedicalCompulsion(index,returnObject,isCycleCalcs,nameOverride) {
        const characterRef = characters.Jayber;
        const settingsRef = characterRef.characterSettings;
        const skillPlacement = 1;
        const abilityMap = characterRef.abilities[`ability${skillPlacement}`]["Medical Compulsion"];
        const abilityTypeArray = abilityMap.type;
        const abilityMods = abilityMap.powerMods;
        
        if (!isCycleCalcs) {
            const breakdownArray = [];
            const bodyString = `abilityBreakdownBody${skillPlacement}`;
            
            const addRow = calcsUIHelper.addHealingBoxCluster;
            readSelection(`abilityBreakdownBody${skillPlacement}`).innerHTML = `
            <div class="basicsSummaryBox" id="lepicResultsBox">
                ${calcsUIHelper.addHealingBoxRows(bodyString,breakdownArray,abilityMap.displayStatsALT,index,returnObject,characterRef.name)}
            </div>
            <div class="abilityBreakdownHeader">DESCRIPTION</div>
            <div class="abilityBreakdownDescription">${tooltips.updateSubstatColor(abilityMap.desc)}</div>
            `;
        }
        else {
            return {}
        }
        // <div class="abilityBreakdownGeneralMessage">asdf.</div>
    },
    //ability 2
    jayberMedicalCalcs(index,returnObject,isCycleCalcs,nameOverride) {
        const characterRef = characters.Jayber;
        const settingsRef = characterRef.characterSettings;
        const skillPlacement = 2;
        const abilityMap = characterRef.abilities[`ability${skillPlacement}`][nameOverride ? nameOverride : "base"];
        const abilityTypeArray = abilityMap.type;
        const abilityMods = abilityMap.powerMods;
        
        if (!isCycleCalcs) {
            const breakdownArray = [
                {"header": "MEDICAL TURRET","value": null,"modifier": null,"hasCritAVG": true,"unit": "",
                    "condition": false,"desc": ""},
                {"header": "TURRET ZONE","value": null,"modifier": null,"hasCritAVG": true,"unit": "",
                    "condition": false,"desc": ""},
            ];
            const bodyString = `abilityBreakdownBody${skillPlacement}`;
            
            const addRow = calcsUIHelper.addHealingBoxCluster;
            readSelection(`abilityBreakdownBody${skillPlacement}`).innerHTML = `
            <div class="basicsSummaryBox" id="lepicResultsBox">
                ${calcsUIHelper.addHealingBoxRows(bodyString,breakdownArray,abilityMap.displayStatsALT,index,returnObject,characterRef.name)}
            </div>
            <div class="abilityBreakdownHeader">DESCRIPTION</div>
            <div class="abilityBreakdownDescription">${tooltips.updateSubstatColor(abilityMap.desc)}</div>
            `;
        }
        else {
            return {}
        }
        // <div class="abilityBreakdownGeneralMessage">asdf.</div>
    },
    jayberMedicalCalcsAttackCompulsion(index,returnObject,isCycleCalcs,nameOverride) {
        const characterRef = characters.Jayber;
        const settingsRef = characterRef.characterSettings;
        const skillPlacement = 2;
        const abilityMap = characterRef.abilities[`ability${skillPlacement}`]["Attacking Compulsion"];
        const abilityTypeArray = abilityMap.type;
        const abilityMods = abilityMap.powerMods;
        
        if (!isCycleCalcs) {
            const breakdownArray = [];
            const bodyString = `abilityBreakdownBody${skillPlacement}`;
            
            const addRow = calcsUIHelper.addHealingBoxCluster;
            readSelection(`abilityBreakdownBody${skillPlacement}`).innerHTML = `
            <div class="basicsSummaryBox" id="lepicResultsBox">
                ${calcsUIHelper.addHealingBoxRows(bodyString,breakdownArray,abilityMap.displayStatsALT,index,returnObject,characterRef.name)}
            </div>
            <div class="abilityBreakdownHeader">DESCRIPTION</div>
            <div class="abilityBreakdownDescription">${tooltips.updateSubstatColor(abilityMap.desc)}</div>
            `;
        }
        else {
            return {}
        }
        // <div class="abilityBreakdownGeneralMessage">asdf.</div>
    },
    jayberAssaultCalcsMedicalCompulsionStarter(index,returnObject,isCycleCalcs,nameOverride) {
        return customDamage.jayberMedicalCalcs(index,returnObject,isCycleCalcs,"Medical Compulsion")
    },
    //ability 3
    jayberMultipurposeCalcs(index,returnObject,isCycleCalcs,nameOverride) {
        const characterRef = characters.Jayber;
        const settingsRef = characterRef.characterSettings;
        const skillPlacement = 3;
        const abilityMap = characterRef.abilities[`ability${skillPlacement}`][nameOverride ? nameOverride : "base"];
        const abilityTypeArray = abilityMap.type;
        const abilityMods = abilityMap.powerMods;

        const sumModifierBonus = calcs.getTotalSkillPowerModifier(index,abilityTypeArray);
        const baseSkillPower = calcs.getTotalSkillPower(index,abilityTypeArray);
        const abilityDR = calcs.getResistanceBasedDR(index,abilityTypeArray[0]);
        const crit = calcs.getCritComposites(returnObject);

        const basicInfo = {baseSkillPower,abilityDR,crit};

        const skillPowerModifier = abilityMods.base + sumModifierBonus;

        const damage = calcs.getCompositeDamageSpread(basicInfo,skillPowerModifier);

        const magazine = 3 * (1 + index.MagazineSize);
        const actualMagazine = Math.floor(magazine);

        const avgDmgPerShot3 = damage.AVG;
        const totalMagazineSize3 = actualMagazine
        const totalUniqueWeaponDamage3 = actualMagazine * avgDmgPerShot3;

        
        if (!isCycleCalcs) {
            const breakdownArray = [
                {"header": "UNIQUE WEAPON","value": damage,"modifier": skillPowerModifier,"hasCritAVG": true,"unit": "","magazineTypeWeapon": [actualMagazine,totalUniqueWeaponDamage3],
                    "condition": false,"desc": ""},
                {"header": "ON TURRET HIT","value": null,"modifier": null,"hasCritAVG": true,"unit": "",
                    "condition": false,"desc": ""},
            ];
            const bodyString = `abilityBreakdownBody${skillPlacement}`;
            
            const addRow = calcsUIHelper.addHealingBoxCluster;
            readSelection(`abilityBreakdownBody${skillPlacement}`).innerHTML = `
            ${addRow("Power",baseSkillPower,"")}
            <div class="basicsSummaryBox" id="lepicResultsBox">
                ${calcsUIHelper.addHealingBoxRows(bodyString,breakdownArray,abilityMap.displayStatsALT,index,returnObject,characterRef.name)}
            </div>
            <div class="abilityBreakdownHeader">DESCRIPTION</div>
            <div class="abilityBreakdownDescription">${tooltips.updateSubstatColor(abilityMap.desc)}</div>
            `;
        }
        else {
            return {avgDmgPerShot3,totalMagazineSize3,totalUniqueWeaponDamage3}
        }
        // <div class="abilityBreakdownGeneralMessage">asdf.</div>
    },
    jayberMultipurposeCalcsEngineering(index,returnObject,isCycleCalcs,nameOverride) {
        const characterRef = characters.Jayber;
        const settingsRef = characterRef.characterSettings;
        const skillPlacement = 3;
        const abilityMap = characterRef.abilities[`ability${skillPlacement}`]["Turret Engineering"];
        const abilityTypeArray = abilityMap.type;
        const abilityMods = abilityMap.powerMods;

        
        if (!isCycleCalcs) {
            const breakdownArray = [
                {"header": "SKILL EFFECT","value": null,"modifier": null,"hasCritAVG": true,"unit": "",
                    "condition": false,"desc": ""},
            ];
            const bodyString = `abilityBreakdownBody${skillPlacement}`;
            
            const addRow = calcsUIHelper.addHealingBoxCluster;
            readSelection(`abilityBreakdownBody${skillPlacement}`).innerHTML = `
            <div class="basicsSummaryBox" id="lepicResultsBox">
                ${calcsUIHelper.addHealingBoxRows(bodyString,breakdownArray,abilityMap.displayStatsALT,index,returnObject,characterRef.name)}
            </div>
            <div class="abilityBreakdownHeader">DESCRIPTION</div>
            <div class="abilityBreakdownDescription">${tooltips.updateSubstatColor(abilityMap.desc)}</div>
            `;
        }
        else {
            return {}
        }
        // <div class="abilityBreakdownGeneralMessage">asdf.</div>
    },
    //ability 4
    jayberReactivateCalcs(index,returnObject,isCycleCalcs,nameOverride) {
        const characterRef = characters.Jayber;
        const settingsRef = characterRef.characterSettings;
        const skillPlacement = 4;
        const abilityMap = characterRef.abilities[`ability${skillPlacement}`][nameOverride ? nameOverride : "base"];
        const abilityTypeArray = abilityMap.type;
        const abilityMods = abilityMap.powerMods;

        const sumModifierBonus = calcs.getTotalSkillPowerModifier(index,abilityTypeArray);
        const baseSkillPower = calcs.getTotalSkillPower(index,abilityTypeArray);
        const abilityDR = calcs.getResistanceBasedDR(index,abilityTypeArray[0]);
        const crit = calcs.getCritComposites(returnObject);

        const basicInfo = {baseSkillPower,abilityDR,crit};

        const skillPowerModifier = abilityMods.base + sumModifierBonus;

        const damage = calcs.getCompositeDamageSpread(basicInfo,skillPowerModifier);

        const magazine = 3 * (1 + index.MagazineSize);//TODO: check later if the shot count is actually modified by mag size or if it just says 3x for shits and giggles
        //if it doesn't apply, then delete the shot count return variable from here and from character stats later.
        const actualMagazine = Math.floor(magazine);

        const avgDmgPerShot4 = damage.AVG;
        const totalMagazineSize4 = actualMagazine
        const totalExplosionDamage4 = actualMagazine * avgDmgPerShot4;

        
        if (!isCycleCalcs) {
            const breakdownArray = [
                {"header": "PROJECTILES","value": damage,"modifier": skillPowerModifier,"hasCritAVG": true,"unit": "","magazineTypeWeapon": [actualMagazine,totalExplosionDamage4],
                    "condition": false,"desc": ""},
                {"header": "OVERHAUL","value": null,"modifier": null,"hasCritAVG": true,"unit": "",
                    "condition": false,"desc": ""},
            ];
            const bodyString = `abilityBreakdownBody${skillPlacement}`;
            
            const addRow = calcsUIHelper.addHealingBoxCluster;
            readSelection(`abilityBreakdownBody${skillPlacement}`).innerHTML = `
            ${addRow("Power",baseSkillPower,"")}
            <div class="basicsSummaryBox" id="lepicResultsBox">
                ${calcsUIHelper.addHealingBoxRows(bodyString,breakdownArray,abilityMap.displayStatsALT,index,returnObject,characterRef.name)}
            </div>
            <div class="abilityBreakdownHeader">DESCRIPTION</div>
            <div class="abilityBreakdownDescription">${tooltips.updateSubstatColor(abilityMap.desc)}</div>
            `;
        }
        else {
            return {avgDmgPerShot4,totalMagazineSize4,totalExplosionDamage4}
        }
        // <div class="abilityBreakdownGeneralMessage">asdf.</div>
    },
    jayberReactivateCalcsPurge(index,returnObject,isCycleCalcs,nameOverride) {
        const characterRef = characters.Jayber;
        const settingsRef = characterRef.characterSettings;
        const skillPlacement = 4;
        const abilityMap = characterRef.abilities[`ability${skillPlacement}`]["Immediate Purge Code"];
        const abilityTypeArray = abilityMap.type;
        const abilityMods = abilityMap.powerMods;

        const sumModifierBonus = calcs.getTotalSkillPowerModifier(index,abilityTypeArray);
        const baseSkillPower = calcs.getTotalSkillPower(index,abilityTypeArray);
        const abilityDR = calcs.getResistanceBasedDR(index,abilityTypeArray[0]);
        const crit = calcs.getCritComposites(returnObject);

        const basicInfo = {baseSkillPower,abilityDR,crit};

        const skillPowerModifier = abilityMods.base + sumModifierBonus;
        const skillPowerModifierAOE = abilityMods.base + sumModifierBonus;

        const damage = calcs.getCompositeDamageSpread(basicInfo,skillPowerModifier);
        const damageAOE = calcs.getCompositeDamageSpread(basicInfo,skillPowerModifierAOE);

        const aoeDuration = 10 * (1 + index.SkillDuration);
        const tickcount = Math.floor(aoeDuration/1);
        const avgTotalTicks = tickcount * damageAOE.AVG


        const avgDmgPerExplosion4 = damage.AVG;
        const avgDmgPerTick4 = damageAOE.AVG
        const totalAvgTickDMG4 = avgTotalTicks;
        const sumTotalAVG4 = avgDmgPerExplosion4 + totalAvgTickDMG4;

        
        if (!isCycleCalcs) {
            let rowInjection = [
                {"name": "Hit/s","value": 1,"unit": ""},
                {"name": "Total Hits","value": tickcount,"unit": ""},
            ]
            const breakdownArray = [
                {"header": "EXPLOSION","value": damage,"modifier": skillPowerModifier,"hasCritAVG": true,"unit": "",
                    "condition": false,"desc": ""},
                {"header": "LIGHTNING AOE","value": damageAOE,"modifier": skillPowerModifierAOE,"hasCritAVG": true,"unit": "","magazineTypeWeapon": [tickcount,avgTotalTicks],
                    "rowInjection": [rowInjection,""],
                    "condition": false,"desc": ""},
                {"header": "OVERHAUL","value": null,"modifier": null,"hasCritAVG": true,"unit": "",
                    "condition": false,"desc": ""},
            ];
            const bodyString = `abilityBreakdownBody${skillPlacement}`;
            
            const addRow = calcsUIHelper.addHealingBoxCluster;
            readSelection(`abilityBreakdownBody${skillPlacement}`).innerHTML = `
            ${addRow("Power",baseSkillPower,"")}
            <div class="basicsSummaryBox" id="lepicResultsBox">
                ${calcsUIHelper.addHealingBoxRows(bodyString,breakdownArray,abilityMap.displayStatsALT,index,returnObject,characterRef.name)}
            </div>
            <div class="abilityBreakdownHeader">DESCRIPTION</div>
            <div class="abilityBreakdownDescription">${tooltips.updateSubstatColor(abilityMap.desc)}</div>
            `;
        }
        else {
            return {avgDmgPerExplosion4,avgDmgPerTick4,totalAvgTickDMG4,sumTotalAVG4}
        }
        // <div class="abilityBreakdownGeneralMessage">asdf.</div>
    },
    //passive
    jayberSyncCalcsTier0(index,returnObject,isCycleCalcs,nameOverride) {
            const characterRef = characters.Jayber;
            const settingsRef = characterRef.characterSettings;
            const skillPlacement = 5;
            const abilityMap = characterRef.abilities[`ability${skillPlacement}`][nameOverride ? nameOverride : "base"];
    
            const atkBonus = abilityMap.powerMods["FirearmATK%"];
            const powerBonus = abilityMap.powerMods.SkillPower;
    
            index["FirearmATK%"] += settingsRef.jayberTurretSyncActive ? atkBonus : 0;
            index["PowerOptimization"] += settingsRef.jayberTurretSyncActive ? powerBonus : 0; //figure out the skill power bonus later
    },
    jayberSyncCalcs(index,returnObject,isCycleCalcs,nameOverride) { 
        const characterRef = characters.Jayber;
        const settingsRef = characterRef.characterSettings;
        const skillPlacement = 5;
        const abilityMap = characterRef.abilities[`ability${skillPlacement}`][nameOverride ? nameOverride : "base"];
        const abilityTypeArray = abilityMap.type;
        const abilityMods = abilityMap.powerMods;

        if (!isCycleCalcs) {
            const breakdownArray = [
                {"header": "TURRET SYNC","value": null,"modifier": null,"hasCritAVG": false,"unit": "","isDOT": false,"ticksDOT": 0,"intervalDOT": 0,
                    "condition": false,"desc": "","toggleElemID": ["jayberTurretSyncActive","Both Turrets active?"]},
            ];
            const bodyString = `abilityBreakdownBody${skillPlacement}`;
            
            const addRow = calcsUIHelper.addHealingBoxCluster;
            readSelection(`abilityBreakdownBody${skillPlacement}`).innerHTML = `
            <div class="basicsSummaryBox" id="lepicResultsBox">
                ${calcsUIHelper.addHealingBoxRows(bodyString,breakdownArray,abilityMap.displayStatsALT,index,returnObject,characterRef.name)}
            </div>
            <div class="abilityBreakdownHeader">DESCRIPTION</div>
            <div class="abilityBreakdownDescription">${tooltips.updateSubstatColor(abilityMap.desc)}</div>
            `;
        }
        else {
            return {}
        }
        // <div class="abilityBreakdownGeneralMessage">asdf.</div>
    },

    //-- Freyna --
    //ability 1
    freynaVenomTraumaCalcs(index,returnObject,isCycleCalcs,nameOverride) {
        const characterRef = characters.Freyna;
        const settingsRef = characterRef.characterSettings;
        const skillPlacement = 1;
        const abilityMap = characterRef.abilities[`ability${skillPlacement}`][nameOverride ? nameOverride : "base"];
        const abilityTypeArray = abilityMap.type;
        const abilityMods = abilityMap.powerMods;

        const sumModifierBonus = calcs.getTotalSkillPowerModifier(index,abilityTypeArray);
        const baseSkillPower = calcs.getTotalSkillPower(index,abilityTypeArray);
        const abilityDR = calcs.getResistanceBasedDR(index,abilityTypeArray[0]);
        const crit = calcs.getCritComposites(returnObject);

        const basicInfo = {baseSkillPower,abilityDR,crit};

        const skillPowerModifier = abilityMods.base + sumModifierBonus;
        const skillPowerModifierPuddle = abilityMods.puddle + sumModifierBonus;
        const skillPowerModifierTrauma = abilityMods.trauma + sumModifierBonus;
        const skillPowerModifierPanic = abilityMods.panic + sumModifierBonus;
    
        const damage = calcs.getCompositeDamageSpread(basicInfo,skillPowerModifier);
        const damagePuddle = calcs.getCompositeDamageSpread(basicInfo,skillPowerModifierPuddle);
        const damageTrauma = calcs.getCompositeDamageSpread(basicInfo,skillPowerModifierTrauma);
        const damagePanic = calcs.getCompositeDamageSpread(basicInfo,skillPowerModifierPanic);


        const avgPerImpact = damage.AVG;
        const avgPerPuddleTick = damagePuddle.AVG;
        const avgPerTraumaTick = damage.AVG;


        if (!isCycleCalcs) {
            const breakdownArray = [
                {"header": "IMPACT","value": damage,"modifier": skillPowerModifier,"hasCritAVG": true,"unit": "","isDOT": false,"ticksDOT": 0,"intervalDOT": 0,
                    "condition": false,"desc": ""},
                {"header": "PUDDLE","value": damagePuddle,"modifier": skillPowerModifierPuddle,"hasCritAVG": true,"unit": "","isDOT": false,"ticksDOT": 0,"intervalDOT": 0,
                    "condition": false,"desc": ""},
                {"header": "TRAUMA","value": damageTrauma,"modifier": skillPowerModifierTrauma,"hasCritAVG": true,"unit": "","isDOT": false,"ticksDOT": 0,"intervalDOT": 0,
                    "condition": false,"desc": ""},
                {"header": "PANIC","value": damagePanic,"modifier": skillPowerModifierPanic,"hasCritAVG": true,"unit": "","isDOT": false,"ticksDOT": 0,"intervalDOT": 0,
                    "condition": nameOverride,"desc": "Will not apply to the host of Room 0 Trauma, but only to those around them.<br>If another nearby also has Room 0 Trauma, then it can apply to both as both apply to the other."}
            ];
            const bodyString = `abilityBreakdownBody${skillPlacement}`;
            
            const addRow = calcsUIHelper.addHealingBoxCluster;
            readSelection(`abilityBreakdownBody${skillPlacement}`).innerHTML = `
            ${addRow("Power",baseSkillPower,"")}
            <div class="basicsSummaryBox" id="lepicResultsBox">
                ${calcsUIHelper.addHealingBoxRows(bodyString,breakdownArray,abilityMap.displayStatsALT,index,returnObject,characterRef.name)}
            </div>
            <div class="abilityBreakdownHeader">DESCRIPTION</div>
            <div class="abilityBreakdownDescription">${tooltips.updateSubstatColor(abilityMap.desc)}</div>
            `;
        }
        else {
            return {avgPerPuddleTick,avgPerTraumaTick,avgPerImpact}
        }
        // <div class="abilityBreakdownGeneralMessage">asdf.</div>
    },
    freynaVenomTraumaCalcsNeuroStarter(index,returnObject,isCycleCalcs) {
        return customDamage.freynaVenomTraumaCalcs(index,returnObject,isCycleCalcs,"Neurotoxin Synthesis")
    },
    freynaVenomTraumaCalcsContagionStarter(index,returnObject,isCycleCalcs) {
        return customDamage.freynaVenomTraumaCalcs(index,returnObject,isCycleCalcs,"Contagion")
    },
    //ability 2 - used to dictate whether the bodyArmor def bonus applies or not, early in the calcs
    freynaMechanismCalcsTier0(index,returnObject,isCycleCalcs,nameOverride) {
        const characterRef = characters.Freyna;
        const settingsRef = characterRef.characterSettings;
        const skillPlacement = 2;
        const abilityMap = characterRef.abilities[`ability${skillPlacement}`][nameOverride ? nameOverride : "base"];

        const defBonus = abilityMap.powerMods.DEF;

        index["DEF%"] += settingsRef.freynaBodyarmorBonus ? defBonus : 0;
    },
    freynaMechanismCalcsTier0NeuroStarter(index,returnObject,isCycleCalcs) {
        return customDamage.freynaMechanismCalcsTier0(index,returnObject,isCycleCalcs,"Neurotoxin Synthesis");
    },
    freynaMechanismCalcsTier0ContagionStarter(index,returnObject,isCycleCalcs) {
        return customDamage.freynaMechanismCalcsTier0(index,returnObject,isCycleCalcs,"Neurotoxin Synthesis");
    },
    freynaMechanismCalcsTier0ToxicStarter(index,returnObject,isCycleCalcs) {
        return customDamage.freynaMechanismCalcsTier0(index,returnObject,isCycleCalcs,"Neurotoxin Synthesis");
    },
    //ability 2 - normal math
    freynaMechanismCalcs(index,returnObject,isCycleCalcs,nameOverride) { 
        const characterRef = characters.Freyna;
        const settingsRef = characterRef.characterSettings;
        const skillPlacement = 2;
        const abilityMap = characterRef.abilities[`ability${skillPlacement}`][nameOverride ? nameOverride : "base"];
        const abilityTypeArray = abilityMap.type;
        const abilityMods = abilityMap.powerMods;

        const sumModifierBonus = calcs.getTotalSkillPowerModifier(index,abilityTypeArray);
        const baseSkillPower = calcs.getTotalSkillPower(index,abilityTypeArray);
        const abilityDR = calcs.getResistanceBasedDR(index,abilityTypeArray[0]);
        const crit = calcs.getCritComposites(returnObject);

        const basicInfo = {baseSkillPower,abilityDR,crit};

        const skillPowerModifierTrauma = abilityMods.trauma + sumModifierBonus;
        const skillPowerModifierPanic = abilityMods.panic + sumModifierBonus;
    
        const damageTrauma = calcs.getCompositeDamageSpread(basicInfo,skillPowerModifierTrauma);
        const damagePanic = calcs.getCompositeDamageSpread(basicInfo,skillPowerModifierPanic);
        if (nameOverride === "Toxic Stimulation") {nameOverride = null;}

        const avgPerTraumaTick = damageTrauma.AVG

        if (!isCycleCalcs) {
            const breakdownArray = [
                {"header": "BODYARMOR","value": null,"modifier": null,"hasCritAVG": false,"unit": "","isDOT": false,"ticksDOT": 0,"intervalDOT": 0,
                    "condition": false,"desc": "","toggleElemID": ["freynaBodyarmorBonus",""]},
                {"header": "TRAUMA","value": damageTrauma,"modifier": skillPowerModifierTrauma,"hasCritAVG": true,"unit": "","isDOT": false,"ticksDOT": 0,"intervalDOT": 0,
                    "condition": false,"desc": ""},
                {"header": "DESPAIR","value": damagePanic,"modifier": skillPowerModifierPanic,"hasCritAVG": true,"unit": "","isDOT": false,"ticksDOT": 0,"intervalDOT": 0,
                    "condition": nameOverride,"desc": "Will not apply to the host of Room 0 Trauma, but only to those around them.<br>If another nearby also has Room 0 Trauma, then it can apply to both as both apply to the other."}
            ];
            const bodyString = `abilityBreakdownBody${skillPlacement}`;
            
            const addRow = calcsUIHelper.addHealingBoxCluster;
            readSelection(`abilityBreakdownBody${skillPlacement}`).innerHTML = `
            ${addRow("Power",baseSkillPower,"")}
            <div class="basicsSummaryBox" id="lepicResultsBox">
                ${calcsUIHelper.addHealingBoxRows(bodyString,breakdownArray,abilityMap.displayStatsALT,index,returnObject,characterRef.name)}
            </div>
            <div class="abilityBreakdownHeader">DESCRIPTION</div>
            <div class="abilityBreakdownDescription">${tooltips.updateSubstatColor(abilityMap.desc)}</div>
            `;
        }
        else {
            return {avgPerTraumaTick}
        }
        // <div class="abilityBreakdownGeneralMessage">asdf.</div>
    },
    freynaMechanismCalcsNeuroStarter(index,returnObject,isCycleCalcs) {
        return customDamage.freynaMechanismCalcs(index,returnObject,isCycleCalcs,"Neurotoxin Synthesis")
    },
    freynaMechanismCalcsContagionStarter(index,returnObject,isCycleCalcs) {
        return customDamage.freynaMechanismCalcs(index,returnObject,isCycleCalcs,"Contagion")
    },
    freynaMechanismCalcsStimulationStarter(index,returnObject,isCycleCalcs) {
        return customDamage.freynaMechanismCalcs(index,returnObject,isCycleCalcs,"Toxic Stimulation")
    },
    freynaMechanismCalcsInjectionTier0(index,returnObject,isCycleCalcs,nameOverride) { 
        const characterRef = characters.Freyna;
        const settingsRef = characterRef.characterSettings;
        const skillPlacement = 2;
        const abilityMap = characterRef.abilities[`ability${skillPlacement}`]["Venom Injection"];
        const abilityTypeArray = abilityMap.type;
        const abilityMods = abilityMap.powerMods;

        //If overwhelming shield or def is equipped, force a 0-state, otherwise never let people go below 15% HP to follow game logic
        if (index.isHPSetTo1 > 0) {settingsRef.freynaInjectionBonuses = 0;}
        else if (settingsRef.freynaInjectionBonuses < 15) {settingsRef.freynaInjectionBonuses = 15;}

        const hpSliderValue = +settingsRef.freynaInjectionBonuses;
        const inverseBonusPercent = (150 - hpSliderValue)/150;
        const finalPowerModifier = 0.663 * inverseBonusPercent;
        const finalShieldRegen = 0.05 * inverseBonusPercent;
        const finalToxinRes = 2.5 * inverseBonusPercent;

        index.enemyToxicResistanceReduction += settingsRef.freynaCorrosionBonuses ? -0.25 : 0;
        index["ResistanceToxin%"] += finalToxinRes;
        index.PowerModifierBase += finalPowerModifier;

        if (!isCycleCalcs) {
            const rowInjection = [
                {"name": "+Power Mod","value": finalPowerModifier,"unit": "%"},
                {"name": "+Toxin Res%","value": finalToxinRes,"unit": "%"},
                {"name": "+Shield%/s","value": finalShieldRegen,"unit": "%"},
            ]

            const breakdownArray = [
                {"header": "TOXIC SENSE","value": null,"modifier": null,"hasCritAVG": null,"unit": "","isDOT": false,"ticksDOT": 0,"intervalDOT": 0,
                    "condition": false,"desc": "The maximum of 66.3% bonus modifier can only be achieved when using Overwhelming Shield or when damaged, otherwise you stop at 15%",
                    "sliderElemID": ["freynaInjectionBonuses",0,90,15,"%HP Remaining"],"rowInjection": [rowInjection,""],},
                {"header": "CORROSION","value": null,"modifier": null,"hasCritAVG": null,"unit": "","isDOT": false,"ticksDOT": 0,"intervalDOT": 0,
                    "toggleElemID": ["freynaCorrosionBonuses","Use Resistance Reduction?"],//do not uncomment, you will break things, it's not ready
                    "condition": false,"desc": ""},
            ];
            const bodyString = `abilityBreakdownBody${skillPlacement}`;
            
            const addRow = calcsUIHelper.addHealingBoxCluster;
            readSelection(`abilityBreakdownBody${skillPlacement}`).innerHTML = `
            <div class="basicsSummaryBox" id="lepicResultsBox">
                ${calcsUIHelper.addHealingBoxRows(bodyString,breakdownArray,abilityMap.displayStatsALT,index,returnObject,characterRef.name)}
            </div>
            <div class="abilityBreakdownHeader">DESCRIPTION</div>
            <div class="abilityBreakdownDescription">${tooltips.updateSubstatColor(abilityMap.desc)}</div>
            `;
        }
        // <div class="abilityBreakdownGeneralMessage">asdf.</div>
    },
    //ability 3
    freynaPutridVenomCalcs(index,returnObject,isCycleCalcs,nameOverride) {
        const characterRef = characters.Freyna;
        const settingsRef = characterRef.characterSettings;
        const skillPlacement = 3;
        const abilityMap = characterRef.abilities[`ability${skillPlacement}`][nameOverride ? nameOverride : "base"];
        const abilityTypeArray = abilityMap.type;
        const abilityMods = abilityMap.powerMods;

        const sumModifierBonus = calcs.getTotalSkillPowerModifier(index,abilityTypeArray);
        const baseSkillPower = calcs.getTotalSkillPower(index,abilityTypeArray);
        const abilityDR = calcs.getResistanceBasedDR(index,abilityTypeArray[0]);
        const crit = calcs.getCritComposites(returnObject);

        const basicInfo = {baseSkillPower,abilityDR,crit};

        const skillPowerModifier = abilityMods.base + sumModifierBonus;
        const skillPowerModifierPuddle = abilityMods.puddle + sumModifierBonus;
        const skillPowerModifierTrauma = abilityMods.trauma + sumModifierBonus;
        const skillPowerModifierPanic = abilityMods.panic + sumModifierBonus;
    
        const damagePuddle = calcs.getCompositeDamageSpread(basicInfo,skillPowerModifierPuddle);
        const damageTrauma = calcs.getCompositeDamageSpread(basicInfo,skillPowerModifierTrauma);
        const damagePanic = calcs.getCompositeDamageSpread(basicInfo,skillPowerModifierPanic);

        const avgPerPuddleTick = damagePuddle.AVG
        const avgPerTraumaTick = damageTrauma.AVG


        if (!isCycleCalcs) {
            const breakdownArray = [
                {"header": "SWAMP","value": damagePuddle,"modifier": skillPowerModifierPuddle,"hasCritAVG": true,"unit": "","isDOT": false,"ticksDOT": 0,"intervalDOT": 0,
                    "condition": false,"desc": ""},
                {"header": "TRAUMA","value": damageTrauma,"modifier": skillPowerModifierTrauma,"hasCritAVG": true,"unit": "","isDOT": false,"ticksDOT": 0,"intervalDOT": 0,
                    "condition": false,"desc": ""},
                {"header": "PUTRID","value": damagePanic,"modifier": skillPowerModifierPanic,"hasCritAVG": true,"unit": "","isDOT": false,"ticksDOT": 0,"intervalDOT": 0,
                    "condition": nameOverride,"desc": "Will not apply to the host of Room 0 Trauma, but only to those around them.<br>If another nearby also has Room 0 Trauma, then it can apply to both as both apply to the other."}
            ];
            const bodyString = `abilityBreakdownBody${skillPlacement}`;
            
            const addRow = calcsUIHelper.addHealingBoxCluster;
            readSelection(`abilityBreakdownBody${skillPlacement}`).innerHTML = `
            ${addRow("Power",baseSkillPower,"")}
            <div class="basicsSummaryBox" id="lepicResultsBox">
                ${calcsUIHelper.addHealingBoxRows(bodyString,breakdownArray,abilityMap.displayStatsALT,index,returnObject,characterRef.name)}
            </div>
            <div class="abilityBreakdownHeader">DESCRIPTION</div>
            <div class="abilityBreakdownDescription">${tooltips.updateSubstatColor(abilityMap.desc)}</div>
            `;
        }
        else {
            return {avgPerPuddleTick,avgPerTraumaTick}
        }
    },
    freynaPutridVenomCalcsNeuroStarter(index,returnObject,isCycleCalcs) {
        return customDamage.freynaPutridVenomCalcs(index,returnObject,isCycleCalcs,"Neurotoxin Synthesis")
    },
    freynaPutridVenomCalcsContagionStarter(index,returnObject,isCycleCalcs) {
        return customDamage.freynaPutridVenomCalcs(index,returnObject,isCycleCalcs,"Contagion")
    },
    freynaPutridVenomCalcsSynthesis(index,returnObject,isCycleCalcs,nameOverride) {
        const characterRef = characters.Freyna;
        const settingsRef = characterRef.characterSettings;
        const skillPlacement = 3;
        const abilityMap = characterRef.abilities[`ability${skillPlacement}`]["Venom Synthesis"];
        const abilityTypeArray = abilityMap.type;
        const abilityMods = abilityMap.powerMods;

        const sumModifierBonus = calcs.getTotalSkillPowerModifier(index,abilityTypeArray);
        const baseSkillPower = calcs.getTotalSkillPower(index,abilityTypeArray);
        const abilityDR = calcs.getResistanceBasedDR(index,abilityTypeArray[0]);
        const crit = calcs.getCritComposites(returnObject);

        const basicInfo = {baseSkillPower,abilityDR,crit};

        const skillPowerModifierTrauma = abilityMods.trauma + sumModifierBonus;
        const skillPowerModifierPanic = abilityMods.panic + sumModifierBonus;
    
        const damageTrauma = calcs.getCompositeDamageSpread(basicInfo,skillPowerModifierTrauma);
        const damagePanic = calcs.getCompositeDamageSpread(basicInfo,skillPowerModifierPanic);

        const avgPerTraumaTick = damageTrauma.AVG


        if (!isCycleCalcs) {
            const breakdownArray = [
                {"header": "TRAUMA","value": damageTrauma,"modifier": skillPowerModifierTrauma,"hasCritAVG": true,"unit": "","isDOT": false,"ticksDOT": 0,"intervalDOT": 0,
                    "condition": false,"desc": ""},
                {"header": "PUTRID","value": damagePanic,"modifier": skillPowerModifierPanic,"hasCritAVG": true,"unit": "","isDOT": false,"ticksDOT": 0,"intervalDOT": 0,
                    "condition": false,"desc": "Will not apply to the host of Room 0 Trauma, but only to those around them.<br>If another nearby also has Room 0 Trauma, then it can apply to both as both apply to the other."}
            ];
            const bodyString = `abilityBreakdownBody${skillPlacement}`;
            
            const addRow = calcsUIHelper.addHealingBoxCluster;
            readSelection(`abilityBreakdownBody${skillPlacement}`).innerHTML = `
            ${addRow("Power",baseSkillPower,"")}
            <div class="basicsSummaryBox" id="lepicResultsBox">
                ${calcsUIHelper.addHealingBoxRows(bodyString,breakdownArray,abilityMap.displayStatsALT,index,returnObject,characterRef.name)}
            </div>
            <div class="abilityBreakdownHeader">DESCRIPTION</div>
            <div class="abilityBreakdownDescription">${tooltips.updateSubstatColor(abilityMap.desc)}</div>
            `;
        }
        else {
            return {avgPerTraumaTick}
        }
    },
    //ability 4
    freynaBaptismCalcs(index,returnObject,isCycleCalcs,nameOverride) {
        const characterRef = characters.Freyna;
        const settingsRef = characterRef.characterSettings;
        const skillPlacement = 4;
        const abilityMap = characterRef.abilities[`ability${skillPlacement}`][nameOverride ? nameOverride : "base"];
        const abilityTypeArray = abilityMap.type;
        const abilityMods = abilityMap.powerMods;

        const sumModifierBonus = calcs.getTotalSkillPowerModifier(index,abilityTypeArray);
        const baseSkillPower = calcs.getTotalSkillPower(index,abilityTypeArray);
        const abilityDR = calcs.getResistanceBasedDR(index,abilityTypeArray[0]);
        const crit = calcs.getCritComposites(returnObject);

        const basicInfo = {baseSkillPower,abilityDR,crit};

        const skillPowerModifier = abilityMods.base + sumModifierBonus;
        const skillPowerModifierTrauma = abilityMods.trauma + sumModifierBonus;
        const skillPowerModifierPanic = abilityMods.panic + sumModifierBonus;
    
        const damage = calcs.getCompositeDamageSpread(basicInfo,skillPowerModifier);
        const damageTrauma = calcs.getCompositeDamageSpread(basicInfo,skillPowerModifierTrauma);
        const damagePanic = calcs.getCompositeDamageSpread(basicInfo,skillPowerModifierPanic);

        const rollDuration = 1.35;
        const firingWindowBase = abilityMods.duration * (1 + index.SkillDuration);
        const actualFiringWindow = firingWindowBase - rollDuration;

        const currentAmmoType = globalRecords.reactor.currentAmmoType;
        const weaponModsPath = globalRecords.weapon.mods;
        let isSharpPrecision = false;
        for (let entry of weaponModsPath) {if (entry === "Sharp Precision Shot") {isSharpPrecision = true;break;}}
        const baseRate = 60/451;//gap between shots with 0 fire rate active from any source.
        const {shotCount,firingWindowDuration,excessWasted} = customDamage.skillBasedFireRateMath(index,actualFiringWindow,baseRate,isSharpPrecision,currentAmmoType);



        const magazine = abilityMods.magazine * (1 + index.MagazineSize);
        const usableMagazine = Math.floor(magazine);
        const possibleShots = Math.min(usableMagazine,shotCount)

        const avgPerTraumaTick = damageTrauma.AVG;
        const totalAVGTrauma = Math.floor(actualFiringWindow) * damageTrauma.AVG;
        const avgPerShot = damage.AVG;
        const totalAVGGun = possibleShots * damage.AVG;
        const avgGunDPS = (possibleShots * damage.AVG) / actualFiringWindow;
        const avgTotalDPS = (possibleShots * damage.AVG + totalAVGTrauma) / actualFiringWindow;
        const SUMTotalAVG = possibleShots * damage.AVG + totalAVGTrauma;

        if (!isCycleCalcs) {
            let rowInjection = [
                {"name": "Firing Window","value": firingWindowBase,"unit": "s"},
                {"name": "Roll Cancel","value": -rollDuration,"unit": "s"},
                {"name": "Actual","value": actualFiringWindow,"unit": "s"},
                {"name": "Magazine","value": usableMagazine,"unit": " shots"},
                {"name": "Time for","value": shotCount,"unit": " shots"},
            ]
            let rowInjectionSUMS = [
                {"name": "SUM Total AVG","value": SUMTotalAVG,"unit": ""},
                {"name": "AVG DPS","value": avgTotalDPS,"unit": ""},
                {"name": "Total AVG Baptism","value": totalAVGGun,"unit": ""},
                {"name": "Total AVG Trauma","value": totalAVGTrauma,"unit": ""},
            ]

            const breakdownArray = [
                {"header": "UNIQUE WEAPON","value": damage,"modifier": skillPowerModifier,"hasCritAVG": true,"unit": "","magazineTypeWeapon": [possibleShots,totalAVGGun],
                    "rowInjection": [rowInjection,"Benefits from Fire Rate and Rounds Per Magazine stats."],
                    "condition": false,"desc": ""},
                {"header": "TRAUMA","value": damageTrauma,"modifier": skillPowerModifierTrauma,"hasCritAVG": true,"unit": "","isDOT": false,"ticksDOT": 0,"intervalDOT": 0,
                    "condition": false,"desc": ""},
                {"header": "NIGHTMARE","value": damagePanic,"modifier": skillPowerModifierPanic,"hasCritAVG": true,"unit": "","isDOT": false,"ticksDOT": 0,"intervalDOT": 0,
                    "condition": nameOverride,"desc": "Will not apply to the host of Room 0 Trauma, but only to those around them.<br>If another nearby also has Room 0 Trauma, then it can apply to both as both apply to the other."},
                {"header": "SUM","value": null,"modifier": null,"hasCritAVG": true,"unit": "","isDOT": false,"ticksDOT": 0,"intervalDOT": 0,
                    "rowInjection": [rowInjectionSUMS,""],
                    "condition": false,"desc": "Only Baptism + Trauma damage is factored here. The cut-off for these numbers is when you run out of Baptism ammo."},
            ];
            const bodyString = `abilityBreakdownBody${skillPlacement}`;
            
            const addRow = calcsUIHelper.addHealingBoxCluster;
            readSelection(`abilityBreakdownBody${skillPlacement}`).innerHTML = `
            ${addRow("Power",baseSkillPower,"")}
            <div class="basicsSummaryBox" id="lepicResultsBox">
                ${calcsUIHelper.addHealingBoxRows(bodyString,breakdownArray,abilityMap.displayStatsALT,index,returnObject,characterRef.name)}
            </div>
            <div class="abilityBreakdownHeader">DESCRIPTION</div>
            <div class="abilityBreakdownDescription">${tooltips.updateSubstatColor(abilityMap.desc)}</div>
            `;
        }
        else {
            return {avgPerTraumaTick,totalAVGTrauma,avgPerShot,totalAVGGun,avgGunDPS,avgTotalDPS,SUMTotalAVG}
        }
    },
    freynaBaptismCalcsNeuroStarter(index,returnObject,isCycleCalcs) {
        return customDamage.freynaBaptismCalcs(index,returnObject,isCycleCalcs,"Neurotoxin Synthesis")
    },
    freynaBaptismCalcsContagionStarter(index,returnObject,isCycleCalcs) {
        return customDamage.freynaBaptismCalcs(index,returnObject,isCycleCalcs,"Contagion")
    },
    //passive
    freynaContagionCalcs(index,returnObject,isCycleCalcs,nameOverride) {
        const characterRef = characters.Freyna;
        const settingsRef = characterRef.characterSettings;
        const skillPlacement = 5;
        const abilityMap = characterRef.abilities[`ability${skillPlacement}`][nameOverride ? nameOverride : "base"];
        const abilityTypeArray = abilityMap.type;
        const abilityMods = abilityMap.powerMods;

        const sumModifierBonus = calcs.getTotalSkillPowerModifier(index,abilityTypeArray);
        const baseSkillPower = calcs.getTotalSkillPower(index,abilityTypeArray);
        const abilityDR = calcs.getResistanceBasedDR(index,abilityTypeArray[0]);
        const crit = calcs.getCritComposites(returnObject);

        const basicInfo = {baseSkillPower,abilityDR,crit};

        const skillPowerModifier = abilityMods.base + sumModifierBonus;
        const skillPowerModifierTrauma = abilityMods.trauma + sumModifierBonus;
        const skillPowerModifierToxic = abilityMods.toxic + sumModifierBonus;
    
        const damagePuddle = calcs.getCompositeDamageSpread(basicInfo,skillPowerModifier);
        const damageTrauma = calcs.getCompositeDamageSpread(basicInfo,skillPowerModifierTrauma);
        const damageReaction = calcs.getCompositeDamageSpread(basicInfo,skillPowerModifierToxic);

        const avgPerPuddleTick = damagePuddle.AVG;
        const avgPerTraumaTick = damageTrauma.AVG;

        if (!isCycleCalcs) {
            const breakdownArray = [
                {"header": "PUDDLE","value": damagePuddle,"modifier": skillPowerModifier,"hasCritAVG": true,"unit": "","isDOT": false,"ticksDOT": 0,"intervalDOT": 0,
                    "condition": false,"desc": ""},
                {"header": "TRAUMA","value": damageTrauma,"modifier": skillPowerModifierTrauma,"hasCritAVG": true,"unit": "","isDOT": false,"ticksDOT": 0,"intervalDOT": 0,
                    "condition": false,"desc": ""},
                {"header": "TOXIC REACTION","value": damageReaction,"modifier": skillPowerModifierToxic,"hasCritAVG": true,"unit": "","isDOT": false,"ticksDOT": 0,"intervalDOT": 0,
                    "condition": nameOverride,"desc": "Will not apply to the host of Room 0 Trauma, but only to those around them.<br>If another nearby also has Room 0 Trauma, then it can apply to both as both apply to the other."}
            ];
            const bodyString = `abilityBreakdownBody${skillPlacement}`;
            
            const addRow = calcsUIHelper.addHealingBoxCluster;
            readSelection(`abilityBreakdownBody${skillPlacement}`).innerHTML = `
            ${addRow("Power",baseSkillPower,"")}
            <div class="basicsSummaryBox" id="lepicResultsBox">
                ${calcsUIHelper.addHealingBoxRows(bodyString,breakdownArray,abilityMap.displayStatsALT,index,returnObject,characterRef.name)}
            </div>
            <div class="abilityBreakdownHeader">DESCRIPTION</div>
            <div class="abilityBreakdownDescription">${tooltips.updateSubstatColor(abilityMap.desc)}</div>
            `;
        }
        else {
            return {avgPerPuddleTick,avgPerTraumaTick}
        }
    },
    freynaContagionCalcsNeuroStarter(index,returnObject,isCycleCalcs) {
        return customDamage.freynaContagionCalcs(index,returnObject,isCycleCalcs,"Neurotoxin Synthesis")
    },
    freynaContagionCalcsContagionStarter(index,returnObject,isCycleCalcs) {
        return customDamage.freynaContagionCalcs(index,returnObject,isCycleCalcs,"Contagion")
    },

    //Esiemo
    //ability1
    esiemoTimeBombCalcs(index,returnObject,isCycleCalcs,nameOverride) {
        const characterRef = characters.Esiemo;
        const settingsRef = characterRef.characterSettings;
        const skillPlacement = 1;
        const abilityMap = characterRef.abilities[`ability${skillPlacement}`][nameOverride ? nameOverride : "base"];
        const abilityTypeArray = abilityMap.type;
        const abilityMods = abilityMap.powerMods;

        const sumModifierBonus = calcs.getTotalSkillPowerModifier(index,abilityTypeArray);
        const baseSkillPower = calcs.getTotalSkillPower(index,abilityTypeArray);
        const abilityDR = calcs.getResistanceBasedDR(index,abilityTypeArray[0]);
        const crit = calcs.getCritComposites(returnObject);

        const basicInfo = {baseSkillPower,abilityDR,crit};

        const blastMulti = settingsRef.blastStacksPowerBonus;
        const currentBombs = +settingsRef.timeBombStacks;

        const skillPowerModifier = abilityMods.base + sumModifierBonus;

        const damage = calcs.getCompositeDamageSpread(basicInfo,skillPowerModifier,null,blastMulti);

        const avgDmgPerHit = damage.AVG;
        const sumTotalAVG = damage.AVG * currentBombs;

        if (!isCycleCalcs) {
            let rowInjection = [
                {"name": "Blast Multiplier","value": blastMulti,"unit": "x"},
            ]

            const breakdownArray = [
                {"header": "SKILL EFFECT","value": damage,"modifier": skillPowerModifier,"hasCritAVG": true,"unit": "","magazineTypeWeapon": [currentBombs,sumTotalAVG],
                    "sliderElemID": ["timeBombStacks",0,15,1,"Time Bombs Placed"],
                    "rowInjection": [rowInjection,""],
                    "condition": false,"desc": ""},
            ];
            const bodyString = `abilityBreakdownBody${skillPlacement}`;
            
            const addRow = calcsUIHelper.addHealingBoxCluster;
            readSelection(`abilityBreakdownBody${skillPlacement}`).innerHTML = `
            ${addRow("Power",baseSkillPower,"")}
            <div class="basicsSummaryBox" id="lepicResultsBox">
                ${calcsUIHelper.addHealingBoxRows(bodyString,breakdownArray,abilityMap.displayStatsALT,index,returnObject,characterRef.name)}
            </div>
            <div class="abilityBreakdownHeader">DESCRIPTION</div>
            <div class="abilityBreakdownDescription">${tooltips.updateSubstatColor(abilityMap.desc)}</div>
            `;
        }
        else {
            return {avgDmgPerHit,sumTotalAVG}
        }
        // <div class="abilityBreakdownGeneralMessage">asdf.</div>
    },
    //ability 2
    esiemoBlastCalcsTier0(index,returnObject,isCycleCalcs,nameOverride) {
        const characterRef = characters.Esiemo;
        const settingsRef = characterRef.characterSettings;
        const skillPlacement = 2;
        const abilityMap = characterRef.abilities[`ability${skillPlacement}`][nameOverride ? nameOverride : "base"];
        const abilityTypeArray = abilityMap.type;
        const abilityMods = abilityMap.powerMods;

        const bombMulti = abilityMods.bombMulti;
        const bombMultiCap = abilityMods.bombMultiCap;

        const totalBombsActive = Math.min(bombMultiCap,settingsRef.totalActiveBombs);
        const totalBombsMulti = 1 + (totalBombsActive * bombMulti);

        settingsRef.blastStacksPowerBonus = totalBombsMulti;
    },
    esiemoBlastCalcsTier0CreativeStarter(index,returnObject,isCycleCalcs,nameOverride) {
        customDamage.esiemoBlastCalcsTier0(index,returnObject,isCycleCalcs,"Creative Explosion");
    },
    esiemoBlastCalcsTier0ClusterStarter(index,returnObject,isCycleCalcs,nameOverride) {
        customDamage.esiemoBlastCalcsTier0(index,returnObject,isCycleCalcs,"Cluster Bomb");
    },
    esiemoBlastCalcs(index,returnObject,isCycleCalcs,nameOverride) {
        const characterRef = characters.Esiemo;
        const settingsRef = characterRef.characterSettings;
        const skillPlacement = 2;
        const abilityMap = characterRef.abilities[`ability${skillPlacement}`][nameOverride ? nameOverride : "base"];
        const abilityTypeArray = abilityMap.type;
        const abilityMods = abilityMap.powerMods;

        const totalBombsActive = Math.min(abilityMods.bombMultiCap,settingsRef.totalActiveBombs);
        const totalBombsMulti = settingsRef.blastStacksPowerBonus;

        if (!isCycleCalcs) {
            let rowInjection = [
                {"name": "Bombs Active","value": totalBombsActive,"unit": ""},
                {"name": "Blast Multiplier","value": totalBombsMulti,"unit": "x"},
            ]

            const breakdownArray = [
                {"header": "DETONATE","value": null,"modifier": null,"hasCritAVG": true,"unit": "",//"magazineTypeWeapon": [currentBombs,sumTotalAVG],
                    "rowInjection": [rowInjection,""],
                    "condition": false,"desc": ""},
            ];
            const bodyString = `abilityBreakdownBody${skillPlacement}`;
            
            const addRow = calcsUIHelper.addHealingBoxCluster;
            readSelection(`abilityBreakdownBody${skillPlacement}`).innerHTML = `
            <div class="basicsSummaryBox" id="lepicResultsBox">
                ${calcsUIHelper.addHealingBoxRows(bodyString,breakdownArray,abilityMap.displayStatsALT,index,returnObject,characterRef.name)}
            </div>
            <div class="abilityBreakdownHeader">DESCRIPTION</div>
            <div class="abilityBreakdownDescription">${tooltips.updateSubstatColor(abilityMap.desc)}</div>
            `;
        }
        else {
            return {}
        }
        // <div class="abilityBreakdownGeneralMessage">asdf.</div>
    },
    esiemoBlastCalcsCreativeStarter(index,returnObject,isCycleCalcs,nameOverride) {
        return customDamage.esiemoBlastCalcs(index,returnObject,isCycleCalcs,"Creative Explosion");
    },
    esiemoClusterCalcs(index,returnObject,isCycleCalcs) {
        customDamage.esiemoBlastCalcs(index,returnObject,isCycleCalcs,null,0.15,"Cluster Bomb");
        // const characterRef = characters.Esiemo;
        // const settingsRef = characterRef.characterSettings;

        // //clear the bonus
        // settingsRef.blastStacksPowerBonus = 1;

    },
    esiemoBlastCalcsCluster(index,returnObject,isCycleCalcs,nameOverride) {
        const characterRef = characters.Esiemo;
        const settingsRef = characterRef.characterSettings;
        const skillPlacement = 2;
        const abilityMap = characterRef.abilities[`ability${skillPlacement}`]["Cluster Bomb"];
        const abilityTypeArray = abilityMap.type;
        const abilityMods = abilityMap.powerMods;

        const totalBombsActive = Math.min(abilityMods.bombMultiCap,settingsRef.totalActiveBombs);
        const totalBombsMulti = settingsRef.blastStacksPowerBonus;

        const sumModifierBonus = calcs.getTotalSkillPowerModifier(index,abilityTypeArray);
        const baseSkillPower = calcs.getTotalSkillPower(index,abilityTypeArray);
        const abilityDR = calcs.getResistanceBasedDR(index,abilityTypeArray[0]);
        const crit = calcs.getCritComposites(returnObject);

        const basicInfo = {baseSkillPower,abilityDR,crit};

        const skillPowerModifier = abilityMods.base + sumModifierBonus;
        const skillPowerModifierBurn = abilityMods.baseBurn + sumModifierBonus;

        const damage = calcs.getCompositeDamageSpread(basicInfo,skillPowerModifier,null,null);
        const damageBurn = calcs.getCompositeDamageSpread(basicInfo,skillPowerModifierBurn,null,null);

        const avgDmgPerHit = damage.AVG;
        const avgDmgPerHitBurn = damageBurn.AVG;
        const totalClusterBombs = settingsRef.totalActiveBombs * 3;
        const sumTotalAVG = damage.AVG * totalClusterBombs;

        if (!isCycleCalcs) {
            let rowInjection = [
                {"name": "Bombs Active","value": totalBombsActive,"unit": ""},
                {"name": "Blast Multiplier","value": totalBombsMulti,"unit": "x"},
                {"name": "Total Cluster Bombs","value": totalClusterBombs,"unit": ""},
            ]

            const breakdownArray = [
                {"header": "DETONATE","value": null,"modifier": null,"hasCritAVG": true,"unit": "",//"magazineTypeWeapon": [currentBombs,sumTotalAVG],
                    "rowInjection": [rowInjection,""],
                    "condition": false,"desc": ""},
                {"header": "EXPLOSIVE","value": damage,"modifier": skillPowerModifier,"hasCritAVG": true,"unit": "","magazineTypeWeapon": [totalClusterBombs,sumTotalAVG],
                    "condition": false,"desc": ""},
                {"header": "BURN","value": damageBurn,"modifier": skillPowerModifierBurn,"hasCritAVG": true,"unit": "",//"magazineTypeWeapon": [currentBombs,sumTotalAVG],
                    "condition": false,"desc": ""},
            ];
            const bodyString = `abilityBreakdownBody${skillPlacement}`;
            
            const addRow = calcsUIHelper.addHealingBoxCluster;
            readSelection(`abilityBreakdownBody${skillPlacement}`).innerHTML = `
            <div class="basicsSummaryBox" id="lepicResultsBox">
                ${calcsUIHelper.addHealingBoxRows(bodyString,breakdownArray,abilityMap.displayStatsALT,index,returnObject,characterRef.name)}
            </div>
            <div class="abilityBreakdownHeader">DESCRIPTION</div>
            <div class="abilityBreakdownDescription">${tooltips.updateSubstatColor(abilityMap.desc)}</div>
            `;
        }
        else {
            return {avgDmgPerHit,avgDmgPerHitBurn,sumTotalAVG}
        }
        // <div class="abilityBreakdownGeneralMessage">asdf.</div>
    },
    //ability 3
    esiemoGuidedCalcs(index,returnObject,isCycleCalcs,nameOverride) {
        const characterRef = characters.Esiemo;
        const settingsRef = characterRef.characterSettings;
        const skillPlacement = 3;
        const abilityMap = characterRef.abilities[`ability${skillPlacement}`][nameOverride ? nameOverride : "base"];
        const abilityTypeArray = abilityMap.type;
        const abilityMods = abilityMap.powerMods;

        const sumModifierBonus = calcs.getTotalSkillPowerModifier(index,abilityTypeArray);
        const baseSkillPower = calcs.getTotalSkillPower(index,abilityTypeArray);
        const abilityDR = calcs.getResistanceBasedDR(index,abilityTypeArray[0]);
        const crit = calcs.getCritComposites(returnObject);

        const basicInfo = {baseSkillPower,abilityDR,crit};

        const blastMulti = settingsRef.blastStacksPowerBonus;
        const currentBombs = +settingsRef.guidedBombStacks;

        const skillPowerModifier = abilityMods.base + sumModifierBonus;

        const damage = calcs.getCompositeDamageSpread(basicInfo,skillPowerModifier,null,blastMulti);

        const avgDmgPerHit = damage.AVG;
        const sumTotalAVG = damage.AVG * currentBombs;

        if (!isCycleCalcs) {
            let rowInjection = [
                {"name": "Blast Multiplier","value": blastMulti,"unit": "x"},
            ]

            const breakdownArray = [
                {"header": "GUIDED LANDMINE","value": damage,"modifier": skillPowerModifier,"hasCritAVG": true,"unit": "","magazineTypeWeapon": [currentBombs,sumTotalAVG],
                    "sliderElemID": ["guidedBombStacks",0,7,1,"Guided Bombs Placed"],
                    "rowInjection": [rowInjection,""],
                    "condition": false,"desc": ""},
            ];
            const bodyString = `abilityBreakdownBody${skillPlacement}`;
            
            const addRow = calcsUIHelper.addHealingBoxCluster;
            readSelection(`abilityBreakdownBody${skillPlacement}`).innerHTML = `
            ${addRow("Power",baseSkillPower,"")}
            <div class="basicsSummaryBox" id="lepicResultsBox">
                ${calcsUIHelper.addHealingBoxRows(bodyString,breakdownArray,abilityMap.displayStatsALT,index,returnObject,characterRef.name)}
            </div>
            <div class="abilityBreakdownHeader">DESCRIPTION</div>
            <div class="abilityBreakdownDescription">${tooltips.updateSubstatColor(abilityMap.desc)}</div>
            `;
        }
        else {
            return {avgDmgPerHit,sumTotalAVG}
        }
        // <div class="abilityBreakdownGeneralMessage">asdf.</div>
    },
    esiemoPropagandaCalcs(index,returnObject,isCycleCalcs,nameOverride) {
        const characterRef = characters.Esiemo;
        const settingsRef = characterRef.characterSettings;
        const skillPlacement = 3;
        const abilityMap = characterRef.abilities[`ability${skillPlacement}`]["Explosive Propaganda"];
        const abilityTypeArray = abilityMap.type;
        const abilityMods = abilityMap.powerMods;

        const sumModifierBonus = calcs.getTotalSkillPowerModifier(index,abilityTypeArray);
        const baseSkillPower = calcs.getTotalSkillPower(index,abilityTypeArray);
        const abilityDR = calcs.getResistanceBasedDR(index,abilityTypeArray[0]);
        const crit = calcs.getCritComposites(returnObject);

        const basicInfo = {baseSkillPower,abilityDR,crit};

        const blastMulti = settingsRef.blastStacksPowerBonus;
        const currentBombs = +settingsRef.propagandaBombStacks;

        const skillPowerModifier = abilityMods.base + sumModifierBonus;

        const damage = calcs.getCompositeDamageSpread(basicInfo,skillPowerModifier,null,blastMulti);

        const avgDmgPerHit = damage.AVG;
        const sumTotalAVG = damage.AVG * currentBombs;

        if (!isCycleCalcs) {
            let rowInjection = [
                {"name": "Blast Multiplier","value": blastMulti,"unit": "x"},
            ]

            const breakdownArray = [
                {"header": "EXPLOSIVE PROPAGANDA","value": damage,"modifier": skillPowerModifier,"hasCritAVG": true,"unit": "","magazineTypeWeapon": [currentBombs,sumTotalAVG],
                    "sliderElemID": ["propagandaBombStacks",0,2,1,"Propaganda Placed"],
                    "rowInjection": [rowInjection,""],
                    "condition": false,"desc": ""},
            ];
            const bodyString = `abilityBreakdownBody${skillPlacement}`;
            
            const addRow = calcsUIHelper.addHealingBoxCluster;
            readSelection(`abilityBreakdownBody${skillPlacement}`).innerHTML = `
            ${addRow("Power",baseSkillPower,"")}
            <div class="basicsSummaryBox" id="lepicResultsBox">
                ${calcsUIHelper.addHealingBoxRows(bodyString,breakdownArray,abilityMap.displayStatsALT,index,returnObject,characterRef.name)}
            </div>
            <div class="abilityBreakdownHeader">DESCRIPTION</div>
            <div class="abilityBreakdownDescription">${tooltips.updateSubstatColor(abilityMap.desc)}</div>
            `;
        }
        else {
            return {avgDmgPerHit,sumTotalAVG}
        }
        // <div class="abilityBreakdownGeneralMessage">asdf.</div>
    },
    //ability 4
    esiemoArcheCalcsMadnessTier0(index,returnObject,isCycleCalcs) {
        const characterRef = characters.Esiemo;
        const settingsRef = characterRef.characterSettings;

        if (settingsRef.isMadnessActive) {
            index.PowerOptimization += 0.25;
            index["FirearmATK%"] += 0.25;
            index.SprintSpeedBonus += 0.30;
            index["DEF%"] += -0.30;
        }

    },
    esiemoArcheCalcs(index,returnObject,isCycleCalcs,nameOverride) {
        const characterRef = characters.Esiemo;
        const settingsRef = characterRef.characterSettings;
        const skillPlacement = 4;
        const abilityMap = characterRef.abilities[`ability${skillPlacement}`][nameOverride ? nameOverride : "base"];
        const abilityTypeArray = abilityMap.type;
        const abilityMods = abilityMap.powerMods;

        const sumModifierBonus = calcs.getTotalSkillPowerModifier(index,abilityTypeArray);
        const baseSkillPower = calcs.getTotalSkillPower(index,abilityTypeArray);
        const abilityDR = calcs.getResistanceBasedDR(index,abilityTypeArray[0]);
        const crit = calcs.getCritComposites(returnObject);

        const basicInfo = {baseSkillPower,abilityDR,crit};

        const skillPowerModifier = abilityMods.base + sumModifierBonus;
        const skillPowerModifierRun = abilityMods.base + sumModifierBonus;

        const damage = calcs.getCompositeDamageSpread(basicInfo,skillPowerModifier,null,null);
        const damageRun = calcs.getCompositeDamageSpread(basicInfo,skillPowerModifierRun,null,null);

        const avgDmgPerHitRun = damageRun.AVG;
        const avgDmgPerHit = damage.AVG;

        if (!isCycleCalcs) {

            const breakdownArray = [
                {"header": "EXPLOSION","value": damage,"modifier": skillPowerModifier,"hasCritAVG": true,"unit": "",//"magazineTypeWeapon": [currentBombs,sumTotalAVG],
                    "condition": false,"desc": ""},
                {"header": "RUNNING","value": damageRun,"modifier": skillPowerModifierRun,"hasCritAVG": true,"unit": "",//"magazineTypeWeapon": [currentBombs,sumTotalAVG],
                    "condition": false,"desc": ""},
                {"header": "MADNESS","value": null,"modifier": null,"hasCritAVG": true,"unit": "",//"magazineTypeWeapon": [currentBombs,sumTotalAVG],
                    "toggleElemID": ["isMadnessActive","Use Madness Buff?"],
                    "condition": false,"desc": ""},
            ];
            const bodyString = `abilityBreakdownBody${skillPlacement}`;
            
            const addRow = calcsUIHelper.addHealingBoxCluster;
            readSelection(`abilityBreakdownBody${skillPlacement}`).innerHTML = `
            ${addRow("Power",baseSkillPower,"")}
            <div class="basicsSummaryBox" id="lepicResultsBox">
                ${calcsUIHelper.addHealingBoxRows(bodyString,breakdownArray,abilityMap.displayStatsALT,index,returnObject,characterRef.name)}
            </div>
            <div class="abilityBreakdownHeader">DESCRIPTION</div>
            <div class="abilityBreakdownDescription">${tooltips.updateSubstatColor(abilityMap.desc)}</div>
            `;
        }
        else {
            return {avgDmgPerHitRun,avgDmgPerHit}
        }
        // <div class="abilityBreakdownGeneralMessage">asdf.</div>
    },
    esiemoCreativeCalcsNarcissimTier0(index,returnObject,isCycleCalcs) {
        const characterRef = characters.Esiemo;
        const settingsRef = characterRef.characterSettings;

        //we use the same variable, isMadnessActive, just because the toggle can apply to both abilities
        //but the abilities give diff bonuses
        if (settingsRef.isMadnessActive) {
            index.SkillCooldown += -0.40;
            index.SprintSpeedBonus += 0.30;
            index["DEF%"] += -0.30;
        }

    },
    esiemoCreativeCalcs(index,returnObject,isCycleCalcs,nameOverride) {
        const characterRef = characters.Esiemo;
        const settingsRef = characterRef.characterSettings;
        const skillPlacement = 4;
        const abilityMap = characterRef.abilities[`ability${skillPlacement}`]["Creative Explosion"];
        const abilityTypeArray = abilityMap.type;
        const abilityMods = abilityMap.powerMods;

        const sumModifierBonus = calcs.getTotalSkillPowerModifier(index,abilityTypeArray);
        const baseSkillPower = calcs.getTotalSkillPower(index,abilityTypeArray);
        const abilityDR = calcs.getResistanceBasedDR(index,abilityTypeArray[0]);
        const crit = calcs.getCritComposites(returnObject);

        const basicInfo = {baseSkillPower,abilityDR,crit};

        const skillPowerModifier = abilityMods.base + sumModifierBonus;
        const skillPowerModifierRun = abilityMods.base + sumModifierBonus;

        //I believe the unused bomb cap is 8, since that's how many total stacks you can have
        const unusedBombs = 8 - Math.min(8,settingsRef.totalActiveBombs);
        const unusedBombsMulti = 1 + (unusedBombs * abilityMods.increasePerUnsued);

        const damage = calcs.getCompositeDamageSpread(basicInfo,skillPowerModifier,null,unusedBombsMulti);
        const damageRun = calcs.getCompositeDamageSpread(basicInfo,skillPowerModifierRun,null,null);

        const avgDmgPerHitRun = damageRun.AVG;
        const avgDmgPerHit = damage.AVG;

        if (!isCycleCalcs) {
            let rowInjection = [
                {"name": "Unused Bombs","value": unusedBombs,"unit": ""},
                {"name": "Increase per Unused","value": abilityMods.increasePerUnsued,"unit": "%"},
                {"name": "Total Multi","value": unusedBombsMulti,"unit": "x"},
            ]
            
            const breakdownArray = [
                {"header": "EXPLOSION","value": damage,"modifier": skillPowerModifier,"hasCritAVG": true,"unit": "",//"magazineTypeWeapon": [currentBombs,sumTotalAVG],
                    "rowInjection": [rowInjection,""],
                    "condition": false,"desc": ""},
                {"header": "RUNNING","value": damageRun,"modifier": skillPowerModifierRun,"hasCritAVG": true,"unit": "",//"magazineTypeWeapon": [currentBombs,sumTotalAVG],
                    "condition": false,"desc": ""},
                {"header": "NARCISSISM","value": null,"modifier": null,"hasCritAVG": true,"unit": "",//"magazineTypeWeapon": [currentBombs,sumTotalAVG],
                    "toggleElemID": ["isMadnessActive","Use Narcissim Buff?"],
                    "condition": false,"desc": ""},
            ];
            const bodyString = `abilityBreakdownBody${skillPlacement}`;
            
            const addRow = calcsUIHelper.addHealingBoxCluster;
            readSelection(`abilityBreakdownBody${skillPlacement}`).innerHTML = `
            ${addRow("Power",baseSkillPower,"")}
            <div class="basicsSummaryBox" id="lepicResultsBox">
                ${calcsUIHelper.addHealingBoxRows(bodyString,breakdownArray,abilityMap.displayStatsALT,index,returnObject,characterRef.name)}
            </div>
            <div class="abilityBreakdownHeader">DESCRIPTION</div>
            <div class="abilityBreakdownDescription">${tooltips.updateSubstatColor(abilityMap.desc)}</div>
            `;
        }
        else {
            return {avgDmgPerHitRun,avgDmgPerHit}
        }
        // <div class="abilityBreakdownGeneralMessage">asdf.</div>
    },
    //passive
    esiemoHabitCalcs(index,returnObject,isCycleCalcs,nameOverride) {
        const characterRef = characters.Esiemo;
        const settingsRef = characterRef.characterSettings;
        const skillPlacement = 5;
        const abilityMap = characterRef.abilities[`ability${skillPlacement}`][nameOverride ? nameOverride : "base"];
        const abilityTypeArray = abilityMap.type;
        const abilityMods = abilityMap.powerMods;

        const sumModifierBonus = calcs.getTotalSkillPowerModifier(index,abilityTypeArray);
        const baseSkillPower = calcs.getTotalSkillPower(index,abilityTypeArray);
        const abilityDR = calcs.getResistanceBasedDR(index,abilityTypeArray[0]);
        const crit = calcs.getCritComposites(returnObject);

        const basicInfo = {baseSkillPower,abilityDR,crit};

        // const blastMulti = settingsRef.blastStacksPowerBonus;
        // const currentBombs = +settingsRef.timeBombStacks;

        const skillPowerModifier = abilityMods.base + sumModifierBonus;

        const damage = calcs.getCompositeDamageSpread(basicInfo,skillPowerModifier,null,null);

        const avgDmgPerHit = damage.AVG;

        if (!isCycleCalcs) {
            // let rowInjection = [
            //     {"name": "Blast Multiplier","value": blastMulti,"unit": "x"},
            // ]

            const breakdownArray = [
                {"header": "SKILL EFFECT","value": damage,"modifier": skillPowerModifier,"hasCritAVG": true,"unit": "",//"magazineTypeWeapon": [currentBombs,sumTotalAVG],
                    // "rowInjection": [rowInjection,""],
                    "condition": false,"desc": ""},
            ];
            const bodyString = `abilityBreakdownBody${skillPlacement}`;
            
            const addRow = calcsUIHelper.addHealingBoxCluster;
            readSelection(`abilityBreakdownBody${skillPlacement}`).innerHTML = `
            ${addRow("Power",baseSkillPower,"")}
            <div class="basicsSummaryBox" id="lepicResultsBox">
                ${calcsUIHelper.addHealingBoxRows(bodyString,breakdownArray,abilityMap.displayStatsALT,index,returnObject,characterRef.name)}
            </div>
            <div class="abilityBreakdownHeader">DESCRIPTION</div>
            <div class="abilityBreakdownDescription">${tooltips.updateSubstatColor(abilityMap.desc)}</div>
            `;
        }
        else {
            return {avgDmgPerHit}
        }
        // <div class="abilityBreakdownGeneralMessage">asdf.</div>
    },
    esiemoEvadeCalcs(index,returnObject,isCycleCalcs,nameOverride) {
        const characterRef = characters.Esiemo;
        const settingsRef = characterRef.characterSettings;
        const skillPlacement = 5;
        const abilityMap = characterRef.abilities[`ability${skillPlacement}`]["Explosive Evade"];
        const abilityTypeArray = abilityMap.type;
        const abilityMods = abilityMap.powerMods;

        const sumModifierBonus = calcs.getTotalSkillPowerModifier(index,abilityTypeArray);
        const baseSkillPower = calcs.getTotalSkillPower(index,abilityTypeArray);
        const abilityDR = calcs.getResistanceBasedDR(index,abilityTypeArray[0]);
        const crit = calcs.getCritComposites(returnObject);

        const basicInfo = {baseSkillPower,abilityDR,crit};

        const blastMulti = settingsRef.blastStacksPowerBonus;
        const currentBombs = +settingsRef.evadeBombStacks;

        const skillPowerModifier = abilityMods.base + sumModifierBonus;

        const damage = calcs.getCompositeDamageSpread(basicInfo,skillPowerModifier,null,blastMulti);

        const avgDmgPerHit = damage.AVG;
        const sumTotalAVG = damage.AVG * currentBombs;

        if (!isCycleCalcs) {
            let rowInjection = [
                {"name": "Blast Multiplier","value": blastMulti,"unit": "x"},
            ]

            const breakdownArray = [
                {"header": "GUIDED LANDMINE","value": damage,"modifier": skillPowerModifier,"hasCritAVG": true,"unit": "","magazineTypeWeapon": [currentBombs,sumTotalAVG],
                    "sliderElemID": ["evadeBombStacks",0,3,1,"Evade Bombs Placed"],
                    "rowInjection": [rowInjection,""],
                    "condition": false,"desc": ""},
            ];
            const bodyString = `abilityBreakdownBody${skillPlacement}`;
            
            const addRow = calcsUIHelper.addHealingBoxCluster;
            readSelection(`abilityBreakdownBody${skillPlacement}`).innerHTML = `
            ${addRow("Power",baseSkillPower,"")}
            <div class="basicsSummaryBox" id="lepicResultsBox">
                ${calcsUIHelper.addHealingBoxRows(bodyString,breakdownArray,abilityMap.displayStatsALT,index,returnObject,characterRef.name)}
            </div>
            <div class="abilityBreakdownHeader">DESCRIPTION</div>
            <div class="abilityBreakdownDescription">${tooltips.updateSubstatColor(abilityMap.desc)}</div>
            `;
        }
        else {
            return {avgDmgPerHit,sumTotalAVG}
        }
        // <div class="abilityBreakdownGeneralMessage">asdf.</div>
    },

    //Hailey
    haileyCryoRoundCalcs(index,returnObject,isCycleCalcs,nameOverride) {
        const characterRef = characters.Hailey;
        const settingsRef = characterRef.characterSettings;
        const skillPlacement = 1;
        const abilityMap = characterRef.abilities[`ability${skillPlacement}`][nameOverride ? nameOverride : "base"];
        const abilityTypeArray = abilityMap.type;
        const abilityMods = abilityMap.powerMods;

        const sumModifierBonus = calcs.getTotalSkillPowerModifier(index,abilityTypeArray);
        const baseSkillPower = calcs.getTotalSkillPower(index,abilityTypeArray);
        const abilityDR = calcs.getResistanceBasedDR(index,abilityTypeArray[0]);
        const crit = calcs.getCritComposites(returnObject);

        const basicInfo = {baseSkillPower,abilityDR,crit};

        const skillPowerModifier = abilityMods.base + sumModifierBonus;
    
        const damage = calcs.getCompositeDamageSpread(basicInfo,skillPowerModifier);

        const magazine = 9;
        const avgPerHit = damage.AVG;
        const totalAVG = magazine * damage.AVG;

        if (!isCycleCalcs) {
            const breakdownArray = [
                {"header": "CRYO ROUNDS","value": damage,"modifier": skillPowerModifier,"hasCritAVG": true,"unit": "","magazineTypeWeapon": [magazine,totalAVG],
                    "condition": false,"desc": ""},
                {"header": "CRYO","value": null,"modifier": null,"hasCritAVG": null,"unit": "",
                    "condition": false,"desc": "Cryo ONLY applies to Firearm damage. It takes the end total damage a gun deals, then creates a new number for exactly half of it on impact."},
                {"header": "FLASH FREEZE","value": null,"modifier": null,"hasCritAVG": null,"unit": "",
                    "condition": false,"desc": ""},
            ];
            const bodyString = `abilityBreakdownBody${skillPlacement}`;
            
            const addRow = calcsUIHelper.addHealingBoxCluster;
            readSelection(`abilityBreakdownBody${skillPlacement}`).innerHTML = `
            ${addRow("Power",baseSkillPower,"")}
            <div class="basicsSummaryBox" id="lepicResultsBox">
                ${calcsUIHelper.addHealingBoxRows(bodyString,breakdownArray,abilityMap.displayStatsALT,index,returnObject,characterRef.name)}
            </div>
            <div class="abilityBreakdownHeader">DESCRIPTION</div>
            <div class="abilityBreakdownDescription">${tooltips.updateSubstatColor(abilityMap.desc)}</div>
            `;
        }
        else {
            return {avgPerHit,totalAVG}
        }
    },
    haileyCryoRoundCalcsCluster(index,returnObject,isCycleCalcs,nameOverride) {
        const characterRef = characters.Hailey;
        const settingsRef = characterRef.characterSettings;
        const skillPlacement = 1;
        const abilityMap = characterRef.abilities[`ability${skillPlacement}`]["Cryogenic Cluster Shot"];
        const abilityTypeArray = abilityMap.type;
        const abilityMods = abilityMap.powerMods;

        const sumModifierBonus = calcs.getTotalSkillPowerModifier(index,abilityTypeArray);
        const baseSkillPower = calcs.getTotalSkillPower(index,abilityTypeArray);
        const abilityDR = calcs.getResistanceBasedDR(index,abilityTypeArray[0]);
        const crit = calcs.getCritComposites(returnObject);

        const basicInfo = {baseSkillPower,abilityDR,crit};

        const skillPowerModifier = abilityMods.base + sumModifierBonus;
        const skillPowerModifierCryogenic = abilityMods.baseCryogenic + sumModifierBonus;
    
        const damage = calcs.getCompositeDamageSpread(basicInfo,skillPowerModifier);
        const damageCryogenic = calcs.getCompositeDamageSpread(basicInfo,skillPowerModifierCryogenic);

        const magazine = 9;
        const avgPerHit = damage.AVG;
        const avgPerHitCryogenic = damageCryogenic.AVG

        const totalAVGHits = magazine * (damage.AVG);
        const totalAVGHitsCryo = magazine * (damageCryogenic.AVG);
        const sumTotalAVG = magazine * (damage.AVG + damageCryogenic.AVG);

        if (!isCycleCalcs) {
            const breakdownArray = [
                {"header": "CRYOGENIC CLUSTER SHOT","value": damage,"modifier": skillPowerModifier,"hasCritAVG": true,"unit": "","magazineTypeWeapon": [magazine,totalAVGHits],
                    "condition": false,"desc": ""},
                {"header": "CRYOGENIC","value": damageCryogenic,"modifier": skillPowerModifierCryogenic,"hasCritAVG": null,"unit": "","magazineTypeWeapon": [magazine,totalAVGHitsCryo],
                    "condition": false,"desc": "Cryo ONLY applies to Firearm damage. It takes the end total damage a gun deals, then creates a new number for exactly half of it on impact."},
                {"header": "FLASH FREEZE","value": null,"modifier": null,"hasCritAVG": null,"unit": "",
                    "condition": false,"desc": ""},
            ];
            const bodyString = `abilityBreakdownBody${skillPlacement}`;
            
            const addRow = calcsUIHelper.addHealingBoxCluster;
            readSelection(`abilityBreakdownBody${skillPlacement}`).innerHTML = `
            ${addRow("Power",baseSkillPower,"")}
            <div class="basicsSummaryBox" id="lepicResultsBox">
                ${calcsUIHelper.addHealingBoxRows(bodyString,breakdownArray,abilityMap.displayStatsALT,index,returnObject,characterRef.name)}
            </div>
            <div class="abilityBreakdownHeader">DESCRIPTION</div>
            <div class="abilityBreakdownDescription">${tooltips.updateSubstatColor(abilityMap.desc)}</div>
            `;
        }
        else {
            return {avgPerHit,avgPerHitCryogenic,totalAVGHits,totalAVGHitsCryo,sumTotalAVG}
        }
    },
    //ability 2
    haileyStormCalcs(index,returnObject,isCycleCalcs,nameOverride) {
        const characterRef = characters.Hailey;
        const settingsRef = characterRef.characterSettings;
        const skillPlacement = 2;
        const abilityMap = characterRef.abilities[`ability${skillPlacement}`][nameOverride ? nameOverride : "base"];
        const abilityTypeArray = abilityMap.type;
        const abilityMods = abilityMap.powerMods;

        const sumModifierBonus = calcs.getTotalSkillPowerModifier(index,abilityTypeArray);
        const baseSkillPower = calcs.getTotalSkillPower(index,abilityTypeArray);
        const abilityDR = calcs.getResistanceBasedDR(index,abilityTypeArray[0]);
        const crit = calcs.getCritComposites(returnObject);

        const basicInfo = {baseSkillPower,abilityDR,crit};

        const skillPowerModifier = abilityMods.base + sumModifierBonus;
        const skillPowerModifierAOE = abilityMods.AOE + sumModifierBonus;
    
        const damage = calcs.getCompositeDamageSpread(basicInfo,skillPowerModifier);
        const damageAOE = calcs.getCompositeDamageSpread(basicInfo,skillPowerModifierAOE);

        const avgPerAOE = damageAOE.AVG
        const avgPerHit = damage.AVG
        


        if (!isCycleCalcs) {
            const breakdownArray = [
                {"header": "IMPACT","value": damage,"modifier": skillPowerModifier,"hasCritAVG": true,"unit": "",
                    "condition": false,"desc": ""},
                {"header": "IMPACT AOE","value": damageAOE,"modifier": skillPowerModifierAOE,"hasCritAVG": true,"unit": "",
                    "condition": false,"desc": "The AOE on impact does not apply to the target hit. Only to those around them."},
                {"header": "CRYO","value": null,"modifier": null,"hasCritAVG": null,"unit": "",
                    "condition": false,"desc": "Cryo ONLY applies to Firearm damage. It takes the end total damage a gun deals, then creates a new number for exactly half of it on impact."},
                {"header": "FLASH FREEZE","value": null,"modifier": null,"hasCritAVG": null,"unit": "",
                    "condition": false,"desc": ""},
            ];
            const bodyString = `abilityBreakdownBody${skillPlacement}`;
            
            const addRow = calcsUIHelper.addHealingBoxCluster;
            readSelection(`abilityBreakdownBody${skillPlacement}`).innerHTML = `
            ${addRow("Power",baseSkillPower,"")}
            <div class="basicsSummaryBox" id="lepicResultsBox">
                ${calcsUIHelper.addHealingBoxRows(bodyString,breakdownArray,abilityMap.displayStatsALT,index,returnObject,characterRef.name)}
            </div>
            <div class="abilityBreakdownHeader">DESCRIPTION</div>
            <div class="abilityBreakdownDescription">${tooltips.updateSubstatColor(abilityMap.desc)}</div>
            `;
        }
        else {
            return {avgPerAOE,avgPerHit}
        }
    },
    //ability 3
    haileyFuryCalcsTier0(index,returnObject,isCycleCalcs,nameOverride) {
        const characterRef = characters.Hailey;
        const settingsRef = characterRef.characterSettings;
        const skillPlacement = 3;
        const abilityMap = characterRef.abilities[`ability${skillPlacement}`][nameOverride ? nameOverride : "base"];

        //adds up to 40% BASE crit rate, that's nuts
        const baseSkillCritRateBonus = +settingsRef.haileyColdFuryBar4 * 0.025;
        index.SkillCritRateBaseBonus += baseSkillCritRateBonus;
        const baseFirearmCritRateBonus = +settingsRef.haileyColdFuryBar4 * 0.025;
        index.FirearmCritRateBase += baseFirearmCritRateBonus;

        //unlike the crit rate bonuses, the crit damage is not a base bonus, it acts like any other crit module. also only applies at max stacks.
        let bonusCritDamage = 0
        if (+settingsRef.haileyColdFuryBar4 === 16) {bonusCritDamage = 0.20;}
        index.SkillCritDamage += bonusCritDamage;
        index.FirearmCritDamage += bonusCritDamage;

        if (!isCycleCalcs) {
            const rowInjection = [
                {"name": "+BASE Crit Rate","value": baseSkillCritRateBonus,"unit": "%"},
                {"name": "+Crit DMG %","value": bonusCritDamage,"unit": "%"},
            ]
            const breakdownArray = [
                {"header": "COLD FURY","value": null,"modifier": null,"hasCritAVG": null,"unit": "","sliderElemID": ["haileyColdFuryBar4",0,16,1,"Cold Fury Stacks"],"rowInjection": [rowInjection,""],
                    "condition": false,"desc": ""},
                {"header": "MAX STACKS BONUS","value": null,"modifier": null,"hasCritAVG": null,"unit": "",
                    "condition": false,"desc": ""},
            ];
            const bodyString = `abilityBreakdownBody${skillPlacement}`;
            
            const addRow = calcsUIHelper.addHealingBoxCluster;
            readSelection(`abilityBreakdownBody${skillPlacement}`).innerHTML = `
            <div class="basicsSummaryBox" id="lepicResultsBox">
                ${calcsUIHelper.addHealingBoxRows(bodyString,breakdownArray,abilityMap.displayStatsALT,index,returnObject,characterRef.name)}
            </div>
            <div class="abilityBreakdownHeader">DESCRIPTION</div>
            <span class="abilityBreakdownDescription">${tooltips.updateSubstatColor(abilityMap.desc)}</span>
            `;
        }
        else {
            return {}
        }
    },
    //ability 4
    haileyZenithCalcs(index,returnObject,isCycleCalcs,nameOverride) {
        const characterRef = characters.Hailey;
        const settingsRef = characterRef.characterSettings;
        const skillPlacement = 4;
        const abilityMap = characterRef.abilities[`ability${skillPlacement}`][nameOverride ? nameOverride : "base"];
        const abilityTypeArray = abilityMap.type;
        const abilityMods = abilityMap.powerMods;

        const sumModifierBonus = calcs.getTotalSkillPowerModifier(index,abilityTypeArray);
        const baseSkillPower = calcs.getTotalSkillPower(index,abilityTypeArray);
        const abilityDR = calcs.getResistanceBasedDR(index,abilityTypeArray[0]);
        const crit = calcs.getCritComposites(returnObject);

        const basicInfo = {baseSkillPower,abilityDR,crit};
        const skillPowerModifier = abilityMods.base + sumModifierBonus;
        const damageSkill = calcs.getCompositeDamageSpread(basicInfo,skillPowerModifier);

        const magazineSize = abilityMods.magazine * (1+index.MagazineSize) + index.haileyExtraShots;//it rounds down and floors the value, but I still want to show the decimal so people know.
        const actualMagSize = Math.floor(magazineSize);

        const totalAVGSkill = damageSkill.AVG * actualMagSize;

        //WEAPON MATH
        const zenithMultiplier = abilityMods.firearmATKMulti;
        const preElementDamage = returnObject.firearmAttributeConversionBase;//firearm attribute dmg can't benefit from faction attack or type bonuses or the zenithMultiplier
        const damage = (preElementDamage * zenithMultiplier + returnObject.firearmColossusATK) * (1 + returnObject.physicalTypeMulti);
        const physDR = calcs.getResistanceBasedDR(index,"DEF");
        const baseDamage = damage * physDR * returnObject.totalWPBonus;

        const critFirearm = calcs.getFirearmCritComposites(returnObject);
        const weaponDamage = calcs.getCompositeFirearmDamageSpread(baseDamage,critFirearm);

        const {activeElements,activeElementsDamage} = calcs.getActiveFirearmAttributesArrays(index,preElementDamage,critFirearm);
        const weaponDamageElemental = calcs.getCompositeFirearmDamageSpread(activeElementsDamage[0],critFirearm);

        const cryoDamageHit = (baseDamage + activeElementsDamage[0])/2;
        const weaponDamageCryo = calcs.getCompositeFirearmDamageSpread(cryoDamageHit,critFirearm);

        const totalAVGGun = ((weaponDamage.AVG + weaponDamageElemental.AVG) * actualMagSize) + (weaponDamageCryo.AVG * Math.min(9,actualMagSize));
        const totalAVGSum = totalAVGSkill + totalAVGGun;

        const avgSkillHit = damageSkill.AVG;
        const avgGunPerHit = weaponDamage.AVG + weaponDamageElemental.AVG + weaponDamageCryo.AVG;

        
        if (!isCycleCalcs) {
            let rowInjectionFirearmElemental = [
                {"name": "Element","value": activeElements[0],"unit": ""},
                {"name": "Hit","value": weaponDamageElemental.perHit,"unit": ""},
                {"name": "Crit","value": weaponDamageElemental.perCrit,"unit": ""},
            ]
            if (activeElements[0] === "None") {rowInjectionFirearmElemental = [];}
            const rowInjectionCryo = [
                {"name": "Max Procs","value": 9,"unit": "x"},
                {"name": "Hit","value": weaponDamageCryo.perHit,"unit": ""},
                {"name": "Crit","value": weaponDamageCryo.perCrit,"unit": ""},
                {"name": "AVG","value": weaponDamageCryo.AVG,"unit": ""},
            ]
            const rowInjectionSums = [
                {"name": "SUM Firearm AVG","value": totalAVGGun,"unit": ""},
            ]
            const rowInjectionTotalSum = [
                {"name": "SUM Zenith AVG per Cast","value": totalAVGSum,"unit": ""},
            ]

            const breakdownArray = [
                {"header": "SUPERCOOLED","value": null,"modifier": null,"hasCritAVG": true,"unit": "",
                    "sliderElemID": ["haileySupercooledStacks",0,12,1,"Supercooled Stacks"],
                    "condition": !nameOverride,"desc": ""},
                {"header": "UNIQUE WEAPON - SKILL SPLIT","value": damageSkill,"modifier": skillPowerModifier,"hasCritAVG": true,"unit": "","magazineTypeWeapon": [actualMagSize,totalAVGSkill],
                    "condition": false,"desc": ""},
                {"header": "UNIQUE WEAPON - FIREARM SPLIT","value": weaponDamage,"FirearmATK": damage,"hasCritAVG": true,"unit": "",
                    "rowInjection": [rowInjectionFirearmElemental,"Firearm Element"],"rowInjection2": [rowInjectionCryo,"Firearm Cryo DMG"],"rowInjection3": [rowInjectionSums,""],
                    "condition": false,"desc": "Must adjust the enemy and part targeted under the <span>ENEMY</span> tab for accurate values.<br>See Weapon DMG video for more info."},
                {"header": "UNIQUE WEAPON - SUM","value": null,"modifier": null,"hasCritAVG": null,"unit": "",
                    "rowInjection": [rowInjectionTotalSum,""],
                    "condition": false,"desc": ""},
            ];
            const bodyString = `abilityBreakdownBody${skillPlacement}`;
            
            const addRow = calcsUIHelper.addHealingBoxCluster;
            readSelection(`abilityBreakdownBody${skillPlacement}`).innerHTML = `
            ${addRow("Power",baseSkillPower,"")}
            <div class="basicsSummaryBox" id="lepicResultsBox">
                ${calcsUIHelper.addHealingBoxRows(bodyString,breakdownArray,abilityMap.displayStatsALT,index,returnObject,characterRef.name)}
            </div>
            <div class="abilityBreakdownHeader">DESCRIPTION</div>
            <div class="abilityBreakdownDescription">${tooltips.updateSubstatColor(abilityMap.desc)}</div>
            `;
        }
        else {
            return {avgSkillHit,avgGunPerHit,totalAVGSkill,totalAVGGun,totalAVGSum}
        }
    },
    haileyZenithCalcsSuperStarterTier0(index,returnObject,isCycleCalcs,nameOverride) {
        const characterRef = characters.Hailey;
        const settingsRef = characterRef.characterSettings;
        const skillPlacement = 4;
        const abilityMap = characterRef.abilities[`ability${skillPlacement}`]["Supercooled Kuiper Round"];
        const abilityMods = abilityMap.powerMods;

        const wpBonus = abilityMods.weakpointStackBonus;
        const currentStacks = +settingsRef.haileySupercooledStacks;

        const totalBonus = currentStacks * wpBonus;

        index["WeakPointDamage%"] += totalBonus;
    },
    haileyZenithCalcsSuperStarter(index,returnObject,isCycleCalcs,nameOverride) {
        customDamage.haileyZenithCalcs(index,returnObject,isCycleCalcs,"Supercooled Kuiper Round");
    },
    //ability 5
    haileyRetreatCalcsTier0(index,returnObject,isCycleCalcs,nameOverride) {
        const characterRef = characters.Hailey;
        const settingsRef = characterRef.characterSettings;
        const skillPlacement = 5;
        const abilityMap = characterRef.abilities[`ability${skillPlacement}`][nameOverride ? nameOverride : "base"];

        let weakspotBonus = 0;
        if (+settingsRef.haileyDistanceBar4 > 12.5) {weakspotBonus = ((settingsRef.haileyDistanceBar4 - 12.5)/12.5) * 0.50}
        else if (+settingsRef.haileyDistanceBar4 < 12.5) {weakspotBonus = -((12.5 - settingsRef.haileyDistanceBar4)/12.5) * 0.50}
        //and then if the distance is equal to 12.5, the bonus is 0

        index["WeakPointDamage%"] += weakspotBonus;

        if (!isCycleCalcs) {
            const rowInjection = [
                {"name": "0-Point","value": 12.5,"unit": "m"},
                {"name": "+% Weak Point DMG","value": weakspotBonus,"unit": "%"},
            ]
            const breakdownArray = [
                {"header": "SAFE STRATEGIC RETREAT","value": null,"modifier": null,"hasCritAVG": null,"unit": "","sliderElemID": ["haileyDistanceBar4",0,25,0.5,"Retreat Distance"],"rowInjection": [rowInjection,""],
                    "condition": false,"desc": ""},
            ];
            const bodyString = `abilityBreakdownBody${skillPlacement}`;
            
            const addRow = calcsUIHelper.addHealingBoxCluster;
            readSelection(`abilityBreakdownBody${skillPlacement}`).innerHTML = `
            <div class="basicsSummaryBox" id="lepicResultsBox">
                ${calcsUIHelper.addHealingBoxRows(bodyString,breakdownArray,abilityMap.displayStatsALT,index,returnObject,characterRef.name)}
            </div>
            <div class="abilityBreakdownHeader">DESCRIPTION</div>
            <div class="abilityBreakdownDescription">${tooltips.updateSubstatColor(abilityMap.desc)}</div>
            `;
        }
        else {
            return {}
        }
    },

    //Lepic
    //ability 1
    lepicGrenadeCalcs(index,returnObject,isCycleCalcs,nameOverride) {
        const characterRef = characters.Lepic;
        const settingsRef = characterRef.characterSettings;
        const skillPlacement = 1;
        const abilityMap = characterRef.abilities[`ability${skillPlacement}`][nameOverride ? nameOverride : "base"];
        const abilityTypeArray = abilityMap.type;
        const abilityMods = abilityMap.powerMods;

        const sumModifierBonus = calcs.getTotalSkillPowerModifier(index,abilityTypeArray);
        const baseSkillPower = calcs.getTotalSkillPower(index,abilityTypeArray);
        const abilityDR = calcs.getResistanceBasedDR(index,abilityTypeArray[0]);
        const crit = calcs.getCritComposites(returnObject);

        const basicInfo = {baseSkillPower,abilityDR,crit};

        const skillPowerModifier = abilityMods.base + sumModifierBonus;
        const baseCooldown = abilityMods.cooldown;

        const damage = calcs.getCompositeDamageSpread(basicInfo,skillPowerModifier);

        const avgDmgPerGrenade1 = damage.AVG;
        const {cooldown,interval,DPS} = calcs.getDPSPerSkillInterval(index,damage.AVG,baseCooldown,null)
        const avgDPSGrenade1 = DPS;
        

        
        if (!isCycleCalcs) {
            // console.log(avgDmgPerGrenade1)
            let rowInjection = [
                {"name": "Cooldown","value": cooldown,"unit": ""},
                {"name": "Interval Length (s)","value": interval,"unit": ""},
                {"name": "DPS","value": DPS,"unit": ""},
            ]

            const breakdownArray = [
                {"header": "GRENADE","value": damage,"modifier": skillPowerModifier,"hasCritAVG": true,"unit": "",//"magazineTypeWeapon": [turretTotalHits,totalTurretAVG1],
                    "rowInjection": [rowInjection,""],
                    "condition": false,"desc": ""},
            ];
            const bodyString = `abilityBreakdownBody${skillPlacement}`;
            
            const addRow = calcsUIHelper.addHealingBoxCluster;
            readSelection(`abilityBreakdownBody${skillPlacement}`).innerHTML = `
            ${addRow("Power",baseSkillPower,"")}
            <div class="basicsSummaryBox" id="lepicResultsBox">
                ${calcsUIHelper.addHealingBoxRows(bodyString,breakdownArray,abilityMap.displayStatsALT,index,returnObject,characterRef.name)}
            </div>
            <div class="abilityBreakdownHeader">DESCRIPTION</div>
            <div class="abilityBreakdownDescription">${tooltips.updateSubstatColor(abilityMap.desc)}</div>
            `;
        }
        else {
            return {avgDmgPerGrenade1,avgDPSGrenade1}
        }
        // <div class="abilityBreakdownGeneralMessage">asdf.</div>
    },
    lepicGrenadeCalcsStacksStarter(index,returnObject,isCycleCalcs) {
        return customDamage.lepicGrenadeCalcs(index,returnObject,isCycleCalcs,"Explosive Stacks")
    },
    //ability 2
    lepicOverclockCalcsTier0(index,returnObject,isCycleCalcs,nameOverride) {
        const characterRef = characters.Lepic;
        const settingsRef = characterRef.characterSettings;
        const skillPlacement = 2;
        const abilityMap = characterRef.abilities[`ability${skillPlacement}`][nameOverride ? nameOverride : "base"];
        const abilityTypeArray = abilityMap.type;
        const abilityMods = abilityMap.powerMods;

        const powerModBonus = abilityMap.powerMods["PowerModifierBase"];

        index.PowerModifierBase += settingsRef.lepicOverclockBonus ? powerModBonus : 0;
    },
    lepicOverclockCalcsTier0NerveStarter(index,returnObject,isCycleCalcs,nameOverride) {
        customDamage.lepicOverclockCalcsTier0(index,returnObject,isCycleCalcs,"Nerve Infiltration");
        //lepicOverclockBonus is used for all applicable bonuses related to 2nd ability that can get away with a toggle
    },
    lepicOverclockCalcs(index,returnObject,isCycleCalcs,nameOverride) { 
        const characterRef = characters.Lepic;
        const settingsRef = characterRef.characterSettings;
        const skillPlacement = 2;
        const abilityMap = characterRef.abilities[`ability${skillPlacement}`][nameOverride ? nameOverride : "base"];
        const abilityTypeArray = abilityMap.type;
        const abilityMods = abilityMap.powerMods;


        const sumModifierBonus = calcs.getTotalSkillPowerModifier(index,abilityTypeArray);
        const baseSkillPower = calcs.getTotalSkillPower(index,abilityTypeArray);
        const abilityDR = calcs.getResistanceBasedDR(index,abilityTypeArray[0]);
        const crit = calcs.getCritComposites(returnObject);

        const basicInfo = {baseSkillPower,abilityDR,crit};

        const skillPowerModifier = abilityMods.base + sumModifierBonus;
        const dotDuration = abilityMods.duration * (1 + index.SkillDuration);

        const damage = calcs.getCompositeDamageSpread(basicInfo,skillPowerModifier);

        const {durationDOT,totalTicks,intervalDOT,totalTickDamage} = calcs.getDoTTotalBreakdown(index,damage.AVG,abilityMods.interval,dotDuration);

        const avgDmgPerTick2 = damage.AVG;
        const totalTickDamage2 = totalTickDamage;

        if (!isCycleCalcs) {
            let rowInjection = [
                {"name": "DOT Duration","value": durationDOT,"unit": ""},
                {"name": "Interval (s)","value": intervalDOT,"unit": ""},
                {"name": "Total Ticks","value": totalTicks,"unit": ""},
            ]

            const breakdownArray = [
                {"header": "OVERCLOCK","value": null,"modifier": null,"hasCritAVG": true,"unit": "",
                    "toggleElemID": ["lepicOverclockBonus","Use Bonus Modifier?"],
                    "condition": false,"desc": ""},
                {"header": "BURN","value": damage,"modifier": skillPowerModifier,"hasCritAVG": true,"unit": "","magazineTypeWeapon": [totalTicks,totalTickDamage],
                    "rowInjection": [rowInjection,""],
                    "condition": false,"desc": "[Note] If burn is applied faster than the interval of once per second, then the burn damage will not take place until you stop refreshing it."},
            ];
            const bodyString = `abilityBreakdownBody${skillPlacement}`;
            
            const addRow = calcsUIHelper.addHealingBoxCluster;
            readSelection(`abilityBreakdownBody${skillPlacement}`).innerHTML = `
            <div class="basicsSummaryBox" id="lepicResultsBox">
                ${calcsUIHelper.addHealingBoxRows(bodyString,breakdownArray,abilityMap.displayStatsALT,index,returnObject,characterRef.name)}
            </div>
            <div class="abilityBreakdownHeader">DESCRIPTION</div>
            <div class="abilityBreakdownDescription">${tooltips.updateSubstatColor(abilityMap.desc)}</div>
            `;
        }
        else {
            return {avgDmgPerTick2,totalTickDamage2}
        }
        // <div class="abilityBreakdownGeneralMessage">asdf.</div>
    },
    lepicPowerUnitCalcsTier0(index,returnObject,isCycleCalcs,nameOverride) {
        const characterRef = characters.Lepic;
        const settingsRef = characterRef.characterSettings;
        const skillPlacement = 2;
        const abilityMap = characterRef.abilities[`ability${skillPlacement}`]["Power Unit Change"];
        const abilityTypeArray = abilityMap.type;
        const abilityMods = abilityMap.powerMods;

        const bonus = abilityMap.powerMods["FirearmATK%"];

        index["FirearmATK%"] += settingsRef.lepicOverclockBonus ? bonus : 0;
    },
    lepicPowerUnitCalcs(index,returnObject,isCycleCalcs,nameOverride) { 
        const characterRef = characters.Lepic;
        const settingsRef = characterRef.characterSettings;
        const skillPlacement = 2;
        const abilityMap = characterRef.abilities[`ability${skillPlacement}`]["Power Unit Change"];
        const abilityTypeArray = abilityMap.type;
        const abilityMods = abilityMap.powerMods;


        const sumModifierBonus = calcs.getTotalSkillPowerModifier(index,abilityTypeArray);
        const baseSkillPower = calcs.getTotalSkillPower(index,abilityTypeArray);
        const abilityDR = calcs.getResistanceBasedDR(index,abilityTypeArray[0]);
        const crit = calcs.getCritComposites(returnObject);

        const basicInfo = {baseSkillPower,abilityDR,crit};

        const skillPowerModifier = abilityMods.base + sumModifierBonus;
        const dotDuration = abilityMods.duration * (1 + index.SkillDuration);

        const damage = calcs.getCompositeDamageSpread(basicInfo,skillPowerModifier);

        const {durationDOT,totalTicks,intervalDOT,totalTickDamage} = calcs.getDoTTotalBreakdown(index,damage.AVG,abilityMods.interval,dotDuration);

        const avgDmgPerTick2 = damage.AVG;
        const totalTickDamage2 = totalTickDamage;

        if (!isCycleCalcs) {
            let rowInjection = [
                {"name": "DOT Duration","value": durationDOT,"unit": ""},
                {"name": "Interval (s)","value": intervalDOT,"unit": ""},
                {"name": "Total Ticks","value": totalTicks,"unit": ""},
            ]

            const breakdownArray = [
                {"header": "POWER UNIT CHANGE","value": null,"modifier": null,"hasCritAVG": true,"unit": "",
                    "toggleElemID": ["lepicOverclockBonus","Use Bonus ATK?"],
                    "condition": false,"desc": ""},
                {"header": "BURN","value": damage,"modifier": skillPowerModifier,"hasCritAVG": true,"unit": "","magazineTypeWeapon": [totalTicks,totalTickDamage],
                    "rowInjection": [rowInjection,""],
                    "condition": false,"desc": "[Note] If burn is applied faster than the interval of once per second, then the burn damage will not take place until you stop refreshing it."},
            ];
            const bodyString = `abilityBreakdownBody${skillPlacement}`;
            
            const addRow = calcsUIHelper.addHealingBoxCluster;
            readSelection(`abilityBreakdownBody${skillPlacement}`).innerHTML = `
            <div class="basicsSummaryBox" id="lepicResultsBox">
                ${calcsUIHelper.addHealingBoxRows(bodyString,breakdownArray,abilityMap.displayStatsALT,index,returnObject,characterRef.name)}
            </div>
            <div class="abilityBreakdownHeader">DESCRIPTION</div>
            <div class="abilityBreakdownDescription">${tooltips.updateSubstatColor(abilityMap.desc)}</div>
            `;
        }
        else {
            return {avgDmgPerTick2,totalTickDamage2}
        }
        // <div class="abilityBreakdownGeneralMessage">asdf.</div>
    },
    lepicNerveCalcs(index,returnObject,isCycleCalcs,nameOverride) { 
        const characterRef = characters.Lepic;
        const settingsRef = characterRef.characterSettings;
        const skillPlacement = 2;
        const abilityMap = characterRef.abilities[`ability${skillPlacement}`]["Nerve Infiltration"];
        const abilityTypeArray = abilityMap.type;
        const abilityMods = abilityMap.powerMods;

        if (!isCycleCalcs) {
            const breakdownArray = [
                {"header": "OVERCLOCK","value": null,"modifier": null,"hasCritAVG": true,"unit": "",
                    "toggleElemID": ["lepicOverclockBonus","Use Bonus Modifier?"],
                    "condition": false,"desc": ""},
                {"header": "WEAKEN REGENERATION","value": null,"modifier": null,"hasCritAVG": true,"unit": "",
                    "condition": false,"desc": ""},
            ];
            const bodyString = `abilityBreakdownBody${skillPlacement}`;
            
            const addRow = calcsUIHelper.addHealingBoxCluster;
            readSelection(`abilityBreakdownBody${skillPlacement}`).innerHTML = `
            <div class="basicsSummaryBox" id="lepicResultsBox">
                ${calcsUIHelper.addHealingBoxRows(bodyString,breakdownArray,abilityMap.displayStatsALT,index,returnObject,characterRef.name)}
            </div>
            <div class="abilityBreakdownHeader">DESCRIPTION</div>
            <div class="abilityBreakdownDescription">${tooltips.updateSubstatColor(abilityMap.desc)}</div>
            `;
        }
        else {
            return {}
        }
        // <div class="abilityBreakdownGeneralMessage">asdf.</div>
    },
    //ability 3
    lepicTractionCalcs(index,returnObject,isCycleCalcs,nameOverride) { 
        const characterRef = characters.Lepic;
        const settingsRef = characterRef.characterSettings;
        const skillPlacement = 3;
        const abilityMap = characterRef.abilities[`ability${skillPlacement}`][nameOverride ? nameOverride : "base"];
        const abilityTypeArray = abilityMap.type;
        const abilityMods = abilityMap.powerMods;

        if (!isCycleCalcs) {
            const breakdownArray = [
                {"header": "TRACTION GRENADE","value": null,"modifier": null,"hasCritAVG": true,"unit": "",
                    "condition": false,"desc": ""},
            ];
            const bodyString = `abilityBreakdownBody${skillPlacement}`;
            
            const addRow = calcsUIHelper.addHealingBoxCluster;
            readSelection(`abilityBreakdownBody${skillPlacement}`).innerHTML = `
            <div class="basicsSummaryBox" id="lepicResultsBox">
                ${calcsUIHelper.addHealingBoxRows(bodyString,breakdownArray,abilityMap.displayStatsALT,index,returnObject,characterRef.name)}
            </div>
            <div class="abilityBreakdownHeader">DESCRIPTION</div>
            <div class="abilityBreakdownDescription">${tooltips.updateSubstatColor(abilityMap.desc)}</div>
            `;
        }
        else {
            return {}
        }
        // <div class="abilityBreakdownGeneralMessage">asdf.</div>
    },
    //ability 4
    lepicOverkillCalcs(index,returnObject,isCycleCalcs,nameOverride) {
        const characterRef = characters.Lepic;
        const settingsRef = characterRef.characterSettings;
        const skillPlacement = 4;
        const abilityMap = characterRef.abilities[`ability${skillPlacement}`][nameOverride ? nameOverride : "base"];
        const abilityTypeArray = abilityMap.type;
        const abilityMods = abilityMap.powerMods;

        const sumModifierBonus = calcs.getTotalSkillPowerModifier(index,abilityTypeArray);
        const baseSkillPower = calcs.getTotalSkillPower(index,abilityTypeArray);
        const abilityDR = calcs.getResistanceBasedDR(index,abilityTypeArray[0]);
        const crit = calcs.getCritComposites(returnObject);

        const basicInfo = {baseSkillPower,abilityDR,crit};

        const skillPowerModifier = abilityMods.base + sumModifierBonus;
        const skillPowerModifierDOT = abilityMods.baseDOT + sumModifierBonus;

        const damage = calcs.getCompositeDamageSpread(basicInfo,skillPowerModifier);
        const damageDOT = calcs.getCompositeDamageSpread(basicInfo,skillPowerModifierDOT);

        const totalMP = returnObject.displayMP;
        const continuousCost = abilityMods.continuousCost * (1 + index.SkillCost);
        const allowedMPDuration = Math.ceil(totalMP/continuousCost)


        const rollDuration = 1.06;
        const normalDuration = abilityMods.skillDuration * (1 + index.SkillDuration) - rollDuration;
        const baseSkillDuration = settingsRef.lepicOverclockMPRestrictions ? Math.min(allowedMPDuration,normalDuration) : normalDuration;

        const currentAmmoType = globalRecords.reactor.currentAmmoType;
        const weaponModsPath = globalRecords.weapon.mods;
        let isSharpPrecision = false;
        for (let entry of weaponModsPath) {if (entry === "Sharp Precision Shot") {isSharpPrecision = true;break;}}
        const baseRate = 60/46;//gap between shots with 0 fire rate active from any source.
        // const baseRate = 1.26;//gap between shots with 0 fire rate active from any source.
        const {shotCount,excessWasted} = customDamage.skillBasedFireRateMath(index,baseSkillDuration,baseRate,isSharpPrecision,currentAmmoType);

        const continuousDuration = abilityMods.duration * (1 + index.SkillDuration);
        const continuousInterval = abilityMods.interval;
        const ticksPerShot = Math.floor(continuousDuration/continuousInterval);
        const continuousTicks = ticksPerShot * shotCount;

        const overkillAVGperHit4 = damage.AVG;
        const overkillTotalShotDamage4 = damage.AVG * shotCount;
        const overkillShotCount = shotCount
        const continuousAVGperTick4 = damageDOT.AVG;
        const continuousTotalDamage4 = damageDOT.AVG * continuousTicks;


        const sumTotalDamage4 = overkillTotalShotDamage4 + continuousTotalDamage4;
        const dpsPerShot4 = (damage.AVG + ticksPerShot * damageDOT.AVG) / continuousDuration;
        const dpsPerCast4 = (overkillTotalShotDamage4 + continuousTotalDamage4) / (baseSkillDuration + continuousDuration);


        
        if (!isCycleCalcs) {
            let rowInjectionOverkill = [
                {"name": "-Roll Duration","value": -rollDuration,"unit": ""},
                {"name": "Usable Duration","value": baseSkillDuration,"unit": ""},
                {"name": "Excess/Wasted","value": excessWasted,"unit": ""},
                {"name": "Shots","value": shotCount,"unit": ""},
            ]
            let Continuous = [
                {"name": "DOT Duration","value": continuousDuration,"unit": ""},
                {"name": "Interval","value": continuousInterval,"unit": ""},
                {"name": "Total Ticks","value": continuousTicks,"unit": ""},
            ]
            let SUM = [
                {"name": "SUM AVG DMG per Cast","value": sumTotalDamage4,"unit": ""},
                {"name": "DPS Per Shot","value": dpsPerShot4,"unit": ""},
                {"name": "DPS Per Cast","value": dpsPerCast4,"unit": ""},
            ]

            const breakdownArray = [
                {"header": "OVERKILL","value": damage,"modifier": skillPowerModifier,"hasCritAVG": true,"unit": "","magazineTypeWeapon": [shotCount,overkillTotalShotDamage4],
                    "toggleElemID": ["lepicOverclockMPRestrictions","Restrict Duration by MP?"],
                    "rowInjection": [rowInjectionOverkill,""],
                    "condition": false,"desc": "Overkill benefits from Fire Rate modifiers on your selected weapon in the calculator. If shot count doesn't line up, make sure you have Fire Rate UP and Sharp Precision Shot selected."},
                {"header": "CONTINUOUS DAMAGE","value": damageDOT,"modifier": skillPowerModifierDOT,"hasCritAVG": true,"unit": "","magazineTypeWeapon": [continuousTicks,continuousTotalDamage4],
                    "rowInjection": [Continuous,""],
                    "condition": false,"desc": ""},
                {"header": "SUM","value": null,"modifier": null,"hasCritAVG": true,"unit": "",
                    "rowInjection": [SUM,""],
                    "condition": false,"desc": "This number assumes you are roll canceling the starting animation."},
            ];
            const bodyString = `abilityBreakdownBody${skillPlacement}`;
            
            const addRow = calcsUIHelper.addHealingBoxCluster;
            readSelection(`abilityBreakdownBody${skillPlacement}`).innerHTML = `
            ${addRow("Power",baseSkillPower,"")}
            <div class="basicsSummaryBox" id="lepicResultsBox">
                ${calcsUIHelper.addHealingBoxRows(bodyString,breakdownArray,abilityMap.displayStatsALT,index,returnObject,characterRef.name)}
            </div>
            <div class="abilityBreakdownHeader">DESCRIPTION</div>
            <div class="abilityBreakdownDescription">${tooltips.updateSubstatColor(abilityMap.desc)}</div>
            `;
        }
        else {
            return {overkillAVGperHit4,overkillTotalShotDamage4,continuousAVGperTick4,continuousTotalDamage4,dpsPerShot4,dpsPerCast4,sumTotalDamage4}
        }
        // <div class="abilityBreakdownGeneralMessage">asdf.</div>
    },
    skillBasedFireRateMath(index,firingWindowDuration,delayBetweenShots,isSharpPrecision,currentAmmoType) {
        const fireRate = index.FireRate;//the flat, non-dynamic fire rate bonuses/negatives from equipped mods, before something like sharp precision kicks in.
    
        const baseRate = delayBetweenShots;//gap between shots with 0 fire rate active from any source.
        const modifiedRate = baseRate * (1 + fireRate);//modified time between shots with -20% penalty and +25% boost
    
        const reductionPerStack = baseRate * 0.04;//4% reduction of the base time per stack
        const maxStacks = 10;
        const sharpAmmoTypeDelays = {
            "General": 0.5,
            "Special": 0.5,
            "Impact": 0.4,
            "HighPowered": 0
        }
        const stackDelay = sharpAmmoTypeDelays[currentAmmoType];//Are we using Sharp Precision from green ammo, or from white/orange.
    
        let timePassed = 0;
        let shotCount = 1;//start at 1, bc the first shot is considered instantaneous
        let excessWasted = 0;
    
        if (isSharpPrecision) {
            while (timePassed < firingWindowDuration) {
                const stacks = Math.min(Math.floor(timePassed / stackDelay), maxStacks);
                const currentRate = modifiedRate - stacks * reductionPerStack;//time between shots with the stacks applied
                const nextShotTime = timePassed + currentRate;//time for the next shot
    
                if (nextShotTime <= firingWindowDuration) {
                    shotCount++;
                    timePassed = nextShotTime;//passed to the time of the next shot
                }
                else {
                    excessWasted = firingWindowDuration - nextShotTime;
                    break;
                }
            }
        }
        else {
            const floatCount = firingWindowDuration/(modifiedRate);
            shotCount += Math.floor(floatCount);
            durationDiff = floatCount - Math.floor(floatCount);
            excessWasted = durationDiff;
        }
    
    
        return {shotCount,firingWindowDuration,excessWasted};
    },
    lepicOverkillCalcsEfficiency(index,returnObject,isCycleCalcs,nameOverride) {
        const characterRef = characters.Lepic;
        const settingsRef = characterRef.characterSettings;
        const skillPlacement = 4;
        const abilityMap = characterRef.abilities[`ability${skillPlacement}`]["Increased Efficiency"];
        const abilityTypeArray = abilityMap.type;
        const abilityMods = abilityMap.powerMods;

        const sumModifierBonus = calcs.getTotalSkillPowerModifier(index,abilityTypeArray);
        const baseSkillPower = calcs.getTotalSkillPower(index,abilityTypeArray);
        const abilityDR = calcs.getResistanceBasedDR(index,abilityTypeArray[0]);
        const crit = calcs.getCritComposites(returnObject);

        const basicInfo = {baseSkillPower,abilityDR,crit};

        const skillPowerModifier = abilityMods.base + sumModifierBonus;

        const damage = calcs.getCompositeDamageSpread(basicInfo,skillPowerModifier);

        const avgDmgPerShot4 = damage.AVG;

        
        if (!isCycleCalcs) {
            const breakdownArray = [
                {"header": "SKILL EFFECT","value": null,"modifier": null,"hasCritAVG": true,"unit": "",//"magazineTypeWeapon": [turretTotalHits,totalTurretAVG1],
                    "condition": false,"desc": ""},
                {"header": "UNIQUE WEAPON","value": damage,"modifier": skillPowerModifier,"hasCritAVG": true,"unit": "",//"magazineTypeWeapon": [turretTotalHits,totalTurretAVG1],
                    "condition": false,"desc": ""},
            ];
            const bodyString = `abilityBreakdownBody${skillPlacement}`;
            
            const addRow = calcsUIHelper.addHealingBoxCluster;
            readSelection(`abilityBreakdownBody${skillPlacement}`).innerHTML = `
            ${addRow("Power",baseSkillPower,"")}
            <div class="basicsSummaryBox" id="lepicResultsBox">
                ${calcsUIHelper.addHealingBoxRows(bodyString,breakdownArray,abilityMap.displayStatsALT,index,returnObject,characterRef.name)}
            </div>
            <div class="abilityBreakdownHeader">DESCRIPTION</div>
            <div class="abilityBreakdownDescription">${tooltips.updateSubstatColor(abilityMap.desc)}</div>
            `;
        }
        else {
            return {avgDmgPerShot4}
        }
        // <div class="abilityBreakdownGeneralMessage">asdf.</div>
    },
    //passive
    lepicCloseCallCalcs(index,returnObject,isCycleCalcs,nameOverride) { 
        const characterRef = characters.Lepic;
        const settingsRef = characterRef.characterSettings;
        const skillPlacement = 5;
        const abilityMap = characterRef.abilities[`ability${skillPlacement}`][nameOverride ? nameOverride : "base"];
        const abilityTypeArray = abilityMap.type;
        const abilityMods = abilityMap.powerMods;

        if (!isCycleCalcs) {
            const breakdownArray = [
                {"header": "CLOSE CALL","value": null,"modifier": null,"hasCritAVG": true,"unit": "",
                    "condition": false,"desc": ""},
            ];
            const bodyString = `abilityBreakdownBody${skillPlacement}`;
            
            const addRow = calcsUIHelper.addHealingBoxCluster;
            readSelection(`abilityBreakdownBody${skillPlacement}`).innerHTML = `
            <div class="basicsSummaryBox" id="lepicResultsBox">
                ${calcsUIHelper.addHealingBoxRows(bodyString,breakdownArray,abilityMap.displayStatsALT,index,returnObject,characterRef.name)}
            </div>
            <div class="abilityBreakdownHeader">DESCRIPTION</div>
            <div class="abilityBreakdownDescription">${tooltips.updateSubstatColor(abilityMap.desc)}</div>
            `;
        }
        else {
            return {}
        }
        // <div class="abilityBreakdownGeneralMessage">asdf.</div>
    },
    lepicFirearmMasterCalcsTier0(index,returnObject,isCycleCalcs,nameOverride) {
        const characterRef = characters.Lepic;
        const settingsRef = characterRef.characterSettings;
        const skillPlacement = 5;
        const abilityMap = characterRef.abilities[`ability${skillPlacement}`]["Firearm Master"];
        const abilityTypeArray = abilityMap.type;
        const abilityMods = abilityMap.powerMods;

        const powerModBonus = abilityMap.powerMods["PowerModifierBase"];
        const skillRangebonus = abilityMap.powerMods["SkillRange"];

        if (settingsRef.lepicFirearmMasterBonus) {
            index.PowerModifierBase += powerModBonus;
            index.SkillRange += skillRangebonus;
        }
    },
    lepicFirearmMasterCalcs(index,returnObject,isCycleCalcs,nameOverride) { 
        const characterRef = characters.Lepic;
        const settingsRef = characterRef.characterSettings;
        const skillPlacement = 5;
        const abilityMap = characterRef.abilities[`ability${skillPlacement}`]["Firearm Master"];
        const abilityTypeArray = abilityMap.type;
        const abilityMods = abilityMap.powerMods;

        if (!isCycleCalcs) {
            const breakdownArray = [
                {"header": "LOAD MASTERY","value": null,"modifier": null,"hasCritAVG": true,"unit": "",
                    "condition": false,"desc": ""},
                {"header": "CHANGE MASTERY","value": null,"modifier": null,"hasCritAVG": true,"unit": "",
                    "condition": false,"desc": ""},
                {"header": "BONUS USAGE","value": null,"modifier": null,"hasCritAVG": true,"unit": "",
                    "toggleElemID": ["lepicFirearmMasterBonus",""],
                    "condition": false,"desc": ""},
            ];
            const bodyString = `abilityBreakdownBody${skillPlacement}`;
            
            const addRow = calcsUIHelper.addHealingBoxCluster;
            readSelection(`abilityBreakdownBody${skillPlacement}`).innerHTML = `
            <div class="basicsSummaryBox" id="lepicResultsBox">
                ${calcsUIHelper.addHealingBoxRows(bodyString,breakdownArray,abilityMap.displayStatsALT,index,returnObject,characterRef.name)}
            </div>
            <div class="abilityBreakdownHeader">DESCRIPTION</div>
            <div class="abilityBreakdownDescription">${tooltips.updateSubstatColor(abilityMap.desc)}</div>
            `;
        }
        else {
            return {}
        }
        // <div class="abilityBreakdownGeneralMessage">asdf.</div>
    },
    lepicBrakingCalcs(index,returnObject,isCycleCalcs,nameOverride) { 
        const characterRef = characters.Lepic;
        const settingsRef = characterRef.characterSettings;
        const skillPlacement = 5;
        const abilityMap = characterRef.abilities[`ability${skillPlacement}`]["Regenerative Braking"];
        const abilityTypeArray = abilityMap.type;
        const abilityMods = abilityMap.powerMods;

        if (!isCycleCalcs) {
            const breakdownArray = [
                {"header": "SKILL EFFECT","value": null,"modifier": null,"hasCritAVG": true,"unit": "",
                    "condition": false,"desc": ""},
            ];
            const bodyString = `abilityBreakdownBody${skillPlacement}`;
            
            const addRow = calcsUIHelper.addHealingBoxCluster;
            readSelection(`abilityBreakdownBody${skillPlacement}`).innerHTML = `
            <div class="basicsSummaryBox" id="lepicResultsBox">
                ${calcsUIHelper.addHealingBoxRows(bodyString,breakdownArray,abilityMap.displayStatsALT,index,returnObject,characterRef.name)}
            </div>
            <div class="abilityBreakdownHeader">DESCRIPTION</div>
            <div class="abilityBreakdownDescription">${tooltips.updateSubstatColor(abilityMap.desc)}</div>
            `;
        }
        else {
            return {}
        }
        // <div class="abilityBreakdownGeneralMessage">asdf.</div>
    },

    //Bunny
    //ability 1
    bunnyThrillCalcs(index,returnObject,isCycleCalcs,nameOverride) {
        const characterRef = characters.Bunny;
        const settingsRef = characterRef.characterSettings;
        const skillPlacement = 1;
        const abilityMap = characterRef.abilities[`ability${skillPlacement}`][nameOverride ? nameOverride : "base"];
        const abilityTypeArray = abilityMap.type;
        const abilityMods = abilityMap.powerMods;

        const sumModifierBonus = calcs.getTotalSkillPowerModifier(index,abilityTypeArray);
        const baseSkillPower = calcs.getTotalSkillPower(index,abilityTypeArray);
        const abilityDR = calcs.getResistanceBasedDR(index,abilityTypeArray[0]);
        const crit = calcs.getCritComposites(returnObject);

        const basicInfo = {baseSkillPower,abilityDR,crit};

        //Bunny is bugged, and she doesn't get the full 2.5x multi from her 1&3 bar scaling, instead it stops at 9 stacks for 2.35.
        const barFilledAmount = 1 + ((settingsRef.barPercentState/10)*0.15)

        const skillPowerModifier = abilityMods.base + sumModifierBonus;
        const skillPowerModifierElec = abilityMods.baseElec + sumModifierBonus;

        const damage = calcs.getCompositeDamageSpread(basicInfo,skillPowerModifier,null,barFilledAmount);
        const damageElec = calcs.getCompositeDamageSpread(basicInfo,skillPowerModifierElec);

        const avgDmgPerHit = damage.AVG;
        const avgDmgPerElec = damageElec.AVG;

        
        if (!isCycleCalcs) {
            let rowInjection = [
                {"name": "Electricity Bar Multi","value": barFilledAmount,"unit": "x"},
            ]

            const breakdownArray = [
                {"header": "SKILL EFFECT","value": damage,"modifier": skillPowerModifier,"hasCritAVG": true,"unit": "",//"magazineTypeWeapon": [turretTotalHits,totalTurretAVG1],
                    "rowInjection": [rowInjection,""],
                    "condition": false,"desc": ""},
                {"header": "ELECTROCUTION","value": damageElec,"modifier": skillPowerModifierElec,"hasCritAVG": true,"unit": "",//"magazineTypeWeapon": [turretTotalHits,totalTurretAVG1],
                    "condition": false,"desc": ""},
            ];
            const bodyString = `abilityBreakdownBody${skillPlacement}`;
            
            const addRow = calcsUIHelper.addHealingBoxCluster;
            readSelection(`abilityBreakdownBody${skillPlacement}`).innerHTML = `
            ${addRow("Power",baseSkillPower,"")}
            <div class="basicsSummaryBox" id="lepicResultsBox">
                ${calcsUIHelper.addHealingBoxRows(bodyString,breakdownArray,abilityMap.displayStatsALT,index,returnObject,characterRef.name)}
            </div>
            <div class="abilityBreakdownHeader">DESCRIPTION</div>
            <div class="abilityBreakdownDescription">${tooltips.updateSubstatColor(abilityMap.desc)}</div>
            `;
        }
        else {
            return {avgDmgPerElec,avgDmgPerHit}
        }
        // <div class="abilityBreakdownGeneralMessage">asdf.</div>
    },
    bunnyThrillCalcsHVStarter(index,returnObject,isCycleCalcs,nameOverride) {
        //used purely to do emission calcs with the specification that high voltage is active
        return customDamage.bunnyThrillCalcs(index,returnObject,isCycleCalcs,"High-Voltage");
    },
    bunnyThrillCalcsSuperStarter(index,returnObject,isCycleCalcs,nameOverride) {
        //used purely to do emission calcs with the specification that high voltage is active
        return customDamage.bunnyThrillCalcs(index,returnObject,isCycleCalcs,"Superconductor");
    },
    //ability 2
    bunnySpeedCalcsTier0Speed(index,returnObject,isCycleCalcs,nameOverride) {
        const characterRef = characters.Bunny;
        const settingsRef = characterRef.characterSettings;
        const skillPlacement = 2;
        const abilityMap = characterRef.abilities[`ability${skillPlacement}`][nameOverride ? nameOverride : "base"];
        const abilityTypeArray = abilityMap.type;
        const abilityMods = abilityMap.powerMods;

        const bonus = abilityMods.SprintSpeedBonus;
        settingsRef.CostType = abilityMods.CostType;

        index.SprintSpeedBonus += settingsRef.bunnySoLSpeed ? bonus : 0;
    },
    bunnySpeedCalcsTier0SpeedTransitionStarter(index,returnObject,isCycleCalcs,nameOverride) {
        customDamage.bunnySpeedCalcsTier0Speed(index,returnObject,isCycleCalcs,"Electric Transition");
    },
    bunnySpeedCalcsTier0SpeedBionicStarter(index,returnObject,isCycleCalcs,nameOverride) {
        customDamage.bunnySpeedCalcsTier0Speed(index,returnObject,isCycleCalcs,"Bionic Fuel");
    },
    bunnySpeedCalcs(index,returnObject,isCycleCalcs,nameOverride) {
        const characterRef = characters.Bunny;
        const settingsRef = characterRef.characterSettings;
        const skillPlacement = 2;
        const abilityMap = characterRef.abilities[`ability${skillPlacement}`][nameOverride ? nameOverride : "base"];
        const abilityTypeArray = abilityMap.type;
        const abilityMods = abilityMap.powerMods;

        const costOverTime = abilityMods.cost * (1 + index.SkillCost);
        const isMPbasedCost = settingsRef.CostType === "MP";
        const duration = returnObject.displayMP/costOverTime;

        if (!isCycleCalcs) {
            let rowInjection = [
                {"name": "Cost/s","value": costOverTime,"unit": ""},
                {"name": "Sprint Duration","value": isMPbasedCost ? duration : "Infinite","unit": isMPbasedCost ? "s" : ""},
            ]

            const breakdownArray = [
                {"header": "SKILL EFFECT","value": null,"modifier": null,"hasCritAVG": true,"unit": "",//"magazineTypeWeapon": [turretTotalHits,totalTurretAVG1],
                    "toggleElemID": ["bunnySoLSpeed","Include Speed Bonus?"],
                    "rowInjection": [rowInjection,""],
                    "condition": false,"desc": ""},
                {"header": "ELECTRICITY","value": null,"modifier": null,"hasCritAVG": true,"unit": "",//"magazineTypeWeapon": [turretTotalHits,totalTurretAVG1],
                    "condition": false,"desc": ""},
            ];
            const bodyString = `abilityBreakdownBody${skillPlacement}`;
            
            const addRow = calcsUIHelper.addHealingBoxCluster;
            readSelection(`abilityBreakdownBody${skillPlacement}`).innerHTML = `
            <div class="basicsSummaryBox" id="lepicResultsBox">
                ${calcsUIHelper.addHealingBoxRows(bodyString,breakdownArray,abilityMap.displayStatsALT,index,returnObject,characterRef.name)}
            </div>
            <div class="abilityBreakdownHeader">DESCRIPTION</div>
            <div class="abilityBreakdownDescription">${tooltips.updateSubstatColor(abilityMap.desc)}</div>
            `;
        }
        else {
            return {}
        }
    },
    bunnySpeedCalcsTransitionStarter(index,returnObject,isCycleCalcs,nameOverride) {
        return customDamage.bunnySpeedCalcs(index,returnObject,isCycleCalcs,"Electric Transition")
    },
    bunnySpeedCalcsBionicStarter(index,returnObject,isCycleCalcs,nameOverride) {
        const characterRef = characters.Bunny;
        const settingsRef = characterRef.characterSettings;
        const skillPlacement = 2;
        const abilityMap = characterRef.abilities[`ability${skillPlacement}`]["Bionic Fuel"];
        const abilityTypeArray = abilityMap.type;
        const abilityMods = abilityMap.powerMods;

        const costOverTime = abilityMods.cost * (1 + index.SkillCost) * returnObject.displayHealth;

        if (!isCycleCalcs) {
            let rowInjection = [
                {"name": "HP Cost/s","value": costOverTime,"unit": ""},
            ]

            const breakdownArray = [
                {"header": "SKILL EFFECT","value": null,"modifier": null,"hasCritAVG": true,"unit": "",//"magazineTypeWeapon": [turretTotalHits,totalTurretAVG1],
                    "toggleElemID": ["bunnySoLSpeed","Include Speed Bonus?"],
                    "rowInjection": [rowInjection,""],
                    "condition": false,"desc": ""},
                {"header": "ELECTRICITY","value": null,"modifier": null,"hasCritAVG": true,"unit": "",//"magazineTypeWeapon": [turretTotalHits,totalTurretAVG1],
                    "condition": false,"desc": ""},
            ];
            const bodyString = `abilityBreakdownBody${skillPlacement}`;
            
            const addRow = calcsUIHelper.addHealingBoxCluster;
            readSelection(`abilityBreakdownBody${skillPlacement}`).innerHTML = `
            <div class="basicsSummaryBox" id="lepicResultsBox">
                ${calcsUIHelper.addHealingBoxRows(bodyString,breakdownArray,abilityMap.displayStatsALT,index,returnObject,characterRef.name)}
            </div>
            <div class="abilityBreakdownHeader">DESCRIPTION</div>
            <div class="abilityBreakdownDescription">${tooltips.updateSubstatColor(abilityMap.desc)}</div>
            `;
        }
        else {
            return {}
        }
    },
    //ability 3
    bunnyEmissionCalcs(index,returnObject,isCycleCalcs,nameOverride) {
        const characterRef = characters.Bunny;
        const settingsRef = characterRef.characterSettings;
        const skillPlacement = 3;
        const abilityMap = characterRef.abilities[`ability${skillPlacement}`][nameOverride ? nameOverride : "base"];
        const abilityTypeArray = abilityMap.type;
        const abilityMods = abilityMap.powerMods;

        const sumModifierBonus = calcs.getTotalSkillPowerModifier(index,abilityTypeArray);
        const baseSkillPower = calcs.getTotalSkillPower(index,abilityTypeArray);
        const abilityDR = calcs.getResistanceBasedDR(index,abilityTypeArray[0]);
        const crit = calcs.getCritComposites(returnObject);

        const basicInfo = {baseSkillPower,abilityDR,crit};

        //Bunny is bugged, and she doesn't get the full 2.5x multi from her 1&3 bar scaling, instead it stops at 9 stacks for 2.35.
        const barFilledAmount = 1 + ((settingsRef.barPercentState/10)*0.15)

        const skillPowerModifier = abilityMods.base + sumModifierBonus;
        const skillPowerModifierElec = abilityMods.baseElec + sumModifierBonus;

        const damage = calcs.getCompositeDamageSpread(basicInfo,skillPowerModifier,null,barFilledAmount);
        const damageElec = calcs.getCompositeDamageSpread(basicInfo,skillPowerModifierElec);


        //bunny hits every 0.9 seconds when sprinting normally, and 0.6 seconds when using speed of light.
        //this is with an 800 sprint speed weapon though TODO: possibly look into how weapon speed modifies sprint speed, if it isn't negligible
        //when SOL is active, supposedly you're maxed at 800 MS regardless, so the only dps loss could be for normal sprints
        const secondsPerHitNormal = 0.9;//the time between hits when sprinting normally.
        const totalSpeedBonus = index.SprintSpeedBonus;
        const newSecondsPerHit = secondsPerHitNormal/(1 + totalSpeedBonus);
        const hitsPerSecond = 1/newSecondsPerHit;

        const avgDmgPerHit = damage.AVG;
        const avgDmgPerElec = damageElec.AVG;
        const avgDPSHits = damage.AVG * hitsPerSecond;
        const avgDPSElec = damageElec.AVG;//since the interval is once per second, it is its own DPS value

        const isMPbasedCost = settingsRef.CostType === "MP";
        const costModifier = 1 + index.SkillCost;
        const drainRate = 25 * costModifier;
        const startCost = 12 * costModifier;
        const maxMP = returnObject.displayMP;
        const speedDuration = settingsRef.bunnyCostRestrictions && isMPbasedCost ? (maxMP - startCost)/drainRate : 1;

        const totalHits = Math.floor(speedDuration*hitsPerSecond);
        const totalTicks = Math.floor(speedDuration);
        const totalDamagePerInterval = totalHits*damage.AVG + totalTicks*damageElec.AVG;
        const totalAVGDPS = settingsRef.bunnyCostRestrictions && isMPbasedCost ? totalDamagePerInterval/speedDuration : avgDPSHits + avgDPSElec;

        if (!isCycleCalcs) {
            let rowInjection = [
                {"name": "Electricity Bar Multi","value": barFilledAmount,"unit": "x"},
                {"name": "Sprint Speed Bonus","value": totalSpeedBonus,"unit": "%"},
                {"name": "Hits/s","value": hitsPerSecond,"unit": ""},
            ]

            let rowInjectionSUMS = [
                {"name": "Total AVG DPS","value": totalAVGDPS,"unit": ""},
                {"name": "SUM Total AVG/Interval","value": totalDamagePerInterval,"unit": ""},
                {"name": "Hits DPS","value": avgDPSHits,"unit": ""},
                {"name": "Ticks DPS","value": avgDPSElec,"unit": ""},
            ]

            const breakdownArray = [
                {"header": "LIGHTNING EMISSION","value": damage,"modifier": skillPowerModifier,"hasCritAVG": true,"unit": "",//"magazineTypeWeapon": [turretTotalHits,totalTurretAVG1],
                    "toggleElemID": ["bunnyCostRestrictions","Use Cost Restrictions?"],
                    "rowInjection": [rowInjection,"Sprint Speed Bonuses can be toggled on the abilities that provide them"],
                    "condition": false,"desc": ""},
                {"header": "ELECTROCUTION","value": damageElec,"modifier": skillPowerModifierElec,"hasCritAVG": true,"unit": "",//"magazineTypeWeapon": [turretTotalHits,totalTurretAVG1],
                    "condition": false,"desc": ""},
                {"header": "SUM","value": null,"modifier": null,"hasCritAVG": true,"unit": "",//"magazineTypeWeapon": [turretTotalHits,totalTurretAVG1],
                    "rowInjection": [rowInjectionSUMS,""],
                    "condition": false,"desc": ""},
            ];
            const bodyString = `abilityBreakdownBody${skillPlacement}`;
            
            const addRow = calcsUIHelper.addHealingBoxCluster;
            readSelection(`abilityBreakdownBody${skillPlacement}`).innerHTML = `
            ${addRow("Power",baseSkillPower,"")}
            <div class="basicsSummaryBox" id="lepicResultsBox">
                ${calcsUIHelper.addHealingBoxRows(bodyString,breakdownArray,abilityMap.displayStatsALT,index,returnObject,characterRef.name)}
            </div>
            <div class="abilityBreakdownHeader">DESCRIPTION</div>
            <div class="abilityBreakdownDescription">${tooltips.updateSubstatColor(abilityMap.desc)}</div>
            `;
        }
        else {
            return {avgDmgPerHit,avgDmgPerElec,avgDPSHits,avgDPSElec,totalAVGDPS}
        }
        // <div class="abilityBreakdownGeneralMessage">asdf.</div>
    },
    bunnyEmissionCalcsHVStarter(index,returnObject,isCycleCalcs,nameOverride) {
        return customDamage.bunnyEmissionCalcs(index,returnObject,isCycleCalcs,"High-Voltage");
    },
    bunnyEmissionCalcsSuperStarter(index,returnObject,isCycleCalcs,nameOverride) {
        return customDamage.bunnyEmissionCalcs(index,returnObject,isCycleCalcs,"Superconductor");
    },
    //ability 4
    bunnyCondenseCalcsTier0Speed(index,returnObject,isCycleCalcs,nameOverride) {
        const characterRef = characters.Bunny;
        const settingsRef = characterRef.characterSettings;
        const skillPlacement = 4;
        const abilityMap = characterRef.abilities[`ability${skillPlacement}`]["Electric Condense"];
        const abilityTypeArray = abilityMap.type;
        const abilityMods = abilityMap.powerMods;

        const bonus = abilityMods.SprintSpeedBonus;

        index.SprintSpeedBonus += settingsRef.bunnyCondenseSpeed ? bonus : 0;
    },
    bunnyCondenseCalcs(index,returnObject,isCycleCalcs,nameOverride) {
        const characterRef = characters.Bunny;
        const settingsRef = characterRef.characterSettings;
        const skillPlacement = 4;
        const abilityMap = characterRef.abilities[`ability${skillPlacement}`]["Electric Condense"];
        const abilityTypeArray = abilityMap.type;
        const abilityMods = abilityMap.powerMods;

        const sumModifierBonus = calcs.getTotalSkillPowerModifier(index,abilityTypeArray);
        const baseSkillPower = calcs.getTotalSkillPower(index,abilityTypeArray);
        const abilityDR = calcs.getResistanceBasedDR(index,abilityTypeArray[0]);
        const crit = calcs.getCritComposites(returnObject);

        const basicInfo = {baseSkillPower,abilityDR,crit};

        //Bunny is bugged, and she doesn't get the full 2.5x multi from her 1&3 bar scaling, instead it stops at 9 stacks for 2.35.
        const barFilledAmount = 1 + ((settingsRef.barPercentState/10)*0.15)

        const skillPowerModifier = abilityMods.base + sumModifierBonus;

        const damage = calcs.getCompositeDamageSpread(basicInfo,skillPowerModifier,null,barFilledAmount);

        const avgDmgPerHit = damage.AVG;

        
        if (!isCycleCalcs) {
            let rowInjection = [
                {"name": "Electricity Bar Multi","value": barFilledAmount,"unit": "x"},
            ]

            const breakdownArray = [
                {"header": "SKILL EFFECT","value": damage,"modifier": skillPowerModifier,"hasCritAVG": true,"unit": "",//"magazineTypeWeapon": [turretTotalHits,totalTurretAVG1],
                    "toggleElemID": ["bunnyCondenseSpeed","Include Speed Bonus?"],
                    "rowInjection": [rowInjection,""],
                    "condition": false,"desc": ""},
                {"header": "ELECTRICITY","value": null,"modifier": null,"hasCritAVG": true,"unit": "",//"magazineTypeWeapon": [turretTotalHits,totalTurretAVG1],
                    "condition": false,"desc": ""},
            ];
            const bodyString = `abilityBreakdownBody${skillPlacement}`;
            
            const addRow = calcsUIHelper.addHealingBoxCluster;
            readSelection(`abilityBreakdownBody${skillPlacement}`).innerHTML = `
            ${addRow("Power",baseSkillPower,"")}
            <div class="basicsSummaryBox" id="lepicResultsBox">
                ${calcsUIHelper.addHealingBoxRows(bodyString,breakdownArray,abilityMap.displayStatsALT,index,returnObject,characterRef.name)}
            </div>
            <div class="abilityBreakdownHeader">DESCRIPTION</div>
            <div class="abilityBreakdownDescription">${tooltips.updateSubstatColor(abilityMap.desc)}</div>
            `;
        }
        else {
            return {avgDmgPerHit}
        }
        // <div class="abilityBreakdownGeneralMessage">asdf.</div>
    },
    //passive
    bunnyFootCalcs(index,returnObject,isCycleCalcs,nameOverride) {
        const characterRef = characters.Bunny;
        const settingsRef = characterRef.characterSettings;
        const skillPlacement = 5;
        const abilityMap = characterRef.abilities[`ability${skillPlacement}`][nameOverride ? nameOverride : "base"];
        const abilityTypeArray = abilityMap.type;
        const abilityMods = abilityMap.powerMods;

        const sumModifierBonus = calcs.getTotalSkillPowerModifier(index,abilityTypeArray);
        const baseSkillPower = calcs.getTotalSkillPower(index,abilityTypeArray);
        const abilityDR = calcs.getResistanceBasedDR(index,abilityTypeArray[0]);
        const crit = calcs.getCritComposites(returnObject);

        const basicInfo = {baseSkillPower,abilityDR,crit};

        const skillPowerModifier = abilityMods.base + sumModifierBonus;

        const damage = calcs.getCompositeDamageSpread(basicInfo,skillPowerModifier);

        const avgDmgPerHit = damage.AVG;


        if (!isCycleCalcs) {
            // const rowInjection = [
            //     {"name": "0-Point","value": 12.5,"unit": "m"},
            //     {"name": "+% Weak Point DMG","value": weakspotBonus,"unit": "%"},
            // ]
            const breakdownArray = [
                {"header": "MOVEMENT","value": null,"modifier": null,"hasCritAVG": null,"unit": "","sliderElemID": ["barPercentState",0,90,10,"Bar % Filled"],
                    "condition": false,"desc": "This controls the % multiplier available to whatever abilities use the electricity bar"},
                {"header": "STOPPED","value": null,"modifier": null,"hasCritAVG": null,"unit": "",
                    "condition": false,"desc": ""},
                {"header": "DOUBLE JUMP","value": damage,"modifier": skillPowerModifier,"hasCritAVG": true,"unit": "",
                    "condition": false,"desc": ""},
            ];
            const bodyString = `abilityBreakdownBody${skillPlacement}`;
            
            const addRow = calcsUIHelper.addHealingBoxCluster;
            readSelection(`abilityBreakdownBody${skillPlacement}`).innerHTML = `
            ${addRow("Power",baseSkillPower,"")}
            <div class="basicsSummaryBox" id="lepicResultsBox">
                ${calcsUIHelper.addHealingBoxRows(bodyString,breakdownArray,abilityMap.displayStatsALT,index,returnObject,characterRef.name)}
            </div>
            <div class="abilityBreakdownHeader">DESCRIPTION</div>
            <div class="abilityBreakdownDescription">${tooltips.updateSubstatColor(abilityMap.desc)}</div>
            `;
        }
        else {
            return {avgDmgPerHit}
        }
    },
    bunnyFootCalcsCharge(index,returnObject,isCycleCalcs,nameOverride) {
        const characterRef = characters.Bunny;
        const settingsRef = characterRef.characterSettings;
        const skillPlacement = 5;
        const abilityMap = characterRef.abilities[`ability${skillPlacement}`]["Electric Charge"];
        const abilityTypeArray = abilityMap.type;
        const abilityMods = abilityMap.powerMods;

        const sumModifierBonus = calcs.getTotalSkillPowerModifier(index,abilityTypeArray);
        const baseSkillPower = calcs.getTotalSkillPower(index,abilityTypeArray);
        const abilityDR = calcs.getResistanceBasedDR(index,abilityTypeArray[0]);
        const crit = calcs.getCritComposites(returnObject);

        const basicInfo = {baseSkillPower,abilityDR,crit};

        const skillPowerModifier = abilityMods.base + sumModifierBonus;
        const skillPowerModifierCharge = abilityMods.baseCharge + sumModifierBonus;

        const damage = calcs.getCompositeDamageSpread(basicInfo,skillPowerModifier);
        const damageCharge = calcs.getCompositeDamageSpread(basicInfo,skillPowerModifierCharge);

        const avgDmgPerHit = damage.AVG;
        const avgDmgPerHitCharge = damageCharge.AVG;


        if (!isCycleCalcs) {
            // const rowInjection = [
            //     {"name": "0-Point","value": 12.5,"unit": "m"},
            //     {"name": "+% Weak Point DMG","value": weakspotBonus,"unit": "%"},
            // ]
            const breakdownArray = [
                {"header": "MOVEMENT","value": null,"modifier": null,"hasCritAVG": null,"unit": "","sliderElemID": ["barPercentState",0,90,10,"Bar % Filled"],
                    "condition": false,"desc": "This controls the % multiplier available to whatever abilities use the electricity bar"},
                {"header": "STOPPED","value": null,"modifier": null,"hasCritAVG": null,"unit": "",
                    "condition": false,"desc": ""},
                {"header": "DOUBLE JUMP","value": damage,"modifier": skillPowerModifier,"hasCritAVG": true,"unit": "",
                    "condition": false,"desc": ""},
                {"header": "CHARGE","value": damageCharge,"modifier": skillPowerModifierCharge,"hasCritAVG": true,"unit": "",
                    "condition": false,"desc": ""},
            ];
            const bodyString = `abilityBreakdownBody${skillPlacement}`;
            
            const addRow = calcsUIHelper.addHealingBoxCluster;
            readSelection(`abilityBreakdownBody${skillPlacement}`).innerHTML = `
            ${addRow("Power",baseSkillPower,"")}
            <div class="basicsSummaryBox" id="lepicResultsBox">
                ${calcsUIHelper.addHealingBoxRows(bodyString,breakdownArray,abilityMap.displayStatsALT,index,returnObject,characterRef.name)}
            </div>
            <div class="abilityBreakdownHeader">DESCRIPTION</div>
            <div class="abilityBreakdownDescription">${tooltips.updateSubstatColor(abilityMap.desc)}</div>
            `;
        }
        else {
            return {avgDmgPerHit,avgDmgPerHitCharge}
        }
    },

    //Viessa
    //ability 1
    viessaFrostShardCalcs(index,returnObject,isCycleCalcs,nameOverride) {
        const characterRef = characters.Viessa;
        const settingsRef = characterRef.characterSettings;
        const skillPlacement = 1;
        const abilityMap = characterRef.abilities[`ability${skillPlacement}`][nameOverride ? nameOverride : "base"];
        const abilityTypeArray = abilityMap.type;
        const abilityMods = abilityMap.powerMods;

        const sumModifierBonus = calcs.getTotalSkillPowerModifier(index,abilityTypeArray);
        const baseSkillPower = calcs.getTotalSkillPower(index,abilityTypeArray);
        const abilityDR = calcs.getResistanceBasedDR(index,abilityTypeArray[0]);
        const crit = calcs.getCritComposites(returnObject);

        const basicInfo = {baseSkillPower,abilityDR,crit};

        const skillPowerModifier = abilityMods.base + sumModifierBonus;

        const damage = calcs.getCompositeDamageSpread(basicInfo,skillPowerModifier);

        const avgDmgPerHit = damage.AVG;

        const baseCooldown = abilityMods.cooldown;
        const {cooldown,DPS} = calcs.getDPSPerSkillInterval(index,avgDmgPerHit,baseCooldown,0);

        
        if (!isCycleCalcs) {
            let rowInjection = [
                {"name": "Cycled DPS","value": DPS,"unit": ""},
            ]

            const breakdownArray = [
                {"header": "PROJECTILE","value": damage,"modifier": skillPowerModifier,"hasCritAVG": true,"unit": "",//"magazineTypeWeapon": [turretTotalHits,totalTurretAVG1],
                    "rowInjection": [rowInjection,""],
                    "condition": false,"desc": ""},
                {"header": "ICE SHACKLE","value": null,"modifier": null,"hasCritAVG": true,"unit": "",//"magazineTypeWeapon": [turretTotalHits,totalTurretAVG1],
                    "condition": nameOverride,"desc": ""},
                {"header": "FROSTBITE","value": null,"modifier": null,"hasCritAVG": true,"unit": "",//"magazineTypeWeapon": [turretTotalHits,totalTurretAVG1],
                    "condition": nameOverride != "Absolute-Zero","desc": ""},
                {"header": "ICE NEEDLE","value": null,"modifier": null,"hasCritAVG": true,"unit": "",//"magazineTypeWeapon": [turretTotalHits,totalTurretAVG1],
                    "condition": nameOverride != "Hypothermia","desc": ""},

                
            ];
            const bodyString = `abilityBreakdownBody${skillPlacement}`;
            
            const addRow = calcsUIHelper.addHealingBoxCluster;
            readSelection(`abilityBreakdownBody${skillPlacement}`).innerHTML = `
            ${addRow("Power",baseSkillPower,"")}
            <div class="basicsSummaryBox" id="lepicResultsBox">
                ${calcsUIHelper.addHealingBoxRows(bodyString,breakdownArray,abilityMap.displayStatsALT,index,returnObject,characterRef.name)}
            </div>
            <div class="abilityBreakdownHeader">DESCRIPTION</div>
            <div class="abilityBreakdownDescription">${tooltips.updateSubstatColor(abilityMap.desc)}</div>
            `;
        }
        else {
            return {avgDmgPerHit}
        }
        // <div class="abilityBreakdownGeneralMessage">asdf.</div>
    },
    viessaFrostShardCalcsHypoStarter(index,returnObject,isCycleCalcs,nameOverride) {
        return customDamage.viessaFrostShardCalcs(index,returnObject,isCycleCalcs,"Hypothermia");
    },
    viessaFrostShardCalcsABS0Starter(index,returnObject,isCycleCalcs,nameOverride) {
        return customDamage.viessaFrostShardCalcs(index,returnObject,isCycleCalcs,"Absolute-Zero");
    },
    //ability 2
    viessaFrostRoadCalcs(index,returnObject,isCycleCalcs,nameOverride) {
        const characterRef = characters.Viessa;
        const settingsRef = characterRef.characterSettings;
        const skillPlacement = 2;
        const abilityMap = characterRef.abilities[`ability${skillPlacement}`][nameOverride ? nameOverride : "base"];
        const abilityTypeArray = abilityMap.type;
        const abilityMods = abilityMap.powerMods;

        const sumModifierBonus = calcs.getTotalSkillPowerModifier(index,abilityTypeArray);
        const baseSkillPower = calcs.getTotalSkillPower(index,abilityTypeArray);
        const abilityDR = calcs.getResistanceBasedDR(index,abilityTypeArray[0]);
        const crit = calcs.getCritComposites(returnObject);

        const basicInfo = {baseSkillPower,abilityDR,crit};

        const skillPowerModifier = abilityMods.base + sumModifierBonus;
        const isDamaging = nameOverride === "Absolute-Zero";
        const displayModifier = isDamaging ? skillPowerModifier : null;
        const damage = calcs.getCompositeDamageSpread(basicInfo,skillPowerModifier);
        const displayDamage = isDamaging ? damage : null;
        const avgDmgPerHit = damage.AVG;
        
        if (!isCycleCalcs) {
            // let rowInjection = [
            //     {"name": "Cooldown","value": cooldown,"unit": ""},
            //     {"name": "Interval Length (s)","value": interval,"unit": ""},
            //     {"name": "DPS","value": DPS,"unit": ""},
            // ]

            const breakdownArray = [
                {"header": "FROST ROAD","value": displayDamage,"modifier": displayModifier,"hasCritAVG": true,"unit": "",//"magazineTypeWeapon": [turretTotalHits,totalTurretAVG1],
                    // "rowInjection": [rowInjection,""],
                    "condition": false,"desc": ""},
                {"header": "ICE SHACKLE","value": null,"modifier": null,"hasCritAVG": true,"unit": "",//"magazineTypeWeapon": [turretTotalHits,totalTurretAVG1],
                    "condition": nameOverride,"desc": ""},
                {"header": "FROSTBITE","value": null,"modifier": null,"hasCritAVG": true,"unit": "",//"magazineTypeWeapon": [turretTotalHits,totalTurretAVG1],
                    "condition": nameOverride != "Absolute-Zero","desc": ""},
                {"header": "ICE NEEDLE","value": null,"modifier": null,"hasCritAVG": true,"unit": "",//"magazineTypeWeapon": [turretTotalHits,totalTurretAVG1],
                    "condition": nameOverride != "Hypothermia","desc": ""},
            ];
            const bodyString = `abilityBreakdownBody${skillPlacement}`;
            
            const addRow = calcsUIHelper.addHealingBoxCluster;
            readSelection(`abilityBreakdownBody${skillPlacement}`).innerHTML = `
            <div class="basicsSummaryBox" id="lepicResultsBox">
                ${calcsUIHelper.addHealingBoxRows(bodyString,breakdownArray,abilityMap.displayStatsALT,index,returnObject,characterRef.name)}
            </div>
            <div class="abilityBreakdownHeader">DESCRIPTION</div>
            <div class="abilityBreakdownDescription">${tooltips.updateSubstatColor(abilityMap.desc)}</div>
            `;
        }
        else {
            return {avgDmgPerHit}
        }
        // <div class="abilityBreakdownGeneralMessage">asdf.</div>
    },
    viessaFrostRoadCalcsHypoStarter(index,returnObject,isCycleCalcs,nameOverride) {
        return customDamage.viessaFrostRoadCalcs(index,returnObject,isCycleCalcs,"Hypothermia");
    },
    viessaFrostRoadCalcsABS0Starter(index,returnObject,isCycleCalcs,nameOverride) {
        return customDamage.viessaFrostRoadCalcs(index,returnObject,isCycleCalcs,"Absolute-Zero");
    },
    viessaColdBloodedCalcsTier0(index,returnObject,isCycleCalcs,nameOverride) {
        const characterRef = characters.Viessa;
        const settingsRef = characterRef.characterSettings;
        const skillPlacement = 2;
        const abilityMap = characterRef.abilities[`ability${skillPlacement}`]["Cold-Bloodedness"];
        const abilityTypeArray = abilityMap.type;
        const abilityMods = abilityMap.powerMods;

        if (settingsRef.isColdBloodedActive) {
            index.PowerOptimization += 0.05;
            index.SkillCost += -0.20;
            index.SkillCooldown += -0.20;
        }
        
        if (!isCycleCalcs) {
            // let rowInjection = [
            //     {"name": "Cooldown","value": cooldown,"unit": ""},
            //     {"name": "Interval Length (s)","value": interval,"unit": ""},
            //     {"name": "DPS","value": DPS,"unit": ""},
            // ]

            const breakdownArray = [
                {"header": "COLD-BLOODEDNESS","value": null,"modifier": null,"hasCritAVG": true,"unit": "",//"magazineTypeWeapon": [turretTotalHits,totalTurretAVG1],
                    "toggleElemID": ["isColdBloodedActive","Use Bonuses?"],
                    // "rowInjection": [rowInjection,""],
                    "condition": false,"desc": ""},
            ];
            const bodyString = `abilityBreakdownBody${skillPlacement}`;
            
            const addRow = calcsUIHelper.addHealingBoxCluster;
            readSelection(`abilityBreakdownBody${skillPlacement}`).innerHTML = `
            <div class="basicsSummaryBox" id="lepicResultsBox">
                ${calcsUIHelper.addHealingBoxRows(bodyString,breakdownArray,abilityMap.displayStatsALT,index,returnObject,characterRef.name)}
            </div>
            <div class="abilityBreakdownHeader">DESCRIPTION</div>
            <div class="abilityBreakdownDescription">${tooltips.updateSubstatColor(abilityMap.desc)}</div>
            `;
        }
    },
    //ability 3
    viessaColdSnapCalcs(index,returnObject,isCycleCalcs,nameOverride) {
        const characterRef = characters.Viessa;
        const settingsRef = characterRef.characterSettings;
        const skillPlacement = 3;
        const abilityMap = characterRef.abilities[`ability${skillPlacement}`][nameOverride ? nameOverride : "base"];
        const abilityTypeArray = abilityMap.type;
        const abilityMods = abilityMap.powerMods;

        const sumModifierBonus = calcs.getTotalSkillPowerModifier(index,abilityTypeArray);
        const baseSkillPower = calcs.getTotalSkillPower(index,abilityTypeArray);
        const abilityDR = calcs.getResistanceBasedDR(index,abilityTypeArray[0]);
        const crit = calcs.getCritComposites(returnObject);

        const basicInfo = {baseSkillPower,abilityDR,crit};

        const skillPowerModifier = abilityMods.base + sumModifierBonus;

        const damage = calcs.getCompositeDamageSpread(basicInfo,skillPowerModifier);

        const avgDmgPerHit = damage.AVG;

        const baseCooldown = abilityMods.cooldown;
        const {cooldown,DPS} = calcs.getDPSPerSkillInterval(index,avgDmgPerHit,baseCooldown,0);

        
        if (!isCycleCalcs) {
            // let rowInjection = [
            //     {"name": "Cooldown","value": cooldown,"unit": ""},
            //     {"name": "Interval Length (s)","value": interval,"unit": ""},
            //     {"name": "DPS","value": DPS,"unit": ""},
            // ]
            let rowInjection = [
                {"name": "Cycled DPS","value": DPS,"unit": ""},
            ]

            const breakdownArray = [
                {"header": "CHILL","value": damage,"modifier": skillPowerModifier,"hasCritAVG": true,"unit": "",//"magazineTypeWeapon": [turretTotalHits,totalTurretAVG1],
                    "rowInjection": [rowInjection,""],
                    "condition": false,"desc": ""},
                {"header": "ICE SHACKLE","value": null,"modifier": null,"hasCritAVG": true,"unit": "",//"magazineTypeWeapon": [turretTotalHits,totalTurretAVG1],
                    "condition": nameOverride && nameOverride != "Cold Snap Watch","desc": ""},
                {"header": "FROSTBITE","value": null,"modifier": null,"hasCritAVG": true,"unit": "",//"magazineTypeWeapon": [turretTotalHits,totalTurretAVG1],
                    "condition": nameOverride != "Absolute-Zero","desc": ""},
                {"header": "ICE NEEDLE","value": null,"modifier": null,"hasCritAVG": true,"unit": "",//"magazineTypeWeapon": [turretTotalHits,totalTurretAVG1],
                    "condition": nameOverride != "Hypothermia","desc": ""},
            ];
            const bodyString = `abilityBreakdownBody${skillPlacement}`;
            
            const addRow = calcsUIHelper.addHealingBoxCluster;
            readSelection(`abilityBreakdownBody${skillPlacement}`).innerHTML = `
            ${addRow("Power",baseSkillPower,"")}
            <div class="basicsSummaryBox" id="lepicResultsBox">
                ${calcsUIHelper.addHealingBoxRows(bodyString,breakdownArray,abilityMap.displayStatsALT,index,returnObject,characterRef.name)}
            </div>
            <div class="abilityBreakdownHeader">DESCRIPTION</div>
            <div class="abilityBreakdownDescription">${tooltips.updateSubstatColor(abilityMap.desc)}</div>
            `;
        }
        else {
            return {avgDmgPerHit}
        }
        // <div class="abilityBreakdownGeneralMessage">asdf.</div>
    },
    viessaColdSnapCalcsABS0Starter(index,returnObject,isCycleCalcs,nameOverride) {
        customDamage.viessaColdSnapCalcs(index,returnObject,isCycleCalcs,"Absolute-Zero");
    },
    viessaColdSnapCalcsHypoStarter(index,returnObject,isCycleCalcs,nameOverride) {
        customDamage.viessaColdSnapCalcs(index,returnObject,isCycleCalcs,"Hypothermia");
    },
    viessaColdSnapCalcsWatchStarter(index,returnObject,isCycleCalcs,nameOverride) {
        customDamage.viessaColdSnapCalcs(index,returnObject,isCycleCalcs,"Cold Snap Watch");
    },
    //ability 4
    viessaBlizzardCalcs(index,returnObject,isCycleCalcs,nameOverride) {
        const characterRef = characters.Viessa;
        const settingsRef = characterRef.characterSettings;
        const skillPlacement = 4;
        const abilityMap = characterRef.abilities[`ability${skillPlacement}`][nameOverride ? nameOverride : "base"];
        const abilityTypeArray = abilityMap.type;
        const abilityMods = abilityMap.powerMods;

        const sumModifierBonus = calcs.getTotalSkillPowerModifier(index,abilityTypeArray);
        const baseSkillPower = calcs.getTotalSkillPower(index,abilityTypeArray);
        const abilityDR = calcs.getResistanceBasedDR(index,abilityTypeArray[0]);
        const crit = calcs.getCritComposites(returnObject);

        const basicInfo = {baseSkillPower,abilityDR,crit};

        const skillPowerModifier = abilityMods.base + sumModifierBonus;
        const skillPowerModifierContinuous = abilityMods.baseContinuous + sumModifierBonus;

        const damage = calcs.getCompositeDamageSpread(basicInfo,skillPowerModifier);
        const damageContinuous = calcs.getCompositeDamageSpread(basicInfo,skillPowerModifierContinuous);

        const continuousDuration = abilityMods.duration * (1 + index.SkillDuration);
        const interval = abilityMods.interval;
        const totalTicks = Math.floor(continuousDuration/interval);

        const avgDmgPerTick = damageContinuous.AVG;
        const avgTotalTicks = totalTicks * damageContinuous.AVG;
        const avgDmgPerBurst = damage.AVG;
        const SumTotalAVG = damage.AVG + totalTicks * damageContinuous.AVG;
        const avgTotalDPS = SumTotalAVG/continuousDuration;

        const baseCooldown = abilityMods.cooldown;
        const {cooldown,DPS} = calcs.getDPSPerSkillInterval(index,SumTotalAVG,baseCooldown,0);

        
        if (!isCycleCalcs) {
            let rowInjectionSUMS = [
                {"name": "SUM Total AVG","value": SumTotalAVG,"unit": ""},
                {"name": "AVG DPS","value": avgTotalDPS,"unit": ""},
                {"name": "Cycled DPS","value": DPS,"unit": ""},
                // {"name": "Interval Length (s)","value": interval,"unit": ""},
                // {"name": "DPS","value": DPS,"unit": ""},
            ]

            const breakdownArray = [
                {"header": "BLIZZARD","value": damageContinuous,"modifier": skillPowerModifierContinuous,"hasCritAVG": true,"unit": "","magazineTypeWeapon": [totalTicks,avgTotalTicks],
                    // "rowInjection": [rowInjection,""],
                    "condition": false,"desc": ""},
                {"header": "BURST","value": damage,"modifier": skillPowerModifier,"hasCritAVG": true,"unit": "",//"magazineTypeWeapon": [turretTotalHits,totalTurretAVG1],
                    // "rowInjection": [rowInjection,""],
                    "condition": false,"desc": ""},
                {"header": "ICE SHACKLE","value": null,"modifier": null,"hasCritAVG": true,"unit": "",//"magazineTypeWeapon": [turretTotalHits,totalTurretAVG1],
                    "condition": nameOverride && nameOverride != "Glacial Cloud","desc": ""},
                {"header": "FROSTBITE","value": null,"modifier": null,"hasCritAVG": true,"unit": "",//"magazineTypeWeapon": [turretTotalHits,totalTurretAVG1],
                    "condition": nameOverride != "Absolute-Zero","desc": ""},
                {"header": "ICE NEEDLE","value": null,"modifier": null,"hasCritAVG": true,"unit": "",//"magazineTypeWeapon": [turretTotalHits,totalTurretAVG1],
                    "condition": nameOverride != "Hypothermia","desc": ""},
                {"header": "SUM","value": null,"modifier": null,"hasCritAVG": true,"unit": "",
                    "rowInjection": [rowInjectionSUMS,""],
                    "condition": false,"desc": ""},
            ];
            const bodyString = `abilityBreakdownBody${skillPlacement}`;
            
            const addRow = calcsUIHelper.addHealingBoxCluster;
            readSelection(`abilityBreakdownBody${skillPlacement}`).innerHTML = `
            ${addRow("Power",baseSkillPower,"")}
            <div class="basicsSummaryBox" id="lepicResultsBox">
                ${calcsUIHelper.addHealingBoxRows(bodyString,breakdownArray,abilityMap.displayStatsALT,index,returnObject,characterRef.name)}
            </div>
            <div class="abilityBreakdownHeader">DESCRIPTION</div>
            <div class="abilityBreakdownDescription">${tooltips.updateSubstatColor(abilityMap.desc)}</div>
            `;
        }
        else {
            return {avgDmgPerTick,avgTotalTicks,avgDmgPerBurst,avgTotalDPS,DPS,SumTotalAVG}
        }
        // <div class="abilityBreakdownGeneralMessage">asdf.</div>
    },
    viessaBlizzardCalcsHypoStarter(index,returnObject,isCycleCalcs,nameOverride) {
        customDamage.viessaBlizzardCalcs(index,returnObject,isCycleCalcs,"Hypothermia");
    },
    viessaBlizzardCalcsABS0Starter(index,returnObject,isCycleCalcs,nameOverride) {
        customDamage.viessaBlizzardCalcs(index,returnObject,isCycleCalcs,"Absolute-Zero");
    },
    viessaBlizzardCalcsCloudStarter(index,returnObject,isCycleCalcs,nameOverride) {
        customDamage.viessaBlizzardCalcs(index,returnObject,isCycleCalcs,"Glacial Cloud")
    },
    //passive
    viessaSphereCalcs(index,returnObject,isCycleCalcs,nameOverride) {
        const characterRef = characters.Viessa;
        const settingsRef = characterRef.characterSettings;
        const skillPlacement = 5;
        const abilityMap = characterRef.abilities[`ability${skillPlacement}`][nameOverride ? nameOverride : "base"];
        const abilityTypeArray = abilityMap.type;
        const abilityMods = abilityMap.powerMods;

        const sumModifierBonus = calcs.getTotalSkillPowerModifier(index,abilityTypeArray);
        const baseSkillPower = calcs.getTotalSkillPower(index,abilityTypeArray);
        const abilityDR = calcs.getResistanceBasedDR(index,abilityTypeArray[0]);
        const crit = calcs.getCritComposites(returnObject);

        const basicInfo = {baseSkillPower,abilityDR,crit};

        const skillPowerModifier = abilityMods.base + sumModifierBonus;

        const damage = calcs.getCompositeDamageSpread(basicInfo,skillPowerModifier);

        const avgDmgPerHit = damage.AVG;

        const iceNeedleModifierArray = [0,0.117,0.159,0.199,0.237];
        let iceNeedleDamage = null;
        let iceNeedleModifier = null;
        let iceNeedleDPS = null;
        if (nameOverride === "Hypothermia") {
            iceNeedleModifier = iceNeedleModifierArray[settingsRef.viessaIceNeedleStacks] + sumModifierBonus;
            iceNeedleDamage = calcs.getCompositeDamageSpread(basicInfo,iceNeedleModifier);
            iceNeedleDPS = iceNeedleDamage.AVG * 2;
        }

        
        if (!isCycleCalcs) {
            let rowInjectionNeedle = [
                {"name": "Needle Modifier","value": iceNeedleModifier,"unit": "%"},
                {"name": "Interval","value": 0.5,"unit": "s"},
                // {"name": "AVG/Tick","value": iceNeedleDamage.AVG || 0,"unit": ""},
                {"name": "DPS","value": iceNeedleDPS,"unit": ""},
            ]

            const breakdownArray = [
                {"header": "PROJECTILE","value": damage,"modifier": skillPowerModifier,"hasCritAVG": true,"unit": "",//"magazineTypeWeapon": [turretTotalHits,totalTurretAVG1],
                    // "rowInjection": [rowInjection,""],
                    "condition": false,"desc": ""},
                {"header": "ICE SHACKLE","value": null,"modifier": null,"hasCritAVG": true,"unit": "",//"magazineTypeWeapon": [turretTotalHits,totalTurretAVG1],
                    "condition": nameOverride && nameOverride != "Cold Cohesion","desc": ""},
                {"header": "FROSTBITE","value": null,"modifier": null,"hasCritAVG": true,"unit": "",//"magazineTypeWeapon": [turretTotalHits,totalTurretAVG1],
                    "condition": nameOverride != "Absolute-Zero","desc": ""},
                {"header": "ICE NEEDLE","value": iceNeedleDamage,"modifier": iceNeedleModifier,"hasCritAVG": true,"unit": "",//"magazineTypeWeapon": [turretTotalHits,totalTurretAVG1],
                    "rowInjection": [rowInjectionNeedle,""],
                    "sliderElemID": ["viessaIceNeedleStacks",0,4,1,"Stack Count"],
                    "condition": nameOverride != "Hypothermia","desc": ""},
                {"header": "EFFECT","value": null,"modifier": null,"hasCritAVG": true,"unit": "",//"magazineTypeWeapon": [turretTotalHits,totalTurretAVG1],
                    "condition": nameOverride && nameOverride != "Cold Cohesion","desc": ""},
                {"header": "EFFECT (COLOSSUS)","value": null,"modifier": null,"hasCritAVG": true,"unit": "",//"magazineTypeWeapon": [turretTotalHits,totalTurretAVG1],
                    "condition": nameOverride && nameOverride != "Cold Cohesion","desc": ""},
            ];
            const bodyString = `abilityBreakdownBody${skillPlacement}`;
            
            const addRow = calcsUIHelper.addHealingBoxCluster;
            readSelection(`abilityBreakdownBody${skillPlacement}`).innerHTML = `
            ${addRow("Power",baseSkillPower,"")}
            <div class="basicsSummaryBox" id="lepicResultsBox">
                ${calcsUIHelper.addHealingBoxRows(bodyString,breakdownArray,abilityMap.displayStatsALT,index,returnObject,characterRef.name)}
            </div>
            <div class="abilityBreakdownHeader">DESCRIPTION</div>
            <div class="abilityBreakdownDescription">${tooltips.updateSubstatColor(abilityMap.desc)}</div>
            `;
        }
        else {
            return {avgDmgPerHit}
        }
        // <div class="abilityBreakdownGeneralMessage">asdf.</div>
    },
    viessaSphereCalcsABS0Starter(index,returnObject,isCycleCalcs,nameOverride) {
        customDamage.viessaSphereCalcs(index,returnObject,isCycleCalcs,"Absolute-Zero");
    },
    viessaSphereCalcsHypoStarter(index,returnObject,isCycleCalcs,nameOverride) {
        customDamage.viessaSphereCalcs(index,returnObject,isCycleCalcs,"Hypothermia");
    },
    viessaSphereCalcsCohesionStarter(index,returnObject,isCycleCalcs,nameOverride) {
        customDamage.viessaSphereCalcs(index,returnObject,isCycleCalcs,"Cold Cohesion")
    },




    //LE GUNS
    generalizedWeaponBreakdown(index,returnObject,isCycleCalcs,weaponRef) {
        const settingsRef = weaponRef.weaponSettings;

        const magazineSize = weaponRef.magazine * (1+index.MagazineSize);//it rounds down and floors the value, but I still want to show the decimal so people know.
        const actualMagSize = Math.floor(magazineSize);


        //WEAPON MATH
        const preElementDamage = returnObject.firearmAttributeConversionBase;//firearm attribute dmg can't benefit from faction attack or type bonuses or the zenithMultiplier
        const damage = (preElementDamage + returnObject.firearmColossusATK) * (1 + returnObject.physicalTypeMulti);
        const physDR = calcs.getResistanceBasedDR(index,"DEF");
        const baseDamage = damage * physDR * returnObject.totalWPBonus;

        const critFirearm = calcs.getFirearmCritComposites(returnObject);
        const weaponDamage = calcs.getCompositeFirearmDamageSpread(baseDamage,critFirearm);

        const {activeElements,activeElementsDamage} = calcs.getActiveFirearmAttributesArrays(index,preElementDamage,critFirearm);
        const weaponDamageElemental = calcs.getCompositeFirearmDamageSpread(activeElementsDamage[0],critFirearm);

        const avgPerShot = weaponDamage.AVG + weaponDamageElemental.AVG;

        const totalAVGGun = avgPerShot * actualMagSize;

        // if (!isCycleCalcs) {console.log(weaponDamageElemental.perCrit)}

        let rowInjectionFirearmElemental = [
            {"name": "Element","value": activeElements[0],"unit": ""},
            {"name": "Hit","value": weaponDamageElemental.perHit,"unit": ""},
            {"name": "Crit","value": weaponDamageElemental.perCrit,"unit": ""},
            {"name": "AVG","value": weaponDamageElemental.AVG,"unit": ""},
        ]
        if (activeElements[0] === "None") {rowInjectionFirearmElemental = [];}
        const rowInjectionSums = [
            {"name": "Magazine","value": magazineSize,"unit": ""},
            {"name": "AVG/Shot","value": avgPerShot,"unit": ""},
            {"name": "SUM AVG","value": totalAVGGun,"unit": ""},
        ]
        const breakdownArray = [
            {"header": "FIREARM DAMAGE","value": weaponDamage,"FirearmATK": damage,"hasCritAVG": true,"unit": "",
                "condition": false,"desc": "Part-specific <span>Weak Point Modifiers</span>, and <span>Type Bonuses</span>, will automatically adjust based on the part selected, unless forcibly disabled in settings."},
            {"header": "FIREARM ATTRIBUTE","value": null,"modifier": null,"hasCritAVG": true,"unit": "",
                "rowInjection": [rowInjectionFirearmElemental,""],//"rowInjection2": [rowInjectionSums,"SUM"],//"rowInjection3": [rowInjectionSums,""],
                "condition": !rowInjectionFirearmElemental.length,"desc": ""},
            {"header": "FIREARM SUM","value": null,"modifier": null,"hasCritAVG": true,"unit": "",
                "rowInjection": [rowInjectionSums,""],
                "condition": false,"desc": ""},

            // "magazineTypeWeapon": [actualMagSize,weaponDamage.AVG],
        ];
        const bodyString = `weaponBreakdownBody1`;
        
        const addRow = calcsUIHelper.addHealingBoxCluster;
        readSelection(`weaponBreakdownBody1`).innerHTML += `
        <div class="basicsSummaryBox" id="lepicResultsBox">
            ${calcsUIHelper.addHealingBoxRows(bodyString,breakdownArray,null,index,returnObject,weaponRef.name,true)}
        </div>
        `;
    },
    secretGardenCalcsTier0(index,returnObject,isCycleCalcs) {
        const weaponRef = sniperList["Secret Garden"];
        const settingsRef = weaponRef.weaponSettings;

        const currentStacks = +settingsRef.gardenStackCount;
        const stackBonusRef = [0.00,0.05,0.21,0.37]
        const currentBonus = stackBonusRef[currentStacks]

        index.PowerOptimization += currentBonus;
        index["FirearmATK%"] += currentBonus;

        const rowInjection = [
            {"name": "+Firearm ATK %","value": currentBonus,"unit": "%"},
            {"name": "+Skill Power Optimization","value": currentBonus,"unit": "%"},
        ]
        const breakdownArray = [
            {"header": "DIMENSION SKILL","value": null,"modifier": null,"hasCritAVG": null,"unit": "",
                "condition": false,"desc": ""},
            {"header": "PEST CONTROL","value": null,"modifier": null,"hasCritAVG": null,"unit": "","sliderElemID": ["gardenStackCount",0,3,1,"Stack Count"],"rowInjection": [rowInjection,""],
                "condition": false,"desc": ""},
        ];
        const bodyString = `weaponBreakdownBody1`;
        
        const addRow = calcsUIHelper.addHealingBoxCluster;
        readSelection(`weaponBreakdownBody1`).innerHTML = `
        <div class="basicsSummaryBox" id="lepicResultsBox">
        <div class="traitMegaTitleHeader">UNIQUE ABILITY</div>
            ${calcsUIHelper.addHealingBoxRows(bodyString,breakdownArray,weaponRef.displayStatsALT,index,returnObject,"Secret Garden",true)}
        </div>
        <div class="abilityBreakdownHeader">DESCRIPTION</div>
        <div class="abilityBreakdownDescription">${tooltips.updateSubstatColor(weaponRef.desc)}</div>
        `;
    },
    blueBeetleCalcsTier0(index,returnObject,isCycleCalcs) {
        const weaponRef = sniperList["Blue Beetle"];
        const settingsRef = weaponRef.weaponSettings;

        index.SkillCritRate += settingsRef.arcaneWaveActive ? 0.30 : 0;

        const rowInjection = [
            {"name": "+Skill Crit Rate","value": settingsRef.arcaneWaveActive ? 0.30 : 0,"unit": "%"},
        ]
        const breakdownArray = [
            {"header": "ARCANE ENERGY","value": null,"modifier": null,"hasCritAVG": null,"unit": "","toggleElemID": ["arcaneWaveActive","Use +Skill Crit Rate?"],"rowInjection": [rowInjection,""],
                "condition": false,"desc": ""},
            {"header": "PURIFICATION","value": null,"modifier": null,"hasCritAVG": null,"unit": "",
                "condition": false,"desc": ""},
        ];
        const bodyString = `weaponBreakdownBody1`;
        
        const addRow = calcsUIHelper.addHealingBoxCluster;
        readSelection(`weaponBreakdownBody1`).innerHTML = `
        <div class="basicsSummaryBox" id="lepicResultsBox">
        <div class="traitMegaTitleHeader">UNIQUE ABILITY</div>
            ${calcsUIHelper.addHealingBoxRows(bodyString,breakdownArray,weaponRef.displayStatsALT,index,returnObject,"Blue Beetle",true)}
        </div>
        <div class="abilityBreakdownHeader">DESCRIPTION</div>
        <div class="abilityBreakdownDescription">${tooltips.updateSubstatColor(weaponRef.desc)}</div>
        `;
    },
    peacemakerCalcsTier0(index,returnObject,isCycleCalcs) {
        const weaponRef = sniperList["Peace Maker"];
        const settingsRef = weaponRef.weaponSettings;

        const currentStacks = +settingsRef.peacemakerStackCount;
        const stackBonusRef = [0.00,0.05,0.145,0.24,0.335,0.43]
        const currentBonus = stackBonusRef[currentStacks]

        index.PowerRatioNonAttribute += currentBonus;

        const rowInjection = [
            {"name": "+Non-Attribute Power Ratio","value": currentBonus,"unit": "%"},
        ]
        const breakdownArray = [
            {"header": "SINGLE RELOAD FOR PEACE","value": null,"modifier": null,"hasCritAVG": null,"unit": "","sliderElemID": ["peacemakerStackCount",0,5,1,"Stack Count"],"rowInjection": [rowInjection,""],
                "condition": false,"desc": ""},
            {"header": "AIMING AT MAX STACKS","value": null,"modifier": null,"hasCritAVG": null,"unit": "",
                "condition": false,"desc": ""},
        ];
        const bodyString = `weaponBreakdownBody1`;
        
        const addRow = calcsUIHelper.addHealingBoxCluster;
        readSelection(`weaponBreakdownBody1`).innerHTML = `
        <div class="basicsSummaryBox" id="lepicResultsBox">
        <div class="traitMegaTitleHeader">UNIQUE ABILITY</div>
            ${calcsUIHelper.addHealingBoxRows(bodyString,breakdownArray,weaponRef.displayStatsALT,index,returnObject,"Peace Maker",true)}
        </div>
        <div class="abilityBreakdownHeader">DESCRIPTION</div>
        <div class="abilityBreakdownDescription">${tooltips.updateSubstatColor(weaponRef.desc)}</div>
        `;
    },
    nazDevotionCalcsTier0(index,returnObject,isCycleCalcs) {
        const weaponName = "Nazeistra's Devotion"
        const weaponRef = sniperList[weaponName];
        const settingsRef = weaponRef.weaponSettings;

        const defDebuff = -0.30;
        const currentAmount = settingsRef.defDebuffActive ? defDebuff : 0;
        index.enemyDEFResistanceReduction += currentAmount;

        const rowInjection = [
            {"name": "-Enemy DEF%","value": currentAmount,"unit": "%"},
        ]
        const breakdownArray = [
            {"header": "DEVOTION MARK","value": null,"modifier": null,"hasCritAVG": null,"unit": "",
                "toggleElemID": ["defDebuffActive","Use DEF Debuff?"],"rowInjection": [rowInjection,""],
                "condition": false,"desc": ""},
            {"header": "ON ALLIED HIT","value": null,"modifier": null,"hasCritAVG": null,"unit": "",
                "condition": false,"desc": ""},
        ];
        const bodyString = `weaponBreakdownBody1`;
        
        const addRow = calcsUIHelper.addHealingBoxCluster;
        readSelection(`weaponBreakdownBody1`).innerHTML = `
        <div class="basicsSummaryBox" id="lepicResultsBox">
        <div class="traitMegaTitleHeader">UNIQUE ABILITY</div>
            ${calcsUIHelper.addHealingBoxRows(bodyString,breakdownArray,weaponRef.displayStatsALT,index,returnObject,weaponName,true)}
        </div>
        <div class="abilityBreakdownHeader">DESCRIPTION</div>
        <div class="abilityBreakdownDescription">${tooltips.updateSubstatColor(weaponRef.desc)}</div>
        `;
    },
    ...localInsertionDamage
}





let conditionalHelpers = {
    addAbilityInfoRows(abilityRef,index,returnObject) {
        // createHTML.basicsRow(tooltipID,name,value,isRounded,unit)
        const addRow = createHTML.basicsRow;
        const addGreenRow = createHTML.basicsRowAbilityHeader;
        let rowString = "";

        for (let entry of abilityRef) {
            if (entry.isHeader) {rowString += addGreenRow("",entry.statName,"",false,"");continue;}
            else {
                const statName = entry.statName;
                let statType = entry.statType;
                let statValue = entry.value;
                const isModifiedByIndex = entry.isModified;
                const limit = entry.limit;
                const rangeBonus = Math.min(limit,index.SkillRange+1);
                let unit = "";
                let isRounded = true;

                if (statType === "cooldown") {
                    if (isModifiedByIndex) {statValue *= (1 + Math.max(-0.9,index.SkillCooldown));}//cooldown caps at -90%
                    unit = "s";
                }
                else if (statType === "duration") {
                    if (isModifiedByIndex) {statValue *= (1 + index.SkillDuration);}
                    unit = "s";
                }
                else if (statType === "range") {
                    const addedRangeLimit = statValue * rangeBonus;
                    statValue = addedRangeLimit; 
                    unit = "m";
                }
                else if (statType === "cost") {if (isModifiedByIndex) {statValue *= (1 + index.SkillCost);}}
                else if (statType === "magazine") {if (isModifiedByIndex) {statValue *= (1 + index.MagazineSize);}}
                if (entry.isUnlabeledPercent) {unit = "%";}

                rowString += addRow("",statName,statValue,isRounded,unit);
                if (limit) {rowString += addRow("","Max Range",limit,true,"%");}

            }
        }
        return rowString;
    },
    //Check what weapon a mutator is equipped on, and apply the bonus of the mutator to that given weapon's specific bonus keys
    applySpecifiedMutatorBaseBonus(index,bonusType,bonusAmount,mutatorName) {
        let weaponPath = globalRecords.weapons;

        if (weaponPath.primaryMutator === mutatorName) {index[`Primary${bonusType}`] += bonusAmount;}
        else if (weaponPath.secondaryMutator === mutatorName) {index[`Secondary${bonusType}`] += bonusAmount;}
    },
    getActiveUniqueStatuses(index) {
        let activeStatus = 0;
        activeStatus += index.outSLOW ? 1 : 0;
        activeStatus += index.outBLEED ? 1 : 0;
        activeStatus += index.outBURN ? 1 : 0;
        activeStatus += index.outOVERLOADED ? 1 : 0;
        activeStatus += index.outCORRODED ? 1 : 0;
        return activeStatus;
    },
    returnIndexTagSums(index,tagsArray,prefix) {
        let statistic = 0;
        if (tagsArray === -1) {return -1;}
        for (tag of tagsArray) {
            if (index[tag]) {statistic += index[tag];}
            if (prefix) {
                let prefixTag = prefix + tag;
                if (index[prefixTag]) {statistic += index[prefixTag];}
            }
        }
        return statistic;//prefix is for Primary or Secondary Elemental/Mod Damage stuff from mutators and the like.
    },
    getIndexSumsModDots(index,prefix) {
        let modDamageTagsArray = [
            "ModDamage"
        ];

        return conditionalHelpers.returnIndexTagSums(index,modDamageTagsArray,prefix);
    },
    addSpacesToTagNames(string) {
        //&nbsp; is a space
        return string.replace(/([a-z])([A-Z])/g, '$1&nbsp;$2');
    },
    addMissingTags(primaryObject,secondaryObject,tagsArray,actualTagArray) {
        if (primaryObject[secondaryObject]) {
            if (!primaryObject[secondaryObject][tagsArray].length) {return;}
            for (let tag of primaryObject[secondaryObject][tagsArray]) {
                let tagFound = false;
                for (let innerTag of primaryObject[tagsArray]) {
                    if (innerTag === tag) {
                        tagFound = true;
                        break;
                    }
                }
                if (!tagFound) {
                    actualTagArray.push(tag);
                }
            }
        }
    },
    updateMVDisplay(elemID,checkID) {
        if (readSelection(checkID).checked) {
            readSelection(elemID).style.display = "block"
        }
        else {
            readSelection(elemID).style.display = "none"
        }
    },
    addBreakdownStatusRows(index) {
        let returnString = "";
        let returnHeader = "<div class='basicsDRheaderTitle'>ACTIVE STATUSES</div>";
        let addRow = createHTML.basicsRow;

        returnString += index.outSLOW ? addRow("","","SLOW",false) : "";
        returnString += index.outBLEED ? addRow("","","BLEED",false) : "";
        returnString += index.outBURN ? addRow("","","BURN",false) : "";
        returnString += index.outCORRODED ? addRow("","","CORRODED",false) : "";
        returnString += index.outOVERLOADED ? addRow("","","OVERLOADED",false) : "";
        returnString += index.outEXPOSED ? addRow("","","EXPOSED",false) : "";

        if (returnString) {return returnHeader + returnString;}
        else {return "";}
    },
    addBreakdownSpeedRows(index,allSpeedTags,totalHitsFactor) {
        let returnString = "";
        let addRow = createHTML.basicsRow;
        let addSpaces = conditionalHelpers.addSpacesToTagNames;
        let returnHeader = "<div class='basicsDRheaderTitle'>SPEED FACTORS</div>";
        if (allSpeedTags.length) {
            for (let tag of allSpeedTags) {
                returnString += index[tag] ? addRow("",addSpaces(tag),index[tag],true,"%") : "";
            }
        }
        if (totalHitsFactor) {returnString += addRow("","Total Hits",totalHitsFactor,false);}

        if (returnString) {return returnHeader + returnString;}
        else {return "";}
    },
    addBreakdownDamageRows(index,allDamageTags) {
        let returnString = "";
        let addRow = createHTML.basicsRow;
        let addSpaces = conditionalHelpers.addSpacesToTagNames;
        let returnHeader = "<div class='basicsDRheaderTitle'>DAMAGE FACTORS</div>";
        returnHeader += "<div class='dpsFactorDisclaimer'>Note that timed/limited bonuses are assumed to be active at all times when selected.</div>";
        if (allDamageTags.length) {
            for (let tag of allDamageTags) {
                returnString += index[tag] ? addRow("",addSpaces(tag),index[tag],true,"%") : "";
            }
        }
        
        if (returnString) {return returnHeader + returnString;}
        else {return "";}
    },
    addBreakdownCritRows(index,allCritTags,allCritDamageTags,showBaseCritDMG) {
        let returnString = "";
        let addRow = createHTML.basicsRow;
        let addSpaces = conditionalHelpers.addSpacesToTagNames;
        let returnHeader = "<div class='basicsDRheaderTitle'>CRIT FACTORS</div>";
        if (allCritTags.length) {
            for (let tag of allCritTags) {
                returnString += index[tag] ? addRow("",addSpaces(tag),index[tag],true,"%") : "";
            }
        }
        if (showBaseCritDMG) {returnString += addRow("","Base Crit Damage",0.50,true,"%");}
        if (allCritDamageTags.length) {
            for (let tag of allCritDamageTags) {
                returnString += index[tag] ? addRow("",addSpaces(tag),index[tag],true,"%") : "";
            }
        }

        if (returnString) {return returnHeader + returnString;}
        else {return "";}
    },
    addBreakdownWeakspotRows(index,allWeakspotTags) {
        let returnString = "";
        let addRow = createHTML.basicsRow;
        let addSpaces = conditionalHelpers.addSpacesToTagNames;
        let returnHeader = "<div class='basicsDRheaderTitle'>WEAKSPOT FACTORS</div>";
        returnString += addRow("","Base Weakspot Bonus",1,true,"%");
        if (allWeakspotTags) {
            for (let tag of allWeakspotTags) {
                returnString += index[tag] ? addRow("",addSpaces(tag),index[tag],true,"%") : "";
            }
        }

        if (returnString) {return returnHeader + returnString;}
        else {return "";}
    },
    updateGlobalToggle(elemID,comparableToggleID) {
        globalRecords[elemID] = !globalRecords[elemID];

        if (!globalRecords[elemID]) {globalRecords[comparableToggleID] = true;}
        updateFormulas();
    }
}









let moduleQueryFunctions = {
    clearQueryResultsDisplay() {
        readSelection("moduleQueryBoxHolder").innerHTML = "";
    },
    clearInvalidQuerySelections() {
        const referenceArray = globalRecords.character.modQueryOptions;
        let isValidMod = false;
        for (let entry of referenceArray) {
            if (entry === readSelection("queryMod").value && entry != "") {isValidMod = true;break;}
        }
        if (!isValidMod) {
            for (let entry of referenceArray) {if (entry != "") {readSelection("queryMod").value = entry;break;}}
        }
    },
    getUpdatedQueryModSelections(queryType) {
        const characterRef = globalRecords.character;
        const currentCharacter = characterRef.currentCharacter;
        const currentCharacterMods = characterRef.mods;
        const abilityArray = characterRef.abilityArray;
        const currentAbilityBreakdown = characterRef.currentAbilityBreakdown;

        let newModArray1 = [...currentCharacterMods];
        let newModArray2 = [...currentCharacterMods].slice(2);//to exclude the first 2 mods, the augment and the subattack mod
        characterRef.modQueryOptions = [...currentCharacterMods].slice(2);

        const modKeyReference = Object.keys(modData);


        // Array of strings that will be the option names
        const queryLister = readSelection("queryModList");
        queryLister.innerHTML = "";
        // Loop through the array and create option elements
        newModArray2.forEach(function(optionName) {
            const option = document.createElement("option");
            option.textContent = optionName; // Set the display name
            queryLister.appendChild(option); // Append the option to the select element
        });

        let isValidMod = false;
        for (let entry of newModArray2) {
            if (entry === readSelection("queryMod").value && entry != "") {isValidMod = true;break;}
        }
        if (!isValidMod) {
            for (let entry of newModArray2) {if (entry != "") {readSelection("queryMod").value = entry;break;}}
        }

        if (queryType === "Ability") {
            const abilityLister = readSelection("queryAbilityList");
            const abilityOptionLister = readSelection("queryAbilityOptionList");

            //ability array handling is done within userTriggers.updateSelectedMod
            const arrayRef = characterRef.abilityArray;
            const abilityRefs = characters[currentCharacter].abilities;

            //ABILITY KEYS
            let abilityRefArray = [];
            for (let i=1;i<=5;i++) {
                const path = arrayRef[i-1] === 0 ? "base" : arrayRef[i-1];
                const currentPath = abilityRefs[`ability${i}`][path];
                abilityRefArray.push(currentPath.name);
            }
            const abilityRefSet = new Set(abilityRefArray);
            readSelection("queryAbilityBoxHolder").style.display = "flex";
            abilityLister.innerHTML = "";
            abilityRefArray.forEach(function(optionName) {
                const option = document.createElement("option");
                option.textContent = optionName;
                abilityLister.appendChild(option);
            });
            if (!abilityRefSet.has(readSelection("queryAbility").value)) {readSelection("queryAbility").value = abilityRefArray[0]}
            const selectedAbilityIndexReference = abilityRefArray.indexOf(readSelection("queryAbility").value);
            const selectedAbilityPath = abilityRefs[`ability${selectedAbilityIndexReference+1}`][arrayRef[selectedAbilityIndexReference] === 0 ? "base" : arrayRef[selectedAbilityIndexReference]];
            const currentAbilityReturnOptions = selectedAbilityPath.returnStatOptions;

            //ABILITY OPTION RETURN KEYS
            const optionKeys = Object.keys(currentAbilityReturnOptions);
            const optionKeysSet = new Set(optionKeys);
            abilityOptionLister.innerHTML = "";
            if (!optionKeys.length) {readSelection("queryAbilityOption").value = "N/A (or not coded yet)"}
            else {
                optionKeys.forEach(function(optionName) {
                    const option = document.createElement("option");
                    option.textContent = optionName || "N/A (or not coded yet)";
                    abilityOptionLister.appendChild(option);
                });
                if (!optionKeysSet.has(readSelection("queryAbilityOption").value)) {readSelection("queryAbilityOption").value = optionKeys[optionKeys.length-1]}
            }
            const selectedAbilityOptionIndexReference = optionKeys.indexOf(readSelection("queryAbilityOption").value);
            const selectedAbilityOptionPath = !optionKeys.length ? "N/A (or not coded yet)" : currentAbilityReturnOptions[optionKeys[selectedAbilityOptionIndexReference]];

            return {selectedAbilityIndexReference,selectedAbilityOptionPath}
        }
        else if (queryType === "Stat") {
            //STAT OPTION RETURN KEYS
            readSelection("queryAbilityBoxHolder").style.display = "none";
            const abilityOptionLister = readSelection("queryAbilityOptionList");
            const statRefs = characterRef.statTargets;


            const optionKeys = Object.keys(statRefs);
            const optionKeysSet = new Set(optionKeys);
            abilityOptionLister.innerHTML = "";
            if (!optionKeys.length) {readSelection("queryAbilityOption").value = "N/A (or not coded yet)"}
            else {
                optionKeys.forEach(function(optionName) {
                    const option = document.createElement("option");
                    option.textContent = optionName || "N/A (or not coded yet)";
                    abilityOptionLister.appendChild(option);
                });
                if (!optionKeysSet.has(readSelection("queryAbilityOption").value)) {readSelection("queryAbilityOption").value = optionKeys[0]}//default to the first return option if an invalid input was found
            }
            const selectedAbilityOptionIndexReference = optionKeys.indexOf(readSelection("queryAbilityOption").value);
            const selectedAbilityOptionPath = !optionKeys.length ? "N/A (or not coded yet)" : statRefs[optionKeys[selectedAbilityOptionIndexReference]];
            const selectedAbilityIndexReference = 0;//just so something is returned despite not being used on stat targets

            return {selectedAbilityIndexReference,selectedAbilityOptionPath}
        }
    },
    getModuleQueryResults() {
        //never allow a blank query, default to ability if all else fails
        const typeRef = {"Ability": "","Stat": ""}
        if (typeRef[readSelection("queryType").value] === undefined) {readSelection("queryType").value = "Ability"}
        const queryType = readSelection("queryType").value;

        const {selectedAbilityIndexReference,selectedAbilityOptionPath} = moduleQueryFunctions.getUpdatedQueryModSelections(queryType);
        moduleQueryFunctions.clearInvalidQuerySelections();
        const characterRef = globalRecords.character;
        const currentCharacter = characterRef.currentCharacter;
        const currentCharacterMods = characterRef.mods;
        const abilityArray = characterRef.abilityArray;
        const currentAbilityBreakdown = characterRef.currentAbilityBreakdown;

        let newModArray1 = [...currentCharacterMods];
        const modSelection = readSelection("queryMod").value;
        //abort invalid or empty queries
        if (modSelection === "" || selectedAbilityOptionPath === "N/A (or not coded yet)") {
            readSelection("moduleQueryBoxHolder").innerHTML = "No valid query could be completed under your current settings.<br><br>This is likely because the target you selected:<br>- Doesn't have any mods equipped to compare against<br>- Isn't meant to be optimized, maybe it just gives a bonus to other abilities<br>- Has not been coded with options to optimize around. Yet.";
            return;
        }



        const indexToModify = characterRef.modQueryOptions.indexOf(modSelection) + 2;
        const modKeyReference = Object.keys(modData);
        const abilityTarget = `ability${selectedAbilityIndexReference+1}`;
        const targetReturnValue = `${selectedAbilityOptionPath}`;


        newModArray1[indexToModify] = "";
        const modCategoriesHolder = [];
        for (let entry of newModArray1) {
            if (modData[entry]) {
                if (modData[entry].category === "") {continue;}
                modCategoriesHolder.push(modData[entry].category);
            }
        }
        const categorySet = new Set(modCategoriesHolder);
        const modSet = new Set(newModArray1);
        readSelection("moduleQueryBoxHolder").innerHTML = "";

        let queryResultsArray = [];
        if (queryType === "Ability") {
            for (let entry of modKeyReference) {
                if (categorySet.has(modData[entry].category) || modSet.has(entry) || entry === "") {continue}
                newModArray1[indexToModify] = entry;

                queryResultsArray.push(
                    {"modName":entry,"returnedValue":updateFormulas(true,newModArray1).returnObject[abilityTarget][targetReturnValue],"category": modData[entry].category}
                )
            }
        }
        else if (queryType === "Stat") {
            console.log(targetReturnValue)
            for (let entry of modKeyReference) {
                if (categorySet.has(modData[entry].category) || modSet.has(entry) || entry === "") {continue}
                newModArray1[indexToModify] = entry;

                queryResultsArray.push(
                    {"modName":entry,"returnedValue":updateFormulas(true,newModArray1).returnObject[targetReturnValue],"category": modData[entry].category}
                )
            }
        }


        // console.log(queryResultsArray)

        queryResultsArray.sort((a, b) => b.returnedValue - a.returnedValue); // Sort in ascending order

        let referencePoint = {};
        for (let entry of queryResultsArray) {
            if (entry.modName === modSelection) {
                referencePoint = {...entry};
                queryResultsArray.splice(queryResultsArray.indexOf(entry),1)
                break;
            }
        }
        const highestValue = queryResultsArray[0].returnedValue
        const lowestValue = queryResultsArray[queryResultsArray.length-1].returnedValue;
        const referenceValue = referencePoint.returnedValue;
        
        // Get the container for the table
        const table = document.getElementById('moduleQueryBoxHolder');
        function createRow(entry) {
            const totalRange = highestValue - lowestValue;//the range between the lowest value seen, and the highest value seen, used to enact proportions between the ref point
            const referencePositionPercentage = ((referenceValue - lowestValue) / totalRange) * 100;//ref point placement
            const percentageDifference = ((entry.returnedValue - referenceValue) / totalRange) * 100;//this is ONLY for the bar % width, not the diff %

            //And then this is for the actual value % diff, not the bar width
            const percentageDifferenceCheck = entry.returnedValue/referenceValue;
            const percentageDifferenceValue = percentageDifferenceCheck >= 0 ? (percentageDifferenceCheck-1) * 100 : (1 - percentageDifferenceCheck) * -100;
        
            //row creation
            const row = document.createElement('div');
            row.classList.add('modsQueryResultsRow');
        
            //name generation
            const nameDiv = document.createElement('div');
            nameDiv.classList.add('modsQueryResultsRowName');
            nameDiv.textContent = `${percentageDifferenceValue>=0 ? "+" : ""}${(percentageDifferenceValue).toFixed(2)}% ${entry.modName} (${(+entry.returnedValue.toFixed(0)).toLocaleString()})`;
        
            //bar div
            const barContainer = document.createElement('div');
            barContainer.classList.add('modsQueryResultsRowBarBoxHolder');
        
            //reference tick mark
            const refMark = document.createElement('div');
            refMark.classList.add('modsQueryResultsRowBarTickMark');
            refMark.style.position = 'absolute';
            refMark.style.left = `${referencePositionPercentage}%`;//Set to ref point
            refMark.style.width = '2px';
            refMark.style.height = '100%';
            refMark.style.backgroundColor = 'white';
            refMark.style.zIndex = '1';
        
            //bar
            const bar = document.createElement('div');
            bar.classList.add('modsQueryResultsRowBar');
            bar.style.position = 'absolute';
            bar.style.height = '100%';
        
            if (percentageDifference < 0) {
                // Negative bar (to the left of the reference point)
                bar.style.width = `${Math.abs(percentageDifference)}%`;
                bar.style.backgroundColor = 'red';
                bar.style.left = `${referencePositionPercentage - Math.abs(percentageDifference)}%`;
            } else {
                // Positive bar (to the right of the reference point)
                bar.style.width = `${percentageDifference}%`;
                bar.style.backgroundColor = 'green';
                bar.style.left = `${referencePositionPercentage}%`;
            }
        
            //add to bar container
            barContainer.appendChild(refMark);
            barContainer.appendChild(bar);
            //add to row
            row.appendChild(nameDiv);
            row.appendChild(barContainer);
            //add to table
            table.appendChild(row);
        }
        
        //add a row for each entry in the comparison cycles
        queryResultsArray.forEach(entry => createRow(entry));
    }
}