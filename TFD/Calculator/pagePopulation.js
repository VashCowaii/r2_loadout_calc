//Shorthand for selecting an element by ID. Follow up with .value or .innerHTML, etc.
function readSelection(elemID) {return document.getElementById(elemID);}

for (let i=1;i<=12;i++) {
    let boxType = null;
    if (i===1) {boxType = "trans"}
    else if (i===2) {boxType = "sub"}
    let typeString = "modSlotBoxHolder"
    switch (boxType) {
        case "trans": typeString = "modSlotBoxHolderTrans";break;
        case "sub": typeString = "modSlotBoxHolderSub";break;
    }
    readSelection("basicsBoxModsHolder").innerHTML += createHTML.modSlotBox(i,typeString);
}

for (let i=21;i<=30;i++) {
    let typeString = "modSlotBoxHolder";
    readSelection("basicsBoxWeaponModsHolder").innerHTML += createHTML.modSlotBox(i,typeString);
}


const userTriggers = {
    toggleDisplayMode() {
        const toggle = readSelection("displayModeToggle").checked;//true is weapon, false is character
        const characterDisplay = toggle ? "none" : "flex";
        const weaponDisplay = toggle ? "flex" : "none";

        readSelection("centerAbilityImageRow").style.display = characterDisplay;
        readSelection("centerAbilityBreakdownTabHolders").style.display = characterDisplay;
        readSelection("basicsBoxModsHolder").style.display = characterDisplay;
        readSelection("descendantGearBoxHolder").style.display = characterDisplay;

        readSelection("basicsBoxWeaponModsHolder").style.display = weaponDisplay;
        readSelection("descendantWeaponBoxHolder").style.display = weaponDisplay;
        readSelection("weaponBreakdownTabHolders").style.display = weaponDisplay;

        if (characterDisplay === "none") {userTriggers.updateSelectedFocus('characterWeaponBreakdownTab');}
        else {userTriggers.updateSelectedFocus('characterBreakdownTab');}
        
    },
    updateGeneralSettings() {
        globalRecords.weaponCritCeiling = readSelection("weaponCritCeiling").value;
        globalRecords.skillCritCeiling = readSelection("skillCritCeiling").value;
        globalRecords.ambushImmobileSlider = readSelection("ambushImmobileSlider").value;

        globalRecords.useWeakspots = readSelection("useWeakspots").checked;
        globalRecords.useCrits = readSelection("useCrits").checked;
        globalRecords.useFirearmPhysical = readSelection("useFirearmPhysical").checked;

        readSelection("ambushImmobileSliderDisplay").innerHTML = globalRecords.ambushImmobileSlider + "%";
        modData["Dangerous Ambush (Immobile)"].stats.PowerRatioBase = 0.498 * (+globalRecords.ambushImmobileSlider/100)

        readSelection("weaponCritCeilingDisplay").innerHTML = globalRecords.weaponCritCeiling + "%";
        readSelection("skillCritCeilingDisplay").innerHTML = globalRecords.skillCritCeiling + "%";
        updateFormulas();
    },
    updateSelectedFocus(elementID) {
        const list = [
            "characterBreakdownTab",
            "reactorBreakdownTab",
            "auxiliaryBreakdownTab",
            "sensorBreakdownTab",
            "memoryBreakdownTab",
            "processorBreakdownTab",

            "characterWeaponBreakdownTab",

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

            "mod21BreakdownTab",
            "mod22BreakdownTab",
            "mod23BreakdownTab",
            "mod24BreakdownTab",
            "mod25BreakdownTab",
            "mod26BreakdownTab",
            "mod27BreakdownTab",
            "mod28BreakdownTab",
            "mod29BreakdownTab",
            "mod30BreakdownTab",
        ]
        for (let name of list) {
            readSelection(name).style.display = "none";
        }
        readSelection(elementID).style.display = "flex";
    },
    updateSelectedCharacter(isImportedValue) {
        //clear invalid inputs
        let selectedCharacter = "";
        if (isImportedValue) {
            if (!characters[globalRecords.character.currentCharacter]) {globalRecords.character.currentCharacter = ""}
            selectedCharacter = globalRecords.character.currentCharacter;
            readSelection("character").value = selectedCharacter;
        }
        else {
            if (!characters[readSelection("character").value]) {readSelection("character").value = ""}
            selectedCharacter = readSelection("character").value;
        }
        
        //If the character is actually different, then update the possible augment mod selections so people don't create errors.
        //Also clear the currently selected augment so it doesn't fuck with the new character's math and ability array
        if (selectedCharacter != globalRecords.character.currentCharacter) {
            globalRecords.character.abilityArray = [0,0,0,0,0];
            readSelection("mod1").value = "";
            //set parent to true, and parentIsCharacterUpdate to true, so we don't get infinite recursion here
            userTriggers.updateSelectedMod("1",true,true);
            const augDisplayList = document.getElementById('mod1List');
            augDisplayList.innerHTML = '';

            const augArrayList = Object.keys(augments);
            for (let entry of augArrayList) {
                if (augments[entry].category.includes(selectedCharacter)){
                    const optionElement = document.createElement('option');
                    optionElement.value = entry;
                    augDisplayList.appendChild(optionElement);
                }
            }

            globalRecords.character.currentCharacter = selectedCharacter;
            updateFormulas();
            if (globalRecords.character.currentCharacter != "") {settings.updateCharacterSettings(globalRecords.character.currentCharacter,true);}
        }

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
    "weaponTypeModList": {
        "HighPowered": highPowerRounds,
        "Impact": impactRounds,
        "Special": specialRounds,
        // "General": generalRounds
    },
    updateSelectedWeapon(parentCall,isImportedValue) {
        let currentWeapon = readSelection("characterWeapon");
        const weaponRef = globalRecords.weapon;
        if (!sniperList[currentWeapon.value]) {currentWeapon.value = "";}

        //If the character is actually different, then update the possible augment mod selections so people don't create errors.
        //Also clear the currently selected augment so it doesn't fuck with the new character's math and ability array

        if (sniperList[currentWeapon.value].ammoType != sniperList[weaponRef.currentWeapon].ammoType) {
            if (!isImportedValue) {weaponRef.currentWeapon = currentWeapon.value;}
            else {currentWeapon.value = weaponRef.currentWeapon}

            const ammoTypeModList = userTriggers.weaponTypeModList[sniperList[currentWeapon.value].ammoType];

            console.log("inner reached")
            for (let i=21;i<=30;i++) {
                readSelection(`mod${i}`).value = "";

                //set parent to true, and parentIsCharacterUpdate to true, so we don't get infinite recursion here
                userTriggers.updateSelectedMod(`${i}`,true,true);
                const augDisplayList = document.getElementById(`mod${i}List`);
                augDisplayList.innerHTML = '';

                pagePopulation.populateGear(`mod${i}List`,ammoTypeModList);

            }
        }
        else {
            if (!isImportedValue) {weaponRef.currentWeapon = currentWeapon.value;}
            else {currentWeapon.value = weaponRef.currentWeapon}
        }

        const currentWeaponImage = sniperList[currentWeapon.value].image;
        weaponRef.currentWeaponType = sniperList[currentWeapon.value].weaponType;

        readSelection("characterWeaponBreakdownIcon").src = currentWeaponImage;
        readSelection("buttonsCharacterWeaponIcon").src = currentWeaponImage;

        if (!weaponSubstatList[readSelection("weaponSub1").value]) {readSelection("weaponSub1").value = ""};
        if (!weaponSubstatList[readSelection("weaponSub2").value]) {readSelection("weaponSub2").value = ""};
        if (!weaponSubstatList[readSelection("weaponSub3").value]) {readSelection("weaponSub3").value = ""};
        if (!weaponSubstatList[readSelection("weaponSub4").value]) {readSelection("weaponSub4").value = ""};

        if (!isImportedValue) {
            weaponRef.subRoll1 = readSelection("weaponSub1").value;
            weaponRef.subRoll2 = readSelection("weaponSub2").value;
            weaponRef.subRoll3 = readSelection("weaponSub3").value;
            weaponRef.subRoll4 = readSelection("weaponSub4").value;
        }
        else {
            readSelection("weaponSub1").value = weaponRef.subRoll1
            readSelection("weaponSub2").value = weaponRef.subRoll2
            readSelection("weaponSub3").value = weaponRef.subRoll3
            readSelection("weaponSub4").value = weaponRef.subRoll4
        }

        const sub1Value = readSelection("weaponSub1Value");
        const sub2Value = readSelection("weaponSub2Value");
        const sub3Value = readSelection("weaponSub3Value");
        const sub4Value = readSelection("weaponSub4Value");

        if (weaponRef.subRoll1Value === 0) {sub1Value.value = 10000000;}
        if (weaponRef.subRoll2Value === 0) {sub2Value.value = 10000000;}
        if (weaponRef.subRoll3Value === 0) {sub3Value.value = 10000000;}
        if (weaponRef.subRoll4Value === 0) {sub4Value.value = 10000000;}

        const roll1Min = weaponSubstatList[weaponRef.subRoll1][weaponRef.currentWeaponType][0];
        const roll1Max = weaponSubstatList[weaponRef.subRoll1][weaponRef.currentWeaponType][1];
        const roll2Min = weaponSubstatList[weaponRef.subRoll2][weaponRef.currentWeaponType][0];
        const roll2Max = weaponSubstatList[weaponRef.subRoll2][weaponRef.currentWeaponType][1];
        const roll3Min = weaponSubstatList[weaponRef.subRoll3][weaponRef.currentWeaponType][0];
        const roll3Max = weaponSubstatList[weaponRef.subRoll3][weaponRef.currentWeaponType][1];
        const roll4Min = weaponSubstatList[weaponRef.subRoll4][weaponRef.currentWeaponType][0];
        const roll4Max = weaponSubstatList[weaponRef.subRoll4][weaponRef.currentWeaponType][1];

        sub1Value.min = roll1Min;
        sub1Value.max = roll1Max;
        sub2Value.min = roll2Min;
        sub2Value.max = roll2Max;
        sub3Value.min = roll3Min;
        sub3Value.max = roll3Max;
        sub4Value.min = roll4Min;
        sub4Value.max = roll4Max;

        if (!isImportedValue) {
            sub1Value.value = Math.max(Math.min(+sub1Value.value,roll1Max),roll1Min);
            sub2Value.value = Math.max(Math.min(+sub2Value.value,roll2Max),roll2Min);
            sub3Value.value = Math.max(Math.min(+sub3Value.value,roll3Max),roll3Min);
            sub4Value.value = Math.max(Math.min(+sub4Value.value,roll4Max),roll4Min);
        }
        else {
            sub1Value.value = Math.max(Math.min(+weaponRef.subRoll1Value,roll1Max),roll1Min);
            sub2Value.value = Math.max(Math.min(+weaponRef.subRoll2Value,roll2Max),roll2Min);
            sub3Value.value = Math.max(Math.min(+weaponRef.subRoll3Value,roll3Max),roll3Min);
            sub4Value.value = Math.max(Math.min(+weaponRef.subRoll4Value,roll4Max),roll4Min);
        }

        weaponRef.subRoll1Value = +sub1Value.value;
        weaponRef.subRoll2Value = +sub2Value.value;
        weaponRef.subRoll3Value = +sub3Value.value;
        weaponRef.subRoll4Value = +sub4Value.value;

        // characterWeaponBreakdownIcon
        // buttonsCharacterWeaponIcon
        //characterWeapon
        if (!parentCall) {updateFormulas();}
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
        if (globalRecords.character.currentCharacter != "") {settings.updateCharacterSettings(globalRecords.character.currentCharacter,true);}

        updateFormulas();
    },
    updateReactorSelections(list,iconID,valueToAssign,isImportedValue) {
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
        if (readSelection("reactorSub1").value === readSelection("reactorSub2").value && readSelection("reactorSub1").value != "") {readSelection("reactorSub2").value = "";}
        if (!reactorSubRolls[readSelection("reactorSub1").value]) {readSelection("reactorSub1").value = "";}
        if (!reactorSubRolls[readSelection("reactorSub2").value]) {readSelection("reactorSub2").value = "";}


        const sub1Value = readSelection("reactorSub1Value");
        const sub2Value = readSelection("reactorSub2Value");

        //if the recorded value in settings is 0, or if we're changing the stat type, assume a max value(we're putting in a value that will be capped to the max)
        if (globalRef.subRoll1Value === 0 || globalRef.subRoll1 != readSelection("reactorSub1").value) {
            sub1Value.value = 10000000;
        }
        if (globalRef.subRoll2Value === 0 || globalRef.subRoll2 != readSelection("reactorSub2").value) {
            sub2Value.value = 10000000;
        }
        
        if (!isImportedValue) {
            globalRef.subRoll1 = readSelection("reactorSub1").value;
            globalRef.subRoll2 = readSelection("reactorSub2").value;
        }
        else {
            readSelection("reactorSub1").value = globalRef.subRoll1;
            readSelection("reactorSub2").value = globalRef.subRoll2;
            sub1Value.value = globalRef.subRoll1Value;
            sub2Value.value = globalRef.subRoll2Value;
        }


        if (reactorSubRolls[globalRef.subRoll1].minimum > 0) {
            //set the min/max values the user will be able to work with, based on the min and max of the actual substat roll
            sub1Value.min = reactorSubRolls[globalRef.subRoll1].minimum;
            sub1Value.max = reactorSubRolls[globalRef.subRoll1].maximum;
            //bind the values to the range of the given stat, needs to be capped even with a min/max specified from before, as this value can seemingly bypass the restrictions when set in code
            sub1Value.value = Math.max(Math.min(+sub1Value.value,reactorSubRolls[globalRef.subRoll1].maximum),reactorSubRolls[globalRef.subRoll1].minimum);
        }
        else {
            sub1Value.min = reactorSubRolls[globalRef.subRoll1].maximum;
            sub1Value.max = reactorSubRolls[globalRef.subRoll1].minimum;
            sub1Value.value = Math.max(Math.min(+sub1Value.value,reactorSubRolls[globalRef.subRoll1].minimum),reactorSubRolls[globalRef.subRoll1].maximum);
        }
        if (reactorSubRolls[globalRef.subRoll2].minimum > 0) {
            sub2Value.min = reactorSubRolls[globalRef.subRoll2].minimum;
            sub2Value.max = reactorSubRolls[globalRef.subRoll2].maximum;
            sub2Value.value = Math.max(Math.min(+sub2Value.value,reactorSubRolls[globalRef.subRoll2].maximum),reactorSubRolls[globalRef.subRoll2].minimum);
        }
        else {
            sub2Value.min = reactorSubRolls[globalRef.subRoll2].maximum;
            sub2Value.max = reactorSubRolls[globalRef.subRoll2].minimum;
            sub2Value.value = Math.max(Math.min(+sub2Value.value,reactorSubRolls[globalRef.subRoll2].minimum),reactorSubRolls[globalRef.subRoll2].maximum);
        }

        globalRef.subRoll1Value = +sub1Value.value;
        globalRef.subRoll2Value = +sub2Value.value;

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

        const auxiliarySub1Value = readSelection("auxiliarySub1Value");
        const auxiliarySub2Value = readSelection("auxiliarySub2Value");
        if (!auxiliaryRolls[readSelection("auxiliarySub1").value]) {readSelection("auxiliarySub1").value = "";}
        if (!auxiliaryRolls[readSelection("auxiliarySub2").value]) {readSelection("auxiliarySub2").value = "";}
        const sensorSub1Value = readSelection("sensorSub1Value");
        const sensorSub2Value = readSelection("sensorSub2Value");
        if (!sensorRolls[readSelection("sensorSub1").value]) {readSelection("sensorSub1").value = "";}
        if (!sensorRolls[readSelection("sensorSub2").value]) {readSelection("sensorSub2").value = "";}
        const memorySub1Value = readSelection("memorySub1Value");
        const memorySub2Value = readSelection("memorySub2Value");
        if (!memoryRolls[readSelection("memorySub1").value]) {readSelection("memorySub1").value = "";}
        if (!memoryRolls[readSelection("memorySub2").value]) {readSelection("memorySub2").value = "";}
        const processorSub1Value = readSelection("processorSub1Value");
        const processorSub2Value = readSelection("processorSub2Value");
        if (!processorRolls[readSelection("processorSub1").value]) {readSelection("processorSub1").value = "";}
        if (!processorRolls[readSelection("processorSub2").value]) {readSelection("processorSub2").value = "";}

        if (globalRef.auxiliarySub1Value === 0 || globalRef.auxiliarySub1 != readSelection("auxiliarySub1").value) {auxiliarySub1Value.value = 10000000;}
        if (globalRef.auxiliarySub2Value === 0 || globalRef.auxiliarySub2 != readSelection("auxiliarySub2").value) {auxiliarySub2Value.value = 10000000;}

        if (globalRef.sensorSub1Value === 0 || globalRef.sensorSub1 != readSelection("sensorSub1").value) {sensorSub1Value.value = 10000000;}
        if (globalRef.sensorSub2Value === 0 || globalRef.sensorSub2 != readSelection("sensorSub2").value) {sensorSub2Value.value = 10000000;}

        if (globalRef.memorySub1Value === 0 || globalRef.memorySub1 != readSelection("memorySub1").value) {memorySub1Value.value = 10000000;}
        if (globalRef.memorySub2Value === 0 || globalRef.memorySub2 != readSelection("memorySub2").value) {memorySub2Value.value = 10000000;}

        if (globalRef.processorSub1Value === 0 || globalRef.processorSub1 != readSelection("processorSub1").value) {processorSub1Value.value = 10000000;}
        if (globalRef.processorSub2Value === 0 || globalRef.processorSub2 != readSelection("processorSub2").value) {processorSub2Value.value = 10000000;}

        globalRef.auxiliary = readSelection("auxiliary").value;
        globalRef.auxiliarySub1 = readSelection("auxiliarySub1").value;
        globalRef.auxiliarySub2 = readSelection("auxiliarySub2").value;
        const auxSub1Name = globalRef.auxiliarySub1;
        auxiliarySub1Value.min = auxiliaryRolls[auxSub1Name].minimum;
        auxiliarySub1Value.max = auxiliaryRolls[auxSub1Name].maximum;
        auxiliarySub1Value.value = Math.max(Math.min(+auxiliarySub1Value.value,auxiliaryRolls[auxSub1Name].maximum),auxiliaryRolls[auxSub1Name].minimum);
        const auxSub2Name = globalRef.auxiliarySub2;
        auxiliarySub2Value.min = auxiliaryRolls[auxSub2Name].minimum;
        auxiliarySub2Value.max = auxiliaryRolls[auxSub2Name].maximum;
        auxiliarySub2Value.value = Math.max(Math.min(+auxiliarySub2Value.value,auxiliaryRolls[auxSub2Name].maximum),auxiliaryRolls[auxSub2Name].minimum);
        globalRef.auxiliarySub1Value = +readSelection("auxiliarySub1Value").value;
        globalRef.auxiliarySub2Value = +readSelection("auxiliarySub2Value").value;

        globalRef.sensor = readSelection("sensor").value;
        globalRef.sensorSub1 = readSelection("sensorSub1").value;
        globalRef.sensorSub2 = readSelection("sensorSub2").value;
        const sensorSub1Name = globalRef.sensorSub1;
        sensorSub1Value.min = sensorRolls[sensorSub1Name].minimum;
        sensorSub1Value.max = sensorRolls[sensorSub1Name].maximum;
        sensorSub1Value.value = Math.max(Math.min(+sensorSub1Value.value,sensorRolls[sensorSub1Name].maximum),sensorRolls[sensorSub1Name].minimum);
        const sensorSub2Name = globalRef.sensorSub2;
        sensorSub2Value.min = sensorRolls[sensorSub2Name].minimum;
        sensorSub2Value.max = sensorRolls[sensorSub2Name].maximum;
        sensorSub2Value.value = Math.max(Math.min(+sensorSub2Value.value,sensorRolls[sensorSub2Name].maximum),sensorRolls[sensorSub2Name].minimum);
        globalRef.sensorSub1Value = +readSelection("sensorSub1Value").value;
        globalRef.sensorSub2Value = +readSelection("sensorSub2Value").value;

        globalRef.memory = readSelection("memory").value;
        globalRef.memorySub1 = readSelection("memorySub1").value;
        globalRef.memorySub2 = readSelection("memorySub2").value;
        const memorySub1Name = globalRef.memorySub1;
        memorySub1Value.min = memoryRolls[memorySub1Name].minimum;
        memorySub1Value.max = memoryRolls[memorySub1Name].maximum;
        memorySub1Value.value = Math.max(Math.min(+memorySub1Value.value,memoryRolls[memorySub1Name].maximum),memoryRolls[memorySub1Name].minimum);
        const memorySub2Name = globalRef.memorySub2;
        memorySub2Value.min = memoryRolls[memorySub2Name].minimum;
        memorySub2Value.max = memoryRolls[memorySub2Name].maximum;
        memorySub2Value.value = Math.max(Math.min(+memorySub2Value.value,memoryRolls[memorySub2Name].maximum),memoryRolls[memorySub2Name].minimum);
        globalRef.memorySub1Value = +readSelection("memorySub1Value").value;
        globalRef.memorySub2Value = +readSelection("memorySub2Value").value;

        globalRef.processor = readSelection("processor").value;
        globalRef.processorSub1 = readSelection("processorSub1").value;
        globalRef.processorSub2 = readSelection("processorSub2").value;
        const processorSub1Name = globalRef.processorSub1;
        processorSub1Value.min = processorRolls[processorSub1Name].minimum;
        processorSub1Value.max = processorRolls[processorSub1Name].maximum;
        processorSub1Value.value = Math.max(Math.min(+processorSub1Value.value,processorRolls[processorSub1Name].maximum),processorRolls[processorSub1Name].minimum);
        const processorSub2Name = globalRef.processorSub2;
        processorSub2Value.min = processorRolls[processorSub2Name].minimum;
        processorSub2Value.max = processorRolls[processorSub2Name].maximum;
        processorSub2Value.value = Math.max(Math.min(+processorSub2Value.value,processorRolls[processorSub2Name].maximum),processorRolls[processorSub2Name].minimum);
        globalRef.processorSub1Value = +readSelection("processorSub1Value").value;
        globalRef.processorSub2Value = +readSelection("processorSub2Value").value;
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
    updateSelectedMod(modSlot,parentCall,parentIsCharacterUpdate,isImportedValue) {
        let inputRef = readSelection(`mod${modSlot}`);
        // const weaponModsCategory = sniperList[globalRecords.weapon.currentWeapon].ammoType === "HighPowered" ? highPowerRounds : impactRounds;
        const weaponModsCategory = userTriggers.weaponTypeModList[sniperList[globalRecords.weapon.currentWeapon].ammoType];

        let categoryRef = null;
        if (+modSlot >= 21) {categoryRef = weaponModsCategory}//console.log("weapons reached")
        else {
            switch (modSlot) {
                case "1": categoryRef = augments;break;
                case "2": categoryRef = subAttacks;break;
                default: categoryRef = modData;break;
            }
        }
        
        //if the input is invalid or a duplicate, clear it
        if (!categoryRef[inputRef.value]) {inputRef.value = "";}
        //If this is the augment slot and the input doesn't match a mod specific to that character, then clear the input
        //these two can't be joined in one if/else, it needs to do both checks.
        if (+modSlot === 1 && !augments[inputRef.value].category.includes(globalRecords.character.currentCharacter)) {inputRef.value = "";}
        
        //also check for duplicate categories, like arche tech or support etc.
        //we only check mods 3-10 as it is impossible for mods 1 and 2 (transc and sub) to have a duplicate as only their respective slots can slot their respective mods.
        if (+modSlot >=21) {
            for (let i=0;i<=9;i++) {
                if (inputRef.value != "" && inputRef.value === globalRecords.weapon.mods[i]) {alert(`You already have ${inputRef.value} equipped, I cleared the selection to avoid a duplicate.`);inputRef.value = "";}
                else if (inputRef.value != "" && +modSlot != i+21 && weaponModsCategory[inputRef.value].category != "" && weaponModsCategory[inputRef.value].category === weaponModsCategory[globalRecords.weapon.mods[i]].category) {alert(`${weaponModsCategory[inputRef.value].category} mod already equipped [${globalRecords.weapon.mods[i]}]`);inputRef.value = "";}
            }
        }
        else if (+modSlot >=3) {
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

        //if an augment was equipped, update the ability array
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
        if (+modSlot < 21) {
            globalRecords.character.mods[+modSlot - 1] = inputRef.value;
        }
        else {
            globalRecords.weapon.mods[+modSlot - 21] = inputRef.value;
        }
        if (!parentIsCharacterUpdate) {
            userTriggers.updateSelectedCharacter();
        }



        // const characterRef = globalRecords.character;
        // const currentCharacter = characterRef.currentCharacter;
        // const currentCharacterMods = characterRef.mods;
        // const abilityArray = characterRef.abilityArray;
        // const currentAbilityBreakdown = characterRef.currentAbilityBreakdown;

        // let newModArray1 = [...currentCharacterMods];
        // let newModArray2 = [...currentCharacterMods].slice(2);//to exclude the first 2 mods, the augment and the subattack mod
        // characterRef.modQueryOptions = [...currentCharacterMods].slice(2);
        // console.log(characterRef.modQueryOptions)

        // const modKeyReference = Object.keys(modData);


        // // Array of strings that will be the option names
        // const queryLister = readSelection("queryModList");
        // queryLister.innerHTML = "";
        // // Loop through the array and create option elements
        // newModArray2.forEach(function(optionName) {
        //     const option = document.createElement("option");
        //     // option.value = optionName.toLowerCase().replace(/\s+/g, '-'); // Set a value (optional)
        //     option.textContent = optionName; // Set the display name
        //     queryLister.appendChild(option); // Append the option to the select element
        // });

        // let isValidMod = false;
        // for (let entry of newModArray2) {
        //     if (entry === readSelection("queryMod").value && entry != "") {isValidMod = true;break;}
        // }
        // if (!isValidMod) {
        //     for (let entry of newModArray2) {if (entry != "") {readSelection("queryMod").value = entry;break;}}
        // }


        if (globalRecords.character.currentCharacter != "") {settings.updateCharacterSettings(globalRecords.character.currentCharacter,true);}
        if (!parentCall) {updateFormulas();}
        
    },
    updateSelectedBoss() {
        if (!bosses[readSelection("boss").value]) {readSelection("boss").value = "None (True Damage)"}
        const critPath = bosses[readSelection("boss").value];
        const partsPath = critPath.parts;
        const partsArray = Object.keys(partsPath);

        if (globalRecords.boss.currentBoss != readSelection("boss").value) {
            readSelection(`bossPart`).value = partsArray[1];
            const partDisplayList = document.getElementById(`bossPartList`);
            partDisplayList.innerHTML = '';

            pagePopulation.populateGear(`bossPartList`,partsPath);
        }
        if (!partsPath[readSelection("bossPart").value]) {readSelection("bossPart").value = partsArray[0]}

        globalRecords.boss.currentBoss = readSelection("boss").value;
        globalRecords.boss.enemyType = critPath.enemyType,
        globalRecords.boss.currentBossPart = readSelection("bossPart").value;
        globalRecords.boss.currentBossPartType = partsPath[readSelection("bossPart").value].type;
        globalRecords.boss.currentBossPartWP = partsPath[readSelection("bossPart").value].wpMod;
        
        globalRecords.weaponCritCeiling = -critPath.gunCrit*100;
        globalRecords.skillCritCeiling = -critPath.skillCrit*100;
        readSelection("weaponCritCeiling").value = -critPath.gunCrit*100;
        readSelection("skillCritCeiling").value = -critPath.skillCrit*100;
        readSelection("weaponCritCeilingDisplay").innerHTML = -critPath.gunCrit*100 + "%";
        readSelection("skillCritCeilingDisplay").innerHTML = -critPath.skillCrit*100 + "%";



        updateFormulas();
    },
}

const pagePopulation = {
    "dataListsList": [
        {"Name": "characterList", "DataSet": characters},
        {"Name": "characterWeaponList", "DataSet": sniperList},

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

        {"Name": "mod21List", "DataSet": highPowerRounds},
        {"Name": "mod22List", "DataSet": highPowerRounds},
        {"Name": "mod23List", "DataSet": highPowerRounds},
        {"Name": "mod24List", "DataSet": highPowerRounds},
        {"Name": "mod25List", "DataSet": highPowerRounds},
        {"Name": "mod26List", "DataSet": highPowerRounds},
        {"Name": "mod27List", "DataSet": highPowerRounds},
        {"Name": "mod28List", "DataSet": highPowerRounds},
        {"Name": "mod29List", "DataSet": highPowerRounds},
        {"Name": "mod30List", "DataSet": highPowerRounds},

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

        {"Name": "weaponSub1List", "DataSet": weaponSubstatList},
        {"Name": "weaponSub2List", "DataSet": weaponSubstatList},
        {"Name": "weaponSub3List", "DataSet": weaponSubstatList},
        {"Name": "weaponSub4List", "DataSet": weaponSubstatList},

        {"Name": "bossList", "DataSet": bosses},

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

let localInsertionSettings = localCheck ? {} : customSettingsLocal;
const settings = {
    updateCharacterSettings(character,isParentCall) {
        const settingsRef = characters[character].characterSettings;
        const arrayRef = globalRecords.character.abilityArray;
        settings.customSettingsUpdates[character](settingsRef,arrayRef);
        
        if (!isParentCall) {updateFormulas();}
    },
    updateWeaponSettings(weaponName,isParentCall) {
        const settingsRef = sniperList[weaponName].weaponSettings;
        settings.customSettingsUpdates[weaponName](settingsRef);
        
        if (!isParentCall) {updateFormulas();}
    },
    "customSettingsUpdates": {
        // characterName(settingsRef,arrayRef) {
        //     if (arrayRef[0] === 0) {}//1
        //     if (arrayRef[1] === 0) {}//2
        //     if (arrayRef[2] === 0) {}//3
        //     if (arrayRef[3] === 0) {}//4
        //     if (arrayRef[4] === 0) {}//passive
        // },
        Viessa(settingsRef,arrayRef) {
            if (arrayRef[0] === 0) {}//1
            if (arrayRef[1] === 0) {}//2
            else if (arrayRef[1] === "Cold-Bloodedness") {
                settingsRef.isColdBloodedActive = readSelection("isColdBloodedActive").checked;
            }
            if (arrayRef[2] === 0) {}//3
            if (arrayRef[3] === 0) {}//4
            if (arrayRef[4] === 0) {}//passive
            else if (arrayRef[4] === "Hypothermia") {
                settingsRef.viessaIceNeedleStacks = +readSelection("viessaIceNeedleStacks").value;
            }
        },
        Jayber(settingsRef,arrayRef) {
            if (arrayRef[0] === 0) {}//1
            if (arrayRef[1] === 0) {}//2.
            if (arrayRef[2] === 0) {}//3
            if (arrayRef[3] === 0) {}//4
            if (arrayRef[4] === 0) {
                settingsRef.jayberTurretSyncActive = readSelection("jayberTurretSyncActive").checked
            }//passive
        },
        Freyna(settingsRef,arrayRef) {
            if (arrayRef[0] === 0) {}//1
            if (arrayRef[1] != "Venom Injection") {
                //this is universal to all her augments right now besides injection, so it doesn't need a specific check
                settingsRef.freynaBodyarmorBonus = readSelection("freynaBodyarmorBonus").checked;
            }//2.
            else if (arrayRef[1] === "Venom Injection") {
                settingsRef.freynaInjectionBonuses = +readSelection("freynaInjectionBonuses").value;
                // settingsRef.freynaCorrosionBonuses = readSelection("freynaCorrosionBonuses").checked;
            }
            if (arrayRef[2] === 0) {}//3
            if (arrayRef[3] === 0) {}//4
            if (arrayRef[4] === 0) {}//passive
        },
        Esiemo(settingsRef,arrayRef) {
            let totalActiveBombs = 0
            if (arrayRef[0] === 0) {
                settingsRef.timeBombStacks = +readSelection("timeBombStacks").value;
                totalActiveBombs += +readSelection("timeBombStacks").value;
            }//1
            if (arrayRef[1] === 0) {}//2
            else {settingsRef.blastStacksPowerBonus = 1;}//set the multiplier to x1 when using cluster bombs, so we don't use the bonus on accident
            if (arrayRef[2] === 0) {
                settingsRef.guidedBombStacks = +readSelection("guidedBombStacks").value;
                totalActiveBombs += +readSelection("guidedBombStacks").value;
            }//3
            else {
                settingsRef.propagandaBombStacks = +readSelection("propagandaBombStacks").value;
                totalActiveBombs += +readSelection("propagandaBombStacks").value;
            }
            if (arrayRef[3] === 0) {}//4
            settingsRef.isMadnessActive = readSelection("isMadnessActive").checked;//appicable to both, just uses the same toggle
            if (arrayRef[4] === 0) {}//passive
            else if (arrayRef[4] === "Explosive Evade") {
                settingsRef.evadeBombStacks = +readSelection("evadeBombStacks").value;
                totalActiveBombs += +readSelection("evadeBombStacks").value;
            }
            //this particular setting is used for Blast calcs only, and is just an easy way to tally up all the active bombs from all the different versions
            settingsRef.totalActiveBombs = totalActiveBombs;
        },
        Lepic(settingsRef,arrayRef) {
            if (arrayRef[0] === 0) {}//1
            //this applies to all variations of the 2nd skill now, ergo we can use it all the time
            settingsRef.lepicOverclockBonus = readSelection("lepicOverclockBonus").checked;
            if (arrayRef[1]) {}//2
            if (arrayRef[2] === 0) {}//3
            if (arrayRef[3] === 0) {
                settingsRef.lepicOverclockMPRestrictions = readSelection("lepicOverclockMPRestrictions").checked
            }//4
            if (arrayRef[4] === 0) {}//passive
            else if (arrayRef[4] === "Firearm Master") {
                settingsRef.lepicFirearmMasterBonus = readSelection("lepicFirearmMasterBonus").checked;
            }
        },
        Bunny(settingsRef,arrayRef) {
            if (arrayRef[0] === 0) {}//1
            if (arrayRef[1] === 0) {}//2
            settingsRef.bunnySoLSpeed = readSelection("bunnySoLSpeed").checked;//this applies to all augments, not just one
            if (arrayRef[2] === 0) {}//3
            settingsRef.bunnyCostRestrictions = readSelection("bunnyCostRestrictions").checked;//this applies to all augments, not just one
            if (arrayRef[3] === 0) {}//4
            else if (arrayRef[3] === "Electric Condense") {
                settingsRef.bunnyCondenseSpeed = readSelection("bunnyCondenseSpeed").checked;
            }
            if (arrayRef[4] === 0) {}//passive
            settingsRef.barPercentState = +readSelection("barPercentState").value;//this applies to all augments, not just one
        },
        Kyle(settingsRef,arrayRef) {
            if (arrayRef[0] === 0) {
                settingsRef.repulsionDEFBonus = readSelection("repulsionDEFBonus").checked;
            }//1
            if (arrayRef[1] === 0) {}//2
            if (arrayRef[2] === 0) {}//3
            if (arrayRef[3] === 0) {}//4
            if (arrayRef[4] === 0) {
                settingsRef.magForceBarState = +readSelection("magForceBarState").value;
            }//passive
        },
        Hailey(settingsRef,arrayRef) {
            if (arrayRef[0] === 0) {}//1
            if (arrayRef[1] === 0) {}//2
            if (arrayRef[2] === 0) {
                settingsRef.haileyColdFuryBar4 = +readSelection("haileyColdFuryBar4").value;
            }//3
            if (arrayRef[3] === 0) {}//4
            else if (arrayRef[3] === "Supercooled Kuiper Round") {
                settingsRef.haileySupercooledStacks = +readSelection("haileySupercooledStacks").value;
            }
            if (arrayRef[4] === 0) {
                settingsRef.haileyDistanceBar4 = +readSelection("haileyDistanceBar4").value;
            }//passive
        },
        "Secret Garden"(settingsRef,arrayRef) {
            settingsRef.gardenStackCount = +readSelection("gardenStackCount").value
        },
        "Blue Beetle"(settingsRef,arrayRef) {
            settingsRef.arcaneWaveActive = readSelection("arcaneWaveActive").checked
        },
        "Peace Maker"(settingsRef,arrayRef) {
            settingsRef.peacemakerStackCount = +readSelection("peacemakerStackCount").value
        },
        "Nazeistra's Devotion"(settingsRef,arrayRef) {
            settingsRef.defDebuffActive = readSelection("defDebuffActive").checked
        },
        ...localInsertionSettings
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

const formulasValues = {
    pullModStats(index,modArrayOverride) {
        let modArrayRef = modArrayOverride || globalRecords.character.mods;
        let pullStats = formulasValues.pullStats;

        for (let i=2;i<=11;i++) {
            let path = modData[modArrayRef[i]].stats;
            pullStats(index,path);
        }
    },
    pullWeaponStats(index) {
        let pullStats = formulasValues.pullStats;

        //weapon mods
        let modArrayRef = globalRecords.weapon.mods;
        const weaponModsCategory = userTriggers.weaponTypeModList[sniperList[globalRecords.weapon.currentWeapon].ammoType];
        for (let i=0;i<=9;i++) {
            let path = weaponModsCategory[modArrayRef[i]].stats;
            pullStats(index,path);
        }
        //this was used when I had the stats baked into the weapon objects themselves, instead of allowing manual value input
        // modArrayRef = sniperList[globalRecords.weapon.currentWeapon].subStats;
        // pullStats(index,modArrayRef)

        const weaponRef = globalRecords.weapon;
        index[weaponSubstatList[weaponRef.subRoll1].statName] += weaponRef.subRoll1Value;
        index[weaponSubstatList[weaponRef.subRoll2].statName] += weaponRef.subRoll2Value;
        index[weaponSubstatList[weaponRef.subRoll3].statName] += weaponRef.subRoll3Value;
        index[weaponSubstatList[weaponRef.subRoll4].statName] += weaponRef.subRoll4Value;
    },
    pullReactorStats(index) {
        let reactorRef = globalRecords.reactor;
        // let pullStats = formulasValues.pullStats;

        index[reactorSubRolls[reactorRef.subRoll1].statName] += reactorRef.subRoll1Value;
        index[reactorSubRolls[reactorRef.subRoll2].statName] += reactorRef.subRoll2Value;

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

        // //pull substat data
        // const subsArray = [
        //     auxiliaryRolls[globalRef.auxiliarySub1].stats,auxiliaryRolls[globalRef.auxiliarySub2].stats,
        //     sensorRolls[globalRef.sensorSub1].stats,sensorRolls[globalRef.sensorSub2].stats,
        //     memoryRolls[globalRef.memorySub1].stats,memoryRolls[globalRef.memorySub2].stats,
        //     processorRolls[globalRef.processorSub1].stats,processorRolls[globalRef.processorSub2].stats,
        // ];
        // formulasValues.pullStatsArray(index,subsArray);

        index[globalRef.auxiliarySub1] += globalRef.auxiliarySub1Value || 0;
        index[globalRef.auxiliarySub2] += globalRef.auxiliarySub2Value || 0;

        index[globalRef.sensorSub1] += globalRef.sensorSub1Value || 0;
        index[globalRef.sensorSub2] += globalRef.sensorSub2Value || 0;

        index[globalRef.memorySub1] += globalRef.memorySub1Value || 0;
        index[globalRef.memorySub2] += globalRef.memorySub2Value || 0;

        index[globalRef.processorSub1] += globalRef.processorSub1Value || 0;
        index[globalRef.processorSub2] += globalRef.processorSub2Value || 0;

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


function updateFormulas(isCycleCalcs,modArrayOverride) {
    let tableReference = {...greatTableKnowerOfAll};//get a fresh table to work with
    const characterRef = characters[globalRecords.character.currentCharacter].baseStats
    const currentWeaponRef = sniperList[globalRecords.weapon.currentWeapon];
    const globalRef = globalRecords.character.abilities;

    formulasValues.pullModStats(tableReference,modArrayOverride);
    
    customDamage.callAbilityFunctionsTier0(tableReference,isCycleCalcs);

    formulasValues.pullReactorStats(tableReference);
    formulasValues.pullComponentStats(tableReference);
    formulasValues.pullAbilityStats(tableReference);
    formulasValues.pullWeaponStats(tableReference);

    const {baseCharacterHealth,baseHealthBonus,healthPercentBonus,totalHealth,displayHealth} = calcs.getHealth(tableReference,characterRef);
    const {baseCharacterShield,baseShieldBonus,shieldPercentBonus,totalShield,displayShield} = calcs.getShield(tableReference,characterRef);
    const {baseCharacterDEF,baseDEFBonus,DEFPercentBonus,totalDEF,displayDEF} = calcs.getDefense(tableReference,characterRef);
    const {totalFireResist,totalChillResist,totalToxinResist,totalElectricResist} = calcs.getResistance(tableReference,characterRef);
    const {baseCharacterMP,baseMPBonus,MPPercentBonus,totalMP,displayMP} = calcs.getMP(tableReference,characterRef);
    const {MPRecoveryModifier,baseCharacterMPInCombat,baseMPInCombatBonus,totalMPInCombat,baseCharacterMPOutCombat,baseMPOutCombatBonus,totalMPOutCombat,
        shieldRecoveryModifier,baseCharacterShieldInCombat,baseShieldInCombatBonus,totalShieldInCombat,baseCharacterShieldOutCombat,baseShieldOutCombatBonus,totalShieldOutCombat,
        totalHPRecoveryModifier,totalHPHealModifier} = calcs.getRecovery(tableReference,characterRef);
    const {baseCharacterCritRate,baseCharacterCritDamage,baseCritRateBonus,baseCritDamageBonus,critRatePercentBonus,critDamagePercentBonus,totalSkillCritRate,totalSkillCritDamage} = calcs.getSkillCrit(tableReference,characterRef);

    const {baseWPMulti,weakpointBonus,bossPartWPBonus,totalWPBonus} = calcs.getFirearmWeakpoint(tableReference,currentWeaponRef);
    const {baseFirearmCritRate,baseFirearmCritDamage,baseFirearmCritRateBonus,baseFirearmCritDamageBonus,firearmCritRateBonus,firearmCritDamageBonus,totalFirearmCritRate,totalFirearmCritDamage} = calcs.getFirearmCrit(tableReference,currentWeaponRef);
    const {baseFirearmATK,attackPercent,physicalTypeMulti,firearmColossusATK,firearmAttributeConversionBase,totalFirearmATK} = calcs.getFirearmATK(tableReference,currentWeaponRef);


    let returnObject = {
        baseCharacterHealth,baseHealthBonus,healthPercentBonus,totalHealth,displayHealth,
        baseCharacterShield,baseShieldBonus,shieldPercentBonus,totalShield,displayShield,
        baseCharacterDEF,baseDEFBonus,DEFPercentBonus,totalDEF,displayDEF,
        totalFireResist,totalChillResist,totalToxinResist,totalElectricResist,
        baseCharacterMP,baseMPBonus,MPPercentBonus,totalMP,displayMP,
        MPRecoveryModifier,baseCharacterMPInCombat,baseMPInCombatBonus,totalMPInCombat,baseCharacterMPOutCombat,baseMPOutCombatBonus,totalMPOutCombat,
        shieldRecoveryModifier,baseCharacterShieldInCombat,baseShieldInCombatBonus,totalShieldInCombat,baseCharacterShieldOutCombat,baseShieldOutCombatBonus,totalShieldOutCombat,
        totalHPRecoveryModifier,totalHPHealModifier,
        baseCharacterCritRate,baseCharacterCritDamage,baseCritRateBonus,baseCritDamageBonus,critRatePercentBonus,critDamagePercentBonus,totalSkillCritRate,totalSkillCritDamage,
        baseWPMulti,weakpointBonus,bossPartWPBonus,totalWPBonus,
        baseFirearmCritRate,baseFirearmCritDamage,baseFirearmCritRateBonus,baseFirearmCritDamageBonus,firearmCritRateBonus,firearmCritDamageBonus,totalFirearmCritRate,totalFirearmCritDamage,
        baseFirearmATK,attackPercent,physicalTypeMulti,firearmColossusATK,firearmAttributeConversionBase,totalFirearmATK,

    }
    returnObject = {...returnObject,...customDamage.callAbilityFunctions(tableReference,returnObject,isCycleCalcs)}

    // customDamage.callAbilityFunctions(tableReference,returnObject,isCycleCalcs);
    if (!isCycleCalcs) {
        basicsUpdates.updateMainFromFormulas(returnObject,tableReference);
        manipulateURL.updateURLparameters();
        if (globalRecords.URLImportCompleted) {moduleQueryFunctions.getModuleQueryResults();}
    }
    else {
        return {tableReference,returnObject}
    }
}












pagePopulation.pagePopulation();


let feedCheck = (new URL(document.location)).searchParams;
if (feedCheck != "") {manipulateURL.importURLparameters();}
else {
    readSelection("character").value = "Hailey"
    userTriggers.updateSelectedCharacter();
    userTriggers.updateSelectedAbilityBreakdown(4,"damageAbilityIcon4");
    readSelection("reactorSub1").value = "Singular Power Boost";
    readSelection("reactorSub2").value = "Skill ATK - Colossus";
    userTriggers.updateReactorSelections();
    readSelection("auxiliary").value = "Slayer";
    readSelection("auxiliarySub1").value = "";
    readSelection("auxiliarySub2").value = "";
    readSelection("sensor").value = "Slayer";
    readSelection("sensorSub1").value = "";
    readSelection("sensorSub2").value = "";
    readSelection("memory").value = "Slayer";
    readSelection("memorySub1").value = "";
    readSelection("memorySub2").value = "";
    readSelection("processor").value = "Slayer";
    readSelection("processorSub1").value = "";
    readSelection("processorSub2").value = "";
    userTriggers.updateComponentSelections();
    readSelection("characterWeapon").value = "";
    userTriggers.updateSelectedWeapon();
    updateFormulas();
}

userTriggers.updateSelectedBoss();
readSelection("boss").value = "Devourer";
readSelection("bossPart").value = "Shoulder";
userTriggers.updateSelectedBoss();
globalRecords.URLImportCompleted = true;
moduleQueryFunctions.getModuleQueryResults();
