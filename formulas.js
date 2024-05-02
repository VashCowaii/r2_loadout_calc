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
    getLifesteal(index) {
        let lifestealEFF = valueTables[index].LifestealEFF;
        let lifestealALL = valueTables[index].Lifesteal * (1 + lifestealEFF);
        let lifestealMelee = valueTables[index].MLifesteal * (1 + lifestealEFF);
        let lifestealMeleeCharged = valueTables[index].MChargedLifeSteal * (1 + lifestealEFF);
        let lifestealRange = valueTables[index].RLifesteal * (1 + lifestealEFF);

        // let lifestealEFF = valueTables[index].LifestealEFF;
        // let lifestealALL = valueTables[index].Lifesteal * (1 + lifestealEFF);
        // let lifestealMelee = valueTables[index].MLifesteal * (1 + lifestealEFF);
        // let lifestealMeleeCharged = valueTables[index].MChargedLifeSteal * (1 + lifestealEFF);
        // let lifestealRange = valueTables[index].RLifesteal * (1 + lifestealEFF);

        // let newLifestealAll = lifestealALL;
        // let newLifestealMelee = lifestealALL + lifestealMelee;
        // let newLifestealMeleeCharged = lifestealALL + lifestealMelee + lifestealMeleeCharged;
        // let newLifestealRanged = lifestealALL + lifestealRange;

        // let peakLifesteal = newLifestealAll;
        // peakLifesteal = newLifestealMelee > peakLifesteal ? newLifestealMelee : peakLifesteal;
        // peakLifesteal = newLifestealMeleeCharged > peakLifesteal ? newLifestealMeleeCharged : peakLifesteal;
        // peakLifesteal = newLifestealRanged > peakLifesteal ? newLifestealRanged : peakLifesteal;

        let peakLifesteal;


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