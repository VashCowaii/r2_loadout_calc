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
        "trait": [],
        "archetype": [],
        "armor": [],
        "primary": [],
        "melee": [],
        "secondary": [],
        "consumable": [],
        "accessory": [],
        "relic": [],
        "prism": [],
        "settings": [],
        "adv": [],
        "s": ["s"]
      }
      let urlObject = globalRecords.urlObject;
      let traitRecord = globalRecords.greatTraitRecords;
      let pushCondition = manipulateURL.pushedUpdateCondition;
      let exportSetting = manipulateURL.exportURLsetting;
  
      if (isExported) {
        for (i=1;i<=traitRecord.length;i++) {
          let traitName = traitRecord[i-1].name || "";
          let traitLevel = traitRecord[i-1].level || "";
          let concatenated = `${traitName}${traitLevel}`;
          urlObject.trait.push(concatenated)
        }
      }
      else {
        for (i=1;i<=traitRecord.length;i++) {
          let traitName = traitRecord[i-1].name || "";
          let traitID = "00";
          if (traits[traitName].placementID != "00") {traitID = traits[traitName].placementID}
          if (traitID === "00") {continue}
          let traitLevel = traitRecord[i-1].level || "";
          let concatenated = `${traitID}${traitLevel.toString().padStart(2, '0')}`;
          urlObject.trait += concatenated;
        }
      }
  
      let path = globalRecords.archs;
      if (isExported) {urlObject.archetype.push(path.one.class,path.two.class,path.one.ability,path.two.ability);}
      else {
        urlObject.archetype = "";
        if (classInfo[path.one.class].placementID != "00") {urlObject.archetype += classInfo[path.one.class].placementID + classInfo[path.one.class].abilities[path.one.ability].placementID;}
        if (classInfo[path.two.class].placementID != "00") {urlObject.archetype += classInfo[path.two.class].placementID + classInfo[path.two.class].abilities[path.two.ability].placementID;}
      }
  
      // path = globalRecords.armor;
      const {helmet,chest,leg,hand} = globalRecords.armor;
      if (isExported) {urlObject.armor.push(helmet,chest,leg,hand);}
      else {
        urlObject.armor = "";
        if (helmets[helmet].placementID != "H00") {urlObject.armor += helmets[helmet].placementID}
        if (chests[chest].placementID != "C00") {urlObject.armor += chests[chest].placementID}
        if (legs[leg].placementID != "L00") {urlObject.armor += legs[leg].placementID}
        if (hands[hand].placementID != "G00") {urlObject.armor += hands[hand].placementID}
      }
  
      const {primary,primaryMutator,primaryMod,melee,meleeMutator,secondary,secondaryMutator,secondaryMod} = globalRecords.weapons;
      if (isExported) {
        urlObject.primary.push(primary,primaryMutator,primaryMod);
        urlObject.melee.push(melee,meleeMutator);
        urlObject.secondary.push(secondary,secondaryMutator,secondaryMod);
      }
      else {
        urlObject.primary.push(pushCondition(primaries[primary].placementID,"00"));
        urlObject.primary.push(pushCondition(rangedMutators[primaryMutator].placementID,"00"));
        if (primaries[primary].builtIN === "") {urlObject.primary.push(pushCondition(rangedMods[primaryMod].placementID,"00"));}

        urlObject.melee.push(pushCondition(melees[melee].placementID,"00"));
        urlObject.melee.push(pushCondition(meleeMutators[meleeMutator].placementID,"00"));

        urlObject.secondary.push(pushCondition(secondaries[secondary].placementID,"00"));
        urlObject.secondary.push(pushCondition(rangedMutators[secondaryMutator].placementID,"00"));
        if (secondaries[secondary].builtIN === "") {urlObject.secondary.push(pushCondition(rangedMods[secondaryMod].placementID,"00"));}
      }
  
      if (isExported) {
        path = globalRecords.greatConcoctionRecords;
        for (i=0;i<path.length;i++) {urlObject.consumable.push(path[i])}
        path = globalRecords.greatConsumableRecords;
        for (i=0;i<path.length;i++) {urlObject.consumable.push(path[i])}
      }
      else {
        urlObject.consumable = "";
        path = globalRecords.greatConcoctionRecords;
        for (i=0;i<path.length;i++) {if (concoctions[path[i]].placementID != "C00") {urlObject.consumable += concoctions[path[i]].placementID}}
        path = globalRecords.greatConsumableRecords;
        if (globalRecords.greatConsumableRecords[0] != undefined) {
          for (i=0;i<path.length;i++) {
            if (quickUses[path[i]].placementID != "Q00") {urlObject.consumable += quickUses[path[i]].placementID}}
        }
      }
  
      path = globalRecords.accessories;
      if (isExported) {
        urlObject.accessory.push(path.amulet);
        for (i=1;i<=4;i++) {urlObject.accessory.push(path[`ring${i}`]);}
      }
      else {
        urlObject.accessory = "";
        if (amulets[path.amulet].placementID != "A000") {urlObject.accessory += amulets[path.amulet].placementID}
        for (i=1;i<=4;i++) {if (rings[path[`ring${i}`]].placementID != "R000") {urlObject.accessory += rings[path[`ring${i}`]].placementID}}
      }
      
  
      if (isExported) {urlObject.relic.push(path.relic);}
      else {
        urlObject.relic = "";
        if (relics[path.relic].placementID != "r00") {urlObject.relic += relics[path.relic].placementID}
      }

      path = globalRecords.greatRowRecords;
      if (isExported) {
        for (i=1;i<=9;i++) {
          urlObject.prism.push(path[i-1].name);
        }
      }
      else {
        urlObject.prism = "";
        for (i=1;i<=9;i++) {
          let categoryRef = i===9 ? legendaryPerks : prismRowOptions;

          let usableID = categoryRef[path[i-1].name].placementID;
          let displayedID = usableID;
          if (i>3 && (usableID.charAt(0) === "R" || usableID.charAt(0) === "Y" || usableID.charAt(0) === "B")) {
            displayedID = displayedID.charAt(0).toLowerCase() + displayedID.slice(1);
          }
          if (categoryRef[path[i-1].name].placementID != "F00" && categoryRef[path[i-1].name].placementID != "L00") {urlObject.prism += displayedID}
        }
      }



  
      urlObject.settings = ["","",""]//0 is general gear, 1 is concoctions, 2 is quick-use items
      manipulateURL.updateGeneralToggles(isOverride);
      let generalToggles = manipulateURL.generalToggles;
      for (let entry of generalToggles) {exportSetting(entry.Name,"settings",isOverride,entry.expAlt,entry.arrayEntry);}
      for (let i=0;i<urlObject.settings.length;i++) {globalRecords.urlObject.settings[i] = globalRecords.urlObject.settings[i].replace(/\.?0+$/, '');}//cut off trailing 0's to shorten URL

      let nonBooleanValues = manipulateURL.nonBooleanValues;
      let pushNonBooleans = manipulateURL.advPathHandling;
      for (let entry of nonBooleanValues) {pushNonBooleans(globalRecords.urlObject,entry,isOverride);}

      let generalToggles2 = manipulateURL.generalToggles2; urlObject.adv.push("");//Adds a blank string as a new entry. exportSetting on an ADV string looks at the last entry possible, aka this string we just pushed, and modifies that. Order matters here.
      for (let entry of generalToggles2) {exportSetting(entry.Name,"adv",isOverride,entry.expAlt);}
      urlObject.adv[urlObject.adv.length-1] = urlObject.adv[urlObject.adv.length-1].replace(/\.?0+$/, '');//remove trailing 0's from the last parameter, helps clear the URL length if no adv settings are active

      let generalToggles3 = manipulateURL.generalToggles3; urlObject.adv.push("");
      for (let entry of generalToggles3) {exportSetting(entry.Name,"adv",isOverride,entry.expAlt);}
  
      //Delete a given parameter if it stores no values, to reduce URL length
      const clearEmpty = manipulateURL.urlParamIsEmpty;
      const urlParamKeys = Object.keys(urlObject);
      for (let param of urlParamKeys) {clearEmpty(param);}
  
      if (isExported != true) {
        decoded = new URLSearchParams(urlObject).toString().replace(/%2C/g, ',');
        const newUrl = `${window.location.origin}/Remnant2/Calculator/?${decoded}`;
  
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
      let urlTraits = feed.get("trait");
      let urlArchs = feed.get("archetype");
      let urlArmor = feed.get("armor");
      let urlPrimary = feed.get("primary");
      let urlMelee = feed.get("melee");
      let urlSecondary = feed.get("secondary");
      let urlConcoctions = feed.get("consumable");
      let urlAccessory = feed.get("accessory");
      let urlRelic = feed.get("relic");
      let urlPrism = feed.get("prism");
      let urlSettings = feed.get("settings");
      let urlAdvanced = feed.get("adv");
      let urlSource = feed.get("s");
      let urlRedirect = feed.get("redirect");
      if (urlRedirect) {alert("You were redirected here, presumably because you used an old link. The site structure has changed, and you'll only see this if you used an older link but in theory you should never see it again.")}

      let invalidEntries = [];
      let importSetting = manipulateURL.importURLsetting;
    //TRAITS
      if (urlTraits) {
        const letterPattern = /[a-zA-Z]/;
        letterPattern.test(urlTraits)
        let isActuallyNumbers = !letterPattern.test(urlTraits);
  
        if (isActuallyNumbers) {
          for (let i=0;i<urlTraits.length;i += 4) {
            let itemID = urlTraits.charAt(i) + urlTraits.charAt(i+1);
            let itemLevel = urlTraits.charAt(i+2) + urlTraits.charAt(i+3);
  
              armorKeys = Object.keys(traits)
              for (let key of armorKeys) {
                if (traits[key].placementID === itemID) {
                  traitLevel = Math.min(+itemLevel, 10);//If an import level is greater than 10, reduce to 10
                  manipulateTrait.modifyTraitRecord("create",0,key,+itemLevel);//Don't need to check for less than 0, or round. A decimal or a - would be invalid.
                  break;
                }
              }
          }
        }
        else {
          urlTraits = urlTraits.split(",")
          for (traitors of urlTraits) {
              let traitLevel = traitors.replace(/[^0-9]/g,"");
              let traitName = traitors.replace(/[0-9]/g,"");
              if (!traits[traitName]) {invalidEntries.push(traitName);}//If the trait name was read invalid, push the name to invalidEntries to display later
              else if (traitName){
                traitLevel = Math.min(traitLevel, 10);//If an import level is greater than 10, reduce to 10
                manipulateTrait.modifyTraitRecord("create",0,traitName,traitLevel);//Don't need to check for less than 0, or round. A decimal or a - would be invalid.
              }
          }
        }
      }
      manipulateTrait.updateTraitCollection();//This needs to get called regardless of null or not, to generate first trait box
      //We call it before archs so when archs ARE called, they can factor default points into the trait math.
      if (urlArchs) {//ARCHETYPES AND ABILITIES
        const letterPattern = /[a-zA-Z]/;
        letterPattern.test(urlArchs)
        let isActuallyNumbers = !letterPattern.test(urlArchs);
  
        if (isActuallyNumbers) {
          for (let i=0;i<urlArchs.length;i += 3) {
            let itemID = urlArchs.charAt(i) + urlArchs.charAt(i+1);
            let ability = Math.min(3,+urlArchs.charAt(i+2)).toString();
  
              armorKeys = Object.keys(classInfo)
              for (let key of armorKeys) {
                if (classInfo[key].placementID === itemID) {
  
                  if (readSelection("archetype1").value === "") {
                    readSelection("archetype1").value = key;
                    userTrigger.updateArchetype('archetype','1',true);
  
                    abilityKey = Object.keys(classInfo[key].abilities);
                    for (let keys of abilityKey) {
                      if (classInfo[key].abilities[keys].placementID === ability) {
                        readSelection("archetype1ability").value = keys;
                        userTrigger.updateAbility('archetype1',true);
                        break;
                      }
                    }
                  }
                  else {
                    readSelection("archetype2").value = key;
                    userTrigger.updateArchetype('archetype','2',true);
  
                    abilityKey = Object.keys(classInfo[key].abilities);
                    for (let keys of abilityKey) {
                      if (classInfo[key].abilities[keys].placementID === ability) {
                        readSelection("archetype2ability").value = keys;
                        userTrigger.updateAbility('archetype2',true);
                        break;
                      }
                    }
                  }
                  break;
                }
              }
          }
        }
        else {
          urlArchs = urlArchs.split(",");
          //Check arch1 and ability
          if (classInfo[urlArchs[0]] === undefined) {invalidEntries.push(urlArchs[0]);}
          else if (urlArchs[0]) {
            readSelection("archetype1").value = urlArchs[0];
            userTrigger.updateArchetype('archetype','1',true);
            if (classInfo[urlArchs[0]].abilities[urlArchs[2]] === undefined) {invalidEntries.push(urlArchs[2]);}
            else if (urlArchs[2]) {
              readSelection("archetype1ability").value = urlArchs[2];
              userTrigger.updateAbility('archetype1',true);
            }
          }
          //Check arch2 and ability
          if (classInfo[urlArchs[1]] === undefined) {invalidEntries.push(urlArchs[1]);}
          else if (urlArchs[1]) {
            readSelection("archetype2").value = urlArchs[1];
            //note that parent is true here but not on arch 1. Arch 1 populates default trait points for non classtraits, 2 does not, not needed.
            userTrigger.updateArchetype('archetype','2',true);
            if (classInfo[urlArchs[1]].abilities[urlArchs[3]] === undefined) {invalidEntries.push(urlArchs[3]);}
            else if (urlArchs[3]) {
              readSelection("archetype2ability").value = urlArchs[3];
              userTrigger.updateAbility('archetype2',true);
            }
          }
        }
      }
      // manipulateTrait.updateTraitCollection();
      // manipulateTrait.pointsOverLimit();//Trim points if cap exceeded
      if (urlArmor) {//ARMOR
        let hasMultipleOld = urlArmor.includes(",") || urlArmor.includes(" ");
        let isActuallyNumbers = !hasMultipleOld && urlArmor.length % 3 === 0 
          && (urlArmor.charAt(0) === "H" || urlArmor.charAt(0) === "C" || urlArmor.charAt(0) === "L" || urlArmor.charAt(0) === "G");
  
        if (isActuallyNumbers) {
          for (let i=0;i<urlArmor.length;i += 3) {
            let itemHeader = urlArmor.charAt(i);
            let itemID = urlArmor.charAt(i) + urlArmor.charAt(i+1) + urlArmor.charAt(i+2);
  
            switch (itemHeader) {
              case "H": 
                armorKeys = Object.keys(helmets)
                for (let key of armorKeys) {
                  if (helmets[key].placementID === itemID) {
                    readSelection("helmetChoice").value = key;
                    userTrigger.updateArmor('helmet',true);
                    break;
                  }
                }
                break;
              case "C": 
                armorKeys = Object.keys(chests)
                for (let key of armorKeys) {
                  if (chests[key].placementID === itemID) {
                    readSelection("chestChoice").value = key;
                    userTrigger.updateArmor('chest',true);
                    break;
                  }
                }
                break;
              case "L": 
                armorKeys = Object.keys(legs)
                for (let key of armorKeys) {
                  if (legs[key].placementID === itemID) {
                    readSelection("legChoice").value = key;
                    userTrigger.updateArmor('leg',true);
                    break;
                  }
                }
                break;
              case "G": 
                armorKeys = Object.keys(hands)
                for (let key of armorKeys) {
                  if (hands[key].placementID === itemID) {
                    readSelection("handChoice").value = key;
                    userTrigger.updateArmor('hand',true);
                    break;
                  }
                }
                break;
            }
          }
        }
        else {
          urlArmor = urlArmor.split(",");
          if (helmets[urlArmor[0]] === undefined) {invalidEntries.push(urlArmor[0]);}
          else if (urlArmor[0]) {
            readSelection("helmetChoice").value = urlArmor[0];
            userTrigger.updateArmor('helmet',true);
          }
          if (chests[urlArmor[1]] === undefined) {invalidEntries.push(urlArmor[1]);}
          else if (urlArmor[1]) {
            readSelection("chestChoice").value = urlArmor[1];
            userTrigger.updateArmor('chest',true);
          }
          if (legs[urlArmor[2]] === undefined) {invalidEntries.push(urlArmor[2]);}
          else if (urlArmor[2]) {
            readSelection("legChoice").value = urlArmor[2];
            userTrigger.updateArmor('leg',true);
          }
          if (hands[urlArmor[3]] === undefined) {invalidEntries.push(urlArmor[3]);}
          else if (urlArmor[3]) {
            readSelection("handChoice").value = urlArmor[3];
            userTrigger.updateArmor('hand',true);
          }
        }
      }
      if (urlRelic) {//RELIC AND FRAGMENTS
        let hasMultipleOld = urlRelic.includes(",") || urlRelic.includes(" ");
        let isActuallyNumbers = !hasMultipleOld && urlRelic.length % 3 === 0 
          && (urlRelic.charAt(0) === "r");
  
        if (isActuallyNumbers) {
          for (let i=0;i<urlRelic.length;i += 3) {
            let itemHeader = urlRelic.charAt(i);
            let itemID = urlRelic.charAt(i) + urlRelic.charAt(i+1) + urlRelic.charAt(i+2);
  
  
            if (itemHeader === "r") {
              armorKeys = Object.keys(relics)
                for (let key of armorKeys) {
                  if (relics[key].placementID === itemID) {
                    readSelection("relic").value = key;
                    userTrigger.updateAccessory('relic',"",true);
                    break;
                  }
                }
            }
          }
        }
        else {
          urlRelic = urlRelic.split(",");
          if (relics[urlRelic[0]] === undefined) {invalidEntries.push(urlRelic[0]);}
          else if (urlRelic[0]) {
            readSelection("relic").value = urlRelic[0];
            userTrigger.updateAccessory('relic',"",true);
          }
        }
      }
      if (urlPrism) {
        let hasMultipleOld = urlPrism.includes(",") || urlPrism.includes(" ");
        let isActuallyNumbers = !hasMultipleOld && urlPrism.length % 3 === 0 
          && (urlPrism.charAt(0) === "F" || urlPrism.charAt(0) === "R" || urlPrism.charAt(0) === "Y" || urlPrism.charAt(0) === "B" || urlPrism.charAt(0) === "L" 
          || urlPrism.charAt(0) === "C" || urlPrism.charAt(0) === "r" || urlPrism.charAt(0) === "y" || urlPrism.charAt(0) === "b");


          if (isActuallyNumbers) {
            for (let i=0;i<urlPrism.length;i += 3) {
              let itemHeader = urlPrism.charAt(i);
              let itemID = urlPrism.charAt(i) + urlPrism.charAt(i+1) + urlPrism.charAt(i+2);
    
    
              if (itemHeader === "R" || itemHeader === "Y" || itemHeader === "B") {
                armorKeys = Object.keys(prismRowOptions)
                for (let key of armorKeys) {
                  if (prismRowOptions[key].placementID === itemID) {
    
                    for (let x=1;x<=3;x++) {
                      if (globalRecords.greatRowRecords[x-1].name === "") {
                        readSelection(`PrismRow${x}`).value = key;
                        plannerTrigger.updateRow(x);
                        break;
                      }
                    }
                    break;
                  }
                }
              }
              else if (itemHeader === "C" || itemHeader === "r" || itemHeader === "y" || itemHeader === "b") {
                armorKeys = Object.keys(prismRowOptions);
                itemID = itemID.charAt(0).toUpperCase() + itemID.slice(1);
                for (let key of armorKeys) {

                  if (prismRowOptions[key].placementID === itemID) {
    
                    for (let x=4;x<=8;x++) {
                      if (globalRecords.greatRowRecords[x-1].name === "") {
                        readSelection(`PrismRow${x}`).value = key;
                        plannerTrigger.updateRow(x);
                        break;
                      }
                    }
                    break;
                  }
                }
              }
              else if (itemHeader === "L") {
                armorKeys = Object.keys(legendaryPerks);
                for (let key of armorKeys) {
                  if (legendaryPerks[key].placementID === itemID) {
                    readSelection("PrismRow9").value = key;
                    plannerTrigger.updateRow(9);
                    break;
                  }
                }
              }
            }
          }
          else {
            urlPrism = urlPrism.split(",");
            for (let i=1;i<=9;i++) {
              if (i<9 && prismRowOptions[urlPrism[i-1]] === undefined) {invalidEntries.push(urlPrism[i-1]);}
              else if (i===9 && legendaryPerks[urlPrism[i-1]] === undefined) {invalidEntries.push(urlPrism[i-1]);}
              else if (urlPrism[i-1]) {
                readSelection(`PrismRow${i}`).value = urlPrism[i-1];
                plannerTrigger.updateRow(i);
              }
            }
          }
      }
      manipulateTrait.pointsOverLimit();//Trim points if cap exceeded
      // userTrigger.updateTrait(null,null,false);
      if (urlPrimary) {//WEAPONS
        const letterPattern = /[a-zA-Z]/;
        letterPattern.test(urlPrimary)
        let isActuallyNumbers = !letterPattern.test(urlPrimary);
  
        urlPrimary = urlPrimary.split(",");
  
        if (isActuallyNumbers) {
          armorKeys = Object.keys(primaries)
          for (let key of armorKeys) {
            if (primaries[key].placementID === urlPrimary[0]) {
              readSelection("primary").value = key;
              userTrigger.updateWeapon('primary',true);
              break;
            }
          }
          armorKeys = Object.keys(rangedMutators)
          for (let key of armorKeys) {
            if (rangedMutators[key].placementID === urlPrimary[1]) {
              readSelection("rangedMutator1").value = key;
              userTrigger.updateMutator('rangedMutator','1',true);
              break;
            }
          }
          if (primaries[readSelection("primary").value].builtIN === "") {
            armorKeys = Object.keys(rangedMods)
            for (let key of armorKeys) {
              if (rangedMods[key].placementID === urlPrimary[2]) {
                readSelection("rangedMod1").value = key;
                userTrigger.updateMod('rangedMod','1',true);
                break;
              }
            }
          }
        }
        else {
          if (primaries[urlPrimary[0]] === undefined) {invalidEntries.push(urlPrimary[0]);}
          else if (urlPrimary[0]) {
            readSelection("primary").value = urlPrimary[0];
            userTrigger.updateWeapon('primary',true);
          }
          if (rangedMutators[urlPrimary[1]] === undefined) {invalidEntries.push(urlPrimary[1]);}
          else if (urlPrimary[1]) {
            readSelection("rangedMutator1").value = urlPrimary[1];
            userTrigger.updateMutator('rangedMutator','1',true);
          }
          if (rangedMods[urlPrimary[2]] === undefined && primaries[urlPrimary[0]].builtIN === "") {invalidEntries.push(urlPrimary[2]);}
          else if (urlPrimary[2]) {
            readSelection("rangedMod1").value = urlPrimary[2];
            userTrigger.updateMod('rangedMod','1',true);
          }
        }
      }
      if (urlMelee) {
        const letterPattern = /[a-zA-Z]/;
        letterPattern.test(urlMelee)
        let isActuallyNumbers = !letterPattern.test(urlMelee);
  
        urlMelee = urlMelee.split(",");
  
        if (isActuallyNumbers) {
          armorKeys = Object.keys(melees)
          for (let key of armorKeys) {
            if (melees[key].placementID === urlMelee[0]) {
              readSelection("melee").value = key;
              userTrigger.updateWeapon('melee',true);
              break;
            }
          }
          armorKeys = Object.keys(meleeMutators)
          for (let key of armorKeys) {
            if (meleeMutators[key].placementID === urlMelee[1]) {
              readSelection("meleeMutator").value = key;
              userTrigger.updateMutator('meleeMutator',"",true);
              break;
            }
          }
        }
        else {
          if (melees[urlMelee[0]] === undefined) {invalidEntries.push(urlMelee[0]);}
          else if (urlMelee[0]) {
            readSelection("melee").value = urlMelee[0];
            userTrigger.updateWeapon('melee',true);
          }
          if (meleeMutators[urlMelee[1]] === undefined) {invalidEntries.push(urlMelee[1]);}
          else if (urlMelee[1]) {
            readSelection("meleeMutator").value = urlMelee[1];
            userTrigger.updateMutator('meleeMutator',"",true);
          }
        }
      }
      if (urlSecondary) {
        const letterPattern = /[a-zA-Z]/;
        letterPattern.test(urlSecondary)
        let isActuallyNumbers = !letterPattern.test(urlSecondary);
  
        urlSecondary = urlSecondary.split(",");
  
        if (isActuallyNumbers) {
          armorKeys = Object.keys(secondaries)
          for (let key of armorKeys) {
            if (secondaries[key].placementID === urlSecondary[0]) {
              readSelection("secondary").value = key;
              userTrigger.updateWeapon('secondary',true);
              break;
            }
          }
          armorKeys = Object.keys(rangedMutators)
          for (let key of armorKeys) {
            if (rangedMutators[key].placementID === urlSecondary[1]) {
              readSelection("rangedMutator2").value = key;
              userTrigger.updateMutator('rangedMutator','2',true);
              break;
            }
          }
          if (secondaries[readSelection("secondary").value].builtIN === "") {
            armorKeys = Object.keys(rangedMods)
            for (let key of armorKeys) {
              if (rangedMods[key].placementID === urlSecondary[2]) {
                readSelection("rangedMod2").value = key;
                userTrigger.updateMod('rangedMod','2',true);
                break;
              }
            }
          }
        }
        else {
          if (secondaries[urlSecondary[0]] === undefined) {invalidEntries.push(urlSecondary[0]);}
          else if (urlSecondary[0]) {
            readSelection("secondary").value = urlSecondary[0];
            userTrigger.updateWeapon('secondary',true);
          }
          if (rangedMutators[urlSecondary[1]] === undefined) {invalidEntries.push(urlSecondary[1]);}
          else if (urlSecondary[1]) {
            readSelection("rangedMutator2").value = urlSecondary[1];
            userTrigger.updateMutator('rangedMutator','2',true);
          }
          if (rangedMods[urlSecondary[2]] === undefined && secondaries[urlSecondary[0]].builtIN === "") {invalidEntries.push(urlSecondary[2]);}
          else if (urlSecondary[2]) {
            readSelection("rangedMod2").value = urlSecondary[2];
            userTrigger.updateMod('rangedMod','2',true);
          }
        }
      }
      if (urlAccessory) {//AMULET AND RINGS
        let hasMultipleOld = urlAccessory.includes(",") || urlAccessory.includes(" ");
        let isActuallyNumbers = !hasMultipleOld && urlAccessory.length % 4 === 0 
          && (urlAccessory.charAt(0) === "A" || urlAccessory.charAt(0) === "R");
  
        if (isActuallyNumbers) {
          for (let i=0;i<urlAccessory.length;i += 4) {
            let itemHeader = urlAccessory.charAt(i);
            let itemID = urlAccessory.charAt(i) + urlAccessory.charAt(i+1) + urlAccessory.charAt(i+2) + urlAccessory.charAt(i+3);
  
            switch (itemHeader) {
              case "A": 
                armorKeys = Object.keys(amulets)
                for (let key of armorKeys) {
                  if (amulets[key].placementID === itemID) {
                    readSelection("amulet").value = key;
                    userTrigger.updateAccessory('amulet',null,true);
                    break;
                  }
                }
                break;
              case "R": 
                armorKeys = Object.keys(rings)
                for (let key of armorKeys) {
                  if (rings[key].placementID === itemID) {
  
                    for (let x=1;x<=4;x++) {
                      if (globalRecords.accessories[`ring${x}`] === "") {
                        readSelection(`ring${x}`).value = key;
                        userTrigger.updateAccessory('ring',x,true);
                        break;
                      }
                    }
                    break;
                  }
                }
                break;
            }
          }
        }
        else {
          urlAccessory = urlAccessory.split(",");
          if (amulets[urlAccessory[0]] === undefined) {invalidEntries.push(urlAccessory[0]);}
          else if (urlAccessory[0]) {
            readSelection("amulet").value = urlAccessory[0];
            userTrigger.updateAccessory('amulet',null,true);
          }
          for (let i=1;i<=4;i++) {
            if (rings[urlAccessory[i]] === undefined) {invalidEntries.push(urlAccessory[i]);}
            else if (urlAccessory[i]) {
              readSelection(`ring${i}`).value = urlAccessory[i];
              userTrigger.updateAccessory('ring',i,true);
            }
          }
        }
      }
      if (urlConcoctions) {//CONCOCTIONS AND QUICK USE CONSUMABLES
        updateFormulas();//Needed to update concoction limit
        manipulateConsumable.updateConsumableCollection("concoction");//Needed to establish concoction boxes
  
        let hasMultipleOld = urlConcoctions.includes(",") || urlConcoctions.includes(" ");
        let isActuallyNumbers = !hasMultipleOld && urlConcoctions.length % 3 === 0 
          && (urlConcoctions.charAt(0) === "C" || urlConcoctions.charAt(0) === "Q");
  
        if (isActuallyNumbers) {
          for (let i=0;i<urlConcoctions.length;i += 3) {
            let itemHeader = urlConcoctions.charAt(i);
            let itemID = urlConcoctions.charAt(i) + urlConcoctions.charAt(i+1) + urlConcoctions.charAt(i+2);
  
            switch (itemHeader) {
              case "C": 
                armorKeys = Object.keys(concoctions)
                for (let key of armorKeys) {
                  if (concoctions[key].placementID === itemID) {globalRecords.greatConcoctionRecords.push(key);break;}
                }
                break;
              case "Q": 
                armorKeys = Object.keys(quickUses)
                for (let key of armorKeys) {
                  if (quickUses[key].placementID === itemID) {globalRecords.greatConsumableRecords.push(key);break;}
                }
                break;
            }
          }
        }
        else {
          urlConcoctions = urlConcoctions.split(",");
          //Read the consumables param, and push to either concoctions or quick-use arrays, or invalid param notify
          for (let i=0;i<urlConcoctions.length;i++) {
            let current = urlConcoctions[i];
            if (concoctions[current] && current) {globalRecords.greatConcoctionRecords.push(current)}
            else if (quickUses[current] && current) {globalRecords.greatConsumableRecords.push(current)}
            else if (current) {invalidEntries.push(current);}//Notify user if invalid
          }
        }
  
        //Concoctions
        for (let i=0;i<globalRecords.greatConcoctionRecords.length && i<=globalRecords.totalConcLimit;i++) {
          readSelection(`concoction${i+1}`).value = globalRecords.greatConcoctionRecords[i];
          userTrigger.updateConsumable('concoction',i+1,true);
        }
        //Quick-use consumables
        manipulateConsumable.updateConsumableCollection("quickUse");//Needed to establish quick-use boxes
        for (let i=0;i<globalRecords.greatConsumableRecords.length;i++) {
          readSelection(`quickUse${i+1}`).value = globalRecords.greatConsumableRecords[i];
          userTrigger.updateConsumable('quickUse',i+1,true);
        }
      }
      manipulateURL.updateGeneralToggles();

      if (urlSettings) {//SETTINGS/USAGE TOGGLES
        urlSettings = urlSettings.split(",");
        let generalToggles = manipulateURL.generalToggles;
        for (let i=0;i<generalToggles.length;i++) {importSetting(generalToggles[i].Name,urlSettings[0][i]);}
        if (urlSettings[1]) {manipulateURL.handleConsumableToggleImports(urlSettings,"greatConcoctionRecords","concoctionsToggleArray",1);}//concoctions
        if (urlSettings[2]) {manipulateURL.handleConsumableToggleImports(urlSettings,"greatConsumableRecords","consumablesToggleArray",2);}//quick-use consumables
      }
      if (urlAdvanced) {//ADVANCED SETTINGS/TOGGLES/VALUES
        urlAdvanced = urlAdvanced.split(",");
        let nonBooleanValues = manipulateURL.nonBooleanValues;
        for (let i=0;i<nonBooleanValues.length;i++) {
          if (i===1) {globalRecords.isCoop = urlAdvanced[1];continue;}
          readSelection(nonBooleanValues[i].elementValue).value = +urlAdvanced[i];
        }
        let generalToggles2 = manipulateURL.generalToggles2;
        for (let i=0;i<generalToggles2.length;i++) {importSetting(generalToggles2[i].Name,urlAdvanced[urlAdvanced.length-2][i]);}
        let generalToggles3 = manipulateURL.generalToggles3;
        for (let i=0;i<generalToggles3.length;i++) {globalRecords[generalToggles3[i].Name] = +urlAdvanced[urlAdvanced.length-1][i] ? true : false;}
  
        updateFormulas();
      }
    //Last updateFormulas for good measure, if feed exists, to update based on everything done and settings selected
      if (feed != "") {
        updateFormulas();
        manipulateConsumable.updateConsumableCollection("concoction");
        manipulateConsumable.updateConsumableCollection("quickUse");
      }
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