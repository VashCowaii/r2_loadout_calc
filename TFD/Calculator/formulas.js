const calcs = {
    getHealth(index,characterRef) {
        const baseCharacterHealth = characterRef.HP;
        const baseHealthBonus = index.HP + (index.boostHPFromShield ? calcs.getShield.totalShield * modData["Overwhelming HP"].conversionRate : 0);
        const healthPercentBonus = index["HP%"];
        const totalHealth = (baseCharacterHealth + baseHealthBonus) * (1 + healthPercentBonus);
        const displayHealth = index.isHPSetTo1 ? 1 : totalHealth;

        return {baseCharacterHealth,baseHealthBonus,healthPercentBonus,totalHealth,displayHealth}
    },
    getShield(index,characterRef) {
        const baseCharacterShield = characterRef.Shield;
        const baseShieldBonus = index.Shield + (index.boostHPFromShield ? calcs.getHealth.totalHealth * modData["Overwhelming Shield"].conversionRate : 0);
        const shieldPercentBonus = index["Shield%"];
        const totalShield = (baseCharacterShield + baseShieldBonus) * (1 + shieldPercentBonus);
        const displayShield = index.isShieldSetTo1 ? 1 : totalShield;

        return {baseCharacterShield,baseShieldBonus,shieldPercentBonus,totalShield,displayShield}
    },
    getDefense(index,characterRef) {
        const baseCharacterDEF = characterRef.DEF;
        const baseDEFBonus = index.DEF + (index.boostHPFromShield ? calcs.getHealth.totalHealth * modData["Overwhelming DEF"].conversionRate : 0);
        const DEFPercentBonus = index["DEF%"];
        const totalDEF = (baseCharacterDEF + baseDEFBonus) * (1 + DEFPercentBonus);
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

        const totalSkillCritRate = (baseCharacterCritRate + baseCritRateBonus) * (1 + critRatePercentBonus)
        const totalSkillCritDamage = (baseCharacterCritDamage + baseCritDamageBonus) * (1 + critDamagePercentBonus)

        return {baseCharacterCritRate,baseCharacterCritDamage,baseCritRateBonus,baseCritDamageBonus,critRatePercentBonus,critDamagePercentBonus,totalSkillCritRate,totalSkillCritDamage}
    },
}


const customDamage = {
    callAbilityFunctions(index,returnObject) {
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

        for (let i=1;i<=5;i++) {
            const path = arrayRef[i-1] === 0 ? "base" : arrayRef[i-1];

            const currentPath = abilityRefs[`ability${i}`][path];
            if (currentPath.customDPS) {customDamage[currentPath.customDPS](index,returnObject);}
            else {readSelection(`abilityBreakdownBody${i}`).innerHTML = absentBreakdown;}
        }
    },
    lepicOverkillCalcs(index,returnObject) {
        //this function is gonna look pretty scuffed for a bit, all I did was rip it from and combine all the functions from my lepic-only calc
        //so I'll pretty it up later.
        const characterRef = characters.Lepic;
        const settingsRef = characterRef.characterSettings.Overkill;

        readSelection("abilityBreakdownBody4").innerHTML = `
        <div class="totalHealingBox">
            <div class="totalHealingBoxHalf hasHoverTooltip">
                <div style="padding-right: 5px;">Fire Rate UP</div>
                <label class="toggleContainer">
                    <input type="checkbox" class="toggleCheckbox" id="USEFireRateUP" onchange="settings.updateCharacterSettings('Lepic','Overkill')"> <!--math toggle-->
                    <span class="toggleSlider"></span>
                </label>
            </div>
            <div class="totalHealingBoxHalf hasHoverTooltip">
                <div style="padding-right: 5px;">Sharp Precision</div>
                <label class="toggleContainer">
                    <input type="checkbox" class="toggleCheckbox" id="USESharpPrecisionShot" onchange="settings.updateCharacterSettings('Lepic','Overkill')"> <!--math toggle-->
                    <span class="toggleSlider"></span>
                </label>
            </div>
        </div>
        
        <div class="traitMegaTitleHeader">RESULTS</div>
        <div class="basicsSummaryBox" id="lepicResultsBox">
            <div class="totalHealingBox">
                <div class="totalHealingBoxHalf hasHoverTooltip">
                    <div class="totalHealingHeader">Duration</div>
                    <div class="totalHealingValue" id="actualDuration">0.00</div>
                </div>
                <div class="totalHealingBoxHalf hasHoverTooltip">
                    <div class="totalHealingHeader">Usable Duration</div>
                    <div class="totalHealingValue" id="usableDuration">0.00%</div>
                </div>
                <div class="totalHealingBoxHalf hasHoverTooltip">
                    <div class="totalHealingHeader">Total Shots</div>
                    <div class="totalHealingValue" id="totalShots">0.00%</div>
                </div>
            </div>

            <div class="totalHealingBox">
                <div class="totalHealingBoxHalf hasHoverTooltip">
                    <div class="totalHealingHeader">Excess/Short</div>
                    <div class="totalHealingValue" id="wastedTime">0.00</div>
                </div>
                <div class="totalHealingBoxHalf hasHoverTooltip">
                    <div class="totalHealingHeader">Skill Power</div>
                    <div class="totalHealingValue" id="skillPower">0.00%</div>
                </div>
                <div class="totalHealingBoxHalf hasHoverTooltip">
                    <div class="totalHealingHeader">Power Mod</div>
                    <div class="totalHealingValue" id="powerModifier">0.00%</div>
                </div>
            </div>

            <div class="totalHealingBox">
                <div class="totalHealingBoxHalf hasHoverTooltip">
                    <div class="totalHealingHeader">Dmg/Shot</div>
                    <div class="totalHealingValue" id="dmgPerShot">0.00</div>
                </div>
                <div class="totalHealingBoxHalf hasHoverTooltip">
                    <div class="totalHealingHeader">Crit/Shot</div>
                    <div class="totalHealingValue" id="critPerShot">0.00%</div>
                </div>
            </div>

            <div class="totalHealingBox">
                <div class="totalHealingBoxHalf hasHoverTooltip">
                    <div class="totalHealingHeader">Avg SUM</div>
                    <div class="totalHealingValue" id="averageSum">0.00%</div>
                </div>
            </div>

            <div class="totalHealingBox">
                <div class="totalHealingBoxHalf hasHoverTooltip">
                    <div class="totalHealingHeader">Dmg/Tick</div>
                    <div class="totalHealingValue" id="dmgPerTick">0.00</div>
                </div>
                <div class="totalHealingBoxHalf hasHoverTooltip">
                    <div class="totalHealingHeader">Crit/Tick</div>
                    <div class="totalHealingValue" id="critPerTick">0.00%</div>
                </div>
                <div class="totalHealingBoxHalf hasHoverTooltip">
                    <div class="totalHealingHeader">Total Ticks</div>
                    <div class="totalHealingValue" id="totalTicks">0.00%</div>
                </div>
            </div>

            <div class="totalHealingBox">
                <div class="totalHealingBoxHalf hasHoverTooltip">
                    <div class="totalHealingHeader">Avg SUM Ticks</div>
                    <div class="totalHealingValue" id="averageSumTicks">0.00%</div>
                </div>
            </div>

            <div class="totalHealingBox">
                <div class="totalHealingBoxHalf hasHoverTooltip">
                    <div class="totalHealingHeader">Total Avg SUM</div>
                    <div class="totalHealingValue" id="totalAverageSum">0.00%</div>
                </div>
            </div>

        </div>
        `;
        readSelection("abilityBreakdownBody4").innerHTML += `
        <div class="abilityBreakdownHeader">DESCRIPTION</div>
        <div class="abilityBreakdownDescription">${characterRef.abilities.ability4.base.desc}</div>
        `;
        readSelection("USEFireRateUP").checked = settingsRef.USEFireRateUP;
        if (globalRecords.reactor.currentAmmoType === "HighPowered") {settingsRef.USESharpPrecisionShot = false;}
        readSelection("USESharpPrecisionShot").checked = settingsRef.USESharpPrecisionShot;




        const isFireRateUp = readSelection("USEFireRateUP").checked;
        const isSharpPrecision = readSelection("USESharpPrecisionShot").checked;
        const skillDurationMod = index.SkillDuration;
        // readSelection("lepicResultsBox").innerHTML = "";

        function lepicStonkiesCalc(skillDurationMod,isFireRateUp,isSharpPrecision) {
            const skillDuration = 8 * (1 + skillDurationMod) - 1.06; //subtract the roll's duration
            const firearmMasterDuration = 5 * (1 + skillDurationMod) - 1.06;//still subtract the roll's duration
            const continuousDuration = 4 * (1 + skillDurationMod);//don't need to minus the roll here
            // const continuousTicks = Math.floor(continuousDuration/0.5);
        
            const fireRate = (isFireRateUp ? -0.25 : 0) + (isSharpPrecision ? 0.20 : 0);//the flat, non-dynamic fire rate bonuses/negatives from equipped mods, before something like sharp precision kicks in.
        
            const baseRate = 1.308;//gap between shots with 0 fire rate active from any source.
            const modifiedRate = baseRate * (1 + fireRate);//modified time between shots with -20% penalty and +25% boost
        
            const reductionPerStack = baseRate * 0.04;//4% reduction of the base time per stack
            const maxStacks = 10;
            const sharpAmmoTypeDelays = {
                "General": 0.5,
                "Special": 0.5,
                "Impact": 0.4,
                "HighPowered": "In theory we should prevent anyone from using sharp precision if it is ever a heavy weapon."
            }
            const stackDelay = sharpAmmoTypeDelays[globalRecords.reactor.currentAmmoType];//Are we using Sharp Precision from green ammo, or from white/orange.
        
            let timePassed = 0;
            let shotCount = 1;//start at 1, bc the first shot is instantaneous after the roll
        
            if (isSharpPrecision) {
                while (timePassed < skillDuration) {
                    const stacks = Math.min(Math.floor(timePassed / stackDelay), maxStacks);
                    const currentRate = modifiedRate - stacks * reductionPerStack;//time between shots with the stacks applied
                    const nextShotTime = timePassed + currentRate;//time for the next shot
        
                    if (nextShotTime <= skillDuration) {
                        shotCount++;
                        timePassed = nextShotTime;//passed to the time of the next shot
                    }
                    else {
                        readSelection("wastedTime").innerHTML = `${(skillDuration - nextShotTime).toFixed(3)}s`;
                        break;
                    }
                }
            }
            else {
                const floatCount = skillDuration/(modifiedRate);
                shotCount += Math.floor(floatCount);
                durationDiff = floatCount - Math.floor(floatCount);
                readSelection("wastedTime").innerHTML = `+${(durationDiff).toFixed(3)}s`;

                console.log(floatCount)
            }
        
            const continuousTicks = Math.floor(continuousDuration/0.5) * shotCount;
            // console.log(continuousDuration)
            // console.log(Math.floor(continuousDuration/0.5))
        
            return {shotCount,skillDuration,continuousTicks};
        }
    
        const {shotCount,skillDuration,continuousTicks} = lepicStonkiesCalc(skillDurationMod,isFireRateUp,isSharpPrecision);
    
        readSelection("actualDuration").innerHTML = `${(8 * (1+skillDurationMod)).toFixed(3)}s`;
        readSelection("usableDuration").innerHTML = `${skillDuration.toLocaleString()}s`;
        readSelection("totalShots").innerHTML = `${shotCount}`;
    
        const skillPowerModifier = index.PowerModifierBase + index.PowerModifierTech + index.PowerModifierFire;

        function sumDamageCalc(shotCount,skillPowerModifier,continuousTicks) {
            const baseSkillPowerPercent = (2760.3)/100 + skillPowerModifier;
            const baseContinuousSkillPowerPercent = (43.8)/100 + skillPowerModifier;
        
            const critRate = returnObject.totalSkillCritRate;
            const critDamage = returnObject.totalSkillCritDamage;
            const critComposite = 1 + (critRate * (critDamage-1));
        
            const basePowerRatio = 1 + index.PowerRatioBase;
            const firePowerRatio = 1 + index.PowerRatioFire;
            const techPowerRatio = 1 + index.PowerRatioTech;
        
            const reactorOptimizationBonus = globalRecords.reactor.weaponMatched ? 1.6 : 1;
        
            //We're assuming you're using a fully enhanced reactor. Doesn't make TOO big a diff, but it still matters.
            const baseSkillPower = 11724.62 * reactorOptimizationBonus * firePowerRatio * techPowerRatio * basePowerRatio;//18,759.392
        
            const dmgPerShot = baseSkillPower * baseSkillPowerPercent;
            const dmgPerShotCrit = dmgPerShot * critDamage;
            const endDmg = dmgPerShot * critComposite * shotCount;
        
            const dmgPerTick = baseSkillPower * baseContinuousSkillPowerPercent;
            const dmgPerTickCrit = dmgPerTick * critDamage;
            const tickEndDamage = dmgPerTick * critComposite * continuousTicks;
        
            return {baseSkillPower,baseSkillPowerPercent,endDmg,dmgPerShot,dmgPerShotCrit,dmgPerTick,dmgPerTickCrit,tickEndDamage}
        }
    
        const {baseSkillPower,baseSkillPowerPercent,endDmg,dmgPerShot,dmgPerShotCrit,dmgPerTick,dmgPerTickCrit,tickEndDamage} = sumDamageCalc(shotCount,skillPowerModifier,continuousTicks);
    
    
        readSelection("skillPower").innerHTML = `${baseSkillPower.toLocaleString()}`;
        readSelection("powerModifier").innerHTML = `${(baseSkillPowerPercent*100).toLocaleString()}`;
    
    
        readSelection("dmgPerShot").innerHTML = `${dmgPerShot.toLocaleString()}`;
        readSelection("critPerShot").innerHTML = `${dmgPerShotCrit.toLocaleString()}`;
        readSelection("averageSum").innerHTML = `${endDmg.toLocaleString()}`;
    
        readSelection("dmgPerTick").innerHTML = `${dmgPerTick.toLocaleString()}`;
        readSelection("critPerTick").innerHTML = `${dmgPerTickCrit.toLocaleString()}`;
        readSelection("totalTicks").innerHTML = `${continuousTicks.toLocaleString()}`;
    
        readSelection("averageSumTicks").innerHTML = `${tickEndDamage.toLocaleString()}`;
    
        readSelection("totalAverageSum").innerHTML = `${(endDmg+tickEndDamage).toLocaleString()}`;
    }
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