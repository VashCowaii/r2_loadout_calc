/* ---------------------------------------------------------------------------------------- */
/* ------------------ URL import, export, and modification -------------------------------- */
/* ---------------------------------------------------------------------------------------- */
let manipulateURL = {
    "generalToggles": [],
    "nonBooleanValues": [],
    "generalToggles2": [],
    "generalToggles3": [],
    //Used to update the arrays listed above, with current, usable information. The arrays are used by both general URL updates, and URL handling, so edits need to be done here.
    updateGeneralToggles(isOverride) {
      let altPath = globalRecords.searchSettingsToggles;
      manipulateURL.generalToggles = [//ORDER MATTERS HERE, LIKE A LOT DUDE
        //Name = DOMelemID, expAlt = export settings path alternative, arrayEntry is what slot, 0, 1, or 2. Null/blank is 0
        {Name: "USEtoggledHead"},{Name: "USEtoggledChest"},{Name: "USEtoggledLegs"},{Name: "USEtoggledHands"},
        {Name: "USEtoggledAmulet"},
        {Name: "USEtoggledRing1"},{Name: "USEtoggledRing2"},{Name: "USEtoggledRing3"},{Name: "USEtoggledRing4"},
        {Name: "USEtoggledRelic"},
        {Name: "USEtoggledrFrag1"},{Name: "USEtoggledrFrag2"},{Name: "USEtoggledrFrag3"},//These frag ones aren't used anymore, they're placeholder for now until we find something to replace them with

        {Name: "USEtoggledPrimeP", expAlt: altPath.usePrimePerk},
        {Name: "USEtoggledAbility1", expAlt: altPath.useAbility1},
        {Name: "USEtoggledPassive1", expAlt: altPath.usePassive1},{Name: "USEtoggledPassive2", expAlt: altPath.usePassive2},{Name: "USEtoggledPassive3", expAlt: altPath.usePassive3},{Name: "USEtoggledPassive4", expAlt: altPath.usePassive4},
        {Name: "USEtoggledAbility2", expAlt: altPath.useAbility2},
        {Name: "USEtoggledPassive5", expAlt: altPath.usePassive5},{Name: "USEtoggledPassive6", expAlt: altPath.usePassive6},{Name: "USEtoggledPassive7", expAlt: altPath.usePassive7},{Name: "USEtoggledPassive8", expAlt: altPath.usePassive8},

        {Name: "USEtoggledPrimary"},{Name: "USEtoggledpMutator"},{Name: "USEtoggledpMod"},
        {Name: "USEtoggledMelee"},{Name: "USEtoggledmMutator"},{Name: "USEtoggledmMod"},
        {Name: "USEtoggledSecondary"},{Name: "USEtoggledsMutator"},{Name: "USEtoggledsMod"},
        // {Name: asdf, expAlt: null, arrayEntry: null},
      ];
      for (let i=1;i<=globalRecords.greatConcoctionRecords.length;i++) { manipulateURL.generalToggles.push({Name:`USEtoggledConc${i}`,arrayEntry:1});}//Add conc toggles to second entry, hence placment 1
      for (let i=1;i<=globalRecords.greatConsumableRecords.length;i++) { manipulateURL.generalToggles.push({Name:`USEtoggledQuick${i}`,arrayEntry:2});}//Add quick use toggles to third entry, hence placement 2


      manipulateURL.nonBooleanValues = [
        {elementValue: "enemyCount",altSetting: globalRecords.enemyCount,stringToNumeric: true},
        {elementValue: (!isOverride && readSelection("teamCount").value > 1 ? "Co-op" : "Solo"),elemOverride: true,altSetting: globalRecords.isCoop,stringToNumeric: false,extraCondition: "Solo"},
        {elementValue: "teamCount",altSetting: globalRecords.teamCount,stringToNumeric: true,extraCondition: 1},
        {elementValue: "minionCount",altSetting: globalRecords.minionCount,stringToNumeric: true},
        {elementValue: "spiritHealerStacks",altSetting: globalRecords.spiritHealerStacks,stringToNumeric: true},
      ];

      manipulateURL.generalToggles2 = [
        {Name: "includeREdamage", expAlt: globalRecords.useREdamage},
        {Name: "includeDMGKept", expAlt: globalRecords.useDMGKept},
        {Name: "includeRelicHealing", expAlt: globalRecords.useRelicHealing},
        {Name: "includeShields", expAlt: globalRecords.useShields},
        {Name: "greyActive", expAlt: globalRecords.greyHealthActive},
        {Name: "perfectDodge", expAlt: globalRecords.isPerfectDodge},
        {Name: "isEvade", expAlt: globalRecords.isEvade},
        {Name: "enableWeakspots", expAlt: globalRecords.enableWeakspots},
        {Name: "enableCrits", expAlt: globalRecords.enableCrits},
      ]

      manipulateURL.generalToggles3 = [//These are settings that need a 1 or a 0 no matter what we say, without getting trimmed to shorten URL length.
        {Name: "enableMainSwings", expAlt: globalRecords.enableMainSwings},
        {Name: "enableMeleeEffects", expAlt: globalRecords.enableMeleeEffects},
      ]
    },
    //Used to modify and actively update the browser URL display without a page reload.
    //Also used to compile the query string when exporting to R2TK or query results links.
    updateURLparameters(isExported,isOverride) {
      globalRecords.urlObject = {
        // "trait": [],
        "r": [],//reactor
        "g": [],//gun + stats
        "co": [],//weapon cores
        "ch": [],//character + mods
        "gm": [],//gun mods only

        "ax": [],//aux
        "sr": [],//sensor
        "my": [],//memory
        "pr": [],//processor

        // "settings": [],
        // "adv": [],
        "s": ["s"]
      }
      let urlObject = globalRecords.urlObject;
    //   let traitRecord = globalRecords.greatTraitRecords;
      let pushCondition = manipulateURL.pushedUpdateCondition;
      let exportSetting = manipulateURL.exportURLsetting;

    //   globalRecords.reactor
    //   currentAttribute
    //   currentType
    //   subRoll1
    //   subRoll1Value
    //   subRoll2
    //   subRoll2Value

    //REACTOR AND SUBSTATS
    const reactorRef = globalRecords.reactor;

    const attributeKeys = Object.keys(attributeList);
    const typeKeys = Object.keys(typeList);
    const reactorSubKeys = Object.keys(reactorSubRolls);
    const ammoKeys = Object.keys(reactorAmmoList);

    // globalRecords.boss.currentBoss = currentName;
    // globalRecords.boss.enemyType = currentEntry.enemyType,
    // globalRecords.boss.currentBossPart = readSelection("bossPart").value;

    // "boss": {
    //     "currentBoss": "VoidBattle_Devourer_Hard",
    //     "enemyType": "Colossus",
    //     "currentBossPart": "",
    //     "currentBossPartType": "",
    //     "currentBossPartWP": 0,
    // },

    let bossKeys = Object.keys(bossData);

    const partsPath = bossData[globalRecords.boss.currentBoss].weaknessKeys;
    const partsArray = Object.keys(partsPath);

    let reactorTypeString = `${attributeKeys.indexOf(reactorRef.currentAttribute)}${typeKeys.indexOf(reactorRef.currentType)}${ammoKeys.indexOf(reactorRef.currentAmmoType)}`;
    let reactorSubsString = `${reactorSubKeys.indexOf(reactorRef.subRoll1).toString().padStart(2,'0')}${reactorSubKeys.indexOf(reactorRef.subRoll2).toString().padStart(2,'0')}${reactorRef.weaponMatched ? 1 : 0}`;
    let reactorMiscString1 = `${globalRecords.currentDisplayMode}${reactorRef.level}${reactorRef.isUltimate ? 1 : 0}`;
    let reactorBossString = `${bossKeys.indexOf(globalRecords.boss.currentBoss).toString().padStart(2,'0')}${partsArray.indexOf(globalRecords.boss.currentBossPart).toString().padStart(2,'0')}`
    
    const concatenatedType = `${reactorTypeString}${reactorSubsString}${reactorMiscString1}${reactorBossString}`;

    urlObject.r.push(concatenatedType,reactorRef.subRoll1Value.toFixed(3),reactorRef.subRoll2Value.toFixed(3));


    //WEAPON AND SUBSTATS
    const weaponRef = globalRecords.weapon;

    const weaponKeys = Object.keys(sniperList);
    const weaponSubKeys = Object.keys(weaponSubstatList);

    const concatenatedWeapon = `${weaponKeys.indexOf(weaponRef.currentWeapon).toString().padStart(3,'0')}${weaponSubKeys.indexOf(weaponRef.subRoll1).toString().padStart(2,'0')}${weaponSubKeys.indexOf(weaponRef.subRoll2).toString().padStart(2,'0')}${weaponSubKeys.indexOf(weaponRef.subRoll3).toString().padStart(2,'0')}${weaponSubKeys.indexOf(weaponRef.subRoll4).toString().padStart(2,'0')}`;

    urlObject.g.push(concatenatedWeapon,
      weaponRef.subRoll1Value != 0 ? weaponRef.subRoll1Value.toFixed(3) : "",
      weaponRef.subRoll2Value != 0 ? weaponRef.subRoll2Value.toFixed(3) : "",
      weaponRef.subRoll3Value != 0 ? weaponRef.subRoll3Value.toFixed(3) : "",
      weaponRef.subRoll4Value != 0 ? weaponRef.subRoll4Value.toFixed(3) : "");


    //WEAPON CORES
    let coreRecord = weaponRef.coreArrayRecord;
    let coreStorageString = "";

    if (coreRecord) {
      for (let i=0;i<5;i++) {
        let currentCoreColor = coreRecord[i];
        let currentStatObject = coreStatsReference[currentCoreColor];
        let currentKeys = Object.keys(currentStatObject);

        let currentSubName = weaponRef[`coreRoll${i+1}`];

        coreStorageString += currentKeys.indexOf(currentSubName).toString().padStart(2,`0`);
      }

      urlObject.co.push(+coreStorageString ? coreStorageString : "",
        weaponRef.coreRoll1Value != 0 ? weaponRef.coreRoll1Value.toFixed(2) : "",
        weaponRef.coreRoll2Value != 0 ? weaponRef.coreRoll2Value.toFixed(2) : "",
        weaponRef.coreRoll3Value != 0 ? weaponRef.coreRoll3Value.toFixed(2) : "",
        weaponRef.coreRoll4Value != 0 ? weaponRef.coreRoll4Value.toFixed(2) : "",
        weaponRef.coreRoll5Value != 0 ? weaponRef.coreRoll5Value.toFixed(2) : ""
      )
    }
    

    //CHARACTER AND CHARACTER MODS
    const characterRef = globalRecords.character;

    const characterKeys = Object.keys(characters);
    const augmentKeys = Object.keys(augments);
    const subAttackKeys = Object.keys(subAttacks);
    const characterModKeys = Object.keys(modData);

    const characterString = `${characterKeys.indexOf(characterRef.currentCharacter).toString().padStart(2,'0')}${characterRef.currentAbilityBreakdown}`;
    const augAndSubString = `${augmentKeys.indexOf(characterRef.mods[0]).toString().padStart(3,'0')}${subAttackKeys.indexOf(characterRef.mods[1]).toString().padStart(2,'0')}`;

    let characterModsString = ``;


    for (let i=1;i<=10;i++) {
      let currentMod = characterRef.mods[i+1];
      let currentModIndex = characterModKeys.indexOf(currentMod).toString().padStart(3,'0');
      if (currentModIndex === "000") {continue;}

      characterModsString += currentModIndex;
    }

    urlObject.ch.push(`${characterString}${augAndSubString}`,characterModsString);



    //WEAPON MODULES ONLY
    const weaponRef2 = globalRecords.weapon;

    const weaponKeys2 = Object.keys(sniperList);
    const weaponSubKeys2 = Object.keys(weaponSubstatList);
    let concatenatedWeapon2 = ``;

    // const weaponModsCategory = sniperList[globalRecords.weapon.currentWeapon].ammoType === "HighPowered" ? highPowerRounds : impactRounds;
    const weaponModsCategory = userTriggers.weaponTypeModList[sniperList[globalRecords.weapon.currentWeapon].ammoType];
    const weaponModsKeys = Object.keys(weaponModsCategory);

    for (let i=1;i<=10;i++) {
      let currentMod = weaponRef2.mods[i-1];
      let currentModIndex = weaponModsKeys.indexOf(currentMod).toString().padStart(3,'0');
      if (currentModIndex === "000") {continue;}

      concatenatedWeapon2 += currentModIndex;
    }

    urlObject.gm.push(concatenatedWeapon2);



    const componentRef = globalRecords.components;

    const setNameKeys = Object.keys(auxiliary);
    const auxiliaryRollKeys = Object.keys(auxiliaryRolls);
    const sensorRollKeys = Object.keys(sensorRolls);
    const memoryRollKeys = Object.keys(memoryRolls);
    const processorRollKeys = Object.keys(processorRolls);

    const auxConcat = `${setNameKeys.indexOf(componentRef.auxiliary).toString().padStart(2,'0')}${auxiliaryRollKeys.indexOf(componentRef.auxiliarySub1).toString().padStart(2,'0')}${auxiliaryRollKeys.indexOf(componentRef.auxiliarySub2).toString().padStart(2,'0')}`;
    urlObject.ax.push(auxConcat,componentRef.auxiliarySub1Value != 0 ? componentRef.auxiliarySub1Value.toFixed(3) : 0,componentRef.auxiliarySub2Value != 0 ? componentRef.auxiliarySub2Value.toFixed(3) : "");

    const sensorConcat = `${setNameKeys.indexOf(componentRef.sensor).toString().padStart(2,'0')}${sensorRollKeys.indexOf(componentRef.sensorSub1).toString().padStart(2,'0')}${sensorRollKeys.indexOf(componentRef.sensorSub2).toString().padStart(2,'0')}`;
    urlObject.sr.push(sensorConcat,componentRef.sensorSub1Value != 0 ? componentRef.sensorSub1Value.toFixed(3) : "",componentRef.sensorSub2Value != 0 ? componentRef.sensorSub2Value.toFixed(3) : "");

    const memoryConcat = `${setNameKeys.indexOf(componentRef.memory).toString().padStart(2,'0')}${memoryRollKeys.indexOf(componentRef.memorySub1).toString().padStart(2,'0')}${memoryRollKeys.indexOf(componentRef.memorySub2).toString().padStart(2,'0')}`;
    urlObject.my.push(memoryConcat,componentRef.memorySub1Value != 0 ? componentRef.memorySub1Value.toFixed(3) : "",componentRef.memorySub2Value != 0 ? componentRef.memorySub2Value.toFixed(3) : "");

    const processorConcat = `${setNameKeys.indexOf(componentRef.processor).toString().padStart(2,'0')}${processorRollKeys.indexOf(componentRef.processorSub1).toString().padStart(2,'0')}${processorRollKeys.indexOf(componentRef.processorSub2).toString().padStart(2,'0')}`;
    urlObject.pr.push(processorConcat,componentRef.processorSub1Value != 0 ? componentRef.processorSub1Value.toFixed(3) : "",componentRef.processorSub2Value != 0 ? componentRef.processorSub2Value.toFixed(3) : "");



    //REACTOR AND SUBSTATS
    // const reactorRef = globalRecords.reactor;

    // const attributeKeys = Object.keys(attributeList);
    // const typeKeys = Object.keys(typeList);
    // const reactorSubKeys = Object.keys(reactorSubRolls);
    // const ammoKeys = Object.keys(reactorAmmoList);
    
    // const concatenatedType = `${attributeKeys.indexOf(reactorRef.currentAttribute)}${typeKeys.indexOf(reactorRef.currentType)}${ammoKeys.indexOf(reactorRef.currentAmmoType)}${reactorSubKeys.indexOf(reactorRef.subRoll1).toString().padStart(2,'0')}${reactorSubKeys.indexOf(reactorRef.subRoll2).toString().padStart(2,'0')}`;

    // urlObject.r.push(concatenatedType,reactorRef.subRoll1Value.toFixed(3),reactorRef.subRoll2Value.toFixed(3));










  
    //   if (isExported) {
    //     for (i=1;i<=traitRecord.length;i++) {
    //       let traitName = traitRecord[i-1].name || "";
    //       let traitLevel = traitRecord[i-1].level || "";
    //       let concatenated = `${traitName}${traitLevel}`;
    //       urlObject.trait.push(concatenated)
    //     }
    //   }
    //   else {
    //     for (i=1;i<=traitRecord.length;i++) {
    //       let traitName = traitRecord[i-1].name || "";
    //       let traitID = "00";
    //       if (traits[traitName].placementID != "00") {traitID = traits[traitName].placementID}
    //       if (traitID === "00") {continue}
    //       let traitLevel = traitRecord[i-1].level || "";
    //       let concatenated = `${traitID}${traitLevel.toString().padStart(2, '0')}`;
    //       urlObject.trait += concatenated;
    //     }
    //   }
  
    //   let path = globalRecords.archs;
    //   if (isExported) {urlObject.archetype.push(path.one.class,path.two.class,path.one.ability,path.two.ability);}
    //   else {
    //     urlObject.archetype = "";
    //     if (classInfo[path.one.class].placementID != "00") {urlObject.archetype += classInfo[path.one.class].placementID + classInfo[path.one.class].abilities[path.one.ability].placementID;}
    //     if (classInfo[path.two.class].placementID != "00") {urlObject.archetype += classInfo[path.two.class].placementID + classInfo[path.two.class].abilities[path.two.ability].placementID;}
    //   }
  
    //   // path = globalRecords.armor;
    //   const {helmet,chest,leg,hand} = globalRecords.armor;
    //   if (isExported) {urlObject.armor.push(helmet,chest,leg,hand);}
    //   else {
    //     urlObject.armor = "";
    //     if (helmets[helmet].placementID != "H00") {urlObject.armor += helmets[helmet].placementID}
    //     if (chests[chest].placementID != "C00") {urlObject.armor += chests[chest].placementID}
    //     if (legs[leg].placementID != "L00") {urlObject.armor += legs[leg].placementID}
    //     if (hands[hand].placementID != "G00") {urlObject.armor += hands[hand].placementID}
    //   }
  
    //   const {primary,primaryMutator,primaryMod,melee,meleeMutator,secondary,secondaryMutator,secondaryMod} = globalRecords.weapons;
    //   if (isExported) {
    //     urlObject.primary.push(primary,primaryMutator,primaryMod);
    //     urlObject.melee.push(melee,meleeMutator);
    //     urlObject.secondary.push(secondary,secondaryMutator,secondaryMod);
    //   }
    //   else {
    //     urlObject.primary.push(pushCondition(primaries[primary].placementID,"00"));
    //     urlObject.primary.push(pushCondition(rangedMutators[primaryMutator].placementID,"00"));
    //     if (primaries[primary].builtIN === "") {urlObject.primary.push(pushCondition(rangedMods[primaryMod].placementID,"00"));}

    //     urlObject.melee.push(pushCondition(melees[melee].placementID,"00"));
    //     urlObject.melee.push(pushCondition(meleeMutators[meleeMutator].placementID,"00"));

    //     urlObject.secondary.push(pushCondition(secondaries[secondary].placementID,"00"));
    //     urlObject.secondary.push(pushCondition(rangedMutators[secondaryMutator].placementID,"00"));
    //     if (secondaries[secondary].builtIN === "") {urlObject.secondary.push(pushCondition(rangedMods[secondaryMod].placementID,"00"));}
    //   }
  
    //   if (isExported) {
    //     path = globalRecords.greatConcoctionRecords;
    //     for (i=0;i<path.length;i++) {urlObject.consumable.push(path[i])}
    //     path = globalRecords.greatConsumableRecords;
    //     for (i=0;i<path.length;i++) {urlObject.consumable.push(path[i])}
    //   }
    //   else {
    //     urlObject.consumable = "";
    //     path = globalRecords.greatConcoctionRecords;
    //     for (i=0;i<path.length;i++) {if (concoctions[path[i]].placementID != "C00") {urlObject.consumable += concoctions[path[i]].placementID}}
    //     path = globalRecords.greatConsumableRecords;
    //     for (i=0;i<path.length;i++) {if (quickUses[path[i]].placementID != "Q00") {urlObject.consumable += quickUses[path[i]].placementID}}
    //   }
  
    //   path = globalRecords.accessories;
    //   if (isExported) {
    //     urlObject.accessory.push(path.amulet);
    //     for (i=1;i<=4;i++) {urlObject.accessory.push(path[`ring${i}`]);}
    //   }
    //   else {
    //     urlObject.accessory = "";
    //     if (amulets[path.amulet].placementID != "A000") {urlObject.accessory += amulets[path.amulet].placementID}
    //     for (i=1;i<=4;i++) {if (rings[path[`ring${i}`]].placementID != "R000") {urlObject.accessory += rings[path[`ring${i}`]].placementID}}
    //   }
      
  
    //   if (isExported) {
    //     urlObject.relic.push(path.relic);
    //     for (i=1;i<=3;i++) {
    //       urlObject.relic.push(path[`fragment${i}`]);
    //     }
    //   }
    //   else {
    //     urlObject.relic = "";
    //     if (relics[path.relic].placementID != "r00") {urlObject.relic += relics[path.relic].placementID}
  
    //     for (i=1;i<=3;i++) {
    //       if (fragments[path[`fragment${i}`]].placementID != "F00") {urlObject.relic += fragments[path[`fragment${i}`]].placementID}
    //     }
    //   }
  
    //   urlObject.settings = ["","",""]//0 is general gear, 1 is concoctions, 2 is quick-use items
    //   manipulateURL.updateGeneralToggles(isOverride);
    //   let generalToggles = manipulateURL.generalToggles;
    //   for (let entry of generalToggles) {exportSetting(entry.Name,"settings",isOverride,entry.expAlt,entry.arrayEntry);}
    //   for (let i=0;i<urlObject.settings.length;i++) {globalRecords.urlObject.settings[i] = globalRecords.urlObject.settings[i].replace(/\.?0+$/, '');}//cut off trailing 0's to shorten URL

    //   let nonBooleanValues = manipulateURL.nonBooleanValues;
    //   let pushNonBooleans = manipulateURL.advPathHandling;
    //   for (let entry of nonBooleanValues) {pushNonBooleans(globalRecords.urlObject,entry,isOverride);}

    //   let generalToggles2 = manipulateURL.generalToggles2; urlObject.adv.push("");//Adds a blank string as a new entry. exportSetting on an ADV string looks at the last entry possible, aka this string we just pushed, and modifies that. Order matters here.
    //   for (let entry of generalToggles2) {exportSetting(entry.Name,"adv",isOverride,entry.expAlt);}
    //   urlObject.adv[urlObject.adv.length-1] = urlObject.adv[urlObject.adv.length-1].replace(/\.?0+$/, '');//remove trailing 0's from the last parameter, helps clear the URL length if no adv settings are active

    //   let generalToggles3 = manipulateURL.generalToggles3; urlObject.adv.push("");
    //   for (let entry of generalToggles3) {exportSetting(entry.Name,"adv",isOverride,entry.expAlt);}
  
      //Delete a given parameter if it stores no values, to reduce URL length
      const clearEmpty = manipulateURL.urlParamIsEmpty;
      const urlParamKeys = Object.keys(urlObject);
      for (let param of urlParamKeys) {clearEmpty(param);}
  
      if (isExported != true) {
        decoded = new URLSearchParams(urlObject).toString().replace(/%2C/g, ',');
        const newUrl = `${window.location.origin}/TFD/Calculator/?${decoded}`;
  
        if (!isOverride) {history.replaceState({}, '', newUrl);}
        else {return newUrl;}
      }
    },
    pushedUpdateCondition(IDtoPush,condition) {return IDtoPush != condition ? IDtoPush : "";},
    //Used in updateURLparameters for shorthand checks when generating binary settings to the URL
    exportURLsetting(checkBoxID,objElement,isOverride,providedBoolean,arrayEntry) {
      arrayEntry = arrayEntry ?? 0;
      if (!isOverride) {
        if (objElement != "adv") {
          if (readSelection(checkBoxID)?.checked === true) {
            globalRecords.urlObject[objElement][arrayEntry] += "1";
          }
          else if (readSelection(checkBoxID) === null || readSelection(checkBoxID).checked === false) {
            globalRecords.urlObject[objElement][arrayEntry] += "0";
          }
        }
        else {
          if (readSelection(checkBoxID)?.checked === true) {
            globalRecords.urlObject.adv[globalRecords.urlObject.adv.length-1] += "1";
          }
          else if (readSelection(checkBoxID) === null || readSelection(checkBoxID).checked === false) {
            globalRecords.urlObject.adv[globalRecords.urlObject.adv.length-1] += "0";
          }
        }
      }
      else {
        if (objElement != "adv") {
          if (providedBoolean) {globalRecords.urlObject[objElement][arrayEntry] += "1";}
          else {globalRecords.urlObject[objElement][arrayEntry] += "0";}
        }
        else {
          if (providedBoolean) {globalRecords.urlObject.adv[globalRecords.urlObject.adv.length-1] += "1";}
          else {globalRecords.urlObject.adv[globalRecords.urlObject.adv.length-1] += "0";}
        }
      }
    },
    //used in updateURLparameters for advanced settings handling, specifically the non-boolean values like team count or enemy count, etc
    advPathHandling(arrayPath,entry,isOverride) {
      entry.elementValue = entry.elemOverride ? entry.elementValue : (isOverride ? entry.elementValue : readSelection(entry.elementValue).value);
      if (entry.stringToNumeric) {entry.elementValue = +entry.elementValue}
      settingsPath = isOverride ? entry.altSetting : entry.elementValue;

      if (settingsPath && settingsPath != entry.extraCondition) {arrayPath.adv.push(settingsPath);}
      else {arrayPath.adv.push("");}
    },
    //Used in updateURLparameters() to delete a given parameter if it is empty, to reduce URL length
    urlParamIsEmpty(objElement) {
      if (!globalRecords.urlObject[objElement]) {
        delete globalRecords.urlObject[objElement];
      }
      else{
        let foundValue = false;
        for (i=0;i<globalRecords.urlObject[objElement].length;i++) {
          if (globalRecords.urlObject[objElement][i]) {foundValue=true;break;}
        }
        if (foundValue===false) {
          delete globalRecords.urlObject[objElement];
        }
      }
    },
    //Used on click to the export button. Confirms user wants to export, lets them know about settings
    confirmExport() {
      let confirmed = confirm(`This build will be opened in Remnant2Toolkit.com for sharing purposes.\n\n"Why export, though?"\nBecause this is a calculator, not a builds hub. THAT SAID, please be aware that exported builds do not save toggles/settings you have chosen here. If you need a build link that includes your chosen settings, use the URL in your browser.`);
      if (confirmed===true) {
        let R2TKprefix = `https://remnant2toolkit.com/builder`
        manipulateURL.updateURLparameters(true);
        //Tell R2TK where the URL is coming from
        globalRecords.urlObject.source = "vash";
        //Trim values that R2TK does not use, to reduce URL length
        delete globalRecords.urlObject.settings;
        delete globalRecords.urlObject.adv;
        delete globalRecords.urlObject.s;
    
        const params = new URLSearchParams(globalRecords.urlObject);
        decoded = params.toString();
        decoded = decoded.replace(/%2C/g, ',');
        const newUrl = `${R2TKprefix}?${decoded}`;
        console.log(newUrl)
        window.open(newUrl, '_blank').focus();
      }
    },
    //Reads the query string if one exists, and populates all fields/updates formulas accordingly -- push text test
    importURLparameters() { 
        let feed = (new URL(document.location)).searchParams;
        //   let urlTraits = feed.get("trait");
        let urlReactor = feed.get("r");
        let urlWeapon = feed.get("g");
        let urlCores = feed.get("co");
        let urlCharacter = feed.get("ch");
        let urlWeaponMods = feed.get("gm");

        let urlAuxiliary = feed.get("ax");
        let urlSensor = feed.get("sr");
        let urlMemory = feed.get("my");
        let urlProcessor = feed.get("pr");
        //   let urlArchs = feed.get("archetype");
        //   let urlArmor = feed.get("armor");
        //   let urlPrimary = feed.get("primary");
        //   let urlMelee = feed.get("melee");
        //   let urlSecondary = feed.get("secondary");
        //   let urlConcoctions = feed.get("consumable");
        //   let urlAccessory = feed.get("accessory");
        //   let urlRelic = feed.get("relic");
        //   let urlSettings = feed.get("settings");
        //   let urlAdvanced = feed.get("adv");
        let urlSource = feed.get("s");
        let urlRedirect = feed.get("redirect");
        if (urlRedirect) {alert("You were redirected here, presumably because you used an old link. The site structure has changed, and you'll only see this if you used an older link but in theory you should never see it again.")}

        let invalidEntries = [];
        let importSetting = manipulateURL.importURLsetting;


        if (urlReactor) {
            const reactorRef = globalRecords.reactor;
            const attributeKeys = Object.keys(attributeList);
            const typeKeys = Object.keys(typeList);
            const reactorSubKeys = Object.keys(reactorSubRolls);
            const ammoKeys = Object.keys(reactorAmmoList);
            
            urlReactor = urlReactor.split(",");
            if (!urlReactor[0]) {urlReactor[0] = "";}

            reactorRef.currentAttribute = attributeKeys[+urlReactor[0][0]];
            reactorRef.currentAttributeID = `reactor${reactorRef.currentAttribute.replace(/-/g, "")}`;
            reactorRef.currentType = typeKeys[+urlReactor[0][1]];
            reactorRef.currentTypeID = `reactor${reactorRef.currentType}`;
            reactorRef.currentAmmoType = ammoKeys[+urlReactor[0][2]];
            reactorRef.currentAmmoTypeID = `reactor${reactorRef.currentAmmoType}`,
            

            reactorRef.subRoll1 = reactorSubKeys[+`${urlReactor[0][3]}${urlReactor[0][4]}`];
            reactorRef.subRoll2 = reactorSubKeys[+`${urlReactor[0][5]}${urlReactor[0][6]}`];

            reactorRef.weaponMatched = +urlReactor[0][7] === 1 ? true : false;//reactor optimization condition
            readSelection("USEReactorOptimization").checked = reactorRef.weaponMatched;
            globalRecords.currentDisplayMode = +urlReactor[0][8] ?? 1;

            readSelection("reactorLevelSlider").value = +urlReactor[0][9] ?? 2;
            readSelection("USEReactorUltimate").checked = (+urlReactor[0][10] ?? 1) ? true : false;



            // let bossKeys = Object.keys(bossData);
            // const partsPath = bossData[globalRecords.boss.currentBoss].weaknessKeys;
            // const partsArray = Object.keys(partsPath);
            // displayName

            let bossKeys = Object.keys(bosses);
            let bossDataKeys = Object.keys(bossData);
            // bossData

            globalRecords.boss.currentBoss = bossDataKeys[+`${urlReactor[0][11] || 0}${urlReactor[0][12] || 0}`];

            const partsPath = bossData[globalRecords.boss.currentBoss].weaknessKeys;
            const partsArray = Object.keys(partsPath);

            globalRecords.boss.currentBossPart = partsArray[+`${urlReactor[0][13] || 0}${urlReactor[0][14] || 0}`];

            // userTriggers.updateSelectedBoss();
            let bossValueRef = bossData[globalRecords.boss.currentBoss].displayName;
            let partValueRef = globalRecords.boss.currentBossPart;

            readSelection("boss").value = bossValueRef;
            userTriggers.updateSelectedBoss();
            
            readSelection("bossPart").value = partValueRef;
            userTriggers.updateSelectedBoss();
            
            // let reactorBossString = `${bossKeys.indexOf(globalRecords.boss.currentBoss).toString().padStart(2,'0')}${partsArray.indexOf(globalRecords.boss.currentBossPart).toString().padStart(2,'0')}`

            if (!urlReactor[1]) {urlReactor[1] = "";}
            if (!urlReactor[2]) {urlReactor[2] = "";}
            reactorRef.subRoll1Value = +urlReactor[1] || 0;
            reactorRef.subRoll2Value = +urlReactor[2] || 0;
            userTriggers.updateReactorSelections(null,null,null,true);
        }

        if (urlWeapon) {
            const weaponRef = globalRecords.weapon;
            const weaponKeys = Object.keys(sniperList);
            const weaponSubKeys = Object.keys(weaponSubstatList);

            urlWeapon = urlWeapon.split(",");

            weaponRef.currentWeapon = weaponKeys[+`${urlWeapon[0][0]}${urlWeapon[0][1]}${urlWeapon[0][2]}`];

            weaponRef.subRoll1 = weaponSubKeys[+`${urlWeapon[0][3]}${urlWeapon[0][4]}`];
            weaponRef.subRoll2 = weaponSubKeys[+`${urlWeapon[0][5]}${urlWeapon[0][6]}`];
            weaponRef.subRoll3 = weaponSubKeys[+`${urlWeapon[0][7]}${urlWeapon[0][8]}`];
            weaponRef.subRoll4 = weaponSubKeys[+`${urlWeapon[0][9]}${urlWeapon[0][10]}`];

            weaponRef.subRoll1Value = +(urlWeapon[1] ?? 0);
            weaponRef.subRoll2Value = +(urlWeapon[2] ?? 0);
            weaponRef.subRoll3Value = +(urlWeapon[3] ?? 0);
            weaponRef.subRoll4Value = +(urlWeapon[4] ?? 0);

            userTriggers.updateSelectedWeapon(false,true);
        }
        if (urlCores) {
          const weaponRef = globalRecords.weapon;
          urlCores = urlCores.split(",");

          let coreRecord = weaponRef.coreArrayRecord;
          let coreKeys = Object.keys(coreStatsReference);

          weaponRef.coreRoll1 = Object.keys(coreStatsReference[coreRecord[0]])[+`${urlCores[0][0] ?? 0}${urlCores[0][1] ?? 0}`];
          weaponRef.coreRoll2 = Object.keys(coreStatsReference[coreRecord[1]])[+`${urlCores[0][2] ?? 0}${urlCores[0][3] ?? 0}`];
          weaponRef.coreRoll3 = Object.keys(coreStatsReference[coreRecord[2]])[+`${urlCores[0][4] ?? 0}${urlCores[0][5] ?? 0}`];
          weaponRef.coreRoll4 = Object.keys(coreStatsReference[coreRecord[3]])[+`${urlCores[0][6] ?? 0}${urlCores[0][7] ?? 0}`];
          weaponRef.coreRoll5 = Object.keys(coreStatsReference[coreRecord[4]])[+`${urlCores[0][8] ?? 0}${urlCores[0][9] ?? 0}`];


          // userTriggers.updateSelectedWeapon(false,true);

          weaponRef.coreRoll1Value = +(urlCores[1] ?? 0);
          weaponRef.coreRoll2Value = +(urlCores[2] ?? 0);
          weaponRef.coreRoll3Value = +(urlCores[3] ?? 0);
          weaponRef.coreRoll4Value = +(urlCores[4] ?? 0);
          weaponRef.coreRoll5Value = +(urlCores[5] ?? 0);

          // console.log(weaponRef.coreRoll1Value)

          userTriggers.updateSelectedWeapon(false,true);
          // console.log(weaponRef.coreRoll1Value)
          //WEAPON CORES
          // let coreRecord = weaponRef.coreArrayRecord;
          // let coreStorageString = "";

          // if (coreRecord) {
          //   for (let i=0;i<5;i++) {
          //     let currentCoreColor = coreRecord[i];
          //     let currentStatObject = coreStatsReference[currentCoreColor];
          //     let currentKeys = Object.keys(currentStatObject);

          //     let currentSubName = weaponRef[`coreRoll${i+1}`];

          //     coreStorageString += currentKeys.indexOf(currentSubName).toString().padStart(2,`0`);
          //   }

          //   urlObject.co.push(+coreStorageString ? coreStorageString : "",
          //     weaponRef.coreRoll1Value != 0 ? weaponRef.coreRoll1Value.toFixed(2) : "",
          //     weaponRef.coreRoll2Value != 0 ? weaponRef.coreRoll2Value.toFixed(2) : "",
          //     weaponRef.coreRoll3Value != 0 ? weaponRef.coreRoll3Value.toFixed(2) : "",
          //     weaponRef.coreRoll4Value != 0 ? weaponRef.coreRoll4Value.toFixed(2) : "",
          //     weaponRef.coreRoll5Value != 0 ? weaponRef.coreRoll5Value.toFixed(2) : ""
          //   )
          // }
        }

        if (urlCharacter) {
          const characterRef = globalRecords.character;
          const characterKeys = Object.keys(characters);
          const augmentKeys = Object.keys(augments);
          const subAttackKeys = Object.keys(subAttacks);
          const characterModKeys = Object.keys(modData);

          urlCharacter = urlCharacter.split(",");

          characterRef.currentCharacter = characterKeys[+`${urlCharacter[0][0]}${urlCharacter[0][1]}`];
          userTriggers.updateSelectedCharacter(true);
          characterRef.currentAbilityBreakdown = +urlCharacter[0][2];
          characterRef.currentAbilityBreakdownID = `damageAbilityIcon${characterRef.currentAbilityBreakdown}`;
          userTriggers.updateSelectedAbilityBreakdown(+characterRef.currentAbilityBreakdown,characterRef.currentAbilityBreakdownID);

          const augString = +`${urlCharacter[0][3]}${urlCharacter[0][4]}${urlCharacter[0][5]}`;
          const subString = +`${urlCharacter[0][6]}${urlCharacter[0][7]}`;
          // characterRef.mods[0] = augmentKeys[augString];//augment
          readSelection(`mod1`).value = augmentKeys[augString];
          userTriggers.updateSelectedMod('1',null,null,true);
          // characterRef.mods[1] = subAttackKeys[subString];//sub module
          readSelection(`mod2`).value = subAttackKeys[subString];
          userTriggers.updateSelectedMod('2',null,null,true);
          
          for (let i=1;i<=10;i++) {
            const newIvalue = i*3;

            const currentModID = +`${urlCharacter[1][newIvalue-3]}${urlCharacter[1][newIvalue-2]}${urlCharacter[1][newIvalue-1]}`;
            if (!characterModKeys[currentModID]) {continue;}

            readSelection(`mod${i+2}`).value = characterModKeys[currentModID];
            userTriggers.updateSelectedMod(`${i+2}`,null,null,true);
          }
        }

        if (urlWeaponMods) {
          const weaponRef2 = globalRecords.weapon;

          urlWeaponMods = urlWeaponMods.split(",");

          const weaponKeys2 = Object.keys(sniperList);
          const weaponSubKeys2 = Object.keys(weaponSubstatList);
          let concatenatedWeapon2 = ``;

          const weaponModsCategory = userTriggers.weaponTypeModList[sniperList[globalRecords.weapon.currentWeapon].ammoType];
          const weaponModsKeys = Object.keys(weaponModsCategory);

          for (let i=1;i<=10;i++) {
            const newIvalue = i*3;

            const currentModID = +`${urlWeaponMods[0][newIvalue-3]}${urlWeaponMods[0][newIvalue-2]}${urlWeaponMods[0][newIvalue-1]}`;
            if (!weaponModsKeys[currentModID]) {continue;}

            readSelection(`mod${20+i}`).value = weaponModsKeys[currentModID];
            userTriggers.updateSelectedMod(`${20+i}`,null,null,true);
          }
        }

        const componentRef = globalRecords.components;
        const setNameKeys = Object.keys(auxiliary);
        if (urlAuxiliary) {
          const auxiliaryRollKeys = Object.keys(auxiliaryRolls);
          urlAuxiliary = urlAuxiliary.split(",");

          readSelection("auxiliary").value = setNameKeys[+`${urlAuxiliary[0][0]}${urlAuxiliary[0][1]}`];
          readSelection("auxiliarySub1").value = auxiliaryRollKeys[+`${urlAuxiliary[0][2]}${urlAuxiliary[0][3]}`];
          readSelection("auxiliarySub2").value = auxiliaryRollKeys[+`${urlAuxiliary[0][4]}${urlAuxiliary[0][5]}`];
          readSelection("auxiliarySub1Value").value = +urlAuxiliary[1] || 0;
          readSelection("auxiliarySub2Value").value = +urlAuxiliary[2] || 0;
          componentRef.auxiliarySub1 = auxiliaryRollKeys[+`${urlAuxiliary[0][2]}${urlAuxiliary[0][3]}`];
          componentRef.auxiliarySub2 = auxiliaryRollKeys[+`${urlAuxiliary[0][4]}${urlAuxiliary[0][5]}`];
          componentRef.auxiliarySub1Value = +urlAuxiliary[1] || 0;
          componentRef.auxiliarySub2Value = +urlAuxiliary[2] || 0;
          // userTriggers.updateComponentSelections();
        }
        if (urlSensor) {
          const sensorRollKeys = Object.keys(sensorRolls);
          urlSensor = urlSensor.split(",");

          readSelection("sensor").value = setNameKeys[+`${urlSensor[0][0]}${urlSensor[0][1]}`];
          readSelection("sensorSub1").value = sensorRollKeys[+`${urlSensor[0][2]}${urlSensor[0][3]}`];
          readSelection("sensorSub2").value = sensorRollKeys[+`${urlSensor[0][4]}${urlSensor[0][5]}`];
          readSelection("sensorSub1Value").value = +urlSensor[1] || 0;
          readSelection("sensorSub2Value").value = +urlSensor[2] || 0;
          componentRef.sensorSub1 = sensorRollKeys[+`${urlSensor[0][2]}${urlSensor[0][3]}`];
          componentRef.sensorSub2 = sensorRollKeys[+`${urlSensor[0][4]}${urlSensor[0][5]}`];
          componentRef.sensorSub1Value = +urlSensor[1] || 0;
          componentRef.sensorSub2Value = +urlSensor[2] || 0;
          // userTriggers.updateComponentSelections();
        }
        if (urlMemory) {
          const memoryRollKeys = Object.keys(memoryRolls);
          urlMemory = urlMemory.split(",");

          readSelection("memory").value = setNameKeys[+`${urlMemory[0][0]}${urlMemory[0][1]}`];
          readSelection("memorySub1").value = memoryRollKeys[+`${urlMemory[0][2]}${urlMemory[0][3]}`];
          readSelection("memorySub2").value = memoryRollKeys[+`${urlMemory[0][4]}${urlMemory[0][5]}`];
          readSelection("memorySub1Value").value = +urlMemory[1] || 0;
          readSelection("memorySub2Value").value = +urlMemory[2] || 0;
          componentRef.memorySub1 = memoryRollKeys[+`${urlMemory[0][2]}${urlMemory[0][3]}`];
          componentRef.memorySub2 = memoryRollKeys[+`${urlMemory[0][4]}${urlMemory[0][5]}`];
          componentRef.memorySub1Value = +urlMemory[1] || 0;
          componentRef.memorySub2Value = +urlMemory[2] || 0;
          // userTriggers.updateComponentSelections();
        }
        if (urlProcessor) {
          const processorRollKeys = Object.keys(processorRolls);
          urlProcessor = urlProcessor.split(",");

          readSelection("processor").value = setNameKeys[+`${urlProcessor[0][0]}${urlProcessor[0][1]}`];
          readSelection("processorSub1").value = processorRollKeys[+`${urlProcessor[0][2]}${urlProcessor[0][3]}`];
          readSelection("processorSub2").value = processorRollKeys[+`${urlProcessor[0][4]}${urlProcessor[0][5]}`];
          readSelection("processorSub1Value").value = +urlProcessor[1] || 0;
          readSelection("processorSub2Value").value = +urlProcessor[2] || 0;
          componentRef.processorSub1 = processorRollKeys[+`${urlProcessor[0][2]}${urlProcessor[0][3]}`];
          componentRef.processorSub2 = processorRollKeys[+`${urlProcessor[0][4]}${urlProcessor[0][5]}`];
          componentRef.processorSub1Value = +urlProcessor[1] || 0;
          componentRef.processorSub2Value = +urlProcessor[2] || 0;
          // userTriggers.updateComponentSelections();
        }
        if (urlAuxiliary || urlSensor || urlMemory || urlProcessor) {userTriggers.updateComponentSelections();}

    //   if (urlSettings) {//SETTINGS/USAGE TOGGLES
    //     urlSettings = urlSettings.split(",");
    //     let generalToggles = manipulateURL.generalToggles;
    //     for (let i=0;i<generalToggles.length;i++) {importSetting(generalToggles[i].Name,urlSettings[0][i]);}
    //     if (urlSettings[1]) {manipulateURL.handleConsumableToggleImports(urlSettings,"greatConcoctionRecords","concoctionsToggleArray",1);}//concoctions
    //     if (urlSettings[2]) {manipulateURL.handleConsumableToggleImports(urlSettings,"greatConsumableRecords","consumablesToggleArray",2);}//quick-use consumables
    //   }
    //   if (urlAdvanced) {//ADVANCED SETTINGS/TOGGLES/VALUES
    //     urlAdvanced = urlAdvanced.split(",");
    //     let nonBooleanValues = manipulateURL.nonBooleanValues;
    //     for (let i=0;i<nonBooleanValues.length;i++) {
    //       if (i===1) {globalRecords.isCoop = urlAdvanced[1];continue;}
    //       readSelection(nonBooleanValues[i].elementValue).value = +urlAdvanced[i];
    //     }
    //     let generalToggles2 = manipulateURL.generalToggles2;
    //     for (let i=0;i<generalToggles2.length;i++) {importSetting(generalToggles2[i].Name,urlAdvanced[urlAdvanced.length-2][i]);}
    //     let generalToggles3 = manipulateURL.generalToggles3;
    //     for (let i=0;i<generalToggles3.length;i++) {globalRecords[generalToggles3[i].Name] = +urlAdvanced[urlAdvanced.length-1][i] ? true : false;}
  
    //     updateFormulas();
    //   }
    // //Last updateFormulas for good measure, if feed exists, to update based on everything done and settings selected
    //   if (feed != "") {
    //     updateFormulas();
    //     manipulateConsumable.updateConsumableCollection("concoction");
    //     manipulateConsumable.updateConsumableCollection("quickUse");
    //   }
    //CHECK SOURCE PARAM IS MISSING, SO WE CAN NOTIFY PEEPS COMING FROM R2TK
      if (urlSource != "s" && feed != "") {
        alert("This build was imported from R2ToolKit, PLEASE READ.\n\nThis calculator extracts precise complex values to help you better understand how a given build works. BUT, by default, everything is calculated: passives you forgot about, mutators you didn't think mattered, etc.\n\nYou MUST turn off anything you don't want factored in, in settings(gear icon), and adjust settings in advanced stats down below, to get accurate numbers. See Help menu(? icon) for info.")
      }
      if (invalidEntries.length) {
        manipulateURL.excludeAlert(invalidEntries);
      }
    },
    //Used in importURLparameters for shorthand checks
    importURLsetting(checkBoxID,arrayIDvalue) {
      if (arrayIDvalue && arrayIDvalue === "1") {
        readSelection(checkBoxID).checked = true;
      }
    },
    //Explicitly for importURLparameters, on handling the generation of a given consumable type's toggle array.
    handleConsumableToggleImports(urlSettings,recordName,toggleName,arrayEntry) {
      let toggleStates = [];
      for (let i=1;i<=globalRecords[recordName].length;i++) {toggleStates.push(urlSettings[arrayEntry][i-1] === "1" ? true : false);}
      userTrigger.consumableToggleStates[toggleName] = [...toggleStates];
    },
    //Used in importURLparameters if an invalid import entry was detected, to notify the user
    excludeAlert(entry) {
      alert(`Item Import(s): "${entry}" read as invalid and excluded from the import.\n\nThis happens because of one or more of following options:\n- Vash or R2TK has the item's name wrong\n- Vash hasn't added the item yet\n- Or you, the user, have manually modified the URL. Don't.\nIf you believe this to be a spelling error, join the discord linked at the bottom of any page, and let Vash know.`)    
    }
  }