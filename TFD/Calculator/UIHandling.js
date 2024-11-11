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
            {"statName": "SkillCost","statCoverName": "Cost Modifier","tooltip":"Reduces the MP and/or Resource cost of abilities.<br>Positive costs more, negative costs less.","relevantTags": [],"isNotAPercent": false,"condition": (index.SkillCost != 0)},
            {"statName": "SkillCooldown","statCoverName": "Cooldown Modifier","tooltip":"Reduces the wait-time required between skill casts.<br><br>Maximum of -90% CDR","relevantTags": [],"isNotAPercent": false,"condition": (index.SkillCooldown != 0)},
            {"statName": "SkillDuration","statCoverName": "+%Duration","tooltip":"Extends the active effects of abilities. There is no known limit, but not all effects are modified by duration bonuses.","relevantTags": [],"isNotAPercent": false,"condition": (index.SkillDuration != 0)},
            {"statName": "SkillRange","statCoverName": "+%Range","tooltip":"Increase the range of ability effects. Capped at +200%.<br><br>Abilities have their own respective range limits, so an ability with a max expandable range of 250% means that it has a base of 100% and can add 150% more, so if you add 200% range on that it'll only take 150% of it while adhering to the ability-specific limit.","relevantTags": [],"isNotAPercent": false,"condition": (index.SkillRange != 0)},

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
            {"statName": "baseCritRateBonus","statCoverName": "+Base Rate","tooltip":"A bonus to the base critical hit rate of your abilities, before any % bonuses are factored.","relevantTags": [],"isNotAPercent": false},
            {"statName": "baseCritDamageBonus","statCoverName": "+Base Damage","tooltip":"A bonus to the base critical hit damage multiplier of your abilities, before any % bonuses are factored.","relevantTags": [],"isNotAPercent": true,"roundAnyways": true},
            {"statName": "critRatePercentBonus","statCoverName": "+% Crit Rate","tooltip":"A multiplier to your total base ability critical hit rate.","relevantTags": [],"isNotAPercent": false},
            {"statName": "critDamagePercentBonus","statCoverName": "+% Crit Damage","tooltip":"A multiplier to your total base ability critical hit damage multiplier.","relevantTags": [],"isNotAPercent": false},
            {"statName": "totalSkillCritRate","statCoverName": "Total Skill CR","tooltip":"The total critical hit rate of your abilities.<br><br><span>TotalCritRate = (characterBase + baseBonuses) * (1 + percentRateBonuses)</span>","relevantTags": [],"isNotAPercent": false,"condition": (returnObject.totalSkillCritRate != returnObject.baseCharacterCritRate)},
            {"statName": "totalSkillCritDamage","statCoverName": "Total Skill CD","tooltip":"The total critical hit damage multiplier for your abilities.<br><br><span>TotalCritMulti = (characterBase + baseBonuses) * (1 + percentMultiBonuses)</span>","relevantTags": [],"isNotAPercent": true,"roundAnyways": true,"condition": (returnObject.totalSkillCritDamage != returnObject.baseCharacterCritDamage)},
        ]
        critHTMLRowsHTML += expandRows(rowsListings,returnObject);
        readSelection("basicsInnerBox").innerHTML += critHTMLRowsHTML ? critHTML + critHTMLRowsHTML + "<br>" : "";


        let ratioHTML = "<div class='basicsDRheaderTitle'>POWER RATIO</div>";
        let ratioHTMLRowsHTML = '';
        rowsListings = [
            {"statName": "PowerOptimization","statCoverName": "Power Optimization","tooltip":"","relevantTags": [],"isNotAPercent": true,"roundAnyways": true,"condition": (index.PowerOptimization != 1)},
            {"statName": "PowerRatioBase","statCoverName": "Base Power Ratio","tooltip":"","relevantTags": [],"isNotAPercent": true,"roundAnyways": true,"condition": (index.PowerRatioBase != 0)},
            
            {"statName": "PowerRatioNonAttribute","statCoverName": "Non-Attr Power Ratio","tooltip":"","relevantTags": [],"isNotAPercent": true,"roundAnyways": true,"condition": (index.PowerRatioNonAttribute != 0)},
            {"statName": "PowerRatioElectric","statCoverName": "Electric Power Ratio","tooltip":"","relevantTags": [],"isNotAPercent": true,"roundAnyways": true,"condition": (index.PowerRatioElectric != 0)},
            {"statName": "PowerRatioToxic","statCoverName": "Toxic Power Ratio","tooltip":"","relevantTags": [],"isNotAPercent": true,"roundAnyways": true,"condition": (index.PowerRatioToxic != 0)},
            {"statName": "PowerRatioChill","statCoverName": "Chill Power Ratio","tooltip":"","relevantTags": [],"isNotAPercent": true,"roundAnyways": true,"condition": (index.PowerRatioChill != 0)},
            {"statName": "PowerRatioFire","statCoverName": "Fire Power Ratio","tooltip":"","relevantTags": [],"isNotAPercent": true,"roundAnyways": true,"condition": (index.PowerRatioFire != 0)},
            
            {"statName": "PowerRatioTech","statCoverName": "Tech Power Ratio","tooltip":"","relevantTags": [],"isNotAPercent": true,"roundAnyways": true,"condition": (index.PowerRatioTech != 0)},
            {"statName": "PowerRatioDimension","statCoverName": "Dimension Power Ratio","tooltip":"","relevantTags": [],"isNotAPercent": true,"roundAnyways": true,"condition": (index.PowerRatioDimension != 0)},
            {"statName": "PowerRatioSingular","statCoverName": "Singular Power Ratio","tooltip":"","relevantTags": [],"isNotAPercent": true,"roundAnyways": true,"condition": (index.PowerRatioSingular != 0)},
            {"statName": "PowerRatioFusion","statCoverName": "Fusion Power Ratio","tooltip":"","relevantTags": [],"isNotAPercent": true,"roundAnyways": true,"condition": (index.PowerRatioFusion != 0)},
        ]
        ratioHTMLRowsHTML += expandRows(rowsListings,index);
        readSelection("basicsInnerBox").innerHTML += ratioHTMLRowsHTML ? ratioHTML + ratioHTMLRowsHTML + "<br>" : "";


        let modifierHTML = "<div class='basicsDRheaderTitle'>POWER MODIFIER</div>";
        let modifierHTMLRowsHTML = '';
        rowsListings = [
            {"statName": "PowerModifierBase","statCoverName": "Base Power Modifier","tooltip":"","relevantTags": [],"isNotAPercent": false,"condition": (index.PowerModifierBase != 0)},
            
            {"statName": "PowerModifierNonAttribute","statCoverName": "Non-Attr Power Modifier","tooltip":"","relevantTags": [],"isNotAPercent": false,"condition": (index.PowerModifierNonAttribute != 0)},
            {"statName": "PowerModifierElectric","statCoverName": "Electric Power Modifier","tooltip":"","relevantTags": [],"isNotAPercent": false,"condition": (index.PowerModifierElectric != 0)},
            {"statName": "PowerModifierToxic","statCoverName": "Toxic Power Modifier","tooltip":"","relevantTags": [],"isNotAPercent": false,"condition": (index.PowerModifierToxic != 0)},
            {"statName": "PowerModifierChill","statCoverName": "Chill Power Modifier","tooltip":"","relevantTags": [],"isNotAPercent": false,"condition": (index.PowerModifierChill != 0)},
            {"statName": "PowerModifierFire","statCoverName": "Fire Power Modifier","tooltip":"","relevantTags": [],"isNotAPercent": false,"condition": (index.PowerModifierFire != 0)},
            
            {"statName": "PowerModifierTech","statCoverName": "Tech Power Modifier","tooltip":"","relevantTags": [],"isNotAPercent": false,"condition": (index.PowerModifierTech != 0)},
            {"statName": "PowerModifierDimension","statCoverName": "Dimension Power Modifier","tooltip":"","relevantTags": [],"isNotAPercent": false,"condition": (index.PowerModifierDimension != 0)},
            {"statName": "PowerModifierSingular","statCoverName": "Singular Power Modifier","tooltip":"","relevantTags": [],"isNotAPercent": false,"condition": (index.PowerModifierSingular != 0)},
            {"statName": "PowerModifierFusion","statCoverName": "Fusion Power Modifier","tooltip":"","relevantTags": [],"isNotAPercent": false,"condition": (index.PowerModifierFusion != 0)},
        ]
        modifierHTMLRowsHTML += expandRows(rowsListings,index);
        readSelection("basicsInnerBox").innerHTML += modifierHTMLRowsHTML ? modifierHTML + modifierHTMLRowsHTML + "<br>" : "";




        let skillAttackHTML = "<div class='basicsDRheaderTitle'>SKILL ATTACK</div>";
        let skillAttackHTMLRowsHTML = '';
        rowsListings = [
            {"statName": "SkillAttackColossus","statCoverName": "+ATK vs. Colossus","tooltip":"","relevantTags": [],"isNotAPercent": true,"roundAnyways": true,"condition": (index.SkillAttackColossus != 0)},
        ]
        skillAttackHTMLRowsHTML += expandRows(rowsListings,index);
        readSelection("basicsInnerBox").innerHTML += skillAttackHTMLRowsHTML ? skillAttackHTML + skillAttackHTMLRowsHTML + "<br>" : "";



        let critGunHTML = "<div class='basicsDRheaderTitle'>FIREARM CRIT</div>";
        let critGunHTMLRowsHTML = '';
        rowsListings = [//evadeCost,meleeCost
            {"statName": "baseFirearmCritRate","statCoverName": "Base Crit Rate","tooltip":"","relevantTags": [],"isNotAPercent": false},
            {"statName": "baseFirearmCritDamage","statCoverName": "Base Crit Damage","tooltip":"","relevantTags": [],"isNotAPercent": true,"roundAnyways": true},
            {"statName": "baseFirearmCritRateBonus","statCoverName": "+Base Rate","tooltip":"","relevantTags": [],"isNotAPercent": false},
            {"statName": "baseFirearmCritDamageBonus","statCoverName": "+Base Damage","tooltip":"","relevantTags": [],"isNotAPercent": true,"roundAnyways": true},
            {"statName": "firearmCritRateBonus","statCoverName": "+% Crit Rate","tooltip":"","relevantTags": [],"isNotAPercent": false},
            {"statName": "firearmCritDamageBonus","statCoverName": "+% Crit Damage","tooltip":"","relevantTags": [],"isNotAPercent": false},
            {"statName": "totalFirearmCritRate","statCoverName": "Total Weapon CR","tooltip":"","relevantTags": [],"isNotAPercent": false,"condition": (returnObject.totalFirearmCritRate != returnObject.baseFirearmCritRate)},
            {"statName": "totalFirearmCritDamage","statCoverName": "Total Weapon CD","tooltip":"","relevantTags": [],"isNotAPercent": true,"roundAnyways": true,"condition": (returnObject.totalFirearmCritDamage != returnObject.baseFirearmCritDamage)},
        ]
        critGunHTMLRowsHTML += expandRows(rowsListings,returnObject);
        readSelection("basicsInnerBox").innerHTML += critGunHTMLRowsHTML ? critGunHTML + critGunHTMLRowsHTML + "<br>" : "";


        let wpGunHTML = "<div class='basicsDRheaderTitle'>FIREARM WEAK POINT</div>";
        let wpGunHTMLRowsHTML = '';
        rowsListings = [//evadeCost,meleeCost
            {"statName": "baseWPMulti","statCoverName": "Base Weak Point","tooltip":"","relevantTags": [],"isNotAPercent": true,"roundAnyways": true},
            {"statName": "weakpointBonus","statCoverName": "+Weak Point %","tooltip":"","relevantTags": [],"isNotAPercent": false,"condition": (returnObject.baseWPMulti != 0)},
            {"statName": "bossPartWPBonus","statCoverName": "+End Part Bonus","tooltip":"","relevantTags": [],"isNotAPercent": true,"roundAnyways": true,"condition": (returnObject.baseWPMulti != 0)},
            {"statName": "totalWPBonus","statCoverName": "Total Weak Point Multi","tooltip":"","relevantTags": [],"isNotAPercent": true,"roundAnyways": true,"condition": (returnObject.baseWPMulti != 0)},
        ]
        wpGunHTMLRowsHTML += expandRows(rowsListings,returnObject);
        readSelection("basicsInnerBox").innerHTML += wpGunHTMLRowsHTML ? wpGunHTML + wpGunHTMLRowsHTML + "<br>" : "";

        let atkGunHTML = "<div class='basicsDRheaderTitle'>FIREARM ATK</div>";
        let atkGunHTMLRowsHTML = '';
        rowsListings = [//evadeCost,meleeCost
            {"statName": "baseFirearmATK","statCoverName": "Base Weapon ATK","tooltip":"","relevantTags": [],"isNotAPercent": true},
            {"statName": "attackPercent","statCoverName": "+ATK %","tooltip":"","relevantTags": [],"isNotAPercent": false},
            {"statName": "firearmColossusATK","statCoverName": "+Colossus ATK","tooltip":"","relevantTags": [],"isNotAPercent": true,"roundAnyways": true},
            {"statName": "physicalTypeMulti","statCoverName": "Physical Type Multi","tooltip":"","relevantTags": [],"isNotAPercent": false},
            {"statName": "firearmAttributeConversionBase","statCoverName": "Attribute Conversion Base","tooltip":"","relevantTags": [],"isNotAPercent": true,"roundAnyways": true},
            {"statName": "totalFirearmATK","statCoverName": "Total ATK","tooltip":"","relevantTags": [],"isNotAPercent": true,"roundAnyways": true,"condition": (returnObject.totalFirearmATK != returnObject.baseFirearmATK)},
        ]
        atkGunHTMLRowsHTML += expandRows(rowsListings,returnObject);
        readSelection("basicsInnerBox").innerHTML += atkGunHTMLRowsHTML ? atkGunHTML + atkGunHTMLRowsHTML + "<br>" : "";


        let firearmAttributeHTML = "<div class='basicsDRheaderTitle'>FIREARM ATTRIBUTE</div>";
        let firearmAttributeHTMLRowsHTML = '';
        rowsListings = [
            {"statName": "FireATK","statCoverName": "Base Fire ATK","tooltip":"","relevantTags": [],"isNotAPercent": true,"condition": (index.FireATK != 0)},
            {"statName": "FireATK%","statCoverName": "Fire ATK Conversion","tooltip":"","relevantTags": [],"isNotAPercent": false,"condition": (index["FireATK%"] != 0)},
            {"statName": "FireATK%Bonus","statCoverName": "+Fire ATK%","tooltip":"","relevantTags": [],"isNotAPercent": false,"condition": (index["FireATK%Bonus"] != 0)},

            {"statName": "ChillATK","statCoverName": "Base Chill ATK","tooltip":"","relevantTags": [],"isNotAPercent": true,"condition": (index.ChillATK != 0)},
            {"statName": "ChillATK%","statCoverName": "Chill ATK Conversion","tooltip":"","relevantTags": [],"isNotAPercent": false,"condition": (index["ChillATK%"] != 0)},
            {"statName": "ChillATK%Bonus","statCoverName": "+Chill ATK%","tooltip":"","relevantTags": [],"isNotAPercent": false,"condition": (index["ChillATK%Bonus"] != 0)},

            {"statName": "ToxicATK","statCoverName": "Base Toxic ATK","tooltip":"","relevantTags": [],"isNotAPercent": true,"condition": (index.ToxicATK != 0)},
            {"statName": "ToxicATK%","statCoverName": "Toxic ATK Conversion","tooltip":"","relevantTags": [],"isNotAPercent": false,"condition": (index["ToxicATK%"] != 0)},
            {"statName": "ToxicATK%Bonus","statCoverName": "+Toxic ATK%","tooltip":"","relevantTags": [],"isNotAPercent": false,"condition": (index["ToxicATK%Bonus"] != 0)},

            {"statName": "ElectricATK","statCoverName": "Base Electric ATK","tooltip":"","relevantTags": [],"isNotAPercent": true,"condition": (index.ElectricATK != 0)},
            {"statName": "ElectricATK%","statCoverName": "Electric ATK Conversion","tooltip":"","relevantTags": [],"isNotAPercent": false,"condition": (index["ElectricATK%"] != 0)},
            {"statName": "ElectricATK%Bonus","statCoverName": "+Electric ATK%","tooltip":"","relevantTags": [],"isNotAPercent": false,"condition": (index["ElectricATK%Bonus"] != 0)},
        ]
        firearmAttributeHTMLRowsHTML += expandRows(rowsListings,index);
        readSelection("basicsInnerBox").innerHTML += firearmAttributeHTMLRowsHTML ? firearmAttributeHTML + firearmAttributeHTMLRowsHTML + "<br>" : "";

  
        let healthHTML = "<div class='basicsDRheaderTitle'>HEALTH</div>";
        let healthHTMLRowsHTML = '';
        rowsListings = [//evadeCost,meleeCost
            {"statName": "baseCharacterHealth","statCoverName": "Base HP","tooltip":"","relevantTags": [],"isNotAPercent": true,"roundAnyways": true},
            {"statName": "baseHealthBonus","statCoverName": "Flat HP","tooltip":"","relevantTags": [],"isNotAPercent": true,"roundAnyways": true},
            {"statName": "healthPercentBonus","statCoverName": "% HP","tooltip":"","relevantTags": [],"isNotAPercent": false},
            {"statName": "displayHealth","statCoverName": "Total HP","tooltip":"","relevantTags": [],"isNotAPercent": true,"roundAnyways": true,"condition": (returnObject.displayHealth != returnObject.baseCharacterHealth)},

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
            {"statName": "baseCharacterShield","statCoverName": "Base Shield","tooltip":"","relevantTags": [],"isNotAPercent": true,"roundAnyways": true},
            {"statName": "baseShieldBonus","statCoverName": "Flat Shield","tooltip":"","relevantTags": [],"isNotAPercent": true,"roundAnyways": true},
            {"statName": "shieldPercentBonus","statCoverName": "% Shield","tooltip":"","relevantTags": [],"isNotAPercent": false},
            {"statName": "displayShield","statCoverName": "Total Shield","tooltip":"","relevantTags": [],"isNotAPercent": true,"roundAnyways": true,"condition": (returnObject.displayShield != returnObject.baseCharacterShield)},
        ]
        shieldHTMLRowsHTML += expandRows(rowsListings,returnObject);
        readSelection("basicsInnerBox").innerHTML += shieldHTMLRowsHTML ? shieldHTML + shieldHTMLRowsHTML + "<br>" : "";


        let DEFHTML = "<div class='basicsDRheaderTitle'>DEF</div>";
        let DEFHTMLRowsHTML = '';
        rowsListings = [//evadeCost,meleeCost
            {"statName": "baseCharacterDEF","statCoverName": "Base DEF","tooltip":"","relevantTags": [],"isNotAPercent": true,"roundAnyways": true},
            {"statName": "baseDEFBonus","statCoverName": "Flat DEF","tooltip":"","relevantTags": [],"isNotAPercent": true,"roundAnyways": true},
            {"statName": "DEFPercentBonus","statCoverName": "% DEF","tooltip":"","relevantTags": [],"isNotAPercent": false},
            {"statName": "displayDEF","statCoverName": "Total DEF","tooltip":"","relevantTags": [],"isNotAPercent": true,"roundAnyways": true,"condition": (returnObject.displayDEF != returnObject.baseCharacterDEF)},
        ]
        DEFHTMLRowsHTML += expandRows(rowsListings,returnObject);
        readSelection("basicsInnerBox").innerHTML += DEFHTMLRowsHTML ? DEFHTML + DEFHTMLRowsHTML + "<br>" : "";


        //TODO: add custom resource calcs here if applicable
        let MPHTML = "<div class='basicsDRheaderTitle'>MP</div>";
        let MPHTMLRowsHTML = '';
        rowsListings = [//evadeCost,meleeCost
            {"statName": "baseCharacterMP","statCoverName": "Base MP","tooltip":"","relevantTags": [],"isNotAPercent": true,"roundAnyways": true},
            {"statName": "baseMPBonus","statCoverName": "Flat MP","tooltip":"","relevantTags": [],"isNotAPercent": true,"roundAnyways": true},
            {"statName": "MPPercentBonus","statCoverName": "% MP","tooltip":"","relevantTags": [],"isNotAPercent": false},
            {"statName": "displayMP","statCoverName": "Total MP","tooltip":"","relevantTags": [],"isNotAPercent": true,"roundAnyways": true,"condition": (returnObject.displayMP != returnObject.baseCharacterMP)},
        ]
        MPHTMLRowsHTML += expandRows(rowsListings,returnObject);
        readSelection("basicsInnerBox").innerHTML += MPHTMLRowsHTML ? MPHTML + MPHTMLRowsHTML + "<br>" : "";


        let recoveryHTML = "<div class='basicsDRheaderTitle'>RECOVERY</div>";
        let recoveryHTMLRowsHTML = '';
        rowsListings = [//evadeCost,meleeCost
            {"statName": "MPRecoveryModifier","statCoverName": "MP Recovery Mod","tooltip":"","relevantTags": [],"isNotAPercent": true,"roundAnyways": true},
            {"statName": "baseCharacterMPInCombat","statCoverName": "Base MP in Combat","tooltip":"","relevantTags": [],"isNotAPercent": true,"roundAnyways": true},
            {"statName": "baseMPInCombatBonus","statCoverName": "+MP in Combat","tooltip":"","relevantTags": [],"isNotAPercent": true,"roundAnyways": true},
            {"statName": "totalMPInCombat","statCoverName": "Total MP in Combat","tooltip":"","relevantTags": [],"isNotAPercent": true,"roundAnyways": true,"condition": (returnObject.totalMPInCombat != returnObject.baseCharacterMPInCombat)},
            
            {"statName": "baseCharacterMPOutCombat","statCoverName": "Base MP Out of Combat","tooltip":"","relevantTags": [],"isNotAPercent": true,"roundAnyways": true},
            {"statName": "baseMPOutCombatBonus","statCoverName": "+MP Out of Combat","tooltip":"","relevantTags": [],"isNotAPercent": true,"roundAnyways": true},
            {"statName": "totalMPOutCombat","statCoverName": "Total MP Out of Combat","tooltip":"","relevantTags": [],"isNotAPercent": true,"roundAnyways": true,"condition": (returnObject.totalMPOutCombat != returnObject.baseCharacterMPOutCombat)},

            {"statName": "shieldRecoveryModifier","statCoverName": "Shield Recovery Mod","tooltip":"","relevantTags": [],"isNotAPercent": true,"roundAnyways": true},
            {"statName": "baseCharacterShieldInCombat","statCoverName": "Base Shield in Combat","tooltip":"","relevantTags": [],"isNotAPercent": true,"roundAnyways": true},
            {"statName": "baseShieldInCombatBonus","statCoverName": "+Shield in Combat","tooltip":"","relevantTags": [],"isNotAPercent": true,"roundAnyways": true},
            {"statName": "totalShieldInCombat","statCoverName": "Total Shield in Combat","tooltip":"","relevantTags": [],"isNotAPercent": true,"roundAnyways": true,"condition": (returnObject.totalShieldInCombat != returnObject.baseCharacterShieldInCombat)},

            {"statName": "baseCharacterShieldOutCombat","statCoverName": "Base Shield Out of Combat","tooltip":"","relevantTags": [],"isNotAPercent": true,"roundAnyways": true},
            {"statName": "baseShieldOutCombatBonus","statCoverName": "+Shield Out of Combat","tooltip":"","relevantTags": [],"isNotAPercent": true,"roundAnyways": true},
            {"statName": "totalShieldOutCombat","statCoverName": "Total Shield Out of Combat","tooltip":"","relevantTags": [],"isNotAPercent": true,"roundAnyways": true,"condition": (returnObject.totalShieldOutCombat != returnObject.baseCharacterShieldOutCombat)},

            {"statName": "totalHPRecoveryModifier","statCoverName": "HP Recovery Modifier","tooltip":"","relevantTags": [],"isNotAPercent": true,"roundAnyways": true},
            {"statName": "totalHPHealModifier","statCoverName": "HP Heal Modifier","tooltip":"","relevantTags": [],"isNotAPercent": true,"roundAnyways": true},
            
        ]
        recoveryHTMLRowsHTML += expandRows(rowsListings,returnObject);
        readSelection("basicsInnerBox").innerHTML += recoveryHTMLRowsHTML ? recoveryHTML + recoveryHTMLRowsHTML + "<br>" : "";


        let resistHTML = "<div class='basicsDRheaderTitle'>RESISTS</div>";
        let resistHTMLRowsHTML = '';
        rowsListings = [//evadeCost,meleeCost
            {"statName": "totalFireResist","statCoverName": "Fire Res","tooltip":"","relevantTags": [],"isNotAPercent": true,"roundAnyways": true},
            {"statName": "totalChillResist","statCoverName": "Chill Res","tooltip":"","relevantTags": [],"isNotAPercent": true,"roundAnyways": true},
            {"statName": "totalToxinResist","statCoverName": "Toxin Res","tooltip":"","relevantTags": [],"isNotAPercent": true,"roundAnyways": true},
            {"statName": "totalElectricResist","statCoverName": "Electric Res","tooltip":"","relevantTags": [],"isNotAPercent": true,"roundAnyways": true},
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
    // "corroded","acid","toxic",
	// "bleed","bleeding",
	// "shock","shocked","overload","overloaded",
	// "slow","bulwark","haste","status","tarred","spirit of the red doe","drenched","gloom","brittle","stoneskin","living will","frenzied","enrage","enraged",
	// "fire","burn","burning",
	// "shield","shields",
	// "blight","madness","fragmented","level 10","exposed", "gift of the forest",
	// "curse",
	// "root rot",
	// "suppression"
]
// List all exclusion cases here
// \s = any whitespace character
substatColorExclusions = {
	"fire": ":|\\srate|\\sall",
    // "status": "\\seffect" //Use this if for whatever reason, a need to differentiate between STATUS and STATUS EFFECT arises.
}