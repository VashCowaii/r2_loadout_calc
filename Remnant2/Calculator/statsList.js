//This is the actual table for starter values, but we reuse it to clean (cycles/great)TableKnowerOfAll on updateFormulas() calls
let starterTable = {
    //HEALTH
    "Health": 0,"Health%": 0,"GlobalHealthModifier": 1,"HealthCap": 1,
    //ARMOR
    "Armor": 0,"Armor%": 0,
    //DR
    "FlatDR": 0,"Bulwark": 0,"BulwarkCap": 5,"REdamage": 1,"DMGKept": 1,"SelfDamageModifier": 1,"inStatusDamage": 0,
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
    "Lifesteal": 0,"MLifesteal": 0,"RLifesteal": 0,"MChargedLifesteal": 0,"RelicLifesteal": 0,
    "LifestealEFF": 0,
    //RELICS
    "RelicSpeed": 0,"RelicEFF": 0,
    "RelicHPbase": 0,"RelicHPtype": "","RelicHPtime": 0,
    "RelicCharges": 0,"RelicCharges%": 1,"RelicChargesOverride": 0,"RelicUseChance": 1,
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
    "AllWeakspot": 0,"SkillWeakspot": 0,"ModWeakspot": 0,"RangedWeakspot": 0,"MeleeWeakspot": 0,"ChargeWeakspot": 0,"HeavyWeaponWeakspot": 0,
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
    "ProjectileSpeed": 0,"ConsumableSpeed": 0,"CrouchSpeed": 0,
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
    "SummonHealth": 0,"HeavyAmmo": 0,"HeavyAmmoActiveRegen": 0,"HeavyAmmoBaseMulti": 0,"HeavyAmmoRegenMulti": 1,
    //MISC RANDM SHIT
    "Experience": 0,
    //OUTBOUND STATUS EFFECTS
    "StatusDuration": 1,
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
  starterTable = {...starterTable};
  //Used in stat filters, the keys are user-facing values to be more friendly,
  //while the values are the actual names of the backend stats that I use.
  const referenceTable = {
    "Armor Effectiveness": "Armor%",
    "Armor-Flat": "Armor",
    "Class-Summon Health %": "SummonHealth%",
    "Consumable-Concoction Limit": "ConcLimit",
    "Consumable-Duration": "ConsumableDuration",
    "Consumable-Use Speed": "ConsumableSpeed",
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
    "Grey Health Conversion": "GreyHealthConversion",
    "Healing Effectiveness": "HealingEFF",
    "Healing-Flat/second": "HP/S+",
    "Healing-Global Effectiveness": "GlobalHealingEff",
    "Healing-Modifiers": "HealingModifiers",
    "Healing-%/second": "HP/S%",
    "Health-Cap%": "HealthCap",
    "Health-Flat": "Health",
    "Health-Global Modifier": "GlobalHealthModifier",
    "Health-%": "Health%",
    "Lifesteal Effectiveness": "LifestealEFF",
    "Lifesteal-All": "Lifesteal",
    "Lifesteal-Melee": "MLifesteal",
    "Lifesteal-Melee Charged": "MChargedLifesteal",
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
    "Relic-Use Chance": "RelicUseChance",
    "Relic-Use Speed": "RelicSpeed",

    "Resistance-Bleed": "Bleed",
    "Resistance-Blight": "Blight",
    "Resistance-Burn": "Burn",
    "Resistance-Corrosive": "Corrosive",
    "Resistance-Shock": "Shock",

    "Shield Effectiveness": "ShieldEFF",
    "Shield-Flat": "Shield",
    "Shield-%/second": "Shield%/S",
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
    "Weakspot-Enable/Disable": "WeakspotDisable",
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
  //consumableusespeedmod,evadespeedmod,meleeattackspeedmod,winduptimemod,firespeedmod,skillcastingspeedmod,reloadspeedmod,movespeedmod,sprintspeedmod,crouchspeedmod,aimmovespeedmod
  const hasteTable = ["RelicSpeed","EvadeSpeed","AttackSpeed","ChargeSpeed","FireRate","CastSpeed","ReloadSpeed","MovementSpeed","SprintSpeed","CrouchSpeed","AimMovementSpeed"];
  
  //These are named based on the variable names within updateFormulas(), not the names of base stats on any valueTable
  //If an array, 0 is the name, 1 is the array placement of the target stat to pull from the breakdown, 2 is the name of the target stat from the breakdown, 3 is the breakdown type
  const playerDerivedStatistics = {
    "DPS (Custom)": ["Composite",3,"DPS","Composite"],
    "Total Damage (Custom)": ["Composite",4,"Total DMG","Composite"],

    "EHP": "totalEHP",
    "EHP/s": "EHPpSec",
    "Health": "totalHealth",
    "Health/s": "advancedTotalFlatHP",
    "Stamina": "totalStamina",
    "Stamina/s": "staminaPerSec",
    "Shield%": "totalPercShields",

    "Effective DR": "effectiveDR",
    // "Total Armor Value": "totalArmor",
    "Grey Health Regen": "totalGreyHPperSec",
    
    "Melee - Highest Hit": ["Melee Damage",4,"Highest Hit","Melee"],
    
    "Lifesteal - All": "lifestealALL",
    "Lifesteal - Melee": "lifestealMelee",
    "Lifesteal - Melee (Charged)": "lifestealMeleeCharged",
    "Lifesteal - Ranged": "lifestealRange",
    "Lifesteal - Peak (Any type)": "peakLifesteal",
    "Movement Speed": "movementSpeed"
  }

  // "requires" "provides": ["Fire"],
  // "provides" 
  const sourceList = [
    "HalfHealthSource",//requires something that puts you to half, to work(hardened coil, beads of the valorous, etc.)

    "Burden",//pretty much just for gift of the unbound, frankly, to tell it skip or not if no burdens are in the ring slots
    "Status",//requires a status source to be active
    "Shield",//requires a shield source to be active
    "Healing",//requires a healing effect to be active
    "Relic Healing",//requires a relic that has an effect scaled by relic efficacy

    "Lifesteal",//requires a lifesteal source
    "Bulwark",//Requires bulwarwk to be active

    "Active Summons",//requires summon count setting
    "Team Members",//requires team count setting to be more than one
    "Perfect Dodge",//requires perfect dodge setting
    "Grey Health Active",//requires grey health active setting

    "Bleed",//requires a bleed source, bleed is not considered elemental damage by the way
    "Elemental",//done
    "Acid",//done
    "Shock",//done
    "Fire",//done
  ]
  
  const existingTierList =  [//this is for my own personal record on what tiers are at what points in terms of custom functions, but it might be used later.
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