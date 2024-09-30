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
        const totalSkillCritRate = Math.max(0,Math.min(totalSkillCritRatePreCap,1)) * (1 + (+globalRecords.skillCritCeiling/100))
        const critRate = Math.min((1+(globalRecords.skillCritCeiling/100)),totalSkillCritRate);
        const totalSkillCritDamage = (baseCharacterCritDamage + baseCritDamageBonus) * (1 + critDamagePercentBonus)

        return {baseCharacterCritRate,baseCharacterCritDamage,baseCritRateBonus,baseCritDamageBonus,critRatePercentBonus,critDamagePercentBonus,totalSkillCritRate,totalSkillCritDamage}
    },


    getTotalSkillPowerModifier(index,abilityTypeArray) {
        let sumModifierBonus = index.PowerModifierBase;
        for (let type of abilityTypeArray) {sumModifierBonus += index[`PowerModifier${type.replace(/-/g, "")}`];}
        return sumModifierBonus;
    },
    getTotalSkillPower(index,abilityTypeArray) {
        const powerOptimization = (globalRecords.reactor.weaponMatched ? 1.6 : 1) + index.PowerOptimization;

        const basePowerRatio = 1 + index.PowerRatioBase;
        // let baseSkillPower = (11060.96 * powerOptimization + index.SkillAttackColossus) * basePowerRatio;//uncomment when verifying resistances on an unenhanced reactor
        let baseSkillPower = (11724.62 * powerOptimization + index.SkillAttackColossus) * basePowerRatio;//11724.62

        for (let type of abilityTypeArray) {baseSkillPower *= (1 + index[`PowerRatio${type.replace(/-/g, "")}`]);}

        return baseSkillPower;
    },

    getResistanceBasedDR(typeName) {
        const currentBoss = globalRecords.boss.currentBoss;
        const currentResistValue = bosses[currentBoss][typeName];
        return 150/(150 + Math.sqrt(currentResistValue));
    },
}


const customDamage = {
    callAbilityFunctionsTier0(index) {
        const globalRef = globalRecords.character;
        const selectedCharacter = globalRef.currentCharacter;

        //ability array handling is done within userTriggers.updateSelectedMod
        const arrayRef = globalRef.abilityArray;
        const abilityRefs = characters[selectedCharacter].abilities;

        for (let i=1;i<=5;i++) {
            const path = arrayRef[i-1] === 0 ? "base" : arrayRef[i-1];

            const currentPath = abilityRefs[`ability${i}`][path];
            if (currentPath.customDPSBase) {customDamage[currentPath.customDPSBase](index);}
        }
    },
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
            else if (!currentPath.customDPSBase) {readSelection(`abilityBreakdownBody${i}`).innerHTML = absentBreakdown;}
        }

        for (let i=1;i<=5;i++) {
            const path = arrayRef[i-1] === 0 ? "base" : arrayRef[i-1];

            const currentPath = abilityRefs[`ability${i}`][path].displayStats;
            readSelection(`abilityBreakdownFooter${i}`).innerHTML = currentPath ? conditionalHelpers.addAbilityInfoRows(currentPath,index,returnObject) : "";
        }
    },
    // //Esiemo
    esiemoTimeBombCalcs(index,returnObject) {
        const characterRef = characters.Esiemo;
        const settingsRef = characterRef.characterSettings;
        const abilityTypeArray = characterRef.abilities.ability1.base.type;
        const skillPlacement = 1; 

        readSelection(`abilityBreakdownBody${skillPlacement}`).innerHTML = `
        <div class="totalHealingBox">
            <div class="statsRowName">Bombs Placed:&nbsp;<span id="timeBombStackDisplay">0</span></div>
            <div class="statsRowToggle">
                <input type="range" id="timeBombStacks" name="slider" min="0" max="8" value="5" step="1" onchange="settings.updateCharacterSettings('Esiemo')">
            </div>
        </div>

        <div class="traitMegaTitleHeader">RESULTS</div>
        <div class="basicsSummaryBox" id="lepicResultsBox">

            <div class="totalHealingBox">
                <div class="totalHealingBoxHalf hasHoverTooltip">
                    <div class="totalHealingHeader">Skill Power</div>
                    <div class="totalHealingValue" id="skillPower${skillPlacement}">0.00%</div>
                </div>
                <div class="totalHealingBoxHalf hasHoverTooltip">
                    <div class="totalHealingHeader">Power Mod</div>
                    <div class="totalHealingValue" id="powerModifier${skillPlacement}">0.00%</div>
                </div>
                <div class="totalHealingBoxHalf hasHoverTooltip">
                    <div class="totalHealingHeader">Blast Multi</div>
                    <div class="totalHealingValue" id="uniquePowerBonus${skillPlacement}">0.00%</div>
                </div>
            </div>

            <div class="totalHealingBox">
                <div class="totalHealingBoxHalf hasHoverTooltip">
                    <div class="totalHealingHeader">DMG/Hit</div>
                    <div class="totalHealingValue" id="dmgPerHit${skillPlacement}">0.00</div>
                </div>
                <div class="totalHealingBoxHalf hasHoverTooltip">
                    <div class="totalHealingHeader">DMG/Crit</div>
                    <div class="totalHealingValue" id="dmgPerCrit${skillPlacement}">0.00%</div>
                </div>
            </div>
            <div class="totalHealingBox">
                <div class="totalHealingBoxHalf hasHoverTooltip">
                    <div class="totalHealingHeader">AVG DMG/Bomb</div>
                    <div class="totalHealingValue" id="avgPerHit${skillPlacement}">0.00</div>
                </div>
            </div>
            <div class="totalHealingBox">
                <div class="totalHealingBoxHalf hasHoverTooltip">
                    <div class="totalHealingHeader">Total AVG DMG [${settingsRef.timeBombStacks}]</div>
                    <div class="totalHealingValue" id="totalAvgDmg${skillPlacement}">0.00</div>
                </div>
            </div>
        </div>
        `;
        readSelection(`abilityBreakdownBody${skillPlacement}`).innerHTML += `
        <div class="abilityBreakdownHeader">DESCRIPTION</div>
        <div class="abilityBreakdownDescription">${characterRef.abilities.ability1.base.desc}</div>
        `;
        //the dom element mods need to after all of them are done, so after the stats rows are generated, else they get reset
        // readSelection("timeBombStacks").value = +settingsRef.timeBombStacks;
        // readSelection("timeBombStackDisplay").innerHTML = `${settingsRef.timeBombStacks}`;

        const maxStacks = 5;
        const cooldown = 12 * (1 + index.SkillCooldown);
        const cost = 12 * (1 + index.SkillCost);
        const range = 3 * (1 + Math.min(2,index.SkillRange));


        const basePowerModifier = 439.1/100;

        const sumModifierBonus = calcs.getTotalSkillPowerModifier(index,abilityTypeArray);
        const baseSkillPower = calcs.getTotalSkillPower(index,abilityTypeArray);
        const fireDR = calcs.getResistanceBasedDR("Fire");

        const skillPowerModifier = basePowerModifier + sumModifierBonus;
        const blastMulti = settingsRef.blastStacksPowerBonus;
    
        const critRate = returnObject.totalSkillCritRate;
        const critDamage = returnObject.totalSkillCritDamage;
        const critComposite = 1 + (critRate * (critDamage-1));
    

        const dmgPerHit = baseSkillPower * skillPowerModifier * blastMulti * fireDR;
        const dmgPerHitCrit = dmgPerHit * critDamage;
        const dmgPerHitAvg = dmgPerHit * critComposite;
        const totalAvgDmg = settingsRef.timeBombStacks * dmgPerHitAvg;

    
        readSelection(`skillPower${skillPlacement}`).innerHTML = `${baseSkillPower.toLocaleString()}`;
        readSelection(`powerModifier${skillPlacement}`).innerHTML = `${(skillPowerModifier*100).toLocaleString()}%`;
        readSelection(`uniquePowerBonus${skillPlacement}`).innerHTML = `${blastMulti.toLocaleString()}x`;

        readSelection(`dmgPerHit${skillPlacement}`).innerHTML = `${dmgPerHit.toLocaleString()}`;
        readSelection(`dmgPerCrit${skillPlacement}`).innerHTML = `${dmgPerHitCrit.toLocaleString()}`;
        readSelection(`avgPerHit${skillPlacement}`).innerHTML = `${dmgPerHitAvg.toLocaleString()}`;

        readSelection(`totalAvgDmg${skillPlacement}`).innerHTML = `${totalAvgDmg.toLocaleString()}`;
        

        const rowsObject = {maxStacks,cooldown,cost,basePowerModifier,range}
        // let skillHTML = "<div class='basicsDRheaderTitle'>Ability Statistics</div>";
        let skillHTML = "";
        let skillHTMLRowsHTML = '';
        rowsListings = [//evadeCost,meleeCost
            {"statName": "maxStacks","statCoverName": "Max Stacks","tooltip":"","relevantTags": [],"isNotAPercent": true},
            {"statName": "cooldown","statCoverName": "Stack Cooldown","tooltip":"","relevantTags": [],"isNotAPercent": true,"roundAnyways": true},
            {"statName": "cost","statCoverName": "Cost","tooltip":"","relevantTags": [],"isNotAPercent": true,"roundAnyways": true},
            {"statName": "basePowerModifier","statCoverName": "Base Power Modifier","tooltip":"","relevantTags": [],"isNotAPercent": false},
            {"statName": "range","statCoverName": "Range (m)","tooltip":"","relevantTags": [],"isNotAPercent": true,"roundAnyways": true},

            // {"statName": "critRatePercentBonus","statCoverName": "+% Crit Rate","tooltip":"","relevantTags": [],"isNotAPercent": false},
            // {"statName": "critDamagePercentBonus","statCoverName": "+% Crit Damage","tooltip":"","relevantTags": [],"isNotAPercent": false},
            // {"statName": "totalSkillCritRate","statCoverName": "Total Skill CR","tooltip":"","relevantTags": [],"isNotAPercent": false,"condition": (returnObject.totalSkillCritRate != returnObject.baseCharacterCritRate)},
            // {"statName": "totalSkillCritDamage","statCoverName": "Total Skill CD","tooltip":"","relevantTags": [],"isNotAPercent": true,"roundAnyways": true,"condition": (returnObject.totalSkillCritDamage != returnObject.baseCharacterCritDamage)},
        ]
        skillHTMLRowsHTML += basicsUpdates.expandRowListingInfo(rowsListings,rowsObject);
        readSelection(`abilityBreakdownBody${skillPlacement}`).innerHTML += skillHTMLRowsHTML ? skillHTML + skillHTMLRowsHTML + "<br>" : "";

        
        readSelection("timeBombStacks").value = +settingsRef.timeBombStacks;
        readSelection("timeBombStackDisplay").innerHTML = `${settingsRef.timeBombStacks}`;

    },
    esiemoBlastCalcs(index,returnObject,bombCap) {
        const characterRef = characters.Esiemo;
        const settingsRef = characterRef.characterSettings;
        const abilityTypeArray = characterRef.abilities.ability2.base.type;
        const skillPlacement = 2; 

        readSelection(`abilityBreakdownBody${skillPlacement}`).innerHTML = `
        <div class="abilityBreakdownGeneralMessage">
            The bonus here is automatically adjusted based on your specified bomb count on both your first and third abilities.
        </div>

        <div class="traitMegaTitleHeader">RESULTS</div>
        <div class="basicsSummaryBox" id="lepicResultsBox">

            <div class="totalHealingBox">
                <div class="totalHealingBoxHalf hasHoverTooltip">
                    <div class="totalHealingHeader">Specified Bomb Count</div>
                    <div class="totalHealingValue" id="skillPower${skillPlacement}">0.00%</div>
                </div>
                <div class="totalHealingBoxHalf hasHoverTooltip">
                    <div class="totalHealingHeader">Resulting DMG Multi</div>
                    <div class="totalHealingValue" id="powerModifier${skillPlacement}">0.00%</div>
                </div>
            </div>
        </div>
        `;
        readSelection(`abilityBreakdownBody${skillPlacement}`).innerHTML += `
        <div class="abilityBreakdownHeader">DESCRIPTION</div>
        <div class="abilityBreakdownDescription">${characterRef.abilities.ability2.base.desc}</div>
        `;

        const maxStacks = 5;
        const cooldown = 2.7 * (1 + index.SkillCooldown);
        const cost = 0 * (1 + index.SkillCost);
        const increasePerBomb = 0.35;
        const multiplierCap = bombCap ? bombCap : 8;

        const totalBombsActive = Math.min(multiplierCap,(settingsRef.timeBombStacks + settingsRef.guidedBombStacks + settingsRef.propagandaBombStacks))// + asdf the other bomb
        const totalBombsMulti = 1 + (totalBombsActive * increasePerBomb);

        settingsRef.blastStacksPowerBonus = totalBombsMulti;


        readSelection(`skillPower${skillPlacement}`).innerHTML = `${totalBombsActive.toLocaleString()}`;
        readSelection(`powerModifier${skillPlacement}`).innerHTML = `${totalBombsMulti.toLocaleString()}x`;

        

        const rowsObject = {maxStacks,cooldown,cost,increasePerBomb}
        // let skillHTML = "<div class='basicsDRheaderTitle'>Ability Statistics</div>";
        let skillHTML = "";
        let skillHTMLRowsHTML = '';
        rowsListings = [//evadeCost,meleeCost
            {"statName": "maxStacks","statCoverName": "Max Stacks","tooltip":"","relevantTags": [],"isNotAPercent": true},
            {"statName": "cooldown","statCoverName": "Stack Cooldown","tooltip":"","relevantTags": [],"isNotAPercent": true,"roundAnyways": true},
            {"statName": "cost","statCoverName": "Cost","tooltip":"","relevantTags": [],"isNotAPercent": true,"roundAnyways": true},
            {"statName": "increasePerBomb","statCoverName": "+Power/Bomb","tooltip":"","relevantTags": [],"isNotAPercent": false},

            // {"statName": "critRatePercentBonus","statCoverName": "+% Crit Rate","tooltip":"","relevantTags": [],"isNotAPercent": false},
            // {"statName": "critDamagePercentBonus","statCoverName": "+% Crit Damage","tooltip":"","relevantTags": [],"isNotAPercent": false},
            // {"statName": "totalSkillCritRate","statCoverName": "Total Skill CR","tooltip":"","relevantTags": [],"isNotAPercent": false,"condition": (returnObject.totalSkillCritRate != returnObject.baseCharacterCritRate)},
            // {"statName": "totalSkillCritDamage","statCoverName": "Total Skill CD","tooltip":"","relevantTags": [],"isNotAPercent": true,"roundAnyways": true,"condition": (returnObject.totalSkillCritDamage != returnObject.baseCharacterCritDamage)},
        ]
        skillHTMLRowsHTML += basicsUpdates.expandRowListingInfo(rowsListings,rowsObject);
        readSelection(`abilityBreakdownBody${skillPlacement}`).innerHTML += skillHTMLRowsHTML ? skillHTML + skillHTMLRowsHTML + "<br>" : "";

    },
    esiemoBlastCalcs2(index,returnObject) {
        //for when Creative Explosion modifies the bomb multi bonus cap
        customDamage.esiemoBlastCalcs(index,returnObject,10);
    },
    esiemoClusterCalcsTier0(index,returnObject) {
        const characterRef = characters.Esiemo;
        const settingsRef = characterRef.characterSettings;

        //clear the bonus
        settingsRef.blastStacksPowerBonus = 1;

    },
    esiemoClusterCalcs(index,returnObject) {
        const characterRef = characters.Esiemo;
        const settingsRef = characterRef.characterSettings;
        const abilityTypeArray = characterRef.abilities.ability2["Cluster Bomb"].type;
        const skillPlacement = 2; 

        readSelection(`abilityBreakdownBody${skillPlacement}`).innerHTML = `
        <div class="abilityBreakdownGeneralMessage">
            This transcendent mod sucks heinous amounts of shit. Do. Not. Use it.
            <br>
            Remind me to add the burn damage to this later, though it's so low priority I don't really care.
        </div>

        <div class="traitMegaTitleHeader">RESULTS</div>
        <div class="basicsSummaryBox" id="lepicResultsBox">

            <div class="totalHealingBox">
                <div class="totalHealingBoxHalf hasHoverTooltip">
                    <div class="totalHealingHeader">Skill Power</div>
                    <div class="totalHealingValue" id="skillPower${skillPlacement}">0.00%</div>
                </div>
                <div class="totalHealingBoxHalf hasHoverTooltip">
                    <div class="totalHealingHeader">Power Mod</div>
                    <div class="totalHealingValue" id="powerModifier${skillPlacement}">0.00%</div>
                </div>
            </div>

            <div class="totalHealingBox">
                <div class="totalHealingBoxHalf hasHoverTooltip">
                    <div class="totalHealingHeader">DMG/MiniBomb</div>
                    <div class="totalHealingValue" id="dmgPerHit${skillPlacement}">0.00</div>
                </div>
                <div class="totalHealingBoxHalf hasHoverTooltip">
                    <div class="totalHealingHeader">DMG/MiniBomb</div>
                    <div class="totalHealingValue" id="dmgPerCrit${skillPlacement}">0.00%</div>
                </div>
            </div>
            <div class="totalHealingBox">
                <div class="totalHealingBoxHalf hasHoverTooltip">
                    <div class="totalHealingHeader">AVG DMG/MiniBomb</div>
                    <div class="totalHealingValue" id="avgPerHit${skillPlacement}">0.00</div>
                </div>
            </div>
            <div class="totalHealingBox">
                <div class="totalHealingBoxHalf hasHoverTooltip">
                    <div class="totalHealingHeader">Total AVG DMG per Set[2]</div>
                    <div class="totalHealingValue" id="totalAvgDmg${skillPlacement}">0.00</div>
                </div>
            </div>
        </div>
        `;
        readSelection(`abilityBreakdownBody${skillPlacement}`).innerHTML += `
        <div class="abilityBreakdownHeader">DESCRIPTION</div>
        <div class="abilityBreakdownDescription">${characterRef.abilities.ability2["Cluster Bomb"].desc}</div>
        `;

        const bombsPerExplosion = 2;
        const cooldown = 10 * (1 + index.SkillCooldown);
        const cost = 15 * (1 + index.SkillCost);
        const range = 3.5 * (1 + Math.min(2,index.SkillRange));

        const basePowerModifier = 27.3/100;

        const sumModifierBonus = calcs.getTotalSkillPowerModifier(index,abilityTypeArray);
        const baseSkillPower = calcs.getTotalSkillPower(index,abilityTypeArray);
        const abilityDR = calcs.getResistanceBasedDR(abilityTypeArray[0]);

        const skillPowerModifier = basePowerModifier + sumModifierBonus;
    
        const critRate = returnObject.totalSkillCritRate;
        const critDamage = returnObject.totalSkillCritDamage;
        const critComposite = 1 + (critRate * (critDamage-1));
    
        const dmgPerHit = baseSkillPower * skillPowerModifier * abilityDR;
        const dmgPerHitCrit = dmgPerHit * critDamage;
        const dmgPerHitAvg = dmgPerHit * critComposite;
        const totalAvgDmg = 2 * dmgPerHitAvg;

    
        readSelection(`skillPower${skillPlacement}`).innerHTML = `${baseSkillPower.toLocaleString()}`;
        readSelection(`powerModifier${skillPlacement}`).innerHTML = `${(skillPowerModifier*100).toLocaleString()}%`;

        readSelection(`dmgPerHit${skillPlacement}`).innerHTML = `${dmgPerHit.toLocaleString()}`;
        readSelection(`dmgPerCrit${skillPlacement}`).innerHTML = `${dmgPerHitCrit.toLocaleString()}`;
        readSelection(`avgPerHit${skillPlacement}`).innerHTML = `${dmgPerHitAvg.toLocaleString()}`;

        readSelection(`totalAvgDmg${skillPlacement}`).innerHTML = `${totalAvgDmg.toLocaleString()}`;
        

        const rowsObject = {bombsPerExplosion,cooldown,cost,basePowerModifier,range}
        // let skillHTML = "<div class='basicsDRheaderTitle'>Ability Statistics</div>";
        let skillHTML = "";
        let skillHTMLRowsHTML = '';
        rowsListings = [//evadeCost,meleeCost
            {"statName": "bombsPerExplosion","statCoverName": "Bombs per Explosion","tooltip":"","relevantTags": [],"isNotAPercent": true},
            {"statName": "cooldown","statCoverName": "Cooldown","tooltip":"","relevantTags": [],"isNotAPercent": true,"roundAnyways": true},
            {"statName": "cost","statCoverName": "Cost","tooltip":"","relevantTags": [],"isNotAPercent": true,"roundAnyways": true},
            {"statName": "basePowerModifier","statCoverName": "Base Power Modifier","tooltip":"","relevantTags": [],"isNotAPercent": false},
            {"statName": "range","statCoverName": "Range (m)","tooltip":"","relevantTags": [],"isNotAPercent": true,"roundAnyways": true},

            // {"statName": "critRatePercentBonus","statCoverName": "+% Crit Rate","tooltip":"","relevantTags": [],"isNotAPercent": false},
            // {"statName": "critDamagePercentBonus","statCoverName": "+% Crit Damage","tooltip":"","relevantTags": [],"isNotAPercent": false},
            // {"statName": "totalSkillCritRate","statCoverName": "Total Skill CR","tooltip":"","relevantTags": [],"isNotAPercent": false,"condition": (returnObject.totalSkillCritRate != returnObject.baseCharacterCritRate)},
            // {"statName": "totalSkillCritDamage","statCoverName": "Total Skill CD","tooltip":"","relevantTags": [],"isNotAPercent": true,"roundAnyways": true,"condition": (returnObject.totalSkillCritDamage != returnObject.baseCharacterCritDamage)},
        ]
        skillHTMLRowsHTML += basicsUpdates.expandRowListingInfo(rowsListings,rowsObject);
        readSelection(`abilityBreakdownBody${skillPlacement}`).innerHTML += skillHTMLRowsHTML ? skillHTML + skillHTMLRowsHTML + "<br>" : "";

    },
    esiemoGuidedCalcs(index,returnObject) {
        const characterRef = characters.Esiemo;
        const settingsRef = characterRef.characterSettings;
        const abilityTypeArray = characterRef.abilities.ability3.base.type;
        const skillPlacement = 3; 

        settingsRef.propagandaBombStacks = 0;

        readSelection(`abilityBreakdownBody${skillPlacement}`).innerHTML = `
        <div class="totalHealingBox">
            <div class="statsRowName">Bombs Placed:&nbsp;<span id="guidedBombStackDisplay">0</span></div>
            <div class="statsRowToggle">
                <input type="range" id="guidedBombStacks" name="slider" min="0" max="3" value="3" step="1" onchange="settings.updateCharacterSettings('Esiemo')">
            </div>
        </div>

        <div class="traitMegaTitleHeader">RESULTS</div>
        <div class="basicsSummaryBox" id="lepicResultsBox">

            <div class="totalHealingBox">
                <div class="totalHealingBoxHalf hasHoverTooltip">
                    <div class="totalHealingHeader">Skill Power</div>
                    <div class="totalHealingValue" id="skillPower${skillPlacement}">0.00%</div>
                </div>
                <div class="totalHealingBoxHalf hasHoverTooltip">
                    <div class="totalHealingHeader">Power Mod</div>
                    <div class="totalHealingValue" id="powerModifier${skillPlacement}">0.00%</div>
                </div>
                <div class="totalHealingBoxHalf hasHoverTooltip">
                    <div class="totalHealingHeader">Blast Multi</div>
                    <div class="totalHealingValue" id="uniquePowerBonus${skillPlacement}">0.00%</div>
                </div>
            </div>

            <div class="totalHealingBox">
                <div class="totalHealingBoxHalf hasHoverTooltip">
                    <div class="totalHealingHeader">DMG/Hit</div>
                    <div class="totalHealingValue" id="dmgPerHit${skillPlacement}">0.00</div>
                </div>
                <div class="totalHealingBoxHalf hasHoverTooltip">
                    <div class="totalHealingHeader">DMG/Crit</div>
                    <div class="totalHealingValue" id="dmgPerCrit${skillPlacement}">0.00%</div>
                </div>
            </div>
            <div class="totalHealingBox">
                <div class="totalHealingBoxHalf hasHoverTooltip">
                    <div class="totalHealingHeader">AVG DMG/Bomb</div>
                    <div class="totalHealingValue" id="avgPerHit${skillPlacement}">0.00</div>
                </div>
            </div>
            <div class="totalHealingBox">
                <div class="totalHealingBoxHalf hasHoverTooltip">
                    <div class="totalHealingHeader">Total AVG DMG [${settingsRef.guidedBombStacks}]</div>
                    <div class="totalHealingValue" id="totalAvgDmg${skillPlacement}">0.00</div>
                </div>
            </div>
        </div>
        `;
        readSelection(`abilityBreakdownBody${skillPlacement}`).innerHTML += `
        <div class="abilityBreakdownHeader">DESCRIPTION</div>
        <div class="abilityBreakdownDescription">${characterRef.abilities.ability3.base.desc}</div>
        `;
        //the dom element mods need to after all of them are done, so after the stats rows are generated, else they get reset
        // readSelection("timeBombStacks").value = +settingsRef.timeBombStacks;
        // readSelection("timeBombStackDisplay").innerHTML = `${settingsRef.timeBombStacks}`;

        const maxStacks = 3;
        const cooldown = 14 * (1 + index.SkillCooldown);
        const cost = 18 * (1 + index.SkillCost);
        const range = 3 * (1 + Math.min(2,index.SkillRange));
        const rangeDetection = 10 * (1 + Math.min(2,index.SkillRange));
        const detectionDuration = 40 * (1 + index.SkillDuration);


        const basePowerModifier = 1061.9/100;

        const sumModifierBonus = calcs.getTotalSkillPowerModifier(index,abilityTypeArray);
        const baseSkillPower = calcs.getTotalSkillPower(index,abilityTypeArray);
        const fireDR = calcs.getResistanceBasedDR(abilityTypeArray[0]);

        const skillPowerModifier = basePowerModifier + sumModifierBonus;
        const blastMulti = settingsRef.blastStacksPowerBonus;
    
        const critRate = returnObject.totalSkillCritRate;
        const critDamage = returnObject.totalSkillCritDamage;
        const critComposite = 1 + (critRate * (critDamage-1));
    
        const dmgPerHit = baseSkillPower * skillPowerModifier * blastMulti * fireDR;
        const dmgPerHitCrit = dmgPerHit * critDamage;
        const dmgPerHitAvg = dmgPerHit * critComposite;
        const totalAvgDmg = settingsRef.guidedBombStacks * dmgPerHitAvg;

    
        readSelection(`skillPower${skillPlacement}`).innerHTML = `${baseSkillPower.toLocaleString()}`;
        readSelection(`powerModifier${skillPlacement}`).innerHTML = `${(skillPowerModifier*100).toLocaleString()}%`;
        readSelection(`uniquePowerBonus${skillPlacement}`).innerHTML = `${blastMulti.toLocaleString()}x`;

        readSelection(`dmgPerHit${skillPlacement}`).innerHTML = `${dmgPerHit.toLocaleString()}`;
        readSelection(`dmgPerCrit${skillPlacement}`).innerHTML = `${dmgPerHitCrit.toLocaleString()}`;
        readSelection(`avgPerHit${skillPlacement}`).innerHTML = `${dmgPerHitAvg.toLocaleString()}`;

        readSelection(`totalAvgDmg${skillPlacement}`).innerHTML = `${totalAvgDmg.toLocaleString()}`;
        

        const rowsObject = {maxStacks,cooldown,cost,basePowerModifier,range,rangeDetection,detectionDuration}
        // let skillHTML = "<div class='basicsDRheaderTitle'>Ability Statistics</div>";
        let skillHTML = "";
        let skillHTMLRowsHTML = '';
        rowsListings = [//evadeCost,meleeCost
            {"statName": "maxStacks","statCoverName": "Max Stacks","tooltip":"","relevantTags": [],"isNotAPercent": true},
            {"statName": "cooldown","statCoverName": "Stack Cooldown","tooltip":"","relevantTags": [],"isNotAPercent": true,"roundAnyways": true},
            {"statName": "cost","statCoverName": "Cost","tooltip":"","relevantTags": [],"isNotAPercent": true,"roundAnyways": true},
            {"statName": "rangeDetection","statCoverName": "Detection Range (m)","tooltip":"","relevantTags": [],"isNotAPercent": true,"roundAnyways": true},
            {"statName": "detectionDuration","statCoverName": "Detection Duration","tooltip":"","relevantTags": [],"isNotAPercent": true,"roundAnyways": true},
            {"statName": "basePowerModifier","statCoverName": "Base Power Modifier","tooltip":"","relevantTags": [],"isNotAPercent": false},
            {"statName": "range","statCoverName": "Range (m)","tooltip":"","relevantTags": [],"isNotAPercent": true,"roundAnyways": true},

            // {"statName": "critRatePercentBonus","statCoverName": "+% Crit Rate","tooltip":"","relevantTags": [],"isNotAPercent": false},
            // {"statName": "critDamagePercentBonus","statCoverName": "+% Crit Damage","tooltip":"","relevantTags": [],"isNotAPercent": false},
            // {"statName": "totalSkillCritRate","statCoverName": "Total Skill CR","tooltip":"","relevantTags": [],"isNotAPercent": false,"condition": (returnObject.totalSkillCritRate != returnObject.baseCharacterCritRate)},
            // {"statName": "totalSkillCritDamage","statCoverName": "Total Skill CD","tooltip":"","relevantTags": [],"isNotAPercent": true,"roundAnyways": true,"condition": (returnObject.totalSkillCritDamage != returnObject.baseCharacterCritDamage)},
        ]
        skillHTMLRowsHTML += basicsUpdates.expandRowListingInfo(rowsListings,rowsObject);
        readSelection(`abilityBreakdownBody${skillPlacement}`).innerHTML += skillHTMLRowsHTML ? skillHTML + skillHTMLRowsHTML + "<br>" : "";

        
        readSelection("guidedBombStacks").value = +settingsRef.guidedBombStacks;
        readSelection("guidedBombStackDisplay").innerHTML = `${settingsRef.guidedBombStacks}`;

    },
    esiemoPropagandaCalcs(index,returnObject) {
        const characterRef = characters.Esiemo;
        const settingsRef = characterRef.characterSettings;
        const abilityTypeArray = characterRef.abilities.ability3["Explosive Propaganda"].type;
        const skillPlacement = 3; 

        settingsRef.guidedBombStacks = 0;

        readSelection(`abilityBreakdownBody${skillPlacement}`).innerHTML = `

        <div class="traitMegaTitleHeader">RESULTS</div>
        <div class="basicsSummaryBox" id="lepicResultsBox">

            <div class="totalHealingBox">
                <div class="statsRowName">Bombs Placed:&nbsp;<span id="propagandaBombStackDisplay">0</span></div>
                <div class="statsRowToggle">
                    <input type="range" id="propagandaBombStacks" name="slider" min="0" max="2" value="2" step="1" onchange="settings.updateCharacterSettings('Esiemo')">
                </div>
            </div>

            <div class="totalHealingBox">
                <div class="totalHealingBoxHalf hasHoverTooltip">
                    <div class="totalHealingHeader">Skill Power</div>
                    <div class="totalHealingValue" id="skillPower${skillPlacement}">0.00%</div>
                </div>
                <div class="totalHealingBoxHalf hasHoverTooltip">
                    <div class="totalHealingHeader">Power Mod</div>
                    <div class="totalHealingValue" id="powerModifier${skillPlacement}">0.00%</div>
                </div>
            </div>

            <div class="totalHealingBox">
                <div class="totalHealingBoxHalf hasHoverTooltip">
                    <div class="totalHealingHeader">DMG/Hit</div>
                    <div class="totalHealingValue" id="dmgPerHit${skillPlacement}">0.00</div>
                </div>
                <div class="totalHealingBoxHalf hasHoverTooltip">
                    <div class="totalHealingHeader">DMG/Crit</div>
                    <div class="totalHealingValue" id="dmgPerCrit${skillPlacement}">0.00%</div>
                </div>
            </div>
            <div class="totalHealingBox">
                <div class="totalHealingBoxHalf hasHoverTooltip">
                    <div class="totalHealingHeader">AVG DMG</div>
                    <div class="totalHealingValue" id="avgPerHit${skillPlacement}">0.00</div>
                </div>
            </div>
        </div>
        `;
        readSelection(`abilityBreakdownBody${skillPlacement}`).innerHTML += `
        <div class="abilityBreakdownHeader">DESCRIPTION</div>
        <div class="abilityBreakdownDescription">${characterRef.abilities.ability3["Explosive Propaganda"].desc}</div>
        `;
        //the dom element mods need to after all of them are done, so after the stats rows are generated, else they get reset

        const cooldown = 45 * (1 + index.SkillCooldown);
        const cost = 25 * (1 + index.SkillCost);
        const range = 4 * (1 + Math.min(2.5,index.SkillRange));
        const rangeTaunt = 6 * (1 + Math.min(2.5,index.SkillRange));
        const tauntDuration = 8 * (1 + index.SkillDuration);


        const basePowerModifier = 1493.3/100;

        const sumModifierBonus = calcs.getTotalSkillPowerModifier(index,abilityTypeArray);
        const baseSkillPower = calcs.getTotalSkillPower(index,abilityTypeArray);
        const blastMulti = settingsRef.blastStacksPowerBonus;
        const fireDR = calcs.getResistanceBasedDR(abilityTypeArray[0]);

        const skillPowerModifier = basePowerModifier + sumModifierBonus;
    
        const critRate = returnObject.totalSkillCritRate;
        const critDamage = returnObject.totalSkillCritDamage;
        const critComposite = 1 + (critRate * (critDamage-1));
    
        const dmgPerHit = baseSkillPower * skillPowerModifier * blastMulti * fireDR;
        const dmgPerHitCrit = dmgPerHit * critDamage;
        const dmgPerHitAvg = dmgPerHit * critComposite;

    
        readSelection(`skillPower${skillPlacement}`).innerHTML = `${baseSkillPower.toLocaleString()}`;
        readSelection(`powerModifier${skillPlacement}`).innerHTML = `${(skillPowerModifier*100).toLocaleString()}%`;

        readSelection(`dmgPerHit${skillPlacement}`).innerHTML = `${dmgPerHit.toLocaleString()}`;
        readSelection(`dmgPerCrit${skillPlacement}`).innerHTML = `${dmgPerHitCrit.toLocaleString()}`;
        readSelection(`avgPerHit${skillPlacement}`).innerHTML = `${dmgPerHitAvg.toLocaleString()}`;
        

        const rowsObject = {cooldown,cost,basePowerModifier,range,rangeTaunt,tauntDuration}
        // let skillHTML = "<div class='basicsDRheaderTitle'>Ability Statistics</div>";
        let skillHTML = "";
        let skillHTMLRowsHTML = '';
        rowsListings = [
            {"statName": "cooldown","statCoverName": "Cooldown","tooltip":"","relevantTags": [],"isNotAPercent": true,"roundAnyways": true},
            {"statName": "cost","statCoverName": "Cost","tooltip":"","relevantTags": [],"isNotAPercent": true,"roundAnyways": true},
            {"statName": "tauntDuration","statCoverName": "Taunt Duration","tooltip":"","relevantTags": [],"isNotAPercent": true,"roundAnyways": true},
            {"statName": "rangeTaunt","statCoverName": "Taunt Range (m)","tooltip":"","relevantTags": [],"isNotAPercent": true,"roundAnyways": true},
            {"statName": "basePowerModifier","statCoverName": "Base Power Modifier","tooltip":"","relevantTags": [],"isNotAPercent": false},
            {"statName": "range","statCoverName": "DMG Range (m)","tooltip":"","relevantTags": [],"isNotAPercent": true,"roundAnyways": true},

            // {"statName": "critRatePercentBonus","statCoverName": "+% Crit Rate","tooltip":"","relevantTags": [],"isNotAPercent": false},
            // {"statName": "critDamagePercentBonus","statCoverName": "+% Crit Damage","tooltip":"","relevantTags": [],"isNotAPercent": false},
            // {"statName": "totalSkillCritRate","statCoverName": "Total Skill CR","tooltip":"","relevantTags": [],"isNotAPercent": false,"condition": (returnObject.totalSkillCritRate != returnObject.baseCharacterCritRate)},
            // {"statName": "totalSkillCritDamage","statCoverName": "Total Skill CD","tooltip":"","relevantTags": [],"isNotAPercent": true,"roundAnyways": true,"condition": (returnObject.totalSkillCritDamage != returnObject.baseCharacterCritDamage)},
        ]
        skillHTMLRowsHTML += basicsUpdates.expandRowListingInfo(rowsListings,rowsObject);
        readSelection(`abilityBreakdownBody${skillPlacement}`).innerHTML += skillHTMLRowsHTML ? skillHTML + skillHTMLRowsHTML + "<br>" : "";

        readSelection("propagandaBombStacks").value = +settingsRef.propagandaBombStacks;
        readSelection("propagandaBombStackDisplay").innerHTML = `${settingsRef.propagandaBombStacks}`;

    },
    esiemoArcheCalcsMadnessTier0(index) {
        const characterRef = characters.Esiemo;
        const settingsRef = characterRef.characterSettings;

        index.PowerOptimization += settingsRef.isMadnessActive ? 0.25 : 0;

        const madnessATK = 0.25;
        const madnessMovement = 0.30;
        const madnessDEF = -0.30;

    },
    esiemoArcheCalcs(index,returnObject) {
        const characterRef = characters.Esiemo;
        const settingsRef = characterRef.characterSettings;
        const abilityTypeArray = characterRef.abilities.ability4.base.type;
        const skillPlacement = 4;
        //madness skill power is added via esiemoArcheCalcsMadness as a tier 0 call

        readSelection(`abilityBreakdownBody${skillPlacement}`).innerHTML = `

        <div class="traitMegaTitleHeader">RESULTS</div>
        <div class="basicsSummaryBox" id="lepicResultsBox">

            <div class="totalHealingBox">
                <div class="totalHealingBoxHalf hasHoverTooltip">
                    <div class="totalHealingHeader">Skill Power</div>
                    <div class="totalHealingValue" id="skillPower${skillPlacement}">0.00%</div>
                </div>
                <div class="totalHealingBoxHalf hasHoverTooltip">
                    <div class="totalHealingHeader">Power Mod</div>
                    <div class="totalHealingValue" id="powerModifier${skillPlacement}">0.00%</div>
                </div>
            </div>

            <div class="totalHealingBox">
                <div class="totalHealingBoxHalf hasHoverTooltip">
                    <div class="totalHealingHeader">DMG/Hit</div>
                    <div class="totalHealingValue" id="dmgPerHit${skillPlacement}">0.00</div>
                </div>
                <div class="totalHealingBoxHalf hasHoverTooltip">
                    <div class="totalHealingHeader">DMG/Crit</div>
                    <div class="totalHealingValue" id="dmgPerCrit${skillPlacement}">0.00%</div>
                </div>
            </div>
            <div class="totalHealingBox">
                <div class="totalHealingBoxHalf hasHoverTooltip">
                    <div class="totalHealingHeader">AVG DMG Explosion</div>
                    <div class="totalHealingValue" id="avgPerHit${skillPlacement}">0.00</div>
                </div>
            </div>

            <div class="abilityBreakdownGeneralMessage">The madness buff can never realistically apply to this ability, as it only lasts for a duration after the skill cast. Only use this toggle if you want to see how the buff factors in on the skill power of the mine-based abilities.</div>
            <div class="totalHealingBox">
                <div class="totalHealingBoxHalf hasHoverTooltip">
                    <div style="padding-right: 5px;">Add Madness Power?</div>
                    <label class="toggleContainer">
                        <input type="checkbox" class="toggleCheckbox" id="isMadnessActive" onchange="settings.updateCharacterSettings('Esiemo')"> <!--math toggle-->
                        <span class="toggleSlider"></span>
                    </label>
                </div>
            </div>

        </div>
        `;
        readSelection(`abilityBreakdownBody${skillPlacement}`).innerHTML += `
        <div class="abilityBreakdownHeader">DESCRIPTION</div>
        <div class="abilityBreakdownDescription">${characterRef.abilities.ability4.base.desc}</div>
        `;
        //the dom element mods need to after all of them are done, so after the stats rows are generated, else they get reset
        // readSelection("timeBombStacks").value = +settingsRef.timeBombStacks;
        // readSelection("timeBombStackDisplay").innerHTML = `${settingsRef.timeBombStacks}`;

        const cooldown = 80 * (1 + index.SkillCooldown);
        const cost = 65 * (1 + index.SkillCost);
        const range = 6 * (1 + Math.min(2,index.SkillRange));
        const madnessDuration = 14 * (1 + index.SkillDuration);
        const madnessPower = 0.25;
        const madnessATK = 0.25;
        const madnessMovement = 0.30;
        const madnessDEF = -0.30;


        const basePowerModifier = 7414.4/100;
        const basePowerModifierRunning = 85.8/100;
        const fireDR = calcs.getResistanceBasedDR(abilityTypeArray[0]);

        const sumModifierBonus = calcs.getTotalSkillPowerModifier(index,abilityTypeArray);
        const baseSkillPower = calcs.getTotalSkillPower(index,abilityTypeArray);

        const skillPowerModifier = basePowerModifier + sumModifierBonus;
    
        const critRate = returnObject.totalSkillCritRate;
        const critDamage = returnObject.totalSkillCritDamage;
        const critComposite = 1 + (critRate * (critDamage-1));
    
        const dmgPerHit = baseSkillPower * skillPowerModifier * fireDR;
        const dmgPerHitCrit = dmgPerHit * critDamage;
        const dmgPerHitAvg = dmgPerHit * critComposite;

    
        readSelection(`skillPower${skillPlacement}`).innerHTML = `${baseSkillPower.toLocaleString()}`;
        readSelection(`powerModifier${skillPlacement}`).innerHTML = `${(skillPowerModifier*100).toLocaleString()}%`;

        readSelection(`dmgPerHit${skillPlacement}`).innerHTML = `${dmgPerHit.toLocaleString()}`;
        readSelection(`dmgPerCrit${skillPlacement}`).innerHTML = `${dmgPerHitCrit.toLocaleString()}`;
        readSelection(`avgPerHit${skillPlacement}`).innerHTML = `${dmgPerHitAvg.toLocaleString()}`;
        

        const rowsObject = {cooldown,cost,basePowerModifier,range,madnessDuration,madnessPower,madnessATK,madnessMovement,madnessDEF}
        // let skillHTML = "<div class='basicsDRheaderTitle'>Ability Statistics</div>";
        let skillHTML = "";
        let skillHTMLRowsHTML = '';
        rowsListings = [//evadeCost,meleeCost
            {"statName": "cooldown","statCoverName": "Stack Cooldown","tooltip":"","relevantTags": [],"isNotAPercent": true,"roundAnyways": true},
            {"statName": "cost","statCoverName": "Cost","tooltip":"","relevantTags": [],"isNotAPercent": true,"roundAnyways": true},
            {"statName": "basePowerModifier","statCoverName": "Base Power Modifier","tooltip":"","relevantTags": [],"isNotAPercent": false},
            {"statName": "range","statCoverName": "Range (m)","tooltip":"","relevantTags": [],"isNotAPercent": true,"roundAnyways": true},

            {"statName": "madnessDuration","statCoverName": "Madness Duration","tooltip":"","relevantTags": [],"isNotAPercent": true,"roundAnyways": true},
            {"statName": "madnessPower","statCoverName": "Madness Power%","tooltip":"","relevantTags": [],"isNotAPercent": false},
            {"statName": "madnessATK","statCoverName": "Madness FirearmATK%","tooltip":"","relevantTags": [],"isNotAPercent": false},
            {"statName": "madnessMovement","statCoverName": "Madness Movement Speed","tooltip":"","relevantTags": [],"isNotAPercent": false},
            {"statName": "madnessDEF","statCoverName": "Madness DEF","tooltip":"","relevantTags": [],"isNotAPercent": false},
            
            

            // {"statName": "critRatePercentBonus","statCoverName": "+% Crit Rate","tooltip":"","relevantTags": [],"isNotAPercent": false},
            // {"statName": "critDamagePercentBonus","statCoverName": "+% Crit Damage","tooltip":"","relevantTags": [],"isNotAPercent": false},
            // {"statName": "totalSkillCritRate","statCoverName": "Total Skill CR","tooltip":"","relevantTags": [],"isNotAPercent": false,"condition": (returnObject.totalSkillCritRate != returnObject.baseCharacterCritRate)},
            // {"statName": "totalSkillCritDamage","statCoverName": "Total Skill CD","tooltip":"","relevantTags": [],"isNotAPercent": true,"roundAnyways": true,"condition": (returnObject.totalSkillCritDamage != returnObject.baseCharacterCritDamage)},
        ]
        skillHTMLRowsHTML += basicsUpdates.expandRowListingInfo(rowsListings,rowsObject);
        readSelection(`abilityBreakdownBody${skillPlacement}`).innerHTML += skillHTMLRowsHTML ? skillHTML + skillHTMLRowsHTML + "<br>" : "";

        readSelection("isMadnessActive").checked = settingsRef.isMadnessActive;

    },
    esiemoCreativeCalcsNarcissimTier0(index) {
        // const characterRef = characters.Esiemo;
        // const settingsRef = characterRef.characterSettings;

        // index.PowerOptimization += settingsRef.isMadnessActive ? 0.25 : 0;

        // const madnessATK = 0.25;
        // const madnessMovement = 0.30;
        // const madnessDEF = -0.30;

    },
    esiemoCreativeCalcs(index,returnObject) {
        const characterRef = characters.Esiemo;
        const settingsRef = characterRef.characterSettings;
        const abilityTypeArray = characterRef.abilities.ability4["Creative Explosion"].type;
        const skillPlacement = 4;
        //madness skill power is added via esiemoArcheCalcsMadness as a tier 0 call

        readSelection(`abilityBreakdownBody${skillPlacement}`).innerHTML = `

        <div class="traitMegaTitleHeader">RESULTS</div>
        <div class="basicsSummaryBox" id="lepicResultsBox">

            <div class="totalHealingBox">
                <div class="totalHealingBoxHalf hasHoverTooltip">
                    <div class="totalHealingHeader">Skill Power</div>
                    <div class="totalHealingValue" id="skillPower${skillPlacement}">0.00%</div>
                </div>
                <div class="totalHealingBoxHalf hasHoverTooltip">
                    <div class="totalHealingHeader">Power Mod</div>
                    <div class="totalHealingValue" id="powerModifier${skillPlacement}">0.00%</div>
                </div>
            </div>

            <div class="totalHealingBox">
                <div class="totalHealingBoxHalf hasHoverTooltip">
                    <div class="totalHealingHeader">DMG/Hit</div>
                    <div class="totalHealingValue" id="dmgPerHit${skillPlacement}">0.00</div>
                </div>
                <div class="totalHealingBoxHalf hasHoverTooltip">
                    <div class="totalHealingHeader">DMG/Crit</div>
                    <div class="totalHealingValue" id="dmgPerCrit${skillPlacement}">0.00%</div>
                </div>
            </div>
            <div class="totalHealingBox">
                <div class="totalHealingBoxHalf hasHoverTooltip">
                    <div class="totalHealingHeader">AVG DMG Explosion</div>
                    <div class="totalHealingValue" id="avgPerHit${skillPlacement}">0.00</div>
                </div>
            </div>

            <div class="abilityBreakdownGeneralMessage">The Narcissism buff is mainly just for faster cooldowns. Use this toggle when you want to see how it will modify your cooldown times on all abilities.</div>
            <div class="totalHealingBox">
                <div class="totalHealingBoxHalf hasHoverTooltip">
                    <div style="padding-right: 5px;">Add Narcissism CDR?</div>
                    <label class="toggleContainer">
                        <input type="checkbox" class="toggleCheckbox" id="isNarcissimActive" onchange="settings.updateCharacterSettings('Esiemo')"> <!--math toggle-->
                        <span class="toggleSlider"></span>
                    </label>
                </div>
            </div>

        </div>
        `;
        readSelection(`abilityBreakdownBody${skillPlacement}`).innerHTML += `
        <div class="abilityBreakdownHeader">DESCRIPTION</div>
        <div class="abilityBreakdownDescription">${characterRef.abilities.ability4["Creative Explosion"].desc}</div>
        `;
        //the dom element mods need to after all of them are done, so after the stats rows are generated, else they get reset
        // readSelection("timeBombStacks").value = +settingsRef.timeBombStacks;
        // readSelection("timeBombStackDisplay").innerHTML = `${settingsRef.timeBombStacks}`;

        const cooldown = 40 * (1 + index.SkillCooldown);
        const cost = 80 * (1 + index.SkillCost);
        const range = 8 * (1 + Math.min(2,index.SkillRange));
        const NarcissismDuration = 10 * (1 + index.SkillDuration);//
        const NarcissismCooldown = -0.40;
        const NarcissismMovement = 0.30;
        const NarcissismDEF = -0.30;

        //28,150.679451808095549422143444334

        //65.982670264844958388922475115248 modifier


        const basePowerModifier = 4948.7/100;
        const basePowerModifierRunning = 101.8/100;

        const sumModifierBonus = calcs.getTotalSkillPowerModifier(index,abilityTypeArray);
        const baseSkillPower = calcs.getTotalSkillPower(index,abilityTypeArray);
        const fireDR = calcs.getResistanceBasedDR("Fire");

        const skillPowerModifier = basePowerModifier + sumModifierBonus// + (8 * 0.044);
    
        const critRate = returnObject.totalSkillCritRate;
        const critDamage = returnObject.totalSkillCritDamage;
        const critComposite = 1 + (critRate * (critDamage-1));
    
        const dmgPerHit = baseSkillPower * skillPowerModifier * fireDR// * (1 + (8 * 0.044));//3.6666 if fixed, or 1.333 for now
        const dmgPerHitCrit = dmgPerHit * critDamage;
        const dmgPerHitAvg = dmgPerHit * critComposite;

        //true skill power = 44,177.73101136412978497844262314
        //true power modifier? = 30.929361212519373731857157308055

    
        readSelection(`skillPower${skillPlacement}`).innerHTML = `${baseSkillPower.toLocaleString()}`;
        readSelection(`powerModifier${skillPlacement}`).innerHTML = `${(skillPowerModifier*100).toLocaleString()}%`;

        readSelection(`dmgPerHit${skillPlacement}`).innerHTML = `${dmgPerHit.toLocaleString()}`;
        readSelection(`dmgPerCrit${skillPlacement}`).innerHTML = `${dmgPerHitCrit.toLocaleString()}`;
        readSelection(`avgPerHit${skillPlacement}`).innerHTML = `${dmgPerHitAvg.toLocaleString()}`;
        

        const rowsObject = {cooldown,cost,basePowerModifier,range,NarcissismDuration,NarcissismCooldown,NarcissismMovement,NarcissismDEF}
        // let skillHTML = "<div class='basicsDRheaderTitle'>Ability Statistics</div>";
        let skillHTML = "";
        let skillHTMLRowsHTML = '';
        rowsListings = [//evadeCost,meleeCost
            {"statName": "cooldown","statCoverName": "Stack Cooldown","tooltip":"","relevantTags": [],"isNotAPercent": true,"roundAnyways": true},
            {"statName": "cost","statCoverName": "Cost","tooltip":"","relevantTags": [],"isNotAPercent": true,"roundAnyways": true},
            {"statName": "basePowerModifier","statCoverName": "Base Power Modifier","tooltip":"","relevantTags": [],"isNotAPercent": false},
            {"statName": "range","statCoverName": "Range (m)","tooltip":"","relevantTags": [],"isNotAPercent": true,"roundAnyways": true},

            {"statName": "NarcissismDuration","statCoverName": "Narcissism Duration","tooltip":"","relevantTags": [],"isNotAPercent": true,"roundAnyways": true},
            {"statName": "NarcissismCooldown","statCoverName": "Narcissism CDR","tooltip":"","relevantTags": [],"isNotAPercent": false},
            {"statName": "NarcissismMovement","statCoverName": "Narcissism Movement Sp.","tooltip":"","relevantTags": [],"isNotAPercent": false},
            {"statName": "NarcissismDEF","statCoverName": "Narcissism DEF","tooltip":"","relevantTags": [],"isNotAPercent": false},
            
            

            // {"statName": "critRatePercentBonus","statCoverName": "+% Crit Rate","tooltip":"","relevantTags": [],"isNotAPercent": false},
            // {"statName": "critDamagePercentBonus","statCoverName": "+% Crit Damage","tooltip":"","relevantTags": [],"isNotAPercent": false},
            // {"statName": "totalSkillCritRate","statCoverName": "Total Skill CR","tooltip":"","relevantTags": [],"isNotAPercent": false,"condition": (returnObject.totalSkillCritRate != returnObject.baseCharacterCritRate)},
            // {"statName": "totalSkillCritDamage","statCoverName": "Total Skill CD","tooltip":"","relevantTags": [],"isNotAPercent": true,"roundAnyways": true,"condition": (returnObject.totalSkillCritDamage != returnObject.baseCharacterCritDamage)},
        ]
        skillHTMLRowsHTML += basicsUpdates.expandRowListingInfo(rowsListings,rowsObject);
        readSelection(`abilityBreakdownBody${skillPlacement}`).innerHTML += skillHTMLRowsHTML ? skillHTML + skillHTMLRowsHTML + "<br>" : "";

        readSelection("isNarcissimActive").checked = settingsRef.isNarcissimActive;

    },
    esiemoHabitCalcs(index,returnObject) {
        const characterRef = characters.Esiemo;
        const settingsRef = characterRef.characterSettings;
        const abilityTypeArray = characterRef.abilities.ability5.base.type;
        const skillPlacement = 5; 

        readSelection(`abilityBreakdownBody${skillPlacement}`).innerHTML = `

        <div class="traitMegaTitleHeader">RESULTS</div>
        <div class="basicsSummaryBox" id="lepicResultsBox">

            <div class="totalHealingBox">
                <div class="totalHealingBoxHalf hasHoverTooltip">
                    <div class="totalHealingHeader">Skill Power</div>
                    <div class="totalHealingValue" id="skillPower${skillPlacement}">0.00%</div>
                </div>
                <div class="totalHealingBoxHalf hasHoverTooltip">
                    <div class="totalHealingHeader">Power Mod</div>
                    <div class="totalHealingValue" id="powerModifier${skillPlacement}">0.00%</div>
                </div>
            </div>

            <div class="totalHealingBox">
                <div class="totalHealingBoxHalf hasHoverTooltip">
                    <div class="totalHealingHeader">DMG/Hit</div>
                    <div class="totalHealingValue" id="dmgPerHit${skillPlacement}">0.00</div>
                </div>
                <div class="totalHealingBoxHalf hasHoverTooltip">
                    <div class="totalHealingHeader">DMG/Crit</div>
                    <div class="totalHealingValue" id="dmgPerCrit${skillPlacement}">0.00%</div>
                </div>
            </div>
            <div class="totalHealingBox">
                <div class="totalHealingBoxHalf hasHoverTooltip">
                    <div class="totalHealingHeader">AVG DMG/Bomb</div>
                    <div class="totalHealingValue" id="avgPerHit${skillPlacement}">0.00</div>
                </div>
            </div>
        </div>
        `;
        readSelection(`abilityBreakdownBody${skillPlacement}`).innerHTML += `
        <div class="abilityBreakdownHeader">DESCRIPTION</div>
        <div class="abilityBreakdownDescription">${characterRef.abilities.ability5.base.desc}</div>
        `;

        const cooldown = 60 * (1 + index.SkillCooldown);
        const range = 4 * (1 + Math.min(2,index.SkillRange));

        const basePowerModifier = 1617.3/100;

        const sumModifierBonus = calcs.getTotalSkillPowerModifier(index,abilityTypeArray);
        const baseSkillPower = calcs.getTotalSkillPower(index,abilityTypeArray);
        const fireDR = calcs.getResistanceBasedDR("Fire");

        const skillPowerModifier = basePowerModifier + sumModifierBonus;
        const blastMulti = settingsRef.blastStacksPowerBonus;
    
        const critRate = returnObject.totalSkillCritRate;
        const critDamage = returnObject.totalSkillCritDamage;
        const critComposite = 1 + (critRate * (critDamage-1));
    
        const dmgPerHit = baseSkillPower * skillPowerModifier * blastMulti * fireDR;
        const dmgPerHitCrit = dmgPerHit * critDamage;
        const dmgPerHitAvg = dmgPerHit * critComposite;

    
        readSelection(`skillPower${skillPlacement}`).innerHTML = `${baseSkillPower.toLocaleString()}`;
        readSelection(`powerModifier${skillPlacement}`).innerHTML = `${(skillPowerModifier*100).toLocaleString()}%`;

        readSelection(`dmgPerHit${skillPlacement}`).innerHTML = `${dmgPerHit.toLocaleString()}`;
        readSelection(`dmgPerCrit${skillPlacement}`).innerHTML = `${dmgPerHitCrit.toLocaleString()}`;
        readSelection(`avgPerHit${skillPlacement}`).innerHTML = `${dmgPerHitAvg.toLocaleString()}`;
        

        const rowsObject = {maxStacks,cooldown,basePowerModifier,range}
        // let skillHTML = "<div class='basicsDRheaderTitle'>Ability Statistics</div>";
        let skillHTML = "";
        let skillHTMLRowsHTML = '';
        rowsListings = [//evadeCost,meleeCost
            {"statName": "cooldown","statCoverName": "Cooldown","tooltip":"","relevantTags": [],"isNotAPercent": true,"roundAnyways": true},
            {"statName": "basePowerModifier","statCoverName": "Base Power Modifier","tooltip":"","relevantTags": [],"isNotAPercent": false},
            {"statName": "range","statCoverName": "Range (m)","tooltip":"","relevantTags": [],"isNotAPercent": true,"roundAnyways": true},

            // {"statName": "critRatePercentBonus","statCoverName": "+% Crit Rate","tooltip":"","relevantTags": [],"isNotAPercent": false},
            // {"statName": "critDamagePercentBonus","statCoverName": "+% Crit Damage","tooltip":"","relevantTags": [],"isNotAPercent": false},
            // {"statName": "totalSkillCritRate","statCoverName": "Total Skill CR","tooltip":"","relevantTags": [],"isNotAPercent": false,"condition": (returnObject.totalSkillCritRate != returnObject.baseCharacterCritRate)},
            // {"statName": "totalSkillCritDamage","statCoverName": "Total Skill CD","tooltip":"","relevantTags": [],"isNotAPercent": true,"roundAnyways": true,"condition": (returnObject.totalSkillCritDamage != returnObject.baseCharacterCritDamage)},
        ]
        skillHTMLRowsHTML += basicsUpdates.expandRowListingInfo(rowsListings,rowsObject);
        readSelection(`abilityBreakdownBody${skillPlacement}`).innerHTML += skillHTMLRowsHTML ? skillHTML + skillHTMLRowsHTML + "<br>" : "";

    },
    esiemoEvadeCalcs(index,returnObject) {
        const characterRef = characters.Esiemo;
        const settingsRef = characterRef.characterSettings;
        const abilityTypeArray = characterRef.abilities.ability5["Explosive Evade"].type;
        const skillPlacement = 5; 

        readSelection(`abilityBreakdownBody${skillPlacement}`).innerHTML = `

        <div class="traitMegaTitleHeader">RESULTS</div>
        <div class="basicsSummaryBox" id="lepicResultsBox">

            <div class="totalHealingBox">
                <div class="totalHealingBoxHalf hasHoverTooltip">
                    <div class="totalHealingHeader">Skill Power</div>
                    <div class="totalHealingValue" id="skillPower${skillPlacement}">0.00%</div>
                </div>
                <div class="totalHealingBoxHalf hasHoverTooltip">
                    <div class="totalHealingHeader">Power Mod</div>
                    <div class="totalHealingValue" id="powerModifier${skillPlacement}">0.00%</div>
                </div>
                <div class="totalHealingBoxHalf hasHoverTooltip">
                    <div class="totalHealingHeader">Blast Multi</div>
                    <div class="totalHealingValue" id="uniquePowerBonus${skillPlacement}">0.00%</div>
                </div>
            </div>

            <div class="totalHealingBox">
                <div class="totalHealingBoxHalf hasHoverTooltip">
                    <div class="totalHealingHeader">DMG/Hit</div>
                    <div class="totalHealingValue" id="dmgPerHit${skillPlacement}">0.00</div>
                </div>
                <div class="totalHealingBoxHalf hasHoverTooltip">
                    <div class="totalHealingHeader">DMG/Crit</div>
                    <div class="totalHealingValue" id="dmgPerCrit${skillPlacement}">0.00%</div>
                </div>
            </div>
            <div class="totalHealingBox">
                <div class="totalHealingBoxHalf hasHoverTooltip">
                    <div class="totalHealingHeader">AVG DMG/Bomb</div>
                    <div class="totalHealingValue" id="avgPerHit${skillPlacement}">0.00</div>
                </div>
            </div>
        </div>
        `;
        readSelection(`abilityBreakdownBody${skillPlacement}`).innerHTML += `
        <div class="abilityBreakdownHeader">DESCRIPTION</div>
        <div class="abilityBreakdownDescription">${characterRef.abilities.ability5["Explosive Evade"].desc}</div>
        `;
        //the dom element mods need to after all of them are done, so after the stats rows are generated, else they get reset
        // readSelection("timeBombStacks").value = +settingsRef.timeBombStacks;
        // readSelection("timeBombStackDisplay").innerHTML = `${settingsRef.timeBombStacks}`;

        const cooldown = 20 * (1 + index.SkillCooldown);
        const range = 4 * (1 + Math.min(2,index.SkillRange));
        const rangeDetection = 10 * (1 + Math.min(2,index.SkillRange));
        const detectionDuration = 40 * (1 + index.SkillDuration);


        const basePowerModifier = 1276.7/100;

        const sumModifierBonus = calcs.getTotalSkillPowerModifier(index,abilityTypeArray);
        const baseSkillPower = calcs.getTotalSkillPower(index,abilityTypeArray);
        const abilityDR = calcs.getResistanceBasedDR(abilityTypeArray[0]);

        const skillPowerModifier = basePowerModifier + sumModifierBonus;
        const blastMulti = settingsRef.blastStacksPowerBonus;
    
        const critRate = returnObject.totalSkillCritRate;
        const critDamage = returnObject.totalSkillCritDamage;
        const critComposite = 1 + (critRate * (critDamage-1));
    
        const dmgPerHit = baseSkillPower * skillPowerModifier * blastMulti * abilityDR;
        const dmgPerHitCrit = dmgPerHit * critDamage;
        const dmgPerHitAvg = dmgPerHit * critComposite;

    
        readSelection(`skillPower${skillPlacement}`).innerHTML = `${baseSkillPower.toLocaleString()}`;
        readSelection(`powerModifier${skillPlacement}`).innerHTML = `${(skillPowerModifier*100).toLocaleString()}%`;
        readSelection(`uniquePowerBonus${skillPlacement}`).innerHTML = `${blastMulti.toLocaleString()}x`;

        readSelection(`dmgPerHit${skillPlacement}`).innerHTML = `${dmgPerHit.toLocaleString()}`;
        readSelection(`dmgPerCrit${skillPlacement}`).innerHTML = `${dmgPerHitCrit.toLocaleString()}`;
        readSelection(`avgPerHit${skillPlacement}`).innerHTML = `${dmgPerHitAvg.toLocaleString()}`;
        

        const rowsObject = {maxStacks,cooldown,basePowerModifier,range,rangeDetection,detectionDuration}
        // let skillHTML = "<div class='basicsDRheaderTitle'>Ability Statistics</div>";
        let skillHTML = "";
        let skillHTMLRowsHTML = '';
        rowsListings = [//evadeCost,meleeCost
            {"statName": "cooldown","statCoverName": "Cooldown","tooltip":"","relevantTags": [],"isNotAPercent": true,"roundAnyways": true},
            {"statName": "rangeDetection","statCoverName": "Detection Range (m)","tooltip":"","relevantTags": [],"isNotAPercent": true,"roundAnyways": true},
            {"statName": "detectionDuration","statCoverName": "Detection Duration","tooltip":"","relevantTags": [],"isNotAPercent": true,"roundAnyways": true},
            {"statName": "basePowerModifier","statCoverName": "Base Power Modifier","tooltip":"","relevantTags": [],"isNotAPercent": false},
            {"statName": "range","statCoverName": "Range (m)","tooltip":"","relevantTags": [],"isNotAPercent": true,"roundAnyways": true},

            // {"statName": "critRatePercentBonus","statCoverName": "+% Crit Rate","tooltip":"","relevantTags": [],"isNotAPercent": false},
            // {"statName": "critDamagePercentBonus","statCoverName": "+% Crit Damage","tooltip":"","relevantTags": [],"isNotAPercent": false},
            // {"statName": "totalSkillCritRate","statCoverName": "Total Skill CR","tooltip":"","relevantTags": [],"isNotAPercent": false,"condition": (returnObject.totalSkillCritRate != returnObject.baseCharacterCritRate)},
            // {"statName": "totalSkillCritDamage","statCoverName": "Total Skill CD","tooltip":"","relevantTags": [],"isNotAPercent": true,"roundAnyways": true,"condition": (returnObject.totalSkillCritDamage != returnObject.baseCharacterCritDamage)},
        ];
        skillHTMLRowsHTML += basicsUpdates.expandRowListingInfo(rowsListings,rowsObject);
        readSelection(`abilityBreakdownBody${skillPlacement}`).innerHTML += skillHTMLRowsHTML ? skillHTML + skillHTMLRowsHTML + "<br>" : "";

    },
    //Hailey
    haileyCryoRoundCalcs(index,returnObject,weaponObject) {
        const characterRef = characters.Hailey;
        const settingsRef3 = characterRef.characterSettings;
        const abilityTypeArray = characterRef.abilities.ability1.base.type;
        const skillPlacement = 1; 

        readSelection(`abilityBreakdownBody${skillPlacement}`).innerHTML = `
        <div class="basicsSummaryBox" id="lepicResultsBox">

            <div class="totalHealingBox">
                <div class="totalHealingBoxHalf hasHoverTooltip">
                    <div class="totalHealingHeader">Crit Rate</div>
                    <div class="totalHealingValue" id="barBonus${skillPlacement}">0.00</div>
                </div>
                <div class="totalHealingBoxHalf hasHoverTooltip">
                    <div class="totalHealingHeader">Crit Damage</div>
                    <div class="totalHealingValue" id="barBonus2${skillPlacement}">0.00</div>
                </div>
            </div>

            <div class="totalHealingBox">
                <div class="totalHealingBoxHalf hasHoverTooltip">
                    <div class="totalHealingHeader">Skill Power</div>
                    <div class="totalHealingValue" id="skillPower${skillPlacement}">0.00%</div>
                </div>
                <div class="totalHealingBoxHalf hasHoverTooltip">
                    <div class="totalHealingHeader">Power Modifier</div>
                    <div class="totalHealingValue" id="powerModifier${skillPlacement}">0.00%</div>
                </div>
            </div>

            <div class="totalHealingBox">
                <div class="totalHealingBoxHalf hasHoverTooltip">
                    <div class="totalHealingHeader">Dmg/Hit</div>
                    <div class="totalHealingValue" id="dmgPerShot${skillPlacement}">0.00</div>
                </div>
                <div class="totalHealingBoxHalf hasHoverTooltip">
                    <div class="totalHealingHeader">Crit/Hit</div>
                    <div class="totalHealingValue" id="critPerShot${skillPlacement}">0.00%</div>
                </div>
            </div>

            <div class="totalHealingBox">
                <div class="totalHealingBoxHalf hasHoverTooltip">
                    <div class="totalHealingHeader">Avg/Hit</div>
                    <div class="totalHealingValue" id="averageSum${skillPlacement}">0.00%</div>
                </div>
            </div>
            <div class="totalHealingBox">
                <div class="totalHealingBoxHalf hasHoverTooltip">
                    <div class="totalHealingHeader">Avg/Hit</div>
                    <div class="totalHealingValue" id="averageTotal${skillPlacement}">0.00%</div>
                </div>
            </div>

        </div>
        `;
        readSelection(`abilityBreakdownBody${skillPlacement}`).innerHTML += `
        <div class="abilityBreakdownHeader">DESCRIPTION</div>
        <div class="abilityBreakdownDescription">${characterRef.abilities.ability1.base.desc}</div>
        `;

        const {totalSkillCritRate,totalSkillCritDamage} = calcs.getSkillCrit(index,characterRef.baseStats);
        const basePowerModifier = 93.8/100;
        const sumModifierBonus = calcs.getTotalSkillPowerModifier(index,abilityTypeArray)
        const skillPowerModifier = basePowerModifier + sumModifierBonus;

        const baseSkillPower = calcs.getTotalSkillPower(index,abilityTypeArray);
        const abilityDR = calcs.getResistanceBasedDR(abilityTypeArray[0]);
    
        // const critRate = Math.min((1+(globalRecords.skillCritCeiling/100)),totalSkillCritRate);//returnObject.totalSkillCritRate;
        const critRate = totalSkillCritRate;//returnObject.totalSkillCritRate;
        const critDamage = totalSkillCritDamage;//returnObject.totalSkillCritDamage;
        const critComposite = 1 + (critRate * (critDamage-1));
    
        const dmgPerHit = baseSkillPower * skillPowerModifier * abilityDR;
        const dmgPerHitCrit = dmgPerHit * critDamage;
        const dmgPerHitAvg = dmgPerHit * critComposite;
        const avgTotalDamage = dmgPerHitAvg * 9;
    
        readSelection(`barBonus${skillPlacement}`).innerHTML = `${(critRate*100).toLocaleString()}%`;//crit rate
        readSelection(`barBonus2${skillPlacement}`).innerHTML = `${(critDamage).toLocaleString()}x`;
        readSelection(`skillPower${skillPlacement}`).innerHTML = `${baseSkillPower.toLocaleString()}`;//skill power
        readSelection(`powerModifier${skillPlacement}`).innerHTML = `${(skillPowerModifier*100).toLocaleString()}%`;//total shots

        readSelection(`dmgPerShot${skillPlacement}`).innerHTML = `${dmgPerHit.toLocaleString()}`;
        readSelection(`critPerShot${skillPlacement}`).innerHTML = `${dmgPerHitCrit.toLocaleString()}`;
        readSelection(`averageSum${skillPlacement}`).innerHTML = `${dmgPerHitAvg.toLocaleString()}`;
        readSelection(`averageTotal${skillPlacement}`).innerHTML = `${avgTotalDamage.toLocaleString()}`;
    },
    haileyStormCalcs(index,returnObject,weaponObject) {
        const characterRef = characters.Hailey;
        const settingsRef3 = characterRef.characterSettings;
        const abilityTypeArray = characterRef.abilities.ability2.base.type;
        const skillPlacement = 2; 

        readSelection(`abilityBreakdownBody${skillPlacement}`).innerHTML = `
        <div class="basicsSummaryBox" id="lepicResultsBox">

            <div class="totalHealingBox">
                <div class="totalHealingBoxHalf hasHoverTooltip">
                    <div class="totalHealingHeader">Crit Rate</div>
                    <div class="totalHealingValue" id="barBonus21${skillPlacement}">0.00</div>
                </div>
                <div class="totalHealingBoxHalf hasHoverTooltip">
                    <div class="totalHealingHeader">Crit Damage</div>
                    <div class="totalHealingValue" id="barBonus22${skillPlacement}">0.00</div>
                </div>
            </div>

            <div class="totalHealingBox">
                <div class="totalHealingBoxHalf hasHoverTooltip">
                    <div class="totalHealingHeader">Skill Power</div>
                    <div class="totalHealingValue" id="skillPower${skillPlacement}">0.00%</div>
                </div>
                <div class="totalHealingBoxHalf hasHoverTooltip">
                    <div class="totalHealingHeader">Power Modifier</div>
                    <div class="totalHealingValue" id="powerModifier${skillPlacement}">0.00%</div>
                </div>
            </div>

            <div class="totalHealingBox">
                <div class="totalHealingBoxHalf hasHoverTooltip">
                    <div class="totalHealingHeader">Dmg/Hit</div>
                    <div class="totalHealingValue" id="dmgPerShot${skillPlacement}">0.00</div>
                </div>
                <div class="totalHealingBoxHalf hasHoverTooltip">
                    <div class="totalHealingHeader">Crit/Hit</div>
                    <div class="totalHealingValue" id="critPerShot${skillPlacement}">0.00%</div>
                </div>
            </div>

            <div class="totalHealingBox">
                <div class="totalHealingBoxHalf hasHoverTooltip">
                    <div class="totalHealingHeader">Avg/Hit</div>
                    <div class="totalHealingValue" id="averageSum${skillPlacement}">0.00%</div>
                </div>
            </div>

        </div>
        `;
        readSelection(`abilityBreakdownBody${skillPlacement}`).innerHTML += `
        <div class="abilityBreakdownHeader">DESCRIPTION</div>
        <div class="abilityBreakdownDescription">${characterRef.abilities.ability2.base.desc}</div>
        `;

        const {totalSkillCritRate,totalSkillCritDamage} = calcs.getSkillCrit(index,characterRef.baseStats);
        const basePowerModifier = 8902.2/100;
        const sumModifierBonus = calcs.getTotalSkillPowerModifier(index,abilityTypeArray)
        const skillPowerModifier = basePowerModifier + sumModifierBonus;

        const baseSkillPower = calcs.getTotalSkillPower(index,abilityTypeArray);
        const chillDR = calcs.getResistanceBasedDR("Chill");
    
        // const critRate = Math.min((1+(globalRecords.skillCritCeiling/100)),totalSkillCritRate);//returnObject.totalSkillCritRate;
        const critRate = totalSkillCritRate;//returnObject.totalSkillCritRate;
        const critDamage = totalSkillCritDamage;//returnObject.totalSkillCritDamage;
        const critComposite = 1 + (critRate * (critDamage-1));
    
        const dmgPerHit = baseSkillPower * skillPowerModifier * chillDR;
        const dmgPerHitCrit = dmgPerHit * critDamage;
        const dmgPerHitAvg = dmgPerHit * critComposite;
    
        readSelection(`barBonus21${skillPlacement}`).innerHTML = `${(critRate*100).toLocaleString()}%`;//crit rate
        readSelection(`barBonus22${skillPlacement}`).innerHTML = `${(critDamage).toLocaleString()}x`;
        readSelection(`skillPower${skillPlacement}`).innerHTML = `${baseSkillPower.toLocaleString()}`;//skill power
        readSelection(`powerModifier${skillPlacement}`).innerHTML = `${(skillPowerModifier*100).toLocaleString()}%`;//total shots

        readSelection(`dmgPerShot${skillPlacement}`).innerHTML = `${dmgPerHit.toLocaleString()}`;
        readSelection(`critPerShot${skillPlacement}`).innerHTML = `${dmgPerHitCrit.toLocaleString()}`;
        readSelection(`averageSum${skillPlacement}`).innerHTML = `${dmgPerHitAvg.toLocaleString()}`;
    },
    haileyFuryCalcs(index) {
        const characterRef = characters.Hailey;
        const settingsRef = characterRef.characterSettings;
        readSelection("abilityBreakdownBody3").innerHTML = `
        <div class="totalHealingBox">
            <div class="statsRowName">Cold Fury Stacks:&nbsp;<span id="haileyColdFuryBar4Display">16</span></div>
            <div class="statsRowToggle">
                <input type="range" id="haileyColdFuryBar4" name="slider" min="0" max="16" value="16" step="1" onchange="settings.updateCharacterSettings('Hailey')">
            </div>
        </div>

        <div class="basicsSummaryBox" id="lepicResultsBox">

            <div class="totalHealingBox">
                <div class="totalHealingBoxHalf hasHoverTooltip">
                    <div class="totalHealingHeader">+BASE Crit Rate</div>
                    <div class="totalHealingValue" id="furyCritRate">0.00</div>
                </div>
                <div class="totalHealingBoxHalf hasHoverTooltip">
                    <div class="totalHealingHeader">+% Crit DMG</div>
                    <div class="totalHealingValue" id="furyCritDamage">0.00</div>
                </div>
            </div>

        </div>
        `;
        readSelection("abilityBreakdownBody3").innerHTML += `
        <div class="abilityBreakdownHeader">DESCRIPTION</div>
        <div class="abilityBreakdownDescription">${characterRef.abilities.ability3.base.desc}</div>
        `;

        readSelection("haileyColdFuryBar4").value = +settingsRef.stackCount;
        readSelection("haileyColdFuryBar4Display").innerHTML = `${settingsRef.stackCount}`;

        //adds up to 40% BASE crit rate, that's nuts
        const baseSkillCritRateBonus = +settingsRef.stackCount * 0.025;
        index.SkillCritRateBaseBonus += baseSkillCritRateBonus;
        const baseFirearmCritRateBonus = +settingsRef.stackCount * 0.025;
        index.FirearmCritRateBase += baseFirearmCritRateBonus;

        //unlike the crit rate bonuses, the crit damage is not a base bonus, it acts like any other crit module. also only applies at max stacks.
        let bonusCritDamage = 0
        if (+settingsRef.stackCount === 16) {bonusCritDamage = 0.20;}
        index.SkillCritDamage += bonusCritDamage;
        index.FirearmCritDamage += bonusCritDamage;

        readSelection("furyCritRate").innerHTML = (baseSkillCritRateBonus*100).toLocaleString() + "%";
        readSelection("furyCritDamage").innerHTML = (bonusCritDamage*100).toLocaleString() + "%";
    },
    haileyRetreatCalcs(index) {
        const characterRef = characters.Hailey;
        const settingsRef2 = characterRef.characterSettings;
        readSelection("abilityBreakdownBody5").innerHTML = `
        <div class="totalHealingBox">
            <div class="statsRowName">Retreat Distance:&nbsp;<span id="haileyDistanceBar4Display">25m</span></div>
            <div class="statsRowToggle">
                <input type="range" id="haileyDistanceBar4" name="slider" min="0" max="25" value="25" step="0.5" onchange="settings.updateCharacterSettings('Hailey')">
            </div>
        </div>

        <div class="basicsSummaryBox" id="lepicResultsBox">

            <div class="totalHealingBox">
                <div class="totalHealingBoxHalf hasHoverTooltip">
                    <div class="totalHealingHeader">0-Point</div>
                    <div class="totalHealingValue">12.5m</div>
                </div>
                <div class="totalHealingBoxHalf hasHoverTooltip">
                    <div class="totalHealingHeader">+% Weak Point DMG</div>
                    <div class="totalHealingValue" id="retreatWPValue">0.00</div>
                </div>
            </div>

        </div>
        `;
        readSelection("abilityBreakdownBody5").innerHTML += `
        <div class="abilityBreakdownHeader">DESCRIPTION</div>
        <div class="abilityBreakdownDescription">${characterRef.abilities.ability5.base.desc}</div>
        `;

        readSelection("haileyDistanceBar4").value = +settingsRef2.distance;
        readSelection("haileyDistanceBar4Display").innerHTML = `${settingsRef2.distance}m`;

        let weakspotBonus = 0;
        if (+settingsRef2.distance > 12.5) {weakspotBonus = ((settingsRef2.distance - 12.5)/12.5) * 0.50}
        else if (+settingsRef2.distance < 12.5) {weakspotBonus = -((12.5 - settingsRef2.distance)/12.5) * 0.50}
        //and then if the distance is equal to 12.5, the bonus is 0
        readSelection("retreatWPValue").innerHTML = (weakspotBonus*100).toLocaleString() + "%";
        index["WeakPointDamage%"] += weakspotBonus;
    },
    haileyZenithCalcs(index,returnObject,weaponObject) {
        const characterRef = characters.Hailey;
        const settingsRef3 = characterRef.characterSettings;
        const abilityTypeArray = characterRef.abilities.ability4.base.type;

        readSelection("abilityBreakdownBody4").innerHTML = `
        <div class="traitMegaTitleHeader" style="background-color: black;">SKILL SPLIT</div>
        <div class="basicsSummaryBox" id="lepicResultsBox">

            <div class="totalHealingBox">
                <div class="totalHealingBoxHalf hasHoverTooltip">
                    <div class="totalHealingHeader">Crit Rate</div>
                    <div class="totalHealingValue" id="barBonus">0.00</div>
                </div>
                <div class="totalHealingBoxHalf hasHoverTooltip">
                    <div class="totalHealingHeader">Crit Damage</div>
                    <div class="totalHealingValue" id="barBonus2">0.00</div>
                </div>
                <div class="totalHealingBoxHalf hasHoverTooltip">
                    <div class="totalHealingHeader">Skill Power</div>
                    <div class="totalHealingValue" id="skillPower">0.00%</div>
                </div>
            </div>

            <div class="totalHealingBox">
                <div class="totalHealingBoxHalf hasHoverTooltip">
                    <div class="totalHealingHeader">Dmg/Hit</div>
                    <div class="totalHealingValue" id="dmgPerShot">0.00</div>
                </div>
                <div class="totalHealingBoxHalf hasHoverTooltip">
                    <div class="totalHealingHeader">Crit/Hit</div>
                    <div class="totalHealingValue" id="critPerShot">0.00%</div>
                </div>
            </div>

            <div class="totalHealingBox">
                <div class="totalHealingBoxHalf hasHoverTooltip">
                    <div class="totalHealingHeader">Shots</div>
                    <div class="totalHealingValue" id="powerModifier">0.00%</div>
                </div>
                <div class="totalHealingBoxHalf hasHoverTooltip">
                    <div class="totalHealingHeader">Avg/Hit</div>
                    <div class="totalHealingValue" id="averageSum">0.00%</div>
                </div>
            </div>
            <div class="totalHealingBox">
                <div class="totalHealingBoxHalf hasHoverTooltip">
                    <div class="totalHealingHeader">Total Avg Skill DMG</div>
                    <div class="totalHealingValue" id="totalAvgSkill">0.00</div>
                </div>
            </div>


            <div class="traitMegaTitleHeader" style="background-color: black;border-top: 4px solid #434343">WEAPON SPLIT</div>

            <div class="totalHealingBox">
                <div class="totalHealingBoxHalf hasHoverTooltip">
                    <div class="totalHealingHeader">Base ATK</div>
                    <div class="totalHealingValue" id="zenithATK">0.00</div>
                </div>
                <div class="totalHealingBoxHalf hasHoverTooltip">
                    <div class="totalHealingHeader">ATK %</div>
                    <div class="totalHealingValue" id="zenithATKPercent">0.00</div>
                </div>
                <div class="totalHealingBoxHalf hasHoverTooltip">
                    <div class="totalHealingHeader">Phys Multi</div>
                    <div class="totalHealingValue" id="zenithATKPhysical">0.00</div>
                </div>
            </div>
            <div class="totalHealingBox">
                <div class="totalHealingBoxHalf hasHoverTooltip">
                    <div class="totalHealingHeader">Crit Rate</div>
                    <div class="totalHealingValue" id="firearmCritRate">0.00</div>
                </div>
                <div class="totalHealingBoxHalf hasHoverTooltip">
                    <div class="totalHealingHeader">Crit Damage</div>
                    <div class="totalHealingValue" id="firearmCritDamage">0.00</div>
                </div>
                <div class="totalHealingBoxHalf hasHoverTooltip">
                    <div class="totalHealingHeader">Zenith Multi</div>
                    <div class="totalHealingValue" id="zenithMulti">0.00</div>
                </div>
            </div>
            <div style="white-space: normal;width: 100%">Weakpoints are assumed to be shoulder hits. See Weapon DMG video for more info.</div>
            <div class="totalHealingBox">
                <div class="totalHealingBoxHalf hasHoverTooltip">
                    <div class="totalHealingHeader">Weakspot Multi</div>
                    <div class="totalHealingValue" id="firearmWeakspotMulti">0.00</div>
                </div>
            </div>

            <div class="totalHealingBox" style="margin: 0;padding: 0;">
                <div class="totalHealingBoxHalfModeSelector hasHoverTooltip">
                    <div style="padding-right: 5px;">Use Weakspot Hits: &nbsp;</div>
                    <label class="toggleContainer">
                        <input type="checkbox" class="toggleCheckbox" id="haileyUseWeakspots" onchange="settings.updateCharacterSettings('Hailey')" checked> <!--math toggle-->
                        <span class="toggleSlider"></span>
                    </label>
                </div>
                <div class="totalHealingBoxHalfModeSelector hasHoverTooltip">
                    <div style="padding-right: 5px;">Use Physical Bonus: &nbsp;</div>
                    <label class="toggleContainer">
                        <input type="checkbox" class="toggleCheckbox" id="haileyUsePhysBonus" onchange="settings.updateCharacterSettings('Hailey')" checked> <!--math toggle-->
                        <span class="toggleSlider"></span>
                    </label>
                </div>
            </div>

            <div class="totalHealingBox">
                <div class="totalHealingBoxHalf hasHoverTooltip">
                    <div class="totalHealingHeader">Dmg/Hit</div>
                    <div class="totalHealingValue" id="dmgPerShotGun">0.00</div>
                </div>
                <div class="totalHealingBoxHalf hasHoverTooltip">
                    <div class="totalHealingHeader">Crit/Hit</div>
                    <div class="totalHealingValue" id="critPerShotGun">0.00%</div>
                </div>
            </div>
            
            <div class="totalHealingBox">
                <div class="totalHealingBoxHalf hasHoverTooltip">
                    <div class="totalHealingHeader">Elements</div>
                    <div class="totalHealingValue" id="ActiveElements">0.00</div>
                </div>
                <div class="totalHealingBoxHalf hasHoverTooltip">
                    <div class="totalHealingHeader">Hit/Element</div>
                    <div class="totalHealingValue" id="ActiveElementValues">0.00%</div>
                </div>
                <div class="totalHealingBoxHalf hasHoverTooltip">
                    <div class="totalHealingHeader">Crit/Element</div>
                    <div class="totalHealingValue" id="ActiveElementValuesCrit">0.00%</div>
                </div>
            </div>

            <br>
            <div class="totalHealingBox" style="margin: 0;padding: 0;">
                <div class="totalHealingBoxHalfModeSelector hasHoverTooltip">
                    <div style="padding-right: 5px;">Use Cryo Bonus [Max: 9]&nbsp;</div>
                    <label class="toggleContainer">
                        <input type="checkbox" class="toggleCheckbox" id="haileyUseCryoDamage" onchange="settings.updateCharacterSettings('Hailey')" checked> <!--math toggle-->
                        <span class="toggleSlider"></span>
                    </label>
                </div>
            </div>
            <div class="totalHealingBox">
                <div class="totalHealingBoxHalf hasHoverTooltip">
                    <div class="totalHealingHeader">Cryo/Hit</div>
                    <div class="totalHealingValue" id="cryoPerHit">0.00</div>
                </div>
                <div class="totalHealingBoxHalf hasHoverTooltip">
                    <div class="totalHealingHeader">Cryo/Crit</div>
                    <div class="totalHealingValue" id="cryoPerCrit">0.00%</div>
                </div>
                <div class="totalHealingBoxHalf hasHoverTooltip">
                    <div class="totalHealingHeader">AVG Cryo</div>
                    <div class="totalHealingValue" id="cryoAVG">0.00%</div>
                </div>
            </div>


            <div class="totalHealingBox">
                <div class="totalHealingBoxHalf hasHoverTooltip">
                    <div class="totalHealingHeader">Total Avg Gun DMG</div>
                    <div class="totalHealingValue" id="totalAvgGun">0.00</div>
                </div>
            </div>

            <div class="totalHealingBox" style="border-top: 4px solid #434343">
                <div class="totalHealingBoxHalf hasHoverTooltip" >
                    <div class="totalHealingHeader">Total Avg SUM DMG</div>
                    <div class="totalHealingValue" id="totalAvgAll">0.00</div>
                </div>
            </div>

        </div>
        `;
        readSelection("abilityBreakdownBody4").innerHTML += `
        <div class="abilityBreakdownHeader">DESCRIPTION</div>
        <div class="abilityBreakdownDescription">${characterRef.abilities.ability4.base.desc}</div>
        `;
        
        readSelection("haileyUseWeakspots").checked = settingsRef3.haileyUseWeakspots;
        readSelection("haileyUsePhysBonus").checked = settingsRef3.haileyUsePhysBonus;
        readSelection("haileyUseCryoDamage").checked = settingsRef3.haileyUseCryoDamage;


        
        const magazineSize = 4 * (1+index.MagazineSize) + index.haileyExtraShots;//it rounds down and floors the value, but I still want to show the decimal so people know.
        const actualMagSize = Math.floor(magazineSize);

        const chillDR = calcs.getResistanceBasedDR("Chill");
        const fireDR = calcs.getResistanceBasedDR("Fire");
        const electricDR = calcs.getResistanceBasedDR("Electric");
        const toxicDR = calcs.getResistanceBasedDR("Toxic");
        const physDR = calcs.getResistanceBasedDR("DEF");

        

        const {totalSkillCritRate,totalSkillCritDamage} = calcs.getSkillCrit(index,characterRef.baseStats);
        const basePowerModifier = 3627.4/100;
        const sumModifierBonus = calcs.getTotalSkillPowerModifier(index,abilityTypeArray)
        const skillPowerModifier = basePowerModifier + sumModifierBonus;

        const baseSkillPower = calcs.getTotalSkillPower(index,abilityTypeArray);
    
        // const critRate = Math.min((1+(globalRecords.skillCritCeiling/100)),totalSkillCritRate);//returnObject.totalSkillCritRate;
        const critRate = totalSkillCritRate;//returnObject.totalSkillCritRate;
        const critDamage = totalSkillCritDamage;//returnObject.totalSkillCritDamage;
        const critComposite = 1 + (critRate * (critDamage-1));
    
        const dmgPerHit = baseSkillPower * skillPowerModifier * chillDR;
        const dmgPerHitCrit = dmgPerHit * critDamage;
        const dmgPerHitAvg = dmgPerHit * critComposite;

        const totalAVGSkill = actualMagSize * dmgPerHitAvg;
    
        readSelection("barBonus").innerHTML = `${(critRate*100).toLocaleString()}%`;//crit rate
        readSelection("barBonus2").innerHTML = `${(critDamage).toLocaleString()}x`;
        readSelection("skillPower").innerHTML = `${baseSkillPower.toLocaleString()}`;//skill power
        readSelection("powerModifier").innerHTML = `${magazineSize.toLocaleString()}`;//total shots

        readSelection("dmgPerShot").innerHTML = `${dmgPerHit.toLocaleString()}`;
        readSelection("critPerShot").innerHTML = `${dmgPerHitCrit.toLocaleString()}`;
        readSelection("averageSum").innerHTML = `${dmgPerHitAvg.toLocaleString()}`;

        readSelection("totalAvgSkill").innerHTML = `${totalAVGSkill.toLocaleString()}`;

        const currentWeaponRef = sniperList[globalRecords.weapon.currentWeapon];
        const currentWeaponBase = currentWeaponRef.baseATK;
        const attackPercent = index["FirearmATK%"];
        const crushBonus = settingsRef3.haileyUsePhysBonus ? 0.2 : 0;//haileyUsePhysBonus

        // const firearmCritRate = Math.min((1+(globalRecords.weaponCritCeiling/100)),(currentWeaponRef.baseCritRate + index.FirearmCritRateBase) * (1 + index.FirearmCritRate));

        const firearmCritRatePreCap = (currentWeaponRef.baseCritRate + index.FirearmCritRateBase) * (1 + index.FirearmCritRate);
        const firearmCritRate = Math.max(0,Math.min(firearmCritRatePreCap,1)) * (1 + (+globalRecords.weaponCritCeiling/100));

        const currentWeaponBaseWS = currentWeaponRef.baseWeakPoint
        const weakpointBonus = index["WeakPointDamage%"];
        const totalWSBonus = currentWeaponBaseWS * (1 + weakpointBonus) + 0.50 + -0.25;

        const currentWeaponBaseCD = currentWeaponRef.baseCritDamage;
        const critDamageBonus = index.FirearmCritDamage;
        const totalCDBonus = currentWeaponBaseCD * (1 + critDamageBonus);

        const firearmCritComposite = 1 + ((totalCDBonus-1) * firearmCritRate);

        const zenithMultiplier = 1.5;
        let activeElements = [];
        let activeElementsDamage = [];
        let activeElementsDamageCrit = [];

        const preElementDamage = currentWeaponBase * (1 + attackPercent);

        const damage = (preElementDamage * zenithMultiplier)* (1 + crushBonus) + (index.ColossusATK * (1 + crushBonus));//zenithMultiplier
        const baseDamage = damage * physDR;
        const baseWeakspotDamage = baseDamage * (totalWSBonus);
        const baseCritDamage = baseDamage * totalCDBonus;
        const baseWeakspotCritDamage = baseWeakspotDamage * totalCDBonus;

        if (index["ChillATK%"]) {
            activeElements.push("Chill");
            const damageChill = (preElementDamage) * index["ChillATK%"] * (1 + index["ChillATK%Bonus"]);
            const damageChillCrit = (preElementDamage * totalCDBonus) * index["ChillATK%"] * (1 + index["ChillATK%Bonus"]);
            const visibleChill = damageChill * chillDR;
            const visibleChillCrit = damageChillCrit * chillDR;
            activeElementsDamage.push(visibleChill);
            activeElementsDamageCrit.push(visibleChillCrit);
        }
        if (index["ElectricATK%"]) {
            activeElements.push("Electric");
            const damageElectric = (preElementDamage) * index["ElectricATK%"] * (1 + index["ElectricATK%Bonus"]);
            const damageElectricCrit = (preElementDamage * totalCDBonus) * index["ElectricATK%"] * (1 + index["ElectricATK%Bonus"]);
            const visibleElectric = damageElectric * electricDR;
            const visibleElectricCrit = damageElectricCrit * electricDR;
            activeElementsDamage.push(visibleElectric);
            activeElementsDamageCrit.push(visibleElectricCrit);
        }
        if (index["ToxicATK%"]) {
            activeElements.push("Toxic");
            const damageToxic = (preElementDamage) * index["ToxicATK%"] * (1 + index["ToxicATK%Bonus"]);
            const damageToxicCrit = (preElementDamage * totalCDBonus) * index["ToxicATK%"] * (1 + index["ToxicATK%Bonus"]);
            const visibleToxic = damageToxic * toxicDR;
            const visibleToxicCrit = damageToxicCrit * toxicDR;
            activeElementsDamage.push(visibleToxic);
            activeElementsDamageCrit.push(visibleToxicCrit);
        }
        if (index["FireATK%"]) {
            activeElements.push("Fire");
            const damageFire = (preElementDamage) * index["FireATK%"] * (1 + index["FireATK%Bonus"]);
            const damageFireCrit = (preElementDamage * totalCDBonus) * index["FireATK%"] * (1 + index["FireATK%Bonus"]);
            const visibleFire = damageFire * fireDR;
            const visibleFireCrit = damageFireCrit * fireDR;
            activeElementsDamage.push(visibleFire);
            activeElementsDamageCrit.push(visibleFireCrit);
        }
        if (!activeElements.length) {
            activeElements.push("None");
            activeElementsDamage.push(0);
            activeElementsDamageCrit.push(0);
        }

        const avgGunDamage = (settingsRef3.haileyUseWeakspots ? baseWeakspotDamage : baseDamage) * firearmCritComposite;
        const avgElemental = activeElementsDamage[0] * firearmCritComposite;


        const cryoDamageHit = settingsRef3.haileyUseCryoDamage ? ((settingsRef3.haileyUseWeakspots ? baseWeakspotDamage : baseDamage) + activeElementsDamage[0])/2 : 0;
        const cryoDamageCrit = cryoDamageHit * totalCDBonus;
        const cryoDamageAVG = cryoDamageHit * firearmCritComposite;


        const totalAVGGun = ((avgGunDamage + avgElemental) * actualMagSize) + (cryoDamageAVG * Math.min(9,actualMagSize));

        const totalAVGSum = totalAVGSkill + totalAVGGun;


        readSelection("zenithATK").innerHTML = currentWeaponBase.toLocaleString();
        readSelection("zenithATKPercent").innerHTML = `${(attackPercent*100).toLocaleString()}%`;
        readSelection("zenithATKPhysical").innerHTML = `${(crushBonus*100).toLocaleString()}%`;

        readSelection("firearmCritRate").innerHTML = `${(firearmCritRate*100).toLocaleString()}%`;
        readSelection("firearmCritDamage").innerHTML = `${totalCDBonus.toLocaleString()}x`;
        readSelection("zenithMulti").innerHTML = "1.5x";

        readSelection("firearmWeakspotMulti").innerHTML = `${totalWSBonus.toLocaleString()}x`;

        readSelection("dmgPerShotGun").innerHTML = `${(settingsRef3.haileyUseWeakspots ? baseWeakspotDamage : baseDamage).toLocaleString()}`;
        readSelection("critPerShotGun").innerHTML = `${(settingsRef3.haileyUseWeakspots ? baseWeakspotCritDamage : baseCritDamage).toLocaleString()}`;

        readSelection("ActiveElements").innerHTML = `[${activeElements}]`;
        readSelection("ActiveElementValues").innerHTML = `${activeElementsDamage[0].toFixed(2)}`;
        readSelection("ActiveElementValuesCrit").innerHTML = `${activeElementsDamageCrit[0].toFixed(2)}`;

        readSelection("cryoPerHit").innerHTML = cryoDamageHit.toLocaleString();
        readSelection("cryoPerCrit").innerHTML = cryoDamageCrit.toLocaleString();
        readSelection("cryoAVG").innerHTML = cryoDamageAVG.toLocaleString();

        readSelection("totalAvgGun").innerHTML = `${totalAVGGun.toLocaleString()}`;
        readSelection("totalAvgAll").innerHTML = `${totalAVGSum.toLocaleString()}`;
    },
    //Lepic
    lepicOverclockCalcs(index) {
        const characterRef = characters.Lepic;
        const settingsRef2 = characterRef.characterSettings;
        const skillPlacement = 2; 

        if (settingsRef2.lepicOverclockBonus) {index.PowerModifierBase += 0.20;}
        //TODO: add the burn stuff later
        readSelection(`abilityBreakdownBody${skillPlacement}`).innerHTML = `
        <div class="totalHealingBox">
            <div class="totalHealingBoxHalf hasHoverTooltip">
                <div style="padding-right: 5px;">Use Modifier Bonus?</div>
                <label class="toggleContainer">
                    <input type="checkbox" class="toggleCheckbox" id="lepicOverclockBonus" onchange="settings.updateCharacterSettings('Lepic')" ${settingsRef2.lepicOverclockBonus ? "checked" : ""}>
                    <span class="toggleSlider"></span>
                </label>
            </div>
        </div>

        <div class="basicsSummaryBox" id="lepicResultsBox">

            <div class="totalHealingBox">
                <div class="totalHealingBoxHalf hasHoverTooltip">
                    <div class="totalHealingHeader">+Power Modifier</div>
                    <div class="totalHealingValue">${settingsRef2.lepicOverclockBonus ? "20" : "0"}%</div>
                </div>
            </div>

        </div>
        `;
        readSelection(`abilityBreakdownBody${skillPlacement}`).innerHTML += `
        <div class="abilityBreakdownHeader">DESCRIPTION</div>
        <div class="abilityBreakdownDescription">${characterRef.abilities[`ability${skillPlacement}`].base.desc}</div>
        `;

        
    },
    lepicNerveCalcs(index) {
        const characterRef = characters.Lepic;
        const settingsRef2 = characterRef.characterSettings;
        const skillPlacement = 2; 

        if (settingsRef2.lepicNerveBonus) {index.PowerModifierBase += 0.30;}
        //TODO: add the burn stuff later
        readSelection(`abilityBreakdownBody${skillPlacement}`).innerHTML = `
        <div class="totalHealingBox">
            <div class="totalHealingBoxHalf hasHoverTooltip">
                <div style="padding-right: 5px;">Use Modifier Bonus?</div>
                <label class="toggleContainer">
                    <input type="checkbox" class="toggleCheckbox" id="lepicNerveBonus" onchange="settings.updateCharacterSettings('Lepic')" ${settingsRef2.lepicNerveBonus ? "checked" : ""}>
                    <span class="toggleSlider"></span>
                </label>
            </div>
        </div>

        <div class="basicsSummaryBox" id="lepicResultsBox">

            <div class="totalHealingBox">
                <div class="totalHealingBoxHalf hasHoverTooltip">
                    <div class="totalHealingHeader">+Power Modifier</div>
                    <div class="totalHealingValue">${settingsRef2.lepicNerveBonus ? "30" : "0"}%</div>
                </div>
            </div>

        </div>
        `;
        readSelection(`abilityBreakdownBody${skillPlacement}`).innerHTML += `
        <div class="abilityBreakdownHeader">DESCRIPTION</div>
        <div class="abilityBreakdownDescription">${characterRef.abilities[`ability${skillPlacement}`]["Nerve Infiltration"].desc}</div>
        `;

        
    },
    lepicPowerUnitCalcs(index) {
        const characterRef = characters.Lepic;
        const settingsRef2 = characterRef.characterSettings;
        const skillPlacement = 2; 

        if (settingsRef2.lepicPowerUnitBonus) {index["FirearmATK%"] += 0.52;}
        //TODO: add the burn stuff later
        readSelection(`abilityBreakdownBody${skillPlacement}`).innerHTML = `
        <div class="totalHealingBox">
            <div class="totalHealingBoxHalf hasHoverTooltip">
                <div style="padding-right: 5px;">Use FirearmATK% Bonus?</div>
                <label class="toggleContainer">
                    <input type="checkbox" class="toggleCheckbox" id="lepicPowerUnitBonus" onchange="settings.updateCharacterSettings('Lepic')" ${settingsRef2.lepicPowerUnitBonus ? "checked" : ""}>
                    <span class="toggleSlider"></span>
                </label>
            </div>
        </div>

        <div class="basicsSummaryBox" id="lepicResultsBox">

            <div class="totalHealingBox">
                <div class="totalHealingBoxHalf hasHoverTooltip">
                    <div class="totalHealingHeader">+Firearm ATK%</div>
                    <div class="totalHealingValue">${settingsRef2.lepicPowerUnitBonus ? "52" : "0"}%</div>
                </div>
            </div>

        </div>
        `;
        readSelection(`abilityBreakdownBody${skillPlacement}`).innerHTML += `
        <div class="abilityBreakdownHeader">DESCRIPTION</div>
        <div class="abilityBreakdownDescription">${characterRef.abilities[`ability${skillPlacement}`]["Power Unit Change"].desc}</div>
        `;

        
    },
    lepicTractionCalcs(index,returnObject) {
        const characterRef = characters.Lepic;
        const settingsRef2 = characterRef.characterSettings;
        const skillPlacement = 3; 
        

        readSelection(`abilityBreakdownBody${skillPlacement}`).innerHTML = `This ability has no damage to elaborate on.`;
        readSelection(`abilityBreakdownBody${skillPlacement}`).innerHTML += `
        <div class="abilityBreakdownHeader">DESCRIPTION</div>
        <div class="abilityBreakdownDescription">${characterRef.abilities[`ability${skillPlacement}`].base.desc}</div>
        `;
    },
    lepicOverkillCalcs(index,returnObject) {
        //this function is gonna look pretty scuffed for a bit, all I did was rip it from and combine all the functions from my lepic-only calc
        //so I'll pretty it up later.
        const characterRef = characters.Lepic;
        const settingsRef = characterRef.characterSettings;
        const skillPlacement = 4;
        const abilityTypeArray = characterRef.abilities[`ability${skillPlacement}`].base.type;
        

        readSelection(`abilityBreakdownBody${skillPlacement}`).innerHTML = `
        <div class="totalHealingBox">
            <div class="totalHealingBoxHalf hasHoverTooltip">
                <div style="padding-right: 5px;">Fire Rate UP</div>
                <label class="toggleContainer">
                    <input type="checkbox" class="toggleCheckbox" id="USEFireRateUP" onchange="settings.updateCharacterSettings('Lepic')"> <!--math toggle-->
                    <span class="toggleSlider"></span>
                </label>
            </div>
            <div class="totalHealingBoxHalf hasHoverTooltip">
                <div style="padding-right: 5px;">Sharp Precision</div>
                <label class="toggleContainer">
                    <input type="checkbox" class="toggleCheckbox" id="USESharpPrecisionShot" onchange="settings.updateCharacterSettings('Lepic')"> <!--math toggle-->
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
        readSelection(`abilityBreakdownBody${skillPlacement}`).innerHTML += `
        <div class="abilityBreakdownHeader">DESCRIPTION</div>
        <div class="abilityBreakdownDescription">${characterRef.abilities[`ability${skillPlacement}`].base.desc}</div>
        `;
        readSelection("USEFireRateUP").checked = settingsRef.USEFireRateUP;
        if (globalRecords.reactor.currentAmmoType === "HighPowered") {settingsRef.USESharpPrecisionShot = false;}
        readSelection("USESharpPrecisionShot").checked = settingsRef.USESharpPrecisionShot;


        const isFireRateUp = readSelection("USEFireRateUP").checked;
        const isSharpPrecision = readSelection("USESharpPrecisionShot").checked;
        const skillDurationMod = index.SkillDuration;
    
        const {shotCount,skillDuration,continuousTicks,excessWasted} = customDamage.lepicOverkillFireRateMath(skillDurationMod,isFireRateUp,isSharpPrecision);
        readSelection("wastedTime").innerHTML = `${(excessWasted).toFixed(3)}s`;
    
        readSelection("actualDuration").innerHTML = `${(8 * (1+skillDurationMod)).toFixed(3)}s`;
        readSelection("usableDuration").innerHTML = `${skillDuration.toLocaleString()}s`;
        readSelection("totalShots").innerHTML = `${shotCount}`;

        const sumModifierBonus = calcs.getTotalSkillPowerModifier(index,abilityTypeArray);
        const baseSkillPower = calcs.getTotalSkillPower(index,abilityTypeArray);
        const abilityDR = calcs.getResistanceBasedDR(abilityTypeArray[0]);

        const baseSkillPowerPercent = (2760.3)/100 + sumModifierBonus;
        const baseContinuousSkillPowerPercent = (43.8)/100 + sumModifierBonus;
    
        const critRate = returnObject.totalSkillCritRate;
        const critDamage = returnObject.totalSkillCritDamage;
        const critComposite = 1 + (critRate * (critDamage-1));
    
        const dmgPerShot = baseSkillPower * baseSkillPowerPercent * abilityDR;
        const dmgPerShotCrit = dmgPerShot * critDamage;
        const endDmg = dmgPerShot * critComposite * shotCount;
    
        const dmgPerTick = baseSkillPower * baseContinuousSkillPowerPercent * abilityDR;
        const dmgPerTickCrit = dmgPerTick * critDamage;
        const tickEndDamage = dmgPerTick * critComposite * continuousTicks;
    
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
    },
    lepicOverkillFireRateMath(skillDurationMod,isFireRateUp,isSharpPrecision) {
        const skillDuration = 8 * (1 + skillDurationMod) - 1.06; //subtract the roll's duration
        // const firearmMasterDuration = 5 * (1 + skillDurationMod) - 1.06;//still subtract the roll's duration
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
        let excessWasted = 0;
    
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
                    excessWasted = skillDuration - nextShotTime;
                    break;
                }
            }
        }
        else {
            const floatCount = skillDuration/(modifiedRate);
            shotCount += Math.floor(floatCount);
            durationDiff = floatCount - Math.floor(floatCount);
            excessWasted = durationDiff;
        }
    
        const continuousTicks = Math.floor(continuousDuration/0.5) * shotCount;
    
        return {shotCount,skillDuration,continuousTicks,excessWasted};
    },
    lepicCloseCallCalcs(index,returnObject) {
        const characterRef = characters.Lepic;
        const settingsRef2 = characterRef.characterSettings;
        const skillPlacement = 5; 

        readSelection(`abilityBreakdownBody${skillPlacement}`).innerHTML = `This ability has no damage to elaborate on.`;
        readSelection(`abilityBreakdownBody${skillPlacement}`).innerHTML += `
        <div class="abilityBreakdownHeader">DESCRIPTION</div>
        <div class="abilityBreakdownDescription">${characterRef.abilities[`ability${skillPlacement}`].base.desc}</div>
        `;
    },
    lepicFirearmMasterCalcs(index,returnObject) {
        const characterRef = characters.Lepic;
        const settingsRef2 = characterRef.characterSettings;
        const skillPlacement = 5; 

        if (settingsRef2.lepicFirearmMasterBonus) {
            index.PowerModifierBase += 0.39;
            index.SkillRange += 0.45;
        }
        readSelection(`abilityBreakdownBody${skillPlacement}`).innerHTML = `
        <div class="totalHealingBox">
            <div class="totalHealingBoxHalf hasHoverTooltip">
                <div style="padding-right: 5px;">Use Modifier Bonus?</div>
                <label class="toggleContainer">
                    <input type="checkbox" class="toggleCheckbox" id="lepicFirearmMasterBonus" onchange="settings.updateCharacterSettings('Lepic')" ${settingsRef2.lepicFirearmMasterBonus ? "checked" : ""}>
                    <span class="toggleSlider"></span>
                </label>
            </div>
        </div>

        <div class="basicsSummaryBox" id="lepicResultsBox">

            <div class="totalHealingBox">
                <div class="totalHealingBoxHalf hasHoverTooltip">
                    <div class="totalHealingHeader">+Power Modifier</div>
                    <div class="totalHealingValue">${settingsRef2.lepicFirearmMasterBonus ? "39" : "0"}%</div>
                </div>
                <div class="totalHealingBoxHalf hasHoverTooltip">
                    <div class="totalHealingHeader">+Range</div>
                    <div class="totalHealingValue">${settingsRef2.lepicFirearmMasterBonus ? "45" : "0"}%</div>
                </div>
            </div>

        </div>
        `;
        readSelection(`abilityBreakdownBody${skillPlacement}`).innerHTML += `
        <div class="abilityBreakdownHeader">DESCRIPTION</div>
        <div class="abilityBreakdownDescription">${characterRef.abilities[`ability${skillPlacement}`]["Firearm Master"].desc}</div>
        `;
    },
    lepicBrakingCalcs(index,returnObject) {
        const characterRef = characters.Lepic;
        const settingsRef2 = characterRef.characterSettings;
        const skillPlacement = 5; 

        readSelection(`abilityBreakdownBody${skillPlacement}`).innerHTML = `This ability has no damage to elaborate on.`;
        readSelection(`abilityBreakdownBody${skillPlacement}`).innerHTML += `
        <div class="abilityBreakdownHeader">DESCRIPTION</div>
        <div class="abilityBreakdownDescription">${characterRef.abilities[`ability${skillPlacement}`]["Regenerative Braking"].desc}</div>
        `;
    },
    //Bunny
    bunnyThrillCalcs(index,returnObject,isHVStarter) {
        const characterRef = characters.Bunny;
        const settingsRef = characterRef.characterSettings;
        const abilityTypeArray = characterRef.abilities.ability1.base.type;
        const skillPlacement = 1;

        const basePowerModifier = (isHVStarter ? 250.5 : 156.6)/100;
        const baseDotModifier = (isHVStarter ? 89.5 : 55.9)/100;


        const sumModifierBonus = calcs.getTotalSkillPowerModifier(index,abilityTypeArray);
        const baseSkillPower = calcs.getTotalSkillPower(index,abilityTypeArray);
        const abilityDR = calcs.getResistanceBasedDR(abilityTypeArray[0]);

        const skillPowerModifier = basePowerModifier + sumModifierBonus;
        const skillPowerModifierDot = baseDotModifier + sumModifierBonus;
    
        // const elecBarBonus = 2.35;
        //Bunny is bugged, and she doesn't get the full 2.5x multi from her 1&3 bar scaling, instead it stops at 9 stacks for 2.35.
        const barFilledAmount = 1 + ((settingsRef.barPercentState/10)*0.15) //TODO: this line might be used later to dynamically state the fill % if we know exactly how the scaling thresholds are set
    
        const critRate = returnObject.totalSkillCritRate;
        const critDamage = returnObject.totalSkillCritDamage;
        const critComposite = 1 + (critRate * (critDamage-1));
    
        const dmgPerHit = baseSkillPower * skillPowerModifier * barFilledAmount * abilityDR;
        const dmgPerTick = baseSkillPower * skillPowerModifierDot;
        const dmgPerHitCrit = dmgPerHit * critDamage;
        const dmgPerTickCrit = dmgPerTick * critDamage;
        const dmgPerHitAvg = dmgPerHit * critComposite;
        const dmgPerTickAvg = dmgPerTick * critComposite;

        readSelection(`abilityBreakdownBody${skillPlacement}`).innerHTML = `
        <div class="traitMegaTitleHeader">RESULTS</div>
        <div class="basicsSummaryBox" id="lepicResultsBox">
            <div class="totalHealingBox">
                <div class="totalHealingBoxHalf hasHoverTooltip">
                    <div class="totalHealingHeader">Bar Bonus</div>
                    <div class="totalHealingValue">${barFilledAmount.toFixed(2) + "x"}</div>
                </div>
                <div class="totalHealingBoxHalf hasHoverTooltip">
                    <div class="totalHealingHeader">Skill Power</div>
                    <div class="totalHealingValue">${baseSkillPower.toLocaleString()}</div>
                </div>
                <div class="totalHealingBoxHalf hasHoverTooltip">
                    <div class="totalHealingHeader">Power Mod</div>
                    <div class="totalHealingValue">${`${(skillPowerModifier*100).toLocaleString()}%`}</div>
                </div>
            </div>

            <div class="totalHealingBox">
                <div class="totalHealingBoxHalf hasHoverTooltip">
                    <div class="totalHealingHeader">Dmg/Hit</div>
                    <div class="totalHealingValue">${dmgPerHit.toLocaleString()}</div>
                </div>
                <div class="totalHealingBoxHalf hasHoverTooltip">
                    <div class="totalHealingHeader">Crit/Hit</div>
                    <div class="totalHealingValue">${dmgPerHitCrit.toLocaleString()}</div>
                </div>
            </div>
            <div class="totalHealingBox">
                <div class="totalHealingBoxHalf hasHoverTooltip">
                    <div class="totalHealingHeader">Avg/Hit</div>
                    <div class="totalHealingValue">${dmgPerHitAvg.toLocaleString()}</div>
                </div>
            </div>

            <div class="totalHealingBox">
                <div class="totalHealingBoxHalf hasHoverTooltip">
                    <div class="totalHealingHeader">Dmg/Tick</div>
                    <div class="totalHealingValue">${dmgPerTick.toLocaleString()}</div>
                </div>
                <div class="totalHealingBoxHalf hasHoverTooltip">
                    <div class="totalHealingHeader">Crit/Tick</div>
                    <div class="totalHealingValue">${dmgPerTickCrit.toLocaleString()}</div>
                </div>
            </div>

        </div>
        `;
        readSelection(`abilityBreakdownBody${skillPlacement}`).innerHTML += `
        <div class="abilityBreakdownHeader">DESCRIPTION</div>
        <div class="abilityBreakdownDescription">${characterRef.abilities.ability1.base.desc}</div>
        `;
    },
    bunnySpeedCalcs(index) {
        const characterRef = characters.Bunny;
        const settingsRef2 = characterRef.characterSettings;
        const abilityTypeArray = characterRef.abilities.ability2.base.type;
        const skillPlacement = 2;
        readSelection(`abilityBreakdownBody${skillPlacement}`).innerHTML = `
        <div style="white-space: normal;width: 100%">This ability has no damage, and as such, no damage breakdown.</div>
        `;
        readSelection(`abilityBreakdownBody${skillPlacement}`).innerHTML += `
        <div class="abilityBreakdownHeader">DESCRIPTION</div>
        <div class="abilityBreakdownDescription">${characterRef.abilities.ability2.base.desc}</div>
        `;

        const cooldown = 2 * (1 + Math.max(-0.90,index.SkillCooldown));
        const cost = 12 * (1 + index.SkillCost);
        const costOverTime = 25 * (1 + index.SkillCost);
        const speedIncrease = 0.50;
        const barDistance = 1;
        const barGain = 0.006;

        const rowsObject = {cooldown,cost,costOverTime,speedIncrease,barDistance,barGain}
        // let skillHTML = "<div class='basicsDRheaderTitle'>Ability Statistics</div>";
        let skillHTML = "";
        let skillHTMLRowsHTML = '';
        rowsListings = [//evadeCost,meleeCost
            {"statName": "cooldown","statCoverName": "Cooldown","tooltip":"","relevantTags": [],"isNotAPercent": true,"roundAnyways": true},
            {"statName": "cost","statCoverName": "Cost","tooltip":"","relevantTags": [],"isNotAPercent": true,"roundAnyways": true},
            {"statName": "costOverTime","statCoverName": "Cost/s","tooltip":"","relevantTags": [],"isNotAPercent": true,"roundAnyways": true},
            {"statName": "speedIncrease","statCoverName": "+Speed%","tooltip":"","relevantTags": [],"isNotAPercent": false},
            {"statName": "barDistance","statCoverName": "Distance/Gain(m)","tooltip":"","relevantTags": [],"isNotAPercent": true,"roundAnyways": true},
            {"statName": "barGain","statCoverName": "Gain/Distance","tooltip":"","relevantTags": [],"isNotAPercent": false},

            // {"statName": "totalSkillCritDamage","statCoverName": "Total Skill CD","tooltip":"","relevantTags": [],"isNotAPercent": true,"roundAnyways": true,"condition": (returnObject.totalSkillCritDamage != returnObject.baseCharacterCritDamage)},
        ]
        skillHTMLRowsHTML += basicsUpdates.expandRowListingInfo(rowsListings,rowsObject);
        readSelection(`abilityBreakdownBody${skillPlacement}`).innerHTML += skillHTMLRowsHTML ? skillHTML + skillHTMLRowsHTML + "<br>" : "";
    },
    bunnyEmissionCalcsHVStarter(index,returnObject) {
        //used purely to do emission calcs with the specification that high voltage is active
        customDamage.bunnyEmissionCalcs(index,returnObject,true);
    },
    bunnyEmissionCalcs(index,returnObject,isHVStarter) {
        const characterRef = characters.Bunny;
        const settingsRef = characterRef.characterSettings;

        readSelection("abilityBreakdownBody3").innerHTML = `

        <div class="traitMegaTitleHeader">RESULTS</div>
        <div class="basicsSummaryBox" id="lepicResultsBox">
            <div class="totalHealingBox">
                <div class="totalHealingBoxHalf hasHoverTooltip">
                    <div class="totalHealingHeader">Initial Cost</div>
                    <div class="totalHealingValue" id="initialCost">0.00</div>
                </div>
                <div class="totalHealingBoxHalf hasHoverTooltip">
                    <div class="totalHealingHeader">Drain Rate</div>
                    <div class="totalHealingValue" id="drainRate">0.00</div>
                </div>
                <div class="totalHealingBoxHalf hasHoverTooltip">
                    <div class="totalHealingHeader">SoL Duration</div>
                    <div class="totalHealingValue" id="speedDuration">0.00%</div>
                </div>
            </div>

            <div class="totalHealingBox">
                <div class="totalHealingBoxHalf hasHoverTooltip">
                    <div class="totalHealingHeader">Bar Bonus</div>
                    <div class="totalHealingValue" id="barBonus">0.00</div>
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
                    <div class="totalHealingHeader">Dmg/Hit</div>
                    <div class="totalHealingValue" id="dmgPerShot">0.00</div>
                </div>
                <div class="totalHealingBoxHalf hasHoverTooltip">
                    <div class="totalHealingHeader">Crit/Hit</div>
                    <div class="totalHealingValue" id="critPerShot">0.00%</div>
                </div>
            </div>
            <div class="totalHealingBox">
                <div class="totalHealingBoxHalf hasHoverTooltip">
                    <div class="totalHealingHeader">Avg/Hit</div>
                    <div class="totalHealingValue" id="averageSum">0.00%</div>
                </div>
                <div class="totalHealingBoxHalf hasHoverTooltip">
                    <div class="totalHealingHeader">Hit Rate (SoL)</div>
                    <div class="totalHealingValue" id="speedHitRate">0.00</div>
                </div>
                <div class="totalHealingBoxHalf hasHoverTooltip">
                    <div class="totalHealingHeader">Hit Rate</div>
                    <div class="totalHealingValue" id="sprintHitRate">0.00</div>
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
            </div>

            <div class="totalHealingBox">
                <div class="totalHealingBoxHalf hasHoverTooltip">
                    <div class="totalHealingHeader">Avg/Tick</div>
                    <div class="totalHealingValue" id="averageSumTicks">0.00%</div>
                </div>
                <div class="totalHealingBoxHalf hasHoverTooltip">
                    <div class="totalHealingHeader">Hit Rate</div>
                    <div class="totalHealingValue" id="">1/s</div>
                </div>
            </div>

            <div class="totalHealingBox">
                <div class="totalHealingBoxHalf hasHoverTooltip">
                    <div class="totalHealingHeader">Total Avg DMG (SoL + DoT)</div>
                    <div class="totalHealingValue" id="speedSprintAvgDamage">0.00</div>
                </div>
            </div>
            <div class="totalHealingBox">
                <div class="totalHealingBoxHalf hasHoverTooltip">
                    <div class="totalHealingHeader">Total Avg DPS (SoL + DoT)</div>
                    <div class="totalHealingValue" id="speedSprintAvgSum">0.00</div>
                </div>
            </div>
            <div class="totalHealingBox">
                <div class="totalHealingBoxHalf hasHoverTooltip">
                    <div class="totalHealingHeader">Total Avg DPS (Sprint + DoT)</div>
                    <div class="totalHealingValue" id="normalSprintAvgSum">0.00</div>
                </div>
            </div>

        </div>
        `;
        readSelection("abilityBreakdownBody3").innerHTML += `
        <div class="abilityBreakdownHeader">DESCRIPTION</div>
        <div class="abilityBreakdownDescription">${characterRef.abilities.ability3.base.desc}</div>
        `;

        const basePowerModifier = (isHVStarter ? 250.5 : 148.7)/100;
        const baseDotModifier = (isHVStarter ? 89.5 : 53.1)/100;
        const sumModifierBonus = index.PowerModifierBase + index.PowerModifierElectric + index.PowerModifierSingular;
        const skillPowerModifier = basePowerModifier + sumModifierBonus;
        const skillPowerModifierDot = baseDotModifier + sumModifierBonus;
    
        const reactorOptimizationBonus = globalRecords.reactor.weaponMatched ? 1.6 : 1;
        const basePowerRatio = 1 + index.PowerRatioBase;
        const electricPowerRatio = 1 + index.PowerRatioElectric;
        const singularPowerRatio = 1 + index.PowerRatioSingular;
    
        // const elecBarBonus = 2.35;
        //Bunny is bugged, and she doesn't get the full 2.5x multi from her 1&3 bar scaling, instead it stops at 9 stacks for 2.35.
        const barFilledAmount = 1 + ((settingsRef.barPercentState/10)*0.15) //TODO: this line might be used later to dynamically state the fill % if we know exactly how the scaling thresholds are set
        readSelection("barBonus").innerHTML = barFilledAmount.toFixed(2) + "x";
    
        //We're assuming you're using a fully enhanced reactor.
        const baseSkillPower = (11724.62 * reactorOptimizationBonus + index.SkillAttackColossus) * electricPowerRatio * singularPowerRatio * basePowerRatio;
    
        const critRate = returnObject.totalSkillCritRate;
        const critDamage = returnObject.totalSkillCritDamage;
        const critComposite = 1 + (critRate * (critDamage-1));
    
        const dmgPerHit = baseSkillPower * skillPowerModifier * barFilledAmount;
        const dmgPerTick = baseSkillPower * skillPowerModifierDot;
        const dmgPerHitCrit = dmgPerHit * critDamage;
        const dmgPerTickCrit = dmgPerTick * critDamage;
        const dmgPerHitAvg = dmgPerHit * critComposite;
        const dmgPerTickAvg = dmgPerTick * critComposite;
    
        //bunny hits every 0.9 seconds when sprinting normally, and 0.6 seconds when using speed of light.
        //this is with an 800 sprint speed weapon though TODO: possibly look into how weapon speed modifies sprint speed, if it isn't negligible
        //when SOL is active, supposedly you're maxed at 800 MS regardless, so the only dps loss could be for normal sprints
        const hitsPerSecondSpeed = 0.6;
        const hitsPerSecond = 0.9;
    
        const costModifier = 1 + index.SkillCost;
        const drainRate = 25 * costModifier;
        const startCost = 12 * costModifier;
        const maxMP = returnObject.displayMP;
    
        const speedDuration = (maxMP - startCost)/drainRate;
        const thirdHits = Math.floor(speedDuration/hitsPerSecondSpeed);
    
        const dpsNormalHits = dmgPerHitAvg * (1/hitsPerSecond);
        const dpsNormalTicks = dmgPerTickAvg; 
        const dpsNormalSum = dpsNormalHits + dpsNormalTicks;//sum total avg dps when doing NORMAL SPRINT
    
        const dpsSpeedHits = (dmgPerHitAvg * thirdHits)/speedDuration;
        const dpsSpeedSum = dpsSpeedHits + dpsNormalTicks;//sum total avg dps when doing SPEED OF LIGHT
    
        const speedTotalDmgAvg = (dpsNormalTicks * speedDuration) + (dmgPerHitAvg * thirdHits);
    
        readSelection("initialCost").innerHTML = startCost.toFixed(2) + "MP";
        readSelection("drainRate").innerHTML = drainRate.toFixed(2) + "MP/s";
        readSelection("speedDuration").innerHTML = speedDuration.toFixed(2) + "s";
    
        readSelection("skillPower").innerHTML = `${baseSkillPower.toLocaleString()}`;
        readSelection("powerModifier").innerHTML = `${(sumModifierBonus*100).toLocaleString()}%`;
    
        readSelection("dmgPerShot").innerHTML = `${dmgPerHit.toLocaleString()}`;
        readSelection("critPerShot").innerHTML = `${dmgPerHitCrit.toLocaleString()}`;
        readSelection("averageSum").innerHTML = `${dmgPerHitAvg.toLocaleString()}`;
    
        readSelection("dmgPerTick").innerHTML = `${dmgPerTick.toLocaleString()}`;
        readSelection("critPerTick").innerHTML = `${dmgPerTickCrit.toLocaleString()}`;
        readSelection("averageSumTicks").innerHTML = `${dmgPerTickAvg.toLocaleString()}`;
    
        readSelection("normalSprintAvgSum").innerHTML = `${dpsNormalSum.toLocaleString()}`;
        readSelection("speedSprintAvgSum").innerHTML = `${dpsSpeedSum.toLocaleString()}`;
    
        readSelection("speedSprintAvgDamage").innerHTML = `${speedTotalDmgAvg.toLocaleString()}`;
    
        readSelection("speedHitRate").innerHTML = (1/hitsPerSecondSpeed).toFixed(2) + "/s";
        readSelection("sprintHitRate").innerHTML = (1/hitsPerSecond).toFixed(2) + "/s";
    },
    bunnyCondenseCalcs(index,returnObject,isHVStarter) {
        const characterRef = characters.Bunny;
        const settingsRef = characterRef.characterSettings;
        const abilityTypeArray = characterRef.abilities.ability4["Electric Condense"].type;
        const skillPlacement = 4;

        const basePowerModifier = 1946/100;

        const sumModifierBonus = calcs.getTotalSkillPowerModifier(index,abilityTypeArray);
        const baseSkillPower = calcs.getTotalSkillPower(index,abilityTypeArray);
        const abilityDR = calcs.getResistanceBasedDR(abilityTypeArray[0]);

        const skillPowerModifier = basePowerModifier + sumModifierBonus;
    
        // const elecBarBonus = 2.35;
        //Bunny is bugged, and she doesn't get the full 2.5x multi from her 1&3 bar scaling, instead it stops at 9 stacks for 2.35.
        const barFilledAmount = 1 + ((settingsRef.barPercentState/10)*0.15) //TODO: this line might be used later to dynamically state the fill % if we know exactly how the scaling thresholds are set
    
        const critRate = returnObject.totalSkillCritRate;
        const critDamage = returnObject.totalSkillCritDamage;
        const critComposite = 1 + (critRate * (critDamage-1));
    
        const dmgPerHit = baseSkillPower * skillPowerModifier * barFilledAmount * abilityDR;
        const dmgPerHitCrit = dmgPerHit * critDamage;
        const dmgPerHitAvg = dmgPerHit * critComposite;

        readSelection(`abilityBreakdownBody${skillPlacement}`).innerHTML = `
        <div class="traitMegaTitleHeader">RESULTS</div>
        <div class="basicsSummaryBox" id="lepicResultsBox">
            <div class="totalHealingBox">
                <div class="totalHealingBoxHalf hasHoverTooltip">
                    <div class="totalHealingHeader">Bar Bonus</div>
                    <div class="totalHealingValue">${barFilledAmount.toFixed(2) + "x"}</div>
                </div>
                <div class="totalHealingBoxHalf hasHoverTooltip">
                    <div class="totalHealingHeader">Skill Power</div>
                    <div class="totalHealingValue">${baseSkillPower.toLocaleString()}</div>
                </div>
                <div class="totalHealingBoxHalf hasHoverTooltip">
                    <div class="totalHealingHeader">Power Mod</div>
                    <div class="totalHealingValue">${`${(skillPowerModifier*100).toLocaleString()}%`}</div>
                </div>
            </div>

            <div class="totalHealingBox">
                <div class="totalHealingBoxHalf hasHoverTooltip">
                    <div class="totalHealingHeader">Dmg/Hit</div>
                    <div class="totalHealingValue">${dmgPerHit.toLocaleString()}</div>
                </div>
                <div class="totalHealingBoxHalf hasHoverTooltip">
                    <div class="totalHealingHeader">Crit/Hit</div>
                    <div class="totalHealingValue">${dmgPerHitCrit.toLocaleString()}</div>
                </div>
            </div>
            <div class="totalHealingBox">
                <div class="totalHealingBoxHalf hasHoverTooltip">
                    <div class="totalHealingHeader">Avg/Hit</div>
                    <div class="totalHealingValue">${dmgPerHitAvg.toLocaleString()}</div>
                </div>
            </div>

        </div>
        `;
        readSelection(`abilityBreakdownBody${skillPlacement}`).innerHTML += `
        <div class="abilityBreakdownHeader">DESCRIPTION</div>
        <div class="abilityBreakdownDescription">${characterRef.abilities.ability4["Electric Condense"].desc}</div>
        `;
    },
    bunnyFootCalcs(index) {
        const characterRef = characters.Bunny;
        const settingsRef2 = characterRef.characterSettings;
        const abilityTypeArray = characterRef.abilities.ability5.base.type;
        const skillPlacement = 5; 
        readSelection(`abilityBreakdownBody${skillPlacement}`).innerHTML = `

        <div class="totalHealingBox">
            <div class="statsRowName">Bar % Filled:&nbsp;<span id="barFilledDisplay${skillPlacement}">90%</span></div>
            <div class="statsRowToggle">
                <input type="range" id="bunnyBarFilledSlider${skillPlacement}" name="slider" min="0" max="90" value="90" step="10" onchange="settings.updateCharacterSettings('Bunny')">
            </div>
        </div>
        <div style="white-space: normal;width: 100%">This controls the % multiplier available to whatever abilities use the electricity bar.</div>
        `;
        readSelection(`abilityBreakdownBody${skillPlacement}`).innerHTML += `
        <div class="abilityBreakdownHeader">DESCRIPTION</div>
        <div class="abilityBreakdownDescription">${characterRef.abilities.ability5.base.desc}</div>
        `;

        readSelection(`bunnyBarFilledSlider${skillPlacement}`).value = +settingsRef2.barPercentState;
        readSelection(`barFilledDisplay${skillPlacement}`).innerHTML = `${settingsRef2.barPercentState}%`;
    },
    //Kyle
    kyleBulwarkTicks(index,returnObject) {
        const characterRef = characters.Kyle;

        readSelection("abilityBreakdownBody2").innerHTML = `
        <div class="traitMegaTitleHeader">RESULTS</div>
        <div class="basicsSummaryBox" id="lepicResultsBox">

            <div class="totalHealingBox">
                <div class="totalHealingBoxHalf hasHoverTooltip">
                    <div class="totalHealingHeader">Total Hits</div>
                    <div class="totalHealingValue" id="barBonus2">0.00</div>
                </div>
                <div class="totalHealingBoxHalf hasHoverTooltip">
                    <div class="totalHealingHeader">Skill Power</div>
                    <div class="totalHealingValue" id="skillPower2">0.00%</div>
                </div>
                <div class="totalHealingBoxHalf hasHoverTooltip">
                    <div class="totalHealingHeader">Power Mod</div>
                    <div class="totalHealingValue" id="powerModifier2">0.00%</div>
                </div>
            </div>

            <div class="totalHealingBox">
                <div class="totalHealingBoxHalf hasHoverTooltip">
                    <div class="totalHealingHeader">DMG/Hit</div>
                    <div class="totalHealingValue" id="skillDmg2">0.00</div>
                </div>
                <div class="totalHealingBoxHalf hasHoverTooltip">
                    <div class="totalHealingHeader">Crit/Hit</div>
                    <div class="totalHealingValue" id="critPerShot2">0.00%</div>
                </div>
            </div>
            <div class="totalHealingBox">
                <div class="totalHealingBoxHalf hasHoverTooltip">
                    <div class="totalHealingHeader">Avg/Hit</div>
                    <div class="totalHealingValue" id="avgImpact2">0.00%</div>
                </div>
            </div>

            <div class="totalHealingBox">
                <div class="totalHealingBoxHalf hasHoverTooltip">
                    <div class="totalHealingHeader">Total Hits DMG</div>
                    <div class="totalHealingValue" id="totalBombDamage2">0.00%</div>
                </div>
            </div>

            <div class="totalHealingBox">
                <div class="totalHealingBoxHalf hasHoverTooltip">
                    <div class="totalHealingHeader">Total AVG DMG</div>
                    <div class="totalHealingValue" id="totalAvgDamage2">0.00%</div>
                </div>
            </div>

            <div class="totalHealingBox">
                <div class="totalHealingBoxHalf hasHoverTooltip">
                    <div class="totalHealingHeader">Cooldown</div>
                    <div class="totalHealingValue" id="cooldown2">0.00</div>
                </div>
                <div class="totalHealingBoxHalf hasHoverTooltip">
                    <div class="totalHealingHeader">Avg Use Duration</div>
                    <div class="totalHealingValue" id="avgDuration2">0.00%</div>
                </div>
                <div class="totalHealingBoxHalf hasHoverTooltip">
                    <div class="totalHealingHeader">Total Interval</div>
                    <div class="totalHealingValue" id="totalInterval">0.00%</div>
                </div>
            </div>
            <div class="totalHealingBox">
                <div class="totalHealingBoxHalf hasHoverTooltip">
                    <div class="totalHealingHeader">AVG DPS/Interval</div>
                    <div class="totalHealingValue" id="avgDPS2">0.00%</div>
                </div>
            </div>
        </div>
        `;

        readSelection("abilityBreakdownBody2").innerHTML += `
        <div class="abilityBreakdownHeader">DESCRIPTION</div>
        <div class="abilityBreakdownDescription">${characterRef.abilities.ability2["Diamagnetic Bulwark"].desc}</div>
        `;

        const basePowerModifier = 109.7/100;
        const maxHits = 50;

        const sumModifierBonus = index.PowerModifierBase + index.PowerModifierNonAttribute + index.PowerModifierDimension;
        const skillPowerModifier = basePowerModifier + sumModifierBonus;
    
        const reactorOptimizationBonus = globalRecords.reactor.weaponMatched ? 1.6 : 1;
        const basePowerRatio = 1 + index.PowerRatioBase;
        const nonAttributePowerRatio = 1 + index.PowerRatioNonAttribute;
        const dimensionPowerRatio = 1 + index.PowerRatioDimension;
    
        //We're assuming you're using a fully enhanced reactor.
        const baseSkillPower = (11724.62 * reactorOptimizationBonus + index.SkillAttackColossus) * nonAttributePowerRatio * dimensionPowerRatio * basePowerRatio;
    
        const critRate = returnObject.totalSkillCritRate;
        const critDamage = returnObject.totalSkillCritDamage;
        const critComposite = 1 + (critRate * (critDamage-1));
    
        const dmgPerHit = baseSkillPower * skillPowerModifier;
        const dmgPerHitCrit = dmgPerHit * critDamage;
        const avgImpact = dmgPerHit * critComposite;

        const totalTicksDamage = dmgPerHit * maxHits;
        const totalAvgDamage = totalTicksDamage * critComposite;

        const cooldown = 20 * (1 + index.SkillCooldown);
        const avgUseDuration = 4;
        const totalInterval = cooldown + avgUseDuration;
        const totalDPS = totalAvgDamage/totalInterval;
        // const dmgPerHitAvg = dmgPerHitSum * critComposite;
    
        readSelection("barBonus2").innerHTML = maxHits.toFixed(2);
        readSelection("skillPower2").innerHTML = `${baseSkillPower.toLocaleString()}`;
        readSelection("powerModifier2").innerHTML = `${(sumModifierBonus*100).toLocaleString()}%`;

        readSelection("skillDmg2").innerHTML = `${dmgPerHit.toLocaleString()}`;
        readSelection("critPerShot2").innerHTML = `${dmgPerHitCrit.toLocaleString()}`;
        readSelection("avgImpact2").innerHTML = `${avgImpact.toLocaleString()}`;

        readSelection("totalBombDamage2").innerHTML = `${totalTicksDamage.toLocaleString()}`;

        readSelection("totalAvgDamage2").innerHTML = `${totalAvgDamage.toLocaleString()}`;

        readSelection("cooldown2").innerHTML = `${cooldown.toLocaleString()}`;
        readSelection("avgDuration2").innerHTML = `${avgUseDuration.toLocaleString()}`;
        readSelection("totalInterval").innerHTML = `${totalInterval.toLocaleString()}`;


        readSelection("avgDPS2").innerHTML = `${totalDPS.toLocaleString()}`;
    },
    kyleThrustersCalcs(index,returnObject) {
        const characterRef = characters.Kyle;
        const settingsRef = characterRef.characterSettings;
        const abilityTypeArray = characterRef.abilities.ability4.base.type;
        const skillPlacement = 4;

        readSelection("abilityBreakdownBody4").innerHTML = `
        <div class="traitMegaTitleHeader">RESULTS</div>
        <div class="basicsSummaryBox" id="lepicResultsBox">

            <div class="totalHealingBox">
                <div class="totalHealingBoxHalf hasHoverTooltip">
                    <div class="totalHealingHeader">Mag Force</div>
                    <div class="totalHealingValue" id="barBonus">0.00</div>
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
                    <div class="totalHealingHeader">Skill DMG</div>
                    <div class="totalHealingValue" id="skillDmg">0.00</div>
                </div>
                <div class="totalHealingBoxHalf hasHoverTooltip">
                    <div class="totalHealingHeader">Mag Force DMG</div>
                    <div class="totalHealingValue" id="magDmg">0.00%</div>
                </div>
            </div>

            <div class="totalHealingBox">
                <div class="totalHealingBoxHalf hasHoverTooltip">
                    <div class="totalHealingHeader">Dmg/Impact</div>
                    <div class="totalHealingValue" id="dmgPerShot">0.00</div>
                </div>
                <div class="totalHealingBoxHalf hasHoverTooltip">
                    <div class="totalHealingHeader">Crit/Impact</div>
                    <div class="totalHealingValue" id="critPerShot">0.00%</div>
                </div>
            </div>
            <div class="totalHealingBox">
                <div class="totalHealingBoxHalf hasHoverTooltip">
                    <div class="totalHealingHeader">Avg/Impact</div>
                    <div class="totalHealingValue" id="averageSum">0.00%</div>
                </div>
            </div>

            <div class="totalHealingBox">
                <div class="totalHealingBoxHalf hasHoverTooltip">
                    <div class="totalHealingHeader">Cooldown</div>
                    <div class="totalHealingValue" id="cooldown">0.00</div>
                </div>
                <div class="totalHealingBoxHalf hasHoverTooltip">
                    <div class="totalHealingHeader">Avg Use Duration</div>
                    <div class="totalHealingValue" id="avgActiveDuration">0.00%</div>
                </div>
                <div class="totalHealingBoxHalf hasHoverTooltip">
                    <div class="totalHealingHeader">Total Interval</div>
                    <div class="totalHealingValue" id="damageIntervals">0.00%</div>
                </div>
            </div>

            <div class="totalHealingBox">
                <div class="totalHealingBoxHalf hasHoverTooltip">
                    <div class="totalHealingHeader">AVG DPS/Interval</div>
                    <div class="totalHealingValue" id="damagePerSecond">0.00%</div>
                </div>
            </div>
        </div>
        `;
        readSelection("abilityBreakdownBody4").innerHTML += `
        <div class="abilityBreakdownHeader">DESCRIPTION</div>
        <div class="abilityBreakdownDescription">${characterRef.abilities.ability4.base.desc}</div>
        `;
        readSelection("kyleMagForceBar4").value = settingsRef.magForceBarState;
        readSelection("barFilledDisplay").innerHTML = `${settingsRef.magForceBarState}%`;


        const basePowerModifier = 26980.6/100;
        const baseMagModifier = 12861.8/100;

        const sumModifierBonus = calcs.getTotalSkillPowerModifier(index,abilityTypeArray);
        const baseSkillPower = calcs.getTotalSkillPower(index,abilityTypeArray);

        const skillPowerModifier = basePowerModifier + sumModifierBonus;
        const abilityDR = calcs.getResistanceBasedDR(abilityTypeArray[0]);  console.log(abilityDR)
        //no sum modifier for mag force as it is static
    
        //double shield to get mag force, and then apply the %portion the user specified on the mag force bar to get the actual mag force amount.
        //also note this is based on total shield, not fixed or display shield, so overwhelming HP does not ruin your mag force amount
        const magForce = (returnObject.totalShield * 2) * (+settingsRef.magForceBarState/100);
        readSelection("barBonus").innerHTML = magForce.toFixed(2);
    
        const critRate = returnObject.totalSkillCritRate;
        const critDamage = returnObject.totalSkillCritDamage;
        const critComposite = 1 + (critRate * (critDamage-1));
    
        const dmgPerHit = baseSkillPower * skillPowerModifier * abilityDR;
        const dmgPerHitMag = magForce * baseMagModifier * abilityDR;
        const dmgPerHitSum = dmgPerHit + dmgPerHitMag;

        const dmgPerHitCrit = dmgPerHitSum * critDamage;
        const dmgPerHitAvg = dmgPerHitSum * critComposite;

        const cooldown = 120 * (1 + index.SkillCooldown);
        const avgActiveDuration = 5;
        const damageIntervals = cooldown + avgActiveDuration;
        const damagePerSecond = dmgPerHitAvg/damageIntervals;
    
        readSelection("barBonus").innerHTML = magForce.toFixed(2);
        readSelection("skillPower").innerHTML = `${baseSkillPower.toLocaleString()}`;
        readSelection("powerModifier").innerHTML = `${(sumModifierBonus*100).toLocaleString()}%`;

        readSelection("skillDmg").innerHTML = `${dmgPerHit.toLocaleString()}`;
        readSelection("magDmg").innerHTML = `${dmgPerHitMag.toLocaleString()}`;
    
        readSelection("dmgPerShot").innerHTML = `${dmgPerHitSum.toLocaleString()}`;
        readSelection("critPerShot").innerHTML = `${dmgPerHitCrit.toLocaleString()}`;
        readSelection("averageSum").innerHTML = `${dmgPerHitAvg.toLocaleString()}`;//


        readSelection("cooldown").innerHTML = `${cooldown.toLocaleString()}`;//
        readSelection("avgActiveDuration").innerHTML = `${avgActiveDuration.toLocaleString()}`;//
        readSelection("damageIntervals").innerHTML = `${damageIntervals.toLocaleString()}`;//

        readSelection("damagePerSecond").innerHTML = `${damagePerSecond.toLocaleString()}`;//
    
    
    },
    kyleBomberCalcs(index,returnObject) {
        const characterRef = characters.Kyle;
        const settingsRef = characterRef.characterSettings;
        const abilityTypeArray = characterRef.abilities.ability4["Superconductive Bombing"].type;

        readSelection("abilityBreakdownBody4").innerHTML = `
        <div class="traitMegaTitleHeader">RESULTS</div>
        <div class="basicsSummaryBox" id="lepicResultsBox">

            <div class="totalHealingBox">
                <div class="totalHealingBoxHalf hasHoverTooltip">
                    <div class="totalHealingHeader">Mag Force</div>
                    <div class="totalHealingValue" id="barBonus">0.00</div>
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
                    <div class="totalHealingHeader">Impact DMG</div>
                    <div class="totalHealingValue" id="skillDmg">0.00</div>
                </div>
                <div class="totalHealingBoxHalf hasHoverTooltip">
                    <div class="totalHealingHeader">Crit/Impact</div>
                    <div class="totalHealingValue" id="critPerShot">0.00%</div>
                </div>
            </div>
            <div class="totalHealingBox">
                <div class="totalHealingBoxHalf hasHoverTooltip">
                    <div class="totalHealingHeader">Avg/Impact</div>
                    <div class="totalHealingValue" id="avgImpact">0.00%</div>
                </div>
            </div>

            <div class="totalHealingBox">
                <div class="totalHealingBoxHalf hasHoverTooltip">
                    <div class="totalHealingHeader">Bomb DMG</div>
                    <div class="totalHealingValue" id="magDmg">0.00%</div>
                </div>
                <div class="totalHealingBoxHalf hasHoverTooltip">
                    <div class="totalHealingHeader">Crit/Bomb</div>
                    <div class="totalHealingValue" id="magDmgCrit">0.00%</div>
                </div>
            </div>


            <div class="totalHealingBox">
                <div class="totalHealingBoxHalf hasHoverTooltip">
                    <div class="totalHealingHeader">Cost/Set</div>
                    <div class="totalHealingValue" id="costPerSet">0.00%</div>
                </div>
                <div class="totalHealingBoxHalf hasHoverTooltip">
                    <div class="totalHealingHeader">Bombs/Set</div>
                    <div class="totalHealingValue" id="BombsPerSet">0.00%</div>
                </div>
                <div class="totalHealingBoxHalf hasHoverTooltip">
                    <div class="totalHealingHeader">Total Bombs</div>
                    <div class="totalHealingValue" id="totalBombs">0.00%</div>
                </div>
            </div>

            <div class="totalHealingBox">
                <div class="totalHealingBoxHalf hasHoverTooltip">
                    <div class="totalHealingHeader">Total Bomb DMG</div>
                    <div class="totalHealingValue" id="totalBombDamage">0.00%</div>
                </div>
                <div class="totalHealingBoxHalf hasHoverTooltip">
                    <div class="totalHealingHeader">AVG Bomb DMG</div>
                    <div class="totalHealingValue" id="avgBombDamage">0.00%</div>
                </div>
            </div>



            <div class="totalHealingBox">
                <div class="totalHealingBoxHalf hasHoverTooltip">
                    <div class="totalHealingHeader">Total AVG/Cast</div>
                    <div class="totalHealingValue" id="totalAvgDamage">0.00%</div>
                </div>
            </div>
        </div>
        `;
        readSelection("abilityBreakdownBody4").innerHTML += `
        <div class="abilityBreakdownHeader">DESCRIPTION</div>
        <div class="abilityBreakdownDescription">${characterRef.abilities.ability4["Superconductive Bombing"].desc}</div>
        `;


        const basePowerModifier = 1895.7/100;

        //TODO: see if this is still bugged later. Right now the bombs individually do 100% instead of 835.6%, and only 5-6 bombs drop right now.
        //this means that either the damage is split between all bombs and we're still missing damage, or it means all bombs are doing about ~12% of the damage they should be.
        const basePowerModifierBombs = 835.6/100;
        // const basePowerModifierBombs = 790.3/100;
        // const basePowerModifierBombs = 100/100;

        // const costPerDropSet = 0.10 * (1 + index.SkillCost);
        const costPerDropSet = 1080 * (1 + index.SkillCost);
        const dropInterval = 0.5;

        const riseDuration = 1;
        // const flightDuration = 7.8;//this is the usable duration, can't be modified, and given that the drop interval is .5s that means we'll always have excess time
        const flightDuration = 7.4 * (1 + index.SkillDuration);//this is the usable duration, can't be modified, and given that the drop interval is .5s that means we'll always have excess time
        const maxDropIntervals = Math.floor(flightDuration/dropInterval);

        const sumModifierBonus = calcs.getTotalSkillPowerModifier(index,abilityTypeArray);
        const baseSkillPower = calcs.getTotalSkillPower(index,abilityTypeArray);
        const abilityDR = calcs.getResistanceBasedDR(abilityTypeArray[0]);

        const skillPowerModifier = basePowerModifier + sumModifierBonus;
        const skillPowerModifierBombs = basePowerModifierBombs + sumModifierBonus;
    
        const magForceTotal = returnObject.totalShield * 2;
        const magForce = magForceTotal * (+settingsRef.magForceBarState/100);
        readSelection("barBonus").innerHTML = magForce.toFixed(2);

        // const flatCostPerSet = magForceTotal * costPerDropSet;
        const flatCostPerSet = costPerDropSet;
        const totalDropsPossible = Math.min(maxDropIntervals,Math.floor(magForce/flatCostPerSet));
        const bombsPerSet = 6;
        const totalBombsDropped = bombsPerSet * totalDropsPossible;

        // const baseSkillPower = (11060.96 * reactorOptimizationBonus + index.SkillAttackColossus) * nonAttributePowerRatio * techPowerRatio * basePowerRatio;
    
        const critRate = returnObject.totalSkillCritRate;
        const critDamage = returnObject.totalSkillCritDamage;
        const critComposite = 1 + (critRate * (critDamage-1));
    
        const dmgPerHit = baseSkillPower * skillPowerModifier * abilityDR;
        const dmgPerHitBombs = baseSkillPower * skillPowerModifierBombs * abilityDR;
        // const dmgPerHitSum = dmgPerHit + dmgPerHitMag;

        const dmgPerHitCrit = dmgPerHit * critDamage;
        const dmgPerHitCritBombs = dmgPerHitBombs * critDamage;

        const avgImpact = dmgPerHit * critComposite;
        const totalBombDamage = totalBombsDropped * dmgPerHitBombs;
        const avgBombDamage = totalBombDamage * critComposite;

        const totalAvgDamage = avgImpact + avgBombDamage;
        // const dmgPerHitAvg = dmgPerHitSum * critComposite;
    
        readSelection("barBonus").innerHTML = magForce.toFixed(2);
        readSelection("skillPower").innerHTML = `${baseSkillPower.toLocaleString()}`;
        readSelection("powerModifier").innerHTML = `${(sumModifierBonus*100).toLocaleString()}%`;

        readSelection("skillDmg").innerHTML = `${dmgPerHit.toLocaleString()}`;
        readSelection("critPerShot").innerHTML = `${dmgPerHitCrit.toLocaleString()}`;
        readSelection("avgImpact").innerHTML = `${avgImpact.toLocaleString()}`

        readSelection("magDmg").innerHTML = `${dmgPerHitBombs.toLocaleString()}`;
        readSelection("magDmgCrit").innerHTML = `${dmgPerHitCritBombs.toLocaleString()}`;


        readSelection("costPerSet").innerHTML = `${(costPerDropSet*100).toLocaleString() + "%"}`;
        readSelection("BombsPerSet").innerHTML = bombsPerSet;
        readSelection("totalBombs").innerHTML = `${totalBombsDropped.toLocaleString()}`;

        readSelection("totalBombDamage").innerHTML = `${totalBombDamage.toLocaleString()}`;
        readSelection("avgBombDamage").innerHTML = `${avgBombDamage.toLocaleString()}`;

        readSelection("totalAvgDamage").innerHTML = `${totalAvgDamage.toLocaleString()}`;
    
        // readSelection("dmgPerShot").innerHTML = `${dmgPerHitSum.toLocaleString()}`;
        // readSelection("critPerShot").innerHTML = `${dmgPerHitCrit.toLocaleString()}`;
        // readSelection("averageSum").innerHTML = `${dmgPerHitAvg.toLocaleString()}`;//
    },
    kyleBarCalcs(index,returnObject) {
        const characterRef = characters.Kyle;
        const settingsRef = characterRef.characterSettings;
        const abilityTypeArray = characterRef.abilities.ability5.base.type;
        const skillPlacement = 5;

        readSelection(`abilityBreakdownBody${skillPlacement}`).innerHTML = `
        <div class="totalHealingBox">
            <div class="statsRowName">Mag % Filled:&nbsp;<span id="barFilledDisplay">100%</span></div>
            <div class="statsRowToggle">
                <input type="range" id="kyleMagForceBar4" name="slider" min="0" max="100" value="100" step="10" onchange="settings.updateCharacterSettings('Kyle')">
            </div>
        </div>
        `;
        readSelection(`abilityBreakdownBody${skillPlacement}`).innerHTML += `
        <div class="abilityBreakdownHeader">DESCRIPTION</div>
        <div class="abilityBreakdownDescription">${characterRef.abilities.ability5.base.desc}</div>
        `;

        readSelection("kyleMagForceBar4").value = settingsRef.magForceBarState;
        readSelection("barFilledDisplay").innerHTML = `${settingsRef.magForceBarState}%`;
    },



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
                const rangeBonus = Math.min(2,index.SkillRange)/2;//range caps at 200%
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
                    const addedRangeLimit = statValue * limit - statValue;
                    statValue += Math.min(addedRangeLimit,(addedRangeLimit*rangeBonus)); 
                    unit = "m";
                }
                else if (statType === "cost") {if (isModifiedByIndex) {statValue *= (1 + index.SkillCost);}}
                else if (entry.isUnlabeledPercent) {unit = "%";}

                rowString += addRow("",statName,statValue,isRounded,unit);
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