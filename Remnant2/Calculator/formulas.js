let calcs = {
    getHealth(index) {
        let baseHealth = 100 + index.Health;
        let healthBoost = 1 + index["Health%"];
        let globalHealth = index.GlobalHealthModifier;
        let totalHealth = baseHealth * healthBoost * globalHealth; 
        let totalHealthNoGlobal = baseHealth * healthBoost;

        return [totalHealth,totalHealthNoGlobal]
    },
    getStamina(index) {
        let baseStamina = 100 + index.Stamina;
        let staminaBoost = 1 + index["Stamina%"];
        let totalStamina = baseStamina * staminaBoost;
        return [totalStamina];
    },
    getArmor(index) {
        let baseArmor = index.Armor;
        let armorEff = 1 + index["Armor%"];
        let totalArmor = baseArmor * armorEff;

        return [baseArmor,armorEff,totalArmor]
    },
    getWeight(index) {
        let baseWeight = index.Encumbrance;
        //Stuff that reduces weight can technically put us negative. We need the negative for armor pings, but not for displays
        let adjustedBaseWeight = Math.max(0,baseWeight);
        let weightBoost = 1 + index["Encumbrance%"];
        let totalWeight = +(adjustedBaseWeight * weightBoost).toFixed(2);
        let weightThreshold = +(index.WeightThreshold).toFixed(2);
        let dodgeClass = "";
        let staminaPenalty = 0;
        //Define the current dodge class and stamina penalty
        if (totalWeight>(75+weightThreshold)) {dodgeClass = "Flop";staminaPenalty = .75;}
        else if (totalWeight>(50+weightThreshold)) {dodgeClass = "Heavy";staminaPenalty = .5;}
        else if (totalWeight>(25+weightThreshold)) {dodgeClass = "Medium";staminaPenalty = .25;}
        else {dodgeClass = "Light";}//No stamina cost penalty on light dodge

        return [totalWeight,dodgeClass,staminaPenalty,baseWeight,weightBoost,weightThreshold]
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

        return [armorDR,bulwarkStacks,bulwarkDR,otherFlat,totalFlat,totalDR]
    },
    getResistance(index) {
        let bleed = index.Bleed;
        let burn = index.Burn;
        let shock = index.Shock;
        let corrosive = index.Corrosive;
        let blight = index.Blight;

        return [bleed,burn,shock,corrosive,blight]
    },
    getHealing(index) {
        //this is for shit like game master's pride, it's a global multi modifier
        let globalHealingMod = index.GlobalHealingEff;
        //BOOSTS---
        let healingEffectiveness = index.HealingEFF;
        //REGENERATION---
        let flatHPperSec = index["HP/S+"] * (1+healingEffectiveness) * globalHealingMod;
        let percHPperSec = index["HP/S%"] * (1+healingEffectiveness) * globalHealingMod;
        //GREY HEALTH
        let greyHPperSec = 0.2 + index["GreyHP/S+"];
        let greyPercHPperSec = index["GreyHP/S%"];
        let totalGreyHPperSec = greyHPperSec * (1+greyPercHPperSec);

        return [globalHealingMod,healingEffectiveness,flatHPperSec,percHPperSec,totalGreyHPperSec]
    },
    getLifesteal(index,relicEffectiveness) {
        let lifestealEFF = index.LifestealEFF;
        let relicLifesteal = index.RelicLifesteal * (1 + (relicEffectiveness || 0));
        let lifestealALL = (index.Lifesteal + relicLifesteal) * (1 + lifestealEFF);
        let lifestealMelee = index.MLifesteal * (1 + lifestealEFF);
        let lifestealMeleeCharged = index.MChargedLifeSteal * (1 + lifestealEFF);
        let lifestealRange = index.RLifesteal * (1 + lifestealEFF);
        let peakLifesteal;

        if (filters.types.vars.targetStatistic && playerDerivedStatistics[filters.types.vars.targetStatistic].includes("Lifesteal")) {
        let newLifestealAll = lifestealALL;
        let newLifestealMelee = lifestealALL + lifestealMelee;
        let newLifestealMeleeCharged = lifestealALL + lifestealMelee + lifestealMeleeCharged;
        let newLifestealRanged = lifestealALL + lifestealRange;

        peakLifesteal = newLifestealAll;
        peakLifesteal = newLifestealMelee > peakLifesteal ? newLifestealMelee : peakLifesteal;
        peakLifesteal = newLifestealMeleeCharged > peakLifesteal ? newLifestealMeleeCharged : peakLifesteal;
        peakLifesteal = newLifestealRanged > peakLifesteal ? newLifestealRanged : peakLifesteal;
        }

        return [lifestealEFF,lifestealALL,lifestealMelee,lifestealMeleeCharged,lifestealRange,peakLifesteal]
    },
    getStaminaValues(index,staminaPenalty) {
        //STAMINA
        let regenMulti = index["Stamina/S+Multi"] ? index["Stamina/S+Multi"] : 1;
        let staminaPerSec = (33 + index["Stamina/S+"]) * regenMulti;

        let staminaPenaltyAdjustment = Math.max(0,index.StaminaPenaltyAdjustment);

        let staminaCost = index.StaminaCost + (staminaPenalty * (1-staminaPenaltyAdjustment));
        //If something like bisected it on, or if we go under 0% costs, turn off stamina costs.
        if (index.StaminaNegation > 0 || staminaCost < 0) {staminaCost = 0}

        return [staminaPerSec,staminaCost]
    },
    getRelicHealing(tieredFunctionStorage,index,totalHealth,globalHealingMod,healingEffectiveness) {
        //RELIC HEALING
        //We're taking noGlobal on total health as that is the value that persists with shit like Restriction Cord.
        let relicHPbase = index.RelicHPbase * globalHealingMod;
        let relicHPtype = index.RelicHPtype;
        let relicHPtime = index.RelicHPtime;
        let relicUseTime = index.RelicSpeed;
        let relicEffectiveness = index.RelicEFF;

        let relicHPscaled = relicHPbase * (1+relicEffectiveness) * (1+healingEffectiveness);

        let relicPercPerSecond,relicFlatPerSecond;
        globalRecords.relicComplexArray = null;//Need to clear the complex array in case it persists

        switch (relicHPtype) {
            case "%":
                relicPercPerSecond = (relicHPscaled/relicHPtime);
                relicFlatPerSecond = ((relicHPscaled/relicHPtime)/100)*totalHealth;
                break;
            case "P":
                relicPercPerSecond = null;
                relicFlatPerSecond = (relicHPscaled/relicHPtime);
                break;
            case "F":
                relicPercPerSecond = null;
                relicFlatPerSecond = (relicHPscaled/relicHPtime);
                break;
            default:
                relicHPscaled = 0;
                relicHPtime = 0;
                relicPercPerSecond = null;
                relicFlatPerSecond = null;
                break;
        }

        if (index.thisIsAQuery) {
            relicComplexArray = formulasValues.callStoredFunctions(tieredFunctionStorage,"customRelicFunctions",index,[relicHPscaled,totalHealth]);//resonating heart, stuff like that
        }
        else {
            let toggleCheck = readSelection(`USEtoggledRelic`).checked;
            readSelection("relicComplexEffect").innerHTML = "";
            if (!toggleCheck) {
                relicComplexArray = formulasValues.callStoredFunctions(tieredFunctionStorage,"customRelicFunctions",index,[relicHPscaled,totalHealth]);
            }
        }

        return [relicHPbase,relicHPtype,relicHPtime,relicHPscaled,relicPercPerSecond,relicFlatPerSecond,globalRecords.relicComplexArray,relicUseTime,relicEffectiveness]
    },
    getAdvancedDR(index,totalDR,totalHealth,totalHealthNoGlobal) {
        //REDUCED ENEMY DAMAGE
        let reducedEnemyDamage = index.REdamage - 1;
        //DAMAGE KEPT OR RETAINED(how much gets shared to allies via various sources)
        let damageKept = index.DMGKept - 1;

        //Save the current values to be used in the switch case returns, as we're going to modify the original values after this
        let MODreducedEnemyDamage = reducedEnemyDamage;
        let MODdamageKept = damageKept;
        //Modify the original values to give proper amounts to bonus mitigation and EHP after.
        if (!globalRecords.useREdamage){reducedEnemyDamage=1} else {reducedEnemyDamage += 1;}
        if (!globalRecords.useDMGKept){damageKept=1} else {damageKept += 1;}
        //TOTAL BONUS TO EFFECTIVE DR, BASED ON REDMG AND DMGKEPT
        let totalBonusMitigation = (damageKept*reducedEnemyDamage)-1;
        //TOTAL EFFECTIVE DAMAGE REDUCTION INCLUDING REDMG AND DMGKEPT
        totalDR = Math.min(0.80,totalDR);
        let effectiveDR = 1-(1-totalDR)*(1+totalBonusMitigation);
        //----------BASE EHP----------------------------------------------------------------------------
        //For general EHP math
        let baseEHP = totalHealth/(1-effectiveDR); 
        //For shields EHP math, when restriction cord exists
        //This exists for and is used solely by shields and healing. Restriction Cord stops you from HEALING past 50%, it does not actually reduce MAX by 50%.
        let baseEHPforShieldsAndHealing = totalHealthNoGlobal/(1-effectiveDR);

        return [MODreducedEnemyDamage,MODdamageKept,totalBonusMitigation,effectiveDR,baseEHP,baseEHPforShieldsAndHealing]
    },
    getShields(index,baseEHP) {
        //----------SHIELDS----------------------------------------------------------------------------
        let percShields = index.Shield;
        let shieldEff = index.ShieldEFF;
        let totalPercShields = percShields * (1+shieldEff);
        //noGlobal on HP here, as stuff like restriction cord does not reduce max hp, it only prevents you from HEALING past 50%
        let shieldEHP = baseEHP * totalPercShields;

        return [percShields,shieldEff,totalPercShields,shieldEHP]
    },
    getEHP(shieldEHP,baseEHP) {
        shieldEHP = globalRecords.useShields ? shieldEHP : 0;
        let totalEHP = baseEHP + shieldEHP;

        return [totalEHP]
    },
    getAdvancedHealing(baseEHP,regHealing,relicHealing,totalHealthNoGlobal) {
        let advancedRelicFlat,advancedRelicPerc;

        let flatHPperSec = regHealing[0];
        let percHPperSec = regHealing[1];

        let relicHPtype = relicHealing[0];
        let relicHPtime = relicHealing[1];
        let relicHPscaled = relicHealing[2];
        let useComplexValues = relicHealing[3];
        let relicComplexArray = relicHealing[4];


        if (useComplexValues===true) {advancedRelicPerc = relicComplexArray[0];advancedRelicFlat = 0;}
        else {
            switch (relicHPtype) {
                case "%":
                    advancedRelicPerc = relicHPscaled/relicHPtime;advancedRelicFlat = 0;
                    break;
                case "P":
                    advancedRelicPerc = 0;advancedRelicFlat = relicHPscaled/relicHPtime;
                    break;
                case "F":
                    advancedRelicPerc = 0;advancedRelicFlat = relicHPscaled/relicHPtime;
                    break;
                default:
                    advancedRelicPerc = 0;advancedRelicFlat = 0;//If there is no healing type(unique relic like Shielded Heart)
                    break;
            }
        }

        let totalHealth = totalHealthNoGlobal;//noGlobal hp here
        let advancedRelicTotalFlat = advancedRelicFlat + (advancedRelicPerc/100)*totalHealth;
        let advancedRelicTotalPerc = ((advancedRelicPerc/100) + advancedRelicFlat/totalHealth) * 100;

        let advancedTotalFlatHP = flatHPperSec + percHPperSec*totalHealth;
        let advancedTotalPercHP = (percHPperSec + flatHPperSec/totalHealth)*100;
        if (globalRecords.useRelicHealing) {advancedTotalFlatHP += advancedRelicTotalFlat;advancedTotalPercHP += advancedRelicTotalPerc;}

        let EHPpSec = baseEHP * (advancedTotalPercHP/100);

        return [advancedRelicFlat,advancedRelicPerc,advancedRelicTotalFlat,advancedRelicTotalPerc,advancedTotalFlatHP,advancedTotalPercHP,EHPpSec]
    },
}
let customDamage = {
    HavocForm(abilityPlacement,index) {
        let reference = index;

        let abilityPath = classInfo.Archon.abilities["Havoc Form"];
        let customStats = abilityPath.customStats//path to havoc relevant stats
        let duration = customStats.duration;
        let entryDuration = customStats.entryDuration;//the amount of time you spend locked in the entry animation
        let trueBaseDPS = customStats.trueBaseDPS;//base dps without cast speed
        let baseDamage = customStats.baseDamage;//base dmg, not dps. True base dmg is divided by 3 for lifesteal and stuff
        let frequency = customStats.frequency;//the rate at which we hit enemies without cast speed
        let drain = customStats.drain;//How much duration we lost per instance of outgoing dmg.

        let modifiedDuration = (duration * (1 + reference.SkillDuration)) - entryDuration;//The duration left after entry animation, before the drain starts
        let effectiveDrainRate = (frequency/(1 + reference.CastSpeed)) + drain;//The total drain per instance of damage, including time passed between instances
        let totalHits = Math.floor(modifiedDuration/effectiveDrainRate);//total hits possible when firing constantly.

        let trueDuration = modifiedDuration - (totalHits * drain);//The actual amount of time the skill lasts, when constantly fired, not including entry duration


        let baseCritDamage = 0.5;
        let totalDamageBonus = reference.AllDamage + reference.SkillDamage + reference.ElementalDamage + reference.ShockDamage;
        let totalCritDamageBonus = reference.AllCritDamage;
        let finalCritDamage = baseCritDamage + totalCritDamageBonus;
        let totalCritChance = reference.AllCritChance + reference.ElementalCritChance + reference.SkillCritChance;
        totalCritChance = Math.min(totalCritChance,1)//cap crit chance at 100%
        let avgCritDamage = finalCritDamage * totalCritChance;

        let minimumPossibleDamage = baseDamage * (1 + totalDamageBonus);
        let maximumPossibleDamage = baseDamage * (1 + totalDamageBonus) * (1 + finalCritDamage);


        let trueDPS = trueBaseDPS * (1 + reference.CastSpeed) * (1 + totalDamageBonus) * (1 + avgCritDamage);
        let trueTotalDamage = baseDamage * totalHits * (1 + totalDamageBonus) * (1 + avgCritDamage);

        if (index.thisIsAQuery != 1) {
            let breakdownDomID = `ability${abilityPlacement}BreakdownTab`;
            let factorID = `ability${abilityPlacement}Factors`

            readSelection("damageBreakdownSelectorHolder").innerHTML += createHTML.damageBreakdownSelectorButton(abilityPath.name,abilityPath.image,breakdownDomID);
            let insertedHTML = `
            <div class="seletionBackgroundAbilityBox">
                <div class="selectionBackgroundAbilityAdjustment">
                    <img class="abilityDPSbackgroundImage" src='${abilityPath.image}' alt="Ability ${abilityPlacement} breakdown icon">
                </div>
            </div>
            
            <div class="selectionAbilityDPSBody">
                <div class="selectionAbilityDPSTitleHeader">${abilityPath.name.toUpperCase()}</div>

                <div class="selectionAbilityDPSHeader" style="white-space: normal;">
                    <div class="advancedSummaryThirds" title="trueHavocDPS = " style="width: auto;">
                        <span class="advancedSummaryStat">DPS</span><span class="rowTraceLine"></span><span class="advancedSummaryValue" id="ability${abilityPlacement}DPS">0.00</span>
                    </div>
                    <div class="advancedSummaryThirds" title="totalHavocDamage = " style="width: auto;">
                        <span class="advancedSummaryStat">TOTAL DMG</span><span class="rowTraceLine"></span><span class="advancedSummaryValue" id="ability${abilityPlacement}TotalDamage">0.00</span>
                    </div>
                </div>
                
                <div class="abilityFactorsList" id="${factorID}"></div>
            </div>`

            readSelection(breakdownDomID).innerHTML = insertedHTML

            readSelection("havocFormBoxHolder").style.display = "flex"

            readSelection(`ability${abilityPlacement}DPS`).innerHTML = trueDPS.toFixed(2);//later make this so it can work with either ability box
            readSelection(`ability${abilityPlacement}TotalDamage`).innerHTML = trueTotalDamage.toFixed(2);
            console.log(trueDPS.toFixed(2),trueTotalDamage.toFixed(2))


            // (modifiedDuration + entryDuration)
            readSelection(factorID).innerHTML = "";
            let drRowsHTML = "<div class='basicsDRheaderTitle'>DURATION FACTORS</div>";
            drRowsHTML += (modifiedDuration + entryDuration) ? createHTML.basicsRow("","Duration",(modifiedDuration + entryDuration),false) : "";
            drRowsHTML += entryDuration ? createHTML.basicsRow("","Entry Duration",entryDuration.toFixed(2),false) : "";
            drRowsHTML += modifiedDuration ? createHTML.basicsRow("","Usable Duration",modifiedDuration.toFixed(2),false) : "";
            drRowsHTML += trueDuration ? createHTML.basicsRow("","True Duration",trueDuration.toFixed(2),false) : "";
            drRowsHTML += "<div class='basicsDRheaderTitle'>SPEED FACTORS</div>";
            drRowsHTML += reference.CastSpeed ? createHTML.basicsRow("","Cast Speed",reference.CastSpeed,true,"%") : "";
            drRowsHTML += totalHits ? createHTML.basicsRow("","Total Hits",totalHits,false) : "";
            drRowsHTML += "<div class='basicsDRheaderTitle'>DAMAGE FACTORS</div>";
            drRowsHTML += "<div class='dpsFactorDisclaimer'>Note that temporary bonuses, for now, are assumed to be active at all times when you have an item that provides it. Jester's bell, EXPOSED, corroded, etc.</div>";
            drRowsHTML += reference.AllDamage ? createHTML.basicsRow("","All Damage",reference.AllDamage,true,"%") : "";
            drRowsHTML += reference.SkillDamage ? createHTML.basicsRow("","Skill Damage",reference.SkillDamage,true,"%") : "";
            drRowsHTML += reference.ElementalDamage ? createHTML.basicsRow("","Elemental Damage",reference.ElementalDamage,true,"%") : "";
            drRowsHTML += reference.ShockDamage ? createHTML.basicsRow("","Shock Damage",reference.ShockDamage,true,"%") : "";
            drRowsHTML += totalDamageBonus ? createHTML.basicsRow("","Total Damage Bonus",totalDamageBonus,true,"%") : "";
            drRowsHTML += reference.outSLOW ? createHTML.basicsRow("","","SLOW",false) : "";
            drRowsHTML += reference.outBLEED ? createHTML.basicsRow("","","BLEED",false) : "";
            drRowsHTML += reference.outBURN ? createHTML.basicsRow("","","BURN",false) : "";
            drRowsHTML += reference.outCORRODED ? createHTML.basicsRow("","","CORRODED",false) : "";
            drRowsHTML += reference.outOVERLOADED ? createHTML.basicsRow("","","OVERLOADED",false) : "";
            drRowsHTML += reference.outEXPOSED ? createHTML.basicsRow("","","EXPOSED",false) : "";
            drRowsHTML += "<div class='basicsDRheaderTitle'>CRIT FACTORS</div>";
            drRowsHTML += reference.AllCritChance ? createHTML.basicsRow("","All Crit Chance",reference.AllCritChance,true,"%") : "";
            drRowsHTML += reference.ElementalCritChance ? createHTML.basicsRow("","Elemental Crit Chance",reference.ElementalCritChance,true,"%") : "";
            drRowsHTML += reference.SkillCritChance ? createHTML.basicsRow("","Skill Crit Chance",reference.SkillCritChance,true,"%") : "";
            drRowsHTML += totalCritChance ? createHTML.basicsRow("","Total Crit Chance",totalCritChance,true,"%") : "";
            drRowsHTML += baseCritDamage ? createHTML.basicsRow("","Base Crit Damage",baseCritDamage,true,"%") : "";
            drRowsHTML += reference.AllCritDamage ? createHTML.basicsRow("","All Crit Damage",reference.AllCritDamage,true,"%") : "";
            drRowsHTML += finalCritDamage ? createHTML.basicsRow("","Total Crit Damage",finalCritDamage,true,"%") : "";
            drRowsHTML += avgCritDamage ? createHTML.basicsRow("","Avg. Bonus from Crit",avgCritDamage,true,"%") : "";
            // drRowsHTML += returnObject.otherFlat ? createHTML.basicsRow("Other Flat",returnObject.otherFlat,true,"%") : "";
            // drRowsHTML += returnObject.totalFlat ? createHTML.basicsRow("Total Flat DR%",returnObject.totalFlat,true,"%") : "";
            drRowsHTML = userTrigger.updateSubstatColor(drRowsHTML);
            readSelection(factorID).innerHTML += drRowsHTML;
            console.log(trueDPS.toFixed(2),trueTotalDamage.toFixed(2))
        }

        return ["Havoc Form",minimumPossibleDamage,maximumPossibleDamage,trueDPS,trueTotalDamage]
    },
    MonolithSandstorm(modPlacement,index) {//wip do not touch
        let reference = valueTables[index];
        let isUIcalcs = index != "greatTableKnowerOfAll";

        let modPath = builtInPrimary.Sandstorm;
        let customStats = modPath.customStats;
        let duration = customStats.duration;
        let modDurationBonus = 1 + reference.ModDuration;
        let baseDamage = customStats.baseDamage;//base dmg, not dps. True base dmg is divided by 3 for lifesteal and stuff
        let frequency = customStats.frequency;//the rate at which the mod hits enemies

        let modifiedDuration = duration * modDurationBonus;
        let totalHits = Math.floor(modifiedDuration/frequency);//total hits possible given the frequency of hits in the duration of the mod
        // console.log("Total Hits: " + totalHits)

        let trueDuration = modifiedDuration;//The actual amount of time the skill lasts, when constantly fired, not including entry duration

        let totalDamageBonus = reference.AllDamage + reference.ModDamage + reference.PrimaryModDamage + reference.ElementalDamage + reference.PrimaryElementalDamage;
        let baseCritDamage = 0.5;
        let totalCritDamageBonus = reference.AllCritDamage;
        let finalCritDamage = baseCritDamage + totalCritDamageBonus
        let totalCritChance = reference.AllCritChance + reference.ElementalCritChance + reference.ModCritChance;
        totalCritChance = Math.min(totalCritChance,1)//cap crit chance at 100%
        let avgCritDamage = finalCritDamage * totalCritChance;

        let minimumPossibleDamage = baseDamage * (1 + totalDamageBonus);
        let maximumPossibleDamage = baseDamage * (1 + totalDamageBonus) * (1 + finalCritDamage);

        // console.log("DMG%: " + totalDamageBonus)
        let firstHitModifier = reference.outEXPOSED ? -.15 : 0;//The first hit doesn't benefit from EXPOSED, so remove the bonus from that hit alone.
        let firstHitDamage = baseDamage * (1 + totalDamageBonus + firstHitModifier) * (1 + avgCritDamage);
        let trueTotalDamage = baseDamage * (totalHits-1) * (1 + totalDamageBonus) * (1 + avgCritDamage) + firstHitDamage;
        let trueDPS = trueTotalDamage/trueDuration;

        if (!isUIcalcs) {
            let breakdownDomID = `mod${modPlacement}BreakdownTab`;
            let factorID = `mod${modPlacement}Factors`

            readSelection("damageBreakdownSelectorHolder").innerHTML += createHTML.damageBreakdownSelectorButton(modPath.name,modPath.image,breakdownDomID);
            let insertedHTML = `
            <div class="seletionBackgroundAbilityBox">
                <div class="selectionBackgroundAbilityAdjustment">
                    <img class="abilityDPSbackgroundImage" src='${modPath.image}' alt="Ability ${modPlacement} breakdown icon">
                </div>
            </div>
            
            <div class="selectionAbilityDPSBody">
                <div class="selectionAbilityDPSTitleHeader">${modPath.name.toUpperCase()}</div>

                <div class="selectionAbilityDPSHeader" style="white-space: normal;">
                    <div class="advancedSummaryThirds" title="trueHavocDPS = " style="width: auto;">
                        <span class="advancedSummaryStat">DPS</span><span class="rowTraceLine"></span><span class="advancedSummaryValue" id="mod${modPlacement}DPS">0.00</span>
                    </div>
                    <div class="advancedSummaryThirds" title="totalHavocDamage = " style="width: auto;">
                        <span class="advancedSummaryStat">TOTAL DMG</span><span class="rowTraceLine"></span><span class="advancedSummaryValue" id="mod${modPlacement}TotalDamage">0.00</span>
                    </div>
                </div>
                
                <div class="abilityFactorsList" id="${factorID}"></div>
            </div>`

            readSelection(breakdownDomID).innerHTML = insertedHTML

            readSelection("havocFormBoxHolder").style.display = "flex"

            readSelection(`mod${modPlacement}DPS`).innerHTML = trueDPS.toFixed(2);//later make this so it can work with either ability box
            readSelection(`mod${modPlacement}TotalDamage`).innerHTML = trueTotalDamage.toFixed(2);


            readSelection(factorID).innerHTML = "";
            let drRowsHTML = "<div class='dpsFactorDisclaimer'>Sandstorm assumes the first hit is not EXPOSED, but every hit thereafter is.</div>"
            drRowsHTML += "<div class='basicsDRheaderTitle'>DURATION FACTORS</div>";
            drRowsHTML += duration ? createHTML.basicsRow("","Base Duration",duration.toFixed(2),false) : "";
            drRowsHTML += reference.ModDuration ? createHTML.basicsRow("","Duration Bonus",reference.ModDuration.toFixed(2),true,"%") : "";
            drRowsHTML += modifiedDuration ? createHTML.basicsRow("","Actual Duration",modifiedDuration.toFixed(2),false) : "";
            drRowsHTML += "<div class='basicsDRheaderTitle'>SPEED FACTORS</div>";
            drRowsHTML += totalHits ? createHTML.basicsRow("","Total Hits",totalHits,false) : "";
            drRowsHTML += "<div class='basicsDRheaderTitle'>DAMAGE FACTORS</div>";
            drRowsHTML += "<div class='dpsFactorDisclaimer'>Note that temporary bonuses, for now, are assumed to be active at all times when you have an item that provides it. Jester's bell, EXPOSED, corroded, etc.</div>";
            drRowsHTML += reference.AllDamage ? createHTML.basicsRow("","All Damage",reference.AllDamage,true,"%") : "";
            drRowsHTML += reference.ElementalDamage ? createHTML.basicsRow("","Elemental Damage",reference.ElementalDamage,true,"%") : "";
            drRowsHTML += reference.PrimaryElementalDamage ? createHTML.basicsRow("","Primary Elemental Damage",reference.PrimaryElementalDamage,true,"%") : "";
            drRowsHTML += reference.ModDamage ? createHTML.basicsRow("","Mod Damage",reference.ModDamage,true,"%") : "";
            drRowsHTML += reference.PrimaryModDamage ? createHTML.basicsRow("","Primary Mod Damage",reference.PrimaryModDamage,true,"%") : "";
            drRowsHTML += totalDamageBonus ? createHTML.basicsRow("","Total Damage Bonus",totalDamageBonus,true,"%") : "";
            drRowsHTML += reference.outSLOW ? createHTML.basicsRow("","","SLOW",false) : "";
            drRowsHTML += reference.outBLEED ? createHTML.basicsRow("","","BLEED",false) : "";
            drRowsHTML += reference.outBURN ? createHTML.basicsRow("","","BURN",false) : "";
            drRowsHTML += reference.outCORRODED ? createHTML.basicsRow("","","CORRODED",false) : "";
            drRowsHTML += reference.outOVERLOADED ? createHTML.basicsRow("","","OVERLOADED",false) : "";
            drRowsHTML += reference.outEXPOSED ? createHTML.basicsRow("","","EXPOSED",false) : "";
            drRowsHTML += "<div class='basicsDRheaderTitle'>CRIT FACTORS</div>";
            drRowsHTML += reference.AllCritChance ? createHTML.basicsRow("","All Crit Chance",reference.AllCritChance,true,"%") : "";
            drRowsHTML += reference.ElementalCritChance ? createHTML.basicsRow("","Elemental Crit Chance",reference.ElementalCritChance,true,"%") : "";
            drRowsHTML += reference.ModCritChance ? createHTML.basicsRow("","Mod Crit Chance",reference.ModCritChance,true,"%") : "";
            drRowsHTML += totalCritChance ? createHTML.basicsRow("","Total Crit Chance",totalCritChance,true,"%") : "";
            drRowsHTML += baseCritDamage ? createHTML.basicsRow("","Base Crit Damage",baseCritDamage,true,"%") : "";
            drRowsHTML += reference.AllCritDamage ? createHTML.basicsRow("","All Crit Damage",reference.AllCritDamage,true,"%") : "";
            drRowsHTML += finalCritDamage ? createHTML.basicsRow("","Total Crit Damage",finalCritDamage,true,"%") : "";
            drRowsHTML += avgCritDamage ? createHTML.basicsRow("","Avg. Bonus from Crit",avgCritDamage,true,"%") : "";
            // drRowsHTML += returnObject.otherFlat ? createHTML.basicsRow("Other Flat",returnObject.otherFlat,true,"%") : "";
            // drRowsHTML += returnObject.totalFlat ? createHTML.basicsRow("Total Flat DR%",returnObject.totalFlat,true,"%") : "";
            drRowsHTML = userTrigger.updateSubstatColor(drRowsHTML);
            readSelection(factorID).innerHTML += drRowsHTML;
        }

        return ["Sandstorm",minimumPossibleDamage,maximumPossibleDamage,trueDPS,trueTotalDamage]
    },
    MeleeDamage(index) {
        let globalPath = globalRecords.weapons;

        let meleePath = melee[globalPath.melee];
        let classPath = weaponClass[meleePath.weaponClass];
        // let mutatorPath = meleeMutators[globalPath.meleeMutator];

        let isCrit = globalRecords.enableCrits;
        let isWeakspot = globalRecords.enableWeakspots;
        if (meleePath.weakspotOverride) {isWeakspot = true;}//aka, is Godsplitter equipped.

        let highestDPS = 0;
        let highestSingleHit = 0;
        let highestComboDamage = 0;

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

        function generateAttacksArray(meleePath,classPath,attackType) {

            let baseDamage = meleePath.DMG;
            let baseGenerationDamage = baseDamage/3;
            let baseCrit = meleePath.critChance;
            let baseWeakspot = meleePath.weakSpot;
            let baseStagger = meleePath.stagger;

            let attackPaths = classPath[attackType];

            let mvNote = attackPaths.mvNote || "";
            let projectileNote = attackPaths.projectileNote || "";
            let projectileChargeReleaseNote = attackPaths.projectileChargeReleaseNote || "";

            let damageTags = attackPaths.damageTags.Damage;
            let critTags = attackPaths.damageTags.CritChance;
            let critDamageTags = attackPaths.damageTags.CritDamage;
            let weakspotTags = attackPaths.damageTags.WeakSpot;
            let speedTags = attackPaths.damageTags.Speed;

            let dodgeClass = calcs.getWeight(index)[1];

            let projectileObject;
            let projectileChargeReleaseObject;

            //Crit Chance
            let attackCritChance = Math.min(1,baseCrit + conditionalHelpers.returnIndexTagSums(index,critTags));
            //Crit Damage
            let baseCritDamage = 0.50;
            let attackCritDamage = isCrit ? baseCritDamage + conditionalHelpers.returnIndexTagSums(index,critDamageTags) : 0;
            let averagedAttackCrit = isCrit ? 1 + (attackCritChance * attackCritDamage) : 1;
            //Weakspot
            let sumWeakspot = conditionalHelpers.returnIndexTagSums(index,weakspotTags);
            let attackWeakspot = isWeakspot && sumWeakspot != -1 ? 1 + baseWeakspot + sumWeakspot : 1;
            //Stagger
            let attackStagger = baseStagger + index.StaggerDamage;
            //Damage
            let attackDamage = 1 + conditionalHelpers.returnIndexTagSums(index,damageTags);
            let attackDamageNoCrit = attackDamage * attackWeakspot;
            let attackDamageBonus = attackDamage * attackWeakspot * averagedAttackCrit;
            let attackDamageBonusFullCrit = attackDamage * attackWeakspot * (1 + attackCritDamage);

            
            let sumSpeedBonus = conditionalHelpers.returnIndexTagSums(index,speedTags) - (attackType === "backstep" || attackType === "backstepCharge" ? index.EvadeSpeed : 0);
            //BASIC ATTACK INFO
            //Evade attack durations were recorded with a medium(normal) evade. If we are in flop territory, then add the difference in evade time.
            let baseDuration = attackPaths.expectedDuration
                + (dodgeClass === "Flop" ? evadeDuration.flop - evadeDuration.medium : 0);
            let attackComboDuration = 0;
            if (attackType === "backstep" || attackType === "backstepCharge") {
                attackComboDuration =
                ((baseDuration - (dodgeClass === "Flop" ? evadeDuration.flop : evadeDuration.medium))/(1 + sumSpeedBonus))//Remove the evade duration, reduce the attack by attack speed
                + (dodgeClass === "Flop" ? evadeDuration.flop : evadeDuration.medium)/(1 + index.EvadeSpeed);//add the evade duration back in, reduced by evade speed if available.
            }
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
            if (attackComboDPS>highestDPS) {highestDPS = attackComboDPS}
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
                damageTags,
                critTags,
                critDamageTags,
                weakspotTags,
                speedTags,
                projectileObject,
                projectileChargeReleaseObject,
                mvNote,
                projectileNote,
                projectileChargeReleaseNote,
            }

            if (!globalRecords.enableMainSwings && attackPaths.projectileTags) {
                //if we are excluding the main swings and a projectile exists, set main dmg related values to 0 so the effect values can overwrite them
                returnObject.attackBaseDamage = 0;
                returnObject.attackBaseDamageCrit = 0;
                returnObject.attackTotalComboDamage = 0;
                returnObject.attackComboDPS = 0;
                returnObject.attackTotalHits = 0;
                returnObject.highestComboHit = 0;
                returnObject.highestCritHit = 0;
            }

            if (globalRecords.enableMeleeEffects) {
                if (attackPaths.projectileTags) {
                    let damageTags = attackPaths.projectileTags.Damage;
                    let critTags = attackPaths.projectileTags.CritChance;
                    let critDamageTags = attackPaths.projectileTags.CritDamage;
                    let weakspotTags = attackPaths.projectileTags.WeakSpot;
                    let speedTags = attackPaths.projectileTags.Speed;

                    //Crit Chance
                    let attackCritChance = Math.min(1,baseCrit + conditionalHelpers.returnIndexTagSums(index,critTags));
                    //Crit Damage
                    let baseCritDamage = 0.50;
                    let attackCritDamage = isCrit ? baseCritDamage + conditionalHelpers.returnIndexTagSums(index,critDamageTags) : 0;
                    let averagedAttackCrit = isCrit ? 1 + (attackCritChance * attackCritDamage) : 1;
                    //Weakspot
                    let sumWeakspot = conditionalHelpers.returnIndexTagSums(index,weakspotTags);
                    let attackWeakspot = isWeakspot && sumWeakspot != -1 ? 1 + baseWeakspot + sumWeakspot : 1;
                    //Stagger
                    let attackStagger = baseStagger + index.StaggerDamage;
                    //Damage
                    let attackDamage = 1 + conditionalHelpers.returnIndexTagSums(index,damageTags);
                    let attackDamageNoCrit = attackDamage * attackWeakspot;
                    let attackDamageBonus = attackDamage * attackWeakspot * averagedAttackCrit;
                    let attackDamageBonusFullCrit = attackDamage * attackWeakspot * (1 + attackCritDamage);

                    let sumSpeedBonus = conditionalHelpers.returnIndexTagSums(index,speedTags) - (attackType === "backstep" || attackType === "backstepCharge" ? index.EvadeSpeed : 0);
                    //BASIC ATTACK INFO
                    //Evade attack durations were recorded with a medium(normal) evade. If we are in flop territory, then add the difference in evade time.
                    let baseDuration = attackPaths.expectedDuration
                        + (dodgeClass === "Flop" ? evadeDuration.flop - evadeDuration.medium : 0);
                    let attackComboDuration = 0;
                    if (attackType === "backstep" || attackType === "backstepCharge") {
                        attackComboDuration =
                        ((baseDuration - (dodgeClass === "Flop" ? evadeDuration.flop : evadeDuration.medium))/(1 + sumSpeedBonus))//Remove the evade duration, reduce the attack by attack speed
                        + (dodgeClass === "Flop" ? evadeDuration.flop : evadeDuration.medium)/(1 + index.EvadeSpeed);//add the evade duration back in, reduced by evade speed if available.
                    }
                    else {attackComboDuration = baseDuration/(1 + sumSpeedBonus);}
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
                    if (attackComboDPS>highestDPS) {highestDPS = attackComboDPS}
                    let attackTotalHits = attackComboParse.totalHits;

                    returnObject.projectileObject = {
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
                        damageTags,
                        critTags,
                        critDamageTags,
                        weakspotTags,
                        speedTags
                    }
                    returnObject.attackComboDPS += returnObject.projectileObject.attackComboDPS;
                }
                if (attackPaths.projectileChargeReleaseTags) {
                    let damageTags = attackPaths.projectileChargeReleaseTags.Damage;
                    let critTags = attackPaths.projectileChargeReleaseTags.CritChance;
                    let critDamageTags = attackPaths.projectileChargeReleaseTags.CritDamage;
                    let weakspotTags = attackPaths.projectileChargeReleaseTags.WeakSpot;
                    let speedTags = attackPaths.projectileChargeReleaseTags.Speed;

                    //Crit Chance
                    let attackCritChance = Math.min(1,baseCrit + conditionalHelpers.returnIndexTagSums(index,critTags));
                    //Crit Damage
                    let baseCritDamage = 0.50;
                    let attackCritDamage = isCrit ? baseCritDamage + conditionalHelpers.returnIndexTagSums(index,critDamageTags) : 0;
                    let averagedAttackCrit = isCrit ? 1 + (attackCritChance * attackCritDamage) : 1;
                    //Weakspot
                    let sumWeakspot = conditionalHelpers.returnIndexTagSums(index,weakspotTags);
                    let attackWeakspot = isWeakspot && sumWeakspot != -1 ? 1 + baseWeakspot + sumWeakspot : 1;
                    //Stagger
                    let attackStagger = baseStagger + index.StaggerDamage;
                    //Damage
                    let attackDamage = 1 + conditionalHelpers.returnIndexTagSums(index,damageTags);
                    let attackDamageNoCrit = attackDamage * attackWeakspot;
                    let attackDamageBonus = attackDamage * attackWeakspot * averagedAttackCrit;
                    let attackDamageBonusFullCrit = attackDamage * attackWeakspot * (1 + attackCritDamage);


                    let sumSpeedBonus = conditionalHelpers.returnIndexTagSums(index,speedTags) - (attackType === "backstep" || attackType === "backstepCharge" ? index.EvadeSpeed : 0);
                    //BASIC ATTACK INFO
                    //Evade attack durations were recorded with a medium(normal) evade. If we are in flop territory, then add the difference in evade time.
                    let baseDuration = attackPaths.expectedDuration
                        + (dodgeClass === "Flop" ? evadeDuration.flop - evadeDuration.medium : 0);
                    let attackComboDuration = 0;
                    if (attackType === "backstep" || attackType === "backstepCharge") {
                        attackComboDuration =
                        ((baseDuration - (dodgeClass === "Flop" ? evadeDuration.flop : evadeDuration.medium))/(1 + sumSpeedBonus))//Remove the evade duration, reduce the attack by attack speed
                        + (dodgeClass === "Flop" ? evadeDuration.flop : evadeDuration.medium)/(1 + index.EvadeSpeed);//add the evade duration back in, reduced by evade speed if available.
                    }
                    else {attackComboDuration = baseDuration/(1 + sumSpeedBonus);}
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
                    if (attackComboDPS>highestDPS) {highestDPS = attackComboDPS}
                    let attackTotalHits = attackComboParse.totalHits;

                    returnObject.projectileChargeReleaseObject = {
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
                        damageTags,
                        critTags,
                        critDamageTags,
                        weakspotTags,
                        speedTags
                    }
                    returnObject.attackComboDPS += returnObject.projectileChargeReleaseObject.attackComboDPS;
                }
            }

            return returnObject
        }

        let basicAttacks = generateAttacksArray(meleePath,classPath,"basicAttack");
        let chargeAttacks = generateAttacksArray(meleePath,classPath,"chargeAttack");
        let backstepAttacks = generateAttacksArray(meleePath,classPath,"backstep");
        let backstepChargeAttacks = generateAttacksArray(meleePath,classPath,"backstepCharge");

        if (index.thisIsAQuery != 1) {//meleeBreakdownTab
            let breakdownDomID = `meleeBreakdownTab`;
            let factorID = `meleeFactors`

            readSelection("damageBreakdownSelectorHolder").innerHTML += createHTML.damageBreakdownSelectorButton(meleePath.name,(meleePath.name === "Bare Fists" ? "/images/swagCat.png" : meleePath.image),breakdownDomID);
            let insertedHTML = `
            <div class="seletionBackgroundAbilityBox">
                <div class="selectionBackgroundAbilityAdjustment">
                    <img class="abilityDPSbackgroundImage" src="${meleePath.image}" alt="Ability breakdown icon">
                </div>
            </div>
            
            <div class="selectionAbilityDPSBody">
                <div class="selectionAbilityDPSTitleHeader">${meleePath.name.toUpperCase()}</div>
                <div class="filtersInstructionsBox" style="color: #e06666;">Melee calcs are brand new. Report any bugs/feedback in my discord linked at the bottom.</div>

                <div class="totalHealingHeader">
                    <span class="damageEnableOptions hasHoverTooltip" id="swingsMeleeHolder">Include Swings&nbsp;
                        <label class="toggleContainer">
                            <input type="checkbox" class="toggleCheckbox" onchange="conditionalHelpers.updateGlobalToggle('enableMainSwings','enableMeleeEffects')" ${globalRecords.enableMainSwings ? "checked" : ""}> <!--math toggle-->
                            <span class="toggleSlider"></span>
                        </label>&nbsp;
                    </span>
                    <span class="damageEnableOptions hasHoverTooltip" id="bonusEffectMeleeHolder">&nbsp;Include Effects&nbsp;
                        <label class="toggleContainer">
                            <input type="checkbox" class="toggleCheckbox" onchange="conditionalHelpers.updateGlobalToggle('enableMeleeEffects','enableMainSwings')"  ${globalRecords.enableMeleeEffects ? "checked" : ""}> <!--math toggle-->
                            <span class="toggleSlider"></span>
                        </label>
                    </span>
                </div>

                <div class="selectionAbilityDPSHeader" style="white-space: normal;">
                    <button type="button" class="breakdownSelectorButton" onclick="advancedUpdates.updateSelectedMeleeBreakdown('basicAttacks')">
                        <div class="exportText">Basic Attack</div>
                    </button>
                    <button type="button" class="breakdownSelectorButton" onclick="advancedUpdates.updateSelectedMeleeBreakdown('chargeAttacks')">
                        <div class="exportText">Charge Attack</div>
                    </button>
                    <button type="button" class="breakdownSelectorButton" onclick="advancedUpdates.updateSelectedMeleeBreakdown('backstepAttacks')">
                        <div class="exportText">Backstep Attack</div>
                    </button>
                    <button type="button" class="breakdownSelectorButton" onclick="advancedUpdates.updateSelectedMeleeBreakdown('backstepChargeAttacks')">
                        <div class="exportText">Backstep Charge Attack</div>
                    </button>
                </div>
                
                <div class="abilityFactorsList" id="${factorID}"></div>
            </div>`
            
            readSelection(breakdownDomID).innerHTML = insertedHTML
            readSelection("havocFormBoxHolder").style.display = "flex"

            // readSelection(`meleeDPS`).innerHTML = highestDPS.toFixed(2);//later make this so it can work with either ability box
            // readSelection(`meleeTotalDamage`).innerHTML = highestComboDamage.toFixed(2);
            // console.log(trueDPS.toFixed(2),trueTotalDamage.toFixed(2))
            let selectedMeleeBreakdown = null;
            let breakdownHeaderTitle = "";
            switch (globalRecords.selectedMeleeBreakdown) {
                case "basicAttacks": 
                    selectedMeleeBreakdown = basicAttacks;
                    breakdownHeaderTitle = "BASIC ATTACKS";
                    break;
                case "chargeAttacks": 
                    selectedMeleeBreakdown = chargeAttacks;
                    breakdownHeaderTitle = "CHARGE ATTACKS";
                    break;
                case "backstepAttacks": 
                    selectedMeleeBreakdown = backstepAttacks;
                    breakdownHeaderTitle = "BACKSTEP ATTACKS";
                    break;
                case "backstepChargeAttacks": 
                    selectedMeleeBreakdown = backstepChargeAttacks;
                    breakdownHeaderTitle = "BACKSTEP CHARGE ATTACKS";
                    break;
            }
            // (modifiedDuration + entryDuration)
            readSelection(factorID).innerHTML = "";
            let drRowsHTML = `<div class="advancedStatsHeader" id="selectedMeleeAttackHeader">${breakdownHeaderTitle}</div>`
            let displayArrayString = '';
            for (let entry of selectedMeleeBreakdown.attackMVArray) {
                displayArrayString += "&nbsp;" + `x${Array.isArray(entry) ? `[${entry}]` : entry}`
            }
            let projectileArrayString = "";
            if (selectedMeleeBreakdown.projectileObject) {
                for (let entry of selectedMeleeBreakdown.projectileObject.attackMVArray) {
                    projectileArrayString += "&nbsp;" + `x${Array.isArray(entry) ? `[${entry}]` : `${entry}`}`
                }
            }
            let projectileArrayReleaseString = "";
            if (selectedMeleeBreakdown.projectileChargeReleaseObject) {
                for (let entry of selectedMeleeBreakdown.projectileChargeReleaseObject.attackMVArray) {
                    projectileArrayReleaseString += "&nbsp;" + `x${Array.isArray(entry) ? `[${entry}]` : entry}`
                }
            }

            drRowsHTML += selectedMeleeBreakdown.mvNote ? `<span class="mvNotesDisplay">${selectedMeleeBreakdown.mvNote || ""}</span>` : "";
            drRowsHTML += selectedMeleeBreakdown.projectileObject ? `
            <div class="totalHealingHeader">Physical Swings - Show&nbsp;
                <label class="toggleContainer">
                    <input type="checkbox" class="toggleCheckbox" id="showPhysicalSwings" onchange="conditionalHelpers.updateMVDisplay('physicalSwingDisplayRow','showPhysicalSwings')"> <!--math toggle-->
                    <span class="toggleSlider"></span>
                </label>
            </div>
            ` + `<div class="basicsDRContainer MVDisplayRow" id="physicalSwingDisplayRow">${displayArrayString}</div>`
            : `<div class="basicsDRContainer">${displayArrayString}</div>`;
            
            drRowsHTML += selectedMeleeBreakdown.projectileObject ? 
            `<div class="totalHealingHeader">Bonus Effect - Show&nbsp;
                <label class="toggleContainer">
                    <input type="checkbox" class="toggleCheckbox" id="showBonusEffects" onchange="conditionalHelpers.updateMVDisplay('bonusEffectDisplayRow','showBonusEffects')"> <!--math toggle-->
                    <span class="toggleSlider"></span>
                </label>
            </div>` + `<div class="basicsDRContainer MVDisplayRow" id="bonusEffectDisplayRow">
            ${selectedMeleeBreakdown.projectileNote ? `<span class="mvNotesDisplay">${selectedMeleeBreakdown.projectileNote || ""}</span><br>` : ""}
            ${projectileArrayString}
            ${(selectedMeleeBreakdown.projectileChargeReleaseObject ? (selectedMeleeBreakdown.projectileChargeReleaseNote ? `<br><span class="mvNotesDisplay">${selectedMeleeBreakdown.projectileChargeReleaseNote || ""}</span>` : "") + `<div>${projectileArrayReleaseString}</div>` : "")}
            </div>`
            : "";


            drRowsHTML += `<br>`;
            drRowsHTML += `
            <div class="totalHealingBox">
                <div class="totalHealingBoxHalf">
                    <div class="totalHealingHeader hasHoverTooltip" id="averageDPSExplainerMelee">AVG DPS [?]</div>
                    <div class="totalHealingValue" style="border-bottom: none;">${(+selectedMeleeBreakdown.attackComboDPS.toFixed(2)).toLocaleString()}</div>
                </div>
                <div class="totalHealingBoxHalf">
                    <div class="totalHealingHeader hasHoverTooltip" id="highestHitMeleeHolder">Highest Hit</div>
                    <div class="totalHealingValue" style="border-bottom: none;">${(+selectedMeleeBreakdown.highestComboHit.toFixed(2)).toLocaleString()}</div>
                </div>
                <div class="totalHealingBoxHalf">
                    <div class="totalHealingHeader hasHoverTooltip" id="highestCritMeleeHolder">Highest Crit</div>
                    <div class="totalHealingValue" style="border-bottom: none;">${(+selectedMeleeBreakdown.highestCritHit.toFixed(2)).toLocaleString()}</div>
                </div>
            </div>
            `
            drRowsHTML += `
            <div class="totalHealingBox">
                <div class="totalHealingBoxHalf">
                    <div class="totalHealingHeader hasHoverTooltip" id="meleeComboDurationHolder">Combo Duration</div>
                    <div class="totalHealingValue" style="border-bottom: none;">${(+selectedMeleeBreakdown.baseDuration.toFixed(2)).toLocaleString()}</div>
                </div>
                <div class="totalHealingBoxHalf">
                    <div class="totalHealingHeader hasHoverTooltip" id="meleeModifiedDurationHolder">Modified Duration</div>
                    <div class="totalHealingValue" style="border-bottom: none;">${(+selectedMeleeBreakdown.attackComboDuration.toFixed(2)).toLocaleString()}</div>
                </div>
            </div>
            `

            let allDamageTags = [...selectedMeleeBreakdown.damageTags];
            let allCritTags = [...selectedMeleeBreakdown.critTags];
            let allCritDamageTags = [...selectedMeleeBreakdown.critDamageTags];
            let allWeakspotTags = [...selectedMeleeBreakdown.weakspotTags];
            let allSpeedTags = [...selectedMeleeBreakdown.speedTags];
            conditionalHelpers.addMissingTags(selectedMeleeBreakdown,"projectileObject","damageTags",allDamageTags);
            conditionalHelpers.addMissingTags(selectedMeleeBreakdown,"projectileObject","critTags",allCritTags);
            conditionalHelpers.addMissingTags(selectedMeleeBreakdown,"projectileObject","critDamageTags",allCritDamageTags);
            conditionalHelpers.addMissingTags(selectedMeleeBreakdown,"projectileObject","weakspotTags",allWeakspotTags);
            conditionalHelpers.addMissingTags(selectedMeleeBreakdown,"projectileObject","speedTags",allSpeedTags);
            conditionalHelpers.addMissingTags(selectedMeleeBreakdown,"projectileChargeReleaseObject","damageTags",allDamageTags);
            conditionalHelpers.addMissingTags(selectedMeleeBreakdown,"projectileChargeReleaseObject","critTags",allCritTags);
            conditionalHelpers.addMissingTags(selectedMeleeBreakdown,"projectileChargeReleaseObject","critDamageTags",allCritDamageTags);
            conditionalHelpers.addMissingTags(selectedMeleeBreakdown,"projectileChargeReleaseObject","weakspotTags",allWeakspotTags);
            conditionalHelpers.addMissingTags(selectedMeleeBreakdown,"projectileChargeReleaseObject","speedTags",allSpeedTags);
            

            if (allDamageTags.length) {
                drRowsHTML += "<div class='basicsDRheaderTitle'>DAMAGE FACTORS</div>";
                for (let tag of allDamageTags) {
                    drRowsHTML += index[tag] ? createHTML.basicsRow("",conditionalHelpers.addSpacesToTagNames(tag),index[tag],true,"%") : "";
                }
            }
            if (allCritTags.length || allCritDamageTags.length) {
                drRowsHTML += "<div class='basicsDRheaderTitle'>CRIT FACTORS</div>";
                drRowsHTML += createHTML.basicsRow("","Weapon's Crit Chance",meleePath.critChance,true,"%");
                for (let tag of allCritTags) {
                    drRowsHTML += index[tag] ? createHTML.basicsRow("",conditionalHelpers.addSpacesToTagNames(tag),index[tag],true,"%") : "";
                }
                if (allCritDamageTags.length) {
                    drRowsHTML += createHTML.basicsRow("","Base Crit Damage",0.50,true,"%")
                }
                for (let tag of allCritDamageTags) {
                    drRowsHTML += index[tag] ? createHTML.basicsRow("",conditionalHelpers.addSpacesToTagNames(tag),index[tag],true,"%") : "";
                }
            }
            if (allWeakspotTags.length) {
                drRowsHTML += "<div class='basicsDRheaderTitle'>WEAKSPOT FACTORS</div>";
                drRowsHTML += createHTML.basicsRow("","Weapon's Weakspot",meleePath.weakSpot,true,"%");
                drRowsHTML += createHTML.basicsRow("","Base Weakspot",1,true,"%");
                for (let tag of allWeakspotTags) {
                    drRowsHTML += index[tag] ? createHTML.basicsRow("",conditionalHelpers.addSpacesToTagNames(tag),index[tag],true,"%") : "";
                }
            }
            if (allSpeedTags.length) {
                drRowsHTML += "<div class='basicsDRheaderTitle'>SPEED FACTORS</div>";
                for (let tag of allSpeedTags) {
                    drRowsHTML += index[tag] ? createHTML.basicsRow("",conditionalHelpers.addSpacesToTagNames(tag),index[tag],true,"%") : "";
                }
            }

            


            drRowsHTML = userTrigger.updateSubstatColor(drRowsHTML);
            readSelection(factorID).innerHTML += drRowsHTML;
            // console.log(trueDPS.toFixed(2),trueTotalDamage.toFixed(2))
        }

        // return ["Havoc Form",minimumPossibleDamage,maximumPossibleDamage,trueDPS,trueTotalDamage]
    },
    sumTotalDamage(index) {

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
    returnIndexTagSums(index,tagsArray) {
        let statistic = 0;
        if (tagsArray === -1) {return -1;}
        for (tag of tagsArray) {
            if (index[tag]) {statistic += index[tag];}
        }
        return statistic;
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
    updateGlobalToggle(elemID,comparableToggleID) {
        globalRecords[elemID] = !globalRecords[elemID];

        if (!globalRecords[elemID]) {globalRecords[comparableToggleID] = true;}
        updateFormulas();
    }
}