let modifiersCharacter = [
  {
    "name": "<a class=\"gModGreen\" id=\"1541241593\">March7th_BPAbility_Shield</a>",
    "realName": "Shield",
    "aim": "Buff",
    "desc": "Gains a Shield that absorbs DMG. While the Shield persists, enemy attacks will not reduce Shielded characters' HP.",
    "type": "Shield",
    "perma": false
  },
  {
    "name": "<a class=\"gModGreen\" id=\"985818260\">March7th_Eidolon2_Shield</a>",
    "realName": "Shield",
    "aim": "Buff",
    "desc": "Gains a Shield that absorbs DMG. While the Shield persists, enemy attacks will not reduce Shielded characters' HP.",
    "type": "Shield",
    "perma": false
  },
  {
    "name": "<a class=\"gModGreen\" id=\"300569468\">March7th_Passive_CanAttack</a>",
    "realName": "Counter",
    "aim": "Other",
    "desc": "Remaining Counter attempt(s).",
    "type": null,
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-1978717144\">DanHeng_TechniqueUsage_AttackRatioUp</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-1050755614\">DanHeng_PointB2_SpeedUp</a>",
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
    "name": "<a class=\"gModGreen\" id=\"1147035290\">DanHeng_BPAbility_SpeedDown</a>",
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
    "name": "<a class=\"gModGreen\" id=\"1350798035\">DanHeng_Passive_SelfBeingTargetEnhance</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-1284468000\">DanHeng_Passive_BeginTargetEnhanceCD</a>",
    "realName": "Superiority of Reach",
    "aim": "Other",
    "desc": "The effect of Talent \"Superiority of Reach\" cannot be triggered.",
    "type": null,
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-997779121\">DanHeng_Passive_BeginTargetEnhance</a>",
    "realName": "Superiority of Reach",
    "aim": "Other",
    "desc": "The effect of Talent \"Superiority of Reach\" can now be triggered.",
    "type": null,
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-1338494483\">DanHeng_Trace_AggroDown</a>",
    "realName": "Hidden Dragon",
    "aim": "Buff",
    "desc": "Lowers the chances of being attacked by enemies.",
    "type": "Aggro Chance Reduction",
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"65829546\">Himeko_Passive_PursuitCD</a>",
    "realName": "Victory Rush",
    "aim": "Other",
    "desc": "Talent \"Victory Rush\" cannot be triggered.",
    "type": null,
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1013692489\">Himeko_FireTakenRatio</a>",
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
    "name": "<a class=\"gModGreen\" id=\"2144334509\">Himeko_Passive_Pursuit</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-1931905708\">Himeko_AbilityEidolon1_SpeedUP</a>",
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
    "name": "<a class=\"gModGreen\" id=\"583790079\">Himeko_CriticalChance</a>",
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
    "name": "<a class=\"gModGreen\" id=\"2123171519\">Welt_BPAbility_SpeedDown</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-374836920\">Welt_Eidolon1_Enhance</a>",
    "realName": "Legacy of Honor",
    "aim": "Other",
    "desc": "Basic ATKs and Skills deal an extra hit.",
    "type": null,
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1040154561\">Welt_Trace01_AllDamageTypeTakenRatio</a>",
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
    "name": "<a class=\"gModGreen\" id=\"1926104538\">Kafka_Passive_CanAttack</a>",
    "realName": "Gentle but Cruel",
    "aim": "Other",
    "desc": "The effect of Talent \"Gentle but Cruel\" can now be triggered.",
    "type": null,
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-899885235\">Kafka_Passive_CanAttackCD</a>",
    "realName": "Gentle but Cruel",
    "aim": "Other",
    "desc": "The effect of Talent \"Gentle but Cruel\" cannot be triggered.",
    "type": null,
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-1710761460\">Kafka_PassiveDotDamage_Eidolon1</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-1021385452\">Kafka_Eidolon2_Sub</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-1783933723\">Silwolf_Normal_Bug1</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-1834266580\">Silwolf_Normal_Bug2</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-1817488961\">Silwolf_Normal_Bug3</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-56897788\">Silwolf_BPAbility_WeakType</a>",
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
    "name": "<a class=\"gModGreen\" id=\"551921933\">Silwolf_BPAbility_WeakType_Extra</a>",
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
    "name": "<a class=\"gModGreen\" id=\"50824187\">Silwolf_BPAbility_AllDamageTypeResistanceDown</a>",
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
    "name": "<a class=\"gModGreen\" id=\"1573930598\">Silwolf_Eidolon2_StatusResistanceDown</a>",
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
    "name": "<a class=\"gModGreen\" id=\"898206024\">Silwolf_Ultimate_DefenceRatioDown</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-1099669275\">Silwolf_BPAbility_WeakType_Fire</a>",
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
    "name": "<a class=\"gModGreen\" id=\"110873612\">Silwolf_BPAbility_WeakType_Ice</a>",
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
    "name": "<a class=\"gModGreen\" id=\"1411533355\">Silwolf_BPAbility_WeakType_Wind</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-719977260\">Silwolf_BPAbility_WeakType_Physical</a>",
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
    "name": "<a class=\"gModGreen\" id=\"954284461\">Silwolf_BPAbility_WeakType_Thunder</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-69851026\">Silwolf_BPAbility_WeakType_Quantum</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-780191838\">Silwolf_BPAbility_WeakType_Imaginary</a>",
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
    "name": "<a class=\"gModGreen\" id=\"1498391924\">Arlan_Passive_DamageUp</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-331301596\">Arlan_PassiveAbility_UnDead</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-1364993633\">BlockDamage_Count</a>",
    "realName": "Repel",
    "aim": "Buff",
    "desc": "Nullifies all DMG received except for DoT until after being attacked.",
    "type": "Barrier",
    "perma": false
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-1734289579\">Asta_Passive_Charge</a>",
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
    "name": "<a class=\"gModGreen\" id=\"216386907\">Asta_TeamAttackUP</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-1589111502\">Asta_Ultimate_SpeedUP</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-2135184996\">Asta_Passive_SPRatioUp</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-516353123\">Herta_TechniqueUsage_AttackRatioUp</a>",
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
    "name": "<a class=\"gModGreen\" id=\"1736222640\">Herta_AbilityEidolon2_CriticalChance</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-429248408\">Herta_AbilityEidolon6_AttackUP</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-379855100\">Bronya_Ultimate_PowerUp</a>",
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
    "name": "<a class=\"gModGreen\" id=\"133730263\">Bronya_BPAbility_DamageUp</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-691391461\">Bronya_BPAbility_SpeedUp</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-1915866740\">Bronya_TechniqueUsage_AttackRatioUp</a>",
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
    "name": "<a class=\"gModGreen\" id=\"1374988833\">Bronya_Eidolon1_CoolDown</a>",
    "realName": "Hone Your Strength",
    "aim": "Other",
    "desc": "Hone Your Strength effect cannot be triggered.",
    "type": null,
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-2015057793\">Bronya_Tree02_DefenceUp</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-456765622\">Seele_BPAbility_SpeedUp</a>",
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
    "name": "<a class=\"gModGreen\" id=\"1401924350\">Seele_Passive_DamageUp</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-426535006\">Seele_BPAbility_SpeedUpEidolon2</a>",
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
    "name": "<a class=\"gModGreen\" id=\"995458646\">Seele_Eidolon6_Flag</a>",
    "realName": "Butterfly Flurry",
    "aim": "Debuff",
    "desc": "On a hit, receives an extra Quantum DMG from Seele.",
    "type": "Butterfly Flurry",
    "perma": false
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1311778178\">Local_Seele_PassiveActionModifier</a>",
    "realName": "Resurgence",
    "aim": "Other",
    "desc": "Currently in the extra turn provided by \"Resurgence\".",
    "type": null,
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1465401968\">Seele_Trace_AggroDown</a>",
    "realName": "Nightshade",
    "aim": "Buff",
    "desc": "Lowers the chances of being attacked by enemies.",
    "type": "Aggro Chance Reduction",
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"731548834\">Serval_Eidolon6_Check</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-2005029779\">Serval_Tree03_AttackRatioUp</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-176429589\">Gepard_Ultimate_Shield</a>",
    "realName": "Shield",
    "aim": "Buff",
    "desc": "Gains a Shield that absorbs DMG. While the Shield persists, enemy attacks will not reduce Shielded characters' HP.",
    "type": "Shield",
    "perma": false
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-179604795\">Gepard_PassiveAbility_UnDead</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-1613152679\">Gepard_Eidolon2_SpeedDown</a>",
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
    "name": "<a class=\"gModGreen\" id=\"1307422316\">Gepard_Eidolon4_AddStatusResistance</a>",
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
    "name": "<a class=\"gModGreen\" id=\"453099626\">Natasha_Passive_FatigueRatio</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-1227965702\">Natasha_BPAbility_DefenceRatioUp</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-251008638\">Natasha_Eidolon2_HOT_HPByMaxHP</a>",
    "realName": "Healing Over Time",
    "aim": "Buff",
    "desc": "Restores a certain amount of HP at the start of each turn.",
    "type": "Healing Over Time",
    "perma": false
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1462346849\">Natasha_HOT_HPByMaxHP</a>",
    "realName": "Healing Over Time",
    "aim": "Buff",
    "desc": "Restores a certain amount of HP at the start of each turn.",
    "type": "Healing Over Time",
    "perma": false
  },
  {
    "name": "<a class=\"gModGreen\" id=\"275559829\">Pela_Ultimate_DroneAnalysis</a>",
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
    "name": "<a class=\"gModGreen\" id=\"618444549\">Pela_AbilityEidolon4_StanceBreakTaken</a>",
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
    "name": "<a class=\"gModGreen\" id=\"607065154\">Pela_TechniqueUsage_DefenceRatioDown</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-1505163766\">Pela_Trace03_DamageAddedRatio</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-250608162\">Pela_AbilityEidolon2_AddSpeedRatio</a>",
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
    "name": "<a class=\"gModGreen\" id=\"278160139\">Pela_AbilityEidolon4_IceResistanceDown</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-1618683191\">Klara_Ultimate_WarriorMode</a>",
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
    "name": "<a class=\"gModGreen\" id=\"90816647\">Klara_BPAbility_Revenge</a>",
    "realName": "Mark of Counter",
    "aim": "Other",
    "desc": "The target is Marked by Svarog.",
    "type": null,
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-796199138\">Klara_Passive_DamageReduce</a>",
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
    "name": "<a class=\"gModGreen\" id=\"202295497\">Klara_Eidolon4_DamageReduce</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-459252663\">Klara_TechniqueUsage_AggroUP</a>",
    "realName": "A Small Price for Victory",
    "aim": "Buff",
    "desc": "Higher chance to be attacked.",
    "type": null,
    "perma": false
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-526728231\">Klara_PassiveATKCount</a>",
    "realName": "Enhanced Counter",
    "aim": "Buff",
    "desc": "Teammates being attacked will also trigger Counter, for which the DMG multiplier is also increased.",
    "type": null,
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-632500359\">Klara_Eidolon2_AttackUP</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-2131103330\">Sampo_Ultimate_DOTTakenUp</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-1319656232\">Hook_BPAbilityAlter_Enable</a>",
    "realName": "Enhanced Skill",
    "aim": "Other",
    "desc": "Enhances the next Skill and changes it to a Blast attack.",
    "type": "Enhanced Skill",
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-704553388\">Lynx_HOT_HealByMaxHp</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-96135638\">Lynx_Eidolon4_AddAttackRatio</a>",
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
    "name": "<a class=\"gModGreen\" id=\"667082719\">Lynx_HPAddedRatio01</a>",
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
    "name": "<a class=\"gModGreen\" id=\"683860338\">Lynx_HPAddedRatio02</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-1832848148\">Lynx_Eidolon2_Resist</a>",
    "realName": "Debuff RES",
    "aim": "Buff",
    "desc": "Resists 1 debuff.",
    "type": null,
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-632542414\">Luka_Eidolon1_Sub</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-811741616\">Luka_Eidolon4</a>",
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
    "name": "<a class=\"gModGreen\" id=\"1778825870\">Luka_AllDamageTypeTakenRatio</a>",
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
    "name": "<a class=\"gModGreen\" id=\"1202378594\">Luka_DOT_Tear</a>",
    "realName": "Bleed",
    "aim": "Debuff",
    "desc": "Takes Physical DMG at the start of each turn for a certain number of turns.",
    "type": "Bleed",
    "perma": false
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1203060420\">Topaz_UltraEnhance</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-1833842659\">Topaz_BETargetTag</a>",
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
    "name": "<a class=\"gModGreen\" id=\"1322510639\">Topaz_BETargetTag_CriticalDamageUp</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-1524167625\">Topaz_BE_UltraEnhance_Text</a>",
    "realName": "unnamed1",
    "aim": "Buff",
    "desc": null,
    "type": "DMG multiplier, CRIT DMG Boost",
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-1763556388\">QingQue_Passive_Hu</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-954959718\">QingQue_BPAbility_DamageUp</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-514950186\">Qingque_SpeedUpPointB3</a>",
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
    "name": "<a class=\"gModGreen\" id=\"134656141\">QingQue_Eidolon4_ATK</a>",
    "realName": "Self-Sufficer",
    "aim": "Buff",
    "desc": "Launches 1 Follow-Up ATK immediately after using Basic ATK or Enhanced Basic ATK on an enemy, dealing Quantum DMG equal to 100% of Basic ATK DMG or Enhanced Basic ATK DMG.",
    "type": null,
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-525409503\">MWTingYun_BPAbility_AttackDelta</a>",
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
    "name": "<a class=\"gModGreen\" id=\"132060184\">TingYun_Ability03DamageUp</a>",
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
    "name": "<a class=\"gModGreen\" id=\"1819337398\">Tingyun_Trace_B1_SpeedUp</a>",
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
    "name": "<a class=\"gModGreen\" id=\"646248808\">Tingyun_Eidolon1_SpeedUp</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-1298017769\">Luocha_Ability02_Shield</a>",
    "realName": "Shield",
    "aim": "Buff",
    "desc": "Gains a Shield that absorbs DMG. While the Shield persists, enemy attacks will not reduce Shielded characters' HP.",
    "type": "Shield",
    "perma": false
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-390780291\">Luocha_Passive01Modifier</a>",
    "realName": "Abyss Flower",
    "aim": "Other",
    "desc": "When the Abyss Flower is fully stacked, Luocha can consume all the stacks to deploy a Zone against the enemy.",
    "type": null,
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-1838655775\">Luocha_Passive01_HealHPSelf</a>",
    "realName": "Cycle of Life",
    "aim": "Other",
    "desc": "After using an attack on an enemy, restores HP to self.",
    "type": null,
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1468187936\">Luocha_Passive01_HealHPCD</a>",
    "realName": "Prayer of Abyss Flower",
    "aim": "Other",
    "desc": "Skill effect auto-trigger is on cooldown.",
    "type": null,
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"572527518\">Luocha_Eidolon4_Fatigue</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-1394916865\">Luocha_Eidolon1_ATKUp</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-470154310\">Luocha_Eidolon6_AllDamageTypeResistance</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-1378311281\">Luocha_Passive01_HealHP</a>",
    "realName": "Cycle of Life",
    "aim": "Other",
    "desc": "After using an attack on an enemy, restores HP to self.",
    "type": null,
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"2081826421\">JingYuan_BattleEvent_ATKCount</a>",
    "realName": "Prana Extirpated",
    "aim": "Other",
    "desc": "Lightning-Lord's Hits Per Action.",
    "type": null,
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-1804861609\">JingYuan_BattleEvent_UltraATKCount</a>",
    "realName": "Lightbringer",
    "aim": "Other",
    "desc": "Lightning-Lord's Enhanced ATK count.",
    "type": null,
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1088669628\">JingYuan_Eidolon2_DamageAddedRatio</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-110303717\">JingYuan_Tree03_CriticalChanceUp</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-922781705\">MWRen_Attack_Transfer</a>",
    "realName": "Hellscape",
    "aim": "Other",
    "desc": "Basic ATK \"Shard Sword\" is enhanced, becoming \"Forest of Swords\" and dealing Blast DMG.",
    "type": "Enhanced Basic ATK",
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1924146149\">MWRen_Qi</a>",
    "realName": "Charge",
    "aim": "Other",
    "desc": "At maximum Charge stacks, expends all stacks and immediately deals 1 instance of Follow-Up ATK to all enemies.",
    "type": null,
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1915467315\">MWRen_Attack</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-510378845\">MWRen_Trace01</a>",
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
    "name": "<a class=\"gModGreen\" id=\"1963215461\">MWRen_Eidolon4</a>",
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
    "name": "<a class=\"gModGreen\" id=\"1862549747\">MWRen_Eidolon2</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-870658235\">MWRen_Ability03_Listen</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-1472874588\">Sushang_UltraBonus</a>",
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
    "name": "<a class=\"gModGreen\" id=\"326660748\">Sushang_P01</a>",
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
    "name": "<a class=\"gModGreen\" id=\"398733795\">Sushang_Eidolon2_Bonus</a>",
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
    "name": "<a class=\"gModGreen\" id=\"1886129975\">Sushang_PointB2_Bonus</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-995993731\">Sushang_P01_Eidolon6</a>",
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
    "name": "<a class=\"gModGreen\" id=\"420113807\">Sushang_Trace_AggroDown</a>",
    "realName": "Guileless",
    "aim": "Buff",
    "desc": "Lowers the chances of being attacked by enemies.",
    "type": "Aggro Chance Reduction",
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"432670237\">Yukong_Flower_ATK</a>",
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
    "name": "<a class=\"gModGreen\" id=\"1097783562\">Yukong_Flower_ATK_Crit</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-2029608096\">Yukong_Passive_Bonus</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-238308601\">Yukong_Point01_Resist</a>",
    "realName": "Debuff Block",
    "aim": "Buff",
    "desc": "Blocks 1 debuff.",
    "type": null,
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-65553749\">Yukong_Eidolon1_SpeedUp</a>",
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
    "name": "<a class=\"gModGreen\" id=\"781697929\">Yukong_Eidolon4_Flower_Bonus</a>",
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
    "name": "<a class=\"gModGreen\" id=\"1745888668\">FuXuan_JianZhi</a>",
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
    "name": "<a class=\"gModGreen\" id=\"1553530097\">FuXuan_HitDamageSplit</a>",
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
    "name": "<a class=\"gModGreen\" id=\"1537044450\">FuXuan_DamageReduce</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-1150141703\">FuXuan_ListenLifeTime</a>",
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
    "name": "<a class=\"gModGreen\" id=\"1795072353\">FuXuan_Eidolon2</a>",
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
    "name": "<a class=\"gModGreen\" id=\"1862182829\">FuXuan_Eidolon6</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-281320728\">FuXuan_JianZhi_Eidolon1</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-72044013\">FuXuan_Tree02</a>",
    "realName": "Liuren, the Sexagenary",
    "aim": "Buff",
    "desc": "This status can be consumed to resist Crowd Control debuffs.",
    "type": "Resist Crowd Control debuffs",
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1361979350\">Yanqing_FrozenMark</a>",
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
    "name": "<a class=\"gModGreen\" id=\"294496269\">Yanqing_Ability03_Bonus</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-1096242682\">Yanqing_Eidolon4_IcePenetrate</a>",
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
    "name": "<a class=\"gModGreen\" id=\"704251526\">Yanqing_TechniqueUsage_AttackRatioUp</a>",
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
    "name": "<a class=\"gModGreen\" id=\"2119684740\">M_Yanqing_Tree03SpeedUP</a>",
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
    "name": "<a class=\"gModGreen\" id=\"597170239\">Guinaifen_Oil_Sub</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-1962050217\">Guinaifen_Eidolon1_StatusResistance</a>",
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
    "name": "<a class=\"gModGreen\" id=\"36808524\">Bailu_Heal_Mark</a>",
    "realName": "Invigoration",
    "aim": "Buff",
    "desc": "Restores HP when attacked.",
    "type": "Invigoration",
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-469925889\">Bailu_PointB1_HPIncrease</a>",
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
    "name": "<a class=\"gModGreen\" id=\"249464740\">Bailu_PointB3</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-1195469105\">Bailu_Eidolon2</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-2145916157\">Bailu_Eidolon4_AttackUp</a>",
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
    "name": "<a class=\"gModGreen\" id=\"828232276\">MWJingliu_Attack_Transfer_AddATK</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-62616171\">MWJingliu_PointB3</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-89851365\">Jingliu_Trace_B1_Resist</a>",
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
    "name": "<a class=\"gModGreen\" id=\"1827977639\">Jingliu_Eidolon6</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-1949094753\">Jingliu_Eidolon1_CriticalDamage</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-1857615455\">Jingliu_Passive_CriticalUp</a>",
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
    "name": "<a class=\"gModGreen\" id=\"1760867163\">Jingliu_Eidolon2</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-1955464894\">DanHengIL_Ability02_CriticalDamage</a>",
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
    "name": "<a class=\"gModGreen\" id=\"115521753\">DanHengIL_BPCostChange</a>",
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
    "name": "<a class=\"gModGreen\" id=\"1587455609\">DanHengIL_AllDamageTypeAddedRatio</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-330148584\">DanHengIL_Eidolon6_ImaginaryPenetrate</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-1263094705\">Xueyi_Passive_Trace03</a>",
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
    "name": "<a class=\"gModGreen\" id=\"444597683\">Xueyi_BP_Passive01</a>",
    "realName": "Karma",
    "aim": "Other",
    "desc": "When \"Karma\" is fully stacked, consume all \"Karma\" stacks and immediately use 1 Follow-Up ATK against enemies.",
    "type": null,
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"674322254\">Xueyi_AbilityEidolon4</a>",
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
    "name": "<a class=\"gModGreen\" id=\"1743228292\">WHanya_Ability03Bonus</a>",
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
    "name": "<a class=\"gModGreen\" id=\"1376832164\">WHanya_BpZhanYin</a>",
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
    "name": "<a class=\"gModGreen\" id=\"1658392739\">Hanya_PointB1</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-204754708\">Hanya_Eidolon2</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-2003572748\">Hanya_Passive_AddDamage</a>",
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
    "name": "<a class=\"gModGreen\" id=\"1522612454\">Huohuo_Passive_HealMark</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-678196241\">Huohuo_Ability03_AttackUP</a>",
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
    "name": "<a class=\"gModGreen\" id=\"1045223345\">Huohuo_PointB1_SelfSPRatio</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-2048047648\">Huohuo_Eidolon6_DamageUp</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-1345100241\">Huohuo_Eidolon1_SpeedUp</a>",
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
    "name": "<a class=\"gModGreen\" id=\"1017323248\">Huohuo_Maze_FatigueRatio</a>",
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
    "name": "<a class=\"gModGreen\" id=\"1683962968\">Huohuo_Eidolon2_ReviveCount</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-606062756\">MWGallagher_Ability03_DeBonusModifier</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-1678215353\">MWGallagher_Ability11_AttackDownModifier</a>",
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
    "name": "<a class=\"gModGreen\" id=\"68075206\">Argenti_Passive_Charge</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-1150044679\">Argenti_Eidolon2_AttackRatioUp</a>",
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
    "name": "<a class=\"gModGreen\" id=\"104142449\">RuanMei_Ability02_Area_Friend</a>",
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
    "name": "<a class=\"gModGreen\" id=\"1476311818\">RuanMei_Ability03_Area_Friend</a>",
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
    "name": "<a class=\"gModGreen\" id=\"379919533\">RuanMei_PassiveArea_Enemy</a>",
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
    "name": "<a class=\"gModGreen\" id=\"353149410\">RuanMei_Eidolon4_Passive_BreakDamageAddedUp</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-1531846618\">RuanMei_Passive_SpeedUp</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-995060554\">RuanMei_Ability03_Area_Caster</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-1509368163\">RuanMei_Ability02_Area_Caster</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-1242682284\">RuanMei_Ability03_Area_Eidolon1_Friend</a>",
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
    "name": "<a class=\"gModGreen\" id=\"678689072\">RuanMei_Ability03_Area_Eidolon1_Caster</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-1641844295\">RuanMei_AttackBreakEnemyAttackUp</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-23155683\">RuanMei_BreakDamageAdded</a>",
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
    "name": "<a class=\"gModGreen\" id=\"674084232\">Aventurine_Passive_AddDefence</a>",
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
    "name": "<a class=\"gModGreen\" id=\"462082235\">Aventurine_ResistCtrlCD</a>",
    "realName": "Shot Loaded Right",
    "aim": "Other",
    "desc": "The Talent's Crowd Control debuff resist effect cannot be triggered yet.",
    "type": null,
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-422728063\">Aventurine_Trace01_Sub</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-447417403\">Aventurine_Ability02_BlackJack</a>",
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
    "name": "<a class=\"gModGreen\" id=\"2143791995\">Aventurine_Ability02_ShieldEffect2</a>",
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
    "name": "<a class=\"gModGreen\" id=\"2127014376\">Aventurine_Ability02_ShieldEffect3</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-2050509587\">Aventurine_Ability02_ShieldEffect4</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-1024856711\">Aventurine_Trace03_Status</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-1071693817\">Aventurine_Eidolon6_Sub</a>",
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
    "name": "<a class=\"gModGreen\" id=\"1438365222\">Aventurine_Eidolon2_ResistanceDown</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-989533278\">Aventurine_Ability03_CoinAdd</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-839248266\">Aventurine_Ability03_CritDmgIncrease</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-314126453\">Aventurine_Maze_Defence</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-1051491293\">Dr_Ratio_Slow</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-1535177927\">Dr_Ratio_Maze_SpeedDown</a>",
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
    "name": "<a class=\"gModGreen\" id=\"1000967262\">Dr_Ratio_Ability03_TheFool</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-1828934114\">Dr_Ratio_Ability03_PointB1_Bonus</a>",
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
    "name": "<a class=\"gModGreen\" id=\"1766946532\">Sparkle_Ability02_CritDmgAddedRatio02</a>",
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
    "name": "<a class=\"gModGreen\" id=\"1486907244\">Sparkle_Ability03_PowerUp</a>",
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
    "name": "<a class=\"gModGreen\" id=\"1817279389\">Sparkle_Ability02_CritDmgAddedRatio01</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-1017813291\">Sparkle_PassiveAbility_AllDamageAddedRatio02</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-1336404304\">Sparkle_Tree03</a>",
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
    "realName": "Dreamdiver",
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
    "realName": "Cipher",
    "aim": "Buff",
    "desc": "undefined",
    "type": "Cipher",
    "perma": true,
    "params": [
      "MDF_PropertyValue2"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"2037361233\">BlackSwan_DOT</a>",
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
    "name": "<a class=\"gModGreen\" id=\"488421404\">BlackSwan_DOT_Enhance</a>",
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
    "name": "<a class=\"gModGreen\" id=\"2093125302\">BlackSwan_DefenceDown</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-698439125\">BlackSwan_Eidolon1_WindResistanceDown</a>",
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
    "name": "<a class=\"gModGreen\" id=\"184250140\">BlackSwan_Eidolon1_PhysicalResistanceDown</a>",
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
    "name": "<a class=\"gModGreen\" id=\"757395769\">BlackSwan_Eidolon1_FireResistanceDown</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-1273749278\">Acheron_PassiveFlag01</a>",
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
    "name": "<a class=\"gModGreen\" id=\"447524573\">Acheron_AllDamageTypeResistance</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-535608708\">Acheron_PointB3_DamageUp</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-341772219\">Robin_Ability02_DmgUpCasterListener</a>",
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
    "name": "<a class=\"gModGreen\" id=\"601034929\">Robin_Ability02_DmgUpFriendListener</a>",
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
    "name": "<a class=\"gModGreen\" id=\"1126110528\">Robin_Ability03_AtkUp_CasterForShow</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-169791812\">Robin_Ability03_AtkUp_FriendForShow</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-1854203506\">Robin_Trace02_InsertDmgUp</a>",
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
    "name": "<a class=\"gModGreen\" id=\"712086196\">Robin_AbilityEidolon1_Bonus</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-186724559\">Misha_Eidolon6_DamageUp</a>",
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
    "name": "<a class=\"gModGreen\" id=\"728153787\">Misha_EnergyCount</a>",
    "realName": "G—Gonna Be Late!",
    "aim": "Other",
    "desc": "The Ultimate's Hits Per Action.",
    "type": null,
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-874080613\">Misha_Ability03_StatusProbabilityUp</a>",
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
    "name": "<a class=\"gModGreen\" id=\"1428052703\">Misha_Eidolon2_DefenceDown</a>",
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
    "name": "<a class=\"gModGreen\" id=\"1472142053\">Misha_Eidolon6_RecoverBP</a>",
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
    "name": "<a class=\"gModGreen\" id=\"1894494257\">Boothill_SelfModification</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-1234556186\">Boothill_Ultimate_PhysicalWeakness</a>",
    "realName": "Extra Physical Weakness",
    "aim": "Debuff",
    "desc": "Implanted with extra Physical Weakness.",
    "type": "Implant Weakness: Physical",
    "perma": false
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-476363000\">Boothill_DuelTarget</a>",
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
    "name": "<a class=\"gModGreen\" id=\"1542670262\">Boothill_DuelState</a>",
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
    "name": "<a class=\"gModGreen\" id=\"455996650\">Boothill_Eidolon2_Enhance</a>",
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
    "name": "<a class=\"gModGreen\" id=\"827570007\">Boothill_Eidolon2_CD</a>",
    "realName": "Milestonemonger",
    "aim": "Other",
    "desc": "Milestonemonger's effect cannot be triggered yet.",
    "type": null,
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-1740127883\">Boothill_TechniqueUsage_Ability02</a>",
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
    "name": "<a class=\"gModGreen\" id=\"1272032141\">PlayerBoy_20_Eidolon4_BreakDamageBonus</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-197410613\">PlayerBoy_20_AbilityP01_ListenBreakDamage</a>",
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
    "name": "<a class=\"gModGreen\" id=\"1971132539\">PlayerBoy_20_TechniqueUsage_Bonus</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-1084783230\">Sam_PassiveAbility_RedMode</a>",
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
    "name": "<a class=\"gModGreen\" id=\"1021523829\">Sam_PassiveAbility_AllDamageTypeResistance</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-1210211185\">PlayerBoy_20_Eidolon2</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-2143808418\">Jade_Passive_Rate</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-1749110767\">Jade_BPAbility</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-1687174133\">Jade_BPAbilitySelf</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-1732030848\">Jade_Ultimate_Insert</a>",
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
    "name": "<a class=\"gModGreen\" id=\"119818662\">Jade_Eidolon6_BPAbility</a>",
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
    "name": "<a class=\"gModGreen\" id=\"553729296\">Jade_Eidolon6_BPAbilitySelf</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-2014523245\">Mar_7th_10_Ability02_Master</a>",
    "realName": "Shifu",
    "aim": "Other",
    "desc": "After using an attack or Ultimate, %CasterName gains a max of 1 Charge point each time.",
    "type": "Become Shifu",
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-388995203\">Mar_7th_10_Energy</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-178417190\">Mar_7th_10_Ability02_Master_SpeedUp</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-1546960372\">Mar_7th_10_Ability03_Enhance_Normal</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-909564099\">Feixiao_InsertIsReady</a>",
    "realName": "Thunderhunt",
    "aim": "Other",
    "desc": "The Talent's Follow-Up ATK can now be triggered.",
    "type": null,
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-1116070545\">Feixiao_DamageProperty</a>",
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
    "name": "<a class=\"gModGreen\" id=\"639093534\">Sam_Ability21_FireWeakType</a>",
    "realName": "Extra Fire Weakness",
    "aim": "Debuff",
    "desc": "Implanted with extra Fire Weakness.",
    "type": "Implant Weakness: Fire",
    "perma": false
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-1059820745\">BlackSwan_Eidolon1_ThunderResistanceDown</a>",
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
    "name": "<a class=\"gModGreen\" id=\"881956526\">Sam_Eidolon2_BonusCD</a>",
    "realName": "From Shattered Sky, I Free Fall",
    "aim": "Other",
    "desc": "The \"From Shattered Sky, I Free Fall\" effect cannot be triggered yet.",
    "type": null,
    "perma": false
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1111481031\">Acheron_Eidolon4_AllDamageTypeTakenRatio</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-1941685711\">Mar_7th_10_Eidolon2_CD</a>",
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
    "name": "<a class=\"gModGreen\" id=\"813451060\">Yunli_Blocking</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-1909212480\">Yunli_Trace03_Sub</a>",
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
    "name": "<a class=\"gModGreen\" id=\"1256261973\">Jiaoqiu_Debuff_Ultra</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-524635455\">Jiaoqiu_Eidolon4_AttackDown</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-1036174530\">Jiaoqiu_AbilityEidolon6_ResistDown</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-110388147\">Mar_7th_10_PointB3_Kill_Property</a>",
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
    "name": "<a class=\"gModGreen\" id=\"1794469882\">Mar_7th_10_PointB3_Break_Property</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-237230767\">Mar_7th_10_Eidolon1_SpeedUp</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-1886427249\">Acheron_UltraAbilitySpareCount</a>",
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
    "name": "<a class=\"gModGreen\" id=\"62451815\">Acheron_UltraAbilitySpareCount_PointB1</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-1872837497\">MWGallagher_Ability02_StatusResModifier</a>",
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
    "name": "<a class=\"gModGreen\" id=\"1211629419\">Aventurine_StackableShield</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-1612096231\">Moze_Ability02_ShadowTargetModifier</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-644782265\">Robin_AbilityEidolon2_Bonus</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-2007691702\">Aventurine_Eidolon1_Status</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-893534812\">Robin_PassiveAbility_CritDmgUp</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-1189146824\">Jade_Eidolon4_DefPenetrate</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-184831783\">Robin_AbilityEidolon4_ResistAll</a>",
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
    "name": "<a class=\"gModGreen\" id=\"2094982629\">Moze_TechniqueUsage_DamageUpModifier</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-759179558\">Jade_Eidolon2_CriticalChance</a>",
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
    "name": "<a class=\"gModGreen\" id=\"154726309\">Sam_Eidolon6_UltraDamageTypeAddRatio</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-24245169\">Robin_AbilityEidolon6_ExtraRatioForShow</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-127930650\">Lingsha_Eidolon1_DefenceRatioDown</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-637709984\">Lingsha_BreakDamageUp</a>",
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
    "name": "<a class=\"gModGreen\" id=\"551246003\">Lingsha_PointB3_CD</a>",
    "realName": "Ember's Echo",
    "aim": "Other",
    "desc": "The Trace \"Ember's Echo\" effect's auto-trigger is still on cooldown.",
    "type": null,
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-77031042\">Yunli_Trace02_ControlResist</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-1949564802\">PlayerBoy_20_AbilityP01_ListenBreakDamage_Self</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-146915656\">Sam_Trace03_BreakDamageAddedRatio_Sub</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-1395014383\">Moze_Ability03_DamageAddModifier</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-962483629\">Lingsha_Eidolon2_BreakDamageAttackRatio</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-1203114075\">Lingsha_Eidolon6_AllDamageTypeResistance</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-1748394699\">Rappa_UltraMode</a>",
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
    "name": "<a class=\"gModGreen\" id=\"1239346790\">Rappa_PointB3_Enemy</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-375769760\">Fugue_DefenceDown</a>",
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
    "name": "<a class=\"gModGreen\" id=\"647019371\">Fugue_BPAbility</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-690913647\">Fugue_BPAbilityBonusListen</a>",
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
    "name": "<a class=\"gModGreen\" id=\"1412694552\">Rappa_AbilityEidolon1</a>",
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
    "name": "<a class=\"gModGreen\" id=\"1496582647\">Rappa_AbilityEidolon4</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-1458859803\">Rappa_Break_Modifier_ForShow</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-2104919447\">Jiaoqiu_Debuff_Flavor</a>",
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
    "name": "<a class=\"gModGreen\" id=\"453883342\">Jiaoqiu_Eidolon1_ListenDamage</a>",
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
    "name": "<a class=\"gModGreen\" id=\"2015662270\">Sunday_10_Ability02_Property</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-1284738050\">Sunday_10_Ability03_Link</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-2103228822\">Sunday_10_CritUp</a>",
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
    "name": "<a class=\"gModGreen\" id=\"359091301\">Yunli_Eidolon4</a>",
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
    "name": "<a class=\"gModGreen\" id=\"1896809372\">Yunli_Blocking_CritDamage</a>",
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
    "name": "<a class=\"gModGreen\" id=\"707417159\">Moze_Eidolon1_DeBonus</a>",
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
    "name": "<a class=\"gModGreen\" id=\"707542368\">Moze_Point01_CD</a>",
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
    "name": "<a class=\"gModGreen\" id=\"1698887691\">Sunday_10_Eidolon1_SuperBonusForServant</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-1132900651\">Fugue_BPAbility_Eidolon1</a>",
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
    "name": "<a class=\"gModGreen\" id=\"555212333\">TheHerta_Ability03_Bonus</a>",
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
    "name": "<a class=\"gModGreen\" id=\"2094330090\">Feixiao_AttackProperty</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-1774454693\">Fugue_RedStance</a>",
    "realName": "Cloudflame Luster",
    "aim": "Other",
    "desc": "When initial Toughness is reduced to 0, \"Cloudflame Luster\" can continue to be reduced. When \"Cloudflame Luster\" is reduced to 0, the enemy will receive Weakness Break DMG again.",
    "type": "Cloudflame Luster",
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1006222027\">Feixiao_Eidolon4_Property</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-1384650414\">Feixiao_Eidolon1_Property</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-1216788746\">Fugue_BPAbility_Eidolon4</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-1045772852\">Fugue_Eidolon6</a>",
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
    "name": "<a class=\"gModGreen\" id=\"1748420043\">Fugue_PointB2_Sub</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-817980433\">Sunday_10_Eidolon1_SuperBonus</a>",
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
    "name": "<a class=\"gModGreen\" id=\"2041266105\">Sunday_10_MazeBonus</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-1763336434\">Mydeimos_Transfer</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-242497681\">Mydeimos_Trace03_Sub</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-1699792479\">Tribbie_SKL02_Bonus_Buff</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-1508822063\">Tribbie_SKL03_Bonus_Debuff</a>",
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
    "name": "<a class=\"gModGreen\" id=\"361990450\">Tribbie_PointB1_DamageUpModifier</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-1046659157\">Tribbie_SKL03_PointB2</a>",
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
    "name": "<a class=\"gModGreen\" id=\"357538519\">Tribbie_Eidolon4_Bonus</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-343822525\">Feixiao_Eidolon2_CD</a>",
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
    "name": "<a class=\"gModGreen\" id=\"1890012800\">TheHerta_Trace02_Bonus</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-533235219\">TheHerta_Eidolon4_Bonus</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-612445396\">TheHerta_SKL21</a>",
    "realName": "Inspiration",
    "aim": "Other",
    "desc": "Skill is enhanced to \"Hear Me Out.\"",
    "type": null,
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-1367812201\">TheHerta_Passive_MagicMark</a>",
    "realName": "Interpretation",
    "aim": "Other",
    "desc": "The Herta's Enhanced Skill will additionally deal DMG to all enemies based on the number of \"Interpretation\" stacks on the target.",
    "type": null,
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1136992241\">Phainon_Ultra</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-982733816\">Phainon_Tree03_Property</a>",
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
    "name": "<a class=\"gModGreen\" id=\"518821924\">Aglaea_Ability03</a>",
    "realName": "Supreme Stance",
    "aim": "Buff",
    "desc": "Basic ATK is enhanced to \"Slash by a Thousandfold Kiss.\"",
    "type": "Supreme Stance",
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-1027471092\">Aglaea_Eidolon2_Effect</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-680299003\">Sunday_10_CriticalChanceConvert</a>",
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
    "name": "<a class=\"gModGreen\" id=\"1985764523\">TheHerta_Trace03_ExtraDamage</a>",
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
    "name": "<a class=\"gModGreen\" id=\"2055277226\">Aglaea_Ability03_Servant_PointB1_AddAttack</a>",
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
    "name": "<a class=\"gModGreen\" id=\"490649964\">Fugue_PointB3_Sub</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-1588888193\">Anaxa_UltraDebuff</a>",
    "realName": "Sublimation",
    "aim": "Debuff",
    "desc": "Physical, Fire, Ice, Lightning, Wind, Quantum, and Imaginary Weaknesses are added at the same time.",
    "type": "Sublimation",
    "perma": false
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-992053376\">Anaxa_Trace02_SubAll</a>",
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
    "name": "<a class=\"gModGreen\" id=\"671072840\">Anaxa_BPAbility_Bonus</a>",
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
    "name": "<a class=\"gModGreen\" id=\"1330366864\">Aglaea_Eidolon6_Effect</a>",
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
    "name": "<a class=\"gModGreen\" id=\"216440055\">Aglaea_GoldenSword_Mark</a>",
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
    "name": "<a class=\"gModGreen\" id=\"1110462690\">Phainon_Ultimate_TeamStealth</a>",
    "realName": "Ruinous Irontomb",
    "aim": "Other",
    "desc": "Those in the Departed state cannot be designated as ability targets and will not appear in the Action Order.",
    "type": null,
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-1449149515\">Sunday_10_MazeBonus_ForCaster</a>",
    "realName": "The Glorious Mysteries",
    "aim": "Other",
    "desc": "The next time this unit uses an ability on an ally target, the target's DMG dealt increases.",
    "type": null,
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"127317606\">TheHerta_TechniqueUsage_AttackRatioUp</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-394991116\">Memosprite_AglaeaServant_AddSpeed</a>",
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
    "name": "<a class=\"gModGreen\" id=\"1374425540\">Memosprite_AglaeaServant_SummonerAddSpeed</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-1902777328\">Memosprite_HyacineServant_MaxHpHalo</a>",
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
    "name": "<a class=\"gModGreen\" id=\"593318455\">Hyacine_Ability03_MaxHP_Grow</a>",
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
    "name": "<a class=\"gModGreen\" id=\"1110430040\">Hyacine_PointB3_Effect</a>",
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
    "name": "<a class=\"gModGreen\" id=\"985102857\">TheHerta_Eidolon2_CD</a>",
    "realName": "Wind Through Keyhole",
    "aim": "Other",
    "desc": "The \"Wind Through Keyhole\" action advance effect cannot be triggered yet.",
    "type": null,
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-330015598\">Phainon_Ultimate_Energy</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-879409639\">Anaxa_Trace02_Sub</a>",
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
    "name": "<a class=\"gModGreen\" id=\"1985962154\">Phainon_Guard</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-658097441\">Castorice_Ability03_AllDamageTypeResistance</a>",
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
    "name": "<a class=\"gModGreen\" id=\"635972074\">Castorice_Passive_AllDamageTypeAddedRatio</a>",
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
    "name": "<a class=\"gModGreen\" id=\"2103337058\">Memosprite_Castorice_SpeedRatio</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-799988230\">Castorice_PointB3_AllDamageTypeAddedRatio</a>",
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
    "name": "<a class=\"gModGreen\" id=\"1861384440\">Castorice_Eidolon4_HealTakenRatio</a>",
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
    "name": "<a class=\"gModGreen\" id=\"559634045\">Tribbie_Eidolon6_Bonus</a>",
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
    "name": "<a class=\"gModGreen\" id=\"2017566930\">Anaxa_Eidolon6_DamageUp</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-509656395\">Memosprite_CastoriceServant_AllDamageTypeAddedRatio</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-1664293665\">Tribbie_SKL02_Bonus</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-1351986018\">Tribbie_SKL03_Bonus</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-2088457679\">Cerydra_Ability02_Target_Lv1</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-2138790536\">Cerydra_Ability02_Target_Lv2</a>",
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
    "name": "<a class=\"gModGreen\" id=\"1777978570\">Cerydra_PointB1_CriticalDamageAddedRatio_Sub</a>",
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
    "name": "<a class=\"gModGreen\" id=\"1079912443\">Cerydra_PointB3</a>",
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
    "name": "<a class=\"gModGreen\" id=\"2061988688\">Mydeimos_UltraTarget</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-1724674064\">Tribbie_CanTriggerInsertTag</a>",
    "realName": "Busy as Tribbie",
    "aim": "Other",
    "desc": "After using Ultimate, Tribbie can launch Follow-Up ATK.",
    "type": null,
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1739027787\">Mydeimos_Eidolon4</a>",
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
    "name": "<a class=\"gModGreen\" id=\"951504069\">Mydeimos_Trace01</a>",
    "realName": "Earth and Water",
    "aim": "Buff",
    "desc": "During the \"Vendetta\" state, Mydei will not exit the \"Vendetta\" state when receiving a killing blow.",
    "type": "Earth and Water",
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"555330029\">Castorice_Eidolon2_Count</a>",
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
    "name": "<a class=\"gModGreen\" id=\"1132518124\">Hyacine_Passive_Effect</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-459849199\">Castorice_Eidolon6_QuantumPenetrate</a>",
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
    "name": "<a class=\"gModGreen\" id=\"291142985\">Cipher_BpKuoSan</a>",
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
    "name": "<a class=\"gModGreen\" id=\"2063646932\">Cipher_BpKuoSan_Self</a>",
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
    "name": "<a class=\"gModGreen\" id=\"116163492\">Cipher_BP_Bonus</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-1685549745\">Cipher_BP_Debuff</a>",
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
    "name": "<a class=\"gModGreen\" id=\"1113671218\">Cipher_PointB3_Debuff</a>",
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
    "name": "<a class=\"gModGreen\" id=\"140202366\">Anaxa_Passive_Mark</a>",
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
    "name": "<a class=\"gModGreen\" id=\"1897109390\">Memosprite_HyacineServant_Eidolon2SpeedUp</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-2026163190\">Memosprite_HyacineServant_Eidolon6_PenetrateRatio</a>",
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
    "name": "<a class=\"gModGreen\" id=\"1998064298\">Hyacine_Maze_AddMaxHp</a>",
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
    "name": "<a class=\"gModGreen\" id=\"2133723962\">Memosprite_CastoriceServant_InsideExplode</a>",
    "realName": "Back to the Black",
    "aim": "Other",
    "desc": "Triggers the Talent effect of \"Wings Sweep the Ruins\" the next time \"Breath Scorches the Shadow\" is used.",
    "type": null,
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"4491835\">Cipher_BpKuoSan_Insert_CD</a>",
    "realName": "The Hospitable Dolosian",
    "aim": "Other",
    "desc": "Talent's Follow-Up ATK cannot yet be triggered.",
    "type": null,
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-309291538\">Cipher_Eidolon2_Debuff</a>",
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
    "name": "<a class=\"gModGreen\" id=\"1467539794\">Cipher_Eidolon1_Bonus</a>",
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
    "name": "<a class=\"gModGreen\" id=\"529435553\">Phainon_Ultimate_Weakness</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-1152823097\">Phainon_Eidolon2_Property</a>",
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
    "name": "<a class=\"gModGreen\" id=\"492819159\">Memosprite_HyacineServant_Passive_Mark</a>",
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
    "name": "<a class=\"gModGreen\" id=\"151398776\">Phainon_SPOverflow</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-2139860773\">Constance_Aura</a>",
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
    "name": "<a class=\"gModGreen\" id=\"1672196814\">Advanced_Silwolf_Normal_Bug1</a>",
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
    "name": "<a class=\"gModGreen\" id=\"1655419195\">Advanced_Silwolf_Normal_Bug2</a>",
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
    "name": "<a class=\"gModGreen\" id=\"1638641576\">Advanced_Silwolf_Normal_Bug3</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-755062835\">Advanced_Silwolf_BPAbility_WeakType</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-1797889012\">Advanced_Silwolf_BPAbility_WeakType_Extra</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-1155855512\">Advanced_Silwolf_BPAbility_AllDamageTypeResistanceDown</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-860979758\">Advanced_Silwolf_Eidolon2_AllDamageTypeTakenRatio</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-46466503\">Advanced_Silwolf_Ultimate_DefenceRatioDown</a>",
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
    "name": "<a class=\"gModGreen\" id=\"860600554\">Advanced_Silwolf_BPAbility_WeakType_Fire</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-1570756707\">Advanced_Silwolf_BPAbility_WeakType_Ice</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-1784823028\">Advanced_Silwolf_BPAbility_WeakType_Wind</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-1062446229\">Advanced_Silwolf_BPAbility_WeakType_Physical</a>",
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
    "name": "<a class=\"gModGreen\" id=\"1824019324\">Advanced_Silwolf_BPAbility_WeakType_Thunder</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-1901191893\">Advanced_Silwolf_BPAbility_WeakType_Quantum</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-1384846161\">Advanced_Silwolf_BPAbility_WeakType_Imaginary</a>",
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
    "name": "<a class=\"gModGreen\" id=\"96932445\">Advanced_Kafka_Passive_CanAttack</a>",
    "realName": "Gentle but Cruel",
    "aim": "Other",
    "desc": "The effect of Talent \"Gentle but Cruel\" can now be triggered.",
    "type": null,
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1537350177\">Advanced_Kafka_PassiveDotDamage_Eidolon1</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-808375630\">Advanced_Kafka_PointB1_Effect</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-405491517\">Advanced_Ren_Attack_Transfer</a>",
    "realName": "Hellscape",
    "aim": "Other",
    "desc": "Basic ATK \"Shard Sword\" is enhanced to \"Forest of Swords\" that deals Blast DMG. The chance of being targeted by enemy targets greatly increases.",
    "type": "Enhanced Basic ATK",
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"2146687777\">Advanced_Ren_Qi</a>",
    "realName": "Charge",
    "aim": "Other",
    "desc": "At maximum Charge stacks, expends all stacks and immediately deals 1 instance of Follow-Up ATK to all enemies.",
    "type": null,
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1791240191\">Advanced_Ren_Attack</a>",
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
    "name": "<a class=\"gModGreen\" id=\"580817810\">Advanced_Ren_Trace02</a>",
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
    "name": "<a class=\"gModGreen\" id=\"1909621809\">Advanced_Ren_Eidolon4</a>",
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
    "name": "<a class=\"gModGreen\" id=\"1943177047\">Advanced_Ren_Eidolon2</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-936894999\">Advanced_Ren_Ability03_Listen</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-44910835\">Advanced_Jingliu_MoonMad</a>",
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
    "name": "<a class=\"gModGreen\" id=\"596888368\">AdvancedJingliu_PointB3</a>",
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
    "name": "<a class=\"gModGreen\" id=\"291641534\">Advanced_Jingliu_Trace_B1_Resist</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-1838091998\">Advanced_Jingliu_Eidolon1_CriticalDamage</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-1354140510\">Advanced_Jingliu_Passive_CriticalUp</a>",
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
    "name": "<a class=\"gModGreen\" id=\"57193716\">Advanced_Jingliu_Eidolon2</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-556268195\">Cyrene_Ability02_Bonus</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-1470142416\">Cyrene_Ability03</a>",
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
    "name": "<a class=\"gModGreen\" id=\"619883840\">Cyrene_Passive_Sub</a>",
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
    "name": "<a class=\"gModGreen\" id=\"1701170235\">Constance_Aura_OnEnemy</a>",
    "realName": "Lick... Enkindled Betrayal",
    "aim": "Debuff",
    "desc": "Toughness Reduction taken when not Weakness Broken can also be converted to Super Break DMG.",
    "type": null,
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-1116970838\">Constance_InsertCD</a>",
    "realName": "Who's Afraid of Constance?",
    "aim": "Other",
    "desc": "Talent's Follow-Up ATK cannot be triggered yet.",
    "type": null,
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1852842917\">Constance_Tree01_Property</a>",
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
    "name": "<a class=\"gModGreen\" id=\"1388519324\">Advanced_Silwolf_Tree03_AttackUp</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-588160151\">Memosprite_CyreneServant_AmazingBonus_Hyacine</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-331286977\">Memosprite_CyreneServant_AmazingBonus_Castorice</a>",
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
    "name": "<a class=\"gModGreen\" id=\"937032379\">Memosprite_CyreneServant_AmazingBonus_Player</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-1569324375\">Memosprite_CyreneServant_AmazingBonus_Tribbie</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-1678641611\">Memosprite_EvernightServant_PassiveBonus</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-1355223559\">Evernight_Ability02_Bonus_Buff</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-889130257\">Evernight_UltraMode</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-1497104623\">Evernight_Passive_Bonus</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-9916760\">Advanced_Jingliu_Eidolon6</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-1060785735\">Technique_Jingliu_Modifier_Frozen</a>",
    "realName": "Frozen",
    "aim": "Debuff",
    "desc": "Cannot take action for a certain number of turns and takes Ice Additional DMG at the beginning of each turn.",
    "type": "Frozen",
    "perma": false
  },
  {
    "name": "<a class=\"gModGreen\" id=\"37722324\">Advanced_Jingliu_LoseHPCount</a>",
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
    "name": "<a class=\"gModGreen\" id=\"222914634\">Memosprite_CyreneServant_AmazingBonus_Mydeimos_Sub</a>",
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
    "name": "<a class=\"gModGreen\" id=\"1654237423\">Memosprite_CyreneServant_AmazingBonus_Aglaea</a>",
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
    "name": "<a class=\"gModGreen\" id=\"84592407\">Memosprite_CyreneServant_AmazingBonus_Anaxa</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-1139724287\">Memosprite_CyreneServant_AmazingBonus_Cipher</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-1931471655\">Cyrene_Passive_Teamate</a>",
    "realName": "Future",
    "aim": "Other",
    "desc": "When taking action, grants Cyrene \"Recollection.\"",
    "type": null,
    "perma": false
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-1274980234\">PlayerBoy_30_TeamSP</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-745710374\">Memosprite_PlayerBoyServant_30_UltraBonus</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-1895406948\">Memosprite_PlayerBoyServant_30_CritDmgUp</a>",
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
    "name": "<a class=\"gModGreen\" id=\"1854522168\">PlayerBoy_30_Eidolon2_Count</a>",
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
    "name": "<a class=\"gModGreen\" id=\"389221010\">Harscyline_HaloDebuff</a>",
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
    "name": "<a class=\"gModGreen\" id=\"850932122\">Harscyline_DOT_Tear</a>",
    "realName": "Bleed",
    "aim": "Debuff",
    "desc": "Takes Physical DMG at the start of each turn for a certain number of turns.",
    "type": "Bleed",
    "perma": false
  },
  {
    "name": "<a class=\"gModGreen\" id=\"566707275\">Harscyline_DOT_Burn</a>",
    "realName": "Burn",
    "aim": "Debuff",
    "desc": "Takes Fire DMG at the start of each turn for a certain number of turns.",
    "type": "Burn",
    "perma": false
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1250170394\">Harscyline_DOT_Poison</a>",
    "realName": "Wind Shear",
    "aim": "Debuff",
    "desc": "Takes Wind DMG at the start of each turn for a certain number of turns.",
    "type": "Wind Shear",
    "perma": false
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-593885923\">Harscyline_DOT_Electric</a>",
    "realName": "Shock",
    "aim": "Debuff",
    "desc": "Takes Lightning DMG at the start of each turn for a certain number of turns.",
    "type": "Shock",
    "perma": false
  },
  {
    "name": "<a class=\"gModGreen\" id=\"511580758\">Harscyline_AllDamageTypeTakenRatio</a>",
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
    "name": "<a class=\"gModGreen\" id=\"2146839416\">Harscyline_DOT_Tear2</a>",
    "realName": "Bleed",
    "aim": "Debuff",
    "desc": "Takes Physical DMG at the start of each turn for a certain number of turns.",
    "type": "Bleed",
    "perma": false
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-1515140485\">Harscyline_DOT_Burn2</a>",
    "realName": "Burn",
    "aim": "Debuff",
    "desc": "Takes Fire DMG at the start of each turn for a certain number of turns.",
    "type": "Burn",
    "perma": false
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1978589432\">Harscyline_DOT_Poison2</a>",
    "realName": "Wind Shear",
    "aim": "Debuff",
    "desc": "Takes Wind DMG at the start of each turn for a certain number of turns.",
    "type": "Wind Shear",
    "perma": false
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1970678013\">Harscyline_DOT_Electric2</a>",
    "realName": "Shock",
    "aim": "Debuff",
    "desc": "Takes Lightning DMG at the start of each turn for a certain number of turns.",
    "type": "Shock",
    "perma": false
  },
  {
    "name": "<a class=\"gModGreen\" id=\"809988888\">Cerydra_Eidolon2_DamageAddedBonus_Self</a>",
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
    "name": "<a class=\"gModGreen\" id=\"2146072212\">Cerydra_Ability02_AllDamageTypePenetrate</a>",
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
    "name": "<a class=\"gModGreen\" id=\"339150756\">Evernight_UltraMode_Energy</a>",
    "realName": "Darkest Riddle",
    "aim": "Other",
    "desc": "The memosprite Evey consumes 1 Charge after it uses \"Dream, Dissolving, as Dew.\" When Evernight's turn begins, if no Charge remains, she exits the \"Darkest Riddle\" state.",
    "type": null,
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-967456061\">Evernight_UltraMode_Energy_0</a>",
    "realName": "Darkest Riddle",
    "aim": "Other",
    "desc": "When Evernight's turn begins, she exits the \"Darkest Riddle\" state.",
    "type": null,
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-1564398907\">Cerydra_Eidolon6_AllDamageTypePenetrate</a>",
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
    "name": "<a class=\"gModGreen\" id=\"1571294173\">Cerydra_Ability02_Eidolon2_DamageAddedBonus</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-1539081164\">Constance_Ultimate_Weakness</a>",
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
    "name": "<a class=\"gModGreen\" id=\"922171575\">Constance_Tree03_Property</a>",
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
    "name": "<a class=\"gModGreen\" id=\"1367019028\">Constance_Tree02_CD</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-1894879081\">Evernight_Ability02_Bonus</a>",
    "realName": "Day Gently Slips",
    "aim": "Other",
    "desc": "While this effect persists, CRIT DMG increases for all ally memosprites.",
    "type": null,
    "perma": false
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1710373270\">Evernight_PointB1_Crit</a>",
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
    "name": "<a class=\"gModGreen\" id=\"86729012\">Evernight_Eidolon4_Bonus</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-1107046497\">Cerydra_Eidolon1</a>",
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
    "name": "<a class=\"gModGreen\" id=\"1063134824\">Cerydra_PointB2</a>",
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
    "name": "<a class=\"gModGreen\" id=\"810472054\">Cyrene_PointB3_Sub2</a>",
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
    "name": "<a class=\"gModGreen\" id=\"684175961\">Memosprite_CyreneServant_Energy</a>",
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
    "name": "<a class=\"gModGreen\" id=\"309103337\">DanHengPT_LongLing</a>",
    "realName": "Bondmate",
    "aim": "Other",
    "desc": "\"Souldragon\" holder.",
    "type": "Becomes the Bondmate",
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1755552334\">DanHengPT_Shield</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-892900131\">DanHengPT_PointB1_AddAttackRatio</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-452137321\">DanHengPT_Eidolon4_Bonus</a>",
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
    "name": "<a class=\"gModGreen\" id=\"2035403394\">DanHengPT_Eidolon1</a>",
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
    "name": "<a class=\"gModGreen\" id=\"1957610629\">Harscyline_PointB3_DamageAdded</a>",
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
    "name": "<a class=\"gModGreen\" id=\"1917936936\">Memosprite_CyreneServant_AmazingBonus_Cipher_Sub</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-716696180\">Memosprite_CyreneServant_AmazingBonus_Harscyline</a>",
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
    "name": "<a class=\"gModGreen\" id=\"890706455\">Constance_Dancer</a>",
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
    "name": "<a class=\"gModGreen\" id=\"376015846\">Evernight_Eidolon6_Bonus</a>",
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
    "name": "<a class=\"gModGreen\" id=\"1040309000\">DanHengPT_Eidolon6_AllDamageTypeTakenRatio</a>",
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
    "name": "G_YaoGuang_Ability03_AllDamageTypePenetrate",
    "realName": "Hexagram of Feathered Fortune",
    "aim": "Buff",
    "desc": "All-Type RES PEN increases by #1[f1]%.",
    "type": "All-Type RES PEN Boost",
    "perma": true,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "G_YaoGuang_Ability04_AllDamageTypeTaken",
    "realName": "Woe's Whisper",
    "aim": "Debuff",
    "desc": "DMG taken increases by #1[f1]%.",
    "type": "Vulnerability",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "G_YaoGuang_Ability02_ToMember",
    "realName": "Decalight Unveils All",
    "aim": "Buff",
    "desc": "Elation increases by #1[f1]%.",
    "type": "Elation Boost",
    "perma": true,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "G_YaoGuang_Eidolon2_Bonus",
    "realName": "Blind Arrows Guided by Feathers",
    "aim": "Buff",
    "desc": "Elation increases by #2[i]% and SPD increases by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_PropertyValue",
      "#SkillRank_Rank02_P1"
    ]
  },
  {
    "name": "G_YaoGuang_Eidolon1_Bonus",
    "realName": "Chuckle Chimes Where Jade Falls",
    "aim": "Buff",
    "desc": "Elation DMG dealt ignores #1[i]% of the target's DEF.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "G_YaoGuang_ElationPursued_UI_TOP_Nodisplay",
    "realName": "Certified Banger",
    "aim": "Other",
    "desc": "The tallied Punchline is #1[i].",
    "type": null,
    "perma": true,
    "params": [
      "_Current"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-1976946957\">PlayerBoy_30_UltraState</a>",
    "realName": "Epic",
    "aim": "Other",
    "desc": "When Mem is on the field, Basic ATK is enhanced to \"Together, We Script Tomorrow!\"",
    "type": "Epic",
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1347842886\">Evernight_UltraMode_Debuff</a>",
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
    "name": "<a class=\"gModGreen\" id=\"81139284\">Memosprite_CyreneServant_AmazingBonus_Evernight</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-484368069\">Memosprite_CyreneServant_AmazingBonus_Phainon</a>",
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
    "name": "<a class=\"gModGreen\" id=\"609996020\">Memosprite_CyreneServant_AmazingBonus_Cerydra</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-2040095871\">Memosprite_EvernightServant_DeathRattle_Speed</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-814125319\">Memosprite_CyreneServant_AmazingBonus_Harscyline_Sub</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-1621405598\">Memosprite_CyreneServant_AmazingBonus_Castorice_Sub</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-1787059075\">Memosprite_CyreneServant_Passive_Memory</a>",
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
    "name": "Sparxie_ElationPursued",
    "realName": "Certified Banger",
    "aim": "Buff",
    "desc": "The tallied Punchline is #1[i].",
    "type": null,
    "perma": true,
    "params": [
      "_ElationPoint"
    ]
  },
  {
    "name": "Sparxie_Eidolon2_CriticalDamage",
    "realName": "#AudienceKnows",
    "aim": "Buff",
    "desc": "Each stack increases CRIT DMG by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Sparxie_Trace01_Bonus",
    "realName": "Sweet! Punchline Signing",
    "aim": "Buff",
    "desc": "Elation increases by #1[f1]%.",
    "type": "Elation Boost",
    "perma": true,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-1272476867\">DanHengPT_Eidolon6_Bonus</a>",
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
    "name": "<a class=\"gModGreen\" id=\"576316400\">Memosprite_CyreneServant_AmazingBonus_DanHengPT_Sub</a>",
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
    "name": "<a class=\"gModGreen\" id=\"42532209\">Memosprite_CyreneServant_AmazingBonus_Normal</a>",
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
    "name": "<a class=\"gModGreen\" id=\"1391660847\">Evernight_PointB1_Bonus</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-417743675\">PlayerWarrior_Passive_BreakAtkUp</a>",
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
    "name": "<a class=\"gModGreen\" id=\"1618202918\">PlayerWarrior_SkilTree02_BreakDefUp</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-1043486589\">MWPlayerBoy_10_WeaponCharge</a>",
    "realName": "Magma Will",
    "aim": "Other",
    "desc": "When there are 4 or more stacks of Magma Will, Enhances Basic ATK.",
    "type": null,
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-1196656931\">PlayerBoy_10_WeaponCharge_Free</a>",
    "realName": "War-Flaming Lance",
    "aim": "Other",
    "desc": "The next Basic ATK will become an Enhanced Basic ATK and will not consume Magma Will.",
    "type": "Enhanced Basic ATK",
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"519378514\">PlayerBoy_10_TechniqueUsage_Shield</a>",
    "realName": "Shield",
    "aim": "Buff",
    "desc": "Gains a Shield that absorbs DMG. While the Shield persists, enemy attacks will not reduce Shielded characters' HP.",
    "type": "Shield",
    "perma": false
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1396744931\">MWPlayerBoy_10_AttackRatioUp</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-356032349\">MWPlayerBoy_10_DamageResistance</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-1400516150\">MWPlayerBoy_10_Shield</a>",
    "realName": "Shield",
    "aim": "Buff",
    "desc": "Gains a Shield that absorbs DMG. While the Shield persists, enemy attacks will not reduce Shielded characters' HP.",
    "type": "Shield",
    "perma": false
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1564952013\">PlayerBoy_10_Eidolon6_Stack</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-670613406\">PlayerBoy_10_DamageResistance_Team</a>",
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
    "name": "<a class=\"gModGreen\" id=\"645822293\">Evernight_Ability02_Bonus_PointB3</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-1701896777\">Evernight_Eidolon2_Crit</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-277317282\">Memosprite_CyreneServant_AmazingBonus_Phainon_Sub</a>",
    "realName": "Eternal Ignition",
    "aim": "Buff",
    "desc": "Khaslana will maintain the \"Divine Vessel\" state: With the blessing of companions, flames shall thoroughly illuminate the darkness.",
    "type": null,
    "perma": true
  },
  {
    "name": "Advanced_BlackSwan_DOT",
    "realName": "Arcana",
    "aim": "Debuff",
    "desc": "Takes Wind DMG at the start of each turn. While in the \"Arcana\" state, will also be considered as suffering from Wind Shear, Bleed, Burn, and Shock.",
    "type": "Arcana",
    "perma": true,
    "params": [
      "MDF_MaxLayer"
    ]
  },
  {
    "name": "Advanced_BlackSwan_DOT_Enhance",
    "realName": "Epiphany",
    "aim": "Debuff",
    "desc": "DMG taken increases by #1[i]%. When enemy targets are inflicted with \"Arcana,\" there is a #2[i]% fixed chance to additionally increase the number of \"Arcana\" stacked this time by 1. And the number of \"Arcana\" stacks will not be halved after dealing DMG at the start of the turn.",
    "type": "Epiphany",
    "perma": false,
    "params": [
      "MDF_PropertyValue",
      "MDF_Chance"
    ]
  },
  {
    "name": "Advanced_BlackSwan_DefenceDown",
    "realName": "Decadence, False Twilight",
    "aim": "Debuff",
    "desc": "DEF decreases by #1[f1]%.",
    "type": "DEF Reduction",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Advanced_BlackSwan_Trace03_Sub",
    "realName": "Candleflame's Portent",
    "aim": "Buff",
    "desc": "DMG dealt increases by #1[f1]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"827249673\">Cyrene_PointB3_Sub3</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-1356425425\">Cyrene_Ability02_Bonus_Main</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-1194084175\">Memosprite_CyreneServant_AmazingBonus_Cerydra_Sub</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-313440704\">Memosprite_CyreneServant_AmazingBonus_Aglaea_Sub2</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-380368106\">Constance_Eidolon4_Property</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-1127015724\">Constance_Eidolon6_Property</a>",
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
    "name": "<a class=\"gModGreen\" id=\"835315990\">Memosprite_CyreneServant_AmazingBonus_Anaxa_Halo</a>",
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
    "name": "<a class=\"gModGreen\" id=\"2147220756\">Memosprite_CyreneServant_Eidolon6_Sub</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-1655562855\">Memosprite_CyreneServant_AmazingBonus_DanHengPT</a>",
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
    "name": "<a class=\"gModGreen\" id=\"793524292\">Constance_Eidolon1_SuperBreak</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-156616153\">Memosprite_CyreneServant_Eidolon4_Count</a>",
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
    "name": "Mavatar_Advanced_Sparkle_Ability02_CritDmgAddedRatio02",
    "realName": "Dreamdiver",
    "aim": "Buff",
    "desc": "CRIT DMG increases by #1[i]%.",
    "type": null,
    "perma": false,
    "params": [
      "MDF_PropertyValue2",
      "MDF_ElationRatio"
    ]
  },
  {
    "name": "Advanced_Sparkle_Ability03_PowerUp",
    "realName": "Cipher",
    "aim": "Buff",
    "desc": "Each stack of the Vulnerability effect provided by Sparkle's Talent additionally increases by #2[f2]%.",
    "type": "Cipher",
    "perma": true,
    "params": [
      "MDF_PropertyValue2",
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Advanced_Sparkle_Ability02_CritDmgAddedRatio01",
    "realName": "Dreamdiver",
    "aim": "Buff",
    "desc": "CRIT DMG increases by #1[i]%.",
    "type": "CRIT DMG Boost",
    "perma": false,
    "params": [
      "MDF_PropertyValue",
      "MDF_AllDamageTypePenetrate"
    ]
  },
  {
    "name": "Advanced_Sparkle_PassiveAbility_AllDamageAddedRatio02",
    "realName": "Vulnerability",
    "aim": "Debuff",
    "desc": "DMG taken increases by #1[f1]%.",
    "type": "Vulnerability",
    "perma": true,
    "params": [
      "MDF_PropertyValue",
      "MDF_DefenceAddedRatio2"
    ]
  },
  {
    "name": "Advanced_Sparkle_Tree03",
    "realName": "Nocturne",
    "aim": "Buff",
    "desc": "ATK increases by #1[i]%.",
    "type": "Nocturne",
    "perma": false,
    "params": [
      "MDF_PropertyValue3"
    ]
  },
  {
    "name": "Advanced_Sparkle_SpeedUP",
    "realName": "Suspension of Disbelief",
    "aim": "Buff",
    "desc": "SPD increases by #1[i]%.",
    "type": "SPD Boost",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Sparxie_Trace03_Sub02",
    "realName": "Frenzy! Palette of Truth and Lies",
    "aim": "Buff",
    "desc": "CRIT DMG increases by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Sparxie_Eidolon1_Sub02",
    "realName": "#GoingViral #WhoIsShe",
    "aim": "Buff",
    "desc": "All-Type RES PEN increases by #1[f1]%.",
    "type": "All-Type RES PEN Boost",
    "perma": true,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Sparxie_Eidolon4_Sub",
    "realName": "#LockedIn #FaceCard",
    "aim": "Buff",
    "desc": "Elation increases by #1[i]%.",
    "type": "Elation Boost",
    "perma": true,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-1624350031\">Constance_Eidolon2_PropertyValue</a>",
    "realName": "Fresh, Ethereal, and Beloved",
    "aim": "Debuff",
    "desc": "All-Type RES decreases by #1[i]%.",
    "type": "All-Type RES Reduction",
    "perma": true,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Advanced_Sparkle_Ability03ExtraBP",
    "realName": "The Hero with a Thousand Faces",
    "aim": "Buff",
    "desc": "After an ally's turn ends, if the current Skill Points are not at maximum, immediately recovers Skill Points for the team.",
    "type": null,
    "perma": false
  },
  {
    "name": "Sparxie_Eidolon6",
    "realName": "#BuiltDifferent #GoingExtinct",
    "aim": "Buff",
    "desc": "All-Type RES PEN increases by #1[i]%.",
    "type": "All-Type RES PEN Boost",
    "perma": true,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "YaoGuang_Trace02_Sub02",
    "realName": "Poised and Sated",
    "aim": "Buff",
    "desc": "CRIT DMG increases by #1[i]%.",
    "type": "CRIT DMG Boost",
    "perma": true,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "YaoGuang_Trace02_Sub01",
    "realName": "Poised and Sated",
    "aim": "Buff",
    "desc": "CRIT DMG increases by #1[i]%.",
    "type": "CRIT DMG Boost",
    "perma": true,
    "params": [
      "MDF_PropertyValue2"
    ]
  },
  {
    "name": "Sparxie_EnergyPoint",
    "realName": "Thrill",
    "aim": "Other",
    "desc": "Can be used to offset Sparxie's consumption of Skill Points. Consuming \"Thrill\" is considered as consuming Skill Points.",
    "type": null,
    "perma": true
  },
  {
    "name": "G_YaoGuang_ElationPursued",
    "realName": "Certified Banger",
    "aim": "Buff",
    "desc": "The tallied Punchline is #1[i].",
    "type": null,
    "perma": true,
    "params": [
      "_ElationPoint"
    ]
  },
  {
    "name": "G_YaoGuang_Eidolon6_Bonus",
    "realName": "Ferried Along the Astral Arc",
    "aim": "Buff",
    "desc": "Elation DMG merrymakes by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Advanced_Sparkle_PassiveAbility_Halo",
    "realName": "Figment",
    "aim": "Buff",
    "desc": "The DMG taken by all enemies increases.",
    "type": null,
    "perma": false
  },
  {
    "name": "Advanced_Sparkle_PointB2_FreeAbility",
    "realName": "Artificial Flower",
    "aim": "Buff",
    "desc": "The next use of Skill does not consume any Skill Points.",
    "type": null,
    "perma": false
  },
  {
    "name": "G_YaoGuang_Ability02_ToSelf",
    "realName": "Decalight Unveils All",
    "aim": "Buff",
    "desc": "Elation increases by #1[f1]%.",
    "type": "Elation Boost",
    "perma": true,
    "params": [
      "MDF_PropertyValue3"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-1667717158\">Saber_Passive_ExceedSpStatus</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-1386884047\">Saber_Energy_Count</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-1328926688\">Saber_Trace03_Bonus_02</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-914489393\">Saber_Eidolon4</a>",
    "realName": "The Saga of Sixteen Winter Days",
    "aim": "Buff",
    "desc": "Wind RES PEN increases by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "#SkillRank_Rank04_P1_Ratio"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-1437622489\">Saber_Trace01_Bonus</a>",
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
    "name": "<a class=\"gModGreen\" id=\"581836941\">Saber_Trace03_Bonus</a>",
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
    "name": "<a class=\"gModGreen\" id=\"879085567\">Saber_Ability03_CD</a>",
    "realName": "Mana Burst",
    "aim": "Other",
    "desc": "When Saber has \"Core Resonance,\" and if using Skill and consuming \"Core Resonance\" can fully regenerate her Energy, consumes \"Mana Burst\" to cause Saber to immediately take action and recover 1 Skill Point for allies.",
    "type": "Mana Burst",
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-435192710\">Saber_Passive_Bonus</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-1058966793\">Saber_Eidolon2_Bonus</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-1732744103\">Saber_TechniqueUsage_Bonus</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-269544975\">Saber_Eidolon4_Bonus</a>",
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
    "name": "<a class=\"gModGreen\" id=\"1658820893\">Saber_Eidolon6_Count</a>",
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
    "name": "<a class=\"gModGreen\" id=\"308886295\">Archer_BPAbility_AddDamagePercentage</a>",
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
    "name": "<a class=\"gModGreen\" id=\"350752129\">Archer_Trace03_CriticalDMG</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-1612899858\">Archer_BonusTrigger</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-1473893661\">Archer_Eidolon2_AddWeak</a>",
    "realName": "The Unfulfilled Happiness",
    "aim": "Debuff",
    "desc": "Additionally implanted Quantum Weakness. Quantum RES decreases by #1[i]%.",
    "type": "Implanted Quantum Weakness",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  }
]