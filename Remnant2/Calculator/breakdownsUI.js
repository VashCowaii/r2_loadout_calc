let breakdownsUI = {
    meleeBreakdownUI(index,meleePath,attacksConstructor) {
            let breakdownDomID = `meleeBreakdownTab`;
            let factorID = `meleeFactors`;

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
                            <input type="checkbox" class="toggleCheckbox" id="enableMainSwings" onchange="conditionalHelpers.updateGlobalToggle('enableMainSwings','enableMeleeEffects')" ${globalRecords.enableMainSwings ? "checked" : ""}> <!--math toggle-->
                            <span class="toggleSlider"></span>
                        </label>&nbsp;
                    </span>
                    <span class="damageEnableOptions hasHoverTooltip" id="bonusEffectMeleeHolder">&nbsp;Include Effects&nbsp;
                        <label class="toggleContainer">
                            <input type="checkbox" class="toggleCheckbox" id="enableMeleeEffects" onchange="conditionalHelpers.updateGlobalToggle('enableMeleeEffects','enableMainSwings')"  ${globalRecords.enableMeleeEffects ? "checked" : ""}> <!--math toggle-->
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

            let selectedMeleeBreakdown = null;
            let breakdownHeaderTitle = "";
            switch (globalRecords.selectedMeleeBreakdown) {
                case "basicAttacks": 
                    selectedMeleeBreakdown = attacksConstructor.basicAttacks;
                    breakdownHeaderTitle = "BASIC ATTACKS";
                    break;
                case "chargeAttacks": 
                    selectedMeleeBreakdown = attacksConstructor.chargeAttacks;
                    breakdownHeaderTitle = "CHARGE ATTACKS";
                    break;
                case "backstepAttacks": 
                    selectedMeleeBreakdown = attacksConstructor.backstepAttacks;
                    breakdownHeaderTitle = "BACKSTEP ATTACKS";
                    break;
                case "backstepChargeAttacks": 
                    selectedMeleeBreakdown = attacksConstructor.backstepChargeAttacks;
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

            let allDamageTags = [...selectedMeleeBreakdown.Damage];
            let allCritTags = [...selectedMeleeBreakdown.CritChance];
            let allCritDamageTags = [...selectedMeleeBreakdown.CritDamage];
            let allWeakspotTags = [...selectedMeleeBreakdown.WeakSpot];
            let allSpeedTags = [...selectedMeleeBreakdown.Speed];

            conditionalHelpers.addMissingTags(selectedMeleeBreakdown,"projectileObject","Damage",allDamageTags);
            conditionalHelpers.addMissingTags(selectedMeleeBreakdown,"projectileObject","CritChance",allCritTags);
            conditionalHelpers.addMissingTags(selectedMeleeBreakdown,"projectileObject","CritDamage",allCritDamageTags);
            conditionalHelpers.addMissingTags(selectedMeleeBreakdown,"projectileObject","WeakSpot",allWeakspotTags);
            // conditionalHelpers.addMissingTags(selectedMeleeBreakdown,"projectileObject","Speed",allSpeedTags);
            conditionalHelpers.addMissingTags(selectedMeleeBreakdown,"projectileChargeReleaseObject","Damage",allDamageTags);
            conditionalHelpers.addMissingTags(selectedMeleeBreakdown,"projectileChargeReleaseObject","CritChance",allCritTags);
            conditionalHelpers.addMissingTags(selectedMeleeBreakdown,"projectileChargeReleaseObject","CritDamage",allCritDamageTags);
            conditionalHelpers.addMissingTags(selectedMeleeBreakdown,"projectileChargeReleaseObject","WeakSpot",allWeakspotTags);
            // conditionalHelpers.addMissingTags(selectedMeleeBreakdown,"projectileChargeReleaseObject","Speed",allSpeedTags);

            allDamageTags = [...new Set(allDamageTags)];
            allCritTags = [...new Set(allCritTags)];
            allCritDamageTags = [...new Set(allCritDamageTags)];
            allWeakspotTags = [...new Set(allWeakspotTags)];
            allSpeedTags = [...new Set(allSpeedTags)];
            

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
}