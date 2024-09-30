let basicsUpdates = {
    pullUserInputs() {
      let teamCount = readSelection("teamCount").value;
      let coopState = readSelection("teamCount").value > 1 ? "Co-op" : "Solo"
  
      globalRecords.teamCount = teamCount
      globalRecords.isCoop = coopState==="Co-op";
  
      let minionCount = readSelection("minionCount").value;
      let spiritHealerStacks = readSelection("spiritHealerStacks").value;
  
      readSelection("teamCountMAIN").innerHTML = teamCount;
      readSelection("minionCountMAIN").innerHTML = minionCount;
      readSelection("spiritHealerStacksMAIN").innerHTML = spiritHealerStacks;
      globalRecords.minionCount = minionCount;
      globalRecords.spiritHealerStacks = spiritHealerStacks;
  
      globalRecords.useREdamage = readSelection("includeREdamage").checked;
      globalRecords.useDMGKept = readSelection("includeDMGKept").checked;
      globalRecords.useRelicHealing = readSelection(`includeRelicHealing`).checked;
      globalRecords.useShields = readSelection(`includeShields`).checked;
  
      globalRecords.enableWeakspots = readSelection(`enableWeakspots`).checked;
      globalRecords.enableCrits = readSelection(`enableCrits`).checked;
  
  
      globalRecords.enemyCount = readSelection("enemyCount").value;
      readSelection("enemyCountMAIN").innerHTML = readSelection("enemyCount").value;
      globalRecords.isEvade = readSelection("isEvade").checked;
      globalRecords.isPerfectDodge = readSelection("perfectDodge").checked;
  
      globalRecords.greyHealthActive = readSelection("greyActive").checked;
      globalRecords.enableEngTurretModes = readSelection("enableEngTurretModes").checked;
    },
    updateMainFromFormulas(returnObject,index) {
        let expandRows = basicsUpdates.expandRowListingInfo;
        let updateFixedValue = formulasValues.updateDisplay;
        let updateTooltip = tooltipMath.updateTooltipDisplay;
  
        let dodgeColor = "";
        switch (returnObject.dodgeClass) {
          case "Flop": dodgeColor = '#e06666'; break;
          case "Heavy": dodgeColor = 'orange'; break;
          case "Medium": dodgeColor = '#90ee90'; break;
          case "Light": dodgeColor = '#93CCEA'; break;
        }


        function updateFixedValueArrays(displayArray) {
          for (let entry of displayArray) {
            updateFixedValue(...entry.updateArray);
            updateTooltip(...entry.tooltipArray);
          }
        }

        const displayArray = [
          {updateArray: ["summaryHealth",returnObject.totalHealth,1],tooltipArray: ["summaryHealthRow","TotalHealth = Health * (1 + Health%Bonus) * (1 - HPReduction1) * (1 - HPReduction2) * [...]",["Health","Health%","GlobalHealthModifier"]]},
          {updateArray: ["summaryStamina",returnObject.totalStamina,1],tooltipArray: ["summaryStaminaRow","TotalStamina = Stamina * (1 + Stamina%Bonus)",["Stamina","Stamina%"]]},
          {updateArray: ["summaryArmor",returnObject.totalArmor,1],tooltipArray: ["summaryArmorRow","TotalArmor = Armor * (1 + ArmorEffectiveness)",["Armor","Armor%"]]},
          {updateArray: ["summaryWeight",returnObject.totalWeight,1],tooltipArray: ["summaryWeightRow",`Current Dodge Class: <span>${returnObject.dodgeClass}</span><br>TotalWeight = Encumbrance * (1 + Encumbrance%)<br><br>`+`Dodge Weight Thresholds:<br>Light <= 25 + SumThresholdModifiers<br>Medium <= 50 + SumThresholdModifiers<br>Heavy <= 75 + SumThresholdModifiers<br>Flop > 75 + SumThresholdModifiers`,["Encumbrance","Encumbrance%","WeightThreshold"]]},
          {updateArray: ["summaryBleed",index.Bleed,0],tooltipArray: ["summaryBleed","Increases your damage reduction against attacks with a damage type of bleed. Multiplicative with TotalDR, but even together they still cannot exceed an 80% sum. Bleed is not considered elemental damage.",["Bleed"]]},
          {updateArray: ["summaryBurn",index.Burn,0],tooltipArray: ["summaryBurn","Increases your damage reduction against attacks with a damage type of fire. Multiplicative with TotalDR, but even together they still cannot exceed an 80% sum.",["Burn"]]},
          {updateArray: ["summaryShock",index.Shock,0],tooltipArray: ["summaryShock","Increases your damage reduction against attacks with a damage type of shock. Multiplicative with TotalDR, but even together they still cannot exceed an 80% sum.",["Shock"]]},
          {updateArray: ["summaryCorrosive",index.Corrosive,0],tooltipArray: ["summaryCorrosive","Increases your damage reduction against attacks with a damage type of acid. Multiplicative with TotalDR, but even together they still cannot exceed an 80% sum.",["Corrosive"]]},
          {updateArray: ["summaryBlight",index.Blight,0],tooltipArray: ["summaryBlight","Increases your damage reduction against attacks with a damage type of blight. Multiplicative with TotalDR, but even together they still cannot exceed an 80% sum. Blight is not considered elemental damage.",["Blight"]]},
          {updateArray: ["effectiveDR",returnObject.effectiveDR*100,2,"%"],tooltipArray: ["EffectiveDRDisplayRow","EffectiveDR = 1 - (1 - TotalDR) * (1 - REDamage) * (1 - DMGKept) * [...]",[]]},
          {updateArray: ["REdamage",returnObject.reducedEnemyDamage*100,2,"%"],tooltipArray: ["REdamageRow","REDamage = 1 - (1 - source1) * (1 - source2) * [...]<br>This is how much the enemy damage gets reduced, separate from damage reduction. These are considered enemy debuffs most of the time.",["REdamage"]]},
          {updateArray: ["DMGKept",returnObject.damageKept*100,2,"%"],tooltipArray: ["DMGKeptRow","DMGKept = 1 - (1 - source1) * (1 - source2) * [...]<br>This is how much damage you keep, based on effects that share damage to other friendly entities.",["DMGKept"]]},
          {updateArray: ["shield%",returnObject.percShields*100,2,"%"],tooltipArray: ["shield%Row",``,["Shield","Shield%/S"]]},
          {updateArray: ["shieldEff",returnObject.shieldEff*100,2,"%"],tooltipArray: ["shieldEffRow",``,["ShieldEFF"]]},
          {updateArray: ["totalShield%",returnObject.totalPercShields*100,2,"%"],tooltipArray: ["totalShield%Row","TotalShieldPercent = BaseShieldPercent * (1 + ShieldEffectiveness)",[]]},
          {updateArray: ["shieldEHP",returnObject.shieldEHP,2],tooltipArray: ["shieldEHPRow","ShieldEHP = (TotalHP / (1 - EffectiveDR)) * TotalShieldPercent",[]]},
          {updateArray: ["EHP",returnObject.totalEHP,2],tooltipArray: ["EHPDisplayRow","EHP = (TotalHP / (1 - EffectiveDR)) * (1 + TotalShieldPercent)",[]]},
          {updateArray: ["advancedFlat",returnObject.flatHPperSec,2],tooltipArray: ["advancedFlatRow","The sum total of all flat-only HP recovery effects, excluding relics.",[]]},
          {updateArray: ["advanced%",returnObject.percHPperSec*100,2,"%"],tooltipArray: ["advanced%Row","The sum total of all %-only HP recovery effects, excluding relics.",[]]},
          {updateArray: ["advancedTotalFlat",returnObject.flatHPperSec + returnObject.percHPperSec*returnObject.totalHealth,2],tooltipArray: ["advancedTotalFlatRow","All healing whether flat or %, excluding relics, converted into <span>flat HP/s</span> representation",[]]},
          {updateArray: ["advancedTotal%",(returnObject.percHPperSec + returnObject.flatHPperSec/returnObject.totalHealth)*100,2,"%"],tooltipArray: ["advancedTotal%Row","All healing whether flat or %, excluding relics, converted into <span>%HP/s</span> representation",[]]},
          {updateArray: ["advancedRelicTotal%",returnObject.advancedRelicTotalPerc,2,"%"],tooltipArray: ["advancedRelicTotal%Row","Relic healing done of any kind, whether flat or %, converted into a <span>%HP/s</span> representation. Toggle this on to include it in calculations.",[]]},
          {updateArray: ["totalHealingFlat",returnObject.advancedTotalFlatHP,2],tooltipArray: ["totalHealingFlatRow","All healing whether flat or %, including relics if the toggle is on, converted into <span>flat HP/s</span> representation",[]]},
          {updateArray: ["totalHealing%",returnObject.advancedTotalPercHP,2,"%"],tooltipArray: ["totalHealing%Row","All healing whether flat or %, including relics if the toggle is on, converted into a <span>%HP/s</span> representation",[]]},
          {updateArray: ["EHP/s",returnObject.EHPpSec,2],tooltipArray: ["EHPPerSecDisplayRow","EHP/s = BaseEHP * %HP/s<br><br><div>%HP/s</div>The sum total of all healing received, even flat healing, converted into a percent of your max health.<br><div>BaseEHP</div>Is your total EHP without any shields.",[]]},
          // {
          //   updateArray: ["summaryHealth",returnObject.totalHealth,1],
          //   tooltipArray: ["summaryHealthRow","TotalHealth = Health * (1 + Health%Bonus) * (1 - HPReduction1) * (1 - HPReduction2) * [...]",["Health","Health%","GlobalHealthModifier"]]
          // },
        ];
        updateFixedValueArrays(displayArray);

        readSelection("relicType").innerHTML = returnObject.relicHPtype;
        updateTooltip("relicTypeRow",`<span>%</span> = Percent healing over time<br><span>P</span> = Passive healing over time<br><span>F</span> = Flat healing, either instantly or over time<br><span>--</span> = Non-standard, and probably does not apply healing but rather some other effect.`,[]);
        updateTooltip("relicScaledRow",`RelicScaledHealing = BaseRelicHealing * (1 + RelicEfficacy) * (1 + HealingEfficacy)`,[]);
        
        updateFixedValue("relicTime",returnObject.relicHPtime,0);
        if (returnObject.relicHPtype==="%"){
          updateFixedValue("relicScaled",returnObject.relicHPscaled,1,"%");
          updateFixedValue("relic%HP/s",returnObject.relicPercPerSecond,1,"%");
          updateFixedValue("relicHP/s",returnObject.relicFlatPerSecond,1);
        }
        else if (returnObject.relicHPtype==="P"||returnObject.relicHPtype==="F") {
          updateFixedValue("relicScaled",returnObject.relicHPscaled,1);
          readSelection("relic%HP/s").innerHTML = "---";
          updateFixedValue("relicHP/s",returnObject.relicFlatPerSecond,1);
        }
        else {//if null
          readSelection("relicScaled").innerHTML = "---";
          readSelection("relic%HP/s").innerHTML = "---";
          readSelection("relicHP/s").innerHTML = "---";
        }

        updateFixedValue("totalBonusMitigation",returnObject.totalBonusMitigation*100,2,"%");
        updateTooltip("totalNonstandardDRRow","BonusMitigation = 1 - (1 - REDamage) * (1 - DMGKept)",[]);

        updateTooltip("greyActiveRow","Is Grey Health present on your healthbar, for the purposes of Grey Health effects?",[]);
        updateTooltip("perfectDodgeRow","When you dodge, are they pefect dodges? Toggling this also means that the calc assumes you are dodging all the time to keep up dodge-based effects.",[]);
        updateTooltip("isEvadeRow","When you dodge, are you doing a roll or are you doing a backstep evasion instead. When toggled on, it assumes the answer is always an evade, not a roll. This is important for some dodge-based effects.",[]);
        updateTooltip("spiritHealerStacksRow","When the Ranged Mutator: Spirit Healer is equipped, how many stacks do you want the calculator to assume that you will have up with 100% uptime, for the purposes of counting its healing?",[]);

        updateTooltip("isEnableEngTurretModes","When using engineer turret abilities, are you actively carrying the weapon or placing it in turret mode? If the latter, then toggle this on so we can calculate accordingly.",[]);
  
        readSelection("summaryWeight").style.color = dodgeColor;
  
        readSelection("basicsInnerBox").innerHTML = "";
        let drHTML = "<div class='basicsDRheaderTitle'>DAMAGE REDUCTION</div>";
        let drRowsHTML = '';
        let rowsListings = [
          {"statName": "baseArmor","statCoverName": "Base Armor","tooltip":"","relevantTags": ["Armor"],"isNotAPercent": true,"roundAnyways": true},
          {"statName": "armorEff","statCoverName": "Armor Effectiveness","tooltip":"ArmorEffectiveness = 1 + ArmorEffBonuses<br>Note that you will always have 100% armor effectiveness by default, the only way that wouldn't be true is if you are afflicted with Lydusa's curse which reduces it by a flat 15%.","relevantTags": ["Armor%"],"condition": (returnObject.armorEff != 1)},
          {"statName": "totalArmor","statCoverName": "Total Armor","tooltip":"TotalArmor = Armor * (1 + ArmorEffectiveness)","relevantTags": ["Armor","Armor%"],"isNotAPercent": true,"roundAnyways": true},
          {"statName": "armorDR","statCoverName": "Armor DR%","tooltip":"ArmorDR = TotalArmor / (TotalArmor + 200)","relevantTags": ["Armor","Armor%"]},
          {"statName": "bulwarkStacks","statCoverName": "Bulwark Stacks","tooltip":"Bulwark stacks have a base limit of 5, but it can be modified.<br>See Bulwark DR statistic tooltip for an equation breakdown.","relevantTags": ["Bulwark"],"isNotAPercent": true,"roundAnyways": true},
          {"statName": "bulwarkDR","statCoverName": "Bulwark %DR","tooltip":"BulwarkDR = -0.005 * (BulwarkStacks^2) + 0.075 * BulwarkStacks<br>Bulwark DR is considered Flat DR.","relevantTags": ["Bulwark"]},
          {"statName": "otherFlat","statCoverName": "Other Flat DR","tooltip":"This is for all sources of Flat DR that do not originate from Bulwark.","relevantTags": ["FlatDR"]},
          {"statName": "totalFlat","statCoverName": "Total Flat DR%","tooltip":"TotalFlatDR = BulwarkDR + OtherFlatDR","relevantTags": ["FlatDR","Bulwark"]},
        ]
        drRowsHTML += expandRows(rowsListings,returnObject);
  
        let drSumHTML = `<div class="basicsDRsumContainer hasHoverTooltip" id="totalDRRow">
             <span class="basicsTotalDR">TOTAL DR:</span><span class="basicsTotalDRsum" id="totalDR">${(returnObject.totalDR*100).toFixed(2)}%</span>
         </div>
         <br>`
         updateTooltip(
          "totalDRRow",
          "TotalDR = 1 - (1 - ArmorDR) * (1 - FlatDR)<br><br>TotalDR caps at 80%<br>TotalDR is multiplicative against Resistance-based damage reduction when hit by a non-physical attack, but even together they still can't exceed an 80% sum. Given the contextual nature of Resistance-based DR, it is not factored in this number.",
          ["FlatDR","Bulwark","Armor","Armor%"]
        )
        readSelection("basicsInnerBox").innerHTML += drRowsHTML ? drHTML + drRowsHTML + drSumHTML : "";
        if (drRowsHTML) {
          //Adjust total DR color based on amount.
        if (returnObject.totalDR>0.8){readSelection("totalDR").style.color = "#e06666"}
        else {readSelection("totalDR").style.color = "white"}
        }
  
        let healingHTML = "<div class='basicsDRheaderTitle'>HEALTH</div>";
        let healingHTMLRowsHTML = '';
        rowsListings = [//totalHealth,totalHealthNoGlobal
          {"statName": "flatHPperSec","statCoverName": "Flat HP/s","tooltip":"","relevantTags": ["HP/S+"],"isNotAPercent": true,"roundAnyways": true},
          {"statName": "percHPperSec","statCoverName": "% HP/s","tooltip":"","relevantTags": ["HP/S%"]},
          {"statName": "relicEffectiveness","statCoverName": "Relic Effectiveness","tooltip":"This is a boost to all relic-based healing and/or some relic specific effects.","relevantTags": ["RelicEFF"]},

          {"statName": "relicCharges","statCoverName": "Relic Charges","tooltip":"Base Relic Charges: 10<br>This value will only show up if your charge count would be anything other than the base 10. This is simply how many relic charges you have available on your given relic, at max capacity.<br><br>If the value would ever include a decimal, it will always round down to the nearest whole like the game does, as you can't have a partial relic charge.","relevantTags": ["RelicCharges","RelicCharges%","RelicChargesOverride"],"isNotAPercent": true,"roundAnyways": true,"condition": (returnObject.relicCharges != 10)},
          {"statName": "relicChance","statCoverName": "Relic Use-Chance","tooltip":"This is the chance you have to consume a relic on use.<br><br>A chance of 0% means you won't consume a relic on use. On the flip side, 100% means you are guaranteed to consume a relic on use.<br>Cannot go lower than 0%.","relevantTags": ["RelicUseChance"],"condition": (returnObject.relicChance != 1)},

          {"statName": "healingEffectiveness","statCoverName": "Healing Effectiveness","tooltip":"This is a boost to all healing done of any kind. Grey Health regen and lifesteal do not count as healing.<br>Multiplicative against RelicEff when calculated.","relevantTags": ["HealingEFF"]},
          {"statName": "totalBaseHealth","statCoverName": "Base Health","tooltip":"BaseHealth = 100 + FlatHealth<br><br>This is your total base health before any % bonuses or reductions come into play.","relevantTags": ["Health"],"isNotAPercent": true,"roundAnyways": true,"condition": (returnObject.totalBaseHealth != 100)},
          {"statName": "percentHealthMulti","statCoverName": "Health% Multi","tooltip":"HealthPercentMulti = 1 + HealthPercentBonuses<br><br>This is the total health multiplier that applies to your Base Health, from positive bonuses.","relevantTags": ["Health%"],"isNotAPercent": true,"roundAnyways": true,"condition": (returnObject.percentHealthMulti != 1)},
          {"statName": "globalCap","statCoverName": "Reduction Multi","tooltip":"This is the reduction multiplier that applies to your total health after flat HP and % bonuses. This modifies your actual Max Health, when considering Shields or Healing % amounts.","relevantTags": ["GlobalHealthModifier"],"isNotAPercent": true,"roundAnyways": true,"condition": (returnObject.globalCap != 1)},
          {"statName": "healthCap","statCoverName": "Health% Cap","tooltip":"This is the % maximum health you can have on your HP bar at any given time.<br><br>Note that this does NOT reduce your Max Health when considering Healing or Shield factors, this only prevents you from healing past a certain %HP threshold, like Restriction Cord.","relevantTags": ["HealthCap"],"condition": (returnObject.healthCap != 1)},
          {"statName": "totalHealthNoGlobal","statCoverName": "Max Health","tooltip":"MaxHealth = BaseHealth * Health%Multi * Reduction Multi<br><br>This is your true, end total Max Health. Even if you have a Health Cap in effect, Shields and Healing will still go off of this value, not the Capped Health value.","relevantTags": ["Health","Health%","GlobalHealthModifier"],"isNotAPercent": true,"roundAnyways": true,"condition": (returnObject.totalHealthNoGlobal != 100)},
          {"statName": "totalHealth","statCoverName": "Capped Health","tooltip":"CappedHealth = MaxHealth * Health%Cap<br><br>This is your end total HP after HP reduction and cap multipliers take effect on your total health. This is NOT your Max Health, it is simply how much health you have when capped. Healing and Shields still go off of your true Max Health.","relevantTags": ["Health","Health%","GlobalHealthModifier","HealthCap"],"isNotAPercent": true,"roundAnyways": true,"condition": (returnObject.totalHealth < returnObject.totalHealthNoGlobal)},
        ]
        healingHTMLRowsHTML += expandRows(rowsListings,returnObject);
        readSelection("basicsInnerBox").innerHTML += healingHTMLRowsHTML ? healingHTML + healingHTMLRowsHTML : "";
  
        let greyHealthHTML = "<div class='basicsDRheaderTitle'>GREY HEALTH</div>";
        let greyHealthHTMLRows = "";
        rowsListings = [
          {"statName": "greyConversionRate","statCoverName": "Grey Health Conversion","tooltip":"GreyHealthConversion = BaseRate * (1 + ConversionBonuses)<br>BaseRate = 50%<br><br>This is the rate at which damaged or lost health, is converted to Grey Health when you take damage. If you take 50 damage and have 50% conversion, that means you'll still take 50 damage and lose 50 health, but you'll also get 25 Grey Health on your bar that can regenerate slowly over time. Grey Health can be lost on your bar if you get hit more than your threshold amount allows for.<br><br>You cannot exceed 100% Conversion Rate.","relevantTags": ["GreyHealthConversion"],"condition": (returnObject.greyConversionRate != 0.5)},
          {"statName": "greyHitThreshold","statCoverName": "Grey-Hit Threshold","tooltip":"This is the threshold of hits after which you will lose Grey Health accrued in your health bar. By default, the threshold is 0 meaning if you get hit with any Grey Health on your bar it will be lost.","relevantTags": ["GreyHPHitThreshold"],"isNotAPercent": true,"roundAnyways": true},
          {"statName": "totalGreyHPperSec","statCoverName": "Grey Health/s","tooltip":"This regen is only applicable when Grey Health is actually present on your healthbar.<br>0.2/s is the default regen rate. Note that Grey Health Rate is NOT the regen rate, it is the CONVERSION rate. See Conversion Rate tooltip for details.<br><br>Grey Health regen does not count as 'Healing' when factoring Healing Effectiveness.","relevantTags": ["GreyHP/S%","GreyHP/S+"],"isNotAPercent": true,"roundAnyways": true, "condition": (returnObject.totalGreyHPperSec != 0.2)},
        ]
        greyHealthHTMLRows += expandRows(rowsListings,returnObject);
        readSelection("basicsInnerBox").innerHTML += greyHealthHTMLRows ? greyHealthHTML + greyHealthHTMLRows : "";
  
        let lifestealHTML = "<div class='basicsDRheaderTitle'>LIFESTEAL</div>";
        let lifestealHTMLRowsHTML = '';
        rowsListings = [//"RelicLifesteal"
          {"statName": "lifestealEFF","statCoverName": "Effectiveness","tooltip":"This is a %Bonus applied to all forms of lifesteal available to you.","relevantTags": ["LifestealEFF"]},
          {"statName": "lifestealALL","statCoverName": "All","tooltip":"This is the Lifesteal that applies to the base(level 0) damage of all outgoing player damage.<br>Includes relic-based lifesteal if a relic provides it.","relevantTags": ["Lifesteal","LifestealEFF"]},
          {"statName": "lifestealMelee","statCoverName": "Melee","tooltip":"This is the Lifesteal that applies to the base(level 0) damage of all outgoing melee damage.","relevantTags": ["MLifesteal","LifestealEFF"]},
          {"statName": "lifestealMeleeCharged","statCoverName": "Melee (Charged)","tooltip":"This is the Lifesteal that applies to the base(level 0) damage of all outgoing charged melee damage.","relevantTags": ["MChargedLifesteal","LifestealEFF"]},
          {"statName": "lifestealRange","statCoverName": "Ranged","tooltip":"This is the Lifesteal that applies to the base(level 0) damage of all outgoing ranged damage.","relevantTags": ["RLifesteal","LifestealEFF"]},
          // {"statName": "baseArmor","statCoverName": "Base","tooltip":"","relevantTags": ["Armor"],"isNotAPercent": true,"roundAnyways": true},
        ]
        lifestealHTMLRowsHTML += expandRows(rowsListings,returnObject);
        readSelection("basicsInnerBox").innerHTML += lifestealHTMLRowsHTML ? lifestealHTML + lifestealHTMLRowsHTML : "";
  
        let staminaHTML = "<div class='basicsDRheaderTitle'>STAMINA</div>";
        let staminaHTMLRowsHTML = '';
        rowsListings = [//evadeCost,meleeCost
          {"statName": "staminaPerSec","statCoverName": "Regen/s","tooltip":"StaminaRegen/s = Stamina/s * Stamina/sMultipliers<br>DefaultRegen = 33/s<br><br>A good example of a stamina/s multiplier would be Drakestone Pearl as it reduces regen to 1/5th of the normal rate.","relevantTags": ["Stamina/S+","Stamina/S+Multi"],"isNotAPercent": true,"roundAnyways": true,"condition": (returnObject.staminaPerSec != 33)},
          {"statName": "evadeCost","statCoverName": "Evade Cost%","tooltip":"This is a multiplier against the Evade's base cost of 25, BEFORE the general stamina cost multiplier takes effect.<br><br>Cannot go lower than 0%, as an action cannot go negative cost and refund you.","relevantTags": ["EvadeCost"],"condition": (returnObject.evadeCost != 1)},
          {"statName": "meleeCost","statCoverName": "Melee Cost%","tooltip":"This is a multiplier against any given melee action's base cost, BEFORE the general stamina cost multiplier takes effect.<br><br>Cannot go lower than 0%, as an action cannot go negative cost and refund you.","relevantTags": ["ChargeCost"],"condition": (returnObject.meleeCost != 1)},
          {"statName": "adjustedPenalty","statCoverName": "Weight Penalty%","tooltip":"Penalty = WeightPenalty * (1 + PenaltyModifier)<br>This is the overall stamina cost penalty applied by a given weight category.<br><br>Default values of:<br>Light - 0%<br>Medium - 25%<br>Heavy - 50%<br>Flop - 75%<br><br>Cannot be modified by general cost reductions, but CAN be modified by penalty reductions like Verdant Tea.","relevantTags": ["StaStaminaPenaltyAdjustment","Encumbrance","Encumbrance%","WeightThreshold"]},
          {"statName": "staminaCost","statCoverName": "General Cost%","tooltip":"StaminaCost = CostModifiers + WeightPenalty<br>Has a base value of 1.0 or 100%.<br>This is the stamina cost multiplier applied to any given action.<br><br>Note that this does NOT add with action specific cost reductions like Evade Cost or Melee Cost, those are separate multipliers that this stat will apply to multiplicatively, but never additively.<br><br>Cannot go lower than 0%, as an action cannot go negative cost and refund you.","relevantTags": ["StaminaCost","StaminaPenaltyAdjustment","Encumbrance","Encumbrance%","WeightThreshold"],"condition": (returnObject.staminaCost != 1)},
          {"statName": "evadePrice","statCoverName": "Evade Price","tooltip":"EvadePrice = BaseCost * EvadeCost% * OverallCost%<br>BaseCost = 25 stamina<br><br>Note that the action specific cost reductions are MULTIPLICATIVE with general stamina cost modifiers, they are not additive.","relevantTags": ["StaminaCost","EvadeCost","StaminaPenaltyAdjustment","Encumbrance","Encumbrance%","WeightThreshold"],"isNotAPercent": true,"roundAnyways": true,"condition": (returnObject.evadePrice != 25)},
          // {"statName": "baseArmor","statCoverName": "Base","tooltip":"","relevantTags": ["Armor"],"isNotAPercent": true,"roundAnyways": true},
        ]
        staminaHTMLRowsHTML += expandRows(rowsListings,returnObject);
        readSelection("basicsInnerBox").innerHTML += staminaHTMLRowsHTML ? staminaHTML + staminaHTMLRowsHTML + "<br>" : "";
  
        readSelection("basicsInnerBox").innerHTML += `
        <div class="basicsDamageRows" id="basicsDamageRows"></div>
        <div class="basicsDamageRows" id="basicsCritChance"></div>
        <div class="basicsDamageRows" id="basicsCritDamage"></div>
        <div class="basicsDamageRows" id="basicsWeakspot"></div>
        <div class="basicsDamageRows" id="basicsActionSpeed"></div>
        <div class="basicsDamageRows" id="basicsStatusOut"></div>
        <div class="basicsDamageRows" id="basicsStatusIn"></div>
        <div class="basicsDamageRows" id="basicsMisc"></div>`;
        
        basicsUpdates.damageRows(index);
        basicsUpdates.criticalChance(index);
        basicsUpdates.criticalDamage(index);
        basicsUpdates.weakspot(index);
        basicsUpdates.actionSpeed(index);
    
        basicsUpdates.statusOut(index);
        basicsUpdates.statusIn(index);
    
        basicsUpdates.misc(index);
    },
    damageRows(index) {
      let damageRows = readSelection("basicsDamageRows");
      let table = index;
      let damageHeader = `<div class="basicsDRheaderTitle">DAMAGE</div>`;
      let list = ``;
  
      let rowsListings = [
        {"statName": "AllDamage","statCoverName": "","tooltip":"","relevantTags": ["AllDamage","outCORRODED","outEXPOSED"]},
        {"statName": "RangedDamage","statCoverName": "","tooltip":"","relevantTags": ["RangedDamage"]},
        {"statName": "SkillDamage","statCoverName": "","tooltip":"","relevantTags": ["SkillDamage"]},
        {"statName": "MeleeDamage","statCoverName": "","tooltip":"","relevantTags": ["MeleeDamage"]},
        {"statName": "ChargeDamage","statCoverName": "","tooltip":"","relevantTags": ["ChargeDamage"]},
        {"statName": "BackstepDamage","statCoverName": "","tooltip":"","relevantTags": ["BackstepDamage"]},
        {"statName": "FistDamage","statCoverName": "","tooltip":"","relevantTags": ["FistDamage"]},
        {"statName": "MeleeSpecialAbilityDamage","statCoverName": "Special Melee","tooltip":"This is the damage bonus applicable to special melee weapon abilities that require damage threshold build-ups, in particular this applies to Red Doe Staff's special charged effect. This does NOT apply to generalized melee projectiles or effects","relevantTags": ["MeleeSpecialAbilityDamage"]},
        {"statName": "CorrosiveDamage","statCoverName": "","tooltip":"","relevantTags": ["CorrosiveDamage"]},
        {"statName": "AcidDamage","statCoverName": "","tooltip":"","relevantTags": ["AcidDamage"]},
        {"statName": "BurningDamage","statCoverName": "","tooltip":"","relevantTags": ["BurningDamage"]},
        {"statName": "FireDamage","statCoverName": "","tooltip":"","relevantTags": ["FireDamage"]},
        {"statName": "ElementalDamage","statCoverName": "","tooltip":"","relevantTags": ["ElementalDamage"]},
        {"statName": "ShockDamage","statCoverName": "","tooltip":"","relevantTags": ["ShockDamage"]},
        {"statName": "OverloadedDamage","statCoverName": "","tooltip":"","relevantTags": ["OverloadedDamage"]},
        {"statName": "ExplosiveDamage","statCoverName": "","tooltip":"","relevantTags": ["ExplosiveDamage"]},
        {"statName": "StatusDamage","statCoverName": "","tooltip":"","relevantTags": ["StatusDamage"]},
        {"statName": "MeleeStatusDamage","statCoverName": "","tooltip":"","relevantTags": ["MeleeStatusDamage"]},
        {"statName": "ModDamage","statCoverName": "","tooltip":"","relevantTags": ["ModDamage"]},
        {"statName": "StaggerDamage","statCoverName": "","tooltip":"","relevantTags": ["StaggerDamage"]},
        {"statName": "SummonDamage","statCoverName": "","tooltip":"","relevantTags": ["SummonDamage"]},
        {"statName": "UniqueMulti","statCoverName": "Unique Multi","tooltip":"This is the composite, multiplicative sum of any generalized unique multipliers that would factor into any given damage equation. Right now this particular stat is only going to show if Brightstone is equipped or not.","relevantTags": ["UniqueMulti"],"isNotAPercent": true,"roundAnyways": true,"condition": (table.UniqueMulti != 1)},
      ]
  
      list += basicsUpdates.expandRowListingInfo(rowsListings,table);
  
      if (list != "") {list = userTrigger.updateSubstatColor(list);damageHeader+=list}
      else {damageHeader = ""}
      damageRows.innerHTML = damageHeader;
    },
    criticalChance(index) {
      let damageRows = readSelection("basicsCritChance");
      let table = index;
      let damageHeader = `<div class="basicsDRheaderTitle">CRIT CHANCE</div>`;
      let list = ``;
  
      let rowsListings = [
        {"statName": "AllCritChance","statCoverName": "","tooltip":"","relevantTags": ["AllCritChance"]},
        {"statName": "RangedCritChance","statCoverName": "","tooltip":"","relevantTags": ["RangedCritChance"]},
        {"statName": "MeleeCritChance","statCoverName": "","tooltip":"","relevantTags": ["MeleeCritChance"]},
        {"statName": "ChargeCritChance","statCoverName": "","tooltip":"","relevantTags": ["ChargeCritChance"]},
        {"statName": "SkillCritChance","statCoverName": "","tooltip":"","relevantTags": ["SkillCritChance"]},
        {"statName": "ElementalCritChance","statCoverName": "","tooltip":"","relevantTags": ["ElementalCritChance"]},
        {"statName": "ModCritChance","statCoverName": "","tooltip":"","relevantTags": ["ModCritChance"]},
        {"statName": "ExplosiveCritChance","statCoverName": "","tooltip":"","relevantTags": ["ExplosiveCritChance"]},
        {"statName": "FirearmCritChance","statCoverName": "","tooltip":"","relevantTags": ["FirearmCritChance"]},
        {"statName": "BowCritChance","statCoverName": "","tooltip":"","relevantTags": ["BowCritChance"]},
        {"statName": "PrimaryCritChance","statCoverName": "","tooltip":"","relevantTags": ["PrimaryCritChance"]},
        {"statName": "SecondaryCritChance","statCoverName": "","tooltip":"","relevantTags": ["SecondaryCritChance"]},
      ]
  
      list += basicsUpdates.expandRowListingInfo(rowsListings,table);
  
      if (list != "") {list = userTrigger.updateSubstatColor(list);damageHeader+=list}
      else {damageHeader = ""}
      damageRows.innerHTML = damageHeader;
    },
    criticalDamage(index) {
      let damageRows = readSelection("basicsCritDamage");
      let table = index;
      let damageHeader = `<div class="basicsDRheaderTitle">CRIT DAMAGE</div>`;
      let list = ``;
  
      damageHeader += createHTML.basicsRow("baseCritDamageRow","Base Bonus",0.50,true,"%");
      tooltipMath.updateTooltipDisplay(
        "baseCritDamageRow",
        "Players have a base crit damage of 50%, or, 1.5x.",
        []
      );
  
      let rowsListings = [
        {"statName": "AllCritDamage","statCoverName": "","tooltip":"","relevantTags": ["AllCritDamage"]},
        {"statName": "RangedCritDamage","statCoverName": "","tooltip":"","relevantTags": ["RangedCritDamage"]},
        {"statName": "MeleeCritDamage","statCoverName": "","tooltip":"","relevantTags": ["MeleeCritDamage"]},
        {"statName": "ChargeCritDamage","statCoverName": "","tooltip":"","relevantTags": ["ChargeCritDamage"]},
      ]
  
      list += basicsUpdates.expandRowListingInfo(rowsListings,table);
  
      if (list != "") {list = userTrigger.updateSubstatColor(list);damageHeader+=list}
      else {damageHeader = ""}
      damageRows.innerHTML = damageHeader;
    },
    weakspot(index) {
      let damageRows = readSelection("basicsWeakspot");
      let table = index;
      let damageHeader = `<div class="basicsDRheaderTitle">WEAKSPOT</div>`;
      let list = ``;
  
      damageHeader += createHTML.basicsRow("baseWeakspotRow","Base Bonus",1,true,"%")
      tooltipMath.updateTooltipDisplay(
        "baseWeakspotRow",
        "Players have a base weakspot damage bonus of 100%, or, 2x.",
        []
      )
  
      let rowsListings = [
        {"statName": "AllWeakspot","statCoverName": "","tooltip":"","relevantTags": ["AllWeakspot"]},
        {"statName": "SkillWeakspot","statCoverName": "","tooltip":"","relevantTags": ["SkillWeakspot"]},
        {"statName": "RangedWeakspot","statCoverName": "","tooltip":"","relevantTags": ["RangedWeakspot"]},
        {"statName": "MeleeWeakspot","statCoverName": "","tooltip":"","relevantTags": ["MeleeWeakspot"]},
        {"statName": "ChargeWeakspot","statCoverName": "","tooltip":"","relevantTags": ["ChargeWeakspot"]},
      ]
  
      list += basicsUpdates.expandRowListingInfo(rowsListings,table);
  
      if (list != "") {list = userTrigger.updateSubstatColor(list);damageHeader+=list}
      else {damageHeader = ""}
      damageRows.innerHTML = damageHeader;
    },
    actionSpeed(index) {
      let damageRows = readSelection("basicsActionSpeed");
      let table = index;
      let damageHeader = `<div class="basicsDRheaderTitle">ACTION SPEED</div>`;
      let list = ``;
  
      // {"statName": "relicUseTime","statCoverName": "Relic Use Speed","tooltip":"","relevantTags": ["RelicSpeed","HASTE"]},
  
      let rowsListings = [
        {"statName": "MovementSpeed","statCoverName": "","tooltip":"","relevantTags": ["MovementSpeed","HASTE"]},
        {"statName": "SprintSpeed","statCoverName": "","tooltip":"","relevantTags": ["SprintSpeed","HASTE"]},
        {"statName": "EnvMovementSpeed","statCoverName": "Vaulting","tooltip":"This is how fast your character moves when wading through water, vaulting over objects, or climbing ladders.","relevantTags": ["EnvMovementSpeed","HASTE"]},
        {"statName": "AimMovementSpeed","statCoverName": "","tooltip":"This is how fast your character walks while aiming down weapon sights.","relevantTags": ["AimMovementSpeed","HASTE"]},
        {"statName": "FireRate","statCoverName": "Fire Rate","tooltip":"","relevantTags": ["FireRate","HASTE"]},
        {"statName": "ReloadSpeed","statCoverName": "","tooltip":"","relevantTags": ["ReloadSpeed","HASTE"]},
        {"statName": "WeaponSwapSpeed","statCoverName": "Swap Speed","tooltip":"","relevantTags": ["WeaponSwapSpeed","HASTE"]},
        {"statName": "AttackSpeed","statCoverName": "","tooltip":"","relevantTags": ["AttackSpeed","HASTE"]},
        {"statName": "ChargeSpeed","statCoverName": "","tooltip":"","relevantTags": ["ChargeSpeed","HASTE"]},
        {"statName": "CastSpeed","statCoverName": "","tooltip":"","relevantTags": ["CastSpeed","HASTE"]},
        {"statName": "RelicSpeed","statCoverName": "Relic Speed","tooltip":"Remember that Relic Speed is not Consumable Speed. All Consumable Speed will add into Relic Speed, but Relic Speed does not add into Consumable Speed.","relevantTags": ["RelicSpeed","HASTE"]},
        {"statName": "ConsumableSpeed","statCoverName": "Consumable Speed","tooltip":"Remember that all Consumable Speed will add into Relic Speed, but Relic Speed does not add into Consumable Speed.","relevantTags": ["ConsumableSpeed","HASTE"]},
      ]
  
      list += basicsUpdates.expandRowListingInfo(rowsListings,table);
  
      if (list != "") {list = userTrigger.updateSubstatColor(list);damageHeader+=list}
      else {damageHeader = ""}
      damageRows.innerHTML = damageHeader;
    },
    statusOut(index) {
      let damageRows = readSelection("basicsStatusOut");
      let table = index;
      let damageHeader = `<div class="basicsDRheaderTitle">STATUS: OUTBOUND</div>`;
      let list = ``;

      let addRow = createHTML.basicsRow;
      let updateTooltip = tooltipMath.updateTooltipDisplay;
  
      let rowsListings = [{"statName": "StatusDuration","statCoverName": "","tooltip":"Status duration bonuses are all multiplicative against eachother.<br>You have a base duration of 100%, but if you have 100%(2x) from Affliction and 100%(2x) from Timekeeper's, then it would be 1 * 2 * 2 = 400% total duration, or a 4x multiplier.","relevantTags": ["StatusDuration"],"condition": (table.StatusDuration != 1)},]
      list += basicsUpdates.expandRowListingInfo(rowsListings,table);
  
      rowsListings = [
        {"statName": "outBLEED","statCoverName": "BLEED","tooltip":"","relevantTags": ["outBLEED"],"isNotAPercent": true},
        {"statName": "outSLOW","statCoverName": "SLOW","tooltip":"","relevantTags": ["outSLOW"],"isNotAPercent": true},
        {"statName": "outBURN","statCoverName": "BURN","tooltip":"","relevantTags": ["outBURN"],"isNotAPercent": true},
        {"statName": "outCORRODED","statCoverName": "CORRODED","tooltip":"Targets suffering from CORROSIVE status effects boost incoming player All Damage by 10% This is additive.","relevantTags": ["outCORRODED"],"isNotAPercent": true},
        {"statName": "outOVERLOADED","statCoverName": "OVERLOADED","tooltip":"","relevantTags": ["outOVERLOADED"],"isNotAPercent": true},
        {"statName": "outEXPOSED","statCoverName": "EXPOSED","tooltip":"Targets suffering from EXPOSED status effects boost incoming player All Damage by 15%. This is additive.","relevantTags": ["outEXPOSED"],"isNotAPercent": true},
      ];
      for (let entry of rowsListings) {
        let percent = entry.isNotAPercent;
        let round = entry.roundAnyways;
        let condition = entry.condition;
        list += (condition || (condition === undefined && table[entry.statName]))
        ? addRow(entry.statName,"",entry.statCoverName,!percent || round,(!percent ? "%" : "")) 
        : "";
        updateTooltip(
          entry.statName,
          entry.tooltip,
          entry.relevantTags
        )
      }
  
      if (list != "") {
        list = userTrigger.updateSubstatColor(list);
        damageHeader+=list;
      }
      else {damageHeader = ""}
      damageRows.innerHTML = damageHeader;
    },
    statusIn(index) {
      let damageRows = readSelection("basicsStatusIn");
      let table = index;
      let damageHeader = `<div class="basicsDRheaderTitle">STATUS: INBOUND</div>`;
      let list = ``;

      let addRow = createHTML.basicsRow;
      let updateTooltip = tooltipMath.updateTooltipDisplay;

      let hasteTooltip = `
      Haste adds a flat, additive 7% bonus to these existing speed stats:
        <ul>
          <li>ConsumableSpeed</li>
          <li>EvadeSpeed</li>
          <li>AttackSpeed</li>
          <li>ChargeSpeed</li>
          <li>FireRate</li>
          <li>CastSpeed</li>
          <li>ReloadSpeed</li>
          <li>MovementSpeed</li>
          <li>SprintSpeed</li>
          <li>CrouchSpeed</li>
          <li>AimMovementSpeed</li>
        </ul>
      Note though, that some of these stats build into other stats as well. For example consumable speed builds into relic speed, movement speed builds into sprint speed technically, etc.
      `;

      let rowsListings = [
        {"statName": "HASTE","statCoverName": "HASTE","tooltip":`${hasteTooltip}`,"relevantTags": ["HASTE"],"isNotAPercent": true},
        {"statName": "inBLEED","statCoverName": "BLEED","tooltip":"Players suffering from BLEED effects will have their sum total Healing Effectiveness cut in half multiplicatively.","relevantTags": ["inBLEED"],"isNotAPercent": true},
        {"statName": "inSLOW","statCoverName": "SLOW","tooltip":"","relevantTags": ["inSLOW"],"isNotAPercent": true},
        {"statName": "inBURN","statCoverName": "BURN","tooltip":"","relevantTags": ["inBURN"],"isNotAPercent": true},
        {"statName": "inCORRODED","statCoverName": "CORRODED","tooltip":"","relevantTags": ["inCORRODED"],"isNotAPercent": true},
        {"statName": "inOVERLOADED","statCoverName": "OVERLOADED","tooltip":"","relevantTags": ["inOVERLOADED"],"isNotAPercent": true},
        {"statName": "inCURSE","statCoverName": "CURSE","tooltip":"","relevantTags": ["inCURSE"],"isNotAPercent": true},
        {"statName": "inMADNESS","statCoverName": "MADNESS","tooltip":"","relevantTags": ["inMADNESS"],"isNotAPercent": true},
        {"statName": "inROOTROT","statCoverName": "ROOT ROT","tooltip":"","relevantTags": ["inROOTROT"],"isNotAPercent": true},
        {"statName": "inDATACORRUPTION","statCoverName": "DATA CORRUPTION","tooltip":"","relevantTags": ["inDATACORRUPTION"],"isNotAPercent": true},
      ];
      for (let entry of rowsListings) {
        let percent = entry.isNotAPercent;
        let round = entry.roundAnyways;
        let condition = entry.condition;
        list += (condition || (condition === undefined && table[entry.statName]))
        ? addRow(entry.statName != "HASTE" ? entry.statName : "inhaste","",entry.statCoverName,!percent || round,(!percent ? "%" : "")) 
        : "";
        updateTooltip(
          entry.statName != "HASTE" ? entry.statName : "inhaste",
          entry.tooltip,
          entry.relevantTags
        )
      }
  
      // list += basicsUpdates.expandRowListingInfo(rowsListings,table);
  
      if (list != "") {list = userTrigger.updateSubstatColor(list);damageHeader+=list;}
      else {damageHeader = ""}
      damageRows.innerHTML = damageHeader;
    },
    misc(index) {
      let damageRows = readSelection("basicsMisc");
      let table = index;
      let damageHeader = `<div class="basicsDRheaderTitle">MISC</div>`;
      let list = ``;
  
      let rowsListings = [//"ConsumableDuration"
        {"statName": "MeleeSpecialAbilityCharge","statCoverName": "Melee Threshold","tooltip":"This is the %threshold modification for special melee ability effects that require a given damage threshold in order to take effect. An example would be Red Doe Staff.","relevantTags": ["MeleeSpecialAbilityCharge"]},
        {"statName": "SummonHealth","statCoverName": "","tooltip":"","relevantTags": ["SummonHealth"]},
        {"statName": "Experience","statCoverName": "%XP Boost","tooltip":"This the %XP boost you gain from your items. This is separate from the %XP gained from being in higher difficulties.","relevantTags": ["Experience"]},
        {"statName": "auraAOE","statCoverName": "AOE Range%","tooltip":"This is a bonus to the range of AOE specific effects. Note that this does not apply to ALL AOE effects.","relevantTags": ["auraAOE"]},
        {"statName": "ConsumableDuration","statCoverName": "","tooltip":"This is a % bonus to quick-use consumable durations. This does not apply to any relic-based effects.","relevantTags": ["ConsumableDuration"]},
        // {"statName": "SummonHealth","statCoverName": "","tooltip":"","relevantTags": ["SummonHealth"]},
      ]
  
      list += basicsUpdates.expandRowListingInfo(rowsListings,table);
  
      if (list != "") {list = userTrigger.updateSubstatColor(list);damageHeader+=list}
      else {damageHeader = ""}
      damageRows.innerHTML = damageHeader;
    },
    expandRowListingInfo(rowsListings,table) {
      let returnString = "";
      let addRow = createHTML.basicsRow;
      let updateTooltip = tooltipMath.updateTooltipDisplay;
      let addSpaces = conditionalHelpers.addSpacesToTagNames;
      
      for (let entry of rowsListings) {
        let percent = entry.isNotAPercent;
        let round = entry.roundAnyways;
        let condition = entry.condition;
        returnString += (condition || (condition === undefined && table[entry.statName]))
        ? addRow(entry.statName,(entry.statCoverName || addSpaces(entry.statName)),table[entry.statName],!percent || round,(!percent ? "%" : "")) 
        : "";
        updateTooltip(
          entry.statName,
          entry.tooltip,
          entry.relevantTags
        )
      }
      return returnString;
    },
    "targetTab": "amuletTab",
    "targetFocus": "amulet",
    updateFocus(tab,fieldToFocus,doNotFocus,subTabToDisplay) {
      basicsUpdates.targetTab = tab ?? basicsUpdates.targetTab
      basicsUpdates.targetFocus = fieldToFocus ?? basicsUpdates.targetFocus;
  
      readSelection("amuletTab").style.display = "none";
      readSelection("ring1Tab").style.display = "none";
      readSelection("ring2Tab").style.display = "none";
      readSelection("ring3Tab").style.display = "none";
      readSelection("ring4Tab").style.display = "none";
  
      readSelection("helmetTab").style.display = "none";
      readSelection("chestTab").style.display = "none";
      readSelection("legTab").style.display = "none";
      readSelection("handTab").style.display = "none";
      readSelection("relicTab").style.display = "none";
  
      readSelection("arch1Tab").style.display = "none";
      readSelection("arch2Tab").style.display = "none";
  
      readSelection("primaryTab").style.display = "none";
      readSelection("meleeTab").style.display = "none";
      readSelection("secondaryTab").style.display = "none";
  
      for (let i=1;i<=globalRecords.totalConcLimit;i++) {readSelection(`concoction${i}Tab`).style.display = "none";}
  
      for (let i=1;i<=globalRecords.greatConsumableRecords.length;i++) {readSelection(`quickUse${i}Tab`).style.display = "none";}
  
      if (basicsUpdates.targetFocus.includes("concoction")) {readSelection("concoctionsMegaBox").style.display = "flex"}
      else {readSelection("concoctionsMegaBox").style.display = "none"}
  
      if (basicsUpdates.targetFocus.includes("quickUse")) {readSelection("quickUsesMegaBox").style.display = "flex"}
      else {readSelection("quickUsesMegaBox").style.display = "none"}
  
      readSelection(basicsUpdates.targetTab).style.display = "flex";
      if (!doNotFocus) {readSelection(basicsUpdates.targetFocus).focus();}//if this isn't just a general formula update, then focus the actual input element, otherwise just keep the displays as they were

      if (subTabToDisplay) {
        // archetype1PrimeTab
        // archetype1AbilityTab
        // archetype1Passive1Tab
        // archetype1Passive2Tab
        // archetype1Passive3Tab
        // archetype1Passive4Tab
        if (subTabToDisplay.includes("archetype1")) {
          readSelection("archetype1PrimeTab").style.display = "none";
          readSelection("archetype1AbilityTab").style.display = "none";
          readSelection("archetype1Passive1Tab").style.display = "none";
          readSelection("archetype1Passive2Tab").style.display = "none";
          readSelection("archetype1Passive3Tab").style.display = "none";
          readSelection("archetype1Passive4Tab").style.display = "none";
        }
        else if (subTabToDisplay.includes("archetype2")) {
          readSelection("archetype2AbilityTab").style.display = "none";
          readSelection("archetype2Passive1Tab").style.display = "none";
          readSelection("archetype2Passive2Tab").style.display = "none";
          readSelection("archetype2Passive3Tab").style.display = "none";
          readSelection("archetype2Passive4Tab").style.display = "none";
        }
        // readSelection("").style.display = "none";
        readSelection(subTabToDisplay).style.display = "flex";
      }
    },
    updateWeakspotDisplayColor(WeakspotDisable) {
      if (WeakspotDisable) {
        readSelection("enableWeakspots").checked = false;
        readSelection("weakspotEnableHolderBox").style.color = "grey";
      }
      else {
        readSelection("weakspotEnableHolderBox").style.color = "white";
      }
    },
    updateSelectedConsumableDurations(index) {
      let durationBonus = 1 + index.ConsumableDuration;
      const concRecords = globalRecords.greatConcoctionRecords;
      const consRecords = globalRecords.greatConsumableRecords;

      for (let i=0;i<concRecords.length;i++) {
        let durationText = readSelection(`concoction${i+1}Duration`);
        let currentConc = concoctions[concRecords[i]];

        if (currentConc.duration) {
          let activeDuration = currentConc.duration * durationBonus;
          let minutes = Math.floor(activeDuration/60);
          let seconds = activeDuration - (minutes*60);

          durationText.innerHTML = `Duration: ${minutes ? minutes.toFixed(0)+"m" : ""} ${(seconds && +seconds.toFixed(0) != 0) ? seconds.toFixed(0)+"s" : ""}`
        }
        else {durationText.innerHTML = "";}
      }

      for (let i=0;i<consRecords.length;i++) {
        let durationText = readSelection(`quickUse${i+1}Duration`);
        let currentCons = quickUses[consRecords[i]];

        if (currentCons.duration) {
          let activeDuration = currentCons.duration * durationBonus;
          let minutes = Math.floor(activeDuration/60);
          let seconds = activeDuration - (minutes*60);

          durationText.innerHTML = `Duration: ${minutes ? minutes.toFixed(0)+"m" : ""} ${(seconds && +seconds.toFixed(0) != 0) ? seconds.toFixed(0)+"s" : ""}`
        }
        else {durationText.innerHTML = "";}
      }
    },
    updateModifiableRangeValues (string,multiplier) {
      return string.replace(/(\d+)mAOE/g, (match, number) => {
        const newNumber = number * multiplier;
        return `${newNumber}m`;
      });
    },
    updateCurrentAbilityDisplayDurations(index) {
      const cappedCDR = Math.max(0.2,1 + index.CDR);
      const skillDuration = 1 + index.SkillDuration;
      const auraRange = 1 + index.auraAOE;
      const skillCharges = index.SkillCharges;

      const updateColorTags = userTrigger.updateSubstatColor;

      const archsRef = globalRecords.archs;
      const ability1 = classInfo[archsRef.one.class].abilities[archsRef.one.ability];
      const ability2 = classInfo[archsRef.two.class].abilities[archsRef.two.ability];
      const accessoryRef = globalRecords.accessories;
      const weaponRef = globalRecords.weapons;

      let descriptionsToModify = [
        {elementID:"primePerkDesc",descriptionPath:classInfo[archsRef.one.class].primePerkDesc},
        {elementID:"archetype1abilityDesc",descriptionPath:classInfo[archsRef.one.class].abilities[archsRef.one.ability].desc},
        {elementID:"archetype2abilityDesc",descriptionPath:classInfo[archsRef.two.class].abilities[archsRef.two.ability].desc},
        {elementID:"amuletDesc",descriptionPath:amulets[accessoryRef.amulet].desc},
        {elementID:"ring1Desc",descriptionPath:rings[accessoryRef.ring1].desc},
        {elementID:"ring2Desc",descriptionPath:rings[accessoryRef.ring2].desc},
        {elementID:"ring3Desc",descriptionPath:rings[accessoryRef.ring3].desc},
        {elementID:"ring4Desc",descriptionPath:rings[accessoryRef.ring4].desc},
        {elementID:"relicDesc",descriptionPath:relics[accessoryRef.relic].desc},
        
        {elementID:"archetype1passive1desc",descriptionPath:classInfo[archsRef.one.class].passives.passive1.desc},
        {elementID:"archetype1passive2desc",descriptionPath:classInfo[archsRef.one.class].passives.passive2.desc},
        {elementID:"archetype1passive3desc",descriptionPath:classInfo[archsRef.one.class].passives.passive3.desc},
        {elementID:"archetype1passive4desc",descriptionPath:classInfo[archsRef.one.class].passives.passive4.desc},

        {elementID:"archetype2passive1desc",descriptionPath:classInfo[archsRef.two.class].passives.passive1.desc},
        {elementID:"archetype2passive2desc",descriptionPath:classInfo[archsRef.two.class].passives.passive2.desc},
        {elementID:"archetype2passive3desc",descriptionPath:classInfo[archsRef.two.class].passives.passive3.desc},
        {elementID:"archetype2passive4desc",descriptionPath:classInfo[archsRef.two.class].passives.passive4.desc},

        {elementID:"primaryDescription",descriptionPath:primaries[weaponRef.primary].desc},
        {elementID:"meleeDescription",descriptionPath:melees[weaponRef.melee].desc},
        {elementID:"secondaryDescription",descriptionPath:secondaries[weaponRef.secondary].desc},

        {elementID:"primaryMutatorDesc",descriptionPath:rangedMutators[weaponRef.primaryMutator].desc},
        {elementID:"meleeMutatorDesc",descriptionPath:meleeMutators[weaponRef.meleeMutator].desc},
        {elementID:"secondaryMutatorDesc",descriptionPath:rangedMutators[weaponRef.secondaryMutator].desc},

        {elementID:"primaryModDesc",descriptionPath:primaries[weaponRef.primary].builtIN ? builtInPrimary[primaries[weaponRef.primary].builtIN].desc : rangedMods[weaponRef.primaryMod].desc},
        {elementID:"meleeModDesc",descriptionPath:melees[weaponRef.melee].builtIN ? builtInMelee[melees[weaponRef.melee].builtIN].desc : ""},
        {elementID:"secondaryModDesc",descriptionPath:secondaries[weaponRef.secondary].builtIN ? builtInSecondary[secondaries[weaponRef.secondary].builtIN].desc : rangedMods[weaponRef.secondaryMod].desc},

        // {findUnit:"",useUnit:"",multiplier:1,elementID:"",descriptionPath:asdf},
      ]

      

      const unitsToLookFor = [
        {findUnit:"SD",useUnit:"s",multiplier:skillDuration},
        {findUnit:"mAOE",useUnit:"m",multiplier:auraRange},
      ]


      function transformString(input,findUnit,useUnit,multiplier) {
        // const regex = new RegExp(`(\\d+)${findUnit}`, 'g');
        const regex = new RegExp(`(\\d+\\.?\\d*)${findUnit}`, 'g');
        return input.replace(regex, (match, number) => {
          const newNumber = (number * multiplier).toFixed(2);
          return `${newNumber}${useUnit}`;
        });
      }

      for (let descriptions of descriptionsToModify) {
        let description = descriptions.descriptionPath;
        for (let filtered of unitsToLookFor) {
          description = transformString(description,filtered.findUnit,filtered.useUnit,filtered.multiplier);
        }
        readSelection(descriptions.elementID).innerHTML = updateColorTags(description);
      }
      


      if (classInfo[archsRef.one.class].cooldown > 0) {readSelection("primePerkCooldown").innerHTML = `Cooldown: ${updateColorTags((classInfo[archsRef.one.class].cooldown * cappedCDR).toFixed(2))}s`}
      else {readSelection("primePerkCooldown").innerHTML = ""}

      if (ability1.cooldown > 0) {readSelection("ability1Cooldown").innerHTML = `Cooldown: ${updateColorTags((ability1.cooldown * cappedCDR).toFixed(2))}s`}
      else {readSelection("ability1Cooldown").innerHTML = ""}
      if (ability2.cooldown > 0) {readSelection("ability2Cooldown").innerHTML = `Cooldown: ${updateColorTags((ability2.cooldown * cappedCDR).toFixed(2))}s`}
      else {readSelection("ability2Cooldown").innerHTML = ""}

      // baseEnergy
      if (ability1.regenRate > 0) {
        const {percentRate,totalAmmoValue,ammoPerSecond} = calcs.getHeavyAmmoRegenValues(index,cappedCDR,ability1.regenRate,ability1.baseEnergy);
        readSelection("ability1RegenRate").innerHTML = `Regen Rate: ${updateColorTags(ammoPerSecond.toFixed(2))}/s (${updateColorTags((percentRate).toFixed(2))}%/s) of ${updateColorTags(totalAmmoValue.toFixed(2))} max`;
      }
      else {readSelection("ability1RegenRate").innerHTML = ""}
      if (ability1.charges && (ability1.charges * skillCharges) > 1) {readSelection("ability1SkillCharges").innerHTML = `Skill Charges: ${updateColorTags((ability1.charges * skillCharges).toFixed(0))}`;}
      else {readSelection("ability1SkillCharges").innerHTML = "";}


      if (ability2.regenRate > 0) {
        const {percentRate,totalAmmoValue,ammoPerSecond} = calcs.getHeavyAmmoRegenValues(index,cappedCDR,ability2.regenRate,ability2.baseEnergy);
        readSelection("ability2RegenRate").innerHTML = `Regen Rate: ${updateColorTags(ammoPerSecond.toFixed(2))}/s (${updateColorTags((percentRate).toFixed(2))}%/s) of ${updateColorTags(totalAmmoValue.toFixed(2))} max`;
      }
      else {readSelection("ability2RegenRate").innerHTML = ""}
      if (ability2.charges && (ability2.charges * skillCharges) > 1) {readSelection("ability2SkillCharges").innerHTML = `Skill Charges: ${updateColorTags((ability2.charges * skillCharges).toFixed(0))}`;}
      else {readSelection("ability2SkillCharges").innerHTML = "";}

      // ability1RegenRate regenRate

      // classInfo[archsRef.one.class].primePerkDesc;
      // userTrigger.updateSubstatColor()
    }
  }
let advancedUpdates = {
  toggleTankStats() {
    let survivabilityStats = readSelection(`tankStatsContainer`);
    let statsToggle = readSelection("tankStatsContainerToggle");
    survivabilityStats.style.display = statsToggle.checked ? "none" : "flex";
  },
  toggleDamageStats() {
    let damageStats = readSelection(`hideBreakdownBoxes`);
    let statsToggle = readSelection("damageStatsContainerToggle");
    damageStats.style.display = statsToggle.checked ? "none" : "flex";
  },
  updateSelectedDamageBreakdown(breakdownClicked) {

    readSelection("ability1BreakdownTab").style.display = "none";
    readSelection("ability2BreakdownTab").style.display = "none";
    readSelection("mod1BreakdownTab").style.display = "none";
    readSelection("mod2BreakdownTab").style.display = "none";
    readSelection("meleeBreakdownTab").style.display = "none";

    if (breakdownClicked === "clear") {
      readSelection("breakdownSelectorMain").style.display = "flex";
      readSelection("breakdownSelectorReturn").style.display = "none"
    }
    else {
      readSelection("breakdownSelectorMain").style.display = "none";
      readSelection("breakdownSelectorReturn").style.display = "flex";
      readSelection(`${breakdownClicked}`).style.display = "flex";
    }
  },
  updateSelectedMeleeBreakdown(breakdownClicked) {
    globalRecords.selectedMeleeBreakdown = breakdownClicked;
    updateFormulas();
  },
  updateSelectedFilterDisplay(elemID) {
    readSelection("statsFiltersHolder").style.display = "none";
    readSelection("occlusionsFiltersHolder").style.display = "none";
    readSelection("locksFiltersHolder").style.display = "none";
    readSelection("searchSettingsHolder").style.display = "none";
    readSelection("traitsSettingsHolder").style.display = "none";
    readSelection("prismSettingsHolder").style.display = "none";

    readSelection(elemID).style.display = "flex";
  }
}