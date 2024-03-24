const starterTable = {
  "Health": 0,"Health%": 0,"GlobalHealthModifier": 1,
  "SummonHealth%": 0,
  "Armor": 0,"Armor%": 0,
  "FlatDR": 0,
  "Bulwark": 0,
  "REdamage": [],"DMGKept": [],
  "SelfDamageModifier": 0,
  "RelicSpeed": 0,"RelicEFF": 0,
  "HealingEFF": 0,"GlobalHealingEff": 1,
  "HP/S+": 0,
  "HP/S%": 0,
  "RelicHPbase": 0,"RelicHPtype": 0,"RelicHPtime": 0,
  "RelicCharges": 0,"RelicCharges%": 0,"RelicChargesOverride": 0,
  "ConsumableDuration": 0,
  "GreyHP/S+": 0,"GreyHPHitThreshold": 0,
  "Stamina": 0,
  "Stamina%": 0,
  "Stamina/S+": 0,"Stamina/S+Multi": 0,
  "StaminaCost": 0,"EvadeCost": 0,
  "StaminaNegation": 0,
  "StaminaPenaltyAdjustment": 0,
  "EvadeSpeed": 0,"EvadeDistance": 0,"iFrames": 0,"iFrameWindow": 0,
  "ShieldEFF": 0,"Shield": 0,"Shield%/S": 0,
  "Lifesteal": 0,"MLifesteal": 0,"RLifesteal": 0,"MChargedLifeSteal": 0,
  "Encumbrance": 0,"Encumbrance%": 0,"WeightThreshold": 0,
  "Bleed": 0,"Bleed%": 0,
  "Burn": 0,"Burn%": 0,
  "Shock": 0,"Shock%": 0,
  "Corrosive": 0,"Corrosive%": 0,
  "Blight": 0,"Blight%": 0,
  "GreyHP/S%": 0,
  "HealingModifiers": 0,
  "ConcLimit": 0,
  "Endurance": 0,"Expertise": 0,"Spirit": 0,"Vigor": 0,
  "AllDamage": 0,"MeleeDamage": 0,"BackstepDamage": 0,
  "MeleeSpecialAbilityCharge": 0,"MeleeSpecialAbilityDamage": 0,
  "ExplosionDamage": 0,"CorrosiveDamage": 0,"AcidDamage": 0,
  "FistDamage": 0,"StaggerDamage": 0,
  "StatusDamage": 0,"ModDamage": 0,"ElementalDamage": 0,"ShockDamage": 0,"OverloadedDamage": 0,
  "StatusDuration": 0,
  "MeleeStatusDamage": 0,
  "BurningDamage": 0,"FireDamage": 0,
  "UniqueMulti": [],
  "AllCritChance": 0,"MeleeCritChance": 0,"RangedCritChance": 0,"SkillCritChance": 0,"ModCritChance": 0,"ExplosiveCritChance": 0,"FirearmCritChance": 0,"BowCritChance": 0,
  "PrimaryCritChance": 0,"SecondaryCritChance": 0,
  "AllCritDamage": 0,"MeleeCritDamage": 0,"RangedCritDamage": 0,
  "AllWeakspot": 0,"SkillWeakspot": 0,"ModWeakspot": 0,"RangedWeakspot": 0,"MeleeWeakspot": 0,
  "HASTE": 0,"SLOW": 0,
  "AttackSpeed": 0,"ChargeSpeed": 0,"ChargeCost": 0,"ChargeCritChance": 0,"ChargeDamage": 0,
  "FireRate": 0,"ReloadSpeed": 0,"WeaponSwapSpeed": 0,
  "ModSpeed": 0,"CastSpeed": 0,
  "CDR": 0,
  "ModPowerGen/s": 0,"ModPowerGen": 0,"ModCost": 0,
  "ModPowerGenCrit": 0,"ModPowerGenWeakspot": 0,"ModPowerGenMelee": 0,"ModPowerGenElemental": 0,
  "ModDuration": 0,"SkillDuration": 0,
  "Recoil": 0,"Range": 0,"Range%": 0,"Spread": 0,"SpreadRecovery": 0,"Sway": 0,
  "ProjectileSpeed": 0,"WeaponChargeTime": 0,
  "MovementSpeed": 0,"EnvMovementSpeed": 0,"AimMovementSpeed": 0,
  "Reserves": 0,"ReservesMulti": 0,
}
const tableReset = JSON.stringify(starterTable);
let greatTableKnowerOfAll = JSON.parse(tableReset);
//Shorthand for selecting an element by ID. Follow up with .value or .innerHTML
function readSelection(elemID) {
  let selectedValue = document.getElementById(elemID);
  return selectedValue;
}
/* ---------------------------------------------------------------------------------------- */
/* ------ Shorthand functions used to actually define the HTML to be injected ------------- */
/* ---------------------------------------------------------------------------------------- */
let createHTML = {
  //Defines the traitbox elements that get put into traitsMegaBox
  traitBox(elemID) {
    return `<div class="traitContainer">
              <button type="button" class="traitButton" onclick="userTrigger.updateTrait(${elemID},'-')" id="traitButtonMinus${elemID}">-</button>
              <div class="traitLineHolder">
                  <div class="traitNameHolder">
                      <select class="traitSelector" id="trait${elemID}" onchange="userTrigger.updateTrait(${elemID})"></select>
                      <div class="traitLevelDisplay" id="trait${elemID}Level">${globalRecords.greatTraitRecords[elemID-1].level}</div> 
                      </div>
                  <div class="traitLevelContainer">
                      <div class="pointsSpent" id="trait${elemID}Spent"></div>
                      <div class="intrinsicPoints" id="trait${elemID}Intrinsic"></div>
                      <div class="traitLevelBar">
                          <div class="traitLevelCircle"></div>
                          <div class="traitLevelCircle"></div>
                          <div class="traitLevelCircle"></div>
                          <div class="traitLevelCircle"></div>
                          <div class="traitLevelCircle"></div>
                          <div class="traitLevelCircle"></div>
                          <div class="traitLevelCircle"></div>
                          <div class="traitLevelCircle"></div>
                          <div class="traitLevelCircle"></div>
                          <div class="traitLevelCircle"></div>
                      </div>
                  </div>
              </div>
              <button type="button" class="traitButton" onclick="userTrigger.updateTrait(${elemID},'+')" id="traitButtonPlus${elemID}">+</button>
          </div>`
  },
  //Defines the trait toggle row that gets put into the toggles menu
  traitToggle(elemID) {
    return  `<div class="togglesRowBox">
              <div class="togglesStat">Trait${elemID}:</div><div class="togglesValue" id="toggledTrait${elemID}"></div><div class="togglesUse">
                  <input type="checkbox" id="USEtoggledTrait${elemID}" class="togglesCheckBox" onchange="updateFormulas()"/>
              </div>
            </div>`
  },
  //Generalized select <option> population. *should* be able to be used for any gear selection,
  //provided there is a distinct json format to pull from
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
  }
}
/* ---------------------------------------------------------------------------------------- */
/* ------------------- Trait manipulation, generation, and deletion ----------------------- */
/* ---------------------------------------------------------------------------------------- */
let manipulateTrait = {
  //THE GREAT TRAIT FUCKERY.
  //Reads all active traits. Deletes unused trait entries
  //Inserts/updates traits based on archetype selections
  //Generates a new trait box if all trait boxes are filled
  //Enforces trait cap limit if import provides more than 85
  //Handles all trait math to be identical to how the game functions.
  updateTraitCollection(archetype1Old,archetype2Old) {
    //The old arch 1 and 2
    archetype1Old = archetype1Old ?? "";
    archetype2Old = archetype2Old ?? "";
    // <div class="traitsBox" id="traitsMegaBox"></div>  //this is the overall traits box html
    let megaBox = readSelection("traitsMegaBox");
    if (globalRecords.greatTraitRecords.length>=1) {
      megaBox.innerHTML = globalRecords.emptyTraitBoxHeader;
      //Used for determining if class traits should autopopulate
      let arch1path = readSelection("archetype1");
      let arch2path = readSelection("archetype2");
      let class1Active = !!arch1path.value;
      let class2Active = !!arch2path.value;
      let trait1Path = classInfo[arch1path.value].classTrait;
      let trait2Path = classInfo[arch2path.value].classTrait;
      //Check if the intrinsic traits even have a bonus
      let useEndurance = classInfo[arch1path.value].Endurance > 0;
      let useExpertise = classInfo[arch1path.value].Expertise > 0;
      let useSpirit = classInfo[arch1path.value].Spirit > 0;
      let useVigor = classInfo[arch1path.value].Vigor > 0;
      //If so, trigger autopopulation checks for whichever ones do.
      //All the following checks are done in reverse order, as the display scheme is first in last out
      manipulateTrait.bumpTrait(useVigor,"Vigor");
      manipulateTrait.bumpTrait(useSpirit,"Spirit");
      manipulateTrait.bumpTrait(useExpertise,"Expertise");
      manipulateTrait.bumpTrait(useEndurance,"Endurance");
      manipulateTrait.bumpTrait(class2Active,trait2Path);
      manipulateTrait.bumpTrait(class1Active,trait1Path);
      //Sort/create/delete trait entries accordingly.
      for (let i=1;i<=globalRecords.greatTraitRecords.length;i++) {
        let recordPath = globalRecords.greatTraitRecords[i-1];
        //If it matches a class trait that was in the slot just before then.
        if (recordPath.default > 0) {
          if (recordPath.name===classInfo[archetype1Old].classTrait && classInfo[archetype1Old].classTrait && archetype1Old != arch1path.value && archetype1Old != arch2path.value) {
              manipulateTrait.modifyTraitRecord("delete",i);
          }
          else if (recordPath.name===classInfo[archetype2Old].classTrait && classInfo[archetype2Old].classTrait && archetype2Old != arch2path.value && archetype2Old != arch1path.value) {
              manipulateTrait.modifyTraitRecord("delete",i);
          }
        }
        //If the last trait is not blank, make a new blank trait slot.
        else if (i === globalRecords.greatTraitRecords.length && recordPath.name) {
          manipulateTrait.modifyTraitRecord("create");
        }
        //If the current slot is blank, and is not the last slot, delete the slot
        else if (i != globalRecords.greatTraitRecords.length && !recordPath.name){
          manipulateTrait.modifyTraitRecord("delete",i);
        }
        //Correct/store trait levels, create the trait box, and then populate it with trait options
        manipulateTrait.modifyTraitLevels(i,trait1Path,trait2Path);
        megaBox.innerHTML += createHTML.traitBox(i);
        createHTML.populateGear(`trait${i}`,traits);
      }
      //Adjust traitbox html displays based on everything done thus far
      manipulateTrait.modifyTraitHTML();
    }
    else if (globalRecords.greatTraitRecords.length===0) { //If we just loaded the page, make the first trait box.
      manipulateTrait.modifyTraitRecord("create");
      megaBox.innerHTML = globalRecords.emptyTraitBoxHeader;
      megaBox.innerHTML += createHTML.traitBox(1);
      createHTML.populateGear("trait1",traits);
      //
    }
  manipulateTrait.generateTraitToggles();
  manipulateTrait.updateTraitPoints();
  },
  //Used in updateTraitCollection to generate the trait toggles rows in traitTogglesMegaBox, based on active traits
  generateTraitToggles() {
    let megaBox = readSelection("traitTogglesMegaBox");
    megaBox.innerHTML = "";
    for (let i=1;i<=globalRecords.greatTraitRecords.length;i++) {
      megaBox.innerHTML += createHTML.traitToggle(i);
    }
  },
  //Used in updateTraitCollection to update and define the currently spent trait points, as well as the trait point limit
  updateTraitPoints() {
    let traitPoints = readSelection("traitCount");
    let traitCap = readSelection("traitCap");
    globalRecords.traitPointCount = 0;
    for (let i=1;i<=globalRecords.greatTraitRecords.length;i++) {
      globalRecords.traitPointCount += globalRecords.greatTraitRecords[i-1].spent
    }
    traitPoints.innerHTML = globalRecords.traitPointCount;
    traitCap.innerHTML = globalRecords.traitPointCap;
  },
  //Used to either create, or delete an entry within greatTraitRecords
  modifyTraitRecord(action,ID,name,level,defaultPoints,spentPoints) {
    //ID only used for deletion, can be put as anything during creation if custom values are passed
    if (action==="create") {
      globalRecords.greatTraitRecords.push({
      "name": name = name ?? "",
      "level": level = level ?? 0,
      "default": defaultPoints = defaultPoints ?? 0,
      "spent": spentPoints = spentPoints ?? 0})
    }
    else if (action==="delete") {
      globalRecords.greatTraitRecords.splice(ID-1,1);
    }
    else {
      alert("modifyTraitRecord(): The action type was not specified.");
    }
  },
  //Used in updateTraitCollection to prepend/move class specific traits, if they exist, to greatTraitRecords[0]
  bumpTrait(check,trait) {
    // check is a boolean for whether that trait should even be used or not.
      if (check) {
        let foundClassTrait = false;
        let otherTrait = 0;
        //Search the records and if we find a match that isn't the first, record what trait it is for later
        for (let i=1;i<=globalRecords.greatTraitRecords.length;i++) {
          let checkName = globalRecords.greatTraitRecords[i-1].name;
          if (checkName===trait && i != 1){foundClassTrait=true;otherTrait=i-1;}
        }
        //If the first value isn't a match, and we didn't find it anywhere, then make it
        if (globalRecords.greatTraitRecords[0].name != trait && !foundClassTrait) {
          globalRecords.greatTraitRecords.unshift({"name": trait,"level": 0,"default": 0,"spent": 0});
        }
        //Else if the first value isn't a match, but we DID find it elsewhere, move it
        else if (globalRecords.greatTraitRecords[0].name != trait && foundClassTrait) {
          globalRecords.greatTraitRecords.unshift({
            "name": trait,
            "level": globalRecords.greatTraitRecords[otherTrait].level,
            "default": globalRecords.greatTraitRecords[otherTrait].default,
            "spent": globalRecords.greatTraitRecords[otherTrait].spent});
          //+2 here as modifyTraitRecord already -1, else this would just be +1
          manipulateTrait.modifyTraitRecord("delete",otherTrait+2);  
        }
      }
  },
  //Used in updateTraitCollection to modify/fill the html of traitboxes after they have been generated
  modifyTraitHTML() {
    for (let i=1;i<=globalRecords.greatTraitRecords.length;i++) {
      let recordPath = globalRecords.greatTraitRecords[i-1];
      //can't seem to save .value while actively modifying the innerHTML, else I'd call it when the boxes were generated
      readSelection(`trait${i}`).value = recordPath.name;
      //If a name is filled but the level is 0, change - button to a trashcan icon
      if (recordPath.name && recordPath.level === 0) {
        readSelection(`traitButtonMinus${i}`).innerHTML = `<img src="images/TrashIcon.png" class="traitButtonImage" alt="trash icon">`;
      }
      //If a name is filled and the level is 10, disable the + button
      else if (recordPath.name && recordPath.level === 10) {
        readSelection(`traitButtonPlus${i}`).innerHTML = "";
        readSelection(`traitButtonPlus${i}`).disabled = true;
      }
      //If a name is blank, disable both adjustment buttons.
      else if (!recordPath.name) {
        readSelection(`traitButtonPlus${i}`).innerHTML = "";
        readSelection(`traitButtonPlus${i}`).disabled = true;
        readSelection(`traitButtonMinus${i}`).innerHTML = "";
        readSelection(`traitButtonMinus${i}`).disabled = true;
      }
      //If a name is filled, and the level is equal to the default level, disable the - button
      if (recordPath.name && recordPath.level === recordPath.default && recordPath.level != 0) {
        readSelection(`traitButtonMinus${i}`).innerHTML = "";
        readSelection(`traitButtonMinus${i}`).disabled = true;
      }
      //If the default value of any given trait is greater than 0, lock the selector element
      if (recordPath.default > 0) {
        readSelection(`trait${i}`).disabled = true;
      }
      //Then adjust bar width and level display.
      readSelection(`trait${i}Intrinsic`).style.width = `${recordPath.default * 10}%`
      readSelection(`trait${i}Spent`).style.width = `${recordPath.level * 10}%`
      readSelection(`trait${i}Level`).innerHTML = recordPath.level
    }
  },
  //Used in updateTraitCollection to calculate the adjusted trait levels, accounting for archetype-provided levels.
  modifyTraitLevels(entry,trait1Path,trait2Path) {
    let recordPath = globalRecords.greatTraitRecords[entry-1];
    let traitName = recordPath.name;
    let defaultPoints = 0;

    if (greatTableKnowerOfAll[traitName] > 0) { //If the selected trait IS intrinsic
      defaultPoints = greatTableKnowerOfAll[traitName];
      if (recordPath.default === 0) { //If it wasn't before
        recordPath.default = defaultPoints;
      }
      else { //If it WAS
        let intrinsicAdjustment = recordPath.default - defaultPoints;
        if (intrinsicAdjustment < 0){
          intrinsicAdjustment = 0;
        }
        recordPath.level -= intrinsicAdjustment;
      }
    }
    else { //If the trait is not intrinsic
      defaultPoints = 0; //Then there is obv no default value
      if (recordPath.default != defaultPoints) {//If used to be
        recordPath.level -= recordPath.default; //Subtract old default to reduce level correctly
        recordPath.default = defaultPoints;
        if (recordPath.level < 0) {recordPath.level = 0;} //Ensure level does not go negative
      }
    }
    //Make sure the level is not lower than the default, if we do then it makes sure Spent can't be negative as well.
    if (recordPath.level < defaultPoints) {recordPath.level = defaultPoints;}
    //Assign default, spent, and level to the trait records.
    recordPath.default = defaultPoints; //Assign w/e the resulting default value was
    recordPath.spent = recordPath.level - recordPath.default;
    recordPath.level = recordPath.spent + recordPath.default;
    //If it matches a currently selected class trait
    if ((recordPath.name===trait1Path && trait1Path) || (recordPath.name===trait2Path && trait2Path)) {
      recordPath.default = 10;
      recordPath.spent = 0;
      recordPath.level = 10;
    }
  },
  //Used in to handle any instance where the traits spent exceed the cap.
  //Only used in imports at the moment as it's impossible to exceed it without modifying the URL
  pointsOverLimit() {
    //If the total spent points are over the trait, then go backwards, cutting off points
    //Currently this is only used in imports, but since it is trait related I moved it here
    if (globalRecords.traitPointCount > globalRecords.traitPointCap) {
      let traitsOverCap = globalRecords.traitPointCount - globalRecords.traitPointCap;
      let notifCount = globalRecords.traitPointCount;
      let notifDiff = traitsOverCap;
      if (traitsOverCap > 0) {
        for (let i=globalRecords.greatTraitRecords.length;i>0;i-=1) {
          let path = globalRecords.greatTraitRecords[i-1];
          let currentLevel = path.level;
          if (currentLevel >= traitsOverCap && currentLevel != 0 && traitsOverCap != 0) {
            //Example: if the current level of 10 is greater than the diff over the cap 8
            //then 10-8=2, the level is now 2 and the diff is now 0
            path.level = currentLevel - traitsOverCap;
            traitsOverCap = 0;
          }
          //But if the current level of 2 is less than the diff of 8, 8-2=6 the new diff, and current now 0
          else if (currentLevel < traitsOverCap && traitsOverCap > 0 && currentLevel != 0 && traitsOverCap != 0) {
            traitsOverCap -= currentLevel;
            path.level = 0;
          }
        }
        manipulateTrait.updateTraitCollection();//Update needed to adjust everything again based on what just happened
        alert(`Traits spent(${notifCount}) EXCEEDED the cap(${globalRecords.traitPointCap}) by ${notifDiff} points.\nPoints have been REMOVED to bring you in line with the limit.\n\nThis can happen for one of two reasons:\n- You manually modified the URL. Don't.\n- You imported this build here from somewhere that does not enforce the trait cap.\n\nSOURCE: pointsOverLimit()`)
      }
      }
  }
}
/* ---------------------------------------------------------------------------------------- */
/* ------------------ URL import, export, and modification -------------------------------- */
/* ---------------------------------------------------------------------------------------- */
let manipulateURL = {
  //Used to modify and actively update the browser URL display without a page reload.
  //Also used to compile the query string when exporting to R2TK.
  updateURLparameters(isExported) {
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
      "settings": [],
      "adv": [],
      "s": ["s"]
    }
    let urlObject = globalRecords.urlObject;
    for (i=1;i<=globalRecords.greatTraitRecords.length;i++) {
      let traitName = globalRecords.greatTraitRecords[i-1].name || "";
      let traitLevel = globalRecords.greatTraitRecords[i-1].level || "";
      let concatenated = `${traitName}${traitLevel}`;
      globalRecords.urlObject.trait.push(concatenated)
    }
    urlObject.archetype.push(readSelection("archetype1").value);
    urlObject.archetype.push(readSelection("archetype2").value);
    urlObject.archetype.push(readSelection("archetype1ability").value);
    urlObject.archetype.push(readSelection("archetype2ability").value);
    urlObject.armor.push(readSelection("helmetChoice").value);
    urlObject.armor.push(readSelection("chestChoice").value);
    urlObject.armor.push(readSelection("legChoice").value);
    urlObject.armor.push(readSelection("handChoice").value);
    urlObject.primary.push(readSelection("primary").value);
    urlObject.primary.push(readSelection("rangedMutator1").value);
    urlObject.primary.push(readSelection("rangedMod1").value);
    urlObject.melee.push(readSelection("melee").value);
    urlObject.melee.push(readSelection("meleeMutator").value);
    // globalRecords.urlObject.melee.push(readSelection("meleeMod").value);
    urlObject.secondary.push(readSelection("secondary").value);
    urlObject.secondary.push(readSelection("rangedMutator2").value);
    urlObject.secondary.push(readSelection("rangedMod2").value);
    for (i=1;i<=7;i++) {
      urlObject.consumable.push(readSelection(`concoction${i}`).value)
    }
    urlObject.consumable.push(readSelection("quickUse1").value);
    urlObject.consumable.push(readSelection("quickUse2").value);
    urlObject.consumable.push("");//For later when I add 2 more quickuse
    urlObject.consumable.push("");
    urlObject.accessory.push(readSelection("amulet").value);
    for (i=1;i<=4;i++) {
      urlObject.accessory.push(readSelection(`ring${i}`).value);
    }
    urlObject.relic.push(readSelection("relic").value);
    for (i=1;i<=3;i++) {
      urlObject.relic.push(readSelection(`fragment${i}`).value);
    }
    manipulateURL.exportURLsetting("USEtoggledHead","settings");
    manipulateURL.exportURLsetting("USEtoggledChest","settings");
    manipulateURL.exportURLsetting("USEtoggledLegs","settings");
    manipulateURL.exportURLsetting("USEtoggledHands","settings");
    manipulateURL.exportURLsetting("USEtoggledAmulet","settings");
    manipulateURL.exportURLsetting("USEtoggledRing1","settings");
    manipulateURL.exportURLsetting("USEtoggledRing2","settings");
    manipulateURL.exportURLsetting("USEtoggledRing3","settings");
    manipulateURL.exportURLsetting("USEtoggledRing4","settings");
    manipulateURL.exportURLsetting("USEtoggledRelic","settings");
    manipulateURL.exportURLsetting("USEtoggledrFrag1","settings");
    manipulateURL.exportURLsetting("USEtoggledrFrag2","settings");
    manipulateURL.exportURLsetting("USEtoggledrFrag3","settings");
    manipulateURL.exportURLsetting("USEtoggledPrimeP","settings");
    manipulateURL.exportURLsetting("USEtoggledAbility1","settings");
    manipulateURL.exportURLsetting("USEtoggledPassive1","settings");
    manipulateURL.exportURLsetting("USEtoggledPassive2","settings");
    manipulateURL.exportURLsetting("USEtoggledPassive3","settings");
    manipulateURL.exportURLsetting("USEtoggledPassive4","settings");
    manipulateURL.exportURLsetting("USEtoggledAbility2","settings");
    manipulateURL.exportURLsetting("USEtoggledPassive5","settings");
    manipulateURL.exportURLsetting("USEtoggledPassive6","settings");
    manipulateURL.exportURLsetting("USEtoggledPassive7","settings");
    manipulateURL.exportURLsetting("USEtoggledPassive8","settings");
    manipulateURL.exportURLsetting("USEtoggledPrimary","settings");
    manipulateURL.exportURLsetting("USEtoggledpMutator","settings");
    manipulateURL.exportURLsetting("USEtoggledpMod","settings");
    manipulateURL.exportURLsetting("USEtoggledMelee","settings");
    manipulateURL.exportURLsetting("USEtoggledmMutator","settings");
    manipulateURL.exportURLsetting("USEtoggledmMod","settings");
    manipulateURL.exportURLsetting("USEtoggledSecondary","settings");
    manipulateURL.exportURLsetting("USEtoggledsMutator","settings");
    manipulateURL.exportURLsetting("USEtoggledsMod","settings");
    manipulateURL.exportURLsetting("USEtoggledConc1","settings");
    manipulateURL.exportURLsetting("USEtoggledConc2","settings");
    manipulateURL.exportURLsetting("USEtoggledConc3","settings");
    manipulateURL.exportURLsetting("USEtoggledConc4","settings");
    manipulateURL.exportURLsetting("USEtoggledConc5","settings");
    manipulateURL.exportURLsetting("USEtoggledConc6","settings");
    manipulateURL.exportURLsetting("USEtoggledConc7","settings");
    manipulateURL.exportURLsetting("USEtoggledQuick1","settings");
    manipulateURL.exportURLsetting("USEtoggledQuick2","settings");
    manipulateURL.exportURLsetting("USEtoggledQuick3","settings");
    manipulateURL.exportURLsetting("USEtoggledQuick4","settings");
    for (let i=1;i<globalRecords.greatTraitRecords.length;i++) {
      manipulateURL.exportURLsetting(`USEtoggledTrait${i}`,"settings")
    }
    urlObject.settings = globalRecords.urlObject.settings.replace(/\.?0+$/, '');
  //Advanced Stats Settings
    if (readSelection("complexInput").value) {
      urlObject.adv.push(readSelection("complexInput").value);
    }
    else {globalRecords.urlObject.adv.push("")}
    if (readSelection("isCoop").value && readSelection("isCoop").value != "Solo") {
      urlObject.adv.push(readSelection("isCoop").value);
    }
    else {globalRecords.urlObject.adv.push("")}
    if (readSelection("teamCount").value && readSelection("teamCount").value != 1) {
      urlObject.adv.push(readSelection("teamCount").value);
    }
    else {globalRecords.urlObject.adv.push("")}
    if (+readSelection("minionCount").value) {
      urlObject.adv.push(readSelection("minionCount").value);
    }
    else {globalRecords.urlObject.adv.push("")}
    if (+readSelection("spiritHealerStacks").value) {
      urlObject.adv.push(readSelection("spiritHealerStacks").value);
    }
    else {globalRecords.urlObject.adv.push("")}
    urlObject.adv.push("");
    manipulateURL.exportURLsetting("includeREdamage","adv");
    manipulateURL.exportURLsetting("includeDMGKept","adv");
    manipulateURL.exportURLsetting("includeRelicHealing","adv");
    manipulateURL.exportURLsetting("includeShields","adv");
    //remove trailing 0's from the last parameter, helps clear the URL if no adv settings are active
    urlObject.adv[5] = urlObject.adv[5].replace(/\.?0+$/, '');

  //Delete a given parameter if it stores no values, to reduce URL length
    manipulateURL.urlParamIsEmpty("trait");
    manipulateURL.urlParamIsEmpty("archetype");
    manipulateURL.urlParamIsEmpty("armor");
    manipulateURL.urlParamIsEmpty("primary");
    manipulateURL.urlParamIsEmpty("melee");
    manipulateURL.urlParamIsEmpty("secondary");
    manipulateURL.urlParamIsEmpty("consumable");
    manipulateURL.urlParamIsEmpty("accessory");
    manipulateURL.urlParamIsEmpty("relic");
    manipulateURL.urlParamIsEmpty("settings");
    manipulateURL.urlParamIsEmpty("adv");

    if (isExported != true) {
      const params = new URLSearchParams(urlObject);
      decoded = params.toString();
      decoded = decoded.replace(/%2C/g, ',');
      const newUrl = `${window.location.origin}/index.html?${decoded}`;
      history.replaceState({}, '', newUrl);
    }
  },
  //Used in updateURLparameters for shorthand checks when generating binary settings to the URL
  exportURLsetting(checkBoxID,objElement) {
    if (objElement != "adv") {
      if (readSelection(checkBoxID)?.checked === true) {
        globalRecords.urlObject[objElement] += "1";
      }
      else if (readSelection(checkBoxID) === null || readSelection(checkBoxID).checked === false) {
        globalRecords.urlObject[objElement] += "0";
      }
    }
    else {
      if (readSelection(checkBoxID)?.checked === true) {
        globalRecords.urlObject.adv[5] += "1";
      }
      else if (readSelection(checkBoxID) === null || readSelection(checkBoxID).checked === false) {
        globalRecords.urlObject.adv[5] += "0";
      }
    }
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
    let urlSettings = feed.get("settings");
    let urlAdvanced = feed.get("adv");
    let urlSource = feed.get("s");
    let invalidEntries = [];
  //TRAITS
    if (urlTraits) {
        urlTraits = urlTraits.split(",")
        for (traitors of urlTraits) {
            let traitLevel = traitors.replace(/[^0-9]/g,"");
            let traitName = traitors.replace(/[0-9]/g,"");
            //If the trait name was read invalid, push the name to invalidEntries to display later
            if (!traits[traitName]) {
              invalidEntries.push(traitName);
            }
            else if (traitName){
              //If an import level is greater than 10, reduce to 10
              traitLevel = Math.min(traitLevel, 10);
              //Don't need to check for less than 0, or round. A decimal or a - would be invalid.
              manipulateTrait.modifyTraitRecord("create",0,traitName,traitLevel);
            }
        }
    }
    manipulateTrait.updateTraitCollection();//This needs to get called regardless of null or not, to generate first trait box
    //We call it before archs so when archs ARE called, they can factor default points into the trait math.
    //ARCHETYPES AND ABILITIES
    if (urlArchs) {
      urlArchs = urlArchs.split(",");
      //Check arch1 and ability
      if (classInfo[urlArchs[0]] === undefined) {invalidEntries.push(urlArchs[0]);}
      else if (urlArchs[0]) {
        readSelection("archetype1").value = urlArchs[0];
        userTrigger.updateArchetype('archetype','1');
        if (classInfo[urlArchs[0]].abilities[urlArchs[2]] === undefined) {invalidEntries.push(urlArchs[2]);}
        else if (urlArchs[2]) {
          readSelection("archetype1ability").value = urlArchs[2];
          userTrigger.updateAbility('archetype1');
        }
      }
      //Check arch2 and ability
      if (classInfo[urlArchs[1]] === undefined) {invalidEntries.push(urlArchs[1]);}
      else if (urlArchs[1]) {
        readSelection("archetype2").value = urlArchs[1];
        userTrigger.updateArchetype('archetype','2');
        if (classInfo[urlArchs[1]].abilities[urlArchs[3]] === undefined) {invalidEntries.push(urlArchs[3]);}
        else if (urlArchs[3]) {
          readSelection("archetype2ability").value = urlArchs[3];
          userTrigger.updateAbility('archetype2');
        }
      }
    }
    // manipulateTrait.updateTraitCollection();
    manipulateTrait.pointsOverLimit();//Trim points if cap exceeded
  //ARMOR
    if (urlArmor) {
      urlArmor = urlArmor.split(",");
      if (helmets[urlArmor[0]] === undefined) {invalidEntries.push(urlArmor[0]);}
      else if (urlArmor[0]) {
        readSelection("helmetChoice").value = urlArmor[0];
        userTrigger.updateArmor('helmet');
      }
      if (chests[urlArmor[1]] === undefined) {invalidEntries.push(urlArmor[1]);}
      else if (urlArmor[1]) {
        readSelection("chestChoice").value = urlArmor[1];
        userTrigger.updateArmor('chest');
      }
      if (legs[urlArmor[2]] === undefined) {invalidEntries.push(urlArmor[2]);}
      else if (urlArmor[2]) {
        readSelection("legChoice").value = urlArmor[2];
        userTrigger.updateArmor('leg');
      }
      if (hands[urlArmor[3]] === undefined) {invalidEntries.push(urlArmor[3]);}
      else if (urlArmor[3]) {
        readSelection("handChoice").value = urlArmor[3];
        userTrigger.updateArmor('hand');
      }
    }
  //WEAPONS
    if (urlPrimary) {
      urlPrimary = urlPrimary.split(",");
      if (primary[urlPrimary[0]] === undefined) {invalidEntries.push(urlPrimary[0]);}
      else if (urlPrimary[0]) {
        readSelection("primary").value = urlPrimary[0];
        userTrigger.updateWeapon('primary');
      }
      if (rangedMutators[urlPrimary[1]] === undefined) {invalidEntries.push(urlPrimary[1]);}
      else if (urlPrimary[1]) {
        readSelection("rangedMutator1").value = urlPrimary[1];
        userTrigger.updateMutator('rangedMutator','1');
      }
      if (rangedMods[urlPrimary[2]] === undefined && primary[urlPrimary[0]].builtIN === "") {invalidEntries.push(urlPrimary[2]);}
      else if (urlPrimary[2]) {
        readSelection("rangedMod1").value = urlPrimary[2];
        userTrigger.updateMod('rangedMod','1');
      }
    }
    if (urlMelee) {
      urlMelee = urlMelee.split(",");
      if (melee[urlMelee[0]] === undefined) {invalidEntries.push(urlMelee[0]);}
      else if (urlMelee[0]) {
        readSelection("melee").value = urlMelee[0];
        userTrigger.updateWeapon('melee');
      }
      if (meleeMutators[urlMelee[1]] === undefined) {invalidEntries.push(urlMelee[1]);}
      else if (urlMelee[1]) {
        readSelection("meleeMutator").value = urlMelee[1];
        userTrigger.updateMutator('meleeMutator');
      }
    }
    if (urlSecondary) {
      urlSecondary = urlSecondary.split(",");
      if (secondary[urlSecondary[0]] === undefined) {invalidEntries.push(urlSecondary[0]);}
      else if (urlSecondary[0]) {
        readSelection("secondary").value = urlSecondary[0];
        userTrigger.updateWeapon('secondary');
      }
      if (rangedMutators[urlSecondary[1]] === undefined) {invalidEntries.push(urlSecondary[1]);}
      else if (urlSecondary[1]) {
        readSelection("rangedMutator2").value = urlSecondary[1];
        userTrigger.updateMutator('rangedMutator','2');
      }
      if (rangedMods[urlSecondary[2]] === undefined && secondary[urlSecondary[0]].builtIN === "") {invalidEntries.push(urlSecondary[2]);}
      else if (urlSecondary[2]) {
        readSelection("rangedMod2").value = urlSecondary[2];
        userTrigger.updateMod('rangedMod','2');
      }
    }
  //AMULET AND RINGS
    if (urlAccessory) {
      urlAccessory = urlAccessory.split(",");
      if (amulets[urlAccessory[0]] === undefined) {invalidEntries.push(urlAccessory[0]);}
      else if (urlAccessory[0]) {
        readSelection("amulet").value = urlAccessory[0];
        userTrigger.updateAccessory('amulet');
      }
      for (let i=1;i<=4;i++) {
        if (rings[urlAccessory[i]] === undefined) {invalidEntries.push(urlAccessory[i]);}
        else if (urlAccessory[i]) {
          readSelection(`ring${i}`).value = urlAccessory[i];
          userTrigger.updateAccessory('ring',i);
        }
      }
    }
  //CONCOCTIONS AND QUICK USE CONSUMABLES
    if (urlConcoctions) {
      updateFormulas();
      urlConcoctions = urlConcoctions.split(",");
      for (let i=0;i<globalRecords.totalConcLimit;i++) {
        if (concoctions[urlConcoctions[i]] === undefined) {invalidEntries.push(urlConcoctions[i]);}
        else if (urlConcoctions[i]) {
          readSelection(`concoction${i+1}`).value = urlConcoctions[i];
          userTrigger.updateConsumable('concoction',i+1);
        }
      }
      if (quickUses[urlConcoctions[7]] === undefined) {invalidEntries.push(urlConcoctions[7]);}
      else if (urlConcoctions[7]) {
        readSelection(`quickUse1`).value = urlConcoctions[7];
        userTrigger.updateConsumable('quickUse',1);
      }
      if (quickUses[urlConcoctions[8]] === undefined) {invalidEntries.push(urlConcoctions[8]);}
      else if (urlConcoctions[8]) {
        readSelection(`quickUse2`).value = urlConcoctions[8];
        userTrigger.updateConsumable('quickUse',2);
      }
    }
  //RELIC AND FRAGMENTS
    if (urlRelic) {
      urlRelic = urlRelic.split(",");
      if (relics[urlRelic[0]] === undefined) {invalidEntries.push(urlRelic[0]);}
      else if (urlRelic[0]) {
        readSelection("relic").value = urlRelic[0];
        userTrigger.updateAccessory('relic');
      }
      for (let i=1;i<=3;i++) {
        if (fragments[urlRelic[i]] === undefined) {invalidEntries.push(urlRelic[i]);}
        else if (urlRelic[i]) {
          readSelection(`fragment${i}`).value = urlRelic[i];
          userTrigger.updateFragment('fragment',i);
        }
      }
    }
  //SETTINGS
    if (urlSettings) {
      manipulateURL.importURLsetting("USEtoggledHead",urlSettings[0]);
      manipulateURL.importURLsetting("USEtoggledChest",urlSettings[1]);
      manipulateURL.importURLsetting("USEtoggledLegs",urlSettings[2]);
      manipulateURL.importURLsetting("USEtoggledHands",urlSettings[3]);
      manipulateURL.importURLsetting("USEtoggledAmulet",urlSettings[4]);
      manipulateURL.importURLsetting("USEtoggledRing1",urlSettings[5]);
      manipulateURL.importURLsetting("USEtoggledRing2",urlSettings[6]);
      manipulateURL.importURLsetting("USEtoggledRing3",urlSettings[7]);
      manipulateURL.importURLsetting("USEtoggledRing4",urlSettings[8]);
      manipulateURL.importURLsetting("USEtoggledRelic",urlSettings[9]);
      manipulateURL.importURLsetting("USEtoggledrFrag1",urlSettings[10]);
      manipulateURL.importURLsetting("USEtoggledrFrag2",urlSettings[11]);
      manipulateURL.importURLsetting("USEtoggledrFrag3",urlSettings[12]);
      manipulateURL.importURLsetting("USEtoggledPrimeP",urlSettings[13]);
      manipulateURL.importURLsetting("USEtoggledAbility1",urlSettings[14]);
      manipulateURL.importURLsetting("USEtoggledPassive1",urlSettings[15]);
      manipulateURL.importURLsetting("USEtoggledPassive2",urlSettings[16]);
      manipulateURL.importURLsetting("USEtoggledPassive3",urlSettings[17]);
      manipulateURL.importURLsetting("USEtoggledPassive4",urlSettings[18]);
      manipulateURL.importURLsetting("USEtoggledAbility2",urlSettings[19]);
      manipulateURL.importURLsetting("USEtoggledPassive5",urlSettings[20]);
      manipulateURL.importURLsetting("USEtoggledPassive6",urlSettings[21]);
      manipulateURL.importURLsetting("USEtoggledPassive7",urlSettings[22]);
      manipulateURL.importURLsetting("USEtoggledPassive8",urlSettings[23]);
      manipulateURL.importURLsetting("USEtoggledPrimary",urlSettings[24]);
      manipulateURL.importURLsetting("USEtoggledpMutator",urlSettings[25]);
      manipulateURL.importURLsetting("USEtoggledpMod",urlSettings[26]);
      manipulateURL.importURLsetting("USEtoggledMelee",urlSettings[27]);
      manipulateURL.importURLsetting("USEtoggledmMutator",urlSettings[28]);
      manipulateURL.importURLsetting("USEtoggledmMod",urlSettings[29]);
      manipulateURL.importURLsetting("USEtoggledSecondary",urlSettings[30]);
      manipulateURL.importURLsetting("USEtoggledsMutator",urlSettings[31]);
      manipulateURL.importURLsetting("USEtoggledsMod",urlSettings[32]);
      manipulateURL.importURLsetting("USEtoggledConc1",urlSettings[33]);
      manipulateURL.importURLsetting("USEtoggledConc2",urlSettings[34]);
      manipulateURL.importURLsetting("USEtoggledConc3",urlSettings[35]);
      manipulateURL.importURLsetting("USEtoggledConc4",urlSettings[36]);
      manipulateURL.importURLsetting("USEtoggledConc5",urlSettings[37]);
      manipulateURL.importURLsetting("USEtoggledConc6",urlSettings[38]);
      manipulateURL.importURLsetting("USEtoggledConc7",urlSettings[39]);
      manipulateURL.importURLsetting("USEtoggledQuick1",urlSettings[40]);
      manipulateURL.importURLsetting("USEtoggledQuick2",urlSettings[41]);
      //42
      //43 for the other two quick use that I don't have yet
      for (let i=1;i<=globalRecords.greatTraitRecords.length;i++) {
        manipulateURL.importURLsetting(`USEtoggledTrait${i}`,urlSettings[43+i]);
      }
      updateFormulas();
    }
  //ADVANCED STATS LOGGING
    if (urlAdvanced) {
      urlAdvanced = urlAdvanced.split(",");
      if (urlAdvanced[0]) {
        readSelection("complexInput").value = urlAdvanced[0];
      }
      if (urlAdvanced[1]) {
        readSelection("isCoop").value = urlAdvanced[1];
      }
      if (urlAdvanced[2]) {
        readSelection("teamCount").value = urlAdvanced[2];
      }
      if (urlAdvanced[3]) {
        readSelection("minionCount").value = urlAdvanced[3];
      }
      if (urlAdvanced[4]) {
        readSelection("spiritHealerStacks").value = urlAdvanced[4];
      }
      manipulateURL.importURLsetting("includeREdamage",urlAdvanced[5][0]);
      manipulateURL.importURLsetting("includeDMGKept",urlAdvanced[5][1]);
      manipulateURL.importURLsetting("includeRelicHealing",urlAdvanced[5][2]);
      manipulateURL.importURLsetting("includeShields",urlAdvanced[5][3]);
      updateFormulas();
    }
  //Last updateFormulas for good measure, if feed exists and isn't just the source
    if (feed && feed != "s=s") {
      updateFormulas();
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
  //Used in importURLparameters if an invalid import entry was detected, to notify the user
  excludeAlert(entry) {
    alert(`Item Import(s): "${entry}" read as invalid and excluded from the import.\n\nThis happens because of one or more of following options:\n- Vash or R2TK has the item's name wrong\n- Vash hasn't added the item yet\n- Or you, the user, have manually modified the URL. Don't.\nIf you believe this to be a spelling error, join the discord linked at the bottom of any page, and let Vash know.`)    
  }
}
/* ---------------------------------------------------------------------------------------- */
/* ----------------- Everything that happens when a new selection is made ----------------- */
/* ---------------------------------------------------------------------------------------- */
let userTrigger = {
  //Triggers whenever a concoction or quickuse consumable is selected
  updateConsumable(type,ID) {
    let selectedConsumable = readSelection(`${type}${ID}`);
    // let concLimit = +readSelection("concValueDisplay").innerHTML;
    readSelection(`${type}${ID}Icon`).src=consumables[`${type}s`][selectedConsumable.value].image;
    readSelection(`${type}${ID}Desc`).innerHTML = userTrigger.updateSubstatColor(consumables[`${type}s`][selectedConsumable.value].desc);
    //Pass the selected value into duplicate checks, under the same function to repeat if swapped,
    //-using "several" handling to loop through more than 2 options, stopping the loop at the conc limit
    if (type==="concoction") {
      userTrigger.checkDuplicateSelection(type,ID,`updateConsumable`,`several`,globalRecords.totalConcLimit);
    }
    else if (type==="quickUse") {
      userTrigger.checkDuplicateSelection(type,ID,`updateConsumable`,`duo`);
    }
    updateFormulas();
  },
  //Triggers whenever a new weapon is selected
  updateWeapon(type) {
    let selectedWeapon = readSelection(type);
    //Update accessory image, description, and then refresh formulas.
    readSelection(`${type}Image`).src=weapons[type][selectedWeapon.value].image;
    readSelection(`${type}Description`).innerHTML=userTrigger.updateSubstatColor(weapons[type][selectedWeapon.value].desc);
    // readSelection(`${type}${modifier}Desc`).innerHTML=gear[jsonID][selectedValue].desc;

    let weaponObjectReference = weapons[type][selectedWeapon.value]
    if (type==="melee") {
      readSelection("meleeStat1").innerHTML = weaponObjectReference.DMG;
      readSelection("meleeStat2").innerHTML = weaponObjectReference.atkSpeed;
      readSelection("meleeStat3").innerHTML = weaponObjectReference.stamCost;
      readSelection("meleeStat4").innerHTML = weaponObjectReference.chargeDMG;
      readSelection("meleeStat5").innerHTML = weaponObjectReference.chargeSpeed;
      readSelection("meleeStat6").innerHTML = weaponObjectReference.chargeCost;
      readSelection("meleeStat7").innerHTML = weaponObjectReference.specialCost;
      readSelection("meleeStat8").innerHTML = weaponObjectReference.critChance;
      readSelection("meleeStat9").innerHTML = weaponObjectReference.weakSpot;
      readSelection("meleeStat10").innerHTML = weaponObjectReference.stagger;
      if (weaponObjectReference.builtIN) {
        readSelection("meleeMod").innerHTML = weaponObjectReference.builtIN;
        readSelection("meleeModImage").src = builtInMelee[weaponObjectReference.builtIN].image;
        readSelection("meleeModDesc").innerHTML = userTrigger.updateSubstatColor(builtInMelee[weaponObjectReference.builtIN].desc);
      }
      else {
        readSelection("meleeMod").innerHTML = "";
        readSelection("meleeModImage").src = builtInMelee[""].image;
        readSelection("meleeModDesc").innerHTML = "";
      }
    }
    else if (type==="primary") {
      let path = readSelection("rangedMod1");
      if (weaponObjectReference.builtIN) {
        if (path.length > Object.keys(rangedMods).length) {
          //-2 on the index bc the mods will never stack up with more than 2 custom values in a select element at once
          for (let i=Object.keys(rangedMods).length - 2; i<=path.length; i++) {
            if (builtInPrimary[path.options[i].innerHTML]) {
              path.remove(i);
              break;
            }
          }
        }
        //Add the built-in mod to the dropdown so it can be assigned to .value
        const select = readSelection("rangedMod1");
        const option = document.createElement("option");
        option.text = weaponObjectReference.builtIN;
        select.appendChild(option);
        //-----------------------------------------------
      readSelection("rangedMod1").disabled = true;
      readSelection("rangedMod1").value = weaponObjectReference.builtIN;
      readSelection("primaryModImage").src = builtInPrimary[weaponObjectReference.builtIN].image;
      readSelection("primaryModDesc").innerHTML = userTrigger.updateSubstatColor(builtInPrimary[weaponObjectReference.builtIN].desc);
      }
      else {
        path.disabled = false;
        if (path.length > Object.keys(rangedMods).length) {
          for (let i=Object.keys(rangedMods).length - 2; i<=path.length; i++) {
            if (builtInPrimary[path.options[i].innerHTML]) {
              path.remove(i);
              break;
            }
          }
          path.value = "";
          readSelection(`primaryModDesc`).innerHTML=mods.primaryMods[""].desc;
          readSelection(`primaryModImage`).src=mods.primaryMods[""].image;
          userTrigger.updateMod("rangedMod","1");
        }
      }
    }
    else if (type==="secondary") {
      let path = readSelection("rangedMod2");
      if (weaponObjectReference.builtIN) {
        if (path.length > Object.keys(rangedMods).length) {
          //-2 on the index bc the mods will never stack up with more than 2 custom values in a select element at once
          for (let i=Object.keys(rangedMods).length - 2; i<=path.length; i++) {
            if (builtInSecondary[path.options[i].innerHTML]) {
              path.remove(i);
              break;
            }
          }
        }
        //Add the built-in mod to the dropdown so it can be assigned to .value
        const select = readSelection("rangedMod2");
        const option = document.createElement("option");
        option.text = weaponObjectReference.builtIN;
        select.appendChild(option);
        //-----------------------------------------------
      readSelection("rangedMod2").disabled = true;
      readSelection("rangedMod2").value = weaponObjectReference.builtIN;
      readSelection("secondaryModImage").src = builtInSecondary[weaponObjectReference.builtIN].image;
      readSelection("secondaryModDesc").innerHTML = userTrigger.updateSubstatColor(builtInSecondary[weaponObjectReference.builtIN].desc);
      }
      else {
        path.disabled = false;
        if (path.length > Object.keys(rangedMods).length) {
          for (let i=Object.keys(rangedMods).length - 2; i<=path.length; i++) {
            if (builtInSecondary[path.options[i].innerHTML]) {
              path.remove(i);
              break;
            }
          }
          path.value = "";
          readSelection(`secondaryModDesc`).innerHTML=mods.secondaryMods[""].desc;
          readSelection(`secondaryModImage`).src=mods.secondaryMods[""].image;
          userTrigger.updateMod("rangedMod","2");
        }
      }
    }
    updateFormulas();
  },
  //Triggers whenever a new mutator is selected
  updateMutator(type,value) {
    let collection = 'melee';
    let modifier = ``;
    if (value===`1`) {collection = 'primary';modifier=value}
    else if (value===`2`) {collection = `secondary`;modifier=value}
    let selectedMutator = readSelection(`${type}${modifier}`).value;
    //Update accessory image, description, and then refresh formulas.
    readSelection(`${collection}MutatorDesc`).innerHTML = userTrigger.updateSubstatColor(mutators[`${collection}Mutators`][selectedMutator].desc);
    if (type==="rangedMutator") { //Melee obv needs no dupe checks. ranged1 is primary, ranged2 secondary.
      userTrigger.checkDuplicateSelection(type,value,`updateMutator`,`duo`);
    }
    updateFormulas();
    userTrigger.updateSubstatColor(`${type}${modifier}Desc`);
  },
  //Triggers whenever a new mod is selected
  updateMod(type,value) {
    let collection = 'melee';
    let modifier = ``;
    if (value===`1`) {collection = 'primary';modifier=value}
    else if (value===`2`) {collection = `secondary`;modifier=value}
    let selectedMod = readSelection(`${type}${modifier}`);
    let builtIN = weapons[collection][readSelection(collection).value].builtIN;
    //Update accessory image, description, and then refresh formulas.
    if (builtIN === "" || builtIN === undefined) {
    readSelection(`${collection}ModDesc`).innerHTML=userTrigger.updateSubstatColor(mods[`${collection}Mods`][selectedMod.value].desc);
    readSelection(`${collection}ModImage`).src=mods[`${collection}Mods`][selectedMod.value].image;
    if (type==="rangedMod") { //Melee obv needs no dupe checks. ranged1 is primary, ranged2 secondary.
      userTrigger.checkDuplicateSelection(type,value,`updateMod`,`duo`);
    }
    }
    updateFormulas();
  },
  //Update armor related information
  updateArmor(armorPiece) {
    elem_ID = armorPiece + "Choice";
    json_ID = armorPiece + "s"
    let selectedValue = readSelection(elem_ID).value;
    let selectedArmor = armor[json_ID][selectedValue]
    //assign new image path to the img tag src
    readSelection(`${armorPiece}Image`).src=selectedArmor.image;
    readSelection(`${armorPiece}Armor`).innerHTML=selectedArmor.VALUE;
    readSelection(`${armorPiece}Weight`).innerHTML=selectedArmor.WEIGHT;
    updateFormulas();
  },
  //Triggers whenever a new amu/ring/relic is selected
  updateAccessory(type,place) {
    let jsonID = `${type}s`;
    let modifier = place ?? "";
    let selectedValue = readSelection(`${type}${modifier}`).value;
    //Update accessory image, description, and then refresh formulas.
    readSelection(`${type}${modifier}Image`).src=gear[jsonID][selectedValue].image;
    readSelection(`${type}${modifier}Desc`).innerHTML=userTrigger.updateSubstatColor(gear[jsonID][selectedValue].desc);
    if (type==="ring") {
      userTrigger.checkDuplicateSelection(type,place,`updateAccessory`,`several`,4);
    }
    updateFormulas();
  },
  //Triggers whenever a new fragment is selected
  updateFragment(elem,ID) {
    userTrigger.checkDuplicateSelection(elem,ID,`updateFragment`,`several`,3);
    updateFormulas();
  },
  //Triggers whenever a given archetype has a new selection.
  //By default, will call updateTraitCollection and updateAbility, as they are necessary.
  updateArchetype(archetype,value) {
    let overArchetype = `${archetype}${value}`
    let selectedArchetype = readSelection(overArchetype).value;
    //Update archetype icon
    readSelection(`${overArchetype}Icon`).src=classInfo[selectedArchetype].classIcon;
    //Clear abilities left in the dropdown, if any were there
    readSelection(`${overArchetype}ability`).innerHTML="";
    //Populate ability list based on selected archetype
    createHTML.populateGear(`${overArchetype}ability`,classInfo[selectedArchetype].abilities);
    //needed to populate info on first ability that populates selection by default
    userTrigger.updateAbility(overArchetype);
    //Populate passive names
    let classPassivePath = classInfo[selectedArchetype].passives;
    readSelection(`${overArchetype}passive1`).innerHTML=classPassivePath.passive1.name;
    readSelection(`${overArchetype}passive2`).innerHTML=classPassivePath.passive2.name;
    readSelection(`${overArchetype}passive3`).innerHTML=classPassivePath.passive3.name;
    readSelection(`${overArchetype}passive4`).innerHTML=classPassivePath.passive4.name;
    //Populate passive descriptions
    readSelection(`${overArchetype}passive1desc`).innerHTML=userTrigger.updateSubstatColor(classPassivePath.passive1.desc);
    readSelection(`${overArchetype}passive2desc`).innerHTML=userTrigger.updateSubstatColor(classPassivePath.passive2.desc);
    readSelection(`${overArchetype}passive3desc`).innerHTML=userTrigger.updateSubstatColor(classPassivePath.passive3.desc);
    readSelection(`${overArchetype}passive4desc`).innerHTML=userTrigger.updateSubstatColor(classPassivePath.passive4.desc);
    //Update traits based on class selection
    manipulateTrait.updateTraitCollection(globalRecords.archetype1Old,globalRecords.archetype2Old);
    //Check if this selection was a duplicate, and if it was, swap places with the old info.
    userTrigger.checkDuplicateSelection(archetype,value,`updateArchetype`,`duo`);
    //Concatenates the two selected classes, uses resulting string to search comboTitle
    let part1 = readSelection("archetype1").value;
    let part2 = readSelection("archetype2").value;
    readSelection("comboTitle").innerHTML=titleCombos[`${part1}${part2}`];
    //In closing, update all formulas
    updateFormulas();
  },
  //Triggers whenever the parent archetype changes, or whenever a new ability is selected
  updateAbility(archetype) {
    let selectedArchetype = readSelection(archetype).value;
    let selectedAbility = readSelection(`${archetype}ability`).value;
    if (archetype==="archetype1") {
      readSelection(`primePerk`).innerHTML=classInfo[selectedArchetype].primePerk;
      readSelection(`primePerkIcon`).src=classInfo[selectedArchetype].primePerkImage;
      readSelection(`primePerkDesc`).innerHTML=userTrigger.updateSubstatColor(classInfo[selectedArchetype].primePerkDesc);
    }
    readSelection(`${archetype}abilityDesc`).innerHTML=userTrigger.updateSubstatColor(classInfo[selectedArchetype].abilities[selectedAbility].desc);
    readSelection(`${archetype}abilityIcon`).src=classInfo[selectedArchetype].abilities[selectedAbility].image;
    updateFormulas();
  },
  //Triggers trait updates based on newly selected trait and associate level.
  //Also prevents items from going above 85 total points spent.
  updateTrait(elemID,adjustment) {
    let traitName = readSelection(`trait${elemID}`).value;
    let totalPoints = globalRecords.greatTraitRecords[elemID-1].level
  //Checks if trait selected is blank. If it is, skip pretty much everything.
  if (traitName){
    let change = adjustment != null;
    //If a button was used, adjust values accordingly
    if (change===true) {
      if (adjustment==="+"){
        if (totalPoints != 10 && globalRecords.traitPointCount != globalRecords.traitPointCap) {totalPoints += 1};
      } else if (adjustment==="-") {
        if (totalPoints != 0) {totalPoints -= 1}
        else {readSelection(`trait${elemID}`).value = "";}
      }
    if (totalPoints>=10) {totalPoints = 10}
    }
  }
  globalRecords.greatTraitRecords[elemID-1].name = readSelection(`trait${elemID}`).value;
  globalRecords.greatTraitRecords[elemID-1].level = totalPoints;
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
      if (updateOpposing===true && collection != "fragment"){ //update the swapped item, if not a fragment(they have no displays)
        userTrigger[functionName](collection,oppositeValue);
      }
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
        // let regEx = new RegExp(`\\b(?!${substatColorExclusions})(${substat})\\b`,"gi");  //Old way
        // let regEx = new RegExp('\\b' + substat + '(?![-:])\\b', 'gi');                   //Older way
        description = description.replace(regEx, `<span class="${substat.replace(/\s/g,"")}">${substat.toUpperCase()}</span>`);
      }
    }
    return description;
  }
}
/* ---------------------------------------------------------------------------------------- */
/* ------------------ Everything used in updateFormulas() --------------------------------- */
/* ---------------------------------------------------------------------------------------- */
let formulasValues = {
  //Displays all selected gear within the toggles menu. Does not utilize toggle states here, this is purely display
  pullToggles() {
    readSelection("toggledHead").innerHTML = readSelection("helmetChoice").value
    readSelection("toggledChest").innerHTML = readSelection("chestChoice").value
    readSelection("toggledLegs").innerHTML = readSelection("legChoice").value
    readSelection("toggledHands").innerHTML = readSelection("handChoice").value

    readSelection("toggledAmulet").innerHTML = readSelection("amulet").value
    readSelection("toggledRing1").innerHTML = readSelection("ring1").value
    readSelection("toggledRing2").innerHTML = readSelection("ring2").value
    readSelection("toggledRing3").innerHTML = readSelection("ring3").value
    readSelection("toggledRing4").innerHTML = readSelection("ring4").value

    readSelection("toggledRelic").innerHTML = readSelection("relic").value
    readSelection("toggledrFrag1").innerHTML = readSelection("fragment1").value
    readSelection("toggledrFrag2").innerHTML = readSelection("fragment2").value
    readSelection("toggledrFrag3").innerHTML = readSelection("fragment3").value

    readSelection("toggledPrimeP").innerHTML = readSelection("primePerk").innerHTML
    readSelection("toggledAbility1").innerHTML = readSelection("archetype1ability").value
    readSelection("toggledPassive1").innerHTML = readSelection("archetype1passive1").innerHTML
    readSelection("toggledPassive2").innerHTML = readSelection("archetype1passive2").innerHTML
    readSelection("toggledPassive3").innerHTML = readSelection("archetype1passive3").innerHTML
    readSelection("toggledPassive4").innerHTML = readSelection("archetype1passive4").innerHTML

    readSelection("toggledAbility2").innerHTML = readSelection("archetype2ability").value
    readSelection("toggledPassive5").innerHTML = readSelection("archetype2passive1").innerHTML
    readSelection("toggledPassive6").innerHTML = readSelection("archetype2passive2").innerHTML
    readSelection("toggledPassive7").innerHTML = readSelection("archetype2passive3").innerHTML
    readSelection("toggledPassive8").innerHTML = readSelection("archetype2passive4").innerHTML

    readSelection("toggledPrimary").innerHTML = readSelection("primary").value
    readSelection("toggledpMutator").innerHTML = readSelection("rangedMutator1").value
    readSelection("toggledpMod").innerHTML = readSelection("rangedMod1").value

    readSelection("toggledMelee").innerHTML = readSelection("melee").value
    readSelection("toggledmMutator").innerHTML = readSelection("meleeMutator").value
    readSelection("toggledmMod").innerHTML = readSelection("meleeMod").value

    readSelection("toggledSecondary").innerHTML = readSelection("secondary").value
    readSelection("toggledsMutator").innerHTML = readSelection("rangedMutator2").value
    readSelection("toggledsMod").innerHTML = readSelection("rangedMod2").value

    readSelection("toggledConc1").innerHTML = readSelection("concoction1").value
    readSelection("toggledConc2").innerHTML = readSelection("concoction2").value
    readSelection("toggledConc3").innerHTML = readSelection("concoction3").value
    readSelection("toggledConc4").innerHTML = readSelection("concoction4").value
    readSelection("toggledConc5").innerHTML = readSelection("concoction5").value
    readSelection("toggledConc6").innerHTML = readSelection("concoction6").value
    readSelection("toggledConc7").innerHTML = readSelection("concoction7").value

    readSelection("toggledQuick1").innerHTML = readSelection("quickUse1").value
    readSelection("toggledQuick2").innerHTML = readSelection("quickUse2").value
    //Only check as many traits are generated
    for (let i=1;i<=globalRecords.greatTraitRecords.length;i++) {
      let traitLevel = globalRecords.greatTraitRecords[i-1].level;
      if (!traitLevel) {traitLevel=""}
      readSelection(`toggledTrait${i}`).innerHTML = `${globalRecords.greatTraitRecords[i-1].name} ${traitLevel}`
    }
  },
  //Used in updateFormulas() to fill consumable values on the master table
  //Utilizes toggle states
  pullConsumables (concLimit) {
    let concoction1 = readSelection("concoction1");
    let concoction2 = readSelection("concoction2");
    let concoction3 = readSelection("concoction3");
    let concoction4 = readSelection("concoction4");
    let concoction5 = readSelection("concoction5");
    let concoction6 = readSelection("concoction6");
    let concoction7 = readSelection("concoction7");
    let quickUse1 = readSelection("quickUse1");
    let quickUse2 = readSelection("quickUse2");
  //Concoctions
    for (let i=1;i<=7;i++) {
      let concoction = readSelection(`concoction${i}`);
      if (i<=concLimit) {
        concoction.disabled = false;
        concoction.style.backgroundColor = "#d9d9d9";
        if (readSelection(`USEtoggledConc${i}`).checked != true) {
          formulasValues.pullStats(concoctions[concoction.value].stats);
          if (concoctions[concoction.value].custom) {
            customItemFunctions[concoctions[concoction.value].custom]();
          }
        }
      }
      else {
        concoction.value = "";
        concoction.style.backgroundColor = "#434343";
        readSelection(`concoction${i}Icon`).src = "images/Remnant/clear.png";
        readSelection(`concoction${i}Desc`).innerHTML = "";
        globalRecords[`concoction${i}old`]="";
        concoction.disabled = true;
      }
    }
  //Quick-Use Consumables
    if (readSelection(`USEtoggledQuick1`).checked != true) {
      formulasValues.pullStats(quickUses[quickUse1.value].stats);
      if (quickUses[readSelection(`quickUse1`).value].custom) {
        customItemFunctions[quickUses[readSelection(`quickUse1`).value].custom]();
      }
    }
    if (readSelection(`USEtoggledQuick2`).checked != true) {
      formulasValues.pullStats(quickUses[quickUse2.value].stats);
      if (quickUses[readSelection(`quickUse2`).value].custom) {
        customItemFunctions[quickUses[readSelection(`quickUse2`).value].custom]();
      }
    }
  },
  //Used in updateFormulas() to fill weapon/mod/mutator values on the master table
  //Utilizes toggle states
  pullWeapons () {
    let primaryWeapon = readSelection("primary");
    let primaryWeaponMutator = readSelection("rangedMutator1");
    let primaryWeaponMod = readSelection("rangedMod1");
    let meleeWeapon = readSelection("melee");
    let meleeWeaponMutator = readSelection("meleeMutator");
    let meleeWeaponMod = readSelection("meleeMod"); //not yet
    let secondaryWeapon = readSelection("secondary");
    let secondaryWeaponMutator = readSelection("rangedMutator2");
    let secondaryWeaponMod = readSelection("rangedMod2");
  //Weapons
    if (readSelection(`USEtoggledPrimary`).checked != true) {
      formulasValues.pullStats(weapons.primary[primaryWeapon.value].stats);
      if (primary[readSelection(`primary`).value].custom) {
        customItemFunctions[primary[readSelection(`primary`).value].custom]();
      }
    }
    if (readSelection(`USEtoggledMelee`).checked != true) {
      formulasValues.pullStats(weapons.melee[meleeWeapon.value].stats);
      if (melee[readSelection(`melee`).value].custom) {
        customItemFunctions[melee[readSelection(`melee`).value].custom]();
      }
    }
    if (readSelection(`USEtoggledSecondary`).checked != true) {
      formulasValues.pullStats(weapons.secondary[secondaryWeapon.value].stats);
      if (secondary[readSelection(`secondary`).value].custom) {
        customItemFunctions[secondary[readSelection(`secondary`).value].custom]();
      }
    }
  //Mutators
    if (readSelection(`USEtoggledpMutator`).checked != true) {
      formulasValues.pullStats(mutators.primaryMutators[primaryWeaponMutator.value].stats);
    }
    if (readSelection(`USEtoggledmMutator`).checked != true) {
      formulasValues.pullStats(mutators.meleeMutators[meleeWeaponMutator.value].stats);
    }
    if (readSelection(`USEtoggledsMutator`).checked != true) {
      formulasValues.pullStats(mutators.secondaryMutators[secondaryWeaponMutator.value].stats);
    }
  //Mods
  if (readSelection(`USEtoggledpMod`).checked != true) {
    let checkWeaponPath = weapons.primary[primaryWeapon.value]
    if (checkWeaponPath.builtIN === "" || checkWeaponPath.builtIN === null) {
      formulasValues.pullStats(mods.primaryMods[primaryWeaponMod.value].stats);
    }
    else if (checkWeaponPath.builtIN){
      formulasValues.pullStats(mods.builtInPrimaryMods[primaryWeaponMod.value].stats);
    }
  }
  if (readSelection(`USEtoggledmMod`).checked != true) {
    let checkWeaponPath = weapons.melee[meleeWeapon.value]
    //melee have no optional mods, all built-in
    if (checkWeaponPath.builtIN){
      formulasValues.pullStats(mods.builtInMeleeMods[meleeWeaponMod.innerHTML].stats);
    }
  }
  if (readSelection(`USEtoggledsMod`).checked != true) {
    let checkWeaponPath = weapons.secondary[secondaryWeapon.value]
    if (checkWeaponPath.builtIN === "" || checkWeaponPath.builtIN === null) {
      formulasValues.pullStats(mods.secondaryMods[secondaryWeaponMod.value].stats);
    }
    else if (checkWeaponPath.builtIN){
      formulasValues.pullStats(mods.builtInSecondaryMods[secondaryWeaponMod.value].stats);
    }
  }
  },
  //Used in updateFormulas() to fill trait property values on the master table
  //Utilizes toggle states
  pullTraits () {
    //Yoink all active trait values
    for (let i=1;i<=globalRecords.greatTraitRecords.length;i++) {
      let traitLevel = globalRecords.greatTraitRecords[i-1].level;
      let traitPath = traits[globalRecords.greatTraitRecords[i-1].name];
      let propertyArray = Array.isArray(traitPath.property);
      if (traitPath != undefined && readSelection(`USEtoggledTrait${i}`).checked != true) {
        if (traitPath.property != "REdamage" && traitPath.property != "DMGKept" && propertyArray === false) {
          greatTableKnowerOfAll[traitPath.property] += traitPath.level[traitLevel];
        }
        else if (traitPath.property==="REdamage" || traitPath.property==="DMGKept" && propertyArray === false) {
          greatTableKnowerOfAll[traitPath.property].push(traitPath.level[traitLevel]);
          //put these two types into their respective multiplicative arrays
        }
        else if (propertyArray === true) {
          for (let i=1;i<=traitPath.property.length;i++) {
          greatTableKnowerOfAll[traitPath.property[i-1]] += traitPath.level[traitLevel];
          }
        }
        if (traitPath.custom) {
          customItemFunctions[traits[globalRecords.greatTraitRecords[i-1].name].custom]();
        }
      }
    }
  },
  //Used in updateFormulas() to fill armor(armor/weight) values on the master table
  //Utilizes toggle states
  pullArmorStats() {
    let armorTotalWeight = 0;
    let armorTotalArmor = 0;
    if (!readSelection(`USEtoggledHead`).checked) {
      armorTotalWeight += +readSelection("helmetWeight").innerHTML;
      armorTotalArmor += +readSelection("helmetArmor").innerHTML;
    }
    if (!readSelection(`USEtoggledChest`).checked) {
      armorTotalWeight += +readSelection("chestWeight").innerHTML;
      armorTotalArmor += +readSelection("chestArmor").innerHTML;
    }
    if (!readSelection(`USEtoggledLegs`).checked) {
      armorTotalWeight += +readSelection("legWeight").innerHTML;
      armorTotalArmor += +readSelection("legArmor").innerHTML;
    }
    if (!readSelection(`USEtoggledHands`).checked) {
      armorTotalWeight += +readSelection("handWeight").innerHTML;
      armorTotalArmor += +readSelection("handArmor").innerHTML;
    }
    greatTableKnowerOfAll.Encumbrance += armorTotalWeight;
    greatTableKnowerOfAll.Armor += armorTotalArmor;
    formulasValues.readArmorResistance("Bleed");
    formulasValues.readArmorResistance("Burn");
    formulasValues.readArmorResistance("Shock");
    formulasValues.readArmorResistance("Corrosive");
    formulasValues.readArmorResistance("Blight");
  },
  //Used in pullArmorStats() to fill resistance values on the master table
  //Utilizes toggle states separately from pullArmorStats(). Look into how to manage this otherwise in the future
  readArmorResistance(resistance) {
    if (!readSelection(`USEtoggledHead`).checked) {
      greatTableKnowerOfAll[resistance] += +helmets[readSelection("helmetChoice").value][resistance];
    }
    if (!readSelection(`USEtoggledChest`).checked) {
      greatTableKnowerOfAll[resistance] += +chests[readSelection("chestChoice").value][resistance];
    }
    if (!readSelection(`USEtoggledLegs`).checked) {
      greatTableKnowerOfAll[resistance] += +legs[readSelection("legChoice").value][resistance];
    }
    if (!readSelection(`USEtoggledHands`).checked) {
      greatTableKnowerOfAll[resistance] += +hands[readSelection("handChoice").value][resistance];
    }
  },
  //Used in updateFormulas() to read class specific statistics and add them to the master table
  //Utilizes toggle states
  pullClassStats() {
    // let archetype1 = readSelection("archetype1").value;
    // let archetype2 = readSelection("archetype2").value;
    let path1 = classInfo[readSelection("archetype1").value];
    let ability1 = readSelection("archetype1ability").value;
    let path2 = classInfo[readSelection("archetype2").value];
    let ability2 = readSelection("archetype2ability").value;
  //Prime Perk
    if (!readSelection(`USEtoggledPrimeP`).checked) {
      formulasValues.pullStats(path1.primeStats);
    }
  //Archetype1
    if (!readSelection(`USEtoggledAbility1`).checked) {
      formulasValues.pullStats(path1.abilities[ability1].stats);
    }
    for (let i=1;i<=4;i++) {
      if (!readSelection(`USEtoggledPassive${i}`).checked) {
        formulasValues.pullStats(path1.passives[`passive${i}`].stats);
      }
    }
      // formulasValues.pullStats(path1.passives.passive1.stats);
  //Trait points from primary archetype
      greatTableKnowerOfAll.Endurance = path1.Endurance;
      greatTableKnowerOfAll.Expertise = path1.Expertise;
      greatTableKnowerOfAll.Spirit = path1.Spirit;
      greatTableKnowerOfAll.Vigor = path1.Vigor;
  //Archetype2
    if (!readSelection(`USEtoggledAbility2`).checked) {
      formulasValues.pullStats(path2.abilities[ability2].stats);
    }
    for (let i=1;i<=4;i++) {
      if (!readSelection(`USEtoggledPassive${i+4}`).checked) {
        formulasValues.pullStats(path2.passives[`passive${i}`].stats);
      }
    }
      // formulasValues.pullStats(path2.passives.passive1.stats);
  },
  //Used in updateFormulas() to read gear/accessory specific statistics and add them to the master table
  //Utilizes toggle states
  pullGearStats() {
    //Amulet
    if (!readSelection("USEtoggledAmulet").checked) {
      formulasValues.pullStats(amulets[readSelection("amulet").value].stats);
    }
    //Rings
    for (let i=1;i<=4;i++) {
      if (!readSelection(`USEtoggledRing${i}`).checked) {
      formulasValues.pullStats(rings[readSelection(`ring${i}`).value].stats);
      }
    }
    //Relic
    if (!readSelection("USEtoggledRelic").checked) {
      formulasValues.pullStats(relics[readSelection("relic").value].stats);
    }
    //Fragments
    for (let i=1;i<=3;i++) {
      if (!readSelection(`USEtoggledrFrag${i}`).checked) {
      formulasValues.pullStats(fragments[readSelection(`fragment${i}`).value].stats);
      }
    }
  },
  //Shorthand for looping through an elements "stat" object and adding it to the corresponding master value
  pullStats(path) {
    for (let elements in path) {
      //If the value is a general value, simply add it to the existing value on greatTable
      if (elements != "RelicHPtype" && elements != "REdamage" && elements != "DMGKept") {
        greatTableKnowerOfAll[elements] += path[elements];
      }
      //Relic HP type is a string, so handle it like one.
      else if (elements==="RelicHPtype"){
        greatTableKnowerOfAll[elements] = path[elements];
      }
      //REDamage and DMGKept are both arrays within greatTableKnowerOfAll
      else if (elements==="REdamage" || elements==="DMGKept") {
        greatTableKnowerOfAll[elements].push(path[elements]);
        //This slaps them into an array for each as they are ALL multiplicative to each other.
      }
    }
  },
  //Shorthand for shit I got tired of typing every god damn time.
  updateDisplay(elemID,statistic,rounding,percent) {
    let percentage = "";
    if (percent==null) {percentage=""}
    else {percentage=percent}
    readSelection(elemID).innerHTML = `${statistic.toFixed(rounding)}${percentage}`;
  },
  //Used to call unique item functions AFTER the base statistics have populated greatTableKnowerOfAll
  callUniqueFunctions(item,relicHPscaled,totalHealth) {
    //relicHPscaled and totalHealth are only used for when item is "relic"
    if (item==="amulet") {
      if (readSelection("USEtoggledAmulet").checked != true) {
        if (amulets[readSelection(`amulet`).value].custom) {
          customItemFunctions.amulets[amulets[readSelection(`amulet`).value].custom]();
        }
      }
    }
    else if (item==="ring") {
      for (let i=1;i<=4;i++) {
        if (readSelection(`USEtoggledRing${i}`).checked != true) {
        if (rings[readSelection(`ring${i}`).value].custom) {
          customItemFunctions.rings[rings[readSelection(`ring${i}`).value].custom]();
        }
        }
      }
    }
    else if (item==="relic") {
      let relicComplexArray;
      if (readSelection("USEtoggledRelic").checked != true) {
        if (relics[readSelection(`relic`).value].custom) {
          readSelection("complexInput").disabled = false;
          relicComplexArray = customItemFunctions.relic[relics[readSelection(`relic`).value].custom](relicHPscaled,totalHealth);
        }
        else { //clear complex effect
          readSelection("complexInput").disabled = true;
          readSelection("complexInput").value = "";
          readSelection("complexInputHeader").innerHTML = "";
          readSelection("complexDesc").innerHTML = "No complex relic effects are currently active.";
          readSelection("complexLeftHalf").innerHTML = "";
          readSelection("complexRightHalf").innerHTML = "";
        }
      }
      else { //clear complex effect
        readSelection("complexInput").disabled = true;
        readSelection("complexInput").value = "";
        readSelection("complexInputHeader").innerHTML = "";
        readSelection("complexDesc").innerHTML = "No complex relic effects are currently active.";
        readSelection("complexLeftHalf").innerHTML = "";
        readSelection("complexRightHalf").innerHTML = "";
      }
      //Fragments
      for (let i=1;i<=3;i++) {
        if (readSelection(`USEtoggledrFrag${i}`).checked != true) {
        if (fragments[readSelection(`fragment${i}`).value].custom) {
          customItemFunctions[fragments[readSelection(`fragment${i}`).value].custom]();
        }
        }
      }
      return relicComplexArray;
    }
    else if (item==="class") {
      let path1 = classInfo[readSelection("archetype1").value];
      let ability1 = readSelection("archetype1ability").value;
      let path2 = classInfo[readSelection("archetype2").value];
      let ability2 = readSelection("archetype2ability").value;
      //Prime Perk
      if (readSelection(`USEtoggledPrimeP`).checked != true) {
        if (path1.custom) {
        customItemFunctions[path1.custom]();
        }
      }
      //Archetype1
      if (readSelection(`USEtoggledAbility1`).checked != true) {
        if (path1.abilities[ability1].custom) {
          customItemFunctions[path1.abilities[ability1].custom]();
        }
      }
      for (let i=1;i<=4;i++) {
        if (readSelection(`USEtoggledPassive${i}`).checked != true) {
          if (path1.passives[`passive${i}`].custom) {
            customItemFunctions[path1.passives[`passive${i}`].custom]();
          }
        }
      }
      //Archetype2
      if (readSelection(`USEtoggledAbility2`).checked != true) {
        if (path2.abilities[ability2].custom) {
          customItemFunctions[path2.abilities[ability2].custom]();
        }
      }
      for (let i=1;i<=4;i++) {
        if (readSelection(`USEtoggledPassive${i+4}`).checked != true) {
          if (path2.passives[`passive${i}`].custom) {
            customItemFunctions[path2.passives[`passive${i}`].custom]();
          }
        }
      }
    }
    else if (item==="mutators") {
      if (readSelection(`USEtoggledpMutator`).checked != true) {
        if (mutators.primaryMutators[readSelection(`rangedMutator1`).value].custom) {
          customItemFunctions.mutators[mutators.primaryMutators[readSelection(`rangedMutator1`).value].custom]();
        }
      }
      if (readSelection(`USEtoggledmMutator`).checked != true) {
        if (mutators.meleeMutators[readSelection(`meleeMutator`).value].custom) {
          customItemFunctions.mutators[mutators.meleeMutators[readSelection(`meleeMutator`).value].custom]();
        }
      }
      if (readSelection(`USEtoggledsMutator`).checked != true) {
        if (mutators.secondaryMutators[readSelection(`rangedMutator2`).value].custom) {
          customItemFunctions.mutators[mutators.secondaryMutators[readSelection(`rangedMutator2`).value].custom]();
        }
      }
    }
    else if (item==="mods") {
      //PRIMARY
      if (readSelection(`USEtoggledpMod`).checked != true) {
        let primaryWeapon = readSelection("primary");
        let primaryWeaponMod = readSelection(`rangedMod1`);
        let checkWeaponPath = weapons.primary[primaryWeapon.value];
        if (checkWeaponPath.builtIN === "" || checkWeaponPath.builtIN === null) {
          if (mods.primaryMods[primaryWeaponMod.value].custom) {
            customItemFunctions[mods.primaryMods[primaryWeaponMod.value].custom]();
          }
        }
        //If the Primary weapon has a built-in mod
        else if (checkWeaponPath.builtIN){
          if (mods.builtInPrimaryMods[primaryWeaponMod.value].custom) {
            customItemFunctions[mods.builtInPrimaryMods[primaryWeaponMod.value].custom]();
          }
        }
      }
      //MELEE
      if (readSelection(`USEtoggledmMod`).checked != true) {
        let meleeWeapon = readSelection("melee");
        let meleeWeaponMod = readSelection(`meleeMod`); //not yet
        let checkWeaponPath = weapons.melee[meleeWeapon.value];
        if (checkWeaponPath.builtIN === "" || checkWeaponPath.builtIN === null) {
          if (mods.meleeMods[meleeWeaponMod.value].custom) {
            customItemFunctions[mods.meleeMods[meleeWeaponMod.value].custom]();
          }
        }
        //If the Melee weapon has a built-in mod
        else if (checkWeaponPath.builtIN){
          if (mods.builtInMeleeMods[meleeWeaponMod.innerHTML].custom) {
            customItemFunctions[mods.builtInMeleeMods[meleeWeaponMod.innerHTML].custom]();
          }
        }
      }
      //SECONDARY
      if (readSelection(`USEtoggledsMod`).checked != true) {
        let secondaryWeapon = readSelection("secondary");
        let secondaryWeaponMod = readSelection(`rangedMod2`);
        let checkWeaponPath = weapons.secondary[secondaryWeapon.value];
        if (checkWeaponPath.builtIN === "" || checkWeaponPath.builtIN === null) {
          if (mods.secondaryMods[secondaryWeaponMod.value].custom) {
            customItemFunctions[mods.secondaryMods[secondaryWeaponMod.value].custom]();
          }
        }
        //If the Secondary weapon has a built-in mod
        else if (checkWeaponPath.builtIN){
          if (mods.secondaryMods[secondaryWeaponMod.value].custom) {
            customItemFunctions[mods.builtInSecondaryMods[secondaryWeaponMod.value].custom]();
          }
        }
      }
    }
  },
}
/* ---------------------------------------------------------------------------------------- */
/* ---------------------- Custom, item-specific functions --------------------------------- */
/* ---------------------------------------------------------------------------------------- */
let customItemFunctions = {
  //Function names are specified in data.js under a given entry's "custom" key.
  "amulets": {
    brewMasters() {
      for (let i=1;i<=7;i++) {
        let activeConcoction = readSelection(`concoction${i}`).value;
        if (activeConcoction) {
          greatTableKnowerOfAll.FlatDR += 0.02;
        }
      }
    },
    costOfBetrayal() {
      greatTableKnowerOfAll.RelicChargesOverride = 1;
    },
    daredevil() {
      let armorMissing = 4;
      if (readSelection("helmetChoice").value) {armorMissing -= 1;}
      if (readSelection("chestChoice").value) {armorMissing -= 1;}
      if (readSelection("legChoice").value) {armorMissing -= 1;}
      if (readSelection("handChoice").value) {armorMissing -= 1;}
      greatTableKnowerOfAll.AllDamage += 0.075 * armorMissing;
      greatTableKnowerOfAll.MovementSpeed += 0.03 * armorMissing;
      greatTableKnowerOfAll.FlatDR -= 0.05 * armorMissing;
    },
    differenceEngine() {
      if (greatTableKnowerOfAll.Shield > 0) {
        greatTableKnowerOfAll.Lifesteal += 0.015;
        greatTableKnowerOfAll.AllDamage += 0.20;
      }
    },
    energyDiverter() {
      if (greatTableKnowerOfAll.Shield > 0) {
        greatTableKnowerOfAll.AllCritChance += 0.10;
        greatTableKnowerOfAll.AllDamage += 0.15;
      }
    },
    giftOfTheUnbound() {
      let activeBurdens = 0;
      let healthModifier = 0.20
      for (let i=1;i<=4;i++) {
        let ringPath = readSelection(`ring${i}`).value
        if (ringPath.includes("Burden") === true) {
          activeBurdens += 1;
          //Negate all negative effects of any equipped burdens.
          if (ringPath.includes("Audacious") === true) {
            greatTableKnowerOfAll.HealingEFF += -1 * rings[`Burden of the Audacious`].stats.HealingEFF;
          }
          else if (ringPath.includes("Departed") === true) {
            greatTableKnowerOfAll[`RelicCharges%`] += -1 * rings[`Burden of the Departed`].stats[`RelicCharges%`];
          }
          else if (ringPath.includes("Destroyer") === true) {
            greatTableKnowerOfAll[`Range%`] += -1 * rings[`Burden of the Destroyer`].stats[`Range%`];
          }
          else if (ringPath.includes("Divine") === true) {
            greatTableKnowerOfAll.AllDamage += -1 * rings[`Burden of the Divine`].stats.AllDamage;
          }
          else if (ringPath.includes("Follower") === true) {
            greatTableKnowerOfAll.FireRate += -1 * rings[`Burden of the Follower`].stats.FireRate;
          }
          else if (ringPath.includes("Gambler") === true) {
            //Enable weakspot
          }
          else if (ringPath.includes("Mariner") === true) {
            greatTableKnowerOfAll.CDR += -1 * rings[`Burden of the Mariner`].stats.CDR;
          }
          else if (ringPath.includes("Rebel") === true) {
            greatTableKnowerOfAll.RelicSpeed += -1 * rings[`Burden of the Rebel`].stats.RelicSpeed;
          }
          else if (ringPath.includes("Sciolist") === true) {
            greatTableKnowerOfAll.Reserves += -1 * rings[`Burden of the Sciolist`].stats.Reserves;
          }
          else if (ringPath.includes("Stargazer") === true) {
            //Negate health cost on skill activation.
          }
          else if (ringPath.includes("Warlock") === true) {
            //Negate health cost on mod activation.
          }
        }
      }
      if (activeBurdens > 0) {
        greatTableKnowerOfAll.GlobalHealthModifier *= 1 - (healthModifier * activeBurdens);
      }
      //Remember to add checks for the negative effects later, on burden rings, to negate them.
    },
    insulationDriver() {
      if (greatTableKnowerOfAll.Bulwark > 0) {
        greatTableKnowerOfAll.AllDamage += 0.15;
        greatTableKnowerOfAll.HASTE += 1;
      }
    },
    kineticShieldExchanger() {
      if (greatTableKnowerOfAll.Shield > 0) {
        greatTableKnowerOfAll.ModDamage += 0.25;
        greatTableKnowerOfAll.ModPowerGen += 0.15;
      }
    },
    oneTrueKingSigil() {
      let faerinActive = false;
      let faelinActive = false;
      let imposterRings = 0;
      for (let i=1;i<=4;i++) {
        if (readSelection(`ring${i}`).value.includes("Faerin's Sigil") === true) {
          faerinActive = true;
          imposterRings += 1;
        }
        else if (readSelection(`ring${i}`).value.includes("Faelin's Sigil") === true) {
          faelinActive = true;
          imposterRings += 1;
        }
      }
      if (imposterRings > 0) {
        let modifier = 0.5;
        if (faerinActive === true) {
          let faeRpath1 = rings[`Faerin's Sigil`].stats.ModPowerGenCrit;
          let faeRpath2 = rings[`Faerin's Sigil`].stats.ModPowerGenWeakspot;
          greatTableKnowerOfAll.ModPowerGenCrit += faeRpath1 * (modifier * imposterRings);
          greatTableKnowerOfAll.ModPowerGenWeakspot += faeRpath2 * (modifier * imposterRings);
        }
        if (faelinActive === true) {
          let faeLpath = rings[`Faelin's Sigil`].stats.ModPowerGenCrit;
          greatTableKnowerOfAll.ModPowerGenMelee += faeLpath * (modifier * imposterRings);
        }
      }
    },
    spiritWisp() {
      //Add mod stuff later
    },
    weightlessWeight() {
      let weight = greatTableKnowerOfAll.Encumbrance * (1+greatTableKnowerOfAll["Encumbrance%"]);
      if (weight < 0) {weight = 0;}
      let multi = Math.floor(weight/5);
      greatTableKnowerOfAll.StaminaCost += -0.0075 * multi;
      greatTableKnowerOfAll.MovementSpeed += 0.0075 * multi;
    },
    whisperingMarble() {
      let bulwarkStacks = greatTableKnowerOfAll.Bulwark;
      if (bulwarkStacks > 5) {bulwarkStacks = 5;}
      greatTableKnowerOfAll.AllDamage += 0.03 * bulwarkStacks;
    },
  },
  "rings": {
    ataeriiBooster() {
      //If active turret carry, add stats
      // if () {
      //   greatTableKnowerOfAll.AllDamage += 0.10,
      //   greatTableKnowerOfAll.AllCritChance += 0.10,
      // }
    },
    ahanaeCrystal() {
      let activeStatus = 0;
      // activeStatus = some kind of thing that lets me pull from it that reads total active status effects on an enemy
      if (activeStatus > 0) {
        greatTableKnowerOfAll.UniqueMulti.push(0.05 * activeStatus);
      }
    },
    akariWarBand() {
      let perfectDodge = false;
      //some kind of read for dodge. No specification yet, this isn't used.
      if (perfectDodge === true) {
        greatTableKnowerOfAll.AllCritChance += 0.15;
        greatTableKnowerOfAll.AllCritDamage += 0.15;
      }
    },
    driedClayRing() {
      let bulwarkStacks = greatTableKnowerOfAll.Bulwark;
      if (bulwarkStacks > 5) {bulwarkStacks =5}
      let bulwarkDR = -.005*(bulwarkStacks**2) + .075*bulwarkStacks;
      greatTableKnowerOfAll.AllDamage += 0.6 * bulwarkDR;
    },
    flyweightsSting() {
      let weight = greatTableKnowerOfAll.Encumbrance * (1+greatTableKnowerOfAll["Encumbrance%"]);
      if (weight < 0) {weight = 0;}
      if (weight < 50) {
        greatTableKnowerOfAll.MeleeDamage += (1 - (weight/49)) * 0.25;
      }
    },
    gameMasters() {
      greatTableKnowerOfAll.DMGKept.push(1/readSelection("teamCount").value);
      greatTableKnowerOfAll.GlobalHealingEff = greatTableKnowerOfAll.GlobalHealingEff * 0.5;
    },
    generatingBand() {
      if (greatTableKnowerOfAll.Shield > 0) {
        greatTableKnowerOfAll["HP/S%"] += 0.03;
      }
    },
    haymakersRing() {
      let weight = greatTableKnowerOfAll.Encumbrance * (1+greatTableKnowerOfAll["Encumbrance%"]);
      let modifier = 0.002;
      greatTableKnowerOfAll.MeleeDamage += weight * modifier;
    },
    lodestoneRing() {
      let helmetPath = readSelection("helmetChoice").value
      if (helmetPath.includes("Lodestone Crown") === true) {
        greatTableKnowerOfAll.UniqueMulti.push(0.05);
      }
    },
    mechanicsCog() {
      //If active turret carry, add stats
      // if () {
      //   greatTableKnowerOfAll.Bulwark += 1,
      //   greatTableKnowerOfAll.MovementSpeed += 0.15,
      // }
    },
    restrictionCord() {
      greatTableKnowerOfAll.GlobalHealthModifier *= 0.5;
    },
    singedRing() {
      //If burning
      greatTableKnowerOfAll.UniqueMulti.push(0.10);
    },
    soulGuard() {
      greatTableKnowerOfAll.Bulwark += +readSelection("minionCount").value;
    },
    soulShard() {
      let minionCount = +readSelection("minionCount").value;
      if (minionCount > 3) {minionCount = 3;}
      let modifier = 0.04;
      greatTableKnowerOfAll.AllDamage += modifier * minionCount;
    },
  },
  "relic": {
    resonatingHeart(relicHPscaled,totalHealth) {
      let path = relics["Resonating Heart"]
      //Healing/Relic EFF already factored before this function even starts
      readSelection("complexDesc").innerHTML = path.complex;
      readSelection("complexInputHeader").innerHTML = "Input:";
      let inputValue = readSelection("complexInput").value * 2;
    
    
      let relicPercHPpSec = 0;
      let relicHPpSec = 0;
      let avgPercHPpSec = 0;
      let avgHPpSec = 0;
      //If input is blank or 0, all values will BE 0, but that's ok because in our check to pull relic healing
      //we will first check if the input is blank/0 before pulling either basic or complex stats.
      if (inputValue && inputValue > 0) {
        relicPercHPpSec = inputValue/20;
        relicHPpSec = (relicPercHPpSec/100) * totalHealth
        avgPercHPpSec = (relicHPscaled + inputValue)/25
        avgHPpSec = (avgPercHPpSec/100) * totalHealth;
      }
    
      readSelection("complexLeftHalf").innerHTML = `
      <div class="complexHalfHeader">2x over 20s</div>
      <div class="complexHalfHalfBox">
        <div class="complexHalfHalfHeader">%/s</div>
        <div class="complexHalfHalfHeader">HP/s</div>
      </div>
      <div class="complexHalfValueBox">
        <div class="complexHalfValue">${relicPercHPpSec.toFixed(2)}%</div>
        <div class="complexHalfValue">${relicHPpSec.toFixed(2)}</div>
      </div>
      `;
      readSelection("complexRightHalf").innerHTML = `
      <div class="complexHalfHeader">AVG over 25s</div>
      <div class="complexHalfHalfBox">
        <div class="complexHalfHalfHeader">%/s</div>
        <div class="complexHalfHalfHeader">HP/s</div>
      </div>
      <div class="complexHalfValueBox">
        <div class="complexHalfValue">${avgPercHPpSec.toFixed(2)}%</div>
        <div class="complexHalfValue">${avgHPpSec.toFixed(2)}</div>
      </div>
      `;
    return [avgPercHPpSec,avgHPpSec]
    },
  },
  "mutators": {
    shieldedStrike() {
      let shieldAmount = greatTableKnowerOfAll.Shield;
      let cap = 0.40;
      let dmgCap = 0.25;
      if (shieldAmount > 0) {
        if (shieldAmount > cap) {shieldAmount = cap;}
        greatTableKnowerOfAll.ChargeDamage += (shieldAmount/cap) * dmgCap;
      }
    },
  }
}
/* ---------------------------------------------------------------------------------------- */
/* -------------------------------------- PAGE LOADED ------------------------------------- */
/* ---------------------------------------------------------------------------------------- */
//The big cheese, the great clusterfuck, where all the formulas refresh.
function updateFormulas() { 
  //Fill the Toggles table
  formulasValues.pullToggles();
  //Reset the table
  greatTableKnowerOfAll = JSON.parse(tableReset);
//MISC STATS THAT NEED TO BE PULLED FROM DISPLAYS FIRST-------------------------
let isCoop = readSelection("isCoop");
let teamCount = readSelection("teamCount");
//If coop is selected, enable the teamcount dropdown
  if (isCoop.value==="Co-op") {
    isCoop = true;
    teamCount.disabled = false;
    teamCount = teamCount.value
  }
  else {
    isCoop = false;
    teamCount.value = 1;
    teamCount.disabled = true;
    teamCount = 1;
  }
//----------TRAITS--------------------------------------------------------------
  formulasValues.pullTraits();
//----------WEAPONS-------------------------------------------------------------
  formulasValues.pullWeapons();
//----------BASICS COLUMN-------------------------------------------------------
  formulasValues.pullArmorStats();
  formulasValues.pullGearStats();
  formulasValues.pullClassStats();
//----------CONSUMABLES---------------------------------------------------------
//--These have to come after everything else, in order to take advantage of the correct concLimit
  globalRecords.totalConcLimit = 1 + greatTableKnowerOfAll.ConcLimit;
  formulasValues.updateDisplay("concValueDisplay",globalRecords.totalConcLimit,0);
  formulasValues.pullConsumables(globalRecords.totalConcLimit);
//----------CUSTOM FUNCTIONS FOR EVERYTHING BUT RELICS(they are called later)---
formulasValues.callUniqueFunctions("ring");
formulasValues.callUniqueFunctions("amulet");
formulasValues.callUniqueFunctions("class");
formulasValues.callUniqueFunctions("mutators");
//SUMMARY STATS
  let baseHealth = 100 + greatTableKnowerOfAll.Health;
  let healthBoost = 1 + greatTableKnowerOfAll["Health%"];
  let globalHealth = greatTableKnowerOfAll.GlobalHealthModifier;
  let totalHealth = baseHealth * healthBoost * globalHealth; 
  formulasValues.updateDisplay("summaryHealth",totalHealth,1);
  let baseStamina = 100 + greatTableKnowerOfAll.Stamina;
  let staminaBoost = 1 + greatTableKnowerOfAll["Stamina%"];
  let totalStamina = baseStamina * staminaBoost; 
  formulasValues.updateDisplay("summaryStamina",totalStamina,1);
  let baseArmor = greatTableKnowerOfAll.Armor;
  let armorEff = 1 + greatTableKnowerOfAll["Armor%"];
  let totalArmor = baseArmor * armorEff;
  formulasValues.updateDisplay("summaryArmor",totalArmor,1);
  let baseWeight = greatTableKnowerOfAll.Encumbrance;
  if (baseWeight < 0) {baseWeight = 0;}
  let weightBoost = 1 + greatTableKnowerOfAll["Encumbrance%"];
  let totalWeight = baseWeight * weightBoost;
  formulasValues.updateDisplay("summaryWeight",totalWeight,1);
  let WeightThreshold = greatTableKnowerOfAll.WeightThreshold;
  let dodgeClass = "";
  let staminaPenalty = 0;
  if (totalWeight>(75+WeightThreshold)) {
    dodgeClass = "Flop";
    readSelection("summaryWeight").style.color = "#e06666";
    staminaPenalty = .75;
  }
  else if (totalWeight>(50+WeightThreshold)) {
    dodgeClass = "Heavy";
    readSelection("summaryWeight").style.color = "orange";
    staminaPenalty = .5;
  }
  else if (totalWeight>(25+WeightThreshold)) {
    dodgeClass = "Medium";
    readSelection("summaryWeight").style.color = "#90ee90";
    staminaPenalty = .25;
  }
  else {
    dodgeClass = "Light";
    readSelection("summaryWeight").style.color = "#93CCEA";
    //No stamina cost penalty on light dodge
  }
//DAMAGE REDUCTION
//ARMOR---
  formulasValues.updateDisplay("baseArmor",baseArmor,1);
  formulasValues.updateDisplay("armorEff",armorEff*100,2,"%");
  formulasValues.updateDisplay("totalArmor",totalArmor,1);
  let armorDR = totalArmor/(totalArmor+200);
  formulasValues.updateDisplay("armorDR",armorDR*100,2,"%");
//FLAT---
  let bulwarkStacks = greatTableKnowerOfAll.Bulwark;
  if (bulwarkStacks>5) {bulwarkStacks = 5;}//add a check here later to show people that they're going over stacks
  formulasValues.updateDisplay("bulwarkStacks",bulwarkStacks,0);
  let bulwarkDR = -.005*(bulwarkStacks**2) + .075*bulwarkStacks;
  formulasValues.updateDisplay("bulwarkDR",bulwarkDR*100,2,"%");
  let otherFlat = greatTableKnowerOfAll.FlatDR;
  formulasValues.updateDisplay("otherFlat",otherFlat*100,2,"%");
  let totalFlat = bulwarkDR+otherFlat;
  formulasValues.updateDisplay("totalFlat",totalFlat*100,2,"%");
  let totalDR = 1-(1-armorDR)*(1-totalFlat);
  formulasValues.updateDisplay("totalDR",totalDR*100,2,"%");
  if (totalDR>0.8){
    totalDR=0.8
    readSelection("totalDR").style.color = "#e06666"
  }
  else {
    readSelection("totalDR").style.color = "white"
  }//add a check here later to show people that they're going over cap
//RESISTANCES
  let bleed = greatTableKnowerOfAll.Bleed * (1+greatTableKnowerOfAll["Bleed%"]);
  let burn = greatTableKnowerOfAll.Burn * (1+greatTableKnowerOfAll["Burn%"]);
  let shock = greatTableKnowerOfAll.Shock * (1+greatTableKnowerOfAll["Shock%"]);
  let corrosive = greatTableKnowerOfAll.Corrosive * (1+greatTableKnowerOfAll["Corrosive%"]);
  let blight = greatTableKnowerOfAll.Blight * (1+greatTableKnowerOfAll["Blight%"]);
  formulasValues.updateDisplay("summaryBleed",bleed,0);
  formulasValues.updateDisplay("summaryBurn",burn,0);
  formulasValues.updateDisplay("summaryShock",shock,0);
  formulasValues.updateDisplay("summaryCorrosive",corrosive,0);
  formulasValues.updateDisplay("summaryBlight",blight,0);
//HEALING
  //this is for shit like game master's pride, it's a global multi modifier
  let globalHealingMod = greatTableKnowerOfAll.GlobalHealingEff;
//BOOSTS---
  let relicEffectiveness = greatTableKnowerOfAll.RelicEFF;
  formulasValues.updateDisplay("relicEFF",relicEffectiveness*100,2,"%");
  let healingEffectiveness = greatTableKnowerOfAll.HealingEFF;
  formulasValues.updateDisplay("healingEFF",healingEffectiveness*100,2,"%");
  let relicUseTime = greatTableKnowerOfAll.RelicSpeed;
  formulasValues.updateDisplay("relicUseTime",relicUseTime*100,2,"%");
  let lifestealALL = greatTableKnowerOfAll.Lifesteal;
  let lifestealMelee = greatTableKnowerOfAll.MLifesteal;
  let lifestealRange = greatTableKnowerOfAll.RLifesteal;
  readSelection("lifesteal").innerHTML = `${(lifestealALL).toFixed(2)}/${(lifestealMelee).toFixed(2)}/${(lifestealRange).toFixed(2)}`;
//REGENERATION---
  let flatHPperSec = greatTableKnowerOfAll["HP/S+"] * (1+healingEffectiveness) * globalHealingMod;
  formulasValues.updateDisplay("flatHP/s",flatHPperSec,1);
  let percHPperSec = greatTableKnowerOfAll["HP/S%"] * (1+healingEffectiveness) * globalHealingMod;
  formulasValues.updateDisplay("%HP/s",percHPperSec*100,2,"%");
  let greyHPperSec = 0.2 + greatTableKnowerOfAll["GreyHP/S+"];
  let greyPercHPperSec = greatTableKnowerOfAll["GreyHP/S%"];
  let totalGreyHPperSec = greyHPperSec * (1+greyPercHPperSec);
  formulasValues.updateDisplay("greyHP/s",totalGreyHPperSec,1);
//STAMINA
let regenMulti = 1;
if (greatTableKnowerOfAll["Stamina/S+Multi"] != 0) {regenMulti = greatTableKnowerOfAll["Stamina/S+Multi"]}
let staminaPerSec = (33 + greatTableKnowerOfAll["Stamina/S+"]) * regenMulti;
formulasValues.updateDisplay("stamina/s",staminaPerSec,1);
let staminaPenaltyAdjustment = 1;
if (greatTableKnowerOfAll.StaminaPenaltyAdjustment != 0) {staminaPenaltyAdjustment = greatTableKnowerOfAll.StaminaPenaltyAdjustment}
let staminaCost = 1 + (staminaPenalty*staminaPenaltyAdjustment) + greatTableKnowerOfAll.StaminaCost;
//If something like bisected it on, turn off stamina costs.
if (greatTableKnowerOfAll.StaminaNegation > 0) {staminaCost = 0}
formulasValues.updateDisplay("staminaCost",staminaCost*100,2,"%");
readSelection("dodgeClass").innerHTML = dodgeClass;
//----------END BASICS COLUMN---------------------------------------------------
//----------RELIC STATS UNDER ACCESSORIES---------------------------------------------------
//RELIC HEALING
let relicHPbase = greatTableKnowerOfAll.RelicHPbase * globalHealingMod;
formulasValues.updateDisplay("relicBase",relicHPbase,2);
let relicHPtype = greatTableKnowerOfAll.RelicHPtype;
readSelection("relicType").innerHTML = relicHPtype;
let relicHPtime = greatTableKnowerOfAll.RelicHPtime;
formulasValues.updateDisplay("relicTime",relicHPtime,0);
//SCALED
let relicHPscaled = relicHPbase * (1+relicEffectiveness) * (1+healingEffectiveness);
if (relicHPtype==="%"){
  formulasValues.updateDisplay("relicScaled",relicHPscaled,1,"%");
  formulasValues.updateDisplay("relic%HP/s",(relicHPscaled/relicHPtime),1,"%");
  formulasValues.updateDisplay("relicHP/s",((relicHPscaled/relicHPtime)/100)*totalHealth,1);
}
else if (relicHPtype==="P"||relicHPtype==="F") {
  formulasValues.updateDisplay("relicScaled",relicHPscaled,1);
  readSelection("relic%HP/s").innerHTML = "---";
  formulasValues.updateDisplay("relicHP/s",(relicHPscaled/relicHPtime),1);
}
else {//if null
  relicHPscaled = 0;
  relicHPtime = 0;
  readSelection("relicScaled").innerHTML = "---";
  readSelection("relic%HP/s").innerHTML = "---";
  readSelection("relicHP/s").innerHTML = "---";
}
//Now that healing values have populated, check and call for custom relic functions
//for the sake of complex relic effects
let relicComplexArray = formulasValues.callUniqueFunctions("relic",relicHPscaled,totalHealth);
let useComplexValues = false;
if (relicComplexArray) {
  if (relicComplexArray[0] > 0) {useComplexValues = true;}
}

//----------MULTIPLICATIVE MITIGATION SOURCES---------------------------------------------------
//REDUCED ENEMY DAMAGE
let reducedEnemyDamage = 1;
  for (let i=0;i<=greatTableKnowerOfAll.REdamage.length-1;i++) {
    reducedEnemyDamage = reducedEnemyDamage * (1+greatTableKnowerOfAll.REdamage[i]);
  }
  reducedEnemyDamage += -1;
//DAMAGE KEPT OR RETAINED(how much gets shared to allies via various sources)
let damageKept = 1;
  for (let i=0;i<=greatTableKnowerOfAll.DMGKept.length-1;i++) { //ADD GAMEMASTER'S CHECK HERE LATER
      damageKept = damageKept * (1+greatTableKnowerOfAll.DMGKept[i]);
  }
  damageKept += -1;
formulasValues.updateDisplay("REdamage",reducedEnemyDamage*100,2,"%");
formulasValues.updateDisplay("DMGKept",damageKept*100,2,"%");
//If either box is checked, convert the format to dmg taken instead of dmg reduced, for use
//in the big cheese equation.
let useREdamage = readSelection("includeREdamage").checked;
  if (useREdamage===false){reducedEnemyDamage=1}
  else {
    reducedEnemyDamage += 1;
  }
let useDMGKept = readSelection("includeDMGKept").checked;
  if (useDMGKept===false){damageKept=1}
  else {
    damageKept += 1;
  }
//TOTAL BONUS TO EFFECTIVE DR, BASED ON REDMG AND DMGKEPT
let totalBonusMitigation = (damageKept*reducedEnemyDamage)-1;
formulasValues.updateDisplay("totalBonusMitigation",totalBonusMitigation*100,2,"%");
//TOTAL EFFECTIVE DAMAGE REDUCTION INCLUDING REDMG AND DMGKEPT
let effectiveDR = 1-(1-totalDR)*(1+totalBonusMitigation);
formulasValues.updateDisplay("effectiveDR",effectiveDR*100,2,"%");
//----------BASE EHP----------------------------------------------------------------------------
let baseEHP = totalHealth/(1-effectiveDR); 
  //declaring this here so we can use it in shield EHP before adding it
  //back into the total EHP display. This is necessary for the sake of EHP/s as well.
//----------SHIELDS----------------------------------------------------------------------------
let percShields = greatTableKnowerOfAll.Shield;
let shieldEff = greatTableKnowerOfAll.ShieldEFF;
formulasValues.updateDisplay("shield%",percShields*100,2,"%");
formulasValues.updateDisplay("shieldEff",shieldEff*100,2,"%");
let totalPercShields = percShields * (1+shieldEff);
formulasValues.updateDisplay("totalShield%",totalPercShields*100,2,"%");
let shieldEHP = baseEHP * totalPercShields;
formulasValues.updateDisplay("shieldEHP",shieldEHP,2);
let useShieldEHP = readSelection("includeShields").checked;
//----------TOTAL EHP----------------------------------------------------------------------------
if (useShieldEHP===false){shieldEHP=0}
let totalEHP = baseEHP + shieldEHP;
formulasValues.updateDisplay("EHP",totalEHP,2);
//----------HEALING----------------------------------------------------------------------------
formulasValues.updateDisplay("advancedFlat",flatHPperSec,2);
formulasValues.updateDisplay("advanced%",percHPperSec*100,2,"%");
formulasValues.updateDisplay("advancedTotalFlat",flatHPperSec + percHPperSec*totalHealth,2);
formulasValues.updateDisplay("advancedTotal%",(percHPperSec + flatHPperSec/totalHealth)*100,2,"%"); 

let advancedRelicFlat,advancedRelicPerc;
if (useComplexValues===true) {
  advancedRelicPerc = relicComplexArray[0];
  advancedRelicFlat = 0;
}
else {
  if (relicHPtype==="P"||relicHPtype==="F") {
    advancedRelicPerc = 0;
    advancedRelicFlat = relicHPscaled/relicHPtime;
  }
  else if (relicHPtype==="%") {
    advancedRelicPerc = relicHPscaled/relicHPtime;
    advancedRelicFlat = 0;
  }
  else { //If there is no healing type(unique relic like Shielded Heart)
    advancedRelicPerc = 0;
    advancedRelicFlat = 0;
  }
}
formulasValues.updateDisplay("advancedRelicFlat",advancedRelicFlat,2);
formulasValues.updateDisplay("advancedRelic%",advancedRelicPerc,2,"%");
formulasValues.updateDisplay("advancedRelicTotalFlat",advancedRelicFlat + (advancedRelicPerc/100)*totalHealth,2);
formulasValues.updateDisplay("advancedRelicTotal%",((advancedRelicPerc/100) + advancedRelicFlat/totalHealth)*100,2,"%");

let useRelicHealing = readSelection("includeRelicHealing").checked != false;
let advancedTotalFlatHP = flatHPperSec + percHPperSec*totalHealth;
let advancedTotalPercHP = (percHPperSec + flatHPperSec/totalHealth)*100;
if (useRelicHealing===true) {
  advancedTotalFlatHP += advancedRelicFlat + (advancedRelicPerc/100)*totalHealth;
  advancedTotalPercHP += (advancedRelicPerc) + (advancedRelicFlat/totalHealth) * 100;
}

formulasValues.updateDisplay("totalHealingFlat",advancedTotalFlatHP,2);
formulasValues.updateDisplay("totalHealing%",advancedTotalPercHP,2,"%");

let EHPpSec = baseEHP * (advancedTotalPercHP/100);
formulasValues.updateDisplay("EHP/s",EHPpSec,2);

manipulateURL.updateURLparameters();
}
//Used to populate the page with given item selections
function pagePopulation() {
  //If we run into undefined issues again, just swap back to this
  // document.addEventListener("DOMContentLoaded", function() {})
  createHTML.populateGear("helmetChoice",helmets);
  createHTML.populateGear("chestChoice",chests);
  createHTML.populateGear("legChoice",legs);
  createHTML.populateGear("handChoice",hands);
  createHTML.populateGear("archetype1",classInfo);
  createHTML.populateGear("archetype2",classInfo);
  createHTML.populateGear("amulet",amulets);
  createHTML.populateGear("ring1",rings);
  createHTML.populateGear("ring2",rings);
  createHTML.populateGear("ring3",rings);
  createHTML.populateGear("ring4",rings);
  createHTML.populateGear("relic",relics);
  createHTML.populateGear("fragment1",fragments);
  createHTML.populateGear("fragment2",fragments);
  createHTML.populateGear("fragment3",fragments);
  //updateTraitCollection(); //gets called in importURLparams
  createHTML.populateGear("primary",primary);
  createHTML.populateGear("melee",melee);
  createHTML.populateGear("secondary",secondary);
  createHTML.populateGear("rangedMutator1",rangedMutators);
  createHTML.populateGear("meleeMutator",meleeMutators);
  createHTML.populateGear("rangedMutator2",rangedMutators);
  createHTML.populateGear("rangedMod1",rangedMods);
  // populateGear("meleeMod",meleeMods); //not yet, if ever really? It's not like melee mods are even selected.
  createHTML.populateGear("rangedMod2",rangedMods);
  createHTML.populateGear("concoction1",concoctions);
  createHTML.populateGear("concoction2",concoctions);
  createHTML.populateGear("concoction3",concoctions);
  createHTML.populateGear("concoction4",concoctions);
  createHTML.populateGear("concoction5",concoctions);
  createHTML.populateGear("concoction6",concoctions);
  createHTML.populateGear("concoction7",concoctions);
  createHTML.populateGear("quickUse1",quickUses);
  createHTML.populateGear("quickUse2",quickUses);
  manipulateURL.importURLparameters();
}

//Must be last, fill the page
pagePopulation();
//buildTime.js script call is injected into the HTML of the deployment, never the actual files here.
// readSelection("calcLastUpdated").innerHTML = process.env.LAST_CALC_UPDATE;