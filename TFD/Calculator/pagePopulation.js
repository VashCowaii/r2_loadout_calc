//Shorthand for selecting an element by ID. Follow up with .value or .innerHTML, etc.
function readSelection(elemID) {return document.getElementById(elemID);}

for (let i=1;i<=12;i++) {
    let boxType = null;
    if (i===1) {boxType = "trans"}
    else if (i===2) {boxType = "sub"}
    readSelection("basicsBoxModsHolder").innerHTML += createHTML.modSlotBox(i,boxType);
}

const userTriggers = {
    updateSelectedFocus(elementID) {
        const list = [
            "characterBreakdownTab",
            "reactorBreakdownTab",
            "auxiliaryBreakdownTab",
            "sensorBreakdownTab",
            "memoryBreakdownTab",
            "processorBreakdownTab",
            "mod1BreakdownTab",
            "mod2BreakdownTab",
            "mod3BreakdownTab",
            "mod4BreakdownTab",
            "mod5BreakdownTab",
            "mod6BreakdownTab",
            "mod7BreakdownTab",
            "mod8BreakdownTab",
            "mod9BreakdownTab",
            "mod10BreakdownTab",
            "mod11BreakdownTab",
            "mod12BreakdownTab",
        ]
        for (let name of list) {
            readSelection(name).style.display = "none";
        }
        readSelection(elementID).style.display = "flex";
    },
    updateSelectedCharacter() {
        //clear invalid inputs
        if (!characters[readSelection("character").value]) {readSelection("character").value = ""}
        selectedCharacter = readSelection("character").value;

        globalRecords.character.currentCharacter = selectedCharacter;

        readSelection("characterBreakdownIcon").src = characters[selectedCharacter].image;
        readSelection("buttonsCharacterIcon").src = characters[selectedCharacter].image;

        //ability array handling is done within userTriggers.updateSelectedMod
        const arrayRef = globalRecords.character.abilityArray;
        const abilityRefs = characters[selectedCharacter].abilities;

        for (let i=1;i<=5;i++) {
            const path = arrayRef[i-1] === 0 ? "base" : arrayRef[i-1];
            const color = arrayRef[i-1] === 0 ? "none" : "sepia(1) saturate(100) hue-rotate(56deg) brightness(2)";

            readSelection(`breakdownAbilityIcon${i}`).src = abilityRefs[`ability${i}`][path].image;
            readSelection(`breakdownAbilityIcon${i}`).style.filter = color;

            readSelection(`damageAbilityIcon${i}`).src = abilityRefs[`ability${i}`][path].image;
            readSelection(`damageAbilityIcon${i}`).style.filter = color;

            readSelection(`abilityBreakdownHeader${i}`).innerHTML = abilityRefs[`ability${i}`][path].name.toUpperCase();
            let typeString = "";
            if (abilityRefs[`ability${i}`][path].type.length === 1) {typeString = abilityRefs[`ability${i}`][path].type[0].toUpperCase();}
            else if (abilityRefs[`ability${i}`][path].type.length === 2) {typeString = abilityRefs[`ability${i}`][path].type[0].toUpperCase() + ",&nbsp;" + abilityRefs[`ability${i}`][path].type[1].toUpperCase();}
            readSelection(`abilityBreakdownTypeHeader${i}`).innerHTML = typeString;
        }

        updateFormulas();
    },
    updateSelectedAbilityBreakdown(abilityID,imageElementID) {
        const imageIDList = ["damageAbilityIcon1","damageAbilityIcon2","damageAbilityIcon3","damageAbilityIcon4","damageAbilityIcon5"];
        const tabList = ["abilityBreakdownTab1","abilityBreakdownTab2","abilityBreakdownTab3","abilityBreakdownTab4","abilityBreakdownTab5"]
        const abilityTitleList = ["abilityBreakdownHeader1","abilityBreakdownHeader2","abilityBreakdownHeader3","abilityBreakdownHeader4","abilityBreakdownHeader5"]
        const globalRef = globalRecords.character;

        if (abilityID){
            //assign the selected ability to global
            globalRef.currentAbilityBreakdown = +abilityID;
            globalRef.currentAbilityBreakdownID = imageElementID;
        }

        //darken and remove borders on all abilities
        for (let entry of imageIDList) {
            readSelection(entry).style.border = "none";
            readSelection(entry).style.opacity = "0.3";
        }
        for (let entry of tabList) {readSelection(entry).style.display = "none";}
        //then add it back on the selected ability
        readSelection(globalRef.currentAbilityBreakdownID).style.border = "1px solid white";
        readSelection(globalRef.currentAbilityBreakdownID).style.opacity = "1";
        readSelection(`abilityBreakdownTab${globalRef.currentAbilityBreakdown}`).style.display = "flex";

        //no update formulas needed here since we aren't changing any math, only visuals with this function
    },
    updateReactorSelections(list,iconID,valueToAssign) {
        const lists = {
            "1": ["reactorNonAttribute","reactorFire","reactorElectric","reactorChill","reactorToxic"],
            "2": ["reactorDimension","reactorFusion","reactorSingular","reactorTech"],
            "3": ["reactorGeneral","reactorSpecial","reactorImpact","reactorHighPowered"],
        }
        const primaryList = ["reactorNonAttribute","reactorFire","reactorElectric","reactorChill","reactorToxic"];
        const secondaryList = ["reactorDimension","reactorFusion","reactorSingular","reactorTech"];
        const thirdList = ["reactorGeneral","reactorSpecial","reactorImpact","reactorHighPowered"];
        const globalRef = globalRecords.reactor;

        if (list) {
            const clearList = lists[list];
            for (let entry of clearList) {
                readSelection(entry).style.border = "none";
                readSelection(entry).style.filter = "brightness(0.5)";
            }
            if (list<3) {
                if (iconID) {globalRef[list === 1 ? "currentAttributeID" : "currentTypeID"] = iconID;}
                if (valueToAssign) {globalRef[list === 1 ? "currentAttribute" : "currentType"] = valueToAssign;}
            }
            else {
                globalRef.currentAmmoType = valueToAssign;
                globalRef.currentAmmoTypeID = iconID;
            }
        }

        readSelection(globalRef.currentAttributeID).style.border = "1px solid white";
        readSelection(globalRef.currentAttributeID).style.filter = "brightness(1)";
        readSelection(globalRef.currentTypeID).style.border = "1px solid white";
        readSelection(globalRef.currentTypeID).style.filter = "brightness(1)";

        readSelection(globalRef.currentAmmoTypeID).style.border = "1px solid white";
        readSelection(globalRef.currentAmmoTypeID).style.filter = "brightness(1)";

        const imageString = `/TFD/TFDImages/Reactors/${reactorImagePaths[globalRef.currentAttribute]}${globalRef.currentType}.png`;
        readSelection("reactorBreakdownIcon").src = imageString;
        readSelection("buttonsReactorIcon").src = imageString;

        //clear invalid or duplicate selections
        if (readSelection("reactorSub1").value === readSelection("reactorSub2").value) {readSelection("reactorSub2").value = "";}
        if (!reactorSubRolls[readSelection("reactorSub1").value]) {readSelection("reactorSub1").value = "";}
        if (!reactorSubRolls[readSelection("reactorSub2").value]) {readSelection("reactorSub2").value = "";}

        globalRef.subRoll1 = readSelection("reactorSub1").value;
        globalRef.subRoll2 = readSelection("reactorSub2").value;

        readSelection("reactorSub1Value").innerHTML = reactorSubRolls[globalRef.subRoll1].maximum;
        readSelection("reactorSub2Value").innerHTML = reactorSubRolls[globalRef.subRoll2].maximum;

        globalRef.weaponMatched = readSelection("USEReactorOptimization").checked;

        updateFormulas();
    },
    checkInvalidComponentSelections() {
        //Confirm if user inputs are valid, and clear them if not
        if (!auxiliary[readSelection("auxiliary").value]) {readSelection("auxiliary").value = ""}
        if (!sensor[readSelection("sensor").value]) {readSelection("sensor").value = ""}
        if (!memory[readSelection("memory").value]) {readSelection("memory").value = ""}
        if (!processor[readSelection("processor").value]) {readSelection("processor").value = ""}

        //Also check if both sub rolls are equal to each other, and if so remove the second roll. Users probably WILL do dupes if I don't do this
        if (!auxiliaryRolls[readSelection("auxiliarySub1").value]) {readSelection("auxiliarySub1").value = ""}
        if (!auxiliaryRolls[readSelection("auxiliarySub2").value]) {readSelection("auxiliarySub2").value = ""}
        if (readSelection("auxiliarySub1").value === readSelection("auxiliarySub2").value) {readSelection("auxiliarySub2").value = ""}
        

        if (!sensorRolls[readSelection("sensorSub1").value]) {readSelection("sensorSub1").value = ""}
        if (!sensorRolls[readSelection("sensorSub2").value]) {readSelection("sensorSub2").value = ""}
        if (readSelection("sensorSub1").value === readSelection("sensorSub2").value) {readSelection("sensorSub2").value = ""}

        if (!memoryRolls[readSelection("memorySub1").value]) {readSelection("memorySub1").value = ""}
        if (!memoryRolls[readSelection("memorySub2").value]) {readSelection("memorySub2").value = ""}
        if (readSelection("memorySub1").value === readSelection("memorySub2").value) {readSelection("memorySub2").value = ""}

        if (!processorRolls[readSelection("processorSub1").value]) {readSelection("processorSub1").value = ""}
        if (!processorRolls[readSelection("processorSub2").value]) {readSelection("processorSub2").value = ""}
        if (readSelection("processorSub1").value === readSelection("processorSub2").value) {readSelection("processorSub2").value = ""}
    },
    updateComponentSelections() {
        const globalRef = globalRecords.components;

        //Clear invalid or dupe roll selections
        userTriggers.checkInvalidComponentSelections();
        //assign values to global and update subroll display values
        globalRef.auxiliary = readSelection("auxiliary").value;
        globalRef.auxiliarySub1 = readSelection("auxiliarySub1").value;
        globalRef.auxiliarySub2 = readSelection("auxiliarySub2").value;
        readSelection("auxiliarySub1Value").innerHTML = auxiliaryRolls[globalRef.auxiliarySub1].value.toLocaleString();
        readSelection("auxiliarySub2Value").innerHTML = auxiliaryRolls[globalRef.auxiliarySub2].value.toLocaleString();

        globalRef.sensor = readSelection("sensor").value;
        globalRef.sensorSub1 = readSelection("sensorSub1").value;
        globalRef.sensorSub2 = readSelection("sensorSub2").value;
        readSelection("sensorSub1Value").innerHTML = sensorRolls[globalRef.sensorSub1].value.toLocaleString();
        readSelection("sensorSub2Value").innerHTML = sensorRolls[globalRef.sensorSub2].value.toLocaleString();

        globalRef.memory = readSelection("memory").value;
        globalRef.memorySub1 = readSelection("memorySub1").value;
        globalRef.memorySub2 = readSelection("memorySub2").value;
        readSelection("memorySub1Value").innerHTML = memoryRolls[globalRef.memorySub1].value.toLocaleString();
        readSelection("memorySub2Value").innerHTML = memoryRolls[globalRef.memorySub2].value.toLocaleString();

        globalRef.processor = readSelection("processor").value;
        globalRef.processorSub1 = readSelection("processorSub1").value;
        globalRef.processorSub2 = readSelection("processorSub2").value;
        readSelection("processorSub1Value").innerHTML = processorRolls[globalRef.processorSub1].value.toLocaleString();
        readSelection("processorSub2Value").innerHTML = processorRolls[globalRef.processorSub2].value.toLocaleString();
        //create images strings
        const imageStringAuxiliary = `/TFD/TFDImages/Components/${componentImagePrefixes[globalRef.auxiliary]}${auxiliary[globalRef.auxiliary].imageSuffix}.png`;
        const imageStringSensor = `/TFD/TFDImages/Components/${componentImagePrefixes[globalRef.sensor]}${sensor[globalRef.sensor].imageSuffix}.png`;
        const imageStringMemory = `/TFD/TFDImages/Components/${componentImagePrefixes[globalRef.memory]}${memory[globalRef.memory].imageSuffix}.png`;
        const imageStringProcessor = `/TFD/TFDImages/Components/${componentImagePrefixes[globalRef.processor]}${processor[globalRef.processor].imageSuffix}.png`;
        //then assign the images to the breakdown backgrounds and the associate buttons
        readSelection("auxiliaryBreakdownIcon").src = imageStringAuxiliary;
        readSelection("sensorBreakdownIcon").src = imageStringSensor;
        readSelection("memoryBreakdownIcon").src = imageStringMemory;
        readSelection("processorBreakdownIcon").src = imageStringProcessor;
        //button icons
        readSelection("buttonsAuxiliaryIcon").src = imageStringAuxiliary;
        readSelection("buttonsSensorIcon").src = imageStringSensor;
        readSelection("buttonsMemoryIcon").src = imageStringMemory;
        readSelection("buttonsProcessorIcon").src = imageStringProcessor;

        //update the main stat display of any given component
        readSelection("auxiliaryHeaderRow").innerHTML = `${auxiliary[globalRef.auxiliary].headerStat}: ${auxiliary[globalRef.auxiliary].value.toLocaleString()}`;
        readSelection("sensorHeaderRow").innerHTML = `${sensor[globalRef.sensor].headerStat}: ${sensor[globalRef.sensor].value.toLocaleString()}`;
        readSelection("memoryHeaderRow").innerHTML = `${memory[globalRef.memory].headerStat}: ${memory[globalRef.memory].value.toLocaleString()}`;
        readSelection("processorHeaderRow").innerHTML = `${processor[globalRef.processor].headerStat}: ${processor[globalRef.processor].value.toLocaleString()}`;

        //update breakdown descriptions with set bonuses
        readSelection("auxiliaryDesc").innerHTML = createHTML.componentDescription(componentSetBonuses[globalRef.auxiliary])
        readSelection("sensorDesc").innerHTML = createHTML.componentDescription(componentSetBonuses[globalRef.sensor])
        readSelection("memoryDesc").innerHTML = createHTML.componentDescription(componentSetBonuses[globalRef.memory])
        readSelection("processorDesc").innerHTML = createHTML.componentDescription(componentSetBonuses[globalRef.processor])

        // readSelection("reactorSub1").innerHTML = reactorSubRolls[globalRef.subRoll1].maximum;
        // readSelection("reactorSub2").innerHTML = reactorSubRolls[globalRef.subRoll2].maximum;

        updateFormulas();
    },
    updateSelectedMod(modSlot) {
        let inputRef = readSelection(`mod${modSlot}`);

        let categoryRef = null;
        switch (modSlot) {
            case "1": categoryRef = augments;break;
            case "2": categoryRef = subAttacks;break;
            default: categoryRef = modData;break;
        }

        //if the input is invalid or a duplicate, clear it
        if (!categoryRef[inputRef.value]) {inputRef.value = "";}
        //also check for duplicate categories, like arche tech or support etc.
        //we only check mods 3-10 as it is impossible for mods 1 and 2 (transc and sub) to have a duplicate as only their respective slots can slot their respective mods.
        if (+modSlot >=3) {
            for (let i=2;i<=11;i++) {
                if (inputRef.value != "" && inputRef.value === globalRecords.character.mods[i]) {alert(`You already have ${inputRef.value} equipped, I cleared the selection to avoid a duplicate.`);inputRef.value = "";}
                else if (inputRef.value != "" && +modSlot != i+1 && modData[inputRef.value].category != "" && modData[inputRef.value].category === modData[globalRecords.character.mods[i]].category) {alert(`${modData[inputRef.value].category} mod already equipped [${globalRecords.character.mods[i]}]`);inputRef.value = "";}
            }
        }

        const rarity = categoryRef[inputRef.value].rarity;
        const polarity = categoryRef[inputRef.value].polarity;
        const desc = categoryRef[inputRef.value].desc;
        const category = categoryRef[inputRef.value].category;

        const rarityColorCode = rarityColors[rarity];
        const polarityImagePath = polarityImages[polarity];
        const cost = categoryRef[inputRef.value].cost;

        //if an augment was equipped, update the ability array.
        if (+modSlot === 1) {globalRecords.character.abilityArray = [...categoryRef[inputRef.value].skillOverrides];}

        //If the mod has no category, then remove the category from view. Otherwise, show it.
        if (category === "") {readSelection(`modSlotName${modSlot}Category`).style.display = "none";}
        else {readSelection(`modSlotName${modSlot}Category`).style.display = "flex";}

        //update the cost display
        readSelection(`mod${modSlot}Cost`).innerHTML = `Cost: ${cost}`;

        readSelection(`modSlotName${modSlot}Mod`).innerHTML = inputRef.value;
        readSelection(`modSlotName${modSlot}Category`).innerHTML = category;
        readSelection(`modSlotName${modSlot}`).style.background = `linear-gradient(135deg, ${rarityColorCode}, rgba(255, 0, 0, 0) 50%), linear-gradient(315deg, ${rarityColorCode}, rgba(0, 0, 255, 0) 50%)`;
        readSelection(`modSlotPolarityIcon${modSlot}`).src = polarityImagePath;
        readSelection(`mod${modSlot}Desc`).innerHTML = desc;

        //pass the mod value to records, and then update forms
        globalRecords.character.mods[+modSlot - 1] = inputRef.value
        userTriggers.updateSelectedCharacter();
        updateFormulas();
    }
}

const pagePopulation = {
    "dataListsList": [
        {"Name": "characterList", "DataSet": characters},
        // {"Name": "reactorList", "DataSet": helmets},
        // {"Name": "auxiliaryList", "DataSet": helmets},
        // {"Name": "sensorList", "DataSet": helmets},
        // {"Name": "memoryList", "DataSet": helmets},
        // {"Name": "processorList", "DataSet": helmets},
        {"Name": "mod1List", "DataSet": augments},
        {"Name": "mod2List", "DataSet": subAttacks},
        {"Name": "mod3List", "DataSet": modData},
        {"Name": "mod4List", "DataSet": modData},
        {"Name": "mod5List", "DataSet": modData},
        {"Name": "mod6List", "DataSet": modData},
        {"Name": "mod7List", "DataSet": modData},
        {"Name": "mod8List", "DataSet": modData},
        {"Name": "mod9List", "DataSet": modData},
        {"Name": "mod10List", "DataSet": modData},
        {"Name": "mod11List", "DataSet": modData},
        {"Name": "mod12List", "DataSet": modData},

        // {"Name": "reactorAttributeList", "DataSet": attributeList},
        // {"Name": "reactorTypeList", "DataSet": typeList},

        {"Name": "reactorSub1List", "DataSet": reactorSubRolls},
        {"Name": "reactorSub2List", "DataSet": reactorSubRolls},

        {"Name": "auxiliaryList", "DataSet": auxiliary},
        {"Name": "auxiliarySub1List", "DataSet": auxiliaryRolls},
        {"Name": "auxiliarySub2List", "DataSet": auxiliaryRolls},

        {"Name": "sensorList", "DataSet": sensor},
        {"Name": "sensorSub1List", "DataSet": sensorRolls},
        {"Name": "sensorSub2List", "DataSet": sensorRolls},

        {"Name": "memoryList", "DataSet": memory},
        {"Name": "memorySub1List", "DataSet": memoryRolls},
        {"Name": "memorySub2List", "DataSet": memoryRolls},

        {"Name": "processorList", "DataSet": processor},
        {"Name": "processorSub1List", "DataSet": processorRolls},
        {"Name": "processorSub2List", "DataSet": processorRolls},

    ],
    populateGear(elemID,collection) {
        const select = readSelection(elemID);
        // if (collection != traits) {
          for (const gear in collection) {
            if (collection.hasOwnProperty(gear)) {
              const option = document.createElement("option");
              option.text = gear;
              select.appendChild(option);
            }
          }
        // }
        // else {
        //   for (const gear in collection) {
        //     if (collection.hasOwnProperty(gear)) {
        //       let matchFound = false;
        //       for (let i=1;i<=globalRecords.greatTraitRecords.length;i++) {
        //         if (gear === globalRecords.greatTraitRecords[i-1].name && gear && `trait${i}` != elemID) {
        //           matchFound = true;
        //           break;
        //         }
        //       }
        //       if (matchFound===false) {
        //         const option = document.createElement("option");
        //         option.text = gear;
        //         select.appendChild(option);
        //       }
        //     }
        //   }
        // }
    },
    pagePopulation() {
        let populate = pagePopulation.populateGear;
        for (let entry of pagePopulation.dataListsList) {
            populate(entry.Name,entry.DataSet);
        }
    },
}

const settings = {
    updateCharacterSettings(character,settingsBracket) {
        const settingsRef = characters[character].characterSettings[settingsBracket];
        settings.customSettingsUpdates[settingsBracket](settingsRef);
        updateFormulas();
    },
    "customSettingsUpdates": {
        Overkill(settingsRef) {
            settingsRef.USEFireRateUP = readSelection("USEFireRateUP").checked;
            settingsRef.USESharpPrecisionShot = readSelection("USESharpPrecisionShot").checked;
        },
    }

}


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
        readSelection("summaryMP").innerHTML = returnObject.displayMP.toFixed(3);


        let skillHTML = "<div class='basicsDRheaderTitle'>SKILL LOGIC</div>";
        let skillHTMLRowsHTML = '';
        rowsListings = [//evadeCost,meleeCost
            {"statName": "SkillCost","statCoverName": "Cost Modifier","tooltip":"","relevantTags": [],"isNotAPercent": false,"condition": (index.SkillCost != 0)},
            {"statName": "SkillCooldown","statCoverName": "Cooldown Modifier","tooltip":"","relevantTags": [],"isNotAPercent": false,"condition": (index.SkillCooldown != 0)},
            {"statName": "SkillDuration","statCoverName": "+%Duration","tooltip":"","relevantTags": [],"isNotAPercent": false,"condition": (index.SkillDuration != 0)},
            {"statName": "SkillRange","statCoverName": "+%Range","tooltip":"","relevantTags": [],"isNotAPercent": false,"condition": (index.SkillRange != 0)},

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
            {"statName": "baseCharacterCritRate","statCoverName": "Base Crit Rate","tooltip":"","relevantTags": [],"isNotAPercent": false},
            {"statName": "baseCharacterCritDamage","statCoverName": "Base Crit Damage","tooltip":"","relevantTags": [],"isNotAPercent": true,"roundAnyways": true},
            {"statName": "baseCritRateBonus","statCoverName": "+Base Rate","tooltip":"","relevantTags": [],"isNotAPercent": false},
            {"statName": "baseCritDamageBonus","statCoverName": "+Base Damage","tooltip":"","relevantTags": [],"isNotAPercent": true,"roundAnyways": true},
            {"statName": "critRatePercentBonus","statCoverName": "+% Crit Rate","tooltip":"","relevantTags": [],"isNotAPercent": false},
            {"statName": "critDamagePercentBonus","statCoverName": "+% Crit Damage","tooltip":"","relevantTags": [],"isNotAPercent": false},
            {"statName": "totalSkillCritRate","statCoverName": "Total Skill CR","tooltip":"","relevantTags": [],"isNotAPercent": false,"condition": (returnObject.totalSkillCritRate != returnObject.baseCharacterCritRate)},
            {"statName": "totalSkillCritDamage","statCoverName": "Total Skill CD","tooltip":"","relevantTags": [],"isNotAPercent": true,"roundAnyways": true,"condition": (returnObject.totalSkillCritDamage != returnObject.baseCharacterCritDamage)},
        ]
        critHTMLRowsHTML += expandRows(rowsListings,returnObject);
        readSelection("basicsInnerBox").innerHTML += critHTMLRowsHTML ? critHTML + critHTMLRowsHTML + "<br>" : "";


        let ratioHTML = "<div class='basicsDRheaderTitle'>POWER RATIO</div>";
        let ratioHTMLRowsHTML = '';
        rowsListings = [
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

const formulasValues = {
    pullModStats(index) {
        let modArrayRef = globalRecords.character.mods;
        let pullStats = formulasValues.pullStats;

        for (let i=2;i<=11;i++) {
            let path = modData[modArrayRef[i]].stats
            pullStats(index,path);
        }
    },
    pullReactorStats(index) {
        let reactorRef = globalRecords.reactor;
        let pullStats = formulasValues.pullStats;

        pullStats(index,reactorSubRolls[reactorRef.subRoll1].stats);
        pullStats(index,reactorSubRolls[reactorRef.subRoll2].stats);

        const ratioTable = {
            "Fire" : "PowerRatioFire",
            "Non-Attribute" : "PowerRatioNonAttribute",
            "Electric" : "PowerRatioElectric",
            "Chill" : "PowerRatioChill",
            "Toxic" : "PowerRatioToxic",
            "Tech" : "PowerRatioTech",
            "Singular" : "PowerRatioSingular",
            "Dimension" : "PowerRatioDimension",
            "Fusion": "PowerRatioFusion"
        }

        index[ratioTable[reactorRef.currentAttribute]] += 0.2;
        index[ratioTable[reactorRef.currentType]] += 0.2;

        // currentAttribute
        // currentType
    },
    pullComponentStats(index) {
        const globalRef = globalRecords.components;
        let pullStats = formulasValues.pullStats;

        //add the main stats of each component
        index[auxiliary[globalRef.auxiliary].headerStat] += auxiliary[globalRef.auxiliary].value;
        index[sensor[globalRef.sensor].headerStat] += sensor[globalRef.sensor].value;
        index[memory[globalRef.memory].headerStat] += memory[globalRef.memory].value;
        index[processor[globalRef.processor].headerStat] += processor[globalRef.processor].value;

        //pull substat data
        const subsArray = [
            auxiliaryRolls[globalRef.auxiliarySub1].stats,auxiliaryRolls[globalRef.auxiliarySub2].stats,
            sensorRolls[globalRef.sensorSub1].stats,sensorRolls[globalRef.sensorSub2].stats,
            memoryRolls[globalRef.memorySub1].stats,memoryRolls[globalRef.memorySub2].stats,
            processorRolls[globalRef.processorSub1].stats,processorRolls[globalRef.processorSub2].stats,
        ];
        formulasValues.pullStatsArray(index,subsArray);

        //later, look into doing this in a way that just has the parts provide a +1 to greatTable during the earlier pullstats section,
        //then no for loops are needed. low priority, but it'd be better
        const setListArray = Object.keys(componentSetBonuses);
        const compArray = [globalRef.auxiliary,globalRef.sensor,globalRef.memory,globalRef.processor];
        let setCounter = {};
        //make a quick object with each key as a set name, then add to the count of each set as needed.
        for (let entry of setListArray) {setCounter[entry] = 0;}
        for (let item of compArray) {setCounter[item] += 1;}
        for (let entry of setListArray) {
            if (setCounter[entry] >= 2) {
                pullStats(index,componentSetBonuses[entry]["2pc"].stats);
                //we'll never reach a 4 set if we don't have a 2 sec, so we can include the 4set logic inside the 2set
                if (setCounter[entry] === 4) {pullStats(index,componentSetBonuses[entry]["4pc"].stats);}
            }
        }


    },
    pullAbilityStats(index) {
        const selectedCharacter = globalRecords.character.currentCharacter;

        readSelection("characterBreakdownIcon").src = characters[selectedCharacter].image;
        readSelection("buttonsCharacterIcon").src = characters[selectedCharacter].image;

        //ability array handling is done within userTriggers.updateSelectedMod
        const arrayRef = globalRecords.character.abilityArray;
        const abilityRefs = characters[selectedCharacter].abilities;

        for (let i=1;i<=5;i++) {
            const path = arrayRef[i-1] === 0 ? "base" : arrayRef[i-1];

            formulasValues.pullStats(index,abilityRefs[`ability${i}`][path].stats);
        }
    },
    //Shorthand for looping through an elements "stats" object and adding it to the corresponding master value
    pullStats(index,path) {
        for (let elements in path) {
        if (Array.isArray(path[elements])) {index[elements] *= 1 + path[elements][0];}//If the statistic is multiplicative, like REDmg or DMGKept, etc.
        else {index[elements] += path[elements];}//If the value is a general value, simply add it to the existing value on greatTable
        }
    },
    pullStatsArray(index,pathsArray) {
        let arrayCheck = Array.isArray;
        for (let path of pathsArray) {
        for (let elements in path) {
            let pathElement = path[elements];
            if (arrayCheck(pathElement)) {index[elements] *= 1 + pathElement[0]}
            else {index[elements] += pathElement}
        }
        }
    },
}


function updateFormulas() {
    let tableReference = {...greatTableKnowerOfAll};//get a fresh table to work with
    let characterRef = characters[globalRecords.character.currentCharacter].baseStats
    const globalRef = globalRecords.character.abilities

    formulasValues.pullModStats(tableReference);
    formulasValues.pullReactorStats(tableReference);
    formulasValues.pullComponentStats(tableReference);
    formulasValues.pullAbilityStats(tableReference);


    const {baseCharacterHealth,baseHealthBonus,healthPercentBonus,totalHealth,displayHealth} = calcs.getHealth(tableReference,characterRef);
    const {baseCharacterShield,baseShieldBonus,shieldPercentBonus,totalShield,displayShield} = calcs.getShield(tableReference,characterRef);
    const {baseCharacterDEF,baseDEFBonus,DEFPercentBonus,totalDEF,displayDEF} = calcs.getDefense(tableReference,characterRef);
    const {totalFireResist,totalChillResist,totalToxinResist,totalElectricResist} = calcs.getResistance(tableReference,characterRef);
    const {baseCharacterMP,baseMPBonus,MPPercentBonus,totalMP,displayMP} = calcs.getMP(tableReference,characterRef);
    const {MPRecoveryModifier,baseCharacterMPInCombat,baseMPInCombatBonus,totalMPInCombat,baseCharacterMPOutCombat,baseMPOutCombatBonus,totalMPOutCombat,
        shieldRecoveryModifier,baseCharacterShieldInCombat,baseShieldInCombatBonus,totalShieldInCombat,baseCharacterShieldOutCombat,baseShieldOutCombatBonus,totalShieldOutCombat,
        totalHPRecoveryModifier,totalHPHealModifier} = calcs.getRecovery(tableReference,characterRef);

    const {baseCharacterCritRate,baseCharacterCritDamage,baseCritRateBonus,baseCritDamageBonus,critRatePercentBonus,critDamagePercentBonus,totalSkillCritRate,totalSkillCritDamage} = calcs.getSkillCrit(tableReference,characterRef);


    const returnObject = {
        baseCharacterHealth,baseHealthBonus,healthPercentBonus,totalHealth,displayHealth,
        baseCharacterShield,baseShieldBonus,shieldPercentBonus,totalShield,displayShield,
        baseCharacterDEF,baseDEFBonus,DEFPercentBonus,totalDEF,displayDEF,
        totalFireResist,totalChillResist,totalToxinResist,totalElectricResist,
        baseCharacterMP,baseMPBonus,MPPercentBonus,totalMP,displayMP,
        MPRecoveryModifier,baseCharacterMPInCombat,baseMPInCombatBonus,totalMPInCombat,baseCharacterMPOutCombat,baseMPOutCombatBonus,totalMPOutCombat,
        shieldRecoveryModifier,baseCharacterShieldInCombat,baseShieldInCombatBonus,totalShieldInCombat,baseCharacterShieldOutCombat,baseShieldOutCombatBonus,totalShieldOutCombat,
        totalHPRecoveryModifier,totalHPHealModifier,

        baseCharacterCritRate,baseCharacterCritDamage,baseCritRateBonus,baseCritDamageBonus,critRatePercentBonus,critDamagePercentBonus,totalSkillCritRate,totalSkillCritDamage
    }

    customDamage.callAbilityFunctions(tableReference,returnObject);
    basicsUpdates.updateMainFromFormulas(returnObject,tableReference)
}






















pagePopulation.pagePopulation();

readSelection("reactorSub1").value = globalRecords.reactor.subRoll1
readSelection("reactorSub2").value = globalRecords.reactor.subRoll2
userTriggers.updateReactorSelections();
userTriggers.updateSelectedAbilityBreakdown();
readSelection("auxiliary").value = globalRecords.components.auxiliary
readSelection("sensor").value = globalRecords.components.sensor
readSelection("memory").value = globalRecords.components.memory
readSelection("processor").value = globalRecords.components.processor
userTriggers.updateComponentSelections();

readSelection("character").value = globalRecords.character.currentCharacter;
userTriggers.updateSelectedCharacter();