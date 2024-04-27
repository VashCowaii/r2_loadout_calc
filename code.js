//This is the actual table for starter values, but we reuse it to clean (cycles/great)TableKnowerOfAll on updateFormulas() calls
const starterTable = {
  //HEALTH
  "Health": 0,"Health%": 0,"GlobalHealthModifier": 1,
  //ARMOR
  "Armor": 0,"Armor%": 0,
  //DR
  "FlatDR": 0,"Bulwark": 0,"BulwarkCap": 5,"REdamage": [],"DMGKept": [],"SelfDamageModifier": 1,
  //SHIELDS
  "Shield": 0,"ShieldEFF": 0,"Shield%/S": 0,
  //RESISTANCES
  "Bleed": 0,"Bleed%": 0,
  "Burn": 0,"Burn%": 0,
  "Shock": 0,"Shock%": 0,
  "Corrosive": 0,"Corrosive%": 0,
  "Blight": 0,"Blight%": 0,
  //WEIGHT
  "Encumbrance": 0,"Encumbrance%": 0,"WeightThreshold": 0,
  //HEALING
  "HealingEFF": 0,"GlobalHealingEff": 1,"HealingModifiers": 0,
  "HP/S+": 0,"HP/S%": 0,
  //GREY HEALTH
  "GreyHP/S%": 0,"GreyHP/S+": 0,"GreyHPHitThreshold": 0,"GreyHealthConversion": 0,
  //LIFESTEAL
  "Lifesteal": 0,"MLifesteal": 0,"RLifesteal": 0,"MChargedLifeSteal": 0,
  "LifestealEFF": 0,
  //RELICS
  "RelicSpeed": 0,"RelicEFF": 0,
  "RelicHPbase": 0,"RelicHPtype": "","RelicHPtime": 0,
  "RelicCharges": 0,"RelicCharges%": 0,"RelicChargesOverride": 0,
  //CONSUMABLES
  "ConcLimit": 0,"ConsumableDuration": 0,
  //STAMINA
  "Stamina": 0,"Stamina%": 0,"Stamina/S+": 0,"Stamina/S+Multi": 0,"StaminaDelaySpeed": 0,
  //STAMINA COSTS -base cost reductions
  "StaminaCost": 1,"StaminaNegation": 0,"StaminaPenaltyAdjustment": 0,
  "EvadeCost": 0,"ChargeCost": 1,
  //EVADES
  "EvadeBaseCost": 25,"EvadeSpeed": 0,"EvadeDistance": 0,"iFrames": 0,"iFrameWindow": 0,"BackstepCost": 0,
  //DAMAGE
  "AllDamage": 0,"RangedDamage": 0,"SkillDamage": 0,"MeleeDamage": 0,"ChargeDamage": 0,"BackstepDamage": 0,"FistDamage": 0,
  "MeleeSpecialAbilityDamage": 0,
  "CorrosiveDamage": 0,"AcidDamage": 0,"BurningDamage": 0,"FireDamage": 0,
  "ElementalDamage": 0,"ShockDamage": 0,"OverloadedDamage": 0,"ExplosiveDamage": 0,
  "StatusDamage": 0,"MeleeStatusDamage": 0,"SummonDamage": 0,
  "ModDamage": 0,
  "UniqueMulti": [],
  //CRIT CHANCE
  "AllCritChance": 0,"RangedCritChance": 0,"MeleeCritChance": 0,"ChargeCritChance": 0,"SkillCritChance": 0,"ModCritChance": 0,
  "ExplosiveCritChance": 0,"ElementalCritChance": 0,"FirearmCritChance": 0,"BowCritChance": 0,"PrimaryCritChance": 0,"SecondaryCritChance": 0,
  //CRIT DAMAGE
  "AllCritDamage": 0,"RangedCritDamage": 0,"MeleeCritDamage": 0,"ChargeCritDamage": 0,
  //WEAKSPOT
  "AllWeakspot": 0,"SkillWeakspot": 0,"ModWeakspot": 0,"RangedWeakspot": 0,"MeleeWeakspot": 0,"ChargeWeakspot": 0,
  "WeakspotDisable": 0,
  //STAGGER
  "StaggerDamage": 0,
  //MELEE SPEED
  "AttackSpeed": 0,"ChargeSpeed": 0,
  //Special melee charge cost reduction
  "MeleeSpecialAbilityCharge": 0,
  //ACTION SPEED
  "CastSpeed": 0,"SprintSpeed": 0,
  "FireRate": 0,"ReloadSpeed": 0,"WeaponSwapSpeed": 0,
  "MovementSpeed": 0,"EnvMovementSpeed": 0,"AimMovementSpeed": 0,
  "ProjectileSpeed": 0,
  //MODS
  "ModDuration": 0,"ModPowerGen/s": 0,"ModPowerGen": 0,"ModCost": 0,
  "ModPowerGenCrit": 0,"ModPowerGenWeakspot": 0,"ModPowerGenMelee": 0,"ModPowerGenElemental": 0,
  //SKILLS
  "CDR": 0,"SkillDuration": 0,
  //AOE
  "auraAOE": 0,
  //GUNS
  "Recoil": 0,"Range": 0,"Range%": 0,"Spread": 0,"SpreadRecovery": 0,"Sway": 0,"WeaponChargeTime": 0,
  //AMMO
  "Reserves": 0,"ReservesMulti": 0,
  //MINIONS/SUMMONS
  "SummonHealth": 0,
  //OUTBOUND STATUS EFFECTS
  "StatusDuration": 0,
  "outgoingStatus": 0,
  "outSLOW": 0,
  "outBLEED": 0,
  "outBURN": 0,
  "outOVERLOADED": 0,
  "outCORRODED": 0,
  "outCURSE": 0,
  "outMADNESS": 0,
  "outEXPOSED": 0,
  //INCOMING STATUS EFFECTS
  "HASTE": 0,
  "incomingStatus": 0,
  "inSLOW": 0,
  "inBLEED": 0,
  "inBURN": 0,
  "inOVERLOADED": 0,
  "inCORRODED": 0,
  "inCURSE": 0,
  "inMADNESS": 0,
  "inSUPPRESSION": 0,
  "inROOTROT": 0,
  "inDATACORRUPTION": 0,
}
//Used in stat filters, the keys are user-facing values to be more friendly,
//while the values are the actual names of the backend stats that I use.
const referenceTable = {
  "Armor Effectiveness": "Armor%",
  "Armor-Flat": "Armor",
  "Bleed Resistance-Flat": "Bleed",
  "Bleed Resistance-%": "Bleed%",
  "Blight Resistance-Flat": "Blight",
  "Blight Resistance-%": "Blight%",
  "Burn Resistance-Flat": "Burn",
  "Burn Resistance-%": "Burn%",
  "Class-Summon Health %": "SummonHealth%",
  "Consumable-Concoction Limit": "ConcLimit",
  "Consumable-Duration": "ConsumableDuration",
  "Consumable-Use Speed": "RelicSpeed",
  "Corrosive Resistance-Flat": "Corrosive",
  "Corrosive Resistance-%": "Corrosive%",
  "Critical Chance-All": "AllCritChance",
  "Critical Chance-Bow": "BowCritChance",
  "Critical Chance-Explosive": "ExplosiveCritChance",
  "Critical Chance-Firearm": "FirearmCritChance",
  "Critical Chance-Melee": "MeleeCritChance",
  "Critical Chance-Melee Charge": "ChargeCritChance",
  "Critical Chance-Mod": "ModCritChance",
  "Critical Chance-Primary": "PrimaryCritChance",
  "Critical Chance-Ranged": "RangedCritChance",
  "Critical Chance-Secondary": "SecondaryCritChance",
  "Critical Chance-Skill": "SkillCritChance",
  "Critical Damage-All": "AllCritDamage",
  "Critical Damage-Melee": "MeleeCritDamage",
  "Critical Damage-Melee Charge": "ChargeCritDamage",
  "Critical Damage-Ranged": "RangedCritDamage",
  "DR-Bulwark": "Bulwark",
  "DR-Damage Shared": "DMGKept",
  "DR-Bulwark Limit": "BulwarkCap",
  "DR-Flat": "FlatDR",
  "DR-Reduced Enemy Damage": "REdamage",
  "DR-Self Damage": "SelfDamageModifier",
  "Damage-All": "AllDamage",
  "Damage-Acid": "AcidDamage",
  "Damage-Burning": "BurningDamage",
  "Damage-Corrosive": "CorrosiveDamage",
  "Damage-Elemental": "ElementalDamage",
  "Damage-Explosive": "ExplosionDamage",
  "Damage-Fire": "FireDamage",
  "Damage-Melee": "MeleeDamage",
  "Damage-Melee Backstep": "BackstepDamage",
  "Damage-Melee Charge": "ChargeDamage",
  "Damage-Melee Special Ability": "MeleeSpecialAbilityDamage",
  "Damage-Melee Unarmed": "FistDamage",
  "Damage-Mod": "ModDamage",
  "Damage-Overloaded": "OverloadedDamage",
  "Damage-Shock": "ShockDamage",
  "Damage-Stagger": "StaggerDamage",
  "Damage-Status": "StatusDamage",
  "Damage-Status: Melee": "MeleeStatusDamage",
  "Damage-Unique Multiplier": "UniqueMulti",
  "Encumbrance/Weight": "Encumbrance",
  "Encumbrance/Weight - Threshold": "WeightThreshold",
  "Encumbrance/Weight-%": "Encumbrance%",
  "Evade-Base Stamina Cost": "EvadeBaseCost",
  "Evade-Distance": "EvadeDistance",
  "Evade-iFrames": "iFrames",
  "Evade-iFrame Window": "iFrameWindow",
  "Evade-Stamina Cost": "EvadeCost",
  "Evade-Speed": "EvadeSpeed",
  "Grey Health-Flat/second": "GreyHP/S+",
  "Grey Health-Hit Threshold": "GreyHPHitThreshold",
  "Grey Health-% Recovery Modifier": "GreyHP/S%",
  "Healing Effectiveness": "HealingEFF",
  "Healing-Flat/second": "HP/S+",
  "Healing-Global Effectiveness": "GlobalHealingEff",
  "Healing-Modifiers": "HealingModifiers",
  "Healing-%/second": "HP/S%",
  "Health-Flat": "Health",
  "Health-Global Modifier": "GlobalHealthModifier",
  "Health-%": "Health%",
  "Lifesteal-All": "Lifesteal",
  "Lifesteal-Melee": "MLifesteal",
  "Lifesteal-Melee Charged": "MChargedLifeSteal",
  "Lifesteal-Ranged": "RLifesteal",
  "Melee-Attack Speed": "AttackSpeed",
  "Melee-Charge Speed": "ChargeSpeed",
  "Melee-Charge Stamina Cost": "ChargeCost",
  "Melee-Special Ability Threshold": "MeleeSpecialAbilityCharge",
  "Mod Power Gen-Crits": "ModPowerGenCrit",
  "Mod Power Gen-Elemental": "ModPowerGenElemental",
  "Mod Power Gen-Flat/second": "ModPowerGen/s",
  "Mod Power Gen-Melee": "ModPowerGenMelee",
  "Mod Power Gen-Weakspots": "ModPowerGenWeakspot",
  "Mod-Cost": "ModCost",
  "Mod-Duration": "ModDuration",
  "Mod-Power Gen": "ModPowerGen",
  "Relic Effectiveness": "RelicEFF",
  "Relic-Base Healing": "RelicHPbase",
  "Relic-Charges Flat": "RelicCharges",
  "Relic-Charges Restriction": "RelicChargesOverride",
  "Relic-Charges %": "RelicCharges%",
  "Relic-Healing Duration": "RelicHPtime",
  "Relic-Healing Type": "RelicHPtype",
  "Shield Effectiveness": "ShieldEFF",
  "Shield-Flat": "Shield",
  "Shield-%/second": "Shield%/S",
  "Shock Resistance - Flat": "Shock",
  "Shock Resistance - %": "Shock%",
  "Skill-Cooldowns": "CDR",
  "Skill-Duration": "SkillDuration",
  "Speed-Aiming Movement Speed": "AimMovementSpeed",
  "Speed-Cast": "CastSpeed",
  "Speed-Environmental": "EnvMovementSpeed",
  "Speed-Fire Rate": "FireRate",
  "Speed-HASTE": "HASTE",
  "Speed-Movement": "MovementSpeed",
  "Speed-Reload": "ReloadSpeed",
  "Speed-Weapon Swap": "WeaponSwapSpeed",
  "Stamina-Cost": "StaminaCost",
  "Stamina-Flat": "Stamina",
  "Stamina-Flat/second": "Stamina/S+",
  "Stamina-Negation": "StaminaNegation",
  "Stamina-Penalty Adjustment": "StaminaPenaltyAdjustment",
  "Stamina-Recovery % Modifier": "Stamina/S+Multi",
  "Stamina-%": "Stamina%",
  "Status-Duration": "StatusDuration",
  "Status-Slow": "SLOW",
  "Weakspot-All": "AllWeakspot",
  "Weakspot-Melee": "MeleeWeakspot",
  "Weakspot-Melee Charge": "ChargeWeakspot",
  "Weakspot-Mod": "ModWeakspot",
  "Weakspot-Ranged": "RangedWeakspot",
  "Weakspot-Skill": "SkillWeakspot",
  "Weapon-Charge Time": "WeaponChargeTime",
  "Weapon-Projectile Speed": "ProjectileSpeed",
  "Weapon-Range Flat": "Range",
  "Weapon-Range %": "Range%",
  "Weapon-Reserves": "Reserves",
  "Weapon-Reserves Multiplier": "ReservesMulti",
  "Weapon-Recoil": "Recoil",
  "Weapon-Spread": "Spread",
  "Weapon-Spread Recovery": "SpreadRecovery",
  "Weapon-Sway": "Sway",
};
//All the speed stats that HASTE gives
const hasteTable = {
  "RelicSpeed": -0.07,//consumableusespeedmod     //Not sure how this is calculated yet, I've always shown this is a -stat when it's good though
  "EvadeSpeed": 0.07,//evadespeedmod
  "AttackSpeed": 0.07,//meleeattackspeedmod
  "ChargeSpeed": 0.07,//winduptimemod
  "FireRate": 0.07,//firespeedmod
  "CastSpeed": 0.07,//skillcastingspeedmod
  "ReloadSpeed": 0.07,//reloadspeedmod
  "MovementSpeed": 0.07,//movespeedmod
  "SprintSpeed": 0.07,//sprintspeedmod
  "CrouchSpeed": 0.07,//crouchspeedmod
  "AimMovementSpeed": 0.07,//aimmovespeedmod
}

const inGameStatistics = {
  "Health": "totalHealth",
  "Stamina": "totalStamina",
  "Weight": "totalWeight",
  "Stamina Regen": "staminaPerSec",
  "Stamina Cost": "staminaCost",
  "Healing Effectiveness": "healingEffectiveness",
  "Health Regen - Flat": "totalHealth",
  "Regen - Grey Health": "totalHealth",
}

const playerDerivedStatistics = {
  "EHP": "totalEHP",
  "Health": "totalHealth",
  "EHP/s": "EHPpSec",
  "Health/s": "advancedTotalFlatHP",
  "Effective DR": "effectiveDR",
}

let valueTables = {
  "greatTableKnowerOfAll": {},
  "cycleTableKnowerOfAll": {},
}
/* ---------------------------------------------------------------------------------------- */
/* ------ Shorthand functions used to actually define the HTML to be injected ------------- */
/* ---------------------------------------------------------------------------------------- */
let createHTML = {
  //Defines the traitbox elements that get put into traitsMegaBox
  traitBox(elemID) {
    // <select class="traitSelector" id="trait${elemID}" onchange="userTrigger.updateTrait(${elemID})"></select>
    // <button type="button" class="traitButton" onclick="userTrigger.updateTrait(${elemID},'-')" id="traitButtonMinus${elemID}">-</button>//button
    // <div class="traitLevelDisplay" id="trait${elemID}Level"></div>
    return `<div class="traitContainer" id="traitContainer${elemID}">
              <div class="traitLineHolder">
                  <div class="traitNameHolder">

                      <div class="presetsSelectorBox">
                          <input class="selectSelector traitNameAdjustment" id="trait${elemID}" list="trait${elemID}List" onchange="userTrigger.updateTrait(${elemID})"> <!--selector-->
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
          // <div class="pointsSpent" id="trait${elemID}Spent"></div>
          // <div class="intrinsicPoints" id="trait${elemID}Intrinsic"></div>
          // <button type="button" class="traitButton" onclick="userTrigger.updateTrait(${elemID},'+')" id="traitButtonPlus${elemID}">+</button>
  },
  //Defines the trait toggle row that gets put into the toggles menu
  traitToggle(elemID) {
    return  `<div class="togglesRowBox">
              <div class="togglesStat">Trait${elemID}:</div><div class="togglesValue" id="toggledTrait${elemID}"></div><div class="togglesUse">
                <label class="toggleContainer">
                  <input type="checkbox" class="toggleCheckbox" id="USEtoggledTrait${elemID}" onchange="updateFormulas()">
                  <span class="toggleSlider"></span>
                </label>
              </div>
            </div>`
  },
  basicsRow(name,value,isRounded,unit) {
    unit = unit ?? "";
    value = unit==="%" ? value*100 : value;
    value = !isRounded ? value : value.toFixed(2)
    return `<div class="basicsDRContainer">
      <span class="basicsDRStat">${name}</span><span class="rowTraceLine"></span><span class="basicsDRValue" id="">${value}</span>
    ${unit}</div>`
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
        createHTML.populateGear(`trait${i}List`,traits);
      }
      //Adjust traitbox html displays based on everything done thus far
      manipulateTrait.updateTraitPoints();
      manipulateTrait.modifyTraitHTML();
    }
    else if (globalRecords.greatTraitRecords.length===0) { //If we just loaded the page, make the first trait box.
      manipulateTrait.modifyTraitRecord("create");
      megaBox.innerHTML = globalRecords.emptyTraitBoxHeader;
      megaBox.innerHTML += createHTML.traitBox(1);
      createHTML.populateGear("trait1",traits);
      //
    }
  // manipulateTrait.generateTraitToggles();//Trait toggles are no longer used
  // manipulateTrait.updateTraitPoints();//Moved this within the first IF so that way we could track points correctly during modifyTraitHTML
  //we don't call updateFormulas from here, that would be bad lol
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
      //If the default value of any given trait is greater than 0, lock the selector element
      if (recordPath.default > 0) {
        readSelection(`trait${i}`).disabled = true;
      }

      //Then adjust circle fills and level display.
      for (let x=1;x<=10;x++) {
        let background = "black";
        if (x<=recordPath.default) {background = "#97543a"}
        else if (x<=recordPath.level) {background = "#7f7f7f"}
        else if ((globalRecords.traitPointCount === globalRecords.traitPointCap)) {
          //Has to be minus one here or it won't work.
          //It will never equal the cap unless we adjust a trait while it is maxed, but going to the cap it'll never register without the -1
          background = "none";
          readSelection(`trait${i}Circle${x}`).style.border = "none";
          readSelection(`trait${i}Circle${x}`).style.boxShadow = "none";
        }
        readSelection(`trait${i}Circle${x}`).style.backgroundColor = background;
      }


      // readSelection(`trait${i}Intrinsic`).style.width = `${recordPath.default * 10}%`
      // readSelection(`trait${i}Spent`).style.width = `${recordPath.level * 10}%`
      readSelection(`trait${i}Level`).value = recordPath.level
    }
    let recordPath = globalRecords.greatTraitRecords[globalRecords.greatTraitRecords.length-1].name;
    if (globalRecords.traitPointCount === globalRecords.traitPointCap && recordPath === "") {
      readSelection(`traitContainer${globalRecords.greatTraitRecords.length}`).style.display = "none";
    }
  },
  //Used in updateTraitCollection to calculate the adjusted trait levels, accounting for archetype-provided levels.
  modifyTraitLevels(entry,trait1Path,trait2Path) {
    let recordPath = globalRecords.greatTraitRecords[entry-1];
    let traitName = recordPath.name;
    let defaultPoints = 0;
    //define the intrinsic points here so we don't have to in update forms
    let path1 = classInfo[readSelection("archetype1").value];
    let intrinsics = {
      "Endurance": path1.Endurance,
      "Expertise": path1.Expertise,
      "Spirit": path1.Spirit,
      "Vigor": path1.Vigor
    }

    if (intrinsics[traitName] > 0) { //If the selected trait IS intrinsic
      defaultPoints = intrinsics[traitName];
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
      "settings": [],
      "adv": [],
      "s": ["s"]
    }
    let urlObject = globalRecords.urlObject;
    let traitRecord = !isOverride ? globalRecords.greatTraitRecords : globalRecords.ALTgreatTraitRecords;

    for (i=1;i<=traitRecord.length;i++) {
      let traitName = traitRecord[i-1].name || "";
      let traitLevel = traitRecord[i-1].level || "";
      let concatenated = `${traitName}${traitLevel}`;
      globalRecords.urlObject.trait.push(concatenated)
    }

    let path = !isOverride ? globalRecords.archs : globalRecords.ALTarchs;
    urlObject.archetype.push(path.one.class);
    urlObject.archetype.push(path.two.class);
    urlObject.archetype.push(path.one.ability);
    urlObject.archetype.push(path.two.ability);

    path = !isOverride ? globalRecords.armor : globalRecords.ALTarmor;
    urlObject.armor.push(path.helmet);
    urlObject.armor.push(path.chest);
    urlObject.armor.push(path.leg);
    urlObject.armor.push(path.hand);

    path = !isOverride ? globalRecords.weapons : globalRecords.ALTweapons;
    urlObject.primary.push(path.primary);
    urlObject.primary.push(path.primaryMutator);
    urlObject.primary.push(path.primaryMod);
    urlObject.melee.push(path.melee);
    urlObject.melee.push(path.meleeMutator);
    // globalRecords.urlObject.melee.push(readSelection("meleeMod").value);
    urlObject.secondary.push(path.secondary);
    urlObject.secondary.push(path.secondaryMutator);
    urlObject.secondary.push(path.secondaryMod);

    path = !isOverride ? globalRecords.consumables : globalRecords.ALTconsumables;
    for (i=1;i<=7;i++) {
      urlObject.consumable.push(path[`concoction${i}`])
    }
    urlObject.consumable.push(path.quickUse1);
    urlObject.consumable.push(path.quickUse2);
    urlObject.consumable.push(path.quickUse3);//For later when I add 2 more quickuse
    urlObject.consumable.push(path.quickUse4);

    path = !isOverride ? globalRecords.accessories : globalRecords.ALTaccessories;
    urlObject.accessory.push(path.amulet);
    for (i=1;i<=4;i++) {
      urlObject.accessory.push(path[`ring${i}`]);
    }
    urlObject.relic.push(path.relic);
    for (i=1;i<=3;i++) {
      urlObject.relic.push(path[`fragment${i}`]);
    }
    manipulateURL.exportURLsetting("USEtoggledHead","settings",isOverride);
    manipulateURL.exportURLsetting("USEtoggledChest","settings",isOverride);
    manipulateURL.exportURLsetting("USEtoggledLegs","settings",isOverride);
    manipulateURL.exportURLsetting("USEtoggledHands","settings",isOverride);
    manipulateURL.exportURLsetting("USEtoggledAmulet","settings",isOverride);
    manipulateURL.exportURLsetting("USEtoggledRing1","settings",isOverride);
    manipulateURL.exportURLsetting("USEtoggledRing2","settings",isOverride);
    manipulateURL.exportURLsetting("USEtoggledRing3","settings",isOverride);
    manipulateURL.exportURLsetting("USEtoggledRing4","settings",isOverride);
    manipulateURL.exportURLsetting("USEtoggledRelic","settings",isOverride);
    manipulateURL.exportURLsetting("USEtoggledrFrag1","settings",isOverride);
    manipulateURL.exportURLsetting("USEtoggledrFrag2","settings",isOverride);
    manipulateURL.exportURLsetting("USEtoggledrFrag3","settings",isOverride);


    let altPath = globalRecords.ALTsearchSettingsToggles;
    manipulateURL.exportURLsetting("USEtoggledPrimeP","settings",isOverride,altPath.usePrimePerk);
    manipulateURL.exportURLsetting("USEtoggledAbility1","settings",isOverride,altPath.useAbility1);
    manipulateURL.exportURLsetting("USEtoggledPassive1","settings",isOverride,altPath.usePassive1);
    manipulateURL.exportURLsetting("USEtoggledPassive2","settings",isOverride,altPath.usePassive2);
    manipulateURL.exportURLsetting("USEtoggledPassive3","settings",isOverride,altPath.usePassive3);
    manipulateURL.exportURLsetting("USEtoggledPassive4","settings",isOverride,altPath.usePassive4);
    manipulateURL.exportURLsetting("USEtoggledAbility2","settings",isOverride,altPath.useAbility2);
    manipulateURL.exportURLsetting("USEtoggledPassive5","settings",isOverride,altPath.usePassive5);
    manipulateURL.exportURLsetting("USEtoggledPassive6","settings",isOverride,altPath.usePassive6);
    manipulateURL.exportURLsetting("USEtoggledPassive7","settings",isOverride,altPath.usePassive7);
    manipulateURL.exportURLsetting("USEtoggledPassive8","settings",isOverride,altPath.usePassive8);


    manipulateURL.exportURLsetting("USEtoggledPrimary","settings",isOverride);
    manipulateURL.exportURLsetting("USEtoggledpMutator","settings",isOverride);
    manipulateURL.exportURLsetting("USEtoggledpMod","settings",isOverride);
    manipulateURL.exportURLsetting("USEtoggledMelee","settings",isOverride);
    manipulateURL.exportURLsetting("USEtoggledmMutator","settings",isOverride);
    manipulateURL.exportURLsetting("USEtoggledmMod","settings",isOverride);
    manipulateURL.exportURLsetting("USEtoggledSecondary","settings",isOverride);
    manipulateURL.exportURLsetting("USEtoggledsMutator","settings",isOverride);
    manipulateURL.exportURLsetting("USEtoggledsMod","settings",isOverride);
    manipulateURL.exportURLsetting("USEtoggledConc1","settings",isOverride);
    manipulateURL.exportURLsetting("USEtoggledConc2","settings",isOverride);
    manipulateURL.exportURLsetting("USEtoggledConc3","settings",isOverride);
    manipulateURL.exportURLsetting("USEtoggledConc4","settings",isOverride);
    manipulateURL.exportURLsetting("USEtoggledConc5","settings",isOverride);
    manipulateURL.exportURLsetting("USEtoggledConc6","settings",isOverride);
    manipulateURL.exportURLsetting("USEtoggledConc7","settings",isOverride);
    manipulateURL.exportURLsetting("USEtoggledQuick1","settings",isOverride);
    manipulateURL.exportURLsetting("USEtoggledQuick2","settings",isOverride);
    manipulateURL.exportURLsetting("USEtoggledQuick3","settings",isOverride);
    manipulateURL.exportURLsetting("USEtoggledQuick4","settings",isOverride);
    for (let i=1;i<globalRecords.greatTraitRecords.length;i++) {
      manipulateURL.exportURLsetting(`USEtoggledTrait${i}`,"settings",isOverride)
    }
    urlObject.settings = globalRecords.urlObject.settings.replace(/\.?0+$/, '');

  //Advanced Stats Settings
    settingsPath = !isOverride ? readSelection("enemyCount").value : globalRecords.meleeFactors.enemyCount;
    if (+settingsPath) {
      urlObject.adv.push(settingsPath);
    }
    else {globalRecords.urlObject.adv.push("")}
    let coopState = !isOverride && readSelection("teamCount").value > 1 ? "Co-op" : "Solo"
    settingsPath = !isOverride ? coopState : globalRecords.RECORDEDisCoop;
    if (settingsPath && settingsPath != "Solo") {
      urlObject.adv.push(settingsPath);
    }
    else {globalRecords.urlObject.adv.push("")}
    settingsPath = !isOverride ? readSelection("teamCount").value : globalRecords.RECORDEDteamCount;
    if (+settingsPath && +settingsPath != 1) {
      urlObject.adv.push(settingsPath);
    }
    else {globalRecords.urlObject.adv.push("")}
    settingsPath = !isOverride ? readSelection("minionCount").value : globalRecords.RECORDEDminionCount;
    if (+settingsPath) {
      urlObject.adv.push(settingsPath);
    }
    else {globalRecords.urlObject.adv.push("")}
    settingsPath = !isOverride ? readSelection("spiritHealerStacks").value : globalRecords.RECORDEDspiritHealterStacks;
    if (+settingsPath) {
      urlObject.adv.push(settingsPath);
    }
    else {globalRecords.urlObject.adv.push("")}

    urlObject.adv.push("");
    manipulateURL.exportURLsetting("includeREdamage","adv",isOverride,globalRecords.RECORDEDuseNonStandardDR);
    manipulateURL.exportURLsetting("includeDMGKept","adv",isOverride,globalRecords.RECORDEDuseNonStandardDR);
    manipulateURL.exportURLsetting("includeRelicHealing","adv",isOverride,globalRecords.RECORDEDuseRelicHealing);
    manipulateURL.exportURLsetting("includeShields","adv",isOverride,globalRecords.RECORDEDuseShields);

    manipulateURL.exportURLsetting("greyActive","adv",isOverride,globalRecords.meleeFactors.greyHealthActive);
    manipulateURL.exportURLsetting("perfectDodge","adv",isOverride,globalRecords.meleeFactors.isPerfectDodge);
    manipulateURL.exportURLsetting("isEvade","adv",isOverride,globalRecords.meleeFactors.isEvade);
    manipulateURL.exportURLsetting("disableWeakspot","adv",isOverride,globalRecords.meleeFactors.weakspotOverride);
    
    //remove trailing 0's from the last parameter, helps clear the URL if no adv settings are active
    urlObject.adv[urlObject.adv.length-1] = urlObject.adv[urlObject.adv.length-1].replace(/\.?0+$/, '');

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


      if (!isOverride) {
        history.replaceState({}, '', newUrl);
      }
      else {
        return newUrl;
      }
    }
  },
  //Used in updateURLparameters for shorthand checks when generating binary settings to the URL
  exportURLsetting(checkBoxID,objElement,isOverride,providedBoolean) {
    if (!isOverride) {
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
          globalRecords.urlObject.adv[globalRecords.urlObject.adv.length-1] += "1";
        }
        else if (readSelection(checkBoxID) === null || readSelection(checkBoxID).checked === false) {
          globalRecords.urlObject.adv[globalRecords.urlObject.adv.length-1] += "0";
        }
      }
    }
    else {
      if (objElement != "adv") {
        if (providedBoolean) {globalRecords.urlObject[objElement] += "1";}
        else {globalRecords.urlObject[objElement] += "0";}
      }
      else {
        if (providedBoolean) {globalRecords.urlObject.adv[globalRecords.urlObject.adv.length-1] += "1";}
        else {globalRecords.urlObject.adv[globalRecords.urlObject.adv.length-1] += "0";}
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
    // manipulateTrait.updateTraitCollection();
    manipulateTrait.pointsOverLimit();//Trim points if cap exceeded
  //ARMOR
    if (urlArmor) {
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
  //RELIC AND FRAGMENTS
    if (urlRelic) {
      urlRelic = urlRelic.split(",");
      if (relics[urlRelic[0]] === undefined) {invalidEntries.push(urlRelic[0]);}
      else if (urlRelic[0]) {
        readSelection("relic").value = urlRelic[0];
        userTrigger.updateAccessory('relic',"",true);
      }
      for (let i=1;i<=3;i++) {
        if (fragments[urlRelic[i]] === undefined) {invalidEntries.push(urlRelic[i]);}
        else if (urlRelic[i]) {
          readSelection(`fragment${i}`).value = urlRelic[i];
          userTrigger.updateFragment('fragment',i,true);
        }
      }
    }
  //WEAPONS
    if (urlPrimary) {
      urlPrimary = urlPrimary.split(",");
      if (primary[urlPrimary[0]] === undefined) {invalidEntries.push(urlPrimary[0]);}
      else if (urlPrimary[0]) {
        readSelection("primary").value = urlPrimary[0];
        userTrigger.updateWeapon('primary',true);
      }
      if (rangedMutators[urlPrimary[1]] === undefined) {invalidEntries.push(urlPrimary[1]);}
      else if (urlPrimary[1]) {
        readSelection("rangedMutator1").value = urlPrimary[1];
        userTrigger.updateMutator('rangedMutator','1',true);
      }
      if (rangedMods[urlPrimary[2]] === undefined && primary[urlPrimary[0]].builtIN === "") {invalidEntries.push(urlPrimary[2]);}
      else if (urlPrimary[2]) {
        readSelection("rangedMod1").value = urlPrimary[2];
        userTrigger.updateMod('rangedMod','1',true);
      }
    }
    if (urlMelee) {
      urlMelee = urlMelee.split(",");
      if (melee[urlMelee[0]] === undefined) {invalidEntries.push(urlMelee[0]);}
      else if (urlMelee[0]) {
        readSelection("melee").value = urlMelee[0];
        userTrigger.updateWeapon('melee',true);
      }
      if (meleeMutators[urlMelee[1]] === undefined) {invalidEntries.push(urlMelee[1]);}
      else if (urlMelee[1]) {
        readSelection("meleeMutator").value = urlMelee[1];
        userTrigger.updateMutator('meleeMutator',true);
      }
    }
    if (urlSecondary) {
      urlSecondary = urlSecondary.split(",");
      if (secondary[urlSecondary[0]] === undefined) {invalidEntries.push(urlSecondary[0]);}
      else if (urlSecondary[0]) {
        readSelection("secondary").value = urlSecondary[0];
        userTrigger.updateWeapon('secondary',true);
      }
      if (rangedMutators[urlSecondary[1]] === undefined) {invalidEntries.push(urlSecondary[1]);}
      else if (urlSecondary[1]) {
        readSelection("rangedMutator2").value = urlSecondary[1];
        userTrigger.updateMutator('rangedMutator','2',true);
      }
      if (rangedMods[urlSecondary[2]] === undefined && secondary[urlSecondary[0]].builtIN === "") {invalidEntries.push(urlSecondary[2]);}
      else if (urlSecondary[2]) {
        readSelection("rangedMod2").value = urlSecondary[2];
        userTrigger.updateMod('rangedMod','2',true);
      }
    }
  //AMULET AND RINGS
    if (urlAccessory) {
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
  //CONCOCTIONS AND QUICK USE CONSUMABLES
    if (urlConcoctions) {
      updateFormulas();//Needed to update concoction limit
      urlConcoctions = urlConcoctions.split(",");
      for (let i=0;i<globalRecords.totalConcLimit;i++) {
        if (concoctions[urlConcoctions[i]] === undefined) {invalidEntries.push(urlConcoctions[i]);}
        else if (urlConcoctions[i]) {
          readSelection(`concoction${i+1}`).value = urlConcoctions[i];
          userTrigger.updateConsumable('concoction',i+1,true);
        }
      }
      if (quickUses[urlConcoctions[7]] === undefined) {invalidEntries.push(urlConcoctions[7]);}
      else if (urlConcoctions[7]) {
        readSelection(`quickUse1`).value = urlConcoctions[7];
        userTrigger.updateConsumable('quickUse',1,true);
      }
      if (quickUses[urlConcoctions[8]] === undefined) {invalidEntries.push(urlConcoctions[8]);}
      else if (urlConcoctions[8]) {
        readSelection(`quickUse2`).value = urlConcoctions[8];
        userTrigger.updateConsumable('quickUse',2,true);
      }
      if (quickUses[urlConcoctions[9]] === undefined) {invalidEntries.push(urlConcoctions[9]);}
      else if (urlConcoctions[9]) {
        readSelection(`quickUse3`).value = urlConcoctions[9];
        userTrigger.updateConsumable('quickUse',3,true);
      }
      if (quickUses[urlConcoctions[10]] === undefined) {invalidEntries.push(urlConcoctions[10]);}
      else if (urlConcoctions[10]) {
        readSelection(`quickUse4`).value = urlConcoctions[10];
        userTrigger.updateConsumable('quickUse',4,true);
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
    }
  //ADVANCED STATS LOGGING
    if (urlAdvanced) {
      urlAdvanced = urlAdvanced.split(",");
      if (urlAdvanced[0]) {
        readSelection("enemyCount").value = urlAdvanced[0];
      }
      if (urlAdvanced[1]) {
        globalRecords.isCoop = urlAdvanced[1];
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

      let lastParam = urlAdvanced.length-1;
      manipulateURL.importURLsetting("includeREdamage",urlAdvanced[lastParam][0]);
      manipulateURL.importURLsetting("includeDMGKept",urlAdvanced[lastParam][1]);
      manipulateURL.importURLsetting("includeRelicHealing",urlAdvanced[lastParam][2]);
      manipulateURL.importURLsetting("includeShields",urlAdvanced[lastParam][3]);
      manipulateURL.importURLsetting("greyActive",urlAdvanced[lastParam][4]);
      manipulateURL.importURLsetting("perfectDodge",urlAdvanced[lastParam][5]);
      manipulateURL.importURLsetting("isEvade",urlAdvanced[lastParam][6]);

      manipulateURL.importURLsetting("disableWeakspot",urlAdvanced[lastParam][7]);

      updateFormulas();
    }
  //Last updateFormulas for good measure, if feed exists, to update based on everything done and settings selected
    if (feed != "") {
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
  updateConsumable(type,ID,parent) {
    let selectedConsumable = readSelection(`${type}${ID}`);

    if (!concoctions[selectedConsumable.value] && !quickUses[selectedConsumable.value]) {
      console.log("checked")
      selectedConsumable.value = "";//If the selection/input doesn't exist, clear it to blank.
    }

    //Assign the value to the general storage, separate from the UI
    globalRecords.consumables[`${type}${ID}`] = selectedConsumable.value;
    //Update the UI with the selection
    readSelection(`${type}${ID}Icon`).src=consumables[`${type}s`][selectedConsumable.value].image;
    readSelection(`${type}${ID}IconMAIN`).src=consumables[`${type}s`][selectedConsumable.value].image;
    readSelection(`${type}${ID}Desc`).innerHTML = userTrigger.updateSubstatColor(consumables[`${type}s`][selectedConsumable.value].desc);
    //Pass the selected value into duplicate checks, under the same function to repeat if swapped,
    //-using "several" handling to loop through more than 2 options, stopping the loop at the conc limit
    if (type==="concoction") {
      userTrigger.checkDuplicateSelection(type,ID,`updateConsumable`,`several`,globalRecords.totalConcLimit);
    }
    else if (type==="quickUse") {
      userTrigger.checkDuplicateSelection(type,ID,`updateConsumable`,`several`,4);
    }
    if (!parent) {
      updateFormulas();
    }
  },
  //Triggers whenever a new weapon is selected
  updateWeapon(type,parent) {
    let selectedWeapon = readSelection(type);

    selectedWeapon.value = !weapons[type][selectedWeapon.value] ? "" : selectedWeapon.value;//Clear selection if it doesn't exist in tables.
    //Update 
    globalRecords.weapons[type] = selectedWeapon.value;
    //Update accessory image, description, and then refresh formulas.
    readSelection(`${type}Image`).src=weapons[type][selectedWeapon.value].image;
    readSelection(`${type}ImageMAIN`).src=weapons[type][selectedWeapon.value].image;
    readSelection(`${type}Description`).innerHTML=userTrigger.updateSubstatColor(weapons[type][selectedWeapon.value].desc);
    // readSelection(`${type}${modifier}Desc`).innerHTML=gear[jsonID][selectedValue].desc;

    let weaponObjectReference = weapons[type][selectedWeapon.value]
    if (type==="melee") {
      if (weaponObjectReference.builtIN) {
        readSelection("meleeMod").innerHTML = weaponObjectReference.builtIN;
        readSelection("meleeModImage").src = builtInMelee[weaponObjectReference.builtIN].image;
        readSelection("meleeModMAIN").innerHTML = weaponObjectReference.builtIN;
        readSelection("meleeModDesc").innerHTML = userTrigger.updateSubstatColor(builtInMelee[weaponObjectReference.builtIN].desc);
      }
      else {
        readSelection("meleeMod").innerHTML = "";
        readSelection("meleeModImage").src = builtInMelee[""].image;
        readSelection("meleeModMAIN").innerHTML = "";
        readSelection("meleeModDesc").innerHTML = "";
      }
    }
    else if (type==="primary") {
      let path = readSelection("rangedMod1");
      const selector = readSelection("rangedMod1List");
      const entries = selector.querySelectorAll('option');
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
      }
    }
    else if (type==="secondary") {
      let path = readSelection("rangedMod2");
      const selector = readSelection("rangedMod2List");
      const entries = selector.querySelectorAll('option');
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
      }
    }
    if (!parent) {
      updateFormulas();
    }
  },
  //Triggers whenever a new mutator is selected
  updateMutator(type,value,parent) {
    let collection = 'melee';
    let modifier = ``;
    if (value===`1`) {collection = 'primary';modifier=value}
    else if (value===`2`) {collection = `secondary`;modifier=value}
    let selectedMutator = readSelection(`${type}${modifier}`);meleeMutators
    selectedMutator.value = !mutators[`${collection}Mutators`][selectedMutator.value] ? "" : selectedMutator.value;//clear invalid selections.

    //Assign the value to the general storage
    globalRecords.weapons[`${collection}Mutator`] = selectedMutator.value;
    readSelection(`${collection}MutatorMAIN`).innerHTML = selectedMutator.value;
    //Update accessory image, description, and then refresh formulas.
    readSelection(`${collection}MutatorDesc`).innerHTML = userTrigger.updateSubstatColor(mutators[`${collection}Mutators`][selectedMutator.value].desc);
    if (type==="rangedMutator") { //Melee obv needs no dupe checks. ranged1 is primary, ranged2 secondary.
      userTrigger.checkDuplicateSelection(type,value,`updateMutator`,`duo`);
    }
    if (!parent) {
      updateFormulas();
    }
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
      selectedMod.value = !mods[`${collection}Mods`][selectedMod.value] ? "" : selectedMod.value;//clear invalid selections.

      //Assign the value to the general storage
      globalRecords.weapons[`${collection}Mod`] = selectedMod.value;
      readSelection(`${collection}ModMAIN`).innerHTML = selectedMod.value;
      readSelection(`${collection}ModDesc`).innerHTML=userTrigger.updateSubstatColor(mods[`${collection}Mods`][selectedMod.value].desc);
      readSelection(`${collection}ModImage`).src=mods[`${collection}Mods`][selectedMod.value].image;
      if (type==="rangedMod") { //Melee obv needs no dupe checks. ranged1 is primary, ranged2 secondary.
        userTrigger.checkDuplicateSelection(type,value,`updateMod`,`duo`);
      }
    }
    if (!parent) {
      updateFormulas();
    }
  },
  //Update armor related information
  updateArmor(armorPiece,parent) {
    elem_ID = armorPiece + "Choice";
    json_ID = armorPiece + "s"
    let selectedValue = readSelection(elem_ID);
    selectedValue.value = !armor[json_ID][selectedValue.value] ? "" : selectedValue.value;//clear invalid selections
    let selectedArmor = armor[json_ID][selectedValue.value]
    globalRecords.armor[armorPiece] = selectedValue.value;
    //assign new image path to the img tag src
    readSelection(`${armorPiece}Image`).src=selectedArmor.image;
    readSelection(`${armorPiece}MAIN`).src=selectedArmor.image;
    readSelection(`${armorPiece}Armor`).innerHTML=selectedArmor.stats.Armor;
    readSelection(`${armorPiece}Weight`).innerHTML=selectedArmor.stats.Encumbrance;
    if (!parent) {
      updateFormulas();
    }
  },
  //Triggers whenever a new amu/ring/relic is selected
  updateAccessory(type,place,parent) {
    let jsonID = `${type}s`;
    let modifier = place ?? "";
    let selectedValue = readSelection(`${type}${modifier}`);
    selectedValue.value = !gear[jsonID][selectedValue.value] ? "" : selectedValue.value;//clear invalid selections.
    //Update accessory image, description, and then refresh formulas.
    readSelection(`${type}${modifier}Image`).src=gear[jsonID][selectedValue.value].image;
    readSelection(`${type}${modifier}MAIN`).src=gear[jsonID][selectedValue.value].image;
    readSelection(`${type}${modifier}Desc`).innerHTML=userTrigger.updateSubstatColor(gear[jsonID][selectedValue.value].desc);
    if (type==="ring") {
      userTrigger.checkDuplicateSelection(type,place,`updateAccessory`,`several`,4);
    }
    globalRecords.accessories[`${type}${modifier}`] = selectedValue.value;
    if (!parent) {
      updateFormulas();
    }
  },
  //Triggers whenever a new fragment is selected
  updateFragment(elem,ID,parent) {
    userTrigger.checkDuplicateSelection(elem,ID,`updateFragment`,`several`,3);
    let selectedValue = readSelection(`fragment${ID}`);
    selectedValue.value = !gear.fragments[selectedValue.value] ? "" : selectedValue.value;//clear invalid selections.
    globalRecords.accessories[`fragment${ID}`] = selectedValue.value
    if (!parent) {
      updateFormulas();
    }
  },
  //Triggers whenever a given archetype has a new selection.
  //By default, will call updateTraitCollection and updateAbility, as they are necessary.
  updateArchetype(archetype,value,parent) {
    let overArchetype = `${archetype}${value}`
    let selectedArchetype = readSelection(overArchetype).value;
    //Update archetype icon
    readSelection(`${overArchetype}Icon`).src=classInfo[selectedArchetype].classIcon;
    readSelection(`${overArchetype}MAIN`).src=classInfo[selectedArchetype].classIcon;
    let axis = value === "1" ? "225deg" : "135deg";
    readSelection(`${overArchetype}MAINbg`).style.background = `linear-gradient(${axis}, ${classInfo[selectedArchetype].gradient[0]}, ${classInfo[selectedArchetype].gradient[1]},black)`;

    // readSelection("backgroundHalvesLeft").style.background = `linear-gradient(225deg, ${classPath1.gradient[0]}, ${classPath1.gradient[1]},black)`;
    // readSelection("backgroundHalvesRight").style.background = `linear-gradient(135deg, ${classPath2.gradient[0]}, ${classPath2.gradient[1]},black)`;


    //Clear abilities left in the dropdown, if any were there
    readSelection(`${overArchetype}abilityList`).innerHTML="";
    readSelection(`${overArchetype}ability`).value="";
    //Populate ability list based on selected archetype
    createHTML.populateGear(`${overArchetype}abilityList`,classInfo[selectedArchetype].abilities);
    //Populate info on first ability that populates selection by default. Also assigns selected class and ability to global records
    userTrigger.updateAbility(overArchetype,true);
    //Populate passive name and descriptions
    let classPassivePath = classInfo[selectedArchetype].passives;
    for (let i=1;i<=4;i++) {
      readSelection(`${overArchetype}passive${i}`).innerHTML = classPassivePath[`passive${i}`].name;
      readSelection(`${overArchetype}passive${i}desc`).innerHTML = userTrigger.updateSubstatColor(classPassivePath[`passive${i}`].desc);
    }
    //Update traits based on class selection
    manipulateTrait.updateTraitCollection(globalRecords.archetype1Old,globalRecords.archetype2Old);
    //Check if this selection was a duplicate, and if it was, swap places with the old info.
    userTrigger.checkDuplicateSelection(archetype,value,`updateArchetype`,`duo`);
    //Concatenates the two selected classes, uses resulting string to search comboTitle
    readSelection("comboTitle").innerHTML=titleCombos[`${readSelection("archetype1").value}${readSelection("archetype2").value}`];
    //In closing, update all formulas
    if (!parent) {
      updateFormulas();
    }
  },
  //Triggers whenever the parent archetype changes, or whenever a new ability is selected
  updateAbility(archetype,parent) {
    let selectedArchetype = readSelection(archetype).value;
    let selectedAbility = readSelection(`${archetype}ability`).value;
    //since abilities are always called in archs or ability updates, assign archs/abilities to global records here
    if (archetype==="archetype1") {
      globalRecords.archs.one.class = selectedArchetype;
      globalRecords.archs.one.ability = selectedAbility;
      readSelection(`primePerk`).innerHTML=classInfo[selectedArchetype].primePerk;
      // readSelection(`primePerkIcon`).src=classInfo[selectedArchetype].primePerkImage;
      readSelection(`primePerkDesc`).innerHTML=userTrigger.updateSubstatColor(classInfo[selectedArchetype].primePerkDesc);
    }
    else if (archetype==="archetype2") {
      globalRecords.archs.two.class = selectedArchetype;
      globalRecords.archs.two.ability = selectedAbility;
    }
    readSelection(`${archetype}abilityDesc`).innerHTML=userTrigger.updateSubstatColor(classInfo[selectedArchetype].abilities[selectedAbility].desc);
    readSelection(`${archetype}abilityIcon`).src=classInfo[selectedArchetype].abilities[selectedAbility].image;
    if (!parent) {
      updateFormulas();
    }
  },
  //Triggers trait updates based on newly selected trait and associate level.
  //Also prevents items from going above 85 total points spent.
  updateTrait(elemID,adjustment) {
    let traitName = readSelection(`trait${elemID}`).value;
    let traitLevel = +readSelection(`trait${elemID}Level`).value <= 10 ? +readSelection(`trait${elemID}Level`).value : 10;
    traitLevel = traitLevel>=0 ? traitLevel : 0;
    traitLevel = adjustment ?? traitLevel;
    let totalPoints = globalRecords.greatTraitRecords[elemID-1].level;
  //Checks if trait selected is blank. If it is, skip pretty much everything.

    let change = traitLevel - totalPoints;
    //If we would exceed the trait cap, minus from this trait's level the amount that would exceed it
    if ((globalRecords.traitPointCount + change) > globalRecords.traitPointCap) {traitLevel -= globalRecords.traitPointCount + change - globalRecords.traitPointCap;}
    //If the trait remains unselected, remove the level from it if modified
    if (traitName === "") {traitLevel = 0}

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
        userTrigger[functionName](collection,oppositeValue,true);
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
        description = description.replace(regEx, `<span class="${substat.replace(/\s/g,"")}">${substat.toUpperCase()}</span>`);
      }
    }
    //d= digit character, w = word character
    let regExNumbers = new RegExp(`\\b(\\d[%\\w]*)`, "gi");
    description = description.replace(regExNumbers, `<span class="numberTag">$&</span>`);
    return description;
  }
}
/* ---------------------------------------------------------------------------------------- */
/* ------------------ Everything used in updateFormulas() --------------------------------- */
/* ---------------------------------------------------------------------------------------- */
let formulasValues = {
  //Used in updateFormulas() to fill consumable values on the master table
  //Utilizes toggle states
  pullConsumables (index,concLimit) {
    let isUIcalcs = index != "greatTableKnowerOfAll";
    let recordPath = !isUIcalcs ? globalRecords[`consumables`] : globalRecords[`ALTconsumables`];

    let toggleCheck;
  //Concoctions
    for (let i=1;i<=7;i++) {
      let concoction = recordPath[`concoction${i}`];
      if (i<=concLimit) {
        if (!isUIcalcs) { readSelection(`concoction${i}MAINbox`).style.display = "flex";}
        toggleCheck = (!isUIcalcs) ? readSelection(`USEtoggledConc${i}`).checked : false;
        if (!toggleCheck) {formulasValues.pullStats(index,concoctions[concoction].stats);}
      }
      else {
        if (!isUIcalcs) {
          //Only do this stuff if we're not looping.
          //Generated combos already account for the limit on as they are generated.
          concoction = "";
          readSelection(`concoction${i}`).value = "";
          readSelection(`concoction${i}Icon`).src = "images/Remnant/clear.png";
          readSelection(`concoction${i}IconMAIN`).src = "images/Remnant/clear.png";
          readSelection(`concoction${i}Desc`).innerHTML = "";
          globalRecords[`concoction${i}old`]="";
          readSelection(`concoction${i}MAINbox`).style.display = "none";
        }
      }
    }
  //Quick-Use Consumables
  for (let i=1;i<=4;i++) {
    if (!!quickUses[recordPath[`quickUse${i}`]]) {
      toggleCheck = (!isUIcalcs) ? readSelection(`USEtoggledQuick${i}`).checked : false;
      if (!toggleCheck) {formulasValues.pullStats(index,quickUses[recordPath[`quickUse${i}`]].stats);}
    }
  }
  },
  //Used in updateFormulas() to fill weapon/mod/mutator values on the master table
  //Utilizes toggle states
  pullWeapons (index) {
    let isUIcalcs = index != "greatTableKnowerOfAll";
    let path = !isUIcalcs ? globalRecords[`weapons`] : globalRecords[`ALTweapons`];
    let toggleCheck;

  //Weapons
    toggleCheck = (!isUIcalcs) ? readSelection(`USEtoggledPrimary`).checked : false;
    if (!toggleCheck) {formulasValues.pullStats(index,weapons.primary[path.primary].stats);}
    toggleCheck = (!isUIcalcs) ? readSelection(`USEtoggledMelee`).checked : false;
    if (!toggleCheck) {formulasValues.pullStats(index,weapons.melee[path.melee].stats);}
    toggleCheck = (!isUIcalcs) ? readSelection(`USEtoggledSecondary`).checked : false;
    if (!toggleCheck) {formulasValues.pullStats(index,weapons.secondary[path.secondary].stats);}
  //Mutators
    toggleCheck = (!isUIcalcs) ? readSelection(`USEtoggledpMutator`).checked : false;
    if (!toggleCheck) {formulasValues.pullStats(index,mutators.primaryMutators[path.primaryMutator].stats);}
    toggleCheck = (!isUIcalcs) ? readSelection(`USEtoggledmMutator`).checked : false;
    if (!toggleCheck) {formulasValues.pullStats(index,mutators.meleeMutators[path.meleeMutator].stats);}
    toggleCheck = (!isUIcalcs) ? readSelection(`USEtoggledsMutator`).checked : false;
    if (!toggleCheck) {formulasValues.pullStats(index,mutators.secondaryMutators[path.secondaryMutator].stats);}
  //Mods
  toggleCheck = (!isUIcalcs) ? readSelection(`USEtoggledpMod`).checked : false;
  if (!toggleCheck) {
    let checkWeaponPath = weapons.primary[path.primary]
    if (!checkWeaponPath.builtIN) {formulasValues.pullStats(index,mods.primaryMods[path.primaryMod].stats);}
    else {formulasValues.pullStats(index,mods.builtInPrimaryMods[checkWeaponPath.builtIN].stats);}
  }
  toggleCheck = (!isUIcalcs) ? readSelection(`USEtoggledmMod`).checked : false;
  if (!toggleCheck) {
    let checkWeaponPath = weapons.melee[path.melee]
    if (checkWeaponPath.builtIN){formulasValues.pullStats(index,mods.builtInMeleeMods[checkWeaponPath.builtIN].stats);}//melee have no optional mods, all built-in
  }
  toggleCheck = (!isUIcalcs) ? readSelection(`USEtoggledsMod`).checked : false;
  if (!toggleCheck) {
    let checkWeaponPath = weapons.secondary[path.secondary]
    if (!checkWeaponPath.builtIN) {formulasValues.pullStats(index,mods.secondaryMods[path.secondaryMod].stats);}
    else {formulasValues.pullStats(index,mods.builtInSecondaryMods[checkWeaponPath.builtIN].stats);}
  }
  },
  //Used in updateFormulas() to fill trait property values on the master table
  //Utilizes toggle states
  pullTraits (index) {
    const isUIcalcs = index != "greatTableKnowerOfAll";
    const recordReference = globalRecords[isUIcalcs ? "ALTgreatTraitRecords" : "greatTraitRecords"]; //Yoink all active trait values
    const tableReference = valueTables[index];

    for (const trait of recordReference) {
      const traitLevel = trait.level;
      const traitPath = traits[trait.name];
      const propertyArray = Array.isArray(traitPath.property);
      const secondProperty = traitPath.property2;
      const secondPropertyArray = Array.isArray(traitPath.property);

      if (traitPath) {
        if (!propertyArray) {
          if (traitPath.property !== "REdamage" && traitPath.property !== "DMGKept") {tableReference[traitPath.property] += traitPath.level[traitLevel];}
          else {tableReference[traitPath.property].push(traitPath.level[traitLevel]);} //put these two types into their respective multiplicative arrays
        }
        else {
          for (const attribute of traitPath.property) {tableReference[attribute] += traitPath.level[traitLevel];//Otherwise just add the shit
        }
        }
        if (traitPath.custom) {customItemFunctions[traitPath.custom]();}//If a custom function exists, call it


        if (secondProperty) {
          if (!secondPropertyArray) {
            if (traitPath.property2 !== "REdamage" && traitPath.property2 !== "DMGKept") {tableReference[traitPath.property2] += traitPath.level2[traitLevel];}
            else {tableReference[traitPath.property2].push(traitPath.level2[traitLevel]);} //put these two types into their respective multiplicative arrays
          }
          else {
            for (const attribute of traitPath.property2) {tableReference[attribute] += traitPath.level2[traitLevel];//Otherwise just add the shit
          }
          }
          if (traitPath.custom2) {customItemFunctions[traitPath.custom2]();}//If a custom function exists, call it
        }

      }
    }
  },
  //Used in updateFormulas() to read gear/accessory specific statistics and add them to the master table
  //Utilizes toggle states
  pullGearStats(index,ping) {
    let isUIcalcs = index != "greatTableKnowerOfAll";
    let toggleCheck;

    let archsTableName = !isUIcalcs ? `archs` : `ALTarchs`;
    let path1 = classInfo[globalRecords[archsTableName].one.class];
    let path2 = classInfo[globalRecords[archsTableName].two.class];
    let ability1 = globalRecords[archsTableName].one.ability;
    let ability2 = globalRecords[archsTableName].two.ability;
    let pathALT = globalRecords.searchSettingsToggles;

    //If this is just a quick stat pull so can we can look at armor after, then skip armor here
    if (!ping) {
      let armorRecordPath = !isUIcalcs ? globalRecords[`armor`] : globalRecords[`ALTarmor`];
      let head = armor.helmets[armorRecordPath.helmet].stats;
      let chest = armor.chests[armorRecordPath.chest].stats;
      let leg = armor.legs[armorRecordPath.leg].stats;
      let hand = armor.hands[armorRecordPath.hand].stats;
      //ARMOR
      toggleCheck = (!isUIcalcs) ? readSelection(`USEtoggledHead`).checked : false;
      if (!toggleCheck) {formulasValues.pullStats(index,head);}
      toggleCheck = (!isUIcalcs) ? readSelection(`USEtoggledChest`).checked : false;
      if (!toggleCheck) {formulasValues.pullStats(index,chest);}
      toggleCheck = (!isUIcalcs) ? readSelection(`USEtoggledLegs`).checked : false;
      if (!toggleCheck) {formulasValues.pullStats(index,leg);}
      toggleCheck = (!isUIcalcs) ? readSelection(`USEtoggledHands`).checked : false;
      if (!toggleCheck) {formulasValues.pullStats(index,hand);}
    }
    //AMULET
    toggleCheck = (!isUIcalcs) ? readSelection(`USEtoggledAmulet`).checked : false;
    let tableName = !isUIcalcs ? `accessories` : `ALTaccessories`;//---
    if (!toggleCheck) {formulasValues.pullStats(index,amulets[globalRecords[tableName].amulet].stats);}
    //RINGS, PASSIVES, and FRAGMENTS
    for (let i=1;i<=4;i++) {
      if (!(!isUIcalcs ? readSelection(`USEtoggledRing${i}`).checked : false))
        {formulasValues.pullStats(index,rings[globalRecords[tableName][`ring${i}`]].stats);}
      if (!(!isUIcalcs ? readSelection(`USEtoggledPassive${i}`).checked : pathALT[`usePassive${i}`]))
        {formulasValues.pullStats(index,path1.passives[`passive${i}`].stats);}
      if (!(!isUIcalcs ? readSelection(`USEtoggledPassive${i+4}`).checked : pathALT[`usePassive${i+4}`]))
        {formulasValues.pullStats(index,path2.passives[`passive${i}`].stats);}
      if (i<=3)
        {formulasValues.pullStats(index,fragments[globalRecords[tableName][`fragment${i}`]].stats)}
    }
    //RELIC
    toggleCheck = (!isUIcalcs) ? readSelection(`USEtoggledRelic`).checked : false;
    if (!toggleCheck) {formulasValues.pullStats(index,relics[globalRecords[tableName].relic].stats);}
    //PRIME PERK
    toggleCheck = (!isUIcalcs) ? readSelection(`USEtoggledPrimeP`).checked : pathALT.usePrimePerk;
    if (!toggleCheck) {formulasValues.pullStats(index,path1.primeStats);}
    //ABILITIES
    toggleCheck = (!isUIcalcs) ? readSelection(`USEtoggledAbility1`).checked : pathALT.useAbility1;
    if (!toggleCheck) {formulasValues.pullStats(index,path1.abilities[ability1].stats);}
    toggleCheck = (!isUIcalcs) ? readSelection(`USEtoggledAbility2`).checked : pathALT.useAbility2;
    if (!toggleCheck) {formulasValues.pullStats(index,path2.abilities[ability2].stats);}
  },
  //Shorthand for looping through an elements "stats" object and adding it to the corresponding master value
  pullStats(index,path) {
    let valueTable = valueTables[index];
    for (let elements in path) {
      if (Array.isArray(valueTable[elements])) {valueTable[elements].push(path[elements]);}//If the greatTable type is an array, like DMGKept or REDamage
      else {valueTable[elements] += path[elements];}//If the value is a general value, simply add it to the existing value on greatTable
    }
  },
  //Shorthand for shit I got tired of typing every god damn time.
  updateDisplay(elemID,statistic,rounding,percent) {
    let percentage = percent ?? "";
    readSelection(elemID).innerHTML = `${statistic.toFixed(rounding)}${percentage}`;
  },
  //Used to call unique item functions AFTER the base statistics have populated greatTableKnowerOfAll
  callUniqueFunctions(index,item,relicHPscaled,totalHealth,tier,insertedStatistic) {
    //relicHPscaled and totalHealth are only used for when item is "relic"
    let isUIcalcs = index != "greatTableKnowerOfAll";
    let toggleCheck,customPath;


    if (item==="relic") {//relics do not use an inserted statistic currently
      let relicComplexArray;
      toggleCheck = !isUIcalcs ? readSelection(`USEtoggledRelic`).checked : false;
      if (!toggleCheck) {
        customPath = !isUIcalcs ? globalRecords.accessories.relic : globalRecords.ALTaccessories.relic;
        if (!isUIcalcs) {readSelection("relicComplexEffect").innerHTML = "";}
        
        if (relics[customPath][`custom${tier}`]) {
          // if (!isUIcalcs) {readSelection("complexInput").disabled = true;}//Right now there is no more need for user input on relics. Might use again later.
          relicComplexArray = customItemFunctions.relic[relics[customPath][`custom${tier}`]](index,relicHPscaled,totalHealth);
        }
      }
      //Fragments
      for (let i=1;i<=3;i++) {
        customPath = !isUIcalcs ? globalRecords.accessories[`fragment${i}`] : globalRecords.ALTaccessories[`fragment${i}`];
        if (fragments[customPath][`custom${tier}`]) {
          customItemFunctions[fragments[customPath][`custom${tier}`]]();
        }
      }
      return relicComplexArray;
    }
    else {
      //rings
      for (let i=1;i<=4;i++) {
        toggleCheck = !isUIcalcs ? readSelection(`USEtoggledRing${i}`).checked : false;
        customPath = !isUIcalcs ? globalRecords.accessories[`ring${i}`] : globalRecords.ALTaccessories[`ring${i}`];
        if (!toggleCheck) {
          if (rings[customPath][`custom${tier}`]) {
            customItemFunctions.rings[rings[customPath][`custom${tier}`]](index,insertedStatistic);
          }
        }
      }
      //Amulet
      toggleCheck = !isUIcalcs ? readSelection("USEtoggledAmulet").checked : false;
      if (!toggleCheck) {
        customPath = !isUIcalcs ? globalRecords.accessories.amulet : globalRecords.ALTaccessories.amulet;
        if (amulets[customPath][`custom${tier}`]) {
          customItemFunctions.amulets[amulets[customPath][`custom${tier}`]](index,insertedStatistic);
        }
      }
      //Class
      let path1 = classInfo[!isUIcalcs ? globalRecords.archs.one.class : globalRecords.ALTarchs.one.class];
      let path2 = classInfo[!isUIcalcs ? globalRecords.archs.two.class : globalRecords.ALTarchs.two.class];
      let ability1 = !isUIcalcs ? globalRecords.archs.one.ability : globalRecords.ALTarchs.one.ability;
      let ability2 = !isUIcalcs ? globalRecords.archs.two.ability : globalRecords.ALTarchs.two.ability;
      //Prime Perk
      toggleCheck = !isUIcalcs ? readSelection(`USEtoggledPrimeP`).checked : false;
      if (!toggleCheck) {if (path1[`custom${tier}`]) {customItemFunctions[path1[`custom${tier}`]](index,insertedStatistic);}}
      //Archetype1
      toggleCheck = !isUIcalcs ? readSelection(`USEtoggledAbility1`).checked : false;
      if (!toggleCheck) {if (path1.abilities[ability1][`custom${tier}`]) {customItemFunctions[path1.abilities[ability1[`custom${tier}`]]](index,insertedStatistic);}}
      for (let i=1;i<=4;i++) {
        toggleCheck = !isUIcalcs ? readSelection(`USEtoggledPassive${i}`).checked : false;
        if (!toggleCheck) {if (path1.passives[`passive${i}`][`custom${tier}`]) {customItemFunctions[path1.passives[`passive${i}`][`custom${tier}`]](index,insertedStatistic);}}
      }
      //Archetype2
      toggleCheck = !isUIcalcs ? readSelection(`USEtoggledAbility2`).checked : false;
      if (!toggleCheck) {if (path2.abilities[ability2][`custom${tier}`]) {customItemFunctions[path2.abilities[ability2][`custom${tier}`]](index,insertedStatistic);}}
      for (let i=1;i<=4;i++) {
        toggleCheck = !isUIcalcs ? readSelection(`USEtoggledPassive${i+4}`).checked : false;
        if (!toggleCheck) {if (path2.passives[`passive${i}`][`custom${tier}`]) {customItemFunctions[path2.passives[`passive${i}`][`custom${tier}`]](index,insertedStatistic);}}
      }

      //Mutators
      toggleCheck = !isUIcalcs ? readSelection(`USEtoggledpMutator`).checked : false;
      if (!toggleCheck) {
        customPath = !isUIcalcs ? globalRecords.weapons.primaryMutator : globalRecords.ALTweapons.primaryMutator;
        if (mutators.primaryMutators[customPath][`custom${tier}`]) {customItemFunctions.mutators[mutators.primaryMutators[customPath][`custom${tier}`]](index,insertedStatistic);}
      }
      toggleCheck = !isUIcalcs ? readSelection(`USEtoggledmMutator`).checked : false;
      if (!toggleCheck) {
        customPath = !isUIcalcs ? globalRecords.weapons.meleeMutator : globalRecords.ALTweapons.meleeMutator;
        if (mutators.meleeMutators[customPath][`custom${tier}`]) {customItemFunctions.mutators[mutators.meleeMutators[customPath][`custom${tier}`]](index,insertedStatistic);}
      }
      toggleCheck = !isUIcalcs ? readSelection(`USEtoggledsMutator`).checked : false;
      if (!toggleCheck) {
        customPath = !isUIcalcs ? globalRecords.weapons.secondaryMutator : globalRecords.ALTweapons.secondaryMutator;
        if (mutators.secondaryMutators[customPath][`custom${tier}`]) {customItemFunctions.mutators[mutators.secondaryMutators[customPath][`custom${tier}`]](index,insertedStatistic);}
      }

      //MODS
      //PRIMARY
      toggleCheck = !isUIcalcs ? readSelection(`USEtoggledpMod`).checked : false;
      if (!toggleCheck) {
        let primaryWeapon = !isUIcalcs ? globalRecords.weapons.primary : globalRecords.ALTweapons.primary;
        let primaryWeaponMod = !isUIcalcs ? globalRecords.weapons.primaryMod : globalRecords.ALTweapons.primaryMod;
        let checkWeaponPath = weapons.primary[primaryWeapon];
        if (!checkWeaponPath.builtIN) {
          if (mods.primaryMods[primaryWeaponMod][`custom${tier}`]) {customItemFunctions.primaryMods[mods.primaryMods[primaryWeaponMod][`custom${tier}`]](index,insertedStatistic);}
        }
        else {//If the Primary weapon has a built-in mod
          if (mods.builtInPrimaryMods[primaryWeaponMod][`custom${tier}`]) {customItemFunctions.primaryMods[mods.builtInPrimaryMods[primaryWeaponMod][`custom${tier}`]](index,insertedStatistic);}
        }
      }
      //MELEE
      toggleCheck = !isUIcalcs ? readSelection(`USEtoggledmMod`).checked : false;
      if (!toggleCheck) {
        let meleeWeapon = !isUIcalcs ? globalRecords.weapons.melee : globalRecords.ALTweapons.melee;
        let checkWeaponPath = weapons.melee[meleeWeapon];
        if (checkWeaponPath.builtIN){//If the Melee weapon has a built-in mod
          if (mods.builtInMeleeMods[checkWeaponPath.builtIN][`custom${tier}`]) {
            customItemFunctions.meleeMods[mods.builtInMeleeMods[checkWeaponPath.builtIN][`custom${tier}`]](index,insertedStatistic);
          }
        }
      }
      //SECONDARY
      toggleCheck = !isUIcalcs ? readSelection(`USEtoggledsMod`).checked : false;
      if (!toggleCheck) {
        let secondaryWeapon = !isUIcalcs ? globalRecords.weapons.secondary : globalRecords.ALTweapons.secondary;
        let secondaryWeaponMod = !isUIcalcs ? globalRecords.weapons.secondaryMod : globalRecords.ALTweapons.secondaryMod;
        let checkWeaponPath = weapons.secondary[secondaryWeapon];
        if (!checkWeaponPath.builtIN) {
          if (mods.secondaryMods[secondaryWeaponMod][`custom${tier}`]) {
            customItemFunctions.secondaryMods[mods.secondaryMods[secondaryWeaponMod][`custom${tier}`]](index,insertedStatistic);
          }
        }
        else {//If the Secondary weapon has a built-in mod
          if (mods.builtInSecondaryMods[secondaryWeaponMod][`custom${tier}`]) {
            customItemFunctions.secondaryMods[mods.builtInSecondaryMods[secondaryWeaponMod][`custom${tier}`]](index,insertedStatistic);
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
  //Remember to add stats to tags array in data.js whenever making one of these
  // valueTables[index].anyStatHere += 1;
  "amulets": {
    abrasiveWhetstone(index) {//50
      if (valueTables[index].outBLEED>0) {
        valueTables[index].AllCritChance += 0.15;
        valueTables[index].AllCritDamage += 0.15;
      }
    },
    birthrightOfTheLost(index) {//0 user input
        valueTables[index].outEXPOSED += globalRecords.meleeFactors.isPerfectDodge ? 1 : 0;
    },
    brewMasters(index) {//0 user selection
      let isUIcalcs = index != "greatTableKnowerOfAll";
      let customPath;

      if (!isUIcalcs) {
        for (let i=1;i<=7;i++) {
          customPath = !isUIcalcs ? globalRecords.consumables[`concoction${i}`] : globalRecords.ALTconsumables[`concoction${i}`];
          if (customPath) {
            valueTables[index].FlatDR += 0.02;
          }
        }
      }
      else {
        //If we are in the middle of cycles loops, and maybe the filtered concoctions are less than the limit, always apply the limit amount of DR so we don't skip a possible build
        valueTables[index].FlatDR += 0.02 * valueTables[index].ConcLimit;
      }
    },
    chainsOfAmplification(index) {//50
      valueTables[index].AllDamage += valueTables[index].outgoingStatus ? 0.20 : 0;
    },
    daredevil(index) {//50
      let armorMissing = 4;
      let isUIcalcs = index === "greatTableKnowerOfAll";
      let customPath = isUIcalcs ? globalRecords.armor : globalRecords.ALTarmor;
      if (!isUIcalcs) {
        //For now, we assume if Daredevil ever shows up in the cycles, the player should always be naked
        globalRecords.ALTarmor.helmet = "";
        globalRecords.ALTarmor.chest = "";
        globalRecords.ALTarmor.leg = "";
        globalRecords.ALTarmor.hand = "";
      }
      if (customPath.helmet) {armorMissing -= 1;}
      if (customPath.chest) {armorMissing -= 1;}
      if (customPath.leg) {armorMissing -= 1;}
      if (customPath.hand) {armorMissing -= 1;}
      valueTables[index].AllDamage += 0.075 * armorMissing;
      valueTables[index].MovementSpeed += 0.03 * armorMissing;
    },
    deathSoakedIdol(index) {//50
      if (valueTables[index].outgoingStatus) {
        let maxStacks = 5;
        let count = globalRecords.meleeFactors.enemyCount;
        count += valueTables[index].incomingStatus ? 1 : 0;
        valueTables[index].AllDamage += Math.min(maxStacks,count) * 0.06;
      }
    },
    differenceEngine(index) {//50
      if (valueTables[index].Shield > 0) {
        valueTables[index].Lifesteal += 0.045;
        valueTables[index].AllDamage += 0.20;
      }
    },
    effigyPendant(index) {//0 user input
      if (globalRecords.meleeFactors.greyHealthActive) {
        valueTables[index].FlatDR += 0.1;
        valueTables[index].AllDamage += 0.15;
        valueTables[index].GreyHPHitThreshold += 1;
      }
    },
    energyDiverter(index) {//50
      if (valueTables[index].Shield > 0) {
        valueTables[index].AllCritChance += 0.10;
        valueTables[index].AllDamage += 0.15;
      }
    },
    fragrantThorn(index) {//0. Not user input, but needs to happen first.
      let activeStatus = 0;
      let reference = valueTables[index];

      if (reference.outgoingStatus) {
        //Slow, bleed, burn, overloaded, corroded
        activeStatus += reference.outSLOW ? 1 : 0;
        activeStatus += reference.outBLEED ? 1 : 0;
        activeStatus += reference.outBURN ? 1 : 0;
        activeStatus += reference.outOVERLOADED ? 1 : 0;
        activeStatus += reference.outCORRODED ? 1 : 0;
      }
      reference.outEXPOSED += activeStatus>4 ? 1 : 0;
    },
    giftOfTheUnbound(index) {//0, based on item selections not stats.
      let activeBurdens = 0;
      let movementModifier = 0.05
      let isUIcalcs = index != "greatTableKnowerOfAll";
      let customPath = !isUIcalcs ? globalRecords.accessories : globalRecords.ALTaccessories;
      for (let i=1;i<=4;i++) {
        let ringPath = customPath[`ring${i}`]
        if (ringPath.includes("Burden") === true) {
          activeBurdens += 1;
          //Negate all negative effects of any equipped burdens.
          if (ringPath.includes("Audacious")) {
            valueTables[index].HealingEFF += -rings[`Burden of the Audacious`].stats.HealingEFF;
          }
          else if (ringPath.includes("Departed")) {
            valueTables[index][`RelicCharges%`] += -rings[`Burden of the Departed`].stats[`RelicCharges%`];
          }
          else if (ringPath.includes("Destroyer")) {
            valueTables[index][`Range%`] += -rings[`Burden of the Destroyer`].stats[`Range%`];
          }
          else if (ringPath.includes("Divine")) {
            valueTables[index].AllDamage += -rings[`Burden of the Divine`].stats.AllDamage;
          }
          else if (ringPath.includes("Follower")) {
            valueTables[index].FireRate += -rings[`Burden of the Follower`].stats.FireRate;
          }
          else if (ringPath.includes("Gambler")) {
            valueTables[index].WeakspotDisable += -rings[`Burden of the Gambler`].stats.WeakspotDisable;
          }
          else if (ringPath.includes("Mariner")) {
            valueTables[index].CDR += -rings[`Burden of the Mariner`].stats.CDR;
          }
          else if (ringPath.includes("Mason")) {
            valueTables[index].WeightThreshold += -rings[`Burden of the Mason`].stats.WeightThreshold;
          }
          else if (ringPath.includes("Mesmer")) {
            valueTables[index].GlobalHealthModifier *= 1 + (1/3);//Counteract the 25% reduction
          }
          else if (ringPath.includes("Rebel")) {
            valueTables[index].RelicSpeed += -rings[`Burden of the Rebel`].stats.RelicSpeed;
          }
          else if (ringPath.includes("Sciolist")) {
            valueTables[index].Reserves += -rings[`Burden of the Sciolist`].stats.Reserves;
          }
          else if (ringPath.includes("Stargazer")) {
            continue//Negate health cost on skill activation.
          }
          else if (ringPath.includes("Warlock")) {
            continue//Negate health cost on mod activation.
          }
        }
      }
      if (activeBurdens > 0) {
        valueTables[index].MovementSpeed += movementModifier * activeBurdens;
      }
      //Remember to add checks for the negative effects later, on burden rings, to negate them.
    },
    insulationDriver(index) {//50
      if (valueTables[index].Bulwark > 0) {
        valueTables[index].AllDamage += 0.15;
        valueTables[index].HASTE += 1;
      }
    },
    kineticShieldExchanger(index) {//50
      if (valueTables[index].Shield > 0) {
        valueTables[index].ModDamage += 0.25;
        valueTables[index].ModPowerGen += 0.20;
      }
    },
    neckboneNecklace(index) {//50
      valueTables[index].AllDamage += valueTables[index].incomingStatus ? 0.25 : 0;
    },
    nightweaversGrudge(index) {//50
      if (valueTables[index].incomingStatus || valueTables[index].outgoingStatus) {
        valueTables[index].AllCritChance += 0.15;
        valueTables[index].HASTE += 1;
      }
    },
    oneEyedJokerIdol(index) {//0 user input
      valueTables[index].AllCritChance += globalRecords.meleeFactors.isEvade ? 0.25 : 0;
    },
    oneTrueKingSigil(index) {//base, modifies based on equip, not existing stats.
      let faerinActive = false;
      let faelinActive = false;
      let imposterRings = 0;
      let isUIcalcs = index != "greatTableKnowerOfAll";
      let customPath = !isUIcalcs ? globalRecords.accessories : globalRecords.ALTaccessories;
      for (let i=1;i<=4;i++) {
        if (customPath[`ring${i}`].includes("Faerin's Sigil") === true) {
          faerinActive = true;
          imposterRings += 1;
        }
        else if (customPath[`ring${i}`].includes("Faelin's Sigil") === true) {
          faelinActive = true;
          imposterRings += 1;
        }
      }
      if (imposterRings > 0) {
        let modifier = 0.5;
        if (faerinActive === true) {
          let faeRpath1 = rings[`Faerin's Sigil`].stats.ModPowerGenCrit;
          let faeRpath2 = rings[`Faerin's Sigil`].stats.ModPowerGenWeakspot;
          valueTables[index].ModPowerGenCrit += faeRpath1 * (modifier * imposterRings);
          valueTables[index].ModPowerGenWeakspot += faeRpath2 * (modifier * imposterRings);
        }
        if (faelinActive === true) {
          let faeLpath = rings[`Faelin's Sigil`].stats.ModPowerGenCrit;
          valueTables[index].ModPowerGenMelee += faeLpath * (modifier * imposterRings);
        }
      }
    },
    profaneSoulStone(index) {//0 user input
      let isUIcalcs = index != "greatTableKnowerOfAll";
      let customPath = !isUIcalcs ? globalRecords.minionCount : globalRecords.ALTminionCount;

      let minionCount = customPath;
      let modifier = -0.10;
      valueTables[index].FlatDR += modifier * minionCount;
    },
    ravagersMark(index) {//50
      valueTables[index].AllDamage += outBLEED ? 0.3 : 0;
    },
    soulAnchor(index) {//0 user input
      let isUIcalcs = index != "greatTableKnowerOfAll";
      let customPath = !isUIcalcs ? globalRecords.minionCount : globalRecords.ALTminionCount;
      valueTables[index].AllDamage += customPath ? 0.2 : 0;
    },
    spiritWisp(index) {//N/A
      //Add mod stuff later
    },
    weightlessWeight(index) {//PostWeightClass
      let weight = valueTables[index].Encumbrance * (1+valueTables[index]["Encumbrance%"]);
      if (weight < 0) {weight = 0;}
      let multi = Math.floor(weight/5);
      valueTables[index].StaminaCost += -0.0075 * multi;
      valueTables[index].MovementSpeed += 0.0075 * multi;
    },
    whisperingMarble(index) {//50
      let bulwarkStacks = Math.min(valueTables[index].Bulwark,valueTables[index].BulwarkCap);
      valueTables[index].AllDamage += 0.02 * bulwarkStacks;
    },
  },
  "rings": {//I... I think I'm done...?
    ataeriiBooster(index) {//0 user input
      let isUIcalcs = index != "greatTableKnowerOfAll";
      let referenceTable = !isUIcalcs ? globalRecords.archs : globalRecords.ALTarchs;
      if (referenceTable.one.class === "Engineer" || referenceTable.two.class === "Engineer" ) {
        valueTables[index].AllDamage += 0.10;
        valueTables[index].AllCritChance += 0.10;
      }
    },
    ahanaeCrystal(index) {//50
      let activeStatus = 0;
      let reference = valueTables[index];

      if (reference.outgoingStatus) {
        //Slow, bleed, burn, overloaded, corroded
        activeStatus += reference.outSLOW ? 1 : 0;
        activeStatus += reference.outBLEED ? 1 : 0;
        activeStatus += reference.outBURN ? 1 : 0;
        activeStatus += reference.outOVERLOADED ? 1 : 0;
        activeStatus += reference.outCORRODED ? 1 : 0;
        reference.AllDamage += (0.04 * activeStatus);
      }
    },
    akariWarBand(index) {//0 user input
      let perfectDodge = globalRecords.meleeFactors.isPerfectDodge;
      if (perfectDodge === true) {
        valueTables[index].AllCritChance += 0.10;
        valueTables[index].AllCritDamage += 0.10;
      }
    },
    alchemyStone(index) {//base
      valueTables[index].Lifesteal += valueTables[index].incomingStatus ? 0.06 : 0;
    },
    anastasijasInspiration(index) {//PostHealing
      let isUIcalcs = index != "greatTableKnowerOfAll";
      let toggleCheck = !isUIcalcs ? readSelection(`includeRelicHealing`).checked : globalRecords.ALTuseRelicHealing;
      if (valueTables[index]["HP/S+"] || valueTables[index]["HP/S%"] || (toggleCheck && valueTables[index].RelicHPtime > 1)) {
        valueTables[index].HASTE += 1;
      }
    },
    blackSpinel(index) {//base
      valueTables[index]["HP/S%"] += valueTables[index].outgoingStatus ? 0.02 : 0;
    },
    bloodTingedRing(index) {//base
      if (valueTables[index].outBLEED || valueTables[index].inBLEED) {
        valueTables[index]["HP/S+"] += 2;
      }
    },
    bridgeWardensCrest(index) {//0 user input
      if (globalRecords.meleeFactors.isPerfectDodge) {
        valueTables[index].MeleeDamage += 0.20;
        let weightClass = calcs.getWeight(index)[1];
        valueTables[index].FlatDR += globalRecords.meleeFactors.isEvade && weightClass === "Flop" ? 0.1 : 0;
      }
    },
    burdenOfTheMason(index,totalDR) {//postDR
      valueTables[index].MeleeDamage += Math.min(0.80,totalDR) * 0.35
    },
    burdenOfTheMesmer1(index) {//base
      valueTables[index].GlobalHealthModifier *= 0.75;//health modification
    },
    burdenOfTheMesmer2(index,totalDR) {//postDR
      let floorIncrement = 0.05
      let dmgScaling = 0.01
      valueTables[index].AllDamage += dmgScaling * Math.floor(Math.min(0.80,totalDR)/floorIncrement) * floorIncrement;//postDR damage calcs
    },
    driedClayRing(index) {//50
      console.log(valueTables[index].Bulwark,valueTables[index].BulwarkCap)
      let bulwarkStacks = Math.min(valueTables[index].Bulwark,valueTables[index].BulwarkCap);
      

      let bulwarkDR = -.005*(bulwarkStacks**2) + .075*bulwarkStacks;
      valueTables[index].AllDamage += 0.5 * bulwarkDR;
    },
    embraceOfShahala(index) {//base
      let activeStatus = 0;
      let reference = valueTables[index];

      if (reference.incomingStatus) {
        //Slow, bleed, burn, overloaded, corroded
        //Shahala probably counts more statuses than Ahanae does, in terms of player debuffs.
        //Probably needs more work later, to figure out what.
        activeStatus += reference.inSLOW ? 1 : 0;
        activeStatus += reference.inBLEED ? 1 : 0;
        activeStatus += reference.inBURN ? 1 : 0;
        activeStatus += reference.inOVERLOADED ? 1 : 0;
        activeStatus += reference.inCORRODED ? 1 : 0;
        reference.FlatDR += (0.075 * Math.min(2,activeStatus));
      }
    },
    featheryBinding(index) {//50 after haste at 40
      if (valueTables[index].HASTE) {
        valueTables[index].ProjectileSpeed += 0.15;
        valueTables[index].WeaponChargeTime += 0.10;
      }
    },
    floodlitDiamond(index) {//50
      valueTables[index].AllWeakspot += valueTables[index].outEXPOSED ? 0.12 : 0;
    },
    flyweightsSting(index) {//50
      let weight = valueTables[index].Encumbrance * (1+valueTables[index]["Encumbrance%"]);
      if (weight < 0) {weight = 0;}
      if (weight < 50) {
        valueTables[index].MeleeDamage += (1 - (weight/49)) * 0.25;
      }
    },
    frivolousBand(index) {//0 user input
      if (globalRecords.meleeFactors.isPerfectDodge && globalRecords.meleeFactors.isEvade) {
        valueTables[index].FireRate += 0.10;
        valueTables[index].AttackSpeed += 0.10;
      }
    },
    gameMasters1(index) {//0 user input
      let isUIcalcs = index != "greatTableKnowerOfAll";
      let teamCount = !isUIcalcs ? globalRecords.teamCount : globalRecords.ALTteamCount;
      if (teamCount>1) {
        valueTables[index].DMGKept.push((1/teamCount)-1); //dmgshared adjustments, healing is done in 2
      }
    },
    gameMasters2(index) {//PreHealing
      let isUIcalcs = index != "greatTableKnowerOfAll";
      let teamCount = !isUIcalcs ? globalRecords.teamCount : globalRecords.ALTteamCount;

      valueTables[index].GlobalHealingEff = valueTables[index].GlobalHealingEff * 0.5;//Cut healing in half
      if (teamCount>1) {
        valueTables[index].GlobalHealingEff *= 1/teamCount;//Further divide the healing by team members
      }
    },
    generatingBand(index) {//PreHealing
      if (valueTables[index].Shield > 0) {
        valueTables[index]["HP/S%"] += 0.03;
      }
    },
    gulSignet(index,dodgeClass) {//PostWeightClass
      let currentClass = 0;
      switch (dodgeClass) {
        case "Flop": currentClass = 3;break;
        case "Heavy": currentClass = 2;break;
        case "Medium": currentClass = 1;break;
      }
      valueTables[index].FlatDR -= 0.025 * currentClass
    },
    haymakersRing(index) {//50
      let weight = valueTables[index].Encumbrance * (1+valueTables[index]["Encumbrance%"]);
      let modifier = 0.002;
      valueTables[index].MeleeDamage += weight * modifier;
    },
    kolketEyelet(index) {//PostWeightClass
      let bulwarkStacks = Math.min(valueTables[index].Bulwark,valueTables[index].BulwarkCap);

      valueTables[index]["HP/S+"] += 0.3 * bulwarkStacks;
    },
    lodestoneRing(index) {//0 user input
      let isUIcalcs = index != "greatTableKnowerOfAll";
      let customPath = !isUIcalcs ? globalRecords.armor.helmet : globalRecords.ALTarmor.helmet;

      let helmetPath = customPath;
      if (helmetPath.includes("Lodestone Crown") === true) {
        valueTables[index].AllDamage += 0.05;
      }
    },
    matriarchsRing(index) {//0 user input
      let perfectDodge = globalRecords.meleeFactors.isPerfectDodge;
      valueTables[index].ChargeCost += perfectDodge ? -1 : 0;
    },
    mechanicsCog(index) {//0 user input
      let isUIcalcs = index != "greatTableKnowerOfAll";
      let referenceTable = !isUIcalcs ? globalRecords.archs : globalRecords.ALTarchs;
      if (referenceTable.one.class === "Engineer" || referenceTable.two.class === "Engineer" ) {
        valueTables[index].Bulwark += 1;
        valueTables[index].MovementSpeed += 0.15;
      }
    },
    painlessObsidian(index) {//0 user input
      valueTables[index].HASTE += globalRecords.meleeFactors.greyHealthActive ? 1 : 0;
      valueTables[index].Bulwark += globalRecords.meleeFactors.greyHealthActive ? 1 : 0;
    },
    panWarBand(index) {// 0 team count user input
      let isUIcalcs = index != "greatTableKnowerOfAll";
      let teamCount = !isUIcalcs ? globalRecords.teamCount : globalRecords.ALTteamCount;

      valueTables[index].MovementSpeed += 0.03 * teamCount;
      valueTables[index].ReloadSpeed += 0.03 * teamCount;
      valueTables[index].FireRate += 0.02 * teamCount;
    },
    ravagersBargain(index) {//base
      let isBleeding = valueTables[index].inBLEED;
      valueTables[index].AllDamage += isBleeding ? 0.05 : 0;
      valueTables[index].AllCritChance += isBleeding ? 0.05 : 0;
    },
    restrictionCord(index) {//base
      valueTables[index].GlobalHealthModifier *= 0.5;
    },
    ringOfSpirits(index) {//0 user input
      let isUIcalcs = index != "greatTableKnowerOfAll";
      let totalActive = 0;

      if (!isUIcalcs) {
        for (let i=1;i<=7;i++) {
          let customPath = !isUIcalcs ? globalRecords.consumables[`concoction${i}`] : globalRecords.ALTconsumables[`concoction${i}`];
          if (customPath) {
            totalActive += 1;
          }
          if (i<=4) {
            customPath = !isUIcalcs ? globalRecords.consumables[`quickUse${i}`] : globalRecords.ALTconsumables[`quickUse${i}`];
            if (customPath) {
              totalActive += 1;
            }
          }
        }
        valueTables[index].ModPowerGen += 0.03 * Math.min(5,totalActive);//enforce the cap of 5.
      }
      else {
        //If we are in the middle of cycles loops, and maybe the filtered concoctions are less than the limit, always apply the limit amount of Mod Gen so we don't skip a possible build
        valueTables[index].ModPowerGen += 0.03 * 5;
      }
    },
    ringOfTheDamned(index) {//0 user input
      valueTables[index].AllDamage += globalRecords.meleeFactors.greyHealthActive ? 0.004*50 : 0;
      valueTables[index].AllCritChance += globalRecords.meleeFactors.greyHealthActive ? 0.05 : 0;
    },
    singedRing(index) {//50
      valueTables[index].AllDamage += valueTables[index].outBURN ? 0.12 : 0;
    },
    soulGuard(index) {//0 user input
      
      let isUIcalcs = index != "greatTableKnowerOfAll";
      let customPath = !isUIcalcs ? globalRecords.minionCount : globalRecords.ALTminionCount;

      valueTables[index].Bulwark += +customPath;
    },
    soulShard(index) {//0 user input
      let isUIcalcs = index != "greatTableKnowerOfAll";
      let customPath = !isUIcalcs ? globalRecords.minionCount : globalRecords.ALTminionCount;

      let minionCount = customPath;
      if (minionCount > 3) {minionCount = 3;}
      let modifier = 0.05;
      valueTables[index].AllDamage += modifier * minionCount;
    },
    tokenOfFavor(index) {//50
      valueTables[index].AllCritChance += valueTables[index].outEXPOSED ? 0.10 : 0;
    },
    thalosEyelet(index) {//PostWeightClass
      let bulwarkStacks = Math.min(valueTables[index].Bulwark,valueTables[index].BulwarkCap);
      valueTables[index]["Stamina/S+"] += 2 * bulwarkStacks;
    },
    whiteGlassBead(index) {//0 user input
      valueTables[index].Shield += globalRecords.meleeFactors.isPerfectDodge ? 0.15 : 0;
    },
  },
  "relic": {//DONE relics are currently tierless
    resonatingHeart(index,relicHPscaled,totalHealth) {
      let isUIcalcs = index != "greatTableKnowerOfAll";
      let path = relics["Resonating Heart"]
      //Healing/Relic EFF already factored before this function even starts
      let inputValue = relicHPscaled * 2 * (1+valueTables[index].HealingEFF);

      let relicPercHPpSec = 0;
      let relicHPpSec = 0;
      let avgPercHPpSec = 0;
      let avgHPpSec = 0;
      //If input is blank or 0, all values will BE 0, but that's ok because in our check to pull relic healing
      //we will first check if the input is blank/0 before pulling either basic or complex stats.
      relicPercHPpSec = inputValue/20;
      console.log()
      relicHPpSec = (relicPercHPpSec/100) * totalHealth;
      avgPercHPpSec = (relicHPscaled + inputValue)/25;
      avgHPpSec = (avgPercHPpSec/100) * totalHealth;
    
      if (!isUIcalcs) {
        readSelection("relicComplexEffect").innerHTML += `
        <div class="resoBonusHeader">Avg over 25s</div>
        <div class="complexRowContainer"><span class="basicsDRStat">As HP/s</span><span class="rowTraceLine"></span><span class="basicsDRValue">${avgHPpSec.toFixed(2)}</span></div>
        <div class="complexRowContainer"><span class="basicsDRStat">As %HP/s</span><span class="rowTraceLine"></span><span class="basicsDRValue">${avgPercHPpSec.toFixed(2)}%</span></div>
        `
      }
    return [avgPercHPpSec,avgHPpSec]
    },
  },
  "mutators": {//DONE
    executor(index) {//base
      let reference = valueTables[index];

      if (reference.outgoingStatus) {
        let count = globalRecords.meleeFactors.enemyCount;
        count += reference.incomingStatus ? 1 : 0
        count = Math.min(4,count);
        reference.AttackSpeed += (0.05 * count);
        reference.ChargeSpeed += (0.05 * count);
      }
    },
    guts(index) {//0 user input
      if (globalRecords.meleeFactors.greyHealthActive) {
        valueTables[index].MeleeCritChance += 0.25;
        valueTables[index].MeleeCritDamage += 0.25;//we don't have any %GHP specifications yet, this assume 50% GHP
      }
    },
    misfortune(index) {//base
      let activeStatus = 0;
      let reference = valueTables[index];

      if (reference.outgoingStatus) {
        //Slow, bleed, burn, overloaded, corroded
        activeStatus += reference.outSLOW ? 1 : 0;
        activeStatus += reference.outBLEED ? 1 : 0;
        activeStatus += reference.outBURN ? 1 : 0;
        activeStatus += reference.outOVERLOADED ? 1 : 0;
        activeStatus += reference.outCORRODED ? 1 : 0;
        reference.MeleeDamage += (0.10 * activeStatus);
      }
    },
    opportunist(index) {//0 user input
      if (globalRecords.meleeFactors.isPerfectDodge) {
        valueTables[index].MeleeCritChance += 1;
      }
    },
    resentment(index) {//0 user input
      if (globalRecords.meleeFactors.greyHealthActive) {
        valueTables[index].MeleeDamage += 0.30
      }
    },
    shieldedStrike(index) {//50
      let shieldAmount = valueTables[index].Shield;
      let cap = 0.50;
      let dmgCap = 0.25;
      if (shieldAmount > 0) {
        if (shieldAmount > cap) {shieldAmount = cap;}
        valueTables[index].ChargeDamage += (shieldAmount/cap) * dmgCap;
      }
    },
    vampireBlade(index) {//base
      let reference = valueTables[index];
      if (reference.outBLEED) {
        reference.MeleeDamage += 0.30;
        reference.MLifesteal += 0.03;
      }
    }
  },
  "meleeMods": {//DONE
    dreamwave(index) {//0 user input
      let count = globalRecords.meleeFactors.enemyCount;
      valueTables[index].AllDamage += 0.02 * count;
      valueTables[index].MovementSpeed += 0.02 * count;
    },
    beyondTheVeil(index) {//0 user input
      valueTables[index].MLifesteal += globalRecords.meleeFactors.isEvade ? 0.05 : 0;
    },
    reaver(index) {//base
        valueTables[index].MeleeDamage += valueTables[index].outgoingStatus ? 0.10 : 0;
    }
  }
}
/* ---------------------------------------------------------------------------------------- */
/* -------------------------------------- PAGE LOADED ------------------------------------- */
/* ---------------------------------------------------------------------------------------- */
//The big cheese, the great clusterfuck, where all the formulas refresh.
function updateFormulas(index,ping) { 
  //If we're not iterating
  let isUIcalcs = !!index;
  index = index ?? `greatTableKnowerOfAll`;
  //Reset the table
  valueTables[index] = {...starterTable}

  valueTables[index].REdamage = [];//Reset arrays, lest we modify original
  valueTables[index].DMGKept = [];
  valueTables[index].UniqueMulti = [];
  if (!isUIcalcs) {basicsUpdates.updateMainTeamSettings();}//MISC STATS THAT NEED TO BE PULLED FROM DISPLAYS FIRST
  formulasValues.pullTraits(index);//Traits
  formulasValues.pullWeapons(index);//Weapons/mods/mutators
  formulasValues.pullGearStats(index,ping);//Accessories/class/frags/etc
  

  globalRecords.totalConcLimit = 1 + valueTables[index].ConcLimit;
  formulasValues.pullConsumables(index,globalRecords.totalConcLimit);//Concoctions, after defining the conc limit using everything else

  formulasValues.callUniqueFunctions(index,null,0,0,"Tier0");//Has conditionals based upon user settings, or other things that do not need to wait for other conditionals.
  formulasValues.callUniqueFunctions(index,null,0,0,"Base");//Standard conditionals. They might rely on Tier0 calcs, but nothing else.

  // formulasValues.callUniqueFunctions(index,null,0,0,"Tier1");//Has conditionals based upon user settings, or other things that do not need to wait for other conditionals.

  if (valueTables[index].HASTE > 0) {
    for (let bonuses in hasteTable) {valueTables[index][bonuses] += hasteTable[bonuses];}//If haste exists, add relevant speed stats
  }
//SUMMARY STATS
//HEALTH
  healthQuery = calcs.getHealth(index);
  let totalHealth = healthQuery[0];
  let totalHealthNoGlobal = healthQuery[1]; //Stuff like restriction cord. Not used outside of calcs.functions yet
//---------- STAMINA ---------------------------------------------------
  let totalStamina = calcs.getStamina(index)[0]; 

  let weightQuery = calcs.getWeight(index);
  let totalWeight = weightQuery[0];
  let dodgeClass = weightQuery[1];
  let staminaPenalty = weightQuery[2];
  let baseWeight = weightQuery[3];
  let weightBoost = weightQuery[4];
  let weightThreshold = weightQuery[5];
  formulasValues.callUniqueFunctions(index,null,0,0,"PostWeightClass",dodgeClass);//Gul Signet, etc
  let staminaValuesQuery = calcs.getStaminaValues(index,staminaPenalty);
  let staminaPerSec = staminaValuesQuery[0];
  let staminaCost = staminaValuesQuery[1];
//---------- RESISTANCES ---------------------------------------------------
  let resistanceQuery = calcs.getResistance(index);
  let bleed = resistanceQuery[0];
  let burn = resistanceQuery[1];
  let shock = resistanceQuery[2];
  let corrosive = resistanceQuery[3];
  let blight = resistanceQuery[4];
//---------- HEALING ---------------------------------------------------

  valueTables[index].AllDamage += valueTables[index].outEXPOSED ? 0.15 : 0;
  valueTables[index].AllDamage += valueTables[index].outCORRODED ? 0.10 : 0;
  valueTables[index].HealingEFF *= valueTables[index].inBLEED ? 0.5 : 1;

  formulasValues.callUniqueFunctions(index,null,0,0,"PreHealing");//generating band, etc
  let healingQuery = calcs.getHealing(index);
  let globalHealingMod = healingQuery[0]; //Example: game master's pride. Not used outside of calcs.functions yet
  let healingEffectiveness = healingQuery[1];
  let flatHPperSec = healingQuery[2];
  let percHPperSec = healingQuery[3];
  let totalGreyHPperSec = healingQuery[4];
  formulasValues.callUniqueFunctions(index,null,0,0,"PostHealing");//anastasijasInspiration, stuff like that
//----------RELIC HEALING---------------------------------------------------
  let relicHealingQuery = calcs.getRelicHealing(index,totalHealthNoGlobal,globalHealingMod,healingEffectiveness);
  let relicHPbase = relicHealingQuery[0];
  let relicHPtype = relicHealingQuery[1];
  let relicHPtime = relicHealingQuery[2];
  let relicHPscaled = relicHealingQuery[3];
  let relicPercPerSecond = relicHealingQuery[4];
  let relicFlatPerSecond = relicHealingQuery[5];
  let relicComplexArray = relicHealingQuery[6];
  let relicUseTime = relicHealingQuery[7];
  let relicEffectiveness = relicHealingQuery[8];
  let useComplexValues = !!relicComplexArray;
//---------- DAMAGE REDUCTION ---------------------------------------------------
  let armorQuery = calcs.getArmor(index);
  let baseArmor = armorQuery[0];
  let armorEff = armorQuery[1];
  let totalArmor = armorQuery[2];

  let drQuery = calcs.getDR(index,totalArmor);
  let armorDR = drQuery[0];
  let bulwarkStacks = drQuery[1];
  let bulwarkDR = drQuery[2];
  let otherFlat = drQuery[3];
  let totalFlat = drQuery[4];
  let totalDR = drQuery[5];
  formulasValues.callUniqueFunctions(index,null,0,0,"PostDR",totalDR);//Burden of the Mason, etc
  //----------ADVANCED DR-------------
  let advancedDrQuery = calcs.getAdvancedDR(index,totalDR,totalHealth,totalHealthNoGlobal);
  let reducedEnemyDamage = advancedDrQuery[0];
  let damageKept = advancedDrQuery[1];
  let totalBonusMitigation = advancedDrQuery[2];
  let effectiveDR = advancedDrQuery[3];
  let baseEHP = advancedDrQuery[4];
//----------SHIELDS----------------------------------------------------------------------------
//----------EHP----------------------------------------------------------------------------
  let shieldQuery = calcs.getShields(index,baseEHP);
  let percShields = shieldQuery[0];
  let shieldEff = shieldQuery[1];
  let totalPercShields = shieldQuery[2];
  let shieldEHP = shieldQuery[3];
  let totalEHP = calcs.getEHP(index,shieldEHP,baseEHP)[0];
//---------- ADVANCED HEALING----------------------------------------------------------------------------
  let regHealing = [flatHPperSec,percHPperSec];
  let passedRelicHealing = [relicHPtype,relicHPtime,relicHPscaled,useComplexValues,relicComplexArray];
  let advancedHealingQuery = calcs.getAdvancedHealing(index,baseEHP,regHealing,passedRelicHealing,totalHealthNoGlobal);
  let advancedRelicFlat = advancedHealingQuery[0];
  let advancedRelicPerc = advancedHealingQuery[1];
  let advancedRelicTotalFlat = advancedHealingQuery[2];
  let advancedRelicTotalPerc = advancedHealingQuery[3];
  let advancedTotalFlatHP = advancedHealingQuery[4];
  let advancedTotalPercHP = advancedHealingQuery[5];
  let EHPpSec = advancedHealingQuery[6];

  //TIER 50 CALLS PURELY FOR DMG RELATED CONDITIONALS + DMG CONDITIONALS THAT NEED TO BE DONE AFTER REG STATS
  formulasValues.callUniqueFunctions(index,null,0,0,"Tier50");//50 is just where I chose to start for dmg functions






  //---------- LIFESTEAL --------------Can be last bc no other statistics depend on lifesteal values, yet
  let lifestealQuery = calcs.getLifesteal(index);
  let lifestealALL = lifestealQuery[0];
  let lifestealMelee = lifestealQuery[1];
  let lifestealRange = lifestealQuery[2];



  let returnStats = {
    totalHealth,totalHealthNoGlobal,
    totalStamina,
    totalWeight,dodgeClass,staminaPenalty,baseWeight,weightBoost,weightThreshold,
    staminaPerSec,staminaCost,
    bleed,burn,shock,corrosive,blight,
    globalHealingMod,relicEffectiveness,healingEffectiveness,relicUseTime,flatHPperSec,percHPperSec,totalGreyHPperSec,
    lifestealALL,lifestealMelee,lifestealRange,
    relicHPbase,relicHPtype,relicHPtime,relicHPscaled,relicPercPerSecond,relicFlatPerSecond,
    baseArmor,armorEff,totalArmor,
    armorDR,bulwarkStacks,bulwarkDR,otherFlat,totalFlat,totalDR,
    reducedEnemyDamage,damageKept,totalBonusMitigation,effectiveDR,baseEHP,
    percShields,shieldEff,totalPercShields,shieldEHP,totalEHP,
    advancedRelicFlat,advancedRelicPerc,advancedRelicTotalFlat,advancedRelicTotalPerc,advancedTotalFlatHP,advancedTotalPercHP,EHPpSec
  }
  //----------RETURN VALUES-----------------------
  if (isUIcalcs) {
    return returnStats;
  }
  else {
    // console.log("test")
    basicsUpdates.updateMainFromFormulas(returnStats);
    manipulateURL.updateURLparameters();
    if (!stopQueryFractures) {window.updateConsole(index);}
  }
}



let basicsUpdates = {
  updateMainTeamSettings() {
    let teamCount = readSelection("teamCount").value;
    let coopState = readSelection("teamCount").value > 1 ? "Co-op" : "Solo"

    globalRecords.teamCount = teamCount
    globalRecords.isCoop = coopState==="Co-op";

    let minionCount = readSelection("minionCount").value;
    let spiritHealerStacks = readSelection("spiritHealerStacks").value;

    readSelection("teamCountMAIN").innerHTML = teamCount;
    readSelection("minionCountMAIN").innerHTML = minionCount;
    readSelection("spiritHealerStacksMAIN").innerHTML = spiritHealerStacks;
    globalRecords.minionCount = minionCount;
    globalRecords.spiritHealerStacks = spiritHealerStacks;


    globalRecords.meleeFactors.enemyCount = readSelection("enemyCount").value;
    readSelection("enemyCountMAIN").innerHTML = readSelection("enemyCount").value;
    globalRecords.meleeFactors.isEvade = readSelection("isEvade").checked;
    globalRecords.meleeFactors.isPerfectDodge = readSelection("perfectDodge").checked;

    globalRecords.meleeFactors.greyHealthActive = readSelection("greyActive").checked;


  },
  updateMainFromFormulas(returnObject) {
      formulasValues.updateDisplay("summaryHealth",returnObject.totalHealth,1);
      formulasValues.updateDisplay("summaryStamina",returnObject.totalStamina,1);
      formulasValues.updateDisplay("summaryArmor",returnObject.totalArmor,1);
      formulasValues.updateDisplay("baseArmor",returnObject.baseArmor,1);
      formulasValues.updateDisplay("armorEff",returnObject.armorEff*100,2,"%");
      formulasValues.updateDisplay("totalArmor",returnObject.totalArmor,1);
      formulasValues.updateDisplay("summaryWeight",returnObject.totalWeight,1);
      if (returnObject.dodgeClass === "Flop") {readSelection("summaryWeight").style.color = "#e06666";}
      else if (returnObject.dodgeClass === "Heavy") {readSelection("summaryWeight").style.color = "orange";}
      else if (returnObject.dodgeClass === "Medium") {readSelection("summaryWeight").style.color = "#90ee90";}
      else {readSelection("summaryWeight").style.color = "#93CCEA";}
      formulasValues.updateDisplay("armorDR",returnObject.armorDR*100,2,"%");
      formulasValues.updateDisplay("bulwarkStacks",returnObject.bulwarkStacks,0);
      formulasValues.updateDisplay("bulwarkDR",returnObject.bulwarkDR*100,2,"%");
      formulasValues.updateDisplay("otherFlat",returnObject.otherFlat*100,2,"%");
      formulasValues.updateDisplay("totalFlat",returnObject.totalFlat*100,2,"%");
      formulasValues.updateDisplay("totalDR",returnObject.totalDR*100,2,"%");
      //Adjust total DR color based on amount.
      if (returnObject.totalDR>0.8){readSelection("totalDR").style.color = "#e06666"}
      else {readSelection("totalDR").style.color = "white"}
      //TODO: add a check here later to show people that they're going over cap, tooltip or something
      formulasValues.updateDisplay("summaryBleed",returnObject.bleed,0);
      formulasValues.updateDisplay("summaryBurn",returnObject.burn,0);
      formulasValues.updateDisplay("summaryShock",returnObject.shock,0);
      formulasValues.updateDisplay("summaryCorrosive",returnObject.corrosive,0);
      formulasValues.updateDisplay("summaryBlight",returnObject.blight,0);
      formulasValues.updateDisplay("relicEFF",returnObject.relicEffectiveness*100,2,"%");
      formulasValues.updateDisplay("healingEFF",returnObject.healingEffectiveness*100,2,"%");
      formulasValues.updateDisplay("relicUseTime",returnObject.relicUseTime*100,2,"%");
      readSelection("lifesteal").innerHTML = `${(returnObject.lifestealALL).toFixed(2)}/${(returnObject.lifestealMelee).toFixed(2)}/${(returnObject.lifestealRange).toFixed(2)}`;
      formulasValues.updateDisplay("flatHP/s",returnObject.flatHPperSec,1);
      formulasValues.updateDisplay("%HP/s",returnObject.percHPperSec*100,2,"%");
      formulasValues.updateDisplay("greyHP/s",returnObject.totalGreyHPperSec,1);
      formulasValues.updateDisplay("stamina/s",returnObject.staminaPerSec,1);
      formulasValues.updateDisplay("staminaCost",returnObject.staminaCost*100,2,"%");
      readSelection("dodgeClass").innerHTML = returnObject.dodgeClass;
      // formulasValues.updateDisplay("relicBase",relicHPbase,2);//We only show scaled now, base no longer visible
      readSelection("relicType").innerHTML = returnObject.relicHPtype;
      formulasValues.updateDisplay("relicTime",returnObject.relicHPtime,0);
      if (returnObject.relicHPtype==="%"){
        formulasValues.updateDisplay("relicScaled",returnObject.relicHPscaled,1,"%");
        formulasValues.updateDisplay("relic%HP/s",returnObject.relicPercPerSecond,1,"%");
        formulasValues.updateDisplay("relicHP/s",returnObject.relicFlatPerSecond,1);
      }
      else if (returnObject.relicHPtype==="P"||returnObject.relicHPtype==="F") {
        formulasValues.updateDisplay("relicScaled",returnObject.relicHPscaled,1);
        readSelection("relic%HP/s").innerHTML = "---";
        formulasValues.updateDisplay("relicHP/s",returnObject.relicFlatPerSecond,1);
      }
      else {//if null
        readSelection("relicScaled").innerHTML = "---";
        readSelection("relic%HP/s").innerHTML = "---";
        readSelection("relicHP/s").innerHTML = "---";
      }
      formulasValues.updateDisplay("effectiveDR",returnObject.effectiveDR*100,2,"%");
      formulasValues.updateDisplay("totalBonusMitigation",returnObject.totalBonusMitigation*100,2,"%");
      formulasValues.updateDisplay("REdamage",returnObject.reducedEnemyDamage*100,2,"%");
      formulasValues.updateDisplay("DMGKept",returnObject.damageKept*100,2,"%");
      formulasValues.updateDisplay("shield%",returnObject.percShields*100,2,"%");
      formulasValues.updateDisplay("shieldEff",returnObject.shieldEff*100,2,"%");
      formulasValues.updateDisplay("totalShield%",returnObject.totalPercShields*100,2,"%");
      formulasValues.updateDisplay("shieldEHP",returnObject.shieldEHP,2);
      formulasValues.updateDisplay("EHP",returnObject.totalEHP,2);
      formulasValues.updateDisplay("advancedFlat",returnObject.flatHPperSec,2);
      formulasValues.updateDisplay("advanced%",returnObject.percHPperSec*100,2,"%");
      formulasValues.updateDisplay("advancedTotalFlat",returnObject.flatHPperSec + returnObject.percHPperSec*returnObject.totalHealth,2);
      formulasValues.updateDisplay("advancedTotal%",(returnObject.percHPperSec + returnObject.flatHPperSec/returnObject.totalHealth)*100,2,"%"); 
      formulasValues.updateDisplay("advancedRelicTotal%",returnObject.advancedRelicTotalPerc,2,"%");
      formulasValues.updateDisplay("totalHealingFlat",returnObject.advancedTotalFlatHP,2);
      formulasValues.updateDisplay("totalHealing%",returnObject.advancedTotalPercHP,2,"%");
      formulasValues.updateDisplay("EHP/s",returnObject.EHPpSec,2);
  
      basicsUpdates.damageRows();
      basicsUpdates.criticalChance();
      basicsUpdates.criticalDamage();
      basicsUpdates.weakspot();
      basicsUpdates.actionSpeed();
  
      basicsUpdates.statusOut();
      basicsUpdates.statusIn();
  
      basicsUpdates.misc();
  },
  damageRows() {
    let damageRows = readSelection("basicsDamageRows");
    let table = valueTables.greatTableKnowerOfAll;
    let damageHeader = `<div class="basicsDRheaderTitle">DAMAGE</div>`;
    let list = ``;

    list += table.AllDamage ? createHTML.basicsRow("All",table.AllDamage,true,"%") : "";
    list += table.RangedDamage ? createHTML.basicsRow("Ranged",table.RangedDamage,true,"%") : "";
    list += table.SkillDamage ? createHTML.basicsRow("Skill",table.SkillDamage,true,"%") : "";
    list += table.MeleeDamage ? createHTML.basicsRow("Melee",table.MeleeDamage,true,"%") : "";
    list += table.ChargeDamage ? createHTML.basicsRow("Charged",table.ChargeDamage,true,"%") : "";
    list += table.BackstepDamage ? createHTML.basicsRow("Evade",table.BackstepDamage,true,"%") : "";
    list += table.FistDamage ? createHTML.basicsRow("Unarmed",table.FistDamage,true,"%") : "";
    list += table.MeleeSpecialAbilityDamage ? createHTML.basicsRow("Melee Threshold",table.MeleeSpecialAbilityDamage,true,"%") : "";
    list += table.CorrosiveDamage ? createHTML.basicsRow("Corrosive",table.CorrosiveDamage,true,"%") : "";
    list += table.AcidDamage ? createHTML.basicsRow("Acid",table.AcidDamage,true,"%") : "";
    list += table.BurningDamage ? createHTML.basicsRow("Burning",table.BurningDamage,true,"%") : "";
    list += table.FireDamage ? createHTML.basicsRow("Fire",table.FireDamage,true,"%") : "";
    list += table.ElementalDamage ? createHTML.basicsRow("Elemental",table.ElementalDamage,true,"%") : "";
    list += table.ShockDamage ? createHTML.basicsRow("Shock",table.ShockDamage,true,"%") : "";
    list += table.OverloadedDamage ? createHTML.basicsRow("Overloaded",table.OverloadedDamage,true,"%") : "";
    list += table.ExplosiveDamage ? createHTML.basicsRow("Explosive",table.ExplosiveDamage,true,"%") : "";
    list += table.StatusDamage ? createHTML.basicsRow("Status",table.StatusDamage,true,"%") : "";
    list += table.MeleeStatusDamage ? createHTML.basicsRow("Melee Status",table.MeleeStatusDamage,true,"%") : "";
    list += table.ModDamage ? createHTML.basicsRow("Mod",table.ModDamage,true,"%") : "";
    list += table.StaggerDamage ? createHTML.basicsRow("Stagger",table.StaggerDamage,true,"%") : "";
    list += table.SummonDamage ? createHTML.basicsRow("Summon",table.StaggerDamage,true,"%") : "";
    let uniqueMulti = 0;
    for (let i=0;i<table.UniqueMulti.length;i++) {
      let currentMulti = table.UniqueMulti[i];
      if (i===0) {uniqueMulti = currentMulti}
      else {
        uniqueMulti *= currentMulti;
      }
    }
    list += uniqueMulti ? createHTML.basicsRow("Multiplier",uniqueMulti,true,"%") : "";//This one needs work later, it's an array

    if (list != "") {list = userTrigger.updateSubstatColor(list);damageHeader+=list}
    else {damageHeader = ""}
    damageRows.innerHTML = damageHeader;
  },
  criticalChance() {
    let damageRows = readSelection("basicsCritChance");
    let table = valueTables.greatTableKnowerOfAll;
    let damageHeader = `<div class="basicsDRheaderTitle">CRIT CHANCE</div>`;
    let list = ``;

    list += table.AllCritChance ? createHTML.basicsRow("All",table.AllCritChance,true,"%") : "";
    list += table.RangedCritChance ? createHTML.basicsRow("Ranged",table.RangedCritChance,true,"%") : "";
    list += table.MeleeCritChance ? createHTML.basicsRow("Melee",table.MeleeCritChance,true,"%") : "";
    list += table.ChargeCritChance ? createHTML.basicsRow("Charged",table.ChargeCritChance,true,"%") : "";
    list += table.SkillCritChance ? createHTML.basicsRow("Skill",table.SkillCritChance,true,"%") : "";
    list += table.ElementalCritChance ? createHTML.basicsRow("Elemental",table.SkillCritChance,true,"%") : "";
    list += table.ModCritChance ? createHTML.basicsRow("Mod",table.ModCritChance,true,"%") : "";
    list += table.ExplosiveCritChance ? createHTML.basicsRow("Explosive",table.ExplosiveCritChance,true,"%") : "";
    list += table.FirearmCritChance ? createHTML.basicsRow("Firearm",table.FirearmCritChance,true,"%") : "";
    list += table.BowCritChance ? createHTML.basicsRow("Bow",table.BowCritChance,true,"%") : "";
    list += table.PrimaryCritChance ? createHTML.basicsRow("Primary",table.PrimaryCritChance,true,"%") : "";
    list += table.SecondaryCritChance ? createHTML.basicsRow("Secondary",table.SecondaryCritChance,true,"%") : "";
    // list += table.UniqueMulti ? createHTML.basicsRow("Multiplier",table.AllDUniqueMultiamage,false) : "";//This one needs work later, it's an array

    if (list != "") {list = userTrigger.updateSubstatColor(list);damageHeader+=list}
    else {damageHeader = ""}
    damageRows.innerHTML = damageHeader;
  },
  criticalDamage() {
    let damageRows = readSelection("basicsCritDamage");
    let table = valueTables.greatTableKnowerOfAll;
    let damageHeader = `<div class="basicsDRheaderTitle">CRIT DAMAGE</div>`;
    let list = ``;

    damageHeader += createHTML.basicsRow("Base Bonus",0.50,true,"%")
    list += table.AllCritDamage ? createHTML.basicsRow("All",table.AllCritDamage,true,"%") : "";
    list += table.RangedCritDamage ? createHTML.basicsRow("Ranged",table.RangedCritDamage,true,"%") : "";
    list += table.MeleeCritDamage ? createHTML.basicsRow("Melee",table.MeleeCritDamage,true,"%") : "";
    list += table.ChargeCritDamage ? createHTML.basicsRow("Charged",table.ChargeCritDamage,true,"%") : "";

    if (list != "") {list = userTrigger.updateSubstatColor(list);damageHeader+=list}
    else {damageHeader = ""}
    damageRows.innerHTML = damageHeader;
  },
  weakspot() {
    let damageRows = readSelection("basicsWeakspot");
    let table = valueTables.greatTableKnowerOfAll;
    let damageHeader = `<div class="basicsDRheaderTitle">WEAKSPOT</div>`;
    let list = ``;

    damageHeader += createHTML.basicsRow("Base Bonus",1,true,"%")
    list += table.AllWeakspot ? createHTML.basicsRow("All",table.AllWeakspot,true,"%") : "";
    list += table.SkillWeakspot ? createHTML.basicsRow("Skill",table.SkillWeakspot,true,"%") : "";
    list += table.RangedWeakspot ? createHTML.basicsRow("Ranged",table.RangedWeakspot,true,"%") : "";
    list += table.MeleeWeakspot ? createHTML.basicsRow("Melee",table.MeleeWeakspot,true,"%") : "";
    list += table.ChargeWeakspot ? createHTML.basicsRow("Charged",table.ChargeWeakspot,true,"%") : "";

    if (list != "") {list = userTrigger.updateSubstatColor(list);damageHeader+=list}
    else {damageHeader = ""}
    damageRows.innerHTML = damageHeader;
  },
  actionSpeed() {
    let damageRows = readSelection("basicsActionSpeed");
    let table = valueTables.greatTableKnowerOfAll;
    let damageHeader = `<div class="basicsDRheaderTitle">ACTION SPEED</div>`;
    let list = ``;

    list += table.MovementSpeed ? createHTML.basicsRow("Movement",table.MovementSpeed,true,"%") : "";
    list += table.SprintSpeed ? createHTML.basicsRow("Sprint",table.SprintSpeed,true,"%") : "";
    list += table.EnvMovementSpeed ? createHTML.basicsRow("Vaulting",table.EnvMovementSpeed,true,"%") : "";
    list += table.AimMovementSpeed ? createHTML.basicsRow("Aiming",table.AimMovementSpeed,true,"%") : "";
    list += table.FireRate ? createHTML.basicsRow("Fire Rate",table.FireRate,true,"%") : "";
    list += table.ReloadSpeed ? createHTML.basicsRow("Reload",table.ReloadSpeed,true,"%") : "";
    list += table.WeaponSwapSpeed ? createHTML.basicsRow("Swap",table.WeaponSwapSpeed,true,"%") : "";

    list += table.AttackSpeed ? createHTML.basicsRow("Melee",table.AttackSpeed,true,"%") : "";
    list += table.ChargeSpeed ? createHTML.basicsRow("Charged Attack",table.ChargeSpeed,true,"%") : "";

    list += table.CastSpeed ? createHTML.basicsRow("Cast",table.CastSpeed,true,"%") : "";

    if (list != "") {list = userTrigger.updateSubstatColor(list);damageHeader+=list}
    else {damageHeader = ""}
    damageRows.innerHTML = damageHeader;
  },
  statusOut() {
    let damageRows = readSelection("basicsStatusOut");
    let table = valueTables.greatTableKnowerOfAll;
    let damageHeader = `<div class="basicsDRheaderTitle">STATUS: OUTBOUND</div>`;
    let list = ``;

    list += table.StatusDuration ? createHTML.basicsRow("Duration",table.StatusDuration,true,"%") : "";
    list += table.outSLOW ? createHTML.basicsRow("","SLOW",false) : "";
    list += table.outBLEED ? createHTML.basicsRow("","BLEED",false) : "";
    list += table.outBURN ? createHTML.basicsRow("","BURN",false) : "";
    list += table.outCORRODED ? createHTML.basicsRow("","CORRODED",false) : "";
    list += table.outOVERLOADED ? createHTML.basicsRow("","OVERLOADED",false) : "";
    list += table.outEXPOSED ? createHTML.basicsRow("","EXPOSED",false) : "";
    // list += table.outMADNESS ? createHTML.basicsRow("","MADNESS",false) : "";


    if (list != "") {
      list = userTrigger.updateSubstatColor(list);
      damageHeader+=list;
    }
    else {damageHeader = ""}
    // readSelection("basicsInnerBox").innerHTML = userTrigger.updateSubstatColor(damageHeader);
    damageRows.innerHTML = damageHeader;
  },
  statusIn() {
    let damageRows = readSelection("basicsStatusIn");
    let table = valueTables.greatTableKnowerOfAll;
    let damageHeader = `<div class="basicsDRheaderTitle">STATUS: INBOUND</div>`;
    let list = ``;

    list += table.HASTE ? createHTML.basicsRow("","HASTE",false) : "";
    list += table.inBLEED ? createHTML.basicsRow("","BLEED",false) : "";
    list += table.inSLOW ? createHTML.basicsRow("","SLOW",false) : "";
    list += table.inBURN ? createHTML.basicsRow("","BURN",false) : "";
    list += table.inCORRODED ? createHTML.basicsRow("","CORRODED",false) : "";
    list += table.inOVERLOADED ? createHTML.basicsRow("","OVERLOADED",false) : "";
    list += table.inCURSE ? createHTML.basicsRow("","CURSE",false) : "";
    list += table.inMADNESS ? createHTML.basicsRow("","MADNESS",false) : "";
    list += table.inROOTROT ? createHTML.basicsRow("","ROOT ROT",false) : "";
    list += table.inDATACORRUPTION ? createHTML.basicsRow("","DATA CORRUPTION",false) : "";


    if (list != "") {list = userTrigger.updateSubstatColor(list);damageHeader+=list;}
    else {damageHeader = ""}
    // readSelection("basicsInnerBox").innerHTML = userTrigger.updateSubstatColor(damageHeader);
    damageRows.innerHTML = damageHeader;
  },
  misc() {
    let damageRows = readSelection("basicsMisc");
    let table = valueTables.greatTableKnowerOfAll;
    let damageHeader = `<div class="basicsDRheaderTitle">MISC</div>`;
    let list = ``;


    list += table.MeleeSpecialAbilityCharge ? createHTML.basicsRow("Melee Threshold",table.MeleeSpecialAbilityCharge,true,"%") : "";
    list += table.SummonHealth ? createHTML.basicsRow("Summon Health",table.SummonHealth,true,"%") : "";

    if (list != "") {list = userTrigger.updateSubstatColor(list);damageHeader+=list}
    else {damageHeader = ""}
    damageRows.innerHTML = damageHeader;
  },
  updateFocus(type) {
    readSelection("amuletTab").style.display = "none";
    readSelection("ring1Tab").style.display = "none";
    readSelection("ring2Tab").style.display = "none";
    readSelection("ring3Tab").style.display = "none";
    readSelection("ring4Tab").style.display = "none";

    readSelection("helmetTab").style.display = "none";
    readSelection("chestTab").style.display = "none";
    readSelection("legTab").style.display = "none";
    readSelection("handTab").style.display = "none";
    readSelection("relicTab").style.display = "none";

    readSelection("arch1Tab").style.display = "none";
    readSelection("arch2Tab").style.display = "none";

    readSelection("primaryTab").style.display = "none";
    readSelection("meleeTab").style.display = "none";
    readSelection("secondaryTab").style.display = "none";

    readSelection("concoction1Tab").style.display = "none";
    readSelection("concoction2Tab").style.display = "none";
    readSelection("concoction3Tab").style.display = "none";
    readSelection("concoction4Tab").style.display = "none";
    readSelection("concoction5Tab").style.display = "none";
    readSelection("concoction6Tab").style.display = "none";
    readSelection("concoction7Tab").style.display = "none";

    readSelection("quickUse1Tab").style.display = "none";
    readSelection("quickUse2Tab").style.display = "none";
    readSelection("quickUse3Tab").style.display = "none";
    readSelection("quickUse4Tab").style.display = "none";

    readSelection(type).style.display = "flex";
  }
}
let advancedUpdates = {
  toggleTankStats() {
    let survivabilityStats = readSelection(`tankStatsContainer`);
    let statsToggle = readSelection("tankStatsContainerToggle");
    survivabilityStats.style.display = statsToggle.checked ? "none" : "flex";
  },
  toggleDamageStats() {
    let damageStats = readSelection(`damageStatsContainer`);
    let statsToggle = readSelection("damageStatsContainerToggle");
    damageStats.style.display = statsToggle.checked ? "none" : "flex";
  }
}