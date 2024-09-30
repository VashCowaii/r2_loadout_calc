/* ---------------------------------------------------------------------------------------- */
/* ------ Shorthand functions used to actually define the HTML to be injected at various points------------- */
/* ---------------------------------------------------------------------------------------- */
let createHTML = {
    //Defines the traitbox elements that get put into traitsMegaBox
    traitBox(elemID) {
      let greatTraitRecords = globalRecords.greatTraitRecords;
      let traitName = greatTraitRecords[elemID-1].name;
      let traitLevel = greatTraitRecords[elemID-1].level;
      let traitsRef = traits[traitName];
      let traitDescription = traitsRef.desc
      let levelValue = traitsRef.level[traitLevel];
      if (traitDescription.includes("%")) {levelValue *= 100;}
      let adjustedDescription = traitDescription.replace("VALUE1.1",levelValue.toFixed(2));
  
      if (traitsRef.level2) {
        let levelValue2 = traitsRef.level2[traitLevel];
        if (traitDescription.includes("%")) {levelValue2 *= 100;}
        adjustedDescription = traitDescription.replace("VALUE2.1",levelValue2.toFixed(2));
      }
  
      tooltipStorage[`traitContainer${elemID}`] = adjustedDescription.replace("VALUE1.1",levelValue.toFixed(2));
  
      return `<div class="traitContainer hasHoverTooltip" id="traitContainer${elemID}">
                <div class="traitLineHolder">
                    <div class="traitNameHolder">
  
                        <div class="presetsSelectorBox">
                            <input class="selectSelector traitNameAdjustment hasHoverTooltip" id="trait${elemID}" list="trait${elemID}List" onchange="userTrigger.updateTrait(${elemID})"> <!--selector-->
                            <datalist id="trait${elemID}List"></datalist>
                        </div>
  
                        <div class="traitLevelDisplay">
                          <input type="number" class="traitLevelInput" id="trait${elemID}Level" min="0" max="10" step="1" value="${globalRecords.greatTraitRecords[elemID-1].level}" onchange="userTrigger.updateTrait(${elemID})">
                        </div> 
                    </div>
                    <div class="traitLevelContainer">
                        <div class="traitLevelBar">
                            <div class="traitLevelCircle" id="trait${elemID}Circle1" onclick="userTrigger.updateTrait(${elemID},1)"></div>
                            <div class="traitLevelCircle" id="trait${elemID}Circle2" onclick="userTrigger.updateTrait(${elemID},2)"></div>
                            <div class="traitLevelCircle" id="trait${elemID}Circle3" onclick="userTrigger.updateTrait(${elemID},3)"></div>
                            <div class="traitLevelCircle" id="trait${elemID}Circle4" onclick="userTrigger.updateTrait(${elemID},4)"></div>
                            <div class="traitLevelCircle" id="trait${elemID}Circle5" onclick="userTrigger.updateTrait(${elemID},5)"></div>
                            <div class="traitLevelCircle" id="trait${elemID}Circle6" onclick="userTrigger.updateTrait(${elemID},6)"></div>
                            <div class="traitLevelCircle" id="trait${elemID}Circle7" onclick="userTrigger.updateTrait(${elemID},7)"></div>
                            <div class="traitLevelCircle" id="trait${elemID}Circle8" onclick="userTrigger.updateTrait(${elemID},8)"></div>
                            <div class="traitLevelCircle" id="trait${elemID}Circle9" onclick="userTrigger.updateTrait(${elemID},9)"></div>
                            <div class="traitLevelCircle" id="trait${elemID}Circle10" onclick="userTrigger.updateTrait(${elemID},10)"></div>
                        </div>
                    </div>
                </div>
            </div>`
    },
    consumableBox(consumableTable,elemID) {
      const comboString = `${consumableTable}${elemID}`;
      return `
        <div class="selectionsInfoContainer" id="${comboString}Tab">
            <div class="selectionItemTypeHeader">${consumableTable === 'concoction' ? 'Concoction' : "Quick-Use"} ${elemID}</div>
            <div class="selectionItemTypeBody">
                <div class="seletionBackgroundBox">
                    <img class="selectionBackgroundImage" src="/images/Remnant/clear.png" id="${comboString}Icon" alt="${comboString} Icon"> <!--image-->
                </div>
  
                <div class="selectionSelectorBox">
                    <div class="selectSelectorTitle">SELECT:</div>
                    <div class="presetsSelectorBox">
                        <input class="selectSelector" id="${comboString}" list="${comboString}List" onchange="userTrigger.updateConsumable('${consumableTable}','${elemID}')"> <!--selector-->
                        <datalist id="${comboString}List"></datalist>
                    </div>
                </div>
                <div class="selectItemDesc" id="${comboString}Desc"></div> <!--description-->
                <div class="selectItemDurationFooter" id="${comboString}Duration"></div> <!--duration-->
            </div>
  
            <div class="selectionItemTypeFooter">
                <div style="padding-right: 5px;">Disable item calculation:</div>
                <label class="toggleContainer">
                    <input type="checkbox" class="toggleCheckbox" id="USEtoggled${consumableTable==="concoction" ? "Conc" : "Quick"}${elemID}" onchange="userTrigger.updateConsumableToggle(${elemID-1},'${consumableTable==="concoction" ? "concoctionsToggleArray" : "consumablesToggleArray"}');updateFormulas();"> <!--math toggle-->
                    <span class="toggleSlider"></span>
                </label>
            </div>
        </div>
      `
    },
    consumableIconBox(consumableTable,elemID) {
      const comboString = `${consumableTable}${elemID}`;
      return `
      <button type="button" class="comboConsumableImageBox comboConsumableImageBoxMAIN" id="${comboString}MAINbox" onclick="basicsUpdates.updateFocus('${comboString}Tab','${comboString}')">
          <img class="comboArmorImage" src="/images/Remnant/clear.png" id="${comboString}IconMAIN" alt="Combo ${comboString}">
      </button>
      `
    },
    archsIconsBox(consumableTable,elemID) {
      const comboString = `${consumableTable}${elemID}`;
      return `
      <button type="button" class="comboConsumableImageBox" id="${comboString}MAINbox" onclick="basicsUpdates.updateFocus('${comboString}Tab','${comboString}')">
          <img class="comboArmorImage" src="/images/Remnant/clear.png" id="${comboString}IconMAIN" alt="Combo ${comboString}">
      </button>
      `
    },
    basicsRow(tooltipID,name,value,isRounded,unit) {
      unit = unit ?? "";
      value = unit==="%" ? value*100 : value;
      value = !isRounded ? value : value.toFixed(2)
      return `<div class="basicsDRContainer hasHoverTooltip" id="${tooltipID}">
        <span class="basicsDRStat">${name}</span><span class="rowTraceLine"></span><span class="basicsDRValue" id="">${value}</span>
      ${unit}</div>`
    },
    //Generalized select <option> population. *should* be able to be used for any gear selection,provided there is a distinct json format to pull from
    populateGear(elemID,collection) {
      const select = readSelection(elemID);
      if (collection != traits) {
        for (const gear in collection) {
          if (collection.hasOwnProperty(gear)) {
            const option = document.createElement("option");
            option.text = gear;
            select.appendChild(option);
          }
        }
      }
      else {
        for (const gear in collection) {
          if (collection.hasOwnProperty(gear)) {
            let matchFound = false;
            for (let i=1;i<=globalRecords.greatTraitRecords.length;i++) {
              if (gear === globalRecords.greatTraitRecords[i-1].name && gear && `trait${i}` != elemID) {
                matchFound = true;
                break;
              }
            }
            if (matchFound===false) {
              const option = document.createElement("option");
              option.text = gear;
              select.appendChild(option);
            }
          }
        }
      }
    },
    damageBreakdownSelectorButton(breakdownName,imagePath,breakdownDomID) {
      return `
      <button type="button" class="breakdownSelectorButton" onclick="advancedUpdates.updateSelectedDamageBreakdown('${breakdownDomID}')">
        <div class="exportText">${breakdownName}</div>
        <div class="exportIconBox">
            <img class="exportIcon" src="${imagePath}" alt="R2TK Icon">
        </div>
      </button>
      `
    },
    generalAbilityBreakdownBox(breakdownInfoUI) {
      let insertedHTML = `
        <div class="seletionBackgroundAbilityBox">
            <div class="selectionBackgroundAbilityAdjustment">
                <img class="abilityDPSbackgroundImage" src='${breakdownInfoUI.image}' alt="damage breakdown icon">
            </div>
        </div>
        
        <div class="selectionAbilityDPSBody">
            <div class="selectionAbilityDPSTitleHeader">${breakdownInfoUI.name.toUpperCase()}</div>

            <div class="selectionAbilityDPSHeader" style="white-space: normal;">
                <div class="advancedSummaryThirds" style="width: auto;">
                    <span class="advancedSummaryStat">DPS</span><span class="rowTraceLine"></span><span class="advancedSummaryValue">${(+(breakdownInfoUI.dps || 0).toFixed(2)).toLocaleString()}</span>
                </div>
                <div class="advancedSummaryThirds" style="width: auto;">
                    <span class="advancedSummaryStat">TOTAL DMG</span><span class="rowTraceLine"></span><span class="advancedSummaryValue">${(+(breakdownInfoUI.totalDMG || 0).toFixed(2)).toLocaleString()}</span>
                </div>
            </div>
            
            <div class="abilityFactorsList" id="${breakdownInfoUI.factorID}"></div>
        </div>`
      return insertedHTML;
    },
    "Planner": {
      populateGearPlannerVariant(elemID,collection,removePriorOptions) {
        const select = readSelection(elemID);
        if (!removePriorOptions) {
          for (const gear in collection) {
            if (collection.hasOwnProperty(gear)) {
              const option = document.createElement("option");
              option.text = gear;
              select.appendChild(option);
            }
          }
        }
        else {
          for (const gear in collection) {
            if (collection.hasOwnProperty(gear)) {
              let matchFound = false;
              for (let i=1;i<=globalRecords.greatTraitRecords.length;i++) {
                if (gear === globalRecords.greatTraitRecords[i-1].name && gear && `trait${i}` != elemID) {
                  matchFound = true;
                  break;
                }
              }
              if (matchFound===false) {
                const option = document.createElement("option");
                option.text = gear;
                select.appendChild(option);
              }
            }
          }
        }
      },
      plannerRowBox(rowID,iconImageOverride) {
        return `
        <div class="basicsSummaryContainerPrism hasHoverTooltip" id="PrismRow${rowID}Holder">
            <div class="prismRowIconPlusName">
              <div class="fragIconRowBox">
                  <img class="fragRowIcon" src=${iconImageOverride ?? "/brotherLibrary/plannerImages/iconImages/Blank.png"} id="PrismRow${rowID}Icon">
              </div>

              <div class="presetsSelectorBox">
                  <input class="selectSelector traitNameAdjustment hasHoverTooltip" id="PrismRow${rowID}" list="PrismRow${rowID}List" onchange="plannerTrigger.updateRow(${rowID})">
                  <datalist id="PrismRow${rowID}List"></datalist>
              </div>
              <span class="prismRowValue" id="PrismRow${rowID}Value"></span>
            </div>

            <span class="prismRowDescription" id="PrismRow${rowID}Description"></span>
        </div>
        `
      }
    }//<span class="rowTraceLine"></span> <span class="basicsSummaryValue" id="PrismRow${rowID}Value">0.0</span>
  }