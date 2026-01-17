let modifiersCharacter = [
  {
    "name": "March7th_BPAbility_Shield",
    "realName": "Shield",
    "aim": "Buff",
    "desc": "Gains a Shield that absorbs DMG. While the Shield persists, enemy attacks will not reduce Shielded characters' HP.",
    "type": "Shield",
    "perma": false
  },
  {
    "name": "March7th_Eidolon2_Shield",
    "realName": "Shield",
    "aim": "Buff",
    "desc": "Gains a Shield that absorbs DMG. While the Shield persists, enemy attacks will not reduce Shielded characters' HP.",
    "type": "Shield",
    "perma": false
  },
  {
    "name": "March7th_Passive_CanAttack",
    "realName": "Counter",
    "aim": "Other",
    "desc": "Remaining Counter attempt(s).",
    "type": null,
    "perma": true
  },
  {
    "name": "DanHeng_TechniqueUsage_AttackRatioUp",
    "realName": "Splitting Spearhead",
    "aim": "Buff",
    "desc": "ATK +#1[i]%.",
    "type": "ATK Boost",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "DanHeng_PointB2_SpeedUp",
    "realName": "SPD Boost",
    "aim": "Buff",
    "desc": "SPD +#1[i]%.",
    "type": "SPD Boost",
    "perma": false,
    "params": [
      "MDF_PropertyRatio"
    ]
  },
  {
    "name": "DanHeng_BPAbility_SpeedDown",
    "realName": "Slow",
    "aim": "Debuff",
    "desc": "SPD -#1[i]%.",
    "type": "Slow",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "DanHeng_Passive_SelfBeingTargetEnhance",
    "realName": "Superiority of Reach",
    "aim": "Buff",
    "desc": "Wind RES PEN +#1[i]%.",
    "type": "Wind RES PEN",
    "perma": false,
    "params": [
      "DanHeng_PassivePene"
    ]
  },
  {
    "name": "DanHeng_Passive_BeginTargetEnhanceCD",
    "realName": "Superiority of Reach",
    "aim": "Other",
    "desc": "The effect of Talent \"Superiority of Reach\" cannot be triggered.",
    "type": null,
    "perma": true
  },
  {
    "name": "DanHeng_Passive_BeginTargetEnhance",
    "realName": "Superiority of Reach",
    "aim": "Other",
    "desc": "The effect of Talent \"Superiority of Reach\" can now be triggered.",
    "type": null,
    "perma": true
  },
  {
    "name": "DanHeng_Trace_AggroDown",
    "realName": "Hidden Dragon",
    "aim": "Buff",
    "desc": "Lowers the chances of being attacked by enemies.",
    "type": "Aggro Chance Reduction",
    "perma": true
  },
  {
    "name": "Himeko_Passive_PursuitCD",
    "realName": "Victory Rush",
    "aim": "Other",
    "desc": "Talent \"Victory Rush\" cannot be triggered.",
    "type": null,
    "perma": true
  },
  {
    "name": "Himeko_FireTakenRatio",
    "realName": "Fire Vulnerability",
    "aim": "Debuff",
    "desc": "Fire DMG taken +#1[i]%.",
    "type": "Fire Vulnerability",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Himeko_Passive_Pursuit",
    "realName": "Charge",
    "aim": "Other",
    "desc": "When fully charged, triggers Talent \"Victory Rush.\"",
    "type": null,
    "perma": true,
    "params": [
      "MDF_MaxLayer"
    ]
  },
  {
    "name": "Himeko_AbilityEidolon1_SpeedUP",
    "realName": "SPD Boost",
    "aim": "Buff",
    "desc": "SPD +#1[i]%.",
    "type": "SPD Boost",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Himeko_CriticalChance",
    "realName": "Benchmark",
    "aim": "Buff",
    "desc": "CRIT Rate +#1[i]%.",
    "type": "CRIT Rate Boost",
    "perma": true,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Welt_BPAbility_SpeedDown",
    "realName": "Slow",
    "aim": "Debuff",
    "desc": "SPD -#1[i]%.",
    "type": "Slow",
    "perma": false,
    "params": [
      "MDF_PropertyRatio"
    ]
  },
  {
    "name": "Welt_Eidolon1_Enhance",
    "realName": "Legacy of Honor",
    "aim": "Other",
    "desc": "Basic ATKs and Skills deal an extra hit.",
    "type": null,
    "perma": true
  },
  {
    "name": "Welt_Trace01_AllDamageTypeTakenRatio",
    "realName": "Vulnerability",
    "aim": "Debuff",
    "desc": "Increases DMG taken by #1[i]%.",
    "type": "Vulnerability",
    "perma": false,
    "params": [
      "MDF_PropertyRatio"
    ]
  },
  {
    "name": "Kafka_Passive_CanAttack",
    "realName": "Gentle but Cruel",
    "aim": "Other",
    "desc": "The effect of Talent \"Gentle but Cruel\" can now be triggered.",
    "type": null,
    "perma": true
  },
  {
    "name": "Kafka_Passive_CanAttackCD",
    "realName": "Gentle but Cruel",
    "aim": "Other",
    "desc": "The effect of Talent \"Gentle but Cruel\" cannot be triggered.",
    "type": null,
    "perma": true
  },
  {
    "name": "Kafka_PassiveDotDamage_Eidolon1",
    "realName": "DoT Vulnerability",
    "aim": "Debuff",
    "desc": "DoT taken +#1[i]%.",
    "type": "DoT Vulnerability",
    "perma": false,
    "params": [
      "MDF_DotRatio"
    ]
  },
  {
    "name": "Kafka_PassiveDotDamage",
    "realName": "DoT Vulnerability",
    "aim": "Debuff",
    "desc": "Each stack increases DoT taken by #1[f1]%, up to 2 stacks.",
    "type": "DoT Vulnerability",
    "perma": false,
    "params": [
      "SkillP01_P2_DotRatio"
    ]
  },
  {
    "name": "Kafka_Eidolon2_Sub",
    "realName": "Fortississimo",
    "aim": "Buff",
    "desc": "Increases DoT dealt by #1[i]%.",
    "type": null,
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Silwolf_Normal_Bug1",
    "realName": "Type-1 Bug",
    "aim": "Debuff",
    "desc": "ATK -#1[f1]%.",
    "type": "ATK Reduction",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Silwolf_Normal_Bug2",
    "realName": "Type-2 Bug",
    "aim": "Debuff",
    "desc": "DEF -#1[f1]%.",
    "type": "DEF Reduction",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Silwolf_Normal_Bug3",
    "realName": "Type-3 Bug",
    "aim": "Debuff",
    "desc": "SPD -#1[f1]%.",
    "type": "Slow",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Silwolf_BPAbility_WeakType",
    "realName": "Extra Weakness",
    "aim": "Debuff",
    "desc": "Extra Weakness implanted. Corresponding RES is lowered by #1[i]%.",
    "type": "Implant a Weakness",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Silwolf_BPAbility_WeakType_Extra",
    "realName": "Extra Weakness",
    "aim": "Debuff",
    "desc": "Extra Weakness implanted. Corresponding RES is lowered by #1[i]%.",
    "type": "Implant a Weakness",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Silwolf_BPAbility_AllDamageTypeResistanceDown",
    "realName": "All-Type RES Reduction",
    "aim": "Debuff",
    "desc": "All-Type DMG RES -#1[f1]%.",
    "type": "All-Type RES Reduction",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Silwolf_Eidolon2_StatusResistanceDown",
    "realName": "Effect RES Reduction",
    "aim": "Debuff",
    "desc": "Effect RES -#1[i]%.",
    "type": "Effect RES Reduction",
    "perma": true,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Silwolf_Ultimate_DefenceRatioDown",
    "realName": "DEF Reduction",
    "aim": "Debuff",
    "desc": "DEF -#1[f1]%.",
    "type": "DEF Reduction",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Silwolf_BPAbility_WeakType_Fire",
    "realName": "Extra Fire Weakness",
    "aim": "Debuff",
    "desc": "Extra Fire Weakness implanted. Fire RES -#1[i]%.",
    "type": null,
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Silwolf_BPAbility_WeakType_Ice",
    "realName": "Extra Ice Weakness",
    "aim": "Debuff",
    "desc": "Extra Ice Weakness implanted. Ice RES -#1[i]%.",
    "type": null,
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Silwolf_BPAbility_WeakType_Wind",
    "realName": "Extra Wind Weakness",
    "aim": "Debuff",
    "desc": "Extra Wind Weakness implanted. Wind RES -#1[i]%.",
    "type": null,
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Silwolf_BPAbility_WeakType_Physical",
    "realName": "Extra Physical Weakness",
    "aim": "Debuff",
    "desc": "Extra Physical Weakness implanted. Physical RES -#1[i]%.",
    "type": null,
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Silwolf_BPAbility_WeakType_Thunder",
    "realName": "Extra Lightning Weakness",
    "aim": "Debuff",
    "desc": "Extra Lightning Weakness implanted. Lightning RES -#1[i]%.",
    "type": null,
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Silwolf_BPAbility_WeakType_Quantum",
    "realName": "Extra Quantum Weakness",
    "aim": "Debuff",
    "desc": "Extra Quantum Weakness implanted. Quantum RES -#1[i]%.",
    "type": null,
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Silwolf_BPAbility_WeakType_Imaginary",
    "realName": "Extra Imaginary Weakness",
    "aim": "Debuff",
    "desc": "Extra Imaginary Weakness implanted. Imaginary RES -#1[i]%.",
    "type": null,
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Arlan_Passive_DamageUp",
    "realName": "Pain and Anger",
    "aim": "Buff",
    "desc": "Increases DMG dealt by #1[f1]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Arlan_PassiveAbility_UnDead",
    "realName": "Turn the Tables",
    "aim": "Buff",
    "desc": "When struck with a killing blow, instead of becoming downed, the character immediately restores HP equal to #1[i]% of Max HP.",
    "type": null,
    "perma": true,
    "params": [
      "Modifier_Arlan_00_P03_Ratio",
      "Modifier_Show_Count"
    ]
  },
  {
    "name": "BlockDamage_Count",
    "realName": "Repel",
    "aim": "Buff",
    "desc": "Nullifies all DMG received except for DoT until after being attacked.",
    "type": "Barrier",
    "perma": false
  },
  {
    "name": "Asta_Passive_Charge",
    "realName": "Charging",
    "aim": "Buff",
    "desc": "Each stack increases ATK by #1[f1]%, up to 5 stacks.",
    "type": "ATK Boost",
    "perma": true,
    "params": [
      "MDF_AttackAddedRatio",
      "MDF_DefenceAddedRatio"
    ]
  },
  {
    "name": "Asta_TeamAttackUP",
    "realName": "Charging",
    "aim": "Buff",
    "desc": "Each stack increases ATK by #1[f1]%, up to 5 stacks.",
    "type": "ATK Boost",
    "perma": true,
    "params": [
      "MDF_AttackAddedRatio"
    ]
  },
  {
    "name": "Asta_Ultimate_SpeedUP",
    "realName": "SPD Boost",
    "aim": "Buff",
    "desc": "SPD +#1[i].",
    "type": "SPD Boost",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Asta_Passive_SPRatioUp",
    "realName": "Energy Regeneration Rate Boost",
    "aim": "Buff",
    "desc": "Energy Regeneration Rate +#1[i]%.",
    "type": "Energy Regeneration Rate Boost",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Herta_TechniqueUsage_AttackRatioUp",
    "realName": "It Can Still Be Optimized",
    "aim": "Buff",
    "desc": "ATK +#1[i]%.",
    "type": "ATK Boost",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Herta_AbilityEidolon2_CriticalChance",
    "realName": "CRIT Rate Boost",
    "aim": "Buff",
    "desc": "Each stack increases CRIT rate by #1[i]%, up to 5 stacks.",
    "type": "CRIT Rate Boost",
    "perma": false,
    "params": [
      "MDF_CriticalChance"
    ]
  },
  {
    "name": "Herta_AbilityEidolon6_AttackUP",
    "realName": "ATK Boost",
    "aim": "Buff",
    "desc": "ATK +#1[i]%.",
    "type": "ATK Boost",
    "perma": false,
    "params": [
      "MDF_AttackAddRatio"
    ]
  },
  {
    "name": "Bronya_Ultimate_PowerUp",
    "realName": "The Belobog March",
    "aim": "Buff",
    "desc": "ATK +#1[i]% and CRIT DMG +#2[i]%.",
    "type": "ATK and CRIT DMG Boost",
    "perma": false,
    "params": [
      "MDF_AttackAddedRatio",
      "Bronya_CriticalDamage"
    ]
  },
  {
    "name": "Bronya_BPAbility_DamageUp",
    "realName": "DMG Boost",
    "aim": "Buff",
    "desc": "Increases DMG dealt by #1[i]%.",
    "type": "DMG Boost",
    "perma": false,
    "params": [
      "MDF_DamageAddedRatio"
    ]
  },
  {
    "name": "Bronya_BPAbility_SpeedUp",
    "realName": "SPD Boost",
    "aim": "Buff",
    "desc": "SPD +#1[i]%.",
    "type": "SPD Boost",
    "perma": false,
    "params": [
      "Bronya_SpeedUP_Ratio"
    ]
  },
  {
    "name": "Bronya_TechniqueUsage_AttackRatioUp",
    "realName": "ATK Boost",
    "aim": "Buff",
    "desc": "ATK +#1[i]%.",
    "type": "ATK Boost",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Bronya_Eidolon1_CoolDown",
    "realName": "Hone Your Strength",
    "aim": "Other",
    "desc": "Hone Your Strength effect cannot be triggered.",
    "type": null,
    "perma": true
  },
  {
    "name": "Bronya_Tree02_DefenceUp",
    "realName": "Battlefield",
    "aim": "Buff",
    "desc": "DEF increases by #1[i]%",
    "type": null,
    "perma": false,
    "params": [
      "MDF_DefenceAddedRatio"
    ]
  },
  {
    "name": "Seele_BPAbility_SpeedUp",
    "realName": "SPD Boost",
    "aim": "Buff",
    "desc": "SPD +#1[i]%.",
    "type": "SPD Boost",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Seele_Passive_DamageUp",
    "realName": "Amplification",
    "aim": "Buff",
    "desc": "Increases DMG dealt by #1[i]%.",
    "type": "DMG Boost",
    "perma": false,
    "params": [
      "seele_dmg_percent",
      "MDF_Penetrate"
    ]
  },
  {
    "name": "Seele_BPAbility_SpeedUpEidolon2",
    "realName": "SPD Boost",
    "aim": "Buff",
    "desc": "Each stack increases SPD by #1[i]%, up to 2 stacks.",
    "type": "SPD Boost",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Seele_Eidolon6_Flag",
    "realName": "Butterfly Flurry",
    "aim": "Debuff",
    "desc": "On a hit, receives an extra Quantum DMG from Seele.",
    "type": "Butterfly Flurry",
    "perma": false
  },
  {
    "name": "Local_Seele_PassiveActionModifier",
    "realName": "Resurgence",
    "aim": "Other",
    "desc": "Currently in the extra turn provided by \"Resurgence\".",
    "type": null,
    "perma": true
  },
  {
    "name": "Seele_Trace_AggroDown",
    "realName": "Nightshade",
    "aim": "Buff",
    "desc": "Lowers the chances of being attacked by enemies.",
    "type": "Aggro Chance Reduction",
    "perma": true
  },
  {
    "name": "Serval_Eidolon6_Check",
    "realName": "DMG Boost",
    "aim": "Buff",
    "desc": "Roaring Thunderclap and Lightning Flash deal #1[i]% more DMG.",
    "type": "DMG Boost",
    "perma": false,
    "params": [
      "MAvatar_Serval_00_Rank06_ShowRatio"
    ]
  },
  {
    "name": "Serval_Tree03_AttackRatioUp",
    "realName": "ATK Boost",
    "aim": "Buff",
    "desc": "ATK +#1[i]%.",
    "type": "ATK Boost",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Gepard_Ultimate_Shield",
    "realName": "Shield",
    "aim": "Buff",
    "desc": "Gains a Shield that absorbs DMG. While the Shield persists, enemy attacks will not reduce Shielded characters' HP.",
    "type": "Shield",
    "perma": false
  },
  {
    "name": "Gepard_PassiveAbility_UnDead",
    "realName": "Unyielding Will",
    "aim": "Buff",
    "desc": "When struck with a killing blow, instead of becoming downed, Gepard immediately restores HP equal to #1[i]% of his Max HP.",
    "type": null,
    "perma": true,
    "params": [
      "Modifier_Gepard_00_Ratio",
      "Modifier_Show_Count"
    ]
  },
  {
    "name": "Gepard_TechniqueUsage_DefenceDeltaUp",
    "realName": "DEF Boost",
    "aim": "Buff",
    "desc": "DEF +#1[i].",
    "type": "DEF Boost",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Gepard_Eidolon1_Shield",
    "realName": "Shield",
    "aim": "Buff",
    "desc": "Gains a Shield that absorbs DMG. While the Shield persists, enemy attacks will not reduce Shielded characters' HP.",
    "type": "Shield",
    "perma": false
  },
  {
    "name": "Gepard_Eidolon2_SpeedDown",
    "realName": "Slow",
    "aim": "Debuff",
    "desc": "SPD -#1[i]%.",
    "type": "Slow",
    "perma": false,
    "params": [
      "MDF_PropertyRaito"
    ]
  },
  {
    "name": "Gepard_Eidolon4_AddStatusResistance",
    "realName": "Effect RES Boost",
    "aim": "Buff",
    "desc": "Effect RES +#1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_AddStatusResistance"
    ]
  },
  {
    "name": "Gepard_Eidolon6_AddCritical",
    "realName": "CRIT Rate Boost",
    "aim": "Buff",
    "desc": "CRIT Rate +#1[i]%.",
    "type": "CRIT Rate Boost",
    "perma": false,
    "params": [
      "MDF_AddCriticalRatio"
    ]
  },
  {
    "name": "Gepard_Eidolon6_AddSpeed",
    "realName": "SPD Boost",
    "aim": "Buff",
    "desc": "SPD +#1[i].",
    "type": "SPD Boost",
    "perma": false,
    "params": [
      "MDF_AddSpeed"
    ]
  },
  {
    "name": "Natasha_Passive_FatigueRatio",
    "realName": "Weaken",
    "aim": "Debuff",
    "desc": "Deals #1[i]% less DMG to your team.",
    "type": "Weaken",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Natasha_BPAbility_DefenceRatioUp",
    "realName": "DEF Boost",
    "aim": "Buff",
    "desc": "DEF increases by #1[i]%",
    "type": "DEF Boost",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Natasha_Eidolon6_AddDamageAllTime",
    "realName": "DMG Boost",
    "aim": "Buff",
    "desc": "Increases DMG dealt by #1[i]%.",
    "type": "DMG Boost",
    "perma": false,
    "params": [
      "Modifier_Natasha_00_DamageAddedRatioAllTime"
    ]
  },
  {
    "name": "Natasha_Eidolon2_HOT_HPByMaxHP",
    "realName": "Healing Over Time",
    "aim": "Buff",
    "desc": "Restores a certain amount of HP at the start of each turn.",
    "type": "Healing Over Time",
    "perma": false
  },
  {
    "name": "Natasha_HOT_HPByMaxHP",
    "realName": "Healing Over Time",
    "aim": "Buff",
    "desc": "Restores a certain amount of HP at the start of each turn.",
    "type": "Healing Over Time",
    "perma": false
  },
  {
    "name": "Pela_Ultimate_DroneAnalysis",
    "realName": "Exposed",
    "aim": "Debuff",
    "desc": "DEF -#1[i]%.",
    "type": "DEF Reduction",
    "perma": false,
    "params": [
      "MDF_DefenceDownRatio"
    ]
  },
  {
    "name": "Pela_AbilityEidolon4_StanceBreakTaken",
    "realName": "Ravage",
    "aim": "Debuff",
    "desc": "DMG taken on Toughness +#1[i]%.",
    "type": "Toughness Vulnerability",
    "perma": false,
    "params": [
      "MDF_StanceBreakTakenRatio"
    ]
  },
  {
    "name": "Pela_TechniqueUsage_DefenceRatioDown",
    "realName": "DEF Reduction",
    "aim": "Debuff",
    "desc": "DEF -#1[i]%.",
    "type": "DEF Reduction",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Pela_Trace03_DamageAddedRatio",
    "realName": "Wipe Out",
    "aim": "Buff",
    "desc": "Increases the next attack's DMG by #1[i]%.",
    "type": "DMG Boost",
    "perma": false,
    "params": [
      "MDF_Pela_SkillTree03_DamageAddedRatio"
    ]
  },
  {
    "name": "Pela_AbilityEidolon2_AddSpeedRatio",
    "realName": "SPD Boost",
    "aim": "Buff",
    "desc": "SPD +#1[i]%.",
    "type": "SPD Boost",
    "perma": false,
    "params": [
      "MDF_Pela_SkillRank02_P1_AddSpeedRatio"
    ]
  },
  {
    "name": "Pela_AbilityEidolon4_IceResistanceDown",
    "realName": "Ice RES Reduction",
    "aim": "Debuff",
    "desc": "Ice RES -#1[i]%.",
    "type": "Ice RES Reduction",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Klara_Ultimate_WarriorMode",
    "realName": "Promise, Not Command",
    "aim": "Buff",
    "desc": "Receives less DMG with a higher chance to be attacked.",
    "type": "DMG Mitigation",
    "perma": false,
    "params": [
      "MDF_AggroAddedRatio"
    ]
  },
  {
    "name": "Klara_BPAbility_Revenge",
    "realName": "Mark of Counter",
    "aim": "Other",
    "desc": "The target is Marked by Svarog.",
    "type": null,
    "perma": true
  },
  {
    "name": "Klara_Passive_DamageReduce",
    "realName": "Guardian",
    "aim": "Buff",
    "desc": "DMG taken -#1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Klara_Eidolon4_DamageReduce",
    "realName": "DMG Mitigation",
    "aim": "Buff",
    "desc": "DMG taken -#1[i]%.",
    "type": null,
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Klara_TechniqueUsage_AggroUP",
    "realName": "A Small Price for Victory",
    "aim": "Buff",
    "desc": "Higher chance to be attacked.",
    "type": null,
    "perma": false
  },
  {
    "name": "Klara_PassiveATKCount",
    "realName": "Enhanced Counter",
    "aim": "Buff",
    "desc": "Teammates being attacked will also trigger Counter, for which the DMG multiplier is also increased.",
    "type": null,
    "perma": true
  },
  {
    "name": "Klara_Eidolon2_AttackUP",
    "realName": "ATK Boost",
    "aim": "Buff",
    "desc": "ATK +#1[i]%.",
    "type": "ATK Boost",
    "perma": false,
    "params": [
      "MDF_AttackUP"
    ]
  },
  {
    "name": "Sampo_Ultimate_DOTTakenUp",
    "realName": "DoT Vulnerability",
    "aim": "Debuff",
    "desc": "DoT taken +#1[i]%.",
    "type": "DoT Vulnerability",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Hook_BPAbilityAlter_Enable",
    "realName": "Enhanced Skill",
    "aim": "Other",
    "desc": "Enhances the next Skill and changes it to a Blast attack.",
    "type": "Enhanced Skill",
    "perma": true
  },
  {
    "name": "Lynx_HOT_HealByMaxHp",
    "realName": "Healing Over Time",
    "aim": "Buff",
    "desc": "Restores a certain amount of HP at the start of each turn.",
    "type": "Healing Over Time",
    "perma": false
  },
  {
    "name": "Lynx_Tree03_AddSpeedRatio",
    "realName": "SPD Boost",
    "aim": "Buff",
    "desc": "Increases SPD by #1[i]%.",
    "type": "SPD Boost",
    "perma": false,
    "params": [
      "MDF_Lynx_PointB1_AddSpeedRatio"
    ]
  },
  {
    "name": "Lynx_Eidolon4_AddAttackRatio",
    "realName": "ATK Boost",
    "aim": "Buff",
    "desc": "Increases ATK by #1[i].",
    "type": "ATK Boost",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Lynx_HPAddedRatio01",
    "realName": "Survival Response",
    "aim": "Buff",
    "desc": "Increases Max HP by #1[i].",
    "type": "Max HP Boost",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Lynx_HPAddedRatio02",
    "realName": "Survival Response",
    "aim": "Buff",
    "desc": "Increases Max HP by #1[i] and Effect RES by #2[i]%.",
    "type": "Max HP Boost",
    "perma": false,
    "params": [
      "MDF_PropertyValue",
      "MDF_AddStatusResistance"
    ]
  },
  {
    "name": "Lynx_Eidolon2_Resist",
    "realName": "Debuff RES",
    "aim": "Buff",
    "desc": "Resists 1 debuff.",
    "type": null,
    "perma": true
  },
  {
    "name": "Luka_Eidolon1_Sub",
    "realName": "Fighting Endlessly",
    "aim": "Buff",
    "desc": "Increases DMG dealt by #1[i]%.",
    "type": "DMG Boost",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Luka_Eidolon4",
    "realName": "Never Turning Back",
    "aim": "Buff",
    "desc": "ATK +#1[i]%.",
    "type": "ATK Boost",
    "perma": false,
    "params": [
      "MDF_AttackAdded"
    ]
  },
  {
    "name": "Luka_AllDamageTypeTakenRatio",
    "realName": "Vulnerability",
    "aim": "Debuff",
    "desc": "Increases DMG taken by #1[f1]%.",
    "type": "Vulnerability",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Luka_DOT_Tear",
    "realName": "Bleed",
    "aim": "Debuff",
    "desc": "Takes Physical DMG at the start of each turn for a certain number of turns.",
    "type": "Bleed",
    "perma": false
  },
  {
    "name": "Topaz_UltraEnhance",
    "realName": "Windfall Bonanza!",
    "aim": "Buff",
    "desc": "Numby's DMG multiplier increases by #1[i]%, CRIT DMG increases by #2[i]%. When enemies with Proof of Debt receive attacks from allies' Basic ATK, Skill, or Ultimate, Numby's action is Advanced Forward by #3[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "Skill03_P1_BEDamageRatio",
      "Skill03_P2_CriticalChance",
      "Skill03_P3_DelayRatio",
      "Rank06_P2_PenRatio"
    ]
  },
  {
    "name": "Topaz_BETargetTag",
    "realName": "Proof of Debt",
    "aim": "Debuff",
    "desc": "Increases Follow-Up ATK DMG received by #1[i]%. Numby will target this unit as its attack target.",
    "type": "Proof of Debt",
    "perma": true,
    "params": [
      "MDF_PropertyValue1_DamageAdd"
    ]
  },
  {
    "name": "Topaz_BETargetTag_CriticalDamageUp",
    "realName": "Debtor",
    "aim": "Debuff",
    "desc": "Increases CRIT DMG received from Follow-Up ATKs by #1[i]%, stacking up to #2[i] time(s).",
    "type": "Debtor",
    "perma": true,
    "params": [
      "MDF_PropertyValue1_InsertCriticalDamageAddRatio",
      "MDF_PropertyValue2_InsertCriticalDamageAddMaxLayer"
    ]
  },
  {
    "name": "Topaz_BE_UltraEnhance_Text",
    "realName": "unnamed1",
    "aim": "Buff",
    "desc": null,
    "type": "DMG multiplier, CRIT DMG Boost",
    "perma": true
  },
  {
    "name": "QingQue_Passive_Hu",
    "realName": "Hidden Hand",
    "aim": "Buff",
    "desc": "Basic ATK is Enhanced and increases ATK by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "QingQue_BPAbility_DamageUp",
    "realName": "DMG Boost",
    "aim": "Buff",
    "desc": "Each stack increases DMG by #1[i]%, up to 4 stacks.",
    "type": null,
    "perma": false,
    "params": [
      "MDF_DamageAddedRatio"
    ]
  },
  {
    "name": "Qingque_SpeedUpPointB3",
    "realName": "SPD Boost",
    "aim": "Buff",
    "desc": "SPD +#1[i]%.",
    "type": "SPD Boost",
    "perma": false,
    "params": [
      "MDF_SpeedUp"
    ]
  },
  {
    "name": "QingQue_Eidolon4_ATK",
    "realName": "Self-Sufficer",
    "aim": "Buff",
    "desc": "Launches 1 Follow-Up ATK immediately after using Basic ATK or Enhanced Basic ATK on an enemy, dealing Quantum DMG equal to 100% of Basic ATK DMG or Enhanced Basic ATK DMG.",
    "type": null,
    "perma": true
  },
  {
    "name": "MWTingYun_BPAbility_AttackDelta",
    "realName": "Benediction",
    "aim": "Buff",
    "desc": "ATK +#1[i].",
    "type": "ATK Boost",
    "perma": false,
    "params": [
      "MDF_AttackDelta"
    ]
  },
  {
    "name": "TingYun_Ability03DamageUp",
    "realName": "Amidst the Rejoicing Clouds",
    "aim": "Buff",
    "desc": "Increases DMG dealt by #1[i]%.",
    "type": "DMG Boost",
    "perma": false,
    "params": [
      "MDF_DamageAddedRatio"
    ]
  },
  {
    "name": "Tingyun_Trace_B1_SpeedUp",
    "realName": "Nourished Joviality",
    "aim": "Buff",
    "desc": "SPD +#1[i]%.",
    "type": "SPD Boost",
    "perma": false,
    "params": [
      "Tingyun_SpeedUP_Ratio"
    ]
  },
  {
    "name": "Tingyun_Eidolon1_SpeedUp",
    "realName": "SPD Boost",
    "aim": "Buff",
    "desc": "SPD +#1[i]%.",
    "type": "SPD Boost",
    "perma": false,
    "params": [
      "MDF_Rank01_SpeedUp_01"
    ]
  },
  {
    "name": "Luocha_Ability02_Shield",
    "realName": "Shield",
    "aim": "Buff",
    "desc": "Gains a Shield that absorbs DMG. While the Shield persists, enemy attacks will not reduce Shielded characters' HP.",
    "type": "Shield",
    "perma": false
  },
  {
    "name": "Luocha_Passive01Modifier",
    "realName": "Abyss Flower",
    "aim": "Other",
    "desc": "When the Abyss Flower is fully stacked, Luocha can consume all the stacks to deploy a Zone against the enemy.",
    "type": null,
    "perma": true
  },
  {
    "name": "Luocha_Passive01_HealHPSelf",
    "realName": "Cycle of Life",
    "aim": "Other",
    "desc": "After using an attack on an enemy, restores HP to self.",
    "type": null,
    "perma": true
  },
  {
    "name": "Luocha_Passive01_HealHPCD",
    "realName": "Prayer of Abyss Flower",
    "aim": "Other",
    "desc": "Skill effect auto-trigger is on cooldown.",
    "type": null,
    "perma": true
  },
  {
    "name": "Luocha_Eidolon4_Fatigue",
    "realName": "Weaken",
    "aim": "Debuff",
    "desc": "Deals #1[i]% less DMG.",
    "type": "Weaken",
    "perma": true,
    "params": [
      "MDF_PropertyRatio"
    ]
  },
  {
    "name": "Luocha_Eidolon1_ATKUp",
    "realName": "Ablution of the Quick",
    "aim": "Buff",
    "desc": "ATK +#1[i]%.",
    "type": "ATK Boost",
    "perma": true,
    "params": [
      "MDF_PropertyRatio"
    ]
  },
  {
    "name": "Luocha_Eidolon6_AllDamageTypeResistance",
    "realName": "Reunion With the Dust",
    "aim": "Debuff",
    "desc": "All-Type DMG RES -#1[i]%.",
    "type": "All-Type RES Reduction",
    "perma": false,
    "params": [
      "MDF_PropertyRatio"
    ]
  },
  {
    "name": "Luocha_Passive01_HealHP",
    "realName": "Cycle of Life",
    "aim": "Other",
    "desc": "After using an attack on an enemy, restores HP to self.",
    "type": null,
    "perma": true
  },
  {
    "name": "JingYuan_BattleEvent_ATKCount",
    "realName": "Prana Extirpated",
    "aim": "Other",
    "desc": "Lightning-Lord's Hits Per Action.",
    "type": null,
    "perma": true
  },
  {
    "name": "JingYuan_BattleEvent_UltraATKCount",
    "realName": "Lightbringer",
    "aim": "Other",
    "desc": "Lightning-Lord's Enhanced ATK count.",
    "type": null,
    "perma": true
  },
  {
    "name": "JingYuan_Eidolon2_DamageAddedRatio",
    "realName": "Dharma Corpora",
    "aim": "Buff",
    "desc": "Jing Yuan's Basic ATK, Skill, and Ultimate deal #1[i]% increased DMG.",
    "type": null,
    "perma": false,
    "params": [
      "MDF_DamageAddedRatio"
    ]
  },
  {
    "name": "JingYuan_Tree03_CriticalChanceUp",
    "realName": "CRIT Rate Boost",
    "aim": "Buff",
    "desc": "CRIT Rate +#1[i]%.",
    "type": "CRIT Rate Boost",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "MWRen_Attack_Transfer",
    "realName": "Hellscape",
    "aim": "Other",
    "desc": "Basic ATK \"Shard Sword\" is enhanced, becoming \"Forest of Swords\" and dealing Blast DMG.",
    "type": "Enhanced Basic ATK",
    "perma": true
  },
  {
    "name": "MWRen_Qi",
    "realName": "Charge",
    "aim": "Other",
    "desc": "At maximum Charge stacks, expends all stacks and immediately deals 1 instance of Follow-Up ATK to all enemies.",
    "type": null,
    "perma": true
  },
  {
    "name": "MWRen_Attack",
    "realName": "DMG Boost",
    "aim": "Buff",
    "desc": "Increases DMG dealt by #1[i]%.",
    "type": "DMG Boost",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "MWRen_Trace01",
    "realName": "Vita Infinita",
    "aim": "Buff",
    "desc": "Incoming Healing +#1[i]%.",
    "type": "Outgoing Healing Boost",
    "perma": true,
    "params": [
      "MDF_HealEnhanceRatio"
    ]
  },
  {
    "name": "MWRen_Eidolon4",
    "realName": "Heal All Bones",
    "aim": "Buff",
    "desc": "Max HP +#1[i]%.",
    "type": "Max HP Boost",
    "perma": true,
    "params": [
      "MDF_HPIncrease"
    ]
  },
  {
    "name": "MWRen_Eidolon2",
    "realName": "Grievous Penitence",
    "aim": "Buff",
    "desc": "CRIT Rate +#1[i]%.",
    "type": "CRIT Rate Boost",
    "perma": false,
    "params": [
      "MDF_CriticalIncrease"
    ]
  },
  {
    "name": "Ren_Eidolon6_CountDown",
    "realName": "Furious Resurrection",
    "aim": "Other",
    "desc": "Temporarily unable to return to the battlefield.",
    "type": "Furious Resurrection",
    "perma": true
  },
  {
    "name": "MWRen_Ability03_Listen",
    "realName": "Death Sentence",
    "aim": "Other",
    "desc": "HP Lost: #1[i]",
    "type": null,
    "perma": true,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Sushang_UltraBonus",
    "realName": "Dawn Herald",
    "aim": "Buff",
    "desc": "Increases ATK by #1[i]% and receives 2 extra chances to trigger Sword Stance when using Skill.",
    "type": "ATK Boost",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Sushang_P01",
    "realName": "Dancing Blade",
    "aim": "Buff",
    "desc": "SPD +#1[i]%.",
    "type": "SPD Boost",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Sushang_Eidolon2_Bonus",
    "realName": "Refine in Toil",
    "aim": "Buff",
    "desc": "DMG taken -#1[i]%.",
    "type": "DMG Mitigation",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Sushang_PointB2_Bonus",
    "realName": "Riposte",
    "aim": "Buff",
    "desc": "Increases Sword Stance DMG by #1[i]% for each stack, up to #2[i] stack(s).",
    "type": null,
    "perma": true,
    "params": [
      "MDF_PropertyValue",
      "MDF_Max_Layer"
    ]
  },
  {
    "name": "Sushang_P01_Eidolon6",
    "realName": "Dancing Blade",
    "aim": "Buff",
    "desc": "Each stack increases SPD by #1[i]%.",
    "type": "SPD Boost",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Sushang_Trace_AggroDown",
    "realName": "Guileless",
    "aim": "Buff",
    "desc": "Lowers the chances of being attacked by enemies.",
    "type": "Aggro Chance Reduction",
    "perma": true
  },
  {
    "name": "Yukong_Flower_ATK",
    "realName": "Roaring Bowstrings",
    "aim": "Buff",
    "desc": "ATK +#1[i]%.",
    "type": "ATK Boost",
    "perma": true,
    "params": [
      "MDF_RealAttack"
    ]
  },
  {
    "name": "Yukong_Flower_ATK_Crit",
    "realName": "Roaring Bowstrings",
    "aim": "Buff",
    "desc": "Increases ATK by #1[i]%, CRIT Rate by #2[i]%, and CRIT DMG by #3[i]%.",
    "type": "ATK, CRIT Rate, and CRIT DMG Boost",
    "perma": true,
    "params": [
      "MDF_RealAttack",
      "MDF_CritChanceUp",
      "MDF_CritDamageUpRatio"
    ]
  },
  {
    "name": "Yukong_Passive_Bonus",
    "realName": "Seven Layers, One Arrow",
    "aim": "Buff",
    "desc": "Basic ATK deals additional Imaginary DMG equal to #1[i]% of Yukong's ATK, and increases Toughness Reduction by #2[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_AddDamagePercentage",
      "MDF_StanceBreakAddedRatio"
    ]
  },
  {
    "name": "Yukong_Point01_Resist",
    "realName": "Debuff Block",
    "aim": "Buff",
    "desc": "Blocks 1 debuff.",
    "type": null,
    "perma": true
  },
  {
    "name": "Yukong_Eidolon1_SpeedUp",
    "realName": "Aerial Marshal",
    "aim": "Buff",
    "desc": "SPD +#1[i]%.",
    "type": "SPD Boost",
    "perma": false,
    "params": [
      "MDF_SpeedUpRatio"
    ]
  },
  {
    "name": "Yukong_Eidolon4_Flower_Bonus",
    "realName": "Zephyrean Echoes",
    "aim": "Buff",
    "desc": "Increases DMG dealt by #1[i]%.",
    "type": "DMG Boost",
    "perma": true,
    "params": [
      "MDF_AddedRatio"
    ]
  },
  {
    "name": "FuXuan_JianZhi",
    "realName": "Knowledge",
    "aim": "Buff",
    "desc": "Max HP +#1[i], CRIT Rate +#2[f1]%.",
    "type": "Increases Max HP and CRIT Rate",
    "perma": true,
    "params": [
      "MDF_MaxHPUpRatio",
      "MDF_CritChanceUpRatio"
    ]
  },
  {
    "name": "FuXuan_HitDamageSplit",
    "realName": "Matrix of Prescience",
    "aim": "Buff",
    "desc": "Distribute to Fu Xuan #1[i]% of the DMG this unit receives (before this DMG is mitigated by any Shields).",
    "type": null,
    "perma": true,
    "params": [
      "MDF_SplitPercentage",
      "MDF_DamageResistanceRatio"
    ]
  },
  {
    "name": "FuXuan_DamageReduce",
    "realName": "Misfortune Avoidance",
    "aim": "Buff",
    "desc": "Reduces DMG taken by #1[f1]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_DamageResistanceRatio"
    ]
  },
  {
    "name": "FuXuan_ListenLifeTime",
    "realName": "Matrix of Prescience",
    "aim": "Buff",
    "desc": "Receive DMG distributed by other teammates.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_DamageResistanceRatio"
    ]
  },
  {
    "name": "FuXuan_Eidolon2",
    "realName": "Optimus Felix",
    "aim": "Buff",
    "desc": "When struck with a killing blow, instead of becoming downed, the character immediately restores HP equal to #1[i]% of Max HP.",
    "type": "Optimus Felix",
    "perma": true,
    "params": [
      "MDF_HealPercentage"
    ]
  },
  {
    "name": "FuXuan_Eidolon6",
    "realName": "Total HP lost",
    "aim": "Other",
    "desc": "Allies have lost #1[i] HP in total.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_FinalDamage"
    ]
  },
  {
    "name": "FuXuan_JianZhi_Eidolon1",
    "realName": "Knowledge",
    "aim": "Buff",
    "desc": "Increases Max HP by #1[i], CRIT Rate by #2[f1]%, and CRIT DMG by #3[i]%.",
    "type": "Increases Max HP, CRIT Rate, and CRIT DMG",
    "perma": true,
    "params": [
      "MDF_MaxHPUpRatio",
      "MDF_CritChanceUpRatio",
      "MDF_CritDamageUpRatio"
    ]
  },
  {
    "name": "FuXuan_Tree02",
    "realName": "Liuren, the Sexagenary",
    "aim": "Buff",
    "desc": "This status can be consumed to resist Crowd Control debuffs.",
    "type": "Resist Crowd Control debuffs",
    "perma": true
  },
  {
    "name": "Yanqing_FrozenMark",
    "realName": "Soulsteel Sync",
    "aim": "Buff",
    "desc": "Increases CRIT Rate by #1[f1]% and CRIT DMG by #2[i]%.",
    "type": "CRIT Rate Boost",
    "perma": false,
    "params": [
      "MDF_CriticalBoost",
      "MDF_ALLCriticalDamage",
      "MDF_StatusResistance"
    ]
  },
  {
    "name": "Yanqing_Ability03_Bonus",
    "realName": "Amidst the Raining Bliss",
    "aim": "Buff",
    "desc": "CRIT Rate +#1[i]%.",
    "type": "CRIT Rate Boost",
    "perma": false,
    "params": [
      "MDF_CriticalBoost"
    ]
  },
  {
    "name": "Yanqing_Eidolon4_IcePenetrate",
    "realName": "Searing Sting",
    "aim": "Buff",
    "desc": "Ice RES PEN +#1[i]%.",
    "type": "Ice RES PEN",
    "perma": true,
    "params": [
      "MDF_IcePenetrate"
    ]
  },
  {
    "name": "Yanqing_TechniqueUsage_AttackRatioUp",
    "realName": "The One True Sword",
    "aim": "Buff",
    "desc": "Increases DMG dealt to enemies whose current HP percentage is higher than or equal to #1[i]% by #2[i]%.",
    "type": "DMG Boost",
    "perma": true,
    "params": [
      "MDF_HPRatio",
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "M_Yanqing_Tree03SpeedUP",
    "realName": "SPD Boost",
    "aim": "Buff",
    "desc": "SPD +#1[i]%.",
    "type": "SPD Boost",
    "perma": false,
    "params": [
      "MDF_SpeedValue"
    ]
  },
  {
    "name": "Guinaifen_Oil_Sub",
    "realName": "Firekiss",
    "aim": "Debuff",
    "desc": "Received DMG increases by #1[f1]%.",
    "type": "Firekiss",
    "perma": true,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Guinaifen_Eidolon1_StatusResistance",
    "realName": "Slurping Noodles During Handstand",
    "aim": "Debuff",
    "desc": "Effect RES decreases by #1[i]%.",
    "type": "Effect RES Reduction",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Bailu_Heal_Mark",
    "realName": "Invigoration",
    "aim": "Buff",
    "desc": "Restores HP when attacked.",
    "type": "Invigoration",
    "perma": true
  },
  {
    "name": "Bailu_PointB1_HPIncrease",
    "realName": "Qihuang Analects",
    "aim": "Buff",
    "desc": "Max HP +#1[i]%.",
    "type": "Max HP Boost",
    "perma": true,
    "params": [
      "MDF_HPIncrease"
    ]
  },
  {
    "name": "Bailu_PointB3",
    "realName": "Aquatic Benediction",
    "aim": "Buff",
    "desc": "Reduces DMG taken by #1[i]%.",
    "type": "DMG Mitigation",
    "perma": true,
    "params": [
      "MDF_DamageResistance"
    ]
  },
  {
    "name": "Bailu_Eidolon2",
    "realName": "Sylphic Slumber",
    "aim": "Buff",
    "desc": "Increases Outgoing Healing by #1[i]%.",
    "type": "Outgoing Healing Boost",
    "perma": true,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Bailu_Eidolon4_AttackUp",
    "realName": "Evil Excision",
    "aim": "Buff",
    "desc": "Increases DMG dealt by #1[i]%.",
    "type": "DMG Boost",
    "perma": true,
    "params": [
      "MDF_AttackUpRatio"
    ]
  },
  {
    "name": "MWJingliu_Attack_Transfer_AddATK",
    "realName": "Spectral Transmigration",
    "aim": "Buff",
    "desc": "Increases ATK by #1[i].",
    "type": "ATK Boost",
    "perma": true,
    "params": [
      "MDF_AttackDelta1"
    ]
  },
  {
    "name": "Jingliu_Trace_B2_SpeedUp",
    "realName": "Sword Champion",
    "aim": "Buff",
    "desc": "Increases SPD by #1[i]%.",
    "type": "SPD Boost",
    "perma": true,
    "params": [
      "SkillTree_PointB2_P1_SpeedUp"
    ]
  },
  {
    "name": "MWJingliu_PointB3",
    "realName": "Frost Wraith",
    "aim": "Buff",
    "desc": "Ultimate deals #1[i]% more DMG.",
    "type": "DMG Boost",
    "perma": true,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Jingliu_Trace_B1_Resist",
    "realName": "Deathrealm",
    "aim": "Buff",
    "desc": "Increases Effect RES by #1[i]%.",
    "type": "Effect RES Boost",
    "perma": true,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Jingliu_Eidolon6",
    "realName": "Eclipse Hollows Corporeal Husk",
    "aim": "Buff",
    "desc": "CRIT DMG +#1[i]%.",
    "type": "CRIT DMG Boost",
    "perma": true,
    "params": [
      "MDF_CriticalDamage"
    ]
  },
  {
    "name": "Jingliu_Eidolon1_CriticalDamage",
    "realName": "Moon Crashes Tianguan Gate",
    "aim": "Buff",
    "desc": "CRIT DMG +#1[i]%.",
    "type": "CRIT DMG Boost",
    "perma": true,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Jingliu_Passive_CriticalUp",
    "realName": "Spectral Transmigration",
    "aim": "Buff",
    "desc": "CRIT Rate +#1[i]%.",
    "type": "CRIT Rate Boost",
    "perma": true,
    "params": [
      "MDF_CriticalRatio"
    ]
  },
  {
    "name": "Jingliu_Eidolon2",
    "realName": "Crescent Shadows Qixing Dipper",
    "aim": "Buff",
    "desc": "Increases DMG dealt by the next Enhanced Skill by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "DanHengIL_Ability02_CriticalDamage",
    "realName": "Outroar",
    "aim": "Buff",
    "desc": "Each stack increases CRIT DMG dealt by #1[f1]%, up to #2[i] stack(s).",
    "type": null,
    "perma": false,
    "params": [
      "MDF_AddCriticalDamage",
      "MDF_MaxLayer"
    ]
  },
  {
    "name": "DanHengIL_BPCostChange",
    "realName": "Squama Sacrosancta",
    "aim": "Other",
    "desc": "Can be used to offset Dan Heng • Imbibitor Lunae's consumption of skill points. A maximum of #1[i] Squama Sacrosancta can be possessed at any given time. Consuming Squama Sacrosancta is considered equivalent to consuming Skill Points.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_MaxLayer"
    ]
  },
  {
    "name": "DanHengIL_AllDamageTypeAddedRatio",
    "realName": "Righteous Heart",
    "aim": "Buff",
    "desc": "Each stack increases DMG dealt by #1[f1]%, up to #2[i] stack(s).",
    "type": null,
    "perma": false,
    "params": [
      "MDF_PropertyValue",
      "MDF_MaxLayer"
    ]
  },
  {
    "name": "DanHengIL_Eidolon6_ImaginaryPenetrate",
    "realName": "Reign, Returned",
    "aim": "Buff",
    "desc": "Increase Imaginary RES PEN by #1[i]% for this character's next Fulgurant Leap attack.",
    "type": "Imaginary RES PEN",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "DanHengIL_Eidolon6CD",
    "realName": "Reign, Returned",
    "aim": "Other",
    "desc": "The \"Reign, Returned\" effect cannot be triggered yet.",
    "type": null,
    "perma": true
  },
  {
    "name": "Xueyi_Passive_Trace03",
    "realName": "Perspicacious Mainframe",
    "aim": "Other",
    "desc": "#1[i] overflowing Karma stacks.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_Tree03Layer"
    ]
  },
  {
    "name": "Xueyi_BP_Passive01",
    "realName": "Karma",
    "aim": "Other",
    "desc": "When \"Karma\" is fully stacked, consume all \"Karma\" stacks and immediately use 1 Follow-Up ATK against enemies.",
    "type": null,
    "perma": true
  },
  {
    "name": "Xueyi_AbilityEidolon4",
    "realName": "Break Effect Boost",
    "aim": "Buff",
    "desc": "Increases Break Effect by #1[i]%.",
    "type": "Break Effect Boost",
    "perma": false,
    "params": [
      "MDF_SkillRank04_BreakDamageAttackRatio"
    ]
  },
  {
    "name": "WHanya_Ability03Bonus",
    "realName": "Edict",
    "aim": "Buff",
    "desc": "Increases ATK by #1[i]% and SPD by #2[i] points.",
    "type": "ATK & SPD Boost",
    "perma": true,
    "params": [
      "MDF_AttackDelta",
      "MDF_Speed"
    ]
  },
  {
    "name": "WHanya_BpZhanYin",
    "realName": "Burden",
    "aim": "Other",
    "desc": "For every 2 Basic Attacks, Skills, or Ultimates allies use on an enemy with Burden, recover 1 Skill Point.",
    "type": "Burden",
    "perma": true,
    "params": [
      "SkillP01_P1_Chance",
      "MDF_DamageUp"
    ]
  },
  {
    "name": "Hanya_Eidolon6",
    "realName": "Six Reverences",
    "aim": "Buff",
    "desc": "Increases ATK by #1[i]%.",
    "type": "ATK Boost",
    "perma": true,
    "params": [
      "SkillRank_Rank06_P1_ATKRatio"
    ]
  },
  {
    "name": "Hanya_PointB1",
    "realName": "Scrivener",
    "aim": "Buff",
    "desc": "Increases ATK by #1[i]%.",
    "type": "ATK Boost",
    "perma": true,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Hanya_Eidolon2",
    "realName": "Two Views",
    "aim": "Buff",
    "desc": "Increases SPD by #1[i]%.",
    "type": "Two Views",
    "perma": true,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Hanya_Passive_AddDamage",
    "realName": "Sanction",
    "aim": "Buff",
    "desc": "DMG dealt increases by #1[i]%.",
    "type": "DMG Boost",
    "perma": true,
    "params": [
      "MDF_DamageUp2"
    ]
  },
  {
    "name": "Huohuo_Passive_HealMark",
    "realName": "Divine Provision",
    "aim": "Buff",
    "desc": "When an ally's turn starts or when an ally uses their Ultimate, restores HP for that ally by an amount equal to #1[f1]% of Huohuo's Max HP plus #2[i]. At the same time, every ally currently at #3[i]% HP percentage or lower receives healing once. When Divine Provision is triggered to provide healing for allies, dispel 1 debuff from the said ally. This effect's remaining trigger count is #4[i].",
    "type": "Healing Over Time",
    "perma": false,
    "params": [
      "MDF_HPRatio",
      "MDF_HPValue",
      "MDF_LowHP",
      "MDF_DispelCount"
    ]
  },
  {
    "name": "Huohuo_Ability03_AttackUP",
    "realName": "ATK Boost",
    "aim": "Buff",
    "desc": "Increases ATK by #1[f1]%.",
    "type": "ATK Boost",
    "perma": false,
    "params": [
      "MDF_AttackUP"
    ]
  },
  {
    "name": "Huohuo_PointB1_SelfSPRatio",
    "realName": "Energy Regeneration Rate Boost",
    "aim": "Buff",
    "desc": "Increases Energy Regeneration Rate by #1[i]%.",
    "type": "Energy Regeneration Rate Boost",
    "perma": false,
    "params": [
      "MDF_SPRatio"
    ]
  },
  {
    "name": "Huohuo_Eidolon6_DamageUp",
    "realName": "DMG Boost",
    "aim": "Buff",
    "desc": "DMG dealt increases by #1[i]%.",
    "type": "DMG Boost",
    "perma": false,
    "params": [
      "MDF_DamageAddedRatio"
    ]
  },
  {
    "name": "Huohuo_Eidolon1_SpeedUp",
    "realName": "SPD Boost",
    "aim": "Buff",
    "desc": "Increases SPD by #1[i]%.",
    "type": "SPD Boost",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Huohuo_Maze_FatigueRatio",
    "realName": "Horror-Struck",
    "aim": "Debuff",
    "desc": "Reduces ATK by #1[i]%.",
    "type": "Horror-Struck",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Huohuo_Eidolon2_ReviveCount",
    "realName": "Sealed in Tail, Wraith Subdued",
    "aim": "Buff",
    "desc": "If Huohuo possesses Divine Provision when an ally is struck by a killing blow, the ally will not be knocked down, and their HP will immediately be restored by an amount equal to #1[i]% of their Max HP. This reduces the duration of Divine Provision by 1 turn. The remaining trigger count is #2[i].",
    "type": null,
    "perma": false,
    "params": [
      "MDF_HealRatio",
      "MDF_ReviveCount"
    ]
  },
  {
    "name": "MWGallagher_Ability03_DeBonusModifier",
    "realName": "Besotted",
    "aim": "Debuff",
    "desc": "Increases the received Break DMG by #1[f1]%. And every time this unit gets attacked by characters, the attacker will restore #2[i] HP.",
    "type": "Besotted",
    "perma": true,
    "params": [
      "MDF_BreakDamagTaken",
      "#SkillP01_P2_HealAmount"
    ]
  },
  {
    "name": "MWGallagher_Ability11_AttackDownModifier",
    "realName": "ATK Reduction",
    "aim": "Debuff",
    "desc": "ATK decreases by #1[f1]%.",
    "type": "ATK Reduction",
    "perma": false,
    "params": [
      "#Skill11_P2_AttackDownPercentage"
    ]
  },
  {
    "name": "Argenti_Passive_Charge",
    "realName": "Apotheosis",
    "aim": "Buff",
    "desc": "Increases CRIT Rate by #1[f1]%.",
    "type": "Apotheosis",
    "perma": false,
    "params": [
      "MDF_CritChance",
      "MDF_CritDamage"
    ]
  },
  {
    "name": "Argenti_Eidolon2_AttackRatioUp",
    "realName": "Agate's Humility",
    "aim": "Buff",
    "desc": "Increases ATK by #1[i]%.",
    "type": "ATK Boost",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "RuanMei_Ability02_Area_Friend",
    "realName": "Overtone",
    "aim": "Buff",
    "desc": "DMG dealt increases by #1[f1]%. Weakness Break Efficiency increases by #2[i]%.",
    "type": "Boost DMG and Weakness Break Efficiency",
    "perma": true,
    "params": [
      "Skill02_P1_DamageAddedRatio_Friend",
      "Skill02_P2_StanceBreakAddedRatio_Friend"
    ]
  },
  {
    "name": "RuanMei_Ability03_Area_Friend",
    "realName": "Petals to Stream, Repose in Dream",
    "aim": "Buff",
    "desc": "All-Type RES PEN increases by #1[f1]%.",
    "type": "All-Type RES PEN Boost",
    "perma": true,
    "params": [
      "Skill03_P1_PenetrateRatio"
    ]
  },
  {
    "name": "RuanMei_PassiveArea_Enemy",
    "realName": "Thanatoplum Rebloom",
    "aim": "Debuff",
    "desc": "When enemy targets attempt to recover from the Weakness Break state, prolong the duration of their Weakness Break state and deal Ice Break DMG to them.",
    "type": "Weakness Break Extension",
    "perma": false
  },
  {
    "name": "RuanMei_TechniqueUsage_AttackRatioUp",
    "realName": "Silken Serenade",
    "aim": "Buff",
    "desc": "Increases ATK.",
    "type": "ATK Boost",
    "perma": false
  },
  {
    "name": "RuanMei_Eidolon4_Passive_BreakDamageAddedUp",
    "realName": "Chatoyant Éclat",
    "aim": "Buff",
    "desc": "Increases Break Effect by #1[i]%.",
    "type": "Break Effect Boost",
    "perma": false,
    "params": [
      "#SkillRank_Rank04_P1_BreakDamageAdded"
    ]
  },
  {
    "name": "buyong_rixiaoxiasichang",
    "realName": "Days Wane, Thoughts Wax",
    "aim": "Buff",
    "desc": "undefined",
    "type": null,
    "perma": true
  },
  {
    "name": "buyong",
    "realName": "Sash Cascade",
    "aim": "Buff",
    "desc": "undefined",
    "type": null,
    "perma": true
  },
  {
    "name": "RuanMei_Passive_SpeedUp",
    "realName": "Somatotypical Helix",
    "aim": "Buff",
    "desc": "Increases SPD by #1[f1]%.",
    "type": null,
    "perma": true,
    "params": [
      "#SkillP01_P1_SpeedUpRatio"
    ]
  },
  {
    "name": "RuanMei_Ability03_Area_Caster",
    "realName": "Petals to Stream, Repose in Dream",
    "aim": "Buff",
    "desc": "All-Type RES PEN increases by #1[f1]%.",
    "type": "All-Type RES PEN Boost",
    "perma": true,
    "params": [
      "#Skill03_P1_PenetrateRatio"
    ]
  },
  {
    "name": "RuanMei_Ability02_Area_Caster",
    "realName": "Overtone",
    "aim": "Buff",
    "desc": "DMG dealt increases by #1[f1]%. Weakness Break Efficiency increases by #2[i]%.",
    "type": "Boost DMG and Weakness Break Efficiency",
    "perma": true,
    "params": [
      "Skill02_P1_DamageAddedRatioFinal",
      "#Skill02_P2_StanceBreakAddedRatio"
    ]
  },
  {
    "name": "RuanMei_Ability03_Area_Eidolon1_Friend",
    "realName": "Petals to Stream, Repose in Dream",
    "aim": "Buff",
    "desc": "All-Type RES PEN increases by #1[f1]%. When dealing DMG, ignores #2[i]% of the target's DEF.",
    "type": "All-Type RES PEN Boost",
    "perma": true,
    "params": [
      "Skill03_P1_PenetrateRatio",
      "SkillRank_Rank01_P1_IgnoreDEFRatio_Friend"
    ]
  },
  {
    "name": "RuanMei_Ability03_Area_Eidolon1_Caster",
    "realName": "Petals to Stream, Repose in Dream",
    "aim": "Buff",
    "desc": "All-Type RES PEN increases by #1[f1]%. When dealing DMG, ignores #2[i]% of the target's DEF.",
    "type": "All-Type RES PEN Boost",
    "perma": true,
    "params": [
      "#Skill03_P1_PenetrateRatio",
      "#SkillRank_Rank01_P1_IgnoreDEFRatio"
    ]
  },
  {
    "name": "RuanMei_AttackBreakEnemyAttackUp",
    "realName": "Reedside Promenade",
    "aim": "Buff",
    "desc": "When dealing DMG to enemy targets with Weakness Break, increases ATK by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "#SkillRank_Rank02_P1_AttackUpRatio"
    ]
  },
  {
    "name": "RuanMei_BreakDamageAdded",
    "realName": "Inert Respiration",
    "aim": "Buff",
    "desc": "Increases Break Effect by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "SkillTree_PointB1_P1_BreakDamageAdded"
    ]
  },
  {
    "name": "buyong_luozhuzhaoshuiran",
    "realName": "Candle Lights on Still Waters",
    "aim": "Buff",
    "desc": "undefined",
    "type": null,
    "perma": false
  },
  {
    "name": "Aventurine_Passive_AddDefence",
    "realName": "Unexpected Hanging Paradox",
    "aim": "Buff",
    "desc": "DEF increases by #1[i]%",
    "type": "DEF Boost",
    "perma": true,
    "params": [
      "MDF_DefencePercentage"
    ]
  },
  {
    "name": "Aventurine_ResistCtrlCD",
    "realName": "Shot Loaded Right",
    "aim": "Other",
    "desc": "The Talent's Crowd Control debuff resist effect cannot be triggered yet.",
    "type": null,
    "perma": true
  },
  {
    "name": "Aventurine_Trace01_Sub",
    "realName": "Leverage",
    "aim": "Buff",
    "desc": "Increases CRIT Rate by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_PropertyValue2"
    ]
  },
  {
    "name": "Aventurine_Ability02_BlackJack",
    "realName": "Fortified Wager: Spades",
    "aim": "Buff",
    "desc": "Gains a Shield that absorbs DMG and increases Effect RES by #1[f1]%. While the Shield persists or before the effect disappears, enemy attacks will not reduce the Shielded characters' HP. After these characters receive DMG, Aventurine receives 2 points of Blind Bet.",
    "type": "Shield",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Aventurine_Ability02_ShieldEffect2",
    "realName": "Fortified Wager: Hearts",
    "aim": "Buff",
    "desc": "Gains a Shield that absorbs DMG and increases Effect RES by #1[f1]%. While the Shield persists or before the effect disappears, enemy attacks will not reduce the Shielded characters' HP. After these characters receive DMG, Aventurine receives 1 point of Blind Bet.",
    "type": "Shield",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Aventurine_Ability02_ShieldEffect3",
    "realName": "Fortified Wager: Diamonds",
    "aim": "Buff",
    "desc": "Gains a Shield that absorbs DMG and increases Effect RES by #1[f1]%. While the Shield persists or before the effect disappears, enemy attacks will not reduce the Shielded characters' HP. After these characters receive DMG, Aventurine receives 1 point of Blind Bet.",
    "type": "Shield",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Aventurine_Ability02_ShieldEffect4",
    "realName": "Fortified Wager: Clubs",
    "aim": "Buff",
    "desc": "Gains a Shield that absorbs DMG and increases Effect RES by #1[f1]%. While the Shield persists or before the effect disappears, enemy attacks will not reduce the Shielded characters' HP. After these characters receive DMG, Aventurine receives 1 point of Blind Bet.",
    "type": "Shield",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Aventurine_Trace03_Status",
    "realName": "Bingo!",
    "aim": "Other",
    "desc": "After a teammate with \"Fortified Wager\" uses Follow-Up ATK, Aventurine gains 1 \"Blind Bet.\" This effect can be triggered #1[i] more time(s).",
    "type": null,
    "perma": true,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Aventurine_Eidolon6_Sub",
    "realName": "Stag Hunt Game",
    "aim": "Buff",
    "desc": "Increases DMG dealt by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_AttackAddRatio"
    ]
  },
  {
    "name": "Aventurine_Eidolon2_ResistanceDown",
    "realName": "Bounded Rationality",
    "aim": "Debuff",
    "desc": "All-Type RES decreases by #1[i]%.",
    "type": "All-Type RES Reduction",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Aventurine_Ability03_CoinAdd",
    "realName": "unnamed2",
    "aim": "Buff",
    "desc": null,
    "type": "Blind Bet received: #1[i] Point(s)",
    "perma": true,
    "params": [
      "MDF_Coin"
    ]
  },
  {
    "name": "Aventurine_Ability03_CritDmgIncrease",
    "realName": "Unnerved",
    "aim": "Debuff",
    "desc": "Increase the CRIT DMG dealt by allies to this unit by #1[f1]%.",
    "type": "The received CRIT DMG increases",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Aventurine_Maze_Defence",
    "realName": "The Red or the Black",
    "aim": "Buff",
    "desc": "DEF increases by #1[i]%",
    "type": "DEF Boost",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Dr_Ratio_Passive_Bonus_01",
    "realName": "SPD Boost",
    "aim": "Buff",
    "desc": "Each stack increases SPD by #1[f1]%.",
    "type": "SPD Boost",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Dr_Ratio_Passive_Bonus_02",
    "realName": "ATK Boost",
    "aim": "Buff",
    "desc": "Each stack increases ATK by >#1[f1]%.",
    "type": "ATK Boost",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Dr_Ratio_Passive_Bonus_03",
    "realName": "CRIT Rate Boost",
    "aim": "Buff",
    "desc": "Each stack increases CRIT Rate by #1[f1]%.",
    "type": "CRIT Rate Boost",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Dr_Ratio_Passive_Bonus_04",
    "realName": "CRIT DMG Boost",
    "aim": "Buff",
    "desc": "Each stack increases CRIT DMG by #1[f1]%.",
    "type": "CRIT DMG Boost",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Dr_Ratio_Slow",
    "realName": "Effect RES Reduction",
    "aim": "Debuff",
    "desc": "Effect RES decreases by #1[i]%.",
    "type": "Effect RES Reduction",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Dr_Ratio_Maze_SpeedDown",
    "realName": "SPD Reduction",
    "aim": "Debuff",
    "desc": "Decreases SPD by #1[i]%.",
    "type": "SPD Reduction",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Dr_Ratio_Ability03_TheFool",
    "realName": "Wiseman's Folly",
    "aim": "Other",
    "desc": "After a target with \"Wiseman's Folly\" is attacked by Dr. Ratio's teammate(s), Dr. Ratio immediately launches a Follow-Up ATK once against this target. This effect can be triggered for a maximum of #1[i] times.",
    "type": "Wiseman's Folly",
    "perma": true,
    "params": [
      "MDF_Skill03_InsertMaxCount"
    ]
  },
  {
    "name": "Dr_Ratio_PointB3_AddedRatio",
    "realName": "Rationalism",
    "aim": "Buff",
    "desc": "Increases DMG dealt to enemies with debuffs by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Dr_Ratio_Ability03_PointB1_Bonus",
    "realName": "Summation",
    "aim": "Buff",
    "desc": "Every stack increases CRIT Rate by #1[f1]% and CRIT DMG by #2[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_PropertyValue01",
      "MDF_PropertyValue02"
    ]
  },
  {
    "name": "Dr_Ratio_Passive_Bonus",
    "realName": "Cogito, Ergo Sum",
    "aim": "Buff",
    "desc": "Increases ATK by #2[f1]%, CRIT Rate by #3[f1]%, CRIT DMG by #4[f1]%, and SPD by #1[f1]%.",
    "type": "Cogito, Ergo Sum",
    "perma": true,
    "params": [
      "MDF_PropertyValue01",
      "MDF_PropertyValue02",
      "MDF_PropertyValue03",
      "MDF_PropertyValue04"
    ]
  },
  {
    "name": "Sparkle_Ability02_CritDmgAddedRatio02",
    "realName": "Dreamdiver",
    "aim": "Buff",
    "desc": "Increase CRIT DMG by #1[i]%.",
    "type": null,
    "perma": false,
    "params": [
      "MDF_PropertyValue2"
    ]
  },
  {
    "name": "Sparkle_Ability03_PowerUp",
    "realName": "Cipher",
    "aim": "Buff",
    "desc": "Additionally enhances the DMG Boost effect provided by each stack of Sparkle's talent by #2[f1]%.",
    "type": "Cipher",
    "perma": true,
    "params": [
      "MDF_PropertyValue2",
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Sparkle_Ability02_CritDmgAddedRatio01",
    "realName": "Dreamdiver",
    "aim": "Buff",
    "desc": "Increase CRIT DMG by #1[i]%.",
    "type": "CRIT DMG Boost",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Sparkle_PassiveAbility_AllDamageAddedRatio02",
    "realName": "Red Herring",
    "aim": "Buff",
    "desc": "Increases DMG dealt by #1[f1]%.",
    "type": "DMG Boost",
    "perma": false,
    "params": [
      "MDF_PropertyValue",
      "MDF_DefenceAddedRatio2"
    ]
  },
  {
    "name": "Sparkle_Tree03",
    "realName": "Nocturne",
    "aim": "Buff",
    "desc": "Increases ATK by #1[i]%.",
    "type": "Nocturne",
    "perma": false,
    "params": [
      "MDF_PropertyValue3"
    ]
  },
  {
    "name": "Sparkle_Tree03CD",
    "realName": "undefined",
    "aim": "Buff",
    "desc": "undefined",
    "type": null,
    "perma": true,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Sparkle_Eidolon4_HPIncrease",
    "realName": "undefined",
    "aim": "Buff",
    "desc": "undefined",
    "type": "undefined",
    "perma": true,
    "params": [
      "MDF_PropertyValue2"
    ]
  },
  {
    "name": "BlackSwan_DOT",
    "realName": "Arcana",
    "aim": "Debuff",
    "desc": "Takes Wind DMG at the start of each turn. Being afflicted with Arcana will also be considered as suffering from Wind Shear. This state stacks up to #1[i] times.",
    "type": "Arcana",
    "perma": true,
    "params": [
      "MDF_MaxLayer"
    ]
  },
  {
    "name": "BlackSwan_DOT_Enhance",
    "realName": "Epiphany",
    "aim": "Debuff",
    "desc": "The DMG received increases by #1[i]% during this unit's turn. While in Arcana state, this unit is also considered to be simultaneously inflicted with Wind Shear, Bleed, Burn, and Shock. Additionally, after Arcana causes DMG at the start of each turn, its stacks do not reset. This effect can trigger #3[i] more time(s).",
    "type": "Epiphany",
    "perma": false,
    "params": [
      "MDF_PropertyValue",
      "MDF_ResistanceDown",
      "MDF_Count"
    ]
  },
  {
    "name": "BlackSwan_DefenceDown",
    "realName": "Decadence, False Twilight",
    "aim": "Debuff",
    "desc": "DEF -#1[f1]%.",
    "type": "DEF Reduction",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "BlackSwan_Eidolon1_WindResistanceDown",
    "realName": "Seven Pillars of Wisdom",
    "aim": "Debuff",
    "desc": "Wind RES -#1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "BlackSwan_Eidolon1_PhysicalResistanceDown",
    "realName": "Seven Pillars of Wisdom",
    "aim": "Debuff",
    "desc": "Physical RES -#1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "BlackSwan_Eidolon1_FireResistanceDown",
    "realName": "Seven Pillars of Wisdom",
    "aim": "Debuff",
    "desc": "Fire RES -#1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Acheron_PassiveFlag01",
    "realName": "Crimson Knot",
    "aim": "Other",
    "desc": "When removed, immediately deals Lightning DMG equal to #1[f1]% of Acheron's ATK to all enemies once. For every stack of Crimson Knot removed, this DMG multiplier additionally increases, up to a maximum of #2[f1]%.",
    "type": "Crimson Knot",
    "perma": true,
    "params": [
      "MDF_PropertyValue01",
      "MDF_PropertyValue02"
    ]
  },
  {
    "name": "Acheron_AllDamageTypeResistance",
    "realName": "All-Type RES Reduction",
    "aim": "Debuff",
    "desc": "Reduces All-Type RES by #1[f1]%, lasting till the end of the Ultimate.",
    "type": "All-Type RES Reduction",
    "perma": true,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Acheron_PointB3_DamageUp",
    "realName": "Thunder Core",
    "aim": "Buff",
    "desc": "Each stack increases DMG dealt by #1[i]%, up to #2[i] stack(s).",
    "type": "DMG Boost",
    "perma": true,
    "params": [
      "MDF_PropertyValue",
      "MDF_MaxLayer"
    ]
  },
  {
    "name": "Robin_Ability02_DmgUpCasterListener",
    "realName": "Aria",
    "aim": "Buff",
    "desc": "DMG dealt increases by #1[i]%.",
    "type": "DMG Boost",
    "perma": true,
    "params": [
      "Skill02_P1_DmgUpForShow"
    ]
  },
  {
    "name": "Robin_Ability02_DmgUpFriendListener",
    "realName": "Aria",
    "aim": "Buff",
    "desc": "DMG dealt increases by #1[i]%.",
    "type": "DMG Boost",
    "perma": true,
    "params": [
      "Skill02_P1_DmgUpForShow"
    ]
  },
  {
    "name": "Robin_Ability03_AtkUp_CasterForShow",
    "realName": "Concerto",
    "aim": "Buff",
    "desc": "Increases ATK by #1[i] and becomes immune to Crowd Control debuffs.",
    "type": "ATK Boost, immune to Crowd Control debuffs",
    "perma": true,
    "params": [
      "BaseAttack_Total"
    ]
  },
  {
    "name": "Robin_Ability03_AtkUp_FriendForShow",
    "realName": "Concerto",
    "aim": "Buff",
    "desc": "Increases ATK by #1[i]. Robin deals Additional DMG after attacking.",
    "type": "ATK Boost",
    "perma": true,
    "params": [
      "BaseAttack_Total"
    ]
  },
  {
    "name": "Robin_Trace02_InsertDmgUp",
    "realName": "Impromptu Flourish",
    "aim": "Buff",
    "desc": "Increases Follow-Up ATK CRIT DMG by #1[i]%.",
    "type": "CRIT DMG Boost",
    "perma": true,
    "params": [
      "SkillTree_PointB2_P1_Ratio"
    ]
  },
  {
    "name": "Robin_AbilityEidolon1_Bonus",
    "realName": "Land of Smiles",
    "aim": "Buff",
    "desc": "Increases All-Type RES PEN by #1[i]%.",
    "type": "All-Type RES PEN Boost",
    "perma": true,
    "params": [
      "#SkillRank_Rank01_P1_Ratio"
    ]
  },
  {
    "name": "Misha_Eidolon6_DamageUp",
    "realName": "Estrangement of Dream",
    "aim": "Buff",
    "desc": "Increases DMG dealt by #1[i]%.",
    "type": "DMG Boost",
    "perma": false,
    "params": [
      "MDF_PropertyRatio"
    ]
  },
  {
    "name": "Misha_EnergyCount",
    "realName": "G—Gonna Be Late!",
    "aim": "Other",
    "desc": "The Ultimate's Hits Per Action.",
    "type": null,
    "perma": true
  },
  {
    "name": "Misha_Ability03_StatusProbabilityUp",
    "realName": "Interlock",
    "aim": "Buff",
    "desc": "Increases Effect Hit Rate by #1[i]%.",
    "type": "Effect Hit Rate Boost",
    "perma": false,
    "params": [
      "MDF_PropertyRatio"
    ]
  },
  {
    "name": "Misha_Eidolon2_DefenceDown",
    "realName": "Yearning of Youth",
    "aim": "Debuff",
    "desc": "Reduces DEF by #1[i]%.",
    "type": "DEF Reduction",
    "perma": false,
    "params": [
      "MDF_PropertyRatio"
    ]
  },
  {
    "name": "Misha_Eidolon6_RecoverBP",
    "realName": "Estrangement of Dream",
    "aim": "Buff",
    "desc": "Allies recover #1[i] Skill Point(s) after the next time they use a Skill.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_Value"
    ]
  },
  {
    "name": "Boothill_SelfModification",
    "realName": "Pocket Trickshot",
    "aim": "Other",
    "desc": "Every stack increases the Toughness Reduction of the Enhanced Basic Attack by #2[i]%. If the target is Weakness Broken while the Enhanced Basic ATK is being used, deals additional Physical Break DMG based on the number of Pocket Trickshot stacks. This effect can stack up to #1[i] time(s).",
    "type": "Pocket Trickshot",
    "perma": true,
    "params": [
      "MDF_MaxLayer",
      "MDF_StanceAdded"
    ]
  },
  {
    "name": "Boothill_Ultimate_PhysicalWeakness",
    "realName": "Extra Physical Weakness",
    "aim": "Debuff",
    "desc": "Implanted with extra Physical Weakness.",
    "type": "Implant Weakness: Physical",
    "perma": false
  },
  {
    "name": "Boothill_DuelTarget",
    "realName": "Standoff",
    "aim": "Debuff",
    "desc": "This is considered a Taunt state and only %CasterName can be selected as the attack target. Increases DMG received by #1[i]% when attacked by %CasterName.",
    "type": "Standoff",
    "perma": true,
    "params": [
      "MDF_PropertyRatio"
    ]
  },
  {
    "name": "Boothill_DuelState",
    "realName": "Standoff",
    "aim": "Other",
    "desc": "When getting attacked by the target in the Standoff, increases the DMG received by #1[i]%. The Basic ATK becomes Enhanced.",
    "type": "Standoff",
    "perma": true,
    "params": [
      "MDF_PropertyRatio"
    ]
  },
  {
    "name": "Boothill_Eidolon2_Enhance",
    "realName": "Milestonemonger",
    "aim": "Buff",
    "desc": "Increases Break Effect by #1[i]%.",
    "type": null,
    "perma": false,
    "params": [
      "MDF_PropertyRatio"
    ]
  },
  {
    "name": "Boothill_Eidolon2_CD",
    "realName": "Milestonemonger",
    "aim": "Other",
    "desc": "Milestonemonger's effect cannot be triggered yet.",
    "type": null,
    "perma": true
  },
  {
    "name": "Boothill_TechniqueUsage_Ability02",
    "realName": "3-9× Smile",
    "aim": "Other",
    "desc": "The first time the Skill is used in a battle, applies the same Physical Weakness to one designated enemy target as the one induced by the Ultimate, lasting for #1[i] turn(s).",
    "type": null,
    "perma": true,
    "params": [
      "MDF_Lifetime"
    ]
  },
  {
    "name": "PlayerGirl_Passive_BreakAtkUp",
    "realName": "Perfect Pickoff",
    "aim": "Buff",
    "desc": "Each stack increases ATK by #1[i]%, up to #2[i] stack(s).",
    "type": "ATK Boost",
    "perma": false,
    "params": [
      "MDF_AttackAddedRatio",
      "MDF_Max_Layer"
    ]
  },
  {
    "name": "PlayerGirl_SkilTree02_BreakDefUp",
    "realName": "Tenacity",
    "aim": "Buff",
    "desc": "Each stack increases DEF by #1[i]%, up to #2[i] stack(s).",
    "type": "DEF Boost",
    "perma": false,
    "params": [
      "MDF_DefenceAddedRatio",
      "MDF_Max_Layer"
    ]
  },
  {
    "name": "MWPlayerGirl_10_WeaponCharge",
    "realName": "Magma Will",
    "aim": "Other",
    "desc": "When there are 4 or more stacks of Magma Will, Enhances Basic ATK.",
    "type": null,
    "perma": true
  },
  {
    "name": "MWPlayerGirl_10_WeaponCharge_Free",
    "realName": "War-Flaming Lance",
    "aim": "Other",
    "desc": "The next Basic ATK will become an Enhanced Basic ATK and will not consume Magma Will.",
    "type": "Enhanced Basic ATK",
    "perma": true
  },
  {
    "name": "MWPlayerGirl_10_TechniqueUsage_Shield",
    "realName": "Shield",
    "aim": "Buff",
    "desc": "Gains a Shield that absorbs DMG. While the Shield persists, enemy attacks will not reduce Shielded characters' HP.",
    "type": "Shield",
    "perma": false
  },
  {
    "name": "MWPlayerGirl_10_DamageResistance",
    "realName": "DMG Mitigation",
    "aim": "Buff",
    "desc": "DMG taken -#1[i]%.",
    "type": "DMG Mitigation",
    "perma": false,
    "params": [
      "MWAvatar_PlayerGirl_10_DamageResistance_Value01"
    ]
  },
  {
    "name": "MWPlayerGirl_10_Shield",
    "realName": "Shield",
    "aim": "Buff",
    "desc": "Gains a Shield that absorbs DMG. While the Shield persists, enemy attacks will not reduce Shielded characters' HP.",
    "type": "Shield",
    "perma": false
  },
  {
    "name": "MWPlayerGirl_10_Eidolon6_Stack",
    "realName": "DEF Boost",
    "aim": "Buff",
    "desc": "Each stack increases DEF by #1[i]%, up to #2[i] stack(s).",
    "type": "DEF Boost",
    "perma": false,
    "params": [
      "MDF_DefenceAddedRatio",
      "Rank06_Max_Layer"
    ]
  },
  {
    "name": "PlayerGirl_10_DamageResistance_Team",
    "realName": "DMG Mitigation",
    "aim": "Buff",
    "desc": "DMG taken -#1[i]%.",
    "type": "DMG Mitigation",
    "perma": false,
    "params": [
      "MWAvatar_PlayerGirl_10_DamageResistance_Team_Value01"
    ]
  },
  {
    "name": "MWPlayerGirl_10_AttackRatioUp",
    "realName": "ATK Boost",
    "aim": "Buff",
    "desc": "ATK +#1[i]%.",
    "type": "ATK Boost",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "PlayerBoy_20_Eidolon4_BreakDamageBonus",
    "realName": "Dove in Tophat",
    "aim": "Buff",
    "desc": "Increases Break Effect by #1[f1]%.",
    "type": null,
    "perma": false,
    "params": [
      "MDF_AddBreakDamageRatio"
    ]
  },
  {
    "name": "PlayerBoy_20_AbilityP01_ListenBreakDamage",
    "realName": "Backup Dancer",
    "aim": "Buff",
    "desc": "Increases Break Effect by #1[i]%. And after attacking enemy targets that are Weakness Broken, converts the Toughness Reduction of the attack into 1 instance of Super Break DMG.",
    "type": "Backup Dancer",
    "perma": true,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "PlayerBoy_20_TechniqueUsage_Bonus",
    "realName": "Now! I'm the Band!",
    "aim": "Buff",
    "desc": "Increases Break Effect by #1[i]%.",
    "type": "Break Effect Boost",
    "perma": false,
    "params": [
      "MDF_BreakDamageAddedRatio"
    ]
  },
  {
    "name": "Sam_PassiveAbility_RedMode",
    "realName": "Fyrefly Type-IV: Complete Combustion",
    "aim": "Other",
    "desc": "When using Enhanced Basic ATK or Enhanced Skill, increases Weakness Break Efficiency by #1[i]% and increases the Break DMG dealt by SAM to the enemy targets by #4[f1]%. Increases SPD by #2[i], and Effect RES by #3[i]%.",
    "type": "Fyrefly Type-IV: Complete Combustion",
    "perma": false,
    "params": [
      "MDF_FinalDamageUP",
      "MDF_SpeedUP",
      "MDF_StatusResistance",
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Sam_PassiveAbility_AllDamageTypeResistance",
    "realName": "Chrysalid Pyronexus",
    "aim": "Buff",
    "desc": "DMG taken decreases by #1[i]%.",
    "type": "DMG Mitigation",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "PlayerBoy_20_Eidolon2",
    "realName": "Jailbreaking Rainbowwalk",
    "aim": "Buff",
    "desc": "Increases Energy Regeneration Rate by #1[i]%.",
    "type": null,
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "PlayerGirl_20_Eidolon4_BreakDamageBonus",
    "realName": "Dove in Tophat",
    "aim": "Buff",
    "desc": "Increases Break Effect by #1[f1]%.",
    "type": null,
    "perma": false,
    "params": [
      "MDF_AddBreakDamageRatio"
    ]
  },
  {
    "name": "PlayerGirl_20_AbilityP01_ListenBreakDamage",
    "realName": "Backup Dancer",
    "aim": "Buff",
    "desc": "Increases Break Effect by #1[i]%. And after attacking enemy targets that are Weakness Broken, converts the Toughness Reduction of the attack into 1 instance of Super Break DMG.",
    "type": "Backup Dancer",
    "perma": true,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "PlayerGirl_20_TechniqueUsage_Bonus",
    "realName": "Now! I'm the Band!",
    "aim": "Buff",
    "desc": "Increases Break Effect by #1[i]%.",
    "type": "Break Effect Boost",
    "perma": false,
    "params": [
      "MDF_BreakDamageAddedRatio"
    ]
  },
  {
    "name": "PlayerGirl_20_Eidolon2",
    "realName": "Jailbreaking Rainbowwalk",
    "aim": "Buff",
    "desc": "Increases Energy Regeneration Rate by #1[i]%.",
    "type": null,
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Jade_Passive_Rate",
    "realName": "Pawned Asset",
    "aim": "Buff",
    "desc": "Each stack increases CRIT DMG by #1[f1]%.",
    "type": "Pawned Asset",
    "perma": false,
    "params": [
      "MDF_PropertyValue",
      "MDF_PropertyValue2"
    ]
  },
  {
    "name": "Jade_BPAbility",
    "realName": "Debt Collector",
    "aim": "Buff",
    "desc": "Increases SPD by #1[i]. After using an attack, consumes a small amount of HP. For each enemy target hit, Jade gains 1 point of Charge and deals Additional DMG.",
    "type": "Debt Collector",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Jade_BPAbilitySelf",
    "realName": "Debt Collector",
    "aim": "Buff",
    "desc": "After using an attack, for each enemy target hit, Jade gains 1 point of Charge and deals Additional DMG.",
    "type": "Debt Collector",
    "perma": false
  },
  {
    "name": "Jade_BPAbilityListen",
    "realName": "Creditor",
    "aim": "Other",
    "desc": "Assigning Debt Collector.",
    "type": null,
    "perma": false
  },
  {
    "name": "Jade_Ultimate_Insert",
    "realName": "Follow-Up ATK Boost",
    "aim": "Buff",
    "desc": "Increases the multiplier for the DMG dealt by Talent's Follow-Up ATK by #1[i]%. This can take effect for up to #2[i] time(s).",
    "type": "Follow-Up ATK Boost",
    "perma": false,
    "params": [
      "MDF_PropertyRatio",
      "MDF_Count"
    ]
  },
  {
    "name": "Jade_Eidolon6_BPAbility",
    "realName": "Debt Collector",
    "aim": "Buff",
    "desc": "Increases SPD by #1[i]. After using an attack, consumes a small amount of HP. For each enemy target hit, Jade gains 1 point of Charge and deals Additional DMG.",
    "type": "Debt Collector",
    "perma": true,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Jade_Eidolon6_BPAbilitySelf",
    "realName": "Debt Collector",
    "aim": "Buff",
    "desc": "Quantum RES PEN increases by #1[i]%. After attacking, for each enemy target hit, Jade gains 1 point of Charge and deals Additional DMG.",
    "type": "Debt Collector",
    "perma": true,
    "params": [
      "MDF_PropertyRatio"
    ]
  },
  {
    "name": "Aventurine_Passive_ReduceStatusProbability",
    "realName": "Shot Loaded Right",
    "aim": "Debuff",
    "desc": "Effect Hit Rate decreases by #1[i]%.",
    "type": "Effect Hit Rate Reduction",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Mar_7th_10_Ability02_Master",
    "realName": "Shifu",
    "aim": "Other",
    "desc": "After using an attack or Ultimate, %CasterName gains a max of 1 Charge point each time.",
    "type": "Become Shifu",
    "perma": true
  },
  {
    "name": "Mar_7th_10_Energy",
    "realName": "Charge",
    "aim": "Other",
    "desc": "When Charge equals to #2[i] or more, immediately takes action and simultaneously increases DMG dealt by #1[i]%. Additionally, Basic ATK gets Enhanced.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_PropertyRatio",
      "MDF_Count"
    ]
  },
  {
    "name": "Mar_7th_10_Ability02_Master_SpeedUp",
    "realName": "Master, It's Tea Time!",
    "aim": "Buff",
    "desc": "Increases SPD of %CasterName's Shifu by #1[f1]%.",
    "type": null,
    "perma": false,
    "params": [
      "MDF_PropertyRatio"
    ]
  },
  {
    "name": "Mar_7th_10_Ability03_Enhance_Normal",
    "realName": "March 7th, the Apex Heroine",
    "aim": "Other",
    "desc": "Increases the next Enhanced Basic ATK's initial Hits Per Action by #1[i]. The fixed chance of additionally dealing DMG increases by #2[i]%.",
    "type": "Enhanced Basic Attack Boost",
    "perma": false,
    "params": [
      "MDF_Value",
      "MDF_Chance",
      "MDF_PropertyRatio"
    ]
  },
  {
    "name": "Feixiao_InsertIsReady",
    "realName": "Thunderhunt",
    "aim": "Other",
    "desc": "The Talent's Follow-Up ATK can now be triggered.",
    "type": null,
    "perma": true
  },
  {
    "name": "Feixiao_DamageProperty",
    "realName": "Thunderhunt",
    "aim": "Buff",
    "desc": "DMG dealt increases by #1[i]%.",
    "type": "DMG Boost",
    "perma": false,
    "params": [
      "MDF_PropertyRatio"
    ]
  },
  {
    "name": "Sam_Ability21_FireWeakType",
    "realName": "Extra Fire Weakness",
    "aim": "Debuff",
    "desc": "Implanted with extra Fire Weakness.",
    "type": "Implant Weakness: Fire",
    "perma": false
  },
  {
    "name": "BlackSwan_Eidolon1_ThunderResistanceDown",
    "realName": "Seven Pillars of Wisdom",
    "aim": "Debuff",
    "desc": "Lightning RES -#1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Sam_Eidolon2_BonusCD",
    "realName": "From Shattered Sky, I Free Fall",
    "aim": "Other",
    "desc": "The \"From Shattered Sky, I Free Fall\" effect cannot be triggered yet.",
    "type": null,
    "perma": false
  },
  {
    "name": "Acheron_Eidolon4_AllDamageTypeTakenRatio",
    "realName": "Ultimate DMG Vulnerability",
    "aim": "Debuff",
    "desc": "Increases Ultimate DMG received by #1[i]%.",
    "type": "Ultimate DMG Vulnerability",
    "perma": true,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Mar_7th_10_Eidolon2_CD",
    "realName": "Blade Dances on Waves' Fight",
    "aim": "Other",
    "desc": "The \"Blade Dances on Waves' Fight\" effect cannot be triggered yet.",
    "type": null,
    "perma": true
  },
  {
    "name": "Yunli_Disqualification",
    "realName": "Imbalance",
    "aim": "Debuff",
    "desc": "Increases DMG dealt by Yunli to this unit by #1[i]%.",
    "type": "Imbalance",
    "perma": true,
    "params": [
      "MDF_ProbabilityValue"
    ]
  },
  {
    "name": "Yunli_Blocking",
    "realName": "Parry",
    "aim": "Buff",
    "desc": "When triggering Talent's Counter effect, launches the Counter \"Intuit: Cull\" instead.",
    "type": "Parry",
    "perma": true,
    "params": [
      "MDF_ProbabilityValue"
    ]
  },
  {
    "name": "Yunli_Trace03_Sub",
    "realName": "True Sunder",
    "aim": "Buff",
    "desc": "Increases ATK by #1[i]%.",
    "type": "ATK Boost",
    "perma": true,
    "params": [
      "MDF_ProbabilityValue"
    ]
  },
  {
    "name": "Jiaoqiu_Debuff_Ultra",
    "realName": "Pyrograph Arcanum",
    "aim": "Debuff",
    "desc": "Enemy targets in the Zone take #1[f1]% increased Ultimate DMG, with a #2[i]% base chance of being inflicted with 1 stack of Ashen Roast when taking action. While the Zone exists, this effect can trigger up to #3[i] time(s). And it can only trigger once per enemy turn. This effect can still trigger for #4[i] more time(s).",
    "type": "Vulnerability",
    "perma": true,
    "params": [
      "MDF_PropertyValue",
      "#Skill03_P2_Chance",
      "#Skill03_P5_Value",
      "_Max_Count_Left"
    ]
  },
  {
    "name": "Jiaoqiu_Eidolon4_AttackDown",
    "realName": "Leisure In, Luster Out",
    "aim": "Debuff",
    "desc": "ATK decreases by #1[i]%.",
    "type": "ATK Reduction",
    "perma": true,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "BUYONG_Jiaoqiu_Ultimate_FriendForShow",
    "realName": "Pyrograph Arcanum",
    "aim": "Buff",
    "desc": "undefined",
    "type": null,
    "perma": true
  },
  {
    "name": "BUYONG_Jiaoqiu_Debuff_Flavor",
    "realName": "Ashen Roast",
    "aim": "Debuff",
    "desc": "Increases DMG received by #1[f1]%. At the start of the turn, takes Fire Additional DMG equal to #2[i]% of Jiaoqiu's ATK.",
    "type": "Ashen Roast",
    "perma": true,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "BUYONG_Jiaoqiu_Aura_Trace01_Debuff",
    "realName": "Pyre Cleanse",
    "aim": "Debuff",
    "desc": "Reduces Effect Hit Rate by #1[i]%. When taking action, receives Fire Additional DMG equal to #2[i]% of Jiaoqiu's ATK.",
    "type": "Effect Hit Rate Reduction",
    "perma": true,
    "params": [
      "#SkillTree_PointB1_P1_Ratio",
      "#SkillTree_PointB1_P2_Ratio"
    ]
  },
  {
    "name": "BUYONG_Jiaoqiu_Tree02_AttackUp",
    "realName": "Hearth Kindle",
    "aim": "Buff",
    "desc": "Increases ATK by #1[i]%.",
    "type": "ATK Boost",
    "perma": true,
    "params": [
      "SkillTree_PointB2_StatusProbabilityValue"
    ]
  },
  {
    "name": "Jiaoqiu_AbilityEidolon6_ResistDown",
    "realName": "Nonamorphic Pyrobind",
    "aim": "Debuff",
    "desc": "Decreases All-Type RES by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "ResistDownRatio"
    ]
  },
  {
    "name": "Mar_7th_10_PointB3_Kill_Property",
    "realName": "Tide Tamer",
    "aim": "Buff",
    "desc": "Increases CRIT DMG by #1[i]%.",
    "type": "CRIT DMG Boost",
    "perma": false,
    "params": [
      "MDF_PropertyRatio"
    ]
  },
  {
    "name": "Mar_7th_10_PointB3_Break_Property",
    "realName": "Tide Tamer",
    "aim": "Buff",
    "desc": "Increases Break Effect by #1[i]%.",
    "type": "Break Effect Boost",
    "perma": false,
    "params": [
      "MDF_PropertyRatio"
    ]
  },
  {
    "name": "Mar_7th_10_Eidolon1_SpeedUp",
    "realName": "My Sword Stirs Starlight",
    "aim": "Buff",
    "desc": "When Shifu is on the field, increases SPD by #1[i]%.",
    "type": "SPD Boost",
    "perma": false,
    "params": [
      "MDF_PropertyRatio"
    ]
  },
  {
    "name": "Acheron_UltraAbilitySpareCount",
    "realName": "Quadrivalent Ascendance",
    "aim": "Other",
    "desc": "Acheron obtains #1[i] point(s) of Slashed Dream after she uses her Ultimate, and applies #1[i] stack(s) of Crimson Knot on a random enemy.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Acheron_UltraAbilitySpareCount_PointB1",
    "realName": "Quadrivalent Ascendance",
    "aim": "Other",
    "desc": "After using the Ultimate, gains Slashed Dream by an amount equal to the number of Quadrivalent Ascendance stacks. At the same time, applies a corresponding number of Crimson Knot stacks to a random enemy. This effect stacks up to #1[i] time(s).",
    "type": null,
    "perma": true,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "MWGallagher_Ability02_StatusResModifier",
    "realName": "Effect RES Boost",
    "aim": "Buff",
    "desc": "Increases Effect RES by #1[i]%.",
    "type": "Effect RES Boost",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Aventurine_StackableShield",
    "realName": "unnamed3",
    "aim": "Buff",
    "desc": null,
    "type": "Shield",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Moze_Ability02_ShadowTargetModifier",
    "realName": "Prey",
    "aim": "Debuff",
    "desc": "This unit is marked as \"Prey.\" After every time it receives an attack, it will receive Lightning Additional DMG equal to #1[i]% of Moze's ATK, and Moze will consume 1 point of Charge.",
    "type": "Prey",
    "perma": true,
    "params": [
      "#SkillP01_P1_ExtraDamagePercentage",
      "MDF_TotalDamage"
    ]
  },
  {
    "name": "Moze_Eidolon1Debuff",
    "realName": "DEF Reduction",
    "aim": "Debuff",
    "desc": "DEF decreases by #1[i]%.",
    "type": "DEF Reduction",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Moze_Eidolon6Bonus",
    "realName": "DMG Boost",
    "aim": "Buff",
    "desc": "DMG dealt increases by #1[i]%.",
    "type": "DMG Boost",
    "perma": false,
    "params": [
      "MDF_DamageAdded"
    ]
  },
  {
    "name": "Robin_AbilityEidolon2_Bonus",
    "realName": "Afternoon Tea For Two",
    "aim": "Buff",
    "desc": "SPD increases by #1[i]%.",
    "type": "SPD Boost",
    "perma": true,
    "params": [
      "#SkillRank_Rank02_P1_ExtraRatio"
    ]
  },
  {
    "name": "Aventurine_Eidolon1_Status",
    "realName": "Prisoner's Dilemma",
    "aim": "Buff",
    "desc": "CRIT DMG increases by #1[i]%.",
    "type": "CRIT DMG Boost",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Robin_PassiveAbility_CritDmgUp",
    "realName": "Tonal Resonance",
    "aim": "Buff",
    "desc": "CRIT DMG increases by #1[f1]%.",
    "type": null,
    "perma": true,
    "params": [
      "#SkillP01_P1_Ratio"
    ]
  },
  {
    "name": "Jade_Eidolon4_DefPenetrate",
    "realName": "Sincerity? Put Option Only",
    "aim": "Buff",
    "desc": "Ignores #1[i]% of enemy targets' DEF.",
    "type": "Sincerity? Put Option Only",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Robin_AbilityEidolon4_ResistAll",
    "realName": "Raindrop Key",
    "aim": "Buff",
    "desc": "Increases Effect RES by #1[i]%.",
    "type": "Effect RES Boost",
    "perma": true,
    "params": [
      "#SkillRank_Rank04_P1_Ratio"
    ]
  },
  {
    "name": "Moze_TechniqueUsage_DamageUpModifier",
    "realName": "Bated Wings",
    "aim": "Buff",
    "desc": "DMG dealt increases by #1[i]%.",
    "type": "DMG Boost",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Jade_Eidolon2_CriticalChance",
    "realName": "Morality? Herein Authenticated",
    "aim": "Buff",
    "desc": "Increases CRIT Rate by #1[i]%.",
    "type": "CRIT Rate Boost",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "BUYONG_Jiaoqiu_Eidolon1_DebuffForShow",
    "realName": "Pentapathic Transference",
    "aim": "Debuff",
    "desc": "When an ally attacks an enemy target afflicted with Ashen Roast, increases the DMG dealt by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "#SkillRank_Rank01_P1_ExtraRatio"
    ]
  },
  {
    "name": "Sam_Eidolon6_UltraDamageTypeAddRatio",
    "realName": "In Finalized Morrow, I Full Bloom",
    "aim": "Buff",
    "desc": "Fire RES PEN increases by #1[i]%.",
    "type": "Fire RES PEN Boost",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Robin_AbilityEidolon6_ExtraRatioForShow",
    "realName": "Moonless Midnight",
    "aim": "Buff",
    "desc": "Additionally increases the CRIT DMG for the Ultimate's Physical Additional DMG dealt by #1[i]%. The remaining triggerable count is #2[i].",
    "type": "CRIT DMG Boost",
    "perma": true,
    "params": [
      "SkillRank_Rank06_P2_ExtraRatio",
      "_Rank06_BigDmgCount"
    ]
  },
  {
    "name": "Lingsha_Eidolon1_DefenceRatioDown",
    "realName": "Bloom on Vileward Bouquet",
    "aim": "Debuff",
    "desc": "DEF decreases by #1[i]%.",
    "type": "DEF Reduction",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Lingsha_BreakDamageUp",
    "realName": "Befog",
    "aim": "Debuff",
    "desc": "Break DMG taken increases by #1[i]%.",
    "type": "Befog",
    "perma": true,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Lingsha_PointB3_CD",
    "realName": "Ember's Echo",
    "aim": "Other",
    "desc": "The Trace \"Ember's Echo\" effect's auto-trigger is still on cooldown.",
    "type": null,
    "perma": true
  },
  {
    "name": "Yunli_Trace02_ControlResist",
    "realName": "Demon Quell",
    "aim": "Buff",
    "desc": "Resists Crowd Control debuffs received and reduces DMG received by #1[i]%.",
    "type": "Resists Crowd Control debuffs",
    "perma": true,
    "params": [
      "MAvatar_Yunli_00_DamageResistance_Value01"
    ]
  },
  {
    "name": "Yunli_Eidolon2_Sub",
    "realName": "First Luster Breaks Dawn",
    "aim": "Buff",
    "desc": "Increase CRIT Rate by #1[i]%.",
    "type": "CRIT Rate Boost",
    "perma": true,
    "params": [
      "MDF_CritRatio"
    ]
  },
  {
    "name": "PlayerBoy_20_AbilityP01_ListenBreakDamage_Self",
    "realName": "unnamed4",
    "aim": "Buff",
    "desc": null,
    "type": null,
    "perma": true
  },
  {
    "name": "PlayerGirl_20_AbilityP01_ListenBreakDamage_Self",
    "realName": "unnamed5",
    "aim": "Buff",
    "desc": null,
    "type": null,
    "perma": true
  },
  {
    "name": "Sam_Trace03_BreakDamageAddedRatio_Sub",
    "realName": "Module γ: Core Overload",
    "aim": "Buff",
    "desc": "Increases Break Effect by #1[f1]%.",
    "type": null,
    "perma": false,
    "params": [
      "MDF_PropertyValue2"
    ]
  },
  {
    "name": "Moze_Ability03_DamageAddModifier",
    "realName": "Heathprowler",
    "aim": "Buff",
    "desc": "DMG dealt increases by #1[i]%.",
    "type": "DMG Boost",
    "perma": false,
    "params": [
      "MDF_DamageAddRatio"
    ]
  },
  {
    "name": "Lingsha_Eidolon2_BreakDamageAttackRatio",
    "realName": "Leisure in Carmine Smokeveil",
    "aim": "Buff",
    "desc": "Break Effect increases by #1[i]%.",
    "type": "Break Effect Boost",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Lingsha_Eidolon6_AllDamageTypeResistance",
    "realName": "Arcadia Under Deep Seclusion",
    "aim": "Debuff",
    "desc": "All-Type RES decreases by #1[i]%.",
    "type": "All-Type RES Reduction",
    "perma": true,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Rappa_UltraMode",
    "realName": "Nindō Supreme: Aishiteru",
    "aim": "Buff",
    "desc": "Increases Weakness Break Efficiency by #1[i]% and Break Effect by #2[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_PropertyValue",
      "MDF_PropertyValue2"
    ]
  },
  {
    "name": "Rappa_PointB3_Enemy",
    "realName": "Ninjutsu Inscription: Withered Leaf",
    "aim": "Debuff",
    "desc": "Break DMG taken increases by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_TotalRatio"
    ]
  },
  {
    "name": "Fugue_DefenceDown",
    "realName": "Virtue Beckons Bliss",
    "aim": "Debuff",
    "desc": "DEF decreases by #1[i]%.",
    "type": "DEF Reduction",
    "perma": false,
    "params": [
      "MDF_DefenceDownRatio"
    ]
  },
  {
    "name": "Fugue_BPAbility",
    "realName": "Foxian Prayer",
    "aim": "Buff",
    "desc": "Break Effect increases by #1[i]%. Can also reduce Toughness when attacking enemies that don't have the corresponding Weakness Type, with the effect equivalent to #2[i]% of the original Toughness Reduction value. This cannot stack with other Toughness Reduction effects that also ignore Weakness Type.",
    "type": "Foxian Prayer",
    "perma": true,
    "params": [
      "MDF_BreakDamageAdd",
      "MDF_PropertyRatio"
    ]
  },
  {
    "name": "Fugue_BPAbilityBonusListen",
    "realName": "Torrid Scorch",
    "aim": "Other",
    "desc": "The Basic ATK \"Radiant Streak\" is enhanced to \"Fiery Caress\" that can deal Blast DMG. Every time an ally target with \"Foxian Prayer\" attacks, Fugue has a #1[i]% base chance to reduce the attacked enemy target's DEF by #2[i]%, lasting for #3[i] turn(s).",
    "type": null,
    "perma": true,
    "params": [
      "MDF_Chance",
      "MDF_DefenceDownRatio",
      "MDF_LifeTime"
    ]
  },
  {
    "name": "Rappa_AbilityEidolon1",
    "realName": "Returned Is the Revenant With No Ferry Toll",
    "aim": "Buff",
    "desc": "When dealing DMG, ignores #1[i]% of the enemy targets' DEF. After exiting \"Sealform,\" regenerates #2[i] Energy.",
    "type": null,
    "perma": true,
    "params": [
      "SkillRank_Rank01_P1_Ratio",
      "#SkillRank_Rank01_P2_Value"
    ]
  },
  {
    "name": "Rappa_AbilityEidolon4",
    "realName": "Lost Is the Nindō Devoured by Time",
    "aim": "Buff",
    "desc": "Increases SPD by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "#SkillRank_Rank04_P1_Ratio"
    ]
  },
  {
    "name": "Rappa_Break_Modifier_ForShow",
    "realName": "Ninja Tech: Endurance Gauge",
    "aim": "Buff",
    "desc": "The next time the third hit of \"Ningu: Demonbane Petalblade\" is launched, the additionally dealt Break DMG multiplier increases by #1[i]%, and the Toughness Reduction increases by #2[i].",
    "type": null,
    "perma": true,
    "params": [
      "_CurrentRatio",
      "_CurrentValue"
    ]
  },
  {
    "name": "Jiaoqiu_Debuff_Flavor",
    "realName": "Ashen Roast",
    "aim": "Debuff",
    "desc": "Increases DMG received by #1[f1]%. This unit can be considered as Burned. While Ashen Roast is active, takes Fire DMG at the start of each turn.",
    "type": "Ashen Roast",
    "perma": true,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Jiaoqiu_Eidolon1_ListenDamage",
    "realName": "Pentapathic Transference",
    "aim": "Buff",
    "desc": "Increases DMG dealt to enemies afflicted with Ashen Roast by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "#SkillRank_Rank01_P1_ExtraRatio"
    ]
  },
  {
    "name": "Moze_Eidolon2Bonus",
    "realName": "Additional DMG Multiplier Boost",
    "aim": "Buff",
    "desc": "Increases Additional DMG multiplier by #1[i]%.",
    "type": "Additional DMG Multiplier Boost",
    "perma": false,
    "params": [
      "MDF_AttackRatio"
    ]
  },
  {
    "name": "Sunday_10_Ability02_Property",
    "realName": "Benison of Paper and Rites",
    "aim": "Buff",
    "desc": "DMG dealt increases by #1[i]%.",
    "type": "DMG Boost",
    "perma": false,
    "params": [
      "MDF_PropertyRatio"
    ]
  },
  {
    "name": "Sunday_10_Ability03_Link",
    "realName": "The Beatified",
    "aim": "Buff",
    "desc": "CRIT DMG increases by #1[f1]%.",
    "type": "The Beatified",
    "perma": true,
    "params": [
      "MDF_PropertyFinal",
      "#SkillRank_Rank02_P1_AddDamage"
    ]
  },
  {
    "name": "Sunday_10_CritUp",
    "realName": "The Sorrowing Body",
    "aim": "Buff",
    "desc": "CRIT Rate increases by #1[f1]%.",
    "type": "CRIT Rate Boost",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Sunday_10_Ability02_Property02",
    "realName": "Benison of Paper and Rites",
    "aim": "Buff",
    "desc": "DMG dealt increases by #1[i]%.",
    "type": null,
    "perma": false,
    "params": [
      "MDF_PropertyRatio02"
    ]
  },
  {
    "name": "Sunday_10_Eidolon2_SpeedUp",
    "realName": "Faith Outstrips Frailty",
    "aim": "Buff",
    "desc": "SPD increases by #1[i].",
    "type": "SPD Boost",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Sunday_10_Ability02_DecreaseBPCost",
    "realName": "Rest Day's Longing",
    "aim": "Buff",
    "desc": "Skill does not consume Skill Points.",
    "type": "Rest Day's Longing",
    "perma": true
  },
  {
    "name": "Moze_Eidolon2_Bonus",
    "realName": "ATK Boost",
    "aim": "Buff",
    "desc": "ATK increases by #1[i]%.",
    "type": "ATK Boost",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Yunli_Eidolon4",
    "realName": "Artisan's Ironsong",
    "aim": "Buff",
    "desc": "Increases Effect RES by #1[i]%.",
    "type": "Effect RES Boost",
    "perma": true,
    "params": [
      "MDF_ProbabilityValue"
    ]
  },
  {
    "name": "Yunli_Blocking_CritDamage",
    "realName": "Earthbind, Etherbreak",
    "aim": "Buff",
    "desc": "Increases CRIT DMG dealt by the next Counter by #1[i]%.",
    "type": "CRIT DMG Boost",
    "perma": true,
    "params": [
      "MDF_CriticalDamage"
    ]
  },
  {
    "name": "Moze_Eidolon1_DeBonus",
    "realName": "Vengewise",
    "aim": "Debuff",
    "desc": "Follow-Up ATK DMG taken increases by #1[i]%.",
    "type": "Follow-Up ATK DMG Vulnerability",
    "perma": true,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Moze_Point01_CD",
    "realName": "Nightfeather",
    "aim": "Other",
    "desc": "The Trace \"Nightfeather\" effect's auto-trigger is still on cooldown.",
    "type": null,
    "perma": true
  },
  {
    "name": "Sunday_10_Ability02_DecreaseBPCost_PointB1CD",
    "realName": "Rest Day's Longing",
    "aim": "Other",
    "desc": "The \"Rest Day's Longing\" effect cannot be triggered yet.",
    "type": null,
    "perma": true
  },
  {
    "name": "Sunday_10_Eidolon1_SuperBonusForServant",
    "realName": "Millennium's Quietus",
    "aim": "Buff",
    "desc": "Ignores #1[i]% of enemy targets' DEF.",
    "type": "Millennium's Quietus",
    "perma": false,
    "params": [
      "MDF_PropertyRatio"
    ]
  },
  {
    "name": "Fugue_BPAbility_Eidolon1",
    "realName": "Foxian Prayer",
    "aim": "Buff",
    "desc": "Weakness Break Efficiency increases by #3[i]%. Break Effect increases by #1[i]%. Can also reduce Toughness when attacking enemies that don't have the corresponding Weakness Type, with the effect equivalent to #2[i]% of the original Toughness Reduction value. This cannot stack with other Toughness Reduction effects that also ignore Weakness Type.",
    "type": "Foxian Prayer",
    "perma": true,
    "params": [
      "MDF_BreakDamageAdd",
      "MDF_PropertyRatio",
      "MDF_StanceBreakAddRatio"
    ]
  },
  {
    "name": "TheHerta_Ability03_Bonus",
    "realName": "ATK Boost",
    "aim": "Buff",
    "desc": "ATK increases by #1[f1]%.",
    "type": "ATK Boost",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Feixiao_AttackProperty",
    "realName": "Boltcatch",
    "aim": "Buff",
    "desc": "ATK increases by #1[i]%.",
    "type": "ATK Boost",
    "perma": false,
    "params": [
      "MDF_PropertyRatio"
    ]
  },
  {
    "name": "Fugue_RedStance",
    "realName": "Cloudflame Luster",
    "aim": "Other",
    "desc": "When initial Toughness is reduced to 0, \"Cloudflame Luster\" can continue to be reduced. When \"Cloudflame Luster\" is reduced to 0, the enemy will receive Weakness Break DMG again.",
    "type": "Cloudflame Luster",
    "perma": true
  },
  {
    "name": "Feixiao_Eidolon4_Property",
    "realName": "Stormward I Hear",
    "aim": "Buff",
    "desc": "Increases SPD by #1[i]%.",
    "type": "SPD Boost",
    "perma": false,
    "params": [
      "MDF_PropertyRatio"
    ]
  },
  {
    "name": "Feixiao_Eidolon1_Property",
    "realName": "Skyward I Quell",
    "aim": "Buff",
    "desc": "Each stack additionally increases the Ultimate DMG dealt by an amount equal to #1[i]% of the original DMG.",
    "type": null,
    "perma": false,
    "params": [
      "MDF_PropertyRatio"
    ]
  },
  {
    "name": "Fugue_BPAbility_Eidolon4",
    "realName": "Foxian Prayer",
    "aim": "Buff",
    "desc": "Break DMG dealt increases by #4[i]%, Weakness Break Efficiency increases by #3[i]%, and Break Effect increases by #1[i]%. Can also reduce Toughness when attacking enemies that don't have the corresponding Weakness Type, with the effect equivalent to #2[i]% of the original Toughness Reduction value. This cannot stack with other Toughness Reduction effects that also ignore Weakness Type.",
    "type": "Foxian Prayer",
    "perma": true,
    "params": [
      "MDF_BreakDamageAdd",
      "MDF_PropertyRatio",
      "MDF_StanceBreakAddRatio",
      "MDF_BreakDamageAddedRatio"
    ]
  },
  {
    "name": "Fugue_Eidolon6",
    "realName": "Clairvoyance of Boom and Doom",
    "aim": "Buff",
    "desc": "Weakness Break Efficiency increases by #1[i]%.",
    "type": "Weakness Break Efficiency Boost",
    "perma": true,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Fugue_PointB2_Sub",
    "realName": "Sylvan Enigma",
    "aim": "Buff",
    "desc": "Break Effect increases by #1[i]%.",
    "type": "Break Effect Boost",
    "perma": false,
    "params": [
      "MDF_PropertyRatio_BreakDamageSelf"
    ]
  },
  {
    "name": "Sunday_10_Eidolon1_Active",
    "realName": "Millennium's Quietus",
    "aim": "Buff",
    "desc": "Sunday's next Skill can additionally increase the target's All-Type PEN.",
    "type": null,
    "perma": true
  },
  {
    "name": "Sunday_10_Eidolon1_SuperBonus",
    "realName": "Millennium's Quietus",
    "aim": "Buff",
    "desc": "Ignores #1[i]% of enemy targets' DEF.",
    "type": "Millennium's Quietus",
    "perma": false,
    "params": [
      "MDF_PropertyRatio",
      "MDF_PropertyRatio02"
    ]
  },
  {
    "name": "Sunday_10_MazeBonus",
    "realName": "The Glorious Mysteries",
    "aim": "Buff",
    "desc": "DMG dealt increases by #1[i]%.",
    "type": "DMG Boost",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Mydeimos_Transfer",
    "realName": "Vendetta",
    "aim": "Other",
    "desc": "Max HP increases by #1[i]. DEF remains at 0.",
    "type": "Vendetta",
    "perma": true,
    "params": [
      "MDF_HPAddValue"
    ]
  },
  {
    "name": "Mydeimos_Trace03_Sub",
    "realName": "Bloodied Chiton",
    "aim": "Buff",
    "desc": "CRIT Rate increases by #1[f1]%, Charge ratio from enemy targets' DMG increases by #2[f1]%, and the HP restored when receiving healing increases by #3[f2]%.",
    "type": "Bloodied Chiton",
    "perma": true,
    "params": [
      "MDF_PropertyValue",
      "MDF_PropertyValue2",
      "MDF_PropertyValue3"
    ]
  },
  {
    "name": "Tribbie_SKL02_Bonus_Buff",
    "realName": "Numinosity",
    "aim": "Buff",
    "desc": "All-Type RES PEN increases by #1[f1]%.",
    "type": "All-Type RES PEN Boost",
    "perma": true,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Tribbie_SKL03_Bonus_Debuff",
    "realName": "Guess Who Lives Here",
    "aim": "Debuff",
    "desc": "Received DMG increases by #1[f1]%.",
    "type": "Vulnerability",
    "perma": true,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Tribbie_PointB1_DamageUpModifier",
    "realName": "Lamb Outside the Wall...",
    "aim": "Buff",
    "desc": "Each stack increases DMG dealt by #1[i]%. This effect stacks up to #2[i] time(s).",
    "type": "DMG Boost",
    "perma": true,
    "params": [
      "#SkillTree_PointB1_P1_Ratio",
      "#SkillTree_PointB1_P2_MaxLayer"
    ]
  },
  {
    "name": "Tribbie_SKL03_PointB2",
    "realName": "Glass Ball with Wings!",
    "aim": "Buff",
    "desc": "Max HP increases by #1[i].",
    "type": "Max HP Boost",
    "perma": true,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Tribbie_Eidolon4_Bonus",
    "realName": "Peace of Empathy Bond",
    "aim": "Buff",
    "desc": "When dealing DMG, ignores #1[i]% of the enemy target's DEF.",
    "type": "Peace of Empathy Bond",
    "perma": true,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Feixiao_Eidolon2_CD",
    "realName": "Moonward I Wish",
    "aim": "Other",
    "desc": "In the Talent's effect, for every 1 instance of Follow-Up ATK launched by ally targets, Feixiao gains 1 point of \"Flying Aureus.\" This effect can still trigger #1[i] time(s).",
    "type": null,
    "perma": true,
    "params": [
      "MDF_Count"
    ]
  },
  {
    "name": "TheHerta_Trace02_Bonus",
    "realName": "Message From Beyond the Veil",
    "aim": "Buff",
    "desc": "CRIT DMG increases by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "TheHerta_Eidolon4_Bonus",
    "realName": "The Sixteenth Key",
    "aim": "Buff",
    "desc": "SPD increases by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "TheHerta_SKL21",
    "realName": "Inspiration",
    "aim": "Other",
    "desc": "Skill is enhanced to \"Hear Me Out.\"",
    "type": null,
    "perma": true
  },
  {
    "name": "TheHerta_Passive_MagicMark",
    "realName": "Interpretation",
    "aim": "Other",
    "desc": "The Herta's Enhanced Skill will additionally deal DMG to all enemies based on the number of \"Interpretation\" stacks on the target.",
    "type": null,
    "perma": true
  },
  {
    "name": "Phainon_Ultra",
    "realName": "Divine Vessel",
    "aim": "Other",
    "desc": "Immune to Crowd Control debuffs. ATK increases by #1[i]%, and Max HP increases by #2[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_PropertyRatio",
      "MDF_PropertyRatio2"
    ]
  },
  {
    "name": "Phainon_Tree03_Property",
    "realName": "Shine with Valor",
    "aim": "Buff",
    "desc": "Each stack increases ATK by #1[i]%. This effect stacks up to #2[i] time(s).",
    "type": null,
    "perma": false,
    "params": [
      "MDF_PropertyRatio",
      "MDF_MaxLayer"
    ]
  },
  {
    "name": "Phainon_Passive_Property",
    "realName": "Pyric Corpus",
    "aim": "Buff",
    "desc": "CRIT DMG increases by #1[i]%.",
    "type": "CRIT DMG Boost",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Aglaea_Ability03",
    "realName": "Supreme Stance",
    "aim": "Buff",
    "desc": "Basic ATK is enhanced to \"Slash by a Thousandfold Kiss.\"",
    "type": "Supreme Stance",
    "perma": true
  },
  {
    "name": "Aglaea_Eidolon2_Effect",
    "realName": "Sail on the Raft of Eyelids",
    "aim": "Buff",
    "desc": "When dealing DMG, ignores #1[i]% of the target's DEF.",
    "type": null,
    "perma": true,
    "params": [
      "_IgnoreDefenceRatioTotal"
    ]
  },
  {
    "name": "Sunday_10_CriticalChanceConvert",
    "realName": "Dawn of Sidereal Cacophony",
    "aim": "Buff",
    "desc": "CRIT DMG increases by #1[f1]%.",
    "type": "CRIT DMG Boost",
    "perma": false,
    "params": [
      "_CritialDamage_Add"
    ]
  },
  {
    "name": "TheHerta_Trace03_ExtraDamage",
    "realName": "Answer",
    "aim": "Other",
    "desc": "Each stack increases the multiplier of the DMG dealt by Ultimate by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Aglaea_AbilityPointB3_ServantAddDmg",
    "realName": "The Speeding Sol",
    "aim": "Buff",
    "desc": "DMG dealt increases by #1[i]%.",
    "type": "DMG Boost",
    "perma": true,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Aglaea_Ability03_Servant_PointB1_AddAttack",
    "realName": "The Myopic's Doom",
    "aim": "Buff",
    "desc": "ATK increases by #1[i].",
    "type": "ATK Boost",
    "perma": false,
    "params": [
      "_AttackConvert"
    ]
  },
  {
    "name": "Fugue_PointB3_Sub",
    "realName": "Phecda Primordia",
    "aim": "Buff",
    "desc": "Each stack increases Break Effect by #1[i]%. This effect can stack up to #2[i] time(s).",
    "type": "Break Effect Boost",
    "perma": false,
    "params": [
      "MDF_BreakDamageAdd",
      "#SkillTree_PointB3_P3_Layer"
    ]
  },
  {
    "name": "Anaxa_UltraDebuff",
    "realName": "Sublimation",
    "aim": "Debuff",
    "desc": "Physical, Fire, Ice, Lightning, Wind, Quantum, and Imaginary Weaknesses are added at the same time.",
    "type": "Sublimation",
    "perma": false
  },
  {
    "name": "Anaxa_Trace02_SubAll",
    "realName": "Imperative Hiatus",
    "aim": "Buff",
    "desc": "DMG dealt increases by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_PropertyRatio"
    ]
  },
  {
    "name": "Anaxa_BPAbility_Bonus",
    "realName": "Blaze, Plunged to Canyon",
    "aim": "Buff",
    "desc": "Each stack increases ATK by #1[i]%. This effect stacks up to #2[i] time(s).",
    "type": "ATK Boost",
    "perma": false,
    "params": [
      "MDF_PropertyValue",
      "MDF_MaxLayer"
    ]
  },
  {
    "name": "Aglaea_Eidolon6_Effect",
    "realName": "Fluctuate in the Tapestry of Fates",
    "aim": "Buff",
    "desc": "Lightning RES PEN increases by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_PropertyValue",
      "MDF_PropertyValue2"
    ]
  },
  {
    "name": "Aglaea_GoldenSword_Mark",
    "realName": "Seam Stitch",
    "aim": "Debuff",
    "desc": "After receiving Aglaea's attack, further takes Lightning Additional DMG equal to #1[i]% of Aglaea's ATK. Garmentmaker will prioritize this target to attack.",
    "type": "Seam Stitch",
    "perma": true,
    "params": [
      "MDF_PropertyValue",
      "MDF_PropertyValue2"
    ]
  },
  {
    "name": "Phainon_Ultimate_TeamStealth",
    "realName": "Ruinous Irontomb",
    "aim": "Other",
    "desc": "Those in the Departed state cannot be designated as ability targets and will not appear in the Action Order.",
    "type": null,
    "perma": true
  },
  {
    "name": "Sunday_10_MazeBonus_ForCaster",
    "realName": "The Glorious Mysteries",
    "aim": "Other",
    "desc": "The next time this unit uses an ability on an ally target, the target's DMG dealt increases.",
    "type": null,
    "perma": true
  },
  {
    "name": "TheHerta_TechniqueUsage_AttackRatioUp",
    "realName": "Vibe Checker",
    "aim": "Buff",
    "desc": "Increases ATK by #1[i]%.",
    "type": "ATK Boost",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Aglaea_Eidolon6_Effect2",
    "realName": "Fluctuate in the Tapestry of Fates",
    "aim": "Buff",
    "desc": "Lightning RES PEN increases by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Memosprite_AglaeaServant_AddSpeed",
    "realName": "A Body Brewed by Tears",
    "aim": "Buff",
    "desc": "SPD increases by #1[i].",
    "type": "SPD Boost",
    "perma": true,
    "params": [
      "SpeedAddTotal"
    ]
  },
  {
    "name": "Memosprite_AglaeaServant_SummonerAddSpeed",
    "realName": "A Body Brewed by Tears",
    "aim": "Buff",
    "desc": "SPD increases by #1[i]%.",
    "type": "SPD Boost",
    "perma": true,
    "params": [
      "SpeedAddTotal"
    ]
  },
  {
    "name": "Memosprite_HyacineServant_MaxHpHalo",
    "realName": "After Rain",
    "aim": "Buff",
    "desc": "Max HP increases by #1[i]% plus #2[i].",
    "type": "After Rain",
    "perma": true,
    "params": [
      "MDF_PropertyValue",
      "MDF_HaloMaxHPValue"
    ]
  },
  {
    "name": "Hyacine_Ability03_MaxHP_Grow",
    "realName": "After Rain",
    "aim": "Buff",
    "desc": "Max HP increases by #1[i]% plus #2[i].",
    "type": null,
    "perma": true,
    "params": [
      "MDF_PropertyValue",
      "MDF_MaxHPValue"
    ]
  },
  {
    "name": "Hyacine_PointB3_Effect",
    "realName": "Tempestuous Halt",
    "aim": "Buff",
    "desc": "Max HP increases by #1[i]% and Outgoing Healing increases by #2[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "_MaxHPAdd",
      "_HealHPRatioAdd",
      "_MaxCritDmgAdd"
    ]
  },
  {
    "name": "TheHerta_Eidolon2_CD",
    "realName": "Wind Through Keyhole",
    "aim": "Other",
    "desc": "The \"Wind Through Keyhole\" action advance effect cannot be triggered yet.",
    "type": null,
    "perma": true
  },
  {
    "name": "Phainon_Ultimate_Energy",
    "realName": "Scourge",
    "aim": "Other",
    "desc": "\"Scourge\" points. \"Scourge\" can be consumed to use Skill \"Foundation: Stardeath Verdict.\"",
    "type": null,
    "perma": true,
    "params": [
      "MDF_Count"
    ]
  },
  {
    "name": "Anaxa_Trace02_Sub",
    "realName": "Imperative Hiatus",
    "aim": "Buff",
    "desc": "CRIT DMG increases by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_PropertyRatio"
    ]
  },
  {
    "name": "Phainon_Guard",
    "realName": "Soulscorch",
    "aim": "Buff",
    "desc": "DMG taken decreases by #1[i]%. Launches Counter after enemy targets finish taking actions.",
    "type": "Soulscorch",
    "perma": true,
    "params": [
      "MDF_PropertyRatio"
    ]
  },
  {
    "name": "Castorice_Ability03_AllDamageTypeResistance",
    "realName": "All-Type RES Reduction",
    "aim": "Debuff",
    "desc": "All-Type RES decreases by #1[f1]%, lasting until the Territory ends.",
    "type": "All-Type RES Reduction",
    "perma": true,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Castorice_Passive_AllDamageTypeAddedRatio",
    "realName": "DMG Boost",
    "aim": "Buff",
    "desc": "Each stack increases DMG dealt by #1[i]%. This effect stacks up to #2[i] time(s).",
    "type": "DMG Boost",
    "perma": false,
    "params": [
      "MDF_PropertyValue",
      "MDF_MaxLayer"
    ]
  },
  {
    "name": "Memosprite_Castorice_SpeedRatio",
    "realName": "Inverted Torch",
    "aim": "Buff",
    "desc": "SPD increases by #1[i]%.",
    "type": "SPD Boost",
    "perma": true,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Castorice_PointB3_AllDamageTypeAddedRatio",
    "realName": "Where The West Wind Dwells",
    "aim": "Buff",
    "desc": "Every stack increases DMG dealt by #1[i]%, lasting until the end of this turn.",
    "type": "DMG Boost",
    "perma": true,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Castorice_Eidolon1_AllDamageTypeAddedRatio",
    "realName": "Snowbound Maiden, Memory to Tomb",
    "aim": "Buff",
    "desc": "Every stack increases DMG dealt by #1[i]%, lasting until the end of this turn.",
    "type": "DMG Boost",
    "perma": true,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Castorice_Eidolon4_HealTakenRatio",
    "realName": "Rest in Songs of Gloom",
    "aim": "Buff",
    "desc": "The HP restored when receiving healing increases by #1[i]%.",
    "type": "HP Restoration Boost",
    "perma": true,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Tribbie_Eidolon6_Bonus",
    "realName": "Morrow of Star Shine",
    "aim": "Buff",
    "desc": "The DMG dealt by Talent's Follow-Up ATK increases by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Anaxa_Eidolon1_Property",
    "realName": "Magician, Isolated by Stars",
    "aim": "Debuff",
    "desc": "DEF decreases by #1[i]%.",
    "type": "DEF Reduction",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Anaxa_Eidolon2_Property",
    "realName": "Soul, True to History",
    "aim": "Debuff",
    "desc": "All-Type RES decreases by #1[i]%.",
    "type": "All-Type RES Reduction",
    "perma": true,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Anaxa_Eidolon6_DamageUp",
    "realName": "Everything Is in Everything",
    "aim": "Buff",
    "desc": "DMG dealt is #1[i]% of the original DMG.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_PropertyRatio"
    ]
  },
  {
    "name": "Memosprite_CastoriceServant_AllDamageTypeAddedRatio",
    "realName": "Roar Rumbles the Realm",
    "aim": "Buff",
    "desc": "DMG dealt increases by #1[i]%.",
    "type": "DMG Boost",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Tribbie_SKL02_Bonus",
    "realName": "Numinosity",
    "aim": "Buff",
    "desc": "All-Type RES PEN increases by #1[f1]%.",
    "type": "All-Type RES PEN Boost",
    "perma": true,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Tribbie_SKL03_Bonus",
    "realName": "Guess Who Lives Here",
    "aim": "Other",
    "desc": "While the Zone exists, increases all enemies' DMG taken by #1[f1]%, and all allies deal Additional DMG when attacking enemies.",
    "type": "Guess Who Lives Here",
    "perma": true,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Cerydra_Ability02_Target_Lv1",
    "realName": "Military Merit",
    "aim": "Buff",
    "desc": "Increases ATK by #1[i]. After using an attack, Cerydra additionally deals 1 instance of Additional DMG, with #2[i] trigger count(s) remaining.",
    "type": "Military Merit",
    "perma": true,
    "params": [
      "MDF_PropertyValue",
      "DV_PursuedDamage_LimitCount"
    ]
  },
  {
    "name": "Cerydra_Ability02_Target_Lv2",
    "realName": "Peerage",
    "aim": "Buff",
    "desc": "ATK increases by #1[i], CRIT DMG for the Skill DMG dealt increases by #2[i]%, and All-Type RES PEN increases by #3[f1]%. After using an attack, Cerydra additionally deals 1 instance of Additional DMG, with #4[i] trigger count(s) remaining. Triggers Coup de Main when using Skill on enemy targets.",
    "type": "Peerage",
    "perma": true,
    "params": [
      "MDF_PropertyValue",
      "MDF_PropertyValue2",
      "MDF_PropertyValue3",
      "DV_PursuedDamage_LimitCount"
    ]
  },
  {
    "name": "Cerydra_PointB1_CriticalDamageAddedRatio_Sub",
    "realName": "Veni",
    "aim": "Buff",
    "desc": "CRIT DMG increases by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_PropertyValue2"
    ]
  },
  {
    "name": "Cerydra_PointB3",
    "realName": "Vici",
    "aim": "Buff",
    "desc": "SPD increases by #1[i].",
    "type": "SPD Boost",
    "perma": true,
    "params": [
      "#SkillTree_PointB3_P2_Value"
    ]
  },
  {
    "name": "Mydeimos_UltraTarget",
    "realName": "Throne of Bones",
    "aim": "Other",
    "desc": "Prioritizes attacking this target in the next \"Godslayer Be God.\"",
    "type": null,
    "perma": true
  },
  {
    "name": "GlobalAbility_Castorice_DeathTime",
    "realName": "Mooncocoon",
    "aim": "Other",
    "desc": "This character delays becoming downed and can take actions normally. After the action and before the next turn, if they receive healing or they gain a Shield, \"Mooncocoon\" is removed. Otherwise, they will be downed immediately.",
    "type": "Mooncocoon",
    "perma": true
  },
  {
    "name": "Tribbie_CanTriggerInsertTag",
    "realName": "Busy as Tribbie",
    "aim": "Other",
    "desc": "After using Ultimate, Tribbie can launch Follow-Up ATK.",
    "type": null,
    "perma": true
  },
  {
    "name": "Mydeimos_Eidolon4",
    "realName": "Siren Jolts the Laconic Lion",
    "aim": "Buff",
    "desc": "Increases CRIT DMG by #1[i]%.",
    "type": "CRIT DMG Boost",
    "perma": true,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Mydeimos_Trace01",
    "realName": "Earth and Water",
    "aim": "Buff",
    "desc": "During the \"Vendetta\" state, Mydei will not exit the \"Vendetta\" state when receiving a killing blow.",
    "type": "Earth and Water",
    "perma": true
  },
  {
    "name": "Castorice_Eidolon2_Count",
    "realName": "Ardent Will",
    "aim": "Other",
    "desc": "Can be used to offset the HP cost of Netherwing's Memosprite Skill, \"Breath Scorches the Shadow.\" A maximum of #1[i] \"Ardent Will\" can be possessed at any given time.",
    "type": "Ardent Will",
    "perma": true,
    "params": [
      "MDF_MaxLayer"
    ]
  },
  {
    "name": "Hyacine_Passive_Effect",
    "realName": "First Light Heals the World",
    "aim": "Buff",
    "desc": "DMG dealt increases by #1[i]%.",
    "type": "DMG Boost",
    "perma": true,
    "params": [
      "MDF_DamageAddRatioTotal"
    ]
  },
  {
    "name": "Castorice_Eidolon6_QuantumPenetrate",
    "realName": "Await for Years to Loom",
    "aim": "Buff",
    "desc": "When dealing DMG, increases Quantum RES PEN by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Cipher_BpKuoSan",
    "realName": "Patron",
    "aim": "Debuff",
    "desc": "While the \"Patron\" state is active, a tally of the DMG dealt by ally targets will be kept by Cipher. And Cipher's Ultimate will deal True DMG based on this tally.",
    "type": "Become a Patron",
    "perma": true,
    "params": [
      "MDF_PropertyRatio"
    ]
  },
  {
    "name": "Cipher_BpKuoSan_Self",
    "realName": "Patron",
    "aim": "Other",
    "desc": "#1[i] DMG has been tallied.",
    "type": null,
    "perma": true,
    "params": [
      "SkillP01_FinalDamage"
    ]
  },
  {
    "name": "Cipher_BP_Bonus",
    "realName": "Hey, Jackpot for the Taking",
    "aim": "Buff",
    "desc": "ATK increases by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Cipher_BP_Debuff",
    "realName": "Hey, Jackpot for the Taking",
    "aim": "Debuff",
    "desc": "DMG dealt to allies decreases by #1[i]%.",
    "type": "Weaken",
    "perma": true,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Cipher_PointB3_Debuff",
    "realName": "Sleight of Sky",
    "aim": "Debuff",
    "desc": "DMG received increases by #1[i]%.",
    "type": "Vulnerability",
    "perma": true,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Anaxa_Passive_Mark",
    "realName": "Qualitative Disclosure",
    "aim": "Debuff",
    "desc": "Anaxa deals #1[i]% increased DMG to the target. Furthermore, after using Basic ATK or Skill on the target, he uses 1 additional instance of Skill on it.",
    "type": "Qualitative Disclosure",
    "perma": true,
    "params": [
      "MDF_PropertyRatio"
    ]
  },
  {
    "name": "Memosprite_HyacineServant_Eidolon2SpeedUp",
    "realName": "Come Sit in My Courtyard",
    "aim": "Buff",
    "desc": "SPD increases by #1[i]%.",
    "type": "SPD Boost",
    "perma": true,
    "params": [
      "MDF_SpeedUpRatio"
    ]
  },
  {
    "name": "Memosprite_HyacineServant_Eidolon6_PenetrateRatio",
    "realName": "O Sky, Heed My Plea",
    "aim": "Buff",
    "desc": "All-Type RES PEN increases by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_PenetrateRatio"
    ]
  },
  {
    "name": "Hyacine_Maze_AddMaxHp",
    "realName": "Day So Right, Life So Fine!",
    "aim": "Buff",
    "desc": "Max HP increases by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "_MaxHPAdd"
    ]
  },
  {
    "name": "Memosprite_CastoriceServant_InsideExplode",
    "realName": "Back to the Black",
    "aim": "Other",
    "desc": "Triggers the Talent effect of \"Wings Sweep the Ruins\" the next time \"Breath Scorches the Shadow\" is used.",
    "type": null,
    "perma": true
  },
  {
    "name": "Cipher_BpKuoSan_Insert_CD",
    "realName": "The Hospitable Dolosian",
    "aim": "Other",
    "desc": "Talent's Follow-Up ATK cannot yet be triggered.",
    "type": null,
    "perma": true
  },
  {
    "name": "Cipher_Eidolon2_Debuff",
    "realName": "In the Fray, Nab On a Spree",
    "aim": "Debuff",
    "desc": "DMG received increases by #1[i]%.",
    "type": "Vulnerability",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Cipher_Eidolon1_Bonus",
    "realName": "Read the Room, Seek the Glee",
    "aim": "Buff",
    "desc": "ATK increases by #1[i]%.",
    "type": "ATK Boost",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Phainon_Ultimate_Weakness",
    "realName": "Ruinous Irontomb",
    "aim": "Debuff",
    "desc": "Additionally implanted Physical Weakness.",
    "type": null,
    "perma": true
  },
  {
    "name": "Phainon_Eidolon1_Property",
    "realName": "Fire and Light Bind Virtue and Vice",
    "aim": "Buff",
    "desc": "CRIT DMG increases by #1[i]%.",
    "type": "CRIT DMG Boost",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Phainon_Eidolon2_Property",
    "realName": "Sky and Earth Churn Mortal Froth",
    "aim": "Buff",
    "desc": "Physical RES PEN increases by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_PropertyRatio"
    ]
  },
  {
    "name": "Memosprite_HyacineServant_Passive_Mark",
    "realName": "Rainclouds, Time to Go!",
    "aim": "Other",
    "desc": "The tally of healing: #1[i]",
    "type": null,
    "perma": true,
    "params": [
      "MDF_HealValueTotal"
    ]
  },
  {
    "name": "Phainon_SPOverflow",
    "realName": "Coreflame",
    "aim": "Other",
    "desc": "The current number of overflow \"Coreflame\" points is #1[i]. Gains an equal amount of \"Coreflame\" when the transformation ends.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_Count"
    ]
  },
  {
    "name": "Phainon_Trace02_CD",
    "realName": "Bide in Flames",
    "aim": "Other",
    "desc": "The \"Bide in Flames\" effect cannot be triggered yet.",
    "type": null,
    "perma": true
  },
  {
    "name": "Constance_Aura",
    "realName": "Lick... Enkindled Betrayal",
    "aim": "Buff",
    "desc": "Weakness Break Efficiency increases by #1[i]%. Toughness Reduction taken by enemy targets that are not Weakness Broken can also be converted to Super Break DMG.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Advanced_Silwolf_Normal_Bug1",
    "realName": "Type-1 Bug",
    "aim": "Debuff",
    "desc": "ATK decreases by #1[f1]%.",
    "type": "ATK Reduction",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Advanced_Silwolf_Normal_Bug2",
    "realName": "Type-2 Bug",
    "aim": "Debuff",
    "desc": "DEF decreases by #1[f1]%.",
    "type": "DEF Reduction",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Advanced_Silwolf_Normal_Bug3",
    "realName": "Type-3 Bug",
    "aim": "Debuff",
    "desc": "SPD decreases by #1[f1]%.",
    "type": "Slow",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Advanced_Silwolf_BPAbility_WeakType",
    "realName": "Extra Weakness",
    "aim": "Debuff",
    "desc": "Additionally implanted Weakness. Corresponding RES is lowered by #1[i]%.",
    "type": "Implant a Weakness",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Advanced_Silwolf_BPAbility_WeakType_Extra",
    "realName": "Extra Weakness",
    "aim": "Debuff",
    "desc": "Additionally implanted Weakness. Corresponding RES is lowered by #1[i]%.",
    "type": "Implant a Weakness",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Advanced_Silwolf_BPAbility_AllDamageTypeResistanceDown",
    "realName": "All-Type RES Reduction",
    "aim": "Debuff",
    "desc": "All-Type RES decreases by #1[f1]%.",
    "type": "All-Type RES Reduction",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Advanced_Silwolf_Eidolon2_AllDamageTypeTakenRatio",
    "realName": "Vulnerability",
    "aim": "Debuff",
    "desc": "DMG taken increases by #1[i]%.",
    "type": "Vulnerability",
    "perma": true,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Advanced_Silwolf_Ultimate_DefenceRatioDown",
    "realName": "DEF Reduction",
    "aim": "Debuff",
    "desc": "DEF decreases by #1[f1]%.",
    "type": "DEF Reduction",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Advanced_Silwolf_BPAbility_WeakType_Fire",
    "realName": "Additional Fire Weakness",
    "aim": "Debuff",
    "desc": "Additionally implanted Fire Weakness. Fire RES decreases by #1[i]%.",
    "type": "Implant a Weakness",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Advanced_Silwolf_BPAbility_WeakType_Ice",
    "realName": "Additional Ice Weakness",
    "aim": "Debuff",
    "desc": "Additionally implanted Ice Weakness. Ice RES decreases by #1[i]%.",
    "type": "Implant a Weakness",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Advanced_Silwolf_BPAbility_WeakType_Wind",
    "realName": "Additional Wind Weakness",
    "aim": "Debuff",
    "desc": "Additionally implanted Wind Weakness. Wind RES decreases by #1[i]%.",
    "type": "Implant a Weakness",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Advanced_Silwolf_BPAbility_WeakType_Physical",
    "realName": "Additional Physical Weakness",
    "aim": "Debuff",
    "desc": "Additionally implanted Physical Weakness. Physical RES decreases by #1[i]%.",
    "type": "Implant a Weakness",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Advanced_Silwolf_BPAbility_WeakType_Thunder",
    "realName": "Additional Lightning Weakness",
    "aim": "Debuff",
    "desc": "Additionally implanted Lightning Weakness. Lightning RES decreases by #1[i]%.",
    "type": "Implant a Weakness",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Advanced_Silwolf_BPAbility_WeakType_Quantum",
    "realName": "Additional Quantum Weakness",
    "aim": "Debuff",
    "desc": "Additionally implanted Quantum Weakness. Quantum RES decreases by #1[i]%.",
    "type": "Implant a Weakness",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Advanced_Silwolf_BPAbility_WeakType_Imaginary",
    "realName": "Additional Imaginary Weakness",
    "aim": "Debuff",
    "desc": "Additionally implanted Imaginary Weakness. Imaginary RES decreases by #1[i]%.",
    "type": "Implant a Weakness",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Phainon_UltraEnd_Property",
    "realName": "He Who Bears the World Must Burn",
    "aim": "Buff",
    "desc": "SPD increases by #1[i]%.",
    "type": null,
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Advanced_Silwolf_Eidolon2_Fire",
    "realName": "Fire RES Reduction",
    "aim": "Debuff",
    "desc": "Fire RES decreases by #1[i]%.",
    "type": "Fire RES Reduction",
    "perma": true,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Advanced_Silwolf_Eidolon2_Ice",
    "realName": "Ice RES Reduction",
    "aim": "Debuff",
    "desc": "Ice RES decreases by #1[i]%.",
    "type": "Ice RES Reduction",
    "perma": true,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Advanced_Silwolf_Eidolon2_Wind",
    "realName": "Wind RES Reduction",
    "aim": "Debuff",
    "desc": "Wind RES decreases by #1[i]%.",
    "type": "Wind RES Reduction",
    "perma": true,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Advanced_Silwolf_Eidolon2_Physical",
    "realName": "Physical RES Reduction",
    "aim": "Debuff",
    "desc": "Physical RES decreases by #1[i]%.",
    "type": "Physical RES Reduction",
    "perma": true,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Advanced_Silwolf_Eidolon2_Thunder",
    "realName": "Lightning RES Reduction",
    "aim": "Debuff",
    "desc": "Lightning RES decreases by #1[i]%.",
    "type": "Lightning RES Reduction",
    "perma": true,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Advanced_Silwolf_Eidolon2_Quantum",
    "realName": "Quantum RES Reduction",
    "aim": "Debuff",
    "desc": "Quantum RES decreases by #1[i]%.",
    "type": "Quantum RES Reduction",
    "perma": true,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Advanced_Silwolf_Eidolon2_Imaginary",
    "realName": "Imaginary RES Reduction",
    "aim": "Debuff",
    "desc": "Imaginary RES decreases by #1[i]%.",
    "type": "Imaginary RES Reduction",
    "perma": true,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Advanced_Kafka_Passive_CanAttack",
    "realName": "Gentle but Cruel",
    "aim": "Other",
    "desc": "The effect of Talent \"Gentle but Cruel\" can now be triggered.",
    "type": null,
    "perma": true
  },
  {
    "name": "Advanced_Kafka_PassiveDotDamage_Eidolon1",
    "realName": "DoT Vulnerability",
    "aim": "Debuff",
    "desc": "DoT taken increases by #1[i]%.",
    "type": "DoT Vulnerability",
    "perma": false,
    "params": [
      "MDF_DotRatio"
    ]
  },
  {
    "name": "Advanced_Kafka_PointB1_Effect",
    "realName": "Torture",
    "aim": "Buff",
    "desc": "ATK increases by #1[i]%.",
    "type": null,
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Advanced_Ren_Attack_Transfer",
    "realName": "Hellscape",
    "aim": "Other",
    "desc": "Basic ATK \"Shard Sword\" is enhanced to \"Forest of Swords\" that deals Blast DMG. The chance of being targeted by enemy targets greatly increases.",
    "type": "Enhanced Basic ATK",
    "perma": true
  },
  {
    "name": "Advanced_Ren_Qi",
    "realName": "Charge",
    "aim": "Other",
    "desc": "At maximum Charge stacks, expends all stacks and immediately deals 1 instance of Follow-Up ATK to all enemies.",
    "type": null,
    "perma": true
  },
  {
    "name": "Advanced_Ren_Attack",
    "realName": "DMG Boost",
    "aim": "Buff",
    "desc": "DMG dealt increases by #1[i]%.",
    "type": "DMG Boost",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Advanced_Ren_Trace02",
    "realName": "Neverending Deaths",
    "aim": "Buff",
    "desc": "Incoming Healing increases by #1[i]%.",
    "type": "Outgoing Healing Boost",
    "perma": true,
    "params": [
      "#SkillTree_PointB2_P2_HealTakenRatio"
    ]
  },
  {
    "name": "Advanced_Ren_Eidolon4",
    "realName": "Heal All Bones",
    "aim": "Buff",
    "desc": "Max HP increases by #1[i]%.",
    "type": "Max HP Boost",
    "perma": true,
    "params": [
      "MDF_HPIncrease"
    ]
  },
  {
    "name": "Advanced_Ren_Eidolon2",
    "realName": "Grievous Penitence",
    "aim": "Buff",
    "desc": "CRIT Rate increases by #1[i]%.",
    "type": "CRIT Rate Boost",
    "perma": false,
    "params": [
      "MDF_CriticalIncrease"
    ]
  },
  {
    "name": "Advanced_Ren_Ability03_Listen",
    "realName": "Death Sentence",
    "aim": "Other",
    "desc": "HP Loss: #1[i]",
    "type": null,
    "perma": true,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Advanced_Jingliu_MoonMad",
    "realName": "Moonlight",
    "aim": "Buff",
    "desc": "CRIT DMG increases by #1[i]%.",
    "type": "CRIT DMG Boost",
    "perma": true,
    "params": [
      "MDF_PropertyValue",
      "MDF_PropertyValue2"
    ]
  },
  {
    "name": "AdvancedJingliu_PointB3",
    "realName": "Frost Wraith",
    "aim": "Buff",
    "desc": "Next attack ignores #1[i]% of target's DEF.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Advanced_Jingliu_Trace_B1_Resist",
    "realName": "Deathrealm",
    "aim": "Buff",
    "desc": "Effect RES increases by #1[i]%, and Ultimate DMG dealt increases by #2[i]%.",
    "type": "Effect RES Boost",
    "perma": true,
    "params": [
      "MDF_PropertyValue",
      "MDF_PropertyValue2"
    ]
  },
  {
    "name": "Advanced_Jingliu_Eidolon1_CriticalDamage",
    "realName": "Moon Crashes Tianguan Gate",
    "aim": "Buff",
    "desc": "CRIT DMG increases by #1[i]%.",
    "type": "CRIT DMG Boost",
    "perma": true,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Advanced_Jingliu_Passive_CriticalUp",
    "realName": "Spectral Transmigration",
    "aim": "Buff",
    "desc": "CRIT Rate increases by #1[i]%.",
    "type": "CRIT Rate Boost",
    "perma": true,
    "params": [
      "MDF_CriticalRatio"
    ]
  },
  {
    "name": "Advanced_Jingliu_Eidolon2",
    "realName": "Crescent Shadows Qixing Dipper",
    "aim": "Buff",
    "desc": "Increases DMG dealt by the next Enhanced Skill by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Phainon_Trace02_Property",
    "realName": "Bide in Flames",
    "aim": "Buff",
    "desc": "DMG dealt increases by #1[i]%.",
    "type": "DMG Boost",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Cyrene_Ability02_Bonus",
    "realName": "Bloom, Elysium of Beyond",
    "aim": "Buff",
    "desc": "For every 1 instance of DMG dealt, additionally deals 1 instance of True DMG equal to #1[i]% of the original DMG.",
    "type": null,
    "perma": false,
    "params": [
      "MDF_BasicDamagePercentage"
    ]
  },
  {
    "name": "Cyrene_Ability03",
    "realName": "Ripples of Past Reverie",
    "aim": "Buff",
    "desc": "Basic ATK is replaced with Enhanced Basic ATK, and the Zone effect from the Skill has no duration limit. Increases this unit's and Demiurge's CRIT Rate by #1[i]%.",
    "type": null,
    "perma": false,
    "params": [
      "#Skill03_P3_CritChance"
    ]
  },
  {
    "name": "Cyrene_Passive_Sub",
    "realName": "Hearts Gather as One",
    "aim": "Buff",
    "desc": "DMG dealt increases by #1[f1]%.",
    "type": null,
    "perma": false,
    "params": [
      "MDF_DamageIncrease"
    ]
  },
  {
    "name": "Cyrene_Ability02_Sub",
    "realName": "undefined",
    "aim": "Buff",
    "desc": "undefined",
    "type": null,
    "perma": false,
    "params": [
      "MDF_AddValue"
    ]
  },
  {
    "name": "Constance_Aura_OnEnemy",
    "realName": "Lick... Enkindled Betrayal",
    "aim": "Debuff",
    "desc": "Toughness Reduction taken when not Weakness Broken can also be converted to Super Break DMG.",
    "type": null,
    "perma": true
  },
  {
    "name": "Constance_InsertCD",
    "realName": "Who's Afraid of Constance?",
    "aim": "Other",
    "desc": "Talent's Follow-Up ATK cannot be triggered yet.",
    "type": null,
    "perma": true
  },
  {
    "name": "Constance_Tree01_Property",
    "realName": "Yet Another Funeral",
    "aim": "Buff",
    "desc": "Break Effect increases by #1[f1]%.",
    "type": "Break Effect Boost",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Advanced_Kafka_Eidolon2_Sub",
    "realName": "Fortississimo",
    "aim": "Buff",
    "desc": "Each stack increases ATK by #1[i]%. This effect stacks up to #2[i] time(s).",
    "type": "ATK Boost",
    "perma": false,
    "params": [
      "MDF_PropertyValue",
      "MDF_Maxlayer"
    ]
  },
  {
    "name": "Advanced_Silwolf_Tree03_AttackUp",
    "realName": "Side Note",
    "aim": "Buff",
    "desc": "ATK increases by #1[i]%.",
    "type": "ATK Boost",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Memosprite_CyreneServant_AmazingBonus_Hyacine",
    "realName": "Ode to Sky",
    "aim": "Buff",
    "desc": "The amount of Hyacine's healing included in the healing tally of Little Ica's Memosprite Skill is additionally increased by an amount equal to #1[i]% of the current healing amount. After Hyacine uses Skill/Ultimate, consumes 1 stack of \"Ode to Sky.\"",
    "type": "Ode to Sky",
    "perma": false,
    "params": [
      "MDF_HyacineRatio"
    ]
  },
  {
    "name": "Memosprite_CyreneServant_AmazingBonus_Castorice",
    "realName": "Ode to Life and Death",
    "aim": "Buff",
    "desc": "Castorice's Newbud can overflow up to #1[i]%. When summoning Netherwing, consume all overflowing \"Newbud.\" Based on the amount of overflow consumed, increases the multiplier for the DMG dealt when this summoned Netherwing triggers the ability effect of its Talent \"Wings Sweep the Ruins.\"",
    "type": "Ode to Life and Death",
    "perma": false,
    "params": [
      "MDF_MaxEnergy",
      "MDF_SuicideRatioBase",
      "MDF_EnergyRatio"
    ]
  },
  {
    "name": "Memosprite_CyreneServant_AmazingBonus_Player",
    "realName": "Ode to Genesis",
    "aim": "Buff",
    "desc": "ATK increases by #1[i], CRIT Rate increases by #2[f1]%. After using Enhanced Basic ATK, Demiurge immediately gains 1 extra turn and automatically uses \"Minuet of Blooms and Plumes.\"",
    "type": "Ode to Genesis",
    "perma": false,
    "params": [
      "MDF_AttackAddRatio",
      "MDF_CritAddRatio"
    ]
  },
  {
    "name": "Memosprite_CyreneServant_AmazingBonus_Tribbie",
    "realName": "Ode to Passage",
    "aim": "Buff",
    "desc": "DMG dealt ignores #2[i]% of the enemy's DEF. When Tribbie launches Follow-Up ATK and triggers the Additional DMG from Tribbie's Zone, it will further deal #1[i] instance(s) of Additional DMG.",
    "type": "Ode to Passage",
    "perma": false,
    "params": [
      "MDF_TribbieLoopCount",
      "MDF_IgnoreDef",
      "MDF_TargetCount"
    ]
  },
  {
    "name": "Memosprite_EvernightServant_PassiveBonus",
    "realName": "Solitude, Drifting, In Murk",
    "aim": "Buff",
    "desc": "DMG dealt increases by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Evernight_Ability02_Bonus_Buff",
    "realName": "Day Gently Slips",
    "aim": "Buff",
    "desc": "CRIT DMG increases by #1[i]%.",
    "type": null,
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Evernight_UltraMode",
    "realName": "Darkest Riddle",
    "aim": "Buff",
    "desc": "This unit and their memosprite are immune to Crowd Control debuffs, and the DMG dealt increases by #1[i]%.",
    "type": "Darkest Riddle",
    "perma": true,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Evernight_Passive_Bonus",
    "realName": "With Me, This Night",
    "aim": "Buff",
    "desc": "CRIT DMG increases by #1[i]%.",
    "type": "CRIT DMG Boost",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Phainon_Eidolon1_AddSpeedRatio",
    "realName": "Fire and Light Bind Virtue and Vice",
    "aim": "Buff",
    "desc": "The base SPD inheritance ratio for Khaslana's extra turns has increased to #1[f1]%. For every enemy target defeated, it additionally increases by #3[f1]%, up to #2[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_SpeedRatio",
      "MDF_MaxSpeedRatio",
      "MDF_PropertyRatio"
    ]
  },
  {
    "name": "Advanced_Jingliu_Eidolon6",
    "realName": "Eclipse Hollows Corporeal Husk",
    "aim": "Buff",
    "desc": "Ice RES PEN increases by #1[i]%.",
    "type": "Ice RES PEN",
    "perma": true,
    "params": [
      "MDF_IcePenetrate"
    ]
  },
  {
    "name": "Technique_Jingliu_Modifier_Frozen",
    "realName": "Frozen",
    "aim": "Debuff",
    "desc": "Cannot take action for a certain number of turns and takes Ice Additional DMG at the beginning of each turn.",
    "type": "Frozen",
    "perma": false
  },
  {
    "name": "Advanced_Jingliu_LoseHPCount",
    "realName": "Crescent Transmigration",
    "aim": "Other",
    "desc": "Number of Ally HP losses: #1[i].",
    "type": null,
    "perma": true,
    "params": [
      "Jingliu_LoseHPCount"
    ]
  },
  {
    "name": "Memosprite_CyreneServant_AmazingBonus_Mydeimos_Sub",
    "realName": "Ode to Strife",
    "aim": "Buff",
    "desc": "CRIT DMG increases by #1[i]%.",
    "type": "Ode to Strife",
    "perma": false,
    "params": [
      "MDF_CritDamage"
    ]
  },
  {
    "name": "Memosprite_CyreneServant_AmazingBonus_Aglaea",
    "realName": "Ode to Romance",
    "aim": "Buff",
    "desc": "DMG dealt by Aglaea and Garmentmaker increases by #1[i]% and ignores #2[i]% of targets' DEF.",
    "type": "Ode to Romance",
    "perma": false,
    "params": [
      "MDF_DamageIncrease",
      "MDF_IgnoreDef"
    ]
  },
  {
    "name": "Memosprite_CyreneServant_AmazingBonus_Anaxa",
    "realName": "Ode to Reason",
    "aim": "Buff",
    "desc": "The number of DMG instances dealt by the Skill increases by #1[i].",
    "type": "Ode to Reason",
    "perma": false,
    "params": [
      "MDF_AnaxaCount"
    ]
  },
  {
    "name": "Memosprite_CyreneServant_AmazingBonus_Cipher",
    "realName": "Ode to Trickery",
    "aim": "Buff",
    "desc": "DMG dealt increases by #1[i]%.",
    "type": "Ode to Trickery",
    "perma": false,
    "params": [
      "MDF_DamageIncrease"
    ]
  },
  {
    "name": "Cyrene_Passive_Teamate",
    "realName": "Future",
    "aim": "Other",
    "desc": "When taking action, grants Cyrene \"Recollection.\"",
    "type": null,
    "perma": false
  },
  {
    "name": "PlayerBoy_30_TeamSP",
    "realName": "Charge",
    "aim": "Other",
    "desc": "When Charge reaches #1[i]%, Mem immediately takes action and can use \"Lemme! Help You!\".",
    "type": null,
    "perma": true,
    "params": [
      "MDF_Max"
    ]
  },
  {
    "name": "Memosprite_PlayerBoyServant_30_UltraBonus",
    "realName": "Mem's Support",
    "aim": "Buff",
    "desc": "For every 1 instance of DMG dealt, additionally deals 1 instance of True DMG equal to #1[i]% of the original DMG.",
    "type": "Mem's Support",
    "perma": false,
    "params": [
      "MDF_DamagePercentage",
      "MDF_PropertyRatio"
    ]
  },
  {
    "name": "Memosprite_PlayerBoyServant_30_CritDmgUp",
    "realName": "Friends! Together!",
    "aim": "Buff",
    "desc": "CRIT DMG increases by #1[f1]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_PropertyRatio"
    ]
  },
  {
    "name": "PlayerBoy_30_Eidolon2_Count",
    "realName": "Gleaner of the Past",
    "aim": "Other",
    "desc": "When ally memosprites (aside from Mem) take action, Trailblazer regenerates #1[i] Energy. This effect can trigger #2[i] more time(s).",
    "type": null,
    "perma": true,
    "params": [
      "MDF_PropertyRatio",
      "MDF_Count"
    ]
  },
  {
    "name": "Harscyline_HaloDebuff",
    "realName": "Maelstrom Rhapsody",
    "aim": "Debuff",
    "desc": "Enemy targets within the Zone have their ATK decreased by #5[f1]% and DEF decreased by #3[f1]%. For every 1 instance of DoT they receive, they will take Physical DoT equal to #1[i]% of Hysilens's ATK. This damage triggers at the start of each turn or after one attack by an ally target, up to #2[i] time(s). And it cannot repeatedly trigger this effect.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_DOTDamagePercentage",
      "MDF_TriggerDOTMaxCount",
      "MDF_DefenceDownRatio",
      "MDF_ResistanceDownRatio",
      "MDF_AttackDownRatio"
    ]
  },
  {
    "name": "Harscyline_DOT_Tear",
    "realName": "Bleed",
    "aim": "Debuff",
    "desc": "Takes Physical DMG at the start of each turn for a certain number of turns.",
    "type": "Bleed",
    "perma": false
  },
  {
    "name": "Harscyline_DOT_Burn",
    "realName": "Burn",
    "aim": "Debuff",
    "desc": "Takes Fire DMG at the start of each turn for a certain number of turns.",
    "type": "Burn",
    "perma": false
  },
  {
    "name": "Harscyline_DOT_Poison",
    "realName": "Wind Shear",
    "aim": "Debuff",
    "desc": "Takes Wind DMG at the start of each turn for a certain number of turns.",
    "type": "Wind Shear",
    "perma": false
  },
  {
    "name": "Harscyline_DOT_Electric",
    "realName": "Shock",
    "aim": "Debuff",
    "desc": "Takes Lightning DMG at the start of each turn for a certain number of turns.",
    "type": "Shock",
    "perma": false
  },
  {
    "name": "Harscyline_AllDamageTypeTakenRatio",
    "realName": "Overtone Hum: Chorus After Dark Tides",
    "aim": "Debuff",
    "desc": "DMG taken increases by #1[i]%.",
    "type": "Vulnerability",
    "perma": false,
    "params": [
      "MDF_PropertyRatio"
    ]
  },
  {
    "name": "Harscyline_DOT_Tear2",
    "realName": "Bleed",
    "aim": "Debuff",
    "desc": "Takes Physical DMG at the start of each turn for a certain number of turns.",
    "type": "Bleed",
    "perma": false
  },
  {
    "name": "Harscyline_DOT_Burn2",
    "realName": "Burn",
    "aim": "Debuff",
    "desc": "Takes Fire DMG at the start of each turn for a certain number of turns.",
    "type": "Burn",
    "perma": false
  },
  {
    "name": "Harscyline_DOT_Poison2",
    "realName": "Wind Shear",
    "aim": "Debuff",
    "desc": "Takes Wind DMG at the start of each turn for a certain number of turns.",
    "type": "Wind Shear",
    "perma": false
  },
  {
    "name": "Harscyline_DOT_Electric2",
    "realName": "Shock",
    "aim": "Debuff",
    "desc": "Takes Lightning DMG at the start of each turn for a certain number of turns.",
    "type": "Shock",
    "perma": false
  },
  {
    "name": "Cerydra_Eidolon2_DamageAddedBonus_Self",
    "realName": "Forge the Dreams of Many",
    "aim": "Buff",
    "desc": "DMG dealt increases by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Cerydra_Ability02_AllDamageTypePenetrate",
    "realName": "A Journey Set Starward",
    "aim": "Buff",
    "desc": "Increases All-Type RES PEN by #1[i]%.",
    "type": "A Journey Set Starward",
    "perma": true,
    "params": [
      "#SkillRank_Rank06_P1_AllDamageTypePenetrate"
    ]
  },
  {
    "name": "Evernight_UltraMode_Energy",
    "realName": "Darkest Riddle",
    "aim": "Other",
    "desc": "The memosprite Evey consumes 1 Charge after it uses \"Dream, Dissolving, as Dew.\" When Evernight's turn begins, if no Charge remains, she exits the \"Darkest Riddle\" state.",
    "type": null,
    "perma": true
  },
  {
    "name": "Evernight_UltraMode_Energy_0",
    "realName": "Darkest Riddle",
    "aim": "Other",
    "desc": "When Evernight's turn begins, she exits the \"Darkest Riddle\" state.",
    "type": null,
    "perma": true
  },
  {
    "name": "Cerydra_Eidolon6_AllDamageTypePenetrate",
    "realName": "A Journey Set Starward",
    "aim": "Buff",
    "desc": "All-Type RES PEN increases by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Cerydra_Ability02_Eidolon2_DamageAddedBonus",
    "realName": "Forge the Dreams of Many",
    "aim": "Buff",
    "desc": "DMG dealt increases by #1[i]%.",
    "type": "DMG Boost",
    "perma": true,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Constance_Ultimate_Weakness",
    "realName": "Wilt",
    "aim": "Debuff",
    "desc": "DEF decreases by #1[i]%. Gains Weaknesses of all Dance Partners' Types.",
    "type": "Wilt",
    "perma": false,
    "params": [
      "MDF_PropertyRatio",
      "MDF_PropertyRatio2"
    ]
  },
  {
    "name": "Constance_Tree03_Property",
    "realName": "Outgrow the Old, Espouse the New",
    "aim": "Buff",
    "desc": "SPD increases by #1[i]%.",
    "type": "SPD Boost",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Constance_Tree02_CD",
    "realName": "Lament, Lost Soul",
    "aim": "Other",
    "desc": "After using Talent's Follow-Up ATK #1[i] more time(s), the Skill Point recovery effect from \"Lament, Lost Soul\" can be triggered again.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_Count"
    ]
  },
  {
    "name": "Evernight_Ability02_Bonus",
    "realName": "Day Gently Slips",
    "aim": "Other",
    "desc": "While this effect persists, CRIT DMG increases for all ally memosprites.",
    "type": null,
    "perma": false
  },
  {
    "name": "Evernight_PointB1_Crit",
    "realName": "Dark the Night, Still the Moon",
    "aim": "Buff",
    "desc": "CRIT Rate increases #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Evernight_Eidolon4_Bonus",
    "realName": "Wake Up, the Tomorrow is Yours",
    "aim": "Buff",
    "desc": "Weakness Break Efficiency increases by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Cerydra_Eidolon1",
    "realName": "Seize the Crowns of All",
    "aim": "Buff",
    "desc": "When dealing DMG, ignores #1[i]% of the enemy target's DEF.",
    "type": "Seize the Crowns of All",
    "perma": true,
    "params": [
      "MDF_PropertyValue",
      "MDF_PropertyValue2"
    ]
  },
  {
    "name": "Cerydra_PointB2",
    "realName": "Vidi",
    "aim": "Other",
    "desc": "Using Ultimate grants Cerydra #1[i] Charge.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Cyrene_PointB2",
    "realName": "Ripples Across Time",
    "aim": "Buff",
    "desc": "CRIT DMG increases by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_CritDamageIncrease"
    ]
  },
  {
    "name": "Cyrene_PointB3_Sub2",
    "realName": "Causality in Trichotomy",
    "aim": "Buff",
    "desc": "Ice RES PEN increases by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "_AddValue"
    ]
  },
  {
    "name": "Memosprite_CyreneServant_Energy",
    "realName": "Story",
    "aim": "Other",
    "desc": "Upon reaching #1[i] points, immediately gains 1 extra turn and automatically uses \"Minuet of Blooms and Plumes.\"",
    "type": "Story",
    "perma": true,
    "params": [
      "#SkillCY14_P2_EnergyCost"
    ]
  },
  {
    "name": "DanHengPT_LongLing",
    "realName": "Bondmate",
    "aim": "Other",
    "desc": "\"Souldragon\" holder.",
    "type": "Becomes the Bondmate",
    "perma": true
  },
  {
    "name": "DanHengPT_Shield",
    "realName": "Shield",
    "aim": "Buff",
    "desc": "Gains a Shield that can offset DMG. Before the Shield gets depleted or the effect disappears, enemy attacks will not reduce the HP of the unit with the Shield.",
    "type": "Shield",
    "perma": true,
    "params": [
      "MDF_DanHengPT_InitShieldValue"
    ]
  },
  {
    "name": "DanHengPT_PointB1_AddAttackRatio",
    "realName": "Empyreanity",
    "aim": "Buff",
    "desc": "ATK increases by #1[i].",
    "type": "ATK Boost",
    "perma": true,
    "params": [
      "MDF_AttackDelta"
    ]
  },
  {
    "name": "DanHengPT_Eidolon4_Bonus",
    "realName": "By Oath, This Vessel Is I",
    "aim": "Buff",
    "desc": "DMG taken decreases by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "DanHengPT_Eidolon1",
    "realName": "Shed Scales of Old",
    "aim": "Buff",
    "desc": "All-Type RES PEN increases by #1[i]%.",
    "type": "All-Type RES PEN Boost",
    "perma": true,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Harscyline_PointB3_DamageAdded",
    "realName": "The Fiddle of Pearls",
    "aim": "Buff",
    "desc": "DMG dealt increases by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_PropertyRatio"
    ]
  },
  {
    "name": "Memosprite_CyreneServant_AmazingBonus_Cipher_Sub",
    "realName": "Ode to Trickery",
    "aim": "Debuff",
    "desc": "DEF decreases by #1[i]%.",
    "type": "DEF Reduction",
    "perma": true,
    "params": [
      "MDF_FinalDefDown"
    ]
  },
  {
    "name": "Memosprite_CyreneServant_AmazingBonus_Harscyline",
    "realName": "Ode to Ocean",
    "aim": "Buff",
    "desc": "DMG dealt increases by #1[i]%. After using Basic ATK/Skill to attack enemy targets, DoT debuffs additionally produces 1 instance of DMG.",
    "type": "Ode to Ocean",
    "perma": true,
    "params": [
      "MDF_HarscylineRatio"
    ]
  },
  {
    "name": "Constance_Dancer",
    "realName": "Dance Partner",
    "aim": "Buff",
    "desc": "After attacking a Weakness Broken enemy target, converts the Toughness Reduction of this attack into 1 instance of #1[i]% Super Break DMG.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Evernight_Eidolon6_Bonus",
    "realName": "Like This, Always",
    "aim": "Buff",
    "desc": "All-Type RES PEN increases by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "DanHengPT_Eidolon6_AllDamageTypeTakenRatio",
    "realName": "One Dream to Enfold All Wilds",
    "aim": "Debuff",
    "desc": "DMG taken increases by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "PlayerBoy_30_UltraState",
    "realName": "Epic",
    "aim": "Other",
    "desc": "When Mem is on the field, Basic ATK is enhanced to \"Together, We Script Tomorrow!\"",
    "type": "Epic",
    "perma": true
  },
  {
    "name": "Evernight_UltraMode_Debuff",
    "realName": "Darkest Riddle",
    "aim": "Debuff",
    "desc": "DMG taken increases by #1[i]%.",
    "type": "Vulnerability",
    "perma": true,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Memosprite_CyreneServant_AmazingBonus_Evernight",
    "realName": "Ode to Time",
    "aim": "Buff",
    "desc": "When Evey uses the Memosprite Skill \"Dream, Dissolving, as Dew,\" DMG dealt increases by #1[i]%. After Evernight uses Skill/Ultimate, gains #2[i] additional \"Memoria.\"",
    "type": "Ode to Time",
    "perma": true,
    "params": [
      "MDF_EverNightRatio",
      "MDF_ExtraPoint"
    ]
  },
  {
    "name": "Memosprite_CyreneServant_AmazingBonus_Phainon",
    "realName": "Ode to Worldbearing",
    "aim": "Buff",
    "desc": "Gains \"Eternal Ignition\" when transforming. While holding \"Eternal Ignition,\" increases CRIT Rate by #1[f1]%, and consumes HP equal to #2[i]% of the current HP at the start of the extra turn. After using an attack, deals extra Fire Additional DMG to one random enemy.",
    "type": "Ode to Worldbearing",
    "perma": true,
    "params": [
      "MDF_DamageIncrease",
      "MDF_LoseHP",
      "MDF_Loop",
      "MDF_DamagePercentage"
    ]
  },
  {
    "name": "Memosprite_CyreneServant_AmazingBonus_Cerydra",
    "realName": "Ode to Law",
    "aim": "Buff",
    "desc": "The character with \"Military Merit\" has #1[i]% increased CRIT DMG. After Coup de Main ends, Cerydra gains #2[i] Charge.",
    "type": "Ode to Law",
    "perma": true,
    "params": [
      "MDF_DamageIncrease",
      "MDF_ExtraPoint"
    ]
  },
  {
    "name": "Memosprite_EvernightServant_DeathRattle_Speed",
    "realName": "You, Parting, Beyond Reach",
    "aim": "Buff",
    "desc": "SPD increases by #1[i]%.",
    "type": "SPD Boost",
    "perma": true,
    "params": [
      "MDF_Show"
    ]
  },
  {
    "name": "Memosprite_CyreneServant_AmazingBonus_Harscyline_Sub",
    "realName": "Flowing Warmth",
    "aim": "Buff",
    "desc": "After attacking, regenerates #1[i] Energy.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_SPAdd"
    ]
  },
  {
    "name": "Memosprite_CyreneServant_AmazingBonus_Castorice_Sub",
    "realName": "Ode to Life and Death",
    "aim": "Buff",
    "desc": "The multiplier increases by #1[f1]% for the DMG dealt when triggering the ability effect of the Talent \"Wings Sweep the Ruins.\"",
    "type": null,
    "perma": true,
    "params": [
      "_FinalSuicideRatio"
    ]
  },
  {
    "name": "Memosprite_CyreneServant_Passive_Memory",
    "realName": "Engraved",
    "aim": "Debuff",
    "desc": "undefined",
    "type": null,
    "perma": true
  },
  {
    "name": "Cyrene_Eidolon1Debuff",
    "realName": "Epics, Born on a Blank Slate",
    "aim": "Debuff",
    "desc": "DEF decreases by #1[i]%.",
    "type": "DEF Reduction",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "DanHengPT_Eidolon6_Bonus",
    "realName": "One Dream to Enfold All Wilds",
    "aim": "Buff",
    "desc": "When dealing DMG, ignores #1[i]% of the enemy target's DEF.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Memosprite_CyreneServant_AmazingBonus_DanHengPT_Sub",
    "realName": "DMG Boost",
    "aim": "Buff",
    "desc": "DMG dealt increases by #1[f1]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_DamageIncrease"
    ]
  },
  {
    "name": "Memosprite_CyreneServant_AmazingBonus_Normal",
    "realName": "This Ode, to All Lives",
    "aim": "Buff",
    "desc": "DMG dealt increases by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_IncreaseRatio"
    ]
  },
  {
    "name": "Evernight_PointB1_Bonus",
    "realName": "Dark the Night, Still the Moon",
    "aim": "Buff",
    "desc": "CRIT DMG increases by #1[i]%.",
    "type": "CRIT DMG Boost",
    "perma": true,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "PlayerWarrior_Passive_BreakAtkUp",
    "realName": "Perfect Pickoff",
    "aim": "Buff",
    "desc": "Each stack increases ATK by #1[i]%, up to #2[i] stack(s).",
    "type": "ATK Boost",
    "perma": false,
    "params": [
      "MDF_AttackAddedRatio",
      "MDF_Max_Layer"
    ]
  },
  {
    "name": "PlayerWarrior_SkilTree02_BreakDefUp",
    "realName": "Tenacity",
    "aim": "Buff",
    "desc": "Each stack increases DEF by #1[i]%, up to #2[i] stack(s).",
    "type": "DEF Boost",
    "perma": false,
    "params": [
      "MDF_DefenceAddedRatio",
      "MDF_Max_Layer"
    ]
  },
  {
    "name": "MWPlayerBoy_10_WeaponCharge",
    "realName": "Magma Will",
    "aim": "Other",
    "desc": "When there are 4 or more stacks of Magma Will, Enhances Basic ATK.",
    "type": null,
    "perma": true
  },
  {
    "name": "PlayerBoy_10_WeaponCharge_Free",
    "realName": "War-Flaming Lance",
    "aim": "Other",
    "desc": "The next Basic ATK will become an Enhanced Basic ATK and will not consume Magma Will.",
    "type": "Enhanced Basic ATK",
    "perma": true
  },
  {
    "name": "PlayerBoy_10_TechniqueUsage_Shield",
    "realName": "Shield",
    "aim": "Buff",
    "desc": "Gains a Shield that absorbs DMG. While the Shield persists, enemy attacks will not reduce Shielded characters' HP.",
    "type": "Shield",
    "perma": false
  },
  {
    "name": "MWPlayerBoy_10_AttackRatioUp",
    "realName": "ATK Boost",
    "aim": "Buff",
    "desc": "ATK +#1[i]%.",
    "type": "ATK Boost",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "MWPlayerBoy_10_DamageResistance",
    "realName": "DMG Mitigation",
    "aim": "Buff",
    "desc": "DMG taken -#1[i]%.",
    "type": "DMG Mitigation",
    "perma": false,
    "params": [
      "MWAvatar_PlayerBoy_10_DamageResistance_Value01"
    ]
  },
  {
    "name": "MWPlayerBoy_10_Shield",
    "realName": "Shield",
    "aim": "Buff",
    "desc": "Gains a Shield that absorbs DMG. While the Shield persists, enemy attacks will not reduce Shielded characters' HP.",
    "type": "Shield",
    "perma": false
  },
  {
    "name": "PlayerBoy_10_Eidolon6_Stack",
    "realName": "DEF Boost",
    "aim": "Buff",
    "desc": "Each stack increases DEF by #1[i]%, up to #2[i] stack(s).",
    "type": "DEF Boost",
    "perma": false,
    "params": [
      "MDF_DefenceAddedRatio",
      "Rank06_Max_Layer"
    ]
  },
  {
    "name": "PlayerBoy_10_DamageResistance_Team",
    "realName": "DMG Mitigation",
    "aim": "Buff",
    "desc": "DMG taken -#1[i]%.",
    "type": "DMG Mitigation",
    "perma": false,
    "params": [
      "MAvatar_PlayerBoy_10_DamageResistance_Team_Value01"
    ]
  },
  {
    "name": "Evernight_Ability02_Bonus_PointB3",
    "realName": "Kindle the Morn, Drop the Rain",
    "aim": "Buff",
    "desc": "CRIT DMG increases by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Evernight_Eidolon2_Crit",
    "realName": "Listen Up, the Slumber Speaks Soft",
    "aim": "Buff",
    "desc": "CRIT DMG increases by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Memosprite_CyreneServant_AmazingBonus_Phainon_Sub",
    "realName": "Eternal Ignition",
    "aim": "Buff",
    "desc": "Khaslana will maintain the \"Divine Vessel\" state: With the blessing of companions, flames shall thoroughly illuminate the darkness.",
    "type": null,
    "perma": true
  },
  {
    "name": "Cyrene_PointB3_Sub3",
    "realName": "Causality in Trichotomy",
    "aim": "Buff",
    "desc": "DMG dealt increases by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_DamageIncrease"
    ]
  },
  {
    "name": "Cyrene_Eidolon2",
    "realName": "A Tomorrow in Thirteen Shades",
    "aim": "Buff",
    "desc": "The DMG multiplier of the True DMG dealt by ally targets via the Skill's Zone increases by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Cyrene_Ability02_Bonus_Main",
    "realName": "Bloom, Elysium of Beyond",
    "aim": "Buff",
    "desc": "For every 1 instance of DMG dealt, additionally deals 1 instance of True DMG equal to #1[i]% of the original DMG.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_BasicDamagePercentage"
    ]
  },
  {
    "name": "Memosprite_CyreneServant_AmazingBonus_Cerydra_Sub",
    "realName": "CRIT DMG Boost",
    "aim": "Buff",
    "desc": "CRIT DMG increases by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_DamageIncrease"
    ]
  },
  {
    "name": "Memosprite_CyreneServant_AmazingBonus_Aglaea_Sub2",
    "realName": "Romantic",
    "aim": "Buff",
    "desc": "Regenerates #1[i] Energy after Aglaea or Garmentmaker attacks.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_SPAdd"
    ]
  },
  {
    "name": "Constance_Eidolon4_Property",
    "realName": "Pity Its Heart Gnawed by Worms",
    "aim": "Debuff",
    "desc": "DMG taken increases by #1[i]%.",
    "type": "Vulnerability",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Constance_Eidolon6_Property",
    "realName": "And Yet, Always, Deathly Beautiful",
    "aim": "Buff",
    "desc": "Break Effect increases by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Memosprite_CyreneServant_AmazingBonus_Anaxa_Halo",
    "realName": "True Knowledge",
    "aim": "Buff",
    "desc": "ATK increases by #2[i]% and Skill DMG dealt increases by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_DamageIncrease",
      "MDF_AttackAddRatio"
    ]
  },
  {
    "name": "Memosprite_CyreneServant_Eidolon6_Sub",
    "realName": "Remembrance, Sung in Ripples ♪",
    "aim": "Debuff",
    "desc": "DEF decreases by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Memosprite_CyreneServant_AmazingBonus_DanHengPT",
    "realName": "Ode to Earth",
    "aim": "Buff",
    "desc": "DMG dealt by \"Bondmate\" increases by #1[f1]%.",
    "type": "Ode to Earth",
    "perma": true,
    "params": [
      "MDF_DamageIncrease",
      "MDF_DanHengPT_ExtraDamageCount",
      "MDF_DamageRatio"
    ]
  },
  {
    "name": "Memosprite_CyreneServant_AmazingBonus_Phainon_Property",
    "realName": "CRIT DMG Boost",
    "aim": "Buff",
    "desc": "CRIT DMG increases by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Constance_Aura_OnTeam",
    "realName": "Lick... Enkindled Betrayal",
    "aim": "Buff",
    "desc": "Weakness Break Efficiency increases by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Constance_Eidolon1_SuperBreak",
    "realName": "When a Bud Readies to Bloom",
    "aim": "Buff",
    "desc": "After attacking a Weakness Broken enemy target, converts the Toughness Reduction of this attack into 1 instance of #1[i]% Super Break DMG.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Memosprite_CyreneServant_Eidolon4_Count",
    "realName": "Please Write On, With a Smile",
    "aim": "Buff",
    "desc": "The multiplier for the bounce DMG of the Memosprite Skill \"Ode to Ego\" increases by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_Damage"
    ]
  },
  {
    "name": "Memosprite_CyreneServant_AmazingBonus_Normal_Sub",
    "realName": "This Ode, to All Lives",
    "aim": "Buff",
    "desc": "DMG dealt increases by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Constance_Eidolon2_PropertyValue",
    "realName": "Fresh, Ethereal, and Beloved",
    "aim": "Debuff",
    "desc": "Decreases All-Type RES by #1[i]%",
    "type": "All-Type RES Reduction",
    "perma": true,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Saber_Passive_ExceedSpStatus",
    "realName": "Blessing of the Lake",
    "aim": "Other",
    "desc": "#1[i] overflow Energy accumulated.",
    "type": null,
    "perma": true,
    "params": [
      "Saber_00_EntityStockSPForShow"
    ]
  },
  {
    "name": "Saber_Trace01_Bonus",
    "realName": "Knight of the Dragon",
    "aim": "Buff",
    "desc": "CRIT Rate increases by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Saber_Trace03_Bonus",
    "realName": "Crown of the Star",
    "aim": "Buff",
    "desc": "CRIT DMG increases by #1[i]%.",
    "type": "CRIT DMG Boost",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Saber_Ability03_CD",
    "realName": "Mana Burst",
    "aim": "Other",
    "desc": "When Saber has \"Core Resonance,\" and if using Skill and consuming \"Core Resonance\" can fully regenerate her Energy, consumes \"Mana Burst\" to cause Saber to immediately take action and recover 1 Skill Point for allies.",
    "type": "Mana Burst",
    "perma": true
  },
  {
    "name": "Saber_Passive_Bonus",
    "realName": "Dragon Reactor Core",
    "aim": "Buff",
    "desc": "DMG dealt increases by #1[i]%.",
    "type": null,
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Archer_BPAbility_AddDamagePercentage",
    "realName": "Circuit Connection",
    "aim": "Buff",
    "desc": "Each stack increases DMG dealt by Skill by #1[i]%.",
    "type": "Enhanced Skill",
    "perma": true,
    "params": [
      "#Skill02_P2_ExtraDamage"
    ]
  },
  {
    "name": "Archer_Trace03_CriticalDMG",
    "realName": "Guardian",
    "aim": "Buff",
    "desc": "CRIT DMG increases by #1[i]%.",
    "type": "CRIT DMG Boost",
    "perma": true,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Archer_Eidolon1_ReduceBPCost_FORDELETE",
    "realName": "The Unreached Dream",
    "aim": "Other",
    "desc": "The next use of Skill does not consume any Skill Points.",
    "type": "The Unreached Dream",
    "perma": true
  },
  {
    "name": "Archer_BonusTrigger",
    "realName": "Circuit Connection",
    "aim": "Other",
    "desc": "After using Skill, if there are sufficient Skill Points to use it again, the turn will not end.",
    "type": "Circuit Connection",
    "perma": true
  },
  {
    "name": "Archer_Eidolon6_Ability02IgnoreDef_FORDELETE",
    "realName": "The Long Fated Night",
    "aim": "Buff",
    "desc": "DMG dealt ignores #1[i]% of the target's DEF.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Saber_Eidolon2_Bonus",
    "realName": "The Lost Oath of the Round Table",
    "aim": "Buff",
    "desc": "Each stack causes DMG dealt by Saber to ignore #1[f1]% of the target's DEF.",
    "type": null,
    "perma": true,
    "params": [
      "#SkillRank_Rank02_P2_Ratio"
    ]
  },
  {
    "name": "Saber_TechniqueUsage_Bonus",
    "realName": "Behold, the King of Knights",
    "aim": "Buff",
    "desc": "ATK increases by #1[i]%.",
    "type": "Behold, the King of Knights",
    "perma": true,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Archer_Eidolon2_AddWeak",
    "realName": "The Unfulfilled Happiness",
    "aim": "Debuff",
    "desc": "Additionally implanted Quantum Weakness. Quantum RES decreases by #1[i]%.",
    "type": "Implanted Quantum Weakness",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Saber_Eidolon4_Bonus",
    "realName": "The Saga of Sixteen Winter Days",
    "aim": "Buff",
    "desc": "Each stack increases Wind RES PEN by #1[i]%.",
    "type": "Increases Wind RES PEN.",
    "perma": true,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Saber_Eidolon6_Count",
    "realName": "The Long Fated Night",
    "aim": "Other",
    "desc": "After using Ultimate #1[i] more time(s), regenerates a fixed amount of #2[i] Energy.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_Count",
      "#SkillRank_Rank06_P3_Amount"
    ]
  },
  {
    "name": "Saber_Energy_Count",
    "realName": "Core Resonance",
    "aim": "Other",
    "desc": "Currently possesses #1[i] point(s) of \"Core Resonance.\"",
    "type": null,
    "perma": true,
    "params": [
      "MDF_Layer"
    ]
  },
  {
    "name": "Saber_Trace03_Bonus_02",
    "realName": "Crown of the Star",
    "aim": "Buff",
    "desc": "Each stack increases CRIT DMG by #1[f1]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Saber_Eidolon4",
    "realName": "The Saga of Sixteen Winter Days",
    "aim": "Buff",
    "desc": "Wind RES PEN increases by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "#SkillRank_Rank04_P1_Ratio"
    ]
  }
]