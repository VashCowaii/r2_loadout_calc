let calcs = {
    dodgeClasses: [
        {threshold:75,class:"Flop",penalty:0.75},
        {threshold:50,class:"Heavy",penalty:0.5},
        {threshold:25,class:"Medium",penalty:0.25}
    ],
    getHealth(index) {
        let totalBaseHealth = 100 + index.Health;
        let percentHealthMulti = 1 + index["Health%"];
        let globalCap = index.GlobalHealthModifier;
        let healthCap = index.HealthCap;
        let healthComposite = totalBaseHealth * percentHealthMulti * globalCap;
        let totalHealth = healthComposite * healthCap; 
        let totalHealthNoGlobal = healthComposite;

        return {totalHealth,totalHealthNoGlobal,totalBaseHealth,percentHealthMulti,healthCap,globalCap}
    },
    getStamina(index) {
        return (100 + index.Stamina) * (1 + index["Stamina%"]);
    },
    getArmor(index) {
        let baseArmor = index.Armor;
        let armorEff = 1 + index["Armor%"];
        let totalArmor = baseArmor * armorEff;

        return {baseArmor,armorEff,totalArmor}
    },
    getWeight(index) {
        let baseWeight = index.Encumbrance;
        //Stuff that reduces weight can technically put us negative. We need the negative for armor pings, but not for displays
        let adjustedBaseWeight = Math.max(0,baseWeight);
        let weightBoost = 1 + index["Encumbrance%"];
        let totalWeight = adjustedBaseWeight * weightBoost;//.toFixed(2);
        let weightThreshold = index.WeightThreshold;//.toFixed(2);

        let dodgeClass = "Light";
        let staminaPenalty = 0;
        let dodgeClasses = calcs.dodgeClasses;

        for (let i=0;i<dodgeClasses.length;i++) {
            if (totalWeight>dodgeClasses[i].threshold + weightThreshold) {
                dodgeClass = dodgeClasses[i].class;
                staminaPenalty = dodgeClasses[i].penalty;
                break;
            }
        }

        return {totalWeight,dodgeClass,staminaPenalty,baseWeight,weightBoost,weightThreshold}
    },
    getDR(index,totalArmor) {
        //Armor DR
        let armorDR = totalArmor/(totalArmor+200);
        //Flat DR
        let bulwarkStacks = Math.min(index.BulwarkCap,index.Bulwark);
        let bulwarkDR = -.005*(bulwarkStacks**2) + .075*bulwarkStacks;
        let otherFlat = index.FlatDR;
        let totalFlat = bulwarkDR+otherFlat;
        //Total DR
        let totalDR = 1-(1-armorDR)*(1-totalFlat);

        return {armorDR,bulwarkStacks,bulwarkDR,otherFlat,totalFlat,totalDR}
    },
    getHealing(index) {
        //this is for shit like game master's pride, it's a global multi modifier
        let globalHealingMod = index.GlobalHealingEff;
        //BOOSTS---
        let healingEffectiveness = index.HealingEFF;
        let compositeModifier = (1+healingEffectiveness) * globalHealingMod;
        //REGENERATION---
        let flatHPperSec = index["HP/S+"] * compositeModifier;
        let percHPperSec = index["HP/S%"] * compositeModifier;

        //GREY HEALTH
        let totalGreyHPperSec = 0.2 + index["GreyHP/S+"];
        let greyConversionRate = 0.5 * (1 + index.GreyHealthConversion);
        let greyHitThreshold = index.GreyHPHitThreshold;

        return {globalHealingMod,healingEffectiveness,flatHPperSec,percHPperSec,totalGreyHPperSec,greyConversionRate,greyHitThreshold,};
    },
    getLifesteal(index,relicEffectiveness) {
        let lifestealEFF = index.LifestealEFF;
        let lifestealEffResult = (1 + lifestealEFF);
        let relicLifesteal = index.RelicLifesteal * (1 + (relicEffectiveness || 0));
        let lifestealALL = (index.Lifesteal + relicLifesteal) * lifestealEffResult;
        let lifestealMelee = index.MLifesteal * lifestealEffResult;
        let lifestealMeleeCharged = index.MChargedLifesteal * lifestealEffResult;
        let lifestealRange = index.RLifesteal * lifestealEffResult;
        let peakLifesteal = 0;

        if (index.thisIsAQuery) {
            let newLifestealAll = lifestealALL;
            let newLifestealMelee = lifestealALL + lifestealMelee;
            let newLifestealMeleeCharged = newLifestealMelee + lifestealMeleeCharged;
            let newLifestealRanged = lifestealALL + lifestealRange;
            peakLifesteal = Math.max(newLifestealAll, newLifestealMelee, newLifestealMeleeCharged, newLifestealRanged);
        }
    
        return {lifestealEFF,lifestealALL,lifestealMelee,lifestealMeleeCharged,lifestealRange,peakLifesteal}
    },
    getStaminaValues(index,staminaPenalty) {
        //STAMINA
        let regenMulti = index["Stamina/S+Multi"] ? index["Stamina/S+Multi"] : 1;
        let staminaPerSec = (33 + index["Stamina/S+"]) * regenMulti;

        let staminaPenaltyAdjustment = Math.max(0,index.StaminaPenaltyAdjustment);
        let adjustedPenalty = (staminaPenalty * (1-staminaPenaltyAdjustment));

        let staminaCost = index.StaminaCost + adjustedPenalty;
        //If something like bisected it on, or if we go under 0% costs, turn off stamina costs.
        if (index.StaminaNegation > 0 || staminaCost < 0) {staminaCost = 0}

        let evadeCost = Math.max(0,1-index.EvadeCost);
        let meleeCost = Math.max(0,1-index.ChargeCost);

        let baseEvadeCost = index.EvadeBaseCost;
        let evadePrice = baseEvadeCost * evadeCost * staminaCost;

        return {
            staminaPerSec,
            staminaCost,
            adjustedPenalty,
            evadeCost,
            meleeCost,
            evadePrice
        };
        // return [staminaPerSec,staminaCost,adjustedPenalty,evadeCost,meleeCost,evadePrice]
    },
    getRelicHealing(tieredFunctionStorage,index,totalHealth,globalHealingMod,healingEffectiveness) {
        //RELIC HEALING
        //We're taking noGlobal on total health as that is the value that persists with shit like Restriction Cord.
        let relicHPbase = index.RelicHPbase * globalHealingMod;
        let relicHPtype = index.RelicHPtype;
        let relicHPtime = index.RelicHPtime;
        let relicUseTime = index.RelicSpeed;
        let relicEffectiveness = index.RelicEFF;
        let chargeOverride = index.RelicChargesOverride;
        let relicCharges = Math.floor(chargeOverride ? chargeOverride : (10 + index.RelicCharges) * index["RelicCharges%"]);//can't have 0 charges, yet at least.
        let relicChance = Math.max(0,index.RelicUseChance);//cannot be less than 0 and refund you

        let relicHPscaled = relicHPbase * (1+relicEffectiveness) * (1+healingEffectiveness);

        let relicPercPerSecond,relicFlatPerSecond;
        globalRecords.relicComplexArray = null;//Need to clear the complex array in case it persists

        let perSecComposite = relicHPscaled/relicHPtime;
        switch (relicHPtype) {
            case "%":
                relicPercPerSecond = perSecComposite;relicFlatPerSecond = (perSecComposite/100)*totalHealth;break;
            case "P":
                relicPercPerSecond = null;relicFlatPerSecond = perSecComposite;break;
            case "F":
                relicPercPerSecond = null;relicFlatPerSecond = perSecComposite;break;
            default:
                relicHPscaled = 0;relicHPtime = 0;
                relicPercPerSecond = null;relicFlatPerSecond = null;
                break;
        }

        if (index.thisIsAQuery) {
            if (tieredFunctionStorage.customRelicFunctions) {relicComplexArray = formulasValues.callStoredFunctions(tieredFunctionStorage,"customRelicFunctions",index,[relicHPscaled,totalHealth]);}//resonating heart, stuff like that
        }
        else {
            let toggleCheck = readSelection(`USEtoggledRelic`).checked;
            readSelection("relicComplexEffect").innerHTML = "";
            if (!toggleCheck) {
                relicComplexArray = formulasValues.callStoredFunctions(tieredFunctionStorage,"customRelicFunctions",index,[relicHPscaled,totalHealth]);
            }
        }

        return {relicHPbase,relicHPtype,relicHPtime,relicHPscaled,relicPercPerSecond,relicFlatPerSecond,relicComplexArray:globalRecords.relicComplexArray,relicUseTime,relicEffectiveness,relicCharges,relicChance}
    },
    getAdvancedDR(index,totalDR,totalHealth,totalHealthNoGlobal) {
        let INITIALreducedEnemyDamage = index.REdamage - 1;//REDUCED ENEMY DAMAGE
        let INITIALdamageKept = index.DMGKept - 1;//DAMAGE KEPT OR RETAINED(how much gets shared to allies via various sources)

        let reducedEnemyDamage = INITIALreducedEnemyDamage;//Save the current values to be used in the return values, not the mitigation sum math
        let damageKept = INITIALdamageKept;
        if (!globalRecords.useREdamage){INITIALreducedEnemyDamage=1} else {INITIALreducedEnemyDamage += 1;}//Modify the original values to give proper amounts to bonus mitigation and EHP after.
        if (!globalRecords.useDMGKept){INITIALdamageKept=1} else {INITIALdamageKept += 1;}
        let totalBonusMitigation = (INITIALdamageKept*INITIALreducedEnemyDamage)-1;//TOTAL BONUS TO EFFECTIVE DR, BASED ON REDMG AND DMGKEPT
        totalDR = Math.min(0.80,totalDR);//TOTAL EFFECTIVE DAMAGE REDUCTION INCLUDING REDMG AND DMGKEPT
        let effectiveDR = 1-(1-totalDR)*(1+totalBonusMitigation);
        //----------BASE EHP----------------------------------------------------------------------------
        let baseEHP = totalHealth/(1-effectiveDR);//For general EHP math
        //For shields EHP math, when restriction cord exists
        //This exists for and is used solely by shields and healing. Restriction Cord stops you from HEALING past 50%, it does not actually reduce MAX by 50%.
        let baseEHPforShieldsAndHealing = totalHealthNoGlobal/(1-effectiveDR);

        return {reducedEnemyDamage,damageKept,totalBonusMitigation,effectiveDR,baseEHP,baseEHPforShieldsAndHealing}
    },
    getShields(index,baseEHP) {
        //----------SHIELDS----------------------------------------------------------------------------
        let percShields = index.Shield;
        let shieldEff = index.ShieldEFF;
        let totalPercShields = Math.min(index.ShieldCap, percShields * (1+shieldEff));
        //noGlobal on HP here, as stuff like restriction cord does not reduce max hp, it only prevents you from HEALING past 50%
        let shieldEHP = baseEHP * totalPercShields;

        return {percShields,shieldEff,totalPercShields,shieldEHP}
    },
    getEHP(shieldEHP,baseEHP) {
        shieldEHP = globalRecords.useShields ? shieldEHP : 0;
        let totalEHP = baseEHP + shieldEHP;

        return totalEHP;
    },
    getAdvancedHealing(baseEHP,regHealing,totalHealthNoGlobal) {
        let advancedRelicFlat,advancedRelicPerc;
        const {flatHPperSec,percHPperSec,relicHPtype,relicHPtime,relicHPscaled,useComplexValues,relicComplexArray} = regHealing;

        if (useComplexValues===true) {advancedRelicPerc = relicComplexArray[0];advancedRelicFlat = 0;}
        else {
            switch (relicHPtype) {
                case "%":advancedRelicPerc = relicHPscaled/relicHPtime;advancedRelicFlat = 0;break;
                case "P":advancedRelicPerc = 0;advancedRelicFlat = relicHPscaled/relicHPtime;break;
                case "F":advancedRelicPerc = 0;advancedRelicFlat = relicHPscaled/relicHPtime;break;
                default:advancedRelicPerc = 0;advancedRelicFlat = 0;break;//If there is no healing type(unique relic like Shielded Heart)
            }
        }

        let advancedRelicTotalFlat = advancedRelicFlat + (advancedRelicPerc/100)*totalHealthNoGlobal;
        let advancedRelicTotalPerc = ((advancedRelicPerc/100) + advancedRelicFlat/totalHealthNoGlobal) * 100;

        let advancedTotalFlatHP = flatHPperSec + percHPperSec*totalHealthNoGlobal;
        let advancedTotalPercHP = (percHPperSec + flatHPperSec/totalHealthNoGlobal)*100;
        if (globalRecords.useRelicHealing) {advancedTotalFlatHP += advancedRelicTotalFlat;advancedTotalPercHP += advancedRelicTotalPerc;}

        let EHPpSec = baseEHP * (advancedTotalPercHP/100);

        return {advancedRelicFlat,advancedRelicPerc,advancedRelicTotalFlat,advancedRelicTotalPerc,advancedTotalFlatHP,advancedTotalPercHP,EHPpSec}
    },
    getHeavyAmmoRegenValues(index,cappedCDR,baseRegenRate,baseAmmoValue) {
        const percentRate = (baseRegenRate/cappedCDR) * index.HeavyAmmoRegenMulti;
        const totalAmmoValue = Math.ceil(baseAmmoValue * (1 + index.HeavyAmmoBaseMulti) * (1 + index.HeavyAmmo));
        const ammoPerSecond = (percentRate/100) * totalAmmoValue;
        const ammoPerSecondActive = index.HeavyAmmoActiveRegen ? ammoPerSecond * 0.75 : 0;
        return {percentRate,totalAmmoValue,ammoPerSecond,ammoPerSecondActive}
    }
}
let customDamage = {
    HavocForm(abilityPlacement,index) {
        let isCrit = globalRecords.enableCrits;
        let getIndexSums = conditionalHelpers.returnIndexTagSums;

        let abilityPath = classInfo.Archon.abilities["Havoc Form"];
        let customStats = abilityPath.customStats//path to havoc relevant stats
        const {statTags,duration,entryDuration,trueBaseDPS,baseDamage,frequency,drain} = customStats;
        //tags, duration of skill, duration of entry anim not changed by speed, base dps, base dmg - not dps, the rate at which we hit without speed, how much duration we lost per instance of outgoing dmg.

        const {Damage,CritChance,CritDamage,Speed} = statTags;
        let sumDamageBonuses = getIndexSums(index,Damage);
        let sumCritChance = getIndexSums(index,CritChance);
        let sumCritDamage = getIndexSums(index,CritDamage);
        let sumSpeedBonuses = getIndexSums(index,Speed);

        let baseCritDamage = 0.5;
        let totalDamageBonus = 1 + sumDamageBonuses;
        let totalSpeedBonus = 1 + sumSpeedBonuses;
        let totalCritDamageBonus = sumCritDamage;
        let finalCritDamage = baseCritDamage + totalCritDamageBonus;
        let totalCritChance = Math.min(1,sumCritChance);//cap crit chance at 100%
        let avgCritDamage = 1 + (isCrit ? finalCritDamage * totalCritChance : 0);

        let adjustedBaseDmg = baseDamage * totalDamageBonus;

        let modifiedDuration = (duration * (1 + index.SkillDuration)) - entryDuration;//The duration left after entry animation, before the drain starts
        let effectiveDrainRate = (frequency/totalSpeedBonus) + drain;//The total drain per instance of damage, including time passed between instances
        let totalHits = Math.floor(modifiedDuration/effectiveDrainRate);//total hits possible when firing constantly.
        let trueDuration = modifiedDuration - (totalHits * drain);//The actual amount of time the skill lasts, when constantly fired, not including entry duration

        let minimumPossibleDamage = adjustedBaseDmg;
        let maximumPossibleDamage = adjustedBaseDmg * (1 + finalCritDamage);

        let trueDPS = trueBaseDPS * totalSpeedBonus * totalDamageBonus * avgCritDamage;
        let trueTotalDamage = adjustedBaseDmg * totalHits * avgCritDamage;

        if (!index.thisIsAQuery) {
            let breakdownDomID = `ability${abilityPlacement}BreakdownTab`;
            let factorID = `ability${abilityPlacement}Factors`;
            let addRow = createHTML.basicsRow;

            readSelection("damageBreakdownSelectorHolder").innerHTML += createHTML.damageBreakdownSelectorButton(abilityPath.name,abilityPath.image,breakdownDomID);
            let breakdownInfoUI = {factorID,"image": abilityPath.image,"name": abilityPath.name,"dps": trueDPS,"totalDMG": trueTotalDamage};
            readSelection(breakdownDomID).innerHTML = createHTML.generalAbilityBreakdownBox(breakdownInfoUI);
            readSelection("havocFormBoxHolder").style.display = "flex"

            readSelection(factorID).innerHTML = "";
            let drRowsHTML = "<div class='basicsDRheaderTitle'>DURATION FACTORS</div>";
            drRowsHTML += (modifiedDuration + entryDuration) ? addRow("","Duration",(modifiedDuration + entryDuration),false) : "";
            drRowsHTML += entryDuration ? addRow("","Entry Duration",entryDuration.toFixed(2),false) : "";
            drRowsHTML += modifiedDuration ? addRow("","Usable Duration",modifiedDuration.toFixed(2),false) : "";
            drRowsHTML += trueDuration ? addRow("","True Duration",trueDuration.toFixed(2),false) : "";

            drRowsHTML += conditionalHelpers.addBreakdownSpeedRows(index,Speed,totalHits);
            drRowsHTML += conditionalHelpers.addBreakdownDamageRows(index,Damage);
            drRowsHTML += conditionalHelpers.addBreakdownStatusRows(index);
            drRowsHTML += conditionalHelpers.addBreakdownCritRows(index,CritChance,CritDamage,true);

            drRowsHTML = userTrigger.updateSubstatColor(drRowsHTML);
            readSelection(factorID).innerHTML += drRowsHTML;
        }

        return ["Havoc Form",minimumPossibleDamage,maximumPossibleDamage,trueDPS,trueTotalDamage]
    },
    FlamethrowerCarry(abilityPlacement,index) {
        let isCrit = globalRecords.enableCrits;
        let isWeakspot = globalRecords.enableWeakspots && !index.WeakspotDisable;
        let getIndexSums = conditionalHelpers.returnIndexTagSums;

        let abilityPath = classInfo.Engineer.abilities["Heavy Weapon: Flamethrower"];
        let customStats = abilityPath.customStats;
        const {statTags,statTagsDOT,fireRate,fireRateTurret,baseDamage,baseDamageTurretBase,baseWeakspot,frequencyDOT,baseDamageDOT,durationDOT,turretAmmoCostMulti} = customStats;
        const costMulti = globalRecords.enableEngTurretModes ? turretAmmoCostMulti : 1;

        

        const cappedCDR = Math.max(0.2,1 + index.CDR);
        const {percentRate,totalAmmoValue,ammoPerSecond,ammoPerSecondActive} = calcs.getHeavyAmmoRegenValues(index,cappedCDR,abilityPath.regenRate,abilityPath.baseEnergy);
        // const actualTotalAmmo = globalRecords.enableEngTurretModes ? totalAmmoValue/turretAmmoCostMulti : totalAmmoValue;
        const actualFireRate = globalRecords.enableEngTurretModes ? fireRateTurret : fireRate;
        const actualBaseDamage = globalRecords.enableEngTurretModes ? baseDamageTurretBase : baseDamage;
        const effectiveDrainRate = ammoPerSecondActive - (actualFireRate * costMulti);
        let drainState = false;
        if (effectiveDrainRate >= 0) {drainState = false;}
        else {drainState = true;}

        let effectiveDuration = 0;
        if (drainState) {effectiveDuration = totalAmmoValue / (-effectiveDrainRate);}
        else {effectiveDuration = Infinity;}
        let statusDuration = durationDOT * index.StatusDuration;
        let trueDurationDOT = effectiveDuration + statusDuration;
        let totalHitsDOT = Math.floor(trueDurationDOT/frequencyDOT);

        const DamageDOT = statTagsDOT.Damage;
        let sumDotDamageBonuses = 1 + getIndexSums(index,DamageDOT);
        const adjustedBaseDmgDOT = baseDamageDOT * sumDotDamageBonuses;

        let trueTotalDamageDOT = adjustedBaseDmgDOT * totalHitsDOT;
        let trueDPSDOT = trueTotalDamageDOT/trueDurationDOT;

        const {Damage,CritChance,CritDamage,WeakSpot,Speed} = statTags;
        let sumDamageBonuses = getIndexSums(index,Damage);
        let sumCritChance = getIndexSums(index,CritChance);
        let sumCritDamage = getIndexSums(index,CritDamage);
        let sumWeakspot = getIndexSums(index,WeakSpot);

        let baseCritDamage = 0.5;
        let totalDamageBonus = 1 + sumDamageBonuses;
        let finalCritDamage = baseCritDamage + sumCritDamage;
        let totalCritChance = Math.min(1,sumCritChance);//cap crit chance at 100%
        let avgCritDamage = 1 + (isCrit ? finalCritDamage * totalCritChance : 0);

        let attackWeakspot = isWeakspot && sumWeakspot != -1 ? 1 + baseWeakspot + sumWeakspot : 1;

        let adjustedBaseDmg = actualBaseDamage * totalDamageBonus * attackWeakspot;

        // let trueDuration = (duration * (1 + index.SkillDuration)) + effectDuration;//DRENCHED can't be modified by duration bonuses, but obv the total duration is the modified base duration + drenched's duration
        let totalHits = Math.floor(effectiveDuration*actualFireRate);//total hits possible within drenched's full effective duration.

        let minimumPossibleDamage = adjustedBaseDmg;
        let maximumPossibleDamage = adjustedBaseDmg * (1 + finalCritDamage);

        let trueTotalDamage = adjustedBaseDmg * totalHits * avgCritDamage;
        let trueDPS = actualFireRate * adjustedBaseDmg * avgCritDamage;

        const sumDPS = trueDPS + trueDPSDOT;
        const sumTotalDamage = trueTotalDamage + trueTotalDamageDOT;
        const sumAvgDPS = sumTotalDamage/trueDurationDOT

        

        if (!index.thisIsAQuery) {
            let breakdownDomID = `ability${abilityPlacement}BreakdownTab`;
            let factorID = `ability${abilityPlacement}Factors`;
            let addRow = createHTML.basicsRow;

            readSelection("damageBreakdownSelectorHolder").innerHTML += createHTML.damageBreakdownSelectorButton(abilityPath.name,abilityPath.image,breakdownDomID);
            let breakdownInfoUI = {factorID,"image": abilityPath.image,"name": abilityPath.name,"dps": sumAvgDPS,"totalDMG": sumTotalDamage};
            readSelection(breakdownDomID).innerHTML = createHTML.generalAbilityBreakdownBox(breakdownInfoUI);
            readSelection("havocFormBoxHolder").style.display = "flex"

            readSelection(factorID).innerHTML = "";
            let drRowsHTML = "";
            drRowsHTML += `
            <div class='dpsFactorDisclaimer'>Toggle "Use Turret Mode" to see stats in turret mode. Otherwise this will always use Carry mode.</div><br>`;

            drRowsHTML += `
            <div class='dpsFactorDisclaimer'><span>"Full"</span> DPS is the DPS while the heavy weapon is still active and has ammo. <span>Total</span> DPS is averaged over the full duration including the status duration after the ammo has run out.</div>
            <div class="totalHealingBox">
                <div class="totalHealingBoxHalf">
                    <div class="totalHealingHeader hasHoverTooltip" id="">Heavy DPS</div>
                    <div class="totalHealingValue" style="border-bottom: none;">${(+(trueDPS).toFixed(2)).toLocaleString()}</div>
                </div>
                <div class="totalHealingBoxHalf">
                    <div class="totalHealingHeader hasHoverTooltip" id="">DoT DPS</div>
                    <div class="totalHealingValue" style="border-bottom: none;">${(+(trueDPSDOT).toFixed(2)).toLocaleString()}</div>
                </div>
                <div class="totalHealingBoxHalf">
                    <div class="totalHealingHeader hasHoverTooltip" id="">FULL DPS</div>
                    <div class="totalHealingValue" style="border-bottom: none;">${(+(sumDPS).toFixed(2)).toLocaleString()}</div>
                </div>
            </div>
            <br>`;
            
            drRowsHTML += `
            <div class="totalHealingBox">
                <div class="totalHealingBoxHalf">
                    <div class="totalHealingHeader hasHoverTooltip" id="">Total Hits</div>
                    <div class="totalHealingValue" style="border-bottom: none;">${(+(totalHits).toFixed(2)).toLocaleString()}</div>
                </div>
                <div class="totalHealingBoxHalf">
                    <div class="totalHealingHeader hasHoverTooltip" id="">DMG/Strike</div>
                    <div class="totalHealingValue" style="border-bottom: none;">${(+(minimumPossibleDamage).toFixed(2)).toLocaleString()}</div>
                </div>
                <div class="totalHealingBoxHalf">
                    <div class="totalHealingHeader hasHoverTooltip" id="">Crit Strike</div>
                    <div class="totalHealingValue" style="border-bottom: none;">${(+(maximumPossibleDamage).toFixed(2)).toLocaleString()}</div>
                </div>
            </div>
            <br>`;
            drRowsHTML += `
            <div class="totalHealingBox">
                <div class="totalHealingBoxHalf">
                    <div class="totalHealingHeader hasHoverTooltip" id="">DoT Hits</div>
                    <div class="totalHealingValue" style="border-bottom: none;">${(+(totalHitsDOT).toFixed(2)).toLocaleString()}</div>
                </div>
                <div class="totalHealingBoxHalf">
                    <div class="totalHealingHeader hasHoverTooltip" id="">DMG/Tick</div>
                    <div class="totalHealingValue" style="border-bottom: none;">${(+(adjustedBaseDmgDOT).toFixed(2)).toLocaleString()}</div>
                </div>
                <div class="totalHealingBoxHalf">
                    <div class="totalHealingHeader hasHoverTooltip" id="">Total DoT</div>
                    <div class="totalHealingValue" style="border-bottom: none;">${(+(trueTotalDamageDOT).toFixed(2)).toLocaleString()}</div>
                </div>
            </div>
            <br>`;
            drRowsHTML += `
            <div class="totalHealingBox">
                <div class="totalHealingBoxHalf">
                    <div class="totalHealingHeader hasHoverTooltip" id="">Ammo/s</div>
                    <div class="totalHealingValue" style="border-bottom: none;">-${(actualFireRate * costMulti).toFixed(2)}/+${(+(ammoPerSecondActive).toFixed(2)).toLocaleString()}</div>
                </div>
                <div class="totalHealingBoxHalf">
                    <div class="totalHealingHeader hasHoverTooltip" id="">CDR</div>
                    <div class="totalHealingValue" style="border-bottom: none;">${(+((cappedCDR-1)*100).toFixed(2)).toLocaleString()}%</div>
                </div>
                <div class="totalHealingBoxHalf">
                    <div class="totalHealingHeader hasHoverTooltip" id="">Eff. Duration</div>
                    <div class="totalHealingValue" style="border-bottom: none;">${(+(effectiveDuration).toFixed(2)).toLocaleString()}s</div>
                </div>
            </div>
            `;

            let newDamageTags = [...new Set([...Damage,...DamageDOT])];

            drRowsHTML += "<div class='basicsDRheaderTitle'>DURATION FACTORS</div>";
            drRowsHTML += durationDOT ? addRow("","DoT Duration",durationDOT.toFixed(2),false) : "";
            drRowsHTML += index.StatusDuration-1 ? addRow("","Status&nbsp;Duration Bonus",(index.StatusDuration-1).toFixed(2),true,"%") : "";
            drRowsHTML += durationDOT*index.StatusDuration != durationDOT ? addRow("","Actual&nbsp;Status&nbsp;Duration",(durationDOT*index.StatusDuration).toFixed(2)) : "";

            drRowsHTML += conditionalHelpers.addBreakdownSpeedRows(index,Speed,totalHits);
            drRowsHTML += conditionalHelpers.addBreakdownDamageRows(index,newDamageTags);
            drRowsHTML += conditionalHelpers.addBreakdownStatusRows(index);
            drRowsHTML += conditionalHelpers.addBreakdownCritRows(index,CritChance,CritDamage,true);
            drRowsHTML += conditionalHelpers.addBreakdownWeakspotRows(index,WeakSpot);

            drRowsHTML = userTrigger.updateSubstatColor(drRowsHTML);
            readSelection(factorID).innerHTML += drRowsHTML;
        }

        return ["Heavy Weapon: Flamethrower",minimumPossibleDamage,maximumPossibleDamage,trueDPS,trueTotalDamage]
    },
    ImpactCarry(abilityPlacement,index) {
        let isCrit = globalRecords.enableCrits;
        let isWeakspot = globalRecords.enableWeakspots && !index.WeakspotDisable;
        let getIndexSums = conditionalHelpers.returnIndexTagSums;

        let abilityPath = classInfo.Engineer.abilities["Heavy Weapon: Impact Cannon"];
        let customStats = abilityPath.customStats;
        const {statTags,statTagsAOE,fireRate,fireRateTurret,baseDamage,baseDamageAOE,baseDamageTurretBase,baseWeakspot} = customStats;

        const cappedCDR = Math.max(0.2,1 + index.CDR);
        const {percentRate,totalAmmoValue,ammoPerSecond,ammoPerSecondActive} = calcs.getHeavyAmmoRegenValues(index,cappedCDR,abilityPath.regenRate,abilityPath.baseEnergy);
        let minimumPossibleDamageAOE="",maximumPossibleDamageAOE="";
        let actualBaseDamage,actualFireRate;
        let includeExplosiveAOE = false;
        const {Damage,CritChance,CritDamage,WeakSpot,Speed} = statTags;

        let actualDamage = Damage;
        let actualCritChance = CritChance;
        let actualCritDamage = CritDamage;
        let actualWeakSpot = WeakSpot;


        if (globalRecords.enableEngTurretModes) {
            actualFireRate = fireRateTurret;
            actualBaseDamage = baseDamageTurretBase;

            actualDamage = statTagsAOE.Damage;
            actualCritChance = statTagsAOE.CritChance;
            actualCritDamage = statTagsAOE.CritDamage;
            actualWeakSpot = statTagsAOE.WeakSpot;
        }
        else {
            actualFireRate = fireRate;
            actualBaseDamage = baseDamage;
            includeExplosiveAOE = true;//if this is the carried firing mode, include the explosive AOE separate from the missile impact
        }


        const effectiveDrainRate = ammoPerSecondActive - actualFireRate;
        let drainState = false;
        if (effectiveDrainRate >= 0) {drainState = false;}
        else {drainState = true;}

        let effectiveDuration = 0;
        if (drainState) {effectiveDuration = totalAmmoValue / (-effectiveDrainRate);}
        else {effectiveDuration = Infinity;}

        let sumDamageBonuses = getIndexSums(index,actualDamage);
        let sumCritChance = getIndexSums(index,actualCritChance);
        let sumCritDamage = getIndexSums(index,actualCritDamage);
        let sumWeakspot = getIndexSums(index,actualWeakSpot);

        let baseCritDamage = 0.5;
        let totalDamageBonus = 1 + sumDamageBonuses;
        let finalCritDamage = baseCritDamage + sumCritDamage;
        let totalCritChance = Math.min(1,sumCritChance);//cap crit chance at 100%
        let avgCritDamage = 1 + (isCrit ? finalCritDamage * totalCritChance : 0);

        let attackWeakspot = isWeakspot && sumWeakspot != -1 ? 1 + baseWeakspot + sumWeakspot : 1;

        let adjustedBaseDmg = actualBaseDamage * totalDamageBonus * attackWeakspot;

        // let trueDuration = (duration * (1 + index.SkillDuration)) + effectDuration;//DRENCHED can't be modified by duration bonuses, but obv the total duration is the modified base duration + drenched's duration
        let totalHits = Math.floor(effectiveDuration*fireRate);//total hits possible within drenched's full effective duration.

        const minimumPossibleDamage = adjustedBaseDmg;
        const maximumPossibleDamage = adjustedBaseDmg * (1 + finalCritDamage);

        let trueTotalDamage = adjustedBaseDmg * totalHits * avgCritDamage;
        let trueDPS = fireRate * adjustedBaseDmg * avgCritDamage;

        if (includeExplosiveAOE) {
            let sumDamageBonusesAOE = getIndexSums(index,statTagsAOE.Damage);
            let sumCritChanceAOE = getIndexSums(index,statTagsAOE.CritChance);
            let sumCritDamageAOE = getIndexSums(index,statTagsAOE.CritDamage);

            let totalDamageBonusAOE = 1 + sumDamageBonusesAOE;
            let finalCritDamageAOE = baseCritDamage + sumCritDamageAOE;
            let totalCritChanceAOE = Math.min(1,sumCritChanceAOE);//cap crit chance at 100%
            let avgCritDamageAOE = 1 + (isCrit ? finalCritDamageAOE * totalCritChanceAOE : 0);
            let adjustedBaseDmgAOE = baseDamageAOE * totalDamageBonusAOE;

            minimumPossibleDamageAOE = adjustedBaseDmgAOE;
            maximumPossibleDamageAOE = adjustedBaseDmgAOE * (1 + finalCritDamageAOE);

            trueTotalDamage += adjustedBaseDmgAOE * totalHits * avgCritDamageAOE;
            trueDPS += fireRate * adjustedBaseDmgAOE * avgCritDamageAOE;
        }

        if (!index.thisIsAQuery) {
            let breakdownDomID = `ability${abilityPlacement}BreakdownTab`;
            let factorID = `ability${abilityPlacement}Factors`;
            let addRow = createHTML.basicsRow;

            minimumPossibleDamageAOE = minimumPossibleDamageAOE ? `/${(+(minimumPossibleDamageAOE).toFixed(2)).toLocaleString()}` : "";
            maximumPossibleDamageAOE = maximumPossibleDamageAOE ? `/${(+(maximumPossibleDamageAOE).toFixed(2)).toLocaleString()}` : "";

            readSelection("damageBreakdownSelectorHolder").innerHTML += createHTML.damageBreakdownSelectorButton(abilityPath.name,abilityPath.image,breakdownDomID);
            let breakdownInfoUI = {factorID,"image": abilityPath.image,"name": abilityPath.name,"dps": trueDPS,"totalDMG": trueTotalDamage};
            readSelection(breakdownDomID).innerHTML = createHTML.generalAbilityBreakdownBox(breakdownInfoUI);
            readSelection("havocFormBoxHolder").style.display = "flex"

            readSelection(factorID).innerHTML = "";
            let drRowsHTML = "";
            drRowsHTML += `
            <div class='dpsFactorDisclaimer'>When carried, the AOE is explosive but the hit-scan impact is not. When turreted, the entire attack is explosive.<br>AKA: Carried can weakspot, but only part of it.</div><br>
            `;
            
            drRowsHTML += `
            <div class="totalHealingBox">
                <div class="totalHealingBoxHalf">
                    <div class="totalHealingHeader hasHoverTooltip" id="">Total Hits</div>
                    <div class="totalHealingValue" style="border-bottom: none;">${(+(totalHits).toFixed(2)).toLocaleString()}</div>
                </div>
                <div class="totalHealingBoxHalf">
                    <div class="totalHealingHeader hasHoverTooltip" id="">DMG/Strike</div>
                    <div class="totalHealingValue" style="border-bottom: none;">${(+(minimumPossibleDamage).toFixed(2)).toLocaleString()}${minimumPossibleDamageAOE}</div>
                </div>
                <div class="totalHealingBoxHalf">
                    <div class="totalHealingHeader hasHoverTooltip" id="">Crit Strike</div>
                    <div class="totalHealingValue" style="border-bottom: none;">${(+(maximumPossibleDamage).toFixed(2)).toLocaleString()}${maximumPossibleDamageAOE}</div>
                </div>
            </div>
            `;
            drRowsHTML += `
            <div class="totalHealingBox">
                <div class="totalHealingBoxHalf">
                    <div class="totalHealingHeader hasHoverTooltip" id="">Ammo/s</div>
                    <div class="totalHealingValue" style="border-bottom: none;">-${actualFireRate.toFixed(2)}/+${(+(ammoPerSecondActive).toFixed(2)).toLocaleString()}</div>
                </div>
                <div class="totalHealingBoxHalf">
                    <div class="totalHealingHeader hasHoverTooltip" id="">CDR</div>
                    <div class="totalHealingValue" style="border-bottom: none;">${(+((cappedCDR-1)*100).toFixed(2)).toLocaleString()}%</div>
                </div>
                <div class="totalHealingBoxHalf">
                    <div class="totalHealingHeader hasHoverTooltip" id="">Eff. Duration</div>
                    <div class="totalHealingValue" style="border-bottom: none;">${(+(effectiveDuration).toFixed(2)).toLocaleString()}s</div>
                </div>
            </div>
            `;

            //unique to this turret, we're just going with the AOE tags as a general tags display route
            //reason being is that the explosive elements of the attacks are present in both carried and turreted,
            //it's only in the math that we split it for the carried form
            drRowsHTML += conditionalHelpers.addBreakdownSpeedRows(index,Speed,totalHits);
            drRowsHTML += conditionalHelpers.addBreakdownDamageRows(index,statTagsAOE.Damage);
            drRowsHTML += conditionalHelpers.addBreakdownStatusRows(index);
            drRowsHTML += conditionalHelpers.addBreakdownCritRows(index,statTagsAOE.CritChance,statTagsAOE.CritDamage,true);
            drRowsHTML += conditionalHelpers.addBreakdownWeakspotRows(index,WeakSpot);

            drRowsHTML = userTrigger.updateSubstatColor(drRowsHTML);
            readSelection(factorID).innerHTML += drRowsHTML;
        }

        return ["Heavy Weapon: Impact Cannon",1,1,trueDPS,trueTotalDamage]
    },
    VulcanCarry(abilityPlacement,index) {
        let isCrit = globalRecords.enableCrits;
        let isWeakspot = globalRecords.enableWeakspots && !index.WeakspotDisable;
        let getIndexSums = conditionalHelpers.returnIndexTagSums;

        let abilityPath = classInfo.Engineer.abilities["Heavy Weapon: Vulcan"];
        let customStats = abilityPath.customStats;
        const {statTags,fireRate,baseDamage,baseWeakspot} = customStats;

        const cappedCDR = Math.max(0.2,1 + index.CDR);
        const {percentRate,totalAmmoValue,ammoPerSecond,ammoPerSecondActive} = calcs.getHeavyAmmoRegenValues(index,cappedCDR,abilityPath.regenRate,abilityPath.baseEnergy);
        const effectiveDrainRate = ammoPerSecondActive - fireRate;
        let drainState = false;
        if (effectiveDrainRate >= 0) {drainState = false;}
        else {drainState = true;}

        let effectiveDuration = 0;
        if (drainState) {effectiveDuration = totalAmmoValue / (-effectiveDrainRate);}
        else {effectiveDuration = Infinity;}

        const {Damage,CritChance,CritDamage,WeakSpot,Speed} = statTags;
        let sumDamageBonuses = getIndexSums(index,Damage);
        let sumCritChance = getIndexSums(index,CritChance);
        let sumCritDamage = getIndexSums(index,CritDamage);
        let sumWeakspot = getIndexSums(index,WeakSpot);

        let baseCritDamage = 0.5;
        let totalDamageBonus = 1 + sumDamageBonuses;
        let finalCritDamage = baseCritDamage + sumCritDamage;
        let totalCritChance = Math.min(1,sumCritChance);//cap crit chance at 100%
        let avgCritDamage = 1 + (isCrit ? finalCritDamage * totalCritChance : 0);

        let attackWeakspot = isWeakspot && sumWeakspot != -1 ? 1 + baseWeakspot + sumWeakspot : 1;

        let adjustedBaseDmg = baseDamage * totalDamageBonus * attackWeakspot;

        // let trueDuration = (duration * (1 + index.SkillDuration)) + effectDuration;//DRENCHED can't be modified by duration bonuses, but obv the total duration is the modified base duration + drenched's duration
        let totalHits = Math.floor(effectiveDuration*fireRate);//total hits possible within drenched's full effective duration.

        let minimumPossibleDamage = adjustedBaseDmg;
        let maximumPossibleDamage = adjustedBaseDmg * (1 + finalCritDamage);

        let trueTotalDamage = adjustedBaseDmg * totalHits * avgCritDamage;
        let trueDPS = fireRate * adjustedBaseDmg * avgCritDamage;

        if (globalRecords.enableEngTurretModes) {
            minimumPossibleDamage *= 0.5;
            maximumPossibleDamage *= 0.5;
            trueTotalDamage *= 0.5;
            trueDPS *= 0.5;
        }

        if (!index.thisIsAQuery) {
            let breakdownDomID = `ability${abilityPlacement}BreakdownTab`;
            let factorID = `ability${abilityPlacement}Factors`;
            let addRow = createHTML.basicsRow;

            readSelection("damageBreakdownSelectorHolder").innerHTML += createHTML.damageBreakdownSelectorButton(abilityPath.name,abilityPath.image,breakdownDomID);
            let breakdownInfoUI = {factorID,"image": abilityPath.image,"name": abilityPath.name,"dps": trueDPS,"totalDMG": trueTotalDamage};
            readSelection(breakdownDomID).innerHTML = createHTML.generalAbilityBreakdownBox(breakdownInfoUI);
            readSelection("havocFormBoxHolder").style.display = "flex"

            readSelection(factorID).innerHTML = "";
            let drRowsHTML = "";
            drRowsHTML += `
            <div class='dpsFactorDisclaimer'>This is for CARRIED only damage. If you want DPS/Dmg for Turret mode, then cut the numbers you see here in half as the turret deals exactly half the damage.</div><br>
            `;
            
            drRowsHTML += `
            <div class="totalHealingBox">
                <div class="totalHealingBoxHalf">
                    <div class="totalHealingHeader hasHoverTooltip" id="">Total Hits</div>
                    <div class="totalHealingValue" style="border-bottom: none;">${(+(totalHits).toFixed(2)).toLocaleString()}</div>
                </div>
                <div class="totalHealingBoxHalf">
                    <div class="totalHealingHeader hasHoverTooltip" id="">DMG/Strike</div>
                    <div class="totalHealingValue" style="border-bottom: none;">${(+(minimumPossibleDamage).toFixed(2)).toLocaleString()}</div>
                </div>
                <div class="totalHealingBoxHalf">
                    <div class="totalHealingHeader hasHoverTooltip" id="">Crit Strike</div>
                    <div class="totalHealingValue" style="border-bottom: none;">${(+(maximumPossibleDamage).toFixed(2)).toLocaleString()}</div>
                </div>
            </div>
            `;
            drRowsHTML += `
            <div class="totalHealingBox">
                <div class="totalHealingBoxHalf">
                    <div class="totalHealingHeader hasHoverTooltip" id="">Ammo/s</div>
                    <div class="totalHealingValue" style="border-bottom: none;">-${fireRate.toFixed(2)}/+${(+(ammoPerSecondActive).toFixed(2)).toLocaleString()}</div>
                </div>
                <div class="totalHealingBoxHalf">
                    <div class="totalHealingHeader hasHoverTooltip" id="">CDR</div>
                    <div class="totalHealingValue" style="border-bottom: none;">${(+((cappedCDR-1)*100).toFixed(2)).toLocaleString()}%</div>
                </div>
                <div class="totalHealingBoxHalf">
                    <div class="totalHealingHeader hasHoverTooltip" id="">Eff. Duration</div>
                    <div class="totalHealingValue" style="border-bottom: none;">${(+(effectiveDuration).toFixed(2)).toLocaleString()}s</div>
                </div>
            </div>
            `;

            drRowsHTML += conditionalHelpers.addBreakdownSpeedRows(index,Speed,totalHits);
            drRowsHTML += conditionalHelpers.addBreakdownDamageRows(index,Damage);
            drRowsHTML += conditionalHelpers.addBreakdownStatusRows(index);
            drRowsHTML += conditionalHelpers.addBreakdownCritRows(index,CritChance,CritDamage,true);
            drRowsHTML += conditionalHelpers.addBreakdownWeakspotRows(index,WeakSpot);

            drRowsHTML = userTrigger.updateSubstatColor(drRowsHTML);
            readSelection(factorID).innerHTML += drRowsHTML;
        }

        return ["Heavy Weapon: Vulcan",minimumPossibleDamage,maximumPossibleDamage,trueDPS,trueTotalDamage]
    },
    WayOfKaeula(abilityPlacement,index) {
        let isCrit = globalRecords.enableCrits;
        let getIndexSums = conditionalHelpers.returnIndexTagSums;

        let abilityPath = classInfo.Invoker.abilities["Way of Kaeula"];
        let customStats = abilityPath.customStats;
        const {statTags,duration,effectDuration,baseDamage,baseWaveDamage,frequency} = customStats;

        const {Damage,CritChance,CritDamage,Speed} = statTags;
        let sumDamageBonuses = getIndexSums(index,Damage);
        let sumCritChance = getIndexSums(index,CritChance);
        let sumCritDamage = getIndexSums(index,CritDamage);

        let baseCritDamage = 0.5;
        let totalDamageBonus = 1 + sumDamageBonuses;
        let finalCritDamage = baseCritDamage + sumCritDamage;
        let totalCritChance = Math.min(1,sumCritChance);//cap crit chance at 100%
        let avgCritDamage = 1 + (isCrit ? finalCritDamage * totalCritChance : 0);

        let adjustedBaseDmg = baseDamage * totalDamageBonus;

        let adjustedBaseWaveDmg = baseWaveDamage * (totalDamageBonus - index.ShockDamage);
        let waveDmgCrit = adjustedBaseWaveDmg * (1 + finalCritDamage);

        let trueDuration = (duration * (1 + index.SkillDuration)) + effectDuration;//DRENCHED can't be modified by duration bonuses, but obv the total duration is the modified base duration + drenched's duration
        let totalHits = Math.floor(trueDuration/frequency);//total hits possible within drenched's full effective duration.

        let minimumPossibleDamage = adjustedBaseDmg;
        let maximumPossibleDamage = adjustedBaseDmg * (1 + finalCritDamage);

        let trueTotalDamage = adjustedBaseDmg * totalHits * avgCritDamage;
        let trueDPS = trueTotalDamage/trueDuration;

        if (!index.thisIsAQuery) {
            let breakdownDomID = `ability${abilityPlacement}BreakdownTab`;
            let factorID = `ability${abilityPlacement}Factors`;
            let addRow = createHTML.basicsRow;

            readSelection("damageBreakdownSelectorHolder").innerHTML += createHTML.damageBreakdownSelectorButton(abilityPath.name,abilityPath.image,breakdownDomID);
            let breakdownInfoUI = {factorID,"image": abilityPath.image,"name": abilityPath.name,"dps": trueDPS,"totalDMG": trueTotalDamage};
            readSelection(breakdownDomID).innerHTML = createHTML.generalAbilityBreakdownBox(breakdownInfoUI);
            readSelection("havocFormBoxHolder").style.display = "flex"

            let enemyCount = Math.max(1,globalRecords.enemyCount);
            readSelection(factorID).innerHTML = "";
            let drRowsHTML = "";

            drRowsHTML += `
            <div class="totalHealingBox">
                <div class="totalHealingBoxHalf">
                    <div class="totalHealingHeader hasHoverTooltip" id="">Targets</div>
                    <div class="totalHealingValue" style="border-bottom: none;">${enemyCount}</div>
                </div>
                <div class="totalHealingBoxHalf">
                    <div class="totalHealingHeader hasHoverTooltip" id="">DMG/Strike</div>
                    <div class="totalHealingValue" style="border-bottom: none;">${(+(minimumPossibleDamage/enemyCount).toFixed(2)).toLocaleString()}</div>
                </div>
                <div class="totalHealingBoxHalf">
                    <div class="totalHealingHeader hasHoverTooltip" id="">Crit Strike</div>
                    <div class="totalHealingValue" style="border-bottom: none;">${(+(maximumPossibleDamage/enemyCount).toFixed(2)).toLocaleString()}</div>
                </div>
            </div>
            `;
            drRowsHTML += `
            <div class="rowTraceLine"></div>
            <div class='basicsDRheaderTitle'>WAVE DAMAGE</div>
            <div class='dpsFactorDisclaimer'>Not included in the DPS or Total Damage listed above.</div>
            <div class='basicsDRheaderTitle'><div>${adjustedBaseWaveDmg.toFixed(2)}</div>&nbsp;-&nbsp;<div>CRIT: ${waveDmgCrit.toFixed(2)}</div></div>
            <div class="rowTraceLine"></div><br>
            `;

            drRowsHTML += "<div class='basicsDRheaderTitle'>DURATION FACTORS</div>";

            drRowsHTML += duration ? addRow("","Base Duration",duration.toFixed(2),false) : "";
            drRowsHTML += index.SkillDuration ? addRow("","Duration Bonus",index.SkillDuration.toFixed(2),true,"%") : "";
            drRowsHTML += effectDuration ? addRow("","DRENCHED&nbsp;Duration",effectDuration.toFixed(2),false) : "";
            drRowsHTML += trueDuration ? addRow("","Effective Duration",trueDuration.toFixed(2),false) : "";

            drRowsHTML += conditionalHelpers.addBreakdownSpeedRows(index,Speed,totalHits);
            drRowsHTML += conditionalHelpers.addBreakdownDamageRows(index,Damage);
            drRowsHTML += conditionalHelpers.addBreakdownStatusRows(index);
            drRowsHTML += conditionalHelpers.addBreakdownCritRows(index,CritChance,CritDamage,true);

            drRowsHTML = userTrigger.updateSubstatColor(drRowsHTML);
            readSelection(factorID).innerHTML += drRowsHTML;
        }

        return ["Way of Kaeula",minimumPossibleDamage,maximumPossibleDamage,trueDPS,trueTotalDamage]
    },
    Firestorm(modPlacement,index) {
        let isCrit = globalRecords.enableCrits;
        let getIndexSums = conditionalHelpers.returnIndexTagSums;
        let bonusPrefix = modPlacement === 1 ? "Primary" : "Secondary";
        
        let modPath = rangedMods.Firestorm;
        let customStats = modPath.customStats;
        const {statTags,statTagsDOT,duration,durationDOT,baseDamage,baseDamageDOT,frequency,frequencyDOT,modScaling} = customStats;

        const {Damage,CritChance,CritDamage} = statTags;
        let sumDamageBonuses = getIndexSums(index,Damage,bonusPrefix);
        let sumCritChance = getIndexSums(index,CritChance);
        let sumCritDamage = getIndexSums(index,CritDamage);

        let columnDuration = duration * (1 + index.ModDuration);
        let columnHits = Math.floor(columnDuration/frequency) + 1;//There's always one hit to start, that's the +1 here

        let totalDamageBonus = 1 + sumDamageBonuses;
        let baseCritDamage = 0.5;
        let totalCritDamageBonus = sumCritDamage;
        let finalCritDamage = baseCritDamage + totalCritDamageBonus
        let totalCritChance = Math.min(sumCritChance,1);//cap crit chance at 100%
        let avgCritDamage = 1 + (isCrit ? finalCritDamage * totalCritChance : 0);

        const adjustedBaseDmg = baseDamage * totalDamageBonus;

        let minimumPossibleDamage = adjustedBaseDmg;
        let maximumPossibleDamage = adjustedBaseDmg * (1 + finalCritDamage);

        let trueTotalDamageColumn = adjustedBaseDmg * columnHits * avgCritDamage;

        let modDotBonus = modScaling ? 1 + conditionalHelpers.getIndexSumsModDots(index) : 1;//Mod damage is a unique multi to mod DoTs, but only the DoT aspect they can apply.
        //No prefix here as firestorm does NOT benefit from mutator mod dmg boosts, on the DoT. It DOES benefit from it on the column's damage though.

        let statusDuration = durationDOT * index.StatusDuration;
        let statusHits = Math.floor(statusDuration/frequencyDOT)-1;
        let sumDotDamageBonuses = 1 + getIndexSums(index,statTagsDOT.Damage);
        const adjustedBaseDmgDOT = baseDamageDOT * sumDotDamageBonuses * modDotBonus;

        let totalHits = columnHits + statusHits;

        let trueTotalDamageDOT = adjustedBaseDmgDOT * totalHits;//dots don't benefit from the first hit


        let trueTotalDamage = trueTotalDamageColumn + trueTotalDamageDOT;
        let trueDuration = columnDuration + statusDuration;


        let trueDPS = trueTotalDamage/trueDuration;

        if (!index.thisIsAQuery) {
            let breakdownDomID = `mod${modPlacement}BreakdownTab`;
            let factorID = `mod${modPlacement}Factors`;

            readSelection("damageBreakdownSelectorHolder").innerHTML += createHTML.damageBreakdownSelectorButton(modPath.name,modPath.image,breakdownDomID);
            let breakdownInfoUI = {factorID,"image": modPath.image,"name": modPath.name,"dps": trueDPS,"totalDMG": trueTotalDamage};
            readSelection(breakdownDomID).innerHTML = createHTML.generalAbilityBreakdownBox(breakdownInfoUI);
            readSelection("havocFormBoxHolder").style.display = "flex"

            readSelection(factorID).innerHTML = "";
            let drRowsHTML = "";
            let addRow = createHTML.basicsRow;

            drRowsHTML += `
            <div class='dpsFactorDisclaimer'><span>"Full"</span> DPS is the DPS while the column is still active. <span>Total</span> DPS is averaged over the full duration including the status duration after the column has subsided.</div>
            <div class="totalHealingBox">
                <div class="totalHealingBoxHalf">
                    <div class="totalHealingHeader hasHoverTooltip" id="">Column DPS</div>
                    <div class="totalHealingValue" style="border-bottom: none;">${(+(trueTotalDamageColumn/columnDuration).toFixed(2)).toLocaleString()}</div>
                </div>
                <div class="totalHealingBoxHalf">
                    <div class="totalHealingHeader hasHoverTooltip" id="">DoT DPS</div>
                    <div class="totalHealingValue" style="border-bottom: none;">${(+(trueTotalDamageDOT/trueDuration).toFixed(2)).toLocaleString()}</div>
                </div>
                <div class="totalHealingBoxHalf">
                    <div class="totalHealingHeader hasHoverTooltip" id="">FULL DPS</div>
                    <div class="totalHealingValue" style="border-bottom: none;">${(+((trueTotalDamageDOT/trueDuration) + (trueTotalDamageColumn/columnDuration)).toFixed(2)).toLocaleString()}</div>
                </div>
            </div>
            `;

            drRowsHTML += `
            <div class='basicsDRheaderTitle'>COLUMN DAMAGE</div>
            <div class="totalHealingBox">
                <div class="totalHealingBoxHalf">
                    <div class="totalHealingHeader hasHoverTooltip" id="">DMG/Tick</div>
                    <div class="totalHealingValue" style="border-bottom: none;">${(+(minimumPossibleDamage).toFixed(2)).toLocaleString()}</div>
                </div>
                <div class="totalHealingBoxHalf">
                    <div class="totalHealingHeader hasHoverTooltip" id="">Crit/Tick</div>
                    <div class="totalHealingValue" style="border-bottom: none;">${(+(maximumPossibleDamage).toFixed(2)).toLocaleString()}</div>
                </div>
                <div class="totalHealingBoxHalf">
                    <div class="totalHealingHeader hasHoverTooltip" id="">Total DoT</div>
                    <div class="totalHealingValue" style="border-bottom: none;">${(+(trueTotalDamageColumn).toFixed(2)).toLocaleString()}</div>
                </div>
            </div>
            `;

            drRowsHTML += `
            <div class='basicsDRheaderTitle'>BURNING&nbsp;DAMAGE</div>
            <div class="totalHealingBox">
                <div class="totalHealingBoxHalf">
                    <div class="totalHealingHeader hasHoverTooltip" id="">DoT Hits</div>
                    <div class="totalHealingValue" style="border-bottom: none;">${totalHits-1}</div>
                </div>
                <div class="totalHealingBoxHalf">
                    <div class="totalHealingHeader hasHoverTooltip" id="">DMG/Tick</div>
                    <div class="totalHealingValue" style="border-bottom: none;">${(+(adjustedBaseDmgDOT).toFixed(2)).toLocaleString()}</div>
                </div>
                <div class="totalHealingBoxHalf">
                    <div class="totalHealingHeader hasHoverTooltip" id="">Total DoT</div>
                    <div class="totalHealingValue" style="border-bottom: none;">${(+(trueTotalDamageDOT).toFixed(2)).toLocaleString()}</div>
                </div>
            </div>
            `;
            // drRowsHTML += "<div class='dpsFactorDisclaimer'>Sandstorm assumes the first hit is not EXPOSED, but every hit thereafter is.</div>"
            drRowsHTML += "<div class='basicsDRheaderTitle'>DURATION FACTORS</div>";
            drRowsHTML += duration ? addRow("","Base Duration",duration.toFixed(2),false) : "";
            drRowsHTML += durationDOT ? addRow("","Base DoT Duration",durationDOT.toFixed(2),false) : "";
            drRowsHTML += index.ModDuration ? addRow("","Duration Bonus",index.ModDuration.toFixed(2),true,"%") : "";
            drRowsHTML += index.StatusDuration-1 ? addRow("","Status Duration Bonus",(index.StatusDuration-1).toFixed(2),true,"%") : "";
            drRowsHTML += trueDuration ? addRow("","Efffective Duration",trueDuration.toFixed(2),false) : "";
            drRowsHTML += columnHits ? addRow("","Column Hits",columnHits.toFixed(0),false) : "";
            drRowsHTML += totalHits ? addRow("","DoT Hits",(totalHits-1).toFixed(0),false) : "";

            drRowsHTML += conditionalHelpers.addBreakdownDamageRows(index,Damage);
            drRowsHTML += conditionalHelpers.addBreakdownStatusRows(index);
            drRowsHTML += conditionalHelpers.addBreakdownCritRows(index,CritChance,CritDamage,true);

            drRowsHTML = userTrigger.updateSubstatColor(drRowsHTML);
            readSelection(factorID).innerHTML += drRowsHTML;
        }

        return ["Firestorm",1,1,trueDPS,trueTotalDamage]
    },
    Heatwave(modPlacement,index) {
        let getIndexSums = conditionalHelpers.returnIndexTagSums;
        let bonusPrefix = modPlacement === 1 ? "Primary" : "Secondary";
        
        let modPath = rangedMods.Heatwave;
        let customStats = modPath.customStats;
        const {statTagsDOT,duration,durationDOT,baseDamageDOT,frequencyDOT,modScaling,buildUpDuration} = customStats;

        let effectDuration = (duration * (1 + index.ModDuration)) - buildUpDuration;
        let statusDuration = durationDOT * index.StatusDuration;
        let trueDuration = effectDuration + statusDuration;
        let totalHits = Math.floor(trueDuration/frequencyDOT) - 1;//the dot trigger doesn't do dmg instantly like continuous attacks. DoT's have to wait until the frequency triggers it

        let modDotBonus = modScaling ? 1 + conditionalHelpers.getIndexSumsModDots(index,bonusPrefix) : 1;//this will be 1 flat as heatwave doesn't scale with mod dmg at all, be it additive or multi

        const Damage = statTagsDOT.Damage;
        let sumDotDamageBonuses = 1 + getIndexSums(index,Damage,bonusPrefix);
        const adjustedBaseDmgDOT = baseDamageDOT * sumDotDamageBonuses * modDotBonus;

        let trueTotalDamageDOT = adjustedBaseDmgDOT * totalHits;
        let trueTotalDamage = trueTotalDamageDOT;
        let trueDPS = trueTotalDamage/trueDuration;

        if (!index.thisIsAQuery) {
            let breakdownDomID = `mod${modPlacement}BreakdownTab`;
            let factorID = `mod${modPlacement}Factors`;
            let addRow = createHTML.basicsRow;

            readSelection("damageBreakdownSelectorHolder").innerHTML += createHTML.damageBreakdownSelectorButton(modPath.name,modPath.image,breakdownDomID);
            let breakdownInfoUI = {factorID,"image": modPath.image,"name": modPath.name,"dps": trueDPS,"totalDMG": trueTotalDamage};
            readSelection(breakdownDomID).innerHTML = createHTML.generalAbilityBreakdownBox(breakdownInfoUI);
            readSelection("havocFormBoxHolder").style.display = "flex"

            readSelection(factorID).innerHTML = "";
            let drRowsHTML = "";

            drRowsHTML += `
            <div class="totalHealingBox">
                <div class="totalHealingBoxHalf">
                    <div class="totalHealingHeader hasHoverTooltip" id="">DoT Hits</div>
                    <div class="totalHealingValue" style="border-bottom: none;">${(+(totalHits).toFixed(2)).toLocaleString()}</div>
                </div>
                <div class="totalHealingBoxHalf">
                    <div class="totalHealingHeader hasHoverTooltip" id="">DMG/Tick</div>
                    <div class="totalHealingValue" style="border-bottom: none;">${(+(adjustedBaseDmgDOT).toFixed(2)).toLocaleString()}</div>
                </div>
            </div>
            `;

            drRowsHTML += "<div class='basicsDRheaderTitle'>DURATION FACTORS</div>";
            drRowsHTML += duration ? addRow("","Base Duration",duration.toFixed(2),false) : "";
            drRowsHTML += durationDOT ? addRow("","DoT Duration",durationDOT.toFixed(2),false) : "";
            drRowsHTML += index.ModDuration ? addRow("","Mod Duration Bonus",index.ModDuration.toFixed(2),true,"%") : "";
            drRowsHTML += index.StatusDuration-1 ? addRow("","Status&nbsp;Duration Bonus",(index.StatusDuration-1).toFixed(2),true,"%") : "";
            drRowsHTML += buildUpDuration ? addRow("","Build-Up Time",buildUpDuration.toFixed(2),false) : "";
            drRowsHTML += trueDuration ? addRow("","Effective Duration",trueDuration.toFixed(2),false) : "";

            drRowsHTML += "<div class='dpsFactorDisclaimer'>Does not benefit from any Mod Damage sources, at all.</div>"
            drRowsHTML += conditionalHelpers.addBreakdownDamageRows(index,Damage);
            drRowsHTML += conditionalHelpers.addBreakdownStatusRows(index);

            drRowsHTML = userTrigger.updateSubstatColor(drRowsHTML);
            readSelection(factorID).innerHTML += drRowsHTML;
        }

        return ["Heatwave",1,1,trueDPS,trueTotalDamage]
    },
    MonolithSandstorm(modPlacement,index) {
        let isCrit = globalRecords.enableCrits;
        let getIndexSums = conditionalHelpers.returnIndexTagSums;

        let modPath = builtInPrimary.Sandstorm;
        let customStats = modPath.customStats;
        const {statTags,duration,baseDamage,frequency} = customStats;

        const {Damage,CritChance,CritDamage} = statTags;
        let sumDamageBonuses = getIndexSums(index,Damage);
        let sumCritChance = getIndexSums(index,CritChance);
        let sumCritDamage = getIndexSums(index,CritDamage);

        let trueDuration = duration * (1 + index.ModDuration);
        let totalHits = Math.floor(trueDuration/frequency);//total hits possible given the frequency of hits in the duration of the mod

        let totalDamageBonus = 1 + sumDamageBonuses;
        let baseCritDamage = 0.5;
        let totalCritDamageBonus = sumCritDamage;
        let finalCritDamage = baseCritDamage + totalCritDamageBonus
        let totalCritChance = Math.min(sumCritChance,1);//cap crit chance at 100%
        let avgCritDamage = 1 + (isCrit ? finalCritDamage * totalCritChance : 0);

        const adjustedBaseDmg = baseDamage * totalDamageBonus;

        let minimumPossibleDamage = adjustedBaseDmg;
        let maximumPossibleDamage = adjustedBaseDmg * (1 + finalCritDamage);

        let firstHitModifier = index.outEXPOSED ? -.15 : 0;//The first hit doesn't benefit from EXPOSED, so remove the bonus from that hit alone.
        let firstHitDamage = baseDamage * (totalDamageBonus + firstHitModifier) * avgCritDamage;
        let trueTotalDamage = adjustedBaseDmg * (totalHits-1) * avgCritDamage + firstHitDamage;
        let trueDPS = trueTotalDamage/trueDuration;

        if (!index.thisIsAQuery) {
            let breakdownDomID = `mod${modPlacement}BreakdownTab`;
            let factorID = `mod${modPlacement}Factors`
            let addRow = createHTML.basicsRow;

            readSelection("damageBreakdownSelectorHolder").innerHTML += createHTML.damageBreakdownSelectorButton(modPath.name,modPath.image,breakdownDomID);
            let breakdownInfoUI = {factorID,"image": modPath.image,"name": modPath.name,"dps": trueDPS,"totalDMG": trueTotalDamage};
            readSelection(breakdownDomID).innerHTML = createHTML.generalAbilityBreakdownBox(breakdownInfoUI);
            readSelection("havocFormBoxHolder").style.display = "flex"

            readSelection(factorID).innerHTML = "";
            let drRowsHTML = "<div class='dpsFactorDisclaimer'>Sandstorm assumes the first hit is not EXPOSED, but every hit thereafter is.</div>"
            drRowsHTML += "<div class='basicsDRheaderTitle'>DURATION FACTORS</div>";
            drRowsHTML += duration ? addRow("","Base Duration",duration.toFixed(2),false) : "";
            drRowsHTML += index.ModDuration ? addRow("","Duration Bonus",index.ModDuration.toFixed(2),true,"%") : "";
            drRowsHTML += trueDuration ? addRow("","Actual Duration",trueDuration.toFixed(2),false) : "";
            drRowsHTML += totalHits ? addRow("","Total Hits",totalHits,false) : "";

            drRowsHTML += conditionalHelpers.addBreakdownDamageRows(index,Damage);
            drRowsHTML += conditionalHelpers.addBreakdownStatusRows(index);
            drRowsHTML += conditionalHelpers.addBreakdownCritRows(index,CritChance,CritDamage,true);

            drRowsHTML = userTrigger.updateSubstatColor(drRowsHTML);
            readSelection(factorID).innerHTML += drRowsHTML;
        }

        return ["Sandstorm",minimumPossibleDamage,maximumPossibleDamage,trueDPS,trueTotalDamage]
    },
    MeleeDamage(placement,index) {
        let globalPath = globalRecords.weapons;
        let meleePath = melees[globalPath.melee];
        const {DMG,critChance,weakSpot,stagger,weakspotOverride} = meleePath;

        let baseDamage = DMG;
        let baseGenerationDamage = baseDamage/3;
        let baseCrit = critChance;
        let baseWeakspot = weakSpot;
        let baseStagger = stagger;
        const dodgeClass = calcs.getWeight(index).dodgeClass;
        const flopExtension = dodgeClass === "Flop" ? evadeDuration.flop - evadeDuration.medium : 0;
        const backstepDuration = dodgeClass === "Flop" ? evadeDuration.flop : evadeDuration.medium;
        const backstepModifiedDuration = backstepDuration/(1 + index.EvadeSpeed);

        let classPath = weaponClass[meleePath.weaponClass];
        // let mutatorPath = meleeMutators[globalPath.meleeMutator];

        let isCrit = globalRecords.enableCrits;
        let isWeakspot = globalRecords.enableWeakspots && !index.WeakspotDisable;
        const useSwings = globalRecords.enableMainSwings;
        const useEffects = globalRecords.enableMeleeEffects;
        if (weakspotOverride) {isWeakspot = true;}//aka, is Godsplitter equipped.

        let highestDPS = 0;
        let highestSingleHit = 0;
        let highestComboDamage = 0;

        let getIndexSums = conditionalHelpers.returnIndexTagSums;

        function parseMVArrayDamage(MVArray,damageMulti,damageMultiNoCrit,fullCritMulti) {
            let comboDamage = 0;
            let totalHits = 0;
            let damageArray = [];
            let highestComboHit = 0;
            let highestCritHit = 0;
            for (attack of MVArray) {
                if (Array.isArray(attack)) {
                    let parsedArray = parseMVArrayDamage(attack,damageMulti,damageMultiNoCrit,fullCritMulti);
                    comboDamage += parsedArray.comboDamage;
                    totalHits += parsedArray.totalHits;
                    damageArray.push(parsedArray.damageArray);

                    if (parsedArray.highestComboHit>highestComboHit) {highestComboHit = parsedArray.highestComboHit;}
                    if (parsedArray.highestCritHit>highestCritHit) {highestCritHit = parsedArray.highestCritHit;}
                }
                else {
                    let attackDamage = attack * damageMulti;//averaged crit factors
                    let attackDamageCrit = attack * fullCritMulti;//full crit factor, not averaged
                    let attackDamageNoCrit = attack * damageMultiNoCrit;
                    if (attackDamageCrit>highestSingleHit) {highestSingleHit = attackDamageCrit;}
                    comboDamage += attackDamage;
                    if (attackDamageNoCrit>highestComboHit) {highestComboHit = attackDamageNoCrit;}
                    if (attackDamageCrit>highestCritHit) {highestCritHit = attackDamageCrit;}
                    damageArray.push(+attackDamageNoCrit.toFixed(2));
                    totalHits++;
                }
            }
            if (comboDamage>highestComboDamage) {highestComboDamage = comboDamage;}
            return {comboDamage,totalHits,damageArray,highestComboHit,highestCritHit}
        }

        function generateAttacksArray(classPath,attackType) {
            const attackPaths = classPath[attackType];
            const isBackstepVariant = attackType === "backstep" || attackType === "backstepCharge";

            const {
                mvNote = "",
                projectileNote = "",
                projectileChargeReleaseNote = "",
            } = attackPaths;

            const tagPath = attackPaths.damageTags;
            const {Damage,CritChance,CritDamage,WeakSpot,Speed} = tagPath;

            let projectileObject,projectileChargeReleaseObject;

            //Crit Chance
            let attackCritChance = Math.min(1,baseCrit + getIndexSums(index,CritChance));
            //Crit Damage
            let baseCritDamage = 0.50;
            let attackCritDamage = isCrit ? baseCritDamage + getIndexSums(index,CritDamage) : 0;
            let averagedAttackCrit = isCrit ? 1 + (attackCritChance * attackCritDamage) : 1;
            //Weakspot
            let sumWeakspot = getIndexSums(index,WeakSpot);
            let attackWeakspot = isWeakspot && sumWeakspot != -1 ? 1 + baseWeakspot + sumWeakspot : 1;
            //Stagger
            let attackStagger = baseStagger + index.StaggerDamage;
            //Damage
            let attackDamage = 1 + getIndexSums(index,Damage);
            let attackDamageNoCrit = attackDamage * attackWeakspot;
            let attackDamageBonus = attackDamage * attackWeakspot * averagedAttackCrit;
            let attackDamageBonusFullCrit = attackDamage * attackWeakspot * (1 + attackCritDamage);

            
            let sumSpeedBonus = getIndexSums(index,Speed) - (isBackstepVariant ? index.EvadeSpeed : 0);
            //BASIC ATTACK INFO
            //Evade attack durations were recorded with a medium(normal) evade. If we are in flop territory, then add the difference in evade time.
            let baseDuration = attackPaths.expectedDuration + (isBackstepVariant ? flopExtension : 0);
            let attackComboDuration = 0;
            //Remove the evade duration, reduce the attack by attack speed,add the evade duration back in, reduced by evade speed if available.
            if (isBackstepVariant) {attackComboDuration = ((baseDuration - backstepDuration)/(1 + sumSpeedBonus))+ backstepModifiedDuration;}
            else {attackComboDuration = baseDuration/(1 + sumSpeedBonus);}

            let attackBaseDamage = baseDamage * attackDamageBonus;
            let attackBaseDamageCrit = baseDamage * attackDamageBonusFullCrit;
            let attackBaseDamageNoCrit = baseDamage * attackDamageNoCrit;
            let attackMVArray = attackPaths.mv;
            let attackComboParse = parseMVArrayDamage(attackMVArray,attackBaseDamage,attackBaseDamageNoCrit,attackBaseDamageCrit);
            let attackTotalComboDamage = attackComboParse.comboDamage;
            let attackComboArray = attackComboParse.damageArray;
            let highestComboHit = attackComboParse.highestComboHit;
            let highestCritHit = attackComboParse.highestCritHit;
            let attackComboDPS = attackTotalComboDamage/attackComboDuration;
            let attackTotalHits = attackComboParse.totalHits;

            let returnObject = {
                baseDuration,
                attackComboDuration,
                attackBaseDamage,
                attackBaseDamageCrit,
                attackMVArray,
                attackTotalComboDamage,
                attackComboArray,
                attackComboDPS,
                attackTotalHits,
                highestComboHit,
                highestCritHit,
                Damage,
                CritChance,
                CritDamage,
                WeakSpot,
                Speed,
                projectileObject,
                projectileChargeReleaseObject,
                mvNote,
                projectileNote,
                projectileChargeReleaseNote,
            }

            const projTags = attackPaths.projectileTags;
            const projReleaseTags = attackPaths.projectileChargeReleaseTags;

            if (!useSwings && projTags) {
                //if we are excluding the main swings and a projectile exists, set main dmg related values to 0 so the effect values can overwrite them
                returnObject.attackBaseDamage = 0;
                returnObject.attackBaseDamageCrit = 0;
                returnObject.attackTotalComboDamage = 0;
                returnObject.attackComboDPS = 0;
                returnObject.attackTotalHits = 0;
                returnObject.highestComboHit = 0;
                returnObject.highestCritHit = 0;
            }

            if (useEffects) {
                if (projTags) {
                    const {Damage,CritChance,CritDamage,WeakSpot} = projTags;

                    //Crit Chance
                    let attackCritChance = Math.min(1,baseCrit + getIndexSums(index,CritChance));
                    //Crit Damage
                    let baseCritDamage = 0.50;
                    let attackCritDamage = isCrit ? baseCritDamage + getIndexSums(index,CritDamage) : 0;
                    let averagedAttackCrit = isCrit ? 1 + (attackCritChance * attackCritDamage) : 1;
                    //Weakspot
                    let sumWeakspot = getIndexSums(index,WeakSpot);
                    let attackWeakspot = isWeakspot && sumWeakspot != -1 ? 1 + baseWeakspot + sumWeakspot : 1;
                    //Stagger
                    let attackStagger = baseStagger + index.StaggerDamage;
                    //Damage
                    let attackDamage = 1 + getIndexSums(index,Damage);
                    let attackDamageNoCrit = attackDamage * attackWeakspot;
                    let attackDamageBonus = attackDamage * attackWeakspot * averagedAttackCrit;
                    let attackDamageBonusFullCrit = attackDamage * attackWeakspot * (1 + attackCritDamage);

                    let attackBaseDamage = baseDamage * attackDamageBonus;
                    let attackBaseDamageCrit = baseDamage * attackDamageBonusFullCrit;
                    let attackBaseDamageNoCrit = baseDamage * attackDamageNoCrit;
                    let attackMVArray = attackPaths.projectile;
                    let attackComboParse = parseMVArrayDamage(attackMVArray,attackBaseDamage,attackBaseDamageNoCrit,attackBaseDamageCrit);
                    let attackTotalComboDamage = attackComboParse.comboDamage;
                    let attackComboArray = attackComboParse.damageArray;
                    let highestComboHit = attackComboParse.highestComboHit;
                    if (highestComboHit>returnObject.highestComboHit) {returnObject.highestComboHit = highestComboHit}
                    let highestCritHit = attackComboParse.highestCritHit;
                    if (highestCritHit>returnObject.highestCritHit) {returnObject.highestCritHit = highestCritHit}

                    let attackComboDPS = attackTotalComboDamage/attackComboDuration;
                    let attackTotalHits = attackComboParse.totalHits;

                    returnObject.projectileObject = {
                        attackBaseDamage,
                        attackBaseDamageCrit,
                        attackMVArray,
                        attackTotalComboDamage,
                        attackComboArray,
                        attackComboDPS,
                        attackTotalHits,
                        highestComboHit,
                        highestCritHit,
                        Damage,
                        CritChance,
                        CritDamage,
                        WeakSpot
                    }
                    returnObject.attackComboDPS += returnObject.projectileObject.attackComboDPS;
                }
                if (projReleaseTags) {
                    const {Damage,CritChance,CritDamage,WeakSpot} = projTags;

                    //Crit Chance
                    let attackCritChance = Math.min(1,baseCrit + getIndexSums(index,CritChance));
                    //Crit Damage
                    let baseCritDamage = 0.50;
                    let attackCritDamage = isCrit ? baseCritDamage + getIndexSums(index,CritDamage) : 0;
                    let averagedAttackCrit = isCrit ? 1 + (attackCritChance * attackCritDamage) : 1;
                    //Weakspot
                    let sumWeakspot = getIndexSums(index,WeakSpot);
                    let attackWeakspot = isWeakspot && sumWeakspot != -1 ? 1 + baseWeakspot + sumWeakspot : 1;
                    //Stagger
                    let attackStagger = baseStagger + index.StaggerDamage;
                    //Damage
                    let attackDamage = 1 + getIndexSums(index,Damage);
                    let attackDamageNoCrit = attackDamage * attackWeakspot;
                    let attackDamageBonus = attackDamage * attackWeakspot * averagedAttackCrit;
                    let attackDamageBonusFullCrit = attackDamage * attackWeakspot * (1 + attackCritDamage);

                    let attackBaseDamage = baseDamage * attackDamageBonus;
                    let attackBaseDamageCrit = baseDamage * attackDamageBonusFullCrit;
                    let attackBaseDamageNoCrit = baseDamage * attackDamageNoCrit;
                    let attackMVArray = attackPaths.projectileChargeRelease;
                    let attackComboParse = parseMVArrayDamage(attackMVArray,attackBaseDamage,attackBaseDamageNoCrit,attackBaseDamageCrit);
                    let attackTotalComboDamage = attackComboParse.comboDamage;
                    let attackComboArray = attackComboParse.damageArray;
                    let highestComboHit = attackComboParse.highestComboHit;
                    if (highestComboHit>returnObject.highestComboHit) {returnObject.highestComboHit = highestComboHit}
                    let highestCritHit = attackComboParse.highestCritHit;
                    if (highestCritHit>returnObject.highestCritHit) {returnObject.highestCritHit = highestCritHit}

                    let attackComboDPS = attackTotalComboDamage/attackComboDuration;
                    let attackTotalHits = attackComboParse.totalHits;

                    returnObject.projectileChargeReleaseObject = {
                        attackBaseDamage,
                        attackBaseDamageCrit,
                        attackMVArray,
                        attackTotalComboDamage,
                        attackComboArray,
                        attackComboDPS,
                        attackTotalHits,
                        highestComboHit,
                        highestCritHit,
                        Damage,
                        CritChance,
                        CritDamage,
                        WeakSpot
                    }
                    returnObject.attackComboDPS += returnObject.projectileChargeReleaseObject.attackComboDPS;
                }
            }

            return returnObject
        }

        const attacksConstructor = {
            "basicAttacks": generateAttacksArray(classPath,"basicAttack"),
            "chargeAttacks": generateAttacksArray(classPath,"chargeAttack"),
            "backstepAttacks": generateAttacksArray(classPath,"backstep"),
            "backstepChargeAttacks": generateAttacksArray(classPath,"backstepCharge")
        }

        highestDPS = Math.max(attacksConstructor.basicAttacks.attackComboDPS,attacksConstructor.chargeAttacks.attackComboDPS,attacksConstructor.backstepAttacks.attackComboDPS,attacksConstructor.backstepChargeAttacks.attackComboDPS);

        if (index.thisIsAQuery != 1) {breakdownsUI.meleeBreakdownUI(index,meleePath,attacksConstructor);}

        return ["Melee Damage",1,1,highestDPS,highestSingleHit]
    },
}

let conditionalHelpers = {
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