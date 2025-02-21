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
    clamp(value,floor,ceiling) {
        return Math.min(ceiling,Math.max(floor,value))
    },


    getTotalSkillPowerModifier(index,abilityTypeArray) {
        let sumModifierBonus = index.PowerModifierBase;
        for (let type of abilityTypeArray) {sumModifierBonus += index[`PowerModifier${type.replace(/-/g, "")}`];}
        return sumModifierBonus;
    },
    getTotalSkillPower(index,abilityTypeArray,skillDependentModifier) {
        const powerOptimization = index.PowerOptimization + index.PowerOptimizationCORE;
        skillDependentModifier = (skillDependentModifier || 1) + index.CharacterSkillMultiplier;

        const reactorLevel = globalRecords.reactor.level;
        const reactorLevelBonuses = [0, 331.829, 663.658, 995.487, 1327.316, 1659.144];
        const baseValue = 11060.963;
        const baseSkillPowerValue = baseValue + reactorLevelBonuses[reactorLevel];

        const basePowerRatio = 1 + index.PowerRatioBase;
        let baseSkillPower = (baseSkillPowerValue * powerOptimization * skillDependentModifier + index.SkillAttackColossus) * basePowerRatio;
        for (let type of abilityTypeArray) {baseSkillPower *= Math.max(0.001,1 + index[`PowerRatio${type.replace(/-/g, "")}`]);}

        // return calcs.customTruncate(baseSkillPower + 0.00001,4);
        return baseSkillPower;
    },
    getResistanceBasedDR(index,typeName) {
        const currentBoss = globalRecords.boss.currentBoss;
        const resistString = `enemy${typeName.replace(/-/g, '')}ResistanceReduction`;
        const reductionValue = index[resistString] + index[resistString+"CORE"];
        const resistReduction = Math.max(0,1 + reductionValue);

        let basicStats = bossData[currentBoss].levelKeys[globalRecords.playerCount].lvlStats;
        const currentResistValue = basicStats[typeName] * resistReduction;

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
        const interval = cooldown + (extraUsageDuration || 0);//extraDuration is basically an animation time where the cooldown starts AFTER the animation is over. So kyle thrusters, but not ines pingpong
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

    getReloadTime(index,baseReloadTime,weaponRef) {
        const reloadComposite = calcs.clamp(index.ReloadSpeed + index.ReloadSpeedCORE,-0.30,0.90);
        //positive numbers are speed boosts, negative is bad. A reload time divided by a larger number makes it smaller, but a smaller number makes it bigger, etc.
        let reloadTime = (baseReloadTime - weaponRef.ZoomInHoldDelayTime) / (1 + reloadComposite);

        return reloadTime;
    },
    getBeamChargeTime(index,baseChargeTime,weaponRef) {
        const chargeComposite = calcs.clamp(index.BeamChargeSpeed + index.BeamChargeSpeedCORE,-0.30,10);
        //positive numbers are speed boosts, negative is bad. A reload time divided by a larger number makes it smaller, but a smaller number makes it bigger, etc.

        return baseChargeTime / (1 + chargeComposite);
    },
    getFirearmATK(index,weaponRef,uniqueMulti) {
        const baseFirearmATK = weaponRef.baseATK;
        const needlessBullshitAmount = baseFirearmATK * (index.independentScalar + index.independentScalarCORE);
        uniqueMulti = uniqueMulti || 1;
        uniqueMulti += index.WeaponUniqueMultiplier + index.WeaponUniqueMultiplierCORE;

        const attackPercent = index["FirearmATK%"] + index["FirearmATK%CORE"];
        const onHitBonus = index["FirearmATK%OnHit"] + index["FirearmATK%OnHitCORE"];//while called onhit it's more of an enemy debuff
        const weaknessCheck = globalRecords.useFirearmPhysical ? globalRecords.boss.currentBossPartType === weaponRef.physicalType : false;

        const colossusCheck = globalRecords.boss.enemyType === "Colossus";
        const baseAdvantage = 1 + weaponRef.physicalTypeBonus + (colossusCheck ? 0.10 : 0);
        const bonusAdvantage = index.TypeBonus + index.TypeBonusCORE;
        const endAdvantage = calcs.customTruncate((baseAdvantage * (1 + bonusAdvantage) + 0.00001),4);
        const physicalTypeBonus = endAdvantage-1;
        const physicalTypeMulti = weaknessCheck ? endAdvantage : 1;

        const colossusFactionSum = (index["ColossusATK"] + index["ColossusATKCORE"]) * (1 + index["ColossusATK%"] + index["ColossusATK%CORE"]);
        const vulgusFactionSum = (index["VulgusATK"] + index["VulgusATKCORE"]) * (1 + index["VulgusATK%"] + index["VulgusATK%CORE"]);
        const firearmColossusATK = weaponRef.baseATK === 0 ? 0 : colossusCheck ? colossusFactionSum : vulgusFactionSum;

        const firearmAttributeConversionBase = baseFirearmATK * (1 + attackPercent);//firearm attribute dmg can't benefit from faction attack or type bonuses or the zenithMultiplier
        const postHitATK = (firearmAttributeConversionBase + (baseFirearmATK * onHitBonus)) * uniqueMulti;
        const totalFirearmATK = (postHitATK + firearmColossusATK) * physicalTypeMulti + needlessBullshitAmount;

        return {baseFirearmATK,attackPercent,physicalTypeBonus,physicalTypeMulti,firearmColossusATK,firearmAttributeConversionBase,totalFirearmATK}
    },
    getFirearmWeakpoint(index,weaponRef) {
        const baseWPMulti = weaponRef.baseWeakPoint;
        const flatWPBonus = index.BaseWeakPointBonus + index.BaseWeakPointBonusCORE;
        const weakpointBonus = index["WeakPointDamage%"] + index["WeakPointDamage%CORE"];

        const bossPartWPBonus = globalRecords.boss.currentBossPartWP;

        //some mods like lethal finish can lock the weak point modifier to a value, in this case 1x, but those still include the boss part bonus
        const totalWPBonus = index.WeakPointOverride ? 1 + bossPartWPBonus : calcs.customTruncate((globalRecords.useWeakspots && bossPartWPBonus != 0 ? (baseWPMulti + flatWPBonus) * (1 + weakpointBonus) + bossPartWPBonus : 1) + 0.00001,4);

        const wpHitRate = globalRecords.weakPointHitRate/100;
        const wpAveraged = 1 + (wpHitRate * Math.max(0,totalWPBonus-1));

        return {baseWPMulti,flatWPBonus,weakpointBonus,bossPartWPBonus,totalWPBonus,wpHitRate,wpAveraged}
    },
    getFirearmCrit(index,weaponRef) {
        const baseFirearmCritRate = weaponRef.baseCritRate;
        const baseFirearmCritDamage = weaponRef.baseCritDamage;

        const baseFirearmCritRateBonus = index.FirearmCritRateBase + index.FirearmCritRateBaseCORE;
        const baseFirearmCritDamageBonus = index.FirearmCritDamageBase + index.FirearmCritDamageBaseCORE;

        const firearmCritRateBonus = index.FirearmCritRate + index.FirearmCritRateCORE;
        const firearmCritDamageBonus = index.FirearmCritDamage + index.FirearmCritDamageCORE;

        const totalFirearmCritRatePreCap = (baseFirearmCritRate + baseFirearmCritRateBonus) * (1 + firearmCritRateBonus);
        const totalFirearmCritRate = globalRecords.useCrits ? Math.max(0,Math.min(totalFirearmCritRatePreCap,1)) * (1 + (+globalRecords.weaponCritCeiling/100)) : 0;

        const totalFirearmCritDamage = Math.max(1,(baseFirearmCritDamage + baseFirearmCritDamageBonus) * (1 + firearmCritDamageBonus));

        return {baseFirearmCritRate,baseFirearmCritDamage,baseFirearmCritRateBonus,baseFirearmCritDamageBonus,firearmCritRateBonus,firearmCritDamageBonus,totalFirearmCritRate,totalFirearmCritDamage}
    },
    getFirearmElementalSpread(index,elementName,usableBase,critFirearm,wpAveraged) {
        const elemDR = calcs.getResistanceBasedDR(index,elementName) || 1;
        const givenElementBase = usableBase * (index[`${elementName}ATK%`] + index[`${elementName}ATK%CORE`]) + index[`${elementName}ATK`] + index[`${elementName}ATKCORE`];
        const needlessBullshitAmount = givenElementBase * (index.independentScalar + index.independentScalarCORE);
        const damageElementBase = (givenElementBase * Math.max(0,1 + index[`${elementName}ATK%Bonus`] + index[`${elementName}ATK%BonusCORE`]) + needlessBullshitAmount) * elemDR;


        const perHit = damageElementBase * wpAveraged;
        const perCrit = perHit * critFirearm.Damage;
        const AVG = perHit * critFirearm.Composite;

        return {perHit,perCrit,AVG}
    },
    getActiveFirearmAttributesArrays(index,preElementDamage,critFirearm,wpAveraged) {
        let activeElements = [];
        let activeElementsDamage = [];

        if (index["ChillATK%"] || index["ChillATK"] || index["ChillATK%CORE"] || index["ChillATKCORE"]) {activeElements.push("Chill");}
        if (index["ElectricATK%"] || index["ElectricATK"] || index["ElectricATK%CORE"] || index["ElectricATKCORE"]) {activeElements.push("Electric");}
        if (index["ToxicATK%"] || index["ToxicATK"] || index["ToxicATK%CORE"] || index["ToxicATKCORE"]) {activeElements.push("Toxic");}
        if (index["FireATK%"] || index["FireATK"] || index["FireATK%CORE"] || index["FireATKCORE"]) {activeElements.push("Fire");}
        if (!activeElements.length) {
            activeElements.push("None");
            activeElementsDamage.push(0);
        }
        else {
            for (let entry of activeElements) {
                const damageSubAttribute = calcs.getFirearmElementalSpread(index,entry,preElementDamage,critFirearm,wpAveraged)
                activeElementsDamage.push(damageSubAttribute.perHit);
            }
        }

        return {activeElements,activeElementsDamage}
    },
}

const calcsUIHelper = {
    addHealingBoxCluster(name,value,unit,id) {
        const displayValue = unit ? value * (unit === "%" ? 100 : 1) : value;
        return `
        <div class="totalHealingBoxHalfBreakdownRows hasHoverTooltip" id="${id || ""}">
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
                    for (let entry2 of path[0]) {returnString += addRow(entry2.name,entry2.value,entry2.unit,entry2.id || null);}
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
    callAbilityFunctionsTier0(index,isCycleCalcs,modArrayOverride,weaponModOverride) {
        const globalRef = globalRecords.character;
        const selectedCharacter = globalRef.currentCharacter;

        //ability array handling is done within userTriggers.updateSelectedMod
        const arrayRef = globalRef.abilityArray;
        const abilityRefs = characters[selectedCharacter].abilities;
        

        for (let i=1;i<=5;i++) {
            const path = arrayRef[i-1] === 0 ? "base" : arrayRef[i-1];

            const currentPath = abilityRefs[`ability${i}`][path];
            currentPath.complexBonus = [];

            if (currentPath.customDPSBase) {customDamage[currentPath.customDPSBase](index,null,isCycleCalcs);}
        }

        const absentBreakdownWeapon = `<span class="missingBreakdownHeadsup">
        No unique weapon ability found/supported for the current selection</span>`;
        const currentWeaponRef = sniperList[globalRecords.weapon.currentWeapon];
        if (currentWeaponRef.customDPSBase) {customDamage[currentWeaponRef.customDPSBase](index,null,isCycleCalcs);}
        else if (!currentWeaponRef.customDPSBase && !isCycleCalcs) {readSelection(`weaponBreakdownBody1`).innerHTML = absentBreakdownWeapon}

        limitedAbilityBonuses = [];
        limitedWeaponBonuses = [];
        limitedWeaponAbilityBonuses = [];

        const currentWeaponMods = weaponModOverride || globalRecords.weapon.mods;
        const currentCharacterMods = modArrayOverride || globalRecords.character.mods;
        const weaponModsCategory = userTriggers.weaponTypeModList[sniperList[globalRecords.weapon.currentWeapon].ammoType];
        //weapon mods
        for (let entry of currentWeaponMods) {
            let path = weaponModsCategory[entry];
            if (path.complexBonus) {

                //if this is a nonstacking cooldown based effect, then make the initial time passed the amount of the cooldown so it can apply to the first shot
                //otherwise set it to 0 so time can accrue normally
                // let initialTimePassed = path.complexBonus[0].oneTimeOrStack === "cooldown" ? path.complexBonus[0].cooldown : 0;
                // if (path.complexBonus[0].oneTimeOrStack === "stack" && path.complexBonus[0].accrualDelay) {
                //     initialTimePassed -= path.complexBonus[0].accrualDelay
                // }
                let firstIsSkipped = (path.complexBonus[0].skipFirstShot || false) ? -1 : 0;

                let complexBonusArrayWeapons = [];
                let complexBonusArrayAbilities = [];

                for (let bonuses of path.complexBonus) {
                    let newArrayEntry = {
                        ...bonuses
                    }
                    newArrayEntry.stats = [...bonuses.stats]
                    complexBonusArrayWeapons.push({...newArrayEntry});
                    complexBonusArrayAbilities.push({...newArrayEntry});
                }

                limitedWeaponBonuses.push({
                    "timesUsed": 0 + firstIsSkipped,"timePassed": 0,"timeOfReload": 0,
                    "reloadTimePassed": 0,"reloadTimeApplied": false,
                    "bonusArray": [...complexBonusArrayWeapons] 
                })
                limitedWeaponAbilityBonuses.push({
                    "timesUsed": 0 + firstIsSkipped,"timePassed": 0,"timeOfReload": 0,
                    "reloadTimePassed": 0,"reloadTimeApplied": false,
                    "bonusArray": [...complexBonusArrayAbilities]
                })
            }
        }
        //character mods
        for (let entry of currentCharacterMods) {
            let path = modData[entry];
            //TODO: Right now this accounts for trans mods AND sub attack mods on the first two loops. Possibly change this later.
            if (path && path.complexBonus) {

                //if this is a nonstacking cooldown based effect, then make the initial time passed the amount of the cooldown so it can apply to the first shot
                //otherwise set it to 0 so time can accrue normally
                // let initialTimePassed = path.complexBonus[0].oneTimeOrStack === "cooldown" ? path.complexBonus[0].cooldown : 0;
                // if (path.complexBonus[0].oneTimeOrStack === "stack" && path.complexBonus[0].accrualDelay) {
                //     initialTimePassed -= path.complexBonus[0].accrualDelay
                // }
                let firstIsSkipped = (path.complexBonus[0].skipFirstShot || false) ? -1 : 0;

                let complexBonusArrayWeapons = [];
                let complexBonusArrayAbilities = [];

                for (let bonuses of path.complexBonus) {
                    let newArrayEntry = {
                        ...bonuses
                    }
                    newArrayEntry.stats = [...bonuses.stats]
                    complexBonusArrayWeapons.push({...newArrayEntry});
                    complexBonusArrayAbilities.push({...newArrayEntry});
                }

                limitedWeaponBonuses.push({
                    "timesUsed": 0 + firstIsSkipped,"timePassed": 0,"timeOfReload": 0,
                    "reloadTimePassed": 0,"reloadTimeApplied": false,
                    "bonusArray": [...complexBonusArrayWeapons] 
                })
                limitedWeaponAbilityBonuses.push({
                    "timesUsed": 0 + firstIsSkipped,"timePassed": 0,"timeOfReload": 0,
                    "reloadTimePassed": 0,"reloadTimeApplied": false,
                    "bonusArray": [...complexBonusArrayAbilities]
                })
            }
        }
        //abilities
        for (let i=1;i<=5;i++) {
            const path = arrayRef[i-1] === 0 ? "base" : arrayRef[i-1];
            const currentPath = abilityRefs[`ability${i}`][path];

            // console.log(currentPath.complexBonus)

            if (currentPath.complexBonus.length) {
                let initialTimePassed = currentPath.complexBonus[0].oneTimeOrStack === "cooldown" ? currentPath.complexBonus[0].cooldown : 0;
                let firstIsSkipped = (currentPath.complexBonus[0].skipFirstShot || false) ? -1 : 0;
                
                let complexBonusArrayWeapons = [];
                let complexBonusArrayAbilities = [];

                for (let bonuses of currentPath.complexBonus) {
                    let newArrayEntry = {
                        ...bonuses
                    }
                    newArrayEntry.stats = [...bonuses.stats]
                    complexBonusArrayWeapons.push({...newArrayEntry});
                    complexBonusArrayAbilities.push({...newArrayEntry});
                }


                limitedWeaponAbilityBonuses.push({
                    "timesUsed": 0 + firstIsSkipped,"timePassed": initialTimePassed,
                    "bonusArray": [...complexBonusArrayAbilities]
                })
                limitedWeaponBonuses.push({
                    "timesUsed": 0 + firstIsSkipped,"timePassed": initialTimePassed,
                    "bonusArray": [...complexBonusArrayWeapons]
                })
                // customDamage[currentPath.customDPSBase](index,null,isCycleCalcs);
            }
        }

        const currentPath = currentWeaponRef;
        //ultimate weapon abilities
        if (currentPath.complexBonus && currentPath.complexBonus.length) {
            let initialTimePassed = currentPath.complexBonus[0].oneTimeOrStack === "cooldown" ? currentPath.complexBonus[0].cooldown : 0;
            let firstIsSkipped = (currentPath.complexBonus[0].skipFirstShot || false) ? -1 : 0;
            let complexBonusArray = [];

            for (let bonuses of currentPath.complexBonus) {
                let newArrayEntry = {
                    ...bonuses
                }
                newArrayEntry.stats = [...bonuses.stats];
                complexBonusArray.push(newArrayEntry);
            }

            limitedWeaponBonuses.push({
                "timesUsed": 0 + firstIsSkipped,"timePassed": initialTimePassed,
                "bonusArray": complexBonusArray 
            });
        }


        // globalRecords.teamBuffs.complexBonus
        const teamBonusRef = globalRecords.teamBuffs.complexBonus;
        if (teamBonusRef && teamBonusRef.length) {
            let initialTimePassed = teamBonusRef[0].oneTimeOrStack === "cooldown" ? teamBonusRef[0].cooldown : 0;
            let firstIsSkipped = (teamBonusRef[0].skipFirstShot || false) ? -1 : 0;
            let complexBonusArray = [];

            for (let bonuses of teamBonusRef) {
                let newArrayEntry = {
                    ...bonuses
                }
                newArrayEntry.stats = [...bonuses.stats];
                complexBonusArray.push(newArrayEntry);
            }

            limitedWeaponBonuses.push({
                "timesUsed": 0 + firstIsSkipped,"timePassed": initialTimePassed,
                "bonusArray": complexBonusArray 
            });
        }

        // console.log(limitedWeaponAbilityBonuses)

        return {limitedAbilityBonuses,limitedWeaponBonuses,limitedWeaponAbilityBonuses}
    },
    callAbilityFunctions(index,returnObject,isCycleCalcs,limitedAbilityBonuses,limitedWeaponBonuses,limitedWeaponAbilityBonuses) {
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
            if (currentPath.customDPS) {returnValuesObject[`ability${i}`] = customDamage[currentPath.customDPS](index,returnObject,isCycleCalcs,null,limitedWeaponAbilityBonuses);}
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
        if (currentWeaponRef.customDPS) {returnValuesObject.weapon = customDamage[currentWeaponRef.customDPS](index,returnObject,isCycleCalcs,currentWeaponRef,limitedWeaponBonuses);}
        else {
            returnValuesObject.weapon = customDamage.generalizedWeaponBreakdown(index,returnObject,isCycleCalcs,currentWeaponRef,limitedWeaponBonuses);
        }
        // else {readSelection(`weaponBreakdownBody1`).innerHTML = "No weapon found"}

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
        return customDamage.kyleRepulsionCalcs(index,returnObject,isCycleCalcs,"Collision Instinct");
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
        return customDamage.kyleSpurtCalcs(index,returnObject,isCycleCalcs,"Self-Directed Eruption");
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

        let isLastStand = index.LastStandActive;
        let lastStandMulti = isLastStand ? 0.085 + (Math.min(10000,returnObject.displayShield)/10000) * 0.425 : 1;

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
                {"name": "Last Stand Hit","value": Math.floor(damage.perHit) * lastStandMulti,"unit": ""},
                {"name": "Last Stand Crit","value": Math.floor(damage.perCrit) * lastStandMulti,"unit": ""},
                {"name": "Last Stand AVG","value": lastStandDamage,"unit": ""},
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

        const turretInterval = 1/abilityMods.shotInterval;
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
    freynaBaptismSkillBase(index,returnObject,isCycleCalcs,nameOverride) {
        const characterRef = characters.Freyna;
        const settingsRef = characterRef.characterSettings;
        const skillPlacement = 4;
        const abilityMap = characterRef.abilities[`ability${skillPlacement}`][nameOverride ? nameOverride : "base"];
        const abilityTypeArray = abilityMap.type;
        const abilityMods = abilityMap.powerMods;

        const {totalSkillCritRate,totalSkillCritDamage} = calcs.getSkillCrit(index,characterRef.baseStats);

        const sumModifierBonus = calcs.getTotalSkillPowerModifier(index,abilityTypeArray);
        const baseSkillPower = calcs.getTotalSkillPower(index,abilityTypeArray);
        const abilityDR = calcs.getResistanceBasedDR(index,abilityTypeArray[0]);
        const crit = calcs.getCritComposites({totalSkillCritRate,totalSkillCritDamage} );

        const basicInfo = {baseSkillPower,abilityDR,crit};

        const skillPowerModifier = abilityMods.base + sumModifierBonus;
        const damageSkill = calcs.getCompositeDamageSpread(basicInfo,skillPowerModifier);

        return {damageSkill,skillPowerModifier};
    },
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

        const skillPowerModifierTrauma = abilityMods.trauma + sumModifierBonus;
        const skillPowerModifierPanic = abilityMods.panic + sumModifierBonus;
    
        const damageTrauma = calcs.getCompositeDamageSpread(basicInfo,skillPowerModifierTrauma);
        const damagePanic = calcs.getCompositeDamageSpread(basicInfo,skillPowerModifierPanic);

        const rollDuration = 1.35;

        const baseDuration = abilityMods.duration * (1 + index.SkillDuration);
        const normalDuration = baseDuration - rollDuration;

        const settingsObject = {
            limitedWeaponAbilityBonuses,
            "isStaticRate": false,
            "referenceFunction": customDamage.freynaBaptismSkillBase,
            "wastedTimeSkill": rollDuration,//roll duration for cancel
            "skillOnly": true,
            "shellCountOverride": 1,
            "skipCoreValues": true,
            "noReloads": true,
            "durationRestriction": baseDuration,
        }
        const baseFireRate = 451;
        const magazine = abilityMods.magazine * (1 + index.MagazineSize);
        const actualMagSize = Math.floor(magazine);
        //this is purely to fake out the bulletsArray returned so we can still see the total upper value on shots possible
        //and then trim it by duration array slice, and then math.min with the actual mag size, so the fake value is never truly used
        // const fakeMagSize = 150;

        const currentWeaponRef = sniperList[globalRecords.weapon.currentWeapon];
        let bulletsArray = bullets.getActiveBulletArray(index,returnObject,isCycleCalcs,nameOverride,baseFireRate,actualMagSize,currentWeaponRef,settingsObject).bulletsArray;

        //trim the bullets array by the allowed duration specified above
        for (let i=0;i<bulletsArray.length;i++) {
            if (bulletsArray[i].timePassed > normalDuration) {
                bulletsArray = bulletsArray.slice(0,i);
            }
        }
        //save the length of the bullet array to remember how many shots you actually have time for
        const timeFor = bulletsArray.length;
        //and then if the possible exceeds the mag size, trim the array AGAIN to cut off the extra bullets
        if (bulletsArray.length > actualMagSize) {
            bulletsArray = bulletsArray.slice(0,actualMagSize);
        }

        const possibleShots = timeFor;
        const actualShots = Math.min(possibleShots,actualMagSize);
        

        let sumBulletDamage = 0;
        for (let entry of bulletsArray) {sumBulletDamage += entry.SkillDamage.AVG;}



        //trauma
        const avgPerTraumaTick = damageTrauma.AVG;
        const totalAVGTrauma = Math.floor(normalDuration) * damageTrauma.AVG;

        //baptism
        const avgPerShot = sumBulletDamage / actualShots;
        const totalAVGGun = sumBulletDamage;

        const avgGunDPS = totalAVGGun / baseDuration;
        const avgTotalDPS = (totalAVGGun + totalAVGTrauma) / baseDuration;

        const SUMTotalAVG = totalAVGGun + totalAVGTrauma;

        if (!isCycleCalcs) {
            let {bulletArrayString,graphString} = bullets.getActiveBulletGraph(bulletsArray,true);
            let rowInjection = [
                {"name": "Firing Window","value": baseDuration,"unit": "s"},
                {"name": "Roll Cancel","value": -rollDuration,"unit": "s"},
                {"name": "Actual","value": normalDuration,"unit": "s"},
                {"name": "Magazine","value": actualMagSize,"unit": " shots"},
                {"name": "Time for","value": possibleShots,"unit": " shots"},
            ]
            let rowInjectionSUMS = [
                {"name": "SUM Total AVG","value": SUMTotalAVG,"unit": ""},
                {"name": "AVG DPS","value": avgTotalDPS,"unit": ""},
                {"name": "Total AVG Baptism","value": totalAVGGun,"unit": ""},
                {"name": "Total AVG Trauma","value": totalAVGTrauma,"unit": ""},
            ]

            const breakdownArray = [
                // {"header": "UNIQUE WEAPON","value": damage,"modifier": skillPowerModifier,"hasCritAVG": true,"unit": "","magazineTypeWeapon": [possibleShots,totalAVGGun],
                //     "rowInjection": [rowInjection,"Benefits from Fire Rate and Rounds Per Magazine stats."],
                //     "condition": false,"desc": ""},
                {"header": "TRAUMA","value": damageTrauma,"modifier": skillPowerModifierTrauma,"hasCritAVG": true,"unit": "","isDOT": false,"ticksDOT": 0,"intervalDOT": 0,
                    "condition": false,"desc": ""},
                {"header": "NIGHTMARE","value": damagePanic,"modifier": skillPowerModifierPanic,"hasCritAVG": true,"unit": "","isDOT": false,"ticksDOT": 0,"intervalDOT": 0,
                    "condition": nameOverride,"desc": "Will not apply to the host of Room 0 Trauma, but only to those around them.<br>If another nearby also has Room 0 Trauma, then it can apply to both as both apply to the other."},
                {"header": "SUM","value": null,"modifier": null,"hasCritAVG": true,"unit": "","isDOT": false,"ticksDOT": 0,"intervalDOT": 0,
                    "rowInjection": [rowInjection,""],
                    "rowInjection2": [rowInjectionSUMS,""],
                    "condition": false,"desc": "Only Baptism + Trauma damage is factored here. The cut-off for these numbers is when you run out of Baptism ammo."},
            ];
            const bodyString = `abilityBreakdownBody${skillPlacement}`;
            
            const addRow = calcsUIHelper.addHealingBoxCluster;
            readSelection(`abilityBreakdownBody${skillPlacement}`).innerHTML = `
            ${addRow("Power",baseSkillPower,"")}
            <div class="basicsSummaryBox">
                ${graphString}
            </div>
            <div class="basicsSummaryBox">
            <div class='weaponBreakdownSplitterHeader'>BULLET INFO</div>
                
                <div class="tooltipHeader">Selection</div>
                <div class="bulletSelectorIDRowBox">

                    <div class="toggleArrowBox" onclick="bullets.updateExpandedBullet(-1,null,null,true)">&#9664;</div>
                    <div class="traitLevelDisplay">
                        <input type="number" class="bulletSelectorInputWeapons" id="bulletSelectorInputWeaponsSkill" min="1" max="${actualShots}" step="1" value="1" onchange="bullets.updateExpandedBullet(null,null,null,true)">
                    </div> 
                    <div class="toggleArrowBox" onclick="bullets.updateExpandedBullet(1,null,null,true)">&#9654;</div>
                </div>
                ${bulletArrayString}
            </div>
            <div class="basicsSummaryBox">
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
        return customDamage.esiemoBlastCalcsTier0(index,returnObject,isCycleCalcs,"Creative Explosion");
    },
    esiemoBlastCalcsTier0ClusterStarter(index,returnObject,isCycleCalcs,nameOverride) {
        return customDamage.esiemoBlastCalcsTier0(index,returnObject,isCycleCalcs,"Cluster Bomb");
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
        return customDamage.esiemoBlastCalcs(index,returnObject,isCycleCalcs,null,0.15,"Cluster Bomb");
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
    //this is the skill only reference function and damage calculation
    haileyZenithSkillBase(index,returnObject,isCycleCalcs,nameOverride) {
        const characterRef = characters.Hailey;
        const settingsRef = characterRef.characterSettings;
        const skillPlacement = 4;
        const abilityMap = characterRef.abilities[`ability${skillPlacement}`][nameOverride ? nameOverride : "base"];
        const abilityTypeArray = abilityMap.type;
        const abilityMods = abilityMap.powerMods;

        const {totalSkillCritRate,totalSkillCritDamage} = calcs.getSkillCrit(index,characterRef.baseStats);

        const sumModifierBonus = calcs.getTotalSkillPowerModifier(index,abilityTypeArray);
        const baseSkillPower = calcs.getTotalSkillPower(index,abilityTypeArray);
        const abilityDR = calcs.getResistanceBasedDR(index,abilityTypeArray[0]);
        const crit = calcs.getCritComposites({totalSkillCritRate,totalSkillCritDamage});

        const basicInfo = {baseSkillPower,abilityDR,crit};
        const skillPowerModifier = abilityMods.base + sumModifierBonus;
        const damageSkill = calcs.getCompositeDamageSpread(basicInfo,skillPowerModifier);

        return {damageSkill,skillPowerModifier};
    },
    //this is the cryo dmg reference function
    haileyZenithCryoBase(constructorObject) {
        let perHit = 0;
        let perCrit = 0;
        let AVG = 0;

        // let elementKeys = Object.keys(constructorObject.elementalDamage);
        for (let element in constructorObject.elementalDamage) {
            let currentElement = constructorObject.elementalDamage[element];

            perHit += currentElement.perHit || 0;
            perCrit += currentElement.perCrit || 0;
            AVG += currentElement.AVG || 0;
        }

        perHit += constructorObject.damage;
        perCrit += constructorObject.damageCrit;
        AVG += constructorObject.damageAVG;

        perHit *= 0.5;
        perCrit *= 0.5;
        AVG *= 0.5;

        constructorObject.damageAVGTotal += AVG;
        let cryoDescriptionString = "Cryo takes the end total of all firearm sourced damage, cuts it in half, and displays it as a separate, non-crit number regardless of crit state."

        return {"name": "Cryo","desc": cryoDescriptionString,perHit,perCrit,AVG}
    },
    haileyZenithCalcs(index,returnObject,isCycleCalcs,nameOverride,limitedWeaponAbilityBonuses) {
        const characterRef = characters.Hailey;
        const settingsRef = characterRef.characterSettings;
        const skillPlacement = 4;
        const abilityMap = characterRef.abilities[`ability${skillPlacement}`][nameOverride ? nameOverride : "base"];
        const abilityTypeArray = abilityMap.type;
        const abilityMods = abilityMap.powerMods;

        const baseSkillPower = calcs.getTotalSkillPower(index,abilityTypeArray);

        const magazineSize = abilityMods.magazine * (1+index.MagazineSize);//it rounds down and floors the value, but I still want to show the decimal so people know.
        const actualMagSize = Math.floor(magazineSize);
        const baseFireRate = abilityMods.fireRate;

        const settingsObject = {
            "atkMulti": abilityMods.firearmATKMulti,
            limitedWeaponAbilityBonuses,
            "isStaticRate": true,
            "referenceFunction": customDamage.haileyZenithSkillBase,
            "specialGunFunction": customDamage.haileyZenithCryoBase,
            "shellCountOverride": 1,
            "skipCoreValues": true,
            "noReloads": true,
        }

        const currentWeaponRef = sniperList[globalRecords.weapon.currentWeapon];
        let bulletsArray = bullets.getActiveBulletArray(index,returnObject,isCycleCalcs,nameOverride,baseFireRate,actualMagSize,currentWeaponRef,settingsObject).bulletsArray;


        let totalAVGSkill = 0;
        let totalAVGGun = 0;
        let totalAVGSum = 0;
        const totalShots = bulletsArray.length;
        for (let entry of bulletsArray) {
            totalAVGSkill += entry.SkillDamage.AVG;
            totalAVGGun += entry.damageAVG + entry.avgTotalBonusElem + entry.specialGunFunction.AVG;
            totalAVGSum += entry.damageAVGTotal;
        }
        const avgPerHitTotal = totalAVGSum/totalShots;
        const avgGunPerHit = totalAVGGun/totalShots;
        const avgSkillHit = totalAVGSkill/totalShots;

        
        if (!isCycleCalcs) {
            let {bulletArrayString,graphString} = bullets.getActiveBulletGraph(bulletsArray,true);

            const rowInjectionTotalSum = [
                {"name": "Magazine","value": magazineSize,"unit": ""},
                {"name": "Total Fired","value": totalShots,"unit": ""},
                {"name": "Total AVG/Shot","value": avgPerHitTotal,"unit": ""},
                {"name": "SUM Zenith AVG per Cast","value": totalAVGSum,"unit": ""},
            ]

            const breakdownArray = [
                {"header": "SUPERCOOLED","value": null,"modifier": null,"hasCritAVG": null,"unit": "",
                    "sliderElemID": ["haileySupercooledStacks",0,12,1,"Supercooled Stacks"],
                    "condition": nameOverride != "Supercooled Kuiper Round","desc": ""},
                {"header": "UNIQUE WEAPON - SUM","value": null,"modifier": null,"hasCritAVG": null,"unit": "",
                    "rowInjection": [rowInjectionTotalSum,""],
                    "condition": false,"desc": "Must adjust the enemy and part targeted under the <span>ENEMY</span> tab for accurate values.<br>See Weapon DMG video for more info.<br>Skill and Firearm DMG scale separately with their respective mods."},
            ];
            const bodyString = `abilityBreakdownBody${skillPlacement}`;
            
            const addRow = calcsUIHelper.addHealingBoxCluster;
            readSelection(`abilityBreakdownBody${skillPlacement}`).innerHTML = `
            ${addRow("Power",baseSkillPower,"")}
            <div class="basicsSummaryBox" id="lepicResultsBox">
                ${graphString}
                ${calcsUIHelper.addHealingBoxRows(bodyString,breakdownArray,abilityMap.displayStatsALT,index,returnObject,characterRef.name)}
            </div>
            <div class="basicsSummaryBox">
            <div class='weaponBreakdownSplitterHeader'>BULLET INFO</div>
                
                <div class="tooltipHeader">Selection</div>
                <div class="bulletSelectorIDRowBox">

                    <div class="toggleArrowBox" onclick="bullets.updateExpandedBullet(-1,null,null,true)">&#9664;</div>
                    <div class="traitLevelDisplay">
                        <input type="number" class="bulletSelectorInputWeapons" id="bulletSelectorInputWeaponsSkill" min="1" max="${totalShots}" step="1" value="1" onchange="bullets.updateExpandedBullet(null,null,null,true)">
                    </div> 
                    <div class="toggleArrowBox" onclick="bullets.updateExpandedBullet(1,null,null,true)">&#9654;</div>
                </div>

                ${bulletArrayString}
            </div>
            <div class="abilityBreakdownHeader">DESCRIPTION</div>
            <div class="abilityBreakdownDescription">${tooltips.updateSubstatColor(abilityMap.desc)}</div>
            `;
        }
        else {
            return {avgSkillHit,avgGunPerHit,avgPerHitTotal,totalAVGSkill,totalAVGGun,totalAVGSum}
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
        return customDamage.haileyZenithCalcs(index,returnObject,isCycleCalcs,"Supercooled Kuiper Round");
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
        return customDamage.lepicOverclockCalcsTier0(index,returnObject,isCycleCalcs,"Nerve Infiltration");
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
    //this is the skill only reference function and damage calculation
    LepicOverkillSkillBase(index,returnObject,isCycleCalcs,nameOverride) {
        const characterRef = characters.Lepic;
        const settingsRef = characterRef.characterSettings;
        const skillPlacement = 4;
        const abilityMap = characterRef.abilities[`ability${skillPlacement}`][nameOverride ? nameOverride : "base"];
        const abilityTypeArray = abilityMap.type;
        const abilityMods = abilityMap.powerMods;

        const {totalSkillCritRate,totalSkillCritDamage} = calcs.getSkillCrit(index,characterRef.baseStats);

        const sumModifierBonus = calcs.getTotalSkillPowerModifier(index,abilityTypeArray);
        const baseSkillPower = calcs.getTotalSkillPower(index,abilityTypeArray);
        const abilityDR = calcs.getResistanceBasedDR(index,abilityTypeArray[0]);
        const crit = calcs.getCritComposites({totalSkillCritRate,totalSkillCritDamage});

        const basicInfo = {baseSkillPower,abilityDR,crit};

        const skillPowerModifier = abilityMods.base + sumModifierBonus;

        const damageSkill = calcs.getCompositeDamageSpread(basicInfo,skillPowerModifier);

        return {damageSkill,skillPowerModifier};
    },
    LepicOverkillFieldBase(constructorObject,index,returnObject,isCycleCalcs,nameOverride) {
        const characterRef = characters.Lepic;
        const settingsRef = characterRef.characterSettings;
        const skillPlacement = 4;
        const abilityMap = characterRef.abilities[`ability${skillPlacement}`][nameOverride ? nameOverride : "base"];
        const abilityTypeArray = abilityMap.type;
        const abilityMods = abilityMap.powerMods;

        const {totalSkillCritRate,totalSkillCritDamage} = calcs.getSkillCrit(index,characterRef.baseStats);

        const sumModifierBonus = calcs.getTotalSkillPowerModifier(index,abilityTypeArray);
        const baseSkillPower = calcs.getTotalSkillPower(index,abilityTypeArray);
        const abilityDR = calcs.getResistanceBasedDR(index,abilityTypeArray[0]);
        const crit = calcs.getCritComposites({totalSkillCritRate,totalSkillCritDamage});

        const basicInfo = {baseSkillPower,abilityDR,crit};

        const skillPowerModifierDOT = abilityMods.baseDOT + sumModifierBonus;

        const damageDOT = calcs.getCompositeDamageSpread(basicInfo,skillPowerModifierDOT);

        const continuousDuration = abilityMods.duration * (1 + index.SkillDuration);
        const continuousInterval = abilityMods.interval;
        const ticks = Math.floor(continuousDuration/continuousInterval);

        const totalTickDamage = damageDOT.AVG * ticks;

        let perHit = damageDOT.perHit;
        let perCrit = damageDOT.perCrit;
        let AVG = damageDOT.AVG;

        constructorObject.damageAVGTotal += totalTickDamage;
        let cryoDescriptionString = "Overkill leaves AOE fields behind that deal continuous damage for a duration.";

        return {"name": "Overkill&nbsp;TICKS","desc": cryoDescriptionString,perHit,perCrit,AVG,ticks,totalTickDamage}
    },
    lepicOverkillCalcs(index,returnObject,isCycleCalcs,nameOverride) {
        const characterRef = characters.Lepic;
        const settingsRef = characterRef.characterSettings;
        const skillPlacement = 4;
        const abilityMap = characterRef.abilities[`ability${skillPlacement}`][nameOverride ? nameOverride : "base"];
        const abilityTypeArray = abilityMap.type;
        const abilityMods = abilityMap.powerMods;

        const baseSkillPower = calcs.getTotalSkillPower(index,abilityTypeArray);

        const totalMP = returnObject.displayMP;
        const continuousCost = abilityMods.continuousCost * (1 + index.SkillCost);
        const allowedMPDuration = Math.ceil(totalMP/continuousCost);

        const magazineSize = 2;//it rounds down and floors the value, but I still want to show the decimal so people know.
        const actualMagSize = magazineSize;
        const baseFireRate = abilityMods.fireRate;
        const rollDuration = 1.06;

        const baseDuration = abilityMods.skillDuration * (1 + index.SkillDuration);
        const normalDuration = baseDuration - rollDuration;
        //restrict duration by mp costs based on the toggle state
        const baseSkillDuration = settingsRef.lepicOverclockMPRestrictions ? Math.min(allowedMPDuration,normalDuration) : normalDuration;
        const continuousDuration = abilityMods.duration * (1 + index.SkillDuration);
        const totalDuration = baseDuration + continuousDuration;

        const settingsObject = {
            limitedWeaponAbilityBonuses,
            "isStaticRate": false,
            "referenceFunction": customDamage.LepicOverkillSkillBase,
            "specialSkillFunction": customDamage.LepicOverkillFieldBase,
            "wastedTimeSkill": rollDuration,//roll duration for cancel
            "skillOnly": true,
            "shellCountOverride": 1,
            "skipCoreValues": true,
            "noReloads": true,
            "durationRestriction": baseDuration,
        }

        const currentWeaponRef = sniperList[globalRecords.weapon.currentWeapon];
        let bulletsArray = bullets.getActiveBulletArray(index,returnObject,isCycleCalcs,nameOverride,baseFireRate,actualMagSize,currentWeaponRef,settingsObject).bulletsArray;

        //trim the bullets array by the allowed duration specified above
        for (let i=0;i<bulletsArray.length;i++) {
            if (bulletsArray[i].timePassed > baseSkillDuration) {
                bulletsArray = bulletsArray.slice(0,i);
            }
        }

        let sumBulletDamage = 0;
        let sumTickDamage = 0;
        let totalTicks = 0;
        let totalShots = bulletsArray.length;

        let firstTickCount = 0;

        for (let entry of bulletsArray) {
            sumBulletDamage += entry.SkillDamage.AVG;
            totalTicks += entry.specialSkillFunction.ticks;
            sumTickDamage += entry.specialSkillFunction.totalTickDamage;

            if (!firstTickCount) {firstTickCount += entry.specialSkillFunction.ticks;}
        }


        //impact
        const overkillAVGperHit4 = sumBulletDamage/totalShots;
        const overkillTotalShotDamage4 = sumBulletDamage;
        //dot
        const continuousAVGperTick4 = sumTickDamage/totalTicks;
        const tickDamagePerShot = continuousAVGperTick4 * firstTickCount;
        const continuousTotalDamage4 = sumTickDamage;
        //sum
        const totalPerShot = tickDamagePerShot + overkillAVGperHit4;
        const sumTotalDamage4 = sumTickDamage + sumBulletDamage;
        //dps
        const dpsPerShot4 = totalPerShot/continuousDuration;
        const dpsPerCast4 = sumTotalDamage4/totalDuration;

        const excessWasted = baseSkillDuration - bulletsArray[bulletsArray.length-1].timePassed;


        if (!isCycleCalcs) {
            let {bulletArrayString,graphString} = bullets.getActiveBulletGraph(bulletsArray,true);

            let rowInjectionOverkill = [
                {"name": "-Roll Duration","value": -rollDuration,"unit": ""},
                {"name": "Usable Duration","value": baseSkillDuration,"unit": ""},
                {"name": "Excess","value": excessWasted,"unit": "s"},
                {"name": "Shots","value": totalShots,"unit": ""},
            ]
            let SUM = [
                {"name": "SUM AVG DMG per Cast","value": sumTotalDamage4,"unit": ""},
                {"name": "Roll Duration","value": rollDuration,"unit": "s"},
                {"name": "DPS Per Shot","value": dpsPerShot4,"unit": ""},
                {"name": "DPS Per Cast","value": dpsPerCast4,"unit": ""},
            ]

            const breakdownArray = [
                {"header": "SUM","value": null,"modifier": null,"hasCritAVG": true,"unit": "",
                    "toggleElemID": ["lepicOverclockMPRestrictions","Restrict Duration by MP?"],
                    "rowInjection": [rowInjectionOverkill,""],
                    "rowInjection2": [SUM,""],
                    "condition": false,"desc": "This number assumes you are roll canceling the starting animation."},
            ];
            const bodyString = `abilityBreakdownBody${skillPlacement}`;
            
            const addRow = calcsUIHelper.addHealingBoxCluster;
            readSelection(`abilityBreakdownBody${skillPlacement}`).innerHTML = `
            ${addRow("Power",baseSkillPower,"")}
            <div class="basicsSummaryBox" id="lepicResultsBox">
                ${graphString}
                ${calcsUIHelper.addHealingBoxRows(bodyString,breakdownArray,abilityMap.displayStatsALT,index,returnObject,characterRef.name)}
            </div>
            <div class="basicsSummaryBox">
            <div class='weaponBreakdownSplitterHeader'>BULLET INFO</div>
                
                <div class="tooltipHeader">Selection</div>
                <div class="bulletSelectorIDRowBox">

                    <div class="toggleArrowBox" onclick="bullets.updateExpandedBullet(-1,null,null,true)">&#9664;</div>
                    <div class="traitLevelDisplay">
                        <input type="number" class="bulletSelectorInputWeapons" id="bulletSelectorInputWeaponsSkill" min="1" max="${totalShots}" step="1" value="1" onchange="bullets.updateExpandedBullet(null,null,null,true)">
                    </div> 
                    <div class="toggleArrowBox" onclick="bullets.updateExpandedBullet(1,null,null,true)">&#9654;</div>
                </div>

                ${bulletArrayString}
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

        const baseBonusDuration = 5;
        const durationBonus = 1 + index.SkillDuration;
        const totalDuration = baseBonusDuration * durationBonus;

        if (settingsRef.lepicFirearmMasterBonus) {
            // index.PowerModifierBase += powerModBonus;
            // index.SkillRange += skillRangebonus;
            abilityMap.complexBonus = [
                {
                    "stats": [
                        {"name": "PowerModifierBase","value": powerModBonus,"subStackValue": null},
                    ],
                    "bonusName": "Firearm Master",
                    "oneTimeOrStack": "duration",
                    "limit": 1,
                    "cooldown": 60,
                    "duration": totalDuration,
                    "currentStacks": 0,
                    "timePassedEntry": 0,
                    "isDurationActive": true,
                    "isCooldownActive": false,
                    "conditions": [],
                    "skipFirstShot": false,
                }
            ]
        }
        else {
            abilityMap.complexBonus = [];
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
        return customDamage.bunnySpeedCalcsTier0Speed(index,returnObject,isCycleCalcs,"Electric Transition");
    },
    bunnySpeedCalcsTier0SpeedBionicStarter(index,returnObject,isCycleCalcs,nameOverride) {
        return customDamage.bunnySpeedCalcsTier0Speed(index,returnObject,isCycleCalcs,"Bionic Fuel");
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
        return customDamage.viessaColdSnapCalcs(index,returnObject,isCycleCalcs,"Absolute-Zero");
    },
    viessaColdSnapCalcsHypoStarter(index,returnObject,isCycleCalcs,nameOverride) {
        return customDamage.viessaColdSnapCalcs(index,returnObject,isCycleCalcs,"Hypothermia");
    },
    viessaColdSnapCalcsWatchStarter(index,returnObject,isCycleCalcs,nameOverride) {
        return customDamage.viessaColdSnapCalcs(index,returnObject,isCycleCalcs,"Cold Snap Watch");
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
        return customDamage.viessaBlizzardCalcs(index,returnObject,isCycleCalcs,"Hypothermia");
    },
    viessaBlizzardCalcsABS0Starter(index,returnObject,isCycleCalcs,nameOverride) {
        return customDamage.viessaBlizzardCalcs(index,returnObject,isCycleCalcs,"Absolute-Zero");
    },
    viessaBlizzardCalcsCloudStarter(index,returnObject,isCycleCalcs,nameOverride) {
        return customDamage.viessaBlizzardCalcs(index,returnObject,isCycleCalcs,"Glacial Cloud")
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

        const iceNeedleModifierArray = [0,1.585,1.795,1.995,2.185];
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
    viessaSphereCalcsABS0StarterTier0(index,returnObject,isCycleCalcs,nameOverride) {
        const characterRef = characters.Viessa;
        const settingsRef = characterRef.characterSettings;
        const skillPlacement = 5;
        const abilityMap = characterRef.abilities[`ability${skillPlacement}`]["Absolute-Zero"];
        const abilityTypeArray = abilityMap.type;
        const abilityMods = abilityMap.powerMods;



        index.SkillCritRateBaseBonus += abilityMods.skillCritBonus;
    },
    viessaSphereCalcsABS0Starter(index,returnObject,isCycleCalcs,nameOverride) {
        return customDamage.viessaSphereCalcs(index,returnObject,isCycleCalcs,"Absolute-Zero");
    },
    viessaSphereCalcsHypoStarter(index,returnObject,isCycleCalcs,nameOverride) {
        return customDamage.viessaSphereCalcs(index,returnObject,isCycleCalcs,"Hypothermia");
    },
    viessaSphereCalcsCohesionStarter(index,returnObject,isCycleCalcs,nameOverride) {
        return customDamage.viessaSphereCalcs(index,returnObject,isCycleCalcs,"Cold Cohesion")
    },

    //LUNA
    //ability 1
    lunaPresenceCalcsTier0(index,returnObject,isCycleCalcs,nameOverride) { 
        const characterRef = characters.Luna;
        const settingsRef = characterRef.characterSettings;
        const skillPlacement = 1;
        const abilityMap = characterRef.abilities[`ability${skillPlacement}`][nameOverride ? nameOverride : "base"];
        const abilityTypeArray = abilityMap.type;
        const abilityMods = abilityMap.powerMods;

        let stackValue = abilityMods.powerModBonus;

        index.PowerModifierBase += settingsRef.lunaPresenceStacks * stackValue;
    },
    lunaPresenceCalcs(index,returnObject,isCycleCalcs,nameOverride) { 
        const characterRef = characters.Luna;
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

        if (!isCycleCalcs) {
            // const rowInjection = [
            //     {"name": "+Power Mod","value": finalPowerModifier,"unit": "%"},
            //     {"name": "+Toxin Res%","value": finalToxinRes,"unit": "%"},
            //     {"name": "+Shield%/s","value": finalShieldRegen,"unit": "%"},
            // ]
            let maxStacks = abilityMods.stackLimit;

            const breakdownArray = [
                {"header": "PROJECTILE","value": damage,"modifier": skillPowerModifier,"hasCritAVG": true,"unit": "","isDOT": false,"ticksDOT": 0,"intervalDOT": 0,
                    "condition": false,"desc": "",},
                {"header": "PERFECT PITCH","value": null,"modifier": null,"hasCritAVG": null,"unit": "","isDOT": false,"ticksDOT": 0,"intervalDOT": 0,
                    "sliderElemID": ["lunaPresenceStacks",0,maxStacks,1,"Stacks Count"],//"rowInjection": [rowInjection,""],},
                    "condition": nameOverride,"desc": ""},
                {"header": "BULLET RECOVERY","value": null,"modifier": null,"hasCritAVG": null,"unit": "","isDOT": false,"ticksDOT": 0,"intervalDOT": 0,
                    "condition": false,"desc": ""},
            ];
            const bodyString = `abilityBreakdownBody${skillPlacement}`;
            
            const addRow = calcsUIHelper.addHealingBoxCluster;
            readSelection(`abilityBreakdownBody${skillPlacement}`).innerHTML = `
            <div class="basicsSummaryBox" id="lepicResultsBox">
                ${calcsUIHelper.addHealingBoxRows(bodyString,breakdownArray,abilityMap.displayStatsALT,index,returnObject,characterRef.name)}
            </div>
            <div class="abilityBreakdownHeader">DESCRIPTION</div>
            <div class="abilityBreakdownDescription">${abilityMap.desc}</div>
            `;
        }
        else {
            return {avgDmgPerHit}
        }
        // <div class="abilityBreakdownGeneralMessage">asdf.</div>
    },
    lunaPresenceCalcsSurgeStarter(index,returnObject,isCycleCalcs,nameOverride) {
        return customDamage.lunaPresenceCalcs(index,returnObject,isCycleCalcs,"Noise Surge");
    },
    //ability 2
    lunaExcitingCalcsTier0(index,returnObject,isCycleCalcs,nameOverride) { 
        const characterRef = characters.Luna;
        const settingsRef = characterRef.characterSettings;
        const skillPlacement = 2;
        const abilityMap = characterRef.abilities[`ability${skillPlacement}`][nameOverride ? nameOverride : "base"];
        const abilityTypeArray = abilityMap.type;
        const abilityMods = abilityMap.powerMods;

        const powerModBuff = settingsRef.lunaIsExcitingEnhanced ? abilityMods.powerModBonusEnhanced : abilityMods.powerModBonus;

        index.PowerModifierBase += settingsRef.lunaIsExcitingUsed ? powerModBuff : 0;
    },
    lunaExcitingCalcsTier0MercyStarter(index,returnObject,isCycleCalcs,nameOverride) {
        return customDamage.lunaExcitingCalcsTier0(index,returnObject,isCycleCalcs,"Singer's Mercy");
    },
    lunaExcitingCalcs(index,returnObject,isCycleCalcs,nameOverride) { 
        const characterRef = characters.Luna;
        const settingsRef = characterRef.characterSettings;
        const skillPlacement = 2;
        const abilityMap = characterRef.abilities[`ability${skillPlacement}`][nameOverride ? nameOverride : "base"];
        const abilityTypeArray = abilityMap.type;
        const abilityMods = abilityMap.powerMods;

        const enhancementCheck = settingsRef.lunaIsExcitingEnhanced;

        const powerModBuff = settingsRef.lunaIsExcitingUsed ? enhancementCheck ? abilityMods.powerModBonusEnhanced : abilityMods.powerModBonus : 0;

        const maxMP = returnObject.displayMP;
        const MPModifier = settingsRef.lunaIsExcitingUsed ? enhancementCheck ? abilityMods.powerRatioRateEnhanced : abilityMods.powerRatioRate : 0;
        const powerRatioBonus = calcs.customTruncate(((maxMP * MPModifier)/100) + 0.00001,4);

        if (!isCycleCalcs) {
            const rowInjectionSelf = [
                {"name": "+Power Modifier","value": powerModBuff,"unit": "%"},
            ]
            const rowInjectionAllies = [
                {"name": "+Base Power Ratio","value": powerRatioBonus,"unit": "%"},
            ]

            const breakdownArray = [
                {"header": "ENHANCEMENT","value": null,"modifier": null,"hasCritAVG": null,"unit": "","isDOT": false,"ticksDOT": 0,"intervalDOT": 0,
                    "toggleElemID": ["lunaIsExcitingUsed","Use this Buff?"],
                    "toggleElemID2": ["lunaIsExcitingEnhanced","Is Enhanced?"],
                    "condition": false,"desc": ""},
                {"header": "SPEAKER","value": null,"modifier": null,"hasCritAVG": null,"unit": "","isDOT": false,"ticksDOT": 0,"intervalDOT": 0,
                    "condition": nameOverride != "Singer's Mercy","desc": ""},
                {"header": "NOTE SUCCESS","value": null,"modifier": null,"hasCritAVG": null,"unit": "","isDOT": false,"ticksDOT": 0,"intervalDOT": 0,
                    "condition": false,"desc": ""},
                {"header": "NOTE FAILURE","value": null,"modifier": null,"hasCritAVG": null,"unit": "","isDOT": false,"ticksDOT": 0,"intervalDOT": 0,
                    "condition": false,"desc": ""},

                {"header": "EXCITING PERFORMANCE","value": null,"modifier": null,"hasCritAVG": null,"unit": "","isDOT": false,"ticksDOT": 0,"intervalDOT": 0,
                    "rowInjection": [rowInjectionSelf,""],
                    "condition": enhancementCheck,"desc": ""},
                {"header": "EXCITING PERFORMANCE [ENH.]","value": null,"modifier": null,"hasCritAVG": null,"unit": "","isDOT": false,"ticksDOT": 0,"intervalDOT": 0,
                    "rowInjection": [rowInjectionSelf,""],
                    "condition": !enhancementCheck,"desc": ""},
                {"header": "EXCITING SOUND","value": null,"modifier": null,"hasCritAVG": null,"unit": "","isDOT": false,"ticksDOT": 0,"intervalDOT": 0,
                    "rowInjection": [rowInjectionAllies,""],
                    "condition": enhancementCheck,"desc": "This is the buff your allies receive."},
                {"header": "EXCITING SOUND [ENH.]","value": null,"modifier": null,"hasCritAVG": null,"unit": "","isDOT": false,"ticksDOT": 0,"intervalDOT": 0,
                    "rowInjection": [rowInjectionAllies,""],
                    "condition": !enhancementCheck,"desc": "This is the buff your allies receive."},
            ];
            const bodyString = `abilityBreakdownBody${skillPlacement}`;
            
            const addRow = calcsUIHelper.addHealingBoxCluster;
            readSelection(`abilityBreakdownBody${skillPlacement}`).innerHTML = `
            ${addRow("Max MP",maxMP,"")}
            <div class="basicsSummaryBox" id="lepicResultsBox">
                ${calcsUIHelper.addHealingBoxRows(bodyString,breakdownArray,abilityMap.displayStatsALT,index,returnObject,characterRef.name)}
            </div>
            <div class="abilityBreakdownHeader">DESCRIPTION</div>
            <div class="abilityBreakdownDescription">${abilityMap.desc}</div>
            `;
        }
        else {
            return {powerRatioBonus}
        }
        // <div class="abilityBreakdownGeneralMessage">asdf.</div>
    },
    lunaExcitingCalcsMercyStarter(index,returnObject,isCycleCalcs,nameOverride) {
        return customDamage.lunaExcitingCalcs(index,returnObject,isCycleCalcs,"Singer's Mercy");
    },
    lunaExcitingCalcsTier0SurgeStarter(index,returnObject,isCycleCalcs,nameOverride) {
        const characterRef = characters.Luna;
        const settingsRef = characterRef.characterSettings;
        const skillPlacement = 2;
        const abilityMap = characterRef.abilities[`ability${skillPlacement}`]["Noise Surge"];
        const abilityTypeArray = abilityMap.type;
        const abilityMods = abilityMap.powerMods;

        const currentStacks = settingsRef.lunaLargoStacks;

        index.SkillCritRateBaseBonus += settingsRef.lunaIsExcitingUsed ? currentStacks * abilityMods.largoCritStack : 0;
    },
    lunaExcitingCalcsSurgeStarter(index,returnObject,isCycleCalcs,nameOverride) { 
        const characterRef = characters.Luna;
        const settingsRef = characterRef.characterSettings;
        const skillPlacement = 2;
        const abilityMap = characterRef.abilities[`ability${skillPlacement}`]["Noise Surge"];
        const abilityTypeArray = abilityMap.type;
        const abilityMods = abilityMap.powerMods;

        const enhancementCheck = settingsRef.lunaIsExcitingEnhanced;

        const sumModifierBonus = calcs.getTotalSkillPowerModifier(index,abilityTypeArray);
        const baseSkillPower = calcs.getTotalSkillPower(index,abilityTypeArray);
        const abilityDR = calcs.getResistanceBasedDR(index,abilityTypeArray[0]);
        const crit = calcs.getCritComposites(returnObject);

        const basicInfo = {baseSkillPower,abilityDR,crit};

        const currentSkillBase = enhancementCheck ? abilityMods.baseEnhanced : abilityMods.base;
        const skillPowerModifier = currentSkillBase + sumModifierBonus;
        const damage = calcs.getCompositeDamageSpread(basicInfo,skillPowerModifier);
        const avgDmgPerHit = damage.AVG;

        const maxMP = returnObject.displayMP;

        if (!isCycleCalcs) {
            let stackLimit = abilityMods.stackLimit;

            const rowInjectionLargo = [
                {"name": "+Skill Crit Rate","value": settingsRef.lunaIsExcitingUsed ? settingsRef.lunaLargoStacks * abilityMods.largoCritStack : 0,"unit": "%"},
            ]

            const breakdownArray = [
                {"header": "ENHANCEMENT","value": null,"modifier": null,"hasCritAVG": null,"unit": "","isDOT": false,"ticksDOT": 0,"intervalDOT": 0,
                    "toggleElemID": ["lunaIsExcitingUsed","Use this Buff?"],
                    "toggleElemID2": ["lunaIsExcitingEnhanced","Is Enhanced?"],
                    "condition": false,"desc": ""},
                {"header": "NOTE SUCCESS","value": null,"modifier": null,"hasCritAVG": null,"unit": "","isDOT": false,"ticksDOT": 0,"intervalDOT": 0,
                    "condition": false,"desc": ""},
                {"header": "NOTE FAILURE","value": null,"modifier": null,"hasCritAVG": null,"unit": "","isDOT": false,"ticksDOT": 0,"intervalDOT": 0,
                    "condition": false,"desc": ""},

                {"header": "SKILL EFFECT","value": damage,"modifier": skillPowerModifier,"hasCritAVG": true,"unit": "","isDOT": false,"ticksDOT": 0,"intervalDOT": 0,
                    "condition": enhancementCheck,"desc": ""},
                {"header": "SKILL EFFECT [ENH.]","value": damage,"modifier": skillPowerModifier,"hasCritAVG": true,"unit": "","isDOT": false,"ticksDOT": 0,"intervalDOT": 0,
                    "condition": !enhancementCheck,"desc": ""},
                {"header": "LARGO","value": null,"modifier": null,"hasCritAVG": null,"unit": "","isDOT": false,"ticksDOT": 0,"intervalDOT": 0,
                    "rowInjection": [rowInjectionLargo,""],
                    "sliderElemID": ["lunaLargoStacks",0,stackLimit,1,"Stacks Count"],
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
            <div class="abilityBreakdownDescription">${abilityMap.desc}</div>
            `;
        }
        else {
            return {avgDmgPerHit}
        }
        // <div class="abilityBreakdownGeneralMessage">asdf.</div>
    },
    lunaExcitingCalcsAggressiveTier0(index,returnObject,isCycleCalcs,nameOverride) { 
        const characterRef = characters.Luna;
        const settingsRef = characterRef.characterSettings;
        const skillPlacement = 2;
        const abilityMap = characterRef.abilities[`ability${skillPlacement}`]["Aggressive Melody"];
        const abilityTypeArray = abilityMap.type;
        const abilityMods = abilityMap.powerMods;

        const powerModBuff = settingsRef.lunaIsExcitingEnhanced ? abilityMods.powerModBonusEnhanced : abilityMods.powerModBonus;

        index.PowerModifierBase += settingsRef.lunaIsExcitingUsed ? powerModBuff : 0;
    },
    lunaExcitingCalcsAggressive(index,returnObject,isCycleCalcs,nameOverride) { 
        const characterRef = characters.Luna;
        const settingsRef = characterRef.characterSettings;
        const skillPlacement = 2;
        const abilityMap = characterRef.abilities[`ability${skillPlacement}`]["Aggressive Melody"];
        const abilityTypeArray = abilityMap.type;
        const abilityMods = abilityMap.powerMods;

        const enhancementCheck = settingsRef.lunaIsExcitingEnhanced;

        const powerModBuff = settingsRef.lunaIsExcitingUsed ? enhancementCheck ? abilityMods.powerModBonusEnhanced : abilityMods.powerModBonus : 0;

        const maxMP = returnObject.displayMP;
        const MPModifier = settingsRef.lunaIsExcitingUsed ? enhancementCheck ? abilityMods.firearmATKBonusRateEnhanced : abilityMods.firearmATKBonusRate : 0;
        const powerRatioBonus = calcs.customTruncate(((maxMP * MPModifier)/100) + 0.00001,4);

        // console.log(powerRatioBonus)

        const firearmATKBonus = 0

        if (!isCycleCalcs) {
            // console.log(powerRatioBonus,maxMP * MPModifier,MPModifier,maxMP)
            const rowInjectionSelf = [
                {"name": "+Power Modifier","value": powerModBuff,"unit": "%"},
            ]
            const rowInjectionAllies = [
                {"name": "+Firearm ATK","value": powerRatioBonus,"unit": "%"},
            ]

            const breakdownArray = [
                {"header": "ENHANCEMENT","value": null,"modifier": null,"hasCritAVG": null,"unit": "","isDOT": false,"ticksDOT": 0,"intervalDOT": 0,
                    "toggleElemID": ["lunaIsExcitingUsed","Use this Buff?"],
                    "toggleElemID2": ["lunaIsExcitingEnhanced","Is Enhanced?"],
                    "condition": false,"desc": ""},
                {"header": "NOTE SUCCESS","value": null,"modifier": null,"hasCritAVG": null,"unit": "","isDOT": false,"ticksDOT": 0,"intervalDOT": 0,
                    "condition": false,"desc": ""},
                {"header": "NOTE FAILURE","value": null,"modifier": null,"hasCritAVG": null,"unit": "","isDOT": false,"ticksDOT": 0,"intervalDOT": 0,
                    "condition": false,"desc": ""},

                {"header": "EXCITING PERFORMANCE","value": null,"modifier": null,"hasCritAVG": null,"unit": "","isDOT": false,"ticksDOT": 0,"intervalDOT": 0,
                    "rowInjection": [rowInjectionSelf,""],
                    "condition": enhancementCheck,"desc": ""},
                {"header": "EXCITING PERFORMANCE [ENH.]","value": null,"modifier": null,"hasCritAVG": null,"unit": "","isDOT": false,"ticksDOT": 0,"intervalDOT": 0,
                    "rowInjection": [rowInjectionSelf,""],
                    "condition": !enhancementCheck,"desc": ""},
                {"header": "EXCITING SOUND","value": null,"modifier": null,"hasCritAVG": null,"unit": "","isDOT": false,"ticksDOT": 0,"intervalDOT": 0,
                    "rowInjection": [rowInjectionAllies,""],
                    "condition": enhancementCheck,"desc": "This is the buff your allies receive."},
                {"header": "EXCITING SOUND [ENH.]","value": null,"modifier": null,"hasCritAVG": null,"unit": "","isDOT": false,"ticksDOT": 0,"intervalDOT": 0,
                    "rowInjection": [rowInjectionAllies,""],
                    "condition": !enhancementCheck,"desc": "This is the buff your allies receive."},
            ];
            const bodyString = `abilityBreakdownBody${skillPlacement}`;
            
            const addRow = calcsUIHelper.addHealingBoxCluster;
            readSelection(`abilityBreakdownBody${skillPlacement}`).innerHTML = `
            ${addRow("Max MP",maxMP,"")}
            <div class="basicsSummaryBox" id="lepicResultsBox">
                ${calcsUIHelper.addHealingBoxRows(bodyString,breakdownArray,abilityMap.displayStatsALT,index,returnObject,characterRef.name)}
            </div>
            <div class="abilityBreakdownHeader">DESCRIPTION</div>
            <div class="abilityBreakdownDescription">${abilityMap.desc}</div>
            `;
        }
        else {
            return {firearmATKBonus}
        }
        // <div class="abilityBreakdownGeneralMessage">asdf.</div>
    },
    //ability 3
    lunaRelaxingCalcs(index,returnObject,isCycleCalcs,nameOverride) { 
        const characterRef = characters.Luna;
        const settingsRef = characterRef.characterSettings;
        const skillPlacement = 3;
        const abilityMap = characterRef.abilities[`ability${skillPlacement}`][nameOverride ? nameOverride : "base"];
        const abilityTypeArray = abilityMap.type;
        const abilityMods = abilityMap.powerMods;

        const enhancementCheck = settingsRef.lunaIsRelaxingEnhanced;

        // const powerModBuff = settingsRef.lunaIsRelaxingUsed ? enhancementCheck ? 0.65 : 0.20 : 0;

        const maxMP = returnObject.displayMP;
        // const MPModifier = settingsRef.lunaIsRelaxingUsed ? enhancementCheck ? 0.075 : 0.035 : 0;
        // const powerRatioBonus = (maxMP * MPModifier)/100;

        if (!isCycleCalcs) {
            // const rowInjectionSelf = [
            //     {"name": "+Power Modifier","value": powerModBuff,"unit": "%"},
            // ]
            // const rowInjectionAllies = [
            //     {"name": "+Base Power Ratio","value": powerRatioBonus,"unit": "%"},
            // ]

            const breakdownArray = [
                {"header": "ENHANCEMENT","value": null,"modifier": null,"hasCritAVG": null,"unit": "","isDOT": false,"ticksDOT": 0,"intervalDOT": 0,
                    "toggleElemID": ["lunaIsRelaxingUsed","Use this Buff?"],
                    "toggleElemID2": ["lunaIsRelaxingEnhanced","Is Enhanced?"],
                    "condition": false,"desc": ""},
                {"header": "SPEAKER","value": null,"modifier": null,"hasCritAVG": null,"unit": "","isDOT": false,"ticksDOT": 0,"intervalDOT": 0,
                    "condition": nameOverride != "Singer's Mercy","desc": ""},
                {"header": "NOTE SUCCESS","value": null,"modifier": null,"hasCritAVG": null,"unit": "","isDOT": false,"ticksDOT": 0,"intervalDOT": 0,
                    "condition": false,"desc": ""},
                {"header": "NOTE FAILURE","value": null,"modifier": null,"hasCritAVG": null,"unit": "","isDOT": false,"ticksDOT": 0,"intervalDOT": 0,
                    "condition": false,"desc": ""},

                {"header": "RELAXING PERFORMANCE","value": null,"modifier": null,"hasCritAVG": null,"unit": "","isDOT": false,"ticksDOT": 0,"intervalDOT": 0,
                    // "rowInjection": [rowInjectionSelf,""],
                    "condition": enhancementCheck,"desc": ""},
                {"header": "RELAXING PERFORMANCE [ENH.]","value": null,"modifier": null,"hasCritAVG": null,"unit": "","isDOT": false,"ticksDOT": 0,"intervalDOT": 0,
                    // "rowInjection": [rowInjectionSelf,""],
                    "condition": !enhancementCheck,"desc": ""},
                {"header": "RELAXING SOUND","value": null,"modifier": null,"hasCritAVG": null,"unit": "","isDOT": false,"ticksDOT": 0,"intervalDOT": 0,
                    // "rowInjection": [rowInjectionAllies,""],
                    "condition": enhancementCheck,"desc": "This is the buff your allies receive."},
                {"header": "RELAXING SOUND [ENH.]","value": null,"modifier": null,"hasCritAVG": null,"unit": "","isDOT": false,"ticksDOT": 0,"intervalDOT": 0,
                    // "rowInjection": [rowInjectionAllies,""],
                    "condition": !enhancementCheck,"desc": "This is the buff your allies receive."},
            ];
            const bodyString = `abilityBreakdownBody${skillPlacement}`;
            
            const addRow = calcsUIHelper.addHealingBoxCluster;
            readSelection(`abilityBreakdownBody${skillPlacement}`).innerHTML = `
            ${addRow("Max MP",maxMP,"")}
            <div class="basicsSummaryBox" id="lepicResultsBox">
                ${calcsUIHelper.addHealingBoxRows(bodyString,breakdownArray,abilityMap.displayStatsALT,index,returnObject,characterRef.name)}
            </div>
            <div class="abilityBreakdownHeader">DESCRIPTION</div>
            <div class="abilityBreakdownDescription">${abilityMap.desc}</div>
            `;
        }
        else {
            return {}
        }
        // <div class="abilityBreakdownGeneralMessage">asdf.</div>
    },
    lunaRelaxingCalcsMercyStarter(index,returnObject,isCycleCalcs,nameOverride) {
        return customDamage.lunaRelaxingCalcs(index,returnObject,isCycleCalcs,"Singer's Mercy");
    },
    lunaRelaxingCalcsTier0SurgeStarter(index,returnObject,isCycleCalcs,nameOverride) {
        const characterRef = characters.Luna;
        const settingsRef = characterRef.characterSettings;
        const skillPlacement = 3;
        const abilityMap = characterRef.abilities[`ability${skillPlacement}`]["Noise Surge"];
        const abilityTypeArray = abilityMap.type;
        const abilityMods = abilityMap.powerMods;

        const currentStacks = settingsRef.lunaCrescendoStacks;

        index.SkillCritDamage += settingsRef.lunaIsRelaxingUsed ? currentStacks * abilityMods.crescendoCritStack : 0;
    },
    lunaRelaxingCalcsSurgeStarter(index,returnObject,isCycleCalcs,nameOverride) { 
        const characterRef = characters.Luna;
        const settingsRef = characterRef.characterSettings;
        const skillPlacement = 3;
        const abilityMap = characterRef.abilities[`ability${skillPlacement}`]["Noise Surge"];
        const abilityTypeArray = abilityMap.type;
        const abilityMods = abilityMap.powerMods;

        const enhancementCheck = settingsRef.lunaIsRelaxingEnhanced;

        const sumModifierBonus = calcs.getTotalSkillPowerModifier(index,abilityTypeArray);
        const baseSkillPower = calcs.getTotalSkillPower(index,abilityTypeArray);
        const abilityDR = calcs.getResistanceBasedDR(index,abilityTypeArray[0]);
        const crit = calcs.getCritComposites(returnObject);

        const basicInfo = {baseSkillPower,abilityDR,crit};

        const currentSkillBase = enhancementCheck ? abilityMods.baseEnhanced : abilityMods.base;
        const skillPowerModifier = currentSkillBase + sumModifierBonus;
        const damage = calcs.getCompositeDamageSpread(basicInfo,skillPowerModifier);
        const avgDmgPerHit = damage.AVG;

        const maxMP = returnObject.displayMP;

        if (!isCycleCalcs) {
            let stackLimit = abilityMods.stackLimit;

            const rowInjectionLargo = [
                {"name": "+Skill Crit DMG","value": settingsRef.lunaIsRelaxingUsed ? settingsRef.lunaCrescendoStacks * abilityMods.crescendoCritStack : 0,"unit": "%"},
            ]

            const breakdownArray = [
                {"header": "ENHANCEMENT","value": null,"modifier": null,"hasCritAVG": null,"unit": "","isDOT": false,"ticksDOT": 0,"intervalDOT": 0,
                    "toggleElemID": ["lunaIsRelaxingUsed","Use this Buff?"],
                    "toggleElemID2": ["lunaIsRelaxingEnhanced","Is Enhanced?"],
                    "condition": false,"desc": ""},
                {"header": "NOTE SUCCESS","value": null,"modifier": null,"hasCritAVG": null,"unit": "","isDOT": false,"ticksDOT": 0,"intervalDOT": 0,
                    "condition": false,"desc": ""},
                {"header": "NOTE FAILURE","value": null,"modifier": null,"hasCritAVG": null,"unit": "","isDOT": false,"ticksDOT": 0,"intervalDOT": 0,
                    "condition": false,"desc": ""},

                {"header": "SKILL EFFECT","value": damage,"modifier": skillPowerModifier,"hasCritAVG": true,"unit": "","isDOT": false,"ticksDOT": 0,"intervalDOT": 0,
                    "condition": enhancementCheck,"desc": ""},
                {"header": "SKILL EFFECT [ENH.]","value": damage,"modifier": skillPowerModifier,"hasCritAVG": true,"unit": "","isDOT": false,"ticksDOT": 0,"intervalDOT": 0,
                    "condition": !enhancementCheck,"desc": ""},
                {"header": "CRESCENDO","value": null,"modifier": null,"hasCritAVG": null,"unit": "","isDOT": false,"ticksDOT": 0,"intervalDOT": 0,
                    "rowInjection": [rowInjectionLargo,""],
                    "sliderElemID": ["lunaCrescendoStacks",0,stackLimit,1,"Stacks Count"],
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
            <div class="abilityBreakdownDescription">${abilityMap.desc}</div>
            `;
        }
        else {
            return {avgDmgPerHit}
        }
        // <div class="abilityBreakdownGeneralMessage">asdf.</div>
    },
    //ability 4
    lunaCheerfulCalcsTier0(index,returnObject,isCycleCalcs,nameOverride) { 
        const characterRef = characters.Luna;
        const settingsRef = characterRef.characterSettings;
        const skillPlacement = 4;
        const abilityMap = characterRef.abilities[`ability${skillPlacement}`][nameOverride ? nameOverride : "base"];
        const abilityTypeArray = abilityMap.type;
        const abilityMods = abilityMap.powerMods;
    },
    lunaCheerfulCalcsTier0MercyStarter(index,returnObject,isCycleCalcs,nameOverride) { 
        return customDamage.lunaCheerfulCalcsTier0(index,returnObject,isCycleCalcs,"Singer's Mercy");
    },
    lunaCheerfulCalcs(index,returnObject,isCycleCalcs,nameOverride) { 
        const characterRef = characters.Luna;
        const settingsRef = characterRef.characterSettings;
        const skillPlacement = 4;
        const abilityMap = characterRef.abilities[`ability${skillPlacement}`][nameOverride ? nameOverride : "base"];
        const abilityTypeArray = abilityMap.type;
        const abilityMods = abilityMap.powerMods;

        const enhancementCheck = settingsRef.lunaIsCheerfulEnhanced;

        // const powerModBuff = settingsRef.lunaIsRelaxingUsed ? enhancementCheck ? 0.65 : 0.20 : 0;

        const maxMP = returnObject.displayMP;
        // const MPModifier = settingsRef.lunaIsRelaxingUsed ? enhancementCheck ? 0.075 : 0.035 : 0;
        // const powerRatioBonus = (maxMP * MPModifier)/100;

        if (!isCycleCalcs) {
            // const rowInjectionSelf = [
            //     {"name": "+Power Modifier","value": powerModBuff,"unit": "%"},
            // ]
            // const rowInjectionAllies = [
            //     {"name": "+Base Power Ratio","value": powerRatioBonus,"unit": "%"},
            // ]

            const breakdownArray = [
                {"header": "ENHANCEMENT","value": null,"modifier": null,"hasCritAVG": null,"unit": "","isDOT": false,"ticksDOT": 0,"intervalDOT": 0,
                    "toggleElemID": ["lunaIsCheerfulUsed","Use this Buff?"],
                    "toggleElemID2": ["lunaIsCheerfulEnhanced","Is Enhanced?"],
                    "condition": false,"desc": ""},
                {"header": "SPEAKER","value": null,"modifier": null,"hasCritAVG": null,"unit": "","isDOT": false,"ticksDOT": 0,"intervalDOT": 0,
                    "condition": nameOverride != "Singer's Mercy","desc": ""},
                {"header": "NOTE SUCCESS","value": null,"modifier": null,"hasCritAVG": null,"unit": "","isDOT": false,"ticksDOT": 0,"intervalDOT": 0,
                    "condition": false,"desc": ""},
                {"header": "NOTE FAILURE","value": null,"modifier": null,"hasCritAVG": null,"unit": "","isDOT": false,"ticksDOT": 0,"intervalDOT": 0,
                    "condition": false,"desc": ""},

                {"header": "CHEERFUL PERFORMANCE","value": null,"modifier": null,"hasCritAVG": null,"unit": "","isDOT": false,"ticksDOT": 0,"intervalDOT": 0,
                    // "rowInjection": [rowInjectionSelf,""],
                    "condition": enhancementCheck,"desc": ""},
                {"header": "CHEERFUL PERFORMANCE [ENH.]","value": null,"modifier": null,"hasCritAVG": null,"unit": "","isDOT": false,"ticksDOT": 0,"intervalDOT": 0,
                    // "rowInjection": [rowInjectionSelf,""],
                    "condition": !enhancementCheck,"desc": ""},
                {"header": "CHEERFUL SOUND","value": null,"modifier": null,"hasCritAVG": null,"unit": "","isDOT": false,"ticksDOT": 0,"intervalDOT": 0,
                    // "rowInjection": [rowInjectionAllies,""],
                    "condition": enhancementCheck,"desc": "This is the buff your allies receive."},
                {"header": "CHEERFUL SOUND [ENH.]","value": null,"modifier": null,"hasCritAVG": null,"unit": "","isDOT": false,"ticksDOT": 0,"intervalDOT": 0,
                    // "rowInjection": [rowInjectionAllies,""],
                    "condition": !enhancementCheck,"desc": "This is the buff your allies receive."},
            ];
            const bodyString = `abilityBreakdownBody${skillPlacement}`;
            
            const addRow = calcsUIHelper.addHealingBoxCluster;
            readSelection(`abilityBreakdownBody${skillPlacement}`).innerHTML = `
            ${addRow("Max MP",maxMP,"")}
            <div class="basicsSummaryBox" id="lepicResultsBox">
                ${calcsUIHelper.addHealingBoxRows(bodyString,breakdownArray,abilityMap.displayStatsALT,index,returnObject,characterRef.name)}
            </div>
            <div class="abilityBreakdownHeader">DESCRIPTION</div>
            <div class="abilityBreakdownDescription">${abilityMap.desc}</div>
            `;
        }
        else {
            return {}
        }
        // <div class="abilityBreakdownGeneralMessage">asdf.</div>
    },
    lunaCheerfulCalcsMercyStarter(index,returnObject,isCycleCalcs,nameOverride) { 
        return customDamage.lunaCheerfulCalcs(index,returnObject,isCycleCalcs,"Singer's Mercy");
    },
    lunaCheerfulCalcsTier0SurgeStarter(index,returnObject,isCycleCalcs,nameOverride) {
        const characterRef = characters.Luna;
        const settingsRef = characterRef.characterSettings;
        const skillPlacement = 4;
        const abilityMap = characterRef.abilities[`ability${skillPlacement}`]["Noise Surge"];
        const abilityTypeArray = abilityMap.type;
        const abilityMods = abilityMap.powerMods;

        const currentStacks = settingsRef.lunaForteStacks;

        index.PowerModifierBase += settingsRef.lunaIsCheerfulUsed ? currentStacks * abilityMods.fortePowerModStack : 0;
    },
    lunaCheerfulCalcsSurgeStarter(index,returnObject,isCycleCalcs,nameOverride) { 
        const characterRef = characters.Luna;
        const settingsRef = characterRef.characterSettings;
        const skillPlacement = 4;
        const abilityMap = characterRef.abilities[`ability${skillPlacement}`]["Noise Surge"];
        const abilityTypeArray = abilityMap.type;
        const abilityMods = abilityMap.powerMods;

        const enhancementCheck = settingsRef.lunaIsCheerfulEnhanced;

        const sumModifierBonus = calcs.getTotalSkillPowerModifier(index,abilityTypeArray);
        const baseSkillPower = calcs.getTotalSkillPower(index,abilityTypeArray);
        const abilityDR = calcs.getResistanceBasedDR(index,abilityTypeArray[0]);
        const crit = calcs.getCritComposites(returnObject);

        const basicInfo = {baseSkillPower,abilityDR,crit};

        const currentSkillBase = enhancementCheck ? abilityMods.baseEnhanced : abilityMods.base;
        const skillPowerModifier = currentSkillBase + sumModifierBonus;
        const damage = calcs.getCompositeDamageSpread(basicInfo,skillPowerModifier);
        const avgDmgPerHit = damage.AVG;

        const maxMP = returnObject.displayMP;

        if (!isCycleCalcs) {
            let stackLimit = abilityMods.stackLimit;

            const rowInjectionLargo = [
                {"name": "+Skill Power Mod","value": settingsRef.lunaIsCheerfulUsed ? settingsRef.lunaForteStacks * abilityMods.fortePowerModStack : 0,"unit": "%"},
            ]

            const breakdownArray = [
                {"header": "ENHANCEMENT","value": null,"modifier": null,"hasCritAVG": null,"unit": "","isDOT": false,"ticksDOT": 0,"intervalDOT": 0,
                    "toggleElemID": ["lunaIsCheerfulUsed","Use this Buff?"],
                    "toggleElemID2": ["lunaIsCheerfulEnhanced","Is Enhanced?"],
                    "condition": false,"desc": ""},
                {"header": "NOTE SUCCESS","value": null,"modifier": null,"hasCritAVG": null,"unit": "","isDOT": false,"ticksDOT": 0,"intervalDOT": 0,
                    "condition": false,"desc": ""},
                {"header": "NOTE FAILURE","value": null,"modifier": null,"hasCritAVG": null,"unit": "","isDOT": false,"ticksDOT": 0,"intervalDOT": 0,
                    "condition": false,"desc": ""},

                {"header": "SKILL EFFECT","value": damage,"modifier": skillPowerModifier,"hasCritAVG": true,"unit": "","isDOT": false,"ticksDOT": 0,"intervalDOT": 0,
                    "condition": enhancementCheck,"desc": ""},
                {"header": "SKILL EFFECT [ENH.]","value": damage,"modifier": skillPowerModifier,"hasCritAVG": true,"unit": "","isDOT": false,"ticksDOT": 0,"intervalDOT": 0,
                    "condition": !enhancementCheck,"desc": ""},
                {"header": "FORTE","value": null,"modifier": null,"hasCritAVG": null,"unit": "","isDOT": false,"ticksDOT": 0,"intervalDOT": 0,
                    "rowInjection": [rowInjectionLargo,""],
                    "sliderElemID": ["lunaForteStacks",0,stackLimit,1,"Stacks Count"],
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
            <div class="abilityBreakdownDescription">${abilityMap.desc}</div>
            `;
        }
        else {
            return {avgDmgPerHit}
        }
        // <div class="abilityBreakdownGeneralMessage">asdf.</div>
    },
    lunaCheerfulCalcsAggressiveTier0(index,returnObject,isCycleCalcs,nameOverride) { 
        const characterRef = characters.Luna;
        const settingsRef = characterRef.characterSettings;
        const skillPlacement = 4;
        const abilityMap = characterRef.abilities[`ability${skillPlacement}`]["Aggressive Melody"];
        const abilityTypeArray = abilityMap.type;
        const abilityMods = abilityMap.powerMods;

        // const powerModBuff = settingsRef.lunaIsCheerfulEnhanced ? 0.242 : 0.076;

        // index["WeakPointDamage%"] += settingsRef.lunaIsCheerfulUsed ? powerModBuff : 0;
    },
    lunaCheerfulCalcsAggressive(index,returnObject,isCycleCalcs,nameOverride) { 
        const characterRef = characters.Luna;
        const settingsRef = characterRef.characterSettings;
        const skillPlacement = 4;
        const abilityMap = characterRef.abilities[`ability${skillPlacement}`]["Aggressive Melody"];
        const abilityTypeArray = abilityMap.type;
        const abilityMods = abilityMap.powerMods;

        const enhancementCheck = settingsRef.lunaIsCheerfulEnhanced;

        // const powerModBuff = settingsRef.lunaIsRelaxingUsed ? enhancementCheck ? 0.65 : 0.20 : 0;

        const maxMP = returnObject.displayMP;
        // const MPModifier = settingsRef.lunaIsRelaxingUsed ? enhancementCheck ? 0.075 : 0.035 : 0;
        // const powerRatioBonus = (maxMP * MPModifier)/100;

        if (!isCycleCalcs) {
            // const rowInjectionSelf = [
            //     {"name": "+Power Modifier","value": powerModBuff,"unit": "%"},
            // ]
            // const rowInjectionAllies = [
            //     {"name": "+Base Power Ratio","value": powerRatioBonus,"unit": "%"},
            // ]

            const breakdownArray = [
                {"header": "ENHANCEMENT","value": null,"modifier": null,"hasCritAVG": null,"unit": "","isDOT": false,"ticksDOT": 0,"intervalDOT": 0,
                    "toggleElemID": ["lunaIsCheerfulUsed","Use this Buff?"],
                    "toggleElemID2": ["lunaIsCheerfulEnhanced","Is Enhanced?"],
                    "condition": false,"desc": ""},
                {"header": "NOTE SUCCESS","value": null,"modifier": null,"hasCritAVG": null,"unit": "","isDOT": false,"ticksDOT": 0,"intervalDOT": 0,
                    "condition": false,"desc": ""},
                {"header": "NOTE FAILURE","value": null,"modifier": null,"hasCritAVG": null,"unit": "","isDOT": false,"ticksDOT": 0,"intervalDOT": 0,
                    "condition": false,"desc": ""},

                {"header": "CHEERFUL PERFORMANCE","value": null,"modifier": null,"hasCritAVG": null,"unit": "","isDOT": false,"ticksDOT": 0,"intervalDOT": 0,
                    // "rowInjection": [rowInjectionSelf,""],
                    "condition": enhancementCheck,"desc": ""},
                {"header": "CHEERFUL PERFORMANCE [ENH.]","value": null,"modifier": null,"hasCritAVG": null,"unit": "","isDOT": false,"ticksDOT": 0,"intervalDOT": 0,
                    // "rowInjection": [rowInjectionSelf,""],
                    "condition": !enhancementCheck,"desc": ""},
                {"header": "CHEERFUL SOUND","value": null,"modifier": null,"hasCritAVG": null,"unit": "","isDOT": false,"ticksDOT": 0,"intervalDOT": 0,
                    // "rowInjection": [rowInjectionAllies,""],
                    "condition": enhancementCheck,"desc": "This is the buff your allies receive."},
                {"header": "CHEERFUL SOUND [ENH.]","value": null,"modifier": null,"hasCritAVG": null,"unit": "","isDOT": false,"ticksDOT": 0,"intervalDOT": 0,
                    // "rowInjection": [rowInjectionAllies,""],
                    "condition": !enhancementCheck,"desc": "This is the buff your allies receive."},
            ];
            const bodyString = `abilityBreakdownBody${skillPlacement}`;
            
            const addRow = calcsUIHelper.addHealingBoxCluster;
            readSelection(`abilityBreakdownBody${skillPlacement}`).innerHTML = `
            ${addRow("Max MP",maxMP,"")}
            <div class="basicsSummaryBox" id="lepicResultsBox">
                ${calcsUIHelper.addHealingBoxRows(bodyString,breakdownArray,abilityMap.displayStatsALT,index,returnObject,characterRef.name)}
            </div>
            <div class="abilityBreakdownHeader">DESCRIPTION</div>
            <div class="abilityBreakdownDescription">${abilityMap.desc}</div>
            `;
        }
        else {
            return {}
        }
        // <div class="abilityBreakdownGeneralMessage">asdf.</div>
    },
    //passive
    lunaImprovCalcs(index,returnObject,isCycleCalcs,nameOverride) { 
        const characterRef = characters.Luna;
        const settingsRef = characterRef.characterSettings;
        const skillPlacement = 5;
        const abilityMap = characterRef.abilities[`ability${skillPlacement}`][nameOverride ? nameOverride : "base"];
        const abilityTypeArray = abilityMap.type;
        const abilityMods = abilityMap.powerMods;

        if (!isCycleCalcs) {
            // const rowInjection = [
            //     {"name": "+Power Mod","value": finalPowerModifier,"unit": "%"},
            //     {"name": "+Toxin Res%","value": finalToxinRes,"unit": "%"},
            //     {"name": "+Shield%/s","value": finalShieldRegen,"unit": "%"},
            // ]

            const breakdownArray = [
                {"header": "VIVACE","value": null,"modifier": null,"hasCritAVG": true,"unit": "","isDOT": false,"ticksDOT": 0,"intervalDOT": 0,
                    "condition": nameOverride != "Nimble Footsteps","desc": "",
                    "sliderElemID": ["lunaNimbleStacks",0,20,1,"Stacks Count"],//"rowInjection": [rowInjection,""],},
                    },
            ];
            const bodyString = `abilityBreakdownBody${skillPlacement}`;
            
            const addRow = calcsUIHelper.addHealingBoxCluster;
            readSelection(`abilityBreakdownBody${skillPlacement}`).innerHTML = `
            <div class="basicsSummaryBox" id="lepicResultsBox">
                ${calcsUIHelper.addHealingBoxRows(bodyString,breakdownArray,abilityMap.displayStatsALT,index,returnObject,characterRef.name)}
            </div>
            <div class="abilityBreakdownHeader">DESCRIPTION</div>
            <div class="abilityBreakdownDescription">${abilityMap.desc}</div>
            `;
        }
        else {
            return {}
        }
        // <div class="abilityBreakdownGeneralMessage">asdf.</div>
    },
    lunaImprovCalcsNimbleStarterTier0(index,returnObject,isCycleCalcs,nameOverride) {
        const characterRef = characters.Luna;
        const settingsRef = characterRef.characterSettings;
        const skillPlacement = 5;
        const abilityMap = characterRef.abilities[`ability${skillPlacement}`]["Nimble Footsteps"];
        const abilityTypeArray = abilityMap.type;
        const abilityMods = abilityMap.powerMods;

        const currentStacks = settingsRef.lunaNimbleStacks;
        index.SprintSpeedBonus += currentStacks * abilityMods.movementStackBonus;
        index.SkillRange += currentStacks * abilityMods.rangeStackBonus;
    },
    lunaImprovCalcsNimbleStarter(index,returnObject,isCycleCalcs,nameOverride) {
        return customDamage.lunaImprovCalcs(index,returnObject,isCycleCalcs,"Nimble Footsteps");
    },
    lunaImprovCalcsSurgeStarter(index,returnObject,isCycleCalcs,nameOverride) {
        return customDamage.lunaImprovCalcs(index,returnObject,isCycleCalcs,"Noise Surge");
    },

    //SHAREN
    //ability 1
    sharenCutoffCalcs(index,returnObject,isCycleCalcs,nameOverride) { 
        const characterRef = characters.Sharen;
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
        const skillPowerModifierDOT = abilityMods.baseDOT + sumModifierBonus;

        const damage = calcs.getCompositeDamageSpread(basicInfo,skillPowerModifier);
        const damageDOT = calcs.getCompositeDamageSpread(basicInfo,skillPowerModifierDOT);

        const damageDOTBreakdown = calcs.getDoTTotalBreakdown(index,damageDOT.AVG,abilityMods.intervalDOT,abilityMods.durationDOT);
        // {durationDOT,totalTicks,intervalDOT,totalTickDamage}

        const avgDmgPerHit= damage.AVG;

        const avgDmgPerTick = damageDOT.AVG;
        const totalTickDamageElectric = damageDOTBreakdown.totalTickDamage;

        if (!isCycleCalcs) {
            let rowInjection = [
                {"name": "DOT Duration","value": damageDOTBreakdown.durationDOT,"unit": ""},
                {"name": "Interval (s)","value": damageDOTBreakdown.intervalDOT,"unit": ""},
                {"name": "Total Ticks","value": damageDOTBreakdown.totalTicks,"unit": ""},
            ]

            const breakdownArray = [
                {"header": "SKILL EFFECT","value": damage,"modifier": skillPowerModifier,"hasCritAVG": true,"unit": "",
                    // "sliderElemID": ["blairActiveZones",0,7,1,"Active Zones"],
                    // "rowInjection": [rowInjectionZone,""],
                    "condition": false,"desc": ""},
                {"header": "ELECTROCUTION","value": damageDOT,"modifier": skillPowerModifierDOT,"hasCritAVG": true,"unit": "","magazineTypeWeapon": [damageDOTBreakdown.totalTicks,totalTickDamageElectric],
                    "rowInjection": [rowInjection,""],
                    "condition": false,"desc": ""},
            ];
            const bodyString = `abilityBreakdownBody${skillPlacement}`;
            
            const addRow = calcsUIHelper.addHealingBoxCluster;
            readSelection(`abilityBreakdownBody${skillPlacement}`).innerHTML = `
            <div class="basicsSummaryBox" id="lepicResultsBox">
                ${addRow("Power",baseSkillPower,"")}
                ${calcsUIHelper.addHealingBoxRows(bodyString,breakdownArray,abilityMap.displayStatsALT,index,returnObject,characterRef.name)}
            </div>
            <div class="abilityBreakdownHeader">DESCRIPTION</div>
            <div class="abilityBreakdownDescription">${tooltips.updateSubstatColor(abilityMap.desc)}</div>
            `;
        }
        else {
            return {avgDmgPerTick,totalTickDamageElectric,avgDmgPerHit}
        }
        // <div class="abilityBreakdownGeneralMessage">asdf.</div>
    },
    sharenCutoffCalcsReleaseStarter(index,returnObject,isCycleCalcs,nameOverride) {
        return customDamage.sharenCutoffCalcs(index,returnObject,isCycleCalcs,"Release Cutting Force");
    },
    //ability 2
    sharenActiveCalcsTier0(index,returnObject,isCycleCalcs,nameOverride) { 
        const characterRef = characters.Sharen;
        const settingsRef = characterRef.characterSettings;
        const skillPlacement = 2;
        const abilityMap = characterRef.abilities[`ability${skillPlacement}`][nameOverride ? nameOverride : "base"];
        const abilityTypeArray = abilityMap.type;
        const abilityMods = abilityMap.powerMods;

        // const stacks = Math.min(abilityMods.stackLimit,settingsRef.blairActiveZones);
        // const totalModBonus = abilityMods.powerModBonus * stacks;
        // index.PowerModifierBase += settingsRef.blairUseExtinguish ? totalModBonus : 0;

        if (settingsRef.sharenAmbushActive) {
            index.SkillCritRateBaseBonus += abilityMods.skillCritBonus;
            index.FirearmCritRateBase += abilityMods.firearmCritBonus;


            //this is the skill dmg multiplier
            index.CharacterSkillMultiplier += abilityMods.dmgMulti;


            //this type of bonus will only apply to the first shot since only Ambushed has the ability to reset the ambush effect
            let oneTimeBonus = {
                "stats": [
                    {"name": "WeaponUniqueMultiplierCORE","value": abilityMods.dmgMulti,"subStackValue": null},
                ],
                "bonusName": "Ambush (Active Camo)",
                "oneTimeOrStack": "cooldown",
                "limit": 1,
                "currentStacks": 0,
                "timePassedEntry": 0,
                "conditions": ["isReloaded"],
                "cooldown": 1,
            };

            //this type of bonus will apply to every shot
            let repeatedBonus = {
                "stats": [
                    {"name": "WeaponUniqueMultiplierCORE","value": abilityMods.dmgMulti,"subStackValue": null},
                ],
                "bonusName": "Ambush (Ambushed)",
                "oneTimeOrStack": "duration",
                "limit": 1,
                "cooldown": 0.05,
                "duration": 999,
                "currentStacks": 0,
                "timePassedEntry": 0,
                "isDurationActive": true,
                "isCooldownActive": false,
                "conditions": ["isReloaded"],
                "skipFirstShot": false,
            }



            abilityMap.complexBonus = [nameOverride==="Ambushed" ? repeatedBonus : oneTimeBonus]
        }
        else {
            abilityMap.complexBonus = []
        }


        if (!isCycleCalcs) {
            // let rowInjection = [
            //     {"name": "Valid Zones","value": stacks,"unit": ""},
            //     {"name": "Max MP Recovered","value": 0.08 * stacks,"unit": "%"},
            //     {"name": "+Power Modifier%","value": totalModBonus,"unit": "%"},
            // ]

            const breakdownArray = [
                {"header": "ACTIVE CAMOUFLAGE","value": null,"modifier": null,"hasCritAVG": true,"unit": "",
                    "toggleElemID": ["sharenCamoActive","Use Camo?"],
                    // "rowInjection": [rowInjection,"Bonuses are modified by the flame zone count setting on the first ability."],
                    "condition": false,"desc": ""},
                {"header": "AMBUSH","value": null,"modifier": null,"hasCritAVG": true,"unit": "",
                    "toggleElemID": ["sharenAmbushActive","Use Ambush?"],
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
    sharenActiveCalcsTier0EdgeStarter(index,returnObject,isCycleCalcs,nameOverride) {
        return customDamage.sharenActiveCalcsTier0(index,returnObject,isCycleCalcs,"Overcharged Edge");
    },
    sharenActiveCalcsTier0AmbushedStarter(index,returnObject,isCycleCalcs,nameOverride) { 
        const characterRef = characters.Sharen;
        const settingsRef = characterRef.characterSettings;
        const skillPlacement = 2;
        const abilityMap = characterRef.abilities[`ability${skillPlacement}`].Ambushed;
        const abilityTypeArray = abilityMap.type;
        const abilityMods = abilityMap.powerMods;

        if (settingsRef.sharenCamoActive) {index.SkillCooldown += abilityMods.cooldownBonus;}

        return customDamage.sharenActiveCalcsTier0(index,returnObject,isCycleCalcs,"Ambushed");
    },
    //ability 3
    sharenNutsCalcsTier0(index,returnObject,isCycleCalcs,nameOverride) {
        const characterRef = characters.Sharen;
        const settingsRef = characterRef.characterSettings;
        const skillPlacement = 3;
        const abilityMap = characterRef.abilities[`ability${skillPlacement}`][nameOverride ? nameOverride : "base"];
        const abilityTypeArray = abilityMap.type;
        const abilityMods = abilityMap.powerMods;

        if (nameOverride === "Battlesuit Melting Rounds" && settingsRef.sharenMeltingActive) {
            index.enemyDEFResistanceReduction += -0.40;
            index.enemyElectricResistanceReduction += -0.40;
        }
    },
    sharenNutsCalcsTier0BattleStarter(index,returnObject,isCycleCalcs,nameOverride) {
        return customDamage.sharenNutsCalcsTier0(index,returnObject,isCycleCalcs,"Battlesuit Melting Rounds");
    },
    sharenNutsCalcs(index,returnObject,isCycleCalcs,nameOverride) {
        const characterRef = characters.Sharen;
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

        const avgDmgPerHit= damage.AVG;


        if (!isCycleCalcs) {

            let referencedDMG = nameOverride ? null : damage;
            let referencedMod = nameOverride ? null : skillPowerModifier;

            const breakdownArray = [
                {"header": "SKILL EFFECT","value": referencedDMG,"modifier": referencedMod,"hasCritAVG": true,"unit": "",
                    // "toggleElemID": ["sharenAmbushActive","Use Ambush?"],
                    // "rowInjection": [rowInjection,"Bonuses are modified by the flame zone count setting on the first ability."],
                    "condition": false,"desc": ""},
                {"header": "STUN","value": null,"modifier": null,"hasCritAVG": true,"unit": "",
                    "condition": nameOverride,"desc": ""},
                {"header": "MELTING BATTLESUIT","value": null,"modifier": null,"hasCritAVG": true,"unit": "",
                    "toggleElemID": ["sharenMeltingActive","Use Melting?"],
                    "condition": nameOverride != "Battlesuit Melting Rounds","desc": ""},
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
    },
    sharenNutsCalcsBattlesuitStarter(index,returnObject,isCycleCalcs,nameOverride) {
        return customDamage.sharenNutsCalcs(index,returnObject,isCycleCalcs,"Battlesuit Melting Rounds");
    },
    sharenNutsCalcsAmbushedStarter(index,returnObject,isCycleCalcs,nameOverride) { 
        const characterRef = characters.Sharen;
        const settingsRef = characterRef.characterSettings;
        const skillPlacement = 3;
        const abilityMap = characterRef.abilities[`ability${skillPlacement}`].Ambushed;
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

        const damageDOTBreakdown = calcs.getDoTTotalBreakdown(index,damageDOT.AVG,abilityMods.intervalDOT,abilityMods.durationDOT);
        // {durationDOT,totalTicks,intervalDOT,totalTickDamage}

        const avgDmgPerHit= damage.AVG;

        const avgDmgPerTick = damageDOT.AVG;
        const totalTickDamageElectric = damageDOTBreakdown.totalTickDamage;

        if (!isCycleCalcs) {
            let rowInjection = [
                {"name": "DOT Duration","value": damageDOTBreakdown.durationDOT,"unit": ""},
                {"name": "Interval (s)","value": damageDOTBreakdown.intervalDOT,"unit": ""},
                {"name": "Total Ticks","value": damageDOTBreakdown.totalTicks,"unit": ""},
            ]

            const breakdownArray = [
                {"header": "SKILL EFFECT","value": damage,"modifier": skillPowerModifier,"hasCritAVG": true,"unit": "",
                    // "sliderElemID": ["blairActiveZones",0,7,1,"Active Zones"],
                    // "rowInjection": [rowInjectionZone,""],
                    "condition": false,"desc": ""},
                {"header": "ELECTROCUTION","value": damageDOT,"modifier": skillPowerModifierDOT,"hasCritAVG": true,"unit": "","magazineTypeWeapon": [damageDOTBreakdown.totalTicks,totalTickDamageElectric],
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
            return {avgDmgPerTick,totalTickDamageElectric,avgDmgPerHit}
        }
        // <div class="abilityBreakdownGeneralMessage">asdf.</div>
    },
    //ability 4
    sharenFlashCalcs(index,returnObject,isCycleCalcs,nameOverride) {
        const characterRef = characters.Sharen;
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

        const damageDOTBreakdown = calcs.getDoTTotalBreakdown(index,damageDOT.AVG,abilityMods.intervalDOT,abilityMods.durationDOT);
        // {durationDOT,totalTicks,intervalDOT,totalTickDamage}

        const hitsOnTarget = abilityMods.maxHits;

        const avgDmgPerHit= damage.AVG;
        const totalHitsDMG = damage.AVG * hitsOnTarget;

        const avgDmgPerTick = damageDOT.AVG;
        const totalTickDamageElectric = damageDOTBreakdown.totalTickDamage;

        if (!isCycleCalcs) {
            let rowInjection = [
                {"name": "DOT Duration","value": damageDOTBreakdown.durationDOT,"unit": ""},
                {"name": "Interval (s)","value": damageDOTBreakdown.intervalDOT,"unit": ""},
                {"name": "Total Ticks","value": damageDOTBreakdown.totalTicks,"unit": ""},
            ]

            const breakdownArray = [
                {"header": "SKILL EFFECT","value": damage,"modifier": skillPowerModifier,"hasCritAVG": true,"unit": "","magazineTypeWeapon": [hitsOnTarget,totalHitsDMG],
                    // "sliderElemID": ["blairActiveZones",0,7,1,"Active Zones"],
                    // "rowInjection": [rowInjectionZone,""],
                    "condition": false,"desc": ""},
                {"header": "ELECTROCUTION","value": damageDOT,"modifier": skillPowerModifierDOT,"hasCritAVG": true,"unit": "","magazineTypeWeapon": [damageDOTBreakdown.totalTicks,totalTickDamageElectric],
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
            return {avgDmgPerTick,totalTickDamageElectric,avgDmgPerHit,totalHitsDMG}
        }
        // <div class="abilityBreakdownGeneralMessage">asdf.</div>
    },
    sharenFlashCalcsVoidStarter(index,returnObject,isCycleCalcs,nameOverride) {
        return customDamage.sharenFlashCalcs(index,returnObject,isCycleCalcs,"Void Domination");
    },
    sharenFlashCalcsAreaStarter(index,returnObject,isCycleCalcs,nameOverride) {
        return customDamage.sharenFlashCalcs(index,returnObject,isCycleCalcs,"Area Suppression");
    },
    //passive
    sharenAssassinCalcsTier0(index,returnObject,isCycleCalcs,nameOverride) {
        const characterRef = characters.Sharen;
        const settingsRef = characterRef.characterSettings;
        const skillPlacement = 5;
        const abilityMap = characterRef.abilities[`ability${skillPlacement}`][nameOverride ? nameOverride : "base"];
        const abilityTypeArray = abilityMap.type;
        const abilityMods = abilityMap.powerMods;

        // const stacks = Math.min(abilityMods.stackLimit,settingsRef.blairActiveZones);
        // const totalModBonus = abilityMods.powerModBonus * stacks;
        // index.PowerModifierBase += settingsRef.blairUseExtinguish ? totalModBonus : 0;

        //the 15% bonus is a multi, seemingly like zenith, applies to the attribute conversion base amount but nothing else
        //confirm it doesn't touch faction attack later
        //additive to active camo's bonus so 2 + .15
        //overcharged edge is a 2.5 multi + .5 which would consume 50% shields not a fixed amount, also additive with the 15% bonus


        if (settingsRef.sharenTargetBonus) {
            //this is the skill dmg multiplier
            index.CharacterSkillMultiplier += abilityMods.dmgMulti;

            // //this type of bonus will only apply to the first shot since only Ambushed has the ability to reset the ambush effect
            // let oneTimeBonus = {
            //     "stats": [
            //         {"name": "WeaponUniqueMultiplierCORE","value": abilityMods.dmgMulti,"subStackValue": null},
            //     ],
            //     "bonusName": "Assassinator",
            //     "oneTimeOrStack": "cooldown",
            //     "limit": 1,
            //     "currentStacks": 0,
            //     "timePassedEntry": 0,
            //     "conditions": ["isReloaded"],
            //     "cooldown": 1,
            // };

            //this type of bonus will apply to every shot

            //ASSASSINATOR NOTE: this doesn't have a cooldown and applies to ALL damage if the target isn't after you. So in essence, this bonus SHOULD apply to all shots, unlike ambushed
            let repeatedBonus = {
                "stats": [
                    {"name": "WeaponUniqueMultiplierCORE","value": abilityMods.dmgMulti,"subStackValue": null},
                ],
                "bonusName": "Assassinator",
                "oneTimeOrStack": "duration",
                "limit": 1,
                "cooldown": 0.05,
                "duration": 999,
                "currentStacks": 0,
                "timePassedEntry": 0,
                "isDurationActive": true,
                "isCooldownActive": false,
                "conditions": ["isReloaded"],
                "skipFirstShot": false,
            }

            abilityMap.complexBonus = [repeatedBonus]
        }
        else {
            abilityMap.complexBonus = []
        }

        if (!isCycleCalcs) {

            const breakdownArray = [
                {"header": "SKILL EFFECT","value": null,"modifier": null,"hasCritAVG": true,"unit": "",
                    "toggleElemID": ["sharenTargetBonus","Use Bonus?"],
                    "condition": false,"desc": "The non-targeted bonus will default to off, so make sure you turn it on if you ever want to include it."},
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
    sharenAssassinCalcsTier0OverchargedStarter(index,returnObject,isCycleCalcs,nameOverride) {
        return customDamage.sharenAssassinCalcsTier0(index,returnObject,isCycleCalcs,"Overcharged Edge");
    },
    sharenAssassinCalcsTier0AmbushedStarter(index,returnObject,isCycleCalcs,nameOverride) {
        return customDamage.sharenAssassinCalcsTier0(index,returnObject,isCycleCalcs,"Ambushed");
    },


    //BLAIR
    //ability 1
    blairBlazeCalcs(index,returnObject,isCycleCalcs,nameOverride) { 
        const characterRef = characters.Blair;
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
        const skillPowerModifierDOT = abilityMods.baseDOT + sumModifierBonus;

        const damage = calcs.getCompositeDamageSpread(basicInfo,skillPowerModifier);
        const damageDOT = calcs.getCompositeDamageSpread(basicInfo,skillPowerModifierDOT);

        const damageZoneBreakdown = calcs.getDoTTotalBreakdown(index,damage.AVG,abilityMods.interval,abilityMods.duration);
        const damageDOTBreakdown = calcs.getDoTTotalBreakdown(index,damageDOT.AVG,abilityMods.intervalDOT,abilityMods.durationDOT);
        // {durationDOT,totalTicks,intervalDOT,totalTickDamage}

        const avgDmgPerZone= damage.AVG;
        const totalTickDamageZone = damageZoneBreakdown.totalTickDamage;

        const avgDmgPerBurn = damageDOT.AVG;
        const totalTickDamageBurn = damageDOTBreakdown.totalTickDamage;

        const activeZones = settingsRef.blairActiveZones;

        const sumTotalAVG = (totalTickDamageZone * activeZones) + totalTickDamageBurn;

        if (!isCycleCalcs) {
            let rowInjectionZone = [
                {"name": "Zone Duration","value": damageZoneBreakdown.durationDOT,"unit": ""},
                {"name": "Interval (s)","value": damageZoneBreakdown.intervalDOT,"unit": ""},
                {"name": "Total Ticks","value": damageZoneBreakdown.totalTicks,"unit": ""},
            ]
            let rowInjection = [
                {"name": "DOT Duration","value": damageDOTBreakdown.durationDOT,"unit": ""},
                {"name": "Interval (s)","value": damageDOTBreakdown.intervalDOT,"unit": ""},
                {"name": "Total Ticks","value": damageDOTBreakdown.totalTicks,"unit": ""},
            ]

            const breakdownArray = [
                {"header": "FLAME ZONE","value": damage,"modifier": skillPowerModifier,"hasCritAVG": true,"unit": "","magazineTypeWeapon": [damageZoneBreakdown.totalTicks,totalTickDamageZone * activeZones],
                    "sliderElemID": ["blairActiveZones",0,7,1,"Active Zones"],
                    "rowInjection": [rowInjectionZone,""],
                    "condition": false,"desc": ""},
                {"header": "BURN","value": damageDOT,"modifier": skillPowerModifierDOT,"hasCritAVG": true,"unit": "","magazineTypeWeapon": [damageDOTBreakdown.totalTicks,totalTickDamageBurn],
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
            return {avgDmgPerBurn,totalTickDamageBurn,avgDmgPerZone,totalTickDamageZone,sumTotalAVG}
        }
        // <div class="abilityBreakdownGeneralMessage">asdf.</div>
    },
    blairBlazeCalcsBombStarter(index,returnObject,isCycleCalcs,nameOverride) {
        return customDamage.blairBlazeCalcs(index,returnObject,isCycleCalcs,"Incendiary Bomb");
    },
    blairBlazeCalcsClassicStarter(index,returnObject,isCycleCalcs,nameOverride) {
        return customDamage.blairBlazeCalcs(index,returnObject,isCycleCalcs,"Classic Chef");
    },
    blairBlazeCalcsBackStarter(index,returnObject,isCycleCalcs,nameOverride) {
        return customDamage.blairBlazeCalcs(index,returnObject,isCycleCalcs,"Backdraft");
    },
    //ability 2
    blairExtinguishCalcsTier0(index,returnObject,isCycleCalcs,nameOverride) { 
        const characterRef = characters.Blair;
        const settingsRef = characterRef.characterSettings;
        const skillPlacement = 2;
        const abilityMap = characterRef.abilities[`ability${skillPlacement}`][nameOverride ? nameOverride : "base"];
        const abilityTypeArray = abilityMap.type;
        const abilityMods = abilityMap.powerMods;

        const stacks = Math.min(abilityMods.stackLimit,settingsRef.blairActiveZones);
        const totalModBonus = abilityMods.powerModBonus * stacks;

        index.PowerModifierBase += settingsRef.blairUseExtinguish ? totalModBonus : 0;


        if (!isCycleCalcs) {
            let rowInjection = [
                {"name": "Valid Zones","value": stacks,"unit": ""},
                {"name": "Max MP Recovered","value": 0.08 * stacks,"unit": "%"},
                {"name": "+Power Modifier%","value": totalModBonus,"unit": "%"},
            ]

            const breakdownArray = [
                {"header": "TASTE OF AGGRESSION","value": null,"modifier": null,"hasCritAVG": true,"unit": "",
                    "toggleElemID": ["blairUseExtinguish","Use Bonus?"],
                    "rowInjection": [rowInjection,"Bonuses are modified by the flame zone count setting on the first ability."],
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
    blairExtinguishCalcsTier0BackStarter(index,returnObject,isCycleCalcs,nameOverride) { 
        const characterRef = characters.Blair;
        const settingsRef = characterRef.characterSettings;
        const skillPlacement = 2;
        const abilityMap = characterRef.abilities[`ability${skillPlacement}`]["Backdraft"];
        const abilityTypeArray = abilityMap.type;
        const abilityMods = abilityMap.powerMods;

        const stacks = Math.min(abilityMods.stackLimit,settingsRef.blairActiveZones);

        const totalWPBonus = abilityMods.weakPointBonus * stacks;
        const totalATKBonus = abilityMods.ATKBonus * stacks;

        index["BaseWeakPointBonus"] += settingsRef.blairUseExtinguish ? totalWPBonus : 0;
        index["FirearmATK%"] += settingsRef.blairUseExtinguish ? totalATKBonus : 0;


        if (!isCycleCalcs) {
            let rowInjection = [
                {"name": "Valid Zones","value": stacks,"unit": ""},
                {"name": "Max MP Recovered","value": 0.08 * stacks,"unit": "%"},
                {"name": "+Weak Point Base","value": totalWPBonus,"unit": "%"},
                {"name": "+Firearm ATK","value": totalATKBonus,"unit": "%"},
            ]

            const breakdownArray = [
                {"header": "POWER OF FIRE","value": null,"modifier": null,"hasCritAVG": true,"unit": "",
                    "toggleElemID": ["blairUseExtinguish","Use Bonus?"],
                    "rowInjection": [rowInjection,"Bonuses are modified by the flame zone count setting on the first ability."],
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
    blairTasteCalcs(index,returnObject,isCycleCalcs,nameOverride) { 
        const characterRef = characters.Blair;
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
        const skillPowerModifierDOT = abilityMods.baseDOT + sumModifierBonus;

        const damage = calcs.getCompositeDamageSpread(basicInfo,skillPowerModifier);
        const damageDOT = calcs.getCompositeDamageSpread(basicInfo,skillPowerModifierDOT);

        const damageZoneBreakdown = calcs.getDoTTotalBreakdown(index,damage.AVG,abilityMods.interval,abilityMods.duration);
        const damageDOTBreakdown = calcs.getDoTTotalBreakdown(index,damageDOT.AVG,abilityMods.intervalDOT,abilityMods.durationDOT);
        // {durationDOT,totalTicks,intervalDOT,totalTickDamage}

        const avgDmgPerZone= damage.AVG;
        const totalTickDamageZone = damageZoneBreakdown.totalTickDamage;

        const avgDmgPerBurn = damageDOT.AVG;
        const totalTickDamageBurn = damageDOTBreakdown.totalTickDamage;

        if (!isCycleCalcs) {
            let rowInjectionZone = [
                {"name": "Blast Duration","value": damageZoneBreakdown.durationDOT,"unit": ""},
                {"name": "Interval (s)","value": damageZoneBreakdown.intervalDOT,"unit": ""},
                {"name": "Total Ticks","value": damageZoneBreakdown.totalTicks,"unit": ""},
            ]
            let rowInjection = [
                {"name": "DOT Duration","value": damageDOTBreakdown.durationDOT,"unit": ""},
                {"name": "Interval (s)","value": damageDOTBreakdown.intervalDOT,"unit": ""},
                {"name": "Total Ticks","value": damageDOTBreakdown.totalTicks,"unit": ""},
            ]

            const breakdownArray = [
                {"header": "SKILL EFFECT","value": damage,"modifier": skillPowerModifier,"hasCritAVG": true,"unit": "","magazineTypeWeapon": [damageZoneBreakdown.totalTicks,totalTickDamageZone],
                    "rowInjection": [rowInjectionZone,""],
                    "condition": false,"desc": ""},
                {"header": "BURN","value": damageDOT,"modifier": skillPowerModifierDOT,"hasCritAVG": true,"unit": "","magazineTypeWeapon": [damageDOTBreakdown.totalTicks,totalTickDamageBurn],
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
            return {avgDmgPerBurn,totalTickDamageBurn,avgDmgPerZone,totalTickDamageZone}
        }
        // <div class="abilityBreakdownGeneralMessage">asdf.</div>
    },
    //ability 4
    blairDeadlyCalcs(index,returnObject,isCycleCalcs,nameOverride) { 
        const characterRef = characters.Blair;
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

        const skillPowerModifierGiant = abilityMods.baseFireball + sumModifierBonus;
        const skillPowerModifierSmall = abilityMods.baseFireballSmall + sumModifierBonus;

        const skillPowerModifier = abilityMods.base + sumModifierBonus;
        const skillPowerModifierDOT = abilityMods.baseDOT + sumModifierBonus;

        const damageFireball = calcs.getCompositeDamageSpread(basicInfo,skillPowerModifierGiant);
        const damageFireballSmall = calcs.getCompositeDamageSpread(basicInfo,skillPowerModifierSmall);

        const damage = calcs.getCompositeDamageSpread(basicInfo,skillPowerModifier);
        const damageDOT = calcs.getCompositeDamageSpread(basicInfo,skillPowerModifierDOT);

        const damageZoneBreakdown = calcs.getDoTTotalBreakdown(index,damage.AVG,abilityMods.interval,abilityMods.duration);
        const damageDOTBreakdown = calcs.getDoTTotalBreakdown(index,damageDOT.AVG,abilityMods.intervalDOT,abilityMods.durationDOT);
        // {durationDOT,totalTicks,intervalDOT,totalTickDamage}

        const bigFireballDamage = damageFireball.AVG;
        const smallFireballDamage = damageFireballSmall.AVG;

        const avgDmgPerZone= damage.AVG;
        const totalTickDamageZone = damageZoneBreakdown.totalTickDamage;
        const avgDmgPerBurn = damageDOT.AVG;
        const totalTickDamageBurn = damageDOTBreakdown.totalTickDamage;

        if (!isCycleCalcs) {
            let rowInjectionZone = [
                {"name": "Zone Duration","value": damageZoneBreakdown.durationDOT,"unit": ""},
                {"name": "Interval (s)","value": damageZoneBreakdown.intervalDOT,"unit": ""},
                {"name": "Total Ticks","value": damageZoneBreakdown.totalTicks,"unit": ""},
            ]
            let rowInjection = [
                {"name": "DOT Duration","value": damageDOTBreakdown.durationDOT,"unit": ""},
                {"name": "Interval (s)","value": damageDOTBreakdown.intervalDOT,"unit": ""},
                {"name": "Total Ticks","value": damageDOTBreakdown.totalTicks,"unit": ""},
            ]

            const breakdownArray = [
                {"header": "GIANT FIREBALL","value": damageFireball,"modifier": skillPowerModifierGiant,"hasCritAVG": true,"unit": "",
                    "condition": false,"desc": ""},
                {"header": "SMALL FIREBALL","value": damageFireballSmall,"modifier": skillPowerModifierSmall,"hasCritAVG": true,"unit": "",
                    "condition": false,"desc": ""},

                {"header": "FLAME ZONE","value": damage,"modifier": skillPowerModifier,"hasCritAVG": true,"unit": "","magazineTypeWeapon": [damageZoneBreakdown.totalTicks,totalTickDamageZone],
                    "rowInjection": [rowInjectionZone,""],
                    "condition": false,"desc": ""},
                {"header": "BURN","value": damageDOT,"modifier": skillPowerModifierDOT,"hasCritAVG": true,"unit": "","magazineTypeWeapon": [damageDOTBreakdown.totalTicks,totalTickDamageBurn],
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
            return {avgDmgPerBurn,totalTickDamageBurn,avgDmgPerZone,totalTickDamageZone,smallFireballDamage,bigFireballDamage}
        }
        // <div class="abilityBreakdownGeneralMessage">asdf.</div>
    },
    blairDeadlyCalcsTrulyStarter(index,returnObject,isCycleCalcs,nameOverride) { 
        const characterRef = characters.Blair;
        const settingsRef = characterRef.characterSettings;
        const skillPlacement = 4;
        const abilityMap = characterRef.abilities[`ability${skillPlacement}`]["Truly Deadly Cuisine"];
        const abilityTypeArray = abilityMap.type;
        const abilityMods = abilityMap.powerMods;


        const sumModifierBonus = calcs.getTotalSkillPowerModifier(index,abilityTypeArray);
        const baseSkillPower = calcs.getTotalSkillPower(index,abilityTypeArray);
        const abilityDR = calcs.getResistanceBasedDR(index,abilityTypeArray[0]);
        const crit = calcs.getCritComposites(returnObject);

        const basicInfo = {baseSkillPower,abilityDR,crit};

        const skillPowerModifierGiant = abilityMods.baseFireball + sumModifierBonus;

        const skillPowerModifierDOT = abilityMods.baseDOT + sumModifierBonus;

        const damageFireball = calcs.getCompositeDamageSpread(basicInfo,skillPowerModifierGiant);

        const damageDOT = calcs.getCompositeDamageSpread(basicInfo,skillPowerModifierDOT);

        const damageDOTBreakdown = calcs.getDoTTotalBreakdown(index,damageDOT.AVG,abilityMods.intervalDOT,abilityMods.durationDOT);
        // {durationDOT,totalTicks,intervalDOT,totalTickDamage}

        const bigFireballDamage = damageFireball.AVG;

        const avgDmgPerBurn = damageDOT.AVG;
        const totalTickDamageBurn = damageDOTBreakdown.totalTickDamage;

        if (!isCycleCalcs) {
            let rowInjection = [
                {"name": "DOT Duration","value": damageDOTBreakdown.durationDOT,"unit": ""},
                {"name": "Interval (s)","value": damageDOTBreakdown.intervalDOT,"unit": ""},
                {"name": "Total Ticks","value": damageDOTBreakdown.totalTicks,"unit": ""},
            ]

            const breakdownArray = [
                {"header": "GIANT FIREBALL","value": damageFireball,"modifier": skillPowerModifierGiant,"hasCritAVG": true,"unit": "",
                    "condition": false,"desc": ""},
                {"header": "BURN","value": damageDOT,"modifier": skillPowerModifierDOT,"hasCritAVG": true,"unit": "","magazineTypeWeapon": [damageDOTBreakdown.totalTicks,totalTickDamageBurn],
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
            return {avgDmgPerBurn,totalTickDamageBurn,bigFireballDamage}
        }
        // <div class="abilityBreakdownGeneralMessage">asdf.</div>
    },
    blairDeadlyCalcsClassicStarter(index,returnObject,isCycleCalcs,nameOverride) {
        return customDamage.blairDeadlyCalcs(index,returnObject,isCycleCalcs,"Classic Chef")
    },
    blairDeadlyCalcsBackStarter(index,returnObject,isCycleCalcs,nameOverride) {
        return customDamage.blairDeadlyCalcs(index,returnObject,isCycleCalcs,"Backdraft")
    },
    //passive
    blairPitCalcsTier0(index,returnObject,isCycleCalcs,nameOverride) {
        const characterRef = characters.Blair;
        const settingsRef = characterRef.characterSettings;
        const skillPlacement = 5;
        const abilityMap = characterRef.abilities[`ability${skillPlacement}`][nameOverride ? nameOverride : "base"];
        const abilityTypeArray = abilityMap.type;
        const abilityMods = abilityMap.powerMods;

            // "critRateBonus": 0.05,
            // "critDamageBonus": 0.10,
            // "stackLimit": 7

        const zoneCount = Math.min(abilityMods.stackLimit,settingsRef.blairActiveZones);

        index.SkillCritRateBaseBonus += zoneCount * abilityMods.critRateBonus;
        index.SkillCritDamageBaseBonus += settingsRef.blairTargetBurning ? abilityMods.critDamageBonus : 0;



        if (!isCycleCalcs) {
            let rowInjectionRate = [
                {"name": "Valid Zones","value": zoneCount,"unit": ""},
                {"name": "+Flat Crit Rate","value": zoneCount * abilityMods.critRateBonus,"unit": "%"},
            ]

            const breakdownArray = [
                {"header": "SKILL CRIT DAMAGE","value": null,"modifier": null,"hasCritAVG": true,"unit": "",
                    "toggleElemID": ["blairTargetBurning","Target is Burning?"],
                    "condition": false,"desc": ""},
                {"header": "SKILL CRIT RATE","value": null,"modifier": null,"hasCritAVG": true,"unit": "",
                    "rowInjection": [rowInjectionRate,"Bonuses are modified by the flame zone count setting on the first ability."],
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
    blairPitCalcsTier0ClassicStarter(index,returnObject,isCycleCalcs,nameOverride) {
        return customDamage.blairPitCalcsTier0(index,returnObject,isCycleCalcs,"Classic Chef")
    },
    blairPitCalcsTier0BackStarter(index,returnObject,isCycleCalcs,nameOverride) {
        const characterRef = characters.Blair;
        const settingsRef = characterRef.characterSettings;
        const skillPlacement = 5;
        const abilityMap = characterRef.abilities[`ability${skillPlacement}`]["Backdraft"];
        const abilityTypeArray = abilityMap.type;
        const abilityMods = abilityMap.powerMods;

        const zoneCount = Math.min(abilityMods.stackLimit,settingsRef.blairActiveZones);

        index.FirearmCritRateBase += zoneCount * abilityMods.critRateBonus;
        index.FirearmCritDamageBase += settingsRef.blairTargetBurning ? abilityMods.critDamageBonus : 0;

        if (!isCycleCalcs) {
            let rowInjectionRate = [
                {"name": "Valid Zones","value": zoneCount,"unit": ""},
                {"name": "+Flat Crit Rate","value": zoneCount * abilityMods.critRateBonus,"unit": "%"},
            ]

            const breakdownArray = [
                {"header": "FIREARM CRIT DAMAGE","value": null,"modifier": null,"hasCritAVG": true,"unit": "",
                    "toggleElemID": ["blairTargetBurning","Target is Burning?"],
                    "condition": false,"desc": ""},
                {"header": "FIREARM CRIT RATE","value": null,"modifier": null,"hasCritAVG": true,"unit": "",
                    "rowInjection": [rowInjectionRate,"Bonuses are modified by the flame zone count setting on the first ability."],
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

    //INES
    //ability 1
    inesChainCalcs(index,returnObject,isCycleCalcs,nameOverride) {
        const characterRef = characters.Ines;
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

        const skillPowerModifier = abilityMods.base + sumModifierBonus + (settingsRef.inesConductorActive1 ? abilityMods.baseBonus : 0);

        const damage = calcs.getCompositeDamageSpread(basicInfo,skillPowerModifier);

        const avgDmgPerHit = damage.AVG;
        const totalBounces = abilityMods.baseBounces + Math.floor(Math.min(2,index.SkillRange)/abilityMods.rangePerBounce);
        const SUMTotalAVG = damage.AVG * totalBounces;  


        const baseCooldown = abilityMods.cooldown;
        const {cooldown,interval,DPS} = calcs.getDPSPerSkillInterval(index,damage.AVG*totalBounces,baseCooldown,null)
        const avgDPSPerCast = DPS;

        if (!isCycleCalcs) {
            let rowInjection = [
                {"name": "Total Bounces","value": totalBounces,"unit": ""},
            ]
            let rowInjection2 = [
                {"name": "DPS per Cast","value": avgDPSPerCast,"unit": ""},
            ]

            const breakdownArray = [
                {"header": "CHAIN LIGHTNING","value": damage,"modifier": skillPowerModifier,"hasCritAVG": true,"unit": "","magazineTypeWeapon": [totalBounces,SUMTotalAVG],
                    "toggleElemID": ["inesConductorActive1","Conductor Active?"],
                    "rowInjection": [rowInjection,""],
                    "rowInjection2": [rowInjection2,"DPS evaluations take the sum total DMG from all bounces and spread them across the cooldown of the ability."],
                    "condition": false,"desc": ""},
                {"header": "CONDUCTOR","value": null,"modifier": null,"hasCritAVG": true,"unit": "",
                    "condition": false,"desc": ""},
            ];
            const bodyString = `abilityBreakdownBody${skillPlacement}`;
            
            const addRow = calcsUIHelper.addHealingBoxCluster;
            readSelection(`abilityBreakdownBody${skillPlacement}`).innerHTML = `
            <div class="basicsSummaryBox" id="lepicResultsBox">
                ${addRow("Power",baseSkillPower,"")}
                ${calcsUIHelper.addHealingBoxRows(bodyString,breakdownArray,abilityMap.displayStatsALT,index,returnObject,characterRef.name)}
            </div>
            <div class="abilityBreakdownHeader">DESCRIPTION</div>
            <div class="abilityBreakdownDescription">${tooltips.updateSubstatColor(abilityMap.desc)}</div>
            `;
        }
        else {
            return {avgDmgPerHit,avgDPSPerCast,SUMTotalAVG}
        }
        // <div class="abilityBreakdownGeneralMessage">asdf.</div>
    },
    inesChainCalcsHoundsStarter(index,returnObject,isCycleCalcs,nameOverride) {
        return customDamage.inesChainCalcs(index,returnObject,isCycleCalcs,"Time of the Hunting Hounds")
    },
    //ability 2
    inesLightningCalcs(index,returnObject,isCycleCalcs,nameOverride) {
        const characterRef = characters.Ines;
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

        const skillPowerModifier = abilityMods.base + sumModifierBonus + (settingsRef.inesConductorActive2 ? abilityMods.baseBonus : 0);

        const damage = calcs.getCompositeDamageSpread(basicInfo,skillPowerModifier);
        
        const avgDmgPerHit = damage.AVG;

        const totalBounces = abilityMods.baseBounces + Math.floor(Math.min(2,index.SkillRange)/0.5);

        if (!isCycleCalcs) {
            let rowInjection = [
                {"name": "Total Targets","value": totalBounces,"unit": ""},
            ]

            const breakdownArray = [
                {"header": "SKILL EFFECT","value": damage,"modifier": skillPowerModifier,"hasCritAVG": true,"unit": "",
                    "toggleElemID": ["inesConductorActive2","Conductor Active?"],
                    "rowInjection": [rowInjection,""],
                    "condition": false,"desc": ""},
                {"header": "CONDUCTOR","value": null,"modifier": null,"hasCritAVG": true,"unit": "",
                    "condition": false,"desc": ""},
            ];
            const bodyString = `abilityBreakdownBody${skillPlacement}`;
            
            const addRow = calcsUIHelper.addHealingBoxCluster;
            readSelection(`abilityBreakdownBody${skillPlacement}`).innerHTML = `
            <div class="basicsSummaryBox" id="lepicResultsBox">
                ${addRow("Power",baseSkillPower,"")}
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
    //ability 3
    inesDischargeCalcs(index,returnObject,isCycleCalcs,nameOverride) {
        const characterRef = characters.Ines;
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

        const dischargeMultiplier = settingsRef.inesDischargePerfect ? 2 : 1;
        const skillPowerModifier = (abilityMods.base + sumModifierBonus + (settingsRef.inesConductorActive3 ? abilityMods.baseBonus : 0)) * dischargeMultiplier;

        const damage = calcs.getCompositeDamageSpread(basicInfo,skillPowerModifier);
        
        const avgDmgPerHit = damage.AVG;

        // const SUMTotalAVG = damage.AVG * totalBounces;

        if (!isCycleCalcs) {
            let rowInjection = [
                {"name": "Discharge Multi","value": dischargeMultiplier,"unit": ""},
            ]

            const breakdownArray = [
                {"header": "SKILL EFFECT","value": damage,"modifier": skillPowerModifier,"hasCritAVG": true,"unit": "",
                    "toggleElemID": ["inesConductorActive3","Conductor Active?"],
                    "toggleElemID2": ["inesDischargePerfect","Perfect Release?"],
                    "rowInjection": [rowInjection,""],
                    "condition": false,"desc": ""},
                {"header": "CONDUCTOR","value": null,"modifier": null,"hasCritAVG": true,"unit": "",
                    "condition": false,"desc": ""},
            ];
            const bodyString = `abilityBreakdownBody${skillPlacement}`;
            
            const addRow = calcsUIHelper.addHealingBoxCluster;
            readSelection(`abilityBreakdownBody${skillPlacement}`).innerHTML = `
            <div class="basicsSummaryBox" id="lepicResultsBox">
                ${addRow("Power",baseSkillPower,"")}
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
    inesDischargeCalcsHoundsStarter(index,returnObject,isCycleCalcs,nameOverride) {
        const characterRef = characters.Ines;
        const settingsRef = characterRef.characterSettings;
        const skillPlacement = 3;
        const abilityMap = characterRef.abilities[`ability${skillPlacement}`]["Time of the Hunting Hounds"];
        const abilityTypeArray = abilityMap.type;
        const abilityMods = abilityMap.powerMods;

        const sumModifierBonus = calcs.getTotalSkillPowerModifier(index,abilityTypeArray);
        const baseSkillPower = calcs.getTotalSkillPower(index,abilityTypeArray);
        const abilityDR = calcs.getResistanceBasedDR(index,abilityTypeArray[0]);
        const crit = calcs.getCritComposites(returnObject);

        const basicInfo = {baseSkillPower,abilityDR,crit};

        const dischargeMultiplier = settingsRef.inesDischargePerfect ? 2 : 1;
        const skillPowerModifier = (abilityMods.base + sumModifierBonus + (settingsRef.inesConductorActive3 ? abilityMods.baseBonus : 0)) * dischargeMultiplier;
        const skillPowerModifierPierce = (abilityMods.basePierce + sumModifierBonus + (settingsRef.inesConductorActive3 ? abilityMods.baseBonus : 0)) * dischargeMultiplier;

        const damage = calcs.getCompositeDamageSpread(basicInfo,skillPowerModifier);
        const damagePierce = calcs.getCompositeDamageSpread(basicInfo,skillPowerModifier);
        
        const avgDmgPerPierce = damagePierce.AVG;
        const avgDmgPerHit = damage.AVG;

        // const SUMTotalAVG = damage.AVG * totalBounces;

        if (!isCycleCalcs) {
            let rowInjection = [
                {"name": "Discharge Multi","value": dischargeMultiplier,"unit": ""},
            ]

            const breakdownArray = [
                {"header": "SKILL EFFECT","value": damage,"modifier": skillPowerModifier,"hasCritAVG": true,"unit": "",
                    "toggleElemID": ["inesConductorActive3","Conductor Active?"],
                    "toggleElemID2": ["inesDischargePerfect","Perfect Release?"],
                    "rowInjection": [rowInjection,""],
                    // "rowInjection": [rowInjection,""],
                    "condition": false,"desc": ""},
                {"header": "PIERCE","value": damagePierce,"modifier": skillPowerModifierPierce,"hasCritAVG": true,"unit": "",
                    "condition": false,"desc": ""},
                {"header": "CONDUCTOR","value": null,"modifier": null,"hasCritAVG": true,"unit": "",
                    "condition": false,"desc": ""},
            ];
            const bodyString = `abilityBreakdownBody${skillPlacement}`;
            
            const addRow = calcsUIHelper.addHealingBoxCluster;
            readSelection(`abilityBreakdownBody${skillPlacement}`).innerHTML = `
            <div class="basicsSummaryBox" id="lepicResultsBox">
                ${addRow("Power",baseSkillPower,"")}
                ${calcsUIHelper.addHealingBoxRows(bodyString,breakdownArray,abilityMap.displayStatsALT,index,returnObject,characterRef.name)}
            </div>
            <div class="abilityBreakdownHeader">DESCRIPTION</div>
            <div class="abilityBreakdownDescription">${tooltips.updateSubstatColor(abilityMap.desc)}</div>
            `;
        }
        else {
            return {avgDmgPerPierce,avgDmgPerHit}
        }
        // <div class="abilityBreakdownGeneralMessage">asdf.</div>
    },
    //ability 4
    inesSnareCalcs(index,returnObject,isCycleCalcs,nameOverride) {
        const characterRef = characters.Ines;
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

        const skillPowerModifier = abilityMods.base + sumModifierBonus + (settingsRef.inesConductorActive4 ? abilityMods.baseBonus : 0);
        const skillPowerModifierSnare = abilityMods.baseSnare + sumModifierBonus + (settingsRef.inesConductorActive4 ? abilityMods.baseBonus : 0);
        const skillPowerModifierCoil = abilityMods.baseCoil + sumModifierBonus + (settingsRef.inesConductorActive4 ? abilityMods.baseBonus : 0);

        const damage = calcs.getCompositeDamageSpread(basicInfo,skillPowerModifier);//projectile
        const damageSnare = calcs.getCompositeDamageSpread(basicInfo,skillPowerModifierSnare);//snare
        const damageCoil = calcs.getCompositeDamageSpread(basicInfo,skillPowerModifierCoil);//coil


        const totalBounces = abilityMods.baseBounces + Math.floor(Math.min(2,index.SkillRange)/0.5);
        
        const avgDmgPerHit = damage.AVG;
        const avgDmgPerHitSnare = damageSnare.AVG;
        const avgDmgPerHitCoil = damageCoil.AVG;

        const snareDuration = abilityMods.snareDuration * (1 + index.SkillDuration);
        const totalSnareTicks = Math.floor(snareDuration / abilityMods.snareInterval);
        const totalAVGSnare = avgDmgPerHitSnare * totalSnareTicks;

        const coilTicks = Math.floor(snareDuration / abilityMods.coilInterval);
        const totalAVGCoil = avgDmgPerHitCoil * coilTicks;

        const SUMTotalAVG = avgDmgPerHit + totalAVGSnare + totalAVGCoil;

        // const SUMTotalAVG = damage.AVG * totalBounces;

        if (!isCycleCalcs) {
            // let rowInjection = [
            //     {"name": "Discharge Multi","value": dischargeMultiplier,"unit": ""},
            // ]

            const breakdownArray = [
                {"header": "PROJECTILE","value": damage,"modifier": skillPowerModifier,"hasCritAVG": true,"unit": "",
                    "toggleElemID": ["inesConductorActive4","Conductor Active?"],
                    "condition": false,"desc": ""},
                {"header": "THUNDER SNARE","value": damageSnare,"modifier": skillPowerModifierSnare,"hasCritAVG": true,"unit": "","magazineTypeWeapon": [totalSnareTicks,totalAVGSnare],
                    // "toggleElemID": ["inesConductorActive3","Conductor Active?"],
                    // "toggleElemID2": ["inesDischargePerfect","Perfect Release?"],
                    // "rowInjection": [rowInjection,""],
                    "condition": false,"desc": ""},
                {"header": "SHORT CIRCUIT","value": null,"modifier": null,"hasCritAVG": true,"unit": "",
                    "condition": false,"desc": ""},
                {"header": "CURRENT COILS","value": damageCoil,"modifier": skillPowerModifierCoil,"hasCritAVG": true,"unit": "","magazineTypeWeapon": [coilTicks,totalAVGCoil],
                    "condition": false,"desc": ""},
                {"header": "CONDUCTOR","value": null,"modifier": null,"hasCritAVG": true,"unit": "",
                    "condition": false,"desc": ""},
            ];
            const bodyString = `abilityBreakdownBody${skillPlacement}`;
            
            const addRow = calcsUIHelper.addHealingBoxCluster;
            readSelection(`abilityBreakdownBody${skillPlacement}`).innerHTML = `
            <div class="basicsSummaryBox" id="lepicResultsBox">
                ${addRow("Power",baseSkillPower,"")}
                ${calcsUIHelper.addHealingBoxRows(bodyString,breakdownArray,abilityMap.displayStatsALT,index,returnObject,characterRef.name)}
            </div>
            <div class="abilityBreakdownHeader">DESCRIPTION</div>
            <div class="abilityBreakdownDescription">${tooltips.updateSubstatColor(abilityMap.desc)}</div>
            `;
        }
        else {
            return {avgDmgPerHit,avgDmgPerHitSnare,totalAVGSnare,avgDmgPerHitCoil,totalAVGCoil,SUMTotalAVG}
        }
        // <div class="abilityBreakdownGeneralMessage">asdf.</div>
    },
    //passive
    inesPlasmaCalcsTier0(index,returnObject,isCycleCalcs,nameOverride) {
        const characterRef = characters.Ines;
        const settingsRef = characterRef.characterSettings;
        const skillPlacement = 5;
        const abilityMap = characterRef.abilities[`ability${skillPlacement}`][nameOverride ? nameOverride : "base"];
        const abilityTypeArray = abilityMap.type;
        const abilityMods = abilityMap.powerMods;

        //right now this is the only function in the game that needs max MP BEFORE mp is established which is after the tier 0 calls
        //later if another tier0 call requires a max mp value this could be tricky, but that is unlikely to happen on a character more than once here
        //so for ines we're probably fine
        if (!nameOverride) {
            const {displayMP} = calcs.getMP(index,characters[globalRecords.character.currentCharacter].baseStats)
            index.SkillCritRateBaseBonus += (0.065 * displayMP)/100;
        }
    },
    inesPlasmaCalcsTier0BallStarter(index,returnObject,isCycleCalcs,nameOverride) {
        return customDamage.inesPlasmaCalcsTier0(index,returnObject,isCycleCalcs,"Plasma Ball");
    },
    inesPlasmaCalcs(index,returnObject,isCycleCalcs,nameOverride) {
        const characterRef = characters.Ines;
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

        // //DEALT 3879
        // //max mp at base is 300
        // let mpMax = returnObject.displayMP;
        // //crit rate is 34.5%
        // let dmgMulti = returnObject.totalSkillCritRate * 46;
        // let dmgRate = mpMax/(mpMax*0.12);

        // let endDamage = mpMax * dmgMulti * dmgRate - mpMax; 

        if (!isCycleCalcs) {
            // let rowInjection = [
            //     {"name": "Total Bounces","value": totalBounces,"unit": ""},
            // ]

            const breakdownArray = [
                {"header": "SKILL CRIT AGAINST CONDUCTOR","value": null,"modifier": null,"hasCritAVG": true,"unit": "",
                    // "sliderElemID": ["keelanErosionStacks",0,5,1,"Stacks Count"],
                    // "rowInjection": [rowInjection,"Bonuses are modified by the flame zone count setting on the first ability."],
                    "condition": nameOverride,"desc": ""},
                {"header": "FIREARM CRIT AGAINST CONDUCTOR","value": null,"modifier": null,"hasCritAVG": true,"unit": "",
                    "condition": nameOverride,"desc": ""},
                {"header": "SKILL HIT AGAINST CONDUCTOR","value": null,"modifier": null,"hasCritAVG": true,"unit": "",
                    "condition": nameOverride != "Plasma Ball","desc": ""},
                {"header": "DARK CURRENT","value": null,"modifier": null,"hasCritAVG": true,"unit": "",
                    "condition": false,"desc": "We've confirmed the actual game code uses randomized numbers for each damage instance. As such, it is not worth trying to calculate due to how little damage it actually does."},
                {"header": "INFLICTING CONDUCTOR","value": null,"modifier": null,"hasCritAVG": true,"unit": "",
                    // "sliderElemID": ["keelanAgilityStacks",0,4,1,"Stacks Count"],
                    // "rowInjection": [rowInjection,"Bonuses are modified by the flame zone count setting on the first ability."],
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
            return {
                // avgDmgPerHit,SUMTotalAVG 
            }
        }
        // <div class="abilityBreakdownGeneralMessage">asdf.</div>
    },
    inesPlasmaCalcsBallStarter(index,returnObject,isCycleCalcs,nameOverride) {
        return customDamage.inesPlasmaCalcs(index,returnObject,isCycleCalcs,"Plasma Ball");
    },


    //GLEY
    //ability 1
    gleyFrenziedCalcsTier0(index,returnObject,isCycleCalcs,nameOverride) {
        const characterRef = characters.Gley;
        const settingsRef = characterRef.characterSettings;
        const skillPlacement = 1;
        const abilityMap = characterRef.abilities[`ability${skillPlacement}`][nameOverride ? nameOverride : "base"];
        const abilityTypeArray = abilityMap.type;
        const abilityMods = abilityMap.powerMods;

        if (settingsRef.gleyFrenzyActive) {
            index["FirearmATK%"] += abilityMods.firearmATKBonus;
            //TODO: later when I get DR factors, add in the incoming dmg increase amount, same bucket as incoming final dmg modifiers
        }


        if (!isCycleCalcs) {
            const breakdownArray = [
                {"header": "FRENZIED","value": null,"modifier": null,"hasCritAVG": true,"unit": "",
                    "toggleElemID": ["gleyFrenzyActive","Frenzy Active?"],
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
    gleyFrenziedCalcsTier0PredatorStarter(index,returnObject,isCycleCalcs,nameOverride) {
        const characterRef = characters.Gley;
        const settingsRef = characterRef.characterSettings;
        const skillPlacement = 1;
        const abilityMap = characterRef.abilities[`ability${skillPlacement}`]["Predator Instinct"];
        const abilityTypeArray = abilityMap.type;
        const abilityMods = abilityMap.powerMods;


        if (settingsRef.gleyFrenzyActive) {
            //the lvl 2 stack isn't adding to the lvl 1 stack, it's going FROM the lvl1 bonus to the lvl2 bonus so not 15 + 21 but 15 + 6 to equal 21
            //yes this is stupid
            abilityMap.complexBonus = [
                {
                    "stats": [
                        {"name": "FirearmATK%","value": 0.15,"subStackValue": 0.06},
                    ],
                    "oneTimeOrStack": "stack",
                    "bonusName": "Predator Instinct (Gley)",
                    "limit": 2,
                    "cooldown": 1,
                }
            ]
        }
        else {
            abilityMap.complexBonus = [];
        }


        if (!isCycleCalcs) {
            const breakdownArray = [
                {"header": "FRENZIED","value": null,"modifier": null,"hasCritAVG": true,"unit": "",
                    "toggleElemID": ["gleyFrenzyActive","Frenzy Active?"],
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
    //ability 2
    gleySiphonCalcs(index,returnObject,isCycleCalcs,nameOverride) {
        const characterRef = characters.Gley;
        const settingsRef = characterRef.characterSettings;
        const skillPlacement = 2;
        const abilityMap = characterRef.abilities[`ability${skillPlacement}`][nameOverride ? nameOverride : "base"];
        const abilityTypeArray = abilityMap.type;
        const abilityMods = abilityMap.powerMods;

        const frenzyCheck = settingsRef.gleyFrenzyActive;
        //when gley has a 1HP mod active, it still gives a bonus but the minimum of 10% on top of the base 10% when you're at 100% HP
        //otherwise, do the math as normal.
        const forcedHPOverride = index.isHPSetTo1>0;
        const powerBonus = frenzyCheck ? 1.10 + (forcedHPOverride ? 10 : (100 - settingsRef.gleyHPBar))/100 : null;

        const sumModifierBonus = calcs.getTotalSkillPowerModifier(index,abilityTypeArray);
        const baseSkillPower = calcs.getTotalSkillPower(index,abilityTypeArray,powerBonus);
        const abilityDR = calcs.getResistanceBasedDR(index,abilityTypeArray[0]);
        const crit = calcs.getCritComposites(returnObject);

        const basicInfo = {baseSkillPower,abilityDR,crit};

        const skillPowerModifier = (frenzyCheck ? abilityMods.baseFrenzied : abilityMods.base) + sumModifierBonus;

        const damage = calcs.getCompositeDamageSpread(basicInfo,skillPowerModifier);

        const avgDmgPerHit = damage.AVG;

        //TODO: add another slider on the non-frenzied display row for when we add DR factors, since it gives DR per stack

        if (!isCycleCalcs) {
            let rowInjection = [
                {"name": "Current Power Bonus","value": powerBonus-1,"unit": "%"},
            ]

            const breakdownArray = [
                {"header": "SKILL EFFECT","value": null,"modifier": null,"hasCritAVG": true,"unit": "",
                    // "rowInjection": [rowInjectionBonus,"Bonus Damage"],
                    "condition": false,"desc": ""},
                {"header": "FRENZIED","value": damage,"modifier": skillPowerModifier,"hasCritAVG": true,"unit": "",
                    "rowInjection": [rowInjection,""],
                    "condition": !frenzyCheck,"desc": "Gley's %HP can be specified on her Passive to modify the damage across skills."},
                {"header": "NON-FRENZIED","value": null,"modifier": null,"hasCritAVG": true,"unit": "",
                    "condition": frenzyCheck,"desc": ""},
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
    },
    gleySiphonCalcsMassStarter(index,returnObject,isCycleCalcs,nameOverride) {
        return customDamage.gleySiphonCalcs(index,returnObject,isCycleCalcs,"Massive Sanguification");
    },
    gleySiphonCalcsExplosiveStarter(index,returnObject,isCycleCalcs,nameOverride) {
        return customDamage.gleySiphonCalcs(index,returnObject,isCycleCalcs,"Explosive Life");
    },
    //ability 3
    gleySensoryCalcsTier0(index,returnObject,isCycleCalcs,nameOverride) {
        const characterRef = characters.Gley;
        const settingsRef = characterRef.characterSettings;
        const skillPlacement = 3;
        const abilityMap = characterRef.abilities[`ability${skillPlacement}`][nameOverride ? nameOverride : "base"];
        const abilityTypeArray = abilityMap.type;
        const abilityMods = abilityMap.powerMods;

        const powerModBonus = abilityMap.powerMods["PowerModifierBase"];
        const skillRangebonus = abilityMap.powerMods["SkillRange"];

        const baseBonusDuration = abilityMods.baseDuration;
        const durationBonus = 1 + index.SkillDuration;
        const totalDuration = baseBonusDuration * durationBonus;

        if (settingsRef.gleyFrenzyActive && settingsRef.gleyAmmoBuff) {
            // index.PowerModifierBase += powerModBonus;
            // index.SkillRange += skillRangebonus;
            // console.log("ladeedadeeda")
            abilityMap.complexBonus = [
                {
                    "stats": [
                        {"name": "BulletCostWeapon","value": -1,"subStackValue": null},
                    ],
                    "bonusName": "Maximize Lethality",
                    "oneTimeOrStack": "duration",
                    "limit": 1,
                    "cooldown": 60,
                    "duration": totalDuration,
                    "conditions": [],
                    "skipFirstShot": false,
                    "isDurationActive": true,
                    "currentStacks": 0,
                    "timePassedEntry": 0,
                }
            ]
        }
        else {
            //TODO: add the sprint speed bonuses here later, low priority
            abilityMap.complexBonus = [];
        }



        if (!isCycleCalcs) {
            const breakdownArray = [
                {"header": "MAXIMIZE LETHALITY","value": null,"modifier": null,"hasCritAVG": true,"unit": "",
                    "toggleElemID": ["gleyAmmoBuff","Use Ammo Buff?"],
                    "condition": false,"desc": ""},
                {"header": "MAXIMIZE RECOVERY","value": null,"modifier": null,"hasCritAVG": true,"unit": "",
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
    gleySensoryCalcsTier0SuperStarter(index,returnObject,isCycleCalcs,nameOverride) {
        const characterRef = characters.Gley;
        const settingsRef = characterRef.characterSettings;
        const skillPlacement = 3;
        const abilityMap = characterRef.abilities[`ability${skillPlacement}`]["Super Senses"];
        const abilityTypeArray = abilityMap.type;
        const abilityMods = abilityMap.powerMods;

        const baseBonusDuration = abilityMods.baseDuration;
        const durationBonus = 1 + index.SkillDuration;
        const totalDuration = baseBonusDuration * durationBonus;

        if (settingsRef.gleyFrenzyActive && settingsRef.gleyAmmoBuff) {
            // index.PowerModifierBase += powerModBonus;
            // index.SkillRange += skillRangebonus;
            // console.log("ladeedadeeda")
            abilityMap.complexBonus = [
                {
                    "stats": [
                        {"name": "BulletCostWeapon","value": -1,"subStackValue": null},
                        {"name": "FireRateOverride","value": 48,"subStackValue": null},
                    ],
                    "bonusName": "Super Senses (Gley)",
                    "oneTimeOrStack": "durationInitial",
                    "limit": 1,
                    "cooldown": 120,
                    "duration": totalDuration,
                    "conditions": [],
                    "skipFirstShot": false,
                }
            ]
        }
        else {
            //TODO: add the sprint speed bonuses here later, low priority
            abilityMap.complexBonus = [];
        }



        if (!isCycleCalcs) {
            const breakdownArray = [
                {"header": "MAXIMIZE LETHALITY","value": null,"modifier": null,"hasCritAVG": true,"unit": "",
                    "toggleElemID": ["gleyAmmoBuff","Use Ammo Buff?"],
                    "condition": false,"desc": ""},
                {"header": "MAXIMIZE RECOVERY","value": null,"modifier": null,"hasCritAVG": true,"unit": "",
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
    //ability 4
    //this is the skill only reference function and damage calculation
    gleyMassSkillBase(index,returnObject,isCycleCalcs,nameOverride) {
        const characterRef = characters.Gley;
        const settingsRef = characterRef.characterSettings;
        const skillPlacement = 4;
        const abilityMap = characterRef.abilities[`ability${skillPlacement}`][nameOverride ? nameOverride : "base"];
        const abilityTypeArray = abilityMap.type;
        const abilityMods = abilityMap.powerMods;

        const {totalSkillCritRate,totalSkillCritDamage} = calcs.getSkillCrit(index,characterRef.baseStats);

        const frenzyCheck = settingsRef.gleyFrenzyActive;
        const forcedHPOverride = index.isHPSetTo1>0;
        const powerBonus = frenzyCheck ? 1.10 + (forcedHPOverride ? 10 : (100 - settingsRef.gleyHPBar))/100 : null;

        const sumModifierBonus = calcs.getTotalSkillPowerModifier(index,abilityTypeArray);
        const baseSkillPower = calcs.getTotalSkillPower(index,abilityTypeArray,powerBonus);
        const abilityDR = calcs.getResistanceBasedDR(index,abilityTypeArray[0]);
        const crit = calcs.getCritComposites({totalSkillCritRate,totalSkillCritDamage});

        const basicInfo = {baseSkillPower,abilityDR,crit};
        const skillPowerModifier = abilityMods.base + sumModifierBonus;
        const damageSkill = calcs.getCompositeDamageSpread(basicInfo,skillPowerModifier);

        return {damageSkill,skillPowerModifier};
    },
    gleyMassSkillBaseDemonic(index,returnObject,isCycleCalcs,nameOverride) {
        const characterRef = characters.Gley;
        const settingsRef = characterRef.characterSettings;
        const skillPlacement = 4;
        const abilityMap = characterRef.abilities[`ability${skillPlacement}`]["Demonic Modification"];
        const abilityTypeArray = abilityMap.type;
        const abilityMods = abilityMap.powerMods;

        const {totalSkillCritRate,totalSkillCritDamage} = calcs.getSkillCrit(index,characterRef.baseStats);

        const frenzyCheck = settingsRef.gleyFrenzyActive;
        const forcedHPOverride = index.isHPSetTo1>0;
        const powerBonus = frenzyCheck ? 1.10 + (forcedHPOverride ? 10 : (100 - settingsRef.gleyHPBar))/100 : null;

        const sumModifierBonus = calcs.getTotalSkillPowerModifier(index,abilityTypeArray);
        const baseSkillPower = calcs.getTotalSkillPower(index,abilityTypeArray,powerBonus);
        const abilityDR = calcs.getResistanceBasedDR(index,abilityTypeArray[0]);
        const crit = calcs.getCritComposites({totalSkillCritRate,totalSkillCritDamage});

        const basicInfo = {baseSkillPower,abilityDR,crit};
        const skillPowerModifier = abilityMods.base + sumModifierBonus;
        const damageSkill = calcs.getCompositeDamageSpread(basicInfo,skillPowerModifier);

        return {damageSkill,skillPowerModifier};
    },
    gleyMassCalcs(index,returnObject,isCycleCalcs,nameOverride,limitedWeaponAbilityBonuses) {
        const characterRef = characters.Gley;
        const settingsRef = characterRef.characterSettings;
        const skillPlacement = 4;
        const abilityMap = characterRef.abilities[`ability${skillPlacement}`][nameOverride ? nameOverride : "base"];
        const abilityTypeArray = abilityMap.type;
        const abilityMods = abilityMap.powerMods;

        const baseSkillPower = calcs.getTotalSkillPower(index,abilityTypeArray);

        const magazineSize = 10;//abilityMods.magazine * (1+index.MagazineSize);//it rounds down and floors the value, but I still want to show the decimal so people know.
        const actualMagSize = Math.floor(magazineSize);
        const weaponName = globalRecords.weapon.currentWeapon;
        const baseFireRate = weaponName ? sniperList[weaponName].baseFireRate : 1;//abilityMods.fireRate;

        const frenzyCheck = settingsRef.gleyFrenzyActive;
        const settingsObject = {
            // "atkMulti": abilityMods.firearmATKMulti,
            limitedWeaponAbilityBonuses,
            // "isStaticRate": false,
            "referenceFunction": frenzyCheck ? customDamage.gleyMassSkillBase : null,
            "wastedTimeSkill": 1.083333,//animation time, still counts for the duration on 3
            // "specialGunFunction": customDamage.haileyZenithCryoBase,
            "shellCountOverride": 1,
            "skipCoreValues": true,
            "noReloads": true,
        }

        const currentWeaponRef = sniperList[globalRecords.weapon.currentWeapon];
        let bulletsArray = bullets.getActiveBulletArray(index,returnObject,isCycleCalcs,nameOverride,baseFireRate,actualMagSize,currentWeaponRef,settingsObject).bulletsArray;


        let totalAVGSkill = 0;
        let totalAVGGun = 0;
        let totalAVGSum = 0;
        const totalShots = bulletsArray.length;
        for (let entry of bulletsArray) {
            totalAVGSkill += entry.SkillDamage.AVG;
            totalAVGGun += entry.damageAVG + entry.avgTotalBonusElem;
            totalAVGSum += entry.damageAVGTotal// + entry.SkillDamage.AVG;
        }
        const avgPerHitTotal = totalAVGSum/totalShots;
        const avgGunPerHit = totalAVGGun/totalShots;
        const avgSkillHit = totalAVGSkill/totalShots;

        
        if (!isCycleCalcs) {
            let {bulletArrayString,graphString} = bullets.getActiveBulletGraph(bulletsArray,true);

            const rowInjectionTotalSum = [
                {"name": "Magazine","value": magazineSize,"unit": ""},
                {"name": "Total Fired","value": totalShots,"unit": ""},
                {"name": "Total AVG/Shot","value": avgPerHitTotal,"unit": ""},
                {"name": "SUM Massacre AVG per Cast","value": totalAVGSum,"unit": ""},
            ]

            const breakdownArray = [
                {"header": "UNIQUE WEAPON - SUM","value": null,"modifier": null,"hasCritAVG": null,"unit": "",
                    "rowInjection": [rowInjectionTotalSum,""],
                    "condition": false,"desc": "Must adjust the enemy and part targeted under the <span>ENEMY</span> tab for accurate values.<br>See Weapon DMG video for more info.<br>Skill and Firearm DMG scale separately with their respective mods."},
                // {"header": "FRENZIED","value": damage,"modifier": skillPowerModifier,"hasCritAVG": true,"unit": "",
                //     "rowInjection": [rowInjection,""],
                //     "condition": !frenzyCheck,"desc": "Gley's %HP can be specified on her Passive to modify the damage across skills."},
                // {"header": "NON-FRENZIED","value": damage,"modifier": skillPowerModifier,"hasCritAVG": true,"unit": "",
                //     "condition": frenzyCheck,"desc": ""},
                // {"header": "UNIQUE WEAPON - SUM","value": null,"modifier": null,"hasCritAVG": null,"unit": "",
                //     "rowInjection": [rowInjectionTotalSum,""],
                //     "condition": false,"desc": "Must adjust the enemy and part targeted under the <span>ENEMY</span> tab for accurate values.<br>See Weapon DMG video for more info.<br>Skill and Firearm DMG scale separately with their respective mods."},
            ];
            const bodyString = `abilityBreakdownBody${skillPlacement}`;
            
            const addRow = calcsUIHelper.addHealingBoxCluster;
            readSelection(`abilityBreakdownBody${skillPlacement}`).innerHTML = `
            ${addRow("Power",baseSkillPower,"")}
            <div class="basicsSummaryBox" id="lepicResultsBox">
                ${graphString}
                ${calcsUIHelper.addHealingBoxRows(bodyString,breakdownArray,abilityMap.displayStatsALT,index,returnObject,characterRef.name)}
            </div>
            <div class="basicsSummaryBox">
            <div class='weaponBreakdownSplitterHeader'>BULLET INFO</div>
                
                <div class="tooltipHeader">Selection</div>
                <div class="bulletSelectorIDRowBox">

                    <div class="toggleArrowBox" onclick="bullets.updateExpandedBullet(-1,null,null,true)">&#9664;</div>
                    <div class="traitLevelDisplay">
                        <input type="number" class="bulletSelectorInputWeapons" id="bulletSelectorInputWeaponsSkill" min="1" max="${totalShots}" step="1" value="1" onchange="bullets.updateExpandedBullet(null,null,null,true)">
                    </div> 
                    <div class="toggleArrowBox" onclick="bullets.updateExpandedBullet(1,null,null,true)">&#9654;</div>
                </div>

                ${bulletArrayString}
            </div>
            <div class="abilityBreakdownHeader">DESCRIPTION</div>
            <div class="abilityBreakdownDescription">${tooltips.updateSubstatColor(abilityMap.desc)}</div>
            `;
        }
        else {
            return {avgSkillHit,avgGunPerHit,avgPerHitTotal,totalAVGSkill,totalAVGGun,totalAVGSum
                // avgSkillHit,avgGunPerHit,avgPerHitTotal,totalAVGSkill,totalAVGGun,totalAVGSum
            }
        }
    },
    gleyMassCalcsModificationStarter(index,returnObject,isCycleCalcs,nameOverride,limitedWeaponAbilityBonuses) {
        const characterRef = characters.Gley;
        const settingsRef = characterRef.characterSettings;
        const skillPlacement = 4;
        const abilityMap = characterRef.abilities[`ability${skillPlacement}`]["Demonic Modification"];
        const abilityTypeArray = abilityMap.type;
        const abilityMods = abilityMap.powerMods;

        const baseSkillPower = calcs.getTotalSkillPower(index,abilityTypeArray);

        const magazineSize = 10;//abilityMods.magazine * (1+index.MagazineSize);//it rounds down and floors the value, but I still want to show the decimal so people know.
        const actualMagSize = Math.floor(magazineSize);
        const weaponName = globalRecords.weapon.currentWeapon;
        const baseFireRate = 16.75;//60; //60 is the actual fire rate, however the whole point of modification is to get the scaling charge bonus, so the fire rate is modified to account for that.

        //3.68333/3.583333 to charge to full
        const frenzyCheck = settingsRef.gleyFrenzyActive;
        const settingsObject = {
            "atkMulti": 5.74,
            limitedWeaponAbilityBonuses,
            "isStaticRate": true,
            "wastedTimeSkill": 1.083333,//animation time, still counts for the duration on 3
            "referenceFunction": frenzyCheck ? customDamage.gleyMassSkillBaseDemonic : null,
            "shellCountOverride": 1,
            "skipCoreValues": true,
            "noReloads": true,
        }

        const currentWeaponRef = {...sniperList[globalRecords.weapon.currentWeapon]};
        //demonic modification overrides the advatange type, from w/e the has to Burst.
        //BUG: the game will say the burst bonus is 20%, however it's probably just adding in 10% burst and adding the inherited 10% from the initial weapon, but it does not actually reach 20%
        currentWeaponRef.physicalType = "Burst";

        // console.log(currentWeaponRef)
        let bulletsArray = bullets.getActiveBulletArray(index,returnObject,isCycleCalcs,nameOverride,baseFireRate,actualMagSize,currentWeaponRef,settingsObject).bulletsArray;


        let totalAVGSkill = 0;
        let totalAVGGun = 0;
        let totalAVGSum = 0;
        const totalShots = bulletsArray.length;
        for (let entry of bulletsArray) {
            totalAVGSkill += entry.SkillDamage.AVG;
            totalAVGGun += entry.damageAVG + entry.avgTotalBonusElem;
            totalAVGSum += entry.damageAVGTotal// + entry.SkillDamage.AVG;
        }
        const avgPerHitTotal = totalAVGSum/totalShots;
        const avgGunPerHit = totalAVGGun/totalShots;
        const avgSkillHit = totalAVGSkill/totalShots;

        
        if (!isCycleCalcs) {
            let {bulletArrayString,graphString} = bullets.getActiveBulletGraph(bulletsArray,true);

            const rowInjectionTotalSum = [
                {"name": "Magazine","value": magazineSize,"unit": ""},
                {"name": "Total Fired","value": totalShots,"unit": ""},
                {"name": "Total AVG/Shot","value": avgPerHitTotal,"unit": ""},
                {"name": "SUM Massacre AVG per Cast","value": totalAVGSum,"unit": ""},
            ]

            const breakdownArray = [
                {"header": "UNIQUE WEAPON - SUM","value": null,"modifier": null,"hasCritAVG": null,"unit": "",
                    "rowInjection": [rowInjectionTotalSum,""],
                    "condition": false,"desc": "Must adjust the enemy and part targeted under the <span>ENEMY</span> tab for accurate values.<br>See Weapon DMG video for more info.<br>Skill and Firearm DMG scale separately with their respective mods."},
                // {"header": "FRENZIED","value": damage,"modifier": skillPowerModifier,"hasCritAVG": true,"unit": "",
                //     "rowInjection": [rowInjection,""],
                //     "condition": !frenzyCheck,"desc": "Gley's %HP can be specified on her Passive to modify the damage across skills."},
                // {"header": "NON-FRENZIED","value": damage,"modifier": skillPowerModifier,"hasCritAVG": true,"unit": "",
                //     "condition": frenzyCheck,"desc": ""},
                // {"header": "UNIQUE WEAPON - SUM","value": null,"modifier": null,"hasCritAVG": null,"unit": "",
                //     "rowInjection": [rowInjectionTotalSum,""],
                //     "condition": false,"desc": "Must adjust the enemy and part targeted under the <span>ENEMY</span> tab for accurate values.<br>See Weapon DMG video for more info.<br>Skill and Firearm DMG scale separately with their respective mods."},
            ];
            const bodyString = `abilityBreakdownBody${skillPlacement}`;
            
            const addRow = calcsUIHelper.addHealingBoxCluster;
            readSelection(`abilityBreakdownBody${skillPlacement}`).innerHTML = `
            ${addRow("Power",baseSkillPower,"")}
            <div class="basicsSummaryBox" id="lepicResultsBox">
                ${graphString}
                ${calcsUIHelper.addHealingBoxRows(bodyString,breakdownArray,abilityMap.displayStatsALT,index,returnObject,characterRef.name)}
            </div>
            <div class="basicsSummaryBox">
            <div class='weaponBreakdownSplitterHeader'>BULLET INFO</div>
                
                <div class="tooltipHeader">Selection</div>
                <div class="bulletSelectorIDRowBox">

                    <div class="toggleArrowBox" onclick="bullets.updateExpandedBullet(-1,null,null,true)">&#9664;</div>
                    <div class="traitLevelDisplay">
                        <input type="number" class="bulletSelectorInputWeapons" id="bulletSelectorInputWeaponsSkill" min="1" max="${totalShots}" step="1" value="1" onchange="bullets.updateExpandedBullet(null,null,null,true)">
                    </div> 
                    <div class="toggleArrowBox" onclick="bullets.updateExpandedBullet(1,null,null,true)">&#9654;</div>
                </div>

                ${bulletArrayString}
            </div>
            <div class="abilityBreakdownHeader">DESCRIPTION</div>
            <div class="abilityBreakdownDescription">${tooltips.updateSubstatColor(abilityMap.desc)}</div>
            `;
        }
        else {
            return {avgSkillHit,avgGunPerHit,avgPerHitTotal,totalAVGSkill,totalAVGGun,totalAVGSum
                // avgSkillHit,avgGunPerHit,avgPerHitTotal,totalAVGSkill,totalAVGGun,totalAVGSum
            }
        }
    },
    //passive
    gleyThirstCalcsTier0(index,returnObject,isCycleCalcs,nameOverride) {
        const characterRef = characters.Gley;
        const settingsRef = characterRef.characterSettings;
        const skillPlacement = 5;
        const abilityMap = characterRef.abilities[`ability${skillPlacement}`][nameOverride ? nameOverride : "base"];
        const abilityTypeArray = abilityMap.type;
        const abilityMods = abilityMap.powerMods;

        if (!settingsRef.gleyFrenzyActive) {
        //     //TODO: later when I get DR factors, add in the incoming dmg reduction amount, same bucket as incoming final dmg modifiers
        }


        if (!isCycleCalcs) {
            const breakdownArray = [
                {"header": "HP SPECIFICATION","value": null,"modifier": null,"hasCritAVG": true,"unit": "",
                    "sliderElemID": ["gleyHPBar",10,100,10,"%HP Remaining"],
                    "condition": false,"desc": ""},
                {"header": "FRENZIED","value": null,"modifier": null,"hasCritAVG": true,"unit": "",
                    "condition": nameOverride,"desc": "Allows specification of remaining %HP for skills that deal bonus damage proportionally"},
                {"header": "NON-FRENZIED","value": null,"modifier": null,"hasCritAVG": true,"unit": "",
                    "condition": nameOverride === "Blood and Iron" || nameOverride != "Explosive Life","desc": ""},
                {"header": "LIFE SPHERE","value": null,"modifier": null,"hasCritAVG": true,"unit": "",
                    "condition": nameOverride === "Blood and Iron" || nameOverride != "Explosive Life","desc": ""},
                {"header": "SKILL EFFECT","value": null,"modifier": null,"hasCritAVG": true,"unit": "",
                    "condition": nameOverride != "Blood and Iron","desc": "Allows specification of remaining %HP for skills that deal bonus damage proportionally"},
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
    gleyThirstCalcsTier0IronStarter(index,returnObject,isCycleCalcs,nameOverride) {
        return customDamage.gleyThirstCalcsTier0(index,returnObject,isCycleCalcs,"Blood and Iron");
    },
    gleyThirstCalcsTier0ExplosiveStarter(index,returnObject,isCycleCalcs,nameOverride) {
        return customDamage.gleyThirstCalcsTier0(index,returnObject,isCycleCalcs,"Explosive Life");
    },

    //LE GUNS
    generalizedWeaponBreakdown(index,returnObject,isCycleCalcs,weaponRef,limitedWeaponBonuses,referencedFromUniqueParent) {
        const settingsRef = weaponRef.weaponSettings;

        const magazineSize = weaponRef.magazine * (1+index.MagazineSize+index.MagazineSizeCORE);//it rounds down and floors the value, but I still want to show the decimal so people know.
        const actualMagSize = Math.floor(magazineSize);
        const baseRateValue = weaponRef.baseFireRate; //index,returnObject,isCycleCalcs,null,baseRateValue,actualMagSize,weaponRef,settingsObject

        const settingsObject = {limitedWeaponBonuses}

        let bulletsArray = bullets.getActiveBulletArray(index,returnObject,isCycleCalcs,null,baseRateValue,actualMagSize,weaponRef,settingsObject).bulletsArray;

        let totalAVGGun = 0;
        let reloadEntries = 0;
        for (let entry of bulletsArray) {
            if (entry.reloadState) {reloadEntries++;continue;}
            totalAVGGun += entry.damageAVGTotal;
        }
        const totalShots = bulletsArray.length - reloadEntries;
        let avgPerShot = totalAVGGun/totalShots;
        const totalTimePassed = bulletsArray.length ? bulletsArray[bulletsArray.length-1].timePassed : 1;
        const totalAVGDPS = weaponRef.name==="" ? 0 : totalAVGGun/totalTimePassed;

        if (!isCycleCalcs) {
            let {bulletArrayString,graphString} = bullets.getActiveBulletGraph(bulletsArray);

            const rowInjectionSums = [
                {"name": "Magazine","value": magazineSize,"unit": "","id": "totalMagazineWeapons"},
                {"name": "Total Fired","value": totalShots,"unit": "","id": "totalShotsFiredWeapons"},
                {"name": "AVG/Shot","value": avgPerShot,"unit": "","id": "avgPerShotWeapons"},
                {"name": "SUM AVG","value": totalAVGGun,"unit": "","id": "totalAVGWeapons"},
                {"name": "AVG DPS","value": totalAVGDPS,"unit": "","id": "totalAVGWeaponsDPS"},
            ]
            const breakdownArray = [
                {"header": "FIREARM SUM","value": null,"modifier": null,"hasCritAVG": true,"unit": "",
                    "rowInjection": [rowInjectionSums,""],
                    "condition": false,"desc": ""},
                // "magazineTypeWeapon": [actualMagSize,weaponDamage.AVG],
            ];
            const bodyString = `weaponBreakdownBody1`;
            
            // <div class="abilityBreakdownDescription" style="color:lightblue">Reload factors will be added next week.</div>
            const addRow = calcsUIHelper.addHealingBoxCluster;
            readSelection(`weaponBreakdownBody1`).innerHTML += `
            ${weaponRef.magazine===0 ? `<div class="missingWeaponDisplayBox" style="color:lightcoral">SELECT A WEAPON TO SEE BULLET SIMULATION INFO.</div>` :
            `<br>
            <div class="basicsSummaryBox">
                ${graphString}
                ${calcsUIHelper.addHealingBoxRows(bodyString,breakdownArray,null,index,returnObject,weaponRef.name,true)}
            </div>
            <div class="basicsSummaryBox">
            <div class='weaponBreakdownSplitterHeader'>BULLET INFO</div>
                <div class="tooltipHeader">Selection</div>
                <div class="bulletSelectorIDRowBox">

                    <div class="toggleArrowBox" onclick="bullets.updateExpandedBullet(-1)">&#9664;</div>
                    <div class="traitLevelDisplay">
                        <input type="number" class="bulletSelectorInputWeapons" id="bulletSelectorInputWeapons" min="1" max="${totalShots+reloadEntries}" step="1" value="1" onchange="bullets.updateExpandedBullet()">
                    </div> 
                    <div class="toggleArrowBox" onclick="bullets.updateExpandedBullet(1)">&#9654;</div>
                </div>
                ${bulletArrayString}
            </div>
            `}`;
            // <div class="tooltipHeader">Bullet Selection</div>
        }
        else {
            return {avgPerShot,totalAVGDPS,totalAVGGun,totalShots,reloadEntries,magazineSize,totalTimePassed}
        }

        if (referencedFromUniqueParent) {
            return {avgPerShot,totalAVGDPS,totalAVGGun,totalShots,reloadEntries,magazineSize,totalTimePassed,graphParams:!isCycleCalcs ? bullets.getActiveBulletGraph(bulletsArray) : null}
        }
    },
    secretGardenCalcsTier0(index,returnObject,isCycleCalcs) {
        const weaponRef = sniperList["Secret Garden"];
        const settingsRef = weaponRef.weaponSettings;

        const currentStacks = +settingsRef.gardenStackCount;
        const stackBonusRef = [0.00,0.05,0.21,0.37]
        const currentBonus = stackBonusRef[currentStacks]

        index.PowerOptimizationCORE += currentBonus;
        index["FirearmATK%"] += currentBonus;

        if (!isCycleCalcs) {
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
        }
    },
    blueBeetleCalcsTier0(index,returnObject,isCycleCalcs) {
        const weaponRef = sniperList["Blue Beetle"];
        const settingsRef = weaponRef.weaponSettings;

        const critBonus = 1.15;
        index.SkillCritRate += settingsRef.arcaneWaveActive ? critBonus : 0;

        if (!isCycleCalcs) {
            const rowInjection = [
                {"name": "+Skill Crit Rate","value": settingsRef.arcaneWaveActive ? critBonus : 0,"unit": "%"},
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
            <div class="basicsSummaryBox">
            <div class="traitMegaTitleHeader">UNIQUE ABILITY</div>
                ${calcsUIHelper.addHealingBoxRows(bodyString,breakdownArray,weaponRef.displayStatsALT,index,returnObject,"Blue Beetle",true)}
            </div>
            <div class="abilityBreakdownHeader">DESCRIPTION</div>
            <div class="abilityBreakdownDescription">${tooltips.updateSubstatColor(weaponRef.desc)}</div>
            `;
        }
    },
    peacemakerCalcsTier0(index,returnObject,isCycleCalcs) {
        const weaponRef = sniperList["Peace Maker"];
        const settingsRef = weaponRef.weaponSettings;

        const currentStacks = +settingsRef.peacemakerStackCount;
        const stackBonusRef = [0.00,0.05,0.145,0.24,0.335,0.43];
        const currentBonus = stackBonusRef[currentStacks];

        index.PowerRatioNonAttribute += currentBonus;

        if (!isCycleCalcs) {
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
        }
    },
    nazDevotionCalcsTier0(index,returnObject,isCycleCalcs) {
        const weaponName = "Nazeistra's Devotion"
        const weaponRef = sniperList[weaponName];
        const settingsRef = weaponRef.weaponSettings;

        const defDebuff = -0.30;
        const currentAmount = settingsRef.defDebuffActive ? defDebuff : 0;
        index.enemyDEFResistanceReduction += currentAmount;

        if (!isCycleCalcs) {
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
        }
    },


    smithereensCalcsTier0(index,returnObject,isCycleCalcs,nameOverride) {
        const weaponRef = sniperList["Smithereens"];
        const settingsRef = weaponRef.weaponSettings;

        if (settingsRef.allHitsBonus) {
            weaponRef.complexBonus = [
                {
                    "stats": [
                        {"name": "ShellCapacityBase","value": 4,"subStackValue": null},
                        {"name": "FirearmCritRateBase","value": 1,"subStackValue": null},
                        {"name": "FirearmCritDamageBase","value": 0.10,"subStackValue": null},
                    ],
                    "bonusName": "Smithereens Bonus",
                    "oneTimeOrStack": "stack",
                    "limit": 1,
                    "cooldown": 0,
                    "duration": 0,
                    "currentStacks": 0,
                    "timePassedEntry": 0,
                    "conditions": [],
                    "skipFirstShot": false,
                }
            ]
        }
        else {
            weaponRef.complexBonus = [];
        }


        if (!isCycleCalcs) {
            // const rowInjection = [
            //     {"name": "+Skill Crit Rate","value": settingsRef.arcaneWaveActive ? critBonus : 0,"unit": "%"},
            // ]
            const breakdownArray = [
                {"header": "LANDED ALL BULLETS","value": null,"modifier": null,"hasCritAVG": null,"unit": "",
                    "toggleElemID": ["allHitsBonus","Use All Bonuses?"],
                    // "rowInjection": [rowInjection,""],
                    "condition": false,"desc": ""},
                {"header": "AMPLIFICATION","value": null,"modifier": null,"hasCritAVG": null,"unit": "",
                    "condition": false,"desc": ""},
            ];
            const bodyString = `weaponBreakdownBody1`;
            
            const addRow = calcsUIHelper.addHealingBoxCluster;
            readSelection(`weaponBreakdownBody1`).innerHTML = `
            <div class="basicsSummaryBox">
            <div class="traitMegaTitleHeader">UNIQUE ABILITY</div>
                ${calcsUIHelper.addHealingBoxRows(bodyString,breakdownArray,weaponRef.displayStatsALT,index,returnObject,"Smithereens",true)}
            </div>
            <div class="abilityBreakdownHeader">DESCRIPTION</div>
            <div class="abilityBreakdownDescription">${tooltips.updateSubstatColor(weaponRef.desc)}</div>
            `;
        }
    },
    pythonCalcsTier0(index,returnObject,isCycleCalcs,nameOverride) {
        const weaponRef = sniperList["Python"];
        const settingsRef = weaponRef.weaponSettings;

        if (settingsRef.usePythonBonus) {
            weaponRef.complexBonus = [
                {
                    "stats": [
                        {"name": "enemyToxicResistanceReductionCORE","value": -0.036,"subStackValue": -0.013},
                        {"name": "enemyNonAttributeResistanceReductionCORE","value": -0.02,"subStackValue": -0.01},
                    ],
                    "bonusName": "Python Instinct",
                    "oneTimeOrStack": "stack",
                    "duration": 2,
                    "cooldown": 0,
                    "isDurationActive": true,
                    "isCooldownActive": false,
                    "clearOnReload": true,
                    "limit": 28,
                    "currentStacks": -1,
                    "skipFirstShot": true,
                    "timePassedEntry": 0,
                    "cooldown": 0,
                    "conditions": ["isWeakpoint"],
                }
            ]
        }
        else {
            weaponRef.complexBonus = [];
        }


        if (!isCycleCalcs) {
            // const rowInjection = [
            //     {"name": "+Skill Crit Rate","value": settingsRef.arcaneWaveActive ? critBonus : 0,"unit": "%"},
            // ]
            const breakdownArray = [
                {"header": "PREY","value": null,"modifier": null,"hasCritAVG": null,"unit": "",
                    "toggleElemID": ["usePythonBonus","Use Prey?"],
                    // "rowInjection": [rowInjection,""],
                    "condition": false,"desc": ""},
            ];
            const bodyString = `weaponBreakdownBody1`;
            
            const addRow = calcsUIHelper.addHealingBoxCluster;
            readSelection(`weaponBreakdownBody1`).innerHTML = `
            <div class="basicsSummaryBox">
            <div class="traitMegaTitleHeader">UNIQUE ABILITY</div>
                ${calcsUIHelper.addHealingBoxRows(bodyString,breakdownArray,weaponRef.displayStatsALT,index,returnObject,"Python",true)}
            </div>
            <div class="abilityBreakdownHeader">DESCRIPTION</div>
            <div class="abilityBreakdownDescription">${tooltips.updateSubstatColor(weaponRef.desc)}</div>
            `;
        }
    },
    lastDaggerTier0Calcs(index,returnObject,isCycleCalcs,nameOverride) {
        const weaponRef = sniperList["Last Dagger"];
        const settingsRef = weaponRef.weaponSettings;

        if (settingsRef.useLethalDagger) {
            weaponRef.complexBonus = [
                {
                    "stats": [
                       {"name": "FirearmCritRateBaseCORE","value": 0.022,"subStackValue": 0.022},
                    ],
                    "bonusName": "Lethal Dagger",
                    "oneTimeOrStack": "stack",
                    "duration": 15,
                    "cooldown": 0,
                    "isDurationActive": true,
                    "isCooldownActive": false,
                    "clearOnReload": false,
                    "limit": 30,
                    "currentStacks": 0,
                    // "skipFirstShot": true,
                    "timePassedEntry": 0,
                    "cooldown": 0,
                }
            ]
        }
        else {
            weaponRef.complexBonus = [];
        }

        if (settingsRef.useDaggerStrike) {
            const Magazine = Math.floor(weaponRef.magazine * (1 + index.MagazineSize + index.MagazineSizeCORE));
            const multiCoeff = 1.16;
            const atkScalar = Magazine * multiCoeff;

            weaponRef.complexBonus.push(
                {
                    "stats": [
                        {"name": "independentScalarCORE","value": atkScalar,"subStackValue": null},
                        {"name": "BulletCostWeaponMagazineOverrideCORE","value": 1,"subStackValue": null},
                    ],
                    "bonusName": "Last Dagger (Strike)",
                    "oneTimeOrStack": "stackPop",
                    "isCharged": true,
                    "limit": 30,
                    "currentStacks": 0,
                    "timePassedEntry": 0,
                    "conditions": ["isReloaded"],
                    "cooldown": 0,
                    "duration": 0,
                }
            )
        }



        if (!isCycleCalcs) {
            // const rowInjection = [
            //     {"name": "+Skill Crit Rate","value": settingsRef.arcaneWaveActive ? critBonus : 0,"unit": "%"},
            // ]
            const breakdownArray = [
                {"header": "LETHAL DAGGER","value": null,"modifier": null,"hasCritAVG": null,"unit": "",
                    "toggleElemID": ["useLethalDagger","Use Lethal Dagger?"],
                    // "rowInjection": [rowInjection,""],
                    "condition": false,"desc": ""},
                {"header": "STRIKE","value": null,"modifier": null,"hasCritAVG": null,"unit": "",
                    "toggleElemID": ["useDaggerStrike","Use Strike?"],
                    "condition": false,"desc": ""},
            ];
            const bodyString = `weaponBreakdownBody1`;
            
            const addRow = calcsUIHelper.addHealingBoxCluster;
            readSelection(`weaponBreakdownBody1`).innerHTML = `
            <div class="basicsSummaryBox">
            <div class="traitMegaTitleHeader">UNIQUE ABILITY</div>
                ${calcsUIHelper.addHealingBoxRows(bodyString,breakdownArray,weaponRef.displayStatsALT,index,returnObject,"Last Dagger",true)}
            </div>
            <div class="abilityBreakdownHeader">DESCRIPTION</div>
            <div class="abilityBreakdownDescription">${tooltips.updateSubstatColor(weaponRef.desc)}</div>
            `;
        }
    },
    skipThisWeaponCalcs(index,returnObject,isCycleCalcs) {
        if (!isCycleCalcs) {
            readSelection(`weaponBreakdownBody1`).innerHTML += `<br><br>
            <div class="abilityBreakdownDescription">This weapon has its damage breakdown disabled, but it will be enabled soon.<br>Burst rifles are complicated.</div>
            `;
        }
    },
    ...localInsertionDamage
}

//normally return targets are specified in character objects, but since weapons as a generalized target don't, I need to do this instead
//so refer to this in the future if we add more targets to general weapon breakdowns, but also, remember later to do a localInsertionTargets
//based on weapons with unique effects such as gregs
const weaponTargetReferences = {
    "Shot - AVG/Hit": "avgPerShot",
    "SUM AVG DPS": "totalAVGDPS",
    "SUM Magazine DMG": "totalAVGGun",
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

                let tooltipID = entry.tooltipID || "";
                rowString += addRow(tooltipID,statName,statValue,isRounded,unit);
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
        //this function is purely for populating the correct Target dropdown info based on what is provided
        //but no actual math is done here, that's in the next function that calls this one
        const characterRef = globalRecords.character;
        const currentCharacter = characterRef.currentCharacter;
        const currentCharacterMods = characterRef.mods;
        const abilityArray = characterRef.abilityArray;
        const currentAbilityBreakdown = characterRef.currentAbilityBreakdown;

        const globalWeapon = globalRecords.weapon;
        const currentWeaponRef = sniperList[globalWeapon.currentWeapon];
        const currentWeaponMods = globalWeapon.mods;
        const currentAmmoType = currentWeaponRef.ammoType;
        const currentWeaponType = currentWeaponRef.weaponType;
        const reactorRef = globalRecords.reactor;
        const weaponRef = globalRecords.weapon;

        const typeRef2 = {
            "Ability": currentCharacterMods,
            "Stat": currentCharacterMods,
            "Ability - Weapon Based": currentWeaponMods,
            "Weapon": currentWeaponMods,
            "Ability - Reactor Roll": [reactorRef.subRoll1,reactorRef.subRoll2],
            "Weapon - Substat": [weaponRef.subRoll1,weaponRef.subRoll2,weaponRef.subRoll3,weaponRef.subRoll4],
            "Weapon - Cores": [`1 - ${weaponRef.coreRoll1 || "No input"}`,`2 - ${weaponRef.coreRoll2 || "No input"}`,`3 - ${weaponRef.coreRoll3 || "No input"}`,`4 - ${weaponRef.coreRoll4 || "No input"}`,`5 - ${weaponRef.coreRoll5 || "No input"}`],
        }

        //queryCycledTargetName queryCycledTargetName
        const queryCycledTargetNames = {
            "Ability": "MOD",
            "Stat": "STAT",
            "Ability - Weapon Based": "MOD",
            "Weapon": "MOD",
            "Ability - Reactor Roll": "SUB",
            "Weapon - Substat": "SUB",
            "Weapon - Cores": "CORE",
        }

        //character stuff ignores the first 2 slots, whereas weapon stuff does not
        let isWeaponBased = queryType.toLowerCase().includes("weapon");
        let isReactorBased = queryType.toLowerCase().includes("reactor");
        let newModArray1 = [...typeRef2[queryType]];
        let newModArray2 = isWeaponBased ? [...typeRef2[queryType]] 
        : (isReactorBased ? [...typeRef2[queryType]] : [...typeRef2[queryType]].slice(2));//to exclude the first 2 mods, the augment and the subattack mod
        //but if it is still an ability based query but uses reactors, skip the slice as we need every entry in the array.
        characterRef.modQueryOptions = (isWeaponBased || isReactorBased) ? [...typeRef2[queryType]] : [...typeRef2[queryType]].slice(2);

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
            let backupFound = false;
            for (let entry of newModArray2) {
                if (entry != "") {readSelection("queryMod").value = entry;backupFound = true;break;}
            }
            if (!backupFound) {readSelection("queryMod").value = "";}
        }
        
        readSelection("queryCycledTargetName").innerHTML = queryCycledTargetNames[queryType];
        
        if (queryType === "Ability" || queryType === "Ability - Weapon Based" || queryType === "Ability - Reactor Roll") {
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
        else if (queryType === "Weapon" || queryType === "Weapon - Substat" || queryType === "Weapon - Cores") {
            //STAT OPTION RETURN KEYS
            readSelection("queryAbilityBoxHolder").style.display = "none";
            const abilityOptionLister = readSelection("queryAbilityOptionList");
            const statRefs = weaponTargetReferences;

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
    updateQueryCoreSelected(imageElementID) {
        const weaponRef = globalRecords.weapon;
        const typeRef2 = [`1 - ${weaponRef.coreRoll1 || "No input"}`,`2 - ${weaponRef.coreRoll2 || "No input"}`,`3 - ${weaponRef.coreRoll3 || "No input"}`,`4 - ${weaponRef.coreRoll4 || "No input"}`,`5 - ${weaponRef.coreRoll5 || "No input"}`];

        readSelection("queryMod").value = typeRef2[imageElementID-1];
        moduleQueryFunctions.getModuleQueryResults();
    },
    updateQueryReactorSelected(imageElementID) {
        const reactorRef = globalRecords.reactor;
        // queryReactorName1     "Ability - Reactor Roll": [reactorRef.subRoll1,reactorRef.subRoll2],
        const typeRef2 = [`${reactorRef.subRoll1 || "No input"}`,`${reactorRef.subRoll2 || "No input"}`];

        readSelection("queryMod").value = typeRef2[imageElementID-1];
        moduleQueryFunctions.getModuleQueryResults();
    },
    updateQueryWeaponSubSelected(imageElementID) {
        const weaponRef = globalRecords.weapon;
        // queryReactorName1     "Ability - Reactor Roll": [reactorRef.subRoll1,reactorRef.subRoll2],
        const typeRef2 = [`${weaponRef.subRoll1 || "No input"}`,`${weaponRef.subRoll2 || "No input"}`,`${weaponRef.subRoll3 || "No input"}`,`${weaponRef.subRoll4 || "No input"}`];

        readSelection("queryMod").value = typeRef2[imageElementID-1];
        moduleQueryFunctions.getModuleQueryResults();
    },
    updateQueryCharacterModSelected(imageElementID) {
        const modsRef = globalRecords.character.mods;
        const typeRef2 = [
            `${modsRef[2] || "No input"}`,
            `${modsRef[3] || "No input"}`,
            `${modsRef[4] || "No input"}`,
            `${modsRef[5] || "No input"}`,
            `${modsRef[6] || "No input"}`,
            `${modsRef[7] || "No input"}`,
            `${modsRef[8] || "No input"}`,
            `${modsRef[9] || "No input"}`,
            `${modsRef[10] || "No input"}`,
            `${modsRef[11] || "No input"}`,
        ];

        //-3 here bc the offset is 2 to start with on the modsRef, but it's gonna be -1 for a 0starter then -2 for the offset, so -3
        readSelection("queryMod").value = typeRef2[imageElementID-3];
        moduleQueryFunctions.getModuleQueryResults();
    },
    updateQueryWeaponModSelected(imageElementID) {
        const modsRef = globalRecords.weapon.mods;
        const typeRef2 = [
            `${modsRef[0] || "No input"}`,
            `${modsRef[1] || "No input"}`,
            `${modsRef[2] || "No input"}`,
            `${modsRef[3] || "No input"}`,
            `${modsRef[4] || "No input"}`,
            `${modsRef[5] || "No input"}`,
            `${modsRef[6] || "No input"}`,
            `${modsRef[7] || "No input"}`,
            `${modsRef[8] || "No input"}`,
            `${modsRef[9] || "No input"}`,
        ];

        //-3 here bc the offset is 2 to start with on the modsRef, but it's gonna be -1 for a 0starter then -2 for the offset, so -3
        readSelection("queryMod").value = typeRef2[imageElementID-1];
        moduleQueryFunctions.getModuleQueryResults();
    },
    getModuleQueryResults() {
        //never allow a blank query, default to ability if all else fails
        const typeRef = {"Ability": "","Stat": "","Ability - Weapon Based": "","Weapon": "","Ability - Reactor Roll": "","Weapon - Substat": "","Weapon - Cores": "",}
        if (typeRef[readSelection("queryType").value] === undefined) {readSelection("queryType").value = "Ability"}
        const queryType = readSelection("queryType").value;

        const {selectedAbilityIndexReference,selectedAbilityOptionPath} = moduleQueryFunctions.getUpdatedQueryModSelections(queryType);
        moduleQueryFunctions.clearInvalidQuerySelections();

        const displayBoxElemIDs = [
            "queriesCoreSelectionRow",
            "queriesReactorSelectionRow",
            "queriesCharacterModSelectionRow",
            "queriesWeaponModSelectionRow",
            "queriesWeaponSubSelectionRow",
        ]
        for (let entry of displayBoxElemIDs) {
            readSelection(entry).style.display = "none";
        }

        const characterRef = globalRecords.character;
        const currentCharacter = characterRef.currentCharacter;
        const currentCharacterMods = characterRef.mods;
        const abilityArray = characterRef.abilityArray;
        const currentAbilityBreakdown = characterRef.currentAbilityBreakdown;

        const globalWeapon = globalRecords.weapon;
        const currentWeaponRef = sniperList[globalWeapon.currentWeapon];
        const currentWeaponMods = globalWeapon.mods;
        const currentAmmoType = currentWeaponRef.ammoType;
        const currentWeaponType = currentWeaponRef.weaponType;
        const reactorRef = globalRecords.reactor;
        const weaponRef = globalRecords.weapon;

        // const currentWeaponImage = sniperList[currentWeapon.value].image;
        const currentCoreArray = sniperList[globalWeapon.currentWeapon].coreArray;


        let isWeaponBased = queryType.toLowerCase().includes("weapon") || queryType.toLowerCase().includes("reactor");
        //for assigning the right mod selection that is currently equipped
        const typeRef2 = {
            "Ability": currentCharacterMods,
            "Stat": currentCharacterMods,
            "Ability - Weapon Based": currentWeaponMods,
            "Weapon": currentWeaponMods,
            "Ability - Reactor Roll": [reactorRef.subRoll1,reactorRef.subRoll2],
            "Weapon - Substat": [weaponRef.subRoll1,weaponRef.subRoll2,weaponRef.subRoll3,weaponRef.subRoll4],
            "Weapon - Cores": [weaponRef.coreRoll1,weaponRef.coreRoll2,weaponRef.coreRoll3,weaponRef.coreRoll4,weaponRef.coreRoll5],
        }
        const typeRefCategory = {
            "Ability": modData,
            "Stat": modData,
            "Ability - Weapon Based": userTriggers.weaponTypeModList[currentAmmoType],
            "Weapon": userTriggers.weaponTypeModList[currentAmmoType],
            "Ability - Reactor Roll": reactorSubRolls,
            "Weapon - Substat": weaponSubstatList,
            "Weapon - Cores": coreRainbow,
        }
        const modLists = typeRefCategory[queryType];

        let newModArray1 = [...typeRef2[queryType]];
        const modSelection = readSelection("queryMod").value;
        //abort invalid or empty queries
        if (modSelection === "" || selectedAbilityOptionPath === "N/A (or not coded yet)") {
            readSelection("moduleQueryBoxHolder").innerHTML = "No valid query could be completed under your current settings.<br><br>This is likely because the target you selected:<br>- Doesn't have any mods equipped to compare against<br>- Isn't meant to be optimized, maybe it just gives a bonus to other abilities<br>- Has not been coded with options to optimize around. Yet.";
            return;
        }
        else if (queryType === "Weapon - Cores" && !currentCoreArray) {
            readSelection("moduleQueryBoxHolder").innerHTML = "Your currently selected weapon does not have cores assigned within the calculator.<br><br>This is either because it is a non-ultimate weapon, or Vash hasn't assigned slots to this weapon yet.<br>If the latter, ping Vash in discord and let him know.";
            return;
        }


        //character stuff ignores the first 2 slots, whereas weapon stuff does not
        // console.log(characterRef.modQueryOptions)
        const indexToModify = isWeaponBased ? characterRef.modQueryOptions.indexOf(modSelection) : characterRef.modQueryOptions.indexOf(modSelection) + 2;
        // console.log(indexToModify)
        const modKeyReference = Object.keys(modLists);
        const abilityTarget = `ability${selectedAbilityIndexReference+1}`;
        const targetReturnValue = `${selectedAbilityOptionPath}`;


        let oldReference = newModArray1[indexToModify];
        newModArray1[indexToModify] = "";
        const modCategoriesHolder = [];
        //create the set of categories that will help us determine when to skip things
        for (let entry of newModArray1) {
            if (modLists[entry]) {
                if (modLists[entry].category === "") {continue;}
                modCategoriesHolder.push(modLists[entry].category);
            }
        }
        const categorySet = new Set(modCategoriesHolder);
        const modSet = new Set(newModArray1);
        readSelection("moduleQueryBoxHolder").innerHTML = "";

        // console.log(indexToModify)
        let queryResultsArray = [];
        if (queryType === "Ability") {
            const characterRef = globalRecords.character;
            const currentCharacter = characterRef.currentCharacter;
            const arrayRef = characterRef.abilityArray[selectedAbilityIndexReference];
            const arrayResult = arrayRef===0 ? "base" : arrayRef;
            const typeSet = new Set(characters[currentCharacter].abilities[abilityTarget][arrayResult].type);

            for (let entry of modKeyReference) {
                let currentModRef = modLists[entry];


                if (currentModRef.inclusion) {
                    let inclusionSkipFound = false;
                    for (let inclusion of currentModRef.inclusion) {
                        if (!typeSet.has(inclusion)) {
                            inclusionSkipFound = true;
                            break;
                        }
                    }
                    if (inclusionSkipFound) {continue;}
                }

                
                if (categorySet.has(currentModRef.category) || modSet.has(entry) || entry === "") {continue}
                newModArray1[indexToModify] = entry;

                queryResultsArray.push(
                    {"modName":entry,"returnedValue":updateFormulas(true,newModArray1,null).returnObject[abilityTarget][targetReturnValue],"category": currentModRef.category}
                )
            }

            readSelection("queriesCharacterModSelectionRow").style.display = "flex";
            for (let i=3;i<=12;i++) {
                readSelection(`queryCharacterBoxHolder${i}`).style.border = "none";
                readSelection(`queryCharacterBoxHolder${i}`).style.opacity = "0.3";
            }
            readSelection(`queryCharacterBoxHolder${indexToModify+1}`).style.border = "1px solid white";
            readSelection(`queryCharacterBoxHolder${indexToModify+1}`).style.opacity = "1";
        }
        else if (queryType === "Ability - Weapon Based") {
            for (let entry of modKeyReference) {
                if (categorySet.has(modLists[entry].category) || modSet.has(entry) || entry === "") {continue}

                const inclusionSet = new Set(modLists[entry].inclusion);
                const exclusionSet = new Set(modLists[entry].exclusion);

                // console.log(newModArray1);

                //if the inclusion filter is set with an actual entry, and the weapon type doesn't match it, skip it (example: sniper type but a shotgun mod, we skip that mod)
                if (modLists[entry].inclusion.length>0 && !inclusionSet.has(currentWeaponType)) {continue;}
                //otherwise, if there an exclusion filter set for the mod and we DO match it, then skip it
                else if (modLists[entry].exclusion.length>0 && exclusionSet.has(currentWeaponType)) {continue;}

                newModArray1[indexToModify] = entry;

                // console.log(updateFormulas(true,null,newModArray1).returnObject[abilityTarget][targetReturnValue])

                queryResultsArray.push(
                    {"modName":entry,"returnedValue":updateFormulas(true,null,newModArray1).returnObject[abilityTarget][targetReturnValue],"category": modLists[entry].category}
                )
            }
            readSelection("queriesWeaponModSelectionRow").style.display = "flex";
            for (let i=1;i<=10;i++) {
                readSelection(`queryWeaponBoxHolder${i}`).style.border = "none";
                readSelection(`queryWeaponBoxHolder${i}`).style.opacity = "0.3";
            }
            readSelection(`queryWeaponBoxHolder${indexToModify+1}`).style.border = "1px solid white";
            readSelection(`queryWeaponBoxHolder${indexToModify+1}`).style.opacity = "1";
        }
        else if (queryType === "Ability - Reactor Roll") {
            for (let entry of modKeyReference) {

                const inclusionSet = new Set(newModArray1);
                if (entry === "" && oldReference != "") {continue;}
                else if (inclusionSet.has(entry) && entry != "") {continue;}
                
                //assign the cycled value to the index spot of the array for each cycle
                newModArray1[indexToModify] = entry;

                const value = updateFormulas(true,null,null,newModArray1).returnObject[abilityTarget][targetReturnValue];

                queryResultsArray.push(
                    {
                        "modName":entry,
                        "returnedValue":value,
                        "category": modLists[entry].category
                    }

                )
            }
            //UI updates for the buttons we added for comparisons, grey out shit unused, highlight the current selection, etc.
            readSelection("queriesReactorSelectionRow").style.display = "flex";
            for (let i=1;i<=2;i++) {
                readSelection(`queryReactorBoxHolder${i}`).style.border = "none";
                readSelection(`queryReactorBoxHolder${i}`).style.opacity = "0.3";
            }
            readSelection(`queryReactorBoxHolder${indexToModify+1}`).style.border = "1px solid white";
            readSelection(`queryReactorBoxHolder${indexToModify+1}`).style.opacity = "1";
        }
        else if (queryType === "Weapon") {
            for (let entry of modKeyReference) {
                if (categorySet.has(modLists[entry].category) || modSet.has(entry) || entry === "") {continue}

                const inclusionSet = new Set(modLists[entry].inclusion);
                const exclusionSet = new Set(modLists[entry].exclusion);

                // console.log(newModArray1);

                //if the inclusion filter is set with an actual entry, and the weapon type doesn't match it, skip it (example: sniper type but a shotgun mod, we skip that mod)
                if (modLists[entry].inclusion.length>0 && !inclusionSet.has(currentWeaponType)) {continue;}
                //otherwise, if there an exclusion filter set for the mod and we DO match it, then skip it
                else if (modLists[entry].exclusion.length>0 && exclusionSet.has(currentWeaponType)) {continue;}

                newModArray1[indexToModify] = entry;

                // console.log(updateFormulas(true,null,newModArray1).returnObject[abilityTarget][targetReturnValue])

                queryResultsArray.push(
                    {"modName":entry,"returnedValue":updateFormulas(true,null,newModArray1).returnObject.weapon[targetReturnValue],"category": modLists[entry].category}
                )
            }

            readSelection("queriesWeaponModSelectionRow").style.display = "flex";
            for (let i=1;i<=10;i++) {
                readSelection(`queryWeaponBoxHolder${i}`).style.border = "none";
                readSelection(`queryWeaponBoxHolder${i}`).style.opacity = "0.3";
            }
            readSelection(`queryWeaponBoxHolder${indexToModify+1}`).style.border = "1px solid white";
            readSelection(`queryWeaponBoxHolder${indexToModify+1}`).style.opacity = "1";
        }
        else if (queryType === "Weapon - Substat") {
            let inclusionSet = new Set(newModArray1);
            for (let entry of modKeyReference) {
                if (entry === "" || inclusionSet.has(entry)) {continue}

                newModArray1[indexToModify] = entry;

                queryResultsArray.push(
                    {"modName":entry,"returnedValue":updateFormulas(true,null,null,null,newModArray1).returnObject.weapon[targetReturnValue],"category": modLists[entry].category}
                )
            }
            readSelection("queriesWeaponSubSelectionRow").style.display = "flex";
            for (let i=1;i<=4;i++) {
                readSelection(`queryWeaponSubBoxHolder${i}`).style.border = "none";
                readSelection(`queryWeaponSubBoxHolder${i}`).style.opacity = "0.3";
            }
            readSelection(`queryWeaponSubBoxHolder${indexToModify+1}`).style.border = "1px solid white";
            readSelection(`queryWeaponSubBoxHolder${indexToModify+1}`).style.opacity = "1";
        }
        else if (queryType === "Weapon - Cores") {
            let currentSlotColor = currentCoreArray[indexToModify];
            for (let entry of modKeyReference) {
                let currentEntry = modLists[entry];

                if (entry==="" && oldReference != "") {continue;}//Skipped empty entry when target was not blank
                else if (currentEntry.color != currentSlotColor && currentSlotColor != "Rainbow" && entry!="") {continue;}//Skipped color that did not match and wasn't rainbow

                newModArray1[indexToModify] = entry;

                queryResultsArray.push(
                    {"modName":entry,"returnedValue":updateFormulas(true,null,null,null,null,newModArray1).returnObject.weapon[targetReturnValue],"category": modLists[entry].category}
                )
            }

            readSelection("queriesCoreSelectionRow").style.display = "flex";
            for (let i=1;i<=5;i++) {
                readSelection(`weaponCore${i}IconQuery`).style.border = "none";
                readSelection(`weaponCore${i}IconQuery`).style.opacity = "0.3";
            }
            readSelection(`weaponCore${indexToModify+1}IconQuery`).style.border = "1px solid white";
            readSelection(`weaponCore${indexToModify+1}IconQuery`).style.opacity = "1";
        }
        else if (queryType === "Stat") {
            for (let entry of modKeyReference) {
                if (categorySet.has(modLists[entry].category) || modSet.has(entry) || entry === "") {continue}
                newModArray1[indexToModify] = entry;

                queryResultsArray.push(
                    {"modName":entry,"returnedValue":updateFormulas(true,newModArray1,null).returnObject[targetReturnValue],"category": modLists[entry].category}
                )
            }
            readSelection("queriesCharacterModSelectionRow").style.display = "flex";
            for (let i=3;i<=12;i++) {
                readSelection(`queryCharacterBoxHolder${i}`).style.border = "none";
                readSelection(`queryCharacterBoxHolder${i}`).style.opacity = "0.3";
            }
            readSelection(`queryCharacterBoxHolder${indexToModify+1}`).style.border = "1px solid white";
            readSelection(`queryCharacterBoxHolder${indexToModify+1}`).style.opacity = "1";
        }
        

        queryResultsArray.sort((a, b) => b.returnedValue - a.returnedValue); // Sort in ascending order

        let referencePoint = {};
        //if this is a core selection, remove the "1 - " prefix from it, and if this is an empty core, treat it as an empty string instead of "no input"
        let newModSelectionName = queryType === "Weapon - Cores" ? (modSelection.slice(4)!="No input" ? modSelection.slice(4) : "") : modSelection!="No input" ? modSelection : "";
        let foundRef = false;
        for (let entry of queryResultsArray) {
            if (entry.modName === "" && newModSelectionName != "") {
                queryResultsArray.splice(queryResultsArray.indexOf(entry),1);
                continue;
            }
            // if (entry.modName === "") {con}
            if (!foundRef && entry.modName === newModSelectionName) {
                referencePoint = {...entry};
                queryResultsArray.splice(queryResultsArray.indexOf(entry),1);
                foundRef = true;
                // break;
            }
        }

        const highestValue = queryResultsArray[0].returnedValue
        const lowestValue = queryResultsArray[queryResultsArray.length-1].returnedValue;
        const referenceValue = referencePoint.returnedValue;
        // console.log(referenceValue)modSelection
        
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