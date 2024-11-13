const basicsUpdates = {
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
    updateMainFromFormulas(returnObject,index) {
        let expandRows = basicsUpdates.expandRowListingInfo;
        readSelection("basicsInnerBox").innerHTML = "";
        // let updateFixedValue = formulasValues.updateDisplay;
        // let updateTooltip = tooltipMath.updateTooltipDisplay;

        readSelection("summaryHealth").innerHTML = returnObject.displayHealth.toFixed(3);
        readSelection("summaryShields").innerHTML = returnObject.displayShield.toFixed(3);
        readSelection("summaryDEF").innerHTML = returnObject.displayDEF.toFixed(3);

        //custom resource handling, if there is no MP involved
        const currentCharacter = globalRecords.character.currentCharacter;
        const characterRef = characters[currentCharacter].baseStats;

        if (characterRef.MP > 0) {
            readSelection("summaryMP").innerHTML = returnObject.displayMP.toFixed(3);
            readSelection("resourceDisplayName").innerHTML = "MP";
            readSelection("summaryMP").innerHTML = returnObject.displayMP.toFixed(3);
        }
        //TODO: handle when people have mp and custom resource, like bunny. Hide the mp bar if no mp, but otherwise make visible a separate resource row for shit like this
        else {
            if (characterRef.MagneticForce) {
                readSelection("summaryMP").innerHTML = (returnObject.totalShield * 2).toFixed(3);
                readSelection("resourceDisplayName").innerHTML = "MAG FORCE";
            }
        }



        let skillHTML = "<div class='basicsDRheaderTitle'>SKILL LOGIC</div>";
        let skillHTMLRowsHTML = '';
        rowsListings = [//evadeCost,meleeCost
            {"statName": "SkillCost","statCoverName": "Cost Modifier","tooltip":"Reduces the MP and/or Resource cost of abilities.<br>Positive costs more, negative costs less.","relevantTags": ["SkillCost"],"isNotAPercent": false,"condition": (index.SkillCost != 0)},
            {"statName": "SkillCooldown","statCoverName": "Cooldown Modifier","tooltip":"Reduces the wait-time required between skill casts.<br><br>Maximum of -90% CDR","relevantTags": ["SkillCooldown"],"isNotAPercent": false,"condition": (index.SkillCooldown != 0)},
            {"statName": "SkillDuration","statCoverName": "+%Duration","tooltip":"Extends the active effects of abilities. There is no known limit, but not all effects are modified by duration bonuses.","relevantTags": ["SkillDuration"],"isNotAPercent": false,"condition": (index.SkillDuration != 0)},
            {"statName": "SkillRange","statCoverName": "+%Range","tooltip":"Increase the range of ability effects. Capped at +200%.<br><br>Abilities have their own respective range limits, so an ability with a max expandable range of 250% means that it has a base of 100% and can add 150% more, so if you add 200% range on that it'll only take 150% of it while adhering to the ability-specific limit.","relevantTags": ["SkillRange"],"isNotAPercent": false,"condition": (index.SkillRange != 0)},

            // {"statName": "critRatePercentBonus","statCoverName": "+% Crit Rate","tooltip":"","relevantTags": [],"isNotAPercent": false},
            // {"statName": "critDamagePercentBonus","statCoverName": "+% Crit Damage","tooltip":"","relevantTags": [],"isNotAPercent": false},
            // {"statName": "totalSkillCritRate","statCoverName": "Total Skill CR","tooltip":"","relevantTags": [],"isNotAPercent": false,"condition": (returnObject.totalSkillCritRate != returnObject.baseCharacterCritRate)},
            // {"statName": "totalSkillCritDamage","statCoverName": "Total Skill CD","tooltip":"","relevantTags": [],"isNotAPercent": true,"roundAnyways": true,"condition": (returnObject.totalSkillCritDamage != returnObject.baseCharacterCritDamage)},
        ]
        skillHTMLRowsHTML += expandRows(rowsListings,index);
        readSelection("basicsInnerBox").innerHTML += skillHTMLRowsHTML ? skillHTML + skillHTMLRowsHTML + "<br>" : "";


        let critHTML = "<div class='basicsDRheaderTitle'>SKILL CRIT</div>";
        let critHTMLRowsHTML = '';
        rowsListings = [//evadeCost,meleeCost
            {"statName": "baseCharacterCritRate","statCoverName": "Base Crit Rate","tooltip":"The base critical hit rate provided by your abilities before any bonuses come into play.","relevantTags": [],"isNotAPercent": false},
            {"statName": "baseCharacterCritDamage","statCoverName": "Base Crit Damage","tooltip":"The base critical hit multiplier provided by your abilities before any bonuses come into play.","relevantTags": [],"isNotAPercent": true,"roundAnyways": true},
            {"statName": "baseCritRateBonus","statCoverName": "+Base Rate","tooltip":"A bonus to the base critical hit rate of your abilities, before any % bonuses are factored.","relevantTags": ["SkillCritRateBaseBonus"],"isNotAPercent": false},
            {"statName": "baseCritDamageBonus","statCoverName": "+Base Damage","tooltip":"A bonus to the base critical hit damage multiplier of your abilities, before any % bonuses are factored.","relevantTags": ["SkillCritDamageBaseBonus"],"isNotAPercent": true,"roundAnyways": true},
            {"statName": "critRatePercentBonus","statCoverName": "+% Crit Rate","tooltip":"A multiplier to your total base ability critical hit rate.","relevantTags": ["SkillCritRate"],"isNotAPercent": false},
            {"statName": "critDamagePercentBonus","statCoverName": "+% Crit Damage","tooltip":"A multiplier to your total base ability critical hit damage multiplier.","relevantTags": ["SkillCritDamage"],"isNotAPercent": false},
            {"statName": "totalSkillCritRate","statCoverName": "Total Skill CR","tooltip":"The total critical hit rate of your abilities.<br><br><span>TotalCritRate = (characterBase + baseBonuses) * (1 + percentRateBonuses)</span>","relevantTags": ["SkillCritRate","SkillCritRateBaseBonus"],"isNotAPercent": false,"condition": (returnObject.totalSkillCritRate != returnObject.baseCharacterCritRate)},
            {"statName": "totalSkillCritDamage","statCoverName": "Total Skill CD","tooltip":"The total critical hit damage multiplier for your abilities.<br><br><span>TotalCritMulti = (characterBase + baseBonuses) * (1 + percentMultiBonuses)</span>","relevantTags": ["SkillCritDamage","SkillCritDamageBaseBonus"],"isNotAPercent": true,"roundAnyways": true,"condition": (returnObject.totalSkillCritDamage != returnObject.baseCharacterCritDamage)},
        ]
        critHTMLRowsHTML += expandRows(rowsListings,returnObject);
        readSelection("basicsInnerBox").innerHTML += critHTMLRowsHTML ? critHTML + critHTMLRowsHTML + "<br>" : "";


        const ratioString = "Power Ratios each act as multipliers against all other relevant Ratios. So a Tech/Fire skill would gain Base Power Ratio, Tech Power Ratio, and Fire Power Ratio and all of them would act as individual multipliers for your end total skill power for the relevant skill.<br><br>It is important to remember that Power Ratios are not Power Modifiers, as Power Modifiers all add as one whereas Ratios do not."
        const powerEquationString = "<br><br><span>ApplicableSkillPower = (reactorPower * (1 + PowerOptimizationBonuses) + FactionSkillATK) * RatioProductSum * SumSkillPowerModifier</span>"
        let ratioHTML = "<div class='basicsDRheaderTitle'>POWER RATIO</div>";
        let ratioHTMLRowsHTML = '';
        rowsListings = [
            {"statName": "PowerOptimization","statCoverName": "Power Optimization","tooltip":"Power Optimization applies as a multiplier against the base skill power provided by your reactor, but before any Faction Skill ATK bonuses." + powerEquationString,"relevantTags": ["PowerOptimization"],"isNotAPercent": true,"roundAnyways": true,"condition": (index.PowerOptimization != 1)},
            {"statName": "SkillAttackColossus","statCoverName": "+ATK vs. Colossus","tooltip":"Faction Skill ATK bonuses add in after the Optimization Bonus Multiplier, but before all Ratio or Modifier bonuses take place." + powerEquationString,"relevantTags": ["SkillAttackColossus"],"isNotAPercent": true,"roundAnyways": true,"condition": (index.SkillAttackColossus != 0)},
            {"statName": "PowerRatioBase","statCoverName": "Base Power Ratio","tooltip":ratioString,"relevantTags": ["PowerRatioBase"],"isNotAPercent": true,"roundAnyways": true,"condition": (index.PowerRatioBase != 0)},
            
            {"statName": "PowerRatioNonAttribute","statCoverName": "Non-Attr Power Ratio","tooltip":ratioString,"relevantTags": ["PowerRatioNonAttribute"],"isNotAPercent": true,"roundAnyways": true,"condition": (index.PowerRatioNonAttribute != 0)},
            {"statName": "PowerRatioElectric","statCoverName": "Electric Power Ratio","tooltip":ratioString,"relevantTags": ["PowerRatioElectric"],"isNotAPercent": true,"roundAnyways": true,"condition": (index.PowerRatioElectric != 0)},
            {"statName": "PowerRatioToxic","statCoverName": "Toxic Power Ratio","tooltip":ratioString,"relevantTags": ["PowerRatioToxic"],"isNotAPercent": true,"roundAnyways": true,"condition": (index.PowerRatioToxic != 0)},
            {"statName": "PowerRatioChill","statCoverName": "Chill Power Ratio","tooltip":ratioString,"relevantTags": ["PowerRatioChill"],"isNotAPercent": true,"roundAnyways": true,"condition": (index.PowerRatioChill != 0)},
            {"statName": "PowerRatioFire","statCoverName": "Fire Power Ratio","tooltip":ratioString,"relevantTags": ["PowerRatioFire"],"isNotAPercent": true,"roundAnyways": true,"condition": (index.PowerRatioFire != 0)},
            
            {"statName": "PowerRatioTech","statCoverName": "Tech Power Ratio","tooltip":ratioString,"relevantTags": ["PowerRatioTech"],"isNotAPercent": true,"roundAnyways": true,"condition": (index.PowerRatioTech != 0)},
            {"statName": "PowerRatioDimension","statCoverName": "Dimension Power Ratio","tooltip":ratioString,"relevantTags": ["PowerRatioDimension"],"isNotAPercent": true,"roundAnyways": true,"condition": (index.PowerRatioDimension != 0)},
            {"statName": "PowerRatioSingular","statCoverName": "Singular Power Ratio","tooltip":ratioString,"relevantTags": ["PowerRatioSingular"],"isNotAPercent": true,"roundAnyways": true,"condition": (index.PowerRatioSingular != 0)},
            {"statName": "PowerRatioFusion","statCoverName": "Fusion Power Ratio","tooltip":ratioString,"relevantTags": ["PowerRatioFusion"],"isNotAPercent": true,"roundAnyways": true,"condition": (index.PowerRatioFusion != 0)},
        ]
        ratioHTMLRowsHTML += expandRows(rowsListings,index);
        readSelection("basicsInnerBox").innerHTML += ratioHTMLRowsHTML ? ratioHTML + ratioHTMLRowsHTML + "<br>" : "";


        const modifierString = "Power modifiers of all applicable types add together with with the power modifier provided by a skill. So a tech skill with 500% modifier would gain regular skill power modifiers + tech power modifiers, all added into one number.<br><br>It is important to remember that power modifiers are not power ratios."
        let modifierHTML = "<div class='basicsDRheaderTitle'>POWER MODIFIER</div>";
        let modifierHTMLRowsHTML = '';
        rowsListings = [
            {"statName": "PowerModifierBase","statCoverName": "Base Power Modifier","tooltip":modifierString,"relevantTags": ["PowerModifierBase"],"isNotAPercent": false,"condition": (index.PowerModifierBase != 0)},
            
            {"statName": "PowerModifierNonAttribute","statCoverName": "Non-Attr Power Modifier","tooltip":modifierString,"relevantTags": ["PowerModifierNonAttribute"],"isNotAPercent": false,"condition": (index.PowerModifierNonAttribute != 0)},
            {"statName": "PowerModifierElectric","statCoverName": "Electric Power Modifier","tooltip":modifierString,"relevantTags": ["PowerModifierElectric"],"isNotAPercent": false,"condition": (index.PowerModifierElectric != 0)},
            {"statName": "PowerModifierToxic","statCoverName": "Toxic Power Modifier","tooltip":modifierString,"relevantTags": ["PowerModifierToxic"],"isNotAPercent": false,"condition": (index.PowerModifierToxic != 0)},
            {"statName": "PowerModifierChill","statCoverName": "Chill Power Modifier","tooltip":modifierString,"relevantTags": ["PowerModifierChill"],"isNotAPercent": false,"condition": (index.PowerModifierChill != 0)},
            {"statName": "PowerModifierFire","statCoverName": "Fire Power Modifier","tooltip":modifierString,"relevantTags": ["PowerModifierFire"],"isNotAPercent": false,"condition": (index.PowerModifierFire != 0)},
            
            {"statName": "PowerModifierTech","statCoverName": "Tech Power Modifier","tooltip":modifierString,"relevantTags": ["PowerModifierTech"],"isNotAPercent": false,"condition": (index.PowerModifierTech != 0)},
            {"statName": "PowerModifierDimension","statCoverName": "Dimension Power Modifier","tooltip":modifierString,"relevantTags": ["PowerModifierDimension"],"isNotAPercent": false,"condition": (index.PowerModifierDimension != 0)},
            {"statName": "PowerModifierSingular","statCoverName": "Singular Power Modifier","tooltip":modifierString,"relevantTags": ["PowerModifierSingular"],"isNotAPercent": false,"condition": (index.PowerModifierSingular != 0)},
            {"statName": "PowerModifierFusion","statCoverName": "Fusion Power Modifier","tooltip":modifierString,"relevantTags": ["PowerModifierFusion"],"isNotAPercent": false,"condition": (index.PowerModifierFusion != 0)},
        ]
        modifierHTMLRowsHTML += expandRows(rowsListings,index);
        readSelection("basicsInnerBox").innerHTML += modifierHTMLRowsHTML ? modifierHTML + modifierHTMLRowsHTML + "<br>" : "";




        // let skillAttackHTML = "<div class='basicsDRheaderTitle'>SKILL ATTACK</div>";
        // let skillAttackHTMLRowsHTML = '';
        // rowsListings = [
        //     {"statName": "SkillAttackColossus","statCoverName": "+ATK vs. Colossus","tooltip":"","relevantTags": ["SkillAttackColossus"],"isNotAPercent": true,"roundAnyways": true,"condition": (index.SkillAttackColossus != 0)},
        // ]
        // skillAttackHTMLRowsHTML += expandRows(rowsListings,index);
        // readSelection("basicsInnerBox").innerHTML += skillAttackHTMLRowsHTML ? skillAttackHTML + skillAttackHTMLRowsHTML + "<br>" : "";



        let critGunHTML = "<div class='basicsDRheaderTitle'>FIREARM CRIT</div>";
        let critGunHTMLRowsHTML = '';
        rowsListings = [//evadeCost,meleeCost
            {"statName": "baseFirearmCritRate","statCoverName": "Base Crit Rate","tooltip":"The base critical hit rate provided by your currently selected weapon.","relevantTags": [""],"isNotAPercent": false},
            {"statName": "baseFirearmCritDamage","statCoverName": "Base Crit Damage","tooltip":"The base critical hit multiplier provided by your currently selected weapon.","relevantTags": [],"isNotAPercent": true,"roundAnyways": true},
            {"statName": "baseFirearmCritRateBonus","statCoverName": "+Base Rate","tooltip":"Flat bonuses to the base crit rate of your weapon before % bonuses are factored.","relevantTags": ["FirearmCritRateBase"],"isNotAPercent": false},
            {"statName": "baseFirearmCritDamageBonus","statCoverName": "+Base Damage","tooltip":"Flat bonuses to the base crit multiplier of your weapon before % bonuses are factored.","relevantTags": ["FirearmCritDamageBase"],"isNotAPercent": true,"roundAnyways": true},
            {"statName": "firearmCritRateBonus","statCoverName": "+% Crit Rate","tooltip":"A % multiplier against the sum total base crit rate for your weapon.","relevantTags": ["FirearmCritRate"],"isNotAPercent": false},
            {"statName": "firearmCritDamageBonus","statCoverName": "+% Crit Damage","tooltip":"A % multiplier against the sum total base crit multiplier for your weapon.","relevantTags": ["FirearmCritDamage"],"isNotAPercent": false},
            {"statName": "totalFirearmCritRate","statCoverName": "Total Weapon CR","tooltip":"The sum total critical hit rate for your weapon.<br><br>TotalCritRate = (weaponBase + flatBonuses) * (1 + %CritRateBonuses)","relevantTags": ["FirearmCritRate","FirearmCritRateBase"],"isNotAPercent": false,"condition": (returnObject.totalFirearmCritRate != returnObject.baseFirearmCritRate)},
            {"statName": "totalFirearmCritDamage","statCoverName": "Total Weapon CD","tooltip":"The sum total critical hit multiplier for your weapon.<br><br>TotalCritMulti = (weaponBase + flatBonuses) * (1 + %CritDmgBonuses)","relevantTags": ["FirearmCritDamage","FirearmCritDamageBase"],"isNotAPercent": true,"roundAnyways": true,"condition": (returnObject.totalFirearmCritDamage != returnObject.baseFirearmCritDamage)},
        ]
        critGunHTMLRowsHTML += expandRows(rowsListings,returnObject);
        readSelection("basicsInnerBox").innerHTML += critGunHTMLRowsHTML ? critGunHTML + critGunHTMLRowsHTML + "<br>" : "";


        let wpGunHTML = "<div class='basicsDRheaderTitle'>FIREARM WEAK POINT</div>";
        let wpGunHTMLRowsHTML = '';
        rowsListings = [//evadeCost,meleeCost
            {"statName": "baseWPMulti","statCoverName": "Base Weak Point","tooltip":"This is the base weak point multiplier of your weapon before flat or % bonuses factor.","relevantTags": [],"isNotAPercent": true,"roundAnyways": true},
            {"statName": "weakpointBonus","statCoverName": "+Weak Point %","tooltip":"This is a % multiplier against the sum total base weak point multiplier of your weapon.","relevantTags": ["WeakPointDamage%"],"isNotAPercent": false,"condition": (returnObject.baseWPMulti != 0)},
            {"statName": "bossPartWPBonus","statCoverName": "+End Part Bonus","tooltip":"This is an enemy and part specific bonus applied after all bonuses, as a flat addition to your end-total weak point multiplier. For example, shooting the knee of a colossus might give a different bonus than shooting a shoulder.<br><br><span>You need to adjust which enemy and part you have selected under the ENEMY tab for accurate numbers here</span><br><br>Watch the weapon damage calculation video for a better breakdown on this info.","relevantTags": [],"isNotAPercent": true,"roundAnyways": true,"condition": (returnObject.baseWPMulti != 0)},
            {"statName": "totalWPBonus","statCoverName": "Total Weak Point Multi","tooltip":"The sum total weak point multiplier for your weapon.<br><br><span>TotalWPMulti = ((weaponBase + flatBonuses) * (1 + %WeakPointBonuses)) + EndPartBonus","relevantTags": ["WeakPointDamage%"],"isNotAPercent": true,"roundAnyways": true,"condition": (returnObject.baseWPMulti != 0)},
        ]
        wpGunHTMLRowsHTML += expandRows(rowsListings,returnObject);
        readSelection("basicsInnerBox").innerHTML += wpGunHTMLRowsHTML ? wpGunHTML + wpGunHTMLRowsHTML + "<br>" : "";

        let atkGunHTML = "<div class='basicsDRheaderTitle'>FIREARM ATK</div>";
        let atkGunHTMLRowsHTML = '';
        rowsListings = [//evadeCost,meleeCost
            {"statName": "baseFirearmATK","statCoverName": "Base Weapon ATK","tooltip":"The base FirearmATK amount provided by your weapon.","relevantTags": [],"isNotAPercent": true},
            {"statName": "attackPercent","statCoverName": "+ATK %","tooltip":"A % multiplier against your weapons base FirearmATK amount.","relevantTags": ["FirearmATK%"],"isNotAPercent": false},
            {"statName": "firearmColossusATK","statCoverName": "+Colossus ATK","tooltip":"A bonus to your FirearmATK that applies AFTER the conversion base is calculated, but before the physical type multiplier is applied.","relevantTags": ["ColossusATK"],"isNotAPercent": true,"roundAnyways": true},
            {"statName": "physicalTypeMulti","statCoverName": "Physical Type Multi","tooltip":"This is the multiplier gained by using the correct physical type(crush, pierce, burst) against an enemy. If an enemy is a pierce enemy, they are weak to pierce.<br><br><span>The bonus will say it is 10%, but for colossi only it is actually 20%</span><br>You need to adjust the enemy and part selected under the ENEMY tab to get accurate numbers here.","relevantTags": [],"isNotAPercent": false},
            {"statName": "firearmAttributeConversionBase","statCoverName": "Attribute Conversion Base","tooltip":"The is the amount of firearmATK that is used for attribute conversion mods like the bullet enhancement series that give you a %attributeATK bonus but based on your firearmATK amount. It cannot benefit from the physical type multiplier, weak point bonuses, or faction ATK bonuses.<br><br><span>ConversionBase = baseFirearmATK * (1 + attackPercentBonuses)</span>","relevantTags": [],"isNotAPercent": true,"roundAnyways": true},
            {"statName": "totalFirearmATK","statCoverName": "Total ATK","tooltip":"The sum total FirearmATK used by your weapon for damage against enemies, before crit or weak point multipliers.<br><br><span>SumFirearmATK = (ConversionBase + FactionATK) * (1 + physicalTypeMulti)</span>","relevantTags": ["FirearmATK%","ColossusATK"],"isNotAPercent": true,"roundAnyways": true,"condition": (returnObject.totalFirearmATK != returnObject.baseFirearmATK)},
        ]
        atkGunHTMLRowsHTML += expandRows(rowsListings,returnObject);
        readSelection("basicsInnerBox").innerHTML += atkGunHTMLRowsHTML ? atkGunHTML + atkGunHTMLRowsHTML + "<br>" : "";


        let firearmAttributeHTML = "<div class='basicsDRheaderTitle'>FIREARM ATTRIBUTE</div>";
        let firearmAttributeHTMLRowsHTML = '';
        rowsListings = [
            {"statName": "FireATK","statCoverName": "Base Fire ATK","tooltip":"The amount of flat Fire attribute ATK provided by a weapon substat.","relevantTags": ["FireATK"],"isNotAPercent": true,"condition": (index.FireATK != 0)},
            {"statName": "FireATK%","statCoverName": "Fire ATK Conversion","tooltip":"The % amount taken from the Conversion Base FirearmATK of your weapon, that is addded to the flat attribute ATK.","relevantTags": ["FireATK%"],"isNotAPercent": false,"condition": (index["FireATK%"] != 0)},
            {"statName": "FireATK%Bonus","statCoverName": "+Fire ATK%","tooltip":"A % multiplier to the sum total flat Fire attribute ATK of your weapon.","relevantTags": ["FireATK%Bonus"],"isNotAPercent": false,"condition": (index["FireATK%Bonus"] != 0)},

            {"statName": "ChillATK","statCoverName": "Base Chill ATK","tooltip":"The amount of flat Chill attribute ATK provided by a weapon substat.","relevantTags": ["ChillATK"],"isNotAPercent": true,"condition": (index.ChillATK != 0)},
            {"statName": "ChillATK%","statCoverName": "Chill ATK Conversion","tooltip":"The % amount taken from the Conversion Base FirearmATK of your weapon, that is addded to the flat attribute ATK.","relevantTags": ["ChillATK%"],"isNotAPercent": false,"condition": (index["ChillATK%"] != 0)},
            {"statName": "ChillATK%Bonus","statCoverName": "+Chill ATK%","tooltip":"A % multiplier to the sum total flat Chill attribute ATK of your weapon.","relevantTags": ["ChillATK%Bonus"],"isNotAPercent": false,"condition": (index["ChillATK%Bonus"] != 0)},

            {"statName": "ToxicATK","statCoverName": "Base Toxic ATK","tooltip":"The amount of flat Toxin attribute ATK provided by a weapon substat.","relevantTags": ["ToxicATK"],"isNotAPercent": true,"condition": (index.ToxicATK != 0)},
            {"statName": "ToxicATK%","statCoverName": "Toxic ATK Conversion","tooltip":"The % amount taken from the Conversion Base FirearmATK of your weapon, that is addded to the flat attribute ATK.","relevantTags": ["ToxicATK%"],"isNotAPercent": false,"condition": (index["ToxicATK%"] != 0)},
            {"statName": "ToxicATK%Bonus","statCoverName": "+Toxic ATK%","tooltip":"A % multiplier to the sum total flat Toxin attribute ATK of your weapon.","relevantTags": ["ToxicATK%Bonus"],"isNotAPercent": false,"condition": (index["ToxicATK%Bonus"] != 0)},

            {"statName": "ElectricATK","statCoverName": "Base Electric ATK","tooltip":"The amount of flat Electric attribute ATK provided by a weapon substat.","relevantTags": ["ElectricATK"],"isNotAPercent": true,"condition": (index.ElectricATK != 0)},
            {"statName": "ElectricATK%","statCoverName": "Electric ATK Conversion","tooltip":"The % amount taken from the Conversion Base FirearmATK of your weapon, that is addded to the flat attribute ATK.","relevantTags": ["ElectricATK%"],"isNotAPercent": false,"condition": (index["ElectricATK%"] != 0)},
            {"statName": "ElectricATK%Bonus","statCoverName": "+Electric ATK%","tooltip":"A % multiplier to the sum total flat Electric attribute ATK of your weapon.","relevantTags": ["ElectricATK%Bonus"],"isNotAPercent": false,"condition": (index["ElectricATK%Bonus"] != 0)},
        ]
        firearmAttributeHTMLRowsHTML += expandRows(rowsListings,index);
        readSelection("basicsInnerBox").innerHTML += firearmAttributeHTMLRowsHTML ? firearmAttributeHTML + firearmAttributeHTMLRowsHTML + "<br>" : "";

  
        let healthHTML = "<div class='basicsDRheaderTitle'>HEALTH</div>";
        let healthHTMLRowsHTML = '';
        rowsListings = [//evadeCost,meleeCost
            {"statName": "baseCharacterHealth","statCoverName": "Base HP","tooltip":"The base HP amount provided by your character at lvl 40","relevantTags": [],"isNotAPercent": true,"roundAnyways": true},
            {"statName": "baseHealthBonus","statCoverName": "Flat HP","tooltip":"Flat HP bonuses provided to your character before % bonuses factor","relevantTags": ["HP","boostHPFromShield"],"isNotAPercent": true,"roundAnyways": true},
            {"statName": "healthPercentBonus","statCoverName": "% HP","tooltip":"%HP bonuses that apply as a multiplier to the sum of your flat HP","relevantTags": ["HP%"],"isNotAPercent": false},
            {"statName": "displayHealth","statCoverName": "Total HP","tooltip":"The sum total HP amount for your character.<br><br><span>TotalHP = (characterBase + flatBonuses) * (1 + HP%Bonuses)</span><br><br>If limited and converted for another statistic, the amount converted is obtained before the limit is placed.","relevantTags": ["HP","HP%","boostHPFromShield","boostShieldFromHP","boostDEFFromHP"],"isNotAPercent": true,"roundAnyways": true,"condition": (returnObject.displayHealth != returnObject.baseCharacterHealth)},

        //   {"statName": "baseCharacterHealth","statCoverName": "Base HP","tooltip":"","relevantTags": [],"isNotAPercent": true,"roundAnyways": true},

        //   {"statName": "evadeCost","statCoverName": "","tooltip":"","relevantTags": ["EvadeCost"],"condition": (returnObject.evadeCost != 1)},
        //   {"statName": "meleeCost","statCoverName": "","tooltip":"","relevantTags": ["ChargeCost"],"condition": (returnObject.meleeCost != 1)},
        //   {"statName": "adjustedPenalty","statCoverName": "","tooltip":"","relevantTags": ["StaStaminaPenaltyAdjustment","Encumbrance"]},
        //   {"statName": "staminaCost","statCoverName": "","tooltip":"","relevantTags": ["StaminaCost","StaminaPenaltyAdjustment"],"condition": (returnObject.staminaCost != 1)},
        //   {"statName": "evadePrice","statCoverName": "","tooltip":"","relevantTags": ["StaminaCost","EvadeCost"],"isNotAPercent": true,"roundAnyways": true,"condition": (returnObject.evadePrice != 25)},

          // {"statName": "baseArmor","statCoverName": "Base","tooltip":"","relevantTags": ["Armor"],"isNotAPercent": true,"roundAnyways": true},
        ]
        healthHTMLRowsHTML += expandRows(rowsListings,returnObject);
        readSelection("basicsInnerBox").innerHTML += healthHTMLRowsHTML ? healthHTML + healthHTMLRowsHTML + "<br>" : "";



        let shieldHTML = "<div class='basicsDRheaderTitle'>SHIELD</div>";
        let shieldHTMLRowsHTML = '';
        rowsListings = [//evadeCost,meleeCost
            {"statName": "baseCharacterShield","statCoverName": "Base Shield","tooltip":"The base Shield amount provided by your character at lvl 40","relevantTags": [],"isNotAPercent": true,"roundAnyways": true},
            {"statName": "baseShieldBonus","statCoverName": "Flat Shield","tooltip":"","relevantTags": ["Shield","boostShieldFromHP"],"isNotAPercent": true,"roundAnyways": true},
            {"statName": "shieldPercentBonus","statCoverName": "% Shield","tooltip":"","relevantTags": ["Shield%"],"isNotAPercent": false},
            {"statName": "displayShield","statCoverName": "Total Shield","tooltip":"The sum total Shield amount for your character.<br><br><span>TotalShield = (characterBase + flatBonuses) * (1 + shield%Bonuses)</span><br><br>If limited and converted for another statistic, the amount converted is obtained before the limit is placed.","relevantTags": ["Shield","Shield%","boostShieldFromHP","boostHPFromShield"],"isNotAPercent": true,"roundAnyways": true,"condition": (returnObject.displayShield != returnObject.baseCharacterShield)},
        ]
        shieldHTMLRowsHTML += expandRows(rowsListings,returnObject);
        readSelection("basicsInnerBox").innerHTML += shieldHTMLRowsHTML ? shieldHTML + shieldHTMLRowsHTML + "<br>" : "";


        let DEFHTML = "<div class='basicsDRheaderTitle'>DEF</div>";
        let DEFHTMLRowsHTML = '';
        rowsListings = [//evadeCost,meleeCost
            {"statName": "baseCharacterDEF","statCoverName": "Base DEF","tooltip":"The base DEF amount provided by your character at lvl 40","relevantTags": [],"isNotAPercent": true,"roundAnyways": true},
            {"statName": "baseDEFBonus","statCoverName": "Flat DEF","tooltip":"","relevantTags": ["DEF","boostDEFFromHP"],"isNotAPercent": true,"roundAnyways": true},
            {"statName": "DEFPercentBonus","statCoverName": "% DEF","tooltip":"","relevantTags": ["DEF%"],"isNotAPercent": false},
            {"statName": "displayDEF","statCoverName": "Total DEF","tooltip":"The sum total DEF amount for your character.<br><br><span>TotalDEF = (characterBase + flatBonuses) * (1 + DEF%Bonuses)</span><br><br>If limited and converted for another statistic, the amount converted is obtained before the limit is placed.","relevantTags": ["DEF","DEF%","boostDEFFromHP"],"isNotAPercent": true,"roundAnyways": true,"condition": (returnObject.displayDEF != returnObject.baseCharacterDEF)},
        ]
        DEFHTMLRowsHTML += expandRows(rowsListings,returnObject);
        readSelection("basicsInnerBox").innerHTML += DEFHTMLRowsHTML ? DEFHTML + DEFHTMLRowsHTML + "<br>" : "";


        //TODO: add custom resource calcs here if applicable
        let MPHTML = "<div class='basicsDRheaderTitle'>MP</div>";
        let MPHTMLRowsHTML = '';
        rowsListings = [//evadeCost,meleeCost
            {"statName": "baseCharacterMP","statCoverName": "Base MP","tooltip":"The base MP that your character has to use for abilities at lvl 40.","relevantTags": [],"isNotAPercent": true,"roundAnyways": true},
            {"statName": "baseMPBonus","statCoverName": "Flat MP","tooltip":"Flat bonuses to base character MP before any % bonuses are factored.","relevantTags": ["MP"],"isNotAPercent": true,"roundAnyways": true},
            {"statName": "MPPercentBonus","statCoverName": "% MP","tooltip":"% Bonuses that apply to the sum of your character's MP.","relevantTags": ["MP%"],"isNotAPercent": false},
            {"statName": "displayMP","statCoverName": "Total MP","tooltip":"The sum total MP after all bonuses.<br><br><span>TotalMP = (characterBase + flatMPBonuses) * (1 + MP%Bonuses)</span>","relevantTags": ["MP","MP%"],"isNotAPercent": true,"roundAnyways": true,"condition": (returnObject.displayMP != returnObject.baseCharacterMP)},
        ]
        MPHTMLRowsHTML += expandRows(rowsListings,returnObject);
        readSelection("basicsInnerBox").innerHTML += MPHTMLRowsHTML ? MPHTML + MPHTMLRowsHTML + "<br>" : "";


        let inCombatString = "<br><br>In of combat means you have dealt damage, but not taken any in the last 5 seconds.";
        let outOfCombatString = "<br><br>Out of combat means you have neither dealt nor taken damage for at least 5 seconds."
        let recoveryHTML = "<div class='basicsDRheaderTitle'>RECOVERY</div>";
        let recoveryHTMLRowsHTML = '';
        rowsListings = [//evadeCost,meleeCost
            {"statName": "MPRecoveryModifier","statCoverName": "MP Recovery Mod","tooltip":"A multiplier against all MP recovery applied to your character","relevantTags": ["MPRecovery"],"isNotAPercent": true,"roundAnyways": true},
            {"statName": "baseCharacterMPInCombat","statCoverName": "Base MP in Combat","tooltip":"The base mp recovery in combat provided by your character" + inCombatString,"relevantTags": [],"isNotAPercent": true,"roundAnyways": true},
            {"statName": "baseMPInCombatBonus","statCoverName": "+MP in Combat","tooltip":"Flat bonuses to your character's in combat MP recovery" + inCombatString,"relevantTags": ["MPInCombat"],"isNotAPercent": true,"roundAnyways": true},
            {"statName": "totalMPInCombat","statCoverName": "Total MP in Combat","tooltip":"The sum total of your character's in combat MP recovery" + inCombatString,"relevantTags": ["MPRecovery","MPInCombat"],"isNotAPercent": true,"roundAnyways": true,"condition": (returnObject.totalMPInCombat != returnObject.baseCharacterMPInCombat)},
            
            {"statName": "baseCharacterMPOutCombat","statCoverName": "Base MP Out of Combat","tooltip":"The base MP recovery out of combat provided by your character" + outOfCombatString,"relevantTags": [],"isNotAPercent": true,"roundAnyways": true},
            {"statName": "baseMPOutCombatBonus","statCoverName": "+MP Out of Combat","tooltip":"Flat bonuses to your character's out of combat MP recovery" + outOfCombatString,"relevantTags": ["MPOutCombat"],"isNotAPercent": true,"roundAnyways": true},
            {"statName": "totalMPOutCombat","statCoverName": "Total MP Out of Combat","tooltip":"The total out of combat MP recovery for your character" + outOfCombatString,"relevantTags": ["MPRecovery","MPOutCombat"],"isNotAPercent": true,"roundAnyways": true,"condition": (returnObject.totalMPOutCombat != returnObject.baseCharacterMPOutCombat)},

            {"statName": "shieldRecoveryModifier","statCoverName": "Shield Recovery Mod","tooltip":"A multiplier against all shield recovery applied to your character.","relevantTags": ["ShieldRecovery"],"isNotAPercent": true,"roundAnyways": true},
            {"statName": "baseCharacterShieldInCombat","statCoverName": "Base Shield in Combat","tooltip":"The base shield recovery in combat provided by your character" + inCombatString,"relevantTags": [],"isNotAPercent": true,"roundAnyways": true},
            {"statName": "baseShieldInCombatBonus","statCoverName": "+Shield in Combat","tooltip":"Flat bonuses to your character's in combat shield recovery" + inCombatString,"relevantTags": ["ShieldInCombat"],"isNotAPercent": true,"roundAnyways": true},
            {"statName": "totalShieldInCombat","statCoverName": "Total Shield in Combat","tooltip":"The sum total of your character's in combat shield recovery" + inCombatString,"relevantTags": ["ShieldInCombat","ShieldRecovery"],"isNotAPercent": true,"roundAnyways": true,"condition": (returnObject.totalShieldInCombat != returnObject.baseCharacterShieldInCombat)},

            {"statName": "baseCharacterShieldOutCombat","statCoverName": "Base Shield Out of Combat","tooltip":"The base shield recovery out of combat provided by your character" + outOfCombatString,"relevantTags": [],"isNotAPercent": true,"roundAnyways": true},
            {"statName": "baseShieldOutCombatBonus","statCoverName": "+Shield Out of Combat","tooltip":"Flat bonuses to your character out of combat shield recovery" + outOfCombatString,"relevantTags": ["ShieldOutCombat"],"isNotAPercent": true,"roundAnyways": true},
            {"statName": "totalShieldOutCombat","statCoverName": "Total Shield Out of Combat","tooltip":"The sum total of your character's out of combat shield recovery" + outOfCombatString,"relevantTags": ["ShieldOutCombat","ShieldRecovery"],"isNotAPercent": true,"roundAnyways": true,"condition": (returnObject.totalShieldOutCombat != returnObject.baseCharacterShieldOutCombat)},

            {"statName": "totalHPRecoveryModifier","statCoverName": "HP Recovery Modifier","tooltip":"","relevantTags": ["HPRecovery"],"isNotAPercent": true,"roundAnyways": true},
            {"statName": "totalHPHealModifier","statCoverName": "HP Heal Modifier","tooltip":"","relevantTags": ["HPHeal"],"isNotAPercent": true,"roundAnyways": true},
            
        ]
        recoveryHTMLRowsHTML += expandRows(rowsListings,returnObject);
        readSelection("basicsInnerBox").innerHTML += recoveryHTMLRowsHTML ? recoveryHTML + recoveryHTMLRowsHTML + "<br>" : "";


        let resistHTML = "<div class='basicsDRheaderTitle'>RESISTS</div>";
        let resistHTMLRowsHTML = '';
        rowsListings = [//evadeCost,meleeCost
            {"statName": "totalFireResist","statCoverName": "Fire Res","tooltip":"Your total resistance to Fire-attribute damage.<br><br><span>SumFireRes = (characterBase + flatFireRes) * (1 + fire%Bonus)</span><br><br>See the DEF video under Vash's Builds for info on how this is applied.","relevantTags": ["ResistanceFire","ResistanceFire%"],"isNotAPercent": true,"roundAnyways": true},
            {"statName": "totalChillResist","statCoverName": "Chill Res","tooltip":"Your total resistance to Chill-attribute damage.<br><br><span>SumChillRes = (characterBase + flatChillRes) * (1 + chill%Bonus)</span><br><br>See the DEF video under Vash's Builds for info on how this is applied.","relevantTags": ["ResistanceChill","ResistanceChill%"],"isNotAPercent": true,"roundAnyways": true},
            {"statName": "totalToxinResist","statCoverName": "Toxin Res","tooltip":"Your total resistance to Toxin-attribute damage.<br><br><span>SumToxinRes = (characterBase + flatToxinRes) * (1 + toxin%Bonus)</span><br><br>See the DEF video under Vash's Builds for info on how this is applied.","relevantTags": ["ResistanceToxin","ResistanceToxin%"],"isNotAPercent": true,"roundAnyways": true},
            {"statName": "totalElectricResist","statCoverName": "Electric Res","tooltip":"Your total resistance to Electric-attribute damage.<br><br><span>SumElecRes = (characterBase + flatElecRes) * (1 + elec%Bonus)</span><br><br>See the DEF video under Vash's Builds for info on how this is applied.","relevantTags": ["ResistanceElectricity","ResistanceElectricity%"],"isNotAPercent": true,"roundAnyways": true},
        ]
        resistHTMLRowsHTML += expandRows(rowsListings,returnObject);
        readSelection("basicsInnerBox").innerHTML += resistHTMLRowsHTML ? resistHTML + resistHTMLRowsHTML + "<br>" : "";
    
        // basicsUpdates.misc(index);
    },
}

substatColorMods = [
	"laundry","cold fury","towed","unique weapon","cryo","devotion mark","single reload for peace","pest control","close call",
	"overclock","weaken regeneration","grenade throw","overkill","power unit change","burn","load mastery","change mastery",
	"traction grenade","necrosis","toxic sense","purification","corrosion","room 0 trauma","toxic puddle","toxic reaction","panic",
	"plague bodyarmor","despair","toxic swamp","venom-injected","toxic footprints","putric","nightmare",
]
// List all exclusion cases here
// \s = any whitespace character
substatColorExclusions = {
	"fire": ":|\\srate|\\sall",
    // "status": "\\seffect" //Use this if for whatever reason, a need to differentiate between STATUS and STATUS EFFECT arises.
}