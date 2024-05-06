let calcs = {
    getHealth(index) {
        let baseHealth = 100 + valueTables[index].Health;
        let healthBoost = 1 + valueTables[index]["Health%"];
        let globalHealth = valueTables[index].GlobalHealthModifier;
        let totalHealth = baseHealth * healthBoost * globalHealth; 
        let totalHealthNoGlobal = baseHealth * healthBoost;

        return [totalHealth,totalHealthNoGlobal]
    },
    getStamina(index) {
        // let statTable = valueTables[index];
        let baseStamina = 100 + valueTables[index].Stamina;
        let staminaBoost = 1 + valueTables[index]["Stamina%"];
        let totalStamina = baseStamina * staminaBoost; 
        return [totalStamina];
    },
    getArmor(index) {
        let baseArmor = valueTables[index].Armor;
        let armorEff = 1 + valueTables[index]["Armor%"];
        let totalArmor = baseArmor * armorEff;

        return [baseArmor,armorEff,totalArmor]
    },
    getWeight(index) {
        let baseWeight = valueTables[index].Encumbrance;
        //Stuff that reduces weight can technically put us negative. We need the negative for armor pings, but not for displays
        let adjustedBaseWeight = Math.max(0,baseWeight);
        let weightBoost = 1 + valueTables[index]["Encumbrance%"];
        let totalWeight = +(adjustedBaseWeight * weightBoost).toFixed(2);
        let weightThreshold = +(valueTables[index].WeightThreshold).toFixed(2);
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
        let bulwarkStacks = Math.min(valueTables[index].BulwarkCap,valueTables[index].Bulwark);
        let bulwarkDR = -.005*(bulwarkStacks**2) + .075*bulwarkStacks;
        let otherFlat = valueTables[index].FlatDR;
        let totalFlat = bulwarkDR+otherFlat;
        //Total DR
        let totalDR = 1-(1-armorDR)*(1-totalFlat);

        return [armorDR,bulwarkStacks,bulwarkDR,otherFlat,totalFlat,totalDR]
    },
    getResistance(index) {
        let bleed = valueTables[index].Bleed * (1+valueTables[index]["Bleed%"]);
        let burn = valueTables[index].Burn * (1+valueTables[index]["Burn%"]);
        let shock = valueTables[index].Shock * (1+valueTables[index]["Shock%"]);
        let corrosive = valueTables[index].Corrosive * (1+valueTables[index]["Corrosive%"]);
        let blight = valueTables[index].Blight * (1+valueTables[index]["Blight%"]);

        return [bleed,burn,shock,corrosive,blight]
    },
    getHealing(index) {
        //this is for shit like game master's pride, it's a global multi modifier
        let globalHealingMod = valueTables[index].GlobalHealingEff;
        //BOOSTS---
        let healingEffectiveness = valueTables[index].HealingEFF;
        //REGENERATION---
        let flatHPperSec = valueTables[index]["HP/S+"] * (1+healingEffectiveness) * globalHealingMod;
        let percHPperSec = valueTables[index]["HP/S%"] * (1+healingEffectiveness) * globalHealingMod;
        //GREY HEALTH
        let greyHPperSec = 0.2 + valueTables[index]["GreyHP/S+"];
        let greyPercHPperSec = valueTables[index]["GreyHP/S%"];
        let totalGreyHPperSec = greyHPperSec * (1+greyPercHPperSec);

        return [globalHealingMod,healingEffectiveness,flatHPperSec,percHPperSec,totalGreyHPperSec]
    },
    getLifesteal(index,relicEffectiveness) {
        let lifestealEFF = valueTables[index].LifestealEFF;
        let relicLifesteal = valueTables[index].RelicLifesteal * (1 + (relicEffectiveness || 0));
        let lifestealALL = (valueTables[index].Lifesteal + relicLifesteal) * (1 + lifestealEFF);
        let lifestealMelee = valueTables[index].MLifesteal * (1 + lifestealEFF);
        let lifestealMeleeCharged = valueTables[index].MChargedLifeSteal * (1 + lifestealEFF);
        let lifestealRange = valueTables[index].RLifesteal * (1 + lifestealEFF);

        let newLifestealAll = lifestealALL;
        let newLifestealMelee = lifestealALL + lifestealMelee;
        let newLifestealMeleeCharged = lifestealALL + lifestealMelee + lifestealMeleeCharged;
        let newLifestealRanged = lifestealALL + lifestealRange;

        let peakLifesteal = newLifestealAll;
        peakLifesteal = newLifestealMelee > peakLifesteal ? newLifestealMelee : peakLifesteal;
        peakLifesteal = newLifestealMeleeCharged > peakLifesteal ? newLifestealMeleeCharged : peakLifesteal;
        peakLifesteal = newLifestealRanged > peakLifesteal ? newLifestealRanged : peakLifesteal;

        // console.log(peakLifesteal)

        return [lifestealEFF,lifestealALL,lifestealMelee,lifestealMeleeCharged,lifestealRange,peakLifesteal]
    },
    getStaminaValues(index,staminaPenalty) {
        //STAMINA
        let regenMulti = valueTables[index]["Stamina/S+Multi"] ? valueTables[index]["Stamina/S+Multi"] : 1;
        let staminaPerSec = (33 + valueTables[index]["Stamina/S+"]) * regenMulti;

        let staminaPenaltyAdjustment = Math.max(0,valueTables[index].StaminaPenaltyAdjustment);

        let staminaCost = valueTables[index].StaminaCost + (staminaPenalty * (1-staminaPenaltyAdjustment));
        //If something like bisected it on, or if we go under 0% costs, turn off stamina costs.
        if (valueTables[index].StaminaNegation > 0 || staminaCost < 0) {staminaCost = 0}

        return [staminaPerSec,staminaCost]
    },
    getRelicHealing(index,totalHealth,globalHealingMod,healingEffectiveness) {
        //RELIC HEALING
        //We're taking noGlobal on total health as that is the value that persists with shit like Restriction Cord.
        let relicHPbase = valueTables[index].RelicHPbase * globalHealingMod;
        let relicHPtype = valueTables[index].RelicHPtype;
        let relicHPtime = valueTables[index].RelicHPtime;
        let relicUseTime = valueTables[index].RelicSpeed;
        let relicEffectiveness = valueTables[index].RelicEFF;

        let relicHPscaled = relicHPbase * (1+relicEffectiveness) * (1+healingEffectiveness);

        let relicPercPerSecond;
        let relicFlatPerSecond;

        if (relicHPtype==="%"){
        relicPercPerSecond = (relicHPscaled/relicHPtime);
        relicFlatPerSecond = ((relicHPscaled/relicHPtime)/100)*totalHealth;
        }
        else if (relicHPtype==="P"||relicHPtype==="F") {
        relicPercPerSecond = null;
        relicFlatPerSecond = (relicHPscaled/relicHPtime);
        }
        else {//if null
        relicHPscaled = 0;
        relicHPtime = 0;
        relicPercPerSecond = null;
        relicFlatPerSecond = null;
        }
        let relicComplexArray = formulasValues.callUniqueFunctions(index,"relic",relicHPscaled,totalHealth);

        return [relicHPbase,relicHPtype,relicHPtime,relicHPscaled,relicPercPerSecond,relicFlatPerSecond,relicComplexArray,relicUseTime,relicEffectiveness]
    },
    getAdvancedDR(index,totalDR,totalHealth,totalHealthNoGlobal) {
        //REDUCED ENEMY DAMAGE
        let isUIcalcs = index != "greatTableKnowerOfAll"
        let reducedEnemyDamage = 1;
        for (let i=0;i<=valueTables[index].REdamage.length-1;i++) {
        reducedEnemyDamage = reducedEnemyDamage * (1+valueTables[index].REdamage[i]);
        }
        reducedEnemyDamage += -1;
        //DAMAGE KEPT OR RETAINED(how much gets shared to allies via various sources)
        let damageKept = 1;
        for (let i=0;i<=valueTables[index].DMGKept.length-1;i++) { //ADD GAMEMASTER'S CHECK HERE LATER
            damageKept = damageKept * (1+valueTables[index].DMGKept[i]);
        }
        damageKept += -1;

        //Save the current values to be used in the switch case returns, as we're going to modify the original values after this
        let MODreducedEnemyDamage = reducedEnemyDamage;
        let MODdamageKept = damageKept;
        //Modify the original values to give proper amounts to bonus mitigation and EHP after.
        let useREdamage = !isUIcalcs ? readSelection("includeREdamage").checked : globalRecords.ALTuseNonStandardDR;
        if (!useREdamage){reducedEnemyDamage=1} else {reducedEnemyDamage += 1;}
        let useDMGKept = !isUIcalcs ? readSelection("includeDMGKept").checked : globalRecords.ALTuseNonStandardDR;
        if (!useDMGKept){damageKept=1} else {damageKept += 1;}
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
        let percShields = valueTables[index].Shield;
        let shieldEff = valueTables[index].ShieldEFF;
        let totalPercShields = percShields * (1+shieldEff);
        //noGlobal on HP here, as stuff like restriction cord does not reduce max hp, it only prevents you from HEALING past 50%
        let shieldEHP = baseEHP * totalPercShields;

        return [percShields,shieldEff,totalPercShields,shieldEHP]
    },
    getEHP(index,shieldEHP,baseEHP) {
        let isUIcalcs = index != `greatTableKnowerOfAll`;

        let toggleCheck = !isUIcalcs ? readSelection(`includeShields`).checked : globalRecords.ALTuseShields;
        shieldEHP = toggleCheck ? shieldEHP : 0;
        //----------TOTAL EHP----------------------------------------------------------------------------
        let totalEHP = baseEHP + shieldEHP;

        return [totalEHP]
    },
    getAdvancedHealing(index,baseEHP,regHealing,relicHealing,totalHealthNoGlobal) {
        let isUIcalcs = index != "greatTableKnowerOfAll";
        let toggleCheck;
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
            if (relicHPtype==="P"||relicHPtype==="F") {advancedRelicPerc = 0;advancedRelicFlat = relicHPscaled/relicHPtime;}
            else if (relicHPtype==="%") {advancedRelicPerc = relicHPscaled/relicHPtime;advancedRelicFlat = 0;}
            //If there is no healing type(unique relic like Shielded Heart)
            else {advancedRelicPerc = 0;advancedRelicFlat = 0;}
        }

        let totalHealth = totalHealthNoGlobal;//noGlobal hp here
        let advancedRelicTotalFlat = advancedRelicFlat + (advancedRelicPerc/100)*totalHealth;
        let advancedRelicTotalPerc = ((advancedRelicPerc/100) + advancedRelicFlat/totalHealth) * 100;

        let advancedTotalFlatHP = flatHPperSec + percHPperSec*totalHealth;
        let advancedTotalPercHP = (percHPperSec + flatHPperSec/totalHealth)*100;
        toggleCheck = !isUIcalcs ? readSelection(`includeRelicHealing`).checked : globalRecords.ALTuseRelicHealing;
        if (toggleCheck) {advancedTotalFlatHP += advancedRelicTotalFlat;advancedTotalPercHP += advancedRelicTotalPerc;}

        let EHPpSec = baseEHP * (advancedTotalPercHP/100);

        return [advancedRelicFlat,advancedRelicPerc,advancedRelicTotalFlat,advancedRelicTotalPerc,advancedTotalFlatHP,advancedTotalPercHP,EHPpSec]
    },
}
let abilityDamage = {
    HavocForm(abilityPlacement,index) {
        let reference = valueTables[index];
        let isUIcalcs = index != "greatTableKnowerOfAll";

        let customStats = classInfo.Archon.abilities["Havoc Form"].customStats//path to havoc relevant stats
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
        let totalCritDamage = reference.AllCritDamage;
        let totalCritChance = reference.AllCritChance + reference.ElementalCritChance + reference.SkillCritChance;
        totalCritChance = Math.min(totalCritChance,1)//cap crit chance at 100%
        let avgCritDamage = (baseCritDamage + totalCritDamage) * totalCritChance;

        let minimumPossibleDamage = baseDamage * (1 + totalDamageBonus);
        let maximumPossibleDamage = baseDamage * (1 + totalDamageBonus) + (1 + baseCritDamage + totalCritDamage);


        let trueDPS = trueBaseDPS * (1 + reference.CastSpeed) * (1 + totalDamageBonus) * (1 + avgCritDamage);
        let trueTotalDamage = baseDamage * totalHits * (1 + totalDamageBonus) * (1 + avgCritDamage);

        if (!isUIcalcs) {
            readSelection("havocFormBoxHolder").style.display = "flex"
            abilityPlacement = abilityPlacement === 1 ? "ability1" : "ability2";

            readSelection(`ability1DPS`).innerHTML = trueDPS.toFixed(2);//later make this so it can work with either ability box
            readSelection(`ability1TotalDamage`).innerHTML = trueTotalDamage.toFixed(2);


            (modifiedDuration + entryDuration)
            readSelection("havocFactors").innerHTML = "";
            let drRowsHTML = "<div class='basicsDRheaderTitle'>DURATION FACTORS</div>";
            drRowsHTML += (modifiedDuration + entryDuration) ? createHTML.basicsRow("Duration",(modifiedDuration + entryDuration),false) : "";
            drRowsHTML += entryDuration ? createHTML.basicsRow("Entry Duration",entryDuration.toFixed(2),false) : "";
            drRowsHTML += modifiedDuration ? createHTML.basicsRow("Usable Duration",modifiedDuration.toFixed(2),false) : "";
            drRowsHTML += trueDuration ? createHTML.basicsRow("True Duration",trueDuration.toFixed(2),false) : "";
            drRowsHTML += "<div class='basicsDRheaderTitle'>SPEED FACTORS</div>";
            drRowsHTML += reference.CastSpeed ? createHTML.basicsRow("Cast Speed",reference.CastSpeed,true,"%") : "";
            drRowsHTML += totalHits ? createHTML.basicsRow("Total Hits",totalHits,false) : "";
            drRowsHTML += "<div class='basicsDRheaderTitle'>DAMAGE FACTORS</div>";
            drRowsHTML += "<div class='dpsFactorDisclaimer'>Note that temporary bonuses, for now, are assumed to be active at all times when you have an item that provides it. Jester's bell, EXPOSED, corroded, etc.</div>";
            drRowsHTML += reference.AllDamage ? createHTML.basicsRow("All Damage",reference.AllDamage,true,"%") : "";
            drRowsHTML += reference.SkillDamage ? createHTML.basicsRow("Skill Damage",reference.SkillDamage,true,"%") : "";
            drRowsHTML += reference.ElementalDamage ? createHTML.basicsRow("Elemental Damage",reference.ElementalDamage,true,"%") : "";
            drRowsHTML += reference.ShockDamage ? createHTML.basicsRow("Bulwark Stacks",reference.ShockDamage,true,"%") : "";
            drRowsHTML += totalDamageBonus ? createHTML.basicsRow("Total Damage Bonus",totalDamageBonus,true,"%") : "";
            drRowsHTML += reference.outSLOW ? createHTML.basicsRow("","SLOW",false) : "";
            drRowsHTML += reference.outBLEED ? createHTML.basicsRow("","BLEED",false) : "";
            drRowsHTML += reference.outBURN ? createHTML.basicsRow("","BURN",false) : "";
            drRowsHTML += reference.outCORRODED ? createHTML.basicsRow("","CORRODED",false) : "";
            drRowsHTML += reference.outOVERLOADED ? createHTML.basicsRow("","OVERLOADED",false) : "";
            drRowsHTML += reference.outEXPOSED ? createHTML.basicsRow("","EXPOSED",false) : "";
            drRowsHTML += "<div class='basicsDRheaderTitle'>CRIT FACTORS</div>";
            drRowsHTML += reference.AllCritChance ? createHTML.basicsRow("All Crit Chance",reference.AllCritChance,true,"%") : "";
            drRowsHTML += reference.ElementalCritChance ? createHTML.basicsRow("Elemental Crit Chance",reference.ElementalCritChance,true,"%") : "";
            drRowsHTML += reference.SkillCritChance ? createHTML.basicsRow("Skill Crit Chance",reference.SkillCritChance,true,"%") : "";
            drRowsHTML += totalCritChance ? createHTML.basicsRow("Total Crit Chance",totalCritChance,true,"%") : "";
            drRowsHTML += baseCritDamage ? createHTML.basicsRow("Base Crit Damage",baseCritDamage,true,"%") : "";
            drRowsHTML += reference.AllCritDamage ? createHTML.basicsRow("All Crit Damage",reference.AllCritDamage,true,"%") : "";
            drRowsHTML += (baseCritDamage + totalCritDamage) ? createHTML.basicsRow("Total Crit Damage",(baseCritDamage + totalCritDamage),true,"%") : "";
            drRowsHTML += avgCritDamage ? createHTML.basicsRow("Avg. Bonus from Crit",avgCritDamage,true,"%") : "";
            // drRowsHTML += returnObject.otherFlat ? createHTML.basicsRow("Other Flat",returnObject.otherFlat,true,"%") : "";
            // drRowsHTML += returnObject.totalFlat ? createHTML.basicsRow("Total Flat DR%",returnObject.totalFlat,true,"%") : "";
            drRowsHTML = userTrigger.updateSubstatColor(drRowsHTML);
            readSelection("havocFactors").innerHTML += drRowsHTML;
        }

        return ["Havoc Form",minimumPossibleDamage,maximumPossibleDamage,trueDPS,trueTotalDamage]
    }
}