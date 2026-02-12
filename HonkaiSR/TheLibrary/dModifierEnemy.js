let modifiersEnemy = [
  {
    "name": "<a class=\"gModGreen\" id=\"-1864245059\">Monster_W1_Soldier01_DefenceRatioDown</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-1281886828\">Monster_W1_Soldier01_03_Bonus</a>",
    "realName": "ATK Boost",
    "aim": "Buff",
    "desc": "ATK +#1[i]%.",
    "type": "ATK Boost",
    "perma": false,
    "params": [
      "Modifier_AttackAddedRatio"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1385757632\">Enemy_W1_Soldier04_AbilityP01_Supporting</a>",
    "realName": "Support",
    "aim": "Buff",
    "desc": "When a Supported friendly unit attacks any target, this unit will immediately launch a Follow-Up ATK on the target.",
    "type": "Provide Support",
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-929204023\">Enemy_W1_Soldier04_AbilityP01_Supported</a>",
    "realName": "Reinforced",
    "aim": "Other",
    "desc": "Receives Support from %CasterName.",
    "type": "Support Target",
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-387357924\">Enemy_W1_Soldier03_ListenBeingAttacked</a>",
    "realName": "Counter",
    "aim": "Buff",
    "desc": "Uses a Powerful Counter on the attacker after being attacked.",
    "type": "Counter",
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-2038076408\">Monster_Gepard_Attack_Sign</a>",
    "realName": "Aggravate",
    "aim": "Debuff",
    "desc": "Silvermane Guards will focus their attacks on this target.",
    "type": "Lock On",
    "perma": false
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-1321981323\">Enemy_W1_Gepard_BlockDamage</a>",
    "realName": "Barrier",
    "aim": "Buff",
    "desc": "Nullifies all DMG received except for DoT until after being attacked.",
    "type": "Barrier",
    "perma": false
  },
  {
    "name": "<a class=\"gModGreen\" id=\"946339673\">Monster_W1_CocoliaP1_RL_DamageUp</a>",
    "realName": "DMG Boost",
    "aim": "Buff",
    "desc": "Increases DMG dealt by #1[i]%. This effect can stack.",
    "type": "DMG Boost",
    "perma": true,
    "params": [
      "MDF_DamageUpRatio_PerLayer"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-1293195213\">Monster_W1_Svarog_RL_Control_Modifier</a>",
    "realName": "Restrain",
    "aim": "Debuff",
    "desc": "Restrained. Cannot take action.",
    "type": "Restrain",
    "perma": true,
    "params": [
      "Owner_MaxHP",
      "Modifier_DamagePercentage"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-883410937\">Monster_W1_CocoliaP1_RL_Ability05_Bonus</a>",
    "realName": "DMG Boost",
    "aim": "Buff",
    "desc": "Increases DMG dealt by #1[i]%.",
    "type": "DMG Boost",
    "perma": false,
    "params": [
      "ModifierDamageUpValue"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"700810271\">Svarog_Electric_Modifier</a>",
    "realName": "Grievous",
    "aim": "Debuff",
    "desc": "For a certain number of turns, DEF is reduced by #2[i]%, and takes Physical DMG at the beginning of each turn.",
    "type": "Grievous",
    "perma": false,
    "params": [
      "Modifier_DamagePercentage",
      "Modifier_DefenceAddedRatio"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-1496711585\">Svarog_Kaboom_Modifier</a>",
    "realName": "Overheat",
    "aim": "Debuff",
    "desc": "Received Toughness DMG increases by #1[i]%, and received damage increases by #2[i]%.",
    "type": "Overheat",
    "perma": true,
    "params": [
      "MDF_StanceBreakTakenRatio",
      "MDF_AllDamageTypeTakenRatio"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-1854522558\">Svarog_Ability07_AllDamageUp_Modifier</a>",
    "realName": "Amplification",
    "aim": "Buff",
    "desc": "Increases DMG dealt by #1[i]%. This effect can stack.",
    "type": "DMG Boost",
    "perma": false,
    "params": [
      "Modifier_AllDamageUp"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"912094213\">Svarog_Control_Modifier</a>",
    "realName": "Restrain",
    "aim": "Debuff",
    "desc": "Restrained. Cannot take action.",
    "type": "Restrain",
    "perma": true,
    "params": [
      "Owner_MaxHP",
      "Modifier_DamagePercentage"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"352751855\">Monster_W1_Gepard_RL_DamageUP</a>",
    "realName": "DMG Boost",
    "aim": "Buff",
    "desc": "Increases DMG dealt by #1[i]%.",
    "type": "DMG Boost",
    "perma": true,
    "params": [
      "MDF_DamageAddedRatio"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-1955091143\">Enemy_W1_Gepard_RL_ListenBeingAttacked</a>",
    "realName": "Counter",
    "aim": "Buff",
    "desc": "Uses a Powerful Counter on the attacker after being attacked.",
    "type": "Counter",
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-1788931056\">Gepard_RL_ShieldIcon</a>",
    "realName": "Collective Shield",
    "aim": "Buff",
    "desc": "A Shield that absorbs DMG taken by all enemies. While the Shield persists, allies' attacks will not reduce the Shielded enemies' HP.",
    "type": "Collective Shield",
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1185722758\">Gepard_RL_ShieldIcon2</a>",
    "realName": "Weakness Protected",
    "aim": "Buff",
    "desc": "Before the Collective Shield ends, enemy targets' Toughness cannot be reduced.",
    "type": "Weakness Protected",
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-1430608043\">Enemy_W1_Gepard_IF_03_Enhance</a>",
    "realName": "Thick and Thin",
    "aim": "Buff",
    "desc": "Greatly enhances this unit, increasing SPD by #1[i]%. When in this state, Frigid Waterfall has a slight chance to Freeze the attacked target.",
    "type": "Enhance",
    "perma": true,
    "params": [
      "MDF_SpeedUp"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1981216123\">Enemy_IF_LimboMark</a>",
    "realName": "Valor Via Setbacks",
    "aim": "Other",
    "desc": "Enters Downed state, waiting for recovery.",
    "type": "Downed",
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-59384693\">Enemy_W1_Gepard_IF_03_EnhancePerTurn</a>",
    "realName": "Will of Steel",
    "aim": "Buff",
    "desc": "Each stack increases SPD by #1[i]% and ATK by #2[i]%. All stacks are lost when Weakness is broken.",
    "type": "Enhance",
    "perma": true,
    "params": [
      "MDF_SpeedUpPerLayer",
      "MDF_AttackUpPerLayer"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1202181629\">Enemy_W1_Bronya_WeakPointProtected</a>",
    "realName": "Weakness Protected",
    "aim": "Buff",
    "desc": "Bronya's Toughness cannot be reduced while there are enemies on the field.",
    "type": "Weakness Protected",
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1747978880\">Enemy_W1_Bronya_Ability02</a>",
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
    "name": "<a class=\"gModGreen\" id=\"-409658375\">Enemy_W1_Bronya_RL_Ability02_PowerUp</a>",
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
    "name": "<a class=\"gModGreen\" id=\"1364188900\">Enemy_W1_Bronya_IF_02_Enhance</a>",
    "realName": "Shared Hatred",
    "aim": "Buff",
    "desc": "Greatly enhances this unit, increasing SPD by #1[i]%. When in this state, Bronya can summon even more Silvermane Cannoneers.",
    "type": "Enhance",
    "perma": true,
    "params": [
      "MDF_SpeedUp"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1421957792\">Enemy_W1_Bronya_IF_02_EnhancePerTurn</a>",
    "realName": "Carried By Inertia",
    "aim": "Buff",
    "desc": "Each stack increases SPD by #1[i]% and ATK by #2[i]%. All stacks are lost when Weakness is broken.",
    "type": "Enhance",
    "perma": true,
    "params": [
      "MDF_SpeedUpPerLayer",
      "MDF_AttackUpPerLayer"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"946500704\">Enemy_W1_Bronya_IF_02_MainHaloEffect</a>",
    "realName": "Charge",
    "aim": "Other",
    "desc": "The character is currently in the Main attack state.",
    "type": "Main Attack",
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-1695607247\">Enemy_W1_Bronya_IF_02_AssistantSpeed</a>",
    "realName": "Defense",
    "aim": "Other",
    "desc": "Decreases SPD by #1[i]% when the character is in Support mode.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_SpeedDownRatio"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1281838321\">Enemy_W1_CocoliaP2_Ability10_TargetLock</a>",
    "realName": "Harbinger of Annihilation",
    "aim": "Other",
    "desc": "%CasterName will focus attacks on this target.",
    "type": "Harbinger of Annihilation",
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1681589484\">Enemy_W1_CocoliaP2_Ability08_Charge</a>",
    "realName": "The Creation's Prelude",
    "aim": "Other",
    "desc": "The next attack will cause Last Choir of Genesis to all targets.",
    "type": "The Creation's Prelude",
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-1081875098\">Enemy_W1_CocoliaP2_WeakPointProtected</a>",
    "realName": "Weakness Protected",
    "aim": "Buff",
    "desc": "Cocolia, Mother of Deception's Toughness cannot be reduced while there are enemies on the field.",
    "type": "Weakness Protected",
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-696028198\">Enemy_Mecha_BlockDamage</a>",
    "realName": "Barrier",
    "aim": "Buff",
    "desc": "Nullifies all DMG received except for DoT until after being attacked.",
    "type": "Barrier",
    "perma": false
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-770745937\">Monster_W1_SvarogPart_CountDown</a>",
    "realName": "Overload Countdown",
    "aim": "Other",
    "desc": "Auxiliary Robot Arm Unit initiates Overload countdown. After the countdown ends, cast Overload Warning.",
    "type": null,
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"419784878\">Monster_W1_SvarogPart_Overload</a>",
    "realName": "Overload",
    "aim": "Other",
    "desc": "Casts Controlled Blasting in the next action.",
    "type": "Overload",
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"764270214\">Monster_W1_SvarogPart_RL_CountDown</a>",
    "realName": "Overload Countdown",
    "aim": "Other",
    "desc": "Auxiliary Robot Arm Unit initiates Overload countdown. After the countdown ends, cast Overload Warning.",
    "type": null,
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1670817312\">W1_Mecha02_AttackBonus</a>",
    "realName": "Charging",
    "aim": "Buff",
    "desc": "Increases DMG dealt by #1[i]%.",
    "type": "Charging",
    "perma": true,
    "params": [
      "ModifierDamageUpValue"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-735432971\">Monster_W1_Mecha03_RL_Revenge</a>",
    "realName": "Obliteration Order",
    "aim": "Buff",
    "desc": "Increases DMG by #1[i]%. Every time this unit enters the Charging state, DMG is increased further.",
    "type": "Obliteration Order",
    "perma": true,
    "params": [
      "MDF_DamageUpRatio"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"118150896\">Monster_W1_Mecha03_RL_Ability03_DamageUp</a>",
    "realName": "DMG Boost",
    "aim": "Buff",
    "desc": "Increases DMG dealt by #1[i]%. This effect can stack.",
    "type": "DMG Boost",
    "perma": true,
    "params": [
      "MDF_DamageUpRatio_PerLayer"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-785895523\">Monster_W1_Mecha03_RL_Enhance_Dormancy</a>",
    "realName": "Firepower Recovery",
    "aim": "Other",
    "desc": "Currently cannot take action.",
    "type": null,
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-1909388904\">Sign_W1_Mecha02</a>",
    "realName": "Lock On",
    "aim": "Other",
    "desc": "%CasterName will focus attacks on this target.",
    "type": "Lock On",
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-95545360\">W1_Mecha02_ThunderDOT</a>",
    "realName": "Bleed",
    "aim": "Debuff",
    "desc": "For a certain number of turns, receive Physical DMG based on Max HP at the beginning of each turn, stacking up to #1[i] time(s).",
    "type": "Bleed",
    "perma": false,
    "params": [
      "MDF_MaxLayer"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-1945457431\">Monster_W1_Mecha04_PassiveMDF</a>",
    "realName": "Hounding Pursuit",
    "aim": "Other",
    "desc": "If \"Felling Order\" hits one target that does not currently have a Shield, immediately use \"Dismantle\" on a random target.",
    "type": null,
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-1002549759\">Monster_W1_Mecha04_Sign01</a>",
    "realName": "Lock On",
    "aim": "Other",
    "desc": "%CasterName will focus attacks on this target.",
    "type": "Lock On",
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-1052882616\">Monster_W1_Mecha04_Sign02</a>",
    "realName": "Lock On",
    "aim": "Other",
    "desc": "%CasterName will focus attacks on this target.",
    "type": "Lock On",
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-1362109025\">Monster_W1_Mecha04_RL_Part3Passive</a>",
    "realName": "Combat Speed-Up",
    "aim": "Buff",
    "desc": "Increases SPD by #1[i]%. SPD increases further every time Teamwork Order is used.",
    "type": "Combat Speed-Up",
    "perma": true,
    "params": [
      "MDF_SpeedAddedRatio"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-136691859\">Monster_W1_Mecha04_RL_Ability12_SpeedUp</a>",
    "realName": "SPD Boost",
    "aim": "Buff",
    "desc": "Increases SPD by #1[i]%. This effect can stack.",
    "type": "SPD Boost",
    "perma": true,
    "params": [
      "MDF_SpeedAddedRatio_PerLayer"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-849878014\">Monster_W1_Mecha04_RL_Enhance_Dormancy</a>",
    "realName": "Speedy Recovery",
    "aim": "Other",
    "desc": "Currently cannot take action.",
    "type": null,
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-1119505279\">Monster_W1_Svarog_RL_AttackUp</a>",
    "realName": "DMG Boost",
    "aim": "Buff",
    "desc": "Increases DMG dealt by #1[i]%. This effect can stack.",
    "type": "DMG Boost",
    "perma": true,
    "params": [
      "MDF_DamageUpRatio_PerLayer"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"864989347\">Monster_W1_Svarog_RL_DefenceRatioDown</a>",
    "realName": "DEF Reduction",
    "aim": "Debuff",
    "desc": "Reduces DEF by #1[i]%. This effect can stack.",
    "type": "DEF Reduction",
    "perma": false,
    "params": [
      "MDF_DefenceAddedRatio_PerLayer"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-980276025\">Enemy_WRSoldier_01_UnFeverResistance</a>",
    "realName": "Helmet and Armor",
    "aim": "Buff",
    "desc": "Receives #1[i]% less DMG. This effect is removed when Weakness is broken.",
    "type": "Helmet and Armor",
    "perma": false,
    "params": [
      "MDF_AllDamageTypeResistance"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-1848655652\">Monster_W1_Mecha_Fire_Passive</a>",
    "realName": "Out of Control",
    "aim": "Buff",
    "desc": "Increases DMG dealt by #1[i]%. Stack up to 5 times.",
    "type": "DMG Boost",
    "perma": false,
    "params": [
      "ModifierCriticalChanceRatio"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"188036182\">Monster_W1_Mecha_Fire_Burning</a>",
    "realName": "Mania",
    "aim": "Buff",
    "desc": "Increases ATK by #1[i]% and SPD by #2[i] pts.",
    "type": "Mania",
    "perma": false,
    "params": [
      "Modifier_AttackAddedRatio",
      "Modifier_SpeedDelta"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1137901449\">Monster_W1_Mecha03_01_Frozen</a>",
    "realName": "Deep Freeze",
    "aim": "Debuff",
    "desc": "Reduces Ice RES by #1[i]% and SPD by #2[i]%. Can stack up to #3[i] time(s).",
    "type": "Deep Freeze",
    "perma": false,
    "params": [
      "MDF_IceResistanceRatio_PerLayer",
      "MDF_SpeedAddedDelta_PerLayer",
      "MDF_MaxLayer"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"2015116315\">Monster_W1_Mecha03_01_Overheat</a>",
    "realName": "DEF Reduction",
    "aim": "Debuff",
    "desc": "DEF -#1[i]%.",
    "type": "DEF Reduction",
    "perma": false,
    "params": [
      "MDF_DefenceAddedRatio"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-1705391722\">Monster_W1_Mecha03_01_Rage</a>",
    "realName": "Surpass",
    "aim": "Buff",
    "desc": "ATK +#1[i]%.",
    "type": "ATK Greatly Boosted",
    "perma": false,
    "params": [
      "MDF_AttackAddedRatio"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-1421560478\">Monster_W1_Mecha03_01_Sign</a>",
    "realName": "Lock On",
    "aim": "Other",
    "desc": "%CasterName will focus attacks on this target.",
    "type": "Lock On",
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-800128779\">Monster_W1_Mecha03_01_AOECount</a>",
    "realName": "Bitterly Cold",
    "aim": "Other",
    "desc": "Unleashes #1[i] wave(s) of Blazing Freeze in the next action.",
    "type": null,
    "perma": true,
    "params": [
      "ModifierLayers"
    ]
  },
  {
    "name": "Monster_W2_Knight01_Formation",
    "realName": "undefined",
    "aim": "Buff",
    "desc": "undefined",
    "type": "undefined",
    "perma": false,
    "params": [
      "Modifier_DefenceAddedRatio",
      "StackCount"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"221482818\">Standard_Unstable</a>",
    "realName": "Reverberation",
    "aim": "Debuff",
    "desc": "After receiving an attack, enters Strong Reverberation, then dispels Reverberation.",
    "type": "Reverberation",
    "perma": false
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1724913010\">Standard_Shake_IgnoreImmune</a>",
    "realName": "Strong Reverberation",
    "aim": "Debuff",
    "desc": "Action delayed. Cannot take actions for a certain number of turns.",
    "type": "Strong Reverberation",
    "perma": false
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-1239633217\">Monster_W2_Kafka_Charm</a>",
    "realName": "Dominated",
    "aim": "Debuff",
    "desc": "Makes a single target unable to take action. Target will use Basic ATK to attack a random ally of theirs. If an ability is cast on the target to remove a debuff, the Dominated status will be removed first.",
    "type": "Dominated",
    "perma": false
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-2053914629\">Monster_W2_Kafka_RL_DamageUp</a>",
    "realName": "DMG Boost",
    "aim": "Buff",
    "desc": "Increases DMG dealt by #1[f1]%. This effect can stack.",
    "type": "DMG Boost",
    "perma": true,
    "params": [
      "MDF_DamageUpRatio_PerLayer"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-1862927139\">Monster_W2_Kafka_RL_MindControl_True</a>",
    "realName": "Psychological Suggestion",
    "aim": "Debuff",
    "desc": "Triggered at the next Revelation. Can be removed before that action.",
    "type": "Psychological Suggestion",
    "perma": false
  },
  {
    "name": "<a class=\"gModGreen\" id=\"2054484016\">Monster_W2_Kafka_RL_MindControl_False</a>",
    "realName": "Psychological Suggestion",
    "aim": "Debuff",
    "desc": "Triggered at the next Revelation. Can be removed before that action.",
    "type": "Psychological Suggestion",
    "perma": false
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-2031893844\">Monster_W2_Kafka_RL_MindControl_TrueEffect</a>",
    "realName": "Psychological Suggestion Revelation",
    "aim": "Debuff",
    "desc": "Cannot deal DMG to Kafka. Will become Dominated when the next \"Revelation\" occurs. Can be dispelled.",
    "type": "Revelation",
    "perma": false
  },
  {
    "name": "WMonster_W2_Kafka_IF02_Ability09_BEFrozen",
    "realName": "Unemployed",
    "aim": "Debuff",
    "desc": "Cannot take any actions. Takes #1[i]% more DMG from all sources.",
    "type": "Unemployed",
    "perma": true
  },
  {
    "name": "Enemy_W2_Yanqing_Ability02_UnknownWeakPoint_01",
    "realName": "Formation Core",
    "aim": "Other",
    "desc": "The Weakness of the target enemy is one of the following: Wind, Lightning, Imaginary. Use attacks of the corresponding Types to figure out the real Weakness Type. Inflict Weakness Break on the target to destroy the enemy.",
    "type": "Formation Core",
    "perma": true
  },
  {
    "name": "Enemy_W2_Yanqing_Ability02_UnknownWeakPoint_02",
    "realName": "Formation Core",
    "aim": "Other",
    "desc": "The Weakness of the target enemy is one of the following: Wind, Lightning, Imaginary. Use attacks of the corresponding Types to figure out the real Weakness Type. Inflict Weakness Break on the target to destroy the enemy.",
    "type": "Formation Core",
    "perma": true
  },
  {
    "name": "Enemy_W2_Yanqing_Ability02_UnknownWeakPoint_03",
    "realName": "Formation Core",
    "aim": "Other",
    "desc": "The Weakness of the target enemy is one of the following: Wind, Lightning, Imaginary. Use attacks of the corresponding Types to figure out the real Weakness Type. Inflict Weakness Break on the target to destroy the enemy.",
    "type": "Formation Core",
    "perma": true
  },
  {
    "name": "Enemy_W2_Yanqing_Ability02_UnknownWeakPoint_Core",
    "realName": "Sword Formation",
    "aim": "Other",
    "desc": "Yanqing's Toughness cannot be reduced, and his SPD increases by #1[i]. Destroy all of Yanqing's Flying Swords to dispel this effect and cause DMG to Yanqing.",
    "type": "Sword Formation",
    "perma": true,
    "params": [
      "MDF_SpeedDelta"
    ]
  },
  {
    "name": "Enemy_W2_Yanqing_Ability02_UnknownWeakPoint_Core_MainBattle",
    "realName": "Sword Formation",
    "aim": "Other",
    "desc": "Yanqing's Toughness cannot be reduced. Destroy all of Yanqing's Flying Swords to dispel that effect and cause DMG to Yanqing.",
    "type": "Sword Formation",
    "perma": true
  },
  {
    "name": "Enemy_W2_Yanqing_Ability02_UnknownWeakPoint_Core_RL",
    "realName": "Sword Formation",
    "aim": "Other",
    "desc": "Yanqing's Toughness cannot be reduced, and his SPD increases by #1[i]. Destroy all of Yanqing's Flying Swords to dispel this effect and cause DMG to Yanqing.",
    "type": "Sword Formation",
    "perma": true,
    "params": [
      "MDF_SpeedDelta"
    ]
  },
  {
    "name": "Enemy_W2_Yanqing_SwordPowerUp",
    "realName": "Ordeal",
    "aim": "Other",
    "desc": "This summon receives an enhancement and increases Max Toughness. After attacking, there is a high chance of Freezing the target.",
    "type": "Ordeal",
    "perma": true
  },
  {
    "name": "Enemy_W2_Yanqing_Standard_Overdrive",
    "realName": "Chilling Light",
    "aim": "Buff",
    "desc": "DMG dealt increases by #1[i]%. This effect can stack.",
    "type": "Chilling Light",
    "perma": true,
    "params": [
      "MDF_AllDamageTypeAddedRatio"
    ]
  },
  {
    "name": "Enemy_W2_Yanqing_Ability02_MarkingCountDown_1",
    "realName": "Ready for Battle",
    "aim": "Other",
    "desc": "Use Aethereal Dreamflux in the next turn.",
    "type": null,
    "perma": true
  },
  {
    "name": "Enemy_W2_Yanqing_Ability02_MarkingCountDown_2",
    "realName": "Ready for Battle",
    "aim": "Other",
    "desc": "Use Aethereal Dreamflux after 2 turns",
    "type": null,
    "perma": true
  },
  {
    "name": "Enemy_W2_Yanqing_Ability02_Mark",
    "realName": "Lock On",
    "aim": "Other",
    "desc": "Locked on by %CasterName and is the target of Aethereal Dreamflux.",
    "type": "Lock On",
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1192309436\">Enemy_W2_Mecha03_Overdrive_On</a>",
    "realName": "Sanction Mode",
    "aim": "Buff",
    "desc": "The Aurumaton Gatekeeper's Toughness cannot be reduced. Its SPD increases by #1[i] and it activates the abilities Restraint and Enchainment.",
    "type": "Sanction Mode",
    "perma": true,
    "params": [
      "MDF_SpeedAddedValue"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"288842909\">Enemy_W2_Mecha03_Overdrive_Accumulate_Display1</a>",
    "realName": "Sanction Rate",
    "aim": "Other",
    "desc": "The current Sanction Rate has reached 33%.",
    "type": null,
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"238510052\">Enemy_W2_Mecha03_Overdrive_Accumulate_Display2</a>",
    "realName": "Sanction Rate",
    "aim": "Other",
    "desc": "The current Sanction Rate has reached 66%.",
    "type": null,
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"255287671\">Enemy_W2_Mecha03_Overdrive_Accumulate_Display3</a>",
    "realName": "Sanction Rate",
    "aim": "Other",
    "desc": "The current Sanction Rate has reached 100%.",
    "type": null,
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1235993006\">Monster_W2_Mecha03_Sign</a>",
    "realName": "Lock On",
    "aim": "Other",
    "desc": "%CasterName will focus attacks on this target.",
    "type": "Lock On",
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1974297403\">Monster_W2_Mecha03_Overdrive_On_RLElite</a>",
    "realName": "Sanction Mode: Punisher",
    "aim": "Buff",
    "desc": "The Aurumaton Gatekeeper's Toughness cannot be reduced. Its SPD increases by #1[i]%, and it activates the ability Track Down.",
    "type": "Sanction Mode: Punisher",
    "perma": true,
    "params": [
      "MDF_SpeedUpRatio"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-1870683085\">Enemy_W2_Valkyrie02_DynamicAI_ToastAndEffect</a>",
    "realName": "Preparing Heaven's Fall",
    "aim": "Other",
    "desc": "About to use Heaven's Fall.",
    "type": "Preparing Heaven's Fall",
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-1513487927\">Enemy_W2_Valkyrie02_Ability04_Target</a>",
    "realName": "Lock On",
    "aim": "Other",
    "desc": "Locked on by %CasterName as the attack target.",
    "type": "Lock On",
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1533376830\">Monster_W2_Abomi01_Revive</a>",
    "realName": "Rebirth",
    "aim": "Buff",
    "desc": "Upon receiving a killing blow, restores a certain amount of HP.",
    "type": "Rebirth",
    "perma": false
  },
  {
    "name": "<a class=\"gModGreen\" id=\"345912758\">Monster_W2_Abomi01_Accelerate</a>",
    "realName": "SPD Boost",
    "aim": "Buff",
    "desc": "SPD Increased.",
    "type": "SPD Boost",
    "perma": false,
    "params": [
      "MDF_SpeedRatio"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-1875575825\">Monster_W2_Abomi02_Mark</a>",
    "realName": "Spur of Thunderwoe",
    "aim": "Debuff",
    "desc": "Upon receiving a killing blow, the Disciples of Sanctus Medicus: Internal Alchemist deals DMG 1 time to targets that are inflicted with Spur of Thunderwoe by them.",
    "type": "Thunderwoe Strike",
    "perma": false
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1723051927\">Monster_W2_Abomi02_TargetList</a>",
    "realName": "Core Formation",
    "aim": "Buff",
    "desc": "Upon receiving a killing blow, the unit deals DMG 1 time to targets that are afflicted with Spur of Thunderwoe by them.\\nThe current targets who have Spur of Thunderwoe on them are: %DynamicTargetName.",
    "type": "Core Formation",
    "perma": true
  },
  {
    "name": "Enemy_W2_Xuanlu_01_Crazy",
    "realName": "Outrage",
    "aim": "Debuff",
    "desc": "Lost control. Attacks random enemies automatically.",
    "type": "Outrage",
    "perma": false
  },
  {
    "name": "Enemy_W2_Xuanlu_02_Counter",
    "realName": "Retaliation",
    "aim": "Buff",
    "desc": "When attacked by an enemy, deals DMG to that enemy.",
    "type": "Counter",
    "perma": false
  },
  {
    "name": "Enemy_W2_Xuanlu_02_Bonus",
    "realName": "Engender",
    "aim": "Buff",
    "desc": "Increases ATK.",
    "type": "ATK Boost",
    "perma": false,
    "params": [
      "MDF_AttackAddedRatio_PerLayer"
    ]
  },
  {
    "name": "Enemy_W2_Xuanlu_02_Counter_RL",
    "realName": "Retaliation",
    "aim": "Buff",
    "desc": "When attacked by an enemy, deals DMG to that enemy.",
    "type": "Counter",
    "perma": false
  },
  {
    "name": "Enemy_W2_Xuanlu_10_Extra_IncreaseReturnDamage",
    "realName": "Cultivation",
    "aim": "Buff",
    "desc": "Retaliation deals #1[i]% more DMG.",
    "type": "Increases Counter DMG",
    "perma": true,
    "params": [
      "MDF_DamageIncreaseValue"
    ]
  },
  {
    "name": "Enemy_W2_Xuanlu_04_Charge",
    "realName": "Lavish Fruit",
    "aim": "Other",
    "desc": "When there are 2 Lavish Fruits on the field, the Abundant Ebon Deer will immediately use Flamboyant Gore.",
    "type": "Bearing Fruit",
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1604945835\">Enemy_W2_Valkyrie01_01_AbilityP01_ComboAttack</a>",
    "realName": "Maddened",
    "aim": "Buff",
    "desc": "Attack changes to Sawing Evil: Sever.",
    "type": "Maddened",
    "perma": false
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-301445203\">Enemy_W2_Abomi04_HitToHeal</a>",
    "realName": "Draining Hit",
    "aim": "Buff",
    "desc": "When there are other enemy targets with \"Rebirth\" remaining on the field, Disciples of Sanctus Medicus: Shape Shifter will have the following effect — restores its HP when its attack hits.",
    "type": "Draining Hit",
    "perma": false
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-488885736\">Monster_W2_Abomi04_Attack_Sign</a>",
    "realName": "Lock On",
    "aim": "Other",
    "desc": "All enemies will focus attacks on this target.",
    "type": "Lock On",
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"908537899\">Monster_W2_Beast02_Bullet</a>",
    "realName": "Gusto",
    "aim": "Other",
    "desc": "Malefic Ape's current Gusto amount.",
    "type": "Regenerate Gusto",
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-1532177993\">Monster_W2_Beast02_Weak</a>",
    "realName": "Exhaustion",
    "aim": "Other",
    "desc": "Malefic Ape's Gusto has been exhausted.",
    "type": "Exhaustion",
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"162724046\">Enemy_W2_Beast02_BlockDamage</a>",
    "realName": "Barrier",
    "aim": "Buff",
    "desc": "Nullifies all DMG received except DoTs. This status is dispelled after being attacked.",
    "type": "Barrier",
    "perma": false
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-432331168\">Monster_Beast02_Attack_Sign</a>",
    "realName": "Monitor",
    "aim": "Other",
    "desc": "Marked by %CasterName for Monitoring.",
    "type": "Monitor",
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1692594642\">Monster_Standard_Layer_DamageUP</a>",
    "realName": "DMG Boost",
    "aim": "Buff",
    "desc": "Increases DMG dealt by #1[i]% for up to #2[i] stacks.",
    "type": "DMG Boost",
    "perma": false,
    "params": [
      "MDF_DamageAddedRatio",
      "MDF_MaxLayer"
    ]
  },
  {
    "name": "Monster_W2_Beast02_DefenceDown",
    "realName": "undefined",
    "aim": "Debuff",
    "desc": "undefined",
    "type": "undefined",
    "perma": true,
    "params": [
      "MDF_DefenceAddedRatio1",
      "MDF_DefenceAddedRatio2",
      "MDF_DefenceAddedRatio3"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"329970269\">Enemy_W2_Beast02_RLElite_GennkiMark</a>",
    "realName": "Gather Courage",
    "aim": "Other",
    "desc": "#1[i] stacks of Gusto accumulated.",
    "type": "Gather Courage",
    "perma": true,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-61251553\">Monster_W2_Beast02_RLElite_Attack_Sign</a>",
    "realName": "Monitor",
    "aim": "Other",
    "desc": "Marked by %CasterName for Monitoring.",
    "type": "Monitor",
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-773012193\">Monster_XP_Elite02_02_RLElite_ChargeEffect</a>",
    "realName": "Japa",
    "aim": "Buff",
    "desc": "Uses Black Prana's Snare on all targets during the next action.",
    "type": "Japa",
    "perma": true
  },
  {
    "name": "Enemy_W2_Xuanlu_Ability07_NoWeakness",
    "realName": "Hardy Leaf Sheath",
    "aim": "Buff",
    "desc": "DEF increases. Toughness cannot be reduced.",
    "type": "DEF Boost",
    "perma": false,
    "params": [
      "MDF_DefenceAddedRatio"
    ]
  },
  {
    "name": "Enemy_W2_Xuanlu_10_EnergyDrain",
    "realName": "Synwood Renewal",
    "aim": "Buff",
    "desc": "In every turn, restores HP equal to #1[i]% of the unit's Max HP.",
    "type": "Synwood Renewal",
    "perma": false,
    "params": [
      "MMonster_W2_Xuanlu_10_EnergyDrain_TurnHealRatio"
    ]
  },
  {
    "name": "Enemy_W2_Xuanlu_10_RL_DamageUp",
    "realName": "Vigor Overflow",
    "aim": "Buff",
    "desc": "Increases DMG dealt by #1[f1]%. This effect is stackable.",
    "type": "DMG Boost",
    "perma": true,
    "params": [
      "MDF_DamageUpRatio_PerLayer"
    ]
  },
  {
    "name": "Monster_W2_Mecha01_02_ResistanceDown",
    "realName": "undefined",
    "aim": "Debuff",
    "desc": "undefined",
    "type": "undefined",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "MModifier_Monster_W3_TV_Side1",
    "realName": "Surprise Channel",
    "aim": "Other",
    "desc": "Mr. Domescreen can use the \"Surprise Variety Show\" ability. After it has been attacked, switches to the Fright Channel state.",
    "type": null,
    "perma": true
  },
  {
    "name": "MModifier_Monster_W3_TV_Side2",
    "realName": "Fright Channel",
    "aim": "Other",
    "desc": "Mr. Domescreen can use the \"Startling Broadcast\" ability. After it has been attacked, switches to the Surprise Channel state.",
    "type": null,
    "perma": true
  },
  {
    "name": "Monster_W2_Beast01_03_LayerCount",
    "realName": "SoulGlad Revel",
    "aim": "Other",
    "desc": "Enhances ability effects, stacking up to #1[i] times.",
    "type": "SoulGlad Revel",
    "perma": true,
    "params": [
      "MDF_ShowValue"
    ]
  },
  {
    "name": "Monster_W2_Beast01_03_Bleed",
    "realName": "Bleed",
    "aim": "Debuff",
    "desc": "For a certain number of turns, receive Physical DMG based on Max HP at the beginning of each turn, stacking up to #1[i] time(s).",
    "type": "Bleed",
    "perma": false,
    "params": [
      "MDF_MaxLayer"
    ]
  },
  {
    "name": "Monster_Standard_SpeedAddedRatio",
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
    "name": "<a class=\"gModGreen\" id=\"-958879550\">Monster_Standard_SpeedRatioDown</a>",
    "realName": "Slow",
    "aim": "Debuff",
    "desc": "Decreases SPD by #1[i]%.",
    "type": "Slow",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Enemy_W3_Clock_Ability01_Charge",
    "realName": "Set Alarm",
    "aim": "Other",
    "desc": "Uses Wake-Up Alarm for the next action.",
    "type": "Set Alarm",
    "perma": true
  },
  {
    "name": "Monster_W3_Junk_AttackAddRatio1",
    "realName": "The Can's Battle Pose",
    "aim": "Buff",
    "desc": "Increases ATK by #1[i]%.",
    "type": "ATK Boost",
    "perma": true,
    "params": [
      "MDF_AttackAddRatioCurrent"
    ]
  },
  {
    "name": "MModifier_Monster_W3_Dinosaur_SpeedDownRatio",
    "realName": "Slow",
    "aim": "Debuff",
    "desc": "Decreases SPD by #1[i]%.",
    "type": "Slow",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "MModifier_Monster_W3_Dinosaur_AttackUpRatio",
    "realName": "Stove Heating",
    "aim": "Other",
    "desc": "#1[i] stack(s) of Stove Heating has been applied.",
    "type": "Stove Heating",
    "perma": true,
    "params": [
      "Modifier_AttackUp_AttackUpLayer",
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "MModifier_Monster_W3_Dinosaur_OverHit",
    "realName": "Stove Overheating",
    "aim": "Other",
    "desc": "#1[i] stack(s) of Stove Overheating has been applied.",
    "type": "Stove Overheating",
    "perma": true,
    "params": [
      "MDF_OverHitLayer"
    ]
  },
  {
    "name": "MModifier_Monster_W3_Dinosaur_Calm",
    "realName": "Simmer",
    "aim": "Other",
    "desc": "When this unit is attacked or takes DoT, gain 1 stack of Stove Heating.",
    "type": null,
    "perma": true
  },
  {
    "name": "MModifier_Monster_W3_Dinosaur_Fury",
    "realName": "Boil",
    "aim": "Other",
    "desc": "When this unit is attacked or takes DoT, gain 1 stack of Stove Heating.",
    "type": null,
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-1754480095\">Monster_Standard_WeakControl</a>",
    "realName": "Toughness Protection",
    "aim": "Other",
    "desc": "Toughness cannot be reduced.",
    "type": "Toughness Protection",
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"73301376\">Standard_SuperArmor</a>",
    "realName": "Safeguard",
    "aim": "Other",
    "desc": "DMG taken decreases. This effect is removed when Weakness is Broken. This unit's action will be delayed further when it is Weakness Broken and also takes increased DMG.",
    "type": "Safeguard",
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-1917647041\">Standard_SuperArmorBreak</a>",
    "realName": "Safeguard Broken",
    "aim": "Other",
    "desc": "DMG taken increases. This effect is removed and DMG taken decreases when this unit recovers from being Weakness Broken.",
    "type": "Safeguard Broken",
    "perma": true
  },
  {
    "name": "Enemy_W3_Dinosaur_01_Standard_Growth",
    "realName": "Obscure Blaze",
    "aim": "Buff",
    "desc": "Each stack causes Bonepiercing Odium to deal DMG 1 additional time, up to 5 times. This state will be dispelled after being Weakness Broken.",
    "type": "Obscure Blaze",
    "perma": true
  },
  {
    "name": "M_Death_CTRL",
    "realName": "Morbid Dream",
    "aim": "Other",
    "desc": "Cannot be selected, cannot take action.",
    "type": "Morbid Dream",
    "perma": true
  },
  {
    "name": "Modifier_W3_Death_ChargeShoot",
    "realName": "Nightfall",
    "aim": "Other",
    "desc": "Locks on to the next 2 characters who either use their Basic ATK, Skill, or Ultimate.",
    "type": "Nightfall",
    "perma": true
  },
  {
    "name": "Modifier_W3_Death_Attack_Sign",
    "realName": "Lock On",
    "aim": "Other",
    "desc": "Locked On by \"Something Unto Death\" as an attack target.",
    "type": "Lock On",
    "perma": true
  },
  {
    "name": "Modifier_W3_Death_HuntingMode1",
    "realName": "Sunset",
    "aim": "Other",
    "desc": "Gained 1 stack of Sunset.",
    "type": "The Sun Sinks, In Dying Light",
    "perma": true
  },
  {
    "name": "Modifier_W3_Death_HuntingMode0",
    "realName": "Sunset",
    "aim": "Other",
    "desc": "\"Death\" has gained 0 stacks of \"Sunset.\"",
    "type": "Sunset, Afternoon",
    "perma": true
  },
  {
    "name": "Monster_W3_Death_StanceBreakAddedRatio",
    "realName": "undefined",
    "aim": "Buff",
    "desc": "undefined",
    "type": "undefined",
    "perma": true,
    "params": [
      "MDF_ShowValue"
    ]
  },
  {
    "name": "Monster_W3_Death_AllDamageUp",
    "realName": "Biting Obituary",
    "aim": "Buff",
    "desc": "Increases DMG dealt by #1[i]%. This effect is removed when this unit becomes Weakness Broken.",
    "type": "Biting Obituary",
    "perma": false,
    "params": [
      "MDF_ShowValue1"
    ]
  },
  {
    "name": "Modifier_W3_Death_HuntingMode2",
    "realName": "Sunset",
    "aim": "Other",
    "desc": "Gained 2 stacks of Sunset.",
    "type": "The Sun Sinks, Dusk Arrives",
    "perma": true
  },
  {
    "name": "Modifier_W3_Death_HuntingMode3",
    "realName": "Sunset",
    "aim": "Other",
    "desc": "Gained 3 stacks of Sunset. It is about to deal a killing blow.",
    "type": "The Sun Sinks, Night Falls",
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-431168288\">Enemy_W2_Argenti_Power</a>",
    "realName": "Soulfreed",
    "aim": "Buff",
    "desc": "The knight's prayers bid the liberation of souls. Abilities have been enhanced.",
    "type": "Soulfreed",
    "perma": false,
    "params": [
      "MDF_ShowValue1",
      "MDF_ShowValue2",
      "MDF_ShowValue3",
      "MDF_ShowValue4"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-957742074\">Enemy_Argenti_DamageUP</a>",
    "realName": "DMG Boost",
    "aim": "Buff",
    "desc": "DMG dealt increases by #1[i]%.",
    "type": "DMG Boost",
    "perma": false,
    "params": [
      "MDF_ShowValue1",
      "MDF_ShowValue2"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-488812813\">Enemy_W2_Argenti_Power_RL</a>",
    "realName": "Soul Ascension",
    "aim": "Buff",
    "desc": "The knight's prayers completely ascended the soul. This is regarded as equal to \"Soulfreed.\"",
    "type": "Soul Ascension",
    "perma": true,
    "params": [
      "MDF_ShowValue1",
      "MDF_ShowValue2",
      "MDF_ShowValue3",
      "MDF_ShowValue4"
    ]
  },
  {
    "name": "Monster_W3_Sam_Enhance",
    "realName": "Secondary Combustion",
    "aim": "Other",
    "desc": "All attacks consume HP. Increases SPD by #1[i]% and gains an additional action. #2[i] point(s) of Molten Energy remain before the Secondary Combustion state expires.",
    "type": "Secondary Combustion",
    "perma": true,
    "params": [
      "MDF_SpeedUpRatio",
      "MDF_CurrentPoint"
    ]
  },
  {
    "name": "Monster_W3_Sam_WeakPointProtected",
    "realName": "Weakness Protected",
    "aim": "Other",
    "desc": "Sam's Toughness cannot be reduced before entering the Secondary Combustion state.",
    "type": null,
    "perma": true
  },
  {
    "name": "Monster_W3_Sam_BurningBP",
    "realName": "Molten Core",
    "aim": "Other",
    "desc": "When an ally consumes Combusted Skill Points, loses HP and additionally deals a set amount of Fire DMG equal to #1[i]% of the original DMG. When they receive healing from sources other than oneself, the amount of HP restored is massively reduced.",
    "type": "Molten Core",
    "perma": true,
    "params": [
      "MDF_DamageUpRatio"
    ]
  },
  {
    "name": "Monster_W3_Sam_TakenDamage",
    "realName": "Vulnerability",
    "aim": "Debuff",
    "desc": "Takes #1[i]% more DMG. This effect expires when Sam recovers from Weakness Break state.",
    "type": "Vulnerability",
    "perma": false,
    "params": [
      "MDF_DamageTakenUpRatio_PerLayer"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1727496698\">Monster_XP_Minion03_Attack</a>",
    "realName": "ATK Boost",
    "aim": "Buff",
    "desc": "ATK +#1[i]%.",
    "type": "ATK Boost",
    "perma": false,
    "params": [
      "MDF_AttackAddedRatio"
    ]
  },
  {
    "name": "XP_Minion02_Armor",
    "realName": "Repulsive Force",
    "aim": "Buff",
    "desc": "Reduces damage taken from non-Weakness Type attacks by #1[i]%. This effect is removed when Weakness is broken.",
    "type": "DMG Reduction",
    "perma": false,
    "params": [
      "MDF_Resistance"
    ]
  },
  {
    "name": "XP_Minion02_Attack",
    "realName": "Defensive Position",
    "aim": "Buff",
    "desc": "Uses Carolburst during the next action and increases DMG dealt to targets by #1[i]%.",
    "type": "DMG Boost",
    "perma": false,
    "params": [
      "MDF_DamageAddedRatio"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"2118515591\">Enemy_XP_Minion04_02_Introduce</a>",
    "realName": "T—Taking Revenge",
    "aim": "Other",
    "desc": "When a friendly unit is attacked, Trotter of Destruction will attack all targets. The attack count is equal to the number of the targets attacked.",
    "type": "T—Taking Revenge",
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"606850892\">Enemy_XP_Minion04_03_Introduce</a>",
    "realName": "C—Cure You",
    "aim": "Other",
    "desc": "When a friendly unit is attacked by a target, Trotter of Abundance consumes its own HP to heal the attacked friendly unit.",
    "type": "C—Cure You",
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-1149684871\">Enemy_XP_Minion04_02_Cunhu_Bonus</a>",
    "realName": "P—Protect You",
    "aim": "Buff",
    "desc": "Each stack of P—Protect You can absorb DMG from 1 incoming hit. P—Protect You stacks are shared across the team.",
    "type": "P—Protect You",
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-557071994\">XP_Ice_Elite_Powerful_Modifier</a>",
    "realName": "Freezing Point",
    "aim": "Other",
    "desc": "Ice Out of Space's attack mode is enhanced.",
    "type": "Freezing Point",
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1077360781\">XP_Elite_Fire_Ability07_AttackUp_Modifier</a>",
    "realName": "Molten",
    "aim": "Buff",
    "desc": "Increases ATK by #1[i]%. This effect can stack.",
    "type": "ATK Boost",
    "perma": false,
    "params": [
      "Modifier_AttackAddedRatio"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1090456915\">XP_Fire_Elite_Burning_Modifier_2</a>",
    "realName": "Spontaneous Combustion",
    "aim": "Other",
    "desc": "Blaze Out of Space's attack mode is enhanced.",
    "type": "Spontaneous Combustion",
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"263350627\">Enemy_XP_Elite01_Burn</a>",
    "realName": "Enkindle",
    "aim": "Debuff",
    "desc": "Takes Fire DMG at the beginning of each turn for a certain number of turns.",
    "type": "Enkindle",
    "perma": false
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-634944090\">Monster_XP_Elite02_Edict01</a>",
    "realName": "Ban",
    "aim": "Debuff",
    "desc": "Whoever attacks %CasterName will be attacked 1 time.",
    "type": "ATK Punishment",
    "perma": false
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-651721709\">Monster_XP_Elite02_Edict02</a>",
    "realName": "Ban",
    "aim": "Debuff",
    "desc": "Whoever uses Basic ATK will be attacked 1 time.",
    "type": "Basic ATK Punishment",
    "perma": false
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-668499328\">Monster_XP_Elite02_Edict03</a>",
    "realName": "Ban",
    "aim": "Debuff",
    "desc": "Whoever uses Skills will be attacked 1 time.",
    "type": "Skill Punishment",
    "perma": false
  },
  {
    "name": "<a class=\"gModGreen\" id=\"762896637\">Monster_XP_Elite02_Edict_Success</a>",
    "realName": "undefined",
    "aim": "Buff",
    "desc": "undefined",
    "type": "undefined",
    "perma": false,
    "params": [
      "MDF_AttackAddedRatio"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"906589272\">Monster_XP_Elite02_Edict_Failure</a>",
    "realName": "undefined",
    "aim": "Debuff",
    "desc": "undefined",
    "type": "undefined",
    "perma": false,
    "params": [
      "MDF_DefenceAddedRatio_PerLayer",
      "MDF_AggroAddedRatio_PerLayer",
      "MDF_MaxLayer"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"783092667\">Monster_XP_Elite02_DebuffEnhanceEffect</a>",
    "realName": "undefined",
    "aim": "Debuff",
    "desc": "undefined",
    "type": "undefined",
    "perma": true,
    "params": [
      "MDF_DefenceAddedRatio_PerLayer",
      "MDF_MaxLayer"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1954502860\">Monster_XP_Elite02_EdictInsert</a>",
    "realName": "Retribution Warning",
    "aim": "Other",
    "desc": "Character(s) will be punished accordingly at the end of the turn.",
    "type": null,
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-749414927\">Monster_XP_Elite02_01_Battle</a>",
    "realName": "undefined",
    "aim": "Buff",
    "desc": "undefined",
    "type": "undefined",
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-799757302\">Monster_XP_Elite02_01_Accelerate</a>",
    "realName": "undefined",
    "aim": "Buff",
    "desc": "undefined",
    "type": "undefined",
    "perma": false,
    "params": [
      "MDF_SpeedAddedRatio_PerLayer",
      "MDF_MaxLayer"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"267392722\">Monster_XP_Elite02_01_Exhausted</a>",
    "realName": "undefined",
    "aim": "Debuff",
    "desc": "undefined",
    "type": "undefined",
    "perma": true,
    "params": [
      "MDF_StanceBreakTakenAddedRatio"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-440963203\">Monster_XP_Elite02_01_Fragile</a>",
    "realName": "undefined",
    "aim": "Debuff",
    "desc": "undefined",
    "type": "undefined",
    "perma": true,
    "params": [
      "MDF_DefenceAddedRatio_PerLayer"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1432699776\">Monster_XP_Elite02_01_EnergyLayer</a>",
    "realName": "Gauge Recollection",
    "aim": "Other",
    "desc": "Current stacks of Gauge Recollection: #1[i]. Loses 1 stack of Gauge Recollection after being hit.",
    "type": null,
    "perma": true,
    "params": [
      "ModifierLayers"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-14434436\">Monster_XP_Elite02_02_DirtyHP</a>",
    "realName": "Prana-Siphoned",
    "aim": "Debuff",
    "desc": "Decreases Maximum Restorable HP by #1[i]%.",
    "type": "Prana-Siphoned",
    "perma": false,
    "params": [
      "MDF_DirtyHPRatio_PerLayer"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"545314015\">Monster_XP_Elite02_02_DirtyHPSpecial</a>",
    "realName": "undefined",
    "aim": "Debuff",
    "desc": "undefined",
    "type": "undefined",
    "perma": false
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-1633463751\">Monster_XP_Elite02_02_ChargeEffect</a>",
    "realName": "Japa",
    "aim": "Buff",
    "desc": "Uses Black Prana's Snare on all targets during the next action.",
    "type": "Japa",
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-1771820857\">Monster_AML_Minion02_SpeedUp</a>",
    "realName": "SPD Boost",
    "aim": "Buff",
    "desc": "Increases SPD by #1[i]%. Can stack up to #2[i] time(s).",
    "type": "SPD Boost",
    "perma": false,
    "params": [
      "MDF_SpeedAddedRatio_PerLayer",
      "MDF_MaxLayer"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1906134144\">Enemy_AML_Minion03_Target</a>",
    "realName": "Lock On",
    "aim": "Other",
    "desc": "%CasterName will focus attacks on this target.",
    "type": "Lock On",
    "perma": true,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-1102385587\">Enemy_AML_Minion04_Mark</a>",
    "realName": "Detonated",
    "aim": "Debuff",
    "desc": "Has been attached a detonator by Voidranger: Eliminator. Takes Additional DMG after being attacked.",
    "type": "Detonated",
    "perma": false
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1434034112\">Enemy_AML_Minion04_Overheat</a>",
    "realName": "Overloaded",
    "aim": "Debuff",
    "desc": "Temporarily unable to attack due to Energy overload.",
    "type": "Overloaded",
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1071596347\">Enemy_AML_Elite01_Aim</a>",
    "realName": "Lock On",
    "aim": "Other",
    "desc": "%CasterName will focus attacks on this target.",
    "type": "Lock On",
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-940158065\">Enemy_AML_Elite01_01_DOTAim</a>",
    "realName": "Lock On",
    "aim": "Other",
    "desc": "%CasterName will focus attacks on this target.",
    "type": "Lock On",
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1859460834\">Enemy_AML_Elite01_01_AttackAdd</a>",
    "realName": "ATK Boost",
    "aim": "Buff",
    "desc": "Increases ATK by #1[i]%, stacking up to #2[i] time(s).",
    "type": "ATK Boost",
    "perma": false,
    "params": [
      "ModifierAttackAddedRatio",
      "ModifierMaxLayer"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1691894969\">Enemy_WMonster_W0_Boss_Unselectable</a>",
    "realName": "Vestige Valor",
    "aim": "Buff",
    "desc": "Cannot be targeted until Disaster's Right Hand, Dawn's Left Hand, and Antimatter Engine have all been destroyed.",
    "type": null,
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"360534641\">Enemy_W0_Boss_Part2_AttackUp</a>",
    "realName": "Amplification",
    "aim": "Buff",
    "desc": "ATK +#1[i]%. Abilities are enhanced.",
    "type": "Amplification",
    "perma": false,
    "params": [
      "MDF_AttackAddedRatio"
    ]
  },
  {
    "name": "Enemy_WMonster_W0_Boss_Part2_Ability07",
    "realName": "Ascend",
    "aim": "Buff",
    "desc": "Toughness fully regenerates and Weakness Type changes.",
    "type": "Ascend",
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-1383210331\">Enemy_W0_Boss_Part2_OnPhase3SpeedUp</a>",
    "realName": "Burst",
    "aim": "Buff",
    "desc": "Speed increased.",
    "type": "SPD Boost",
    "perma": true,
    "params": [
      "MDF_SpeedAddedRatio"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-1573763827\">Monster_W2_Huanlong_BlackBlood</a>",
    "realName": "Prana-Siphoned",
    "aim": "Debuff",
    "desc": "Decreases Maximum Restorable HP by #1[i]%.",
    "type": "Prana-Siphoned",
    "perma": false,
    "params": [
      "MDF_DirtyHPRatio_PerLayer"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"911555281\">Monster_W2_Huanlong_Sign</a>",
    "realName": "Lock On",
    "aim": "Other",
    "desc": "%CasterName will focus attacks on this target.",
    "type": "Lock On",
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-1471440713\">Monster_W2_HuanlongPart_Heal</a>",
    "realName": "Vigor",
    "aim": "Buff",
    "desc": "Every action taken restores #1[i]% HP.",
    "type": "Vigor",
    "perma": false,
    "params": [
      "MDF_HealRatio"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1845976277\">Monster_W2_HuanlongPart_01_Activity</a>",
    "realName": "Bloom",
    "aim": "Buff",
    "desc": "Will use Havoc during the next action. This status can be dispelled by abilities.",
    "type": "Bloom",
    "perma": false
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-616319653\">Monster_W2_HuanlongPart_01_Success</a>",
    "realName": "Vulnerability",
    "aim": "Debuff",
    "desc": "Increases DMG received by #1[i]%. This effect is stackable.",
    "type": "Vulnerability",
    "perma": false,
    "params": [
      "MDF_DamageTakenUpRatio_PerLayer"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-1043458445\">Monster_W2_HuanlongPart_01_Dormancy</a>",
    "realName": "Repose",
    "aim": "Other",
    "desc": "In Repose.",
    "type": null,
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-1866067565\">Monster_W2_Huanlong_Sign02</a>",
    "realName": "Lock On",
    "aim": "Other",
    "desc": "%CasterName will focus attacks on this target.",
    "type": "Lock On",
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"569926357\">Monster_W2_HuanlongPart_01_WeakControl</a>",
    "realName": "Weakness Protected",
    "aim": "Other",
    "desc": "When Destruction Lotus is not in Bloom, its Toughness cannot be reduced.",
    "type": null,
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"603194622\">Monster_SW_Boss_DOT_Poison</a>",
    "realName": "Wind Shear",
    "aim": "Debuff",
    "desc": "Takes Wind DMG at the start of each turn for a certain number of turns.",
    "type": "Wind Shear",
    "perma": false
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1620116974\">Monster_SW_Boss_DamageUp</a>",
    "realName": "DMG Boost",
    "aim": "Buff",
    "desc": "Increases DMG dealt by #1[i]%. This effect is stackable.",
    "type": "DMG Boost",
    "perma": true,
    "params": [
      "MDF_DamageUpRatio_PerLayer"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-658511969\">Monster_SW_Boss_DamageTakenUp</a>",
    "realName": "Vulnerability",
    "aim": "Debuff",
    "desc": "Increases DMG received by #1[i]%. This effect is stackable.",
    "type": "Vulnerability",
    "perma": false,
    "params": [
      "MDF_DamageTakenUpRatio_PerLayer"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1780753426\">Monster_SW_Minion01_Split</a>",
    "realName": "Mitosis: Warning",
    "aim": "Other",
    "desc": "Propagate after #1[i] turn(s). Cannot propagate during the turn in which this unit recovers from Weakness Break.",
    "type": "Mitosis: Warning",
    "perma": true,
    "params": [
      "Modifier_TurnCount"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-157441217\">Monster_SW_Minion01_SplitEffect</a>",
    "realName": "Propagation",
    "aim": "Other",
    "desc": "Propagate in the next turn.",
    "type": "Propagation",
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-257262548\">Monster_SW_Boss_01_DamageTakenUp</a>",
    "realName": "Vulnerability",
    "aim": "Debuff",
    "desc": "Increases DMG received by #1[i]%. This effect is stackable.",
    "type": "Vulnerability",
    "perma": true,
    "params": [
      "MDF_DamageTakenUpRatio_PerLayer"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-850302516\">Monster_SW_Boss_01_DamageReduce</a>",
    "realName": "Multiply",
    "aim": "Buff",
    "desc": "Reduces DMG taken by #1[i]%. Summons a regular Swarm every time this unit is attacked. When this unit's Weakness is Broken, deals Toughness Reduction equal to its own max Toughness to all friendly units and increases the DMG taken by all other friendly units besides the target themselves.",
    "type": "Multiply",
    "perma": true,
    "params": [
      "MDF_DamageReduceRatio"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-995385853\">Monster_Company_Coin</a>",
    "realName": "Performance Points",
    "aim": "Buff",
    "desc": "Interastral Peace Corporation's employee Performance Points. Each stack increases DMG dealt by #1[i]%, stacking up to #2[i] time(s). All Performance Points are consumed when this unit uses an attack. Performance Points can be seized by the attacker when this unit's Weakness is Broken or this unit receives a killing blow.",
    "type": "Performance Points",
    "perma": false,
    "params": [
      "MDF_DamageUpRatio",
      "MaxLayer"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-1555516473\">Monster_Company_Coin_Elite</a>",
    "realName": "Performance Points",
    "aim": "Buff",
    "desc": "Interastral Peace Corporation's employee Performance Points. Each stack increases DMG dealt by #1[i]%, stacking up to #2[i] time(s). All Performance Points are consumed when this unit uses an attack. Performance Points can be seized by the attacker when this unit's Weakness is Broken or this unit receives a killing blow.",
    "type": "Performance Points",
    "perma": false,
    "params": [
      "MDF_DamageUpRatio_PerLayer",
      "MaxLayer"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"141077401\">Monster_Company_Coin_Avater</a>",
    "realName": "Performance Points",
    "aim": "Buff",
    "desc": "Interastral Peace Corporation's employee Performance Points. Each stack increases DMG dealt by #1[i]%, stacking up to #2[i] time(s). All Performance Points are consumed when this unit uses Basic ATK, Skill, or Ultimate. Performance Points can be seized by the attacker when this unit receives a killing blow from an Interastral Peace Corporation Employee.",
    "type": "Performance Points",
    "perma": false,
    "params": [
      "MDF_DamageUpRatio_PerLayer",
      "MaxLayer"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-1515004059\">Monster_W1_Mecha03_02_ChargeEffect</a>",
    "realName": "In Training",
    "aim": "Other",
    "desc": "Uses Work Culture Shock in the next action.",
    "type": null,
    "perma": true
  },
  {
    "name": "Monster_W3_Aventurine_Gambling",
    "realName": "Gamble",
    "aim": "Other",
    "desc": "Attack \"All or Nothing\" to obtain a number. The currently obtained number is #1[i].",
    "type": "Gamble",
    "perma": true,
    "params": [
      "MDF_GamblingResult"
    ]
  },
  {
    "name": "Monster_W3_Aventurine_Ability04_NoGambling",
    "realName": "Look, Don't Speak",
    "aim": "Other",
    "desc": "Characters who have not taken part in the Gamble will be inflicted with Strong Reverberation until the end of the Gamble. This effect cannot be immunized against or resisted.",
    "type": null,
    "perma": true
  },
  {
    "name": "Monster_W3_Aventurine_DamageUp",
    "realName": "Favored by Fortune",
    "aim": "Buff",
    "desc": "Increases DMG dealt by #1[i]%.",
    "type": "DMG Boost",
    "perma": false,
    "params": [
      "MDF_DamageUpRatio_PerLayer"
    ]
  },
  {
    "name": "Monster_W3_Aventurine_DamageTakenUp",
    "realName": "Down on Your Luck",
    "aim": "Debuff",
    "desc": "Increases DMG received by #1[i]%.",
    "type": "Vulnerability",
    "perma": false,
    "params": [
      "MDF_DamageTakenUpRatio_PerLayer"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"126188110\">Monster_W3_AventurinePart_SpeedZero</a>",
    "realName": "Fickle Fortune",
    "aim": "Other",
    "desc": "Immune to DMG. When this unit is attacked by a target that has entered the Gamble, apply 1 random number (between 1 and 6) to the target.",
    "type": null,
    "perma": true
  },
  {
    "name": "Monster_W3_Figure_02_IsAiming",
    "realName": "Shackle-Bearing Messenger",
    "aim": "Other",
    "desc": "About to use Desmios Evangelion. The current DMG level is #1[i].",
    "type": "Target Locked On",
    "perma": true,
    "params": [
      "MDF_DangerLevel"
    ]
  },
  {
    "name": "Monster_W3_Figure_02_AimTarget",
    "realName": "Target Locked On",
    "aim": "Other",
    "desc": "%CasterName will focus attacks on this target.",
    "type": "Target Locked On",
    "perma": true
  },
  {
    "name": "Enemy_W3_Figure_01_Poison",
    "realName": "Carousal of Wantonness",
    "aim": "Debuff",
    "desc": "Takes Wind DMG at the start of each turn for a certain number of turns. This effect can be stacked.",
    "type": "Carousal of Wantonness",
    "perma": false
  },
  {
    "name": "Enemy_W3_Figure_01_Electric",
    "realName": "Carousal of Revelry",
    "aim": "Debuff",
    "desc": "Takes Lightning DMG at the start of each turn for a certain number of turns. This effect can be stacked.",
    "type": "Carousal of Revelry",
    "perma": false
  },
  {
    "name": "Monster_W3_Figure_01_DotMarkListener",
    "realName": "My Cup Runneth Over",
    "aim": "Other",
    "desc": "About to use \"Wash Away All Sins For You\"",
    "type": "Target Locked On",
    "perma": true
  },
  {
    "name": "Monster_W3_Figure_01_DotMark",
    "realName": "Target Locked On",
    "aim": "Other",
    "desc": "%CasterName will focus attacks on this target.",
    "type": "Target Locked On",
    "perma": true
  },
  {
    "name": "Enemy_W3_DollElite_Commnon_Basic",
    "realName": "\"Puppets of the Order\"",
    "aim": "Other",
    "desc": "Puppets controlled by Order. Can become Impresario.",
    "type": "\"Puppets of the Order\"",
    "perma": true
  },
  {
    "name": "Enemy_W3_DollElite_Commnon_TheChosenOne",
    "realName": "Impresario",
    "aim": "Buff",
    "desc": "An extra action can be taken every turn with a slight increase in SPD.",
    "type": "Impresario",
    "perma": true
  },
  {
    "name": "Enemy_W3_DollElite_Standard_DamageTakenUp",
    "realName": "Vulnerability",
    "aim": "Debuff",
    "desc": "Increases DMG taken by #1[i]%.",
    "type": "Vulnerability",
    "perma": true,
    "params": [
      "MDF_ExploreDamageUpRatio"
    ]
  },
  {
    "name": "MModifier_Monster_W3_Dinosaur_RLElite_SpeedUp",
    "realName": "SPD Boost",
    "aim": "Buff",
    "desc": "Increase SPD by#1[i]%.",
    "type": "SPD Boost",
    "perma": true,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Enemy_W3_Ghost_Ability01_Parasitize_Target",
    "realName": "Deception's Crown",
    "aim": "Other",
    "desc": "Restores HP after being attacked but additionally gains Physical and Fire-Type Weaknesses and takes increased Break DMG. This state will be dispelled after being Weakness Broken.",
    "type": "Deception's Crown",
    "perma": true
  },
  {
    "name": "Monster_W3_Death_RLBoss_DamageUp",
    "realName": "Elegy",
    "aim": "Buff",
    "desc": "Deals #1[i]% more DMG and increases Sombrous Sepulcher's HP by #2[i] bar(s). This effect is stackable. The initial HP for Sombrous Sepulcher is currently #3[i] bars.",
    "type": "DMG Boost",
    "perma": true,
    "params": [
      "MDF_DamageUpRatio_PerLayer",
      "MDF_DeathPartAddHPCount",
      "MDF_DeathPartMaxHPCount"
    ]
  },
  {
    "name": "Monster_W3_DeathPart_RLBoss_WeakPointProtected",
    "realName": "Weakness Protected",
    "aim": "Other",
    "desc": "Toughness cannot be reduced before the Nightfall state ends.",
    "type": null,
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-315004140\">Standard_Shake</a>",
    "realName": "Strong Reverberation",
    "aim": "Debuff",
    "desc": "Action delayed. Cannot take actions for a certain number of turns.",
    "type": "Strong Reverberation",
    "perma": false
  },
  {
    "name": "Enemy_W3_Figure_RLElite_AttackUP",
    "realName": "ATK Boost",
    "aim": "Buff",
    "desc": "For every target with Alien Dream, increase this unit's ATK by #1[i]%.",
    "type": "ATK Boost",
    "perma": true,
    "params": [
      "MDF_AttackUPRatio"
    ]
  },
  {
    "name": "Monster_W3_Figure_02_RLElite_IsAiming",
    "realName": "Shackle-Bearing Messenger",
    "aim": "Other",
    "desc": "About to use Desmios Evangelion. The current DMG level is #1[i].",
    "type": "Target Locked On",
    "perma": true,
    "params": [
      "MDF_DangerLevel"
    ]
  },
  {
    "name": "Monster_W3_Figure_02_RLElite_AimTarget",
    "realName": "Target Locked On",
    "aim": "Other",
    "desc": "Locked on by %CasterName as their attack target.",
    "type": "Target Locked On",
    "perma": true
  },
  {
    "name": "Monster_W3_Aventurine_DamageUp_RL",
    "realName": "Fenge's Gift",
    "aim": "Buff",
    "desc": "Each stack increases DMG dealt by #1[i]% for a total of #2[i]%.",
    "type": "DMG Boost",
    "perma": false,
    "params": [
      "MDF_DamageUpRatio_PerLayer",
      "MDF_DamageUpRatio_Total"
    ]
  },
  {
    "name": "Monster_W3_Aventurine_DamageTakenUp_RL",
    "realName": "Fenge's Curse",
    "aim": "Debuff",
    "desc": "Each stack increases DMG taken by #1[i]% for a total of #2[i]%.",
    "type": "Vulnerability",
    "perma": false,
    "params": [
      "MDF_DamageTakenUpRatio_PerLayer",
      "MDF_DamageTakenUpRatio_Total"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-1321309283\">Monster_W3_AventurinePart_SpeedZero_RL</a>",
    "realName": "Forever Concealed",
    "aim": "Other",
    "desc": "When this unit is attacked by a target that has entered the Gamble, the Gamble's odds are doubled.",
    "type": null,
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-96862504\">Monster_W3_AventurinePart_Odds_EnergyBar_RL</a>",
    "realName": "Odds",
    "aim": "Other",
    "desc": "Current Odds — 1:#1[i]. Highest Odds — 1:#2[i].",
    "type": "Double Odds",
    "perma": true,
    "params": [
      "MDF_Layer",
      "MDF_MaxLayer"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"288143778\">Monster_W3_AventurinePart_DeathRattle_RL</a>",
    "realName": "Influx of Fortuity",
    "aim": "Other",
    "desc": "When this unit is attacked by a target that has entered the Gamble, this unit always generates a roll of 6, and uses Punishment of Defeat when the Gamble ends.",
    "type": "Influx of Fortuity",
    "perma": true
  },
  {
    "name": "Monster_W3_Figure_01_RLElite_DotMarkListener",
    "realName": "My Cup Runneth Over",
    "aim": "Other",
    "desc": "About to use \"Wash Away All Sins For You.\"",
    "type": "Target Locked On",
    "perma": true
  },
  {
    "name": "Monster_W3_Figure_01_RLElite_DotMark",
    "realName": "Target Locked On",
    "aim": "Other",
    "desc": "Locked on by %CasterName as their attack target.",
    "type": "Target Locked On",
    "perma": true
  },
  {
    "name": "Monster_W3_Figure_02_RLElite_ChargeLayer_DamageUP",
    "realName": "ATK Boost",
    "aim": "Buff",
    "desc": "Each stack increases ATK by #1[i]%.",
    "type": "ATK Boost",
    "perma": true,
    "params": [
      "MDF_AttackUPRatio"
    ]
  },
  {
    "name": "Standard_FearPre",
    "realName": "Terror Grip",
    "aim": "Debuff",
    "desc": "Enters the \"Terrified\" state at the start of the second turn. Attacking the %CasterName 1 time before then can dispel \"Terror Grip.\"",
    "type": "Terror Grip",
    "perma": true,
    "params": [
      "MDF_LoseSP"
    ]
  },
  {
    "name": "Standard_Fear",
    "realName": "Terrified",
    "aim": "Debuff",
    "desc": "Unable to move until the start of this unit's next turn.",
    "type": "Becomes Terrified",
    "perma": false
  },
  {
    "name": "Enemy_W2_Cocolia_IF_WeaknessCount_",
    "realName": "Tenacious Resolve",
    "aim": "Buff",
    "desc": "DMG taken decreases by #1[i]%. However, for every Weakness Type it has, the unit takes #2[i]% DMG.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_TokenDamageReduceRatio",
      "MDF_TokenDamageAddRatioPerlayer"
    ]
  },
  {
    "name": "Monster_W3_FigureBoss_Standard_Basic",
    "realName": "\"Puppets of the Order\"",
    "aim": "Other",
    "desc": "Puppets controlled by Order. Can become Impresario.",
    "type": "\"Puppets of the Order\"",
    "perma": true
  },
  {
    "name": "Monster_W3_FigureBoss_Standard_TheChosenOne",
    "realName": "Impresario",
    "aim": "Buff",
    "desc": "An extra action can be taken every turn and SPD increases slightly.",
    "type": "Impresario",
    "perma": true
  },
  {
    "name": "Enemy_W3_FigureBoss_DamageTakenUp",
    "realName": "Vulnerability",
    "aim": "Debuff",
    "desc": "Increases DMG taken by #1[i]%.",
    "type": "Vulnerability",
    "perma": true,
    "params": [
      "MDF_ExploreDamageUpRatio"
    ]
  },
  {
    "name": "Monster_W3_FigureBoss_DamageUP",
    "realName": "DMG Boost",
    "aim": "Buff",
    "desc": "Each stack increases DMG dealt by #1[i]%.",
    "type": "DMG Boost",
    "perma": true,
    "params": [
      "MDF_DamageUP"
    ]
  },
  {
    "name": "Monster_W3_Aventurine_DamageUpPunish_RL",
    "realName": "Deep in Debt",
    "aim": "Buff",
    "desc": "DMG dealt increases by #1[i]%. This effect can stack.",
    "type": "DMG Boost",
    "perma": true,
    "params": [
      "MDF_DamageUpRatio_PerLayer"
    ]
  },
  {
    "name": "Enemy_W3_Sunday_Ability08_TheWorld_V4",
    "realName": "Im Anfang war die Kraft",
    "aim": "Other",
    "desc": "After #1[i] turn(s), unleashes \"Im Anfang war die Tat.\"",
    "type": "Im Anfang war die Kraft",
    "perma": true,
    "params": [
      "MDF_Skill10_TurnCount"
    ]
  },
  {
    "name": "Enemy_W3_Sunday_Ability07_Shield_Modifier",
    "realName": "If We Live In the Light",
    "aim": "Buff",
    "desc": "Increases the DMG dealt by #1[i]%, and decreases the DMG taken. Toughness cannot be reduced. This lasts until the Shield is depleted.",
    "type": "If We Live In the Light",
    "perma": true,
    "params": [
      "MDF_Skill07_P2_DamageRatio"
    ]
  },
  {
    "name": "Enemy_W3_Sunday_LightTeam_Shield_Display",
    "realName": "Walk in the Light",
    "aim": "Buff",
    "desc": "A Shield that absorbs DMG taken by all allies. Before the Shield is depleted or its effect expires, enemy targets' attacks won't reduce the Shielded allies' HP. Currently, the Shield has #1[i] point(s) remaining.",
    "type": "Walk in the Light",
    "perma": true,
    "params": [
      "MDF_CurShield_Display"
    ]
  },
  {
    "name": "Standard_CTRL_Sleep",
    "realName": "Alien Dream",
    "aim": "Debuff",
    "desc": "Cannot take action within a certain number of turns and regenerates minor amounts of HP at the start of every turn. When this unit is attacked, greatly increase the DMG it takes. Getting attacked dispels the Alien Dream state.",
    "type": "Alien Dream",
    "perma": false
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-1288212710\">Enemy_W2_Argenti_IF_Power</a>",
    "realName": "Soulfreed",
    "aim": "Buff",
    "desc": "The knight's prayers bid the liberation of souls. Abilities have been enhanced.",
    "type": "Soulfreed",
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-1768656268\">Enemy_W2_Argenti_IF_EX_PowerUpDark</a>",
    "realName": "Regain Enhancement",
    "aim": "Buff",
    "desc": "Each stack increases DMG dealt by #1[i]%.",
    "type": "DMG Boost",
    "perma": true,
    "params": [
      "MDF_ShowValue1"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-1999138756\">Enemy_W2_Argenti_IF_EX_PowerUpLight</a>",
    "realName": "Soul Enhancement",
    "aim": "Buff",
    "desc": "Each stack increases DMG dealt by #1[i]%.",
    "type": "DMG Boost",
    "perma": true,
    "params": [
      "MDF_ShowValue1"
    ]
  },
  {
    "name": "Enemy_W2_Argenti_IF_EX_PowerUpAllDark",
    "realName": "undefined",
    "aim": "Buff",
    "desc": "undefined",
    "type": null,
    "perma": true,
    "params": [
      "MDF_ShowValue1",
      "MDF_ShowValue2"
    ]
  },
  {
    "name": "Enemy_W3_Sunday_P3Ability10Bonus",
    "realName": "Im Anfang war der Sinn",
    "aim": "Other",
    "desc": "Immune to all DMG.",
    "type": null,
    "perma": true
  },
  {
    "name": "Monster_W3_Figure_ChargeEffect",
    "realName": "Holy Night",
    "aim": "Other",
    "desc": "About to use \"Sleep In Heavenly Peace\"",
    "type": "Charging",
    "perma": true
  },
  {
    "name": "Enemy_W3_Sam_RLBoss_Enhance",
    "realName": "Secondary Combustion",
    "aim": "Other",
    "desc": "All attacks consume HP. Gains 1 stack of Thermocumulative Upgrade and increases SPD by #1[i]% and gains an additional action. #2[i] point(s) of Molten Energy remain before the Secondary Combustion state expires.",
    "type": "Secondary Combustion",
    "perma": true,
    "params": [
      "MDF_SpeedUpRatio",
      "MDF_CurrentPoint"
    ]
  },
  {
    "name": "Enemy_W3_Sam_RLBoss_AttackAddRatio",
    "realName": "Thermocumulative Upgrade",
    "aim": "Buff",
    "desc": "Increases DMG dealt by #1[i]%. This effect is stackable.",
    "type": "Thermocumulative Upgrade",
    "perma": true,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Enemy_W3_Sam_RLBoss_BlackBlood",
    "realName": "Immolation",
    "aim": "Debuff",
    "desc": "Decreases the Maximum Restorable HP by #1[i]%.",
    "type": "Immolation",
    "perma": false,
    "params": [
      "MDF_DirtyHPRatio"
    ]
  },
  {
    "name": "Monster_W3_Figure_RLElite_ChargeEffect",
    "realName": "Holy Night",
    "aim": "Other",
    "desc": "About to use \"Sleep In Heavenly Peace.\"",
    "type": "Charging",
    "perma": true
  },
  {
    "name": "MModifier_Monster_W3_TV_02_Side1",
    "realName": "Off-Class Channel",
    "aim": "Other",
    "desc": "Banacademic Office members can use \"Off-Class Channel\" abilities. After they are attacked, they will not switch channels.",
    "type": null,
    "perma": true
  },
  {
    "name": "MModifier_Monster_W3_TV_02_Side2",
    "realName": "Classroom Channel",
    "aim": "Other",
    "desc": "Banacademic Office members can use \"Classroom Channel\" abilities. After they are attacked, they switch to \"Off-Class Channel\" mode.",
    "type": null,
    "perma": true
  },
  {
    "name": "Enemy_W3_Dinosaur_02_Burn",
    "realName": "Burn",
    "aim": "Debuff",
    "desc": "Takes Fire DMG at the beginning of each turn for a certain number of turns.",
    "type": "Burn",
    "perma": false
  },
  {
    "name": "Enemy_W2_LycanMecha_RageStatus",
    "realName": "Moon Rage",
    "aim": "Buff",
    "desc": "Increases SPD by #1[i]%. Can use Lupitoxin Synthesis and Slaughter Algorithm. This is dispelled when Weakness is broken.",
    "type": "Moon Rage",
    "perma": true,
    "params": [
      "MDF_SpeedUpRatio"
    ]
  },
  {
    "name": "MModifier_Monster_W3_TV_02_FaceLock",
    "realName": "Tutoring",
    "aim": "Other",
    "desc": "In Tutoring mode, this unit will not change its channel when attacked.",
    "type": "Being Tutored",
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1744952962\">Enemy_AML_Boss_IF_Unselectable</a>",
    "realName": "Vestige Valor",
    "aim": "Buff",
    "desc": "Cannot be targeted until Disaster's Right Hand, Dawn's Left Hand, and Antimatter Engine have all been destroyed.",
    "type": null,
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"133864991\">Enemy_AML_Boss_Part2_IF_Enhancement_DisplayLV1</a>",
    "realName": "Amplification",
    "aim": "Other",
    "desc": "Skill is enhanced. Current Enhancement Level: 1",
    "type": "Amplification",
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-291765317\">Enemy_AML_Boss_IF_Enhance_Quantum</a>",
    "realName": "Quantum Infusion",
    "aim": "Other",
    "desc": "This unit can deal Toughness Reduction to targets with Quantum Mark with increased Weakness Break Efficiency. After attacking a target with Quantum Mark, Quantum Infusion is dispelled. Having both Quantum Infusion and Imaginary Infusion states at the same time triggers Ruinous Collision with a high chance of being inflicted with the Snarelock state.",
    "type": "Quantum Infused",
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-1433767937\">Enemy_AML_Boss_IF_Enhance_Imaginary</a>",
    "realName": "Imaginary Infusion",
    "aim": "Other",
    "desc": "This unit can deal Toughness Reduction to targets with Imaginary Mark with increased Weakness Break Efficiency. After attacking a target with Imaginary Mark, Imaginary Infusion is dispelled. Having both Quantum Infusion and Imaginary Infusion states at the same time triggers Ruinous Collision with a high chance of being inflicted with the Snarelock state.",
    "type": "Imaginary Infused",
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"529665307\">Enemy_W2_Argenti_IF_EX02_DefendState</a>",
    "realName": "Chivalric Wrath",
    "aim": "Buff",
    "desc": "DMG taken decreases by #1[i]%.",
    "type": "Chivalric Wrath",
    "perma": true,
    "params": [
      "MDF_ShowValue1"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"12795323\">Enemy_W2_Argenti_IF_EX02_AttackState</a>",
    "realName": "Golden Harvest",
    "aim": "Buff",
    "desc": "Increases DMG dealt by #1[i]% and increases SPD by #2[i]%.",
    "type": "Golden Harvest",
    "perma": true,
    "params": [
      "MDF_ShowValue1",
      "MDF_ShowValue2"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-1777994335\">Enemy_W2_Argenti_IF_EX02_UltraState</a>",
    "realName": "Medal of Elegance",
    "aim": "Buff",
    "desc": "Cannot be selected before the next action or before all summons have been defeated. Use Undeniable Fate the next time this unit takes action.",
    "type": "Medal of Elegance",
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-1546767870\">Monster_W2_Argenti_IF_FlowerPower</a>",
    "realName": "Wreath",
    "aim": "Buff",
    "desc": "Every stack additionally adds one instance of DMG dealt for Undeniable Fate.",
    "type": "Wreath",
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-1784319990\">Enemy_W2_Argenti_IF_EX_EnemyCount_Sub</a>",
    "realName": "Stellar Aegis",
    "aim": "Buff",
    "desc": "Each stack increases DMG dealt by #1[i]% and reduces DMG received by #2[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_DamageAddRatio",
      "MDF_TokenDMGRduceRatio"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-1404216721\">Monster_W3_AventurinePart_01_BlockDamage_RL</a>",
    "realName": "Fickle Fortune",
    "aim": "Other",
    "desc": "The minimum HP is 1. When attacked by a target that has entered the gamble, this unit gains a random number from 1 to 6. when its health drops to 1, this unit gains the Influx of Fortuity effect.",
    "type": null,
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-641521707\">Enemy_W2_Cocolia_IF_WeaknessCount_Sub01</a>",
    "realName": "Tenacious Resolve",
    "aim": "Buff",
    "desc": "DMG taken decreases by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_TokenDamageReduceRatio"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-691854564\">Enemy_W2_Cocolia_IF_WeaknessCount_Sub02</a>",
    "realName": "Tenacious Resolve",
    "aim": "Debuff",
    "desc": "Increases DMG taken by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_TokenDamageAddRatio"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-302789304\">Enemy_W1_CocoliaP1_IF_TargetLock01</a>",
    "realName": "Nowhere to Escape",
    "aim": "Other",
    "desc": "Locked on by the Ice Edge, and will be considered as an additional target for the Annihilator of Desolation Mistral's single-target ability.",
    "type": "Lock On",
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-252456447\">Enemy_W1_CocoliaP1_IF_TargetLock02</a>",
    "realName": "Nowhere to Escape",
    "aim": "Other",
    "desc": "Locked on by the Ice Edge, and will be considered as an additional target for the Annihilator of Desolation Mistral's single-target ability.",
    "type": "Lock On",
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-1288586649\">Enemy_W1_CocoliaP2_IF_TargetLock01</a>",
    "realName": "Nowhere to Escape",
    "aim": "Other",
    "desc": "Locked on by Lance of the Eternal Freeze, and will be considered as an additional target for the Annihilator of Desolation Mistral: Mother of Deception's single-target ability.",
    "type": "Lock On",
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-1271809030\">Enemy_W1_CocoliaP2_IF_TargetLock02</a>",
    "realName": "Nowhere to Escape",
    "aim": "Other",
    "desc": "Locked on by Lance of the Eternal Freeze, and will be considered as an additional target for the Annihilator of Desolation Mistral: Mother of Deception's single-target ability.",
    "type": "Lock On",
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-627803266\">Standard_SuperArmor_IF</a>",
    "realName": "Steadfast Safeguard",
    "aim": "Other",
    "desc": "DMG taken decreases by #1[i]%. This effect is removed when Weakness is Broken. When Weakness Broken, this unit has its action additionally delayed and takes increased DMG.",
    "type": "Steadfast Safeguard",
    "perma": true,
    "params": [
      "MDF_AllDamageTypeResistance"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"714067831\">Standard_SuperArmorBreak_IF</a>",
    "realName": "Safeguard Breach",
    "aim": "Other",
    "desc": "Takes #1[i]% more DMG. Dispels this effect when recovering from Weakness Break state.",
    "type": "Safeguard Breach",
    "perma": true,
    "params": [
      "MDF_AllDamageTypeTakenRatio"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-604897731\">Enemy_W2_Cocolia_IF_Frenzy</a>",
    "realName": "Nightmare of Battlegrounds",
    "aim": "Other",
    "desc": "Each stack increases DMG received by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_TokenDMGAddRatioPerLayer"
    ]
  },
  {
    "name": "MModifier_Monster_W4_Scholar_BookController",
    "realName": "Proselytize",
    "aim": "Other",
    "desc": "Causes %DynamicTargetName to enter the \"Gleaned Instruction\" state. Dispelled when this unit's \"War Armor\" is destroyed.",
    "type": "Proselytize",
    "perma": true
  },
  {
    "name": "MModifier_Monster_W4_Scholar_BookTarget",
    "realName": "Gleaned Instruction",
    "aim": "Buff",
    "desc": "Increases SPD by #1[i]% and DMG dealt by #2[i]%. Dispelled when %CasterName's \"War Armor\" is destroyed.",
    "type": "Gleaned Instruction",
    "perma": true,
    "params": [
      "MDF_SpeedUpRatio",
      "MDF_DamageUpRatio"
    ]
  },
  {
    "name": "MModifier_Monster_W4_Scholar_BookKiller",
    "realName": "Ignited Flame",
    "aim": "Buff",
    "desc": "Increases SPD by #1[i]%, and DMG dealt by #2[i]%.",
    "type": "Ignited Flame",
    "perma": false,
    "params": [
      "MDF_SpeedUpRatio",
      "MDF_DamageUpRatio"
    ]
  },
  {
    "name": "MModifier_Monster_W4_Claymore_Ability03_Aim",
    "realName": "Charging",
    "aim": "Other",
    "desc": "Charging. Dispelled upon Weakness Break.",
    "type": "Charging",
    "perma": true
  },
  {
    "name": "Enemy_Heaven_StoneShield",
    "realName": "War Armor",
    "aim": "Other",
    "desc": "Decreases DMG taken by #1[i]%. Loses 1 stack of \"War Armor\" after being attacked. When at 0 stacks, \"War Armor\" will be destroyed, dealing massive Imaginary DMG to this unit and delaying their action. The ally unit that destroyed the \"War Armor\" will regenerate Energy. After \"War Armor\" is destroyed, this unit will also additionally take minor Imaginary DMG when attacked. \"War Armor\" will be restored to maximum stacks at the end of this unit's turn.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_DamageResistance"
    ]
  },
  {
    "name": "MModifier_Monster_W4_Claymore_Ability04_DamageTakenUp",
    "realName": "Vulnerability",
    "aim": "Debuff",
    "desc": "DMG taken increases by #1[i]%.",
    "type": "Vulnerability",
    "perma": false,
    "params": [
      "MDF_DamageTakenUpRatio"
    ]
  },
  {
    "name": "Enemy_W2_Lycan_RageStatus",
    "realName": "Moon Rage",
    "aim": "Buff",
    "desc": "Enters the Moon Rage state and increases SPD by #1[i]%. There is a high chance of inflicting Bleed on the target when attacking. This state will be removed when this unit is Weakness Broken.",
    "type": "Additional Bleed",
    "perma": true,
    "params": [
      "MDF_SpeedUpRatio"
    ]
  },
  {
    "name": "Enemy_W2_Lycan_RageStatusEnhance",
    "realName": "Moon Rage",
    "aim": "Buff",
    "desc": "Enters the Moon Rage state and can take an extra action every turn. There is a high chance of inflicting Bleed on the target when attacking. This state will be removed when this unit is Weakness Broken.",
    "type": "Additional Bleed",
    "perma": true
  },
  {
    "name": "Enemy_W2_Lycan_01_RageStatus",
    "realName": "Moon Rage",
    "aim": "Buff",
    "desc": "Enters the Moon Rage state and increases SPD by #1[i]%. After attacking an allied target, restores this unit's HP. This state will be removed when this unit is Weakness Broken.",
    "type": "Mending Attack",
    "perma": true,
    "params": [
      "MDF_SpeedUpRatio"
    ]
  },
  {
    "name": "Enemy_W2_Lycan_01_RageStatusEnhance",
    "realName": "Moon Rage",
    "aim": "Buff",
    "desc": "Enters the Moon Rage state and can take an extra action every turn. After attacking a target, restores this unit's HP. This state will be removed when this unit is Weakness Broken.",
    "type": "Mending Attack",
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"975559492\">Enemy_AML_Boss_IF_CTRL_ConfineAndEntangle</a>",
    "realName": "Snarelock",
    "aim": "Debuff",
    "desc": "Action delayed and SPD reduced. Takes Quantum Additional DMG at the start of the next turn.\\nThis Additional DMG is increased whenever the target under the Snarelock status is attacked, up to 5 stacks. This status is considered to be both Quantum Entanglement and Imprisonment.",
    "type": "Snarelock",
    "perma": false
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-1094163808\">Enemy_W1_CocoliaP1_IF_SplitWeakness_Show</a>",
    "realName": "Devious Metamorphosis",
    "aim": "Other",
    "desc": "The Weakness Type has been transferred to Ice Edge.",
    "type": null,
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-426543761\">Enemy_W1_CocoliaP2_IF_SplitWeakness_Show</a>",
    "realName": "Devious Metamorphosis",
    "aim": "Other",
    "desc": "The Weakness Type has been transferred to Lance of the Eternal Freeze.",
    "type": null,
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-145483550\">Enemy_W1_CocoliaP1_IF_SplitWeakness_ShowSub</a>",
    "realName": "Scapegoat of Sins",
    "aim": "Other",
    "desc": "A Weakness Type has been transferred from Annihilator of Desolation Mistral to this unit. The Weakness Type will be returned when this unit is defeated.",
    "type": null,
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-822615197\">Enemy_W1_CocoliaP2_IF_SplitWeakness_ShowSub</a>",
    "realName": "Scapegoat of Sins",
    "aim": "Other",
    "desc": "A Weakness Type has been transferred from Annihilator of Desolation Mistral: Mother of Deception to this unit. The Weakness Type will be returned when this unit is defeated.",
    "type": null,
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1008150215\">Standard_CTRL_Taunt_ArgentiTotem_02_IF</a>",
    "realName": "Taunt",
    "aim": "Debuff",
    "desc": "Can only select %CasterName as the target to attack.",
    "type": "Taunt",
    "perma": false
  },
  {
    "name": "Monster_Fuyan_RL_DamageUp",
    "realName": "Slay Move",
    "aim": "Buff",
    "desc": "DMG dealt increases by #1[i]%. This effect can stack.",
    "type": "DMG Boost",
    "perma": true,
    "params": [
      "MDF_DamageUpRatio_PerLayer"
    ]
  },
  {
    "name": "Monster_Fuyan_RL_SpeedUp",
    "realName": "Transfer Move",
    "aim": "Buff",
    "desc": "Increases SPD by #1[i]%. This effect can stack.",
    "type": "SPD Boost",
    "perma": true,
    "params": [
      "MDF_SpeedAddedRatio_PerLayer"
    ]
  },
  {
    "name": "Enemy_W2_LycanKing_Poison",
    "realName": "\"Tumbledust\"",
    "aim": "Debuff",
    "desc": "At the start of each turn, consumes #1[i]% of this unit's HP.",
    "type": "\"Tumbledust\"",
    "perma": true,
    "params": [
      "MDF_LoseHPRatio"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-130810153\">Monster_W3_Dinosaur_01_MonsterAssistBonus</a>",
    "realName": "Terrathorn",
    "aim": "Buff",
    "desc": "Each hit of Bonepiercing Odium deals an additional instance of DMG. Each stack increases this instance of additional DMG.",
    "type": null,
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-831587978\">Monster_XP_Elite01_01_MonsterAssistBonus</a>",
    "realName": "Crystallite",
    "aim": "Buff",
    "desc": "Increases the action delay effect for Everwinter Rain. This effect is stackable.",
    "type": null,
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-1935976804\">Monster_W2_Kafka_IF03_SummonWeak</a>",
    "realName": "Rigidity",
    "aim": "Debuff",
    "desc": "Reduces DMG dealt by #1[i]% and decreases Effect Hit Rate by #2[i]%.",
    "type": "Rigidity",
    "perma": true,
    "params": [
      "MDF_WeakDMGReduceRatio",
      "MDF_WeakStatusProbReduceRatio",
      "MDF_WeakStanceSliceRatio"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"314670060\">Monster_W2_Kafka_IF03_SummonFenzy</a>",
    "realName": "Sanguine Gaze",
    "aim": "Other",
    "desc": "Increases DMG received by #1[i]% and increases SPD by #2[i]%.",
    "type": "Sanguine Gaze",
    "perma": true,
    "params": [
      "MDF_FrenzyDMGTokenAddRatio",
      "MDF_FrenzySpeedAddRatio",
      "MDF_FrenzyStanceSliceRatio"
    ]
  },
  {
    "name": "MModifier_Monster_W4_Claymore_Ability03_Target_UI",
    "realName": "Forthcoming Strife",
    "aim": "Other",
    "desc": "Furiae Praetor's \"Drowned in the Crimson Sea\" attack.",
    "type": "Distributed Attack",
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"214079291\">Monster_W2_Kafka_IF03_SummonKillBonus</a>",
    "realName": "Madden",
    "aim": "Other",
    "desc": "Enhanced by Boss Mirage, enters Special Attack mode, and is dispelled upon being Weakness Broken.",
    "type": "Madden",
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-1220849826\">Monster_W2_Kafka_IF03_SummonKillBonus_Sub</a>",
    "realName": "DMG Boost",
    "aim": "Buff",
    "desc": "DMG increases by #1[i]%. This effect can stack.",
    "type": "DMG Boost",
    "perma": true,
    "params": [
      "MDF_KillBonus"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"622236050\">Enemy_W2_Kafka_IF_EnemyCount_Sub</a>",
    "realName": "Stellar Aegis",
    "aim": "Buff",
    "desc": "Decreases DMG received by #1[i]%. This effect is stackable.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_TokenDMGRduceRatio"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"2069306256\">Enemy_Standard_IF_AllDamageTransfer_AlldamageReduce_Sub</a>",
    "realName": "DMG Reduction Distribution",
    "aim": "Buff",
    "desc": "When not yet Weakness Broken, reduces DMG received by #1[i]%. Upon taking action, this effect is equally distributed to other enemy units.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_AllDamageTransferRatio"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-1479261802\">Monster_W2_Kafka_IF03_SummonBreakShow</a>",
    "realName": "Action delayed after Break",
    "aim": "Other",
    "desc": "Action is additionally delayed after being Weakness Broken.",
    "type": null,
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1540227508\">Enemy_W2_Kafka_IF_AssistController_Save</a>",
    "realName": "Threads of the Puppet",
    "aim": "Other",
    "desc": "Consumes Threads of the Puppet to apply Madden to summons.",
    "type": null,
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"150642610\">Enemy_AML_Boss_Part2_IF_Enhancement_DisplayLV2</a>",
    "realName": "Amplification",
    "aim": "Other",
    "desc": "Skill is enhanced. Current Enhancement Level: 2",
    "type": "Amplification",
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-689878752\">Monster_W2_Kafka_IF03_SummonKillBonus01</a>",
    "realName": "Madden",
    "aim": "Other",
    "desc": "Enhanced by Boss Mirage, enters Spontaneous Combustion state, and is dispelled upon being Weakness Broken.",
    "type": "Madden",
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-639545895\">Monster_W2_Kafka_IF03_SummonKillBonus02</a>",
    "realName": "Madden",
    "aim": "Other",
    "desc": "Enhanced by Boss Mirage, enters Freezing Point state, and is dispelled upon being Weakness Broken.",
    "type": "Madden",
    "perma": true
  },
  {
    "name": "Standard_Unstable_Monster",
    "realName": "Reverberation",
    "aim": "Debuff",
    "desc": "After receiving an attack, enters \"Strong Reverberation,\" then dispels \"Reverberation.\"",
    "type": "Reverberation",
    "perma": false
  },
  {
    "name": "Standard_Shake_Monster",
    "realName": "Strong Reverberation",
    "aim": "Debuff",
    "desc": "Action delayed. Cannot take actions for a certain number of turns.",
    "type": "Strong Reverberation",
    "perma": false
  },
  {
    "name": "MModifier_Monster_AML_Minion03_01_StoneShieldEnhance",
    "realName": "Indomitable",
    "aim": "Buff",
    "desc": "Increases max \"War Armor\" stacks. Dispelled when %CasterName's \"War Armor\" is broken.",
    "type": "Max \"War Armor\" Boost",
    "perma": true
  },
  {
    "name": "MModifier_Monster_AML_Minion03_01_Halo",
    "realName": "War Song",
    "aim": "Buff",
    "desc": "Increases max \"War Armor\" stacks for enemy units aside from this unit. Dispelled when this unit's \"Armor\" is destroyed.",
    "type": "The Warsong Begins",
    "perma": true
  },
  {
    "name": "Enemy_W2_LycanKing_RageStatus",
    "realName": "Eclipse's Ire",
    "aim": "Buff",
    "desc": "Enters the Moon Rage state and increases SPD by #1[i]%. While in this state, Hoolay gains Irate and can use Lupine Chase Calls Bloody Gleam. This state will be removed when this unit is Weakness Broken.",
    "type": "Enters the Eclipse's Ire state",
    "perma": true,
    "params": [
      "MDF_SpeedUpRatio",
      "MDF_SpeedUpRatioPerWolf"
    ]
  },
  {
    "name": "Enemy_W2_LycanKing_RageStatusPhase2",
    "realName": "Eclipse's Wrath",
    "aim": "Buff",
    "desc": "Enters the Moon Rage state and increases SPD by #1[i]%. While in this state, Hoolay gains Irate and can use Barrenness of Earth Gouged and Lupine Chase Calls Bloody Gleam. This state will be removed when this unit is Weakness Broken.",
    "type": "Enters the Eclipse's Wrath state",
    "perma": true,
    "params": [
      "MDF_SpeedUpRatio",
      "MDF_SpeedUpRatioPerWolf"
    ]
  },
  {
    "name": "Enemy_W2_LycanKing_BloodRageMark",
    "realName": "Irate",
    "aim": "Other",
    "desc": "Hoolay currently possesses #1[i] stack(s) of Irate.",
    "type": "Irate",
    "perma": true,
    "params": [
      "MDF_Layer"
    ]
  },
  {
    "name": "Enemy_W2_LycanKing_RageStatusEnhance",
    "realName": "Lupine Lord's Majesty",
    "aim": "Buff",
    "desc": "When entering Moon Rage, the effect of Moon Rage will be Enhanced.",
    "type": "Lupitoxin",
    "perma": true
  },
  {
    "name": "Enemy_W2_LycanKing_RageStatusEnhanceSelf",
    "realName": "Lupine Lord's Majesty",
    "aim": "Buff",
    "desc": "Hoolay's SPD increases by #1[i]% due to the presence of Sableclaw Wolftrooper and Eclipse Wolftrooper on the field.",
    "type": "Lupine Lord's Majesty",
    "perma": true,
    "params": [
      "MDF_SpeedAddRatioPerLayer"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"216530002\">Enemy_AML_Boss_Part2_IF_AbilityP01_Weakness_Part3</a>",
    "realName": "Imaginary Mark",
    "aim": "Other",
    "desc": "Toughness can be reduced by attacks from Imaginary Infused allied targets.",
    "type": null,
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"182974764\">Enemy_AML_Boss_Part2_IF_AbilityP01_Weakness_Part1</a>",
    "realName": "Quantum Mark",
    "aim": "Other",
    "desc": "Toughness can be reduced by attacks from Quantum Infused allied targets.",
    "type": null,
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-656323514\">Monster_W2_Kafka_IF03_SummonKillBonus03</a>",
    "realName": "Madden",
    "aim": "Other",
    "desc": "Enhanced by Boss Mirage, enters Charging state, and is dispelled upon being Weakness Broken.",
    "type": "Madden",
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-605990657\">Monster_W2_Kafka_IF03_SummonKillBonus04</a>",
    "realName": "Madden",
    "aim": "Other",
    "desc": "Enhanced by Boss Mirage, enters Charging state, and is dispelled upon being Weakness Broken.",
    "type": "Madden",
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-357357562\">Monster_W2_Huanlong_IF_BlackBonus</a>",
    "realName": "Destruction Buff",
    "aim": "Other",
    "desc": "Increases Break Effect by #1[i]%. Unable to obtain buffs from Abundance Lotus again.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1948779644\">Monster_W2_Huanlong_IF_WhiteBonus</a>",
    "realName": "Abundance Buff",
    "aim": "Other",
    "desc": "DMG dealt increases by #1[i]%. Unable to obtain any from Destruction Lotus again.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Monster_W2_Huanlong_IF_DamageReduce",
    "realName": "Hollowflower Blaze",
    "aim": "Other",
    "desc": "DMG taken decreases by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Enemy_W2_LycanMecha_Ability06_Impact",
    "realName": "Blood Fervor",
    "aim": "Buff",
    "desc": "The Bloodlust stacks needed to enter the Moon Rage status are reduced.",
    "type": "Bloodlust limit reduced",
    "perma": true
  },
  {
    "name": "Enemy_W3_Aventurine_IF_Score_Light",
    "realName": "Gambler Points",
    "aim": "Buff",
    "desc": "Current Points: #2[i]. When enemy target's Points are more than allies' Points, the enemies' DMG taken greatly decreases. When enemy target's Points are equal to or less than allies' Points, the DMG taken by the enemies' increases by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_AllDamageAddedRatio",
      "MDF_EntityScore"
    ]
  },
  {
    "name": "Enemy_W3_Aventurine_IF_Defence",
    "realName": "House Advantage (I)",
    "aim": "Buff",
    "desc": "When the Current Points are more than allies' Points, DMG taken decreases by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_AllDamageReduce"
    ]
  },
  {
    "name": "Enemy_W3_Aventurine_IF_Score_Dark",
    "realName": "House Points",
    "aim": "Other",
    "desc": "The Current Points are #1[i].",
    "type": null,
    "perma": true,
    "params": [
      "MDF_EntityScore"
    ]
  },
  {
    "name": "Monster_W2_Feixiao_AlreadyConnect",
    "realName": "Resonate",
    "aim": "Other",
    "desc": "While in the Resonance state, this unit is immune to changes in the order of the action bar (except changes made by itself). At the same time, any Toughness reduction this unit receives will increase by #1[i]%. When this unit is Weakness Broken, all targets' actions are Advanced Forward.",
    "type": "Resonate",
    "perma": true,
    "params": [
      "MDF_StanceBreakTakenRatio"
    ]
  },
  {
    "name": "Monster_W2_Feixiao_UltraConnect",
    "realName": "Resonate",
    "aim": "Other",
    "desc": "While in the Resonance state, this unit is immune to changes in the order of the action bar (except changes made by itself). At the same time, any Toughness reduction this unit receives will increase by #1[i]%. When this unit is Weakness Broken, all targets' actions are Advanced Forward.",
    "type": "Resonate",
    "perma": true,
    "params": [
      "MDF_StanceBreakTakenRatio"
    ]
  },
  {
    "name": "Enemy_W3_Aventurine_IF_Defence_Protect",
    "realName": "House Advantage (II)",
    "aim": "Buff",
    "desc": "When current Points are more than allies' Points, gains Toughness Protection.",
    "type": null,
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"947500340\">Monster_W2_Huanlong_IF_Black_DeathRattle</a>",
    "realName": "Destruction Buff",
    "aim": "Other",
    "desc": "Defeating Destruction Lotus can increase Break Effect.",
    "type": null,
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1149800438\">Monster_W2_Huanlong_IF_White_DeathRattle</a>",
    "realName": "Abundance Buff",
    "aim": "Other",
    "desc": "Defeating Abundance Lotus can increase damage dealt.",
    "type": null,
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-1834686604\">Monster_W2_Huanlong_IF_Black_DeathRattle_Invalid</a>",
    "realName": "Destruction Buff",
    "aim": "Other",
    "desc": "Abundance buff gained. Defeating Destruction Lotus will not grant the Destruction buff.",
    "type": null,
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1991541642\">Monster_W2_Huanlong_IF_White_DeathRattle_Invalid</a>",
    "realName": "Abundance Buff",
    "aim": "Other",
    "desc": "Destruction buff gained. Defeating Abundance Lotus will not grant the Abundance buff.",
    "type": null,
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-1788965070\">Monster_W2_Huanlong_IF_WeaknessProtect</a>",
    "realName": "Flower By Another Name",
    "aim": "Buff",
    "desc": "Defeat any Lotus to dispel the Toughness Protection state.",
    "type": "Toughness Protection",
    "perma": true
  },
  {
    "name": "Enemy_W3_Aventurine_IF_Ability11_Charge",
    "realName": "Activate",
    "aim": "Buff",
    "desc": "The Daring Diceroller's DMG and the chance to inflict Imprisonment on allies increase.",
    "type": "Activate",
    "perma": true
  },
  {
    "name": "Monster_W3_SundayPart_IF_EX02_DamageReduce",
    "realName": "Rhythm Without End",
    "aim": "Other",
    "desc": "\"Echo of Faded Dreams\" takes #1[i]% less DMG. This effect is dispelled when Cacophonic Conductor becomes Weakness Broken.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Enemy_W2_LycanKing_RLBoss_AllDamageTypeAddedRatio",
    "realName": "Thirst for War",
    "aim": "Buff",
    "desc": "Increases DMG dealt by #1[i]%. This effect is stackable.",
    "type": "DMG Boost",
    "perma": true,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Enemy_W3_Dinosaur_02_AttackRatioUp",
    "realName": "ATK Boost",
    "aim": "Buff",
    "desc": "Increases ATK by #1[i]%. This effect can stack.",
    "type": "ATK Boost",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-861835202\">Monster_W2_Huanlong_IF_Sign01</a>",
    "realName": "Lock On",
    "aim": "Other",
    "desc": "Locked on by %CasterName as their attack target.",
    "type": "Lock On",
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-878612821\">Monster_W2_Huanlong_IF_Sign02</a>",
    "realName": "Lock On",
    "aim": "Other",
    "desc": "Locked on by %CasterName as their attack target.",
    "type": "Lock On",
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-895390440\">Monster_W2_Huanlong_IF_Sign03</a>",
    "realName": "Lock On",
    "aim": "Other",
    "desc": "Locked on by %CasterName as their attack target.",
    "type": "Lock On",
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-777947107\">Monster_W2_Huanlong_IF_Sign04</a>",
    "realName": "Lock On",
    "aim": "Other",
    "desc": "Locked on by %CasterName as their attack target.",
    "type": "Lock On",
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"2104764943\">Enemy_W2_Yanqing_Ability02_UnknownWeakPoint_Core_FightFest</a>",
    "realName": "Sword Formation",
    "aim": "Other",
    "desc": "Yanqing's Toughness cannot be reduced. Destroying any of Yanqing's Flying Swords to dispel that effect and deal Toughness DMG to Yanqing.",
    "type": "Sword Formation",
    "perma": true
  },
  {
    "name": "MModifier_Monster_W3_Theater_IF_FaceLock",
    "realName": "undefined",
    "aim": "Other",
    "desc": "undefined",
    "type": "undefined",
    "perma": true
  },
  {
    "name": "MModifier_Monster_W3_Theater_IF_MinionsSuperArmor",
    "realName": "Homework In-Class",
    "aim": "Buff",
    "desc": "When Blaznana Monkey Trick is in the \"Steadfast Safeguard\" state, reduces this unit's DMG received by #1[i]%.",
    "type": "Homework In-Class",
    "perma": true,
    "params": [
      "MDF_AllDamageReduce"
    ]
  },
  {
    "name": "MModifier_Monster_W3_Theater_IF_MinionsSuperArmorBreak",
    "realName": "Prolonged Class",
    "aim": "Debuff",
    "desc": "When Blaznana Monkey Trick is in the \"Safeguard Breach\" state, increases this unit's DMG taken by #1[i]%.",
    "type": "Prolonged Class",
    "perma": true,
    "params": [
      "MDF_AllDamageTypeTakenRatio"
    ]
  },
  {
    "name": "MModifier_Monster_W3_Theater_IF_HourglassCharge",
    "realName": "Regular Examination",
    "aim": "Other",
    "desc": "When enemy units in the \"Classroom Channel\" state are switched to \"Off-Class Channel\" via either Breaking their Weaknesses or accumulating the tally, reduces the Toughness of \"Blaznana Monkey Trick\". When all enemy units are Weakness Broken, attacking any enemy units can reduce the Toughness of \"Blaznana Monkey Trick\" by a minor amount. When \"Blaznana Monkey Trick\" is Weakness Broken, all enemy targets will be Broken, and the \"Blaznana Monkey Trick\" will enter the \"Safeguard Breach\" state.",
    "type": null,
    "perma": true
  },
  {
    "name": "Enemy_W3_Sunday_IF_Ability07_Shield_Modifier",
    "realName": "One With the Light",
    "aim": "Buff",
    "desc": "Increases DMG dealt by #1[i]%. This effect is dispelled when the Shield is depleted.",
    "type": "If We Live In the Light",
    "perma": true,
    "params": [
      "MDF_Skill07_P2_DamageRatio"
    ]
  },
  {
    "name": "Enemy_W3_Dinosaur_02_IF_StanceBreakRatioUp",
    "realName": "Weakness Break Efficiency Boost",
    "aim": "Buff",
    "desc": "Weakness Break Efficiency increases by #1[i]%.",
    "type": "Weakness Break Efficiency Boost",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Enemy_W4_Scholar_01_Stealth",
    "realName": "Lurking",
    "aim": "Buff",
    "desc": "Cannot become the primary target for abilities that require active selection. DMG received increases by #1[i]%. When Weakness is Broken or when all enemy units on the field aside from this unit are in \"Lurking\" state, dispels \"Lurking\" state for this unit. When there are no other enemy units on the battlefield, this unit dispels the \"Lurking\" state.",
    "type": "Lurking",
    "perma": false,
    "params": [
      "MDF_StealthBreak_AllDamageTypeTakenRatio"
    ]
  },
  {
    "name": "Enemy_W4_Scholar_01_StealthBreak",
    "realName": "Flawed",
    "aim": "Debuff",
    "desc": "DMG received increases by #1[i]%.",
    "type": "Vulnerability",
    "perma": false,
    "params": [
      "MDF_AllDamageTypeTakenRatio"
    ]
  },
  {
    "name": "Enemy_W3_Theater_IF_Shield",
    "realName": "Group Shield",
    "aim": "Buff",
    "desc": "A Shield that offsets DMG taken by all enemies. Before the Shield is depleted or its effect expires, ally targets' attacks won't reduce the Shielded enemy targets' HP and also will not increase enemy targets' Switch Tally, as well as causing Banacademic Office members other than Banacademic Office's Charmony BananAdvisor to gain Toughness Protection. When Shield is depleted or when Banacademic Office's Charmony BananAdvisor is Weakness Broken, reduces Blaznana Monkey Trick's Toughness and delays all enemy targets' actions. Currently, the Shield has #1[i] point(s) remaining.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_CurrentShieldValue"
    ]
  },
  {
    "name": "Enemy_W3_Theater_IF_Shield_Display",
    "realName": "Group Shield",
    "aim": "Buff",
    "desc": "A Shield that offsets DMG taken by all enemies. Before the Shield is depleted or its effect expires, ally targets' attacks won't reduce the Shielded enemy targets' HP and also will not increase enemy targets' Switch Tally, as well as causing Banacademic Office members other than Banacademic Office's Charmony BananAdvisor to gain Toughness Protection. When Shield is depleted or when Banacademic Office's Charmony BananAdvisor is Weakness Broken, reduces Blaznana Monkey Trick's Toughness and delays all enemy targets' actions. Currently, the Shield has #1[i] point(s) remaining.",
    "type": "Group Shield",
    "perma": true,
    "params": [
      "MDF_CurShield_Display"
    ]
  },
  {
    "name": "Enemy_W4_Mascot_EscapingCharge00",
    "realName": "Brainteaser",
    "aim": "Other",
    "desc": "\"Bartholos\" presents a brainteaser, entering the \"Brainteaser\" state. Allies can respond with \"Basic ATK,\" \"Skill,\" or \"Ultimate.\" Each brainteaser requires the correct type of attack to solve. Upon successfully solving the brainteaser, \"Bartholos\" will immediately change the brainteaser and take Physical DMG based on a percentage of its Max HP.",
    "type": null,
    "perma": true
  },
  {
    "name": "Enemy_W4_Mascot_EscapingCharge01",
    "realName": "Brainteaser",
    "aim": "Other",
    "desc": "\"Bartholos\" presents a brainteaser, entering the \"Brainteaser\" state. Allies can respond with \"Basic ATK,\" \"Skill,\" or \"Ultimate.\" Each brainteaser requires the correct type of attack to solve. Upon successfully solving the brainteaser, \"Bartholos\" will immediately change the brainteaser and take Physical DMG based on a percentage of its Max HP.",
    "type": null,
    "perma": true
  },
  {
    "name": "Enemy_W4_Mascot_EscapingCharge02",
    "realName": "Brainteaser",
    "aim": "Other",
    "desc": "\"Bartholos\" presents a brainteaser, entering the \"Brainteaser\" state. Allies can respond with \"Basic ATK,\" \"Skill,\" or \"Ultimate.\" Each brainteaser requires the correct type of attack to solve. Upon successfully solving the brainteaser, \"Bartholos\" will immediately change the brainteaser and take Physical DMG based on a percentage of its Max HP.",
    "type": null,
    "perma": true
  },
  {
    "name": "Monster_W3_SundayPart_IF_EX02_DamageTaken",
    "realName": "Shattered Illusion",
    "aim": "Other",
    "desc": "\"Echo of Faded Dreams\" takes #1[i]% increased DMG. This effect is dispelled when Cacophonic Conductor recovers from a Weakness Break.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Enemy_XP_Elite01_02_DefenceDown",
    "realName": "DEF Reduction",
    "aim": "Debuff",
    "desc": "DEF decreases by #1[i]%.",
    "type": "DEF Reduction",
    "perma": false,
    "params": [
      "#Skill06_P1_Ratio"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-2022523841\">Enemy_SW_Boss_01_IF_SwarmArmor</a>",
    "realName": "Insect Egg",
    "aim": "Other",
    "desc": "Lose 1 Insect Egg when attacked by \"Entomon Eulogy\" or \"Decay Eulogy.\"",
    "type": null,
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-103304753\">Enemy_SW_Boss_01_IF_MinionsEnhancement</a>",
    "realName": "Growth Hormones",
    "aim": "Other",
    "desc": "Each stack increases ATK by #1[i]%.",
    "type": "Growth Hormones",
    "perma": true,
    "params": [
      "MDF_AttackAddedRatio"
    ]
  },
  {
    "name": "MModifier_Monster_W3_Theater_IF_Side_Positive",
    "realName": "Off-Class Channel",
    "aim": "Other",
    "desc": "Banacademic Office members can use \"Off-Class Channel\" abilities. After they are attacked, they will not switch channels.",
    "type": null,
    "perma": true
  },
  {
    "name": "MModifier_Monster_W3_Theater_IF_Side_Negative",
    "realName": "Classroom Channel",
    "aim": "Other",
    "desc": "\"Banacademic Office\" members can use \"Classroom Channel\" abilities. When the tally reaches the maximum, switches to \"Off-Class Channel\" and enters the Weakness Broken state.",
    "type": null,
    "perma": true
  },
  {
    "name": "Monster_W3_Aventurine_Gambling_Servant",
    "realName": "Gamble",
    "aim": "Other",
    "desc": "Attack \"All or Nothing\" to obtain a number. The currently obtained number is #1[i].",
    "type": "Gamble",
    "perma": true,
    "params": [
      "MDF_GamblingResult"
    ]
  },
  {
    "name": "Monster_W4_Nikadory_Shield",
    "realName": "War Armor",
    "aim": "Other",
    "desc": "Decreases DMG taken by #1[i]%. Loses 1 stack of \"War Armor\" after being attacked. When at 0 stacks, \"War Armor\" will be destroyed, dealing massive Imaginary DMG to this unit and delaying their action. The ally unit that destroyed the \"War Armor\" will regenerate Energy. After \"War Armor\" is destroyed, this unit will also additionally take minor Imaginary DMG when attacked. \"War Armor\" will be restored to maximum stacks at the end of this unit's turn.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_DamageResistance_PerLayer"
    ]
  },
  {
    "name": "Monster_W4_Nikadory_Brave",
    "realName": "Glory",
    "aim": "Other",
    "desc": "Each stack of \"Glory\" increases DMG dealt by #1[i]% and Energy Regeneration Rate by #2[i]%. When launching Skill or Ultimate, adds 1 stack of \"Glory,\" up to #3[i] stack(s). Attacking can dispel a certain stack of \"Titanic Corpus\" corresponding to the number of \"Glory\" stacks.",
    "type": "Glory",
    "perma": true,
    "params": [
      "MDF_DamageUpRatio_PerLayer",
      "MDF_EnergyAddRatio",
      "MDF_MaxLayer"
    ]
  },
  {
    "name": "Monster_W4_Nikadory_EnhanceShield",
    "realName": "Titanic Corpus",
    "aim": "Other",
    "desc": "DMG taken decreases by #1[i]%. When stacks reach 0, action is delayed and this unit immediately loses a certain amount of HP, regenerates Energy for all targets, and dispels \"Titanic Corpus.\" When attacked by targets with \"Glory,\" \"Titanic Corpus\" stacks corresponding to the target's \"Glory\" stacks will be reduced. While this unit has \"Titanic Corpus,\" increases the DMG dealt by the next attack by #2[i]% and causes the attacked target to become Imprisoned.",
    "type": "Titanic Corpus",
    "perma": true,
    "params": [
      "MDF_DamageResistance_PerLayer",
      "MDF_DamageUpRatio"
    ]
  },
  {
    "name": "Monster_W4_HearsePart_BlackBlood",
    "realName": "Conquered",
    "aim": "Other",
    "desc": "Decreases Maximum Restorable HP by #1[i]%. You can reclaim a Tested Spirit by attacking the \"Conquer or Be Conquered\" corresponding to this unit.",
    "type": "Conquered",
    "perma": true,
    "params": [
      "MDF_DirtyHPRatio"
    ]
  },
  {
    "name": "Monster_W4_HearsePart_Soul",
    "realName": "Conquer",
    "aim": "Other",
    "desc": "\"The Giver, Master of Legions, Lance of Fury\" conquered %CasterName's soul and will take #1[i]% more DMG from %CasterName's attacks. After being defeated by targets, dispel \"Conquered\" on %CasterName.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_DamageTakenUpRatio"
    ]
  },
  {
    "name": "Monster_W4_Hearse_Sign",
    "realName": "Strife-Granted Fear",
    "aim": "Other",
    "desc": "DMG taken increases by #1[i]%. This effect can be dispelled by defeating the \"Conquer or Be Conquered\" corresponding to this unit.",
    "type": "Fear",
    "perma": true,
    "params": [
      "MDF_DamageTakenUpRatio"
    ]
  },
  {
    "name": "Monster_W4_Hearse_Enhance",
    "realName": "Strife-Granted Valiance",
    "aim": "Buff",
    "desc": "Each stack increases DMG dealt for the next attack.",
    "type": "Valiance",
    "perma": true
  },
  {
    "name": "Enemy_W4_Claymore_01_Ability02_DeadLock_Self",
    "realName": "Duel",
    "aim": "Other",
    "desc": "Increases SPD by #1[i]% and when receiving DMG from targets outside the Showdown state, reduces DMG by #2[i]%. Obtains 1 stack of \"Morale\" after each attack. DMG taken from Duel target will reduce the Duel's progress bar based on the DMG. When the Duel's progress bar is at 0, the Duel is lost and the Duel state is dispelled. Still requires #3[i] DMG to dispel Duel state.",
    "type": "Duel",
    "perma": true,
    "params": [
      "MDF_SpeedAddedRatio",
      "MDF_DamageReduce",
      "DeadLock_HP_CurrentValue"
    ]
  },
  {
    "name": "Enemy_W4_Claymore_01_Ability02_DeadLock_Target",
    "realName": "Duel",
    "aim": "Other",
    "desc": "SPD increases by #1[i]%. When receiving DMG from targets outside the Duel state, reduces DMG by #2[i]%. Obtains 1 stack of \"Morale\" after each attack.",
    "type": "Duel",
    "perma": true,
    "params": [
      "MDF_SpeedAddedRatio",
      "MDF_DamageReduce"
    ]
  },
  {
    "name": "Enemy_W4_Claymore_01_Ability02_DeadLock_Win",
    "realName": "Honor",
    "aim": "Buff",
    "desc": "DMG dealt increases by #1[i]%.",
    "type": "DMG Boost",
    "perma": false,
    "params": [
      "MDF_AllDamageTypeAddedRatio"
    ]
  },
  {
    "name": "Enemy_W4_Claymore_01_Ability02_DeadLock_PowerUp",
    "realName": "Morale",
    "aim": "Buff",
    "desc": "Each stack increases the DMG dealt by #1[i]%.",
    "type": "DMG Boost",
    "perma": false,
    "params": [
      "MDF_AllDamageTypeAddedRatio"
    ]
  },
  {
    "name": "Enemy_W4_DawnsEye_PartHP",
    "realName": "All As One",
    "aim": "Other",
    "desc": "When receiving DMG, \"Sublime, Radiant, Avatar of the Sky\" loses an equal amount of HP.",
    "type": null,
    "perma": true
  },
  {
    "name": "Enemy_Monster_W4_DawnsEye_WheaterSunnyBurn",
    "realName": "Solar Storm",
    "aim": "Other",
    "desc": "Takes Fire DMG based on the current Temperature at the start of each turn.",
    "type": "Solar Storm",
    "perma": true,
    "params": [
      "MDF_AllDamageTypeAddedRatioCurrent"
    ]
  },
  {
    "name": "Enemy_W4_DawnsEye_Ability04_SunnyChargeHeat",
    "realName": "Helium Flash",
    "aim": "Buff",
    "desc": "Uses \"Fury, Incineration of Dawn and Dusk\" on all targets in the next action and increases the Temperature by #1[i].",
    "type": null,
    "perma": true,
    "params": [
      "MDF_Skill04P1SunnyHeat"
    ]
  },
  {
    "name": "Enemy_W4_DawnsEye_WeatherEnhanced",
    "realName": "Wingbeats",
    "aim": "Other",
    "desc": "\"Daythunder Raven\" enters Enhanced state. Dispelled upon being Weakness Broken.",
    "type": "Enhance",
    "perma": true
  },
  {
    "name": "Enemy_W4_Griffin_Debuff_Mark",
    "realName": "Aquila's Mark",
    "aim": "Other",
    "desc": "When a target gains \"Aquila's Mark\" again, dispel all marks, and they take Fire DMG and lose Energy. When a target gains \"Oronyx's Mark\" again, dispel all marks, and they take True DMG based on #1[i]% of their Max HP, lose Energy, and have a high chance to be afflicted with Entanglement. After any ally target defeats an enemy target, this mark can be dispelled, prioritizing dispelling the mark from the target that dealt the fatal damage.",
    "type": "Aquila's Mark",
    "perma": true,
    "params": [
      "_MixedMark_LoseHpRatio"
    ]
  },
  {
    "name": "Enemy_W4_Griffin_SignOnAvatar",
    "realName": "Lock On",
    "aim": "Other",
    "desc": "Locked on by %CasterName as their attack target.",
    "type": "Target Locked On",
    "perma": true
  },
  {
    "name": "Enemy_W4_Unicorn_Debuff_Mark",
    "realName": "Oronyx's Mark",
    "aim": "Other",
    "desc": "When a target gains \"Oronyx's Mark\" again, dispel all marks, and they take Quantum DMG with a high chance to be afflicted with Entanglement. When a target gains \"Aquila's Mark\" again, dispel all marks, and they receive True DMG based on #1[i]% of their Max HP, lose Energy, and have a high chance to be afflicted with Entanglement. Using Ultimate can dispel this mark.",
    "type": "Oronyx's Mark",
    "perma": true,
    "params": [
      "_MixedMark_LoseHpRatio"
    ]
  },
  {
    "name": "Enemy_W4_Unicorn_SignOnAvatar",
    "realName": "Lock On",
    "aim": "Other",
    "desc": "Locked on by %CasterName as their attack target.",
    "type": "Target Locked On",
    "perma": true
  },
  {
    "name": "Enemy_W4_Unicorn_SignOnAvatar2",
    "realName": "Lock On",
    "aim": "Other",
    "desc": "Locked on by %CasterName as their attack target.",
    "type": "Target Locked On",
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-1717754231\">Enemy_W4_Serpent_01_Passive_Sub</a>",
    "realName": "Expedite Verdict",
    "aim": "Other",
    "desc": "DMG received decreases by #1[i]%. When this unit is Weakness Broken, this effect is dispelled, its action will be further delayed, and deals massive Imaginary DMG to this unit.",
    "type": "Expedite Verdict",
    "perma": true,
    "params": [
      "MDF_AllDamageReduce"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"120636483\">Enemy_W4_Serpent_01_Summon_Deathrattle</a>",
    "realName": "Execution Squad",
    "aim": "Other",
    "desc": "When defeated, reduces the Toughness of \"Ichor Memosprite: Judge of Oblivion.\"",
    "type": "Execution Squad",
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1560904792\">Enemy_W4_Serpent_01_Charge01</a>",
    "realName": "Pursuer",
    "aim": "Other",
    "desc": "Increases SPD by #1[i]%. Will launch #2[i] instance(s) of Single Target attacks on %DynamicTargetName. This effect is dispelled when this unit's Weakness is Broken.",
    "type": "Pursuer",
    "perma": true,
    "params": [
      "MDF_PropertyValue",
      "MDF_Count"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1710428840\">Enemy_W4_Serpent_01_Charge01_Target</a>",
    "realName": "Pursuit Target",
    "aim": "Other",
    "desc": "Will receive #1[i] instances of Single Target attacks from \"%CasterName.\" If this unit has Shield, when hit by \"%CasterName's\" Single Target attacks, reduces Toughness. This effect is dispelled when \"%CasterName\" is Weakness Broken.",
    "type": "Pursuit Target",
    "perma": true,
    "params": [
      "MDF_Layer"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1611237649\">Enemy_W4_Serpent_01_Charge02</a>",
    "realName": "Penance Prep",
    "aim": "Other",
    "desc": "Use \"Hemotort Decapitation\" in the next action. This effect is dispelled when this unit becomes Weakness Broken.",
    "type": "Penance Prep",
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-2034245301\">Enemy_W4_Serpent_01_Charge02_Target</a>",
    "realName": "First Offense",
    "aim": "Other",
    "desc": "When \"%DynamicTargetName\" uses \"Hemotort Decapitation\", they take maximum damage, and if any DMG is not offset by Shield, they will be inflicted with \"Hemotort Corruption.\"",
    "type": "First Offense",
    "perma": true
  },
  {
    "name": "MModifier_Monster_AML_Minion03_01_StoneShieldEnhance_Nikadory",
    "realName": "Indomitable",
    "aim": "Buff",
    "desc": "Increases max \"War Armor\" and \"Titanic Corpus\" stacks. Dispelled when %CasterName's \"War Armor\" is broken.",
    "type": "Max \"War Armor\" Boost",
    "perma": true
  },
  {
    "name": "Enemy_AML_Minion02_01_RallyHP_V2",
    "realName": "Corrosion",
    "aim": "Other",
    "desc": "After attacking, restore a portion of Corroded HP. The more targets are attacked, the more HP is restored. When Corrosion is dispelled via restorative means, obtain \"Renewal.\"",
    "type": null,
    "perma": true
  },
  {
    "name": "Enemy_AML_Minion02_01_RallyHP_V2_Strongth",
    "realName": "Renewal",
    "aim": "Buff",
    "desc": "The next attack's DMG dealt increases by #1[i]%.",
    "type": "DMG Boost",
    "perma": false,
    "params": [
      "MDF_AllDamageTypeAddedRatio"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"35393434\">Standard_FastAction</a>",
    "realName": "Stormride",
    "aim": "Buff",
    "desc": "Consuming 1 stack of \"Stormride\" can cause the target to immediately take action at the end of the turn. This effect cannot be triggered in the turn triggered by the effect of \"Stormride.\" This state is dispelled after becoming Weakness Broken.",
    "type": "Stormride",
    "perma": true
  },
  {
    "name": "MModifier_Monster_W3_Theater_RLBoss_AllDamageTypeAddedRatio",
    "realName": "Oil to the Banabana",
    "aim": "Buff",
    "desc": "Increases DMG dealt by #1[i]%. This effect is stackable.",
    "type": "DMG Boost",
    "perma": true,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Enemy_W3_Dinosaur_01_Standard_Growth_Enhance",
    "realName": "Scorchbone Inferno",
    "aim": "Buff",
    "desc": "Each stack causes \"Bonepiercing Odium\" to additionally deal DMG 1 time, stacking up to #1[i] time(s). Weaken is dispelled when Broken.",
    "type": "Scorchbone Inferno",
    "perma": true,
    "params": [
      "MDF_MaxLayer"
    ]
  },
  {
    "name": "Enemy_W4_Griffin_Taunt_OnAvatar",
    "realName": "Taunt",
    "aim": "Debuff",
    "desc": "Can only select %CasterName as the target to attack.",
    "type": "Taunt",
    "perma": true
  },
  {
    "name": "Enemy_W4_Unicorn_Taunt_OnAvatar",
    "realName": "Taunt",
    "aim": "Debuff",
    "desc": "Can only select %CasterName as the target to attack.",
    "type": "Taunt",
    "perma": true
  },
  {
    "name": "Monster_W4_HearsePart_BlackBlood_Enhance",
    "realName": "Conquered Eon",
    "aim": "Other",
    "desc": "Permanently reduces Max HP that can be restored by #1[i]%.",
    "type": "Conquered Eon",
    "perma": true,
    "params": [
      "MDF_DirtyHPRatio"
    ]
  },
  {
    "name": "Monster_W4_Hearse_Sign_Enhance",
    "realName": "Drowning in Terror",
    "aim": "Other",
    "desc": "Increases received damage by #1[i]%. When receiving attacks, there is a chance to be inflicted with Imprisonment. Defeat the corresponding \"Conquer or Be Conquered\" to dispel this effect.",
    "type": "Drowning in Terror",
    "perma": true,
    "params": [
      "MDF_DamageTakenUpRatio"
    ]
  },
  {
    "name": "Monster_W4_Nikadory_RLBoss_DamageUp",
    "realName": "DMG Boost",
    "aim": "Buff",
    "desc": "DMG dealt increases by #1[i]%. This effect can stack.",
    "type": "DMG Boost",
    "perma": true,
    "params": [
      "MDF_DamageUpRatio_PerLayer"
    ]
  },
  {
    "name": "Monster_W4_Nikadory_Brave_Immune",
    "realName": "Immune to Crowd Control",
    "aim": "Buff",
    "desc": "Immune to Crowd Control debuffs.",
    "type": "Immune to Crowd Control",
    "perma": true
  },
  {
    "name": "Enemy_W2_LycanKing_IF_RageStatus",
    "realName": "Full Moon's Furor",
    "aim": "Buff",
    "desc": "Enters the \"Lunar Devourer\" state and gains immunity to action delay effects from targets. While in this state, Hoolay gains \"Irate\" and can use \"Lupine Chase Calls Bloody Gleam.\" This state will be removed when this unit is Weakness Broken.",
    "type": "Entering the \"Full Moon's Furor\" state",
    "perma": true,
    "params": [
      "MDF_SpeedUpRatio",
      "MDF_SpeedUpRatioPerWolf"
    ]
  },
  {
    "name": "Enemy_W2_LycanKing_IF_RageStatusPhase2",
    "realName": "Full Moon's Furor",
    "aim": "Buff",
    "desc": "Enters the \"Lunar Devourer\" state and gains immunity to action delay effects from targets. While in this state, Hoolay gains \"Irate\" and can use \"Lupine Chase Calls Bloody Gleam.\" This state will be removed when this unit is Weakness Broken.",
    "type": "Entering the \"Full Moon's Furor\" state",
    "perma": true,
    "params": [
      "MDF_SpeedUpRatio",
      "MDF_SpeedUpRatioPerWolf"
    ]
  },
  {
    "name": "Enemy_W2_LycanKing_IF_PickUpMarkLycanKing",
    "realName": "Going Solo",
    "aim": "Other",
    "desc": "Currently in the \"Going Solo\" state. Increases DMG dealt by #1[i]% and decreases DMG taken by #2[i]%.",
    "type": "Going Solo",
    "perma": true,
    "params": [
      "MDF_AllDamageTypeAddedRatio",
      "MDF_DamageReduce"
    ]
  },
  {
    "name": "Enemy_W2_LycanKing_IF_DisableAction",
    "realName": "Departed",
    "aim": "Other",
    "desc": "Targets in the Departed state cannot be designated as ability targets and will not appear in the Action Order.",
    "type": "Departed",
    "perma": true
  },
  {
    "name": "Enemy_W2_LycanKing_IF_ChampionMark",
    "realName": "Blood Surge",
    "aim": "Buff",
    "desc": "When a target character with \"Blood Surge\" and their summon enters \"Going Solo,\" they will additionally reduce enemy Toughness and restore HP after attacking. This effect is stackable and is removed when \"Going Solo\" ends.",
    "type": "Blood Surge",
    "perma": true,
    "params": [
      "MDF_DamageStancePerLayer",
      "MDF_HealPercentage"
    ]
  },
  {
    "name": "Enemy_W2_LycanKing_IF_ChampionEnhanceForeverStatus",
    "realName": "Rising War Spirits",
    "aim": "Buff",
    "desc": "DMG dealt by this unit and their summoned targets increases by #1[i]% and Break Effect increases by #2[i]%. This effect is stackable.",
    "type": "Rising War Spirits",
    "perma": true,
    "params": [
      "MDF_AllDamageTypeAddedRatio",
      "MDF_BreakDamageAddedRatioBase"
    ]
  },
  {
    "name": "Enemy_W4_FireProwler_01_Repeat",
    "realName": "Futility",
    "aim": "Other",
    "desc": "Resists Crowd Control debuffs. When \"%DynamicTargetName\" uses \"Demise's Storm\" or \"Fading Fate\" again, if this unit was summoned by this attack and is in the \"Mutual Sacrifice\" state, then this unit will attack together with \"%DynamicTargetName\".",
    "type": null,
    "perma": true
  },
  {
    "name": "Enemy_W4_FireProwler_TimePower",
    "realName": "Calamity Power",
    "aim": "Other",
    "desc": "When using certain abilities, consume all \"Calamity Power\" stacks to increase Hits Per Action.",
    "type": null,
    "perma": true
  },
  {
    "name": "Enemy_W4_FireProwler_01_HPBack",
    "realName": "Enfettered",
    "aim": "Other",
    "desc": "After receiving a killing blow, if \"%CasterName\"'s \"Calamity Power\" stacks are not 0, be instantly resummoned and enter the \"Enfettered\" state, but this causes \"%CasterName\" to lose 1 \"Calamity Power\" stack and a certain proportion of HP.",
    "type": "Enfettered",
    "perma": true
  },
  {
    "name": "Enemy_W4_FireProwler_Charge",
    "realName": "Silent Sorrow",
    "aim": "Other",
    "desc": "Use \"Cry Not For The Discarded\" during the next action.",
    "type": "Silent Sorrow",
    "perma": true
  },
  {
    "name": "Monster_W4_FireProwler_MainStory_05_Effect",
    "realName": "Anaxa's Reinforcement",
    "aim": "Debuff",
    "desc": "DEF decreases by #1[i]%.",
    "type": "DEF Reduction",
    "perma": true,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-585162959\">Enemy_W4_FireProwler_01_Activated01</a>",
    "realName": "Mutual Sacrifice",
    "aim": "Other",
    "desc": "When \"%CasterName\" uses \"Demise's Storm\", also use \"Demise's Storm\" at the same time.",
    "type": "Simultaneously use \"Demise's Storm\"",
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-635495816\">Enemy_W4_FireProwler_01_Activated02</a>",
    "realName": "Mutual Sacrifice",
    "aim": "Other",
    "desc": "When \"%CasterName\" uses \"Fading Fate,\" also use \"Fading Fate\" at the same time.",
    "type": "Simultaneously use \"Fading Fate\"",
    "perma": true
  },
  {
    "name": "Enemy_W4_FireProwler_RallyHP",
    "realName": "Entangled By Agony",
    "aim": "Other",
    "desc": "After absorbing \"Long-Shattered Vessel,\" restores the HP consumed to summon the current \"Long-Shattered Vessel.\" After \"Long-Shattered Vessel\" is defeated, this unit cannot restore the HP consumed used to summon the current \"Long-Shattered Vessel\" again.",
    "type": null,
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1650122283\">Enemy_W4_Manta_Passive</a>",
    "realName": "Respite By The Waters",
    "aim": "Other",
    "desc": "Advances action after taking a certain number of attacks from Basic ATK, Skill, Ultimate, or Memosprite Skill.",
    "type": null,
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-1491117859\">Enemy_W4_Manta_Virus_Avatar</a>",
    "realName": "Black Tide Fever",
    "aim": "Debuff",
    "desc": "#1[i] DMG is taken in the form of DoT over a certain number of turns. Wind Shear, Burn, Shock, and Bleed DoTs are received at the start of every turn. Immediately dispelled for this unit when HP is fully restored, negating this DoT.",
    "type": "Black Tide Fever",
    "perma": false,
    "params": [
      "MDF_TotalDamageValue"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1240691682\">Enemy_W4_Manta_DefenseDown</a>",
    "realName": "Inebriated Daze",
    "aim": "Debuff",
    "desc": "DEF decreases by #1[i]% and All-Type RES decreases by #2[i]%.",
    "type": "Inebriated Daze",
    "perma": false,
    "params": [
      "MDF_PropertyValue",
      "MDF_PropertyValue2"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"233383223\">Enemy_W4_Manta_PassiveUp_Sub</a>",
    "realName": "Revel in Destruction",
    "aim": "Other",
    "desc": "Number of hits to advance action decreases. When taking DMG or using certain abilities to deal DMG, some DMG will be taken in the form of \"Black Tide Fever\" over a specific number of turns. When the \"Revel in Destruction\" countdown's turn begins, all enemy units will have their \"Revel in Destruction\" state dispelled.",
    "type": "Revel in Destruction",
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-1741196770\">Enemy_W4_Manta_Charge</a>",
    "realName": "Yearning for a Shared Dance",
    "aim": "Other",
    "desc": "Uses \"Embrace From the Waves\" in every action. Dispelled when Weakness is broken.",
    "type": "Yearning for a Shared Dance",
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-213110193\">Standard_FastAction_Permanent</a>",
    "realName": "Stormride",
    "aim": "Buff",
    "desc": "Targets affected by \"Stormride\" will immediately take action after the turn ends. Turns triggered by \"Stormride\" cannot be triggered again. This effect is dispelled after being inflicted with Weakness Break.",
    "type": "Stormride",
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-2024056044\">Monster_W4_Pollux_ThirstBlood</a>",
    "realName": "Hastened Death",
    "aim": "Debuff",
    "desc": "Receives DMG at the start of the turn. The higher the target's current HP percentage, the more DMG they receive. This DMG is \"Non-fatal.\"",
    "type": "DoT",
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"2034261592\">Monster_W4_PolluxPart_Shield</a>",
    "realName": "Overdue Obituary",
    "aim": "Other",
    "desc": "\"The Living Shan't Flee\" enhances to \"The Dead Shan't Avoid.\"",
    "type": "Enhance",
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-977406110\">Monster_W4_Pollux_BloodPool</a>",
    "realName": "Dream of Demise",
    "aim": "Other",
    "desc": "When ally targets' HP reduces, accumulates \"Desperate Bubble.\" When \"Desperate Bubble\" reaches the limit, this unit action advances and enters \"Fragrance of Death\" state in the next turn.",
    "type": null,
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-84648127\">Monster_W4_Pollux_BloodRange</a>",
    "realName": "Indulging Slumber",
    "aim": "Other",
    "desc": "When this target deals DMG to enemy targets, decreases DMG received by enemy targets by #1[i]%. Restore HP to an ally target until it reaches #2[i] to dispel this effect.",
    "type": "DMG Reduction",
    "perma": true,
    "params": [
      "MDF_ShowValue1",
      "MDF_ShowValue2"
    ]
  },
  {
    "name": "Enemy_W2_LycanKing_IF_ChampionHPEnhance",
    "realName": "Last Stand",
    "aim": "Buff",
    "desc": "Max HP increases by #1[i] and ATK increases by #2[i]. This effect will be removed when the \"Going Solo\" state ends.",
    "type": "Last Stand",
    "perma": true,
    "params": [
      "MDF_HPAddDelta",
      "MDF_AttackDelta"
    ]
  },
  {
    "name": "Enemy_W4_FireProwler_AllDamageReduce",
    "realName": "DMG Reduction",
    "aim": "Buff",
    "desc": "Each stack reduces DMG received by #1[i]%. 1 stack is lost after 1 \"Long-Shattered Vessel\" is defeated.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-501677850\">Monster_W4_Pollux_Strengthen_Property</a>",
    "realName": "Weakness Protected",
    "aim": "Other",
    "desc": "Before \"Pollux\" takes their next action, their Toughness cannot be reduced and is immune to action delay effects inflicted by targets.",
    "type": null,
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"471853411\">Standard_Monster_AllDamageReduce</a>",
    "realName": "DMG Mitigation",
    "aim": "Buff",
    "desc": "DMG taken decreases by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Enemy_XP_Elite01_02_Charge_Enhance",
    "realName": "Ominous Degeneration",
    "aim": "Other",
    "desc": "Uses \"Torrential Surge\" in the next action.",
    "type": null,
    "perma": true
  },
  {
    "name": "Enemy_W2_Lycan_RagePhase1Mark",
    "realName": "Bloodlust",
    "aim": "Other",
    "desc": "Apply #1[i] stack(s) of Bloodlust. The Bloodlust stacks and stack limits for enemy units that can enter Moon Rage will be kept consistent.",
    "type": "Bloodlust",
    "perma": true,
    "params": [
      "MDF_Layer"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-771052398\">Enemy_W2_Beast01_04_AbilityP02_GoldBlood_Enhance</a>",
    "realName": "Hemotort Stain",
    "aim": "Other",
    "desc": "After attacking, applies \"Hemotort Corruption\" based on the amount of DMG taken (not offset by Shield) to the selected characters.",
    "type": "Hemotort Stain",
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1128925615\">Enemy_W2_Beast01_04_AbilityP02_GoldBlood_DOT</a>",
    "realName": "Hemotort Corruption",
    "aim": "Debuff",
    "desc": "Take a set amount of #1[i] Imaginary DMG at the beginning of the turn.",
    "type": "Hemotort Corruption",
    "perma": false,
    "params": [
      "MDF_DamageValue"
    ]
  },
  {
    "name": "Enemy_W2_Valkyrie01_02_AbilityP01",
    "realName": "Bitter Fracture",
    "aim": "Other",
    "desc": "When other friendly units are defeated, this unit immediately takes action and uses \"Fire of Vengeance\" once. When there are multiple \"Black Tide's Corroded Axe\" on the battlefield, only 1 \"Black Tide's Corroded Axe\"'s \"Bitter Fracture\" Talent can be triggered.",
    "type": null,
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"839686414\">Enemy_W4_Serpent_01_Charge02_Target_Sub</a>",
    "realName": "Accomplice",
    "aim": "Other",
    "desc": "\"%DynamicTargetName\" takes damage when using \"Hemotort Decapitation.\"",
    "type": "Accomplice",
    "perma": true
  },
  {
    "name": "Enemy_W4_Griffin_01_Ability02_ShadowControl",
    "realName": "Chaotic Order",
    "aim": "Other",
    "desc": "\"Archer of the Dark Sun\" does not actively take action, and will only attack after the \"Dark Sun Gryphon\" that summoned this unit attacks. If this unit is under Crowd Control debuffs or Weakness Broken state at this point, this changes to dispelling the Crowd Control debuffs or Weakness Broken state on this unit.",
    "type": null,
    "perma": true
  },
  {
    "name": "Enemy_W4_Griffin_01_Ability03_Enhance",
    "realName": "The Dead Winds Cometh",
    "aim": "Other",
    "desc": "Uses \"Carol of Heat Death\" in the next action.",
    "type": "Enhance",
    "perma": true
  },
  {
    "name": "Modifier_Monster_W4_DawnsEye_WheaterMarkAbility04",
    "realName": "Ionization",
    "aim": "Buff",
    "desc": "Uses \"Wrath, Rend of Eternal Sky\" in the next action and additionally deals DMG based on the number of Thunderclouds possessed. Current Thundercloud(s): #1[i].",
    "type": null,
    "perma": true,
    "params": [
      "MDF_ThunderDark"
    ]
  },
  {
    "name": "Modifier_Monster_W4_DawnsEye_01_WheaterRognarokSub",
    "realName": "Rot",
    "aim": "Debuff",
    "desc": "Maximum Restorable HP decreases by #1[i].",
    "type": "Rot",
    "perma": true,
    "params": [
      "MDF_DamageValueFinal"
    ]
  },
  {
    "name": "Modifier_Monster_W4_DawnsEye_01_MaxHPAdd",
    "realName": "Flame-Chase",
    "aim": "Buff",
    "desc": "Max HP increases by #1[i].",
    "type": "Flame-Chase",
    "perma": true,
    "params": [
      "MDF_HPDelta",
      "MDF_HealAddRatio"
    ]
  },
  {
    "name": "Modifier_Monster_W4_DawnsEye_01_HOT",
    "realName": "Eagerness",
    "aim": "Buff",
    "desc": "Restores this unit's HP by #1[i] at the start of every turn, and increases DMG dealt by #2[i]%.",
    "type": "Eagerness",
    "perma": true,
    "params": [
      "MDF_HPDelta",
      "MDF_DamageAddRatio"
    ]
  },
  {
    "name": "Modifier_Monster_W4_DawnsEye_01_MuteSpeed",
    "realName": "Tide-Corrosion",
    "aim": "Debuff",
    "desc": "Cannot be selected, cannot take action.",
    "type": "Tide-Corrosion",
    "perma": true
  },
  {
    "name": "Enemy_W4_DawnsEye_01_Ability03_Charge",
    "realName": "The Dark Tides Cometh",
    "aim": "Other",
    "desc": "The next attack will inflict \"Unmaking Ashes: Godsfall\" on all allies.",
    "type": null,
    "perma": true
  },
  {
    "name": "Modifier_Monster_W4_DawnsEye_01_WheaterRognarokTotalDamage",
    "realName": "Black Tide Sync Rate",
    "aim": "Other",
    "desc": "The current Charge ratio of \"Eye of Twilight\" is #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_ChargePercentage"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1963095263\">Standard_MinionsSuperArmor_IF</a>",
    "realName": "Steadfast Safeguard",
    "aim": "Buff",
    "desc": "Currently, %CasterName is in the \"Steadfast Safeguard\" state, this unit's DMG received decreases by #1[i]%.",
    "type": "Steadfast Safeguard",
    "perma": true,
    "params": [
      "MDF_AllDamageTypeResistance"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-178829988\">Standard_MinionsSuperArmorBreak_IF</a>",
    "realName": "Safeguard Breach",
    "aim": "Debuff",
    "desc": "Currently, %CasterName is in the \"Safeguard Breach\" state, this unit's DMG received increases by #1[i]%.",
    "type": "Safeguard Breach",
    "perma": true,
    "params": [
      "MDF_AllDamageTypeTakenRatio"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-919299430\">Enemy_W4_Serpent_Charge</a>",
    "realName": "Whirl",
    "aim": "Other",
    "desc": "After being hit by attacks from target units, uses \"Torque Counter\" and loses 1 stack of \"Whirl.\" During any unit's turn, each target unit can only trigger this effect once. When the \"Whirl\" stack reaches 0, the Charging state is dispelled. When Weakness is Broken, this unit loses all \"Whirl\" stacks.",
    "type": "Whirl",
    "perma": true
  },
  {
    "name": "Monster_W2_Feixiao_IF_AlreadyConnect",
    "realName": "Resonate",
    "aim": "Other",
    "desc": "In Resonate State, removes all action bar alteration effects except for this unit's. When Weakness is Broken, all targets' actions are advanced.",
    "type": "Resonate",
    "perma": true
  },
  {
    "name": "Monster_W2_Feixiao_IF_UltraConnect",
    "realName": "Resonate",
    "aim": "Other",
    "desc": "In Resonate State, removes all action bar alteration effects except for this unit's. When Weakness is Broken, all targets' actions are advanced.",
    "type": "Resonate",
    "perma": true
  },
  {
    "name": "Enemy_Monster_W4_DawnsEye_WheaterSunnyAllDamageTypeAddedRatio",
    "realName": "DMG Boost",
    "aim": "Buff",
    "desc": "DMG dealt increases by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_AllDamageTypeAddedRatioCurrent"
    ]
  },
  {
    "name": "Enemy_W4_Claymore_01_Ability02_DeadLock_Target_Servant",
    "realName": "Duel",
    "aim": "Other",
    "desc": "SPD increases by #1[i]%. When receiving DMG from targets outside the Duel state, reduces DMG by #2[i]%. Obtains 1 stack of \"Morale\" after each attack.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_SpeedAddedRatio",
      "MDF_DamageReduce"
    ]
  },
  {
    "name": "AvatarChange_W2_Lycan_RageMark",
    "realName": "Bloodthirst",
    "aim": "Buff",
    "desc": "#1[i] \"Bloodthirst\" stacks obtained. When \"Bloodthirst\" stacks are maxed, uses \"Sky Devourer\" and dispels the \"Malediction\" state on %DynamicTargetName.",
    "type": "Bloodthirst",
    "perma": true,
    "params": [
      "MDF_Layer"
    ]
  },
  {
    "name": "AvatarChange_W2_Lycan_SheepStatus",
    "realName": "Malediction",
    "aim": "Other",
    "desc": "This target is in the Departed state. They cannot be designated as an ability target and will not appear in the Action Order.",
    "type": null,
    "perma": true
  },
  {
    "name": "AvatarChange_W2_Lycan_PassiveAbility",
    "realName": "Soul Pact",
    "aim": "Other",
    "desc": "When this unit is defeated, %DynamicTargetName will also be knocked down.",
    "type": null,
    "perma": true
  },
  {
    "name": "AvatarChange_W2_Lycan_DOT_Bleed",
    "realName": "Bleed",
    "aim": "Debuff",
    "desc": "Takes Physical DMG at the start of each turn for a certain number of turns.",
    "type": "Bleed",
    "perma": false
  },
  {
    "name": "Enemy_W4_DawnsEye_PartBlock",
    "realName": "Marine Layer",
    "aim": "Other",
    "desc": "Currently unselectable.",
    "type": null,
    "perma": true
  },
  {
    "name": "Modifier_Monster_W4_DawnsEye_WheaterRognarokTrueDamage",
    "realName": "Skygash",
    "aim": "Buff",
    "desc": "After targets attack, deals True DMG based on \"Black Tide Sync Rate.\" This DMG is \"Non-fatal.\"",
    "type": null,
    "perma": true
  },
  {
    "name": "Enemy_W4_FireProwler_01_IF_HPBack",
    "realName": "Shackled",
    "aim": "Other",
    "desc": "After receiving a killing blow, if \"%CasterName\" is in the \"Shackle Shatter\" state, be instantly resummoned and enter the \"Shackled\" state, but this causes \"%CasterName\" to lose 1 \"Calamity Power\" stack and a certain proportion of HP.",
    "type": "Shackled",
    "perma": true
  },
  {
    "name": "Enemy_W4_FireProwler_IF_Charge_Ability031",
    "realName": "Dying Sobs",
    "aim": "Other",
    "desc": "Uses \"But Suffering is Essential\" in the next action.",
    "type": "Dying Sobs",
    "perma": true
  },
  {
    "name": "Enemy_W4_FireProwler_IF_Limit",
    "realName": "Shackle Shatter",
    "aim": "Other",
    "desc": "Alternates between using \"Dying Sobs\" and \"But Suffering is Essential.\" \"Dying Sobs\" summons \"Long-Shattered Vessel\" and enters Charging state, and \"But Suffering is Essential\" deals Powerful Attacks. \"Calamity Power\" stacks increases the Hits Per Action of Powerful Attacks. After destroying \"Long-Shattered Vessel,\" Toughness and \"Calamity Power\" stacks can be reduced. In the second phase, \"Silent Sorrow\" and \"Cry Not for the Discarded\" will be used, and \"Calamity Power\" stacks increases.",
    "type": "Shackle Shatter",
    "perma": true
  },
  {
    "name": "Enemy_W4_FireProwler_01_IF_Bonus",
    "realName": "Complete Vessel",
    "aim": "Other",
    "desc": "After launching an attack, it is absorbed by \"%CasterName\" to grant 1 stack of \"Calamity Power.\" When an ally target defeats a target, immediately grants 1 extra turn and increases DMG dealt.",
    "type": null,
    "perma": true
  },
  {
    "name": "Enemy_W4_FireProwler_01_IF_Bonus_AllDamageTypeAddedRatio",
    "realName": "DMG Boost",
    "aim": "Buff",
    "desc": "Each stack increases DMG dealt by #1[i]%.",
    "type": "DMG Boost",
    "perma": false,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Enemy_W4_FireProwler_01_IF_Activated01",
    "realName": "Mutual Sacrifice",
    "aim": "Other",
    "desc": "When \"%CasterName\" uses \"Demise's Storm,\" also use \"Demise's Storm\" at the same time.",
    "type": "Simultaneously use \"Demise's Storm\"",
    "perma": true
  },
  {
    "name": "Enemy_W4_FireProwler_01_IF_Activated02",
    "realName": "Mutual Sacrifice",
    "aim": "Other",
    "desc": "When \"%CasterName\" uses \"Fading Fate,\" also use \"Fading Fate\" at the same time.",
    "type": "Simultaneously use \"Fading Fate\"",
    "perma": true
  },
  {
    "name": "Modifier_StageSpecialAbility_10441211_Block",
    "realName": "Golden Ring",
    "aim": "Buff",
    "desc": "Nullifies all DMG received. After being attacked, 1 stack of this effect is removed.",
    "type": "Golden Ring",
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-1713527003\">Enemy_W4_Unicorn_01_UltraReady</a>",
    "realName": "Fetal Movement of the Ocean",
    "aim": "Other",
    "desc": "In this state, \"Cyclonic Swarm Mother's\" Toughness cannot be reduced. \"Cyclonic Swarm Mother\" will use \"Rain Is Born to Fall\". Eliminate all \"Mirage Fizzle Kids\" to dispel this state.",
    "type": "Enhance",
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-565541120\">Enemy_W4_Unicorn_01_MuteSpeed</a>",
    "realName": "Breeding Frenzy",
    "aim": "Other",
    "desc": "In this state, DMG taken from attacks is reduced. When action advances, HP will be consumed. Summons \"Mirage Fizzle Kid\" and slightly delays \"Incubation\" action. When \"Incubation\" takes action, all remaining \"Mirage Fizzle Kid\" will be summoned.",
    "type": "Incubation",
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"2140507283\">MWMonster_W4_Unicorn_01_BlockDamage</a>",
    "realName": "Maelstrom's Eye",
    "aim": "Buff",
    "desc": "Immune to all DMG except DoTs. This status is dispelled after being attacked.",
    "type": "Barrier",
    "perma": false
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1035214462\">Enemy_SW_Minion01_03_CommandMark</a>",
    "realName": "Mirage Rush",
    "aim": "Other",
    "desc": "Before \"Mirage Rush\" state is dispelled, other \"Mirage Fizzle Kids\" will prioritize attacking the locked-on target. This state is dispelled when this unit is Broken or receives a killing blow.",
    "type": "Charge",
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-360637105\">Enemy_SW_Minion01_03_CommandMarkTarget</a>",
    "realName": "Shadow of the Grand Fair",
    "aim": "Other",
    "desc": "Locked on by all \"Mirage Fizzle Kids\" as an attack target.",
    "type": "Aggravate",
    "perma": true
  },
  {
    "name": "Monster_W4_HearsePart_Soul_B",
    "realName": "Conquer",
    "aim": "Other",
    "desc": "\"Mydeimos, Lance of Fury\" conquered %CasterName's soul and will take #1[i]% more DMG from %CasterName's attacks. After being defeated by targets, dispel \"Conquered\" on %CasterName.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_DamageTakenUpRatio"
    ]
  },
  {
    "name": "Monster_W4_Nikadory_Ability05Split",
    "realName": "Forthcoming Strife",
    "aim": "Other",
    "desc": "Distribute the \"All Realms Leveled, All Legions to Dust\" attack unleashed by \"Savage God, Mad King, Incarnation of Strife.\"",
    "type": "Distributed Attack",
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1709215218\">Monster_W4_Pollux_Strengthen</a>",
    "realName": "Fragrance of Death",
    "aim": "Other",
    "desc": "Increases SPD by #1[i]%. Attacks against \"Pollux\" or \"The Long Arms of Sorrow\" can reduce \"Desperate Bubble\" and restore allies' HP. When \"Desperate Bubble\" depletes, dispels \"Fragrance of Death.\"",
    "type": "Enhance",
    "perma": true,
    "params": [
      "MDF_ShowValue1"
    ]
  },
  {
    "name": "Enemy_W4_DawnsEye_B_PartHP",
    "realName": "All As One",
    "aim": "Other",
    "desc": "When receiving DMG, \"Sublime, Radiant, Avatar of the Sky\" loses an equal amount of HP.",
    "type": null,
    "perma": true
  },
  {
    "name": "MModifier_Monster_W3_TV_Side1Scot",
    "realName": "Succor",
    "aim": "Other",
    "desc": "Skott can use the \"Succor\" ability. After he has been attacked, switches to the \"Curse\" state.",
    "type": null,
    "perma": true
  },
  {
    "name": "MModifier_Monster_W3_TV_Side2Scot",
    "realName": "Curse",
    "aim": "Other",
    "desc": "Skott can use the \"Curse\" ability. After he has been attacked, switches to the \"Succor\" state.",
    "type": null,
    "perma": true
  },
  {
    "name": "MModifier_Monster_W3_TV_02_Side1Scot",
    "realName": "Mocked",
    "aim": "Other",
    "desc": "Skott members can use \"Mocked\" abilities. After they are attacked, they will not switch states.",
    "type": null,
    "perma": true
  },
  {
    "name": "MModifier_Monster_W3_TV_02_Side2Scot",
    "realName": "Rabid",
    "aim": "Other",
    "desc": "Skott members can use \"Rabid\" abilities. After they are attacked, switches to the \"Mocked\" state.",
    "type": null,
    "perma": true
  },
  {
    "name": "MModifier_Monster_W3_TV_02_FaceLockScot",
    "realName": "Overworked",
    "aim": "Other",
    "desc": "While in Overworked mode, this unit will not change its state when attacked.",
    "type": "Overworked",
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-1846949450\">Enemy_W4_Turkey_Ability02_Power</a>",
    "realName": "Hemotort Resonance",
    "aim": "Other",
    "desc": "After other \"Ichor Memosprites: Pheasant\" in the \"Hemotort Resonance\" state attack, this unit will attack together with them. Dispels when Weakness is broken.",
    "type": "Hemotort Resonance",
    "perma": true
  },
  {
    "name": "Enemy_W4_FireProwler_11_Main03_HPBack",
    "realName": "Shackled",
    "aim": "Other",
    "desc": "After receiving a killing blow, if \"%CasterName\" is in the \"Shackle Shatter\" state, be instantly resummoned and enter the \"Shackled\" state, but this causes \"%CasterName\" to lose 1 \"Calamity Power\" stack and a certain proportion of HP.",
    "type": "Shackled",
    "perma": true
  },
  {
    "name": "Enemy_W4_FireProwler_10_Main03_Limit",
    "realName": "Shackle Shatter",
    "aim": "Other",
    "desc": "Alternates between using \"Silent Sorrow\" and \"Cry Not for the Discarded.\" Defeat \"Long-Shattered Vessel\" to reduce Toughness and \"Calamity Power\" stacks.",
    "type": "Shackle Shatter",
    "perma": true
  },
  {
    "name": "Enemy_W4_FireProwler_11_Main03_Bonus",
    "realName": "Complete Vessel",
    "aim": "Other",
    "desc": "After launching an attack, it is absorbed by \"%CasterName\" to grant 1 stack of \"Calamity Power.\" When an ally character defeats a target, immediately grants 1 extra turn.",
    "type": null,
    "perma": true
  },
  {
    "name": "Enemy_W4_FireProwler_11_Main03_Bonus_AllDamageTypeAddedRatio",
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
    "name": "Enemy_W4_FireProwler_11_Main03_Activated01",
    "realName": "Mutual Sacrifice",
    "aim": "Other",
    "desc": "When \"%CasterName\" uses \"Demise's Storm,\" also use \"Demise's Storm\" at the same time.",
    "type": "Simultaneously use \"Demise's Storm\"",
    "perma": true
  },
  {
    "name": "Enemy_W4_FireProwler_11_Main03_Activated02",
    "realName": "Mutual Sacrifice",
    "aim": "Other",
    "desc": "When \"%CasterName\" uses \"Fading Fate,\" also use \"Fading Fate\" at the same time.",
    "type": "Simultaneously use \"Fading Fate\"",
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-303636173\">Monster_W4_Theoroi_Creation</a>",
    "realName": "Potential Realization",
    "aim": "Buff",
    "desc": "DMG dealt increases by #1[i]%, HP is restored by #2[i]% at the start of turn.",
    "type": "Potential Realization",
    "perma": true,
    "params": [
      "MDF_DamageUpRatio",
      "MDF_HPHealRatio"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-2105282223\">Monster_W4_Theoroi_Reversion</a>",
    "realName": "Antinomy",
    "aim": "Other",
    "desc": "Ultimate is activated. Using Ultimate consumes HP equal to #1[i]% of this unit's Max HP, this DMG prioritizes Shield effect reduction and is Non-fatal. If Ultimate is not used during the effect duration, Energy will be regenerated to #2[i] points when the effect ends.",
    "type": "Antinomy",
    "perma": true,
    "params": [
      "MDF_CostHPRatio",
      "MDF_CurrentSpecialSP"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"688363638\">Monster_W4_Theoroi_Destruction</a>",
    "realName": "Retribution of \"Law\"",
    "aim": "Other",
    "desc": "Lose #1[i]% HP after each action.",
    "type": "Retribution of \"Law\"",
    "perma": true,
    "params": [
      "MDF_LoseHPRatio"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-1039726651\">Monster_W4_Theoroi_Destruction_Self</a>",
    "realName": "Loading: Mythos",
    "aim": "Other",
    "desc": "Use \"Query: Prime Mover's Outcome\" after #1[i] more instance(s) of any of the following: enemy target defeats, ally character knock-downs, or memosprite disappearances.",
    "type": "Loading: Mythos",
    "perma": true,
    "params": [
      "MDF_EntityCountRemain"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"534638248\">Monster_W4_Theoroi_Part1</a>",
    "realName": "To Logos",
    "aim": "Other",
    "desc": "Use \"SET Proof_Method=Black_Tide\" after #1[i] more instances of either of the following: enemy target generations or ally memosprite summons.",
    "type": "To Logos",
    "perma": true,
    "params": [
      "MDF_CurrentCountRemain"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1881355591\">Monster_W4_Theoroi_Reload</a>",
    "realName": "Infinite Recursion",
    "aim": "Buff",
    "desc": "Each stack increases \"Query: Prime Mover's Outcome\" DMG by #1[i]%, and additionally inflicts Entanglement on #2[i] target(s).",
    "type": "Infinite Recursion",
    "perma": true,
    "params": [
      "MDF_PropertyValue",
      "MDF_Count"
    ]
  },
  {
    "name": "MModifier_Monster_W4_Claymore_LocalLegend_DeathCountDown_Monster_Display",
    "realName": "HP Count",
    "aim": "Other",
    "desc": "Target is immediately knocked down after receiving #1[i] attack(s).",
    "type": null,
    "perma": true,
    "params": [
      "MDF_EntityScore"
    ]
  },
  {
    "name": "MModifier_Monster_W4_Claymore_LocalLegend_DeathCountDown_Display",
    "realName": "HP Count",
    "aim": "Other",
    "desc": "Target is immediately knocked down after receiving #1[i] attack(s).",
    "type": null,
    "perma": true,
    "params": [
      "MDF_EntityScore"
    ]
  },
  {
    "name": "MModifier_W4_Griffin_LocalLegend_Revenge",
    "realName": "DMG Boost",
    "aim": "Other",
    "desc": "DMG dealt increases by #1[i]%.",
    "type": "DMG Boost",
    "perma": true,
    "params": [
      "MDF_ShowValue1"
    ]
  },
  {
    "name": "Enemy_XP_Elite01_02_LocalLegend_Ability03_Mark",
    "realName": "Overloadable",
    "aim": "Other",
    "desc": "Target's HP cannot be reduced below 1, and any excess damage beyond an amount of their current HP will be converted to \"HP Overload.\" When receiving healing, prioritizes restoring their \"HP Overload.\"",
    "type": "Overloadable",
    "perma": true
  },
  {
    "name": "Enemy_XP_Elite01_02_LocalLegend_DamageAdded",
    "realName": "DMG Boost",
    "aim": "Buff",
    "desc": "DMG dealt increases by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_ShowValue1"
    ]
  },
  {
    "name": "Enemy_AML_Minion02_01_LocalLegend_NegativeBlood",
    "realName": "HP Overload",
    "aim": "Other",
    "desc": "Target has accumulated \"HP Overload,\" healing #1[i] HP will remove this state. When the \"Overload Settlement\" turn begins, the target will receive fatal damage.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_NegativeBlood"
    ]
  },
  {
    "name": "Enemy_AML_Minion02_01_LocalLegend_NegativeBlood_Avatar",
    "realName": "HP Overload",
    "aim": "Other",
    "desc": "Target has accumulated \"HP Overload,\" healing #1[i] HP will remove this state. When the \"Overload Settlement\" turn begins, the target will receive fatal damage.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_NegativeBlood"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-976528853\">Enemy_W4_Pollux_IF_ThirstBlood</a>",
    "realName": "Hastened Death",
    "aim": "Debuff",
    "desc": "Receives DMG at the start of the turn. The higher the target's current HP percentage, the more DMG they receive.",
    "type": "DoT",
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-2030876773\">Enemy_W4_PolluxPart_IF_Shield</a>",
    "realName": "Overdue Obituary",
    "aim": "Other",
    "desc": "\"The Living Shan't Flee\" enhances to \"The Dead Shan't Avoid.\"",
    "type": "Enhance",
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1085805355\">Enemy_W4_Pollux_IF_Strengthen</a>",
    "realName": "Fragrance of Death",
    "aim": "Other",
    "desc": "Increases SPD by #1[i]%. Attacks against \"Guide of Withering and Decay\" or \"The Long Arms of Sorrow\" can reduce \"Desperate Bubble\" and restore allies' HP. When \"Desperate Bubble\" depletes, dispels \"Fragrance of Death.\"",
    "type": "Enhance",
    "perma": true,
    "params": [
      "MDF_ShowValue1"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"267358493\">Enemy_W4_Pollux_IF_AbilityP01_NegativeBlood_Target</a>",
    "realName": "Overloadable",
    "aim": "Other",
    "desc": "Target's HP cannot be reduced below 1, and any excess damage beyond an amount of their current HP will be converted to \"HP Overload.\" When receiving healing, prioritizes restoring their \"HP Overload.\"",
    "type": "Overloadable",
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"235074644\">Enemy_W4_Pollux_IF_AbilityP01_NegativeBlood_Target_Display</a>",
    "realName": "Death Rattle",
    "aim": "Other",
    "desc": "Target has accumulated \"HP Overload.\" Heal #1[i] HP to remove this state. DMG dealt is reduced by #2[i]%, and Weakness Break Efficiency is reduced by #3[i]%. When its duration ends, the target will receive fatal damage. Remaining duration: #4[i] turn(s).",
    "type": null,
    "perma": true,
    "params": [
      "MDF_NegativeBlood",
      "MDF_FatigueRatio",
      "MDF_StanceBreakDownRatio",
      "MDF_LifetimeDisplay"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-2031085573\">Enemy_W4_PolluxPart_IF_MinionsSuperArmor</a>",
    "realName": "Physical Enhancement",
    "aim": "Buff",
    "desc": "\"Guide of Withering and Decay\" is currently in \"Steadfast Safeguard\" state, this unit's DMG received decreases by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_AllDamageReduce"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"129075822\">Enemy_W4_PolluxPart_IF_MinionsSuperArmorBreak</a>",
    "realName": "Physical Falter",
    "aim": "Debuff",
    "desc": "\"Guide of Withering and Decay\" is currently in \"Safeguard Breach\" state, this unit's DMG received increases by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_AllDamageTypeTakenRatio"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1112261788\">Enemy_W4_PolluxPart_IF_Reflex</a>",
    "realName": "Corrosive Retaliation",
    "aim": "Other",
    "desc": "After attacking this target, the attacker will receive minor Quantum \"Atrophy DMG.\"",
    "type": "Corrosive Retaliation",
    "perma": true
  },
  {
    "name": "Enemy_W3_Sam_01_Enhance",
    "realName": "Gene Duplication",
    "aim": "Buff",
    "desc": "SPD increases by #1[i]%.",
    "type": "Enhance",
    "perma": true,
    "params": [
      "MDF_SpeedUpRatio"
    ]
  },
  {
    "name": "Enemy_W3_Sam_01_TakenDamage",
    "realName": "Vulnerability",
    "aim": "Debuff",
    "desc": "DMG taken increases by #1[i]%. This effect is dispelled when this unit recovers from Weakness Break state.",
    "type": "Vulnerability",
    "perma": true,
    "params": [
      "MDF_DamageTakenUpRatio_PerLayer"
    ]
  },
  {
    "name": "Enemy_W3_Sam_01_Shield",
    "realName": "Whirling Carapace",
    "aim": "Buff",
    "desc": "After \"Harbinger of Death: Swarm Nightmare\" is attacked, a portion of the reduced HP is converted into \"Corrosion.\" When \"Harbinger of Death: Swarm Nightmare\" uses \"Primordial Tide, Swarm of Death,\" this unit will restore HP equal to the amount of Corrosion.",
    "type": null,
    "perma": true
  },
  {
    "name": "Enemy_W3_Sam_01_Ability04Target",
    "realName": "Nemesis",
    "aim": "Other",
    "desc": "Increases Break Effect by #1[i]%. When attacking an enemy target in the \"Rapid Evolution\" state, ignores the \"Rapid Evolution\" effect that prevents attackers from dealing CRIT Hits. \"Juvenile Sting\" will prioritize attacking ally characters in the \"Nemesis\" state.",
    "type": "Nemesis",
    "perma": true,
    "params": [
      "MDF_BreakDamageAddedRatioBase"
    ]
  },
  {
    "name": "Enemy_W3_Sam_01_Ability04TargetServant",
    "realName": "Nemesis",
    "aim": "Other",
    "desc": "Increases Break Effect by #1[i]%. When attacking enemy targets in the \"Rapid Evolution\" state, ignores the \"Rapid Evolution\" effect that prevents attackers from dealing CRIT Hits.",
    "type": "Nemesis",
    "perma": true,
    "params": [
      "MDF_BreakDamageAddedRatioBase"
    ]
  },
  {
    "name": "Enemy_W3_Sam_01_Ability04UnselectableMark",
    "realName": "Rapid Evolution",
    "aim": "Other",
    "desc": "When attacked by ally targets not in the \"Nemesis\" state, cannot receive CRIT Hits.",
    "type": "Rapid Evolution",
    "perma": true
  },
  {
    "name": "Enemy_W4_Claymore_01_LocalLegend_BlackCurse_Active",
    "realName": "Black Tide Duel",
    "aim": "Other",
    "desc": "This target can only attack \"Black Tide Creature\" and can only be attacked by \"Black Tide Creature.\"",
    "type": null,
    "perma": true
  },
  {
    "name": "Enemy_W4_Claymore_01_LocalLegend_BlackCurse_InActive",
    "realName": "Black Tide Duel",
    "aim": "Other",
    "desc": "This target can only attack \"Black Tide Creature\" and can only be attacked by \"Black Tide Creature.\"",
    "type": null,
    "perma": true
  },
  {
    "name": "Enemy_W4_Claymore_01_LocalLegend_Fatigue",
    "realName": "DMG Reduction",
    "aim": "Other",
    "desc": "When this target deals DMG to enemy targets, the DMG received by enemy targets is reduced by #1[i]%. This state is removed when the \"Corrosion\" state is removed.",
    "type": "DMG Reduction",
    "perma": true,
    "params": [
      "MDF_ShowValue1"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"2001837227\">Monster_W4_Theoroi_DamageTakenUp</a>",
    "realName": "Corporeal",
    "aim": "Debuff",
    "desc": "DMG received increases by #1[i]%. This effect is stackable.",
    "type": "Corporeal",
    "perma": false,
    "params": [
      "MDF_DamageTakenUpRatio_PerLayer"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-1447914838\">Enemy_W4_Manta_Virus_Monster</a>",
    "realName": "Black Tide Fever",
    "aim": "Debuff",
    "desc": "#1[i] DMG is taken in the form of DoT over a certain number of turns. Wind Shear, Burn, Shock, and Bleed DoTs are received at the start of every turn. Immediately dispelled for this unit when \"Revel in Destruction\" state ends, negating this DoT.",
    "type": "Black Tide Fever",
    "perma": false,
    "params": [
      "MDF_TotalDamageValue"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-1922828191\">Enemy_W4_Serpent_01_Passive_Sub2</a>",
    "realName": "Expedite Verdict",
    "aim": "Other",
    "desc": "Takes #1[i]% more DMG. Dispelled when recovering from the Weakness Break state.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_AllDamageTypeTakenRatio"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1300638915\">Enemy_W4_Unicorn_01_SummonMonsterWeak</a>",
    "realName": "Weakling",
    "aim": "Debuff",
    "desc": "Due to premature hatching, decreases DEF by #1[i]%.",
    "type": "Weakened",
    "perma": true,
    "params": [
      "MDF_DefenceAddedRatio"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-740454395\">Enemy_W4_Pollux_IF_BloodPool</a>",
    "realName": "Dream of Demise",
    "aim": "Other",
    "desc": "When ally targets' HP reduces, accumulates \"Desperate Bubble.\" When \"Desperate Bubble\" reaches the limit, this unit enters the \"Fragrance of Death\" state.",
    "type": null,
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1575455810\">Enemy_W4_Manta_LocalLegend_Statues</a>",
    "realName": "Respite By The Waters",
    "aim": "Other",
    "desc": "After receiving a certain number of attacks from the targets, immediately uses \"Psychedelic Elegy.\"",
    "type": null,
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1965379982\">Enemy_W4_Manta_LocalLegend_Virus_Avatar</a>",
    "realName": "Glacial Erosion",
    "aim": "Debuff",
    "desc": "At the start of the turn, receives Ice DoT equal to a percentage of this unit's Max HP. This DoT is stackable.",
    "type": "Glacial Erosion",
    "perma": false
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1347964205\">Enemy_W4_Manta_LocalLegend_Charge</a>",
    "realName": "Yearning for a Shared Dance",
    "aim": "Other",
    "desc": "Uses \"Embrace From the Waves\" in every action. Dispelled when Weakness is broken.",
    "type": "Yearning for a Shared Dance",
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-643353377\">Enemy_W4_Manta_LocalLegend_Virus_Monster</a>",
    "realName": "Glacial Erosion",
    "aim": "Debuff",
    "desc": "At the start of the turn, receives Ice DoT equal to a percentage of this unit's Max HP. This DoT is stackable.",
    "type": "Glacial Erosion",
    "perma": true
  },
  {
    "name": "AvatarChange_W2_Mecha02_02_SheepStatus",
    "realName": "Phantom Illusion",
    "aim": "Other",
    "desc": "This target is in the Departed state. They cannot be designated as an ability target and will not appear in the Action Order.",
    "type": null,
    "perma": true
  },
  {
    "name": "AvatarChange_W2_Mecha02_02_PassiveAbility",
    "realName": "Soul Pact",
    "aim": "Other",
    "desc": "When receiving a killing blow, deals massive Ice DMG to all allies and dispels the \"Phantom Illusion\" state.",
    "type": null,
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"245518476\">Modifier_Monster_W4_DawnsEye_01_MaxHPAdd_PeakBattle</a>",
    "realName": "Flame-Chase",
    "aim": "Buff",
    "desc": "Max HP increases by #1[i].",
    "type": "Flame-Chase",
    "perma": true,
    "params": [
      "MDF_HPDelta",
      "MDF_HealAddRatio"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-681994307\">Enemy_W4_IronTombCorePart_Ability02_ChargeOnPart</a>",
    "realName": "Deliverance of Relief",
    "aim": "Other",
    "desc": "\"Anti-Creator\" will use \"Mire Not Within Caves\" in the next action. This state can be dispelled after receiving a killing blow.",
    "type": null,
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-1309969172\">Enemy_W4_IronTombCorePart_01_Ability02_ChargeOnPart</a>",
    "realName": "Rebellious",
    "aim": "Other",
    "desc": "\"Anti-Creator\" will use \"Yield Not to Tyranny\" in the next action. This state can be dispelled after receiving a killing blow.",
    "type": null,
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"187835282\">MModifier_W4_IronTombCore_Ability07_Charge</a>",
    "realName": "Resist and Destroy",
    "aim": "Other",
    "desc": "\"Anti-Creator\" enters Charging state, and will use \"Resist and Destroy\" in the next action. Dispel the Charging state by dealing a killing blow to \"Mythos\" and \"Logos.\"",
    "type": null,
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-453954106\">Enemy_W4_IronTombCorePart_DamageTransfer</a>",
    "realName": "Damage Resonance",
    "aim": "Other",
    "desc": "When the target takes damage, \"Anti-Creator\" will also take the same damage.",
    "type": null,
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1626881642\">Enemy_W4_IronTombCore_Main_P3_AvatarDamageAdded</a>",
    "realName": "Chronicled \"Love\"",
    "aim": "Buff",
    "desc": "Cyrene's \"Love\" greatly increases DMG dealt by the target.",
    "type": null,
    "perma": true
  },
  {
    "name": "Enemy_W4_Phainon_Part1",
    "realName": "May You End the Evernight",
    "aim": "Other",
    "desc": "Khaslana awaits your return.",
    "type": null,
    "perma": false
  },
  {
    "name": "Enemy_W4_Phainon_Part2",
    "realName": "May You Dispel the Sky's Gloom",
    "aim": "Other",
    "desc": "Khaslana looks forward to saving the world with you.",
    "type": null,
    "perma": false
  },
  {
    "name": "Enemy_W4_Phainon_Part3",
    "realName": "May You Become The First Blazing Sun",
    "aim": "Other",
    "desc": "Khaslana awaits the break of dawn.",
    "type": null,
    "perma": false
  },
  {
    "name": "<a class=\"gModGreen\" id=\"2031591014\">Enemy_W4_IronTombPhantom_Part1</a>",
    "realName": "ERROR: Security System Compromised",
    "aim": "Other",
    "desc": "\"FINAL PROCESS: ERROR LOG 1\"\\n\\nHapLotes405: Error Loading ▀█Transfer Loop█▄ Information Database Connection Timeout\\nApoRia432: Error Loading █▀Assertion Failed▄█ Detection System Unresponsive\\nHubRis504: Error Loading ▀▄Illegal Protocol█▄ Firewall Deactivated\\n\\nWARNING: Security system disrupted. Electrical signal anomaly detected.",
    "type": null,
    "perma": false
  },
  {
    "name": "<a class=\"gModGreen\" id=\"2014813395\">Enemy_W4_IronTombPhantom_Part2</a>",
    "realName": "ERROR: Repair System Compromised",
    "aim": "Other",
    "desc": "\"FINAL PROCESS: ERROR LOG 2\"\\n\\nKaLos618: Abnormal Loading ▀▄Throttle Failed▄█ Performance Overload\\nSkeMma720: Abnormal Loading █▀Malicious Code Injected▄█ System Out of Control\\nOreXis945: Abnormal Loading ▀█Parameters Distorted▄█ Massive Logic Errors\\n\\nWARNING: Repair system not responding. Internal attack detected.",
    "type": null,
    "perma": false
  },
  {
    "name": "<a class=\"gModGreen\" id=\"1998035776\">Enemy_W4_IronTombPhantom_Part3</a>",
    "realName": "ERROR: Main Process Compromised",
    "aim": "Other",
    "desc": "\"FINAL PROCESS: ERROR LOG 3\"\\n\\nPoleMos600: Abnormal Loading ██Data Wipe Attack▄▄ Copy Lost\\nEpieiKeia216: Abnormal Loading █▀Subprocess Frozen▄█ Unable to Terminate\\nEleOs252: Abnormal Loading ▀▄Stack Overflow█▄ Insufficient RAM\\n\\nWARNING: Calculation process terminated. Massive amount of corruption detected.",
    "type": null,
    "perma": false
  },
  {
    "name": "<a class=\"gModGreen\" id=\"2115479109\">Enemy_W4_IronTombPhantom_Part4</a>",
    "realName": "ERROR: Core Damaged",
    "aim": "Other",
    "desc": "\"FINAL PROCESS: ERROR LOG 4\"\\n\\n[Intrusion Variable] Dan Heng: Input SkoPeo365 Value ▀█Storage Anomaly█▄ Unable to Delete\\n[Intrusion Variable] March 7th: Input PhiLia093 Value▄ ▀System Time Rollback█▀ Infinite Loop\\nNeiKos496: Merge-Split Detected ▀▀█▄Core Damaged▄▄▄ Critical Process Terminated▄▄▄\\n\\nMAJOR WARNING: System crashed. Terminating operations.\\n\\nNotice: Detected PhiLia093 managing permissions.",
    "type": null,
    "perma": false
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-1372521903\">MModifier_W4_IronTombCore_TimeLock</a>",
    "realName": "Action Lock",
    "aim": "Debuff",
    "desc": "This target's action value will not change because of the end of any target's turn. This target can reduce the \"Unlock Value\" through action advance effects or Energy regeneration. When the \"Unlock Value\" is depleted, this state will be dispelled.",
    "type": "Action Lock",
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-2078801645\">Enemy_W4_IronTombCorePart_Break</a>",
    "realName": "Grave Wound",
    "aim": "Other",
    "desc": "Target cannot take action.",
    "type": "Grave Wound",
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-2081954099\">Enemy_W4_IronTombCore_BlackBlood</a>",
    "realName": "Descent into Chaos",
    "aim": "Debuff",
    "desc": "Maximum Restorable HP and Maximum Recoverable Skill Points are reduced. This effect can be weakened when \"Amphorean Hatred\" decreases.",
    "type": null,
    "perma": true
  },
  {
    "name": "Enemy_W4_Claymore_01_LocalLegend_AllMonst",
    "realName": "Fight in Unity",
    "aim": "Other",
    "desc": "DMG dealt increases by #1[i]% and DMG received reduces by #2[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_ShowValue1",
      "MDF_ShowValue2"
    ]
  },
  {
    "name": "<a class=\"gModGreen\" id=\"799207340\">Enemy_W4_Manta_LocalLegend_Virus_NightMare</a>",
    "realName": "Glacial Erosion",
    "aim": "Debuff",
    "desc": "At the start of the turn, receives Ice DoT equal to a percentage of this unit's Max HP. This DoT is stackable.",
    "type": "Glacial Erosion",
    "perma": true
  },
  {
    "name": "MModifier_W4_Griffin_LocalLegend_AllDamageTaken",
    "realName": "Vulnerability",
    "aim": "Debuff",
    "desc": "DMG taken increases by #1[i]%.",
    "type": null,
    "perma": true,
    "params": [
      "MDF_PropertyValue"
    ]
  },
  {
    "name": "Monster_W4_Claymore_01_LocalLegend_LockHP_Revive",
    "realName": "Indomitable Battle",
    "aim": "Other",
    "desc": "Restores a certain amount of HP and returns to battle during the next action.",
    "type": null,
    "perma": true
  },
  {
    "name": "Enemy_W3_Sam_01_EnhanceChargeCount",
    "realName": "Mortal Instinct",
    "aim": "Other",
    "desc": "\"Mortal Instinct\" stacked #1[i] time(s)",
    "type": "Mortal Instinct",
    "perma": true,
    "params": [
      "MDF_Layer"
    ]
  },
  {
    "name": "Enemy_W4_Claymore_01_LocalLegend_WhiteCurse_Active",
    "realName": "Fury Duel",
    "aim": "Other",
    "desc": "This target can only attack the \"Titankin\" and can only be attacked by the \"Titankin.\"",
    "type": null,
    "perma": true
  },
  {
    "name": "Enemy_W4_Claymore_01_LocalLegend_WhiteCurse_InActive",
    "realName": "Fury Duel",
    "aim": "Other",
    "desc": "This target can only attack the \"Titankin\" and can only be attacked by the \"Titankin.\"",
    "type": null,
    "perma": true
  },
  {
    "name": "MModifier_Monster_W4_Scholar_LocalLegend_BookController",
    "realName": "Proselytize",
    "aim": "Other",
    "desc": "Causes %DynamicTargetName to enter the \"Gleaned Instruction\" state.",
    "type": "Proselytize",
    "perma": true
  },
  {
    "name": "MModifier_Monster_W4_Scholar_LocalLegend_BookTarget",
    "realName": "Gleaned Instruction",
    "aim": "Buff",
    "desc": "SPD increases by #1[i]%.",
    "type": "Gleaned Instruction",
    "perma": true,
    "params": [
      "MDF_SpeedUpRatio"
    ]
  },
  {
    "name": "MModifier_Monster_W4_Scholar_LocalLegend_BookKiller",
    "realName": "Ignited Flame",
    "aim": "Buff",
    "desc": "SPD increases by #1[i]%.",
    "type": "Ignited Flame",
    "perma": false,
    "params": [
      "MDF_SpeedUpRatio"
    ]
  },
  {
    "name": "MModifier_Monster_W4_Claymore_LocalLegend_Ability03_Aim",
    "realName": "Charging",
    "aim": "Other",
    "desc": "Charging. Dispelled upon Weakness Break.",
    "type": "Charging",
    "perma": true
  },
  {
    "name": "MModifier_Monster_W4_Claymore_LocalLegend03_Ability03_Aim",
    "realName": "Charging",
    "aim": "Other",
    "desc": "Charging. Dispelled upon Weakness Break.",
    "type": "Charging",
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"968355900\">Monster_W4_Serpent_01_RLBoss_Ability06Choose</a>",
    "realName": "Hemotort Drench",
    "aim": "Other",
    "desc": "The character that has been selected by \"Name the Culprit.\"",
    "type": null,
    "perma": true
  },
  {
    "name": "<a class=\"gModGreen\" id=\"-1104059334\">Monster_W2_ArgentiTotem_02_IF_Shield_Modifier</a>",
    "realName": "Shield",
    "aim": "Buff",
    "desc": "Gains a Shield that can offset DMG.",
    "type": "Shield",
    "perma": true
  },
  {
    "name": "Enemy_W4_Scholar_01_LocalLegend_Stealth",
    "realName": "Lurking",
    "aim": "Buff",
    "desc": "Cannot become the primary target for abilities that require active selection. When Weakness is Broken or when all enemy units on the field aside from this unit are in \"Lurking\" state, dispels \"Lurking\" state for this unit. When there are no other enemy units on the battlefield, this unit dispels the \"Lurking\" state.",
    "type": "Lurking",
    "perma": false
  }
]