const calcs = {
    getATKFinal(index) {
        // new Float64Array(greatTableSize)
        const ATKBaseFinal = index[ATKBase];
        const ATKBonusPercent = index[ATKP];
        const ATKBonusFlat = index[ATKFlat];

        const ATKFinal = ATKBaseFinal * (1 + ATKBonusPercent) + ATKBonusFlat;

        return {
            ATKBaseFinal,ATKBonusPercent,ATKBonusFlat,ATKFinal
        }
    },
    getHPFinal(index) {
        const HPBaseFinal = index[HPBase];

        const HPBonusPercent = index[HPP];
        const HPBonusFlat = index[HPFlat];

        const HPFinal = HPBaseFinal * (1 + HPBonusPercent) + HPBonusFlat;

        return {
            HPBaseFinal,HPBonusPercent,HPBonusFlat,HPFinal
        }
    },
    getDEFFinal(index) {
        const DEFBaseFinal = index[DEFBase];

        const DEFBonusPercent = index[DEFP];
        const DEFBonusFlat = index[DEFFlat];

        const DEFFinal = DEFBaseFinal * (1 + DEFBonusPercent) + DEFBonusFlat;

        return {
            DEFBaseFinal,DEFBonusPercent,DEFBonusFlat,DEFFinal
        }
    },
    getAggroFinal(index) {
        const AggroBaseFinal = index[AggroBase] * (1 + index[AggroBaseP]);

        const AggroBonusPercent = index[AggroP];
        const AggroBonusFlat = index[AggroFlat];

        const AggroFinal = AggroBaseFinal * (1 + AggroBonusPercent) + AggroBonusFlat;

        return {
            AggroBaseFinal,AggroBonusPercent,AggroBonusFlat,AggroFinal
        }
    },
    getSPDFinal(index) {
        const SPDBaseFinal = index[SPDBase];

        const SPDBonusPercent = index[SPDP];
        const SPDBonusFlat = index[SPDFlat];

        const SPDFinal = SPDBaseFinal * (1 + SPDBonusPercent) + SPDBonusFlat;

        // const SPDActionValue = +(10000/SPDFinal).toFixed(7);
        const SPDActionValue = 10000/SPDFinal;
        return {
            SPDBaseFinal,SPDBonusPercent,SPDBonusFlat,SPDFinal,SPDActionValue
        }
    },
    getCritFinal(index) {
        const CritRateBaseFinal = index[CritRateBase];
        const CritDMGBaseFinal = index[CritDamageBase];

        const CritRatePercent = index[CritRateP];
        const CritDamagePercent = index[CritDamageP];

        const CritRateFlatM = index[CritRateFlat];
        const CritDamageFlatM = index[CritDamageFlat];

        const CritRateFinal = CritRateBaseFinal * (1 + CritRatePercent) + CritRateFlatM;
        const CritDamageFinal = CritDMGBaseFinal * (1 + CritDamagePercent) + CritDamageFlatM;


        return {
            CritRateFinal,CritDamageFinal
        }
    },

    createStatTable() {
        const arr = new Float64Array(greatTableSize);
        return arr;
    },


    customCeiling(value,inc) {
        return Math.ceil((value) / inc) * inc;
        // return Math.ceil((value+0.01) / inc) * inc;
    },
    customFloor(value,inc) {
        return Math.floor(value / inc) * inc;
    },
    customTruncate(num, decimalPlaces) {
        const factor = Math.pow(10, decimalPlaces);
        num += 1/(factor + 1)
        return Math.floor(num * factor)/factor;
    },
    customRound(num, decimalPlaces) {
        const factor = Math.pow(10, decimalPlaces);
        return Math.round(num * factor)/factor;
    },
    // const Damage = calcs.customTruncate(returnObject.totalSkillCritDamage + 0.00001,4);

    // getShield(index,characterRef) {
    //     const baseCharacterShield = characterRef.Shield;
    //     const baseShieldBonus = index.Shield + (index.boostShieldFromHP ? calcs.getHealth(index,characterRef).totalHealth * modData["Overwhelming Shield"].conversionRate : 0);
    //     const shieldPercentBonus = index["Shield%"];
    //     const totalShield = Math.max(1,(baseCharacterShield + baseShieldBonus) * (1 + shieldPercentBonus));
    //     const displayShield = index.isShieldSetTo1 ? 1 : totalShield;

    //     return {baseCharacterShield,baseShieldBonus,shieldPercentBonus,totalShield,displayShield}
    // },
    // getDefense(index,characterRef) {
    //     const baseCharacterDEF = characterRef.DEF;
    //     const baseDEFBonus = index.DEF + (index.boostDEFFromHP ? calcs.getHealth(index,characterRef).totalHealth * modData["Overwhelming DEF"].conversionRate : 0);
    //     const DEFPercentBonus = index["DEF%"];
    //     const totalDEF = Math.max((baseCharacterDEF + baseDEFBonus) * (1 + DEFPercentBonus));
    //     const displayDEF = totalDEF;

    //     return {baseCharacterDEF,baseDEFBonus,DEFPercentBonus,totalDEF,displayDEF}
    // },
    // getMP(index,characterRef) {
    //     const baseCharacterMP = characterRef.MP;
    //     const baseMPBonus = index.MP;
    //     const MPPercentBonus = index["MP%"];
    //     const totalMP = (baseCharacterMP + baseMPBonus) * (1 + MPPercentBonus);
    //     const displayMP = totalMP;

    //     return {baseCharacterMP,baseMPBonus,MPPercentBonus,totalMP,displayMP}
    // },
    // getRecovery(index,characterRef) {
    //     //MP
    //     const MPRecoveryModifier = index.MPRecovery;

    //     const baseCharacterMPInCombat = characterRef.MPInCombat;
    //     const baseMPInCombatBonus = index.MPInCombat;
    //     const totalMPInCombat = (baseCharacterMPInCombat+baseMPInCombatBonus) * (1+MPRecoveryModifier);

    //     const baseCharacterMPOutCombat = characterRef.MPOutCombat;
    //     const baseMPOutCombatBonus = index.MPOutCombat;
    //     const totalMPOutCombat = (baseCharacterMPOutCombat+baseMPOutCombatBonus) * (1+MPRecoveryModifier);

    //     //SHIELDS
    //     const shieldRecoveryModifier = index.ShieldRecovery;

    //     const baseCharacterShieldInCombat = characterRef.ShieldInCombat;
    //     const baseShieldInCombatBonus = index.ShieldInCombat;
    //     const totalShieldInCombat = (baseCharacterShieldInCombat+baseShieldInCombatBonus) * (1 + shieldRecoveryModifier)

    //     const baseCharacterShieldOutCombat = characterRef.ShieldOutCombat;
    //     const baseShieldOutCombatBonus = index.ShieldOutCombat;
    //     const totalShieldOutCombat = (baseCharacterShieldOutCombat+baseShieldOutCombatBonus) * (1 + shieldRecoveryModifier)

    //     //HP
    //     const totalHPRecoveryModifier = index.HPRecovery;
    //     const totalHPHealModifier = index.HPHeal;

    //     return {
    //         MPRecoveryModifier,baseCharacterMPInCombat,baseMPInCombatBonus,totalMPInCombat,baseCharacterMPOutCombat,baseMPOutCombatBonus,totalMPOutCombat,
    //         shieldRecoveryModifier,baseCharacterShieldInCombat,baseShieldInCombatBonus,totalShieldInCombat,baseCharacterShieldOutCombat,baseShieldOutCombatBonus,totalShieldOutCombat,
    //         totalHPRecoveryModifier,totalHPHealModifier
    //     }
    // },
    // getResistance(index,characterRef) {
    //     const totalFireResist = (characterRef.ResistanceFire + index.ResistanceFire) * (1 + index["ResistanceFire%"]);
    //     const totalChillResist = (characterRef.ResistanceChill + index.ResistanceChill) * (1 + index["ResistanceChill%"]);
    //     const totalToxinResist = (characterRef.ResistanceToxin + index.ResistanceToxin) * (1 + index["ResistanceToxin%"]);
    //     const totalElectricResist = (characterRef.ResistanceElectric + index.ResistanceElectricity) * (1 + index["ResistanceElectricity%"]);

    //     return {totalFireResist,totalChillResist,totalToxinResist,totalElectricResist}
    // },
    // getSkillCrit(index,characterRef) {
    //     const baseCharacterCritRate = characterRef.CritRate;
    //     const baseCharacterCritDamage = characterRef.CritDamage;

    //     //This is if something boosts the base crit rate of a character, before % bonuses come into play
    //     const baseCritRateBonus = index.SkillCritRateBaseBonus;
    //     const baseCritDamageBonus = index.SkillCritDamageBaseBonus;

    //     const critRatePercentBonus = index.SkillCritRate;
    //     const critDamagePercentBonus = index.SkillCritDamage;

    //     const totalSkillCritRatePreCap = Math.max(0,Math.min(1,(baseCharacterCritRate + baseCritRateBonus) * (1 + critRatePercentBonus)));
    //     const enemySkillCritResist = (+globalRecords.skillCritCeiling/100) * (1 + index.enemyCritResistReductionSkill);
    //     const totalSkillCritRate = globalRecords.useCrits ? totalSkillCritRatePreCap * (1 + enemySkillCritResist) : 0;
    //     const totalSkillCritDamage = Math.max(1,(baseCharacterCritDamage + baseCritDamageBonus) * (1 + critDamagePercentBonus))

    //     return {baseCharacterCritRate,baseCharacterCritDamage,baseCritRateBonus,baseCritDamageBonus,critRatePercentBonus,critDamagePercentBonus,totalSkillCritRatePreCap,enemySkillCritResist,totalSkillCritRate,totalSkillCritDamage}
    // },

    // customTruncate(num, decimalPlaces) {
    //     const factor = Math.pow(10, decimalPlaces);
    //     return Math.floor(num * factor)/factor;
    // },
    // customCeiling(value, precision = 0.00001) {
    //     return Math.ceil(value / precision) * precision;
    // },
    // clamp(value,floor,ceiling) {
    //     return Math.min(ceiling,Math.max(floor,value))
    // },


    // getTotalSkillPowerModifier(index,abilityTypeArray) {
    //     let sumModifierBonus = index.PowerModifierBase;
    //     for (let type of abilityTypeArray) {sumModifierBonus += index[`PowerModifier${type.replace(/-/g, "")}`];}
    //     return sumModifierBonus;
    // },
    // getTotalSkillPower(index,abilityTypeArray,skillDependentModifier) {
    //     const powerOptimization = index.PowerOptimization + index.PowerOptimizationCORE;
    //     skillDependentModifier = (skillDependentModifier || 1) + index.CharacterSkillMultiplier;

    //     const reactorLevel = globalRecords.reactor.level;
    //     const reactorLevelBonuses = [0, 331.829, 663.658, 995.487, 1327.316, 1659.144];
    //     const baseValue = 11060.963;
    //     const baseSkillPowerValue = baseValue + reactorLevelBonuses[reactorLevel] + index.SkillPowerBaseValue;

    //     const basePowerRatio = 1 + index.PowerRatioBase;
    //     let baseSkillPower = (baseSkillPowerValue * powerOptimization * skillDependentModifier + (index.SkillAttackColossus * (1 + index["SkillAttackColossus%"]))) * basePowerRatio;
    //     for (let type of abilityTypeArray) {baseSkillPower *= Math.max(0.001,1 + index[`PowerRatio${type.replace(/-/g, "")}`]);}

    //     // return calcs.customTruncate(baseSkillPower + 0.00001,4);
    //     return baseSkillPower;
    // },
    // getResistanceBasedDR(index,typeName) {
    //     const currentBoss = globalRecords.boss.currentBoss;
    //     const resistString = `enemy${typeName.replace(/-/g, '')}ResistanceReduction`;
    //     const reductionValue = index[resistString] + index[resistString+"CORE"];
    //     const resistReduction = Math.max(0,1 + reductionValue);

    //     let basicStats = bossData[currentBoss].levelKeys[globalRecords.playerCount].lvlStats;
    //     const currentResistValue = basicStats[typeName] * resistReduction;

    //     const drConstant = 150;

    //     let sqRoot = Math.sqrt(currentResistValue);
    //     let initialValue = 1 - (drConstant/(drConstant + sqRoot))
    //     // if (typeName === "DEF") {initialValue = calcs.customCeiling(initialValue,0.00001);}
    //     if (typeName === "DEF") {initialValue += 0.00001;}
    //     const endValue = 1 - calcs.customTruncate(initialValue,4);
        
    //     return endValue;
    // },
    // getCritComposites(returnObject) {
    //     const Rate = returnObject.totalSkillCritRate;
    //     // console.log(returnObject.totalSkillCritDamage)
    //     // const Damage = returnObject.totalSkillCritDamage;
    //     const Damage = calcs.customTruncate(returnObject.totalSkillCritDamage + 0.00001,4);
    //     const Composite = 1 + (Rate * (Damage-1));

    //     return {Rate,Damage,Composite}
    // },
    // getFirearmCritComposites(returnObject) {
    //     const Rate = returnObject.totalFirearmCritRate;
    //     const Damage = calcs.customTruncate(returnObject.totalFirearmCritDamage + 0.00001,4);
    //     const Composite = 1 + (Rate * (Damage-1));

    //     return {Rate,Damage,Composite}
    // },
    // getCompositeDamageSpread(basicInfo,skillPowerModifier,addedExtraneousDamage,addedExtraneousMultiplier) {
    //     addedExtraneousDamage = addedExtraneousDamage || 0;//this is something like Kyle's damage based purely on mag force, that needs to add in for crits but not for modifiers
    //     addedExtraneousMultiplier = addedExtraneousMultiplier || 1//this is for stuff like Last Stand on kyle
    //     const perHit = (basicInfo.baseSkillPower * skillPowerModifier + addedExtraneousDamage) * addedExtraneousMultiplier * basicInfo.abilityDR;
    //     const perCrit = perHit * basicInfo.crit.Damage;
    //     const AVG = perHit * basicInfo.crit.Composite;

    //     return {perHit,perCrit,AVG}
    // },
    // getDPSPerSkillInterval(index,totalDamageDealt,baseCooldown,extraUsageDuration) {
    //     const cooldown = baseCooldown * Math.max(0.10,1 + index.SkillCooldown);//enforce the 90% CDR cap
    //     const interval = cooldown + (extraUsageDuration || 0);//extraDuration is basically an animation time where the cooldown starts AFTER the animation is over. So kyle thrusters, but not ines pingpong
    //     const DPS = totalDamageDealt/interval;

    //     return {cooldown,interval,DPS}
    // },
    // getDoTTotalBreakdown(index,dmgPerTick,interval,baseDuration) {
    //     const durationDOT = baseDuration * (1 + index.SkillDuration);
    //     const intervalDOT = interval;
    //     const totalTicks = Math.floor(durationDOT/interval);
    //     const totalTickDamage = dmgPerTick * totalTicks;

    //     return {durationDOT,totalTicks,intervalDOT,totalTickDamage}
    // },
    // getCompositeFirearmDamageSpread(baseDamage,critFirearm,factorDR,multishot) {
    //     const perHit = baseDamage * (factorDR ? factorDR : 1);
    //     const perCrit = perHit * critFirearm.Damage;
    //     const AVG = perHit * critFirearm.Composite;


    //     const multiShotMult = multishot ? multishot.totalFirearmMultishotMulti : 0;
    //     const multiShotAVG = multishot ? multishot.avgMultishotBonus : 0;
    //     const perHitMulti = perHit * (multiShotAVG ? multiShotMult : 0);
    //     const perCritMulti = perCrit * (multiShotAVG ? multiShotMult : 0);
    //     const AVGMulti = perHit * multiShotAVG;

    //     return {perHit,perCrit,AVG,perHitMulti,perCritMulti,AVGMulti}
    // },

    // getReloadTime(index,baseReloadTime,weaponRef) {
    //     const reloadComposite = calcs.clamp(index.ReloadSpeed + index.ReloadSpeedCORE,-0.30,0.90);
    //     //positive numbers are speed boosts, negative is bad. A reload time divided by a larger number makes it smaller, but a smaller number makes it bigger, etc.
    //     let reloadTime = (baseReloadTime - weaponRef.ZoomInHoldDelayTime) / (1 + reloadComposite);

    //     return reloadTime;
    // },
    // getBeamChargeTime(index,baseChargeTime,weaponRef) {
    //     const chargeComposite = calcs.clamp(index.BeamChargeSpeed + index.BeamChargeSpeedCORE,-0.30,10);
    //     //positive numbers are speed boosts, negative is bad. A reload time divided by a larger number makes it smaller, but a smaller number makes it bigger, etc.

    //     return baseChargeTime / (1 + chargeComposite);
    // },
    // getBeamChargeRifleBonuses(index,returnObject,isCycleCalcs,nameOverride,weaponRef) {
    //     let bonusArray = [];

    //     if (weaponRef.ChargeLevelData) {
    //         let dataReference = weaponRef.ChargeLevelData;

    //         const level1Charge = calcs.getBeamChargeTime(index,dataReference[1].ChargeAmount,weaponRef);
    //         const level2Charge = calcs.getBeamChargeTime(index,dataReference[2].ChargeAmount,weaponRef) + level1Charge;

    //         const level1Multi = dataReference[2].DamageMultiplier - 1;
    //         const level2Multi = dataReference[3].DamageMultiplier - 1 - level1Multi;

    //         bonusArray = [
    //             {
    //                 "stats": [
    //                    {"name": "WeaponUniqueMultiplierCORE","value": level1Multi,"subStackValue": null},
    //                 ],
    //                 "bonusName": "Beam Rifle Charge (LvL 1)",
    //                 "oneTimeOrStack": "stack",
    //                 "clearOnReload": true,
    //                 "limit": 1,
    //                 "currentStacks": 0,
    //                 "timePassedEntry": 0,
    //                 "clearOnReload": true,
    //                 "cooldown": level1Charge,
    //             },
    //             {
    //                 "stats": [
    //                    {"name": "WeaponUniqueMultiplierCORE","value": level2Multi,"subStackValue": null},
    //                 ],
    //                 "bonusName": "Beam Rifle Charge (LvL 2)",
    //                 "oneTimeOrStack": "stack",
    //                 "clearOnReload": true,
    //                 "limit": 1,
    //                 "currentStacks": 0,
    //                 "timePassedEntry": 0,
    //                 "clearOnReload": true,
    //                 "cooldown": level2Charge,
    //             },
    //         ]
    //     }
    //     else {
    //         bonusArray = [];
    //     }
        
    //     return bonusArray;
    // },
    // getFirearmATK(index,weaponRef,uniqueMulti) {
    //     const baseFirearmATK = weaponRef.baseATK;
    //     const needlessBullshitAmount = baseFirearmATK * (index.independentScalar + index.independentScalarCORE);
    //     uniqueMulti = uniqueMulti || 1;
    //     uniqueMulti += index.WeaponUniqueMultiplier + index.WeaponUniqueMultiplierCORE;


    //     // let typeRef = weaponRef.weaponType;
    //     const attackPercent = index["FirearmATK%"] + index["FirearmATK%CORE"];
    //     // + (typeRef==="Handgun" ? index["HandgunATK%"] : 0)
    //     // + (typeRef==="Hand Cannon" ? index["HandCannonATK%"] : 0)
    //     // + (typeRef==="Shotgun" ? index["ShotgunATK%"] : 0);
    //     const onHitBonus = index["FirearmATK%OnHit"] + index["FirearmATK%OnHitCORE"];//while called onhit it's more of an enemy debuff
    //     const weaknessCheck = globalRecords.useFirearmPhysical ? globalRecords.boss.currentBossPartType === weaponRef.physicalType : false;

    //     const colossusCheck = globalRecords.boss.enemyType === "Colossus";
    //     const baseAdvantage = 1 + weaponRef.physicalTypeBonus + (colossusCheck ? 0.10 : 0);
    //     const bonusAdvantage = index.TypeBonus + index.TypeBonusCORE;
    //     const endAdvantage = calcs.customTruncate((baseAdvantage * (1 + bonusAdvantage) + 0.00001),4);
    //     const physicalTypeBonus = endAdvantage-1;
    //     const physicalTypeMulti = weaknessCheck ? endAdvantage : 1;

    //     const colossusFactionSum = (index["ColossusATK"] + index["ColossusATKCORE"]) * (1 + index["ColossusATK%"] + index["ColossusATK%CORE"]);
    //     const vulgusFactionSum = (index["VulgusATK"] + index["VulgusATKCORE"]) * (1 + index["VulgusATK%"] + index["VulgusATK%CORE"]);
    //     const firearmColossusATK = weaponRef.baseATK === 0 ? 0 : colossusCheck ? colossusFactionSum : vulgusFactionSum;

    //     //TODO: check later if the new inversion bonuses have a %element conversion again, and if they do, check if they work with mental focus or not
    //     //if not, I need to add a return stat for basically a conversionBase 2 that will not inherit atk from special effects
    //     //on top of that, I'd need to add a new stat on the table for firearmATK that isn't onhit but isn't reg% either, again.
    //     const firearmAttributeConversionBase = baseFirearmATK * (1 + attackPercent);//firearm attribute dmg can't benefit from faction attack or type bonuses or the zenithMultiplier
    //     const postHitATK = (firearmAttributeConversionBase + (baseFirearmATK * onHitBonus)) * uniqueMulti;
    //     const totalFirearmATK = (postHitATK + firearmColossusATK) * physicalTypeMulti + needlessBullshitAmount;

    //     return {baseFirearmATK,attackPercent,physicalTypeBonus,physicalTypeMulti,firearmColossusATK,firearmAttributeConversionBase,totalFirearmATK}
    // },
    // getFirearmMultishot(index,weaponRef) {
    //     baseMultiShotDMG = weaponRef.baseMultiShotDMG;
    //     baseMultiShotChance = 0;

    //     //base bonuses
    //     baseMultiShotDMGBonus = index.MultiShotDamageBASE + index.MultiShotDamageBASECORE;
    //     baseMultiShotChanceBonus = index.MultiShotChanceBASE + index.MultiShotChanceBASECORE;

    //     //%bonuses if we even have them
    //     percentMultiShotDMGBonus = index.MultiShotDamage + index.MultiShotDamageCORE;
    //     percentMultiShotChance = index.MultiShotChance + index.MultiShotChanceCORE;

    //     let totalFirearmMultishotMulti = Math.min(10,(baseMultiShotDMG + baseMultiShotDMGBonus) * (1 + percentMultiShotDMGBonus));

    //     let totalFirearmMultishotChance = Math.min(4,(baseMultiShotChance + baseMultiShotChanceBonus) * (1 + percentMultiShotChance));

    //     let avgMultishotBonus = totalFirearmMultishotMulti * totalFirearmMultishotChance;

    //     return {
    //         baseMultiShotDMG,totalFirearmMultishotChance,totalFirearmMultishotMulti,avgMultishotBonus
    //     }
    // },
    // getFirearmWeakpoint(index,weaponRef) {
    //     const baseWPMulti = weaponRef.baseWeakPoint;
    //     const flatWPBonus = index.BaseWeakPointBonus + index.BaseWeakPointBonusCORE;
    //     const weakpointBonus = index["WeakPointDamage%"] + index["WeakPointDamage%CORE"];

    //     const bossPartWPBonus = globalRecords.boss.currentBossPartWP;

    //     //some mods like lethal finish can lock the weak point modifier to a value, in this case 1x, but those still include the boss part bonus
    //     const totalWPBonus = index.WeakPointOverride ? 1 + bossPartWPBonus : calcs.customTruncate((globalRecords.useWeakspots && bossPartWPBonus != 0 ? (baseWPMulti + flatWPBonus) * (1 + weakpointBonus) + bossPartWPBonus : 1) + 0.00001,4);

    //     const wpHitRate = globalRecords.weakPointHitRate/100;
    //     const wpAveraged = 1 + (wpHitRate * Math.max(0,totalWPBonus-1));

    //     return {baseWPMulti,flatWPBonus,weakpointBonus,bossPartWPBonus,totalWPBonus,wpHitRate,wpAveraged}
    // },
    // getFirearmCrit(index,weaponRef) {
    //     const baseFirearmCritRate = weaponRef.baseCritRate;
    //     const baseFirearmCritDamage = weaponRef.baseCritDamage;

    //     const baseFirearmCritRateBonus = index.FirearmCritRateBase + index.FirearmCritRateBaseCORE;
    //     const baseFirearmCritDamageBonus = index.FirearmCritDamageBase + index.FirearmCritDamageBaseCORE;

    //     const firearmCritRateBonus = index.FirearmCritRate + index.FirearmCritRateCORE;
    //     const firearmCritDamageBonus = index.FirearmCritDamage + index.FirearmCritDamageCORE;

    //     const totalFirearmCritRatePreCap = (baseFirearmCritRate + baseFirearmCritRateBonus) * (1 + firearmCritRateBonus);
    //     const totalFirearmCritRatePreResist = Math.max(0,Math.min(totalFirearmCritRatePreCap,1));
    //     const enemyFirearmCritResist = (+globalRecords.weaponCritCeiling/100) * (1 + index.enemyCritResistReductionFirearm)
    //     const totalFirearmCritRate = globalRecords.useCrits ? totalFirearmCritRatePreResist * (1 + enemyFirearmCritResist) : 0;

    //     const totalFirearmCritDamage = Math.max(1,(baseFirearmCritDamage + baseFirearmCritDamageBonus) * (1 + firearmCritDamageBonus));

    //     return {baseFirearmCritRate,baseFirearmCritDamage,baseFirearmCritRateBonus,baseFirearmCritDamageBonus,firearmCritRateBonus,firearmCritDamageBonus,totalFirearmCritRatePreResist,enemyFirearmCritResist,totalFirearmCritRate,totalFirearmCritDamage}
    // },
    // getFirearmElementalSpread(index,elementName,usableBase,critFirearm,wpAveraged,usableBase2) {
    //     const elemDR = calcs.getResistanceBasedDR(index,elementName) || 1;
    //     const givenElementBase = usableBase * (index[`${elementName}ATK%`] + index[`${elementName}ATK%CORE`]) + index[`${elementName}ATK`] + index[`${elementName}ATKCORE`];
    //     const needlessBullshitAmount = givenElementBase * (index.independentScalar + index.independentScalarCORE);
    //     const damageElementBase = (givenElementBase * Math.max(0,1 + index[`${elementName}ATK%Bonus`] + index[`${elementName}ATK%BonusCORE`]) + needlessBullshitAmount) * elemDR;

    //     //TODO: see note under getFirearmATK, usableBase2 will be used to handle conversion amounts using a specific ATK% that is neither normal nor onHit enemy debuffs.

    //     const perHit = damageElementBase * wpAveraged;
    //     const perCrit = perHit * critFirearm.Damage;
    //     const AVG = perHit * critFirearm.Composite;

    //     return {perHit,perCrit,AVG}
    // },
    // getActiveFirearmAttributesArrays(index,preElementDamage,critFirearm,wpAveraged) {
    //     let activeElements = [];
    //     let activeElementsDamage = [];

    //     if (index["ChillATK%"] || index["ChillATK"] || index["ChillATK%CORE"] || index["ChillATKCORE"]) {activeElements.push("Chill");}
    //     if (index["ElectricATK%"] || index["ElectricATK"] || index["ElectricATK%CORE"] || index["ElectricATKCORE"]) {activeElements.push("Electric");}
    //     if (index["ToxicATK%"] || index["ToxicATK"] || index["ToxicATK%CORE"] || index["ToxicATKCORE"]) {activeElements.push("Toxic");}
    //     if (index["FireATK%"] || index["FireATK"] || index["FireATK%CORE"] || index["FireATKCORE"]) {activeElements.push("Fire");}
    //     if (!activeElements.length) {
    //         activeElements.push("None");
    //         activeElementsDamage.push(0);
    //     }
    //     else {
    //         for (let entry of activeElements) {
    //             const damageSubAttribute = calcs.getFirearmElementalSpread(index,entry,preElementDamage,critFirearm,wpAveraged)
    //             activeElementsDamage.push(damageSubAttribute.perHit);
    //         }
    //     }

    //     return {activeElements,activeElementsDamage}
    // },
}