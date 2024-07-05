//This is the actual table for starter values, but we reuse it to clean (cycles/great)TableKnowerOfAll on updateFormulas() calls
let starterTable = {
  //HEALTH
  "Health": 0,"Health%": 0,"GlobalHealthModifier": 1,"HealthCap": 1,
  //ARMOR
  "Armor": 0,"Armor%": 0,
  //DR
  "FlatDR": 0,"Bulwark": 0,"BulwarkCap": 5,"REdamage": 1,"DMGKept": 1,"SelfDamageModifier": 1,
  //SHIELDS
  "Shield": 0,"ShieldEFF": 0,"Shield%/S": 0,
  //RESISTANCES
  "Bleed": 0,"Burn": 0,"Shock": 0,"Corrosive": 0,"Blight": 0,
  //WEIGHT
  "Encumbrance": 0,"Encumbrance%": 0,"WeightThreshold": 0,
  //HEALING
  "HealingEFF": 0,"GlobalHealingEff": 1,"HealingModifiers": 0,
  "HP/S+": 0,"HP/S%": 0,
  //GREY HEALTH
  "GreyHP/S%": 0,"GreyHP/S+": 0,"GreyHPHitThreshold": 0,"GreyHealthConversion": 0,
  //LIFESTEAL
  "Lifesteal": 0,"MLifesteal": 0,"RLifesteal": 0,"MChargedLifeSteal": 0,"RelicLifesteal": 0,
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
  "EvadeCost": 0,"ChargeCost": 0,
  //EVADES
  "EvadeBaseCost": 25,"EvadeSpeed": 0,"EvadeDistance": 0,"iFrames": 0,"iFrameWindow": 0,"BackstepCost": 0,
  //DAMAGE
  "AllDamage": 0,"RangedDamage": 0,"SkillDamage": 0,"MeleeDamage": 0,"ChargeDamage": 0,"BackstepDamage": 0,"FistDamage": 0,
  "MeleeSpecialAbilityDamage": 0,
  "CorrosiveDamage": 0,"AcidDamage": 0,"BurningDamage": 0,"FireDamage": 0,
  "ElementalDamage": 0,"ShockDamage": 0,"OverloadedDamage": 0,"ExplosiveDamage": 0,
  "StatusDamage": 0,"MeleeStatusDamage": 0,"SummonDamage": 0,
  "ModDamage": 0,
  "PrimaryModDamage": 0,"SecondaryModDamage": 0,
  "PrimaryElementalDamage": 0,"SecondaryElementalDamage": 0,
  "UniqueMulti": 1,
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
  "ProjectileSpeed": 0,"ConsumableSpeed": 0,
  //MODS
  "ModDuration": 0,"ModPowerGen/s": 0,"ModPowerGen": 0,"ModCost": 0,
  "ModPowerGenCrit": 0,"ModPowerGenWeakspot": 0,"ModPowerGenMelee": 0,"ModPowerGenElemental": 0,
  //SKILLS
  "CDR": 0,"SkillDuration": 0,"SkillCharges": 1,
  //AOE
  "auraAOE": 0,
  //GUNS
  "Recoil": 0,"Range": 0,"Range%": 0,"Spread": 0,"SpreadRecovery": 0,"Sway": 0,"WeaponChargeTime": 0,
  //AMMO
  "Reserves": 0,"ReservesMulti": 0,
  //MINIONS/SUMMONS
  "SummonHealth": 0,"HeavyAmmo": 1,
  //MISC RANDM SHIT
  "Experience": 0,
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
  "outDRENCHED": 0,
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
  "Bleed Resistance": "Bleed",
  "Blight Resistance": "Blight",
  "Burn Resistance": "Burn",
  "Class-Summon Health %": "SummonHealth%",
  "Consumable-Concoction Limit": "ConcLimit",
  "Consumable-Duration": "ConsumableDuration",
  "Consumable-Use Speed": "RelicSpeed",
  "Corrosive Resistance": "Corrosive",
  "Critical Chance-All": "AllCritChance",
  "Critical Chance-Bow": "BowCritChance",
  "Critical Chance-Elemental": "ElementalCritChance",
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
  "Damage-Skill": "SkillDamage",
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
  "Grey Health Conversion": "GreyHealthConversion",
  "Healing Effectiveness": "HealingEFF",
  "Healing-Flat/second": "HP/S+",
  "Healing-Global Effectiveness": "GlobalHealingEff",
  "Healing-Modifiers": "HealingModifiers",
  "Healing-%/second": "HP/S%",
  "Health-Flat": "Health",
  "Health-Global Modifier": "GlobalHealthModifier",
  "Health-%": "Health%",
  "Lifesteal Effectiveness": "LifestealEFF",
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
  "Shock Resistance": "Shock",
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

  "Status-Bleed": "outBLEED",
  "Status-Burn": "outBURN",
  "Status-Corroded": "outCORRODED",
  "Status-Exposed": "outEXPOSED",
  "Status-Overloaded": "outOVERLOADED",
  "Status-Slow": "outSLOW",
  "Status-Outgoing Statuses": "outgoingStatus",

  "Status-Self-Bleed": "inBLEED",
  "Status-Incomng Statuses": "inBLEED",



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
  "RelicSpeed": 0.07,//consumableusespeedmod     //Not sure how this is calculated yet, I've always shown this is a -stat when it's good though
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

//These are named based on the variable names within updateFormulas(), not the names of base stats on any valueTable
const playerDerivedStatistics = {
  "EHP": "totalEHP",
  "EHP/s": "EHPpSec",
  "Health": "totalHealth",
  "Health/s": "advancedTotalFlatHP",
  "Effective DR": "effectiveDR",
  "Grey Health Regen": "totalGreyHPperSec",
  "Havoc - DPS": ["Havoc Form",3,"DPS","Ability"],
  "Havoc - Total Damage": ["Havoc Form",4,"Total DMG","Ability"],
  // "Sandstorm - DPS": ["Sandstorm",3,"DPS","Mod"], //DO NOT UNCOMMENT THIS YOU WILL BREAK IT IF YOU QUERY IT
  // "Sandstorm - Total Damage": ["Sandstorm",4,"Total DMG","Mod"],
  // "Total DPS(Havoc+Mod)": "totalDPS",
  "Lifesteal - All": "lifestealALL",
  "Lifesteal - Melee": "lifestealMelee",
  "Lifesteal - Melee (Charged)": "lifestealMeleeCharged",
  "Lifesteal - Ranged": "lifestealRange",
  "Lifesteal - Peak (Any type)": "peakLifesteal",
  "Movement Speed": "movementSpeed"
}

const existingTierList =  [//this is for my own personal record, but it might be used later.
    "customTier0",
    "customBase",
    "customPostWeightClass",
    "customPreHealing",
    "customPostHealing",
    // "customRelicFunctions",
    "customPostDR",
    "customTier50",
  ]

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

    let greatTraitRecords = globalRecords.greatTraitRecords;
    let traitName = greatTraitRecords[elemID-1].name;
    let traitLevel = greatTraitRecords[elemID-1].level;
    let traitDescription = traits[traitName].desc
    let levelValue = traits[traitName].level[traitLevel];
    if (traitDescription.includes("%")) {levelValue *= 100;}
    let adjustedDescription = traitDescription.replace("VALUE1.1",levelValue.toFixed(2));

    if (traits[traitName].level2) {
      let levelValue2 = traits[traitName].level2[traitLevel];
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
          // <div class="pointsSpent" id="trait${elemID}Spent"></div>
          // <div class="intrinsicPoints" id="trait${elemID}Intrinsic"></div>
          // <button type="button" class="traitButton" onclick="userTrigger.updateTrait(${elemID},'+')" id="traitButtonPlus${elemID}">+</button>
  },
  consumableBox(consumableTable,elemID) {
    return `
      <div class="selectionsInfoContainer" id="${consumableTable}${elemID}Tab">
          <div class="selectionItemTypeHeader">${consumableTable === 'concoction' ? 'Concoction' : "Quick-Use"} ${elemID}</div>
          <div class="selectionItemTypeBody">
              <div class="seletionBackgroundBox">
                  <img class="selectionBackgroundImage" src="/images/Remnant/clear.png" id="${consumableTable}${elemID}Icon" alt="${consumableTable}${elemID} Icon"> <!--image-->
              </div>

              <div class="selectionSelectorBox">
                  <div class="selectSelectorTitle">SELECT:</div>
                  <div class="presetsSelectorBox">
                      <input class="selectSelector" id="${consumableTable}${elemID}" list="${consumableTable}${elemID}List" onchange="userTrigger.updateConsumable('${consumableTable}','${elemID}')"> <!--selector-->
                      <datalist id="${consumableTable}${elemID}List"></datalist>
                  </div>
              </div>
              <div class="selectItemDesc" id="${consumableTable}${elemID}Desc"></div> <!--description-->
          </div>

          <div class="selectionItemTypeFooter">
              <div style="padding-right: 5px;">Disable item calculation:</div>
              <label class="toggleContainer">
                  <input type="checkbox" class="toggleCheckbox" id="USEtoggled${consumableTable==="concoction" ? "Conc" : "Quick"}${elemID}" onchange="userTrigger.updateConsumableToggle(${elemID-1},'${consumableTable==="concoction" ? "concoctionsToggleArray" : "consumablesToggleArray"}');updateFormulas()"> <!--math toggle-->
                  <span class="toggleSlider"></span>
              </label>
          </div>
      </div>
    `
  },
  consumableIconBox(consumableTable,elemID) {
    return `
    <button type="button" class="comboConsumableImageBox comboConsumableImageBoxMAIN" id="${consumableTable}${elemID}MAINbox" onclick="basicsUpdates.updateFocus('${consumableTable}${elemID}Tab','${consumableTable}${elemID}')">
        <img class="comboArmorImage" src="/images/Remnant/clear.png" id="${consumableTable}${elemID}IconMAIN" alt="Combo ${consumableTable}${elemID}">
    </button>
    `
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
      createHTML.populateGear("trait1List",traits);
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
let manipulateConsumable = {
  updateConsumableCollection(consumableTable) {
    let megaBox = readSelection(`${consumableTable}sMegaBox`);
    let displayRow = readSelection(`${consumableTable === "concoction" ? "comboConcoctionsBox" : "comboQuickUsesBox"}`);
    megaBox.innerHTML = "";
    displayRow.innerHTML = "";
    let recordReference = consumableTable === "concoction" ? globalRecords.greatConcoctionRecords : globalRecords.greatConsumableRecords;


    if (consumableTable === "concoction") {
      let concLimit = globalRecords.totalConcLimit;
      for (let i=1;i<=concLimit;i++) {
        //create the box, and then populate it with cons options
        megaBox.innerHTML += createHTML.consumableBox(consumableTable,i);
        displayRow.innerHTML += createHTML.consumableIconBox(consumableTable,i);
        createHTML.populateGear(`${consumableTable}${i}List`,concoctions);
        userTrigger.consumableToggleStates.concoctionsToggleArray.push(false);
      }
      for (let i=0;i<recordReference.length;i++) {
        if ((i+1)<=globalRecords.totalConcLimit) {
          let recordPath = recordReference[i];
          //If the current slot is blank, and is not the last slot, delete the slot
          if (!recordPath){
            manipulateConsumable.modifyConsumableRecord(recordReference,"delete",i+1);
            userTrigger.consumableToggleStates.concoctionsToggleArray.splice(i,1);
          }
          readSelection(`concoction${i+1}`).value = recordPath;
          readSelection(`${consumableTable}${i+1}Icon`).src=concoctions[recordPath].image;
          readSelection(`${consumableTable}${i+1}IconMAIN`).src=concoctions[recordPath].image;
          readSelection(`${consumableTable}${i+1}Desc`).innerHTML = userTrigger.updateSubstatColor(concoctions[recordPath].desc);
          readSelection(`USEtoggledConc${i+1}`).checked = userTrigger.consumableToggleStates.concoctionsToggleArray[i] || false;
          // id="USEtoggled${consumableTable==="concoction" ? "Conc" : "Quick"}${elemID}"
        }
        else {
          manipulateConsumable.modifyConsumableRecord(recordReference,"delete",i+1);
          userTrigger.consumableToggleStates.concoctionsToggleArray.splice(i,1);
        }
      }
      for (let i=0;i<userTrigger.consumableToggleStates.concoctionsToggleArray.length;i++) {
        if (i>=recordReference.length) {
          userTrigger.consumableToggleStates.concoctionsToggleArray.splice(i,1);
        }
      }
    }
    else {
      if (recordReference.length===0) { //If we just loaded the page, make the first cons box.
        manipulateConsumable.modifyConsumableRecord(recordReference,"create");
        megaBox.innerHTML += createHTML.consumableBox(consumableTable,1);
        displayRow.innerHTML += createHTML.consumableIconBox(consumableTable,1);
        createHTML.populateGear(`${consumableTable}${1}List`,quickUses);
      }
      else {
        for (let i=0;i<recordReference.length;i++) {
          let recordPath = recordReference[i];
          //If the current slot is blank, and is not the last slot, delete the slot
          if (i != recordReference.length-1 && !recordPath){
            manipulateConsumable.modifyConsumableRecord(recordReference,"delete",i+1);
            userTrigger.consumableToggleStates.consumablesToggleArray.splice(i,1);
          }
          //If the last cons is not blank, make a new blank cons slot.
          else if (i === recordReference.length-1 && recordPath) {
            manipulateConsumable.modifyConsumableRecord(recordReference,"create");
            userTrigger.consumableToggleStates.consumablesToggleArray.push(false);
          }

          megaBox.innerHTML += createHTML.consumableBox(consumableTable,i+1);
          displayRow.innerHTML += createHTML.consumableIconBox(consumableTable,i+1);
          createHTML.populateGear(`${consumableTable}${i+1}List`,quickUses);
        }

        for (let i=0;i<recordReference.length;i++) {
          let recordPath = recordReference[i];
          readSelection(`${consumableTable}${i+1}`).value = recordPath;
          readSelection(`${consumableTable}${i+1}Icon`).src = quickUses[recordPath].image;
          readSelection(`${consumableTable}${i+1}IconMAIN`).src = quickUses[recordPath].image;
          readSelection(`${consumableTable}${i+1}Desc`).innerHTML = userTrigger.updateSubstatColor(quickUses[recordPath].desc);
          readSelection(`USEtoggledQuick${i+1}`).checked = userTrigger.consumableToggleStates.consumablesToggleArray[i] || false;
        }

        for (let i=0;i<userTrigger.consumableToggleStates.consumablesToggleArray.length;i++) {
          if (i>=recordReference.length) {
            userTrigger.consumableToggleStates.consumablesToggleArray.splice(i,1);
          }
        }
      }

    }
  },
  modifyConsumableRecord(recordReference,action,ID,name,) {
    //ID only used for deletion, can be put as anything during creation if custom values are passed
    if (action==="create") {
      recordReference.push(name ?? "")//this might be wrong and needs a globalRecords param passed instead of a reference
    }
    else if (action==="delete") {
      recordReference.splice(ID-1,1);
    }
    else {
      alert("modifyConsumableRecord(): The action type was not specified.");
    }
  },
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
    let traitRecord = globalRecords.greatTraitRecords;

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
    if (isExported) {
      urlObject.archetype.push(path.one.class);
      urlObject.archetype.push(path.two.class);
      urlObject.archetype.push(path.one.ability);
      urlObject.archetype.push(path.two.ability);
    }
    else {
      urlObject.archetype = "";
      if (classInfo[path.one.class].placementID != "00") {
        urlObject.archetype += classInfo[path.one.class].placementID + classInfo[path.one.class].abilities[path.one.ability].placementID;
      }
      if (classInfo[path.two.class].placementID != "00") {
        urlObject.archetype += classInfo[path.two.class].placementID + classInfo[path.two.class].abilities[path.two.ability].placementID;
      }
    }

    path = globalRecords.armor;
    if (isExported) {
      urlObject.armor.push(path.helmet);
      urlObject.armor.push(path.chest);
      urlObject.armor.push(path.leg);
      urlObject.armor.push(path.hand);
    }
    else {
      urlObject.armor = "";
      if (helmets[path.helmet].placementID != "H00") {urlObject.armor += helmets[path.helmet].placementID}
      if (chests[path.chest].placementID != "C00") {urlObject.armor += chests[path.chest].placementID}
      if (legs[path.leg].placementID != "L00") {urlObject.armor += legs[path.leg].placementID}
      if (hands[path.hand].placementID != "G00") {urlObject.armor += hands[path.hand].placementID}
    }

    path = globalRecords.weapons;
    if (isExported) {
      urlObject.primary.push(path.primary);
      urlObject.primary.push(path.primaryMutator);
      urlObject.primary.push(path.primaryMod);
      urlObject.melee.push(path.melee);
      urlObject.melee.push(path.meleeMutator);
      // globalRecords.urlObject.melee.push(readSelection("meleeMod").value);
      urlObject.secondary.push(path.secondary);
      urlObject.secondary.push(path.secondaryMutator);
      urlObject.secondary.push(path.secondaryMod);
    }
    else {
      if (primary[path.primary].placementID != "00") {urlObject.primary.push(primary[path.primary].placementID)}
      else {urlObject.primary.push("")}
      if (rangedMutators[path.primaryMutator].placementID != "00") {urlObject.primary.push(rangedMutators[path.primaryMutator].placementID)}
      else {urlObject.primary.push("")}
      if (primary[path.primary].builtIN === "" && rangedMods[path.primaryMod].placementID != "00") {urlObject.primary.push(rangedMods[path.primaryMod].placementID)}
      else {urlObject.primary.push("")}


      if (melee[path.melee].placementID != "00") {urlObject.melee.push(melee[path.melee].placementID)}
      else {urlObject.melee.push("")}
      if (meleeMutators[path.meleeMutator].placementID != "00") {urlObject.melee.push(meleeMutators[path.meleeMutator].placementID)}
      else {urlObject.melee.push("")}


      if (secondary[path.secondary].placementID != "00") {urlObject.secondary.push(secondary[path.secondary].placementID)}
      else {urlObject.secondary.push("")}
      if (rangedMutators[path.secondaryMutator].placementID != "00") {urlObject.secondary.push(rangedMutators[path.secondaryMutator].placementID)}
      else {urlObject.secondary.push("")}
      if (secondary[path.secondary].builtIN === "" && rangedMods[path.secondaryMod].placementID != "00") {urlObject.secondary.push(rangedMods[path.secondaryMod].placementID)}
      else {urlObject.secondary.push("")}
    }

    if (isExported) {
      path = globalRecords.greatConcoctionRecords;
      for (i=0;i<path.length;i++) {
        urlObject.consumable.push(path[i])
      }
      path = globalRecords.greatConsumableRecords;
      for (i=0;i<path.length;i++) {
        urlObject.consumable.push(path[i])
      }
    }
    else {
      urlObject.consumable = "";

      path = globalRecords.greatConcoctionRecords;
      for (i=0;i<path.length;i++) {
        if (concoctions[path[i]].placementID != "C00") {urlObject.consumable += concoctions[path[i]].placementID}
      }

      path = globalRecords.greatConsumableRecords;
      for (i=0;i<path.length;i++) {
        if (quickUses[path[i]].placementID != "Q00") {urlObject.consumable += quickUses[path[i]].placementID}
      }
    }

    path = globalRecords.accessories;
    if (isExported) {
      urlObject.accessory.push(path.amulet);
      for (i=1;i<=4;i++) {
        urlObject.accessory.push(path[`ring${i}`]);
      }
    }
    else {
      urlObject.accessory = "";
      if (amulets[path.amulet].placementID != "A000") {urlObject.accessory += amulets[path.amulet].placementID}
      for (i=1;i<=4;i++) {
        if (rings[path[`ring${i}`]].placementID != "R000") {urlObject.accessory += rings[path[`ring${i}`]].placementID}
        // urlObject.accessory.push(path[`ring${i}`]);
      }
    }
    

    if (isExported) {
      urlObject.relic.push(path.relic);
      for (i=1;i<=3;i++) {
        urlObject.relic.push(path[`fragment${i}`]);
      }
    }
    else {
      urlObject.relic = "";
      if (relics[path.relic].placementID != "r00") {urlObject.relic += relics[path.relic].placementID}

      for (i=1;i<=3;i++) {
        if (fragments[path[`fragment${i}`]].placementID != "F00") {urlObject.relic += fragments[path[`fragment${i}`]].placementID}
      }
    }

    urlObject.settings = ["","",""]
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

    for (let i=1;i<=globalRecords.greatConcoctionRecords.length;i++) {
      // manipulateURL.importURLsetting(`USEtoggledConc${i}`,urlSettings[1][i-1]);
      manipulateURL.exportURLsetting(`USEtoggledConc${i}`,"settings",isOverride,false,1);
    }

    for (let i=1;i<=globalRecords.greatConsumableRecords.length;i++) {
      // manipulateURL.importURLsetting(`USEtoggledQuick${i}`,urlSettings[1][i-1]);
      manipulateURL.exportURLsetting(`USEtoggledQuick${i}`,"settings",isOverride,false,2);
    }

    // manipulateURL.exportURLsetting("USEtoggledConc1","settings",isOverride);
    // manipulateURL.exportURLsetting("USEtoggledConc2","settings",isOverride);
    // manipulateURL.exportURLsetting("USEtoggledConc3","settings",isOverride);
    // manipulateURL.exportURLsetting("USEtoggledConc4","settings",isOverride);
    // manipulateURL.exportURLsetting("USEtoggledConc5","settings",isOverride);
    // manipulateURL.exportURLsetting("USEtoggledConc6","settings",isOverride);
    // manipulateURL.exportURLsetting("USEtoggledConc7","settings",isOverride);
    // manipulateURL.exportURLsetting("USEtoggledQuick1","settings",isOverride);
    // manipulateURL.exportURLsetting("USEtoggledQuick2","settings",isOverride);
    // manipulateURL.exportURLsetting("USEtoggledQuick3","settings",isOverride);
    // manipulateURL.exportURLsetting("USEtoggledQuick4","settings",isOverride);
    // for (let i=1;i<globalRecords.greatTraitRecords.length;i++) {
    //   manipulateURL.exportURLsetting(`USEtoggledTrait${i}`,"settings",isOverride)
    // }
    urlObject.settings[0] = globalRecords.urlObject.settings[0].replace(/\.?0+$/, '');
    if (urlObject.settings[1]) {urlObject.settings[1] = globalRecords.urlObject.settings[1].replace(/\.?0+$/, '');}
    if (urlObject.settings[2]) {urlObject.settings[2] = globalRecords.urlObject.settings[2].replace(/\.?0+$/, '');}

  //Advanced Stats Settings
    settingsPath = !isOverride ? readSelection("enemyCount").value : globalRecords.ALTmeleeFactors.enemyCount;
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
    settingsPath = !isOverride ? readSelection("spiritHealerStacks").value : globalRecords.RECORDEDspiritHealerStacks;
    if (+settingsPath) {
      urlObject.adv.push(settingsPath);
    }
    else {globalRecords.urlObject.adv.push("")}

    urlObject.adv.push("");
    manipulateURL.exportURLsetting("includeREdamage","adv",isOverride,globalRecords.RECORDEDuseNonStandardDR);
    manipulateURL.exportURLsetting("includeDMGKept","adv",isOverride,globalRecords.RECORDEDuseNonStandardDR);
    manipulateURL.exportURLsetting("includeRelicHealing","adv",isOverride,globalRecords.RECORDEDuseRelicHealing);
    manipulateURL.exportURLsetting("includeShields","adv",isOverride,globalRecords.RECORDEDuseShields);

    manipulateURL.exportURLsetting("greyActive","adv",isOverride,globalRecords.ALTmeleeFactors.greyHealthActive);
    manipulateURL.exportURLsetting("perfectDodge","adv",isOverride,globalRecords.ALTmeleeFactors.isPerfectDodge);
    manipulateURL.exportURLsetting("isEvade","adv",isOverride,globalRecords.ALTmeleeFactors.isEvade);
    manipulateURL.exportURLsetting("disableWeakspot","adv",isOverride,globalRecords.ALTmeleeFactors.weakspotOverride);
    
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
      const newUrl = `${window.location.origin}/Remnant2/Calculator/?${decoded}`;


      if (!isOverride) {
        history.replaceState({}, '', newUrl);
      }
      else {
        return newUrl;
      }
    }
  },
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
    let urlSettings = feed.get("settings");
    let urlAdvanced = feed.get("adv");
    let urlSource = feed.get("s");
    let urlRedirect = feed.get("redirect");
    if (urlRedirect) {alert("You were redirected here, presumably because you used an old link. The site structure has changed, and you'll only see this if you used an older link but in theory you should never see it again.")}
    let invalidEntries = [];
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
                //If an import level is greater than 10, reduce to 10
                traitLevel = Math.min(+itemLevel, 10);
                //Don't need to check for less than 0, or round. A decimal or a - would be invalid.
                manipulateTrait.modifyTraitRecord("create",0,key,+itemLevel);



                // readSelection("amulet").value = key;
                // userTrigger.updateAccessory('amulet',null,true);
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
    }
    manipulateTrait.updateTraitCollection();//This needs to get called regardless of null or not, to generate first trait box
    //We call it before archs so when archs ARE called, they can factor default points into the trait math.
    //ARCHETYPES AND ABILITIES
    if (urlArchs) {
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
    manipulateTrait.pointsOverLimit();//Trim points if cap exceeded
  //ARMOR
    if (urlArmor) {
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
  //RELIC AND FRAGMENTS
    if (urlRelic) {
      let hasMultipleOld = urlRelic.includes(",") || urlRelic.includes(" ");
      let isActuallyNumbers = !hasMultipleOld && urlRelic.length % 3 === 0 
        && (urlRelic.charAt(0) === "r" || urlRelic.charAt(0) === "R" || urlRelic.charAt(0) === "Y" || urlRelic.charAt(0) === "B");

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
          else if (itemHeader === "R" || itemHeader === "Y" || itemHeader === "B") {
            armorKeys = Object.keys(fragments)
            for (let key of armorKeys) {
              if (fragments[key].placementID === itemID) {

                for (let x=1;x<=3;x++) {
                  if (globalRecords.accessories[`fragment${x}`] === "") {
                    readSelection(`fragment${x}`).value = key;
                    userTrigger.updateFragment('fragment',x,true);
                    break;
                  }
                }
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
        for (let i=1;i<=3;i++) {
          if (fragments[urlRelic[i]] === undefined) {invalidEntries.push(urlRelic[i]);}
          else if (urlRelic[i]) {
            readSelection(`fragment${i}`).value = urlRelic[i];
            userTrigger.updateFragment('fragment',i,true);
          }
        }
      }
    }
  //WEAPONS
    if (urlPrimary) {
      const letterPattern = /[a-zA-Z]/;
      letterPattern.test(urlPrimary)
      let isActuallyNumbers = !letterPattern.test(urlPrimary);

      urlPrimary = urlPrimary.split(",");

      if (isActuallyNumbers) {
        armorKeys = Object.keys(primary)
        for (let key of armorKeys) {
          if (primary[key].placementID === urlPrimary[0]) {
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
        if (primary[readSelection("primary").value].builtIN === "") {
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
    }
    if (urlMelee) {
      const letterPattern = /[a-zA-Z]/;
      letterPattern.test(urlMelee)
      let isActuallyNumbers = !letterPattern.test(urlMelee);

      urlMelee = urlMelee.split(",");

      if (isActuallyNumbers) {
        armorKeys = Object.keys(melee)
        for (let key of armorKeys) {
          if (melee[key].placementID === urlMelee[0]) {
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
        if (melee[urlMelee[0]] === undefined) {invalidEntries.push(urlMelee[0]);}
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
        armorKeys = Object.keys(secondary)
        for (let key of armorKeys) {
          if (secondary[key].placementID === urlSecondary[0]) {
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
        if (secondary[readSelection("secondary").value].builtIN === "") {
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
    }
  //AMULET AND RINGS
    if (urlAccessory) {
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
  //CONCOCTIONS AND QUICK USE CONSUMABLES
    if (urlConcoctions) {
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
                if (concoctions[key].placementID === itemID) {
                  globalRecords.greatConcoctionRecords.push(key)
                  // readSelection("helmetChoice").value = key;
                  // userTrigger.updateArmor('helmet',true);
                  break;
                }
              }
              break;
            case "Q": 
              armorKeys = Object.keys(quickUses)
              for (let key of armorKeys) {
                if (quickUses[key].placementID === itemID) {
                  globalRecords.greatConsumableRecords.push(key)
                  // readSelection("chestChoice").value = key;
                  // userTrigger.updateArmor('chest',true);
                  break;
                }
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
  //SETTINGS
    if (urlSettings) {
      urlSettings = urlSettings.split(",");
      //General item toggles
      manipulateURL.importURLsetting("USEtoggledHead",urlSettings[0][0]);
      manipulateURL.importURLsetting("USEtoggledChest",urlSettings[0][1]);
      manipulateURL.importURLsetting("USEtoggledLegs",urlSettings[0][2]);
      manipulateURL.importURLsetting("USEtoggledHands",urlSettings[0][3]);
      manipulateURL.importURLsetting("USEtoggledAmulet",urlSettings[0][4]);
      manipulateURL.importURLsetting("USEtoggledRing1",urlSettings[0][5]);
      manipulateURL.importURLsetting("USEtoggledRing2",urlSettings[0][6]);
      manipulateURL.importURLsetting("USEtoggledRing3",urlSettings[0][7]);
      manipulateURL.importURLsetting("USEtoggledRing4",urlSettings[0][8]);
      manipulateURL.importURLsetting("USEtoggledRelic",urlSettings[0][9]);
      manipulateURL.importURLsetting("USEtoggledrFrag1",urlSettings[0][10]);//Not used, placeholder
      manipulateURL.importURLsetting("USEtoggledrFrag2",urlSettings[0][11]);//Not used, placeholder
      manipulateURL.importURLsetting("USEtoggledrFrag3",urlSettings[0][12]);//Not used, placeholder
      manipulateURL.importURLsetting("USEtoggledPrimeP",urlSettings[0][13]);
      manipulateURL.importURLsetting("USEtoggledAbility1",urlSettings[0][14]);
      manipulateURL.importURLsetting("USEtoggledPassive1",urlSettings[0][15]);
      manipulateURL.importURLsetting("USEtoggledPassive2",urlSettings[0][16]);
      manipulateURL.importURLsetting("USEtoggledPassive3",urlSettings[0][17]);
      manipulateURL.importURLsetting("USEtoggledPassive4",urlSettings[0][18]);
      manipulateURL.importURLsetting("USEtoggledAbility2",urlSettings[0][19]);
      manipulateURL.importURLsetting("USEtoggledPassive5",urlSettings[0][20]);
      manipulateURL.importURLsetting("USEtoggledPassive6",urlSettings[0][21]);
      manipulateURL.importURLsetting("USEtoggledPassive7",urlSettings[0][22]);
      manipulateURL.importURLsetting("USEtoggledPassive8",urlSettings[0][23]);
      manipulateURL.importURLsetting("USEtoggledPrimary",urlSettings[0][24]);
      manipulateURL.importURLsetting("USEtoggledpMutator",urlSettings[0][25]);
      manipulateURL.importURLsetting("USEtoggledpMod",urlSettings[0][26]);
      manipulateURL.importURLsetting("USEtoggledMelee",urlSettings[0][27]);
      manipulateURL.importURLsetting("USEtoggledmMutator",urlSettings[0][28]);
      manipulateURL.importURLsetting("USEtoggledmMod",urlSettings[0][29]);
      manipulateURL.importURLsetting("USEtoggledSecondary",urlSettings[0][30]);
      manipulateURL.importURLsetting("USEtoggledsMutator",urlSettings[0][31]);
      manipulateURL.importURLsetting("USEtoggledsMod",urlSettings[0][32]);


      //concoctions
      if (urlSettings[1]) {
        let toggleStates = [];
        for (let i=1;i<=globalRecords.greatConcoctionRecords.length;i++) {toggleStates.push(urlSettings[1][i-1] === "1" ? true : false);}
        userTrigger.consumableToggleStates.concoctionsToggleArray = [...toggleStates];
      }
      //quick-use consumables
      if (urlSettings[2]) {
        let toggleStates = [];
        for (let i=1;i<=globalRecords.greatConsumableRecords.length;i++) {toggleStates.push(urlSettings[2][i-1] === "1" ? true : false);}
        userTrigger.consumableToggleStates.consumablesToggleArray = [...toggleStates];
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
  //Used in importURLparameters if an invalid import entry was detected, to notify the user
  excludeAlert(entry) {
    alert(`Item Import(s): "${entry}" read as invalid and excluded from the import.\n\nThis happens because of one or more of following options:\n- Vash or R2TK has the item's name wrong\n- Vash hasn't added the item yet\n- Or you, the user, have manually modified the URL. Don't.\nIf you believe this to be a spelling error, join the discord linked at the bottom of any page, and let Vash know.`)    
  }
}
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

    if (!concoctions[selectedConsumable.value] && !quickUses[selectedConsumable.value]) {
      selectedConsumable.value = "";//If the selection/input doesn't exist, clear it to blank.
    }

    //Assign the value to the general storage, separate from the UI
    // globalRecords.consumables[`${type}${ID}`] = selectedConsumable.value;

    if (type === "concoction") {
      globalRecords.greatConcoctionRecords[ID-1] = selectedConsumable.value;
      if (userTrigger.consumableToggleStates.concoctionsToggleArray[ID-1] === undefined) {
        userTrigger.consumableToggleStates.concoctionsToggleArray[ID-1] = (false);
      }
    }
    else {
      globalRecords.greatConsumableRecords[ID-1] = selectedConsumable.value;
      if (userTrigger.consumableToggleStates.consumablesToggleArray[ID-1] === undefined) {
        userTrigger.consumableToggleStates.consumablesToggleArray[ID-1] = (false);
      }
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
    }
  },
  updateConsumableToggle(elemID,arrayType) {
    if (userTrigger.consumableToggleStates[arrayType][elemID]) {userTrigger.consumableToggleStates[arrayType][elemID] = false}
    else {userTrigger.consumableToggleStates[arrayType][elemID] = true;}
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
      readSelection("meleeStat1").innerHTML = weaponObjectReference.DMG;
      readSelection("meleeStat2").innerHTML = (weaponObjectReference.critChance*100).toFixed(2)+"%";
      readSelection("meleeStat3").innerHTML = (weaponObjectReference.weakSpot*100).toFixed(2)+"%";
      readSelection("meleeStat4").innerHTML = (weaponObjectReference.stagger*100).toFixed(2)+"%";
      readSelection("meleeStat5").innerHTML = weaponObjectReference.weaponClass;



      readSelection("meleeModBox").style.display = "none";
      if (weaponObjectReference.builtIN) {
        readSelection("meleeModBox").style.display = "flex";
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

      readSelection("primaryWeaponStats").innerHTML = `
      <div id="primaryStat1">${weaponObjectReference.DMG}</div>
      <div class="weaponRowContainer">
          <span class="weaponStat">RPS:</span><span class="rowTraceLine"></span><span class="weaponValue">${weaponObjectReference.RPS.toFixed(2)}</span>
      </div>
      <div class="weaponRowContainer">
          <span class="weaponStat">Magazine:</span><span class="rowTraceLine"></span><span class="weaponValue">${weaponObjectReference.magazine.toFixed(0)}</span>
      </div>
      <div class="weaponRowContainer">
          <span class="weaponStat">Range:</span><span class="rowTraceLine"></span><span class="weaponValue">${weaponObjectReference.ideal.toFixed(2)}</span>
      </div>
      <div class="weaponRowContainer">
          <span class="weaponStat">Falloff:</span><span class="rowTraceLine"></span><span class="weaponValue">${weaponObjectReference.falloff.toFixed(2)}</span>
      </div>
      <div class="weaponRowContainer">
          <span class="weaponStat">Reserves:</span><span class="rowTraceLine"></span><span class="weaponValue">${weaponObjectReference.reserves.toFixed(0)}</span>
      </div>
      <div class="weaponRowContainer">
          <span class="weaponStat">Crit Chance:</span><span class="rowTraceLine"></span><span class="weaponValue">${(weaponObjectReference.critChance*100).toFixed(2)+"%"}</span>
      </div>
      <div class="weaponRowContainer">
          <span class="weaponStat">Weak Spot:</span><span class="rowTraceLine"></span><span class="weaponValue">${(weaponObjectReference.weakspot*100).toFixed(2)+"%"}</span>
      </div>
      <div class="weaponRowContainer">
          <span class="weaponStat">Stagger:</span><span class="rowTraceLine"></span><span class="weaponValue">${(weaponObjectReference.stagger*100).toFixed(2)+"%"}</span>
      </div>
      `;

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
          // readSelection(`primaryModDesc`).innerHTML=mods.primaryMods[""].desc;
          readSelection("primaryModMAIN").innerHTML = "";
          readSelection("primaryMutatorMAIN").innerHTML = "";
          // readSelection(`primaryModImage`).src=mods.primaryMods[""].image;

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

      readSelection("secondaryWeaponStats").innerHTML = `
      <div>${weaponObjectReference.DMG}</div>
      <div class="weaponRowContainer">
          <span class="weaponStat">RPS:</span><span class="rowTraceLine"></span><span class="weaponValue">${weaponObjectReference.RPS.toFixed(2)}</span>
      </div>
      <div class="weaponRowContainer">
          <span class="weaponStat">Magazine:</span><span class="rowTraceLine"></span><span class="weaponValue">${weaponObjectReference.magazine.toFixed(0)}</span>
      </div>
      <div class="weaponRowContainer">
          <span class="weaponStat">Range:</span><span class="rowTraceLine"></span><span class="weaponValue">${weaponObjectReference.ideal.toFixed(2)}</span>
      </div>
      <div class="weaponRowContainer">
          <span class="weaponStat">Falloff:</span><span class="rowTraceLine"></span><span class="weaponValue">${weaponObjectReference.falloff.toFixed(2)}</span>
      </div>
      <div class="weaponRowContainer">
          <span class="weaponStat">Reserves:</span><span class="rowTraceLine"></span><span class="weaponValue">${weaponObjectReference.reserves.toFixed(0)}</span>
      </div>
      <div class="weaponRowContainer">
          <span class="weaponStat">Crit Chance:</span><span class="rowTraceLine"></span><span class="weaponValue">${(weaponObjectReference.critChance*100).toFixed(2)+"%"}</span>
      </div>
      <div class="weaponRowContainer">
          <span class="weaponStat">Weak Spot:</span><span class="rowTraceLine"></span><span class="weaponValue">${(weaponObjectReference.weakspot*100).toFixed(2)+"%"}</span>
      </div>
      <div class="weaponRowContainer">
          <span class="weaponStat">Stagger:</span><span class="rowTraceLine"></span><span class="weaponValue">${(weaponObjectReference.stagger*100).toFixed(2)+"%"}</span>
      </div>
      `;

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
          // readSelection(`secondaryModDesc`).innerHTML=mods.secondaryMods[""].desc;
          readSelection("secondaryModMAIN").innerHTML = "";
          readSelection("secondaryMutatorMAIN").innerHTML = "";
          readSelection("secondaryAttachmentsMAIN").style.display = "none"
          // readSelection(`secondaryModImage`).src=mods.secondaryMods[""].image;

          readSelection("secondaryModBox").style.display = "none";
          readSelection("secondaryMutatorBox").style.display = "none";

          userTrigger.updateMod("rangedMod","2",true);
          readSelection("rangedMutator2").value = "";
          userTrigger.updateMutator('rangedMutator','2',true)
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
    readSelection(`${type}${modifier}Image`).src = mutators[`${collection}Mutators`][selectedMutator.value].image;
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
    readSelection(`${armorPiece}Armor`).innerHTML=selectedArmor.stats.Armor || 0;
    readSelection(`${armorPiece}Weight`).innerHTML=selectedArmor.stats.Encumbrance || 0;
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
    let fragmentName = selectedValue.value;
    globalRecords.accessories[`fragment${ID}`] = fragmentName

    let fragDescription = fragments[fragmentName].desc
    let levelValue = fragments[fragmentName].value;
    if (fragDescription.includes("%")) {levelValue *= 100;}
    let adjustedDescription = fragDescription.replace("VALUE1.1",levelValue.toFixed(2));

    tooltipStorage[`fragment${ID}`] = adjustedDescription.replace("VALUE1.1",levelValue.toFixed(2));

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
  updateArchetypeQuery(archetype,value,parent) {
    let overArchetype = `${archetype}${value}`
    let selectedArchetype = readSelection(overArchetype).value;
    //Update archetype icon
    // readSelection(`${overArchetype}Icon`).src=classInfo[selectedArchetype].classIcon;
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
    userTrigger.updateAbilityQuery(overArchetype,true);
    //Populate passive name and descriptions
    let classPassivePath = classInfo[selectedArchetype].passives;
    for (let i=1;i<=4;i++) {
      readSelection(`${overArchetype}Passive${i}`).innerHTML = classPassivePath[`passive${i}`].name;
      // readSelection(`${overArchetype}passive${i}desc`).innerHTML = userTrigger.updateSubstatColor(classPassivePath[`passive${i}`].desc);
    }
    //Update traits based on class selection
    manipulateTrait.updateTraitCollection(globalRecords.archetype1Old,globalRecords.archetype2Old);
    //Check if this selection was a duplicate, and if it was, swap places with the old info.
    userTrigger.checkDuplicateSelection(archetype,value,`updateArchetypeQuery`,`duo`);
    //Concatenates the two selected classes, uses resulting string to search comboTitle
    // readSelection("comboTitle").innerHTML=titleCombos[`${readSelection("archetype1").value}${readSelection("archetype2").value}`];
    //In closing, update all formulas
    if (!parent) {
      updateFormulas("cycleTableKnowerOfAll");
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
  updateAbilityQuery(archetype,parent) {
    let selectedArchetype = readSelection(archetype).value;
    let selectedAbility = readSelection(`${archetype}ability`).value;
    //since abilities are always called in archs or ability updates, assign archs/abilities to global records here
    if (archetype==="archetype1") {
      globalRecords.archs.one.class = selectedArchetype;
      globalRecords.archs.one.ability = selectedAbility;
      readSelection(`settingsArch1`).innerHTML=selectedArchetype;
      readSelection(`settingsPrimePerk`).innerHTML=classInfo[selectedArchetype].primePerk;
      readSelection("settingsAbility1").innerHTML = selectedAbility;
      // readSelection(`primePerkIcon`).src=classInfo[selectedArchetype].primePerkImage;
      // readSelection(`primePerkDesc`).innerHTML=userTrigger.updateSubstatColor(classInfo[selectedArchetype].primePerkDesc);
    }
    else if (archetype==="archetype2") {
      globalRecords.archs.two.class = selectedArchetype;
      globalRecords.archs.two.ability = selectedAbility;
      readSelection(`settingsArch2`).innerHTML=selectedArchetype;
      readSelection("settingsAbility2").innerHTML = selectedAbility;
    }
    // readSelection(`${archetype}abilityDesc`).innerHTML=userTrigger.updateSubstatColor(classInfo[selectedArchetype].abilities[selectedAbility].desc);
    readSelection(`${archetype}abilityIcon`).src=classInfo[selectedArchetype].abilities[selectedAbility].image;
    if (!parent) {
      updateFormulas("cycleTableKnowerOfAll");
    }
  },
  //Triggers trait updates based on newly selected trait and associate level.
  //Also prevents items from going above 85 total points spent.
  updateTrait(elemID,adjustment) {
    let traitName = readSelection(`trait${elemID}`).value;

    if (!traits[traitName]) {
      readSelection(`trait${elemID}`).value = "";
    }
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
  pullIfActive (toggleId,itemPath,itemType,category,modPath,toggleModId) {
    let toggleCheck = toggleId[0] ? readSelection(toggleId[2]).checked : toggleId[3];
    if (!toggleCheck) {
      if (itemPath && itemType != "Prime") {formulasValues.pullStats(toggleId[1], itemPath.stats);}
      else {formulasValues.pullStats(toggleId[1], itemPath);}
    }
    if (category != 'Weapon') {return;}
    else {
      let statsPath;
      toggleCheck = toggleId[0] ? readSelection(toggleModId[0]).checked : toggleModId[1];
      if (!toggleCheck) {
        if (itemPath && itemPath.builtIN) {statsPath = mods[`builtIn${itemType}Mods`][itemPath.builtIN];}
        else if (modPath) {statsPath = mods[`${itemType.toLowerCase()}Mods`][modPath];}
      }
      if (statsPath) {formulasValues.pullStats(toggleId[1], statsPath.stats);}
    }
  },
  //Used in updateFormulas() to fill trait property values on the master table
  //Utilizes toggle states
  pullTraits (index) {
    const recordReference = globalRecords.greatTraitRecords; //Yoink all active trait values

    for (const trait of recordReference) {
      if (trait.name === "") {continue;}
      const traitLevel = trait.level;
      const traitPath = traits[trait.name];
      const propertyArray = Array.isArray(traitPath.property);
      const secondProperty = traitPath.property2;
      const secondPropertyArray = Array.isArray(traitPath.property);

      if (traitPath.property === "") {continue;}

      if (traitPath) {
        if (!propertyArray) {
          if (Array.isArray(traitPath.level[traitLevel])) {index[traitPath.property] *= 1 + traitPath.level[traitLevel][0];}//times multiplicative values
          else {index[traitPath.property] += traitPath.level[traitLevel];}
        }
        else {
          for (const attribute of traitPath.property) {index[attribute] += traitPath.level[traitLevel];//Otherwise just add the shit
        }
        }

        if (secondProperty) {
          if (!secondPropertyArray) {
            if (Array.isArray(traitPath.level2[traitLevel])) {index[traitPath.property2] *= 1 + traitPath.level2[traitLevel][0];}//times multiplicative values
            else {index[traitPath.property2] += traitPath.level2[traitLevel];}
          }
          else {
            for (const attribute of traitPath.property2) {index[attribute] += traitPath.level2[traitLevel];//Otherwise just add the shit
          }
          }
        }

      }
    }
  },
  //Used in updateFormulas() to read gear/accessory specific statistics and add them to the master table
  //Utilizes toggle states on the main UI version
  pullGearStatsCycles(index,ping) {
    let path1 = classInfo[globalRecords.archs.one.class];
    let path2 = classInfo[globalRecords.archs.two.class];
    let ability1 = globalRecords.archs.one.ability;
    let ability2 = globalRecords.archs.two.ability;
    let pathALT = globalRecords.searchSettingsToggles;

    if (!ping) {//ARMOR
      let armorRecordPath = globalRecords.armor;
      formulasValues.pullStats(index,armor.helmets[armorRecordPath.helmet].stats);
      formulasValues.pullStats(index,armor.chests[armorRecordPath.chest].stats);
      formulasValues.pullStats(index,armor.legs[armorRecordPath.leg].stats);
      formulasValues.pullStats(index,armor.hands[armorRecordPath.hand].stats);
    }

    let tableName = globalRecords.accessories;//---
    formulasValues.pullStats(index,amulets[tableName.amulet].stats);
    //RINGS, PASSIVES, and FRAGMENTS
    for (let i=1;i<=4;i++) {
      formulasValues.pullStats(index,rings[tableName[`ring${i}`]].stats);
      if (!pathALT[`usePassive${i}`])
        {formulasValues.pullStats(index,path1.passives[`passive${i}`].stats);}
      if (!pathALT[`usePassive${i+4}`])
        {formulasValues.pullStats(index,path2.passives[`passive${i}`].stats);}
      if (i<=3)
        {formulasValues.pullStats(index,fragments[tableName[`fragment${i}`]].stats)}
    }
    formulasValues.pullStats(index,relics[tableName.relic].stats);//RELIC
    if (!pathALT.usePrimePerk) {formulasValues.pullStats(index,path1.primeStats);}//PRIME PERK
    if (!pathALT.useAbility1) {formulasValues.pullStats(index,path1.abilities[ability1].stats);}//ABILITIES
    if (!pathALT.useAbility2) {formulasValues.pullStats(index,path2.abilities[ability2].stats);}

    let path = globalRecords.weapons;
    //Weapons
    formulasValues.pullStats(index,weapons.primary[path.primary].stats);
    formulasValues.pullStats(index,weapons.melee[path.melee].stats);
    formulasValues.pullStats(index,weapons.secondary[path.secondary].stats);
    //Mutators
    formulasValues.pullStats(index,mutators.primaryMutators[path.primaryMutator].stats);
    formulasValues.pullStats(index,mutators.meleeMutators[path.meleeMutator].stats);
    formulasValues.pullStats(index,mutators.secondaryMutators[path.secondaryMutator].stats);
    //Mods
    let checkWeaponPath = weapons.primary[path.primary];
    if (checkWeaponPath.builtIN) {formulasValues.pullStats(index,mods.builtInPrimaryMods[checkWeaponPath.builtIN].stats);}
    else if (path.primaryMod) {formulasValues.pullStats(index,mods.primaryMods[path.primaryMod].stats);}
    checkWeaponPath = weapons.melee[path.melee]
    if (checkWeaponPath.builtIN){formulasValues.pullStats(index,mods.builtInMeleeMods[checkWeaponPath.builtIN].stats);}//melee have no optional mods, all built-in
    checkWeaponPath = weapons.secondary[path.secondary]
    if (!checkWeaponPath.builtIN) {formulasValues.pullStats(index,mods.secondaryMods[path.secondaryMod].stats);}
    else {formulasValues.pullStats(index,mods.builtInSecondaryMods[checkWeaponPath.builtIN].stats);}

    //Concoctions
    recordPath = globalRecords.greatConcoctionRecords;
    globalRecords.totalConcLimit = 1 + index.ConcLimit;
    for (let i=1;i<=recordPath.length;i++) {
      let concoction = recordPath[i-1];
      // if (i<=globalRecords.totalConcLimit) {
        formulasValues.pullStats(index,concoctions[concoction].stats);
      // }
    }
    // Quick-use consumables
    // recordPath = globalRecords.greatConsumableRecords;
    // for (let i=1;i<=recordPath.length;i++) {
    //   let quickUse = recordPath[i-1];
    //   if (quickUses[quickUse]) {formulasValues.pullStats(index,quickUses[quickUse].stats);}
    // }
  },
  pullGearStats(isUIcalcs,index,ping) {
    const path = globalRecords.weapons;
    formulasValues.pullIfActive([isUIcalcs,index,'USEtoggledPrimary',false],weapons.primary[path.primary],'Primary','Weapon',path.primaryMod,['USEtoggledpMod',false]);
    formulasValues.pullIfActive([isUIcalcs,index,'USEtoggledMelee',false],weapons.melee[path.melee],'Melee','Weapon',undefined,['USEtoggledmMod',false]);
    formulasValues.pullIfActive([isUIcalcs,index,'USEtoggledSecondary',false],weapons.secondary[path.secondary],'Secondary','Weapon',path.secondaryMod,['USEtoggledsMod',false]);
    formulasValues.pullIfActive([isUIcalcs,index,'USEtoggledpMutator',false],mutators.primaryMutators[path.primaryMutator]);
    formulasValues.pullIfActive([isUIcalcs,index,'USEtoggledmMutator',false],mutators.meleeMutators[path.meleeMutator]);
    formulasValues.pullIfActive([isUIcalcs,index,'USEtoggledsMutator',false],mutators.secondaryMutators[path.secondaryMutator]);

    let archsTableName = globalRecords.archs;

    if (!ping) {//If this is just a quick stat pull so can we can look at armor after, then skip armor here
      let armorRecordPath = globalRecords.armor;
      formulasValues.pullIfActive([isUIcalcs,index,'USEtoggledHead',false],armor.helmets[armorRecordPath.helmet]);
      formulasValues.pullIfActive([isUIcalcs,index,'USEtoggledChest',false],armor.chests[armorRecordPath.chest]);
      formulasValues.pullIfActive([isUIcalcs,index,'USEtoggledLegs',false],armor.legs[armorRecordPath.leg]);
      formulasValues.pullIfActive([isUIcalcs,index,'USEtoggledHands',false],armor.hands[armorRecordPath.hand]);
    }
    //AMULET
    let tableName = globalRecords.accessories;
    formulasValues.pullIfActive([isUIcalcs,index,'USEtoggledAmulet',false],amulets[tableName.amulet]);
    //RINGS, PASSIVES, and FRAGMENTS
    for (let i=1;i<=4;i++) {
      formulasValues.pullIfActive([isUIcalcs,index,`USEtoggledRing${i}`,false],rings[tableName[`ring${i}`]]);
      formulasValues.pullIfActive([isUIcalcs,index,`USEtoggledPassive${i}`,globalRecords.searchSettingsToggles[`usePassive${i}`]],classInfo[archsTableName.one.class].passives[`passive${i}`]);
      formulasValues.pullIfActive([isUIcalcs,index,`USEtoggledPassive${i+4}`,globalRecords.searchSettingsToggles[`usePassive${i+4}`]],classInfo[archsTableName.two.class].passives[`passive${i}`]);
      
      if (i<=3)
        {formulasValues.pullStats(index,fragments[tableName[`fragment${i}`]].stats)}//frags have no toggles.
    }
    //RELIC
    formulasValues.pullIfActive([isUIcalcs,index,'USEtoggledRelic',false],relics[tableName.relic]);

    //PRIME PERK
    formulasValues.pullIfActive([isUIcalcs,index,'USEtoggledPrimeP',globalRecords.searchSettingsToggles.usePrimePerk],classInfo[archsTableName.one.class].primeStats,"Prime");
    //ABILITIES
    formulasValues.pullIfActive([isUIcalcs,index,'USEtoggledAbility1',globalRecords.searchSettingsToggles.useAbility1],classInfo[archsTableName.one.class].abilities[archsTableName.one.ability]);
    formulasValues.pullIfActive([isUIcalcs,index,'USEtoggledAbility2',globalRecords.searchSettingsToggles.useAbility2],classInfo[archsTableName.two.class].abilities[archsTableName.two.ability]);

  //Concoctions
    globalRecords.totalConcLimit = 1 + index.ConcLimit;
    manipulateConsumable.updateConsumableCollection("concoction");
    let recordPath = globalRecords.greatConcoctionRecords;
    for (let i=1;i<=globalRecords.totalConcLimit;i++) {
      if (i<=recordPath.length) {
        formulasValues.pullIfActive([isUIcalcs,index,`USEtoggledConc${i}`,false],concoctions[recordPath[i-1]]);
      }
    }
  //Quick-Use Consumables
    manipulateConsumable.updateConsumableCollection("quickUse");
    recordPath = globalRecords.greatConsumableRecords;
    for (let i=1;i<=recordPath.length;i++) {
      if (quickUses[recordPath[i-1]]) {
        formulasValues.pullIfActive([isUIcalcs,index,`USEtoggledQuick${i}`,false],quickUses[recordPath[i-1]]);
      }
    }
  },
  //Shorthand for looping through an elements "stats" object and adding it to the corresponding master value
  pullStats(index,path) {
    for (let elements in path) {
      if (index[elements] != undefined) {
        if (Array.isArray(path[elements])) {index[elements] *= 1 + path[elements][0];}//If the statistic is multiplicative, like REDmg or DMGKept, etc.
        else {index[elements] += path[elements];}//If the value is a general value, simply add it to the existing value on greatTable
      }
    }
  },
  //Shorthand for shit I got tired of typing every god damn time.
  updateDisplay(elemID,statistic,rounding,percent) {
    let percentage = percent ?? "";
    readSelection(elemID).innerHTML = `${statistic.toFixed(rounding)}${percentage}`;
  },
  readActiveConditionalsGeneralCYCLES(tieredFunctionStorage,conditionalPath) {//cycle specific version
    if (conditionalPath) {
        let names = Object.keys(conditionalPath);

        for (let i=0;i<names.length;i++) {
          let currentConditional = names[i];
          if (!tieredFunctionStorage[currentConditional]) {tieredFunctionStorage[currentConditional] = [];}
          tieredFunctionStorage[currentConditional].push(customItemFunctions[conditionalPath[currentConditional]])
        }
    }
  },
  readActiveConditionalsGeneralMAINUI(tieredFunctionStorage,toggleCheck,conditionalPath) {//main UI version
    if (!toggleCheck && conditionalPath) {
        let names = Object.keys(conditionalPath);

        for (let i=0;i<names.length;i++) {
          let currentConditional = names[i];
          if (!tieredFunctionStorage[currentConditional]) {tieredFunctionStorage[currentConditional] = [];}
          tieredFunctionStorage[currentConditional].push(customItemFunctions[conditionalPath[currentConditional]])
        }
    }
  },
  readActiveConditionalsTraits(tieredFunctionStorage,conditionalPath,traitLevel) {//Pushes an array so we can track the trait level as well as the function used
    if (conditionalPath) {
        let names = Object.keys(conditionalPath);

        for (let i=0;i<names.length;i++) {
          let currentConditional = names[i];
          if (!tieredFunctionStorage[currentConditional]) {tieredFunctionStorage[currentConditional] = [];}
          tieredFunctionStorage[currentConditional].push([customItemFunctions[conditionalPath[currentConditional]],traitLevel])
        }
    }
  },
  callStoredFunctions(tieredFunctionStorage,tierName,index,insertedStatistic) {
    let targetStorage = tieredFunctionStorage[tierName];
    if (targetStorage) {
      for (let storedFunction in targetStorage) {
        if (Array.isArray(targetStorage[storedFunction]) && targetStorage[storedFunction][0]) {
          targetStorage[storedFunction][0](index,targetStorage[storedFunction][1]);//traits are pushed as arrays with a level as the inserted stat
        }
        else if (storedFunction) {
          targetStorage[storedFunction](index,insertedStatistic);
        }
      }
    }
  },
  storeActiveConditionals(isUIcalcs) {
    let tieredFunctionStorage = {};
    let customPath,conditionalPath;

      if (isUIcalcs) {
        let toggleCheck
        //rings
        for (let i=1;i<=4;i++) {
          toggleCheck = readSelection(`USEtoggledRing${i}`).checked;
          customPath = globalRecords.accessories[`ring${i}`] || "";
          let conditionalPath = rings[customPath].usesConditional;
          formulasValues.readActiveConditionalsGeneralMAINUI(tieredFunctionStorage,toggleCheck,conditionalPath);
        }
        //Relic
        toggleCheck = readSelection(`USEtoggledRelic`).checked;
        customPath = globalRecords.accessories.relic;
        conditionalPath = relics[customPath].usesConditional;
        formulasValues.readActiveConditionalsGeneralMAINUI(tieredFunctionStorage,toggleCheck,conditionalPath);
        //Amulet
        toggleCheck = readSelection("USEtoggledAmulet").checked;
        customPath = globalRecords.accessories.amulet;
        conditionalPath = amulets[customPath].usesConditional;
        formulasValues.readActiveConditionalsGeneralMAINUI(tieredFunctionStorage,toggleCheck,conditionalPath);
        //Mutators
        toggleCheck = readSelection(`USEtoggledpMutator`).checked;
        customPath = globalRecords.weapons.primaryMutator;
        conditionalPath = rangedMutators[customPath].usesConditional;
        formulasValues.readActiveConditionalsGeneralMAINUI(tieredFunctionStorage,toggleCheck,conditionalPath);
        toggleCheck = readSelection(`USEtoggledmMutator`).checked;
        customPath = globalRecords.weapons.meleeMutator;
        conditionalPath = meleeMutators[customPath].usesConditional;
        formulasValues.readActiveConditionalsGeneralMAINUI(tieredFunctionStorage,toggleCheck,conditionalPath);
        toggleCheck = readSelection(`USEtoggledsMutator`).checked;
        customPath = globalRecords.weapons.secondaryMutator;
        conditionalPath = rangedMutators[customPath].usesConditional;
        formulasValues.readActiveConditionalsGeneralMAINUI(tieredFunctionStorage,toggleCheck,conditionalPath);

        //Passives
        customPath = globalRecords.archs.one.class;
        for (let i=1;i<=4;i++) {
          toggleCheck = readSelection(`USEtoggledPassive${i}`).checked;
          conditionalPath = classInfo[customPath].passives[`passive${i}`].usesConditional;
          formulasValues.readActiveConditionalsGeneralMAINUI(tieredFunctionStorage,toggleCheck,conditionalPath);
        }
        customPath = globalRecords.archs.two.class;
        for (let i=1;i<=4;i++) {
          toggleCheck = readSelection(`USEtoggledPassive${i+4}`).checked;
          conditionalPath = classInfo[customPath].passives[`passive${i}`].usesConditional;
          formulasValues.readActiveConditionalsGeneralMAINUI(tieredFunctionStorage,toggleCheck,conditionalPath);
        }

        //MODS
        //PRIMARY
        toggleCheck = readSelection(`USEtoggledpMod`).checked;
        let primaryWeapon = globalRecords.weapons.primary;
        let primaryWeaponMod = globalRecords.weapons.primaryMod;
        let checkWeaponPath = weapons.primary[primaryWeapon];
        conditionalPath = checkWeaponPath.builtIN ? mods.builtInPrimaryMods[checkWeaponPath.builtIN].usesConditional : mods.primaryMods[primaryWeaponMod].usesConditional;
        formulasValues.readActiveConditionalsGeneralMAINUI(tieredFunctionStorage,toggleCheck,conditionalPath);
        //MELEE
        toggleCheck = readSelection(`USEtoggledmMod`).checked;
        let meleeWeapon = globalRecords.weapons.melee;
        checkWeaponPath = weapons.melee[meleeWeapon];
        conditionalPath = mods.builtInMeleeMods[checkWeaponPath.builtIN].usesConditional;
        formulasValues.readActiveConditionalsGeneralMAINUI(tieredFunctionStorage,toggleCheck,conditionalPath);
        //SECONDARY
        toggleCheck = readSelection(`USEtoggledsMod`).checked;
        let secondaryWeapon = globalRecords.weapons.secondary;
        let secondaryWeaponMod = globalRecords.weapons.secondaryMod;
        checkWeaponPath = weapons.secondary[secondaryWeapon];
        conditionalPath = checkWeaponPath.builtIN ? mods.builtInSecondaryMods[checkWeaponPath.builtIN].usesConditional : mods.secondaryMods[secondaryWeaponMod].usesConditional;
        formulasValues.readActiveConditionalsGeneralMAINUI(tieredFunctionStorage,toggleCheck,conditionalPath);

        const recordReference = globalRecords.greatTraitRecords; //Yoink all active trait values
        for (const trait of recordReference) {
          const traitLevel = trait.level;
          const traitPath = traits[trait.name];
          const conditionalPath = traitPath.usesConditional;
          formulasValues.readActiveConditionalsTraits(tieredFunctionStorage,conditionalPath,traitLevel);
        }
      }
      else {
        //rings
        for (let i=1;i<=4;i++) {
          customPath = globalRecords.accessories[`ring${i}`] || "";
          let conditionalPath = rings[customPath].usesConditional;
          formulasValues.readActiveConditionalsGeneralCYCLES(tieredFunctionStorage,conditionalPath);
        }
        //Relic
        customPath = globalRecords.accessories.relic;
        conditionalPath = relics[customPath].usesConditional;
        formulasValues.readActiveConditionalsGeneralCYCLES(tieredFunctionStorage,conditionalPath);
        //Amulet
        customPath = globalRecords.accessories.amulet;
        conditionalPath = amulets[customPath].usesConditional;
        formulasValues.readActiveConditionalsGeneralCYCLES(tieredFunctionStorage,conditionalPath);
        //Mutators
        customPath = globalRecords.weapons.primaryMutator;
        conditionalPath = rangedMutators[customPath].usesConditional;
        formulasValues.readActiveConditionalsGeneralCYCLES(tieredFunctionStorage,conditionalPath);
        customPath = globalRecords.weapons.meleeMutator;
        conditionalPath = meleeMutators[customPath].usesConditional;
        formulasValues.readActiveConditionalsGeneralCYCLES(tieredFunctionStorage,conditionalPath);
        customPath = globalRecords.weapons.secondaryMutator;
        conditionalPath = rangedMutators[customPath].usesConditional;
        formulasValues.readActiveConditionalsGeneralCYCLES(tieredFunctionStorage,conditionalPath);


        //Passives
        customPath = globalRecords.archs.one.class;
        for (let i=1;i<=4;i++) {
          toggleCheck = globalRecords.searchSettingsToggles[`settingsUsePassive${i}`];
          conditionalPath = classInfo[customPath].passives[`passive${i}`].usesConditional;
          formulasValues.readActiveConditionalsGeneralMAINUI(tieredFunctionStorage,toggleCheck,conditionalPath);
        }
        customPath = globalRecords.archs.two.class;
        for (let i=1;i<=4;i++) {
          toggleCheck = globalRecords.searchSettingsToggles[`settingsUsePassive${i+4}`];
          conditionalPath = classInfo[customPath].passives[`passive${i}`].usesConditional;
          formulasValues.readActiveConditionalsGeneralCYCLES(tieredFunctionStorage,toggleCheck,conditionalPath);
        }


        //MODS
        //PRIMARY
        let primaryWeapon = globalRecords.weapons.primary;
        let primaryWeaponMod = globalRecords.weapons.primaryMod;
        let checkWeaponPath = weapons.primary[primaryWeapon];
        conditionalPath = checkWeaponPath.builtIN ? mods.builtInPrimaryMods[checkWeaponPath.builtIN].usesConditional : mods.primaryMods[primaryWeaponMod].usesConditional;
        formulasValues.readActiveConditionalsGeneralCYCLES(tieredFunctionStorage,conditionalPath);
        //MELEE
        let meleeWeapon = globalRecords.weapons.melee;
        checkWeaponPath = weapons.melee[meleeWeapon];
        conditionalPath = mods.builtInMeleeMods[checkWeaponPath.builtIN].usesConditional;
        formulasValues.readActiveConditionalsGeneralCYCLES(tieredFunctionStorage,conditionalPath);
        //SECONDARY
        let secondaryWeapon = globalRecords.weapons.secondary;
        let secondaryWeaponMod = globalRecords.weapons.secondaryMod;
        checkWeaponPath = weapons.secondary[secondaryWeapon];
        conditionalPath = checkWeaponPath.builtIN ? mods.builtInSecondaryMods[checkWeaponPath.builtIN].usesConditional : mods.secondaryMods[secondaryWeaponMod].usesConditional;
        formulasValues.readActiveConditionalsGeneralCYCLES(tieredFunctionStorage,conditionalPath);

        const recordReference = globalRecords.greatTraitRecords; //Yoink all active trait values
        for (const trait of recordReference) {
          const traitLevel = trait.level;
          const traitPath = traits[trait.name];
          const conditionalPath = traitPath.usesConditional;
          formulasValues.readActiveConditionalsTraits(tieredFunctionStorage,conditionalPath,traitLevel);
        }
      }

      return tieredFunctionStorage;
      // //Class
      // let path1 = classInfo[globalRecords.archs.one.class];
      // let path2 = classInfo[globalRecords.archs.two.class];
      // let ability1 = globalRecords.archs.one.ability;
      // let ability2 = globalRecords.archs.two.ability;
      // //Prime Perk
      // toggleCheck = isUIcalcs ? readSelection(`USEtoggledPrimeP`).checked : false;
      // if (!toggleCheck) {if (path1[`custom${tier}`]) {customItemFunctions[path1[`custom${tier}`]](index,insertedStatistic);}}
      // //Archetype1
      // toggleCheck = isUIcalcs ? readSelection(`USEtoggledAbility1`).checked : false;
      // if (!toggleCheck) {if (path1.abilities[ability1][`custom${tier}`]) {customItemFunctions[path1.abilities[ability1[`custom${tier}`]]](index,insertedStatistic);}}
      // for (let i=1;i<=4;i++) {
      //   toggleCheck = isUIcalcs ? readSelection(`USEtoggledPassive${i}`).checked : false;
      //   if (!toggleCheck) {if (path1.passives[`passive${i}`][`custom${tier}`]) {customItemFunctions[path1.passives[`passive${i}`][`custom${tier}`]](index,insertedStatistic);}}
      // }
      // //Archetype2
      // toggleCheck = isUIcalcs ? readSelection(`USEtoggledAbility2`).checked : false;
      // if (!toggleCheck) {if (path2.abilities[ability2][`custom${tier}`]) {customItemFunctions[path2.abilities[ability2][`custom${tier}`]](index,insertedStatistic);}}
      // for (let i=1;i<=4;i++) {
      //   toggleCheck = isUIcalcs ? readSelection(`USEtoggledPassive${i+4}`).checked : false;
      //   if (!toggleCheck) {if (path2.passives[`passive${i}`][`custom${tier}`]) {customItemFunctions[path2.passives[`passive${i}`][`custom${tier}`]](index,insertedStatistic);}}
      // }
  },
}
/* ---------------------------------------------------------------------------------------- */
/* ---------------------- Custom, item-specific functions --------------------------------- */
/* ---------------------------------------------------------------------------------------- */
let customItemFunctions = {
  //Function names are specified in data.js under a given entry's "custom" key.
  //Remember to add stats to tags array in data.js whenever making one of these
  // valueTables[index].anyStatHere += 1;
  // "amulets": {
    abrasiveWhetstone(index) {//50
      if (index.outBLEED>0) {
        index.AllCritChance += 0.15;
        index.AllCritDamage += 0.15;
      }
    },
    birthrightOfTheLost(index) {//0 user input
      index.outEXPOSED += globalRecords.meleeFactors.isPerfectDodge ? 1 : 0;
    },
    brewMasters(index) {//0 user selection
      if (!index.thisIsAQuery) {
        for (let i=1;i<=7;i++) {
          let customPath = globalRecords.consumables[`concoction${i}`];
          if (customPath) {
            index.FlatDR += 0.02;
          }
        }
      }
      else {
        //If we are in the middle of cycles loops, and maybe the filtered concoctions are less than the limit, always apply the limit amount of DR so we don't skip a possible build
        index.FlatDR += 0.02 * index.ConcLimit;
      }
    },
    chainsOfAmplification(index) {//50
      index.AllDamage += index.outgoingStatus ? 0.20 : 0;
    },
    daredevil(index) {//50
      let armorMissing = 4;
      let customPath = globalRecords.armor;
      if (index.thisIsAQuery) {
        //For now, we assume if Daredevil ever shows up in the cycles, the player should always be naked
        customPath.helmet = "";
        customPath.chest = "";
        customPath.leg = "";
        customPath.hand = "";
      }
      if (customPath.helmet) {armorMissing -= 1;}
      if (customPath.chest) {armorMissing -= 1;}
      if (customPath.leg) {armorMissing -= 1;}
      if (customPath.hand) {armorMissing -= 1;}
      index.AllDamage += 0.075 * armorMissing;
      index.MovementSpeed += 0.03 * armorMissing;
    },
    deathSoakedIdol(index) {//50
      if (index.outgoingStatus) {
        let maxStacks = 5;
        let count = globalRecords.meleeFactors.enemyCount;
        count += index.incomingStatus ? 1 : 0;
        index.AllDamage += Math.min(maxStacks,count) * 0.06;
      }
    },
    differenceEngine(index) {//50
      if (index.Shield > 0) {
        index.Lifesteal += 0.045;
        index.AllDamage += 0.20;
      }
    },
    effigyPendant(index) {//0 user input
      if (globalRecords.meleeFactors.greyHealthActive) {
        index.FlatDR += 0.1;
        index.AllDamage += 0.15;
        index.GreyHPHitThreshold += 1;
      }
    },
    energyDiverter(index) {//50
      if (index.Shield > 0) {
        index.AllCritChance += 0.10;
        index.AllDamage += 0.15;
      }
    },
    fragrantThorn(index) {//0. Not user input, but needs to happen first.

      if (index.outgoingStatus) {
        let activeStatus = conditionalHelpers.getActiveUniqueStatuses(index);
        index.outEXPOSED += activeStatus>4 ? 1 : 0;
      }
    },
    giftOfTheUnbound(index) {//0, based on item selections not stats.
      let activeBurdens = 0;
      let movementModifier = 0.05
      let customPath = globalRecords.accessories;
      for (let i=1;i<=4;i++) {
        let ringPath = customPath[`ring${i}`]
        if (ringPath.includes("Burden") === true) {
          activeBurdens += 1;
          //Negate all negative effects of any equipped burdens.
          if (ringPath.includes("Audacious")) {
            index.HealingEFF += -rings[`Burden of the Audacious`].stats.HealingEFF;
          }
          else if (ringPath.includes("Departed")) {
            index[`RelicCharges%`] += -rings[`Burden of the Departed`].stats[`RelicCharges%`];
          }
          else if (ringPath.includes("Destroyer")) {
            index[`Range%`] += -rings[`Burden of the Destroyer`].stats[`Range%`];
          }
          else if (ringPath.includes("Divine")) {
            index.AllDamage += -rings[`Burden of the Divine`].stats.AllDamage;
          }
          else if (ringPath.includes("Follower")) {
            index.FireRate += -rings[`Burden of the Follower`].stats.FireRate;
          }
          else if (ringPath.includes("Gambler")) {
            index.WeakspotDisable += -rings[`Burden of the Gambler`].stats.WeakspotDisable;
          }
          else if (ringPath.includes("Mariner")) {
            index.CDR += -rings[`Burden of the Mariner`].stats.CDR;
          }
          else if (ringPath.includes("Mason")) {
            index.WeightThreshold += -rings[`Burden of the Mason`].stats.WeightThreshold;
          }
          else if (ringPath.includes("Mesmer")) {
            index.GlobalHealthModifier *= 1 + (1/3);//Counteract the 25% reduction
          }
          else if (ringPath.includes("Rebel")) {
            index.RelicSpeed += -rings[`Burden of the Rebel`].stats.RelicSpeed;
          }
          else if (ringPath.includes("Sciolist")) {
            index.Reserves += -rings[`Burden of the Sciolist`].stats.Reserves;
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
        index.MovementSpeed += movementModifier * activeBurdens;
      }
      //Remember to add checks for the negative effects later, on burden rings, to negate them.
    },
    insulationDriver(index) {//50
      if (index.Bulwark > 0) {
        index.AllDamage += 0.15;
        index.HASTE += 1;
      }
    },
    kineticShieldExchanger(index) {//50
      if (index.Shield > 0) {
        index.ModDamage += 0.25;
        index.ModPowerGen += 0.20;
      }
    },
    neckboneNecklace(index) {//50
      index.AllDamage += index.incomingStatus ? 0.25 : 0;
    },
    nightweaversGrudge(index) {//50
      if (index.incomingStatus || index.outgoingStatus) {
        index.AllCritChance += 0.15;
        index.HASTE += 1;
      }
    },
    oneEyedJokerIdol(index) {//0 user input
      index.AllCritChance += globalRecords.meleeFactors.isEvade ? 0.25 : 0;
    },
    oneTrueKingSigil(index) {//base, modifies based on equip, not existing stats.
      let faerinActive = false;
      let faelinActive = false;
      let imposterRings = 0;
      let customPath = globalRecords.accessories;
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
          index.ModPowerGenCrit += faeRpath1 * (modifier * imposterRings);
          index.ModPowerGenWeakspot += faeRpath2 * (modifier * imposterRings);
        }
        if (faelinActive === true) {
          let faeLpath = rings[`Faelin's Sigil`].stats.ModPowerGenCrit;
          index.ModPowerGenMelee += faeLpath * (modifier * imposterRings);
        }
      }
    },
    profaneSoulStone(index) {//0 user input
      let customPath = globalRecords.minionCount;

      let minionCount = +customPath;
      let modifier = -0.10;
      index.FlatDR += modifier * minionCount;
    },
    ravagersMark(index) {//50
      index.AllDamage += index.outBLEED ? 0.3 : 0;
    },
    soulAnchor(index) {//0 user input
      let customPath = globalRecords.minionCount;
      index.AllDamage += customPath ? 0.2 : 0;
    },
    spiritWisp(index) {//N/A
      //Add mod stuff later
    },
    weightlessWeight(index) {//PostWeightClass
      let weight = index.Encumbrance * (1+index["Encumbrance%"]);
      if (weight < 0) {weight = 0;}
      let multi = Math.floor(weight/5);
      index.StaminaCost += -0.0075 * multi;
      index.MovementSpeed += 0.0075 * multi;
    },
    whisperingMarble(index) {//50
      let bulwarkStacks = Math.min(index.Bulwark,index.BulwarkCap);
      index.AllDamage += 0.02 * bulwarkStacks;
    },
  // },
  // "rings": {//I... I think I'm done...?
    ataeriiBooster(index) {//0 user input
      let referenceTable = globalRecords.archs;
      if (referenceTable.one.class === "Engineer" || referenceTable.two.class === "Engineer" ) {
        index.AllDamage += 0.10;
        index.AllCritChance += 0.10;
      }
    },
    ahanaeCrystal(index) {//50
      if (index.outgoingStatus) {
        let activeStatus = conditionalHelpers.getActiveUniqueStatuses(index);
        index.AllDamage += (0.05 * activeStatus);
      }
    },
    akariWarBand(index) {//0 user input
      let perfectDodge = globalRecords.meleeFactors.isPerfectDodge;
      if (perfectDodge === true) {
        index.AllCritChance += 0.10;
        index.AllCritDamage += 0.10;
      }
    },
    alchemyStone(index) {//base
      index.Lifesteal += index.incomingStatus ? 0.06 : 0;
    },
    anastasijasInspiration(index) {//PostHealing
      if (index["HP/S+"] || index["HP/S%"] || (index.RelicHPbase && index.RelicHPtime > 1)) {
        index.HASTE += 1;
      }
    },
    blackSpinel(index) {//base
      index["HP/S%"] += index.outgoingStatus ? 0.02 : 0;
    },
    bloodTingedRing(index) {//base
      if (index.outBLEED || index.inBLEED) {
        index["HP/S+"] += 2;
      }
    },
    bridgeWardensCrest(index) {//0 user input
      if (globalRecords.meleeFactors.isPerfectDodge) {
        index.MeleeDamage += 0.20;
        let weightClass = calcs.getWeight(index)[1];
        index.FlatDR += globalRecords.meleeFactors.isEvade && weightClass === "Flop" ? 0.1 : 0;
      }
    },
    burdenOfTheMason(index,totalDR) {//postDR
      index.MeleeDamage += Math.min(0.80,totalDR) * 0.35
    },
    burdenOfTheMesmer1(index) {//base
      index.GlobalHealthModifier *= 0.80;//health modification
    },
    burdenOfTheMesmer2(index,totalDR) {//postDR
      let floorIncrement = 0.05
      let dmgScaling = 0.01
      index.AllDamage += dmgScaling * (Math.floor(Math.min(0.80,totalDR)/floorIncrement) * floorIncrement)/floorIncrement;//postDR damage calcs
    },
    driedClayRing(index) {//50
      let bulwarkStacks = Math.min(index.Bulwark,index.BulwarkCap);
      
      let bulwarkDR = -.005*(bulwarkStacks**2) + .075*bulwarkStacks;
      index.AllDamage += 0.5 * bulwarkDR;
    },
    embraceOfShahala(index) {//base
      let activeStatus = 0;

      if (index.incomingStatus) {
        //Slow, bleed, burn, overloaded, corroded
        //Shahala probably counts more statuses than Ahanae does, in terms of player debuffs.
        //Probably needs more work later, to figure out what.
        activeStatus += index.inSLOW ? 1 : 0;
        activeStatus += index.inBLEED ? 1 : 0;
        activeStatus += index.inBURN ? 1 : 0;
        activeStatus += index.inOVERLOADED ? 1 : 0;
        activeStatus += index.inCORRODED ? 1 : 0;
        index.FlatDR += (0.075 * Math.min(2,activeStatus));
      }
    },
    featheryBinding(index) {//50 after haste at 40
      if (index.HASTE) {
        index.ProjectileSpeed += 0.15;
        index.WeaponChargeTime += 0.10;
      }
    },
    floodlitDiamond(index) {//50
      index.AllWeakspot += index.outEXPOSED ? 0.12 : 0;
    },
    flyweightsSting(index) {//50
      let weight = index.Encumbrance * (1+index["Encumbrance%"]);
      if (weight < 0) {weight = 0;}
      if (weight < 50) {
        index.MeleeDamage += (1 - (weight/49)) * 0.25;
      }
    },
    frivolousBand(index) {//0 user input
      if (globalRecords.meleeFactors.isPerfectDodge && globalRecords.meleeFactors.isEvade) {
        index.FireRate += 0.10;
        index.AttackSpeed += 0.10;
      }
    },
    gameMasters1(index) {//0 user input
      let teamCount = globalRecords.teamCount;
      if (teamCount>1) {
        index.DMGKept *= 1 + ((1/teamCount)-1); //dmgshared adjustments, healing is done in 2
      }
    },
    gameMasters2(index) {//PreHealing
      let teamCount = globalRecords.teamCount;

      index.GlobalHealingEff = index.GlobalHealingEff * 0.5;//Cut healing in half
      if (teamCount>1) {
        index.GlobalHealingEff *= 1/teamCount;//Further divide the healing by team members
      }
    },
    generatingBand(index) {//PreHealing
      if (index.Shield > 0) {
        index["HP/S%"] += 0.03;
      }
    },
    gulSignet(index,dodgeClass) {//PostWeightClass
      let currentClass = 0;
      switch (dodgeClass) {
        case "Flop": currentClass = 3;break;
        case "Heavy": currentClass = 2;break;
        case "Medium": currentClass = 1;break;
      }
      index.FlatDR -= 0.025 * currentClass
    },
    haymakersRing(index) {//50
      let weight = index.Encumbrance * (1+index["Encumbrance%"]);
      let modifier = 0.002;
      index.MeleeDamage += weight * modifier;
    },
    kolketEyelet(index) {//PostWeightClass
      let bulwarkStacks = Math.min(index.Bulwark,index.BulwarkCap);

      index["HP/S+"] += 0.3 * bulwarkStacks;
    },
    lodestoneRing(index) {//0 user input
      let customPath = globalRecords.armor.helmet;

      let helmetPath = customPath;
      if (helmetPath.includes("Lodestone Crown")) {
        index.AllDamage += 0.05;
      }
    },
    matriarchsRing(index) {//0 user input
      let perfectDodge = globalRecords.meleeFactors.isPerfectDodge;
      index.ChargeCost += perfectDodge ? 1 : 0;
    },
    mechanicsCog(index) {//0 user input
      let referenceTable = globalRecords.archs;
      if (referenceTable.one.class === "Engineer" || referenceTable.two.class === "Engineer" ) {
        index.Bulwark += 1;
        index.MovementSpeed += 0.15;
      }
    },
    painlessObsidian(index) {//0 user input
      index.HASTE += globalRecords.meleeFactors.greyHealthActive ? 1 : 0;
      index.Bulwark += globalRecords.meleeFactors.greyHealthActive ? 1 : 0;
    },
    panWarBand(index) {// 0 team count user input
      let teamCount = globalRecords.teamCount;

      index.MovementSpeed += 0.03 * teamCount;
      index.ReloadSpeed += 0.03 * teamCount;
      index.FireRate += 0.02 * teamCount;
    },
    ravagersBargain(index) {//base
      let isBleeding = index.inBLEED;
      index.AllDamage += isBleeding ? 0.05 : 0;
      index.AllCritChance += isBleeding ? 0.05 : 0;
    },
    restrictionCord(index) {//base
      index.HealthCap *= 0.5;
    },
    ringOfSpirits(index) {//0 user input
      let totalActive = 0;

      if (!index.thisIsAQuery) {
        for (let i=1;i<=7;i++) {
          let customPath = globalRecords.consumables[`concoction${i}`];
          if (customPath) {
            totalActive += 1;
          }
          if (i<=4) {
            customPath = globalRecords.consumables[`quickUse${i}`];
            if (customPath) {
              totalActive += 1;
            }
          }
        }
        index.ModPowerGen += 0.03 * Math.min(5,totalActive);//enforce the cap of 5.
      }
      else {
        //If we are in the middle of cycles loops, and maybe the filtered concoctions are less than the limit, always apply the limit amount of Mod Gen so we don't skip a possible build
        index.ModPowerGen += 0.03 * 5;
      }
    },
    ringOfTheDamned(index) {//0 user input
      index.AllDamage += globalRecords.meleeFactors.greyHealthActive ? 0.004*50 : 0;
      index.AllCritChance += globalRecords.meleeFactors.greyHealthActive ? 0.05 : 0;
    },
    singedRing(index) {//50
      index.AllDamage += index.outBURN ? 0.12 : 0;
    },
    soulGuard(index) {//0 user input
      index.Bulwark += +globalRecords.minionCount;
    },
    soulShard(index) {//0 user input
      let minionCount = +globalRecords.minionCount;
      if (minionCount > 3) {minionCount = 3;}
      let modifier = 0.05;
      index.AllDamage += modifier * minionCount;
    },
    tokenOfFavor(index) {//50
      index.AllCritChance += index.outEXPOSED ? 0.10 : 0;
    },
    thalosEyelet(index) {//PostWeightClass
      let bulwarkStacks = Math.min(index.Bulwark,index.BulwarkCap);
      index["Stamina/S+"] += 2 * bulwarkStacks;
    },
    whiteGlassBead(index) {//0 user input
      index.Shield += globalRecords.meleeFactors.isPerfectDodge ? 0.15 : 0;
    },
  // },
  // "relic": {//DONE relics are currently tierless
    resonatingHeart(index,[relicHPscaled,totalHealth]) {
      //Healing/Relic EFF already factored before this function even starts
      let inputValue = relicHPscaled * 2 * (1+index.HealingEFF);
      //If input is blank or 0, all values will BE 0, but that's ok because in our check to pull relic healing
      //we will first check if the input is blank/0 before pulling either basic or complex stats.
      let relicPercHPpSec = inputValue/20;
      let relicHPpSec = (relicPercHPpSec/100) * totalHealth;
      let avgPercHPpSec = (relicHPscaled + inputValue)/25;
      let avgHPpSec = (avgPercHPpSec/100) * totalHealth;
    
      if (!index.thisIsAQuery) {
        readSelection("relicComplexEffect").innerHTML += `
        <div class="resoBonusHeader">Avg over 25s</div>
        <div class="complexRowContainer"><span class="basicsDRStat">As HP/s</span><span class="rowTraceLine"></span><span class="basicsDRValue">${avgHPpSec.toFixed(2)}</span></div>
        <div class="complexRowContainer"><span class="basicsDRStat">As %HP/s</span><span class="rowTraceLine"></span><span class="basicsDRValue">${avgPercHPpSec.toFixed(2)}%</span></div>
        `
      }
      globalRecords.relicComplexArray = [avgPercHPpSec,avgHPpSec];
    },
  // },
  //Ranged Mutators
    failsafe(index) {
      let modDamageBonus = 0.25;
      conditionalHelpers.applySpecifiedMutatorBaseBonus(index,"ModDamage",modDamageBonus,"Failsafe");
    },
    harmonizer(index) {
      let modDamageBonus = 0.20;
      conditionalHelpers.applySpecifiedMutatorBaseBonus(index,"ModDamage",modDamageBonus,"Harmonizer");
    },
    maelstrom(index) {
      let elementalDamageBonus = 0.10;

      if (index.outgoingStatus) {
        let activeStatus = conditionalHelpers.getActiveUniqueStatuses(index);
        let outgoingDmgBonus = elementalDamageBonus * activeStatus;
        conditionalHelpers.applySpecifiedMutatorBaseBonus(index,"ElementalDamage",outgoingDmgBonus,"Maelstrom");
      }
    },
    spellweaver(index) {
      let modDamageBonus = 0.15;
      conditionalHelpers.applySpecifiedMutatorBaseBonus(index,"ModDamage",modDamageBonus,"Spellweaver");
    },
    spiritFeeder(index) {
      let modDamageBonus = 0.25;
      conditionalHelpers.applySpecifiedMutatorBaseBonus(index,"ModDamage",modDamageBonus,"Spirit Feeder");
    },
    spiritHealer(index) {
      let healingPerSecond = 0.02/10;
      index["HP/S%"] += globalRecords.spiritHealerStacks * healingPerSecond;
    },
  // "mutators": {//DONE
    executor(index) {//base
      if (index.outgoingStatus) {
        let count = globalRecords.meleeFactors.enemyCount;
        count += index.incomingStatus ? 1 : 0
        count = Math.min(4,count);
        index.AttackSpeed += (0.05 * count);
        index.ChargeSpeed += (0.05 * count);
      }
    },
    guts(index) {//0 user input
      if (globalRecords.meleeFactors.greyHealthActive) {
        index.MeleeCritChance += 0.25;
        index.MeleeCritDamage += 0.25;//we don't have any %GHP specifications yet, this assume 50% GHP
      }
    },
    misfortune(index) {//base
      if (index.outgoingStatus) {
        let activeStatus = conditionalHelpers.getActiveUniqueStatuses(index);
        index.MeleeDamage += (0.10 * activeStatus);
      }
    },
    opportunist(index) {//0 user input
      if (globalRecords.meleeFactors.isPerfectDodge) {
        index.MeleeCritChance += 1;
      }
    },
    resentment(index) {//0 user input
      if (globalRecords.meleeFactors.greyHealthActive) {
        index.MeleeDamage += 0.30
      }
    },
    shieldedStrike(index) {//50
      let shieldAmount = Math.min(1,index.Shield);
      let dmgCap = 0.25;
      if (shieldAmount > 0) {index.ChargeDamage += shieldAmount * dmgCap;}
    },
    vampireBlade(index) {//base
      if (index.outBLEED) {
        index.MeleeDamage += 0.30;
        index.MLifesteal += 0.03;
      }
    },
  // },
  // "meleeMods": {//DONE
    dreamwave(index) {//0 user input
      let count = globalRecords.meleeFactors.enemyCount;
      index.AllDamage += 0.02 * count;
      index.MovementSpeed += 0.02 * count;
    },
    beyondTheVeil(index) {//0 user input
      index.MLifesteal += globalRecords.meleeFactors.isEvade ? 0.05 : 0;
    },
    reaver(index) {//base
        index.MeleeDamage += index.outgoingStatus ? 0.10 : 0;
    },
  // },
  // "traits": {
    bloodBond(index,traitLevel) {//0 user input
      let referenceTable = globalRecords.archs;
      if (referenceTable.one.class === "Summoner" || referenceTable.two.class === "Summoner" ) {
        index.DMGKept *= 1 + (-0.01 * traitLevel);
      }
    },
  // }
  // PASSIVES
    intimidatingPresence(index) {
      let baseReduction = 0.10;
      let maxAdditionalReduction = 0.10;
      let reductionPerEnemy = 0.025;
      index.REdamage *= (1 - (baseReduction + Math.min(maxAdditionalReduction,(reductionPerEnemy * globalRecords.meleeFactors.enemyCount))));
    },
}

/* ---------------------------------------------------------------------------------------- */
/* -------------------------------------- PAGE LOADED ------------------------------------- */
/* ---------------------------------------------------------------------------------------- */
//The big cheese, the great clusterfuck, where all the formulas refresh.
function updateFormulas(index,ping) { 
  //If we're not iterating
  index = index ?? `greatTableKnowerOfAll`;
  let isUIcalcs = starterTable.thisIsAQuery ? false : true;
  
  valueTables[index] = {...starterTable}//Reset the table
  let tableReference = valueTables[index];

  if (!starterTable.thisIsAQuery) {
    basicsUpdates.updateMainTeamSettings();//MISC STATS THAT NEED TO BE PULLED FROM DISPLAYS FIRST
    formulasValues.pullTraits(tableReference);
    formulasValues.pullGearStats(isUIcalcs,tableReference,ping);//Weapons/Accessories/class/frags/etc
  }
  else {
    formulasValues.pullGearStatsCycles(tableReference,ping);
  }

  let tieredFunctionStorage = formulasValues.storeActiveConditionals(isUIcalcs);
  
  formulasValues.callStoredFunctions(tieredFunctionStorage,"customTier0",tableReference);//Has conditionals based upon user settings, or other things that do not need to wait for other conditionals.
  formulasValues.callStoredFunctions(tieredFunctionStorage,"customBase",tableReference);//Standard conditionals. They might rely on Tier0 calcs, but nothing else.

//SUMMARY STATS
//HEALTH
  healthQuery = calcs.getHealth(tableReference);
  let totalHealth = healthQuery[0];
  let totalHealthNoGlobal = healthQuery[1]; //Stuff like restriction cord. Not used outside of calcs.functions yet
  let totalBaseHealth = healthQuery[2];
  let percentHealthMulti = healthQuery[3];
  let healthCap = healthQuery[4];
  let globalCap = healthQuery[5];
//---------- STAMINA ---------------------------------------------------
  let totalStamina = calcs.getStamina(tableReference)[0]; 
  let weightQuery = calcs.getWeight(tableReference);
  let totalWeight = weightQuery[0];
  let dodgeClass = weightQuery[1];
  let staminaPenalty = weightQuery[2];
  let baseWeight = weightQuery[3];
  let weightBoost = weightQuery[4];
  let weightThreshold = weightQuery[5];
  formulasValues.callStoredFunctions(tieredFunctionStorage,"customPostWeightClass",tableReference,dodgeClass);//Gul Signet, etc
  let staminaValuesQuery = calcs.getStaminaValues(tableReference,staminaPenalty);
  let staminaPerSec = staminaValuesQuery[0];
  let staminaCost = staminaValuesQuery[1];
  let adjustedPenalty = staminaValuesQuery[2];
  let evadeCost = staminaValuesQuery[3];
  let meleeCost = staminaValuesQuery[4];
  let evadePrice = staminaValuesQuery[5];

  
//---------- RESISTANCES ---------------------------------------------------
  let resistanceQuery = calcs.getResistance(tableReference);
  let bleed = resistanceQuery[0];
  let burn = resistanceQuery[1];
  let shock = resistanceQuery[2];
  let corrosive = resistanceQuery[3];
  let blight = resistanceQuery[4];
//---------- HEALING ---------------------------------------------------
  tableReference.AllDamage += tableReference.outEXPOSED ? 0.15 : 0;
  tableReference.AllDamage += tableReference.outCORRODED ? 0.10 : 0;
  tableReference.HealingEFF *= tableReference.inBLEED ? 0.5 : 1;

  formulasValues.callStoredFunctions(tieredFunctionStorage,"customPreHealing",tableReference);//generating band, etc
  let healingQuery = calcs.getHealing(tableReference);
  let globalHealingMod = healingQuery[0]; //Example: game master's pride. Not used outside of calcs.functions yet
  let healingEffectiveness = healingQuery[1];
  let flatHPperSec = healingQuery[2];
  let percHPperSec = healingQuery[3];
  let totalGreyHPperSec = healingQuery[4];
  let greyConversionRate = healingQuery[5];
  let greyHitThreshold = healingQuery[6];

  formulasValues.callStoredFunctions(tieredFunctionStorage,"customPostHealing",tableReference);//anastasijasInspiration, stuff like that
  if (valueTables[index].HASTE > 0) {
    for (let bonuses in hasteTable) {valueTables[index][bonuses] += hasteTable[bonuses];}//If haste exists, add relevant speed stats
  }
//----------RELIC HEALING---------------------------------------------------
  let relicHealingQuery = calcs.getRelicHealing(tieredFunctionStorage,tableReference,totalHealthNoGlobal,globalHealingMod,healingEffectiveness);
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
  let armorQuery = calcs.getArmor(tableReference);
  let baseArmor = armorQuery[0];
  let armorEff = armorQuery[1];
  let totalArmor = armorQuery[2];

  let drQuery = calcs.getDR(tableReference,totalArmor);
  let armorDR = drQuery[0];
  let bulwarkStacks = drQuery[1];
  let bulwarkDR = drQuery[2];
  let otherFlat = drQuery[3];
  let totalFlat = drQuery[4];
  let totalDR = drQuery[5];

  if (ping) {
    if (totalFlat < 0.80) {
      let flatDR = Math.max(0, totalFlat);
      //Work backwards to find the total base armor we're after, if flat DR is less than the DR cap
      let targetArmorDR = Math.max(0, Math.min(0.8, 1-((1-0.8)/((1-flatDR))) ) );//0.8 being the DR cap
      let targetArmor = Math.max(0, (((targetArmorDR*200)/(1-targetArmorDR)) / armorEff) - baseArmor);
      let armorPing = cyclesLoop.pingArmorCombos(targetArmor.toFixed(2),baseWeight,weightThreshold,weightBoost);
      if (armorPing) {return updateFormulas(`cycleTableKnowerOfAll`);}
      // return armorPing;
    }
  }

  formulasValues.callStoredFunctions(tieredFunctionStorage,"customPostDR",tableReference,totalDR);//Burden of the Mason, etc
  //----------ADVANCED DR-------------
  let advancedDrQuery = calcs.getAdvancedDR(tableReference,totalDR,totalHealth,totalHealthNoGlobal);
  let reducedEnemyDamage = advancedDrQuery[0];
  let damageKept = advancedDrQuery[1];
  let totalBonusMitigation = advancedDrQuery[2];
  let effectiveDR = advancedDrQuery[3];
  let baseEHP = advancedDrQuery[4];
  let baseEHPforShieldsAndHealing = advancedDrQuery[5];
//----------SHIELDS----------------------------------------------------------------------------
//----------EHP----------------------------------------------------------------------------
  let shieldQuery = calcs.getShields(tableReference,baseEHPforShieldsAndHealing);
  let percShields = shieldQuery[0];
  let shieldEff = shieldQuery[1];
  let totalPercShields = shieldQuery[2];
  let shieldEHP = shieldQuery[3];
  let totalEHP = calcs.getEHP(shieldEHP,baseEHP)[0];
//---------- ADVANCED HEALING----------------------------------------------------------------------------
  let regHealing = [flatHPperSec,percHPperSec];
  let passedRelicHealing = [relicHPtype,relicHPtime,relicHPscaled,useComplexValues,relicComplexArray];
  let advancedHealingQuery = calcs.getAdvancedHealing(baseEHP,regHealing,passedRelicHealing,totalHealthNoGlobal);
  let advancedRelicFlat = advancedHealingQuery[0];
  let advancedRelicPerc = advancedHealingQuery[1];
  let advancedRelicTotalFlat = advancedHealingQuery[2];
  let advancedRelicTotalPerc = advancedHealingQuery[3];
  let advancedTotalFlatHP = advancedHealingQuery[4];
  let advancedTotalPercHP = advancedHealingQuery[5];
  let EHPpSec = advancedHealingQuery[6] || 0;

  //TIER 50 CALLS PURELY FOR DMG RELATED CONDITIONALS + DMG CONDITIONALS THAT NEED TO BE DONE AFTER REG STATS
  formulasValues.callStoredFunctions(tieredFunctionStorage,"customTier50",tableReference);//50 is just where I chose to start for dmg functions
  //---------- LIFESTEAL --------------Can be last bc no other statistics depend on lifesteal values, yet
  let lifestealQuery = calcs.getLifesteal(tableReference,relicEffectiveness);
  let lifestealEFF = lifestealQuery[0];
  let lifestealALL = lifestealQuery[1];
  let lifestealMelee = lifestealQuery[2];
  let lifestealMeleeCharged = lifestealQuery[3];
  let lifestealRange = lifestealQuery[4];
  let peakLifesteal = lifestealQuery[5];

  let ability1Breakdown,ability2Breakdown;
  let mod1Breakdown,mod2Breakdown;
  let totalDPS;
  let targetStat,isSumOrCustom;

  if (isUIcalcs) {
    readSelection("havocFormBoxHolder").style.display = "none"
    readSelection("damageBreakdownSelectorHolder").innerHTML = "";
  }
  else {
    targetStat = playerDerivedStatistics[filters.types.vars.targetStatistic];
    isSumOrCustom = targetStat === "totalDPS";
  }


  if(tableReference.WeakspotDisable) {
    globalRecords.enableWeakspots = false;
    if (isUIcalcs) {
      readSelection("enableWeakspots").checked = false;
      readSelection("weakspotEnableHolderBox").style.color = "grey";
    }
  }
  else if (isUIcalcs) {
    readSelection("weakspotEnableHolderBox").style.color = "white";
  }


  if (Array.isArray(targetStat) || isUIcalcs || isSumOrCustom) {
    let abilityPath1,abilityPath2,ability1,ability2,modPath1,modPath2;

    if (isUIcalcs || targetStat[3] === "Ability" || isSumOrCustom) {
      abilityPath1 = globalRecords.archs.one.ability;
      abilityPath2 = globalRecords.archs.two.ability;
      ability1 = classInfo[globalRecords.archs.one.class].abilities[abilityPath1].customStats;
      ability2 = classInfo[globalRecords.archs.two.class].abilities[abilityPath2].customStats;
      ability1Breakdown = (ability1 && ability1.customDPS) ? customDamage[ability1.customDPS](1,tableReference) : -1;
      ability2Breakdown = (ability2 && ability2.customDPS) ? customDamage[ability2.customDPS](2,tableReference) : -1;
    }
    if (isUIcalcs || targetStat[3] === "Mod" || isSumOrCustom) {
      let weaponPath = globalRecords.weapons;
      modPath1 = primary[weaponPath.primary].builtIN ? builtInPrimary[primary[weaponPath.primary].builtIN].customStats : rangedMods[weaponPath.primaryMod].customStats;
      modPath2 = secondary[weaponPath.secondary].builtIN ? builtInSecondary[secondary[weaponPath.secondary].builtIN].customStats : rangedMods[weaponPath.secondaryMod].customStats;
      mod1Breakdown = modPath1 ? (modPath1.customDPS ? customDamage[modPath1.customDPS](1,tableReference) : -1) : -1;
      mod2Breakdown = modPath2 ? (modPath2.customDPS ? customDamage[modPath2.customDPS](2,tableReference) : -1) : -1;
    }
    if (isUIcalcs || isSumOrCustom) {
      totalDPS = (ability1Breakdown[3] ?? 0) + (ability2Breakdown[3] ?? 0) + (mod1Breakdown[3] ?? 0) + (mod2Breakdown[3] ?? 0)
    }
    if (isUIcalcs) {
      if (!ability1 && readSelection("ability1BreakdownTab").style.display === "flex") {advancedUpdates.updateSelectedDamageBreakdown("clear")}
      if (!ability2 && readSelection("ability2BreakdownTab").style.display === "flex") {advancedUpdates.updateSelectedDamageBreakdown("clear")}
      if (!modPath1 && readSelection("mod1BreakdownTab").style.display === "flex") {advancedUpdates.updateSelectedDamageBreakdown("clear")}
      if (!modPath2 && readSelection("mod2BreakdownTab").style.display === "flex") {advancedUpdates.updateSelectedDamageBreakdown("clear")}
    }
  }


  

  //MISC STATS
  let movementSpeed = tableReference.MovementSpeed;

  let returnStats = {
    totalHealth,totalHealthNoGlobal,totalBaseHealth,percentHealthMulti,healthCap,globalCap,
    totalStamina,
    totalWeight,dodgeClass,staminaPenalty,baseWeight,weightBoost,weightThreshold,
    staminaPerSec,staminaCost,adjustedPenalty,evadeCost,meleeCost,evadePrice,
    bleed,burn,shock,corrosive,blight,
    globalHealingMod,relicEffectiveness,healingEffectiveness,relicUseTime,flatHPperSec,percHPperSec,totalGreyHPperSec,greyConversionRate,greyHitThreshold,
    lifestealEFF,lifestealALL,lifestealMelee,lifestealMeleeCharged,lifestealRange,peakLifesteal,
    relicHPbase,relicHPtype,relicHPtime,relicHPscaled,relicPercPerSecond,relicFlatPerSecond,
    baseArmor,armorEff,totalArmor,
    armorDR,bulwarkStacks,bulwarkDR,otherFlat,totalFlat,totalDR,
    reducedEnemyDamage,damageKept,totalBonusMitigation,effectiveDR,baseEHP,
    percShields,shieldEff,totalPercShields,shieldEHP,totalEHP,
    advancedRelicFlat,advancedRelicPerc,advancedRelicTotalFlat,advancedRelicTotalPerc,advancedTotalFlatHP,advancedTotalPercHP,EHPpSec,
    ability1Breakdown,ability2Breakdown,
    mod1Breakdown,mod2Breakdown,
    totalDPS,
    movementSpeed
  }
  //----------RETURN VALUES-----------------------
  if (starterTable.thisIsAQuery) {
    return returnStats;
  }
  else {
    // addTooltipListeners();
    manipulateConsumable.updateConsumableCollection("concoction");
    basicsUpdates.updateMainFromFormulas(returnStats);
    // basicsUpdates.updateFocus();
    manipulateURL.updateURLparameters();
    customDamage.MeleeDamage(tableReference);
    tooltips.loadTooltips();
    if (!stopQueryFractures) {window.updateConsole(index,dodgeClass);}
    // customDamage.MeleeDamage(null,tableReference);
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

    globalRecords.useREdamage = readSelection("includeREdamage").checked;
    globalRecords.useDMGKept = readSelection("includeDMGKept").checked;
    globalRecords.useRelicHealing = readSelection(`includeRelicHealing`).checked;
    globalRecords.useShields = readSelection(`includeShields`).checked;

    globalRecords.enableWeakspots = readSelection(`enableWeakspots`).checked;
    globalRecords.enableCrits = readSelection(`enableCrits`).checked;


    globalRecords.meleeFactors.enemyCount = readSelection("enemyCount").value;
    readSelection("enemyCountMAIN").innerHTML = readSelection("enemyCount").value;
    globalRecords.meleeFactors.isEvade = readSelection("isEvade").checked;
    globalRecords.meleeFactors.isPerfectDodge = readSelection("perfectDodge").checked;

    globalRecords.meleeFactors.greyHealthActive = readSelection("greyActive").checked;


  },
  loadoutSettingsVisibilityToggle(loadoutID) {
    readSelection("loadoutOptionsBackgroundShutter").style.display = "block";
    readSelection("loadoutOptionsBox").style.display = "flex";

    let storageExplainerText = "Loadouts are stored locally on your machine. They will not persist between different devices, or cache clears. Yet.<br>Either export the build or save the URL to store builds otherwise."

    let loadout = localStorage.getItem(`userLoadout${loadoutID}`);
    loadout = loadout ? JSON.parse(loadout) : null;

    if (!loadout || !loadout.loadoutURL) {
      readSelection("storedLoadoutNotifBox").innerHTML = "No stored loadout detected for this slot";

      readSelection("loadoutNameInput").value = `Loadout${loadoutID}`;

      readSelection("loadoutControlsBox").innerHTML = `
        <button type="button" class="loadoutSettingsButton" onclick="basicsUpdates.hideLoadoutSettingsBox()">Close</button>
        <button type="button" class="loadoutSettingsButton" onclick="basicsUpdates.saveLoadoutToStorage(${loadoutID})">SAVE TO this Loadout</button>
        <br>
        <button type="button" class="loadoutSettingsButton" onclick="basicsUpdates.deleteLoadoutSlot(${loadoutID})" style="color: #e06666;">Clear Slot (Debug)</button>
        <div class="loadoutStorageExplainer">${storageExplainerText}</div>
      `
    }
    else {
      readSelection("storedLoadoutNotifBox").innerHTML = "Stored loadout detected";

      readSelection("loadoutNameInput").value = loadout.name;

      readSelection("loadoutControlsBox").innerHTML = `
      <button type="button" class="loadoutSettingsButton" onclick="basicsUpdates.hideLoadoutSettingsBox()">Close</button>
      <button type="button" class="loadoutSettingsButton" onclick="basicsUpdates.saveLoadoutToStorage(${loadoutID})">OVERWRITE this Loadout</button>
      <a href="${loadout.loadoutURL}" class="loadoutSettingsButton" onclick="basicsUpdates.loadLoadoutFromStorage(${loadoutID})">LOAD FROM this Loadout</a>
      <div class="loadoutStorageExplainer">Loading will refresh the page with the specified loadout selected</div>
      <br>
      <button type="button" class="loadoutSettingsButton" onclick="basicsUpdates.deleteLoadoutSlot(${loadoutID})" style="color: #e06666;">Delete Stored Loadout</button>
      <div class="loadoutStorageExplainer">${storageExplainerText}</div>
    `
    }


  },
  hideLoadoutSettingsBox() {
    readSelection("loadoutOptionsBackgroundShutter").style.display = "none";
    readSelection("loadoutOptionsBox").style.display = "none";
  },
  saveLoadoutToStorage(loadoutID) {
    const loadoutToSave = {
      "name": `${readSelection("loadoutNameInput").value || `Loadout${loadoutID}`}`,
      "loadoutURL": window.location.href,
    }

    localStorage.setItem(`userLoadout${loadoutID}`, JSON.stringify(loadoutToSave));

    basicsUpdates.hideLoadoutSettingsBox();
  },
  loadLoadoutFromStorage(loadoutID) {
    let loadout = localStorage.getItem(`userLoadout${loadoutID}`);
    loadout = loadout ? JSON.parse(loadout) : null;
    // window.location.href = 
    const newUrl = loadout.loadoutURL;
    window.location.href = newUrl;
    // history.replaceState({}, '', newUrl);

    // manipulateURL.importURLparameters();
    // basicsUpdates.hideLoadoutSettingsBox();
  },
  deleteLoadoutSlot(loadoutID) {
    localStorage.removeItem(`userLoadout${loadoutID}`);
    basicsUpdates.hideLoadoutSettingsBox();
  },
  updateMainFromFormulas(returnObject) {

      let dodgeColor = "";
      switch (returnObject.dodgeClass) {
        case "Flop": dodgeColor = '#e06666'; break;
        case "Heavy": dodgeColor = 'orange'; break;
        case "Medium": dodgeColor = '#90ee90'; break;
        case "Light": dodgeColor = '#93CCEA'; break;
      }

      formulasValues.updateDisplay("summaryHealth",returnObject.totalHealth,1);
      tooltipMath.updateTooltipDisplay(
        "summaryHealthRow",
        "TotalHealth = Health * (1 + Health%Bonus) * (1 - HPReduction1) * (1 - HPReduction2) * [...]",
        ["Health","Health%","GlobalHealthModifier"]
      )
      formulasValues.updateDisplay("summaryStamina",returnObject.totalStamina,1);
      tooltipMath.updateTooltipDisplay(
        "summaryStaminaRow",
        "TotalStamina = Stamina * (1 + Stamina%Bonus)",
        ["Stamina","Stamina%"]
      )
      formulasValues.updateDisplay("summaryArmor",returnObject.totalArmor,1);
      tooltipMath.updateTooltipDisplay(
        "summaryArmorRow",
        "TotalArmor = Armor * (1 + ArmorEffectiveness)",
        ["Armor","Armor%"]
      )
      formulasValues.updateDisplay("summaryWeight",returnObject.totalWeight,1);
      tooltipMath.updateTooltipDisplay(
        "summaryWeightRow",
        `Current Dodge Class: <span>${returnObject.dodgeClass}</span><br>TotalWeight = Encumbrance * (1 + Encumbrance%)<br><br>` +
      `Dodge Weight Thresholds:<br>                           
      Light <= 25 + SumThresholdModifiers<br>
      Medium <= 50 + SumThresholdModifiers<br>
      Heavy <= 75 + SumThresholdModifiers<br>
      Flop > 75 + SumThresholdModifiers` ,
        ["Encumbrance","Encumbrance%","WeightThreshold"]
      )
      formulasValues.updateDisplay("summaryBleed",returnObject.bleed,0);
      tooltipMath.updateTooltipDisplay(
        "summaryBleed",
        "Increases your damage reduction against attacks with a damage type of bleed. Multiplicative with TotalDR, but even together they still cannot exceed an 80% sum. Bleed is not considered elemental damage.",
        ["Bleed"]
      )
      formulasValues.updateDisplay("summaryBurn",returnObject.burn,0);
      tooltipMath.updateTooltipDisplay(
        "summaryBurn",
        "Increases your damage reduction against attacks with a damage type of fire. Multiplicative with TotalDR, but even together they still cannot exceed an 80% sum.",
        ["Burn"]
      )
      formulasValues.updateDisplay("summaryShock",returnObject.shock,0);
      tooltipMath.updateTooltipDisplay(
        "summaryShock",
        "Increases your damage reduction against attacks with a damage type of shock. Multiplicative with TotalDR, but even together they still cannot exceed an 80% sum.",
        ["Shock"]
      )
      formulasValues.updateDisplay("summaryCorrosive",returnObject.corrosive,0);
      tooltipMath.updateTooltipDisplay(
        "summaryCorrosive",
        "Increases your damage reduction against attacks with a damage type of acid. Multiplicative with TotalDR, but even together they still cannot exceed an 80% sum.",
        ["Corrosive"]
      )
      formulasValues.updateDisplay("summaryBlight",returnObject.blight,0);
      tooltipMath.updateTooltipDisplay(
        "summaryBlight",
        "Increases your damage reduction against attacks with a damage type of blight. Multiplicative with TotalDR, but even together they still cannot exceed an 80% sum. Blight is not considered elemental damage.",
        ["Blight"]
      )
      
      readSelection("summaryWeight").style.color = dodgeColor;

      readSelection("basicsInnerBox").innerHTML = "";
      let drHTML = "<div class='basicsDRheaderTitle'>DAMAGE REDUCTION</div>";
      let drRowsHTML = '';
      let rowsListings = [
        {"statName": "baseArmor","statCoverName": "Base Armor","tooltip":"","relevantTags": ["Armor"],"isNotAPercent": true,"roundAnyways": true},
        {"statName": "armorEff","statCoverName": "Armor Effectiveness","tooltip":"ArmorEffectiveness = 1 + ArmorEffBonuses<br>Note that you will always have 100% armor effectiveness by default, the only way that wouldn't be true is if you are afflicted with Lydusa's curse which reduces it by a flat 15%.","relevantTags": ["Armor%"],"condition": (returnObject.armorEff != 1)},
        {"statName": "totalArmor","statCoverName": "Total Armor","tooltip":"TotalArmor = Armor * (1 + ArmorEffectiveness)","relevantTags": ["Armor","Armor%"],"isNotAPercent": true,"roundAnyways": true},
        {"statName": "armorDR","statCoverName": "Armor DR%","tooltip":"ArmorDR = TotalArmor / (TotalArmor + 200)","relevantTags": ["Armor","Armor%"]},
        {"statName": "bulwarkStacks","statCoverName": "Bulwark Stacks","tooltip":"Bulwark stacks have a base limit of 5, but it can be modified.<br>See Bulwark DR statistic tooltip for an equation breakdown.","relevantTags": ["Bulwark"],"isNotAPercent": true,"roundAnyways": true},
        {"statName": "bulwarkDR","statCoverName": "Bulwark %DR","tooltip":"BulwarkDR = -0.005 * (BulwarkStacks^2) + 0.075 * BulwarkStacks<br>Bulwark DR is considered Flat DR.","relevantTags": ["Bulwark"]},
        {"statName": "otherFlat","statCoverName": "Other Flat DR","tooltip":"This is for all sources of Flat DR that do not originate from Bulwark.","relevantTags": ["FlatDR"]},
        {"statName": "totalFlat","statCoverName": "Total Flat DR%","tooltip":"TotalFlatDR = BulwarkDR + OtherFlatDR","relevantTags": ["FlatDR","Bulwark"]},
      ]
      drRowsHTML += basicsUpdates.expandRowListingInfo(rowsListings,returnObject);

      let drSumHTML = `<div class="basicsDRsumContainer hasHoverTooltip" id="totalDRRow">
           <span class="basicsTotalDR">TOTAL DR:</span><span class="basicsTotalDRsum" id="totalDR">${(returnObject.totalDR*100).toFixed(2)}%</span>
       </div>
       <br>`
      tooltipMath.updateTooltipDisplay(
        "totalDRRow",
        "TotalDR = 1 - (1 - ArmorDR) * (1 - FlatDR)<br><br>TotalDR caps at 80%<br>TotalDR is multiplicative against Resistance-based damage reduction when hit by a non-physical attack, but even together they still can't exceed an 80% sum. Given the contextual nature of Resistance-based DR, it is not factored in this number.",
        ["FlatDR","Bulwark","Armor","Armor%"]
      )
      readSelection("basicsInnerBox").innerHTML += drRowsHTML ? drHTML + drRowsHTML + drSumHTML : "";
      if (drRowsHTML) {
        //Adjust total DR color based on amount.
      if (returnObject.totalDR>0.8){readSelection("totalDR").style.color = "#e06666"}
      else {readSelection("totalDR").style.color = "white"}
      }

 
      let healingHTML = "<div class='basicsDRheaderTitle'>HEALTH</div>";
      let healingHTMLRowsHTML = '';
      rowsListings = [//totalHealth,totalHealthNoGlobal
        {"statName": "flatHPperSec","statCoverName": "Flat HP/s","tooltip":"","relevantTags": ["HP/S+"],"isNotAPercent": true,"roundAnyways": true},
        {"statName": "percHPperSec","statCoverName": "% HP/s","tooltip":"","relevantTags": ["HP/S%"]},
        {"statName": "relicEffectiveness","statCoverName": "Relic Effectiveness","tooltip":"This is a boost to all relic-based healing and/or some relic specific effects.","relevantTags": ["RelicEFF"]},
        {"statName": "healingEffectiveness","statCoverName": "Healing Effectiveness","tooltip":"This is a boost to all healing done of any kind. Grey Health regen and lifesteal do not count as healing.<br>Multiplicative against RelicEff when calculated.","relevantTags": ["HealingEFF"]},
        {"statName": "totalBaseHealth","statCoverName": "Base Health","tooltip":"BaseHealth = 100 + FlatHealth<br><br>This is your total base health before any % bonuses or reductions come into play.","relevantTags": ["Health"],"isNotAPercent": true,"roundAnyways": true},
        {"statName": "percentHealthMulti","statCoverName": "Health% Multi","tooltip":"HealthPercentMulti = 1 + HealthPercentBonuses<br><br>This is the total health multiplier that applies to your Base Health, from positive bonuses.","relevantTags": ["Health%"],"isNotAPercent": true,"roundAnyways": true,"condition": (returnObject.percentHealthMulti != 1)},
        {"statName": "globalCap","statCoverName": "Reduction Multi","tooltip":"This is the reduction multiplier that applies to your total health after flat HP and % bonuses. This modifies your actual Max Health, when considering Shields or Healing % amounts.","relevantTags": ["GlobalHealthModifier"],"isNotAPercent": true,"roundAnyways": true,"condition": (returnObject.globalCap != 1)},
        {"statName": "healthCap","statCoverName": "Health% Cap","tooltip":"This is the % maximum health you can have on your HP bar at any given time.<br><br>Note that this does NOT reduce your Max Health when considering Healing or Shield factors, this only prevents you from healing past a certain %HP threshold, like Restriction Cord.","relevantTags": ["HealthCap"],"condition": (returnObject.healthCap != 1)},
        {"statName": "totalHealthNoGlobal","statCoverName": "Max Health","tooltip":"MaxHealth = BaseHealth * Health%Multi * Reduction Multi<br><br>This is your true, end total Max Health. Even if you have a Health Cap in effect, Shields and Healing will still go off of this value, not the Capped Health value.","relevantTags": ["Health","Health%","GlobalHealthModifier"],"isNotAPercent": true,"roundAnyways": true},
        {"statName": "totalHealth","statCoverName": "Capped Health","tooltip":"CappedHealth = MaxHealth * Health%Cap<br><br>This is your end total HP after HP reduction and cap multipliers take effect on your total health. This is NOT your Max Health, it is simply how much health you have when capped. Healing and Shields still go off of your true Max Health.","relevantTags": ["Health","Health%","GlobalHealthModifier","HealthCap"],"isNotAPercent": true,"roundAnyways": true,"condition": (returnObject.totalHealth < returnObject.totalHealthNoGlobal)},
      ]
      healingHTMLRowsHTML += basicsUpdates.expandRowListingInfo(rowsListings,returnObject);
      readSelection("basicsInnerBox").innerHTML += healingHTMLRowsHTML ? healingHTML + healingHTMLRowsHTML : "";


      let greyHealthHTML = "<div class='basicsDRheaderTitle'>GREY HEALTH</div>";
      let greyHealthHTMLRows = "";
      rowsListings = [
        {"statName": "greyConversionRate","statCoverName": "Grey Health Conversion","tooltip":"GreyHealthConversion = BaseRate * (1 + ConversionBonuses)<br>BaseRate = 50%<br><br>This is the rate at which damaged or lost health, is converted to Grey Health when you take damage. If you take 50 damage and have 50% conversion, that means you'll still take 50 damage and lose 50 health, but you'll also get 25 Grey Health on your bar that can regenerate slowly over time. Grey Health can be lost on your bar if you get hit more than your threshold amount allows for.<br><br>You cannot exceed 100% Conversion Rate.","relevantTags": ["GreyHealthConversion"],"condition": (returnObject.greyConversionRate != 0.5)},
        {"statName": "greyHitThreshold","statCoverName": "Grey-Hit Threshold","tooltip":"This is the threshold of hits after which you will lose Grey Health accrued in your health bar. By default, the threshold is 0 meaning if you get hit with any Grey Health on your bar it will be lost.","relevantTags": ["GreyHPHitThreshold"],"isNotAPercent": true,"roundAnyways": true},
        {"statName": "totalGreyHPperSec","statCoverName": "Grey Health/s","tooltip":"This regen is only applicable when Grey Health is actually present on your healthbar.<br>0.2/s is the default regen rate. Note that Grey Health Rate is NOT the regen rate, it is the CONVERSION rate. See Conversion Rate tooltip for details.<br><br>Grey Health regen does not count as 'Healing' when factoring Healing Effectiveness.","relevantTags": ["GreyHP/S%","GreyHP/S+"],"isNotAPercent": true,"roundAnyways": true, "condition": (returnObject.totalGreyHPperSec != 0.2)},
      ]
      greyHealthHTMLRows += basicsUpdates.expandRowListingInfo(rowsListings,returnObject);
      readSelection("basicsInnerBox").innerHTML += greyHealthHTMLRows ? greyHealthHTML + greyHealthHTMLRows : "";


      let lifestealHTML = "<div class='basicsDRheaderTitle'>LIFESTEAL</div>";
      let lifestealHTMLRowsHTML = '';
      rowsListings = [//"RelicLifesteal"
        {"statName": "lifestealEFF","statCoverName": "Effectiveness","tooltip":"This is a %Bonus applied to all forms of lifesteal available to you.","relevantTags": ["LifestealEFF"]},
        {"statName": "lifestealALL","statCoverName": "All","tooltip":"This is the Lifesteal that applies to the base(level 0) damage of all outgoing player damage.<br>Includes relic-based lifesteal if a relic provides it.","relevantTags": ["Lifesteal","LifestealEFF"]},
        {"statName": "lifestealMelee","statCoverName": "Melee","tooltip":"This is the Lifesteal that applies to the base(level 0) damage of all outgoing melee damage.","relevantTags": ["MLifesteal","LifestealEFF"]},
        {"statName": "lifestealMeleeCharged","statCoverName": "Melee (Charged)","tooltip":"This is the Lifesteal that applies to the base(level 0) damage of all outgoing charged melee damage.","relevantTags": ["MChargedLifesteal","LifestealEFF"]},
        {"statName": "lifestealRange","statCoverName": "Ranged","tooltip":"This is the Lifesteal that applies to the base(level 0) damage of all outgoing ranged damage.","relevantTags": ["RLifesteal","LifestealEFF"]},
        // {"statName": "baseArmor","statCoverName": "Base","tooltip":"","relevantTags": ["Armor"],"isNotAPercent": true,"roundAnyways": true},
      ]
      lifestealHTMLRowsHTML += basicsUpdates.expandRowListingInfo(rowsListings,returnObject);
      readSelection("basicsInnerBox").innerHTML += lifestealHTMLRowsHTML ? lifestealHTML + lifestealHTMLRowsHTML : "";


      let staminaHTML = "<div class='basicsDRheaderTitle'>STAMINA</div>";
      let staminaHTMLRowsHTML = '';
      rowsListings = [//evadeCost,meleeCost
        {"statName": "staminaPerSec","statCoverName": "Regen/s","tooltip":"StaminaRegen/s = Stamina/s * Stamina/sMultipliers<br>DefaultRegen = 33/s<br><br>A good example of a stamina/s multiplier would be Drakestone Pearl as it reduces regen to 1/5th of the normal rate.","relevantTags": ["Stamina/S+","Stamina/S+Multi"],"isNotAPercent": true,"roundAnyways": true,"condition": (returnObject.staminaPerSec != 33)},
        {"statName": "evadeCost","statCoverName": "Evade Cost%","tooltip":"This is a multiplier against the Evade's base cost of 25, BEFORE the general stamina cost multiplier takes effect.<br><br>Cannot go lower than 0%, as an action cannot go negative cost and refund you.","relevantTags": ["EvadeCost"],"condition": (returnObject.evadeCost != 1)},
        {"statName": "meleeCost","statCoverName": "Melee Cost%","tooltip":"This is a multiplier against any given melee action's base cost, BEFORE the general stamina cost multiplier takes effect.<br><br>Cannot go lower than 0%, as an action cannot go negative cost and refund you.","relevantTags": ["ChargeCost"],"condition": (returnObject.meleeCost != 1)},
        {"statName": "adjustedPenalty","statCoverName": "Weight Penalty%","tooltip":"Penalty = WeightPenalty * (1 + PenaltyModifier)<br>This is the overall stamina cost penalty applied by a given weight category.<br><br>Default values of:<br>Light - 0%<br>Medium - 25%<br>Heavy - 50%<br>Flop - 75%<br><br>Cannot be modified by general cost reductions, but CAN be modified by penalty reductions like Verdant Tea.","relevantTags": ["StaStaminaPenaltyAdjustment","Encumbrance","Encumbrance%","WeightThreshold"]},
        {"statName": "staminaCost","statCoverName": "General Cost%","tooltip":"StaminaCost = CostModifiers + WeightPenalty<br>Has a base value of 1.0 or 100%.<br>This is the stamina cost multiplier applied to any given action.<br><br>Note that this does NOT add with action specific cost reductions like Evade Cost or Melee Cost, those are separate multipliers that this stat will apply to multiplicatively, but never additively.<br><br>Cannot go lower than 0%, as an action cannot go negative cost and refund you.","relevantTags": ["StaminaCost","StaminaPenaltyAdjustment","Encumbrance","Encumbrance%","WeightThreshold"],"condition": (returnObject.staminaCost != 1)},
        {"statName": "evadePrice","statCoverName": "Evade Price","tooltip":"EvadePrice = BaseCost * EvadeCost% * OverallCost%<br>BaseCost = 25 stamina<br><br>Note that the action specific cost reductions are MULTIPLICATIVE with general stamina cost modifiers, they are not additive.","relevantTags": ["StaminaCost","EvadeCost","StaminaPenaltyAdjustment","Encumbrance","Encumbrance%","WeightThreshold"],"isNotAPercent": true,"roundAnyways": true},
        // {"statName": "baseArmor","statCoverName": "Base","tooltip":"","relevantTags": ["Armor"],"isNotAPercent": true,"roundAnyways": true},
      ]
      staminaHTMLRowsHTML += basicsUpdates.expandRowListingInfo(rowsListings,returnObject);
      readSelection("basicsInnerBox").innerHTML += staminaHTMLRowsHTML ? staminaHTML + staminaHTMLRowsHTML + "<br>" : "";


      readSelection("basicsInnerBox").innerHTML += `
      <div class="basicsDamageRows" id="basicsDamageRows"></div>
      <div class="basicsDamageRows" id="basicsCritChance"></div>
      <div class="basicsDamageRows" id="basicsCritDamage"></div>
      <div class="basicsDamageRows" id="basicsWeakspot"></div>
      <div class="basicsDamageRows" id="basicsActionSpeed"></div>
      <div class="basicsDamageRows" id="basicsStatusOut"></div>
      <div class="basicsDamageRows" id="basicsStatusIn"></div>
      <div class="basicsDamageRows" id="basicsMisc"></div>`;



      
      // formulasValues.updateDisplay("relicBase",relicHPbase,2);//We only show scaled now, base no longer visible
      // tooltipMath.updateTooltipDisplay(
      //   "summaryHealthRow",
      //   "TotalHealth = Health * (1 + Health%Bonus) * (1 - HPReduction1) * (1 - HPReduction2) * [...]",
      //   ["Health","Health%","GlobalHealthModifier"]
      // )


      readSelection("relicType").innerHTML = returnObject.relicHPtype;
      tooltipMath.updateTooltipDisplay(
        "relicTypeRow",
        `<span>%</span> = Percent healing over time<br>
        <span>P</span> = Passive healing over time<br>
        <span>F</span> = Flat healing, either instantly or over time<br>
        <span>--</span> = Non-standard, and probably does not apply healing but rather some other effect.`,
        []
      )
      tooltipMath.updateTooltipDisplay(
        "relicScaledRow",
        `RelicScaledHealing = BaseRelicHealing * (1 + RelicEfficacy) * (1 + HealingEfficacy)`,
        []
      )
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
      tooltipMath.updateTooltipDisplay(
        "EffectiveDRDisplayRow",
        "EffectiveDR = 1 - (1 - TotalDR) * (1 - REDamage) * (1 - DMGKept) * [...]",
        []
      )
      formulasValues.updateDisplay("effectiveDR",returnObject.effectiveDR*100,2,"%");
      tooltipMath.updateTooltipDisplay(
        "EffectiveDRDisplayRow",
        "EffectiveDR = 1 - (1 - TotalDR) * (1 - REDamage) * (1 - DMGKept) * [...]",
        []
      )
      EffectiveDRDisplayRow
      formulasValues.updateDisplay("totalBonusMitigation",returnObject.totalBonusMitigation*100,2,"%");
      formulasValues.updateDisplay("REdamage",returnObject.reducedEnemyDamage*100,2,"%");
      tooltipMath.updateTooltipDisplay(
        "REdamageRow",
        "REDamage = 1 - (1 - source1) * (1 - source2) * [...]<br>This is how much the enemy damage gets reduced, separate from damage reduction. These are considered enemy debuffs most of the time.",
        ["REdamage"]
      )
      formulasValues.updateDisplay("DMGKept",returnObject.damageKept*100,2,"%");
      tooltipMath.updateTooltipDisplay(
        "DMGKeptRow",
        "DMGKept = 1 - (1 - source1) * (1 - source2) * [...]<br>This is how much damage you keep, based on effects that share damage to other friendly entities.",
        ["DMGKept"]
      )
      tooltipMath.updateTooltipDisplay(
        "totalNonstandardDRRow",
        "BonusMitigation = 1 - (1 - REDamage) * (1 - DMGKept)",
        []
      )
      // totalNonstandardDRRow

      formulasValues.updateDisplay("shield%",returnObject.percShields*100,2,"%");
      tooltipMath.updateTooltipDisplay(
        "shield%Row",
        ``,
        ["Shield","Shield%/S"]
      )
      formulasValues.updateDisplay("shieldEff",returnObject.shieldEff*100,2,"%");
      tooltipMath.updateTooltipDisplay(
        "shieldEffRow",
        ``,
        ["ShieldEFF"]
      )
      formulasValues.updateDisplay("totalShield%",returnObject.totalPercShields*100,2,"%");
      tooltipMath.updateTooltipDisplay(
        "totalShield%Row",
        "TotalShieldPercent = BaseShieldPercent * (1 + ShieldEffectiveness)",
        []
      )
      formulasValues.updateDisplay("shieldEHP",returnObject.shieldEHP,2);
      tooltipMath.updateTooltipDisplay(
        "shieldEHPRow",
        "ShieldEHP = (TotalHP / (1 - EffectiveDR)) * TotalShieldPercent",
        []
      )
      formulasValues.updateDisplay("EHP",returnObject.totalEHP,2);
      tooltipMath.updateTooltipDisplay(
        "EHPDisplayRow",
        "EHP = (TotalHP / (1 - EffectiveDR)) * (1 + TotalShieldPercent)",
        []
      )

      formulasValues.updateDisplay("advancedFlat",returnObject.flatHPperSec,2);
      tooltipMath.updateTooltipDisplay(
        "advancedFlatRow",
        "The sum total of all flat-only HP recovery effects, excluding relics.",
        []
      )
      formulasValues.updateDisplay("advanced%",returnObject.percHPperSec*100,2,"%");
      tooltipMath.updateTooltipDisplay(
        "advanced%Row",
        "The sum total of all %-only HP recovery effects, excluding relics.",
        []
      )
      formulasValues.updateDisplay("advancedTotalFlat",returnObject.flatHPperSec + returnObject.percHPperSec*returnObject.totalHealth,2);
      tooltipMath.updateTooltipDisplay(
        "advancedTotalFlatRow",
        "All healing whether flat or %, excluding relics, converted into <span>flat HP/s</span> representation",
        []
      )
      formulasValues.updateDisplay("advancedTotal%",(returnObject.percHPperSec + returnObject.flatHPperSec/returnObject.totalHealth)*100,2,"%"); 
      tooltipMath.updateTooltipDisplay(
        "advancedTotal%Row",
        "All healing whether flat or %, excluding relics, converted into <span>%HP/s</span> representation",
        []
      )
      formulasValues.updateDisplay("advancedRelicTotal%",returnObject.advancedRelicTotalPerc,2,"%");
      tooltipMath.updateTooltipDisplay(
        "advancedRelicTotal%Row",
        "Relic healing done of any kind, whether flat or %, converted into a <span>%HP/s</span> representation. Toggle this on to include it in calculations.",
        []
      )
      formulasValues.updateDisplay("totalHealingFlat",returnObject.advancedTotalFlatHP,2);
      tooltipMath.updateTooltipDisplay(
        "totalHealingFlatRow",
        "All healing whether flat or %, including relics if the toggle is on, converted into <span>flat HP/s</span> representation",
        []
      )
      formulasValues.updateDisplay("totalHealing%",returnObject.advancedTotalPercHP,2,"%");
      tooltipMath.updateTooltipDisplay(
        "totalHealing%Row",
        "All healing whether flat or %, including relics if the toggle is on, converted into a <span>%HP/s</span> representation",
        []
      )
      formulasValues.updateDisplay("EHP/s",returnObject.EHPpSec,2);
      tooltipMath.updateTooltipDisplay(
        "EHPPerSecDisplayRow",
        "EHP/s = BaseEHP * %HP/s<br><br><div>%HP/s</div>The sum total of all healing received, even flat healing, converted into a percent of your max health.<br><div>BaseEHP</div>Is your total EHP without any shields.",
        []
      )

      tooltipMath.updateTooltipDisplay(
        "greyActiveRow",
        "Is Grey Health present on your healthbar, for the purposes of Grey Health effects?",
        []
      )
      tooltipMath.updateTooltipDisplay(
        "perfectDodgeRow",
        "When you dodge, are they pefect dodges? Toggling this also means that the calc assumes you are dodging all the time to keep up dodge-based effects.",
        []
      )
      tooltipMath.updateTooltipDisplay(
        "isEvadeRow",
        "When you dodge, are you doing a roll or are you doing a backstep evasion instead. When toggled on, it assumes the answer is always an evade, not a roll. This is important for some dodge-based effects.",
        []
      )

      tooltipMath.updateTooltipDisplay(
        "spiritHealerStacksRow",
        "When the Ranged Mutator: Spirit Healer is equipped, how many stacks do you want the calculator to assume that you will have up with 100% uptime, for the purposes of counting its healing?",
        []
      )
      
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

    let rowsListings = [
      {"statName": "AllDamage","statCoverName": "","tooltip":"","relevantTags": ["AllDamage","outCORRODED","outEXPOSED"]},
      {"statName": "RangedDamage","statCoverName": "","tooltip":"","relevantTags": ["RangedDamage"]},
      {"statName": "SkillDamage","statCoverName": "","tooltip":"","relevantTags": ["SkillDamage"]},
      {"statName": "MeleeDamage","statCoverName": "","tooltip":"","relevantTags": ["MeleeDamage"]},
      {"statName": "ChargeDamage","statCoverName": "","tooltip":"","relevantTags": ["ChargeDamage"]},
      {"statName": "BackstepDamage","statCoverName": "","tooltip":"","relevantTags": ["BackstepDamage"]},
      {"statName": "FistDamage","statCoverName": "","tooltip":"","relevantTags": ["FistDamage"]},
      {"statName": "MeleeSpecialAbilityDamage","statCoverName": "Special Melee","tooltip":"This is the damage bonus applicable to special melee weapon abilities that require damage threshold build-ups, in particular this applies to Red Doe Staff's special charged effect. This does NOT apply to generalized melee projectiles or effects","relevantTags": ["MeleeSpecialAbilityDamage"]},
      {"statName": "CorrosiveDamage","statCoverName": "","tooltip":"","relevantTags": ["CorrosiveDamage"]},
      {"statName": "AcidDamage","statCoverName": "","tooltip":"","relevantTags": ["AcidDamage"]},
      {"statName": "BurningDamage","statCoverName": "","tooltip":"","relevantTags": ["BurningDamage"]},
      {"statName": "FireDamage","statCoverName": "","tooltip":"","relevantTags": ["FireDamage"]},
      {"statName": "ElementalDamage","statCoverName": "","tooltip":"","relevantTags": ["ElementalDamage"]},
      {"statName": "ShockDamage","statCoverName": "","tooltip":"","relevantTags": ["ShockDamage"]},
      {"statName": "OverloadedDamage","statCoverName": "","tooltip":"","relevantTags": ["OverloadedDamage"]},
      {"statName": "ExplosiveDamage","statCoverName": "","tooltip":"","relevantTags": ["ExplosiveDamage"]},
      {"statName": "StatusDamage","statCoverName": "","tooltip":"","relevantTags": ["StatusDamage"]},
      {"statName": "MeleeStatusDamage","statCoverName": "","tooltip":"","relevantTags": ["MeleeStatusDamage"]},
      {"statName": "ModDamage","statCoverName": "","tooltip":"","relevantTags": ["ModDamage"]},
      {"statName": "StaggerDamage","statCoverName": "","tooltip":"","relevantTags": ["StaggerDamage"]},
      {"statName": "SummonDamage","statCoverName": "","tooltip":"","relevantTags": ["SummonDamage"]},
      {"statName": "UniqueMulti","statCoverName": "Unique Multi","tooltip":"This is the composite, multiplicative sum of any generalized unique multipliers that would factor into any given damage equation. Right now this particular stat is only going to show if Brightstone is equipped or not.","relevantTags": ["UniqueMulti"],"isNotAPercent": true,"roundAnyways": true},
    ]

    list += basicsUpdates.expandRowListingInfo(rowsListings,table);

    if (list != "") {list = userTrigger.updateSubstatColor(list);damageHeader+=list}
    else {damageHeader = ""}
    damageRows.innerHTML = damageHeader;
  },
  criticalChance() {
    let damageRows = readSelection("basicsCritChance");
    let table = valueTables.greatTableKnowerOfAll;
    let damageHeader = `<div class="basicsDRheaderTitle">CRIT CHANCE</div>`;
    let list = ``;

    let rowsListings = [
      {"statName": "AllCritChance","statCoverName": "","tooltip":"","relevantTags": ["AllCritChance"]},
      {"statName": "RangedCritChance","statCoverName": "","tooltip":"","relevantTags": ["RangedCritChance"]},
      {"statName": "MeleeCritChance","statCoverName": "","tooltip":"","relevantTags": ["MeleeCritChance"]},
      {"statName": "ChargeCritChance","statCoverName": "","tooltip":"","relevantTags": ["ChargeCritChance"]},
      {"statName": "SkillCritChance","statCoverName": "","tooltip":"","relevantTags": ["SkillCritChance"]},
      {"statName": "ElementalCritChance","statCoverName": "","tooltip":"","relevantTags": ["ElementalCritChance"]},
      {"statName": "ModCritChance","statCoverName": "","tooltip":"","relevantTags": ["ModCritChance"]},
      {"statName": "ExplosiveCritChance","statCoverName": "","tooltip":"","relevantTags": ["ExplosiveCritChance"]},
      {"statName": "FirearmCritChance","statCoverName": "","tooltip":"","relevantTags": ["FirearmCritChance"]},
      {"statName": "BowCritChance","statCoverName": "","tooltip":"","relevantTags": ["BowCritChance"]},
      {"statName": "PrimaryCritChance","statCoverName": "","tooltip":"","relevantTags": ["PrimaryCritChance"]},
      {"statName": "SecondaryCritChance","statCoverName": "","tooltip":"","relevantTags": ["SecondaryCritChance"]},
    ]

    list += basicsUpdates.expandRowListingInfo(rowsListings,table);

    if (list != "") {list = userTrigger.updateSubstatColor(list);damageHeader+=list}
    else {damageHeader = ""}
    damageRows.innerHTML = damageHeader;
  },
  criticalDamage() {
    let damageRows = readSelection("basicsCritDamage");
    let table = valueTables.greatTableKnowerOfAll;
    let damageHeader = `<div class="basicsDRheaderTitle">CRIT DAMAGE</div>`;
    let list = ``;

    damageHeader += createHTML.basicsRow("baseCritDamageRow","Base Bonus",0.50,true,"%");
    tooltipMath.updateTooltipDisplay(
      "baseCritDamageRow",
      "Players have a base crit damage of 50%, or, 1.5x.",
      []
    );

    let rowsListings = [
      {"statName": "AllCritDamage","statCoverName": "","tooltip":"","relevantTags": ["AllCritDamage"]},
      {"statName": "RangedCritDamage","statCoverName": "","tooltip":"","relevantTags": ["RangedCritDamage"]},
      {"statName": "MeleeCritDamage","statCoverName": "","tooltip":"","relevantTags": ["MeleeCritDamage"]},
      {"statName": "ChargeCritDamage","statCoverName": "","tooltip":"","relevantTags": ["ChargeCritDamage"]},
    ]

    list += basicsUpdates.expandRowListingInfo(rowsListings,table);

    if (list != "") {list = userTrigger.updateSubstatColor(list);damageHeader+=list}
    else {damageHeader = ""}
    damageRows.innerHTML = damageHeader;
  },
  weakspot() {
    let damageRows = readSelection("basicsWeakspot");
    let table = valueTables.greatTableKnowerOfAll;
    let damageHeader = `<div class="basicsDRheaderTitle">WEAKSPOT</div>`;
    let list = ``;

    damageHeader += createHTML.basicsRow("baseWeakspotRow","Base Bonus",1,true,"%")
    tooltipMath.updateTooltipDisplay(
      "baseWeakspotRow",
      "Players have a base weakspot damage bonus of 100%, or, 2x.",
      []
    )

    let rowsListings = [
      {"statName": "AllWeakspot","statCoverName": "","tooltip":"","relevantTags": ["AllWeakspot"]},
      {"statName": "SkillWeakspot","statCoverName": "","tooltip":"","relevantTags": ["SkillWeakspot"]},
      {"statName": "RangedWeakspot","statCoverName": "","tooltip":"","relevantTags": ["RangedWeakspot"]},
      {"statName": "MeleeWeakspot","statCoverName": "","tooltip":"","relevantTags": ["MeleeWeakspot"]},
      {"statName": "ChargeWeakspot","statCoverName": "","tooltip":"","relevantTags": ["ChargeWeakspot"]},
    ]

    list += basicsUpdates.expandRowListingInfo(rowsListings,table);

    if (list != "") {list = userTrigger.updateSubstatColor(list);damageHeader+=list}
    else {damageHeader = ""}
    damageRows.innerHTML = damageHeader;
  },
  actionSpeed() {
    let damageRows = readSelection("basicsActionSpeed");
    let table = valueTables.greatTableKnowerOfAll;
    let damageHeader = `<div class="basicsDRheaderTitle">ACTION SPEED</div>`;
    let list = ``;

    // {"statName": "relicUseTime","statCoverName": "Relic Use Speed","tooltip":"","relevantTags": ["RelicSpeed","HASTE"]},

    let rowsListings = [
      {"statName": "MovementSpeed","statCoverName": "","tooltip":"","relevantTags": ["MovementSpeed","HASTE"]},
      {"statName": "SprintSpeed","statCoverName": "","tooltip":"","relevantTags": ["SprintSpeed","HASTE"]},
      {"statName": "EnvMovementSpeed","statCoverName": "Vaulting","tooltip":"This is how fast your character moves when wading through water, vaulting over objects, or climbing ladders.","relevantTags": ["EnvMovementSpeed","HASTE"]},
      {"statName": "AimMovementSpeed","statCoverName": "","tooltip":"This is how fast your character walks while aiming down weapon sights.","relevantTags": ["AimMovementSpeed","HASTE"]},
      {"statName": "FireRate","statCoverName": "","tooltip":"","relevantTags": ["FireRate","HASTE"]},
      {"statName": "ReloadSpeed","statCoverName": "","tooltip":"","relevantTags": ["ReloadSpeed","HASTE"]},
      {"statName": "WeaponSwapSpeed","statCoverName": "Swap Speed","tooltip":"","relevantTags": ["WeaponSwapSpeed","HASTE"]},
      {"statName": "AttackSpeed","statCoverName": "","tooltip":"","relevantTags": ["AttackSpeed","HASTE"]},
      {"statName": "ChargeSpeed","statCoverName": "","tooltip":"","relevantTags": ["ChargeSpeed","HASTE"]},
      {"statName": "CastSpeed","statCoverName": "","tooltip":"","relevantTags": ["CastSpeed","HASTE"]},
      {"statName": "RelicSpeed","statCoverName": "Relic Speed","tooltip":"Remember that Relic Speed is not Consumable Speed. All Consumable Speed will add into Relic Speed, but Relic Speed does not add into Consumable Speed.","relevantTags": ["RelicSpeed","HASTE"]},
      {"statName": "ConsumableSpeed","statCoverName": "Consumable Speed","tooltip":"Remember that all Consumable Speed will add into Relic Speed, but Relic Speed does not add into Consumable Speed.","relevantTags": ["ConsumableSpeed","HASTE"]},
    ]

    list += basicsUpdates.expandRowListingInfo(rowsListings,table);

    if (list != "") {list = userTrigger.updateSubstatColor(list);damageHeader+=list}
    else {damageHeader = ""}
    damageRows.innerHTML = damageHeader;
  },
  statusOut() {
    let damageRows = readSelection("basicsStatusOut");
    let table = valueTables.greatTableKnowerOfAll;
    let damageHeader = `<div class="basicsDRheaderTitle">STATUS: OUTBOUND</div>`;
    let list = ``;

    let rowsListings = [{"statName": "StatusDuration","statCoverName": "","tooltip":"","relevantTags": ["StatusDuration"]},]
    list += basicsUpdates.expandRowListingInfo(rowsListings,table);

    rowsListings = [
      {"statName": "outBLEED","statCoverName": "BLEED","tooltip":"","relevantTags": ["outBLEED"],"isNotAPercent": true},
      {"statName": "outSLOW","statCoverName": "SLOW","tooltip":"","relevantTags": ["outSLOW"],"isNotAPercent": true},
      {"statName": "outBURN","statCoverName": "BURN","tooltip":"","relevantTags": ["outBURN"],"isNotAPercent": true},
      {"statName": "outCORRODED","statCoverName": "CORRODED","tooltip":"Targets suffering from CORROSIVE status effects boost incoming player All Damage by 10% This is additive.","relevantTags": ["outCORRODED"],"isNotAPercent": true},
      {"statName": "outOVERLOADED","statCoverName": "OVERLOADED","tooltip":"","relevantTags": ["outOVERLOADED"],"isNotAPercent": true},
      {"statName": "outEXPOSED","statCoverName": "EXPOSED","tooltip":"Targets suffering from EXPOSED status effects boost incoming player All Damage by 15%. This is additive.","relevantTags": ["outEXPOSED"],"isNotAPercent": true},
    ];
    for (let entry of rowsListings) {
      let percent = entry.isNotAPercent;
      let round = entry.roundAnyways;
      let condition = entry.condition;
      list += (condition || (condition === undefined && table[entry.statName]))
      ? createHTML.basicsRow(entry.statName,"",entry.statCoverName,!percent || round,(!percent ? "%" : "")) 
      : "";
      tooltipMath.updateTooltipDisplay(
        entry.statName,
        entry.tooltip,
        entry.relevantTags
      )
    }

    if (list != "") {
      list = userTrigger.updateSubstatColor(list);
      damageHeader+=list;
    }
    else {damageHeader = ""}
    damageRows.innerHTML = damageHeader;
  },
  statusIn() {
    let damageRows = readSelection("basicsStatusIn");
    let table = valueTables.greatTableKnowerOfAll;
    let damageHeader = `<div class="basicsDRheaderTitle">STATUS: INBOUND</div>`;
    let list = ``;

    let rowsListings = [
      {"statName": "HASTE","statCoverName": "HASTE","tooltip":"","relevantTags": ["HASTE"],"isNotAPercent": true},
      {"statName": "inBLEED","statCoverName": "BLEED","tooltip":"Players suffering from BLEED effects will have their sum total Healing Effectiveness cut in half multiplicatively.","relevantTags": ["inBLEED"],"isNotAPercent": true},
      {"statName": "inSLOW","statCoverName": "SLOW","tooltip":"","relevantTags": ["inSLOW"],"isNotAPercent": true},
      {"statName": "inBURN","statCoverName": "BURN","tooltip":"","relevantTags": ["inBURN"],"isNotAPercent": true},
      {"statName": "inCORRODED","statCoverName": "CORRODED","tooltip":"","relevantTags": ["inCORRODED"],"isNotAPercent": true},
      {"statName": "inOVERLOADED","statCoverName": "OVERLOADED","tooltip":"","relevantTags": ["inOVERLOADED"],"isNotAPercent": true},
      {"statName": "inCURSE","statCoverName": "CURSE","tooltip":"","relevantTags": ["inCURSE"],"isNotAPercent": true},
      {"statName": "inMADNESS","statCoverName": "MADNESS","tooltip":"","relevantTags": ["inMADNESS"],"isNotAPercent": true},
      {"statName": "inROOTROT","statCoverName": "ROOT ROT","tooltip":"","relevantTags": ["inROOTROT"],"isNotAPercent": true},
      {"statName": "inDATACORRUPTION","statCoverName": "DATA CORRUPTION","tooltip":"","relevantTags": ["inDATACORRUPTION"],"isNotAPercent": true},
    ];
    for (let entry of rowsListings) {
      let percent = entry.isNotAPercent;
      let round = entry.roundAnyways;
      let condition = entry.condition;
      list += (condition || (condition === undefined && table[entry.statName]))
      ? createHTML.basicsRow(entry.statName,"",entry.statCoverName,!percent || round,(!percent ? "%" : "")) 
      : "";
      tooltipMath.updateTooltipDisplay(
        entry.statName,
        entry.tooltip,
        entry.relevantTags
      )
    }

    // list += basicsUpdates.expandRowListingInfo(rowsListings,table);

    if (list != "") {list = userTrigger.updateSubstatColor(list);damageHeader+=list;}
    else {damageHeader = ""}
    damageRows.innerHTML = damageHeader;
  },
  misc() {
    let damageRows = readSelection("basicsMisc");
    let table = valueTables.greatTableKnowerOfAll;
    let damageHeader = `<div class="basicsDRheaderTitle">MISC</div>`;
    let list = ``;

    let rowsListings = [//"ConsumableDuration"
      {"statName": "MeleeSpecialAbilityCharge","statCoverName": "Melee Threshold","tooltip":"This is the %threshold modification for special melee ability effects that require a given damage threshold in order to take effect. An example would be Red Doe Staff.","relevantTags": ["MeleeSpecialAbilityCharge"]},
      {"statName": "SummonHealth","statCoverName": "","tooltip":"","relevantTags": ["SummonHealth"]},
      {"statName": "Experience","statCoverName": "%XP Boost","tooltip":"This the %XP boost you gain from your items. This is separate from the %XP gained from being in higher difficulties.","relevantTags": ["Experience"]},
      {"statName": "auraAOE","statCoverName": "AOE Range%","tooltip":"This is a bonus to the range of AOE specific effects. Note that this does not apply to ALL AOE effects.","relevantTags": ["auraAOE"]},
      {"statName": "ConsumableDuration","statCoverName": "","tooltip":"This is a % bonus to quick-use consumable durations. This does not apply to any relic-based effects.","relevantTags": ["ConsumableDuration"]},
      // {"statName": "SummonHealth","statCoverName": "","tooltip":"","relevantTags": ["SummonHealth"]},
    ]

    list += basicsUpdates.expandRowListingInfo(rowsListings,table);

    if (list != "") {list = userTrigger.updateSubstatColor(list);damageHeader+=list}
    else {damageHeader = ""}
    damageRows.innerHTML = damageHeader;
  },
  expandRowListingInfo(rowsListings,table) {
    let returnString = "";
    for (let entry of rowsListings) {
      let percent = entry.isNotAPercent;
      let round = entry.roundAnyways;
      let condition = entry.condition;
      returnString += (condition || (condition === undefined && table[entry.statName]))
      ? createHTML.basicsRow(entry.statName,(entry.statCoverName || conditionalHelpers.addSpacesToTagNames(entry.statName)),table[entry.statName],!percent || round,(!percent ? "%" : "")) 
      : "";
      tooltipMath.updateTooltipDisplay(
        entry.statName,
        entry.tooltip,
        entry.relevantTags
      )
    }
    return returnString;
  },
  "targetTab": "amuletTab",
  "targetFocus": "amulet",
  updateFocus(tab,fieldToFocus) {
    basicsUpdates.targetTab = tab ?? basicsUpdates.targetTab
    basicsUpdates.targetFocus = fieldToFocus ?? basicsUpdates.targetFocus;

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

    for (let i=1;i<=globalRecords.totalConcLimit;i++) {
      readSelection(`concoction${i}Tab`).style.display = "none";
    }

    for (let i=1;i<=globalRecords.greatConsumableRecords.length;i++) {
      readSelection(`quickUse${i}Tab`).style.display = "none";
    }

    // readSelection("quickUse1Tab").style.display = "none";
    // readSelection("quickUse2Tab").style.display = "none";
    // readSelection("quickUse3Tab").style.display = "none";
    // readSelection("quickUse4Tab").style.display = "none";

    if (basicsUpdates.targetFocus.includes("concoction")) {readSelection("concoctionsMegaBox").style.display = "flex"}
    else {readSelection("concoctionsMegaBox").style.display = "none"}

    if (basicsUpdates.targetFocus.includes("quickUse")) {readSelection("quickUsesMegaBox").style.display = "flex"}
    else {readSelection("quickUsesMegaBox").style.display = "none"}

    readSelection(basicsUpdates.targetTab).style.display = "flex";
    readSelection(basicsUpdates.targetFocus).focus();
  }
}
let advancedUpdates = {
  toggleTankStats() {
    let survivabilityStats = readSelection(`tankStatsContainer`);
    let statsToggle = readSelection("tankStatsContainerToggle");
    survivabilityStats.style.display = statsToggle.checked ? "none" : "flex";
  },
  toggleDamageStats() {
    let damageStats = readSelection(`hideBreakdownBoxes`);
    let statsToggle = readSelection("damageStatsContainerToggle");
    damageStats.style.display = statsToggle.checked ? "none" : "flex";
  },
  toggleQueryVisibility() {
    let damageStats = readSelection(`queryBox`);
    let statsToggle = readSelection("queryVisibilityToggle");
    damageStats.style.display = statsToggle.checked ? "none" : "block";
  },
  updateSelectedDamageBreakdown(breakdownClicked) {

    readSelection("ability1BreakdownTab").style.display = "none";
    readSelection("ability2BreakdownTab").style.display = "none";
    readSelection("mod1BreakdownTab").style.display = "none";
    readSelection("mod1BreakdownTab").style.display = "none";
    readSelection("meleeBreakdownTab").style.display = "none";

    if (breakdownClicked === "clear") {
      readSelection("breakdownSelectorMain").style.display = "flex";
      readSelection("breakdownSelectorReturn").style.display = "none"
    }
    else {
      readSelection("breakdownSelectorMain").style.display = "none";
      readSelection("breakdownSelectorReturn").style.display = "flex";
      readSelection(`${breakdownClicked}`).style.display = "flex";
    }
  },
  updateSelectedMeleeBreakdown(breakdownClicked) {
    globalRecords.selectedMeleeBreakdown = breakdownClicked;
    updateFormulas();
  },
  updateSelectedFilterDisplay(elemID) {
    readSelection("statsFiltersHolder").style.display = "none";
    readSelection("occlusionsFiltersHolder").style.display = "none";
    readSelection("locksFiltersHolder").style.display = "none";
    readSelection("searchSettingsHolder").style.display = "none";
    readSelection("traitsSettingsHolder").style.display = "none";

    readSelection(elemID).style.display = "flex";
  }
}