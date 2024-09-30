/* ---------------------------------------------------------------------------------------- */
/* ----------------- Everything that happens when a new selection is made ----------------- */
/* ---------------------------------------------------------------------------------------- */
let userTrigger = {
    "consumableToggleStates": {
      "concoctionsToggleArray": [],
      "consumablesToggleArray": [],
    },
    //Triggers whenever a concoction or quickuse consumable is selected
    updateConsumable(type,ID,parent) {
      let selectedConsumable = readSelection(`${type}${ID}`);
      let toggleState = userTrigger.consumableToggleStates;
  
      if (!concoctions[selectedConsumable.value] && !quickUses[selectedConsumable.value]) {selectedConsumable.value = "";}//If the selection/input doesn't exist, clear it to blank.
  
      //Assign the value to the general storage, separate from the UI
      if (type === "concoction") {
        if (ID > globalRecords.greatConcoctionRecords.length) {ID = globalRecords.greatConcoctionRecords.length + 1}//If inserting into slot 4 but less slots than 3 are filled, insert it into the lowest available index slot instead, to avoid an error.
        globalRecords.greatConcoctionRecords[ID-1] = selectedConsumable.value;
        if (toggleState.concoctionsToggleArray[ID-1] === undefined) {toggleState.concoctionsToggleArray[ID-1] = (false);}
      }
      else {
        globalRecords.greatConsumableRecords[ID-1] = selectedConsumable.value;
        if (toggleState.consumablesToggleArray[ID-1] === undefined) {toggleState.consumablesToggleArray[ID-1] = (false);}
      }
  
      //Pass the selected value into duplicate checks, under the same function to repeat if swapped,
      //-using "several" handling to loop through more than 2 options, stopping the loop at the conc limit
      if (type==="concoction") {
        manipulateConsumable.updateConsumableCollection("concoction");
        userTrigger.checkDuplicateSelection(type,ID,`updateConsumable`,`several`,globalRecords.totalConcLimit);
      }
      else if (type==="quickUse") {
        manipulateConsumable.updateConsumableCollection("quickUse");
        userTrigger.checkDuplicateSelection(type,ID,`updateConsumable`,`several`,globalRecords.greatConsumableRecords.length);
      }
      if (!parent) {
        updateFormulas();
        basicsUpdates.updateFocus(`${type}${ID}Tab`,`${type}${ID}`);
      }
    },
    updateConsumableToggle(elemID,arrayType) {
      let toggleState = userTrigger.consumableToggleStates;
      if (toggleState[arrayType][elemID]) {toggleState[arrayType][elemID] = false}
      else {toggleState[arrayType][elemID] = true;}
    },
    //Triggers whenever a new weapon is selected
    updateWeapon(type,parent) {
      let selectedWeapon = readSelection(type);
      let weaponObjectReference = weapons[type][selectedWeapon.value];
  
      selectedWeapon.value = !weaponObjectReference ? "" : selectedWeapon.value;//Clear selection if it doesn't exist in tables.
      //Update 
      globalRecords.weapons[type] = selectedWeapon.value;
      //Update accessory image, description, and then refresh formulas.
      readSelection(`${type}Image`).src=weaponObjectReference.image;
      readSelection(`${type}ImageMAIN`).src=weaponObjectReference.image;
      readSelection(`${type}Description`).innerHTML=userTrigger.updateSubstatColor(weaponObjectReference.desc);

      function insertWeaponDisplayStats(elemID,displayArray) {
        readSelection(elemID).innerHTML = ""
        for (let entry of displayArray) {
          if (entry.rowType === "DamageHeader") {readSelection(elemID).innerHTML += `<div>${entry.value}</div>`}
          else {
            readSelection(elemID).innerHTML += `
            <div class="weaponRowContainer">
              <span class="weaponStat">${entry.rowType}:</span><span class="rowTraceLine"></span><span class="weaponValue">${entry.value}</span>
            </div>`
          }
        }
      }
  
      if (type==="melee") {
        const meleeDisplayStats = [
          {rowType: "DamageHeader",value: weaponObjectReference.DMG},
          {rowType: "Crit Chance",value: (weaponObjectReference.critChance*100).toFixed(2)+"%"},
          {rowType: "Weakspot",value: (weaponObjectReference.weakSpot*100).toFixed(2)+"%"},
          {rowType: "Stagger",value: (weaponObjectReference.stagger*100).toFixed(2)+"%"},
          {rowType: "Class",value: weaponObjectReference.weaponClass},
        ];
        insertWeaponDisplayStats("meleeDisplayStatsRows",meleeDisplayStats);
  
        readSelection("meleeModBox").style.display = weaponObjectReference.builtIN ? "flex" : "none";
        readSelection("meleeMod").innerHTML = weaponObjectReference.builtIN || "";
        readSelection("meleeModImage").src = weaponObjectReference.builtIN ? builtInMelee[weaponObjectReference.builtIN].image : "";
        readSelection("meleeModMAIN").innerHTML = weaponObjectReference.builtIN || "";
        readSelection("meleeModDesc").innerHTML = weaponObjectReference.builtIN ? userTrigger.updateSubstatColor(builtInMelee[weaponObjectReference.builtIN].desc) : "";
      }
      else if (type==="primary") {
        let path = readSelection("rangedMod1");
        const selector = readSelection("rangedMod1List");
        const entries = selector.querySelectorAll('option');

        const primaryDisplayStats = [
          {rowType: "DamageHeader",value: weaponObjectReference.DMG},
          {rowType: "RPS",value: weaponObjectReference.RPS.toFixed(2)},
          {rowType: "Magazine",value: weaponObjectReference.magazine.toFixed(0)},
          {rowType: "Range",value: weaponObjectReference.ideal.toFixed(2)},
          {rowType: "Falloff",value: weaponObjectReference.falloff.toFixed(2)},
          {rowType: "Reserves",value: weaponObjectReference.reserves.toFixed(0)},
          {rowType: "Crit Chance",value: (weaponObjectReference.critChance*100).toFixed(2)+"%"},
          {rowType: "Weak Spot",value: (weaponObjectReference.weakspot*100).toFixed(2)+"%"},
          {rowType: "Stagger",value: (weaponObjectReference.stagger*100).toFixed(2)+"%"},
        ];
        insertWeaponDisplayStats("primaryWeaponStats",primaryDisplayStats);
  
        readSelection("primaryModBox").style.display = "flex";
        readSelection("primaryMutatorBox").style.display = "flex";
        readSelection("primaryAttachmentsMAIN").style.display = "flex";
  
        if (weaponObjectReference.builtIN) {
          if (entries.length > Object.keys(rangedMods).length) {
            //-2 on the index bc the mods will never stack up with more than 2 custom values in a select element at once
            for (let i=Object.keys(rangedMods).length - 2; i<=entries.length; i++) {
              if (builtInPrimary[entries[i].innerHTML]) {
                entries[i].remove();
                break;
              }
            }
          }
          //Add the built-in mod to the dropdown so it can be assigned to .value
          const option = document.createElement("option");
          option.text = weaponObjectReference.builtIN;
          selector.appendChild(option);
          //-----------------------------------------------
          readSelection("rangedMod1").disabled = true;
          //Assign the value to the general storage
          globalRecords.weapons.primaryMod = weaponObjectReference.builtIN;
          readSelection("rangedMod1").value = weaponObjectReference.builtIN;
          readSelection("primaryModMAIN").innerHTML = weaponObjectReference.builtIN;
          readSelection("primaryModImage").src = builtInPrimary[weaponObjectReference.builtIN].image;
          readSelection("primaryModDesc").innerHTML = userTrigger.updateSubstatColor(builtInPrimary[weaponObjectReference.builtIN].desc);
        }
        else {
          path.disabled = false;
          if (entries.length > Object.keys(rangedMods).length) {
            for (let i=Object.keys(rangedMods).length - 2; i<=entries.length; i++) {
              if (builtInPrimary[entries[i].innerHTML]) {
                entries[i].remove();
                break;
              }
            }
            path.value = "";
            readSelection(`primaryModDesc`).innerHTML=mods.primaryMods[""].desc;
            readSelection("primaryModMAIN").innerHTML = "";
            readSelection(`primaryModImage`).src=mods.primaryMods[""].image;
            userTrigger.updateMod("rangedMod","1",true);
          }
  
          if (selectedWeapon.value === "Rusty Lever Action") {
            path.value = "";
            readSelection("primaryModMAIN").innerHTML = "";
            readSelection("primaryMutatorMAIN").innerHTML = "";
            readSelection("primaryAttachmentsMAIN").style.display = "none";
            readSelection("primaryModBox").style.display = "none";
            readSelection("primaryMutatorBox").style.display = "none";
  
            userTrigger.updateMod("rangedMod","1",true);
            readSelection("rangedMutator1").value = "";
            userTrigger.updateMutator('rangedMutator','1',true)
          }
        }
      }
      else if (type==="secondary") {
        let path = readSelection("rangedMod2");
        const selector = readSelection("rangedMod2List");
        const entries = selector.querySelectorAll('option');

        const secondaryDisplayStats = [
          {rowType: "DamageHeader",value: weaponObjectReference.DMG},
          {rowType: "RPS",value: weaponObjectReference.RPS.toFixed(2)},
          {rowType: "Magazine",value: weaponObjectReference.magazine.toFixed(0)},
          {rowType: "Range",value: weaponObjectReference.ideal.toFixed(2)},
          {rowType: "Falloff",value: weaponObjectReference.falloff.toFixed(2)},
          {rowType: "Reserves",value: weaponObjectReference.reserves.toFixed(0)},
          {rowType: "Crit Chance",value: (weaponObjectReference.critChance*100).toFixed(2)+"%"},
          {rowType: "Weak Spot",value: (weaponObjectReference.weakspot*100).toFixed(2)+"%"},
          {rowType: "Stagger",value: (weaponObjectReference.stagger*100).toFixed(2)+"%"},
        ];
        insertWeaponDisplayStats("secondaryWeaponStats",secondaryDisplayStats);
  
        readSelection("secondaryModBox").style.display = "flex";
        readSelection("secondaryMutatorBox").style.display = "flex";
        readSelection("secondaryAttachmentsMAIN").style.display = "flex";
  
        if (weaponObjectReference.builtIN) {
          if (entries.length > Object.keys(rangedMods).length) {
            //-2 on the index bc the mods will never stack up with more than 2 custom values in a select element at once
            for (let i=Object.keys(rangedMods).length - 2; i<=entries.length; i++) {
              if (builtInSecondary[entries[i].innerHTML]) {
                entries[i].remove();
                break;
              }
            }
          }
          //Add the built-in mod to the dropdown so it can be assigned to .value
          // const selector = readSelection("rangedMod2List");
          const option = document.createElement("option");
          option.text = weaponObjectReference.builtIN;
          selector.appendChild(option);
          //-----------------------------------------------
          readSelection("rangedMod2").disabled = true;
          //Assign the value to the general storage
          globalRecords.weapons.secondaryMod = weaponObjectReference.builtIN;
          readSelection("rangedMod2").value = weaponObjectReference.builtIN;
          readSelection("secondaryModMAIN").innerHTML = weaponObjectReference.builtIN;
          readSelection("secondaryModImage").src = builtInSecondary[weaponObjectReference.builtIN].image;
          readSelection("secondaryModDesc").innerHTML = userTrigger.updateSubstatColor(builtInSecondary[weaponObjectReference.builtIN].desc);
        }
        else {
          path.disabled = false;
          if (entries.length > Object.keys(rangedMods).length) {
            for (let i=Object.keys(rangedMods).length - 2; i<=entries.length; i++) {
              if (builtInSecondary[entries[i].innerHTML]) {
                entries[i].remove();
                break;
              }
            }
            path.value = "";
            readSelection(`secondaryModDesc`).innerHTML=mods.secondaryMods[""].desc;
            readSelection("secondaryModMAIN").innerHTML = "";
            readSelection(`secondaryModImage`).src=mods.secondaryMods[""].image;
            userTrigger.updateMod("rangedMod","2",true);
          }
          if (selectedWeapon.value === "Rusty Repeater") {
            path.value = "";
            readSelection("secondaryModMAIN").innerHTML = "";
            readSelection("secondaryMutatorMAIN").innerHTML = "";
            readSelection("secondaryAttachmentsMAIN").style.display = "none"
  
            readSelection("secondaryModBox").style.display = "none";
            readSelection("secondaryMutatorBox").style.display = "none";
  
            userTrigger.updateMod("rangedMod","2",true);
            readSelection("rangedMutator2").value = "";
            userTrigger.updateMutator('rangedMutator','2',true)
          }
        }
      }
      if (!parent) {updateFormulas();}
    },
    //Triggers whenever a new mutator is selected
    updateMutator(type,value,parent) {
      let collection = 'melee';
      let modifier = ``;
      if (value===`1`) {collection = 'primary';modifier=value}
      else if (value===`2`) {collection = `secondary`;modifier=value}
      let selectedMutator = readSelection(`${type}${modifier}`);
      let mutatorStatRef = mutators[`${collection}Mutators`][selectedMutator.value];
      selectedMutator.value = !mutatorStatRef ? "" : selectedMutator.value;//clear invalid selections.
  
      //Assign the value to the general storage
      globalRecords.weapons[`${collection}Mutator`] = selectedMutator.value;
      readSelection(`${type}${modifier}Image`).src = mutatorStatRef.image;
      readSelection(`${collection}MutatorMAIN`).innerHTML = selectedMutator.value;
      //Update accessory image, description, and then refresh formulas.
      readSelection(`${collection}MutatorDesc`).innerHTML = userTrigger.updateSubstatColor(mutatorStatRef.desc);
      if (type==="rangedMutator") {userTrigger.checkDuplicateSelection(type,value,`updateMutator`,`duo`);}//Melee obv needs no dupe checks. ranged1 is primary, ranged2 secondary.
      if (!parent) {updateFormulas();}
    },
    //Triggers whenever a new mod is selected
    updateMod(type,value,parent) {
      let collection = 'melee';
      let modifier = ``;
      if (value===`1`) {collection = 'primary';modifier=value}
      else if (value===`2`) {collection = `secondary`;modifier=value}
      let selectedMod = readSelection(`${type}${modifier}`);
      let builtIN = weapons[collection][readSelection(collection).value].builtIN;
      //Update accessory image, description, and then refresh formulas.
      if (builtIN === "" || builtIN === undefined) {
        let modStatsRef = mods[`${collection}Mods`][selectedMod.value];
        selectedMod.value = !modStatsRef ? "" : selectedMod.value;//clear invalid selections.
  
        //Assign the value to the general storage
        globalRecords.weapons[`${collection}Mod`] = selectedMod.value;
        readSelection(`${collection}ModMAIN`).innerHTML = selectedMod.value;
        readSelection(`${collection}ModDesc`).innerHTML=userTrigger.updateSubstatColor(modStatsRef.desc);
        readSelection(`${collection}ModImage`).src=modStatsRef.image;
        if (type==="rangedMod") {userTrigger.checkDuplicateSelection(type,value,`updateMod`,`duo`);}//Melee obv needs no dupe checks. ranged1 is primary, ranged2 secondary.
      }
      if (!parent) {updateFormulas();}
    },
    //Update armor related information
    updateArmor(armorPiece,parent) {
      elem_ID = armorPiece + "Choice";
      json_ID = armorPiece + "s"
      let selectedValue = readSelection(elem_ID);
      let selectedArmor = armor[json_ID][selectedValue.value];
      selectedValue.value = !selectedArmor ? "" : selectedValue.value;//clear invalid selections
      globalRecords.armor[armorPiece] = selectedValue.value;
      //assign new image path to the img tag src
      readSelection(`${armorPiece}Image`).src=selectedArmor.image;
      readSelection(`${armorPiece}MAIN`).src=selectedArmor.image;
      readSelection(`${armorPiece}Armor`).innerHTML=selectedArmor.stats.Armor || 0;
      readSelection(`${armorPiece}Weight`).innerHTML=selectedArmor.stats.Encumbrance || 0;
      if (!parent) {updateFormulas();}
    },
    //Triggers whenever a new amu/ring/relic is selected
    updateAccessory(type,place,parent) {
      let jsonID = `${type}s`;
      let modifier = place ?? "";
      let resultString = `${type}${modifier}`
      let selectedValue = readSelection(resultString);
      let gearStatsRef = gear[jsonID][selectedValue.value];
      selectedValue.value = !gearStatsRef ? "" : selectedValue.value;//clear invalid selections.
      //Update accessory image, description, and then refresh formulas.
      readSelection(`${resultString}Image`).src=gearStatsRef.image;
      readSelection(`${resultString}MAIN`).src=gearStatsRef.image;
      readSelection(`${resultString}Desc`).innerHTML=userTrigger.updateSubstatColor(gearStatsRef.desc);
      if (type==="ring") {userTrigger.checkDuplicateSelection(type,place,`updateAccessory`,`several`,4);}
      globalRecords.accessories[resultString] = selectedValue.value;
      if (!parent) {updateFormulas();}
    },
    //Triggers whenever a new fragment is selected
    updateFragment(elem,ID,parent) {
      // userTrigger.updateFragment('fragment','1')
      userTrigger.checkDuplicateSelection(elem,ID,`updateFragment`,`several`,3);
      let selectedValue = readSelection(`PrismRow${ID}`);
      selectedValue.value = !gear.fragments[selectedValue.value] ? "" : selectedValue.value;//clear invalid selections.
      let fragmentName = selectedValue.value;
      globalRecords.prism[`PrismRow${ID}`] = fragmentName
  
      let fragDescription = fragments[fragmentName].desc
      let levelValue = fragments[fragmentName].value;
      if (fragDescription.includes("%")) {levelValue *= 100;}
      let adjustedDescription = fragDescription.replace("VALUE1.1",levelValue.toFixed(2));
  
      tooltipStorage[`PrismRow${ID}`] = adjustedDescription.replace("VALUE1.1",levelValue.toFixed(2));
  
      if (!parent) {updateFormulas();}
    },
    //Triggers whenever a given archetype has a new selection.
    //By default, will call updateTraitCollection and updateAbility, as they are necessary.
    updateArchetype(archetype,value,parent) {
      let overArchetype = `${archetype}${value}`
      let selectedArchetype = readSelection(overArchetype).value;
      let classStatsRef = classInfo[selectedArchetype];
      //Update archetype icon
      readSelection(`${overArchetype}Icon`).src=classStatsRef.classIcon;
      readSelection(`${overArchetype}MAIN`).src=classStatsRef.classIcon;
      let axis = value === "1" ? "225deg" : "135deg";
      readSelection(`${overArchetype}MAINbg`).style.background = `linear-gradient(${axis}, ${classStatsRef.gradient[0]}, ${classStatsRef.gradient[1]},black)`;//update banner gradients
  
      //Clear abilities left in the dropdown, if any were there
      readSelection(`${overArchetype}abilityList`).innerHTML="";
      readSelection(`${overArchetype}ability`).value="";
      
      createHTML.populateGear(`${overArchetype}abilityList`,classStatsRef.abilities);//Populate ability list based on selected archetype
      userTrigger.updateAbility(overArchetype,true);//Populate info on first ability that populates selection by default. Also assigns selected class and ability to global records
      //Populate passive name and descriptions
      let classPassivePath = classStatsRef.passives;
      for (let i=1;i<=4;i++) {
        let passiveNumber = `passive${i}`;
        readSelection(`${overArchetype}${passiveNumber}`).innerHTML = classPassivePath[passiveNumber].name;
        readSelection(`${overArchetype}${passiveNumber}desc`).innerHTML = userTrigger.updateSubstatColor(classPassivePath[passiveNumber].desc);
      }
      manipulateTrait.updateTraitCollection(globalRecords.archetype1Old,globalRecords.archetype2Old);//Update traits based on class selection
      userTrigger.checkDuplicateSelection(archetype,value,`updateArchetype`,`duo`);//Check if this selection was a duplicate, and if it was, swap places with the old info.
      readSelection("comboTitle").innerHTML = archetypeCombos.getTitleCombo(readSelection("archetype1").value,readSelection("archetype2").value);//Concatenates the two selected class placementID's, uses resulting string to search comboTitle
      if (!parent) {updateFormulas();}//In closing, update all formulas
    },
    updateArchetypeQuery(archetype,value,parent) {
      let overArchetype = `${archetype}${value}`
      let selectedArchetype = readSelection(overArchetype).value;
      let classStatsRef = classInfo[selectedArchetype];
      
      readSelection(`${overArchetype}MAIN`).src=classStatsRef.classIcon;//Update archetype icon
      let axis = value === "1" ? "225deg" : "135deg";
      readSelection(`${overArchetype}MAINbg`).style.background = `linear-gradient(${axis}, ${classStatsRef.gradient[0]}, ${classStatsRef.gradient[1]},black)`;//update banner gradients
  
      //Clear abilities left in the dropdown, if any were there
      readSelection(`${overArchetype}abilityList`).innerHTML="";
      readSelection(`${overArchetype}ability`).value="";
      
      createHTML.populateGear(`${overArchetype}abilityList`,classStatsRef.abilities);//Populate ability list based on selected archetype
      userTrigger.updateAbilityQuery(overArchetype,true);//Populate info on first ability that populates selection by default. Also assigns selected class and ability to global records

      //Populate passive name and descriptions
      let classPassivePath = classStatsRef.passives;
      for (let i=1;i<=4;i++) {readSelection(`${overArchetype}Passive${i}`).innerHTML = classPassivePath[`passive${i}`].name;}
      manipulateTrait.updateTraitCollection(globalRecords.archetype1Old,globalRecords.archetype2Old);//Update traits based on class selection
      userTrigger.checkDuplicateSelection(archetype,value,`updateArchetypeQuery`,`duo`);//Check if this selection was a duplicate, and if it was, swap places with the old info.
      if (!parent) {updateFormulas();}//In closing, update all formulas
    },
    //Triggers whenever the parent archetype changes, or whenever a new ability is selected
    updateAbility(archetype,parent) {
      let selectedArchetype = readSelection(archetype).value;
      let selectedAbility = readSelection(`${archetype}ability`).value;
      let classStatsRef = classInfo[selectedArchetype];
      let archsRef = globalRecords.archs;
      //since abilities are always called in archs or ability updates, assign archs/abilities to global records here
      if (archetype==="archetype1") {
        archsRef.one.class = selectedArchetype;
        archsRef.one.ability = selectedAbility;
        readSelection("ability1DisplayName").innerHTML = classStatsRef.abilities[selectedAbility].name;
        readSelection(`primePerk`).innerHTML=classStatsRef.primePerk;
        readSelection("archetype1PrimePerkImage").src = classStatsRef.primePerkImage;
        // readSelection(`primePerkDesc`).innerHTML=userTrigger.updateSubstatColor(classStatsRef.primePerkDesc);
        //no longer need to do this here as prime perk desc modification and injection is handled by basicsUpdates.updateCurrentAbilityDisplayDurations();

        for (let i=1;i<=4;i++) {readSelection(`archetype1Passive${i}Image`).src = classStatsRef.passives[`passive${i}`].image;}
      }
      else if (archetype==="archetype2") {
        archsRef.two.class = selectedArchetype;
        archsRef.two.ability = selectedAbility;
        readSelection("ability2DisplayName").innerHTML = classStatsRef.abilities[selectedAbility].name;

        for (let i=1;i<=4;i++) {readSelection(`archetype2Passive${i}Image`).src = classStatsRef.passives[`passive${i}`].image;}
      }
      // readSelection(`${archetype}abilityDesc`).innerHTML=userTrigger.updateSubstatColor(classStatsRef.abilities[selectedAbility].desc);
      //no longer need to do this here as ability desc modification and injection is handled by basicsUpdates.updateCurrentAbilityDisplayDurations();
      readSelection(`${archetype}abilityIcon`).src=classStatsRef.abilities[selectedAbility].image;
      readSelection(`${archetype}AbilityRowImage`).src=classStatsRef.abilities[selectedAbility].image;
      if (!parent) {updateFormulas();}
    },
    updateAbilityQuery(archetype,parent) {
      let selectedArchetype = readSelection(archetype).value;
      let selectedAbility = readSelection(`${archetype}ability`).value;
      let classStatsRef = classInfo[selectedArchetype];
      let archsRef = globalRecords.archs;
      //since abilities are always called in archs or ability updates, assign archs/abilities to global records here
      if (archetype==="archetype1") {
        archsRef.one.class = selectedArchetype;
        archsRef.one.ability = selectedAbility;
        readSelection(`settingsArch1`).innerHTML=selectedArchetype;
        readSelection(`settingsPrimePerk`).innerHTML=classStatsRef.primePerk;
        readSelection("settingsAbility1").innerHTML = selectedAbility;
      }
      else if (archetype==="archetype2") {
        archsRef.two.class = selectedArchetype;
        archsRef.two.ability = selectedAbility;
        readSelection(`settingsArch2`).innerHTML=selectedArchetype;
        readSelection("settingsAbility2").innerHTML = selectedAbility;
      }
      readSelection(`${archetype}abilityIcon`).src=classStatsRef.abilities[selectedAbility].image;
      if (!parent) {updateFormulas("cycleTableKnowerOfAll");}
      filters.updateLockedBreakdownOptions();
    },
    //Triggers trait updates based on newly selected trait and associate level.
    //Also prevents items from going above 85 total points spent.
    updateTrait(elemID,adjustment) {
      let traitName = readSelection(`trait${elemID}`).value;
  
      if (!traits[traitName]) {readSelection(`trait${elemID}`).value = "";}
      else {
        for (trait of globalRecords.greatTraitRecords) {
          if (trait.name === traitName && traitName != "" && !adjustment) {
            readSelection(`trait${elemID}`).value = "";
            break;
          }
        }
      }
  
      let traitLevel = +readSelection(`trait${elemID}Level`).value <= 10 ? +readSelection(`trait${elemID}Level`).value : 10;
      traitLevel = traitLevel>=0 ? traitLevel : 0;
      traitLevel = adjustment ?? traitLevel;
      let totalPoints = globalRecords.greatTraitRecords[elemID-1].level;
  
      let change = traitLevel - totalPoints;
      if ((globalRecords.traitPointCount + change) > globalRecords.traitPointCap) {traitLevel -= globalRecords.traitPointCount + change - globalRecords.traitPointCap;}//If we would exceed the trait cap, minus from this trait's level the amount that would exceed it
      if (traitName === "") {traitLevel = 0}//If the trait remains unselected, remove the level from it if modified
  
      globalRecords.greatTraitRecords[elemID-1].name = readSelection(`trait${elemID}`).value;
      readSelection(`trait${elemID}Level`).value = traitLevel;
      globalRecords.greatTraitRecords[elemID-1].level = traitLevel;
      //Dupe/swaps are not needed for traits as the dropdowns for them decrease with selections
      //Finally, update formulas based on the newly displayed values for this trait
      manipulateTrait.updateTraitCollection()
      updateFormulas();
    },
    //Used to check if a duplicate selection happened on anything but traits. If it did, then swap positions.
    checkDuplicateSelection(collection,value,functionName,handling,limits) {
      //Collection, collection ID number, function to reuse on dupe/swap, "duo"/"several" handling, limits is for several if needed
      let option1 = `${collection}${value}`;
      let selectedOption = readSelection(option1).value;
      let option2 = ``;
      let oppositeValue = ``; //for use in recalling the function associated
      let updateOpposing = false;
        if (handling==="duo") { //For use with archetypes, quick use cons, and other things with only 2 selections.
          //Defining the opposite selection ID call in case a swap happens
          if (option1===`${collection}1`) {option2=`${collection}2`;oppositeValue = `2`;}
          else {option2=`${collection}1`;oppositeValue = `1`;}
          //If the selection matches the opposing selection, swap places like in game
          if (selectedOption===readSelection(option2).value && readSelection(option2).value) {
            globalRecords[`${option2}Old`]=globalRecords[`${option1}Old`];
            readSelection(option2).value=globalRecords[`${option1}Old`];
            updateOpposing = true;
          }
        }
        else if (handling==="several") { //For use with concoctions, rings, and things with more than 2.
          for (let i=1;i<=limits;i++) {
              let current = readSelection(`${collection}${i}`).value;
              //Checks ID's on ACTIVE selections for a dupe, non-matching ID, that isn't blank.
              //If criteria met, swap places like in game.
              if ((current===selectedOption) && ((`${collection}${i}`)!=(`${collection}${value}`)) && current) {
                console.log("HEY HOWYD")
                globalRecords[`${collection}${i}Old`]=globalRecords[`${collection}${value}Old`];
                readSelection(`${collection}${i}`).value=globalRecords[`${collection}${value}Old`];
                oppositeValue = i;
                updateOpposing = true;
                break;
              }
          }
        }
        //Assigns currently selected option to the "Old" variable for that selection for the sake
        //of tracking selection swaps
        globalRecords[`${option1}Old`]=selectedOption;
        if (updateOpposing===true && collection != "PrismRow"){userTrigger[functionName](collection,oppositeValue,true);}//update the swapped item, if not a fragment(they have no displays)
    },
    //Used to modify the description of any given item, using substat color specifications from substatColorMods{}
    updateSubstatColor(description) {
      for (let substat of substatColorMods) {
        //And if the description contains the looped substat ANYWHERE within it, proceed
        if (description.toLowerCase().includes(substat) === true) {
          let substatExclusion = "";
          if (substatColorExclusions[substat] != undefined) {
            //(?!) = lookahead is not [whatever you don't want to be next]
            substatExclusion = `(?!${substatColorExclusions[substat]})`;
            //This is to only find exclusion values based upon the specified substat. So fire = rate, status = effect, etc.
          }
          //b = word boundary, g = global, i = case insensitive. Any \\ is just bc \ is an escape itself and needs to be escaped. \s = whitespace character
          let regEx = new RegExp(`\\b(${substat})${substatExclusion}\\b`, "gi");
          description = description.replace(regEx, `<span class="${substat.replace(/\s/g,"")}">${substat.toUpperCase()}</span>`);
        }
      }
      //d= digit character, w = word character
      let regExNumbers = new RegExp(`\\b(\\d[%\\w]*)`, "gi");
      description = description.replace(regExNumbers, `<span class="numberTag">$&</span>`);
      return description;
    },
    updateTraitsPrismDisplay(tabToChange,buttonToHighlight) {
      readSelection("traitsMegaBox").style.display = "none";
      readSelection("prismMegaBox").style.display = "none";
      readSelection("traitsTraitsButton").style.border = "none";
      readSelection("traitsPrismButton").style.border = "none";

      readSelection(tabToChange).style.display = "flex";

      // readSelection(buttonToHighlight).style.borderTop = "3px solid #434343";
      // readSelection(buttonToHighlight).style.borderBottom = "3px solid #434343";
      readSelection(buttonToHighlight).style.borderTop = "3px solid white";
      readSelection(buttonToHighlight).style.borderBottom = "3px solid white";
    },
}